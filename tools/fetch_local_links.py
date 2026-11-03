#!/usr/bin/env python3
"""fetch_local_links.py — скачивает внешние полноразмеры карт в локальные копии из поля local_link.

Просматривает js/maps-*.js. У каждой карты с полем local_link внешние ссылки поля link
(http/https, по порядку) сопоставляются с путями local_link (по порядку): первая внешняя
ссылка — первому пути и т. д. Файл скачивается по ссылке и сохраняется по пути local_link
относительно корня сайта: './external/original_maps/rogaine/beketov/x_2_omaps.jpg' ->
<root>/external/original_maps/rogaine/beketov/x_2_omaps.jpg. Файлы js не меняются.

Запуск из корня сайта (где лежат папки js и external):
  python tools/fetch_local_links.py -n                  # только план, без сети
  python tools/fetch_local_links.py                     # скачать недостающее с kandid.ru и bikeadventure.ru

Параметры:
  --root DIR       корень сайта: в нём папка js, от него отсчитываются пути local_link (по умолчанию .)
  --host HOSTS     скачивать только ссылки с этих сайтов (через запятую) и их поддоменов
                   (по умолчанию kandid.ru,bikeadventure.ru); --host '' — со всех сайтов
  --start CODE     только карты с этим стартом (например MB или BA); по умолчанию — все
  --timeout SEC    таймаут одного запроса (по умолчанию 60)
  --retries N      число попыток на файл (по умолчанию 3)
  -n, --dry-run    только показать, что будет скачано
  -h, --help       эта справка

Уже скачанные файлы (непустые) пропускаются, поэтому повторный запуск докачивает только
недостающее. Файл пишется во временный <имя>.part и переименовывается после полной загрузки.
Карты, у которых число внешних ссылок в link не равно числу путей в local_link, не скачиваются
и попадают в отчёт — их надо поправить в данных вручную. В конце — список неудачных загрузок.
Зависимостей нет — только стандартная библиотека Python 3.
"""
import argparse
import os
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request

UA = 'o-maps fetch_local_links.py (https://o-maps.spb.ru)'
STR = re.compile(r"'(?:[^'\\]|\\.)*'|\"(?:[^\"\\]|\\.)*\"")


def records(text):
    """Объекты верхнего уровня массивов файла: (начало, конец) с учётом строк и комментариев."""
    i, n, depth, start, q = 0, len(text), 0, -1, None
    while i < n:
        c = text[i]
        if q:
            if c == '\\':
                i += 2
                continue
            if c == q:
                q = None
        elif c in '\'"`':
            q = c
        elif text.startswith('//', i):
            j = text.find('\n', i)
            i = n if j < 0 else j
            continue
        elif text.startswith('/*', i):
            j = text.find('*/', i + 2)
            i = n if j < 0 else j + 2
            continue
        elif c == '{':
            if depth == 0:
                start = i
            depth += 1
        elif c == '}':
            depth -= 1
            if depth == 0 and start >= 0:
                yield start, i + 1
                start = -1
        i += 1


def field(block, name):
    """Строки поля верхнего уровня записи (строка или массив строк); закомментированные строки не берутся."""
    m = re.search(r'(?m)^[ \t]*' + name + r'\s*:\s*', block)
    if not m:
        return []
    i = m.end()
    if block[i] == '[':
        j, depth, q = i, 0, None
        while j < len(block):
            c = block[j]
            if q:
                if c == '\\':
                    j += 2
                    continue
                if c == q:
                    q = None
            elif c in '\'"':
                q = c
            elif block.startswith('//', j):
                j = block.index('\n', j)
                continue
            elif c == '[':
                depth += 1
            elif c == ']':
                depth -= 1
                if depth == 0:
                    break
            j += 1
        value = block[i:j + 1]
    else:
        mm = STR.match(block, i)
        value = mm.group(0) if mm else ''
    toks = re.findall(r"'(?:[^'\\]|\\.)*'|\"(?:[^\"\\]|\\.)*\"|//[^\n]*", value)
    return [t[1:-1].replace("\\'", "'").replace('\\"', '"') for t in toks if not t.startswith('//')]


