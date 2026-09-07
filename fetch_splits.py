#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
fetch_splits.py — сбор файлов сплитов с o-site.spb.ru и reskeep.ru
и прописывание ссылок в записи календаря (calendar*.js).

Что делает
----------
1. Разбирает файлы calendar*.js, находит записи с полем ``o_site`` и/или
   ``reskeep`` и без поля ``split``.
2. Источник 1 — o-Site. Открывает https://o-site.spb.ru/race.php?id=<o_site>
   и ищет на странице ссылки на сплиты:
      - по тексту ссылки, содержащему слово «сплит» в любой форме (или "split");
      - либо по адресу ссылки, содержащему "split".
3. Источник 2 — RESKEEP. Если у записи ещё нет сплитов (нет поля ``split``)
   и o-Site ничего не дал (или поля ``o_site`` нет), скачивает файл по адресу
   https://reskeep.ru/event/download/results-file?id=<reskeep>
   Поле ``reskeep`` — целое число или массив целых чисел
   (``reskeep: 919``, ``reskeep: [919, 920]``); при массиве качаются все файлы.
   Ответ принимается, если это непустой файл, а не html-страница с ошибкой.
4. Скачивает найденные файлы в  splits/<год>/<ID события>[_N]_split.<расширение>
   Расширение определяется по URL, заголовку Content-Disposition, Content-Type
   и по сигнатуре содержимого (pdf / xlsx / xls / zip / xml / html …).
5. Прописывает в запись календаря поле ``split``: <link-prefix>/<год>/<имя файла>
   (строка или массив строк).

Свойства
--------
* идемпотентность: записи, у которых уже есть поле ``split``, пропускаются
  (кроме режима --update, который перепроверяет o-Site и дополняет поле);
* RESKEEP используется только для записей без сплитов — как запасной источник
  (флаг --reskeep-always заставляет опрашивать его всегда);
* --dry-run: ничего не скачивает и не пишет, только отчёт;
* исходные файлы не портит: сохраняются кодировка UTF-8 и переводы строк (LF/CRLF)
  каждого конкретного файла; запись в js делается точечной вставкой одной строки;
* состояние (--state) позволяет продолжить прерванный прогон без повторных запросов;
  для каждого события запоминается, какой источник когда проверялся и с какими
  исходными данными (id o-Site, список id RESKEEP, адрес запроса), поэтому
  источник опрашивается заново сам, если данные в календаре или адрес изменились;
* если файла, на который ссылается кэш, нет на диске, событие скачивается заново.

Параметры
---------
Что обрабатывать:

  --js-dir DIR          папка с файлами calendar*.js (по умолчанию: js)
  --file FILE           обрабатывать только указанный файл; можно повторять.
                        Имя без пути ищется в --js-dir
  --year YYYY           обрабатывать только события этого года
  --limit N             остановиться после N обработанных событий
  --source ИСТОЧНИК     какие источники опрашивать: all (по умолчанию),
                        o-site, reskeep
  --update              перепроверить и те записи, у которых поле ``split``
                        уже есть: кэш не используется, o-Site опрашивается
                        заново, новые файлы дописываются в существующее поле.
                        Совпадающие по содержимому файлы повторно не
                        сохраняются, RESKEEP для таких записей не опрашивается

Куда складывать:

  --out-dir DIR         каталог для скачанных файлов, разложенных по годам
                        (по умолчанию: splits)
  --link-prefix PREFIX  префикс пути в поле ``split``; год и имя файла
                        добавляются автоматически (по умолчанию: splits)

