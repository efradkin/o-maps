let historyDocs = [
    // --- Исторические документы ---
    {
        name: 'Условные знаки спортивных карт',
        year: 1,
        link: './docs/sport_maps_old_signs_omaps.jpg',
        qtty: 2
    },
    {
        name: 'Статья в газете "ТРУД"',
        start: 'USSR_BULGARIA_1968',
        year: 1968,
        link: './docs/ussr_bulgaria_1968_article_omaps.jpg'
    },
    {
        name: 'Статья в газете "Спортивная неделя Ленинграда"',
        year: 1969,
        link: './docs/sport_week_leningrad_1969_article_omaps.jpg'
    },
    {
        name: 'Статья в газете "Советский спорт"',
        year: 1969,
        link: './docs/sov_sport_1969_article_omaps.jpg'
    },
    {
        name: 'Программа',
        start: 'USSR_1981',
        year: 1981,
        link: './docs/ussr_champ_1981_program_omaps.pdf'
    },
    {
        name: 'Постановление',
        start: 'USSR_1981',
        year: 1981,
        link: './docs/ussr_champ_1981_resolution_omaps.pdf'
    },
    {
        name: 'Схема',
        start: 'USSR_1981',
        year: 1981,
        link: './docs/ussr_champ_1981_relay_schema_omaps.jpg'
    },
    {
        name: '17.09. Кубок ЛГС ДСО "Спартак"',
        year: 1983,
        info: 'Протоколы результатов. Карты можно найти <a href="map-info.html?map=mruchey_1983_09_17">тут</a>.',
        links: ['mruchey_1983_09_17', 6]
    },
    {
        name: '21,27.04. Открытие сезона ЛГС ДСО "Спартак"',
        year: 1985,
        info: 'Протоколы результатов. Карты можно найти <a href="map-info.html?map=golubaya_dacha_1982">тут</a>.',
        links: ['gdacha_1985_04_21', 8]
    },
    {
        name: 'Первенство клуба Азимут, Комарово',
        year: 1988,
        link: './docs/1988_azimut_omaps.pdf'
    },
    {
        name: '31.01. Соревнования, посвящённые снятию блокады Ленинграда, Токсово',
        year: 1988,
        link: './docs/1988_01_31_blockade_omaps.pdf'
    },
    {
        name: '14.02. Спринт "Метелица", выбор, Голубые дачи',
        year: 1988,
        link: './docs/1988_02_14_metelitsa_omaps.pdf'
    },
    {
        name: '13.03. Первенство клуба Азимут, ст Морская',
        year: 1988,
        link: './docs/1988_03_13_azimut_omaps.pdf'
    },
    {
        name: '20.03. Закрытие зимнего сезона клуба Азимут, марафон, Токсово',
        year: 1988,
        link: './docs/1988_03_20_azimut_winter_close_omaps.pdf'
    },
    {
        name: '27.03. П-во обкома физкультурно-оздоровительного комплекса "ЭНЕРГИЯ", з/н, Охтинский парк',
        year: 1988,
        link: './docs/1988_03_27_energy_omaps.pdf'
    },
    {
        name: '24.04. Открытие сезона клуба Азимут, эстафета, Шувалово',
        year: 1988,
        link: './docs/1988_04_24_azimut_summer_open_omaps.pdf'
    },
    {
        name: '30.04-2.05. Майская Ленинградская многодневка, Шалово',
        year: 1988,
        link: './docs/1988_04_30_mayski_omaps.pdf'
    },
    {
        name: '22.05. "Лесной ландыш", Орехово',
        year: 1988,
        link: './docs/1988_05_22_forest_landysh_omaps.pdf'
    },
    {
        name: '2-3.06. Невский Азимут, Токсово (р Охта)',
        year: 1988,
        link: './docs/1988_06_02_nevsky_azimut_omaps.pdf'
    },
    {
        name: '4.06. Соревнования по эстафете с ориентированием, пл Морская',
        year: 1988,
        link: './docs/1988_06_04_relay_omaps.pdf'
    },
    {
        name: '5.06. Соревнования по эстафете с ориентированием, Зеленогорск',
        year: 1988,
        link: './docs/1988_06_05_relay_omaps.pdf'
    },
    {
        name: '18-19.06. Первенство клуба Азимут, з/н, Токсово',
        year: 1988,
        link: './docs/1988_06_18_azimut_omaps.pdf'
    },
    {
        name: '27.07. Ориентир-18, Ново-Токсово',
        year: 1988,
        link: './docs/1988_07_27_orientir_18_omaps.pdf'
    },
    {
        name: '31.07. Ориентир-19, Орехово',
        year: 1988,
        link: './docs/1988_07_31_orientir_19_omaps.pdf'
    },
    {
        name: '24.08. Ориентир-20, "Зелёный змей", Токсово',
        year: 1988,
        link: './docs/1988_08_24_orientir_20_green_snake_omaps.pdf'
    },
    {
        name: '28.08. Ориентир-21, "Ретро-88", Шапки',
        year: 1988,
        link: './docs/1988_08_28_orientir_21_retro_88_omaps.pdf'
    },
    {
        name: '31.08. Ориентир-22, Удельный парк',
        year: 1988,
        link: './docs/1988_08_31_orientir_22_omaps.pdf'
    },
    {
        name: '7.09. Ориентир-23, Большеохтинский парк',
        year: 1988,
        link: './docs/1988_09_07_orientir_23_omaps.pdf'
    },
    {
        name: '22.09. Ориентир-24, Шуваловский парк',
        year: 1988,
        link: './docs/1988_09_22_orientir_24_omaps.pdf'
    },
    {
        name: '24.09. "Золотая осень", Охтинский л/п',
        year: 1988,
        link: './docs/1988_09_24_golden_autumn_omaps.pdf'
    },
    {
        name: '7-8.10. День Конституции СССР',
        year: 1988,
        info: '<a href="./docs/simagino_1988_10_07/doc_4_omaps.jpg">Информация</a>, <a href="./docs/simagino_1988_10_07/doc_3_omaps.jpg">положение</a>, <a href="./docs/simagino_1988_10_07/doc_5_omaps.jpg">7.10,МА(10км)</a>, <a href="./docs/simagino_1988_10_07/doc_6_omaps.jpg">9.10,МА(11км)</a>, <a href="./docs/simagino_1988_10_07/doc_7_omaps.jpg">7.10,ЖА(8км)</a>, <a href="./docs/simagino_1988_10_07/doc_8_omaps.jpg">8.10,ЖА(7км)</a>.',
        links: ['simagino_1988_10_07', 8]
    },
    {
        name: '8.11. Соревнования по спортивному ориентированию, маркир, Лемболово (справа)',
        year: 1988,
        link: './docs/1988_11_08_markir_omaps.pdf'
    },
    {
        name: '13.11. Тренировочный старт в заданном направлении на лыжах, Токсово (оз Светлое)',
        year: 1988,
        link: './docs/1988_11_13_toksovo_omaps.pdf'
    },
    {
        name: '27.11. Тренировочная дистанция, выбор, Кавголово',
        year: 1988,
        link: './docs/1988_11_27_kavgolovo_omaps.pdf'
    },
    {
        name: '31.12. Новогодняя эстафета, Юкки',
        year: 1988,
        link: './docs/1988_12_31_new_year_omaps.pdf'
    },
    {
        name: 'Буклет "Спортивное ориентирование"',
        year: 1989,
        info: 'Буклет формата А2 выпущен Московским турклубом по мотивам 3 места Алиды Аболы на ЧМ в Швеции 1989 года. Текст, статистика в таблицах и полноразмерная карта с путями движения всех призёров. Цена 1 руб. Тираж 10000 (десять тысяч) экземпляров.',
        link: ['./docs/orienteering_booklet_1989_1_omaps.jpg','./docs/orienteering_booklet_1989_2_omaps.jpg']
    },
    {
        name: '6.06. Ориентир-9, Юкки',
        year: 1990,
        start: 'ORIENTIR',
        info: '<a href="./docs/1990_06_06_yukki/doc_1_omaps.gif">МА</a>, <a href="./docs/1990_06_06_yukki/doc_2_omaps.gif">МБ</a>, <a href="./docs/1990_06_06_yukki/doc_3_omaps.gif">МС,Н</a>, <a href="./docs/1990_06_06_yukki/doc_4_omaps.gif">ЖА</a>, <a href="./docs/1990_06_06_yukki/doc_5_omaps.gif">ЖБ,ЖС</a>',
        links: ['1990_06_06_yukki', 5, 'gif']
    },
    {
        name: '6-7.10. "Дыхание осени" на День Конституции СССР',
        year: 1990,
        info: '<a href="./docs/sosnovo_1990_10_06/doc_3_omaps.jpg">Положение</a>, <a href="./docs/sosnovo_1990_10_06/doc_4_omaps.jpg">МА</a>. Карты можно найти <a href="map-info.html?map=sosnovo_1990_10_06">тут</a>.',
        links: ['sosnovo_1990_10_06', 4]
    },
    {
        name: '7.04. Ориентир-1, Воейково',
        year: 1991,
        start: 'ORIENTIR',
        info: '<a href="./docs/1991_04_07_voeykovo/doc_1_omaps.gif">МА</a>, <a href="./docs/1991_04_07_voeykovo/doc_2_omaps.gif">МB</a>, <a href="./docs/1990_06_06_yukki/doc_3_omaps.gif">МB(2)</a>, <a href="./docs/1990_06_06_yukki/doc_4_omaps.gif">МС,Н</a>, <a href="./docs/1990_06_06_yukki/doc_5_omaps.gif">МС,Н(2)</a>, <a href="./docs/1990_06_06_yukki/doc_6_omaps.gif">МС,Н(3)</a>, <a href="./docs/1990_06_06_yukki/doc_7_omaps.gif">ЖЭ</a>, <a href="./docs/1990_06_06_yukki/doc_8_omaps.gif">ЖА</a>, <a href="./docs/1990_06_06_yukki/doc_9_omaps.gif">ЖВ</a>, <a href="./docs/1990_06_06_yukki/doc_10_omaps.gif">ЖВ(2)</a>, <a href="./docs/1990_06_06_yukki/doc_11_omaps.gif">ЖС,Н</a>',
        links: ['1991_04_07_voeykovo', 11, 'gif']
    },
    {
        name: '1-3.03. Всесоюзные соревнования по спортивному ориентированию среди спортсменов среднего и старшего возраста, Нижний Новгород',
        year: 1991,
        link: './docs/1991_veteran_ussr_omaps.pdf'
    },
    {
        name: 'Сводная карта всех дней (Лемболово)',
        start: 'MMS',
        year: 2010,
        info: '<a href="https://o-site.spb.ru/race.php?id=10062527">Инфо и результаты.</a>',
        link: './original_maps/starts/mms/mms_2010_lembolovo.jpg',
        author: ['VRBY','KVZN','KUZNTSV_S','NSNV','TKMKV_K']
    },
    {
        name: 'Календарь (Лемболово-Орехово)',
        start: 'MMS',
        year: 2011,
        info: '<a href="https://o-site.spb.ru/race.php?id=11062126">Инфо и результаты.</a>',
        link: './original_maps/starts/mms/mms_2011_lembolovo_orekhovo.jpg',
        author: ['VRBY','KVZN','KUZNTSV_S','NSNV','TKMKV_K']
    },
    {
        name: 'Сводная карта всех дней (Поляны)',
        start: 'MMS',
        year: 2014,
        info: '<a href="https://o-site.spb.ru/race.php?id=14062729">Инфо и результаты.</a>',
        link: './original_maps/starts/mms/mms_2014_polyany.pdf',
        author: 'SHRNN'
    },
    {
        name: 'Сводная карта всех дней (Красная долина)',
        start: 'MMS',
        year: 2015,
        info: '<a href="https://o-site.spb.ru/race.php?id=15062628">Инфо и результаты.</a>',
        link: './original_maps/starts/mms/mms_2015_krasna_dolina.pdf',
        author: ['DJCHKV','STLV_S']
    },
    {
        name: 'Сводная карта всех дней (Коробицыно)',
        start: 'MMS',
        year: 2016,
        info: '<a href="https://o-site.spb.ru/race.php?id=20160624">Инфо и результаты.</a>',
        link: './original_maps/starts/mms/mms_2016_korobitsyno.pdf',
        author: ['DJCHKV','STLV_S','PPV_D']
    },
    {
        name: 'Сводная карта всех дней (Коробицыно)',
        start: 'MMS',
        year: 2017,
        info: '<a href="https://o-site.spb.ru/race.php?id=17062325">Инфо и результаты.</a>',
        link: './original_maps/starts/mms/mms_2017_korobitsyno.pdf',
        author: ['DJCHKV','STLV_S','PPV_D']
    },
];
