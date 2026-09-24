/*
 * Подробная страница соревнования: start-details.html?start=XXX.
 * Компактный вариант - start.html?start=XXX; страницы ссылаются друг на друга
 * переключателем в строке вкладок (#start_view_switch), сохраняя текущую
 * вкладку, если она есть на другой странице (?tab=calendar / maps).
 *
 * Шапка с логотипом и описанием - как на start.html, дальше две вкладки,
 * оформленные последовательностью секций в стиле справки (help-body section):
 *   «События» - по секции на каждую запись календаря со всей информацией о ней;
 *   «Карты»   - по секции на карту: превью (ссылка на полноразмер) и описание,
 *               как на map-info.html, но без вкладок;
 *   «Плакаты» - плакаты карт (поле poster), крупным превью; вкладка видна,
 *               только если у карт списка есть ссылки на плакаты;
 *   «Документы» - записи historyDocs (history-docs.js) с этим стартом;
 *               вкладка видна, только если такие документы есть.
 * На всех вкладках, кроме плакатов, сверху оглавление по годам.
 *
 * Код старта - параметр ?start= (START_NAME_PARAM из utils.js), поэтому main.js
 * строит слои только для карт этого старта - ровно как на start.html.
 * Для buildEventPlace() странице нужен REGION_KEY.
 *
 * Все ссылки вида #id ведут на секцию любой вкладки: нужная вкладка
 * открывается сама (см. showSectionForHash()).
 *
 * Параметр ?tab= (calendar, maps, posters, documents) открывает страницу сразу
 * на этой вкладке, если ей есть что показать; иначе - первая видимая вкладка.
 */

const START_DETAILS_CODE = START_NAME_PARAM;
const startDetailsKnown = !!(START_DETAILS_CODE && starts[START_DETAILS_CODE]);
// Неизвестный или пустой ?start= - вместо пустой страницы подсказка, как на start.html.
const startDetails = startDetailsKnown ? starts[START_DETAILS_CODE] : {
    name: 'Старт не найден',
    info: 'Проверьте ссылку или выберите соревнование в <a href="sheet-starts.html">таблице стартов</a>.'
};

// Карты старта - как на start.html: помеченные стартом плюс карты, на которые
// ссылаются события этого старта (filterStartMaps). oMaps при этом не трогаем -
// getMapForName() должен находить любые карты.
const startDetailsMaps = startDetailsKnown
    ? filterStartMaps(oMaps, START_DETAILS_CODE, typeof oEvents !== 'undefined' ? oEvents : [])
    : [];
startDetailsMaps.sort((a, b) => dateForCompare(b) - dateForCompare(a));
const startDetailsMapNames = new Set(startDetailsMaps.map(m => getMapName(m)));

// Документы старта из history-docs.js, от новых к старым.
const startDetailsDocs = (typeof historyDocs !== 'undefined' ? historyDocs : [])
    .filter(d => checkStartMap(START_DETAILS_CODE, d));
startDetailsDocs.sort((a, b) => dateForCompare(b) - dateForCompare(a));

// --- шапка ---

// Переключатель на start.html: тот же старт и та же вкладка, если она там есть
// (плакатов и документов в компактном представлении нет - открываем по умолчанию).
function updateStartViewSwitch() {
    if (!startDetailsKnown) {
        return;
    }
    let href = 'start.html?start=' + encodeURIComponent(START_DETAILS_CODE);
    const active = document.querySelector('#start_tabs button.active');
    if (active?.id === 'events-tab') {
        href += '&tab=calendar';
    } else if (active?.id === 'maps-tab') {
        href += '&tab=maps';
    }
    document.getElementById('start_view_switch').href = href;
}

if (startDetailsKnown) {
    document.addEventListener('shown.bs.tab', updateStartViewSwitch);
} else {
    document.getElementById('start_tabs').style.display = 'none';
}

document.getElementById('start_name').innerHTML = startDetails.name ?? startDetails.short;
if (startDetails.info) {
    document.getElementById('start_info').style.display = 'block';
    document.querySelector('#start_info span').innerHTML = startDetails.info;
    if (startDetails.logo) {
        const logo = document.querySelector('#start_info img');
        logo.style.display = 'block';
        logo.src = './logo/' + startDetails.logo;
    }
}

// --- общие мелочи ---

// Ссылки на файлы документов (иконки скачивания), через запятую.
function buildDocsFileLinks(docs) {
    return docs.map(d => buildDownloadLinks(d.link, d.links)).filter(Boolean).join(', ');
}

