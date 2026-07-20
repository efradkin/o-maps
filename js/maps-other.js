let otherMaps = [
    // --- Алтай ---
    {
        name: 'Чернопятово',
        date: '2025-07-05',
        area: 142,
        url: './maps/other/chernopiatovo_rogaine_2025.webp',
        link: './original_maps/other/chernopiatovo_rogaine_2025_omaps.webp',
        o_gps: 23058,
        info: 'Касмалинская долина.',
        bounds: [[53.4550425, 83.0844498], [53.4497269, 83.3706093], [53.3375359, 83.0794716]],
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
        o_gps: 19972,
        info: 'Косихинское раздолье.',
        bounds: [[53.4230367, 84.3806648], [53.4292762, 84.6912003], [53.2926178, 84.3897629]],
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
        o_gps: 23354,
        bounds: [[64.4779716, 40.9055328], [64.4707964, 40.9644985], [64.4601411, 40.893774]],
        type: ['ROGAINE'],
        region: 'ARKHANGELSK'
    },
    // --- Владимирская обл ---
    {
        name: 'Радужный',
        year: 2021,
        hidden: true,
        url: './maps/olive.png',
        bounds: [[56.0259219, 40.3139877], [56.0174314, 40.3806782], [55.9940129, 40.3014565]],
        region: 'VLADIMIR',
        author: ['TKMKV_K','KVZN','LUK_V'],
        owner: 'GRN_V'
    },
    {
        name: 'Ковров, Гридино',
        year: 2026,
        url: './maps/other/kovrov_gridino_2026.webp',
        link: './original_maps/other/kovrov_gridino_2026_omaps.gif',
        bounds: [[56.337131, 41.3350296], [56.334193, 41.3575816], [56.3278048, 41.3314033]],
        region: 'VLADIMIR',
        author: 'SMRNV_K',
        owner: 'SMRNV_K'
    },
    {
        name: 'Ковров, Аскона',
        year: 2025,
        url: './maps/other/kovrov_askona_2025.webp',
        link: './original_maps/other/kovrov_askona_2025_omaps.gif',
        bounds: [[56.3402292, 41.2792075], [56.3387128, 41.2908912], [56.3341454, 41.2769651]],
        region: 'VLADIMIR',
        author: 'SMRNV_K',
        owner: 'SMRNV_K'
    },
    {
        name: 'Ковров, Треугольник',
        year: 2026,
        url: './maps/other/kovrov_triangle_2026.webp',
        link: './original_maps/other/kovrov_triangle_2026_omaps.gif',
        bounds: [[56.3427802, 41.3065553], [56.3410618, 41.3201272], [56.3370239, 41.3041735]],
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
        bounds: [[56.9681876, 40.9292221], [56.9505917, 41.1420822], [56.7894094, 40.8792686]],
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
        bounds: [[56.7152468, 38.3359337], [56.6749043, 38.6808014], [56.5287258, 38.2636642]],
        o_gps: 9803,
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
        bounds: [[55.917035, 39.3453026], [55.8943738, 39.5440865], [55.8390847, 39.3169785]],
        o_gps: 23267,
        owner: 'OPEN_BAND',
        region: 'VLADIMIR',
        type: ['ROGAINE']
    },
    // --- Вологодская обл ---
    {
        name: 'Череповец',
        date: '2023-04-16',
        url: './maps/other/cherepovets_rogaine_2023.webp',
        link: './original_maps/other/cherepovets_rogaine_2023_omaps.webp',
        bounds: [[59.1479015, 37.8992271], [59.1475494, 37.9944134], [59.1109522, 37.8981113]],
        o_gps: 15610,
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
        bounds: [[41.3005722, 47.8152037], [41.291383, 47.8816795], [41.2626464, 47.8051615]],
        o_gps: 17390,
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
        bounds: [[50.2070658, 136.8826103], [50.2099497, 136.9068575], [50.188907, 136.8865156]],
        logo: 'amursk_snake.jpg',
        author: 'TRFNV_A',
        region: 'DV'
    },
    {
        name: 'Благовещенск, Моховая падь',
        date: '2025-10-12',
        url: './maps/dv/blagoveschensk_mokhova_pad_rogaine_2025.webp',
        link: './original_maps/dv/blagoveschensk_mokhova_pad_rogaine_2025_omaps.webp',
        o_gps: 23628,
        bounds: [[50.4005306, 127.5404549], [50.413413, 127.632165], [50.3605207, 127.5538445]],
        author: 'MLNN_V',
        type: ['ROGAINE'],
        region: 'DV'
    },
    {
        name: 'Раздольное',
        date: '2024-06-22',
        url: './maps/dv/razdolnoe_rogaine_2024.webp',
        link: './original_maps/dv/razdolnoe_rogaine_2024_omaps.webp',
        o_gps: 19794,
        bounds: [[43.6075558, 131.83671], [43.6135528, 131.8928003], [43.5562305, 131.847353]],
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
        o_gps: 16531,
        info: 'МТБ-рогейн.',
        bounds: [[43.3667481, 131.8036652], [43.3874602, 131.9955826], [43.2785176, 131.8234921]],
        type: ['ROGAINE','VELO'],
        region: 'DV'
    },
    {
        name: 'Тавричанка',
        date: '2025-09-14',
        url: './maps/dv/tavrichanka_rogaine_2025.webp',
        link: './original_maps/dv/tavrichanka_rogaine_2025_omaps.webp',
        o_gps: 23374,
        info: 'Рогейн Надеждинский.',
        bounds: [[43.3223678, 131.812892], [43.3268947, 131.8464947], [43.2928567, 131.8200159]],
        type: ['ROGAINE'],
        region: 'DV'
    },
    {
        name: 'о Русский',
        date: '2022-11-12',
        url: './maps/dv/russky_island_rogaine_2022.webp',
        link: './original_maps/dv/russky_island_rogaine_2022_omaps.webp',
        o_gps: 14596,
        info: 'Чемпионат ДВФО.',
        bounds: [[43.0601088, 131.8429327], [43.0682294, 131.9241285], [42.9526534, 131.8616009]],
        type: ['ROGAINE'],
        region: 'DV'
    },
    {
        name: 'о Русский',
        date: '2023-07-15',
        url: './maps/dv/russky_island_rogaine_2023.webp',
        link: './original_maps/dv/russky_island_rogaine_2023_omaps.webp',
        o_gps: 16781,
        info: 'Морской рогейн.',
        bounds: [[43.0662542, 131.8007469], [43.0744994, 131.8896246], [42.9728156, 131.8172264]],
        type: ['ROGAINE'],
        region: 'DV'
    },
    {
        name: 'Атамановка',
        year: 1988,
        url: './maps/dv/atamanovka_1988.webp',
        link: './original_maps/dv/atamanovka_1988_omaps.jpg',
        bounds: [[51.9470689, 113.6472559], [51.951354, 113.6863947], [51.9212438, 113.6525774]],
        author: ['GSMNV_R','BCHNV_A'],
        region: 'CHITA'
    },
    {
        name: 'Верх.Карповка',
        year: 1985,
        url: './maps/dv/high_karpovka_1985.webp',
        link: './original_maps/dv/high_karpovka_1985_omaps.jpg',
        bounds: [[52.2381552, 113.5289383], [52.2418868, 113.5726261], [52.2113409, 113.5353756]],
        author: ['KUZNTSV_V_DV','VEKOVISCH','KUZNTSV_S_DV','PNCHKV'],
        region: 'CHITA'
    },
    {
        name: 'гора Чита',
        year: 1986,
        url: './maps/dv/chita_mntn_1986.webp',
        link: './original_maps/dv/chita_mntn_1986_omaps.jpg',
        bounds: [[52.0411412, 113.5394955], [52.0446783, 113.5801792], [52.0186453, 113.5464048]],
        author: ['BBRN_R','VHTV_A'],
        region: 'CHITA'
    },
    {
        name: 'Карповка',
        year: 1986,
        url: './maps/dv/karpovka_1986.webp',
        link: './original_maps/dv/karpovka_1986_omaps.jpg',
        bounds: [[52.2168102, 113.5447311], [52.220754, 113.5894489], [52.1892464, 113.5491943]],
        author: ['VHTV_A','PNCHKV','ATMNTSV'],
        region: 'CHITA'
    },
    /*
        {
            name: 'Лебяжьи озера',
            year: 1,
            url: './maps/dv/swan_lakes_old.webp',
            link: './original_maps/dv/swan_lakes_old_omaps.jpg',
            bounds: [[52.2168102, 113.5447311], [52.220754, 113.5894489], [52.1892464, 113.5491943]],
            author: ['VHTV_A','PNCHKV','ATMNTSV'],
            region: 'CHITA'
        },
    */
    {
        name: 'Окружная',
        year: 1986,
        url: './maps/dv/ring_road_1986.webp',
        link: './original_maps/dv/ring_road_1986_omaps.jpg',
        bounds: [[52.0794533, 113.4867954], [52.0814049, 113.510313], [52.0634411, 113.490057]],
        author: ['ATMNTSV','BBRN_R'],
        logo: 'chita_mikky.webp',
        region: 'CHITA'
    },
    {
        name: 'Орбита',
        year: 1985,
        url: './maps/dv/orbita_1985.webp',
        link: './original_maps/dv/orbita_1985_omaps.jpg',
        bounds: [[52.0549447, 113.5160208], [52.0576099, 113.5495377], [52.0362839, 113.5202694]],
        author: ['VEKOVISCH','KUZNTSV_V_DV','KUZNTSV_S_DV','PNCHKV'],
        logo: 'chita_mikky.webp',
        region: 'CHITA'
    },
    {
        name: 'р Сухая',
        year: 1988,
        url: './maps/dv/dry_river_1988.webp',
        link: './original_maps/dv/dry_river_1988_omaps.jpg',
        bounds: [[52.0833565, 113.5065365], [52.0868902, 113.5553741], [52.0363895, 113.5167503]],
        author: ['GSMNV_R','ATMNTSV'],
        region: 'CHITA'
    },
    {
        name: 'гора Батарейная',
        year: 1,
        url: './maps/dv/batareynaya_old.webp',
        link: './original_maps/dv/batareynaya_old_omaps.jpg',
        bounds: [[52.0214447, 113.5199261], [52.0208373, 113.5605669], [51.9946847, 113.5195398]],
        region: 'CHITA'
    },
    // --- Иркутск ---
    {
        name: 'Одинск',
        date: '2024-08-25',
        url: './maps/other/odinsk_rogaine_2024.webp',
        link: './original_maps/other/odinsk_rogaine_2024_omaps.webp',
        o_gps: 20260,
        info: 'Бегущие от медведя.',
        bounds: [[52.4715928, 103.7471581], [52.4600888, 103.782177], [52.4394002, 103.7181044]],
        author: ['JASHPTRV','PZDV_S','PLKTV_V'],
        region: 'IRKUTSK',
        type: ['ROGAINE']
    },
    {
        name: 'Ершовский залив',
        date: '2023-08-26',
        url: './maps/other/ershovsky_rogaine_2023.webp',
        link: './original_maps/other/ershovsky_rogaine_2023_omaps.webp',
        o_gps: 17068,
        info: 'Бегущие от медведя.',
        bounds: [[52.216968, 104.2777205], [52.2324519, 104.3319654], [52.1450772, 104.33321]],
        region: 'IRKUTSK',
        type: ['ROGAINE']
    },
    // --- Калининградская обл ---
    {
        name: 'Матросовский лес',
        year: 2021,
        url: './maps/other/matrosovsky_forest_2021.webp',
        link: './original_maps/other/matrosovsky_forest_2021_omaps.gif',
        bounds: [[54.8460277, 20.5759335], [54.8440262, 20.609107], [54.8171319, 20.5708694]],
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
        bounds: [[55.0034534, 36.457926], [55.0031089, 36.4615846], [55.0012751, 36.4572072]],
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
        bounds: [[54.8147333, 35.5181122], [54.7888092, 35.7091713], [54.7151021, 35.4776001]],
        region: 'KLGA',
        type: ['ROGAINE']
    },
    // --- Карелия ---
    {
        name: 'Сортавала, оз Хелмиярви',
        year: 1992,
        url: './maps/other/sortavala_helmijarvi_1992.webp',
        link: './original_maps/other/sortavala_helmijarvi_1992_omaps.jpg',
        bounds: [[61.7709916, 30.6598806], [61.7647998, 30.7433081], [61.7504829, 30.6519413]],
        author: ['KHDNKCH','SCHV_V','NSNV'],
        region: 'KARELIA'
    },
    {
        name: 'Сортавала, оз Хелмиярви',
        year: 2024,
        url: './maps/other/sortavala_helmijarvi_2024.webp',
        link: './original_maps/other/sortavala_helmijarvi_2024_omaps.gif',
        info: 'Комментарий автора, Владимира Люка: "Карта получилась очень тяжелая и интересная. В этом районе можно получить очень объективную информацию о всесторонней (физической, технической, психологической) готовности спортсменов. В процессе ориентирования спортсменам придется преодолевать достаточно сложный рельеф в сочетании с тяжелыми грунтами и очень плохой проходимость. Концентрация должна быть полная от старта до финиша. Нельзя расслабиться ни на секунду. Направление выдерживать придется постоянно оббегая упавшие деревья, клочки малины, небольшие формы рельефа, маленькие фрагменты скал. Под ногами всегда будут ветки, камни, мелкие неровности. Поставить ногу не глядя равно получить травму. Бежать и и одновременно работать с картой практически невозможно нигде. Спортсменам придется постоянно прогнозировать что их ожидает на перегонах. Такой тяжелой и сложной местности мне рисовать не приходилось."',
        bounds: [[61.7729199, 30.6619406], [61.7610232, 30.7687569], [61.7482688, 30.6504393]],
        author: ['TKMKV_K','VRBJV_S','LUK_V','SBLV_S','TTYNN_V'],
        owner: 'FSO_KARELIA',
        region: 'KARELIA'
    },
    {
        name: 'Медвежьегорск, оз Плотичье',
        year: 1973,
        url: './maps/other/medvezhegorsk_plotichie_1973.webp',
        link: './original_maps/other/medvezhegorsk_plotichie_1973_omaps.webp',
        bounds: [[62.9170502, 34.3893099], [62.9156824, 34.4314957], [62.9030768, 34.3848896]],
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
        bounds: [[58.5705798, 42.1852684], [58.5310825, 42.5352859], [58.4416241, 42.132225]],
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
        o_gps: 8224,
        bounds: [[61.6803866, 50.7043934], [61.6666211, 50.7855034], [61.6270417, 50.6645679]],
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
        bounds: [[56.0727541, 92.4364758], [56.0761552, 92.7628899], [55.9536691, 92.4398661]],
        type: ['ROGAINE'],
        start: 'RUSSIA_ROGAINE_CHAMP',
        region: 'KRASNOYARSK'
    },
    {
        name: 'р Базаиха',
        date: '2023-09-23',
        url: './maps/other/bazaiha_rogaine_2023.webp',
        link: './original_maps/other/bazaiha_rogaine_2023_omaps.webp',
        o_gps: 17357,
        info: 'Торгашинские тропы.',
        bounds: [[55.9763676, 92.7722883], [55.9766318, 92.8715086], [55.9414375, 92.7719879]],
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
        bounds: [[54.5574313, 90.7275009], [54.5576304, 91.0162354], [54.4396003, 90.7271576]],
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
        o_gps: 20896,
        bounds: [[55.541842, 65.3114033], [55.5476691, 65.370369], [55.5183789, 65.3189135]],
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
        bounds: [[67.6171314, 33.2324409], [67.6087629, 33.3253098], [67.5745387, 33.20961]],
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
        bounds: [[67.6112476, 33.6752844], [67.6048064, 33.7333918], [67.5764459, 33.648355]],
        author: ['KVZN','TKMKVA_P','TKMKV_K'],
        region: 'MURMANSK',
        start: 'RUSSIA_CHAMP'
    },
    {
        name: 'г Горелая',
        date: '2024-08-24',
        url: './maps/other/murmansk_gorelaya_rogaine_2024.webp',
        link: './original_maps/other/murmansk_gorelaya_rogaine_2024_omaps.webp',
        bounds: [[68.9705603, 33.0461025], [68.9488971, 33.2157898], [68.918076, 33.0000973]],
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
        bounds: [[68.9669255, 33.1314182], [68.9627048, 33.1745052], [68.9316562, 33.1022358]],
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
        o_gps: 20664,
        info: 'Новгородский городской исторический рогейн.',
        bounds: [[58.5555385, 31.2468338], [58.5468509, 31.3323212], [58.4903744, 31.2222862]],
        author: 'ORLV',
        owner: 'LM',
        type: ['ROGAINE'],
        region: 'NOVGOROD'
    },
    // --- Новосибирск ---
    {
        name: 'Новосибирск',
        date: '2022-08-20',
        url: './maps/other/novosib_rogaine_2022.webp',
        link: './original_maps/other/novosib_rogaine_2022_omaps.webp',
        info: 'Удачный Рогейн.',
        bounds: [[54.9688448, 83.0569839], [54.9758896, 83.2224655], [54.8701865, 83.0693436]],
        o_gps: 13894,
        type: ['ROGAINE'],
        region: 'NSK'
    },
    {
        name: 'Бердск',
        date: '2022-07-23',
        url: './maps/other/berdsk_rogaine_2022.webp',
        link: './original_maps/other/berdsk_rogaine_2022_omaps.webp',
        bounds: [[54.9006978, 83.0841064], [54.8962558, 83.4073448], [54.7309644, 83.066597]],
        o_gps: 13668,
        type: ['ROGAINE'],
        region: 'NSK'
    },
    // --- Оренбург ---
    {
        name: 'парк Ивушка',
        year: 2025,
        url: './maps/other/ivushka_2025.webp',
        link: './original_maps/other/ivushka_2025_omaps.jpg',
        bounds: [[51.7977079, 55.2190232], [51.796487, 55.2304816], [51.7896654, 55.2166414]],
        author: 'STPNV_P',
        type: ['PARK'],
        region: 'ORENBURG'
    },
    {
        name: 'Качкарский мар',
        year: 1979,
        url: './maps/other/kachkara_1979.webp',
        link: './original_maps/other/kachkara_1979_omaps.jpg',
        bounds: [[51.8153009, 55.1753998], [51.8095169, 55.2195168], [51.7778246, 55.1597786]],
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
        bounds: [[57.9997753, 56.1396646], [57.993134, 56.1908197], [57.9716098, 56.1260605]],
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
        bounds: [[57.9946807, 56.1603928], [57.9912461, 56.1903048], [57.9841482, 56.1550713]],
        author: ['KRYUKOV_I','KNV_S'],
        region: 'PERM',
        me: '+'
    },
    {
        name: 'Южный лес',
        date: '2024-10-13',
        url: './maps/other/south_forest_rogaine_2024.webp',
        link: './original_maps/other/south_forest_rogaine_2024_omaps.webp',
        o_gps: 20860,
        bounds: [[58.0069609, 56.3091373], [58.0069155, 56.4280128], [57.9407799, 56.3092232]],
        type: ['ROGAINE'],
        region: 'PERM',
    },
    {
        name: 'Южный лес',
        year: 1979,
        url: './maps/other/south_forest_1979.webp',
        link: './original_maps/other/south_forest_1979_omaps.webp',
        bounds: [[58.0002073, 56.3160467], [57.9932705, 56.3745832], [57.9764573, 56.3072491]],
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
        bounds: [[58.0838665, 56.2738609], [58.0764239, 56.3153172], [58.0531786, 56.2541199]],
        region: 'PERM',
        me: '+'
    },
    {
        name: 'Кислотные дачи',
        year: 1981,
        date: '1987-01-01',
        url: './maps/other/kislotna_dacha_1981.webp',
        link: './original_maps/other/kislotna_dacha_1981_omaps.webp',
        bounds: [[58.1005612, 56.3878441], [58.0930428, 56.4808846], [58.0801454, 56.382823]],
        region: 'PERM',
        me: '+'
    },
    {
        name: 'Липовая гора',
        year: 1985,
        url: './maps/other/lipovaya_gora_1985.webp',
        link: './original_maps/other/lipovaya_gora_1985_omaps.webp',
        bounds: [[57.979279, 56.2958765], [57.9749781, 56.3317108], [57.9569724, 56.286478]],
        region: 'PERM',
        me: '+'
    },
    {
        name: 'Полазна',
        year: 1982,
        url: './maps/other/polazna_1982.webp',
        link: './original_maps/other/polazna_1982_omaps.webp',
        bounds: [[58.2914259, 56.3503361], [58.2840267, 56.3971996], [58.2746852, 56.3415384]],
        region: 'PERM',
        me: '+'
    },
    // --- Ростов ---
    {
        name: 'Калитвенская',
        date: '2021-04-03',
        url: './maps/other/kalitvenskaya_2021_04_03.webp',
        link: './original_maps/other/kalitvenskaya_2021_04_03_omaps.webp',
        bounds: [[48.2538554, 40.4855633], [48.2509408, 40.5101538], [48.2287895, 40.4793406]],
        author: ['DJCHKV','IDLBV'],
        start: 'RUSSIA_CUP',
        region: 'ROSTOV',
    },
    // --- Свердловская обл, Екатеринбург ---
    {
        name: 'Среднеуральск, Исеть',
        date: '1987-08-13',
        url: './maps/other/iset_1987_08_13.webp',
        link: ['./original_maps/other/iset_1987_08_13_omaps.webp','./original_maps/other/iset_1987_08_13_m21_omaps.webp','./original_maps/other/iset_1987_08_13_w21_omaps.webp'],
        gps: {
            'М':'./original_maps/other/iset_1987_08_13_m21_tracks_omaps.webp',
            'Ж':'./original_maps/other/iset_1987_08_13_w21_tracks_omaps.webp'
        },
        bounds: [[56.975205, 60.3298759], [56.9699655, 60.3755379], [56.9342752, 60.3137398]],
        author: 'KNTSVCH',
        start: ['USSR_1987','USSR_CHAMP']
    },
    {
        name: 'Среднеуральск, Исеть',
        date: '1987-08-16',
        url: './maps/other/iset_1987_08_16.webp',
        link: ['./original_maps/other/iset_1987_08_16_omaps.webp','./original_maps/other/iset_1987_08_16_m21_omaps.webp'],
        gps: {
            'М':'./original_maps/other/iset_1987_08_16_m21_tracks_omaps.webp',
            'Ж':'./original_maps/other/iset_1987_08_16_w21_tracks_omaps.webp'
        },
        bounds: [[56.9783857, 60.2980328], [56.9726321, 60.349617], [56.9349074, 60.2813816]],
        author: 'KNTSVCH',
        start: ['USSR_1987','USSR_CHAMP']
    },
    {
        name: 'Верх-Нейвинский',
        date: '2019-08-24',
        url: './maps/other/verkh_neyvinsky_rrc_2019.webp',
        link: './original_maps/other/verkh_neyvinsky_rrc_2019_omaps.webp',
        about: 'https://rogaining-ural.ru/history',
        info: 'Чемпионат России по рогейну.',
        o_gps: 6247,
        bounds: [[57.3599604, 60.1412201], [57.3450972, 60.3147697], [57.1837623, 60.09161]],
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
        o_gps: 16899,
        bounds: [[57.2710619, 60.272541], [57.253702, 60.4517555], [57.1617539, 60.2395821]],
        region: 'EKB',
        type: ['ROGAINE']
    },
    {
        name: 'Исеть',
        date: '2025-04-19',
        url: './maps/other/iset_rogaine_2025.webp',
        link: './original_maps/other/iset_rogaine_2025_omaps.webp',
        info: 'За подснежниками.',
        o_gps: 22237,
        bounds: [[56.9926958, 60.2817249], [56.9791341, 60.3799152], [56.9340177, 60.2547741]],
        region: 'EKB',
        type: ['ROGAINE']
    },
    {
        name: 'Северка',
        date: '2023-04-29',
        url: './maps/other/severka_rogaine_2023.webp',
        link: './original_maps/other/severka_rogaine_2023_omaps.webp',
        info: 'За подснежниками.',
        o_gps: 15906,
        bounds: [[56.9371083, 60.3225803], [56.9249316, 60.4242897], [56.8636132, 60.2927113]],
        region: 'EKB',
        type: ['ROGAINE']
    },
    {
        name: 'Новоуральск',
        date: '2024-10-06',
        url: './maps/other/novouralsk_rogaine_2024.webp',
        link: './original_maps/other/novouralsk_rogaine_2024_omaps.gif',
        o_gps: 20751,
        bounds: [[57.2925414, 59.9370289], [57.2737533, 60.0833702], [57.230388, 59.9102497]],
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
        bounds: [[56.7469344, 60.6781769], [56.7393563, 60.7508755], [56.6964948, 60.6610107]],
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
        bounds: [[56.7542757, 60.6107998], [56.7392622, 60.7240963], [56.7195331, 60.6004143]],
        start: ['USSR_1990_WINTER','USSR_CHAMP'],
        author: 'KNTSVCH',
        type: ['WINTER']
    },
    {
        name: 'Нижнеисетский л/п',
        date: '1990-03-14',
        url: './maps/other/nizhneisetsky_ussr_winter_champ_1990_03_14.webp',
        link: './original_maps/other/nizhneisetsky_ussr_winter_champ_1990_03_14_omaps.webp',
        bounds: [[56.727021, 60.622859], [56.7217466, 60.6747007], [56.7051181, 60.6180954]],
        start: ['USSR_1990_WINTER','USSR_CHAMP'],
        author: 'KNTSVCH',
        type: ['WINTER']
    },
    {
        name: 'Верх-Нейвинский',
        date: '1991-01-27',
        url: './maps/other/verkh_neyvinsky_ussr_winter_champ_1991.webp',
        link: ['./original_maps/other/verkh_neyvinsky_ussr_winter_champ_1991_m21_omaps.webp','./original_maps/other/verkh_neyvinsky_ussr_winter_champ_1991_w21_omaps.webp'],
        bounds: [[57.3041806, 60.1385164], [57.2993584, 60.2015162], [57.266305, 60.1277876]],
        start: ['USSR_1991_WINTER','USSR_CHAMP'],
        type: ['WINTER']
    },
    {
        name: 'Новоуральск, Мурзинка',
        date: '1991-01-26',
        url: './maps/other/murzinka_ussr_winter_champ_1991.webp',
        link: './original_maps/other/murzinka_ussr_winter_champ_1991_omaps.webp',
        bounds: [[57.2194226, 60.1049995], [57.2161695, 60.1352978], [57.1879485, 60.0934124]],
        start: ['USSR_1991_WINTER','USSR_CHAMP'],
        type: ['WINTER']
    },
    {
        name: 'Шаманиха',
        date: '1991-01-24',
        url: './maps/other/shamanikha_ussr_winter_champ_1991.webp',
        link: './original_maps/other/shamanikha_ussr_winter_champ_1991_omaps.webp',
        bounds: [[57.137427, 60.1115227], [57.1327693, 60.17272], [57.0948572, 60.0991631]],
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
        o_gps: 14756,
        info: 'Зимний рогейн МОРОЗКО.',
        bounds: [[56.818357, 60.6452179], [56.8175114, 60.7143974], [56.7612863, 60.6436729]],
        region: 'EKB',
        type: ['ROGAINE']
    },
    {
        name: 'Уктус',
        date: '2020-04-25',
        url: './maps/other/uktus_rogaine_2020.webp',
        link: './original_maps/other/uktus_rogaine_2020_omaps.webp',
        o_gps: 7436,
        bounds: [[56.7787129, 60.6144905], [56.7794887, 60.6768465], [56.7255612, 60.6168509]],
        region: 'EKB',
        type: ['ROGAINE']
    },
    {
        name: 'Ревда, Восточный',
        date: '2019-09-28',
        url: './maps/other/vostochny_rogaine_2019.webp',
        link: './original_maps/other/vostochny_rogaine_2019_omaps.webp',
        o_gps: 6490,
        info: 'Моторогейн Каменный пояс.',
        bounds: [[56.8234769, 59.9296474], [56.8038155, 60.1055145], [56.6956465, 59.8817539]],
        author: 'KKRV_S',
        region: 'EKB',
        type: ['ROGAINE']
    },
    {
        name: 'Сысерть',
        date: '2022-04-30',
        url: './maps/other/sysert_rogaine_2022.webp',
        link: './original_maps/other/sysert_rogaine_2022_omaps.webp',
        o_gps: 12874,
        info: 'Самоцветные дали.',
        bounds: [[56.5150902, 60.7185173], [56.4993179, 60.8311272], [56.4437075, 60.6853867]],
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
        bounds: [[54.7113834, 37.3955727], [54.6994815, 37.5240612], [54.6067256, 37.3661327]],
        info: 'Жаркий рогейн.',
        o_gps: 20103,
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
        bounds: [[56.2289498, 32.7807033], [56.2281566, 32.7884281], [56.2224665, 32.7783215]],
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
        bounds: [[57.618382, 34.3954468], [57.5996226, 34.6316528], [57.5092765, 34.376049]],
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
        bounds: [[54.9340707, 60.1476145], [54.9243305, 60.227952], [54.8904065, 60.1318216]],
        author: ['SLDTV_S','EKSHV','SHRNN'],
        region: 'CHELYABINSK',
    },
    {
        name: 'Вишневогорск, оз Аракуль',
        date: '2025-08-16',
        url: './maps/other/arakul_rogaine_2025.webp',
        link: './original_maps/other/arakul_rogaine_2025_omaps.webp',
        info: 'Чемпионат Уральских гор.',
        bounds: [[56.0489377, 60.4467773], [56.0262097, 60.6342316], [55.9750469, 60.424633]],
        o_gps: 23261,
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
        bounds: [[55.8001231, 60.3118515], [55.7673518, 60.550375], [55.6249915, 60.2353764]],
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
        o_gps: 13759,
        bounds: [[55.7147829, 60.2863598], [55.6837786, 60.5039406], [55.5527672, 60.2161503]],
        author: ['KZLV_V','BNDR_N','SLDTV_S','GBDLN','BLV_V','RKHMNKLV','NCHKN','PTPV_A','VRBJV_V','MSHRN_A','GRSHKN'],
        region: 'CHELYABINSK',
        start: 'RUSSIA_ROGAINE_CHAMP',
        type: ['ROGAINE']
    },
    // --- Юг ---
    {
        name: 'Отрожка',
        date: '2026-07-11',
        url: './maps/other/otrozhka_rogaine_2026.webp',
        link: './original_maps/other/otrozhka_rogaine_2026_omaps.webp',
        about: 'https://vrnfso.ru/',
        info: 'Рельсы-Шпалы-буль-буль-буль.',
        results: 'https://vrnfso.ru/download/2026/20260711_resultlist.pdf',
        bounds: [[51.8105252, 39.2155266], [51.7995922, 39.3149185], [51.7258054, 39.192524]],
        region: 'VORONEZH',
        type: ['ROGAINE']
    },
    {
        name: 'Советский',
        year: 2026,
        url: './maps/south/sovetsky_2026.webp',
        link: './original_maps/south/sovetsky_2026_omaps.gif',
        bounds: [[46.5200421, 38.1438231], [46.5200274, 38.1495953], [46.5143351, 38.1439412]],
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
        bounds: [[46.4949062, 38.2724833], [46.4950613, 38.2874393], [46.4863083, 38.2724404]],
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
        bounds: [[45.0465412, 39.0267849], [45.0465109, 39.0370846], [45.0383085, 39.0266776]],
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
        bounds: [[45.0305749, 38.9050233], [45.030537, 38.9154196], [45.0238035, 38.9048195]],
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
        bounds: [[45.0590397, 38.9802754], [45.0590625, 38.9849961], [45.0533403, 38.9802969]],
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
        bounds: [[45.0831876, 38.8952923], [45.0832179, 38.9026201], [45.0756799, 38.8954103]],
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
        bounds: [[45.0306659, 38.9908111], [45.0295134, 39.0023232], [45.0245618, 38.9895022]],
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
        bounds: [[44.6568096, 39.1201687], [44.6507039, 39.2039394], [44.6016517, 39.1105556]],
        author: 'ZAMOTA',
        owner: 'ZAMOTA',
        region: 'KRASNODAR'
    },
    {
        name: 'Сочи, Ахун',
        year: 2001,
        url: './maps/south/sochi_ahun_2001.webp',
        link: './original_maps/south/sochi_ahun_2001_omaps.gif',
        bounds: [[43.6116575, 39.7984886], [43.6077423, 39.8844051], [43.5422958, 39.7913861]],
        author: 'ZAMOTA',
        owner: 'ZAMOTA',
        region: 'KRASNODAR'
    },
    {
        name: 'Мацеста, Орлиные скалы',
        year: 1976,
        url: './maps/south/matsesta_1976.webp',
        link: './original_maps/south/matsesta_1976_omaps.webp',
        bounds: [[43.5657154, 39.7928238], [43.5682341, 39.8227787], [43.5469306, 39.7934675]],
        author: 'NKRSV_S',
        region: 'KRASNODAR'
    },
    {
        name: 'Сочи, хребет Ачишхо, эко-тропа',
        url: './maps/south/sochi_achishko_eco_trail.webp',
        link: './original_maps/south/sochi_achishko_eco_trail_omaps.gif',
        bounds: [[43.7297394, 40.1700068], [43.7255528, 40.2020645], [43.7162481, 40.1700497]],
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
        bounds: [[44.1063545, 39.9978304], [44.1048138, 40.0248671], [44.0759937, 39.9947834]],
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
        bounds: [[44.7084306, 37.7834737], [44.7084916, 37.7891278], [44.6991503, 37.7834952]],
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
        o_gps: 17658,
        info: 'XX чемпионат России по рогейну.',
        bounds: [[44.7880488, 37.5710106], [44.7724523, 37.7712536], [44.6631589, 37.5504971]],
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
        bounds: [[44.5554327, 38.0836451], [44.5557921, 38.0865526], [44.5535903, 38.0839562]],
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
        bounds: [[44.55187, 38.0635822], [44.55187, 38.0750835], [44.5482077, 38.0636787]],
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
        bounds: [[44.3717846, 38.5359514], [44.3711173, 38.5429895], [44.3678118, 38.535372]],
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
        bounds: [[44.5950818, 38.1462908], [44.5842934, 38.2483006], [44.5533227, 38.137536]],
        author: 'ZAMOTA',
        owner: 'ZAMOTA',
        region: 'GLNDZHK',
    },
    {
        name: 'Цегельская щель',
        year: 2002,
        url: './maps/south/tsegelska_gap_2002.webp',
        link: './original_maps/south/tsegelska_gap_2002_omaps.gif',
        bounds: [[44.6063572, 38.1153488], [44.6042795, 38.1586075], [44.5735946, 38.112216]],
        author: 'ZAMOTA',
        owner: 'ZAMOTA',
        region: 'GLNDZHK',
    },
    {
        name: 'Нижний Архыз',
        year: 1987,
        url: './maps/south/nizhny_archyz_1987.webp',
        link: './original_maps/south/nizhny_archyz_1987_omaps.jpg',
        bounds: [[43.7057011, 41.4603424], [43.7045532, 41.4984083], [43.6783322, 41.4633036]],
        author: 'SKRSKY_A',
        region: 'KRCHCHRK',
    },
    {
        name: 'Архыз, поляна Таулу',
        year: 2005,
        url: './maps/south/archyz_taulu_2005.webp',
        link: './original_maps/south/archyz_taulu_2005_omaps.gif',
        bounds: [[43.5374427, 41.2218618], [43.5364627, 41.2465382], [43.5140743, 41.2203813]],
        author: 'ZAMOTA',
        owner: 'ZAMOTA',
        region: 'KRCHCHRK'
    },
    {
        name: 'Домбай, отель Гранд Виктория',
        year: 2025,
        url: './maps/south/dombai_2025.webp',
        link: './original_maps/south/dombai_2025_omaps.gif',
        bounds: [[43.2903734, 41.6184425], [43.2900376, 41.6228306], [43.2874838, 41.6178846]],
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
        bounds: [[43.1130064, 43.1458855], [43.1126383, 43.1496298], [43.1085497, 43.1449091]],
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
        bounds: [[43.2974483, 42.4621582], [43.282829, 42.5990582], [43.2258805, 42.4482536]],
        start: ['ZM','RUSSIA_ROGAINE_CHAMP'],
        region: 'KABARDA',
        type: ['ROGAINE']
    },

    // --- Не Россия ---

    // --- Украина ---

    {
        name: 'Черновцы, Вижница',
        date: '1985-08-24',
        url: './maps/other/vizhnitsa_1985_08_24.webp',
        link: ['./original_maps/other/vizhnitsa_1985_08_24_m21_omaps.webp','./original_maps/other/vizhnitsa_1985_08_24_w21_omaps.webp'],
        gps: {
            'М':'./original_maps/other/vizhnitsa_1985_08_24_m21_tracks_omaps.webp',
            'Ж':'./original_maps/other/vizhnitsa_1985_08_24_w21_tracks_omaps.webp'
        },
        bounds: [[48.2437962, 25.1392078], [48.2427674, 25.179162], [48.1981622, 25.1350451]],
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
        bounds: [[48.1845156, 25.829308], [48.1823695, 25.8687901], [48.1385996, 25.8234286]],
        results: './docs/1985/1985_ussr_champ_results_omaps.xlsx',
        author: 'SHTMPLR',
        start: ['USSR_1985','USSR_CHAMP']
    },
    {
        name: 'Черновцы, Берегомет',
        date: '1985-08-26',
        url: './maps/other/beregomet_1985_08_26.webp',
        link: ['./original_maps/other/beregomet_1985_08_26_omaps.webp','./original_maps/other/beregomet_1985_08_26_m21_omaps.webp'],
        bounds: [[48.1671159, 25.3067493], [48.1643394, 25.3446007], [48.1312103, 25.3033161]],
        results: './docs/1985/1985_ussr_champ_results_omaps.xlsx',
        author: ['LPKA_V','PDLSNK_A','IVNNKO_V'],
        start: ['USSR_1985','USSR_CHAMP']
    },

    // --- Казахстан ---

    {
        name: 'Каркаралинск, оз Пашено',
        date: '1986-09-09',
        info: '9-10 сентября.',
        url: './maps/other/pasheno_1986_09_09.webp',
        link: ['./original_maps/other/pasheno_1986_09_10_omaps.webp','./original_maps/other/pasheno_1986_09_10_w21_omaps.webp','./original_maps/other/pasheno_1986_09_10_cps_omaps.webp'],
        bounds: [[49.384524, 75.3392601], [49.3811714, 75.3928614], [49.3548739, 75.3364706]],
        author: ['KHDNKCH','ZYTSV_A','SCHV_V','KUZNTSV_VK'],
        results: ['./docs/1986/1986_09_09_ussr_karaganda_omaps.pdf','./docs/1986/1986_ussr_champ_results_omaps.xlsx'],
        gps: {
            'М':'./original_maps/other/pasheno_1986_09_09_m21_omaps.webp',
            'Ж':'./original_maps/other/pasheno_1986_09_09_w21_omaps.webp'
        },
        start: ['USSR_1986','USSR_CHAMP']
    },
    {
        name: 'Каркаралинск',
        date: '1986-09-11',
        url: './maps/other/karkaralinsk_1986.webp',
        link: ['./original_maps/other/karkaralinsk_1986_omaps.jpg','./original_maps/other/karkaralinsk_1986_09_11_m21_omaps.webp'],
        bounds: [[49.3838535, 75.4336739], [49.3816743, 75.4750443], [49.3515193, 75.4314423]],
        author: ['AFNSV_L','GLTSKY_V','KLM_K','KVLVSKY_G'],
        results: ['./docs/1986/1986_09_09_ussr_karaganda_omaps.pdf','./docs/1986/1986_ussr_champ_results_omaps.xlsx'],
        gps: {
            'М':'./original_maps/other/karkaralinsk_1986_09_11_m21_tracks_omaps.webp',
            'Ж':'./original_maps/other/karkaralinsk_1986_09_11_w21_tracks_omaps.webp'
        },
        start: ['USSR_1986','USSR_CHAMP']
    },

    // --- Беларусь ---

    {
        name: 'Вязынка',
        date: '1988-09-01',
        url: './maps/other/viazynka_1988_09_01.webp',
        link: './original_maps/other/viazynka_1988_09_01_m21_omaps.webp',
        bounds: [[54.1381547, 27.1631384], [54.1377524, 27.2027922], [54.1047034, 27.1611214]],
        author: 'LBNVSKY_A',
        results: 'https://ocbsu.orient.by/upload/2018/Protokoly_1988-BSU.pdf',
        start: ['USSR_1988','USSR_CHAMP']
    },
    {
        name: 'Вязынка',
        date: '1988-09-01',
        url: './maps/other/viazynka_1988_09_01_2.webp',
        link: './original_maps/other/viazynka_1988_09_01_m21_w21_omaps.webp',
        bounds: [[54.1503212, 27.2025776], [54.1480591, 27.2428322], [54.0916676, 27.1944237]],
        author: 'LBNVSKY_A',
        results: 'https://ocbsu.orient.by/upload/2018/Protokoly_1988-BSU.pdf',
        start: ['USSR_1988','USSR_CHAMP']
    },
    {
        name: 'Таковщина',
        date: '1988-09-02',
        url: './maps/other/takovschina_1988_09_02.webp',
        link: './original_maps/other/takovschina_1988_09_02_omaps.webp',
        bounds: [[54.3299637, 28.0965042], [54.3285873, 28.1431532], [54.2872996, 28.0922556]],
        author: ['ZYTSV_V','JANN_Y','SLMHO','TRNV_VL','TRKN_V'],
        results: 'https://ocbsu.orient.by/upload/2018/Protokoly_1988-BSU.pdf',
        start: ['USSR_1988','USSR_CHAMP']
    },
    {
        name: 'Юрковичи',
        date: '1988-09-03',
        url: './maps/other/yurkovichi_1988_09_03.webp',
        link: ['./original_maps/other/yurkovichi_1988_09_03_m21_omaps.webp','./original_maps/other/yurkovichi_1988_09_03_w21_omaps.webp'],
        bounds: [[54.3141701, 27.9535103], [54.3114663, 28.0171108], [54.2849197, 27.9496479]],
        gps: 'https://rg.obelarus.net/cgi-bin/reitti.cgi?act=map&id=279&kieli=',
        author: ['MLNKV_L','TRNV_VL','DLNN_E','TRKN_V','KPVA_Y'],
        results: 'https://ocbsu.orient.by/upload/2018/Protokoly_1988-BSU.pdf',
        start: ['USSR_1988','USSR_CHAMP']
    },

    // --- Латвия ---

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
        bounds: [[57.3843953, 25.7080936], [57.3832387, 25.7625961], [57.3584096, 25.7067204]],
        start: ['USSR_1983','USSR_CHAMP']
    },
    {
        name: 'Cēsis, Kārļi',
        date: '1983-08-20',
        info: 'Эстафета.',
        url: './maps/other/karli_1983_08_20.webp',
        link: './original_maps/other/karli_1983_08_20_omaps.webp',
        results: './docs/1983/1983_ussr_champ_results_omaps.xlsx',
        bounds: [[57.2759805, 25.1769304], [57.2741245, 25.2367115], [57.2541895, 25.1742268]],
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
        bounds: [[57.2573, 25.0349236], [57.2561626, 25.079298], [57.221444, 25.0326061]],
        author: 'KSLV_V',
        start: ['USSR_1983','USSR_CHAMP']
    },
    {
        name: 'Pļaviņas, Mežezers',
        year: 1990,
        info: '24-27 августа.',
        url: './maps/other/mezezers_1990.webp',
        link: ['./original_maps/other/mezezers_1990_omaps.webp','./original_maps/other/mezezers_1990_m21_omaps.webp'],
        gps: {
            'М':'./original_maps/other/mezezers_1990_m21_tracks_omaps.webp',
            'Ж':'./original_maps/other/mezezers_1990_w21_tracks_omaps.webp'
        },
        bounds: [[56.6687265, 25.6797266], [56.6664155, 25.7222986], [56.6250055, 25.6806707]],
        author: 'KSLV_V',
        start: ['USSR_1990','USSR_CHAMP']
    },

    // --- Литва ---

    {
        name: 'Velnio duobė',
        date: '1989-07-24',
        url: './maps/other/velnio_duobe_1989_07_24.webp',
        link: ['./original_maps/other/velnio_duobe_1989_07_24_omaps.webp','./original_maps/other/velnio_duobe_1989_07_24_m21_omaps.webp'],
        gps: {
            'М':'./original_maps/other/velnio_duobe_1989_07_24_m21_tracks_omaps.webp',
            'Ж':'./original_maps/other/velnio_duobe_1989_07_24_w21_tracks_omaps.webp'
        },
        bounds: [[54.6213631, 24.4913149], [54.6193505, 24.5579624], [54.5766885, 24.4861221]],
        author: ['GPS_V','ZLVS_D','JVSA_A','GVLDS_J_G'],
        start: ['USSR_1989','USSR_CHAMP']
    },
    {
        name: 'Ravai',
        date: '1989-07-25',
        url: './maps/other/ravai_1989_07_25.webp',
        info: 'Эстафета.',
        link: './original_maps/other/ravai_1989_07_25_omaps.webp',
        bounds: [[54.7006223, 25.105176], [54.6999775, 25.1626396], [54.6767342, 25.1044893]],
        author: ['MCKVCS','BLSS','SBCS_G'],
        start: ['USSR_1989','USSR_CHAMP']
    },
    {
        name: 'Katlaukis',
        date: '1989-07-27',
        url: './maps/other/katlaukis_1989_07_27.webp',
        link: ['./original_maps/other/katlaukis_1989_07_27_m21_omaps.webp','./original_maps/other/katlaukis_1989_07_27_w21_omaps.webp'],
        gps: {
            'М':'./original_maps/other/katlaukis_1989_07_27_m21_tracks_omaps.webp',
            'Ж':'./original_maps/other/katlaukis_1989_07_27_w21_tracks_omaps.webp'
        },
        bounds: [[54.7584361, 25.7485199], [54.7566779, 25.8039665], [54.722687, 25.7443142]],
        author: ['VGNTS_N','GTS_J'],
        start: ['USSR_1989','USSR_CHAMP']
    },

    // --- Эстония ---

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
        bounds: [[58.153633, 26.6051102], [58.1495116, 26.6779804], [58.1189708, 26.5974712]],
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
        bounds: [[58.1521838, 26.4073563], [58.1499645, 26.4567947], [58.1144373, 26.3998032]],
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
        bounds: [[58.1845513, 26.4036226], [58.1840083, 26.4446926], [58.1515044, 26.4005756]],
        author: 'KLM_K',
        start: ['USSR_1984','USSR_CHAMP']
    },

    // --- Чехия ---

    {
        name: 'Nový Bor',
        year: 1978,
        url: './maps/other/novy_bor_1978.webp',
        link: './original_maps/other/novy_bor_1978_omaps.webp',
        info: '21-23 июля. Boženka.',
        bounds: [[50.8165105, 14.5031977], [50.8169036, 14.5478725], [50.784152, 14.5043135]],
        logo: 'bozenka.gif',
        region: 'CZECH'
    },

    // --- Китай ---

    {
        name: 'HARBIN',
        date: '1991-09-29',
        url: './maps/other/harbin_1991.webp',
        link: './original_maps/other/harbin_1991_omaps.webp',
        bounds: [[45.7217013, 127.400465], [45.7246524, 127.4269438], [45.70552, 127.405529]],
        author: ['MTKV_A','TRNV_VL','CHRNH_Y'],
        region: 'CHINA'
    },

    // --- Франция ---

    {
        name: 'Париж, Диснейлэнд',
        date: '2012-09-29',
        url: './maps/other/paris_disneyland_2012.webp',
        link: './original_maps/other/paris_disneyland_2012_omaps.webp',
        info: 'Parc Disneyland. Le Bri\'O Tour Etape 2.',
        bounds: [[48.875251, 2.7719235], [48.8753004, 2.7813864], [48.8679542, 2.7718163]],
        logo: 'disney.gif',
        region: 'FRA'
    },

    // --- Португалия ---

    {
        name: 'Colegio do Rosário',
        year: 2025,
        url: './maps/other/portugal/colegio_do_rosário_2025.webp',
        link: './original_maps/other/portugal/colegio_do_rosário_2025_omaps.gif',
        bounds: [[41.1643432, -8.6577845], [41.1643917, -8.6560357], [41.1626228, -8.6578488]],
        region: 'PORTUGAL',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Ermesinde',
        year: 2026,
        url: './maps/other/portugal/ermesinde_2026.webp',
        link: './original_maps/other/portugal/ermesinde_2026_omaps.gif',
        bounds: [[41.2221001, -8.554337], [41.2220356, -8.5424709], [41.2057648, -8.5545301]],
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
        bounds: [[41.1296678, -8.5928428], [41.1296759, -8.5901606], [41.1279061, -8.5927248]],
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
        bounds: [[41.1443902, -8.6196756], [41.1443659, -8.6186779], [41.1432025, -8.6196864]],
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
        bounds: [[41.1709417, -8.5578132], [41.1709902, -8.5553563], [41.1693507, -8.5578668]],
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
        bounds: [[41.4178863, -8.5151982], [41.4179265, -8.5125268], [41.4157622, -8.5152519]],
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
        bounds: [[41.1240754, -8.6210597], [41.1240512, -8.618753], [41.1224833, -8.6210704]],
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
        bounds: [[41.1984109, -8.7017083], [41.1984271, -8.6994445], [41.1961747, -8.7016332]],
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
        bounds: [[41.1691973, -8.6678267], [41.1691973, -8.6654663], [41.1679858, -8.6678696]],
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
        bounds: [[41.1972242, -8.6083674], [41.1971274, -8.6057711], [41.1946409, -8.6085069]],
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
        bounds: [[41.1831113, -8.6806154], [41.1830709, -8.6781049], [41.1811088, -8.6805832]],
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
        bounds: [[41.1594242, -8.5174298], [41.1594565, -8.51596], [41.1576229, -8.5173333]],
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
        bounds: [[41.4050925, -8.5252297], [41.4051408, -8.5209167], [41.4032738, -8.5252726]],
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
        bounds: [[41.1859293, -8.6620545], [41.1865672, -8.6535788], [41.1818597, -8.6616254]],
        region: 'PORTUGAL',
        type: ['CITY','SPRINT','PARK'],
        author: 'MSTPNV',
        owner: 'MSTPNV'
    },
];
