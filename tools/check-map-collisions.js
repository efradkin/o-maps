#!/usr/bin/env node
/*
 * check-map-collisions.js
 * -----------------------
 * Ищет коллизии имён карт для ?map= в файлах данных maps-*.js.
 *
 * Почему это важно: getMapForName(fileName) на сайте ищет карту так:
 *
 *     for (const m of oMaps) {
 *         if (m.url && m.url.includes(fileName)) return m;   // <-- подстрока, не точное равенство
 *         const link = getFirstLink(m);
 *         if (link && link.includes(fileName)) return m;
 *     }
 *
 * fileName берётся из ?map= и равен extractFileName(url) карты. Значит, если имя
 * (то, что кладётся в ?map=) одной карты является ПОДСТРОКОЙ url другой карты,
 * запрос неоднозначен, и вернётся ПЕРВАЯ подходящая запись в порядке склейки oMaps.
 *
 * Скрипт только читает и сообщает подозрительные записи — ничего не меняет и не угадывает.
 * Код выхода: 0 — чисто; 1 — найдены коллизии; 2 — ошибки парсинга файлов.
 *
 * Запуск:
 *   node check-map-collisions.js [--src DIR] [--ext] [--links] [--order F1,F2,...] [--json] [--quiet]
 *
 *   --src DIR     каталог с maps-*.js (по умолчанию текущий)
 *   --ext         ?map= содержит расширение (vas_2022.webp), а не голое имя (vas_2022).
 *                 ВЫСТАВЬ ТАК, ЧТОБЫ СОВПАДАЛО С ТВОИМ extractFileName (см. ниже).
 *   --links       дополнительно учитывать fallback по первой ссылке link (как в коде)
 *   --order LIST  порядок склейки oMaps (список имён файлов через запятую). Если задан,
 *                 скрипт ещё и СИМУЛИРУЕТ getMapForName и покажет, какие карты реально
 *                 «перехватываются» другой записью с учётом порядка.
 *   --json        вывод в JSON (для CI/пайплайна)
 *   --quiet       печатать только сводку и коды выхода
 */

'use strict';
const fs = require('fs');
const path = require('path');

// --- ВЫРАВНИВАНИЕ С САЙТОМ ---------------------------------------------------
// Это должно совпадать с extractFileName() из твоих скриптов сайта. Если твоя
// версия отрезает расширение — оставь как есть и запускай без --ext. Если она
// оставляет расширение — запускай с --ext (или поправь функцию тут).
function extractFileName(url, keepExt) {
  const base = url.split('/').pop();          // basename после последнего '/'
  if (keepExt) return base;
  const dot = base.lastIndexOf('.');
  return dot > 0 ? base.slice(0, dot) : base; // без расширения
}
// ----------------------------------------------------------------------------

function parseArgs(argv) {
  const a = { src: '.', ext: false, links: false, order: null, json: false, quiet: false };
  for (let i = 2; i < argv.length; i++) {
    const t = argv[i];
    if (t === '--ext') a.ext = true;
    else if (t === '--links') a.links = true;
    else if (t === '--json') a.json = true;
    else if (t === '--quiet') a.quiet = true;
    else if (t === '--src') a.src = argv[++i];
    else if (t === '--order') a.order = argv[++i].split(',').map(s => s.trim()).filter(Boolean);
    else if (t === '--help' || t === '-h') { printHelp(); process.exit(0); }
    else { console.error('Неизвестный аргумент: ' + t); process.exit(2); }
  }
  return a;
}
function printHelp() {
  console.log('node check-map-collisions.js [--src DIR] [--ext] [--links] [--order F1,F2,...] [--json] [--quiet]');
}

