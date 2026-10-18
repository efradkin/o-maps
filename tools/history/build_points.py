#!/usr/bin/env python3
"""Собирает js/history-<код>-poi.js — точки карты мест статьи history/<код>-history.html.

Точка ставится так же, как событие календаря на карте сайта (createEventMarker в main.js):
  - событие с coord — в coord;
  - событие с картой (map) — в центр каждой своей карты;
  - ссылка статьи на карту (map-info.html?map=…) — в центр этой карты.
События с одинаковой точкой попадают в одну запись; соседние точки на карте склеивает
кластеризация, сами точки не объединяются.

Событие без coord и без карты присоединяется к точке по названию места: сначала к точке,
у которой то же полное название места (place события или название карты), иначе — к точке
с той же первой частью названия (до запятой). Из нескольких подходящих берётся точка
с наибольшим числом ссылок статьи, при равенстве — с самым ранним годом. Каждое такое
присоединение выводится в отчёт. Исключения задаются таблицей OVERRIDE.

Раздел сайта для ссылки «Карты района» (page): у точки-центра карты — раздел этой карты
(как mapLink в utils.js; считается в inventory.js). У точки по coord события или по
названию места — раздел региона событий точки (поле region события и region его
стартов: SPB — spb, MSK — moscow, PSKOV — pskov…; регион без своего раздела — all);
если региона нет — раздел ближайшей к точке карты архива не дальше 20 км; иначе all.
Если регионы событий одной точки ведут в разные разделы — all и строка в отчёте.

Использование:
  python3 build_points.py --config spb-history.json --links links.json --out js/history-spb-poi.js
                          [--report points.txt] [--poi js/poi.js] [--crlf] [--link-points link-points.json]

  --config FILE   JSON с настройками статьи: название, имя переменной, эпохи, таблицы исключений
                  (формат — в комментарии к CFG ниже; готовые: spb-history.json, russia-history.json)

  --links FILE    links.json из inventory.js (рядом должен лежать links-maps.json)
  --out FILE      куда записать файл данных
  --report FILE   отчёт: точки и источники, присоединения по названию, ссылки вне карты
  --poi FILE      js/poi.js — проверить, что id точек не совпадают с его id
Карта для наложения (overlay) — только содержащая точку маркера: своя карта точки-центра,
иначе карта события точки (первая по порядку в map), иначе выбранная в OVERLAY_FOR;
для остальных точек отчёт перечисляет карты, содержащие точку.
  --crlf          переводы строк CRLF (по умолчанию LF)
  --link-points FILE  записать JSON «ключ события/карты статьи -> id точки» (для значков 📍)
  -h, --help      эта справка
"""
import argparse
import json
import math
import re
import sys
from collections import OrderedDict, Counter

NEAR_KM = 20
# Настройки статьи — в JSON-файле --config (см. spb-history.json, russia-history.json):
#   title     — название статьи для шапки файла данных; article — путь статьи (history/…);
#   var       — имя переменной JS (historySpbPoi); home_page — раздел карты календаря для текста шапки;
#   eras      — [[последний год, подпись], …] — как options.eras у initHistoryPlacesMap (последний — null = ∞);
#   override  — событие или карта статьи -> ["skip", причина] | ["geo", lat, lng, источник, название]
#               | ["archive", файл карты] — точка в центре карты архива, найденной по названию места
#               | ["point", ключ точки] — к уже существующей точке;
#   poi_for   — точки, у которых есть запись-площадка в poi.js (ключ точки -> id POI);
#   overlay_for — карта для наложения у точек, где её нельзя определить однозначно (id точки -> файл карты);
#               карта должна содержать точку маркера — иначе скрипт остановится.
CFG = {}
ERAS = OVERRIDE = POI_FOR = OVERLAY_FOR = None

