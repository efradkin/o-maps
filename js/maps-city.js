// types can be ROGAINE, SPRINT, CITY, RELIEF
let cityMaps = [
    // --- городские кварталы ---
    {
        name: 'Военная Академия Связи',
        year: 2022,
        hidden: true,
        url: './maps/city/vas_2022.webp',
        bounds: [[60.01515102114781, 30.371618270874027], [60.01509740149573, 30.379385948181156], [60.009359596215326, 30.371489524841312]],
        author: 'SHRNN',
        owner: 'SHRNN',
        type: ['CITY']
    },
    {
        name: 'ВИФК',
        year: 2014,
        hidden: true,
        url: './maps/city/vifk_2024.webp',
        bounds: [[59.97678002927403, 30.339238643646244], [59.97676929290612, 30.346212387084964], [59.973569700167744, 30.339260101318363]],
        author: 'SHRNN',
        owner: 'SHRNN',
        type: ['CITY']
    },
    {
        name: 'Сад Жореса Алфёрова',
        date: '2023-05-10',
        url: './maps/city/sad_zhoresa_alferova_2023.webp',
        //link: './original_maps/city/sad_zhoresa_alferova_2023_st_omaps.gif',
        info: '<a href="https://reskeep.ru/event/get?id=586">Результаты.</a>',
        bounds: [[60.006302601835436, 30.42150735855103], [60.004940271210984, 30.44169902801514], [59.999404555388885, 30.41974782943726]],
        author: 'DBRTSV_V',
        start: 'ST',
        owner: 'NW',
        type: ['CITY']
    },
    {
        name: 'Лицей №470',
        date: '2020-10-31',
        url: './maps/city/school_470_2020.webp',
        link: ['./original_maps/schools/school_470_2020_st_omaps.gif','./original_maps/schools/school_470_2022_st_omaps.gif'],
        info: '<a href="https://reskeep.ru/event/get?id=388">Результаты.</a>',
        bounds: [[60.01080754755248, 30.389385223388675], [60.00952048282834, 30.403633117675785], [60.000702742446485, 30.385394096374515]],
        author: 'CHGRVSKY_M',
        start: 'ST',
        owner: 'KUZM',
        type: ['CITY']
    },
    {
        name: 'Школа №71',
        date: '2021-09-01',
        url: './maps/city/school_71_2021.webp',
        link: './original_maps/schools/school_71_2021_st_omaps.gif',
        info: '<a href="https://reskeep.ru/event/get?id=485">Результаты.</a>',
        bounds: [[60.02096287578616, 30.387411117553714], [60.01921513764612, 30.404083728790287], [60.01404643875856, 30.384900569915775]],
        author: 'CHGRVSKY_Y',
        start: 'ST',
        owner: 'KUZM',
        type: ['CITY']
    },
    {
        name: 'ул Вавиловых, Школа №98',
        date: '2022-06-01',
        url: './maps/city/school_98_2022.webp',
        link: './original_maps/city/severny_2022_st_omaps.gif',
        info: '<a href="https://reskeep.ru/event/get?id=519">Результаты.</a>',
        bounds: [[60.026141213662754, 30.387153625488285], [60.02388986211038, 30.407431125640873], [60.018914903388506, 30.384857654571537]],
        author: 'CHGRVSKY_Y',
        start: 'ST',
        owner: 'KUZM',
        type: ['CITY']
    },
    {
        name: 'ЖК Академ Парк',
        date: '2022-11-12',
        url: './maps/city/akadem_park_2022.webp',
        link: ['./original_maps/city/akadem_park_2020_st_1.pdf','./original_maps/city/akadem_park_2020_st_2.pdf','./original_maps/city/akadem_park_2022_st_omaps.gif'],
        info: '<a href="https://reskeep.ru/event/get?id=564">Результаты.</a>',
        bounds: [[60.00842643842314, 30.398890972137455], [60.00738599006695, 30.40973782539368], [60.000461347882606, 30.396466255187992]],
        author: 'DBRTSV_V',
        start: 'ST',
        owner: 'KUZM',
        type: ['SPRINT','CITY']
    },
    {
        name: 'Сад Олимпия',
        year: 2023,
        url: './maps/city/olimpia_2023.webp',
        bounds: [[59.91900024244188, 30.31836032867432], [59.91897873224253, 30.330290794372562], [59.909943215870214, 30.318703651428226]],
        author: 'GRBTNKV',
        owner: 'WN',
        type: ['SPRINT','CITY']
    },
    {
        name: 'Обводный кан, ул Егорова',
        year: 2024,
        url: './maps/city/egorova_2024.webp',
        bounds: [[59.916117751493246, 30.30711650848389], [59.91617153160115, 30.31836032867432], [59.90902877062958, 30.30711650848389]],
        author: 'GRBTNKV',
        owner: 'WN',
        type: ['SPRINT','CITY']
    },
    {
        name: 'Колтуши',
        year: 2017,
        url: './maps/city/koltushi_2017.webp',
        link: './original_maps/city/koltushi_2017_omaps.jpg',
        photo: './tracks/pavlovo/pic_4.jpg',
        bounds: [[59.946156497905406, 30.643272399902347], [59.94478094366959, 30.664515495300297], [59.93089324727928, 30.63893795013428]],
        author: 'DBRTSV_V',
        owner: 'SHEIN',
        type: ['CITY', 'PARK']
    },
    {
        name: 'Лицей №126',
        year: 2009,
        url: './maps/city/school_126_2012.webp',
        link: './original_maps/schools/school_126_2012_omaps.jpg',
        bounds: [[59.97747788572093, 30.3892993927002], [59.97778923231374, 30.402109622955326], [59.97103557512989, 30.390093326568607]],
        author: 'SHRNN',
        owner: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'Гимназия №101',
        date: '2012-09-19',
        url: './maps/city/school_101_2011.webp',
        link: ['./original_maps/schools/school_101_2011_omaps.jpg','./original_maps/starts/st/st_2012_school_101.jpg'],
        bounds: [[60.035573780830404, 30.32883167266846], [60.035573780830404, 30.34408807754517], [60.030579143213664, 30.328660011291507]],
        author: 'SHRNN',
        owner: 'SHEIN',
        start: 'ST',
        type: ['CITY']
    },
    {
        name: 'Гимназия №144',
        year: 2009,
        url: './maps/city/school_144_2013.webp',
        link: './original_maps/schools/school_144_2013_omaps.jpg',
        bounds: [[60.047939225571504, 30.403182506561283], [60.0469857295227, 30.418052673339847], [60.04245356846846, 30.40225982666016]],
        author: 'SHRNN',
        owner: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'Школа №92',
        year: 2012,
        url: './maps/city/school_92_2012.webp',
        link: './original_maps/schools/school_92_2012_omaps.jpg',
        bounds: [[60.02176701873349, 30.32037734985352], [60.02221733023808, 30.340676307678226], [60.01241630800898, 30.320291519165043]],
        author: 'SHRNN',
        owner: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'Дрезденская ул',
        year: 2023,
        date: '2025-05-21',
        start: 'ST',
        info: '<a href="https://t.me/KuzmolovoDragons/26">Инфо и результаты.</a>',
        url: './maps/city/drezdenskaya_2023.webp',
        link: ['./original_maps/city/drezdenskaya_2023_omaps.jpg','./original_maps/city/gdanskaya_2025.jpg'],
        bounds: [[60.022635471141434, 30.321493148803714], [60.020480380626545, 30.342693328857425], [60.01349949595348, 30.31784534454346]],
        gps: {
            'Невский Спринт': 'https://viewer.o-gps-center.ru/viewer/event/17533/'
        },
        author: 'ZCHNV',
        owner: 'SFSO_SPB',
        planner: 'GRLNV',
        type: ['CITY']
    },
    {
        name: 'Школа №332',
        year: 2013,
        url: './maps/city/school_332_2013.webp',
        bounds: [[59.92493652455641, 30.480773448944095], [59.92362461159104, 30.49736022949219], [59.915504652103806, 30.477318763732914]],
        author: 'MNKV',
        owner: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'пр Солидарности, Школа №332',
        date: '2021-09-15',
        url: './maps/city/school_332_2021.webp',
        link: './original_maps/city/solidarnosty_2021_st_omaps.gif',
        bounds: [[59.92489351183903, 30.481460094451908], [59.923603104388974, 30.495793819427494], [59.91602094707937, 30.478541851043705]],
        start: 'ST',
        author: ['MNKV','MSLVA'],
        owner: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'Школа №156',
        year: 2013,
        url: './maps/city/school_156_2013.webp',
        link: './original_maps/schools/school_156_2013_omaps.jpg',
        bounds: [[59.99765567740504, 30.426700115203857], [59.99798829322108, 30.43697834014893], [59.991603631550845, 30.427644252777103]],
        author: 'MSPN',
        owner: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'Школа №175',
        year: 2014,
        url: './maps/city/school_175_2014.webp',
        link: './original_maps/schools/school_175_2014_omaps.jpg',
        bounds: [[60.040503369230905, 30.421657562255863], [60.03946393028264, 30.434081554412845], [60.03411619638205, 30.419554710388187]],
        author: ['MSPN','SHRNN'],
        owner: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'Школа №136',
        year: 2014,
        url: './maps/city/school_136_2014.webp',
        link: './original_maps/schools/school_136_2014_omaps.jpg',
        bounds: [[60.04160706756014, 30.38706779479981], [60.04166064421021, 30.398805141448978], [60.03331235391477, 30.38702487945557]],
        author: 'MSPN',
        owner: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'Канонерский о-в',
        year: 2014,
        url: './maps/city/kanonerka_2014.webp',
        link: './original_maps/city/kanonerka_2014_omaps.jpg',
        bounds: [[59.90541377581667, 30.20770311355591], [59.90543529480735, 30.223066806793216], [59.896665151030554, 30.207660198211673]],
        author: 'RYLOV_V',
        owner: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'Бумажная ул',
        year: 2015,
        url: './maps/city/bumazhnaya_2015.webp',
        link: './original_maps/city/bumazhnaya_2015_omaps.jpg',
        bounds: [[59.909061045596246, 30.261797904968265], [59.90903952895528, 30.276045799255375], [59.901088175579964, 30.26244163513184]],
        author: 'RYLOV_V',
        owner: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'Выборгская',
        year: 2015,
        url: './maps/city/vyborgskaya_2015.webp',
        link: './original_maps/city/vyborgskaya_2015_omaps.jpg',
        bounds: [[59.97443941872372, 30.339260101318363], [59.97404214271112, 30.351254940032963], [59.97046644411359, 30.338702201843265]],
        author: 'SHRNN',
        owner: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'Удельная',
        year: 2015,
        url: './maps/city/udelnaya_2015.webp',
        link: './original_maps/city/udelnaya_2020_st_omaps.gif',
        bounds: [[60.01803563023218, 30.314669609069828], [60.0163199079499, 30.33213615417481], [60.00377098206522, 30.310378074646]],
        start: 'ST',
        author: 'DBRTSV_V',
        owner: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'Ломоносовская',
        year: 2015,
        url: './maps/city/lomonosovskaya_2015.webp',
        link: './original_maps/city/lomonosovskaya_2015_omaps.jpg',
        bounds: [[59.88062540310008, 30.434575080871586], [59.87946248953721, 30.452041625976566], [59.87041621736219, 30.43019771575928]],
        author: 'MNKV',
        start: 'ST',
        owner: 'KUZM',
        type: ['CITY']
    },
    {
        name: 'Политехническая',
        year: 2015,
        url: './maps/city/politekhnicheskaya_2015.webp',
        link: './original_maps/city/politekhnicheskaya_2015_omaps.jpg',
        bounds: [[60.02562663254445, 30.36728382110596], [60.0253478977596, 30.384922027587894], [60.010142570366924, 30.367884635925297]],
        author: 'SHRNN',
        owner: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'Нарвская',
        year: 2011,
        date: '2016-05-25',
        url: './maps/city/narvskaya_2016.webp',
        link: './original_maps/city/narvskaya_2016_omaps.jpg',
        bounds: [[59.89892516416984, 30.259094238281254], [59.89888211773708, 30.27570247650147], [59.893479347569645, 30.259008407592777]],
        start: 'ST',
        owner: 'KUZM',
        type: ['CITY'],
        author: 'ZSLNKN'
    },
    {
        name: 'Нарвская, Ушаковский сквер',
        date: '2025-09-10',
        url: './maps/city/narvskaya_2025.webp',
        link: './original_maps/city/narvskaya_2025_omaps.gif',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/23375/',
        bounds: [[59.90039947081465, 30.260939598083496], [59.89875297810411, 30.27718305587769], [59.89376995717028, 30.25797843933106]],
        start: 'ST',
        owner: 'KUZM_CHGRVSKY',
        planner: 'CHGRVSKY_M',
        type: ['CITY'],
        author: 'ZCHNV'
    },
    {
        name: 'Новочеркасская',
        date: '2022-04-20',
        url: './maps/city/novocherkasskaya_2020.webp',
        link: ['./original_maps/city/novocherkasskaya_2020_st_omaps.gif','./original_maps/city/novocherkasskaya_2022_st_omaps.gif'],
        // info: '<a href="https://reskeep.ru/event/get?id=516">Результаты.</a>',
        bounds: [[59.92931277708212, 30.401487350463867], [59.92768922249184, 30.42137861251831], [59.922258876596885, 30.39897680282593]],
        author: 'DBRTSV_V',
        start: 'ST',
        owner: 'KUZM',
        type: ['CITY']
    },
    {
        name: 'Оккервиль',
        date: '2024-04-23',
        url: './maps/city/okkervil_2024.webp',
        link: ['./original_maps/city/okkervil_2021_st_omaps.gif','./original_maps/city/okkervil_2024_st_omaps.gif'],
        info: '<a href="https://reskeep.ru/event/get?id=643">Результаты.</a>',
        bounds: [[59.93202210846225, 30.417537689208988], [59.931914599528554, 30.434296131134037], [59.92530213040293, 30.417301654815677]],
        author: 'RDNV_B',
        start: 'ST',
        owner: 'KUZM',
        type: ['CITY']
    },
    {
        name: 'Посадский округ',
        year: 2013,
        url: './maps/city/posadsky_okrug_2013.webp',
        link: './original_maps/city/posadsky_okrug_2013_omaps.jpg',
        bounds: [[59.96178866951323, 30.318253040313724], [59.96041376394808, 30.3343677520752], [59.95477390588266, 30.31557083129883]],
        author: 'MNKV',
        owner: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'Бугры',
        year: 2011,
        url: './maps/city/bugry_2011.webp',
        link: './original_maps/city/bugry_2011_omaps.jpg',
        bounds: [[60.07837234257643, 30.390093326568607], [60.07671327270675, 30.408353805541996], [60.06514027712318, 30.38477182388306]],
        author: ['MSPN','SHRNN'],
        areas: [80, 20],
        owner: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'Озерки',
        year: 2013,
        url: './maps/city/ozerki_2013.webp',
        link: './original_maps/city/ozerki_2019_st_omaps.gif',
        bounds: [[60.04519651093916, 30.315742492675785], [60.044307222520395, 30.32911062240601], [60.0348664317041, 30.31188011169434]],
        start: 'ST',
        author: 'MNKV',
        owner: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'Наб. р. Смоленки',
        date: '2023-04-12',
        url: './maps/city/smolenka_2014.webp',
        link: ['./original_maps/city/smolenka_2019_st_omaps.gif','./original_maps/city/smolenka_2023_st_omaps.gif'],
        bounds: [[59.94990674255339, 30.21566390991211], [59.94840239738082, 30.23317337036133], [59.94029925002984, 30.212059020996097]],
        author: 'MNKV',
        owner: 'SHEIN',
        start: 'ST',
        type: ['CITY']
    },
    {
        name: 'Покровский о-в',
        year: 2014,
        url: './maps/city/pokrovsky_island_2014.webp',
        link: './original_maps/city/pokrovsky_island_2014_omaps.jpg',
        bounds: [[59.9224309407933, 30.28314828872681], [59.921022138933154, 30.301859378814697], [59.915816581278484, 30.28093814849854]],
        author: 'MNKV',
        owner: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'Петроградский о-в',
        year: 2024,
        info: '2019-2024 гг.',
        url: './maps/city/petrogradka_2024.webp',
        bounds: [[59.97024093666594, 30.28518676757813], [59.9699617348415, 30.33883094787598], [59.947338569228016, 30.28535842895508]],
        author: 'GRBTNKV',
        owner: 'WN',
        type: ['CITY']
    },
    {
        name: 'Введенская ул',
        year: 2019,
        url: './maps/city/vvedenskaya_2019.webp',
        link: './original_maps/city/vvedenskaya_2019_st_omaps.gif',
        bounds: [[59.956696936767145, 30.29660224914551], [59.95679362252437, 30.307717323303226], [59.950809316886684, 30.29653787612915]],
        author: 'RDNV_B',
        owner: 'RDNV_B',
        start: 'ST',
        type: ['CITY']
    },
/*
    {
        name: 'Покровский о-в',
        year: 2022,
        url: './maps/city/pokrovsky_island_2022.webp',
        bounds: [[59.92167815334707, 30.281796455383304], [59.921656644883385, 30.29967069625855], [59.91620379962411, 30.281732082366947]],
        author: 'GRBTNKV',
        owner: 'WN',
        type: ['CITY']
    },
*/
    {
        name: 'Коломенский о-в',
        year: 2016,
        url: './maps/city/kolomensky_island_2016.webp',
        link: './original_maps/city/kolomensky_island_2016_omaps.jpg',
        bounds: [[59.92428057455758, 30.27720451354981], [59.92340953894306, 30.28814792633057], [59.91696746701024, 30.27417898178101]],
        author: 'MNKV',
        owner: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'Коломна',
        year: 2023,
        url: './maps/city/kolomensky_island_2023.webp',
        bounds: [[59.925216105860315, 30.27411460876465], [59.92530213040293, 30.307760238647464], [59.91560145802346, 30.2742862701416]],
        author: 'GRBTNKV',
        owner: 'WN',
        type: ['CITY']
    },
    {
        name: 'Любашинский сад',
        year: 2016,
        url: './maps/city/ljubashinsky_sad_2016.webp',
        link: './original_maps/city/ljubashinsky_sad_2020_st_omaps.gif',
        bounds: [[59.971733552646455, 30.395371913909916], [59.97026241363188, 30.41146516799927], [59.96472089467718, 30.392646789550785]],
        start: 'ST',
        author: 'DBRTSV_V',
        owner: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'Полюстрово, школа №188',
        year: 2023,
        url: './maps/city/poljustrovo_2023.webp',
        link: './original_maps/city/poljustrovo_2023_omaps.jpg',
        bounds: [[59.97492258582917, 30.42742967605591], [59.97373076088295, 30.43865203857422], [59.96792134236893, 30.424425601959232]],
        type: ['CITY'],
        author: 'RDNV_I',
        owner: 'RDNV_I'
    },
    {
        name: 'Полюстрово, школа №188',
        year: 2016,
        url: './maps/city/school_188_2016.webp',
        link: ['./original_maps/schools/school_188_2016_omaps.gif','./original_maps/schools/school_188_2016_omaps.ocd'],
        bounds: [[59.97220602138547, 30.427021980285648], [59.972195283534425, 30.433244705200195], [59.96838312640672, 30.427064895629886]],
        type: ['CITY'],
        author: 'VSLVSKY',
        owner: 'VSLVSKY'
    },
    {
        name: 'ДДЮТ На Ленской',
        year: 2020,
        url: './maps/city/ddyt_na_lenskoy_2020.webp',
        link: ['./original_maps/city/ddyt_na_lenskoy_2020_omaps.gif','./original_maps/city/ddyt_na_lenskoy_2020_omaps.ocd'],
        bounds: [[59.944146879921945, 30.479035377502445], [59.943921193288915, 30.482532978057865], [59.9417824675087, 30.478713512420658]],
        type: ['CITY'],
        author: 'VSLVSKY',
        owner: 'VSLVSKY'
    },
    {
        name: 'Серебряный пруд',
        year: 2016,
        url: './maps/city/serebrjany_prud_2016.webp',
        link: './original_maps/city/serebrjany_prud_2016_omaps.jpg',
        bounds: [[60.010839723528704, 30.3408694267273], [60.00955266005702, 30.35509586334229], [60.00153956329607, 30.337908267974857]],
        author: 'MNKV',
        owner: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'Серебряный пруд',
        date: '2024-05-19',
        start: 'RUSSIA_2024',
        info: 'Кросс-спринт-общий старт.',
        gps: {
            'М': 'https://viewer.o-gps-center.ru/viewer/event/19474/',
            'Ж': 'https://viewer.o-gps-center.ru/viewer/event/19473/'
        },
        url: './maps/city/serebrjany_prud_2024.webp',
        link: ['./original_maps/city/serebrjany_prud_2024_omaps.gif','./original_maps/city/serebrjany_prud_2024_05_19.jpeg','./original_maps/city/serebrjany_prud_2024_05_19_W.jpeg'],
        bounds: [[60.00904854654385, 30.342221260070804], [60.007686329035806, 30.3547739982605], [60.0013893662409, 30.3388524055481]],
        author: ['MNKV','KUZNTSV_A'],
        owner: 'SFSO_SPB',
        type: ['CITY']
    },
    {
        name: 'Серебряный пруд',
        year: 2018,
        url: './maps/city/serebrjany_prud_2018.webp',
        link: './original_maps/city/serebrjany_prud_2018_st_omaps.gif',
        bounds: [[60.00894128735802, 30.330033302307132], [60.007267999011475, 30.350718498229984], [60.001904324733495, 30.32835960388184]],
        author: 'MNKV',
        start: 'ST',
        owner: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'ул Сантьяго-де-Куба, ДДЮТ Выборгского р-она',
        date: '2022-05-18',
        url: './maps/city/vyborgsky_ddjut_2017.webp',
        link: './original_maps/city/santjago_de_kuba_2022_st_omaps.gif',
        bounds: [[60.03973183004802, 30.34361600875855], [60.03986042116352, 30.356683731079105], [60.030986459538205, 30.34320831298828]],
        start: 'ST',
        author: 'SRBRNTSKY',
        owner: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'ЦФКиЗ Московского р-она',
        year: 2016,
        url: './maps/city/tsfkiz_moskovsky_2016.webp',
        link: './original_maps/city/tsfkiz_moskovsky_2016_omaps.jpg',
        bounds: [[59.851357147520275, 30.347199440002445], [59.85077518391201, 30.354130268096927], [59.8480807753212, 30.346212387084964]],
        author: 'TKMKVA_P',
        type: ['CITY']
    },
    {
        name: 'Яблоневый сад',
        year: 2014,
        url: './maps/city/apple_garden_2014.webp',
        link: './original_maps/city/apple_garden_2014_omaps.jpg',
        bounds: [[59.86798191914129, 30.36058902740479], [59.866969370948034, 30.383205413818363], [59.85526897207686, 30.356640815734867]],
        author: ['FDRV_L','URVNTSV'],
        owner: 'EGRV_EGR',
        type: ['CITY']
    },
    {
        name: 'Школа №536',
        date: '2013-09-11',
        url: './maps/city/kosmonavtov_2013.webp',
        link: './original_maps/city/kosmonavtov_2013_omaps.jpg',
        bounds: [[59.865385856119765, 30.348358154296875], [59.86585984125349, 30.359086990356445], [59.85591551036147, 30.349946022033695]],
        author: ['FDRV_L','SHEIN'],
        start: 'ST',
        owner: 'KUZM',
        type: ['CITY']
    },
    {
        name: 'ул Рубинштейна',
        year: 2015,
        url: './maps/city/5_uglov_2015.webp',
        link: './original_maps/city/5_uglov_2019_st_omaps.gif',
        bounds: [[59.93348419536735, 30.337951183319095], [59.932710157386865, 30.348916053771976], [59.92674300833662, 30.335676670074466]],
        start: 'ST',
        type: ['CITY'],
        author: 'YGNV',
        owner: 'SHEIN'
    },
/*
    {
        name: 'Литейный пр.',
        year: 2021,
        url: './maps/city/litejny_2021.webp',
        bounds: [[59.9482627047221, 30.336771011352543], [59.948327178330025, 30.34878730773926], [59.93826777930315, 30.33655643463135]],
        author: 'GRBTNKV',
        owner: 'WN',
        type: ['CITY']
    },
*/
    {
        name: 'Литейный пр.',
        year: 2024,
        url: './maps/city/litejny_2024.webp',
        info: '2021-2024 гг.',
        bounds: [[59.95084155122974, 30.323209762573246], [59.95118538227185, 30.387325286865238], [59.927409662027465, 30.323038101196293]],
        author: 'GRBTNKV',
        owner: 'WN',
        type: ['CITY']
    },
    {
        name: 'Литейный пр.',
        year: 2012,
        url: './maps/city/litejny_2012.webp',
        link: './original_maps/city/litejny_2012_omaps.jpg',
        bounds: [[59.9468979839351, 30.33756494522095], [59.946854999690565, 30.349023342132572], [59.94200816870012, 30.337500572204593]],
        author: 'RYLOV_V',
        owner: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'Кавалергардская ул',
        year: 2012,
        url: './maps/city/kavalergardskaya_2012.webp',
        link: './original_maps/city/kavalergardskaya_2012_omaps.jpg',
        bounds: [[59.9488751989346, 30.37754058837891], [59.948885944346074, 30.391466617584232], [59.94222312078742, 30.37754058837891]],
        author: 'RYLOV_V',
        owner: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'АВРОРА',
        year: 2013,
        url: './maps/city/avrora_2013.webp',
        link: './original_maps/city/avrora_2013_omaps.jpg',
        bounds: [[59.95791085969932, 30.323960781097416], [59.95791085969932, 30.338487625122074], [59.95133580723119, 30.32413244247437]],
        author: 'RYLOV_V',
        owner: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'Кузьмолово, Юбилейная ул',
        year: 2011,
        url: './maps/city/kuzmolovo_jubilejnaya_2011.webp',
        link: './original_maps/city/kuzmolovo_jubilejnaya_2011.jpg',
        bounds: [[60.12505962862844, 30.496330261230472], [60.1247389795779, 30.504248142242435], [60.11923401709187, 30.495235919952396]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        type: ['CITY']
    },
    {
        name: 'Кузьмолово',
        year: 2013,
        url: './maps/city/kuzmolovo_2013.webp',
        link: './original_maps/city/kuzmolovo_2013_omaps.jpg',
        bounds: [[60.11301176687593, 30.482983589172367], [60.112883460684216, 30.501286983489994], [60.107216105214334, 30.482833385467533]],
        author: 'MSPN',
        owner: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'Верх. Суздальское оз.',
        year: 2015,
        url: './maps/city/high_suzd_lake_2015.webp',
        link: './original_maps/city/high_suzd_lake_2015_omaps.jpg',
        bounds: [[60.03930318938035, 30.314025878906254], [60.03894955664152, 30.32110691070557], [60.03381609748235, 30.31235218048096]],
        owner: 'SHEIN',
        type: ['CITY'],
        author: 'TKMKVA_P'
    },
    {
        name: 'Петроградская',
        date: '2019-08-10',
        url: './maps/city/petrogradskaya_2016.webp',
        link: ['./original_maps/city/petrogradskaya_2016_omaps.jpg','./original_maps/city/chkalovskaya_2019_st_omaps.gif'],
        bounds: [[59.969403324131434, 30.294585227966312], [59.96777099268824, 30.31286716461182], [59.958512433344985, 30.290594100952152]],
        author: 'DBRTSV_V',
        owner: 'SHEIN',
        start: 'ST',
        type: ['CITY']
    },
    {
        name: 'Поклонная гора, Берёзовый сад',
        year: 2016,
        url: './maps/city/berezovy_sad_2016.webp',
        link: './original_maps/city/poklonnaya_gora_2021_st_omaps.gif',
        bounds: [[60.0304290780388, 30.312309265136722], [60.02928212883294, 30.32535552978516], [60.01837876400275, 30.30812501907349]],
        start: 'ST',
        owner: 'SHEIN',
        type: ['CITY'],
        author: 'DBRTSV_V'
    },
    {
        name: 'Большая Охта',
        year: 2017,
        url: './maps/city/big_okhta_2017.webp',
        link: ['./original_maps/city/big_okhta_2018_st_omaps.gif','./original_maps/city/sredneokhtinsky_2019_st_omaps.gif','./original_maps/city/sredneokhtinsky_2021_st_omaps.gif'],
        bounds: [[59.95965109641549, 30.41125059127808], [59.958372783293484, 30.42448997497559], [59.944146879921945, 30.40571451187134]],
        author: 'DBRTSV_V',
        owner: 'SHEIN',
        start: 'ST',
        type: ['CITY']
    },
/*
    {
        name: 'Матвеевский сад',
        year: 2022,
        url: './maps/city/matveevsky_sad_2022.webp',
        bounds: [[59.964538309478776, 30.307030677795414], [59.964463127045754, 30.31773805618286], [59.95868430952346, 30.306987762451175]],
        author: 'GRBTNKV',
        owner: 'WN',
        type: ['CITY']
    },
*/
    {
        name: 'Сквер Андрея Петрова',
        year: 2017,
        url: './maps/city/skver_petrova_2017.webp',
        link: './original_maps/city/skver_petrova_2017_omaps.jpg',
        bounds: [[59.964785336271625, 30.30874729156494], [59.96391536416931, 30.318489074707035], [59.9595329350863, 30.306944847106937]],
        author: 'DBRTSV_V',
        owner: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'Сосновка, мототрек',
        year: 2015,
        url: './maps/city/sosnovka_mototrek_2015.webp',
        link: './original_maps/city/sosnovka_mototrek_2015_omaps.jpg',
        bounds: [[60.02631273892153, 30.325398445129398], [60.0264199417561, 30.34155607223511], [60.02084493317537, 30.324733257293705]],
        author: ['MSPN','MNKV'],
        owner: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'Кронштадт',
        year: 2014,
        url: './maps/city/kronshtadt_sobor_2014.webp',
        link: './original_maps/city/kronshtadt_sobor_2014_omaps.jpg',
        bounds: [[59.9962822605596, 29.766125679016117], [59.995767214543264, 29.792947769165043], [59.985357274664224, 29.76728439331055]],
        author: ['RYLOV_V','SHEIN'],
        owner: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'Кронштадт',
        year: 2019,
        url: './maps/city/kronshtadt_2019.webp',
        bounds: [[59.99574575411855, 29.768936634063724], [59.993492332060875, 29.789621829986576], [59.986967273229695, 29.766104221343998]],
        author: ['DBRTSV_V','FDRV_A','KBZRV'],
        type: ['CITY']
    },
    {
        name: 'Школа №217',
        year: 2012,
        startYear: 2023,
        start: 'RED_SELO_FOTO',
        url: './maps/city/veteranov_2012.webp',
        link: ['./original_maps/city/veteranov_2012_omaps.jpg','./original_maps/fun/school_217_foto_2023_omaps.pdf','./original_maps/fun/school_217_foto_2023_pictures.pdf'],
        bounds: [[59.833440936715064, 30.164873600006107], [59.833354674113856, 30.1760745048523], [59.82424192853449, 30.164916515350345]],
        type: ['CITY','FOTO'],
        author: 'TMKN',
        owner: 'TMKN'
    },
    {
        name: 'Авангардная ул, шк №383',
        year: 2025,
        url: './maps/city/school_383_2025.webp',
        link: './original_maps/schools/school_383_2025_omaps.jpg',
        bounds: [[59.843338086364156, 30.17530202865601], [59.842238548347105, 30.186202526092533], [59.83326841128922, 30.171482563018802]],
        type: ['CITY'],
        author: 'TMKN',
        owner: 'TMKN'
    },
    {
        name: 'Авангардная ул, шк №237',
        year: 2025,
        url: './maps/city/school_237_2025.webp',
        link: './original_maps/schools/school_237_2025_omaps.jpg',
        bounds: [[59.83366737498011, 30.1759672164917], [59.83254595136076, 30.187618732452396], [59.82444685790592, 30.17251253128052]],
        type: ['CITY'],
        author: 'TMKN',
        owner: 'TMKN'
    },
    {
        name: 'Школа №217',
        year: 2025,
        logo: 'school_217.png',
        url: './maps/city/school_217_2023.webp',
        link: ['./original_maps/schools/school_217_2025_omaps.gif','./original_maps/schools/school_217_2023.ocd','./original_maps/schools/school_217_2023.jpg'],
        bounds: [[59.83421729007089, 30.165688991546634], [59.83299883852204, 30.178971290588382], [59.82475964241083, 30.16229867935181]],
        type: ['CITY'],
        author: 'TMKN', // ,'ALNKVA','TRSK','ZHMNTKV','SVLJV','KPJEV'
        owner: 'TMKN'
    },
    {
        name: 'ул Отважных',
        year: 2022,
        url: './maps/city/otvazhnyich_2022.webp',
        link: ['./original_maps/city/otvazhnyich_2022.ocd','./original_maps/city/otvazhnyich_2022.jpg'],
        bounds: [[59.84425434030309, 30.166890621185303], [59.843251849400815, 30.17925024032593], [59.833343891273, 30.163350105285648]],
        type: ['CITY'],
        author: 'TMKN',
        owner: 'TMKN'
    },
    {
        name: 'ул Здоровцева',
        year: 2024,
        url: './maps/city/zdorovtseva_2024.webp',
        link: ['./original_maps/city/zdorovtseva_2024.ocd','./original_maps/city/zdorovtseva_2024.jpg'],
        info: 'Карта требует корректуры. Любой желающий может довести её до ума.',
        bounds: [[59.83482110794599, 30.15558242797852], [59.834767196080826, 30.16405820846558], [59.82450078647835, 30.155711174011234]],
        type: ['CITY'],
        author: 'TMKN',
        owner: 'TMKN'
    },
    {
        name: 'Клуб Альтаир, ул Лёни Голикова',
        year: 2025,
        url: './maps/city/altair_2025.webp',
        link: './original_maps/city/altair_2025_omaps.jpg',
        bounds: [[59.8422062084439, 30.238602161407474], [59.84134379943523, 30.258600711822513], [59.832578300647974, 30.238623619079593]],
        type: ['CITY'],
        author: 'TMKN',
        owner: 'TMKN'
    },
    {
        name: 'пр Ветеранов, шк №254',
        year: 2025,
        url: './maps/city/school_254_2025.webp',
        link: './original_maps/city/school_254_2025_omaps.gif',
        bounds: [[59.84341354352382, 30.19575119018555], [59.84251882619241, 30.214591026306156], [59.83307431911679, 30.19476413726807]],
        type: ['CITY'],
        author: 'TMKN',
        owner: 'TMKN'
    },
    {
        name: 'Школа №339',
        year: 2008,
        url: './maps/city/school_339_2008.webp',
        link: './original_maps/schools/school_339_2008_omaps.jpg',
        bounds: [[59.90844781586406, 30.45594692230225], [59.907038420393384, 30.470108985900882], [59.90223957196219, 30.453028678894047]],
        author: 'DRBSHV',
        type: ['CITY']
    },
    {
        name: 'Яковлевский пер',
        url: './maps/city/yakovlevsky.jpg',
        link: './original_maps/city/yakovlevsky_omaps.jpg',
        bounds: [[59.87587658325937, 30.320248603820804], [59.87590889044805, 30.328660011291507], [59.87168715181947, 30.32037734985352]],
        author: 'MSLVA', //Не 100%., надо бы уточнить
        type: ['CITY']
    },
    {
        name: 'Гатчина, Аэродром',
        year: 2022,
        url: './maps/city/gatchina_aerodrom_2022.webp',
        link: './original_maps/city/gatchina_aerodrom_2022_omaps.jpg',
        bounds: [[59.56504949223926, 30.086488723754886], [59.563277701759, 30.104770660400394], [59.55730945148959, 30.083034038543705]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        type: ['CITY']
    },
    {
        name: 'Петергоф, СПбГУ',
        year: 2024,
        url: './maps/city/peterhof_spbgu_2024.webp',
        bounds: [[59.88427539528826, 29.82543468475342], [59.88230509530967, 29.843544960021976], [59.878461059145124, 29.822881221771244]],
        author: 'SVCHK',
        type: ['CITY']
    },
    {
        name: 'Академическая',
        year: 2023,
        url: './maps/city/akademicheskaya_2023.webp',
        link: './original_maps/city/akademicheskaya_2023_omaps.jpg',
        bounds: [[60.0202659360725, 30.401659011840824], [60.01885056712136, 30.415606498718265], [60.011397435475146, 30.398161411285404]],
        author: 'CHGRVSKY_Y',
        owner: 'KUZM',
        type: ['CITY']
    },
    {
        name: 'Универсам САМПО',
        date: '2024-06-05',
        start: 'ST',
        url: './maps/city/sampo_2024.webp',
        link: './original_maps/city/sampo_2024_st_omaps.gif',
        bounds: [[60.030043193030735, 30.364322662353516], [60.02852104710428, 30.38406372070313], [60.02303216403132, 30.36230564117432]],
        author: ['IVNVA_G','TKMKVA_P'],
        owner: 'SFSO_SPB',
        type: ['CITY']
    },
    {
        name: 'Лицей №179',
        year: 2019,
        url: './maps/city/litsey_179_2019.webp',
        link: './original_maps/city/litsey_179_2019_st_omaps.gif',
        bounds: [[60.04643933173566, 30.41303157806397], [60.04556079084643, 30.427365303039554], [60.03634541714789, 30.409684181213382]],
        author: ['MSPN','SMV'],
        start: 'ST',
        type: ['CITY']
    },
    {
        name: 'Дибуновская ул',
        date: '2021-10-22',
        url: './maps/city/dibunovskaya_2022.webp',
        link: './original_maps/city/dibunovskaya_2022_st_omaps.gif',
        info: '<a href="https://reskeep.ru/event/get?id=571">Результаты.</a>',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/14471/',
        bounds: [[59.98930699819738, 30.271260738372806], [59.987927868402906, 30.2863883972168], [59.98401554936793, 30.269372463226322]],
        author: 'DBRTSV_V',
        start: 'ST',
        owner: 'KUZM',
        type: ['CITY']
    },
    {
        name: 'Дибуновская ул',
        excluded: true,
        date: '2025-08-05',
        url: './maps/city/dibunovskaya_2022.webp',
        link: './original_maps/city/dibunovskaya_2022_st_omaps.gif',
        info: '<a href="https://reskeep.ru/event/get?id=713">Результаты.</a>',
        bounds: [[59.98930699819738, 30.271260738372806], [59.987927868402906, 30.2863883972168], [59.98401554936793, 30.269372463226322]],
        author: 'DBRTSV_V',
        start: 'ST',
        owner: 'KUZM',
        planner: 'MSLVSKY',
        type: ['CITY']
    },
    {
        name: 'ул Жака Дюкло',
        date: '2023-10-04',
        url: './maps/city/zhaka_djuklo_2023.webp',
        link: './original_maps/city/zhaka_djuklo_2023_st_omaps.gif',
        gps: {
            'М':'https://viewer.o-gps-center.ru/viewer/event/17480/',
            'Ж':'https://viewer.o-gps-center.ru/viewer/event/17482/'
        },
        info: '<a href="https://reskeep.ru/event/get?id=619">Результаты.</a>',
        bounds: [[60.01458264841114, 30.345954895019535], [60.012298334901786, 30.36578178405762], [60.00745034864706, 30.343229770660404]],
        author: 'CHGRVSKY_Y',
        start: 'ST',
        owner: 'KUZM',
        type: ['CITY']
    },
    {
        name: 'ул Карпинского',
        date: '2023-08-16',
        url: './maps/city/karpinskogo_2019.webp',
        link: ['./original_maps/city/karpinskogo_2019_st_omaps.gif','./original_maps/city/karpinskogo_2023_st_omaps.gif'],
        info: '<a href="https://reskeep.ru/event/get?id=603">Результаты.</a>',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/17006/',
        bounds: [[60.016738123463774, 30.41652917861939], [60.01664161266094, 30.430562496185306], [60.0068282104595, 30.41650772094727]],
        author: 'SRBRNTSKY',
        start: 'ST',
        owner: 'KUZM',
        type: ['CITY']
    },
    {
        name: 'ул Верности, Лицей №95',
        date: '2022-10-01',
        url: './maps/city/litsey_95_2022.webp',
        link: './original_maps/city/vernosty_2022_st_omaps.gif',
        info: '<a href="https://reskeep.ru/event/get?id=540">Результаты.</a>',
        bounds: [[60.011933688090885, 30.403869152069095], [60.009788625443875, 30.424318313598636], [60.00476863502597, 30.40097236633301]],
        author: 'SRBRNTSKY',
        start: 'ST',
        owner: 'KUZM',
        type: ['CITY']
    },
    {
        name: 'Манеж Алексеева',
        year: 2014,
        date: '2015-05-13',
        url: './maps/city/manezh_alekseeva_2015.webp',
        link: './original_maps/city/manezh_alekseeva_2015_omaps.jpg', // ЧиП СПб тогда проводил НордВест
        bounds: [[60.019761985893915, 30.356168746948246], [60.0193652537523, 30.369558334350586], [60.00983152806055, 30.35458087921143]],
        author: 'SHRNN',
        start: 'ST',
        type: ['CITY']
    },
    {
        name: 'Манеж Алексеева',
        year: 2025,
        gps: 'https://viewer.o-gps-center.ru/viewer/event/22533/',
        info: 'ЧиП СПб, спринт. <a href="https://o-site.spb.ru/race.php?id=250511_sprint">Инфо и результаты</a>.',
        url: './maps/city/manezh_alekseeva_2025.webp',
        link: './original_maps/city/manezh_alekseeva_2025_omaps.jpg',
        bounds: [[60.019493924157835, 30.3573489189148], [60.01812141400874, 30.370717048645023], [60.010453609747415, 30.353422164916996]],
        author: 'ZCHNV',
        owner: 'SFSO_SPB',
        planner: 'CHGRVSKY_M',
        type: ['CITY']
    },
    {
        name: 'ул Матроса Железняка',
        date: '2021-10-09',
        url: './maps/city/matrosa_zheleznjaka_2021.webp',
        link: './original_maps/city/matrosa_zheleznjaka_2021_st_omaps.gif',
        info: '<a href="https://reskeep.ru/event/get?id=488">Результаты.</a>',
        bounds: [[60.00045598353898, 30.308468341827396], [59.99779516186407, 30.31932592391968], [59.9923441008481, 30.301001071929935]],
        author: 'CHGRVSKY_M',
        start: 'ST',
        owner: 'KUZM',
        type: ['CITY']
    },
    {
        name: 'Гимназия №74',
        year: 2024,
        start: 'ST',
        url: './maps/city/gimnazia_74_2024.webp',
        link: ['./original_maps/city/gimnazia_74_2024_omaps.gif','./original_maps/city/muzhestva_2018_st.pdf'],
        bounds: [[60.000713471052876, 30.34653425216675], [59.99927580678817, 30.36305665969849], [59.99538092476921, 30.34483909606934]],
        author: ['SHRNN','EFRMV'],
        owner: ['SHRNN','EFRMV'],
        type: ['CITY']
    },
    {
        name: 'ул Есенина',
        date: '2021-09-29',
        url: './maps/city/esenina_2021.webp',
        link: './original_maps/city/esenina_2021_st_omaps.gif',
        info: '<a href="https://reskeep.ru/event/get?id=487">Результаты.</a>',
        bounds: [[60.044703655255994, 30.32363891601563], [60.0436429191586, 30.33730745315552], [60.034652080493586, 30.32011985778809]],
        author: ['SRBRNTSKY','RDNV_B'],
        start: 'ST',
        owner: 'KUZM',
        type: ['CITY']
    },
    {
        name: 'Омская ул"',
        date: '2022-09-06',
        url: './maps/city/omskaya_2022.webp',
        link: './original_maps/city/omskaya_2022_st_omaps.gif',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/14009/',
        info: '<a href="https://reskeep.ru/event/get?id=555">Результаты.</a>',
        bounds: [[60.00236563490866, 30.31413316726685], [59.99944747147775, 30.32662153244019], [59.993277712432054, 30.30559301376343]],
        author: 'CHGRVSKY_M',
        start: 'ST',
        owner: 'KUZM',
        type: ['CITY']
    },
    {
        name: 'пр Просвещения, Школа №518',
        date: '2024-09-11',
        url: './maps/city/school_518_2024.webp',
        link: './original_maps/schools/school_518_2024_st_omaps.gif',
        info: '<a href="https://reskeep.ru/event/get?id=666">Результаты.</a>',
        bounds: [[60.05346681736092, 30.32861709594727], [60.05204215839983, 30.342135429382328], [60.043557201622335, 30.324368476867676]],
        author: 'SVCHK',
        start: 'ST',
        owner: 'RKVA_S',
        type: ['CITY']
    },
    {
        name: 'пр Металлистов, Школа №532',
        date: '2023-05-17',
        url: './maps/city/school_532_2023.webp',
        link: './original_maps/city/metallistov_2023_st_omaps.gif',
        info: '<a href="https://reskeep.ru/event/get?id=587">Результаты.</a>',
        bounds: [[59.960918618714096, 30.420928001403812], [59.95892063781316, 30.439810752868656], [59.954333419413786, 30.41800975799561]],
        author: 'RDNV_B',
        start: 'ST',
        owner: ['RDNV_B','RDNV_I'],
        type: ['CITY']
    },
    {
        name: 'Школа №535',
        year: 2019,
        url: './maps/city/school_535_2019.webp',
        link: './original_maps/schools/school_535_2019_st_omaps.gif',
        bounds: [[60.018914903388506, 30.41270971298218], [60.01864683478263, 30.433416366577152], [60.01177281321938, 30.4127311706543]],
        author: 'SRBRNTSKY',
        start: 'ST',
        owner: 'KUZM',
        type: ['CITY']
    },
    {
        name: 'Учительская ул',
        year: 2019,
        start: 'ST',
        url: './maps/city/uchitelskaya_2019.webp',
        link: './original_maps/city/uchitelskaya_2019_st_omaps.gif',
        bounds: [[60.03482356157328, 30.392689704895023], [60.03293722073611, 30.407860279083252], [60.028027942541264, 30.389213562011722]],
        author: 'ELZRV',
        owner: 'ELZRV',
        type: ['CITY']
    },
    {
        name: 'Чкаловская',
        date: '2021-10-30',
        url: './maps/city/chkalovskaya_2021.webp',
        link: ['./original_maps/city/chkalovskaya_2021_st_omaps.gif','./original_maps/city/chkalovskaya_2024_st_omaps.gif'],
        info: '<a href="https://reskeep.ru/event/get?id=489">Результаты.</a>',
        bounds: [[59.96962883728231, 30.28810501098633], [59.96869455851803, 30.29864072799683], [59.96200349335379, 30.28542280197144]],
        author: 'SRBRNTSKY',
        start: 'ST',
        owner: 'KUZM',
        type: ['CITY']
    },
    {
        name: 'Сестрорецкая ул',
        date: '2023-10-28',
        url: './maps/city/sestroretskaya_2023.webp',
        link: ['./original_maps/city/sestroretskaya_2022_st_omaps.gif','./original_maps/city/sestroretskaya_2023_st_omaps.gif'],
        gps: 'https://viewer.o-gps-center.ru/viewer/event/17674/',
        info: '<a href="https://reskeep.ru/event/get?id=621">Результаты.</a>',
        bounds: [[59.98958067081682, 30.284564495086673], [59.98846986790074, 30.296956300735477], [59.98436977012997, 30.28264403343201]],
        author: 'DBRTSV_V',
        start: 'ST',
        owner: 'KUZM',
        type: ['CITY']
    },
    {
        name: 'Пионерская, Аллея Поликарпова',
        date: '2025-09-25',
        url: './maps/city/alleya_polikarpova_2024.webp',
        link: './original_maps/city/polikarpova_2024_st_omaps.gif',
        info: '<a href="https://reskeep.ru/event/get?id=668">Результаты</a>.',
        bounds: [[60.010968427120524, 30.28368473052979], [60.0092416122016, 30.300571918487552], [60.00471499853547, 30.281302928924564]],
        author: 'CHGRVSKY_Y',
        start: 'ST',
        owner: 'KUZM',
        type: ['CITY']
    },
    {
        name: 'Пионерская, Аллея Поликарпова',
        excluded: true,
        date: '2025-05-28',
        url: './maps/city/alleya_polikarpova_2024.webp',
        link: './original_maps/city/polikarpova_2025_st_omaps.jpg',
        info: '<a href="https://reskeep.ru/event/get?id=703">Результаты</a>.',
        bounds: [[60.010968427120524, 30.28368473052979], [60.0092416122016, 30.300571918487552], [60.00471499853547, 30.281302928924564]],
        author: 'CHGRVSKY_Y',
        start: 'ST',
        owner: 'KUZM',
        planner: 'RYKV_A',
        type: ['CITY']
    },
    {
        name: 'Пионерская, Серебристый бульвар',
        date: '2025-09-24',
        url: './maps/city/pionerskaya_2025_st.webp',
        link: './original_maps/city/pionerskaya_2025_st_omaps.gif',
        info: '<a href="https://reskeep.ru/event/get?id=799">Результаты</a>, <a href="https://vk.com/@-92124592-noname-sprint-tur-2025-24092025?subtype=primary">разбор дистанций</a>.',
        bounds: [[60.00517626951101, 30.281217098236088], [60.00342769666826, 30.29842615127564], [59.99954403247419, 30.278792381286625]],
        author: 'CHGRVSKY_Y',
        start: 'ST',
        owner: 'KUZM_CHGRVSKY',
        planner: 'RYKV_A',
        type: ['CITY']
    },
    {
        name: 'Мартыновский сквер',
        year: 2022,
        url: './maps/city/martynovsky_skver_2022.webp',
        bounds: [[60.02540150078545, 30.24973869323731], [60.02556230934125, 30.263879299163822], [60.01974054103504, 30.2499532699585]],
        author: ['BLV_V','MSKV'],
        owner: 'MSKV',
        type: ['CITY']
    },
    {
        name: 'Школа №515',
        year: 2023,
        url: './maps/city/school_515_2023.webp',
        bounds: [[59.94797257193447, 30.414297580718998], [59.9469087299875, 30.422902107238773], [59.94273900011142, 30.41150808334351]],
        author: ['RDNV_B','RDNV_I'],
        type: ['CITY']
    },
    {
        name: 'Колпино - ул Танкистов',
        year: 2018,
        url: './maps/city/kolpino_tankistov_2018.jpg',
        bounds: [[59.74959628419852, 30.560982227325443], [59.748472030753305, 30.577397346496586], [59.74200683935883, 30.55907249450684]],
        type: ['CITY'],
        author: 'DRBSHV',
        owner: 'BBCH_A'
    },
    {
        name: 'Новое Сертолово',
        year: 2022,
        url: './maps/city/new_sertolovo_2022.webp',
        bounds: [[60.169812935994486, 30.18354177474976], [60.16785958842209, 30.203347206115726], [60.16315186383203, 30.180580615997318]],
        author: 'SVCHK',
        type: ['CITY'],
        owner: 'SVCHK'
    },
    {
        name: 'Сертолово, Пограничная ул',
        year: 2024,
        url: './maps/city/sertolovo_pogranichnaya_2024.webp',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/22089/',
        bounds: [[60.146354417809526, 30.222294330596924], [60.144997860463, 30.23516893386841], [60.1407676058273, 30.21995544433594]],
        type: ['CITY'],
        author: 'SVCHK',
        owner: 'SVCHK'
    },
    {
        name: 'Сясьстрой',
        year: 2014,
        url: './maps/city/sjasstroy_2014.webp',
        link: './original_maps/city/sjasstroy_2014_omaps.jpg',
        info: 'Сясьстрой. Карта пришкольной территории на берегу реки Сясь.',
        bounds: [[60.14225252990766, 32.551020383834846], [60.141622246580134, 32.55666375160218], [60.140083877236236, 32.550022602081306]],
        author: 'DRBSHV',
        type: ['CITY'],
        owner: 'KP31'
    },
    {
        name: 'Школа-интернат №31',
        year: 2019,
        url: './maps/city/school_31_2019.webp',
        link: './original_maps/schools/school_31_2019_omaps.jpg',
        bounds: [[59.89791355825114, 30.423406362533573], [59.89867764641967, 30.425080060958866], [59.89710102267565, 30.42498350143433]],
        author: 'DRBSHV',
        type: ['CITY'],
        owner: 'KP31'
    },
    {
        name: 'Школа-интернат №1',
        year: 2024,
        url: './maps/city/school_internat_1_2024.webp',
        link: './original_maps/schools/school_internat_1_2024_omaps.gif',
        bounds: [[60.00025213783566, 30.324261188507084], [60.000295052824974, 30.32788753509522], [59.99751619235789, 30.324196815490726]],
        author: ['DRBSHV','RSKV_S'],
        type: ['CITY'],
        owner: 'KP31'
    },
    {
        name: 'Стадион СК "Царское село"',
        year: 2024,
        url: './maps/city/pushkin_stadium_2024.webp',
        link: './original_maps/schools/pushkin_stadium_2024_omaps.jpg',
        bounds: [[59.73334498275765, 30.404019355773926], [59.732977263783646, 30.40801048278809], [59.731776741333555, 30.403375625610355]],
        author: 'EGRV_EGR',
        owner: 'EGRV_EGR',
        type: ['CITY']
    },
    {
        name: 'Пушкин, школа №552',
        year: 2022,
        url: './maps/city/pushkin_school_552_2022.webp',
        link: './original_maps/schools/pushkin_school_552_2022_omaps.jpg',
        bounds: [[59.73924956297513, 30.39575815200806], [59.73783299137785, 30.40775299072266], [59.73292318712285, 30.3927755355835]],
        author: 'ZCHNV',
        owner: 'SFSO_SPB',
        type: ['CITY']
    },
    {
        name: 'Пушкин, Аграрный ун-т',
        year: 2022,
        url: './maps/city/pushkin_agrarny_2022.webp',
        bounds: [[59.73475092977878, 30.3817892074585], [59.733691067509575, 30.39650917053223], [59.727904492347456, 30.379879474639896]],
        author: 'DRBSHV',
        type: ['CITY']
    },
    {
        name: 'Школа №755',
        year: 2024,
        url: './maps/city/school_755.webp',
        bounds: [[59.945801868289415, 30.27390003204346], [59.945834107502165, 30.275981426239017], [59.94472720992396, 30.273985862731937]],
        author: 'SHRNN',
        owner: 'SHRNN',
        type: ['CITY']
    },
    {
        name: 'пр Пархоменко',
        year: 2021,
        url: './maps/city/parkhomenko.webp',
        link: ['./original_maps/city/parkhomenko_omaps.jpg','./original_maps/city/parkhomenko_2021_st_omaps.gif'],
        bounds: [[60.0032775081867, 30.327436923980716], [60.00321314148582, 30.340461730957035], [59.99978006927887, 30.327394008636478]],
        start: 'ST',
        author: 'SHRNN',
        owner: 'SHRNN',
        type: ['CITY']
    },
    {
        name: 'Суворовское училище',
        year: 2020,
        url: './maps/city/svu_2024.webp',
        bounds: [[59.920140263057476, 30.313317775726322], [59.92038762085078, 30.3173303604126], [59.91786018266457, 30.31415462493897]],
        author: 'SHRNN',
        owner: 'SHRNN',
        type: ['CITY']
    },
    {
        name: 'Агалатово',
        year: 2012,
        url: './maps/city/agalatovo_2012.webp',
        link: './original_maps/city/agalatovo_2012_omaps.jpg',
        bounds: [[60.21722334414536, 30.300486087799076], [60.21662647354862, 30.309069156646732], [60.21354602222042, 30.299198627471927]],
        author: ['TKMKVA_P','IVNVA_G'],
        owner: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'Кузнечное',
        url: './maps/city/kuznechnoe.webp',
        link: './original_maps/city/kuznechnoe_omaps.jpg',
        bounds: [[61.12902370855488, 29.872019290924076], [61.12792546611398, 29.88862752914429], [61.11938688322839, 29.868800640106205]],
        author: 'RYLOV_V',
        owner: 'VST_PRZRSK',
        type: ['CITY']
    },
    {
        name: 'Севастьяново',
        url: './maps/city/sevastjanovo.webp',
        link: './original_maps/city/sevastjanovo_omaps.jpg',
        bounds: [[61.06172221813291, 29.779922962188724], [61.0613692056359, 29.802067279815677], [61.05464045078286, 29.77970838546753]],
        author: 'RYLOV_V',
        owner: 'VST_PRZRSK',
        type: ['CITY']
    },
    {
        name: 'Приозерск, ул Героя Богданова',
        year: 2020,
        url: './maps/city/priozersk_geroja_bogdanova_2020.webp',
        link: './original_maps/city/priozersk_geroja_bogdanova_2020_omaps.gif',
        author: 'PSHKV',
        bounds: [[61.03422738636866, 30.12434005737305], [61.03352074474647, 30.133781433105472], [61.031764464289076, 30.123524665832523]],
        owner: 'VST_PRZRSK',
        type: ['CITY']
    },
    {
        name: 'Приозерск, дет.сад №9',
        year: 2021,
        url: './maps/city/priozersk_det_sad_9_2021.webp',
        link: './original_maps/city/priozersk_det_sad_9_2021_omaps.jpg',
        author: 'PSHKV',
        bounds: [[61.04319413212856, 30.12609958648682], [61.045251034855056, 30.139060020446777], [61.041043591125266, 30.127515792846683]],
        owner: 'VST_PRZRSK',
        type: ['CITY']
    },
    {
        name: 'Владимирская, Лиговский пр',
        year: 2024,
        url: './maps/city/vladimirskaya-ligovsky_2023.webp',
        bounds: [[59.92636666566014, 30.338165760040287], [59.92629139661258, 30.355932712554935], [59.91516045099185, 30.338294506073]],
        author: 'GRBTNKV',
        owner: 'WN',
        type: ['CITY']
    },
    {
        name: 'Васильевский о-в',
        year: 2024,
        url: './maps/city/vasiljevsky_2024.webp',
        bounds: [[59.94814450278181, 30.266110897064213], [59.9482627047221, 30.294327735900882], [59.93547296012465, 30.266046524047855]],
        author: 'GRBTNKV',
        owner: 'WN',
        type: ['CITY']
    },
/*
    {
        name: 'Василеостровская',
        year: 2021,
        url: './maps/city/vasileostrovskaya_2021.webp',
        bounds: [[59.94531827633585, 30.27645349502564], [59.94531827633585, 30.290594100952152], [59.93845050927692, 30.27619600296021]],
        author: 'YGNV',
        owner: 'WN',
        type: ['CITY']
    },
*/
    {
        name: 'ВО, 18 линия',
        year: 2018,
        url: './maps/city/vo_18l_2018.webp',
        link: './original_maps/city/vo_18l_2018_st_omaps.gif',
        bounds: [[59.94064319042631, 30.2619481086731], [59.939525371094106, 30.27417898178101], [59.93458071825284, 30.25969505310059]],
        author: ['MNKV','SRBRNTSKY'],
        start: 'ST',
        owner: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'Василеостровская',
        year: 2012,
        url: './maps/city/vasileostrovskaya_2012.webp',
        link: './original_maps/city/vasileostrovskaya_2012_omaps.jpg',
        bounds: [[59.94299693676351, 30.267612934112552], [59.94182545833027, 30.281517505645756], [59.935257964278314, 30.264759063720707]],
        author: 'MNKV',
        owner: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'Василеостровская',
        date: '2024-05-18',
        start: 'RUSSIA_2024',
        info: 'Кросс-спринт.',
        url: './maps/city/vasileostrovskaya_2024.webp',
        link: './original_maps/city/vasileostrovskaya_2024_omaps.gif',
        bounds: [[59.94262077847527, 30.26769876480103], [59.94105161501355, 30.27969360351563], [59.93625768313655, 30.26443719863892]],
        author: 'TKMKVA_P',
        owner: 'SFSO_SPB',
        type: ['CITY']
    },
/*
    {
        name: 'Восстания, Невский пр',
        year: 2023,
        url: './maps/city/vosstaniya_nevskiy_2023.webp',
        bounds: [[59.93625768313655, 30.347886085510257], [59.93631143060866, 30.365138053894047], [59.931183529538366, 30.347929000854496]],
        author: 'GRBTNKV',
        owner: 'WN',
        type: ['CITY']
    },
*/
    {
        name: 'Лесная, Кантемировский пр',
        year: 2024,
        url: './maps/city/lesnaya_kantemirovskaya_2024.webp',
        link: './original_maps/city/lesnaya_kantemirovskaya_2019_st_omaps.gif',
        bounds: [[59.98668821242252, 30.342907905578617], [59.985668547160444, 30.355975627899173], [59.978089840039104, 30.340011119842533]],
        start: 'ST',
        author: 'GRBTNKV',
        owner: 'WN',
        type: ['CITY']
    },
/*
    {
        name: 'Съезжинская ул',
        year: 2021,
        url: './maps/city/sjezzhinskaja_2021.webp',
        bounds: [[59.95776046458139, 30.296216011047367], [59.95777120711246, 30.308318138122562], [59.949251286263994, 30.296237468719486]],
        author: 'GRBTNKV',
        owner: 'WN',
        type: ['CITY']
    },
    {
        name: 'Съезжинская ул',
        year: 2020,
        url: './maps/city/sjezzhinskaja_2020.webp',
        bounds: [[59.95693327923127, 30.29640913009644], [59.956922536428564, 30.306236743927006], [59.951636655101844, 30.29653787612915]],
        author: 'GRBTNKV',
        owner: 'WN',
        type: ['CITY']
    },
    {
        name: 'Невская ратуша',
        year: 2024,
        url: './maps/city/nevskaya_ratusha_2024.webp',
        bounds: [[59.93989081617548, 30.370223522186283], [59.93995530606588, 30.38676738739014], [59.93329068756564, 30.370395183563236]],
        author: 'GRBTNKV',
        owner: 'WN',
        type: ['CITY']
    },
*/
    {
        name: 'Новая Ладога',
        year: 2018,
        url: './maps/city/novaja_ladoga_2018.webp',
        link: './original_maps/city/novaja_ladoga_2018_omaps.jpg',
        bounds: [[60.11106573592594, 32.30748653411866], [60.11108712150635, 32.32293605804444], [60.10064930790749, 32.307572364807136]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        type: ['CITY']
    },
    {
        name: 'Романовка',
        year: 2013,
        url: './maps/city/romanovka_2013.webp',
        bounds: [[60.05007110026554, 30.69610118865967], [60.048742712098274, 30.710756778717045], [60.04303217685753, 30.69367647171021]],
        author: 'MNKV',
        owner: 'INGR',
        type: ['CITY']
    },
    {
        name: 'Всеволожск, Рябовская ул',
        year: 1991,
        url: './maps/city/vsevolozhsk_rjabovskaja_1991.webp',
        link: './original_maps/city/vsevolozhsk_rjabovskaja_1991_omaps.jpg',
        bounds: [[60.02645210253869, 30.66389322280884], [60.02596968751366, 30.67693948745728], [60.020426769618474, 30.66267013549805]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        type: ['CITY']
    },
    {
        name: 'Всеволожский ДДЮТ',
        year: 2015,
        url: './maps/city/vsevolozhsky_ddjut_2015.webp',
        link: './original_maps/city/vsevolozhsky_ddjut_2015_omaps.jpg',
        bounds: [[60.01723139650011, 30.606086254119877], [60.016405696178985, 30.614798069000244], [60.01224471062299, 30.604841709136966]],
        author: 'PKHMV',
        type: ['CITY']
    },
    {
        name: 'Мистолово Хиллс',
        year: 2021,
        url: './maps/city/mistolovo_2021.webp',
        link: './original_maps/city/mistolovo_2021_omaps.jpg',
        bounds: [[60.12386252290126, 30.419125556945804], [60.12291122033968, 30.42948961257935], [60.11904159398472, 30.417194366455078]],
        author: ['TKMKVA_P','IVNVA_G'],
        owner: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'Кириши',
        year: 2005,
        url: './maps/city/kirishi_2005.webp',
        link: './original_maps/city/kirishi_2005_omaps.jpg',
        bounds: [[59.46372316679135, 32.00411796569825], [59.46003798998254, 32.026476860046394], [59.443416995244554, 31.992702484130863]],
        author: 'BYMKV',
        owner: 'EGRV_SRG',
        type: ['CITY']
    },
    {
        name: 'Кириши, ЦД "КИНЕФ"',
        url: './maps/city/kirishi_kinef.webp',
        link: './original_maps/city/kirishi_kinef_omaps.jpg',
        bounds: [[59.458522371686364, 32.00763702392579], [59.45659231333937, 32.02115535736085], [59.44589321242389, 32.00053453445435]],
        owner: 'EGRV_SRG',
        type: ['CITY']
    },
    {
        name: 'Кириши, турклуб "Ассоль"',
        year: 2024,
        url: './maps/city/kirishi_assol_2024.webp',
        bounds: [[59.44421333155716, 32.00315237045289], [59.44128970357717, 32.02141284942627], [59.439500493169554, 32.00010538101197]],
        author: 'MLV_AL',
        owner: 'MLV_AL',
        type: ['CITY']
    },
    {
        name: 'Отечественная улица',
        year: 2024,
        url: './maps/city/otechestvennaya_2024.webp',
        link: './original_maps/city/otechestvennaya_2024_omaps.jpg',
        bounds: [[59.961724222089416, 30.48261880874634], [59.96175644581698, 30.4906439781189], [59.95812570868364, 30.482790470123295]],
        author: 'RDNV_I',
        owner: 'RDNV_I',
        type: ['CITY']
    },
    {
        name: 'улица Новоселов',
        year: 2000,
        url: './maps/city/novoselov_2000.webp',
        link: './original_maps/city/novoselov_2000_omaps.jpg',
        bounds: [[59.8943619318266, 30.464186668396], [59.89251063054091, 30.491480827331547], [59.88277883930378, 30.462040901184086]],
        author: 'DRBSHV',
        type: ['CITY']
    },
    {
        name: 'Луга, Толмачёво - СОЛ "Красногвардеец"',
        year: 2024,
        url: './maps/city/luga_krasnogvardeets_2024.webp',
        link: './original_maps/city/luga_krasnogvardeets_2024_omaps.jpg',
        bounds: [[58.86565902096061, 29.852578639984134], [58.86572558857591, 29.88564491271973], [58.857192795777856, 29.85290050506592]],
        type: ['CITY'],
        author: 'RDNV_I',
        owner: 'RDNV_I'
    },
    {
        name: 'Выборг, школа №6',
        url: './maps/city/vyborg_school_6.webp',
        bounds: [[60.71197823805762, 28.747744560241703], [60.709773772311074, 28.772420883178714], [60.705574371608165, 28.746156692504886]],
        type: ['CITY'],
        owner: 'VYBORG'
    },
    {
        name: 'Выборг, школа №8',
        url: './maps/city/vyborg_school_8.webp',
        bounds: [[60.70654028235265, 28.76795768737793], [60.70534338865169, 28.7852954864502], [60.697446973197486, 28.765704631805423]],
        type: ['CITY'],
        author: 'SHRNN',
        owner: 'VYBORG'
    },
    {
        name: 'Выборг, школа №10',
        year: 2015,
        url: './maps/city/vyborg_school_10.webp',
        bounds: [[60.700639374682595, 28.76928806304932], [60.69904321355946, 28.79439353942871], [60.6873636243352, 28.765854835510257]],
        type: ['CITY'],
        author: 'SHRNN',
        owner: 'VYBORG'
    },
    {
        name: 'Выборг, исторический центр',
        url: './maps/city/vyborg_center.webp',
        bounds: [[60.722074857901596, 28.73645782470703], [60.712555573147064, 28.762249946594242], [60.710739556868674, 28.718218803405765]],
        type: ['CITY'],
        author: 'RYLOV_V', //Возможны соавторы
        owner: 'VYBORG'
    },
    {
        name: 'Выборг, исторический центр',
        date: '2020-09-26',
        start: 'RUSSIA_2020',
        info: 'Спринт.',
        gps: {
            'М': 'https://viewer.o-gps-center.ru/viewer/event/8200/',
            'Ж': 'https://viewer.o-gps-center.ru/viewer/event/8201/'
        },
        url: './maps/city/vyborg_center_2020_09_26.webp',
        link: ['https://viewer.o-gps-center.ru/newmaps/map_6254_d07a76f95f30269314187498b6cda61d.gif','https://viewer.o-gps-center.ru/newmaps/course_8201_7f78af6185476657994fa01093426a57.gif'],
        bounds: [[60.71571498693868, 28.729290962219242], [60.71430850886193, 28.74435424804688], [60.70959530894424, 28.72682332992554]],
        type: ['CITY'],
        author: ['TKMKVA_P','MSPN'],
        owner: 'VYBORG'
    },
    {
        name: 'Выборг, школа №37',
        url: './maps/city/vyborg_school_37.webp',
        bounds: [[60.721256331241406, 28.750748634338382], [60.720395806367094, 28.76476049423218], [60.715893416324086, 28.74933242797852]],
        type: ['CITY'],
        author: 'SHRNN',
        owner: 'VYBORG'
    },
    {
        name: 'Выборг, Батарейная гора, школа №14',
        url: './maps/city/vyborg_batareynaja_gora.webp',
        bounds: [[60.70729619225505, 28.752958774566654], [60.70749566551487, 28.771626949310306], [60.69508397193243, 28.753645420074463]],
        type: ['CITY'],
        author: 'DBRTSV_V',
        owner: 'VYBORG',
        restricted: 'с 01.09.2025 по 19.10.2025, Золотая осень им.Б.В.Фролова'
    },
    {
        name: 'Выборг, Интендантская гора',
        url: './maps/city/vyborg_intendantskaja_gora.webp',
        bounds: [[60.70828304787419, 28.740448951721195], [60.70826205126157, 28.756370544433597], [60.6982661064393, 28.73959064483643]],
        gps: 'https://viewer.o-gps-center.ru/viewer/event/23708/',
        type: ['CITY'],
        author: 'MSPN',
        owner: 'VYBORG'
    },
    {
        name: 'Каменногорск',
        url: './maps/city/kamennogorsk.webp',
        bounds: [[60.95272489511888, 29.13054943084717], [60.95256861922491, 29.136750698089603], [60.94840097893197, 29.130291938781742]],
        type: ['CITY'],
        owner: 'VYBORG'
    },
    {
        name: 'Первомайское',
        url: './maps/city/pervomayskoe.webp',
        bounds: [[60.36189868981512, 29.727180004119877], [60.36038124613785, 29.74123477935791], [60.35727185768989, 29.725227355957035]],
        author: ['TKMKV_K','TKMKVA_P'],
        type: ['CITY'],
        owner: 'VYBORG'
    },
    {
        name: 'Поляны',
        year: 2016,
        url: './maps/city/poljany_2015.webp',
        bounds: [[60.32321898969352, 29.252021312713627], [60.3230702556585, 29.261505603790287], [60.317322228605356, 29.251356124877933]],
        author: 'SHRNN',
        type: ['CITY'],
        owner: 'VYBORG'
    },
    {
        name: 'Санкт-Петербург (СПб), Дворцовая пл',
        year: 2012,
        url: './maps/city/dvortsovaya_2012.webp',
        link: './original_maps/city/dvortsovaya_2012_omaps.jpg',
        bounds: [[59.94673679273074, 30.309519767761234], [59.946715300510945, 30.332651138305668], [59.93558045752517, 30.309433937072757]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        type: ['CITY']
    },
    {
        name: 'Кудрово, Оккервиль',
        year: 2003,
        url: './maps/city/okkervil_2003.webp',
        link: './original_maps/city/okkervil_2003_omaps.jpg',
        bounds: [[59.909104078836364, 30.486803054809574], [59.915838093527306, 30.521907806396488], [59.899097349342924, 30.495471954345707]],
        author: ['DRBSHV','FDRV_L'],
        type: ['CITY']
    },
    {
        name: 'Кудрово',
        year: 2012,
        url: './maps/city/kudrovo_2012.webp',
        link: ['./original_maps/city/kudrovo_2012_omaps.jpg','./original_maps/city/kudrovo_2013_omaps.ocd'],
        bounds: [[59.91764507265457, 30.50564289093018], [59.91504213103524, 30.52851676940918], [59.905984024357714, 30.50160884857178]],
        author: 'DRBSHV',
        owner: 'VSLVSKY',
        type: ['CITY']
    },
    {
        name: 'Шлиссельбург',
        year: 2019,
        url: './maps/city/shlisselburg_2019.webp',
        link: './original_maps/city/shlisselburg_2019_omaps.jpg',
        bounds: [[59.95011089842249, 31.029596328735355], [59.95006791834404, 31.045625209808353], [59.93890195548363, 31.029317378997806]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        type: ['CITY']
    },
    {
        name: 'Кронштадт, Тулонская аллея',
        year: 2021,
        url: './maps/city/kronshtadt_east_2021.webp',
        link: './original_maps/city/kronshtadt_east_2021_omaps.jpg',
        bounds: [[59.98903868951069, 29.79526519775391], [59.988169354424066, 29.802303314208984], [59.985625613197065, 29.794063568115238]],
        author: 'GLTV_D',
        owner: 'VOLKOV_AM',
        type: ['CITY']
    },
    {
        name: 'Шуваловка',
        year: 2021,
        url: './maps/city/shuvalovka_2021.webp',
        link: './original_maps/city/shuvalovka_2021_omaps.jpg',
        bounds: [[59.870556237946154, 29.977977275848392], [59.86987767115975, 29.985616207122806], [59.86664621077985, 29.976582527160648]],
        author: 'GLTV_D',
        owner: 'VOLKOV_AM',
        type: ['CITY']
    },
    {
        name: 'Дом-интернат для престарелых и инвалидов №1',
        year: 2023,
        url: './maps/city/dipi_2023.webp',
        link: './original_maps/city/dipi_2023_omaps.jpg',
        bounds: [[60.02172413160352, 30.300014019012455], [60.021391754459486, 30.30409097671509], [60.01989065475507, 30.299263000488285]],
        author: 'SVCHK',
        owner: 'VOLKOV_AM',
        type: ['CITY']
    },
    {
        name: 'Волосово',
        year: 2021,
        url: './maps/city/volosovo_2021.webp',
        bounds: [[59.456984876505906, 29.480051994323734], [59.45526192648708, 29.492754936218265], [59.44521690678352, 29.47391510009766]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        type: ['CITY']
    },
    {
        name: 'Новолисино',
        year: 2021,
        url: './maps/city/novolisino_2021.webp',
        link: './original_maps/city/novolisino_2021_omaps.jpg',
        bounds: [[59.57348324062961, 30.763950347900394], [59.572755152409215, 30.778691768646244], [59.566690760949385, 30.76307058334351]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        type: ['CITY']
    },
    {
        name: 'Кудрово, пл Европы',
        year: 2024,
        url: './maps/city/kudrovo_evropy_2024.webp',
        bounds: [[59.90336940811142, 30.51265954971314], [59.90284215602527, 30.52237987518311], [59.89722478765577, 30.510921478271488]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        type: ['CITY']
    },
    {
        name: 'Парк Боевого братства',
        year: 2024,
        url: './maps/city/boevogo_bratstva_2024.webp',
        bounds: [[59.92551719078374, 30.443608760833744], [59.924398861581324, 30.456075668334964], [59.91876362948221, 30.44073343276978]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        type: ['CITY']
    },
    {
        name: 'им Свердлова, 2-й мкрр-он',
        year: 2024,
        url: './maps/city/sverdlova_2024.webp',
        bounds: [[59.78680500820933, 30.69863319396973], [59.786329896887196, 30.705199241638187], [59.78465615537929, 30.698032379150394]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        type: ['CITY']
    },
    {
        name: 'Сосновый Бор, Андерсенград',
        year: 2024,
        url: './maps/city/sosnovy_bor_andersengrad_2024.webp',
        link: './original_maps/city/sosnovy_bor_andersengrad_2024_omaps.jpg',
        bounds: [[59.89987217157585, 29.08413648605347], [59.89966770635328, 29.097225666046146], [59.892166191012564, 29.08413648605347]],
        author: ['YGNV','MSPN','TKHNVA'],
        owner: 'YUVNT',
        type: ['CITY']
    },
    {
        name: 'Сосновый Бор',
        date: '2021-05-29',
        start: 'RUSSIA_2021',
        info: 'Пролог №1.',
        url: './maps/city/sosnovy_bor_2021_05_29.webp',
        link: ['./original_maps/city/sosnovy_bor_2021_05_29.gif','./original_maps/city/sosnovy_bor_2021_05_29_W.gif'],
        gps: {
            'M': 'https://viewer.o-gps-center.ru/viewer/event/10011/',
            'Ж': 'https://viewer.o-gps-center.ru/viewer/event/10012/'
        },
        bounds: [[59.89209084438972, 29.07814979553223], [59.89078839718945, 29.091238975524906], [59.882864973849955, 29.074587821960453]],
        author: ['DBRTSV_V'],
        owner: 'YUVNT',
        type: ['CITY']
    },
    {
        name: 'Сосновый Бор',
        date: '2021-05-30',
        start: 'RUSSIA_2021',
        info: 'Пролог №2.',
        url: './maps/city/sosnovy_bor_2021_05_30.webp',
        link: ['./original_maps/city/sosnovy_bor_2021_05_30.gif','./original_maps/city/sosnovy_bor_2021_05_30_W.gif'],
        gps: {
            'M': 'https://viewer.o-gps-center.ru/viewer/event/10013/',
            'Ж': 'https://viewer.o-gps-center.ru/viewer/event/10014/'
        },
        bounds: [[59.90279911466906, 29.072592258453373], [59.89999054560306, 29.08838510513306], [59.89423277461944, 29.070467948913578]],
        author: ['PPV_D'],
        owner: 'YUVNT',
        type: ['CITY']
    },
    {
        name: 'Сосновый Бор',
        date: '2021-05-31',
        start: 'RUSSIA_2021',
        info: 'Финал.',
        url: './maps/city/sosnovy_bor_2021_05_31.webp',
        link: ['./original_maps/city/sosnovy_bor_2021_05_31.gif','./original_maps/city/sosnovy_bor_2021_05_31_W.gif'],
        gps: {
            'M': 'https://viewer.o-gps-center.ru/viewer/event/10015/',
            'Ж': 'https://viewer.o-gps-center.ru/viewer/event/10016/'
        },
        bounds: [[59.8945126146003, 29.082570075988773], [59.89341476731317, 29.094200134277347], [59.88766662168852, 29.08016681671143]],
        author: ['PPV_D'],
        owner: 'YUVNT',
        type: ['CITY']
    },
    {
        name: 'Петропавловская крепость',
        date: '2024-05-17',
        start: 'RUSSIA_2024',
        info: 'Кросс-эстафета-4 человека.',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/19452/',
        url: './maps/city/petropavlovka_2024.webp',
        link: ['./original_maps/city/petropavlovka_2024_omaps.gif','./original_maps/city/petropavlovka_2024_05_17.jpeg'],
        bounds: [[59.953688794515855, 30.310721397399906], [59.952281319914974, 30.32381057739258], [59.94795108051587, 30.30840396881104]],
        author: 'DBRTSV_V',
        owner: 'SFSO_SPB',
        type: ['SPRINT','CITY']
    },
    {
        name: 'Школа №110, Сиреневый бульвар',
        year: 2024,
        url: './maps/city/school_110_1_2024.webp',
        link: './original_maps/schools/school_110_1_2024_omaps.gif',
        bounds: [[60.05534127494883, 30.354495048522953], [60.054944969932734, 30.357499122619632], [60.05410950052577, 30.353980064392093]],
        author: 'KVLVA_O',
        owner: 'ZBKVA',
        type: ['SPRINT','CITY']
    },
    {
        name: 'Школа №110, Поэтический бульвар',
        year: 2024,
        url: './maps/city/school_110_2_2024.webp',
        link: './original_maps/schools/school_110_2_2024_omaps.gif',
        bounds: [[60.042689299035956, 30.359237194061283], [60.042335702553665, 30.36254167556763], [60.04142490629978, 30.35876512527466]],
        author: 'KVLVA_O',
        owner: 'ZBKVA',
        type: ['SPRINT','CITY']
    },
    {
        name: 'Парнас, школа №469',
        year: 2024,
        url: './maps/city/school_469_2024.webp',
        link: './original_maps/schools/school_469_2024_omaps.gif',
        info: 'По вопросам использования карты обращайтесь к Александру Кузнецову (sanek-orel@yandex.ru).',
        bounds: [[60.081733041209084, 30.336256027221683], [60.08104808584078, 30.34286499023438], [60.078629223351655, 30.334732532501224]],
        author: 'KUZNTSV_A',
        owner: 'BLNA',
        type: ['SPRINT','CITY']
    },
    {
        name: 'Зеленогорск',
        date: '2025-10-04',
        url: './maps/city/zelenogorsk_2025.webp',
        link: './original_maps/city/zelenogorsk_2025_omaps.jpg',
        bounds: [[60.20340726922134, 29.70664501190186], [60.20211704541842, 29.717910289764408], [60.19681699890615, 29.704005718231205]],
        info: '<a href="https://o-site.spb.ru/race.php?id=251007_NS">Невский спринт</a>.',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/23568/',
        author: 'SVCHK',
        owner: 'SFSO_SPB',
        planner: 'PLKV_D',
        type: ['CITY']
    },
    {
        name: 'ДООЛ "Солнечный"',
        year: 2023,
        url: './maps/city/dool_solnechny_2023.webp',
        link: ['./original_maps/city/dool_solnechny_2023_omaps.jpg','./original_maps/city/dool_solnechny_square_2023_omaps.jpg'],
        info: '<a href="https://vk.com/wall-135156716_2251">Карта решений Trail-O</a>',
        bounds: [[60.19223075483243, 29.506530761718754], [60.19184676113904, 29.51359033584595], [60.18739850679926, 29.505672454833988]],
        author: ['FDRV_L','BBCH_A'],
        owner: 'IMPULS',
        type: ['CITY']
    },
    {
        name: 'Университет физкультуры и спорта им.Лесгафта',
        year: 2002,
        url: './maps/city/lesgafta_2002.webp',
        link: './original_maps/city/lesgafta_2002_omaps.jpg',
        bounds: [[59.92762470874761, 30.28458595275879], [59.92896871916807, 30.290057659149173], [59.92459242125602, 30.28743982315064]],
        author: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'Университет физкультуры и спорта им.Лесгафта',
        year: 2025,
        url: './maps/city/lesgafta_2025.webp',
        link: './original_maps/city/lesgafta_2025_omaps.jpg',
        bounds: [[59.92858164974948, 30.28767585754395], [59.928130063053224, 30.29190301895142], [59.925560202692616, 30.286474227905277]],
        author: ['SHRNN','LMVA'],
        owner: ['LMVA','SHRNN'],
        type: ['CITY']
    },
    {
        name: 'Балтийский Берег',
        url: './maps/city/balt_bereg.webp',
        link: './original_maps/city/balt_bereg_omaps.jpg',
        info: '<a href="https://vk.com/wall-135156716_1808">Карта решений Trail-O</a>',
        bounds: [[59.91989290342047, 30.358357429504398], [59.91991441302732, 30.36054611206055], [59.918709853574285, 30.358357429504398]],
        owner: 'BBCH_A',
        type: ['CITY']
    },
    {
        name: 'Александровская',
        year: 2006,
        logo: 'sestroretsk.webp',
        url: './maps/city/aleksandrovskaya_2006.webp',
        link: ['./original_maps/city/aleksandrovskaya_2006_omaps.gif','./original_maps/city/aleksandrovskaya_2006_omaps.ocd'],
        bounds: [[60.06019294790669, 29.97681856155396], [60.05979670114627, 29.98754739761353], [60.05102450721059, 29.974157810211185]],
        author: 'VSLVSKY',
        owner: 'VSLVSKY',
        type: ['CITY']
    },
    {
        name: 'Александровская, СДЮШОР',
        year: 2005,
        logo: 'sestroretsk.webp',
        url: './maps/city/aleksandrovskaya_2005.webp',
        link: ['./original_maps/city/aleksandrovskaya_2005_omaps.gif','./original_maps/city/aleksandrovskaya_2005_omaps.ocd'],
        bounds: [[60.05655158243244, 29.977612495422367], [60.05633737195098, 29.98529434204102], [60.054934258920305, 29.977118968963627]],
        author: 'VSLVSKY',
        owner: 'VSLVSKY',
        type: ['CITY']
    },
    {
        name: 'Сестрорецк, шк №324',
        year: 2008,
        logo: 'sestroretsk.webp',
        url: './maps/city/school_324_2008.webp',
        link: ['./original_maps/schools/school_324_2008_omaps.gif','./original_maps/schools/school_324_2008_omaps.ocd'],
        bounds: [[60.09938713500164, 29.975831508636475], [60.09925877572626, 29.97802019119263], [60.09698031537153, 29.975123405456547]],
        author: 'VSLVSKY',
        owner: 'VSLVSKY',
        type: ['CITY']
    },
    {
        name: 'Сестрорецк, шк №541 и окрестности',
        year: 2012,
        logo: 'sestroretsk.webp',
        url: './maps/city/school_541_2012.webp',
        link: ['./original_maps/schools/school_541_2012_omaps.gif','./original_maps/schools/school_541_2012_omaps.ocd'],
        bounds: [[60.10098088768468, 29.96982336044312], [60.10030702850802, 29.97480154037476], [60.096958920630925, 29.96782779693604]],
        author: 'VSLVSKY',
        owner: 'VSLVSKY',
        type: ['CITY']
    },
    {
        name: 'Сестрорецк, шк №541',
        year: 2007,
        logo: 'sestroretsk.webp',
        url: './maps/city/school_541_2007.webp',
        link: ['./original_maps/schools/school_541_2007_omaps.gif','./original_maps/schools/school_541_2007_omaps.ocd'],
        bounds: [[60.1000503166248, 29.96932983398438], [60.09938713500164, 29.973921775817875], [60.097964458422496, 29.968364238739017]],
        author: 'VSLVSKY',
        owner: 'VSLVSKY',
        type: ['CITY']
    },
    {
        name: 'пос Комарово',
        year: 2015,
        logo: 'sestroretsk.webp',
        url: './maps/city/komarovo_2015.webp',
        link: ['./original_maps/city/komarovo_2015_omaps.gif','./original_maps/city/komarovo_2015_omaps.ocd'],
        bounds: [[60.19709428614133, 29.789471626281742], [60.19464127929003, 29.821786880493168], [60.18653438748113, 29.786381721496586]],
        author: 'VSLVSKY',
        owner: 'VSLVSKY',
        type: ['CITY']
    },
    {
        name: 'Спорт.база "Олимпиец", СДЮСШОР им Коренькова',
        year: 2011,
        logo: 'sestroretsk.webp',
        url: './maps/city/komarovo_olimpiets_2011.webp',
        link: ['./original_maps/city/komarovo_olimpiets_2011_omaps.gif','./original_maps/city/komarovo_olimpiets_2011_omaps.ocd'],
        bounds: [[60.19331871256902, 29.807131290435795], [60.19320138552827, 29.809877872467045], [60.191142761034, 29.80670213699341]],
        author: ['VSLVSKY','DRBSHV'],
        owner: 'VSLVSKY',
        type: ['CITY']
    },
    {
        name: 'Спорт.база "Олимпиец", СДЮСШОР им Коренькова',
        year: 2006,
        logo: 'sestroretsk.webp',
        url: './maps/city/komarovo_olimpiets_2006.webp',
        link: ['./original_maps/city/komarovo_olimpiets_2006_omaps.gif','./original_maps/city/komarovo_olimpiets_2006_omaps.ocd'],
        bounds: [[60.19344670522603, 29.807174205780033], [60.193233383853695, 29.80947017669678], [60.191484096303874, 29.80672359466553]],
        author: 'VSLVSKY',
        owner: 'VSLVSKY',
        type: ['CITY']
    },
    {
        name: 'Малая спортивная арена "Петровский"',
        year: 2025,
        url: './maps/city/petrovsky_stadium_2025.webp',
        link: ['./original_maps/city/petrovsky_stadium_2025_omaps.gif','./original_maps/city/petrovsky_stadium_2025_omaps.ocd'],
        bounds: [[59.953935902208705, 30.281265377998352], [59.95297163458303, 30.285245776176456], [59.95235652999307, 30.279940366745]],
        author: ['BLZRV_V','GLTV_Y'],
        owner: ['BLZRV_V','GLTV_YU'],
        type: ['CITY']
    },
    {
        name: 'Кировск',
        year: 2025,
        url: './maps/city/kirovsk_2025.webp',
        link: './original_maps/city/kirovsk_2025_omaps.jpg',
        bounds: [[59.89022865212811, 30.98901987075806], [59.8891414280444, 31.00320339202881], [59.88488907142484, 30.987710952758793]],
        author: 'YGNV',
        owner: 'NKLSK',
        type: ['CITY']
    },
];
