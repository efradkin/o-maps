#!/usr/bin/env python3
"""Добавляет в статью раздела «История» (history/*-history.html) карту мест.

Правит файл на месте; повторный запуск ничего не меняет.
  1. раздел «Места на карте» (section#places) сразу после оглавления nav.hist-toc;
  2. пункт «Места на карте» в оглавлении — после «Вступления»;
  3. «Главные районы» в блоке фактов — ссылка на #places;
  4. значок 📍 после каждого упоминания точки: ссылки на события и карты в тексте раздела
     и в иллюстрациях (не в блоке фактов и ленте вех); упоминания в иллюстрации — ссылка-картинка
     и ссылки в подписи — дают один значок на точку в конце подписи (перед строкой источника
     hist-credit) через неразрывный пробел; id значка — pl-<точка>-<раздел>, у повторов в том же
     разделе добавляется -2, -3…;
  5. подключение данных и вызов initHistoryPlacesMap перед welcome.js.

Использование:
  python3 apply_places_html.py FILE.html --config spb-history.json --link-points link-points.json --poi-js js/history-spb-poi.js [-n]

  --config FILE        JSON с настройками статьи (как у build_points.py): из него берутся
                       var (имя переменной данных), home_page (раздел сайта для ссылки «карта календаря»)
                       и places_options (необязательно: второй аргумент initHistoryPlacesMap, JS-литерал)

  FILE.html            статья; правится на месте
  --link-points FILE   JSON «ключ события/карты -> id точки» из build_points.py
  --poi-js FILE        файл данных мест (из него берутся названия точек для подсказок)
  -n, --dry-run        только показать, что будет сделано
  -h, --help           эта справка
"""
import argparse
import html
import json
import re
import sys

SECTION = '''        <section class="hist-section clearfix" id="places">
            <h2>Места на карте</h2>
            <p>
                Где проходили соревнования, о которых рассказывает статья. Точка стоит там же, где событие
                на <a href="../{home}.html">карте календаря O-Maps</a>&nbsp;— в его координатах или в центре его карты,
                поэтому у многодневных стартов точек несколько. Цвет точки показывает, когда место впервые
                появляется в статье, число в кружке&nbsp;— сколько рядом точек. Значок 📍 в тексте ведёт
                к месту на этой карте.
            </p>
            <div aria-label="Карта мест статьи" class="hist-map" id="places-map" role="region"></div>
            <ul aria-label="Цвет точки — время первого упоминания места в статье" class="hist-map-legend" id="places-legend"></ul>
            <details class="hist-places">
                <summary>Все места списком</summary>
                <ul class="hist-places-list" id="places-list"></ul>
            </details>
        </section>

'''
TOC_ITEM = '                <li><a href="#places" target="_self">Места на карте</a></li>\n'
SCRIPTS = ('<script src="../{js}?v=1"></script>\n'
           '<script>initHistoryPlacesMap({var}{opts});</script>\n')
PIN = '📍'
SKIP_SECTIONS = {'places', 'sources', 'names'}


