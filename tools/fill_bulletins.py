#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
fill_bulletins.py — заполняет поле `bulletin` в записях calendar-*.js.

Источник ссылки:
  * есть `o_site`  -> страница https://o-site.spb.ru/race.php?id=<o_site>;
  * нет `o_site`, но `reg` (строка или массив) содержит orgeo.ru -> страницы orgeo.

На странице берутся ссылки с текстом «Информационный бюллетень …». Если их
несколько, выбирается бюллетень с наибольшим номером («№3», «- 3», «3» …);
бюллетень без номера считается первым. При равных номерах (например,
«Информационный Бюллетень» и «Информационный Бюллетень (в .pdf)») берётся
последний по порядку на странице. Если бюллетеней несколько и в заголовке
у кого-то стоит не номер, а другое уточнение («1 день», «- рогейн», «ЧиПЛО» …),
запись не заполняется, а выводится в отчёт для ручного выбора.

Серии. Если одно `o_site` стоит у нескольких записей календаря, а бюллетеней
на странице несколько, они раскладываются по записям серии (записи
упорядочиваются по date):
  * «1 день», «день 2» …  -> N-я запись серии; N не больше числа записей,
                             многодневных записей в серии нет; если для
                             какого-то дня бюллетеня нет, его запись остаётся
                             без bulletin;
  * «29.03», «29 марта» … -> запись с этой датой (с учётом endDate);
  * «3 этап», «этап 3» …  -> запись, в названии которой «3 этап»;
  * только номера, и бюллетеней столько же, сколько записей -> по возрастанию
    номера на записи по возрастанию даты (помечается «проверьте»).
Несколько бюллетеней на один день/дату/этап — берётся с наибольшим номером.
Если разложить однозначно нельзя, вся серия выводится в отчёт для ручного
выбора. Серия определяется по всем calendar-*.js, независимо от --year и от
того, заполнен ли уже у части записей `bulletin`.

Записи, у которых уже есть поле `bulletin`, не обрабатываются.

Скрипт правит файлы в --src на месте. Повторный запуск с теми же аргументами
ничего не меняет. Перед записью файл проверяется `node --check` (если node есть).

Параметры:
  --src DIR      папка с calendar-*.js или корень сайта (по умолч. js)
  --year YYYY    только записи этого года (по полю date); по умолч. все годы
  -n, --dry-run  ничего не записывать, только показать отчёт
  --remove       удалить поля bulletin из всех записей (с --year — только из
                 записей этого года); сайты не запрашиваются
  -v, --verbose  подробный отчёт: ещё и список записей без бюллетеня
                 (с --remove — id записей, у которых удаляется bulletin)
  --workers N    сколько страниц качать одновременно (по умолч. 4);
                 больше — быстрее, но выше нагрузка на o-site/orgeo

Примеры:
  python fill_bulletins.py --src js -n
  python fill_bulletins.py --src js --year 2025
  python fill_bulletins.py --src js --year 2025 -n -v   # + записи без бюллетеня
  python fill_bulletins.py --src js --remove --year 2025  # убрать bulletin за 2025
