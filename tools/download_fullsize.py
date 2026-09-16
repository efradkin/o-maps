# -*- coding: utf-8 -*-
"""
download_fullsize.py — перенос внешних полноразмеров карт на сайт o-maps.spb.ru.

Сканирует js/maps-*.js, находит в поле link внешние ссылки (http/https),
скачивает файлы в output/external/original_maps/<подпапка превью>/. Поле link не
изменяется; вместо этого в запись добавляется поле local_link с путями
'./external/original_maps/...' (строка, если файл один, массив — если несколько).
Изменённые копии js-файлов кладутся в output/js/, исходники не трогаются.

Именование:
  - один полноразмер у карты:      <имя_превью>_omaps.<ext>
  - несколько (массив link):       <имя_превью>_<N>_omaps.<ext>, N — позиция в массиве (с 1)
Расширение берётся из URL; если его нет — из Content-Type ответа.

Запуск из корня сайта (где лежат папки js и original_maps):
  python download_fullsize.py --dry-run     # только план, без сети
  python download_fullsize.py               # скачивание + правка js
Опции: --js-dir js --site-originals original_maps --out output
       --timeout 60 --retries 3

Зависимостей нет — только стандартная библиотека Python 3.
Скрипт идемпотентен: уже скачанные файлы в output пропускаются,
повторный запуск докачивает только недостающее. Неудачные ссылки
остаются в js как были и попадают в output/report.txt.
"""

import argparse
import os
import re
import shutil
import ssl
import time
import urllib.error
import urllib.request

UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/126.0 Safari/537.36")

CT_EXT = {
    "image/jpeg": "jpg", "image/jpg": "jpg", "image/pjpeg": "jpg",
    "image/png": "png", "image/gif": "gif", "image/webp": "webp",
    "image/bmp": "bmp", "image/tiff": "tif", "image/svg+xml": "svg",
    "application/pdf": "pdf",
}

EXT_RE = re.compile(r"\.([A-Za-z0-9]{2,5})$")
URL_RE = re.compile(r"https?://[^'\"]+")


# ---------------------------------------------------------------- js parsing

def iter_record_spans(text):
    """Ищет объекты { ... } верхнего уровня внутри массива, учитывая строки."""
    i, n = 0, len(text)
    depth = 0
    start = -1
    in_str = None
    while i < n:
        c = text[i]
        if in_str:
            if c == "\\":
                i += 2
                continue
            if c == in_str:
                in_str = None
        elif c in ("'", '"', "`"):
            in_str = c
        elif c == "{":
            if depth == 0:
                start = i
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0 and start >= 0:
                yield start, i + 1
                start = -1
        i += 1


def find_field_value_span(block, name):
    """Возвращает (start, end) значения поля name внутри блока (строка или массив)."""
    m = re.search(r"(^|[,{\s])" + name + r"\s*:\s*", block)
    if not m:
        return None
    i = m.end()
    if i >= len(block):
        return None
    c = block[i]
    if c in ("'", '"'):
        j = i + 1
        while j < len(block):
            if block[j] == "\\":
                j += 2
                continue
            if block[j] == c:
                return i, j + 1
            j += 1
        return None
    if c == "[":
        depth = 0
        in_str = None
        j = i
        while j < len(block):
            ch = block[j]
            if in_str:
                if ch == "\\":
                    j += 2
                    continue
                if ch == in_str:
                    in_str = None
            elif ch in ("'", '"'):
                in_str = ch
            elif ch == "[":
                depth += 1
            elif ch == "]":
                depth -= 1
                if depth == 0:
                    return i, j + 1
            j += 1
    return None


def get_string_field(block, name):
    span = find_field_value_span(block, name)
    if not span:
        return None
    val = block[span[0]:span[1]]
    if val[:1] in ("'", '"'):
        return val[1:-1]
    return None


# ---------------------------------------------------------------- naming

def preview_parts(url_value):
    """'./maps/rogaine/kkm/name.webp' -> ('rogaine/kkm', 'name')"""
    m = re.match(r"^\./maps/(.+)/([^/]+)\.[A-Za-z0-9]+$", url_value)
    if not m:
        return None, None
    return m.group(1), m.group(2)


def ext_from_url(u):
    path = u.split("?", 1)[0].split("#", 1)[0]
    seg = path.rsplit("/", 1)[-1]
    m = EXT_RE.search(seg)
    return m.group(1).lower() if m else None


# ---------------------------------------------------------------- download

def http_get(url, timeout):
    """GET через urllib. Возвращает (status, content_type, body_iter, insecure)."""
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    try:
        resp = urllib.request.urlopen(req, timeout=timeout)
        return resp, False
    except urllib.error.URLError as e:
        if isinstance(getattr(e, "reason", None), ssl.SSLError) or "SSL" in str(e):
            ctx = ssl._create_unverified_context()
            resp = urllib.request.urlopen(req, timeout=timeout, context=ctx)
            return resp, True
        raise


