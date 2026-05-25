let otherMaps = [
    // --- Алтай ---
    {
        name: 'Чернопятово',
        date: '2025-07-05',
        area: 142,
        url: './maps/other/chernopiatovo_rogaine_2025.webp',
        link: './original_maps/other/chernopiatovo_rogaine_2025_omaps.webp',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/23058/',
        info: 'Касмалинская долина.',
        bounds: [[53.455042490099736, 83.08444976806642], [53.44972690762585, 83.37060928344728], [53.337535936218956, 83.07947158813478]],
        type: ['ROGAINE'],
        author: ['SCHGLV_A'],
        region: 'ALTAI'
    },
    {
        name: 'Косиха',
        date: '2024-07-06',
        area: 198,
        url: './maps/other/kosiha_rogaine_2024.webp',
        link: './original_maps/other/kosiha_rogaine_2024_omaps.webp',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/19972/',
        info: 'Косихинское раздолье.',
        bounds: [[53.42303672152822, 84.38066482543947], [53.42927615888975, 84.69120025634767], [53.29261775598043, 84.38976287841798]],
        type: ['ROGAINE'],
        author: ['SCHGLV_A'],
        region: 'ALTAI'
    },
    // --- Архангельск ---
    {
        name: 'Малые Карелы',
        date: '2025-09-07',
        url: './maps/other/karely_rogaine_2025.webp',
        link: './original_maps/other/karely_rogaine_2025_omaps.webp',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/23354/',
        bounds: [[64.47797162841998, 40.90553283691407], [64.47079640354542, 40.96449851989747], [64.46014105261972, 40.89377403259278]],
        type: ['ROGAINE'],
        region: 'ARKHANGELSK'
    },
    // --- Владимирская обл ---
    {
        name: 'Радужный',
        year: 2021,
        hidden: true,
        url: './maps/olive.png',
        bounds: [[56.02592194441778, 40.313987731933594], [56.01743143363443, 40.38067817687989], [55.994012897588576, 40.30145645141602]],
        region: 'VLADIMIR',
        author: ['TKMKV_K','KVZN','LUK_V'],
        owner: 'GRN_V'
    },
    {
        name: 'Ковров, Гридино',
        year: 2025,
        url: './maps/other/kovrov_gridino_2025.webp',
        link: './original_maps/other/kovrov_gridino_2025_omaps.gif',
        bounds: [[56.337071490774015, 41.33520126342774], [56.33516838462233, 41.3521957397461], [56.32967263288713, 41.33254051208497]],
        region: 'VLADIMIR',
        author: 'SMRNV_K',
        owner: 'SMRNV_K'
    },
    {
        name: 'Иваново, Ломы',
        date: '2011-03-06',
        url: './maps/other/ivanovo_lomy_2011.webp',
        link: './original_maps/other/ivanovo_lomy_rogaine_2011_omaps.webp',
        info: '1-й Чемпионат России по рогейну на лыжах.',
        about: 'https://ski.rogaining.ru',
        bounds: [[56.96818761462326, 40.929222106933594], [56.95059166007404, 41.142082214355476], [56.78940938146706, 40.87926864624024]],
        logo: 'rogaine_russia_2011.webp',
        region: 'VLADIMIR',
        start: 'RUSSIA_ROGAINE_CHAMP',
        type: ['ROGAINE']
    },
    {
        name: 'Обашево',
        date: '2021-05-08',
        url: './maps/other/obashevo_rrc_2021.webp',
        link: './original_maps/other/obashevo_rrc_2021_omaps.webp',
        about: 'https://zalesye2021.ru/',
        info: '18-й чемпионат России по рогейну бегом Залесье 2021.',
        bounds: [[56.71524684002354, 38.33593368530274], [56.674904273488885, 38.68080139160156], [56.52872577072523, 38.263664245605476]],
        gps: 'https://viewer.o-gps-center.ru/viewer/event/9803',
        author: ['BRV_D','SHSTKV_P','LGNV_E'],
        logo: 'rrc_2021.webp',
        start: 'RUSSIA_ROGAINE_CHAMP',
        region: 'VLADIMIR',
        type: ['ROGAINE']
    },
    {
        name: 'Крутово',
        date: '2025-08-24',
        url: './maps/other/krutovo_rogaine_2025.webp',
        link: './original_maps/other/krutovo_rogaine_2025_omaps.webp',
        info: 'Спортмастер PRO Fest.',
        bounds: [[55.917035013373074, 39.34530258178712], [55.89437381256353, 39.544086456298835], [55.839084658820454, 39.316978454589844]],
        gps: 'https://viewer.o-gps-center.ru/viewer/event/23267/',
        owner: 'OPNBND',
        region: 'VLADIMIR',
        type: ['ROGAINE']
    },
    // --- Вологодская обл ---
    {
        name: 'Череповец',
        date: '2023-04-16',
        url: './maps/other/cherepovets_rogaine_2023.webp',
        link: './original_maps/other/cherepovets_rogaine_2023_omaps.webp',
        bounds: [[59.14790153290733, 37.89922714233399], [59.14754940300838, 37.9944133758545], [59.110952171795766, 37.898111343383796]],
        gps: 'https://viewer.o-gps-center.ru/viewer/event/15610/',
        region: 'VOLOGDA',
        type: ['ROGAINE']
    },
    // --- Дагестан ---
    {
        name: 'Куруш',
        date: '2023-09-29',
        url: './maps/south/kurush_rogaine_2023.webp',
        link: './original_maps/south/kurush_rogaine_2023_omaps.webp',
        info: 'Caspian Decompression.',
        bounds: [[41.300572215425404, 47.81520366668702], [41.29138303247354, 47.88167953491212], [41.262646395123596, 47.80516147613526]],
        gps: 'https://viewer.o-gps-center.ru/viewer/event/17390/',
        start: 'ZM',
        region: 'DAGESTAN',
        type: ['ROGAINE']
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
        name: 'Благовещенск, Моховая падь',
        date: '2025-10-12',
        url: './maps/dv/blagoveschensk_mokhova_pad_rogaine_2025.webp',
        link: './original_maps/dv/blagoveschensk_mokhova_pad_rogaine_2025_omaps.webp',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/23628/',
        bounds: [[50.400530554317605, 127.54045486450197], [50.41341299115119, 127.63216495513917], [50.36052072352183, 127.55384445190431]],
        author: 'MLNN_V',
        type: ['ROGAINE'],
        region: 'DV'
    },
    {
        name: 'Раздольное',
        date: '2024-06-22',
        url: './maps/dv/razdolnoe_rogaine_2024.webp',
        link: './original_maps/dv/razdolnoe_rogaine_2024_omaps.webp',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/19794/',
        bounds: [[43.607555821532756, 131.83670997619632], [43.61355283960057, 131.89280033111575], [43.556230469540495, 131.8473529815674]],
        info: 'МТБ-рогейн.',
        type: ['ROGAINE','VELO'],
        author: 'ZRNV_J',
        region: 'DV'
    },
    {
        name: 'Тавричанка',
        date: '2023-06-24',
        url: './maps/dv/tavrichanka_mtb_rogaine_2023.webp',
        link: './original_maps/dv/tavrichanka_mtb_rogaine_2023_omaps.webp',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/16531/',
        info: 'МТБ-рогейн.',
        bounds: [[43.36674806255099, 131.80366516113284], [43.38746020276136, 131.99558258056643], [43.27851756963258, 131.82349205017093]],
        type: ['ROGAINE','VELO'],
        region: 'DV'
    },
    {
        name: 'Тавричанка',
        date: '2025-09-14',
        url: './maps/dv/tavrichanka_rogaine_2025.webp',
        link: './original_maps/dv/tavrichanka_rogaine_2025_omaps.webp',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/23374/',
        info: 'Рогейн Надеждинский.',
        bounds: [[43.32236784363722, 131.81289196014407], [43.3268947382324, 131.84649467468265], [43.292856715659916, 131.82001590728763]],
        type: ['ROGAINE'],
        region: 'DV'
    },
    {
        name: 'о Русский',
        date: '2022-11-12',
        url: './maps/dv/russky_island_rogaine_2022.webp',
        link: './original_maps/dv/russky_island_rogaine_2022_omaps.webp',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/14596/',
        info: 'Чемпионат ДВФО.',
        bounds: [[43.06010884219939, 131.84293270111087], [43.06822939788033, 131.9241285324097], [42.95265336997114, 131.86160087585452]],
        type: ['ROGAINE'],
        region: 'DV'
    },
    {
        name: 'о Русский',
        date: '2023-07-15',
        url: './maps/dv/russky_island_rogaine_2023.webp',
        link: './original_maps/dv/russky_island_rogaine_2023_omaps.webp',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/16781/',
        info: 'Морской рогейн.',
        bounds: [[43.0662542265824, 131.80074691772464], [43.074499361216205, 131.88962459564212], [42.97281558861603, 131.81722640991214]],
        type: ['ROGAINE'],
        region: 'DV'
    },
    {
        name: 'Атамановка',
        year: 1988,
        url: './maps/dv/atamanovka_1988.webp',
        link: './original_maps/dv/atamanovka_1988_omaps.jpg',
        bounds: [[51.947068937450204, 113.64725589752199], [51.951354046542924, 113.68639469146729], [51.92124381280325, 113.65257740020752]],
        author: ['GSMNV_R','BCHNV_A'],
        region: 'CHITA'
    },
    {
        name: 'Верх.Карповка',
        year: 1985,
        url: './maps/dv/high_karpovka_1985.webp',
        link: './original_maps/dv/high_karpovka_1985_omaps.jpg',
        bounds: [[52.23815515549662, 113.52893829345705], [52.24188683382461, 113.5726261138916], [52.2113409192666, 113.53537559509279]],
        author: ['KUZNTSV_V_DV','VEKOVISCH','KUZNTSV_S_DV','PNCHKV'],
        region: 'CHITA'
    },
    {
        name: 'гора Чита',
        year: 1986,
        url: './maps/dv/chita_mntn_1986.webp',
        link: './original_maps/dv/chita_mntn_1986_omaps.jpg',
        bounds: [[52.04114119231819, 113.53949546813965], [52.044678254987325, 113.58017921447755], [52.01864526044008, 113.54640483856203]],
        author: ['BBRN_R','VHTV_A'],
        region: 'CHITA'
    },
    {
        name: 'Карповка',
        year: 1986,
        url: './maps/dv/karpovka_1986.webp',
        link: './original_maps/dv/karpovka_1986_omaps.jpg',
        bounds: [[52.216810234735156, 113.54473114013672], [52.22075403470394, 113.58944892883302], [52.18924644741894, 113.54919433593751]],
        author: ['VHTV_A','PNCHKV','ATMNTSV'],
        region: 'CHITA'
    },
    /*
        {
            name: 'Лебяжьи озера',
            year: 1,
            url: './maps/dv/swan_lakes_old.webp',
            link: './original_maps/dv/swan_lakes_old_omaps.jpg',
            bounds: [[52.216810234735156, 113.54473114013672], [52.22075403470394, 113.58944892883302], [52.18924644741894, 113.54919433593751]],
            author: ['VHTV_A','PNCHKV','ATMNTSV'],
            region: 'CHITA'
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
        region: 'CHITA'
    },
    {
        name: 'Орбита',
        year: 1985,
        url: './maps/dv/orbita_1985.webp',
        link: './original_maps/dv/orbita_1985_omaps.jpg',
        bounds: [[52.05494470942748, 113.51602077484132], [52.057609907000106, 113.54953765869142], [52.03628387406958, 113.52026939392091]],
        author: ['VEKOVISCH','KUZNTSV_V_DV','KUZNTSV_S_DV','PNCHKV'],
        logo: 'chita_mikky.webp',
        region: 'CHITA'
    },
    {
        name: 'р Сухая',
        year: 1988,
        url: './maps/dv/dry_river_1988.webp',
        link: './original_maps/dv/dry_river_1988_omaps.jpg',
        bounds: [[52.08335649599008, 113.50653648376466], [52.086890217029634, 113.55537414550783], [52.036389473556774, 113.51675033569337]],
        author: ['GSMNV_R','ATMNTSV'],
        region: 'CHITA'
    },
    {
        name: 'гора Батарейная',
        year: 1,
        url: './maps/dv/batareynaya_old.webp',
        link: './original_maps/dv/batareynaya_old_omaps.jpg',
        bounds: [[52.02144466652407, 113.51992607116699], [52.0208372631053, 113.56056690216066], [51.994684688372, 113.51953983306886]],
        region: 'CHITA'
    },
    // --- Иркутск ---
    {
        name: 'Одинск',
        date: '2024-08-25',
        url: './maps/other/odinsk_rogaine_2024.webp',
        link: './original_maps/other/odinsk_rogaine_2024_omaps.webp',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/20260/',
        info: 'Бегущие от медведя.',
        bounds: [[52.47159283256492, 103.74715805053712], [52.460088812586164, 103.78217697143556], [52.43940016085153, 103.71810436248781]],
        author: ['JASHPTRV','PZDV_S','PLKTV_V'],
        region: 'IRKUTSK',
        type: ['ROGAINE']
    },
    {
        name: 'Ершовский залив',
        date: '2023-08-26',
        url: './maps/other/ershovsky_rogaine_2023.webp',
        link: './original_maps/other/ershovsky_rogaine_2023_omaps.webp',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/17068/',
        info: 'Бегущие от медведя.',
        bounds: [[52.216967993457835, 104.277720451355], [52.23245191414524, 104.33196544647218], [52.14507721706193, 104.33320999145509]],
        region: 'IRKUTSK',
        type: ['ROGAINE']
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
        region: 'KLNNGRD'
    },
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
    {
        name: 'Никола-Ленивец',
        year: 2023,
        url: './maps/other/nikola_lenivets_rogaine_2023.webp',
        link: './original_maps/other/nikola_lenivets_rogaine_2023_omaps.webp',
        info: 'SPORT-MARAFON FEST.',
        bounds: [[54.81473325243995, 35.518112182617195], [54.78880918441787, 35.70917129516602], [54.71510205751835, 35.47760009765626]],
        region: 'KLGA',
        type: ['ROGAINE']
    },
    // --- Карелия ---
    {
        name: 'Сортавала, оз Хелмиярви',
        year: 1992,
        url: './maps/other/sortavala_helmijarvi_1992.webp',
        link: './original_maps/other/sortavala_helmijarvi_1992_omaps.jpg',
        bounds: [[61.770991561763616, 30.659880638122562], [61.76479979707796, 30.743308067321777], [61.7504829150452, 30.65194129943848]],
        author: ['KHDNKCH','SCHV','NSNV'],
        region: 'KARELIA'
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
        region: 'KARELIA'
    },
    {
        name: 'Медвежьегорск, оз Плотичье',
        year: 1973,
        url: './maps/other/medvezhegorsk_plotichie_1973.webp',
        link: './original_maps/other/medvezhegorsk_plotichie_1973_omaps.webp',
        bounds: [[62.917050176036085, 34.38930988311768], [62.915682449329786, 34.43149566650391], [62.903076819759605, 34.38488960266114]],
        author: 'SHRNN',
        region: 'KARELIA'
    },
    // --- Кострома ---
    {
        name: 'Галич',
        date: '2025-07-12',
        url: './maps/other/galich_rrc_2025.webp',
        link: './original_maps/other/galich_rrc_2025_omaps.webp',
        about: 'https://galtropa.ru/rogaine/2025',
        info: 'Галичское Заозерье. XXII-й Чемпионат России по рогейну.',
        bounds: [[58.570579776317544, 42.18526840209962], [58.531082526206816, 42.53528594970704], [58.44162408488062, 42.1322250366211]],
        type: ['ROGAINE'],
        start: 'RUSSIA_ROGAINE_CHAMP',
        logo: 'rrc_2025.gif',
        region: 'KOSTROMA'
    },
    // --- Коми ---
    {
        name: 'Сыктывкар',
        date: '2020-09-27',
        url: './maps/other/syktyvkar_rogaine_2020.webp',
        link: './original_maps/other/syktyvkar_rogaine_2020_omaps.webp',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/8224/',
        bounds: [[61.68038655384103, 50.70439338684083], [61.66662107789713, 50.78550338745118], [61.627041737353295, 50.6645679473877]],
        type: ['ROGAINE'],
        region: 'KOSTROMA'
    },
    // --- Красноярский край ---
    {
        name: 'Красноярск',
        date: '2015-09-19',
        url: './maps/other/krasnoyarsk_rrc_2015.webp',
        link: './original_maps/other/krasnoyarsk_rrc_2015_omaps.webp',
        about: 'https://kras-rogaining.ru/',
        info: '12-й Чемпионат России по рогейну.',
        bounds: [[56.072754061275596, 92.43647575378418], [56.07615520299828, 92.76288986206056], [55.95366905082329, 92.43986606597902]],
        type: ['ROGAINE'],
        start: 'RUSSIA_ROGAINE_CHAMP',
        region: 'KRASNOYARSK'
    },
    {
        name: 'р Базаиха',
        date: '2023-09-23',
        url: './maps/other/bazaiha_rogaine_2023.webp',
        link: './original_maps/other/bazaiha_rogaine_2023_omaps.webp',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/17357/',
        info: 'Торгашинские тропы.',
        bounds: [[55.97636764167947, 92.77228832244874], [55.97663177969302, 92.87150859832765], [55.94143751970741, 92.77198791503908]],
        type: ['ROGAINE'],
        region: 'KRASNOYARSK'
    },
    {
        name: 'Хакасия, урочище Карчалык',
        date: '2018-07-21',
        url: './maps/other/karchalyk_rrc_2018.webp',
        link: './original_maps/other/karchalyk_rrc_2018_omaps.webp',
        about: 'https://kras-rogaining.ru/',
        info: '15-й Чемпионат России по рогейну.',
        bounds: [[54.55743129270758, 90.72750091552736], [54.55763038049401, 91.0162353515625], [54.43960031016295, 90.72715759277345]],
        author: 'ANKN_I',
        type: ['ROGAINE'],
        start: 'RUSSIA_ROGAINE_CHAMP',
        region: 'KRASNOYARSK'
    },
    // --- Курган ---
    {
        name: 'Бол Чаусово',
        date: '2024-10-20',
        url: './maps/other/bol_chausovo_rogaine_2024.webp',
        link: './original_maps/other/bol_chausovo_rogaine_2024_omaps.webp',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/20896/',
        bounds: [[55.54184197767242, 65.31140327453615], [55.547669149918804, 65.37036895751955], [55.518378873452434, 65.31891345977785]],
        region: 'KURGAN',
        type: ['ROGAINE']
    },
    // --- Мурманск ---
    {
        name: 'Апатиты',
        year: 1979,
        url: './maps/other/apatity_1979.webp',
        link: './original_maps/other/apatity_1979_omaps.webp',
        info: 'Первая местная цветная карта.',
        bounds: [[67.61713141141243, 33.232440948486335], [67.60876287386016, 33.325309753417976], [67.57453870590122, 33.20960998535157]],
        author: 'KUZNTSV_S',
        region: 'MURMANSK'
    },
    {
        name: 'Кировск, г Айкуайвенчорр',
        year: 2021,
        date: '2022-09-10',
        url: './maps/other/kirovsk_aikuayvenchor_2022_09_10.webp',
        link: './original_maps/other/kirovsk_aikuayvenchor_2022_09_10_omaps.webp',
        info: 'Чемпионат России.',
        bounds: [[67.61124759316175, 33.67528438568116], [67.60480639943397, 33.73339176177979], [67.57644589669246, 33.64835500717164]],
        author: ['KVZN','TKMKVA_P','TKMKV_K'],
        region: 'MURMANSK',
        start: 'RUSSIA_CHAMP'
    },
    {
        name: 'г Горелая',
        date: '2024-08-24',
        url: './maps/other/murmansk_gorelaya_rogaine_2024.webp',
        link: './original_maps/other/murmansk_gorelaya_rogaine_2024_omaps.webp',
        bounds: [[68.97056026223459, 33.04610252380372], [68.94889712166568, 33.21578979492188], [68.91807601090974, 33.00009727478028]],
        info: 'Заполярный рогейн.',
        region: 'MURMANSK',
        start: 'ZM',
        type: ['ROGAINE'],
    },
    {
        name: 'Долина Уюта',
        year: 2022,
        date: '2023-09-23',
        url: './maps/other/murmansk_2023_09_23.webp',
        link: './original_maps/other/murmansk_2023_09_23_omaps.webp',
        info: 'Чемпионат России.',
        bounds: [[68.96692554632965, 33.13141822814942], [68.96270482718478, 33.174505233764656], [68.93165617852857, 33.10223579406739]],
        author: ['SKRPKO_S','KVZN'],
        region: 'MURMANSK',
        start: 'RUSSIA_CHAMP'
    },
    // --- В.Новгород ---
    {
        name: 'Великий Новгород',
        date: '2024-09-28',
        url: './maps/other/novgorod_rogaine_2024_09_08.webp',
        link: './original_maps/other/novgorod_rogaine_2024_09_08_omaps.webp',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/20664/',
        info: 'Новгородский городской исторический рогейн.',
        bounds: [[58.55553845424676, 31.246833801269535], [58.54685093957477, 31.33232116699219], [58.490374433225796, 31.222286224365238]],
        author: 'ORLV',
        owner: 'LM',
        type: ['ROGAINE'],
        region: 'NOVGOROD'
    },
    // --- Н.Новгород ---
    {
        name: 'Богородск',
        date: '2017-09-23',
        url: './maps/other/bogorodsk_rrc_2017.webp',
        link: './original_maps/other/bogorodsk_rrc_2017_omaps.webp',
        about: 'https://nn-rogaine.ru/op/osen-povolzhya',
        info: '14-й Чемпионат России по рогейну. Осень Поволжья 2017.',
        bounds: [[56.25345956009947, 43.27171325683594], [56.21925725344818, 43.5659408569336], [56.00529203821348, 43.17455291748047]],
        author: ['BRV_D','SDNV_V'],
        type: ['ROGAINE'],
        start: 'RUSSIA_ROGAINE_CHAMP',
        region: 'N_NOVGOROD'
    },
    {
        name: 'Дзержинск, Тимонино',
        date: '2024-08-17',
        url: './maps/other/dzerzhinsk_timonino_rrc_2024.webp',
        link: './original_maps/other/dzerzhinsk_timonino_rrc_2024_omaps.webp',
        about: 'https://rogaining.ru/news/rrf-news/rrc2024-results',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/20232/',
        info: '21-й Чемпионат России по рогейну бегом.',
        bounds: [[56.20116586957535, 43.0440902709961], [56.16304580548437, 43.40423583984376], [56.04606144935395, 42.98503875732422]],
        author: ['BRV_D','SHSTKV_P'],
        type: ['ROGAINE'],
        start: 'RUSSIA_ROGAINE_CHAMP',
        region: 'N_NOVGOROD'
    },
    {
        name: 'Дальнее Константиново',
        date: '2025-08-10',
        url: './maps/other/dalnee_konstantinovo_rogaine_2025.webp',
        link: './original_maps/other/dalnee_konstantinovo_rogaine_2025_omaps.webp',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/23204/',
        info: 'Лесной Relax.',
        bounds: [[55.85864713552407, 44.02324676513672], [55.84260277600231, 44.15928840637208], [55.751366352300806, 43.981790542602546]],
        type: ['ROGAINE'],
        region: 'N_NOVGOROD'
    },
    {
        name: 'Пустынские оз',
        date: '2025-06-21',
        url: './maps/other/pustynskie_lakes_rogaine_2025.webp',
        link: './original_maps/other/pustynskie_lakes_rogaine_2025_omaps.gif',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/22959/',
        info: 'Весло и курвиметр.',
        bounds: [[55.68743166880614, 43.5133695602417], [55.675116159419325, 43.612117767333984], [55.65960132674263, 43.50289821624756]],
        type: ['ROGAINE','WATER'],
        region: 'N_NOVGOROD'
    },
    {
        name: 'Зелёный город',
        date: '2024-11-23',
        url: './maps/other/green_city_rogaine_2024.webp',
        link: './original_maps/other/green_city_rogaine_2024_omaps.gif',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/21134/',
        info: 'По первому снегу.',
        bounds: [[56.201476215917985, 44.032731056213386], [56.189370847656136, 44.15997505187989], [56.156210765857054, 44.018998146057136]],
        type: ['ROGAINE'],
        region: 'N_NOVGOROD'
    },
    {
        name: 'Память Парижской коммуны',
        date: '2024-10-12',
        url: './maps/other/paris_commune_rogaine_2024.webp',
        link: './original_maps/other/paris_commune_rogaine_2024_omaps.webp',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/20799/',
        info: 'ХХ Осень Поволжья.',
        bounds: [[56.18263603094131, 44.36725616455079], [56.14526260963143, 44.64963912963867], [56.10239617094439, 44.333438873291016]],
        author: ['KRLV_A','SDNV_V'],
        type: ['ROGAINE'],
        region: 'N_NOVGOROD'
    },
    {
        name: 'Шава',
        date: '2023-05-13',
        url: './maps/other/shava_rogaine_2023.webp',
        link: './original_maps/other/shava_rogaine_2023_omaps.webp',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/16089/',
        info: 'От заката до рассвета.',
        bounds: [[56.09871010711, 44.399528503417976], [56.08037028603752, 44.544153213500984], [56.048122758025954, 44.37704086303712]],
        author: ['KRLV_A','SDNV_V'],
        type: ['ROGAINE'],
        region: 'N_NOVGOROD'
    },
    // --- Новосибирск ---
    {
        name: 'Новосибирск',
        date: '2022-08-20',
        url: './maps/other/novosib_rogaine_2022.webp',
        link: './original_maps/other/novosib_rogaine_2022_omaps.webp',
        info: 'Удачный Рогейн.',
        bounds: [[54.96884480230774, 83.05698394775392], [54.97588960623089, 83.22246551513673], [54.87018651354342, 83.06934356689455]],
        gps: 'https://viewer.o-gps-center.ru/viewer/event/13894/',
        type: ['ROGAINE'],
        region: 'NSK'
    },
    {
        name: 'Бердск',
        date: '2022-07-23',
        url: './maps/other/berdsk_rogaine_2022.webp',
        link: './original_maps/other/berdsk_rogaine_2022_omaps.webp',
        bounds: [[54.900697751009574, 83.08410644531251], [54.89625580429826, 83.40734481811525], [54.730964378350336, 83.06659698486328]],
        gps: 'https://viewer.o-gps-center.ru/viewer/event/13668/',
        type: ['ROGAINE'],
        region: 'NSK'
    },
    // --- Оренбург ---
    {
        name: 'парк Ивушка',
        year: 2025,
        url: './maps/other/ivushka_2025.webp',
        link: './original_maps/other/ivushka_2025_omaps.jpg',
        bounds: [[51.79770790189836, 55.21902322769166], [51.79648701968797, 55.23048162460328], [51.78966539560376, 55.216641426086426]],
        author: 'STPNV_P',
        type: ['PARK'],
        region: 'ORENBURG'
    },
    {
        name: 'Качкарский мар',
        year: 1979,
        url: './maps/other/kachkara_1979.webp',
        link: './original_maps/other/kachkara_1979_omaps.jpg',
        bounds: [[51.815300858811874, 55.175399780273445], [51.80951690365106, 55.2195167541504], [51.77782464156524, 55.1597785949707]],
        logo: 'orenburg.webp',
        region: 'ORENBURG'
    },
    // --- Пермь ---
    {
        name: 'Балатово, Черняевский лес',
        year: 2013,
        date: '2015-09-13',
        url: './maps/other/perm_balatovo_2013_09_15.webp',
        link: ['./original_maps/other/perm_balatovo_2015_09_13_1_omaps.webp','./original_maps/other/perm_balatovo_2015_09_13_2_omaps.webp'],
        info: 'Чемпионат России.',
        bounds: [[57.999775257951946, 56.139664649963386], [57.99313403344903, 56.19081974029542], [57.971609824958364, 56.126060485839844]],
        author: ['LNTV','STLRV','JASHPTRV'],
        region: 'PERM',
        start: 'RUSSIA_CHAMP'
    },
    {
        name: 'Пермь, Черняевский лес, ПКиО',
        year: 1982,
        date: '1986-12-30',
        url: './maps/other/perm_chernyaevsky_1982.webp',
        link: ['./original_maps/other/perm_chernyaevsky_1982_omaps.webp','./original_maps/other/perm_chernyaevsky_1982_course_omaps.webp'],
        bounds: [[57.99468073000184, 56.160392761230476], [57.99124606329963, 56.19030475616456], [57.98414822497704, 56.15507125854493]],
        author: ['KRYUKOV_I','KNV_S'],
        region: 'PERM',
        me: '+'
    },
    {
        name: 'Южный лес',
        date: '2024-10-13',
        url: './maps/other/south_forest_rogaine_2024.webp',
        link: './original_maps/other/south_forest_rogaine_2024_omaps.webp',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/20860/',
        bounds: [[58.00696094882948, 56.30913734436036], [58.00691547430881, 56.4280128479004], [57.94077994318353, 56.309223175048835]],
        type: ['ROGAINE'],
        region: 'PERM',
    },
    {
        name: 'Южный лес',
        year: 1979,
        url: './maps/other/south_forest_1979.webp',
        link: './original_maps/other/south_forest_1979_omaps.webp',
        bounds: [[58.00020734974212, 56.31604671478272], [57.993270509361466, 56.37458324432374], [57.97645731285546, 56.307249069213874]],
        author: 'KNV_S',
        region: 'PERM',
        me: '+'
    },
    {
        name: 'Верхняя Курья, Закамский бор',
        year: 1983,
        date: '1987-01-09',
        url: './maps/other/zakamsky_bor_1983.webp',
        link: './original_maps/other/zakamsky_bor_1983_omaps.webp',
        bounds: [[58.083866500592436, 56.273860931396484], [58.07642393883224, 56.31531715393067], [58.05317863668797, 56.25411987304688]],
        region: 'PERM',
        me: '+'
    },
    {
        name: 'Кислотные дачи',
        year: 1981,
        date: '1987-01-01',
        url: './maps/other/kislotna_dacha_1981.webp',
        link: './original_maps/other/kislotna_dacha_1981_omaps.webp',
        bounds: [[58.100561235311254, 56.38784408569337], [58.0930427667502, 56.48088455200196], [58.08014541370967, 56.38282299041749]],
        region: 'PERM',
        me: '+'
    },
    {
        name: 'Липовая гора',
        year: 1985,
        url: './maps/other/lipovaya_gora_1985.webp',
        link: './original_maps/other/lipovaya_gora_1985_omaps.webp',
        bounds: [[57.97927902264021, 56.29587650299073], [57.97497810202448, 56.331710815429695], [57.9569723510297, 56.286478042602546]],
        region: 'PERM',
        me: '+'
    },
    {
        name: 'Полазна',
        year: 1982,
        url: './maps/other/polazna_1982.webp',
        link: './original_maps/other/polazna_1982_omaps.webp',
        bounds: [[58.291425886376366, 56.35033607482911], [58.284026659721725, 56.39719963073731], [58.27468518400182, 56.34153842926026]],
        region: 'PERM',
        me: '+'
    },
    // --- Ростов ---
    {
        name: 'Калитвенская',
        date: '2021-04-03',
        url: './maps/other/kalitvenskaya_2021_04_03.webp',
        link: './original_maps/other/kalitvenskaya_2021_04_03_omaps.webp',
        info: 'Кубок России.',
        bounds: [[48.25385542154695, 40.48556327819825], [48.25094075106392, 40.510153770446784], [48.22878954352343, 40.4793405532837]],
        author: ['DJCHKV','IDLBV'],
        region: 'ROSTOV',
    },
    // --- Свердловская обл, Екатеринбург ---
    {
        name: 'Верх-Нейвинский',
        date: '2019-08-24',
        url: './maps/other/verkh_neyvinsky_rrc_2019.webp',
        link: './original_maps/other/verkh_neyvinsky_rrc_2019_omaps.webp',
        about: 'https://rogaining-ural.ru/history',
        info: 'Чемпионат России по рогейну.',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/6247/',
        bounds: [[57.3599604183415, 60.141220092773445], [57.34509716809974, 60.31476974487305], [57.183762311675956, 60.09160995483399]],
        logo: 'rrc_2019.webp',
        start: 'RUSSIA_ROGAINE_CHAMP',
        region: 'EKB',
        type: ['ROGAINE']
    },
    {
        name: 'Серовский тракт',
        date: '2023-07-29',
        url: './maps/other/serovsky_trakt_rogaine_2023.webp',
        link: './original_maps/other/serovsky_trakt_rogaine_2023_omaps.webp',
        info: 'По болотам и по взгорьям. Шайтанская жесть.',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/16899/',
        bounds: [[57.27106185433673, 60.27254104614258], [57.25370204250074, 60.45175552368165], [57.1617538654921, 60.239582061767585]],
        region: 'EKB',
        type: ['ROGAINE']
    },
    {
        name: 'Исеть',
        date: '2025-04-19',
        url: './maps/other/iset_rogaine_2025.webp',
        link: './original_maps/other/iset_rogaine_2025_omaps.webp',
        info: 'За подснежниками.',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/22237/',
        bounds: [[56.992695781425326, 60.28172492980958], [56.979134094665014, 60.379915237426765], [56.934017661730735, 60.25477409362794]],
        region: 'EKB',
        type: ['ROGAINE']
    },
    {
        name: 'Северка',
        date: '2023-04-29',
        url: './maps/other/severka_rogaine_2023.webp',
        link: './original_maps/other/severka_rogaine_2023_omaps.webp',
        info: 'За подснежниками.',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/15906/',
        bounds: [[56.93710828790621, 60.32258033752442], [56.92493161114104, 60.42428970336915], [56.863613248718856, 60.29271125793458]],
        region: 'EKB',
        type: ['ROGAINE']
    },
    {
        name: 'Новоуральск',
        date: '2024-10-06',
        url: './maps/other/novouralsk_rogaine_2024.webp',
        link: './original_maps/other/novouralsk_rogaine_2024_omaps.gif',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/20751/',
        bounds: [[57.292541413168756, 59.9370288848877], [57.27375328497094, 60.08337020874024], [57.23038804230696, 59.910249710083015]],
        author: ['ASMLV_A','ASMLVA_O','BNDR_N','NCHKN','RZNV_A'],
        region: 'EKB',
        type: ['ROGAINE']
    },
    {
        name: 'Нижнеисетский л/п',
        date: '1990-03-11',
        url: './maps/other/nizhneisetsky_ussr_winter_champ_1990_03_11.webp',
        link: './original_maps/other/nizhneisetsky_ussr_winter_champ_1990_03_11_omaps.webp',
        gps: {
            'М':'./original_maps/other/nizhneisetsky_ussr_winter_champ_1990_03_11_m21_omaps.webp',
            'Ж':'./original_maps/other/nizhneisetsky_ussr_winter_champ_1990_03_11_w21_omaps.webp'
        },
        bounds: [[56.74693441826555, 60.67817687988282], [56.73935631374206, 60.75087547302247], [56.696494809579015, 60.66101074218751]],
        start: ['USSR_1990_WINTER','USSR_CHAMP'],
        author: 'KNTSVCH',
        type: ['WINTER']
    },
    {
        name: 'Нижнеисетский л/п',
        date: '1990-03-13',
        url: './maps/other/nizhneisetsky_ussr_winter_champ_1990_03_13.webp',
        link: './original_maps/other/nizhneisetsky_ussr_winter_champ_1990_03_13_m21_omaps.webp',
        gps: {
            'М':'./original_maps/other/nizhneisetsky_ussr_winter_champ_1990_03_13_m21_omaps.webp',
            'Ж':'./original_maps/other/nizhneisetsky_ussr_winter_champ_1990_03_13_w21_omaps.webp'
        },
        bounds: [[56.754275720104616, 60.61079978942872], [56.73926216618659, 60.72409629821778], [56.71953305203723, 60.600414276123054]],
        start: ['USSR_1990_WINTER','USSR_CHAMP'],
        author: 'KNTSVCH',
        type: ['WINTER']
    },
    {
        name: 'Нижнеисетский л/п',
        date: '1990-03-14',
        url: './maps/other/nizhneisetsky_ussr_winter_champ_1990_03_14.webp',
        link: './original_maps/other/nizhneisetsky_ussr_winter_champ_1990_03_14_omaps.webp',
        bounds: [[56.727020975474346, 60.622859001159675], [56.721746618604776, 60.67470073699952], [56.705118134929144, 60.618095397949226]],
        start: ['USSR_1990_WINTER','USSR_CHAMP'],
        author: 'KNTSVCH',
        type: ['WINTER']
    },
    {
        name: 'Верх-Нейвинский',
        date: '1991-01-27',
        url: './maps/other/verkh_neyvinsky_ussr_winter_champ_1991.webp',
        link: ['./original_maps/other/verkh_neyvinsky_ussr_winter_champ_1991_m21_omaps.webp','./original_maps/other/verkh_neyvinsky_ussr_winter_champ_1991_w21_omaps.webp'],
        bounds: [[57.304180600505504, 60.13851642608643], [57.29935843584592, 60.20151615142823], [57.26630496570789, 60.12778759002686]],
        start: ['USSR_1991_WINTER','USSR_CHAMP'],
        type: ['WINTER']
    },
    {
        name: 'Новоуральск, Мурзинка',
        date: '1991-01-26',
        url: './maps/other/murzinka_ussr_winter_champ_1991.webp',
        link: './original_maps/other/murzinka_ussr_winter_champ_1991_omaps.webp',
        bounds: [[57.21942258001789, 60.104999542236335], [57.21616948557652, 60.13529777526856], [57.18794848149075, 60.093412399292]],
        start: ['USSR_1991_WINTER','USSR_CHAMP'],
        type: ['WINTER']
    },
    {
        name: 'Шаманиха',
        date: '1991-01-24',
        url: './maps/other/shamanikha_ussr_winter_champ_1991.webp',
        link: './original_maps/other/shamanikha_ussr_winter_champ_1991_omaps.webp',
        bounds: [[57.13742697401689, 60.111522674560554], [57.13276928575067, 60.17271995544434], [57.09485721095755, 60.09916305541993]],
        results: './docs/1991/1991_02_24_shamanikha_ussr_winter_champ_omaps.pdf',
        planner: 'KNTSVCH',
        start: ['USSR_1991_WINTER','USSR_CHAMP'],
        type: ['WINTER']
    },
    {
        name: 'Екатеринбург, л/п Лесоводов России',
        date: '2022-12-24',
        url: './maps/other/ekb_lesovodov_rogaine_2022.webp',
        link: './original_maps/other/ekb_lesovodov_rogaine_2022_omaps.gif',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/14756/',
        info: 'Зимний рогейн МОРОЗКО.',
        bounds: [[56.81835698197009, 60.64521789550782], [56.81751142754765, 60.71439743041993], [56.76128626500326, 60.643672943115234]],
        region: 'EKB',
        type: ['ROGAINE']
    },
    {
        name: 'Уктус',
        date: '2020-04-25',
        url: './maps/other/uktus_rogaine_2020.webp',
        link: './original_maps/other/uktus_rogaine_2020_omaps.webp',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/7436/',
        bounds: [[56.77871285344666, 60.61449050903321], [56.779488748166244, 60.67684650421143], [56.725561182888775, 60.616850852966316]],
        region: 'EKB',
        type: ['ROGAINE']
    },
    {
        name: 'Ревда, Восточный',
        date: '2019-09-28',
        url: './maps/other/vostochny_rogaine_2019.webp',
        link: './original_maps/other/vostochny_rogaine_2019_omaps.webp',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/6490/',
        info: 'Моторогейн Каменный пояс.',
        bounds: [[56.82347687611756, 59.92964744567872], [56.803815486490315, 60.105514526367195], [56.69564650690871, 59.881753921508796]],
        author: 'KKRV_S',
        region: 'EKB',
        type: ['ROGAINE']
    },
    {
        name: 'Сысерть',
        date: '2022-04-30',
        url: './maps/other/sysert_rogaine_2022.webp',
        link: './original_maps/other/sysert_rogaine_2022_omaps.webp',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/12874/',
        info: 'Самоцветные дали.',
        bounds: [[56.515090191772835, 60.718517303466804], [56.49931793613863, 60.831127166748054], [56.44370752974828, 60.68538665771485]],
        author: ['TRNTSVA_M','SCHV_S','PTPV_AN','PTPV_A'],
        region: 'EKB',
        type: ['ROGAINE']
    },
    // --- Тула ---
    {
        name: 'Домнино',
        date: '2024-07-27',
        url: './maps/other/domnino_rogaine_2024.webp',
        link: './original_maps/other/domnino_rogaine_2024_omaps.webp',
        bounds: [[54.71138342808065, 37.39557266235352], [54.699481521997534, 37.52406120300294], [54.606725590472, 37.36613273620606]],
        info: 'Жаркий рогейн.',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/20103/',
        start: 'ZM',
        region: 'TULA',
        type: ['ROGAINE']
    },
    // --- Тверь ---
    {
        name: 'Нелидово',
        year: 2025,
        url: './maps/other/nelidovo_2025.webp',
        link: './original_maps/other/nelidovo_2025_omaps.gif',
        bounds: [[56.228949815008214, 32.78070330619813], [56.22815660823478, 32.78842806816102], [56.22246650837227, 32.7783215045929]],
        author: 'SVCHK',
        owner: 'SVCHK',
        region: 'TVER',
        type: ['CITY']
    },
    {
        name: 'Вышний Волочёк',
        year: 2023,
        url: './maps/other/vyshny_volochek_rogaine_2023.webp',
        link: ['./original_maps/other/vyshny_volochek_water_rogaine_2023_omaps.webp','./original_maps/other/vyshny_volochek_city_rogaine_2023_omaps.webp'],
        info: 'Золото Сенежа 2023.',
        bounds: [[57.61838204623763, 34.39544677734376], [57.5996226164685, 34.63165283203126], [57.509276532278115, 34.376049041748054]],
        start: 'ZM',
        region: 'TVER',
        type: ['ROGAINE','WATER']
    },
    // --- Челябинск ---
    {
        name: 'оз Большой Еланчик',
        year: 2003,
        url: './maps/other/big_elanchik_2003.webp',
        link: './original_maps/other/big_elanchik_2003_omaps.webp',
        bounds: [[54.934070703264204, 60.14761447906494], [54.92433053624889, 60.22795200347901], [54.89040649384628, 60.13182163238526]],
        author: ['SLDTV_S','EKSHV','SHRNN'],
        region: 'CHELYABINSK',
    },
    {
        name: 'Вишневогорск, оз Аракуль',
        date: '2025-08-16',
        url: './maps/other/arakul_rogaine_2025.webp',
        link: './original_maps/other/arakul_rogaine_2025_omaps.webp',
        info: 'Чемпионат Уральских гор.',
        bounds: [[56.04893766363342, 60.44677734375001], [56.026209725629016, 60.63423156738282], [55.97504692455578, 60.424633026123054]],
        gps: 'https://viewer.o-gps-center.ru/viewer/event/23261/',
        region: 'CHELYABINSK',
        type: ['ROGAINE']
    },
    {
        name: 'Кыштым',
        date: '2011-09-10',
        url: './maps/other/kyshtym_rrc_2011.webp',
        link: './original_maps/other/kyshtym_rrc_2011_omaps.webp',
        about: 'https://rrc2011.rogaining.ru/',
        info: '8-й Чемпионат России по рогейну.',
        bounds: [[55.800123135977486, 60.31185150146485], [55.76735178017714, 60.55037498474122], [55.62499151150313, 60.23537635803223]],
        author: ['KZLV_V','LNTV','CHRMNCH_A','GBDLN','VRBJV_V','PTPV_A','BLV_V','MLNKV_V','SLDTV_S','KNTSVCH','SPLKV','ZRN_A'],
        region: 'CHELYABINSK',
        start: 'RUSSIA_ROGAINE_CHAMP',
        type: ['ROGAINE']
    },
    {
        name: 'Кыштым, Слюдорудник',
        date: '2022-07-30',
        url: './maps/other/slyudorudnik_rrc_2022.webp',
        link: './original_maps/other/slyudorudnik_rrc_2022_omaps.webp',
        about: 'https://vk.com/rogein74',
        info: '19-й Чемпионат России по рогейну.',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/13759/',
        bounds: [[55.714782899689865, 60.28635978698731], [55.68377855290114, 60.5039405822754], [55.552767217118735, 60.216150283813484]],
        author: ['KZLV_V','BNDR_N','SLDTV_S','GBDLN','BLV_V','RKHMNKLV','NCHKN','PTPV_A','VRBJV_V','MSHRN_A','GRSHKN'],
        region: 'CHELYABINSK',
        start: 'RUSSIA_ROGAINE_CHAMP',
        type: ['ROGAINE']
    },
    // --- Юг ---
    {
        name: 'Советский',
        year: 2026,
        url: './maps/south/sovetsky_2026.webp',
        link: './original_maps/south/sovetsky_2026_omaps.gif',
        bounds: [[46.520042120783216, 38.143823146820075], [46.52002735573991, 38.149595260620124], [46.51433513263709, 38.14394116401673]],
        author: 'DRN_E',
        owner: 'DRN_E',
        region: 'KRASNODAR',
        type: ['CITY']
    },
    {
        name: 'Октябрьский',
        year: 2026,
        url: './maps/south/oktyabrsky_2026.webp',
        link: './original_maps/south/oktyabrsky_2026_omaps.gif',
        bounds: [[46.4949062089018, 38.27248334884644], [46.49506131332084, 38.287439346313484], [46.486308300694844, 38.272440433502204]],
        author: 'DRN_E',
        owner: 'DRN_E',
        region: 'KRASNODAR',
        type: ['CITY','PARK']
    },
    {
        name: 'Парк Краснодар',
        year: 2024,
        url: './maps/south/krasnodar_park_2024.webp',
        link: './original_maps/south/krasnodar_park_2024_omaps.pdf',
        bounds: [[45.046541218721764, 39.02678489685059], [45.04651089764259, 39.03708457946778], [45.03830845554792, 39.02667760849]],
        author: 'DRN_E',
        owner: 'DRN_E',
        region: 'KRASNODAR',
        type: ['PARK']
    },
    {
        name: 'аллея 80-летия Образования Краснодарского края, мкрр-он Юбилейный',
        year: 2026,
        url: './maps/south/krasnodar_80_years_2026.webp',
        link: './original_maps/south/krasnodar_80_years_2026_omaps.gif',
        bounds: [[45.03057494714876, 38.90502333641052], [45.030537035219815, 38.91541957855225], [45.02380347836107, 38.9048194885254]],
        author: 'DRN_E',
        owner: 'DRN_E',
        region: 'KRASNODAR',
        type: ['CITY']
    },
    {
        name: 'Александровский бульвар, к/т АВРОРА',
        year: 2026,
        url: './maps/south/avrora_2026.webp',
        link: './original_maps/south/avrora_2026_omaps.gif',
        bounds: [[45.059039714581594, 38.980275392532356], [45.059062450411176, 38.98499608039857], [45.05334031481211, 38.980296850204475]],
        author: 'DRN_E',
        owner: 'DRN_E',
        region: 'KRASNODAR',
        type: ['PARK','CITY']
    },
    {
        name: 'ЖК Светлоград',
        year: 2026,
        url: './maps/south/svetlograd_2026.webp',
        link: './original_maps/south/svetlograd_2026_omaps.gif',
        bounds: [[45.08318764763635, 38.8952922821045], [45.08321794926837, 38.902620077133186], [45.07567992306468, 38.89541029930115]],
        author: 'DRN_E',
        owner: 'DRN_E',
        region: 'KRASNODAR',
        type: ['CITY']
    },
    {
        name: 'Парк стд Кубань, Покровские оз',
        year: 2025,
        url: './maps/south/kuban_pokrovskie_2025.webp',
        link: './original_maps/south/kuban_pokrovskie_2025_omaps.gif',
        bounds: [[45.030665935675785, 38.990811109542854], [45.02951340364578, 39.00232315063477], [45.024561801368655, 38.989502191543586]],
        author: 'DRN_E',
        owner: 'DRN_E',
        region: 'KRASNODAR',
        type: ['PARK']
    },
    {
        name: 'Горячий ключ',
        year: 2013,
        url: './maps/south/hot_key_2013.webp',
        link: './original_maps/south/hot_key_2013_omaps.gif',
        bounds: [[44.65680962521428, 39.120168685913086], [44.65070391371675, 39.20393943786622], [44.60165174422536, 39.11055564880371]],
        author: 'ZAMOTA',
        owner: 'ZAMOTA',
        region: 'KRASNODAR'
    },
    {
        name: 'Сочи, Ахун',
        year: 2001,
        url: './maps/south/sochi_ahun_2001.webp',
        link: './original_maps/south/sochi_ahun_2001_omaps.gif',
        bounds: [[43.61165747364978, 39.79848861694337], [43.607742266333425, 39.8844051361084], [43.54229575224248, 39.79138612747193]],
        author: 'ZAMOTA',
        owner: 'ZAMOTA',
        region: 'KRASNODAR'
    },
    {
        name: 'Мацеста, Орлиные скалы',
        year: 1976,
        url: './maps/south/matsesta_1976.webp',
        link: './original_maps/south/matsesta_1976_omaps.webp',
        bounds: [[43.565715431592736, 39.79282379150391], [43.56823413778868, 39.822778701782234], [43.54693064746983, 39.79346752166749]],
        author: 'NKRSV_S',
        region: 'KRASNODAR'
    },
    {
        name: 'Сочи, хребет Ачишхо, эко-тропа',
        url: './maps/south/sochi_achishko_eco_trail.webp',
        link: './original_maps/south/sochi_achishko_eco_trail_omaps.gif',
        bounds: [[43.72973944370968, 40.17000675201417], [43.72555281372339, 40.20206451416016], [43.71624814386753, 40.1700496673584]],
        author: 'ZAMOTA',
        owner: 'ZAMOTA',
        region: 'KRASNODAR'
    },
    {
        name: 'Плато Лаго-Наки, Утюг',
        date: '2003-06-10',
        info: 'Чемпионат России.',
        url: './maps/south/lago_naki_iron_2003.webp',
        link: './original_maps/south/lago_naki_iron_2003_omaps.gif',
        bounds: [[44.10635453999059, 39.997830390930176], [44.104813753670705, 40.02486705780029], [44.07599365217524, 39.994783401489265]],
        author: 'ZAMOTA',
        owner: 'ZAMOTA',
        region: 'KRASNODAR',
        start: 'RUSSIA_CHAMP'
    },
    {
        name: 'бульвар Черняховского',
        year: 2025,
        url: './maps/south/chernyahovskogo_2025.webp',
        link: './original_maps/south/chernyahovskogo_2025_omaps.pdf',
        bounds: [[44.70843059571771, 37.78347373008729], [44.70849159520974, 37.78912782669068], [44.69915029925823, 37.78349518775941]],
        author: ['DRN_E','MSTPNV'],
        owner: 'DRN_E',
        region: 'NVRSYSK',
        type: ['PARK']
    },
    {
        name: 'Абрау-Мысхако',
        date: '2023-10-21',
        url: './maps/south/abrau_myskhako_rrc_2023.webp',
        link: './original_maps/south/abrau_myskhako_rrc_2023_omaps.webp',
        about: 'https://vk.com/novorosrogein',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/17658/',
        info: 'XX чемпионат России по рогейну.',
        bounds: [[44.788048764814604, 37.57101058959962], [44.77245227522474, 37.77125358581544], [44.66315888324934, 37.55049705505372]],
        author: ['GRSHKN','GLDKVA_S','SLMNV_G'],
        owner: 'RRF',
        start: 'RUSSIA_ROGAINE_CHAMP',
        region: 'NVRSYSK',
        type: ['ROGAINE']
    },
    {
        name: 'СЦ ЦСКА',
        year: 2024,
        url: './maps/south/gelendzhik_tsska_2024.webp',
        link: './original_maps/south/gelendzhik_tsska_2024_omaps.pdf',
        bounds: [[44.55543274163521, 38.083645105361946], [44.55579205872829, 38.08655261993409], [44.553590251046344, 38.08395624160767]],
        author: 'DRN_E',
        owner: 'DRN_E',
        region: 'GLNDZHK',
        type: ['CITY'],
    },
    {
        name: 'ул Леселидзе',
        year: 2025,
        url: './maps/south/leselidze_2025.webp',
        link: './original_maps/south/leselidze_2025_omaps.gif',
        bounds: [[44.551870030829285, 38.06358218193055], [44.551870030829285, 38.07508349418641], [44.548207703775745, 38.063678741455085]],
        author: ['DRN_E','GRBNKO'],
        owner: 'DRN_E',
        region: 'GLNDZHK',
        type: ['CITY'],
    },
    {
        name: 'Архипо-Осиповка, школа №17',
        year: 2025,
        url: './maps/south/arhipo_osipovka_school_17_2024.webp',
        link: './original_maps/south/arhipo_osipovka_school_17_2024_omaps.gif',
        bounds: [[44.37178456062143, 38.53595137596131], [44.37111734025328, 38.54298949241639], [44.367811803106044, 38.535372018814094]],
        author: ['DRN_E','ZZV_E'],
        owner: 'DRN_E',
        region: 'GLNDZHK',
        type: ['CITY']
    },
    {
        name: 'Возрождение, Широкая щель',
        year: 2002,
        url: './maps/south/gelendzhik_vozrozhdenie_2002.webp',
        link: './original_maps/south/gelendzhik_vozrozhdenie_2002_omaps.gif',
        bounds: [[44.59508183834914, 38.14629077911378], [44.58429335853355, 38.24830055236817], [44.55332266457437, 38.13753604888917]],
        author: 'ZAMOTA',
        owner: 'ZAMOTA',
        region: 'GLNDZHK',
    },
    {
        name: 'Цегельская щель',
        year: 2002,
        url: './maps/south/tsegelska_gap_2002.webp',
        link: './original_maps/south/tsegelska_gap_2002_omaps.gif',
        bounds: [[44.6063571736826, 38.115348815917976], [44.60427949857492, 38.15860748291016], [44.57359458845357, 38.11221599578858]],
        author: 'ZAMOTA',
        owner: 'ZAMOTA',
        region: 'GLNDZHK',
    },
    {
        name: 'Нижний Архыз',
        year: 1987,
        url: './maps/south/nizhny_archyz_1987.webp',
        link: './original_maps/south/nizhny_archyz_1987_omaps.jpg',
        bounds: [[43.70570110447654, 41.46034240722657], [43.70455322644414, 41.498408317565925], [43.678332191097546, 41.46330356597901]],
        author: 'SKRSKY_A',
        region: 'KRCHCHRK',
    },
    {
        name: 'Архыз, поляна Таулу',
        year: 2005,
        url: './maps/south/archyz_taulu_2005.webp',
        link: './original_maps/south/archyz_taulu_2005_omaps.gif',
        bounds: [[43.53744272839921, 41.22186183929444], [43.536462743491214, 41.24653816223145], [43.51407430725295, 41.22038125991822]],
        author: 'ZAMOTA',
        owner: 'ZAMOTA',
        region: 'KRCHCHRK'
    },
    {
        name: 'Домбай, отель Гранд Виктория',
        year: 2025,
        url: './maps/south/dombai_2025.webp',
        link: './original_maps/south/dombai_2025_omaps.gif',
        bounds: [[43.29037338009644, 41.61844253540039], [43.29003757536656, 41.62283062934876], [43.287483836877826, 41.6178846359253]],
        author: 'ZHRDV_T',
        owner: 'ZHRDV_T',
        region: 'KRCHCHRK',
        type: ['CITY']
    },
    {
        name: 'Альплагерь Безенги',
        year: 2022,
        url: './maps/south/bezengi_2022.webp',
        link: ['./original_maps/south/bezengi_2022_omaps.gif','./original_maps/south/bezengi_2022_omaps.ocd'],
        bounds: [[43.11300637206235, 43.1458854675293], [43.11263826098369, 43.149629831314094], [43.10854972951116, 43.14490914344788]],
        author: 'SMRNV_S',
        owner: 'SMRNV_S',
        region: 'KABARDA',
        type: ['CITY']
    },
    {
        name: 'Терскол',
        date: '2021-08-14',
        url: './maps/south/terskol_rrc_2021.webp',
        link: './original_maps/south/terskol_rrc_2021_omaps.webp',
        info: 'Открытый Чемпионат России по рогейну.',
        bounds: [[43.29744827659319, 42.46215820312501], [43.28282904077466, 42.59905815124512], [43.22588051343216, 42.448253631591804]],
        start: ['ZM','RUSSIA_ROGAINE_CHAMP'],
        region: 'KABARDA',
        type: ['ROGAINE']
    },

    // --- Не Россия ---
    {
        name: 'Черновцы, Вижница',
        date: '1985-08-24',
        url: './maps/other/vizhnitsa_1985_08_24.webp',
        link: ['./original_maps/other/vizhnitsa_1985_08_24_m21_omaps.webp','./original_maps/other/vizhnitsa_1985_08_24_w21_omaps.webp'],
        gps: {
            'М':'./original_maps/other/vizhnitsa_1985_08_24_m21_tracks_omaps.webp',
            'Ж':'./original_maps/other/vizhnitsa_1985_08_24_w21_tracks_omaps.webp'
        },
        bounds: [[48.2437962482326, 25.139207839965824], [48.24276735761622, 25.179162025451664], [48.19816221664037, 25.13504505157471]],
        results: './docs/1985/1985_ussr_champ_results_omaps.xlsx',
        author: ['KLTKV_A','DCHNKO_G','GMNKO_V','SRGCHK_N','MLR_P','TRSV_S','RBK_V','SKHRV_S','UGNCHV_V','GRLY_D','BRDV_M','KHNK_V','SLTY_S','MSHNV_A'],
        start: ['USSR_1985','USSR_CHAMP']
    },
    {
        name: 'Черновцы, Снячев',
        date: '1985-08-25',
        url: './maps/other/chernovtsy_1985_08_25.webp',
        link: ['./original_maps/other/chernovtsy_1985_08_25_omaps.webp','./original_maps/other/chernovtsy_1985_08_25_m21_omaps.webp','./original_maps/other/chernovtsy_1985_08_25_w21_omaps.webp'],
        gps: {
            'Ж':'./original_maps/other/chernovtsy_1985_08_25_w21_tracks_omaps.webp'
        },
        bounds: [[48.1845155776972, 25.829308032989506], [48.18236954911603, 25.86879014968872], [48.13859959165873, 25.823428630828857]],
        results: './docs/1985/1985_ussr_champ_results_omaps.xlsx',
        author: 'SHTMPLR',
        start: ['USSR_1985','USSR_CHAMP']
    },
    {
        name: 'Черновцы, Берегомет',
        date: '1985-08-26',
        url: './maps/other/beregomet_1985_08_26.webp',
        link: ['./original_maps/other/beregomet_1985_08_26_omaps.webp','./original_maps/other/beregomet_1985_08_26_m21_omaps.webp'],
        bounds: [[48.16711585114587, 25.306749343872074], [48.16433936174958, 25.344600677490238], [48.13121026548213, 25.30331611633301]],
        results: './docs/1985/1985_ussr_champ_results_omaps.xlsx',
        author: ['LPKA_V','PDLSNK_A','IVNNKO_V'],
        start: ['USSR_1985','USSR_CHAMP']
    },
    {
        name: 'Каркаралинск',
        date: '1986-09-11',
        url: './maps/other/karkaralinsk_1986.webp',
        link: './original_maps/other/karkaralinsk_1986_omaps.jpg',
        bounds: [[49.38385349051448, 75.43367385864259], [49.381674326472776, 75.4750442504883], [49.35151930828741, 75.43144226074219]],
        author: ['AFNSV_L','GLTSKY_V','KLM_K','KVLVSKY_G'],
        results: './docs/1986/1986_09_09_ussr_karaganda_omaps.pdf',
        start: ['USSR_1986','USSR_CHAMP']
    },
    {
        name: 'Cēsis, Branti Parish',
        date: '1983-08-19',
        url: './maps/other/branti_parish_1983_08_19.webp',
        link: './original_maps/other/branti_parish_1983_08_19_m21_omaps.webp',
        gps: {
            'М':'./original_maps/other/branti_parish_1983_08_19_m21_omaps.webp',
            'Ж':'./original_maps/other/branti_parish_1983_08_19_w21_omaps.webp'
        },
        author: 'KRLS_M',
        results: './docs/1983/1983_ussr_champ_results_omaps.xlsx',
        bounds: [[57.384395293116505, 25.708093643188477], [57.38323870589683, 25.762596130371097], [57.35840955041665, 25.706720352172855]],
        start: ['USSR_1983','USSR_CHAMP']
    },
    {
        name: 'Cēsis, Kārļi',
        date: '1983-08-20',
        info: 'Эстафета.',
        url: './maps/other/karli_1983_08_20.webp',
        link: './original_maps/other/karli_1983_08_20_omaps.webp',
        results: './docs/1983/1983_ussr_champ_results_omaps.xlsx',
        bounds: [[57.275980527072676, 25.176930427551273], [57.27412450134422, 25.236711502075195], [57.254189528519895, 25.17422676086426]],
        author: ['KSLV_V','ZDNSH','ZVTSKS','LPNSH'],
        start: ['USSR_1983','USSR_CHAMP']
    },
    {
        name: 'Cēsis, Līgatne',
        date: '1983-08-21',
        url: './maps/other/ligatne_1983_08_21.webp',
        link: './original_maps/other/ligatne_1983_08_21_omaps.webp',
        gps: {
            'М':'./original_maps/other/ligatne_1983_08_21_m21_omaps.webp',
            'Ж':'./original_maps/other/ligatne_1983_08_21_w21_omaps.webp'
        },
        results: './docs/1983/1983_ussr_champ_results_omaps.xlsx',
        bounds: [[57.257300001726236, 25.034923553466797], [57.25616262033581, 25.079298019409183], [57.221444001363786, 25.032606124877933]],
        author: 'KSLV_V',
        start: ['USSR_1983','USSR_CHAMP']
    },
    {
        name: 'Tartu, Maaritsa',
        date: '1984-08-17',
        url: './maps/other/maaritsa_1984_08_17.webp',
        link: ['./original_maps/other/maaritsa_1984_08_17_m21_omaps.webp','./original_maps/other/maaritsa_1984_08_17_w21_omaps.webp'],
        gps: {
            'М':'./original_maps/other/maaritsa_1984_08_17_m21_tracks_omaps.webp',
            'Ж':'./original_maps/other/maaritsa_1984_08_17_w21_tracks_omaps.webp'
        },
        results: './docs/1984/1984_ussr_champ_results_omaps.xlsx',
        bounds: [[58.153633003794845, 26.605110168457035], [58.149511557476046, 26.677980422973636], [58.11897081971611, 26.59747123718262]],
        author: ['KRNR_O','RMM_K'],
        start: ['USSR_1984','USSR_CHAMP']
    },
    {
        name: 'Tartu, Hellenurme',
        date: '1984-08-18',
        url: './maps/other/hellenurme_1984_08_18.webp',
        link: './original_maps/other/hellenurme_1984_08_18_m21_lap1_omaps.webp',
        gps: {
            'М1':'./original_maps/other/hellenurme_1984_08_18_m21_lap1_tracks_omaps.webp',
            'М2':'./original_maps/other/hellenurme_1984_08_18_m21_lap2_tracks_omaps.webp',
            'Ж':'./original_maps/other/hellenurme_1984_08_18_w21_tracks_omaps.webp'
        },
        results: './docs/1984/1984_ussr_champ_results_omaps.xlsx',
        bounds: [[58.15218375839495, 26.407356262207035], [58.14996448700613, 26.456794738769535], [58.11443732170355, 26.399803161621097]],
        author: ['ORS_P','PNI_T','RD_T','VRM_A'],
        start: ['USSR_1984','USSR_CHAMP']
    },
    {
        name: 'Tartu, Alalooga',
        date: '1984-08-19',
        url: './maps/other/alalooga_1984_08_19.webp',
        link: ['./original_maps/other/alalooga_1984_08_19_omaps.webp','./original_maps/other/alalooga_1984_08_19_cps_omaps.webp'],
        gps: {
            'Левичева':'./original_maps/other/alalooga_1984_08_19_w21_tracks_omaps.webp'
        },
        results: './docs/1984/1984_ussr_champ_results_omaps.xlsx',
        bounds: [[58.184551266010935, 26.403622627258304], [58.184008278113694, 26.44469261169434], [58.15150440429871, 26.400575637817386]],
        author: 'KLM_K',
        start: ['USSR_1984','USSR_CHAMP']
    },
    {
        name: 'Nový Bor',
        year: 1978,
        url: './maps/other/novy_bor_1978.webp',
        link: './original_maps/other/novy_bor_1978_omaps.webp',
        info: '21-23 июля. Boženka.',
        bounds: [[50.816510450497844, 14.503197669982912], [50.816903604316245, 14.547872543334963], [50.78415204177409, 14.504313468933107]],
        logo: 'bozenka.gif',
        region: 'CZECH'
    },
    {
        name: 'HARBIN',
        date: '1991-09-29',
        url: './maps/other/harbin_1991.webp',
        link: './original_maps/other/harbin_1991_omaps.webp',
        bounds: [[45.72170128915057, 127.4004650115967], [45.724652379258934, 127.42694377899171], [45.70551995420854, 127.40552902221681]],
        author: ['MTKV_A','TRNV_VL','CHRNH_Y'],
        region: 'CHINA'
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
    {
        name: 'Colegio do Rosário',
        year: 2025,
        url: './maps/other/portugal/colegio_do_rosário_2025.webp',
        link: './original_maps/other/portugal/colegio_do_rosário_2025_omaps.gif',
        bounds: [[41.16434321071699, -8.6577844619751], [41.164391672294805, -8.65603566169739], [41.162622801486314, -8.657848834991457]],
        region: 'PORTUGAL',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Ermesinde',
        year: 2026,
        url: './maps/other/portugal/ermesinde_2026.webp',
        link: './original_maps/other/portugal/ermesinde_2026_omaps.gif',
        bounds: [[41.22210010926726, -8.554337024688722], [41.22203555075753, -8.542470932006838], [41.20576477476002, -8.554530143737795]],
        region: 'PORTUGAL',
        type: ['CITY','SPRINT'],
        author: 'MSTPNV',
        owner: 'MSTPNV'
    },
    {
        name: 'Escola Básica António Fernandes de Sá',
        year: 2026,
        url: './maps/other/portugal/escola_basica_antonio_fernandes_de_sa_2026.webp',
        link: './original_maps/other/portugal/escola_basica_antonio_fernandes_de_sa_2026_omaps.gif',
        bounds: [[41.12966784708218, -8.59284281730652], [41.12967592828674, -8.590160608291628], [41.127906120735304, -8.592724800109865]],
        region: 'PORTUGAL',
        type: ['CITY','SPRINT'],
        author: 'MSTPNV',
        owner: 'MSTPNV'
    },
    {
        name: 'Escola Básica de Miragaia',
        year: 2024,
        url: './maps/other/portugal/escola_basica_de_miragaia_2024.webp',
        link: './original_maps/other/portugal/escola_basica_de_miragaia_2024_omaps.gif',
        bounds: [[41.14439015047017, -8.619675636291506], [41.14436591229142, -8.618677854537966], [41.1432024691752, -8.619686365127565]],
        region: 'PORTUGAL',
        type: ['CITY','SPRINT'],
        author: 'MSTPNV',
        owner: 'MSTPNV'
    },
    {
        name: 'Escola Básica de Rio Tinto',
        year: 2024,
        url: './maps/other/portugal/escola_basica_de_rio_tinto_2024.webp',
        link: './original_maps/other/portugal/escola_basica_de_rio_tinto_2024_omaps.gif',
        bounds: [[41.17094173241573, -8.557813167572023], [41.170990189113446, -8.555356264114382], [41.16935071760144, -8.557866811752321]],
        region: 'PORTUGAL',
        type: ['CITY','SPRINT'],
        author: 'MSTPNV',
        owner: 'MSTPNV'
    },
    {
        name: 'Escola básica Dom Maria',
        year: 2025,
        url: './maps/other/portugal/escola_basica_dom_maria_2025.webp',
        link: './original_maps/other/portugal/escola_basica_dom_maria_2025_omaps.gif',
        bounds: [[41.41788630655365, -8.51519823074341], [41.41792653455813, -8.512526750564577], [41.41576223252812, -8.515251874923708]],
        region: 'PORTUGAL',
        type: ['CITY','SPRINT'],
        author: 'MSTPNV',
        owner: 'MSTPNV'
    },
    {
        name: 'Escola Básica Dr. Costa Matos',
        year: 2025,
        url: './maps/other/portugal/escola_basica_dr_costa_matos_2025.webp',
        link: './original_maps/other/portugal/escola_basica_dr_costa_matos_2025_omaps.gif',
        bounds: [[41.12407541488788, -8.62105965614319], [41.124051169202, -8.618752956390383], [41.122483262495564, -8.62107038497925]],
        region: 'PORTUGAL',
        type: ['CITY','SPRINT'],
        author: 'MSTPNV',
        owner: 'MSTPNV'
    },
    {
        name: 'Escola básica Leça da Palmeira',
        year: 2024,
        url: './maps/other/portugal/escola_basica_leca_da_palmeira_2024.webp',
        link: './original_maps/other/portugal/escola_basica_leca_da_palmeira_2024_omaps.gif',
        bounds: [[41.198410928894106, -8.70170831680298], [41.19842707435653, -8.699444532394411], [41.19617474387565, -8.701633214950563]],
        region: 'PORTUGAL',
        type: ['CITY','SPRINT'],
        author: 'MSTPNV',
        owner: 'MSTPNV'
    },
    {
        name: 'Escola básica Manoel de Oliveira',
        year: 2026,
        url: './maps/other/portugal/escola_basica_manoel_de_oliveira_2026.webp',
        link: './original_maps/other/portugal/escola_basica_manoel_de_oliveira_2026_omaps.gif',
        bounds: [[41.16919726742927, -8.667826652526857], [41.16919726742927, -8.665466308593752], [41.167985806083344, -8.667869567871096]],
        region: 'PORTUGAL',
        type: ['CITY','SPRINT'],
        author: 'MSTPNV',
        owner: 'MSTPNV'
    },
    {
        name: 'Escola secundária Abel Salazar',
        year: 2025,
        url: './maps/other/portugal/escola_secundaria_abel_salazar_2025.webp',
        link: './original_maps/other/portugal/escola_secundaria_abel_salazar_2025_omaps.gif',
        bounds: [[41.19722422650261, -8.608367443084719], [41.19712735188814, -8.605771064758303], [41.19464085438343, -8.608506917953493]],
        region: 'PORTUGAL',
        type: ['CITY','SPRINT'],
        author: 'MSTPNV',
        owner: 'MSTPNV'
    },
    {
        name: 'Escola secundária Augusto Gomes',
        year: 2025,
        url: './maps/other/portugal/escola_secundaria_augusto_gomes_2025.webp',
        link: './original_maps/other/portugal/escola_secundaria_augusto_gomes_2025_omaps.gif',
        bounds: [[41.183111313666906, -8.680615425109865], [41.18307094055977, -8.678104877471926], [41.18110877755345, -8.680583238601686]],
        region: 'PORTUGAL',
        type: ['CITY','SPRINT'],
        author: 'MSTPNV',
        owner: 'MSTPNV'
    },
    {
        name: 'Escola Secundária de São Pedro da Cova',
        year: 2024,
        url: './maps/other/portugal/escola_secundaria_de_sao_pedro_da_cova_2024.webp',
        link: './original_maps/other/portugal/escola_secundaria_de_sao_pedro_da_cova_2024_omaps.gif',
        bounds: [[41.15942417414414, -8.5174298286438], [41.15945648429171, -8.51595997810364], [41.15762285822115, -8.517333269119264]],
        region: 'PORTUGAL',
        type: ['CITY','SPRINT'],
        author: 'MSTPNV',
        owner: 'MSTPNV'
    },
    {
        name: 'Esola secundária Camila Castelo Branco',
        year: 2025,
        url: './maps/other/portugal/esola_secundaria_camila_castelo_branco_2025.webp',
        link: './original_maps/other/portugal/esola_secundaria_camila_castelo_branco_2025_omaps.gif',
        bounds: [[41.40509253736082, -8.525229692459108], [41.40514082047109, -8.520916700363161], [41.40327384741321, -8.525272607803347]],
        region: 'PORTUGAL',
        type: ['CITY','SPRINT'],
        author: 'MSTPNV',
        owner: 'MSTPNV'
    },
    {
        name: 'Parque d o Carriçal',
        year: 2025,
        url: './maps/other/portugal/parque_d_o_carrical_2025.webp',
        link: './original_maps/other/portugal/parque_d_o_carrical_2025_omaps.gif',
        bounds: [[41.18592929504344, -8.662054538726808], [41.18656715938278, -8.653578758239748], [41.181859735771766, -8.661625385284426]],
        region: 'PORTUGAL',
        type: ['CITY','SPRINT','PARK'],
        author: 'MSTPNV',
        owner: 'MSTPNV'
    },
];