// Загружаем все maps-*.js через eval (устойчиво к комментариям, вложенным
// массивам, висячим запятым, юникоду — как node-eval в твоей валидации).
function loadMaps(dir) {
  let files;
  try {
    files = fs.readdirSync(dir).filter(f => /^maps-.*\.js$/.test(f)).sort();
  } catch (e) {
    console.error('Не открыть каталог --src="' + dir + '": ' + e.message);
    process.exit(2);
  }
  const records = [];
  const errors = [];
  for (const f of files) {
    const code = fs.readFileSync(path.join(dir, f), 'utf8');
    const m = code.match(/let\s+([A-Za-z0-9_$]+)\s*=/);
    if (!m) { errors.push([f, 'нет объявления вида "let X = ..."']); continue; }
    let arr;
    try {
      // let блочно-локален в теле функции — return отдаёт массив наружу.
      arr = Function(code + '\n;return ' + m[1] + ';')();
    } catch (e) {
      errors.push([f, 'ошибка eval: ' + e.message]);
      continue;
    }
    if (!Array.isArray(arr)) { errors.push([f, m[1] + ' — не массив']); continue; }
    arr.forEach((o, i) => {
      if (!o || typeof o !== 'object') return;
      const rec = { file: f, index: i, name: o.name || '' };
      if (typeof o.url === 'string' && o.url) rec.url = o.url;
      // первая ссылка (для fallback по link, как getFirstLink)
      let link = o.link;
      if (Array.isArray(link)) link = link[0];
      if (typeof link === 'string' && link) rec.link = link;
      if (rec.url || rec.link) records.push(rec);
    });
  }
  return { files, records, errors };
}

// «Ищейные строки» карты m — то, по чему getMapForName делает includes:
// url (всегда, если есть) и, при --links, первая ссылка (только когда url нет —
// как в коде: link проверяется как fallback после url).
function haystacks(rec, useLinks) {
  const hs = [];
  if (rec.url) hs.push(rec.url);
  if (useLinks && rec.link && !rec.url) hs.push(rec.link);
  return hs;
}

// Имя, которое карта кладёт в ?map= (getMapName = extractFileName(url ?? firstLink)).
function mapParamName(rec, keepExt) {
  const src = rec.url || rec.link;
  return src ? extractFileName(src, keepExt) : null;
}

function analyze(records, opts) {
  const withName = records
    .map(r => ({ r, name: mapParamName(r, opts.ext) }))
    .filter(x => x.name);

  // 1) Точные дубли url
  const byUrl = new Map();
  for (const r of records) {
    if (!r.url) continue;
    if (!byUrl.has(r.url)) byUrl.set(r.url, []);
    byUrl.get(r.url).push(r);
  }
  const dupUrls = [...byUrl.entries()].filter(([, v]) => v.length > 1);

  // 2) Для каждого различного ?map=-имени — все карты, чей haystack его содержит.
  //    Это ровно множество кандидатов, среди которых getMapForName выбирает первую.
  const names = [...new Set(withName.map(x => x.name))];
  const collisions = [];
  for (const name of names) {
    const matches = [];
    for (const r of records) {
      const hs = haystacks(r, opts.links);
      if (hs.some(h => h.includes(name))) matches.push(r);
    }
    if (matches.length > 1) {
      const owners = matches.filter(r => mapParamName(r, opts.ext) === name);
      collisions.push({ name, owners, matches });
    }
  }
  collisions.sort((a, b) => b.matches.length - a.matches.length || a.name.localeCompare(b.name));
  return { dupUrls, collisions };
}

// Необязательная симуляция getMapForName с учётом порядка склейки oMaps.
function simulate(records, order, opts) {
  const idx = {};
  order.forEach((f, i) => { idx[f] = i; });
  const ordered = [...records].sort((a, b) =>
    ((idx[a.file] ?? 1e9) - (idx[b.file] ?? 1e9)) || (a.index - b.index));
  const find = name => ordered.find(r => haystacks(r, opts.links).some(h => h.includes(name)));
  const shadowed = [];
  for (const r of ordered) {
    const name = mapParamName(r, opts.ext);
    if (!name) continue;
    const got = find(name);
    if (got && got !== r) shadowed.push({ map: r, name, resolvesTo: got });
  }
  const unknown = order.filter(f => !records.some(r => r.file === f));
  return { shadowed, unknown };
}