// Строка «Документы:» секции: собственные docs записи + документы из history-docs.js.
function buildDocsLine(ownDocs, relatedDocs) {
    const parts = [];
    if (ownDocs) {
        parts.push(buildDownloadLinks(null, ownDocs));
    }
    const related = buildDocsFileLinks(relatedDocs);
    if (related) {
        parts.push(related);
    }
    return startDetailsLine('Документы', parts.join(', '));
}

// Документы, у которых в map указана эта карта.
function docsForMap(mapName) {
    return startDetailsDocs.filter(d => asList(d.map).includes(mapName));
}

// Документы, дата которых попадает в дни события (date..endDate).
// Документы только с годом по дате не сопоставляются.
function docsForEvent(evt) {
    const from = String(evt.date ?? '').substring(0, 10);
    const to = String(evt.endDate ?? evt.date ?? '').substring(0, 10);
    if (!from) {
        return [];
    }
    return startDetailsDocs.filter(d => asList(d.date).some(dt => {
        const day = String(dt).substring(0, 10);
        return day >= from && day <= to;
    }));
}

// Абзац «Подпись: значение»; пустое значение - пустая строка.
function startDetailsLine(label, value) {
    if (!value || !String(value).trim()) {
        return '';
    }
    return label ? `<p><b>${label}:</b> ${value}</p>` : `<p>${value}</p>`;
}

function mapSectionId(mapName) {
    return 'map_' + mapName;
}

// Ссылка на карту: на её секцию на этой странице, если она тут есть, иначе на map-info.
function startDetailsMapHref(mapName) {
    return startDetailsMapNames.has(mapName) ? '#' + mapSectionId(mapName) : 'map-info.html?map=' + mapName;
}

function startDetailsEventId(evt, idx) {
    return evt.id ?? ('event_' + idx);
}

// Название карты с датой в скобках, если она указана (иначе - год, как mapTitle).
function startMapTitle(m, events) {
    const title = mapTitle(m, true, false, events);
    const y = year(m);
    const date = formatDate(m, true);
    if (!date || !y) {
        return title;
    }
    const sy = startYear(m, events);
    const shownYear = sy ? sy : (y > 1 ? y : 'ретро');
    return title.replace('&nbsp;(' + shownYear, '&nbsp;(' + date);
}

// Год карты для оглавления - тот же, что виден в её названии.
function startMapYear(m, events) {
    if (formatDate(m, true)) {
        const date = Array.isArray(m.date) ? m.date[0] : m.date;
        return new Date(date).getFullYear();
    }
    const sy = startYear(m, events);
    if (sy) {
        return sy;
    }
    const y = year(m);
    return y ? (y > 1 ? y : 'ретро') : null;
}

// Секция-оглавление по годам: items - [{year, id}] в порядке показа.
function buildYearsNav(items) {
    const years = [];
    for (const item of items) {
        if (item.year && !years.some(v => v.year === item.year)) {
            years.push(item);
        }
    }
    if (years.length === 0) {
        return '';
    }
    return `<section><nav class="start-years"><b>Годы:</b> ` +
        years.map(v => `<a href="#${v.id}">${v.year}</a>`).join(' · ') + `</nav></section>`;
}

function asList(value) {
    return value ? (Array.isArray(value) ? value : [value]) : [];
}

// --- вкладка «События» ---

// Этапы многодневки (поле parent) идут сразу после «родителя» в хронологическом
// порядке; сами «родители» и одиночные события - от новых к старым.
function orderStartEvents(events) {
    sortEvents(events);
    const ids = new Set(events.map(e => e.id).filter(Boolean));
    const children = {};
    const roots = [];
    for (const e of events) {
        if (e.parent && ids.has(e.parent)) {
            (children[e.parent] ??= []).push(e);
        } else {
            roots.push(e);
        }
    }
    const result = [];
    const pushWithChildren = (e, level) => {
        result.push({evt: e, level: level});
        const ch = children[e.id];
        if (ch) {
            [...ch].reverse().forEach(c => pushWithChildren(c, level + 1));
        }
    };
    roots.forEach(e => pushWithChildren(e, 0));
    return {ordered: result, children: children};
}

