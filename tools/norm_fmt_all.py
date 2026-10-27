#!/usr/bin/env python3
"""Разовый скрипт: привести уже вписанные fmt в js/calendar-*.js к виду norm_fmt из sync_calendar.py
(«эстафеты 2х» вместо «2-х этапные эстафеты», «выбор» вместо «по выбору», именительный падеж,
строчная первая буква), у рогейнов (type ROGAINE) — только часы (rogaine_fmt): «рогейн 4 часа» -> «4».

  python3 tools/norm_fmt_all.py            показать, что изменится
  python3 tools/norm_fmt_all.py --apply    записать
  python3 tools/norm_fmt_all.py --apply js/calendar-2005.js   только эти файлы

Поля с «// !», закомментированные строки и calendar-ski-*.js (если файлы не указаны) не трогаются;
кодировка и переводы строк сохраняются.
"""
import glob
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
sys.dont_write_bytecode = True
from sync_calendar import norm_fmt, rogaine_fmt  # noqa: E402

FMT = re.compile(r"^(\s*fmt:\s*')((?:[^'\\]|\\.)*)(')", re.M)


def main(argv):
    apply = '--apply' in argv
    files = [a for a in argv if not a.startswith('-')]
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    files = files or sorted(f for f in glob.glob(os.path.join(root, 'js', 'calendar-*.js'))
                            if not os.path.basename(f).startswith('calendar-ski-'))
    total = 0
    for path in files:
        raw = open(path, 'rb').read()
        enc = 'utf-8'
        try:
            text = raw.decode(enc)
        except UnicodeDecodeError:
            enc = 'cp1251'
            text = raw.decode(enc)
        changes = []

        def fix(m):
            line_end = text.find('\n', m.end())
            rest = text[m.end():len(text) if line_end < 0 else line_end]
            if re.search(r'//\s*!', rest):
                return m.group(0)
            old = m.group(2).replace("\\'", "'")
            a = text.rfind('\n    {', 0, m.start())
            b = text.find('\n    }', m.end())
            rogaine = re.search(r"\btype:[^\n]*ROGAINE", text[a:b]) and re.search(r'час|\dч|\bч\.|бег', old, re.I)
            new = (rogaine_fmt(old) if rogaine else None) or norm_fmt(old)
            if new == old:
                return m.group(0)
            line = text.count('\n', 0, m.start()) + 1
            changes.append((line, old, new))
            return m.group(1) + new.replace("'", "\\'") + m.group(3)

        out = FMT.sub(fix, text)
        for line, old, new in changes:
            print('%s:%d: %r -> %r' % (os.path.relpath(path, root), line, old, new))
        total += len(changes)
        if apply and changes:
            with open(path, 'wb') as f:
                f.write(out.encode(enc))
    print('%s: %d' % ('Исправлено' if apply else 'Будет исправлено (с --apply)', total))


if __name__ == '__main__':
    main(sys.argv[1:])
