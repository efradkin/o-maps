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

    // Календари сайта (SITE_CALENDARS в utils.js) для ссылок «Смотреть отдельно»:
    // у календаря по годам - все годы (&startYear=ALL). Общие события
    // (commonEvents) дают ссылку только на календарь СПб: из sources
    // остальных календарей они убраны (так было и до переноса списка в utils.js).
    const OWNER_CALENDARS = SITE_CALENDARS.map(c => ({
        title: c.title,
        page: c.page,
        query: c.years ? '&startYear=ALL' : '',
        sources: c.years ? c.sources : c.sources.filter(s => s !== 'commonEvents')
    }));

    // Заголовок страницы - короткое название, иначе title, иначе name (без разметки).
    function ownerTitle(o) {
        return stripTags(o.short ?? o.title ?? o.name);
    }

    // --- данные ------------------------------------------------------------------

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
            html += `<img class="help-figure help-figure-left" src="./logo/${htmlEscape(o.logo)}" alt="">`;
        }
        if (o.info) html += `<p>${o.info}</p>`;
        const title = ownerTitle(o);
        if (o.name && stripTags(o.name) !== title) html += `<p>${o.name}</p>`;
        if (o.about) {
            html += infoRow('Подробнее', `<a href="${htmlEscape(o.about)}" target="_blank" rel="noopener">${htmlEscape(o.about)}</a>`);
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
        html += infoRow('Смотреть отдельно', links.join(', '));
        return html || '<p>Описания пока нет.</p>';
    }

    function buildStartsSection(codes) {
        const items = codes.map(code => {
            const s = starts[code];
            const logo = s.logo ? `<img src="./logo/${htmlEscape(s.logo)}" alt="" class="sheet-icon"> ` : '';
            return `<li>${logo}<a href="start.html?start=${encodeURIComponent(code)}">${stripTags(s.name ?? s.short ?? code)}</a></li>`;
        });
        return infoSection('ow_starts', 'Соревнования', items.length ? `<ul>${items.join('')}</ul>` : '');
    }

    function buildEventsSection(events) {
        const items = events.map(x => {
            const e = x.evt;
            const logos = logoList(e);
            const logo = logos.length ? `<img src="./logo/${htmlEscape(logos[0])}" alt="" class="sheet-icon"> ` : '';
            const place = e.place ? ', ' + htmlEscape(e.place) : '';
            return `<li><b>${buildEventDate(e, true, true)}</b>, ${logo}<a href="event.html?id=${encodeURIComponent(e.id)}">${e.name}</a>${place} ${buildEventResults(e)}</li>`;
        });
        const title = 'События календаря' + (items.length > 1 ? ` (${items.length})` : '');
        return infoSection('ow_events', title, items.length ? `<ul>${items.join('')}</ul>` : '');
    }

    function buildMapsSection(maps) {
        if (maps.length === 0) return '';
        const tiles = maps.map(m => {
            const name = getMapName(m);
            const title = htmlEscape(`${year(m) ?? ''} - ${m.name}`.replace(/^ - /, ''));
            const img = isMapHidden(m) || !m.url ? '' :
                `<a href="map-info.html?map=${encodeURIComponent(name)}" target="_self"><img src="${htmlEscape(mapImageUrl(m))}" title="${title}" loading="lazy" /></a>`;
            return `<div class="row"><div class="start-map-box align-items-center d-flex justify-content-center"><div>${img}` +
                `<div class="start-map-box-description"><a href="map-info.html?map=${encodeURIComponent(name)}" target="_self">${title}</a></div></div></div></div>`;
        }).join('');
        return infoSection('ow_maps', maps.length > 1 ? `Карты (${maps.length})` : 'Карта', `<div class="start-maps-wrapper">${tiles}</div>`);
    }

    // --- сборка страницы ---------------------------------------------------------

    function renderNotFound() {
        const text = OWNER_CODE
            ? `На O-Maps нет владельца с кодом <b>${htmlEscape(OWNER_CODE)}</b>. Возможно, ссылка устарела или в ней опечатка.`
            : 'В адресе не указан код владельца: страница открывается как <code>owner.html?owner=КОД</code>.';
        renderRecordNotFound('owner_title', 'Владелец не найден', 'owner_hero', `<p>${text}</p>`);
    }

    function render() {
        const o = OWNER_CODE ? owners[OWNER_CODE] : null;
        if (!o) {
            renderNotFound();
            return;
        }
        const events = findOwnerEvents(OWNER_CODE, 'owner.html');
        const maps = ownerMaps();
        const title = ownerTitle(o);

        document.getElementById('owner_title').textContent = title;
        applyPageMeta(title, stripTags(o.info ?? o.name));

        document.getElementById('owner_hero').innerHTML = buildHero(o, events, maps);
        document.getElementById('owner_sections').innerHTML =
            buildStartsSection(ownerStarts()) +
            buildEventsSection(events) +
            buildMapsSection(maps) +
            `<p class="text-end small text-muted">Код владельца: ${htmlEscape(OWNER_CODE)}</p>`;
    }

    render();
})();
