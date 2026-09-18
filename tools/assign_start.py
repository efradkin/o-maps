# -*- coding: utf-8 -*-
"""
assign_start.py — назначение поля start: (или любого другого) записям календаря
o-maps по подстроке в названии.

Скрипт самодостаточен (не требует p.py) и правит файлы в каталоге --src
на месте. Предварительный просмотр — ключ --dry-run (-n).

ПРАВИЛА
    --rule "ПОДСТРОКА=КОД"              назначить start: 'КОД'
    --rule "ПОДСТРОКА=КОД=OWNER"        то же + удалить owner: 'OWNER'
    --rules-file rules.json             пачкой (формат — см. --help-rules)

ПРИМЕРЫ
    # предпросмотр без записи
    python assign_start.py --src js --dry-run \\
        --rule "Кузьмоловские старты=KUZMOLOVSKY_STARTS"

    # с удалением owner
    python assign_start.py --src js --rule "Кубок Белых Ночей=KBN=WN"

    # совмещённые старты: два кода на одной записи (нужен --all-rules)
    python assign_start.py --src js --all-rules \\
        --rule "Чемпионат СПб=SPB_CHAMP=SFSO_SPB" \\
        --rule "ЧиП ЛО=LO_CHAMP=SFSO_LO"

    # несколько правил сразу + упаковка изменённых файлов в zip
    python assign_start.py --src js --zip codes.zip \\
        --rule "Кубок Белых Ночей=KBN=WN" \\
        --rule "Кузьмоловские старты=KUZMOLOVSKY_STARTS" \\
        --rule "Всеволожские Вести=VSEV_VESTI"

    # регулярное выражение вместо подстроки
    python assign_start.py --src js --regex \\
        --rule "Кубок\\s+Белых\\s+Ночей=KBN=WN"

    # другое поле для поиска / другое целевое поле
    python assign_start.py --src js --match-field place --set-field region \\
        --rule "Токсово=TOKSOVO"

СЕМАНТИКА
  * поиск по --match-field (по умолчанию name), регистронезависимый
    (--case-sensitive отключает);
  * занятое целевое поле по умолчанию дополняется: скаляр становится
    массивом, массив дополняется в конец, уже присутствующий код не
    дублируется. --no-merge вместо этого сообщает о конфликте и оставляет
    запись как есть, --force перезаписывает значение;
  * новое поле вставляется сразу после --insert-after (по умолчанию name),
    при отсутствии якоря — последним полем записи;
  * правила проверяются по порядку, срабатывает первое подошедшее
    (--all-rules применяет все подошедшие);
  * удаление owner учитывает массивы: из owner: ['VYBORG','NW'] вынимается
    только заданное значение, поле целиком удаляется лишь когда не остаётся
    ни одного; единственный оставшийся элемент сворачивается в скаляр
    (--keep-array сохраняет форму массива);
  * кодировка UTF-8 и переводы строк CRLF/LF сохраняются пофайлово.
"""
from __future__ import print_function, unicode_literals

import argparse
import io
import json
import os
import re
import sys
import zipfile

RULES_HELP = """\
Формат --rules-file (JSON):

[
  {"pattern": "Кубок Белых Ночей", "code": "KBN", "drop_owner": "WN"},
  {"pattern": "Кузьмоловские старты", "code": "KUZMOLOVSKY_STARTS"},
  {"pattern": "Всеволожские Вести", "code": "VSEV_VESTI"}
]

Необязательные ключи каждого правила:
  drop_owner   значение owner, которое надо удалить у совпавших записей
  regex        true — pattern трактуется как регулярное выражение
  set_field    переопределяет --set-field для этого правила
  match_field  переопределяет --match-field для этого правила

Послабления против строгого JSON: допускаются висячие запятые, комментарии
// и /* */, BOM, а также одиночное правило без обрамляющих скобок [ ].
"""


# --------------------------------------------------------------------------
# разбор JS-литералов
# --------------------------------------------------------------------------

def read_file(path):
    with io.open(path, 'rb') as f:
        return f.read().decode('utf-8')


