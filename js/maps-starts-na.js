let naStartsMaps = [
    /* --- Невский Азимут --- */
    {
        name: 'Лемболово',
        start: 'NA',
        year: 1989,
        url: './maps/starts/na/na_1989.webp',
        link: './original_maps/starts/na/na_1989_omaps.jpg',
        bounds: [[60.441258927991655, 30.28587341308594], [60.437257398671, 30.34037590026856], [60.41489057838761, 30.276260375976566]],
        author: 'BYMKV'
    },
    {
        name: 'Ильичёво, Долгое оз',
        start: 'NA',
        date: '1997-06-13',
        url: './maps/starts/na/na_1997_06_13.webp',
        link: './original_maps/starts/na/na_1997_06_13_omaps.jpg',
        bounds: [[60.30395229403978, 29.736213684082035], [60.298679337096054, 29.809598922729496], [60.263064617640104, 29.724197387695316]],
        author: ['KUZNTSV_S','KVZN']
    },
    {
        name: 'Лосево',
        start: 'NA',
        year: 2001,
        url: './maps/starts/na/na_2001_losevo_1.webp',
        link: ['./original_maps/starts/na/na_2001_losevo_1_omaps.jpg','./original_maps/forest/sosnovo/losevo_2005_10000_omaps.ocd'],
        bounds: [[60.693750112330534, 29.93358135223389], [60.68938054701066, 30.012373924255375], [60.66996241651063, 29.928731918334964]],
        author: ['RYLOV_V','VSLVSKY','BRDR','FDRV_L','DRBSHV','SHKLV']
    },
    {
        name: 'Лосево',
        start: 'NA',
        year: 2001,
        url: './maps/starts/na/na_2001_losevo_3.webp',
        link: ['./original_maps/starts/na/na_2001_losevo_3_omaps.jpg','./original_maps/starts/na/na_2000_losevo_3_omaps.jpg','./original_maps/forest/sosnovo/losevo_2005_omaps.ocd'],
        bounds: [[60.69515749014434, 29.892253875732422], [60.691502381234336, 29.95628356933594], [60.67174920579566, 29.88839149475098]],
        author: ['RYLOV_V','VSLVSKY','BRDR','FDRV_L','FDRV_A','SHKLV']
    },
    {
        name: 'Зеленогорск, Чёрные оз',
        start: 'NA',
        year: 2000,
        startYear: 2003,
        url: './maps/starts/na/na_2003_zelik_1.webp',
        link: './original_maps/starts/na/na_2003_zelik_1_omaps.jpg',
        bounds: [[60.241515279872864, 29.778184890747074], [60.23989637759796, 29.81595039367676], [60.21547533528821, 29.77303504943848]],
        author: ['KUZNTSV_S','SHRNN']
    },
    {
        name: 'Орехово, Ястребиное',
        start: 'NA',
        year: 2002,
        url: './maps/starts/na/na_2002_yastrebinoe.webp',
        link: './original_maps/starts/na/na_2002_yastrebinoe_omaps.jpg',
        bounds: [[60.46929814463166, 30.319476127624515], [60.465934716774235, 30.369172096252445], [60.42935875470396, 30.3083610534668]],
        author: ['VSLVSKY','BRDR','DRBSHV']
    },
    {
        name: 'Зеленогорск, Серенада',
        start: 'NA',
        year: 2002,
        startYear: 2003,
        url: './maps/starts/na/na_2003_zelik_2.webp',
        link: './original_maps/starts/na/na_2003_zelik_2_omaps.jpg',
        bounds: [[60.23073529200227, 29.742221832275394], [60.22881753132242, 29.782648086547855], [60.203044732121036, 29.736728668212894]],
        author: ['KUZNTSV_S','SHRNN','VSLVSKY']
    },
    {
        name: 'Борисово',
        start: 'NA',
        date: '2007-06-16',
        info: '<a href="https://o-site.spb.ru/race.php?id=070615">Инфо и результаты.</a>',
        url: './maps/starts/na/na_2007_06_16.webp',
        link: './original_maps/starts/na/na_2007_06_16_omaps.jpg',
        bounds: [[60.626923413319204, 29.907703399658207], [60.623386864387335, 29.952764511108402], [60.60915254498199, 29.90083694458008]],
        author: 'VSLVSKY'
    },
    {
        name: 'Мичуринское',
        start: 'NA',
        date: '2008-06-12',
        info: 'Спринт 30. <a href="https://o-site.spb.ru/race.php?id=080612_NA">Инфо и результаты.</a>',
        url: './maps/starts/na/na_2008_06_12.webp',
        link: './original_maps/starts/na/na_2008_06_12_omaps.jpg',
        bounds: [[60.62494467777671, 29.913454055786133], [60.62210266434053, 29.951949119567875], [60.612501122841586, 29.908733367919925]]
    },
    {
        name: 'Мичуринское',
        start: 'NA',
        date: '2008-06-13',
        info: 'Классика 50. <a href="https://o-site.spb.ru/race.php?id=080612_NA">Инфо и результаты.</a>',
        url: './maps/starts/na/na_2008_06_13.webp',
        link: './original_maps/starts/na/na_2008_06_13_omaps.jpg',
        bounds: [[60.62366053975521, 29.907703399658207], [60.6212394847569, 29.935469627380375], [60.605972127329714, 29.901266098022464]],
    },
    {
        name: 'Мичуринское',
        start: 'NA',
        date: '2008-06-14',
        info: 'Классика 40. <a href="https://o-site.spb.ru/race.php?id=080612_NA">Инфо и результаты.</a>',
        url: './maps/starts/na/na_2008_06_14.webp',
        link: './original_maps/starts/na/na_2008_06_14_omaps.jpg',
        bounds: [[60.62521833992628, 29.894056320190433], [60.622671087061754, 29.920535087585453], [60.60630914007171, 29.887747764587406]],
    },
    {
        name: 'Ягодное, оз Расстанное',
        start: 'NA',
        date: '2010-06-12',
        info: 'Спринт 30. <a href="https://o-site.spb.ru/race.php?id=10061214_na">Инфо и результаты.</a>',
        url: './maps/starts/na/na_2010_06_12.webp',
        link: ['./original_maps/starts/na/na_2010_06_12_omaps.jpg','./original_maps/starts/na/na_2010_06_12_omaps.ocd'],
        bounds: [[60.624797320272805, 29.93529796600342], [60.621576338074355, 29.969372749328613], [60.6142489845736, 29.932250976562504]]
    },
    {
        name: 'Ягодное, оз Берестовое',
        start: 'NA',
        date: '2010-06-13',
        info: 'Классика 50. <a href="https://o-site.spb.ru/race.php?id=10061214_na">Инфо и результаты.</a>',
        url: './maps/starts/na/na_2010_06_13.webp',
        link: './original_maps/starts/na/na_2010_06_13_omaps.jpg',
        bounds: [[60.63300621221419, 29.943151473999027], [60.62808112781671, 29.99404907226563], [60.62003941622446, 29.938259124755863]]
    },
    {
        name: 'Ягодное, оз Берестовое',
        start: 'NA',
        date: '2010-06-14',
        info: 'Гандикап, классика 40. <a href="https://o-site.spb.ru/race.php?id=10061214_na">Инфо и результаты.</a>',
        url: './maps/starts/na/na_2010_06_14.webp',
        link: ['./original_maps/starts/na/na_2010_06_14_omaps.jpg','./original_maps/starts/na/na_2010_06_14_omaps.ocd'],
        bounds: [[60.625723556255636, 29.913282394409183], [60.62347107244017, 29.944009780883793], [60.611995699392594, 29.908218383789062]]
    },
    {
        name: 'Ягодное-Мичуринское',
        start: 'NA',
        date: '2011-06-12',
        info: 'Классика 50. <a href="https://o-site.spb.ru/race.php?id=11061012_NA">Инфо и результаты.</a>',
        url: './maps/starts/na/na_2011_06_12.webp',
        link: './original_maps/starts/na/na_2011_06_12_omaps.jpg',
        bounds: [[60.625281492400255, 29.89392757415772], [60.622081611454774, 29.92907524108887], [60.60603531748686, 29.88787651062012]]
    },
    {
        name: 'Первомайское, Семейные оз',
        start: 'NA',
        date: '2012-06-15',
        info: 'Спринт. <a href="https://o-site.spb.ru/race.php?id=12061517_NA">Инфо и результаты.</a>',
        url: './maps/starts/na/na_2012_06_15_pervomayskoe.webp',
        link: './original_maps/starts/na/na_2012_06_15_pervomayskoe_omaps.gif',
        bounds: [[60.41745422376506, 29.6312427520752], [60.41563214947346, 29.660511016845707], [60.403976934847414, 29.628152847290043]],
        author: ['MKHLV_A','SLBDNK','GVRLK'],
        owner: 'WN'
    },
    {
        name: 'Первомайское, Семейные оз',
        start: 'NA',
        date: '2012-06-16',
        info: 'Классика. <a href="https://o-site.spb.ru/race.php?id=12061517_NA">Инфо и результаты.</a>',
        url: './maps/starts/na/na_2012_pervomayskoe.webp',
        link: './original_maps/starts/na/na_2012_pervomayskoe_omaps.jpg',
        bounds: [[60.42978232318777, 29.666261672973636], [60.427600886521, 29.7006368637085], [60.40510025550276, 29.660253524780277]],
        author: ['MKHLV_A','SLBDNK','GVRLK'],
        owner: 'WN'
    },
    {
        name: 'Журавлёво, Раздельные оз',
        start: 'NA',
        date: '2013-06-14',
        info: 'Спринт. <a href="https://o-site.spb.ru/race.php?id=13061416_NA">Инфо и результаты.</a>',
        url: './maps/starts/na/na_2013_06_14.webp',
        link: './original_maps/starts/na/na_2013_06_14_omaps.jpg',
        bounds: [[60.624923626745954, 29.934568405151367], [60.62180792268954, 29.968214035034183], [60.61125860933876, 29.931221008300785]],
        author: ['VSLVSKY','DRBSHV','MKHLV_A','SLBDNK','GVRLK']
    },
    {
        name: 'Журавлёво, Раздельные оз',
        start: 'NA',
        date: '2013-06-15',
        info: 'Удлинённая дистанция. <a href="https://o-site.spb.ru/race.php?id=13061416_NA">Инфо и результаты.</a>',
        url: './maps/starts/na/na_2013_razdelnoe.webp',
        link: './original_maps/starts/na/na_2013_razdelnoe_omaps.jpg',
        bounds: [[60.62965976242521, 29.86714839935303], [60.624376295123234, 29.921436309814457], [60.6049189398304, 29.8579216003418]],
        author: ['VSLVSKY','DRBSHV','MKHLV_A','SLBDNK','GVRLK']
    },
    {
        name: 'Журавлёво, Раздельные оз',
        start: 'NA',
        date: '2013-06-16',
        info: 'Средняя дистанция. <a href="https://o-site.spb.ru/race.php?id=13061416_NA">Инфо и результаты.</a>',
        url: './maps/starts/na/na_2013_06_16.webp',
        link: './original_maps/starts/na/na_2013_06_16_omaps.jpg',
        bounds: [[60.63336398818018, 29.948644638061527], [60.62968081036457, 29.997396469116214], [60.61953411085394, 29.94482517242432]],
        author: ['VSLVSKY','DRBSHV','MKHLV_A','SLBDNK','GVRLK']
    },
    {
        name: 'Первомайское, Дедово оз',
        start: 'NA',
        date: '2014-06-12',
        info: 'Спринт. <a href="https://o-site.spb.ru/race.php?id=14061215-NA">Инфо и результаты.</a>',
        url: './maps/starts/na/na_2014_06_12.webp',
        link: './original_maps/starts/na/na_2014_06_12_omaps.jpg',
        bounds: [[60.418577079181006, 29.66514587402344], [60.41633132958417, 29.699435234069828], [60.403213902476786, 29.661369323730472]],
        author: ['MKHLV_A','SLBDNK','GVRLK'],
        owner: 'WN'
    },
    {
        name: 'Первомайское, Дедово оз',
        start: 'NA',
        date: '2014-06-14',
        info: 'Удлинённая дистанция. <a href="https://o-site.spb.ru/race.php?id=14061215-NA">Инфо и результаты.</a>',
        url: './maps/starts/na/na_2014_pervomayskoe.webp',
        link: './original_maps/starts/na/na_2014_pervomayskoe_omaps.jpg',
        bounds: [[60.41940330652238, 29.69711780548096], [60.41688218817723, 29.73381042480469], [60.39676980457594, 29.691324234008793]],
        author: ['MKHLV_A','SLBDNK','GVRLK'],
        owner: 'WN'
    },
    {
        name: 'Первомайское, Дедово оз',
        start: 'NA',
        date: '2014-06-15',
        info: 'Средняя дистанция. <a href="https://o-site.spb.ru/race.php?id=14061215-NA">Инфо и результаты.</a>',
        url: './maps/starts/na/na_2014_06_15.webp',
        link: './original_maps/starts/na/na_2014_06_15_omaps.jpg',
        bounds: [[60.43600814309618, 29.651627540588382], [60.43467413921419, 29.684543609619144], [60.41957278645957, 29.64797973632813]],
        author: ['MKHLV_A','SLBDNK','GVRLK'],
        owner: 'WN'
    },
    {
        name: 'Борисово, Долгое оз',
        start: 'NA',
        date: '2015-06-12',
        info: 'Спринт 25. <a href="https://o-site.spb.ru/race.php?id=15061215_NA">Инфо и результаты.</a>',
        url: './maps/starts/na/na_2015_06_12.webp',
        link: './original_maps/starts/na/na_2015_06_12_omaps.jpg',
        bounds: [[60.619197236209565, 29.908432960510257], [60.61736541875945, 29.937486648559574], [60.6054034103482, 29.903755187988285]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN'
    },
    {
        name: 'Борисово, Долгое оз',
        start: 'NA',
        date: '2015-06-13',
        info: 'Классика 60. <a href="https://o-site.spb.ru/race.php?id=15061215_NA">Инфо и результаты.</a>',
        url: './maps/starts/na/na_2015_dolgoe.webp',
        link: './original_maps/starts/na/na_2015_dolgoe_omaps.jpg',
        bounds: [[60.600726913009844, 29.93220806121826], [60.59824093145107, 29.969458580017093], [60.57480431202988, 29.92401123046875]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN'
    },
    {
        name: 'Борисово, Долгое оз',
        start: 'NA',
        date: '2015-06-14',
        info: 'Классика 40. <a href="https://o-site.spb.ru/race.php?id=15061215_NA">Инфо и результаты.</a>',
        url: './maps/starts/na/na_2015_06_14.webp',
        link: './original_maps/starts/na/na_2015_06_14_omaps.jpg',
        bounds: [[60.624523654550764, 29.914484024047855], [60.621702657161485, 29.95847225189209], [60.60801521307867, 29.909806251525882]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN'
    },
    {
        name: 'Первомайское, р Волочаевка',
        start: 'NA',
        date: '2016-06-17',
        info: 'Спринт 25. <a href="https://o-site.spb.ru/race.php?id=16061719_">Инфо и результаты.</a>',
        url: './maps/starts/na/na_2016_06_17.webp',
        link: './original_maps/starts/na/na_2016_06_17_omaps.jpg',
        bounds: [[60.41955160151573, 29.63746547698975], [60.41808980706342, 29.66291427612305], [60.402514440420774, 29.633088111877445]],
        author: ['MKHLV_A','SLBDNK','GVRLK'],
        owner: 'WN'
    },
    {
        name: 'Первомайское, р Волочаевка',
        start: 'NA',
        date: '2016-06-18',
        info: 'Классика 60. <a href="https://o-site.spb.ru/race.php?id=16061719_">Инфо и результаты.</a>',
        url: './maps/starts/na/na_2016_pervomayskoe.webp',
        link: './original_maps/starts/na/na_2016_pervomayskoe_omaps.jpg',
        bounds: [[60.4402003702851, 29.657506942749027], [60.4382948795123, 29.68462944030762], [60.42209369625005, 29.653301239013675]],
        author: ['MKHLV_A','SLBDNK','GVRLK'],
        owner: 'WN'
    },
    {
        name: 'Первомайское, р Волочаевка',
        start: 'NA',
        date: '2016-06-19',
        info: 'Классика 40. <a href="https://o-site.spb.ru/race.php?id=16061719_">Инфо и результаты.</a>',
        url: './maps/starts/na/na_2016_06_19.webp',
        link: './original_maps/starts/na/na_2016_06_19_omaps.jpg',
        bounds: [[60.420632016057716, 29.660811424255375], [60.41830166540286, 29.696516990661625], [60.405937422094006, 29.65692758560181]],
        author: ['MKHLV_A','SLBDNK','GVRLK'],
        owner: 'WN'
    },
    {
        name: 'Ягодное, Раздельные оз',
        start: 'NA',
        date: '2017-06-09',
        info: 'Спринт 25. <a href="https://o-site.spb.ru/race.php?id=17060911">Инфо и результаты.</a>',
        url: './maps/starts/na/na_2017_06_09.webp',
        link: './original_maps/starts/na/na_2017_06_09_omaps.jpg',
        bounds: [[60.63508967531378, 29.95752811431885], [60.633385033701586, 29.979329109191898], [60.62016574133031, 29.953365325927738]],
        author: ['MKHLV_A','MLNKV_L','SLBDNK','TKMKV_K','KUZNTSV_S','VRBY']
    },
    {
        name: 'Ягодное, Раздельные оз',
        start: 'NA',
        date: '2017-06-10',
        info: 'Классика 60. <a href="https://o-site.spb.ru/race.php?id=17060911">Инфо и результаты.</a>',
        url: './maps/starts/na/na_2017_zhuravlevo.webp',
        link: './original_maps/starts/na/na_2017_zhuravlevo_omaps.jpg',
        bounds: [[60.628249519190376, 29.902296066284183], [60.624523654550764, 29.952979087829593], [60.61090058809483, 29.89736080169678]],
        author: ['MKHLV_A','MLNKV_L','SLBDNK','TKMKV_K','KUZNTSV_S','VRBY']
    },
    {
        name: 'Ягодное, Раздельные оз',
        start: 'NA',
        date: '2017-06-11',
        info: 'Классика 40. <a href="https://o-site.spb.ru/race.php?id=17060911">Инфо и результаты.</a>',
        url: './maps/starts/na/na_2017_06_11.webp',
        link: './original_maps/starts/na/na_2017_06_11_omaps.jpg',
        bounds: [[60.63344817018343, 29.9677848815918], [60.630228051965716, 30.009112358093265], [60.61831292353035, 29.963450431823734]],
        author: ['MKHLV_A','MLNKV_L','SLBDNK','TKMKV_K','KUZNTSV_S','VRBY']
    },
    {
        name: 'Лемболово',
        start: 'NA',
        date: '2018-06-09',
        info: 'Спринт. <a href="https://o-site.spb.ru/race.php?id=18060911">Инфо и результаты.</a>',
        url: './maps/starts/na/na_2018_06_09.webp',
        link: './original_maps/starts/na/na_2018_06_09_omaps.jpg',
        bounds: [[60.45948188276528, 30.28093814849854], [60.45647717492073, 30.317416191101078], [60.44680520662692, 30.27613162994385]],
        author: ['TKMKV_K','KVZN','NSNV','MLNKV_L','VRBY'],
        owner: 'TOKM'
    },
    {
        name: 'Лемболово',
        start: 'NA',
        date: '2018-06-10',
        info: 'Классика. <a href="https://o-site.spb.ru/race.php?id=18060911">Инфо и результаты.</a>',
        url: './maps/starts/na/na_2018_lembolovo.webp',
        link: './original_maps/starts/na/na_2018_lembolovo_omaps.jpg',
        bounds: [[60.4525833371081, 30.31690120697022], [60.44978964411541, 30.35209178924561], [60.42889282299763, 30.30986309051514]],
        author: ['TKMKV_K','KVZN','NSNV','MLNKV_L','VRBY'],
        owner: 'TOKM'
    },
    {
        name: 'Лемболово',
        start: 'NA',
        date: '2018-06-11',
        info: 'Классика. <a href="https://o-site.spb.ru/race.php?id=18060911">Инфо и результаты.</a>',
        url: './maps/starts/na/na_2018_06_11.webp',
        link: './original_maps/starts/na/na_2018_06_11_omaps.jpg',
        bounds: [[60.46832511328194, 30.32432556152344], [60.46578663332429, 30.35955905914307], [60.44382049494318, 30.316042900085453]],
        author: ['TKMKV_K','KVZN','NSNV','MLNKV_L','VRBY'],
        owner: 'TOKM'
    },
    {
        name: 'Луга, р Свинечная',
        start: 'NA',
        date: '2019-06-07',
        info: 'Спринт 20. <a href="https://o-site.spb.ru/race.php?id=190607">Инфо и результаты.</a>',
        url: './maps/starts/na/na_2019_06_07.webp',
        link: './original_maps/starts/na/na_2019_06_07_omaps.jpg',
        bounds: [[58.71925653610351, 29.80054378509522], [58.71747384917392, 29.819684028625492], [58.71092169044915, 29.79753971099854]],
        author: ['TKMKV_K','KVZN','NSNV']
    },
    {
        name: 'Луга, р Свинечная',
        start: 'NA',
        date: '2019-06-08',
        info: 'Классика 50. <a href="https://o-site.spb.ru/race.php?id=190607">Инфо и результаты.</a>',
        url: './maps/starts/na/na_2019_luga.webp',
        link: './original_maps/starts/na/na_2019_luga_omaps.jpg',
        bounds: [[58.72061577354446, 29.768142700195316], [58.71629276880788, 29.815478324890137], [58.70354346464922, 29.762392044067386]],
        author: ['TKMKV_K','KVZN','NSNV']
    },
    {
        name: 'Луга, р Свинечная',
        start: 'NA',
        date: '2019-06-09',
        info: 'Классика 40. <a href="https://o-site.spb.ru/race.php?id=190607">Инфо и результаты.</a>',
        url: './maps/starts/na/na_2019_06_09.webp',
        link: './original_maps/starts/na/na_2019_06_09_omaps.jpg',
        bounds: [[58.721997239178854, 29.772348403930668], [58.71876630629848, 29.807882308959964], [58.70931689218292, 29.76782083511353]],
        author: ['TKMKV_K','KVZN','NSNV']
    },
    {
        name: 'Колосково',
        start: 'NA',
        date: '2023-06-10',
        info: 'Спринт 20. <a href="https://o-site.spb.ru/race.php?id=230612">Инфо и результаты.</a>',
        url: './maps/starts/na/na_2023_06_10.webp',
        link: './original_maps/starts/na/na_2023_06_10_omaps.jpg',
        bounds: [[60.61690218407662, 30.187339782714847], [60.61532292494163, 30.204656124114994], [60.60507692014604, 30.182662010192875]],
        author: ['DJCHKV','PPV_D'],
        owner: 'SHEIN'
    },
    {
        name: 'Колосково',
        start: 'NA',
        date: '2023-06-11',
        info: 'Классика 50. <a href="https://o-site.spb.ru/race.php?id=230612">Инфо и результаты.</a>',
        url: './maps/starts/na/na_2023_koloskovo.webp',
        link: './original_maps/starts/na/na_2023_koloskovo_omaps.jpg',
        bounds: [[60.626965512756385, 30.194892883300785], [60.62366053975521, 30.229139328002933], [60.602980985041754, 30.184936523437504]],
        author: ['DJCHKV','PPV_D'],
        owner: 'SHEIN'
    },
    {
        name: 'Колосково',
        start: 'NA',
        date: '2023-06-12',
        info: 'Классика 40. <a href="https://o-site.spb.ru/race.php?id=230612">Инфо и результаты.</a>',
        url: './maps/starts/na/na_2023_06_12.webp',
        link: './original_maps/starts/na/na_2023_06_12_omaps.jpg',
        bounds: [[60.61879719300018, 30.203411579132084], [60.61565984004373, 30.2354907989502], [60.60195929899634, 30.196309089660648]],
        author: ['DJCHKV','PPV_D'],
        owner: 'SHEIN'
    },
];