/*
 * Страница одного события календаря: event.html?id=EVENT_ID.
 *
 * Событие ищется во всех календарях сайта (СПб, общий, «прочие», Москва,
 * Самара, лыжи) — массивы перечислены в eventSources в event.html. Календарь,
 * в котором нашлось событие, задаёт:
 *   - ссылку «В календаре» в шапке;
 *   - страницу карты по умолчанию (spb / moscow / samara / tracks / all);
 *   - соседей: «В те же и соседние дни» и «Раньше / позже в календаре».
 * К СПб страница не привязана: для события из московского календаря всё
 * ведёт в московский календарь и на moscow.html и т.д.
 *
 * Показывается то же, что в карточке календаря, но крупно и с подписями:
 *   шапка — логотип (как на map-info), дата, место, вид и формат, серия, статус
 *           (через N дней / идёт / состоялось / отменено), срок приёма
 *           заявок (endReg) с бейджем «осталось …», кнопки действий
 *           (регистрация, сайт, в свой календарь .ics, «мой старт», поделиться);
 *   «Результаты и материалы», «Подробности», «Программа» (многодневка: поле
 *   parent), «Карты» (превью), «Место» (мини-карта с картами события и
 *   отметкой), «Документы», «Серия по годам», «В те же и соседние дни»,
 *   соседние события календаря.
 *
 * Данные не «чинятся»: странные записи (дубли id и т.п.) выводятся в консоль.
 * Оформление - штатное: секции help-body, строки «Подпись: значение» как на
 * start-details, sheet-icon, help-figure/news-figure и классы Bootstrap
 * (бейджи, кнопки, сетка). Своих стилей у страницы почти нет (см. event.html).
 * Весь код - в замыкании: main.js объявляет глобальные map, marker1 и прочие.
 */
