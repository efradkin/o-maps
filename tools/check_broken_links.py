#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Проверяет ссылки в записях календарей, карт и маршрутов сайта O-Maps.

Обрабатываемые файлы (не рекурсивно, непосредственно в папке js):
  * calendar-*.js;
  * maps-*.js;
  * tracks*.js.

Извлекаются непосредственные поля объектов-записей, являющихся элементами
массивов верхнего уровня:
  * все строковые значения полей res и results, включая строки в массивах;
  * строковые значения других полей, начинающиеся с http или www,
    включая строки в массивах.
Вложенные объекты (например, gps и gpx) не обходятся. Ссылки группируются
по полям. Если ссылка встретилась в нескольких полях, в brokenLinks она
записывается один раз — в группе первого найденного поля.

Перед проверкой пропускаются ссылки, начинающиеся с одного из префиксов:
  https://vk.com, https://vk.ru, https://t.me, https://vksport, https://vkvideo,
  https://www.facebook, https://www.instagram, https://www.youtube,
  https://youtu.be, https://youtube.com, https://eventor.orienteering,
  https://news.worldofo, https://omaps.worldofo, https://web.archive.org.
Параметр --force отменяет это исключение и проверяет все собранные ссылки.

Каждая проверяемая уникальная ссылка ищется сначала в локальной копии проекта,
затем по HTTP/HTTPS. HTTP 404 и 410 считаются подтверждённым отсутствием файла.
Сетевые ошибки, 403 и ответы 5xx попадают в отчёт отдельно и не включаются
в brokenLinks, поскольку отсутствие файла в этих случаях не доказано.

Результаты:
  js/broken_links.js       — JS-массив brokenLinks, сгруппированный по полям;
  broken_links_out.txt     — подробный текстовый отчёт (по умолчанию).
Запуск из корня проекта:
  python tools/check_broken_links.py
  python tools/check_broken_links.py --force
  python tools/check_broken_links.py -v
  python tools/check_broken_links.py --out reports/broken_links.txt
  python tools/check_broken_links.py --workers 12 --timeout 20 --retries 2