function main() {
  const opts = parseArgs(process.argv);
  const { files, records, errors } = loadMaps(opts.src);
  const { dupUrls, collisions } = analyze(records, opts);
  const sim = opts.order ? simulate(records, opts.order, opts) : null;

  const nUrls = records.filter(r => r.url).length;

  if (opts.json) {
    const out = {
      src: opts.src, mode: opts.ext ? 'with-extension' : 'no-extension', links: opts.links,
      files: files.length, urlRecords: nUrls, parseErrors: errors,
      duplicateUrls: dupUrls.map(([url, rs]) => ({ url, records: rs })),
      collisions: collisions.map(c => ({
        name: c.name, owners: c.owners, matchCount: c.matches.length, matches: c.matches
      })),
      simulation: sim ? { shadowed: sim.shadowed, unknownOrderFiles: sim.unknown } : null
    };
    console.log(JSON.stringify(out, null, 2));
  } else {
    const log = (...x) => console.log(...x);
    log(`Каталог: ${opts.src}`);
    log(`Файлов maps-*.js: ${files.length} | записей с url: ${nUrls} | ` +
        `режим ?map=: ${opts.ext ? 'с расширением' : 'без расширения'}` +
        `${opts.links ? ' | +fallback по link' : ''}`);

    if (errors.length) {
      log(`\n[!] Ошибки парсинга (${errors.length}):`);
      for (const [f, msg] of errors) log(`    ${f}: ${msg}`);
    }

    log(`\nТочные дубли url: ${dupUrls.length}`);
    if (!opts.quiet) for (const [url, rs] of dupUrls) {
      log(`  ${url}`);
      for (const r of rs) log(`      <- ${r.file}[${r.index}] "${r.name}"`);
    }

    log(`\nНеоднозначные ?map=-имена (имя ⊂ url другой карты): ${collisions.length}`);
    if (!opts.quiet) for (const c of collisions) {
      log(`\n  "${c.name}"  -> совпадает с ${c.matches.length} карт${c.owners.length > 1 ? `, дублей имени: ${c.owners.length}` : ''}`);
      const own = new Set(c.owners);
      for (const r of c.matches) {
        const src = r.url || r.link;
        log(`      ${own.has(r) ? '*' : ' '} ${src}   [${r.file}] "${r.name}"`);
      }
    }
    if (collisions.length && !opts.quiet) log(`\n  (* — карта, которая сама генерирует это ?map=-имя)`);

    if (sim) {
      if (sim.unknown.length) log(`\n[!] В --order нет в данных: ${sim.unknown.join(', ')}`);
      log(`\nС учётом порядка oMaps — реально перехватываются: ${sim.shadowed.length}`);
      if (!opts.quiet) for (const s of sim.shadowed) {
        log(`  "${s.name}"  ${s.map.url || s.map.link} [${s.map.file}]`);
        log(`        -> вместо неё вернётся: ${s.resolvesTo.url || s.resolvesTo.link} [${s.resolvesTo.file}] "${s.resolvesTo.name}"`);
      }
    }

    const bad = collisions.length + dupUrls.length;
    log(`\nИТОГО: дублей url ${dupUrls.length}, неоднозначных имён ${collisions.length}` +
        (sim ? `, перехватов по порядку ${sim.shadowed.length}` : '') +
        (errors.length ? `, ошибок парсинга ${errors.length}` : ''));
    if (bad === 0 && errors.length === 0) log('Коллизий не найдено. ✓');
  }

  if (errors.length) process.exit(2);
  process.exit((collisions.length + dupUrls.length) > 0 ? 1 : 0);
}

main();
