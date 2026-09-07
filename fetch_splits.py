#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
fetch_splits.py — сбор файлов сплитов с o-site.spb.ru и прописывание ссылок
в записи календаря (calendar*.js).

Что делает
----------
1. Разбирает файлы calendar*.js, находит записи с полем ``o_site`` и без поля ``split``.
2. Для каждой такой записи открывает https://o-site.spb.ru/race.php?id=<o_site>
3. Ищет на странице ссылки на сплиты:
      - по тексту ссылки, содержащему слово «сплит» в любой форме (или "split");
      - либо по адресу ссылки, содержащему "split".
4. Скачивает найденные файлы в  splits/<год>/<ID события>[_N]_split.<расширение>
5. Прописывает в запись календаря поле ``split``: <link-prefix>/<год>/<имя файла>
   (строка или массив строк).

Свойства
--------
* идемпотентность: записи, у которых уже есть поле ``split``, пропускаются;
* --dry-run: ничего не скачивает и не пишет, только отчёт;
* исходные файлы не портит: сохраняются кодировка UTF-8 и переводы строк (LF/CRLF)
  каждого конкретного файла; запись в js делается точечной вставкой одной строки;
* состояние (--state) позволяет продолжить прерванный прогон без повторных запросов.

Примеры
-------
    python fetch_splits.py --js-dir js --dry-run
    python fetch_splits.py --js-dir js --year 2026
    python fetch_splits.py --js-dir js --file calendar-2019.js --sleep 1.5
