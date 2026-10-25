/*
 * extract_feed.js — превращает js/calendar-*.js в плоский JSON для Android-приложения.
 *
 * Запускается из build_app_feed.py:  node extract_feed.js <js-dir> <site-url>
 * Результат — JSON в stdout.
 *
 * Логика классификации и подписей повторяет js/utils.js (buildEventType,
 * isMajor, isEventLikeRogaine, isEventOther, buildEventReg, buildEventResults,
 * buildEventReports, buildEventSiteIcons, buildEventPlace, getEventPlace,
 * getGPS, logoList) и renderMapsTable() из js/calendar.js. При изменении этих
 * функций на сайте правьте и здесь — иначе приложение начнёт расходиться с сайтом.
 *
 * Какие файлы календаря и карт читать, берётся из calendar.html (он лежит
 * уровнем выше каталога js/): те же <script src="js/calendar-*.js"> и
 * <script src="js/maps-*.js">, что подключает страница, и тот же список
 * `let oMaps = [...]`. Новый год календаря или новый файл карт добавляются
 * в calendar.html — сюда ничего дописывать не нужно.
 *
 * Предупреждения о подозрительных данных (например, parent, указывающий
 * на несуществующую запись) пишутся в stderr; выгрузка при этом собирается.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const JS_DIR = process.argv[2] || '.';
const SITE = (process.argv[3] || 'https://o-maps.spb.ru/').replace(/\/?$/, '/');

const O_SITE_PREFIX = 'https://o-site.spb.ru/race.php?id=';
const O_GPS_PREFIX = 'https://viewer.o-gps-center.ru/viewer/event/';
const LIVELOX_PREFIX = 'https://www.livelox.com/Events/Show/';
const RESKEEP_PREFIX = 'https://reskeep.ru/event/get?id=';
const O_STUFF_MAP_PAGE = 'https://maps.o-stuff.net/ru/show_map.php?map=';

const warnings = [];
const warn = msg => warnings.push(msg);

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

// ------------------------------------------------- что подключает calendar.html --

const CALENDAR_HTML = path.join(JS_DIR, '..', 'calendar.html');
if (!fs.existsSync(CALENDAR_HTML)) {
    throw new Error('не найден ' + CALENDAR_HTML + ' — списки файлов календаря и карт берутся из него');
}
const calendarHtml = fs.readFileSync(CALENDAR_HTML, 'utf8');
const pageScripts = [...calendarHtml.matchAll(/<script\s+src="js\/([^"?]+)/g)].map(m => m[1]);

// Файлы календаря — calendar-*.js с массивом событий (calendar-mobile.js и
// прочий код массивов не объявляет). Имя массива берётся из самого файла.
const EVENTS_DECL = /^(?:let|const|var)\s+(\w*[Ee]vents\w*)\s*=\s*\[/m;
const CALENDAR_FILES = [];
const BUCKET_VARS = [];
for (const f of pageScripts.filter(f => /^calendar-.+\.js$/.test(f))) {
    const decl = EVENTS_DECL.exec(read(f));
    if (!decl) continue;
    CALENDAR_FILES.push(f);
    BUCKET_VARS.push(decl[1]);
}
if (!CALENDAR_FILES.length) throw new Error('в calendar.html не нашлось файлов календаря');

const MAP_FILES = pageScripts.filter(f => /^maps-.+\.js$/.test(f));
const oMapsMatch = /let oMaps = \[([\s\S]*?)\];/.exec(calendarHtml);
if (!oMapsMatch) throw new Error('в calendar.html не найден список let oMaps = [...]');

// «Локальные» старты (галочка «локальные» в calendar.js): region записи совпадает
// с REGION_KEY страницы или запись взята из файлов регионального календаря —
// набор LOCAL_EVENTS, который страница собирает из своих массивов (для СПб —
// allYearsEvents и otherEvents2026). Оба выражения берутся из calendar.html как есть.
const regionKeyMatch = /const REGION_KEY = '([^']+)'/.exec(calendarHtml);
const localEventsMatch = /const LOCAL_EVENTS = (new Set\([\s\S]*?\));/.exec(calendarHtml);
if (!regionKeyMatch || !localEventsMatch) {
    throw new Error('в calendar.html не найдены REGION_KEY и LOCAL_EVENTS — по ним считаются «локальные» старты');
}
const allYearsDecl = calendarHtml.includes('const allYearsEvents = [')
    ? extractLiteral(calendarHtml, 'const allYearsEvents = [', '[', ']') + ';\n'
    : '';

let source = extractLiteral(read('utils.js'), 'const regions = {') + ';\n';
source += extractLiteral(read('utils.js'), 'const SERVICES = [', '[', ']') + ';\n';
source += extractLiteral(read('utils.js'), 'function assignPage(') + '\n';
source += extractLiteral(read('global-menu.js'), 'const GLOBAL_MENU_ITEMS = [', '[', ']') + ';\n';
for (const f of ['starts.js', 'owners.js', 'planners.js', ...MAP_FILES, ...CALENDAR_FILES]) {
    source += read(f) + '\n;\n';
}
source += allYearsDecl;
source += `;({ regions, SERVICES, starts, owners, planners, menu: GLOBAL_MENU_ITEMS,
    oMaps: [${oMapsMatch[1]}],
    localEvents: ${localEventsMatch[1]},
    buckets: {${BUCKET_VARS.join(', ')}} });`;

const loaded = vm.runInContext(source, vm.createContext({}), { filename: 'omaps-data.js' });
const { regions, SERVICES, starts, owners, planners, menu, oMaps, localEvents, buckets } = loaded;
const REGION_KEY = regionKeyMatch[1];

// Все события по id — для parent (место дочерней записи берётся у родителя).
const eventsById = new Map();
for (const list of Object.values(buckets)) {
    for (const evt of list) if (evt && evt.id && !eventsById.has(evt.id)) eventsById.set(evt.id, evt);
}

/**
 * Локальный старт — как isLocal() в js/calendar.js: region совпадает с REGION_KEY
 * страницы, запись из файлов регионального календаря (localEvents) или локален
 * её родитель (parent).
 */