def split_entries(text):
    """Спаны верхнеуровневых объектов {...} в массиве записей."""
    spans = []
    depth = 0
    start = None
    in_str = None
    i = 0
    n = len(text)
    while i < n:
        c = text[i]
        if in_str:
            if c == '\\':
                i += 2
                continue
            if c == in_str:
                in_str = None
        elif c in "'\"":
            in_str = c
        elif c == '{':
            if depth == 0:
                start = i
            depth += 1
        elif c == '}':
            depth -= 1
            if depth == 0:
                spans.append((start, i + 1))
        i += 1
    return spans


def field(entry, name):
    """Значение строкового поля верхнего уровня, либо None."""
    for q in ("'", '"'):
        m = re.search(r"(?m)^[ \t]+" + re.escape(name) + r"\s*:\s*" + q +
                      r"((?:[^" + q + r"\\]|\\.)*)" + q, entry)
        if m:
            return m.group(1)
    return None


def raw_span(entry, name):
    """Границы сырого литерала поля: (начало, конец), либо None."""
    m = re.search(r"(?m)^[ \t]+" + re.escape(name) + r"\s*:\s*", entry)
    if not m:
        return None
    i = m.end()
    depth = 0
    in_str = None
    n = len(entry)
    while i < n:
        c = entry[i]
        if in_str:
            if c == '\\':
                i += 2
                continue
            if c == in_str:
                in_str = None
        elif c in "'\"":
            in_str = c
        elif c in '[{(':
            depth += 1
        elif c in ']})':
            if depth == 0:
                break
            depth -= 1
        elif c == ',' and depth == 0:
            break
        i += 1
    while i > m.end() and entry[i - 1] in ' \t\r\n':
        i -= 1                      # хвостовые пробелы/перевод строки — не часть литерала
    return m.end(), i


def raw(entry, name):
    """Сырой литерал поля любого типа, либо None (ловит и массивы)."""
    span = raw_span(entry, name)
    return None if span is None else entry[span[0]:span[1]].strip()


# --------------------------------------------------------------------------
# правка записи
# --------------------------------------------------------------------------

def _line_span(text, pos):
    ls = text.rfind('\n', 0, pos) + 1
    le = text.find('\n', pos)
    return ls, (len(text) if le == -1 else le + 1)


def _field_line(entry, name):
    m = re.search(r"(?m)^[ \t]+" + re.escape(name) + r"\s*:", entry)
    return None if m is None else _line_span(entry, m.start())


def _strip_trailing_comma(text, upto):
    """Снять запятую с поля, ставшего последним."""
    prev_end = text.rfind('\n', 0, upto)
    if prev_end == -1:
        return text
    prev_start = text.rfind('\n', 0, prev_end) + 1
    line = text[prev_start:prev_end]
    stripped = line.rstrip()
    if not stripped.endswith(','):
        return text
    line = stripped[:-1] + line[len(stripped):]
    return text[:prev_start] + line + text[prev_end:]


def _unquote(lit):
    lit = lit.strip()
    if len(lit) >= 2 and lit[0] == lit[-1] and lit[0] in "'\"":
        return lit[1:-1]
    return lit


def _array_items(lit):
    """Элементы литерала-массива как список сырых строк, либо None."""
    lit = lit.strip()
    if not (lit.startswith('[') and lit.endswith(']')):
        return None
    inner = lit[1:-1]
    items = []
    buf = []
    depth = 0
    in_str = None
    i = 0
    n = len(inner)
    while i < n:
        c = inner[i]
        if in_str:
            buf.append(c)
            if c == '\\' and i + 1 < n:
                buf.append(inner[i + 1])
                i += 2
                continue
            if c == in_str:
                in_str = None
        elif c in "'\"":
            in_str = c
            buf.append(c)
        elif c in '[{(':
            depth += 1
            buf.append(c)
        elif c in ']})':
            depth -= 1
            buf.append(c)
        elif c == ',' and depth == 0:
            items.append(''.join(buf))
            buf = []
        else:
            buf.append(c)
        i += 1
    items.append(''.join(buf))
    return [x for x in (s.strip() for s in items) if x]


def _drop_field_line(entry, name):
    """Убрать строку поля целиком, поправив запятые."""
    ls, le = _field_line(entry, name)
    was_last = not entry[ls:le].rstrip().endswith(',')
    new = entry[:ls] + entry[le:]
    if was_last:
        new = _strip_trailing_comma(new, ls)
    return new


