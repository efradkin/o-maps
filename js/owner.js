/*
 * Страница владельца-организатора: owner.html?owner=OWNER_CODE (код из owners.js).
 *
 * Показывает то, что известно о владельце, по аналогии с event.html и start.html:
 *   шапка  — логотип, название (short / title / name), описание (поле info),
 *            полное название или контакты (name, если оно не совпадает с заголовком),
 *            ссылка «Подробнее» (поле about), ссылки «В календаре» и «Карты списком»;
 *   «Соревнования» — старты из starts.js, у которых владелец указан в поле owner;
 *   «События календаря» — события всех календарей сайта, у которых этот владелец
 *            указан в поле owner (или он владелец их старта, как в getOwners);
 *   «Карты» — только карты, у которых он указан в поле owner (как отбор
 *            ?owner= на картах и в списках карт).
 *
 * Данные не «чинятся»: неизвестные коды стартов выводятся в консоль.
 * Оформление штатное (help-body, start-map-box как на start.html, sheet-icon).
 * Весь код - в замыкании: main.js объявляет глобальные map, marker1 и прочие.
 */
(function () {
    'use strict';

    const OWNER_CODE = urlParams.get('owner');

    // Календари сайта и страница календаря для ссылки «В календаре» (как в event.js).
    const OWNER_CALENDARS = [
        {
            title: 'Календарь СПб', page: 'calendar.html', query: '&startYear=ALL',
            sources: ['events2026', 'events2025', 'events2024', 'events2023', 'events2022', 'events2021',
                'events2020', 'events2019', 'events2018', 'events2017', 'events2016', 'events2015',
                'events2014', 'events2013', 'events2012', 'events2011', 'events2010', 'events2009',
                'events2008', 'events2007', 'events2006', 'events2005', 'events2004', 'eventsEarly',
                'otherEvents2026', 'commonEvents2026', 'iofEvents', 'fsorEvents', 'irfEvents']
        },
        { title: 'Календарь Москвы', page: 'calendar-msk.html', query: '', sources: ['mskEvents2026', 'mskEvents2025', 'mskEventsOther'] },
        { title: 'Календарь Самары', page: 'calendar-samara.html', query: '', sources: ['samaraEvents2026'] },
        { title: 'Лыжный календарь', page: 'calendar-ski.html', query: '', sources: ['skiEvents2026'] },
    ];

    function asList(value) {
        return value == null ? [] : (Array.isArray(value) ? value : [value]);
    }

    function esc(text) {
        return String(text ?? '').replace(/[&<>"']/g, ch =>
            ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]);
    }

    function stripTags(html) {
        const div = document.createElement('div');
        div.innerHTML = String(html ?? '');
        return div.textContent.replace(/\s+/g, ' ').trim();
    }

    // Строка «Подпись: значение» - как на event.html и start-details.
    function row(label, value) {
        if (!value || !String(value).trim()) return '';
        const head = label ? `<b>${label}:</b> ` : '';
        return /<(ol|ul|div)\b/i.test(value) ? `<div class="mb-3">${head}${value}</div>` : `<p>${head}${value}</p>`;
    }

    function section(id, title, body) {
        if (!body) return '';
        return `<section id="${id}" class="clearfix"><h2>${title}</h2>${body}</section>`;
    }

    function uniqueById(events) {
        const ids = new Set();
        return events.filter(e => {
            if (!e.id || ids.has(e.id)) return false;
            ids.add(e.id);
            return true;
        });
    }

    // Владельцы записи (события или карты) - как getOwners() в utils.js, но
    // неизвестный код старта не роняет страницу, а выводится в консоль.
    const unknownStarts = new Set();
    function isOwnedBy(rec) {
        if (asList(rec.owner).includes(OWNER_CODE)) return true;
        return asList(rec.start).some(code => {
            if (!starts[code]) {
                if (!unknownStarts.has(code)) {
                    unknownStarts.add(code);
                    console.warn('owner.html: неизвестный код старта ' + code + ' (запись ' + (rec.id ?? rec.name) + ')');
                }
                return false;
            }
            return asList(starts[code].owner).includes(OWNER_CODE);
        });
    }

    // Заголовок страницы - короткое название, иначе title, иначе name (без разметки).
    function ownerTitle(o) {
        return stripTags(o.short ?? o.title ?? o.name);
    }

    // --- данные ------------------------------------------------------------------

    function ownerEvents() {
        const events = [];
        for (const [source, list] of Object.entries(eventSources)) {
            for (const e of list) {
                if (isOwnedBy(e)) events.push({ evt: e, source: source });
            }
        }
        const ids = new Set();
        return events.filter(x => {
            if (!x.evt.id || ids.has(x.evt.id)) return false;
            ids.add(x.evt.id);
            return true;
        }).sort((a, b) => dateForCompare(b.evt) - dateForCompare(a.evt));
    }

    function ownerStarts() {
        return Object.keys(starts).filter(code => asList(starts[code].owner).includes(OWNER_CODE));
    }

    // Карты владельца - только те, где он указан в поле owner самой карты.
    function ownerMaps() {
        return oMaps.filter(m => asList(m.owner).includes(OWNER_CODE))
            .sort((a, b) => dateForCompare(b) - dateForCompare(a));
    }

    // --- разделы -----------------------------------------------------------------

    function buildHero(o, events, maps) {
        let html = '';
        if (o.logo) {
            html += `<img class="help-figure help-figure-left" src="./logo/${esc(o.logo)}" alt="">`;
        }
        if (o.info) html += `<p>${o.info}</p>`;
        const title = ownerTitle(o);
        if (o.name && stripTags(o.name) !== title) html += `<p>${o.name}</p>`;
        if (o.about) {
            html += row('Подробнее', `<a href="${esc(o.about)}" target="_blank" rel="noopener">${esc(o.about)}</a>`);
        }
        const links = [];
        const sources = new Set(events.map(x => x.source));
        for (const c of OWNER_CALENDARS) {
            if (c.sources.some(s => sources.has(s))) {
                links.push(`<a href="${c.page}?owner=${encodeURIComponent(OWNER_CODE)}${c.query}">${c.title}</a>`);
            }
        }
        if (maps.length) {
            links.push(`<a href="sheet-all.html?owner=${encodeURIComponent(OWNER_CODE)}">карты списком</a>`);
        }
        html += row('Смотреть отдельно', links.join(', '));
        return html || '<p>Описания пока нет.</p>';
    }

    function buildStartsSection(codes) {
        const items = codes.map(code => {
            const s = starts[code];
            const logo = s.logo ? `<img src="./logo/${esc(s.logo)}" alt="" class="sheet-icon"> ` : '';
            return `<li>${logo}<a href="start.html?start=${encodeURIComponent(code)}">${stripTags(s.name ?? s.short ?? code)}</a></li>`;
        });
        return section('ow_starts', 'Соревнования', items.length ? `<ul>${items.join('')}</ul>` : '');
    }

    function buildEventsSection(events) {
        const items = events.map(x => {
            const e = x.evt;
            const logos = logoList(e);
            const logo = logos.length ? `<img src="./logo/${esc(logos[0])}" alt="" class="sheet-icon"> ` : '';
            const place = e.place ? ', ' + esc(e.place) : '';
            return `<li><b>${buildEventDate(e, true, true)}</b>, ${logo}<a href="event.html?id=${encodeURIComponent(e.id)}">${e.name}</a>${place} ${buildEventResults(e)}</li>`;
        });
        const title = 'События календаря' + (items.length > 1 ? ` (${items.length})` : '');
        return section('ow_events', title, items.length ? `<ul>${items.join('')}</ul>` : '');
    }

    function buildMapsSection(maps) {
        if (maps.length === 0) return '';
        const tiles = maps.map(m => {
            const name = getMapName(m);
            const title = esc(`${year(m) ?? ''} - ${m.name}`.replace(/^ - /, ''));
            const img = isMapHidden(m) || !m.url ? '' :
                `<a href="map-info.html?map=${encodeURIComponent(name)}" target="_self"><img src="${esc(mapImageUrl(m))}" title="${title}" loading="lazy" /></a>`;
            return `<div class="row"><div class="start-map-box align-items-center d-flex justify-content-center"><div>${img}` +
                `<div class="start-map-box-description"><a href="map-info.html?map=${encodeURIComponent(name)}" target="_self">${title}</a></div></div></div></div>`;
        }).join('');
        return section('ow_maps', maps.length > 1 ? `Карты (${maps.length})` : 'Карта', `<div class="start-maps-wrapper">${tiles}</div>`);
    }

    // --- сборка страницы ---------------------------------------------------------

    function renderNotFound() {
        const text = OWNER_CODE
            ? `На O-Maps нет владельца с кодом <b>${esc(OWNER_CODE)}</b>. Возможно, ссылка устарела или в ней опечатка.`
            : 'В адресе не указан код владельца: страница открывается как <code>owner.html?owner=КОД</code>.';
        document.getElementById('owner_title').textContent = 'Владелец не найден';
        document.title = 'Владелец не найден — O-Maps';
        document.getElementById('owner_hero').innerHTML = `<p>${text}</p>`;
        const meta = document.createElement('meta');
        meta.name = 'robots';
        meta.content = 'noindex';
        document.head.appendChild(meta);
    }

    function render() {
        const o = OWNER_CODE ? owners[OWNER_CODE] : null;
        if (!o) {
            renderNotFound();
            return;
        }
        const events = ownerEvents();
        const maps = ownerMaps();
        const title = ownerTitle(o);

        document.getElementById('owner_title').textContent = title;
        document.title = title + ' — O-Maps';
        const description = stripTags(o.info ?? o.name);
        document.querySelector('meta[name="description"]')?.setAttribute('content', 'O-Maps. ' + description);
        document.querySelector('meta[property="og:title"]')?.setAttribute('content', title + ' — O-Maps');
        document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);

        document.getElementById('owner_hero').innerHTML = buildHero(o, events, maps);
        document.getElementById('owner_sections').innerHTML =
            buildStartsSection(ownerStarts()) +
            buildEventsSection(events) +
            buildMapsSection(maps) +
            `<p class="text-end small text-muted">Код владельца: ${esc(OWNER_CODE)}</p>`;
    }

    render();
})();