def inside(bounds, p):
    """Точка p внутри карты: bounds — [левый верх, правый верх, левый низ], как у
    L.imageOverlay.rotated, или два угла прямоугольника."""
    if len(bounds) < 3:
        la = sorted((bounds[0][0], bounds[1][0]))
        ln = sorted((bounds[0][1], bounds[1][1]))
        return la[0] <= p[0] <= la[1] and ln[0] <= p[1] <= ln[1]
    o, u, v = bounds[0], bounds[1], bounds[2]
    ux, uy, vx, vy = u[0] - o[0], u[1] - o[1], v[0] - o[0], v[1] - o[1]
    px, py = p[0] - o[0], p[1] - o[1]
    det = ux * vy - uy * vx
    if not det:
        return False
    a, c = (px * vy - py * vx) / det, (ux * py - uy * px) / det
    return 0 <= a <= 1 and 0 <= c <= 1


def km(a, b):
    la1, lo1, la2, lo2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    h = math.sin((la2 - la1) / 2) ** 2 + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2
    return 6371 * 2 * math.asin(math.sqrt(h))


def ru_place(place):
    """«Ventspils, Latvia (Вентспилс, Латвия)» -> «Вентспилс, Латвия»."""
    m = re.search(r'\(([^()]*)\)\s*$', place or '')
    if m and re.search(r'[A-Za-z]', (place or '').split('(')[0]):
        return m.group(1).strip()
    return (place or '').strip()


def base_of(place):
    return ru_place(place).split(',')[0].strip()


def jsq(s):
    return "'" + s.replace('\\', '\\\\').replace("'", "\\'") + "'"


def map_year(key, year):
    if year:
        return year
    m = re.search(r'_(\d{4})_\d{2}_\d{2}$', key)   # как для maps-starts-*.js: дата в имени файла
    return int(m.group(1)) if m else None