def remove_field(entry, name, value=None, keep_array=False):
    """Удалить поле или одно значение из поля-массива.

    Возвращает (запись, что_сделано), где что_сделано:
      None       — поле отсутствует или значение не совпало, запись не тронута
      'dropped'  — поле удалено целиком
      'trimmed'  — значение вынуто из массива, поле осталось

    Массив, из которого вынули всё, приводит к удалению поля; оставшийся
    единственный элемент по умолчанию сворачивается в скаляр — так записан
    каждый одиночный owner в данных (--keep-array сохраняет форму массива).
    """
    if _field_line(entry, name) is None:
        return entry, None
    if value is None:
        return _drop_field_line(entry, name), 'dropped'

    vs, ve = raw_span(entry, name)
    lit = entry[vs:ve].strip()
    items = _array_items(lit)

    if items is None:                                   # скалярное значение
        if _unquote(lit) != value:
            return entry, None
        return _drop_field_line(entry, name), 'dropped'

    kept = [x for x in items if _unquote(x) != value]
    if len(kept) == len(items):
        return entry, None
    if not kept:
        return _drop_field_line(entry, name), 'dropped'

    sep = ', ' if ', ' in lit else ','
    if len(kept) == 1 and not keep_array:
        new_lit = kept[0]
    else:
        new_lit = '[' + sep.join(kept) + ']'
    return entry[:vs] + new_lit + entry[ve:], 'trimmed'


def set_field(entry, name, code, anchor, literal=None):
    """Вставить или заменить поле name сразу после поля anchor.

    literal, если задан, пишется как есть (для массивов); иначе code
    оборачивается в одинарные кавычки.
    """
    lit = literal if literal is not None else "'%s'" % code
    existing = _field_line(entry, name)
    if existing is not None:
        ls, le = existing
        line = entry[ls:le]
        indent = re.match(r'[ \t]*', line).group(0)
        eol = '\r\n' if line.endswith('\r\n') else ('\n' if line.endswith('\n') else '')
        comma = ',' if line.rstrip().endswith(',') else ''
        return entry[:ls] + indent + '%s: %s%s%s' % (name, lit, comma, eol) + entry[le:]

    span = _field_line(entry, anchor)
    if span is not None:
        ls, le = span
        line = entry[ls:le]
        eol = '\r\n' if line.endswith('\r\n') else '\n'
        indent = re.match(r'[ \t]*', line).group(0)
        anchor_was_last = not line.rstrip().endswith(',')
        if anchor_was_last:
            line = line.rstrip('\r\n') + ',' + eol
        comma = '' if anchor_was_last else ','
        return (entry[:ls] + line +
                indent + '%s: %s%s%s' % (name, lit, comma, eol) + entry[le:])

    # якоря нет — дописываем последним полем перед закрывающей скобкой
    close = entry.rfind('}')
    ls, _ = _line_span(entry, close)
    eol = '\r\n' if '\r\n' in entry else '\n'
    m = re.search(r"(?m)^([ \t]+)\S", entry[entry.find('\n') + 1:])
    indent = m.group(1) if m else '        '
    body = entry[:ls].rstrip()
    if not body.endswith(','):
        body += ','
    return body + eol + indent + '%s: %s%s' % (name, lit, eol) + entry[ls:]


def merge_value(lit, code):
    """Литерал поля + новый код -> новый литерал, либо None если код уже там.

    Скаляр превращается в массив из двух элементов, массив дополняется в
    конец. Стиль разделителя существующего массива сохраняется.
    """
    items = _array_items(lit)
    if items is None:
        if _unquote(lit) == code:
            return None
        items, sep = [lit.strip()], ','
    else:
        if any(_unquote(x) == code for x in items):
            return None
        sep = ', ' if ', ' in lit else ','
    q = '"' if items and all(x.startswith('"') for x in items) else "'"
    return '[' + sep.join(items + [q + code + q]) + ']'


# --------------------------------------------------------------------------
# правила
# --------------------------------------------------------------------------

class Rule(object):
    def __init__(self, pattern, code, drop_owner=None, use_regex=False,
                 ignore_case=True, match_field='name', set_field_name='start'):
        self.pattern = pattern
        self.code = code
        self.drop_owner = drop_owner
        self.match_field = match_field
        self.set_field_name = set_field_name
        flags = re.IGNORECASE if ignore_case else 0
        self.rx = re.compile(pattern if use_regex else re.escape(pattern), flags)

    def matches(self, value):
        return bool(self.rx.search(value or ''))

    def __str__(self):
        s = "%s -> %s: '%s'" % (self.pattern, self.set_field_name, self.code)
        if self.drop_owner:
            s += " (минус owner: '%s')" % self.drop_owner
        return s


