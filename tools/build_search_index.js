/*
 * build_search_index.js — поисковый индекс каталога O-Maps для search.html.
 *
 *   node tools/build_search_index.js [--repo DIR] [--out FILE] [-n] [--report FILE]
 *
 *   --repo DIR      корень сайта (по умолчанию — каталог над tools/)
 *   --out FILE      куда писать индекс (по умолчанию js/search-index.json в корне сайта)
 *   -n, --dry-run   только собрать и показать статистику, файл не писать
 *   --report FILE   записать в файл отчёт о подозрительных данных (по умолчанию — в консоль)
 *   -h, --help      эта справка
 *
 * Читает все данные сайта: js/calendar-*.js (кроме calendar-mobile.js), js/maps-*.js,
 * starts.js, owners.js, authors.js, planners.js, poi.js. Логику берёт из самого сайта:
 * utils-common.js и utils.js загружаются в Node с заглушками браузера, так что год карты
 * (year), логотип события (logoList), закрытые карты (mapImageUrl), имя карты для
 * map-info.html (getMapName), словари dic и regions — те же, что на страницах.
 *
 * Индекс — JSON, по массиву на вид записей; запись — массив полей по порядку:
 *   e (события)  [id, дата, дата окончания, название, место, логотип, виды, флаги, родитель, текст]
 *                дата — 'YYYY-MM-DD' или 'YYYY' (запись с year вместо date); флаги: c — отменено,
 *                m — главный старт (поле major); родитель — id многодневки (поле parent) или '';
 *                у этапа без своего места и логотипа — место и логотип родителя, как на сайте
 *   m (карты)    [имя для map-info.html, название, годы, картинка, регион, виды, текст]
 *                годы — массив (year карты и годы всех её дат); картинка — подложка карты,
 *                у закрытой правообладателем — заглушка (mapImageUrl)
 *   s (серии)    [код, название, кратко, логотип, текст]
 *   o (клубы)    [код, название, логотип, текст]
 *   a (авторы)   [код, имя, логотип, текст]
 *   p (начальники дистанций) [код, имя, текст]
 *   i (POI)      [id, название, картинка, место, текст]
 * «Текст» — всё остальное, по чему ищем, уже нормализованное (строчные, ё = е, без тегов):
 * все строковые поля записи, кроме ссылок, путей, адресов почты и личных пометок
 * (me, strava), плюс названия связанных серий, клубов, авторов, начальников дистанций,
 * регионов, видов (по-русски, как в dic) и дата вида ДД.ММ.ГГГГ. Название, место, id события
 * и имя карты в «текст» не входят — страница добавляет их сама.
 *
 * Файл пишется, только если его содержимое изменилось (повторный запуск ничего не меняет).
 * Данные не исправляются: дубли id, дубли имён карт, ссылки на несуществующие серии, клубы,
 * авторов и родителей выводятся в отчёт для ручной правки.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

// ------------------------------------------------------------- параметры --

const args = process.argv.slice(2);
if (args.includes('-h') || args.includes('--help')) {
    console.log(fs.readFileSync(__filename, 'utf8').split('*/')[0].replace(/^\/\*|^ \*/gm, ''));
    process.exit(0);
}
const opt = name => {
    const i = args.indexOf(name);
    return i >= 0 ? args[i + 1] : null;
};
const REPO = path.resolve(opt('--repo') || path.join(__dirname, '..'));
const OUT = path.resolve(opt('--out') || path.join(REPO, 'js', 'search-index.json'));
const DRY = args.includes('-n') || args.includes('--dry-run');
const REPORT = opt('--report');

// ------------------------------------------------------- загрузка сайта --

// Заглушки браузера: utils.js при загрузке читает адрес, userAgent, localStorage
// и ставит таймер виджета. Ничего из этого индексу не нужно.
const sandbox = {
    location: {search: '', pathname: '/search.html', origin: '', href: ''},
    navigator: {userAgent: 'node', maxTouchPoints: 0},
    localStorage: {getItem: () => null, setItem: () => {}},
    document: {
        addEventListener: () => {}, querySelector: () => null, querySelectorAll: () => [],
        getElementById: () => null, readyState: 'complete'
    },
    matchMedia: () => ({matches: false}),
    setTimeout: () => 0, clearTimeout: () => {}, setInterval: () => 0,
    URLSearchParams, console
};
sandbox.window = sandbox;
const ctx = vm.createContext(sandbox);
const run = file => vm.runInContext(fs.readFileSync(path.join(REPO, 'js', file), 'utf8'), ctx, {filename: file});
const get = expr => vm.runInContext(expr, ctx);

