/*
 * extract_feed.js — превращает js/calendar-*.js в плоский JSON для Android-приложения.
 *
 * Запускается из build_app_feed.py:  node extract_feed.js <js-dir> <site-url>
 * Результат — JSON в stdout.
 *
 * Логика классификации и подписей повторяет js/utils.js (buildEventType,
 * isMajor, isEventLikeRogaine, isEventOther, buildEventReg, buildEventResults,
 * buildEventReports, logoList). При изменении этих функций на сайте правьте
 * и здесь — иначе приложение начнёт расходиться с сайтом.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const JS_DIR = process.argv[2] || '.';
const SITE = (process.argv[3] || 'https://o-maps.spb.ru/').replace(/\/?$/, '/');

const O_SITE_PREFIX = 'https://o-site.spb.ru/race.php?id=';
const O_GPS_PREFIX = 'https://viewer.o-gps-center.ru/viewer/event/';
const RESKEEP_PREFIX = 'https://reskeep.ru/event/get?id=';

// Поля `me` и `strava` в календаре — личные пометки владельца сайта,
// в выгрузку для приложения они намеренно не попадают.

// ---------------------------------------------------------------- загрузка --

function read(file) {
    return fs.readFileSync(path.join(JS_DIR, file), 'utf8');
}

// `regions` объявлена внутри utils.js, а весь utils.js в Node не загрузить:
// он трогает document/navigator. Вырезаем один литерал по балансу скобок.
function extractLiteral(source, declaration, open = '{', close = '}') {
    const start = source.indexOf(declaration);
    if (start < 0) throw new Error('не найдено объявление: ' + declaration);
    let depth = 0;
    let i = source.indexOf(open, start);
    for (; i < source.length; i++) {
        if (source[i] === open) depth++;
        else if (source[i] === close) {
            depth--;
            if (depth === 0) { i++; break; }
        }
    }
    return source.slice(start, i);
}

/**
 * Текст «О проекте» — тот же, что показывает жёлтая кнопка на сайте.
 * Забираем его из js/welcome.js, а не переписываем в приложение: иначе
 *две копии разойдутся при первой же правке.
 */
function extractWelcome() {
    if (!fs.existsSync(path.join(JS_DIR, 'welcome.js'))) return null;
    const source = read('welcome.js');
    const marker = 'const welcomeDialogContent = `';
    const start = source.indexOf(marker);
    if (start < 0) return null;
    const from = start + marker.length;
    const to = source.indexOf('`', from);
    if (to < 0) return null;
    return source.slice(from, to).trim();
}

const DATA_FILES = ['starts.js', 'owners.js', 'planners.js', 'calendar-early.js'];
for (let y = 2004; y <= 2026; y++) DATA_FILES.push(`calendar-${y}.js`);
DATA_FILES.push('calendar-common-2026.js', 'calendar-other-2026.js');

const YEAR_VARS = ['eventsEarly'];
for (let y = 2004; y <= 2026; y++) YEAR_VARS.push(`events${y}`);
YEAR_VARS.push('commonEvents2026', 'otherEvents2026');

let source = extractLiteral(read('utils.js'), 'const regions = {') + ';\n';
source += extractLiteral(read('global-menu.js'), 'const GLOBAL_MENU_ITEMS = [', '[', ']') + ';\n';
for (const f of DATA_FILES) {
    if (!fs.existsSync(path.join(JS_DIR, f))) continue;
    source += read(f) + '\n;\n';
}
source += `;({ regions, starts, owners, planners, menu: GLOBAL_MENU_ITEMS, buckets: {${YEAR_VARS
    .map(v => `${v}: typeof ${v} === 'undefined' ? [] : ${v}`)
    .join(', ')}} });`;

const loaded = vm.runInContext(source, vm.createContext({}), { filename: 'omaps-data.js' });
const { regions, starts, owners, planners, menu, buckets } = loaded;

// ------------------------------------------------------------ вспомогалки --

const asArray = v => (v == null ? [] : Array.isArray(v) ? v : [v]);
const typesOf = evt => asArray(evt.type).length ? asArray(evt.type) : ['ORIENT'];
const has = (evt, t) => typesOf(evt).includes(t);

function isRogaine(evt) { return has(evt, 'ROGAINE'); }
function isEventLikeRogaine(evt) { return isRogaine(evt) || has(evt, 'MULTI') || evt.start === 'MB'; }
function isEventOther(evt) {
    return !has(evt, 'ORIENT') && !has(evt, 'VELO') && !has(evt, 'INDOOR') &&
        !has(evt, 'SKI') && !isRogaine(evt);
}