"""

import argparse
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
from html.parser import HTMLParser

O_SITE_PREFIX = 'https://o-site.spb.ru/race.php?id='
USER_AGENT = 'Mozilla/5.0 (o-maps.spb.ru fill_bulletins)'
FILE_RE = re.compile(r'^calendar-(?:early|(?:[a-z]+-)?\d{4})\.js$')

# «Информационный бюллетень», «Инф. бюллетень», «Бюллетень» (+ опечатка «бюлетень»)
BULLETIN_RE = re.compile(
    r'^(?:информационный\s+|инф\.?\s*)?бюлл?етень\b(.*)$', re.I | re.S)
NUMBER_RE = re.compile(r'^\s*(?:№|N[oо]?\.?|#|[-–—:])?\s*(\d+)', re.I)
# «стандартный» хвост заголовка: только номер и/или пометка формата «(в .pdf)»
STANDARD_TAIL_RE = re.compile(
    r'^\s*(?:(?:№|N[oо]?\.?|#|[-–—:])?\s*\d+)?\s*'
    r'(?:\(\s*(?:в\s*)?\.?[a-z]{2,5}\s*\)|\.[a-z]{2,5})?\s*$', re.I)


# ----------------------------------------------------------------------------
# Разбор JS-файла календаря
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

class Fetcher:
    def __init__(self, retries=2, timeout=40):
        self.retries = retries
        self.timeout = timeout
        self.mem = {}      # в пределах запуска: общий o_site качается один раз
        self.insecure = ssl.create_default_context()
        self.insecure.check_hostname = False
        self.insecure.verify_mode = ssl.CERT_NONE

    def get(self, url, default_charset):
        """-> (текст, итоговый url). Исключение при ошибке."""
        if url in self.mem:
            return self.mem[url]
        last_err = None
        for attempt in range(self.retries + 1):
            try:
                body, final, charset = self._download(url)
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
        text = body.decode(charset or default_charset, 'replace')
        self.mem[url] = (text, final)
        return text, final

    def _download(self, url):
        req = urllib.request.Request(url, headers={'User-Agent': USER_AGENT})
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
            body = resp.read()
            charset = resp.headers.get_content_charset()
            return body, resp.geturl(), charset


# ----------------------------------------------------------------------------
# Поиск бюллетеня на странице
# ----------------------------------------------------------------------------

class _Anchors(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.links = []        # (href, text)
        self._stack = []

    def handle_starttag(self, tag, attrs):
        if tag == 'a':
            self._stack.append([dict(attrs).get('href'), []])

    def handle_endtag(self, tag):
        if tag == 'a' and self._stack:
            href, parts = self._stack.pop()
            if href:
                self.links.append((href, ' '.join(''.join(parts).split())))

    def handle_data(self, data):
        if self._stack:
            self._stack[-1][1].append(data)


def bulletin_candidates(page, base_url):
    """[(номер, заголовок, абсолютный url, стандартный_ли)] в порядке
    появления на странице, без повторов по url."""
    p = _Anchors()
    p.feed(page)
    p.close()
    out, seen = [], set()
    for href, text in p.links:
        m = BULLETIN_RE.match(text)
        if not m:
            continue
        href = html.unescape(href).strip()
        if not href or href.startswith(('javascript:', 'mailto:', '#')):
            continue
        url = urllib.parse.urljoin(base_url, href).replace(' ', '%20')
        if url in seen:
            continue
        seen.add(url)
        n = NUMBER_RE.match(m.group(1))
        out.append((int(n.group(1)) if n else 1, text, url,
                    bool(STANDARD_TAIL_RE.match(m.group(1)))))
    return out


def pick_last(cands):
    """Наибольший номер; при равенстве — последний по порядку."""
    best = None
    for c in cands:
        if best is None or c[0] >= best[0]:
            best = c
    return best


def choose(cands, page):
    """Выбор из кандидатов. Если бюллетеней несколько и у кого-то в заголовке
    есть что-то кроме номера (день, дисциплина, другое событие), номер не
    означает «версию» бюллетеня — такие записи отдаются на ручную проверку."""
    if len(cands) > 1 and not all(c[3] for c in cands):
        return dict(status='ambiguous', page=page,
                    detail=' | '.join('«%s» %s' % (c[1], c[2]) for c in cands))
    best = pick_last(cands)
    return dict(status='ok', url=best[2], title=best[1], page=page,
                others=len(cands) - 1)


MONTHS = {'январ': 1, 'феврал': 2, 'март': 3, 'апрел': 4, 'ма': 5, 'июн': 6,
          'июл': 7, 'август': 8, 'сентябр': 9, 'октябр': 10, 'ноябр': 11,
          'декабр': 12}
DAY_RE = re.compile(r'(?:\b(\d{1,2})\s*-?\s*(?:й|ой|ий)?\s+(?:день|дня)\b'
                    r'|\bдень\s*№?\s*(\d{1,2})\b)', re.I)
STAGE_RE = re.compile(r'(?:\b(\d{1,2})\s*-?\s*(?:й|ой|ий)?\s+этап|'
                      r'\bэтап\s*№?\s*(\d{1,2})\b)', re.I)
DATE_NUM_RE = re.compile(r'(?<![\d.])(\d{1,2})\.(\d{1,2})(?:\.(\d{2}|\d{4}))?(?![\d.])')
DATE_TXT_RE = re.compile(
    r'\b(\d{1,2})\s+(январ|феврал|март|апрел|ма[йя]|июн|июл|август|сентябр|'
    r'октябр|ноябр|декабр)(?:[а-я]*)\b', re.I)


def _title_tail(title):
    return BULLETIN_RE.match(title).group(1)


def _one(regex, text):
    """Единственное значение (int) из регулярки или None (нет / несколько)."""
    vals = {int(a or b) for a, b in regex.findall(text)}
    return vals.pop() if len(vals) == 1 else None


def _title_date(tail):
    """(месяц, день) из заголовка или None."""
    found = set()
    for d, m, _ in DATE_NUM_RE.findall(tail):
        found.add((int(m), int(d)))
    for d, mon in DATE_TXT_RE.findall(tail):
        mon = mon.lower()
        found.add((MONTHS['ма' if mon.startswith('ма') and mon != 'март'
                          else mon], int(d)))
    return found.pop() if len(found) == 1 else None


def _record_days(rec):
    """Множество (месяц, день) дат записи с учётом endDate."""
    import datetime
    try:
        a = datetime.date.fromisoformat(rec['date'])
        b = datetime.date.fromisoformat(rec['endDate'] or rec['date'])
    except (TypeError, ValueError):
        return set()
    out = set()
    while a <= b:
        out.add((a.month, a.day))
        a += datetime.timedelta(days=1)
    return out


def distribute(group, cands):
    """Разложить бюллетени серии по записям с одинаковым o_site.
    group — все записи календаря с этим o_site (dict id, date, endDate, name),
    cands — бюллетени со страницы. -> (dict id -> (кандидат, способ), None)
    или (None, причина)."""
    recs = sorted(group, key=lambda r: (r['date'] or '', r['id']))
    tails = [_title_tail(c[1]) for c in cands]

    def by_key(keyfn, what):
        # несколько бюллетеней на один день/дату/этап — берём последний (номер)
        keyed = {}
        for c, t in zip(cands, tails):
            k = keyfn(t)
            if k is None:
                return None, 'не у всех бюллетеней указан %s' % what
            keyed.setdefault(k, []).append(c)
        return {k: pick_last(v) for k, v in keyed.items()}, None

    # 1. день: «N день», «день N» -> N-я по дате запись серии
    if any(DAY_RE.search(t) for t in tails):
        keyed, err = by_key(lambda t: _one(DAY_RE, t), 'день')
        if err:
            return None, err
        if max(keyed) > len(recs) or min(keyed) < 1:
            return None, 'дни в бюллетенях %s, записей в серии %d' % (
                sorted(keyed), len(recs))
        if any(r['endDate'] and r['endDate'] != r['date'] for r in recs):
            return None, 'в серии есть многодневные записи — день не сопоставить'
        # дня без бюллетеня может не быть: такая запись остаётся без bulletin
        return {recs[n - 1]['id']: (c, 'по дню %d' % n)
                for n, c in keyed.items()}, None

    # 2. дата: «29.03», «29 марта» -> запись с этой датой
    if any(_title_date(t) for t in tails):
        keyed, err = by_key(_title_date, 'дата')
        if err:
            return None, err
        out = {}
        for md, c in keyed.items():
            hit = [r for r in recs if md in _record_days(r)]
            if len(hit) != 1:
                return None, 'дате %02d.%02d соответствует записей: %d' % (
                    md[1], md[0], len(hit))
            if hit[0]['id'] in out:
                return None, 'на запись %s приходится несколько дат' % hit[0]['id']
            out[hit[0]['id']] = (c, 'по дате %02d.%02d' % (md[1], md[0]))
        return out, None

    # 3. этап: «N этап» -> запись, в названии которой «N этап»
    if any(STAGE_RE.search(t) for t in tails):
        keyed, err = by_key(lambda t: _one(STAGE_RE, t), 'этап')
        if err:
            return None, err
        out = {}
        for n, c in keyed.items():
            hit = [r for r in recs if _one(STAGE_RE, r['name'] or '') == n]
            if len(hit) != 1:
                return None, 'этапу %d соответствует записей: %d' % (n, len(hit))
            out[hit[0]['id']] = (c, 'по этапу %d' % n)
        return out, None

    # 4. только номера, бюллетеней столько же, сколько записей:
    #    по возрастанию номера -> записи по возрастанию даты
    if all(c[3] for c in cands) and len(cands) == len(recs):
        order = sorted(range(len(cands)), key=lambda i: (cands[i][0], i))
        return {r['id']: (cands[i], 'по порядку — проверьте')
                for r, i in zip(recs, order)}, None

    return None, 'бюллетеней %d, записей в серии %d' % (len(cands), len(recs))


def find_bulletin(task, fetcher):
    """task: dict(kind='o_site'|'orgeo', key|urls). -> dict с результатом."""
    if task['kind'] == 'o_site':
        url = O_SITE_PREFIX + urllib.parse.quote(task['key'], safe='')
        try:
            page, final = fetcher.get(url, 'cp1251')
        except Exception as ex:
            return dict(status='error', detail='%s: %s' % (url, ex))
        cands = bulletin_candidates(page, final)
        if not cands:
            ndocs = len(re.findall(r'race-desc-link', page))
            return dict(status='none', detail='%s (ссылок-документов: %d)'
                        % (url, ndocs))
        group = task['group']
        if len(group) > 1 and len(cands) > 1:
            mapping, why = distribute(group, cands)
            if mapping is None:
                return dict(status='ambiguous', page=url,
                            detail='серия из %d записей: %s | %s' % (
                                len(group), why, ' | '.join(
                                    '«%s» %s' % (c[1], c[2]) for c in cands)))
            if task['id'] not in mapping:
                return dict(status='none', detail='%s (серия: для этой записи '
                            'бюллетеня нет)' % url)
            c, how = mapping[task['id']]
            return dict(status='ok', url=c[2], title=c[1], page=url, others=0,
                        note='серия, ' + how)
        return choose(cands, url)

    # orgeo: все ссылки orgeo из reg, по порядку
    cands, errors = [], []
    for u in task['urls']:
        try:
            page, final = fetcher.get(u, 'utf-8')
        except Exception as ex:
            errors.append('%s: %s' % (u, ex))
            continue
        for c in bulletin_candidates(page, final):
            if c[2] not in [x[2] for x in cands]:
                cands.append(c)
    if not cands:
        if errors:
            return dict(status='error', detail='; '.join(errors))
        return dict(status='none', detail=', '.join(task['urls']))
    r = choose(cands, ', '.join(task['urls']))
    r['warn'] = '; '.join(errors) if errors else None
    return r


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


def insertion(t, anchor, url):
    """Позиция и текст вставки строки `bulletin: '…'` после поля anchor."""
    line_start = t.rfind('\n', 0, anchor['kpos']) + 1
    indent = t[line_start:anchor['kpos']]
    if indent.strip():
        indent = re.match(r'\s*', indent).group(0)
    line = 'bulletin: ' + js_quote(url)
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


def removal(t, fields, i):
    """Участки (start, end, '') для удаления поля fields[i] из объекта."""
    f = fields[i]
    line_start = t.rfind('\n', 0, f['kpos']) + 1
    end = f['comma'] + 1 if f['comma'] is not None else f['vend']
    line_end = t.find('\n', end)
    line_end = len(t) if line_end < 0 else line_end
    rest = t[end:line_end].strip()
    alone = not t[line_start:f['kpos']].strip() and (
        not rest or rest.startswith('//'))
    out = []
    if alone:
        # вся строка вместе с её переводом строки
        out.append((line_start, min(line_end + 1, len(t)), ''))
    elif f['comma'] is not None:
        j = end
        while j < len(t) and t[j] in ' \t':
            j += 1
        out.append((f['kpos'], j, ''))
    else:
        out.append((f['kpos'], f['vend'], ''))
    if f['comma'] is None and i > 0:
        # поле было последним — снять запятую у предыдущего
        prev = fields[i - 1]
        if alone:
            out.append((prev['comma'], prev['comma'] + 1, ''))
        else:
            out[-1] = (prev['comma'], f['vend'], '')
    return out


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

def main():
    ap = argparse.ArgumentParser(
        description='Заполнить поле bulletin в calendar-*.js '
                    '(o-site.spb.ru / orgeo.ru).')
    ap.add_argument('--src', default='js',
                    help='папка с calendar-*.js или корень сайта (по умолч. js)')
    ap.add_argument('--year', type=int,
                    help='обработать только записи этого года (по полю date)')
    ap.add_argument('-n', '--dry-run', action='store_true',
                    help='ничего не записывать, только показать')
    ap.add_argument('--remove', action='store_true',
                    help='удалить поля bulletin (все или за --year), '
                         'сайты не запрашиваются')
    ap.add_argument('-v', '--verbose', action='store_true',
                    help='подробный отчёт: в т.ч. список записей без бюллетеня')
    ap.add_argument('--workers', type=int, default=4,
                    help='параллельных загрузок (по умолч. 4)')
    args = ap.parse_args()

    src = resolve_src(args.src)
    files = sorted(f for f in os.listdir(src) if FILE_RE.match(f))

    # 1. Сбор задач
    parsed = {}          # имя файла -> (text, enc, eol)
    tasks = []           # dict(file, id, kind, key|urls, anchor, group)
    groups = {}          # o_site -> все записи с ним (для серий)
    removals = []        # --remove: (file, id, участки)
    problems = []        # (file, id, сообщение) — требуют ручной проверки
    for fn in files:
        path = os.path.join(src, fn)
        text, enc, eol = read_js(path)
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
                problems.append((fn, 'позиция %d' % s, 'запись не разобрана: %s'
                                 % ex))
                continue
            by = {}
            for f in flds:
                by.setdefault(f['key'], f)
            raw = lambda k: text[by[k]['vstart']:by[k]['vend']]
            rid = single_string(raw('id')) if 'id' in by else None
            rid = rid or '(без id, позиция %d)' % s
            key = single_string(raw('o_site')) if 'o_site' in by else None
            if key:
                sget = lambda k: single_string(raw(k)) if k in by else None
                groups.setdefault(key, []).append(dict(
                    id=rid, date=sget('date'), endDate=sget('endDate'),
                    name=sget('name')))
            if args.year is not None:
                d = single_string(raw('date')) if 'date' in by else None
                if not d or not re.match(r'\d{4}', d):
                    problems.append((fn, rid, 'нет корректного date'))
                    continue
                if int(d[:4]) != args.year:
                    continue
            if args.remove:
                if 'bulletin' in by:
                    i = next(k for k, f in enumerate(flds)
                             if f['key'] == 'bulletin')
                    removals.append((fn, rid, removal(text, flds, i)))
                continue
            if 'bulletin' in by:
                continue
            if 'o_site' in by:
                if not key:
                    problems.append((fn, rid, 'o_site не является строкой: %s'
                                     % raw('o_site')))
                    continue
                tasks.append(dict(file=fn, id=rid, kind='o_site', key=key,
                                  anchor=by['o_site'], group=groups[key]))
            elif 'reg' in by:
                urls = [u for u in string_literals(raw('reg'))
                        if 'orgeo.ru' in u.lower()]
                if urls:
                    tasks.append(dict(file=fn, id=rid, kind='orgeo', urls=urls,
                                      anchor=by['reg']))

    if args.remove:
        edits = {}
        for fn, rid, cuts in removals:
            edits.setdefault(fn, []).extend(cuts)
        print('Файлов: %d, полей bulletin к удалению: %d' % (len(parsed),
                                                            len(removals)))
        for fn in sorted(edits):
            ids = [rid for f, rid, _ in removals if f == fn]
            print('  %-16s %d%s' % (fn[9:-3], len(ids),
                                    (': ' + ', '.join(ids)) if args.verbose
                                    else ''))
        if problems:
            print('\nТребуют ручной проверки: %d' % len(problems))
            for fn, rid, msg in problems:
                print('  %-16s %-22s %s' % (fn[9:-3], rid, msg))
        apply_edits(parsed, edits, src, args.dry_run)
        return

    n_os = sum(t['kind'] == 'o_site' for t in tasks)
    print('Файлов: %d, записей к обработке: %d (o_site: %d, orgeo: %d)'
          % (len(parsed), len(tasks), n_os, len(tasks) - n_os))

    # 2. Загрузка
    fetcher = Fetcher()
    done = [0]

    def work(task):
        r = find_bulletin(task, fetcher)
        done[0] += 1
        if done[0] % 50 == 0:
            print('  … %d/%d' % (done[0], len(tasks)), file=sys.stderr)
        return r

    with ThreadPoolExecutor(max(1, args.workers)) as ex:
        results = list(ex.map(work, tasks))

    # 3. Правка файлов
    edits = {}           # file -> [(pos, text)]
    found, none, errs, ambig = [], [], [], []
    for task, r in zip(tasks, results):
        if r['status'] == 'ok':
            edits.setdefault(task['file'], []).extend(
                insertion(parsed[task['file']][0], task['anchor'], r['url']))
            found.append((task, r))
            if r.get('warn'):
                problems.append((task['file'], task['id'],
                                 'часть страниц orgeo не загружена: ' + r['warn']))
        elif r['status'] == 'none':
            none.append((task, r))
        elif r['status'] == 'ambiguous':
            ambig.append((task, r))
        else:
            errs.append((task, r))

    print('\nНайдено бюллетеней: %d' % len(found))
    for task, r in found:
        more = ' (+%d др.)' % r['others'] if r['others'] else ''
        if r.get('note'):
            more += ' [%s]' % r['note']
        print('  %-16s %-22s «%s»%s\n  %38s %s'
              % (task['file'][9:-3], task['id'], r['title'], more, '', r['url']))
    if none:
        print('\nБюллетень не найден: %d%s' % (
            len(none), '' if args.verbose else ' (список — с ключом -v)'))
    if none and args.verbose:
        for task, r in none:
            print('  %-16s %-22s %s' % (task['file'][9:-3], task['id'],
                                       r['detail']))
    if ambig:
        print('\nНесколько разных бюллетеней, не заполнено (выбрать вручную): %d'
              % len(ambig))
        seen = {}        # одна серия — одним блоком
        for task, r in ambig:
            seen.setdefault((r['page'], r['detail']), []).append(task)
        for (page, detail), ts in seen.items():
            print('  %-16s %s\n      %s\n      %s' % (
                ts[0]['file'][9:-3], ', '.join(t['id'] for t in ts), page,
                detail.replace(' | ', '\n      ')))
    if errs:
        print('\nОшибки загрузки: %d' % len(errs))
        for task, r in errs:
            print('  %-16s %-22s %s' % (task['file'][9:-3], task['id'],
                                       r['detail']))
    if problems:
        print('\nТребуют ручной проверки: %d' % len(problems))
        for fn, rid, msg in problems:
            print('  %-16s %-22s %s' % (fn[9:-3], rid, msg))

    apply_edits(parsed, {fn: [(p, p, x) for p, x in ins]
                         for fn, ins in edits.items()}, src, args.dry_run)

if __name__ == '__main__':
    main()