// Справочники — до utils.js не обязательно, но им пользуются его функции.
for (const f of ['starts.js', 'owners.js', 'authors.js', 'planners.js', 'poi.js']) run(f);
run('utils-common.js');
run('utils.js');

// Файлы данных: имена массивов берём из объявлений `let имя = [`.
function loadArrays(re) {
    const out = [];
    const files = fs.readdirSync(path.join(REPO, 'js')).filter(f => re.test(f)).sort();
    for (const f of files) {
        run(f);
        const src = fs.readFileSync(path.join(REPO, 'js', f), 'utf8');
        for (const m of src.matchAll(/^(?:let|const|var)\s+(\w+)\s*=\s*\[/mg)) {
            out.push({file: f, name: m[1], items: get(m[1])});
        }
    }
    return out;
}
const calendars = loadArrays(/^calendar-.+\.js$/).filter(c => c.file !== 'calendar-mobile.js');
const mapFiles = loadArrays(/^maps-.+\.js$/);

const starts = get('starts'), owners = get('owners'), authors = get('authors'), planners = get('planners');
const poi = get('poi'), dic = get('dic'), regions = get('regions');
const fn = name => get(name);
const logoList = fn('logoList'), year = fn('year'), mapImageUrl = fn('mapImageUrl'), getMapName = fn('getMapName');

// ------------------------------------------------------------- текст --

const ENTITIES = {nbsp: ' ', amp: '&', quot: '"', laquo: '«', raquo: '»', mdash: '—', ndash: '–', lt: '<', gt: '>', apos: "'", hellip: '…'};

function plain(html) {
    return String(html ?? '')
        .replace(/<[^>]*>/g, ' ')
        .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
        .replace(/&([a-z]+);/gi, (s, n) => ENTITIES[n.toLowerCase()] ?? s)
        .replace(/\s+/g, ' ')
        .trim();
}

// Как unifyString() в utils.js: строчные, ё = е.
function norm(s) {
    return plain(s).toLocaleLowerCase('ru').replaceAll('ё', 'е');
}

// Не текст для поиска: название и место (их добавляет страница), личные пометки, геометрия,
// ссылки, даты (год ищется отдельно, дата — в виде ДД.ММ.ГГГГ), id и коды папок o-site.
const SKIP_KEYS = new Set(['name', 'place', 'me', 'strava', 'bounds', 'coord', 'url', 'link', 'local_link',
    'zindex', 'iconSize', 'image', 'logo', 'foto', 'about', 'id', 'date', 'endDate', 'endReg', 'parent',
    'map', 'o_site', 'o_stuff', 'docs']);
const isAddress = s => /^(https?:|\.{0,2}\/|mailto:|www\.)/i.test(s) || /^[\w.+-]+@[\w-]+\.[\w.]+$/.test(s);

// Все строковые значения записи (вглубь массивов и объектов), кроме ссылок и служебных полей.
// Ключи объектов (подписи трансляций o_gps и т.п.) — тоже текст.
function collect(value, out, key) {
    if (value == null || SKIP_KEYS.has(key)) return;
    if (typeof value === 'string') {
        if (!isAddress(value.trim())) {
            const t = plain(value).replace(/\S+@\S+\.\S+/g, ' ');
            if (t) out.push(t);
        }
    } else if (Array.isArray(value)) {
        value.forEach(v => collect(v, out));
    } else if (typeof value === 'object') {
        for (const [k, v] of Object.entries(value)) {
            if (k !== key && !SKIP_KEYS.has(k)) {
                if (key !== undefined && !/^\d+$/.test(k)) out.push(k);   // подписи во вложенных объектах
                collect(v, out, k);
            }
        }
    }
}

const asList = v => v == null ? [] : (Array.isArray(v) ? v : [v]);

// Имя человека из authors.js / planners.js: «Егор Алексеев, <a href="mailto:…">…</a>» -> «Егор Алексеев»
function personName(rec) {
    return plain(String(rec?.name ?? '').split(/,\s*<a|\s+-\s+<a|<a/)[0]).replace(/[,\s-]+$/, '');
}
const ownerName = o => plain(o.title || o.name);

const problems = [];
const problem = msg => problems.push(msg);

function refText(out, codes, table, label, toName, where) {
    for (const c of asList(codes)) {
        if (typeof c !== 'string') continue;
        out.push(c);
        const r = table[c];
        if (r) out.push(toName(r));
        else problem(`${where}: ${label} ${c} не найден`);
    }
}

function typeText(out, types) {
    for (const t of asList(types)) {
        out.push(t);
        if (dic[t]) out.push(dic[t]);
    }
}

function regionText(out, code) {
    if (code && regions[code]) out.push(regions[code].name);
}

function ddmmyyyy(d) {
    const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(d));
    return m ? `${m[3]}.${m[2]}.${m[1]}` : '';
}

