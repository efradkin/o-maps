#!/usr/bin/env python3
"""Выгружает из RouteGadget 2 карты события: чистую, с дистанциями и с путями участников.

Данные берутся из API RouteGadget (rg2api.php: events, courses, results, tracks), картинка карты —
из папки kartat. Дистанции рисуются так же, как в самом RouteGadget 2 (фиолетовые старт, КП
с номерами, финиш, линии между КП; размер кружков зависит от размера карты, как в RG2),
пути — цветными линиями в порядке цветов RG2, с подписями в углу картинки.

Для каждого события создаётся папка <ВЫХОД>/<id>_<название>/ с файлами:
  map.<ext>                  чистая карта (файл из kartat как есть);
  <группа>.<fmt>             карта с дистанцией группы;
  <группа>_пути.<fmt>        карта с дистанцией и всеми путями группы (если пути есть);
  <группа>_<NN>_<имя>.<fmt>  с ключом --runners: дистанция и путь одного участника.
У эстафет и стартов с выбором (формат 3) у каждого участника свой вариант: в картинке группы
показаны все КП группы без линий (как в RG2), а в картинке участника — его вариант с линиями.

Уже скачанные данные и готовые картинки не перекачиваются и не перерисовываются (повторный
запуск ничего не меняет); --force перерисовывает картинки заново.

Использование:
  python3 rg_export.py EVENT [EVENT …] [--base URL] [--out DIR] [--runners] [--course ГРУППА]
                       [--format jpg|png] [--circle N] [--width N] [--route-width N]
                       [--font FILE] [--force] [-n]

  EVENT            номер события RouteGadget (из адреса rg2.php#6) или all — все события
  --base URL       адрес установки RouteGadget (папка, где лежат rg2/ и kartat/);
                   по умолчанию https://o-site.spb.ru/routegadget
  --out DIR        папка для результата (по умолчанию rg_export)
  --runners        дополнительно по картинке на каждого участника с путём
  --course ГРУППА  только эта группа (название как в RouteGadget, например М21); можно несколько раз
  --format FMT     формат картинок с дистанциями: jpg (по умолчанию, качество 92) или png
  --circle N       радиус КП при карте 1500 px, как «Control circle size» в RG2 (по умолчанию 20)
  --width N        толщина линий дистанции, как «Course overprint width» (по умолчанию 3)
  --route-width N  толщина линий путей, как «Route width» (по умолчанию 4)
  --font FILE      шрифт TTF с кириллицей; по умолчанию ищется Arial или DejaVu Sans
  --force          перерисовать уже существующие картинки
  -n, --dry-run    только показать, что будет сделано: данные читаются, файлы не пишутся
  -h, --help       эта справка

Нужны Python 3.8+ и Pillow (pip install pillow).
"""
import argparse
import json
import math
import os
import re
import sys
import time
import urllib.request

from PIL import Image, ImageDraw, ImageFont

PURPLE = (0xb3, 0x00, 0xff)
WHITE = (255, 255, 255)
ROUTE_COLOURS = ['#ff0000', '#ff8000', '#ff00ff', '#ff0080', '#008080', '#008000', '#0080ff', '#0000ff', '#8000ff', '#808080']
FORMAT_SCORE = 3
GPS_RESULT_OFFSET = 50000
FONTS = ['C:/Windows/Fonts/arial.ttf', '/Library/Fonts/Arial.ttf', '/System/Library/Fonts/Supplemental/Arial.ttf',
         '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', '/usr/share/fonts/TTF/DejaVuSans.ttf', 'DejaVuSans.ttf']


def fetch(url, tries=3):
    req = urllib.request.Request(url, headers={'User-Agent': 'o-maps rg_export'})
    for attempt in range(tries):
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                return r.read()
        except OSError:
            if attempt == tries - 1:
                raise
            time.sleep(2 * (attempt + 1))              # сервер иногда сбрасывает соединение


