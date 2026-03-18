// https://github.com/BenPortner/leaflet-burgermenu
function buildGlobalMenu() {
    L.control.burgerMenu({
        title: 'main',
        menuItems: [
            {
                title: 'Регионы',
                menuItems: [
                    {
                        title: 'С-Петербург',
                        menuItems: [
                            {
                                title: '🗺️ Карты на карте',
                                onClick: () => goPage('spb')
                            },
                            {
                                title: '📑 Таблица карт',
                                onClick: () => goPage('sheet-spb')
                            },
                            {
                                title: '🔢 Статистика',
                                onClick: () => goPage('charts-spb')
                            },
                            {
                                title: '🏅 Старты на карте',
                                onClick: () => goPage('starts')
                            },
                            {
                                title: '🥾 Маршруты на карте',
                                onClick: () => goPage('tracks')
                            },
                            {
                                title: '🥾 Таблица маршрутов',
                                onClick: () => goPage('sheet-tracks')
                            },
                            {
                                title: '🗓️ Календарь',
                                onClick: () => goPage('calendar')
                            },
                        ],
                    },
                    {
                        title: 'Москва',
                        menuItems: [
                            {
                                title: '🗺️ Карты на карте',
                                onClick: () => goPage('moscow')
                            },
                            {
                                title: '📑 Таблица карт',
                                onClick: () => goPage('sheet-moscow')
                            },
                            {
                                title: '🔢 Статистика',
                                onClick: () => goPage('charts-moscow')
                            },
                            {
                                title: '🗓️ Календарь',
                                onClick: () => goPage('calendar-msk')
                            },
                        ],
                    },
                    {
                        title: 'Башкирия',
                        menuItems: [
                            {
                                title: '🗺️ Карты на карте',
                                onClick: () => goPage('bash')
                            },
                            {
                                title: '📑 Таблица карт',
                                onClick: () => goPage('sheet-bash')
                            },
                            {
                                title: '🔢 Статистика',
                                onClick: () => goPage('charts-bash')
                            },
                        ],
                    },
                    {
                        title: 'Белград',
                        menuItems: [
                            {
                                title: '🗺️ Карты на карте',
                                onClick: () => goPage('serbia')
                            },
                            {
                                title: '📑 Таблица карт',
                                onClick: () => goPage('sheet-serbia')
                            },
                            {
                                title: '🔢 Статистика',
                                onClick: () => goPage('charts-serbia')
                            },
                        ],
                    },
                    {
                        title: 'Псков',
                        menuItems: [
                            {
                                title: '🗺️ Карты на карте',
                                onClick: () => goPage('pskov')
                            },
                            {
                                title: '📑 Таблица карт',
                                onClick: () => goPage('sheet-pskov')
                            },
                            {
                                title: '🔢 Статистика',
                                onClick: () => goPage('charts-pskov')
                            },
                            {
                                title: '🥾 Маршруты',
                                onClick: () => goPage('tracks')
                            },
                        ],
                    },
                    {
                        title: 'Рязань',
                        menuItems: [
                            {
                                title: '🗺️ Карты на карте',
                                onClick: () => goPage('ryazan')
                            },
                            {
                                title: '📑 Таблица карт',
                                onClick: () => goPage('sheet-ryazan')
                            },
                            {
                                title: '🔢 Статистика',
                                onClick: () => goPage('charts-ryazan')
                            },
                        ],
                    },
                    {
                        title: 'Самара',
                        menuItems: [
                            {
                                title: '🗺️ Карты на карте',
                                onClick: () => goPage('samara')
                            },
                            {
                                title: '📑 Таблица карт',
                                onClick: () => goPage('sheet-samara')
                            },
                            {
                                title: '🔢 Статистика',
                                onClick: () => goPage('charts-samara')
                            },
                            {
                                title: '🗓️ Календарь',
                                onClick: () => goPage('calendar-samara')
                            },
                        ],
                    },
                    {
                        title: 'Все вместе',
                        menuItems: [
                            {
                                title: '🗺️ Карты на карте',
                                onClick: () => goPage('all')
                            },
                            {
                                title: '📑 Таблица карт',
                                onClick: () => goPage('sheet-all')
                            },
                            {
                                title: '🔢 Статистика',
                                onClick: () => goPage('charts-all')
                            },
                        ],
                    },
                ],
            },
            {
                title: 'Разное',
                menuItems: [
                    {
                        title: '📃 Сканы документов',
                        onClick: () => goPage('documents')
                    },
                    {
                        title: '💼 Руководства и правила',
                        onClick: () => goPage('rules')
                    },
                    {
                        title: '📖 Книги и статьи',
                        onClick: () => goPage('books')
                    },
                    {
                        title: '❓ Неопределённые карты',
                        onClick: () => goPage('unknown')
                    },
/*
                    {
                        title: '⛷️ Лыжные гонки',
                        onClick: () => goPage('calendar-ski')
                    },
*/
                ]
            },
            {
                title: 'О сайте',
                menuItems: [
                    {
                        title: '📞 Контакты',
                        onClick: () => goPage('help/contacts')
                    },
                    {
                        title: 'ℹ️ Новости',
                        onClick: () => goPage('news')
                    },
                    {
                        title: 'ℹ️ Справка',
                        onClick: () => goPage('help/help')
                    },
                    {
                        title: 'Рекламные баннеры',
                        onClick: () => goPage('integration/banners')
                    },
                ]
            }
        ],
    }).addTo(map);
}

function goPage(page) {
    location.href = page + '.html';
}