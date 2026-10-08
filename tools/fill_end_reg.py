#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
fill_end_reg.py — заполняет поле `endReg` (окончание приёма заявок) в записях
calendar-*.js по страницам регистрации из поля `reg`.

Формат значения: 'YYYY-MM-DD HH:mm' (время московское, как на сайтах
регистрации). Если время на странице не указано или это конец дня (23:59,
23:59:59, 24:00) — только дата 'YYYY-MM-DD', то есть «до конца дня».
Время 00:00 записывается как есть ('2026-10-01 00:00' = начало 1 октября).

Поддерживаемые страницы (одно событие на странице):
  * orgeo.ru/event/<id>, orgeo.ru/event/info/<id>
        «Заявки принимаются до 02.10.2026 12:00 МСК»
  * o-reg.spb.ru/?filter[day_id]=<id>
        «До 23:59 08.10.2026»
  * sportident.online/entry/?id=<id>
        «Заявка до 18.10.2026 23:59:59»
  * reg.o-time.ru/race/<id>
        «Заявка открыта до 28.10.2026» / «Entry is open till 28.10.2026»
Списки событий (orgeo.ru/event/organizer/…, orgeo.ru/event/index/…,
sportident.online/?…&reg=…), e-mail и прочие сайты не обрабатываются —
они перечисляются в отчёте (с ключом -v).

Правила:
  * по умолчанию обрабатываются все годы календаря, с --year — только записи
    этого года (по полю date);
  * записи, у которых уже есть поле endReg, не обрабатываются (сайты для них
    не запрашиваются) — значение, найденное раньше или вписанное вручную,
    не меняется. Чтобы перепроверить срок, удалите поле endReg из записи;
  * если у записи несколько ссылок reg и они дают разные даты, или на одной
    странице найдено несколько разных дат, запись не меняется и попадает в
    «Требуют ручной проверки»;
  * дата окончания заявок позже последнего дня события — тоже в ручную
    проверку, в файл не пишется;
  * если на странице дата не найдена (заявка ещё не открыта, уже закрыта и
    сайт срок не показывает, страница другого вида), запись не меняется —
    срок можно вписать вручную;
  * новое поле вставляется строкой сразу после поля reg.

Скрипт правит файлы в --src на месте. Повторный запуск с теми же аргументами
ничего не меняет. Перед записью файл
проверяется `node --check` (если node есть). Кодировка и концы строк файлов
сохраняются.

Параметры:
  --src DIR      папка с calendar-*.js или корень сайта (по умолч. js)
  --year YYYY    только записи этого года (по полю date); по умолч. все годы
  -n, --dry-run  ничего не записывать, только показать отчёт
  --id ID        только запись с этим id (можно указать несколько раз)
  -v, --verbose  подробный отчёт: ещё и записи без найденной даты
                 и неподдерживаемые ссылки
  --workers N    сколько страниц качать одновременно (по умолч. 4)

Примеры:
  python tools/fill_end_reg.py -n
  python tools/fill_end_reg.py
  python tools/fill_end_reg.py --year 2026
  python tools/fill_end_reg.py -n -v
  python tools/fill_end_reg.py --id SPB_20261004_1 -n