def parse_rule_arg(spec, args):
    parts = spec.split('=')
    if len(parts) < 2 or not parts[0] or not parts[1]:
        raise argparse.ArgumentTypeError(
            'правило должно иметь вид "ПОДСТРОКА=КОД" или "ПОДСТРОКА=КОД=OWNER", '
            'получено: %r' % spec)
    if len(parts) > 3:
        raise argparse.ArgumentTypeError('слишком много "=" в правиле: %r' % spec)
    return Rule(parts[0], parts[1], parts[2] if len(parts) == 3 else None,
                use_regex=args.regex, ignore_case=not args.case_sensitive,
                match_field=args.match_field, set_field_name=args.set_field)


def _strip_json_extras(text):
    """Убрать // и /* */ комментарии и висячие запятые — вне строковых литералов.

    JSON их не допускает, но в данных календаря висячая запятая — норма,
    поэтому в --rules-file они прощаются. Комментарии вычищаются первым
    проходом, иначе комментарий между запятой и скобкой прятал бы запятую.
    """
    return _strip_trailing_commas(_strip_comments(text))


def _scan_string(text, i, out):
    """Скопировать строковый литерал, начинающийся в i; вернуть позицию за ним."""
    n = len(text)
    out.append(text[i])
    i += 1
    while i < n:
        c = text[i]
        out.append(c)
        if c == '\\':
            if i + 1 < n:
                out.append(text[i + 1])
            i += 2
            continue
        i += 1
        if c == '"':
            break
    return i


def _strip_comments(text):
    out = []
    i = 0
    n = len(text)
    while i < n:
        c = text[i]
        if c == '"':
            i = _scan_string(text, i, out)
            continue
        if c == '/' and i + 1 < n and text[i + 1] == '/':
            j = text.find('\n', i)
            i = n if j == -1 else j
            continue
        if c == '/' and i + 1 < n and text[i + 1] == '*':
            j = text.find('*/', i + 2)
            i = n if j == -1 else j + 2
            continue
        out.append(c)
        i += 1
    return ''.join(out)


def _strip_trailing_commas(text):
    out = []
    i = 0
    n = len(text)
    while i < n:
        c = text[i]
        if c == '"':
            i = _scan_string(text, i, out)
            continue
        if c == ',':
            j = i + 1
            while j < n and text[j] in ' \t\r\n':
                j += 1
            if j < n and text[j] in ']}':
                i += 1          # висячая запятая — выбрасываем
                continue
        out.append(c)
        i += 1
    return ''.join(out)


def load_rules_file(path, args):
    with io.open(path, encoding='utf-8-sig') as f:
        text = f.read()
    try:
        data = json.loads(_strip_json_extras(text))
    except ValueError as exc:
        raise ValueError(_json_error_context(text, exc))
    if isinstance(data, dict):
        data = [data]
    if not isinstance(data, list):
        raise ValueError('ожидался список правил, получено: %s'
                         % type(data).__name__)
    return [Rule(r['pattern'], r['code'], r.get('drop_owner'),
                 use_regex=r.get('regex', args.regex),
                 ignore_case=not args.case_sensitive,
                 match_field=r.get('match_field', args.match_field),
                 set_field_name=r.get('set_field', args.set_field))
            for r in data]


def _json_error_context(text, exc):
    """Дополнить сообщение JSON-парсера самой проблемной строкой."""
    lineno = getattr(exc, 'lineno', None)
    if not lineno:
        return str(exc)
    lines = text.splitlines()
    if lineno > len(lines):
        return '%s\n  (файл обрывается: не хватает закрывающей скобки?)' % exc
    return '%s\n  строка %d: %s' % (exc, lineno, lines[lineno - 1].strip())


# --------------------------------------------------------------------------
# обработка
# --------------------------------------------------------------------------

