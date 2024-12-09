// types can be ORIENT, ROGAINE, SPRINT, CITY, RELIEF
let michuraMaps = [
    // --- ТОКСОВО ---
    {
        name: 'Ягодное',
        year: 1990,
        url: './maps/forest/michura/yagodnoe_1990.webp',
        link: './original_maps/forest/michura/yagodnoe_1990_full.jpg',
        bounds: [[60.63704674527589, 29.95044708251953], [60.63090156734067, 30.02451896667481], [60.61254324110497, 29.94186401367188]],
        types: ['ORIENT'],
    },
    {
        name: 'Ягодное',
        year: 1992,
        url: './maps/forest/michura/yagodnoe_1992.webp',
        link: './original_maps/forest/michura/yagodnoe_1992_full.jpg',
        bounds: [[60.63052271667331, 29.883584976196293], [60.62416578048736, 29.952764511108402], [60.601717038799606, 29.87337112426758]],
        author: ['BYMKV','VSLVSKY','DRBSHV','FDRV_L','FLCHKN','RBKV_D','DRZDVA','KSNFNTVA','ZRNA','BZNVA_E'],
        types: ['ORIENT'],
    },
    {
        name: 'Борисово',
        year: 1988,
        url: './maps/forest/michura/borisovo_1988.webp',
        link: './original_maps/forest/michura/borisovo_1988_full.jpg',
        bounds: [[60.6256393540837, 29.92907524108887], [60.61978676452859, 30.005121231079105], [60.58578707547604, 29.915943145751957]],
        author: ['BYMKV','GRBTNKV'],
        types: ['ORIENT'],
    },
    {
        name: 'Журавлёвское оз',
        year: 1992,
        url: './maps/forest/michura/zhuravlevskoe_1992.webp',
        link: './original_maps/forest/michura/zhuravlevskoe_1992_full.jpg',
        bounds: [[60.6315750686474, 29.813547134399418], [60.6264813659105, 29.888048171997074], [60.603275898710784, 29.80470657348633]],
        author: ['BYMKV','FLCHKN'],
        types: ['ORIENT'],
    },
    {
        name: 'Мичуринское',
        year: 1991,
        url: './maps/forest/michura/michurinskoe_sw_1991.webp',
        link: './original_maps/forest/michura/michurinskoe_sw_1991_full.jpg',
        bounds: [[60.59185655953876, 29.84169960021973], [60.5904657368445, 29.883327484130863], [60.56930098658817, 29.83818054199219]],
        author: ['KNSTNTNV_D','EGRV_A'],
        types: ['ORIENT'],
    },
    {
        name: 'Коробицыно',
        year: 2018,
        url: './maps/forest/michura/korobitsyno_2018.webp',
        link: './original_maps/forest/michura/korobitsyno_2018_full.jpg',
        bounds: [[60.54723610930417, 29.801445007324222], [60.54394407261173, 29.87465858459473], [60.5113855334377, 29.794406890869144]],
        owner: 'KURD',
        types: ['ORIENT'],
        author: ['DJCHKV','STLV','PPV_D'],
    },
    {
        name: 'Золотая Долина',
        year: 2016,
        url: './maps/forest/michura/gold_dolina_2016.webp',
        bounds: [[60.52945302025571, 29.753143787384037], [60.52875627309598, 29.764494895935062], [60.52086931681358, 29.751234054565433]],
        author: 'DBRTSV_V',
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Петриченко, Светлое оз',
        year: 1993,
        url: './maps/forest/michura/petrichenko_svetloe_1993.webp',
        link: './original_maps/forest/michura/petrichenko_svetloe_1993_full.jpg',
        bounds: [[60.60927891271937, 29.877018928527836], [60.603486549681946, 29.936757087707523], [60.58865336285576, 29.868822097778324]],
        author: 'BYMKV',
        types: ['ORIENT'],
    },
/*
    {
        name: 'Мичуринское',
        url: './maps/forest/michura/michurinskoe.webp',
        bounds: [[60.59244658743532, 29.848051071166996], [60.58781036355805, 29.913797378540043], [60.56795136908784, 29.84066963195801]],
        owner: 'WN',
        types: ['ORIENT'],
    },
*/
/*
    {
        name: 'Петриченко',
        year: 2024,
        url: './maps/forest/michura/petrichenko_2024.webp',
        bounds: [[60.60196983200712, 29.854745864868168], [60.59645006341276, 29.930276870727543], [60.57512056662774, 29.846506118774418]],
        owner: 'WN',
        types: ['ORIENT'],
    },
*/
/*
    {
        name: 'Узорное оз',
        year: 2010,
        url: './maps/forest/michura/uzornoe_oz_2010.webp',
        bounds: [[60.60510851611638, 29.94482517242432], [60.60142211088886, 29.997310638427738], [60.58715702396935, 29.93937492370606]],
        owner: 'WN',
        types: ['ORIENT'],
    },
*/
/*
    {
        name: 'Долгое оз',
        year: 2010,
        url: './maps/forest/michura/dolgoe_oz_2010.webp',
        bounds: [[60.59244658743532, 29.915428161621097], [60.589032705361774, 29.967613220214847], [60.57501514877231, 29.910192489624027]],
        owner: 'WN',
        types: ['ORIENT'],
    },
*/
/*
    {
        name: 'Ягодное, Берестовое оз',
        url: './maps/forest/michura/yagodnoe_berestovoe.webp',
        bounds: [[60.63805679941613, 29.95182037353516], [60.633427124703225, 30.014219284057617], [60.61325924317173, 29.94280815124512]],
        owner: 'WN',
        types: ['ORIENT'],
    },
*/
    {
        name: 'Ягодное',
        year: 2007,
        url: './maps/forest/michura/yagodnoe_2007.webp',
        bounds: [[60.63254320212934, 29.86813545227051], [60.62265003454702, 29.96975898742676], [60.6050874521396, 29.861011505126957]],
        author: ['MKHLV_A','SLBDNK','ILVS'],
        types: ['ORIENT'],
    },
    {
        name: 'Мичуринское',
        year: 2022,
        area: 60,
        url: './maps/forest/michura/michurinskoe_2022.webp',
        bounds: [[60.66720846469397, 29.79578018188477], [60.637257175831714, 30.08914947509766], [60.57735534424474, 29.758701324462894]],
        author: ['MKHLV_A','GVRLK','SLBDNK','ILVS','GRBTNKV','TRNV_V'],
        owner: ['WN','ILVES'],
        types: ['ORIENT'],
    },
/*
    {
        name: 'Ягодное',
        year: 2017,
        url: './maps/forest/michura/yagodnoe_2017.webp',
        bounds: [[60.64659890810976, 29.949502944946293], [60.64394815114584, 29.9862813949585], [60.633279805957116, 29.944481849670414]],
        types: ['ORIENT'],
    },
*/
/*
    {
        name: 'Ягодное',
        year: 2011,
        url: './maps/forest/michura/yagodnoe_2011.webp',
        bounds: [[60.6479452408423, 29.935426712036136], [60.64394815114584, 29.98452186584473], [60.63014386155463, 29.93006229400635]],
        types: ['ORIENT'],
    },
*/
/*
    {
        name: 'Ягодное, Дубовые оз',
        year: 2022,
        url: './maps/forest/michura/yagodnoe_dubovjie_2022.webp',
        bounds: [[60.63241692549768, 30.011601448059082], [60.6281021767865, 30.04945278167725], [60.618333978875846, 30.00503540039063]],
        owner: 'WN',
        types: ['ORIENT'],
    },
*/
    {
        name: 'Былинное оз',
        year: 2023,
        url: './maps/forest/michura/bylinnoe_2023.webp',
        bounds: [[60.52760555177631, 29.930276870727543], [60.52131281110355, 29.99722480773926], [60.50310343444655, 29.919977188110355]],
        author: 'MKHLV_A',
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Климово, Смоляное оз',
        year: 2015,
        url: './maps/forest/michura/smoljanoe_2015.webp',
        bounds: [[60.63873015126027, 29.526014328002933], [60.6322485558861, 29.589614868164066], [60.62109211032432, 29.519748687744144]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Тихое оз',
        year: 2024,
        area: 3.5,
        url: './maps/forest/michura/tikhoe_2024.webp',
        bounds: [[60.65156323132944, 29.6381950378418], [60.64609401883211, 29.728059768676758], [60.63304830371036, 29.633388519287113]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN',
        types: ['ORIENT'],
    },
];