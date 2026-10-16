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

    function hostOf(url) {
        try {
            return new URL(url).hostname.replace(/^www\./, '');
        } catch (e) {
            return url;
        }
    }

    function linkChip(url, cls) {
        const klass = cls ? ` class="${cls}"` : '';
        return `<a${klass} href="${esc(url)}" target="_blank" rel="noopener"><img src="images/url-file.png" alt="" class="sheet-icon" onerror="this.remove()"> ${esc(hostOf(url))}</a>`;
    }

    function poiLogo(p) {
        if (p.logo) return './logo/' + p.logo;
        return p.image ?? null;
    }

    // --- владелец (owners.js) с тем же кодом ---------------------------------------

    // Владельцы записи - как getOwners() в utils.js, но неизвестный код
    // старта не роняет страницу, а выводится в консоль.
    const unknownStarts = new Set();
    function isOwnedBy(rec, code) {
        if (asList(rec.owner).includes(code)) return true;
        return asList(rec.start).some(s => {
            if (!starts[s]) {
                if (!unknownStarts.has(s)) {
                    unknownStarts.add(s);
                    console.warn('poi.html: неизвестный код старта ' + s + ' (запись ' + (rec.id ?? rec.name) + ')');
                }
                return false;
            }
            return asList(starts[s].owner).includes(code);
        });
    }

    function ownerEvents(code) {
        const ids = new Set();
        return oEvents.filter(e => {
            if (!e.id || ids.has(e.id) || !isOwnedBy(e, code)) return false;
            ids.add(e.id);
            return true;
        }).sort((a, b) => dateForCompare(b) - dateForCompare(a));
    }

    // --- разделы -----------------------------------------------------------------

    function buildHero(p) {
        let html = '';
        const logo = poiLogo(p);
        if (logo) html += `<img class="help-figure help-figure-left" src="${esc(logo)}" alt="">`;
        html += row('', `<i>${POI_KINDS[p.type] ?? 'Место'}</i>`);
        if (p.date) {
            html += row('Даты', buildEventDate(p, true, true));
        }
        if (p.info) html += `<p>${p.info}</p>`;
        if (p.fmt) html += row('Формат', esc(p.fmt));
        const place = [p.place, p.district ? DISTRICTS[p.district] : null].filter(Boolean).join(', ');
        html += row('Адрес', esc(place));
        if (p.start && starts[p.start]) {
            html += row('Серия', `<a href="start.html?start=${encodeURIComponent(p.start)}">${stripTags(starts[p.start].name ?? starts[p.start].short)}</a>`);
        }
        html += row('Сайт', asList(p.link).map(l => linkChip(l)).join(', '));
        html += row(p.type === 'ORIENT' ? 'Регистрация' : 'Ещё ссылки', asList(p.reg).map(l => linkChip(l)).join(', '));
        if (p.o_site) {
            html += row('Страница на O-Site', `<a href="${O_SITE_ADDRESS_PREFIX + encodeURIComponent(p.o_site)}" target="_blank" rel="noopener"><img src="images/o-site.gif" alt="" class="sheet-icon"> ${esc(p.o_site)}</a>`);
        }
        html += row('Тренеры', buildCouches(p));
        if (p.type === 'CLUB') {
            const district = p.district ? `, <a href="clubs.html?district=${encodeURIComponent(p.district)}">${esc(DISTRICTS[p.district])}</a>` : '';
            html += row('Все клубы', `<a href="clubs.html">таблица клубов</a>${district}`);
        }
        return html;
    }

    function buildOwnerSection(p) {
        const o = owners[p.id];
        if (!o) return '';
        const name = stripTags(o.short ?? o.title ?? o.name);
        let html = row('', `<a href="owner.html?owner=${encodeURIComponent(p.id)}">${esc(name)}</a> — организатор соревнований и владелец карт на O-Maps.`);
        const events = ownerEvents(p.id);
        if (events.length) {
            const items = events.slice(0, RECENT_EVENTS).map(e => {
                const place = e.place ? ', ' + esc(e.place) : '';
                return `<li><b>${buildEventDate(e, true, true)}</b>, <a href="event.html?id=${encodeURIComponent(e.id)}">${e.name}</a>${place}</li>`;
            });
            const more = events.length > RECENT_EVENTS
                ? `<p><a href="owner.html?owner=${encodeURIComponent(p.id)}">Все события (${events.length}) →</a></p>` : '';
            html += `<p><b>События календаря:</b></p><ul>${items.join('')}</ul>${more}`;
        }
        return section('poi_owner', 'На O-Maps', html);
    }

    function buildPlaceSection(p) {
        if (!p.coord) return '';
        const [x, y] = p.coord;
        const btn = 'btn btn-sm btn-outline-secondary me-2 mb-2';
        const links = [
            `<a class="${btn}" href="spb.html?x=${x}&y=${y}&poi" target="_self"><img src="images/map_24.png" alt="" class="sheet-icon"> Открыть на карте O-Maps</a>`,
            `<a class="${btn}" href="https://yandex.ru/maps/?rtext=~${+x.toFixed(6)},${+y.toFixed(6)}&rtt=auto" target="_blank" rel="noopener">🚗 Маршрут в Яндексе</a>`,
        ];
        return section('poi_place', 'Место', `<div id="poi_map" role="img" aria-label="Карта места"></div>` +
            row('Координаты', `${x}, ${y}`) + `<div>${links.join('')}</div>`);
    }

    // --- мини-карта (подложка - как на event.html) -----------------------------------

    const OSM_TILES = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const TOPO_TILES = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
    const YANDEX_API = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
    const YANDEX_PLUGIN = 'js/ext/Yandex.js';

    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = () => reject(new Error('не загрузился ' + src));
            document.head.appendChild(script);
        });
    }

    async function addBaseLayer(lmap) {
        const bg = typeof background !== 'undefined' ? background : BACKGROUND_YANDEX;
        const attribution = typeof ATTRIBUTION !== 'undefined' ? ATTRIBUTION : '';
        if (bg === BACKGROUND_OSM) {
            L.tileLayer(OSM_TILES, { maxZoom: 17, attribution: attribution }).addTo(lmap);
            return;
        }
        if (bg === BACKGROUND_TOPO) {
            L.tileLayer(TOPO_TILES, { maxZoom: 17, attribution: attribution }).addTo(lmap);
            return;
        }
        try {
            if (typeof ymaps === 'undefined') await loadScript(YANDEX_API);
            if (typeof L.yandex !== 'function') await loadScript(YANDEX_PLUGIN);
            const options = { maxZoom: 17, attribution: attribution };
            if (bg === BACKGROUND_SATELLITE) options.type = 'satellite';
            L.yandex(options).addTo(lmap);
        } catch (e) {
            console.warn('poi.html: подложка Яндекса недоступна (' + e.message + '), показан OSM');
            L.tileLayer(OSM_TILES, {
                maxZoom: 17,
                attribution: '© <a href="https://github.com/efradkin/o-maps">O-Maps</a> | ' +
                    '<a href="https://t.me/o_maps">Спорт. карты</a> на ' +
                    '<a href="https://www.openstreetmap.org/copyright">OSM</a>'
            }).addTo(lmap);
        }
    }

    function initPlaceMap(p) {
        const el = document.getElementById('poi_map');
        if (!el || typeof L === 'undefined') return;
        const lmap = L.map(el, { scrollWheelZoom: false, zoomControl: true, attributionControl: false });
        L.control.attribution().setPrefix('').addTo(lmap);
        addBaseLayer(lmap);
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
            ? `На O-Maps нет точки с кодом <b>${esc(POI_ID)}</b>. Возможно, ссылка устарела или в ней опечатка.`
            : 'В адресе не указан код точки: страница открывается как <code>poi.html?poi=КОД</code>.';
        document.getElementById('poi_title').textContent = 'Точка не найдена';
        document.title = 'Точка не найдена — O-Maps';
        document.getElementById('poi_hero').innerHTML = `<p>${text}</p><p>Клубы и секции — на странице <a href="clubs.html">клубов</a>.</p>`;
        const meta = document.createElement('meta');
        meta.name = 'robots';
        meta.content = 'noindex';
        document.head.appendChild(meta);
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
        document.title = title + ' — O-Maps';
        const description = stripTags(p.info ?? title);
        document.querySelector('meta[name="description"]')?.setAttribute('content', 'O-Maps. ' + description);
        document.querySelector('meta[property="og:title"]')?.setAttribute('content', title + ' — O-Maps');
        document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
        if (p.coord) {
            document.getElementById('poi_map_link').href = `spb.html?x=${p.coord[0]}&y=${p.coord[1]}&poi`;
        }

        document.getElementById('poi_hero').innerHTML = buildHero(p);
        document.getElementById('poi_sections').innerHTML =
            buildOwnerSection(p) +
            buildPlaceSection(p) +
            `<p class="text-end small text-muted">Код точки: ${esc(p.id)}</p>`;
        initPlaceMap(p);
    }

    render();
})();
