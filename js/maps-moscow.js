let moscowMaps = [
    {
        name: 'Лосиный остров',
        year: 2013,
        url: './maps/moscow/losiny_ostrov_rogaine_2013.webp',
        link: './original_maps/moscow/lr/losiny_ostrov_rogaine_2013_omaps.gif',
        bounds: [[55.9274711, 37.6961517], [55.9056339, 37.91502], [55.8190301, 37.6638794]],
        author: 'RMNV_A',
        owner: 'KSTKN_SITE',
        type: ['ROGAINE']
    },
    {
        name: 'Суханово',
        year: 2011,
        url: './maps/moscow/sukhanovo_2011.webp',
        link: './original_maps/moscow/sukhanovo_2011_omaps.gif',
        bounds: [[55.5424247, 37.5933266], [55.5512621, 37.6735783], [55.4823068, 37.6136684]],
        owner: 'KSTKN_SITE',
        type: ['ROGAINE']
    },
    {
        name: 'Покров',
        year: 2014,
        url: './maps/moscow/pokrov_rogaine_2014.webp',
        link: './original_maps/moscow/pokrov_rogaine_2014_omaps.jpg',
        bounds: [[56.1646707, 38.7559891], [56.1637866, 39.4967508], [55.850939, 38.7577057]],
        owner: 'KSTKN_SITE',
        type: ['ROGAINE'],
        zindex: -1
    },
    {
        name: 'Воскресенск',
        year: 2012,
        url: './maps/moscow/voskresensk_rogaine_2012.webp',
        link: './original_maps/moscow/voskresensk_rogaine_2012_omaps.gif',
        bounds: [[55.4957769, 38.6636353], [55.4436215, 39.1439438], [55.1433681, 38.5438156]],
        owner: 'KSTKN_SITE',
        type: ['ROGAINE']
    },
    {
        name: 'Пески',
        year: 2016,
        url: './maps/moscow/lr/peski_rogaine_2016.webp',
        link: './original_maps/moscow/lr/peski_rogaine_2016_omaps.gif',
        bounds: [[55.2313236, 38.7578773], [55.2159515, 38.8987255], [55.1492542, 38.7295532]],
        start: 'ZM',
        type: ['ROGAINE']
    },
    {
        name: 'Ляпино',
        date: '2025-05-10',
        url: './maps/moscow/ak/electrogorsk_rogaine_2025.webp',
        link: './original_maps/moscow/ak/electrogorsk_rogaine_2025_omaps.gif',
        info: 'Весенний Компот-рогейн.',
        bounds: [[56.043185, 38.7978745], [56.0140251, 39.0361404], [55.890716, 38.7376213]],
        o_gps: 22250,
        owner: 'KMPT',
        start: 'KMPT_ROGAINE',
        type: ['ROGAINE']
    },
    {
        name: 'Куровское',
        date: '2023-08-26',
        url: './maps/moscow/ak/kurovskoe_rogaine_2023.webp',
        link: './original_maps/moscow/ak/kurovskoe_rogaine_2023_omaps.webp',
        bounds: [[55.7575488, 39.1544151], [55.7062241, 39.2797279], [55.6035661, 38.9386368]],
        o_gps: 17066,
        type: ['ROGAINE']
    },
    {
        name: 'Электрогорск',
        date: '2025-10-04',
        url: './maps/moscow/ak/electrogorsk_compact_rogaine_2025.webp',
        link: './original_maps/moscow/ak/electrogorsk_compact_rogaine_2025_omaps.webp',
        info: 'Компактный рогейн.',
        bounds: [[55.9054896, 38.8052559], [55.8937482, 38.9014721], [55.8536852, 38.7848282]],
        o_gps: 23573,
        author: 'MDZL',
        type: ['ROGAINE']
    },
    {
        name: 'Парк усадьбы Усачёвых-Найдёновых',
        year: 1,
        url: './maps/moscow/sz/usachevy_naidenovy_retro.webp',
        link: './original_maps/moscow/sz/usachevy_naidenovy_retro_omaps.webp',
        bounds: [[55.7537453, 37.6568627], [55.7532019, 37.6624525], [55.750672, 37.6558113]],
    },
    {
        name: 'Некрасовский',
        year: 1,
        url: './maps/moscow/nekrasovsky.webp',
        link: './original_maps/moscow/nekrasovsky_omaps.jpg',
        bounds: [[56.0966994, 37.4419212], [56.0906187, 37.4949646], [56.0734247, 37.433424]],
        author: 'IGNTNKO'
    },
    {
        name: 'Зосимова пустынь',
        year: 1963,
        url: './maps/moscow/zosimova_pustyn_1963.webp',
        link: ['./original_maps/moscow/zosimova_pustyn_1963_bw_omaps.jpg','./original_maps/moscow/zosimova_pustyn_1963_omaps.jpg'],
        info: '<a href="https://o-moscow.ru/years/chronology_1963.html">Соревнование туристов МАИ на маркированной дистанции.</a>',
        bounds: [[55.436026, 36.8096924], [55.4307667, 36.9140625], [55.3473034, 36.8141556]]
    },
    {
        name: 'Зосимова пустынь',
        year: 1973,
        url: './maps/moscow/zosimova_pustyn_1973.webp',
        link: './original_maps/moscow/zosimova_pustyn_1973_omaps.gif',
        info: '<a href="https://t.me/moscow_orient/1838">Осенний призыв</a>. С этих соревнований началась история "Осенних встреч". Старт прошёл в формате рогейна с форой по разрядам. Мероприятие провёл Н.Н. Куницын перед уходом в армию - позже будущий президент ФСО Москвы.',
        bounds: [[55.4338834, 36.7604256], [55.4315946, 36.7981052], [55.402023, 36.7539024]],
    },
    {
        name: 'Зосимова пустынь',
        year: 1977,
        url: './maps/moscow/sz/zosimova_pustyn_1977.webp',
        link: './original_maps/moscow/sz/zosimova_pustyn_1977_omaps.jpg',
        bounds: [[55.419905, 36.8172026], [55.4110625, 36.8347979], [55.3956624, 36.7745447]],
    },
    {
        name: 'Рождественно',
        date: '1970-06-21',
        url: './maps/moscow/lr/rozhdestvenno_1970.webp',
        link: './original_maps/moscow/lr/rozhdestvenno_1970_omaps.jpg',
        info: '<a href="https://t.me/rogainomania/412">Приз Московского совета по туризму и экскурсиям, Кубок Москвы</a>. Победили будущий председатель Федерации ориентирования Москвы Николай Куницын и мастер спорта Татьяна Рязанская. В старте приняли участие почти 500 человек, включая 12 МС и 26 КМС.',
        bounds: [[56.1496136, 37.6367569], [56.1398591, 37.723875], [56.1126387, 37.6238823]],
    },
    {
        name: 'Матрёнино',
        year: 1979,
        url: './maps/moscow/lr/matrenino_1979.webp',
        link: './original_maps/moscow/lr/matrenino_1979_omaps.jpg',
        info: 'XXX слёт ЦСТ МАИ.',
        bounds: [[56.0100187, 36.0632229], [56.0071636, 36.0944653], [55.9867397, 36.0600471]],
    },
    {
        name: 'Волкуша',
        year: 1970,
        url: './maps/moscow/volkusha_1970.webp',
        link: './original_maps/moscow/volkusha_1970_omaps.jpg',
        bounds: [[55.6179156, 37.8801298], [55.6151043, 37.9172945], [55.5925337, 37.872448]]
    },
    {
        name: 'Лыткарино, Волкуша',
        year: 1989,
        logo: 'gnom.jpg',
        url: './maps/moscow/lytkarino_1989.webp',
        link: ['./original_maps/moscow/lr/lytkarino_1989_omaps.jpg','./original_maps/moscow/volkusha_1989_omaps.jpg'],
        bounds: [[55.6193697, 37.8777695], [55.6158556, 37.9164791], [55.5920002, 37.8711176]],
        author: ['STLV_S','MLNKV_V','ZLTRV_S','PTPKN']
    },
    {
        name: 'Терехово',
        year: 1965,
        info: '<a href="https://t.me/lamporient/6379">24 октября. Марафонское ориентирование. "Золотая осень"</a>',
        url: './original_maps/moscow/terekhovo_1965_omaps.jpg',
        link: './original_maps/moscow/terekhovo_1965_omaps.jpg',
        bounds: [[56.1615164, 37.0721626], [56.167347, 37.1993637], [56.0934916, 37.0711327]]
    },
    {
        name: 'Восточное Измайлово',
        year: 1983,
        url: './maps/moscow/ak/izmailovo_1983.webp',
        link: './original_maps/moscow/ak/izmailovo_1983_omaps.jpg',
        bounds: [[55.8078414, 37.8221512], [55.8065632, 37.8464842], [55.7817862, 37.8175592]],
        author: ['SDRNK','SMKN_S']
    },
    {
        name: 'Восточное Измайлово',
        year: 1990,
        url: './maps/moscow/ak/izmailovo_1990.webp',
        link: './original_maps/moscow/ak/izmailovo_1990_omaps.jpg',
        bounds: [[55.8035965, 37.8183746], [55.8034518, 37.8449821], [55.7751731, 37.8182888]],
        author: 'PTPKN'
    },
    {
        name: 'Измайловский ПКиО',
        year: 1989,
        url: './maps/moscow/ak/izmailovo_1989.webp',
        link: './original_maps/moscow/ak/izmailovo_1989_omaps.jpg',
        bounds: [[55.7777798, 37.747736], [55.7765006, 37.7741718], [55.7593599, 37.7432728]],
        author: 'SDRNK'
    },
    {
        name: 'Измайловский парк',
        year: 1966,
        info: 'ПЕРВЫЙ "БЛИН" — НЕ КОМОМ<br /><br />' +
            'В воскресенье более 300 лыжников с картами и компасами в руках рассыпались по аллеям и просекам Измайловского лесопарка. ' +
            'Впервые соревнования по ориентированию проводились в черте города. Их организовали Союз спортобществ, совет ДСО «Труд» и клуб туристов Первомайского района.<br />' +
            'В борьбу вступили спортсмены 22 коллективов. На старте участникам вручалась карта с расположением контрольных пунктов. В зависимости от сложности отыскания ' +
            'и удаленности каждый пункт оценивался определенным количеством очков. Побеждал тот, кто за контрольное время набирал наибольшую сумму очков.<br />' +
            'Первой среди женщин была инженер электрозавода А. Шеленкова. За 1 час 23 мин. 44 сек. она побывала На 10 пунктах и набрала 54 очка. ' +
            'И. Ильина из спортклуба «Луч» заняла 2-е место, уступив победительнице только по времени (1 час 28 мин.).<br />' +
            'У мужчин трое участников посетили все пункты и набрали по 62 очка. Но инженеру электрозавода Ю. Петухову потребовалось на это 1 час 50 мин. 40 сек., ' +
            'а занявшим 2-е и 3-е места студенту А. Юрчуку и выпускнику МВТУ А. Уварову почти на 4 мин. больше.<br />' +
            'Первое командное место завоевали ориентировщики «Луча». Электрозаводцы — на втором.<br />' +
            'Первый «блин» явно удался. Тысячи москвичей наблюдали за ходом спортивной борьбы. Москва — город где парки весьма гармонически вписаны в жилые кварталы. ' +
            'И городская секция спортивного ориентирования должна чаще использовать эти своеобразные лесные стадионы.<br /><br />' +
            'Б. ОГОРОДНИКОВ, мастер спорта<br />' +
            '"Московский комсомолец" от 11 января 1966 года<br />' +
            '© <a href="https://t.me/lamporient/6438">ЛАМПОВОЕ ОРИЕНТИРОВАНИЕ</a><br />',
        url: './maps/moscow/ak/izmailovsky_1966.webp',
        link: './original_maps/moscow/ak/izmailovsky_1966_omaps.jpg',
        bounds: [[55.7883981, 37.7620697], [55.7887842, 37.8179455], [55.7661447, 37.7641296]],
        type: ['PARK']
    },
    {
        name: 'Измайловский парк',
        year: 1988,
        url: './maps/moscow/ak/izmailovsky_1988.webp',
        link: './original_maps/moscow/ak/izmailovsky_1988_omaps.jpg',
        bounds: [[55.7907144, 37.7633572], [55.7885911, 37.8224087], [55.7650341, 37.7570915]],
        author: 'KRNVA',
        type: ['PARK']
    },
    {
        name: 'Лыткино',
        year: 1976,
        info: '<a href="https://t.me/lamporient/6401">17 октября. Марафонское ориентирование. "Золотая осень"</a>',
        logo: 'golden_autumn_1976.jpg',
        url: './maps/moscow/lytkino_1976.webp',
        link: ['./original_maps/moscow/lr/lytkino_1976_1_omaps.jpg','./original_maps/moscow/lr/lytkino_1976_2_omaps.jpg'],
        bounds: [[56.0332597, 36.9301987], [56.0308139, 36.9927692], [56.0045722, 36.9283962]]
    },
    {
        name: 'Ульяновский л/п',
        year: 1989, // ??
        url: './maps/moscow/ulianovsky_1990.webp',
        link: './original_maps/moscow/ulianovsky_1990_omaps.jpg',
        bounds: [[55.6467443, 37.2320652], [55.64471, 37.2597027], [55.6170916, 37.2275162]],
        author: 'OGRDNKV'
    },
    {
        name: 'Ульяновский л/п',
        year: 1990, // ??
        url: './maps/moscow/ulianovsky_winter_1990.webp',
        link: './original_maps/moscow/ulianovsky_winter_1990_omaps.jpg',
        bounds: [[55.6709537, 37.2625351], [55.6694531, 37.332058], [55.6229561, 37.2585011]],
        author: ['ZHRDV_V','SHLST'],
        type: ['WINTER']
    },
    {
        name: 'Лапшинка',
        year: 1989,
        url: './maps/moscow/lr/lapshinka_1989.webp',
        link: './original_maps/moscow/lr/lapshinka_1989_omaps.jpg',
        bounds: [[55.6293527, 37.3138618], [55.6283352, 37.3537302], [55.6021842, 37.3115015]],
        author: ['KRSVSKY_A','FMN_I']
    },
    {
        name: 'Рассказовка, Ульяновский л/п',
        year: 1990,
        url: './maps/moscow/rasskazovka_1990.webp',
        link: './original_maps/moscow/rasskazovka_1990_omaps.jpg',
        bounds: [[55.6382675, 37.3378086], [55.6348278, 37.3897362], [55.6113232, 37.3354053]],
        author: ['KRSVSKY_A','FMN_I']
    },
    {
        name: 'Московский',
        year: 1990,
        url: './maps/moscow/moskovsky_1990.webp',
        link: './original_maps/moscow/moskovsky_1990_omaps.jpg',
        bounds: [[55.6173825, 37.3541164], [55.6133835, 37.3984051], [55.5922184, 37.3516273]],
        author: ['KRSVSKY_A','FMN_I']
    },
    {
        name: 'Медвежьи оз',
        year: 1988,
        url: './maps/moscow/medvezhji_oz_1988.webp',
        link: './original_maps/moscow/medvezhji_oz_1988_omaps.jpg',
        bounds: [[55.8887907, 37.9977608], [55.8864802, 38.0350113], [55.8599237, 37.9908085]],
        author: 'JANN_Y'
    },
    {
        name: 'Медвежьи оз, юг',
        year: 1985,
        url: './maps/moscow/medvezhji_oz_1985.webp',
        link: './original_maps/moscow/medvezhji_oz_1985_omaps.jpg',
        bounds: [[55.8610797, 37.9713678], [55.8596587, 38.0304193], [55.8329151, 37.9693508]]
    },
    {
        name: 'Молжаниново',
        year: 1989,
        url: './maps/moscow/molzhaninovo_1989.webp',
        link: './original_maps/moscow/molzhaninovo_1989_omaps.jpg',
        bounds: [[55.9411731, 37.2556686], [55.9354044, 37.3661327], [55.9021696, 37.2493172]],
        author: ['ALSHN','GLDRV','KTNKO','NDRF_V','LVN_B']
    },
    {
        name: 'Планерная',
        date: '1972-02-19',
        url: './maps/moscow/lr/planernaya_1972.webp',
        link: ['./original_maps/moscow/lr/planernaya_1972_omaps.webp','./original_maps/moscow/lr/planernaya_1972_course_omaps.webp'],
        info: 'Первое личное первенство Москвы по ориентированию на лыжах в заданном направлении.',
        about: 'https://t.me/moscow_orient/2073',
        bounds: [[55.93514, 37.2714186], [55.9315582, 37.3542023], [55.9036372, 37.26614]],
        author: ['MLTSV','ALSHN','BSHNSKY','LVN_B','SMLV_V','FROLOV']
    },
    {
        name: 'Вашутино',
        year: 1991,
        url: './maps/moscow/vashutino_1991.webp',
        link: './original_maps/moscow/vashutino_1991_omaps.jpg',
        bounds: [[55.9577053, 37.4097776], [55.9550626, 37.4491739], [55.9236961, 37.4019241]],
        author: ['BGCHV','GRSHNV','KTNKO']
    },
    {
        name: 'Мелькисарово',
        year: 2011,
        url: './maps/moscow/melkisarovo_2011.webp',
        link: './original_maps/moscow/melkisarovo_2011_omaps.gif',
        bounds: [[55.9563119, 37.4053574], [55.954486, 37.445569], [55.9314139, 37.4033403]]
    },
    {
        name: 'Сходня',
        year: 1981,
        url: './maps/moscow/shodnya_1981.webp',
        link: './original_maps/moscow/shodnya_1981_omaps.jpg',
        bounds: [[55.9681424, 37.3096561], [55.9685027, 37.3306417], [55.9602518, 37.3078537]]
    },
    {
        name: 'Жабкино',
        year: 1967,
        url: './maps/moscow/zhabkino_1967.webp',
        link: './original_maps/moscow/zhabkino_1967_omaps.jpg',
        bounds: [[55.5663103, 37.5829411], [55.5646116, 37.6626778], [55.5266387, 37.5800228]]
    },
    {
        name: 'Чёрная грязь',
        year: 1973,
        url: './maps/moscow/ak/chernaja_grjaz_1973.webp',
        link: './original_maps/moscow/ak/chernaja_grjaz_1973_omaps.jpg',
        info: 'IV Первенство МИИГАиК.',
        bounds: [[55.9938689, 37.3209858], [55.9925248, 37.3699951], [55.962654, 37.31987]],
        type: ['CITY']
    },
    {
        name: 'Родники',
        year: 2009,
        url: './maps/moscow/rodniki_2009.webp',
        link: './original_maps/moscow/rodniki_2009_omaps.jpg',
        bounds: [[55.6825204, 38.0617046], [55.6778264, 38.1071091], [55.6649027, 38.0589151]],
        author: 'KRSVSKY_A'
    },
    {
        name: 'Овражки',
        year: 1990, // но это не точно
        url: './maps/moscow/ovrazhki_1990.webp',
        link: './original_maps/moscow/ovrazhki_1990_omaps.jpg',
        bounds: [[55.6875042, 38.0390882], [55.6839721, 38.1082678], [55.6588024, 38.0350971]],
        author: 'KRNVA'
    },
    {
        name: 'Овражки',
        year: 2000,
        url: './maps/moscow/ovrazhki_2000.webp',
        link: './original_maps/moscow/ovrazhki_2000_omaps.jpg',
        bounds: [[55.6874317, 38.0376291], [55.6853995, 38.0748796], [55.6589477, 38.035183]],
        author: 'KRNVA',
        owner: 'NLTV_D'
    },
    {
        name: 'Коренево, Овражки',
        year: 2006,
        url: './maps/moscow/ak/korenevo_2006.webp',
        link: './original_maps/moscow/ak/korenevo_2006_omaps.jpg',
        bounds: [[55.6987034, 38.0013657], [55.6966234, 38.0299902], [55.6777296, 37.9982758]],
        author: 'KRSVSKY_A'
    },
    {
        name: 'Овражки',
        year: 2015,
        url: './maps/moscow/ovrazhki_2015.webp',
        link: './original_maps/moscow/ovrazhki_2015_omaps.jpg',
        bounds: [[55.6786007, 38.0414915], [55.6760357, 38.0822182], [55.6620948, 38.038702]],
        author: 'KRSVSKY_A'
    },
    {
        name: 'Торбеево, Овражки',
        year: 2015,
        url: './maps/moscow/torbeevo_2015.webp',
        link: './original_maps/moscow/torbeevo_2015_omaps.jpg',
        bounds: [[55.6909877, 38.0400324], [55.6890041, 38.0684423], [55.6686302, 38.0362129]],
        author: 'KRSVSKY_A'
    },
    {
        name: 'Боково',
        year: 2000,
        url: './maps/moscow/ak/bokovo_2000.webp',
        link: './original_maps/moscow/ak/bokovo_2000_omaps.jpg',
        bounds: [[56.0086511, 38.2543945], [55.998141, 38.3427143], [55.9612127, 38.2381725]],
        author: ['SMKN_S','ZUEV_A'],
        areas: [30,70]
    },
    {
        name: '11-й квартал Нагатина, к/т Орбита',
        year: 2022,
        url: './maps/moscow/o-mephi/20230130_701.webp',
        link: 'http://o-mephi.net/cup/maps/20230130_701.jpg',
        bounds: [[55.6777901, 37.6628065], [55.6757332, 37.6822686], [55.6655563, 37.6586652]],
        author: ['MNKV','TTYNN_V'],
        owner: 'ERMCHNKV_A',
        type: ['CITY']
    },
    {
        name: '139-й квартал Выхина',
        year: 2021,
        url: './maps/moscow/o-mephi/20210302_129.webp',
        link: 'http://o-mephi.net/cup/maps/20210302_129.jpg',
        bounds: [[55.7018231, 37.818718], [55.7001665, 37.8327084], [55.6900201, 37.815156]],
        author: 'MNKV',
        owner: 'ERMCHNKV_A',
        type: ['CITY']
    },
    {
        name: '64-й микрорайон Тимирязевского района',
        year: 2022,
        url: './maps/moscow/o-mephi/20230130_363.webp',
        link: 'http://o-mephi.net/cup/maps/20230130_363.jpg',
        bounds: [[55.8173303, 37.5643587], [55.8163176, 37.5736499], [55.8119773, 37.5623846]],
        author: 'MNKV',
        owner: 'ORNTA_SKRM',
        type: ['CITY']
    },
    {
        name: '76-й квартал Вешняков, Парк "Радуга"',
        year: 2025,
        url: './maps/moscow/o-mephi/20250403_440.webp',
        link: 'http://o-mephi.net/cup/maps/20250403_440.jpg',
        info: 'Городская карта. Подготовлена под спринт Чемпионата Москвы 2019.',
        bounds: [[55.740134, 37.805779], [55.7366549, 37.8327727], [55.7211162, 37.7982044]],
        author: 'MNKV',
        owner: 'ERMCHNKV_A',
        type: ['CITY']
    },
    {
        name: 'Новокосино, Суздальский пруд',
        year: 2025,
        url: './maps/moscow/lr/novokosino_2025.webp',
        link: './original_maps/moscow/lr/novokosino_2025_omaps.webp',
        bounds: [[55.738322, 37.8461945], [55.7371382, 37.8567517], [55.7317137, 37.8436089]],
        author: 'MNKV',
        owner: 'PHNN_I',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Алёшкино',
        year: 1992,
        info: 'XXIII соревнования на приз TV, 24 мая.',
        url: './maps/moscow/ak/aleshkino_1992.webp',
        link: './original_maps/moscow/ak/aleshkino_1992_omaps.jpg',
        bounds: [[55.878922, 37.3962164], [55.8754553, 37.4414921], [55.8436148, 37.3910236]],
        author: ['EFMV','FMN_I'],
        type: ['PARK']
    },
    {
        name: 'Алёшкинский лес',
        year: 2024,
        url: './maps/moscow/o-mephi/20210529_404.webp',
        link: ['http://o-mephi.net/cup/maps/20250403_805.jpg','http://o-mephi.net/cup/maps/20210529_805.ocd'],
        info: 'Карта 2020, подготовленная заново специально под Ночное Памяти Горюнова и Мососень 2020.',
        bounds: [[55.8795479, 37.4028254], [55.8749497, 37.4423075], [55.8518785, 37.3936844]],
        author: 'TTYNN_V',
        owner: 'ERMCHNKV_A',
        type: ['PARK']
    },
/*
    {
        name: 'Белая Дача - Чагино',
        year: 2019,
        url: './maps/moscow/o-mephi/20210105_560.webp',
        link: 'http://o-mephi.net/cup/maps/20210105_560.jpg',
        bounds: [[55.6868511, 37.8307772], [55.6841173, 37.863307], [55.657374, 37.8230524]],
        author: ['ZUEV_A','LUK_V'],
        owner: 'FSO_MSK',
        type: ['PARK'],
        zindex: 2
    },
*/
    {
        name: 'Белопесоцкий',
        year: 2022,
        start: 'BNO',
        o_gps: {
            '2019':6759,
            '2022':17762
        },
        url: './maps/moscow/o-mephi/20210603_109.webp',
        link: ['http://o-mephi.net/cup/maps/20210603_109.jpg','https://tkmgtu.ru/library/images/a/a5/Map_bno2023_va.jpg','https://tkmgtu.ru/library/images/5/5d/Map_bno2023_zn.jpg'],
        info: 'Одна из немногих транспортно доступных карт красивой чистой местности в Московской Области.',
        bounds: [[54.8678157, 38.0973673], [54.863222, 38.1415272], [54.846769, 38.0906725]],
        author: 'LUK_V',
        owner: 'FSO_MSK'
    },
    {
        name: 'Бирюлёвский лесопарк',
        year: 2001,
        url: './maps/moscow/ak/birjulevsky_2001.webp',
        link: './original_maps/moscow/ak/birjulevsky_2001_omaps.png',
        bounds: [[55.6034206, 37.6836205], [55.6019417, 37.7116871], [55.5874408, 37.6809168]],
        author: 'SMKN_S',
        owner: 'NLTV_D',
        type: ['PARK']
    },
    {
        name: 'Загорье, Бирюлёвский лесопарк',
        year: 2006,
        url: './maps/moscow/zagorie_2006.webp',
        link: './original_maps/moscow/zagorie_2006_omaps.jpg',
        bounds: [[55.6088023, 37.6782131], [55.6049722, 37.7148199], [55.5886049, 37.6715183]],
        author: 'ZUEV_A',
        type: ['PARK']
    },
    {
        name: 'Бирюлёвский Дендропарк',
        year: 2024,
        url: './maps/moscow/o-mephi/20210616_394.webp',
        link: 'http://o-mephi.net/cup/maps/20250403_423.jpg',
        bounds: [[55.6108869, 37.6702738], [55.6082448, 37.6954651], [55.5893568, 37.6643085]],
        author: 'TTYNN_V',
        owner: 'ERMCHNKV_A',
        type: ['PARK']
    },
    {
        name: 'Бульвар Генерала Карбышева',
        year: 2018,
        url: './maps/moscow/o-mephi/20210105_6.webp',
        link: 'http://o-mephi.net/cup/maps/20210105_6.jpg',
        info: 'Спринтовая карта сквера между проезжими частями. Идеальный вариант для детского нокаут-спринта!',
        bounds: [[55.7843683, 37.4705672], [55.7841873, 37.472949], [55.7768385, 37.4678206]],
        author: 'BRTNK_A',
        owner: ['ISKTL','SKHRV_P'],
        type: ['PARK']
    },
    {
        name: 'Бутово',
        year: 1,
        url: './maps/moscow/ak/butovo_old.webp',
        link: './original_maps/moscow/ak/butovo_old_omaps.jpg',
        bounds: [[55.5906906, 37.529211], [55.5819349, 37.572298], [55.5581802, 37.5070667]],
        author: 'KRNVA'
    },
    {
        name: 'Бутово',
        year: 1996,
        url: './maps/moscow/ak/butovo_1996.webp',
        link: './original_maps/moscow/ak/butovo_1996_omaps.jpg',
        bounds: [[55.6090447, 37.4779701], [55.6004385, 37.5734138], [55.5562627, 37.4625206]],
        author: ['MLNKV_V','DBRTSV_V','KLNN_B']
    },
    {
        name: 'Бутовский Лес',
        year: 2008,
        url: './maps/moscow/ak/butovo_2008.webp',
        link: './original_maps/moscow/ak/butovo_2008_omaps.gif',
        bounds: [[55.5897448, 37.5186539], [55.5871376, 37.5628996], [55.5529978, 37.5110579]],
        author: ['JASHPTRV','GRV_S'],
        owner: 'NLTV_D'
    },
    {
        name: 'Бутово',
        year: 2023,
        url: './maps/moscow/ak/butovo_2023.webp',
        link: './original_maps/moscow/ak/butovo_2023_omaps.gif',
        bounds: [[55.5886777, 37.5245333], [55.5850154, 37.5661182], [55.5542722, 37.5137615]],
        owner: 'FSO_MSK',
        type: ['ROGAINE','WINTER']
    },
    {
        name: 'Бутовский Лес',
        year: 2022,
        url: './maps/moscow/o-mephi/20210105_838.webp',
        link: 'http://o-mephi.net/cup/maps/20210105_838.jpg',
        info: 'Один из наиболее развитых околоМКАДных о-регионов, наряду с Красногорским лесом. Полноценный лес рядом с метро. Бег, лыжи, вело, раздевалки, лыжные трассы, вело-трейлы. Карта заметно подустарела, но за счет грамотной камеральной генерализации позволяет проводить соревнования любого уровня.',
        bounds: [[55.5905451, 37.5237608], [55.5868587, 37.5742722], [55.5534955, 37.5142336]],
        author: ['MKHLV_A','SLBDNK','MTN_Y'],
        owner: 'FSO_MSK'
    },
    {
        name: 'Бутовский Полигон',
        year: 2015,
        url: './maps/moscow/o-mephi/20210105_386.webp',
        link: ['http://o-mephi.net/cup/maps/20210105_386.jpg','http://o-mephi.net/cup/maps/20210105_744.ocd'],
        info: 'Карта у мемориала "Бутовский расстрельный полигон".',
        bounds: [[55.5458483, 37.5851083], [55.5441365, 37.6018667], [55.5327839, 37.5806236]],
        author: 'NKRSV_S'
    },
    {
        name: 'Видновский лесопарк',
        year: 2021,
        url: './maps/moscow/o-mephi/20220112_715.webp',
        link: 'http://o-mephi.net/cup/maps/20220112_715.jpg',
        info: 'Лесная карта, подготовлена по классику чемпионата Москвы 2018.',
        bounds: [[55.5737837, 37.7115154], [55.5704961, 37.7508473], [55.5525609, 37.7064729]],
        author: 'MTN_Y',
        owner: 'FSO_MSK',
        type: ['PARK']
    },
    {
        name: 'Видогощи',
        year: 2021,
        url: './maps/moscow/vidogoschi_2021.webp',
        //link: 'http://o-mephi.net/cup/maps/20230712_883.jpg',
        link: './original_maps/moscow/sz/vidogoschi_2021_omaps.gif',
        info: 'Карта с самой скандальной историей из всех. Карта была нарисована С. Поздеевым и С. Симакиным по заказу А. Ермаченкова в 2010-2011 году для тренировок и соревнований ССО МИФИ на пожертвования московских ориентировщиков, однако спустя 5 лет Поздеев вторично продал ее Тверской федерации внеся косметические правки, заявив, что перерисовал ее заново, вступив в преступный сговор с тогдашним председателем Тверсокй ФСО Машуковым. С тех пор Тверской ФСО на ней проводятся соревнования в т.ч. Всероссийского статуса без согласования с правообладателями.',
        bounds: [[56.7245016, 36.3476229], [56.7147994, 36.4160728], [56.7041758, 36.3376236]],
        author: ['PZDV_S','SMKN_S'],
        owner: 'ERMCHNKV_A'
    },
    {
        name: 'Воробьевы Горы',
        year: 1,
        url: './maps/moscow/vorobjevy_gory_old.webp',
        link: './original_maps/moscow/vorobjevy_gory_old_omaps.jpg',
        bounds: [[55.7204636, 37.5352192], [55.7202218, 37.5802374], [55.7061274, 37.5341034]],
        author: 'KRNVA',
        type: ['PARK']
    },
    {
        name: 'Воробьевы Горы',
        date: '1977-04-17',
        url: './maps/moscow/sz/vorobjevy_gory_1977.webp',
        link: ['./original_maps/moscow/sz/vorobjevy_gory_1977_omaps.jpg','./original_maps/moscow/sz/vorobjevy_gory_1977_omaps.webp','./original_maps/moscow/sz/vorobjevy_gory_1977_back_omaps.jpg'],
        info: 'Первенство МИИГАиК',
        bounds: [[55.7194967, 37.5357342], [55.7183123, 37.5583506], [55.7072155, 37.5339746]],
        type: ['PARK']
    },
    {
        name: 'Воробьевы Горы',
        year: 2000,
        url: './maps/moscow/vorobjevy_gory_2000.webp',
        link: './original_maps/moscow/vorobjevy_gory_2000_omaps.jpg',
        bounds: [[55.7192912, 37.5356913], [55.7166081, 37.5641012], [55.7083398, 37.5326014]],
        owner: 'NLTV_D',
        type: ['PARK']
    },
    {
        name: 'Нескучный Сад',
        year: 1998,
        url: './maps/moscow/neskuchny_1998.webp',
        link: './original_maps/moscow/neskuchny_1998_omaps.jpg',
        bounds: [[55.7219138, 37.5794649], [55.7222159, 37.5949788], [55.7095124, 37.5790787]],
        author: 'ZUEV_A',
        type: ['PARK']
    },
    {
        name: 'Воробьевы Горы, Лужники, Нескучный Сад, Большой Газон МГУ, МГДД(Ю)Т',
        year: 2023,
        url: './maps/moscow/o-mephi/20210104_258.webp',
        link: 'http://o-mephi.net/cup/maps/20250403_634.jpg',
        info: 'Сводная карта целой серии парков. Ближайшая к Кремлю действующая спорткарта, на которой регулярно проводятся старты.',
        bounds: [[55.7406413, 37.5374937], [55.7330064, 37.6132393], [55.7014361, 37.5240612]],
        author: ['TTYNN_V','ZUEV_A','SYTV_N','ERMCHNKV_A'],
        owner: ['FSO_MSK','SYTV_N','ERMCHNKV_A'],
        type: ['PARK']
    },
    {
        name: 'Воронцовский Парк',
        year: 2025,
        url: './maps/moscow/o-mephi/20230130_474.webp',
        link: ['http://o-mephi.net/cup/maps/20250403_374.jpg','http://o-mephi.net/cup/prot/Mosleto2025_9_cont1.jpg'],
        info: 'Небольшой парк на юго-западе Москвы, включает дубраву (по состоянию 2022 недоступную для проведения стартов) и культурную часть с усадьбой Воронцово.',
        bounds: [[55.6715587, 37.5267863], [55.6698041, 37.5429869], [55.6650116, 37.5243831]],
        author: ['DBRTSV_V','MNKV','KLZHNY'],
        owner: 'ERMCHNKV_A',
        type: ['PARK']
    },
    {
        name: 'Горенский лесопарк, запад',
        year: 1989,
        url: './maps/moscow/ak/gorensky_west_1989.webp',
        link: ['./original_maps/moscow/ak/gorensky_west_1989_omaps.jpg','./original_maps/moscow/ak/balashiha_1989_omaps.jpg'],
        bounds: [[55.8163297, 37.8410339], [55.8116517, 37.9118443], [55.7877225, 37.8354549]],
        author: 'SMKN_S'
    },
    {
        name: 'Горенский лесопарк, запад',
        year: 1979,
        url: './maps/moscow/ak/gorensky_west_1979.webp',
        link: './original_maps/moscow/ak/gorensky_west_1979_omaps.jpg',
        bounds: [[55.805719, 37.8476], [55.8190784, 37.8850651], [55.7930065, 37.8616333]],
        author: ['SDRNK','SMKN_S']
    },
    {
        name: 'Горенский лесопарк, Мазуринское оз',
        year: 1976,
        url: './maps/moscow/mazurinskoe_1978.webp',
        link: ['./original_maps/moscow/lr/mazurinskoe_1978_omaps.jpg','./original_maps/moscow/lr/mazurinskoe_1976_omaps.jpg'],
        bounds: [[55.8281427, 37.8940773], [55.8235144, 37.951026], [55.8051402, 37.8886271]],
        author: 'SMKN_S'
    },
    {
        name: 'Балашиха, Мазуринское оз',
        year: 1,
        url: './maps/moscow/ak/balashiha_old.webp',
        link: './original_maps/moscow/ak/balashiha_old_omaps.jpg',
        bounds: [[55.8112659, 37.8252411], [55.8380243, 37.9337311], [55.777635, 37.8489304]]
    },
    {
        name: 'Горенский лесопарк',
        year: 2024,
        url: './maps/moscow/o-mephi/20220112_999.webp',
        link: 'http://o-mephi.net/cup/maps/20250403_110.jpg',
        info: 'Восточная часть Горенского лесопарка у пл. Балашиха. Район сильно пострадал от ураганов 1998-2000 годов и был практически полностью вырублен, однако спустя 20 лет природа берет свое и местность снова пригодна для ориентирования. Одна из наиболее технически сложных карт ближнего подмосковья!',
        bounds: [[55.8224295, 37.930212], [55.8201151, 37.9533863], [55.8056708, 37.9254484]],
        author: 'TTYNN_V',
        owner: 'ERMCHNKV_A',
        type: ['PARK']
    },
    {
        name: 'Дзержинский карьер',
        year: 1988,
        url: './maps/moscow/ak/dzerzhinsky_1988.webp',
        link: './original_maps/moscow/ak/dzerzhinsky_1988_omaps.jpg',
        bounds: [[55.6509094, 37.8564405], [55.6493838, 37.8837347], [55.6380737, 37.8537798]],
        author: 'PTPKN',
        type: ['PARK']
    },
    {
        name: 'Дзержинский карьер',
        year: 2018,
        url: './maps/moscow/o-mephi/20210105_941.webp',
        link: 'http://o-mephi.net/cup/maps/20210105_941.jpg',
        info: 'Карта серьезно пострадала от ураганов...',
        bounds: [[55.6511757, 37.8565693], [55.6462357, 37.8893995], [55.6339072, 37.8485012]],
        author: 'ZUEV_A',
        owner: 'FSO_MSK',
        type: ['PARK']
    },
    {
        name: 'Долина р. Котловки в Зюзино',
        year: 2023,
        url: './maps/moscow/o-mephi/20220112_79.webp',
        link: 'http://o-mephi.net/cup/maps/20250403_887.jpg',
        bounds: [[55.6703607, 37.5804734], [55.6687149, 37.598176], [55.6611991, 37.578392]],
        author: 'KLZHNY',
        owner: 'ERMCHNKV_A',
        type: ['CITY']
    },
    {
        name: 'Долина р. Рожайка в Домодедово',
        year: 2012,
        start: 'BNO',
        info: "БНО'2011.",
        url: './maps/moscow/o-mephi/20210608_90.webp',
        link: ['http://o-mephi.net/cup/maps/20210608_90.jpg','https://tkmgtu.ru/library/images/5/54/BNO2011B.jpg'],
        bounds: [[55.4055805, 37.7237892], [55.4008777, 37.7762318], [55.3857418, 37.7191114]],
        author: 'LUK_V',
        owner: 'FSO_MSK'
    },
    {
        name: 'Долина р. Сетунь',
        year: 2017,
        url: './maps/moscow/o-mephi/20210606_950.webp',
        link: 'http://o-mephi.net/cup/maps/20210606_950.jpg',
        bounds: [[55.7251767, 37.4586153], [55.7229289, 37.4792147], [55.7080376, 37.4530363]],
        author: 'LUK_V',
        owner: 'FSO_MSK'
    },
    {
        name: 'Зябликово + Видновский л/п',
        year: 2021,
        url: './maps/moscow/o-mephi/20210104_161.webp',
        link: 'http://o-mephi.net/cup/maps/20210104_161.jpg',
        bounds: [[55.6122685, 37.7387238], [55.6102325, 37.7668977], [55.5935765, 37.7346039]],
        author: 'ZUEV_A',
        owner: 'FSO_MSK',
        type: ['PARK']
    },
    {
        name: 'Орехово-Борисово южное, долина Шмелёвки',
        year: 2026,
        url: './maps/moscow/sz/shmelevka_2026.webp',
        link: './original_maps/moscow/sz/shmelevka_2026_omaps.webp',
        bounds: [[55.6197574, 37.7371144], [55.6175279, 37.7737856], [55.5957831, 37.7324581]],
        author: 'KLZHNY',
        owner: 'ERMCHNKV_A',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Терлецкие пруды',
        year: 2000,
        url: './maps/moscow/terletsky_prudy_2000.webp',
        link: './original_maps/moscow/terletsky_prudy_2000_omaps.png',
        bounds: [[55.7731213, 37.8021955], [55.7712868, 37.824254], [55.7603861, 37.7991486]],
        author: 'ZHRDV_V',
        owner: 'NLTV_D',
        type: ['PARK']
    },
    {
        name: 'Измайловский лесопарк',
        year: 2007,
        url: './maps/moscow/ak/izmailovo_2007.webp',
        link: './original_maps/moscow/ak/izmailovo_2007_omaps.gif',
        bounds: [[55.7827273, 37.7706099], [55.7798554, 37.8139114], [55.7651548, 37.767005]],
        author: ['MTVV','SYTV_N','JASHPTRV'],
        owner: 'NLTV_D',
        type: ['PARK']
    },
    {
        name: 'Измайловский парк обзорная 15000',
        year: 2022,
        url: './maps/moscow/o-mephi/20230130_957.webp',
        link: 'http://o-mephi.net/cup/maps/20230130_957.jpg',
        info: 'Второй по величине лесной Массив Москвы из доступных для ориентирования после Битцевского Парка. Это карта с генерализацией под 15000 для проведения рогейнов.',
        bounds: [[55.8048507, 37.7423286], [55.8108318, 37.8751945], [55.7542162, 37.7499676]],
        author: ['ZHRDV_V','TTYNN_V','MNKV','FLVSKY_S','LKN_A'],
        owner: 'FSO_MSK',
        type: ['ROGAINE']
    },
    {
        name: 'Измайловский парк',
        year: 2024,
        url: './maps/moscow/o-mephi/20230130_495.webp',
        link: ['http://o-mephi.net/cup/maps/20250403_61.jpg','http://o-mephi.net/cup/maps/20230130_243.ocd'],
        info: 'Второй по величине лесной Массив Москвы из доступных для ориентирования после Битцевского Парка. Карта подготовлена к соревнованиям Гран При Будущие Звезды в 2022 году Владимиром Жердевым с детализацией под использование в масштабе 1:10000.',
        bounds: [[55.7941404, 37.7646017], [55.7885429, 37.8245544], [55.7642132, 37.7558899]],
        author: 'ZHRDV_V',
        owner: 'FSO_MSK',
        type: ['PARK']
    },
    {
        name: 'Измайловский парк, стд Авангард',
        year: 2025,
        url: './maps/moscow/ak/izmailovsky_park_avangard_2025.webp',
        link: './original_maps/moscow/ak/izmailovsky_park_avangard_2025_omaps.gif',
        bounds: [[55.7695245, 37.7678418], [55.7683899, 37.7801156], [55.7629818, 37.7660608]],
        author: 'ZHRDV_V',
        owner: 'FSO_MSK',
        type: ['PARK']
    },
    {
        name: 'Измайлово, стд Авангард',
        year: 2025,
        url: './maps/moscow/ak/izmailovo_avangard_2025.webp',
        link: './original_maps/moscow/ak/izmailovo_avangard_2025_omaps.gif',
        bounds: [[55.7659877, 37.7753091], [55.7649496, 37.7876687], [55.7600239, 37.7736354]],
        author: 'ZHRDV_V',
        owner: 'FSO_MSK',
        type: ['CITY']
    },
    {
        name: 'Икша',
        year: 2018,
        url: './maps/moscow/o-mephi/20210106_562.webp',
        link: 'http://o-mephi.net/cup/maps/20210106_562.jpg',
        bounds: [[56.1929288, 37.4978399], [56.1907798, 37.5196409], [56.1779305, 37.4926043]],
        author: 'TRNN_A',
        owner: 'ALFRV'
    },
    {
        name: 'Ивановская горка',
        year: 2025,
        url: './maps/moscow/ak/ivanovskaya_gorka_2025.webp',
        link: './original_maps/moscow/ak/ivanovskaya_gorka_2025_omaps.gif',
        bounds: [[55.7611226, 37.6325727], [55.7589735, 37.6496959], [55.7519339, 37.6290965]],
        author: 'ALDBV',
        owner: 'ALDBV',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Китай-Город',
        year: 2021,
        url: './maps/moscow/o-mephi/20220426_526.webp',
        link: 'http://o-mephi.net/cup/maps/20220426_526.jpg',
        bounds: [[55.7606397, 37.6327658], [55.7587562, 37.6494169], [55.7542886, 37.6303411]],
        author: 'GRCHV_D',
        owner: 'GRCHV_D',
        type: ['CITY']
    },
    {
        name: 'Сретенка',
        year: 2024,
        info: '<a href="https://t.me/moscow_orient/761">SRETENKA-SPRINT 03.07</a>',
        url: './maps/moscow/sretenka_2024.webp',
        link: './original_maps/moscow/sretenka_2024_omaps.gif',
        bounds: [[55.7734955, 37.6247191], [55.7726627, 37.6332164], [55.7672431, 37.6225519]],
        author: 'GRCHV_D',
        owner: 'GRCHV_D',
        type: ['SPRINT','CITY']
    },
    {
        name: 'Коломенское',
        year: 1999,
        url: './maps/moscow/ak/kolomenskoe_1999.webp',
        link: './original_maps/moscow/ak/kolomenskoe_1999_omaps.jpg',
        bounds: [[55.6662582, 37.6625705], [55.6649753, 37.6756597], [55.653016, 37.6581931]],
        author: 'ZUEV_A',
        owner: 'NLTV_D',
        type: ['PARK']
    },
    {
        name: 'Коломенское',
        year: 2024,
        url: './maps/moscow/o-mephi/20230130_756.webp',
        link: 'http://o-mephi.net/cup/maps/20250403_329.jpg',
        info: 'Тренировочный полигон ССО МИФИ. Музей-Заповедник Коломенское. Карта парка Садовники и района Нагатинский Затон приведены справочно. Актуальные спринтерские карты в отдельных блоках. К сожалению, карта в значительной степени устарела.',
        bounds: [[55.6794718, 37.6508331], [55.6743902, 37.6921177], [55.6498439, 37.6401901]],
        author: ['MNKV','TTYNN_V'],
        owner: 'ERMCHNKV_A',
        type: ['PARK']
    },
    {
        name: 'Красногорск-Митино',
        year: 2022,
        url: './maps/moscow/o-mephi/20210616_347.webp',
        link: 'http://o-mephi.net/cup/maps/20210616_347.jpg',
        bounds: [[55.8631268, 37.3129177], [55.8598755, 37.3534727], [55.8383617, 37.3076391]],
        author: ['MTN_Y','JASHPTRV','LKN_A'],
        owner: ['NLTV_D','SYTV_N']
    },
    {
        name: 'Красногорский Лес',
        year: 2021,
        start: 'BNO',
        o_gps: 8521,
        url: './maps/moscow/ak/krasnogorsk_2019.webp',
        //link: 'http://o-mephi.net/cup/maps/20201204_867.jpg',
        link: ['./original_maps/moscow/ak/krasnogorsk_2019_omaps.gif','https://tkmgtu.ru/library/images/b/bc/Bno2020v.png','https://tkmgtu.ru/library/images/4/45/Bno2020zn.png'],
        info: 'Карта Красногорского Леса, авторства Юрия Митина с корректировками Андрея Лукина (Моснанорогейн 2019, 2020) и Семёна Якимова (БНО 2020).',
        bounds: [[55.8848435, 37.1371365], [55.8664983, 37.3985767], [55.7986275, 37.1148205]],
        author: 'MTN_Y',
        owner: 'NLTV_D'
    },
    {
        name: 'Дедовск',
        year: 1988,
        url: './maps/moscow/ak/dedovsk_1988.webp',
        link: './original_maps/moscow/ak/dedovsk_1988_omaps.jpg',
        bounds: [[55.887106, 37.1482515], [55.8840973, 37.1838284], [55.8625729, 37.1426296]],
        author: ['ELZRV','KZMN_R','LVN_B','FMN_I']
    },
    {
        name: 'Красногорск - Дедовск',
        year: 2000,
        url: './maps/moscow/ak/krasnogorsk_2000.webp',
        link: './original_maps/moscow/ak/krasnogorsk_2000_omaps.gif',
        bounds: [[55.8905235, 37.147522], [55.8778146, 37.3480225], [55.8403377, 37.135334]],
        author: 'NLTV_D'
    },
    {
        name: 'Опалиха',
        year: 2023,
        url: './maps/moscow/opaliha_2023.webp',
        link: 'http://o-mephi.net/cup/maps/20250404_434.jpg',
        bounds: [[55.8324331, 37.2168732], [55.8277571, 37.2729206], [55.795009, 37.2070885]],
        author: 'MTN_Y',
        owner: 'NLTV_D'
    },
    {
        name: 'Красногорск, Сабурово',
        year: 2009,
        start: 'BNO',
        url: './maps/moscow/ak/chernevo_2009.webp',
        link: 'https://tkmgtu.ru/library/images/e/e0/BNO2009B2.jpg',
        bounds: [[55.8767794, 37.2315931], [55.871579, 37.2982407], [55.8493971, 37.2254992]],
        author: 'NLTV_D',
        owner: 'NLTV_D'
    },
    {
        name: 'Опалиха, туристическая схема',
        year: 1986,
        excluded: true,
        url: './maps/moscow/opaliha_25000_1986.webp',
        link: './original_maps/moscow/opaliha_25000_1986_omaps.jpg',
        bounds: [[55.8442894, 37.1926689], [55.8382171, 37.3116302], [55.7929824, 37.1862316]],
        author: 'GNDRV'
    },
    {
        name: 'Опалиховский л/п',
        year: 1986,
        url: './maps/moscow/opaliha_1986.webp',
        link: './original_maps/moscow/opaliha_1986_omaps.jpg',
        bounds: [[55.8353975, 37.2558403], [55.8304567, 37.3221445], [55.8149071, 37.2527504]],
        author: 'KUZNTSV_V',
        type: ['PARK']
    },
    {
        name: 'Опалиха',
        year: 1987,
        url: './maps/moscow/opaliha_1987.webp',
        link: './original_maps/moscow/opaliha_1987_omaps.jpg',
        bounds: [[55.831228, 37.2110367], [55.8284802, 37.2526217], [55.7970113, 37.2023678]],
        author: 'GNDRV'
    },
    {
        name: 'Опалиха',
        year: 1996,
        url: './maps/moscow/opaliha_1996.webp',
        link: './original_maps/moscow/opaliha_1996_omaps.jpg',
        bounds: [[55.8134603, 37.2303915], [55.8199222, 37.2991848], [55.7884705, 37.2376013]],
        author: 'GNDRV'
    },
    {
        name: 'Красногорский городской парк',
        year: 1986,
        url: './maps/moscow/ak/krasnogorsk_park_1986.webp',
        link: './original_maps/moscow/ak/krasnogorsk_park_1986_omaps.jpg',
        bounds: [[55.8322885, 37.3076606], [55.8357108, 37.323432], [55.8185238, 37.3185825]],
        author: 'KUZNTSV_V',
        type: ['PARK']
    },
    {
        name: 'Красногорский городской парк, Губайловский',
        year: 1977,
        url: './maps/moscow/ak/krasnogorsk_park_1977.webp',
        link: './original_maps/moscow/ak/krasnogorsk_park_1977_omaps.jpg',
        info: 'Кубок МГУ.',
        bounds: [[55.835518, 37.3110723], [55.8351324, 37.3270369], [55.8241171, 37.3111582]],
        author: 'KUZNTSV_V',
        type: ['PARK']
    },
    {
        name: 'Красногорск, стад им Утробина',
        year: 2024,
        url: './maps/moscow/ak/krasnoforsk_stadion_2024.webp',
        link: './original_maps/moscow/ak/krasnoforsk_stadion_2024_omaps.gif',
        bounds: [[55.8419883, 37.3164582], [55.840663, 37.3292041], [55.8368796, 37.3151064]],
        owner: 'NLTV_D'
    },
    {
        name: 'Красногорск, лицей №4',
        year: 2008,
        url: './maps/moscow/ak/krasnogorsk_school_4_2008.webp',
        link: './original_maps/moscow/ak/krasnogorsk_school_4_2008_omaps.gif',
        bounds: [[55.8400245, 37.299571], [55.8400245, 37.3017383], [55.8378557, 37.2995496]],
        owner: 'NLTV_D',
        type: ['CITY']
    },
    {
        name: 'Красногорск, школа №1',
        year: 2009,
        url: './maps/moscow/ak/krasnogorsk_school_1_2009.webp',
        link: ['./original_maps/moscow/ak/krasnogorsk_school_1_2009_omaps.gif','./original_maps/moscow/ak/krasnogorsk_school_1_podval_2009_omaps.gif'],
        bounds: [[55.8354939, 37.3245692], [55.8343853, 37.3263717], [55.8348071, 37.3235607]],
        owner: 'NLTV_D',
        type: ['CITY']
    },
    {
        name: 'Красногорск, школа №6',
        year: 2009,
        url: './maps/moscow/ak/krasnogorsk_school_6_2009.webp',
        link: './original_maps/moscow/ak/krasnogorsk_school_6_2009_omaps.jpg',
        bounds: [[55.8181139, 37.3053217], [55.8169807, 37.3208141], [55.8120375, 37.303884]],
        type: ['CITY']
    },
    {
        name: 'Красногорск, школа №15',
        year: 2009,
        url: './maps/moscow/ak/krasnogorsk_school_15_2009.webp',
        link: './original_maps/moscow/ak/krasnogorsk_school_15_2009_omaps.gif',
        bounds: [[55.8298782, 37.2921252], [55.8295769, 37.2951078], [55.8285404, 37.2916961]],
        owner: 'NLTV_D',
        type: ['CITY']
    },
    {
        name: 'Красногорск, школа №7',
        year: 2006,
        url: './maps/moscow/ak/krasnogorsk_school_7_2006.webp',
        link: './original_maps/moscow/ak/krasnogorsk_school_7_2006_omaps.jpg',
        bounds: [[55.8175955, 37.3295903], [55.8168119, 37.3368216], [55.8143766, 37.329247]],
        owner: 'NLTV_D',
        type: ['CITY']
    },
    {
        name: 'Нахабино',
        year: 1,
        url: './maps/moscow/nakhabino_old.webp',
        link: './original_maps/moscow/nakhabino_old_omaps.jpg',
        bounds: [[55.8716994, 37.2009945], [55.8677023, 37.2682858], [55.8420727, 37.1955872]]
    },
    {
        name: 'Нахабино',
        date: '1976-11-14',
        url: './maps/moscow/lr/nakhabino_1976.webp',
        link: './original_maps/moscow/lr/nakhabino_1976_omaps.webp',
        bounds: [[55.8685692, 37.2187614], [55.8721328, 37.2599602], [55.8400004, 37.2257996]],
        start: 'WEDDING_MSK'
    },
    {
        name: 'Красногорск, Изумрудные холмы',
        date: '1977-11-13',
        url: './maps/moscow/ak/emerald_hills_1977.webp',
        link: './original_maps/moscow/ak/emerald_hills_1977_omaps.webp',
        bounds: [[55.8547932, 37.2584581], [55.8597551, 37.3126602], [55.8319511, 37.2644234]],
        start: 'WEDDING_MSK'
    },
    {
        name: 'Красногорск',
        year: 1996,
        url: './maps/moscow/ak/krasnogorsk_winter_1996.webp',
        link: './original_maps/moscow/ak/krasnogorsk_winter_1996_omaps.jpg',
        info: 'XIX матч сильнейших юниорских команд России. Новогодние старты-96.',
        bounds: [[55.8784164, 37.2206068], [55.8729032, 37.3112869], [55.8410124, 37.2111225]],
        author: ['NLTV_D','BSHNSKY','KZMN_R'],
        type: ['WINTER']
    },
    {
        name: 'Красногорск',
        year: 1983,
        url: './maps/moscow/ak/krasnogorsk_1995.webp',
        link: ['./original_maps/moscow/ak/krasnogorsk_1995_omaps.jpg','./original_maps/moscow/ak/krasnogorsk_1983_omaps.jpg'],
        bounds: [[55.8674133, 37.2633076], [55.8614891, 37.3457909], [55.8343612, 37.2553253]],
        author: 'KUZNTSV_V'
    },
    {
        name: 'Опалиха',
        year: 1993,
        url: './maps/moscow/opaliha_1993.webp',
        link: ['./original_maps/moscow/opaliha_1993_omaps.jpg','./original_maps/moscow/opaliha_1993_winter_omaps.jpg'],
        bounds: [[55.8781275, 37.2261858], [55.8741793, 37.2933054], [55.8360482, 37.2196198]],
        author: 'KUZNTSV_V'
    },
    {
        name: 'Аникеевка',
        year: 1988,
        url: './maps/moscow/ak/anikeevka_1988.webp',
        link: './original_maps/moscow/ak/anikeevka_1988_omaps.jpg',
        bounds: [[55.8446749, 37.1935701], [55.8387714, 37.2449398], [55.8254429, 37.1888494]],
        author: 'GNDRV'
    },
    {
        name: 'Аникеевка',
        date: '2004-10-03',
        major: true,
        info: 'ЧиП России, марафон.',
        url: './maps/moscow/ak/anikeevka_2004.webp',
        link: './original_maps/moscow/ak/anikeevka_2004_omaps.jpg',
        bounds: [[55.8687618, 37.244854], [55.8643791, 37.2948933], [55.8356626, 37.2354984]],
        author: ['MTN_Y','BLTV','PZGRV','JASHPTRV'],
        logo: 'fsor.webp',
        region: 'MSK'
    },
    {
        name: 'Крылатское',
        year: 1990,
        url: './maps/moscow/ak/krylatskoe_1990.webp',
        link: './original_maps/moscow/ak/krylatskoe_1990_omaps.jpg',
        bounds: [[55.7740869, 37.4089622], [55.7700073, 37.4411917], [55.7507384, 37.4026108]],
        author: 'OKN_V'
    },
    {
        name: 'Крылатское, гребной канал',
        year: 1990,
        url: './maps/moscow/ak/krylatskoe_grebnoy_1990.webp',
        link: './original_maps/moscow/ak/krylatskoe_grebnoy_1990_omaps.jpg',
        bounds: [[55.7770316, 37.42939], [55.7755834, 37.4673271], [55.7506176, 37.4223518]],
        author: 'OKN_V'
    },
    {
        name: 'Крылатские Холмы',
        year: 2012,
        url: './maps/moscow/ak/krylatsky_hills_2012.webp',
        link: './original_maps/moscow/ak/krylatsky_hills_2012_omaps.gif',
        bounds: [[55.7706471, 37.4121809], [55.7715523, 37.4322438], [55.7479849, 37.4132752]],
        author: ['OKN_V','ZUEV_A'],
        owner: 'IVNV_AL',
        type: ['PARK']
    },
    {
        name: 'Крылатские Холмы',
        year: 2015,
        url: './maps/moscow/o-mephi/20210531_610.webp',
        link: 'http://o-mephi.net/cup/maps/20210531_610.jpg',
        info: 'Карта олимпийского велотрека в Крылатском. Южная часть подготовлена без малого 20 лет назад Николаем Сытовым, Северная часть подготовлена Алексеем Зуевым в раках семинара Картографов 2014-1015 На настоящий момент актуальность карты вызывает серьезные сомнения.',
        bounds: [[55.7770799, 37.4153996], [55.7735317, 37.449646], [55.7498447, 37.4068165]],
        author: ['ZUEV_A','SYTV_N'],
        owner: 'FSO_MSK',
        type: ['PARK']
    },
    {
        name: 'Крылатское, школа №1133',
        url: './maps/moscow/school_1133.webp',
        link: './original_maps/moscow/school_1133_omaps.gif',
        bounds: [[55.7526102, 37.4169445], [55.7521754, 37.4208713], [55.7503157, 37.4163651]],
        type: ['CITY']
    },
    {
        name: 'Кучинский лесопарк Вело (восток)',
        year: 2021,
        excluded: true,
        url: './maps/moscow/o-mephi/20210530_87.webp',
        link: 'http://o-mephi.net/cup/maps/20210530_87.jpg',
        bounds: [[55.7975179, 37.9341602], [55.7943334, 37.9676342], [55.7648892, 37.9227448]],
        author: 'TTYNN_V',
        owner: 'ERMCHNKV_A',
        type: ['PARK','VELO']
    },
    {
        name: 'Кучинский лесопарк Вело (запад)',
        year: 2020,
        excluded: true,
        url: './maps/moscow/o-mephi/20210530_758.webp',
        link: 'http://o-mephi.net/cup/maps/20210530_758.jpg',
        bounds: [[55.7955879, 37.8999996], [55.792138, 37.9361773], [55.7794452, 37.8954077]],
        author: 'TTYNN_V',
        owner: 'ERMCHNKV_A',
        type: ['PARK','VELO']
    },
    {
        name: 'Кучинский лесопарк ЗИМНЯЯ',
        year: 2025,
        excluded: true,
        url: './maps/moscow/o-mephi/20230227_550.webp',
        link: 'http://o-mephi.net/cup/maps/20250614_841.jpg',
        info: 'Карта для ориентирования на лыжах. Зимний Вариант - Лукин Андрей, Ермаченков Алексей, Калинин Олег, Шорохов Сергей (2019-2023).',
        bounds: [[55.7928859, 37.9341602], [55.7897493, 37.9604244], [55.7681726, 37.9262638]],
        author: 'TTYNN_V',
        owner: 'ERMCHNKV_A',
        type: ['WINTER']
    },
    {
        name: 'Кучинский лесопарк',
        year: 2025,
        url: './maps/moscow/o-mephi/20210529_464.webp',
        link: ['./original_maps/moscow/saltykovsky_2023_omaps.gif','http://o-mephi.net/cup/maps/20250614_541.jpg'],
        info: 'Первая карта широко известного в узких кругах смоленского составителя Владимира Тутынина в Московском регионе, положившая начало смоленской экспансии в московскую картографию в 2015-2021 годах, пришедшую на смену питерской экспансии Виктора Добрецова, имевшей место в 2011-2015 годах, которая в свою очередь, заместила сибирскую экспансию Геннадия Яшпатрова и Сергея Скрипко, безраздельно властвовавших в московской картографии с начала двухтысячных по 2010 год.',
        bounds: [[55.800895, 37.9019737], [55.795009, 37.9663467], [55.7676415, 37.8920174]],
        author: 'TTYNN_V',
        owner: 'ERMCHNKV_A',
        type: ['PARK']
    },
    {
        name: 'Железнодорожный',
        date: '2025-10-11',
        url: './maps/moscow/lr/railroad_district_rogaine_2025.webp',
        link: './original_maps/moscow/lr/railroad_district_rogaine_2025_omaps.webp',
        info: 'Железная осень.',
        o_gps: 23635,
        about: 'https://gryadka.club/race',
        bounds: [[55.7780695, 37.9648876], [55.7641769, 38.0791497], [55.7327285, 37.9478288]],
        author: ['PSHTO_A','JAKMV_S'],
        type: ['ROGAINE']
    },
    {
        name: 'Тёплый стан',
        year: 1990,
        start: 'TROPA_THRSDAY',
        url: './maps/moscow/teply_stan_1990.webp',
        link: './original_maps/moscow/teply_stan_1990_omaps.jpg',
        bounds: [[55.6462842, 37.474494], [55.6434507, 37.5116587], [55.6240223, 37.4698162]],
        author: ['KNDRSHKN_V','KHDNKCH']
    },
    {
        name: 'Ландшафтный заказник "Тёплый стан"',
        year: 2007,
        url: './maps/moscow/teply_stan_2007.webp',
        link: './original_maps/moscow/teply_stan_2007_omaps.gif',
        bounds: [[55.6463326, 37.471962], [55.6422881, 37.5156069], [55.6249673, 37.465353]],
        author: 'JASHPTRV',
        owner: 'NLTV_D'
    },
    {
        name: 'Ландшафтный заказник "Тёплый стан"',
        year: 2024,
        url: './maps/moscow/o-mephi/20210103_264.webp',
        link: 'http://o-mephi.net/cup/maps/20250614_907.jpg',
        bounds: [[55.6465263, 37.4716187], [55.6424819, 37.5130749], [55.6252823, 37.465353]],
        author: ['LUK_V','ZUEV_A'],
        owner: 'FSO_MSK',
        type: ['PARK']
    },
    {
        name: 'Тропарево',
        year: 1990,
        start: 'TROPA_THRSDAY',
        url: './maps/moscow/troparevo_1990.webp',
        link: './original_maps/moscow/troparevo_1990_omaps.jpg',
        bounds: [[55.6609812, 37.4444103], [55.6590687, 37.4816179], [55.6414647, 37.4413633]],
        author: ['BSHNSKY','EFMV'],
        type: ['PARK']
    },
    {
        name: 'Солнцево, Дудкино',
        year: 1990,
        start: 'TROPA_THRSDAY',
        url: './maps/moscow/solntsevo_1990.webp',
        link: './original_maps/moscow/solntsevo_1990_omaps.jpg',
        bounds: [[55.6533065, 37.4201632], [55.6502798, 37.4597311], [55.6357725, 37.4169874]],
        author: ['KRSVSKY_A','FMN_I'],
        type: ['PARK']
    },
    {
        name: 'Ландшафтный заказник Тропаревский',
        year: 2019,
        url: './maps/moscow/troparevo_2019.webp',
        //link: 'http://o-mephi.net/cup/maps/20210104_71.jpg',
        link: './original_maps/moscow/troparevo_2019_omaps.jpg',
        bounds: [[55.6705664, 37.426815], [55.6654231, 37.4759102], [55.6378436, 37.4153996]],
        author: ['DBRTSV_V','SYTV_N'],
        owner: 'SYTV_N',
        type: ['PARK']
    },
    {
        name: 'Тропарево',
        year: 2026,
        url: './maps/moscow/sz/troparevo_2026.webp',
        link: './original_maps/moscow/sz/troparevo_2026_omaps.gif',
        bounds: [[55.6492507, 37.4697304], [55.6497471, 37.4918103], [55.6398782, 37.4702883]],
        author: 'MSTPNV',
        owner: 'OPEN_BAND',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Химкинский л/п',
        year: 2003,
        url: './maps/moscow/ak/khimki_2003.webp',
        link: './original_maps/moscow/ak/khimki_2003_omaps.gif',
        bounds: [[55.9017125, 37.4629927], [55.8992825, 37.4888277], [55.8716512, 37.4553967]],
        author: 'JASHPTRV',
        owner: 'NLTV_D',
        type: ['PARK']
    },
    {
        name: 'Ландшафтный заказник Химкинский',
        year: 2024,
        url: './maps/moscow/o-mephi/20220112_220.webp',
        link: ['http://o-mephi.net/cup/maps/20250614_472.jpg','http://o-mephi.net/cup/maps/20220112_867.ocd'],
        info: 'Свежая карта на Севере Москвы от Владимира Тутынина. Включает замкадную и внутримкадную часть, а также Левобережный парк в старой редакции.',
        bounds: [[55.9013997, 37.4650097], [55.8991381, 37.4893856], [55.8716512, 37.4553967]],
        author: 'TTYNN_V',
        owner: 'ERMCHNKV_A',
        type: ['PARK']
    },
    {
        name: 'Ландшафтный парк Митино',
        year: 2022,
        url: './maps/moscow/o-mephi/20210531_770.webp',
        link: 'http://o-mephi.net/cup/maps/20210531_770.jpg',
        info: 'Требует корректировки.',
        bounds: [[55.8436389, 37.3532581], [55.8400486, 37.3905087], [55.8318305, 37.3489666]],
        author: ['MTN_Y','SYTV_N','LKN_A'],
        owner: ['SYTV_N','FSO_MSK'],
        type: ['PARK']
    },
    {
        name: 'Летово',
        year: 2019,
        url: './maps/moscow/o-mephi/20210531_130.webp',
        link: 'http://o-mephi.net/cup/maps/20210531_130.jpg',
        info: 'Карта готовилась под Чемпионат Москвы 2019 на классике',
        bounds: [[55.5573792, 37.3737288], [55.5575734, 37.4118805], [55.5395594, 37.3741579]],
        author: 'PZDV_S',
        owner: 'FSO_MSK'
    },
    {
        name: 'Лианозово',
        url: './maps/moscow/lr/lianozovo.webp',
        link: './original_maps/moscow/lr/lianozovo_omaps.jpg',
        bounds: [[55.9058143, 37.5558186], [55.9044431, 37.5744653], [55.8978027, 37.5548744]],
        author: 'PTRV_VLNTN',
        type: ['PARK']
    },
    {
        name: 'Лианозовский лесопитомник',
        year: 2000,
        url: './maps/moscow/lr/lianozovo_2000.webp',
        link: './original_maps/moscow/lr/lianozovo_2000_omaps.png',
        bounds: [[55.9068127, 37.5927258], [55.905261, 37.6082397], [55.8990419, 37.5885844]],
        author: 'PTRV_VLNTN',
        owner: 'NLTV_D',
        type: ['PARK']
    },
    {
        name: 'Лианозовский л/п',
        year: 2024,
        url: './maps/moscow/o-mephi/20200918_83.webp',
        link: 'http://o-mephi.net/cup/maps/20250403_677.jpg',
        info: 'Также известен как Бибиревский лесопарк, Алтуфьевский лесопарк.',
        bounds: [[55.9086408, 37.5926185], [55.9066563, 37.6107502], [55.8982118, 37.5891852]],
        author: 'DBRTSV_V',
        owner: 'MLKHT',
        type: ['PARK']
    },
    {
        name: 'Липовая Роща',
        year: 2021,
        url: './maps/moscow/o-mephi/20210531_231.webp',
        link: 'http://o-mephi.net/cup/maps/20210531_231.jpg',
        info: 'В парке начато Благоустройство. Судьба неизвестна.',
        bounds: [[55.8014981, 37.3618627], [55.79911, 37.3796082], [55.7918967, 37.3582792]],
        author: 'JASHPTRV',
        owner: 'SYTV_N',
        type: ['PARK']
    },
    {
        name: 'Люблинский парк, Парк Шкулёва',
        year: 2025,
        url: './maps/moscow/o-mephi/20210531_842.webp',
        link: 'http://o-mephi.net/cup/maps/20250404_748.jpg',
        info: 'Свежая совмещенная карта для коротких дистанций: Парк Шкулева и Люблинский парк от А. Минакова и западная часть парка Кузьминки от В. Добрецова, соединены подземным переходом. Южная часть реконструирована, требует корректировки.',
        bounds: [[55.694882, 37.7356339], [55.6926446, 37.7565765], [55.6859801, 37.73278]],
        author: ['DBRTSV_V','MNKV'],
        owner: 'ERMCHNKV_A',
        type: ['PARK']
    },
    {
        name: 'Марьино',
        year: 2025,
        url: './maps/moscow/o-mephi/20250403_647.webp',
        link: 'http://o-mephi.net/cup/maps/20250403_647.jpg',
        info: 'Карта из двух частей. Восток - городская карта с многоэтажными панельными домами и нетипичными для Москвы малоэтажными жилыми зданиями коттеджного типа. Также карта включает Братиславский парк. Автор - Александр Минаков, 2018 год. Большим числом спортсменов признана лучшей городской картой Москвы из общедоступных для проведения соревнований. Запад - городская карта с застройкой 80-90 годов. Автор - Александр Калюжный, 2023 год.',
        bounds: [[55.6609812, 37.7323294], [55.6578825, 37.7569199], [55.6466716, 37.7275443]],
        author: ['MNKV','KLZHNY'],
        owner: 'ERMCHNKV_A',
        type: ['CITY']
    },
    {
        name: 'МГДД(Ю)Т - Дворец Пионеров на Воробьевых Горах',
        year: 1998,
        url: './maps/moscow/mgddyt_1998.webp',
        link: './original_maps/moscow/mgddyt_1998_omaps.gif',
        bounds: [[55.7081101, 37.5483942], [55.7060427, 37.5644231], [55.6990782, 37.5459909]],
        logo: 'mgsyt.jpg',
        owner: 'NLTV_D',
        type: ['CITY']
    },
    {
        name: 'МГДД(Ю)Т - бывш. Дворец Пионеров на Воробьевых Горах',
        year: 2015,
        url: './maps/moscow/o-mephi/20210105_814.webp',
        link: ['http://o-mephi.net/cup/maps/20210105_814.jpg','http://o-mephi.net/cup/maps/20210105_834.ocd'],
        info: 'Первая Карта Николая Сытова в Москве. На настоящее время (2021) территория недоступна и обнесена забором, установлен пропускной режим. Администрация неконтактна.',
        bounds: [[55.7071792, 37.5490379], [55.7054624, 37.5645304], [55.6997312, 37.5466347]],
        author: 'SYTV_N',
        type: ['CITY']
    },
    {
        name: 'Медведково',
        year: 2022,
        url: './maps/moscow/o-mephi/20210531_623.webp',
        link: 'http://o-mephi.net/cup/maps/20210531_623.jpg',
        info: 'Известен также как "Сквер по Олонецкому проезду".',
        bounds: [[55.8845186, 37.6560044], [55.8828577, 37.6714325], [55.871278, 37.651391]],
        author: 'MNKV',
        owner: 'FSO_MSK'
    },
    {
        name: 'Медведково',
        year: 1999,
        url: './maps/moscow/medvedkovo_1999.webp',
        link: './original_maps/moscow/medvedkovo_1999_omaps.jpg',
        bounds: [[55.9077268, 37.6360703], [55.9051047, 37.6669693], [55.8974057, 37.6336241]],
        author: 'PTRV_VLNTN'
    },
    {
        name: 'свх Нагорное',
        year: 2002,
        url: './maps/moscow/nagornoe_2002.webp',
        link: './original_maps/moscow/nagornoe_2002_omaps.jpg',
        bounds: [[55.9319909, 37.611351], [55.9271585, 37.6713037], [55.9049844, 37.6044846]],
        author: 'PTRV_VLNTN'
    },
    {
        name: 'Мещерский парк',
        year: 1986,
        url: './maps/moscow/meschersky_1986.webp',
        link: './original_maps/moscow/meschersky_1986_omaps.jpg',
        bounds: [[55.6870204, 37.3470783], [55.6819398, 37.4237251], [55.6587298, 37.3428726]],
        author: 'ZHRDV_V',
        type: ['PARK']
    },
    {
        name: 'Мещерский парк',
        year: 1993,
        url: './maps/moscow/meschersky_1993.webp',
        link: './original_maps/moscow/meschersky_1993_omaps.jpg',
        bounds: [[55.6907942, 37.3252773], [55.6833914, 37.4244118], [55.660497, 37.3190117]],
        author: 'ZHRDV_V',
        type: ['PARK']
    },
    {
        name: 'Солнцево, Мещерский парк',
        year: 2002,
        url: './maps/moscow/meschersky_2002.webp',
        link: './original_maps/moscow/meschersky_2002_omaps.png',
        bounds: [[55.6875526, 37.3479366], [55.6827624, 37.4187469], [55.6596255, 37.3425293]],
        author: 'ZHRDV_V',
        owner: 'NLTV_D',
        type: ['PARK']
    },
    {
        name: 'Заречье, Мещерский Парк',
        year: 2015,
        url: './maps/moscow/o-mephi/20210531_700.webp',
        link: 'http://o-mephi.net/cup/maps/20210531_700.jpg',
        info: 'Администрация парка хочет денег. Проведение соревнований невозможно.',
        bounds: [[55.6860043, 37.3881912], [55.682835, 37.4207211], [55.6624821, 37.3808956]],
        author: 'DBRTSV_V',
        owner: 'SYTV_N',
        type: ['PARK']
    },
    {
        name: 'Царицыно',
        year: 1986,
        url: './maps/moscow/tsaritsyno_1986.webp',
        link: './original_maps/moscow/tsaritsyno_1986_omaps.jpg',
        bounds: [[55.6224715, 37.6744795], [55.6194908, 37.7009583], [55.6057479, 37.6689434]],
        type: ['PARK']
    },
    {
        name: 'Музей-заповедник Царицыно',
        year: 2002,
        url: './maps/moscow/tsaritsyno_2002.webp',
        link: './original_maps/moscow/tsaritsyno_2002_omaps.png',
        bounds: [[55.6173219, 37.6723981], [55.6154436, 37.6957011], [55.605554, 37.6697588]],
        author: 'SMKN_S',
        owner: 'NLTV_D',
        type: ['PARK']
    },
    {
        name: 'Музей-заповедник Царицыно',
        year: 2025,
        url: './maps/moscow/tsaritsyno_2025.webp',
        link: './original_maps/moscow/tsaritsyno_2025_omaps.gif',
        info: 'Карты одного из красивейших парков Москвы от Сергея Симакина. Возможность использования сомнительна. Администрация хочет денег. Северная часть отредактирована Александром Минаковым под ночное памяти Горюнова в 2024 году.',
        bounds: [[55.6228107, 37.6733208], [55.6193697, 37.7012587], [55.60616, 37.6679993]],
        author: ['SMKN_S','MNKV'],
        owner: 'ERMCHNKV_A',
        type: ['PARK']
    },
    {
        name: 'НИЯУ МИФИ',
        year: 2017,
        url: './maps/moscow/o-mephi/20210531_654.webp',
        link: 'http://o-mephi.net/cup/maps/20210531_654.jpg',
        info: 'Тренировочный полигон ССО МИФИ.',
        bounds: [[55.6530523, 37.6619911], [55.652108, 37.6712394], [55.6484394, 37.6605964]],
        author: 'MNKV',
        owner: 'ERMCHNKV_A',
        type: ['CITY']
    },
    {
        name: 'Новогорский лесопарк',
        year: 1989,
        url: './maps/moscow/novogorsky_1989.webp',
        //link: 'http://o-mephi.net/cup/maps/20210609_848.jpg',
        link: './original_maps/moscow/novogorsky_1989_omaps.jpg',
        bounds: [[55.877309, 37.3448038], [55.8725902, 37.3836851], [55.8505053, 37.340126]],
        author: ['GLDRV','FMN_I']
    },
    {
        name: 'Новогорский лесопарк',
        year: 2021,
        url: './maps/moscow/o-mephi/20210609_848.webp',
        link: 'http://o-mephi.net/cup/maps/20210609_848.jpg',
        info: 'Небольшой парк с крутым склоном к реке по периметру рядом с метро.',
        bounds: [[55.8611399, 37.3579144], [55.8588759, 37.3814106], [55.8492285, 37.3544812]],
        author: ['TTYNN_V','SYTV_N'],
        owner: 'ERMCHNKV_A',
        type: ['PARK']
    },
    {
        name: 'ООПТ Природный заказник Выхинский и Жулебинский',
        year: 2025,
        url: './maps/moscow/o-mephi/20210529_576.webp',
        link: ['http://o-mephi.net/cup/maps/20250403_456.jpg','http://o-mephi.net/cup/maps/20201215_683.ocd'],
        bounds: [[55.7016054, 37.8185892], [55.6979053, 37.8522348], [55.6868269, 37.8140831]],
        author: ['MNKV','TTYNN_V'],
        owner: 'ERMCHNKV_A'
    },
    {
        name: 'Останкино, Ботанический сад',
        year: 1984,
        info: '<a href="https://o-moscow.ru/reports/moving_01.html">13.05. XV традиционные соревнований на призы Центрального телевидения</a>.',
        url: './maps/moscow/ostankino_1984.webp',
        link: './original_maps/moscow/ostankino_1994_omaps.jpg',
        bounds: [[55.8409642, 37.5986052], [55.8388678, 37.624526], [55.8242858, 37.594142]],
        type: ['PARK']
    },
    {
        name: 'Останкино',
        year: 1998,
        info: 'бывш ПКиО им Дзержинского',
        url: './maps/moscow/ostankino_1998.webp',
        link: './original_maps/moscow/ostankino_1998_omaps.jpg',
        bounds: [[55.8339274, 37.6023388], [55.8327946, 37.6191401], [55.8231287, 37.5990129]],
        author: 'PTRV_VLNTN',
        type: ['PARK']
    },
    {
        name: 'Останкинский парк',
        year: 2017,
        url: './maps/moscow/o-mephi/20210531_344.webp',
        link: 'http://o-mephi.net/cup/maps/20210531_344.jpg',
        info: 'Соревнования на этой карте ни разу не проводились из-за неадекватных требований администрации.',
        bounds: [[55.8370845, 37.6029396], [55.8352529, 37.6219726], [55.8239845, 37.598691]],
        author: 'TTYNN_V',
        owner: 'ERMCHNKV_A',
        type: ['PARK']
    },
    {
        name: 'Останкино, ВДНХ',
        year: 2025,
        url: './maps/moscow/ostankino_vdnh_2025.webp',
        link: './original_maps/moscow/ostankino_vdnh_2025_omaps.png',
        info: 'РосАзимут.',
        logo: 'msk_rosazimut.webp',
        bounds: [[55.8420727, 37.6111794], [55.8402534, 37.6266932], [55.8274437, 37.6059008]],
        author: 'ZHRDV_V',
        owner: 'PRZRV',
        type: ['PARK']
    },
    {
        name: 'Парк Борисовские Пруды',
        year: 2020,
        url: './maps/moscow/o-mephi/2019.webp',
        link: 'http://o-mephi.net/cup/maps/2019.jpg',
        bounds: [[55.6403505, 37.676754], [55.6384612, 37.6988983], [55.6183761, 37.6720333]],
        author: 'SMKN_S',
        owner: 'ERMCHNKV_A',
        type: ['PARK']
    },
/*
    {
        name: 'Парк Борисовские Пруды',
        year: 2024,
        url: './maps/moscow/ak/borisovsky_prud_2024.webp',
        link: './original_maps/moscow/ak/borisovsky_prud_2024_omaps.jpg',
        bounds: [[55.6299826, 37.7085757], [55.6313151, 37.7269006], [55.6265422, 37.7093482]],
        author: 'MNKV',
        owner: 'ERMCHNKV_A',
        type: ['PARK']
    },
*/
    {
        name: 'Марьино-Братеево-Орехово-Зябликово',
        year: 2025,
        url: './maps/moscow/o-mephi/20250403_972.webp',
        link: 'http://o-mephi.net/cup/maps/20250403_972.jpg',
        info: 'Целый кластер городских и парковых карт. Включает парк в пойме, часть набережной Борисовского пруда, Кварталы районов Братеево (Борисово), Зябликово, Орехово-Борисово, Братеевский парк, а также парк 850-летия Москвы в Марьино.',
        bounds: [[55.6493717, 37.7076745], [55.6429178, 37.7610826], [55.6251732, 37.6985121]],
        author: ['MNKV','SMKN_S'],
        owner: 'ERMCHNKV_A',
        type: ['PARK']
    },
    {
        name: 'Парк Дружбы',
        year: 1998,
        logo: 'msk_park_cup_2002.png',
        info: '14 апреля 2002 года в Москве прошли <a href="https://t.me/lamporient/6494">первые массовые соревнования</a> с электронной отметкой SportIdent (Кубок парков).',
        url: './maps/moscow/ak/druzhby_1998.webp',
        link: ['./original_maps/moscow/ak/druzhby_1998_omaps.jpg','./original_maps/moscow/ak/druzhby_1998_cup_omaps.jpg','./original_maps/moscow/ak/druzhby_2002_cup_omaps.jpg'],
        bounds: [[55.8607787, 37.474215], [55.8580691, 37.4987411], [55.850156, 37.4703312]],
        owner: 'NLTV_D',
        type: ['PARK']
    },
    {
        name: 'Парк Дружбы и Речного Вокзала, Левобережный район',
        year: 2025,
        url: './maps/moscow/o-mephi/20250404_210.webp',
        link: 'http://o-mephi.net/cup/maps/20250404_210.jpg',
        bounds: [[55.8679672, 37.4641085], [55.864066, 37.5011444], [55.8468434, 37.4569845]],
        author: ['KLZHNY','DBRTSV_V'],
        owner: 'ERMCHNKV_A',
        type: ['CITY','PARK']
    },
    {
        name: 'Парк Дубки',
        year: 2024,
        url: './maps/moscow/o-mephi/20230130_803.webp',
        link: 'http://o-mephi.net/cup/maps/20250403_101.jpg',
        info: 'Небольшой живописный парк в Тимирязевском районе недалеко от клуба Ориента-Скрум.',
        bounds: [[55.8243943, 37.563715], [55.823647, 37.5715256], [55.8175594, 37.5611615]],
        author: 'MNKV',
        owner: 'ORNTA_SKRM',
        type: ['PARK']
    },
    {
        name: 'Химки, парк Дубки',
        year: 2023,
        url: './maps/moscow/ak/khimki_dubki_2023.webp',
        link: './original_maps/moscow/ak/khimki_dubki_2023_omaps.jpg',
        bounds: [[55.8956973, 37.4106359], [55.8947468, 37.4278665], [55.8893803, 37.4094772]],
        author: 'LUK_V',
        owner: 'FSO_MSK',
        type: ['PARK']
    },
    {
        name: 'Химки, парк Экоберег',
        year: 2023,
        url: './maps/moscow/ak/khimki_ekobereg_2023.webp',
        link: './original_maps/moscow/ak/khimki_ekobereg_2023_omaps.jpg',
        bounds: [[55.9085326, 37.472198], [55.9074622, 37.4851799], [55.8914259, 37.466898]],
        author: 'LUK_V',
        owner: 'FSO_MSK',
        type: ['PARK']
    },
    {
        name: 'Парк Подрезково',
        year: 2023,
        url: './maps/moscow/podrezkovo_2023.webp',
        link: './original_maps/moscow/podrezkovo_2023_omaps.jpg',
        bounds: [[55.9516267, 37.3232818], [55.9511341, 37.3333883], [55.9459076, 37.3216724]],
        author: ['LUK_V','STLRV'],
        owner: 'FSO_MSK',
        type: ['PARK']
    },
    {
        name: 'Парк Подрезково',
        year: 2024,
        url: './maps/moscow/podrezkovo_skhodnya_2024.webp',
        link: './original_maps/moscow/podrezkovo_skhodnya_2024_omaps.jpg',
        bounds: [[55.9532726, 37.311523], [55.9517469, 37.3300195], [55.9470131, 37.3093343]],
        type: ['PARK']
    },
    {
        name: 'Протвино',
        year: 2022,
        url: './maps/moscow/protvino_2022.webp',
        link: './original_maps/moscow/protvino_2022_omaps.jpg',
        bounds: [[54.882137, 37.2246838], [54.8784584, 37.2639942], [54.8584054, 37.2186756]],
        author: 'LUK_V',
        owner: 'KHMCHKNA',
        type: ['PARK']
    },
    {
        name: 'Парк Зюзино',
        year: 2023,
        url: './maps/moscow/zjuzino_2024.webp',
        link: ['./original_maps/moscow/zjuzino_2024_omaps.jpg','http://o-mephi.net/cup/maps/20250404_966.jpg'],
        info: 'Нарисована под Чемпионат Москвы в эстафете 2020.',
        bounds: [[55.6570472, 37.5663114], [55.6537423, 37.5963306], [55.6457393, 37.5624275]],
        author: 'KLZHNY',
        owner: 'ERMCHNKV_A',
        type: ['PARK','CITY']
    },
    {
        name: 'Беловежский пруд',
        year: 2025,
        url: './maps/moscow/ak/belovezhskaya_2024.webp',
        link: 'http://o-mephi.net/cup/maps/20250403_624.jpg',
        info: '1.08, Спринт. <br />Городская карта от А. Калюжного нарисована в 2024 году под спринт тур.',
        bounds: [[55.7163663, 37.3928905], [55.7149038, 37.4073958], [55.7047128, 37.3889422]],
        author: 'KLZHNY',
        owner: 'ERMCHNKV_A',
        start: 'OBSW',
        type: ['CITY']
    },
    {
        name: 'Матвеевское',
        year: 2025,
        url: './maps/moscow/matveevskoe_2023.webp',
        link: 'http://o-mephi.net/cup/maps/20250404_654.jpg',
        info: 'Городская карта исторического района Матвеевское на западе Москвы (р-н Очаково-Матвеевское) от А. Калюжного. Подготовлена в 2023 году под спринт тур. Состоит из двух частей общей площадью более 1 км².',
        bounds: [[55.7169948, 37.4603748], [55.714106, 37.4920034], [55.7027783, 37.4567914]],
        author: 'KLZHNY',
        owner: 'ERMCHNKV_A',
        type: ['CITY']
    },
    {
        name: 'Северное Медведково',
        year: 2025,
        url: './maps/moscow/medvedkovo_2024.webp',
        link: 'http://o-mephi.net/cup/maps/20250404_47.jpg',
        info: 'Комбинированная спринтерская карта-город парк. Подготовлена под спринт-тур 2024.',
        bounds: [[55.8968884, 37.6449752], [55.8970809, 37.662828], [55.8875993, 37.6451254]],
        author: 'KLZHNY',
        owner: 'ERMCHNKV_A',
        type: ['CITY','PARK']
    },
    {
        name: 'Ясенево',
        year: 1997,
        url: './maps/moscow/yasenevo_1997.webp',
        link: './original_maps/moscow/yasenevo_1997_omaps.png',
        bounds: [[55.6261303, 37.5119162], [55.6239011, 37.5350046], [55.6097477, 37.5065947]],
        author: 'SYTV_N',
        owner: 'NLTV_D'
    },
    {
        name: 'Ясенево',
        year: 2024,
        url: './maps/moscow/yasenevo_2014.webp',
        link: './original_maps/moscow/yasenevo_2014_omaps.jpg',
        bounds: [[55.6248219, 37.5270653], [55.6228955, 37.543416], [55.6138076, 37.5232244]],
        author: 'KLZHNY',
        owner: 'ERMCHNKV_A',
        type: ['CITY'],
        zindex: 2
    },
    {
        name: 'Экопарк "Летова тропа"',
        year: 2022,
        url: './maps/moscow/lr/letovo_2022.webp',
            link: './original_maps/moscow/lr/letovo_2022_omaps.jpg',
        bounds: [[55.5571001, 37.416923], [55.5560806, 37.4286819], [55.5508616, 37.4152923]],
        author: 'KLZHNY',
        owner: 'LTVO',
        type: ['PARK']
    },
    {
        name: '40-й квартал Зюзина',
        year: 2021,
        url: './maps/moscow/o-mephi/20210302_122.webp',
        link: 'http://o-mephi.net/cup/maps/20210302_122.jpg',
        bounds: [[55.6566962, 37.5680709], [55.6552556, 37.5818038], [55.6509699, 37.5661182]],
        author: ['MNKV','LKN_A','KLZHNY'],
        owner: 'YZAO',
        type: ['CITY']
    },
    {
        name: 'Парк им. 50-летия Октября (Раменки)',
        year: 2018,
        url: './maps/moscow/o-mephi/20210606_814.webp',
        link: 'http://o-mephi.net/cup/maps/20210606_814.jpg',
        bounds: [[55.6930196, 37.4958229], [55.6911812, 37.5141907], [55.6782377, 37.4912739]],
        author: 'SYTV_N',
        owner: 'SYTV_N',
        type: ['PARK']
    },
/*
    {
        name: 'Парк имени 850-летия Москвы',
        year: 2020,
        url: './maps/moscow/o-mephi/20200907_258.webp',
        link: 'http://o-mephi.net/cup/maps/20200907_258.jpg',
        bounds: [[55.648052, 37.7064085], [55.6437897, 37.7480364], [55.6412467, 37.7042627]],
        author: 'SMKN_S',
        owner: 'ERMCHNKV_A',
        type: ['PARK']
    },
*/
    {
        name: 'Парк имени 850-летия Москвы',
        year: 2015,
        url: './maps/moscow/park_850_2015.webp',
        link: './original_maps/moscow/park_850_2015_omaps.jpg',
        bounds: [[55.6513452, 37.7464914], [55.649287, 37.7713823], [55.6412951, 37.7452254]],
        author: 'DBRTSV_V',
        start: 'INCR',
        type: ['PARK']
    },
    {
        name: 'Парк имени Артёма Боровика',
        year: 2017,
        url: './maps/moscow/o-mephi/20200907_909.webp',
        link: 'http://o-mephi.net/cup/maps/20200907_909.jpg',
        bounds: [[55.6636924, 37.7537012], [55.6628815, 37.7597308], [55.6602671, 37.7523279]],
        author: 'MNKV',
        owner: 'ERMCHNKV_A',
        type: ['PARK']
    },
/*
    {
        name: 'Парк Горького, Парк Искусств Музеон и район Якиманка',
        year: 2024,
        url: './maps/moscow/o-mephi/20250404_301.webp',
        link: 'http://o-mephi.net/cup/maps/20250404_301.jpg',
        info: 'На данный момент - самая близкая к Кремлю карта (включает Кремль!). Карта главного парка Страны от Александра Минакова. Включает территорию парка Горького (2025-2020), парка искусств Музеон и прилегающие кварталы района Якиманка и южную часть отрова Балчуг. Подготовлена Александром Минаковым в 2015, 2022 к Ночным соревнованиям памяти А.С. Горюнова, впоследствии дополнена. К сожалению, на данный момент согласование стартов в связи с изменением позиции администрации не представляется возможным.',
        bounds: [[55.7517528, 37.599206], [55.7491926, 37.6205778], [55.7219863, 37.5886917]],
        author: 'MNKV',
        owner: 'ERMCHNKV_A',
        type: ['PARK']
    },
*/
    {
        name: 'Парк Кусково',
        year: 2000,
        url: './maps/moscow/ak/kuskovo_2000.webp',
        link: './original_maps/moscow/ak/kuskovo_2000_omaps.jpg',
        bounds: [[55.7451829, 37.7722406], [55.7424774, 37.8176451], [55.7266509, 37.7696228]],
        author: ['ZHRDV_V','MRTSHV'],
        owner: 'NLTV_D',
        type: ['PARK']
    },
    {
        name: 'Парк Кусково',
        year: 2021,
        url: './maps/moscow/o-mephi/20220112_458.webp',
        link: ['http://o-mephi.net/cup/maps/20220112_458.jpg','http://o-mephi.net/cup/maps/20220112_794.ocd'],
        info: 'После реконструкции полностью потеряла актуальность.',
        bounds: [[55.7461491, 37.7741718], [55.7424049, 37.8185034], [55.7267476, 37.7691936]],
        author: 'MNKV',
        owner: 'ERMCHNKV_A',
        type: ['PARK']
    },
    {
        name: 'Парк Кусково',
        year: 2025,
        url: './maps/moscow/o-mephi/20250403_280.webp',
        link: ['http://o-mephi.net/cup/maps/20250403_280.jpg','http://o-mephi.net/cup/maps/20220112_168.ocd'],
        info: 'Карта в новой редакции от Александра Минакова 2024 года. Центральная часть парка по итогам реконструкции.',
        bounds: [[55.7411728, 37.7825832], [55.7376939, 37.8142118], [55.7269167, 37.7780342]],
        author: 'MNKV',
        owner: 'ERMCHNKV_A',
        type: ['PARK']
    },
    {
        name: 'Кусково',
        year: 1991,
        url: './maps/moscow/ak/kuskovo_1991.webp',
        link: './original_maps/moscow/ak/kuskovo_1991_omaps.jpg',
        bounds: [[55.7450621, 37.7735281], [55.742429, 37.8176451], [55.7258775, 37.7702665]],
        author: 'MRTSHV',
        type: ['PARK']
    },
    {
        name: 'Кусково',
        year: 1998,
        url: './maps/moscow/ak/kuskovo_1998.webp',
        link: './original_maps/moscow/ak/kuskovo_1998_omaps.jpg',
        bounds: [[55.7438302, 37.7965951], [55.7424411, 37.8177309], [55.7272188, 37.7929044]],
        author: 'SYTV_N',
        logo: 'mgsyt.jpg',
        owner: 'NLTV_D',
        type: ['PARK']
    },
    {
        name: 'Парк Олимпийской деревни',
        year: 2019,
        url: './maps/moscow/o-mephi/20210531_337.webp',
        link: 'http://o-mephi.net/cup/maps/20210531_337.jpg',
        bounds: [[55.6860164, 37.4718332], [55.6845044, 37.4874115], [55.6755033, 37.4682069]],
        author: 'SYTV_N',
        owner: 'SYTV_N',
        type: ['PARK']
    },
    {
        name: 'Парк Пехорка',
        year: 2022,
        url: './maps/moscow/o-mephi/20230130_118.webp',
        link: 'http://o-mephi.net/cup/maps/20230130_118.jpg',
        info: 'Карта исторического центра г.Балашиха МО и прилегающего парка Пехорка.',
        bounds: [[55.8053452, 37.9358339], [55.8037895, 37.9520774], [55.7974576, 37.9334092]],
        author: 'TTYNN_V',
        owner: 'ERMCHNKV_A',
        type: ['PARK']
    },
    {
        name: 'Парк Садовники',
        year: 2025,
        excluded: true,
        url: './maps/moscow/o-mephi/20210529_707.webp',
        link: 'http://o-mephi.net/cup/maps/20210529_707.jpg',
        info: 'Тренировочный полигон клуба Москомпас Ориента. Крупномасштабная врезка Рижского парка.',
        bounds: [[55.6696709, 37.6470351], [55.6680977, 37.6612186], [55.6577009, 37.642765]],
        author: 'MNKV',
        owner: 'ERMCHNKV_A',
        type: ['PARK']
    },
    {
        name: 'Битца',
        year: 1988,
        url: './maps/moscow/ak/bitsa_1988.webp',
        link: ['./original_maps/moscow/ak/bitsa_1988_1_omaps.jpg','./original_maps/moscow/ak/bitsa_1988_2_omaps.jpg'],
        bounds: [[55.6505704, 37.5287819], [55.6472286, 37.6009655], [55.5866404, 37.5129032]],
        author: 'KRNVA'
    },
    {
        name: 'Большая Битца 15000',
        year: 2025,
        excluded: true,
        info: 'Устаревшая условно-бесплатная карта 2006-2022, генерализация А.Минакова под 15000 сделана в 2022-2025.',
        url: './maps/moscow/ak/big_bitsa_2023.webp',
        link: 'http://o-mephi.net/cup/maps/20250403_949.jpg',
        bounds: [[55.6551224, 37.5111866], [55.6434022, 37.6177025], [55.5581073, 37.4777985]],
        author: ['MNKV','SYTV_N','MTN_Y','JASHPTRV','SKRPKO_S','KSTLV_E','DRNN_S','TTYNN_V','LUK_V','YURCHK','MKHLV_A','SLBDNK'],
        owner: 'SYTV_N'
    },
    {
        name: 'Голубинский Лесопарк',
        year: 2021,
        url: './maps/moscow/o-mephi/20201204_393.webp',
        link: 'http://o-mephi.net/cup/maps/20201204_393.jpg',
        bounds: [[55.6131653, 37.4998784], [55.6115171, 37.5139546], [55.6070085, 37.4983335]],
        author: ['TTYNN_V','TTYNN_M'],
        owner: 'ERMCHNKV_A',
        type: ['PARK']
    },
    {
        name: 'ПИП Битцевский Лес + Битцевский парк, Ясенево',
        year: 2024,
        url: './maps/moscow/ak/big_bitsa_2024.webp',
        link: './original_maps/moscow/ak/big_bitsa_2024_omaps.jpg',
        info: 'Крупнейший лесной массив Москвы доступный для занятия ориентированием.',
        bounds: [[55.6539602, 37.5217438], [55.643596, 37.6180458], [55.5895508, 37.4997711]],
        author: ['SYTV_N','JASHPTRV','SKRPKO_S'],
        owner: 'SYTV_N'
    },
    {
        name: 'Битцевский Лес',
        date: '2022-01-30',
        url: './maps/moscow/ak/bitsa_winter_rogaine_2022.webp',
        link: './original_maps/moscow/ak/bitsa_winter_rogaine_2022_omaps.gif',
        info: 'II зимний Нанорогейн 2022.',
        bounds: [[55.6496986, 37.5458622], [55.6419006, 37.616415], [55.5863009, 37.5263786]],
        type: ['ROGAINE','WINTER'],
        author: ['SKRPKO_S','SYTV_N','JASHPTRV','LKN_A','ERMCHNKV_A','KLNN_O'],
        owner: 'SYTV_N'
    },
    {
        name: 'Ясенево, север',
        year: 2012,
        url: './maps/moscow/ak/jasenevo_north_2012.webp',
        link: './original_maps/moscow/ak/jasenevo_north_2012_omaps.jpg',
        bounds: [[55.6195393, 37.5410557], [55.6180853, 37.5576639], [55.6100628, 37.538352]],
        author: 'KSTLV_E',
        owner: 'KSTLV_E'
    },
    {
        name: 'Бутовский л/п',
        date: '2013-10-12',
        info: '<a href="https://moscompass.ru/news/index.php?m=99&mes=26179">Чемпионат России и Всероссийские соревнования в честь 50-летнего юбилея ориентирования</a>.',
        url: './maps/moscow/ak/butovsky_2013.webp',
        link: ['./original_maps/moscow/ak/butovsky_2013_omaps.pdf','./original_maps/moscow/ak/butovsky_2013_2_omaps.jpg'],
        bounds: [[55.5852215, 37.5291467], [55.5829294, 37.5659895], [55.5678876, 37.5254345]],
        logo: 'fsor.webp',
        type: ['PARK'],
        region: 'MSK',
        start: 'RUSSIA_CHAMP'
    },
    {
        name: 'ПиП Битцевский лес - Конно-Спортивный Комплекс',
        year: 2019,
        url: './maps/moscow/o-mephi/20210105_17.webp',
        link: 'http://o-mephi.net/cup/maps/20210105_17.jpg',
        bounds: [[55.6502193, 37.5610542], [55.6478098, 37.5840139], [55.6379405, 37.5572991]],
        author: 'SYTV_N',
        owner: ['SYTV_N','ERMCHNKV_A'],
        type: ['PARK']
    },
    {
        name: 'ПиП Битцевский лес (ЮГ)',
        year: 2019,
        url: './maps/moscow/o-mephi/20210105_869.webp',
        link: 'http://o-mephi.net/cup/maps/20210105_869.jpg',
        bounds: [[55.6068873, 37.5447893], [55.6010447, 37.60324], [55.5843605, 37.5378799]],
        author: 'MTN_Y',
        owner: 'FSO_MSK',
        type: ['PARK']
    },
    {
        name: 'Кузьминки',
        year: 1977,
        url: './maps/moscow/ak/kuzminki_1977.webp',
        link: './original_maps/moscow/ak/kuzminki_1977_omaps.webp',
        info: 'VIII приз телевидения.',
        bounds: [[55.6988485, 37.760911], [55.6948336, 37.8136969], [55.6839721, 37.7580786]],
        type: ['PARK']
    },
    {
        name: 'ПИП Кузьминки',
        year: 2025,
        url: './maps/moscow/o-mephi/20250403_463.webp',
        link: 'http://o-mephi.net/cup/maps/20250403_463.jpg',
        info: 'Один из крупнейших лесных массивов Москвы.',
        bounds: [[55.7017022, 37.7573919], [55.6899959, 37.8631353], [55.6655321, 37.7448177]],
        author: ['DBRTSV_V','TTYNN_V'],
        owner: ['ERMCHNKV_A']
    },
    {
        name: 'Кузьминки',
        year: 2001,
        url: './maps/moscow/ak/kuzminki_2001.webp',
        link: './original_maps/moscow/ak/kuzminki_2001_omaps.jpg',
        bounds: [[55.7010371, 37.7612972], [55.6966355, 37.7921963], [55.6910119, 37.7565765]],
        author: 'ZUEV_A',
        owner: 'NLTV_D'
    },
    {
        name: 'ПИП Кузьминки + Кузьминки-Чагино + Белая Дача',
        year: 2022,
        url: './maps/moscow/o-mephi/20210103_183.webp',
        link: 'http://o-mephi.net/cup/maps/20210103_183.jpg',
        info: 'Лесной массив парка Кузьминки целиком. Сводная карта разных годов с генерализацией под 10000 (Нанорогейн).',
        bounds: [[55.6924632, 37.815156], [55.6869478, 37.8609037], [55.6599402, 37.8044701]],
        author: ['DBRTSV_V','TTYNN_V','LUK_V','ZUEV_A','KRSVSKY_A','SMKN_S','BRTNK_V'],
        owner: ['FSO_MSK','SYTV_N','ERMCHNKV_A'],
        type: ['ROGAINE']
    },
    {
        name: 'ПКиО Измайлово',
        year: 2024,
        url: './maps/moscow/o-mephi/20210529_21.webp',
        link: 'http://o-mephi.net/cup/maps/20250404_908.jpg',
        bounds: [[55.790449, 37.7466631], [55.7868297, 37.7772188], [55.7615089, 37.7360201]],
        author: 'TTYNN_V',
        owner: 'ERMCHNKV_A',
        type: ['PARK']
    },
    {
        name: 'Потапово',
        year: 2017,
        url: './maps/moscow/potapovo_2017.webp',
        link: './original_maps/moscow/potapovo_2017_omaps.gif',
        bounds: [[55.5250355, 37.6656818], [55.525327, 37.683363], [55.5127418, 37.6659608]],
        author: 'BTV_E'
    },
    {
        name: 'Подольск, пойма Десны',
        year: 2015,
        url: './maps/moscow/podolsk_2015.webp',
        link: './original_maps/moscow/podolsk_2015_omaps.gif',
        bounds: [[55.4559612, 37.4853945], [55.4563505, 37.5102425], [55.4367808, 37.4850512]],
        author: 'BTV_E'
    },
    {
        name: 'пл. Весенняя, л/п Дубки',
        year: 1999,
        url: './maps/moscow/ak/dubki_1999.webp',
        link: './original_maps/moscow/ak/dubki_1999_omaps.jpg',
        bounds: [[55.4255554, 37.4880552], [55.422024, 37.534833], [55.3946144, 37.4784422]],
        author: ['NKRSV_S','KRNVA']
    },
    {
        name: 'пл. Весенняя, г. Климовск',
        year: 1997,
        url: './maps/moscow/vesennyaya_1997.webp',
        link: './original_maps/moscow/vesennyaya_1997_omaps.jpg',
        bounds: [[55.4035581, 37.4776268], [55.3984895, 37.5446177], [55.3692589, 37.4710178]],
        author: ['NKRSV_S','KRNVA']
    },
    {
        name: 'пл. Весенняя, г. Климовск',
        year: 2019,
        url: './maps/moscow/o-mephi/20210105_949.webp',
        link: 'http://o-mephi.net/cup/maps/20210105_949.jpg',
        info: 'Тренировочный полигон клуба Ориента-Весна.',
        bounds: [[55.4037287, 37.4786568], [55.3984042, 37.5436306], [55.3689418, 37.4706745]],
        author: ['JASHPTRV','SKRPKO_S'],
        owner: ['ORNTA_VSNA','SRPNSKY']
    },
    {
        name: 'Пойма р. Битца, бульвар Дмитрия Донского',
        year: 2016,
        url: './maps/moscow/o-mephi/20210606_508.webp',
        link: 'http://o-mephi.net/cup/maps/20210606_508.jpg',
        info: 'Парковая карта у м. Бульвар Дмитрия Донского. Устарела после реконструкции сквера.',
        bounds: [[55.5764039, 37.5671911], [55.5750453, 37.5798082], [55.5729952, 37.5663328]],
        author: ['KSTLV_E','MNKV'],
        owner: 'ERMCHNKV_A',
        type: ['PARK']
    },
    {
        name: 'Знаменские Садки',
        year: 2021,
        url: './maps/moscow/znamensky_sadki_2021.webp',
        link: ['./original_maps/moscow/znamensky_sadki_2021_omaps.jpg','./original_maps/moscow/znamensky_sadki_2021_omaps.ocd'],
        info: 'Карта уже устарела.',
        bounds: [[55.5764645, 37.5670624], [55.5752394, 37.5798297], [55.5722066, 37.5654745]],
        author: 'KLZHNY',
        owner: 'FSO_MSK',
        type: ['PARK']
    },
    {
        name: 'Покровское-Стрешнево',
        year: 1989,
        url: './maps/moscow/pokrovskoe_stershnevo_1989.webp',
        link: './original_maps/moscow/pokrovskoe_stershnevo_1989_omaps.jpg',
        bounds: [[55.8296854, 37.463851], [55.8267567, 37.4926472], [55.8156184, 37.459023]],
        author: 'GLDRV'
    },
    {
        name: 'Покровское-Стрешнево',
        year: 1992,
        url: './maps/moscow/pokrovskoe_stershnevo_1996.webp',
        link: './original_maps/moscow/pokrovskoe_stershnevo_1996_omaps.jpg',
        bounds: [[55.83171, 37.4565125], [55.8286489, 37.4943638], [55.8151241, 37.4520922]],
        author: 'KUZNTSV_V'
    },
    {
        name: 'Покровское-Стрешнево',
        year: 2025,
        url: './maps/moscow/o-mephi/20230130_140.webp',
        link: ['http://o-mephi.net/cup/maps/20250614_81.jpg','http://o-mephi.net/cup/maps/20230130_388.ocd'],
        bounds: [[55.8303121, 37.4629927], [55.8270339, 37.493999], [55.814895, 37.4576497]],
        author: 'TTYNN_V',
        owner: 'ERMCHNKV_A'
    },
    {
        name: 'Прилуки-Турово-Малюшина Дача',
        year: 2022,
        url: './maps/moscow/o-mephi/20210118_89.webp',
        link: 'http://o-mephi.net/cup/maps/20210118_89.jpg',
        info: 'Одна из лучших карт и местностей в Подмосковье. Сосняк на берегу Оки в Серпуховском районе.',
        bounds: [[54.8737918, 37.856698], [54.8673959, 37.9201269], [54.854527, 37.8509474]],
        author: 'LUK_V',
        owner: 'FSO_MSK'
    },
    {
        name: 'Ромашковский лес',
        year: 1989,
        url: './maps/moscow/romashkovo_1989.webp',
        link: './original_maps/moscow/romashkovo_1989_omaps.jpg',
        bounds: [[55.768752, 37.3104286], [55.7628611, 37.3859596], [55.7327648, 37.2928333]]
    },
    {
        name: 'Ромашково',
        year: 1997,
        url: './maps/moscow/romashkovo_1997.webp',
        link: './original_maps/moscow/romashkovo_1997_omaps.jpg',
        bounds: [[55.7683657, 37.3404694], [55.7638993, 37.4027824], [55.7311458, 37.3305559]],
        author: ['KZMN_R','FMN_I','JANN_Y']
    },
    {
        name: 'Раздоры, парк Малевича',
        year: 1976,
        url: './maps/moscow/razdory_1976.webp',
        link: './original_maps/moscow/razdory_1976_omaps.jpg',
        bounds: [[55.7516079, 37.302103], [55.7475501, 37.3445892], [55.7316049, 37.2942066]],
        type: ['PARK']
    },
    {
        name: 'Раздоры, парки Малевича и Раздолье',
        year: 2002,
        url: './maps/moscow/razdory_2002.webp',
        link: './original_maps/moscow/razdory_2002_omaps.gif',
        bounds: [[55.7534675, 37.2870398], [55.747381, 37.354331], [55.7267476, 37.2821474]],
        author: ['KLNN_B','KNTSN','LUK_V','OKN_V'],
        owner: 'NLTV_D',
        type: ['PARK']
    },
    {
        name: 'Раздоры, парк Малевича',
        year: 2018,
        startYear: 2015,
        start: 'BNO',
        info: '<br />Карта леса у платформы Раздоры в Одинцово. После вырубки короедных завалов карта потеряла свою актуальность. Ведется благоустройство.',
        o_gps: {
            '2015':776
        },
        url: './maps/moscow/o-mephi/20210606_368.webp',
        link: ['http://o-mephi.net/cup/maps/20210606_368.jpg','https://tkmgtu.ru/library/images/5/56/Bno2015b.jpg'],
        bounds: [[55.7526705, 37.3010302], [55.7478883, 37.3498678], [55.7296476, 37.293992]],
        author: 'LUK_V',
        owner: 'FSO_MSK',
        type: ['PARK']
    },
/*
    {
        name: 'Раздоры, парк Малевича',
        year: 2023,
        url: './maps/moscow/malevicha_2023.webp',
        link: './original_maps/moscow/lr/malevicha_2023_omaps.gif',
        bounds: [[55.7529362, 37.3008585], [55.7481298, 37.349782], [55.7295267, 37.2938633]],
        author: 'ZHRDV_V',
        owner: 'NLTV_D',
        type: ['PARK']
    },
*/
    {
        name: 'Аляухово',
        year: 2000,
        url: './maps/moscow/ak/aliauhovo_2000.webp',
        link: './original_maps/moscow/ak/aliauhovo_2000_omaps.gif',
        bounds: [[55.6898508, 36.8292618], [55.6870204, 36.8811893], [55.6584393, 36.8233824]],
        author: ['STLV_S','ZUEV_A'],
        areas: '30,70'
    },
    {
        name: 'Вязёмы',
        year: 1989,
        url: './maps/moscow/vyazemy_1989.webp',
        link: './original_maps/moscow/vyazemy_1989_omaps.jpg',
        bounds: [[55.6632567, 37.0031548], [55.6609812, 37.0543098], [55.6405927, 36.9981337]],
        author: 'LUK_V'
    },
    {
        name: 'Мичуринец',
        year: 1989,
        url: './maps/moscow/michurinets_1989.webp',
        link: './original_maps/moscow/michurinets_1989_omaps.jpg',
        bounds: [[55.6700824, 37.2727489], [55.6686544, 37.3296118], [55.6465263, 37.2704315]],
        author: 'ZHRDV_V'
    },
    {
        name: 'Трёхгорка, Подушкинский лес',
        year: 1997,
        url: './maps/moscow/trehgorka_1997.webp',
        link: './original_maps/moscow/trehgorka_1997_omaps.jpg',
        bounds: [[55.7259984, 37.3090982], [55.7186507, 37.3566914], [55.7067802, 37.2994852]],
        author: 'LUK_V'
    },
    {
        name: 'Трёхгорка, Подушкинский лес',
        year: 2007,
        url: './maps/moscow/trehgorka_2007.webp',
        link: './original_maps/moscow/trehgorka_2007_omaps.gif',
        bounds: [[55.7297684, 37.2764397], [55.7199076, 37.3555756], [55.6854721, 37.2617626]],
        author: ['GTSLNKO','LUK_V','MLCHK']
    },
    {
        name: 'Усово',
        year: 2000,
        url: './maps/moscow/usovo_2000.webp',
        link: './original_maps/moscow/usovo_2000_omaps.jpg',
        bounds: [[55.7389019, 37.2027969], [55.7294301, 37.2929192], [55.6885687, 37.1859741]],
        author: 'IGNTNKO'
    },
    {
        name: 'Одинцово',
        year: 1999,
        url: './maps/moscow/odintsovo_1999.webp',
        link: './original_maps/moscow/odintsovo_1999_omaps.gif',
        bounds: [[55.6925721, 37.2706246], [55.6900443, 37.2940135], [55.6832584, 37.267127]]
    },
    {
        name: 'Одинцово',
        year: 2010,
        url: './maps/moscow/odintsovo_2010.webp',
        link: './original_maps/moscow/odintsovo_2010_omaps.jpg',
        bounds: [[55.7206328, 37.2112083], [55.7137675, 37.274766], [55.6935275, 37.2021103]],
        author: ['ZUEV_A','LUK_V'],
        owner: 'FSO_MSK',
        type: ['PARK']
    },
    {
        name: 'Район Кунцево',
        year: 2018,
        url: './maps/moscow/o-mephi/20210531_872.webp',
        link: 'http://o-mephi.net/cup/maps/20210531_872.jpg',
        bounds: [[55.7530328, 37.3972893], [55.7512577, 37.4152493], [55.7351811, 37.3914957]],
        author: 'MNKV',
        owner: 'O_KUNTSEVO',
        type: ['CITY']
    },
    {
        name: 'Район Нагорный',
        year: 2009,
        url: './maps/moscow/o-mephi/20210531_661.webp',
        link: 'http://o-mephi.net/cup/maps/20210531_661.jpg',
        info: 'Это первая городская Карта Александра Минакова в Москве. Использовалась всего 1 раз в октябре 2009 года на Ночном Памяти Горюнова. Потом была заброшена по причине массового вандализма и кражи станций на старте.',
        bounds: [[55.6461146, 37.6062012], [55.6449038, 37.6188183], [55.6423729, 37.6051497]],
        author: 'MNKV',
        owner: 'ERMCHNKV_A',
        type: ['CITY']
    },
    {
        name: 'Район Тёплый Стан',
        year: 2024,
        url: './maps/moscow/o-mephi/20210529_120.webp',
        link: 'http://o-mephi.net/cup/maps/20250614_240.jpg',
        info: 'Одна из наиболее сложных городских карт в Москве.',
        bounds: [[55.637456, 37.4803519], [55.6360995, 37.4936128], [55.6274629, 37.4773693]],
        author: 'LUK_V',
        owner: 'FSO_MSK',
        type: ['CITY']
    },
    {
        name: 'Район Ясенево',
        year: 2024,
        url: './maps/moscow/yasenevo_2017.webp',
        info: 'Чемпионат Москвы (2018), спринт.',
        link: ['http://o-mephi.net/cup/maps/20250614_291.jpg','./original_maps/moscow/yasenevo_2017_omaps.jpg'],
        bounds: [[55.6040267, 37.535305], [55.604257, 37.5552821], [55.5927762, 37.5354552]],
        author: 'LUK_V',
        owner: 'FSO_MSK',
        type: ['CITY']
    },
    {
        name: 'Парк им Величко',
        year: 2023,
        url: './maps/moscow/velichko_2023.webp',
        link: './original_maps/moscow/velichko_2023_omaps.jpg',
        bounds: [[55.9450906, 37.2909451], [55.944658, 37.2968674], [55.9417019, 37.2902369]],
        author: 'LUK_V',
        owner: 'FSO_MSK',
        type: ['PARK']
    },
/*
    {
        name: 'Ромашково',
        year: 2021,
        url: './maps/moscow/o-mephi/20210606_344.webp',
        link: 'http://o-mephi.net/cup/maps/20210606_344.jpg',
        bounds: [[55.7702729, 37.3436022], [55.7651065, 37.3917961], [55.7323298, 37.3307705]],
        author: 'LUK_V',
        owner: 'FSO_MSK'
    },
*/
    {
        name: 'Рублево',
        year: 1987,
        url: './maps/moscow/rublevo_1987.webp',
        link: './original_maps/moscow/rublevo_1987_omaps.jpg',
        bounds: [[55.8034036, 37.3606396], [55.8021011, 37.380724], [55.7733869, 37.352829]],
        author: 'GLDRV',
        type: ['PARK']
    },
    {
        name: 'Рублево (сводная)',
        year: 2005,
        url: './maps/moscow/rublevo_2005.webp',
        link: './original_maps/moscow/rublevo_2005_omaps.gif',
        bounds: [[55.790449, 37.3594379], [55.7858645, 37.4118805], [55.7613158, 37.3505545]],
        author: ['OKN_V','JASHPTRV'],
        owner: 'NLTV_D'
    },
    {
        name: 'Рублево (сводная)',
        year: 2025,
        url: './maps/moscow/o-mephi/20210529_847.webp',
        link: 'http://o-mephi.net/cup/maps/20250614_683.jpg',
        info: 'Общая карта, состоящая из трех частей. Две северные части - внутри и за МКАДом нарисованы в начале 2000-х Г. Яшпатровым в соответствии с действовавшими тогда представлениями о рисовке Москвоских карт под проект "Народная Карта" Н. Сытова. Южная часть нарисована В. Добрецовым в 2012 году, но к настоящему моменту (2021) в значительной степени устарела и для проведения серьезных соревнований по ориентированию непригодна.',
        bounds: [[55.7931513, 37.3371649], [55.7870469, 37.3961735], [55.759867, 37.3275518]],
        author: ['JASHPTRV','DBRTSV_V'],
        owner: ['ERMCHNKV_A','SYTV_N']
    },
    {
        name: 'Сад Будущего',
        year: 2024,
        url: './maps/moscow/o-mephi/20210529_482.webp',
        link: 'http://o-mephi.net/cup/maps/20250614_119.jpg',
        info: 'Карта включает: парк Леоново (Сад Будущего), 31-й микрорайон Ростокина, Учебно-спортивный комплекс "Искра".',
        bounds: [[55.8451086, 37.6360703], [55.8437955, 37.6482797], [55.8368074, 37.6331091]],
        author: 'MNKV',
        owner: 'ERMCHNKV_A',
        type: ['PARK']
    },
    {
        name: 'Салтыковский Лесопарк',
        year: 2007,
        url: './maps/moscow/saltykovsky_2007.webp',
        link: './original_maps/moscow/saltykovsky_2007_omaps.jpg',
        bounds: [[55.7477675, 37.8677273], [55.7400615, 37.9350615], [55.7207294, 37.8603458]],
        author: 'FLVSKY_S',
        type: ['PARK']
    },
    {
        name: 'Салтыковский Лесопарк',
        year: 2022,
        url: './maps/moscow/o-mephi/20220104_180.webp',
        link: ['http://o-mephi.net/cup/maps/20220104_180.jpg','http://o-mephi.net/cup/maps/20220104_349.ocd'],
        bounds: [[55.7415956, 37.8653669], [55.7389864, 37.897532], [55.7291642, 37.8621912]],
        author: 'TTYNN_V',
        owner: 'ERMCHNKV_A',
        type: ['PARK']
    },
    {
        name: 'Самородинка',
        year: 2018,
        url: './maps/moscow/o-mephi/20210606_18.webp',
        link: 'http://o-mephi.net/cup/maps/20210606_18.jpg',
        info: '"Домашняя" карта Николая Сытова.',
        bounds: [[55.6676379, 37.4946642], [55.6654594, 37.5176239], [55.65166, 37.4897718]],
        author: ['DBRTSV_V','SYTV_N'],
        owner: 'SYTV_N',
        type: ['PARK']
    },
    {
        name: 'Северное Тушино',
        year: 2013,
        url: './maps/moscow/north_tushino_2013.webp',
        link: './original_maps/moscow/north_tushino_2013_omaps.jpg',
        bounds: [[55.8763942, 37.4353552], [55.8735533, 37.4631643], [55.8534684, 37.4286604]],
        author: 'MTN_Y',
        type: ['PARK']
    },
    {
        name: 'Северное Тушино',
        year: 2024,
        url: './maps/moscow/o-mephi/20210606_306.webp',
        link: 'http://o-mephi.net/cup/maps/20250614_956.jpg',
        bounds: [[55.8674976, 37.4469209], [55.865824, 37.4616194], [55.8525048, 37.4419212]],
        author: 'MNKV',
        owner: 'ERMCHNKV_A',
        type: ['PARK']
    },
    {
        name: 'Северное Чертаново',
        year: 2025,
        url: './maps/moscow/o-mephi/20210104_340.webp',
        link: 'http://o-mephi.net/cup/maps/20250614_860.jpg',
        info: 'Нарисована под Чемпионат Москвы на спринте 2020.',
        bounds: [[55.6434507, 37.5813103], [55.6413314, 37.6066947], [55.6307942, 37.5761175]],
        author: ['MNKV','SYTV_N'],
        owner: 'FSO_MSK',
        type: ['CITY']
    },
    {
        name: 'Чертановская',
        year: 2025,
        url: './maps/moscow/o-mephi/20250614_560.webp',
        link: 'http://o-mephi.net/cup/maps/20250614_560.jpg',
        info: 'Карта подготовлена Александром Калюжным по заказу и на средства Федора Бакулова. Тут состоялся первый этап спринт-тура 2025.',
        bounds: [[55.642058, 37.6056647], [55.6403263, 37.6218653], [55.6342464, 37.6031542]],
        author: 'KLZHNY',
        owner: 'BKLV_F',
        type: ['CITY']
    },
    {
        name: 'КСК Битца',
        year: 2000,
        url: './maps/moscow/ak/ksk_bitsa_2000.webp',
        link: './original_maps/moscow/ak/ksk_bitsa_2000_omaps.jpg',
        bounds: [[55.6455334, 37.5795937], [55.644601, 37.5893784], [55.634525, 37.5765252]],
        type: ['CITY']
    },
    {
        name: 'Серебряный бор',
        date: '1975-10-26',
        url: './maps/moscow/sz/ser_bor_1975.webp',
        link: './original_maps/moscow/sz/ser_bor_1975_omaps.jpg',
        info: 'Матч юных ориентировщиков Москвы, Куйбышева и Днепропетровска.',
        bounds: [[55.7919208, 37.4075031], [55.7894598, 37.4446249], [55.7759455, 37.4028254]],
        author: 'NKFRV_D',
        type: ['PARK']
    },
    {
        name: 'Серебряный бор',
        year: 1979,
        url: './maps/moscow/ser_bor_1979.webp',
        link: './original_maps/moscow/ser_bor_1979_omaps.jpg',
        bounds: [[55.7919208, 37.4075031], [55.789508, 37.4441957], [55.7760903, 37.4031687]],
        author: 'NKFRV_D',
        type: ['PARK']
    },
    {
        name: 'Серебряный бор',
        year: 1997,
        url: './maps/moscow/ser_bor_1997.webp',
        link: './original_maps/moscow/ser_bor_1997_omaps.jpg',
        bounds: [[55.7937544, 37.4081039], [55.7903284, 37.4462128], [55.7767661, 37.4027824]],
        author: 'VSHKVRKO',
        type: ['PARK']
    },
    {
        name: 'Серебряный бор',
        date: '1998-04-12',
        url: './maps/moscow/ser_bor_1998.webp',
        link: ['./original_maps/moscow/ser_bor_1998_omaps.jpg','./original_maps/moscow/ser_bor_1998_cup_omaps.jpg'],
        info: '12 апреля 1998 года в Серебряном Бору состоялся первый этап "<a href="https://t.me/lamporient/6464?single">Кубка парков Москвы</a>", новых соревнований, созданных по образу Park World Tour.',
        bounds: [[55.7851043, 37.4066234], [55.7829445, 37.4324799], [55.7767902, 37.4047995]],
        author: ['KVZN','NLTV_D'],
        logo: 'mgsyt.jpg',
        owner: 'NLTV_D',
        type: ['PARK']
    },
    {
        name: 'Серебряный бор',
        year: 2025,
        url: './maps/moscow/o-mephi/20210529_930.webp',
        link: ['http://o-mephi.net/cup/maps/20250614_331.jpg','http://o-mephi.net/cup/maps/20210529_132.ocd'],
        info: 'Мекка Московского ориентирования! Тренировочный полигон КСО Искатель и Хорошево.',
        bounds: [[55.7944903, 37.4086404], [55.7898579, 37.4509549], [55.7771523, 37.4025893]],
        author: 'TTYNN_V',
        owner: 'ERMCHNKV_A',
        type: ['PARK']
    },
    {
        name: 'Совхоз 1 мая + Восточное Измайлово',
        year: 2021,
        url: './maps/moscow/o-mephi/20210529_204.webp',
        link: 'http://o-mephi.net/cup/maps/20210529_204.jpg',
        info: 'Сводная карта Восточной части Измайловского лесопарка и Лесопарка у свх 1 мая (Горенского Лесопарка) под Нанорогейн. Восточная часть в редакции 2006 года с корректировками А. Лукина под нанорогейн в 2021.',
        bounds: [[55.8128815, 37.8267002], [55.8073349, 37.8784561], [55.7811346, 37.8153706]],
        author: ['TTYNN_V','FLVSKY_S','LKN_A'],
        owner: 'ERMCHNKV_A'
    },
    {
        name: 'Сокольники',
        year: 1995,
        url: './maps/moscow/sokolniki_1995.webp',
        link: './original_maps/moscow/sokolniki_1995_omaps.jpg',
        bounds: [[55.8208625, 37.6641369], [55.8147865, 37.6949501], [55.7942369, 37.6486015]],
        author: 'IGNTNKO',
        type: ['PARK']
    },
    {
        name: 'Сокольники и Путяевские Пруды',
        year: 2021,
        url: './maps/moscow/o-mephi/20210608_573.webp',
        link: 'http://o-mephi.net/cup/maps/20210608_573.jpg',
        info: 'Карта парка Сокольники в редакции Андрея Лукина 2021. Также включает устаревшую карту Путяевских Прудов (пл. Маленковская). Карте 25 лет )))',
        bounds: [[55.8213688, 37.6579571], [55.8180175, 37.6923752], [55.7925722, 37.6490736]],
        author: ['ZUEV_A','SYTV_N','LUK_V','MNKV','LKN_A'],
        type: ['PARK']
    },
    {
        name: 'Сосновка',
        year: 2022,
        url: './maps/moscow/o-mephi/20230130_884.webp',
        link: 'http://o-mephi.net/cup/maps/20230130_884.jpg',
        bounds: [[55.7717696, 37.3841357], [55.7694762, 37.4066019], [55.7588649, 37.3801661]],
        author: 'TTYNN_V',
        owner: 'ERMCHNKV_A',
        type: ['PARK']
    },
    {
        name: 'Стадион Медик - Ромашково',
        year: 2024,
        url: './maps/moscow/o-mephi/20250404_702.webp',
        link: ['http://o-mephi.net/cup/maps/20250404_702.jpg','http://o-mephi.net/cup/maps/20210610_642.ocd'],
        info: 'Один из крупнейших лесных массивов Москвы. Лыжная Трасса. Вело трейлы. Раздевалки на стадионе Медик и в Раздорах (парк Малевича) Западная заМКАДная часть (Ромашково) - карта В. Люка 2020 года. Западная за железной дорогой (Парк Малевича) - свежая карта В.Жердева 2023 года. Восточная часть вблизи ст."Медик" изначально была нарисована неудачно. По состоянию на 2025 год для проведения полноценных соревнований карта непригодна.',
        bounds: [[55.7728558, 37.3081112], [55.7602533, 37.4029541], [55.72972, 37.291975]],
        author: ['LUK_V','SKRPKO_S','JASHPTRV','ZHRDV_V'],
        owner: ['FSO_MSK','ERMCHNKV_A']
    },
    {
        name: 'Стадион Металлург',
        year: 2012,
        url: './maps/moscow/o-mephi/20210531_497.webp',
        link: 'http://o-mephi.net/cup/maps/20210531_497.jpg',
        bounds: [[55.782293, 37.6999283], [55.7807846, 37.7153563], [55.7706953, 37.6960444]],
        author: ['MNKV','ZUEV_A'],
        owner: 'FSO_MSK',
        type: ['CITY']
    },
    {
        name: 'Строгино',
        year: 1998,
        url: './maps/moscow/strogino_1998.webp',
        link: './original_maps/moscow/strogino_1998_omaps.jpg',
        bounds: [[55.7987602, 37.4275446], [55.7969268, 37.4464059], [55.7906903, 37.4242401]],
        owner: 'NLTV_D',
        type: ['PARK']
    },
    {
        name: 'Строгино и стд "Янтарь"',
        year: 2008,
        url: './maps/moscow/strogino_2008.webp',
        link: './original_maps/moscow/strogino_2008_omaps.gif',
        bounds: [[55.8052849, 37.4105072], [55.8039583, 37.4278879], [55.7931995, 37.4072886]],
        owner: 'NLTV_D',
        type: ['PARK']
    },
    {
        name: 'Строгинский и Щукинский полуостровы, Стадион Янтарь',
        year: 2019,
        url: './maps/moscow/o-mephi/20210606_570.webp',
        link: 'http://o-mephi.net/cup/maps/20210606_570.jpg',
        bounds: [[55.8270821, 37.393856], [55.8209107, 37.4531651], [55.79139, 37.3832989]],
        author: ['SYTV_N','MNKV','MTN_Y'],
        owner: 'SYTV_N',
        type: ['PARK']
    },
    {
        name: 'Таракановы Горы (Фосфоритный)',
        year: 2017,
        start: 'BNO',
        info: '<br />Карта в зеленой части в значительной степени устарела, для проведения серьезных соревнований требует площадной корректировки (2021) В 2021 году проведена масштабная корректировка гидрографии, отображена актуальная проходимость болот. В 2022 году подготовлена новая редакция этой карты под Многодневные соревнования. Тут приведена старая версия.',
        url: './maps/moscow/o-mephi/20210616_136.webp',
        link: ['http://o-mephi.net/cup/maps/20210616_136.jpg','https://tkmgtu.ru/library/images/c/c7/BNO2017B.jpg'],
        bounds: [[55.3512807, 38.9003992], [55.3454977, 38.9535284], [55.3218931, 38.8904428]],
        author: ['JASHPTRV','SHRKHV','LKN_A']
    },
    {
        name: 'Таракановы Горы (Фосфоритный)',
        year: 2023,
        info: 'Новая версия карты от Виктора Добрецова. Подготовлена в 2022 году под многодневные соревнования "Москва".',
        url: './maps/moscow/o-mephi/20250614_923.webp',
        link: ['http://o-mephi.net/cup/maps/20250614_923.jpg','http://o-mephi.net/cup/maps/20250614_684.ocd'],
        bounds: [[55.3488407, 38.9007854], [55.3433013, 38.9476061], [55.3301941, 38.8942194]],
        author: 'DBRTSV_V',
        owner: 'ERMCHNKV_A'
    },
    {
        name: 'Терлецкий лесопарк',
        year: 2024,
        url: './maps/moscow/o-mephi/20200918_73.webp',
        link: 'http://o-mephi.net/cup/maps/20250614_473.jpg',
        info: 'В связи с проблемами согласования в должном объеме не использовалась на соревнованиях.',
        bounds: [[55.7730248, 37.802968], [55.7708522, 37.8246403], [55.7605914, 37.7988052]],
        author: 'MNKV',
        owner: 'FSO_MSK',
        type: ['PARK']
    },
    {
        name: 'Тимирязевский парк',
        year: 1990,
        url: './maps/moscow/timiryazevsky_1990.webp',
        link: './original_maps/moscow/timiryazevsky_1990_omaps.jpg',
        bounds: [[55.8371327, 37.5326443], [55.8342889, 37.5645304], [55.8079137, 37.5248337]],
        author: 'SMKN_V',
        type: ['PARK']
    },
    {
        name: 'Тимирязевский лесопарк',
        year: 2024,
        url: './maps/moscow/o-mephi/20210104_9.webp',
        link: 'http://o-mephi.net/cup/maps/20250614_5.jpg',
        info: ' В настоящее время (2025) устарела и для ориентирования фактически не пригодна.',
        bounds: [[55.8373737, 37.5328588], [55.8332526, 37.5689507], [55.8086372, 37.522645]],
        author: 'LUK_V',
        owner: 'FSO_MSK',
        type: ['PARK']
    },
    {
        name: 'Томилинский Лесопарк (Лыткарино) под рогейн 15000',
        year: 2024,
        url: './maps/moscow/o-mephi/20250403_596.webp',
        link: 'http://o-mephi.net/cup/maps/20250403_596.jpg',
        info: 'Актуальная карта всего лесного массива с генерализацией под 15000 для проведения рогейнов.',
        bounds: [[55.6550498, 37.8520632], [55.638219, 37.9921818], [55.5759672, 37.8228378]],
        author: ['STLV_S','ZLTRV_S','JASHPTRV','SKRPKO_S','TTYNN_V'],
        owner: 'STLV_S',
        type: ['ROGAINE']
    },
    {
        name: 'Томилинский Лесопарк (Лыткарино)',
        year: 2025,
        url: './maps/moscow/lytkarino_2025.webp',
        link: ['./original_maps/moscow/lr/lytkarino_2025_omaps.jpg','http://o-mephi.net/cup/maps/20230130_388.jpg','http://o-mephi.net/cup/maps/20250403_404.jpg'],
        info: 'Культовое место ориентировщиков Московского региона. Заброшенные выработки создавшие уникальный, непредсказуемый искусственный рельеф манят ориентировщиков Москвы и Подмосковья годами! Восточная часть в последней редакции со строящейся дорогой.',
        bounds: [[55.656914, 37.8783703], [55.5843605, 38.002224], [55.6301765, 37.8300476]],
        author: ['STLV_S','ZLTRV_S','JASHPTRV','SKRPKO_S','TTYNN_V'],
        owner: 'STLV_S',
        type: ['PARK']
    },
    {
        name: 'Карьер Волкуша (Лыткарино)',
        year: 2024,
        url: './maps/moscow/o-mephi/20250403_510.webp',
        link: 'http://o-mephi.net/cup/maps/20250403_510.jpg',
        info: 'Свежая карта Карьера Волкуша и окрестностей от Алексея Зуева под лонг в 15000 (генерализация).',
        bounds: [[55.6459693, 37.8707314], [55.6410771, 37.9287529], [55.5922184, 37.855196]],
        author: ['ZUEV_A','STLV_S','ZLTRV_S','JASHPTRV','SKRPKO_S','TTYNN_V'],
        owner: 'STLV_S',
        type: ['PARK']
    },
    {
        name: 'Лыткарино, ретро-рогейн МК',
        date: '2026-04-19',
        about: 'https://forestadventure.ru/retrogaine-inf/',
        url: './maps/moscow/lr/lytkarino_mk_rogaine_2026.webp',
        link: ['./original_maps/moscow/lr/lytkarino_mk_rogaine_2006_omaps.webp','./original_maps/moscow/lr/lytkarino_mk_rogaine_2026_omaps.webp'],
        info: ' РЕТРОГЕЙН - дружеский старт в честь 20-летия <a href="https://t.me/rogainomania/772">первого рогейна в Москве</a> (22 апреля 2006 года) при поддержке компании «Московский Компас».',
        bounds: [[55.6441772, 37.876997], [55.6398903, 37.92871], [55.593431, 37.8634357]],
        o_gps: 24788,
        logo: 'mk_retro_rogaine.webp',
        type: ['ROGAINE']
    },
    {
        name: 'Лыткарино, восток',
        year: 2016,
        start: 'BNO',
        url: './maps/moscow/lytkarino_bno_2016.webp',
        link: 'https://tkmgtu.ru/library/images/8/87/BNO2016B.jpg',
        bounds: [[55.6030812, 37.9154062], [55.5964378, 37.970767], [55.5751423, 37.9053211]]
    },
    {
        name: 'Лыткарино, запад',
        year: 2014,
        start: 'BNO',
        o_gps: 324,
        url: './maps/moscow/lytkarino_bno_2014.webp',
        link: 'https://tkmgtu.ru/library/images/4/40/BNO2014B.jpg',
        bounds: [[55.6191637, 37.8791428], [55.6163403, 37.9181314], [55.5922912, 37.8723192]]
    },
    {
        name: 'Тучково',
        year: 1994,
        url: './maps/moscow/tuchkovo_1994.webp',
        link: './original_maps/moscow/tuchkovo_1994_omaps.jpg',
        bounds: [[55.6374924, 36.5111732], [55.6313393, 36.5942574], [55.6041479, 36.504221]],
        author: ['KZMN_R','FMN_I']
    },
    {
        name: 'Тучково',
        year: 2009,
        url: './maps/moscow/tuchkovo_2009.webp',
        link: './original_maps/moscow/tuchkovo_2009_omaps.jpg',
        bounds: [[55.6394786, 36.5348625], [55.6359421, 36.5806103], [55.6051176, 36.5265369]],
        author: ['KZMN_R','FMN_I'],
        owner: 'FSO_MSK'
    },
    {
        name: 'Тучково',
        year: 2024,
        url: './maps/moscow/o-mephi/20210606_905.webp',
        link: ['http://o-mephi.net/cup/maps/20210606_905.jpg','http://o-mephi.net/cup/maps/20250614_524.jpg'],
        bounds: [[55.6316058, 36.5282965], [55.6258638, 36.581769], [55.6068873, 36.5201855]],
        author: ['SKRPKO_S','JASHPTRV'],
        owner: 'FSO_MSK'
    },
/*
    {
        name: 'Тучково набережная',
        year: 2016,
        url: './maps/moscow/o-mephi/20210606_190.webp',
        link: 'http://o-mephi.net/cup/maps/20210606_190.jpg',
        info: 'Карта набережной в крупном масштабе 1:5000.',
        bounds: [[55.617116,36.547226]],
        author: ['SKRPKO_S','JASHPTRV'],
        owner: 'FSO_MSK'
    },
*/
    {
        name: 'Усадьба Братцево',
        year: 2015, // ???
        url: './maps/moscow/o-mephi/20200919_688.webp',
        link: 'http://o-mephi.net/cup/maps/20200919_688.jpg',
        bounds: [[55.8519507, 37.3911953], [55.8522398, 37.4200773], [55.8395425, 37.3917103]],
        author: 'MTN_Y',
        owner: 'MLKHT'
    },
    {
        name: 'Усадьба Братцево',
        url: './maps/moscow/o-mephi/20200919_536.webp',
        link: 'http://o-mephi.net/cup/maps/20200919_536.jpg',
        bounds: [[55.8519026, 37.394371], [55.8500115, 37.4072671], [55.8444701, 37.3904657]],
        author: 'DJCHKV',
        owner: 'MLKHT'
    },
    {
        name: 'Филёвский парк',
        year: 1978,
        url: './maps/moscow/ak/filevsky_park_1978.webp',
        link: './original_maps/moscow/ak/filevsky_park_1978_omaps.webp',
        bounds: [[55.7555927, 37.4721336], [55.7525981, 37.4959517], [55.7420425, 37.4684429]],
        type: ['PARK']
    },
    {
        name: 'Фили-Кунцевский л/п',
        year: 2000,
        url: './maps/moscow/ak/fili_2000.webp',
        link: './original_maps/moscow/ak/fili_2000_omaps.png',
        bounds: [[55.7454607, 37.4379516], [55.7435765, 37.4604821], [55.7373314, 37.4360633]],
        author: 'OKN_V',
        owner: 'NLTV_D'
    },
    {
        name: 'Филёвская Пойма',
        year: 2025,
        url: './maps/moscow/o-mephi/20230130_202.webp',
        link: 'http://o-mephi.net/cup/maps/20250614_809.jpg',
        bounds: [[55.7686554, 37.4788713], [55.7667482, 37.4989772], [55.7633802, 37.4771333]],
        author: 'KLZHNY',
        owner: 'ERMCHNKV_A'
    },
    {
        name: 'Филёвский и Суворовский парки',
        year: 2019,
        url: './maps/moscow/o-mephi/20210606_236.webp',
        link: 'http://o-mephi.net/cup/maps/20210606_236.jpg',
        info: 'Карта Филёвского парка устарела, проведена реконструкция.',
        bounds: [[55.759215, 37.4296474], [55.7525739, 37.496767], [55.7366308, 37.4234676]],
        author: ['DBRTSV_V','KSTLV_E','SKRPKO_S','JASHPTRV','SYTV_N'],
        owner: 'SYTV_N',
        type: ['PARK']
    },
    {
        name: 'Филёвский парк',
        year: 1990,
        url: './maps/moscow/ak/fili_1990.webp',
        link: './original_maps/moscow/ak/fili_1990_omaps.jpg',
        bounds: [[55.7544336, 37.4617052], [55.7529362, 37.4954796], [55.7378147, 37.4592161]],
        author: 'OKN_V',
        type: ['PARK']
    },
    {
        name: 'Филёвский парк',
        year: 2018,
        url: './maps/moscow/o-mephi/20210606_930.webp',
        link: 'http://o-mephi.net/cup/maps/20210606_930.jpg',
        bounds: [[55.7546026, 37.472949], [55.7527672, 37.4959946], [55.74197, 37.470181]],
        author: 'MTN_Y',
        owner: 'IVNV_AL',
        type: ['PARK']
    },
/*
    {
        name: 'ЦПКиО им. Горького (зима, каток)',
        year: 2018,
        url: './maps/moscow/o-mephi/20210531_903.webp',
        link: 'http://o-mephi.net/cup/maps/20210531_903.jpg',
        bounds: [[55.728551,37.600048]],
        author: 'MNKV',
        owner: 'ERMCHNKV_A'
    },
*/
    {
        name: 'ЦПКиО им. Горького (лето)',
        year: 2018,
        url: './maps/moscow/o-mephi/20210531_345.webp',
        link: 'http://o-mephi.net/cup/maps/20210531_345.jpg',
        info: 'Карта главного парка Страны от Александра Минакова. Ближайшая к Кремлю актуальная используемая для соревнований спорткарта. Эта летний вариант карты (без катка) К сожалению, на данный момент согласование стартов в связи с изменением позиции администрации не представляется возможным.',
        bounds: [[55.733985, 37.5965023], [55.7324869, 37.609055], [55.7231223, 37.5925112]],
        author: 'MNKV',
        owner: 'ERMCHNKV_A',
        type: ['CITY']
    },
    {
        name: 'Чертаново центральное и Чертаново Южное',
        year: 2024,
        url: './maps/moscow/o-mephi/20210529_788.webp',
        link: 'http://o-mephi.net/cup/maps/20250614_42.jpg',
        info: 'Первая полноценная городская карта в Москве.',
        bounds: [[55.614353, 37.5747871], [55.6126806, 37.5926828], [55.5963529, 37.5696158]],
        author: 'MNKV',
        owner: 'FSO_MSK',
        type: ['CITY']
    },
    {
        name: 'Щукинский Треугольник',
        year: 2016,
        url: './maps/moscow/o-mephi/20210606_71.webp',
        link: 'http://o-mephi.net/cup/maps/20210606_71.jpg',
        bounds: [[55.809614, 37.465632], [55.8084684, 37.4783778], [55.803898, 37.464087]],
        logo: 'schukino.jpg',
        author: 'KSTLV_E',
        owner: 'ERMCHNKV_A',
        type: ['PARK']
    },
    {
        name: 'Ясеневский лесопарк (аквапарк Мореон)',
        year: 2024,
        url: './maps/moscow/o-mephi/20210103_146.webp',
        link: 'http://o-mephi.net/cup/maps/20250404_286.jpg',
        bounds: [[55.6041479, 37.5080752], [55.6012023, 37.53479], [55.5946313, 37.5043416]],
        author: ['LUK_V','SYTV_N'],
        owner: 'FSO_MSK',
        type: ['PARK']
    },
    {
        name: 'Ясеневский лесопарк (аквапарк Мореон)',
        year: 2022,
        url: './maps/moscow/o-mephi/20210529_37.webp',
        link: 'http://o-mephi.net/cup/maps/20210529_37.jpg',
        info: 'Карта в знаках ISSOM для проведения спринтов.',
        bounds: [[55.6045843, 37.5065303], [55.6010447, 37.5372791], [55.5945707, 37.5028825]],
        author: ['YURCHK','LUK_V'],
        owner: 'FSO_MSK',
        type: ['PARK','SPRINT']
    },
    {
        name: 'Ясенево',
        year: 1983,
        url: './maps/moscow/yasenevo_1983.webp',
        link: './original_maps/moscow/yasenevo_1983_omaps.jpg',
        bounds: [[55.6017235, 37.514019], [55.5977229, 37.5359058], [55.5951769, 37.5107574]],
        author: 'MTVV',
        type: ['PARK']
    },
    {
        name: 'Ульяновский лесопарк',
        year: 2024,
        start: 'AERO',
        url: './maps/moscow/ulianovsky_aerorogaine_2024.webp',
        link: './original_maps/moscow/ulianovsky_aerorogaine_2024_omaps.jpg',
        bounds: [[55.6619495, 37.2142982], [55.6619011, 37.3269939], [55.6090447, 37.2153282]],
        owner: 'OPEN_BAND',
        type: ['ROGAINE']
    },
    {
        name: 'Московский',
        year: 2024,
        start: 'AERO',
        info: 'Аэророгейн 2.0.',
        url: './maps/moscow/moskovsky_aerorogaine_2024.webp',
        link: './original_maps/moscow/moskovsky_aerorogaine_2024_omaps.jpg',
        bounds: [[55.6112263, 37.2688866], [55.6133592, 37.4027824], [55.5570879, 37.2735214]],
        owner: 'OPEN_BAND',
        type: ['ROGAINE']
    },
    {
        name: 'Валуевский лесопарк',
        year: 2024,
        start: 'AERO',
        info: 'Аэророгейн 3.0.',
        url: './maps/moscow/valuevsky_aerorogaine_2024.webp',
        link: './original_maps/moscow/valuevsky_aerorogaine_2024_omaps.jpg',
        bounds: [[55.6143772, 37.3070812], [55.5664074, 37.4373722], [55.5769376, 37.2633076]],
        owner: 'OPEN_BAND',
        type: ['ROGAINE']
    },
    {
        name: 'Ново-Переделкино',
        year: 2024,
        info: 'Городской рогейн "Территория".',
        url: './maps/moscow/novo_peredelkino_rogaine_2024.webp',
        link: './original_maps/moscow/novo_peredelkino_rogaine_2024.pdf',
        bounds: [[55.6668391, 37.2972107], [55.6693079, 37.4184895], [55.6167039, 37.2989273]],
        owner: 'OPEN_BAND',
        type: ['ROGAINE']
    },
    {
        name: 'Валуево',
        date: '2025-11-23',
        start: 'AERO',
        info: '<a href="https://t.me/rogainomania/336">Аэророгейн 4.0</a>.',
        url: './maps/moscow/lr/mariino_aerorogaine_2025.webp',
        link: './original_maps/moscow/lr/mariino_aerorogaine_2025_omaps.gif',
        o_gps: 23884,
        bounds: [[55.5710177, 37.2943783], [55.5740263, 37.4247551], [55.5059859, 37.2974682]],
        owner: 'OPEN_BAND',
        type: ['ROGAINE']
    },
    {
        name: 'Подосинки, им Цурюпы',
        year: 2012,
        url: './maps/moscow/podosinki_2012.webp',
        link: './original_maps/moscow/podosinki_2012_omaps.gif',
        bounds: [[55.7139609, 38.50811], [55.6568656, 39.1003418], [55.3432037, 38.3982468]],
        owner: 'KSTKN_SITE',
        type: ['ROGAINE']
    },
    {
        name: 'Воскресенск',
        date: '2026-07-18',
        url: './maps/moscow/sz/voskresensk_rogaine_cup_2026.webp',
        link: './original_maps/moscow/sz/voskresensk_rogaine_cup_2026_omaps.webp',
        bounds: [[55.4056293, 38.7858582], [55.3822312, 38.9700508], [55.2703146, 38.7350464]],
        info: 'Кубок России по рогейну, 1-й этап (<a href="https://forestadventure.ru/2026/rrcup/">пути участников</a>).',
        author: ['JAKMV_S','MNKV'],
        planner: 'KLNN_O',
        owner: 'RRF',
        type: ['ROGAINE']
    },
    {
        name: 'Алферово',
        date: '2014-09-13',
        url: './maps/moscow/ak/alferovo_rogaine_2014.webp',
        link: 'https://rrc2014.rogaining.ru/results/rrc2014_map.jpg',
        info: '<a href="https://rrc2014.rogaining.ru">XI Чемпионат России по рогейну</a>.',
        bounds: [[55.7800485, 38.4063148], [55.7280768, 38.9154625], [55.6171401, 38.3551598]],
        author: ['RSCHN_R','KLSV_S','MRDRS','KBRV_M','BRBA'],
        type: ['ROGAINE'],
        start: 'RUSSIA_ROGAINE_CHAMP',
        region: 'MSK'
    },
    {
        name: 'Анциферово',
        year: 2024,
        info: 'Городской рогейн "Территория".',
        url: './maps/moscow/ak/antsiferovo_rogaine_2024.webp',
        link: './original_maps/moscow/ak/antsiferovo_rogaine_2024.pdf',
        bounds: [[55.5858885, 38.7333727], [55.5707751, 38.8886404], [55.5206626, 38.7137175]],
        owner: 'OPEN_BAND',
        type: ['ROGAINE']
    },
    {
        name: 'Ступино',
        year: 2024,
        info: 'Рогейн "Молния".',
        url: './maps/moscow/stupino_rogaine_2024.webp',
        link: './original_maps/moscow/stupino_rogaine_2024.pdf',
        bounds: [[54.8824827, 38.0762959], [54.8749523, 38.1428576], [54.8495117, 38.0651808]],
        owner: 'OPEN_BAND',
        type: ['ROGAINE']
    },
    {
        name: 'Ёлкино',
        year: 2023,
        url: './maps/moscow/ak/elkino_rogaine_2023.webp',
        link: './original_maps/moscow/ak/elkino_rogaine_2023_omaps.png',
        bounds: [[55.3300233, 38.7631989], [55.3150801, 38.8895416], [55.280093, 38.7461185]],
        author: ['JAKMV_S','TTYNN_V'],
        type: ['ROGAINE']
    },
    {
        name: 'Новочеркасское',
        year: 2023,
        url: './maps/moscow/ak/elkino_2023.webp',
        link: 'http://o-mephi.net/cup/maps/20250404_205.jpg',
        info: 'Карта под ОМР 2022 в Воскресенском районе МО.',
        bounds: [[55.3084857, 38.8375282], [55.3042843, 38.8689852], [55.2834905, 38.8280869]],
        author: 'TTYNN_V',
        owner: 'KLNN_O'
    },
    {
        name: 'Осташово',
        year: 2024,
        excluded: true,
        start: 'BNO',
        o_gps: 21055,
        url: './maps/moscow/ostashovo_bno_2024.webp',
        link: ['https://tkmgtu.ru/library/images/e/e9/Map_bno2024_zn.jpg','https://tkmgtu.ru/library/images/e/e9/Map_bno2024_vb.jpg'],
        bounds: [[55.3877895, 38.7825966], [55.3801345, 38.8480854], [55.3410073, 38.7653446]],
        author: 'TTYNN_V'
    },
    {
        name: 'Осташово',
        year: 2024,
        url: './maps/moscow/ostashovo_2024.webp',
        link: './original_maps/moscow/ostashovo_2024_omaps.jpg',
        bounds: [[55.3798663, 38.8071871], [55.3754774, 38.8460684], [55.3622344, 38.8007927]],
        author: 'TTYNN_V',
        owner: 'FSO_MSK'
    },
    {
        name: 'Хорлово',
        year: 2025,
        url: './maps/moscow/ak/horlovo_2024.webp',
        link: 'http://o-mephi.net/cup/maps/20250614_703.jpg',
        info: 'Легендарная карта Владимира Тутынина по материалам Сергея Юрчука на бывшем Лопатинском руднике в пос. Хорлово. Признана лучшей картой центральной России.',
        bounds: [[55.3575508, 38.7868452], [55.3547696, 38.8096333], [55.3411537, 38.7802362]],
        author: 'TTYNN_V',
        owner: 'KLNN_O'
    },
    {
        name: 'Марьина гора',
        date: '2024-03-02',
        info: 'Весенний Лыжный Компот-рогейн.',
        url: './maps/moscow/marjina_gora_2024.webp',
        link: 'https://rogaine.ru/results/ski2024/ski2024_map.jpg',
        bounds: [[56.1450713, 37.6904869], [56.1229742, 37.8755379], [56.0451027, 37.6527214]],
        o_gps: 18492,
        owner: 'KMPT',
        start: 'KMPT_ROGAINE',
        type: ['WINTER','ROGAINE']
    },
    {
        name: 'Раково',
        date: '2021-07-03',
        info: 'Летний Компот-рогейн.',
        url: './maps/moscow/lr/pushkino_rogaine_2021.webp',
        link: 'https://rogaine.ru/results/skr2021/map.jpg',
        bounds: [[56.158075, 37.6982117], [56.1380896, 37.8739929], [56.0445274, 37.6563263]],
        o_gps: 10332,
        owner: 'KMPT',
        start: 'KMPT_ROGAINE',
        type: ['ROGAINE']
    },
    {
        name: 'Пушкино',
        date: '2025-10-18',
        info: 'Финал Компот-Кубка.',
        url: './maps/moscow/lr/pushkino_rogaine_2025.webp',
        link: 'https://rogaine.ru/results/fc2025/final2025_map.jpg',
        bounds: [[56.0739517, 37.7748585], [56.0590986, 37.9000854], [55.9777363, 37.7376938]],
        o_gps: 23622,
        owner: 'KMPT',
        start: 'KMPT_ROGAINE',
        type: ['ROGAINE']
    },
    {
        name: 'Степаньково',
        year: 2018,
        start: 'BNO',
        url: './maps/moscow/stepankovo_2018.webp',
        link: 'https://tkmgtu.ru/library/images/2/28/BNO2018.jpg',
        bounds: [[56.1129258, 37.7363205], [56.1124473, 37.8406906], [56.0626447, 37.7354622]]
    },
    {
        name: 'Крылатское',
        year: 2021,
        url: './maps/moscow/ak/krylatskoe_2021.webp',
        link: './original_maps/moscow/ak/krylatskoe_2021_omaps.gif',
        bounds: [[55.853637, 37.3921394], [55.8411088, 37.5200272], [55.7501104, 37.3593521]],
        owner: 'GOLDMRSHRT',
        start: 'ZM',
        type: ['ROGAINE']
    },
    {
        name: 'МОСКВА',
        year: 2023,
        info: 'Мосдень.',
        url: './maps/moscow/moscow_rogaine_2023.webp',
        link: './original_maps/moscow/mosden_2023.pdf',
        bounds: [[55.8299746, 37.5783062], [55.816619, 37.7094555], [55.7279801, 37.5457764]],
        owner: 'GOLDMRSHRT',
        start: 'ZM',
        type: ['ROGAINE']
    },
/*
    {
        name: 'Братеевский каскадный парк',
        year: 2023,
        info: 'Московская васна 2024.',
        url: './maps/moscow/ak/brateevsky_park_2024.webp',
        bounds: [[55.640181, 37.7127814], [55.6395512, 37.7391315], [55.6354213, 37.7121592]],
        author: 'MNKV',
        type: ['PARK']
    },
*/
    {
        name: 'Лужки',
        year: 2024,
        url: './maps/moscow/luzhki_2024.webp',
        link: './original_maps/moscow/lr/luzhki_2024_omaps.jpg',
        bounds: [[54.8976378, 37.5144482], [54.8932696, 37.556119], [54.8645804, 37.5035906]],
        author: ['TTYNN_V','LUK_V'],
        owner: 'FSO_MSK'
    },
    {
        name: 'Лужки',
        year: 2007,
        url: './maps/moscow/luzhki_2007.webp',
        link: './original_maps/moscow/lr/luzhki_2007_omaps.gif',
        bounds: [[54.8927019, 37.5122166], [54.8908755, 37.532773], [54.8719645, 37.507925]],
        author: ['DJCHKV','KRVKV'],
        owner: 'NLTV_D'
    },
    {
        name: 'им Цюрупы',
        year: 2016,
        url: './maps/moscow/sz/tsjurupy_2016.webp',
        link: './original_maps/moscow/sz/tsjurupy_2016_omaps.gif',
        bounds: [[55.4929569, 38.6225653], [55.4893099, 38.6616611], [55.4706079, 38.6162567]],
        author: 'MTN_Y',
        owner: 'KRLV_N'
    },
    {
        name: 'им Цюрупы',
        year: 2021,
        start: 'BNO',
        o_gps: 14604,
        url: './maps/moscow/tsjurupy_2021.webp',
        link: ['./original_maps/moscow/tsjurupy_2015_omaps.gif','./original_maps/moscow/tsjurupy_2021_1_omaps.gif','./original_maps/moscow/tsjurupy_2021_2_omaps.gif','https://forestadventure.ru/2022/bno/bno2022v.png'],
        bounds: [[55.5249626, 38.6544943], [55.5158763, 38.7401104], [55.4934188, 38.6438084]],
        author: 'SMKN_S',
        owner: 'NLTV_D'
    },
    {
        name: 'Ивановское, 74-й квартал',
        year: 2024,
        url: './maps/moscow/o-mephi/20210529_95.webp',
        link: 'http://o-mephi.net/cup/maps/20250403_697.jpg',
        info: 'Одна из первых городских карт в Москве. Квартал рядом со СДЮСШОР Ориента.',
        bounds: [[55.7684744, 37.8222799], [55.767388, 37.834897], [55.7581163, 37.8196836]],
        author: ['MNKV','ERMCHNKV_F'],
        owner: 'FSO_MSK',
        type: ['CITY']
    },
    {
        name: 'Истра, Гефсиманский сад и пойма реки',
        year: 2024,
        url: './maps/moscow/ak/istra_gefsimansky_2024.webp',
        link: ['./original_maps/moscow/ak/istra_gefsimansky_2024_omaps.jpg','./original_maps/moscow/ak/istra_poima_2022_omaps.jpg'],
        bounds: [[55.9255476, 36.8145847], [55.9255957, 36.8609762], [55.8976463, 36.8161726]],
        author: ['BLDV','OGRZKV'],
        type: ['PARK']
    },
/*
    {
        name: 'Истринский городской парк',
        year: 2021,
        url: './maps/moscow/ak/istra_2021.webp',
        bounds: [[55.9222053, 36.8444753], [55.9204739, 36.8596458], [55.9171432, 36.8424582]],
        type: ['PARK']
    },
*/
    {
        name: 'Поклонная гора, парк Победы',
        year: 2001,
        url: './maps/moscow/poklonnaja_gora_2001.webp',
        link: './original_maps/moscow/poklonnaja_gora_2001_omaps.jpg',
        bounds: [[55.7379959, 37.4930549], [55.7356643, 37.5191903], [55.7237507, 37.4886775]],
        author: 'OKN_V',
        type: ['PARK']
    },
    {
        name: 'Поклонная гора, парк Победы',
        year: 2022,
        url: './maps/moscow/poklonnaja_gora_2022.webp',
        link: './original_maps/moscow/poklonnaja_gora_2022.pdf',
        bounds: [[55.7356764, 37.4955225], [55.7337313, 37.5137186], [55.7280163, 37.493248]],
        author: 'ZHRDV_V',
        owner: 'FSO_MSK',
        type: ['PARK']
    },
    {
        name: 'Сколково',
        year: 2024,
        url: './maps/moscow/skolkovo_2024.webp',
        link: './original_maps/moscow/skolkovo_2024.pdf',
        bounds: [[55.6990661, 37.3489451], [55.6980625, 37.3602104], [55.6862221, 37.3450184]],
        author: 'KLZHNY',
        owner: 'FSO_MSK',
        type: ['CITY']
    },
    {
        name: 'МОСКВА, Кремль',
        year: 2015,
        url: './maps/moscow/ak/kremlin_2015.webp',
        link: './original_maps/moscow/ak/kremlin_2015_omaps.jpg',
        bounds: [[55.7577661, 37.6088405], [55.7577541, 37.6255989], [55.7469704, 37.6092911]],
        author: 'DBRTSV_V',
        start: 'INCR',
        type: ['CITY']
    },
    {
        name: 'Школа-интернат №31',
        year: 2015,
        url: './maps/moscow/school_31_2015.webp',
        link: './original_maps/moscow/school_31_2015_omaps.jpg',
        bounds: [[55.7294059, 37.8056931], [55.7284634, 37.8154564], [55.72537, 37.8040838]],
        author: 'ZUEV_A',
        type: ['CITY']
    },
    {
        name: 'Михалково, Головинские пруды',
        year: 2015,
        url: './maps/moscow/mikhalkovo_2015.webp',
        link: './original_maps/moscow/mikhalkovo_2015_omaps.jpg',
        bounds: [[55.8488189, 37.5027108], [55.8477228, 37.523396], [55.8373857, 37.5008225]],
        author: 'DBRTSV_V',
        start: 'INCR',
        type: ['PARK']
    },
    {
        name: 'Лефортовский парк',
        year: 2003,
        url: './maps/moscow/lr/lefortovsky_2003.webp',
        link: './original_maps/moscow/lr/lefortovsky_2003_omaps.gif',
        bounds: [[55.7695728, 37.686646], [55.7688365, 37.6977825], [55.7607, 37.6848865]],
        author: 'ZUEV_A',
        owner: 'NLTV_D',
        type: ['PARK']
    },
    {
        name: 'Лефортовский парк',
        year: 2015,
        url: './maps/moscow/lr/lefortovsky_2015.webp',
        link: './original_maps/moscow/lr/lefortovsky_2015_omaps.jpg',
        bounds: [[55.7695728, 37.686646], [55.7687882, 37.6981688], [55.7607362, 37.6850796]],
        author: 'DBRTSV_V',
        start: 'INCR',
        type: ['PARK']
    },
    {
        name: 'Екатерининский сад, с/к Олимпийский',
        year: 2005,
        url: './maps/moscow/olimpijsky_2005.webp',
        link: './original_maps/moscow/olimpijsky_2005_omaps.png',
        bounds: [[55.7894598, 37.617209], [55.7869986, 37.6328087], [55.7769713, 37.6119089]],
        author: 'OKN_V',
        owner: 'NLTV_D',
        type: ['PARK']
    },
    {
        name: 'Екатерининский сад',
        year: 2015,
        url: './maps/moscow/ak/ekaterininsky_sad_2015.webp',
        link: './original_maps/moscow/ak/ekaterininsky_sad_2015_omaps.jpg',
        bounds: [[55.7872158, 37.6162219], [55.7864798, 37.6249123], [55.7812552, 37.6147413]],
        author: 'DBRTSV_V',
        start: 'INCR',
        type: ['PARK']
    },
    {
        name: 'Фестивальный парк',
        year: 2011,
        url: './maps/moscow/ak/festivalny_2011.webp',
        link: './original_maps/moscow/ak/festivalny_2011_omaps.jpg',
        bounds: [[55.7932719, 37.6165009], [55.7924999, 37.6237535], [55.7885308, 37.6149344]],
        author: 'MNKV',
        type: ['PARK']
    },
    {
        name: 'Ростокино, парк Акведук',
        year: 2010,
        url: './maps/moscow/ak/akveduk_2010.webp',
        link: './original_maps/moscow/ak/akveduk_2010_omaps.jpg',
        bounds: [[55.8336864, 37.6528716], [55.8323246, 37.6656389], [55.8274437, 37.6505542]],
        author: 'ZUEV_A',
        type: ['PARK']
    },
    {
        name: 'Белокаменная, парк "Друзья леса"',
        year: 2012,
        url: './maps/moscow/ak/belokamennaya_2012.webp',
        link: './original_maps/moscow/ak/belokamennaya_2012_omaps.jpg',
        bounds: [[55.8311436, 37.6940489], [55.8306616, 37.7064514], [55.8257442, 37.693491]],
        author: ['ZUEV_A','KBZRV'],
        type: ['PARK']
    },
    {
        name: 'Манеж МГТУ им Баумана',
        year: 2011,
        url: './maps/moscow/manezh_2011.webp',
        link: './original_maps/moscow/manezh_2011_omaps.jpg',
        bounds: [[55.7719747, 37.6966238], [55.7729403, 37.698319], [55.7715523, 37.6975036]],
        author: ['ZUEV_A','KBZRV'],
        type: ['INDOOR']
    },
    {
        name: 'Измайловский о-в, Серебряно-Виноградный пруд',
        year: 2019,
        url: './maps/moscow/ak/izmailovsky_2019.webp',
        link: './original_maps/moscow/ak/izmailovsky_2019_omaps.jpg',
        bounds: [[55.7957086, 37.7521133], [55.7956844, 37.7696443], [55.7883619, 37.7523923]],
        author: ['ZUEV_A','KBZRV'],
        type: ['PARK']
    },
    {
        name: 'Перовский ПКиО',
        year: 2015,
        url: './maps/moscow/perovsky_2015.webp',
        link: './original_maps/moscow/perovsky_2015_omaps.jpg',
        bounds: [[55.7453641, 37.7726698], [55.7448206, 37.7790213], [55.7383341, 37.7708888]],
        author: 'DBRTSV_V',
        start: 'INCR',
        type: ['PARK']
    },
    {
        name: 'Беляево',
        year: 2025,
        url: './maps/moscow/ak/belyaevo_2025.webp',
        link: './original_maps/moscow/ak/belyaevo_2025_omaps.gif',
        bounds: [[55.6428331, 37.5228167], [55.6414041, 37.5385666], [55.6332289, 37.5201774]],
        author: 'KLZHNY',
        owner: 'ERMCHNKV_A',
        type: ['CITY']
    },
    {
        name: 'Сквер "Два медведя"',
        year: 2024,
        url: './maps/moscow/two_bears_2024.webp',
        link: './original_maps/moscow/two_bears_2024_omaps.jpg',
        bounds: [[55.6607149, 37.5869536], [55.6603518, 37.5903225], [55.6584393, 37.5861812]],
        author: 'KLZHNY',
        owner: 'ERMCHNKV_A',
        type: ['PARK']
    },
    {
        name: 'Зеленоград, Парк 40-летия Победы',
        year: 2023,
        url: './maps/moscow/zelenograd_park_pobedy_2023.webp',
        link: './original_maps/moscow/zelenograd_park_pobedy_2023.pdf',
        bounds: [[55.9914686, 37.213676], [55.9900284, 37.2311425], [55.9850592, 37.2119379]],
        author: 'ZHRDV_V',
        owner: 'FSO_MSK',
        type: ['PARK']
    },
    {
        name: 'Зеленоградский л/п',
        year: 2025,
        url: './maps/moscow/zelenograd_2025.webp',
        link: './original_maps/moscow/zelenograd_2025_omaps.png',
        bounds: [[55.996833, 37.1888709], [55.9947689, 37.2142124], [55.9812419, 37.18503]],
        author: 'ZHRDV_V',
        owner: 'FSO_MSK',
        type: ['PARK']
    },
    {
        name: 'Ходынское поле',
        year: 2024,
        area: .33,
        info: 'Российский Азимут 2024.',
        url: './maps/moscow/ak/hodynskoe_pole_2024.webp',
        link: 'https://orientband.ru/tproduct/549661597-520422854321-rossiiskii-azimut',
        author: ['MSTPNV','MNKV'],
        areas: [70, 30],
        owner: 'OPEN_BAND',
        bounds: [[55.7896046, 37.5217223], [55.7876622, 37.5381804], [55.785599, 37.5203276]],
        type: ['PARK']
    },
    {
        name: 'Крылатское',
        year: 2022,
        url: './maps/moscow/ak/krylatskoe_2022.webp',
        link: './original_maps/moscow/ak/krylatskoe_2022.pdf',
        owner: 'OPEN_BAND',
        author: 'MNKV',
        bounds: [[55.7759696, 37.4062586], [55.7740024, 37.4237251], [55.7642977, 37.4020958]],
        type: ['CITY']
    },
    {
        name: 'Ватутинки, школа №1392',
        year: 2019,
        url: './maps/moscow/vatutinki_schoool_1392_2019.webp',
        link: './original_maps/moscow/vatutinki_schoool_1392_2019_omaps.jpg',
        author: 'SHRNN',
        owner: 'SHRNN',
        bounds: [[55.5182817, 37.3437953], [55.5180995, 37.3471212], [55.5155969, 37.3432803]],
        type: ['CITY']
    },
    {
        name: 'Ватутинки',
        year: 2014,
        url: './maps/moscow/vatutinki_2014.webp',
        link: './original_maps/moscow/vatutinki_2014_omaps.jpg',
        author: ['LNTV','SHRNN'],
        owner: 'SHRNN',
        bounds: [[55.516508, 37.3087549], [55.5143941, 37.3453617], [55.5023158, 37.305665]]
    },
    {
        name: 'Ватутинки, север',
        year: 2014,
        url: './maps/moscow/vatutinki_north_2014.webp',
        link: './original_maps/moscow/vatutinki_north_2014_omaps.jpg',
        author: 'SHRNN',
        owner: 'SHRNN',
        bounds: [[55.5116604, 37.3220158], [55.5106398, 37.3347616], [55.5025103, 37.3200631]],
        type: ['CITY']
    },
    {
        name: 'Ватутинки',
        year: 2019,
        url: './maps/moscow/vatutinki_city_2019.webp',
        link: './original_maps/moscow/vatutinki_city_2019_omaps.jpg',
        author: 'SHRNN',
        owner: 'SHRNN',
        bounds: [[55.5062046, 37.3237324], [55.5052446, 37.3378515], [55.5002376, 37.3229599]],
        type: ['CITY']
    },
    {
        name: 'Новые Ватутинки',
        year: 2025,
        url: './maps/moscow/vatutinki_new_2025.webp',
        link: './original_maps/moscow/vatutinki_new_2025_omaps.jpg',
        bounds: [[55.5277196, 37.3462415], [55.5281204, 37.3565197], [55.5228005, 37.3466492]],
        type: ['PARK']
    },
    {
        name: 'Черкизовский парк',
        year: 2000,
        url: './maps/moscow/ak/cherkizovsky_park_2000.webp',
        link: './original_maps/moscow/ak/cherkizovsky_park_2000_omaps.jpg',
        author: 'BRBA',
        bounds: [[55.8077932, 37.7314281], [55.8074555, 37.7418137], [55.7993512, 37.729454]],
        type: ['PARK']
    },
    {
        name: 'Черкизовский парк',
        year: 2025,
        url: './maps/moscow/ak/detsky_cherkizovsky_park_2025.webp',
        link: './original_maps/moscow/ak/detsky_cherkizovsky_park_2025_omaps.gif',
        author: 'ALNKV_A',
        owner: 'ALNKV_A',
        bounds: [[55.8111332, 37.7117085], [55.8075399, 37.7430797], [55.799894, 37.7073741]],
        type: ['PARK']
    },
    {
        name: 'Долгопрудный, школа №2044',
        year: 2026,
        url: './maps/moscow/ak/dolgoprudny_school_2044_2026.webp',
        link: './original_maps/moscow/ak/dolgoprudny_school_2044_2026_omaps.gif',
        author: 'ALNKV_A',
        owner: 'KHMRZV',
        bounds: [[55.9425611, 37.5211000], [55.9420624, 37.5249302], [55.9401156, 37.5200593]],
        type: ['CITY','SPRINT'],
        zindex: 2
    },
    {
        name: 'Метро Арбатская, Транспортно-пересадочный узел Библиотека имени Ленина',
        year: 2026,
        url: './maps/moscow/lr/metro_arbatskaya_2026.webp',
        link: './original_maps/moscow/lr/metro_arbatskaya_2026_omaps.gif',
        publish: 'https://t.me/alephbublik/283?comment=1426',
        author: 'ALNKV_A',
        owner: 'ALNKV_A',
        bounds: [[55.7528577, 37.6033151], [55.7529483, 37.6118767], [55.7493979, 37.6031435]],
        type: ['CITY','SPRINT'],
        zindex: 2
    },
    {
        name: 'Яуза',
        year: 1,
        url: './maps/moscow/sz/yauza_old.webp',
        link: './original_maps/moscow/sz/yauza_old_omaps.jpg',
        author: 'IGNTNKO',
        bounds: [[55.8361446, 37.6710892], [55.8332285, 37.7023315], [55.8188131, 37.6658106]],
    },
    {
        name: 'Яузский лесопарк',
        year: 2006,
        url: './maps/moscow/losiny_ostrov_2006.webp',
        link: './original_maps/moscow/lr/losiny_ostrov_2006_omaps.jpg',
        author: ['RMNV_A','ZUEV_A'],
        bounds: [[55.8384581, 37.6704454], [55.8357108, 37.6978254], [55.818572, 37.6654243]]
    },
    {
        name: 'Воскресенское',
        year: 2019,
        url: './maps/moscow/voskresenskoe_2019.webp',
        link: './original_maps/moscow/voskresenskoe_2019_omaps.gif',
        bounds: [[55.5567238, 37.4151421], [55.5528158, 37.4547529], [55.52608, 37.4071598]],
        author: 'PZDV_S',
        owner: 'NLTV_D'
    },
    {
        name: 'Перемилово',
        year: 2013,
        url: './maps/moscow/peremilovo_2011.webp',
        link: ['./original_maps/moscow/peremilovo_2011_omaps.gif','./original_maps/moscow/peremilovo_2013_omaps.jpg'],
        bounds: [[56.3061104, 37.4976897], [56.3032058, 37.5298977], [56.2932165, 37.493763]],
        author: 'TRNN_A',
        owner: 'NLTV_D'
    },
    {
        name: 'Ильинское',
        year: 2011,
        start: 'BNO',
        info: "БНО'2013.",
        url: './maps/moscow/ak/ilinskoe_2011.webp',
        link: ['./original_maps/moscow/ak/ilinskoe_2011_omaps.jpg','https://tkmgtu.ru/library/images/0/04/BNO2013A.jpg'],
        bounds: [[56.2763633, 37.591567], [56.2716454, 37.6395035], [56.2604918, 37.5863743]],
        author: ['MTN_Y','JASHPTRV','SKRPKO_S'],
        owner: 'FSO_MSK'
    },
    {
        name: 'Ильинское',
        year: 2014,
        url: './maps/moscow/ak/ilinskoe_2014.webp',
        link: './original_maps/moscow/ak/ilinskoe_2014_omaps.jpg',
        bounds: [[56.2881315, 37.5977039], [56.2856781, 37.6226807], [56.2749098, 37.5936699]],
        owner: 'FSO_MSK'
    },
    {
        name: 'Дмитров',
        year: 2013,
        url: './maps/moscow/ak/dmitrov_velo_2013.webp',
        link: './original_maps/moscow/ak/dmitrov_velo_2013_omaps.jpg',
        bounds: [[56.357726, 37.5639081], [56.3554673, 37.5881982], [56.3441597, 37.5595737]],
        owner: 'FSO_MSK',
        type: ['VELO']
    },
    {
        name: 'Дмитров, Внуково',
        year: 2010,
        url: './maps/moscow/ak/dmitrov_2010.webp',
        link: './original_maps/moscow/ak/dmitrov_2010_omaps.gif',
        bounds: [[56.3606621, 37.5614834], [56.3584749, 37.5844002], [56.3442311, 37.5566339]],
        owner: 'NLTV_D'
    },
    {
        name: 'Мышецкое, оз Круглое',
        date: '1969-11-16',
        url: './maps/moscow/lr/lobnia_1969.webp',
        link: ['./original_maps/moscow/lr/lobnia_1969_M_omaps.jpg','./original_maps/moscow/lr/lobnia_1969_W_omaps.jpg'],
        info: 'Закрытие сезона. Золотые кольца (<a href="./docs/1969_lobnia_welcome_omaps.jpg">приглашение</a>).',
        bounds: [[56.0725145, 37.2706032], [56.084968, 37.3342896], [56.0266894, 37.2958374]],
        start: 'WEDDING_MSK'
    },
    {
        name: 'Агафониха',
        year: 1983,
        url: './maps/moscow/ak/agafoniha_1983.webp',
        link: ['./original_maps/moscow/ak/agafoniha_1983_omaps.jpg','./original_maps/moscow/ak/agafoniha_1983_north_omaps.jpg'],
        bounds: [[56.0919115, 37.3220158], [56.0873625, 37.4329948], [56.0314853, 37.3126602]],
        author: 'IGNTNKO'
    },
    {
        name: 'Голенищево',
        year: 1989,
        url: './maps/moscow/ak/golenischevo_1989.webp',
        link: './original_maps/moscow/ak/golenischevo_1989_omaps.jpg',
        bounds: [[56.1778111, 37.5317001], [56.1700708, 37.5867176], [56.1501873, 37.5230312]],
        author: ['MLNKV_V','TLMCHV']
    },
    {
        name: 'Пальчино',
        year: 1987,
        url: './maps/moscow/palchino_1987.webp',
        link: './original_maps/moscow/palchino_1987_omaps.jpg',
        bounds: [[56.4345498, 37.8150272], [56.4310855, 37.8707314], [56.3864952, 37.8061867]],
        author: ['ALSHN','BSHNSKY','EFMV','KZMN_R','LVN_B','PPV_V','JANN_Y']
    },
    {
        name: 'Парамоново',
        year: 1988,
        url: './maps/moscow/paramonovo_1998.webp',
        link: './original_maps/moscow/paramonovo_1998_omaps.jpg',
        bounds: [[56.2622795, 37.4355698], [56.2567971, 37.4936771], [56.2162028, 37.4250984]]
    },
    {
        name: 'Парамоново',
        url: './maps/moscow/paramonovo.webp',
        link: './original_maps/moscow/paramonovo_omaps.jpg',
        bounds: [[56.3015867, 37.379179], [56.2943477, 37.4605465], [56.2399159, 37.3611546]]
    },
    {
        name: 'Дьяково',
        year: 1975,
        url: './maps/moscow/ak/diakovo_1975.webp',
        link: './original_maps/moscow/ak/diakovo_1975_omaps.webp',
        info: 'В 1975 состоялся ответный визит французских ориентировщиков в нашу страну. Для соревнований первого дня встречи были подготовлены трассы в районе подмосковной станции Турист д. Дьяково. ' +
            'Двенадцатикилометровая дистанция с 12 КП, поставленная опытным начальником дистанции мастером спорта Виктором Алешиным, проходила по сложной холмистой местности с буреломом.',
        bounds: [[56.2250313, 37.3548031], [56.2204503, 37.4140263], [56.1803908, 37.345705]],
        start: 'USSR_FRANCE_ARMY_1975'
    },
    {
        name: 'Икша',
        year: 2011,
        url: './maps/moscow/ak/iksha_2011.webp',
        link: './original_maps/moscow/ak/iksha_2011_omaps.gif',
        bounds: [[56.1824927, 37.4523926], [56.1780738, 37.4991703], [56.1608712, 37.4456978]],
        author: 'TRNN_A',
        owner: 'NLTV_D'
    },
    {
        name: 'Яхрома',
        date: '1971-05-22',
        url: './maps/moscow/ak/jahroma_1971.webp',
        link: './original_maps/moscow/ak/jahroma_1971_omaps.jpg',
        info: '22-23 мая. XIII традиционный слёт туристов к/ф Старт.',
        bounds: [[56.3001581, 37.3830414], [56.2946811, 37.450161], [56.2726224, 37.377634]]
    },
    {
        name: 'Яхрома',
        year: 1972,
        url: './maps/moscow/ak/jahroma_1972.webp',
        link: './original_maps/moscow/ak/jahroma_1972_omaps.jpg',
        bounds: [[56.3104908, 37.3541164], [56.3074913, 37.4096489], [56.2828196, 37.3489666]],
    },
    {
        name: 'Ольгово',
        year: 1986,
        url: './maps/moscow/olgovo_1986.webp',
        link: './original_maps/moscow/olgovo_1986_omaps.jpg',
        bounds: [[56.2748622, 37.3002148], [56.2671891, 37.4002934], [56.2236953, 37.2851086]],
        author: []
    },
    {
        name: 'Долгопрудный, Долгие пруды',
        year: 2000,
        url: './maps/moscow/ak/dolgoprudny_2000.webp',
        link: './original_maps/moscow/ak/dolgoprudny_2000_omaps.gif',
        bounds: [[55.9435765, 37.5201988], [55.9418942, 37.552042], [55.9193437, 37.5128603]],
        author: 'PTRV_VLNTN',
        owner: 'NLTV_D',
        type: ['PARK']
    },
    {
        name: 'Долгопрудный, ПКиО',
        year: 2011,
        url: './maps/moscow/ak/dolgoprudny_pkio_2011.webp',
        link: './original_maps/moscow/ak/dolgoprudny_pkio_2011_omaps.gif',
        bounds: [[55.9478541, 37.499342], [55.9468208, 37.5083542], [55.9415337, 37.4973035]],
        owner: 'NLTV_D',
        type: ['PARK']
    },
    {
        name: 'Долгопрудный, Кампус МФТИ',
        year: 2024,
        url: './maps/moscow/ak/dolgoprudny_campus_2024.webp',
        link: './original_maps/moscow/ak/dolgoprudny_campus_2024_omaps.jpg',
        bounds: [[55.9324476, 37.5157785], [55.9308129, 37.5311422], [55.9242251, 37.5129032]],
        owner: 'NLTV_D',
        type: ['CITY']
    },
    {
        name: 'Долгопрудный, Берёзовая роща, ФизТех',
        year: 2024,
        url: './maps/moscow/ak/dolgoprudny_fiztech_2024.webp',
        link: 'http://o-mephi.net/cup/maps/20250614_95.jpg',
        info: 'Карта парка Долгие Пруды у Физтеха в Долгопрудном. По состоянию на настоящее время (2025) для ориентирования непригодна.',
        bounds: [[55.9423268, 37.5237608], [55.9426392, 37.5463772], [55.9227824, 37.5244045]],
        author: ['PTRV_VLNTN','KCHRNA','KHMRZV','NLTV_D'],
        owner: 'TTV_A'
    },
    {
        name: 'Фосфоритный',
        year: 2024,
        url: './maps/moscow/ak/fosforitny_2022.webp',
        link: './original_maps/moscow/ak/fosforitny_2022_omaps.jpg',
        bounds: [[55.3398602, 38.8889194], [55.3383104, 38.9021587], [55.3328916, 38.8866234]],
        author: 'TTYNN_V',
        owner: 'ERMCHNKV_A',
        type: ['CITY']
    },
    {
        name: 'Егорьевск, Жукова гора',
        year: 2002,
        logo: 'egorievsk_lylyk.webp',
        url: './maps/moscow/ak/egorievsk_2002.webp',
        link: ['./original_maps/moscow/ak/egorievsk_2002_omaps.jpg','./original_maps/moscow/ak/egorievsk_zhukova_hill_2002_omaps.jpg'],
        bounds: [[55.3657224, 39.0283298], [55.3639175, 39.0608597], [55.3462297, 39.0239525]],
        author: 'JASHPTRV',
    },
    {
        name: 'Ляхово',
        year: 2010,
        url: './maps/moscow/lr/liahovo_2010.webp',
        link: './original_maps/moscow/lr/liahovo_2010_omaps.jpg',
        bounds: [[55.2521937, 37.966218], [55.2531721, 37.9942846], [55.2394968, 37.967205]]
    },
    {
        name: 'Беспятовская роща',
        year: 2019,
        logo: 'zaraisk.webp',
        url: './maps/moscow/zarajsk_2019.webp',
        link: './original_maps/moscow/zarajsk_2019_omaps.jpg',
        bounds: [[54.7538299, 38.8894558], [54.7504616, 38.9220285], [54.7406274, 38.8860655]],
        author: 'FSHN_A',
        owner: 'FSHN_A'
    },
    {
        name: 'Иванчиково',
        year: 2025,
        logo: 'zaraisk.webp',
        url: './maps/moscow/ak/ivanchikovo_2025.webp',
        link: './original_maps/moscow/ak/ivanchikovo_2025_omaps.gif',
        bounds: [[54.6957863, 38.7959433], [54.6933556, 38.8152122], [54.6872908, 38.7930679]],
        author: 'FSHN_A',
        owner: 'FSHN_A'
    },
    {
        name: 'Зарайский кремль',
        year: 2025,
        logo: 'zaraisk.webp',
        url: './maps/moscow/sz/zarajsk_city_2025.webp',
        link: './original_maps/moscow/sz/zarajsk_city_2025_omaps.gif',
        bounds: [[54.7683402, 38.8626766], [54.7665514, 38.8771069], [54.7539661, 38.8572907]],
        author: 'FSHN_A',
        owner: 'FSHN_A',
        type: ['CITY']
    },
    {
        name: 'Зарайск, мкрн № 1,2',
        year: 2025,
        logo: 'zaraisk.webp',
        url: './maps/moscow/sz/zarajsk_1_2_2025.webp',
        link: './original_maps/moscow/sz/zarajsk_1_2_2025_omaps.gif',
        bounds: [[54.7666319, 38.889606], [54.7652578, 38.9005709], [54.753446, 38.8846707]],
        author: 'FSHN_A',
        owner: 'FSHN_A',
        type: ['CITY']
    },
    {
        name: 'Карманово',
        year: 2025,
        logo: 'zaraisk.webp',
        url: './maps/moscow/ak/karmanovo_2025.webp',
        link: './original_maps/moscow/ak/karmanovo_2025_omaps.gif',
        bounds: [[54.7325503, 38.8454676], [54.7241245, 38.9122868], [54.6971007, 38.8324642]],
        author: 'FSHN_A',
        owner: 'FSHN_A'
    },
    {
        name: 'Луховицы, стд Спартак',
        year: 2020,
        logo: 'lukhovitsy.gif',
        url: './maps/moscow/lr/lukhovitsy_spartak_2020.webp',
        link: './original_maps/moscow/lr/lukhovitsy_spartak_2020_omaps.gif',
        bounds: [[54.983044, 39.0285444], [54.9813017, 39.0468907], [54.9760866, 39.0263772]],
        author: 'FSHN_A',
        type: ['CITY']
    },
    {
        name: 'Голубые оз, Карьер №1',
        year: 2023,
        logo: 'lukhovitsy.gif',
        url: './maps/moscow/ak/blue_lake_1_2023.webp',
        link: './original_maps/moscow/ak/blue_lake_1_2023_omaps.gif',
        bounds: [[55.0028258, 39.0188456], [55.0013613, 39.031806], [54.9922899, 39.0152407]],
        author: 'FSHN_A',
    },
    {
        name: 'Вельяминово',
        year: 1,
        url: './maps/moscow/veliaminovo_old.webp',
        link: './original_maps/moscow/veliaminovo_old_omaps.jpg',
        bounds: [[55.8833271, 36.8576288], [55.8787294, 36.9014883], [55.8607184, 36.8508482]],
        author: 'GLDRV'
    },
    {
        name: 'Истра, Соколиная гора',
        year: 1986,
        url: './maps/moscow/ak/istra_sokolinaja_1986.webp',
        link: './original_maps/moscow/ak/istra_sokolinaja_1986_omaps.jpg',
        bounds: [[55.929154, 36.8863392], [55.9258121, 36.9311428], [55.9050565, 36.8804169]],
        author: ['ELZRV','FMN_I']
    },
    {
        name: 'Истра, Соколиная гора',
        year: 2024,
        url: './maps/moscow/ak/istra_sokolinaja_2024.webp',
        link: './original_maps/moscow/ak/istra_sokolinaja_2024_omaps.jpg',
        bounds: [[55.9223977, 36.8832922], [55.922566, 36.9118738], [55.9096511, 36.883378]],
        author: ['BLDV','OGRZKV']
    },
    {
        name: 'Истра, р Песочная',
        year: 2020,
        url: './maps/moscow/ak/istra_pesochnaja_2020.webp',
        link: './original_maps/moscow/ak/istra_pesochnaja_2020_omaps.jpg',
        bounds: [[55.9275432, 36.8668556], [55.9276153, 36.9014454], [55.9093865, 36.8664265]]
    },
    {
        name: 'Павловская слобода, Шишкин лес',
        year: 2025,
        url: './maps/moscow/shiskin_les_2025.webp',
        link: './original_maps/moscow/shiskin_les_2025_omaps.jpg',
        bounds: [[55.804296, 37.0612192], [55.8030659, 37.0762396], [55.7928256, 37.0575714]],
        author: 'MTN_Y'
    },
    {
        name: 'Аносино',
        year: 1988,
        url: './maps/moscow/ak/anosino_1988.webp',
        link: './original_maps/moscow/ak/anosino_1988_omaps.jpg',
        bounds: [[55.8559976, 36.9449615], [55.8529143, 37.0004082], [55.8195123, 36.9370651]],
        author: 'GLDRV'
    },
    {
        name: 'Кострово',
        year: 1988,
        url: './maps/moscow/ak/kostrovo_1988.webp',
        link: './original_maps/moscow/ak/kostrovo_1988_omaps.jpg',
        bounds: [[55.9010629, 36.6981125], [55.8962026, 36.762743], [55.8658722, 36.6878986]],
        author: 'GLDRV'
    },
    {
        name: 'Снегири',
        year: 1991,
        url: './maps/moscow/snegiri_1991.webp',
        link: ['./original_maps/moscow/snegiri_1990_omaps.jpg','./original_maps/moscow/snegiri_1991_omaps.jpg'],
        bounds: [[55.9276153, 36.9659901], [55.9201613, 37.066927], [55.8929781, 36.956892]],
        author: ['IVNLV','KZMN_R','KZMN_A','LVN_B','PPV_V','FMN_I','BLKHN','SMKN_V']
    },
    {
        name: 'Снегири, б/о "Ленино"',
        year: 2009,
        url: './maps/moscow/snegiri_lenino_2009.webp',
        link: './original_maps/moscow/snegiri_lenino_2009_omaps.gif',
        bounds: [[55.8865765, 37.0739865], [55.8865885, 37.0838141], [55.8820152, 37.074008]],
        owner: 'NLTV_D'
    },
    {
        name: 'Павловская слобода',
        year: 1997,
        url: './maps/moscow/pavlovska_sloboda.webp',
        link: './original_maps/moscow/pavlovska_sloboda_omaps.jpg',
        bounds: [[55.8532516, 37.0797586], [55.8483371, 37.1247768], [55.8221402, 37.0706606]],
        author: ['GLDRV','MTN_Y']
    },
    {
        name: 'Дедовск',
        year: 2017,
        url: './maps/moscow/ak/dedovsk_2019.webp',
        link: './original_maps/moscow/ak/dedovsk_2019_omaps.jpg',
        bounds: [[55.8519748, 37.0852089], [55.848843, 37.1173525], [55.8390606, 37.0808744]],
        author: ['GLDRV','MTN_Y']
    },
    {
        name: 'Малиновка',
        year: 1998,
        url: './maps/moscow/malinovka_1998.webp',
        link: './original_maps/moscow/malinovka_1998_omaps.jpg',
        bounds: [[55.8842177, 37.1434879], [55.8823643, 37.1719837], [55.8623802, 37.1397114]],
        logo: 'mgsyt.jpg'
    },
    {
        name: 'Миитовская',
        year: 2001,
        url: './maps/moscow/miitovskaja_2001.webp',
        link: './original_maps/moscow/miitovskaja_2001_omaps.jpg',
        bounds: [[55.8774776, 37.0802307], [55.8744441, 37.1076107], [55.8622839, 37.0721197]],
        author: 'OGRZKV',
        owner: 'NLTV_D'
    },
    {
        name: 'Миитовская',
        year: 2021,
        url: './maps/moscow/miitovskaja_2021.webp',
        link: './original_maps/moscow/miitovskaja_2021_omaps.jpg',
        bounds: [[55.8772127, 37.0770121], [55.875359, 37.1004009], [55.8596105, 37.0715618]]
    },
    {
        name: 'Алтуфьево, Хлебниковский лесопарк',
        year: 1997,
        url: './maps/moscow/ak/altufievo_1997.webp',
        link: './original_maps/moscow/ak/altufievo_1997_omaps.jpg',
        bounds: [[55.9225179, 37.593112], [55.9212434, 37.6152992], [55.906091, 37.5891209]],
        author: ['PTRV_VLNTN','MLNKV_V']
    },
    {
        name: 'стд Октябрь',
        year: 1995,
        url: './maps/moscow/std_oktjabr_1995.webp',
        link: './original_maps/moscow/std_oktjabr_1995_omaps.jpg',
        bounds: [[55.7947556, 37.4468136], [55.7947677, 37.454474], [55.7888445, 37.4466205]],
        author: ['SHGV','NLTV_D','MDVDV_A'],
        type: ['CITY']
    },
    {
        name: 'Лысая гора',
        year: 2025,
        url: './maps/moscow/lysaya_gora_2025.webp',
        bounds: [[55.8055743, 37.4477577], [55.8043442, 37.4584866], [55.7899424, 37.443552]],
        author: ['SKLV_V','KSTLV_E'],
        owner: 'MLKHT',
        type: ['CITY']
    },
    {
        name: 'Живописная ул',
        year: 2008,
        url: './maps/moscow/zhivopisnaja_2008.webp',
        link: './original_maps/moscow/zhivopisnaja_2008_omaps.jpg',
        bounds: [[55.8052487, 37.4481225], [55.8034759, 37.4682713], [55.7815931, 37.4420714]],
        author: 'KSTLV_E',
        owner: 'ISKTL',
        type: ['CITY']
    },
    {
        name: 'Хорошево-Мневники',
        year: 2020,
        url: './maps/moscow/o-mephi/20210104_757.webp',
        link: 'http://o-mephi.net/cup/maps/20210104_757.jpg',
        bounds: [[55.7895322, 37.4483585], [55.7887359, 37.4578857], [55.7811949, 37.4462342]],
        author: ['KSTLV_E','BRTNK_A'],
        owner: ['ISKTL','SKHRV_P'],
        type: ['CITY']
    },
    {
        name: 'Фроловское, запад',
        year: 1985,
        url: './maps/moscow/ak/frolovskoe_west_1985.webp',
        link: './original_maps/moscow/ak/frolovskoe_west_1985_omaps.jpg',
        bounds: [[56.2818667, 36.6839504], [56.2775307, 36.7544174], [56.2554144, 36.6787148]],
        author: ['PTRV_VLNTN','KLSNKV_V']
    },
    {
        name: 'Фроловское, юго-запад',
        year: 1985,
        url: './maps/moscow/ak/frolovskoe_south_west_1985.webp',
        link: './original_maps/moscow/ak/frolovskoe_south_west_1985_omaps.jpg',
        bounds: [[56.2651872, 36.6878128], [56.2588948, 36.7624855], [56.2418237, 36.6817188]]
    },
    {
        name: 'Ильясово',
        year: 2014,
        url: './maps/moscow/ak/iliasovo_rogaine_2014.webp',
        link: './original_maps/moscow/ak/iliasovo_rogaine_2014_omaps.jpg',
        bounds: [[54.9750522, 38.6461258], [54.9410477, 38.9767456], [54.8198765, 38.5984039]],
        author: ['ZVJLV','CHPKN','TNS_A'],
        type: ['ROGAINE']
    },
    {
        name: 'Фосфоритный',
        date: '2022-08-27',
        url: './maps/moscow/ak/fosforitny_rogaine_2022_08_27.webp',
        link: './original_maps/moscow/ak/fosforitny_rogaine_2022_08_27_omaps.gif',
        info: '<a href="https://forestadventure.ru/history/">Рогейн Forest Adventure Рудниковый</a>.',
        o_gps: 14143,
        bounds: [[55.3976365, 38.7856865], [55.3818411, 38.9183807], [55.3444727, 38.7663746]],
        author: 'JAKMV_S',
        owner: 'JAKMV_S',
        type: ['ROGAINE']
    },
    {
        name: 'Ильясово',
        year: 2024,
        url: './maps/moscow/ak/iliasovo_rogaine_2024.webp',
        link: './original_maps/moscow/ak/iliasovo_rogaine_2024_omaps.png',
        info: '<a href="https://forestadventure.ru/2024/fa/">Рогейн Forest Adventure Осётр</a>.',
        o_gps: 20319,
        bounds: [[54.9628336, 38.7292957], [54.9468157, 38.8540936], [54.8589241, 38.6902428]],
        author: 'JAKMV_S',
        owner: 'JAKMV_S',
        type: ['ROGAINE']
    },
    {
        name: 'Бебехово',
        year: 1998,
        url: './maps/moscow/ak/bebehovo_1998.webp',
        link: './original_maps/moscow/ak/bebehovo_1998_omaps.jpg',
        bounds: [[54.9362157, 38.75453], [54.9314325, 38.8041401], [54.9005003, 38.7442303]],
        author: ['DBRTSV_V','SMKN_S','ZUEV_A']
    },
    {
        name: 'Ильясово',
        year: 1998,
        url: './maps/moscow/ak/iliasovo_1998.webp',
        link: ['./original_maps/moscow/ak/iliasovo_1998_clean_omaps.jpg','./original_maps/moscow/ak/iliasovo_1998_omaps.jpg'],
        bounds: [[54.9355747, 38.7819958], [54.9323694, 38.8156414], [54.9159447, 38.7777042]],
        author: 'SMKN_S'
    },
    {
        name: 'Власьево',
        year: 1998,
        url: './maps/moscow/vlasievo_1998.webp',
        link: './original_maps/moscow/vlasievo_1998_omaps.jpg',
        bounds: [[54.9267473, 38.8001919], [54.9230481, 38.8390303], [54.901364, 38.7929392]],
        author: 'SMKN_S'
    },
    {
        name: 'Ильясово',
        year: 2022,
        url: './maps/moscow/ak/iliasovo_2022.webp',
        link: ['./original_maps/moscow/ak/iliasovo_2022_omaps.gif','./original_maps/moscow/vlasievo_2019_omaps.jpg'],
        bounds: [[54.9383852, 38.7549591], [54.9292626, 38.8411331], [54.9007965, 38.7437582]],
        author: 'SMKN_S'
    },
    {
        name: 'пл Фруктовая',
        year: 2019,
        url: './maps/moscow/ak/fruktovaya_2019.webp',
        link: './original_maps/moscow/ak/fruktovaya_2019_omaps.jpg',
        bounds: [[54.9335529, 39.2558241], [54.9313215, 39.2769599], [54.9168944, 39.251039]],
        author: 'FSHN_A'
    },
    {
        name: 'Щурово, Поляны',
        year: 1,
        logo: 'kolomna.gif',
        url: './maps/moscow/sz/schurovo_old.webp',
        link: './original_maps/moscow/sz/schurovo_old_omaps.gif',
        bounds: [[55.0599745, 38.8038397], [55.0582786, 38.8225293], [55.052588, 38.8021231]],
        author: 'AFNSV_Y'
    },
    {
        name: 'Андреевское',
        year: 2023,
        logo: 'kolomna.gif',
        url: './maps/moscow/ak/andreevskoe_2023.webp',
        link: './original_maps/moscow/ak/andreevskoe_2023_omaps.gif',
        bounds: [[55.130661, 38.6024809], [55.1269315, 38.6396885], [55.1086716, 38.5951853]],
        author: 'FSHN_A',
        owner: 'FSHN_A',
    },
    {
        name: 'Коломна, кремль',
        year: 2023,
        logo: 'kolomna.gif',
        url: './maps/moscow/ak/kolomna_kreml_2019.webp',
        link: './original_maps/moscow/ak/kolomna_kreml_2023_omaps.gif',
        bounds: [[55.1100831, 38.7486935], [55.108021, 38.7669325], [55.1027549, 38.7463546]],
        author: 'FSHN_A',
        type: ['CITY']
    },
    {
        name: 'пр Кирова, д/с №18',
        year: 2022,
        logo: 'kolomna.gif',
        url: './maps/moscow/ak/kirova_2022.webp',
        link: './original_maps/moscow/ak/kirova_2022_omaps.gif',
        bounds: [[55.0825987, 38.7544334], [55.0818188, 38.7630165], [55.0760947, 38.7524486]],
        author: 'FKN_S',
        type: ['CITY']
    },
    {
        name: 'Щурово, Дубовая роща',
        year: 2023,
        logo: 'kolomna.gif',
        url: './maps/moscow/lr/oak_grove_2023.webp',
        link: './original_maps/moscow/lr/oak_grove_2023_omaps.gif',
        bounds: [[55.072397, 38.8601232], [55.070849, 38.8745856], [55.0625797, 38.8573122]],
        author: 'FSHN_A',
        type: ['PARK']
    },
    {
        name: 'Парк им 50-летия Октября',
        year: 2022,
        logo: 'kolomna.gif',
        url: './maps/moscow/lr/park_oktober_50_2022.webp',
        link: './original_maps/moscow/lr/park_oktober_50_2022_omaps.gif',
        bounds: [[55.0706524, 38.7621903], [55.0706401, 38.7773609], [55.0587824, 38.7622762]],
        author: 'FSHN_A',
        type: ['PARK']
    },
    {
        name: 'Парк Мира',
        year: 2022,
        logo: 'kolomna.gif',
        url: './maps/moscow/lr/peace_park_2022.webp',
        link: './original_maps/moscow/lr/peace_park_2022_omaps.gif',
        bounds: [[55.088942, 38.775022], [55.0877017, 38.7877464], [55.0835628, 38.7734556]],
        author: 'FSHN_A',
        type: ['PARK']
    },
    {
        name: 'ул Суворова',
        year: 2024,
        logo: 'kolomna.gif',
        url: './maps/moscow/sz/suvorova_2024.webp',
        link: ['./original_maps/moscow/sz/suvorova_2024_omaps.gif','./original_maps/moscow/oksky_2019_omaps.jpg'],
        bounds: [[55.0842138, 38.8025415], [55.0826478, 38.8179159], [55.0751857, 38.7997198]],
        author: ['FKN_S','FSHN_A'],
        type: ['CITY']
    },
    {
        name: 'Колычёво, КМЦ Русь',
        year: 2022,
        logo: 'kolomna.gif',
        url: './maps/moscow/ak/kolychevo_2022.webp',
        link: ['./original_maps/moscow/ak/kolychevo_2022_omaps.gif','./original_maps/moscow/ak/kolychevo_2019_omaps.jpg'],
        bounds: [[55.0675931, 38.7434793], [55.0664135, 38.7593579], [55.0569635, 38.7406254]],
        author: ['FRLNA_V','FSHN_A'],
        type: ['CITY']
    },
    {
        name: 'Хорошово, Рождественка',
        year: 1989,
        url: './maps/moscow/ak/horoshovo_1989.webp',
        link: './original_maps/moscow/ak/horoshovo_1989_omaps.jpg',
        bounds: [[55.1920494, 38.8150406], [55.1868066, 38.8758087], [55.151167, 38.8045692]]
    },
    {
        name: 'Веледниково',
        year: 1,
        url: './maps/moscow/velednikovo_old.webp',
        link: './original_maps/moscow/velednikovo_old_omaps.jpg',
        bounds: [[55.8141596, 37.1214294], [55.8093607, 37.174387], [55.784851, 37.1123314]]
    },
    {
        name: 'Степановское',
        year: 1989,
        url: './maps/moscow/stepanovskoe_1989.webp',
        link: './original_maps/moscow/stepanovskoe_1989_omaps.jpg',
        bounds: [[55.7882533, 37.1214294], [55.782124, 37.1965313], [55.7609777, 37.1139622]],
        author: ['GNDRV','LKN_A']
    },
    {
        name: 'Степановское',
        year: 1988,
        url: './maps/moscow/stepanovskoe_1988.webp',
        link: './original_maps/moscow/stepanovskoe_1988_omaps.jpg',
        bounds: [[55.7716971, 37.1451187], [55.7840546, 37.1811676], [55.7485646, 37.1712971]],
        author: 'LKN_A'
    },
    {
        name: 'Мисайлово',
        year: 1998,
        url: './maps/moscow/misailovo_1998.webp',
        link: './original_maps/moscow/misailovo_1998_omaps.jpg',
        bounds: [[55.5897933, 37.781682], [55.5877076, 37.8256702], [55.5609713, 37.7769184]],
        author: 'MLNKV_V'
    },
    {
        name: 'Коробово',
        year: 1982,
        url: './maps/moscow/ak/korobovo_1982.webp',
        link: './original_maps/moscow/ak/korobovo_1982_omaps.jpg',
        bounds: [[55.5365968, 37.8308201], [55.5320795, 37.8776836], [55.513082, 37.823782]],
        author: 'SMKN_S'
    },
    {
        name: 'Сьянская пещера',
        year: 2016,
        url: './maps/moscow/sianska_cave_2015.webp',
        link: './original_maps/moscow/sianska_cave_2015_omaps.jpg',
        info: '<a href="https://ru.wikipedia.org/wiki/Сьяны">Wiki</a>, Спелеорогейн "Час подЗемли", отчёт <a href="https://www.vvv.ru/news/index.php3?news=474635">кратко</a> и <a href="https://hote-czai.livejournal.com/54577.html">подробнее</a>, <a href="https://www.youtube.com/watch?v=aflHxKJS8o4">видео</a>.',
        bounds: [[55.4916683, 37.786746], [55.4909146, 37.8077745], [55.4805072, 37.77915]],
        type: ['FUN'],
        logo: 'hour_under.webp'
    },
    {
        name: 'Григорчиково',
        year: 2000,
        url: './maps/moscow/ak/grigorchikovo_2000.webp',
        link: './original_maps/moscow/ak/grigorchikovo_2000_omaps.jpg',
        bounds: [[55.5263958, 37.877512], [55.5212943, 37.9417992], [55.5037985, 37.8727913]],
        author: 'MLNKV_V'
    },
    {
        name: 'Лыткарино',
        year: 1983,
        url: './maps/moscow/lytkarino_1983.webp',
        link: './original_maps/moscow/lr/lytkarino_1983_omaps.jpg',
        bounds: [[55.608366, 37.9164791], [55.6030327, 37.9878044], [55.5845545, 37.9101276]]
    },
    {
        name: 'Лыткарино',
        year: 1981,
        url: './maps/moscow/lytkarino_1981.webp',
        link: './original_maps/moscow/lr/lytkarino_1981_omaps.jpg',
        bounds: [[55.5852579, 37.9269075], [55.5832932, 37.9517984], [55.5693192, 37.9225302]],
        author: ['STLV_S','PTPKN']
    },
    {
        name: 'Лыткарино',
        year: 1988,
        url: './maps/moscow/lytkarino_1988.webp',
        link: './original_maps/moscow/lr/lytkarino_1988_omaps.jpg',
        bounds: [[55.6073479, 37.9157066], [55.6056025, 37.9444599], [55.5848456, 37.9117584]],
        author: ['PTPKN','STLV_S']
    },
    {
        name: 'Лыткарино, Мирный',
        year: 1989,
        url: './maps/moscow/lytkarino_mirny_1989.webp',
        link: './original_maps/moscow/lr/lytkarino_mirny_1989_omaps.jpg',
        bounds: [[55.6280929, 37.9230881], [55.6236346, 37.9718399], [55.6039782, 37.9160929]]
    },
    {
        name: 'Октябрьский',
        year: 1982,
        url: './maps/moscow/oktiabrsky_1982.webp',
        link: './original_maps/moscow/oktiabrsky_1982_omaps.jpg',
        bounds: [[55.604851, 37.9635143], [55.6014326, 37.9891777], [55.583463, 37.955575]],
        author: 'MLNKV_V'
    },
    {
        name: 'Токарево',
        year: 1987,
        logo: 'landyshi.jpg',
        url: './maps/moscow/tokarevo_1987.webp',
        link: './original_maps/moscow/tokarevo_1987_omaps.jpg',
        bounds: [[55.6450491, 37.8741646], [55.642821, 37.9076815], [55.624725, 37.8688002]],
        author: ['STLV_S','ZLTRV_S']
    },
    {
        name: 'Лыткарино, Тураевский лес',
        year: 2006,
        url: './maps/moscow/lytkarino_south_2006.webp',
        link: './original_maps/moscow/lr/lytkarino_south_2006_omaps.gif',
        bounds: [[55.5753607, 37.9101276], [55.5722794, 37.9363918], [55.5647815, 37.9066086]],
        owner: 'NLTV_D'
    },
    {
        name: 'Наро-Фоминск, Таширово',
        year: 1996,
        url: './maps/moscow/narofominsk_1996.webp',
        link: './original_maps/moscow/narofominsk_1996_omaps.jpg',
        bounds: [[55.4259694, 36.6470432], [55.4319355, 36.7042065], [55.3807928, 36.6615915]],
        author: ['SMKN_S','ZUEV_A']
    },
    {
        name: 'Новогорск',
        date: '2006-04-20',
        info: '<a href="https://moscompass.ru/news/index.php?m=99&mes=26081">GRAND PRIX – Будущие звезды</a>',
        url: './maps/moscow/novogorsk_2006.webp',
        link: './original_maps/moscow/novogorsk_2006_omaps.gif',
        bounds: [[55.9464604, 37.2730064], [55.9321832, 37.3825264], [55.9004373, 37.2576427]],
        author: ['VRBY','MTN_Y'],
        owner: 'NLTV_D'
    },
    {
        name: 'Львовская',
        year: 1984,
        url: './maps/moscow/lvovskaya_1984.webp',
        link: './original_maps/moscow/lr/lvovskaya_1984_omaps.jpg',
        bounds: [[55.3267763, 37.4446678], [55.3232361, 37.5186968], [55.3040889, 37.4414492]]
    },
    {
        name: 'Митрополье',
        year: 1967,
        url: './maps/moscow/mitropolie_1967.webp',
        link: './original_maps/moscow/mitropolie_1967_omaps.jpg',
        bounds: [[56.1782888, 37.8544235], [56.17762, 37.9005146], [56.1333069, 37.8498745]]
    },
    {
        name: 'Мураново',
        year: 2011,
        url: './maps/moscow/muranovo_2011.webp',
        link: './original_maps/moscow/muranovo_2011_omaps.jpg',
        bounds: [[56.1798892, 37.8883696], [56.1748489, 37.929225], [56.1619943, 37.8815031]]
    },
    {
        name: 'Фирсановка',
        year: 2010,
        url: './maps/moscow/ak/firsanovka_rogaine_2010.webp',
        link: 'https://moscow.rogaine.ru/download/maps/cup2010_5_map.gif',
        bounds: [[55.9883481, 37.1966171], [55.9707243, 37.3896503], [55.9063556, 37.1713829]],
        start: 'ZM',
        type: ['ROGAINE']
    },
    {
        name: 'Одинцово',
        year: 2011,
        url: './maps/moscow/odintsovo_rogaine_2011.webp',
        link: 'https://moscow.rogaine.ru/download/maps/cup2011_4_map6_8.gif',
        bounds: [[55.7802416, 37.2003937], [55.7606155, 37.4020958], [55.6666213, 37.1648598]],
        type: ['ROGAINE']
    },
    {
        name: 'Лисья нора',
        year: 2012,
        url: './maps/moscow/lisia_nora_rogaine_2012.webp',
        link: 'https://moscow.rogaine.ru/download/maps/msu2012_map.jpg',
        bounds: [[56.2070382, 37.5239754], [56.1826838, 37.7670479], [56.0971781, 37.488699]],
        type: ['ROGAINE']
    },
    {
        name: 'Воскресенское',
        year: 2014,
        url: './maps/moscow/voskresenskoe_rogaine_2014.webp',
        link: 'https://moscow.rogaine.ru/results/mr2014/mr2014_map.jpg',
        bounds: [[55.9940609, 38.2499313], [55.9800894, 38.3813381], [55.8872022, 38.2155132]],
        type: ['ROGAINE']
    },
    {
        name: 'Королёв',
        year: 2018,
        url: './maps/moscow/ak/korolev_rogaine_2018.webp',
        link: 'https://moscow.rogaine.ru/results/kr2018/kr2018_map.jpg',
        info: 'Королёвский рогейн.',
        bounds: [[55.9773521, 37.8037834], [55.9535249, 38.0109787], [55.8828216, 37.7701378]],
        type: ['ROGAINE']
    },
    {
        name: 'Трубино',
        date: '2019-07-06',
        url: './maps/moscow/trubino_rogaine_2019.webp',
        link: 'https://moscow.rogaine.ru/results/kr2019/map.jpg',
        bounds: [[55.0600851, 36.5997505], [55.0306786, 36.8622208], [54.9334543, 36.5590668]],
        o_gps: 6062,
        owner: 'KMPT',
        start: 'KMPT_ROGAINE',
        type: ['ROGAINE']
    },
    {
        name: 'Любицы',
        date: '2026-05-10',
        url: './maps/moscow/lr/lubitsy_rogaine_2026.webp',
        link: 'https://rogaine.ru/results/sr2026/spring2026_map.jpg',
        info: 'Весенний Компот-рогейн.',
        about: 'https://www.x-lite.run/sr2026',
        bounds: [[55.0628869, 36.6168308], [55.0397291, 36.8184471], [54.9623408, 36.5818977]],
        o_gps: 24913,
        owner: 'KMPT',
        start: 'KMPT_ROGAINE',
        type: ['ROGAINE']
    },
    {
        name: 'Васильево',
        date: '2020-09-05',
        url: './maps/moscow/vasilevo_rogaine_2020.webp',
        link: 'https://rogaine.ru/results/kr2020/map.jpg',
        bounds: [[55.343399, 36.1060524], [55.3265077, 36.2614059], [55.2394968, 36.0698318]],
        o_gps: 8091,
        owner: 'KMPT',
        start: 'KMPT_ROGAINE',
        type: ['ROGAINE']
    },
    {
        name: 'Невзорово',
        date: '2021-09-25',
        url: './maps/moscow/nevzorovo_2021.webp',
        link: 'https://rogaine.ru/results/fc2021/map.jpg',
        info: 'Финал Компот-Кубка.',
        bounds: [[56.0277925, 37.9046345], [56.0206456, 37.9654026], [55.9873879, 37.8898716]],
        o_gps: 10989,
        author: 'JAKMV_A',
        owner: 'KMPT',
        start: 'KMPT_ROGAINE',
        type: ['ROGAINE']
    },
    {
        name: 'Павловский Посад',
        date: '2021-09-04',
        url: './maps/moscow/lr/pavlovsky_posad_rogaine_2021.webp',
        link: 'https://rogaine.ru/results/bkr2021/map.jpg',
        info: 'Осенний Компот-рогейн.',
        bounds: [[56.10814, 38.6066437], [56.0793166, 38.8461113], [55.9317024, 38.5400391]],
        o_gps: 10848,
        owner: 'KMPT',
        start: 'KMPT_ROGAINE',
        type: ['ROGAINE']
    },
    {
        name: 'Зелёный городок',
        date: '2021-02-27',
        url: './maps/moscow/zeleny_gorodok_rogaine_2021.webp',
        link: 'https://rogaine.ru/results/ski2021/map.jpg',
        info: 'Лыжный Компот-рогейн.',
        bounds: [[56.106034, 37.9095268], [56.0938746, 38.0252266], [56.0122019, 37.8772545]],
        o_gps: 9057,
        owner: 'KMPT',
        start: 'KMPT_ROGAINE',
        type: ['WINTER','ROGAINE']
    },
    {
        name: 'Ивантеевский парк',
        year: 2023,
        url: './maps/moscow/ak/ivanteevka_2023.webp',
        link: './original_maps/moscow/ak/ivanteevka_2023_omaps.jpg',
        bounds: [[55.9904005, 37.9121661], [55.9883121, 37.9286242], [55.9772681, 37.9075098]],
        o_gps: 17823,
        owner: 'KMPT'
    },
    {
        name: 'Ивантеевка',
        date: '2023-11-25',
        info: 'Ночной рогейн 100 минут.',
        url: './maps/moscow/ak/ivanteevka_rogaine_2023.webp',
        link: './original_maps/moscow/ak/ivanteevka_rogaine_2023_omaps.jpg',
        bounds: [[55.968947, 37.8822327], [55.9642634, 37.9218864], [55.9529723, 37.8762674]],
        owner: 'KMPT',
        type: ['ROGAINE']
    },
    {
        name: 'Ивантеевка',
        date: '2023-11-05',
        info: 'Финал Компот-кубка.',
        url: './maps/moscow/ak/ivanteevka_final_rogaine_2023.webp',
        link: 'https://rogaine.ru/results/fc2023/fc2023_map.jpg',
        bounds: [[56.0332117, 37.8892708], [56.0194943, 38.0051422], [55.9493921, 37.8580284]],
        owner: 'KMPT',
        start: 'KMPT_ROGAINE',
        type: ['ROGAINE']
    },
    {
        name: 'Ивантеевка',
        date: '2024-02-03',
        info: 'Зимний Лыжный Компот-рогейн.',
        url: './maps/moscow/ak/ivanteevka_winter_ski_rogaine_2024.webp',
        link: 'https://rogaine.ru/results/wr2024/map.jpg',
        bounds: [[56.0544977, 37.9026604], [56.0348422, 38.0695152], [55.9885881, 37.8786278]],
        o_gps: 18320,
        owner: 'KMPT',
        start: 'KMPT_ROGAINE',
        type: ['ROGAINE','WINTER']
    },
    {
        name: 'Зелёный городок',
        year: 2004,
        url: './maps/moscow/zeleny_gorodok_2004.webp',
        link: './original_maps/moscow/zeleny_gorodok_2004_omaps.jpg',
        bounds: [[56.0590746, 37.9053211], [56.054306, 37.9726124], [56.025874, 37.8975105]],
        author: ['OGRDNKV','MTVV','NSNV']
    },
    {
        name: 'р Скалба',
        year: 2024,
        url: './maps/moscow/skalba_2024.webp',
        link: './original_maps/moscow/skalba_2024_omaps.pdf',
        bounds: [[56.0366044, 37.9334092], [56.0351299, 37.9461122], [56.0247948, 37.9299545]],
        author: 'LZRV',
        owner: 'LZRV'
    },
    {
        name: 'Тишково',
        year: 1989,
        url: './maps/moscow/tishkovo_1989.webp',
        link: './original_maps/moscow/tishkovo_1989_omaps.jpg',
        bounds: [[56.1140744, 37.7029324], [56.1104373, 37.7513409], [56.0883681, 37.6957226]],
        author: 'OGRDNKV'
    },
    {
        name: 'Царёво',
        year: 2015,
        url: './maps/moscow/tsarevo_2015.webp',
        link: './original_maps/moscow/tsarevo_2015_omaps.jpg',
        bounds: [[56.074766, 38.1022596], [56.0727062, 38.1376648], [56.0586433, 38.1002855]]
    },
    {
        name: 'Кратово, Геофизика',
        year: 2006,
        url: './maps/moscow/ak/geofizika_2006.webp',
        link: './original_maps/moscow/ak/geofizika_2006_omaps.gif',
        bounds: [[55.6103294, 38.1875753], [55.6052146, 38.2433224], [55.5879744, 38.1820393]],
        author: 'SKLV_D'
    },
    {
        name: 'Кратово, Геофизика',
        year: 2007,
        url: './maps/moscow/ak/geofizika_2010.webp',
        link: './original_maps/moscow/ak/geofizika_2010_omaps.gif',
        bounds: [[55.6091659, 38.1884766], [55.6058449, 38.2175303], [55.5969228, 38.1840992]],
        author: 'SCHV_V',
        owner: 'NLTV_D'
    },
    {
        name: 'Кратово, Геофизика',
        year: 2012,
        url: './maps/moscow/ak/geofizika_2012.webp',
        link: './original_maps/moscow/ak/geofizika_2012_omaps.gif',
        bounds: [[55.610087, 38.1886911], [55.6065964, 38.2182598], [55.5957831, 38.1834126]],
        author: 'ZUEV_A'
    },
    {
        name: 'Кратово, Геофизика',
        year: 2017,
        url: './maps/moscow/ak/geofizika_2020.webp',
        link: './original_maps/moscow/ak/geofizika_2020_omaps.jpg',
        bounds: [[55.6042449, 38.2020807], [55.6012144, 38.2314348], [55.5915152, 38.1966305]],
        author: 'STLV_S'
    },
    {
        name: 'Кратово, Геофизика',
        year: 2025,
        url: './maps/moscow/ak/kratovo_geofizika_2025.webp',
        link: './original_maps/moscow/ak/kratovo_geofizika_2025_omaps.gif',
        bounds: [[55.6067903, 38.1940556], [55.6038085, 38.2190752], [55.5949102, 38.190794]],
        author: 'ZHRDV_V',
        owner: 'KRLV_N'
    },
    {
        name: 'Раменское, Холодово',
        year: 2009,
        url: './maps/moscow/ak/holodovo_2010.webp',
        link: './original_maps/moscow/ak/holodovo_2010_omaps.jpg',
        bounds: [[55.5921942, 38.2038832], [55.5905087, 38.2136464], [55.5845303, 38.1998062]],
        author: 'MTN_Y',
        logo: 'o-ramenskoe.webp',
        type: ['CITY']
    },
    {
        name: 'Верея',
        year: 2017,
        url: './maps/moscow/vereya_2017.webp',
        link: './original_maps/moscow/vereya_2017_omaps.jpg',
        bounds: [[55.6254761, 38.014648], [55.6228834, 38.0355906], [55.6172128, 38.0110431]]
    },
    {
        name: 'Зюзино',
        year: 2003,
        url: './maps/moscow/zjuzino_2003.webp',
        link: ['./original_maps/moscow/zjuzino_2003_omaps.gif','./original_maps/moscow/vyalki_2003_full_1.jpg','./original_maps/moscow/vyalki_2003_full_2.jpg'],
        bounds: [[55.7042896, 38.1126022], [55.6975183, 38.196373], [55.6452428, 38.0956078]],
        owner: 'NLTV_D'
    },
    {
        name: 'Чулково',
        year: 2007,
        url: './maps/moscow/ak/chulkovo_2007.webp',
        link: './original_maps/moscow/ak/chulkovo_2007_omaps.gif',
        bounds: [[55.5662375, 38.0275011], [55.561578, 38.0622196], [55.54949, 38.0226088]],
        author: ['BRLNV','ZUEV_A'],
        owner: 'FSO_MSK'
    },
    {
        name: 'Дементьево, Поповский пруд',
        year: 2013,
        url: './maps/moscow/ak/dementievo_popovka_2013.webp',
        link: './original_maps/moscow/ak/dementievo_popovka_2013_omaps.gif',
        bounds: [[55.6116626, 38.288126], [55.6073479, 38.351469], [55.5628643, 38.2802296]],
        author: 'ZUEV_A',
        owner: 'KRLV_N'
    },
    {
        name: 'Раменское',
        year: 2007,
        url: './maps/moscow/ramenskoe_2007.webp',
        link: './original_maps/moscow/ramenskoe_2007_omaps.gif',
        bounds: [[55.5886049, 38.2147837], [55.5846515, 38.2453394], [55.5692464, 38.2059002]],
        owner: 'NLTV_D',
        logo: 'o-ramenskoe.webp'
    },
    {
        name: 'Раменское, мкрн Чернавка',
        year: 2024,
        url: './maps/moscow/lr/ramenskoe_2024.webp',
        link: './original_maps/moscow/lr/ramenskoe_2024_omaps.gif',
        bounds: [[55.5779565, 38.2282805], [55.5767193, 38.2401681], [55.567099, 38.2242894]],
        author: 'ZHRDV_V',
        owner: 'KRLV_N',
        type: ['CITY']
    },
    {
        name: 'Раменское, оз Гидра',
        year: 2025,
        url: './maps/moscow/lr/ramenskoe_gidra_2025.webp',
        link: './original_maps/moscow/lr/ramenskoe_gidra_2025_omaps.gif',
        bounds: [[55.5699016, 38.1762886], [55.5670626, 38.2017374], [55.5564326, 38.1717825]],
        author: 'ZHRDV_V',
        owner: 'KRLV_N'
    },
    {
        name: 'Домодедово, Константиновкий парк',
        year: 2025,
        url: './maps/moscow/ak/domodedovo_konstantinovsky_2025.webp',
        link: './original_maps/moscow/ak/domodedovo_konstantinovsky_2025_omaps.gif',
        bounds: [[55.4386858, 37.7100778], [55.4376207, 37.7194655], [55.4339747, 37.7084684]],
        author: 'ZHRDV_V',
        owner: 'KRLV_N',
        type: ['PARK','CITY','SPRINT']
    },
    {
        name: 'Молодиково',
        year: 1977,
        url: './maps/moscow/molodikovo_1977.webp',
        link: './original_maps/moscow/molodikovo_1977_omaps.jpg',
        bounds: [[55.6425788, 36.4243984], [55.6520232, 36.4958954], [55.6061843, 36.4168453]]
    },
    {
        name: 'Семхоз, Копнинский лес',
        year: 2008,
        start: 'BNO',
        url: './maps/moscow/semhoz_bno_2008.webp',
        link: 'https://tkmgtu.ru/library/images/a/ad/BNO2008B1.jpg',
        bounds: [[56.3081102, 38.0332947], [56.3038249, 38.0794716], [56.2817238, 38.0238104]],
        author: 'SYTV_N'
    },
    {
        name: 'Сергиев Посад',
        year: 2023,
        url: './maps/moscow/sergiev_posad_2023.webp',
        link: './original_maps/moscow/sergiev_posad_2023_omaps.jpg',
        bounds: [[56.3264605, 38.1195974], [56.3251041, 38.1338024], [56.3197497, 38.1172585]],
        author: 'LNTV'
    },
    {
        name: 'Серпухов, Борисово',
        year: 2008,
        url: './maps/moscow/ak/borisovo_2008.webp',
        link: './original_maps/moscow/ak/borisovo_2008_omaps.jpg',
        bounds: [[54.915106, 37.4510193], [54.9091361, 37.5198126], [54.8880122, 37.4424362]],
        author: ['DJCHKV','KRVKV']
    },
    {
        name: 'Сенеж',
        date: '2008-05-10',
        info: '<a href="https://senege.rogaining.ru/">V Чемпионат России по рогейну "Золото Сенежа"</a>.',
        url: './maps/moscow/senezh_2008.webp',
        link: './original_maps/moscow/senezh_2008_rogaine_omaps.gif',
        bounds: [[56.3487022, 36.8536377], [56.3557407, 37.2264862], [56.2190186, 36.8608475]],
        author: 'KSTLV_E',
        type: ['ROGAINE'],
        start: 'RUSSIA_ROGAINE_CHAMP',
        region: 'MSK'
    },
    {
        name: 'Яркино',
        year: 1982,
        url: './maps/moscow/yarkino_1982.webp',
        link: './original_maps/moscow/yarkino_1982_omaps.jpg',
        bounds: [[56.3330035, 36.9663334], [56.3284354, 37.0348263], [56.2963481, 36.9586945]],
        author: ['KLTKN_N','KZMN_R','LVN_B']
    },
    {
        name: 'Поварово',
        year: 1987,
        url: './maps/moscow/povarovo_1987.webp',
        link: './original_maps/moscow/povarovo_1987_omaps.jpg',
        bounds: [[56.1194815, 37.0625067], [56.1077092, 37.0901871], [56.0953588, 37.0283461]],
        author: 'PTRV_VLNTN'
    },
    {
        name: 'Жуково, пл Березки-Дачные',
        year: 2007,
        url: './maps/moscow/zhukovo_2007.webp',
        link: './original_maps/moscow/zhukovo_2007_omaps.jpg',
        bounds: [[56.1160363, 37.0407486], [56.1133326, 37.0831919], [56.0942337, 37.0333672]]
    },
    {
        name: 'Красный воин',
        year: 1984,
        url: './maps/moscow/mendeleevo_1984.webp',
        link: './original_maps/moscow/mendeleevo_1984_omaps.jpg',
        bounds: [[56.0531078, 37.204771], [56.0502798, 37.2333527], [56.0290395, 37.1985912]],
        author: 'ZKHRV_Y'
    },
    {
        name: 'Менделеево, Клушино',
        year: 2009,
        url: './maps/moscow/mendeleevo_2009.webp',
        link: './original_maps/moscow/mendeleevo_2009_omaps.jpg',
        bounds: [[56.0591705, 37.245369], [56.055648, 37.2887135], [56.0386662, 37.2403264]],
        author: 'ZUEV_A'
    },
    {
        name: 'Менделеево',
        year: 2009,
        url: './maps/moscow/mendeleevo_city_2009.webp',
        link: './original_maps/moscow/mendeleevo_city_2009_omaps.jpg',
        bounds: [[56.0413512, 37.2307563], [56.0413752, 37.2413778], [56.036005, 37.2306919]],
        type: ['CITY']
    },
    {
        name: 'Солнечногорск',
        year: 2021,
        url: './maps/moscow/solnechnogorsk_2021.webp',
        link: './original_maps/moscow/solnechnogorsk_2022_omaps.gif',
        bounds: [[56.1939198, 36.9900227], [56.1939198, 37.0050216], [56.1882007, 36.9898295]],
        type: ['CITY']
    },
    {
        name: 'Солнечногорск',
        year: 2025,
        url: './maps/moscow/solnechnogorsk_2025.webp',
        link: './original_maps/moscow/solnechnogorsk_2025_omaps.jpg',
        bounds: [[56.1942182, 36.993134], [56.1941944, 37.0052791], [56.1895858, 36.9930267]],
        author: 'SHRNN',
        type: ['CITY']
    },
    {
        name: 'Ржавки',
        year: 2000,
        url: './maps/moscow/rzhavki_2000.webp',
        link: './original_maps/moscow/rzhavki_2000_omaps.jpg',
        bounds: [[56.0210533, 37.2460556], [56.0165919, 37.2805595], [56.0003968, 37.238245]],
        owner: 'NLTV_D'
    },
    {
        name: 'Сходня',
        year: 2011,
        url: './maps/moscow/shodnya_2011.webp',
        link: './original_maps/moscow/shodnya_2011_omaps.jpg',
        bounds: [[55.9833547, 37.2818041], [55.9798733, 37.3129606], [55.9600596, 37.2727919]],
        owner: 'FSO_MSK'
    },
    {
        name: 'Соколова Пустынь',
        year: 1989,
        url: './maps/moscow/sokolova_pustyn_1989.webp',
        link: './original_maps/moscow/sokolova_pustyn_1989_omaps.jpg',
        bounds: [[54.8717176, 38.007803], [54.8681615, 38.0624771], [54.8447428, 38.0004215]],
        author: ['KLTKN_N','ORLV_V','LVN_B']
    },
    {
        name: 'Соколова Пустынь',
        year: 1997,
        url: './maps/moscow/sokolova_pustyn_1997.webp',
        link: ['./original_maps/moscow/sokolova_pustyn_1997_omaps.jpg','./original_maps/moscow/sokolova_pustyn_2002_omaps.gif'],
        bounds: [[54.8721374, 38.005743], [54.8670748, 38.0613184], [54.8454594, 38.0002499]],
        author: ['KZMN_R','KLTKN_N','ORLV_V','ORLV_A','LVN_B']
    },
    {
        name: 'Ожигово',
        year: 2020,
        url: './maps/moscow/ozhigovo_2020.webp',
        link: './original_maps/moscow/ozhigovo_2020_omaps.jpg',
        bounds: [[55.6353607, 36.3804531], [55.6329382, 36.4116096], [55.6241192, 36.3778353]],
        author: 'YURCHK'
    },
    {
        name: 'Ожигово, Федьково',
        year: 2020,
        url: './maps/moscow/ak/fedkovo_2020.webp',
        link: './original_maps/moscow/ak/fedkovo_2020_omaps.jpg',
        bounds: [[55.6446374, 36.3661623], [55.6428936, 36.3888216], [55.6261667, 36.3624716]],
        author: ['YURCHK','KLNN_O']
    },
    {
        name: 'Каблуково',
        year: 2008,
        url: './maps/moscow/ak/kablukovo_rogaine_2008.webp',
        link: './original_maps/moscow/ak/kablukovo_rogaine_2008_omaps.gif',
        bounds: [[56.1156057, 38.0959511], [55.997037, 38.3397102], [56.0187747, 37.9467773]],
        author: ['RMNV_A','JAKMV_A'],
        type: ['ROGAINE']
    },
    {
        name: 'Бабаиха',
        date: '2022-02-26',
        url: './maps/moscow/ak/babaiha_rogaine_2024.webp',
        link: 'https://rogaine.ru/results/ski2022/map.jpg',
        info: 'Лыжный Компот-рогейн.',
        bounds: [[56.1418198, 37.3172951], [56.1186202, 37.5186539], [56.0650405, 37.2872543]],
        o_gps: 12099,
        owner: 'KMPT',
        start: 'KMPT_ROGAINE',
        type: ['WINTER','ROGAINE']
    },
    {
        name: 'Бабаиха (ГАБО)',
        year: 2012,
        url: './maps/moscow/ak/babaiha_2010.webp',
        link: 'http://o-mephi.net/cup/maps/20250614_602.jpg',
        info: 'Устаревшая карта от А. Зуева на терристорию СОК ГАБО с общеизвестной лыжной трассой.',
        bounds: [[56.1199839, 37.3212433], [56.1157731, 37.3546314], [56.106728, 37.3154497]],
        author: 'ZUEV_A',
        owner: 'NLTV_D'
    },
    {
        name: 'Дмитров',
        date: '2022-07-02',
        url: './maps/moscow/ak/dmitrov_rogaine_2024.webp',
        link: 'https://rogaine.ru/results/skr2022/skr2022_map.jpg',
        info: 'Летний Компот-рогейн.',
        bounds: [[56.3833591, 37.5062943], [56.3690533, 37.6257706], [56.288203, 37.4695587]],
        o_gps: 13489,
        owner: 'KMPT',
        start: 'KMPT_ROGAINE',
        type: ['ROGAINE']
    },
    {
        name: 'Балашиха',
        date: '2022-09-03',
        url: './maps/moscow/ak/balashiha_rogaine_2024.webp',
        link: 'https://rogaine.ru/results/bkr2022/akr_2022_map.jpg',
        info: 'Осенний Компот-рогейн.',
        bounds: [[55.8869134, 37.9675484], [55.8611038, 38.1802368], [55.7990618, 37.9348469]],
        o_gps: 13970,
        owner: 'KMPT',
        start: 'KMPT_ROGAINE',
        type: ['ROGAINE']
    },
    {
        name: 'Борносово',
        date: '2022-09-24',
        url: './maps/moscow/ak/bornosovo_rogaine_2024.webp',
        link: 'https://rogaine.ru/results/fc2022/final_cup_2022_map.jpg',
        info: 'Финал Компот-Кубка.',
        bounds: [[56.3166319, 37.2795296], [56.2947288, 37.460289], [56.210332, 37.2393608]],
        o_gps: 14097,
        owner: 'KMPT',
        start: 'KMPT_ROGAINE',
        type: ['ROGAINE']
    },
    {
        name: 'Красноармейск',
        year: 2012,
        url: './maps/moscow/ak/krasnoarmeisk_rogaine_2012.webp',
        link: './original_maps/moscow/ak/krasnoarmeisk_rogaine_2012_omaps.gif',
        bounds: [[56.2258902, 38.0135536], [56.2080406, 38.1901932], [56.0842976, 37.9668617]],
        owner: 'KSTKN_SITE',
        type: ['ROGAINE']
    },
    {
        name: 'Красноармейск',
        date: '2023-07-08',
        url: './maps/moscow/ak/krasnoarmaysk_rogaine_2024.webp',
        link: 'https://rogaine.ru/results/kr2023/kr_2023_map.jpg',
        info: 'Летний Компот-рогейн.',
        bounds: [[56.1714565, 38.044281], [56.1444019, 38.2684708], [56.0679153, 38.0035973]],
        o_gps: 16726,
        owner: 'KMPT',
        start: 'KMPT_ROGAINE',
        type: ['ROGAINE']
    },
    {
        name: 'Булаково',
        year: 2024,
        url: './maps/moscow/ak/bulakovo_rogaine_2024.webp',
        link: 'https://rogaine.ru/results/ml2024/map2.jpg',
        bounds: [[56.1883679, 38.2476997], [56.1728422, 38.373785], [56.0857343, 38.207016]],
        start: 'MSK_LIGHT',
        type: ['ROGAINE']
    },
    {
        name: 'Фряново',
        year: 2024,
        url: './maps/moscow/ak/frianovo_rogaine_2024.webp',
        link: 'https://rogaine.ru/results/ml2024/map3.jpg',
        bounds: [[56.2179687, 38.367691], [56.1947674, 38.551712], [56.1468883, 38.3386803]],
        start: 'MSK_LIGHT',
        type: ['ROGAINE']
    },
    {
        name: 'Электроугли',
        date: '2023-09-02',
        url: './maps/moscow/ak/electrougli_rogaine_2024.webp',
        link: 'https://rogaine.ru/results/ar2023/akr2023_map.jpg',
        info: 'Осенний Компот-рогейн.',
        bounds: [[55.7466322, 38.1376648], [55.7200526, 38.3560181], [55.6462115, 38.1011009]],
        o_gps: 17084,
        owner: 'KMPT',
        start: 'KMPT_ROGAINE',
        type: ['ROGAINE']
    },
    {
        name: 'Ратьково',
        date: '2024-05-11',
        url: './maps/moscow/ratkovo_rogaine_2024.webp',
        link: 'https://rogaine.ru/results/sr2024/spring2024_map.jpg',
        info: 'Весенний Компот-рогейн.',
        bounds: [[56.1093844, 38.6049271], [56.0798913, 38.8449097], [55.9330486, 38.5386658]],
        o_gps: 19325,
        owner: 'KMPT',
        start: 'KMPT_ROGAINE',
        type: ['ROGAINE']
    },
    {
        name: 'Ногинск',
        date: '2024-07-06',
        url: './maps/moscow/noginsk_rogaine_2024.webp',
        link: 'https://rogaine.ru/results/nr2024/noginsk2024_map.jpg',
        info: 'Летний Компот-рогейн.',
        bounds: [[55.9385293, 38.3778191], [55.9159287, 38.5620975], [55.8348432, 38.3379936]],
        o_gps: 19955,
        owner: 'KMPT',
        start: 'KMPT_ROGAINE',
        type: ['ROGAINE']
    },
    {
        name: 'Володкино',
        date: '2020-02-29',
        url: './maps/moscow/ak/volodkino_winter_rogaine_2020.webp',
        link: 'https://rogaine.ru/results/ski2020/map.jpg',
        info: 'Лыжный Компот-рогейн.',
        bounds: [[56.2633759, 37.7054214], [56.2356228, 37.9414558], [56.1728899, 37.6719475]],
        o_gps: 7173,
        owner: 'KMPT',
        start: 'KMPT_ROGAINE',
        type: ['ROGAINE']
    },
    {
        name: 'Устинки',
        date: '2026-02-07',
        url: './maps/moscow/sz/ustinki_winter_rogaine_2026.webp',
        link: 'https://rogaine.ru/results/mw2026/mw2026_map.jpg',
        info: 'Лыжный трейл <a href="https://x-lite.run/mw2026">Московский White</a>.',
        bounds: [[56.37143, 37.7409554], [56.3450873, 38.0097771], [56.2216911, 37.6944351]],
        owner: 'KMPT',
        start: 'KMPT_ROGAINE',
        type: ['ROGAINE']
    },
    {
        name: 'Мураново',
        date: '2024-09-07',
        url: './maps/moscow/muranovo_rogaine_2024.webp',
        link: 'https://rogaine.ru/results/ar2024/muranovo_map_2024.jpg',
        info: 'Осенний Компот-рогейн.',
        bounds: [[56.2654732, 37.8214645], [56.2442084, 37.9919243], [56.1563542, 37.7787209]],
        o_gps: 20293,
        owner: 'KMPT',
        start: 'KMPT_ROGAINE',
        type: ['ROGAINE']
    },
    {
        name: 'Лосино-Петровский',
        date: '2024-10-19',
        url: './maps/moscow/losino_petrovsky_rogaine_2024.webp',
        link: 'https://rogaine.ru/results/fc2024/lp2024_map.jpg',
        info: 'Финал Компот-Кубка.',
        bounds: [[55.9426633, 38.1453896], [55.9237202, 38.3017731], [55.8587916, 38.1133747]],
        o_gps: 20839,
        owner: 'KMPT',
        start: 'KMPT_ROGAINE',
        type: ['ROGAINE']
    },
    {
        name: 'Осеевская',
        date: '2023-05-07',
        url: './maps/moscow/lr/oseevskaya_rogaine_2023.webp',
        link: 'https://rogaine.ru/results/lp2023/sr2023_map.jpg',
        info: 'Весенний Компот-рогейн.',
        bounds: [[55.9303561, 38.0866814], [55.9079433, 38.2688141], [55.8278053, 38.0478859]],
        o_gps: 15921,
        owner: 'KMPT',
        start: 'KMPT_ROGAINE',
        type: ['ROGAINE']
    },
    {
        name: 'Фрязино',
        year: 1969,
        url: './maps/moscow/ak/friazino_1969.webp',
        link: './original_maps/moscow/ak/friazino_1969_omaps.jpg',
        bounds: [[55.996461, 38.0475426], [55.9928608, 38.0926037], [55.9708684, 38.0429935]]
    },
    {
        name: 'Камшиловка',
        year: 1983,
        url: './maps/moscow/ak/friazino_1983.webp',
        link: ['./original_maps/moscow/ak/friazino_1983_omaps.gif','./original_maps/moscow/ak/friazino_1983_omaps.jpg'],
        bounds: [[55.9521313, 38.1057787], [55.9488874, 38.1416559], [55.9212675, 38.0960369]],
        author: 'KSTLV_V'
    },
    {
        name: 'Камшиловка',
        year: 2011,
        url: './maps/moscow/ak/kamshilovka_2011.webp',
        link: './original_maps/moscow/ak/kamshilovka_2011_omaps.gif',
        bounds: [[55.9516027, 38.1100273], [55.9487913, 38.1382227], [55.9324236, 38.1041479]],
        author: 'KZLV_V'
    },
    {
        name: 'Фрязино',
        year: 2007,
        url: './maps/moscow/ak/friazino_rogaine_2007.webp',
        link: './original_maps/moscow/ak/friazino_rogaine_2007_omaps.gif',
        bounds: [[56.0012607, 37.9972458], [55.9876279, 38.1495094], [55.9305484, 37.978878]],
        author: 'RMNV_A',
        type: ['ROGAINE']
    },
    {
        name: 'Фрязино, восток',
        year: 2006,
        url: './maps/moscow/ak/friazino_rogaine_2006.webp',
        link: './original_maps/moscow/ak/friazino_rogaine_2006_omaps.jpg',
        bounds: [[56.0043322, 38.0755234], [55.979177, 38.3278656], [55.906115, 38.0449677]],
        author: 'RMNV_A',
        owner: 'FRZNO',
        type: ['ROGAINE']
    },
    {
        name: 'Фрязино',
        year: 1990,
        url: './maps/moscow/ak/friazino_1990.webp',
        link: './original_maps/moscow/ak/friazino_1990_omaps.jpg',
        bounds: [[55.979153, 38.0829048], [55.9744226, 38.1301975], [55.9478301, 38.0724764]],
        author: 'KSTLV_V'
    },
    {
        name: 'Фрязино',
        year: 2002,
        url: './maps/moscow/ak/frjazino_2002.webp',
        link: './original_maps/moscow/ak/frjazino_2002_omaps.jpg',
        bounds: [[55.9515066, 38.0380154], [55.9436967, 38.1070232], [55.9261968, 38.0304623]],
        author: ['RMNV_A','ETNKO','KSTLV_V']
    },
    /*
        {
            name: 'Гребнево',
            year: 2023,
            url: './maps/moscow/ak/grebnevo_2023.webp',
            link: './original_maps/moscow/ak/grebnevo_2023_omaps.jpg',
            bounds: [[55.9590627, 38.101337], [55.9563359, 38.1245756], [55.9495723, 38.0976462]],
            type: [],
        },
        {
            name: 'Фрязино, Гребневский родник',
            year: 2021,
            url: './maps/moscow/ak/grebnevo_2021.webp',
            link: './original_maps/moscow/ak/grebnevo_2021_omaps.jpg',
            bounds: [[55.9612848, 38.0775189], [55.9597353, 38.0894709], [55.9540054, 38.0747724]],
            owner: 'KMPT',
            type: [],
        },
    */
    {
        name: 'Фрязино, юг',
        year: 2020,
        url: './maps/moscow/ak/friazino_2020.webp',
        link: './original_maps/moscow/ak/friazino_2020_omaps.jpg',
        bounds: [[55.9427834, 38.0459976], [55.9380726, 38.0810165], [55.9264132, 38.0428648]],
        author: ['SBLV_S','RMNV_A'],
        owner: 'FRZNO'
    },
    {
        name: 'Фрязино, юг',
        year: 2015,
        url: './maps/moscow/ak/friazino_2015.webp',
        link: './original_maps/moscow/ak/friazino_2015_omaps.jpg',
        bounds: [[55.9464123, 38.0545378], [55.9434804, 38.0856514], [55.9248984, 38.0482721]],
        author: ['TKMKV_K','RMNV_A','KSTLV_V','AZRV','ETNKO','GRBNVA']
    },
    {
        name: 'Фрязино, Карея',
        year: 2008,
        start: 'BNO',
        info: "БНО'2010.",
        url: './maps/moscow/ak/friazino_2008.webp',
        link: ['./original_maps/moscow/ak/friazino_2008_omaps.jpg','https://tkmgtu.ru/library/images/1/18/BNO2010B.jpg'],
        bounds: [[55.9660168, 37.9887056], [55.962606, 38.0349684], [55.9388658, 37.980938]],
        author: ['ETNKO','RMNV_A']
    },
    {
        name: 'Фрязино - Щёлково',
        year: 2024,
        url: './maps/moscow/ak/friazino_schelkovo_2024.webp',
        link: './original_maps/moscow/ak/friazino_schelkovo_2024_omaps.jpg',
        bounds: [[55.976968, 37.9897785], [55.9722613, 38.0556107], [55.9386735, 37.979393]],
        author: 'RMNV_A',
        owner: 'FRZNO'
    },
    {
        name: 'Фрязино, руч Ардыбаш',
        year: 2019,
        url: './maps/moscow/ak/friazino_ardybash_2019.webp',
        link: './original_maps/moscow/ak/friazino_ardybash_2019_omaps.jpg',
        bounds: [[55.9513144, 38.0602241], [55.9505214, 38.0728197], [55.945439, 38.0589795]],
        author: 'RMNV_A',
        owner: 'FRZNO',
        type: ['CITY']
    },
    {
        name: 'Фрязино, оз Большое',
        year: 2009,
        url: './maps/moscow/ak/friazino_big_2009.webp',
        link: './original_maps/moscow/ak/friazino_big_2009_omaps.gif',
        bounds: [[55.967578, 38.0251837], [55.9669656, 38.032136], [55.962666, 38.0238533]],
        author: 'KSTLV_E',
        owner: 'O_FRZNO'
    },
    {
        name: 'Фрязино, шк №1',
        year: 2018,
        url: './maps/moscow/ak/friazino_school_1_2018.webp',
        link: './original_maps/moscow/ak/friazino_school_1_2018_omaps.jpg',
        bounds: [[55.95839, 38.0471563], [55.9582098, 38.0505466], [55.9558915, 38.0466843]],
        author: ['KSTLV_E','RMNV_A'],
        owner: 'FRZNO',
        type: ['CITY']
    },
    {
        name: 'Фрязино, шк №2,3',
        year: 2014,
        url: './maps/moscow/ak/friazino_school_2_2014.webp',
        link: './original_maps/moscow/ak/friazino_school_2_2014_omaps.gif',
        bounds: [[55.9592188, 38.0365992], [55.9592068, 38.0433583], [55.9571648, 38.0365562]],
        author: 'RMNV_A',
        owner: 'FRZNO',
        type: ['CITY']
    },
    {
        name: 'Фрязино, шк №7',
        year: 2020,
        url: './maps/moscow/ak/friazino_school_7_2020.webp',
        link: './original_maps/moscow/ak/friazino_school_7_2020_omaps.jpg',
        bounds: [[55.9539934, 38.0590868], [55.9520472, 38.0633354], [55.9521313, 38.0563617]],
        author: 'RMNV_A',
        owner: 'FRZNO',
        type: ['CITY']
    },
    {
        name: 'Фрязино, дс №6 "Чебурашка"',
        year: 2015,
        url: './maps/moscow/ak/friazino_cheburashka_2015.webp',
        link: './original_maps/moscow/ak/friazino_cheburashka_2015_omaps.jpg',
        bounds: [[55.9559155, 38.0465126], [55.955483, 38.053143], [55.9523476, 38.0459332]],
        author: 'RMNV_A',
        owner: 'FRZNO',
        type: ['CITY']
    },
    {
        name: 'Сабурово, пансионат "Сосновый Бор"',
        year: 2008,
        url: './maps/moscow/saburovo_sos_bor_2008.webp',
        link: './original_maps/moscow/saburovo_sos_bor_2008_omaps.gif',
        bounds: [[56.0018367, 38.0349469], [56.0013927, 38.0401397], [55.998429, 38.034153]],
        author: 'RMNV_A',
        owner: 'FRZNO',
        type: ['CITY']
    },
    {
        name: 'Парк Щелково',
        year: 2005,
        url: './maps/moscow/schelkovo_2005.webp',
        link: './original_maps/moscow/schelkovo_2005_omaps.gif',
        bounds: [[55.9289016, 37.9630852], [55.9265214, 37.9805303], [55.9232152, 37.9607677]],
        author: 'RMNV_A',
        owner: 'FRZNO',
        type: ['PARK']
    },
    {
        name: 'Щелковский городской ПКиО',
        year: 2022,
        url: './maps/moscow/schelkovo_2022.webp',
        link: './original_maps/moscow/schelkovo_2022_omaps.jpg',
        bounds: [[55.9282885, 37.9622912], [55.9280241, 37.9798651], [55.9214839, 37.9623127]],
        author: 'RMNV_A',
        owner: 'FRZNO',
        type: ['PARK']
    },
    {
        name: 'Чкаловский',
        year: 2021,
        url: './maps/moscow/ak/chkalovsky_2021.webp',
        link: './original_maps/moscow/ak/chkalovsky_2021_omaps.jpg',
        bounds: [[55.9096511, 38.0479503], [55.9096752, 38.0589795], [55.9030477, 38.0481219]],
        author: 'RMNV_A',
        owner: 'FRZNO',
        type: ['CITY']
    },
    {
        name: 'Старбеево, Химкинский лес',
        year: 1991,
        url: './maps/moscow/starbeevo_1991.webp',
        link: './original_maps/moscow/starbeevo_1991_omaps.jpg',
        bounds: [[55.9494882, 37.4432087], [55.9467007, 37.4857807], [55.9108779, 37.4338531]],
        author: ['KTNKO','NDRF_V','NDRF_M']
    },
    {
        name: 'Старбеево, Химкинский лес',
        year: 2008,
        url: './maps/moscow/starbeevo_2008.webp',
        link: './original_maps/moscow/starbeevo_2008_omaps.gif',
        bounds: [[55.9329044, 37.449646], [55.929707, 37.4801588], [55.9109741, 37.4414921]]
    },
    {
        name: 'Старбеево, Химкинский лес',
        year: 2021,
        url: './maps/moscow/starbeevo_2021.webp',
        link: './original_maps/moscow/starbeevo_2021_omaps.gif',
        bounds: [[55.9199088, 37.456491], [55.9178046, 37.4755669], [55.9110462, 37.453208]]
    },
    {
        name: 'Химки, ПКиО им Толстого',
        year: 2003,
        url: './maps/moscow/ak/khimki_tolstogo_2003.webp',
        link: './original_maps/moscow/ak/khimki_tolstogo_2003_omaps.jpg',
        bounds: [[55.9000524, 37.4542379], [55.8982358, 37.4685073], [55.8924006, 37.4515772]],
        owner: 'FSO_MSK',
        author: 'SFRNV'
    },
    {
        name: 'Химки, ПКиО им Толстого',
        year: 2024,
        start: 'RUSSIA_CUP_2024',
        url: './maps/moscow/ak/khimki_tolstogo_2024.webp',
        link: './original_maps/moscow/ak/khimki_tolstogo_2024_M.png',
        o_gps: {
            'М': 20333,
            'Ж': 20334
        },
        bounds: [[55.8998238, 37.4543881], [55.8984283, 37.4681854], [55.8926773, 37.451942]],
        author: 'KZNN_O',
        owner: 'FSO_MSK'
    },
    {
        name: 'Химки, яхт-клуб',
        year: 2024,
        start: 'RUSSIA_CUP_2024',
        url: './maps/moscow/ak/khimki_2024.webp',
        link: './original_maps/moscow/ak/khimki_2024_M.png',
        o_gps: {
            'М': 20326,
            'Ж': 20327
        },
        bounds: [[55.9037815, 37.4574566], [55.9026387, 37.4682283], [55.8939407, 37.4541306]],
        author: 'KZNN_O',
        owner: 'FSO_MSK'
    },
    {
        name: 'Химки',
        year: 2022,
        url: './maps/moscow/ak/khimki_2022.webp',
        link: './original_maps/moscow/ak/khimki_2022_omaps.jpg',
        bounds: [[55.914185, 37.4551821], [55.9131989, 37.464838], [55.90484, 37.4519205]],
        type: ['CITY']
    },
    {
        name: 'Химки, Солнечная система',
        year: 2021,
        url: './maps/moscow/ak/khimki_2021.webp',
        link: './original_maps/moscow/ak/khimki_2021_omaps.gif',
        bounds: [[55.9196563, 37.4073529], [55.9182615, 37.4207425], [55.9137281, 37.4055719]],
        author: 'KZNN_O',
        type: ['CITY']
    },
    {
        name: 'Фряново',
        year: 2000,
        url: './maps/moscow/ak/frianovo_2000.webp',
        link: './original_maps/moscow/ak/frianovo_2000_omaps.jpg',
        bounds: [[56.1610145, 38.4349823], [56.1582662, 38.4642935], [56.147725, 38.4292746]],
        author: 'SFRNV'
    },
    {
        name: 'Фряново, р Ширенка',
        year: 2004,
        url: './maps/moscow/ak/frianovo_2004.webp',
        link: './original_maps/moscow/ak/frianovo_2004_omaps.jpg',
        bounds: [[56.1547289, 38.407259], [56.1526972, 38.4322786], [56.1332113, 38.4019375]],
        author: 'RMNV_A',
        owner: 'FRZNO'
    },
    {
        name: 'Глазуны',
        year: 2010,
        url: './maps/moscow/ak/glazuny_2010.webp',
        link: './original_maps/moscow/ak/glazuny_2010_omaps.gif',
        bounds: [[56.2059402, 38.4837341], [56.1959135, 38.5505104], [56.1730333, 38.4712029]],
        author: ['RMNV_A','KZLV_V'],
        owner: 'FRZNO'
    },
/*
    {
        name: 'Фряново',
        year: 2024,
        url: './maps/moscow/ak/frianovo_2024.webp',
        link: './original_maps/moscow/ak/frianovo_2024_omaps.jpg',
        bounds: [[56.1611818, 38.4294462], [56.1582901, 38.4522343], [56.1461113, 38.4247684]],
        owner: 'KMPT'
    },
*/
    {
        name: 'Фряново, Факел',
        year: 2003,
        url: './maps/moscow/ak/frianovo_city_2003.webp',
        link: './original_maps/moscow/ak/frianovo_city_2003_omaps.jpg',
        bounds: [[56.1452148, 38.4257984], [56.1437803, 38.442986], [56.1361647, 38.4230304]],
        author: 'RMNV_A',
        owner: 'FRZNO',
        type: ['CITY']
    },
    {
        name: 'Фрязино, Барские пруды, остров',
        year: 2003,
        url: './maps/moscow/ak/friazino_island_2003.webp',
        link: './original_maps/moscow/ak/friazino_island_2003_omaps.jpg',
        bounds: [[55.9521313, 38.0803084], [55.9508338, 38.0946207], [55.9424229, 38.0767465]],
        author: 'RMNV_A',
        owner: 'FRZNO'
    },
    {
        name: 'Фрязино, родник',
        year: 1986,
        url: './maps/moscow/ak/friazino_rodnik_1986.webp',
        link: './original_maps/moscow/ak/friazino_rodnik_1986_omaps.jpg',
        bounds: [[55.9603719, 38.070631], [55.9575612, 38.1136322], [55.9420864, 38.0653095]],
        author: 'KSTLV_V'
    },
    {
        name: 'Гребнево, родник',
        year: 2008,
        url: './maps/moscow/ak/grebnevo_2008.webp',
        link: './original_maps/moscow/ak/grebnevo_2008_omaps.jpg',
        bounds: [[55.9677942, 38.0778408], [55.9639031, 38.1181383], [55.9474697, 38.071146]],
        author: 'RMNV_A',
        owner: 'FRZNO'
    },
    {
        name: 'Гребнево, родник',
        year: 2009,
        url: './maps/moscow/ak/grebnevo_2009.webp',
        link: './original_maps/moscow/ak/grebnevo_2009_omaps.gif',
        bounds: [[55.9601077, 38.0771971], [55.9586783, 38.0956507], [55.9476379, 38.073163]],
        author: 'KZLV_V'
    },
    {
        name: 'Домодедово, Городской лес',
        year: 2024,
        url: './maps/moscow/ak/domodedovo_forest_2024.webp',
        bounds: [[55.4294518, 37.7282095], [55.4252632, 37.7633142], [55.4133768, 37.7223301]],
        author: 'RMNV_A',
        owner: 'FRZNO'
    },
    {
        name: 'Фряновский парк',
        year: 2000,
        info: 'Парк усадьбы Лазаревых XVIII в.',
        url: './maps/moscow/ak/frianovsky_park_2000.webp',
        link: './original_maps/moscow/ak/frianovsky_park_2000_omaps.jpg',
        bounds: [[56.1356864, 38.4452176], [56.1345744, 38.4519768], [56.1316926, 38.4434795]],
        author: 'SFRNV',
        type: ['PARK']
    },
    {
        name: 'Фрязино, Барские пруды, остров',
        year: 2020,
        url: './maps/moscow/o-mephi/20210606_172.webp',
        link: 'http://o-mephi.net/cup/maps/20210606_172.jpg',
        bounds: [[55.946953, 38.0791712], [55.9455832, 38.0908871], [55.9419422, 38.0772614]],
        author: 'TTYNN_V',
        owner: 'ERMCHNKV_A'
    },
    {
        name: 'Фрязино, Барские пруды, остров',
        year: 2024,
        url: './maps/moscow/ak/friazino_island_2024.webp',
        bounds: [[55.946953, 38.0791712], [55.9455832, 38.0908871], [55.9419422, 38.0772614]],
        author: ['TTYNN_V','JAKMV_A'],
        owner: 'O_FRZNO'
    },
    {
        name: 'Фрязино, Шишкина гора',
        year: 2024,
        url: './maps/moscow/ak/friazino_shishkina_gora_2024.webp',
        bounds: [[55.946148, 38.0922818], [55.945427, 38.0993199], [55.9429036, 38.09093]],
        author: 'JAKMV_A',
        owner: 'O_FRZNO'
    },
    {
        name: 'Кожино',
        year: 2020,
        url: './maps/moscow/ak/kozhino_2020.webp',
        bounds: [[55.9260886, 38.0759525], [55.9252591, 38.0830121], [55.9223496, 38.0746651]],
        author: 'MNKV',
        owner: 'O_FRZNO',
        type: ['PARK']
    },
    {
        name: 'Фрязинский л/п',
        year: 2024,
        url: './maps/moscow/ak/friazinsky_2024.webp',
        bounds: [[55.9525758, 38.046298], [55.9509299, 38.0602026], [55.9438649, 38.0426073]],
        author: 'JAKMV_A',
        owner: 'O_FRZNO',
        type: ['PARK']
    },
    {
        name: 'Фрязино, гимназия',
        year: 2009,
        url: './maps/moscow/ak/friazino_gymnasium_2009.webp',
        link: './original_maps/moscow/ak/friazino_gymnasium_2009_omaps.gif',
        bounds: [[55.9488995, 38.0543661], [55.9480945, 38.0531001], [55.9497645, 38.0523705]],
        author: 'KSTLV_E',
        owner: 'O_FRZNO',
        type: ['CITY']
    },
    {
        name: 'Фрязино, стадион "Олимп"',
        year: 2008,
        url: './maps/moscow/ak/friazino_olimp_2008.webp',
        link: './original_maps/moscow/ak/friazino_olimp_2008_omaps.gif',
        bounds: [[55.9619093, 38.0444527], [55.9582939, 38.0441952], [55.9619454, 38.0372858]],
        author: 'KSTLV_E',
        owner: 'O_FRZNO',
        type: ['CITY']
    },
    {
        name: 'Фрязино, стадион "Олимп"',
        year: 2014,
        url: './maps/moscow/ak/friazino_olimp_2014.webp',
        link: './original_maps/moscow/ak/friazino_olimp_2014_omaps.gif',
        bounds: [[55.962702, 38.0395174], [55.9601077, 38.0456758], [55.9602518, 38.0361271]],
        author: ['KSTLV_E','RMNV_A'],
        type: ['CITY']
    },
    {
        name: 'Новопареево',
        year: 2024,
        url: './maps/moscow/novopareevo_2024.webp',
        bounds: [[56.161134, 38.4297037], [56.1582662, 38.4532213], [56.1460755, 38.4241676]],
        author: 'JAKMV_A',
        owner: 'O_FRZNO',
        type: ['PARK']
    },
    {
        name: 'Фрязино, треугольник',
        year: 2022,
        url: './maps/moscow/ak/friazino_triangle_2022.webp',
        bounds: [[55.9466646, 38.0591941], [55.9445498, 38.0766821], [55.9398993, 38.0567265]],
        author: 'JAKMV_A',
        owner: 'O_FRZNO'
    },
    {
        name: 'Фрязино, треугольник',
        year: 2023,
        url: './maps/moscow/ak/friazino_triangle_2023.webp',
        link: './original_maps/moscow/ak/friazino_triangle_2023_omaps.jpg',
        bounds: [[55.9479983, 38.0577564], [55.9467247, 38.0770469], [55.9391782, 38.0551815]],
        author: 'RMNV_A',
        owner: 'FRZNO'
    },
    {
        name: 'Гребнево - снт "Лесная сказка"',
        year: 2023,
        url: './maps/moscow/ak/grebnevo_skazka_2023.webp',
        bounds: [[55.9690671, 38.0802011], [55.9635188, 38.1269789], [55.9522995, 38.0741072]],
        author: 'JAKMV_A',
        owner: 'O_FRZNO',
        type: ['PARK']
    },
    {
        name: 'Сутоки',
        year: 2018,
        url: './maps/moscow/sutoki_2018.webp',
        bounds: [[56.0150446, 38.1705165], [56.0144209, 38.1755805], [56.0124778, 38.1697226]],
        owner: 'O_FRZNO'
    },
    {
        name: 'Кармолино, Чернышовка',
        date: '2025-10-04',
        url: './maps/moscow/ak/chernyshovka_2025.webp',
        info: '<a href="https://t.me/moscow_orient/1745">Золотая осень.</a>',
        bounds: [[55.997433, 38.2266927], [55.9947449, 38.2488799], [55.9886962, 38.2241607]],
        author: 'LZRV',
        owner: 'O_FRZNO',
        zindex: 2
    },
    {
        name: 'Щапово',
        date: '2024-11-30',
        url: './maps/moscow/sz/schapovo_rogaine_2024.webp',
        link: './original_maps/moscow/sz/schapovo_rogaine_2024_omaps.webp',
        bounds: [[55.4448143, 37.39995], [55.4394831, 37.4545383], [55.4158859, 37.3904657]],
        info: 'Зов леса.',
        author: ['JASHPTRV','ALFRV'],
        o_gps: 21199,
        type: ['ROGAINE']
    },
    {
        name: 'Щапово',
        year: 2023,
        url: './maps/moscow/schapovo_2023.webp',
        link: './original_maps/moscow/schapovo_2023_omaps.jpg',
        bounds: [[55.4276498, 37.4155283], [55.424289, 37.4470711], [55.4167628, 37.4127388]],
        author: 'JASHPTRV'
    },
    {
        name: 'Васильевский спуск',
        year: 1999,
        url: './maps/moscow/vasilevsky_spusk_1999.webp',
        link: './original_maps/moscow/vasilevsky_spusk_1999_omaps.jpg',
        bounds: [[55.7544698, 37.6178741], [55.7531415, 37.633431], [55.7424774, 37.6143551]],
        owner: 'FSO_MSK',
        type: ['CITY']
    },
    {
        name: 'Зеленоград, парк "Рубеж"',
        year: 1989,
        url: './maps/moscow/rubezh_1989.webp',
        link: './original_maps/moscow/rubezh_1989_omaps.jpg',
        bounds: [[56.0136653, 37.2031403], [56.0097788, 37.2461414], [55.9985009, 37.2006512]],
        author: 'SMRNV_V',
        type: ['PARK']
    },
    {
        name: 'Зеленоград, 17 квартал',
        year: 2011,
        url: './maps/moscow/zelenograd_2011.webp',
        link: './original_maps/moscow/zelenograd_2011_omaps.jpg',
        bounds: [[56.0006128, 37.1925187], [55.9987889, 37.2078824], [55.9898964, 37.1889353]],
        type: ['WINTER']
    },
    {
        name: 'Коломенское',
        year: 2005,
        info: 'Первые соревнования в МИФИ.',
        url: './maps/moscow/ak/kolomenskoe_2005.webp',
        link: './original_maps/moscow/ak/kolomenskoe_2005_omaps.jpg',
        bounds: [[55.6587903, 37.6599312], [55.6581125, 37.6665401], [55.6531975, 37.6583219]],
        author: ['ZUEV_A','DDNKV','BRKN','ERMCHNKV_A']
    },
    {
        name: 'Лосиный остров',
        year: 1990,
        url: './maps/moscow/losiny_ostrov_1990.webp',
        link: './original_maps/moscow/lr/losiny_ostrov_1990_omaps.jpg',
        bounds: [[55.8517098, 37.6789427], [55.851493, 37.7284241], [55.8313003, 37.6783848]]
    },
    {
        name: 'Никольское',
        date: '2025-07-26',
        url: './maps/moscow/lr/nikolskoe_rogaine_2025.webp',
        link: 'https://rogaine.ru/results/kr2025/summer2025_map.jpg',
        info: 'Летний Компот-рогейн.',
        bounds: [[56.2268445, 38.0386162], [56.2051763, 38.2173157], [56.0946407, 37.9862595]],
        o_gps: 23122,
        owner: 'KMPT',
        start: 'KMPT_ROGAINE',
        type: ['ROGAINE']
    },
    {
        name: 'Фряново',
        date: '2025-09-06',
        url: './maps/moscow/ak/frianovo_rogaine_2025.webp',
        link: 'https://rogaine.ru/results/kr2025/summer2025_map.jpg',
        info: 'Осенний Компот-рогейн.',
        bounds: [[56.2005929, 38.4456253], [56.1781455, 38.6296463], [56.0829566, 38.3994484]],
        o_gps: 23337,
        owner: 'KMPT',
        start: 'KMPT_ROGAINE',
        type: ['ROGAINE']
    },
    {
        name: 'Ситники',
        date: '2026-07-11',
        url: './maps/moscow/sz/sitniki_rogaine_2026.webp',
        link: 'https://rogaine.ru/results/kr2026/summer_kompot_2026.jpg',
        info: 'Летний Компот-рогейн.',
        bounds: [[56.34014, 38.1713104], [56.3136806, 38.3743858], [56.1907559, 38.1112289]],
        o_gps: 25564,
        owner: 'KMPT',
        start: 'KMPT_ROGAINE',
        type: ['ROGAINE']
    },
    {
        name: 'Лосиный остров',
        year: 2007,
        url: './maps/moscow/losiny_ostrov_rogaine_2007.webp',
        link: './original_maps/moscow/lr/losiny_ostrov_rogaine_2007_omaps.jpg',
        bounds: [[55.8816662, 37.682333], [55.8663538, 37.8377724], [55.8189337, 37.6640511]],
        type: ['ROGAINE']
    },
    {
        name: 'Лосиный остров, МГСГИ',
        year: 2005,
        url: './maps/moscow/mgsgi_2005.webp',
        link: './original_maps/moscow/mgsgi_2005_omaps.jpg',
        bounds: [[55.82936, 37.7243257], [55.8291069, 37.7291965], [55.8269616, 37.7239394]],
        author: ['ZUEV_A','KBZRV']
    },
    {
        name: 'Лосиный остров',
        year: 1998,
        url: './maps/moscow/losiny_ostrov_1998.webp',
        link: './original_maps/moscow/lr/losiny_ostrov_1998_omaps.jpg',
        bounds: [[55.8799571, 37.7113008], [55.8728551, 37.7874756], [55.8524807, 37.7028465]],
        author: ['KNSTNTNV_Y','PTRV_VLNTN','IGNTNKO']
    },
    {
        name: 'Лосиный остров, МГСУ',
        year: 2006,
        url: './maps/moscow/mgsu_2006.webp',
        link: './original_maps/moscow/mgsu_2006_omaps.jpg',
        bounds: [[55.8548655, 37.690959], [55.8518062, 37.7122879], [55.8458074, 37.6879978]]
    },
    {
        name: 'Лосиный остров, МГСУ',
        year: 2005,
        url: './maps/moscow/mgsu_2005.webp',
        link: './original_maps/moscow/mgsu_2005_omaps.png',
        bounds: [[55.8567684, 37.6865816], [55.8529625, 37.7138329], [55.8464338, 37.6820326]],
        author: 'IGNTNKO',
        owner: 'NLTV_D',
        type: ['PARK']
    },
    {
        name: 'Лосиный остров, МГСУ',
        year: 2007,
        url: './maps/moscow/mgsu_2007.webp',
        link: './original_maps/moscow/mgsu_2007_omaps.jpg',
        bounds: [[55.8565035, 37.6890278], [55.8534684, 37.6974821], [55.8518785, 37.68332]],
        type: ['CITY']
    },
    {
        name: 'р Любосеевка',
        year: 2003,
        url: './maps/moscow/ljuboseevka_2003.webp',
        link: './original_maps/moscow/lr/ljuboseevka_2003_omaps.jpg',
        bounds: [[56.0011887, 38.0107212], [55.997133, 38.0459547], [55.9726695, 38.0002928]],
        author: ['PZGRV','KSTLV_V']
    },
    {
        name: 'Голиково',
        year: 2004,
        url: './maps/moscow/ak/golikovo_2004.webp',
        link: './original_maps/moscow/ak/golikovo_2004_omaps.jpg',
        bounds: [[55.9347554, 37.2759247], [55.9324957, 37.3086691], [55.9123932, 37.2702599]],
        author: ['KZMN_R','KTNKO']
    },
    {
        name: 'Северный',
        year: 2000,
        url: './maps/moscow/severnyj_2000.webp',
        link: './original_maps/moscow/severnyj_2000_omaps.jpg',
        bounds: [[55.9577053, 37.5559044], [55.9508819, 37.6095486], [55.9229026, 37.5394249]],
        author: 'PTRV_VLNTN'
    },
    {
        name: 'Литвиново',
        year: 2005,
        url: './maps/moscow/litvinovo_2005.webp',
        link: './original_maps/moscow/lr/litvinovo_2005_omaps.gif',
        bounds: [[56.0238594, 38.1174946], [56.0178152, 38.1476212], [55.9995809, 38.1010151]],
        author: 'RMNV_A'
    },
    {
        name: 'Улиткино',
        year: 2003,
        url: './maps/moscow/ulitkino_2003.webp',
        link: './original_maps/moscow/ulitkino_2003_omaps.gif',
        bounds: [[55.9453549, 38.1413984], [55.9443215, 38.1713963], [55.9307648, 38.1396389]],
        author: 'RMNV_A'
    },
    {
        name: 'Мишнево',
        year: 2005,
        url: './maps/moscow/mishnevo_2005.webp',
        link: './original_maps/moscow/mishnevo_2005_omaps.jpg',
        bounds: [[56.0099947, 38.2149124], [56.0078354, 38.2579994], [55.9809538, 38.2112217]],
        author: 'KSTLV_V'
    },
    {
        name: 'Клопово',
        year: 2000,
        url: './maps/moscow/ak/klopovo_2000.webp',
        link: './original_maps/moscow/ak/klopovo_2000_omaps.jpg',
        bounds: [[55.705547, 36.8477583], [55.7048216, 36.8705034], [55.6853269, 36.8449259]],
        author: ['ZUEV_A','SMKN_S']
    },
    {
        name: 'Пчёлка',
        year: 2002,
        url: './maps/moscow/pchelka_2000.webp',
        link: './original_maps/moscow/pchelka_2002_omaps.jpg',
        bounds: [[56.1701186, 37.5217438], [56.1650053, 37.5885201], [56.1472708, 37.5154781]],
        author: ['ZUEV_A','SMKN_S'],
        owner: 'NLTV_D'
    },
    {
        name: 'Малино',
        year: 2000,
        url: './maps/moscow/malino_2000.webp',
        link: './original_maps/moscow/malino_2000_omaps.jpg',
        bounds: [[55.9698116, 37.205801], [55.967602, 37.2411203], [55.9504493, 37.2003078]],
        owner: 'NLTV_D'
    },
    {
        name: 'ст Пионерская',
        year: 2004,
        url: './maps/moscow/pionerskaja_2004.webp',
        link: './original_maps/moscow/pionerskaja_2004_omaps.jpg',
        bounds: [[55.6999368, 37.2105217], [55.6933098, 37.2557116], [55.6670086, 37.195158]],
        author: ['GTSLNKO','MLCHK']
    },
    {
        name: 'Ватутинки',
        year: 2004,
        url: './maps/moscow/vatutinki_2000.webp',
        link: './original_maps/moscow/vatutinki_2000_omaps.jpg',
        bounds: [[55.5246954, 37.3535156], [55.5191563, 37.4128246], [55.5019998, 37.3475075]],
        author: ['GLSHKO','IVNV_ALXDR','PZDV_S','SKRPKO_S','SHRNN']
    },
    {
        name: 'Троицк',
        year: 2009,
        url: './maps/moscow/troitsk_2009.webp',
        link: './original_maps/moscow/troitsk_2009_omaps.jpg',
        bounds: [[55.4948045, 37.2714615], [55.4891397, 37.3167372], [55.4662777, 37.261076]],
        author: 'PZDV_S',
        owner: 'NLTV_D'
    },
    {
        name: 'Красная пойма',
        year: 2020,
        logo: 'lukhovitsy.gif',
        info: 'Первенство ТК Ковчег.',
        url: './maps/moscow/ak/krasnaya_poyma_2020.webp',
        link: './original_maps/moscow/ak/krasnaya_poyma_2020_omaps.jpg',
        bounds: [[55.0004628, 39.0907717], [54.9977551, 39.1176367], [54.9830071, 39.085536]]
    },
    {
        name: 'Новопареево',
        year: 1999,
        url: './maps/moscow/novopareevo_1999.webp',
        link: './original_maps/moscow/novopareevo_1999_omaps.jpg',
        bounds: [[56.1433739, 38.4451962], [56.1544421, 38.479228], [56.1283322, 38.4586716]],
        author: 'KLSNKV_V'
    },
    {
        name: 'Детский городок "Бригантина"',
        year: 2013,
        url: './maps/moscow/ak/brigantina_2013.webp',
        link: './original_maps/moscow/ak/brigantina_2013_omaps.gif',
        bounds: [[55.8329392, 37.5226235], [55.831698, 37.5266576], [55.8318908, 37.5217867]],
        owner: 'NLTV_D',
        type: ['CITY']
    },
    {
        name: 'Коптево',
        url: './maps/moscow/ak/koptevo.webp',
        link: './original_maps/moscow/ak/koptevo_omaps.gif',
        bounds: [[55.8262023, 37.5238252], [55.8258407, 37.5300264], [55.8222246, 37.5232029]],
        owner: 'NLTV_D',
        type: ['CITY']
    },
    {
        name: 'Центр образования № 1679',
        url: './maps/moscow/school_1679_2008.webp',
        link: './original_maps/moscow/school_1679_2008_omaps.gif',
        bounds: [[55.8291551, 37.518568], [55.8291069, 37.522366], [55.8273232, 37.5184178]],
        logo: 'schukino.jpg',
        owner: 'NLTV_D',
        type: ['CITY']
    },
    {
        name: 'Школа № 1189, Курчатовская',
        year: 1999,
        url: './maps/moscow/school_1189_1999.webp',
        link: './original_maps/moscow/school_1189_1999_omaps.png',
        bounds: [[55.8038619, 37.4643016], [55.8066717, 37.4678636], [55.8020528, 37.4685073]],
        logo: 'schukino.jpg',
        owner: 'NLTV_D',
        type: ['CITY']
    },
    {
        name: 'Школа № 154',
        year: 1999,
        url: './maps/moscow/school_154_1999.webp',
        link: './original_maps/moscow/school_154_1999_omaps.png',
        bounds: [[55.8020528, 37.4685073], [55.8046216, 37.4717474], [55.8009915, 37.470932]],
        logo: 'schukino.jpg',
        owner: 'NLTV_D',
        type: ['CITY']
    },
    {
        name: 'Школа № 1874',
        year: 1999,
        url: './maps/moscow/school_1874_1999.webp',
        link: './original_maps/moscow/school_1874_1999_omaps.png',
        bounds: [[55.8045493, 37.4624991], [55.8045734, 37.4706101], [55.7976626, 37.4630356]],
        logo: 'schukino.jpg',
        owner: 'NLTV_D',
        type: ['CITY']
    },
    {
        name: 'Школа № 1210',
        year: 1999,
        url: './maps/moscow/school_1210_1999.webp',
        link: './original_maps/moscow/school_1210_1999_omaps.png',
        bounds: [[55.8021855, 37.455225], [55.8019322, 37.4586582], [55.799508, 37.45471]],
        logo: 'schukino.jpg',
        owner: 'NLTV_D',
        type: ['CITY']
    },
    {
        name: 'Школа № 702, Курчатовская',
        year: 1999,
        url: './maps/moscow/school_702_1999.webp',
        link: './original_maps/moscow/school_702_1999_omaps.png',
        bounds: [[55.7955638, 37.4854374], [55.7953226, 37.4899864], [55.793103, 37.4849224]],
        logo: 'schukino.jpg',
        owner: 'NLTV_D',
        type: ['CITY']
    },
    {
        name: 'Школа № 809',
        url: './maps/moscow/school_809.webp',
        link: './original_maps/moscow/school_809_omaps.png',
        bounds: [[55.7192066, 37.4017525], [55.7185298, 37.407074], [55.7164147, 37.4002934]],
        owner: 'NLTV_D',
        type: ['CITY']
    },
    {
        name: 'Школа № 723',
        url: './maps/moscow/school_723.webp',
        link: './original_maps/moscow/school_723_omaps.png',
        bounds: [[55.7920897, 37.8103495], [55.7921621, 37.8147697], [55.7912091, 37.8102422]],
        owner: 'NLTV_D',
        type: ['CITY']
    },
    {
        name: 'ДТДМ Хорошево',
        year: 1999,
        url: './maps/moscow/ak/khoroshevo_1999.webp',
        link: './original_maps/moscow/ak/khoroshevo_1999_omaps.png',
        bounds: [[55.7849716, 37.4780345], [55.7843321, 37.481811], [55.7834393, 37.4772835]],
        author: 'TLNV_P',
        owner: 'NLTV_D',
        type: ['CITY']
    },
    {
        name: 'ДТДМ Хорошево',
        year: 2009,
        url: './maps/moscow/ak/khoroshevo_2009.webp',
        link: './original_maps/moscow/ak/khoroshevo_2009_omaps.gif',
        bounds: [[55.7847062, 37.4791503], [55.7844287, 37.4814463], [55.7834031, 37.4783349]],
        author: 'KSTLV_E',
        owner: 'ISKTL',
        type: ['CITY']
    },
    {
        name: 'Школа №138',
        year: 2009,
        url: './maps/moscow/school_138_2009.webp',
        link: './original_maps/moscow/school_138_2009_omaps.gif',
        bounds: [[55.7823654, 37.4643016], [55.782112, 37.4656534], [55.780857, 37.463572]],
        author: 'KSTLV_E',
        owner: 'ISKTL',
        type: ['CITY']
    },
    {
        name: 'Школа №1210',
        year: 2009,
        url: './maps/moscow/school_1210_2009.webp',
        link: './original_maps/moscow/school_1210_2009_omaps.gif',
        bounds: [[55.8007382, 37.4555898], [55.8010398, 37.4572849], [55.7997251, 37.4561906]],
        author: 'KSTLV_E',
        owner: 'ISKTL',
        type: ['CITY']
    },
    {
        name: 'Школа №1517',
        year: 2008,
        url: './maps/moscow/school_1517_2008.webp',
        link: './original_maps/moscow/school_1517_2008_omaps.gif',
        bounds: [[55.7856956, 37.4512339], [55.7856956, 37.4546671], [55.7843804, 37.4510837]],
        author: 'KSTLV_E',
        owner: 'ISKTL',
        type: ['CITY']
    },
    {
        name: 'Реабилитационно-образовательный центр № 76',
        url: './maps/moscow/ak/internat_76.webp',
        link: './original_maps/moscow/ak/internat_76_omaps.gif',
        bounds: [[55.8453616, 37.5070667], [55.8452171, 37.5121093], [55.84241, 37.5069809]],
        owner: 'NLTV_D',
        type: ['CITY']
    },
    {
        name: 'Московский кадетский корпус',
        url: './maps/moscow/ak/kadety.webp',
        link: './original_maps/moscow/ak/kadety_omaps.gif',
        bounds: [[55.8450364, 37.5453901], [55.8438557, 37.5460982], [55.8445183, 37.5427723]],
        owner: 'NLTV_D',
        type: ['CITY']
    },
    {
        name: 'М "Нагорная", с/к КАНТ',
        year: 2010,
        url: './maps/moscow/nagorna_kant_2010.webp',
        link: './original_maps/moscow/nagorna_kant_2010_omaps.gif',
        bounds: [[55.6829076, 37.6064801], [55.6819761, 37.618196], [55.6732044, 37.6039267]],
        owner: 'NLTV_D',
        type: ['CITY']
    },
    {
        name: '"Нагорная", с/к КАНТ',
        year: 2023,
        url: './maps/moscow/lr/nagorna_kant_2023.webp',
        link: './original_maps/moscow/lr/nagorna_kant_2023_omaps.gif',
        bounds: [[55.6840447, 37.6019955], [55.6824116, 37.6186037], [55.6738457, 37.5988841]],
        author: 'KLZHNY',
        owner: 'OPEN_BAND',
        type: ['CITY']
    },
    {
        name: 'Ястребки, гост "Горизонт"',
        year: 2023,
        url: './maps/moscow/ak/gorizont_2023.webp',
        link: './original_maps/moscow/ak/gorizont_2023_omaps.gif',
        bounds: [[55.680972, 36.7643952], [55.6810324, 36.7720342], [55.6772335, 36.7642021]],
        owner: 'NLTV_D',
        type: ['CITY']
    },
    {
        name: 'Морозки',
        year: 2000,
        url: './maps/moscow/morozki_2000.webp',
        link: './original_maps/moscow/morozki_2000_omaps.gif',
        bounds: [[56.2479759, 37.4409771], [56.2367677, 37.5432873], [56.2102365, 37.4263859]],
        logo: 'mgsyt.jpg',
        owner: 'NLTV_D'
    },
    {
        name: 'Григорово',
        year: 2005,
        url: './maps/moscow/ak/grigorovo_2005.webp',
        link: './original_maps/moscow/ak/grigorovo_2005_omaps.gif',
        bounds: [[56.2610877, 37.4520063], [56.2588709, 37.4778843], [56.2426822, 37.4477577]],
        logo: 'mgsyt.jpg',
        owner: 'NLTV_D'
    },
    {
        name: 'Люберецкий парк',
        year: 2022,
        url: './maps/moscow/ljubertsy_2022.webp',
        link: './original_maps/moscow/lr/ljubertsy_2022_omaps.gif',
        bounds: [[55.6789637, 37.8897643], [55.6788185, 37.9027891], [55.6706148, 37.8895926]],
        owner: 'NLTV_D',
        type: ['PARK']
    },
    {
        name: 'Ногинск, Центральный парк',
        year: 2022,
        url: './maps/moscow/noginsk_2022.webp',
        link: './original_maps/moscow/noginsk_2022_omaps.gif',
        bounds: [[55.8540224, 38.4164429], [55.8519748, 38.4324074], [55.8445786, 38.4127951]],
        owner: 'NLTV_D',
        type: ['PARK']
    },
    {
        name: 'Ногинск, парк Автомобилист',
        year: 2024,
        url: './maps/moscow/noginsk_avtomobilist_2024.webp',
        link: './original_maps/moscow/noginsk_avtomobilist_2024_omaps.jpg',
        bounds: [[55.8518423, 38.4388876], [55.849614, 38.4570408], [55.8429763, 38.4353042]],
        author: 'RMNV_A',
        owner: 'OKHTNKV',
        type: ['PARK']
    },
    {
        name: 'Покровское',
        year: 2024,
        url: './maps/moscow/pokrovskoe_2024.webp',
        link: './original_maps/moscow/pokrovskoe_2024_omaps.gif',
        bounds: [[55.6616348, 36.8101645], [55.6618527, 36.8227816], [55.6550256, 36.8101645]],
        owner: 'NLTV_D',
        type: ['PARK']
    },
    {
        name: 'Наро-Фоминск, Латышская',
        year: 2009,
        url: './maps/moscow/lr/latjishskaya_2009.webp',
        link: './original_maps/moscow/lr/latjishskaya_2009_omaps.gif',
        bounds: [[55.3758187, 36.7047644], [55.3710148, 36.7509413], [55.3500851, 36.6964388]],
        author: 'FLVSKY_S',
        owner: 'NLTV_D'
    },
    {
        name: 'Одинцово',
        year: 2023,
        start: 'BNO',
        o_gps: 11519,
        url: './maps/moscow/odintsovo_2023.webp',
        link: ['./original_maps/moscow/odintsovo_2023_omaps.gif','https://tkmgtu.ru/library/images/3/34/Bno2021v.png','https://tkmgtu.ru/library/images/8/8e/Bno2021zn.png'],
        bounds: [[55.7389019, 37.202282], [55.7300584, 37.2837353], [55.6954383, 37.1880341]],
        author: ['ZUEV_A','LUK_V','ZHRDV_V','KLNN_B'],
        owner: 'NLTV_D'
    },
    {
        name: 'Власьево, Залесный овраг',
        year: 1998,
        url: './maps/moscow/zalesny_ovrag_1998.webp',
        link: './original_maps/moscow/zalesny_ovrag_1998_omaps.jpg',
        bounds: [[54.9239853, 38.7750435], [54.9209271, 38.8020802], [54.9129352, 38.7716961]],
        author: 'SMKN_S',
        owner: 'NLTV_D'
    },
    {
        name: 'Сергиев посад, Пересвет',
        year: 2010,
        url: './maps/moscow/peresvet_2010.webp',
        link: './original_maps/moscow/peresvet_2010_omaps.gif',
        bounds: [[56.4193375, 38.1400681], [56.4196698, 38.1845284], [56.4010082, 38.1401539]],
        author: 'BRTNK_V',
        owner: 'NLTV_D',
        type: ['WINTER']
    },
    {
        name: 'Раменское, оз Пионер',
        year: 2012,
        url: './maps/moscow/ramenskoe_2012.webp',
        link: './original_maps/moscow/ramenskoe_2012_omaps.gif',
        bounds: [[55.5719276, 38.2364559], [55.5708479, 38.2467556], [55.5643083, 38.2341599]],
        author: ['ZUEV_A','SMKN_S','NSNV'],
        owner: 'NLTV_D',
        logo: 'o-ramenskoe.webp',
        type: ['CITY']
    },
    {
        name: 'Сергиев посад, Скитские пруды',
        year: 2023,
        url: './maps/moscow/skitskie_prudy_2023.webp',
        link: './original_maps/moscow/skitskie_prudy_2023_omaps.gif',
        bounds: [[56.3052891, 38.1642294], [56.3042296, 38.1742287], [56.3004796, 38.1625128]],
        author: 'LNTV',
        owner: 'NLTV_D',
        type: ['PARK']
    },
    {
        name: 'Бутовский л/п',
        year: 2001,
        url: './maps/moscow/ak/butovsky_2001.webp',
        link: './original_maps/moscow/ak/butovsky_2001_omaps.jpg',
        bounds: [[55.6095053, 37.4780989], [55.6059661, 37.5180531], [55.5764282, 37.4685717]],
        author: ['MLNKV_V','DBRTSV_V','KLNN_B'],
        areas: [50,30,20],
        owner: 'NLTV_D',
        type: ['PARK']
    },
    {
        name: 'Красноармейск',
        year: 2023,
        url: './maps/moscow/ak/krasnoarmeisk_2023.webp',
        link: './original_maps/moscow/ak/krasnoarmeisk_2023_omaps.jpg',
        bounds: [[56.1579555, 38.0905867], [56.1499004, 38.1565046], [56.1173522, 38.0751801]],
        author: 'LZRV',
        owner: 'LZRV'
    },
    {
        name: 'Починки, 179 спасательный центр МЧС',
        year: 2002,
        hidden: true,
        url: './maps/moscow/pochinki_mchs_2002.webp',
        link: './original_maps/moscow/pochinki_mchs_2002_omaps.gif',
        bounds: [[55.9251388, 38.4606457], [55.9214118, 38.4958792], [55.9097714, 38.4568691]],
        owner: 'NLTV_D'
    },
    {
        name: 'Ильинское, школа №25',
        year: 2009,
        url: './maps/moscow/ak/ilinskoe_school_25.webp',
        link: './original_maps/moscow/ak/ilinskoe_school_25_omaps.gif',
        bounds: [[55.6120262, 38.0958867], [55.6116141, 38.0976248], [55.610693, 38.0946207]],
        author: 'KSTLV_E',
        type: ['CITY']
    },
    {
        name: 'Загорново',
        year: 1987,
        url: './maps/moscow/zagornogo_1987.webp',
        link: './original_maps/moscow/zagornogo_1987_omaps.jpg',
        bounds: [[55.5267116, 38.2864523], [55.522509, 38.3400965], [55.5089994, 38.2816887]]
    },
    {
        name: 'Верзилово',
        year: 2006,
        url: './maps/moscow/verzilovo_2006.webp',
        link: './original_maps/moscow/verzilovo_2006_omaps.gif',
        bounds: [[55.0272842, 38.1067014], [55.0267307, 38.1198335], [55.017665, 38.1058431]],
        author: 'NKRSV_S'
    },
    {
        name: 'Хрипань',
        year: 1,
        url: './maps/moscow/ak/khripan.webp',
        link: ['./original_maps/moscow/ak/khripan_omaps.jpg','./original_maps/moscow/ak/khripan_retro_omaps.jpg'],
        bounds: [[55.663644, 38.1647873], [55.6594319, 38.234396], [55.6389215, 38.1589079]],
        author: ['KRNVA','BLBN','KSHRN','YTKN']
    },
    {
        name: 'Глинково',
        year: 2023,
        url: './maps/moscow/ak/glinkovo_2023.webp',
        link: './original_maps/moscow/ak/glinkovo_2023_omaps.jpg',
        bounds: [[56.3063247, 38.1911373], [56.3024915, 38.2251263], [56.2932284, 38.1859875]],
        author: 'LNTV'
    },
    {
        name: 'Сергиев Посад, Островок',
        year: 2021,
        url: './maps/moscow/ostrovok_2021.webp',
        link: './original_maps/moscow/ostrovok_2021_omaps.jpg',
        bounds: [[56.3018963, 38.1627059], [56.3005272, 38.1751728], [56.2954194, 38.160882]],
        type: ['PARK']
    },
    {
        name: 'Сергиев Посад, Козьи горки',
        year: 2012,
        url: './maps/moscow/ak/kozii_gorki_2012.webp',
        link: './original_maps/moscow/ak/kozii_gorki_2012_omaps.jpg',
        bounds: [[56.3202971, 38.1611824], [56.3202733, 38.1870604], [56.3072056, 38.1613541]],
        author: 'MTN_Y'
    },
    {
        name: 'Зайцево',
        year: 2015,
        url: './maps/moscow/zaitsevo_2015.webp',
        link: './original_maps/moscow/zaitsevo_2015_omaps.gif',
        bounds: [[54.8303588, 37.5292969], [54.8208161, 37.6165867], [54.7884628, 37.5173664]],
        owner: 'KSTKN_SITE'
    },
    {
        name: 'Ратмино',
        year: 2009,
        url: './maps/moscow/ratmino_2009.webp',
        link: './original_maps/moscow/ratmino_2009_omaps.jpg',
        bounds: [[56.7863535, 37.2104359], [56.7838617, 37.2435665], [56.7623213, 37.2053719]],
        author: 'RZNKV_A',
        owner: 'DBNA',
        type: ['PARK']
    },
    {
        name: 'Ратмино, профилакторий',
        year: 2013,
        url: './maps/moscow/ratmino_2013.webp',
        link: './original_maps/moscow/ratmino_2013_omaps.jpg',
        bounds: [[56.7824511, 37.2356486], [56.7818986, 37.2418499], [56.7773491, 37.2339535]],
        author: 'RZNKV_A',
        owner: 'DBNA',
        type: ['CITY']
    },
    {
        name: 'Дубна, Комсомольская наб',
        year: 2012,
        url: './maps/moscow/ak/dubna_nab_2012.webp',
        link: './original_maps/moscow/ak/dubna_nab_2012_omaps.jpg',
        bounds: [[56.7490875, 37.1838069], [56.747558, 37.1851802], [56.7443576, 37.1672416]],
        author: 'RZNKV_A',
        owner: 'DBNA',
        type: ['PARK']
    },
    {
        name: 'Дубна, парк Белиловского',
        year: 2011,
        url: './maps/moscow/ak/dubna_belilovskogo_2011.webp',
        link: './original_maps/moscow/ak/dubna_belilovskogo_2011_omaps.jpg',
        bounds: [[56.7558167, 37.1235752], [56.7566872, 37.1279955], [56.7506523, 37.1268797]],
        author: 'RZNKV_A',
        owner: 'DBNA',
        type: ['PARK']
    },
    {
        name: 'Дубна, институт',
        url: './maps/moscow/ak/dubna_institute.webp',
        link: './original_maps/moscow/ak/dubna_institute_omaps.jpg',
        bounds: [[56.7677546, 37.2038698], [56.7662023, 37.2312927], [56.7481816, 37.1980333]],
        author: 'RZNKV_A',
        owner: 'DBNA',
        type: ['PARK']
    },
    {
        name: 'Дубна, парк на ул Балдина',
        year: 2013,
        url: './maps/moscow/ak/dubna_baldina_2013.webp',
        link: './original_maps/moscow/ak/dubna_baldina_2013_omaps.jpg',
        bounds: [[56.7584869, 37.2059941], [56.7578047, 37.2147059], [56.7501935, 37.2034407]],
        author: 'RZNKV_A',
        owner: 'DBNA',
        type: ['PARK']
    },
    {
        name: 'Дубна, Александровский л/п',
        year: 2013,
        url: './maps/moscow/ak/dubna_aleksandrovsky_2013.webp',
        link: './original_maps/moscow/ak/dubna_aleksandrovsky_2013_omaps.jpg',
        bounds: [[56.7401801, 37.2018099], [56.7376381, 37.2292328], [56.732789, 37.1995354]],
        author: 'RZNKV_A',
        owner: 'DBNA',
        type: ['PARK']
    },
    {
        name: 'Дубна, Парк семейного отдыха',
        year: 2011,
        url: './maps/moscow/ak/dubna_semejny_2011.webp',
        link: './original_maps/moscow/ak/dubna_semejny_2011_omaps.jpg',
        bounds: [[56.7394152, 37.152822], [56.7384031, 37.1623492], [56.7354608, 37.151556]],
        author: 'RZNKV_A',
        owner: 'DBNA',
        type: ['PARK']
    },
    {
        name: 'Дубна, шк №8',
        year: 2010,
        url: './maps/moscow/ak/dubna_school_8_2010.webp',
        link: './original_maps/moscow/ak/dubna_school_8_2010_omaps.jpg',
        bounds: [[56.7634974, 37.1923685], [56.7618743, 37.2096205], [56.7506288, 37.1883345]],
        author: 'RZNKV_A',
        owner: 'DBNA',
        type: ['CITY']
    },
    {
        name: 'Дубна, шк №10, оз Суглинок',
        url: './maps/moscow/ak/dubna_suglinok.webp',
        link: './original_maps/moscow/ak/dubna_suglinok_omaps.jpg',
        bounds: [[56.7573695, 37.1396685], [56.7548639, 37.1694088], [56.7472874, 37.1365356]],
        author: 'RZNKV_A',
        owner: 'DBNA'
    },
    {
        name: 'Дубна, шк №10',
        year: 2013,
        url: './maps/moscow/ak/dubna_school_10_2013.webp',
        link: './original_maps/moscow/ak/dubna_school_10_2013.jpg',
        bounds: [[56.7514523, 37.1378875], [56.7498641, 37.1560836], [56.7443105, 37.1357846]],
        author: 'RZNKV_A',
        owner: 'DBNA',
        type: ['CITY']
    },
    {
        name: 'Дубна, шк №7',
        year: 2012,
        url: './maps/moscow/ak/dubna_school_7_2012.webp',
        link: './original_maps/moscow/ak/dubna_school_7_2012_omaps.jpg',
        bounds: [[56.731812, 37.1490884], [56.7337777, 37.1538091], [56.7281629, 37.1541524]],
        author: 'RZNKV_A',
        owner: 'DBNA',
        type: ['CITY']
    },
    {
        name: 'Дубна, стдн "Наука"',
        year: 2013,
        url: './maps/moscow/ak/dubna_stadium_2013.webp',
        link: './original_maps/moscow/ak/dubna_stadium_2013_omaps.jpg',
        bounds: [[56.7439222, 37.1836996], [56.7438987, 37.1870041], [56.7414746, 37.1835279]],
        author: 'RZNKV_A',
        owner: 'DBNA',
        type: ['CITY']
    },
    {
        name: 'Дубна, спорткомплекс "Олимп"',
        year: 2013,
        url: './maps/moscow/ak/dubna_olimp_2013.webp',
        link: './original_maps/moscow/ak/dubna_olimp_2013_omaps.jpg',
        bounds: [[56.7435221, 37.2216797], [56.7429337, 37.2284603], [56.73998, 37.2206068]],
        author: 'RZNKV_A',
        owner: 'DBNA',
        type: ['CITY']
    },
    {
        name: 'Дубна, Чёрная р',
        year: 2012,
        url: './maps/moscow/ak/dubna_black_2012.webp',
        link: './original_maps/moscow/ak/dubna_black_2012_omaps.jpg',
        bounds: [[56.7390974, 37.1679068], [56.7370261, 37.1923256], [56.7266443, 37.163744]],
        author: 'RZNKV_A',
        owner: 'DBNA'
    },
    {
        name: 'Дубна, Южная канава',
        year: 2012,
        url: './maps/moscow/ak/dubna_south_2012.webp',
        link: './original_maps/moscow/ak/dubna_south_2012_omaps.jpg',
        bounds: [[56.75157, 37.1148849], [56.7503582, 37.1297121], [56.7407214, 37.1114087]],
        author: 'RZNKV_A',
        owner: 'DBNA'
    },
    {
        name: 'Дубна, Большая Волга',
        year: 2012,
        url: './maps/moscow/ak/dubna_big_volga_2012.webp',
        link: './original_maps/moscow/ak/dubna_big_volga_2012_omaps.jpg',
        bounds: [[56.7276331, 37.1529293], [56.7207576, 37.1623492], [56.7246194, 37.1453547]],
        author: 'RZNKV_A',
        owner: 'DBNA'
    },
    {
        name: 'Святье, ДОЛ "Сосоновый Бор"',
        year: 2011,
        url: './maps/moscow/sviatie_2011.webp',
        link: './original_maps/moscow/sviatie_2011_omaps.jpg',
        bounds: [[56.8284317, 37.2637796], [56.8262949, 37.2839284], [56.818357, 37.2602606]],
        author: 'RZNKV_A',
        owner: 'DBNA'
    },
    {
        name: 'о Липня',
        url: './maps/moscow/lipnya.webp',
        link: './original_maps/moscow/lr/lipnya_omaps.jpg',
        bounds: [[56.7694126, 37.016716], [56.7682249, 37.0368862], [56.7635091, 37.0155787]],
        author: 'RZNKV_A',
        owner: 'DBNA'
    },
    {
        name: 'Дубна, Большая Волга, лицей',
        year: 2012,
        url: './maps/moscow/ak/dubna_big_volga_lyceum_2012.webp',
        link: './original_maps/moscow/ak/dubna_big_volga_lyceum_2012_omaps.jpg',
        bounds: [[56.7263617, 37.1436596], [56.7273388, 37.1461272], [56.7248901, 37.1456552]],
        author: 'RZNKV_A',
        owner: 'DBNA',
        type: ['CITY']
    },
    {
        name: 'ДОЛ "Дружба"',
        year: 2021,
        url: './maps/moscow/ak/dol_druzhba_2021.webp',
        link: './original_maps/moscow/ak/dol_druzhba_2021_omaps.jpg',
        bounds: [[56.0438802, 37.92032], [56.0432569, 37.9279804], [56.0384384, 37.9183888]],
        author: 'LZRV',
        owner: 'SKBLV',
        type: ['CITY']
    },
    {
        name: 'ДОЛ "Солнечный"',
        year: 2018,
        url: './maps/moscow/ak/dol_solnechny_2018.webp',
        link: './original_maps/moscow/ak/dol_solnechny_2018_omaps.jpg',
        bounds: [[56.4075147, 38.8900137], [56.4054964, 38.9068151], [56.3954269, 38.8851857]],
        author: 'LZRV',
        owner: 'DYTS_ALXNDRV',
        type: ['CITY']
    },
    {
        name: 'Баррикадная',
        date: '2025-08-02',
        excluded: true,
        area: .257,
        url: './maps/moscow/ak/barrikadnaya_obsw_2025.webp',
        link: './original_maps/moscow/ak/barrikadnaya_obsw_2025_omaps.png',
        info: 'Гонка преследования',
        bounds: [[55.7698383, 37.5779629], [55.7699711, 37.5867391], [55.7630663, 37.5781989]],
        author: ['MSTPNV','DRN_E','ALDBV'],
        areas: [90,5,5],
        owner: 'OPEN_BAND',
        start: 'OBSW',
        type: ['CITY','SPRINT']
    },
    {
        name: 'МЕГА Белая Дача',
        date: '2025-08-02',
        area: .212,
        url: './maps/moscow/ak/belaya_dacha_mega_obsw_2025.webp',
        link: ['./original_maps/moscow/ak/belaya_dacha_mega_obsw_2025_omaps.png','./original_maps/moscow/ak/belaya_dacha_mega_obsw_2025_m_omaps.png'],
        info: 'Ориентирование в помещении',
        bounds: [[55.6599887, 37.8446817], [55.6587419, 37.8496599], [55.6574104, 37.8426647]],
        author: ['MSTPNV','DRN_E','ALDBV'],
        areas: [45,35,20],
        owner: 'OPEN_BAND',
        start: 'OBSW',
        type: ['INDOOR']
    },
    {
        name: 'Патриаршие пруды, Якиманка',
        year: 2026,
        area: 8.2,
        url: './maps/moscow/lr/patriki_yakimanka_2026.webp',
        link: './original_maps/moscow/lr/patriki_yakimanka_2026_omaps.webp',
        bounds: [[55.7724213, 37.5806236], [55.7654204, 37.640233], [55.724935, 37.5630713]],
        author: ['MNKV','MSTPNV','KPTNV_M','DRN_E','PRZRV','ALDBV'],
        owner: ['ERMCHNKV_A','OPEN_BAND'],
        type: ['CITY','SPRINT']
    },
    {
        name: 'Старый Арбат',
        date: '2025-08-03',
        excluded: true,
        area: .983,
        url: './maps/moscow/ak/arbat_obsw_2025.webp',
        link: './original_maps/moscow/ak/arbat_obsw_2025_omaps.gif',
        info: 'Нокаут-спринт',
        bounds: [[55.7580197, 37.5821686], [55.7582612, 37.600193], [55.7462216, 37.5825977]],
        author: ['MSTPNV','DRN_E','PRZRV','ALDBV'],
        areas: [45,45,5,5],
        owner: 'OPEN_BAND',
        start: 'OBSW',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Арбат',
        year: 2025,
        excluded: true,
        area: .3,
        url: './maps/moscow/ak/arbat_2025.webp',
        link: 'http://o-mephi.net/cup/maps/20250412_951.jpg',
        info: '<a href="https://t.me/openband_orient/1391">Нокаут-Спринт</a>',
        bounds: [[55.7581404, 37.583456], [55.7583095, 37.5980258], [55.7526464, 37.5836062]],
        author: ['MSTPNV','PRZRV'],
        areas: [80, 20],
        owner: 'PRZRV',
        logo: 'arbat_2025.jpg',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Красные Ворота',
        year: 2025,
        url: './maps/moscow/o-mephi/20250424_643.webp',
        link: 'http://o-mephi.net/cup/maps/20250424_643.jpg',
        info: '<a href="https://t.me/moscoworienteering/2823">MOSCOW CITY RACE</a>',
        bounds: [[55.7725179, 37.6461768], [55.7702608, 37.6654673], [55.7619677, 37.6423144]],
        author: 'MNKV',
        owner: 'ERMCHNKV_A',
        logo: 'msk_city_race.png',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Жуковский городской ПКиО, стд Метеор',
        year: 2015,
        url: './maps/moscow/sz/zhukovsky_meteor_2015.webp',
        link: './original_maps/moscow/sz/zhukovsky_meteor_2015_omaps.gif',
        bounds: [[55.5937705, 38.1129026], [55.589187, 38.1414843], [55.5762826, 38.1048346]],
        author: 'MLNKV_V',
        owner: 'KRLV_N',
        type: ['PARK']
    },
    {
        name: 'Жуковский городской ПКиО, Треугольный лес',
        year: 2024,
        url: './maps/moscow/zhukovsky_2024.webp',
        link: './original_maps/moscow/zhukovsky_2024_omaps.gif',
        bounds: [[55.5883867, 38.1229234], [55.5860704, 38.1404972], [55.5814376, 38.1202626]],
        author: 'SDV_G',
        owner: 'SDV_G',
        type: ['PARK']
    },
    {
        name: 'Спортгородок МГУ',
        year: 2024,
        url: './maps/moscow/msu_sport_2024.webp',
        link: './original_maps/moscow/msu_sport_2024_omaps.gif',
        bounds: [[55.7048216, 37.5319791], [55.7033345, 37.5448751], [55.6946885, 37.5278378]],
        author: 'SDV_G',
        owner: 'SDV_G',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Звенигородская биостанция МГУ и карьер Сима',
        year: 2021,
        url: './maps/moscow/zbs_msu_2021.webp',
        link: './original_maps/moscow/zbs_msu_2021_omaps.gif',
        bounds: [[55.7149038, 36.6949797], [55.7083277, 36.7609406], [55.6625547, 36.6789722]],
        author: 'SDV_G',
        owner: 'SDV_G',
        type: ['ROGAINE']
    },
    {
        name: 'Берёзки',
        date: '2026-05-17',
        logo: 'malakhit.jpg',
        about: 'https://buyrun.ru/event/126',
        o_gps: 22758,
        url: './maps/moscow/ak/berezki_rogaine_2026.webp',
        link: './original_maps/moscow/ak/berezki_rogaine_2026_omaps.webp',
        bounds: [[56.1359375, 36.9415283], [56.1456451, 37.0170593], [56.0956222, 36.9586945]],
        author: 'SKLV_V',
        owner: 'SKLV_V',
        type: ['ROGAINE']
    },
    {
        name: 'Куркино',
        year: 2016,
        url: './maps/moscow/ak/kurkino_2016.webp',
        link: './original_maps/moscow/ak/kurkino_2016_omaps.jpg',
        bounds: [[55.894807, 37.3858309], [55.8937963, 37.4007225], [55.8891517, 37.3848867]],
        author: ['SVIR_A','SVIR_M'],
        type: ['CITY']
    },
    {
        name: 'Восточный',
        year: 2024,
        info: '<a href="https://mosorient.ru/novosti/kubok-klubov-2024/">Кубок клубов</a>',
        url: './maps/moscow/vostochny_2024.webp',
        link: './original_maps/moscow/vostochny_2024_omaps.gif',
        bounds: [[55.8180778, 37.8783488], [55.8160765, 37.8981328], [55.8045372, 37.8736711]],
        logo: 'kk_msk.webp',
        author: 'ZHRDV_V',
        owner: 'FSO_MSK'
    },
    {
        name: 'Волочаевская',
        year: 2016,
        info: 'Слёт ориентировщиков.',
        url: './maps/moscow/volochaevskaya_2016.webp',
        link: './original_maps/moscow/volochaevskaya_2016_omaps.jpg',
        bounds: [[55.7553754, 37.6736426], [55.7548079, 37.6786852], [55.751318, 37.6722693]],
        owner: 'FSO_MSK'
    },
    {
        name: 'Прудно',
        year: 2016,
        url: './maps/moscow/prudno_2016.webp',
        link: ['./original_maps/moscow/prudno_2016_omaps.gif','./original_maps/moscow/prudno_2016_omaps.ocd'],
        bounds: [[55.0335317, 37.7462769], [55.022315, 37.8550243], [54.9896308, 37.7335739]],
        author: 'GRSHKN',
        owner: 'TSLSCHVA'
    },
    {
        name: 'Хорлово, Белая гора',
        year: 2025,
        url: './maps/moscow/ak/horlovo_bela_gora_2025.webp',
        link: './original_maps/moscow/ak/horlovo_bela_gora_2025.gif',
        bounds: [[55.3397382, 38.7582207], [55.3322447, 38.8192463], [55.3135659, 38.7485218]],
        o_gps: 23750,
        author: 'FSHN_A',
        owner: 'KRLV_N'
    },
    {
        name: 'Патриаршие и Тверская',
        excluded: true,
        year: 2025,
        logo: 'msk_interes.webp',
        info: '<a href="https://interesnaya.sport.mos.ru/">Квест Москва Интересная</a>, <a href="https://t.me/moscoworienteering/3186">MOSCOW CITY RACE</a>',
        url: './maps/moscow/lr/patriki_2025.webp',
        link: ['./original_maps/moscow/lr/patriki_2025_omaps.gif','./original_maps/moscow/tverskaya_2025_omaps.pdf','./original_maps/moscow/tverskaya_2025_obsw_omaps.gif'],
        bounds: [[55.7709247, 37.5895071], [55.7674363, 37.618432], [55.7580197, 37.5844646]],
        author: ['MNKV','MSTPNV','KPTNV_M'],
        areas: [60,35,5],
        owner: ['ERMCHNKV_A','OPEN_BAND'],
        type: ['CITY','SPRINT']
    },
    {
        name: 'Большая Всехсвятская роща',
        year: 2025,
        url: './maps/moscow/vsehsvjatskaya_roscha_2025.webp',
        bounds: [[55.8106931, 37.4838924], [55.809831, 37.4925721], [55.8049653, 37.4821115]],
        author: ['DBRTSV_V','SKLV_V'],
        owner: 'MLKHT',
        type: ['PARK']
    },
    {
        name: 'Тушино',
        date: '2025-11-29',
        url: './maps/moscow/sz/tushino_rogaine_2025.webp',
        link: './original_maps/moscow/sz/tushino_rogaine_2025_omaps.gif',
        info: '<a href="https://forestadventure.ru/tu-info/">Рогейн ТУГЕЙН</a>',
        o_gps: 23916,
        bounds: [[55.8816181, 37.4044991], [55.8747812, 37.4600315], [55.8407715, 37.3888779]],
        author: ['JAKMV_S','TTYNN_V','MNKV','MTN_Y'],
        owner: ['JAKMV_S','ERMCHNKV_A','MLKHT'],
        type: ['ROGAINE']
    },
    {
        name: 'Красногорск',
        date: '2026-02-14',
        url: './maps/moscow/ak/krasnogorsk_love_2026.webp',
        link: './original_maps/moscow/ak/krasnogorsk_love_2026_omaps.gif',
        info: '<a href="https://t.me/LoveIsRogaine">Love is... Рогейн</a>.',
        bounds: [[55.8509871, 37.2695732], [55.8380243, 37.3577213], [55.8188373, 37.2542095]],
        logo: 'love_rogaine.webp',
        type: ['ROGAINE']
    },
    {
        name: 'Мачихино',
        year: 2021,
        url: './maps/moscow/lr/machihino_rogaine_2021.webp',
        link: './original_maps/moscow/lr/machihino_rogaine_2021_omaps.webp',
        bounds: [[55.3537449, 36.919899], [55.353501, 37.0793724], [55.2902112, 36.919384]],
        start: 'ZM',
        type: ['ROGAINE']
    },
    {
        name: 'Красносельская',
        year: 2025,
        area: .168,
        url: './maps/moscow/ak/krasnoselska_2025.webp',
        link: './original_maps/moscow/ak/krasnoselska_2025_omaps.gif',
        bounds: [[55.7810018, 37.6663899], [55.781038, 37.6759815], [55.7760661, 37.666347]],
        author: ['MSTPNV','ALDBV'],
        areas: [90, 10],
        owner: 'OPEN_BAND',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Новокузнецкая',
        year: 2026,
        url: './maps/moscow/lr/novokuznetskaya_2026.webp',
        link: './original_maps/moscow/lr/novokuznetskaya_2026_omaps.gif',
        bounds: [[55.7488545, 37.6250839], [55.7491322, 37.6392674], [55.7357126, 37.6257491]],
        author: ['MSTPNV','ALDBV'],
        owner: 'OPEN_BAND',
        type: ['CITY','SPRINT']
    },
];