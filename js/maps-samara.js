let samaraMaps = [
    // --- Самара ---
    {
        name: 'Тольятти, Самарская Лука',
        year: 2006,
        major: true,
        url: './maps/samara/samarska_luka_2006_rogaine.webp',
        link: './original_maps/samara/samarska_luka_2006_rogaine_omaps.jpg',
        info: '24-25 июня. Чемпионат и первенство России по рогейну.',
        bounds: [[53.4338784, 49.262867], [53.422423, 49.4359016], [53.3495779, 49.2469025]],
        author: ['SKRPKO_S','PZDV_S','ZKN_V','ERKHV'],
        type: ['ROGAINE'],
        region: 'SAMARA'
    },
    {
        name: 'Тольятти, Ставропольский сосняк',
        date: '2026-01-18',
        url: './maps/samara/toliatti_stavropolsky_sosniak_2026_rogaine.webp',
        link: 'https://viewer.o-gps-center.ru/newmaps/course_24013_fa3a18e75f6b9b8e078b3ac0de973b7f.jpeg',
        info: 'Соревнования по спортивному ориентированию в формате рогейн памяти Г.В. Штритера.',
        bounds: [[53.5126279, 49.301362], [53.5081617, 49.3582249], [53.4881732, 49.2959547]],
        o_gps: 24013,
        type: ['ROGAINE'],
        region: 'SAMARA'
    },
    {
        name: 'Рамено',
        year: 2004,
        major: true,
        url: './maps/samara/rameno_2004.webp',
        link: ['./original_maps/samara/rameno_2004_08_24_omaps.jpg','./original_maps/samara/rameno_2004_08_25_omaps.jpg','./original_maps/samara/rameno_2004_08_27_omaps.jpg','./original_maps/samara/rameno_2004_08_28_omaps.jpg'],
        info: '24-28 августа. Первенство России среди юниоров, юношей и девушек.',
        bounds: [[53.2717835, 48.3443928], [53.2660343, 48.397522], [53.238407, 48.3354664]],
        author: ['ZHBNCHK','ZKN_V','SKRPKO_S','ERKHV','CHRMNCH_O'],
        region: 'SAMARA'
    },
    {
        name: 'Пискалинский взвоз',
        year: 2022,
        url: './maps/samara/piskalinsky_vzvoz_2022.webp',
        link: './original_maps/samara/piskalinsky_vzvoz_2022_omaps.gif',
        bounds: [[53.4963944, 49.7769928], [53.4911606, 49.8163033], [53.4845472, 49.7724009]],
        author: 'PPV_E',
        owner: 'ZNVJV_A'
    },
    {
        name: 'Горелый хутор',
        url: './maps/samara/gorely_hutor.webp',
        link: './original_maps/samara/gorely_hutor_omaps.gif',
        bounds: [[53.3661492, 50.2406073], [53.3623847, 50.2689743], [53.347554, 50.2333117]],
        owner: 'ZNVJV_A'
    },
    {
        name: 'Лыжная база Динамо',
        year: 2021,
        url: './maps/samara/dinamo_2021.webp',
        link: './original_maps/samara/dinamo_2021_omaps.gif',
        bounds: [[53.3822533, 50.1931], [53.3784134, 50.2229691], [53.3656882, 50.1876926]],
        author: 'MLNTV',
        owner: 'ZNVJV_A'
    },
    {
        name: 'Красная глинка',
        year: 2024,
        url: './maps/samara/red_glinka_2024.webp',
        link: './original_maps/samara/red_glinka_2024_omaps.gif',
        bounds: [[53.3900599, 50.1699686], [53.3882939, 50.1837659], [53.3805766, 50.1670289]],
        author: ['KYKV','TTYNN_M'],
        owner: 'ZNVJV_A'
    },
    {
        name: 'Золотой бор',
        url: './maps/samara/golden_bor.webp',
        link: './original_maps/samara/golden_bor_omaps.gif',
        bounds: [[53.4596164, 50.12568], [53.4540714, 50.1773071], [53.4330092, 50.1179552]],
        owner: 'ZNVJV_A'
    },
    {
        name: 'Курумоч, Волжский',
        year: 2018,
        url: './maps/samara/kurumoch_2018.webp',
        link: './original_maps/samara/kurumoch_2018_omaps.gif',
        bounds: [[53.4743825, 50.0651264], [53.4670768, 50.1324177], [53.4409087, 50.055685]],
        author: 'USNKO',
        owner: 'ZNVJV_A'
    },
    {
        name: 'Мастрюково',
        year: 2010,
        url: './maps/samara/pribrezhny_2010.webp',
        link: './original_maps/samara/pribrezhny_2010_omaps.gif',
        bounds: [[53.5181652, 49.8517942], [53.5052011, 49.989295], [53.4730798, 49.8395634]],
        author: ['SKRPKO_S','CHRMNCH_A','TRNV_V','PRKPCHK','USNKO'],
        owner: 'ZNVJV_A'
    },
    {
        name: 'пл им Валерия Грушина',
        year: 2001,
        url: './maps/samara/grushina_2001.webp',
        link: './original_maps/samara/grushina_2001_omaps.gif',
        info: 'XXVIII фестиваль им.В.Грушина',
        bounds: [[53.4791842, 49.8908043], [53.4755575, 49.9283981], [53.4664636, 49.8866844]],
        author: ['MLNTV','DRBN_A','PSNV_A'],
        type: ['SPECIAL']
    },
    {
        name: 'Задельное',
        year: 2022,
        url: './maps/samara/zadelnoe_2022.webp',
        link: './original_maps/samara/zadelnoe_2022_omaps.gif',
        bounds: [[53.4981048, 49.7622299], [53.4861049, 49.84128], [53.4701423, 49.7505569]],
        author: ['USNKO','BRGNTS'],
        owner: 'ZNVJV_A'
    },
    {
        name: 'Чайка',
        url: './maps/samara/chaika.webp',
        link: './original_maps/samara/chaika_omaps.gif',
        bounds: [[53.3620005, 50.2265525], [53.3596572, 50.2436757], [53.3496675, 50.2223468]],
        owner: 'ZNVJV_A'
    },
    {
        name: 'Гора Барсук',
        year: 2022,
        url: './maps/samara/barsuk_2022.webp',
        link: './original_maps/samara/barsuk_2022_omaps.gif',
        bounds: [[53.3186207, 50.20046], [53.316621, 50.2159095], [53.306788, 50.1963186]],
        author: 'KZNN_O',
        owner: 'ZNVJV_A'
    },
    {
        name: 'Прибрежный',
        url: './maps/samara/pribrezhny.webp',
        link: './original_maps/samara/pribrezhny_omaps.gif',
        bounds: [[53.495603, 49.8421812], [53.4928329, 49.8721361], [53.4826702, 49.838748]],
        author: ['YGNV','ZNVJV_A'],
        owner: 'ZNVJV_A',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Солнечный-1',
        year: 2022,
        url: './maps/samara/solnechny_2022.webp',
        link: './original_maps/samara/solnechny_2022_omaps.gif',
        bounds: [[53.2449559, 50.1899779], [53.2438067, 50.1993763], [53.2374181, 50.1875317]],
        author: 'TTYNN_M',
        owner: 'ZNVJV_A',
        type: ['CITY','SPRINT']
    },
/*
    {
        name: 'парк Гагарина',
        year: 2026,
        url: './maps/samara/gagarina_2026.webp',
        link: './original_maps/samara/gagarina_2026_omaps.gif',
        bounds: [[53.2329102, 50.1960611], [53.2318184, 50.2064252], [53.2269246, 50.1941514]],
        author: ['MRZN_A','SHKRN_D'],
        owner: 'ZNVJV_A',
        type: ['PARK','SPRINT']
    },
    {
        name: 'Загородный парк',
        year: 2023,
        correct: 2026,
        url: './maps/samara/zagorodny_2026.webp',
        link: './original_maps/samara/zagorodny_2026_omaps.gif',
        bounds: [[53.2349651, 50.1575446], [53.2328331, 50.1764274], [53.2289798, 50.1558495]],
        author: ['MRZN_A','ZNVJV_A'],
        owner: 'ZNVJV_A',
        type: ['PARK','SPRINT']
    },
*/
    {
        name: 'Микрорайон 7А, школа №48',
        year: 2025,
        url: './maps/samara/school_48_2025.webp',
        link: './original_maps/samara/school_48_2025_omaps.gif',
        bounds: [[53.249989, 50.2168322], [53.250111, 50.2306724], [53.2425419, 50.2171648]],
        author: 'ZNVJV_A',
        owner: 'ZNVJV_A',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Мехзавод',
        year: 2025,
        url: './maps/samara/mehzavod_2025.webp',
        link: './original_maps/samara/mehzavod_2025_omaps.gif',
        bounds: [[53.3062431, 50.2676547], [53.3045698, 50.2814198], [53.2990815, 50.2651656]],
        o_gps: 23675,
        author: ['VLKV_E','KSKV_A'],
        owner: 'ZNVJV_A',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Мехзаводское клдб',
        year: 2025,
        url: './maps/samara/mehzavodskoe_winter_2025.webp',
        link: './original_maps/samara/mehzavodskoe_winter_2025_omaps.gif',
        bounds: [[53.314288, 50.2617645], [53.3121471, 50.2789307], [53.3068136, 50.2592111]],
        o_gps: 21403,
        author: 'KSKV_A',
        owner: 'ZNVJV_A',
        type: ['WINTER']
    },
];
