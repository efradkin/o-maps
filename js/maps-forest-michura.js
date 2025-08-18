// types can be ROGAINE, SPRINT, CITY, RELIEF
let michuraMaps = [
    // --- ТОКСОВО ---
    {
        name: 'Мичуринское',
        year: 1989,
        url: './maps/forest/michura/michurinskoe_1989.webp',
        link: './original_maps/forest/michura/michurinskoe_1989_omaps.jpg',
        bounds: [[60.633300851533505, 29.859809875488285], [60.61957621993714, 30.004177093505863], [60.56976490459024, 29.835605621337894]],
        author: 'BYMKV',
        qtty: 100
    },
    {
        name: 'Ягодное',
        year: 1990,
        url: './maps/forest/michura/yagodnoe_1990.webp',
        link: './original_maps/forest/michura/yagodnoe_1990_omaps.jpg',
        bounds: [[60.63704674527589, 29.95044708251953], [60.63090156734067, 30.02451896667481], [60.61254324110497, 29.94186401367188]],
        author: 'BYMKV',
    },
    {
        name: 'Ягодное',
        year: 1992,
        start: 'NA',
        url: './maps/forest/michura/yagodnoe_1992.webp',
        link: './original_maps/forest/michura/yagodnoe_1992_omaps.jpg',
        bounds: [[60.63052271667331, 29.883584976196293], [60.62416578048736, 29.952764511108402], [60.601717038799606, 29.87337112426758]],
        author: ['BYMKV','VSLVSKY','DRBSHV','FDRV_L','FLCHKN','RBKV_D','DRZDVA','KSNFNTVA','ZRNA','BZNVA_E'],
        areas: [70,5,10,5,2,2,1,1,1,1],
        qtty: 3
    },
    {
        name: 'Борисово',
        year: 1988,
        url: './maps/forest/michura/borisovo_1988.webp',
        link: './original_maps/forest/michura/borisovo_1988_omaps.jpg',
        bounds: [[60.6256393540837, 29.92907524108887], [60.61978676452859, 30.005121231079105], [60.58578707547604, 29.915943145751957]],
        author: ['BYMKV','PVLV_M','GRBTNKV','VNGRDV_K','SMNV_K','BKKLV','NKSHN','CHRNV_G','SKBLV_A'],
        areas: [55,5,10,5,5,5,5,5,5],
        qtty: 10
    },
    {
        name: 'Мичуринское',
        year: 1988,
        url: './maps/forest/michura/michurinskoe_1988.webp',
        link: './original_maps/forest/michura/michurinskoe_1988_omaps.jpg',
        bounds: [[60.6080783992359, 29.91233825683594], [60.600958647299585, 29.997868537902836], [60.57048185567935, 29.898004531860355]],
        author: ['BYMKV','PVLV_M','GRBTNKV','VNGRDV_K','SMNV_K','BKKLV','NKSHN'],
        areas: [65,10,5,5,5,5,5],
        qtty: 10
    },
    {
        name: 'Журавлёвское оз',
        year: 1992,
        start: 'NA',
        url: './maps/forest/michura/zhuravlevskoe_1992.webp',
        link: './original_maps/forest/michura/zhuravlevskoe_1992_omaps.jpg',
        bounds: [[60.6315750686474, 29.813547134399418], [60.6264813659105, 29.888048171997074], [60.603275898710784, 29.80470657348633]],
        author: ['BYMKV','FLCHKN'],
        qtty: 2
    },
    {
        name: 'Журавлёво, Плотвичное оз',
        excluded: true,
        year: 1992,
        start: 'NA',
        url: './maps/forest/michura/zhuravlevo_plotvichnoe_1992.webp',
        link: './original_maps/forest/michura/zhuravlevo_plotvichnoe_1992_omaps.jpg',
        bounds: [[60.62761804700513, 29.85294342041016], [60.62326055189589, 29.91010665893555], [60.600263439440035, 29.84466075897217]],
        author: ['BYMKV','VSLVSKY','DRBSHV','FDRV_L'],
        areas: [70,5,15,10],
        qtty: 100
    },
    {
        name: 'Мичуринское',
        year: 1991,
        url: './maps/forest/michura/michurinskoe_sw_1991.webp',
        link: './original_maps/forest/michura/michurinskoe_sw_1991_omaps.jpg',
        bounds: [[60.59185655953876, 29.84169960021973], [60.5904657368445, 29.883327484130863], [60.56930098658817, 29.83818054199219]],
        author: ['KNSTNTNV_D','EGRV_A'],
    },
    {
        name: 'Коробицыно',
        year: 2018,
        url: './maps/forest/michura/korobitsyno_2018.webp',
        link: './original_maps/forest/michura/korobitsyno_2018_omaps.jpg',
        bounds: [[60.54723610930417, 29.801445007324222], [60.54394407261173, 29.87465858459473], [60.5113855334377, 29.794406890869144]],
        owner: 'KURD',
        author: ['DJCHKV','STLV_S','PPV_D'],
    },
    {
        name: 'Золотая Долина',
        year: 2016,
        url: './maps/forest/michura/gold_dolina_2016.webp',
        link: './original_maps/forest/michura/gold_dolina_2016_omaps.jpg',
        bounds: [[60.52945302025571, 29.753143787384037], [60.52875627309598, 29.764494895935062], [60.52086931681358, 29.751234054565433]],
        author: 'DBRTSV_V',
        owner: 'SHEIN',
    },
    {
        name: 'Петриченко, Светлое оз',
        year: 1993,
        url: './maps/forest/michura/petrichenko_svetloe_1993.webp',
        link: './original_maps/forest/michura/petrichenko_svetloe_1993_omaps.jpg',
        photo: './tracks/berestovoe/pic_1.jpg',
        bounds: [[60.60927891271937, 29.877018928527836], [60.603486549681946, 29.936757087707523], [60.58865336285576, 29.868822097778324]],
        author: 'BYMKV',
    },
/*
    {
        name: 'Мичуринское',
        url: './maps/forest/michura/michurinskoe.webp',
        bounds: [[60.59244658743532, 29.848051071166996], [60.58781036355805, 29.913797378540043], [60.56795136908784, 29.84066963195801]],
        owner: 'WN',
    },
*/
/*
    {
        name: 'Петриченко',
        year: 2024,
        url: './maps/forest/michura/petrichenko_2024.webp',
        bounds: [[60.60196983200712, 29.854745864868168], [60.59645006341276, 29.930276870727543], [60.57512056662774, 29.846506118774418]],
        owner: 'WN',
    },
*/
/*
    {
        name: 'Узорное оз',
        year: 2010,
        url: './maps/forest/michura/uzornoe_oz_2010.webp',
        bounds: [[60.60510851611638, 29.94482517242432], [60.60142211088886, 29.997310638427738], [60.58715702396935, 29.93937492370606]],
        owner: 'WN',
    },
*/
/*
    {
        name: 'Долгое оз',
        year: 2010,
        url: './maps/forest/michura/dolgoe_oz_2010.webp',
        bounds: [[60.59244658743532, 29.915428161621097], [60.589032705361774, 29.967613220214847], [60.57501514877231, 29.910192489624027]],
        owner: 'WN',
    },
*/
/*
    {
        name: 'Ягодное, Берестовое оз',
        url: './maps/forest/michura/yagodnoe_berestovoe.webp',
        bounds: [[60.63805679941613, 29.95182037353516], [60.633427124703225, 30.014219284057617], [60.61325924317173, 29.94280815124512]],
        owner: 'WN',
    },
*/
    {
        name: 'Ягодное',
        year: 2007,
        area: 14,
        info: 'Карта рисовалась для ММС и "Карельских Скал".',
        url: './maps/forest/michura/yagodnoe_2007.webp',
        link: './original_maps/forest/michura/yagodnoe_2007.pdf',
        photo: 'tracks/berestovoe/pic_7.jpg',
        bounds: [[60.64213877912432, 29.869766235351566], [60.62858629929979, 30.022630691528324], [60.60529809128897, 29.856805801391605]],
        author: ['KUZNTSV_S','TKMKV_K','NSNV','KVZN','SHRNN'],
    },
    {
        name: 'Борисово-Ягодное',
        year: 2006,
        startYear: 2010,
        start: 'NA',
        url: './maps/forest/michura/yagodnoe_na_2006.webp',
        link: ['./original_maps/forest/michura/yagodnoe_na_2006_omaps.gif','./original_maps/forest/michura/yagodnoe_na_2006_omaps.ocd'],
        bounds: [[60.626439265841256, 29.92684364318848], [60.62298687313406, 29.966154098510746], [60.613343477664465, 29.922208786010746]],
        author: ['VSLVSKY','DRBSHV'],
    },
    {
        name: 'Борисово-Ягодное',
        year: 2011,
        startYear: 2013,
        start: 'NA',
        url: './maps/forest/michura/yagodnoe_na_2011.webp',
        link: ['./original_maps/forest/michura/yagodnoe_na_2011_omaps.gif','./original_maps/forest/michura/yagodnoe_na_2011_omaps.ocd'],
        bounds: [[60.62812322574257, 29.909677505493168], [60.625070983672735, 29.944653511047367], [60.603191637937435, 29.90109443664551]],
        author: 'VSLVSKY',
    },
    {
        name: 'Мичуринское',
        year: 2022,
        area: 70,
        url: './maps/forest/michura/michurinskoe_2022.webp',
        bounds: [[60.66720846469397, 29.79578018188477], [60.637257175831714, 30.08914947509766], [60.57735534424474, 29.758701324462894]],
        photo: 'tracks/petrichenko/pic_1.jpg',
        author: ['MKHLV_A','GVRLK','SLBDNK','ILVS','GRBTNKV','TRNV_V','TKMKV_K','KUZNTSV_S','VRBY'],
        owner: ['WN','ILVS'],
    },
    {
        name: 'Мичуринское',
        year: 2025,
        url: './maps/trnsprnt.png',
        bounds: [[60.63732988815437, 29.829597473144535], [60.54868172542251, 30.03868103027344], [60.58155975236118, 29.82170104980469]],
        photo: 'tracks/petrichenko/pic_1.jpg',
        restricted: 'с 16.08.2025 по 21.09.2025, <a href="https://o-site.spb.ru/race.php?id=250921">Гран-при Владимира Алексеева</a>',
        owner: 'WN'
    },
/*
    {
        name: 'Ягодное',
        year: 2017,
        url: './maps/forest/michura/yagodnoe_2017.webp',
        bounds: [[60.64659890810976, 29.949502944946293], [60.64394815114584, 29.9862813949585], [60.633279805957116, 29.944481849670414]],
    },
*/
/*
    {
        name: 'Ягодное',
        year: 2011,
        url: './maps/forest/michura/yagodnoe_2011.webp',
        bounds: [[60.6479452408423, 29.935426712036136], [60.64394815114584, 29.98452186584473], [60.63014386155463, 29.93006229400635]],
    },
*/
/*
    {
        name: 'Ягодное, Дубовые оз',
        year: 2022,
        url: './maps/forest/michura/yagodnoe_dubovjie_2022.webp',
        bounds: [[60.63241692549768, 30.011601448059082], [60.6281021767865, 30.04945278167725], [60.618333978875846, 30.00503540039063]],
        owner: 'WN',
    },
*/
    {
        name: 'Былинное оз',
        year: 2023,
        url: './maps/forest/michura/bylinnoe_2023.webp',
        bounds: [[60.52760555177631, 29.930276870727543], [60.52131281110355, 29.99722480773926], [60.50310343444655, 29.919977188110355]],
        author: 'MKHLV_A',
        owner: 'WN',
    },
    {
        name: 'Климово, Смоляное оз',
        year: 2015,
        url: './maps/forest/michura/smoljanoe_2015.webp',
        bounds: [[60.63873015126027, 29.526014328002933], [60.6322485558861, 29.589614868164066], [60.62109211032432, 29.519748687744144]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN',
    },
    {
        name: 'Тихое оз',
        year: 2024,
        area: 4.2,
        url: './maps/forest/michura/tikhoe_2024.webp',
        bounds: [[60.65156323132944, 29.6381950378418], [60.64609401883211, 29.728059768676758], [60.63304830371036, 29.633388519287113]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN',
    },
];