/*
 * seo-meta.js — canonical, title и description для адресов с параметрами.
 *
 * Зачем: Google видит spb.html?map=xxx, sheet-spb.html?author=SHRNN и
 * moscow.html?x=..&y=..&zoom=.. как копии одной страницы (в статическом HTML
 * они и правда одинаковые) и выбрасывает их из индекса с формулировкой
 * "Страница является копией. Канонический вариант не выбран пользователем".
 *
 * Своё содержимое есть только у двух видов адресов:
 *   map-info.html?map=X и map-info-kkm.html?map=X — страница одной карты;
 *   start.html?start=X — страница многодневки или серии стартов (starts.js);
 *   sheet-all.html?author=X — сводная таблица карт одного автора.
 * Всё остальное (фильтрация, центрирование общей карты, режимы показа) —
 * варианты одной и той же страницы.
 *
 * Что делает:
 *   1) canonical — сразу, без ожидания данных:
 *      - значимый параметр этой страницы есть -> canonical на адрес с ним
 *        (технические и фильтрующие параметры отбрасываются);
 *      - значимого нет -> canonical на страницу без параметров.
 *   2) title/description для map-info*.html — на DOMContentLoaded, через
 *      getMapForName(). Если функции нет или карта не найдена, страница
 *      остаётся как есть.
 *
 * Подключать ПОСЛЕ js/utils.js и файлов данных maps-*.js:
 *   <script src="js/seo-meta.js?v=1"></script>
 */
(function () {
    'use strict';

    // Параметры, задающие самостоятельную страницу, по именам файлов.
    // Страницы, которых здесь нет, канонизируются на адрес без параметров.
    var SIGNIFICANT_BY_PAGE = {
        'map-info.html': ['map'],
        'map-info-kkm.html': ['map'],
        'start.html': ['start'],
        'sheet-all.html': ['author']
    };

    // Страница автора: канонической считается сводная таблица по всем
    // регионам, региональные таблицы ведут canonical на неё.
    var AUTHOR_PAGE = 'sheet-all.html';

    // Страницы, где имеет смысл подставлять название карты в title.
    var MAP_INFO_PAGES = ['map-info.html', 'map-info-kkm.html'];

    var SUFFIX = ' — O-Maps';

    function pageName() {
        var path = window.location.pathname;
        return path.slice(path.lastIndexOf('/') + 1);
    }

    function significantParams() {
        return SIGNIFICANT_BY_PAGE[pageName()] || [];
    }

    function setMeta(selector, attr, value) {
        var el = document.head.querySelector(selector);
        if (el) el.setAttribute(attr, value);
    }

    function setCanonical(href) {
        var el = document.head.querySelector('link[rel="canonical"]');
        if (!el) {
            el = document.createElement('link');
            el.setAttribute('rel', 'canonical');
            document.head.appendChild(el);
        }
        el.setAttribute('href', href);
        setMeta('meta[property="og:url"]', 'content', href);
    }

    // Адрес страницы только со значимыми для неё параметрами.
    function canonicalUrl() {
        var params = new URLSearchParams(window.location.search);
        var page = pageName();

        // sheet-spb.html?author=X и прочие региональные таблицы -> sheet-all.
        if (page !== AUTHOR_PAGE && page.indexOf('sheet-') === 0 && params.get('author')) {
            return window.location.origin + '/' + AUTHOR_PAGE
                + '?author=' + params.get('author');
        }

        var kept = new URLSearchParams();
        significantParams().forEach(function (name) {
            var value = params.get(name);
            if (value !== null && value !== '') kept.set(name, value);
        });
        var base = window.location.origin + window.location.pathname;
        var query = kept.toString();
        return query ? base + '?' + decodeURIComponent(query) : base;
    }

    function stripTags(text) {
        return String(text).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    }

    function cut(text, limit) {
        text = stripTags(text);
        if (text.length <= limit) return text;
        var shortened = text.slice(0, limit);
        var space = shortened.lastIndexOf(' ');
        return (space > limit * 0.6 ? shortened.slice(0, space) : shortened) + '…';
    }

    function describeMap(map) {
        var parts = ['Спортивная карта «' + map.name + '»'];
        if (map.year) parts.push(map.year + ' года издания');
        return cut(parts.join(', ') + '. Каталог спортивных карт O-Maps.', 160);
    }

    function applyAuthorMeta() {
        if (pageName() !== AUTHOR_PAGE) return;

        var code = new URLSearchParams(window.location.search).get('author');
        if (!code || typeof authors !== 'object' || !authors[code]) return;

        var name = authors[code].name;
        if (!name) return;

        var title = 'Карты автора ' + name + SUFFIX;
        document.title = title;
        setMeta('meta[property="og:title"]', 'content', title);

        var description = cut('Карты автора ' + name
            + (/[.!?]$/.test(name) ? '' : '.')
            + ' Сводная таблица спортивных карт по всем регионам в каталоге O-Maps.', 160);
        setMeta('meta[name="description"]', 'content', description);
        setMeta('meta[property="og:description"]', 'content', description);
    }

    function applyStartMeta() {
        if (pageName() !== 'start.html') return;

        var code = new URLSearchParams(window.location.search).get('start');
        if (!code || typeof starts !== 'object' || !starts[code]) return;

        var start = starts[code];
        // name полнее и лучше для поиска, но бывает со ссылкой внутри;
        // short — запасной вариант.
        var label = stripTags(start.name || start.short || '');
        if (!label) return;

        var title = label + ' — карты и события календаря' + SUFFIX;
        document.title = title;
        setMeta('meta[property="og:title"]', 'content', title);

        var description = start.info
            ? cut(start.info, 160)
            : cut('Карты и события календаря «' + label
                + '» в каталоге спортивных карт O-Maps.', 160);
        setMeta('meta[name="description"]', 'content', description);
        setMeta('meta[property="og:description"]', 'content', description);
    }

    function applyMapMeta() {
        if (MAP_INFO_PAGES.indexOf(pageName()) === -1) return;

        var name = new URLSearchParams(window.location.search).get('map');
        if (!name || typeof getMapForName !== 'function') return;

        var map;
        try {
            map = getMapForName(name);
        } catch (e) {
            return;
        }
        if (!map || !map.name) return;

        var title = 'Карта ' + map.name + (map.year ? ', ' + map.year : '') + SUFFIX;
        document.title = title;
        setMeta('meta[property="og:title"]', 'content', title);

        var description = map.info ? cut(map.info, 160) : describeMap(map);
        setMeta('meta[name="description"]', 'content', description);
        setMeta('meta[property="og:description"]', 'content', description);
    }

    if (window.location.search) {
        setCanonical(canonicalUrl());
    }

    function applyMeta() {
        applyMapMeta();
        applyAuthorMeta();
        applyStartMeta();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyMeta);
    } else {
        applyMeta();
    }
})();
