// types can be ROGAINE, SPRINT, CITY, RELIEF
let sosnovoMaps = [
    // --- СОСНОВО - ПЕТЯЯРВИ - ЛОСЕВО ---
    {
        name: 'Сосново, юг',
        year: 1989,
        date: '1991-06-28',
        start: 'WN',
        url: './maps/forest/sosnovo/sosnovo_south_1989.webp',
        link: './original_maps/forest/sosnovo/sosnovo_south_1989_omaps.jpg',
        bounds: [[60.55445209468727, 30.23523330688477], [60.54968381690081, 30.297031402587894], [60.52874571620552, 30.22725105285645]],
        author: ['MLVA_M','KAZNTSVA_O']
    },
    {
        name: 'пл 69км',
        year: 1989,
        url: './maps/forest/sosnovo/69_km_1989.webp',
        link: './original_maps/forest/sosnovo/69_km_1989_omaps.jpg',
        bounds: [[60.55445209468727, 30.23523330688477], [60.54968381690081, 30.297031402587894], [60.52874571620552, 30.22725105285645]],
        author: ['MLVA_M','KAZNTSVA_O','KAZNTSV_S']
    },
    {
        name: 'пл 69км, Игора',
        year: 1974,
        url: './maps/forest/sosnovo/69_km_1974.webp',
        link: './original_maps/forest/sosnovo/69_km_1974_omaps.jpg',
        bounds: [[60.52752109355479, 30.196094512939457], [60.52460715000577, 30.235576629638675], [60.51218827743973, 30.19051551818848]],
        author: 'SHRNN'
    },
    {
        name: 'Снегирёвка',
        date: '1968-09-15',
        start: 'USSR_BULGARIA_1968',
        info: 'Эстафета.',
        url: './maps/forest/sosnovo/zamostie_1968.webp',
        link: './original_maps/forest/sosnovo/zamostie_1968_omaps.jpg',
        bounds: [[60.54892420332662, 30.30964851379395], [60.547489329022675, 30.363721847534183], [60.509568723572905, 30.302438735961918]]
    },
    {
        name: 'Петяярви',
        date: '1968-09-13',
        start: 'USSR_BULGARIA_1968',
        info: 'Заданное направление.',
        url: './maps/forest/sosnovo/petyajarvi_1968.webp',
        link: './original_maps/forest/sosnovo/petyajarvi_1968_omaps.jpg',
        bounds: [[60.634647739846734, 30.077476501464847], [60.6278706373631, 30.17231941223145], [60.60529809128897, 30.071468353271488]]
    },
    {
        name: 'пл 69км, запад',
        year: 1994,
        url: './maps/forest/sosnovo/69_km_west_1994.webp',
        link: ['./original_maps/forest/sosnovo/69_km_west_1994_omaps.jpg','./original_maps/forest/sosnovo/69_km_west_1994_2_omaps.jpg'],
        bounds: [[60.54103160709596, 30.186395645141605], [60.540229577809804, 30.236349105834964], [60.504624794985865, 30.1820182800293]],
        author: 'SHRNN'
    },
    {
        name: 'Сосново, 69км',
        year: 1,
        url: './maps/forest/sosnovo/sosnovo_69km_old.webp',
        link: './original_maps/forest/sosnovo/sosnovo_69km_old_omaps.jpg',
        bounds: [[60.541706984762655, 30.192918777465824], [60.540989395523795, 30.23523330688477], [60.509948994532124, 30.186824798583988]],
        author: ['SHRNN','FDRV_L']
    },
    {
        name: 'Сосново',
        year: 1981,
        url: './maps/forest/sosnovo/sosnovo_1981.webp',
        link: './original_maps/forest/sosnovo/sosnovo_1981_omaps.jpg',
        bounds: [[60.545801160130765, 30.190086364746097], [60.54234013852427, 30.25669097900391], [60.51117428171057, 30.180644989013675]],
        author: ['LVCHV','SVTKN']
    },
    {
        name: 'Сосново',
        year: 1990,
        url: './maps/forest/sosnovo/sosnovo_1990.webp',
        link: './original_maps/forest/sosnovo/sosnovo_1990_omaps.jpg',
        bounds: [[60.546096596045366, 30.18879890441895], [60.54335315877627, 30.25720596313477], [60.51003349858368, 30.18004417419434]],
        author: 'LVCHV'
    },
    {
        name: 'Колосково',
        year: 1987,
        url: './maps/forest/sosnovo/koloskovo_1987.webp',
        link: './original_maps/forest/sosnovo/koloskovo_1987_omaps.jpg',
        bounds: [[60.632964120663054, 30.16794204711914], [60.628249519190376, 30.268020629882816], [60.57566873393276, 30.15403747558594]],
        author: ['ARTMV','BLZRV_V','URVNTSV','MNV_Y','PRSCHPA']
    },
    {
        name: 'Колосково',
        year: 1984,
        url: './maps/forest/sosnovo/koloskovo_1984.webp',
        link: './original_maps/forest/sosnovo/koloskovo_1984_omaps.jpg',
        bounds: [[60.632964120663054, 30.168886184692386], [60.63001757552591, 30.219869613647464], [60.600158103609864, 30.160388946533207]],
        author: ['URVNTSV','VLKV_K','PTRV_A','SHLKHN_AN','KRNLJV','BNDRNK','SKLVA']
    },
    {
        name: 'Колосково',
        year: 1994,
        start: 'WN',
        url: './maps/forest/sosnovo/koloskovo_1994.webp',
        link: ['./original_maps/forest/sosnovo/koloskovo_1994_omaps.jpg','./original_maps/forest/sosnovo/koloskovo_1994_2_omaps.jpg'],
        bounds: [[60.630249099534126, 30.177898406982425], [60.62702866180913, 30.224289894104007], [60.601063980517786, 30.170903205871582]],
        author: 'MLVA_M'
    },
    {
        name: 'Колосково',
        year: 1998,
        start: 'WN',
        url: './maps/forest/sosnovo/koloskovo_1998.webp',
        link: './original_maps/forest/sosnovo/koloskovo_1998_omaps.jpg',
        bounds: [[60.6301017662667, 30.169658660888675], [60.62509203460731, 30.244503021240238], [60.604539783918085, 30.16227722167969]],
        author: ['KAZNTSVA_O','MLVA_M']
    },
    {
        name: 'Кривко, оз Уловное',
        date: '1998-06-19',
        start: 'WN',
        url: './maps/forest/sosnovo/sosnovo_ulovnoe_1998.webp',
        link: './original_maps/forest/sosnovo/sosnovo_ulovnoe_1998_omaps.jpg',
        bounds: [[60.60816264725311, 30.20720958709717], [60.604434462040935, 30.260295867919925], [60.58871658691616, 30.200514793396]],
        author: ['KAZNTSVA_O','MLVA_M']
    },
    {
        name: 'Замостье',
        year: 1989,
        date: '1990-06-22',
        start: 'WN',
        url: './maps/forest/sosnovo/zamostie_1989.webp',
        link: './original_maps/forest/sosnovo/zamostie_1989_omaps.jpg',
        bounds: [[60.54651864267247, 30.3178882598877], [60.54360640888423, 30.36423683166504], [60.51603272298398, 30.311708450317386]],
        author: ['MLVA_M','KAZNTSVA_O','KAZNTSV_S','KUOKNN_M']
    },
    {
        name: 'Замостье',
        year: 1991,
        start: 'WN',
        url: './maps/forest/sosnovo/zamostie_1991.webp',
        link: './original_maps/forest/sosnovo/zamostie_1991_omaps.jpg',
        bounds: [[60.52663426892839, 30.328273773193363], [60.5241425840469, 30.374622344970707], [60.49295920575224, 30.32381057739258]],
        author: ['KAZNTSVA_O','MLVA_M','KAZNTSV_S']
    },
    {
        name: 'Снегирёвка',
        year: 2000,
        start: 'WN',
        url: './maps/forest/sosnovo/snegirevka_2000.webp',
        link: './original_maps/forest/sosnovo/snegirevka_2000_omaps.jpg',
        bounds: [[60.55356600774117, 30.313425064086918], [60.55177266226546, 30.348958969116214], [60.52781669636631, 30.31016349792481]],
        author: ['KAZNTSVA_O','MLVA_M','KAZNTSV_S']
    },
    {
        name: 'Сосново, 69км',
        year: 2000,
        start: 'WN',
        url: './maps/forest/sosnovo/sosnovo_69km_2000.webp',
        link: './original_maps/forest/sosnovo/sosnovo_69km_2000_omaps.jpg',
        bounds: [[60.54086276047696, 30.257034301757816], [60.53921645977455, 30.28819084167481], [60.51565252342285, 30.25171279907227]],
        author: ['KAZNTSVA_O','MLVA_M','KAZNTSV_S']
    },
    {
        name: 'Замостье',
        year: 2000,
        start: 'WN',
        url: './maps/forest/sosnovo/zamostie_1999.webp',
        link: ['./original_maps/forest/sosnovo/zamostie_1999_omaps.jpg','./original_maps/forest/sosnovo/zamostie_2000_wn_omaps.jpg'],
        bounds: [[60.538562137521424, 30.337886810302734], [60.538688781570556, 30.37153244018555], [60.51373033511651, 30.336771011352543]],
        author: ['KAZNTSVA_O','MLVA_M','KAZNTSV_S']
    },
    {
        name: 'Замостье',
        year: 2006,
        url: './maps/forest/sosnovo/zamostie_2006.webp',
        link: './original_maps/forest/sosnovo/zamostie_2006_omaps.jpg',
        bounds: [[60.54394407261173, 30.314283370971683], [60.538118879447, 30.377626419067386], [60.51700432381264, 30.306472778320316]],
        author: ['SHRNN','RYLOV_V']
    },
    {
        name: 'Игора',
        year: 2019,
        url: './maps/forest/sosnovo/69_km_2019.webp',
        bounds: [[60.52724660281343, 30.230169296264652], [60.525789651465296, 30.25621891021729], [60.50844901094424, 30.225105285644535]],
        author: ['DBRTSV_V','KAZNTSVA_O'],
        owner: 'SHLKHN_AN'
    },
    {
        name: 'Игора, север',
        year: 2019,
        url: './maps/forest/sosnovo/igora_north_2019.webp',
        bounds: [[60.54225571873845, 30.220599174499515], [60.540060727006335, 30.24167060852051], [60.528365665856704, 30.216135978698734]],
        author: 'RYLOV_V',
        owner: 'SHLKHN_AN'
    },
    {
        name: 'Игора',
        year: 2023,
        url: './maps/forest/sosnovo/igora_2023.webp',
        link: './original_maps/forest/sosnovo/igora_2023_omaps.jpg',
        bounds: [[60.51935927881255, 30.20602941513062], [60.5171099308425, 30.22598505020142], [60.51230446242403, 30.20278930664063]],
        author: ['IVNVA_G','TKMKVA_P','CHSNKV'],
        owner: 'SHEIN'
    },
    {
        name: 'Сосново, оз Уловное',
        date: '1981-08-05',
        start: 'USSR_1981',
        info: '<a href="./docs/ussr_champ_1981_relay_schema_omaps.jpg">Эстафета</a>.',
        url: './maps/forest/sosnovo/sosnovo_ulovnoe_oz_1981.webp',
        link: ['./original_maps/forest/sosnovo/sosnovo_ulovnoe_oz_1981_omaps.jpg','./original_maps/forest/sosnovo/sosnovo_ulovnoe_oz_1981_M1_omaps.jpg','./original_maps/forest/sosnovo/sosnovo_ulovnoe_oz_1981_M3_omaps.jpg','./original_maps/forest/sosnovo/sosnovo_ulovnoe_oz_1981_W3_omaps.jpg','./original_maps/forest/sosnovo/sosnovo_ulovnoe_oz_1981_all_omaps.jpg'],
        bounds: [[60.60475042664144, 30.21566390991211], [60.60226475491396, 30.262098312377933], [60.58557630901257, 30.209827423095707]],
        author: ['ARTMV','PRSCHPA','BLZRV_V','SRKN_A','TRSV','SNTSNA','DRSVNA','FDRV_L','KRCHKN_V']
    },
    {
        name: 'Сосново, оз Уловное',
        year: 2023,
        url: './maps/forest/sosnovo/sosnovo_ulovnoe_oz_2023.webp',
        bounds: [[60.62879678508205, 30.18914222717285], [60.62345002044758, 30.264759063720707], [60.588611213413415, 30.17704010009766]],
        author: 'MKHLV_A',
        owner: 'WN'
    },
    {
        name: 'Сосново, Чёрный лес',
        year: 1974,
        url: './maps/forest/sosnovo/sosnovo_black_forest_1974.webp',
        link: './original_maps/forest/sosnovo/sosnovo_black_forest_1974_omaps.jpg',
        bounds: [[60.54495704265323, 30.218925476074222], [60.55179376102548, 30.26218414306641], [60.51341347994116, 30.23600578308106]],
        author: ['SHRNN','GRZNVCH']
    },
    {
        name: 'Сосново, Чёрный лес',
        year: 1978,
        info: 'Зимний Кубок Ленинграда.',
        url: './maps/forest/sosnovo/sosnovo_black_forest_1978.webp',
        link: './original_maps/forest/sosnovo/sosnovo_black_forest_1978_omaps.jpg',
        bounds: [[60.54854438985107, 30.246391296386722], [60.54449276865394, 30.294499397277836], [60.51746899216865, 30.2404260635376]],
        author: ['GRZNVCH','SHRNN','FDRV_L']
    },
    {
        name: 'Сосново, Чёрный лес',
        year: 1982,
        url: './maps/forest/sosnovo/sosnovo_black_forest_1982.webp',
        link: './original_maps/forest/sosnovo/sosnovo_black_forest_1982_omaps.jpg',
        bounds: [[60.539659702817346, 30.244975090026855], [60.53662020004658, 30.294542312622074], [60.51624394303434, 30.241756439208988]],
        author: ['GRZNVCH','SHRNN','FDRV_L','BLZRV_V','YKVLVA']
    },
    {
        name: 'Сосново, Чёрный лес',
        year: 1996,
        url: './maps/forest/sosnovo/sosnovo_black_forest_1986.webp',
        link: './original_maps/forest/sosnovo/sosnovo_black_forest_1996_omaps.jpg',
        bounds: [[60.54052506459614, 30.245018005371097], [60.53744342689857, 30.319004058837894], [60.508470137955726, 30.241327285766605]],
        author: 'SHRNN',
        start: 'CISM_96'
    },
    {
        name: 'Сосново, юг',
        year: 2021,
        url: './maps/forest/sosnovo/sosnovo_south_2012.webp',
        link: './original_maps/forest/sosnovo/sosnovo_south_2012_omaps.jpg',
        bounds: [[60.53915313884433, 30.23669242858887], [60.534931464055, 30.27965068817139], [60.52334013623886, 30.230298042297367]],
        author: 'DBRTSV_V',
        owner: 'SHEIN'
    },
    {
        name: 'Сосново, гора Каланчёвка',
        year: 2010,
        url: './maps/forest/sosnovo/sosnovo_kalanchevka_2010.webp',
        link: './original_maps/forest/sosnovo/sosnovo_kalanchevka_2010_omaps.jpg',
        bounds: [[60.59151939590076, 30.304927825927738], [60.58566061576298, 30.37058830261231], [60.56419744911603, 30.294799804687504]],
        author: ['SHRNN','RYLOV_V']
    },
    {
        name: 'Снегирёвка, Щучьи оз',
        year: 1978,
        url: './maps/forest/sosnovo/snegirevka_schuchji_1978.webp',
        link: './original_maps/forest/sosnovo/snegirevka_schuchji_1978_omaps.jpg',
        bounds: [[60.53816109476326, 30.30183792114258], [60.537147911976085, 30.359859466552738], [60.514680882049724, 30.302696228027347]],
        author: 'SPZHNKV_Y',
        owner: 'KSLV_VN'
    },
    {
        name: 'Снегирёвка',
        year: 1991,
        start: 'WN',
        url: './maps/forest/sosnovo/snegirevka_1991.webp',
        link: './original_maps/forest/sosnovo/snegirevka_1991_omaps.jpg',
        bounds: [[60.52488166312165, 30.276002883911136], [60.52215754533236, 30.348358154296875], [60.494206271637864, 30.27016639709473]],
        author: ['MLVA_M','KAZNTSVA_O','KAZNTSV_S']
    },
    {
        name: 'Снегирёвка',
        year: 1987,
        url: './maps/forest/sosnovo/snegirevka_1987.webp',
        link: './original_maps/forest/sosnovo/snegirevka_1987_omaps.jpg',
        bounds: [[60.55335503108095, 30.303297042846683], [60.55291197561523, 30.339131355285648], [60.53193374068237, 30.302824974060062]],
        author: ['MLVA_M','KUOKNN_M'],
        qtty: 3
    },
    {
        name: 'Снегирёвка',
        year: 1988,
        startYear: 1990,
        start: 'WN',
        url: './maps/forest/sosnovo/snegirevka_1988_1.webp',
        link: './original_maps/forest/sosnovo/snegirevka_1988_1_omaps.jpg',
        bounds: [[60.55580227573843, 30.280079841613773], [60.55196255061042, 30.334196090698246], [60.53195485238091, 30.274500846862797]],
        author: ['MLVA_M','KAZNTSVA_O','KUOKNN_M']
    },
    {
        name: 'Снегирёвка',
        year: 1988,
        startYear: 1990,
        start: 'WN',
        url: './maps/forest/sosnovo/snegirevka_1988.webp',
        link: './original_maps/forest/sosnovo/snegirevka_1988_omaps.jpg',
        bounds: [[60.538562137521424, 30.276474952697757], [60.53816109476326, 30.33908843994141], [60.514490774894206, 30.27467250823975]],
        author: ['MLVA_M','KAZNTSVA_O','KAZNTSV_S','KUOKNN_M'],
        qtty: 10
    },
    {
        name: 'Снегирёвка',
        year: 1999,
        date: '2000-06-21',
        start: 'YM',
        url: './maps/forest/sosnovo/snegirevka_1999.webp',
        link: './original_maps/forest/sosnovo/snegirevka_1999_omaps.jpg',
        bounds: [[60.53761229135715, 30.26119709014893], [60.53512145125236, 30.3178882598877], [60.515251196823, 30.259051322937015]],
        author: 'SHRNN'
    },
    {
        name: 'Снегирёвка',
        year: 2021,
        url: './maps/forest/sosnovo/snegirevka_2021.webp',
        link: './original_maps/forest/sosnovo/snegirevka_2021_omaps.jpg',
        bounds: [[60.55225793026478, 30.294713973999027], [60.54926181156153, 30.353164672851566], [60.52308672753701, 30.28913497924805]],
        author: 'DJCHKV',
        owner: 'SHEIN'
    },
    {
        name: 'Снегирёвка',
        year: 2022,
        url: './maps/forest/sosnovo/snegirevka_2022.webp',
        bounds: [[60.51717329489512, 30.27668952941895], [60.51474425085366, 30.314712524414066], [60.50625172654163, 30.273470878601078]],
        author: 'DBRTSV_V',
        owner: 'SHLKHN_AN'
    },
    {
        name: 'Запорожское',
        year: 2019,
        url: './maps/forest/sosnovo/zaporozhskoe_2020.webp',
        bounds: [[60.599483946158216, 30.54727077484131], [60.596302575735564, 30.585122108459476], [60.586313985618425, 30.542464256286625]],
        author: 'MKHLV_A',
        owner: 'WN'
    },
    {
        name: 'Колосково, г Смуглянка',
        year: 1981,
        url: './maps/forest/sosnovo/koloskovo_1981.webp',
        link: './original_maps/forest/sosnovo/koloskovo_1981_omaps.jpg',
        bounds: [[60.59569154818186, 30.18356323242188], [60.59265730907164, 30.21600723266602], [60.573138653409046, 30.175409317016605]],
        author: 'BLZRV_V'
    },
    {
        name: 'Кривко, оз Уловное',
        year: 1992,
        start: 'WN',
        url: './maps/forest/sosnovo/krivko_ulovnoe_1992.webp',
        link: ['./original_maps/forest/sosnovo/krivko_ulovnoe_1992_omaps.jpg','./original_maps/starts/wn/wn_19992_m21_omaps.jpg'],
        info: '<a href="./docs/1992/1992_06_26_wn_omaps.pdf">Результаты</a>.',
        bounds: [[60.61582829627545, 30.21471977233887], [60.614017345690115, 30.26063919067383], [60.575753066539036, 30.2094841003418]],
        author: 'MLVA_M'
    },
    {
        name: 'Кривко, оз Уловное',
        year: 2021,
        url: './maps/forest/sosnovo/krivko_2021.webp',
        link: './original_maps/forest/sosnovo/krivko_2021_omaps.jpg',
        bounds: [[60.628838882073644, 30.19051551818848], [60.62332370820346, 30.245618820190433], [60.59678717557373, 30.177726745605472]],
        author: ['DJCHKV','PPV_D'],
        owner: 'SHEIN'
    },
    {
        name: 'Кривко, оз Туманное',
        year: 2009, //уже в 2009 использовалась для 50-летия ориентрования
        info: 'Год и авторы - не точно.',
        url: './maps/forest/sosnovo/krivko_ulovnoe_2023.webp',
        link: './original_maps/forest/sosnovo/krivko_ulovnoe_2023_omaps.jpg',
        bounds: [[60.629722906202076, 30.178756713867188], [60.62408157424831, 30.258493423461918], [60.58751530860598, 30.165367126464847]],
        author: ['ARTMV','BLZRV_V','VLKV_K','SKLVA','YKVLVA'],
        owner: 'RDNV_I'
    },
    {
        name: 'Раздолье',
        year: 2024,
        url: './maps/forest/sosnovo/razdolje_2024.webp',
        bounds: [[60.594343032664085, 30.117559432983402], [60.59010748493463, 30.155110359191898], [60.583510724895596, 30.112752914428714]],
        author: 'MKHLV_A',
        owner: 'WN'
    },
    {
        name: 'Петяярви - Ягодное',
        year: 1985,
        url: './maps/forest/sosnovo/petjajarvy_yagodnoe_1985.webp',
        link: './original_maps/forest/sosnovo/petjajarvy_yagodnoe_1985_omaps.jpg',
        photo: './tracks/petyajarvi/pic_6.jpg',
        bounds: [[60.637088831496946, 30.015935897827152], [60.63161716201196, 30.102453231811527], [60.60946846339769, 30.008382797241214]],
        author: ['LVCHV','SVTKN']
    },
    {
        name: 'Петяярви',
        year: 1996,
        start: 'WN',
        url: './maps/forest/sosnovo/petjajarvy_1995.webp',
        link: ['./original_maps/forest/sosnovo/petjajarvy_1995_omaps.jpg','./original_maps/forest/sosnovo/petjajarvy_1995_wn_omaps.jpg'],
        bounds: [[60.63513176408995, 30.066618919372562], [60.62854420197844, 30.161118507385257], [60.60831008075406, 30.059537887573246]],
        author: ['LVCHV','SVTKN','KAZNTSVA_O']
    },
    {
        name: 'Ягодное',
        date: '1997-06-20',
        start: 'WN',
        url: './maps/forest/sosnovo/petjajarvy_1997.webp',
        link: ['./original_maps/forest/sosnovo/petjajarvy_1997_omaps.jpg','./original_maps/forest/sosnovo/petjajarvy_wn_1997.jpg'],
        bounds: [[60.634921319659725, 30.012931823730472], [60.63241692549768, 30.06588935852051], [60.616691620658365, 30.008082389831547]],
        author: ['LVCHV','SVTKN','KAZNTSVA_O']
    },
    {
        name: 'Петяярви - кентавр',
        year: 1,
        url: './maps/forest/sosnovo/petjajarvy_kentavr.webp',
        link: './original_maps/forest/sosnovo/petjajarvy_kentavr_omaps.jpg',
        photo: './tracks/petyajarvi/pic_7.jpg',
        bounds: [[60.635110719708734, 30.137214660644535], [60.632501109973745, 30.17905712127686], [60.619197236209565, 30.133953094482425]],
        author: 'TRSV'
    },
    {
        name: 'Петровское',
        year: 2014,
        url: './maps/forest/sosnovo/petjajarvy_kentavr_2014.webp',
        bounds: [[60.635300118645006, 30.13858795166016], [60.63195390695019, 30.174379348754886], [60.62433419230599, 30.13455390930176]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN'
    },
    {
        name: 'Петровское, "Связист"',
        year: 2023,
        url: './maps/forest/sosnovo/petrovskoe_svjazist_2023.webp',
        link: './original_maps/forest/sosnovo/petrovskoe_svjazist_2023_omaps.jpg',
        bounds: [[60.66458042842836, 30.1730489730835], [60.65875593567393, 30.23197174072266], [60.64523148134875, 30.165109634399418]],
        author: ['TKMKV_K','KVZN'],
        owner: 'SHEIN'
    },
    {
        name: 'Петровское, лагерь "Связист"',
        year: 2010,
        url: './maps/forest/sosnovo/petrovskoe_svjazist_2010.webp',
        bounds: [[60.64896547114925, 30.197918415069584], [60.647703325825276, 30.214891433715824], [60.64274892755333, 30.196609497070316]],
        author: 'SHRNN',
        owner: 'PPLVSKY'
    },
    {
        name: 'Петяярви',
        year: 1987,
        info: 'XIII Всесоюзные соревнования ветеранов.',
        url: './maps/forest/sosnovo/petjajarvy_1987.webp',
        link: './original_maps/forest/sosnovo/petjajarvy_1987_omaps.jpg',
        photo: './tracks/petyajarvi/pic_3.jpg',
        bounds: [[60.63460565043869, 30.06546020507813], [60.627428602938316, 30.182876586914066], [60.60639339270737, 30.058765411376957]],
        author: ['LVCHV','SVTKN']
    },
    {
        name: 'Петяярви',
        year: 2001,
        start: 'WN',
        url: './maps/forest/sosnovo/petjajarvy_2001.webp',
        link: './original_maps/forest/sosnovo/petyajarv_2001_omaps.jpg',
        bounds: [[60.634479381884795, 30.074815750122074], [60.6279548337094, 30.161375999450687], [60.616186262847506, 30.069322586059574]],
        author: ['KAZNTSVA_O','KAZNTSV_S']
    },
    {
        name: 'Петяярви, запад',
        year: 2019,
        url: './maps/forest/sosnovo/petyajarvi_west_2019.webp',
        link: './original_maps/forest/sosnovo/petyajarvi_west_2019_omaps.jpg',
        photo: 'tracks/petyajarvi/pic_6.jpg',
        bounds: [[60.632080185395296, 30.048379898071293], [60.630564811411745, 30.083227157592773], [60.61342771193733, 30.044517517089847]],
        author: 'DJCHKV',
        owner: 'SHEIN'
    },
    {
        name: 'Петяярви, юг',
        year: 2019,
        url: './maps/forest/sosnovo/petyajarvi_south_2019.webp',
        link: './original_maps/forest/sosnovo/petyajarvi_south_2019_omaps.jpg',
        bounds: [[60.61098482874486, 30.08786201477051], [60.609426341120916, 30.123052597045902], [60.59857802491448, 30.08563041687012]],
        author: 'DJCHKV',
        owner: 'SHEIN'
    },
    {
        name: 'Петяярви',
        year: 2014,
        url: './maps/forest/sosnovo/petyajarvi.webp',
        link: './original_maps/forest/sosnovo/petyajarvi_2014_omaps.jpg',
        photo: 'tracks/petyajarvi/pic_7.jpg',
        bounds: [[60.635110719708734, 30.071811676025394], [60.62888097901027, 30.160732269287113], [60.61443850605954, 30.068721771240238]]
    },
    {
        name: 'Петяярви',
        year: 2021,
        url: './maps/forest/sosnovo/petjajarvy_2024.webp',
        bounds: [[60.63456356097567, 30.088205337524418], [60.62723915775856, 30.161161422729496], [60.61170086539145, 30.07936477661133]],
        author: ['MKHLV_A','IVNV_P','USNKO'],
        owner: 'WN'
    },
    {
        name: 'Варшко',
        year: 1988,
        url: './maps/forest/sosnovo/varshko_1988.webp',
        link: './original_maps/forest/sosnovo/varshko_1988_omaps.jpg',
        bounds: [[60.66989935154745, 30.036277770996097], [60.663045556032735, 30.122537612915043], [60.6504273943483, 30.03499031066895]],
        author: ['VLKV_K','OVCHNNKV']
    },
    {
        name: 'Лосево',
        year: 1990,
        url: './maps/forest/sosnovo/losevo_1990.webp',
        link: './original_maps/forest/sosnovo/losevo_1990_omaps.jpg',
        bounds: [[60.69452732858858, 29.919462203979496], [60.69036795262589, 29.994564056396488], [60.67044591045741, 29.912509918212894]],
        author: ['RYLOV_V','VSLVSKY']
    },
    {
        name: 'Лосево',
        year: 2005,
        url: './maps/forest/sosnovo/losevo_2005.webp',
        link: ['./original_maps/forest/sosnovo/losevo_2005_omaps.gif','./original_maps/forest/sosnovo/losevo_1_2000_omaps.jpg','./original_maps/starts/na/na_2000_losevo_3_omaps.jpg','./original_maps/forest/sosnovo/losevo_2005_omaps.ocd','./original_maps/forest/sosnovo/losevo_2005_10000_omaps.ocd'],
        bounds: [[60.695241510752176, 29.892425537109375], [60.68944357380662, 30.01078605651856], [60.67120266901343, 29.88813400268555]],
        author: ['RYLOV_V','VSLVSKY','BRDR','FDRV_A','FDRV_L','SHKLV']
    },
    {
        name: 'Лосево',
        year: 2022,
        url: './maps/forest/sosnovo/losevo_2022.webp',
        bounds: [[60.698476137242736, 29.897747039794922], [60.68994778372843, 29.98701095581055], [60.67372506905266, 29.887275695800785]],
        author: ['KVZN','TKMKV_K'],
        owner: 'ILVS'
    },
    {
        name: 'Лосево',
        year: 2018,
        url: './maps/forest/sosnovo/losevo_2018.webp',
        link: ['./original_maps/forest/sosnovo/losevo_2018_omaps.gif','./original_maps/forest/sosnovo/losevo_west_2018_omaps.gif','./original_maps/forest/sosnovo/losevo_2014_omaps.gif','./original_maps/forest/sosnovo/losevo_2018_omaps.ocd','./original_maps/forest/sosnovo/losevo_west_2018_omaps.ocd','./original_maps/forest/sosnovo/losevo_2014_omaps.ocd'],
        bounds: [[60.6833714253735, 29.92759466171265], [60.68118601193357, 29.974951744079593], [60.6703197823018, 29.925019741058353]],
        author: ['VSLVSKY','DRBSHV']
    },
];