"""

from __future__ import annotations

import argparse
import io
import json
import os
import posixpath
import re
import sys
import time
import tempfile
import hashlib
import unicodedata
from dataclasses import dataclass, field as dc_field
from typing import Dict, Iterable, List, Optional, Sequence, Tuple
from urllib.parse import urljoin, urlparse, unquote

try:
    import requests
except ImportError:  # pragma: no cover
    requests = None
    import urllib.request
    import urllib.error

try:
    from bs4 import BeautifulSoup
except ImportError:  # pragma: no cover
    print('Требуется beautifulsoup4:  pip install beautifulsoup4', file=sys.stderr)
    raise


# --------------------------------------------------------------------------- #
#  Настройки                                                                    #
# --------------------------------------------------------------------------- #

RACE_URL_TEMPLATE = 'https://o-site.spb.ru/race.php?id={o_site}'

#: имя вставляемого поля
SPLIT_FIELD = 'split'

#: после какого поля вставлять ``split`` (первое найденное из списка);
#: если ни одного нет — поле добавляется последним в записи.
ANCHOR_FIELDS = ('res', 'o_site')

#: ссылки, ведущие на эти паттерны, сплитами не считаются
#: (videosplit — это видео с дистанции на northernwind.spb.ru, а не результаты)
EXCLUDE_URL_PATTERNS = ('video',)

#: схемы, которые не качаем
SKIP_SCHEMES = ('mailto', 'javascript', 'tel', 'data', 'ftp')

#: расширение по умолчанию, если его не удалось определить
DEFAULT_EXT = 'html'

CONTENT_TYPE_EXT = {
    'text/html': 'html',
    'application/xhtml+xml': 'html',
    'text/plain': 'txt',
    'application/pdf': 'pdf',
    'application/vnd.ms-excel': 'xls',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
    'application/msword': 'doc',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
    'application/zip': 'zip',
    'application/xml': 'xml',
    'text/xml': 'xml',
    'text/csv': 'csv',
}

#: допустимые расширения, взятые из URL (защита от мусора вроде ".php?id=1")
KNOWN_EXTS = {
    'html', 'htm', 'xhtml', 'shtml', 'txt', 'pdf', 'xls', 'xlsx', 'doc', 'docx',
    'zip', 'rar', '7z', 'csv', 'xml', 'json', 'rtf', 'mht', 'mhtml',
}

USER_AGENT = 'Mozilla/5.0 (compatible; o-maps-splits-collector/1.0; +https://o-maps.spb.ru/)'

MAX_FILE_SIZE = 64 * 1024 * 1024


# --------------------------------------------------------------------------- #
#  Разбор JS                                                                    #
# --------------------------------------------------------------------------- #

@dataclass
class JsField:
    key: str
    start: int          # смещение начала строки-ключа внутри текста файла
    key_pos: int        # смещение самого ключа
    end: int            # смещение конца значения (не включая запятую)


@dataclass
class JsRecord:
    file: str
    start: int          # смещение '{'
    end: int            # смещение за '}'
    text: str
    fields: List[JsField] = dc_field(default_factory=list)

    def field(self, name: str) -> Optional[JsField]:
        for f in self.fields:
            if f.key == name:
                return f
        return None

    def has(self, name: str) -> bool:
        return self.field(name) is not None


def _scan(text: str, start: int, stop: int):
    """Генератор (index, char, in_code) — пропускает строки и комментарии."""
    i = start
    n = min(stop, len(text))
    while i < n:
        ch = text[i]
        if ch in '\'"`':
            quote = ch
            i += 1
            while i < n:
                if text[i] == '\\':
                    i += 2
                    continue
                if text[i] == quote:
                    i += 1
                    break
                i += 1
            continue
        if ch == '/' and i + 1 < n:
            nxt = text[i + 1]
            if nxt == '/':
                j = text.find('\n', i)
                i = n if j == -1 else j
                continue
            if nxt == '*':
                j = text.find('*/', i + 2)
                i = n if j == -1 else j + 2
                continue
        yield i, ch
        i += 1


def find_array_span(text: str) -> Optional[Tuple[int, int]]:
    """Находит первый литерал массива верхнего уровня: возвращает (поз '[', поз ']')."""
    start = None
    depth = 0
    for i, ch in _scan(text, 0, len(text)):
        if ch == '[':
            if depth == 0:
                start = i
            depth += 1
        elif ch == ']':
            depth -= 1
            if depth == 0 and start is not None:
                return start, i
            if depth < 0:
                return None
    return None


def split_records(text: str, arr_start: int, arr_end: int) -> List[Tuple[int, int]]:
    """Возвращает список (start, end) объектов верхнего уровня внутри массива."""
    out: List[Tuple[int, int]] = []
    depth = 0
    obj_start = None
    for i, ch in _scan(text, arr_start + 1, arr_end):
        if ch in '{[':
            if ch == '{' and depth == 0:
                obj_start = i
            depth += 1
        elif ch in '}]':
            depth -= 1
            if depth == 0 and ch == '}' and obj_start is not None:
                out.append((obj_start, i + 1))
                obj_start = None
    return out


_KEY_RE = re.compile(r"""\s*(?:(?P<bare>[A-Za-z_$][\w$]*)|'(?P<sq>[^']*)'|"(?P<dq>[^"]*)")\s*:""")


def parse_fields(text: str, obj_start: int, obj_end: int) -> List[JsField]:
    """Разбирает поля верхнего уровня объекта."""
    fields: List[JsField] = []
    body_start, body_end = obj_start + 1, obj_end - 1

    # позиции запятых верхнего уровня
    seps = [body_start]
    depth = 0
    for i, ch in _scan(text, body_start, body_end):
        if ch in '{[(':
            depth += 1
        elif ch in '}])':
            depth -= 1
        elif ch == ',' and depth == 0:
            seps.append(i)
    seps.append(body_end)

    for k in range(len(seps) - 1):
        chunk_start = seps[k] + (1 if k > 0 else 0)
        chunk_end = seps[k + 1]
        chunk = text[chunk_start:chunk_end]
        if not chunk.strip():
            continue
        # ключ ищем, пропуская ведущие пробелы и комментарии
        pos = chunk_start
        while pos < chunk_end:
            m_ws = re.match(r'\s*', text[pos:chunk_end])
            pos += m_ws.end()
            if text.startswith('//', pos):
                j = text.find('\n', pos)
                pos = chunk_end if j == -1 else min(j + 1, chunk_end)
                continue
            if text.startswith('/*', pos):
                j = text.find('*/', pos)
                pos = chunk_end if j == -1 else min(j + 2, chunk_end)
                continue
            break
        m = _KEY_RE.match(text, pos, chunk_end)
        if not m:
            continue
        key = m.group('bare') or m.group('sq') or m.group('dq')
        line_start = text.rfind('\n', 0, pos) + 1
        value_end = chunk_end
        while value_end > pos and text[value_end - 1] in ' \t\r\n':
            value_end -= 1
        fields.append(JsField(key=key, start=line_start, key_pos=pos, end=value_end))
    return fields


