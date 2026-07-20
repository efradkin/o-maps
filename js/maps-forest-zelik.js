// types can be ROGAINE, SPRINT, CITY, RELIEF
let zelikMaps = [
    // --- ЗЕЛЕНОГОРСК - РОЩИНО - СЕСТРОРЕЦК ---
    {
        name: 'Зеленогорск - Комарово',
        year: 1985,
        url: './maps/forest/zelik/zelenogorsk_komarovo_1985.webp',
        link: './original_maps/forest/zelik/zelenogorsk_komarovo_1985_omaps.jpg',
        bounds: [[60.2464567, 29.7652245], [60.2214011, 29.8905373], [60.2005922, 29.727459]],
        author: 'KUZNTSV_S'
    },
    {
        name: 'Симагино',
        year: 1977,
        url: './maps/forest/zelik/simagino_1977.webp',
        link: ['./original_maps/forest/zelik/simagino_1977_omaps.jpg','./original_maps/forest/zelik/simagino_retro_omaps.jpg'],
        info: 'Многодневные сорвнования. Лен.обл.совет ДСО "Труд"',
        author: ['SRGV','TRNTV_V'],
        bounds: [[60.2874077, 29.796381], [60.2901302, 29.8670197], [60.2609359, 29.7985268]]
    },
    {
        name: 'Рощино, Линдуловская роща',
        year: 1971,
        info: 'По инициативе Н.В.Благово в районе пос.Рощино проведены первые массовые соревнования "<a href="https://o-site.spb.ru/history/History/wn.html">Белые Ночи</a>". Организаторами их были Л.Милова и Л.Фомичева, главный судья - А.Прохоров. Первые места в группе "A" заняли З.Пятакова и С.Крылов. <a href="./docs/1971/1971_06_12_wn_omaps.pdf">Протоколы результатов</a>.',
        logo: 'wn_1971.gif',
        url: './maps/forest/zelik/roschino_1971_wn.webp',
        link: './original_maps/forest/zelik/roschino_1971_wn_omaps.jpg',
        start: 'WN',
        bounds: [[60.2736212, 29.4934845], [60.2742596, 29.5640373], [60.23832, 29.4938278]],
    },
    {
        name: 'Решетниково',
        year: 1972,
        info: 'Первенство Ленинграда',
        logo: 'chip_1972.jpg',
        url: './maps/forest/zelik/reshetnikovo_1972.webp',
        link: './original_maps/forest/zelik/reshetnikovo_1972_M_omaps.jpg',
        author: ['SRGV','TRNTV_V'],
        bounds: [[60.2656189, 29.6854877], [60.2651507, 29.7468567], [60.2369992, 29.6850586]]
    },
    {
        name: 'Решетниково, Ловецкое оз',
        year: 1979,
        url: './maps/forest/zelik/reshetnikovo_1979.webp',
        link: './original_maps/forest/zelik/reshetnikovo_1979_omaps.jpg',
        author: ['SRGV','TRNTV_V'],
        bounds: [[60.2775577, 29.7128248], [60.2668534, 29.7334671], [60.2630646, 29.6823978]]
    },
    {
        name: 'Решетниково, Ловецкое оз',
        year: 2025,
        url: './maps/forest/zelik/lovetskoe_2025.webp',
        link: './original_maps/forest/zelik/lovetskoe_2025_omaps.gif',
        author: 'RDNV_I',
        bounds: [[60.2734935, 29.6956158], [60.2713016, 29.7204208], [60.254783, 29.6874619]],
        o_gps: 23863
    },
    {
        name: 'Рощино',
        year: 1990,
        url: './maps/forest/zelik/roschino_1990.webp',
        link: './original_maps/forest/zelik/roschino_1990_omaps.jpg',
        bounds: [[60.2696203, 29.525671], [60.2687264, 29.5727062], [60.2386182, 29.5208645]],
        author: ['KRCHNKO_S','KRCHNKO_N']
    },
    {
        name: 'Рощино',
        year: 1999,
        url: './maps/forest/zelik/roschino_1999.webp',
        link: './original_maps/forest/zelik/roschino_1999_omaps.jpg',
        bounds: [[60.268769, 29.5264435], [60.2681305, 29.5618916], [60.2387035, 29.5212507]],
        author: ['KRCHNKO_S','FDRV_L','FDRV_A']
    },
    {
        name: 'Ушково',
        year: 1,
        url: './maps/forest/zelik/ushkovo_old.webp',
        link: './original_maps/forest/zelik/ushkovo_old_omaps.jpg',
        bounds: [[60.2429637, 29.5539093], [60.2409828, 29.5994425], [60.2138765, 29.549489]]
    },
    {
        name: 'Серово',
        year: 1974,
        logo: 'bear_1974.jpg',
        url: './maps/forest/zelik/serovo_1974.webp',
        link: './original_maps/forest/zelik/serovo_1974_omaps.jpg',
        bounds: [[60.2375957, 29.5030975], [60.2378087, 29.5641232], [60.2029808, 29.50387]]
    },
    {
        name: 'Смолячково',
        year: 1,
        url: './maps/forest/zelik/smoljachkovo_retro.webp',
        link: './original_maps/forest/zelik/smoljachkovo_retro_omaps.webp',
        bounds: [[60.2068192, 29.4324589], [60.2032367, 29.5034409], [60.1764406, 29.4264936]],
    },
    {
        name: 'Смолячково',
        year: 1988,
        url: './maps/forest/zelik/smoljachkovo_1988.webp',
        link: './original_maps/forest/zelik/smoljachkovo_1988_omaps.jpg',
        bounds: [[60.2063501, 29.437952], [60.2028528, 29.50284], [60.1812638, 29.4311714]],
        author: 'BRDLN'
    },
    {
        name: 'ДОЛ Солнечный',
        year: 2004, // ?
        url: './maps/forest/zelik/dol_solnechny_2004.webp',
        link: ['./original_maps/forest/zelik/dol_solnechny_2004_omaps.jpg','./original_maps/forest/zelik/dol_solnechny_2004_omaps.gif','./original_maps/forest/zelik/dol_solnechny_2004_omaps.ocd'],
        bounds: [[60.1959745, 29.5110154], [60.1943213, 29.5363355], [60.1809224, 29.5070672]],
        author: 'FDRV_L'
    },
    {
        name: 'Смолячково',
        year: 2025,
        url: './maps/forest/zelik/smoljachkovo_2025.webp',
        link: './original_maps/forest/zelik/smoljachkovo_2025_omaps.gif',
        bounds: [[60.1825549, 29.495995], [60.1812958, 29.5070457], [60.1790871, 29.4944501]],
        author: ['IVNVA_G','TKMKVA_P'],
        owner: 'KP31'
    },
    {
        name: 'Молодёжное',
        year: 2005,
        url: './maps/forest/zelik/molodezhnoe_2004.webp',
        link: ['./original_maps/forest/zelik/molodezhnoe_2004_omaps.jpg','./original_maps/forest/zelik/molodezhnoe_2005_omaps.ocd'],
        bounds: [[60.2327382, 29.5039558], [60.2287749, 29.5414639], [60.2127465, 29.497304]],
        author: 'FDRV_L'
    },
    {
        name: 'Сосновая поляна, р Рощинка',
        year: 2020,
        url: './maps/forest/zelik/sosnovaya_polyana_roschinka_2020.webp',
        link: './original_maps/forest/zelik/sosnovaya_polyana_roschinka_2020_omaps.jpg',
        bounds: [[60.2270915, 29.5135689], [60.2263776, 29.5219159], [60.2199091, 29.5117235]],
        author: 'LVCHV'
    },
    {
        name: 'Песочная',
        year: 2008,
        url: './maps/forest/zelik/pesochnaya_2005.webp',
        link: ['./original_maps/forest/zelik/pesochnaya_2005_omaps.jpg','./original_maps/forest/zelik/pesochnaya_2008_omaps.ocd'],
        bounds: [[60.1226547, 30.1112509], [60.1170532, 30.1803017], [60.1068953, 30.1064014]],
        author: ['SHKLV','VSLVSKY','DRBSHV'],
        owner: 'SHKLV'
    },
    {
        name: 'Ольгино, Петровский пруд',
        year: 1997,
        url: './maps/forest/zelik/olgino_1997.webp',
        link: ['./original_maps/forest/zelik/olgino_1997_omaps.jpg','./original_maps/forest/zelik/olgino_1997_course_omaps.webp'],
        bounds: [[60.0606856, 30.0749016], [60.0556305, 30.1401329], [60.0238255, 30.0607395]],
        author: ['BZNV_A','KRCHKN_V']
    },
    {
        name: 'Дибуны',
        year: 1980,
        url: './maps/forest/zelik/dibuny_1980.webp',
        link: './original_maps/forest/zelik/dibuny_1980_omaps.jpg',
        bounds: [[60.134325, 30.0676918], [60.1219706, 30.1303482], [60.1127765, 30.0491524]],
        info: 'Спортивная радиопеленгация ДП им.Жданова.',
        owner: 'KSLV_VN',
        author: 'KZKV'
    },
    {
        name: 'Песочная',
        date: '1986-05-10',
        info: 'Приз Ленинградского телевидения.',
        results: './docs/1986/1986_05_10_tv_omaps.pdf',
        url: './maps/forest/zelik/pesochnaya_1986.webp',
        link: './original_maps/forest/zelik/pesochnaya_1986_omaps.jpg',
        bounds: [[60.1221844, 30.1107788], [60.117438, 30.1748085], [60.1069167, 30.106144]],
        author: 'VSLVSKY',
        owner: 'KSLV_VN',
        me: 'М-10',
        qtty: 10
    },
    {
        name: 'Песочная',
        year: 1998,
        url: './maps/forest/zelik/pesochnaya_1998.webp',
        link: ['./original_maps/forest/zelik/pesochnaya_1998_omaps.jpg','./original_maps/forest/zelik/pesochnaya_west_1998_omaps.webp'],
        bounds: [[60.1212865, 30.1283741], [60.1174594, 30.1739931], [60.1065958, 30.1230526]],
        author: ['VSLVSKY','DRBSHV']
    },
    {
        name: 'Солнечное, Дюны',
        date: '2007-09-16',
        info: 'ЧиП СПб, марафон',
        o_site: '070916',
        url: './maps/forest/zelik/solnechnoe-djuny_2007.webp',
        link: ['./original_maps/forest/zelik/solnechnoe-djuny_2007_1_omaps.gif','./original_maps/forest/zelik/solnechnoe-djuny_2007_2_omaps.gif','./original_maps/forest/zelik/solnechnoe-djuny_2007_3_omaps.gif','./original_maps/forest/zelik/sestroretsk-djuny_2007_omaps.ocd'],
        bounds: [[60.1480634, 29.9297619], [60.1450299, 29.9705315], [60.1304354, 29.9247837]],
        author: 'SHRNN',
        owner: 'SFSO_SPB'
    },
    {
        name: 'Симагино, юг',
        year: 1988,
        url: './maps/forest/zelik/simagino_south_1988.webp',
        link: './original_maps/forest/zelik/simagino_south_1988_omaps.jpg',
        bounds: [[60.2673217, 29.7907162], [60.2643844, 29.8526001], [60.2403224, 29.7847939]],
        author: 'TRSV',
        qtty: 10
    },
    {
        name: 'Симагино',
        year: 1988,
        url: './maps/forest/zelik/simagino_1988.webp',
        link: './original_maps/forest/zelik/simagino_1988_omaps.jpg',
        bounds: [[60.2926399, 29.7870255], [60.2910661, 29.8395538], [60.2576573, 29.7838497]],
        author: 'TRSV'
    },
    {
        name: 'Долгое оз, 104-я высота',
        year: 1983,
        url: './maps/forest/zelik/ilychevo_dolgoe_1983.webp',
        link: './original_maps/forest/zelik/ilychevo_dolgoe_1983_omaps.webp',
        bounds: [[60.3166209, 29.7085762], [60.3103722, 29.808054], [60.2822597, 29.7007656]],
        author: 'KUZNTSV_S'
    },
    {
        name: 'Долгое оз',
        year: 1979,
        url: './maps/forest/zelik/ilychevo_dolgoe_1979.webp',
        link: './original_maps/forest/zelik/ilychevo_dolgoe_1979_omaps.jpg',
        bounds: [[60.2932779, 29.7555256], [60.273834, 29.7980976], [60.2796216, 29.7320938]],
        author: 'TRSV'
    },
    {
        name: 'Долгое оз',
        year: 1983,
        url: './maps/forest/zelik/dolgoe_north_1983.webp',
        link: './original_maps/forest/zelik/dolgoe_north_1983_omaps.jpg',
        bounds: [[60.3168759, 29.7095203], [60.3144957, 29.7520924], [60.2929377, 29.7019672]],
        author: 'KRCHNKO_S'
    },
    {
        name: 'Репино',
        year: 1976,
        url: './maps/forest/zelik/repino_1976.webp',
        link: './original_maps/forest/zelik/repino_1976_omaps.jpg',
        info: 'Приз ЛОСТиЭ.',
        bounds: [[60.2318433, 29.8504543], [60.2315024, 29.9115658], [60.2087382, 29.8504543]],
    },
    {
        name: 'Репино, р Сестра',
        year: 1,
        url: './maps/forest/zelik/repino_sestra_retro.webp',
        link: './original_maps/forest/zelik/repino_sestra_retro_omaps.webp',
        bounds: [[60.2207191, 29.8504114], [60.2198239, 29.8757744], [60.2051346, 29.8489094]],
    },
    {
        name: 'Зеленогорск, оз Красавица',
        year: 1,
        url: './maps/forest/zelik/zelik_krasavitsa_retro.webp',
        link: './original_maps/forest/zelik/zelik_krasavitsa_retro_omaps.webp',
        bounds: [[60.2603824, 29.7847939], [60.2530157, 29.8145771], [60.2395129, 29.759388]],
        author: 'NKFRV_A'
    },
    {
        name: 'Зеленогорск',
        year: 1978,
        url: './maps/forest/zelik/zelenogorsk_1978.webp',
        link: './original_maps/forest/zelik/zelenogorsk_1978_omaps.jpg',
        bounds: [[60.194108, 29.6835566], [60.1913561, 29.7181034], [60.1874732, 29.6821404]],
        author: ['KUZNTSV_S','KUZNTSVA_Z']
    },
    {
        name: 'Зеленогорск, Комаровский берег',
        year: 1977,
        url: './maps/forest/zelik/zelenogorsk_komarovsky_bereg_1977.webp',
        link: './original_maps/forest/zelik/zelenogorsk_komarovsky_bereg_1977_omaps.webp',
        bounds: [[60.2013173, 29.7188759], [60.1906094, 29.7785282], [60.1914201, 29.7105503]],
        author: ['KUZNTSV_S','KUZNTSVA_Z']
    },
    {
        name: 'Зеленогорск, Комаровский берег',
        year: 1,
        url: './maps/forest/zelik/zelenogorsk_komarovsky_bereg.webp',
        link: './original_maps/forest/zelik/zelenogorsk_komarovsky_bereg_omaps.jpg',
        bounds: [[60.2003362, 29.7296906], [60.1858303, 29.8049641], [60.1894147, 29.7232533]],
        author: ['KUZNTSV_S','KUZNTSVA_Z']
    },
    {
        name: 'Ильичёво',
        year: 1991,
        url: './maps/forest/zelik/ilychevo_1991.webp',
        link: './original_maps/forest/zelik/ilychevo_1991_omaps.jpg',
        bounds: [[60.2728551, 29.7686577], [60.2713229, 29.8178387], [60.2462863, 29.7645378]],
        author: 'HSMTLN',
    },
    {
        name: 'Ильичёво',
        year: 1993,
        url: './maps/forest/zelik/ilychevo_1993.webp',
        link: './original_maps/forest/zelik/ilychevo_1993_omaps.jpg',
        bounds: [[60.2869397, 29.7404194], [60.2865568, 29.7961235], [60.2567631, 29.7390461]],
        author: ['APRN','HSMTLN','LVRV_R'],
        areas: [15,80,5]
    },
    {
        name: 'Ильичёво, оз Долгое',
        year: 1995,
        area: 11,
        url: './maps/forest/zelik/ilychevo_dolgoe_1995.webp',
        link: ['./original_maps/forest/zelik/ilychevo_dolgoe_1995_omaps.jpg','./original_maps/forest/zelik/ilychevo_dolgoe_1995_h21e_omaps.jpg'],
        bounds: [[60.3102447, 29.7049713], [60.3033145, 29.8117447], [60.2722592, 29.6927834]],
        author: ['KUZNTSV_S','KVZN']
    },
    {
        name: 'Зеленогорск, оз Щучье',
        year: 1961,
        url: './maps/forest/zelik/zelenogorsk_schuchye_1961.webp',
        link: './original_maps/forest/zelik/zelenogorsk_schuchye_1961_omaps.jpg',
        bounds: [[60.229606, 29.7618341], [60.2291159, 29.8108435], [60.2122349, 29.762392]],
    },
    {
        name: 'Зеленогорск, оз Щучье',
        year: 1970,
        url: './maps/forest/zelik/zelenogorsk_schuchye_1970.webp',
        link: './original_maps/forest/zelik/zelenogorsk_schuchye_1970_omaps.jpg',
        info: 'Первенство ОК Нефтехим.',
        bounds: [[60.235167, 29.7580147], [60.2332495, 29.8188686], [60.2003362, 29.7532082]]
    },
    {
        name: 'Зеленогорск, оз Щучье',
        date: '1971-09-13',
        start: 'USSR_V_1971',
        url: './maps/forest/zelik/zelenogorsk_schuchye_1971.webp',
        link: ['./original_maps/forest/zelik/zelenogorsk_schuchye_1971_omaps.jpg','./original_maps/forest/zelik/zelenogorsk_schuchye_1971_clean_omaps.jpg'],
        info: 'Лично-командное первенство.',
        bounds: [[60.2235751, 29.7465992], [60.2539526, 29.8276234], [60.1949186, 29.7912312]]
    },
    {
        name: 'Ленинское',
        year: 1,
        url: './maps/forest/zelik/leninskoe_old.webp',
        link: './original_maps/forest/zelik/leninskoe_old_omaps.jpg',
        bounds: [[60.2514825, 29.8290825], [60.2449232, 29.8906231], [60.2305435, 29.820714]]
    },
    {
        name: 'Озерки',
        date: '1971-09-14',
        start: 'USSR_V_1971',
        url: './maps/forest/zelik/ozerki_1971.webp',
        link: './original_maps/forest/zelik/ozerki_1971_omaps.jpg',
        info: 'Эстафета.',
        bounds: [[60.3330658, 29.6860027], [60.3329384, 29.7424793], [60.3017837, 29.6854877]]
    },
    {
        name: 'Зеленогорск, оз Щучье',
        year: 1982,
        info: 'Кубок Ленинграда.',
        logo: 'ded_1982.jpg',
        url: './maps/forest/zelik/zelenogorsk_schuchye_1982.webp',
        link: './original_maps/forest/zelik/zelenogorsk_schuchye_1982_omaps.jpg',
        bounds: [[60.2343574, 29.7478008], [60.2323973, 29.7938061], [60.2027248, 29.7423935]]
    },
    {
        name: 'Зеленогорск, оз Щучье',
        date: '1972-06-10',
        start: 'WN',
        url: './maps/forest/zelik/zelenogorsk_schuchye_1972.webp',
        link: './original_maps/forest/zelik/zelenogorsk_schuchye_1972_omaps.jpg',
        bounds: [[60.2217208, 29.7508907], [60.2219127, 29.8330307], [60.1921668, 29.759388]]
    },
    {
        name: 'Зеленогорск, оз Щучье',
        year: 1979,
        url: './maps/forest/zelik/zelenogorsk_schuchye_1979.webp',
        link: ['./original_maps/forest/zelik/zelenogorsk_schuchye_1979_omaps.jpg','./original_maps/forest/zelik/zelenogorsk_schuchye_1978_omaps.jpg'],
        bounds: [[60.2268357, 29.742651], [60.2249391, 29.7828627], [60.2026609, 29.7386169]],
        author: 'SPZHNKV_Y'
    },
    {
        name: 'Зеленогорск, оз Щучье',
        year: 1986,
        url: './maps/forest/zelik/zelenogorsk_schuchye_1986.webp',
        link: ['./original_maps/forest/zelik/zelenogorsk_schuchye_1986_omaps.jpg','./original_maps/forest/zelik/zelenogorsk_schuchye_1986_wo_black_omaps.webp'],
        bounds: [[60.231545, 29.7396469], [60.2282635, 29.8069382], [60.206478, 29.7346687]],
        author: 'SHRNN'
    },
    {
        name: 'Репино',
        year: 1983,
        url: './maps/forest/zelik/repino_1983.webp',
        link: './original_maps/forest/zelik/repino_1983_omaps.jpg',
        bounds: [[60.2117658, 29.8198986], [60.2085677, 29.8688221], [60.1917401, 29.8143625]],
        author: ['BKSTN','IVNV_V','PTRV_A','TNV'],
        areas: [40,10,40,10]
    },
    {
        name: 'Комарово - Репино',
        year: 2008,
        logo: 'sestroretsk.webp',
        url: './maps/forest/zelik/komarovo_repino_2008.webp',
        link: ['./original_maps/forest/zelik/komarovo_repino_2008_omaps.gif','./original_maps/forest/zelik/komarovo_repino_2008_omaps.ocd'],
        bounds: [[60.2087382, 29.8183107], [60.206414, 29.866848], [60.1913348, 29.8144913]],
        author: 'FDRV_L',
    },
    {
        name: 'Зеленогорск, оз Щучье',
        year: 2000,
        area: 15,
        url: './maps/forest/zelik/zelenogorsk_priboy_2000.webp',
        link: ['./original_maps/forest/zelik/zelenogorsk_priboy_2000_omaps.jpg','./original_maps/forest/zelik/zelik_simagino_2015_omaps.ocd'],
        photo: './tracks/zelenogorsk/pic_1.jpg',
        bounds: [[60.2478197, 29.7302055], [60.2377661, 29.8478794], [60.199867, 29.7148418]],
        author: ['TKMKV_K','KUZNTSV_S','SHRNN']
    },
    {
        name: 'Зеленогорск, оз Щучье',
        year: 2005,
        url: './maps/forest/zelik/zelenogorsk_schuchye_2005.webp',
        link: ['./original_maps/forest/zelik/zelenogorsk_schuchye_2005_omaps.jpg','./original_maps/forest/zelik/zelenogorsk_schuchye_2005_15000_omaps.jpg'],
        bounds: [[60.234954, 29.7252274], [60.2313745, 29.8148346], [60.1936387, 29.7155285]],
        author: ['BYMKV','KUZNTSV_S','SHRNN','VSLVSKY']
    },
    {
        name: 'Зеленогорск - Ленинское',
        year: 2008,
        url: './maps/forest/zelik/zelenogorsk_leninskoe_2008.webp',
        link: ['./original_maps/forest/zelik/zelenogorsk_leninskoe_2008_omaps.gif','./original_maps/forest/zelik/zelenogorsk_leninskoe_2008_omaps.ocd'],
        restricted: 'с 19.03.2026 по 14.09.2026, Невский спринт',
        bounds: [[60.2398538, 29.7234249], [60.2321416, 29.8320866], [60.19398, 29.7144985]],
        author: ['VSLVSKY','DRBSHV']
    },
    {
        name: 'Комарово',
        year: 2014,
        url: './maps/forest/zelik/komarovo_2014.webp',
        link: ['./original_maps/forest/zelik/komarovo_2014_omaps.gif','./original_maps/forest/zelik/komarovo_2014_omaps.ocd'],
        bounds: [[60.2039617, 29.7920036], [60.2001016, 29.837966], [60.18455, 29.7852659]],
        author: 'VSLVSKY'
    },
/*
    {
        name: 'Зеленогорск, оз Щучье',
        year: 2000,
        url: './maps/forest/zelik/zelenogorsk_schuchye_2011.webp',
        link: './original_maps/forest/zelik/zelenogorsk_schuchye_2011_omaps.jpg',
        bounds: [[60.2378939, 29.7479725], [60.2325251, 29.8150921], [60.2037485, 29.7362137]],
        author: 'SHRNN',
        owner: 'SHRNN'
    },
*/
    {
        name: 'Зеленогорск - Комарово',
        year: 1992,
        start: 'NA',
        page: 'spb',
        url: './maps/forest/zelik/zelenogorsk_komarovo_1992.webp',
        link: './original_maps/forest/zelik/zelenogorsk_komarovo_1992_omaps.jpg',
        bounds: [[60.2175218, 29.738102], [60.212576, 29.8031616], [60.1930414, 29.7286606]],
        author: 'BYMKV'
    },
    {
        name: 'Зеленогорск, Прибой',
        year: 1992,
        logo: 'nevsky_azimut.gif',
        url: './maps/forest/zelik/zelenogorsk_priboy_1992.webp',
        link: './original_maps/forest/zelik/zelenogorsk_priboy_1992_omaps.jpg',
        bounds: [[60.2273685, 29.7204208], [60.2225094, 29.7762108], [60.1970943, 29.7114086]],
        author: 'BYMKV',
        qtty: 2
    },
    {
        name: 'Черные оз, Ленинское',
        year: 1999,
        url: './maps/forest/zelik/zelenogorsk_chernye_1999.webp',
        link: './original_maps/forest/zelik/zelenogorsk_chernye_1999_omaps.webp',
        bounds: [[60.2462011, 29.7588301], [60.235934, 29.8437595], [60.2183957, 29.7448397]],
        author: ['KUZNTSV_S','SHRNN'],
        excluded: true
    },
    {
        name: 'Зеленогорск, оз Красавица',
        year: 1998,
        url: './maps/forest/zelik/krasavitsa_1998.webp',
        link: './original_maps/forest/zelik/krasavitsa_1998_omaps.jpg',
        bounds: [[60.2576147, 29.7336817], [60.2543572, 29.7893858], [60.2355505, 29.7292185]],
        info: 'Первая карта Константина Токмакова.',
        author: 'TKMKV_K',
        owner: 'TOKM'
    },
    {
        name: 'Зеленогорск, Дружинное оз',
        year: 1,
        url: './maps/forest/zelik/zelenogorsk_druzhinnoe_retro.webp',
        link: './original_maps/forest/zelik/zelenogorsk_druzhinnoe_retro_omaps.webp',
        bounds: [[60.2487994, 29.7694302], [60.2401307, 29.7886133], [60.2292224, 29.7315788]],
    },
    {
        name: 'Зеленогорск, Дружинное оз',
        year: 1985,
        url: './maps/forest/zelik/zelenogorsk_chertovo_oz_1995.webp',
        link: ['./original_maps/forest/zelik/zelenogorsk_chertovo_oz_1995_omaps.jpg','./original_maps/forest/zelik/zelenogorsk_chertovo_oz_1985_omaps.webp'],
        bounds: [[60.2400242, 29.7620487], [60.2312893, 29.7738075], [60.2304796, 29.7349262]],
        author: 'KUZNTSV_S'
    },
    {
        name: 'Зеленогорск, Дружинное оз',
        year: 2002,
        url: './maps/forest/zelik/zelenogorsk_druzhinnoe_2002.webp',
        link: './original_maps/forest/zelik/zelenogorsk_druzhinnoe_2002_omaps.jpg',
        bounds: [[60.2382135, 29.7350121], [60.2355718, 29.7718763], [60.219291, 29.729991]],
        author: ['VLKV_K','URVNTSV']
    },
    {
        name: 'Зеленогорск, Дружинное оз',
        year: 2024,
        url: './maps/forest/zelik/zelenogorsk_druzhinnoe_2024.webp',
        link: './original_maps/forest/zelik/zelenogorsk_druzhinnoe_2024_omaps.jpg',
        bounds: [[60.2437305, 29.7356987], [60.2404076, 29.776125], [60.2190992, 29.7258282]],
        author: 'RDNV_I',
        owner: 'RDNV_I'
    },
    {
        name: 'Зеленогорск, оз Щучье',
        year: 2020,
        url: './maps/forest/zelik/zelenogorsk_schuchye_2020.webp',
        bounds: [[60.2360618, 29.7514057], [60.2318859, 29.8020458], [60.2181613, 29.7456551]],
        author: 'MKHLV_A',
        owner: 'WN'
    },
    {
        name: 'Зеленогорск, Чёрные оз',
        year: 1979,
        url: './maps/forest/zelik/zelenogorsk_chernye_1979.webp',
        link: './original_maps/forest/zelik/zelenogorsk_chernye_1979_omaps.jpg',
        bounds: [[60.2324825, 29.7834635], [60.2308205, 29.8309278], [60.2140257, 29.7797298]],
        author: 'SPZHNKV_Y',
        owner: 'KSLV_VN'
    },
    {
        name: 'Зеленогорск, Чёрные оз',
        year: 1995,
        url: './maps/forest/zelik/zelenogorsk_chernye_1995.webp',
        link: './original_maps/forest/zelik/zelenogorsk_chernye_1995_omaps.jpg',
        bounds: [[60.2468826, 29.7570705], [60.2409189, 29.8197269], [60.2173086, 29.7442818]],
        author: ['HSMTLN','BYMKV']
    },
    {
        name: 'Горки, Ильичёвское оз',
        year: 2012,
        url: './maps/forest/zelik/gorki_2012.webp',
        bounds: [[60.2999764, 29.7328234], [60.2974886, 29.7723913], [60.2863228, 29.7287893]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN'
    },
    {
        name: 'Ильичёво',
        url: './maps/forest/zelik/ilychevo.webp',
        bounds: [[60.2782386, 29.756813], [60.2765789, 29.7787428], [60.2614468, 29.7514486]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN'
    },
    {
        name: 'Ильичёво',
        year: 2016,
        url: './maps/forest/zelik/ilychevo_2016.webp',
        bounds: [[60.2833659, 29.7384453], [60.2804726, 29.775095], [60.270578, 29.7342825]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN'
    },
    {
        name: 'Ильичёво - Симагино',
        date: '2015-09-06',
        info: 'ЧиП СПб, марафон',
        o_site: '150906',
        url: './maps/forest/zelik/ilychevo-simagino_2015.webp',
        link: ['./original_maps/forest/zelik/ilychevo_simagino_2015_omaps.jpg','./original_maps/forest/zelik/ilychevo_simagino_2015_marathon_omaps.jpg','./original_maps/forest/zelik/zelik_simagino_2015_omaps.ocd'],
        o_gps: {
            'МЭ': 657,
            'ЖЭ': 658
        },
        bounds: [[60.2924698, 29.7929478], [60.2874927, 29.8671913], [60.2435601, 29.7726059]],
        author: ['KUZNTSV_S','SHRNN'],
        owner: 'SFSO_SPB'
    },
    {
        name: 'Болотная станция',
        date: '2025-10-05',
        url: './maps/forest/zelik/bolotnaya_station_2025.webp',
        link: './original_maps/forest/zelik/bolotnaya_station_2025_omaps.gif',
        bounds: [[60.2637671, 29.7961235], [60.2590412, 29.8467207], [60.2466058, 29.7899008]],
        info: 'Невский спринт.',
        o_site: '251007_NS',
        o_gps: 23575,
        publish: 'https://vk.com/album-230167293_311285775',
        author: 'CHGRVSKY_V',
        owner: 'SFSO_SPB',
        planner: 'CHGRVSKY_V',
        restricted: 'с 19.03.2026 по 14.09.2026, Невский спринт',
        me: 'Фит'
    },
    {
        name: 'Болотная станция',
        year: 2019,
        url: './maps/forest/zelik/bolotnaya_station_2019.webp',
        bounds: [[60.2675771, 29.7951794], [60.2645121, 29.830327], [60.2446889, 29.7866392]],
        author: 'MKHLV_A',
        owner: 'WN'
    },
    {
        name: 'Зеленогорск, Чёрные оз',
        year: 2023,
        url: './maps/forest/zelik/zelenogorsk_chernye_2023.webp',
        bounds: [[60.2483308, 29.7788715], [60.2442843, 29.813633], [60.2240013, 29.7669411]],
        author: 'MKHLV_A',
        owner: 'WN'
    },
    {
        name: 'Комарово',
        year: 1985,
        url: './maps/forest/zelik/komarovo_1990.webp',
        link: './original_maps/forest/zelik/komarovo_1990_omaps.jpg',
        bounds: [[60.1855956, 29.8049641], [60.1752454, 29.8565912], [60.1734952, 29.7949219]],
        author: ['SHRNN','FDRV_L']
    },
    {
        name: 'Зеленогорск, Комаровский берег',
        year: 2012,
        url: './maps/forest/zelik/zelenogorsk_komarovsky_bereg_2012.webp',
        link: './original_maps/forest/zelik/zelenogorsk_komarovsky_bereg_2012_omaps.webp',
        bounds: [[60.1879852, 29.7804594], [60.186353, 29.8045135], [60.1774331, 29.7778416]],
        author: 'DRBSHV'
    },
    {
        name: 'Комарово',
        year: 2013,
        url: './maps/forest/zelik/komarovo_2013.webp',
        link: ['./original_maps/forest/zelik/komarovo_2013_omaps.gif','./original_maps/forest/zelik/komarovo_2009_omaps.ocd'],
        bounds: [[60.1815839, 29.8056936], [60.178959, 29.8556042], [60.1682439, 29.8022175]],
        author: ['SHRNN','ZNDR']
    },
    {
        name: 'Рощино',
        year: 2025,
        url: './maps/forest/zelik/roschino_2025.webp',
        link: './original_maps/forest/zelik/roschino_2025_omaps.jpg',
        o_gps: 21692,
        bounds: [[60.2858123, 29.5904732], [60.2844934, 29.6394396], [60.2670024, 29.5884132]],
        author: 'SHRPVA',
        owner: 'SHRPVA'
    },
    {
        name: 'Рощино',
        year: 2009,
        url: './maps/forest/zelik/roschino_2009.webp',
        link: ['./original_maps/forest/zelik/roschino_2009_omaps.jpg','./original_maps/forest/zelik/roschino_2009_omaps.ocd'],
        bounds: [[60.2763449, 29.5644236], [60.2754299, 29.6019316], [60.2632988, 29.5626211]],
        author: ['VSLVSKY','DRBSHV']
    },
    {
        name: 'Рощино',
        year: 2012,
        url: './maps/forest/zelik/roschino_2012.webp',
        link: './original_maps/forest/zelik/roschino_2012_omaps.jpg',
        bounds: [[60.271823, 29.5825982], [60.2719613, 29.6010518], [60.2638203, 29.5828342]],
        author: 'SHRNN'
    },
    {
        name: 'Пухтолова гора',
        year: 2009, //Реально более ранняя
        url: './maps/forest/zelik/pukhtolova_gora_2009.webp',
        link: './original_maps/forest/zelik/pukhtolova_gora_2009_omaps.jpg',
        bounds: [[60.2426655, 29.6290541], [60.2398751, 29.678278], [60.2287962, 29.6254063]],
        author: ['BLZRV_V','URVNTSV','NKFRV_A']
    },
    {
        name: 'Пухтолова гора',
        year: 2025,
        url: './maps/forest/zelik/pukhtolova_gora_2025.webp',
        link: './original_maps/forest/zelik/pukhtolova_gora_2025_omaps.jpg',
        bounds: [[60.2611487, 29.6388817], [60.253761, 29.7023535], [60.2288815, 29.6234751]],
        author: ['URVNTSV','NKFRV_A'],
        owner: 'ANCHKV'
    },
    {
        name: 'Пухтолова гора',
        year: 1979,
        url: './maps/forest/zelik/pukhtolova_gora_1979.webp',
        link: ['./original_maps/forest/zelik/pukhtolova_gora_1979_omaps.jpg','./original_maps/forest/zelik/pukhtolova_gora_1979_omaps.webp'],
        bounds: [[60.2454344, 29.6376801], [60.2439861, 29.6933842], [60.2171381, 29.6337318]],
        author: 'GRZNVCH'
    },
    {
        name: 'Пухтолова гора',
        year: 1993,
        url: './maps/forest/zelik/pukhtolova_gora_1993.webp',
        link: ['./original_maps/forest/zelik/pukhtolova_gora_1993_omaps.webp','./original_maps/forest/zelik/pukhtolova_gora_1993_winter_omaps.webp'],
        bounds: [[60.2449658, 29.6391392], [60.2415153, 29.6942425], [60.2176497, 29.6324444]],
        author: ['HSMTLN','APRN']
    },
    {
        name: 'Пухтолова гора',
        year: 2017,
        url: './maps/forest/zelik/pukhtolova_gora_2023.webp',
        bounds: [[60.24192, 29.6451044], [60.2389378, 29.6822262], [60.228711, 29.6410275]],
        author: 'MKHLV_A',
        owner: 'WN'
    },
    {
        name: 'Пухтолова гора',
        year: 2026,
        url: './maps/trnsprnt.png',
        bounds: [[60.2366157, 29.6719265], [60.2378087, 29.6901226], [60.2279652, 29.6724415]],
        restricted: 'с 19.03.2026 по 14.09.2026, Невский спринт',
        owner: 'SFSO_SPB',
    },
    {
        name: 'Озерки',
        year: 2015,
        url: './maps/forest/zelik/ozerki_2022.webp',
        bounds: [[60.3206798, 29.6905947], [60.3172797, 29.7255278], [60.3002315, 29.6822691]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN'
    },
    {
        name: 'Линдуловская роща',
        year: 2022,
        url: './maps/forest/zelik/lindulovskaya_roscha_2015.webp',
        link: './original_maps/forest/zelik/lindulovskaya_roscha_2015_omaps.jpg',
        bounds: [[60.2565928, 29.5251989], [60.2556347, 29.5424509], [60.2391934, 29.5218515]],
        author: 'RDNV_I',
        owner: 'RDNV_I'
    },
    {
        name: 'Серово',
        year: 2024,
        url: './maps/forest/zelik/serovo_2024.webp',
        link: './original_maps/forest/zelik/serovo_2024_omaps.jpg',
        bounds: [[60.2235751, 29.5615482], [60.216328, 29.6319294], [60.1976062, 29.5503902]],
        author: 'RDNV_I',
        owner: 'RDNV_I'
    },
    {
        name: 'Серово',
        year: 2006,
        url: './maps/forest/zelik/serovo_2006.webp',
        link: ['./original_maps/forest/zelik/serovo_2006_omaps.gif','./original_maps/forest/zelik/serovo_2006_omaps.ocd'],
        bounds: [[60.2046228, 29.5427728], [60.2045695, 29.5543385], [60.200091, 29.542923]],
        author: 'FDRV_L',
    },
    {
        name: 'Белоостров',
        year: 1982,
        url: './maps/forest/zelik/beloostrov_1982.webp',
        link: './original_maps/forest/zelik/beloostrov_1982_omaps.jpg',
        bounds: [[60.1471021, 29.9894142], [60.1459913, 30.0065804], [60.1362483, 29.9878693]],
        author: 'CHGRVSKY_V'
    },
    {
        name: 'Старый Белоостров',
        year: 2007,
        url: './maps/forest/zelik/old_beloostrov_2007.webp',
        link: './original_maps/forest/zelik/old_beloostrov_2007_omaps.jpg',
        bounds: [[60.2153687, 30.0346041], [60.2132582, 30.0643444], [60.2050706, 30.0312138]],
        author: ['SHRNN','RYLOV_V'],
        areas: [70, 30],
        zindex: 2
    },
    {
        name: 'Белоостров - Удачное',
        year: 2007,
        url: './maps/forest/zelik/beloostrov_udachnoe_2007.webp',
        link: './original_maps/forest/zelik/beloostrov_udachnoe_2007_omaps.jpg',
        bounds: [[60.2246407, 29.9520779], [60.2182039, 30.0322437], [60.2037058, 29.947958]],
        author: ['RYLOV_V','SHRNN']
    },
    {
        name: 'Белоостров - Удачное',
        year: 2024,
        url: './maps/forest/zelik/beloostrov_udachnoe_2024.webp',
        link: ['./original_maps/forest/zelik/beloostrov_udachnoe_2024_omaps.jpg','./original_maps/forest/zelik/beloostrov_udachnoe_2020_omaps.ocd'],
        author: ['RYLOV_V','SHRNN','RDNV_I'],
        bounds: [[60.2248538, 29.9519062], [60.2185449, 30.0324154], [60.2036632, 29.9461555]],
        owner: ['RDNV_I','SHRNN']
    },
    {
        name: 'Сестрорецк, Ржавая канава',
        year: 1996,
        url: './maps/forest/zelik/sestroretsk_rjavaya_kanava_1996.webp',
        link: './original_maps/forest/zelik/sestroretsk_rjavaya_kanava_1996_omaps.webp',
        bounds: [[60.1430003, 29.9508333], [60.1404578, 29.9881268], [60.1185712, 29.9448681]],
        logo: 'wn_retro.webp',
        author: 'MLVA_M'
    },
    {
        name: 'Сестрорецкие Дюны',
        year: 2019,
        url: './maps/forest/zelik/sestroretskie_djuny_2019.webp',
        link: ['./original_maps/forest/zelik/sestroretskie_djuny_2019_omaps.jpg','./original_maps/forest/zelik/sestroretsk-djuny_2007_omaps.ocd'],
        bounds: [[60.1298156, 29.9431729], [60.1267163, 29.9585152], [60.1233067, 29.938302]],
        author: 'SHRNN',
        owner: 'SHRNN'
    },
    {
        name: 'Сестрорецкие Дюны',
        year: 2022,
        url: './maps/forest/zelik/sestroretskie_djuny_2021.webp',
        bounds: [[60.1185392, 29.9686432], [60.1184109, 29.9755955], [60.1133111, 29.9670339]],
        author: 'DRBSHV'
    },
    {
        name: 'Сестрорецкие Дюны',
        year: 2022,
        url: './maps/forest/zelik/sestroretskie_djuny_2022.webp',
        link: './original_maps/forest/zelik/sestroretskie_djuny_2022_omaps.jpg',
        bounds: [[60.1296125, 29.9398041], [60.1274644, 29.9599314], [60.1226761, 29.937036]],
        author: ['TKMKV_K','TKMKVA_P','IVNVA_G','KVZN'],
        owner: 'SFSO_SPB'
    },
    {
        name: 'Сестрорецк, Детские Дюны',
        url: './maps/forest/zelik/sestroretsk_detskie_djuny.webp',
        link: './original_maps/forest/zelik/sestroretsk_detskie_djuny_omaps.jpg',
        bounds: [[60.1187743, 29.9585366], [60.117855, 29.9706602], [60.1116004, 29.9567986]]
    },
    {
        name: 'Сестрорецк, Детские Дюны',
        year: 2010,
        url: './maps/forest/zelik/sestroretskie_detskie_djuny_2010.webp',
        link: './original_maps/forest/zelik/sestroretskie_detskie_djuny_2010_omaps.jpg',
        bounds: [[60.1226333, 29.9573565], [60.1222806, 29.9722266], [60.1169356, 29.9566698]],
        author: 'SHRNN'
    },
    {
        name: 'Сестрорецк, Детские Дюны',
        year: 1,
        url: './maps/forest/zelik/sestroretskie_detskie_djuny_retro.webp',
        link: './original_maps/forest/zelik/sestroretskie_detskie_djuny_retro_omaps.webp',
        bounds: [[60.1282766, 29.95152], [60.1271224, 29.9795866], [60.1117287, 29.9477863]],
    },
    {
        name: 'Сестрорецк, Детские Дюны',
        year: 2005,
        url: './maps/forest/zelik/sestroretskie_detskie_djuny_2005.webp',
        link: ['./original_maps/forest/zelik/sestroretskie_detskie_djuny_2005_omaps.jpg','./original_maps/forest/zelik/sestroretsk-djuny_2007_omaps.ocd'],
        bounds: [[60.1226333, 29.9572277], [60.1223126, 29.9720979], [60.1169142, 29.9567127]],
        author: 'SHRNN',
        excluded: true
    },
    {
        name: 'Сестрорецк, Детские Дюны',
        year: 2020,
        url: './maps/forest/zelik/sestroretskie_detskie_djuny_2020.webp',
        link: './original_maps/forest/zelik/sestroretskie_detskie_djuny_2020_omaps.gif',
        bounds: [[60.1229647, 29.962163], [60.121404, 29.9743724], [60.1176946, 29.9590516]],
        author: ['SHRNN','BBCH_A','KUZNTSV_A'],
    },
    {
        name: 'Сестрорецк, Дюны, ТЭЦ',
        url: './maps/forest/zelik/sestroretskie_djuny_tets.webp',
        link: ['./original_maps/forest/zelik/sestroretskie_djuny_tets_omaps.jpg','./original_maps/forest/zelik/sestroretsk-djuny_2007_omaps.ocd'],
        bounds: [[60.1278385, 29.9572062], [60.1270262, 29.967742], [60.1224302, 29.9554253]],
        author: 'SHRNN',
        owner: 'SHRNN'
    },
    {
        name: 'Тарховка',
        year: 1987,
        url: './maps/forest/zelik/tarkhovka_1987.webp',
        link: './original_maps/forest/zelik/tarkhovka_1987_omaps.jpg',
        bounds: [[60.0732343, 29.9461985], [60.0720781, 29.9758101], [60.0588221, 29.9427223]],
        author: 'BBNN_I'
    },
    {
        name: 'Тарховка',
        year: 1997,
        url: './maps/forest/zelik/tarkhovka_1997.webp',
        link: './original_maps/forest/zelik/tarkhovka_1997_omaps.webp',
        bounds: [[60.076253, 29.9470997], [60.0750541, 29.9774408], [60.0588435, 29.942379]],
        author: 'MLVA_M',
        logo: 'wn_retro.webp'
    },
    {
        name: 'Тарховка',
        year: 1980,
        url: './maps/forest/zelik/tarkhovka_1980.webp',
        link: './original_maps/forest/zelik/tarkhovka_1980_omaps.jpg',
        bounds: [[60.0723779, 29.9455118], [60.0715, 29.9748659], [60.0589506, 29.9442244]],
        author: 'VLKV_K'
    },
    {
        name: 'Лисий Нос - Лахта',
        year: 1986,
        url: './maps/forest/zelik/lisy_nos_1986.webp',
        link: './original_maps/forest/zelik/lisy_nos_1986_omaps.jpg',
        bounds: [[60.0106788, 30.0137901], [60.0062811, 30.0710821], [59.9993724, 30.009799]],
        author: ['FRSHLVA','FRSHLV'],
    },
    {
        name: 'Сестрорецк, Таможенная дорога',
        year: 2012,
        url: './maps/forest/zelik/sestroretsk_tamozhennaya_doroga_2012.webp',
        link: ['./original_maps/forest/zelik/sestroretsk_tamozhennaya_doroga_2012_omaps.gif','./original_maps/forest/zelik/sestroretsk-djuny_2007_omaps.ocd'],
        bounds: [[60.140586, 29.9504471], [60.1389835, 29.967742], [60.1278919, 29.9467134]],
        author: 'SHRNN',
        zindex: 2
    },
    {
        name: 'Сестрорецк, Таможенная дорога',
        year: 2021,
        url: './maps/forest/zelik/sestroretsk_tamozhennaya_doroga_2021.webp',
        bounds: [[60.1386202, 29.9506187], [60.1373381, 29.9654245], [60.1282553, 29.9463701]],
        o_gps: 24008,
        author: 'MKHLV_A',
        owner: 'WN',
        zindex: 3
    },
    {
        name: 'Сестрорецк, Ласковый пляж',
        year: 2023,
        url: './maps/forest/zelik/sestroretsk_pljazh_laskovy_2023.webp',
        link: './original_maps/forest/zelik/sestroretsk_pljazh_laskovy_2023_omaps.jpg',
        bounds: [[60.1459058, 29.9258137], [60.1440365, 29.9421], [60.1388018, 29.9229598]],
        author: 'KUZNTSV_A',
        owner: 'SFSO_SPB'
    },
    {
        name: 'Сестрорецк, Ласковый пляж',
        year: 2026,
        url: './maps/forest/zelik/sestroretsk_pljazh_laskovy_2026.webp',
        link: './original_maps/forest/zelik/sestroretsk_pljazh_laskovy_2026_omaps.gif',
        bounds: [[60.1461515, 29.9263716], [60.1447949, 29.9421], [60.1392292, 29.923625]],
        info: 'Использованы материалы карты 23-го года Александра Кузнецова.',
        author: 'SHRNN', // 'KUZNTSV_A' попросил убрать себя
        owner: 'SFSO_SPB'
    },
/*
    {
        name: 'Симагино - Майнило',
        year: 2013,
        url: './maps/forest/zelik/simagino_maynilo_2013.webp',
        bounds: [[60.2838765, 29.8797226], [60.2777067, 29.9567127], [60.2604675, 29.8716545]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN'
    },
    {
        name: 'Воронцовское',
        year: 2014,
        url: './maps/forest/zelik/vorontsovskoe_2014.webp',
        bounds: [[60.3194261, 29.8882198], [60.3166209, 29.9323368], [60.296, 29.8827267]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN'
    },
    {
        name: 'Воронцовское',
        year: 2013,
        url: './maps/forest/zelik/vorontsovskoe_2013.webp',
        bounds: [[60.3201061, 29.8691654], [60.3159834, 29.9318218], [60.2944263, 29.8620415]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN'
    },
    {
        name: 'Воронцовское - Симагино',
        year: 2016,
        url: './maps/forest/zelik/vorontsovskoe_simagino_2016.webp',
        bounds: [[60.2998276, 29.8641014], [60.2940861, 29.9445248], [60.2778769, 29.8583508]],
        author: ['MKHLV_A','SLBDNK','USNKO'],
        owner: 'WN'
    },
*/
    {
        name: 'Воронцовское - Симагино',
        year: 2021,
        area: 27,
        info: '2013-2021гг.',
        url: './maps/forest/zelik/vorontsovskoe_simagino_2021.webp',
        bounds: [[60.3236333, 29.8575783], [60.3144531, 29.9967957], [60.2530157, 29.8380089]],
        author: ['MKHLV_A','SLBDNK','USNKO'],
        owner: 'WN'
    },
    {
        name: 'Воронцовское',
        year: 1964,
        info: '19-20.09. Первенство ЛОС ДСО "Труд" по туристскому двоеборью. Ориентирование в заданном направлении, ночное, командное.',
        url: './maps/forest/zelik/vorontsovskoe_1964.webp',
        link: ['./original_maps/forest/zelik/vorontsovskoe_1964_bw_omaps.jpg','./original_maps/forest/zelik/vorontsovskoe_1964_omaps.jpg'],
        bounds: [[60.3017837, 29.824791], [60.2985518, 29.9619484], [60.247479, 29.8182678]]
    },
    {
        name: 'Пасторское оз',
        year: 1982,
        url: './maps/forest/zelik/pastorskoe_1982.webp',
        link: './original_maps/forest/zelik/pastorskoe_1982_omaps.jpg',
        bounds: [[60.2416218, 30.0145197], [60.2389378, 30.0638294], [60.2246833, 30.0115585]],
        author: ['IVNVA_I','STPNVA_I']
    },
    {
        name: 'Пасторское-Медное оз',
        year: 2009,
        area: 20,
        url: './maps/forest/zelik/pastorskoe_mednoe_2009.webp',
        link: './original_maps/forest/zelik/pastorskoe_mednoe_2009_omaps.jpg',
        bounds: [[60.2496512, 30.0098419], [60.2356783, 30.1758385], [60.2113821, 29.9961948]],
        author: 'CHGRVSKY_V',
        owner: 'CHGRVSKY_M'
    },
    {
        name: 'Пасторское оз',
        year: 2024,
        url: './maps/forest/zelik/pastorskoe_2024.webp',
        link: './original_maps/forest/zelik/pastorskoe_2024_omaps.jpg',
        publish: ['https://vk.com/album-230167293_311033082','https://t.me/dlitelnyy/562'],
        bounds: [[60.2526324, 29.9881268], [60.2452214, 30.0600529], [60.228093, 29.9775696]],
        author: ['CHGRVSKY_V','CHGRVSKY_Y'],
        owner: 'SFSO_SPB',
        zindex: 2
    },
    {
        name: 'Молодёжное, ДОЛ Маяк',
        year: 2013,
        url: './maps/forest/zelik/molodezhnoe_mayak_2013.webp',
        link: ['./original_maps/forest/zelik/molodezhnoe_mayak_2013_omaps.gif','./original_maps/forest/zelik/molodezhnoe_mayak_2013_omaps.ocd'],
        bounds: [[60.2068618, 29.5282459], [60.2077787, 29.5386958], [60.2023623, 29.5303488]],
        type: ['CITY']
    },
    {
        name: 'Молодёжное, Марьина гора',
        year: 2024,
        url: './maps/forest/zelik/molodezhnoe_2024.webp',
        link: './original_maps/forest/zelik/molodezhnoe_2024_omaps.jpg',
        bounds: [[60.2060302, 29.5209289], [60.2030021, 29.5510554], [60.1954839, 29.5167232]],
        author: 'ZCHNV',
        owner: 'SFSO_SPB'
    },
    {
        name: 'Молодёжное, Марьина гора',
        year: 2003,
        url: './maps/forest/zelik/molodezhnoe_2003.webp',
        link: ['./original_maps/forest/zelik/molodezhnoe_2003_omaps.jpg','./original_maps/forest/zelik/molodezhnoe_2003_omaps.webp','./original_maps/forest/zelik/molodezhnoe_2003_02_20_omaps.jpg','./original_maps/forest/zelik/molodezhnoe_2003_omaps.ocd'],
        bounds: [[60.2030021, 29.5317864], [60.2016799, 29.5483518], [60.1970303, 29.5304132]],
        author: ['SHKLV','FDRV_L'],
    },
    {
        name: 'ДООЛ "Молодёжное"',
        year: 2024,
        url: './maps/forest/zelik/molodezhny_dool_2024.webp',
        link: './original_maps/forest/zelik/molodezhny_dool_2024_omaps.jpg',
        bounds: [[60.201104, 29.53125], [60.1997284, 29.5432448], [60.1958678, 29.5292115]],
        author: 'ZCHNV',
        owner: 'SFSO_SPB',
        type: ['CITY']
    },
];