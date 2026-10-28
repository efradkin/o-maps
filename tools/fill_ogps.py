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
       calendar-msk-*.js, Самара — в calendar-samara.js, Санкт-Петербург/
       СПб — в calendar-YYYY.js); в соседние ±1 день нет трансляции с теми же
       словами, но с другим топонимом — защита от одноимённых стартов в
       других городах («Золотая осень», «Российский азимут» …);
     * в названии трансляции нет «тренировка» («трен», «тр»), «тест»,
       «копия», «онлайн», «модель»/«training»;
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

   Старты СПб и ЛО, которых нет в календаре. В конце отчёта — раздел
   «Возможно, старты СПб и ЛО, которых нет в календаре»: трансляции, для
   которых не нашлось ни одной записи календаря СПб (дата ±1 день и общие
   значимые слова), но название которых указывает на Петербург или область:
     * в названии есть «СПб», «ЛО», «Петербург», «Ленинград…», «Ленобл»;
     * или слово с заглавной буквы (обычно топоним: Токсово, Орехово,
       Щучье …), которое есть и в месте записей календаря СПб, и в названиях
       трансляций, уже вписанных в o_gps записей СПб, но нет ни в записях
       других регионов, ни в названиях их трансляций; составной топоним
       («Спас-Каменка») сравнивается целиком. При этом в названии нет слов,
       известных только по записям и трансляциям других регионов (в том
       числе частей составных слов: «Рязань-Трофи»). Названия спортшкол и
       организаций (СШОР, ДЮСШ, УТС, ФСО …) и видов (МТБО) местом не считаются,
       как и слова из списка исключений NOT_SPB в начале скрипта (Коломна,
       Чудово, Мир, Мечта …) — его пополняют по ложным срабатываниям.
   Записи календаря СПб: calendar-YYYY.js, calendar-early.js,
   calendar-other-YYYY.js, calendar-ski-YYYY.js без поля region и записи
   любых файлов с region: 'SPB' (у дочерней записи — region родителя).
   Тренировки, тесты и копии (см. ниже) и спортивная радиопеленгация
   («Охота на лис», частоты в МГц) в раздел не попадают. По каждому
   дню указано, какие записи СПб в календаре на эту дату есть: если есть,
   трансляция, возможно, относится к одной из них, а названия просто не
   совпали. Это подсказка для ручной проверки, в файлы ничего не пишется.

   Кэш списка трансляций. Вес слова считается по всему списку трансляций,
   а на одной-двух страницах (--fresh) он неточен. Поэтому скачанный список
   сохраняется в файл (по умолчанию fill_ogps_cache.json рядом со скриптом;
   его стоит добавить в .gitignore): полный проход без --year и --fresh
   заменяет кэш целиком, частичный — дополняет. Веса слов и проверка
   одноимённых стартов в соседние дни берутся по кэшу вместе со скачанным.
   Если полного прохода ещё не было, скрипт об этом предупреждает.

Общие правила:
  * правка на месте в каталоге --src; записи, у которых o_gps уже есть, не
    трогаются (повторный запуск ничего не меняет); файлы без изменений не
    перезаписываются;
  * запись со строкой-комментарием «// ! o_gps» (или «// ! *») не получает
    o_gps ни в одном режиме — как в sync_calendar.py;
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
                  Без --year и --fresh скачивается весь список (~700 страниц,
                  несколько минут).
  --fresh [N]     режим 2: только трансляции за последние N дней (по
                  умолчанию 7; дата трансляции не раньше сегодня минус N,
                  будущие тоже входят) — скачиваются лишь первые страницы
                  списка, обычно одна-две. Записи календаря — любых лет.
                  Вместе с --year — пересечение обоих условий.
  --save FILE     режим 2: записать уверенные соответствия в FILE в формате
                  карты (для правки и применения через --matches).
  --cache FILE    режим 2: файл кэша списка трансляций (по умолчанию
                  fill_ogps_cache.json рядом со скриптом).
  --no-cache      режим 2: не читать и не записывать кэш.
  --src DIR       каталог с calendar-*.js (по умолчанию js).
  -n, --dry-run   ничего не записывать в calendar-*.js, только показать.
  --zip FILE      упаковать изменённые файлы в архив (внутри — каталог js/);
                  при -n и при отсутствии изменений архив не создаётся.
  --out [FILE]    дублировать отчёт (всё, что выводится в консоль, кроме строки
                  прогресса и служебных сообщений) в файл FILE, UTF-8; без
                  имени — fill_ogps_out.txt в текущем каталоге. Файл
                  перезаписывается. Работает в обоих режимах.
  -h, --help      справка.