def process(args, rules):
    rep = {'assigned': [], 'already': [], 'conflict': [], 'forced': [],
           'merged': [], 'owner_removed': [], 'owner_trimmed': [],
           'owner_absent': []}
    changed = {}

    names = sorted(f for f in os.listdir(args.src) if f.endswith('.js'))
    if args.include:
        rx = re.compile(args.include)
        names = [f for f in names if rx.search(f)]

    for fname in names:
        text = read_file(os.path.join(args.src, fname))
        out = text
        dirty = False

        for s, e in reversed(split_entries(text)):
            entry = text[s:e]
            eid = field(entry, 'id')
            new_entry = entry
            touched = False

            for rule in rules:
                label = field(entry, rule.match_field)
                if not rule.matches(label):
                    continue
                cur = raw(new_entry, rule.set_field_name)
                want = "'%s'" % rule.code

                if cur is None:
                    new_entry = set_field(new_entry, rule.set_field_name,
                                          rule.code, args.insert_after)
                    rep['assigned'].append((fname, eid, label, rule.code))
                    touched = True
                elif cur == want or (_array_items(cur) is not None and
                                     any(_unquote(x) == rule.code
                                         for x in _array_items(cur))):
                    rep['already'].append((fname, eid, label, rule.code))
                elif args.merge:
                    merged = merge_value(cur, rule.code)
                    if merged is None:                  # код уже в массиве
                        rep['already'].append((fname, eid, label, rule.code))
                    else:
                        new_entry = set_field(new_entry, rule.set_field_name,
                                              rule.code, args.insert_after,
                                              literal=merged)
                        rep['merged'].append((fname, eid, label, cur, merged))
                        touched = True
                elif args.force:
                    new_entry = set_field(new_entry, rule.set_field_name,
                                          rule.code, args.insert_after)
                    rep['forced'].append((fname, eid, label, cur, rule.code))
                    touched = True
                else:
                    rep['conflict'].append((fname, eid, label, cur, rule.code))

                if rule.drop_owner:
                    before = raw(new_entry, 'owner')
                    new_entry, what = remove_field(new_entry, 'owner',
                                                   rule.drop_owner, args.keep_array)
                    if what == 'dropped':
                        rep['owner_removed'].append((fname, eid, rule.drop_owner))
                        touched = True
                    elif what == 'trimmed':
                        rep['owner_trimmed'].append((fname, eid, before,
                                                     raw(new_entry, 'owner')))
                        touched = True
                    else:
                        rep['owner_absent'].append((fname, eid, label))

                if not args.all_rules:
                    break

            if touched:
                out = out[:s] + new_entry + out[e:]
                dirty = True

        if dirty:
            changed[fname] = out

    if changed and not args.dry_run:
        for fname, content in changed.items():
            with io.open(os.path.join(args.src, fname), 'w',
                         encoding='utf-8', newline='') as f:
                f.write(content)
        if args.zip:
            with zipfile.ZipFile(args.zip, 'w', zipfile.ZIP_DEFLATED) as z:
                for fname in sorted(changed):
                    z.write(os.path.join(args.src, fname), fname)

    return rep, sorted(changed)


def report(rep, changed, args, rules):
    print('=== %s ===' % ('DRY-RUN' if args.dry_run else ('правка на месте: %s' % args.src)))
    for r in rules:
        print('  правило: %s' % r)
    print('')
    print('назначено полей:      %d' % len(rep['assigned']))
    per = {}
    for x in rep['assigned']:
        per[x[3]] = per.get(x[3], 0) + 1
    for code in sorted(per):
        print('    %-24s %d' % (code, per[code]))
    print('уже было корректно:   %d' % len(rep['already']))
    print('удалено owner:        %d' % len(rep['owner_removed']))
    if rep['owner_trimmed']:
        print('owner сокращён:       %d' % len(rep['owner_trimmed']))
        shapes = {}
        for f, i, before, after in rep['owner_trimmed']:
            shapes.setdefault((before, after), []).append(i)
        for (before, after), ids in sorted(shapes.items()):
            print('    %s -> %s   (%d: %s)' % (before, after, len(ids),
                                               ', '.join(ids[:4])))
    if rep['merged']:
        print('дописано в массив:    %d' % len(rep['merged']))
        for f, i, n, cur, after in rep['merged']:
            print('    %s  %s  %s -> %s   %s' % (f, i, cur, after, n[:46]))
    if rep['forced']:
        print('перезаписано (--force): %d' % len(rep['forced']))
        for f, i, n, cur, code in rep['forced']:
            print('    %s  %s  %s  %s -> %s' % (f, i, n, cur, code))
    print('конфликтов:           %d' % len(rep['conflict']))
    for f, i, n, cur, code in rep['conflict']:
        print('    %s  %s  %s  сейчас %s (предложено %s)' % (f, i, n, cur, code))
    if rep['owner_absent']:
        print('совпало, но owner отсутствовал: %d' % len(rep['owner_absent']))
        for f, i, n in rep['owner_absent']:
            print('    %s  %s  %s' % (f, i, n))
    if args.verbose:
        print('')
        print('--- назначенные ---')
        for f, i, n, code in rep['assigned']:
            print('    %s  %s  %s -> %s' % (f, i, n, code))
    print('')
    print('изменено файлов:      %d' % len(changed))
    if changed:
        print('    ' + ', '.join(changed))
    if args.dry_run:
        print('')
        print('(предпросмотр; файлы не изменены)')
    elif changed and args.zip:
        print('    упаковано в %s' % args.zip)