_STR_RE = re.compile(r"'((?:[^'\\]|\\.)*)'|\"((?:[^\"\\]|\\.)*)\"")


def field_string(text: str, f: Optional[JsField]) -> Optional[str]:
    """Достаёт строковое значение поля (если значение — строковый литерал)."""
    if f is None:
        return None
    raw = text[f.key_pos:f.end]
    colon = raw.find(':')
    if colon == -1:
        return None
    value = raw[colon + 1:].strip()
    m = _STR_RE.match(value)
    if not m:
        return None
    s = m.group(1) if m.group(1) is not None else m.group(2)
    return s.replace("\\'", "'").replace('\\"', '"').replace('\\\\', '\\')


def load_calendar(path: str) -> Tuple[str, List[JsRecord]]:
    with io.open(path, 'r', encoding='utf-8', newline='') as fh:
        text = fh.read()
    span = find_array_span(text)
    if not span:
        return text, []
    recs: List[JsRecord] = []
    for s, e in split_records(text, span[0], span[1]):
        rec = JsRecord(file=path, start=s, end=e, text=text)
        rec.fields = parse_fields(text, s, e)
        recs.append(rec)
    return text, recs


# --------------------------------------------------------------------------- #
#  Вставка поля split                                                           #
# --------------------------------------------------------------------------- #

def detect_eol(text: str, pos: int) -> str:
    line_end = text.find('\n', pos)
    if line_end > 0 and text[line_end - 1] == '\r':
        return '\r\n'
    return '\n'


def detect_indent(text: str, f: JsField) -> str:
    line = text[f.start:f.key_pos]
    return line if line.strip() == '' else '        '


def render_split_value(paths: Sequence[str], indent: str, eol: str) -> str:
    if len(paths) == 1:
        return "{k}: '{v}'".format(k=SPLIT_FIELD, v=paths[0])
    inner = indent + '    '
    items = (',' + eol).join("{i}'{v}'".format(i=inner, v=p) for p in paths)
    return "{k}: [{eol}{items}{eol}{ind}]".format(
        k=SPLIT_FIELD, eol=eol, items=items, ind=indent)


def build_insertion(text: str, rec: JsRecord, paths: Sequence[str]) -> Tuple[int, str, Optional[Tuple[int, str]]]:
    """
    Возвращает (позиция вставки, вставляемый текст, опциональная правка «добавить запятую»).
    Правка запятой: (позиция, ',') — нужна, если якорное поле было последним.
    """
    anchor = None
    for name in ANCHOR_FIELDS:
        anchor = rec.field(name)
        if anchor:
            break
    if anchor is None:
        anchor = rec.fields[-1] if rec.fields else None
    if anchor is None:
        raise ValueError('пустая запись календаря')

    eol = detect_eol(text, anchor.key_pos)
    indent = detect_indent(text, anchor)
    value = render_split_value(paths, indent, eol)

    # есть ли запятая сразу после якорного поля (то есть якорь — не последнее поле)
    tail = text[anchor.end:rec.end - 1]
    has_comma = tail.lstrip(' \t\r\n').startswith(',')

    if has_comma:
        comma_pos = anchor.end + tail.index(',') + 1
        insert_at = text.find('\n', comma_pos)
        insert_at = comma_pos if insert_at == -1 else insert_at + 1
        return insert_at, indent + value + ',' + eol, None

    # якорь — последнее поле: ставим запятую после него, а split без запятой
    insert_at = text.find('\n', anchor.end)
    insert_at = anchor.end if insert_at == -1 else insert_at + 1
    return insert_at, indent + value + eol, (anchor.end, ',')




