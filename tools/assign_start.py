# -*- coding: utf-8 -*-
"""
Назначение поля start: записям календаря по подстроке в name.

Правила:
  1. "Кубок Белых Ночей"    -> start: 'KBN', при этом owner: 'WN' удаляется
  2. "Кузьмоловские старты" -> start: 'KUZMOLOVSKY_STARTS'
  3. "Всеволожские Вести"   -> start: 'VSEV_VESTI'

Поиск подстроки — регистронезависимый (в данных встречаются варианты
"Кубок Белых ночей", "Кубок белых ночей", "Всеволожские вести" и т.п.).

Существующее непустое значение start НИКОГДА не перезаписывается — такие
записи только сообщаются как конфликты.

Скрипт недеструктивен: исходники не трогаются, результат пишется в output/.
"""
import os
import re
import sys
import shutil
import argparse

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from p import read_file, split_entries, field, raw

RULES = [
    ('кубок белых ноч', 'KBN', True),          # True -> удалять owner:'WN'
    ('кузьмоловские старты', 'KUZMOLOVSKY_STARTS', False),
    ('всеволожские вести', 'VSEV_VESTI', False),
]
OWNER_TO_DROP = "'WN'"


def line_span(text, pos):
    """Границы строки (включая перевод строки), в которой находится pos."""
    start = text.rfind('\n', 0, pos) + 1
    end = text.find('\n', pos)
    end = len(text) if end == -1 else end + 1
    return start, end


def find_field_line(entry, name):
    """(line_start, line_end) строки верхнего уровня с полем name, либо None."""
    m = re.search(r"(?m)^([ \t]{8})" + name + r"\s*:", entry)
    if not m:
        return None
    return line_span(entry, m.start())


def remove_owner_line(entry):
    """Удалить строку owner: 'WN', корректно обработав запятую."""
    span = find_field_line(entry, 'owner')
    if span is None:
        return entry, False
    ls, le = span
    line = entry[ls:le]
    if OWNER_TO_DROP not in line:
        return entry, False
    was_last = not line.rstrip().endswith(',')
    new = entry[:ls] + entry[le:]
    if was_last:
        # предыдущее поле теперь последнее — снять с него хвостовую запятую
        prev_end = new.rfind('\n', 0, ls)
        prev_start = new.rfind('\n', 0, prev_end) + 1
        prev = new[prev_start:prev_end]
        stripped = prev.rstrip()
        if stripped.endswith(','):
            prev = stripped[:-1] + prev[len(stripped):]
            new = new[:prev_start] + prev + new[prev_end:]
    return new, True


def insert_start(entry, code):
    """Вставить start: 'CODE' сразу после строки name:."""
    span = find_field_line(entry, 'name')
    if span is None:
        return entry, False
    ls, le = span
    name_line = entry[ls:le]
    eol = '\r\n' if name_line.endswith('\r\n') else '\n'
    indent = re.match(r'[ \t]*', name_line).group(0)
    if not name_line.rstrip().endswith(','):
        body = name_line.rstrip('\r\n')
        name_line = body + ',' + eol
    new_line = indent + "start: '" + code + "'," + eol
    return entry[:ls] + name_line + new_line + entry[le:], True


def process(src_dir, out_dir, apply_changes):
    report = {'assigned': [], 'already': [], 'conflict': [], 'owner_removed': 0,
              'owner_absent': []}
    files = sorted(f for f in os.listdir(src_dir) if f.endswith('.js'))
    changed_files = []

    for fname in files:
        path = os.path.join(src_dir, fname)
        text, _ = read_file(path)
        spans = split_entries(text)
        out = text
        file_changed = False

        # идём с конца, чтобы смещения не поехали
        for s, e in reversed(spans):
            entry = text[s:e]
            name = field(entry, 'name') or ''
            low = name.lower()
            eid = field(entry, 'id')
            for pattern, code, drop_owner in RULES:
                if pattern not in low:
                    continue
                cur = raw(entry, 'start')
                cur_val = cur[3] if cur else None
                new_entry = entry
                touched = False

                if cur_val is None:
                    new_entry, ok = insert_start(new_entry, code)
                    if ok:
                        report['assigned'].append((fname, eid, name, code))
                        touched = True
                elif cur_val == "'" + code + "'":
                    report['already'].append((fname, eid, name, code))
                else:
                    report['conflict'].append((fname, eid, name, cur_val, code))

                if drop_owner:
                    new_entry, removed = remove_owner_line(new_entry)
                    if removed:
                        report['owner_removed'] += 1
                        touched = True
                    else:
                        report['owner_absent'].append((fname, eid, name))

                if touched:
                    out = out[:s] + new_entry + out[e:]
                    file_changed = True
                break

        if file_changed:
            changed_files.append(fname)
            if apply_changes:
                os.makedirs(out_dir, exist_ok=True)
                with open(os.path.join(out_dir, fname), 'w',
                          encoding='utf-8', newline='') as f:
                    f.write(out)

    return report, changed_files


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--src', default='work')
    ap.add_argument('--out', default='output')
    ap.add_argument('--apply', action='store_true')
    a = ap.parse_args()

    rep, changed = process(a.src, a.out, a.apply)
    mode = 'APPLY' if a.apply else 'DRY-RUN'
    print('=== %s ===' % mode)
    print('назначено start:      %d' % len(rep['assigned']))
    for code in ('KBN', 'KUZMOLOVSKY_STARTS', 'VSEV_VESTI'):
        n = sum(1 for x in rep['assigned'] if x[3] == code)
        print('    %-20s %d' % (code, n))
    print("удалено owner:'WN':   %d" % rep['owner_removed'])
    print('уже было корректно:   %d' % len(rep['already']))
    print('конфликтов start:     %d' % len(rep['conflict']))
    for f, i, n, cur, code in rep['conflict']:
        print('    %s  %s  %s  start=%s (предложено %s)' % (f, i, n, cur, code))
    print("КБН без owner:'WN':   %d" % len(rep['owner_absent']))
    for f, i, n in rep['owner_absent']:
        print('    %s  %s  %s' % (f, i, n))
    print('изменено файлов:      %d' % len(changed))
    print('   ' + ', '.join(changed))


if __name__ == '__main__':
    main()
