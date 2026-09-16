#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
import_calendar_msk.py — импорт «Неофициального сводного календаря» Москвы
(Google Sheets) в js/calendar-msk-2026.js. Python-аналог MskCalendar.java
(источник UNOFFICIAL_2026), но файл не перегенерируется целиком:
новые записи добавляются, существующие обновляются, остальное не трогается.

Запуск из корня сайта (скрипт лежит в tools/, календарь — в js/):

    python tools/import_calendar_msk.py         # записать изменения
    python tools/import_calendar_msk.py --dry   # только показать, что изменится

Колонки таблицы (первые две строки — заголовок):
    1  Дата                -> date
    3  Название            -> name  (+ owner O_KUNTSEVO для «Первенство О-Кунцево»;
                                     нестроковое значение — строка пропускается)
    4  Вид дист.           -> fmt, type (ЛГ -> SKI, рогейн -> ROGAINE,
                                          велокросс -> VELO, иначе ORIENT)
    5  Место проведения    -> place
    7  Координаты          -> coord
    8, 9, 10  Сайт/ВК/ТГ   -> link (первая ссылка), owner/start по домену
    11 Регистрация         -> reg (только если в ячейке есть ссылка)

Сопоставление с существующими записями (записи с owner MLKHT не участвуют):
та же дата и то же название (и место, если таких несколько); если название
поменялось — та же дата и то же место. Поля, которых нет в таблице
(res, photo и т. п.), и пустые ячейки существующие значения не стирают.