(function () {
    'use strict';

    const EVENT_ID = urlParams.get('id');

    // Календари сайта. Порядок важен: событие относится к первому календарю,
    // в sources которого есть его массив. Общие события (commonEvents2026)
    // показываются и в СПб, и в московском календаре — «родным» для них
    // считается первый. mapPage — страница карты для событий без собственной
    // (у карты может быть своя страница: поле page или page её старта).
    const EVENT_CALENDARS = [
        {
            title: 'Календарь СПб', page: 'calendar.html', mapPage: 'spb.html', years: true,
            sources: ['events2026', 'events2025', 'events2024', 'events2023', 'events2022', 'events2021',
                'events2020', 'events2019', 'events2018', 'events2017', 'events2016', 'events2015',
                'events2014', 'events2013', 'events2012', 'events2011', 'events2010', 'events2009',
                'events2008', 'events2007', 'events2006', 'events2005', 'events2004', 'eventsEarly',
                'otherEvents2026', 'commonEvents2026', 'iofEvents']
        },
        {
            title: 'Календарь Москвы', page: 'calendar-msk.html', mapPage: 'moscow.html',
            sources: ['mskEvents2026', 'mskEvents2025', 'mskEventsOther', 'commonEvents2026']
        },
        {
            title: 'Календарь Самары', page: 'calendar-samara.html', mapPage: 'samara.html',
            sources: ['samaraEvents2026']
        },
        {
            title: 'Лыжный календарь', page: 'calendar-ski.html', mapPage: 'tracks.html',
            sources: ['skiEvents2026']
        },
    ];
    // Общие (международные и всероссийские) старты - на общую карту.
    const SOURCE_MAP_PAGE = { commonEvents2026: 'all.html', iofEvents: 'all.html' };

    const NOT_SERIES = ['OTHER', 'REPORT'];
    const MONTHS_GEN = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const WEEK_DAYS = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    const DAY_MS = 24 * 60 * 60 * 1000;

    // Сервисы для подписанных ссылок. Порядок важен: первое совпадение.
    const SERVICES = [
        { re: /orgeo/i, label: 'Orgeo', img: 'images/orgeo.webp' },
        { re: /o-reg/i, label: 'O-Reg', img: 'images/oreg.webp' },
        { re: /o-time/i, label: 'O-Time', img: 'images/otime.webp' },
        { re: /multsport/i, label: 'Multsport', img: 'images/multsport.webp' },
        { re: /sportident/i, label: 'Sportident', img: 'images/si.webp' },
        { re: /reskeep/i, label: 'Reskeep', img: 'images/r-k.gif' },
        { re: /o-site\.spb\.ru/i, label: 'O-Site', img: 'images/o-site-r.gif' },
        { re: /vkvideo|vk\.(com|ru)\/(video|clip)/i, label: 'VK Видео', img: 'images/vkvideo.gif' },
        { re: /vk\.(com|ru)/i, label: 'ВКонтакте', img: 'images/vk.webp' },
        { re: /t\.me\//i, label: 'Telegram', img: 'images/telegram.webp' },
        { re: /youtu/i, label: 'YouTube', img: 'images/youtube.webp' },
        { re: /rutube/i, label: 'Rutube', img: 'images/rutube.webp' },
        { re: /disk\.yandex|yadi\.sk/i, label: 'Яндекс Диск' },
        { re: /yandex|dzen/i, label: 'Яндекс', img: 'images/ya_video.webp', imgOnlyFor: 'video' },
        { re: /cloud\.mail\.ru/i, label: 'Облако Mail' },
        { re: /sport-images\.ru/i, label: 'Sport-images', img: 'images/sportimages.webp' },
        { re: /russiarunning/i, label: 'RussiaRunning' },
        { re: /russialoppet/i, label: 'Russialoppet', img: 'logo/russialoppet.gif' },
        { re: /gosuslugi/i, label: 'Госуслуги' },
        { re: /strava/i, label: 'Strava', img: 'images/strava_32.gif' },
    ];
    const FILE_EXTS = ['pdf', 'zip', 'rar', 'xls', 'xlsx', 'doc', 'docx', 'jpg', 'jpeg', 'png', 'gif', 'webp', 'ocd'];

    // --- мелочи ---------------------------------------------------------------

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

    function plural(n, one, few, many) {
        const n10 = n % 10, n100 = n % 100;
        if (n10 === 1 && n100 !== 11) return one;
        if (n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14)) return few;
        return many;
    }

    // 'YYYY-MM-DD' -> локальная полночь (new Date('YYYY-MM-DD') даёт UTC и
    // западнее Гринвича съезжает на день назад).
    function parseDay(s) {
        const [y, m, d] = String(s).substring(0, 10).split('-').map(Number);
        return new Date(y, m - 1, d);
    }

    function today() {
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth(), now.getDate());
    }

    function shortDate(evt, withYear) {
        const d = parseDay(evt.date);
        const mon = dt => MONTHS_GEN[dt.getMonth()].substring(0, 3);
        let s = d.getDate() + ' ' + mon(d);
        if (evt.endDate && evt.endDate !== evt.date) {
            const e = parseDay(evt.endDate);
            s = (e.getMonth() === d.getMonth() && e.getFullYear() === d.getFullYear())
                ? d.getDate() + '–' + e.getDate() + ' ' + mon(e)
                : s + ' – ' + e.getDate() + ' ' + mon(e);
        }
        if (withYear) s += ' ' + d.getFullYear();
        return s;
    }

    function fullDateText(evt) {
        const d = parseDay(evt.date);
        let s = d.getDate() + ' ' + MONTHS_GEN[d.getMonth()];
        if (evt.endDate && evt.endDate !== evt.date) {
            const e = parseDay(evt.endDate);
            s = (e.getMonth() === d.getMonth() && e.getFullYear() === d.getFullYear())
                ? d.getDate() + '–' + e.getDate() + ' ' + MONTHS_GEN[e.getMonth()]
                : s + (e.getFullYear() !== d.getFullYear() ? ' ' + d.getFullYear() : '') +
                    ' – ' + e.getDate() + ' ' + MONTHS_GEN[e.getMonth()];
            return s + ' ' + e.getFullYear();
        }
        return s + ' ' + d.getFullYear();
    }

    // Значок-логотип события перед названием - как в календаре (buildEventStart).
    function eventLogoIcon(e) {
        const logos = logoList(e);
        return logos.length ? `<img src="./logo/${esc(logos[0])}" alt="Лого" class="sheet-icon"> ` : '';
    }

    function absUrl(path) {
        return new URL(path, location.href).href;
    }

    // Подписанная ссылка-«пилюля». context: 'video' / 'photo' / 'reg' / 'res'.
    function describeLink(url, context) {
        const u = String(url);
        // e-mail в регистрации - как buildOneEventReg() в utils.js
        if (u.startsWith('mailto:') || (context === 'reg' && u.includes('@'))) {
            const mail = u.replace(/^mailto:/, '');
            return { href: 'mailto:' + mail, label: mail, emoji: '✉️' };
        }
        const service = SERVICES.find(s => s.re.test(u));
        const ext = (u.split('?')[0].match(/\.([a-z0-9]+)$/i) || [])[1]?.toLowerCase();
        const fileExt = FILE_EXTS.includes(ext) ? ext : null;
        if (service) {
            let label = service.label;
            if (fileExt && context === 'res') label += ' (' + fileExt.toUpperCase() + ')';
            let img = (!service.imgOnlyFor || service.imgOnlyFor === context) ? service.img : undefined;
            if (!img && context === 'photo') img = 'images/photo-camera.png';
            if (!img && context === 'video') img = 'images/video-camera.png';
            return { href: u, label: label, img: img };
        }
        if (fileExt || !/^https?:/i.test(u)) {
            return {
                href: u,
                label: fileExt ? 'Файл ' + fileExt.toUpperCase() : 'Ссылка',
                img: 'images/' + downloadIconExt(u) + '-file.png'
            };
        }
        let host = u;
        try { host = new URL(u).hostname.replace(/^www\./, ''); } catch (e) { /* как есть */ }
        const img = context === 'photo' ? 'images/photo-camera.png'
            : context === 'video' ? 'images/video-camera.png' : 'images/url-file.png';
        return { href: u, label: host, img: img };
    }

    // Ссылка с иконкой, как в календаре и на start-details: <img class="sheet-icon"> + подпись.
    function chip(d, cls) {
        const icon = d.img ? `<img src="${esc(d.img)}" alt="" class="sheet-icon" onerror="this.remove()"> ` : (d.emoji ? d.emoji + ' ' : '');
        const title = d.title ? ` title="${esc(d.title)}"` : '';
        const klass = cls ? ` class="${cls}"` : '';
        return `<a${klass} href="${esc(d.href)}" target="_blank" rel="noopener"${title}>${icon}${esc(d.label)}</a>`;
    }

    // Список ссылок -> пилюли; одинаковые подписи нумеруются («YouTube 2»).
    // Список ссылок через запятую; одинаковые подписи нумеруются («YouTube 2»).
    function chips(urls, context) {
        const seen = {};
        return asList(urls).map(url => {
            const d = describeLink(url, context);
            seen[d.label] = (seen[d.label] ?? 0) + 1;
            if (seen[d.label] > 1) d.label += ' ' + seen[d.label];
            return chip(d);
        }).join(', ');
    }

    // Строка «Подпись: значение» - как startDetailsLine() на start-details.
    // Значение со списком (<ol>/<ul>) не может лежать в <p> - тогда <div>.
    function row(label, value) {
        if (!value || !String(value).trim()) return '';
        const head = label ? `<b>${label}:</b> ` : '';
        return /<(ol|ul|div)\b/i.test(value) ? `<div class="mb-3">${head}${value}</div>` : `<p>${head}${value}</p>`;
    }

    function section(id, title, body) {
        if (!body) return '';
        return `<section id="${id}" class="clearfix"><h2>${title}</h2>${body}</section>`;
    }

    // --- поиск события и его календаря -------------------------------------------

    function findEventEntry(id) {
        const found = [];
        for (const [source, list] of Object.entries(eventSources)) {
            for (const e of list) {
                if (e.id === id) found.push({ evt: e, source: source });
            }
        }
        if (found.length > 1) {
            console.warn('event.html: id ' + id + ' встречается в календарях несколько раз: ' +
                found.map(f => f.source).join(', ') + '. Показана первая запись.');
        }
        return found[0];
    }

    function calendarFor(source) {
        return EVENT_CALENDARS.find(c => c.sources.includes(source)) ?? EVENT_CALENDARS[0];
    }

    // События календаря без дублей id (первое вхождение - как findEvent()).
    function calendarEvents(calendar) {
        const ids = new Set();
        const result = [];
        for (const source of calendar.sources) {
            for (const e of (eventSources[source] ?? [])) {
                if (e.id && ids.has(e.id)) continue;
                if (e.id) ids.add(e.id);
                result.push(e);
            }
        }
        return result;
    }

    function uniqueById(events) {
        const ids = new Set();
        return events.filter(e => {
            if (!e.id || ids.has(e.id)) return false;
            ids.add(e.id);
            return true;
        });
    }

    function compareEvents(a, b) {
        const c = String(a.date).localeCompare(String(b.date));
        return c !== 0 ? c : String(a.id).localeCompare(String(b.id));
    }

    function calendarLink(calendar, source, evt) {
        let href = calendar.page;
        if (calendar.years) {
            const year = parseDay(evt.date).getFullYear();
            // До 2004 года (eventsEarly и ранние чемпионаты IOF) — страница «Ранние».
            const y = source === 'eventsEarly' || year < 2004 ? 'EARLY' : String(year);
            href += '?startYear=' + y;
        }
        return href;
    }

    // Страница карты O-Maps для карты m (или страница календаря по умолчанию).
    function mapPageFor(m, fallback) {
        if (m) {
            const st = Array.isArray(m.start) ? m.start[0] : m.start;
            const page = m.page ?? (st && starts[st]?.page);
            if (page) return page + '.html';
        }
        return fallback;
    }

    // --- вид спорта ---------------------------------------------------------------

    function eventKind(evt) {
        const type = getEventType(evt);
        if (type.includes('WATER')) return 'water';
        if (isEventLikeRogaine(evt) || type.includes('TOURISM')) return 'rogaine';
        if (type.includes('SKI') || type.includes('SK_RACE')) return 'ski';
        if (type.includes('ORIENT') || type.includes('INDOOR')) return 'orient';
        return 'other';
    }

    // --- статус по датам ------------------------------------------------------------

    function timeStatus(evt) {
        const start = parseDay(evt.date);
        const end = parseDay(evt.endDate ?? evt.date);
        const now = today();
        if (evt.cancelled) return { text: 'Отменено', cls: 'bg-danger', past: end < now };
        if (now >= start && now <= end) {
            return { text: start.getTime() === end.getTime() ? 'Сегодня' : 'Идёт сейчас', cls: 'bg-danger', past: false, now: true };
        }
        if (start > now) {
            const days = Math.round((start - now) / DAY_MS);
            const text = days === 1 ? 'Завтра' : 'Через ' + days + ' ' + plural(days, 'день', 'дня', 'дней');
            return { text: text, cls: 'bg-success', past: false };
        }
        const years = Math.floor((now - end) / (365.25 * DAY_MS));
        const text = years >= 1 ? 'Состоялось ' + years + ' ' + plural(years, 'год', 'года', 'лет') + ' назад' : 'Состоялось';
        return { text: text, cls: 'bg-secondary', past: true };
    }

    // --- «мои старты» (тот же ключ localStorage, что у календаря) ----------------------

    function readMyEvents() {
        try {
            const s = localStorage.getItem('myEvents');
            return s ? s.split(',').filter(Boolean) : [];
        } catch (e) {
            return [];
        }
    }

    function toggleMyEvent(id) {
        const list = readMyEvents();
        const i = list.indexOf(id);
        if (i >= 0) list.splice(i, 1); else list.push(id);
        try { localStorage.setItem('myEvents', list.join(',')); } catch (e) { /* приватный режим */ }
        return i < 0;
    }

    // --- экспорт в календарь (.ics) ------------------------------------------------------

    function icsText(value) {
        return String(value).replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n');
    }

    // Строки длиннее 75 байт переносятся (RFC 5545), не разрывая символы UTF-8.
    function icsFold(line) {
        const enc = new TextEncoder();
        let out = '', cur = '', limit = 75;
        for (const ch of line) {
            if (enc.encode(cur + ch).length > limit) {
                out += cur + '\r\n ';
                cur = ch;
                limit = 74;
            } else {
                cur += ch;
            }
        }
        return out + cur;
    }

    function icsDate(d) {
        return d.getFullYear() + String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0');
    }

    function buildIcs(evt, pageUrl) {
        const start = parseDay(evt.date);
        const end = new Date(parseDay(evt.endDate ?? evt.date).getTime() + DAY_MS); // DTEND не включается
        const stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+/, '');
        const description = [stripTags(evt.fmt ?? ''), stripTags(evt.info ?? ''), pageUrl].filter(Boolean).join('\n');
        const lines = [
            'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//O-Maps//event//RU', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH',
            'BEGIN:VEVENT',
            'UID:' + evt.id + '@o-maps.spb.ru',
            'DTSTAMP:' + stamp,
            'DTSTART;VALUE=DATE:' + icsDate(start),
            'DTEND;VALUE=DATE:' + icsDate(end),
            'SUMMARY:' + icsText(stripTags(evt.name)),
        ];
        if (evt.place) lines.push('LOCATION:' + icsText(stripTags(evt.place)));
        if (evt.coord) lines.push('GEO:' + evt.coord[0] + ';' + evt.coord[1]);
        lines.push('URL:' + pageUrl, 'DESCRIPTION:' + icsText(description));
        if (evt.cancelled) lines.push('STATUS:CANCELLED');
        lines.push('END:VEVENT', 'END:VCALENDAR');
        return lines.map(icsFold).join('\r\n') + '\r\n';
    }

    function downloadIcs(evt) {
        const blob = new Blob([buildIcs(evt, absUrl(eventPageUrl(evt)))], { type: 'text/calendar;charset=utf-8' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = evt.id + '.ics';
        document.body.appendChild(a);
        a.click();
        setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    }

    // --- шапка ------------------------------------------------------------------------------

    function buildPlaceLinks(evt, calendar, defaultMapPage) {
        const links = [];
        for (const name of asList(evt.map)) {
            const m = getMapForName(name);
            const page = mapPageFor(m, defaultMapPage);
            links.push(`<a href="${page}?calendar&map=${encodeURIComponent(name)}" title="Карта на O-Maps">🗺️</a>`);
        }
        if (evt.coord) {
            links.push(`<a href="${defaultMapPage}?x=${evt.coord[0]}&y=${evt.coord[1]}&calendar" title="Место на O-Maps">🌐</a>`);
        }
        if (evt.track) {
            links.push(`<a href="tracks.html?track=${encodeURIComponent(evt.track)}&calendar" title="Трек на O-Maps">🚸</a>`);
        }
        return links.join(' ');
    }

    function seriesCodes(evt) {
        return asList(evt.start).filter(code => starts[code] && !NOT_SERIES.includes(code));
    }

    function seriesLabel(code) {
        const s = starts[code];
        return stripTags(s.name ?? s.short ?? code);
    }

    // Бейдж Bootstrap (bootstrap.min.css уже подключён на всех страницах).
    function badge(text, cls) {
        return ` <span class="badge ${cls}">${text}</span>`;
    }

    function dateLine(evt) {
        const d = parseDay(evt.date);
        let week = WEEK_DAYS[d.getDay()];
        if (evt.endDate && evt.endDate !== evt.date) week += ' – ' + WEEK_DAYS[parseDay(evt.endDate).getDay()];
        return fullDateText(evt) + ', ' + week;
    }

    // «до 2 октября 2026, 12:00 (МСК)» + бейдж: сколько осталось / закрыт.
    function endRegHtml(st) {
        const date = st.day + ' ' + MONTHS_GEN[st.month] + ' ' + st.year;
        const when = st.time ? date + ', ' + st.time + ' (МСК)' : date + ' включительно';
        if (st.level === 'closed') {
            return 'закончился ' + when + badge('Заявка закрыта', 'bg-secondary');
        }
        const cls = st.level === 'urgent' ? 'bg-danger end-reg-urgent'
            : st.level === 'soon' ? 'bg-warning text-dark' : 'bg-light text-dark border';
        const icon = st.level === 'urgent' ? '🔥 ' : st.level === 'soon' ? '⏳ ' : '';
        return 'до ' + when + badge(icon + endRegLeftText(st.left), cls + ' end-reg');
    }

    // Шапка - как на map-info: логотип слева (col-md-3), сведения справа.
    function buildHero(evt, ctx) {
        const logos = logoList(evt);

        let head = `🗓️ ${dateLine(evt)}` + badge(ctx.status.text, ctx.status.cls);
        if (isMajor(evt)) head += badge('Важный старт', 'bg-warning text-dark');
        if (evt.price === -1) head += badge('Закрытое мероприятие', 'bg-light text-dark border');
        if (evt.price === 1) head += badge('💰 Платное участие', 'bg-light text-dark border');
        if (evt.russialoppet) head += badge('Russialoppet', 'bg-light text-dark border');
        let html = `<h3>${head}</h3>`;

        if (evt.place || evt.map || evt.coord || evt.track) {
            html += row('Место', (evt.place ? esc(evt.place) : 'не указано') + ' ' + buildPlaceLinks(evt, ctx.calendar, ctx.mapPage));
        }
        let sport = buildEventType(evt, false);
        // многострочный формат (лыжи: по строке на дистанцию) - здесь первая
        // строка, целиком - в «Подробностях»
        if (evt.fmt) {
            const fmt = String(evt.fmt).split(/<br\s*\/?>/i)[0];
            sport = sport ? sport + ' (' + fmt + ')' : fmt;
        }
        html += row('Вид', sport);
        html += row('Серия', seriesCodes(evt).map(code =>
            `<a href="start-details.html?start=${encodeURIComponent(code)}">${esc(seriesLabel(code))}</a>`).join(', '));
        if (ctx.parent) {
            html += row('Часть события', `<a href="${eventPageUrl(ctx.parent)}" target="_self">${ctx.parent.name}</a>`);
        }

        // Окончание приёма заявок (поле endReg): срок и бейдж «осталось …»,
        // цвет бейджа - как в календаре (buildEventEndReg в utils.js).
        const endReg = evt.reg && !ctx.status.past ? endRegState(evt) : null;
        if (endReg) html += row('Приём заявок', endRegHtml(endReg));

        // Действия - кнопки Bootstrap. Регистрация - главная, пока событие не
        // прошло и приём заявок не закончился.
        const actions = [];
        const btn = (d, cls) => chip(d, 'btn btn-sm ' + cls + ' me-2 mb-2');
        if (evt.reg && !ctx.status.past && !evt.cancelled) {
            const regCls = endReg?.level === 'closed' ? 'btn-outline-secondary' : 'btn-success';
            asList(evt.reg).forEach(r => {
                const d = describeLink(r, 'reg');
                d.title = d.label;
                d.label = asList(evt.reg).length > 1 ? 'Регистрация: ' + d.label : 'Регистрация';
                actions.push(btn(d, regCls));
            });
        }
        const site = asList(evt.link);
        site.forEach((l, i) => actions.push(btn({ href: l, label: site.length > 1 ? 'Сайт ' + (i + 1) : 'Сайт соревнования', img: 'images/external-link.png' }, 'btn-outline-secondary')));
        const seriesSite = seriesCodes(evt).map(code => starts[code].link).filter(Boolean)[0];
        if (!site.length && seriesSite) {
            actions.push(btn({ href: seriesSite, label: 'Сайт серии', img: 'images/external-link.png' }, 'btn-outline-secondary'));
        } else if (!site.length && evt.o_site) {
            actions.push(btn({ href: O_SITE_ADDRESS_PREFIX + evt.o_site, label: 'Страница на O-Site', img: 'images/o-site.gif' }, 'btn-outline-secondary'));
        }
        const button = (id, text, extra) => `<button type="button" class="btn btn-sm btn-outline-secondary me-2 mb-2" id="${id}"${extra ?? ''}>${text}</button>`;
        if (!ctx.status.past && !evt.cancelled) actions.push(button('ev_ics', '📅 В свой календарь'));
        const isMy = readMyEvents().includes(evt.id);
        actions.push(button('ev_my', isMy ? '★ Мой старт' : '☆ Мой старт',
            ` aria-pressed="${isMy}" title="Отметка видна в календаре (фильтр «только мои»)"`));
        actions.push(button('ev_share', '<img src="images/share.png" alt="" class="sheet-icon"> Поделиться'));
        html += `<div class="mt-3">${actions.join('')}</div>`;

        const hero = document.getElementById('event_hero');
        hero.innerHTML = logos.length > 0
            ? `<div class="row"><div class="col-md-3 mb-3"><img src="./logo/${esc(logos[0])}" alt="Логотип" class="mw-100"></div><div class="col-md-9">${html}</div></div>`
            : html;
    }

    function bindHeroActions(evt) {
        document.getElementById('ev_ics')?.addEventListener('click', () => downloadIcs(evt));

        const my = document.getElementById('ev_my');
        my?.addEventListener('click', () => {
            const on = toggleMyEvent(evt.id);
            my.setAttribute('aria-pressed', String(on));
            my.textContent = on ? '★ Мой старт' : '☆ Мой старт';
        });

        const share = document.getElementById('ev_share');
        share?.addEventListener('click', async () => {
            const url = absUrl(eventPageUrl(evt));
            const title = stripTags(evt.name) + ', ' + fullDateText(evt);
            if (navigator.share && isMobile) {
                try { await navigator.share({ title: title, url: url }); } catch (e) { /* отменено */ }
                return;
            }
            try {
                await navigator.clipboard.writeText(url);
                const html = share.innerHTML;
                share.textContent = '✓ Ссылка скопирована';
                setTimeout(() => { share.innerHTML = html; }, 2000);
            } catch (e) {
                prompt('Ссылка на событие:', url);
            }
        });
    }

    // --- секции ---------------------------------------------------------------------

    function buildResultsSection(evt) {
        let html = row('Результаты', chips(evt.res, 'res'));
        if (evt.reskeep) {
            const urls = asList(evt.reskeep).map(r => 'https://reskeep.ru/event/get?id=' + r);
            html += row('Анализ сплитов', urls.map((u, i) =>
                chip({ href: u, label: 'Reskeep' + (urls.length > 1 ? ' ' + (i + 1) : ''), img: 'images/r-k.gif' })).join(', '));
        }
        const gps = getGPS(evt);
        if (gps) {
            const items = isObject(gps)
                ? Object.entries(gps).map(([k, v]) => chip({ href: v, label: k, img: 'images/o-gps.gif' }))
                : [chip({ href: gps, label: 'смотреть трансляцию', img: 'images/o-gps.gif' })];
            html += row('GPS-трансляция', items.join(', '));
        }
        html += row('Фото', chips(evt.photo, 'photo'));
        html += row('Видео', chips(evt.video, 'video'));
        html += row('Карты с дистанциями', chips(evt.publish, 'photo'));
        if (HAS_ME_PARAM && (evt.me || evt.strava)) {
            const strava = asList(evt.strava).map(s => 'https://www.strava.com/activities/' + s);
            html += row('Моё участие', (evt.me ? esc(evt.me) + ' ' : '') + chips(strava));
        }
        return section('ev_results', 'Результаты и материалы', html);
    }

    // Организаторы: у владельца выводится title, а если его нет - name.
    // Владелец - поле owner события, иначе владелец его старта (getOwner).
    function buildOwnersHtml(evt) {
        const codes = asList(getOwner(evt));
        const known = codes.filter(code => owners[code]);
        const unknown = codes.filter(code => !owners[code]);
        if (unknown.length) {
            console.warn('event.html: у события ' + evt.id + ' неизвестные владельцы: ' + unknown.join(', '));
        }
        const item = code => {
            const o = owners[code];
            const logo = o.logo ? `<img src="./logo/${esc(o.logo)}" alt="" class="sheet-icon"> ` : '';
            return logo + (o.title ?? o.name);
        };
        if (known.length === 0) return '';
        if (known.length === 1) return item(known[0]);
        return '<ol>' + known.map(code => `<li>${item(code)}</li>`).join('') + '</ol>';
    }

    function buildDetailsSection(evt) {
        let html = evt.info ? `<p>${evt.info}</p>` : '';
        if (evt.bulletin) {
            html += row('Информационный бюллетень', asList(evt.bulletin).map(b =>
                chip({ href: b, label: describeLink(b).label, img: 'images/info.png' })).join(', '));
        }
        if (evt.reg) html += row('Регистрация', chips(evt.reg, 'reg'));
        html += row('Организаторы', buildOwnersHtml(evt));
        html += row('Планирование дистанций', buildPlanners(evt, null, true));
        if (evt.o_site) {
            html += row('Страница на O-Site', chip({ href: O_SITE_ADDRESS_PREFIX + evt.o_site, label: evt.o_site, img: 'images/o-site.gif' }));
        }
        if (evt.fmt && String(evt.fmt).includes('<br')) html += row('Дистанции', '<br>' + evt.fmt); // лыжные: по строке на дистанцию
        return section('ev_details', 'Подробности', html);
    }

    // Программа многодневки: «родитель» и его этапы (поле parent), текущее - жирным.
    function buildProgramSection(evt, ctx) {
        const root = ctx.parent ?? evt;
        const stages = ctx.all.filter(e => e.parent && e.parent === root.id).sort(compareEvents);
        if (stages.length === 0) return '';
        const item = e => {
            const text = `${shortDate(e, false)} — ` + eventLogoIcon(e) + (e === evt ? `<b>${e.name}</b>` : `<a href="${eventPageUrl(e)}" target="_self">${e.name}</a>`) +
                (e.place && e.place !== root.place ? ` (${esc(e.place)})` : '');
            return text;
        };
        const html = `<ul><li>${item(root)}<ul>` + stages.map(e => `<li>${item(e)}</li>`).join('') + '</ul></li></ul>';
        return section('ev_program', 'Программа', html);
    }

    // Карты: одна карта - превью слева, сведения справа (сетка Bootstrap; на
    // телефоне превью над текстом во всю ширину); несколько карт - превью в
    // ряд под списком.
    function buildMapsSection(evt, ctx) {
        const names = asList(evt.map);
        if (names.length === 0) return '';
        const previews = [];
        const lines = names.map(name => {
            const m = getMapForName(name);
            if (!m) {
                console.warn('event.html: у события ' + evt.id + ' указана неизвестная карта ' + name);
                return row('', esc(name));
            }
            const page = mapPageFor(m, ctx.mapPage);
            const infoHref = 'map-info.html?map=' + encodeURIComponent(name);
            if (!isMapHidden(m) && m.url) previews.push({ href: infoHref, m: m });
            let html = row('', `<a href="${infoHref}" target="_self">${stripTags(mapTitle(m, false, false))}</a> ` +
                `<a href="${page}?calendar&map=${encodeURIComponent(name)}" title="Карта на O-Maps">🗺️</a>` +
                (m.poster ? ' ' + chip({ href: m.poster, label: 'плакат', img: 'images/' + downloadIconExt(m.poster) + '-file.png' }) : ''));
            const authorsHtml = buildAuthors(m);
            if (authorsHtml) html += row('Авторы', authorsHtml.replace(/<br\s*\/?>$/i, ''));
            if (isMapHidden(m)) html += row('', 'Просмотр карты не разрешён правообладателем.');
            return html;
        });
        const img = (p, cls, extra) => `<a href="${p.href}" target="_self"><img src="${esc(p.m.url)}" loading="lazy" class="${cls}" alt="${esc(p.m.name ?? 'Карта')}"${extra ?? ''}></a>`;
        let html;
        if (previews.length === 1) {
            html = `<div class="row"><div class="col-sm-5 col-lg-3 mb-3">${img(previews[0], 'help-figure mw-100')}</div>` +
                `<div class="col-sm-7 col-lg-9">${lines.join('')}</div></div>`;
        } else {
            html = lines.join('') + (previews.length
                ? '<div class="d-flex flex-wrap gap-3 clearfix">' + previews.map(p => img(p, 'help-figure', ' height="160"')).join('') + '</div>'
                : '');
        }
        return section('ev_maps', names.length > 1 ? 'Карты' : 'Карта', html);
    }

    // Место: мини-карта с картами события (повёрнутые подложки, как на
    // основной карте) и отметкой. Отметка - в coord, иначе в центре карты,
    // как у маркеров календаря на основной карте (createEventMarker в main.js).
    function eventPoint(evt) {
        if (evt.coord) return evt.coord;
        for (const name of asList(evt.map)) {
            const m = getMapForName(name);
            if (m?.bounds?.length >= 3) {
                return [(m.bounds[0][0] + m.bounds[2][0]) / 2, (m.bounds[0][1] + m.bounds[1][1]) / 2];
            }
        }
        return null;
    }

    function buildPlaceSection(evt, ctx) {
        ctx.point = eventPoint(evt);
        if (!ctx.point) return '';
        const links = [];
        if (evt.coord) {
            links.push(chip({ href: `${ctx.mapPage}?x=${evt.coord[0]}&y=${evt.coord[1]}&calendar`, label: 'Открыть на карте O-Maps', img: 'images/map_24.png' }, 'btn btn-sm btn-outline-secondary me-2 mb-2'));
        } else {
            const name = asList(evt.map)[0];
            const page = mapPageFor(getMapForName(name), ctx.mapPage);
            links.push(chip({ href: `${page}?calendar&map=${encodeURIComponent(name)}`, label: 'Открыть на карте O-Maps', img: 'images/map_24.png' }, 'btn btn-sm btn-outline-secondary me-2 mb-2'));
        }
        // Маршрут - до coord события, а без него до центра карты (eventPoint),
        // той же точки, где стоит маркер события на основной карте. И для
        // прошедших событий: место пригодится и для тренировки.
        const p = ctx.point;
        links.push(chip({
            href: `https://yandex.ru/maps/?rtext=~${+p[0].toFixed(6)},${+p[1].toFixed(6)}&rtt=auto`,
            label: evt.coord ? 'Маршрут в Яндексе до центра' : 'Маршрут в Яндексе до карты', emoji: '🚗',
            title: evt.coord ? 'Маршрут до места события' : 'Маршрут до центра карты события'
        }, 'btn btn-sm btn-outline-secondary me-2 mb-2'));
        const coords = evt.coord ? row('Координаты', `${evt.coord[0]}, ${evt.coord[1]}`) : '';
        return section('ev_place', 'Место', `<div id="event_map" role="img" aria-label="Карта места события"></div>${coords}<div>${links.join('')}</div>`);
    }

    // --- подложка мини-карты ------------------------------------------------------

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

    // API Яндекс Карт тяжёлый, поэтому грузится только когда нужен: если на
    // основной карте выбран Яндекс (схема или спутник). Не загрузился - OSM.
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
            console.warn('event.html: подложка Яндекса недоступна (' + e.message + '), показан OSM');
            L.tileLayer(OSM_TILES, {
                maxZoom: 17,
                attribution: '© <a href="https://github.com/efradkin/o-maps">O-Maps</a> | ' +
                    '<a href="https://t.me/o_maps">Спорт. карты</a> на ' +
                    '<a href="https://www.openstreetmap.org/copyright">OSM</a>'
            }).addTo(lmap);
        }
    }

    function initPlaceMap(evt, ctx) {
        const el = document.getElementById('event_map');
        if (!el || typeof L === 'undefined') return;
        // Подложка и строка атрибуции - те же, что на основной карте: фон,
        // выбранный там (background из map-build.js: параметр адреса или
        // localStorage, по умолчанию Яндекс Схема), и ATTRIBUTION без префикса
        // «Leaflet», как в main.js.
        const lmap = L.map(el, { scrollWheelZoom: false, zoomControl: true, attributionControl: false });
        L.control.attribution().setPrefix('').addTo(lmap);
        addBaseLayer(lmap);

        let bounds = null;
        for (const name of asList(evt.map)) {
            const m = getMapForName(name);
            if (!m || !m.bounds || m.bounds.length < 3) continue;
            const ll = m.bounds.slice(0, 3).map(b => L.latLng(b));
            L.imageOverlay.rotated(mapImageUrl(m), ll[0], ll[1], ll[2], { opacity: 0.85, alt: m.name }).addTo(lmap);
            const b = L.latLngBounds([ll[0], ll[1], ll[2],
                L.latLng(ll[1].lat + ll[2].lat - ll[0].lat, ll[1].lng + ll[2].lng - ll[0].lng)]);
            bounds = bounds ? bounds.extend(b) : b;
        }

        const s = ctx.status;
        let icon = 'images/event_marker' + (s.past ? '_old' : (s.now || timeStatusSoon(evt) ? '_now' : ''));
        const kindIcon = { water: '_water', rogaine: '_rogaine', ski: '_ski' }[ctx.kind] ??
            (getEventType(evt).includes('VELO') ? '_velo' : '');
        icon += kindIcon + '.png';
        L.marker(ctx.point, {
            icon: L.icon({ iconUrl: icon, iconSize: [34, 48], iconAnchor: [17, 48] }),
            title: stripTags(evt.place ?? evt.name),
            keyboard: false
        }).addTo(lmap);

        if (bounds) {
            bounds.extend(L.latLng(ctx.point));
            lmap.fitBounds(bounds, { padding: [24, 24], maxZoom: 15 });
        } else {
            lmap.setView(ctx.point, 13);
        }
    }

    // «Скоро» для маркера - как isActual() на основной карте (неделя).
    function timeStatusSoon(evt) {
        const start = parseDay(evt.date);
        const d = (start - today()) / DAY_MS;
        return d >= 0 && d < 7;
    }

    // Документы - иконками скачивания, как на start-details (buildDownloadLinks).
    function buildDocsSection(evt) {
        let html = evt.docs ? row('Документы события', buildDownloadLinks(null, evt.docs)) : '';
        const related = relatedHistoryDocs(evt);
        if (related.length) {
            html += '<ul>' + related.map(d =>
                `<li>${d.name ?? 'Документ'}${d.info ? ' — ' + d.info : ''} ${buildDownloadLinks(d.link, d.links)}</li>`
            ).join('') + '</ul>';
        }
        return section('ev_docs', 'Документы', html);
    }

    // Исторические документы (history-docs.js): с картой этого события или
    // со стартом этого события и датой в днях события.
    function relatedHistoryDocs(evt) {
        if (typeof historyDocs === 'undefined') return [];
        const maps = asList(evt.map);
        const codes = asList(evt.start);
        const from = String(evt.date).substring(0, 10);
        const to = String(evt.endDate ?? evt.date).substring(0, 10);
        return historyDocs.filter(d => {
            if (asList(d.map).some(m => maps.includes(m))) return true;
            if (!codes.some(c => checkStartMap(c, d))) return false;
            return asList(d.date).some(dt => {
                const day = String(dt).substring(0, 10);
                return day.length === 10 && day >= from && day <= to;
            });
        });
    }

    // Серия по годам: «корневые» события старта (без parent), окно вокруг текущего.
    const SERIES_WINDOW = 24;

    function buildSeriesBlock(evt, ctx) {
        let html = '';
        const current = ctx.parent ?? evt;
        for (const code of seriesCodes(evt)) {
            const all = uniqueById(oEvents.filter(e => !e.parent && checkStartMap(code, e))).sort(compareEvents);
            if (all.length < 2) continue;
            const idx = all.findIndex(e => e.id === current.id);
            let list = all;
            if (all.length > SERIES_WINDOW) {
                const from = Math.max(0, Math.min((idx < 0 ? all.length : idx) - SERIES_WINDOW / 2, all.length - SERIES_WINDOW));
                list = all.slice(from, from + SERIES_WINDOW);
            }
            const perYear = {};
            for (const e of all) {
                const y = parseDay(e.date).getFullYear();
                perYear[y] = (perYear[y] ?? 0) + 1;
            }
            const items = list.map(e => {
                const y = parseDay(e.date).getFullYear();
                const label = perYear[y] > 1 ? shortDate(e, true) : String(y);
                const title = esc(stripTags(e.name) + ', ' + fullDateText(e));
                return e.id === current.id
                    ? `<b title="${title}">${label}</b>`
                    : `<a href="${eventPageUrl(e)}" target="_self" title="${title}">${label}</a>`;
            });
            html += row(esc(seriesLabel(code)), items.join(', ') +
                `. Всего событий: ${all.length}, <a href="start-details.html?start=${encodeURIComponent(code)}">страница серии</a>.`);
        }
        return html;
    }

    // В те же и соседние дни: события того же календаря, пересекающиеся с днями
    // события, расширенными на SAME_DAYS_MARGIN дней в обе стороны (чтобы
    // попадали старты того же уикенда).
    const SAME_DAYS_LIMIT = 10;
    const SAME_DAYS_MARGIN = 1;

    // 'YYYY-MM-DD' со сдвигом на days дней (локальная дата, как parseDay).
    function shiftDay(s, days) {
        const d = parseDay(s);
        d.setDate(d.getDate() + days);
        return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    }

    function buildSameDaysBlock(evt, ctx) {
        const from = shiftDay(evt.date, -SAME_DAYS_MARGIN);
        const to = shiftDay(evt.endDate ?? evt.date, SAME_DAYS_MARGIN);
        const family = new Set([evt.id, ctx.parent?.id, ...ctx.all.filter(e => e.parent && (e.parent === evt.id || e.parent === ctx.parent?.id)).map(e => e.id)]);
        const list = ctx.calendarEvents
            .filter(e => !family.has(e.id) && String(e.date).substring(0, 10) <= to && String(e.endDate ?? e.date).substring(0, 10) >= from)
            .sort(compareEvents);
        if (!list.length) return '';
        const shown = list.slice(0, SAME_DAYS_LIMIT);
        let items = shown.map(e =>
            `<li>${shortDate(e, false)} — ${eventLogoIcon(e)}<a href="${eventPageUrl(e)}" target="_self">${e.name}</a>` +
            (e.place ? ` (${esc(e.place)})` : '') + '</li>').join('');
        if (list.length > shown.length) {
            items += `<li>и ещё ${list.length - shown.length} — <a href="${ctx.calendarHref}">в календаре</a></li>`;
        }
        return row('В те же и соседние дни', `<ul>${items}</ul>`);
    }

    function buildAroundSection(evt, ctx) {
        const html = buildSeriesBlock(evt, ctx) + buildSameDaysBlock(evt, ctx);
        return section('ev_around', 'Рядом в календаре', html);
    }

    function buildNav(evt, ctx) {
        const list = ctx.calendarEvents.slice().sort(compareEvents);
        const i = list.indexOf(evt);
        if (i < 0) return '';
        const prev = list[i - 1], next = list[i + 1];
        const link = (e, prefix, suffix, cls) => e
            ? `<div class="${cls}"><small>${prefix}${shortDate(e, true)}${suffix}</small><br>${eventLogoIcon(e)}<a href="${eventPageUrl(e)}" target="_self">${e.name}</a></div>`
            : '<div></div>';
        return `<section aria-label="Соседние события календаря"><div class="d-flex justify-content-between gap-3">` +
            link(prev, '← ', '', '') + link(next, '', ' →', 'text-end') + '</div></section>';
    }

    // --- SEO: заголовок, описание, структурированные данные -------------------------------

    function applyMeta(evt, ctx) {
        const name = stripTags(evt.name);
        const title = name + ', ' + fullDateText(evt) + ' — O-Maps';
        document.title = title;
        const parts = [fullDateText(evt)];
        if (evt.place) parts.push(stripTags(evt.place));
        const type = buildEventType(evt, false);
        if (type) parts.push(type + (evt.fmt ? ' (' + stripTags(String(evt.fmt).split(/<br\s*\/?>/i)[0]) + ')' : ''));
        let description = name + '. ' + parts.join('. ') + '.';
        if (evt.info) description += ' ' + stripTags(evt.info);
        if (description.length > 160) description = description.substring(0, 157).replace(/\s+\S*$/, '') + '…';
        const set = (sel, value) => document.head.querySelector(sel)?.setAttribute('content', value);
        set('meta[name="description"]', description);
        set('meta[property="og:title"]', title);
        set('meta[property="og:description"]', description);
        const logos = logoList(evt);
        if (logos.length) set('meta[property="og:image"]', absUrl('logo/' + logos[0]));

        const ld = {
            '@context': 'https://schema.org',
            '@type': 'SportsEvent',
            name: name,
            startDate: evt.date,
            endDate: evt.endDate ?? evt.date,
            eventStatus: evt.cancelled ? 'https://schema.org/EventCancelled' : 'https://schema.org/EventScheduled',
            url: absUrl(eventPageUrl(evt)),
        };
        if (evt.place || ctx.point) {
            ld.location = { '@type': 'Place', name: stripTags(evt.place ?? name) };
            if (evt.coord) ld.location.geo = { '@type': 'GeoCoordinates', latitude: evt.coord[0], longitude: evt.coord[1] };
        }
        if (type) ld.sport = type;
        if (logos.length) ld.image = absUrl('logo/' + logos[0]);
        if (evt.info) ld.description = stripTags(evt.info);
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(ld);
        document.head.appendChild(script);
    }

    // --- событие не найдено -----------------------------------------------------------

    function renderNotFound() {
        const text = EVENT_ID
            ? `В календарях O-Maps нет события с кодом <b>${esc(EVENT_ID)}</b>. Возможно, ссылка устарела или в ней опечатка.`
            : 'В адресе не указан код события: страница открывается как <code>event.html?id=КОД_СОБЫТИЯ</code>.';
        document.getElementById('event_title').textContent = 'Событие не найдено';
        document.title = 'Событие не найдено — O-Maps';
        const hero = document.getElementById('event_hero');
        hero.innerHTML = `<p>${text}</p><p>Найти старт можно в календарях: ` +
            EVENT_CALENDARS.map(c => `<a href="${c.page}">${c.title}</a>`).join(', ') + '.</p>';
        const meta = document.createElement('meta');
        meta.name = 'robots';
        meta.content = 'noindex';
        document.head.appendChild(meta);
    }

    // --- сборка страницы ---------------------------------------------------------------

    function render() {
        const entry = EVENT_ID ? findEventEntry(EVENT_ID) : null;
        if (!entry) {
            renderNotFound();
            return;
        }
        const evt = entry.evt;
        const calendar = calendarFor(entry.source);
        const all = uniqueById(oEvents);
        const ctx = {
            calendar: calendar,
            mapPage: SOURCE_MAP_PAGE[entry.source] ?? calendar.mapPage,
            calendarHref: calendarLink(calendar, entry.source, evt),
            calendarEvents: calendarEvents(calendar),
            all: all,
            parent: evt.parent ? all.find(e => e.id === evt.parent) : null,
            status: timeStatus(evt),
            kind: eventKind(evt),
        };
        if (evt.parent && !ctx.parent) {
            console.warn('event.html: у события ' + evt.id + ' parent ' + evt.parent + ' не найден ни в одном календаре');
        }

        document.getElementById('event_title').innerHTML = evt.name + (evt.cancelled ? ' (отменено)' : '');

        const calLink = document.getElementById('event_calendar_link');
        calLink.href = ctx.calendarHref;
        calLink.title = calendar.title;
        const mapLinkEl = document.getElementById('event_map_link');
        const firstMap = asList(evt.map)[0];
        if (firstMap) {
            mapLinkEl.href = mapPageFor(getMapForName(firstMap), ctx.mapPage) + '?calendar&map=' + encodeURIComponent(firstMap);
        } else if (evt.coord) {
            mapLinkEl.href = `${ctx.mapPage}?x=${evt.coord[0]}&y=${evt.coord[1]}&calendar`;
        } else if (evt.track) {
            mapLinkEl.href = 'tracks.html?track=' + encodeURIComponent(evt.track) + '&calendar';
        } else {
            mapLinkEl.href = ctx.mapPage + '?calendar';
        }

        buildHero(evt, ctx);

        // Для прошедших событий важнее результаты, для будущих - подробности.
        const results = buildResultsSection(evt);
        const details = buildDetailsSection(evt);
        const html = (ctx.status.past ? results + details : details + results) +
            buildProgramSection(evt, ctx) +
            buildMapsSection(evt, ctx) +
            buildPlaceSection(evt, ctx) +
            buildDocsSection(evt) +
            buildAroundSection(evt, ctx) +
            buildNav(evt, ctx) +
            `<p class="text-end small text-muted">Код события: ${esc(evt.id)}</p>`;
        document.getElementById('event_sections').innerHTML = html;

        bindHeroActions(evt);
        initPlaceMap(evt, ctx);
        applyMeta(evt, ctx);
    }

    render();
})();
