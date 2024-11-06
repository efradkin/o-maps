// types can be ORIENT, ROGAINE, SPRINT, CITY, RELIEF
var sosnovoMaps = [
    // --- СОСНОВО - ПЕТЯЯРВИ - ЛОСЕВО ---
    {
        name: '69км, запад',
        url: './maps/forest/sosnovo/69_km_west.webp',
        link: './original_maps/forest/sosnovo/69_km_west_full.jpg',
        bounds: [[60.54103160709596, 30.186395645141605], [60.540229577809804, 30.236349105834964], [60.504624794985865, 30.1820182800293]],
        types: ['ORIENT'],
    },
    {
        name: 'Колосково',
        year: 1987,
        url: './maps/forest/sosnovo/koloskovo_1987.webp',
        link: './original_maps/forest/sosnovo/koloskovo_1987_full.jpg',
        bounds: [[60.632964120663054, 30.16794204711914], [60.628249519190376, 30.268020629882816], [60.57566873393276, 30.15403747558594]],
        types: ['ORIENT'],
    },
    {
        name: 'Замостье',
        url: './maps/forest/sosnovo/zamostie.webp',
        link: './original_maps/forest/sosnovo/zamostie_full.jpg',
        bounds: [[60.54272002483506, 30.322780609130863], [60.539132031840055, 30.37779808044434], [60.51565252342285, 30.314540863037113]],
        types: ['ORIENT'],
    },
    {
        name: 'Игора',
        year: 2019,
        url: './maps/forest/sosnovo/69_km_2019.webp',
        bounds: [[60.52724660281343, 30.230169296264652], [60.525789651465296, 30.25621891021729], [60.50844901094424, 30.225105285644535]],
        owner: 'SCHLKHN_AN',
        types: ['ORIENT'],
    },
    {
        name: 'Игора, север',
        year: 2019,
        url: './maps/forest/sosnovo/igora_north_2019.webp',
        bounds: [[60.54225571873845, 30.220599174499515], [60.540060727006335, 30.24167060852051], [60.528365665856704, 30.216135978698734]],
        owner: 'SCHLKHN_AN',
        types: ['ORIENT'],
    },
    {
        name: 'Игора',
        year: 2023,
        url: './maps/forest/sosnovo/igora_2023.webp',
        bounds: [[60.51935927881255, 30.20602941513062], [60.5171099308425, 30.22598505020142], [60.51230446242403, 30.20278930664063]],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Сосново, оз Уловное',
        year: 1981,
        url: './maps/forest/sosnovo/sosnovo_ulovnoe_oz_1981.webp',
        link: './original_maps/forest/sosnovo/sosnovo_ulovnoe_oz_1981_full.jpg',
        bounds: [[60.60871025400445, 30.213346481323246], [60.606477645123114, 30.2699089050293], [60.57706019379461, 30.204162597656254]],
        types: ['ORIENT'],
    },
    {
        name: 'Сосново, оз Уловное',
        year: 2023,
        url: './maps/forest/sosnovo/sosnovo_ulovnoe_oz_2023.webp',
        bounds: [[60.60060051178703, 30.216908454895023], [60.59735604436446, 30.255746841430668], [60.585154771960084, 30.211415290832523]],
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Сосново, Чёрный лес',
        year: 1986,
        url: './maps/forest/sosnovo/sosnovo_black_forest_1986.webp',
        link: './original_maps/forest/sosnovo/sosnovo_black_forest_1986_full.jpg',
        bounds: [[60.54052506459614, 30.245018005371097], [60.53744342689857, 30.319004058837894], [60.508470137955726, 30.241327285766605]],
        types: ['ORIENT'],
    },
    {
        name: 'Сосново, юг',
        year: 2021,
        url: './maps/forest/sosnovo/sosnovo_south_2012.webp',
        bounds: [[60.53915313884433, 30.23669242858887], [60.534931464055, 30.27965068817139], [60.52334013623886, 30.230298042297367]],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Сосново, гора Каланчёвка',
        year: 2010,
        url: './maps/forest/sosnovo/sosnovo_kalanchevka_2010.webp',
        link: './original_maps/forest/sosnovo/sosnovo_kalanchevka_2010.jpg',
        bounds: [[60.59151939590076, 30.304927825927738], [60.58566061576298, 30.37058830261231], [60.56419744911603, 30.294799804687504]],
        types: ['ORIENT'],
    },
    {
        name: 'Снегирёвка',
        year: 2021,
        url: './maps/forest/sosnovo/snegirevka_2021.webp',
        bounds: [[60.55225793026478, 30.294713973999027], [60.54926181156153, 30.353164672851566], [60.52308672753701, 30.28913497924805]],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Снегирёвка',
        year: 1991,
        url: './maps/forest/sosnovo/snegirevka_1991.webp',
        link: './original_maps/forest/sosnovo/snegirevka_1991_full.jpg',
        bounds: [[60.52488166312165, 30.276002883911136], [60.52226313556185, 30.34831523895264], [60.494206271637864, 30.27016639709473]],
        types: ['ORIENT'],
    },
    {
        name: 'Снегирёвка',
        year: 1988,
        url: './maps/forest/sosnovo/snegirevka_1988.webp',
        link: './original_maps/forest/sosnovo/snegirevka_1988_full.jpg',
        bounds: [[60.538562137521424, 30.276474952697757], [60.53816109476326, 30.33908843994141], [60.514490774894206, 30.27467250823975]],
        types: ['ORIENT'],
    },
    {
        name: 'Снегирёвка',
        year: 2022,
        url: './maps/forest/sosnovo/snegirevka_2022.webp',
        bounds: [[60.51717329489512, 30.27668952941895], [60.51474425085366, 30.314712524414066], [60.50625172654163, 30.273470878601078]],
        owner: 'SCHLKHN_AN',
        types: ['ORIENT'],
    },
    {
        name: 'Запорожское',
        year: 2020,
        url: './maps/forest/sosnovo/zaporozhskoe_2020.webp',
        bounds: [[60.599483946158216, 30.54727077484131], [60.596302575735564, 30.585122108459476], [60.586313985618425, 30.542464256286625]],
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Колосково, г Смуглянка',
        year: 1981,
        url: './maps/forest/sosnovo/koloskovo_1981.webp',
        link: './original_maps/forest/sosnovo/koloskovo_1981_full.jpg',
        bounds: [[60.59569154818186, 30.18356323242188], [60.59265730907164, 30.21600723266602], [60.573138653409046, 30.175409317016605]],
        types: ['ORIENT'],
    },
    {
        name: 'Кривко, оз Уловное',
        year: 1992,
        url: './maps/forest/sosnovo/krivko_ulovnoe_1992.webp',
        link: './original_maps/forest/sosnovo/krivko_ulovnoe_1992_full.jpg',
        bounds: [[60.61582829627545, 30.21471977233887], [60.614017345690115, 30.26063919067383], [60.575753066539036, 30.2094841003418]],
        types: ['ORIENT'],
    },
    {
        name: 'Кривко, оз Уловное',
        year: 2021,
        url: './maps/forest/sosnovo/krivko_2021.webp',
        bounds: [[60.628838882073644, 30.19051551818848], [60.62332370820346, 30.245618820190433], [60.59678717557373, 30.177726745605472]],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Кривко, оз Туманное',
        year: 2024,
        url: './maps/forest/sosnovo/krivko_ulovnoe_2023.webp',
        link: './original_maps/forest/sosnovo/krivko_ulovnoe_2023_full.jpg',
        bounds: [[60.629722906202076, 30.178756713867188], [60.62408157424831, 30.258493423461918], [60.58751530860598, 30.165367126464847]],
        owner: 'RDNV_I',
        types: ['ORIENT'],
    },
    {
        name: 'Раздолье',
        year: 2024,
        url: './maps/forest/sosnovo/razdolje_2024.webp',
        bounds: [[60.594343032664085, 30.117559432983402], [60.59010748493463, 30.155110359191898], [60.583510724895596, 30.112752914428714]],
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Петяярви - Ягодное',
        year: 1985,
        url: './maps/forest/sosnovo/petjajarvy_yagodnoe_1985.webp',
        link: './original_maps/forest/sosnovo/petjajarvy_yagodnoe_1985_full.jpg',
        bounds: [[60.637088831496946, 30.015935897827152], [60.63161716201196, 30.102453231811527], [60.60946846339769, 30.008382797241214]],
        types: ['ORIENT'],
    },
    {
        name: 'Петяярви',
        year: 2024,
        url: './maps/forest/sosnovo/petjajarvy_2024.webp',
        bounds: [[60.63456356097567, 30.088205337524418], [60.62723915775856, 30.161161422729496], [60.61170086539145, 30.07936477661133]],
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Петяярви - кентавр',
        url: './maps/forest/sosnovo/petjajarvy_kentavr.webp',
        bounds: [[60.635110719708734, 30.137214660644535], [60.632501109973745, 30.17905712127686], [60.619197236209565, 30.133953094482425]],
        types: ['ORIENT'],
    },
    {
        name: 'Петровское',
        year: 2014,
        url: './maps/forest/sosnovo/petjajarvy_kentavr_2014.webp',
        bounds: [[60.635300118645006, 30.13858795166016], [60.63195390695019, 30.174379348754886], [60.62433419230599, 30.13455390930176]],
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Петровское, "Связист"',
        year: 2023,
        url: './maps/forest/sosnovo/petrovskoe_svjazist_2023.webp',
        bounds: [[60.66458042842836, 30.1730489730835], [60.65875593567393, 30.23197174072266], [60.64523148134875, 30.165109634399418]],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Петяярви - запад',
        year: 2019,
        url: './maps/forest/sosnovo/petyajarvi_west_2019.webp',
        bounds: [[60.632080185395296, 30.048379898071293], [60.630564811411745, 30.083227157592773], [60.61342771193733, 30.044517517089847]],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Петяярви - юг',
        year: 2019,
        url: './maps/forest/sosnovo/petyajarvi_south_2019.webp',
        bounds: [[60.61098482874486, 30.08786201477051], [60.609426341120916, 30.123052597045902], [60.59857802491448, 30.08563041687012]],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Петяярви',
        url: './maps/forest/sosnovo/petyajarvi.webp',
        bounds: [[60.635110719708734, 30.071811676025394], [60.62888097901027, 30.160732269287113], [60.61443850605954, 30.068721771240238]],
        types: ['ORIENT'],
    },
    {
        name: 'Варшко',
        year: 1988,
        url: './maps/forest/sosnovo/varshko_1988.webp',
        link: './original_maps/forest/sosnovo/varshko_1988_full.jpg',
        bounds: [[60.66989935154745, 30.036277770996097], [60.663045556032735, 30.122537612915043], [60.6504273943483, 30.03499031066895]],
        types: ['ORIENT'],
    },
    {
        name: 'Лосево',
        year: 2005,
        url: './maps/forest/sosnovo/losevo_2005.webp',
        link: './original_maps/forest/sosnovo/losevo-2005.gif',
        bounds: [[60.695241510752176, 29.892425537109375], [60.68944357380662, 30.01078605651856], [60.67120266901343, 29.88813400268555]],
        types: ['ORIENT'],
    },
];