const localCache = new Map();
function isLocal(evt) {
    if (localCache.has(evt)) return localCache.get(evt);
    localCache.set(evt, false);   // защита от зацикленных parent
    let local = evt.region === REGION_KEY || localEvents.has(evt);
    if (!local && evt.parent && evt.parent !== evt.id && eventsById.has(evt.parent)) {
        local = isLocal(eventsById.get(evt.parent));
    }
    localCache.set(evt, local);
    return local;
}

// ------------------------------------------------------------ вспомогалки --

const asArray = v => (v == null ? [] : Array.isArray(v) ? v : [v]);
const isObject = v => v !== null && typeof v === 'object' && !Array.isArray(v);

/**
 * Трансляции события — повторяет getGPS(): gps, а если его нет — o_gps;
 * к ним добавляются Livelox (livelox) и RouteGadget (rg).
 * gps, o_gps и rg — значение или объект { 'подпись': значение }; livelox —
 * номер события или массив номеров. Возвращает пары [подпись, адрес].
 *
 * Собирается тем же объектом, что и на сайте, чтобы порядок совпадал:
 * у объекта JS ключи-числа (rg по дням — '24', '25') идут первыми.
 * Одинаковые подписи сайт различает невидимым символом — здесь он убирается.
 */
function gpsEntries(evt) {
    const prefixed = (value, prefix) => {
        if (!isObject(value)) return prefix + value;
        const out = {};
        for (const [k, v] of Object.entries(value)) out[k] = prefix + v;
        return out;
    };
    let gps = evt.gps;
    if (!gps && evt.o_gps) gps = prefixed(evt.o_gps, O_GPS_PREFIX);

    const extra = {};
    if (evt.livelox != null) {
        const ids = asArray(evt.livelox);
        ids.forEach((id, i) => { extra['Livelox' + (ids.length > 1 ? ' ' + (i + 1) : '')] = LIVELOX_PREFIX + id; });
    }
    const rg = evt.rg ? (isObject(evt.rg) ? evt.rg : { 'RouteGadget': evt.rg }) : {};

    if (!Object.keys(extra).length && !Object.keys(rg).length) {
        if (!gps) return [];
        return isObject(gps) ? Object.entries(gps) : asArray(gps).map(v => [evt.gps ? 'GPS' : 'O-GPS', v]);
    }
    const result = !gps ? {} : isObject(gps) ? { ...gps } : { [evt.gps ? 'GPS' : 'O-GPS']: gps };
    for (const [k, v] of [...Object.entries(extra), ...Object.entries(rg)]) {
        let key = k;
        while (key in result) key += '\u200B';
        result[key] = v;
    }
    return Object.entries(result).map(([k, v]) => [k.replace(/\u200B/g, ''), v]);
}

