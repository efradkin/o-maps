let samaraMaps = [
    // --- Самара ---
    {
        name: 'Тольятти, Самарская Лука',
        year: 2006,
        major: true,
        url: './maps/samara/samarska_luka_2006_rogaine.webp',
        link: './original_maps/samara/samarska_luka_2006_rogaine_omaps.jpg',
        info: '24-25 июня. Чемпионат и первенство России по рогейну.',
        bounds: [[53.43387843556037, 49.26286697387695], [53.4224229569091, 49.43590164184571], [53.3495778642957, 49.24690246582032]],
        author: ['SKRPKO_S','PZDV_S','ZKN_V','ERKHV'],
        type: ['ROGAINE']
    },
    {
        name: 'Пискалинский взвоз',
        year: 2022,
        url: './maps/samara/piskalinsky_vzvoz_2022.webp',
        link: './original_maps/samara/piskalinsky_vzvoz_2022_omaps.gif',
        bounds: [[53.4963944047914, 49.77699279785157], [53.49116059673031, 49.81630325317383], [53.484547203400055, 49.77240085601807]],
        author: 'PPV_E',
        owner: 'ZNVJV_A'
    },
    {
        name: 'Горелый хутор',
        url: './maps/samara/gorely_hutor.webp',
        link: './original_maps/samara/gorely_hutor_omaps.gif',
        bounds: [[53.36614916861485, 50.24060726165772], [53.36238469297544, 50.268974304199226], [53.34755403330258, 50.233311653137214]],
        owner: 'ZNVJV_A'
    },
    {
        name: 'Лыжная база Динамо',
        year: 2021,
        url: './maps/samara/dinamo_2021.webp',
        link: './original_maps/samara/dinamo_2021_omaps.gif',
        bounds: [[53.38225327077193, 50.193099975585945], [53.378413417740845, 50.22296905517579], [53.36568823028405, 50.18769264221192]],
        author: 'MLNTV',
        owner: 'ZNVJV_A'
    },
    {
        name: 'Красная глинка',
        year: 2024,
        url: './maps/samara/red_glinka_2024.webp',
        link: './original_maps/samara/red_glinka_2024_omaps.gif',
        bounds: [[53.390059904145225, 50.16996860504151], [53.388293938607724, 50.18376588821412], [53.38057657753634, 50.16702890396118]],
        author: ['KYKV','TTYNN_M'],
        owner: 'ZNVJV_A'
    },
    {
        name: 'Золотой бор',
        url: './maps/samara/golden_bor.webp',
        link: './original_maps/samara/golden_bor_omaps.gif',
        bounds: [[53.45961642509639, 50.1256799697876], [53.45407142374024, 50.17730712890626], [53.43300915480917, 50.117955207824714]],
        owner: 'ZNVJV_A'
    },
    {
        name: 'Курумоч, Волжский',
        year: 2018,
        url: './maps/samara/kurumoch_2018.webp',
        link: './original_maps/samara/kurumoch_2018_omaps.gif',
        bounds: [[53.47438252734813, 50.06512641906738], [53.46707675889915, 50.132417678833015], [53.440908729342624, 50.05568504333497]],
        author: 'USNKO',
        owner: 'ZNVJV_A'
    },
    {
        name: 'Мастрюково',
        year: 2010,
        url: './maps/samara/pribrezhny_2010.webp',
        link: './original_maps/samara/pribrezhny_2010_omaps.gif',
        bounds: [[53.51816521718794, 49.851794242858894], [53.505201062547066, 49.98929500579835], [53.4730798425885, 49.839563369750984]],
        author: ['SKRPKO_S','CHRMNCH','TRNV_V','PRKPCHK','USNKO'],
        owner: 'ZNVJV_A'
    },
    {
        name: 'пл им Валерия Грушина',
        year: 2001,
        url: './maps/samara/grushina_2001.webp',
        link: './original_maps/samara/grushina_2001_omaps.gif',
        info: 'XXVIII фестиваль им.В.Грушина',
        bounds: [[53.47918423558339, 49.89080429077149], [53.47555746361617, 49.928398132324226], [53.46646363022647, 49.88668441772462]],
        author: ['MLNTV','DRBN_A','PSNV_A'],
        type: ['SPECIAL']
    },
    {
        name: 'Задельное',
        year: 2022,
        url: './maps/samara/zadelnoe_2022.webp',
        link: './original_maps/samara/zadelnoe_2022_omaps.gif',
        bounds: [[53.49810482639341, 49.762229919433594], [53.48610489079917, 49.84127998352051], [53.47014226942184, 49.75055694580078]],
        author: ['USNKO','BRGNTS'],
        owner: 'ZNVJV_A'
    },
    {
        name: 'Чайка',
        url: './maps/samara/chaika.webp',
        link: './original_maps/samara/chaika_omaps.gif',
        bounds: [[53.36200054410681, 50.22655248641968], [53.3596571610108, 50.24367570877076], [53.349667525471574, 50.222346782684326]],
        owner: 'ZNVJV_A'
    },
    {
        name: 'Гора Барсук',
        year: 2022,
        url: './maps/samara/barsuk_2022.webp',
        link: './original_maps/samara/barsuk_2022_omaps.gif',
        bounds: [[53.318620683963914, 50.20045995712281], [53.31662102092392, 50.215909481048584], [53.306787981523634, 50.196318626403816]],
        author: 'KZNN_O',
        owner: 'ZNVJV_A'
    },
    {
        name: 'Прибрежный',
        url: './maps/samara/pribrezhny.webp',
        link: './original_maps/samara/pribrezhny_omaps.gif',
        bounds: [[53.49560299234438, 49.84218120574952], [53.49283293245661, 49.87213611602783], [53.482670241779715, 49.838747978210456]],
        author: ['YGNV','ZNVJV_A'],
        owner: 'ZNVJV_A',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Солнечный-1',
        year: 2022,
        url: './maps/samara/solnechny_2022.webp',
        link: './original_maps/samara/solnechny_2022_omaps.gif',
        bounds: [[53.24495594479499, 50.18997788429261], [53.243806734449315, 50.19937634468079], [53.237418103185405, 50.18753170967103]],
        author: 'TTYNN_M',
        owner: 'ZNVJV_A',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Микрорайон 7А, школа №48',
        year: 2025,
        url: './maps/samara/school_48_2025.webp',
        link: './original_maps/samara/school_48_2025_omaps.gif',
        bounds: [[53.249982574781214, 50.22186398506165], [53.25018799282134, 50.2305543422699], [53.242535504932995, 50.22220730781556]],
        author: 'ZNVJV_A',
        owner: 'ZNVJV_A',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Мехзавод',
        year: 2025,
        url: './maps/samara/mehzavod_2025.webp',
        link: './original_maps/samara/mehzavod_2025_omaps.gif',
        bounds: [[53.30624305978567, 50.2676546573639], [53.30456978604454, 50.28141975402833], [53.29908150085477, 50.26516556739808]],
        gps: 'https://viewer.o-gps-center.ru/viewer/event/23675/',
        author: ['VLKV_E','KSKV_A'],
        owner: 'ZNVJV_A',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Мехзаводское клдб',
        year: 2025,
        url: './maps/samara/mehzavodskoe_winter_2025.webp',
        link: './original_maps/samara/mehzavodskoe_winter_2025_omaps.gif',
        bounds: [[53.31428796229534, 50.26176452636719], [53.31214707652413, 50.27893066406251], [53.3068136247282, 50.25921106338502]],
        gps: 'https://viewer.o-gps-center.ru/viewer/event/21403/',
        author: 'KSKV_A',
        owner: 'ZNVJV_A',
        type: ['WINTER']
    },
];