Зависимости: openpyxl.
"""

import argparse
import io
import os
import re
import shutil
import subprocess
import sys
import tempfile
import time
import urllib.parse
import urllib.request
from datetime import date, datetime

try:
    import openpyxl
except ImportError:
    sys.exit("Нужен openpyxl: pip install openpyxl")

SHEET_URL = ("https://docs.google.com/spreadsheets/d/"
             "1D0_ybH3A0TBZaC4sjPHkkthQrTiwUdudkz1VES1Ai7Y/edit?gid=257262853")
XLSX_EXPORT = "https://docs.google.com/spreadsheets/d/{id}/export?format=xlsx&gid={gid}"
DEFAULT_JS = os.path.join("js", "calendar-msk-2026.js")
HEADER_ROWS = 2
SKIP_OWNERS = {"MLKHT"}          # записи из других импортов не трогаем

FIELD_ORDER = ["id", "date", "name", "place", "type", "fmt",
               "coord", "link", "reg", "res", "owner", "start"]
SHEET_FIELDS = ["name", "place", "type", "fmt", "coord", "link", "reg", "owner", "start"]

UA = "Mozilla/5.0 (o-maps import_calendar_msk)"


# --------------------------------------------------------------------------
# Загрузка и разбор таблицы
# --------------------------------------------------------------------------

def sheet_ids(url):
    m = re.search(r"/spreadsheets/d/([A-Za-z0-9_-]+)", url)
    if not m:
        sys.exit(f"Не удалось извлечь ID таблицы из {url}")
    gid = re.search(r"[#?&]gid=(\d+)", url)
    return m.group(1), gid.group(1) if gid else "0"


def download_xlsx(url):
    sid, gid = sheet_ids(url)
    req = urllib.request.Request(XLSX_EXPORT.format(id=sid, gid=gid),
                                 headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read()


HYPERLINK_RE = re.compile(r'^=HYPERLINK\(\s*"([^"]*)"', re.I)


def url_value(cell):
    """Аналог Utils.getUrlValue: ссылка ячейки или сам текст, если это URL; иначе None."""
    if cell.hyperlink is not None and cell.hyperlink.target:
        return cell.hyperlink.target.strip()
    v = cell.value
    if isinstance(v, str):
        m = HYPERLINK_RE.match(v)
        if m:
            return m.group(1).strip()
        v = v.strip()
        if re.match(r"^https?://\S+$", v):
            return v
    return None


def is_empty(v):
    return v is None or (isinstance(v, str) and not v.strip())


def text_value(v):
    if isinstance(v, str):
        m = re.match(r'^=HYPERLINK\(\s*"[^"]*"\s*[,;]\s*"([^"]*)"', v, re.I)
        return (m.group(1) if m else v).strip()
    return str(v).strip()


def parse_date(v):
    if isinstance(v, datetime):
        return v.date().isoformat()
    if isinstance(v, date):
        return v.isoformat()
    s = str(v).strip()
    try:
        return datetime.strptime(s, "%d.%m.%Y").date().isoformat()
    except ValueError:
        return None


def parse_lat_lon(s):
    nums = re.findall(r"-?\d+(?:[.,]\d+)?", s.replace(", ", " ").replace(";", " "))
    nums = [float(x.replace(",", ".")) for x in nums]
    return nums[:2] if len(nums) >= 2 else None


def process_link(ev, url):
    if url is None:
        return
    if ev.get("link") is None:
        ev["link"] = url
    if ev.get("owner") is None:
        if "mosorient.ru" in url:
            ev["owner"] = "FSO_MSK"
        elif "orienteering.moscow" in url or "moscow_orienteering" in url:
            ev["owner"] = "CLEVER_MSK"
        elif "mosmeridian" in url:
            ev["owner"] = "SYTV_N"
        elif "sportident.ru/mk" in url:
            ev["start"] = "MSK_COMPASS"


def process_format(ev, s):
    ev["fmt"] = s
    if "ЛГ" in s:
        ev["type"] = "SKI"
    elif "рогейн" in s.lower():
        ev["type"] = "ROGAINE"
    elif "велокросс" in s:
        ev["type"] = "VELO"
    else:
        ev["type"] = "ORIENT"


def parse_sheet(xlsx):
    wb = openpyxl.load_workbook(io.BytesIO(xlsx))
    ws = wb.worksheets[0]
    events = []
    for row in ws.iter_rows(min_row=HEADER_ROWS + 1):
        cells = {c.column: c for c in row}
        if all(is_empty(c.value) for c in row):
            continue
        ev, skip = {}, False
        for col in sorted(cells):
            cell = cells[col]
            v = cell.value
            if is_empty(v):
                continue
            s = text_value(v)
            if col == 1:
                d = parse_date(v)
                if d is None:
                    print(f"  ! строка {cell.row}: не распознана дата «{s}»", file=sys.stderr)
                    skip = True
                else:
                    ev["date"] = d
            elif col == 3:
                ev["name"] = s
                if ev.get("owner") is None and "первенство о-кунцево" in s.lower():
                    ev["owner"] = "O_KUNTSEVO"
                if not isinstance(v, str):
                    skip = True
            elif col == 4:
                process_format(ev, s)
            elif col == 5:
                ev["place"] = s
            elif col == 7:
                c = parse_lat_lon(s)
                if c:
                    ev["coord"] = c
            elif col in (8, 9, 10):
                process_link(ev, url_value(cell))
            elif col == 11:
                u = url_value(cell)
                if u:
                    ev["reg"] = u
            if skip:
                break
        if skip or "date" not in ev:
            continue
        ev["_row"] = row[0].row
        events.append(ev)
    return events


# --------------------------------------------------------------------------
# Разбор JS-файла (без изменения форматирования нетронутых записей)
# --------------------------------------------------------------------------

def scan_string(s, i):
    """s[i] — кавычка; вернуть индекс за закрывающей кавычкой."""
    q = s[i]
    i += 1
    while i < len(s):
        c = s[i]
        if c == "\\":
            i += 2
            continue
        if c == q:
            return i + 1
        i += 1
    raise ValueError("незакрытая строка")


def find_array(text):
    m = re.search(r"\b(?:let|var|const)\s+\w+\s*=\s*\[", text)
    if not m:
        raise ValueError("не найден массив вида `let name = [`")
    start = m.end() - 1
    depth, i = 0, start
    while i < len(text):
        c = text[i]
        if c in "'\"`":
            i = scan_string(text, i)
            continue
        if c in "[{":
            depth += 1
        elif c in "]}":
            depth -= 1
            if depth == 0:
                return start, i
        i += 1
    raise ValueError("массив не закрыт")


def split_records(text, a0, a1):
    """[(start, end_exclusive)] для объектов верхнего уровня массива."""
    spans, depth, i, st = [], 0, a0 + 1, None
    while i < a1:
        c = text[i]
        if c in "'\"`":
            i = scan_string(text, i)
            continue
        if c == "/" and text[i:i + 2] == "//":
            i = text.find("\n", i)
            i = a1 if i < 0 else i
            continue
        if c == "/" and text[i:i + 2] == "/*":
            i = text.find("*/", i) + 2
            continue
        if c in "[{":
            if depth == 0 and c == "{":
                st = i
            depth += 1
        elif c in "]}":
            depth -= 1
            if depth == 0 and st is not None:
                spans.append((st, i + 1))
                st = None
        i += 1
    return spans


def parse_fields(block):
    """'{ k: v, ... }' -> [(key, raw_value)] с сохранением порядка."""
    body = block[1:-1]
    out, i, n = [], 0, len(body)
    while i < n:
        m = re.compile(r"\s*,?\s*([A-Za-z_$][\w$]*|'[^']*'|\"[^\"]*\")\s*:\s*").match(body, i)
        if not m:
            break
        key = m.group(1).strip("'\"")
        j = m.end()
        depth, k = 0, j
        while k < n:
            c = body[k]
            if c in "'\"`":
                k = scan_string(body, k)
                continue
            if c in "[{(":
                depth += 1
            elif c in "]})":
                depth -= 1
            elif c == "," and depth == 0:
                break
            k += 1
        out.append((key, body[j:k].strip()))
        i = k
    return out


def js_unquote(raw):
    raw = raw.strip()
    if len(raw) >= 2 and raw[0] in "'\"" and raw[-1] == raw[0]:
        return re.sub(r"\\(.)", r"\1", raw[1:-1])
    return None


def js_str(s):
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'


def js_num(x):
    return repr(round(float(x), 6)).rstrip("0").rstrip(".") if "." in repr(x) else repr(x)


def js_value(key, val, nl, ind):
    if key == "id":
        return "'" + val + "'"
    if key == "coord":
        inner = ind + "    "
        return "[" + nl + ("," + nl).join(inner + js_num(v) for v in val) + nl + ind + "]"
    if isinstance(val, list):
        return "[" + ", ".join(js_str(v) for v in val) + "]"
    return js_str(val)


def render_record(fields, nl, base="    "):
    """fields: [(key, raw_js_value)]"""
    ind = base + "    "
    lines = [ind + k + ": " + v for k, v in fields]
    return "{" + nl + ("," + nl).join(lines) + nl + base + "}"


def coord_of(raw):
    nums = re.findall(r"-?\d+(?:\.\d+)?", raw or "")
    return [float(x) for x in nums] if len(nums) == 2 else None


def read_text(path):
    data = open(path, "rb").read()
    for enc in ("utf-8-sig", "cp1251"):
        try:
            text = data.decode(enc)
            break
        except UnicodeDecodeError:
            continue
    bom = data.startswith(b"\xef\xbb\xbf")
    enc = "utf-8" if enc == "utf-8-sig" else enc
    nl = "\r\n" if b"\r\n" in data else "\n"
    return text, enc, bom, nl


def node_check(text):
    """Синтаксическая проверка через node (если установлен)."""
    node = shutil.which("node")
    if not node:
        return True
    a0, a1 = find_array(text)
    with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False, encoding="utf-8") as f:
        f.write("const a = " + text[a0:a1 + 1] + ";\n"
                "if (!Array.isArray(a)) throw new Error('not array');\n"
                "console.log(a.length);\n")
        tmp = f.name
    try:
        r = subprocess.run([node, tmp], capture_output=True, text=True, encoding="utf-8")
    finally:
        os.unlink(tmp)
    if r.returncode != 0:
        print("ОШИБКА node:\n" + r.stderr, file=sys.stderr)
        return False
    return True


# --------------------------------------------------------------------------
# Основная логика
# --------------------------------------------------------------------------

def find_match(ev, records, taken):
    cands = [r for r in records
             if r["date"] == ev["date"] and r["owner"] not in SKIP_OWNERS
             and id(r) not in taken]
    norm = lambda s: re.sub(r"\s+", " ", s).strip().lower() if s else s
    name, place = norm(ev.get("name")), norm(ev.get("place"))
    for test in (lambda r: norm(r["name"]) == name and norm(r["place"]) == place,
                 lambda r: norm(r["name"]) == name,
                 lambda r: place is not None and norm(r["place"]) == place):
        hit = [r for r in cands if test(r)]
        if hit:
            return hit[0]
    return None


def main():
    ap = argparse.ArgumentParser(description="Импорт сводного календаря Москвы в calendar-msk-2026.js")
    ap.add_argument("--js", default=DEFAULT_JS, help=f"JS-файл календаря (по умолч. {DEFAULT_JS})")
    ap.add_argument("--sheet", default=SHEET_URL, help="URL Google-таблицы (с gid)")
    ap.add_argument("--xlsx", help="взять таблицу из локального XLSX-файла")
    ap.add_argument("--dry", action="store_true",
                    help="dry-run: показать изменения, файл не записывать")
    ap.add_argument("--out", help="записать результат в другой файл вместо --js")
    args = ap.parse_args()

    if not os.path.isfile(args.js):
        sys.exit(f"Нет файла {args.js} (запускайте из папки, где лежат tools/ и js/)")

    xlsx = open(args.xlsx, "rb").read() if args.xlsx else download_xlsx(args.sheet)
    sheet = parse_sheet(xlsx)
    if not sheet:
        sys.exit("В таблице не найдено ни одной записи — формат изменился?")

    text, enc, bom, nl = read_text(args.js)
    a0, a1 = find_array(text)
    records = []
    for st, en in split_records(text, a0, a1):
        f = parse_fields(text[st:en])
        d = dict(f)
        dt = js_unquote(d.get("date", "")) or \
            (re.findall(r"\d{4}-\d{2}-\d{2}", d.get("date", "")) or [""])[0]
        records.append({"span": (st, en), "fields": f, "date": dt,
                        "id": js_unquote(d.get("id", "")) or "",
                        "name": js_unquote(d.get("name", "")),
                        "place": js_unquote(d.get("place", "")),
                        "owner": js_unquote(d.get("owner", "")) or ""})

    prefixes = [re.match(r"([A-Z]+)_\d{8}_\d+$", r["id"]) for r in records]
    prefixes = [m.group(1) for m in prefixes if m]
    prefix = max(set(prefixes), key=prefixes.count) if prefixes else "MSK"
    used_ids = {r["id"] for r in records}

    taken = set()
    replacements, inserts = [], []
    n_new = n_upd = 0
    ind = "        "

    for ev in sheet:
        match = find_match(ev, records, taken)
        if match:
            taken.add(id(match))
            fields = list(match["fields"])
            keys = [k for k, _ in fields]
            changed = False
            for k in SHEET_FIELDS:
                v = ev.get(k)
                if v is None:
                    continue
                raw = js_value(k, v, nl, ind)
                if k in keys:
                    i = keys.index(k)
                    old = fields[i][1]
                    same = (coord_of(old) == [round(x, 6) for x in v]) if k == "coord" \
                        else js_unquote(old) == v
                    if not same:
                        fields[i] = (k, raw)
                        changed = True
                else:
                    order = FIELD_ORDER.index(k)
                    pos = len(fields)
                    for i, kk in enumerate(keys):
                        if kk in FIELD_ORDER and FIELD_ORDER.index(kk) > order:
                            pos = i
                            break
                    fields.insert(pos, (k, raw))
                    keys.insert(pos, k)
                    changed = True
            if changed:
                st, en = match["span"]
                replacements.append((st, en, render_record(fields, nl)))
                n_upd += 1
                print(f"m {ev['date']} {ev.get('name', '')}")
            continue

        ymd = ev["date"].replace("-", "")
        k = 1
        while f"{prefix}_{ymd}_{k}" in used_ids:
            k += 1
        ev["id"] = f"{prefix}_{ymd}_{k}"
        used_ids.add(ev["id"])
        fields = [(key, js_value(key, ev[key], nl, ind))
                  for key in FIELD_ORDER if ev.get(key) is not None]
        block = render_record(fields, nl)

        after = None
        for r in records:
            if r["date"] and r["date"] <= ev["date"]:
                after = r
        if after is not None:
            inserts.append((after["span"][1], "," + nl + "    " + block, ev["date"], ev["_row"]))
        else:
            pos = records[0]["span"][0] if records else a0 + 1
            txt = block + "," + nl + "    " if records else "," + nl + "    " + block
            inserts.append((pos, txt, ev["date"], ev["_row"]))
        n_new += 1
        print(f"c {ev['date']} {ev.get('name', '')}")

    stats = (f"Прочитано из таблицы: {len(sheet)}, "
             f"создано: {n_new}, обновлено: {n_upd}")
    if not (n_new or n_upd):
        print(stats)
        return

    # правки применяем по порядку позиций; вставки в одну позицию — по дате и строке таблицы
    edits = [(st, en, t, "", 0) for st, en, t in replacements]
    edits += [(p, p, t, d, rw) for p, t, d, rw in inserts]
    edits.sort(key=lambda e: (e[0], e[1] != e[0], e[3], e[4]))
    if not records:  # пустой массив: убрать первую запятую, закрыть переводом строки
        edits[0] = (edits[0][0], edits[0][1], edits[0][2][1:]) + edits[0][3:]
        edits[-1] = (edits[-1][0], edits[-1][1], edits[-1][2] + nl) + edits[-1][3:]
    out, cur = [], 0
    for st, en, t, _, _ in edits:
        out.append(text[cur:st])
        out.append(t)
        cur = max(cur, en)
    out.append(text[cur:])
    new_text = "".join(out)

    if not node_check(new_text):
        sys.exit("Изменения НЕ записаны.")

    if args.dry:
        print(stats + " (dry-run: файл не изменён)")
        return

    data = new_text.encode(enc)
    if bom:
        data = b"\xef\xbb\xbf" + data
    with open(args.out or args.js, "wb") as f:
        f.write(data)
    print(stats)


if __name__ == "__main__":
    t0 = time.monotonic()
    try:
        main()
    finally:
        print(f"Время исполнения: {time.monotonic() - t0:.1f} с")
