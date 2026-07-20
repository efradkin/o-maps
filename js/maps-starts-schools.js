// --- Ориентирование в школу ---
let schoolMaps = [
    // --- Парки ---
    {
        name: 'Митрополичий сад Александро-Невской Лавры',
        date: '2015-05-14',
        start: 'SCHOOL',
        o_site: '150514',
        url: './maps/parks/lavra_2015.webp',
        link: './original_maps/parks/lavra_2015_omaps.gif',
        bounds: [[59.9214093, 30.3794289], [59.9214093, 30.3871107], [59.9178817, 30.3795576]],
        type: ['PARK']
    },
    {
        name: 'Школа №150, универсам САМПО',
        date: '2016-10-19',
        start: 'SCHOOL',
        excluded: true,
        o_site: '161019s',
        url: './maps/city/school_150_2016.webp',
        link: ['./original_maps/schools/school_150_2016_omaps.gif','./original_maps/schools/school_150_2016_omaps.ocd'],
        publish: 'https://t.me/dlitelnyy/449',
        bounds: [[60.029936, 30.3652239], [60.0276635, 30.3840208], [60.0226247, 30.3619194]],
        author: 'SHRNN',
        type: ['SPRINT','CITY']
    },
    {
        name: 'Сад Миранда, Купальный пруд, школа 638',
        date: '2022-05-15',
        start: 'SCHOOL',
        o_site: '190515',
        url: './maps/parks/pavlovsk_sad_miranda_2020.webp',
        link: ['./original_maps/parks/school_638_2019_omaps.gif','./original_maps/parks/pavlovsk_sad_miranda_2020_omaps.jpg'],
        bounds: [[59.6905651, 30.4304552], [59.6905976, 30.4430938], [59.6851827, 30.4305625]],
        author: 'SHRNN',
        owner: 'EGRV_EGR',
        type: ['PARK']
    },
    // --- Город ---
    {
        name: 'Школа №606, гимназия №406',
        date: '2015-04-22',
        o_site: '150422',
        start: 'SCHOOL',
        url: './maps/city/school_606_2015.webp',
        link: ['./original_maps/schools/school_606_2015_omaps.gif','./original_maps/schools/school_606_2015_omaps.ocd'],
        bounds: [[59.7239128, 30.3978825], [59.7239561, 30.4023027], [59.7216517, 30.3977537]],
        type: ['CITY']
    },
    {
        name: 'Школа №98',
        date: '2015-05-20',
        o_site: '150520',
        start: 'SCHOOL',
        url: './maps/city/school_98_2015.webp',
        link: ['./original_maps/schools/school_98_2015_omaps.gif','./original_maps/schools/school_98_2015_omaps.ocd'],
        bounds: [[60.019837, 30.4077744], [60.019762, 30.4126024], [60.0169526, 30.4076028]],
        type: ['CITY']
    },
    {
        name: 'Школа №141',
        date: '2015-10-21',
        o_site: '151021',
        start: 'SCHOOL',
        url: './maps/city/school_141_2015.webp',
        link: ['./original_maps/schools/school_141_sosh_2015_omaps.gif','./original_maps/schools/school_141_2015_omaps.gif','./original_maps/schools/school_141_2015_omaps.ocd','./original_maps/schools/school_141_yard_2015_omaps.ocd'],
        bounds: [[59.949982, 30.4927683], [59.9500142, 30.505085], [59.9456299, 30.4927897]],
        author: ['DRBSHV','VSLVSKY'],
        type: ['CITY']
    },
    {
        name: 'Школы №559 и №114',
        year: 2006, // ?
        url: './maps/city/school_559.webp',
        link: './original_maps/schools/school_559_omaps.jpg',
        bounds: [[60.0567819, 30.3393781], [60.0567711, 30.3443348], [60.0526902, 30.3393245]],
        author: 'FDRV_L',
        type: ['CITY']
    },
    {
        name: 'Школа №559, гимназия №114',
        date: '2016-04-27',
        o_site: '160427',
        start: 'SCHOOL',
        url: './maps/city/school_559_2016.webp',
        link: ['./original_maps/schools/school_559_2016_omaps.gif','./original_maps/schools/school_559_2016_omaps.ocd'],
        bounds: [[60.0560696, 30.339303], [60.0560803, 30.3444099], [60.0526849, 30.3393245]],
        author: ['FDRV_L','SHKLV'],
        type: ['CITY']
    },
    {
        name: 'Школа №494',
        year: 2007,
        url: './maps/city/school_494_2007.webp',
        link: './original_maps/schools/school_494_2007_omaps.jpg',
        bounds: [[60.0639785, 30.3068376], [60.0639785, 30.319047], [60.0590203, 30.3068912]],
        author: 'FDRV_L',
        type: ['CITY']
    },
    {
        name: 'Школа №453',
        year: 2007, // ?
        url: './maps/city/school_453.webp',
        link: './original_maps/schools/school_453_omaps.jpg',
        bounds: [[60.0669659, 30.3049815], [60.0669231, 30.3146589], [60.0633306, 30.3049815]],
        author: 'FDRV_L',
        type: ['CITY']
    },
    {
        name: 'Лицей №534',
        year: 2007,
        url: './maps/city/school_534_2007.webp',
        link: './original_maps/schools/school_534_2007_omaps.jpg',
        bounds: [[60.0098315, 30.3432512], [60.0098476, 30.3483582], [60.006619, 30.343262]],
        author: 'FDRV_L',
        type: ['CITY']
    },
    {
        name: 'Школа №303',
        date: '2016-09-28',
        o_site: '160928',
        start: 'SCHOOL',
        url: './maps/city/school_303_2016.webp',
        link: ['./original_maps/schools/school_303_2016_omaps.gif','./original_maps/schools/school_303_2016_omaps.ocd'],
        bounds: [[59.8723226, 30.3978825], [59.869016, 30.4020667], [59.8709655, 30.3934407]],
        type: ['CITY']
    },
    {
        name: 'Школа №490',
        date: '2016-10-12',
        o_site: '161012',
        start: 'SCHOOL',
        url: './maps/city/school_490_2016.webp',
        link: ['./original_maps/schools/school_490_sosh_2016_omaps.gif','./original_maps/schools/school_490_2017_omaps.gif','./original_maps/schools/school_490_2016_omaps.ocd','./original_maps/schools/school_490_2017_omaps.ocd'],
        bounds: [[59.9249043, 30.4164863], [59.9264419, 30.4210997], [59.9222696, 30.4199624]],
        author: 'VSLVSKY',
        type: ['CITY']
    },
    {
        name: 'Школа №529',
        date: '2017-04-12',
        o_site: '170412',
        start: 'SCHOOL',
        url: './maps/city/school_529_2017.webp',
        link: ['./original_maps/schools/school_529_2017_omaps.gif','./original_maps/schools/school_529_2017_omaps.ocd'],
        bounds: [[59.8774058, 29.8892713], [59.8764473, 29.898262], [59.874832, 29.8880053]],
        author: 'TKMKVA_P',
        type: ['CITY']
    },
    {
        name: 'Школа №604',
        date: '2017-04-19',
        o_site: '170419',
        start: 'SCHOOL',
        url: './maps/city/school_604_2017.webp',
        link: ['./original_maps/schools/school_604_2017_omaps.gif','./original_maps/schools/school_604_2017_omaps.ocd'],
        bounds: [[59.7436287, 30.4653668], [59.7428069, 30.4671264], [59.7419852, 30.4625773]],
        author: 'SHRNN',
        type: ['CITY']
    },
    {
        name: 'Школа №69',
        date: '2017-05-17',
        o_site: '170517',
        start: 'SCHOOL',
        url: './maps/city/school_69_2017.webp',
        link: ['./original_maps/schools/school_69_2017_omaps.gif','./original_maps/schools/school_69_2017_omaps.ocd'],
        bounds: [[60.0484213, 30.3822398], [60.0479285, 30.386982], [60.0459786, 30.3813171]],
        author: 'KUZNTSV_A',
        type: ['CITY']
    },
    {
        name: 'Лицей №226',
        date: '2017-10-04',
        o_site: '171004',
        start: 'SCHOOL',
        url: './maps/city/school_226_2017.webp',
        link: ['./original_maps/schools/school_226_2017_omaps.gif','./original_maps/schools/school_226_2017_omaps.ocd'],
        bounds: [[59.8649011, 30.3745151], [59.8648472, 30.3831196], [59.8618092, 30.3744078]],
        author: 'DRBSHV',
        type: ['CITY']
    },
    {
        name: 'Школа №133',
        date: '2017-10-18',
        o_site: '171018',
        start: 'SCHOOL',
        url: './maps/city/school_133_2017.webp',
        link: ['./original_maps/schools/school_133_sosh_2017_omaps.gif','./original_maps/schools/school_133_2017_omaps.gif','./original_maps/schools/school_133_2017_omaps.ocd'],
        bounds: [[59.9578679, 30.4378796], [59.9579861, 30.4462695], [59.9547632, 30.4380298]],
        type: ['CITY']
    },
    {
        name: 'Пушкин, школа №552',
        date: '2018-04-18',
        o_site: '180418',
        start: 'SCHOOL',
        url: './maps/city/pushkin_school_552_2018.webp',
        link: ['./original_maps/schools/pushkin_school_552_2018_omaps.jpg','./original_maps/schools/pushkin_school_552_2018_omaps.ocd'],
        bounds: [[59.7369679, 30.398891], [59.736784, 30.4017878], [59.7348374, 30.3984404]],
        author: 'SHRNN',
        owner: 'SHRNN',
        type: ['CITY']
    },
    {
        name: 'Школа №467',
        date: '2018-04-25',
        o_site: '180425',
        start: 'SCHOOL',
        url: './maps/city/school_467_2018.webp',
        link: ['./original_maps/schools/school_467_2018_omaps.gif','./original_maps/schools/school_467_2018_omaps.ocd'],
        bounds: [[59.7397253, 30.5649734], [59.7394658, 30.568943], [59.7379195, 30.5644798]],
        author: 'TKMKVA_P',
        type: ['SPRINT','CITY']
    },
    {
        name: 'Гимназия №642 "Земля и Вселенная"',
        date: '2018-05-16',
        o_site: '180516',
        start: 'SCHOOL',
        url: './maps/city/school_642_2018.webp',
        link: ['./original_maps/schools/school_642_2018_omaps.gif','./original_maps/schools/school_642_2018_omaps.ocd'],
        bounds: [[59.9421586, 30.2108359], [59.9418684, 30.21384], [59.94031, 30.2104712]],
        author: 'TKMKVA_P',
        type: ['SPRINT','CITY']
    },
    {
        name: 'Школа №175',
        date: '2018-10-10',
        o_site: '181010',
        start: 'SCHOOL',
        url: './maps/city/school_175_2018.webp',
        link: ['./original_maps/schools/school_175_2018_omaps.gif','./original_maps/schools/school_175_2018_omaps.ocd'],
        bounds: [[60.0360346, 30.4265499], [60.0356488, 30.4304338], [60.0346092, 30.4260778]],
        type: ['SPRINT','CITY']
    },
    {
        name: 'Школа №212',
        date: '2018-10-24',
        o_site: '181024',
        start: 'SCHOOL',
        url: './maps/city/school_212_2018.webp',
        link: ['./original_maps/schools/school_212_2018_omaps.gif','./original_maps/schools/school_212_2018_omaps.ocd'],
        bounds: [[59.8321146, 30.387218], [59.8315539, 30.3929687], [59.829656, 30.3865743]],
        author: 'TKMKVA_P',
        type: ['SPRINT','CITY']
    },
    {
        name: 'Школа №312',
        date: '2019-05-15',
        o_site: '190515',
        start: 'SCHOOL',
        url: './maps/city/school_312_2021.webp',
        link: ['./original_maps/schools/school_312_2019_omaps.gif','./original_maps/schools/school_312_2019_omaps.ocd'],
        bounds: [[59.8272942, 30.3928828], [59.8271863, 30.3961873], [59.8252881, 30.3929687]],
        author: ['DRBSHV','MKSHN_A','TKMKVA_P'],
        type: ['SPRINT','CITY']
    },
    {
        name: 'Лицей №384',
        date: '2019-02-17',
        start: 'SCHOOL',
        o_site: '190918',
        url: './maps/city/narvskaya_384_school_2019.webp',
        link: ['./original_maps/schools/narvskaya_384_school_2019_omaps.gif','./original_maps/schools/narvskaya_384_school_2019_omaps.ocd'],
        bounds: [[59.8981288, 30.273664], [59.8981826, 30.2759814], [59.8964822, 30.2734923]],
        author: 'BEVZA',
        owner: 'BEVZA',
        type: ['CITY']
    },
    {
        name: 'Пушкин, школа №645',
        date: '2021-02-10',
        info: 'Инфо и результаты: <a href="https://o-site.spb.ru/race.php?id=160420">20.04.2016</a>, <a href="https://o-site.spb.ru/race.php?id=210210">10.02.2021</a>',
        start: 'SCHOOL',
        url: './maps/city/pushkin_school_645.webp',
        link: ['./original_maps/schools/pushkin_school_645_omaps.jpg','./original_maps/schools/school_645_2021_open_omaps.gif','./original_maps/schools/pushkin_school_645_omaps.gif','./original_maps/schools/pushkin_school_645_omaps.ocd'],
        bounds: [[59.7446341, 30.4819107], [59.7438773, 30.4836488], [59.7428826, 30.4788637]],
        author: 'SHRNN',
        owner: 'SHRNN',
        type: ['CITY']
    },
    {
        name: 'Школа №482',
        date: '2021-02-17',
        info: 'Инфо и результаты: <a href="https://www.o-site.spb.ru/race.php?id=151007">07.10.2015</a>, <a href="https://o-site.spb.ru/race.php?id=210217">17.02.2021</a>',
        start: 'SCHOOL',
        url: './maps/city/school_482_2021.webp',
        link: ['./original_maps/schools/school_482_2015_omaps.gif','./original_maps/schools/school_482_2015_omaps.ocd','./original_maps/schools/school_482_2021_omaps.gif','./original_maps/schools/school_482_2021_omaps.ocd'],
        bounds: [[60.0733735, 30.3321576], [60.0729988, 30.3362346], [60.0709326, 30.3311276]],
        author: 'KHFZVA',
        type: ['SPRINT','CITY']
    },
    {
        name: 'Школа №292',
        date: '2021-04-21',
        o_site: '210421',
        start: 'SCHOOL',
        url: './maps/city/school_292_2021.webp',
        link: ['./original_maps/schools/school_292_2021_omaps.gif','./original_maps/schools/school_292_2021_omaps.ocd'],
        bounds: [[59.8614214, 30.3820896], [59.8610766, 30.3855228], [59.8589433, 30.3812313]],
        author: 'TKMKVA_P',
        type: ['SPRINT','CITY']
    },
    {
        name: 'Школы №150, 158',
        date: '2021-04-28',
        info: 'Инфо и результаты: <a href="https://o-site.spb.ru/race.php?id=191023">23.10.2019</a>, <a href="https://o-site.spb.ru/race.php?id=210428">28.04.2021</a>',
        start: 'SCHOOL',
        url: './maps/city/school_158_2021.webp',
        link: ['./original_maps/schools/school_150_2019_omaps.gif','./original_maps/schools/school_150_2019_omaps.ocd','./original_maps/schools/school_158_2021_omaps.gif','./original_maps/schools/school_158_2021_omaps.ocd'],
        bounds: [[60.0269238, 30.3726697], [60.0264092, 30.3778195], [60.0234932, 30.3714252]],
        author: 'TKMKVA_P',
        type: ['SPRINT','CITY']
    },
    {
        name: 'Школа №556',
        date: '2021-05-13',
        o_site: '210513',
        start: 'SCHOOL',
        url: './maps/city/school_556_2021.webp',
        link: ['./original_maps/schools/school_556_2021_omaps.gif','./original_maps/schools/school_556_2021_omaps.ocd'],
        bounds: [[60.0907218, 29.9490523], [60.0903045, 29.9528718], [60.0892345, 29.9484515]],
        author: 'KUZNTSV_A',
        type: ['SPRINT','CITY']
    },
    {
        name: 'Гимназия №11',
        date: '2021-05-19',
        o_site: '210519',
        start: 'SCHOOL',
        url: './maps/city/school_11_2021.webp',
        link: ['./original_maps/schools/school_11_2021_omaps.gif','./original_maps/schools/school_11_2021_omaps.ocd'],
        bounds: [[59.9427068, 30.2644157], [59.9425778, 30.2664542], [59.9416965, 30.2640939]],
        type: ['SPRINT','CITY']
    },
    {
        name: 'Школа №303',
        date: '2021-05-18',
        o_site: '220518',
        start: 'SCHOOL',
        url: './maps/city/school_303_2022.webp',
        link: ['./original_maps/schools/school_303_2022_omaps.gif','./original_maps/schools/school_303_2022_omaps.ocd'],
        bounds: [[59.8660537, 30.4062295], [59.8656336, 30.4103279], [59.864761, 30.4058218]],
        author: 'TKMKVA_P',
        type: ['SPRINT','CITY']
    },
    {
        name: 'Школа №468, лицей №101',
        date: '2021-09-14',
        info: 'Инфо и результаты: <a href="https://o-site.spb.ru/race.php?id=141015">15.10.2014</a>, <a href="https://o-site.spb.ru/race.php?id=220914">14.09.2022</a>.',
        start: 'SCHOOL',
        url: './maps/city/school_468_2014.webp',
        link: ['./original_maps/schools/school_468_2014_omaps.gif','./original_maps/schools/school_468_2014_omaps.ocd','./original_maps/schools/school_468_2022_omaps.gif','./original_maps/schools/school_468_2022_omaps.ocd'],
        bounds: [[60.0354452, 30.3339815], [60.0354023, 30.3401399], [60.0334946, 30.3339171]],
        author: ['SHRNN','FDRV_L'],
        type: ['SPRINT','CITY']
    },
    {
        name: 'Школа №149',
        date: '2021-09-21',
        info: 'Инфо и результаты: <a href="https://www.o-site.spb.ru/race.php?id=150930">30.09.2015</a>, <a href="https://o-site.spb.ru/race.php?id=220921">21.09.2022</a>.',
        start: 'SCHOOL',
        url: './maps/city/school_149_2022.webp',
        link: ['./original_maps/schools/school_149_2015_omaps.gif','./original_maps/schools/school_149_2015_omaps.ocd','./original_maps/schools/school_149_2022_omaps.gif','./original_maps/schools/school_149_2022_omaps.ocd'],
        bounds: [[60.0275348, 30.4137182], [60.0274598, 30.4214215], [60.0248547, 30.4136753]],
        type: ['SPRINT','CITY']
    },
    {
        name: 'Школа №464',
        date: '2023-09-27',
        o_site: '230927',
        start: 'SCHOOL',
        url: './maps/city/school_464_2023.webp',
        link: ['./original_maps/schools/school_464_2023_omaps.gif','./original_maps/schools/school_464_2023_omaps.ocd'],
        bounds: [[59.6821824, 30.4277301], [59.6817925, 30.4315066], [59.6810667, 30.4273438]],
        author: 'ZCHNV',
        type: ['SPRINT','CITY']
    },
    {
        name: 'Школа №466',
        year: 2006,
        url: './maps/city/school_466_2006.webp',
        link: ['./original_maps/schools/school_466_2006_omaps.gif','./original_maps/schools/school_466_2006_omaps.ocd'],
        bounds: [[60.1258078, 30.1448965], [60.1254337, 30.1504755], [60.1230502, 30.1442742]],
        author: 'VSLVSKY',
        type: ['CITY']
    },
    {
        name: 'Школа №437',
        year: 2013,
        url: './maps/city/school_437_2013.webp',
        link: ['./original_maps/schools/school_437_2013_omaps.gif','./original_maps/schools/school_437_2013_omaps.ocd'],
        bounds: [[60.1214575, 30.1644874], [60.1206558, 30.1682425], [60.1206344, 30.1638436]],
        author: ['DRBSHV','VSLVSKY'],
        type: ['CITY']
    },
    {
        name: 'Школа №437',
        date: '2023-09-29',
        o_site: '230929',
        start: 'SCHOOL',
        url: './maps/city/school_437_2023.webp',
        link: ['./original_maps/schools/school_437_2023_omaps.gif','./original_maps/schools/school_437_2023_omaps.ocd'],
        bounds: [[60.1214468, 30.1645088], [60.1206665, 30.1682854], [60.1206344, 30.1638436]],
        type: ['SPRINT','CITY']
    },
    {
        name: 'Школа №57',
        date: '2023-10-03',
        o_site: '231003',
        start: 'SCHOOL',
        url: './maps/city/school_57_2023.webp',
        link: ['./original_maps/schools/school_57_2023_omaps.gif','./original_maps/schools/school_57_2023_omaps.ocd'],
        bounds: [[60.0095098, 30.2858949], [60.0092952, 30.2878261], [60.0081905, 30.2853799]],
        author: 'TKMKVA_P',
        type: ['SPRINT','CITY']
    },
    {
        name: 'Школа №339',
        date: '2024-10-02',
        o_site: '241002',
        start: 'SCHOOL',
        url: './maps/city/school_339_2024.webp',
        link: ['./original_maps/schools/school_339_2024_omaps.gif','./original_maps/schools/school_339_2024_omaps.ocd'],
        bounds: [[59.904596, 30.4613113], [59.9042194, 30.4642725], [59.902896, 30.4606462]],
        author: 'DRBSHV',
        type: ['SPRINT','CITY']
    },
    {
        name: 'Школа №605',
        date: '2024-10-09',
        o_site: '241009',
        start: 'SCHOOL',
        url: './maps/city/school_605_2024.webp',
        link: ['./original_maps/schools/school_605_2024_omaps.gif','./original_maps/schools/school_605_2024_omaps.ocd'],
        bounds: [[60.0521493, 30.35074], [60.0518815, 30.3532934], [60.0511316, 30.3502679]],
        type: ['SPRINT','CITY']
    },
    {
        name: 'Лицей №101',
        date: '2024-10-25',
        o_site: '240925',
        start: 'SCHOOL',
        url: './maps/city/school_101_2024.webp',
        link: ['./original_maps/schools/school_101_2024_omaps.gif','./original_maps/schools/school_101_2024_omaps.ocd'],
        bounds: [[60.0276313, 30.3350115], [60.0276313, 30.339067], [60.0260769, 30.3350759]],
        author: 'KUZNTSV_A',
        type: ['SPRINT','CITY']
    },
    {
        name: 'Школа №161',
        date: '2025-09-17',
        o_site: '250917',
        start: 'SCHOOL',
        url: './maps/city/school_161_2025.webp',
        link: ['./original_maps/schools/school_161_2025_omaps.gif','./original_maps/schools/school_161_2025_omaps.ocd'],
        bounds: [[60.0712859, 30.3112578], [60.0707185, 30.3162146], [60.0699905, 30.3106785]],
        author: 'KUZNTSV_A',
        type: ['SPRINT','CITY']
    },
    {
        name: 'Школа №221',
        date: '2025-09-23',
        o_site: '250923',
        start: 'SCHOOL',
        url: './maps/city/school_221_2025.webp',
        link: ['./original_maps/schools/school_221_2025_omaps.gif','./original_maps/schools/school_221_2025_omaps.ocd','./original_maps/schools/school_221_2025_dist_omaps.ocd'],
        bounds: [[59.8457957, 30.2245474], [59.8454616, 30.2278948], [59.8440388, 30.2238822]],
        author: 'ZCHNV',
        type: ['SPRINT','CITY']
    },
];