// Одна карта - превью справа от текста (как в справке),
// несколько - лентой превью под текстом, чтобы не теснить его.
function buildEventMapsInfo(evt) {
    let links = '';
    const previews = [];
    if (evt.map) {
        const maps = Array.isArray(evt.map) ? evt.map : [evt.map];
        for (const name of maps) {
            const m = getMapForName(name);
            const href = startDetailsMapHref(name);
            if (links) {
                links += ', ';
            }
            links += `<a href="${href}">${m ? startMapTitle(m) : name}</a>`;
            if (m && !isMapHidden(m) && m.url) {
                previews.push({href: href, m: m});
            }
        }
    }
    const img = (p, cls) => `<a href="${p.href}"><img src="${p.m.url}" loading="lazy" class="${cls}" title="${p.m.name ?? ''}" alt="${p.m.name ?? 'Карта'}" /></a>`;
    let figures = '', strip = '';
    if (previews.length === 1) {
        figures = img(previews[0], 'help-figure help-figure-right news-figure');
    } else if (previews.length > 1) {
        strip = '<div class="start-event-maps">' + previews.map(p => img(p, 'help-figure')).join('') + '</div>';
    }
    return {links: links, figures: figures, strip: strip};
}

function buildStartEventSection(evt, level, idx, children, idOf) {
    const id = startDetailsEventId(evt, idx);
    const maps = buildEventMapsInfo(evt);

    let logo = '';
    if (evt.logo) {
        const logos = Array.isArray(evt.logo) ? evt.logo : [evt.logo];
        logo = `<img src="./logo/${logos[0]}" loading="lazy" class="help-figure help-figure-left start-event-logo" alt="Лого" />`;
    }

    let html = maps.figures + logo;
    const eventYear = startYear(evt) ?? new Date(evt.date).getFullYear();
    html += `<h3>🗓️ ${buildEventDate(evt)} ${eventYear} &nbsp;${buildEventStart(evt, true, true)}</h3>`;

    html += startDetailsLine('Место', buildEventPlace(evt));
    const eventType = buildEventType(evt, false);
    if (eventType !== 'Ориент') { // ориент - вид по умолчанию, не пишем
        html += startDetailsLine('Вид', eventType);
    }
    html += startDetailsLine('Формат', evt.fmt);
    html += startDetailsLine('', evt.info);
    if (evt.price === -1) {
        html += startDetailsLine('', 'Закрытое мероприятие.');
    }
    html += startDetailsLine('Регистрация', buildEventReg(evt));
    html += startDetailsLine('Организаторы', buildOwners(evt, true));
    html += startDetailsLine('Страница на O-Site', buildOSiteInfo(evt));
    html += startDetailsLine('Результаты', buildEventResults(evt));
    html += startDetailsLine('Планирование дистанций', buildPlanners(evt, null, true));
    html += startDetailsLine('GPS-трансляция', buildGpsLinksForEvents([evt], 'o-gps.gif'));
    html += startDetailsLine('Фото и видео', buildEventReports(evt, false));
    html += startDetailsLine('Карты с дистанциями', buildPublish(evt, 'опубликованы тут'));
    html += buildDocsLine(evt.docs, docsForEvent(evt));

    // связи многодневки и её этапов
    const ch = children[evt.id];
    if (ch) {
        const stages = [...ch].reverse().map(c => ({id: idOf.get(c), label: c.name ?? buildEventDate(c)}));
        // если в названии этапа есть запятая, разделяем этапы точкой с запятой
        const separator = stages.some(st => st.label.includes(',')) ? '; ' : ', ';
        html += startDetailsLine('Этапы', stages.map(st => `<a href="#${st.id}">${st.label}</a>`).join(separator));
    }

    // карты - последней строкой, сразу над превью
    html += startDetailsLine('Карты', maps.links);
    html += maps.strip;

    const classes = ['clearfix', 'start-event'];
    if (level > 0) {
        classes.push('start-event-child');
    }
    if (evt.cancelled) {
        classes.push('start-event-cancelled');
    }
    return `<section id="${id}" class="${classes.join(' ')}">${html}</section>`;
}

function renderStartEvents() {
    const events = (typeof oEvents !== 'undefined' ? oEvents : [])
        .filter(e => checkStartMap(START_DETAILS_CODE, e));
    if (events.length === 0) {
        return false;
    }
    const {ordered, children} = orderStartEvents(events);
    const idOf = new Map();
    ordered.forEach((item, idx) => idOf.set(item.evt, startDetailsEventId(item.evt, idx)));

    // оглавление по годам - на первое событие года
    let html = buildYearsNav(ordered.map(item =>
        ({year: new Date(item.evt.date).getFullYear(), id: idOf.get(item.evt)})));

    ordered.forEach((item, idx) => {
        html += buildStartEventSection(item.evt, item.level, idx, children, idOf);
    });
    document.getElementById('start_events').innerHTML = html;
    return true;
}

// --- вкладка «Карты» ---

