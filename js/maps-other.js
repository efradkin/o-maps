let otherMaps = [
    // --- Калуга ---
    {
        name: 'Малоярославец, гимназия',
        year: 2025,
        url: './maps/other/maloyaroslavets_gymnasium_2025.webp',
        link: './original_maps/other/maloyaroslavets_gymnasium_2025_omaps.gif',
        bounds: [[55.00345344904105, 36.457926034927375], [55.00310886400309, 36.46158456802369], [55.00127512955002, 36.457207202911384]],
        author: 'NBLSNV',
        owner: 'NBLSNV',
        region: 'KLGA',
        type: ['CITY']
    },
    // --- Карелия ---
    {
        name: 'Сортавала, оз Хелмиярви',
        year: 1992,
        url: './maps/other/sortavala_helmijarvi_1992.webp',
        link: './original_maps/other/sortavala_helmijarvi_1992_omaps.jpg',
        bounds: [[61.770991561763616, 30.659880638122562], [61.76479979707796, 30.743308067321777], [61.7504829150452, 30.65194129943848]],
        author: ['KHDNKCH','SCHV','NSNV'],
        region: 'KRL'
    },
    {
        name: 'Сортавала, оз Хелмиярви',
        year: 2024,
        url: './maps/other/sortavala_helmijarvi_2024.webp',
        link: './original_maps/other/sortavala_helmijarvi_2024_omaps.gif',
        info: 'Комментарий автора, Владимира Люка: "Карта получилась очень тяжелая и интересная. В этом районе можно получить очень объективную информацию о всесторонней (физической, технической, психологической) готовности спортсменов. В процессе ориентирования спортсменам придется преодолевать достаточно сложный рельеф в сочетании с тяжелыми грунтами и очень плохой проходимость. Концентрация должна быть полная от старта до финиша. Нельзя расслабиться ни на секунду. Направление выдерживать придется постоянно оббегая упавшие деревья, клочки малины, небольшие формы рельефа, маленькие фрагменты скал. Под ногами всегда будут ветки, камни, мелкие неровности. Поставить ногу не глядя равно получить травму. Бежать и и одновременно работать с картой практически невозможно нигде. Спортсменам придется постоянно прогнозировать что их ожидает на перегонах. Такой тяжелой и сложной местности мне рисовать не приходилось."',
        bounds: [[61.772919889678285, 30.661940574646], [61.76102322389487, 30.76875686645508], [61.74826878842556, 30.65043926239014]],
        author: ['TKMKV_K','VRBJV_S','LUK_V','SBLV_S','TTYNN_V'],
        owner: 'FSO_KARELIA',
        region: 'KRL'
    },
    // --- Владимирская обл ---
    {
        name: 'Радужный',
        year: 2021,
        hidden: true,
        url: './maps/olive.png',
        bounds: [[56.02592194441778, 40.313987731933594], [56.01743143363443, 40.38067817687989], [55.994012897588576, 40.30145645141602]],
        author: ['TKMKV_K','KVZN','LUK_V'],
        owner: 'GRN_V'
    },
    {
        name: 'Ковров, Гридино',
        year: 2025,
        url: './maps/other/kovrov_gridino_2025.webp',
        link: './original_maps/other/kovrov_gridino_2025_omaps.gif',
        bounds: [[56.337071490774015, 41.33520126342774], [56.33516838462233, 41.3521957397461], [56.32967263288713, 41.33254051208497]],
        author: 'SMRNV_K',
        owner: 'SMRNV_K'
    },
    // --- Калининградская обл ---
    {
        name: 'Матросовский лес',
        year: 2021,
        url: './maps/other/matrosovsky_forest_2021.webp',
        link: './original_maps/other/matrosovsky_forest_2021_omaps.gif',
        bounds: [[54.84602774923302, 20.5759334564209], [54.84402622102956, 20.609107017517093], [54.81713187219776, 20.570869445800785]],
        author: ['TKMKV_K','LUK_V'],
        owner: 'KRSHNV',
        region: 'KLNGRD'
    },
    // --- Оренбург ---
    {
        name: 'парк Ивушка',
        year: 2025,
        url: './maps/other/ivushka_2025.webp',
        link: './original_maps/other/ivushka_2025_omaps.jpg',
        bounds: [[51.79770790189836, 55.21902322769166], [51.79648701968797, 55.23048162460328], [51.78966539560376, 55.216641426086426]],
        author: 'STPNV_P',
        logo: 'orenburg.webp',
        type: ['PARK'],
        region: 'ORBG'
    },
    {
        name: 'Качкарский мар',
        year: 1979,
        url: './maps/other/kachkara_1979.webp',
        link: './original_maps/other/kachkara_1979_omaps.jpg',
        bounds: [[51.815300858811874, 55.175399780273445], [51.80951690365106, 55.2195167541504], [51.77782464156524, 55.1597785949707]],
        logo: 'orenburg.webp',
        region: 'ORBG'
    },
    // --- Дальний Восток ---
    {
        name: 'Амурск, о Сахалин',
        year: 1990,
        url: './maps/other/amursk_sakhalin_1990.webp',
        link: './original_maps/other/amursk_sakhalin_1990_omaps.jpg',
        bounds: [[50.20706582639933, 136.88261032104495], [50.2099497177539, 136.90685749053958], [50.18890704171708, 136.88651561737063]],
        logo: 'amursk_snake.jpg',
        author: 'TRFNV_A',
        region: 'DV'
    },
    {
        name: 'Атамановка',
        year: 1988,
        url: './maps/dv/atamanovka_1988.webp',
        link: './original_maps/dv/atamanovka_1988_omaps.jpg',
        bounds: [[51.947068937450204, 113.64725589752199], [51.951354046542924, 113.68639469146729], [51.92124381280325, 113.65257740020752]],
        author: ['GSMNV_R','BCHNV_A'],
        region: 'CHTA'
    },
    {
        name: 'Верх.Карповка',
        year: 1985,
        url: './maps/dv/high_karpovka_1985.webp',
        link: './original_maps/dv/high_karpovka_1985_omaps.jpg',
        bounds: [[52.23815515549662, 113.52893829345705], [52.24188683382461, 113.5726261138916], [52.2113409192666, 113.53537559509279]],
        author: ['KUZNTSV_V_DV','VEKOVISCH','KUZNTSV_S_DV','PNCHKV'],
        region: 'CHTA'
    },
    {
        name: 'гора Чита',
        year: 1986,
        url: './maps/dv/chita_mntn_1986.webp',
        link: './original_maps/dv/chita_mntn_1986_omaps.jpg',
        bounds: [[52.04114119231819, 113.53949546813965], [52.044678254987325, 113.58017921447755], [52.01864526044008, 113.54640483856203]],
        author: ['BBRN_R','VHTV_A'],
        region: 'CHTA'
    },
    {
        name: 'Карповка',
        year: 1986,
        url: './maps/dv/karpovka_1986.webp',
        link: './original_maps/dv/karpovka_1986_omaps.jpg',
        bounds: [[52.216810234735156, 113.54473114013672], [52.22075403470394, 113.58944892883302], [52.18924644741894, 113.54919433593751]],
        author: ['VHTV_A','PNCHKV','ATMNTSV'],
        region: 'CHTA'
    },
/*
    {
        name: 'Лебяжьи озера',
        year: 1,
        url: './maps/dv/swan_lakes_old.webp',
        link: './original_maps/dv/swan_lakes_old_omaps.jpg',
        bounds: [[52.216810234735156, 113.54473114013672], [52.22075403470394, 113.58944892883302], [52.18924644741894, 113.54919433593751]],
        author: ['VHTV_A','PNCHKV','ATMNTSV'],
        region: 'CHTA'
    },
*/
    {
        name: 'Окружная',
        year: 1986,
        url: './maps/dv/ring_road_1986.webp',
        link: './original_maps/dv/ring_road_1986_omaps.jpg',
        bounds: [[52.07945325502219, 113.48679542541504], [52.08140491817397, 113.51031303405763], [52.063441121356036, 113.49005699157716]],
        author: ['ATMNTSV','BBRN_R'],
        logo: 'chita_mikky.webp',
        region: 'CHTA'
    },
    {
        name: 'Орбита',
        year: 1985,
        url: './maps/dv/orbita_1985.webp',
        link: './original_maps/dv/orbita_1985_omaps.jpg',
        bounds: [[52.05494470942748, 113.51602077484132], [52.057609907000106, 113.54953765869142], [52.03628387406958, 113.52026939392091]],
        author: ['VEKOVISCH','KUZNTSV_V_DV','KUZNTSV_S_DV','PNCHKV'],
        logo: 'chita_mikky.webp',
        region: 'CHTA'
    },
    {
        name: 'р Сухая',
        year: 1988,
        url: './maps/dv/dry_river_1988.webp',
        link: './original_maps/dv/dry_river_1988_omaps.jpg',
        bounds: [[52.08335649599008, 113.50653648376466], [52.086890217029634, 113.55537414550783], [52.036389473556774, 113.51675033569337]],
        author: ['GSMNV_R','ATMNTSV'],
        region: 'CHTA'
    },
    {
        name: 'гора Батарейная',
        year: 1,
        url: './maps/dv/batareynaya_old.webp',
        link: './original_maps/dv/batareynaya_old_omaps.jpg',
        bounds: [[52.02144466652407, 113.51992607116699], [52.0208372631053, 113.56056690216066], [51.994684688372, 113.51953983306886]],
        region: 'CHTA'
    },
    // --- Юг ---
    {
        name: 'Парк Краснодар',
        year: 2024,
        url: './maps/other/krasnodar_park_2024.webp',
        link: './original_maps/other/krasnodar_park_2024_omaps.pdf',
        bounds: [[45.046541218721764, 39.02678489685059], [45.04651089764259, 39.03708457946778], [45.03830845554792, 39.02667760849]],
        author: 'DRN_E',
        owner: 'DRN_E',
        region: 'KRSNDR',
        type: ['PARK']
    },
    {
        name: 'Парк стд Кубань, Покровские оз',
        year: 2025,
        url: './maps/other/kuban_pokrovskie_2025.webp',
        link: './original_maps/other/kuban_pokrovskie_2025_omaps.gif',
        bounds: [[45.030665935675785, 38.990811109542854], [45.02951340364578, 39.00232315063477], [45.024561801368655, 38.989502191543586]],
        author: 'DRN_E',
        owner: 'DRN_E',
        region: 'KRSNDR',
        type: ['PARK']
    },
    {
        name: 'Горячий ключ',
        year: 2013,
        url: './maps/other/hot_key_2013.webp',
        link: './original_maps/other/hot_key_2013_omaps.gif',
        bounds: [[44.65680962521428, 39.120168685913086], [44.65070391371675, 39.20393943786622], [44.60165174422536, 39.11055564880371]],
        author: 'ZAMOTA',
        owner: 'ZAMOTA',
        region: 'KRSNDR'
    },
    {
        name: 'Сочи, Ахун',
        year: 2001,
        url: './maps/other/sochi_ahun_2001.webp',
        link: './original_maps/other/sochi_ahun_2001_omaps.gif',
        bounds: [[43.61165747364978, 39.79848861694337], [43.607742266333425, 39.8844051361084], [43.54229575224248, 39.79138612747193]],
        author: 'ZAMOTA',
        owner: 'ZAMOTA',
        region: 'KRSNDR'
    },
    {
        name: 'Сочи, хребет Ачишхо, эко-тропа',
        url: './maps/other/sochi_achishko_eco_trail.webp',
        link: './original_maps/other/sochi_achishko_eco_trail_omaps.gif',
        bounds: [[43.72973944370968, 40.17000675201417], [43.72555281372339, 40.20206451416016], [43.71624814386753, 40.1700496673584]],
        author: 'ZAMOTA',
        owner: 'ZAMOTA',
        region: 'KRSNDR'
    },
    {
        name: 'блв Черняховского',
        year: 2025,
        url: './maps/other/chernyahovskogo_2025.webp',
        link: './original_maps/other/chernyahovskogo_2025_omaps.pdf',
        bounds: [[44.70843059571771, 37.78347373008729], [44.70849159520974, 37.78912782669068], [44.69915029925823, 37.78349518775941]],
        author: ['DRN_E','MSTPNV'],
        owner: 'DRN_E',
        region: 'NVRSYSK',
        type: ['PARK']
    },
    {
        name: 'СЦ ЦСКА',
        year: 2024,
        url: './maps/other/gelendzhik_tsska_2024.webp',
        link: './original_maps/other/gelendzhik_tsska_2024_omaps.pdf',
        bounds: [[44.55543274163521, 38.083645105361946], [44.55579205872829, 38.08655261993409], [44.553590251046344, 38.08395624160767]],
        author: 'DRN_E',
        owner: 'DRN_E',
        region: 'GLNDZHK',
        type: ['CITY'],
    },
    {
        name: 'ул Леселидзе',
        year: 2025,
        url: './maps/other/leselidze_2025.webp',
        link: './original_maps/other/leselidze_2025_omaps.gif',
        bounds: [[44.551870030829285, 38.06358218193055], [44.551870030829285, 38.07508349418641], [44.548207703775745, 38.063678741455085]],
        author: ['DRN_E','GRBNKO'],
        owner: 'DRN_E',
        region: 'GLNDZHK',
        type: ['CITY'],
    },
    {
        name: 'Архипо-Осиповка, школа №17',
        year: 2025,
        url: './maps/other/arhipo_osipovka_school_17_2024.webp',
        link: './original_maps/other/arhipo_osipovka_school_17_2024_omaps.gif',
        bounds: [[44.37178456062143, 38.53595137596131], [44.37111734025328, 38.54298949241639], [44.367811803106044, 38.535372018814094]],
        author: ['DRN_E','ZZV_E'],
        owner: 'DRN_E',
        region: 'GLNDZHK',
        type: ['CITY']
    },
    {
        name: 'Возрождение',
        year: 2002,
        url: './maps/other/gelendzhik_vozrozhdenie_2002.webp',
        link: './original_maps/other/gelendzhik_vozrozhdenie_2002_omaps.gif',
        bounds: [[44.59508183834914, 38.14629077911378], [44.58429335853355, 38.24830055236817], [44.55332266457437, 38.13753604888917]],
        author: 'ZAMOTA',
        owner: 'ZAMOTA',
        region: 'GLNDZHK',
    },
    {
        name: 'Нижний Архыз',
        year: 1987,
        url: './maps/other/nizhny_archyz_1987.webp',
        link: './original_maps/other/nizhny_archyz_1987_omaps.jpg',
        bounds: [[43.70570110447654, 41.46034240722657], [43.70455322644414, 41.498408317565925], [43.678332191097546, 41.46330356597901]],
        author: 'SKRSKY_A',
        region: 'KRCHCHRK',
    },
    {
        name: 'Архыз, поляна Таулу',
        year: 2005,
        url: './maps/other/archyz_taulu_2005.webp',
        link: './original_maps/other/archyz_taulu_2005_omaps.gif',
        bounds: [[43.53744272839921, 41.22186183929444], [43.536462743491214, 41.24653816223145], [43.51407430725295, 41.22038125991822]],
        author: 'ZAMOTA',
        owner: 'ZAMOTA',
        region: 'KRCHCHRK'
    },
    {
        name: 'Домбай, отель Гранд Виктория',
        year: 2025,
        url: './maps/other/dombai_2025.webp',
        link: './original_maps/other/dombai_2025_omaps.gif',
        bounds: [[43.29037338009644, 41.61844253540039], [43.29003757536656, 41.62283062934876], [43.287483836877826, 41.6178846359253]],
        author: 'ZHRDV_T',
        owner: 'ZHRDV_T',
        region: 'KRCHCHRK',
        type: ['CITY']
    },
    {
        name: 'Альплагерь Безенги',
        year: 2022,
        url: './maps/other/bezengi_2022.webp',
        link: ['./original_maps/other/bezengi_2022_omaps.gif','./original_maps/other/bezengi_2022_omaps.ocd'],
        bounds: [[43.11300637206235, 43.1458854675293], [43.11263826098369, 43.149629831314094], [43.10854972951116, 43.14490914344788]],
        author: 'SMRNV_S',
        owner: 'SMRNV_S',
        region: 'KABARDA',
        type: ['CITY']
    },

    // --- Не Россия ---
    {
        name: 'Казахстан, Каркаралинск',
        year: 1986,
        major: true,
        url: './maps/other/karkaralinsk_1986.webp',
        link: './original_maps/other/karkaralinsk_1986_omaps.jpg',
        info: '6-11 октября. Чемпионат СССР.',
        bounds: [[49.38385349051448, 75.43367385864259], [49.381674326472776, 75.4750442504883], [49.35151930828741, 75.43144226074219]],
        author: ['AFNSV_L','GLTSKY_V','KLM_K','KVLVSKY_G'],
        results: './docs/1986/1986_09_09_ussr_karaganda_omaps.pdf',
        region: 'KZ'
    },
    {
        name: 'Париж, Диснейлэнд',
        date: '2012-09-29',
        url: './maps/other/paris_disneyland_2012.webp',
        link: './original_maps/other/paris_disneyland_2012_omaps.webp',
        info: 'Parc Disneyland. Le Bri\'O Tour Etape 2.',
        bounds: [[48.87525102087206, 2.7719235420227055], [48.87530041538762, 2.781386375427246], [48.86795420960014, 2.77181625366211]],
        logo: 'disney.gif',
        region: 'FRA'
    },
];