def parse_split_paths(text: str, rec: JsRecord) -> List[str]:
    """Извлекает пути из существующего поля split."""
    f = rec.field(SPLIT_FIELD)
    if not f:
        return []
    raw = text[f.key_pos:f.end]
    return re.findall(r"""['"]([^'"]+)['"]""", raw)


def build_split_append(text: str, rec: JsRecord, paths: Sequence[str]) -> Tuple[int, str]:
    """Добавляет новые пути в существующее поле split."""
    f = rec.field(SPLIT_FIELD)
    if f is None:
        raise ValueError('поле split отсутствует')
    old = parse_split_paths(text, rec)
    all_paths = old + [p for p in paths if p not in old]
    eol = detect_eol(text, f.key_pos)
    indent = detect_indent(text, f)
    return f.start, indent + render_split_value(all_paths, indent, eol)


def build_split_replacement(text: str, rec: JsRecord, paths: Sequence[str]) -> Tuple[int, str]:
    """Заменяет существующее поле split новым значением."""
    field = rec.field(SPLIT_FIELD)
    if field is None:
        raise ValueError('поле split отсутствует')
    eol = detect_eol(text, field.key_pos)
    indent = detect_indent(text, field)
    return field.start, indent + render_split_value(paths, indent, eol)


def apply_edits(text: str, edits: List[Tuple[int, str]]) -> str:
    """edits: список (позиция, вставляемая строка). Применяются с конца."""
    for pos, chunk in sorted(edits, key=lambda x: -x[0]):
        text = text[:pos] + chunk + text[pos:]
    return text


# --------------------------------------------------------------------------- #
#  HTTP                                                                         #
# --------------------------------------------------------------------------- #

@dataclass
class HttpResponse:
    url: str
    status: int
    content: bytes
    content_type: str = ''
    charset: str = ''


class Fetcher:
    def __init__(self, timeout: float = 30.0, retries: int = 2, sleep: float = 1.0):
        self.timeout = timeout
        self.retries = retries
        self.sleep = sleep
        self._last = 0.0
        if requests is not None:
            self.session = requests.Session()
            self.session.headers.update({'User-Agent': USER_AGENT})
        else:
            self.session = None

    def _throttle(self):
        delta = time.time() - self._last
        if delta < self.sleep:
            time.sleep(self.sleep - delta)
        self._last = time.time()

    def get(self, url: str) -> HttpResponse:
        last_err = None
        for attempt in range(self.retries + 1):
            self._throttle()
            try:
                return self._get_once(url)
            except Exception as exc:  # noqa: BLE001
                last_err = exc
                if attempt < self.retries:
                    time.sleep(1.5 * (attempt + 1))
        raise last_err  # type: ignore[misc]

    def _get_once(self, url: str) -> HttpResponse:
        if self.session is not None:
            r = self.session.get(url, timeout=self.timeout, allow_redirects=True)
            ctype = r.headers.get('Content-Type', '')
            charset = ''
            if 'charset=' in ctype.lower():
                charset = ctype.lower().split('charset=')[1].split(';')[0].strip()
            if len(r.content) > MAX_FILE_SIZE:
                raise ValueError('файл слишком большой: %d байт' % len(r.content))
            return HttpResponse(url=r.url, status=r.status_code, content=r.content,
                                content_type=ctype.split(';')[0].strip().lower(),
                                charset=charset)
        req = urllib.request.Request(url, headers={'User-Agent': USER_AGENT})
        with urllib.request.urlopen(req, timeout=self.timeout) as resp:
            data = resp.read(MAX_FILE_SIZE + 1)
            if len(data) > MAX_FILE_SIZE:
                raise ValueError('файл слишком большой')
            ctype = resp.headers.get('Content-Type', '') or ''
            charset = ''
            if 'charset=' in ctype.lower():
                charset = ctype.lower().split('charset=')[1].split(';')[0].strip()
            return HttpResponse(url=resp.geturl(), status=resp.status, content=data,
                                content_type=ctype.split(';')[0].strip().lower(),
                                charset=charset)