function buildStartMapSection(m) {
    const name = getMapName(m);
    const events = findEventsForMap(m, true); // как на map-info: все старты на карте

    let html = '';
    const hidden = isMapHidden(m);
    if (!hidden && m.url) {
        const full = asList(m.link ?? m.url)[0]; // полноразмер - первый файл списка
        html += `<a href="${full}" target="_blank" title="Полноразмер"><img src="${m.url}" loading="lazy" class="help-figure help-figure-right start-map-figure" alt="${m.name ?? 'Карта'}" /></a>`;
    }

    const types = getTypesList(m);
    html += `<h3>🗺️ <a href="map-info.html?map=${name}">${startMapTitle(m, events)}</a>` +
        (types ? ` <small class="start-map-types">${types}</small>` : '') + `</h3>`;

    let info = m.info ?? '';
    if (m.about) {
        info += ` <a href="${m.about}">Сайт соревнований</a>.`;
    }
    if (m.results) {
        info += ` <a href="${m.results}">Результаты</a>.`;
    }
    if (m.o_site) {
        info += ` <a href="${O_SITE_ADDRESS_PREFIX}${m.o_site}">Инфо и результаты</a>.`;
    }
    html += startDetailsLine('', info);
    html += buildOrderPanel(m);

    if (hidden) {
        html += startDetailsLine('', 'Просмотр карты не разрешён правообладателем или не уместен.');
    } else {
        html += startDetailsLine('Скачать', buildDownloadLinks(m.link));
    }
    if (startPosterLinks(m).length > 0) {
        html += startDetailsLine('Плакат', `<a href="#${posterSectionId(name)}">смотреть</a>`);
    }
    html += startDetailsLine('GPS-трансляция', buildGpsLinksForEvents([m], 'o-gps.gif'));
    html += startDetailsLine('Авторы карты', buildAuthors(m));
    html += startDetailsLine('Владельцы карты', buildOwners(m));

    let mapStarts = '';
    for (const e of events) {
        if (e !== m) {
            mapStarts += '<li>' + buildEventDescription(e, true);
            if (e.id && checkStartMap(START_DETAILS_CODE, e)) {
                mapStarts += ` <a href="#${e.id}" title="Событие на этой странице">↑</a>`;
            }
            mapStarts += '</li>';
        }
    }
    html += buildDocsLine(m.docs, docsForMap(name));
    if (mapStarts) {
        html += `<p><b>Соревнования, проводившиеся по карте:</b></p><ol>${mapStarts}</ol>`;
    }

    return `<section id="${mapSectionId(name)}" class="clearfix start-map">${html}</section>`;
}

function renderStartMaps() {
    let html = buildYearsNav(startDetailsMaps.map(m =>
        ({year: startMapYear(m, findEventsForMap(m, true)), id: mapSectionId(getMapName(m))})));
    for (const m of startDetailsMaps) {
        html += buildStartMapSection(m);
    }
    document.getElementById('start_maps').innerHTML = html;
}

// --- вкладка «Плакаты» ---

function posterSectionId(mapName) {
    return 'poster_' + mapName;
}

function buildStartPosterSection(m) {
    const name = getMapName(m);
    const events = findEventsForMap(m, true);
    let html = `<h3>🗺️ <a href="#${mapSectionId(name)}">${mapTitle(m, true, false, events)}</a></h3>`;
    for (const p of startPosterLinks(m)) {
        html += `<a href="${p}" target="_blank" title="Полноразмер"><img src="${p}" loading="lazy" class="help-figure start-poster-figure" alt="Плакат: ${m.name ?? ''}" /></a>`;
    }
    return `<section id="${posterSectionId(name)}" class="clearfix start-poster">${html}</section>`;
}

// Плакаты - непустые ссылки из поля poster.
function startPosterLinks(m) {
    return asList(m.poster).filter(p => typeof p === 'string' && p.trim());
}

// Вкладка «Плакаты» скрыта в разметке и показывается, только если
// хотя бы у одной карты списка есть ссылка на плакат.
function renderStartPosters() {
    const maps = startDetailsMaps.filter(m => startPosterLinks(m).length > 0); // порядок - как у карт, по дате
    if (maps.length > 0) {
        document.getElementById('start_posters').innerHTML = maps.map(buildStartPosterSection).join('');
        document.getElementById('posters-tab-item').style.display = '';
    }
}

// --- вкладка «Документы» ---

