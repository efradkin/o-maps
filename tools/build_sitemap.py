#!/usr/bin/env python3
"""
build_sitemap.py — генерирует sitemap.xml и robots.txt в корне сайта o-maps.spb.ru.
Что попадает в sitemap:
  * все *.html из корня, help/, integration/ и history/ (без рекурсии),
    кроме EXCLUDE и страниц с <meta name="robots" content="noindex">;
  * index.html публикуется как "/";
  * start.html?start=<КОД> и start-details.html?start=<КОД> (компактная
    и подробная страницы старта) для каждого кода, на который есть ссылка
    в *.html или js/*.js (список не выдумывается, берётся из ссылок) и
    который есть в js/starts.js (так примеры адресов в комментариях вроде
    start.html?start=X в карту сайта не попадают);
  * event.html?id=<КОД> для каждого события календаря: коды берутся из
    поля id записей в файлах js/calendar-*.js, которые подключает
    event.html (закомментированные записи не учитываются).
  * map-info.html?map=<ИМЯ> и map-info-kkm.html?map=<ИМЯ> для карт,
    которые реально подключены на страницах информации о карте;
  * sheet-all.html?author=<КОД> для авторов из js/authors.js,
    упомянутых в каталоге карт.
Проверки (только сообщения, данные не правятся):
  * id, который встречается в календарях больше одного раза;
  * ссылки event.html?id=... в *.html на несуществующие события.

lastmod: дата последнего коммита файла и связанных с HTML данных (git);
если файл изменён и не закоммичен или git недоступен — дата mtime.
В неглубокой git-копии lastmod не ставится: история файлов неполная.
Для страниц отдельных карт/авторов, start.html?start=...,
start-details.html?start=... и event.html?id=... lastmod не ставится:
дата правки общего файла данных не говорит о том, что изменилась именно эта
страница.
Параметры:
  --src DIR        корень сайта (по умолчанию текущая папка);
  -n, --dry-run    только показать, что изменится, ничего не записывать;
  -v, --verbose    вывести список всех URL с lastmod;
  --zip [FILE]     упаковать изменённые файлы в архив
                   (по умолчанию o-maps-sitemap.zip).

Правила скриптов проекта: правка на месте в --src, -n/--dry-run для
предпросмотра, --zip упаковывает только изменённые файлы; повторный запуск
ничего не меняет.
Пример:
  python tools/build_sitemap.py --src . -n
  python tools/build_sitemap.py --src . --zip
"""
import argparse
import datetime
import os
import re
import subprocess
import sys
import zipfile
from functools import lru_cache
from pathlib import PurePosixPath
from collections import defaultdict
from urllib.parse import quote
from xml.sax.saxutils import escape

BASE = "https://o-maps.spb.ru"

SCAN_DIRS = ["", "help", "integration", "history"]
# Служебные страницы и шаблоны, которым нужен параметр (без него пустые).
EXCLUDE = {
    "theme-preview.html",
    "map-info.html",
    "map-info-kkm.html",
    "start.html",
    "start-details.html",
    "event.html",
}

# Страницы старта: для каждого кода публикуются обе.
START_PAGES = ["start.html", "start-details.html"]
# Страница события: список календарей берётся из её <script src="js/calendar-*.js">.
EVENT_PAGE = "event.html"
# Символы, которые encodeURIComponent() не кодирует (как eventPageUrl() в utils.js).
EVENT_ID_SAFE = "-_.!~*'()"
# Канонические страницы отдельных карт и авторов (js/seo-meta.js).
MAP_INFO_PAGES = ("map-info.html", "map-info-kkm.html")
AUTHOR_PAGE = "sheet-all.html"