def main():
    ap = argparse.ArgumentParser(description=__doc__.split('\n')[0])
    ap.add_argument('--links', required=True)
    ap.add_argument('--out', required=True)
    ap.add_argument('--report')
    ap.add_argument('--poi')
    ap.add_argument('--crlf', action='store_true')
    ap.add_argument('--link-points', help='JSON: ключ события/карты статьи -> id точки (для значков в тексте)')
    ap.add_argument('--config', required=True, help='JSON с настройками статьи')
    args = ap.parse_args()
    global CFG, ERAS, OVERRIDE, POI_FOR, OVERLAY_FOR
    CFG = json.load(open(args.config, encoding='utf-8'))
    ERAS = [(lim if lim is not None else 9999, n) for lim, n in CFG['eras']]
    OVERRIDE = {k: tuple(v) for k, v in CFG.get('override', {}).items()}
    POI_FOR = CFG.get('poi_for', {})
    OVERLAY_FOR = CFG.get('overlay_for', {})

    rows = [r for r in json.load(open(args.links, encoding='utf-8')) if r['kind'] != 'poi']
    maps = {m['file']: m for m in json.load(open(args.links.replace('.json', '-maps.json'), encoding='utf-8'))}

    points = OrderedDict()      # ключ -> dict
    def point(key, coord, src, page):
        if key not in points:
            points[key] = dict(key=key, coord=coord, src=src, page=page, rows=[], names=Counter(), mapsInfo=[])
        return points[key]

    unresolved, skipped, joined, deferred = [], OrderedDict(), [], []
    conflicts = []              # точки, у событий которых регионы ведут в разные разделы
    overlay_choice, overlay_none = [], []   # нет однозначной карты: есть кандидаты / нет ни одной
    row_points = {}             # id(row) -> [ключи точек]
    # 1) точки по coord, картам событий и ссылкам на карты
    for r in rows:
        ov = OVERRIDE.get(r['key'])
        if ov and ov[0] == 'skip':
            skipped.setdefault(r['key'], (r, ov[1]))
            continue
        if ov and ov[0] == 'geo':
            p = point('G:' + r['key'], [ov[1], ov[2]], ov[3], None)
            p['names'][ov[4]] += 1
            row_points[id(r)] = [p['key']]
            continue
        if ov and ov[0] == 'archive':
            m = maps[ov[1]]
            p = point('M:' + ov[1], [round(x, 6) for x in m['coord']],
                      f"центр карты {ov[1]} — найдена по названию места «{ru_place(r['place'])}»", m['section'])
            p['names'][ru_place(r['place'])] += 1
            row_points[id(r)] = [p['key']]
            continue
        if ov and ov[0] == 'point':
            deferred.append((r, ov[1]))
            continue
        keys = []
        if r['kind'] == 'event' and r.get('srcKind') == 'coord':
            c = [round(r['coord'][0], 5), round(r['coord'][1], 5)]
            p = point('C:%s,%s' % tuple(c), c, 'coord события ' + r['key'], None)
            p['mapsInfo'] += r.get('mapInfo') or []
            keys.append(p['key'])
        elif r['kind'] == 'event' and r.get('maps'):
            for mi in r['mapInfo']:                    # как createEventMarkers: маркер у каждой карты
                p = point('M:' + mi['file'], [round(x, 6) for x in mi['center']], 'центр карты ' + mi['file'], mi['section'])
                keys.append(p['key'])
        elif r['kind'] == 'map':
            mi = r['mapInfo'][0]
            p = point('M:' + mi['file'], [round(x, 6) for x in mi['center']], 'центр карты ' + mi['file'], mi['section'])
            keys.append(p['key'])
        if keys:
            name = ru_place(r['place']) if r['kind'] == 'event' else r['title']
            for k in keys:
                if name:
                    points[k]['names'][name] += 1
            row_points[id(r)] = keys
        else:
            unresolved.append(r)
    for p in points.values():
        p['rows'] = []
    for r in rows:
        for k in row_points.get(id(r), []):
            points[k]['rows'].append(r)

    for r, k in deferred:
        points[k]['rows'].append(r)
        row_points[id(r)] = [k]
        joined.append((r, points[k], 'задано в таблице'))

    # 2) события без точки — по названию места
    def candidates(pred):
        cs = [p for p in points.values() if any(pred(n) for n in p['names'])]
        return sorted(cs, key=lambda p: (-len(p['rows']), min((x.get('year') or 9999) for x in p['rows'])))
    for r in unresolved:
        if not r['place']:
            skipped.setdefault(r['key'], (r, 'место не указано'))
            continue
        full, base = ru_place(r['place']), base_of(r['place'])
        how = 'то же название места'
        cs = candidates(lambda n: n == full)
        if not cs:
            how = 'та же первая часть названия'
            cs = candidates(lambda n: n.split(',')[0].strip() == base)
        if not cs:
            skipped.setdefault(r['key'], (r, 'нет точки с таким названием места'))
            continue
        p = cs[0]
        p['rows'].append(r)
        row_points[id(r)] = [p['key']]
        joined.append((r, p, how))

    # 3) записи
    out, report = [], []
    for p in points.values():
        rs = p['rows']
        if p['page'] is None:   # точка по coord или по названию места
            # 1) регион событий точки: поле region события и region его стартов
            region_pages = sorted({pg for r in rs for pg in (r.get('regionPages') or [])})
            if len(region_pages) == 1:
                p['page'] = region_pages[0]
            elif len(region_pages) > 1:
                conflicts.append((p, region_pages))
                p['page'] = 'all'
            else:
                # 2) региона нет — раздел ближайшей карты архива не дальше NEAR_KM, иначе all
                near = min(((km(m['coord'], p['coord']), m['section']) for m in maps.values()), default=None)
                p['page'] = near[1] if near and near[0] <= NEAR_KM else 'all'
        evs, mps = OrderedDict(), OrderedDict()
        for r in sorted(rs, key=lambda r: (r.get('year') or 9999, r['key'])):
            if r['kind'] == 'event':
                evs.setdefault(r['key'], (r['year'], r['title'], r.get('logos') or []))
            else:
                mps.setdefault(r['key'], (map_year(r['key'], r.get('year')), r['title']))
        years = [v[0] for v in evs.values() if v[0]] + [y for y, _ in mps.values() if y]
        # название: самое частое название места у событий точки, при равенстве — у самого раннего
        ev_names = Counter(ru_place(r['place']) for r in rs if r['kind'] == 'event' and r['place'])
        if ev_names:
            first = {}
            for r in sorted(rs, key=lambda r: r.get('year') or 9999):
                if r['kind'] == 'event' and r['place']:
                    first.setdefault(ru_place(r['place']), r.get('year') or 9999)
            name = sorted(ev_names, key=lambda n: (-ev_names[n], first[n]))[0]
        elif p['names']:
            name = p['names'].most_common(1)[0][0]
        else:                                               # у событий нет места — название карты
            name = maps[p['key'][2:]]['name']
        k = p['key']
        pid = k[2:]                                          # карта: её файл; geo: id события
        if k[0] == 'C':
            pid = sorted(evs, key=lambda e: (evs[e][0] or 9999, e))[0]
        p['pid'] = pid
        # карта для наложения: только та, что содержит точку маркера
        overlay = None
        if k[0] == 'M' and inside(maps[k[2:]]['bounds'], p['coord']):
            overlay = k[2:]                                     # точка — центр этой карты
        else:
            for r in sorted(rs, key=lambda r: (r.get('year') or 9999, r['key'])):
                hit = [f for f in (r.get('maps') or []) if f in maps and inside(maps[f]['bounds'], p['coord'])]
                if hit:
                    overlay = hit[0]                            # карта события, первая по порядку в map
                    break
        if overlay is None and pid in OVERLAY_FOR:
            f = OVERLAY_FOR[pid]
            if f not in maps or not inside(maps[f]['bounds'], p['coord']):
                sys.exit(f'OVERLAY_FOR: карта {f} не содержит точку {pid}')
            overlay = f
        if overlay is None:
            cand = sorted((m for m in maps.values() if inside(m['bounds'], p['coord'])),
                          key=lambda m: (m['year'] or 9999, m['file']))
            (overlay_choice if cand else overlay_none).append((pid, name, cand))
        rec = dict(id=pid, coord=p['coord'], name=name, page=p['page'], poi=POI_FOR.get(k),
                   year=min(years) if years else None, src=p['src'],
                   events=[[e, y, t, lg] for e, (y, t, lg) in evs.items()],
                   maps=[[m, y, t] for m, (y, t) in mps.items()],
                   overlay=overlay and dict(file=overlay, **{x: maps[overlay][x] for x in ('url', 'bounds', 'hidden')}))
        out.append(rec)
    out.sort(key=lambda r: (r['year'] or 9999, r['name']))

    ids = Counter(r['id'] for r in out)
    if any(v > 1 for v in ids.values()):
        sys.exit('повтор id: ' + ', '.join(i for i, v in ids.items() if v > 1))
    if args.poi:
        taken = set(re.findall(r"\bid:\s*'([^']+)'", open(args.poi, encoding='utf-8').read()))
        clash = [r['id'] for r in out if r['id'] in taken]
        if clash:
            sys.exit('id точек совпадают с poi.js: ' + ', '.join(clash))

    js = [f"/* Места статьи «{CFG['title']}» ({CFG['article']})",
          '   для карты мест (initHistoryPlacesMap в utils.js). Точка ставится как событие календаря',
          f"   на {CFG['home_page']}.html: в coord события или в центр его карты; соседние точки склеивает кластеризация.",
          '   Формат записей — как в poi.js: id, coord, name; дополнительно:',
          '     page   — раздел сайта для ссылки «Карты района» (spb, pskov, starts… или all);',
          '     poi    — id записи в poi.js, если у места есть POI;',
          '     year   — год первого упоминания места в статье (цвет точки на карте);',
          '     events — события статьи в этой точке: [id, год, название в календаре, логотипы];',
          '              логотипы — как перед названием в календаре (первый из logoList() и,',
          '              у Russialoppet, его значок перед ним); нет логотипа — элемента нет;',
          '     maps   — карты O-Maps, на которые статья ссылается в этой точке: [файл, год, название];',
          '     overlay — карта, которая накладывается на карту мест, когда открыт попап точки:',
          '              [файл, url, углы (как bounds в maps-*.js), true — просмотр закрыт (isMapHidden)];',
          '              только карта, содержащая точку: своя карта точки, карта её события или выбранная вручную.',
          '   Источник точки — в комментарии к coord.',
          '   Файл собран скриптом по ссылкам статьи. */',
          '',
          f"let {CFG['var']} = ["]
    for r in out:
        js.append('    {')
        js.append(f"        id: '{r['id']}',")
        js.append(f"        coord: [{r['coord'][0]}, {r['coord'][1]}], // {r['src']}")
        js.append(f"        name: {jsq(r['name'])},")
        js.append(f"        page: '{r['page']}',")
        if r['poi']:
            js.append(f"        poi: '{r['poi']}',")
        if r['year']:
            js.append(f"        year: {r['year']},")
        if r['events']:
            js.append('        events: [')
            for a, y, t, lg in r['events']:
                logos = (', [' + ', '.join(jsq(x) for x in lg) + ']') if lg else ''
                js.append(f"            ['{a}', {y if y else 'null'}, {jsq(t)}{logos}],")
            js.append('        ],')
        if r['overlay']:
            o = r['overlay']
            b = ', '.join(f'[{x[0]}, {x[1]}]' for x in o['bounds'])
            hidden = ', true' if o['hidden'] else ''
            js.append(f"        overlay: ['{o['file']}', {jsq(o['url'])}, [{b}]{hidden}],")
        if r['maps']:
            js.append('        maps: [')
            for a, y, t in r['maps']:
                js.append(f"            ['{a}', {y if y else 'null'}, {jsq(t)}],")
            js.append('        ],')
        js.append('    },')
    js.append('];')
    eol = '\r\n' if args.crlf else '\n'
    open(args.out, 'w', encoding='utf-8', newline='').write(eol.join(js) + eol)

    era = lambda y: next(n for lim, n in ERAS if (y or 9999) <= lim)
    lines = [f'точек: {len(out)} (по эпохам: ' + ', '.join(f'{n} — {c}' for n, c in Counter(era(r["year"]) for r in out).items()) + ')', '']
    for r in out:
        lines.append(f"{r['id'][:34]:34} {r['name'][:38]:38} {r['coord'][0]:.4f},{r['coord'][1]:.4f} {r['page']:6} "
                     f"{r['year'] or '—'}  событий {len(r['events'])}, карт {len(r['maps'])} ← {r['src']}")
    uniq = OrderedDict(((r['key'], p['key']), (r, p, how)) for r, p, how in joined)
    lines += ['', f'присоединены к точке по названию места: {len(uniq)}']
    lines += [f"  {r['key']:17} {r.get('year')}  «{ru_place(r['place'])}» → {p['key'][2:]} ({how})" for r, p, how in uniq.values()]
    if conflicts:
        lines += ['', f'разные регионы у событий одной точки (раздел all): {len(conflicts)}']
        lines += [f"  {p['key'][2:]}: {', '.join(pages)}" for p, pages in conflicts]
    with_overlay = sum(1 for r in out if r['overlay'])
    lines += ['', f'карта для наложения: есть у {with_overlay}, нужно выбрать у {len(overlay_choice)}, '
                  f'нет ни одной карты с точкой у {len(overlay_none)}']
    for pid, name, cand in overlay_choice:
        lines.append(f'  {pid} ({name}) — карты, содержащие точку ({len(cand)}):')
        lines += [f"      {m['file']}: {m['name']} {m['year'] or '—'}" for m in cand]
    if overlay_none:
        lines.append('  без карты: ' + '; '.join(name for _, name, _ in overlay_none))
    lines += ['', f'не на карте: {len(skipped)}']
    lines += [f"  {k:17} {r.get('year')}  {r['title']} — {why}" for k, (r, why) in skipped.items()]
    if args.report:
        open(args.report, 'w', encoding='utf-8').write('\n'.join(lines) + '\n')
    if args.link_points:
        lp = OrderedDict()
        for r in rows:
            ks = row_points.get(id(r))
            if ks:
                lp.setdefault(r['key'], points[ks[0]]['pid'])
        json.dump(lp, open(args.link_points, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    print('\n'.join(lines))


if __name__ == '__main__':
    main()
