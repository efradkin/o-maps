// https://github.com/BenPortner/leaflet-burgermenu
const GLOBAL_MENU_ITEMS = [
    { title: '🏠 Домой', page: 'index' },
    {
        title: 'Регионы',
        menuItems: [
            {
                title: 'С-Петербург',
                menuItems: [
                    { title: '🗺️ Карты на карте', page: 'spb' },
                    { title: '🗓️ Календарь', page: 'calendar' },
                    { title: '📑 Таблица карт', page: 'sheet-spb' },
                    { title: '🔢 Статистика', page: 'charts-spb' },
                    { title: '🏅 Старты на карте', page: 'starts' },
                    { title: '🏅 Таблица стартов', page: 'sheet-starts' },
                    { title: '🥾 Маршруты на карте', page: 'tracks' },
                    { title: '🥾 Таблица маршрутов', page: 'sheet-tracks' },
                    { title: '❌ Закрытые районы', page: 'sheet-spb.html?restricted' },
                    // { title: '⛷️ Лыжные гонки', page: 'calendar-ski' },
                    { title: '⛷️ Лыжные трассы', page: 'tracks.html?track-type=SKI' },
                    { title: '👨‍👩‍👧‍👧 Клубы', page: 'clubs' },
                ],
            },
            {
                title: 'Москва',
                menuItems: [
                    { title: '🗺️ Карты на карте', page: 'moscow' },
                    { title: '📑 Таблица карт', page: 'sheet-moscow' },
                    { title: '🔢 Статистика', page: 'charts-moscow' },
                    { title: '🗓️ Календарь', page: 'calendar-msk' },
                ],
            },
            {
                title: 'Башкирия',
                menuItems: [
                    { title: '🗺️ Карты на карте', page: 'bash' },
                    { title: '📑 Таблица карт', page: 'sheet-bash' },
                    { title: '🔢 Статистика', page: 'charts-bash' },
                ],
            },
            {
                title: 'Белград',
                menuItems: [
                    { title: '🗺️ Карты на карте', page: 'serbia' },
                    { title: '📑 Таблица карт', page: 'sheet-serbia' },
                    { title: '🔢 Статистика', page: 'charts-serbia' },
                ],
            },
            {
                title: 'Псков',
                menuItems: [
                    { title: '🗺️ Карты на карте', page: 'pskov' },
                    { title: '📑 Таблица карт', page: 'sheet-pskov' },
                    { title: '🔢 Статистика', page: 'charts-pskov' },
                    { title: '🥾 Маршруты', page: 'tracks' },
                ],
            },
            {
                title: 'Рязань',
                menuItems: [
                    { title: '🗺️ Карты на карте', page: 'ryazan' },
                    { title: '📑 Таблица карт', page: 'sheet-ryazan' },
                    { title: '🔢 Статистика', page: 'charts-ryazan' },
                ],
            },
            {
                title: 'Самара',
                menuItems: [
                    { title: '🗺️ Карты на карте', page: 'samara' },
                    { title: '📑 Таблица карт', page: 'sheet-samara' },
                    { title: '🔢 Статистика', page: 'charts-samara' },
                    { title: '🗓️ Календарь', page: 'calendar-samara' },
                ],
            },
            {
                title: 'Все вместе',
                menuItems: [
                    { title: '🗺️ Карты на карте', page: 'all' },
                    { title: '📑 Таблица карт', page: 'sheet-all' },
                    { title: '🔢 Статистика', page: 'charts-all' },
                ],
            },
        ],
    },
    {
        title: 'Календарь',
        menuItems: [
            { title: '🗓️ С-Петербург', page: 'calendar' },
            { title: '🗓️ Москва', page: 'calendar-msk' },
            { title: '🗓️ Самара', page: 'calendar-samara' },
            { title: '🗓️ Главные старты', page: 'calendar.html?start=major' },
            { title: '⛷️ Лыжные гонки', page: 'calendar-ski' },
        ]
    },
    {
        title: 'Разное',
        menuItems: [
            { title: '🗺️ Запросы на рисовку', page: 'sheet-orders.html' },
            {
                title: '🏆 Чемпионат СССР',
                menuItems: [
                    { title: '🗺️ На карте', page: 'all.html?start=USSR_CHAMP' },
                    { title: '📑 Списком', page: 'sheet-all.html?start=USSR_CHAMP' },
                    { title: '🗺️ Плитками', page: 'start.html?start=USSR_CHAMP' },
                    { title: '📃 Документы', page: 'documents.html?start=USSR_CHAMP' },
                ]
            },
            {
                title: '🏆 Чемпионат России',
                menuItems: [
                    { title: '🗺️ На карте', page: 'all.html?start=RUSSIA_CHAMP' },
                    { title: '📑 Списком', page: 'sheet-all.html?start=RUSSIA_CHAMP' },
                    { title: '🗺️ Плитками', page: 'start.html?start=RUSSIA_CHAMP' },
                    { title: '🗓️ В календаре', page: 'calendar.html?startYear=ALL&start=RUSSIA_CHAMP' },
                ]
            },
            {
                title: '🏆 Чемпионат России по рогейну',
                menuItems: [
                    { title: '🗺️ На карте', page: 'all.html?start=RUSSIA_ROGAINE_CHAMP' },
                    { title: '📑 Списком', page: 'sheet-all.html?start=RUSSIA_ROGAINE_CHAMP' },
                    { title: '🗺️ Плитками', page: 'start.html?start=RUSSIA_ROGAINE_CHAMP' },
                    { title: '🗓️ В календаре', page: 'calendar.html?startYear=ALL&start=RUSSIA_ROGAINE_CHAMP' },
                ]
            },
            { title: '🗺️ Авторы-составители карт', page: 'authors' },
            { title: '🏆 Соревнования', page: 'sheet-starts' },
            { title: '📃 Сканы документов', page: 'documents' },
            { title: '💼 Руководства и правила', page: 'rules' },
            { title: '📖 Книги и статьи', page: 'books' },
            { title: '❓ Неопределённые карты', page: 'unknown' },
        ]
    },
    {
        title: 'Персонально',
        menuItems: [
            { title: '👩🏻‍🎨 Олеся Мосьпан', page: 'mospan' },
            { title: '🎗️ Константин Токмаков', page: 'tokma' },
            { title: '🎗️ Андрей Волков', page: 'volkov_av' },
        ]
    },
    {
        title: 'О сайте',
        menuItems: [
            { title: '📞 Контакты', page: 'help/contacts' },
            { title: '🆕 Новости', page: 'news' },
            { title: 'ℹ️ Справка', page: 'help/help' },
            { title: 'Рекламные баннеры', page: 'integration/banners' },
        ]
    }
];

