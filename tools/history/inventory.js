// Инвентаризация мест статьи: node inventory.js <repo> <article.html> <out.json>
const fs = require('fs'), vm = require('vm'), path = require('path');
const [repo, article, out] = process.argv.slice(2);
const ctx = {}; vm.createContext(ctx);
const files = fs.readdirSync(path.join(repo, 'js')).filter(f => /^(calendar|maps)-.*\.js$|^(poi|starts|owners|authors)\.js$/.test(f) && f !== 'calendar-mobile.js');
const fileOf = new Map();   // объект карты -> имя файла maps-*.js
for (const f of files) {
  const s = fs.readFileSync(path.join(repo, 'js', f), 'utf8').replace(/^\s*(let|const)\s+/mg, 'var ');
  const before = new Set(Object.keys(ctx));
  try { vm.runInContext(s, ctx, {filename: f}); } catch (e) { console.error('skip', f, e.message); }
  for (const k of Object.keys(ctx)) if (!before.has(k) && Array.isArray(ctx[k])) for (const o of ctx[k]) if (o && o.url) fileOf.set(o, f);
}
// страницы разделов и подключаемые ими файлы карт
const REGION_PAGES = ['spb', 'moscow', 'pskov', 'ryazan', 'samara', 'bash', 'serbia'];
const pageFiles = {};
for (const p of REGION_PAGES.concat(['starts'])) pageFiles[p] = new Set([...fs.readFileSync(path.join(repo, p + '.html'), 'utf8').matchAll(/js\/(maps-[a-z0-9-]+\.js)/g)].map(m => m[1]));
// код региона (поле region у карты, события или старта) -> страница раздела сайта
const REGION_FIELD = {SPB: 'spb', MSK: 'moscow', PSKOV: 'pskov', RYAZAN: 'ryazan', SAMARA: 'samara', BASH: 'bash', SERBIA: 'serbia'};
// раздел сайта карты — как mapLink в utils.js: page карты, иначе page её старта;
// дальше region (SPB, MSK…) и, наконец, региональная страница, подключающая файл карты
const MAP_PAGES = REGION_PAGES.concat(['starts']);
function sectionOf(m) {
  if (m.page && MAP_PAGES.includes(m.page)) return m.page;
  const st = m.start ? [].concat(m.start)[0] : null;
  if (st && ctx.starts && ctx.starts[st] && MAP_PAGES.includes(ctx.starts[st].page)) return ctx.starts[st].page;
  if (m.region) return REGION_FIELD[m.region] || 'all';
  const f = fileOf.get(m);
  const pages = REGION_PAGES.filter(p => pageFiles[p].has(f));
  if (pages.length === 1) return pages[0];
  if (pages.length === 0 && pageFiles.starts.has(f)) return 'starts';   // карты стартов без page старта
  return 'all';
}
// regions — объект в начале utils.js (const regions = {...}); берём его литерал как есть
{
  const u = fs.readFileSync(path.join(repo, 'js', 'utils.js'), 'utf8');
  const i = u.indexOf('const regions = {');
  let depth = 0, j = u.indexOf('{', i);
  for (let k = j; k < u.length; k++) { if (u[k] === '{') depth++; else if (u[k] === '}' && --depth === 0) { j = k + 1; break; } }
  vm.runInContext('var regions = ' + u.slice(u.indexOf('{', i), j) + ';', ctx);
}
// логотипы события — как logoList()/logoOne()/pushLogo() в utils.js; в календаре
// (buildEventStart) показывается первый, а перед ним — значок russialoppet
function pushLogo(logo, l) { if (l && !logo.includes(l)) logo.push(l); }
function logoOne(logo, m) {
  pushLogo(logo, m.logo);
  if (ctx.starts && m.start) {
    for (const s of [].concat(m.start)) {
      const st = ctx.starts[s];
      if (st) { pushLogo(logo, st.logo); if (st.region) pushLogo(logo, ctx.regions[st.region]?.logo); }
    }
  }
  if (m.owner) for (const o of [].concat(m.owner)) pushLogo(logo, ctx.owners[o]?.logo);
  if (m.author) for (const a of [].concat(m.author)) pushLogo(logo, ctx.authors[a]?.logo);
  if (m.region) pushLogo(logo, ctx.regions[m.region]?.logo);
}
function eventLogos(e) {
  const list = []; logoOne(list, e);
  const shown = [];
  if (e.russialoppet) shown.push('russialoppet.gif');
  if (list.length) shown.push(list[0]);
  return shown;
}
const events = new Map(), maps = new Map(); let poi = new Map();
for (const k of Object.keys(ctx)) {
  const v = ctx[k]; if (!Array.isArray(v)) continue;
  for (const o of v) {
    if (!o || typeof o !== 'object') continue;
    if (k === 'poi') { poi.set(o.id, o); continue; }
    if (o.url && o.bounds) { const n = o.url.split('/').pop().replace(/\.[^.]+$/, ''); if (!maps.has(n)) maps.set(n, o); }
    else if (o.id && o.date) events.set(o.id, o);
  }
}
const center = m => m.bounds.length >= 3
  ? [(m.bounds[0][0] + m.bounds[2][0]) / 2, (m.bounds[0][1] + m.bounds[1][1]) / 2]   // как createEventMarker в main.js
  : [(m.bounds[0][0] + m.bounds[1][0]) / 2, (m.bounds[0][1] + m.bounds[1][1]) / 2];
