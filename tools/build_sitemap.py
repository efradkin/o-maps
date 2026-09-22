#!/usr/bin/env python3
"""
build_sitemap.py — генерирует sitemap.xml и robots.txt в корне сайта o-maps.spb.ru.

Что попадает в sitemap:
  * все *.html из корня, help/ и integration/ (без рекурсии),
    кроме EXCLUDE и страниц с <meta name="robots" content="noindex">;
  * index.html публикуется как "/";
  * start.html?start=<КОД> для каждого кода, на который есть ссылка
    в *.html или js/*.js (список не выдумывается, берётся из ссылок).

lastmod: дата последнего коммита файла (git); если файл изменён и не
закоммичен или git недоступен — дата mtime. Для start.html?start=... lastmod
не ставится.

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
from xml.sax.saxutils import escape

BASE = "https://o-maps.spb.ru"

SCAN_DIRS = ["", "help", "integration"]

# Служебные страницы и шаблоны, которым нужен параметр (без него пустые).
EXCLUDE = {
    "theme-preview.html",
    "map-info.html",
    "map-info-kkm.html",
    "start.html",
}

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
    # фильтры: своего адреса в поиске у них нет
    "type&track-type&track-month&restricted&tracks&retro&ocad&orders&order-status",
    "wo-author&only-wo-author&only-wo-full&all-years&year&startYear&calendar&event-type",
    "owner&planner&region&poi&oopt&me&only-me&q",
]
# map, start и author в Clean-param не добавляются: это адреса
# самостоятельных страниц (map-info*.html, start.html, sheet-all.html).

START_RE = re.compile(r"start\.html\?start=([A-Za-z0-9_]+)")
NOINDEX_RE = re.compile(
    r"<meta[^>]+name\s*=\s*[\"']robots[\"'][^>]*content\s*=\s*[\"'][^\"']*noindex",
    re.I,
)
TITLE_RE = re.compile(r"<title[^>]*>(.*?)</title>", re.I | re.S)


def read_text(path):
    raw = open(path, "rb").read()
    for enc in ("utf-8-sig", "cp1251"):
        try:
            return raw.decode(enc)
        except UnicodeDecodeError:
            pass
    return raw.decode("utf-8", errors="replace")


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
    return sorted(codes)


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
    start_urls = [f"/start.html?start={c}" for c in collect_start_codes(src)]
    entries += [(u, None) for u in start_urls]

    lines = ['<?xml version="1.0" encoding="UTF-8"?>',
             '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for url, lm in entries:
        lines.append("  <url>")
        lines.append(f"    <loc>{escape(BASE + url)}</loc>")
        if lm:
            lines.append(f"    <lastmod>{lm}</lastmod>")
        lines.append("  </url>")
    lines.append("</urlset>")
    return lines, entries, titles, skipped_noindex, start_urls


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
    sm_lines, entries, titles, noindex, start_urls = build_sitemap(src, use_git)
    rb_lines = build_robots()

    print(f"Страниц: {len(entries) - len(start_urls)}, стартов: {len(start_urls)}, "
          f"всего URL: {len(entries)}  (lastmod: {'git' if use_git else 'mtime'})")
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
    if start_urls:
        print(f"\nВнимание: {len(start_urls)} адресов start.html?start=... пока отдают "
              "одинаковые title/description (заполняются скриптом).")

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
