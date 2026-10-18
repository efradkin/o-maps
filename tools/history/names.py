#!/usr/bin/env python3
"""Нормализует ссылки на людей в history/spb-history.html и обновляет указатель имён.

Использование: python3 names.py ARTICLE.html [--sections ID,ID…] [-n]
  - id упоминаний nmN-k перенумеровываются по порядку в документе (k с 1);
  - в разделах из --sections первое упоминание человека в тексте — обычная ссылка, повторы — class="hist-quiet";
    каждая подпись к иллюстрации (figcaption) считается отдельно; в остальных разделах класс не трогается;
  - в указателе (details#names-details) строка цифр каждого человека пересобирается:
    <a href="#nmN-k" target="_self" title="Заголовок раздела[ (подпись к иллюстрации)]">k</a>.
  --sections   id разделов, где расставлять hist-quiet (по умолчанию — ни одного)
  -n           только показать изменения
"""
import html
import re
import sys

art = sys.argv[1]
dry = '-n' in sys.argv
only = set(sys.argv[sys.argv.index('--sections') + 1].split(',')) if '--sections' in sys.argv else set()
src = open(art, encoding='utf-8', newline='').read()
names_at = src.index('<section class="hist-section clearfix" id="names">')
body, tail = src[:names_at], src[names_at:]

A = re.compile(r'<a id="nm(\d+)-(\d+)"( class="hist-quiet")?( [^>]*)?>')
sections = [(m.start(), m.end(), m.group(1), m.group(2)) for m in
            re.finditer(r'<section\b[^>]*\bid="([^"]+)"[^>]*>(.*?)</section>', body, re.S)]
captions = [(m.start(), m.end()) for m in re.finditer(r'<figcaption>.*?</figcaption>', body, re.S)]


def h2(text):
    m = re.search(r'<h2>(.*?)</h2>', text, re.S)
    return html.unescape(re.sub(r'<[^>]+>', '', m.group(1))).replace('\xa0', ' ').strip()


counter, seen, refs, out, pos = {}, set(), {}, [], 0
for m in A.finditer(body):
    n = m.group(1)
    sec = next(x for x in sections if x[0] <= m.start() < x[1])
    cap = next((c for c in captions if c[0] <= m.start() < c[1]), None)
    scope = (sec[2], cap)
    counter[n] = counter.get(n, 0) + 1
    k = counter[n]
    quiet = (n, scope) in seen if sec[2] in only else bool(m.group(3))
    seen.add((n, scope))
    title = h2(sec[3]) + (' (подпись к иллюстрации)' if cap else '')
    refs.setdefault(n, []).append((k, title))
    out.append(body[pos:m.start()])
    out.append(f'<a id="nm{n}-{k}"' + (' class="hist-quiet"' if quiet else '') + (m.group(4) or '') + '>')
    pos = m.end()
out.append(body[pos:])
new_body = ''.join(out)


def refs_html(n):
    return ' '.join(f'<a href="#nm{n}-{k}" target="_self" title="{html.escape(t, quote=True)}">{k}</a>' for k, t in refs[n])


def fix_li(m):
    li = m.group(0)
    n = re.search(r'href="#nm(\d+)-\d+"', li)
    if not n:
        raise SystemExit('нет ссылок у записи: ' + li[:120])
    n = n.group(1)
    if n not in refs:
        raise SystemExit(f'человек nm{n} больше не упоминается: ' + li[:120])
    return re.sub(r'<span class="hist-names-refs">.*?</span>', '<span class="hist-names-refs">' + refs_html(n) + '</span>', li, flags=re.S)


start = tail.index('<ul class="hist-names-list">')
end = tail.index('</ul>', start)
new_list = re.sub(r'<li>.*?</li>', fix_li, tail[start:end], flags=re.S)
listed = set(re.findall(r'href="#nm(\d+)-', new_list))
missing = sorted(set(refs) - listed, key=int)
if missing:
    raise SystemExit('нет в указателе: ' + ', '.join('nm' + x for x in missing))
new = new_body + tail[:start] + new_list + tail[end:]
changed = sum(1 for a, b in zip(re.findall(r'<a id="nm[^>]*>', src), re.findall(r'<a id="nm[^>]*>', new)) if a != b)
print(f'{art}: упоминаний {sum(counter.values())}, людей {len(counter)}, изменённых тегов {changed}'
      + (' (пробный запуск)' if dry else ''))
if not dry and new != src:
    open(art, 'w', encoding='utf-8', newline='').write(new)