def api(base, query):
    return json.loads(fetch(f'{base}/rg2/rg2api.php?{query}').decode('utf-8'))['data']


def safe(name):
    name = re.sub(r'[\\/:*?"<>|\s]+', '_', str(name).strip()).strip('._')
    return name[:60] or 'без_имени'


def font(path, size):
    for p in ([path] if path else []) + FONTS:
        try:
            return ImageFont.truetype(p, size)
        except OSError:
            continue
    if path:
        sys.exit('не найден шрифт ' + path)
    return ImageFont.load_default()


def angle(x1, y1, x2, y2):
    a = math.atan2(y2 - y1, x2 - x1)
    return a + 2 * math.pi if a < 0 else a


class Painter:
    """Рисует надпечатку дистанции и пути на копии карты (как controls.js / course.js в RG2)."""

    def __init__(self, img, args):
        self.img = img.convert('RGB')
        self.d = ImageDraw.Draw(self.img)
        w, h = self.img.size
        k = min(max(math.sqrt(min(w, h) / 1500), 0.5), 5)        # getOverprintDetails() в RG2
        self.r = round(args.circle * k)
        self.w = args.width
        self.route_w = args.route_width
        self.font = font(args.font, max(10, round(self.r * 4 / 3)))   # «r pt» в RG2 ≈ 4/3·r px
        self.small = font(args.font, max(10, round(self.r * 0.9)))

    def circle(self, x, y, r, colour, width):
        self.d.ellipse([x - r, y - r, x + r, y + r], outline=colour, width=max(1, round(width)))

    def line(self, pts, colour, width):
        self.d.line(pts, fill=colour, width=max(1, round(width)), joint='curve')

    def text(self, x, y, s, anchor='mm'):
        self.d.text((x, y), str(s), font=self.font, fill=PURPLE, anchor=anchor, stroke_width=2, stroke_fill=WHITE)

    def control(self, x, y, label, a):
        self.circle(x, y, self.r, WHITE, self.w + 2)
        self.circle(x, y, self.r, PURPLE, self.w)
        if label != '':
            # как drawSingleControl: подпись по биссектрисе угла, смещена от центра кружка
            tw = self.d.textlength(str(label), font=self.font)
            xo = tw / 2 if a < math.pi else -tw / 2
            yo = -self.r / 2 if math.pi / 2 <= a <= math.pi * 1.5 else self.r / 2
            self.text(x + self.r * 1.3 * math.sin(a) + xo, y + self.r * 1.3 * math.cos(a) + yo, label)

    def finish(self, x, y):
        for rr in (self.r * 5 / 6, self.r * 7 / 6):
            self.circle(x, y, rr, WHITE, self.w + 2)
        for rr in (self.r * 5 / 6, self.r * 7 / 6):
            self.circle(x, y, rr, PURPLE, self.w)

    def start(self, x, y, a):
        # как drawStart в RG2: a — направление на первый КП, вершина треугольника смотрит на него
        a += math.pi / 2
        L = self.r * 7 / 6
        pts = [(x + L * math.sin(a + t), y - L * math.cos(a + t)) for t in (0, 2 * math.pi / 3, -2 * math.pi / 3)]
        pts.append(pts[0])
        self.line(pts, WHITE, self.w + 2)
        self.line(pts, PURPLE, self.w)

    def course(self, xs, ys, codes=None, score=False):
        """Линейная дистанция (score=False) или КП старта с выбором без линий (score=True)."""
        n = len(xs)
        if n < 2:
            return
        ang = [angle(xs[i], ys[i], xs[i + 1], ys[i + 1]) for i in range(n - 1)] + [0]
        if score:
            self.start(xs[0], ys[0], math.pi * 1.5)
            for i in range(1, n):
                code = str(codes[i]) if codes else str(i)
                if code[:1] in ('F', 'M'):
                    self.finish(xs[i], ys[i])
                else:
                    self.control(xs[i], ys[i], code, math.pi * 0.25)
            return
        # линии между КП, не заходя внутрь кружков (drawLinesBetweenControls в RG2)
        self.start(xs[0], ys[0], ang[0])
        for i in range(n - 1):
            d1 = self.r * 7 / 6 if i == 0 else self.r
            d2 = self.r * 7 / 6 if i == n - 2 else self.r
            a = ang[i]
            seg = [(xs[i] + d1 * math.cos(a), ys[i] + d1 * math.sin(a)),
                   (xs[i + 1] - d2 * math.cos(a), ys[i + 1] - d2 * math.sin(a))]
            if math.dist(*seg) > 0 and math.dist((xs[i], ys[i]), (xs[i + 1], ys[i + 1])) > d1 + d2:
                self.line(seg, PURPLE, self.w)
        for i in range(1, n - 1):
            # подпись — по биссектрисе между входящей и выходящей линиями (setAngles() в course.js)
            c1x, c1y = math.sin(ang[i - 1]), math.cos(ang[i - 1])
            c2x, c2y = math.sin(ang[i]) + c1x, math.cos(ang[i]) + c1y
            self.control(xs[i], ys[i], i, angle(c2x / 2, c2y / 2, c1x, c1y))
        self.finish(xs[-1], ys[-1])

    def route(self, xs, ys, colour):
        pts = list(zip(xs, ys))
        if len(pts) > 1:
            self.line(pts, colour, self.route_w)

    def legend(self, items):
        """Подписи путей в левом верхнем углу: цвет — имя (как список Results в RG2)."""
        if not items:
            return
        pad, gap = 8, 6
        lh = self.small.size + gap
        tw = max(self.d.textlength(n, font=self.small) for _, n in items)
        box = [pad, pad, pad * 3 + 30 + tw, pad * 2 + lh * len(items)]
        self.d.rectangle(box, fill=(255, 255, 255), outline=(128, 128, 128))
        for k, (colour, name) in enumerate(items):
            y = pad * 2 + lh * k + self.small.size / 2
            self.line([(pad * 2, y), (pad * 2 + 24, y)], colour, self.route_w)
            self.d.text((pad * 2 + 30, y), name, font=self.small, fill=(0, 0, 0), anchor='lm')

    def save(self, path, fmt):
        if fmt == 'png':
            self.img.save(path, 'PNG', optimize=True)
        else:
            self.img.save(path, 'JPEG', quality=92, optimize=True)