DISALLOW = [
    "/theme-preview.html",
    "/prompts/",
    "/tools/",
]
# Только для Яндекса: склеивает адреса, отличающиеся параметрами,
# которые не меняют содержимое страницы.
CLEAN_PARAMS = [
    # метки трафика
    "utm_source&utm_medium&utm_campaign&utm_content&utm_term&yclid&gclid&fbclid",
    # положение карты и режимы показа
    "x&y&zoom&background&mobile&no-buttons&embedded&prtnr",
    # выделенная карта или трек на общей карте (canonical — без параметров)
    "track&onlytrack&onlymap",
    # фильтры: своего адреса в поиске у них нет
    "type&track-type&track-month&event-month&restricted&tracks&retro&ocad&orders&order-status",
    "wo-author&only-wo-author&only-wo-full&all-years&year&startYear&calendar&event-type",
    "owner&planner&region&poi&oopt&me&only-me&q",
    # открытая вкладка страницы старта (start.html, start-details.html)
    "tab",
]
# map, start, author и id в Clean-param не добавляются: это адреса
# самостоятельных страниц (map-info*.html, start.html, start-details.html,
# sheet-all.html, event.html) — см. SIGNIFICANT_BY_PAGE в js/seo-meta.js.
START_RE = re.compile(r"start\.html\?start=([A-Za-z0-9_]+)")
NOINDEX_RE = re.compile(
    r"<meta[^>]+name\s*=\s*[\"']robots[\"'][^>]*content\s*=\s*[\"'][^\"']*noindex",
    re.I,
)
# Ключ верхнего уровня объекта starts в js/starts.js: «    WN: {», «    '2x2': {».
STARTS_KEY_RE = re.compile(r"^    ['\"]?([A-Za-z0-9_]+)['\"]?\s*:\s*\{", re.M)
TITLE_RE = re.compile(r"<title[^>]*>(.*?)</title>", re.I | re.S)
EVENT_LINK_RE = re.compile(r"event\.html\?id=([^\"'&#<>\s]+)")
# Файлы календарей, которые подключает event.html.
CALENDAR_SCRIPT_RE = re.compile(r"<script[^>]+src\s*=\s*[\"']js/(calendar-[^\"'?]+\.js)", re.I)
# Поле id записи календаря: «        id: 'SPB_20260101_1',».
EVENT_ID_RE = re.compile(r"^\s*id\s*:\s*(['\"])(.*?)\1", re.M)
# Строки и комментарии JS: строки оставляются, комментарии вырезаются
# (в строках бывают «//» из адресов сайтов).
JS_TOKEN_RE = re.compile(
    r"('(?:\\.|[^'\\\n])*'|\"(?:\\.|[^\"\\\n])*\"|`(?:\\.|[^`\\])*`)"
    r"|//[^\n]*|/\*.*?\*/",
    re.S,
)
# Берём имена подключённых файлов данных из HTML, без угадывания по каталогу.
SCRIPT_RE = re.compile(r"<script[^>]+src\s*=\s*[\"'](?:\./)?js/([^\"'?#]+\.js)", re.I)
MAP_ARRAY_RE = re.compile(r"\b(?:let|var|const)\s+[\w$]*Maps\s*=\s*\[")
MAP_URL_RE = re.compile(r"\burl\s*:\s*(['\"])(.*?)\1")
MAP_AUTHOR_RE = re.compile(r"\bauthor\s*:\s*(\[[^\]]*\]|['\"][^'\"]+['\"])", re.S)
MAP_START_RE = re.compile(r"\bstart\s*:\s*(['\"])(.*?)\1")
AUTHOR_KEY_RE = re.compile(r"^    ['\"]?([A-Za-z0-9_]+)['\"]?\s*:\s*\{", re.M)
AUTHOR_CODE_RE = re.compile(r"['\"]([A-Za-z0-9_]+)['\"]")
DATA_SCRIPTS_RE = re.compile(r"^(?:calendar-|maps-|news(?:[.-]|$)|starts\.js$|authors\.js$)")

def read_text(path):
    raw = open(path, "rb").read()
    for enc in ("utf-8-sig", "cp1251"):
        try:
            return raw.decode(enc)
        except UnicodeDecodeError:
            pass
    return raw.decode("utf-8", errors="replace")

def strip_js_comments(text):
    """Убирает // и /* */ комментарии, не трогая строки; переводы строк
    внутри блочных комментариев сохраняются (якоря ^ остаются на местах)."""
    def repl(m):
        if m.group(1) is not None:
            return m.group(1)
        return "\n" * m.group(0).count("\n")
    return JS_TOKEN_RE.sub(repl, text)

def git_available(src):
    try:
        r = subprocess.run(["git", "-C", src, "rev-parse", "--is-inside-work-tree"],
                           capture_output=True, text=True)
        return r.returncode == 0 and r.stdout.strip() == "true"
    except FileNotFoundError:
        return False

@lru_cache(maxsize=None)
def git_shallow(src):
    result = subprocess.run(["git", "-C", src, "rev-parse", "--is-shallow-repository"],
                            capture_output=True, text=True)
    return result.returncode == 0 and result.stdout.strip() == "true"

