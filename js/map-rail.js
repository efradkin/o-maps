/*
 * map-rail.js — консолидация контролов карты в одну «рейку».
 *
 * Идея: main.js создаёт контролы штатными плагинами (ZoomBar, easyButton,
 * qgsmeasure, lasso, fileLayer, searchbox, layers, slider). Их DOM-узлы
 * оказываются в углах .leaflet-control-container. Мы НЕ переписываем плагины —
 * после инициализации карты забираем уже готовые узлы кнопок и переносим их
 * в три смысловых блока одной рейки слева, пряча вторичное под раскрывашки.
 *
 * Ничего не ломается в логике плагинов: обработчики висят на самих <a>/<button>,
 * а мы двигаем только их контейнеры. Раскрывашки — чистый CSS/JS поверх.
 *
 * Вызывается из main.js: buildMapRail(map) — в конце блока инициализации,
 * когда все контролы уже добавлены.
 */

function buildMapRail(map) {
    if (typeof L === 'undefined' || !map) return;

    // В «голом» режиме (embedded / без кнопок) рейку не собираем —
    // там и контролов почти нет.
    if (typeof hiddenButtonsMode !== 'undefined' && hiddenButtonsMode &&
        typeof HAS_EMBEDDED_PARAM !== 'undefined' && HAS_EMBEDDED_PARAM) {
        return;
    }

    var container = map.getContainer();
    var cc = container.querySelector('.leaflet-control-container');
    if (!cc) return;

    // ---- helpers -------------------------------------------------------

    // Найти узел кнопки по классу иконки (easyButton рисует <button class="button-icon X-icon">
    // внутри .leaflet-bar). Возвращаем именно .leaflet-bar-обёртку, чтобы забрать её целиком.
    function barByIcon(iconClass) {
        var el = cc.querySelector('.' + iconClass);
        if (!el) return null;
        return el.closest('.leaflet-bar') || el.parentElement;
    }

    function firstMatch(selectors) {
        for (var i = 0; i < selectors.length; i++) {
            var el = cc.querySelector(selectors[i]);
            if (el) return el;
        }
        return null;
    }

    // Перенести узел el внутрь host, сохранив рабочие обработчики.
    // Снимаем у перенесённого узла его собственные leaflet-отступы/тени —
    // за раскладку теперь отвечает рейка.
    function adopt(host, el) {
        if (!el || !host) return null;
        el.classList.add('om-rail__adopted');
        host.appendChild(el);
        return el;
    }

    function icon(svg, cls) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'om-rail__btn' + (cls ? ' ' + cls : '');
        b.innerHTML = svg;
        return b;
    }

    // ---- строим каркас рейки ------------------------------------------

    var rail = L.DomUtil.create('div', 'om-rail');
    rail.id = 'om-rail';
    // критично: гасим всплытие, иначе клики/скролл по рейке уйдут в карту
    L.DomEvent.disableClickPropagation(rail);
    L.DomEvent.disableScrollPropagation(rail);

    var groupHome  = L.DomUtil.create('div', 'om-rail__group om-rail__group--home', rail);
    var groupMenu  = L.DomUtil.create('div', 'om-rail__group om-rail__group--menu', rail);
    var groupNav   = L.DomUtil.create('div', 'om-rail__group', rail);
    var groupTools = L.DomUtil.create('div', 'om-rail__group', rail);
    var groupInfo  = L.DomUtil.create('div', 'om-rail__group', rail);

    // ============ БЛОК 1. HOME (отдельно) ============
    // home — отдельный easyButton; переносим кнопку целиком (фон-иконка на .button-icon внутри)
    var homeBar = barByIcon('home-icon');
    if (homeBar) {
        var homeBtn = homeBar.querySelector('.easy-button-button') || homeBar.firstElementChild || homeBar;
        adopt(groupHome, homeBtn);
        if (homeBar.parentElement && homeBar !== homeBtn && homeBar.children.length === 0) homeBar.remove();
    }
    if (!groupHome.children.length) groupHome.remove();

    // ============ БЛОК 2. МЕНЮ (глобальный бургер, отдельно) ============
    // Бургер-меню (global-menu.js) создаётся своим L.Control в topleft.
    // Переносим его контейнер в рейку, чтобы он встал в колонку между Home и
    // линейкой. Выпадающее меню — часть того же контейнера, обработчики целы.
    var burger = cc.querySelector('.leaflet-control-burgermenu');
    if (burger) {
        burger.classList.add('om-rail__adopted', 'om-rail__menu');
        groupMenu.appendChild(burger);
    } else {
        groupMenu.remove();
    }

    // ============ БЛОК 3. ЛИНЕЙКА: зум + локация (всегда видно) ============
    // ZoomBar уже нарисовал: локация / + / − / рамка. Забираем нужные <a>
    // по классам и раскладываем в фиксированном порядке: локация, +, −.

    var zoomBar   = cc.querySelector('.leaflet-control-zoom');       // контейнер ZoomBar
    var aLocate   = cc.querySelector('.leaflet-control-zoom-to-start');
    var aZoomIn   = cc.querySelector('.leaflet-control-zoom-in');
    var aZoomOut  = cc.querySelector('.leaflet-control-zoom-out');
    var aZoomArea = cc.querySelector('.leaflet-control-zoom-to-area');

    // рамочный зум и компас убраны по требованию
    if (aZoomArea) aZoomArea.remove();
    var compassCtl = cc.querySelector('.leaflet-compass');
    if (compassCtl) compassCtl.remove();

    if (aLocate)  adopt(groupNav, aLocate);
    if (aZoomIn)  adopt(groupNav, aZoomIn);
    if (aZoomOut) adopt(groupNav, aZoomOut);
    // пустой контейнер ZoomBar убираем
    if (zoomBar && zoomBar.children.length === 0) zoomBar.remove();

    // ============ БЛОК 2. ИНСТРУМЕНТЫ (раскрывашка) ============
    var toolsToggle = icon(
        '<span class="om-rail__emoji">\uD83D\uDEE0</span>',
        'om-rail__toggle');
    toolsToggle.title = 'Инструменты';
    toolsToggle.setAttribute('aria-label', 'Инструменты');
    toolsToggle.setAttribute('aria-expanded', 'false');
    toolsToggle.setAttribute('aria-controls', 'om-fly-tools');
    groupTools.appendChild(toolsToggle);

    var flyTools = L.DomUtil.create('div', 'om-flyout om-flyout--wide', groupTools);
    flyTools.id = 'om-fly-tools';
    flyTools.setAttribute('role', 'menu');

    // ============ БЛОК 3. ИНФОРМАЦИЯ (раскрывашка) ============
    // иконка (i) как у «О проекте», но без жёлтого фона
    var infoToggle = icon(
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><circle cx="12" cy="8" r="0.6" fill="currentColor" stroke="none"/></svg>',
        'om-rail__toggle');
    infoToggle.title = 'Информация';
    infoToggle.setAttribute('aria-label', 'Информация');
    infoToggle.setAttribute('aria-expanded', 'false');
    infoToggle.setAttribute('aria-controls', 'om-fly-info');
    groupInfo.appendChild(infoToggle);

    var flyInfo = L.DomUtil.create('div', 'om-flyout', groupInfo);
    flyInfo.id = 'om-fly-info';
    flyInfo.setAttribute('role', 'menu');

    // Трекинг активного инструмента для индикатора-точки на кнопке-молотке.
    // Точку зажигают/гасят РЕАЛЬНЫЕ события плагинов на карте (не клики),
    // поэтому она верна и когда инструмент завершился сам.
    var toolRows = {};                 // { measure: row, lasso: row }
    var activeTool = null;

    function setActiveTool(name) {
        if (activeTool && toolRows[activeTool]) {
            toolRows[activeTool].classList.remove('om-flyout__item--active');
        }
        activeTool = name;
        if (name && toolRows[name]) {
            toolRows[name].classList.add('om-flyout__item--active');
        }
        toolsToggle.classList.toggle('om-rail__toggle--busy', !!activeTool);
    }

    // Универсальный конструктор пункта. host — куда добавлять (flyTools/flyInfo).
    // sourceEl — перенесённый узел плагина (его иконка-фон и клик), либо null +
    // opts.svg/opts.onClick для собственного пункта.
    // opts.tool — имя инструмента ('measure'/'lasso') для привязки индикатора.
    function makeItem(host, label, sourceEl, opts) {
        opts = opts || {};
        var row = document.createElement('div');
        row.className = 'om-flyout__item';
        row.setAttribute('role', 'menuitem');
        row.tabIndex = opts.disabled ? -1 : 0;
        row.innerHTML = '<span class="om-flyout__ico">' + (sourceEl ? '' : (opts.svg || '')) + '</span>' +
                        '<span class="om-flyout__label">' + label + '</span>';
        var icoHost = row.querySelector('.om-flyout__ico');

        if (opts.tool) toolRows[opts.tool] = row;

        if (sourceEl) {
            sourceEl.classList.add('om-proxy-source');
            icoHost.appendChild(sourceEl);
            var real = sourceEl.matches('a,button') ? sourceEl : sourceEl.querySelector('a,button');

            // Некоторые плагины (lasso) рисуют кнопку как <a href="javascript:void(0)">.
            // На страницах стоит <base target="_blank">, поэтому такой клик открывает
            // пустую вкладку. Снимаем target и гасим переход у всех перенесённых <a>,
            // сохраняя их собственные обработчики (они срабатывают на click).
            var anchors = [];
            if (real && real.tagName === 'A') anchors.push(real);
            var innerA = sourceEl.querySelectorAll ? sourceEl.querySelectorAll('a') : [];
            for (var ai = 0; ai < innerA.length; ai++) anchors.push(innerA[ai]);
            anchors.forEach(function (a) {
                a.removeAttribute('target');
                a.addEventListener('click', function (ev) { ev.preventDefault(); });
            });

            var fire = function () {
                if (real) real.click();
                if (!opts.keepOpen) closeFlyouts();
            };
            row.addEventListener('click', function (e) {
                if (e.target.closest('.om-proxy-source')) return; // настоящий клик по узлу
                fire();
            });
            row.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fire(); }
            });
        } else if (opts.onClick && !opts.disabled) {
            row.addEventListener('click', function () { opts.onClick(); if (!opts.keepOpen) closeFlyouts(); });
            row.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); opts.onClick(); if (!opts.keepOpen) closeFlyouts(); }
            });
        }
        if (opts.disabled) row.classList.add('is-disabled');
        host.appendChild(row);
        return row;
    }
    function toolItem(label, src, opts) { return makeItem(flyTools, label, src, opts); }
    function infoItem(label, src, opts) { return makeItem(flyInfo,  label, src, opts); }
    function sepIn(host) { var s = document.createElement('div'); s.className = 'om-flyout__sep'; host.appendChild(s); }

    // ---- наполнение: ИНСТРУМЕНТЫ ----
    // порядок: Настройки, Прозрачность, Поиск, Расстояния, Измерение площади

    // настройки (easyButton settings-icon)
    toolItem('Настройки', barByIcon('settings-icon'));

    // прозрачность карт (slider): пункт с иконкой слева и слайдером в теле строки
    var sliderNode = cc.querySelector('.leaflet-control-slider');
    if (sliderNode) {
        var opRow = document.createElement('div');
        opRow.className = 'om-flyout__item om-flyout__item--slider';
        opRow.innerHTML =
            '<span class="om-flyout__ico">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' +
            '<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 000 18z" fill="currentColor" stroke="none"/></svg>' +
            '</span>' +
            '<span class="om-flyout__slidercol">' +
            '<span class="om-flyout__label">Прозрачность карт</span>' +
            '</span>';
        var slidercol = opRow.querySelector('.om-flyout__slidercol');
        sliderNode.classList.add('om-rail__adopted');
        // страховка: показываем ползунок сразу, не завися от collapsed-логики плагина
        sliderNode.classList.add('leaflet-control-slider-expanded');
        slidercol.appendChild(sliderNode);
        flyTools.appendChild(opRow);
    }

    // поиск карты (searchbox) — открываем штатным show()
    toolItem('Поиск карты', null, {
        svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="11" cy="11" r="6"/><path d="M20 20l-3.5-3.5"/></svg>',
        onClick: function () {
            if (typeof searchBox !== 'undefined' && searchBox && searchBox.show) {
                searchBox.show();
                var f = document.querySelector('.leaflet-searchbox');
                if (f) f.focus();
            }
        }
    });

    // измерение расстояний (qgsmeasure) — нарисованную ломаную можно
    // выгрузить в GPX кнопкой в окошке «Перегоны (м)» (см. main.js)
    var measure = firstMatch(['.leaflet-control-draw-measure', '.qgsmeasure', '.leaflet-control-qgsmeasure']);
    toolItem('Расстояния → GPX', measure, { keepOpen: true, tool: 'measure' });

    // измеритель площади (lasso)
    var lasso = firstMatch(['.leaflet-control-lasso', '.leaflet-lasso']);
    toolItem('Измерение площади', lasso, { keepOpen: true, tool: 'lasso' });

    // загрузка GPX/KML (fileLayer)
    var fileCtl = firstMatch(['.leaflet-control-filelayer', '.leaflet-control-filelayerload']);
    toolItem('Загрузка GPX / KML', fileCtl);

    // ---- наполнение: ИНФОРМАЦИЯ ----
    infoItem('Статистика',      barByIcon('statistics-icon'));
    infoItem('Сводная таблица', barByIcon('papers-icon'));
    infoItem('Как пользоваться', barByIcon('help-icon'));
    infoItem('О проекте',        barByIcon('welcome-icon'));

    // ---- поведение раскрывашек ----------------------------------------

    var openKey = null;

    function closeFlyouts() {
        if (!openKey) return;
        flyTools.classList.remove('is-open');
        flyInfo.classList.remove('is-open');
        toolsToggle.setAttribute('aria-expanded', 'false');
        infoToggle.setAttribute('aria-expanded', 'false');
        rail.classList.remove('is-open');
        openKey = null;
    }

    function openFlyout(key, toggleEl, flyEl, focusFirst) {
        if (openKey === key) { if (!focusFirst) return; closeFlyouts(); return; }
        closeFlyouts();
        flyEl.classList.add('is-open');
        toggleEl.setAttribute('aria-expanded', 'true');
        rail.classList.add('is-open');
        openKey = key;
        if (focusFirst) {
            var first = flyEl.querySelector('.om-flyout__item');
            if (first) first.focus();
        }
    }

    // Клик — универсально (тач и десктоп). На десктопе клик работает как обычно;
    // на hover он тоже безвреден, т.к. переключает уже открытый вылет.
    L.DomEvent.on(toolsToggle, 'click', function () { openFlyout('tools', toolsToggle, flyTools, true); });
    L.DomEvent.on(infoToggle,  'click', function () { openFlyout('info',  infoToggle,  flyInfo,  true); });

    // --- раскрытие по наведению (только настоящий hover: десктоп с мышью) ---
    var hoverCapable = false;
    try {
        hoverCapable = window.matchMedia &&
            window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    } catch (e) { hoverCapable = false; }

    if (hoverCapable) {
        var hoverTimer = null;
        var CLOSE_DELAY = 180; // мс — успеть перевести курсор через зазор

        function scheduleClose() {
            clearTimeout(hoverTimer);
            hoverTimer = setTimeout(closeFlyouts, CLOSE_DELAY);
        }
        function cancelClose() { clearTimeout(hoverTimer); }

        // groupTools/groupInfo включают и кнопку-тоггл, и сам вылет —
        // курсор внутри всей группы держит вылет открытым
        function wireHover(group, key, toggleEl, flyEl) {
            L.DomEvent.on(group, 'mouseenter', function () {
                cancelClose();
                openFlyout(key, toggleEl, flyEl, false);
            });
            L.DomEvent.on(group, 'mouseleave', scheduleClose);
        }
        wireHover(groupTools, 'tools', toolsToggle, flyTools);
        wireHover(groupInfo,  'info',  infoToggle,  flyInfo);
    }

    // клик по карте закрывает раскрывашки
    map.on('click', closeFlyouts);

    // --- индикатор активного инструмента по РЕАЛЬНЫМ событиям плагинов ---

    // Инструменты помечены keepOpen: клик по пункту не закрывает раскрывашку,
    // чтобы включённый инструмент можно было выключить тем же пунктом. Но
    // работают-то они по карте, а на узких экранах вылет занимает почти всю
    // ширину (theme.css, @media max-width: 480px) и закрывает место работы.
    // Поэтому закрываем вылет в момент ВКЛЮЧЕНИЯ инструмента.
    //
    // Закрываем по событию плагина, а не по клику, по двум причинам:
    //   - клик по уже включённому инструменту его выключает — тогда закрывать
    //     меню не нужно, пользователь остаётся в списке;
    //   - тапнуть можно и по самой иконке плагина (.om-proxy-source), обработчик
    //     строки при этом не срабатывает, а событие приходит в обоих случаях.
    function activateTool(name) {
        setActiveTool(name);
        closeFlyouts();
    }

    // Измерение расстояний (qgsmeasure наследует L.Draw.Polyline).
    // Точка отражает включённость инструмента: горит, пока режим измерения
    // активен, независимо от того, что двойной клик завершает текущую ломаную
    // (следующий клик начинает новую — режим при этом не выключается).
    //   зажигается — measurestart (клик по кнопке);
    //   гаснет — measurestop (выключение кнопкой) и draw:canceled (выход по Esc).
    map.on('qgsmeasure:measurestart', function () { activateTool('measure'); });
    map.on('qgsmeasure:measurestop draw:canceled', function () {
        if (activeTool === 'measure') setActiveTool(null);
    });

    // Измерение площади (lasso): после отрисовки площади плагин сам вызывает
    // disable → приходит lasso.disabled, поэтому точка гаснет корректно.
    map.on('lasso.enabled',  function () { activateTool('lasso'); });
    map.on('lasso.disabled', function () { if (activeTool === 'lasso') setActiveTool(null); });

    // Esc закрывает
    L.DomEvent.on(document, 'keydown', function (e) {
        if (e.key === 'Escape') closeFlyouts();
    });

    // экспорт на случай нужды из main.js
    map._omRail = { close: closeFlyouts };

    // наконец, добавляем рейку в контейнер карты
    container.appendChild(rail);
}
