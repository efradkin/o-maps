// https://github.com/BenPortner/leaflet-burgermenu
const GLOBAL_MENU_ITEMS = [
    {
        title: 'Регионы',
        menuItems: [
            {
                title: 'С-Петербург',
                menuItems: [
                    { title: '🗺️ Карты на карте', page: 'spb' },
                    { title: '📑 Таблица карт', page: 'sheet-spb' },
                    { title: '🔢 Статистика', page: 'charts-spb' },
                    { title: '🏅 Старты на карте', page: 'starts' },
                    { title: '🥾 Маршруты на карте', page: 'tracks' },
                    { title: '🥾 Таблица маршрутов', page: 'sheet-tracks' },
                    { title: '🗓️ Календарь', page: 'calendar' },
                    { title: '⛷️ Лыжные гонки', page: 'calendar-ski' },
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
        title: 'Разное',
        menuItems: [
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

        return `${indent}<a class="dropdown-item" href="${options.urlPrefix}${page}.html" target="_self">${title}</a>`;
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

function writeGlobalMenuHtml(urlPrefix = '') {
    document.currentScript.insertAdjacentHTML('beforebegin', buildMenuHtml(GLOBAL_MENU_ITEMS, {urlPrefix: urlPrefix}));
}

function goPage(page) {
    location.href = page + '.html';
    return false;
}