def export_event(ev, args, stats):
    base = args.base
    eid = ev['id']
    folder = os.path.join(args.out, f"{eid}_{safe(ev['name'])}")
    mapfile = f"{ev['mapid']}.{ev.get('suffix') or 'jpg'}"
    print(f"событие {eid}: {ev['date']} {ev['name']} (карта {mapfile})")
    courses = api(base, f'type=courses&id={eid}')['courses']
    results = api(base, f'type=results&id={eid}')['results']
    routes = [r for r in api(base, f'type=tracks&id={eid}')['routes'] if r.get('gpsx')]
    score = ev['format'] == FORMAT_SCORE
    res_by_id = {r['resultid']: r for r in results}

    map_path = os.path.join(folder, 'map.' + mapfile.split('.')[-1])
    if args.dry_run and not os.path.exists(map_path):
        print('   будет', os.path.relpath(map_path, args.out))
        stats['written'] += 1
    if not args.dry_run:
        os.makedirs(folder, exist_ok=True)
        if not os.path.exists(map_path):
            open(map_path, 'wb').write(fetch(f'{base}/kartat/{mapfile}'))
            stats['written'] += 1
        base_img = Image.open(map_path)
        base_img.load()
    ext = 'png' if args.format == 'png' else 'jpg'

    def out(name, draw):
        path = os.path.join(folder, f'{name}.{ext}')
        if os.path.exists(path) and not args.force:
            stats['kept'] += 1
            return
        if args.dry_run:
            print('   будет', os.path.relpath(path, args.out))
            stats['written'] += 1
            return
        p = Painter(base_img, args)
        draw(p)
        p.save(path, ext)
        stats['written'] += 1

    for c in courses:
        if args.course and c['name'] not in args.course:
            continue
        cname = safe(c['name'])
        xs, ys = c['xpos'], c['ypos']
        out(cname, lambda p, xs=xs, ys=ys, c=c: p.course(xs, ys, c['codes'], score))
        mine = [r for r in routes if r['courseid'] == c['courseid']]
        if not mine:
            continue
        coloured = [(ROUTE_COLOURS[i % len(ROUTE_COLOURS)], r) for i, r in enumerate(mine)]

        def all_routes(p, xs=xs, ys=ys, c=c, coloured=coloured):
            p.course(xs, ys, c['codes'], score)
            for colour, r in coloured:
                p.route(r['gpsx'], r['gpsy'], colour)
            p.legend([(colour, label(r)) for colour, r in coloured])
        out(cname + '_пути', all_routes)
        if args.runners:
            for k, (colour, r) in enumerate(coloured, 1):
                res = res_by_id.get(r['resultid'] % GPS_RESULT_OFFSET) or {}

                def one(p, r=r, res=res, colour=colour, xs=xs, ys=ys, c=c):
                    if score and res.get('scorex'):
                        p.course(res['scorex'], res['scorey'])            # вариант участника — с линиями
                    else:
                        p.course(xs, ys, c['codes'], score)
                    p.route(r['gpsx'], r['gpsy'], colour)
                    p.legend([(colour, label(r, res))])
                num = str(k).zfill(len(str(len(coloured))))      # 01, 02… — чтобы файлы шли по порядку
                out(f"{cname}_{num}_{safe(clean_name(r['name']))}", one)


