// types can be ROGAINE, SPRINT, CITY, RELIEF
let rogaineBeketovMaps = [
    // --- рогейн ---
    {
        name: '78 км',
        date: '2020-10-03',
        url: './maps/rogaine/beketov/78km.webp',
        link: './original_maps/rogaine/beketov/78km_omb_2020_omaps.gif',
        bounds: [[60.6800722, 30.0208282], [60.6901579, 30.4365921], [60.5400607, 30.0376511]],
        o_gps: {
            '1':8281,
            '2':8283
        },
        owner: 'BKTV',
        start: 'MB',
        type: ['ROGAINE']
    },
    {
        name: 'Токсово',
        date: '2018-09-29',
        url: './maps/rogaine/beketov/toksovo_bal_2018.webp',
        link: ['./original_maps/rogaine/beketov/BAL18_distance.All.jpg','https://www.bikeadventure.ru/upload/files/arhiv-2018-2/mapBAL18-1.jpg','https://www.bikeadventure.ru/upload/files/arhiv-2018-2/mapBAL18-2.jpg'],
        bounds: [[60.2653635, 30.3682709], [60.2365731, 30.7133102], [60.1074728, 30.3133392]],
        results: 'https://www.bikeadventure.ru/arhiv/arhiv-2018-2.php',
        owner: 'BKTV',
        start: 'BA',
        type: ['ROGAINE']
    },
    {
        name: 'Мичуринское',
        url: './maps/rogaine/beketov/michurinskoe.webp',
        link: './original_maps/rogaine/beketov/center.jpg',
        bounds: [[60.6344794, 29.7523499], [60.6341427, 30.2515411], [60.3731447, 29.7537231]],
        owner: 'BKTV',
        type: ['ROGAINE']
    },
    {
        name: 'Грузино',
        year: 2013,
        url: './maps/rogaine/beketov/gruzino.webp',
        link: './original_maps/rogaine/beketov/gruzino.jpg',
        bounds: [[60.3330658, 30.2295685], [60.3318763, 30.4431152], [60.262128, 30.2288818]],
        owner: 'BKTV',
        type: ['ROGAINE']
    },
    {
        name: 'Каннельярви',
        year: 2024,
        url: './maps/rogaine/beketov/kanneljarvy.webp',
        link: './original_maps/rogaine/beketov/k-jarvi.jpg',
        bounds: [[60.451631, 29.1529083], [60.4507844, 29.617424], [60.1671337, 29.1491318]],
        owner: 'BKTV',
        type: ['ROGAINE']
    },
    {
        name: '78 км',
        date: '2023-10-12',
        url: './maps/rogaine/beketov/78km_michura_mb_2023.webp',
        link: './original_maps/rogaine/beketov/78km_omb_2023_omaps.webp',
        bounds: [[60.6379305, 29.7834206], [60.6087945, 30.1845932], [60.4825581, 29.7356129]],
        owner: 'BKTV',
        start: 'MB',
        type: ['ROGAINE']
    },
    {
        name: 'Хийтола',
        date: '2021-05-22',
        url: './maps/rogaine/beketov/hiitola_ba_2021.webp',
        link: ['./original_maps/rogaine/beketov/hiitola_ba_2021_omaps.webp','./original_maps/rogaine/beketov/hiitola_ta_2021_omaps.webp','https://www.bikeadventure.ru/upload/files/arhiv-2021-1/BA21.jpg','https://www.bikeadventure.ru/upload/files/arhiv-2021-1/TA21.jpg'],
        bounds: [[61.2184539, 29.303112], [61.2908545, 29.692955], [60.9782709, 29.4941711]],
        results: 'https://www.bikeadventure.ru/arhiv/arhiv-2022-1.php',
        o_gps: {
            'BA':9986,
            'TA':9987
        },
        owner: 'BKTV',
        start: ['BA','TA'],
        type: ['ROGAINE']
    },
    {
        name: 'Кузнечное',
        date: '2023-05-13',
        url: './maps/rogaine/beketov/kuznechnoe_mb_2023.webp',
        link: ['./original_maps/rogaine/beketov/kuznechnoe_mb_2023_omaps.webp','./original_maps/rogaine/beketov/kuznechnoe_vmb_2023_omaps.gif'],
        bounds: [[61.2538908, 29.5164871], [61.26132, 29.8392105], [61.1169617, 29.5303917]],
        owner: 'BKTV',
        start: 'MB',
        type: ['ROGAINE']
    },
    {
        name: 'Оять',
        date: '2021-05-09',
        url: './maps/rogaine/beketov/ojat.webp',
        link: ['./original_maps/rogaine/beketov/ojat.jpg','./original_maps/rogaine/beketov/ojat_vmb_2021_1_omaps.webp','./original_maps/rogaine/beketov/ojat_vmb_2021_2_omaps.webp'],
        bounds: [[60.4903804, 33.1344223], [60.4880127, 33.7369537], [60.3750116, 33.1333923]],
        o_gps: 9883,
        owner: 'BKTV',
        start: 'MB',
        type: ['ROGAINE']
    },
    {
        name: 'Орехово',
        date: '2024-10-12',
        url: './maps/rogaine/beketov/orekhovo.webp',
        link: ['./original_maps/rogaine/beketov/Orehovo_new.webp','./original_maps/rogaine/beketov/orekhovo_omb_2024_omaps.webp'],
        o_gps: 20849,
        info: '<a href="https://www.multsport.ru/starts/omb24/">Инфо.</a>',
        bounds: [[60.5652098, 30.2192688], [60.5724639, 30.6206131], [60.3970666, 30.2323151]],
        owner: 'BKTV',
        start: 'MB',
        type: ['ROGAINE']
    },
    {
        name: 'Гора-Валдай',
        year: 2016,
        url: './maps/rogaine/beketov/gora_valday.webp',
        link: './original_maps/rogaine/beketov/sosnobyl.gif',
        bounds: [[59.9970119, 29.0936852], [59.9922904, 29.348259], [59.921818, 29.0893936]],
        owner: 'BKTV',
        type: ['ROGAINE']
    },
    {
        name: 'Каменногорск',
        date: '2023-05-18',
        url: './maps/rogaine/beketov/kamennogorsk_ba_2023.webp',
        o_gps: 16147,
        results: 'https://www.bikeadventure.ru/arhiv/arhiv-2023-1.php',
        link: ['./original_maps/rogaine/beketov/kamennogorsk_ba_2023_omaps.webp','https://www.bikeadventure.ru/upload/files/arhiv-2023-1/BA2023.jpg'],
        bounds: [[61.0690827, 28.7045288], [61.0300289, 29.3128109], [60.6612373, 28.5836792]],
        owner: 'BKTV',
        start: 'BA',
        type: ['ROGAINE']
    },
    {
        name: 'Боровинка',
        date: '2016-09-24',
        url: './maps/rogaine/beketov/borovinka_2012.webp',
        link: ['./original_maps/rogaine/beketov/omb2016.webp'],
        bounds: [[61.1240917, 29.086132], [61.1293967, 29.2486954], [60.9609439, 29.1041565]],
        owner: 'BKTV',
        start: 'MB',
        type: ['ROGAINE']
    },
    {
        name: 'Каменногорск',
        date: '2022-05-21',
        url: './maps/rogaine/beketov/kamennogorsk_2022.webp',
        link: './original_maps/rogaine/beketov/vmb22.jpg',
        bounds: [[61.0979681, 29.045105], [61.1079225, 29.3383026], [60.9409395, 29.066391]],
        owner: 'BKTV',
        start: 'MB',
        type: ['ROGAINE']
    },
    {
        name: 'Лосево',
        date: '2012-09-29',
        url: './maps/rogaine/beketov/losevo_2012.webp',
        link: './original_maps/rogaine/beketov/map_omb12.gif',
        bounds: [[60.9247601, 29.6325302], [60.9165839, 30.0249481], [60.6721696, 29.6084976]],
        owner: 'BKTV',
        start: 'MB',
        type: ['ROGAINE']
    },
    {
        name: 'Каннельярви',
        date: '2014-09-27',
        url: './maps/rogaine/beketov/kanneljarvy_ba_2014.webp',
        link: ['./original_maps/rogaine/beketov/kanneljarvy_ba_2014_omaps.png','./original_maps/rogaine/beketov/polyany_ba_2014_omaps.webp','./original_maps/rogaine/beketov/polyany_ba_2014_omaps.webp','https://www.bikeadventure.ru/upload/files/arhiv-2014-2/BAL-2014_karta_1.png','https://www.bikeadventure.ru/upload/files/arhiv-2014-2/BAL-2014_karta_2.png'],
        results: 'https://www.bikeadventure.ru/arhiv/arhiv-2014-2.php',
        bounds: [[60.3554889, 29.248867], [60.3557436, 29.4958878], [60.2617022, 29.248867]],
        owner: 'BKTV',
        start: 'BA',
        type: ['ROGAINE']
    },
    {
        name: 'Мельниково',
        date: '2016-05-28',
        url: './maps/rogaine/beketov/melnikovo_ba_2016.webp',
        link: ['./original_maps/rogaine/beketov/melnikovo_ba_2016_omaps.png','https://www.bikeadventure.ru/upload/files/arhiv-2016-1/BA2016_karta.png'],
        bounds: [[61.0699131, 29.1220093], [61.0893384, 29.8738861], [60.8429034, 29.1487885]],
        results: 'https://www.bikeadventure.ru/arhiv/arhiv-2016-1.php',
        owner: 'BKTV',
        start: 'BA',
        type: ['ROGAINE']
    },
    {
        name: 'Первомайское',
        date: '2024-10-05',
        url: './maps/rogaine/beketov/pervomayskoe_ba_2024.webp',
        link: './original_maps/rogaine/beketov/pervomayskoe_ba_2024_omaps.webp',
        bounds: [[60.4820929, 29.672699], [60.4107163, 29.8359489], [60.4301212, 29.5791435]],
        o_gps: 20726,
        results: 'https://www.bikeadventure.ru/arhiv/arhiv-2024-2.php',
        owner: 'BKTV',
        start: 'BA',
        type: ['ROGAINE']
    },
    {
        name: 'Воробьёво оз',
        year: 2013,
        url: './maps/rogaine/beketov/vorobjevo.webp',
        link: './original_maps/rogaine/beketov/vorob_1.jpg',
        bounds: [[61.0494787, 29.9731064], [61.0559593, 30.4856873], [60.6558538, 30.0084686]],
        owner: 'BKTV',
        type: ['ROGAINE']
    },
    {
        name: 'Снетковское оз',
        date: '2025-10-11',
        url: './maps/rogaine/beketov/snetkovskoe_ba_2025.webp',
        link: './original_maps/rogaine/beketov/snetkovskoe_ba_2025_omaps.gif',
        results: 'https://www.bikeadventure.ru/arhiv/arhiv-2025-2.php',
        o_gps: 23660,
        bounds: [[61.0433292, 30.1293182], [61.0499773, 30.3401184], [60.8912076, 30.1451111]],
        owner: 'BKTV',
        start: 'BA',
        type: ['ROGAINE'],
        zindex: 2
    },
    {
        name: 'Выборг',
        date: '2019-05-18',
        url: './maps/rogaine/beketov/vyborg_2019.webp',
        link: './original_maps/rogaine/beketov/vyborg_vmb_2019_omaps.webp',
        bounds: [[60.8475866, 28.3639526], [60.9275963, 28.5610199], [60.7093119, 28.6018753]],
        o_gps: {
            '1':5748,
            '2':5749
        },
        owner: 'BKTV',
        start: 'MB',
        type: ['ROGAINE']
    },
    {
        name: 'Лемболово',
        date: '2019-10-12',
        url: './maps/rogaine/beketov/lembolovo_mb_2019.webp',
        link: ['./original_maps/rogaine/beketov/lembolovo_omb_2019_1_omaps.webp','./original_maps/rogaine/beketov/lembolovo_omb_2019_2_omaps.webp'],
        bounds: [[60.5290835, 29.96315], [60.5353325, 30.3246689], [60.3817993, 29.9734497]],
        owner: 'BKTV',
        start: 'MB',
        type: ['ROGAINE']
    },
    {
        name: 'Яппиля',
        year: 2010,
        url: './maps/rogaine/beketov/jappilya.webp',
        link: './original_maps/rogaine/beketov/jappila.jpg',
        bounds: [[60.349375, 28.9414215], [60.3451286, 29.2521286], [60.169354, 28.9304352]],
        owner: 'BKTV',
        type: ['ROGAINE']
    },
    {
        name: 'Кирилловское, оз Глубокое',
        date: '2020-05-23',
        url: './maps/rogaine/beketov/kirillovskoe_2020.webp',
        link: './original_maps/rogaine/beketov/kirillovskoe_2020_omaps.webp',
        results: 'https://www.bikeadventure.ru/arhiv/arhiv-2020-1.php',
        bounds: [[60.821988, 29.0636444], [60.809767, 29.6476364], [60.4575564, 29.0365219]],
        owner: 'BKTV',
        start: 'BA',
        type: ['ROGAINE']
    },
    {
        name: 'Рощино',
        date: '2012-05-12',
        url: './maps/rogaine/beketov/roschino_2012.webp',
        link: './original_maps/rogaine/beketov/roschino_2012_omaps.jpg',
        bounds: [[60.3451286, 29.3475723], [60.344619, 29.7406769], [60.2045162, 29.3465424]],
        owner: 'BKTV',
        start: 'MB',
        type: ['ROGAINE']
    },
    {
        name: 'Цвелодубово, юг',
        year: 2017,
        url: './maps/rogaine/beketov/tsvelodubovo_south_2017.webp',
        link: './original_maps/rogaine/beketov/TA281017.All.jpg',
        bounds: [[60.3638511, 29.5583725], [60.3576964, 29.6607685], [60.3315789, 29.5497036]],
        owner: 'BKTV',
        start: 'TA',
        type: ['ROGAINE']
    },
    {
        name: 'Орехово, р Смородинка',
        year: 2018,
        url: './maps/rogaine/beketov/smorodinka_2018.webp',
        link: './original_maps/rogaine/beketov/map281018.png',
        bounds: [[60.4998492, 30.0915527], [60.502385, 30.2613258], [60.4404544, 30.0973892]],
        owner: 'BKTV',
        start: 'TA',
        type: ['ROGAINE']
    },
    {
        name: 'Калинино',
        date: '2015-05-30',
        url: './maps/rogaine/beketov/kalinino_2015.webp',
        link: ['./original_maps/rogaine/beketov/vmb2015_course.webp','./original_maps/rogaine/beketov/kalinino_vmb_2015_1_omaps.webp','./original_maps/rogaine/beketov/kalinino_vmb_2015_2_omaps.webp','./original_maps/rogaine/beketov/kalinino_vmb_2015_3_omaps.webp'],
        bounds: [[60.8238291, 28.4497833], [60.8218206, 28.6695099], [60.6668721, 28.4432602]],
        owner: 'BKTV',
        start: 'MB',
        type: ['ROGAINE']
    },
    {
        name: 'Пальцево',
        date: '2015-09-26',
        url: './maps/rogaine/beketov/paltsevo_mb_2015.webp',
        link: ['./original_maps/rogaine/beketov/paltsevo_omb_2015_1_omaps.webp','./original_maps/rogaine/beketov/paltsevo_omb_2015_2_omaps.webp'],
        bounds: [[60.9264285, 28.8525009], [60.909574, 29.1158295], [60.7497665, 28.805809]],
        owner: 'BKTV',
        start: 'MB',
        type: ['ROGAINE']
    },
    {
        name: 'Гвардейское',
        date: '2022-10-08',
        url: './maps/rogaine/beketov/gvardeyskoe_mb_2022.webp',
        link: './original_maps/rogaine/beketov/gvardeyskoe_mb_2022_omaps.jpg',
        bounds: [[60.8262558, 28.9850235], [60.8211511, 29.3173599], [60.7241735, 28.9785004]],
        owner: 'BKTV',
        start: 'MB',
        type: ['ROGAINE']
    },
    {
        name: 'Каменногорск',
        date: '2018-05-26',
        url: './maps/rogaine/beketov/kamennogorsk_ta_2018.webp',
        link: ['./original_maps/rogaine/beketov/kamennogorsk_ba_2018_omaps.webp','https://www.bikeadventure.ru/upload/files/arhiv-2018-1/BA18.png'],
        bounds: [[61.1710597, 29.0766907], [61.0166398, 29.433403], [61.05355, 28.8609123]],
        results: 'https://www.bikeadventure.ru/arhiv/arhiv-2018-1.php',
        owner: 'BKTV',
        start: ['BA','TA'],
        type: ['ROGAINE']
    },
    {
        name: 'Выборг, Лесной кордон',
        year: 2016,
        url: './maps/rogaine/beketov/vyborg_ta_2016.webp',
        link: './original_maps/rogaine/beketov/vyborg_ta_2016_omaps.gif',
        bounds: [[60.8101438, 28.5491753], [60.8080088, 28.6953449], [60.7605011, 28.5466862]],
        owner: 'BKTV',
        start: 'TA',
        type: ['ROGAINE']
    },
    {
        name: 'Выборг, Лесной кордон',
        date: '2017-04-30',
        url: './maps/rogaine/beketov/vyborg_ta_2017.webp',
        link: './original_maps/rogaine/beketov/vyborg_ta_2017_omaps.gif',
        bounds: [[60.8421507, 28.602047], [60.8403943, 28.6956024], [60.7770991, 28.5979271]],
        owner: 'BKTV',
        start: 'TA',
        type: ['ROGAINE']
    },
    {
        name: 'Луга',
        date: '2019-05-25',
        hidden: true,
        info: 'Лужский артиллерийский полигон.',
        url: './maps/rogaine/beketov/luga_ba_2019.webp',
        link: ['https://www.bikeadventure.ru/upload/files/arhiv-2019-1/BA19_1.png','https://www.bikeadventure.ru/upload/files/arhiv-2019-1/BA19_2.png'],
        //link: './original_maps/rogaine/beketov/luga_ba_2019_omaps.webp',
        bounds: [[58.7477226, 29.3530655], [58.746832, 29.8471069], [58.6433671, 29.3585587]],
        results: 'https://www.bikeadventure.ru/arhiv/arhiv-2019-1.php',
        owner: 'BKTV',
        start: ['BA','TA'],
        type: ['ROGAINE']
    },
    {
        name: 'Елизаветинка-Огоньки',
        date: '2010-05-22',
        info: 'Инженерно-испытательный полигон.',
        url: './maps/rogaine/beketov/elizavetinka_ogonki_2010.webp',
        link: 'https://kandid.ru/maps10/mbs_10.gif',
        //link: './original_maps/rogaine/beketov/elizavetinka_ogonki_vmb_2010_omaps',
        bounds: [[60.3987625, 29.9181747], [60.3239733, 30.2766037], [60.2717485, 29.813118]],
        owner: 'BKTV',
        start: 'MB',
        type: ['ROGAINE']
    },
    {
        name: 'Красная долина, оз Мамонтовское',
        date: '2025-05-31',
        results: 'https://www.bikeadventure.ru/arhiv/arhiv-2025-1.php',
        url: './maps/rogaine/beketov/red_valley_2025.webp',
        link: './original_maps/rogaine/beketov/red_valley_2025_omaps.gif',
        o_gps: 22755,
        bounds: [[60.6580409, 28.6928558], [60.6482818, 29.2744446], [60.1729402, 28.6667633]],
        owner: 'BKTV',
        start: 'BA',
        type: ['ROGAINE']
    },
    {
        name: 'Бородинское',
        date: '2025-05-24',
        url: './maps/rogaine/beketov/borodinskoe_mb_2025.webp',
        link: ['./original_maps/rogaine/beketov/borodinskoe_mb_2025_1_omaps.gif','./original_maps/rogaine/beketov/borodinskoe_mb_2025_2_omaps.gif'],
        o_gps: 22700,
        bounds: [[61.0226074, 29.2989063], [61.0279502, 29.500351], [60.8328448, 29.3206215]],
        owner: 'BKTV',
        start: 'MB',
        type: ['ROGAINE']
    },
];