Пока скачивается список трансляций, в консоли одной строкой показывается
прогресс (как в check_upload.py):
  [██████████░░░░░░░░░░░░░░░░░░░░] 240/700  34%  трансляций: 4810  прошло 40 с, осталось ~1 мин 17 с
С --year и --fresh число страниц заранее неизвестно, и прогресс считается
в днях: сколько дней от самой новой трансляции до границы уже пройдено.
Строки прогресса нет, если вывод перенаправлен в файл.

Примеры (из корня репозитория):
  python tools/fill_ogps.py --matches ogps_matches.json -n
  python tools/fill_ogps.py --matches ogps_matches.json [--zip ogps.zip]
  python tools/fill_ogps.py --year 2026                 # отчёт о новых трансляциях
  python tools/fill_ogps.py --year 2026 --apply -n      # что будет вписано
  python tools/fill_ogps.py --year 2026 --apply         # вписать уверенные
  python tools/fill_ogps.py --save new_matches.json     # все годы, карта для правки
  python tools/fill_ogps.py --fresh                     # трансляции последней недели
  python tools/fill_ogps.py --fresh 3 --apply           # за 3 дня, вписать уверенные
  python tools/fill_ogps.py --year 2026 --out           # отчёт и в консоль, и в fill_ogps_out.txt
"""
import argparse, concurrent.futures as cf, datetime as dt, html, json, math, os, re, shutil, subprocess, sys, time, urllib.request, zipfile
from collections import Counter, defaultdict

VIEWER = 'https://o-gps-center.ru/viewer/'
CACHE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'fill_ogps_cache.json')
BAR_WIDTH = 30

# ---------------------------------------------------------------- прогресс (как в check_upload.py)

def duration(seconds):
    """«14 с», «2 мин 05 с», «1 ч 03 мин»."""
    s = int(round(seconds))
    if s < 60:
        return f'{s} с'
    if s < 3600:
        return f'{s // 60} мин {s % 60:02d} с'
    return f'{s // 3600} ч {s % 3600 // 60:02d} мин'

class Progress:
    """Прогресс-бар в одной строке stderr; выключен, если stderr — не консоль."""

    def __init__(self, total, fmt=None):
        self.total, self.started, self.shown, self.width = max(total, 1), time.time(), 0.0, 0
        self.fmt = fmt or (lambda done, total: f'{done:>{len(str(total))}}/{total}')
        self.on, self.finished = sys.stderr.isatty(), False

    def update(self, done, note=''):
        done = min(done, self.total)
        now = time.time()
        if not self.on or self.finished or (done < self.total and now - self.shown < 0.1):
            return
        self.shown = now
        frac = done / self.total
        full = int(frac * BAR_WIDTH)
        elapsed = now - self.started
        line = (f'[{"█" * full}{"░" * (BAR_WIDTH - full)}] {self.fmt(done, self.total)}'
                f' {frac:4.0%}  {note}{"  " if note else ""}прошло {duration(elapsed)}')
        if 0 < done < self.total:
            line += f', осталось ~{duration(elapsed / done * (self.total - done))}'
        line = line[:shutil.get_terminal_size().columns - 1]   # длиннее окна — строка перенесётся и \r не сработает
        pad = max(0, self.width - len(line))                    # стереть хвост более длинной прежней строки
        self.width = len(line)
        sys.stderr.write('\r' + line + ' ' * pad)
        if done == self.total:
            sys.stderr.write('\n')
            self.finished = True
        sys.stderr.flush()

class Tee:
    """stdout, который пишет и в консоль, и в файл (для --out)."""

    def __init__(self, stream, path):
        self.stream, self.file = stream, open(path, 'w', encoding='utf-8', newline='\n')

    def write(self, s):
        self.stream.write(s)
        self.file.write(s)

    def flush(self):
        self.stream.flush()
        self.file.flush()

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

FIELD = re.compile(r"""\b(id|date|endDate|name|place|parent|type|region)\s*:\s*(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"|\[([^\]]*)\])""")
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