def host_ok(url, hosts):
    if not hosts:
        return True
    h = (urllib.parse.urlsplit(url).hostname or '').lower()
    return any(h == x or h.endswith('.' + x) for x in hosts)


def download(url, path, timeout, retries):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    part = path + '.part'
    last = None
    for attempt in range(1, retries + 1):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': UA})
            with urllib.request.urlopen(req, timeout=timeout) as r, open(part, 'wb') as f:
                while True:
                    chunk = r.read(1 << 16)
                    if not chunk:
                        break
                    f.write(chunk)
            if os.path.getsize(part) == 0:
                raise IOError('пустой ответ')
            os.replace(part, path)
            return None
        except (urllib.error.URLError, OSError, IOError) as e:
            last = e
            if os.path.exists(part):
                os.remove(part)
            if isinstance(e, urllib.error.HTTPError) and e.code in (403, 404, 410):
                break
            if attempt < retries:
                time.sleep(2 * attempt)
    return str(last)


def main():
    ap = argparse.ArgumentParser(description=__doc__.split('\n')[0])
    ap.add_argument('--root', default='.')
    ap.add_argument('--host', default='kandid.ru,bikeadventure.ru')
    ap.add_argument('--start')
    ap.add_argument('--timeout', type=int, default=60)
    ap.add_argument('--retries', type=int, default=3)
    ap.add_argument('-n', '--dry-run', action='store_true')
    a = ap.parse_args()
    hosts = [x.strip().lower() for x in a.host.split(',') if x.strip()]

    js = os.path.join(a.root, 'js')
    plan, mismatched = [], []
    for name in sorted(os.listdir(js)):
        if not re.match(r'maps-.*\.js$', name):
            continue
        text = open(os.path.join(js, name), encoding='utf-8').read()
        for s, e in records(text):
            block = text[s:e]
            local = field(block, 'local_link')
            if not local:
                continue
            if a.start and a.start not in field(block, 'start'):
                continue
            external = [u for u in field(block, 'link') if re.match(r'https?://', u)]
            url = (field(block, 'url') or ['?'])[0]
            if len(external) != len(local):
                mismatched.append(f'{name}: {url} — внешних ссылок в link {len(external)}, путей в local_link {len(local)}')
                continue
            for u, lp in zip(external, local):
                if host_ok(u, hosts):
                    plan.append((u, lp, name))

    todo, have = [], 0
    for u, lp, name in plan:
        path = os.path.normpath(os.path.join(a.root, lp))
        if os.path.isfile(path) and os.path.getsize(path) > 0:
            have += 1
        else:
            todo.append((u, path))
    print(f'ссылок с local_link: {len(plan)}' + (f' (сайты: {", ".join(hosts)})' if hosts else '') +
          f'; уже скачано: {have}; скачать: {len(todo)}')

    failed = []
    for i, (u, path) in enumerate(todo, 1):
        print(f'[{i}/{len(todo)}] {u} -> {os.path.relpath(path, a.root)}')
        if a.dry_run:
            continue
        err = download(u, path, a.timeout, a.retries)
        if err:
            failed.append(f'{u} -> {os.path.relpath(path, a.root)}: {err}')
            print('    ошибка:', err)

    if mismatched:
        print(f'\nне сопоставлены (поправить данные): {len(mismatched)}')
        for m in mismatched:
            print('  ' + m)
    if failed:
        print(f'\nне скачано: {len(failed)}')
        for f in failed:
            print('  ' + f)
    if a.dry_run:
        print('\n(пробный запуск, ничего не скачано)')
    return 1 if failed else 0


if __name__ == '__main__':
    sys.exit(main())
