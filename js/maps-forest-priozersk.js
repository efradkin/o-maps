// types can be ORIENT, ROGAINE, SPRINT, CITY, RELIEF, WINTER, VELO
let priozerskMaps = [
    // --- ПРИОЗЕРСК - КУЗНЕЧНОЕ ---
    {
        name: 'Приозерск, за кладбищем',
        url: './maps/forest/priozersk/priozersk_pogost.webp',
        bounds: [[61.064245104690514, 30.125412940979007], [61.063746772653495, 30.14455318450928], [61.05499353825801, 30.123674869537357]],
        author: ['BYMK','ZCHNV','PSHKV'],
        owner: 'VST_PRZRSK',
        types: ['ORIENT'],
    },
    {
        name: 'Приозерск, у кладбища',
        url: './maps/forest/priozersk/priozersk_pogost2.webp',
        bounds: [[61.062459378604196, 30.141677856445312], [61.061338057285546, 30.159916877746586], [61.05066275243654, 30.139145851135257]],
        author: ['BYMK','ZCHNV','PSHKV'],
        owner: 'VST_PRZRSK',
        types: ['ORIENT'],
    },
    {
        name: 'Приозерск, о Каменистый',
        url: './maps/forest/priozersk/priozersk_kamenisty.webp',
        bounds: [[61.03177485676714, 30.10837554931641], [61.0312552286918, 30.11685132980347], [61.02744089805183, 30.107238292694095]],
        author: ['MKHLV_A','PSHKV'],
        owner: 'VST_PRZRSK',
        types: ['ORIENT'],
    },
    {
        name: 'Приозерск, яхт-клуб',
        url: './maps/forest/priozersk/priozersk_yahtklub.webp',
        bounds: [[61.0458015972856, 30.17549514770508], [61.04297596795078, 30.20274639129639], [61.03771879623057, 30.172448158264164]],
        author: 'PSHKV',
        owner: 'VST_PRZRSK',
        types: ['ORIENT'],
    },
    {
        name: 'Сторожевое',
        url: './maps/forest/priozersk/storozhevoe_2020.webp',
        bounds: [[61.07120017096263, 30.12206554412842], [61.06941483698061, 30.165925025939945], [61.05124437918049, 30.11858940124512]],
        author: ['BYMKV','ZCHNV','PSHKV'],
        owner: 'VST_PRZRSK',
        types: ['ORIENT'],
    },
    {
        name: 'Приозерск, ДРСУ',
        year: 2015,
        url: './maps/forest/priozersk/priozersk_drsu.webp',
        bounds: [[61.01807461505161, 30.13506889343262], [61.01607833499045, 30.16184806823731], [61.01108708546035, 30.132708549499515]],
        author: ['MKHLV_A','USNKO'],
        owner: 'VST_PRZRSK',
        types: ['ORIENT'],
    },
    {
        name: 'Приозерск, старый аэродром',
        year: 2020,
        url: './maps/forest/priozersk/priozersk_aerodrom_2020.webp',
        bounds: [[61.063829828537415, 30.11888980865479], [61.06023746258067, 30.147428512573246], [61.045448407391945, 30.10760307312012]],
        author: 'RYLOV_V',
        owner: 'VST_PRZRSK',
        types: ['ORIENT'],
    },
    {
        name: 'Васильево',
        year: 2002,
        url: './maps/forest/priozersk/vasilievo_2002.webp',
        bounds: [[60.87174426906526, 29.8214864730835], [60.86978057310173, 29.845819473266605], [60.854317471753944, 29.817366600036625]],
        author: 'VRBY',
        owner: 'VST_PRZRSK',
        types: ['ORIENT'],
    },
    {
        name: 'Васильево',
        year: 2024,
        url: './maps/forest/priozersk/vasilievo_2024.webp',
        bounds: [[60.87020883624216, 29.823331832885742], [60.868673329579174, 29.83599185943604], [60.86174696355457, 29.818053245544437]],
        author: 'PSHKV',
        owner: 'VST_PRZRSK',
        types: ['ORIENT'],
    },
    {
        name: 'Балахановское оз',
        year: 2012,
        area: 10,
        url: './maps/forest/priozersk/balakhanovskoe.webp',
        bounds: [[60.82533535415073, 29.795951843261722], [60.81843097676924, 29.901695251464847], [60.75664380010026, 29.780330657958988]],
        author: 'SHRNN',
        owner: 'SHRNN',
        types: ['ORIENT'],
    },
    {
        name: 'Гранитное',
        year: 1988,
        url: './maps/forest/priozersk/granitnoe_1988.webp',
        link: './original_maps/forest/granitnoe_1988_full.jpg',
        bounds: [[61.064286632006386, 29.99297618865967], [61.06277084970437, 30.02250194549561], [61.05490007430921, 29.98954296112061]],
        author: 'KNSTNTNV_D',
        types: ['ORIENT'],
    },
    {
        name: 'Белая дача',
        year: 1988,
        url: './maps/forest/priozersk/belaya_dacha_1989.webp',
        link: './original_maps/forest/belaya_dacha_1989_full.jpg',
        bounds: [[61.02223312856577, 29.98276233673096], [61.021339094147365, 29.997353553771976], [61.01523611667841, 29.982225894927982]],
        types: ['ORIENT'],
    },
    {
        name: 'Кузнечное - Сопкино оз',
        year: 1984,
        area: 1.5,
        url: './maps/forest/priozersk/kuznechnoe_sopkino_1984.webp',
        link: './original_maps/forest/kuznechnoe_sopkino_1984_full.jpg',
        bounds: [[61.158185682196546, 29.812302589416507], [61.15619822139052, 29.851055145263675], [61.13834687040916, 29.807324409484867]],
        author: ['VLKV_K','SHRNN'],
        types: ['ORIENT'],
    },
    {
        name: 'Кузнечное - оз Волковское-Суури',
        year: 1987,
        url: './maps/forest/priozersk/kuznechnoe_suuri_1987.webp',
        link: './original_maps/forest/kuznechnoe_suuri_1987_full.jpg',
        bounds: [[61.14315240323964, 29.887962341308597], [61.13954832218195, 29.9611759185791], [61.12177045767672, 29.884700775146488]],
        author: ['BGCHNS','VLKV_K','OVTCHNNKV','SSNNA','USHNV'],
        types: ['ORIENT'],
    },
    {
        name: 'Кузнечное - оз Волковское-Суури',
        year: 1979,
        url: './maps/forest/priozersk/kuznechnoe_suuri_1979.webp',
        link: './original_maps/forest/kuznechnoe_suuri_1979_full.jpg',
        bounds: [[61.14161968340912, 29.899506568908695], [61.137311099433035, 29.95555400848389], [61.12483774980104, 29.901480674743656]],
        author: ['VLKV_K','BGCHNS','OVTCHNNKV','PTRV_A'],
        types: ['ORIENT'],
    },
    {
        name: 'Кузнечное - оз Волковское-Суури',
        year: 2019,
        url: './maps/forest/priozersk/kuznechnoe_suuri_2019.webp',
        bounds: [[61.14435367217603, 29.88916397094727], [61.13689678153038, 29.96950149536133], [61.12479630189204, 29.879465103149418]],
        owner: 'SHEIN',
        types: ['ORIENT'],
        author: 'CHGRVSKY_V',
    },
    {
        name: 'Кузнечное - запад',
        year: 2008,
        area: 25,
        url: './maps/forest/priozersk/kuznechnoe_west_2008.webp',
        link: './original_maps/forest/kuznechnoe_2008_full.pdf',
        bounds: [[61.15810287382887, 29.742393493652347], [61.14389802382198, 29.939460754394535], [61.083819196139416, 29.71887588500977]],
        types: ['ORIENT'],
        author: ['KUZNTSV_S','NSNV','KVZN','TKMKV_K','SHRNN'],
        owner: 'TOKM'
    },
    {
        name: 'Кузнечное - юго-восток',
        year: 2003,
        url: './maps/forest/priozersk/kuznechnoe_se.webp',
        link: './original_maps/forest/kuznechnoe_se_2003.pdf',
        bounds: [[61.101535452429026, 29.940662384033207], [61.09734585191786, 30.00572204589844], [61.07340056041223, 29.932250976562504]],
        author: ['KUZNTSV_S','NSNV','KVZN','TKMKV_K'],
        owner: 'TOKM',
        types: ['ORIENT'],
    },
    {
        name: 'о Койонсаари',
        year: 2024,
        url: './maps/forest/priozersk/koyonsaari_2024.webp',
        bounds: [[61.28897850949189, 30.09035110473633], [61.284339522253504, 30.133953094482425], [61.27402820664181, 30.08365631103516]],
        author: 'VRBY',
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Воробьёво оз',
        year: 2024,
        url: './maps/forest/priozersk/vorobjevo_2024.webp',
        bounds: [[60.93677037663813, 30.30115127563477], [60.932975963650215, 30.34758567810059], [60.8995990235172, 30.288448333740238]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Заветное',
        year: 2018,
        url: './maps/forest/priozersk/zavetnoe_2018.webp',
        bounds: [[61.011523851127386, 29.64340925216675], [61.01079590501046, 29.6566915512085], [61.00338030286407, 29.639654159545902]],
        author: 'ELZRV',
        owner: 'ELZRV',
        types: ['ORIENT'],
    },
    {
        name: 'т/б "Лена-Ладога"',
        year: 2021,
        url: './maps/forest/priozersk/lena-ladoga_2021.webp',
        bounds: [[61.41811982926797, 30.185172557830814], [61.416549144625634, 30.200386047363285], [61.41306871866662, 30.183434486389164]],
        author: 'DRBSHV',
        owner: 'LENA',
        types: ['ORIENT'],
    },
];