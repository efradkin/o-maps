let starts = {
    NA: {
        short: 'Невский Азимут',
        name: 'Невский Азимут',
        logo: 'na.jpg'
    },
    YM: {
        short: 'Яркий Мир',
        name: '<a href="https://vk.com/club128591100" target="_blank">Яркий Мир</a>',
        logo: 'ym.jpg'
    },
    MMS: {
        short: 'ММС',
        name: 'Мемориал Михаила Святкина',
        logo: 'mms.jpg'
    },
    KKP: {
        short: 'ККП',
        name: '<a href="https://o-nw.ru/kkp" target="_blank">Камни (Кубок) Карельского Перешейка</a>',
        logo: 'kkp.jpg'
    },
    ST: {
        short: 'Спринт-Тур',
        name: '<a href="https://vk.com/sprinttourspb" target="_blank">Спринт-Тур</a>',
        logo: 'st.jpg'
    },
    '100X24': {
        short: '100x24',
        name: '<a href="https://100x24.ru/" target="_blank">100x24</a>',
        logo: '100x24.jpg'
    },
    RFAR: {
        short: 'RFAR',
        name: '<a href="https://adventure-race.redfox.ru/" target="_blank">Redfox Adventure Race</a>',
        logo: 'redfox.jpg'
    },
    KKM: {
        short: 'ККМ',
        name: '<a href="https://vk.com/club21533513" target="_blank">Кубок Коротких Маршрутов</a>',
        logo: 'kkm.jpg'
    },
    BA: {
        short: 'BikeAdventure',
        name: '<a href="https://vk.com/bikeadventure" target="_blank">BikeAdventure</a>',
        logo: 'ba.jpg'
    },
    TA: {
        short: 'TrailAdventure',
        name: '<a href="https://vk.com/tradventure" target="_blank">TrailAdventure</a>',
        logo: 'ta.jpg'
    },
    MB: {
        short: 'Марш-Бросок',
        name: '<a href="https://vk.com/mbrosok" target="_blank">Марш-Бросок</a>',
        logo: 'mb.jpg'
    },
    KZNTSVA: {
        short: 'Памяти Кузнецова',
        name: 'Памяти Сергея Кузнецова',
        logo: 'kuznetsov.jpg'
    },
    KS: {
        short: 'Карельские скалы',
        name: 'Карельские скалы',
        logo: 'ks.jpg'
    },
    MEET_1966: {
        short: 'Матч\'1966',
        name: '<a href="https://o-site.spb.ru/history/Knots/match-66.html" target="_blank">Зимний матч городов СССР</a>',
        logo: 'meet_1966.jpg'
    },
    USSR_V_1971: {
        short: 'Всесоюзные\'1971',
        name: '<a href="https://o-site.spb.ru/history/Knots/ussr-71.html" target="_blank">Пятые Всесоюзные соревнования</a>',
        logo: '1971.jpg'
    },
    USSR_V_1975: {
        short: 'Всесоюзные\'1975',
        name: '<a href="https://o-site.spb.ru/history/Knots/ussr-75.html" target="_blank">Всесоюзные зимние соревнования</a>',
        logo: 'ussr_1975.jpg'
    },
    VWC_1995: {
        major: true,
        short: 'VWC\'1995',
        name: '<a href="https://o-site.spb.ru/history/VWC-95/index.html" target="_blank">Кубок Мира среди ветеранов</a>',
        logo: 'vwc95.gif'
    },
    USSR_1981: {
        major: true,
        short: 'I Чемпионат СССР',
        name: '<a href="https://o-site.spb.ru/history/Knots/ussr-81.html" target="_blank">Первый чемпионат СССР</a> (<a href="https://rufso.ru/wp-content/uploads/2018/08/2016№4-Первый-Чемпионат-СССР-как-это-было.pdf" target="_blank">как это было</a>, <a href="./docs/ussr_champ_1981_program.pdf" target="_blank">программа</a>, <a href="./docs/ussr_champ_1981_resolution.pdf" target="_blank">постановление</a>)',
        logo: 'ussr_1981.jpg'
    },
    JWSOC_2003: {
        major: true,
        short: 'JWSOC 2003',
        name: '<a href="https://spbof.ru/ru/2-uncategorised/582-istoriya-orientirovaniya-1992g-po-nastoyashchee-vremya" target="_blank">Чемпионат мира  по ориентированию  на лыжах среди  юниоров</a> (<a href="https://docs.cntd.ru/document/3641816" target="_blank">распоряжение</a>)',
        logo: 'jwsoc_2003.jpg'
    },
    RUSSIA_2019: {
        major: true,
        short: 'ЧР 2019',
        name: '<a href="https://o-site.spb.ru/race.php?id=190524chRF" target="_blank">Чемпионат России</a>',
        logo: 'fsor.jpg'
    },
    RUSSIA_2020: {
        major: true,
        short: 'ЧР (спринт) 2020',
        name: '<a href="https://o-site.spb.ru/race.php?id=20092428" target="_blank">Чемпионат России (спринт)</a>',
        logo: 'fsor.jpg'
    },
    RUSSIA_2021: {
        major: true,
        short: 'ЧР (спринт) 2021',
        name: '<a href="https://o-site.spb.ru/race.php?id=210531" target="_blank">Чемпионат России (спринт)</a>',
        logo: 'russia_2021.jpg'
    },
    RUSSIA_2022: {
        major: true,
        short: 'ЧР 2022',
        name: '<a href="https://o-site.spb.ru/race.php?id=22060911" target="_blank">Чемпионат России</a>',
        logo: 'fsor.jpg'
    },
    RUSSIA_2024: {
        major: true,
        short: 'ЧР (спринт) 2024',
        name: '<a href="https://o-site.spb.ru/race.php?id=240519_russia" target="_blank">Чемпионат России (спринт)</a>',
        logo: 'russia_2024.jpg'
    },
    RUSSIA_CUP_2024: {
        major: true,
        short: 'КР (спринт) 2024',
        name: '<a href="https://сшгорелова.рф/кубок-россии-г-химки/" target="_blank">Кубок России (спринт)</a>',
        logo: 'fso_msk.jpg'
    },
    SCHOOL: {
        short: 'Ориентирование в школу',
        name: '<a href="https://spbof.ru/ru/projects/o-school" target="_blank">Спортивное ориентирование в школу</a>',
        logo: 'school.jpg'
    },
    /* --- МОСКВА --- */
    INCR: {
        short: 'Инакор',
        name: '<a href="https://vk.com/inacor" target="_blank">Инакор — интернет активное ориентирование</a>',
        logo: 'inacor.jpg'
    },
    KMPT_ROGAINE: {
        short: 'Компот-рогейн',
        name: '<a href="https://www.x-lite.run/" target="_blank">Компот-рогейн</a>',
        logo: 'kmpt-rogaine.jpg'
    },
    AERO: {
        short: 'Аэророгейн',
        name: 'Аэророгейн',
        logo: 'aero.jpg'
    },
    MSK_LIGHT: {
        short: 'Московский лайт',
        name: '<a href="https://vk.com/moscow__lite" target="_blank">Московский лайт</a>',
        logo: 'msk_light.jpg'
    },
    BNO: {
        short: 'БНО',
        name: '<a href="https://tkmgtu.ru/library/Большое_Ночное_Ориентирование" target="_blank">Большое Ночное Ориентирование</a>',
        logo: 'bno.jpg'
    },
};