function isMajor(evt) {
    if (evt.major) return true;
    for (const s of asArray(evt.start)) {
        if (starts[s] && starts[s].major) return true;
    }
    return false;
}

/** Ключи фильтра «вид соревнований» из шапки календаря. */
function filterKeys(evt) {
    const keys = [];
    if (has(evt, 'ORIENT') || has(evt, 'INDOOR')) keys.push('ORIENT');
    if (isEventLikeRogaine(evt)) keys.push('ROGAINE');
    if (has(evt, 'SKI')) keys.push('SKI');
    if (has(evt, 'VELO')) keys.push('VELO');
    if (isEventOther(evt)) keys.push('OTHER');
    return keys;
}

/** Раскраска карточки — повторяет классы строки в renderMapsTable(). */
function colorClass(evt) {
    if (has(evt, 'ORIENT') || has(evt, 'INDOOR')) return 'ORIENT';
    if (has(evt, 'WATER')) return 'WATER';
    if (isRogaine(evt)) return 'ROGAINE';
    return 'OTHER';
}

/** Значок вида спорта рядом с номером — повторяет buildNumber(). */
function badge(evt) {
    if (has(evt, 'SK_RACE')) return '⛷';
    if (has(evt, 'RUN')) return '🏃';
    if (has(evt, 'SKI')) return '❄';
    if (has(evt, 'VELO')) return '🚲';
    if (has(evt, 'WATER')) return '🚣';
    if (has(evt, 'INDOOR')) return '🏠';
    return null;
}

/** Подпись вида соревнований — повторяет buildEventType(). */
function typeLabel(evt) {
    const raw = evt.type;
    if (typeof raw === 'string') {
        switch (raw) {
            case 'RUN': return 'Бег';
            case 'SK_RACE': return 'Лыжная гонка';
            case 'ORIENT': return 'Ориент';
            case 'VELO': return 'Вело';
            case 'ROGAINE': return 'Рогейн';
            case 'MULTI': return 'Мульти';
            case 'TOURISM': return 'Кросс-поход';
            case 'FUN': return 'Интерактив';
            case 'INDOOR': return 'В помещении';
            case 'SPECIAL': return 'Другой';
        }
    }
    if (!raw) return 'Ориент';
    if (has(evt, 'CLUB')) return 'Клуб';
    if (has(evt, 'WATER')) return 'Водный рогейн';
    if (has(evt, 'SKI')) return isRogaine(evt) ? 'Лыжный рогейн' : 'Ориент лыж';
    if (has(evt, 'VELO')) return 'Рогейн';
    if (has(evt, 'SPECIAL')) return 'Другой';
    if (has(evt, 'INDOOR')) return 'В помещении';
    return 'Рогейн, Ориент';
}

/** Первый логотип — повторяет logoList()/logoOne(). */
function logoFile(evt) {
    const out = [];
    const push = l => { if (l && !out.includes(l)) out.push(l); };
    if (evt.russialoppet) push('russialoppet.gif');
    push(evt.logo);
    for (const s of asArray(evt.start)) {
        const st = starts[s];
        if (!st) continue;
        push(st.logo);
        if (st.region && regions[st.region]) push(regions[st.region].logo);
    }
    for (const o of asArray(evt.owner)) {
        if (owners[o]) push(owners[o].logo);
    }
    if (evt.region && regions[evt.region]) push(regions[evt.region].logo);
    return out.length ? out[0] : null;
}

// ---------------------------------------------------------------- ссылки ---

// Иконки берём те же, что на сайте: images/*. Приложение показывает их
// вместо подписей — так в карточку помещается вдвое больше ссылок, а
// несколько ссылок одного вида (частый случай: сплиты, видео, карты)
// перестают выглядеть как повторяющийся текст.
const IMAGES = SITE + 'images/';

