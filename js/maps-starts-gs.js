let gsStartsMaps = [
    /* --- Зелёный Змей --- */
    {
        name: 'Лемболово',
        start: 'GS',
        date: '1990-08-26',
        url: './maps/starts/gs/gs_1990.webp',
        link: './original_maps/starts/gs/gs_1990_omaps.jpg',
        bounds: [[60.446847540990575, 30.304541587829593], [60.44195755718785, 30.37955760955811], [60.42006003635948, 30.29788970947266]],
        author: 'BYMKV'
    },
    {
        name: 'Орехово-Лемболово',
        start: 'GS',
        year: 1991,
        url: './maps/starts/gs/gs_1991.webp',
        link: './original_maps/starts/gs/gs_1991_omaps.jpg',
        bounds: [[60.455313304927685, 30.23712158203125], [60.45078439568225, 30.2959156036377], [60.42584292328806, 30.229139328002933]],
        author: 'BYMKV'
    },
    {
        name: 'Токсово, ВИФК',
        start: 'GS',
        year: 2002,
        url: './maps/starts/gs/gs_2002.webp',
        link: './original_maps/starts/gs/gs_2002_omaps.jpg',
        bounds: [[60.20383377832825, 30.564136505126957], [60.201914443683314, 30.5925464630127], [60.18230947673799, 30.558514595031742]],
        author: 'CHGRVSKY_V'
    },
    {
        name: 'Лемболово, оз Горынское',
        start: 'GS',
        year: 2004,
        url: './maps/starts/gs/gs_2004.webp',
        link: './original_maps/starts/gs/gs_2004_omaps.jpg',
        bounds: [[60.45457263866845, 30.305871963500977], [60.44947216379834, 30.36252021789551], [60.418153364710165, 30.29634475708008]],
        author: ['VSLVSKY','BRDR','DRBSHV']
    },
    {
        name: 'Лемболово',
        start: 'GS',
        date: '2011-08-28',
        info: '<a href="https://o-site.spb.ru/race.php?id=110828_Az">Инфо и результаты.</a>',
        url: './maps/starts/gs/gs_2011_08_28.webp',
        link: './original_maps/starts/gs/gs_2011_08_28_omaps.jpg',
        bounds: [[60.42565229505659, 30.284714698791507], [60.42357649308147, 30.319132804870605], [60.40047955623369, 30.277547836303714]],
        planner: 'GBNV_V'
    },
    {
        name: 'Петяярви',
        start: 'GS',
        date: '2013-08-25',
        info: '<a href="https://o-site.spb.ru/race.php?id=130825_ZZ">Инфо и результаты.</a>',
        url: './maps/starts/gs/gs_2013_08_25.webp',
        link: './original_maps/starts/gs/gs_2013_08_25_omaps.jpg',
        bounds: [[60.633511306541614, 30.091252326965332], [60.63014386155463, 30.136699676513675], [60.61467014191949, 30.08618831634522]],
        planner: 'GBNV_V'
    },
    {
        name: 'Токсово, оз Светлое',
        start: 'GS',
        date: '2016-08-27',
        info: '<a href="https://o-site.spb.ru/race.php?id=160827_ZZ">Инфо и результаты.</a>',
        url: './maps/starts/gs/gs_2016_08_27.webp',
        link: './original_maps/starts/gs/gs_2016_08_27_omaps.jpg',
        bounds: [[60.16079241028155, 30.436635017395023], [60.156969949585005, 30.483756065368652], [60.1451367232347, 30.432343482971195]],
        author: 'DBRTSV_V',
        planner: 'GBNV_V'
    },
    {
        name: 'Лемболово, оз Белое',
        start: 'GS',
        date: '2020-08-29',
        info: '<a href="https://o-site.spb.ru/race.php?id=200829ZZ">Инфо и результаты.</a>',
        url: './maps/starts/gs/gs_2020_08_29.webp',
        link: './original_maps/starts/gs/gs_2020_08_29_omaps.jpeg',
        bounds: [[60.44708037900465, 30.316772460937504], [60.44422270611994, 30.352392196655277], [60.42586410413369, 30.310678482055668]],
        author: ['TKMKV_K','KVZN','NSNV','MLNKV_L','VRBY'],
        planner: 'PRVSKY'
    },
    {
        name: 'Лемболово',
        start: 'GS',
        date: '2021-08-21',
        info: '<a href="https://o-site.spb.ru/race.php?id=210821ZZ">Инфо и результаты.</a>',
        url: './maps/starts/gs/gs_2021_08_21.webp',
        link: './original_maps/starts/gs/gs_2021_08_21_omaps.jpg',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/10764/',
        bounds: [[60.42624535699542, 30.280294418334964], [60.42207251294831, 30.332393646240234], [60.408766673833426, 30.274586677551273]],
        author: ['TKMKV_K','KVZN','NSNV','MLNKV_L','VRBY'],
        planner: 'PRVSKY'
    },
    {
        name: 'Пухтолова гора',
        start: 'GS',
        date: '2022-08-20',
        info: '<a href="https://o-site.spb.ru/race.php?id=220820ZZ">Инфо и результаты.</a>',
        url: './maps/starts/gs/gs_2022_08_20.webp',
        link: './original_maps/starts/gs/gs_2022_08_20_omaps.jpg',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/16563/',
        bounds: [[60.24209039694797, 29.644289016723636], [60.239022989201736, 29.682998657226566], [60.22860443987542, 29.63943958282471]],
        author: 'MKHLV_A',
        planner: 'PRVSKY'
    },
    {
        name: 'оз Журавлёвское',
        start: 'GS',
        date: '2023-08-26',
        info: '<a href="https://o-site.spb.ru/race.php?id=230826ZZ">Инфо и результаты.</a>',
        url: './maps/starts/gs/gs_2023_08_26.webp',
        link: './original_maps/starts/gs/gs_2023_08_26_omaps.jpg',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/17075/',
        bounds: [[60.63304830371036, 29.831829071044925], [60.61582829627545, 29.87264156341553], [60.61911301699879, 29.806380271911625]],
        author: ['MKHLV_A','SLBDNK'],
        planner: 'PRVSKY'
    },
    {
        name: 'Ягодное',
        start: 'GS',
        date: '2024-09-01',
        info: '<a href="https://o-site.spb.ru/race.php?id=240901ZZ">Инфо и результаты.</a>',
        url: './maps/starts/gs/gs_2024_09_01.webp',
        link: './original_maps/starts/gs/gs_2024_09_01_omaps.jpg',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/20345/',
        bounds: [[60.63527907437371, 29.95782852172852], [60.63119622589342, 29.999842643737797], [60.62008152464803, 29.95156288146973]],
        author: ['MKHLV_A','SLBDNK','TKMKV_K'],
        planner: 'KSRKV'
    },
];