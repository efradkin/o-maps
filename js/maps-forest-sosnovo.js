// types can be ROGAINE, SPRINT, CITY, RELIEF
let sosnovoMaps = [
    // --- СОСНОВО - ПЕТЯЯРВИ - ЛОСЕВО ---
    {
        name: 'Сосново, юг',
        year: 1989,
        date: '1991-06-28',
        start: 'WN',
        page: 'spb',
        url: './maps/forest/sosnovo/sosnovo_south_1989.webp',
        link: './original_maps/forest/sosnovo/sosnovo_south_1989_omaps.jpg',
        bounds: [[60.5544521, 30.2352333], [60.5496838, 30.2970314], [60.5287457, 30.2272511]],
        results: './docs/1991/1991_06_28_wn_omaps.pdf',
        author: ['MLVA_M','KAZNTSVA_O']
    },
    {
        name: 'пл 69км',
        year: 1989,
        url: './maps/forest/sosnovo/69_km_1989.webp',
        link: './original_maps/forest/sosnovo/69_km_1989_omaps.jpg',
        bounds: [[60.5432265, 30.2370358], [60.5398497, 30.2961731], [60.509273, 30.230341]],
        author: ['MLVA_M','KAZNTSVA_O','KAZNTSV_S']
    },
    {
        name: 'пл 69км, Игора',
        year: 1974,
        url: './maps/forest/sosnovo/69_km_1974.webp',
        link: './original_maps/forest/sosnovo/69_km_1974_omaps.jpg',
        bounds: [[60.5275211, 30.1960945], [60.5246072, 30.2355766], [60.5121883, 30.1905155]],
        author: 'SHRNN'
    },
    {
        name: 'Снегирёвка',
        date: '1968-09-15',
        start: 'USSR_BULGARIA_1968',
        info: 'Эстафета.',
        url: './maps/forest/sosnovo/zamostie_1968.webp',
        link: './original_maps/forest/sosnovo/zamostie_1968_omaps.jpg',
        bounds: [[60.5489242, 30.3096485], [60.5474893, 30.3637218], [60.5095687, 30.3024387]]
    },
    {
        name: 'Петяярви',
        date: '1968-09-13',
        start: 'USSR_BULGARIA_1968',
        info: '1969, VIII слёт фабрики ЧАЙКА. 5 июня 1971, <a href="./docs/1971/1971_07_05_petyajarvi_omaps.pdf">Первенство</a> завода Вибратор.',
        url: './maps/forest/sosnovo/petyajarvi_1968.webp',
        link: ['./original_maps/forest/sosnovo/petyajarvi_1968_omaps.jpg','./original_maps/forest/sosnovo/petyajarvi_1971_M_omaps.jpg','./original_maps/forest/sosnovo/petyajarvi_1971_W_omaps.jpg'],
        bounds: [[60.6346477, 30.0774765], [60.6278706, 30.1723194], [60.6052981, 30.0714684]]
    },
    {
        name: 'Петяярви',
        year: 1975,
        url: './maps/forest/sosnovo/petyajarvi_1975.webp',
        link: ['./original_maps/forest/sosnovo/petyajarvi_1975_omaps.webp','./original_maps/forest/sosnovo/petyajarvi_retro_omaps.webp'],
        bounds: [[60.634774, 30.0803947], [60.629765, 30.1348972], [60.6093842, 30.0744724]],
        author: 'BLKV_L'
    },
    {
        name: 'пл 69км, запад',
        year: 1994,
        url: './maps/forest/sosnovo/69_km_west_1994.webp',
        link: ['./original_maps/forest/sosnovo/69_km_west_1994_omaps.jpg','./original_maps/forest/sosnovo/69_km_west_1994_2_omaps.jpg','./original_maps/forest/sosnovo/69_km_west_1994_omaps.ocd'],
        bounds: [[60.5410316, 30.1863956], [60.5402296, 30.2363491], [60.5046248, 30.1820183]],
        author: 'SHRNN'
    },
    {
        name: 'Сосново, 69км',
        year: 1,
        url: './maps/forest/sosnovo/sosnovo_69km_old.webp',
        link: './original_maps/forest/sosnovo/sosnovo_69km_old_omaps.jpg',
        bounds: [[60.541707, 30.1929188], [60.5409894, 30.2352333], [60.509949, 30.1868248]],
        author: ['SHRNN','FDRV_L']
    },
    {
        name: 'Сосново',
        year: 1981,
        url: './maps/forest/sosnovo/sosnovo_1981.webp',
        link: './original_maps/forest/sosnovo/sosnovo_1981_omaps.jpg',
        bounds: [[60.5458012, 30.1900864], [60.5423401, 30.256691], [60.5111743, 30.180645]],
        author: ['LVCHV','SVTKN']
    },
    {
        name: 'Сосново',
        year: 1990,
        url: './maps/forest/sosnovo/sosnovo_1990.webp',
        link: './original_maps/forest/sosnovo/sosnovo_1990_omaps.jpg',
        bounds: [[60.5460966, 30.1887989], [60.5433532, 30.257206], [60.5100335, 30.1800442]],
        author: 'LVCHV'
    },
    {
        name: 'Колосково',
        year: 1987,
        url: './maps/forest/sosnovo/koloskovo_1987.webp',
        link: './original_maps/forest/sosnovo/koloskovo_1987_omaps.jpg',
        bounds: [[60.6329641, 30.167942], [60.6282495, 30.2680206], [60.5756687, 30.1540375]],
        author: ['ARTMV','BLZRV_V','URVNTSV','MNV_Y','PRSCHPA']
    },
    {
        name: 'Колосково',
        year: 1984,
        url: './maps/forest/sosnovo/koloskovo_1984.webp',
        link: './original_maps/forest/sosnovo/koloskovo_1984_omaps.jpg',
        bounds: [[60.6329641, 30.1688862], [60.6300176, 30.2198696], [60.6001581, 30.1603889]],
        author: ['URVNTSV','VLKV_K','PTRV_A','SHLKHN_AN','KRNLJV','BNDRNK','SKLVA']
    },
    {
        name: 'Колосково',
        year: 1994,
        start: 'WN',
        page: 'spb',
        url: './maps/forest/sosnovo/koloskovo_1994.webp',
        link: ['./original_maps/forest/sosnovo/koloskovo_1994_omaps.jpg','./original_maps/forest/sosnovo/krivko_ulovnoe_1995_clean_omaps.webp','./original_maps/forest/sosnovo/krivko_ulovnoe_1995_course_omaps.webp','./original_maps/forest/sosnovo/koloskovo_1994_2_omaps.jpg'],
        bounds: [[60.6302491, 30.1778984], [60.6270287, 30.2242899], [60.601064, 30.1709032]],
        author: 'MLVA_M'
    },
    {
        name: 'Колосково',
        year: 1998,
        start: 'WN',
        page: 'spb',
        url: './maps/forest/sosnovo/koloskovo_1998.webp',
        link: ['./original_maps/forest/sosnovo/koloskovo_1998_clean_omaps.webp','./original_maps/forest/sosnovo/koloskovo_1998_omaps.jpg','./original_maps/forest/sosnovo/koloskovo_1998_06_20_wn_omaps.webp','./original_maps/forest/sosnovo/koloskovo_199x_wn_clean_omaps.webp','./original_maps/forest/sosnovo/koloskovo_199x_wn_h21_omaps.webp'],
        bounds: [[60.6301018, 30.1696587], [60.625092, 30.244503], [60.6045398, 30.1622772]],
        results: './docs/1998/1998_06_19_wn_omaps.pdf',
        author: ['KAZNTSVA_O','MLVA_M']
    },
    {
        name: 'Кривко, оз Уловное',
        date: '1998-06-19',
        start: 'WN',
        page: 'spb',
        url: './maps/forest/sosnovo/sosnovo_ulovnoe_1998.webp',
        link: './original_maps/forest/sosnovo/sosnovo_ulovnoe_1998_omaps.jpg',
        bounds: [[60.6081626, 30.2072096], [60.6044345, 30.2602959], [60.5887166, 30.2005148]],
        results: './docs/1998/1998_06_19_wn_omaps.pdf',
        author: ['KAZNTSVA_O','MLVA_M']
    },
    {
        name: 'Замостье',
        year: 1989,
        date: '1990-06-22',
        start: 'WN',
        page: 'spb',
        url: './maps/forest/sosnovo/zamostie_1989.webp',
        link: ['./original_maps/forest/sosnovo/zamostie_1989_omaps.jpg','./original_maps/forest/sosnovo/zamostie_1989_clean_omaps.webp'],
        results: './docs/1990/1990_06_24_wn_omaps.pdf',
        bounds: [[60.5465186, 30.3178883], [60.5436064, 30.3642368], [60.5160327, 30.3117085]],
        author: ['MLVA_M','KAZNTSVA_O','KAZNTSV_S','KUOKNN_M']
    },
    {
        name: 'Замостье',
        year: 1991,
        start: 'WN',
        page: 'spb',
        url: './maps/forest/sosnovo/zamostie_1991.webp',
        link: ['./original_maps/forest/sosnovo/zamostie_1991_clean_100_omaps.webp','./original_maps/forest/sosnovo/zamostie_1991_omaps.jpg'],
        bounds: [[60.5266343, 30.3282738], [60.5241426, 30.3746223], [60.4929592, 30.3238106]],
        results: './docs/1991/1991_06_28_wn_omaps.pdf',
        author: ['KAZNTSVA_O','MLVA_M','KAZNTSV_S']
    },
    {
        name: 'Снегирёвка',
        year: 2000,
        start: 'WN',
        page: 'spb',
        url: './maps/forest/sosnovo/snegirevka_2000.webp',
        link: './original_maps/forest/sosnovo/snegirevka_2000_omaps.webp',
        bounds: [[60.553566, 30.3134251], [60.5517727, 30.348959], [60.5278167, 30.3101635]],
        author: ['KAZNTSVA_O','MLVA_M','KAZNTSV_S']
    },
    {
        name: 'Сосново, 69км',
        year: 2000,
        start: 'WN',
        page: 'spb',
        url: './maps/forest/sosnovo/sosnovo_69km_2000.webp',
        link: ['./original_maps/forest/sosnovo/sosnovo_69km_2000_omaps.jpg','./original_maps/forest/sosnovo/sosnovo_69km_2000_omaps.webp'],
        bounds: [[60.5408628, 30.2570343], [60.5392165, 30.2881908], [60.5156525, 30.2517128]],
        author: ['KAZNTSVA_O','MLVA_M','KAZNTSV_S']
    },
    {
        name: 'Замостье',
        year: 2000,
        start: 'WN',
        page: 'spb',
        url: './maps/forest/sosnovo/zamostie_1999.webp',
        link: ['./original_maps/forest/sosnovo/zamostie_1999_omaps.webp','./original_maps/forest/sosnovo/zamostie_2000_wn_omaps.jpg'],
        bounds: [[60.5385621, 30.3378868], [60.5386888, 30.3715324], [60.5137303, 30.336771]],
        author: ['KAZNTSVA_O','MLVA_M','KAZNTSV_S']
    },
    {
        name: 'Замостье',
        year: 2006,
        url: './maps/forest/sosnovo/zamostie_2006.webp',
        link: ['./original_maps/forest/sosnovo/zamostie_2006_omaps.jpg','./original_maps/forest/sosnovo/zamostie_2006_omaps.ocd'],
        bounds: [[60.5439441, 30.3142834], [60.5381189, 30.3776264], [60.5170043, 30.3064728]],
        author: ['SHRNN','RYLOV_V']
    },
    {
        name: 'Игора',
        year: 2019,
        url: './maps/forest/sosnovo/69_km_2019.webp',
        bounds: [[60.5272466, 30.2301693], [60.5257897, 30.2562189], [60.508449, 30.2251053]],
        author: ['DBRTSV_V','KAZNTSVA_O'],
        owner: 'SHLKHN_AN'
    },
    {
        name: 'Игора, север',
        year: 2019,
        url: './maps/forest/sosnovo/igora_north_2019.webp',
        bounds: [[60.5422557, 30.2205992], [60.5400607, 30.2416706], [60.5283657, 30.216136]],
        author: 'RYLOV_V',
        owner: 'SHLKHN_AN'
    },
    {
        name: 'Игора',
        year: 2023,
        url: './maps/forest/sosnovo/igora_2023.webp',
        link: './original_maps/forest/sosnovo/igora_2023_omaps.jpg',
        bounds: [[60.5193593, 30.2060294], [60.5171099, 30.2259851], [60.5123045, 30.2027893]],
        author: ['IVNVA_G','TKMKVA_P','CHSNKV'],
        owner: 'SHEIN'
    },
    {
        name: 'Сосново, оз Уловное',
        date: '1981-08-05',
        start: ['USSR_1981','USSR_CHAMP'],
        info: '<a href="./docs/1981_ussr_champ_relay_schema_omaps.jpg">Эстафета</a>.',
        url: './maps/forest/sosnovo/sosnovo_ulovnoe_oz_1981.webp',
        link: ['./original_maps/forest/sosnovo/sosnovo_ulovnoe_oz_1981_omaps.jpg','./original_maps/forest/sosnovo/sosnovo_ulovnoe_oz_1981_all_omaps.jpg'],
        gps: {
            'М1':'./original_maps/forest/sosnovo/sosnovo_ulovnoe_oz_1981_M1_omaps.jpg',
            'М3':'./original_maps/forest/sosnovo/sosnovo_ulovnoe_oz_1981_M3_omaps.jpg',
            'Ж3':'./original_maps/forest/sosnovo/sosnovo_ulovnoe_oz_1981_W3_omaps.jpg'
        },
        bounds: [[60.6047504, 30.2156639], [60.6022648, 30.2620983], [60.5855763, 30.2098274]],
        author: ['ARTMV','PRSCHPA','BLZRV_V','SRKN_A','TRSV','SNTSNA','DRSVNA','FDRV_L','KRCHKN_V']
    },
    {
        name: 'Сосново, оз Уловное',
        year: 2023,
        url: './maps/forest/sosnovo/sosnovo_ulovnoe_oz_2023.webp',
        bounds: [[60.6287968, 30.1891422], [60.62345, 30.2647591], [60.5886112, 30.1770401]],
        author: 'MKHLV_A',
        owner: 'WN'
    },
    {
        name: 'Сосново',
        date: '1969-01-26',
        url: './maps/forest/sosnovo/sosnovo_1969_01_26.webp',
        link: './original_maps/forest/sosnovo/sosnovo_1969_01_26_omaps.webp',
        info: 'Соревнования в честь 25-летия снятия блокады Ленинграда.',
        bounds: [[60.5509498, 30.2307701], [60.5521735, 30.316515], [60.5182716, 30.233345]],
    },
    {
        name: 'Сосново, Чёрный лес',
        year: 1974,
        date: '1973-02-18',
        url: './maps/forest/sosnovo/sosnovo_black_forest_1974.webp',
        link: ['./original_maps/forest/sosnovo/sosnovo_black_forest_1974_omaps.jpg','./original_maps/forest/sosnovo/sosnovo_black_forest_1973_02_18_H_omaps.jpg','./original_maps/forest/sosnovo/sosnovo_black_forest_1973_02_18_W_omaps.jpg'],
        info: 'П-во г.Ленинграда на маркированной трассе (<a href="./docs/1974_leningrad_omaps.pdf">отчёт</a>).',
        bounds: [[60.544957, 30.2189255], [60.5517938, 30.2621841], [60.5134135, 30.2360058]],
        author: ['SHRNN','GRZNVCH'],
        start: 'REPORT'
    },
    {
        name: 'Сосново, Чёрный лес',
        year: 1978,
        info: 'Зимний Кубок Ленинграда.',
        url: './maps/forest/sosnovo/sosnovo_black_forest_1978.webp',
        link: './original_maps/forest/sosnovo/sosnovo_black_forest_1978_omaps.jpg',
        bounds: [[60.5485444, 30.2463913], [60.5444928, 30.2944994], [60.517469, 30.2404261]],
        author: ['GRZNVCH','SHRNN','FDRV_L']
    },
    {
        name: 'Сосново, Чёрный лес',
        year: 1982,
        url: './maps/forest/sosnovo/sosnovo_black_forest_1982.webp',
        link: './original_maps/forest/sosnovo/sosnovo_black_forest_1982_omaps.jpg',
        bounds: [[60.5396597, 30.2449751], [60.5366202, 30.2945423], [60.5162439, 30.2417564]],
        author: ['GRZNVCH','SHRNN','FDRV_L','BLZRV_V','YKVLVA']
    },
    {
        name: 'Сосново, Чёрный лес',
        year: 1996,
        correct: 2008,
        url: './maps/forest/sosnovo/sosnovo_black_forest_1986.webp',
        link: ['./original_maps/forest/sosnovo/sosnovo_black_forest_1996_omaps.jpg','./original_maps/forest/sosnovo/sosnovo_black_forest_he_1996_omaps.webp','./original_maps/forest/sosnovo/sosnovo_black_forest_2008_omaps.ocd'],
        bounds: [[60.5405251, 30.245018], [60.5374434, 30.3190041], [60.5084701, 30.2413273]],
        author: 'SHRNN',
        start: 'CISM_96'
    },
    {
        name: 'Сосново, юг',
        year: 2021,
        url: './maps/forest/sosnovo/sosnovo_south_2012.webp',
        link: './original_maps/forest/sosnovo/sosnovo_south_2012_omaps.jpg',
        bounds: [[60.5391531, 30.2366924], [60.5349315, 30.2796507], [60.5233401, 30.230298]],
        author: 'DBRTSV_V',
        owner: 'SHEIN'
    },
    {
        name: 'Сосново, гора Каланчёвка',
        year: 2010,
        url: './maps/forest/sosnovo/sosnovo_kalanchevka_2010.webp',
        link: './original_maps/forest/sosnovo/sosnovo_kalanchevka_2010_omaps.jpg',
        bounds: [[60.5915194, 30.3049278], [60.5856606, 30.3705883], [60.5641974, 30.2947998]],
        author: ['SHRNN','RYLOV_V']
    },
    {
        name: 'Снегирёвка, Щучьи оз',
        year: 1978,
        url: './maps/forest/sosnovo/snegirevka_schuchji_1978.webp',
        link: './original_maps/forest/sosnovo/snegirevka_schuchji_1978_omaps.jpg',
        bounds: [[60.5381611, 30.3018379], [60.5371479, 30.3598595], [60.5146809, 30.3026962]],
        author: 'SPZHNKV_Y',
        owner: 'KSLV_VN'
    },
    {
        name: 'Снегирёвка',
        year: 1991,
        start: 'WN',
        page: 'spb',
        url: './maps/forest/sosnovo/snegirevka_1991.webp',
        link: './original_maps/forest/sosnovo/snegirevka_1991_omaps.jpg',
        bounds: [[60.5248817, 30.2760029], [60.5221575, 30.3483582], [60.4942063, 30.2701664]],
        results: './docs/1991/1991_06_28_wn_omaps.pdf',
        author: ['MLVA_M','KAZNTSVA_O','KAZNTSV_S']
    },
    {
        name: 'Снегирёвка',
        year: 1987,
        url: './maps/forest/sosnovo/snegirevka_1987.webp',
        link: './original_maps/forest/sosnovo/snegirevka_1987_omaps.jpg',
        bounds: [[60.553355, 30.303297], [60.552912, 30.3391314], [60.5319337, 30.302825]],
        author: ['MLVA_M','KUOKNN_M'],
        qtty: 3
    },
    {
        name: 'Снегирёвка',
        year: 1988,
        startYear: 1990,
        start: 'WN',
        page: 'spb',
        url: './maps/forest/sosnovo/snegirevka_1988_1.webp',
        link: ['./original_maps/forest/sosnovo/snegirevka_1988_1_omaps.jpg','./original_maps/forest/sosnovo/snegirevka_1988_1_clean_omaps.webp'],
        bounds: [[60.5558023, 30.2800798], [60.5519626, 30.3341961], [60.5319549, 30.2745008]],
        author: ['MLVA_M','KAZNTSVA_O','KUOKNN_M']
    },
    {
        name: 'Снегирёвка',
        year: 1978, // предположительно
        url: './maps/forest/sosnovo/snegirevka_1978.webp',
        link: './original_maps/forest/sosnovo/snegirevka_1978_omaps.webp',
        bounds: [[60.53833, 30.2579784], [60.5370635, 30.3208065], [60.5148921, 30.2574635]],
        author: 'SPZHNKV_Y'
    },
    {
        name: 'Снегирёвка',
        year: 1988,
        startYear: 1990,
        start: 'WN',
        page: 'spb',
        url: './maps/forest/sosnovo/snegirevka_1988.webp',
        link: './original_maps/forest/sosnovo/snegirevka_1988_omaps.jpg',
        bounds: [[60.5385621, 30.276475], [60.5381611, 30.3390884], [60.5144908, 30.2746725]],
        author: ['MLVA_M','KAZNTSVA_O','KAZNTSV_S','KUOKNN_M'],
        qtty: 10
    },
    {
        name: 'Снегирёвка, Щучьи оз',
        year: 2000,
        start: 'WN',
        page: 'spb',
        url: './maps/forest/sosnovo/snegirevka_schuchji_2000.webp',
        link: './original_maps/forest/sosnovo/snegirevka_schuchji_2000_omaps.jpg',
        bounds: [[60.5330949, 30.2814102], [60.5321449, 30.3327799], [60.5147443, 30.275445]],
        author: ['KAZNTSVA_O','MLVA_M','KAZNTSV_S'],
    },
    {
        name: 'Снегирёвка',
        year: 1999,
        date: '2000-06-21',
        start: 'YM',
        page: 'spb',
        url: './maps/forest/sosnovo/snegirevka_1999.webp',
        link: ['./original_maps/forest/sosnovo/snegirevka_1999_omaps.jpg','./original_maps/forest/sosnovo/snegirevka_1999_clean_omaps.webp'],
        bounds: [[60.5376123, 30.2611971], [60.5351215, 30.3178883], [60.5152512, 30.2590513]],
        author: 'SHRNN'
    },
    {
        name: 'Замостье',
        year: 1999,
        date: '2000-06-19',
        start: 'YM',
        page: 'spb',
        url: './maps/forest/sosnovo/zamostie_ym_1999.webp',
        link: './original_maps/forest/sosnovo/zamostie_ym_1999_omaps.jpg',
        bounds: [[60.5263598, 30.3381014], [60.5233613, 30.3724337], [60.5146598, 30.3359127]],
        author: 'SHRNN'
    },
    {
        name: 'Снегирёвка',
        year: 2021,
        url: './maps/forest/sosnovo/snegirevka_2021.webp',
        link: './original_maps/forest/sosnovo/snegirevka_2021_omaps.jpg',
        bounds: [[60.5522579, 30.294714], [60.5492618, 30.3531647], [60.5230867, 30.289135]],
        author: 'DJCHKV',
        owner: 'SHEIN'
    },
    {
        name: 'Снегирёвка',
        year: 2022,
        url: './maps/forest/sosnovo/snegirevka_2022.webp',
        bounds: [[60.5171733, 30.2766895], [60.5147443, 30.3147125], [60.5062517, 30.2734709]],
        author: 'DBRTSV_V',
        owner: 'SHLKHN_AN'
    },
    {
        name: 'Запорожское',
        year: 2019,
        url: './maps/forest/sosnovo/zaporozhskoe_2020.webp',
        bounds: [[60.5994839, 30.5472708], [60.5963026, 30.5851221], [60.586314, 30.5424643]],
        author: 'MKHLV_A',
        owner: 'WN'
    },
    {
        name: 'Колосково, г Смуглянка',
        year: 1981,
        url: './maps/forest/sosnovo/koloskovo_1981.webp',
        link: './original_maps/forest/sosnovo/koloskovo_1981_omaps.jpg',
        bounds: [[60.5956915, 30.1835632], [60.5926573, 30.2160072], [60.5731387, 30.1754093]],
        author: 'BLZRV_V'
    },
    {
        name: 'Кривко, оз Уловное',
        year: 1992,
        start: 'WN',
        page: 'spb',
        url: './maps/forest/sosnovo/krivko_ulovnoe_1992.webp',
        link: ['./original_maps/forest/sosnovo/krivko_ulovnoe_1992_omaps.jpg','./original_maps/forest/sosnovo/krivko_ulovnoe_1992_100_omaps.webp','./original_maps/starts/wn/wn_19992_omaps.jpg','./original_maps/starts/wn/wn_19992_m21_omaps.jpg'],
        info: 'Результаты <a href="./docs/1992/1992_06_26_wn_omaps.pdf">полные</a> и <a href="./docs/1992/1992_06_26_wn_part_fine_omaps.pdf">частичные</a>.',
        bounds: [[60.6158283, 30.2147198], [60.6140173, 30.2606392], [60.5757531, 30.2094841]],
        author: 'MLVA_M'
    },
    {
        name: 'Кривко, оз Туманное',
        year: 2009, //уже в 2009 использовалась для 50-летия ориентрования
        info: 'Год и авторы - не точно.',
        url: './maps/forest/sosnovo/krivko_ulovnoe_2023.webp',
        link: './original_maps/forest/sosnovo/krivko_ulovnoe_2023_omaps.jpg',
        bounds: [[60.6297229, 30.1787567], [60.6240816, 30.2584934], [60.5875153, 30.1653671]],
        author: ['ARTMV','BLZRV_V','VLKV_K','SKLVA','YKVLVA'],
        owner: 'RDNV_I'
    },
    {
        name: 'Кривко, оз Уловное',
        year: 2021,
        url: './maps/forest/sosnovo/krivko_2021.webp',
        link: './original_maps/forest/sosnovo/krivko_2021_omaps.jpg',
        bounds: [[60.6288389, 30.1905155], [60.6233237, 30.2456188], [60.5967872, 30.1777267]],
        author: ['DJCHKV','PPV_D'],
        owner: 'SHEIN'
    },
    {
        name: 'Кривко, оз Уловное',
        year: 2025,
        url: './maps/forest/sosnovo/krivko_2025.webp',
        link: './original_maps/forest/sosnovo/krivko_2025_omaps.webp',
        bounds: [[60.6290283, 30.189743], [60.6218711, 30.2594805], [60.5849862, 30.1712036]],
        o_gps: 24987,
        author: ['PSTVTV','DJCHKV','PPV_D'],
        owner: ['SHEIN','CHGRVSKY_M','FLTV']
    },
    {
        name: 'Раздолье',
        year: 2022, // это не точно
        url: './maps/forest/sosnovo/razdolje_2022.webp',
        o_gps: 25214,
        bounds: [[60.594343, 30.1175594], [60.5901075, 30.1551104], [60.5835107, 30.1127529]],
        author: 'MKHLV_A',
        owner: 'WN'
    },
    {
        name: 'Раздолье, север',
        year: 2025,
        url: './maps/forest/sosnovo/razdolje_2025.webp',
        bounds: [[60.6094895, 30.1027966], [60.6058036, 30.1391459], [60.5956073, 30.0976467]],
        author: 'SBLV_S',
        owner: 'WN'
    },
    {
        name: 'Петяярви - Ягодное',
        year: 1985,
        url: './maps/forest/sosnovo/petjajarvy_yagodnoe_1985.webp',
        link: './original_maps/forest/sosnovo/petjajarvy_yagodnoe_1985_omaps.jpg',
        photo: './tracks/petyajarvi/pic_6.jpg',
        bounds: [[60.6370888, 30.0159359], [60.6316172, 30.1024532], [60.6094685, 30.0083828]],
        author: ['LVCHV','SVTKN']
    },
    {
        name: 'Петяярви',
        year: 1996,
        start: 'WN',
        page: 'spb',
        url: './maps/forest/sosnovo/petjajarvy_1995.webp',
        link: ['./original_maps/forest/sosnovo/petjajarvy_1995_wn_omaps.jpg','./original_maps/forest/sosnovo/petjajarvy_1995_wn_west_omaps.webp','./original_maps/forest/sosnovo/petjajarvy_1995_wn_center_omaps.webp','./original_maps/forest/sosnovo/petjajarvy_1995_wn_east_omaps.webp','./original_maps/starts/wn/wn_1996_06_21_omaps.jpg','./original_maps/starts/wn/wn_1996_06_23_omaps.jpg'],
        info: '21-23 июня.',
        results: './docs/1996/1996_06_21_wn_omaps.pdf',
        bounds: [[60.6351318, 30.0666189], [60.6285442, 30.1611185], [60.6083101, 30.0595379]],
        author: ['LVCHV','SVTKN','KAZNTSVA_O']
    },
    {
        name: 'Ягодное',
        date: '1997-06-20',
        start: 'WN',
        page: 'spb',
        url: './maps/forest/sosnovo/petjajarvy_1997.webp',
        link: ['./original_maps/forest/sosnovo/petjajarvy_1997_omaps.webp','./original_maps/forest/sosnovo/petjajarvy_1997_omaps.jpg','./original_maps/forest/sosnovo/petjajarvy_wn_1997.jpg'],
        results: './docs/1997/1997_06_20_wn_omaps.pdf',
        bounds: [[60.6349213, 30.0129318], [60.6324169, 30.0658894], [60.6166916, 30.0080824]],
        author: ['LVCHV','SVTKN','KAZNTSVA_O']
    },
    {
        name: 'Петяярви - кентавр',
        year: 1,
        url: './maps/forest/sosnovo/petjajarvy_kentavr.webp',
        link: './original_maps/forest/sosnovo/petjajarvy_kentavr_omaps.jpg',
        photo: './tracks/petyajarvi/pic_7.jpg',
        bounds: [[60.6351107, 30.1372147], [60.6325011, 30.1790571], [60.6191972, 30.1339531]],
        author: 'TRSV'
    },
    {
        name: 'Петровское',
        year: 2014,
        url: './maps/forest/sosnovo/petjajarvy_kentavr_2014.webp',
        bounds: [[60.6353001, 30.138588], [60.6319539, 30.1743793], [60.6243342, 30.1345539]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN'
    },
    {
        name: 'Петровское, "Связист"',
        year: 2023,
        url: './maps/forest/sosnovo/petrovskoe_svjazist_2023.webp',
        link: './original_maps/forest/sosnovo/petrovskoe_svjazist_2023_omaps.jpg',
        bounds: [[60.6645804, 30.173049], [60.6587559, 30.2319717], [60.6452315, 30.1651096]],
        author: ['TKMKV_K','KVZN'],
        owner: 'SHEIN'
    },
    {
        name: 'Петровское, лагерь "Связист"',
        year: 2010,
        url: './maps/forest/sosnovo/petrovskoe_svjazist_2010.webp',
        link: ['./original_maps/forest/sosnovo/petrovskoe_svjazist_2010_omaps.webp','./original_maps/forest/sosnovo/petrovskoe_svjazist_2010_omaps.ocd'],
        bounds: [[60.6489655, 30.1979184], [60.6477033, 30.2148914], [60.6427489, 30.1966095]],
        author: 'SHRNN',
        owner: 'PPLVSKY'
    },
    {
        name: 'Петяярви',
        year: 1987,
        info: 'XIII Всесоюзные соревнования ветеранов.',
        results: './docs/1987/1987_07_22_masters_omaps.pdf',
        url: './maps/forest/sosnovo/petjajarvy_1987.webp',
        link: './original_maps/forest/sosnovo/petjajarvy_1987_omaps.jpg',
        photo: './tracks/petyajarvi/pic_3.jpg',
        bounds: [[60.6346057, 30.0654602], [60.6274286, 30.1828766], [60.6063934, 30.0587654]],
        author: ['LVCHV','SVTKN']
    },
    {
        name: 'Петяярви',
        year: 2001,
        start: 'WN',
        page: 'spb',
        url: './maps/forest/sosnovo/petjajarvy_2001.webp',
        link: './original_maps/forest/sosnovo/petyajarv_2001_omaps.jpg',
        bounds: [[60.6344794, 30.0748158], [60.6279548, 30.161376], [60.6161863, 30.0693226]],
        author: ['KAZNTSVA_O','KAZNTSV_S']
    },
    {
        name: 'Петяярви, запад',
        year: 2019,
        url: './maps/forest/sosnovo/petyajarvi_west_2019.webp',
        link: './original_maps/forest/sosnovo/petyajarvi_west_2019_omaps.jpg',
        photo: 'tracks/petyajarvi/pic_6.jpg',
        bounds: [[60.6320802, 30.0483799], [60.6305648, 30.0832272], [60.6134277, 30.0445175]],
        author: 'DJCHKV',
        owner: 'SHEIN'
    },
    {
        name: 'Петяярви, юг',
        year: 2019,
        url: './maps/forest/sosnovo/petyajarvi_south_2019.webp',
        link: './original_maps/forest/sosnovo/petyajarvi_south_2019_omaps.jpg',
        bounds: [[60.6109848, 30.087862], [60.6094263, 30.1230526], [60.598578, 30.0856304]],
        author: 'DJCHKV',
        owner: 'SHEIN'
    },
    {
        name: 'Петяярви',
        year: 2014,
        url: './maps/forest/sosnovo/petyajarvi.webp',
        link: ['./original_maps/forest/sosnovo/petyajarvi_2014_omaps.jpg','./original_maps/forest/sosnovo/petyajarvi_2014_omaps.gif'],
        photo: 'tracks/petyajarvi/pic_7.jpg',
        bounds: [[60.6351107, 30.0718117], [60.628881, 30.1607323], [60.6144385, 30.0687218]]
    },
    {
        name: 'Петяярви',
        year: 2021,
        url: './maps/forest/sosnovo/petjajarvy_2024.webp',
        bounds: [[60.6345636, 30.0882053], [60.6272392, 30.1611614], [60.6117009, 30.0793648]],
        author: ['MKHLV_A','IVNV_P','USNKO'],
        owner: 'WN'
    },
    {
        name: 'Варшко',
        year: 1988,
        url: './maps/forest/sosnovo/varshko_1988.webp',
        link: './original_maps/forest/sosnovo/varshko_1988_omaps.jpg',
        bounds: [[60.6698994, 30.0362778], [60.6630456, 30.1225376], [60.6504274, 30.0349903]],
        author: ['VLKV_K','OVCHNNKV']
    },
    {
        name: 'Лосево',
        year: 1990,
        url: './maps/forest/sosnovo/losevo_1990.webp',
        link: ['./original_maps/forest/sosnovo/losevo_1990_omaps.webp','./original_maps/forest/sosnovo/losevo_1990_10000_omaps.jpg'],
        bounds: [[60.6945273, 29.9194622], [60.690368, 29.9945641], [60.6704459, 29.9125099]],
        author: ['RYLOV_V','VSLVSKY']
    },
    {
        name: 'Лосево',
        year: 2005,
        url: './maps/forest/sosnovo/losevo_2005.webp',
        link: ['./original_maps/forest/sosnovo/losevo_2005_omaps.gif','./original_maps/forest/sosnovo/losevo_1_2000_omaps.jpg','./original_maps/starts/na/na_2000_losevo_3_omaps.jpg','./original_maps/forest/sosnovo/losevo_2005_omaps.ocd','./original_maps/forest/sosnovo/losevo_2005_10000_omaps.ocd'],
        bounds: [[60.6952415, 29.8924255], [60.6894436, 30.0107861], [60.6712027, 29.888134]],
        author: ['RYLOV_V','VSLVSKY','BRDR','FDRV_A','FDRV_L','SHKLV']
    },
    {
        name: 'Лосево',
        year: 2022,
        url: './maps/forest/sosnovo/losevo_2022.webp',
        link: './original_maps/forest/sosnovo/losevo_2022_omaps.webp',
        bounds: [[60.6984761, 29.897747], [60.6899478, 29.987011], [60.6737251, 29.8872757]],
        author: ['KVZN','TKMKV_K'],
        owner: 'ILVS'
    },
    {
        name: 'Лосево',
        year: 2018,
        url: './maps/forest/sosnovo/losevo_2018.webp',
        link: ['./original_maps/forest/sosnovo/losevo_2018_omaps.gif','./original_maps/forest/sosnovo/losevo_west_2018_omaps.gif','./original_maps/forest/sosnovo/losevo_2014_omaps.gif','./original_maps/forest/sosnovo/losevo_2018_omaps.ocd','./original_maps/forest/sosnovo/losevo_west_2018_omaps.ocd','./original_maps/forest/sosnovo/losevo_2014_omaps.ocd'],
        bounds: [[60.6833714, 29.9275947], [60.681186, 29.9749517], [60.6703198, 29.9250197]],
        author: ['VSLVSKY','DRBSHV']
    },
    {
        name: 'Лосево, т/б Лена',
        year: 2004,
        url: './maps/forest/sosnovo/losevo_lena_2004.webp',
        link: './original_maps/forest/sosnovo/losevo_lena_2004_omaps.jpg',
        bounds: [[60.6745868, 29.9461555], [60.6743136, 29.9541807], [60.6716861, 29.9452972]],
    },
];