def locked(body):
    """o_gps зафиксировано строкой-комментарием «// ! o_gps» (или «// ! *») в записи — как в sync_calendar.py."""
    names = {x for m in re.finditer(r'^[ \t]*//[ \t]*!(.*)$', body, re.M) for x in re.split(r'[\s,;]+', m.group(1)) if x}
    return 'o_gps' in names or '*' in names


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
        used.update(ogps_ids(s))            # и номера в закомментированных записях между записями
        for a, b in objs:
            f = top_fields(s, code, a, b)
            if 'id' not in f or 'date' not in f:
                continue
            body = s[a:b + 1]
            ids = ogps_ids(body)
            used.update(ids)
            live = ''.join(ch for ch, k in zip(body, code[a:b + 1]) if k)
            f['has_gps'] = bool(re.search(r'\bo_gps\s*:', live)) or locked(body)
            f['gps'] = ogps_ids(live)        # трансляции записи (без закомментированных)
            f['file'] = os.path.basename(path)
            recs.append(f)
    byid = {r['id']: r for r in recs}
    for r in recs:                           # запись календаря СПб: region родителя, своё region, файл
        par = byid.get(r.get('parent')) if r.get('parent') else None
        reg = r.get('region') or (par.get('region') if par else None)
        r['spb'] = reg == 'SPB' if reg else bool(SPB_FILES.fullmatch(r['file']))
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
        if locked(body):
            print(f'  = {rid}: o_gps зафиксировано в lock'); continue
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

def fetch_broadcasts(lo=None, threads=6):
    """Трансляции со страниц списка: ({id: трансляция}, весь ли список скачан).
    Список отсортирован от новых к старым; с lo ('ГГГГ-ММ-ДД') скачиваются страницы,
    пока на очередной порции не останутся только трансляции старше lo."""
    first = get_page(1)
    last = max([int(x) for x in re.findall(r'\?page=(\d+)', first)] or [1])
    items = parse_page(first)
    if lo:                                   # прогресс в днях: от самой новой трансляции до lo
        newest = D(max([x['date'] for x in items] or [lo]))
        progress = Progress((newest - D(lo)).days, fmt=lambda d, t: f'{d}/{t} дн.')
        left = lambda: (newest - D(min(x['date'] for x in items))).days if items else 0
    else:
        progress = Progress(last)
        left = lambda: p - 1
    p = 2
    progress.update(left(), f'страниц: 1, трансляций: {len(items)}')
    complete = True
    with cf.ThreadPoolExecutor(threads) as ex:
        while p <= last:
            batch = list(range(p, min(last, p + threads - 1) + 1))
            pages = list(ex.map(get_page, batch))
            got = [x for s in pages for x in parse_page(s)]
            items += got
            p = batch[-1] + 1
            progress.update(left(), f'страниц: {p - 1}, трансляций: {len(items)}')
            if lo and got and max(x['date'] for x in got) < lo:
                complete = p > last
                break
    progress.update(progress.total, f'страниц: {p - 1}, трансляций: {len(items)}')
    return {x['id']: x for x in items}, complete

def load_cache(path):
    """(дата последнего полного прохода или None, {id: трансляция}) из файла кэша."""
    try:
        d = json.load(open(path, encoding='utf-8'))
        return d.get('full'), {int(k): dict(id=int(k), date=v[0], name=v[1]) for k, v in d['items'].items()}
    except FileNotFoundError:
        return None, {}
    except (ValueError, KeyError, TypeError, IndexError, AttributeError) as e:
        print(f'  ! кэш {path} не прочитан ({e}), будет записан заново', file=sys.stderr)
        return None, {}

def save_cache(path, full, items):
    """Кэш: по трансляции в строке, от новых к старым."""
    rows = [f'  {json.dumps(str(i))}: {json.dumps([x["date"], x["name"]], ensure_ascii=False)}'
            for i, x in sorted(items.items(), reverse=True)]
    text = '{\n "full": ' + json.dumps(full) + ',\n "items": {\n' + ',\n'.join(rows) + '\n }\n}\n'
    tmp = path + '.tmp'
    open(tmp, 'w', encoding='utf-8', newline='\n').write(text)
    os.replace(tmp, path)

