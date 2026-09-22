#!/usr/bin/env python3
"""
install_seo_meta.py — подключает js/seo-meta.js во все страницы сайта.

Тег вставляется последней строкой перед </body> — там, где уже подключены
utils.js и файлы данных (main.js, sheet.js, map-info.js и т. п.), то есть
к моменту DOMContentLoaded getMapForName() и authors уже доступны.

Обрабатываются *.html в корне, help/ и integration/ (без рекурсии).
Файлы без </body> и служебные страницы пропускаются.

Тег вставляется без ?v= — номер версии проставляет bump_js_version.py
вместе с остальными скриптами. Повторный запуск ничего не меняет: если
тег уже есть (с любым ?v=), файл не трогается.

--remove снимает тег со всех страниц (вместе с ?v=), возвращая файлы
в исходное состояние.

Правки на месте в --src, -n/--dry-run для предпросмотра, --zip пакует
изменённые файлы. Кодировка (UTF-8/cp1251, BOM) и переводы строк
сохраняются.

Примеры:
  python tools/install_seo_meta.py --src . -n
  python tools/install_seo_meta.py --src .
  python tools/install_seo_meta.py --src . --remove

После установки: python tools/bump_js_version.py
"""
import argparse
import os
import re
import sys
import zipfile

SCAN_DIRS = ["", "help", "integration"]
EXCLUDE = {"theme-preview.html"}

SCRIPT_SRC = "js/seo-meta.js"
TAG_RE = re.compile(
    r"[ \t]*<script[^>]+src=[\"'](?:\.\./)*js/seo-meta\.js[^\"']*[\"'][^>]*>\s*</script>\r?\n?")
LAST_SCRIPT_RE = re.compile(r"^([ \t]*)<script\s+src=", re.M)
BODY_END_RE = re.compile(r"([ \t]*)</body>", re.I)


BOM = b"\xef\xbb\xbf"


def read(path):
    """Возвращает (текст, кодировка, был ли BOM). BOM определяется отдельно,
    чтобы при записи не добавить его файлу, где его не было."""
    raw = open(path, "rb").read()
    has_bom = raw.startswith(BOM)
    if has_bom:
        raw = raw[len(BOM):]
    for enc in ("utf-8", "cp1251"):
        try:
            return raw.decode(enc), enc, has_bom
        except UnicodeDecodeError:
            pass
    return None, None, False


def write(path, text, enc, has_bom):
    data = text.encode(enc)
    open(path, "wb").write(BOM + data if has_bom else data)


def indent_for(text):
    matches = LAST_SCRIPT_RE.findall(text)
    return matches[-1] if matches else "    "


def newline_of(text):
    return "\r\n" if "\r\n" in text else "\n"


def process(text, remove, depth):
    if remove:
        return TAG_RE.sub("", text)

    # Тег уже стоит — не трогаем файл, чтобы не затереть проставленный
    # bump_js_version.py номер ?v=.
    if TAG_RE.search(text):
        return text

    cleaned = text
    m = BODY_END_RE.search(cleaned)
    if not m:
        return None

    nl = newline_of(cleaned)
    # Без ?v= — номер версии проставляет bump_js_version.py вместе
    # с остальными скриптами, чтобы номера не разъезжались.
    src = "../" * depth + SCRIPT_SRC
    tag = '%s<script src="%s"></script>%s' % (indent_for(cleaned), src, nl)
    return cleaned[:m.start()] + tag + cleaned[m.start():]


def collect(src):
    files = []
    for d in SCAN_DIRS:
        folder = os.path.join(src, d) if d else src
        if not os.path.isdir(folder):
            continue
        for name in sorted(os.listdir(folder)):
            if not name.lower().endswith(".html"):
                continue
            rel = f"{d}/{name}" if d else name
            if rel in EXCLUDE:
                continue
            if os.path.isfile(os.path.join(src, rel)):
                files.append(rel)
    return files


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--src", default=".", help="корень сайта (по умолчанию .)")
    ap.add_argument("-n", "--dry-run", action="store_true", help="только показать")
    ap.add_argument("--remove", action="store_true", help="убрать тег из всех страниц")
    ap.add_argument("--zip", nargs="?", const="o-maps-seo-meta.zip", metavar="FILE",
                    help="упаковать изменённые файлы")
    args = ap.parse_args()

    src = os.path.abspath(args.src)
    if not os.path.isfile(os.path.join(src, "index.html")):
        sys.exit(f"В {src} нет index.html — это точно корень сайта?")
    if not args.remove and not os.path.isfile(os.path.join(src, SCRIPT_SRC)):
        sys.exit(f"Нет файла {SCRIPT_SRC} — положите его перед подключением.")

    files = collect(src)

    changed, skipped, nobody = [], 0, []
    for rel in files:
        path = os.path.join(src, rel)
        text, enc, has_bom = read(path)
        if text is None:
            nobody.append(rel + " (кодировка не распознана)")
            continue
        updated = process(text, args.remove, rel.count("/"))
        if updated is None:
            nobody.append(rel + " (нет </body>)")
            continue
        if updated == text:
            skipped += 1
            continue
        changed.append(rel)
        if not args.dry_run:
            write(path, updated, enc, has_bom)

    verb = "будут изменены" if args.dry_run else "изменены"
    print(f"Страниц {verb}: {len(changed)}, без изменений: {skipped}")
    for rel in changed:
        print("  " + rel)
    if nobody:
        print("Пропущены: " + ", ".join(nobody))

    if args.zip and changed and not args.dry_run:
        with zipfile.ZipFile(args.zip, "w", zipfile.ZIP_DEFLATED) as z:
            for rel in changed:
                z.write(os.path.join(src, rel), rel)
        print(f"Архив: {os.path.abspath(args.zip)}")


if __name__ == "__main__":
    main()
