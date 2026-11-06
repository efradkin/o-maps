/*
 * search.js — страница search.html: поиск по каталогу O-Maps.
 *
 * Данные — js/search-index.json, его собирает tools/build_search_index.js из calendar-*.js,
 * maps-*.js, starts.js, owners.js, authors.js, planners.js и poi.js (формат записей — в шапке
 * скрипта). Индекс грузится один раз при открытии страницы; запрос с cache: 'no-cache' —
 * браузер каждый раз сверяется с сервером, и неизменившийся файл не перекачивается (ответ 304).
 *
 * Поиск — при вводе, когда в запросе есть слово от трёх букв или год: запрос делится на слова, каждое слово
 * должно найтись в записи (в названии, месте или любом описании); регистр не важен, ё = е.
 * Слово-год (1972) или годы (1990-1999) не ищутся в тексте, а отбирают карты и события этих
 * лет; на серии, клубы, людей и места год не действует.
 *
 * Порядок: сначала записи, где слова нашлись в названии (с начала слова — выше), потом — в месте,
 * потом — в остальном тексте; при равенстве — новые выше.
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

    // Виды записей: вкладка, заголовок, сколько показывать на «Всё» и порциями на своей вкладке.
    // forms — для строки «Найдено: …» (pluralRu: одна, несколько, много).
    const KINDS = [
        {key: 'i', tab: 'places', title: 'Места', preview: 8, page: 60, forms: ['место', 'места', 'мест']},
        {key: 's', tab: 'starts', title: 'Серии стартов', preview: 8, page: 60,
            forms: ['серия стартов', 'серии стартов', 'серий стартов']},
        {key: 'o', tab: 'owners', title: 'Клубы и организаторы', preview: 8, page: 60,
            forms: ['клуб или организатор', 'клуба или организатора', 'клубов и организаторов']},
        {key: 'a', tab: 'authors', title: 'Авторы карт', preview: 8, page: 60,
            forms: ['автор карт', 'автора карт', 'авторов карт']},
        {key: 'p', tab: 'planners', title: 'Начальники дистанций', preview: 8, page: 60,
            forms: ['начальник дистанций', 'начальника дистанций', 'начальников дистанций']},
        {key: 'm', tab: 'maps', title: 'Карты', preview: 12, page: 48, forms: ['карта', 'карты', 'карт']},
        {key: 'e', tab: 'events', title: 'События', preview: 20, page: 100, forms: ['событие', 'события', 'событий']},
    ];
    // Порядок вкладок: главное — карты и события. На «Всё» короткие списки (серии, клубы, люди,
    // места — по строке-другой) идут первыми, чтобы не теряться под длинными.
    const TAB_ORDER = ['m', 'e', 's', 'o', 'a', 'p', 'i'];
    const ALL_ORDER = ['s', 'o', 'a', 'p', 'i', 'm', 'e'];

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
        out.o = index.o.map(r => make('o', r, r[1], '', r[0].toLowerCase() + ' ' + r[3]));
        out.a = index.a.map(r => make('a', r, r[1], '', r[0].toLowerCase() + ' ' + r[3]));
        out.p = index.p.map(r => make('p', r, r[1], '', r[0].toLowerCase() + ' ' + r[2]));
        out.i = index.i.map(r => make('i', r, r[1], r[3], r[0].toLowerCase() + ' ' + r[4]));
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
        return a.name.localeCompare(b.name, 'ru');
    }

    function search(q) {
        const query = parseQuery(q);
        const result = {query, total: 0, lists: {}};
        if (!query.ready) return result;
        for (const kind of KINDS) {
            // серии, клубы, люди и места — только по словам: у них нет года
            if (!query.texts.length && !['e', 'm'].includes(kind.key)) {
                result.lists[kind.key] = [];
                continue;
            }
            const list = [];
            for (const rec of records[kind.key]) {
                if (!yearsMatch(rec, ['e', 'm'].includes(kind.key) ? query.years : [])) continue;
                const s = score(rec, query.texts);
                if (s) list.push({rec, s});
            }
            list.sort((a, b) => b.s - a.s || newer(a.rec, b.rec));
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

    function eventItem(rec, hl) {
        const r = rec.row;
        const [id, date, endDate, name, place, logo, types, flags, parent] = r;
        const extra = [];
        if (place) extra.push(hl(place));
        const t = typesHtml(types);
        if (t) extra.push(t);
        return `<li class="search-event${flags.includes('c') ? ' search-cancelled' : ''}">` +
            `<span class="search-date">${formatDates(date, endDate)}</span> ` +
            (parent ? '<span class="search-stage" title="Этап многодневного события">↳</span> ' : '') +
            logoImg(logo, name) +
            `<a href="event.html?id=${encodeURIComponent(id)}" target="_self">${hl(name)}</a>` +
            (flags.includes('c') ? ' <span class="badge bg-secondary">отменено</span>' : '') +
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
            `<a href="map-info.html?map=${encodeURIComponent(key)}" target="_self">` +
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
            `<a href="map-info.html?map=${encodeURIComponent(key)}" target="_self">${hl(name)}</a>` +
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
            case 'o':
                href = 'owner.html?owner=' + encodeURIComponent(r[0]);
                logo = r[2];
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
        }
        return `<li class="search-entity">${logoImg(logo, rec.name)}` +
            `<a href="${esc(href)}" target="_self">${hl(rec.name)}</a>` +
            (note ? ` <span class="search-meta">${hl(note)}</span>` : '') + '</li>';
    }

    function renderList(kind, list, limit, hl) {
        const part = list.slice(0, limit);
        if (kind.key === 'm' && view === 'tiles') {
            return `<div class="start-maps-wrapper search-maps clearfix">${part.map(r => mapTile(r, hl)).join('')}</div>`;
        }
        const item = kind.key === 'e' ? eventItem : kind.key === 'm' ? mapItem : entityItem;
        const cls = ['e', 'm'].includes(kind.key) ? 'search-list' : 'search-list search-entities';
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
            html += `<li class="nav-item search-view-item"><a class="nav-link search-view-switch" href="#" target="_self" ` +
                `data-view="${next}" title="${next === 'list' ? 'Показать карты списком' : 'Показать карты плашками с картинками'}">` +
                `${next === 'list' ? '☰ Списком' : '▦ Плашками'}</a></li>`;
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
                    part += `<p><a href="#" target="_self" data-tab="${kind.tab}">Все ${countText(kind, list.length)} →</a></p>`;
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
