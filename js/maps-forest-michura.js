// types can be ROGAINE, SPRINT, CITY, RELIEF
let michuraMaps = [
    // --- ТОКСОВО ---
    {
        name: 'Мичуринское',
        year: 1989,
        url: './maps/forest/michura/michurinskoe_1989.webp',
        link: './original_maps/forest/michura/michurinskoe_1989_omaps.jpg',
        bounds: [[60.6333009, 29.8598099], [60.6195762, 30.0041771], [60.5697649, 29.8356056]],
        author: 'BYMKV',
        qtty: 90
    },
    {
        name: 'Мичуринское',
        year: 1986,
        url: './maps/forest/michura/michurinskoe_1986.webp',
        link: './original_maps/forest/michura/michurinskoe_1986_omaps.jpg',
        bounds: [[60.6185656, 29.8816967], [60.600748, 29.9374008], [60.5764277, 29.8296833]],
        author: 'BYMKV',
    },
    {
        name: 'Ягодное',
        year: 1990,
        url: './maps/forest/michura/yagodnoe_1990.webp',
        link: './original_maps/forest/michura/yagodnoe_1990_omaps.jpg',
        bounds: [[60.6370467, 29.9504471], [60.6309016, 30.024519], [60.6125432, 29.941864]],
        author: 'BYMKV'
    },
    {
        name: 'Ягодное №47',
        year: 1992,
        start: 'NA',
        page: 'spb',
        url: './maps/forest/michura/yagodnoe_47_1992.webp',
        link: './original_maps/forest/michura/yagodnoe_47_1992_omaps.jpg',
        bounds: [[60.6305227, 29.883585], [60.6241658, 29.9527645], [60.601717, 29.8733711]],
        author: ['BYMKV','VSLVSKY','DRBSHV','FDRV_L','FLCHKN','RBKV_D','DRZDVA','KSNFNTVA','ZRNA','BZNVA_E'],
        areas: [70,5,10,5,2,2,1,1,1,1],
        qtty: 3
    },
    {
        name: 'Ягодное №46',
        excluded: true,
        year: 1992,
        start: 'NA',
        page: 'spb',
        url: './maps/forest/michura/yagodnoe_46_1992.webp',
        link: './original_maps/forest/michura/yagodnoe_46_1992_omaps.jpg',
        bounds: [[60.6267971, 29.9058151], [60.6246921, 29.9704885], [60.6011061, 29.9031973]],
        author: ['BYMKV','GRBTNKV','CHRNV_G','DRBSHV','FDRV_L','FLCHKN','RBKV_D','DRZDVA','KSNFNTVA','ZRNA','BZNVA_E'],
        areas: [75,5,5,3,3,3,2,1,1,1,1],
        results: './docs/1992/1992_06_19_na_omaps.pdf',
        qtty: 3
    },
    {
        name: 'Борисово',
        year: 1988,
        url: './maps/forest/michura/borisovo_1988.webp',
        link: './original_maps/forest/michura/borisovo_1988_omaps.jpg',
        bounds: [[60.6256394, 29.9290752], [60.6197868, 30.0051212], [60.5857871, 29.9159431]],
        author: ['BYMKV','PVLV_M','GRBTNKV','VNGRDV_K','SMNV_K','BKKLV','NKSHN','CHRNV_G','SKBLV_A'],
        areas: [55,5,10,5,5,5,5,5,5],
    },
    {
        name: 'Мичуринское',
        year: 1988,
        url: './maps/forest/michura/michurinskoe_1988.webp',
        link: './original_maps/forest/michura/michurinskoe_1988_omaps.jpg',
        bounds: [[60.6080784, 29.9123383], [60.6009586, 29.9978685], [60.5704819, 29.8980045]],
        author: ['BYMKV','PVLV_M','GRBTNKV','VNGRDV_K','SMNV_K','BKKLV','NKSHN'],
        areas: [65,10,5,5,5,5,5],
        qtty: 7
    },
    {
        name: 'Мичуринское, Петриченко',
        year: 1990,
        url: './maps/forest/michura/michurinskoe_petrichenko_1990.webp',
        link: './original_maps/forest/michura/michurinskoe_petrichenko_1990_omaps.jpg',
        bounds: [[60.6192815, 29.8834562], [60.6009376, 29.9375296], [60.576765, 29.8295546]],
        author: ['BYMKV','CHRNV_G','PVLV_M','GRBTNKV','CHRNNKO_G','SKBLV_A','VNGRDV_K','SMNV_K','BKKLV','NKSHN','CHRPNV_V'],
        areas: [70,12,2,2,2,2,2,2,2,2,2],
        logo: 'nevsky_azimut.gif'
    },
    {
        name: 'Журавлёвское оз',
        year: 1992,
        start: 'NA',
        page: 'spb',
        url: './maps/forest/michura/zhuravlevskoe_1992.webp',
        link: './original_maps/forest/michura/zhuravlevskoe_1992_omaps.jpg',
        bounds: [[60.6315751, 29.8135471], [60.6264814, 29.8880482], [60.6032759, 29.8047066]],
        results: './docs/1992/1992_06_19_na_omaps.pdf',
        author: ['BYMKV','FLCHKN'],
        qtty: 2
    },
    {
        name: 'Журавлёво, Плотвичное оз',
        excluded: true,
        year: 1992,
        start: 'NA',
        page: 'spb',
        url: './maps/forest/michura/zhuravlevo_plotvichnoe_1992.webp',
        link: './original_maps/forest/michura/zhuravlevo_plotvichnoe_1992_omaps.jpg',
        bounds: [[60.627618, 29.8529434], [60.6232606, 29.9101067], [60.6002634, 29.8446608]],
        author: ['BYMKV','VSLVSKY','DRBSHV','FDRV_L'],
        results: './docs/1992/1992_06_19_na_omaps.pdf',
        areas: [70,5,15,10],
        qtty: 400
    },
    {
        name: 'Мичуринское',
        year: 1991,
        url: './maps/forest/michura/michurinskoe_sw_1991.webp',
        link: './original_maps/forest/michura/michurinskoe_sw_1991_omaps.jpg',
        bounds: [[60.5918566, 29.8416996], [60.5904657, 29.8833275], [60.569301, 29.8381805]],
        author: ['KNSTNTNV_D','EGRV_A'],
        start: 'EUROPEAN_HOPE'
    },
    {
        name: 'Коробицыно',
        year: 2018,
        url: './maps/forest/michura/korobitsyno_2018.webp',
        link: './original_maps/forest/michura/korobitsyno_2018_omaps.jpg',
        bounds: [[60.5472361, 29.801445], [60.5439441, 29.8746586], [60.5113855, 29.7944069]],
        owner: 'KURD',
        author: ['DJCHKV','STLV_S','PPV_D']
    },
    {
        name: 'Золотая Долина',
        year: 2016,
        url: './maps/forest/michura/gold_dolina_2016.webp',
        link: './original_maps/forest/michura/gold_dolina_2016_omaps.jpg',
        bounds: [[60.529453, 29.7531438], [60.5287563, 29.7644949], [60.5208693, 29.7512341]],
        author: 'DBRTSV_V',
        owner: 'SHEIN'
    },
    {
        name: 'Петриченко, Светлое оз',
        year: 1993,
        url: './maps/forest/michura/petrichenko_svetloe_1993.webp',
        link: ['./original_maps/forest/michura/petrichenko_svetloe_1993_clean_omaps.webp','./original_maps/forest/michura/petrichenko_svetloe_1993_omaps.jpg'],
        photo: './tracks/berestovoe/pic_1.jpg',
        bounds: [[60.6092789, 29.8770189], [60.6034865, 29.9367571], [60.5886534, 29.8688221]],
        author: 'BYMKV'
    },
/*
    {
        name: 'Мичуринское',
        url: './maps/forest/michura/michurinskoe.webp',
        bounds: [[60.5924466, 29.8480511], [60.5878104, 29.9137974], [60.5679514, 29.8406696]],
        owner: 'WN'
    },
*/
/*
    {
        name: 'Петриченко',
        year: 2024,
        url: './maps/forest/michura/petrichenko_2024.webp',
        bounds: [[60.6019698, 29.8547459], [60.5964501, 29.9302769], [60.5751206, 29.8465061]],
        owner: 'WN'
    },
*/
/*
    {
        name: 'Узорное оз',
        year: 2010,
        url: './maps/forest/michura/uzornoe_oz_2010.webp',
        bounds: [[60.6051085, 29.9448252], [60.6014221, 29.9973106], [60.587157, 29.9393749]],
        owner: 'WN'
    },
*/
/*
    {
        name: 'Долгое оз',
        year: 2010,
        url: './maps/forest/michura/dolgoe_oz_2010.webp',
        bounds: [[60.5924466, 29.9154282], [60.5890327, 29.9676132], [60.5750151, 29.9101925]],
        owner: 'WN'
    },
*/
/*
    {
        name: 'Ягодное, Берестовое оз',
        url: './maps/forest/michura/yagodnoe_berestovoe.webp',
        bounds: [[60.6380568, 29.9518204], [60.6334271, 30.0142193], [60.6132592, 29.9428082]],
        owner: 'WN'
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
        bounds: [[60.6421388, 29.8697662], [60.6285863, 30.0226307], [60.6052981, 29.8568058]],
        author: ['KUZNTSV_S','TKMKV_K','NSNV','KVZN','SHRNN']
    },
    {
        name: 'Борисово-Ягодное',
        year: 2006,
        startYear: 2010,
        start: 'NA',
        page: 'spb',
        url: './maps/forest/michura/yagodnoe_na_2006.webp',
        link: ['./original_maps/forest/michura/yagodnoe_na_2006_omaps.gif','./original_maps/forest/michura/yagodnoe_na_2006_omaps.ocd'],
        bounds: [[60.6264393, 29.9268436], [60.6229869, 29.9661541], [60.6133435, 29.9222088]],
        author: ['VSLVSKY','DRBSHV']
    },
    {
        name: 'Борисово-Ягодное',
        year: 2011,
        startYear: 2013,
        start: 'NA',
        page: 'spb',
        url: './maps/forest/michura/yagodnoe_na_2011.webp',
        link: ['./original_maps/forest/michura/yagodnoe_na_2011_omaps.gif','./original_maps/forest/michura/yagodnoe_na_2011_omaps.ocd'],
        bounds: [[60.6281232, 29.9096775], [60.625071, 29.9446535], [60.6031916, 29.9010944]],
        author: 'VSLVSKY'
    },
    {
        name: 'Мичуринское',
        year: 2022,
        area: 70,
        url: './maps/forest/michura/michurinskoe_2022.webp',
        bounds: [[60.6672085, 29.7957802], [60.6372572, 30.0891495], [60.5773553, 29.7587013]],
        photo: 'tracks/petrichenko/pic_1.jpg',
        author: ['MKHLV_A','GVRLK','SLBDNK','ILVS','GRBTNKV','TRNV_V','TKMKV_K','KUZNTSV_S','VRBY'],
        owner: ['WN','ILVS']
    },
    {
        name: 'Мичуринское, Петриченко, Морозовское оз',
        year: 2017,
        url: './maps/forest/michura/michurinskoe_morozovskoe_2017.webp',
        bounds: [[60.6023069, 29.8388672], [60.6000106, 29.875474], [60.5784516, 29.8318076]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN'
    },
/*
    {
        name: 'Ягодное',
        year: 2017,
        url: './maps/forest/michura/yagodnoe_2017.webp',
        bounds: [[60.6465989, 29.9495029], [60.6439482, 29.9862814], [60.6332798, 29.9444818]]
    },
*/
/*
    {
        name: 'Ягодное',
        year: 2011,
        url: './maps/forest/michura/yagodnoe_2011.webp',
        bounds: [[60.6479452, 29.9354267], [60.6439482, 29.9845219], [60.6301439, 29.9300623]]
    },
*/
/*
    {
        name: 'Ягодное, Дубовые оз',
        year: 2022,
        url: './maps/forest/michura/yagodnoe_dubovjie_2022.webp',
        bounds: [[60.6324169, 30.0116014], [60.6281022, 30.0494528], [60.618334, 30.0050354]],
        owner: 'WN'
    },
*/
    {
        name: 'Былинное оз',
        year: 2023,
        url: './maps/forest/michura/bylinnoe_2023.webp',
        bounds: [[60.5276056, 29.9302769], [60.5213128, 29.9972248], [60.5031034, 29.9199772]],
        author: 'MKHLV_A',
        owner: 'WN'
    },
    {
        name: 'Климово, Смоляное оз',
        year: 2015,
        url: './maps/forest/michura/smoljanoe_2015.webp',
        bounds: [[60.6387302, 29.5260143], [60.6322486, 29.5896149], [60.6210921, 29.5197487]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN'
    },
    {
        name: 'Тихое оз',
        year: 2024,
        area: 4.2,
        url: './maps/forest/michura/tikhoe_2024.webp',
        bounds: [[60.6515632, 29.638195], [60.646094, 29.7280598], [60.6330483, 29.6333885]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN'
    },
];