def warn_if_not_ignored(path):
    """Напоминание, если git не игнорирует файл кэша (он не нужен в репозитории и на сайте)."""
    try:
        r = subprocess.run(['git', 'check-ignore', '-q', path], capture_output=True)
    except OSError:
        return                                          # git не установлен
    if r.returncode == 1:
        print(f'  ! {os.path.relpath(path)} не в .gitignore — кэш не нужен в репозитории', file=sys.stderr)

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
NOAUTO_NAME = re.compile(r'тренир|\bтрен\b|\bтр\b|тест|копия|онлайн|on-?line|модел|model|training', re.I)
NOAUTO_TYPES = {'RUN', 'SK_RACE'}
NOAUTO_FILES = {'calendar-fsor.js', 'calendar-iof.js', 'calendar-irf.js'}   # чемпионаты/кубки России, IOF и IRF заполняются вручную
# город/регион, подразумеваемый файлом календаря (не считается «чужим» топонимом в названии трансляции)
FILE_REGION = [(r'calendar-msk', 'Москва Московский Московская Москвы'), (r'calendar-samara', 'Самара Самарский Самарская Самары'),
               (r'calendar-(\d{4}|early|common)', 'Санкт-Петербург Петербург СПб Ленинградская')]
# файлы календаря СПб: их записи без поля region — петербургские
SPB_FILES = re.compile(r'calendar-(\d{4}|early|other-\d{4}|ski-\d{4})\.js')
# указание на Петербург или область в названии трансляции
SPB_MARK = re.compile(r'(?<!\w)(?:СПб|СПБ|Спб|спб|С-Пб|ЛО|ЛенОбл)(?!\w)|[Пп]етербург|[Лл]енинград|[Лл]енобл')
CAPWORD = re.compile(r'[A-ZА-ЯЁ][A-Za-zА-Яа-яЁё]{2,}')
# не места: спортшколы, организации, виды — такие слова есть в любом регионе
NOT_PLACE = {t[:6] for t in '''сшор сдюсшор дюсш сдюшор сш цдют ддют гбоу гбу гбоудо маудо мбудо мбоудо дод
 утс фсо федерация мтбо mtbo трейл trail'''.split()}
# не считаются топонимами СПб, хотя по данным календаря выглядят так: места с тем же названием
# в других регионах, места не в СПб и ЛО, обычные слова и фамилии из названий мест;
# пополнять по ложным срабатываниям в разделе «Возможно, старты СПб и ЛО…»
NOT_SPB = '''Коломна Ильинский Чудово
 Мир Мечта Новое Тихое Горка Холм Голубая Малиновая Осиновая Болотная Яркий Ласковый Прибой Детский
 Аврора Возрождение Пролетарский
 Алексеева Егоровой Сахарова Карпинского Жени'''.split()
# не старты календаря: спортивная радиопеленгация («Охота на лис», частоты)
NOT_CALENDAR = re.compile(r'охот\w* на лис|радиопеленг|\d\s*мгц', re.I)
# слово с заглавной буквы или составной топоним через дефис («Спас-Каменка», «Усть-Луга»)
CAPTERM = re.compile(r'[A-ZА-ЯЁ][A-Za-zА-Яа-яЁё]*(?:-[A-Za-zА-Яа-яЁё]+)+|[A-ZА-ЯЁ][A-Za-zА-Яа-яЁё]{2,}')

