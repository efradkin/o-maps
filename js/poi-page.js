/*
 * Страница точки интереса (POI): poi.html?poi=POI_ID (поле id записи в poi.js).
 *
 * POI - это клубы, спортшколы и секции (type: 'CLUB'), отмеченные на карте
 * соревнования (type: 'ORIENT') и прочие места (базы отдыха, трассы - без type).
 * Страница сделана по аналогии с event.html и start.html:
 *   шапка   — логотип, вид точки, описание (info), адрес и район, сайт (link)
 *             и дополнительные ссылки (reg), тренеры (couches), ссылка на таблицу
 *             клубов; у соревнований -
 *             даты, формат, серия (start), страница на O-Site;
 *   «На O-Maps» — если код POI совпадает с кодом владельца в owners.js
 *             (NW, AZIMUT, ANCHKV и т.п.), ссылка на страницу владельца и его
 *             последние события календаря;
 *   «Место» — мини-карта с отметкой (поле coord), ссылки на карту O-Maps и маршрут.
 *
 * Файл называется poi-page.js, потому что js/poi.js - это данные (массив poi).
 * Оформление штатное (help-body, строки «Подпись: значение», sheet-icon).
 * Весь код - в замыкании: main.js объявляет глобальные map, marker1 и прочие.
 */