// Текст поиска без повторов слов: индекс меньше, а для поиска подстроки порядок не важен.
function haystack(parts, exclude) {
    const skip = new Set(norm(exclude).split(' '));
    const seen = new Set();
    const words = [];
    for (const w of norm(parts.join(' ')).split(' ')) {
        if (w && !skip.has(w) && !seen.has(w)) {
            seen.add(w);
            words.push(w);
        }
    }
    return words.join(' ');
}

// ------------------------------------------------------------- события --

const eventsById = new Map();
for (const c of calendars) {
    for (const e of c.items) {
        if (!e || typeof e !== 'object') continue;
        if (!e.id) { problem(`${c.file}: запись без id: ${plain(e.name)} ${e.date ?? e.year ?? ''}`); continue; }
        if (eventsById.has(e.id)) {
            const prev = eventsById.get(e.id);
            if (prev.e !== e) problem(`${c.file}: повтор id ${e.id} (первая запись — в ${prev.file})`);
            continue;
        }
        eventsById.set(e.id, {e, file: c.file});
    }
}

const mapsByName = new Map();      // имя для map-info.html -> карта
for (const f of mapFiles) {
    for (const m of f.items) {
        if (!m || typeof m !== 'object' || !m.url) continue;
        const key = getMapName(m);
        if (!key) { problem(`${f.file}: у карты «${plain(m.name)}» не определяется имя файла (url ${m.url})`); continue; }
        if (mapsByName.has(key)) {
            if (mapsByName.get(key).m !== m) problem(`${f.file}: повтор имени карты ${key} (первая — в ${mapsByName.get(key).file})`);
            continue;
        }
        mapsByName.set(key, {m, file: f.file});
    }
}

const E = [];
for (const [id, {e, file}] of eventsById) {
    const where = `${file} ${id}`;
    const parts = [];
    collect(e, parts);
    refText(parts, e.start, starts, 'старт', s => `${plain(s.name)} ${plain(s.short)}`, where);
    refText(parts, e.owner, owners, 'владелец', ownerName, where);
    refText(parts, e.planner, planners, 'начальник дистанции', personName, where);
    for (const s of asList(e.start)) regionText(parts, starts[s]?.region);
    regionText(parts, e.region);
    typeText(parts, e.type);
    for (const mk of asList(e.map)) {
        const mm = mapsByName.get(mk);
        if (mm) parts.push(plain(mm.m.name));
    }
    parts.push(ddmmyyyy(e.date), ddmmyyyy(e.endDate));
    if (e.cancelled) parts.push('отменено');
    if (e.parent && !eventsById.has(e.parent)) problem(`${where}: parent ${e.parent} не найден`);

    const date = String(e.date ?? e.year ?? '');
    if (!date) problem(`${where}: нет ни date, ни year`);
    // Этап многодневки без своего места и логотипа — как на сайте (getEventPlace в utils.js):
    // место и логотип родителя.
    const parent = e.parent ? eventsById.get(e.parent)?.e : null;
    const place = e.place ?? parent?.place;
    const logo = logoList(e)[0] || (parent ? logoList(parent)[0] : '') || '';
    const flags = (e.cancelled ? 'c' : '') + (e.major ? 'm' : '');
    E.push([id, date, String(e.endDate ?? ''), plain(e.name), plain(place), logo,
        asList(e.type).join(','), flags, e.parent || '', haystack(parts, `${e.name} ${place ?? ''}`)]);
}
E.sort((a, b) => b[1].localeCompare(a[1]) || a[0].localeCompare(b[0]));

// --------------------------------------------------------------- карты --

// Регион карты: поле region, иначе — файл, явно названный по региону; остальные — СПб и ЛО.
const FILE_REGION = {
    'maps-moscow.js': 'MSK', 'maps-bash.js': 'BASH', 'maps-pskov.js': 'PSKOV', 'maps-ryazan.js': 'RYAZAN',
    'maps-samara.js': 'SAMARA', 'maps-serbia.js': 'SERBIA', 'maps-nn.js': 'N_NOVGOROD', 'maps-unknown.js': ''
};