@lru_cache(maxsize=None)
def lastmod(src, rel, use_git):
    full = os.path.join(src, rel)
    if use_git and git_shallow(src):
        # В Actions checkout с fetch-depth=1 git log ошибочно приписывает
        # всем файлам дату текущего коммита. Лучше не указывать lastmod.
        return None
    if use_git:
        dirty = subprocess.run(["git", "-C", src, "status", "--porcelain", "--", rel],
                               capture_output=True, text=True).stdout.strip()
        if not dirty:
            d = subprocess.run(["git", "-C", src, "log", "-1", "--format=%cs", "--", rel],
                               capture_output=True, text=True).stdout.strip()
            if d:
                return d
    return datetime.date.fromtimestamp(os.path.getmtime(full)).isoformat()

def collect_pages(src):
    pages = []  # (rel_path, url_path)
    for d in SCAN_DIRS:
        folder = os.path.join(src, d) if d else src
        if not os.path.isdir(folder):
            continue
        for name in sorted(os.listdir(folder)):
            if not name.lower().endswith(".html"):
                continue
            rel = f"{d}/{name}" if d else name
            if rel in EXCLUDE:
                continue
            if not os.path.isfile(os.path.join(src, rel)):
                continue
            url = "/" if rel == "index.html" else "/" + rel
            pages.append((rel, url))
    pages.sort(key=lambda p: p[1] != "/")  # главная первой, остальной порядок сохраняется
    return pages

def collect_start_codes(src):
    codes = set()
    candidates = []
    for d in SCAN_DIRS:
        folder = os.path.join(src, d) if d else src
        if os.path.isdir(folder):
            candidates += [os.path.join(folder, n) for n in os.listdir(folder)
                           if n.lower().endswith(".html")]
    js = os.path.join(src, "js")
    if os.path.isdir(js):
        candidates += [os.path.join(js, n) for n in os.listdir(js) if n.endswith(".js")]
    for p in candidates:
        codes.update(START_RE.findall(read_text(p)))
    starts_js = os.path.join(src, "js", "starts.js")
    if os.path.isfile(starts_js):
        known = set(STARTS_KEY_RE.findall(strip_js_comments(read_text(starts_js))))
        unknown = sorted(codes - known)
        if unknown:
            print("Пропущены коды, которых нет в js/starts.js: " + ", ".join(unknown))
        codes &= known
    return sorted(codes)

def collect_event_ids(src):
    """Коды событий из календарей, которые подключает event.html,
    в порядке файлов и записей. Возвращает (ids, dups), где dups —
    {id: [файлы]} для кодов, встречающихся больше одного раза."""
    page = os.path.join(src, EVENT_PAGE)
    if not os.path.isfile(page):
        return [], {}
    where = defaultdict(list)
    for name in CALENDAR_SCRIPT_RE.findall(read_text(page)):
        path = os.path.join(src, "js", name)
        if not os.path.isfile(path):
            print(f"{EVENT_PAGE} подключает js/{name}, но такого файла нет")
            continue
        for m in EVENT_ID_RE.finditer(strip_js_comments(read_text(path))):
            where[m.group(2)].append(name)
    dups = {i: f for i, f in where.items() if len(f) > 1}
    return list(where), dups

def check_event_links(src, known):
    """Ссылки event.html?id=... в *.html, для которых нет события."""
    known = set(known)
    bad = defaultdict(set)
    for d in SCAN_DIRS:
        folder = os.path.join(src, d) if d else src
        if not os.path.isdir(folder):
            continue
        for name in sorted(os.listdir(folder)):
            if not name.lower().endswith(".html"):
                continue
            rel = f"{d}/{name}" if d else name
            for code in EVENT_LINK_RE.findall(read_text(os.path.join(folder, name))):
                if code not in known:
                    bad[code].add(rel)
    return bad

def data_lastmod(src, rel, html, use_git):
    """Дата изменения HTML или подключённых им файлов данных (но не библиотек)."""
    dates = [lastmod(src, rel, use_git)]
    for name in set(SCRIPT_RE.findall(html)):
        if not DATA_SCRIPTS_RE.match(name):
            continue
        path = os.path.join(src, "js", name)
        if os.path.isfile(path):
            dates.append(lastmod(src, f"js/{name}", use_git))
    return max((d for d in dates if d), default=None)


