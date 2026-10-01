#!/usr/bin/env python3
"""Заполняет поле o_gps в записях calendar-*.js по карте соответствий (ogps_matches.json).

Правка на месте (in-place) в каталоге --src. Предпросмотр: -n/--dry-run.
Идемпотентно: записи, у которых o_gps уже есть, не трогаются; файлы без изменений не перезаписываются.
Кодировка (UTF-8/cp1251) и переводы строк (CRLF/LF) сохраняются пофайлово.

  python fill_ogps.py --src js --map ogps_matches.json -n
  python fill_ogps.py --src js --map ogps_matches.json [--zip ogps.zip]
"""
import argparse, json, os, re, sys, zipfile

def read(path):
    raw = open(path, 'rb').read()
    for enc in ('utf-8', 'cp1251'):
        try:
            return raw.decode(enc), enc
        except UnicodeDecodeError:
            pass
    raise SystemExit(f'не удалось декодировать {path}')

def scan(s):
    """Возвращает (objs, code_mask): objs — список (start, end) объектов-записей (прямых детей массива),
    code_mask[i] — True, если символ s[i] не внутри комментария."""
    objs, stack = [], []           # stack: ('{'|'[', pos)
    code = bytearray(b'\x01') * len(s)
    i, n = 0, len(s)
    while i < n:
        c = s[i]
        if c in '\'"`':
            q = c; i += 1
            while i < n and s[i] != q:
                i += 2 if s[i] == '\\' else 1
            i += 1; continue
        if s.startswith('//', i):
            j = s.find('\n', i); j = n if j < 0 else j
            code[i:j] = b'\x00' * (j - i); i = j; continue
        if s.startswith('/*', i):
            j = s.find('*/', i + 2); j = n if j < 0 else j + 2
            code[i:j] = b'\x00' * (j - i); i = j; continue
        if c in '{[':
            stack.append((c, i))
        elif c in '}]':
            op, p = stack.pop()
            if c == '}' and stack and stack[-1][0] == '[':
                objs.append((p, i))
        i += 1
    return objs, code

def fmt_value(v, ind, nl):
    if isinstance(v, int):
        return str(v)
    lines = [f"{ind}    '{k}': {x}" for k, x in v.items()]
    return '{' + nl + (',' + nl).join(lines) + nl + ind + '}'

def process(path, mapping, done):
    s, enc = read(path)
    nl = '\r\n' if '\r\n' in s else '\n'
    objs, code = scan(s)
    edits = []   # (pos, text) — вставки
    for a, b in objs:
        body = s[a:b + 1]
        m = re.search(r"\bid\s*:\s*'([^']+)'", body)
        if not m or m.group(1) not in mapping:
            continue
        rid = m.group(1)
        if rid in done:
            print(f'  ! {rid}: запись встречается повторно ({os.path.basename(path)}), пропуск'); continue
        done.add(rid)
        if re.search(r'\bo_gps\s*:', ''.join(ch for ch, k in zip(body, code[a:b + 1]) if k)):
            print(f'  = {rid}: o_gps уже есть'); continue
        # отступ поля id
        ls = s.rfind('\n', 0, a + m.start()) + 1
        ind = re.match(r'[ \t]*', s[ls:]).group(0)
        # последний значащий (не комментарий, не пробел) символ перед закрывающей скобкой
        p = b - 1
        while p > a and (not code[p] or s[p].isspace()):
            p -= 1
        prop = f'{ind}o_gps: {fmt_value(mapping[rid], ind, nl)}'
        if s[p] not in ',{':
            edits.append((p + 1, ','))
        lb = s.rfind('\n', 0, b) + 1
        if s[lb:b].strip() == '':
            edits.append((lb, prop + nl))
        else:
            edits.append((b, nl + prop + nl))
        print(f'  + {rid}: {json.dumps(mapping[rid], ensure_ascii=False)}')
    if not edits:
        return None
    for pos, t in sorted(edits, key=lambda e: e[0], reverse=True):
        s = s[:pos] + t + s[pos:]
    return s, enc

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--src', required=True)
    ap.add_argument('--map', required=True)
    ap.add_argument('-n', '--dry-run', action='store_true')
    ap.add_argument('--zip')
    a = ap.parse_args()
    mapping = json.load(open(a.map, encoding='utf-8'))
    done, changed = set(), []
    for fn in sorted(os.listdir(a.src)):
        if not re.fullmatch(r'calendar-.*\.js', fn):
            continue
        path = os.path.join(a.src, fn)
        print(fn)
        r = process(path, mapping, done)
        if r:
            changed.append(path)
            if not a.dry_run:
                open(path, 'wb').write(r[0].encode(r[1]))
    missing = sorted(set(mapping) - done)
    if missing:
        print('Не найдены записи:', ', '.join(missing))
    print(f'Изменено файлов: {len(changed)}' + (' (dry-run)' if a.dry_run else ''))
    if a.zip and changed and not a.dry_run:
        with zipfile.ZipFile(a.zip, 'w', zipfile.ZIP_DEFLATED) as z:
            for p in changed:
                z.write(p, os.path.join('js', os.path.basename(p)))
        print('Архив:', a.zip)

if __name__ == '__main__':
    main()