# --------------------------------------------------------------------------- #
#  Поиск ссылок на сплиты                                                       #
# --------------------------------------------------------------------------- #

_SPLIT_WORD_RE = re.compile(r'сплит|split', re.IGNORECASE)


def _normalize(s: str) -> str:
    s = unicodedata.normalize('NFKC', s or '')
    s = s.replace('\u00a0', ' ')
    return re.sub(r'\s+', ' ', s).strip()


def decode_html(resp: HttpResponse) -> BeautifulSoup:
    encodings = []
    if resp.charset:
        encodings.append(resp.charset)
    head = resp.content[:4096].decode('latin-1', 'ignore')
    m = re.search(r'charset\s*=\s*["\']?\s*([\w-]+)', head, re.IGNORECASE)
    if m:
        encodings.append(m.group(1))
    encodings += ['windows-1251', 'utf-8', 'koi8-r']
    for enc in encodings:
        try:
            return BeautifulSoup(resp.content.decode(enc), 'html.parser')
        except (UnicodeDecodeError, LookupError):
            continue
    return BeautifulSoup(resp.content.decode('windows-1251', 'replace'), 'html.parser')


def find_split_links(soup: BeautifulSoup, base_url: str) -> List[Tuple[str, str]]:
    """Возвращает список (абсолютный URL, текст ссылки) без дублей, в порядке появления."""
    found: List[Tuple[str, str]] = []
    seen = set()
    for a in soup.find_all('a'):
        href = (a.get('href') or '').strip()
        if not href or href.startswith('#'):
            continue
        scheme = urlparse(href).scheme.lower()
        if scheme in SKIP_SCHEMES:
            continue

        label_parts = [a.get_text(' ', strip=True), a.get('title') or '']
        for img in a.find_all('img'):
            label_parts += [img.get('alt') or '', img.get('title') or '']
        label = _normalize(' '.join(p for p in label_parts if p))

        by_label = bool(_SPLIT_WORD_RE.search(label))
        by_href = 'split' in href.lower()
        if not (by_label or by_href):
            continue

        url = urljoin(base_url, href)
        low = url.lower()
        if any(p in low for p in EXCLUDE_URL_PATTERNS):
            continue
        key = url.split('#')[0]
        if key in seen:
            continue
        seen.add(key)
        found.append((key, label))
    return found


def guess_ext(url: str, resp: Optional[HttpResponse]) -> str:
    path = unquote(urlparse(url).path)
    ext = posixpath.splitext(path)[1].lstrip('.').lower()
    if ext in KNOWN_EXTS:
        return ext
    if resp is not None and resp.content_type in CONTENT_TYPE_EXT:
        return CONTENT_TYPE_EXT[resp.content_type]
    if resp is not None and resp.content[:5] == b'%PDF-':
        return 'pdf'
    return DEFAULT_EXT


# --------------------------------------------------------------------------- #
#  Основная логика                                                              #
# --------------------------------------------------------------------------- #

@dataclass
class Result:
    file: str
    event_id: str
    o_site: str
    year: str
    status: str                      # ok | no-links | error | skipped
    saved: List[str] = dc_field(default_factory=list)
    links: List[str] = dc_field(default_factory=list)
    message: str = ''