def clean_name(name):
    return re.sub(r'\s+', ' ', str(name)).strip()


def label(r, res=None):
    s = clean_name(r['name'])
    if res and res.get('time') not in (None, '', '00:00', '0'):
        s += ', ' + str(res['time'])
    return s + (' (GPS)' if r['resultid'] >= GPS_RESULT_OFFSET else '')


def main():
    ap = argparse.ArgumentParser(description=__doc__.split('\n')[0])
    ap.add_argument('events', nargs='+')
    ap.add_argument('--base', default='https://o-site.spb.ru/routegadget')
    ap.add_argument('--out', default='rg_export')
    ap.add_argument('--runners', action='store_true')
    ap.add_argument('--course', action='append')
    ap.add_argument('--format', choices=('jpg', 'png'), default='jpg')
    ap.add_argument('--circle', type=float, default=20)
    ap.add_argument('--width', type=float, default=3)
    ap.add_argument('--route-width', type=float, default=4)
    ap.add_argument('--font')
    ap.add_argument('--force', action='store_true')
    ap.add_argument('-n', '--dry-run', action='store_true')
    args = ap.parse_args()
    args.base = args.base.rstrip('/')

    events = {e['id']: e for e in api(args.base, 'type=events')['events']}
    ids = sorted(events) if args.events == ['all'] else []
    for e in args.events:
        if e == 'all':
            continue
        if not e.isdigit() or int(e) not in events:
            sys.exit(f'нет события {e}')
        ids.append(int(e))
    stats = {'written': 0, 'kept': 0}
    for eid in ids:
        try:
            export_event(events[eid], args, stats)
        except Exception as ex:                       # одно сломанное событие не останавливает выгрузку
            print(f'   ошибка в событии {eid}: {ex}')
    verb = 'будет записано' if args.dry_run else 'записано'
    print(f"готово: {verb} файлов {stats['written']}, уже были {stats['kept']}")


if __name__ == '__main__':
    main()