Параметры:
  --js-dir DIR       папка с JS-файлами относительно корня проекта (по умолчанию js);
  --base URL         базовый URL сайта для относительных ссылок
                     (по умолчанию https://o-maps.spb.ru/);
  --out FILE_NAME    имя/путь файла подробного отчёта (по умолчанию broken_links_out.txt);
  --workers N        число одновременных HTTP-проверок (по умолчанию 8);
  --timeout SEC      тайм-аут одного HTTP-запроса в секундах (по умолчанию 20);
  --retries N        число повторов сетевых ошибок, HTTP 429 и 5xx (по умолчанию 2);
  -v, --verbose      вывести подробный отчёт также в консоль;
  --force            не применять список исключённых URL-префиксов, проверять все ссылки;
  -h, --help         показать справку и завершить работу.

Код завершения: 0 — нерабочих и непроверенных ссылок нет; 1 — найдены ссылки
с подтверждённым отсутствием; 2 — есть ссылки, которые не удалось проверить.
"""

import argparse
import http.client
import json
import os
import re
import shutil
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path


SCRIPT_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = SCRIPT_DIR.parent
USER_AGENT = 'o-maps check_broken_links.py'
BAR_WIDTH = 30
RED, YELLOW, GREEN, RESET = '\x1b[91m', '\x1b[93m', '\x1b[92m', '\x1b[0m'
RESULT_FIELDS = {'res', 'results'}

# Ссылки с этими префиксами обычно ведут на внешние социальные сети,
# видеохостинги или каталоги; по умолчанию их доступность не проверяется.
# --force отключает все эти исключения.
SKIP_URL_PREFIXES = (
    'https://vk.com',
    'https://vk.ru',
    'https://t.me',
    'https://vksport',
    'https://vkvideo',
    'https://www.facebook',
    'https://www.instagram',
    'https://www.youtube',
    'https://youtu.be',
    'https://youtube.com',
    'https://eventor.orienteering',
    'https://news.worldofo',
    'https://omaps.worldofo',
    'https://web.archive.org',
)


def duration(seconds):
    """Форматирует длительность: «14 с», «2 мин 05 с», «1 ч 03 мин»."""
    s = int(round(seconds))
    if s < 60:
        return f'{s} с'
    if s < 3600:
        return f'{s // 60} мин {s % 60:02d} с'
    return f'{s // 3600} ч {s % 3600 // 60:02d} мин'


class Progress:
    """Прогресс-бар в одной строке stderr; выключен, если stderr — не консоль."""

    def __init__(self, total):
        self.total = total
        self.started = time.time()
        self.shown = 0.0
        self.width = 0
        self.on = sys.stderr.isatty()
        self.finished = False

    def update(self, done, note=''):
        now = time.time()
        if not self.on or self.finished or (done < self.total and now - self.shown < 0.1):
            return
        self.shown = now
        frac = done / self.total if self.total else 1.0
        full = int(frac * BAR_WIDTH)
        elapsed = now - self.started
        line = (f'[{'█' * full}{'░' * (BAR_WIDTH - full)}] '
                f'{done:>{len(str(self.total))}}/{self.total} {frac:4.0%}  '
                f'{note}{"  " if note else ""}прошло {duration(elapsed)}')
        if 0 < done < self.total:
            line += f', осталось ~{duration(elapsed / done * (self.total - done))}'
        line = line[:max(1, shutil.get_terminal_size().columns - 1)]
        pad = max(0, self.width - len(line))
        self.width = len(line)
        sys.stderr.write('\r' + line + ' ' * pad)
        if done == self.total:
            sys.stderr.write('\n')
            self.finished = True
        sys.stderr.flush()


def decode_js_string(raw):
    """Декодирует содержимое строкового литерала JavaScript."""
    if len(raw) < 2:
        return ''
    source = raw[1:-1]
    out = []
    i = 0
    simple = {
        'n': '\n', 'r': '\r', 't': '\t', 'b': '\b',
        'f': '\f', 'v': '\v', '0': '\0',
        '\\': '\\', '/': '/', "'": "'", '"': '"', '`': '`',
    }

    while i < len(source):
        ch = source[i]
        if ch != '\\':
            out.append(ch)
            i += 1
            continue

        i += 1
        if i >= len(source):
            break

        esc = source[i]
        if esc in '\r\n':
            if esc == '\r' and i + 1 < len(source) and source[i + 1] == '\n':
                i += 1
            i += 1
            continue
        if esc in simple:
            out.append(simple[esc])
            i += 1
        elif esc == 'x' and i + 2 < len(source):
            try:
                out.append(chr(int(source[i + 1:i + 3], 16)))
                i += 3
            except ValueError:
                out.append('x')
                i += 1
        elif esc == 'u':
            if i + 1 < len(source) and source[i + 1] == '{':
                end = source.find('}', i + 2)
                if end >= 0:
                    try:
                        out.append(chr(int(source[i + 2:end], 16)))
                        i = end + 1
                    except (ValueError, OverflowError):
                        out.append('u')
                        i += 1
                else:
                    out.append('u')
                    i += 1
            elif i + 4 < len(source):
                try:
                    out.append(chr(int(source[i + 1:i + 5], 16)))
                    i += 5
                except ValueError:
                    out.append('u')
                    i += 1
            else:
                out.append('u')
                i += 1
        else:
            out.append(esc)
            i += 1

    return ''.join(out)


def tokenize_js(source):
    """Минимальный лексический анализатор, пропускающий комментарии и regex."""
    tokens = []
    i = 0
    n = len(source)

    while i < n:
        ch = source[i]

        if ch.isspace():
            i += 1
            continue

        if source.startswith('//', i):
            end = source.find('\n', i + 2)
            i = n if end < 0 else end + 1
            continue

        if source.startswith('/*', i):
            end = source.find('*/', i + 2)
            i = n if end < 0 else end + 2
            continue

        if ch in ("'", '"', '`'):
            start = i
            quote = ch
            i += 1
            escaped = False
            has_interpolation = False

            while i < n:
                current = source[i]
                if escaped:
                    escaped = False
                    i += 1
                    continue
                if current == '\\':
                    escaped = True
                    i += 1
                    continue
                if quote == '`' and source.startswith('${', i):
                    has_interpolation = True
                if current == quote:
                    i += 1
                    break
                i += 1

            raw = source[start:i]
            value = None if has_interpolation else decode_js_string(raw)
            tokens.append(('string', value, start))
            continue

        if ch.isalpha() or ch in '_$':
            start = i
            i += 1
            while i < n and (source[i].isalnum() or source[i] in '_$'):
                i += 1
            tokens.append(('id', source[start:i], start))
            continue

        if ch == '/':
            previous = tokens[-1] if tokens else None
            regex_can_start = (
                previous is None
                or previous[0] == 'punct' and previous[1] in
                ('(', '[', '{', '=', ':', ',', ';', '!', '?', '&', '|', '+', '-', '*', '%', '^', '~', '<', '>')
                or previous[0] == 'id' and previous[1] in
                ('return', 'throw', 'case', 'delete', 'void', 'typeof', 'instanceof', 'in', 'of', 'yield', 'await')
            )
            if regex_can_start:
                start = i
                i += 1
                in_class = False
                escaped = False
                while i < n:
                    current = source[i]
                    if escaped:
                        escaped = False
                    elif current == '\\':
                        escaped = True
                    elif current == '[':
                        in_class = True
                    elif current == ']':
                        in_class = False
                    elif current == '/' and not in_class:
                        i += 1
                        while i < n and source[i].isalpha():
                            i += 1
                        break
                    elif current in '\r\n':
                        break
                    i += 1
                tokens.append(('regex', source[start:i], start))
                continue

        tokens.append(('punct', ch, i))
        i += 1

    return tokens


def is_url_value(value):
    """True, если строковое значение начинается с http или www."""
    return isinstance(value, str) and value.strip().lower().startswith(('http', 'www'))


def split_link_value(value):
    """Разделяет несколько URL в одном поле, если они перечислены через запятую."""
    # Например: 'http://site-one.ru , http://site-two.ru'. Запятая внутри
    # URL не затрагивается: разделителем считается только запятая, после
    # которой начинается новый http(s)- или www-адрес.
    parts = re.split(r',\s*(?=(?:https?://|www\.))', value, flags=re.IGNORECASE)
    return [part.strip() for part in parts if part.strip()]


def extract_links(source):
    """Извлекает ссылки из непосредственных полей объектов — элементов массивов.

    Свойства вложенных объектов не считаются полями записи. Например, ключи W/M
    внутри gps или M/L/S внутри gpx не обрабатываются отдельно. При этом строки
    непосредственно в массиве значения поля (например, res: ['url']) учитываются.
    """
    tokens = tokenize_js(source)
    found = []
    delimiter_stack = []

    for i, token in enumerate(tokens):
        # В этих JS-файлах массивы записей объявлены на верхнем уровне. Поэтому
        # непосредственное поле записи имеет ровно такой стек: ['[', '{'].
        # Вложенные gps/gpx и массивы внутри полей имеют дополнительный уровень.
        is_record_property = delimiter_stack == ['[', '{']
        is_property_key = (token[0] in ('id', 'string') and i + 1 < len(tokens)
                           and tokens[i + 1][1] == ':')

        if is_record_property and is_property_key:
            key = token[1] if isinstance(token[1], str) else ''
            key = key.strip().lower()
            if key:
                collect_all_strings = key in RESULT_FIELDS
                value_index = i + 2

                if value_index < len(tokens):
                    value_token = tokens[value_index]
                    if value_token[0] == 'string':
                        value = value_token[1]
                        if (isinstance(value, str) and value.strip()
                                and (collect_all_strings or is_url_value(value))):
                            found.extend((key, link) for link in split_link_value(value.strip()))
                    elif value_token[1] == '[':
                        # Собираем строковые элементы массива; строки внутри объектов
                        # (если массив содержит объекты) не относятся к значению-ссылке.
                        array_depth = 0
                        object_depth = 0
                        for item in tokens[value_index:]:
                            if item[1] == '[':
                                array_depth += 1
                            elif item[1] == ']':
                                array_depth -= 1
                                if array_depth == 0:
                                    break
                            elif item[1] == '{':
                                object_depth += 1
                            elif item[1] == '}' and object_depth:
                                object_depth -= 1
                            elif (array_depth >= 1 and object_depth == 0
                                  and item[0] == 'string' and isinstance(item[1], str)
                                  and item[1].strip()):
                                if collect_all_strings or is_url_value(item[1]):
                                    found.extend((key, link)
                                                 for link in split_link_value(item[1].strip()))

        if token[1] in ('[', '{', '('):
            delimiter_stack.append(token[1])
        elif token[1] in (']', '}', ')'):
            expected = {']': '[', '}': '{', ')': '('}[token[1]]
            if delimiter_stack and delimiter_stack[-1] == expected:
                delimiter_stack.pop()

    return found


def selected_js_files(js_dir):
    """Возвращает только календарные, картографические и track JS-файлы."""
    files = set(js_dir.glob('calendar-*.js'))
    files.update(js_dir.glob('maps-*.js'))
    files.update(js_dir.glob('tracks*.js'))
    return sorted(path for path in files if path.is_file())


def collect_links(js_dir):
    """Собирает уникальные ссылки, поля и файлы, в которых они встречаются."""
    links_by_file = {}
    links_by_field = {}
    fields_by_link = {}
    files = selected_js_files(js_dir)

    for path in files:
        try:
            source = path.read_text(encoding='utf-8-sig', errors='replace')
        except OSError as error:
            print(f'Не удалось прочитать {path}: {error}', file=sys.stderr)
            continue

        relative_path = path.relative_to(js_dir).as_posix()
        for field, link in extract_links(source):
            links_by_file.setdefault(link, set()).add(relative_path)
            links_by_field.setdefault(field, set()).add(link)
            fields_by_link.setdefault(link, [])
            if field not in fields_by_link[link]:
                fields_by_link[link].append(field)

    return links_by_file, links_by_field, fields_by_link, len(files)


def local_file_for_link(link, root, base):
    """Ищет локальный файл для относительной или ведущей на этот сайт ссылки."""
    base_parts = urllib.parse.urlsplit(base)
    parsed = urllib.parse.urlsplit(link)
    path = None

    if parsed.scheme in ('http', 'https'):
        host = (parsed.hostname or '').lower()
        base_host = (base_parts.hostname or '').lower()
        same_host = host == base_host or host == f'www.{base_host}' or f'www.{host}' == base_host
        if same_host:
            path = parsed.path
    elif not parsed.scheme and not parsed.netloc:
        # www-домен без схемы тоже может вести на локальную копию сайта.
        if link.strip().lower().startswith('www.'):
            www_parts = urllib.parse.urlsplit('https://' + link.strip())
            host = (www_parts.hostname or '').lower()
            base_host = (base_parts.hostname or '').lower()
            if host == base_host or host == f'www.{base_host}' or f'www.{host}' == base_host:
                path = www_parts.path
        else:
            # Пути вида ./docs/file.pdf, ../docs/file.pdf, /docs/file.pdf и docs/file.pdf.
            path = parsed.path
    elif parsed.scheme == 'file':
        path = parsed.path

    if path is None:
        return None

    relative = urllib.parse.unquote(path).lstrip('/\\')
    if not relative:
        return None

    candidate = (root / Path(*relative.replace('\\', '/').split('/'))).resolve()
    try:
        candidate.relative_to(root.resolve())
    except ValueError:
        return None

    return candidate if candidate.is_file() else None


def make_http_url(link, base):
    """Преобразует ссылку из JS в пригодный для urllib URL."""
    value = link.strip()
    if value.startswith('//'):
        value = urllib.parse.urlsplit(base).scheme + ':' + value
    elif not urllib.parse.urlsplit(value).scheme:
        if re.match(r'^(?:www\.)?[a-z0-9.-]+\.[a-z]{2,}(?:[:/]|$)', value, re.I):
            value = 'https://' + value
        else:
            value = urllib.parse.urljoin(base, value)

    parts = urllib.parse.urlsplit(value)
    path = urllib.parse.quote(urllib.parse.unquote(parts.path), safe="/%:@!$&'()*+,;=-._~")
    return urllib.parse.urlunsplit((parts.scheme, parts.netloc, path, parts.query, parts.fragment))


def http_request(url, method, timeout):
    """Возвращает HTTP-код; для GET запрашивает только первый байт."""
    headers = {'User-Agent': USER_AGENT, 'Accept-Encoding': 'identity'}
    if method == 'GET':
        headers['Range'] = 'bytes=0-0'

    request = urllib.request.Request(url, method=method, headers=headers)
    try:
        with urllib.request.urlopen(request, timeout=timeout) as response:
            return response.status, ''
    except urllib.error.HTTPError as error:
        error.close()
        return error.code, ''
    except (urllib.error.URLError, OSError, ValueError, http.client.HTTPException, UnicodeError) as error:
        return None, str(getattr(error, 'reason', error))


def check_link(link, root, base, timeout, retries):
    """Возвращает (ссылка, статус, пояснение): exists, missing или unknown."""
    try:
        local = local_file_for_link(link, root, base)
    except ValueError as error:
        return link, 'unknown', f'некорректная ссылка: {error}'
    if local:
        return link, 'exists', f'локально: {local.relative_to(root)}'

    try:
        url = make_http_url(link, base)
    except (TypeError, ValueError) as error:
        return link, 'unknown', f'некорректная ссылка: {error}'

    last_error = ''
    for attempt in range(retries + 1):
        code, error = http_request(url, 'HEAD', timeout)
        if code in (403, 405, 501):
            code, error = http_request(url, 'GET', timeout)

        if code in (404, 410):
            return link, 'missing', f'HTTP {code}'
        if code is not None and 200 <= code < 400:
            return link, 'exists', f'HTTP {code}'

        if code is not None:
            last_error = f'HTTP {code}'
        else:
            last_error = error or 'сетевая ошибка'

        if code not in (429,) and not (code is not None and code >= 500) and error == '':
            break
        if attempt < retries:
            time.sleep(2 ** attempt)

    return link, 'unknown', last_error


def primary_field(link, fields_by_link):
    """Поле, в группе которого будет показана ссылка (чтобы не дублировать её)."""
    fields = fields_by_link.get(link) or []
    return fields[0] if fields else 'прочее'


def group_items_by_field(items, fields_by_link):
    """Группирует (ссылка, описание) по первому полю, сохраняя уникальность ссылок."""
    groups = {}
    for link, detail in items:
        field = primary_field(link, fields_by_link)
        groups.setdefault(field, []).append((link, detail))
    return {field: sorted(values, key=lambda item: item[0].casefold())
            for field, values in sorted(groups.items(), key=lambda item: item[0].casefold())}


def write_js(path, broken_links_by_field):
    """Записывает уникальные нерабочие ссылки, сгруппированные по полям."""
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open('w', encoding='utf-8', newline='\n') as file:
        file.write('// Ссылки, которые не найдены ни локально, ни на сайте.\n')
        file.write('// Файл сформирован скриптом tools/check_broken_links.py.\n')
        file.write('const brokenLinks = [\n')
        for field, items in broken_links_by_field.items():
            if not items:
                continue
            safe_field = re.sub(r'[\r\n]+', ' ', field).replace('*/', '* /')
            file.write(f'    // {safe_field}\n')
            for link, _detail in items:
                value = json.dumps(link, ensure_ascii=False).replace('\u2028', '\\u2028').replace('\u2029', '\\u2029')
                file.write(f'    {value},\n')
        file.write('];\n')


def build_report(files_count, links_by_file, links_by_field, fields_by_link,
                 broken, unknown, local_count, online_count, skipped_count,
                 skipped_by_prefix, elapsed, js_path, report_path):
    """Формирует подробный текстовый отчёт с группировкой по полям данных."""
    lines = [
        'Проверка ссылок O-Maps',
        f'Дата: {time.strftime("%Y-%m-%d %H:%M:%S")}',
        '',
        f'Проверено JS-файлов: {files_count}',
        f'Всего уникальных ссылок собрано: {len(links_by_file)}',
        f'Исключено по URL-префиксам: {skipped_count}',
        f'Проверено ссылок: {len(links_by_file) - skipped_count}',
        f'Найдено локально: {local_count}',
        f'Найдено в интернете: {online_count}',
        f'Не найдено: {len(broken)}',
        f'Не удалось проверить: {len(unknown)}',
        f'Время выполнения: {duration(elapsed)}',
        f'JS-список: {js_path}',
        f'Файл отчёта: {report_path}',
        '',
        'ССЫЛКИ ПО ПОЛЯМ (уникальные в пределах каждого поля):',
    ]

    for field, links in sorted(links_by_field.items(), key=lambda item: item[0].casefold()):
        lines.append(f'  {field}: {len(links)}')

    if skipped_by_prefix:
        lines += ['', 'ИСКЛЮЧЕНО ПО ПРЕФИКСАМ:']
        for prefix, count in sorted(skipped_by_prefix.items()):
            lines.append(f'  {prefix}: {count}')

    def append_grouped(title, items):
        groups = group_items_by_field(items, fields_by_link)
        lines.extend(['', f'{title} ({len(items)}):'])
        if not items:
            lines.append('  нет')
            return
        for field, values in groups.items():
            lines.append(f'  [{field}] — {len(values)}')
            for link, detail in values:
                other_fields = [name for name in fields_by_link.get(link, []) if name != field]
                extra = f'; также поля: {", ".join(other_fields)}' if other_fields else ''
                sources = ', '.join(sorted(links_by_file.get(link, ())))
                lines.append(f'    {link} — {detail}{extra}; файлы: {sources}')

    append_grouped('НЕРАБОЧИЕ ССЫЛКИ', broken)
    append_grouped('НЕ УДАЛОСЬ ПРОВЕРИТЬ (в brokenLinks не включены)', unknown)

    if not broken and not unknown:
        lines += ['', 'Все ссылки найдены.']

    return '\n'.join(lines) + '\n'


def main():
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument('--js-dir', default='js',
                        help='папка с JS-файлами относительно корня проекта (по умолчанию js)')
    parser.add_argument('--base', default='https://o-maps.spb.ru/',
                        help='базовый URL сайта для относительных ссылок')
    parser.add_argument('--out', default='broken_links_out.txt', metavar='FILE_NAME',
                        help='файл подробного отчёта (по умолчанию broken_links_out.txt)')
    parser.add_argument('--workers', type=int, default=8,
                        help='одновременных HTTP-проверок (по умолчанию 8)')
    parser.add_argument('--timeout', type=float, default=20,
                        help='тайм-аут запроса в секундах (по умолчанию 20)')
    parser.add_argument('--retries', type=int, default=2,
                        help='повторов сетевых ошибок, 429 и 5xx (по умолчанию 2)')
    parser.add_argument('-v', '--verbose', action='store_true',
                        help='выводить подробный отчёт также в консоль')
    parser.add_argument('--force', action='store_true',
                        help='проверять все ссылки, включая начинающиеся с исключённых URL-префиксов')
    args = parser.parse_args()

    for stream in (sys.stdout, sys.stderr):
        if hasattr(stream, 'reconfigure'):
            stream.reconfigure(errors='replace')

    root = PROJECT_ROOT.resolve()
    js_dir = (root / args.js_dir).resolve()
    js_path = js_dir / 'broken_links.js'
    report_path = Path(args.out)
    if not report_path.is_absolute():
        report_path = root / report_path

    if not js_dir.is_dir():
        parser.error(f'нет папки {js_dir}; скрипт должен находиться в tools/ проекта O-Maps')
    if args.workers < 1 or args.timeout <= 0 or args.retries < 0:
        parser.error('--workers должен быть >= 1, --timeout > 0, --retries >= 0')

    base = args.base if args.base.endswith('/') else args.base + '/'
    links_by_file, links_by_field, fields_by_link, file_count = collect_links(js_dir)

    skipped_by_prefix = {}
    skipped_links = set()
    if not args.force:
        for link in links_by_file:
            lowered = link.strip().casefold()
            matched_prefix = next((prefix for prefix in SKIP_URL_PREFIXES
                                   if lowered.startswith(prefix.casefold())), None)
            if matched_prefix:
                skipped_links.add(link)
                skipped_by_prefix[matched_prefix] = skipped_by_prefix.get(matched_prefix, 0) + 1

    links = [link for link in links_by_file if link not in skipped_links]

    broken, unknown = [], []
    local_count = online_count = 0
    started = time.time()
    progress = Progress(len(links))
    progress.update(0, 'не найдено: 0')

    with ThreadPoolExecutor(max_workers=args.workers) as pool:
        jobs = [pool.submit(check_link, link, root, base, args.timeout, args.retries) for link in links]
        for done, job in enumerate(as_completed(jobs), 1):
            link, status, detail = job.result()
            if status == 'missing':
                broken.append((link, detail))
            elif status == 'unknown':
                unknown.append((link, detail))
            elif detail.startswith('локально:'):
                local_count += 1
            else:
                online_count += 1
            progress.update(done, f'не найдено: {len(broken)}, не проверено: {len(unknown)}')

    broken.sort(key=lambda item: item[0].casefold())
    unknown.sort(key=lambda item: item[0].casefold())
    broken_by_field = group_items_by_field(broken, fields_by_link)
    write_js(js_path, broken_by_field)

    elapsed = time.time() - started
    report = build_report(file_count, links_by_file, links_by_field, fields_by_link,
                          broken, unknown, local_count, online_count, len(skipped_links),
                          skipped_by_prefix, elapsed, js_path, report_path)
    report_path.parent.mkdir(parents=True, exist_ok=True)
    report_path.write_text(report, encoding='utf-8', newline='\n')

    if args.verbose:
        print(report, end='')
    else:
        print(f'Проверка завершена: {len(links)} ссылок проверено, '
              f'исключено {len(skipped_links)}, не найдено {len(broken)}, '
              f'не удалось проверить {len(unknown)}.')
        print(f'Отчёт: {report_path}')
        print(f'Список: {js_path}')

    return 2 if unknown else 1 if broken else 0


if __name__ == '__main__':
    sys.exit(main())
