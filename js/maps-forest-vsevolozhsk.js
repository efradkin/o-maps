// types can be ROGAINE, SPRINT, CITY, RELIEF, WINTER, VELO
let vsevolozhskMaps = [
    // --- ВСЕВОЛОЖСК ---
    {
        name: 'Воейково',
        date: '1977-02-26',
        logo: 'sparta_1977.jpg',
        info: 'VII Зимняя спартакиада.',
        url: './maps/forest/vsevolozhsk/voeykovo_1977.webp',
        link: './original_maps/forest/vsevolozhsk/voeykovo_1977_M_omaps.jpg',
        bounds: [[59.9717228, 30.668807], [59.9691026, 30.7217216], [59.9487785, 30.6638718]]
    },
    {
        name: 'Всеволожск',
        year: 1987,
        url: './maps/forest/vsevolozhsk/vsevolozhsk_1987.webp',
        link: ['./original_maps/forest/vsevolozhsk/vsevolozhsk_1987_omaps.jpg','./original_maps/forest/vsevolozhsk/vsevolozhsk_1987_2_omaps.jpg'],
        bounds: [[60.0661254, 30.6235313], [60.0635555, 30.6832695], [60.035188, 30.6205273]],
        author: ['VSLVSKY','MDVDKN'],
        qtty: 10
    },
    {
        name: 'Всеволожск',
        year: 1981,
        info: 'Первая карта А.М.Василевского.',
        url: './maps/forest/vsevolozhsk/vsevolozhsk_1981.webp',
        link: './original_maps/forest/vsevolozhsk/vsevolozhsk_1981_omaps.webp',
        bounds: [[60.0593362, 30.6216002], [60.0574727, 30.6770897], [60.0347807, 30.6194544]],
        author: 'VSLVSKY',
        editor: 'CHGRVSKY_V'
    },
    {
        name: 'Всеволожск',
        date: '2010-05-16',
        info: 'Российский Азимут ЛО.',
        o_site: '10RA_LO',
        url: './maps/forest/vsevolozhsk/vsevolozhsk_2010.webp',
        link: './original_maps/forest/vsevolozhsk/vsevolozhsk_2010_omaps.jpg',
        bounds: [[60.0558233, 30.6406331], [60.0536061, 30.6750727], [60.0428822, 30.6376934]],
    },
    {
        name: 'Невская Дубровка',
        year: 2003,
        url: './maps/forest/vsevolozhsk/nevskaya_dubrovka.webp',
        link: './original_maps/forest/vsevolozhsk/nevskaya_dubrovka_omaps.jpg',
        bounds: [[59.8624664, 30.9133387], [59.8614321, 30.9305477], [59.8497298, 30.9099483]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'Невская Дубровка-2',
        url: './maps/forest/vsevolozhsk/nevskaya_dubrovka_east.webp',
        link: './original_maps/forest/vsevolozhsk/nevskaya_dubrovka_east_omaps.jpg',
        bounds: [[59.8524672, 30.9349895], [59.8517667, 30.9482503], [59.8437154, 30.9333158]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'Бернгардовка',
        year: 1991,
        url: './maps/forest/vsevolozhsk/berngardovka_1991.webp',
        link: './original_maps/forest/vsevolozhsk/berngardovka_1991_omaps.jpg',
        bounds: [[60.0137676, 30.6041765], [60.0118586, 30.6513834], [59.988706, 30.6012154]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'Бернгардовка',
        year: 2021,
        url: './maps/forest/vsevolozhsk/berngardovka_2021.webp',
        link: './original_maps/forest/vsevolozhsk/berngardovka_2021_omaps.jpg',
        bounds: [[60.0051655, 30.6045628], [60.0021189, 30.635848], [59.9919041, 30.5993271]],
        author: ['KUZNTSV_S','ILVS','DBRTSV_V'],
        owner: 'SHEIN'
    },
    {
        name: 'Колтуши - Воейково',
        year: 1990,
        url: './maps/forest/vsevolozhsk/koltushi_1990.webp',
        link: ['./original_maps/forest/vsevolozhsk/koltushi_1990_omaps.jpg','./original_maps/forest/vsevolozhsk/voeykovo_1988_omaps.jpg','./original_maps/forest/vsevolozhsk/voeykovo_1989_omaps.jpg'],
        bounds: [[59.9788091, 30.661726], [59.9740851, 30.7406902], [59.9262914, 30.6482506]],
        author: 'VSLVSKY',
    },
    {
        name: 'Голубая Дача',
        year: 2005,
        url: './maps/forest/vsevolozhsk/golubaya_dacha_2005.webp',
        link: './original_maps/forest/vsevolozhsk/golubaya_dacha_2005_omaps.jpg',
        photo: 'tracks/koltushi_kamy/pic_1.jpg',
        bounds: [[59.9679643, 30.6106138], [59.9659023, 30.6605244], [59.947446, 30.6081247]],
        author: ['RYLOV_V','DRBSHV'],
        qtty: 2
    },
    {
        name: 'Голубая Дача',
        year: 1998,
        url: './maps/forest/vsevolozhsk/golubaya_dacha_1998.webp',
        link: ['./original_maps/forest/vsevolozhsk/golubaya_dacha_1998_omaps.jpg','./original_maps/forest/vsevolozhsk/golubaya_dacha_1999_omaps.webp'],
        bounds: [[59.9650646, 30.6105709], [59.9634106, 30.6599236], [59.9471451, 30.6079102]],
        author: 'RYLOV_V',
        editor: 'FDRV_L'
    },
    {
        name: 'Голубая Дача',
        start: 'REPORT',
        year: 1982,
        startYear: 1985,
        info: '21,27.04. Открытие сезона ЛГС ДСО "Спартак".',
        results: './docs/1985/1985_04_21_gdacha_omaps.pdf',
        url: './maps/forest/vsevolozhsk/golubaya_dacha_1982.webp',
        link: ['./original_maps/forest/vsevolozhsk/gdacha_1982_omaps.webp','./original_maps/starts/other/gdacha_1985_04_21_M_omaps.jpg','./original_maps/starts/other/gdacha_1985_04_21_M_relief_omaps.jpg','./original_maps/starts/other/gdacha_1985_04_21_W_omaps.jpg','./original_maps/starts/other/gdacha_1985_04_21_W_relief_omaps.jpg','./original_maps/starts/other/gdacha_1985_04_21_MW13_omaps.jpg','./original_maps/starts/other/gdacha_1985_04_27_MA_omaps.jpg','./original_maps/starts/other/gdacha_1985_04_27_MB_omaps.jpg','./original_maps/starts/other/gdacha_1985_04_27_WA_omaps.jpg','./original_maps/starts/other/gdacha_1985_04_27_WB_omaps.jpg'],
        bounds: [[59.9676851, 30.6091118], [59.9657949, 30.6598377], [59.9453828, 30.6076527]],
        author: ['RYLOV_V','FDRV_L','GRNV_A'],
        planner: 'RYLOV_V'
    },
    {
        name: 'Красная Горка (Орово)',
        year: 2016,
        url: './maps/forest/vsevolozhsk/krasnaja_gorka_2016.webp',
        bounds: [[59.9756097, 30.6666613], [59.9735053, 30.6949854], [59.9577819, 30.6627131]],
        author: ['MKHLV_A','USNKO'],
        owner: 'WN'
    },
    {
        name: 'Орово',
        year: 2019,
        url: './maps/forest/vsevolozhsk/orovo_2019.webp',
        o_gps: 21855,
        photo: 'tracks/hare_trail/pic_1.jpg',
        bounds: [[59.9680717, 30.6228018], [59.9661171, 30.6492376], [59.9529904, 30.6176949]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN'
    },
    {
        name: 'Орово',
        year: 2007,
        url: './maps/forest/vsevolozhsk/orovo_2007.webp',
        link: './original_maps/forest/vsevolozhsk/orovo_2007_omaps.gif',
        photo: 'tracks/hare_trail/pic_3.jpg',
        bounds: [[59.965666, 30.6211281], [59.9647424, 30.6429291], [59.9551177, 30.6197119]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'Орово',
        year: 2016,
        url: './maps/forest/vsevolozhsk/orovo_north_2016.webp',
        link: './original_maps/forest/vsevolozhsk/orovo_north_2016_omaps.jpg',
        bounds: [[59.9801403, 30.6372213], [59.9790668, 30.6568336], [59.9688664, 30.634346]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'Воейково',
        year: 2009,
        url: './maps/forest/vsevolozhsk/voejkovo_2009.webp',
        bounds: [[59.9704772, 30.6625843], [59.9653223, 30.7164001], [59.9513358, 30.656147]],
        author: 'GRV_S'
    },
    {
        name: 'Воейково',
        year: 2022,
        url: './maps/forest/vsevolozhsk/voejkovo_2022.webp',
        bounds: [[59.970692, 30.6832266], [59.9684583, 30.7094479], [59.9541723, 30.6783342]],
        author: 'MKHLV_A',
        owner: 'WN'
    },
    {
        name: 'Всеволожск, Ждановские оз',
        year: 2014,
        url: './maps/forest/vsevolozhsk/vsevolozhsk_zhdanovskie_oz_2014.webp',
        bounds: [[59.9959818, 30.684042], [59.9941147, 30.7074738], [59.9795392, 30.6785917]],
        o_site: '231028TT',
        author: ['MKHLV_A','SLBDNK']
    },
    {
        name: 'Всеволожск, Ждановские оз',
        year: 1983,
        url: './maps/forest/vsevolozhsk/vsevolozhsk_zhdanovskie_oz_1983.webp',
        link: ['./original_maps/forest/vsevolozhsk/vsevolozhsk_zhdanovskie_oz_1983_omaps.jpg','./original_maps/forest/vsevolozhsk/vsevolozhsk_zhdanovskie_1983_omaps.webp'],
        bounds: [[60.0045219, 30.6649876], [60.0004882, 30.7176018], [59.9671696, 30.6604385]],
        author: ['VSLVSKY','DRBSHV','PTRV_A'],
        areas: [80,10,10]
    },
    {
        name: 'Мельничный руч',
        year: 1989,
        url: './maps/forest/vsevolozhsk/melnichny_ruchej_1989.webp',
        link: './original_maps/forest/vsevolozhsk/melnichny_ruchej_1989_omaps.jpg',
        bounds: [[59.9969046, 30.6625414], [59.993385, 30.7267427], [59.9558697, 30.6562328]],
        author: 'VSLVSKY',
        qtty: 2
    },
    {
        name: 'Щеглово',
        year: 1986,
        url: './maps/forest/vsevolozhsk/scheglovo_1986.webp',
        link: './original_maps/forest/vsevolozhsk/scheglovo_1986_omaps.jpg',
        bounds: [[60.035488, 30.7564187], [60.0348986, 30.7705164], [60.0272025, 30.7551312]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'Щеглово',
        year: 1987,
        url: './maps/forest/vsevolozhsk/scheglovo_1987.webp',
        link: './original_maps/forest/vsevolozhsk/scheglovo_1987_omaps.jpg',
        bounds: [[60.0202874, 30.7262707], [60.019065, 30.7554531], [60.0054874, 30.7234383]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'им Морозова',
        year: 1992,
        url: './maps/forest/vsevolozhsk/morozova_1992.webp',
        link: ['./original_maps/forest/vsevolozhsk/morozova_1992_omaps.webp','./original_maps/forest/vsevolozhsk/morozova_1992_omaps.jpg'],
        bounds: [[59.9933206, 31.0407543], [59.9913031, 31.0777473], [59.9665682, 31.0345745]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'им Морозова',
        year: 2013,
        url: './maps/forest/vsevolozhsk/morozova_2013.webp',
        link: './original_maps/forest/vsevolozhsk/morozova_2013_omaps.jpg',
        bounds: [[59.9860228, 31.0403252], [59.9836184, 31.07234], [59.9665682, 31.0362053]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'им Морозова',
        year: 2021,
        url: './maps/forest/vsevolozhsk/morozova_2021.webp',
        link: './original_maps/forest/vsevolozhsk/morozova_2021_omaps.jpg',
        bounds: [[59.9843268, 31.039381], [59.980763, 31.0728979], [59.9689523, 31.0327291]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'пл Теплобетонная',
        url: './maps/forest/vsevolozhsk/teplobetonnaya.webp',
        link: './original_maps/forest/vsevolozhsk/teplobetonnaya_omaps.jpg',
        bounds: [[59.8813145, 30.9550095], [59.8799363, 30.971489], [59.8602901, 30.9464264]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'Невдубстрой',
        year: 2025,
        url: './maps/forest/vsevolozhsk/nevdubstroy_2025.webp',
        bounds: [[59.8626495, 30.9722829], [59.858049, 31.0131168], [59.8462485, 30.9653735]],
        author: ['BYMKV','KZMV'],
        owner: 'NKLSK'
    },
    {
        name: 'Приютино',
        year: 1991,
        url: './maps/forest/vsevolozhsk/prijutino_1991.webp',
        link: './original_maps/forest/vsevolozhsk/prijutino_1991_omaps.jpg',
        bounds: [[60.0227641, 30.5906582], [60.0210701, 30.610292], [60.0134459, 30.5882764]],
        author: ['RYLOV_V','PKHMV'],
        owner: 'RYLOV_V'
    },
    {
        name: 'Приютино',
        url: './maps/forest/vsevolozhsk/prijutino_2016.webp',
        link: './original_maps/forest/vsevolozhsk/prijutino_2016_omaps.jpg',
        bounds: [[60.0117514, 30.5809164], [60.0121589, 30.5972242], [60.0019687, 30.5827188]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'Проба',
        url: './maps/forest/vsevolozhsk/proba.webp',
        link: './original_maps/forest/vsevolozhsk/proba_omaps.jpg',
        bounds: [[60.1154067, 30.7508183], [60.1133967, 30.7885408], [60.0985314, 30.74687]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'Рахья',
        url: './maps/forest/vsevolozhsk/rakhja.webp',
        link: './original_maps/forest/vsevolozhsk/rakhja_omaps.jpg',
        bounds: [[60.0987881, 30.8463907], [60.0957287, 30.8911085], [60.0877686, 30.8431292]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'Рахья',
        year: 2007,
        url: './maps/forest/vsevolozhsk/rakhja_south_2007.webp',
        link: './original_maps/forest/vsevolozhsk/rakhja_south_2007_omaps.jpg',
        bounds: [[60.0915777, 30.8480644], [60.089181, 30.8798218], [60.0823324, 30.8454466]],
        author: ['RYLOV_V','PKHMV']
    },
    {
        name: 'Разметелево',
        year: 2004,
        url: './maps/forest/vsevolozhsk/razmetelevo.webp',
        link: ['./original_maps/forest/vsevolozhsk/razmetelevo_omaps.jpg','./original_maps/forest/vsevolozhsk/razmetelevo_2004_omaps.jpg'],
        bounds: [[59.9112342, 30.6864882], [59.9100938, 30.7047272], [59.8979781, 30.6829262]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'Ладожское оз, оз Озерко',
        year: 2007,
        url: './maps/forest/vsevolozhsk/ozertso_2007.webp',
        link: './original_maps/forest/vsevolozhsk/ozertso_2007_omaps.jpg',
        bounds: [[60.1473798, 31.0404968], [60.1466321, 31.056118], [60.136056, 31.0377073]],
        author: 'PKHMV',
    },
    {
        name: 'Коккорево, оз Шимполадово',
        url: './maps/forest/vsevolozhsk/kokkorevo_1990.webp',
        link: './original_maps/forest/vsevolozhsk/kokkorevo_1990_omaps.jpg',
        bounds: [[60.0575369, 31.0630274], [60.0561232, 31.0959864], [60.0426464, 31.061697]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'Всеволожск, Южный',
        year: 2016,
        author: 'RYLOV_V',
        url: './maps/forest/vsevolozhsk/vsevolozhsk_juzhny_2016.webp',
        link: './original_maps/forest/vsevolozhsk/vsevolozhsk_juzhny_2016_omaps.jpg',
        bounds: [[59.99669, 30.6598592], [59.9952307, 30.6768537], [59.9914212, 30.6581211]],
        owner: 'RYLOV_V'
    },
];