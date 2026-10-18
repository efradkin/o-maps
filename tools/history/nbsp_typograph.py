#!/usr/bin/env python3
"""Неразрывные пробелы в тексте HTML-статьи (history/*.html).

Правит файл на месте; меняются только текстовые узлы внутри <body>.
Атрибуты (alt, title, href…), <script>, <style> и <head> не трогаются.
Скрипт идемпотентен: повторный запуск ничего не меняет.

Правила (обычный пробел, перевод строки или их серия -> &nbsp;):
  initials   инициал и следующее слово: «Н.&nbsp;В.&nbsp;Благово», «А.&nbsp;Муравьёв»
             (буква после дефиса, как в «MTB-O.», инициалом не считается);
  number     число и следующее слово со строчной буквы: «1959&nbsp;года», «12&nbsp;км²»,
             «5,7&nbsp;км», кроме союзов и предлогов (и, в, при, или, со, ко, а, на, с, по, к,
             у, о, до, от, из, за); число, приклеенное к букве, «:» или «/» («Ж70», «1:20 000»,
             «2025/26»), со следующим словом не связывается;
  thousands  разряды числа: «5&nbsp;000», «3&nbsp;613», «1:100&nbsp;000»;
  numero     знак номера и число: «№&nbsp;2»;
  dash       пробел перед длинным тире после слова: «Ленинград&nbsp;— …»;
  hyphen     слово с дефисом и числом («СДЮШОР-2», «кросс-3», «Ленинград-2») оборачивается
             в <span class="text-nowrap"> (класс Bootstrap), чтобы не переносилось по дефису.

Инлайновые теги (a, span, small, em, strong, b, i, abbr, sup, sub, cite, q, time,
mark, bdi) для правил прозрачны: «1959</a> года» тоже получит &nbsp;. Остальные
теги — граница: через них правила не действуют. Серия пробелов, разорванная тегом,
не заменяется, а попадает в отчёт как подозрительная.

Использование:
  python3 nbsp_typograph.py FILE.html [-n] [--report REPORT.txt]

  FILE.html          файл статьи; правится на месте
  -n, --dry-run      только показать статистику и выборку, файл не менять
  --report FILE      записать полный список замен с контекстом (в UTF-8)
  --sample N         сколько примеров на правило показать в консоли (по умолчанию 6)
  -h, --help         эта справка
"""
import argparse
import random
import re
import sys

INLINE = {'a', 'span', 'small', 'em', 'strong', 'b', 'i', 'abbr', 'sup', 'sub',
          'cite', 'q', 'time', 'mark', 'bdi'}
STOP = r'(?:и|в|при|или|со|ко|а|на|с|по|к|у|о|до|от|из|за)(?!\w)'
WS = r'[ \t\r\n]+'
NBSP = '&nbsp;'

RULES = [
    ('initials',  re.compile(r'(?<![\w.\-])[А-ЯЁA-Z]\.(' + WS + r')(?=[А-ЯЁA-Z])')),
    ('number',    re.compile(r'(?<![\w:/.,])(?<!\d )(?<!\d&nbsp;)(?:\d{1,3}(?:(?: |&nbsp;)\d{3})+|\d+(?:[.,]\d+)?)('
                             + WS + r')(?!' + STOP + r')(?=[а-яёa-z])')),
    ('thousands', re.compile(r'(?<!\d)\d{1,3}(' + WS + r')(?=\d{3}(?!\d))')),
    ('numero',    re.compile(r'№(' + WS + r')(?=\d)')),
    ('dash',      re.compile(r'[^\s\x00](' + WS + r')(?=—)')),
]
HYPHEN = re.compile(r'(?<![\w-])[А-ЯЁа-яёA-Za-z]+-\d+(?![\w-])')
NOWRAP_OPEN = '<span class="text-nowrap">'

TOKEN = re.compile(r'<!--.*?-->|<(script|style)\b.*?</\1\s*>|<[^>]+>', re.S | re.I)


def tokenize(html):
    """[(kind, start, end)]: kind = 'text' | 'inline' | 'hard'."""
    out, pos = [], 0
    for m in TOKEN.finditer(html):
        if m.start() > pos:
            out.append(('text', pos, m.start()))
        tag = m.group(0)
        name = re.match(r'</?([a-zA-Z0-9]+)', tag)
        kind = 'inline' if name and name.group(1).lower() in INLINE else 'hard'
        out.append((kind, m.start(), m.end()))
        pos = m.end()
    if pos < len(html):
        out.append(('text', pos, len(html)))
    return out