// Строка документа: дата (или год), текст из info (по умолчанию - протокол
// результатов) + name, пометка «частично», ссылки на карты и скачивание.
function buildStartDocItem(doc) {
    let when = formatDate(doc, true);
    if (!when) {
        const y = year(doc);
        when = y > 1 ? y : '';
    }
    let text = doc.name ?? '';
    if (text && !/[.!?…]$/.test(text)) {
        text += '.';
    }
    text += ' ' + (doc.info ?? 'Протокол результатов.');
    if (doc.partly) {
        text += ' (½)';
    }
    let html = when ? `<b>${when}</b> &nbsp;` : '';
    html += text;
    // 🗺️ - на секцию карты на этой странице, а если её тут нет - на карту O-Maps
    for (const mapName of asList(doc.map)) {
        const mp = getMapForName(mapName);
        const mapLabel = mp ? startMapTitle(mp).replaceAll('&nbsp;', ' ').replace(/<[^>]*>/g, '').replaceAll('"', '&quot;') : mapName;
        html += startDetailsMapNames.has(mapName)
            ? `<a href="#${mapSectionId(mapName)}" title="Карта на этой странице: ${mapLabel}"> 🗺️</a>`
            : buildEventPlace({map: mapName, place: ''});
    }
    const download = buildDownloadLinks(doc.link, doc.links);
    if (download) {
        html += ' &nbsp;' + download;
    }
    return `<li>${html}</li>`;
}

function renderStartDocs() {
    if (startDetailsDocs.length === 0) {
        return;
    }
    document.getElementById('start_docs').innerHTML =
        `<section><ul class="start-docs">${startDetailsDocs.map(buildStartDocItem).join('')}</ul></section>`;
    document.getElementById('docs-tab-item').style.display = '';
}

// --- вкладки и ссылки #id ---

// Значения параметра ?tab= и кнопки вкладок.
const START_DETAILS_TABS = {
    calendar: 'events-tab',
    maps: 'maps-tab',
    posters: 'posters-tab',
    documents: 'docs-tab'
};

// Открыть вкладку из ?tab=, если она видна; иначе, если активная вкладка
// спрятана (ей нечего показывать), - первую видимую.
// Bootstrap тут ещё не загружен, поэтому классы переключаем сами.
function activateInitialTab() {
    const buttons = [...document.querySelectorAll('#start_tabs button[data-bs-toggle="tab"]')];
    const visible = buttons.filter(b => b.closest('li').style.display !== 'none');
    const active = buttons.find(b => b.classList.contains('active'));
    if (visible.length === 0) {
        return;
    }
    const requested = document.getElementById(START_DETAILS_TABS[urlParams.get('tab')] ?? '');
    let target;
    if (requested && visible.includes(requested)) {
        target = requested;
    } else if (!visible.includes(active)) {
        target = visible[0];
    }
    if (!target || target === active) {
        return;
    }
    if (active) {
        active.classList.remove('active');
        active.setAttribute('aria-selected', 'false');
        document.querySelector(active.dataset.bsTarget).classList.remove('show', 'active');
    }
    target.classList.add('active');
    target.setAttribute('aria-selected', 'true');
    document.querySelector(target.dataset.bsTarget).classList.add('show', 'active');
}

// Открыть вкладку, в которой лежит секция из адреса (#id), и прокрутить к ней.
function showSectionForHash() {
    const id = decodeURIComponent(location.hash.substring(1));
    const el = id ? document.getElementById(id) : null;
    if (!el) {
        return;
    }
    const pane = el.closest('.tab-pane');
    if (pane && !pane.classList.contains('active') && typeof bootstrap !== 'undefined') {
        const button = document.querySelector(`[data-bs-target="#${pane.id}"]`);
        button.addEventListener('shown.bs.tab', () => el.scrollIntoView(), {once: true});
        bootstrap.Tab.getOrCreateInstance(button).show();
    } else {
        el.scrollIntoView();
    }
}

document.addEventListener('click', event => {
    const a = event.target.closest('a[href^="#"]');
    if (!a || a.getAttribute('href').length < 2 || !document.getElementById(decodeURIComponent(a.getAttribute('href').substring(1)))) {
        return;
    }
    event.preventDefault();
    history.pushState(null, '', a.getAttribute('href'));
    showSectionForHash();
});
window.addEventListener('popstate', showSectionForHash);
window.addEventListener('load', showSectionForHash);

writeBackToStartButton({smooth: true});

// --- сборка ---

if (startDetailsMaps.length > 0) {
    renderStartMaps();
} else {
    document.getElementById('maps-tab-item').style.display = 'none';
}
renderStartPosters();
renderStartDocs();
if (!renderStartEvents()) {
    document.getElementById('events-tab-item').style.display = 'none';
}
activateInitialTab();
updateStartViewSwitch();