def download(url, dest, timeout, retries, report):
    tmp = dest + ".part"
    last_err = "?"
    for attempt in range(1, retries + 1):
        try:
            try:
                resp, insecure = http_get(url, timeout)
            except urllib.error.HTTPError as e:
                last_err = "HTTP %s" % e.code
                if e.code in (401, 403, 404, 410):
                    break
                time.sleep(2 * attempt)
                continue
            ct = (resp.headers.get("Content-Type") or "").split(";")[0].strip().lower()
            if ct == "text/html":
                last_err = "получена HTML-страница, а не файл"
                resp.close()
                break
            with open(tmp, "wb") as f:
                while True:
                    chunk = resp.read(65536)
                    if not chunk:
                        break
                    f.write(chunk)
            resp.close()
            if os.path.getsize(tmp) < 200:
                last_err = "слишком маленький ответ (%d байт)" % os.path.getsize(tmp)
                os.remove(tmp)
                break
            os.replace(tmp, dest)
            if insecure:
                report.append("  [!] %s: скачан без проверки SSL-сертификата" % url)
            return ct, None
        except Exception as e:
            last_err = "%s: %s" % (type(e).__name__, e)
            time.sleep(2 * attempt)
    if os.path.exists(tmp):
        try:
            os.remove(tmp)
        except OSError:
            pass
    return None, last_err


def insert_or_update_local_link(block, value):
    """Вставляет поле local_link после поля link (или обновляет существующее)."""
    # уже есть local_link — обновим значение
    lsp = find_field_value_span(block, "local_link")
    if lsp:
        return block[:lsp[0]] + value + block[lsp[1]:]
    # найдём поле link (не local_link) и конец его значения
    m = re.search(r"(^|[,{\s])link\s*:\s*", block)
    if not m:
        return None
    vsp = find_field_value_span(block, "link")
    if not vsp:
        return None
    # отступ строки, в которой находится link
    line_start = block.rfind("\n", 0, m.end()) + 1
    indent = re.match(r"[ \t]*", block[line_start:]).group(0)
    eol = "\r\n" if "\r\n" in block else "\n"
    insert_at = vsp[1]
    field = "local_link: " + value
    if insert_at < len(block) and block[insert_at] == ",":
        insert_at += 1
        return block[:insert_at] + eol + indent + field + "," + block[insert_at:]
    # после link нет запятой (link — последнее поле)
    return block[:vsp[1]] + "," + eol + indent + field + block[vsp[1]:]