def event_year(date_value: Optional[str], event_id: str) -> Optional[str]:
    if date_value and re.match(r'^\d{4}', date_value):
        return date_value[:4]
    m = re.search(r'_(\d{4})\d{4}(?:_|$)', event_id or '')
    return m.group(1) if m else None


def process_file(path: str, args, fetcher: Fetcher, state: Dict[str, dict],
                 results: List[Result], budget: List[int]) -> bool:
    text, records = load_calendar(path)
    if not records:
        return False

    fname = os.path.basename(path)
    edits: List[Tuple[int, str]] = []
    changed = 0

    for rec in records:
        if budget[0] == 0:
            break
        o_site = field_string(text, rec.field('o_site'))
        if not o_site:
            continue
        if rec.has(SPLIT_FIELD) and not args.update:
            continue
        event_id = field_string(text, rec.field('id')) or ''
        date_value = field_string(text, rec.field('date'))
        year = event_year(date_value, event_id)

        if not event_id:
            results.append(Result(fname, '', o_site, year or '', 'error',
                                  message='нет поля id'))
            continue
        if not year:
            results.append(Result(fname, event_id, o_site, '', 'error',
                                  message='не удалось определить год'))
            continue
        if args.year and year != args.year:
            continue

        budget[0] -= 1
        existing_splits = parse_split_paths(text, rec)
        res = handle_event(fname, event_id, o_site, year, args, fetcher, state, existing_splits)
        results.append(res)
        if args.verbose or res.status == 'ok':
            print('    %-24s %-18s %s %s' % (event_id, o_site, res.status,
                                             res.message or ', '.join(res.saved)))

        if res.status == 'ok' and res.saved and not args.dry_run:
            if rec.has(SPLIT_FIELD) and args.update:
                old_splits = parse_split_paths(text, rec)
                if len(res.saved) > len(old_splits):
                    pos, chunk = build_split_append(text, rec, res.saved)
                    edits.append((pos, chunk))
                    changed += 1
            elif not rec.has(SPLIT_FIELD):
                pos, chunk, comma = build_insertion(text, rec, res.saved)
                edits.append((pos, chunk))
                if comma:
                    edits.append(comma)
                changed += 1

    if edits and not args.dry_run:
        new_text = apply_edits(text, edits)
        with io.open(path, 'w', encoding='utf-8', newline='') as fh:
            fh.write(new_text)
        print('  -> обновлено записей: %d' % changed)
        return True
    return False