def js_matching_end(text, pos, opening, closing):
    """Закрывающая скобка с учётом строк и вложенных скобок JS."""
    depth = 0
    i = pos
    while i < len(text):
        c = text[i]
        if c in "\"'`":
            quote_char = c
            i += 1
            while i < len(text):
                if text[i] == "\\":
                    i += 2
                elif text[i] == quote_char:
                    i += 1
                    break
                else:
                    i += 1
            continue
        if c == opening:
            depth += 1
        elif c == closing:
            depth -= 1
            if depth == 0:
                return i + 1
        i += 1
    return None


def map_records(text):
    """Верхнеуровневые объекты массивов *Maps; не цепляет вложенные url."""
    text = strip_js_comments(text)
    for m in MAP_ARRAY_RE.finditer(text):
        i = m.end()
        while i < len(text):
            while i < len(text) and text[i] in " \r\n\t,":
                i += 1
            if i >= len(text) or text[i] == "]":
                break
            if text[i] != "{":
                # Нетипичный элемент массива: не принимаем его за карту.
                end = text.find(",", i)
                if end < 0:
                    break
                i = end + 1
                continue
            end = js_matching_end(text, i, "{", "}")
            if end is None:
                break
            yield text[i:end]
            i = end


def collect_map_and_author_urls(src):
    """Только реальные карты, подключённые к map-info*.html, и авторы этих карт."""
    sources = set()
    for page in MAP_INFO_PAGES:
        path = os.path.join(src, page)
        if os.path.isfile(path):
            sources.update(name for name in SCRIPT_RE.findall(read_text(path))
                           if name.startswith("maps-") and name.endswith(".js"))

    authors_path = os.path.join(src, "js", "authors.js")
    known_authors = (set(AUTHOR_KEY_RE.findall(strip_js_comments(read_text(authors_path))))
                     if os.path.isfile(authors_path) else set())
    maps = set()
    used_authors = set()
    for name in sorted(sources):
        path = os.path.join(src, "js", name)
        if not os.path.isfile(path):
            print(f"Файл данных для карт не найден: js/{name}")
            continue
        for record in map_records(read_text(path)):
            m = MAP_URL_RE.search(record)
            if not m:
                continue
            url = m.group(2).split("?", 1)[0].split("#", 1)[0]
            filename = PurePosixPath(url).name
            code = filename.rsplit(".", 1)[0] if "." in filename else ""
            if not code:
                continue
            start = MAP_START_RE.search(record)
            is_kkm = (start is not None and start.group(2) == "KKM") or "KKM" in url
            page = MAP_INFO_PAGES[1] if is_kkm else MAP_INFO_PAGES[0]
            if os.path.isfile(os.path.join(src, page)):
                maps.add(f"/{page}?map={quote(code, safe=EVENT_ID_SAFE)}")
            for author in MAP_AUTHOR_RE.findall(record):
                used_authors.update(AUTHOR_CODE_RE.findall(author))

    if os.path.isfile(os.path.join(src, AUTHOR_PAGE)):
        authors = {f"/{AUTHOR_PAGE}?author={quote(code, safe=EVENT_ID_SAFE)}"
                   for code in used_authors & known_authors}
    else:
        authors = set()
    return sorted(maps), sorted(authors)