function convertMenuNewToOld(items) {
    return items.map(item => {
        const { page, menuItems, ...rest } = item;

        const result = { ...rest };

        if (Array.isArray(menuItems)) {
            result.menuItems = convertMenuNewToOld(menuItems);
        } else if (page) {
            result.onClick = () => goPage(page);
        }

        return result;
    });
}

function buildGlobalMenu() {
    L.control.burgerMenu({
        title: 'main',
        menuItems: convertMenuNewToOld(GLOBAL_MENU_ITEMS),
    }).addTo(map);
}

function buildMenuHtml(items, options = {}) {
    const {
        rootButtonId = 'dropdownMenuButton',
        rootAriaLabelledBy = 'dropdownMenuButton222',
        submenuAriaLabelledBy = 'dropdown-layouts',
        buttonImage = 'images/burger_24.png',
        buttonAlt = 'Меню',
        urlPrefix = ''
    } = options;

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    function escapeJsString(value) {
        return String(value)
            .replace(/\\/g, '\\\\')
            .replace(/'/g, "\\'");
    }

    function renderItems(menuItems, level, options) {
        return menuItems.map(item => renderItem(item, level, options)).join('\n');
    }

    function renderItem(item, level, options) {
        const indent = '    '.repeat(level);
        const title = escapeHtml(item.title || '');

        if (Array.isArray(item.menuItems) && item.menuItems.length > 0) {
            return `${indent}<div class="dropdown dropend">
${indent}    <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown"${staticDisplayAttr} aria-haspopup="true" aria-expanded="false">${title}</a>
${indent}    <div class="dropdown-menu" aria-labelledby="${submenuAriaLabelledBy}">
${renderItems(item.menuItems, level + 2, options)}
${indent}    </div>
${indent}</div>`;
        }

        const page = escapeJsString(item.page || '');

        return `${indent}<a class="dropdown-item" href="${options.urlPrefix}${page.includes('.') ? page : page + '.html'}" target="_self">${title}</a>`;
    }


    const hoverClass =
        window.matchMedia('(hover: hover) and (pointer: fine)').matches
            ? ' dropdown-hover-all'
            : '';

    // На узких экранах подменю размещает setupMobileSubmenus(), а не Popper.
    // data-bs-display="static" отключает у Popper запись inline-стилей
    // (applyStyles), иначе он будет затирать наши left/top/width при каждой
    // прокрутке. На десктопе всё остаётся как было.
    const staticDisplayAttr = isNarrowGlobalMenu() ? ' data-bs-display="static"' : '';

    return `<div class="dropdown-button-right d-flex${hoverClass}">
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle btn-light global-menu-button-with-local-indicator" type="button" id="${rootButtonId}" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src="${options.urlPrefix}${escapeHtml(buttonImage)}" alt="${escapeHtml(buttonAlt)}" />
            <span class="global-menu-local-indicator" aria-hidden="true">★</span>
        </button>
        <div class="dropdown-menu" aria-labelledby="${rootAriaLabelledBy}">
${renderItems(items, 3, options)}
        </div>
    </div>
</div>`;
}

function getLocalMenuItemTitleFromRightButton(link) {
    const title = link.getAttribute('title') ||
        (link.querySelector('img') && link.querySelector('img').getAttribute('alt')) ||
        link.textContent ||
        'Открыть';

    const imgSrc = (link.querySelector('img') && link.querySelector('img').getAttribute('src')) || '';
    if (imgSrc.includes('map_24')) return `🗺️ ${title}`;
    if (imgSrc.includes('search_24')) return `🔍 ${title}`;
    if (imgSrc.includes('ceramics_24')) return `🧩 ${title}`;
    return title;
}

function isHomeRightButton(link) {
    const href = (link.getAttribute('href') || '').replace(/^\.\//, '');
    const title = link.getAttribute('title') || '';
    const imgAlt = (link.querySelector('img') && link.querySelector('img').getAttribute('alt')) || '';

    return href === 'index.html' ||
        href === '/index.html' ||
        title === 'Главная страница' ||
        imgAlt === 'Главная страница';
}

function isVisibleBeforeMobileHiding(link) {
    return getComputedStyle(link).display !== 'none' &&
        getComputedStyle(link).visibility !== 'hidden';
}

function cloneRightButtonAsMenuItem(link) {
    const item = document.createElement('a');
    item.className = 'dropdown-item local-menu-item';
    item.href = link.getAttribute('href') || link.href || '#';
    item.target = link.getAttribute('target') || '_self';
    item.textContent = getLocalMenuItemTitleFromRightButton(link);

    const onclick = link.getAttribute('onclick');
    if (onclick) {
        item.setAttribute('onclick', onclick);
    }

    return item;
}

function addLocalRightButtonsToGlobalMenuOnMobile() {
    if (!isMobile) {
        return;
    }

    const rootMenu = document.querySelector('.dropdown-button-right > .dropdown > .dropdown-menu');
    if (!rootMenu || rootMenu.dataset.localButtonsAdded === 'true') {
        return;
    }

    const localLinks = Array.from(document.querySelectorAll('.stat-map-link-right'))
        .filter(link => !isHomeRightButton(link))
        .filter(isVisibleBeforeMobileHiding);

    if (localLinks.length === 0) {
        return;
    }

    let insertBefore = rootMenu.firstElementChild ? rootMenu.firstElementChild.nextSibling : null;
    localLinks.forEach(link => {
        const menuItem = cloneRightButtonAsMenuItem(link);
        rootMenu.insertBefore(menuItem, insertBefore);
        rootMenu.insertBefore(document.createTextNode('\n'), insertBefore);
    });

    const menuButtonWrapper = rootMenu.closest('.dropdown-button-right');
    if (menuButtonWrapper) {
        menuButtonWrapper.classList.add('global-menu-has-local-items');
        menuButtonWrapper.setAttribute('title', 'В меню добавлены пункты этой страницы');
    }

    rootMenu.dataset.localButtonsAdded = 'true';
}

function hideRightButtonsOnMobile() {
    if (!isMobile) {
        return;
    }

    document.querySelectorAll('.stat-map-link-right').forEach(link => {
        link.classList.add('stat-map-link-right-mobile-hidden');
        link.setAttribute('aria-hidden', 'true');
        link.tabIndex = -1;
    });
}

/* ============================================================= */
/* Размещение подменю глобального меню на узких экранах.

   Кнопка меню стоит у правого края, поэтому корневой список прижат к
   правому краю экрана (css/theme.css, блок [17]). Подменю раскрывается
   влево — там свободно; но у третьего-четвёртого уровня места слева уже
   не остаётся, и такое подменю раскрывается «гармошкой» внутрь списка.

   Выбор нельзя сделать в CSS: нужно измерить, сколько места слева от
   родительского списка. Поэтому JS вешает на .dropdown.dropend один из
   двух классов, а всю отрисовку делает CSS.                          */

const GLOBAL_MENU_MOBILE = {
    breakpoint: 900,      // px: ниже этой ширины действуют мобильные правила
    minFlyoutWidth: 150,  // px: если слева меньше — раскрываем гармошкой
    maxFlyoutWidth: 300,  // px: шире делать смысла нет, строки станут длинными
    edgeGap: 6,           // px: отступ от краёв экрана
    overlap: 2            // px: подменю чуть наезжает на родителя, как в hover-меню
};

function isNarrowGlobalMenu() {
    return window.matchMedia(`(max-width: ${GLOBAL_MENU_MOBILE.breakpoint}px)`).matches;
}

function getGlobalMenuRoot() {
    return document.querySelector('.dropdown-button-right > .dropdown > .dropdown-menu');
}

/* Координаты пишем с priority = 'important'.

   Базовое (оно же аварийное) правило гармошки в theme.css задаёт
   left/top: auto !important — иначе его перебивали бы inline-стили Popper.
   Обычный inline-стиль против !important из таблицы стилей проигрывает,
   и панель вставала бы в позицию гармошки. Inline + important выигрывает
   у всех, поэтому ставим и снимаем свойства только так.                */
function setSubmenuStyle(submenu, property, value) {
    if (value === null) {
        submenu.style.removeProperty(property);
    } else {
        submenu.style.setProperty(property, value, 'important');
    }
}

function resetSubmenuPlacement(submenuBox, submenu) {
    submenuBox.classList.remove('gm-submenu-flyout', 'gm-submenu-flyout-right');
    ['left', 'top', 'width', 'max-height'].forEach(property => setSubmenuStyle(submenu, property, null));
}

function placeSubmenu(submenuBox, toggle, submenu) {
    const parentMenu = submenuBox.parentElement.closest('.dropdown-menu');
    if (!parentMenu) {
        return;
    }

    const cfg = GLOBAL_MENU_MOBILE;
    const parentRect = parentMenu.getBoundingClientRect();
    const freeLeft = parentRect.left - cfg.edgeGap;
    const freeRight = window.innerWidth - parentRect.right - cfg.edgeGap;

    // Уходим в ту сторону, где просторнее. У подменю первого уровня справа
    // ничего нет (корневой список прижат к правому краю), поэтому оно всегда
    // раскрывается влево; у глубоких уровней слева места уже не остаётся, и
    // они уходят вправо, ложась поверх родительских списков — обычное
    // поведение каскадного меню. Гармошка — только когда не влезло никуда.
    const toRight = freeRight > freeLeft;
    const free = toRight ? freeRight : freeLeft;

    if (free < cfg.minFlyoutWidth) {
        resetSubmenuPlacement(submenuBox, submenu);
        return;
    }

    submenuBox.classList.add('gm-submenu-flyout');
    submenuBox.classList.toggle('gm-submenu-flyout-right', toRight);

    const width = Math.min(free, cfg.maxFlyoutWidth);
    const left = toRight
        ? Math.min(window.innerWidth - cfg.edgeGap - width, parentRect.right - cfg.overlap)
        : Math.max(cfg.edgeGap, parentRect.left + cfg.overlap - width);

    setSubmenuStyle(submenu, 'width', `${width}px`);
    setSubmenuStyle(submenu, 'left', `${left}px`);
    setSubmenuStyle(submenu, 'max-height', `${window.innerHeight - 2 * cfg.edgeGap}px`);

    // Высоту читаем только после установки ширины: от неё зависят переносы строк.
    const toggleTop = toggle.getBoundingClientRect().top;
    const maxTop = window.innerHeight - cfg.edgeGap - submenu.offsetHeight;
    setSubmenuStyle(submenu, 'top', `${Math.max(cfg.edgeGap, Math.min(toggleTop - cfg.edgeGap, maxTop))}px`);
}

function forEachOpenFlyoutSubmenu(callback) {
    const root = getGlobalMenuRoot();
    if (!root) {
        return;
    }

    root.querySelectorAll('.dropdown.dropend.gm-submenu-flyout').forEach(submenuBox => {
        const toggle = submenuBox.querySelector(':scope > .dropdown-toggle');
        const submenu = submenuBox.querySelector(':scope > .dropdown-menu');
        if (toggle && submenu && submenu.classList.contains('show')) {
            callback(submenuBox, toggle, submenu);
        }
    });
}

function setupMobileSubmenus() {
    if (!isNarrowGlobalMenu()) {
        return;
    }

    const root = getGlobalMenuRoot();
    if (!root) {
        return;
    }

    root.querySelectorAll('.dropdown.dropend').forEach(submenuBox => {
        const toggle = submenuBox.querySelector(':scope > .dropdown-toggle');
        const submenu = submenuBox.querySelector(':scope > .dropdown-menu');
        if (!toggle || !submenu) {
            return;
        }

        // shown, а не show: к этому моменту подменю уже отображено и его можно
        // измерить. Обработчик Bootstrap вызывает синхронно, до отрисовки кадра,
        // поэтому промежуточного положения на экране не видно.
        toggle.addEventListener('shown.bs.dropdown', () => placeSubmenu(submenuBox, toggle, submenu));
        toggle.addEventListener('hidden.bs.dropdown', () => resetSubmenuPlacement(submenuBox, submenu));
    });

    // Всплывающее подменю — position: fixed, само за прокруткой корневого
    // списка оно не поедет, поэтому пересчитываем координаты.
    const reposition = () => forEachOpenFlyoutSubmenu(placeSubmenu);
    root.addEventListener('scroll', reposition, { passive: true });
    window.addEventListener('resize', reposition);
    window.addEventListener('orientationchange', reposition);
}

function setupResponsiveRightButtons() {
    addLocalRightButtonsToGlobalMenuOnMobile();
    hideRightButtonsOnMobile();
    setupMobileSubmenus();
}

function runAfterDomReady(callback) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', callback);
    } else {
        callback();
    }
}

function writeGlobalMenuHtml(urlPrefix = '') {
    document.currentScript.insertAdjacentHTML('beforebegin', buildMenuHtml(GLOBAL_MENU_ITEMS, {urlPrefix: urlPrefix}));
    runAfterDomReady(setupResponsiveRightButtons);
}

function goPage(page) {
    location.href = page.includes('.') ? page : page + '.html';
    return false;
}