"""

import argparse
import datetime
import html
import os
import re
import shutil
import ssl
import subprocess
import sys
import tempfile
import time
import urllib.error
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor

USER_AGENT = 'Mozilla/5.0 (o-maps.spb.ru fill_end_reg)'
FILE_RE = re.compile(r'^calendar-(?:early|fsor|(?:[a-z]+-)?\d{4})\.js$')
FIELD = 'endReg'


# ----------------------------------------------------------------------------
# Разбор JS-файла календаря (как в fill_bulletins.py)
# ----------------------------------------------------------------------------

def _skip_string(t, i):
    """i указывает на открывающую кавычку; вернуть индекс после закрывающей."""
    q = t[i]
    i += 1
    n = len(t)
    while i < n:
        c = t[i]
        if c == '\\':
            i += 2
            continue
        if c == q:
            return i + 1
        if c == '\n' and q != '`':
            raise ValueError('незакрытая строка на позиции %d' % i)
        i += 1
    raise ValueError('незакрытая строка')


def _skip_comment(t, i):
    """Если в i начинается комментарий — вернуть индекс после него, иначе i."""
    if t.startswith('//', i):
        j = t.find('\n', i)
        return len(t) if j < 0 else j
    if t.startswith('/*', i):
        j = t.find('*/', i + 2)
        if j < 0:
            raise ValueError('незакрытый комментарий')
        return j + 2
    return i


def _skip_ws(t, i, end):
    while i < end:
        if t[i].isspace():
            i += 1
            continue
        j = _skip_comment(t, i)
        if j != i:
            i = j
            continue
        break
    return i


def find_records(t):
    """Вернуть список (start, end) объектов верхнего уровня массива
    (t[start] == '{', t[end] == '}')."""
    m = re.search(r'=\s*\[', t)
    if not m:
        raise ValueError('не найден массив записей')
    i = m.end()
    n = len(t)
    depth = 1          # внутри массива
    recs = []
    start = None
    while i < n:
        c = t[i]
        if c in '\'"`':
            i = _skip_string(t, i)
            continue
        j = _skip_comment(t, i)
        if j != i:
            i = j
            continue
        if c in '[{(':
            if depth == 1 and c == '{':
                start = i
            depth += 1
        elif c in ']})':
            depth -= 1
            if depth == 1 and c == '}':
                recs.append((start, i))
            if depth == 0:
                return recs
        i += 1
    raise ValueError('массив записей не закрыт')


def parse_fields(t, s, e):
    """Поля объекта t[s..e]: список dict(key, kpos, vstart, vend, comma)."""
    fields = []
    i = s + 1
    while True:
        i = _skip_ws(t, i, e)
        if i >= e:
            break
        if t[i] in '\'"':
            j = _skip_string(t, i)
            key = t[i + 1:j - 1]
        else:
            m = re.compile(r'[A-Za-z_$][\w$]*').match(t, i)
            if not m:
                raise ValueError('не разобран ключ на позиции %d' % i)
            j = m.end()
            key = m.group(0)
        kpos = i
        i = _skip_ws(t, j, e)
        if t[i] != ':':
            raise ValueError('ожидалось ":" после ключа %r' % key)
        i = _skip_ws(t, i + 1, e)
        vstart = i
        vend = i
        depth = 0
        while i < e:
            c = t[i]
            if c in '\'"`':
                i = _skip_string(t, i)
                vend = i
                continue
            j = _skip_comment(t, i)
            if j != i:
                i = j
                continue
            if depth == 0 and c == ',':
                break
            if c in '[{(':
                depth += 1
            elif c in ']})':
                depth -= 1
            if not c.isspace():
                vend = i + 1
            i += 1
        comma = i if (i < e and t[i] == ',') else None
        fields.append(dict(key=key, kpos=kpos, vstart=vstart, vend=vend,
                           comma=comma))
        if comma is None:
            break
        i = comma + 1
    return fields


def string_literals(raw):
    """Все строковые литералы из сырого значения поля."""
    out = []
    for m in re.finditer(r"'((?:[^'\\\n]|\\.)*)'|\"((?:[^\"\\\n]|\\.)*)\"", raw):
        s = m.group(1) if m.group(1) is not None else m.group(2)
        out.append(re.sub(r'\\(.)', r'\1', s))
    return out


def single_string(raw):
    """Значение, если raw — ровно один строковый литерал, иначе None."""
    raw = raw.strip()
    if len(raw) >= 2 and raw[0] == raw[-1] and raw[0] in '\'"':
        lits = string_literals(raw)
        if len(lits) == 1:
            return lits[0]
    return None


# ----------------------------------------------------------------------------
# Загрузка страниц
# ----------------------------------------------------------------------------

META_CHARSET_RE = re.compile(rb'<meta[^>]+charset\s*=\s*["\']?([\w-]+)', re.I)


class Fetcher:
    def __init__(self, retries=2, timeout=40):
        self.retries = retries
        self.timeout = timeout
        self.mem = {}      # в пределах запуска: одна ссылка качается один раз
        self.insecure = ssl.create_default_context()
        self.insecure.check_hostname = False
        self.insecure.verify_mode = ssl.CERT_NONE

    def get(self, url):
        """-> текст страницы. Исключение при ошибке."""
        if url in self.mem:
            return self.mem[url]
        last_err = None
        for attempt in range(self.retries + 1):
            try:
                body, charset = self._download(url)
                break
            except urllib.error.HTTPError as ex:
                if ex.code in (403, 404, 410):
                    raise
                last_err = ex
            except Exception as ex:          # сеть, таймаут
                last_err = ex
            time.sleep(1.5 * (attempt + 1))
        else:
            raise last_err
        if not charset:
            m = META_CHARSET_RE.search(body[:4000])
            charset = m.group(1).decode('ascii') if m else 'utf-8'
        try:
            text = body.decode(charset, 'replace')
        except LookupError:
            text = body.decode('utf-8', 'replace')
        self.mem[url] = text
        return text

    def _download(self, url):
        req = urllib.request.Request(url, headers={
            'User-Agent': USER_AGENT,
            # o-time отдаёт страницу на языке браузера
            'Accept-Language': 'ru-RU,ru;q=0.9',
        })
        try:
            resp = urllib.request.urlopen(req, timeout=self.timeout)
        except urllib.error.URLError as ex:
            if isinstance(getattr(ex, 'reason', None), ssl.SSLError):
                # неполная цепочка сертификатов у хостинга — повтор без проверки
                resp = urllib.request.urlopen(req, timeout=self.timeout,
                                              context=self.insecure)
            else:
                raise
        with resp:
            return resp.read(), resp.headers.get_content_charset()


# ----------------------------------------------------------------------------
# Сайты регистрации
# ----------------------------------------------------------------------------

def page_text(page):
    """Текст страницы без тегов, скриптов и стилей, пробелы схлопнуты."""
    t = re.sub(r'(?is)<(script|style)\b.*?</\1\s*>', ' ', page)
    t = re.sub(r'<[^>]+>', ' ', t)
    return ' '.join(html.unescape(t).split())


D = r'(\d{1,2})\.(\d{1,2})\.(\d{4})'          # 02.10.2026
T = r'(\d{1,2}):(\d{2})(?::\d{2})?'           # 12:00, 23:59:59

# Каждый сайт: как узнать страницу одного события и где на ней срок.
# find(page) -> список кортежей (день, месяц, год, час|None, минута|None).
SITES = [
    dict(
        name='Orgeo',
        host=re.compile(r'(^|\.)orgeo\.ru$'),
        page=lambda u: bool(re.match(r'^/event/(?:info/)?(?!organizer\b|index\b)'
                                     r'[\w-]+/?$', u.path)),
        # фраза orgeo в описании события (meta description) — есть и после
        # закрытия приёма заявок; «МСК» отличает её от текста организаторов
        find=lambda page: [
            (m[0], m[1], m[2], m[3], m[4]) for m in re.findall(
                r'Заявки принимаются до\s+' + D + r'\s+' + T + r'\s+МСК',
                html.unescape(page))],
    ),
    dict(
        name='O-Reg',
        host=re.compile(r'(^|\.)o-reg\.spb\.ru$'),
        page=lambda u: 'filter[day_id]' in urllib.parse.unquote(u.query),
        find=lambda page: [
            (m[2], m[3], m[4], m[0], m[1]) for m in re.findall(
                r'\bДо\s+' + T + r'\s+' + D, page_text(page))],
    ),
    dict(
        name='Sportident',
        host=re.compile(r'(^|\.)sportident\.online$'),
        page=lambda u: bool(re.search(r'(?:^|&)id=\d+(?:&|$)', u.query)),
        find=lambda page: [
            (m[0], m[1], m[2], m[3] or None, m[4] or None) for m in re.findall(
                r'Заявка до\s+' + D + r'(?:\s+' + T + r')?', page_text(page))],
    ),
    dict(
        name='O-Time',
        host=re.compile(r'(^|\.)o-time\.ru$'),
        page=lambda u: bool(re.match(r'^/race/\d+/?$', u.path)),
        find=lambda page: [
            (m[0], m[1], m[2], m[3] or None, m[4] or None) for m in re.findall(
                r'(?:Заявка открыта до|Entry is open till)\s+' + D +
                r'(?:\s+' + T + r')?', page_text(page))],
    ),
]


def classify(url):
    """-> (сайт, None) или (None, причина)."""
    if '@' in url and not re.match(r'^https?://', url, re.I):
        return None, 'e-mail'
    try:
        u = urllib.parse.urlsplit(url.strip())
    except ValueError:
        return None, 'не ссылка'
    host = (u.hostname or '').lower()
    for site in SITES:
        if site['host'].search(host):
            if site['page'](u):
                return site, None
            return None, 'не страница события (%s)' % site['name']
    return None, 'сайт не поддерживается (%s)' % (host or url)


def normalize(day, month, year, hour, minute):
    """-> 'YYYY-MM-DD' или 'YYYY-MM-DD HH:mm'; ValueError при кривой дате."""
    d = datetime.date(int(year), int(month), int(day))
    if hour is None:
        return d.isoformat()
    h, mi = int(hour), int(minute)
    if (h, mi) in ((23, 59), (24, 0)):
        return d.isoformat()                 # до конца дня
    if not (0 <= h <= 23 and 0 <= mi <= 59):
        raise ValueError('время %s:%s' % (hour, minute))
    return '%s %02d:%02d' % (d.isoformat(), h, mi)


def find_end_reg(task, fetcher):
    """-> dict(status=ok|none|conflict|error, value, detail)."""
    values = {}          # значение -> [url]
    errors, bad = [], []
    for site, url in task['links']:
        try:
            page = fetcher.get(url)
        except Exception as ex:
            errors.append('%s: %s' % (url, ex))
            continue
        for found in site['find'](page):
            try:
                v = normalize(*found)
            except ValueError as ex:
                bad.append('%s: %s' % (url, ex))
                continue
            values.setdefault(v, [])
            if url not in values[v]:
                values[v].append(url)
    if len(values) > 1:
        return dict(status='conflict', detail=' | '.join(
            '%s ← %s' % (v, ', '.join(us)) for v, us in sorted(values.items())))
    if values:
        v, us = next(iter(values.items()))
        return dict(status='ok', value=v, url=us[0],
                    warn='; '.join(errors + bad) or None)
    if errors:
        return dict(status='error', detail='; '.join(errors + bad))
    return dict(status='none', detail=', '.join(u for _, u in task['links'])
                + ((' (' + '; '.join(bad) + ')') if bad else ''))


# ----------------------------------------------------------------------------
# Файлы
# ----------------------------------------------------------------------------

def read_js(path):
    with open(path, 'rb') as f:
        data = f.read()
    for enc in ('utf-8-sig' if data.startswith(b'\xef\xbb\xbf') else 'utf-8',
                'cp1251'):
        try:
            text = data.decode(enc)
            break
        except UnicodeDecodeError:
            continue
    eol = '\r\n' if b'\r\n' in data else '\n'
    # работаем с \n, при записи восстанавливаем исходные концы строк
    return text.replace('\r\n', '\n'), enc, eol


def write_js(path, text, enc, eol):
    with open(path, 'wb') as f:
        f.write(text.replace('\n', eol).encode(enc))


def js_quote(s):
    return "'" + s.replace('\\', '\\\\').replace("'", "\\'") + "'"


def insertion(t, anchor, value):
    """Вставка строки `endReg: '…'` после поля anchor -> [(pos, текст)]."""
    line_start = t.rfind('\n', 0, anchor['kpos']) + 1
    indent = t[line_start:anchor['kpos']]
    if indent.strip():
        indent = re.match(r'\s*', indent).group(0)
    line = FIELD + ': ' + js_quote(value)
    if anchor['comma'] is not None:
        after = anchor['comma'] + 1
        pos = after
        rest_end = t.find('\n', after)
        rest_end = len(t) if rest_end < 0 else rest_end
        rest = t[after:rest_end]
        if not rest.strip() or rest.strip().startswith('//'):
            pos = rest_end
        return [(pos, '\n' + indent + line + ',')]
    # поле было последним и без запятой
    pos = anchor['vend']
    rest_end = t.find('\n', pos)
    rest_end = len(t) if rest_end < 0 else rest_end
    rest = t[pos:rest_end]
    if rest.strip().startswith('//'):
        return [(pos, ','), (rest_end, '\n' + indent + line)]
    return [(pos, ',\n' + indent + line)]


def apply_edits(parsed, edits, src, dry_run):
    """edits: файл -> [(start, end, текст)]. Проверка node --check и запись.
    -> список изменённых файлов."""
    changed = []
    for fn, eds in sorted(edits.items()):
        text, enc, eol = parsed[fn]
        for a, b, rep in sorted(eds, key=lambda x: (x[0], x[1]), reverse=True):
            text = text[:a] + rep + text[b:]
        if text == parsed[fn][0]:
            continue
        err = node_check(text, eol, enc)
        if err:
            print('\n!! %s: node --check не прошёл, файл не записан:\n%s'
                  % (fn, err))
            continue
        changed.append(fn)
        if not dry_run:
            write_js(os.path.join(src, fn), text, enc, eol)
    verb = 'Будут изменены' if dry_run else 'Изменены'
    print('\n%s файлы (%d): %s' % (verb, len(changed), ', '.join(changed) or '—'))
    if not shutil.which('node'):
        print('(node не найден — проверка синтаксиса пропущена)')
    return changed


def node_check(text, eol, enc):
    node = shutil.which('node')
    if not node:
        return None
    fd, tmp = tempfile.mkstemp(suffix='.js')
    try:
        with os.fdopen(fd, 'wb') as f:
            f.write(text.replace('\n', eol).encode(enc))
        r = subprocess.run([node, '--check', tmp], capture_output=True,
                           text=True)
        return None if r.returncode == 0 else (r.stderr or r.stdout).strip()
    finally:
        os.unlink(tmp)


def resolve_src(src):
    def has_cal(d):
        return os.path.isdir(d) and any(FILE_RE.match(x) for x in os.listdir(d))
    if has_cal(src):
        return src
    if has_cal(os.path.join(src, 'js')):
        return os.path.join(src, 'js')
    sys.exit('В %s не найдены файлы calendar-*.js' % src)


# ----------------------------------------------------------------------------

def short(fn):
    return fn[9:-3]      # calendar-2026.js -> 2026


def main():
    ap = argparse.ArgumentParser(
        description='Заполнить поле endReg (окончание приёма заявок) в '
                    'calendar-*.js по страницам регистрации из поля reg.')
    ap.add_argument('--src', default='js',
                    help='папка с calendar-*.js или корень сайта (по умолч. js)')
    ap.add_argument('--year', type=int,
                    help='обработать только записи этого года (по полю date)')
    ap.add_argument('-n', '--dry-run', action='store_true',
                    help='ничего не записывать, только показать')
    ap.add_argument('--id', action='append', default=[],
                    help='только запись с этим id (можно несколько раз)')
    ap.add_argument('-v', '--verbose', action='store_true',
                    help='подробный отчёт: записи без даты и неподдерживаемые '
                         'ссылки')
    ap.add_argument('--workers', type=int, default=4,
                    help='параллельных загрузок (по умолч. 4)')
    args = ap.parse_args()

    src = resolve_src(args.src)
    files = sorted(f for f in os.listdir(src) if FILE_RE.match(f))
    only = set(args.id)

    # 1. Сбор задач
    parsed = {}          # имя файла -> (text, enc, eol)
    tasks = []           # dict(file, id, links, reg, last)
    unsupported = []     # (file, id, url, причина)
    problems = []        # (file, id, сообщение) — требуют ручной проверки
    has_end_reg = 0      # записи, где endReg уже есть — пропущены
    seen_only = set()    # --id: найденные записи
    for fn in files:
        text, enc, eol = read_js(os.path.join(src, fn))
        try:
            recs = find_records(text)
        except ValueError as ex:
            problems.append((fn, '-', 'файл не разобран: %s' % ex))
            continue
        parsed[fn] = (text, enc, eol)
        for s, e in recs:
            try:
                flds = parse_fields(text, s, e)
            except ValueError as ex:
                problems.append((fn, 'позиция %d' % s,
                                 'запись не разобрана: %s' % ex))
                continue
            by = {}
            for f in flds:
                by.setdefault(f['key'], f)
            if 'reg' not in by:
                continue
            raw = lambda k: text[by[k]['vstart']:by[k]['vend']]
            sget = lambda k: single_string(raw(k)) if k in by else None
            rid = sget('id') or '(без id, позиция %d)' % s
            if only and rid not in only:
                continue
            if only:
                seen_only.add(rid)
            date = sget('date')
            last = sget('endDate') or date
            if not last or not re.match(r'^\d{4}-\d{2}-\d{2}$', last):
                problems.append((fn, rid, 'нет корректного date/endDate'))
                continue
            if args.year is not None and (not date or date[:4] != str(args.year)):
                continue
            if FIELD in by:
                has_end_reg += 1
                if only:
                    problems.append((fn, rid, 'уже есть %s: %s — запись '
                                     'пропущена' % (FIELD, raw(FIELD))))
                continue
            links = []
            for url in string_literals(raw('reg')):
                site, why = classify(url)
                if site:
                    links.append((site, url.strip()))
                else:
                    unsupported.append((fn, rid, url, why))
            if links:
                tasks.append(dict(file=fn, id=rid, links=links, reg=by['reg'],
                                  last=last))

    for rid in sorted(only - seen_only):
        problems.append(('-', rid, 'запись с таким id и полем reg не найдена'))

    print('Файлов: %d, записей к обработке: %d (уже с %s, пропущены: %d)' % (
        len(parsed), len(tasks), FIELD, has_end_reg))

    # 2. Загрузка
    fetcher = Fetcher()
    done = [0]

    def work(task):
        r = find_end_reg(task, fetcher)
        done[0] += 1
        if done[0] % 20 == 0:
            print('  … %d/%d' % (done[0], len(tasks)), file=sys.stderr)
        return r

    with ThreadPoolExecutor(max(1, args.workers)) as ex:
        results = list(ex.map(work, tasks))

    # 3. Правка файлов
    edits = {}           # file -> [(start, end, текст)]
    added, none, errs = [], [], []
    for task, r in zip(tasks, results):
        fn = task['file']
        if r['status'] == 'ok':
            v = r['value']
            if r.get('warn'):
                problems.append((fn, task['id'], 'часть страниц не загружена '
                                 'или с кривой датой: ' + r['warn']))
            if v[:10] > task['last']:
                problems.append((fn, task['id'], 'окончание заявок %s позже '
                                 'последнего дня события %s — не записано (%s)'
                                 % (v, task['last'], r['url'])))
                continue
            edits.setdefault(fn, []).extend(
                (p, p, x) for p, x in insertion(parsed[fn][0], task['reg'], v))
            added.append((task, r))
        elif r['status'] == 'none':
            none.append((task, r))
        elif r['status'] == 'conflict':
            problems.append((fn, task['id'], 'разные сроки: ' + r['detail']))
        else:
            errs.append((task, r))

    def line(task, text):
        print('  %-10s %-22s %s' % (short(task['file']), task['id'], text))

    print('\nДобавлено %s: %d' % (FIELD, len(added)))
    for task, r in added:
        line(task, '%-16s %s' % (r['value'], r['url']))
    if none:
        print('\nСрок на странице не найден: %d%s' % (
            len(none), '' if args.verbose else ' (список — с ключом -v)'))
        if args.verbose:
            for task, r in none:
                line(task, r['detail'])
    if unsupported:
        print('\nСсылки reg не обрабатываются: %d%s' % (
            len(unsupported), '' if args.verbose else ' (список — с ключом -v)'))
        if args.verbose:
            for fn, rid, url, why in unsupported:
                print('  %-10s %-22s %s: %s' % (short(fn), rid, why, url))
    if errs:
        print('\nОшибки загрузки: %d' % len(errs))
        for task, r in errs:
            line(task, r['detail'])
    if problems:
        print('\nТребуют ручной проверки: %d' % len(problems))
        for fn, rid, msg in problems:
            print('  %-10s %-22s %s' % (short(fn) if fn != '-' else '-', rid, msg))

    apply_edits(parsed, edits, src, args.dry_run)


if __name__ == '__main__':
    main()