def cap_terms(s, parts=False):
    """{основа: слово} для слов с заглавной буквы: основа — как в proper_words(),
    у составного топонима — он весь («спас-каменка»), чтобы «Каменка» не совпала со «Спас-Каменкой»;
    с parts — ещё и основы частей составного слова («рязань-трофи» -> и «рязань»)."""
    out = {}
    for w in CAPTERM.findall(s):
        if '-' in w:
            out.setdefault(w.lower().replace('ё', 'е'), w)
        if '-' not in w or parts:
            for t in toks(w):
                if t not in GENERIC6 and t not in NOT_PLACE:
                    out.setdefault(t, w)
    return out

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
    words = CAPWORD.findall(name)
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
    и проверки неоднозначности). Возвращает (sure, check, byid, nospb); nospb — трансляции,
    для которых не нашлось ни одной записи календаря СПб (дата ±1 день, общие слова)."""
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

    sure, check, nospb = defaultdict(list), defaultdict(list), []
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
        if not any(h[1]['spb'] for h in hits):
            nospb.append(e)
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
            if nospb and nospb[-1] is e:
                nospb.pop()                  # уверенно сопоставлена с записью другого региона
            continue
        for h in hits:                       # в отчёт: записи без o_gps; ±1 день — только при весе ≥ 6
            if not h[6] or (h[4] & NOAUTO_TYPES) or (not h[2] and h[0] < 6):
                continue
            check[h[1]['id']].append((e, h[2], h[0], sorted(h[3])))
    return sure, check, byid, nospb

def spb_missing(nospb, recs, pool):
    """Из трансляций без записи СПб — те, что похожи на старты СПб и ЛО.
    pool — все известные трансляции (для слов в названиях уже вписанных в o_gps трансляций).
    Возвращает [(трансляция, причина)] и {дата: [записи СПб на эту дату]}."""
    # слова записей календаря (место и название) и трансляций, уже вписанных в o_gps:
    # составные слова целиком — для слов СПб, с частями — для слов других регионов
    spb_place, spb_bc, other = set(), set(), set()
    spb_all, other_all = set(), set()
    for r in recs:
        texts = [r.get('place', ''), r.get('name', '')] + [pool[i]['name'] for i in r['gps'] if i in pool]
        whole = [set(cap_terms(t)) for t in texts]
        if r['spb']:
            spb_place |= whole[0]
            spb_bc |= set().union(*whole[2:])
            spb_all |= set().union(*(cap_terms(t, True) for t in texts))
        else:
            other |= set().union(*whole)
            other_all |= set().union(*(cap_terms(t, True) for t in texts))
    # слово СПб: есть в месте записей СПб и в названиях их трансляций, нет у записей
    # и трансляций других регионов
    local = (spb_place & spb_bc) - other - set(cap_terms(' '.join(NOT_SPB)))
    foreign = other_all - spb_all                # слова, известные только по другим регионам

    out, days = [], set()
    for e in nospb:
        name = e['name']
        if NOAUTO_NAME.search(name) or NOT_CALENDAR.search(name):
            continue
        mark = SPB_MARK.search(name)
        terms = cap_terms(name)
        if mark:
            why = mark.group(0)
        elif terms.keys() & local and not cap_terms(name, parts=True).keys() & foreign:
            why = ', '.join(dict.fromkeys(w for t, w in terms.items() if t in local))
        else:
            continue
        out.append((e, why))
        days.add(e['date'])
    on_day = defaultdict(list)               # записи СПб, в даты которых попадает трансляция
    for r in recs:
        if not r['spb']:
            continue
        try:
            d0 = D(r['date'])
            d1 = max(d0, D(r.get('endDate') or r['date']))
        except ValueError:
            continue
        if (d1 - d0).days > 60:
            continue                         # сезонные серии и «зонтики» на месяцы — не подсказка
        d = d0
        while d <= d1:
            if d.isoformat() in days:
                on_day[d.isoformat()].append(r)
            d += dt.timedelta(days=1)
    return out, on_day

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

def report_spb(missing, on_day):
    print(f'\n== Возможно, старты СПб и ЛО, которых нет в календаре ({len(missing)} трансляций) ==')
    by_day = defaultdict(list)
    for e, why in missing:
        by_day[e['date']].append((e, why))
    for day in sorted(by_day):
        rs = sorted(on_day.get(day, []), key=lambda r: r['id'])
        if rs:
            known = '; '.join(f"{r['id']} {r.get('name', '')}" for r in rs[:5]) + (f' и ещё {len(rs) - 5}' if len(rs) > 5 else '')
            print(f'{day} · в календаре СПб в этот день: {known}')
        else:
            print(f'{day} · в календаре СПб в этот день записей нет')
        for e, why in sorted(by_day[day], key=lambda x: x[0]['id']):
            print(f"    {e['id']:6}  {e['name']}   [{why}]")

# ---------------------------------------------------------------- main

def main():
    ap = argparse.ArgumentParser(description='Заполнение o_gps в calendar-*.js (подробности — в шапке файла).')
    ap.add_argument('--matches', help='JSON-карта {id записи: o_gps}; без него — поиск новых трансляций на o-gps-center.ru')
    ap.add_argument('--apply', action='store_true', help='режим поиска: вписать уверенные соответствия')
    ap.add_argument('--year', help='только записи этого года (YYYY)')
    ap.add_argument('--fresh', nargs='?', type=int, const=7, metavar='N',
                    help='режим поиска: только трансляции за последние N дней (по умолчанию 7)')
    ap.add_argument('--save', help='режим поиска: записать уверенные соответствия в JSON-карту')
    ap.add_argument('--cache', default=CACHE, help='файл кэша списка трансляций')
    ap.add_argument('--no-cache', action='store_true', help='не читать и не записывать кэш')
    ap.add_argument('--src', default='js', help='каталог с calendar-*.js (по умолчанию js)')
    ap.add_argument('-n', '--dry-run', action='store_true', help='ничего не менять в файлах')
    ap.add_argument('--zip', help='упаковать изменённые файлы в архив')
    ap.add_argument('--out', nargs='?', const='fill_ogps_out.txt', metavar='FILE',
                    help='дублировать отчёт в файл (UTF-8), по умолчанию fill_ogps_out.txt')
    a = ap.parse_args()
    for stream in (sys.stdout, sys.stderr):
        if hasattr(stream, 'reconfigure'):
            stream.reconfigure(errors='replace')            # кириллица и псевдографика в консоли Windows
    if a.out:
        sys.stdout = Tee(sys.stdout, a.out)
    if a.year and not re.fullmatch(r'\d{4}', a.year):
        ap.error('--year: ожидается год вида 2026')
    if a.fresh is not None and a.fresh < 0:
        ap.error('--fresh: число дней не может быть отрицательным')

    if a.matches:
        if a.apply or a.save or a.fresh is not None:
            ap.error('--apply, --save и --fresh относятся к режиму поиска (без --matches)')
        mapping = json.load(open(a.matches, encoding='utf-8'))
        apply_mapping(a.src, mapping, a.dry_run, a.zip, a.year)
        return

    recs, used = load_records(a.src)
    print(f'Записей: {len(recs)}, без o_gps: {sum(not r["has_gps"] for r in recs)}, '
          f'трансляций уже в o_gps: {len(used)}', file=sys.stderr)
    since = (dt.date.today() - dt.timedelta(days=a.fresh)).isoformat() if a.fresh is not None else None
    lo = max(filter(None, [f'{a.year}-01-01' if a.year else None, since]), default=None)
    full_at, cached = (None, {}) if a.no_cache else load_cache(a.cache)
    fetched, complete = fetch_broadcasts(lo)
    if complete:                             # весь список: кэш заменяется целиком
        pool, full_at = dict(fetched), dt.date.today().isoformat()
    else:
        pool = {**cached, **fetched}
    if not a.no_cache:
        save_cache(a.cache, full_at, pool)
        warn_if_not_ignored(a.cache)
    broadcasts = {i: x for i, x in fetched.items()
                  if (not a.year or x['date'][:4] == a.year) and (not since or x['date'] >= since)}
    span = ' за ' + a.year if a.year else ''
    span += f' с {since}' if since else ''
    print(f'Трансляций в списке{span}: {len(broadcasts)}; для весов слов: {len(pool)}', file=sys.stderr)
    if not full_at:
        print('  ! полного прохода по списку ещё не было: веса слов посчитаны по части списка, '
              'и уверенных соответствий может быть меньше. Запустите один раз без --year и --fresh — '
              'список сохранится в кэш' + (' (сейчас кэш отключён: --no-cache)' if a.no_cache else ''),
              file=sys.stderr)
    sure, check, byid, nospb = discover(recs, used, pool, broadcasts, a.year)
    report(sure, check, byid)
    report_spb(*spb_missing(nospb, recs, pool))
    mapping = {rid: build_value(byid[rid], evs) for rid, evs in sure.items()}
    if a.save:
        json.dump(mapping, open(a.save, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
        print(f'\nКарта уверенных соответствий: {a.save}')
    if a.apply and mapping:
        print()
        apply_mapping(a.src, mapping, a.dry_run, a.zip)

if __name__ == '__main__':
    main()
