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
        ]
    },
    {
        title: 'Разное',
        menuItems: [
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
${indent}    <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">${title}</a>
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

    return `<div class="dropdown-button-right d-flex${hoverClass}">
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle btn-light" type="button" id="${rootButtonId}" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src="${options.urlPrefix}${escapeHtml(buttonImage)}" alt="${escapeHtml(buttonAlt)}" />
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

    rootMenu.dataset.localButtonsAdded = 'true';
}

function hideRightButtonsOnMobile() {
    if (!isMobile) {
        return;
    }

    document.querySelectorAll('.stat-map-link-right').forEach(link => {
        link.style.display = 'none';
        link.setAttribute('aria-hidden', 'true');
        link.tabIndex = -1;
    });
}

function setupResponsiveRightButtons() {
    addLocalRightButtonsToGlobalMenuOnMobile();
    hideRightButtonsOnMobile();
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
