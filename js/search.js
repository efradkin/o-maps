/*
 * search.js — страница search.html: поиск по каталогу O-Maps.
 *
 * Данные — js/search-index.json, его собирает tools/build_search_index.js из calendar-*.js,
 * maps-*.js, справочников и каталогов документов, книг и маршрутов (формат записей — в шапке
 * генератора). Индекс грузится один раз при открытии страницы; запрос с cache: 'no-cache' —
 * браузер каждый раз сверяется с сервером, и неизменившийся файл не перекачивается (ответ 304).
 *
 * Поиск — при вводе, когда в запросе есть слово от трёх букв или год: запрос делится на слова, каждое слово
 * должно найтись в записи (в названии, месте, описании или имени прикреплённого файла); регистр не важен, ё = е.
 * Слово-год (1972) или годы (1990-1999) не ищутся в тексте, а отбирают карты, события,
 * документы и книги этих лет; на серии, клубы, людей, маршруты и места год не действует.
 *
 * Сортировка переключается общей кнопкой: по релевантности (название, место, остальной текст)
 * или по дате (сначала новые). Режим сохраняется между вкладками и в адресе поискового запроса.
 *
 * Показ: вкладки «Всё» и по видам записей с числом найденного; на «Всё» у каждого вида —
 * первые записи и ссылка на вкладку вида. Карты — плашками с картинкой (как start.html)
 * или списком, события — списком. Выбор вида запоминается в браузере.
 * Адрес страницы повторяет запрос: search.html?q=…&in=<вкладка>.
 */