(function () {
    'use strict';

    const POI_ID = urlParams.get('poi');
    const RECENT_EVENTS = 10; // сколько событий владельца показывать

    const POI_KINDS = {
        CLUB: 'Клуб, спортшкола, секция',
        ORIENT: 'Соревнования',
    };

    function poiLogo(p) {
        if (p.logo) return './logo/' + p.logo;
        return p.image ?? null;
    }

    // --- разделы -----------------------------------------------------------------

    function buildHero(p) {
        let html = '';
        const logo = poiLogo(p);
        if (logo) html += `<img class="help-figure help-figure-left" src="${htmlEscape(logo)}" alt="">`;
        html += infoRow('', `<i>${POI_KINDS[p.type] ?? 'Место'}</i>`);
        if (p.date) {
            html += infoRow('Даты', buildEventDate(p, true, true));
        }
        if (p.info) html += `<p>${p.info}</p>`;
        if (p.fmt) html += infoRow('Формат', htmlEscape(p.fmt));
        const place = [p.place, p.district ? DISTRICTS[p.district] : null].filter(Boolean).join(', ');
        html += infoRow('Адрес', htmlEscape(place));
        if (p.start && starts[p.start]) {
            html += infoRow('Серия', `<a href="start.html?start=${encodeURIComponent(p.start)}">${stripTags(starts[p.start].name ?? starts[p.start].short)}</a>`);
        }
        html += infoRow('Сайт', asList(p.link).map(l => linkChipHtml(describeLinkItem(l))).join(', '));
        html += infoRow(p.type === 'ORIENT' ? 'Регистрация' : 'Ещё ссылки', asList(p.reg).map(l => linkChipHtml(describeLinkItem(l))).join(', '));
        if (p.o_site) {
            html += infoRow('Страница на O-Site', `<a href="${O_SITE_ADDRESS_PREFIX + encodeURIComponent(p.o_site)}" target="_blank" rel="noopener"><img src="images/o-site.gif" alt="" class="sheet-icon"> ${htmlEscape(p.o_site)}</a>`);
        }
        html += infoRow('Тренеры', buildCouches(p));
        if (p.type === 'CLUB') {
            const district = p.district ? `, <a href="clubs.html?district=${encodeURIComponent(p.district)}">${htmlEscape(DISTRICTS[p.district])}</a>` : '';
            html += infoRow('Все клубы', `<a href="clubs.html">таблица клубов</a>${district}`);
        }
        return html;
    }

    function buildOwnerSection(p) {
        const o = owners[p.id];
        if (!o) return '';
        const name = stripTags(o.short ?? o.title ?? o.name);
        let html = infoRow('', `<a href="owner.html?owner=${encodeURIComponent(p.id)}">${htmlEscape(name)}</a> — организатор соревнований и владелец карт на O-Maps.`);
        const events = findOwnerEvents(p.id, 'poi.html').map(x => x.evt);
        if (events.length) {
            const items = events.slice(0, RECENT_EVENTS).map(e => {
                const place = e.place ? ', ' + htmlEscape(e.place) : '';
                return `<li><b>${buildEventDate(e, true, true)}</b>, ${buildEventPageTitle(e)}${place}</li>`;
            });
            const more = events.length > RECENT_EVENTS
                ? `<p><a href="owner.html?owner=${encodeURIComponent(p.id)}">Все события (${events.length}) →</a></p>` : '';
            html += `<p><b>События календаря:</b></p><ul>${items.join('')}</ul>${more}`;
        }
        return infoSection('poi_owner', 'На O-Maps', html);
    }

    function buildPlaceSection(p) {
        if (!p.coord) return '';
        const [x, y] = p.coord;
        const btn = 'btn btn-sm btn-outline-secondary me-2 mb-2';
        const links = [
            `<a class="${btn}" href="spb.html?x=${x}&y=${y}&poi" target="_self"><img src="images/map_24.png" alt="" class="sheet-icon"> Открыть на карте O-Maps</a>`,
            `<a class="${btn}" href="${yandexRouteUrl(p.coord)}" target="_blank" rel="noopener">🚗 Маршрут в Яндексе</a>`,
        ];
        return infoSection('poi_place', 'Место', `<div id="poi_map" role="img" aria-label="Карта места"></div>` +
            infoRow('Координаты', `${x}, ${y}`) + `<div>${links.join('')}</div>`);
    }

    // --- мини-карта ---------------------------------------------------------------

    function initPlaceMap(p) {
        const el = document.getElementById('poi_map');
        if (!el || typeof L === 'undefined') return;
        const lmap = createPlaceMiniMap(el, 'poi.html');
        // Значок - как у POI на основной карте (loadPOI в main.js): логотип или значок O-Maps.
        const size = p.iconSize ?? [60, 60];
        L.marker(p.coord, {
            icon: L.icon({
                iconUrl: poiLogo(p) ?? './logo/o-maps.webp',
                iconSize: size,
                iconAnchor: [size[0] / 2, size[1] / 2]
            }),
            title: stripTags(p.name),
            keyboard: false
        }).addTo(lmap);
        lmap.setView(p.coord, 14);
    }

    // --- сборка страницы ---------------------------------------------------------

    function renderNotFound() {
        const text = POI_ID
            ? `На O-Maps нет точки с кодом <b>${htmlEscape(POI_ID)}</b>. Возможно, ссылка устарела или в ней опечатка.`
            : 'В адресе не указан код точки: страница открывается как <code>poi.html?poi=КОД</code>.';
        renderRecordNotFound('poi_title', 'Точка не найдена', 'poi_hero',
            `<p>${text}</p><p>Клубы и секции — на странице <a href="clubs.html">клубов</a>.</p>`);
    }

    function render() {
        const ids = new Set();
        for (const x of poi) {
            if (!x.id) console.warn('poi.html: у точки «' + x.name + '» нет id');
            else if (ids.has(x.id)) console.warn('poi.html: повторяющийся id точки ' + x.id);
            else ids.add(x.id);
        }
        const p = POI_ID ? poi.find(x => x.id === POI_ID) : null;
        if (!p) {
            renderNotFound();
            return;
        }
        const title = stripTags(p.name);
        document.getElementById('poi_title').textContent = title;
        applyPageMeta(title, stripTags(p.info ?? title));
        if (p.coord) {
            document.getElementById('poi_map_link').href = `spb.html?x=${p.coord[0]}&y=${p.coord[1]}&poi`;
        }

        document.getElementById('poi_hero').innerHTML = buildHero(p);
        document.getElementById('poi_sections').innerHTML =
            buildOwnerSection(p) +
            buildPlaceSection(p) +
            `<p class="text-end small text-muted">Код точки: ${htmlEscape(p.id)}</p>`;
        initPlaceMap(p);
    }

    render();
})();
