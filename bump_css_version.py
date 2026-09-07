#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
bump_css_version.py — увеличение параметра ?v= у подключённых CSS в HTML-файлах.

Просматривает:
  * все *.html / *.htm в корневой папке (по умолчанию — текущей),
  * рекурсивно подпапки help/ и integration/.

Находит теги <link ...>, ведущие на CSS (rel=stylesheet или href с .css),
и у тех, где в адресе есть параметр v, увеличивает его значение на 1.

По умолчанию сразу вносит изменения в файлы.
Ключ --dry-run (-n) — только показать, что будет изменено, ничего не записывая.

Примеры:
    python3 bump_css_version.py                    # применить (+1)
    python3 bump_css_version.py --dry-run          # показать, что будет изменено
    python3 bump_css_version.py --step 2           # увеличить на 2
    python3 bump_css_version.py --set 15           # выставить v=15 везде
    python3 bump_css_version.py --backup           # с созданием .bak
    python3 bump_css_version.py --root /path/to/site --ext css,js
"""

import argparse
import re
import sys
from pathlib import Path

# ---------------------------------------------------------------- регулярки

LINK_RE = re.compile(r'<link\b[^>]*>', re.IGNORECASE)

# href="..." | href='...' | href=... (без кавычек)
HREF_RE = re.compile(
    r'''(href\s*=\s*)(?:(["'])(?P<q>.*?)\2|(?P<nq>[^\s>"']+))''',
    re.IGNORECASE | re.DOTALL,
)

REL_RE = re.compile(r'''rel\s*=\s*(?:(["'])(.*?)\1|([^\s>"']+))''', re.IGNORECASE)

SCRIPT_RE = re.compile(r'<script\b[^>]*>', re.IGNORECASE)
SRC_RE = re.compile(
    r'''(src\s*=\s*)(?:(["'])(?P<q>.*?)\2|(?P<nq>[^\s>"']+))''',
    re.IGNORECASE | re.DOTALL,
)

# Параметр v в query-строке. &amp; должен идти в альтернативе первым.
VER_RE = re.compile(r'(?P<sep>\?|&amp;|&)v=(?P<val>[^&\s"\'>#]*)', re.IGNORECASE)

DEFAULT_SUBDIRS = ('help', 'integration')
ENCODINGS = ('utf-8-sig', 'utf-8', 'cp1251')


# ---------------------------------------------------------------- утилиты

def read_text(path):
    """Читает файл, возвращает (текст, имя_кодировки). Переводы строк не трогаются."""
    data = path.read_bytes()
    if data.startswith(b'\xef\xbb\xbf'):
        return data.decode('utf-8-sig'), 'utf-8-sig'
    for enc in ENCODINGS[1:]:
        try:
            return data.decode(enc), enc
        except UnicodeDecodeError:
            continue
    raise UnicodeDecodeError('unknown', b'', 0, 1, 'не удалось определить кодировку')


def write_text(path, text, encoding):
    """Пишет как есть, без нормализации переводов строк (newline='')."""
    with open(path, 'w', encoding=encoding, newline='') as f:
        f.write(text)


def is_stylesheet(tag, extensions):
    """Похож ли тег <link> на подключение таблицы стилей."""
    m = REL_RE.search(tag)
    if m:
        rel = (m.group(2) or m.group(3) or '').lower()
        if 'stylesheet' in rel:
            return True
        # icon, preconnect, alternate и т.п. — не наш случай
        if rel and 'preload' not in rel:
            return False

    m = HREF_RE.search(tag)
    if not m:
        return False
    href = m.group('q') if m.group('q') is not None else (m.group('nq') or '')
    path_part = href.split('?', 1)[0].split('#', 1)[0].lower()
    return any(path_part.endswith('.' + e) for e in extensions)


def bump_href(href, step, set_to, warnings, where):
    """Возвращает (новый_href, [(старое_значение, новое_значение), ...])."""
    changes = []

    def repl(m):
        val = m.group('val')
        if not val.isdigit():
            warnings.append(f'{where}: параметр v="{val}" не число — пропущен ({href})')
            return m.group(0)
        new = set_to if set_to is not None else int(val) + step
        if new < 0:
            warnings.append(f'{where}: v={val} → {new} отрицательное — пропущено')
            return m.group(0)
        changes.append((val, str(new)))
        return f'{m.group("sep")}v={new}'

    return VER_RE.sub(repl, href), changes


def process_text(text, step, set_to, extensions, warnings, where, scripts=False):
    """Обрабатывает содержимое HTML. Возвращает (новый_текст, список_изменений)."""
    all_changes = []

    def make_attr_handler(attr_re):
        def on_attr(am):
            url = am.group('q') if am.group('q') is not None else am.group('nq')
            new_url, changes = bump_href(url, step, set_to, warnings, where)
            if not changes:
                return am.group(0)
            for old, new in changes:
                all_changes.append((url, new_url, old, new))
            if am.group('q') is not None:
                return f'{am.group(1)}{am.group(2)}{new_url}{am.group(2)}'
            return f'{am.group(1)}{new_url}'
        return on_attr

    def on_link(m):
        tag = m.group(0)
        if not is_stylesheet(tag, extensions):
            return tag
        return HREF_RE.sub(make_attr_handler(HREF_RE), tag)

    result = LINK_RE.sub(on_link, text)

    if scripts:
        def on_script(m):
            return SRC_RE.sub(make_attr_handler(SRC_RE), m.group(0))
        result = SCRIPT_RE.sub(on_script, result)

    return result, all_changes


def collect_files(root, subdirs, recursive_root):
    """Список HTML-файлов: корень + указанные подпапки (рекурсивно)."""
    seen, files = set(), []

    def add(p):
        rp = p.resolve()
        if rp not in seen and p.is_file():
            seen.add(rp)
            files.append(p)

    patterns = ('*.html', '*.htm')
    globber = root.rglob if recursive_root else root.glob
    for pat in patterns:
        for p in sorted(globber(pat)):
            add(p)

    if not recursive_root:
        for sub in subdirs:
            d = root / sub
            if d.is_dir():
                for pat in patterns:
                    for p in sorted(d.rglob(pat)):
                        add(p)

    return files


# ---------------------------------------------------------------- main

def main():
    ap = argparse.ArgumentParser(
        description='Увеличивает параметр ?v= у подключённых CSS в HTML-файлах.')
    ap.add_argument('--root', default='.', help='корневая папка (по умолчанию — текущая)')
    ap.add_argument('--subdirs', default=','.join(DEFAULT_SUBDIRS),
                    help='подпапки для обхода через запятую (по умолчанию: help,integration)')
    ap.add_argument('-r', '--recursive', action='store_true',
                    help='обходить все подпапки, а не только указанные')
    ap.add_argument('--ext', default='css',
                    help='расширения в <link> через запятую (по умолчанию: css)')
    ap.add_argument('--scripts', action='store_true',
                    help='обрабатывать также <script src="...?v=N">')
    ap.add_argument('--step', type=int, default=1, help='на сколько увеличить (по умолчанию 1)')
    ap.add_argument('--set', dest='set_to', type=int, default=None,
                    help='выставить конкретное значение v вместо инкремента')
    ap.add_argument('-n', '--dry-run', action='store_true',
                    help='только показать изменения, ничего не записывать')
    ap.add_argument('--backup', action='store_true', help='сохранять копии *.bak')
    ap.add_argument('-q', '--quiet', action='store_true', help='только итоговая сводка')
    args = ap.parse_args()

    root = Path(args.root)
    if not root.is_dir():
        print(f'Папка не найдена: {root}', file=sys.stderr)
        return 2

    subdirs = [s.strip() for s in args.subdirs.split(',') if s.strip()]
    extensions = [e.strip().lower().lstrip('.') for e in args.ext.split(',') if e.strip()]

    files = collect_files(root, subdirs, args.recursive)
    if not files:
        print('HTML-файлы не найдены.')
        return 0

    warnings = []
    changed_files = 0
    total_links = 0
    mode = 'ПРОСМОТР (dry-run), файлы не изменяются' if args.dry_run else 'ЗАПИСЬ'
    print(f'Режим: {mode}. Файлов найдено: {len(files)}\n')

    for path in files:
        rel = path.relative_to(root) if path.is_relative_to(root) else path
        try:
            text, enc = read_text(path)
        except (UnicodeDecodeError, OSError) as e:
            warnings.append(f'{rel}: не прочитан ({e})')
            continue

        new_text, changes = process_text(text, args.step, args.set_to,
                                         extensions, warnings, str(rel),
                                         scripts=args.scripts)
        if not changes:
            continue

        changed_files += 1
        total_links += len(changes)

        if not args.quiet:
            print(f'{rel}  [{enc}]')
            for old_href, new_href, old_v, new_v in changes:
                print(f'    v={old_v} → v={new_v}   {old_href}')
            print()

        if not args.dry_run:
            try:
                if args.backup:
                    bak = path.with_suffix(path.suffix + '.bak')
                    bak.write_bytes(path.read_bytes())
                write_text(path, new_text, enc)
            except OSError as e:
                warnings.append(f'{rel}: не записан ({e})')
                changed_files -= 1

    print('-' * 60)
    verb = 'Будет изменено' if args.dry_run else 'Изменено'
    print(f'{verb} ссылок: {total_links} в {changed_files} файл(ах) из {len(files)}.')
    if warnings:
        print(f'\nПредупреждения ({len(warnings)}):')
        for w in warnings:
            print('  ! ' + w)
    if args.dry_run and total_links:
        print('\nЭто был просмотр. Запустите без --dry-run, чтобы записать изменения.')
    return 0


if __name__ == '__main__':
    sys.exit(main())
