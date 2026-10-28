#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
import_calendar_malakhit.py — импорт календаря клуба «Малахит» (Google Doc)
в js/calendar-msk-2026.js.

Вызывается и из tools/sync_calendar.py (шаг malakhit) с теми же ключами.

Запуск из корня сайта (скрипт лежит в tools/, календарь — в js/):

    python tools/import_calendar_malakhit.py              # записать изменения
    python tools/import_calendar_malakhit.py -n           # только показать изменения
    python tools/import_calendar_malakhit.py --fresh 14   # только старты с сегодня-14 дней

Ключи:
    --src DIR        каталог с calendar-msk-YYYY.js или корень сайта (по умолч. js);
                     документ — календарь DOC_YEAR года, файл calendar-msk-DOC_YEAR.js
    --year Y         только строки документа со стартами года Y (YYYY или
                     YYYY-YYYY, можно повторять)
    --fresh [N]      только строки со стартами не раньше сегодня минус N дней
                     (по умолч. 7) — прошедшие раньше не создаются и не обновляются
    -n, --dry-run    ничего не записывать, только показать (старое имя: --dry)
    --doc ID|URL     ID или URL Google-документа
    --html FILE      взять документ из локального HTML-файла (экспорт Google Docs)
    --no-bulletins   не читать бюллетени (name/fmt по умолчанию)
    --out [FILE]     дублировать отчёт в файл (UTF-8), без имени —
                     import_calendar_malakhit_out.txt в текущем каталоге
    -h, --help       справка
Без --year и --fresh обрабатываются все строки документа.

Колонки документа -> поля записи:
    Дата                     -> date   (+ id MSK_YYYYMMDD_N)
    Место                    -> place  ("Название: Место" -> name + place)
    Заявка                   -> reg
    Информационный бюллетень -> link
    Точка старта             -> coord  (только координаты, без ссылки на карту)
    Сплиты                   -> res
Всем записям ставится owner: "MLKHT".

Название (name) и формат (fmt) берутся из первой и третьей строк
информационного бюллетеня (отключается ключом --no-bulletins).

Сопоставление с существующими записями: запись с тем же owner MLKHT и той же
датой, либо запись с той же ссылкой на заявку (reg; событие orgeo — по номеру
или псевдониму в ссылке), либо запись той же даты без owner со словом
«Малахит» в названии или месте (такие создаёт sync_calendar.py из orgeo). У найденной записи
обновляются reg/link/coord/res/owner (только непустыми значениями из документа);
name/place/type/fmt заполняются, только если их ещё нет (ручные правки не трогаем).

