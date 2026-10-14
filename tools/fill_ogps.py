#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
fill_ogps.py — заполняет поле `o_gps` (ссылки на GPS-трансляции
https://o-gps-center.ru/viewer/) в записях calendar-*.js.

Значение o_gps — номер трансляции (суффикс viewer/event/<N>/) или объект
{ключ: номер}, если трансляций несколько; ключ кратко описывает трансляцию
(день, группа, день-группа: 'М', 'Ж', 'ALL', '24-М' …).

Два режима.

1. По карте соответствий (--matches FILE).
   FILE — JSON вида {"id записи": номер | {"ключ": номер, …}}. Значение
   вписывается как есть. Откуда берётся карта: её составляют вручную по
   списку трансляций o-gps-center.ru (страницы viewer/?page=N — дата,
   название, номер; на страницы самих трансляций заходить не нужно):
   трансляцию сопоставляют с записью по дате и названию/месту, отсеивая
   одноимённые старты в других регионах. Карту готовит Claude по запросу
   (сопоставление проверено вручную) или пользователь сам, например взяв за
   основу файл, записанный режимом 2 с ключом --save. В репозиторий карта не
   коммитится: после применения данные живут в самих calendar-*.js.

2. Поиск новых трансляций (без --matches).
   Скачивает список трансляций с o-gps-center.ru (только страницы списка),
   отбрасывает трансляции, уже указанные в каком-либо o_gps (в том числе
   закомментированном), и для остальных ищет записи календаря без o_gps:
   дата трансляции попадает в даты записи (±1 день — только в отчёт) и в
   названии трансляции есть значимые слова из названия или места записи.
   Слова сравниваются по основам из 6 букв без служебных слов («чемпионат»,
   «кубок», «этап», «спринт», «М21» …); вес слова — его редкость в названиях
   всех трансляций списка.
   По умолчанию только печатает отчёт. С --apply вписывает в файлы
   «уверенные» соответствия — все условия сразу:
     * дата трансляции внутри [date, endDate] записи; у «зонтика» с дочерними
       записями (кроме calendar-fsor.js) — только в дни без дочерней записи;
     * запись с наибольшим весом совпадения — именно эта, а у следующей
       записи с той же датой вес не больше половины (в сравнении участвуют и
       записи, у которых o_gps уже есть: если трансляция похожа на такую
       запись, она не уходит в соседнюю);
     * в названии трансляции не меньше двух значимых слов, совпало два слова
       или одно редкое слово с заглавной буквы, общий вес не меньше 6;
     * в названии трансляции нет слов с заглавной буквы (обычно топонимов),
       которых нет в названии/месте записи, кроме общих («Чемпионат»,
       «Кубок», «Короткая» …) и города/региона файла (Москва — в
       calendar-msk-*.js, Самара — в calendar-samara-*.js, Санкт-Петербург/
       СПб — в calendar-YYYY.js); в соседние ±1 день нет трансляции с теми же
       словами, но с другим топонимом — защита от одноимённых стартов в
       других городах («Золотая осень», «Российский азимут» …);
     * в названии трансляции нет «тренировка», «тест», «копия», «онлайн»,
       «модель»/«training»;
     * запись — не беговой/лыжный забег (type RUN, SK_RACE) и не из
       calendar-fsor.js, calendar-iof.js и calendar-irf.js: чемпионаты и кубки
       России, IOF и IRF заполняются вручную (в calendar-fsor.js o_gps ставится на
       запись-«зонтик», дочерние записи не рассматриваются вовсе).
   Остальные кандидаты — в разделе «Проверить вручную» и в файлы не пишутся.
   Правила консервативны, но это всё же сопоставление по словам: смотрите
   вывод с -n перед --apply. Проверка на прошлых ручных сопоставлениях:
   ~98% уверенных соответствий совпали с ручными.
   Чтобы поиск больше не предлагал отвергнутую трансляцию, впишите её в
   запись закомментированной строкой, например  // o_gps: 21547  —
   закомментированные номера считаются уже использованными.
   Ключи объекта при нескольких трансляциях подбираются из названий:
   день ('ДД-') у многодневных записей, затем 'М'/'Ж'/'ALL', 'Короткая'/
   'Средняя'/'Длинная', дистанция 'A'–'D' или группы ('М35/40');
   если различить нельзя — '1', '2', …

Общие правила:
  * правка на месте в каталоге --src; записи, у которых o_gps уже есть, не
    трогаются (повторный запуск ничего не меняет); файлы без изменений не
    перезаписываются;
  * кодировка (UTF-8/cp1251) и переводы строк (CRLF/LF) сохраняются
    пофайлово; поле o_gps вставляется последним полем записи;
  * перед правкой на реальных данных держите git чистым и смотрите -n.

Ключи:
  --matches FILE  режим 1: применить карту соответствий FILE.
  --apply         режим 2: вписать уверенные соответствия в файлы
                  (без него — только отчёт).
  --year YYYY     только записи этого года (по полю date); в режиме 2 ещё и
                  скачиваются только страницы списка с трансляциями этого
                  года (список идёт от новых к старым), поэтому поиск быстрее.
                  Без --year скачивается весь список (~700 страниц, несколько
                  минут).
  --save FILE     режим 2: записать уверенные соответствия в FILE в формате
                  карты (для правки и применения через --matches).
  --src DIR       каталог с calendar-*.js (по умолчанию js).
  -n, --dry-run   ничего не записывать в calendar-*.js, только показать.
  --zip FILE      упаковать изменённые файлы в архив (внутри — каталог js/);
                  при -n и при отсутствии изменений архив не создаётся.
  -h, --help      справка.

Примеры (из корня репозитория):
  python tools/fill_ogps.py --matches ogps_matches.json -n
  python tools/fill_ogps.py --matches ogps_matches.json [--zip ogps.zip]
  python tools/fill_ogps.py --year 2026                 # отчёт о новых трансляциях
  python tools/fill_ogps.py --year 2026 --apply -n      # что будет вписано
  python tools/fill_ogps.py --year 2026 --apply         # вписать уверенные
  python tools/fill_ogps.py --save new_matches.json     # все годы, карта для правки
"""
import argparse, concurrent.futures as cf, datetime as dt, html, json, math, os, re, sys, time, urllib.request, zipfile
from collections import Counter, defaultdict

VIEWER = 'https://o-gps-center.ru/viewer/'

# ---------------------------------------------------------------- файлы календаря

def read(path):
    raw = open(path, 'rb').read()
    for enc in ('utf-8', 'cp1251'):
        try:
            return raw.decode(enc), enc
        except UnicodeDecodeError:
            pass
    raise SystemExit(f'не удалось декодировать {path}')

def scan(s):
    """(objs, code): objs — (start, end) объектов-записей (прямых детей массива),
    code[i] — 1, если символ s[i] не внутри комментария."""
    objs, stack = [], []
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

FIELD = re.compile(r"""\b(id|date|endDate|name|place|parent|type)\s*:\s*(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"|\[([^\]]*)\])""")
ITEMSTR = re.compile(r"""'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)\"""")
unesc = lambda v: re.sub(r'\\(.)', r'\1', v)

def top_fields(s, code, a, b):
    """Поля записи верхнего уровня (вне комментариев и вложенных объектов/массивов)."""
    live = ''.join(ch if k else ' ' for ch, k in zip(s[a + 1:b], code[a + 1:b]))
    depth, lvl, i, n = [0] * len(live), 0, 0, len(live)
    while i < n:
        c = live[i]
        depth[i] = lvl
        if c in '\'"`':
            j = i + 1
            while j < n and live[j] != c:
                j += 2 if live[j] == '\\' else 1
            for k in range(i, min(j + 1, n)):
                depth[k] = lvl
            i = j + 1; continue
        if c in '{[':
            lvl += 1
        elif c in '}]':
            lvl -= 1
        i += 1
    out = {}
    for m in FIELD.finditer(live):
        k = m.group(1)
        if depth[m.start()] != 0 or k in out:
            continue
        if m.group(2) is not None or m.group(3) is not None:
            out[k] = unesc(m.group(2) if m.group(2) is not None else m.group(3))
        else:
            out[k] = [unesc(a or b) for a, b in ITEMSTR.findall(m.group(4) or '')]
    return out

def ogps_ids(body):
    """Номера трансляций в o_gps записи (включая закомментированные)."""
    ids = []
    for m in re.finditer(r'\bo_gps\s*:\s*', body):
        rest = body[m.end():]
        if rest.startswith('{'):
            rest = rest[:rest.find('}') + 1]
            rest = re.sub(r"""(['"])[^'"]*\1\s*:""", ' ', rest)
        else:
            m2 = re.match(r"""['"]?\d+""", rest)
            rest = m2.group(0) if m2 else ''
        ids += [int(x) for x in re.findall(r'\d+', rest)]
    return ids

def calendar_files(src):
    return [os.path.join(src, f) for f in sorted(os.listdir(src))
            if re.fullmatch(r'calendar-.*\.js', f)]

def load_records(src):
    """Записи всех calendar-*.js: список dict(id, date, endDate, name, place, parent, type, file, has_gps)
    и множество уже использованных номеров трансляций."""
    recs, used = [], set()
    for path in calendar_files(src):
        s, _ = read(path)
        objs, code = scan(s)
        for a, b in objs:
            f = top_fields(s, code, a, b)
            if 'id' not in f or 'date' not in f:
                continue
            body = s[a:b + 1]
            ids = ogps_ids(body)
            used.update(ids)
            live = ''.join(ch for ch, k in zip(body, code[a:b + 1]) if k)
            f['has_gps'] = bool(re.search(r'\bo_gps\s*:', live))
            f['file'] = os.path.basename(path)
            recs.append(f)
    return recs, used

# ---------------------------------------------------------------- запись в файлы

def fmt_value(v, ind, nl):
    if isinstance(v, int):
        return str(v)
    lines = [f"{ind}    '{k}': {x}" for k, x in v.items()]
    return '{' + nl + (',' + nl).join(lines) + nl + ind + '}'

def process(path, mapping, done, year=None):
    s, enc = read(path)
    nl = '\r\n' if '\r\n' in s else '\n'
    objs, code = scan(s)
    edits = []
    for a, b in objs:
        body = s[a:b + 1]
        m = re.search(r"""\bid\s*:\s*['"]([^'"]+)['"]""", body)
        if not m or m.group(1) not in mapping:
            continue
        rid = m.group(1)
        if year:
            d = re.search(r"""\bdate\s*:\s*['"](\d{4})""", body)
            if not d or d.group(1) != year:
                continue
        if rid in done:
            print(f'  ! {rid}: запись встречается повторно ({os.path.basename(path)}), пропуск'); continue
        done.add(rid)
        if re.search(r'\bo_gps\s*:', ''.join(ch for ch, k in zip(body, code[a:b + 1]) if k)):
            print(f'  = {rid}: o_gps уже есть'); continue
        ls = s.rfind('\n', 0, a + m.start()) + 1
        ind = re.match(r'[ \t]*', s[ls:]).group(0)
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

def apply_mapping(src, mapping, dry, zip_path, year=None):
    done, changed = set(), []
    for path in calendar_files(src):
        r = process(path, mapping, done, year)
        if r:
            print(f'    ↑ {os.path.basename(path)}')
            changed.append(path)
            if not dry:
                open(path, 'wb').write(r[0].encode(r[1]))
    missing = sorted(set(mapping) - done)
    if missing and not year:
        print('Не найдены записи:', ', '.join(missing))
    print(f'Изменено файлов: {len(changed)}' + (' (dry-run)' if dry else ''))
    if zip_path and changed and not dry:
        with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as z:
            for p in changed:
                z.write(p, os.path.join('js', os.path.basename(p)))
        print('Архив:', zip_path)

# ---------------------------------------------------------------- список трансляций

ITEM = re.compile(r'<a href="//viewer\.o-gps-center\.ru/viewer/event/(\d+)/">(.*?)</a>\s*</h2>\s*'
                  r'<div class="complementaries_informations">\s*(\d{4}-\d\d-\d\d)', re.S)

def get_page(p):
    for attempt in range(4):
        try:
            req = urllib.request.Request(f'{VIEWER}?page={p}', headers={'User-Agent': 'Mozilla/5.0 (o-maps fill_ogps)'})
            return urllib.request.urlopen(req, timeout=40).read().decode('utf-8', 'replace')
        except Exception as e:
            err = e
            time.sleep(2 + 3 * attempt)
    raise SystemExit(f'не удалось скачать страницу {p}: {err}')

def parse_page(s):
    items = [dict(id=int(i), name=html.unescape(re.sub(r'\s+', ' ', t)).strip(), date=d) for i, t, d in ITEM.findall(s)]
    if s.count('box_article') != len(items):
        print(f'  ! на странице разобрано {len(items)} из {s.count("box_article")} трансляций', file=sys.stderr)
    return items

def fetch_broadcasts(year=None, threads=6):
    """Трансляции со страниц списка. Список отсортирован от новых к старым; с year
    скачиваются страницы, пока на очередной порции не останется трансляций года year и новее."""
    first = get_page(1)
    last = max([int(x) for x in re.findall(r'\?page=(\d+)', first)] or [1])
    items = parse_page(first)
    lo = f'{year}-01-01' if year else None
    p = 2
    with cf.ThreadPoolExecutor(threads) as ex:
        while p <= last:
            batch = list(range(p, min(last, p + threads - 1) + 1))
            pages = list(ex.map(get_page, batch))
            got = [x for s in pages for x in parse_page(s)]
            items += got
            p = batch[-1] + 1
            print(f'\r  страниц: {p - 1}/{last}', end='', file=sys.stderr)
            if lo and got and max(x['date'] for x in got) < lo:
                break
    print(file=sys.stderr)
    if year:
        items = [x for x in items if x['date'][:4] == year]
    return {x['id']: x for x in items}

# ---------------------------------------------------------------- сопоставление

STOP = set('''и в на с по от до для из за к о об у м ж мэ жэ день дня этап этапа этапы тур все кп вся общая общий старт
 мужчины женщины дистанция дист группа группы пароль любой пф open опен фитнес фит финал пролог тренировка трен а в с d b c
 соревнования соревнование первенство чемпионат кубок года год г км ч часов часа ii iii iv i кросс классика спринт лонг
 средняя маркир эстафета рогейн ориентированию ориентирование спортивному спортивное мероприятие физкультурное
 контрольный лес длинная короткая новая старая новый лг лыжная гонка обл область области край края республика
 республики россии рф всероссийские официальная official чип спб ло мо'''.split())
# слова с заглавной буквы, которые не мешают «уверенному» соответствию, даже если их нет в записи
GENERIC = set('''чемпионат первенство кубок мемориал соревнования соревнование этап день мужчины женщины все общая финал
 пролог фитнес чип вс open опен спб санкт петербург петербурга ленинградской области ло россии россия всероссийские
 официальная official трансляция пароль дистанция группа старт эстафета спринт лонг классика маркир средняя
 рогейн трейл открытие закрытие сезона короткая длинная средняя сводная карта круг ночная ночное'''.split())
GENERIC6 = {g[:6] for g in GENERIC}
NOAUTO_NAME = re.compile(r'тренир|\bтрен\b|тест|копия|онлайн|on-?line|модел|model|training', re.I)
NOAUTO_TYPES = {'RUN', 'SK_RACE'}
NOAUTO_FILES = {'calendar-fsor.js', 'calendar-iof.js', 'calendar-irf.js'}   # чемпионаты/кубки России, IOF и IRF заполняются вручную
# город/регион, подразумеваемый файлом календаря (не считается «чужим» топонимом в названии трансляции)
FILE_REGION = [(r'calendar-msk', 'Москва Московский Московская Москвы'), (r'calendar-samara', 'Самара Самарский Самарская Самары'),
               (r'calendar-(\d{4}|early|common)', 'Санкт-Петербург Петербург СПб Ленинградская')]

def norm(s):
    return re.sub(r'[^a-zа-я0-9]+', ' ', s.lower().replace('ё', 'е'))

def toks(s):
    out = set()
    for t in norm(s).split():
        if t in STOP or t.isdigit() or len(t) < 2 or re.fullmatch(r'[мжmw]\d+[а-яa-z]*', t):
            continue
        out.add(t[:6])
    return out

def proper_words(name):
    """Значимые слова с заглавной буквы (обычно топонимы и названия) — в виде основ, как в toks()."""
    words = re.findall(r'[A-ZА-ЯЁ][A-Za-zА-Яа-яЁё]{2,}', name)
    return {t for t in toks(' '.join(words)) if t not in GENERIC6}

def D(s):
    return dt.date.fromisoformat(s)

GROUP = re.compile(r'(?<![А-ЯЁA-Za-zа-яё])([МЖMW])\s?-?(\d{2})([А-ЯЁA-Z]{0,2})(?![\d])')

def make_key(name, day):
    n = name.replace('ё', 'е')
    low = n.lower()
    dist = re.search(r'\b(короткая|средняя|длинная)\b', low)
    letter = re.search(r'(?:дистанция|дист\.?|группа)\s*["«]?([A-DА-Г])\b', n, re.I)
    if re.search(r'вс[еe] кп|общая|сводная|\ball\b', low):
        g = 'ALL'
    elif dist:
        g = dist.group(1).capitalize()
    elif letter:
        g = letter.group(1).upper().translate(str.maketrans('АВСДБГ', 'ABCDBG'))
    elif re.search(r'мужчин|\bмэ\b|\bmen\b|\(м\)|\bм$', low):
        g = 'М'
    elif re.search(r'женщин|\bжэ\b|\bwomen\b|\(ж\)|\bж$', low):
        g = 'Ж'
    else:
        gs = GROUP.findall(n)
        if gs:
            sex = {'M': 'М', 'W': 'Ж'}.get(gs[0][0], gs[0][0])
            same = all(({'M': 'М', 'W': 'Ж'}.get(x[0], x[0])) == sex for x in gs)
            g = sex + '/'.join(x[1] + x[2] for x in gs) if same else '/'.join(
                {'M': 'М', 'W': 'Ж'}.get(x[0], x[0]) + x[1] + x[2] for x in gs)
        else:
            g = ''
    return (day + ('-' if g else '') + g) if day else g

def build_value(rec, evs):
    if len(evs) == 1:
        return evs[0]['id']
    multi = len({e['date'] for e in evs}) > 1 or rec.get('endDate', rec['date']) != rec['date']
    keys, out = Counter(), {}
    raw = [(make_key(e['name'], e['date'][8:] if multi else ''), e) for e in sorted(evs, key=lambda e: (e['date'], e['id']))]
    cnt = Counter(k for k, _ in raw)
    for k, e in raw:
        if not k or cnt[k] > 1:
            keys[k] += 1
            k = (k + '-' if k else '') + str(keys[k])
        out[k] = e['id']
    return out

def discover(recs, used, all_broadcasts, broadcasts, year=None):
    """Кандидаты для трансляций broadcasts (all_broadcasts — весь скачанный список, для весов слов
    и проверки неоднозначности). Возвращает (sure, check, byid)."""
    byid = {r['id']: r for r in recs}
    df = Counter()
    for e in all_broadcasts.values():
        df.update(toks(e['name']))
    n = max(len(all_broadcasts), 1)
    W = lambda t: math.log(n / (1 + df[t])) if df[t] else math.log(n)
    kid_days = defaultdict(set)              # даты дочерних записей у «зонтиков» (кроме calendar-fsor.js)
    for r in recs:
        if r.get('parent') and r['file'] != 'calendar-fsor.js':
            kid_days[r['parent']].add(r['date'])

    cands = []
    for r in recs:
        par = byid.get(r.get('parent')) if r.get('parent') else None
        if par and r['file'] == 'calendar-fsor.js':
            continue                         # в calendar-fsor.js o_gps — у записи-«зонтика»
        place = r.get('place', '') + ' ' + (par.get('place', '') if par else '')
        rt = toks(r.get('name', '') + ' ' + place)
        reg = toks(' '.join(w for f, w in FILE_REGION if re.match(f, r['file'])))
        try:
            d0 = D(r['date'])
            d1 = max(d0, D(r.get('endDate') or r['date']))
        except ValueError:
            continue
        types = r.get('type') or []
        types = set([types] if isinstance(types, str) else types)
        target = not r['has_gps'] and not (year and r['date'][:4] != year)
        cands.append((r, d0, d1, rt, types, target, reg))
    bydate = defaultdict(list)
    for c in cands:
        d = c[1] - dt.timedelta(days=1)
        while d <= c[2] + dt.timedelta(days=1):
            if d.isoformat() not in kid_days.get(c[0]['id'], ()):
                bydate[d].append(c)
            d += dt.timedelta(days=1)
    near = defaultdict(list)                 # трансляции по датам — для проверки неоднозначности
    for e in all_broadcasts.values():
        near[e['date']].append(e)

    sure, check = defaultdict(list), defaultdict(list)
    for e in sorted(broadcasts.values(), key=lambda e: e['id']):
        if e['id'] in used:
            continue
        d = D(e['date'])
        et, pw = toks(e['name']), proper_words(e['name'])
        hits = []
        for r, d0, d1, rt, types, target, reg in bydate.get(d, []):
            common = et & rt
            if common:
                hits.append((sum(W(t) for t in common), r, d0 <= d <= d1, common, types, rt | reg, target))
        if not hits:
            continue
        hits.sort(key=lambda h: -h[0])
        inside = [h for h in hits if h[2]]
        best = inside[0] if inside else None
        ok = False
        if best and best[6] and best[0] >= hits[0][0] and best[1]['file'] not in NOAUTO_FILES:
            score, r, _, common, types, known, _ = best
            strong = len(common) >= 2 or any(t in pw and W(t) >= 6 for t in common)
            ambiguous = False
            for k in (-1, 0, 1):              # тот же старт в тот же день в другом месте?
                for o in near.get((d + dt.timedelta(days=k)).isoformat(), ()):
                    if o['id'] != e['id'] and common <= toks(o['name']) and proper_words(o['name']) - known:
                        ambiguous = True
            ok = ((len(inside) == 1 or inside[1][0] <= score / 2)
                  and score >= 6 and strong and len(et) >= 2 and not ambiguous
                  and not (pw - known)
                  and not NOAUTO_NAME.search(e['name'])
                  and not (types & NOAUTO_TYPES))
        if ok:
            sure[best[1]['id']].append(e)
            continue
        for h in hits:                       # в отчёт: записи без o_gps; ±1 день — только при весе ≥ 6
            if not h[6] or (h[4] & NOAUTO_TYPES) or (not h[2] and h[0] < 6):
                continue
            check[h[1]['id']].append((e, h[2], h[0], sorted(h[3])))
    return sure, check, byid

def report(sure, check, byid):
    def head(rid):
        r = byid[rid]
        return f"{rid} {r['date']}{'..' + r['endDate'] if r.get('endDate') and r['endDate'] != r['date'] else ''} — {r.get('name', '')} | {r.get('place', '')} [{r['file']}]"
    print(f'\n== Уверенные соответствия ({len(sure)} записей) ==')
    for rid in sorted(sure, key=lambda i: (byid[i]['date'], i)):
        print(head(rid))
        for e in sure[rid]:
            print(f"    {e['id']:6} {e['date']}  {e['name']}")
    print(f'\n== Проверить вручную ({len(check)} записей) ==')
    for rid in sorted(check, key=lambda i: (byid[i]['date'], i)):
        print(head(rid))
        for e, ins, sc, common in sorted(check[rid], key=lambda x: x[0]['id']):
            print(f"    {e['id']:6} {e['date']}{'' if ins else ' [±1 день]'}  {e['name']}   ~{','.join(common)} ({sc:.1f})")

# ---------------------------------------------------------------- main

def main():
    ap = argparse.ArgumentParser(description='Заполнение o_gps в calendar-*.js (подробности — в шапке файла).')
    ap.add_argument('--matches', help='JSON-карта {id записи: o_gps}; без него — поиск новых трансляций на o-gps-center.ru')
    ap.add_argument('--apply', action='store_true', help='режим поиска: вписать уверенные соответствия')
    ap.add_argument('--year', help='только записи этого года (YYYY)')
    ap.add_argument('--save', help='режим поиска: записать уверенные соответствия в JSON-карту')
    ap.add_argument('--src', default='js', help='каталог с calendar-*.js (по умолчанию js)')
    ap.add_argument('-n', '--dry-run', action='store_true', help='ничего не менять в файлах')
    ap.add_argument('--zip', help='упаковать изменённые файлы в архив')
    a = ap.parse_args()
    if a.year and not re.fullmatch(r'\d{4}', a.year):
        ap.error('--year: ожидается год вида 2026')

    if a.matches:
        if a.apply or a.save:
            ap.error('--apply и --save относятся к режиму поиска (без --matches)')
        mapping = json.load(open(a.matches, encoding='utf-8'))
        apply_mapping(a.src, mapping, a.dry_run, a.zip, a.year)
        return

    recs, used = load_records(a.src)
    print(f'Записей: {len(recs)}, без o_gps: {sum(not r["has_gps"] for r in recs)}, '
          f'трансляций уже в o_gps: {len(used)}', file=sys.stderr)
    broadcasts = fetch_broadcasts(a.year)
    print(f'Трансляций в списке{" за " + a.year if a.year else ""}: {len(broadcasts)}', file=sys.stderr)
    sure, check, byid = discover(recs, used, broadcasts, broadcasts, a.year)
    report(sure, check, byid)
    mapping = {rid: build_value(byid[rid], evs) for rid, evs in sure.items()}
    if a.save:
        json.dump(mapping, open(a.save, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
        print(f'\nКарта уверенных соответствий: {a.save}')
    if a.apply and mapping:
        print()
        apply_mapping(a.src, mapping, a.dry_run, a.zip)

if __name__ == '__main__':
    main()
