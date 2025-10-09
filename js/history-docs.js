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
        name: 'Кубок ЛГС ДСО "Спартак"',
        date: '1983-09-17',
        info: 'Протоколы результатов. Карты можно найти <a href="map-info.html?map=mruchey_1983_09_17">тут</a>.',
        links: ['mruchey_1983_09_17', 6]
    },
    {
        name: 'Открытие сезона ЛГС ДСО "Спартак"',
        date: '1985-04-21',
        info: '21, 27 апреля. Протоколы результатов. Карты можно найти <a href="map-info.html?map=golubaya_dacha_1982">тут</a>.',
        links: ['gdacha_1985_04_21', 8],
        planner: 'RYLOV_V',
        me: 'М-13'
    },
    {
        name: 'Первенство клуба Азимут (Комарово)',
        year: 1988,
        link: './docs/1988_azimut_omaps.pdf',
        planner: 'VSLVSKY',
        me: 'М'
    },
    {
        name: 'Ранг зимнего сезона 1988г ЛОС ДФСО профсоюзов',
        year: 1988,
        link: './docs/1988_winter_rating_omaps.pdf',
        me: 'М-13'
    },
    {
        name: 'Кубок ЛДФСО Ленинграда (Кузьмолово)',
        date: '1988-01-10',
        link: './docs/1988_01_10_ldfso_omaps.pdf',
        planner: ['SHRNN','KRMCHV','KRLV'],
        me: 'М-15'
    },
    {
        name: 'Соревнования, посвящённые снятию блокады Ленинграда (Токсово)',
        date: '1988-01-31',
        link: './docs/1988_01_31_blockade_omaps.pdf',
        planner: 'DRBSHV'
    },
    {
        name: 'Чемпионат ДФСО Ленинграда (Токсово)',
        date: '1988-02-06',
        link: './docs/1988_02_06_dfso_omaps.pdf',
        info: '6-7 февраля.',
        planner: ['CHGRVSKY_V','KRMCHV']
    },
    {
        name: 'Спринт "Метелица", выбор (Голубые дачи)',
        date: '1988-02-14',
        link: './docs/1988_02_14_metelitsa_omaps.pdf',
        planner: 'EGRV_E'
    },
    {
        name: 'Первенство клуба Азимут (ст Морская)',
        date: '1988-03-13',
        link: './docs/1988_03_13_azimut_omaps.pdf',
        planner: 'FRSHLVA'
    },
    {
        name: 'Закрытие зимнего сезона клуба Азимут, марафон (Токсово)',
        date: '1988-03-20',
        link: './docs/1988_03_20_azimut_winter_close_omaps.pdf',
        planner: ['SHRNN','SHVR']
    },
    {
        name: 'П-во обкома физкультурно-оздоровительного комплекса "ЭНЕРГИЯ" (Охтинский парк)',
        date: '1988-03-27',
        link: './docs/1988_03_27_energy_omaps.pdf',
        planner: 'VSLVSKY'
    },
    {
        name: 'Соревнования по эстафете с ориентированием (Зеленогорск)',
        date: '1988-04-05',
        link: './docs/1988_06_05_relay_omaps.pdf',
        planner: 'DRBSHV'
    },
    {
        name: 'Кросс ориентировщиков (Голубые Дачи)',
        date: '1988-04-17',
        link: './docs/1988_04_17_kross_omaps.pdf',
        me: 'М-13'
    },
    {
        name: 'Открытие сезона клуба Азимут, эстафета (Шувалово)',
        date: '1988-04-24',
        link: './docs/1988_04_24_azimut_summer_open_omaps.pdf',
        me: 'М-13',
        planner: 'VLKV_A'
    },
    {
        name: 'Майская Ленинградская многодневка (Шалово)',
        date: '1988-04-30',
        link: './docs/1988_04_30_mayski_omaps.pdf',
        info: '30 апреля - 2мая.',
        planner: 'BDKN_A'
    },
    {
        name: 'Ориентир-1 (Юкки)',
        date: '1988-05-09',
        start: 'ORIENTIR',
        link: './docs/1988_05_09_orientir_1_omaps.pdf'
    },
    {
        name: 'Юный ориентировщик',
        date: '1988-05-09',
        link: './docs/1988_05_09_young_omaps.pdf',
        planner: 'FDRV_L',
        me: 'М-13'
    },
    {
        name: 'Ориентир-2 (Кавголово)',
        date: '1988-05-11',
        start: 'ORIENTIR',
        planner: 'ERMSHKN',
        link: './docs/1988_05_11_orientir_2_omaps.pdf',
        me: 'МА'
    },
    {
        name: 'Ориентир-3, эстафета (Кузьмолово)',
        date: '1988-05-15',
        start: 'ORIENTIR',
        planner: 'SHLKV_L',
        link: './docs/1988_05_15_orientir_3_omaps.pdf',
        me: 'МБ'
    },
    {
        name: 'Ориентир-4 (Мельничный ручей)',
        date: '1988-05-18',
        start: 'ORIENTIR',
        planner: 'MDVDKN',
        link: './docs/1988_05_18_orientir_4_omaps.pdf',
        me: 'МБ'
    },
    {
        name: 'Летняя Универсиада Ленинграда (Юкки, Песочная, Ильичёво)',
        date: '1988-05-20',
        link: './docs/1988_05_20_universiada_omaps.pdf',
        info: '20-23 мая.',
        planner: ['SGLDA','OSMCHN','BRSV_V','SHRNN','PNKRTV']
    },
    {
        name: '"Лесной ландыш" (Орехово)',
        date: '1988-05-22',
        link: './docs/1988_05_22_forest_landysh_omaps.pdf',
        me: 'МБ',
        planner: 'RDKV'
    },
    {
        name: 'П-во ЛОС ДФСО Профсоюзов среди юношей и девушек',
        date: '1988-05-24',
        link: './docs/1988_05_24_unions_omaps.pdf',
        info: '24-26 мая.',
        me: 'М-13'
    },
    {
        name: 'Ориентир-5 (Орловский парк)',
        date: '1988-05-25',
        start: 'ORIENTIR',
        planner: 'SLVVA_L',
        link: './docs/1988_05_25_orientir_5_omaps.pdf',
        me: 'МB'
    },
    {
        name: 'Невский Азимут (Токсово, р Охта)',
        date: '1988-06-02',
        link: './docs/1988_06_02_nevsky_azimut_omaps.pdf',
        info: '2 и 3 июня.',
        planner: 'VSLVSKY'
    },
    {
        name: 'Соревнования по эстафете с ориентированием (пл Морская)',
        date: '1988-06-04',
        link: './docs/1988_06_04_relay_omaps.pdf'
    },
    {
        name: 'Ориентир-6 (Токсово)',
        date: '1988-06-08',
        start: 'ORIENTIR',
        planner: 'DSHKO',
        link: './docs/1988_06_08_orientir_6_omaps.pdf',
        me: 'МБ'
    },
    {
        name: 'Чемпионат ЛОС ДФСО профсоюзов (Шуваловский парк, Токсово, Рапполово)',
        date: '1988-06-10',
        link: './docs/1988_06_10_dfso_unions_omaps.pdf',
        info: '10-12 июня.',
        planner: ['SHVR','LKNVA','CHGRVSKY_Y','CHGRVSKY_V','BBNNA_Y','SHRNN']
    },
    {
        name: 'Ориентир-7 (Шуваловский парк)',
        date: '1988-06-15',
        start: 'ORIENTIR',
        planner: ['SPTSA','TSPKNA'],
        link: './docs/1988_06_15_orientir_7_omaps.pdf'
    },
    {
        name: 'П-во клуба Азимут (Токсово)',
        date: '1988-06-18',
        link: './docs/1988_06_18_azimut_omaps.pdf',
        info: '18 и 19 июня.',
        planner: 'MKHLV_V'
    },
    {
        name: 'Ориентир-8 (Токсово)',
        date: '1988-06-22',
        start: 'ORIENTIR',
        link: './docs/1988_06_22_orientir_8_omaps.pdf',
        planner: 'SHICK'
    },
    {
        name: 'Ориентир-9 (Токсово)',
        date: '1988-06-29',
        start: 'ORIENTIR',
        link: './docs/1988_06_29_orientir_9_omaps.pdf'
    },
    {
        name: 'Ориентир-10 (69км)',
        date: '1988-07-03',
        start: 'ORIENTIR',
        link: './docs/1988_07_03_orientir_10_omaps.pdf',
        planner: 'VSLVSKY'
    },
    {
        name: 'Ориентир-11 (Юкки)',
        date: '1988-07-06',
        start: 'ORIENTIR',
        link: './docs/1988_07_06_orientir_11_omaps.pdf',
        planner: 'BLNV_A'
    },
    {
        name: 'Ориентир-12 (Лемболово)',
        date: '1988-07-10',
        start: 'ORIENTIR',
        link: './docs/1988_07_10_orientir_12_omaps.pdf',
        planner: 'BRNTSV_V'
    },
    {
        name: 'Ориентир-13 (Пискарёвский парк)',
        date: '1988-07-13',
        start: 'ORIENTIR',
        link: './docs/1988_07_13_orientir_13_omaps.pdf',
        planner: 'BRSV_V'
    },
    {
        name: 'Ориентир-14 (Комарово, Щучье оз)',
        date: '1988-07-17',
        start: 'ORIENTIR',
        link: './docs/1988_07_17_orientir_14_omaps.pdf',
        planner: 'PVLVA_N'
    },
    {
        name: 'Ориентир-15 (пл Морская)',
        date: '1988-07-20',
        start: 'ORIENTIR',
        link: './docs/1988_07_20_orientir_15_omaps.pdf'
    },
    {
        name: 'Ориентир-16 (Васкелово)',
        date: '1988-07-24',
        start: 'ORIENTIR',
        link: './docs/1988_07_24_orientir_16_omaps.pdf',
        planner: ['VSLVSKY','KHMPPU']
    },
    {
        name: 'Ориентир-18 (Ново-Токсово)',
        date: '1988-07-27',
        start: 'ORIENTIR',
        link: './docs/1988_07_27_orientir_18_omaps.pdf',
        planner: 'GRGRV_B'
    },
    {
        name: 'Ориентир-19 (Орехово)',
        date: '1988-07-31',
        start: 'ORIENTIR',
        link: './docs/1988_07_31_orientir_19_omaps.pdf',
        planner: 'LBDV_S'
    },
    {
        name: 'Ориентир-20, Зелёный змей (Токсово)',
        date: '1988-08-24',
        start: ['ORIENTIR','GS'],
        link: './docs/1988_08_24_orientir_20_green_snake_omaps.pdf'
    },
    {
        name: 'Ориентир-21, Ретро-88 (Шапки)',
        date: '1988-08-28',
        start: 'ORIENTIR',
        link: './docs/1988_08_28_orientir_21_retro_88_omaps.pdf'
    },
    {
        name: 'Ориентир-22 (Удельный парк)',
        date: '1988-08-31',
        start: 'ORIENTIR',
        link: './docs/1988_08_31_orientir_22_omaps.pdf'
    },
    {
        name: 'Ориентир-23 (Большеохтинский парк)',
        date: '1988-09-07',
        start: 'ORIENTIR',
        link: './docs/1988_09_07_orientir_23_omaps.pdf',
        planner: 'NKLVCH'
    },
    {
        name: 'П-во Ленинграда среди ветеранов (Сосново)',
        date: '1988-09-17',
        info: '17-18 сентября.',
        planner: 'MLVA_M',
        link: './docs/1988_09_17_leningrad_omaps.pdf'
    },
    {
        name: 'Ориентир-24 (Шуваловский парк)',
        date: '1988-09-22',
        start: 'ORIENTIR',
        link: './docs/1988_09_22_orientir_24_omaps.pdf',
        planner: 'KDNV_A'
    },
    {
        name: '"Золотая осень" (Охтинский л/п)',
        date: '1988-09-24',
        link: './docs/1988_09_24_golden_autumn_omaps.pdf',
        planner: 'LVCHV'
    },
    {
        name: 'Кубок ЛОС ВДФСО (67км, Всеволожск)',
        date: '1988-10-01',
        link: './docs/1988_10_01_unions_cup_omaps.pdf',
        info: '1-2 октября.',
        planner: 'PNKRTV'
    },
    {
        name: 'День Конституции СССР',
        date: '1988-10-07',
        info: '7-8 октября. <a href="./docs/simagino_1988_10_07/doc_4_omaps.jpg">Информация</a>, <a href="./docs/simagino_1988_10_07/doc_3_omaps.jpg">положение</a>, <a href="./docs/simagino_1988_10_07/doc_5_omaps.jpg">7.10,МА(10км)</a>, <a href="./docs/simagino_1988_10_07/doc_6_omaps.jpg">9.10,МА(11км)</a>, <a href="./docs/simagino_1988_10_07/doc_7_omaps.jpg">7.10,ЖА(8км)</a>, <a href="./docs/simagino_1988_10_07/doc_8_omaps.jpg">8.10,ЖА(7км)</a>.',
        links: ['simagino_1988_10_07', 8],
        planner: 'TRSV'
    },
    {
        name: 'П-во отраслевого совета физ-ры (Лемболово)',
        date: '1988-10-15',
        link: './docs/1988_10_15_omaps.pdf'
    },
    {
        name: 'Свадебные-88 (Н.Токсово)',
        date: '1988-10-16',
        link: './docs/1988_10_16_wedding_omaps.pdf'
    },
    {
        name: 'Соревнования по спортивному ориентированию, маркир, (Лемболово, справа)',
        date: '1988-11-08',
        link: './docs/1988_11_08_markir_omaps.pdf',
        planner: 'SMNV_M'
    },
    {
        name: 'Тренировочный старт в заданном направлении на лыжах (Токсово, оз Светлое)',
        date: '1988-11-13',
        link: './docs/1988_11_13_toksovo_omaps.pdf'
    },
    {
        name: 'Тренировочная дистанция, выбор (Кавголово)',
        date: '1988-11-27',
        link: './docs/1988_11_27_kavgolovo_omaps.pdf',
        planner: 'VSLVSKY'
    },
    {
        name: 'Новогодняя эстафета (Юкки)',
        date: '1988-12-31',
        link: './docs/1988_12_31_new_year_omaps.pdf',
        me: 'М-15'
    },
    {
        name: 'Буклет "Спортивное ориентирование"',
        year: 1989,
        info: 'Буклет формата А2 выпущен Московским турклубом по мотивам 3 места Алиды Аболы на ЧМ в Швеции 1989 года. Текст, статистика в таблицах и полноразмерная карта с путями движения всех призёров. Цена 1 руб. Тираж 10000 (десять тысяч) экземпляров.',
        link: ['./docs/orienteering_booklet_1989_1_omaps.jpg','./docs/orienteering_booklet_1989_2_omaps.jpg']
    },
    {
        name: 'XXX летие Ленинградского ориентирования',
        date: '1989-05-07',
        info: '7-9 мая. Карты можно найти <a href="map-info.html?map=budogosch_orlenok_1988">тут</a> и <a href="map-info.html?map=budogosch_cheremukhovoe_1988">тут</a>.',
        link: './docs/1989_05_07_XXX_years_omaps.pdf',
        start: 'LENINGRAD_30',
        me: 'М15-1',
        planner: ['MLVA_M','MRSKY_S','KUOKNN_Y']
    },
    {
        name: 'П-во ЛОС ВДФСО Профсоюзов среди юношей и девушек (Рапполово, Токсово)',
        date: '1989-05-24',
        link: './docs/1989_05_24_unions_omaps.pdf',
        info: '24-25 мая.',
        me: 'М-15',
        planner: ['SHRNN','CHGRVSKY_V','CHGRVSKY_Y','CHGRVSKA_O','NVGRDTSV']
    },
    {
        name: 'Летний чемпионат ЛОС ВДФСО профсоюзов (Токсово)',
        date: '1989-06-09',
        link: './docs/1989_06_09_vdfso_unions_omaps.pdf',
        info: '9-11 октября.',
        planner: 'CHGRVSKY_V'
    },
    {
        name: 'Многодневка "Белые Ночи" (Снегирёвка)',
        date: '1989-06-23',
        info: '23-25 июня.',
        link: './docs/1989_06_23_wn_omaps.pdf',
        me: 'М-15'
    },
    {
        name: 'Ориентир-9 (Юкки)',
        date: '1990-06-06',
        start: 'ORIENTIR',
        info: '<a href="./docs/1990_06_06_yukki/doc_1_omaps.gif">МА</a>, <a href="./docs/1990_06_06_yukki/doc_2_omaps.gif">МБ</a>, <a href="./docs/1990_06_06_yukki/doc_3_omaps.gif">МС,Н</a>, <a href="./docs/1990_06_06_yukki/doc_4_omaps.gif">ЖА</a>, <a href="./docs/1990_06_06_yukki/doc_5_omaps.gif">ЖБ,ЖС</a>',
        links: ['1990_06_06_yukki', 5, 'gif'],
        me: 'МА'
    },
    {
        name: '6 и 7 октября. "Дыхание осени" на День Конституции СССР',
        date: '1990-10-06',
        info: '<a href="./docs/sosnovo_1990_10_06/doc_3_omaps.jpg">Положение</a>, <a href="./docs/sosnovo_1990_10_06/doc_4_omaps.jpg">МА</a>. Карты можно найти <a href="map-info.html?map=sosnovo_1990_10_06">тут</a>.',
        links: ['sosnovo_1990_10_06', 4]
    },
    {
        name: 'Ориентир-1 (Воейково)',
        date: '1991-04-07',
        start: 'ORIENTIR',
        info: '<a href="./docs/1991_04_07_voeykovo/doc_12_omaps.gif">МЭ</a>, <a href="./docs/1991_04_07_voeykovo/doc_1_omaps.gif">МА</a>, <a href="./docs/1991_04_07_voeykovo/doc_2_omaps.gif">МB</a>, <a href="./docs/1991_04_07_voeykovo/doc_3_omaps.gif">МB(2)</a>, <a href="./docs/1991_04_07_voeykovo/doc_4_omaps.gif">МС,Н</a>, <a href="./docs/1991_04_07_voeykovo/doc_5_omaps.gif">МС,Н(2)</a>, <a href="./docs/1991_04_07_voeykovo/doc_6_omaps.gif">МС,Н(3)</a>, <a href="./docs/1991_04_07_voeykovo/doc_7_omaps.gif">ЖЭ</a>, <a href="./docs/1991_04_07_voeykovo/doc_8_omaps.gif">ЖА</a>, <a href="./docs/1991_04_07_voeykovo/doc_9_omaps.gif">ЖВ</a>, <a href="./docs/1991_04_07_voeykovo/doc_10_omaps.gif">ЖВ(2)</a>, <a href="./docs/1991_04_07_voeykovo/doc_11_omaps.gif">ЖС,Н</a>.',
        links: ['1991_04_07_voeykovo', 12, 'gif'],
        planner: 'SMNV_M',
        me: 'МА'
    },
    {
        name: 'Ориентир-3 (Юкки)',
        date: '1991-04-27',
        start: 'ORIENTIR',
        info: '<a href="./docs/1991_04_27_yukki/doc_1_omaps.gif">МА</a>, <a href="./docs/1991_04_27_yukki/doc_2_omaps.gif">МА(2)</a>, <a href="./docs/1991_04_27_yukki/doc_3_omaps.gif">МB</a>, <a href="./docs/1991_04_27_yukki/doc_4_omaps.gif">МВ(2)</a>, <a href="./docs/1991_04_27_yukki/doc_5_omaps.gif">МС</a>, <a href="./docs/1991_04_27_yukki/doc_6_omaps.gif">МС,Н</a>, <a href="./docs/1991_04_27_yukki/doc_7_omaps.gif">МН</a>, <a href="./docs/1991_04_27_yukki/doc_8_omaps.gif">ЖА</a>, <a href="./docs/1991_04_27_yukki/doc_9_omaps.gif">ЖВ</a>, <a href="./docs/1991_04_27_yukki/doc_10_omaps.gif">ЖВ(2)</a>, <a href="./docs/1991_04_27_yukki/doc_11_omaps.gif">ЖС</a>, <a href="./docs/1991_04_27_yukki/doc_12_omaps.gif">ЖН</a>.',
        links: ['1991_04_27_yukki', 12, 'gif'],
        planner: 'PVLV_M',
        me: 'МА'
    },
    {
        name: 'Ориентир-8 (Орловский л/п)',
        date: '1991-06-05',
        start: 'ORIENTIR',
        info: 'Карту можно найти <a href="map-info.html?map=orientir_1991_06_08">тут</a>.',
        link: './docs/1991_06_05_orientir_8_omaps.pdf',
    },
    {
        name: 'Ориентир-7 (Сертолово)',
        date: '1991-05-29',
        start: 'ORIENTIR',
        info: 'Карту можно найти <a href="map-info.html?map=orientir_1991_05_29">тут</a>.',
        link: './docs/1991_05_29_orientir_7_omaps.pdf',
    },
    {
        name: 'Ориентир-10 (Токсово)',
        date: '1991-06-12',
        start: 'ORIENTIR',
        info: '<a href="./docs/1991_06_12_toksovo/doc_1_omaps.gif">МА</a>, <a href="./docs/1991_06_12_toksovo/doc_2_omaps.gif">МА(2)</a>, <a href="./docs/1991_06_12_toksovo/doc_3_omaps.gif">МБ</a>, <a href="./docs/1991_06_12_toksovo/doc_4_omaps.gif">МБ(2)</a>, <a href="./docs/1991_06_12_toksovo/doc_5_omaps.gif">МС,Н</a>, <a href="./docs/1991_06_12_toksovo/doc_6_omaps.gif">ЖА,ЖС</a>, <a href="./docs/1991_06_12_toksovo/doc_7_omaps.gif">ЖБ</a>',
        links: ['1991_06_12_toksovo', 7, 'gif'],
        me: 'МА'
    },
    {
        name: 'Ориентир-11 (Лемболово)',
        date: '1991-06-26',
        start: 'ORIENTIR',
        planner: 'BYMKV',
        info: 'Карту можно найти <a href="map-info.html?map=orientir_1991_06_26">тут</a>.',
        link: './docs/1991_06_26_orientir_11_omaps.pdf',
    },
    {
        name: 'Ориентир-12 (Токсово)',
        date: '1991-07-03',
        start: 'ORIENTIR',
        planner: 'BRSV_V',
        info: 'Карту можно найти <a href="map-info.html?map=orientir_1991_07_03">тут</a>.',
        link: './docs/1991_07_03_orientir_12_omaps.pdf',
    },
    {
        name: 'Ориентир-13 (Васкелово)',
        date: '1991-07-07',
        start: 'ORIENTIR',
        planner: 'BLNV_A',
        info: 'Карту можно найти <a href="map-info.html?map=orientir_1991_07_07">тут</a>.',
        link: './docs/1991_07_07_orientir_13_omaps.pdf',
    },
    {
        name: 'Ориентир-14 (Кавголово)',
        date: '1991-07-10',
        start: 'ORIENTIR',
        info: 'Карту можно найти <a href="map-info.html?map=orientir_1991_07_10">тут</a>.',
        link: './docs/1991_07_10_orientir_14_omaps.pdf',
    },
    {
        name: 'Ориентир-16 (Токсово)',
        date: '1991-07-17',
        start: 'ORIENTIR',
        info: 'Карту можно найти <a href="map-info.html?map=orientir_1991_07_20">тут</a>.',
        link: './docs/1991_07_17_orientir_16_omaps.pdf',
        me: 'МА'
    },
    {
        name: 'Ориентир-17 (Кузнечное)',
        date: '1991-07-21',
        start: 'ORIENTIR',
        info: 'Карту можно найти <a href="map-info.html?map=orientir_1991_07_21">тут</a>.',
        link: './docs/1991_07_20_orientir_17_omaps.pdf'
    },
    {
        name: 'Ориентир-19 (Невский л/п)',
        date: '1991-07-24',
        start: 'ORIENTIR',
        info: 'Карту можно найти <a href="map-info.html?map=orientir_1991_07_24">тут</a>.',
        link: './docs/1991_07_24_orientir_19_omaps.pdf',
        planner: 'DSHKO'
    },
    {
        name: 'Зелёный змей',
        date: '1991-08-25',
        start: 'GS',
        link: './docs/1991_08_25_green_snake_omaps.pdf',
        me: 'М'
    },
    {
        name: 'Ориентир-22 (ст Песочное)',
        date: '1991-08-28',
        start: 'ORIENTIR',
        info: 'Карту можно найти <a href="map-info.html?map=orientir_1991_08_28">тут</a>.',
        link: './docs/1991_08_28_orientir_22_omaps.pdf',
        me: 'H-A'
    },
    {
        name: 'Ориентир-23 (Шуваловский парк)',
        date: '1991-09-04',
        start: 'ORIENTIR',
        info: 'Карту можно найти <a href="map-info.html?map=orientir_1991_09_04">тут</a>.',
        link: './docs/1991_09_04_orientir_23_omaps.pdf',
    },
    {
        name: 'Ориентир-24 (Сосновка)',
        date: '1991-09-11',
        start: 'ORIENTIR',
        info: 'Карту можно найти <a href="map-info.html?map=orientir_1991_09_11">тут</a>.',
        link: './docs/1991_09_11_orientir_24_omaps.pdf',
        me: 'H-A',
        planner: 'AMSVA'
    },
    {
        name: 'Ориентир-25 (Орехово)',
        date: '1991-09-29',
        start: 'ORIENTIR',
        info: 'Карту можно найти <a href="map-info.html?map=orientir_1991_09_29">тут</a>.',
        link: './docs/1991_09_29_orientir_25_omaps.pdf',
        planner: 'FDRV_L'
    },
    {
        name: 'Ориентир-27 (Лемболово)',
        date: '1991-11-08',
        start: 'ORIENTIR',
        info: 'Карту можно найти <a href="map-info.html?map=orientir_1991_11_08">тут</a>.',
        link: './docs/1991_11_08_orientir_27_omaps.pdf',
        planner: 'FSNKO'
    },
    {
        name: 'Всесоюзные соревнования по спортивному ориентированию среди спортсменов среднего и старшего возраста (Нижний Новгород)',
        date: '1991-03-01',
        link: './docs/1991_veteran_ussr_omaps.pdf',
        info: '1-3 марта.'
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
