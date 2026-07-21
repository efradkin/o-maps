// types can be ROGAINE, SPRINT, CITY, RELIEF
let vyborgMaps = [
    // --- ВЫБОРГ - КАМЕННОГОРСК ---
    {
        name: 'р Гусиная',
        date: '2014-06-23',
        o_gps: 214,
        start: 'KKP',
        info: 'Спринт.',
        url: './maps/forest/vyborg/kkp_gusinaja_2014_06_23.webp',
        bounds: [[60.8056016, 28.6011887], [60.803257, 28.6230755], [60.7968295, 28.5983133]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY'],
        owner: 'NW'
    },
    {
        name: 'р Гусиная',
        date: '2014-06-25',
        o_gps: {
            'М': 217,
            'Ж': 218,
        },
        start: 'KKP',
        info: 'Лонг.',
        url: './maps/forest/vyborg/kkp_gusinaja_2014_06_25.webp',
        bounds: [[60.8058109, 28.588872], [60.8027546, 28.6196423], [60.7866726, 28.5816193]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY'],
        owner: 'NW'
    },
    {
        name: 'оз Горица',
        date: '2014-06-26',
        o_gps: {
            'М': 219,
            'Ж': 220,
        },
        start: 'KKP',
        info: 'Классика.',
        url: './maps/forest/vyborg/kkp_goritsa_2014_06_26.webp',
        bounds: [[60.8046178, 28.6101151], [60.8016869, 28.6482239], [60.7915525, 28.6054802]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY'],
        owner: 'NW'
    },
    {
        name: 'Обходное оз',
        date: '2015-06-23',
        o_gps: {
            'М': 558,
            'Ж': 559,
        },
        start: 'KKP',
        info: 'Лонг.',
        url: './maps/forest/vyborg/kkp_obkhodnoe_2015_06_23.webp',
        bounds: [[61.013354, 29.1869831], [61.0082376, 29.2372799], [60.9944647, 29.1775417]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY'],
        owner: 'NW'
    },
    {
        name: 'оз Горица',
        date: '2016-06-18',
        start: 'KKP',
        info: 'УТС.',
        url: './maps/forest/vyborg/kkp_goritsa_2016_06_18.webp',
        bounds: [[60.7964316, 28.6249208], [60.7929975, 28.6612701], [60.780116, 28.6186552]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY'],
        owner: 'NW'
    },
    {
        name: 'р Гусиная',
        date: '2016-06-19',
        start: 'KKP',
        info: 'УТС.',
        url: './maps/forest/vyborg/kkp_solnechnoe_2016_06_19.webp',
        bounds: [[60.8070878, 28.6014891], [60.8057691, 28.615694], [60.7975205, 28.5985279]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY'],
        owner: 'NW'
    },
    {
        name: 'оз Тростинка',
        date: '2016-06-23',
        o_gps: {
            'М': 1217,
            'Ж': 1218,
        },
        start: 'KKP',
        info: 'Лонг.',
        url: './maps/forest/vyborg/kkp_trostinka_2016_06_23.webp',
        bounds: [[60.8233688, 28.6156511], [60.8194144, 28.660326], [60.8056644, 28.6087418]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY'],
        owner: 'NW'
    },
    {
        name: 'Пруды',
        date: '2017-06-19',
        o_gps: {
            'М': 2456,
            'Ж': 2457,
            'M20': 2476,
            'Ж20': 2477,
            'ALL': 2464,
        },
        start: 'KKP',
        info: 'Спринт.',
        url: './maps/forest/vyborg/kkp_prudy_2017_06_19.webp',
        bounds: [[61.0463833, 29.0779138], [61.0448978, 29.0958738], [61.0360771, 29.0738797]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','LUK_V','KUZNTSV_A'],
        owner: 'NW'
    },
    {
        name: 'оз Тростинка',
        date: '2018-06-12',
        start: 'KKP',
        info: 'УТС.',
        url: './maps/forest/vyborg/kkp_trostinka_2018_06_12.webp',
        bounds: [[60.8392442, 28.6129475], [60.8375922, 28.6318731], [60.8249169, 28.6077976]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','KUZNTSV_A'],
        owner: 'NW'
    },
    {
        name: 'Солнечное',
        date: '2018-06-19',
        o_gps: {
            'М': 4032,
            'Ж': 4033,
            'ALL': 4034,
        },
        start: 'KKP',
        info: 'Лонг.',
        url: './maps/forest/vyborg/kkp_solnechnoe_2018_06_19.webp',
        bounds: [[60.8280549, 28.5744953], [60.8243312, 28.6138058], [60.8088461, 28.567543]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','KUZNTSV_A'],
        owner: 'NW'
    },
    {
        name: 'Солнечное',
        date: '2018-06-20',
        o_gps: {
            'М': 4036,
            'Ж': 4037,
            'ALL': 4038,
        },
        start: 'KKP',
        info: 'Лонг.',
        url: './maps/forest/vyborg/kkp_solnechnoe_2018_06_20.webp',
        bounds: [[60.8264441, 28.5786152], [60.8234943, 28.6137629], [60.8136598, 28.5732079]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','KUZNTSV_A'],
        owner: 'NW'
    },
    {
        name: 'оз Тростинка',
        date: '2018-06-21',
        o_gps: {
            'Ж': 4039,
            'М': 4040,
            'ALL': 4042,
        },
        start: 'KKP',
        info: 'Лонг.',
        url: './maps/forest/vyborg/kkp_trostinka_2018_06_21.webp',
        bounds: [[60.8398715, 28.6201572], [60.8363793, 28.6587811], [60.8129901, 28.609643]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','KUZNTSV_A'],
        owner: 'NW'
    },
    {
        name: 'Пруды',
        date: '2019-06-15',
        start: 'KKP',
        info: 'УТС.',
        url: './maps/forest/vyborg/kkp_prudy_2019_06_15.webp',
        bounds: [[61.0405449, 29.0842867], [61.0359731, 29.1344976], [61.0232727, 29.0779781]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','KUZNTSV_A'],
        owner: 'NW'
    },
    {
        name: 'Пруды',
        date: '2019-06-16',
        start: 'KKP',
        info: 'УТС.',
        url: './maps/forest/vyborg/kkp_prudy_2019_06_16.webp',
        bounds: [[61.0467157, 29.0854883], [61.0452614, 29.1040277], [61.0347054, 29.0808964]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','KUZNTSV_A'],
        owner: 'NW'
    },
    {
        name: 'Пруды',
        date: '2019-06-18',
        o_gps: {
            'М': 5957,
            'Ж': 5958,
            'ALL': 5959,
        },
        start: 'KKP',
        info: 'Классика.',
        url: './maps/forest/vyborg/kkp_prudy_2019_06_18.webp',
        bounds: [[61.0473597, 29.0597391], [61.0453445, 29.0800381], [61.0287193, 29.0530872]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','KUZNTSV_A','LUK_V'],
        owner: 'NW'
    },
    {
        name: 'Пруды',
        date: '2019-06-19',
        o_gps: {
            'М': 5964,
            'Ж': 5965,
            'Ж18': 5981,
            'M18': 5982,
            'ALL': 5966,
        },
        start: 'KKP',
        info: 'Лонг.',
        url: './maps/forest/vyborg/kkp_prudy_2019_06_19.webp',
        bounds: [[61.0342066, 29.0519714], [61.0307356, 29.0904665], [61.0152881, 29.0446758]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','KUZNTSV_A','LUK_V'],
        owner: 'NW'
    },
    {
        name: 'Пруды',
        date: '2019-06-20',
        o_gps: {
            'М': 5967,
            'Ж': 5968,
            'Ж18': 5986,
            'М18': 5988,
            'ALL': 5969,
        },
        start: 'KKP',
        info: 'Лонг.',
        url: './maps/forest/vyborg/kkp_prudy_2019_06_20.webp',
        bounds: [[61.0339988, 29.0592241], [61.0292182, 29.1126108], [61.0093608, 29.0498257]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','KUZNTSV_A','LUK_V'],
        owner: 'NW'
    },
    {
        name: 'Пальцево',
        date: '2022-06-08',
        o_gps: {
            '1': 13320,
            '2': 13310,
        },
        start: 'KKP',
        info: 'УТС.',
        url: './maps/forest/vyborg/kkp_paltsevo_2022_06_08.webp',
        bounds: [[60.793877, 28.8319445], [60.791385, 28.8539171], [60.7815406, 28.827095]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','TKMKVA_P','LUK_V'],
        owner: 'NW'
    },
    {
        name: 'Пальцево',
        date: '2022-06-10',
        o_gps: {
            'А1': 13329,
            'А2': 13337,
            'В': 13328,
        },
        start: 'KKP',
        info: 'УТС.',
        url: './maps/forest/vyborg/kkp_paltsevo_2022_06_10.webp',
        bounds: [[60.8075274, 28.7950373], [60.8040735, 28.8320732], [60.7958244, 28.7896729]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','TKMKVA_P','LUK_V'],
        owner: 'NW'
    },
    {
        name: 'Пальцево',
        date: '2022-06-12',
        o_gps: 13332,
        start: 'KKP',
        info: 'УТС.',
        url: './maps/forest/vyborg/kkp_paltsevo_2022_06_12.webp',
        bounds: [[60.8052876, 28.7937498], [60.8015194, 28.8228893], [60.7898771, 28.7858963]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','TKMKVA_P','LUK_V'],
        owner: 'NW'
    },
    {
        name: 'Пальцево',
        date: '2022-06-11',
        o_gps: {
            'М': 13330,
            'Ж': 13331,
        },
        start: 'KKP',
        info: 'ПИРАМИДА.',
        url: './maps/forest/vyborg/kkp_paltsevo_2022_06_11_piramida.webp',
        bounds: [[60.8062505, 28.7792444], [60.8028174, 28.8158941], [60.7948821, 28.774395]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','TKMKVA_P','LUK_V'],
        owner: 'NW'
    },
    {
        name: 'Пальцево',
        date: '2022-06-14',
        o_gps: {
            'М': 13335,
            'Ж': 13336,
            'М45/21А': 13450,
            'ALL': 13352,
        },
        start: 'KKP',
        info: 'Лонг.',
        url: './maps/forest/vyborg/kkp_paltsevo_2022_06_14.webp',
        bounds: [[60.8270089, 28.752079], [60.8211929, 28.8076973], [60.7974158, 28.7400627]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','TKMKVA_P','LUK_V'],
        owner: 'NW'
    },
    {
        name: 'Беличий залив',
        date: '2022-06-16',
        start: 'KKP',
        info: 'Спринт.',
        o_gps: {
            'М':13340,
            'Ж':13341,
            'Все КП':13361,
            'М45/21А':13376,
        },
        url: './maps/forest/vyborg/kkp_paltsevo_2022_06_16.webp',
        bounds: [[60.8030896, 28.7568212], [60.8005773, 28.7803388], [60.7946099, 28.7529588]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','TKMKVA_P','LUK_V'],
        owner: 'NW'
    },
    {
        name: 'Пруды',
        date: '2023-06-19',
        start: 'KKP',
        info: 'Классика.',
        o_site: '230617-22_KKP',
        o_gps: {
            'М': 16497,
            'Ж': 16501,
            'М18': 16503,
            'М45/21А': 16598,
            'Ж16': 16581,
            'М70': 16533,
            'М21А/Open-B.': 16556,
            'Ж12': 16582,
            'Ж40': 16585,
            'М45': 16591,
            'М21АК': 16518,
        },
        url: './maps/forest/vyborg/kkp_prudy_2023_06_19.webp',
        bounds: [[61.0627293, 29.0896082], [61.058763, 29.1350126], [61.0457393, 29.0822697]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY'],
        owner: 'NW'
    },
    {
        name: 'Пруды',
        date: '2023-06-17',
        o_gps: 16560,
        start: 'KKP',
        info: 'УТС.',
        url: './maps/forest/vyborg/kkp_prudy_2023_06_17.webp',
        bounds: [[61.0474428, 29.059782], [61.0448251, 29.0860462], [61.0319411, 29.0539455]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','LUK_V'],
        owner: 'NW'
    },
    {
        name: 'Пруды',
        date: '2023-06-18',
        o_gps: 16534,
        start: 'KKP',
        info: 'УТС.',
        url: './maps/forest/vyborg/kkp_prudy_2023_06_18.webp',
        bounds: [[61.0459678, 29.0882349], [61.0434435, 29.115293], [61.0340092, 29.083128]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','LUK_V'],
        owner: 'NW'
    },
    {
        name: 'Пруды',
        date: '2023-06-20',
        start: 'KKP',
        info: 'Лонг.',
        o_site: '230617-22_KKP',
        o_gps: {
            'М': 16498,
            'Ж': 16513,
            'М18': 16514,
            'М45/21А': 16599,
            'М21А/Open-B.': 16557,
            'Ж16': 16586,
            'Ж12': 16587,
            'М45': 16588,
            'Ж40': 16589,
            'M21АК': 16540,
        },
        url: './maps/forest/vyborg/kkp_prudy_2023_06_20.webp',
        bounds: [[61.0681692, 29.1136837], [61.0638091, 29.1585732], [61.0379682, 29.1015816]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY'],
        owner: 'NW'
    },
    {
        name: 'Обходное оз',
        year: 2024,
        start: 'KKP',
        info: 'УТС.',
        url: './maps/forest/vyborg/kkp_obkhodnoe_2024_06_14.webp',
        bounds: [[61.0194054, 29.1891718], [61.0161823, 29.2243195], [61.0064695, 29.1841936]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','LUK_V'],
        owner: 'NW'
    },
    {
        name: 'Обходное оз',
        date: '2024-06-15',
        o_gps: {
            'А': 19837,
            'Аркада': 19839,
            'ALL': 19836,
        },
        start: 'KKP',
        info: 'УТС.',
        url: './maps/forest/vyborg/kkp_obkhodnoe_2024_06_15.webp',
        bounds: [[61.0149138, 29.1875839], [61.011815, 29.2221308], [61.0026834, 29.1827345]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','LUK_V'],
        owner: 'NW'
    },
    {
        name: 'Новинское оз',
        date: '2024-06-15',
        o_gps: {
            'Каменюкала': 19768,
            'Ж': 19766,
            'М': 19767,
            'Open 5': 19835,
        },
        start: 'KKP',
        info: 'ПИРАМИДА.',
        url: './maps/forest/vyborg/kkp_novinskoe_2024_06_15.webp',
        bounds: [[61.0069479, 29.1651392], [61.0036611, 29.1985703], [60.9933826, 29.1596031]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY'],
        owner: 'NW'
    },
    {
        name: 'Обходное оз',
        date: '2024-06-16',
        o_gps: {
            'А1': 19834,
            'А2': 19840,
            'ALL': 19841,
        },
        start: 'KKP',
        info: 'УТС.',
        url: './maps/forest/vyborg/kkp_obkhodnoe_2024_06_16.webp',
        bounds: [[61.0109623, 29.163208], [61.0085496, 29.1880989], [60.9996458, 29.159174]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','LUK_V'],
        owner: 'NW'
    },
    {
        name: 'Новинское оз',
        date: '2024-06-17',
        start: 'KKP',
        info: 'Классика.',
        url: './maps/forest/vyborg/kkp_novinskoe_2024_06_17.webp',
        o_gps: {
            'М': 19774,
            'Ж': 19772,
            'М50/55/Ж45': 19854,
            'М21А': 19807,
            'М20/М35': 19844,
        },
        bounds: [[60.9992089, 29.146471], [60.9939653, 29.2026901], [60.981019, 29.1394329]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','LUK_V'],
        owner: 'NW'
    },
    {
        name: 'Ягодное оз',
        date: '2024-06-18',
        start: 'KKP',
        info: 'Лонг.',
        url: './maps/forest/vyborg/kkp_novinskoe_2024_06_18.webp',
        o_gps: {
            'М': 19783,
            'Ж': 19781,
            'М50/55/Ж45': 19861,
            'Ж20/М18': 19811,
            'М21А': 19830,
        },
        bounds: [[61.0009358, 29.1862535], [60.9944647, 29.2559481], [60.9786665, 29.176898]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','KUZNTSV_A','LUK_V'],
        owner: 'NW'
    },
    {
        name: 'Обходное оз',
        date: '2024-06-20',
        start: 'KKP',
        info: 'Спринт.',
        url: './maps/forest/vyborg/kkp_novinskoe_2024_06_20.webp',
        o_gps: {
            'М': 19793,
            'Ж': 19792,
            'М50/55/Ж45': 19838,
            'М21А': 19832,
        },
        bounds: [[61.0011855, 29.1869831], [60.9994794, 29.2041922], [60.9895741, 29.1830778]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','TKMKVA_P','LUK_V'],
        owner: 'NW'
    },
    {
        name: 'Пруды',
        date: '2026-06-15',
        start: 'KKP',
        info: 'Детская эстафета Каменюкола.',
        o_site: '260616-21_KKP',
        calendar: 'SPB_20260615_1',
        url: './maps/forest/vyborg/kkp_prudy_2026_06_15_kamenukola.webp',
        bounds: [[61.0765141, 29.1208506], [61.0723834, 29.156642], [61.0558762, 29.1121817]],
        author: ['VRBY','KVZN','TKMKV_K','BRGNTS'],
        owner: 'NW'
    },
    {
        name: 'Пруды',
        date: '2026-06-16',
        start: 'KKP',
        info: 'Классика.',
        o_site: '260616-21_KKP',
        calendar: 'SPB_20260616_2',
        url: './maps/forest/vyborg/kkp_prudy_2026_06_16.webp',
        bounds: [[61.0640167, 29.1263866], [61.0588669, 29.1726494], [61.0488555, 29.1199923]],
        author: ['VRBY','KVZN','TKMKV_K','NSNV','LUK_V'],
        owner: 'NW'
    },
    {
        name: 'Пруды',
        date: '2026-06-17',
        start: 'KKP',
        info: 'Классика.',
        o_site: '260616-21_KKP',
        calendar: 'SPB_20260617_1',
        url: './maps/forest/vyborg/kkp_prudy_2026_06_17.webp',
        bounds: [[61.0873881, 29.1177177], [61.0842342, 29.1475868], [61.0628539, 29.1071177]],
        author: ['VRBY','KVZN','BRGNTS','PSTVTV'],
        owner: 'NW'
    },
    {
        name: 'Пруды',
        date: '2026-06-18',
        start: 'KKP',
        info: 'Лонг.',
        o_site: '260616-21_KKP',
        calendar: 'SPB_20260618_1',
        url: './maps/forest/vyborg/kkp_prudy_2026_06_18.webp',
        bounds: [[61.0674218, 29.123168], [61.0637675, 29.1585302], [61.0355783, 29.108963]],
        author: ['VRBY','KVZN','TKMKV_K','BRGNTS'],
        owner: 'NW'
    },
    {
        name: 'Выборг, Монрепо',
        year: 2007,
        date: '2008-10-18',
        url: './maps/forest/vyborg/monrepo_2007.webp',
        //link: './original_maps/forest/vyborg/monrepo_2007_omaps.jpg',
        info: 'Золотая Осень.',
        o_site: '08101819',
        bounds: [[60.7416608, 28.7121248], [60.7403289, 28.7301707], [60.7321788, 28.7089705]],
        author: 'KRTSHV',
        owner: 'VYBORG'
    },
    {
        name: 'Выборг, Монрепо',
        year: 2012,
        url: './maps/forest/vyborg/monrepo.webp',
        bounds: [[60.746621, 28.6969328], [60.7426361, 28.7467146], [60.7288322, 28.6908817]],
        author: 'MKHLV_A',
        owner: 'VYBORG'
    },
    {
        name: 'Вещево, Макаровское оз',
        year: 1979,
        url: './maps/forest/vyborg/veschevo_1979.webp',
        link: './original_maps/forest/vyborg/veschevo_1979_omaps.jpg',
        bounds: [[60.7614654, 29.1929054], [60.7609623, 29.2393398], [60.7361754, 29.1881847]],
        author: 'SHRNN'
    },
    {
        name: 'Вещево, Макаровское оз',
        year: 1981,
        url: './maps/forest/vyborg/veschevo_1981.webp',
        link: './original_maps/forest/vyborg/veschevo_1981_omaps.jpg',
        gps: {
            'М': './original_maps/forest/vyborg/vyborg_veschevo_1981_paths.jpg',
            'Ж': './original_maps/forest/vyborg/vyborg_veschevo_1981_paths_W.jpg',
        },
        bounds: [[60.7596207, 29.1897297], [60.7553859, 29.2526436], [60.7309304, 29.1826916]],
        author: ['SHRNN','KUZNTSV_S'],
        start: ['USSR_1981','USSR_CHAMP']
    },
    {
        name: 'Вещево, Беленькое оз',
        year: 1981,
        url: './maps/forest/vyborg/veschevo_west_1981.webp',
        link: './original_maps/forest/vyborg/veschevo_west_1981_omaps.jpg',
        bounds: [[60.7232501, 29.129734], [60.7211514, 29.195652], [60.6936871, 29.1258717]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'Выборг, гора Папула',
        year: 2023,
        url: './maps/forest/vyborg/papula_2023.webp',
        bounds: [[60.7248136, 28.7674856], [60.7246772, 28.7811112], [60.7167331, 28.7675929]],
        owner: 'VYBORG'
    },
    {
        name: 'Выборг, Анненские укреления',
        year: 2020,
        start: ['RUSSIA_2020','RUSSIA_CHAMP'],
        info: '25.09, смешанная эстафета.',
        o_gps: {
            '1, 2 этап': 8199,
            '3, 4 этап': 8207
        },
        url: './maps/forest/vyborg/vyborg_annenskie_2017.webp',
        bounds: [[60.7218755, 28.7187982], [60.7206372, 28.7339687], [60.7175727, 28.7169313]],
        author: ['TKMKV_K','KVZN'],
        owner: 'NW'
    },
    {
        name: 'Выборг, Батарейная гора',
        year: 2020,
        excluded: true,
        start: ['RUSSIA_2020','RUSSIA_CHAMP'],
        info: '27.09, спринт-общий старт.',
        o_gps: {
            'М': 8202,
            'Ж': 8203
        },
        url: './maps/forest/vyborg/batarejnaya_gora_2020.webp',
        link: ['https://viewer.o-gps-center.ru/newmaps/map_6255_b092c095d299e2c07778fccae312152d.png','https://viewer.o-gps-center.ru/newmaps/course_8203_3f630736090219a2871cf4d5a230f4e3.png'],
        bounds: [[60.708829, 28.7526369], [60.7069182, 28.7687945], [60.7004294, 28.7487531]],
        author: ['RYLOV_V','DBRTSV_V'],
        owner: 'VYBORG',
        zindex: 2
    },
    {
        name: 'Выборг, Южный форт',
        url: './maps/forest/vyborg/yuzhny_fort.webp',
        bounds: [[60.6884561, 28.7701035], [60.6862711, 28.7920761], [60.6712657, 28.762722]],
        owner: 'VYBORG'
    },
    {
        name: 'Калинино',
        year: 2015,
        url: './maps/forest/vyborg/vyborg_kalinina_2015.webp',
        bounds: [[60.7743124, 28.6384392], [60.7723637, 28.6582232], [60.760585, 28.6335039]],
        author: ['TKMKV_K','KVZN'],
        owner: 'NW'
    },
    {
        name: 'Возрождение',
        year: 2024,
        url: './maps/forest/vyborg/vozrozhdenie_2024.webp',
        bounds: [[60.850994, 28.8604832], [60.8470849, 28.9021969], [60.8325729, 28.852973]],
        author: ['TKMKV_K','KVZN'],
        owner: 'NW'
    },
    {
        name: 'г Величка',
        year: 2024,
        url: './maps/forest/vyborg/velichka_2024.webp',
        bounds: [[60.780933, 28.5221386], [60.7778534, 28.5584021], [60.7673551, 28.5169029]],
        author: ['TKMKV_K','KVZN'],
        owner: 'NW'
    },
    {
        name: 'Михайловка',
        year: 2017,
        url: './maps/forest/vyborg/mikhailovka_2017.webp',
        bounds: [[60.914769, 28.875246], [60.9122447, 28.8974333], [60.9028339, 28.8711262]],
        author: ['TKMKV_K','KVZN'],
        owner: 'NW'
    },
    {
        name: 'Бобовый мыс',
        year: 2014,
        url: './maps/forest/vyborg/bobovy_mys_2014.webp',
        bounds: [[60.6970899, 28.7322736], [60.6960712, 28.7423801], [60.6883196, 28.7288833]],
        author: 'TKMKVA_P',
        owner: 'NW'
    },
    {
        name: 'Возрождение, оз Петровское',
        year: 1992,
        startYear: 1993,
        logo: 'akka.jpg',
        start: 'WN',
        page: 'spb',
        url: './maps/forest/vyborg/vozrozhdenie_1992.webp',
        link: ['./original_maps/forest/vyborg/vozrozhdenie_1992_omaps.jpg','./original_maps/forest/vyborg/vozrozhdenie_1992_course_omaps.webp'],
        bounds: [[60.8597095, 28.8390255], [60.8549445, 28.909235], [60.8290171, 28.8335323]],
        author: 'KRCHKN_V'
    },
    {
        name: 'Таммисуо',
        year: 1974,
        url: './maps/forest/vyborg/tammisuo_1974.webp',
        link: './original_maps/forest/vyborg/tammisuo_1974_omaps.webp',
        info: 'Золотая осень.',
        bounds: [[60.7563503, 28.7579155], [60.7563922, 28.8095856], [60.7238378, 28.7572289]],
    },
    {
        name: 'Кировские дачи',
        year: 1,
        url: './maps/forest/vyborg/kirovskie_dachi_retro.webp',
        link: ['./original_maps/forest/vyborg/kirovskie_dachi_retro_color_omaps.webp','./original_maps/forest/vyborg/kirovskie_dachi_retro_omaps.webp'],
        bounds: [[60.7729923, 28.7076187], [60.7848084, 28.7614346], [60.7360076, 28.7456417]],
    },
    {
        name: 'Сайменские дачи',
        year: 1,
        url: './maps/forest/vyborg/vyborg_saymenskie_dachi_old.webp',
        link: './original_maps/forest/vyborg/vyborg_saymenskie_dachi_old_omaps.jpg',
        bounds: [[60.7885157, 28.7499332], [60.7861699, 28.7846088], [60.7647143, 28.7440538]],
    },
    {
        name: 'Сайменские дачи',
        year: 1981,
        start: ['USSR_1981','USSR_CHAMP'],
        url: './maps/forest/vyborg/vyborg_saymenskie_dachi_1981.webp',
        link: ['./original_maps/forest/vyborg/vyborg_saymenskie_dachi_1981_omaps.jpg','./original_maps/forest/vyborg/vyborg_saymenskie_dachi_1981_clean_omaps.webp','./original_maps/forest/vyborg/vyborg_saymenskie_dachi_1981_M_omaps.jpg'],
        gps: {
            'М1': './original_maps/forest/vyborg/vyborg_saymenskie_dachi_1981_paths_1.jpg',
            'М2': './original_maps/forest/vyborg/vyborg_saymenskie_dachi_1981_paths_2.jpg',
            'Ж': './original_maps/forest/vyborg/vyborg_saymenskie_dachi_1981_paths_W.jpg',
        },
        bounds: [[60.7931859, 28.7195492], [60.7903797, 28.7774849], [60.7649868, 28.7214375]],
        author: ['KHDNKCH','GLVNV_V','MTVV','BSHNSKY']
    },
    {
        name: 'Сайменские дачи',
        year: 2013,
        start: 'MMS',
        page: 'spb',
        url: './maps/forest/vyborg/vyborg_saymenskie_dachi_2013.webp',
        link: './original_maps/forest/vyborg/vyborg_saymenskie_dachi_2013_omaps.jpg',
        bounds: [[60.8025662, 28.7239265], [60.7972901, 28.7942219], [60.7625554, 28.7138844]],
        author: ['KRYLS','SMLGS','TMLNS'],
        planner: 'TLNV_A'
    },
    {
        name: 'Выборг, Лазаревка',
        year: 1,
        url: './maps/forest/vyborg/lazarevka_retro.webp',
        link: ['./original_maps/forest/vyborg/lazarevka_retro_color_omaps.webp','./original_maps/forest/vyborg/lazarevka_retro_omaps.webp','./original_maps/forest/vyborg/lazarevka_retro_cources_omaps.webp'],
        bounds: [[60.7040625, 28.8178682], [60.7034325, 28.8416433], [60.6877838, 28.8152075]],
    },
    {
        name: 'Кировские дачи, стрельбище',
        year: 1978,
        url: './maps/forest/vyborg/kirovskie_dachi_1980.webp',
        link: './original_maps/forest/vyborg/kirovskie_dachi_1980_omaps.jpg',
        bounds: [[60.7454675, 28.76019], [60.7439784, 28.7834072], [60.7309933, 28.7560272]]
    },
    {
        name: 'Кировские дачи, стрельбище',
        year: 1993,
        url: './maps/forest/vyborg/kirovskie_dachi_1985.webp',
        link: './original_maps/forest/vyborg/kirovskie_dachi_1985_omaps.jpg',
        bounds: [[60.7445867, 28.7580872], [60.744314, 28.781991], [60.7251809, 28.7585163]]
    },
    {
        name: 'Кировские дачи',
        year: 1992,
        url: './maps/forest/vyborg/kirovskie_dachi_1992.webp',
        link: './original_maps/forest/vyborg/kirovskie_dachi_1992_omaps.jpg',
        bounds: [[60.762744, 28.7446976], [60.7599142, 28.7844801], [60.7432234, 28.7401485]],
        author: ['MLVA_M','ANDRV_E']
    },
    {
        name: 'Кировские дачи - Сайменский канал',
        year: 1994,
        url: './maps/forest/vyborg/kirovskie_dachi_1994.webp',
        link: './original_maps/forest/vyborg/kirovskie_dachi_1994_omaps.jpg',
        bounds: [[60.7804512, 28.7047005], [60.7769315, 28.7543964], [60.7553859, 28.696804]],
        author: 'SHLKHN_Y'
    },
    {
        name: 'Гвардейское',
        url: './maps/forest/vyborg/gvardeyskoe.webp',
        bounds: [[60.8131366, 28.9081192], [60.8099763, 28.9474726], [60.7916153, 28.9002657]],
        author: ['KVZN','NSNV'],
        owner: 'VYBORG'
    },
    {
        name: 'Красный Холм - Пальцево',
        year: 2015,
        area: 4.5,
        url: './maps/forest/vyborg/paltsevo_2015.webp',
        o_gps: {
            'М':4584,
            'Ж':4585
        },
        bounds: [[60.7844523, 28.8162804], [60.7790685, 28.8801813], [60.7603334, 28.8073111]],
        author: 'MLNKV_L',
        owner: 'VYBORG'
    },
    {
        name: 'Таммисуо',
        year: 1991,
        logo: 'akka.jpg',
        url: './maps/forest/vyborg/tammisuo.webp',
        link: './original_maps/forest/vyborg/tammisuo_1990_omaps.jpg',
        bounds: [[60.7291259, 28.7895441], [60.7244044, 28.8370514], [60.7140986, 28.7838364]],
        author: 'SHVR',
        owner: 'VYBORG'
    },
    {
        name: 'Зимино',
        url: './maps/forest/vyborg/zimino.webp',
        bounds: [[60.6427384, 28.6516571], [60.6420336, 28.6596179], [60.6386249, 28.6500907]],
        owner: 'VYBORG'
    },
    {
        name: 'Кировские дачи',
        year: 2014,
        url: './maps/forest/vyborg/kirovskie_dachi_2014.webp',
        bounds: [[60.7645257, 28.730278], [60.7601657, 28.7842655], [60.746621, 28.7244415]],
        author: ['BRGNTS','VRBY','MLNKV_L'],
        owner: 'VYBORG',
        o_gps: 23707
    },
    {
        name: 'Комсомольское',
        year: 1992,
        startYear: 1993,
        start: 'WN',
        page: 'spb',
        logo: 'akka.jpg',
        url: './maps/forest/vyborg/komsomolskoe.webp',
        link: ['./original_maps/forest/vyborg/komsomolskoe_omaps.jpg','./original_maps/forest/vyborg/komsomolskoe_1992_wn_1_omaps.webp'],
        bounds: [[60.8756713, 28.8049507], [60.8731647, 28.8578224], [60.8432798, 28.7984276]],
        author: ['KAZNTSVA_O','KAZNTSV_S']
    },
    {
        name: 'Лейпясуо',
        year: 2014,
        startYear: 2025,
        info: '24.08. Tokma-maps.',
        o_site: '250824_Tokma',
        url: './maps/forest/vyborg/leypjasuo.webp',
        link: './original_maps/forest/vyborg/leypjasuo_2025_omaps.jpg',
        o_gps: 23280,
        bounds: [[60.570756, 29.2005444], [60.5687738, 29.2155647], [60.5589244, 29.1957378]],
        author: ['TKMKV_K','PDVZKN'],
        owner: 'VYBORG'
    },
    {
        name: 'Верхне-Черкасово',
        year: 2015,
        url: './maps/forest/vyborg/verkchne_cherkasovo_2015.webp',
        bounds: [[60.6750913, 28.8804388], [60.6734728, 28.9138699], [60.6700465, 28.8802671]],
        owner: 'VYBORG'
    },
    {
        name: 'Каменногорск',
        year: 2009,
        area: 17.5,
        info: 'Карта рисовалась под многодневки "Мемориал Михаила Святкина" и "Карельские скалы".',
        url: './maps/forest/vyborg/kamennogorsk_2002.webp',
        link: './original_maps/forest/vyborg/kamennogorsk_2002_omaps.jpg',
        bounds: [[61.0073639, 29.1351414], [60.9988344, 29.2480087], [60.9570274, 29.1172886]],
        author: ['VLKV_K','KVZN','KUZNTSV_S','NSNV','TKMKV_K','VRBY']
    },
    {
        name: 'Каменногорск, оз Сувялампи',
        url: './maps/forest/vyborg/kamennogorsk_suvyalampi.webp',
        bounds: [[60.9565586, 29.1361928], [60.9553815, 29.1479945], [60.9480988, 29.1324592]],
        owner: 'VYBORG',
        zindex: 2
    },
    {
        name: 'Гаврилово',
        year: 2014,
        url: './maps/forest/vyborg/gavrilovo_2014.webp',
        o_gps: 16377,
        bounds: [[60.6159757, 29.0315437], [60.6142279, 29.0507269], [60.6026229, 29.0273809]],
        author: 'DBRTSV_V',
        owner: 'VYBORG'
    },
    {
        name: 'Вещево, заброшенный аэродром',
        year: 2021,
        url: './maps/forest/veschevo_2021.webp',
        link: './original_maps/forest/veschevo_2021_omaps.jpg',
        bounds: [[60.6898217, 29.15411], [60.6866703, 29.1895151], [60.6665147, 29.1452694]],
        author: 'CHGRVSKY_V',
        owner: 'SFSO_SPB'
    },
    {
        name: 'Вещево, заброшенный аэродром',
        year: 2025,
        url: './maps/forest/vyborg/veschevo_2025.webp',
        link: './original_maps/forest/vyborg/veschevo_2025_omaps.jpg',
        publish: 'https://vk.com/album-230167293_309995002',
        bounds: [[60.691723, 29.1504622], [60.688057, 29.1889787], [60.6784435, 29.1455698]],
        author: 'CHGRVSKY_V',
        owner: 'SFSO_SPB'
    },
    {
        name: 'Вещево, юг',
        year: 2025,
        url: './maps/forest/vyborg/veschevo_south_2025.webp',
        link: './original_maps/forest/vyborg/veschevo_south_2025_omaps.jpg',
        publish: 'https://vk.com/album-230167293_309995002',
        bounds: [[60.67156, 29.1864252], [60.6685539, 29.2200708], [60.6544237, 29.1790867]],
        author: 'CHGRVSKY_V',
        owner: 'SFSO_SPB'
    },
    {
        name: 'Вещево, Ториковское оз',
        year: 2026,
        url: './maps/trnsprnt.png',
        bounds: [[60.6671664, 29.1850948], [60.6680914, 29.2132473], [60.648408, 29.2109299]],
        restricted: 'с 19.03.2026 по 31.08.2026, ЧиП СПб',
        author: 'CHGRVSKY_V',
        owner: 'SFSO_SPB'
    },
];