def main(argv=None):
    ap = argparse.ArgumentParser(
        description='Назначение кода соревнований в поле start записям календаря o-maps.',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog='Подробное описание и примеры — в docstring файла.')
    ap.add_argument('--src', default='js',
                    help='каталог с calendar-*.js, правится на месте (по умолчанию js)')
    ap.add_argument('--include', help='регэксп по имени файла, ограничить обработку')
    ap.add_argument('--rule', action='append', default=[],
                    metavar='"ПОДСТРОКА=КОД[=OWNER]"',
                    help='правило; можно указывать несколько раз')
    ap.add_argument('--rules-file', help='JSON-файл с правилами')
    ap.add_argument('--help-rules', action='store_true', help='показать формат --rules-file')
    ap.add_argument('--match-field', default='name', help='поле для поиска (по умолчанию name)')
    ap.add_argument('--set-field', default='start', help='поле для записи кода (по умолчанию start)')
    ap.add_argument('--insert-after', default='name',
                    help='после какого поля вставлять (по умолчанию name)')
    ap.add_argument('--regex', action='store_true',
                    help='трактовать ПОДСТРОКУ как регулярное выражение')
    ap.add_argument('--case-sensitive', action='store_true', help='учитывать регистр при поиске')
    ap.add_argument('--all-rules', action='store_true',
                    help='применять все подошедшие правила, а не только первое')
    ap.add_argument('--no-merge', dest='merge', action='store_false',
                    help='не дописывать код к занятому полю, а сообщать о конфликте')
    ap.set_defaults(merge=True)
    ap.add_argument('--force', action='store_true', help='перезаписывать уже заполненное поле')
    ap.add_argument('--keep-array', action='store_true',
                    help='не сворачивать в скаляр owner-массив, в котором остался один элемент')
    ap.add_argument('-n', '--dry-run', action='store_true',
                    help='только показать, что изменится, ничего не записывая')
    ap.add_argument('--zip', help='дополнительно упаковать изменённые файлы в указанный zip')
    ap.add_argument('--verbose', action='store_true', help='перечислить все затронутые записи')
    args = ap.parse_args(argv)

    if args.help_rules:
        print(RULES_HELP)
        return 0

    try:
        rules = [parse_rule_arg(s, args) for s in args.rule]
        if args.rules_file:
            rules += load_rules_file(args.rules_file, args)
    except argparse.ArgumentTypeError as exc:
        ap.error('%s' % exc)
    except (IOError, OSError) as exc:
        ap.error('не удалось прочитать --rules-file: %s' % exc)
    except ValueError as exc:
        ap.error('некорректный JSON в --rules-file: %s' % exc)
    except KeyError as exc:
        ap.error('в правиле --rules-file отсутствует обязательный ключ %s' % exc)
    except re.error as exc:
        ap.error('некорректное регулярное выражение: %s' % exc)
    if args.force:
        args.merge = False
    if not rules:
        ap.error('не задано ни одного правила: используйте --rule или --rules-file')
    if not os.path.isdir(args.src):
        ap.error('каталог не найден: %s' % args.src)

    rep, changed = process(args, rules)
    report(rep, changed, args, rules)
    return 0


if __name__ == '__main__':
    sys.exit(main())