(function () {
    'use strict';

    const INDEX_URL = 'js/search-index.json';
    const MIN_CHARS = 3;
    const DEBOUNCE_MS = 150;
    const VIEW_KEY = 'om-search-view';
    const SORT_KEY = 'om-search-sort';

    // Виды записей: вкладка, заголовок, сколько показывать на «Всё» и порциями на своей вкладке.
    // forms — для строки «Найдено: …» (pluralRu: одна, несколько, много).
    const KINDS = [
        {key: 'i', tab: 'places', title: 'Места', preview: 8, page: 60, forms: ['место', 'места', 'мест']},
        {key: 's', tab: 'starts', title: 'Серии стартов', preview: 8, page: 60,
            forms: ['серия стартов', 'серии стартов', 'серий стартов']},
        {key: 'a', tab: 'authors', title: 'Картографы', preview: 8, page: 60,
            forms: ['картограф', 'картографа', 'картографов']},
        {key: 'p', tab: 'planners', title: 'Начальники дистанций', preview: 8, page: 60,
            forms: ['начальник дистанций', 'начальника дистанций', 'начальников дистанций']},
        {key: 't', tab: 'tracks', title: 'Маршруты', preview: 8, page: 60,
            forms: ['маршрут', 'маршрута', 'маршрутов']},
        {key: 'd', tab: 'documents', title: 'Документы и правила', preview: 8, page: 60,
            forms: ['документ', 'документа', 'документов']},
        {key: 'b', tab: 'books', title: 'Книги и статьи', preview: 8, page: 60,
            forms: ['книга или статья', 'книги и статьи', 'книг и статей']},
        {key: 'm', tab: 'maps', title: 'Карты', preview: 12, page: 48, forms: ['карта', 'карты', 'карт']},
        {key: 'e', tab: 'events', title: 'События', preview: 20, page: 100, forms: ['событие', 'события', 'событий']},
    ];
    // На вкладках карты и события остаются первыми; короткие справочники и новые каталоги — далее.
    const TAB_ORDER = ['m', 'e', 'd', 'b', 't', 's', 'a', 'p', 'i'];
    const ALL_ORDER = ['s', 'a', 't', 'p', 'i', 'd', 'b', 'm', 'e'];

    const input = document.getElementById('search_input');
    const form = document.getElementById('search_form');
    const status = document.getElementById('search_status');
    const tabsEl = document.getElementById('search_tabs');
    const resultsEl = document.getElementById('search_results');
    const introHtml = status.innerHTML;

    let records = null;          // {e: [...], m: [...], …} — подготовленные записи
    let loadError = null;
    let found = null;            // результат последнего поиска
    let tab = urlParams.get('in') || 'all';
    let view = readView();
    let sortMode = readSort();
    const shown = {};            // сколько записей вида показано на его вкладке
    let timer = null;

    // ------------------------------------------------------------ мелочи --

    function readView() {
        try {
            return localStorage.getItem(VIEW_KEY) === 'list' ? 'list' : 'tiles';
        } catch (e) {
            return 'tiles';
        }
    }

    function saveView(v) {
        try {
            localStorage.setItem(VIEW_KEY, v);
        } catch (e) { /* без запоминания */ }
    }

    function readSort() {
        const fromUrl = urlParams.get('sort');
        if (fromUrl === 'date' || fromUrl === 'relevance') return fromUrl;
        try {
            return localStorage.getItem(SORT_KEY) === 'date' ? 'date' : 'relevance';
        } catch (e) {
            return 'relevance';
        }
    }

    function saveSort(v) {
        try {
            localStorage.setItem(SORT_KEY, v);
        } catch (e) { /* без запоминания */ }
    }

    // Как unifyString() в utils.js, плюс схлопнутые пробелы.
    function norm(s) {
        return unifyString(s).replace(/\s+/g, ' ');
    }

    // Строка для поиска «с начала слова»: слова через пробел, с пробелом в начале.
    function words(s) {
        return ' ' + s.replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
    }

    const esc = htmlEscape;

    function formatDay(d) {
        const [y, m, day] = d.split('-');
        return day ? `${day}.${m}.${y}` : y;
    }

    // 2025-01-07..2025-01-08 -> 07–08.01.2025; разные месяцы или годы — обе даты полностью.
    function formatDates(date, endDate) {
        if (!endDate || endDate === date) return formatDay(date);
        const [y1, m1, d1] = date.split('-');
        const [y2, m2, d2] = endDate.split('-');
        if (!d1 || !d2) return formatDay(date) + '–' + formatDay(endDate);
        if (y1 === y2 && m1 === m2) return `${d1}–${d2}.${m1}.${y1}`;
        if (y1 === y2) return `${d1}.${m1}–${d2}.${m2}.${y1}`;
        return formatDay(date) + '–' + formatDay(endDate);
    }

    function typesHtml(types) {
        if (!types) return '';
        return types.split(',').filter(t => dic[t])
            .map(t => `<span class="${t}">${esc(dic[t])}</span>`).join(', ');
    }

    function logoImg(file, alt) {
        if (!file) return '';
        const src = /^(\.|\/|https?:)/.test(file) ? file : 'logo/' + file;
        return `<img class="sheet-icon search-logo" src="${esc(src)}" alt="" title="${esc(alt)}" loading="lazy" />`;
    }

    // ------------------------------------------------------ подготовка --

    function prepare(index) {
        const out = {};
        const make = (kind, row, name, place, extra, years) => {
            const nameN = norm(name), placeN = norm(place || '');
            return {
                kind, row, name, nameN, placeN, years,
                nameW: words(nameN), placeW: words(placeN),
                hay: nameN + ' ' + placeN + ' ' + extra
            };
        };
        out.e = index.e.map(r => {
            const y1 = parseInt(r[1], 10), y2 = r[2] ? parseInt(r[2], 10) : y1;
            return make('e', r, r[3], r[4], r[0].toLowerCase() + ' ' + r[9], [y1, y2]);
        });
        out.m = index.m.map(r => make('m', r, r[1], '', r[0].toLowerCase() + ' ' + r[6], r[2]));
        out.s = index.s.map(r => make('s', r, r[1], r[2], r[0].toLowerCase() + ' ' + r[4]));
        out.a = index.a.map(r => make('a', r, r[1], '', r[0].toLowerCase() + ' ' + r[3]));
        out.p = index.p.map(r => make('p', r, r[1], '', r[0].toLowerCase() + ' ' + r[2]));
        out.i = index.i.map(r => make('i', r, r[1], r[3], r[0].toLowerCase() + ' ' + r[4]));
        out.d = index.d.map(r => make('d', r, r[0], '', r[6], r[1]));
        out.b = index.b.map(r => make('b', r, r[0], '', r[6], r[1]));
        out.t = index.t.map(r => make('t', r, r[1], '', r[0].toLowerCase() + ' ' + (r[3] || ''), null));
        return out;
    }

    // ------------------------------------------------------------ поиск --

    const TRIM = /^[«»"'„“”(),.;:!?]+|[«»"'„“”(),.;:!?]+$/g;

    function parseQuery(q) {
        const texts = [], years = [];
        for (const w of norm(q).split(' ')) {
            const t = w.replace(TRIM, '');
            if (!t) continue;
            let m;
            if ((m = /^(\d{4})$/.exec(t)) && +m[1] >= 1800 && +m[1] <= 2100) {
                years.push([+m[1], +m[1]]);
            } else if ((m = /^(\d{4})[-–—](\d{4})$/.exec(t)) && +m[1] >= 1800 && +m[2] <= 2100) {
                years.push([Math.min(+m[1], +m[2]), Math.max(+m[1], +m[2])]);
            } else {
                texts.push(t);
            }
        }
        const ready = texts.some(t => t.length >= MIN_CHARS) || years.length > 0;
        return {texts, years, ready};
    }

    // Год записи попадает в каждое из годовых условий запроса.
    function yearsMatch(rec, years) {
        if (!years.length) return true;
        if (!rec.years) return false;
        return years.every(([from, to]) => rec.kind === 'e'
            ? rec.years[0] <= to && rec.years[1] >= from
            : rec.years.some(y => y >= from && y <= to));
    }

    function score(rec, texts) {
        let total = 0;
        for (const t of texts) {
            const w = ' ' + t;
            if (rec.nameW.includes(w)) total += 4;
            else if (rec.nameN.includes(t)) total += 3;
            else if (rec.placeW.includes(w)) total += 2.5;
            else if (rec.placeN.includes(t)) total += 2;
            else if (rec.hay.includes(t)) total += 1;
            else return 0;
        }
        return total || 1;       // только годы: все записи этих лет равны
    }

    // Новее — выше: событие по дате, карта по году; серии, клубы, люди — по алфавиту.
    function newer(a, b) {
        if (a.kind === 'e') return b.row[1].localeCompare(a.row[1]);
        if (a.kind === 'm') return (b.years[0] ?? 0) - (a.years[0] ?? 0);
        if (['d', 'b'].includes(a.kind)) return (b.years?.[0] ?? 0) - (a.years?.[0] ?? 0);
        return a.name.localeCompare(b.name, 'ru');
    }

    function dateRank(rec) {
        if (rec.kind === 'e') return Number(String(rec.row[1] || '').replace(/-/g, '')) || 0;
        if (rec.kind === 'm') return Number(rec.years?.[rec.years.length - 1] || 0);
        if (rec.kind === 'd' || rec.kind === 'b') return Number(rec.years?.[0] || 0);
        return 0;
    }

    function search(q) {
        const query = parseQuery(q);
        const result = {query, total: 0, lists: {}};
        if (!query.ready) return result;
        for (const kind of KINDS) {
            // Справочники и маршруты ищутся только по словам; у них нет годового фильтра.
            if (!query.texts.length && !['e', 'm', 'd', 'b'].includes(kind.key)) {
                result.lists[kind.key] = [];
                continue;
            }
            const list = [];
            for (const rec of records[kind.key]) {
                if (!yearsMatch(rec, ['e', 'm', 'd', 'b'].includes(kind.key) ? query.years : [])) continue;
                const s = score(rec, query.texts);
                if (s) list.push({rec, s});
            }
            list.sort((a, b) => {
                if (sortMode === 'date' && ['e', 'm', 'd', 'b'].includes(kind.key)) {
                    const byDate = dateRank(b.rec) - dateRank(a.rec);
                    if (byDate) return byDate;
                }
                return b.s - a.s || newer(a.rec, b.rec);
            });
            result.lists[kind.key] = list.map(x => x.rec);
            result.total += list.length;
        }
        return result;
    }

    // ------------------------------------------------------- подсветка --

    function highlighter(texts) {
        if (!texts.length) return s => esc(s);
        const parts = texts.slice().sort((a, b) => b.length - a.length)
            .map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/е/g, '[её]'));
        const re = new RegExp('(' + parts.join('|') + ')', 'giu');
        return s => String(s ?? '').split(re)
            .map((piece, i) => i % 2 ? `<mark>${esc(piece)}</mark>` : esc(piece)).join('');
    }

    // ---------------------------------------------------------- вывод --

    function eventIconsHtml(meta, date, endDate, flags) {
        if (!meta) return '';
        const icons = [];
        if (meta.o_site || meta.link) icons.push(buildEventSiteIcons(meta));
        if (meta.reg) icons.push(buildEventReg(meta));
        if (meta.bulletin) icons.push(buildEventBulletin(meta));

        const mapNames = [].concat(meta.map ?? []).filter(Boolean);
        const mapPages = meta.mapPages || [];
        if (mapNames.length) {
            mapNames.forEach((mapName, i) => {
                const page = mapPages[i] || 'spb';
                icons.push(buildLink(`${page}.html?calendar&map=${encodeURIComponent(mapName)}`, '🗺️', 'Карта на O-Maps'));
                if (meta.coord) {
                    icons.push(buildLink(`${page}.html?x=${meta.coord[0]}&y=${meta.coord[1]}&calendar`, '🌐', 'Место на O-Maps'));
                }
            });
        } else if (meta.coord) {
            icons.push(buildLink(`spb.html?x=${meta.coord[0]}&y=${meta.coord[1]}&calendar`, '🌐', 'Место на O-Maps'));
        } else if (meta.track) {
            icons.push(buildLink(`tracks.html?track=${encodeURIComponent(meta.track)}&calendar`, '🚸', 'Трек на O-Maps'));
        }

        if (meta.maps || meta.o_stuff) icons.push(buildEventExternalMaps(meta));
        if (meta.res || meta.split || meta.reskeep) icons.push(buildEventResults(meta));
        if (meta.gps || meta.o_gps || meta.livelox || meta.rg || meta.photo || meta.video || (HAS_ME_PARAM && meta.strava)) {
            icons.push(buildEventReports(meta, true));
        }
        if (meta.publish) icons.push(buildPublish(meta));
        if (HAS_ME_PARAM && meta.me) icons.push(`<sup class="my-race">${meta.me}</sup>`);

        const html = icons.filter(Boolean).join(' ').trim();
        return html ? `<span class="search-event-icons">${html}</span>` : '';
    }

    function eventItem(rec, hl) {
        const r = rec.row;
        const [id, date, endDate, name, place, logo, types, flags, parent] = r;
        const extra = [];
        if (place) extra.push(hl(place));
        const t = typesHtml(types);
        if (t) extra.push(t);
        const meta = r[10] || {};
        const icons = eventIconsHtml(meta, date, endDate, flags);
        const russialoppetLogo = meta.russialoppet
            ? '<img src="./logo/russialoppet.gif" alt="RussiaLoppet" title="RussiaLoppet" class="sheet-icon search-logo"> '
            : '';
        return `<li class="search-event${flags.includes('c') ? ' search-cancelled' : ''}">` +
            `<span class="search-date">${formatDates(date, endDate)}</span> ` +
            (parent ? '<span class="search-stage" title="Этап многодневного события">↳</span> ' : '') +
            russialoppetLogo + logoImg(logo, name) +
            `<a href="event.html?id=${encodeURIComponent(id)}">${hl(name)}</a>` +
            (flags.includes('c') ? ' <span class="badge bg-secondary">отменено</span>' : '') +
            icons +
            (extra.length ? ` <span class="search-meta">· ${extra.join(' · ')}</span>` : '') +
            '</li>';
    }

    function mapYears(rec) {
        return rec.years.length ? rec.years.join(', ') : '';
    }

    function mapRegion(rec) {
        const code = rec.row[4];
        return code && regions[code] ? regions[code].name : '';
    }

    function mapTile(rec, hl) {
        const [key, name, , img] = rec.row;
        const caption = [name, mapYears(rec)].filter(Boolean).join(', ');
        const region = mapRegion(rec);
        return `<div class="start-map-box search-map-box">` +
            `<a href="map-info.html?map=${encodeURIComponent(key)}">` +
            `<img src="${esc(img)}" alt="${esc(caption)}" title="${esc(caption + (region ? ' · ' + region : ''))}" loading="lazy" /></a>` +
            `<div class="start-map-box-description">${hl(name)}${mapYears(rec) ? ', ' + mapYears(rec) : ''}</div>` +
            (region ? `<div class="search-meta">${esc(region)}</div>` : '') +
            `</div>`;
    }

    function mapItem(rec, hl) {
        const [key, name, , , , types] = rec.row;
        const extra = [mapRegion(rec), typesHtml(types)].filter(Boolean);
        return `<li class="search-map">` +
            `<span class="search-date">${esc(mapYears(rec)) || '—'}</span> ` +
            `<a href="map-info.html?map=${encodeURIComponent(key)}">${hl(name)}</a>` +
            (extra.length ? ` <span class="search-meta">· ${extra.join(' · ')}</span>` : '') +
            `</li>`;
    }

    function entityItem(rec, hl) {
        const r = rec.row;
        let href, logo = '', note = '';
        switch (rec.kind) {
            case 's':
                href = 'start.html?start=' + encodeURIComponent(r[0]);
                logo = r[3];
                if (r[2] && !rec.nameN.includes(norm(r[2]))) note = r[2];   // краткое имя, если оно другое
                break;
            case 'a':
                href = 'sheet-all.html?author=' + encodeURIComponent(r[0]);
                logo = r[2];
                break;
            case 'p':
                // своей страницы у начальника дистанций нет — ищем его по имени
                href = 'search.html?q=' + encodeURIComponent(r[1]);
                break;
            case 'i':
                href = 'poi.html?poi=' + encodeURIComponent(r[0]);
                logo = r[2];
                note = r[3];
                break;
            case 't':
                href = 'tracks.html?onlytrack=' + encodeURIComponent(r[0]);
                note = r[2] ? r[2].split(',').map(t => dic[t] || t).join(', ') : '';
                break;
        }
        return `<li class="search-entity">${logoImg(logo, rec.name)}` +
            `<a href="${esc(href)}">${hl(rec.name)}</a>` +
            (note ? ` <span class="search-meta">${hl(note)}</span>` : '') + '</li>';
    }

    function isDownloadLink(url) {
        return /\.(pdf|jpg|jpeg|png|gif|ocd|omap|gpx|zip|docx?|xlsx?|pptx?)(?:[?#].*)?$/i.test(String(url));
    }

    function resourceItem(rec, hl) {
        const r = rec.row;
        const [name, years, date, links, info, source] = r;
        const dateText = date || (years?.length ? years.join(', ') : '');
        const title = links.length === 1
            ? `<a href="${esc(links[0])}" target="_blank" rel="noopener" title="${isDownloadLink(links[0]) ? 'Скачать документ' : 'Открыть источник'}">${hl(name)}</a>`
            : hl(name);
        const downloads = links.length > 1
            ? `<span class="search-downloads">${links.map((url, i) =>
                `<a href="${esc(url)}" target="_blank" rel="noopener">${isDownloadLink(url) ? `Скачать ${i + 1}` : `Источник ${i + 1}`}</a>`
            ).join(', ')}</span>`
            : '';
        const details = [source, info].filter(Boolean).join(' · ');
        return `<li class="search-resource"><span class="search-date">${esc(dateText)}</span>` +
            `${title} ${downloads}` +
            (details ? ` <span class="search-meta">· ${hl(details)}</span>` : '') +
            '</li>';
    }

    function renderList(kind, list, limit, hl) {
        const part = list.slice(0, limit);
        if (kind.key === 'm' && view === 'tiles') {
            return `<div class="start-maps-wrapper search-maps clearfix">${part.map(r => mapTile(r, hl)).join('')}</div>`;
        }
        const item = kind.key === 'e' ? eventItem :
            kind.key === 'm' ? mapItem :
            ['d', 'b'].includes(kind.key) ? resourceItem : entityItem;
        const cls = ['e', 'm', 'd', 'b'].includes(kind.key) ? 'search-list' : 'search-list search-entities';
        return `<ul class="${cls}">${part.map(r => item(r, hl)).join('')}</ul>`;
    }

    const kindOf = key => KINDS.find(k => k.key === key);
    const kindByTab = t => KINDS.find(k => k.tab === t);

    function countText(kind, n) {
        return `${n} ${pluralRu(n, ...kind.forms)}`;
    }

    function renderTabs() {
        const lists = found.lists;
        const item = (t, label, n) => `<li class="nav-item" role="presentation">` +
            `<button class="nav-link${tab === t ? ' active' : ''}" type="button" role="tab" ` +
            `aria-selected="${tab === t}" data-tab="${t}">${label} <span class="search-count">${n}</span></button></li>`;
        let html = item('all', 'Всё', found.total);
        for (const key of TAB_ORDER) {
            const n = lists[key].length;
            if (n) html += item(kindOf(key).tab, kindOf(key).title, n);
        }
        const showsMaps = lists.m.length && (tab === 'all' || tab === 'maps');
        if (showsMaps) {
            const next = view === 'tiles' ? 'list' : 'tiles';
            html += `<li class="nav-item search-view-item"><a class="nav-link search-view-switch" href="#" ` +
                `data-view="${next}" title="${next === 'list' ? 'Показать карты списком' : 'Показать карты плашками с картинками'}">` +
                `${next === 'list' ? '☰ Списком' : '▦ Плашками'}</a></li>`;
        }
        if (['e', 'm', 'd', 'b'].some(key => lists[key].length)) {
            html += `<li class="nav-item search-sort-item"><div class="search-sort-control" role="group" aria-label="Сортировка результатов">` +
                `<span class="search-sort-label">Сортировка</span>` +
                `<button type="button" class="${sortMode === 'relevance' ? 'active' : ''}" data-sort="relevance" ` +
                `aria-pressed="${sortMode === 'relevance'}">По релевантности</button>` +
                `<button type="button" class="${sortMode === 'date' ? 'active' : ''}" data-sort="date" ` +
                `aria-pressed="${sortMode === 'date'}">По дате</button></div></li>`;
        }
        tabsEl.innerHTML = html;
        tabsEl.hidden = false;
    }

    function render() {
        const q = input.value;
        if (loadError) {
            status.textContent = loadError;
            status.className = 'search-status text-danger';
            return;
        }
        if (!records) {
            status.innerHTML = q.trim() ? 'Загружаю каталог…' : introHtml;
            return;
        }
        found = search(q);
        status.className = 'search-status';
        if (!found.query.ready) {
            status.innerHTML = q.trim() ? `Введите слово хотя бы из ${MIN_CHARS} букв или год.` : introHtml;
            tabsEl.hidden = true;
            resultsEl.innerHTML = '';
            return;
        }
        if (!found.total) {
            status.textContent = 'Ничего не найдено.';
            tabsEl.hidden = true;
            resultsEl.innerHTML = '';
            return;
        }
        if (tab !== 'all' && !(kindByTab(tab) && found.lists[kindByTab(tab).key].length)) tab = 'all';
        status.textContent = 'Найдено: ' + TAB_ORDER.filter(k => found.lists[k].length)
            .map(k => countText(kindOf(k), found.lists[k].length)).join(', ') + '.';
        renderTabs();

        const hl = highlighter(found.query.texts);
        let html = '';
        if (tab === 'all') {
            // короткие списки — в одной общей секции, карты и события — каждые в своей
            let shortHtml = '';
            for (const key of ALL_ORDER) {
                const kind = kindOf(key), list = found.lists[key];
                if (!list.length) continue;
                const isShort = !['m', 'e'].includes(key);
                let part = `<h2 class="${isShort ? 'h6' : 'h5'}">${kind.title} <span class="search-count">${list.length}</span></h2>`;
                part += renderList(kind, list, kind.preview, hl);
                if (list.length > kind.preview) {
                    part += `<p><a href="#" data-tab="${kind.tab}">Все ${countText(kind, list.length)} →</a></p>`;
                }
                if (isShort) shortHtml += `<div class="search-subgroup">${part}</div>`;
                else html += `<section class="search-group">${part}</section>`;
            }
            if (shortHtml) html = `<section class="search-group search-short">${shortHtml}</section>` + html;
        } else {
            const kind = kindByTab(tab), list = found.lists[kind.key];
            const limit = shown[kind.key] || kind.page;
            html += `<section class="search-group">${renderList(kind, list, limit, hl)}`;
            if (list.length > limit) {
                html += `<p><button type="button" class="btn btn-sm btn-outline-secondary" data-more="${kind.key}">` +
                    `Показать ещё (${Math.min(kind.page, list.length - limit)} из ${list.length - limit})</button></p>`;
            }
            html += '</section>';
        }
        resultsEl.innerHTML = html;
    }

    // Адрес повторяет запрос и вкладку — страницу можно отправить ссылкой.
    function syncUrl() {
        const url = new URL(location.href);
        const q = input.value.trim();
        if (q) url.searchParams.set('q', q); else url.searchParams.delete('q');
        if (tab !== 'all' && q) url.searchParams.set('in', tab); else url.searchParams.delete('in');
        if (q) url.searchParams.set('sort', sortMode); else url.searchParams.delete('sort');
        if (url.href !== location.href) history.replaceState(null, '', url);
        document.title = (q ? q + ' — ' : '') + 'Поиск по каталогу — O-Maps';
    }

    function update() {
        for (const k in shown) delete shown[k];
        render();
        syncUrl();
    }

    // -------------------------------------------------------- события --

    input.addEventListener('input', () => {
        clearTimeout(timer);
        tab = 'all';
        timer = setTimeout(update, DEBOUNCE_MS);
    });

    form.addEventListener('submit', ev => {
        ev.preventDefault();
        clearTimeout(timer);
        update();
    });

    document.addEventListener('click', ev => {
        const tabLink = ev.target.closest('[data-tab]');
        if (tabLink) {
            ev.preventDefault();
            tab = tabLink.dataset.tab;
            render();
            syncUrl();
            if (!tabLink.closest('#search_tabs')) tabsEl.scrollIntoView({block: 'start'});
            return;
        }
        const sortButton = ev.target.closest('[data-sort]');
        if (sortButton) {
            const nextSort = sortButton.dataset.sort;
            if (nextSort !== sortMode && ['relevance', 'date'].includes(nextSort)) {
                sortMode = nextSort;
                saveSort(sortMode);
                render();
                syncUrl();
            }
            return;
        }
        const viewLink = ev.target.closest('[data-view]');
        if (viewLink) {
            ev.preventDefault();
            view = viewLink.dataset.view;
            saveView(view);
            render();
            return;
        }
        const more = ev.target.closest('[data-more]');
        if (more) {
            const kind = kindOf(more.dataset.more);
            shown[kind.key] = (shown[kind.key] || kind.page) + kind.page;
            render();
        }
    });

    // ------------------------------------------------------- загрузка --

    if (SEARCH_PARAM) input.value = SEARCH_PARAM;
    render();

    fetch(INDEX_URL, {cache: 'no-cache'})
        .then(r => {
            if (!r.ok) throw new Error(r.status + ' ' + r.statusText);
            return r.json();
        })
        .then(index => {
            records = prepare(index);
            render();
        })
        .catch(err => {
            loadError = 'Не удалось загрузить каталог для поиска (' + err.message + '). Попробуйте обновить страницу.';
            console.error('search-index:', err);
            render();
        });
})();
