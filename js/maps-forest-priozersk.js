// types can be ROGAINE, SPRINT, CITY, RELIEF, WINTER, VELO
let priozerskMaps = [
    // --- ПРИОЗЕРСК - КУЗНЕЧНОЕ ---
/*
    {
        name: 'Приозерск, за кладбищем',
        url: './maps/forest/priozersk/priozersk_pogost.webp',
        bounds: [[61.0642451, 30.1254129], [61.0637468, 30.1445532], [61.0549935, 30.1236749]],
        author: ['BYMK','ZCHNV','PSHKV'],
        owner: 'VESTA_PRIOZERSK'
    },
    {
        name: 'Приозерск, у кладбища',
        url: './maps/forest/priozersk/priozersk_pogost2.webp',
        bounds: [[61.0624594, 30.1416779], [61.0613381, 30.1599169], [61.0506628, 30.1391459]],
        author: ['BYMK','ZCHNV','PSHKV'],
        owner: 'VESTA_PRIOZERSK'
    },
*/
    {
        name: 'Приозерск, о Каменистый',
        url: './maps/forest/priozersk/priozersk_kamenisty.webp',
        link: './original_maps/forest/priozersk/priozersk_kamenisty_omaps.jpg',
        bounds: [[61.0317749, 30.1083755], [61.0312552, 30.1168513], [61.0274409, 30.1072383]],
        author: ['MKHLV_A','PSHKV'],
        owner: 'VESTA_PRIOZERSK'
    },
    {
        name: 'Приозерск, яхт-клуб',
        url: './maps/forest/priozersk/priozersk_yahtklub.webp',
        link: './original_maps/forest/priozersk/priozersk_yahtklub_omaps.gif',
        bounds: [[61.0458016, 30.1754951], [61.042976, 30.2027464], [61.0377188, 30.1724482]],
        author: 'PSHKV',
        owner: 'VESTA_PRIOZERSK'
    },
    {
        name: 'Сторожевое',
        year: 2020,
        url: './maps/forest/priozersk/storozhevoe_2020.webp',
        link: './original_maps/forest/priozersk/storozhevoe_2020_omaps.jpg',
        bounds: [[61.0712002, 30.1220655], [61.0694148, 30.165925], [61.0512444, 30.1185894]],
        author: ['BYMKV','ZCHNV','PSHKV'],
        owner: 'VESTA_PRIOZERSK'
    },
    {
        name: 'Приозерск, ДРСУ',
        year: 2015,
        url: './maps/forest/priozersk/priozersk_drsu.webp',
        link: './original_maps/forest/priozersk/priozersk_drsu_2015_omaps.jpg',
        bounds: [[61.0180746, 30.1350689], [61.0160783, 30.1618481], [61.0110871, 30.1327085]],
        author: ['MKHLV_A','USNKO'],
        owner: 'VESTA_PRIOZERSK'
    },
    {
        name: 'Приозерск, старый аэродром',
        year: 2020,
        url: './maps/forest/priozersk/priozersk_aerodrom_2020.webp',
        link: './original_maps/forest/priozersk/priozersk_aerodrom_2020_omaps.jpg',
        bounds: [[61.0638298, 30.1188898], [61.0602375, 30.1474285], [61.0454484, 30.1076031]],
        author: 'RYLOV_V',
        owner: 'VESTA_PRIOZERSK'
    },
    {
        name: 'Васильево',
        year: 2002,
        url: './maps/forest/priozersk/vasilievo_2002.webp',
        link: './original_maps/forest/priozersk/vasilievo_2002_omaps.gif',
        bounds: [[60.8718905, 29.8223877], [60.870282, 29.8443174], [60.8542339, 29.8176241]],
        author: 'VRBY',
        owner: 'VESTA_PRIOZERSK'
    },
    {
        name: 'Васильево',
        year: 2024,
        url: './maps/forest/priozersk/vasilievo_2024.webp',
        link: './original_maps/forest/priozersk/vasilievo_2024_omaps.gif',
        bounds: [[60.8702088, 29.8233318], [60.8686733, 29.8359919], [60.861747, 29.8180532]],
        author: 'PSHKV',
        owner: 'VESTA_PRIOZERSK'
    },
    {
        name: 'Балахановское оз',
        year: 2012,
        area: 5,
        url: './maps/forest/priozersk/balakhanovskoe.webp',
        link: './original_maps/forest/priozersk/balakhanovskoe_omaps.jpg',
        bounds: [[60.8253354, 29.7959518], [60.818431, 29.9016953], [60.7566438, 29.7803307]],
        author: 'SHRNN',
        owner: 'SHRNN'
    },
    {
        name: 'Гранитное',
        year: 1988,
        url: './maps/forest/priozersk/granitnoe_1988.webp',
        link: './original_maps/forest/priozersk/granitnoe_1988_omaps.jpg',
        bounds: [[61.0642866, 29.9929762], [61.0627708, 30.0225019], [61.0549001, 29.989543]],
        author: 'KNSTNTNV_D'
    },
    {
        name: 'Белая дача',
        year: 1988,
        url: './maps/forest/priozersk/belaya_dacha_1989.webp',
        link: './original_maps/forest/priozersk/belaya_dacha_1989_omaps.jpg',
        bounds: [[61.0222331, 29.9827623], [61.0213391, 29.9973536], [61.0152361, 29.9822259]]
    },
    {
        name: 'Яркое',
        year: 1987,
        url: './maps/forest/priozersk/yarkoe_1987.webp',
        link: './original_maps/forest/priozersk/yarkoe_1987_omaps.jpg',
        bounds: [[61.045947, 29.9980831], [61.0452822, 30.0239182], [61.0236469, 29.9965811]],
        author: 'MLVA_M'
    },
    {
        name: 'Кузнечное - Сопкино оз',
        year: 1984,
        area: 1.9,
        url: './maps/forest/priozersk/kuznechnoe_sopkino_1984.webp',
        link: './original_maps/forest/priozersk/kuznechnoe_sopkino_1984_omaps.jpg',
        bounds: [[61.1581857, 29.8123026], [61.1561982, 29.8510551], [61.1383469, 29.8073244]],
        author: ['VLKV_K','SKLVA','TLNKV','PLBTKO','SHRNN','DJKV']
    },
    {
        name: 'Кузнечное, Берёзовское оз',
        year: 1984,
        url: './maps/forest/priozersk/kuznechnoe_berezovskoe_1984.webp',
        link: './original_maps/forest/priozersk/kuznechnoe_berezovskoe_1984_omaps.jpg',
        bounds: [[61.1538172, 29.7873688], [61.152078, 29.8178816], [61.1384919, 29.7829056]],
        author: 'OVCHNNKV'
    },
    {
        name: 'Кузнечное, оз Волковское-Суури',
        year: 1987,
        url: './maps/forest/priozersk/kuznechnoe_suuri_1987.webp',
        link: './original_maps/forest/priozersk/kuznechnoe_suuri_1987_omaps.webp',
        bounds: [[61.1431524, 29.8879623], [61.1395483, 29.9611759], [61.1217705, 29.8847008]],
        author: ['BGCHNS','VLKV_K','OVCHNNKV','SSNNA','USHNV'],
        areas: [5,35,50,5,5]
    },
    {
        name: 'Кузнечное, оз Волковское-Суури',
        year: 1978,
        info: 'Многодневные соревнования, посвящённые 61-ой годовщине Великого Октября. Первая карта в районе Кузнечного.',
        url: './maps/forest/priozersk/kuznechnoe_suuri_1978.webp',
        link: './original_maps/forest/priozersk/kuznechnoe_suuri_1978_omaps.jpg',
        bounds: [[61.1415368, 29.9107933], [61.137394, 29.9391603], [61.1311579, 29.9036264]],
        author: ['VLKV_K','OVCHNNKV'],
        logo: 'ovchnkv.jpg'
    },
    {
        name: 'Кузнечное, оз Волковское-Суури',
        year: 1979,
        url: './maps/forest/priozersk/kuznechnoe_suuri_1979.webp',
        link: ['./original_maps/forest/priozersk/kuznechnoe_suuri_1979_omaps.jpg','./original_maps/forest/priozersk/kuznechnoe_suuri_1979_course_omaps.jpg'],
        bounds: [[61.1416197, 29.8995066], [61.1373111, 29.955554], [61.1248377, 29.9014807]],
        author: ['VLKV_K','BGCHNS','OVCHNNKV','PTRV_A']
    },
    {
        name: 'Кузнечное, оз Суури, запад',
        page: 'spb',
        year: 1984,
        date: '1990-07-28',
        info: 'Ориентир-22',
        url: './maps/forest/priozersk/kuznechnoe_suuri_1984.webp',
        link: ['./original_maps/forest/priozersk/kuznechnoe_suuri_1984_omaps.jpg','./original_maps/forest/priozersk/kuznechnoe_suuri_1984_clean_omaps.jpg'],
        start: 'ORIENTIR',
        bounds: [[61.1423861, 29.9012661], [61.1406047, 29.9371004], [61.1238637, 29.8980045]],
        author: ['VLKV_K','OVCHNNKV','BGCHNS']
    },
    {
        name: 'Кузнечное, оз Суури, восток',
        year: 1984,
        url: './maps/forest/priozersk/kuznechnoe_suuri_1984_east.webp',
        link: './original_maps/forest/priozersk/kuznechnoe_suuri_1984_east_omaps.jpg',
        bounds: [[61.1426553, 29.898262], [61.1396105, 29.9542236], [61.1288579, 29.8974466]],
        author: 'OVCHNNKV'
    },
    {
        name: 'Кузнечное, оз Волковское-Суури',
        date: '2019-05-25',
        start: ['RUSSIA_2019','RUSSIA_CHAMP'],
        info: 'Кросс многодневный.',
        o_gps: {
            'М-25': 5759,
            'Ж-25': 5767,
            'М-26': 5772,
            'Ж-26': 5782,
        },
        url: './maps/forest/priozersk/kuznechnoe_suuri_2019.webp',
        link: ['./original_maps/forest/priozersk/kuznechnoe_suuri_2019_05_25.jpg','./original_maps/forest/priozersk/kuznechnoe_suuri_2019_05_26.jpg','./original_maps/forest/priozersk/kuznechnoe_suuri_2019_05_25_W.gif','./original_maps/forest/priozersk/kuznechnoe_suuri_2019_05_26_W.gif'],
        bounds: [[61.1443537, 29.889164], [61.1368968, 29.9695015], [61.1247963, 29.8794651]],
        owner: 'SHEIN',
        author: 'CHGRVSKY_V'
    },
    {
        name: 'Кузнечное, запад',
        year: 2008,
        area: 35,
        logo: 'mourning.webp',
        url: './maps/forest/priozersk/kuznechnoe_west_2008.webp',
        link: './original_maps/forest/priozersk/kuznechnoe_2008_omaps.webp',
        bounds: [[61.1581029, 29.7423935], [61.143898, 29.9394608], [61.0838192, 29.7188759]],
        author: ['KUZNTSV_S','NSNV','KVZN','TKMKV_K','SHRNN'],
        owner: 'TOKM'
    },
    {
        name: 'Кузнечное, Богатыри',
        year: 1998,
        url: './maps/forest/priozersk/kuznechnoe_bogatyri_1998.webp',
        link: './original_maps/forest/priozersk/kuznechnoe_bogatyri_1998_omaps.webp',
        bounds: [[61.1179152, 29.8037624], [61.1124424, 29.8916531], [61.0876164, 29.7939348]],
        author: ['KUZNTSV_S','KVZN','VLKV_K','SHRNN']
    },
    {
        name: 'Кузнечное, юго-восток',
        year: 2003,
        url: './maps/forest/priozersk/kuznechnoe_se.webp',
        link: './original_maps/forest/priozersk/kuznechnoe_se_2003.pdf',
        bounds: [[61.1015355, 29.9406624], [61.0973459, 30.005722], [61.0734006, 29.932251]],
        author: ['KUZNTSV_S','NSNV','KVZN','TKMKV_K'],
        owner: 'TOKM'
    },
    {
        name: 'Кузнечное',
        start: 'KZNTSVA',
        page: 'spb',
        date: '2013-08-24',
        o_site: '13082425',
        url: './maps/starts/psk/psk_2013_08_24.webp',
        link: './original_maps/forest/priozersk/kuznechnoe_travkino_2013_08_24_omaps.gif',
        bounds: [[61.1523057, 29.8127317], [61.1493447, 29.8498535], [61.1394655, 29.8071098]],
        author: ['KVZN','KUZNTSV_S','NSNV','TKMKV_K']
    },
    {
        name: 'Кузнечное, оз Травкино',
        date: '2019-05-24',
        start: ['RUSSIA_2019','RUSSIA_CHAMP'],
        info: 'Кросс-классика.',
        o_gps: {
            'М': 5759,
            'Ж': 5760
        },
        url: './maps/forest/priozersk/kuznechnoe_travkino_2019_05_24.webp',
        link: ['./original_maps/forest/priozersk/kuznechnoe_travkino_2019_05_24.jpg','./original_maps/forest/priozersk/kuznechnoe_travkino_2019_05_24_W.gif'],
        bounds: [[61.150877, 29.8237181], [61.1484335, 29.8504543], [61.1387301, 29.8187399]],
        author: 'SBLV_S'
    },
    {
        name: 'о Койонсаари',
        year: 2025,
        url: './maps/forest/priozersk/koyonsaari_2025.webp',
        bounds: [[61.2960491, 30.0861454], [61.2892878, 30.1454544], [61.2750182, 30.0762749]],
        author: 'VRBY',
        owner: 'WN'
    },
    {
        name: 'Воробьёво оз',
        year: 2024,
        info: '2011-2024гг.',
        url: './maps/forest/priozersk/vorobjevo_2024.webp',
        bounds: [[60.9403142, 30.2584076], [60.9322671, 30.3543663], [60.9007678, 30.2446747]],
        author: ['MKHLV_A','SLBDNK','SBLV_S','USNKO'],
        owner: 'WN'
    },
    {
        name: 'Заветное',
        year: 2018,
        url: './maps/forest/priozersk/zavetnoe_2018.webp',
        bounds: [[61.0115239, 29.6434093], [61.0107959, 29.6566916], [61.0033803, 29.6396542]],
        author: 'ELZRV',
        owner: 'ELZRV'
    },
    {
        name: 'т/б "Лена-Ладога"',
        year: 2021,
        url: './maps/forest/priozersk/lena-ladoga_2021.webp',
        bounds: [[61.4181198, 30.1851726], [61.4165491, 30.200386], [61.4130687, 30.1834345]],
        author: 'DRBSHV',
        owner: 'LENA',
        region: 'KARELIA'
    },
];