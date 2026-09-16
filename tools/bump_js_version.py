#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
bump_js_version.py

Просматривает HTML-файлы в текущей папке и в подпапках help/ и integration/,
находит подключения вида

    <script src="js/file.js"></script>
    <script src="../js/file.js?v=7"></script>

и увеличивает на 1 значение параметра v в адресе. Если параметра v нет,
подставляется v=11.

Исключаются скрипты из подпапки ext:  js/ext/file.js, ../js/ext/file.js

По умолчанию файлы правятся на месте. Чтобы вместо этого записать результат
в отдельную папку с сохранением структуры каталогов — ключ --out DIR.
Ключ --backup сохраняет копии оригиналов рядом (file.html.bak).

Примеры:
    python3 bump_js_version.py --dry-run
    python3 bump_js_version.py
    python3 bump_js_version.py --backup
    python3 bump_js_version.py --out output
    python3 bump_js_version.py --set 20 --dry-run
"""

import argparse
import os
import re
import sys
from pathlib import Path

# --- настройки по умолчанию -------------------------------------------------

SUBDIRS = ["help", "integration"]      # какие подпапки просматривать
HTML_EXT = {".html", ".htm"}
DEFAULT_V = 11                         # значение v, если параметра не было
ENCODINGS = ["utf-8-sig", "utf-8", "cp1251"]

# --- разбор тегов -----------------------------------------------------------

# <script ... src="[../]*js/<не ext>/...js[?query]" ...>
SCRIPT_SRC_RE = re.compile(
    r'(?P<head><script\b[^>]*?\bsrc\s*=\s*)'
    r'(?P<q>["\'])'
    r'(?P<path>(?:\.\./)*js/(?!ext/)[^"\'>?\s]+?\.js)'
    r'(?P<query>\?[^"\'>\s]*)?'
    r'(?P=q)',
    re.IGNORECASE,
)

PARAM_SPLIT_RE = re.compile(r'&amp;|&', re.IGNORECASE)


def bump_query(query, default_v, forced=None):
    """
    query: строка вида '?v=7' / '?a=1&amp;v=7' / None
    Возвращает (новая_query, old_value, new_value, warning)
    """
    sep = '&'
    if query and '&amp;' in query.lower():
        sep = '&amp;'

    parts = []
    if query:
        body = query[1:]
        if body:
            parts = [p for p in PARAM_SPLIT_RE.split(body)]

    warning = None
    old_value = None
    new_value = None

    for i, p in enumerate(parts):
        name = p.split('=', 1)[0]
        if name.lower() == 'v':
            old_value = p.split('=', 1)[1] if '=' in p else ''
            if forced is not None:
                new_value = forced
            elif old_value.isdigit():
                new_value = int(old_value) + 1
            else:
                new_value = default_v
                warning = "нечисловое значение v=%r, заменено на %d" % (old_value, default_v)
            parts[i] = 'v=%d' % new_value
            break
    else:
        new_value = forced if forced is not None else default_v
        parts.append('v=%d' % new_value)

    return '?' + sep.join(parts), old_value, new_value, warning


def process_text(text, default_v, forced, changes, rel_name):
    """Заменяет все подходящие src=... и накапливает список изменений."""

    def repl(m):
        path = m.group('path')
        query = m.group('query')
        new_query, old_v, new_v, warning = bump_query(query, default_v, forced)
        changes.append({
            'file': rel_name,
            'path': path,
            'old': old_v,
            'new': new_v,
            'warning': warning,
        })
        q = m.group('q')
        return '%s%s%s%s%s' % (m.group('head'), q, path, new_query, q)

    return SCRIPT_SRC_RE.sub(repl, text)


# --- работа с файлами -------------------------------------------------------

def read_text(path):
    """
    Читает файл, возвращает (text, encoding_для_записи).
    BOM сохраняется только если он был в оригинале.
    newline='' сохраняет CRLF/LF как есть.
    """
    raw = path.read_bytes()
    has_bom = raw.startswith(b'\xef\xbb\xbf')
    last_err = None
    for enc in ENCODINGS:
        try:
            with open(path, 'r', encoding=enc, newline='') as f:
                text = f.read()
            if enc in ('utf-8-sig', 'utf-8'):
                enc = 'utf-8-sig' if has_bom else 'utf-8'
            return text, enc
        except UnicodeDecodeError as e:
            last_err = e
    raise last_err


def write_text(path, text, encoding):
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, 'w', encoding=encoding, newline='') as f:
        f.write(text)


def collect_files(root, subdirs, recursive):
    files = []
    for p in sorted(root.iterdir()):
        if p.is_file() and p.suffix.lower() in HTML_EXT:
            files.append(p)
    for sub in subdirs:
        d = root / sub
        if not d.is_dir():
            continue
        it = d.rglob('*') if recursive else d.iterdir()
        for p in sorted(it):
            if p.is_file() and p.suffix.lower() in HTML_EXT:
                files.append(p)
    return files


def main():
    ap = argparse.ArgumentParser(
        description='Инкремент параметра v у подключаемых js-скриптов в HTML.')
    ap.add_argument('--root', default='.', help='корневая папка (по умолчанию текущая)')
    ap.add_argument('--out', default=None, metavar='DIR',
                    help='записать результат в папку DIR вместо правки на месте')
    ap.add_argument('--in-place', action='store_true',
                    help='править файлы на месте (режим по умолчанию, ключ оставлен для явности)')
    ap.add_argument('--backup', action='store_true',
                    help='при правке на месте сохранять копию оригинала как file.html.bak')
    ap.add_argument('--dry-run', action='store_true', help='только показать, ничего не писать')
    ap.add_argument('--set', type=int, default=None, metavar='N',
                    help='принудительно выставить v=N вместо инкремента')
    ap.add_argument('--default-v', type=int, default=DEFAULT_V,
                    help='значение v, если параметра не было (по умолчанию %d)' % DEFAULT_V)
    ap.add_argument('--subdirs', nargs='*', default=SUBDIRS,
                    help='подпапки для обхода (по умолчанию: %s)' % ' '.join(SUBDIRS))
    ap.add_argument('--recursive', action='store_true',
                    help='обходить подпапки рекурсивно (по умолчанию — только верхний уровень)')
    ap.add_argument('--quiet', action='store_true', help='не печатать список каждой замены')
    args = ap.parse_args()

    root = Path(args.root).resolve()
    if not root.is_dir():
        print('Нет такой папки: %s' % root, file=sys.stderr)
        return 2

    if args.out and args.in_place:
        print('Ключи --out и --in-place несовместимы.', file=sys.stderr)
        return 2

    in_place = args.out is None
    out_root = None if in_place else Path(args.out).resolve()
    files = collect_files(root, args.subdirs, args.recursive)

    if not files:
        print('HTML-файлы не найдены.')
        return 0

    all_changes = []
    changed_files = []
    skipped = []

    for path in files:
        rel = path.relative_to(root)
        try:
            text, enc = read_text(path)
        except UnicodeDecodeError:
            skipped.append((rel, 'не удалось определить кодировку'))
            continue

        changes = []
        new_text = process_text(text, args.default_v, args.set, changes, str(rel))

        if not changes or new_text == text:
            continue

        all_changes.extend(changes)
        changed_files.append(rel)

        if args.dry_run:
            continue

        if in_place:
            if args.backup:
                backup = path.with_suffix(path.suffix + '.bak')
                backup.write_bytes(path.read_bytes())
            target = path
        else:
            target = out_root / rel
            if target.resolve() == path:
                skipped.append((rel, 'путь назначения совпадает с исходным'))
                continue
        write_text(target, new_text, enc)

    # --- отчёт -------------------------------------------------------------
    if not args.quiet:
        cur_file = None
        for c in all_changes:
            if c['file'] != cur_file:
                cur_file = c['file']
                print('\n%s' % cur_file)
            old = c['old'] if c['old'] is not None else '—'
            line = '    %-40s v: %s -> %s' % (c['path'], old, c['new'])
            if c['warning']:
                line += '   [!] %s' % c['warning']
            print(line)

    print('\n' + '-' * 60)
    print('Просмотрено HTML-файлов : %d' % len(files))
    print('Изменено файлов         : %d' % len(changed_files))
    print('Изменено подключений    : %d' % len(all_changes))
    if skipped:
        print('Пропущено файлов        : %d' % len(skipped))
        for rel, why in skipped:
            print('    %s — %s' % (rel, why))
    if args.dry_run:
        print('Режим --dry-run: файлы не записаны.')
    elif in_place:
        print('Файлы изменены на месте%s.' % (' (копии оригиналов — *.bak)' if args.backup else ''))
    else:
        print('Результат записан в: %s' % out_root)
    return 0


if __name__ == '__main__':
    sys.exit(main())