def main():
    ap = argparse.ArgumentParser(description=__doc__.split('\n')[0])
    ap.add_argument('file')
    ap.add_argument('--link-points', required=True)
    ap.add_argument('--poi-js', required=True)
    ap.add_argument('--config', required=True)
    ap.add_argument('-n', '--dry-run', action='store_true')
    args = ap.parse_args()
    cfg = json.load(open(args.config, encoding='utf-8'))
    section = SECTION.replace('{home}', cfg['home_page'])
    js_path = args.poi_js.replace('\\', '/').split('js/', 1)[-1]
    scripts = SCRIPTS.format(js='js/' + js_path, var=cfg['var'],
                             opts=(', ' + cfg['places_options']) if cfg.get('places_options') else '')

    src = open(args.file, encoding='utf-8', newline='').read()
    out = src
    link_points = json.load(open(args.link_points, encoding='utf-8'))
    data = open(args.poi_js, encoding='utf-8').read()
    names = dict(re.findall(r"id: '([^']+)',\n\s*coord: [^\n]*\n\s*name: '((?:[^'\\]|\\.)*)'", data))
    names = {k: v.replace("\\'", "'") for k, v in names.items()}
    done = []

    # 1. раздел после оглавления
    if 'id="places"' not in out:
        toc_end = out.index('</nav>', out.index('class="hist-toc"')) + len('</nav>\n\n')
        assert out[toc_end:].lstrip().startswith('<section'), 'после оглавления ожидается раздел статьи'
        out = out[:toc_end] + section + out[toc_end:]
        done.append('раздел #places')
    # 2. пункт оглавления
    if 'href="#places" target="_self">Места на карте' not in out:
        intro = re.search(r' *<li><a href="#intro" target="_self"[^>]*>Вступление</a></li>\n', out)
        out = out[:intro.end()] + TOC_ITEM + out[intro.end():]
        done.append('пункт оглавления')
    # 3. «Главные районы» -> ссылка на карту
    if '<dt>Главные районы</dt>' in out:
        out = out.replace('<dt>Главные районы</dt>',
                          '<dt><a href="#places" target="_self" title="Места на карте">Главные районы</a></dt>', 1)
        done.append('ссылка «Главные районы»')
    # 4. значки 📍
    pins = 0
    pieces, pos = [], 0
    for sm in re.finditer(r'<section\b[^>]*\bid="([^"]+)"[^>]*>(.*?)</section>', out, re.S):
        sid = sm.group(1)
        if sid in SKIP_SECTIONS:
            continue
        body_start = sm.start(2)
        body = sm.group(2)
        excluded = [(m.start(), m.end()) for m in re.finditer(
            r'<dl class="hist-facts">.*?</dl>|<ol aria-label="Вехи по годам".*?</ol>', body, re.S)]
        figures = [(m.start(), m.end()) for m in re.finditer(r'<figure\b.*?</figure>', body, re.S)]
        seen = set()                          # (точка, иллюстрация) — один значок на подпись
        count = {}                            # точка -> сколько значков уже в разделе
        inserts = []                          # (позиция в body, вставляемый текст)
        for a in re.finditer(r'<a\b([^>]*)>(.*?)</a>', body, re.S):
            if any(s <= a.start() < e for s, e in excluded):
                continue
            href = re.search(r'href="([^"]+)"', a.group(1))
            if not href:
                continue
            key = re.search(r'(?:event\.html\?id=|map-info\.html\?map=)([^"&#]+)', href.group(1))
            if not key or key.group(1) not in link_points:
                continue
            pid = link_points[key.group(1)]
            anchor = 'place-' + pid.lower()
            # упоминание в <figure> (картинка или подпись): значок — в конце подписи (перед строкой источника)
            fig = next(((s, e) for s, e in figures if s <= a.start() < e), None)
            if fig and (pid, fig) in seen:
                continue
            seen.add((pid, fig))
            count[pid] = count.get(pid, 0) + 1
            suffix = '' if count[pid] == 1 else f'-{count[pid]}'
            cap = re.search(r'<figcaption>(.*?)</figcaption>', body[fig[0]:fig[1]], re.S) if fig else None
            if cap:
                cap_start, cap_end = fig[0] + cap.start(1), fig[0] + cap.end(1)
                if f'class="hist-place-pin" href="#{anchor}"' in body[cap_start:cap_end]:
                    continue                  # уже есть (повторный запуск)
                credit = body.find('<span class="hist-credit">', cap_start, cap_end)
                at = credit if credit >= 0 else cap_end
                while at > cap_start and body[at - 1] in ' \t\r\n':
                    at -= 1                   # значок — к последнему слову подписи
                glue = '&nbsp;'
            else:
                if body[a.end():a.end() + 40].startswith('<a class="hist-place-pin"'):
                    continue                  # уже есть (повторный запуск)
                at, glue = a.end(), ''
            title = html.escape(names.get(pid, ''), quote=True) + ' — на карте мест'
            pin = (f'<a class="hist-place-pin" href="#{anchor}" id="pl-{pid.lower()}-{sid}{suffix}" '
                   f'target="_self" title="{title}" aria-label="{title}">{PIN}</a>')
            inserts.append((at, glue + pin))
            pins += 1
        if inserts:
            new_body = body
            for at, text in sorted(inserts, key=lambda x: x[0], reverse=True):
                new_body = new_body[:at] + text + new_body[at:]
            pieces.append((body_start, body_start + len(body), new_body))
    for s, e, text in reversed(pieces):
        out = out[:s] + text + out[e:]
    if pins:
        done.append(f'значков 📍: {pins}')
    # 5. скрипты
    if 'initHistoryPlacesMap(' not in out:
        anchor = '<script src="../js/welcome.js'
        i = out.index(anchor)
        out = out[:i] + scripts + out[i:]
        done.append('скрипты карты')

    print(args.file + ': ' + (', '.join(done) if done else 'изменений нет') + (' (пробный запуск)' if args.dry_run else ''))
    if not args.dry_run and out != src:
        open(args.file, 'w', encoding='utf-8', newline='').write(out)


if __name__ == '__main__':
    sys.exit(main())