# ---------------------------------------------------------------- main

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--js-dir", default="js")
    ap.add_argument("--site-externals", default="external_maps",
                    help="существующая папка external_maps сайта (для контроля коллизий имён)")
    ap.add_argument("--out", default="output")
    ap.add_argument("--timeout", type=int, default=60)
    ap.add_argument("--retries", type=int, default=3)
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    out_js = os.path.join(args.out, "js")
    out_maps = os.path.join(args.out, "external_maps")
    report = []
    failures = []
    planned = []          # (url, target_rel, dest_abs)
    assigned = {}         # target_rel -> url  (контроль коллизий)
    n_records_ext = 0

    js_files = sorted(f for f in os.listdir(args.js_dir)
                      if f.startswith("maps-") and f.endswith(".js"))

    # -------- проход 1: план --------
    plans_by_file = {}    # fname -> list of (record_span, [(url, target_rel or None)])
    for fname in js_files:
        path = os.path.join(args.js_dir, fname)
        with open(path, "r", encoding="utf-8", newline="") as f:
            text = f.read()
        file_plans = []
        for s, e in iter_record_spans(text):
            block = text[s:e]
            lspan = find_field_value_span(block, "link")
            if not lspan:
                continue
            lval = block[lspan[0]:lspan[1]]
            urls = URL_RE.findall(lval)
            if not urls:
                continue
            n_records_ext += 1
            pv = get_string_field(block, "url")
            sub, base = preview_parts(pv) if pv else (None, None)
            if not base:
                failures.append((urls[0], fname, "не удалось разобрать поле url превью: %r" % pv))
                continue
            # позиции элементов массива (1-based) для нумерации
            items = re.findall(r"'([^']*)'|\"([^\"]*)\"", lval)
            items = [a or b for a, b in items]
            pairs = []
            for idx, item in enumerate(items, 1):
                if not item.startswith(("http://", "https://")):
                    continue
                url = item
                if len(items) > 1:
                    stem = "%s_%d_omaps" % (base, idx)
                else:
                    stem = "%s_omaps" % base
                ext = ext_from_url(url)  # может быть None -> решим по Content-Type
                target_rel = "%s/%s.%s" % (sub, stem, ext) if ext else "%s/%s" % (sub, stem)
                # коллизии: с уже назначенными и с существующими файлами сайта
                def busy(rel):
                    if rel in assigned and assigned[rel] != url:
                        return True
                    site_path = os.path.join(args.site_externals, rel)
                    return os.path.exists(site_path)
                bump = 0
                rel = target_rel
                while ext and busy(rel):
                    bump += 1
                    rel = "%s/%s_dup%d.%s" % (sub, stem, bump, ext)
                if bump:
                    report.append("  [!] коллизия имени, использовано %s (для %s)" % (rel, url))
                assigned[rel] = url
                pairs.append([url, rel, ext])
            if pairs:
                file_plans.append((s, e, pairs))
        if file_plans:
            plans_by_file[fname] = (text, file_plans)

    total_urls = sum(len(p[2]) for v in plans_by_file.values() for p in v[1])
    print("Файлов maps-*.js со внешними ссылками: %d" % len(plans_by_file))
    print("Записей с внешними полноразмерами:     %d" % n_records_ext)
    print("Внешних ссылок к скачиванию:           %d" % total_urls)

    if args.dry_run:
        print("\n--- ПЛАН (dry-run) ---")
        for fname, (_, fp) in sorted(plans_by_file.items()):
            print("\n%s:" % fname)
            for _, _, pairs in fp:
                for url, rel, ext in pairs:
                    note = "" if ext else "   (расширение по Content-Type)"
                    print("  %s\n    -> external/original_maps/%s%s" % (url, rel, note))
        if failures:
            print("\n--- ПРОБЛЕМЫ РАЗБОРА ---")
            for url, fname, err in failures:
                print("  [%s] %s\n      %s" % (fname, url, err))
        return

    os.makedirs(out_js, exist_ok=True)

    # -------- проход 2: скачивание --------
    ok_pairs = {}      # (url, planned_rel) -> final_rel (успешно получен)
    url_cache = {}     # url -> абсолютный путь уже скачанной копии (для дублей)
    done = 0
    for fname, (_, fp) in sorted(plans_by_file.items()):
        for _, _, pairs in fp:
            for url, rel, ext in pairs:
                done += 1
                dest = os.path.join(out_maps, rel) if ext else None
                if ext and os.path.exists(dest) and os.path.getsize(dest) > 0:
                    print("[%d/%d] есть, пропуск: %s" % (done, total_urls, rel))
                    ok_pairs[(url, rel)] = rel
                    url_cache.setdefault(url, dest)
                    continue
                if url in url_cache and ext:
                    # тот же URL уже скачан для другой записи — копируем
                    os.makedirs(os.path.dirname(dest), exist_ok=True)
                    shutil.copyfile(url_cache[url], dest)
                    print("[%d/%d] дубль URL, копия: %s" % (done, total_urls, rel))
                    ok_pairs[(url, rel)] = rel
                    continue
                print("[%d/%d] %s" % (done, total_urls, url))
                tmp_rel = rel if ext else rel + ".tmpext"
                dest = os.path.join(out_maps, tmp_rel)
                os.makedirs(os.path.dirname(dest), exist_ok=True)
                ct, err = download(url, dest, args.timeout, args.retries, report)
                if err:
                    failures.append((url, fname, err))
                    print("      ОШИБКА: %s" % err)
                    continue
                final_rel = rel
                if not ext:
                    ext2 = CT_EXT.get(ct)
                    if not ext2:
                        ext2 = "bin"
                        report.append("  [!] %s: неизвестный Content-Type %r, расширение .bin" % (url, ct))
                    final_rel = rel + "." + ext2
                    final = os.path.join(out_maps, final_rel)
                    os.replace(dest, final)
                    dest = final
                ok_pairs[(url, rel)] = final_rel
                url_cache[url] = dest
                time.sleep(0.4)  # вежливая пауза

    # -------- проход 3: правка js (добавление local_link) --------
    changed_files = []
    for fname, (text, fp) in sorted(plans_by_file.items()):
        new_text = text
        # правим с конца, чтобы не сбивать смещения
        for s, e, pairs in sorted(fp, key=lambda x: -x[0]):
            block = new_text[s:e]
            locals_ = ["./external/original_maps/" + ok_pairs[(u, r)]
                       for u, r, _ in pairs if (u, r) in ok_pairs]
            if not locals_:
                continue
            if len(locals_) == 1:
                value = "'%s'" % locals_[0]
            else:
                value = "[" + ",".join("'%s'" % p for p in locals_) + "]"
            nb = insert_or_update_local_link(block, value)
            if nb and nb != block:
                new_text = new_text[:s] + nb + new_text[e:]
        if new_text != text:
            with open(os.path.join(out_js, fname), "w", encoding="utf-8", newline="") as f:
                f.write(new_text)
            changed_files.append(fname)

    # -------- отчёт --------
    lines = []
    lines.append("Скачано успешно: %d из %d" % (len(ok_pairs), total_urls))
    lines.append("Изменённые js-файлы (%d): %s" % (len(changed_files), ", ".join(changed_files)))
    if failures:
        lines.append("\nНЕ СКАЧАЛОСЬ (%d) — ссылки оставлены как были:" % len(failures))
        for url, fname, err in failures:
            lines.append("  [%s] %s\n      %s" % (fname, url, err))
    if report:
        lines.append("\nЗамечания:")
        lines.extend(report)
    txt = "\n".join(lines)
    with open(os.path.join(args.out, "report.txt"), "w", encoding="utf-8") as f:
        f.write(txt + "\n")
    print("\n" + txt)
    print("\nГотово. Результат в папке %s: external/original_maps/ (новые файлы), js/ (изменённые скрипты), report.txt" % args.out)


if __name__ == "__main__":
    main()
