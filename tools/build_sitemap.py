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

Проверки (только сообщения, данные не правятся):
  * id, который встречается в календарях больше одного раза;
  * ссылки event.html?id=... в *.html на несуществующие события.

lastmod: дата последнего коммита файла (git); если файл изменён и не
закоммичен или git недоступен — дата mtime. Для start.html?start=...,
start-details.html?start=... и event.html?id=... lastmod не ставится:
дата правки файла данных не говорит о том, что изменилась именно эта
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


def lastmod(src, rel, use_git):
    full = os.path.join(src, rel)
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
        entries.append((url, lastmod(src, rel, use_git)))
    codes = collect_start_codes(src)
    start_urls = [f"/{page}?start={c}" for page in START_PAGES for c in codes]
    entries += [(u, None) for u in start_urls]
    event_ids, event_dups = collect_event_ids(src)
    event_urls = [f"/{EVENT_PAGE}?id={quote(i, safe=EVENT_ID_SAFE)}" for i in event_ids]
    entries += [(u, None) for u in event_urls]
    bad_links = check_event_links(src, event_ids) if event_ids else {}

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
            event_urls, event_dups, bad_links)


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
    (sm_lines, entries, titles, noindex, start_urls,
     event_urls, event_dups, bad_links) = build_sitemap(src, use_git)
    rb_lines = build_robots()

    print(f"Страниц: {len(entries) - len(start_urls) - len(event_urls)}, "
          f"стартов: {len(start_urls)}, событий: {len(event_urls)}, "
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