def build_view(html, tokens):
    """Текст для правил: инлайновые теги вырезаны, прочие -> \\x00.
    pos[i] — позиция символа view[i] в html (или -1 для \\x00); seg[i] — номер узла."""
    chars, pos, seg = [], [], []
    for n, (kind, s, e) in enumerate(tokens):
        if kind == 'text':
            chars.append(html[s:e]); pos.extend(range(s, e)); seg.extend([n] * (e - s))
        elif kind == 'hard':
            chars.append('\x00'); pos.append(-1); seg.append(-1)
    return ''.join(chars), pos, seg


def context(view, a, b, width=38):
    left = view[max(0, a - width):a]
    right = view[b:b + width]
    t = (left + '⍽' + right).replace('\x00', ' ¦ ')
    return re.sub(r'[ \t\r\n]+', ' ', t)


def main():
    ap = argparse.ArgumentParser(add_help=True, description=__doc__.split('\n')[0])
    ap.add_argument('file')
    ap.add_argument('-n', '--dry-run', action='store_true')
    ap.add_argument('--report')
    ap.add_argument('--sample', type=int, default=6)
    args = ap.parse_args()

    raw = open(args.file, 'rb').read()
    html = raw.decode('utf-8')
    b0 = html.index('<body')
    b1 = html.rindex('</body>')
    body = html[b0:b1]

    tokens = tokenize(body)
    view, pos, seg = build_view(body, tokens)

    edits = {}          # позиция в body -> (длина заменяемого, новый текст, правило)
    log = {name: [] for name, _ in RULES}
    log['hyphen'] = []
    suspicious = []

    for name, rx in RULES:
        for m in rx.finditer(view):
            a, b = m.span(1)
            segs = set(seg[a:b])
            if len(segs) != 1 or -1 in segs or any(pos[i + 1] != pos[i] + 1 for i in range(a, b - 1)):
                suspicious.append((name, context(view, a, b)))
                continue
            start = pos[a]
            if start in edits:
                continue
            edits[start] = (b - a, NBSP, name)
            log[name].append(context(view, a, b))

    for m in HYPHEN.finditer(view):
        a, b = m.span()
        segs = set(seg[a:b])
        if len(segs) != 1 or -1 in segs:
            suspicious.append(('hyphen', context(view, a, b)))
            continue
        s, e = pos[a], pos[b - 1] + 1
        if body[max(0, s - len(NOWRAP_OPEN)):s] == NOWRAP_OPEN:
            continue                                   # уже обёрнуто
        if any(s <= p < e for p in edits):
            suspicious.append(('hyphen', context(view, a, b)))
            continue
        word = body[s:e]
        edits[s] = (e - s, NOWRAP_OPEN + word + '</span>', 'hyphen')
        left = view[max(0, a - 38):a].replace('\x00', ' ¦ ')
        right = view[b:b + 38].replace('\x00', ' ¦ ')
        log['hyphen'].append(re.sub(r'[ \t\r\n]+', ' ', left + '⟦' + word + '⟧' + right))

    # применяем с конца, чтобы позиции не съезжали
    new_body = body
    for start in sorted(edits, reverse=True):
        length, text, _ = edits[start]
        new_body = new_body[:start] + text + new_body[start + length:]
    new_html = html[:b0] + new_body + html[b1:]

    # сначала запись файлов, потом вывод в консоль
    if args.report:
        with open(args.report, 'w', encoding='utf-8') as f:
            f.write(f'Неразрывные пробелы: {args.file}\n⍽ — место замены на &nbsp;; ⟦…⟧ — обёрнуто в text-nowrap; ¦ — граница блока\n')
            for name in log:
                f.write(f'\n== {name}: {len(log[name])}\n')
                for c in log[name]:
                    f.write(f'…{c}…\n')
            if suspicious:
                f.write(f'\n== подозрительные (не заменены): {len(suspicious)}\n')
                for name, c in suspicious:
                    f.write(f'[{name}] …{c}…\n')
    if not args.dry_run and new_html != html:
        open(args.file, 'wb').write(new_html.encode('utf-8'))

    total = sum(len(v) for v in log.values())
    changed = new_html != html
    note = ' (пробный запуск, файл не изменён)' if args.dry_run else ('' if changed else ' — изменений нет')
    print(f'{args.file}: замен {total}{note}')
    for name in log:
        print(f'  {name:10} {len(log[name]):4}')
    if suspicious:
        print(f'  подозрительные (не заменены): {len(suspicious)}')
        for name, c in suspicious:
            print(f'    [{name}] …{c}…')
    rnd = random.Random(1959)
    for name in log:
        if not log[name] or args.sample <= 0:
            continue
        print(f'\n  {name}: примеры')
        for c in rnd.sample(log[name], min(args.sample, len(log[name]))):
            print(f'    …{c}…')


if __name__ == '__main__':
    sys.exit(main())