def handle_event(fname: str, event_id: str, o_site: str, year: str,
                 args, fetcher: Fetcher, state: Dict[str, dict], existing_splits: List[str]) -> Result:
    cached = state.get(event_id)
    if cached and not args.force and not args.update:
        if cached['status'] != 'error' or not args.retry_errors:
            return Result(fname, event_id, o_site, year, cached['status'],
                          saved=cached.get('saved', []), links=cached.get('links', []),
                          message=cached.get('message', '') + ' (из кэша)')

    def fail(message: str, links=None) -> Result:
        r = Result(fname, event_id, o_site, year, 'error',
                   links=links or [], message=message)
        if not args.dry_run:
            state[event_id] = {'status': 'error', 'saved': [], 'links': r.links,
                               'message': message}
        return r

    race_url = RACE_URL_TEMPLATE.format(o_site=o_site)
    try:
        page = fetcher.get(race_url)
    except Exception as exc:  # noqa: BLE001
        return fail('страница гонки: %s' % exc)
    if page.status != 200:
        return fail('страница гонки: HTTP %s' % page.status)

    soup = decode_html(page)
    links = find_split_links(soup, page.url)
    if not links:
        res = Result(fname, event_id, o_site, year, 'no-links',
                     message='ссылки на сплиты не найдены')
        state[event_id] = {'status': res.status, 'saved': [], 'links': [],
                           'message': res.message}
        return res

    saved: List[str] = list(existing_splits) if args.update else []
    multi = len(links) > 1
    out_year_dir = os.path.join(args.out_dir, year)

    def resolve_existing_path(link: str) -> str:
        # Поле split содержит путь через link-prefix, а не обязательно args.out_dir.
        # Сначала проверяем как путь относительно каталога данных.
        candidates = [
            os.path.join(args.out_dir, link.replace('/', os.sep)),
            link.replace('/', os.sep),
        ]
        for candidate in candidates:
            if os.path.isfile(candidate):
                return candidate
        return ''

    def same_as_existing(data: bytes) -> bool:
        # В update сравниваем содержимое скачанного файла со всеми уже
        # привязанными к записи файлами. Совпадающий файл не сохраняем.
        digest = hashlib.sha256(data).digest()
        for old in existing_splits:
            old_file = resolve_existing_path(old)
            if not old_file:
                continue
            try:
                with open(old_file, 'rb') as fh:
                    if hashlib.sha256(fh.read()).digest() == digest:
                        return True
            except OSError:
                pass
        return False

    for idx, (url, label) in enumerate(links, start=1):
        if args.dry_run:
            ext = guess_ext(url, None)
            name = make_name(event_id, idx if multi else None, ext)
            new_path = link_path(args, year, name)
            if new_path not in saved:
                saved.append(new_path)
            continue

        try:
            resp = fetcher.get(url)
        except Exception as exc:  # noqa: BLE001
            return fail('скачивание %s: %s' % (url, exc), [u for u, _ in links])
        if resp.status != 200:
            return fail('скачивание %s: HTTP %s' % (url, resp.status),
                        [u for u, _ in links])

        # В update сначала сравниваем содержимое, не создавая файл
        if args.update and same_as_existing(resp.content):
            continue

        ext = guess_ext(url, resp)
        name = make_name(event_id, idx if multi else None, ext)
        os.makedirs(out_year_dir, exist_ok=True)

        # не затираем существующий файл при update
        target = os.path.join(out_year_dir, name)
        if args.update and os.path.exists(target):
            base, ext2 = os.path.splitext(name)
            n = 2
            while os.path.exists(os.path.join(out_year_dir, f'{base}_{n}{ext2}')):
                n += 1
            name = f'{base}_{n}{ext2}'
            target = os.path.join(out_year_dir, name)

        # временный файл для безопасной записи
        fd, tmp = tempfile.mkstemp(dir=out_year_dir if os.path.exists(out_year_dir) else None)
        try:
            with os.fdopen(fd, 'wb') as fh:
                fh.write(resp.content)
            os.replace(tmp, target)
        finally:
            if os.path.exists(tmp):
                os.unlink(tmp)

        saved.append(link_path(args, year, name))

    res = Result(fname, event_id, o_site, year, 'ok', saved=saved,
                 links=[u for u, _ in links])
    if not args.dry_run:
        state[event_id] = {'status': 'ok', 'saved': saved,
                           'links': res.links, 'message': ''}
    return res


def make_name(event_id: str, index: Optional[int], ext: str) -> str:
    suffix = '_%d' % index if index else ''
    return '{id}{sfx}_split.{ext}'.format(id=event_id, sfx=suffix, ext=ext)


def link_path(args, year: str, name: str) -> str:
    return '/'.join([args.link_prefix.rstrip('/'), year, name])


# --------------------------------------------------------------------------- #
#  CLI                                                                          #
# --------------------------------------------------------------------------- #