def build_sitemap(src, use_git):
    entries = []   # (url, lastmod or None)
    titles = defaultdict(list)
    skipped_noindex = []
    for rel, url in collect_pages(src):
        text = read_text(os.path.join(src, rel))
        if NOINDEX_RE.search(text):
            skipped_noindex.append(rel)
            continue
        m = TITLE_RE.search(text)
        title = re.sub(r"\s+", " ", m.group(1)).strip() if m else ""
        titles[title].append(url)
        entries.append((url, data_lastmod(src, rel, text, use_git)))
    codes = collect_start_codes(src)
    start_urls = [f"/{page}?start={c}" for page in START_PAGES for c in codes]
    entries += [(u, None) for u in start_urls]
    event_ids, event_dups = collect_event_ids(src)
    event_urls = [f"/{EVENT_PAGE}?id={quote(i, safe=EVENT_ID_SAFE)}" for i in event_ids]
    entries += [(u, None) for u in event_urls]
    bad_links = check_event_links(src, event_ids) if event_ids else {}
    map_urls, author_urls = collect_map_and_author_urls(src)
    entries += [(u, None) for u in map_urls + author_urls]
    lines = ['<?xml version="1.0" encoding="UTF-8"?>',
             '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for url, lm in entries:
        lines.append("  <url>")
        lines.append(f"    <loc>{escape(BASE + url)}</loc>")
        if lm:
            lines.append(f"    <lastmod>{lm}</lastmod>")
        lines.append("  </url>")
    lines.append("</urlset>")
    return (lines, entries, titles, skipped_noindex, start_urls,
            event_urls, event_dups, bad_links, map_urls, author_urls)

def build_robots():
    lines = ["User-agent: *"]
    lines += [f"Disallow: {p}" for p in DISALLOW]
    lines += ["", "User-agent: Yandex"]
    lines += [f"Disallow: {p}" for p in DISALLOW]
    lines += [f"Clean-param: {p}" for p in CLEAN_PARAMS]
    lines += ["", f"Sitemap: {BASE}/sitemap.xml"]
    return lines


def newline_of(path):
    if os.path.exists(path):
        return "\r\n" if b"\r\n" in open(path, "rb").read() else "\n"
    return "\n"

def write_if_changed(path, lines, dry_run):
    nl = newline_of(path)
    data = (nl.join(lines) + nl).encode("utf-8")
    old = open(path, "rb").read() if os.path.exists(path) else None
    if old == data:
        return False
    if not dry_run:
        with open(path, "wb") as f:
            f.write(data)
    return True

def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--src", default=".", help="корень сайта (по умолчанию .)")
    ap.add_argument("-n", "--dry-run", action="store_true", help="только показать, ничего не писать")
    ap.add_argument("--zip", nargs="?", const="o-maps-sitemap.zip", metavar="FILE",
                    help="упаковать изменённые файлы (по умолчанию o-maps-sitemap.zip)")
    ap.add_argument("-v", "--verbose", action="store_true", help="вывести список URL")
    args = ap.parse_args()
    src = os.path.abspath(args.src)
    if not os.path.isfile(os.path.join(src, "index.html")):
        sys.exit(f"В {src} нет index.html — это точно корень сайта?")

    use_git = git_available(src)
    if use_git and git_shallow(src):
        print("Внимание: неполная история git (shallow checkout). Для точного lastmod "
              "укажите fetch-depth: 0 в actions/checkout; пока lastmod не выводится.")
    (sm_lines, entries, titles, noindex, start_urls,
     event_urls, event_dups, bad_links, map_urls, author_urls) = build_sitemap(src, use_git)
    rb_lines = build_robots()
    print(f"Страниц: {len(entries) - len(start_urls) - len(event_urls) - len(map_urls) - len(author_urls)}, "
          f"стартов: {len(start_urls)}, событий: {len(event_urls)}, "
          f"карт: {len(map_urls)}, авторов: {len(author_urls)}, "
          f"всего URL: {len(entries)}  (lastmod: {'git' if use_git else 'mtime'})")
    if event_dups:
        print("\nid встречается в календарях несколько раз (event.html покажет первую запись):")
        for i, files in sorted(event_dups.items()):
            print(f"  {i}: " + ", ".join(files))
    if bad_links:
        print("\nСсылки на несуществующие события:")
        for code, pages in sorted(bad_links.items()):
            print(f"  {code}: " + ", ".join(sorted(pages)))
    if noindex:
        print("Пропущены (noindex): " + ", ".join(noindex))
    if args.verbose:
        for url, lm in entries:
            print(f"  {lm or '          '}  {url}")
    dups = {t: u for t, u in titles.items() if len(u) > 1}
    if dups:
        print("\nОдинаковый <title> у нескольких страниц (стоит сделать уникальным):")
        for t, urls in sorted(dups.items(), key=lambda x: -len(x[1])):
            print(f"  «{t or '(пусто)'}»: " + ", ".join(urls))
    if start_urls or event_urls:
        print(f"\nВнимание: {len(start_urls) + len(event_urls)} адресов start.html?start=..., "
              "start-details.html?start=... и event.html?id=... отдают одинаковые "
              "title/description в статическом HTML (заполняются скриптом).")
    changed = []
    for name, lines in (("sitemap.xml", sm_lines), ("robots.txt", rb_lines)):
        if write_if_changed(os.path.join(src, name), lines, args.dry_run):
            changed.append(name)

    mode = "будут изменены" if args.dry_run else "изменены"
    print(f"\nФайлы {mode}: {', '.join(changed) if changed else 'нет (всё актуально)'}")
    if args.zip and changed and not args.dry_run:
        with zipfile.ZipFile(args.zip, "w", zipfile.ZIP_DEFLATED) as z:
            for name in changed:
                z.write(os.path.join(src, name), name)
        print(f"Архив: {os.path.abspath(args.zip)}")


if __name__ == "__main__":
    main()