Строка документа, для которой есть закомментированная запись (/* … */ или
«//») с owner MLKHT и той же датой или с той же reg, пропускается — так
удаляют ненужный старт, чтобы он не появился снова (как в sync_calendar.py).

Значение, закомментированное в записи («// fmt: "…",»), не вписывается снова.
Поле, зафиксированное комментарием «// !» после значения (или строкой
«// ! поле, …» / «// ! *» внутри записи, — как в sync_calendar.py), не
меняется и не добавляется. Изменённая запись правится на месте: остальные
поля, их порядок и комментарии сохраняются.

Только стандартная библиотека Python.
"""

import argparse
import os
import re
import shutil
import subprocess
import sys
import tempfile
import time
import urllib.parse
import datetime
import urllib.request
from html.parser import HTMLParser

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
sys.dont_write_bytecode = True
import fill_bulletins as FB                                   # noqa: E402  разбор записей
from sync_calendar import (Ignored, commented_fields, fix_links, locked_fields, norm_fmt, rogaine_fmt,  # noqa: E402
                           orgeo_ref, patch_record, same, same_event)  # удалённые записи, «// !», правка на месте

DOC_ID = "1uZyPOj4ksADFaDgNujK6B1QxRRYWYNwrl9r7SY9hJ7k"
DOC_EXPORT = "https://docs.google.com/document/d/{id}/export?format={fmt}"
DOC_YEAR = 2026         # документ — календарь этого года

OWNER = "MLKHT"
DEFAULT_NAME = "Открытая тренировка"
DEFAULT_TYPE = "ORIENT"

# Порядок полей в новых записях (как в остальном файле)
FIELD_ORDER = ["id", "date", "name", "place", "type", "fmt",
               "coord", "link", "reg", "res", "owner", "start"]
# Поля, которые документ «ведёт» — обновляются всегда (если в документе есть значение)
DOC_FIELDS = ["reg", "link", "coord", "res", "owner"]
# Поля, которые заполняются только при отсутствии
SOFT_FIELDS = ["name", "place", "type", "fmt"]

HEADER_ALIASES = {
    "date": ["дата"],
    "place": ["место"],
    "reg": ["заявка"],
    "link": ["информационный бюллетень", "бюллетень"],
    "coord": ["точка старта", "старт"],
    "res": ["сплиты"],
    "results": ["результаты"],
}

UA = "Mozilla/5.0 (o-maps import_calendar_malakhit)"


# --------------------------------------------------------------------------
# Загрузка
# --------------------------------------------------------------------------

def http_get(url, timeout=30):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        data = r.read()
        charset = r.headers.get_content_charset() or "utf-8"
    return data.decode(charset, errors="replace")


def gdoc_id(url_or_id):
    m = re.search(r"/document/d/([A-Za-z0-9_-]+)", url_or_id)
    return m.group(1) if m else url_or_id


def unwrap_google_url(href):
    """https://www.google.com/url?q=REAL&sa=... -> REAL"""
    if not href:
        return href
    p = urllib.parse.urlparse(href)
    if p.netloc.endswith("google.com") and p.path == "/url":
        q = urllib.parse.parse_qs(p.query).get("q")
        if q:
            return q[0]
    return href


# --------------------------------------------------------------------------
# Разбор HTML-таблицы
# --------------------------------------------------------------------------

class TableParser(HTMLParser):
    """Собирает все таблицы: [таблица -> [строка -> [ячейка {text, links}]]]"""

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.tables = []
        self._row = None
        self._cell = None
        self._link = None
        self._depth = 0

    def handle_starttag(self, tag, attrs):
        if tag == "table":
            self._depth += 1
            if self._depth == 1:
                self.tables.append([])
        elif self._depth != 1:
            return
        elif tag == "tr":
            self._row = []
        elif tag in ("td", "th") and self._row is not None:
            self._cell = {"text": [], "links": []}
        elif tag == "a" and self._cell is not None:
            href = unwrap_google_url(dict(attrs).get("href", ""))
            self._link = {"href": href, "text": []}
        elif tag in ("p", "br", "li") and self._cell is not None:
            self._cell["text"].append("\n")

    def handle_endtag(self, tag):
        if tag == "table":
            self._depth -= 1
            return
        if self._depth != 1:
            return
        if tag == "a" and self._link is not None:
            self._link["text"] = "".join(self._link["text"]).strip()
            if self._link["href"]:
                self._cell["links"].append(self._link)
            self._link = None
        elif tag in ("td", "th") and self._cell is not None:
            txt = "".join(self._cell["text"])
            txt = re.sub(r"[ \t\xa0]+", " ", txt)
            txt = "\n".join(s.strip() for s in txt.split("\n") if s.strip())
            self._cell["text"] = txt
            self._row.append(self._cell)
            self._cell = None
        elif tag == "tr" and self._row is not None:
            self.tables[-1].append(self._row)
            self._row = None

    def handle_data(self, data):
        if self._cell is not None:
            self._cell["text"].append(data)
        if self._link is not None:
            self._link["text"].append(data)


def map_header(row):
    cols = {}
    for i, c in enumerate(row):
        h = c["text"].strip().lower()
        for key, names in HEADER_ALIASES.items():
            if key in cols:
                continue
            if h in names:
                cols[key] = i
                break
    return cols


COORD_RE = re.compile(r"(-?\d{1,2}\.\d{3,})\s*[,;]\s*(-?\d{1,3}\.\d{3,})")
DATE_RE = re.compile(r"^\s*(\d{1,2})\.(\d{1,2})\.(\d{4})\s*$")


def pick_res(split_cell, results_cell):
    """Ссылка на сплиты. Стартовые протоколы игнорируются; если в колонке
    «Сплиты» ничего подходящего нет, берётся ссылка «...сплит...» из «Результатов»."""
    if split_cell:
        low = split_cell["text"].lower()
        is_protocol = ("протокол" in low or "стартов" in low) and "сплит" not in low
        if not is_protocol:
            for a in split_cell["links"]:
                if "протокол" not in a["text"].lower():
                    return a["href"]
    if results_cell:
        for a in results_cell["links"]:
            if "сплит" in a["text"].lower():
                return a["href"]
    return None


def parse_doc(html):
    p = TableParser()
    p.feed(html)
    rows_out = []
    for table in p.tables:
        if not table:
            continue
        cols = map_header(table[0])
        if "date" not in cols:
            continue
        for row in table[1:]:
            def cell(key):
                i = cols.get(key)
                return row[i] if i is not None and i < len(row) else None

            dc = cell("date")
            m = DATE_RE.match(dc["text"]) if dc else None
            if not m:
                if dc and dc["text"].strip():
                    print(f"  ! пропуск строки: не распознана дата «{dc['text']}»")
                continue
            d, mo, y = m.groups()
            rec = {"date": f"{y}-{int(mo):02d}-{int(d):02d}"}

            pc = cell("place")
            place = pc["text"].replace("\n", " ").strip() if pc else ""
            if ":" in place:
                nm, pl = place.split(":", 1)
                rec["_name_from_place"] = nm.strip()
                place = pl.strip()
            if place:
                rec["place"] = place

            rc = cell("reg")
            if rc and rc["links"]:
                rec["reg"] = rc["links"][0]["href"]

            lc = cell("link")
            if lc and lc["links"]:
                rec["link"] = lc["links"][0]["href"]

            cc = cell("coord")
            if cc:
                cm = COORD_RE.search(cc["text"])
                if cm:
                    rec["coord"] = [float(cm.group(1)), float(cm.group(2))]

            res = pick_res(cell("res"), cell("results"))
            if res:
                rec["res"] = res

            rows_out.append(rec)
    return rows_out


def bulletin_info(link):
    """(name, fmt) из первых строк бюллетеня Google Docs."""
    if not link or "docs.google.com/document/d/" not in link:
        return None, None
    try:
        txt = http_get(DOC_EXPORT.format(id=gdoc_id(link), fmt="txt"))
    except Exception as e:
        print(f"  ! бюллетень недоступен ({e}): {link}")
        return None, None
    lines = [s.strip().lstrip("\ufeff") for s in txt.splitlines()]
    # первые строки до пустой строки: название / дата-место / формат
    head = []
    for s in lines:
        if not s:
            if head:
                break
            continue
        head.append(s)
    name = head[0].rstrip(".").strip() if head else None
    fmt = None
    if len(head) >= 3 and "бюллетень" not in head[2].lower():
        fmt = head[2].rstrip(".").strip()
    return name or None, fmt or None


def enrich(rec, use_bulletins):
    name = rec.pop("_name_from_place", None)
    b_name, b_fmt = (None, None)
    if use_bulletins:
        b_name, b_fmt = bulletin_info(rec.get("link"))
    rec["name"] = name or b_name or DEFAULT_NAME
    blob = (rec["name"] + " " + rec.get("place", "")).lower()
    rogaine = "рогейн" in blob
    rec["type"] = "ROGAINE" if rogaine else DEFAULT_TYPE
    fmt = ((rogaine_fmt(b_fmt) if rogaine else None)       # у рогейнов — только часы: «рогейн 4 часа» -> «4»
           or norm_fmt(b_fmt) or ("рогейн" if rogaine else None))     # эстафеты — «эстафета 3х»
    if fmt:
        rec["fmt"] = fmt
    rec["owner"] = OWNER
    return rec


# --------------------------------------------------------------------------
# Разбор JS-файла (без изменения форматирования нетронутых записей)
# --------------------------------------------------------------------------

def scan_string(s, i):
    """s[i] — кавычка; вернуть индекс за закрывающей кавычкой."""
    q = s[i]
    i += 1
    while i < len(s):
        c = s[i]
        if c == "\\":
            i += 2
            continue
        if c == q:
            return i + 1
        i += 1
    raise ValueError("незакрытая строка")


def find_array(text):
    m = re.search(r"\b(?:let|var|const)\s+\w+\s*=\s*\[", text)
    if not m:
        raise ValueError("не найден массив вида `let name = [`")
    start = m.end() - 1
    depth, i = 0, start
    while i < len(text):
        c = text[i]
        if c in "'\"`":
            i = scan_string(text, i)
            continue
        if c in "[{":
            depth += 1
        elif c in "]}":
            depth -= 1
            if depth == 0:
                return start, i
        i += 1
    raise ValueError("массив не закрыт")


def split_records(text, a0, a1):
    """[(start, end_exclusive)] для объектов верхнего уровня массива."""
    spans, depth, i, st = [], 0, a0 + 1, None
    while i < a1:
        c = text[i]
        if c in "'\"`":
            i = scan_string(text, i)
            continue
        if c == "/" and text[i:i + 2] == "//":
            i = text.find("\n", i)
            i = a1 if i < 0 else i
            continue
        if c == "/" and text[i:i + 2] == "/*":
            i = text.find("*/", i) + 2
            continue
        if c in "[{":
            if depth == 0 and c == "{":
                st = i
            depth += 1
        elif c in "]}":
            depth -= 1
            if depth == 0 and st is not None:
                spans.append((st, i + 1))
                st = None
        i += 1
    return spans


def parse_fields(block):
    """'{ k: v, ... }' -> [(key, raw_value)] с сохранением порядка; комментарии
    (в том числе «// !» — фиксация поля) пропускаются (разбор fill_bulletins.py)."""
    return [(f["key"], block[f["vstart"]:f["vend"]]) for f in FB.parse_fields(block, 0, len(block) - 1)]


def js_unquote(raw):
    raw = raw.strip()
    if len(raw) >= 2 and raw[0] in "'\"" and raw[-1] == raw[0]:
        return re.sub(r"\\(.)", r"\1", raw[1:-1])
    return None


def js_str(s):
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'


def js_num(x):
    return repr(round(float(x), 6)).rstrip("0").rstrip(".") if "." in repr(x) else repr(x)


def js_value(key, val, nl, ind):
    val = fix_links(val)         # http://orgeo.ru -> https://orgeo.ru
    if key == "id":
        return "'" + val + "'"
    if key == "coord":
        return "[" + ", ".join(js_num(v) for v in val) + "]"     # в строку: [55.371487, 38.812763]
    if isinstance(val, list):
        return "[" + ", ".join(js_str(v) for v in val) + "]"
    return js_str(val)


def render_record(fields, nl, base="    "):
    """fields: [(key, raw_js_value)]"""
    ind = base + "    "
    lines = [ind + k + ": " + v for k, v in fields]
    return "{" + nl + ("," + nl).join(lines) + nl + base + "}"


def coord_of(raw):
    nums = re.findall(r"-?\d+(?:\.\d+)?", raw or "")
    return [float(x) for x in nums] if len(nums) == 2 else None


# --------------------------------------------------------------------------
# Основная логика
# --------------------------------------------------------------------------

def read_text(path):
    data = open(path, "rb").read()
    for enc in ("utf-8-sig", "cp1251"):
        try:
            text = data.decode(enc)
            break
        except UnicodeDecodeError:
            continue
    bom = data.startswith(b"\xef\xbb\xbf")
    enc = "utf-8" if enc == "utf-8-sig" else enc
    nl = "\r\n" if b"\r\n" in data else "\n"
    return text, enc, bom, nl


def node_check(text):
    """Синтаксическая проверка через node (если установлен)."""
    node = shutil.which("node")
    if not node:
        return True
    a0, a1 = find_array(text)
    with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False, encoding="utf-8") as f:
        f.write("const a = " + text[a0:a1 + 1] + ";\n"
                "if (!Array.isArray(a)) throw new Error('not array');\n"
                "console.log(a.length);\n")
        tmp = f.name
    try:
        r = subprocess.run([node, tmp], capture_output=True, text=True, encoding="utf-8")
    finally:
        os.unlink(tmp)
    if r.returncode != 0:
        print("ОШИБКА node:\n" + r.stderr, file=sys.stderr)
        return False
    return True


def parse_years(values):
    out = set()
    for v in values:
        m = re.fullmatch(r"(\d{4})(?:-(\d{4}))?", v.strip())
        if not m:
            raise ValueError(v)
        a, b = int(m.group(1)), int(m.group(2) or m.group(1))
        out.update(range(min(a, b), max(a, b) + 1))
    return out


def resolve_js(src, year):
    name = f"calendar-msk-{year}.js"
    for d in (src, os.path.join(src, "js")):
        if os.path.isfile(os.path.join(d, name)):
            return os.path.join(d, name)
    sys.exit(f"Нет файла {name} в {src} (запускайте из корня сайта или укажите --src)")


class Tee:
    """stdout, который пишет и в консоль, и в файл (для --out)."""

    def __init__(self, stream, path):
        self.stream, self.file = stream, open(path, "w", encoding="utf-8", newline="\n")

    def write(self, s):
        self.stream.write(s)
        self.file.write(s)

    def flush(self):
        self.stream.flush()
        self.file.flush()


def main():
    ap = argparse.ArgumentParser(description=f"Импорт календаря «Малахит» в calendar-msk-{DOC_YEAR}.js "
                                             "(ключи — в шапке файла)")
    ap.add_argument("--src", default="js", help="каталог с calendar-msk-YYYY.js или корень сайта (по умолч. js)")
    ap.add_argument("--year", action="append", default=[], metavar="Y",
                    help="только старты года Y (YYYY или YYYY-YYYY; можно несколько раз)")
    ap.add_argument("--fresh", nargs="?", type=int, const=7, metavar="N",
                    help="только старты не раньше сегодня минус N дней (по умолч. 7)")
    ap.add_argument("-n", "--dry-run", "--dry", dest="dry", action="store_true",
                    help="ничего не записывать, только показать")
    ap.add_argument("--doc", default=DOC_ID, help="ID или URL Google-документа")
    ap.add_argument("--html", help="взять документ из локального HTML-файла (экспорт Google Docs)")
    ap.add_argument("--no-bulletins", action="store_true",
                    help="не читать бюллетени (name/fmt по умолчанию)")
    ap.add_argument("--out", nargs="?", const="import_calendar_malakhit_out.txt", metavar="FILE",
                    help="дублировать отчёт в файл (по умолч. import_calendar_malakhit_out.txt)")
    args = ap.parse_args()
    if args.out:
        sys.stdout = Tee(sys.stdout, args.out)
    try:
        years = parse_years(args.year)
    except ValueError as ex:
        ap.error(f"--year: ожидается YYYY или YYYY-YYYY, получено {ex}")
    if args.fresh is not None and args.fresh < 0:
        ap.error("--fresh: число дней не может быть отрицательным")
    since = (datetime.date.today() - datetime.timedelta(days=args.fresh)).isoformat() if args.fresh is not None else None
    js_path = resolve_js(args.src, DOC_YEAR)

    # --- документ ---
    if args.html:
        html = open(args.html, encoding="utf-8").read()
    else:
        url = DOC_EXPORT.format(id=gdoc_id(args.doc), fmt="html")
        html = http_get(url)
    doc_recs = parse_doc(html)
    if not doc_recs:
        sys.exit("В документе не найдено ни одной строки с датой — формат изменился?")
    doc_recs = [r for r in doc_recs if (not years or int(r["date"][:4]) in years)
                and (not since or r["date"] >= since)]
    for r in doc_recs:
        enrich(r, not args.no_bulletins)

    # --- JS ---
    text, enc, bom, nl = read_text(js_path)
    a0, a1 = find_array(text)
    spans = split_records(text, a0, a1)
    records = []
    for st, en in spans:
        f = parse_fields(text[st:en])
        d = dict(f)
        date = js_unquote(d.get("date", "")) or (re.findall(r"\d{4}-\d{2}-\d{2}", d.get("date", "")) or [""])[0]
        records.append({"span": (st, en), "fields": f, "date": date,
                        "lock": locked_fields(text, (st, en - 1), FB.parse_fields(text, st, en - 1)),
                        "rejected": commented_fields(text, (st, en - 1)),
                        "id": js_unquote(d.get("id", "")) or "",
                        "owner": js_unquote(d.get("owner", "")) or "",
                        "name": js_unquote(d.get("name", "")) or "",
                        "place": js_unquote(d.get("place", "")) or "",
                        "reg": js_unquote(d.get("reg", "")) or ""})

    prefixes = [re.match(r"([A-Z]+)_\d{8}_\d+$", r["id"]) for r in records]
    prefixes = [m.group(1) for m in prefixes if m]
    prefix = max(set(prefixes), key=prefixes.count) if prefixes else "MSK"
    used_ids = {r["id"] for r in records}

    replacements = []   # (start, end, new_text)
    inserts = []        # (pos, new_text)
    n_new = n_upd = n_same = n_ign = 0
    ignored = Ignored().add_text(text).recs

    for dr in doc_recs:
        match = None
        for r in records:
            if r["owner"] == OWNER and r["date"] == dr["date"]:
                match = r
                break
        if match is None and dr.get("reg"):
            ref = orgeo_ref(dr["reg"])
            match = next((r for r in records if r["reg"] and (r["reg"] == dr["reg"] or (
                ref and orgeo_ref(r["reg"]) == ref))), None)
        if match is None:   # запись создана sync_calendar.py из orgeo: без owner, «… Малахит …», тот же день
            cands = [r for r in records if r["date"] == dr["date"] and not r["owner"]
                     and re.search(r"малахит", r["name"] + " " + r["place"], re.I)]
            match = same_event(dr.get("name"), dr.get("place"), dr.get("reg"), cands) or (
                cands[0] if len(cands) == 1 else None)
        if match is None and any((r.get("owner") == OWNER and r.get("date") == dr["date"])
                                 or (dr.get("reg") and r.get("reg") == dr["reg"]) for r in ignored):
            n_ign += 1                      # запись закомментирована — старт не нужен
            print(f"- {dr['date']} {dr['name']} (запись закомментирована)")
            continue

        if match:
            fields = list(match["fields"])
            keys = [k for k, _ in fields]
            changed = []

            lock = match["lock"]
            upd = {}

            def put(k, v):
                if k in lock or "*" in lock:
                    return                  # поле зафиксировано комментарием «// !»
                if any(same(k, v, x) for x in match["rejected"].get(k, [])):
                    return                  # это значение закомментировано в записи — отвергнуто вручную
                raw = js_value(k, v, nl, "        ")
                if k in keys:
                    i = keys.index(k)
                    old = fields[i][1]
                    same = (coord_of(old) == [round(x, 6) for x in v]) if k == "coord" \
                        else js_unquote(old) == v
                    if not same:
                        fields[i] = (k, raw)
                        upd[k] = raw
                        changed.append(k)
                else:
                    # вставить по FIELD_ORDER
                    pos = len(fields)
                    order = FIELD_ORDER.index(k) if k in FIELD_ORDER else len(FIELD_ORDER)
                    for i, kk in enumerate(keys):
                        if kk in FIELD_ORDER and FIELD_ORDER.index(kk) > order:
                            pos = i
                            break
                    fields.insert(pos, (k, raw))
                    keys.insert(pos, k)
                    upd[k] = raw
                    changed.append("+" + k)

            for k in DOC_FIELDS:
                if dr.get(k) is not None:
                    put(k, dr[k])
            for k in SOFT_FIELDS:
                if k not in keys and dr.get(k):
                    put(k, dr[k])

            if changed:
                st, en = match["span"]
                # правка на месте: комментарии и порядок полей записи сохраняются
                replacements.append((st, en, patch_record(text[st:en], upd, FIELD_ORDER, nl)))
                n_upd += 1
                d = dict(fields)
                print(f"m {dr['date']} {js_unquote(d.get('name', '')) or dr['name']}")
            else:
                n_same += 1
            continue

        # новая запись
        ymd = dr["date"].replace("-", "")
        k = 1
        while f"{prefix}_{ymd}_{k}" in used_ids:
            k += 1
        new_id = f"{prefix}_{ymd}_{k}"
        used_ids.add(new_id)
        dr["id"] = new_id
        fields = [(key, js_value(key, dr[key], nl, "        "))
                  for key in FIELD_ORDER if dr.get(key) is not None]
        block = render_record(fields, nl)

        after = None
        for r in records:
            if r["date"] and r["date"] <= dr["date"]:
                after = r
        if after is not None:
            pos = after["span"][1]
            inserts.append((pos, "," + nl + "    " + block, dr["date"]))
        else:
            pos = records[0]["span"][0] if records else a0 + 1
            txt = block + "," + nl + "    " if records else nl + "    " + block + nl
            inserts.append((pos, txt, dr["date"]))
        n_new += 1
        print(f"c {dr['date']} {dr['name']}")

    stats = (f"Прочитано из документа: {len(doc_recs)}, "
             f"создано: {n_new}, обновлено: {n_upd}"
             + (f", пропущено (запись закомментирована): {n_ign}" if n_ign else ""))
    if not (n_new or n_upd):
        print(stats)
        return

    # сборка: правки применяем с конца файла; вставки в одну позицию — в порядке дат
    edits = [(st, en, t, "") for st, en, t in replacements]
    edits += [(p, p, t, d) for p, t, d in inserts]
    edits.sort(key=lambda e: (e[0], e[1] != e[0], e[3]))
    out = []
    cur = 0
    for st, en, t, _ in edits:
        out.append(text[cur:st])
        out.append(t)
        cur = max(cur, en)
    out.append(text[cur:])
    new_text = "".join(out)

    if not node_check(new_text):
        sys.exit("Изменения НЕ записаны.")

    if args.dry:
        print(stats + " (dry-run: файл не изменён)")
        return

    dest = js_path
    data = new_text.encode(enc)
    if bom:
        data = b"\xef\xbb\xbf" + data
    with open(dest, "wb") as f:
        f.write(data)
    print(stats)


if __name__ == "__main__":
    t0 = time.monotonic()
    try:
        main()
    finally:
        print(f"Время исполнения: {time.monotonic() - t0:.1f} с")