/** Значок трансляции — повторяет gpsIcon(url, 'o-gps.gif'). */
function gpsIcon(url) {
    if (/livelox\.com/i.test(String(url))) return 'livelox.webp';
    if (/\/rg2\.php|\/rg2\/(index\.php)?#|\/reitti\.cgi/i.test(String(url))) return 'rg2.webp';
    return 'o-gps.gif';
}

/** Сервис ссылки из SERVICES (js/utils.js) — первое совпадение по адресу. */
function findLinkService(url) {
    const u = String(url == null ? '' : url);
    return SERVICES.find(s => s.re.test(u));
}

/** Иконка ссылки на обычную страницу сервиса — повторяет linkSiteImg(); путь от корня сайта. */
function linkSiteImg(url, fallback) {
    const service = findLinkService(url);
    if (service && service.siteImg) return service.siteImg;
    return service && service.img && !service.imgOnlyFor ? service.img : fallback;
}

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

/**
 * Раскраска карточки — повторяет классы строки в renderMapsTable():
 * лыжное ориентирование и лыжные гонки получают SKI, лыжный рогейн
 * остаётся рогейном.
 */
function colorClass(evt) {
    if (has(evt, 'ORIENT') || has(evt, 'INDOOR')) return 'ORIENT';
    if (has(evt, 'WATER')) return 'WATER';
    if (isRogaine(evt)) return 'ROGAINE';
    if (has(evt, 'SKI') || has(evt, 'SK_RACE')) return 'SKI';
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
            case 'TRAIL_O': return 'Трейл-О';
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

// Значки файлов, которые есть в images/ (<ext>-file.png) — FILE_ICON_EXTS в utils.js.
const FILE_ICON_EXTS = ['doc', 'gif', 'jpg', 'ocd', 'pdf', 'png', 'url', 'webp'];

/**
 * Значок файла вида `pdf-file.png` — повторяет downloadIconExt() и
 * extractFileExt(): расширение берётся из последней части адреса без
 * параметров; без точки в ней, как и для расширения без своего значка, — url.
 */
function fileIcon(url) {
    let u = String(url);
    if (u.includes('?')) u = u.replace(/[?&]+([^=&]+)=([^&]*)/gi, '').replace(/\/+$/, '');
    const last = u.slice(u.lastIndexOf('/') + 1);
    const dot = last.lastIndexOf('.');
    let ext = dot < 0 ? 'url' : last.slice(dot + 1);
    ext = ext.substring(0, ext.search(/$|[?#]/)).toLowerCase();
    const icon = { docx: 'doc', jpeg: 'jpg', omap: 'ocd' }[ext] || ext;
    return (FILE_ICON_EXTS.includes(icon) ? icon : 'url') + '-file.png';
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

/**
 * Иконка сервиса результатов. У O-Site для результатов — значок с «R»
 * (o-site-r.gif, как в SERVICES), обычный o-site.gif — для страниц сайта.
 */
function resIcon(url) {
    if (url.includes('orgeo')) return 'orgeo.webp';
    if (url.includes('o-site')) return 'o-site-r.gif';
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
 * kind  — семантика: reg | res | split | reskeep | site | bulletin | gps |
 *         photo | video | map | place | publish | doc
 * icon  — полный адрес картинки на сайте; приложение рисует её вместо подписи
 * glyph — эмодзи вместо картинки (для ссылок рядом с местом, как на сайте)
 * slot  — куда ставить: title (сразу за названием), place (сразу за местом),
 *         row (общий ряд в раскрытой карточке)
 *
 * label остаётся всегда: он идёт в описание для чтения с экрана и во
 * всплывающую подсказку при долгом нажатии.
 */

/**
 * Адрес, на который ведёт название старта: страница события event.html?id=...,
 * как buildEventStart(evt, …, withEventPage) на сайте. Сайты события стоят
 * значками рядом с названием, см. siteIcons().
 */
function nameUrl(evt) {
    if (!evt.id) return null;
    return SITE + 'event.html?id=' + encodeURIComponent(evt.id);
}

/** Сайт старта, к которому относится событие (первый из start), — eventStartLink(). */
function eventStartLink(evt) {
    const st = asArray(evt.start)[0];
    return st && starts[st] && starts[st].link ? starts[st].link : null;
}

/**
 * Значки сайтов события у названия — повторяет buildEventSiteIcons():
 * сначала страница на O-Site, затем все ссылки из link. Если нет ни того,
 * ни другого — сайт старта. Ссылка известного сервиса (SERVICES) получает
 * его значок и подпись (Википедия, ЖЖ, ВКонтакте…), остальные — o-site.gif.
 * Возвращает [{ url, label, iconPath }], iconPath — от корня сайта.
 */
function siteIcons(evt) {
    const urls = [];
    for (const o of asArray(evt.o_site)) urls.push(O_SITE_PREFIX + o);
    for (const l of asArray(evt.link)) if (l) urls.push(l);
    let defaultTitle = 'Страница сайта события';
    if (!urls.length) {
        const startLink = eventStartLink(evt);
        if (startLink) urls.push(startLink);
        defaultTitle = 'Сайт старта';
    }
    return urls.map(url => {
        const service = findLinkService(url);
        return {
            url,
            label: service ? service.label : defaultTitle,
            iconPath: linkSiteImg(url, 'images/o-site.gif'),
        };
    });
}

/** Место события; у дочерней записи без своего места — место родителя (getEventPlace()). */
function eventPlace(evt) {
    let place = evt.place;
    if (!place && evt.parent) {
        const parent = eventsById.get(evt.parent);
        if (!parent) warn(`${evt.id}: parent ${evt.parent} — такой записи нет`);
        else if (parent.place) place = parent.place;
    }
    return place ? String(place).trim() : null;
}

/** Карта O-Maps по имени файла — повторяет getMapForName(). */
const mapByName = new Map();
function getMapForName(name) {
    if (!name) return null;
    if (mapByName.has(name)) return mapByName.get(name);
    let found = null;
    for (const m of oMaps) {
        if (m.url && String(m.url).includes(name)) { found = m; break; }
        const link = asArray(m.link)[0];
        if (link && String(link).includes(name)) { found = m; break; }
    }
    mapByName.set(name, found);
    return found;
}

/**
 * Имя внешнего файла карты для подписи — externalMapFileName(): последняя
 * часть адреса, а если в ней нет расширения — вместе с предыдущей.
 */
function externalMapFileName(url) {
    const parts = String(url).split(/[?#]/)[0].split('/').filter(Boolean);
    let name = parts.pop() || '';
    if (!name.includes('.') && parts.length > 1) name = parts.pop() + '/' + name;
    try { return decodeURIComponent(name); } catch (e) { return name; }
}

/** Подпись ссылки на сплиты: «Сплиты», с сервисом, если он известен. */
function splitLabel(url) {
    const label = resLabel(String(url));
    return label === 'Результаты' ? 'Сплиты' : 'Сплиты (' + label + ')';
}

function buildLinks(evt) {
    const links = [];
    // icon — файл из images/, iconPath — путь от корня сайта (logo/…, images/…).
    const add = ({ kind, label, url, icon, iconPath, glyph, slot }) => {
        const u = absolute(url);
        if (!u || links.some(l => l.url === u)) return;
        const link = { kind, label, url: u, slot: slot || 'row' };
        if (icon) link.icon = IMAGES + icon;
        else if (iconPath) link.icon = SITE + iconPath;
        if (glyph) link.glyph = glyph;
        links.push(link);
    };

    // Порядок значков у названия повторяет строку календаря на сайте:
    // сайты события, регистрация, информационный бюллетень.
    for (const s of siteIcons(evt)) {
        add({ kind: 'site', label: s.label, url: s.url, iconPath: s.iconPath, slot: 'title' });
    }

    for (const r of asArray(evt.reg)) {
        add({ kind: 'reg', label: regLabel(r), url: r, icon: regIcon(r), slot: 'title' });
    }

    // Информационный бюллетень — поле bulletin, ссылка или массив ссылок.
    //
    // Картинку с сайта не передаём намеренно: images/info.png — тёмный
    // растр, в тёмной теме он сливается с фоном. Приложение рисует
    // для этого вида векторный значок, красящийся цветом темы.
    for (const b of asArray(evt.bulletin)) {
        add({ kind: 'bulletin', label: 'Информационный бюллетень', url: b, slot: 'title' });
    }

    // Карта, точка и трек — сразу за местом, теми же эмодзи, что и на сайте
    // (buildEventPlaceOMaps): 🗺️ карта, 🌐 координаты, 🚸 трек. Карта
    // открывается на своей странице (поле page карты или page её старта),
    // остальные — на spb.html; выбранная страница действует и для следующих
    // ссылок, как на сайте. Трек — только если нет ни карты, ни координат.
    let mapPage = 'spb.html';
    const hasCoord = Array.isArray(evt.coord) && evt.coord.length === 2;
    const coordLink = () => add({
        kind: 'place', label: 'Место на O-Maps', glyph: '🌐', slot: 'place',
        url: `${SITE}${mapPage}?x=${evt.coord[0]}&y=${evt.coord[1]}&calendar`,
    });
    const mapNames = asArray(evt.map);
    if (mapNames.length) {
        for (const m of mapNames) {
            const mp = getMapForName(m);
            const page = mp && (mp.page || (mp.start && starts[mp.start] && starts[mp.start].page));
            if (page) mapPage = page + '.html';
            add({
                kind: 'map', label: 'Карта на O-Maps', glyph: '🗺️', slot: 'place',
                url: `${SITE}${mapPage}?calendar&map=${m}`,
            });
            if (hasCoord) coordLink();
        }
    } else if (hasCoord) {
        coordLink();
    } else if (evt.track) {
        add({
            kind: 'place', label: 'Трек на O-Maps', glyph: '🚸', slot: 'place',
            url: `${SITE}tracks.html?track=${evt.track}&calendar`,
        });
    }

    // Внешние карты (buildEventExternalMaps): 🗺️ на файлы карт из поля maps
    // (адреса в интернете или файлы на самом сайте), значок O-Stuff — на карты
    // архива maps.o-stuff.net из поля o_stuff (номера карт).
    for (const url of asArray(evt.maps)) {
        add({
            kind: 'map', label: 'Карта (файл) ' + externalMapFileName(url), glyph: '🗺️', slot: 'place', url,
        });
    }
    for (const n of asArray(evt.o_stuff)) {
        add({
            kind: 'map', label: 'O-Stuff, карта ' + n, icon: 'o-stuff.webp', slot: 'place',
            url: O_STUFF_MAP_PAGE + n,
        });
    }

    for (const r of asArray(evt.res)) {
        add({ kind: 'res', label: resLabel(r), url: r, icon: resIcon(r) });
    }
    // Сплиты — любые сервисы и файлы; значок — как у результатов.
    for (const sp of asArray(evt.split)) {
        add({ kind: 'split', label: splitLabel(sp), url: sp, icon: resIcon(String(sp)) });
    }
    for (const r of asArray(evt.reskeep)) {
        add({ kind: 'reskeep', label: 'Reskeep', url: RESKEEP_PREFIX + r, icon: 'r-k.gif' });
    }
    for (const [label, url] of gpsEntries(evt)) {
        add({ kind: 'gps', label, url, icon: gpsIcon(url) });
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
        if (seen.has(id)) {
            warn(`${id}: идентификатор повторяется (${key}) — в выгрузку попала только первая запись`);
            continue;
        }
        seen.add(id);

        const fmt = evt.fmt ? stripHtml(evt.fmt) : null;
        const info = evt.info ? absolutizeHtml(evt.info) : null;
        const place = eventPlace(evt);

        events.push({
            id,
            date: evt.date,
            endDate: evt.endDate || null,
            name: String(evt.name || '').trim(),
            place,
            types: typesOf(evt),
            typeLabel: typeLabel(evt),
            fmt,
            filters: filterKeys(evt),
            color: colorClass(evt),
            badge: badge(evt),
            major: isMajor(evt),
            // «Локальный» старт региона календаря — галочка «локальные» на сайте.
            local: isLocal(evt),
            cancelled: Boolean(evt.cancelled),
            closed: evt.price === -1,
            paid: evt.price === 1,
            logo: logoFile(evt) ? SITE + 'logo/' + logoFile(evt) : null,
            owner: ownerText(evt),
            planner: plannersText(evt),
            infoHtml: info,
            nameUrl: nameUrl(evt),
            // Окончание приёма заявок кладётся сырой строкой: подпись вроде
            // «осталось 5 ч» устаревает ежеминутно, её считает приложение
            // при отрисовке. Время московское, как на orgeo и o-reg.
            endReg: evt.endReg || null,
            links: buildLinks(evt),
            // Строка для поиска — заранее в нижнем регистре, чтобы приложение
            // не занималось этим на каждом нажатии клавиши.
            search: [evt.name, place, fmt, stripHtml(info), ownerText(evt), plannersText(evt)]
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

for (const w of warnings) process.stderr.write('предупреждение: ' + w + '\n');