Источник RESKEEP:

  --reskeep-url ШАБЛОН  адрес файла результатов, плейсхолдер {reskeep}
                        (по умолчанию:
                        https://reskeep.ru/event/download/results-file?id={reskeep})
  --reskeep-always      опрашивать RESKEEP, даже если сплиты нашлись на o-Site
  --reskeep-accept-html принимать html-страницы как файлы сплитов (по умолчанию
                        короткие страницы с сообщением об ошибке отбраковываются)
  --reskeep-accept-any  принимать любой непустой ответ вообще без проверок

Кэш состояния и повторные прогоны:

  --state FILE          файл состояния (по умолчанию: splits-state.json)
  --force               игнорировать кэш полностью
  --retry-errors        повторить события, ранее завершившиеся ошибкой
  --retry-empty         повторить события, по которым ничего не нашлось;
                        уже найденное при этом сохраняется
  --dry-run             ничего не качать и не записывать, только отчёт

Сеть:

  --sleep СЕК           пауза между запросами (по умолчанию: 1.0)
  --timeout СЕК         таймаут запроса (по умолчанию: 30)
  --retries N           число повторов при сбое запроса (по умолчанию: 2)
  --backend BACKEND     чем выполнять запросы: auto (по умолчанию), requests,
                        urllib. Ветка urllib берёт корневые сертификаты из
                        хранилища системы, requests — из своего набора

Сертификаты TLS:

  --cafile FILE         дополнительный сертификат (PEM или DER); можно
                        повторять. Добавляется к системным, а не заменяет их
  --ca-store FILE       куда складывать автоматически подгруженные
                        промежуточные сертификаты (по умолчанию: ca-extra.pem)
  --no-auto-ca          не достраивать цепочку сертификатов автоматически.
                        По умолчанию скрипт сам скачивает недостающее
                        промежуточное звено по ссылке из сертификата сервера,
                        как это делает браузер; корневые (самоподписанные)
                        сертификаты так не подтягиваются никогда
  --insecure-host ХОСТ  не проверять сертификат только этого сайта;
                        можно повторять
  --insecure            не проверять сертификаты вообще

Диагностика:

  --probe ID [ID ...]   показать, что RESKEEP отдаёт по указанным id (код
                        ответа, тип, имя файла, размер, вердикт), и выйти
  --check-saved         проверить уже скачанные файлы сплитов: на месте ли
                        они и не лежит ли вместо протокола страница сайта
                        с сообщением об ошибке. Ничего не меняет
  --report FILE         файл отчёта (по умолчанию: splits-report.txt)
  -v, --verbose         печатать каждое обработанное событие

Примеры
-------
    python fetch_splits.py --js-dir js --dry-run
    python fetch_splits.py --js-dir js --year 2026
    python fetch_splits.py --js-dir js --file calendar-2019.js --sleep 1.5
    python fetch_splits.py --js-dir js --source reskeep
    python fetch_splits.py --js-dir js --update --year 2026
    python fetch_splits.py --check-saved
    python fetch_splits.py --probe 879
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
import atexit
import hashlib
import unicodedata
import zipfile
import ssl
import urllib.request
import urllib.error
from dataclasses import dataclass, field as dc_field
from typing import Dict, Iterable, List, Optional, Sequence, Tuple
from urllib.parse import urljoin, urlparse, unquote

try:
    import requests
except ImportError:  # pragma: no cover
    requests = None

try:
    from bs4 import BeautifulSoup
except ImportError:  # pragma: no cover
    print('Требуется beautifulsoup4:  pip install beautifulsoup4', file=sys.stderr)
    raise


# --------------------------------------------------------------------------- #
#  Настройки                                                                    #
# --------------------------------------------------------------------------- #

RACE_URL_TEMPLATE = 'https://o-site.spb.ru/race.php?id={o_site}'

#: прямая ссылка на файл результатов/сплитов в RESKEEP
RESKEEP_URL_TEMPLATE = 'https://reskeep.ru/event/download/results-file?id={reskeep}'

#: идентификаторы источников
SRC_O_SITE = 'o-site'
SRC_RESKEEP = 'reskeep'

#: имя вставляемого поля
SPLIT_FIELD = 'split'

#: имена полей календаря с идентификаторами источников
O_SITE_FIELD = 'o_site'
RESKEEP_FIELD = 'reskeep'

#: после какого поля вставлять ``split`` (первое найденное из списка);
#: если ни одного нет — поле добавляется последним в записи.
ANCHOR_FIELDS = ('res', 'o_site', 'reskeep')

#: ответ RESKEEP меньше этого размера считаем «файла нет»
RESKEEP_MIN_SIZE = 64

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


_INT_RE = re.compile(r'^\d+$')


def parse_reskeep_field(text: str, f: Optional[JsField]) -> Tuple[List[str], List[str]]:
    """
    Разбирает поле ``reskeep``: целое число или массив целых чисел.

    Возвращает (идентификаторы без дублей, непонятные значения).
    Всё, что не является целым числом, в работу не берётся и попадает
    во второй список — чтобы такие записи было видно в отчёте.
    """
    if f is None:
        return [], []
    raw = text[f.key_pos:f.end]
    colon = raw.find(':')
    if colon == -1:
        return [], []
    value = raw[colon + 1:].strip()

    if value.startswith('['):
        end = value.rfind(']')
        inner = value[1:end if end != -1 else len(value)]
        tokens = [t.strip() for t in inner.split(',')]
    else:
        tokens = [value]

    ids: List[str] = []
    bad: List[str] = []
    for token in tokens:
        if not token:
            continue
        # число может оказаться записанным строкой — это тоже принимаем
        clean = token.strip().strip('\'"').strip()
        if _INT_RE.match(clean):
            if clean not in ids:
                ids.append(clean)
        else:
            bad.append(token)
    return ids, bad


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
    filename: str = ''          # имя файла из Content-Disposition, если было


_CD_FILENAME_RE = re.compile(
    r"""filename\*\s*=\s*[^']*''(?P<ext>[^;]+)"""
    r"""|filename\s*=\s*"(?P<quoted>[^"]*)"?"""
    r"""|filename\s*=\s*(?P<bare>[^;]+)""", re.IGNORECASE)


def parse_disposition_filename(value: str) -> str:
    """Достаёт имя файла из заголовка Content-Disposition."""
    if not value:
        return ''
    m = _CD_FILENAME_RE.search(value)
    if not m:
        return ''
    name = m.group('ext') or m.group('quoted') or m.group('bare') or ''
    name = name.strip().strip('"').strip()
    if m.group('ext'):
        name = unquote(name)
    name = name.replace('\\', '/')
    return posixpath.basename(name)


def _split_ctype(raw: str) -> Tuple[str, str]:
    ctype = (raw or '')
    charset = ''
    if 'charset=' in ctype.lower():
        charset = ctype.lower().split('charset=')[1].split(';')[0].strip()
    return ctype.split(';')[0].strip().lower(), charset


def load_ca_pem(paths: Sequence[str]) -> str:
    """
    Читает файлы сертификатов и возвращает их в виде PEM-текста.

    Принимает и PEM (.pem, .crt в текстовом виде), и DER/бинарный .crt —
    именно так удостоверяющие центры отдают промежуточные сертификаты.
    """
    chunks: List[str] = []
    for path in paths or ():
        with open(path, 'rb') as fh:
            data = fh.read()
        if b'-----BEGIN CERTIFICATE-----' in data:
            chunks.append(data.decode('ascii', 'ignore'))
            continue
        try:
            chunks.append(ssl.DER_cert_to_PEM_cert(data))
        except Exception as exc:  # noqa: BLE001
            raise SystemExit('не удалось прочитать сертификат %s: %s' % (path, exc))
    return '\n'.join(c.strip() + '\n' for c in chunks if c.strip())


def cert_info(pem: str) -> Optional[dict]:
    """Разбирает PEM-сертификат средствами модуля ssl."""
    tmp = None
    try:
        fd, tmp = tempfile.mkstemp(suffix='.pem')
        with os.fdopen(fd, 'w') as fh:
            fh.write(pem)
        return ssl._ssl._test_decode_cert(tmp)   # приватный, но стабильный API
    except Exception:  # noqa: BLE001
        return None
    finally:
        if tmp and os.path.exists(tmp):
            os.unlink(tmp)


def server_cert_pem(url: str, timeout: float = 15.0) -> Optional[str]:
    """Сертификат сервера без проверки цепочки."""
    parts = urlparse(url)
    host, port = parts.hostname, parts.port or 443
    if not host:
        return None
    try:
        try:
            return ssl.get_server_certificate((host, port), timeout=timeout)
        except TypeError:            # параметр timeout появился в Python 3.10
            return ssl.get_server_certificate((host, port))
    except Exception:  # noqa: BLE001
        return None


def download_cert(url: str, timeout: float) -> Optional[str]:
    """Скачивает сертификат по ссылке из расширения AIA (PEM или DER)."""
    req = urllib.request.Request(url, headers={'User-Agent': USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            data = resp.read(512 * 1024)
    except Exception:  # noqa: BLE001
        return None
    if not data:
        return None
    if b'-----BEGIN CERTIFICATE-----' in data:
        return data.decode('ascii', 'ignore')
    try:
        return ssl.DER_cert_to_PEM_cert(data)
    except Exception:  # noqa: BLE001
        return None


def fetch_missing_chain(url: str, timeout: float = 15.0,
                        max_depth: int = 4) -> List[Tuple[str, str]]:
    """
    Достраивает цепочку сертификатов так же, как это делает браузер.

    В сертификате есть ссылка на сертификат выдавшего его центра (расширение
    AIA); идём по ней вверх, пока звенья не кончатся. Возвращает список
    (PEM, читаемое имя).

    Корневые (самоподписанные) сертификаты сознательно пропускаются: доверять
    корню, скачанному по http, нельзя. Промежуточные безопасны — они всё равно
    должны быть подписаны корнем, которому система уже доверяет.
    """
    pem = server_cert_pem(url, timeout)
    if not pem:
        return []
    out: List[Tuple[str, str]] = []
    info = cert_info(pem)
    seen: set = set()
    for _ in range(max_depth):
        if not info:
            break
        links = [u for u in (info.get('caIssuers') or ())
                 if u.lower().startswith(('http://', 'https://')) and u not in seen]
        if not links:
            break
        got = None
        for link in links:
            seen.add(link)
            got = download_cert(link, timeout)
            if got:
                break
        if not got:
            break
        got_info = cert_info(got)
        if got_info and got_info.get('subject') == got_info.get('issuer'):
            break                    # это корень — его не берём
        out.append((got, _cert_name((got_info or {}).get('subject')) or '?'))
        info = got_info
    return out


def fmt_exc(exc: Exception, fetcher: Optional['Fetcher'] = None) -> str:
    """Текст ошибки с подсказкой, если дело в проверке сертификата."""
    text = str(exc)
    low = text.lower()
    if 'certificate' not in low and 'ssl' not in low:
        return text
    hints = []
    if fetcher is None or fetcher.backend_name == 'requests':
        hints.append('--backend urllib (корневые сертификаты берутся '
                     'из хранилища системы)')
    if fetcher is None or not fetcher.checks_disabled:
        hints.append('--insecure-host <сайт> (без проверки сертификата '
                     'только этого сайта)')
    hints.append('http-адрес через --reskeep-url')
    return text + '  [сертификат сайта не проверен. Попробуйте: %s]' % '; '.join(hints)


class Fetcher:
    def __init__(self, timeout: float = 30.0, retries: int = 2, sleep: float = 1.0,
                 backend: str = 'auto', insecure: bool = False,
                 insecure_hosts: Optional[Sequence[str]] = None,
                 cafile: Optional[Sequence[str]] = None,
                 auto_ca: bool = True, ca_store: Optional[str] = None):
        self.timeout = timeout
        self.retries = retries
        self.sleep = sleep
        self.insecure = insecure
        self.insecure_hosts = {h.lower().strip().lstrip('.')
                               for h in (insecure_hosts or ()) if h.strip()}
        self.cafile = list(cafile or ())
        self.auto_ca = auto_ca
        self.ca_store = ca_store
        self._verify_bundle = None      # путь к временному набору для requests
        self._repaired: set = set()     # хосты, для которых цепочку уже достраивали
        self._last = 0.0

        # сертификаты: указанные вручную плюс сохранённые прошлыми запусками
        sources = list(self.cafile)
        if ca_store and os.path.exists(ca_store):
            sources.append(ca_store)
        self.ca_pem = load_ca_pem(sources)
        self.ca_store_loaded = bool(ca_store and os.path.exists(ca_store))

        if backend == 'requests' and requests is None:
            raise SystemExit('модуль requests не установлен: '
                             'уберите --backend requests или установите его')
        use_requests = requests is not None and backend in ('auto', 'requests')

        if use_requests:
            self.session = requests.Session()
            self.session.headers.update({'User-Agent': USER_AGENT})
            if insecure or self.insecure_hosts:
                # verify передаётся в каждый запрос: session.verify в свежих
                # версиях requests уже не действует
                try:    # не засорять вывод предупреждениями об отключённой проверке
                    import urllib3
                    urllib3.disable_warnings()
                except Exception:  # noqa: BLE001
                    pass
        else:
            self.session = None

        self._ctx_unverified = ssl._create_unverified_context()
        self._apply_ca()

    def _apply_ca(self) -> None:
        """Пересобирает проверяющие контексты под текущий набор сертификатов."""
        # ветка urllib: свои сертификаты добавляем к системному хранилищу
        self._ctx_checked = None
        if self.ca_pem:
            self._ctx_checked = ssl.create_default_context()
            try:
                self._ctx_checked.load_verify_locations(cadata=self.ca_pem)
            except Exception:  # noqa: BLE001
                self._ctx_checked = None
        self._verify_bundle = (self._build_bundle()
                               if self.ca_pem and self.session is not None else None)

    def add_ca(self, pem: str) -> None:
        """Добавляет сертификат в набор и, если задан, в файл-хранилище."""
        if pem.strip() in self.ca_pem:
            return
        self.ca_pem = (self.ca_pem + '\n' + pem.strip() + '\n').lstrip()
        if self.ca_store:
            try:
                with io.open(self.ca_store, 'a', encoding='ascii', errors='ignore') as fh:
                    fh.write(pem.strip() + '\n')
            except OSError as exc:
                print('    не удалось сохранить сертификат в %s: %s'
                      % (self.ca_store, exc), file=sys.stderr)
        self._apply_ca()

    def repair_chain(self, url: str) -> bool:
        """
        Достраивает недостающие звенья цепочки сертификатов для адреса.
        Возвращает True, если что-то удалось добавить.
        """
        if not self.auto_ca:
            return False
        host = (urlparse(url).hostname or '').lower()
        if not host or host in self._repaired:
            return False
        self._repaired.add(host)
        found = fetch_missing_chain(url, self.timeout)
        if not found:
            return False
        for pem, name in found:
            self.add_ca(pem)
            where = (', сохранён в %s' % self.ca_store) if self.ca_store else ''
            print('  ~ %s: подгружен промежуточный сертификат «%s»%s'
                  % (host, name, where))
        return True

    def _build_bundle(self) -> str:
        """requests умеет только читать набор из файла — собираем его: публичные
        центры плюс наши дополнительные сертификаты."""
        parts = []
        try:
            import certifi
            with io.open(certifi.where(), 'r', encoding='ascii', errors='ignore') as fh:
                parts.append(fh.read())
        except Exception:  # noqa: BLE001
            pass
        parts.append(self.ca_pem)
        fd, path = tempfile.mkstemp(suffix='.pem', prefix='ca-bundle-')
        with os.fdopen(fd, 'w', encoding='ascii', errors='ignore') as fh:
            fh.write('\n'.join(parts))
        atexit.register(lambda: os.path.exists(path) and os.unlink(path))
        return path

    def is_insecure(self, url: str) -> bool:
        """Отключена ли проверка сертификата для этого адреса."""
        if self.insecure:
            return True
        if not self.insecure_hosts:
            return False
        host = (urlparse(url).hostname or '').lower()
        return any(host == h or host.endswith('.' + h) for h in self.insecure_hosts)

    @property
    def checks_disabled(self) -> bool:
        return bool(self.insecure or self.insecure_hosts)

    @property
    def backend_name(self) -> str:
        return 'requests' if self.session is not None else 'urllib'

    def _throttle(self):
        delta = time.time() - self._last
        if delta < self.sleep:
            time.sleep(self.sleep - delta)
        self._last = time.time()

    @staticmethod
    def _is_cert_error(exc: Exception) -> bool:
        low = str(exc).lower()
        return 'certificate' in low or 'ssl' in low

    def get(self, url: str) -> HttpResponse:
        last_err = None
        for attempt in range(self.retries + 1):
            self._throttle()
            try:
                return self._get_once(url)
            except Exception as exc:  # noqa: BLE001
                last_err = exc
                # сервер не прислал промежуточный сертификат — добираем его сами
                # по ссылке из сертификата, как это делает браузер
                if self._is_cert_error(exc) and self.repair_chain(url):
                    self._throttle()
                    try:
                        return self._get_once(url)
                    except Exception as exc2:  # noqa: BLE001
                        last_err = exc2
                if attempt < self.retries:
                    time.sleep(1.5 * (attempt + 1))
        raise last_err  # type: ignore[misc]

    def _get_once(self, url: str) -> HttpResponse:
        if self.session is not None:
            verify = False if self.is_insecure(url) else (self._verify_bundle or True)
            r = self.session.get(url, timeout=self.timeout, allow_redirects=True,
                                 verify=verify)
            ctype, charset = _split_ctype(r.headers.get('Content-Type', ''))
            if len(r.content) > MAX_FILE_SIZE:
                raise ValueError('файл слишком большой: %d байт' % len(r.content))
            return HttpResponse(
                url=r.url, status=r.status_code, content=r.content,
                content_type=ctype, charset=charset,
                filename=parse_disposition_filename(
                    r.headers.get('Content-Disposition', '')))
        req = urllib.request.Request(url, headers={'User-Agent': USER_AGENT})
        try:
            context = (self._ctx_unverified if self.is_insecure(url)
                       else self._ctx_checked)
            resp = urllib.request.urlopen(req, timeout=self.timeout,
                                          context=context)
        except urllib.error.HTTPError as err:
            # 404 и подобные — это не сбой связи, а нормальный ответ «файла нет»
            data = err.read(MAX_FILE_SIZE + 1) or b''
            ctype, charset = _split_ctype(err.headers.get('Content-Type', '') or '')
            return HttpResponse(url=err.geturl(), status=err.code, content=data,
                                content_type=ctype, charset=charset)
        with resp:
            data = resp.read(MAX_FILE_SIZE + 1)
            if len(data) > MAX_FILE_SIZE:
                raise ValueError('файл слишком большой')
            ctype, charset = _split_ctype(resp.headers.get('Content-Type', '') or '')
            return HttpResponse(
                url=resp.geturl(), status=resp.status, content=data,
                content_type=ctype, charset=charset,
                filename=parse_disposition_filename(
                    resp.headers.get('Content-Disposition', '') or ''))


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


def _ext_of(name: str) -> str:
    ext = posixpath.splitext(unquote(name or ''))[1].lstrip('.').lower()
    return ext if ext in KNOWN_EXTS else ''


def sniff_ext(data: bytes) -> str:
    """Расширение по сигнатуре содержимого; '' — не опознано."""
    if not data:
        return ''
    if data[:5] == b'%PDF-':
        return 'pdf'
    if data[:4] == b'PK\x03\x04':
        try:
            with zipfile.ZipFile(io.BytesIO(data)) as zf:
                names = zf.namelist()
        except Exception:  # noqa: BLE001
            return 'zip'
        if any(n.startswith('xl/') for n in names):
            return 'xlsx'
        if any(n.startswith('word/') for n in names):
            return 'docx'
        return 'zip'
    if data[:8] == b'\xd0\xcf\x11\xe0\xa1\xb1\x1a\xe1':   # OLE2 (старые xls/doc)
        return 'xls'
    if data[:4] == b'Rar!':
        return 'rar'
    if data[:6] == b'7z\xbc\xaf\x27\x1c':
        return '7z'
    head = data[:1024].lstrip().lower()
    if head.startswith(b'<?xml'):
        return 'xml'
    if head.startswith(b'<!doctype html') or head.startswith(b'<html'):
        return 'html'
    return ''


def guess_ext(url: str, resp: Optional[HttpResponse]) -> str:
    ext = _ext_of(urlparse(url).path)
    if ext:
        return ext
    if resp is None:
        return DEFAULT_EXT
    # имя файла, которое прислал сервер (RESKEEP отдаёт файл без расширения в URL)
    ext = _ext_of(resp.filename)
    if ext:
        return ext
    if resp.url and resp.url != url:
        ext = _ext_of(urlparse(resp.url).path)
        if ext:
            return ext
    ext = sniff_ext(resp.content)
    if ext:
        return ext
    if resp.content_type in CONTENT_TYPE_EXT:
        return CONTENT_TYPE_EXT[resp.content_type]
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
    reskeep: List[str] = dc_field(default_factory=list)
    sources: List[str] = dc_field(default_factory=list)   # источники, давшие файлы
    from_cache: bool = False

    @property
    def source_label(self) -> str:
        parts = []
        if self.o_site:
            parts.append('o:%s' % self.o_site)
        if self.reskeep:
            parts.append('r:%s' % ','.join(self.reskeep))
        return ' '.join(parts) or '-'


def event_year(date_value: Optional[str], event_id: str) -> Optional[str]:
    if date_value and re.match(r'^\d{4}', date_value):
        return date_value[:4]
    m = re.search(r'_(\d{4})\d{4}(?:_|$)', event_id or '')
    return m.group(1) if m else None


def process_file(path: str, args, fetcher: Fetcher, state: Dict[str, dict],
                 results: List[Result], budget: List[int],
                 warnings: List[str]) -> bool:
    text, records = load_calendar(path)
    if not records:
        return False

    fname = os.path.basename(path)
    edits: List[Tuple[int, str]] = []
    changed = 0

    for rec in records:
        if budget[0] == 0:
            break
        o_site = field_string(text, rec.field(O_SITE_FIELD))
        reskeep, bad_reskeep = parse_reskeep_field(text, rec.field(RESKEEP_FIELD))
        if not o_site and not reskeep and not bad_reskeep:
            continue

        has_split = rec.has(SPLIT_FIELD)
        if has_split and not args.update:
            continue

        # какие источники применимы к этой записи
        use_o_site = bool(o_site) and args.source in ('all', SRC_O_SITE)
        # RESKEEP берём только для записей, у которых сплитов ещё нет
        use_reskeep = (bool(reskeep) and args.source in ('all', SRC_RESKEEP)
                       and not has_split)

        event_id = field_string(text, rec.field('id')) or ''
        date_value = field_string(text, rec.field('date'))
        year = event_year(date_value, event_id)

        # фильтр по году применяем до всего остального, чтобы не шуметь
        # сообщениями по записям, которые в этот прогон не входят
        if args.year and year and year != args.year:
            continue

        if bad_reskeep:
            warnings.append('%s  %s  reskeep: не целое число: %s'
                            % (fname, event_id or '?', ', '.join(bad_reskeep)))

        if not use_o_site and not use_reskeep:
            continue

        if not event_id:
            results.append(Result(fname, '', o_site, year or '', 'error',
                                  message='нет поля id', reskeep=reskeep))
            continue
        if not year:
            results.append(Result(fname, event_id, o_site, '', 'error',
                                  message='не удалось определить год', reskeep=reskeep))
            continue

        budget[0] -= 1
        existing_splits = parse_split_paths(text, rec)
        res = handle_event(fname, event_id, o_site, reskeep, year, args, fetcher,
                           state, existing_splits, use_o_site, use_reskeep)
        results.append(res)
        if args.verbose or res.status == 'ok':
            print('    %-24s %-18s %s %s' % (event_id, res.source_label, res.status,
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


# --------------------------------------------------------------------------- #
#  Сохранение файлов                                                            #
# --------------------------------------------------------------------------- #

def resolve_split_path(out_dir: str, link: str) -> str:
    """Локальный путь к файлу, на который ссылается поле split."""
    # Поле split содержит путь через link-prefix, а не обязательно out_dir.
    candidates = [
        os.path.join(out_dir, link.replace('/', os.sep)),
        link.replace('/', os.sep),
    ]
    for candidate in candidates:
        if os.path.isfile(candidate):
            return candidate
    return ''


class SplitSaver:
    """Сохраняет файлы сплитов одного события; общая часть для всех источников."""

    def __init__(self, args, event_id: str, year: str, existing_splits: Sequence[str]):
        self.args = args
        self.event_id = event_id
        self.year = year
        self.existing = list(existing_splits)
        self.out_year_dir = os.path.join(args.out_dir, year)

    def plan(self, ext: str, index: Optional[int] = None) -> str:
        """Путь, который был бы записан в поле split (для --dry-run)."""
        return link_path(self.args, self.year, make_name(self.event_id, index, ext))

    def resolve_existing_path(self, link: str) -> str:
        return resolve_split_path(self.args.out_dir, link)

    def same_as_existing(self, data: bytes) -> bool:
        # В update сравниваем содержимое скачанного файла со всеми уже
        # привязанными к записи файлами. Совпадающий файл не сохраняем.
        digest = hashlib.sha256(data).digest()
        for old in self.existing:
            old_file = self.resolve_existing_path(old)
            if not old_file:
                continue
            try:
                with open(old_file, 'rb') as fh:
                    if hashlib.sha256(fh.read()).digest() == digest:
                        return True
            except OSError:
                pass
        return False

    def save(self, url: str, resp: HttpResponse,
             index: Optional[int] = None) -> Optional[str]:
        """Пишет файл на диск. Возвращает путь для поля split или None."""
        # В update сначала сравниваем содержимое, не создавая файл
        if self.args.update and self.same_as_existing(resp.content):
            return None

        ext = guess_ext(url, resp)
        name = make_name(self.event_id, index, ext)
        os.makedirs(self.out_year_dir, exist_ok=True)

        # не затираем существующий файл при update
        target = os.path.join(self.out_year_dir, name)
        if self.args.update and os.path.exists(target):
            base, ext2 = os.path.splitext(name)
            n = 2
            while os.path.exists(os.path.join(self.out_year_dir, f'{base}_{n}{ext2}')):
                n += 1
            name = f'{base}_{n}{ext2}'
            target = os.path.join(self.out_year_dir, name)

        # временный файл для безопасной записи
        fd, tmp = tempfile.mkstemp(dir=self.out_year_dir)
        try:
            with os.fdopen(fd, 'wb') as fh:
                fh.write(resp.content)
            os.replace(tmp, target)
        finally:
            if os.path.exists(tmp):
                os.unlink(tmp)

        return link_path(self.args, self.year, name)


# --------------------------------------------------------------------------- #
#  Источник 1: o-site.spb.ru                                                    #
# --------------------------------------------------------------------------- #

SourceResult = Tuple[str, List[str], List[str], str]   # status, saved, links, message


def collect_o_site(o_site: str, args, fetcher: Fetcher,
                   saver: SplitSaver) -> SourceResult:
    race_url = RACE_URL_TEMPLATE.format(o_site=o_site)
    try:
        page = fetcher.get(race_url)
    except Exception as exc:  # noqa: BLE001
        return 'error', [], [], 'страница гонки: %s' % fmt_exc(exc, fetcher)
    if page.status != 200:
        return 'error', [], [], 'страница гонки: HTTP %s' % page.status

    soup = decode_html(page)
    links = find_split_links(soup, page.url)
    if not links:
        return 'no-links', [], [], 'ссылки на сплиты не найдены'

    urls = [u for u, _ in links]
    multi = len(links) > 1
    saved: List[str] = []

    for idx, (url, _label) in enumerate(links, start=1):
        index = idx if multi else None
        if args.dry_run:
            path = saver.plan(guess_ext(url, None), index)
            if path not in saved:
                saved.append(path)
            continue

        try:
            resp = fetcher.get(url)
        except Exception as exc:  # noqa: BLE001
            return 'error', saved, urls, 'скачивание %s: %s' % (url, fmt_exc(exc, fetcher))
        if resp.status != 200:
            return 'error', saved, urls, 'скачивание %s: HTTP %s' % (url, resp.status)

        path = saver.save(url, resp, index)
        if path and path not in saved:
            saved.append(path)

    return 'ok', saved, urls, ''


# --------------------------------------------------------------------------- #
#  Источник 2: reskeep.ru                                                       #
# --------------------------------------------------------------------------- #

#: признаки того, что вместо файла отдали страницу с ошибкой/формой входа
_ERROR_PAGE_RE = re.compile(
    r'(\b404\b|\b403\b|not found|no such|не найден|отсутств|авториз|войти)',
    re.IGNORECASE)

#: то же, но для содержимого <title> — там слова однозначнее
_ERROR_TITLE_RE = re.compile(
    r'(\b404\b|\b403\b|not found|error|ошибк|не найден|доступ)', re.IGNORECASE)

_TITLE_RE = re.compile(r'<title[^>]*>(.*?)</title>', re.IGNORECASE | re.DOTALL)


def reskeep_url(args, reskeep_id: str) -> str:
    tpl = args.reskeep_url
    if '{' in tpl:
        return tpl.format(reskeep=reskeep_id, id=reskeep_id)
    return tpl + reskeep_id


#: html-файл такого размера и больше считаем протоколом:
#: страницы с сообщением об ошибке короткие, а протокол — это десятки килобайт
HTML_RESULTS_MIN_SIZE = 8192

#: разметка, которой в протоколе быть не может: модальные окна, меню,
#: подключение библиотек интерфейса. Если она есть — это страница сайта,
#: даже когда страница большая и с таблицей (например, список событий).
SITE_PAGE_MARKERS = (
    ('modal-dialog', 'модальное окно'),
    ('modal-content', 'модальное окно'),
    ('data-toggle="modal"', 'модальное окно'),
    ('data-bs-toggle="modal"', 'модальное окно'),
    ('navbar-brand', 'шапка сайта'),
    ('navbar-collapse', 'меню сайта'),
)


def decode_html_bytes(data: bytes) -> str:
    """Текст html в наиболее вероятной кодировке."""
    head = data[:4096].decode('latin-1', 'ignore')
    m = re.search(r'charset\s*=\s*["\']?\s*([\w-]+)', head, re.IGNORECASE)
    for enc in ([m.group(1)] if m else []) + ['utf-8', 'windows-1251']:
        try:
            return data.decode(enc)
        except (UnicodeDecodeError, LookupError):
            continue
    return data.decode('windows-1251', 'replace')


def find_site_marker(low: str) -> str:
    """
    Признаки того, что перед нами страница сайта, а не протокол: модальные
    окна и навигационное меню в файле результатов не встречаются. Работает
    и для больших страниц с таблицами — например, для главной страницы
    со списком событий.
    """
    for marker, what in SITE_PAGE_MARKERS:
        if marker in low:
            return 'страница сайта (%s: %s)' % (what, marker)
    return ''


def suspicious_html(data: bytes) -> str:
    """
    Похоже ли содержимое на страницу с сообщением об ошибке, а не на протокол.
    Возвращает причину или '' — если поводов для подозрений нет.

    Проверка намеренно осторожная. Протоколы бывают очень разными: таблица
    может идти после мегабайта стилей и скриптов или вообще отрисовываться
    скриптом из данных, поэтому судить по наличию тега <table> нельзя.
    Надёжные признаки ошибки — короткая страница и заголовок вроде «Ошибка».
    """
    text = decode_html_bytes(data)
    low = text.lower()

    marker = find_site_marker(low)
    if marker:
        return marker

    title_m = _TITLE_RE.search(text)
    title = _normalize(title_m.group(1)) if title_m else ''
    if title and _ERROR_TITLE_RE.search(title):
        return 'страница «%s»' % title[:60]

    if '<table' in low or '<pre' in low:
        return ''                    # таблица или текстовый блок — это протокол
    if len(data) >= HTML_RESULTS_MIN_SIZE:
        return ''                    # большая страница: таблицу может рисовать скрипт

    if _ERROR_PAGE_RE.search(text):
        return 'короткая страница с сообщением об ошибке'
    return 'короткая html-страница (%d байт) без признаков протокола' % len(data)


def reskeep_reject_reason(resp: HttpResponse, args=None) -> str:
    """'' — ответ похож на файл сплитов; иначе причина отказа."""
    if not resp.content:
        return 'пустой ответ'
    if args is not None and getattr(args, 'reskeep_accept_any', False):
        return ''
    if len(resp.content) < RESKEEP_MIN_SIZE:
        return 'ответ %d байт — файла нет' % len(resp.content)
    is_html = (resp.content_type in ('text/html', 'application/xhtml+xml')
               or sniff_ext(resp.content) == 'html')
    accept_html = args is not None and getattr(args, 'reskeep_accept_html', False)

    if is_html and not accept_html:
        # признак страницы сайта важнее заголовка вложения: сервер может
        # отдать главную страницу и с Content-Disposition
        marker = find_site_marker(decode_html_bytes(resp.content).lower())
        if marker:
            return ('%s, а не файл (если это всё же протокол — '
                    '--reskeep-accept-html)' % marker)

    if resp.filename:
        # сервер прислал вложение — значит это файл, а не страница
        return ''
    if not is_html:
        return ''                    # xlsx, xml, csv, pdf и прочее — файл
    if accept_html:
        return ''

    # html без Content-Disposition: это может быть и протокол, отданный
    # страницей, и сообщение сайта об ошибке — решаем по содержимому
    reason = suspicious_html(resp.content)
    return ('%s, а не файл (если это всё же протокол — --reskeep-accept-html)'
            % reason) if reason else ''


def collect_reskeep(reskeep_ids: Sequence[str], args, fetcher: Fetcher,
                    saver: SplitSaver, base: int = 0) -> SourceResult:
    """
    Качает файлы для всех идентификаторов поля ``reskeep``.
    base — сколько файлов уже сохранено для события (для нумерации имён).
    """
    urls: List[str] = []
    saved: List[str] = []
    messages: List[str] = []
    statuses: List[str] = []
    multi = base + len(reskeep_ids) > 1

    for pos, rid in enumerate(reskeep_ids, start=1):
        index = base + pos if multi else None
        status, path, url, message = fetch_one_reskeep(rid, args, fetcher, saver, index)
        urls.append(url)
        statuses.append(status)
        if path and path not in saved:
            saved.append(path)
        if message:
            messages.append(message)

    if 'ok' in statuses or (saved and cached and cached.get('status') == 'ok'):
        status = 'ok'
    elif 'error' in statuses:
        status = 'error'
    else:
        status = 'no-links'
    return status, saved, urls, '; '.join(messages)


def fetch_one_reskeep(reskeep_id: str, args, fetcher: Fetcher, saver: SplitSaver,
                      index: Optional[int]) -> Tuple[str, str, str, str]:
    """Одна ссылка RESKEEP: (status, путь для split или '', url, сообщение)."""
    url = reskeep_url(args, reskeep_id)
    tag = 'reskeep %s' % reskeep_id

    if args.dry_run:
        # реальное расширение станет известно только при скачивании
        return 'ok', saver.plan(guess_ext(url, None), index), url, ''

    try:
        resp = fetcher.get(url)
    except Exception as exc:  # noqa: BLE001
        return 'error', '', url, '%s: %s' % (tag, fmt_exc(exc, fetcher))

    if resp.status in (403, 404, 410):
        return 'no-links', '', url, '%s: файла нет (HTTP %s)' % (tag, resp.status)
    if resp.status != 200:
        return 'error', '', url, '%s: HTTP %s' % (tag, resp.status)

    reason = reskeep_reject_reason(resp, args)
    if reason:
        return 'no-links', '', url, '%s: %s' % (tag, reason)

    path = saver.save(url, resp, index)
    if not path:
        return 'ok', '', url, '%s: файл совпадает с уже сохранённым' % tag
    return 'ok', path, url, ''


# --------------------------------------------------------------------------- #
#  Обработка одного события                                                     #
# --------------------------------------------------------------------------- #

# --------------------------------------------------------------------------- #
#  Кэш состояния: что и с какими данными уже проверялось                        #
# --------------------------------------------------------------------------- #

def normalize_checked(cached: Optional[dict]) -> Dict[str, dict]:
    """
    Приводит запись состояния к виду {источник: подробности}.

    Понимает три поколения формата:
      * новое  — {'checked': {'o-site': {'id': ..., 'status': ...}, ...}}
      * старое — {'tried': ['o-site', 'reskeep']} без подробностей
      * самое старое — полей нет вовсе, значит опрашивался только o-Site
    """
    if not cached:
        return {}
    checked = cached.get('checked')
    if isinstance(checked, dict):
        return {k: dict(v) for k, v in checked.items() if isinstance(v, dict)}
    status = cached.get('status', 'no-links')
    tried = cached.get('tried') or [SRC_O_SITE]
    return {src: {'status': status} for src in tried}


def source_entry(source: str, status: str, files: int, message: str,
                 o_site: str, reskeep: Sequence[str], args) -> dict:
    """Подробности проверки источника — то, что ляжет в файл состояния."""
    entry: Dict[str, object] = {'status': status, 'files': files}
    if message:
        entry['message'] = message
    if source == SRC_O_SITE:
        entry['id'] = o_site
    else:
        entry['ids'] = list(reskeep)
        entry['url'] = args.reskeep_url
    return entry


def needs_check(source: str, entry: Optional[dict], o_site: str,
                reskeep: Sequence[str], args) -> bool:
    """Надо ли опрашивать источник заново."""
    if not entry:
        return True                       # источник ещё ни разу не проверялся

    status = entry.get('status')
    if status == 'error' and args.retry_errors:
        return True
    if status == 'no-links' and args.retry_empty:
        return True

    if source == SRC_O_SITE:
        known = entry.get('id')
        if known is None:
            return False                  # кэш без подробностей — страницу не перечитываем
        return known != o_site             # идентификатор в календаре изменился

    # RESKEEP
    known_ids = entry.get('ids')
    if known_ids is None:
        return True                       # проверяли, но неизвестно с чем — перепроверим
    if list(known_ids) != list(reskeep):
        return True                       # список id в календаре изменился
    if entry.get('url') != args.reskeep_url:
        return True                       # изменился адрес (например, http -> https)
    return False


def stamp_identity(checked: Dict[str, dict], wanted: Sequence[str], o_site: str,
                   reskeep: Sequence[str], args) -> None:
    """
    Дописывает в старые записи кэша, с какими данными источник проверялся.

    Записи прежних форматов такой информации не содержат; считаем, что
    проверялись текущие значения из календаря. Это нужно, чтобы дальнейшие
    изменения ``o_site`` или ``reskeep`` снимали кэш автоматически.
    """
    for source in wanted:
        entry = checked.get(source)
        if not entry:
            continue
        if source == SRC_O_SITE:
            entry.setdefault('id', o_site)
        else:
            entry.setdefault('ids', list(reskeep))
            entry.setdefault('url', args.reskeep_url)


def handle_event(fname: str, event_id: str, o_site: str, reskeep: Sequence[str],
                 year: str, args, fetcher: Fetcher, state: Dict[str, dict],
                 existing_splits: List[str], use_o_site: bool = True,
                 use_reskeep: bool = True) -> Result:

    def make(status: str, saved=None, links=None, message='', sources=None,
             from_cache: bool = False) -> Result:
        return Result(fname, event_id, o_site, year, status,
                      saved=list(saved or []), links=list(links or []),
                      message=message, reskeep=list(reskeep),
                      sources=list(sources or []), from_cache=from_cache)

    wanted: List[str] = []
    if use_o_site and o_site:
        wanted.append(SRC_O_SITE)
    if use_reskeep and reskeep:
        wanted.append(SRC_RESKEEP)
    if not wanted:
        return make('skipped', message='нет применимых источников')

    # ---- кэш состояния ----------------------------------------------------- #
    cached = state.get(event_id)
    checked = normalize_checked(cached)
    lost: List[str] = []
    if cached and not args.force and not args.update:
        pending = [s for s in wanted
                   if needs_check(s, checked.get(s), o_site, reskeep, args)]
        # ссылки из кэша годятся, только если файлы действительно лежат на диске
        lost = [p for p in cached.get('saved', [])
                if not resolve_split_path(args.out_dir, p)]
        if lost:
            # хотя бы один файл потерян: кэш по этому событию не используем
            # совсем, иначе часть файлов не перекачается, а имена оставшихся
            # сдвинутся по нумерации
            pending = list(wanted)
        if not pending:
            if not args.dry_run:
                # заодно приводим запись к новому формату
                stamp_identity(checked, wanted, o_site, reskeep, args)
                cached['checked'] = checked
                cached.pop('tried', None)
                state[event_id] = cached
            msg = (cached.get('message', '') + ' (из кэша)').strip()
            return make(cached.get('status', 'no-links'),
                        saved=cached.get('saved', []),
                        links=cached.get('links', []),
                        message=msg, sources=cached.get('sources', []),
                        from_cache=True)
    else:
        cached = None
        checked = {}
        pending = list(wanted)

    saver = SplitSaver(args, event_id, year, existing_splits)
    saved: List[str] = list(existing_splits) if args.update else []
    links: List[str] = list(cached.get('links', [])) if cached else []
    got: List[str] = list(cached.get('sources', [])) if cached else []
    # если что-то потеряно, пути из кэша не переносим вовсе — все файлы
    # события скачиваются заново и получают те же имена, что и раньше
    for p in ((cached.get('saved', []) if cached else []) if not lost else []):
        if p not in saved:
            saved.append(p)

    messages: List[Tuple[str, str]] = []      # (статус источника, сообщение)
    if lost:
        messages.append(('lost', 'нет на диске: %s — качаем заново'
                         % ', '.join(lost)))
    statuses: List[str] = []

    def absorb(source: str, out: SourceResult) -> None:
        status, s_saved, s_links, message = out
        statuses.append(status)
        checked[source] = source_entry(source, status, len(s_saved), message,
                                       o_site, reskeep, args)
        for u in s_links:
            if u not in links:
                links.append(u)
        for p in s_saved:
            if p not in saved:
                saved.append(p)
        if s_saved and source not in got:
            got.append(source)
        if message:
            messages.append((status, message))

    if SRC_O_SITE in pending:
        absorb(SRC_O_SITE, collect_o_site(o_site, args, fetcher, saver))

    # RESKEEP — запасной источник: опрашиваем, только если сплитов так и нет
    if SRC_RESKEEP in pending and (args.reskeep_always or not saved):
        absorb(SRC_RESKEEP,
               collect_reskeep(reskeep, args, fetcher, saver, base=len(saved)))

    if 'ok' in statuses or (saved and cached and cached.get('status') == 'ok'):
        status = 'ok'
    elif 'error' in statuses:
        status = 'error'
    elif statuses:
        status = 'no-links'
    else:
        status = cached.get('status', 'no-links') if cached else 'skipped'

    if status == 'error':
        # при ошибке ничего не дописываем в календарь
        saved_for_js: List[str] = []
    else:
        saved_for_js = saved

    # если файлы нашлись, «пусто» от других источников не шумит в отчёте,
    # но частичные неудачи внутри источника (часть массива reskeep) сохраняем
    if status == 'ok':
        texts = [m for st, m in messages if st != 'no-links']
    else:
        texts = [m for _, m in messages]

    res = make(status, saved=saved_for_js, links=links,
               message='; '.join(texts), sources=got)

    if not args.dry_run:
        stamp_identity(checked, wanted, o_site, reskeep, args)
        state[event_id] = {
            'status': status,
            'saved': saved_for_js,
            'links': links,
            'message': res.message,
            'checked': checked,
            'sources': got,
        }
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
        description='Сбор сплитов с o-site.spb.ru и reskeep.ru '
                    'и прописывание их в calendar*.js')
    p.add_argument('--js-dir', default='js', help='папка с файлами calendar*.js')
    p.add_argument('--source', choices=['all', SRC_O_SITE, SRC_RESKEEP], default='all',
                   help='какие источники опрашивать (по умолчанию оба)')
    p.add_argument('--reskeep-url', default=RESKEEP_URL_TEMPLATE,
                   help='шаблон ссылки на файл RESKEEP (плейсхолдер {reskeep})')
    p.add_argument('--reskeep-always', action='store_true',
                   help='опрашивать RESKEEP даже если сплиты нашлись на o-Site')
    p.add_argument('--reskeep-accept-html', action='store_true',
                   help='принимать от RESKEEP html-страницы как файлы сплитов')
    p.add_argument('--reskeep-accept-any', action='store_true',
                   help='принимать от RESKEEP любой непустой ответ без проверок')
    p.add_argument('--check-saved', action='store_true',
                   help='проверить уже скачанные файлы сплитов и выйти: '
                        'на месте ли они и не страница ли сайта вместо протокола')
    p.add_argument('--probe', nargs='+', metavar='ID', default=None,
                   help='показать, что отдаёт RESKEEP по указанным id, и выйти')
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
    p.add_argument('--backend', choices=['auto', 'requests', 'urllib'], default='auto',
                   help='чем выполнять запросы: requests (если установлен) или '
                        'встроенный urllib, который берёт корневые сертификаты '
                        'из хранилища системы')
    p.add_argument('--insecure', action='store_true',
                   help='не проверять сертификаты вообще (все сайты)')
    p.add_argument('--insecure-host', action='append', default=None,
                   metavar='HOST',
                   help='не проверять сертификат только этого сайта '
                        '(можно повторять), например: --insecure-host reskeep.ru')
    p.add_argument('--no-auto-ca', action='store_true',
                   help='не достраивать цепочку сертификатов автоматически')
    p.add_argument('--ca-store', default='ca-extra.pem', metavar='FILE',
                   help='файл, куда складываются подгруженные промежуточные '
                        'сертификаты (используется при следующих запусках)')
    p.add_argument('--cafile', action='append', default=None, metavar='FILE',
                   help='дополнительный сертификат для проверки TLS (PEM или DER; '
                        'можно повторять). Добавляется к системным, а не заменяет их')
    p.add_argument('--retries', type=int, default=2)
    p.add_argument('--dry-run', action='store_true',
                   help='ничего не качать и не записывать')
    p.add_argument('--force', action='store_true', help='игнорировать кэш состояния')
    p.add_argument('--retry-errors', action='store_true',
                   help='повторить события, ранее завершившиеся ошибкой')
    p.add_argument('--retry-empty', action='store_true',
                   help='повторить события, по которым ранее ничего не нашлось '
                        '(кэш «без ссылок» игнорируется, найденное сохраняется)')
    p.add_argument('--state', default='splits-state.json',
                   help='файл состояния (кэш обработанных событий)')
    p.add_argument('--report', default='splits-report.txt', help='файл отчёта')
    p.add_argument('-v', '--verbose', action='store_true', help='печатать каждое событие')
    return p.parse_args(argv)


def make_fetcher(args) -> Fetcher:
    return Fetcher(timeout=args.timeout, retries=args.retries, sleep=args.sleep,
                   backend=args.backend, insecure=args.insecure,
                   insecure_hosts=args.insecure_host, cafile=args.cafile,
                   auto_ca=not args.no_auto_ca, ca_store=args.ca_store)


def _cert_name(pairs) -> str:
    """Собирает читаемое имя из структуры subject/issuer, отдаваемой ssl."""
    out = []
    for rdn in pairs or ():
        for key, value in rdn:
            if key in ('commonName', 'organizationName'):
                out.append(value)
    return ', '.join(dict.fromkeys(out))


def tls_diagnose(url: str, timeout: float = 15.0) -> None:
    """
    Показывает, что не так с сертификатом: соединение вообще устанавливается,
    кем выдан сертификат и где лежит промежуточный сертификат цепочки.
    """
    parts = urlparse(url)
    host, port = parts.hostname, parts.port or 443
    if not host:
        return
    try:
        try:
            pem = ssl.get_server_certificate((host, port), timeout=timeout)
        except TypeError:            # параметр timeout появился в Python 3.10
            pem = ssl.get_server_certificate((host, port))
    except Exception as exc:         # noqa: BLE001
        print('    TLS-соединение не устанавливается вовсе: %s' % exc)
        return
    print('    TLS-соединение устанавливается, сервер отвечает —')
    print('    дело только в проверке цепочки сертификатов')

    info = None
    tmp = None
    try:
        fd, tmp = tempfile.mkstemp(suffix='.pem')
        with os.fdopen(fd, 'w') as fh:
            fh.write(pem)
        info = ssl._ssl._test_decode_cert(tmp)   # приватный, но стабильный API
    except Exception:                # noqa: BLE001
        info = None
    finally:
        if tmp and os.path.exists(tmp):
            os.unlink(tmp)
    if not info:
        return

    subject = _cert_name(info.get('subject'))
    issuer = _cert_name(info.get('issuer'))
    if subject:
        print('    сертификат выдан на:   %s' % subject)
    if issuer:
        print('    удостоверяющий центр:  %s' % issuer)
    ca_issuers = info.get('caIssuers') or ()
    for link in ca_issuers:
        print('    промежуточный сертификат: %s' % link)
    if ca_issuers:
        print('    его можно скачать и указать: --cafile <файл>')


def probe_reskeep(args, fetcher: Fetcher, ids: Sequence[str]) -> int:
    """Показывает, что именно отдаёт RESKEEP по указанным id. Ничего не пишет."""
    mode = ''
    if fetcher.insecure:
        mode = ', без проверки сертификатов'
    elif fetcher.insecure_hosts:
        mode = ', без проверки сертификата: %s' % ', '.join(sorted(fetcher.insecure_hosts))
    elif fetcher.cafile or fetcher.ca_store_loaded:
        extra = list(fetcher.cafile) + ([fetcher.ca_store]
                                        if fetcher.ca_store_loaded else [])
        mode = ', плюс сертификаты из %s' % ', '.join(extra)
    print('запросы через: %s%s' % (fetcher.backend_name, mode))
    print()
    for rid in ids:
        url = reskeep_url(args, rid)
        print('id %s -> %s' % (rid, url))
        try:
            resp = fetcher.get(url)
        except Exception as exc:  # noqa: BLE001
            print('    ошибка запроса: %s' % fmt_exc(exc, fetcher))
            low = str(exc).lower()
            if 'certificate' in low or 'ssl' in low:
                tls_diagnose(url, args.timeout)
            print()
            continue
        print('    HTTP %s' % resp.status)
        if resp.url != url:
            print('    итоговый URL:  %s' % resp.url)
        print('    Content-Type:  %s' % (resp.content_type or '-'))
        print('    имя файла:     %s' % (resp.filename or '-'))
        print('    размер:        %d байт' % len(resp.content))
        print('    сигнатура:     %s' % (sniff_ext(resp.content) or '-'))
        print('    расширение:    %s' % guess_ext(url, resp))
        if resp.status == 200:
            reason = reskeep_reject_reason(resp, args)
            print('    вердикт:       %s' % (reason and ('отклонено — ' + reason)
                                             or 'принято, файл будет сохранён'))
        head = resp.content[:400]
        try:
            txt = head.decode('utf-8')
        except UnicodeDecodeError:
            txt = head.decode('windows-1251', 'replace')
        print('    начало:        %s' % _normalize(txt)[:200])
        print()
    return 0


def check_saved(paths: Sequence[str], args) -> int:
    """
    Проверяет файлы, на которые ссылаются поля ``split``: на месте ли они
    и не оказалась ли вместо протокола страница сайта с ошибкой.
    Ничего не изменяет.
    """
    total = 0
    bad: List[Tuple[str, str, str, str]] = []      # файл js, id, путь, причина

    for path in paths:
        if not os.path.exists(path):
            print('нет файла: %s' % path, file=sys.stderr)
            continue
        text, records = load_calendar(path)
        fname = os.path.basename(path)
        for rec in records:
            links = parse_split_paths(text, rec)
            if not links:
                continue
            event_id = field_string(text, rec.field('id')) or '?'
            for link in links:
                total += 1
                local = resolve_split_path(args.out_dir, link)
                if not local:
                    bad.append((fname, event_id, link, 'файл не найден на диске'))
                    continue
                try:
                    with open(local, 'rb') as fh:
                        data = fh.read(4 * 1024 * 1024)
                except OSError as exc:
                    bad.append((fname, event_id, link, 'не читается: %s' % exc))
                    continue
                if not data:
                    bad.append((fname, event_id, link, 'пустой файл'))
                    continue
                if len(data) < RESKEEP_MIN_SIZE:
                    bad.append((fname, event_id, link,
                                'слишком маленький файл (%d байт)' % len(data)))
                    continue
                if sniff_ext(data) == 'html' or local.lower().endswith(
                        ('.html', '.htm')):
                    reason = suspicious_html(data)
                    if reason:
                        bad.append((fname, event_id, link, reason))
                        continue
                if args.verbose:
                    print('  ok %-24s %6d байт  %s' % (event_id, len(data), link))

    print('Проверено файлов сплитов: %d' % total)
    print('Подозрительных:           %d' % len(bad))
    if bad:
        print()
        print('=== ПОХОЖЕ, ЭТО НЕ ПРОТОКОЛ ===')
        for fname, event_id, link, reason in bad:
            print('%-22s %-24s %s' % (fname, event_id, reason))
            print('    %s' % link)
        print()
        print('Такие файлы стоит удалить вместе с полем split в записи календаря,')
        print('а событие перепроверить: --retry-empty (или --force для этих файлов).')
    return 0


def main(argv=None) -> int:
    args = parse_args(argv)

    if args.probe:
        ids, bad = [], []
        for token in args.probe:
            for part in re.split(r'[\s,]+', token):
                if not part:
                    continue
                (ids if _INT_RE.match(part) else bad).append(part)
        if bad:
            print('не идентификаторы RESKEEP: %s' % ', '.join(bad), file=sys.stderr)
        if not ids:
            return 2
        return probe_reskeep(args, make_fetcher(args), ids)

    if args.file:
        paths = []
        for f in args.file:
            paths.append(f if os.path.dirname(f) else os.path.join(args.js_dir, f))
    else:
        paths = sorted(
            os.path.join(args.js_dir, f) for f in os.listdir(args.js_dir)
            if re.match(r'^calendar.*\.js$', f))

    if args.check_saved:
        return check_saved(paths, args)

    state: Dict[str, dict] = {}
    if os.path.exists(args.state) and not args.force:
        with io.open(args.state, 'r', encoding='utf-8') as fh:
            state = json.load(fh)

    fetcher = make_fetcher(args)
    results: List[Result] = []
    warnings: List[str] = []
    budget = [args.limit if args.limit > 0 else -1]

    try:
        for path in paths:
            if not os.path.exists(path):
                print('нет файла: %s' % path, file=sys.stderr)
                continue
            print('* %s' % os.path.basename(path))
            process_file(path, args, fetcher, state, results, budget, warnings)
            if budget[0] == 0:
                print('достигнут --limit')
                break
    finally:
        if not args.dry_run:
            with io.open(args.state, 'w', encoding='utf-8') as fh:
                json.dump(state, fh, ensure_ascii=False, indent=1)
        write_report(args.report, results, args, warnings)

    return 0


def write_report(path: str, results: List[Result], args,
                 warnings: Optional[List[str]] = None) -> None:
    ok = [r for r in results if r.status == 'ok']
    none = [r for r in results if r.status == 'no-links']
    err = [r for r in results if r.status == 'error']
    from_o_site = [r for r in ok if SRC_O_SITE in r.sources]
    from_reskeep = [r for r in ok if SRC_RESKEEP in r.sources]
    lines = []
    lines.append('Обработано событий: %d' % len(results))
    lines.append('  со сплитами:      %d (файлов: %d)' % (len(ok), sum(len(r.saved) for r in ok)))
    lines.append('    из них o-Site:  %d' % len(from_o_site))
    lines.append('    из них RESKEEP: %d' % len(from_reskeep))
    lines.append('  без ссылок:       %d' % len(none))
    lines.append('  ошибок:           %d' % len(err))
    cached_n = sum(1 for r in results if r.from_cache)
    if cached_n:
        lines.append('  из кэша:          %d (сеть не опрашивалась)' % cached_n)
    if warnings:
        lines.append('  предупреждений:   %d' % len(warnings))
    lines.append('')
    if warnings:
        lines.append('=== ПОЛЕ RESKEEP: НЕОЖИДАННОЕ ЗНАЧЕНИЕ ===')
        lines.extend(warnings)
        lines.append('')
    for title, group in (('НАЙДЕНО', ok), ('НЕ НАЙДЕНО', none), ('ОШИБКИ', err)):
        if not group:
            continue
        lines.append('=== %s ===' % title)
        for r in group:
            lines.append('%-24s %-16s %s' % (r.event_id, r.source_label, r.message))
            for s in r.saved:
                lines.append('    -> %s' % s)
            for u in r.links:
                lines.append('       %s' % u)
        lines.append('')
    text = '\n'.join(lines)
    with io.open(path, 'w', encoding='utf-8') as fh:
        fh.write(text)
    print()
    head = lines[:lines.index('')] if '' in lines else lines
    print('\n'.join(head))
    if warnings:
        for w in warnings:
            print('  ! %s' % w)
    print('Отчёт: %s' % path)


if __name__ == '__main__':
    sys.exit(main())