def parse_args(argv=None):
    p = argparse.ArgumentParser(
        description='Сбор сплитов с o-site.spb.ru и прописывание их в calendar*.js')
    p.add_argument('--js-dir', default='js', help='папка с файлами calendar*.js')
    p.add_argument('--out-dir', default='splits',
                   help='куда складывать скачанные файлы (по годам)')
    p.add_argument('--link-prefix', default='splits',
                   help='префикс пути, записываемый в поле split (год добавляется автоматически)')
    p.add_argument('--update', action='store_true',
                   help='повторно проверять все записи и обновлять существующие поля split')
    p.add_argument('--file', action='append', default=None,
                   help='обрабатывать только указанный файл (можно повторять)')
    p.add_argument('--year', default=None, help='обрабатывать только события этого года')
    p.add_argument('--limit', type=int, default=0, help='максимум обрабатываемых событий')
    p.add_argument('--sleep', type=float, default=1.0, help='пауза между запросами, с')
    p.add_argument('--timeout', type=float, default=30.0)
    p.add_argument('--retries', type=int, default=2)
    p.add_argument('--dry-run', action='store_true',
                   help='ничего не качать и не записывать')
    p.add_argument('--force', action='store_true', help='игнорировать кэш состояния')
    p.add_argument('--retry-errors', action='store_true',
                   help='повторить события, ранее завершившиеся ошибкой')
    p.add_argument('--state', default='splits-state.json',
                   help='файл состояния (кэш обработанных событий)')
    p.add_argument('--report', default='splits-report.txt', help='файл отчёта')
    p.add_argument('-v', '--verbose', action='store_true', help='печатать каждое событие')
    return p.parse_args(argv)


def main(argv=None) -> int:
    args = parse_args(argv)

    if args.file:
        paths = []
        for f in args.file:
            paths.append(f if os.path.dirname(f) else os.path.join(args.js_dir, f))
    else:
        paths = sorted(
            os.path.join(args.js_dir, f) for f in os.listdir(args.js_dir)
            if re.match(r'^calendar.*\.js$', f))

    state: Dict[str, dict] = {}
    if os.path.exists(args.state) and not args.force:
        with io.open(args.state, 'r', encoding='utf-8') as fh:
            state = json.load(fh)

    fetcher = Fetcher(timeout=args.timeout, retries=args.retries, sleep=args.sleep)
    results: List[Result] = []
    budget = [args.limit if args.limit > 0 else -1]

    try:
        for path in paths:
            if not os.path.exists(path):
                print('нет файла: %s' % path, file=sys.stderr)
                continue
            print('* %s' % os.path.basename(path))
            process_file(path, args, fetcher, state, results, budget)
            if budget[0] == 0:
                print('достигнут --limit')
                break
    finally:
        if not args.dry_run:
            with io.open(args.state, 'w', encoding='utf-8') as fh:
                json.dump(state, fh, ensure_ascii=False, indent=1)
        write_report(args.report, results, args)

    return 0


def write_report(path: str, results: List[Result], args) -> None:
    ok = [r for r in results if r.status == 'ok']
    none = [r for r in results if r.status == 'no-links']
    err = [r for r in results if r.status == 'error']
    lines = []
    lines.append('Обработано событий: %d' % len(results))
    lines.append('  со сплитами:      %d (файлов: %d)' % (len(ok), sum(len(r.saved) for r in ok)))
    lines.append('  без ссылок:       %d' % len(none))
    lines.append('  ошибок:           %d' % len(err))
    lines.append('')
    for title, group in (('НАЙДЕНО', ok), ('НЕ НАЙДЕНО', none), ('ОШИБКИ', err)):
        if not group:
            continue
        lines.append('=== %s ===' % title)
        for r in group:
            lines.append('%-24s %-10s %s' % (r.event_id, r.o_site, r.message))
            for s in r.saved:
                lines.append('    -> %s' % s)
            for u in r.links:
                lines.append('       %s' % u)
        lines.append('')
    text = '\n'.join(lines)
    with io.open(path, 'w', encoding='utf-8') as fh:
        fh.write(text)
    print()
    print('\n'.join(lines[:4]))
    print('Отчёт: %s' % path)


if __name__ == '__main__':
    sys.exit(main())