const M = [];
for (const [key, {m, file}] of mapsByName) {
    const where = `${file} ${key}`;
    const parts = [];
    collect(m, parts);
    refText(parts, m.author, authors, 'автор', personName, where);
    refText(parts, m.editor, authors, 'редактор', personName, where);
    refText(parts, m.owner, owners, 'владелец', ownerName, where);
    refText(parts, m.planner, planners, 'начальник дистанции', personName, where);
    refText(parts, m.start, starts, 'старт', s => `${plain(s.name)} ${plain(s.short)}`, where);
    typeText(parts, m.type);
    const region = m.region ?? (file in FILE_REGION ? FILE_REGION[file] : 'SPB');
    regionText(parts, region);
    if (region && !regions[region]) problem(`${where}: регион ${region} не найден в regions`);

    const years = new Set();
    const y = year(m);
    if (y) years.add(Number(y));
    for (const d of asList(m.date)) {
        const dy = parseInt(String(d), 10);
        if (dy) years.add(dy);
        parts.push(ddmmyyyy(d));
    }
    M.push([key, plain(m.name), [...years].sort(), mapImageUrl(m), region || '', asList(m.type).join(','),
        haystack(parts, m.name)]);
}
M.sort((a, b) => (b[2][0] ?? 0) - (a[2][0] ?? 0) || a[0].localeCompare(b[0]));

// ------------------------------------------------- серии, клубы, люди, места --

const byName = (a, b) => a[1].localeCompare(b[1], 'ru');

const S = Object.entries(starts).map(([code, s]) => {
    const parts = [code];
    collect(s, parts);
    refText(parts, s.owner, owners, 'владелец', ownerName, `starts.js ${code}`);
    regionText(parts, s.region);
    return [code, plain(s.name || s.short), plain(s.short), s.logo || '', haystack(parts, `${s.name ?? ''} ${s.short ?? ''}`)];
}).sort(byName);

const O = Object.entries(owners).map(([code, o]) => {
    const parts = [code];
    collect(o, parts);
    return [code, ownerName(o), o.logo || '', haystack(parts, ownerName(o))];
}).sort(byName);

const A = Object.entries(authors).map(([code, a]) => [code, personName(a), a.logo || '', haystack([code, plain(a.info)], personName(a))])
    .sort(byName);

const P = Object.entries(planners).map(([code, p]) => [code, personName(p), haystack([code], personName(p))])
    .sort(byName);

const I = poi.map(p => {
    const parts = [p.id];
    collect(p, parts);
    refText(parts, p.start, starts, 'старт', s => plain(s.name), `poi.js ${p.id}`);
    refText(parts, p.owner, owners, 'владелец', ownerName, `poi.js ${p.id}`);
    typeText(parts, p.type);
    return [p.id, plain(p.name), p.logo ? './logo/' + p.logo : (p.image || ''), plain(p.place), haystack(parts, `${p.name} ${p.place ?? ''}`)];
}).sort(byName);

// -------------------------------------------------------------- запись --

const index = {e: E, m: M, s: S, o: O, a: A, p: P, i: I};
// По записи на строку: diff в git остаётся читаемым, а размер почти тот же.
const json = '{\n' + Object.entries(index).map(([k, rows]) =>
    `"${k}": [\n` + rows.map(r => JSON.stringify(r)).join(',\n') + '\n]').join(',\n') + '\n}\n';

const old = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : null;
const changed = old !== json;
const zlib = require('zlib');
const kb = n => (n / 1024).toFixed(0) + ' КБ';
console.log(`событий ${E.length}, карт ${M.length}, серий ${S.length}, клубов ${O.length}, ` +
    `авторов ${A.length}, начальников дистанций ${P.length}, мест ${I.length}`);
console.log(`размер ${kb(Buffer.byteLength(json))}, gzip ${kb(zlib.gzipSync(json).length)}, ` +
    `brotli ${kb(zlib.brotliCompressSync(json).length)}`);
if (!changed) console.log(`${path.relative(REPO, OUT)}: изменений нет`);
else if (DRY) console.log(`${path.relative(REPO, OUT)}: будет записан (пробный запуск)`);
else {
    fs.writeFileSync(OUT, json, 'utf8');
    console.log(`${path.relative(REPO, OUT)}: записан`);
}

const report = problems.length ? `подозрительные данные (${problems.length}):\n` + problems.map(p => '  ' + p).join('\n') + '\n' : '';
if (REPORT) {
    fs.writeFileSync(REPORT, report || 'подозрительных данных нет\n', 'utf8');
    if (problems.length) console.log(`подозрительные данные: ${problems.length}, список — в ${REPORT}`);
} else if (report) {
    console.log(report);
}