/** Расширение файла для иконок вида `pdf-file.png` — повторяет downloadIconExt(). */
function fileIcon(url) {
    const path = String(url).split(/[?#]/)[0];
    const ext = (path.split('.').pop() || '').toLowerCase();
    switch (ext) {
        case 'jpeg': case 'jpg': return 'jpg-file.png';
        case 'omap': case 'ocd': return 'ocd-file.png';
        case 'pdf': return 'pdf-file.png';
        case 'png': return 'png-file.png';
        case 'gif': return 'gif-file.png';
        case 'doc': case 'docx': return 'doc-file.png';
        default: return 'url-file.png';
    }
}

/** Иконка сервиса регистрации. */
function regIcon(url) {
    if (url.includes('orgeo')) return 'orgeo.webp';
    if (url.includes('o-reg')) return 'oreg.webp';
    if (url.includes('vk.com') || url.includes('vk.ru')) return 'vk.webp';
    if (url.includes('o-time')) return 'otime.webp';
    if (url.includes('multsport')) return 'multsport.webp';
    if (url.includes('sportident')) return 'si.webp';
    if (url.includes('t.me')) return 'telegram.webp';
    return 'url-file.png';
}

/** Иконка сервиса результатов. */
function resIcon(url) {
    if (url.includes('orgeo')) return 'orgeo.webp';
    if (url.includes('o-site')) return 'o-site.gif';
    if (url.includes('o-time')) return 'otime.webp';
    if (url.includes('multsport')) return 'multsport.webp';
    if (url.includes('sportident')) return 'si.webp';
    if (url.includes('vk.com') || url.includes('vk.ru')) return 'vk.webp';
    if (url.includes('reskeep')) return 'r-k.gif';
    if (url.includes('t.me')) return 'telegram.webp';
    return fileIcon(url);
}

/** Иконка видеосервиса — повторяет getVideoImg(). */
function videoIcon(url) {
    if (url.includes('vkvideo') || url.includes('vk.com') || url.includes('vk.ru')) return 'vkvideo.gif';
    if (url.includes('rutube')) return 'rutube.webp';
    if (url.includes('youtu')) return 'youtube.webp';
    if (url.includes('yandex')) return 'ya_video.webp';
    return 'video-camera.png';
}

/** Подпись кнопки регистрации — повторяет buildOneEventReg(). */
function regLabel(url) {
    const table = [
        ['orgeo', 'Orgeo'], ['o-reg', 'O-Reg'], ['vk.com', 'VK'], ['vk.ru', 'VK'],
        ['o-time', 'O-Time'], ['multsport', 'Multsport'], ['sportident', 'Sportident'],
        ['russialoppet', 'Russialoppet'], ['gosuslugi', 'ГУ'], ['russiarunning', 'RR'],
        ['t.me', 'Telegram']
    ];
    for (const [needle, label] of table) if (url.includes(needle)) return label;
    return 'Регистрация';
}

/** Подпись кнопки результатов — повторяет buildEventResults(). */
function resLabel(url) {
    const table = [
        ['orgeo', 'Orgeo'], ['o-site', 'O-Site'], ['o-time', 'O-Time'],
        ['multsport', 'Multsport'], ['sportident', 'Sportident'], ['vk.com', 'VK'],
        ['vk.ru', 'VK'], ['reskeep', 'Reskeep'], ['t.me', 'Telegram'], ['hard', 'HARD']
    ];
    for (const [needle, label] of table) if (url.includes(needle)) return label;
    return 'Результаты';
}

function videoLabel(url) {
    if (url.includes('vkvideo') || url.includes('vk.com') || url.includes('vk.ru')) return 'VK Видео';
    if (url.includes('rutube')) return 'RuTube';
    if (url.includes('youtu')) return 'YouTube';
    if (url.includes('yandex')) return 'Яндекс';
    return 'Видео';
}

function absolute(url) {
    if (!url) return null;
    if (/^https?:\/\//i.test(url)) return url;
    return SITE + String(url).replace(/^\.?\//, '');
}

/**
 * Кнопки карточки.
 *
 * kind  — семантика: reg | res | split | reskeep | site | gps | photo |
 *         video | map | place | publish | link | doc
 * icon  — полный адрес картинки на сайте; приложение рисует её вместо подписи
 * glyph — эмодзи вместо картинки (для ссылок рядом с местом, как на сайте)
 * slot  — куда ставить: title (сразу за названием), place (сразу за местом),
 *         row (общий ряд в раскрытой карточке)
 *
 * label остаётся всегда: он идёт в описание для чтения с экрана и во
 * всплывающую подсказку при долгом нажатии.
 */
/**
 * Адрес, на который ведёт название старта — как buildEventStart() на сайте:
 * сначала собственный сайт старта, затем O-Site, затем сайт серии.
 */
function nameUrl(evt) {
    const own = asArray(evt.link)[0];
    if (own) return absolute(own);

    const site = asArray(evt.o_site)[0];
    if (site) return O_SITE_PREFIX + site;

    const start = asArray(evt.start)[0];
    if (start && starts[start] && starts[start].link) return absolute(starts[start].link);

    return null;
}

function buildLinks(evt) {
    const links = [];
    const add = ({ kind, label, url, icon, glyph, slot }) => {
        const u = absolute(url);
        if (!u || links.some(l => l.url === u)) return;
        const link = { kind, label, url: u, slot: slot || 'row' };
        if (icon) link.icon = IMAGES + icon;
        if (glyph) link.glyph = glyph;
        links.push(link);
    };

    // Регистрация встаёт сразу за названием — как в строке календаря на сайте.
    for (const r of asArray(evt.reg)) {
        add({ kind: 'reg', label: regLabel(r), url: r, icon: regIcon(r), slot: 'title' });
    }

    // Карта и точка — сразу за местом, теми же эмодзи, что и на сайте
    // (buildEventPlace): 🗺️ карта, 🌐 координаты, 🚸 трек.
    const mapPage = 'spb.html';
    for (const m of asArray(evt.map).concat(asArray(evt.maps))) {
        add({
            kind: 'map', label: 'Карта на O-Maps', glyph: '🗺️', slot: 'place',
            url: `${SITE}${mapPage}?calendar&map=${m}`,
        });
    }
    if (evt.coord && evt.coord.length === 2) {
        add({
            kind: 'place', label: 'Место на O-Maps', glyph: '🌐', slot: 'place',
            url: `${SITE}${mapPage}?x=${evt.coord[0]}&y=${evt.coord[1]}&calendar`,
        });
    }
    if (evt.track) {
        add({
            kind: 'place', label: 'Трек на O-Maps', glyph: '🚸', slot: 'place',
            url: `${SITE}tracks.html?track=${evt.track}&calendar`,
        });
    }

    // evt.link бывает и строкой, и массивом — у стартов с несколькими площадками.
    const linkList = asArray(evt.link);
    for (const l of linkList) {
        add({
            kind: 'link', url: l, icon: 'external-link.png',
            label: linkList.length > 1 ? regLabel(String(l)) : 'Сайт старта',
        });
    }
    for (const o of asArray(evt.o_site)) {
        add({ kind: 'site', label: 'O-Site', url: O_SITE_PREFIX + o, icon: 'o-site.gif' });
    }
    for (const r of asArray(evt.res)) {
        add({ kind: 'res', label: resLabel(r), url: r, icon: resIcon(r) });
    }
    // Сплиты лежат на самом сайте; o-site-r.gif — вариант значка O-Site
    // с пометкой, отличается от обычного и не путается с ним в ряду.
    for (const sp of asArray(evt.split)) {
        add({ kind: 'split', label: 'Сплиты', url: sp, icon: 'o-site-r.gif' });
    }
    for (const r of asArray(evt.reskeep)) {
        add({ kind: 'reskeep', label: 'Reskeep', url: RESKEEP_PREFIX + r, icon: 'r-k.gif' });
    }
    for (const g of asArray(evt.o_gps)) {
        add({ kind: 'gps', label: 'O-GPS', url: O_GPS_PREFIX + g, icon: 'o-gps.gif' });
    }
    for (const ph of asArray(evt.photo)) {
        add({
            kind: 'photo', label: 'Фото', url: ph,
            icon: String(ph).includes('sport-images.ru') ? 'sportimages.webp' : 'photo-camera.png',
        });
    }
    for (const v of asArray(evt.video)) {
        const url = typeof v === 'object' && v !== null ? Object.values(v)[0] : v;
        add({ kind: 'video', label: videoLabel(String(url)), url, icon: videoIcon(String(url)) });
    }
    for (const pb of asArray(evt.publish)) {
        add({ kind: 'publish', label: 'Карты опубликованы', url: pb, icon: 'maps.png' });
    }
    for (const d of asArray(evt.docs)) {
        add({ kind: 'doc', label: 'Документы', url: d, icon: fileIcon(d) });
    }

    return links;
}

// --------------------------------------------------------------- сборка ----

function plannersText(evt) {
    const names = asArray(evt.planner)
        .map(p => (planners[p] && (planners[p].name || planners[p].short)) || p)
        .map(n => String(n).replace(/<[^>]+>/g, '').trim())
        .filter(Boolean);
    return names.length ? names.join(', ') : null;
}

function ownerText(evt) {
    const names = asArray(evt.owner)
        .map(o => owners[o] && owners[o].short)
        .filter(Boolean);
    return names.length ? names.join(', ') : null;
}

/**
 * Ссылки внутри примечаний бывают относительными («./docs/1974_leningrad.pdf»):
 * в браузере на сайте они разрешаются сами, а приложению нужен полный адрес,
 * иначе Intent.ACTION_VIEW не найдёт обработчика. Разворачиваем при сборке.
 */
function absolutizeHtml(html) {
    return String(html).replace(
        /(href\s*=\s*["'])([^"']+)(["'])/gi,
        (full, head, url, tail) =>
            /^(https?:|mailto:|tel:|#|\/\/)/i.test(url) ? full : head + absolute(url) + tail,
    );
}

function stripHtml(html) {
    return String(html || '')
        .replace(/<br\s*\/?>/gi, ' ')
        .replace(/<[^>]+>/g, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/\s+/g, ' ')
        .trim();
}

const seen = new Set();
const events = [];

for (const key of Object.keys(buckets)) {
    for (const evt of buckets[key]) {
        if (!evt || !evt.date) continue;
        const id = evt.id || `${key}_${evt.date}_${evt.name}`;
        if (seen.has(id)) continue;
        seen.add(id);

        const fmt = evt.fmt ? stripHtml(evt.fmt) : null;
        const info = evt.info ? absolutizeHtml(evt.info) : null;

        events.push({
            id,
            date: evt.date,
            endDate: evt.endDate || null,
            name: String(evt.name || '').trim(),
            place: evt.place ? String(evt.place).trim() : null,
            types: typesOf(evt),
            typeLabel: typeLabel(evt),
            fmt,
            filters: filterKeys(evt),
            color: colorClass(evt),
            badge: badge(evt),
            major: isMajor(evt),
            cancelled: Boolean(evt.cancelled),
            closed: evt.price === -1,
            paid: evt.price === 1,
            logo: logoFile(evt) ? SITE + 'logo/' + logoFile(evt) : null,
            owner: ownerText(evt),
            planner: plannersText(evt),
            infoHtml: info,
            nameUrl: nameUrl(evt),
            // Ссылку, ушедшую на название, из ряда кнопок убираем: иначе
            // одно и то же открывалось бы из двух мест подряд.
            links: buildLinks(evt).filter(l => l.url !== nameUrl(evt)),
            // Строка для поиска — заранее в нижнем регистре, чтобы приложение
            // не занималось этим на каждом нажатии клавиши.
            search: [evt.name, evt.place, fmt, stripHtml(info), ownerText(evt), plannersText(evt)]
                .filter(Boolean).join(' ').toLowerCase().replace(/ё/g, 'е')
        });
    }
}

events.sort((a, b) => (a.date === b.date ? a.id.localeCompare(b.id) : a.date.localeCompare(b.date)));

/**
 * Меню сайта — как есть, только `page` разворачивается в абсолютный адрес.
 * Всё это приложение открывает в браузере.
 */
function convertMenu(items) {
    const out = [];
    for (const item of items || []) {
        if (!item || !item.title) continue;
        const node = { title: item.title };
        if (item.page) {
            node.url = SITE + (item.page.includes('.') ? item.page : item.page + '.html');
        } else if (item.link) {
            node.url = absolute(item.link);
        }
        if (item.menuItems) {
            node.children = convertMenu(item.menuItems);
            if (!node.children.length) continue;
        }
        if (!node.url && !node.children) continue;
        out.push(node);
    }
    return out;
}

/** Выкидываем пустые поля: экономит около трети объёма выгрузки. */
function compact(value) {
    if (Array.isArray(value)) return value.length ? value.map(compact) : undefined;
    if (value && typeof value === 'object') {
        const out = {};
        for (const [k, v] of Object.entries(value)) {
            const c = compact(v);
            if (c !== undefined) out[k] = c;
        }
        return Object.keys(out).length ? out : undefined;
    }
    if (value === null || value === false || value === '') return undefined;
    return value;
}

process.stdout.write(JSON.stringify({
    schema: 1,
    site: SITE,
    generated: new Date().toISOString(),
    menu: convertMenu(menu),
    about: (() => {
        const html = extractWelcome();
        return html ? absolutizeHtml(html) : undefined;
    })(),
    events: events.map(compact)
}));