const html = fs.readFileSync(article, 'utf8');
const strip = s => s.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
// разделы: <section ... id="X"> … </section>
const sections = [];
for (const m of html.matchAll(/<section\b[^>]*\bid="([^"]+)"[^>]*>([\s\S]*?)<\/section>/g)) sections.push({id: m[1], start: m.index, body: m[2], bodyStart: m.index + m[0].indexOf(m[2])});
const rows = [];
for (const s of sections) {
  // границы подписей к иллюстрациям
  const caps = [...s.body.matchAll(/<figcaption>[\s\S]*?<\/figcaption>/g)].map(c => [c.index, c.index + c[0].length]);
  const facts = [...s.body.matchAll(/<dl class="hist-facts">[\s\S]*?<\/dl>|<ol aria-label="Вехи по годам"[\s\S]*?<\/ol>/g)].map(c => [c.index, c.index + c[0].length]);
  for (const a of s.body.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)) {
    const attrs = a[1], text = strip(a[2]);
    const href = (attrs.match(/href="([^"]+)"/) || [])[1] || '';
    let kind, key;
    if ((key = (href.match(/event\.html\?id=([^"&#]+)/) || [])[1])) kind = 'event';
    else if ((key = (href.match(/map-info\.html\?map=([^"&#]+)/) || [])[1])) kind = 'map';
    else if ((key = (href.match(/poi\.html\?poi=([^"&#]+)/) || [])[1])) kind = 'poi';
    else continue;
    const where = caps.some(([b, e]) => a.index >= b && a.index < e) ? 'caption' : facts.some(([b, e]) => a.index >= b && a.index < e) ? 'facts' : 'text';
    const r = {section: s.id, where, kind, key, text, pos: s.bodyStart + a.index};
    if (kind === 'event') {
      const e = events.get(key); r.start = e ? e.start || null : null; r.logos = e ? eventLogos(e) : [];
      // регионы события: его поле region и region его стартов (как logoOne в utils.js)
      r.regions = e ? [e.region, ...[].concat(e.start || []).map(st => ctx.starts?.[st]?.region)].filter(Boolean) : [];
      r.regionPages = [...new Set(r.regions.map(rg => REGION_FIELD[rg] || 'all'))]; r.title = e ? strip(e.name || '') : '?'; r.place = e ? (e.place || '') : '?'; r.year = e ? +String(e.date).slice(0, 4) : null;
      if (e && e.coord) { r.coord = e.coord; r.src = 'coord события ' + key; r.srcKind = 'coord'; }
      else if (e && e.map) { const mn = [].concat(e.map).find(n => maps.has(n)); if (mn) { const m = maps.get(mn); r.coord = center(m); r.src = 'центр карты ' + mn + ' (событие ' + key + ')'; r.srcKind = 'map'; r.srcMap = mn; } }
      const ms = e ? [].concat(e.map || []).filter(n => maps.has(n)) : [];
      r.maps = ms; r.mapInfo = ms.map(n => ({file: n, center: center(maps.get(n)), section: sectionOf(maps.get(n))}));
    } else if (kind === 'map') {
      const m = maps.get(key); r.title = m ? m.name : '?'; r.place = m ? m.name : '?'; r.year = m ? m.year : null;
      if (m) { r.coord = center(m); r.src = 'центр карты ' + key; r.maps = [key]; r.mapInfo = [{file: key, center: center(m), section: sectionOf(m)}]; }
    } else {
      const p = poi.get(key); r.title = p ? strip(p.name) : '?'; r.place = r.title; r.poiType = p ? p.type : null;
      if (p) { r.coord = p.coord; r.src = 'poi.js ' + key; }
    }
    rows.push(r);
  }
}
fs.writeFileSync(out, JSON.stringify(rows, null, 1));
// isMapHidden() в utils.js: просмотр карты не разрешён правообладателем
const isMapHidden = m => (m.hidden || (m.owner && m.owner === 'NW')) && (m.hidden !== false);
const allMaps = [...maps.entries()].filter(([n, m]) => Array.isArray(m.bounds) && m.bounds.length >= 2).map(([n, m]) => ({
  file: n, name: m.name, year: m.year || null, coord: center(m), section: sectionOf(m), js: fileOf.get(m),
  url: m.url, bounds: m.bounds.slice(0, 3), hidden: !!isMapHidden(m)}));
fs.writeFileSync(out.replace(/\.json$/, '-maps.json'), JSON.stringify(allMaps));
const by = k => rows.reduce((m, r) => (m[r[k]] = (m[r[k]] || 0) + 1, m), {});
console.log('ссылок:', rows.length, by('kind'), by('where'));
console.log('без координат:', rows.filter(r => !r.coord).length);
console.log('POI:', [...new Set(rows.filter(r => r.kind === 'poi').map(r => r.key + ' [' + r.poiType + '] ' + r.title))].join(' | '));
