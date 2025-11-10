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
        name: 'Золотые кольца',
        date: '1969-11-16',
        info: 'Приглашение. Карты можно найти <a href="map-info.html?map=lobnia_1969">тут</a>.',
        link: './docs/1969_lobnia_welcome_omaps.jpg',
        start: 'WEDDING'
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
        name: 'П-во клуба Азимут (Комарово)',
        year: 1988,
        link: './docs/1988/1988_azimut_omaps.pdf',
        planner: 'VSLVSKY',
        me: 'М'
    },
    {
        name: 'Ранг зимнего сезона 1988г ЛОС ДФСО профсоюзов',
        year: 1988,
        link: './docs/1988/1988_winter_rating_omaps.pdf',
        me: 'М-13'
    },
    {
        name: 'Кубок ЛДФСО Ленинграда (Кузьмолово)',
        date: '1988-01-10',
        link: './docs/1988/1988_01_10_ldfso_omaps.pdf',
        planner: ['SHRNN','KRMCHV','KRLV'],
        me: 'М-15'
    },
    {
        name: 'Соревнования, посвящённые снятию блокады Ленинграда (Токсово)',
        date: '1988-01-31',
        link: './docs/1988/1988_01_31_blockade_omaps.pdf',
        planner: 'DRBSHV'
    },
    {
        name: 'Чемпионат ДФСО Ленинграда (Токсово)',
        date: '1988-02-06',
        link: './docs/1988/1988_02_06_dfso_omaps.pdf',
        info: '6-7 февраля.',
        planner: ['CHGRVSKY_V','KRMCHV']
    },
    {
        name: 'Спринт "Метелица", выбор (Голубые дачи)',
        date: '1988-02-14',
        link: './docs/1988/1988_02_14_metelitsa_omaps.pdf',
        planner: 'EGRV_E'
    },
    {
        name: 'П-во клуба Азимут (ст Морская)',
        date: '1988-03-13',
        link: './docs/1988/1988_03_13_azimut_omaps.pdf',
        planner: 'FRSHLVA'
    },
    {
        name: 'Закрытие зимнего сезона клуба Азимут, марафон (Токсово)',
        date: '1988-03-20',
        link: './docs/1988/1988_03_20_azimut_winter_close_omaps.pdf',
        planner: ['SHRNN','SHVR']
    },
    {
        name: 'П-во обкома физкультурно-оздоровительного комплекса "ЭНЕРГИЯ" (Охтинский парк)',
        date: '1988-03-27',
        link: './docs/1988/1988_03_27_energy_omaps.pdf',
        planner: 'VSLVSKY'
    },
    {
        name: 'Соревнования по эстафете с ориентированием (Зеленогорск)',
        date: '1988-04-05',
        link: './docs/1988/1988_06_05_relay_omaps.pdf',
        planner: 'DRBSHV'
    },
    {
        name: 'Кросс ориентировщиков (Голубые Дачи)',
        date: '1988-04-17',
        link: './docs/1988/1988_04_17_kross_omaps.pdf',
        me: 'М-13'
    },
    {
        name: 'Открытие сезона клуба Азимут, эстафета (Шувалово)',
        date: '1988-04-24',
        link: './docs/1988/1988_04_24_azimut_summer_open_omaps.pdf',
        me: 'М-13',
        planner: 'VLKV_A'
    },
    {
        name: 'Майская Ленинградская многодневка (Шалово)',
        date: '1988-04-30',
        link: './docs/1988/1988_04_30_mayski_omaps.pdf',
        info: '30 апреля - 2мая.',
        planner: 'BDKN_A'
    },
    {
        name: 'Ориентир-1 (Юкки)',
        date: '1988-05-09',
        start: 'ORIENTIR',
        link: './docs/1988/1988_05_09_orientir_1_omaps.pdf'
    },
    {
        name: 'Юный ориентировщик',
        date: '1988-05-09',
        link: './docs/1988/1988_05_09_young_omaps.pdf',
        planner: 'FDRV_L',
        me: 'М-13'
    },
    {
        name: 'Ориентир-2 (Кавголово)',
        date: '1988-05-11',
        start: 'ORIENTIR',
        planner: 'ERMSHKN',
        link: './docs/1988/1988_05_11_orientir_2_omaps.pdf',
        me: 'МА'
    },
    {
        name: 'Ориентир-3, эстафета (Кузьмолово)',
        date: '1988-05-15',
        start: 'ORIENTIR',
        planner: 'SHLKV_L',
        link: './docs/1988/1988_05_15_orientir_3_omaps.pdf',
        me: 'МБ'
    },
    {
        name: 'Ориентир-4 (Мельничный ручей)',
        date: '1988-05-18',
        start: 'ORIENTIR',
        planner: 'MDVDKN',
        link: './docs/1988/1988_05_18_orientir_4_omaps.pdf',
        me: 'МБ'
    },
    {
        name: 'Летняя Универсиада Ленинграда (Юкки, Песочная, Ильичёво)',
        date: '1988-05-20',
        link: './docs/1988/1988_05_20_universiada_omaps.pdf',
        info: '20-23 мая.',
        planner: ['SGLDA','OSMCHN','BRSV_V','SHRNN','PNKRTV']
    },
    {
        name: '"Лесной ландыш" (Орехово)',
        date: '1988-05-22',
        link: './docs/1988/1988_05_22_forest_landysh_omaps.pdf',
        me: 'МБ',
        planner: 'RDKV'
    },
    {
        name: 'П-во ЛОС ДФСО Профсоюзов среди юношей и девушек',
        date: '1988-05-24',
        link: './docs/1988/1988_05_24_unions_omaps.pdf',
        info: '24-26 мая.',
        me: 'М-13'
    },
    {
        name: 'Ориентир-5 (Орловский парк)',
        date: '1988-05-25',
        start: 'ORIENTIR',
        planner: 'SLVVA_L',
        link: './docs/1988/1988_05_25_orientir_5_omaps.pdf',
        me: 'МB'
    },
    {
        name: 'Невский Азимут (Токсово, р Охта)',
        date: '1988-06-02',
        link: './docs/1988/1988_06_02_nevsky_azimut_omaps.pdf',
        info: '2 и 3 июня.',
        planner: 'VSLVSKY'
    },
    {
        name: 'Соревнования по эстафете с ориентированием (пл Морская)',
        date: '1988-06-04',
        link: './docs/1988/1988_06_04_relay_omaps.pdf'
    },
    {
        name: 'Ориентир-6 (Токсово)',
        date: '1988-06-08',
        start: 'ORIENTIR',
        planner: 'DSHKO',
        link: './docs/1988/1988_06_08_orientir_6_omaps.pdf',
        me: 'МБ'
    },
    {
        name: 'Чемпионат ЛОС ДФСО профсоюзов (Шуваловский парк, Токсово, Рапполово)',
        date: '1988-06-10',
        link: './docs/1988/1988_06_10_dfso_unions_omaps.pdf',
        info: '10-12 июня.',
        planner: ['SHVR','LKNVA','CHGRVSKY_Y','CHGRVSKY_V','BBNNA_Y','SHRNN']
    },
    {
        name: 'Ориентир-7 (Шуваловский парк)',
        date: '1988-06-15',
        start: 'ORIENTIR',
        planner: ['SPTSA','TSPKNA'],
        link: './docs/1988/1988_06_15_orientir_7_omaps.pdf'
    },
    {
        name: 'П-во клуба Азимут (Токсово)',
        date: '1988-06-18',
        link: './docs/1988/1988_06_18_azimut_omaps.pdf',
        info: '18 и 19 июня.',
        planner: 'MKHLV_V'
    },
    {
        name: 'Ориентир-8 (Токсово)',
        date: '1988-06-22',
        start: 'ORIENTIR',
        link: './docs/1988/1988_06_22_orientir_8_omaps.pdf',
        planner: 'SHICK'
    },
    {
        name: 'Ориентир-9 (Токсово)',
        date: '1988-06-29',
        start: 'ORIENTIR',
        link: './docs/1988/1988_06_29_orientir_9_omaps.pdf'
    },
    {
        name: 'Ориентир-10 (69км)',
        date: '1988-07-03',
        start: 'ORIENTIR',
        link: './docs/1988/1988_07_03_orientir_10_omaps.pdf',
        planner: 'VSLVSKY'
    },
    {
        name: 'Ориентир-11 (Юкки)',
        date: '1988-07-06',
        start: 'ORIENTIR',
        link: './docs/1988/1988_07_06_orientir_11_omaps.pdf',
        planner: 'BLNV_A'
    },
    {
        name: 'Ориентир-12 (Лемболово)',
        date: '1988-07-10',
        start: 'ORIENTIR',
        link: './docs/1988/1988_07_10_orientir_12_omaps.pdf',
        planner: 'BRNTSV_V'
    },
    {
        name: 'Ориентир-13 (Пискарёвский парк)',
        date: '1988-07-13',
        start: 'ORIENTIR',
        link: './docs/1988/1988_07_13_orientir_13_omaps.pdf',
        planner: 'BRSV_V'
    },
    {
        name: 'Ориентир-14 (Комарово, Щучье оз)',
        date: '1988-07-17',
        start: 'ORIENTIR',
        link: './docs/1988/1988_07_17_orientir_14_omaps.pdf',
        planner: 'PVLVA_N'
    },
    {
        name: 'Ориентир-15 (пл Морская)',
        date: '1988-07-20',
        start: 'ORIENTIR',
        link: './docs/1988/1988_07_20_orientir_15_omaps.pdf'
    },
    {
        name: 'Ориентир-16 (Васкелово)',
        date: '1988-07-24',
        start: 'ORIENTIR',
        link: './docs/1988/1988_07_24_orientir_16_omaps.pdf',
        planner: ['VSLVSKY','KHMPPU']
    },
    {
        name: 'Ориентир-18 (Ново-Токсово)',
        date: '1988-07-27',
        start: 'ORIENTIR',
        link: './docs/1988/1988_07_27_orientir_18_omaps.pdf',
        planner: 'GRGRV_B'
    },
    {
        name: 'Ориентир-19 (Орехово)',
        date: '1988-07-31',
        start: 'ORIENTIR',
        link: './docs/1988/1988_07_31_orientir_19_omaps.pdf',
        planner: 'LBDV_S'
    },
    {
        name: 'Ориентир-20, Зелёный змей (Токсово)',
        date: '1988-08-24',
        start: ['ORIENTIR','GS'],
        link: './docs/1988/1988_08_24_orientir_20_green_snake_omaps.pdf'
    },
    {
        name: 'Ориентир-21, Ретро-88 (Шапки)',
        date: '1988-08-28',
        start: 'ORIENTIR',
        link: './docs/1988/1988_08_28_orientir_21_retro_88_omaps.pdf'
    },
    {
        name: 'Ориентир-22 (Удельный парк)',
        date: '1988-08-31',
        start: 'ORIENTIR',
        link: './docs/1988/1988_08_31_orientir_22_omaps.pdf'
    },
    {
        name: 'Ориентир-23 (Большеохтинский парк)',
        date: '1988-09-07',
        start: 'ORIENTIR',
        link: './docs/1988/1988_09_07_orientir_23_omaps.pdf',
        planner: 'NKLVCH'
    },
    {
        name: 'П-во Ленинграда среди ветеранов (Сосново)',
        date: '1988-09-17',
        info: '17-18 сентября.',
        planner: 'MLVA_M',
        link: './docs/1988/1988_09_17_leningrad_omaps.pdf'
    },
    {
        name: 'Ориентир-24 (Шуваловский парк)',
        date: '1988-09-22',
        start: 'ORIENTIR',
        link: './docs/1988/1988_09_22_orientir_24_omaps.pdf',
        planner: 'KDNV_A'
    },
    {
        name: '"Золотая осень" (Охтинский л/п)',
        date: '1988-09-24',
        link: './docs/1988/1988_09_24_golden_autumn_omaps.pdf',
        planner: 'LVCHV'
    },
    {
        name: 'Кубок ЛОС ВДФСО (67км, Всеволожск)',
        date: '1988-10-01',
        link: './docs/1988/1988_10_01_unions_cup_omaps.pdf',
        info: '1-2 октября.',
        planner: 'PNKRTV'
    },
    {
        name: 'День Конституции СССР',
        date: '1988-10-07',
        info: '7-8 октября. <a href="./docs/1988/simagino_1988_10_07/doc_4_omaps.jpg">Информация</a>, <a href="./docs/1988/simagino_1988_10_07/doc_3_omaps.jpg">положение</a>, <a href="./docs/1988/simagino_1988_10_07/doc_5_omaps.jpg">7.10,МА(10км)</a>, <a href="./docs/1988/simagino_1988_10_07/doc_6_omaps.jpg">9.10,МА(11км)</a>, <a href="./docs/1988/simagino_1988_10_07/doc_7_omaps.jpg">7.10,ЖА(8км)</a>, <a href="./docs/1988/simagino_1988_10_07/doc_8_omaps.jpg">8.10,ЖА(7км)</a>.',
        links: ['1988/simagino_1988_10_07', 8],
        planner: 'TRSV'
    },
    {
        name: 'П-во отраслевого совета физ-ры (Лемболово)',
        date: '1988-10-15',
        link: './docs/1988/1988_10_15_omaps.pdf'
    },
    {
        name: 'Свадебные-88 (Н.Токсово)',
        date: '1988-10-16',
        link: './docs/1988/1988_10_16_wedding_omaps.pdf',
        start: 'WEDDING'
    },
    {
        name: 'Соревнования по спортивному ориентированию, маркир, (Лемболово, справа)',
        date: '1988-11-08',
        link: './docs/1988/1988_11_08_markir_omaps.pdf',
        planner: 'SMNV_M'
    },
    {
        name: 'Тренировочный старт в заданном направлении на лыжах (Токсово, оз Светлое)',
        date: '1988-11-13',
        link: './docs/1988/1988_11_13_toksovo_omaps.pdf'
    },
    {
        name: 'Тренировочная дистанция, выбор (Кавголово)',
        date: '1988-11-27',
        link: './docs/1988/1988_11_27_kavgolovo_omaps.pdf',
        planner: 'VSLVSKY'
    },
    {
        name: 'Новогодняя эстафета (Юкки)',
        date: '1988-12-31',
        link: './docs/1988/1988_12_31_new_year_omaps.pdf',
        me: 'М-15'
    },
    {
        name: 'Буклет "Спортивное ориентирование"',
        year: 1989,
        info: 'Буклет формата А2 выпущен Московским турклубом по мотивам 3 места Алиды Аболы на ЧМ в Швеции 1989 года. Текст, статистика в таблицах и полноразмерная карта с путями движения всех призёров. Цена 1 руб. Тираж 10000 (десять тысяч) экземпляров.',
        link: ['./docs/orienteering_booklet_1989_1_omaps.jpg','./docs/orienteering_booklet_1989_2_omaps.jpg']
    },
    {
        name: 'Бро-бег',
        year: 1989,
        link: './docs/1989/1989_brobeg_omaps.pdf',
    },
    {
        name: 'XXX летие Ленинградского ориентирования',
        date: '1989-05-07',
        info: '7-9 мая. Карты можно найти <a href="map-info.html?map=budogosch_orlenok_1988">тут</a> и <a href="map-info.html?map=budogosch_cheremukhovoe_1988">тут</a>.',
        link: './docs/1989/1989_05_07_XXX_years_omaps.pdf',
        start: 'LENINGRAD_30',
        me: 'М15-1',
        planner: ['MLVA_M','MRSKY_S','KUOKNN_Y']
    },
    {
        name: 'Ориентир-1 (Энколово)',
        date: '1989-05-09',
        start: 'ORIENTIR',
        link: './docs/1989/1989_05_09_orientir_1_omaps.pdf',
        planner: 'NKLVCH'
    },
    {
        name: 'Ориентир-2 (Токсово)',
        date: '1989-05-17',
        start: 'ORIENTIR',
        link: './docs/1989/1989_05_17_orientir_2_omaps.pdf',
    },
    {
        name: 'Приз Ленинградского телевидения (Кавголово)',
        date: '1989-05-21',
        link: './docs/1989/1989_05_21_tv_omaps.pdf',
        planner: 'SHVR',
        me: 'М-15'
    },
    {
        name: 'Ориентир-3 (Токсово)',
        date: '1989-05-24',
        start: 'ORIENTIR',
        link: './docs/1989/1989_05_24_orientir_3_omaps.pdf',
    },
    {
        name: 'П-во ЛОС ВДФСО Профсоюзов среди юношей и девушек (Рапполово, Токсово)',
        date: '1989-05-24',
        link: './docs/1989/1989_05_24_unions_omaps.pdf',
        info: '24-25 мая.',
        me: 'М-15',
        planner: ['SHRNN','CHGRVSKY_V','CHGRVSKY_Y','CHGRVSKA_O','NVGRDTSV']
    },
    {
        name: 'Кубок Ленинграда (Петяярви)',
        date: '1989-05-27',
        link: './docs/1989/1989_05_27_leningrad_cup_omaps.pdf',
        me: 'М-15',
    },
    {
        name: 'Кубок Ленинграда (Петяярви)',
        date: '1989-05-28',
        link: './docs/1989/1989_05_28_leningrad_cup_omaps.pdf',
        me: 'М-15',
    },
    {
        name: 'Ориентир-4 (Токсово)',
        date: '1989-06-07',
        start: 'ORIENTIR',
        link: './docs/1989/1989_06_07_orientir_4_omaps.pdf',
        planner: 'BRSV_V'
    },
    {
        name: 'Летний чемпионат ЛОС ВДФСО профсоюзов (Токсово)',
        date: '1989-06-09',
        link: './docs/1989/1989_06_09_vdfso_unions_omaps.pdf',
        info: '9-11 октября.',
        planner: 'CHGRVSKY_V'
    },
    {
        name: 'Ориентир-5 (Шуваловский парк)',
        date: '1989-06-14',
        start: 'ORIENTIR',
        link: './docs/1989/1989_06_14_orientir_5_omaps.pdf',
        me: 'МБ'
    },
    {
        name: 'Ориентир-6 (Орехово)',
        date: '1989-06-22',
        start: 'ORIENTIR',
        link: './docs/1989/1989_06_22_orientir_6_omaps.pdf',
        planner: 'TNV_A'
    },
    {
        name: 'Многодневка "Белые Ночи" (Снегирёвка)',
        date: '1989-06-23',
        info: '23-25 июня.',
        link: './docs/1989/1989_06_23_wn_omaps.pdf',
        start: 'WN',
        me: 'М-15'
    },
    {
        name: 'Ориентир-7 (Лемболово)',
        date: '1989-06-28',
        start: 'ORIENTIR',
        link: './docs/1989/1989_06_28_orientir_7_omaps.pdf',
        planner: 'DRBSHV'
    },
    {
        name: 'Ориентир-8 (Комарово)',
        date: '1989-07-02',
        start: 'ORIENTIR',
        link: './docs/1989/1989_07_02_orientir_8_omaps.pdf',
    },
    {
        name: 'Ориентир-9 (Токсово, Большой Кавголовский трамплин)',
        date: '1989-07-05',
        start: 'ORIENTIR',
        link: './docs/1989/1989_07_05_orientir_9_omaps.pdf',
    },
    {
        name: 'Ориентир-10 (Репино)',
        date: '1989-07-09',
        start: 'ORIENTIR',
        link: './docs/1989/1989_07_09_orientir_10_omaps.pdf',
        planner: 'SHICK'
    },
    {
        name: 'Ориентир-11 (Лемболово)',
        date: '1989-07-13',
        start: 'ORIENTIR',
        link: './docs/1989/1989_07_13_orientir_11_omaps.pdf',
        planner: 'DRZGLSKY'
    },
    {
        name: 'Ориентир-12 (Васкелово)',
        date: '1989-07-16',
        start: 'ORIENTIR',
        link: './docs/1989/1989_07_16_orientir_12_omaps.pdf',
    },
    {
        name: 'Ориентир-13 (Кавголово)',
        date: '1989-07-19',
        start: 'ORIENTIR',
        link: './docs/1989/1989_07_19_orientir_13_omaps.pdf',
        planner: 'KRZHNVSKY'
    },
    {
        name: 'Ориентир-14 (Васкелово)',
        date: '1989-07-23',
        start: 'ORIENTIR',
        link: './docs/1989/1989_07_23_orientir_14_omaps.pdf',
        planner: 'BLNV_A'
    },
    {
        name: 'Ориентир-15 (Токсово)',
        date: '1989-07-26',
        start: 'ORIENTIR',
        link: './docs/1989/1989_07_26_orientir_15_omaps.pdf',
        planner: 'BRDLN_Y'
    },
    {
        name: 'Ориентир-16 (Всеволожск)',
        date: '1989-07-30',
        start: 'ORIENTIR',
        link: './docs/1989/1989_07_30_orientir_16_omaps.pdf',
    },
    {
        name: 'Зелёный змей (Орехово)',
        date: '1989-08-27',
        start: 'GS',
        link: './docs/1989/1989_08_27_green_snake_omaps.pdf',
    },
    {
        name: 'Ориентир-18 (Орловский парк)',
        date: '1989-08-30',
        start: 'ORIENTIR',
        link: './docs/1989/1989_08_30_orientir_18_omaps.pdf',
        planner: 'TMKV_G'
    },
    {
        name: 'Ориентир-19, на призы газеты Невская заря (Всеволожский парк)',
        date: '1989-09-02',
        link: './docs/1989/1989_09_02_orientir_19_omaps.pdf',
        start: 'ORIENTIR',
        planner: 'RYLOV_V',
        me: 'М-Б'
    },
    {
        name: 'Критериум-6 (садоводство Дружное)',
        date: '1989-09-03',
        link: './docs/1989/1989_09_03_kriterium_6_omaps.pdf',
    },
    {
        name: 'Ориентир-20 (Токсово)',
        date: '1989-09-06',
        link: './docs/1989/1989_09_06_orientir_20_omaps.pdf',
        start: 'ORIENTIR',
        me: 'М-Б'
    },
    {
        name: 'П-во КСО АЗИМУТ среди ветеранов (Токсово)',
        date: '1989-09-10',
        link: './docs/1989/1989_09_10_veterans_omaps.pdf',
        planner: 'SHVR'
    },
    {
        name: 'Чемпионат Ленинграда (Лемболово)',
        date: '1989-09-16',
        link: './docs/1989/1989_09_16_championship_omaps.pdf',
        planner: 'BYMKV'
    },
    {
        name: 'Летний чемпионат Ленинграда, эстафета (Петровское)',
        date: '1989-09-17',
        link: './docs/1989/1989_09_17_championship_omaps.pdf',
        planner: 'OVCHNNKV'
    },
    {
        name: 'Летний чемпионат Ленинграда, удлиннённая дистанция (Юкки)',
        date: '1989-09-24',
        link: './docs/1989/1989_09_24_championship_omaps.pdf',
        planner: 'SHLKHN_Y'
    },
    {
        name: 'Ориентир-20 (Песочная)',
        date: '1989-09-24',
        link: './docs/1989/1989_09_24_orientir_20_omaps.pdf',
        start: 'ORIENTIR',
        planner: 'VSLVSKY'
    },
    {
        name: 'День Конституции СССР (69км, о Щучье)',
        date: '1989-10-07',
        info: '7-8 октября.',
        link: './docs/1989/1989_10_07_constitution_omaps.pdf',
        planner: 'ARTMV'
    },
    {
        name: 'П-во обкома радиоэлектроники (Лемболово)',
        date: '1989-10-15',
        link: './docs/1989/1989_10_15_obkom_electricity_omaps.pdf',
    },
    {
        name: 'XXVIII командные ночные соревнования туристов памяти А.Окинчица (Мельничный ручей)',
        date: '1989-10-20',
        link: './docs/1989/1989_10_20_okinchitsa_omaps.pdf',
    },
    {
        name: 'Ориентир-21 (Комарово)',
        date: '1989-11-05',
        link: './docs/1989/1989_11_05_orientir_21_omaps.pdf',
        start: 'ORIENTIR',
        planner: 'DRBSHV'
    },
    {
        name: 'Соревнования в з/н (Лемболово)',
        date: '1989-11-08',
        link: './docs/1989/1989_11_08_lembolovo_omaps.pdf',
        planner: 'OSPV'
    },
    {
        name: 'Соревнования на маркированной трассе (Токсово)',
        date: '1989-11-12',
        link: './docs/1989/1989_11_12_toksovo_omaps.pdf',
        planner: 'SMNV_M'
    },
    {
        name: 'Ориентир-24, маркир (Токсово)',
        date: '1989-11-19',
        link: './docs/1989/1989_11_19_orientir_24_omaps.pdf',
        start: 'ORIENTIR',
        me: 'М'
    },
    {
        name: 'Соревнования (Зеленогорск)',
        date: '1989-11-26',
        link: './docs/1989/1989_11_26_zelenogorsk_omaps.pdf',
    },
    {
        name: 'Ориентир-3 (Кузьмолово)',
        date: '1990-04-22',
        link: './docs/1990/1990_04_22_orientir_3_omaps.pdf',
        start: 'ORIENTIR',
        planner: 'FDRV_L',
        me: 'МА'
    },
    {
        name: 'Майские многодневные соревнования (Воейково)',
        date: '1990-04-30',
        link: './docs/1990/1990_04_30_mayski_omaps.pdf',
        info: '30 апреля - 2 мая.',
    },
    {
        name: 'Ориентир-9 (Юкки)',
        date: '1990-06-06',
        start: 'ORIENTIR',
        info: '<a href="./docs/1990/1990_06_06_yukki/doc_1_omaps.gif">МА</a>, <a href="./docs/1990/1990_06_06_yukki/doc_2_omaps.gif">МБ</a>, <a href="./docs/1990/1990_06_06_yukki/doc_3_omaps.gif">МС,Н</a>, <a href="./docs/1990/1990_06_06_yukki/doc_4_omaps.gif">ЖА</a>, <a href="./docs/1990/1990_06_06_yukki/doc_5_omaps.gif">ЖБ,ЖС</a>',
        links: ['1990_06_06_yukki', 5, 'gif'],
        me: 'МА'
    },
    {
        name: 'Зелёный змей (Лемболово)',
        date: '1990-08-26',
        link: './docs/1990/1990_08_26_green_snake_omaps.pdf',
        start: 'GS',
    },
    {
        name: '"Дыхание осени" на День Конституции СССР',
        date: '1990-10-06',
        info: '6 и 7 октября. <a href="./docs/1990/sosnovo_1990_10_06/doc_3_omaps.jpg">Положение</a>, <a href="./docs/1990/sosnovo_1990_10_06/doc_4_omaps.jpg">МА</a>. Карты можно найти <a href="map-info.html?map=sosnovo_1990_10_06">тут</a>.',
        links: ['1990/sosnovo_1990_10_06', 4]
    },
    {
        name: 'Ориентир-26 (Сосновка)',
        start: 'ORIENTIR',
        date: '1990-09-12',
        link: './docs/1990/1990_09_12_orientir_26_omaps.pdf',
        planner: 'BLNV_A',
    },
    {
        name: 'Ориентир-27 (Зеленогорск)',
        start: 'ORIENTIR',
        date: '1990-11-04',
        link: './docs/1990/1990_11_04_orientir_27_omaps.pdf',
        planner: 'FDRV_L',
    },
    {
        name: 'Ориентир-28 (Лемболово)',
        start: 'ORIENTIR',
        date: '1990-11-08',
        link: './docs/1990/1990_11_08_orientir_28_omaps.pdf',
        planner: 'KRVCHNKO_A',
        me: "М-А"
    },
    {
        name: 'Ориентир-29, маркир (Токсово)',
        start: 'ORIENTIR',
        date: '1990-11-10',
        link: './docs/1990/1990_11_10_orientir_29_omaps.pdf',
        info: 'Карту можно найти <a href="map-info.html?map=orientir_1990_11_10">тут</a>.'
    },
    {
        name: 'Соревнования по эстафете с ориентированием (Токсово)',
        date: '1990-11-18',
        link: './docs/1990/1990_11_18_relay_omaps.pdf',
    },
    {
        name: 'Невская заря',
        info: '5-6 января.',
        date: '1991-01-05',
        link: './docs/1991/1991_01_05_nzarya_omaps.pdf',
    },
    {
        name: 'Кубок Ленинграда (Кавголово)',
        date: '1991-01-19',
        info: '19-20 января.',
        link: ['./docs/1991/1991_01_19_leningrad_cup_omaps.pdf','./docs/1991/1991_01_20_leningrad_cup_omaps.pdf'],
        planner: 'SHRNN',
        me: 'М18'
    },
    {
        name: 'П-во Ленинграда, маркир (Сосново)',
        info: '2-3 февраля.',
        date: '1991-02-02',
        link: ['./docs/1991/1991_02_02_leningrad_omaps.pdf','./docs/1991/1991_02_03_leningrad_omaps.pdf'],
        planner: 'MRSKY_S',
        me: 'H17'
    },
    {
        name: 'П-во Ленинграда, з/н и эстафета (Сосново)',
        info: '9-10 февраля.',
        date: '1991-02-09',
        link: ['./docs/1991/1991_02_09_leningrad_omaps.pdf','./docs/1991/1991_02_10_leningrad_omaps.pdf'],
        planner: ['MRSKY_S','RYLOV_V'],
        me: 'М17а,М3'
    },
    {
        name: 'П-во обкома профсоюза (Шуваловский парк)',
        date: '1991-02-16',
        link: './docs/1991/1991_02_16_obkom_unions_omaps.pdf',
    },
    {
        name: 'Зимнее п-во клуба АЗИМУТ (Колтуши)',
        date: '1991-02-17',
        link: './docs/1991/1991_02_17_azimut_omaps.pdf',
    },
    {
        name: 'Чемпионат ЛОС ДФСО профсоюзов, маркир (Кузьмолово)',
        date: '1991-03-09',
        link: './docs/1991/1991_03_09_vdfso_unions_omaps.pdf',
        planner: ['BRDLN_Y','TLNV_A','SVTKN','LVCHV'],
    },
    {
        name: 'Ориентир-1 (Воейково)',
        date: '1991-04-07',
        start: 'ORIENTIR',
        info: '<a href="./docs/1991/1991_04_07_voeykovo/doc_12_omaps.gif">МЭ</a>, <a href="./docs/1991/1991_04_07_voeykovo/doc_1_omaps.gif">МА</a>, <a href="./docs/1991/1991_04_07_voeykovo/doc_2_omaps.gif">МB</a>, <a href="./docs/1991/1991_04_07_voeykovo/doc_3_omaps.gif">МB(2)</a>, <a href="./docs/1991/1991_04_07_voeykovo/doc_4_omaps.gif">МС,Н</a>, <a href="./docs/1991/1991_04_07_voeykovo/doc_5_omaps.gif">МС,Н(2)</a>, <a href="./docs/1991/1991_04_07_voeykovo/doc_6_omaps.gif">МС,Н(3)</a>, <a href="./docs/1991/1991_04_07_voeykovo/doc_7_omaps.gif">ЖЭ</a>, <a href="./docs/1991/1991_04_07_voeykovo/doc_8_omaps.gif">ЖА</a>, <a href="./docs/1991/1991_04_07_voeykovo/doc_9_omaps.gif">ЖВ</a>, <a href="./docs/1991/1991_04_07_voeykovo/doc_10_omaps.gif">ЖВ(2)</a>, <a href="./docs/1991/1991_04_07_voeykovo/doc_11_omaps.gif">ЖС,Н</a>.',
        links: ['1991_04_07_voeykovo', 12, 'gif'],
        planner: 'SMNV_M',
        me: 'МА'
    },
    {
        name: 'Ориентир-2 (Колтуши)',
        date: '1991-04-13',
        start: 'ORIENTIR',
        info: 'Карту можно найти <a href="map-info.html?map=orientir_1991_04_13">тут</a>.',
        link: './docs/1991/1991_04_13_orientir_2_omaps.pdf',
        planner: 'NKLVCH'
    },
    {
        name: 'Бро-бег',
        date: '1991-04-14',
        link: './docs/1991/1991_04_14_brobeg_omaps.pdf',
        me: 'М-4'
    },
    {
        name: 'Ориентир-3 (Юкки)',
        date: '1991-04-27',
        start: 'ORIENTIR',
        info: '<a href="./docs/1991/1991_04_27_yukki/doc_1_omaps.gif">МА</a>, <a href="./docs/1991/1991_04_27_yukki/doc_2_omaps.gif">МА(2)</a>, <a href="./docs/1991/1991_04_27_yukki/doc_3_omaps.gif">МB</a>, <a href="./docs/1991/1991_04_27_yukki/doc_4_omaps.gif">МВ(2)</a>, <a href="./docs/1991/1991_04_27_yukki/doc_5_omaps.gif">МС</a>, <a href="./docs/1991/1991_04_27_yukki/doc_6_omaps.gif">МС,Н</a>, <a href="./docs/1991/1991_04_27_yukki/doc_7_omaps.gif">МН</a>, <a href="./docs/1991/1991_04_27_yukki/doc_8_omaps.gif">ЖА</a>, <a href="./docs/1991/1991_04_27_yukki/doc_9_omaps.gif">ЖВ</a>, <a href="./docs/1991/1991_04_27_yukki/doc_10_omaps.gif">ЖВ(2)</a>, <a href="./docs/1991/1991_04_27_yukki/doc_11_omaps.gif">ЖС</a>, <a href="./docs/1991/1991_04_27_yukki/doc_12_omaps.gif">ЖН</a>.',
        links: ['1991_04_27_yukki', 12, 'gif'],
        planner: 'PVLV_M',
        me: 'МА'
    },
    {
        name: 'XV соревнования школьников "День эстафет" (Токсово)',
        date: '1991-04-28',
        link: './docs/1991/1991_04_28_relay_omaps.pdf',
        planner: 'BRSNTSNA',
    },
    {
        name: 'Майские многодневные соревнования (Шалово)',
        date: '1991-05-01',
        link: './docs/1991/1991_05_01_mayski_omaps.pdf',
        info: '1-3 мая.',
        planner: ['FDRV_L','DRBSHV']
    },
    {
        name: 'Подснежник (Токсово)',
        date: '1991-05-09',
        link: './docs/1991/1991_05_09_snowdrop_omaps.pdf',
        planner: 'SVTKN',
    },
    {
        name: 'Открытие сезона',
        date: '1991-05-09',
        link: './docs/1991/1991_05_09_open_omaps.pdf'
    },
    {
        name: 'Приз Ленинградского телевидения (Орловский л/п)',
        date: '1991-05-11',
        link: './docs/1991/1991_05_11_tv_omaps.pdf',
        planner: 'FDRV_L'
    },
    {
        name: 'Приз газеты "Охта" (Стадион "Химик")',
        date: '1991-05-19',
        link: './docs/1991/1991_05_19_okhta_omaps.pdf',
    },
    {
        name: 'Летняя спартакиада клуба "ЭНЕРГИЯ" (Охтинский парк)',
        date: '1991-05-23',
        link: './docs/1991/1991_05_23_energy_omaps.pdf',
        planner: 'VSLVSKY'
    },
    {
        name: 'Кубок Ленинграда (69км)',
        date: '1991-05-25',
        info: '25-26 мая.',
        link: ['./docs/1991/1991_05_25_leningrad_cup_omaps.pdf','./docs/1991/1991_05_26_leningrad_cup_omaps.pdf'],
        planner: ['KUZNTSV_V','TRSV_D','BNDRNK']
    },
    {
        name: 'П-во КНО (Юкки)',
        date: '1991-05-28',
        link: './docs/1991/1991_05_28_kno_omaps.pdf',
        planner: 'RYZHOV'
    },
    {
        name: 'Ориентир-7 (Сертолово)',
        date: '1991-05-29',
        start: 'ORIENTIR',
        info: 'Карту можно найти <a href="map-info.html?map=orientir_1991_05_29">тут</a>.',
        link: './docs/1991/1991_05_29_orientir_7_omaps.pdf',
    },
    {
        name: 'Ориентир-8 (Орловский л/п)',
        date: '1991-06-05',
        start: 'ORIENTIR',
        info: 'Карту можно найти <a href="map-info.html?map=orientir_1991_06_08">тут</a>.',
        link: './docs/1991/1991_06_05_orientir_8_omaps.pdf',
    },
    {
        name: 'Чемпионат Ленинграда (Шапки)',
        date: '1991-06-09',
        link: './docs/1991/1991_06_09_leningrad_omaps.pdf',
        info: 'С картой.',
        planner: 'KRCHKN_V'
    },
    {
        name: 'Ориентир-10 (Токсово)',
        date: '1991-06-12',
        start: 'ORIENTIR',
        info: '<a href="./docs/1991/1991_06_12_toksovo/doc_1_omaps.gif">МА</a>, <a href="./docs/1991/1991_06_12_toksovo/doc_2_omaps.gif">МА(2)</a>, <a href="./docs/1991/1991_06_12_toksovo/doc_3_omaps.gif">МБ</a>, <a href="./docs/1991/1991_06_12_toksovo/doc_4_omaps.gif">МБ(2)</a>, <a href="./docs/1991/1991_06_12_toksovo/doc_5_omaps.gif">МС,Н</a>, <a href="./docs/1991/1991_06_12_toksovo/doc_6_omaps.gif">ЖА,ЖС</a>, <a href="./docs/1991/1991_06_12_toksovo/doc_7_omaps.gif">ЖБ</a>',
        links: ['1991_06_12_toksovo', 7, 'gif'],
        me: 'МА'
    },
    {
        name: 'Летний чемпионат ЛОС ВДФСО профсоюзов (Невский л/п, Вартемяки)',
        date: '1991-06-15',
        info: '15-16 июня',
        link: ['./docs/1991/1991_06_15_vdfso_unions_omaps.pdf','./docs/1991/1991_06_16_vdfso_unions_omaps.pdf'],
        planner: ['SHRNN','SHLKHN_Y']
    },
    {
        name: 'Ориентир-11 (Лемболово)',
        date: '1991-06-26',
        start: 'ORIENTIR',
        planner: 'BYMKV',
        info: 'Карту можно найти <a href="map-info.html?map=orientir_1991_06_26">тут</a>.',
        link: './docs/1991/1991_06_26_orientir_11_omaps.pdf',
    },
    {
        name: 'Многодневка "Белые Ночи" (Сосново)',
        date: '1991-06-26',
        start: 'WN',
        info: '26-28 июня.',
        link: './docs/1991/1991_06_26_wn_omaps.pdf',
        me: 'H17'
    },
    {
        name: 'Ориентир-12 (Токсово)',
        date: '1991-07-03',
        start: 'ORIENTIR',
        planner: 'BRSV_V',
        info: 'Карту можно найти <a href="map-info.html?map=orientir_1991_07_03">тут</a>.',
        link: './docs/1991/1991_07_03_orientir_12_omaps.pdf',
    },
    {
        name: 'Ориентир-13 (Васкелово)',
        date: '1991-07-07',
        start: 'ORIENTIR',
        planner: 'BLNV_A',
        info: 'Карту можно найти <a href="map-info.html?map=orientir_1991_07_07">тут</a>.',
        link: './docs/1991/1991_07_07_orientir_13_omaps.pdf',
    },
    {
        name: 'Ориентир-14 (Кавголово)',
        date: '1991-07-10',
        start: 'ORIENTIR',
        info: 'Карту можно найти <a href="map-info.html?map=orientir_1991_07_10">тут</a>.',
        link: './docs/1991/1991_07_10_orientir_14_omaps.pdf',
    },
    {
        name: 'Ориентир-16 (Токсово)',
        date: '1991-07-17',
        start: 'ORIENTIR',
        info: 'Карту можно найти <a href="map-info.html?map=orientir_1991_07_20">тут</a>.',
        link: './docs/1991/1991_07_17_orientir_16_omaps.pdf',
        me: 'МА'
    },
    {
        name: 'Ориентир-17 (Кузнечное)',
        date: '1991-07-21',
        start: 'ORIENTIR',
        info: 'Карту можно найти <a href="map-info.html?map=orientir_1991_07_21">тут</a>.',
        link: './docs/1991/1991_07_20_orientir_17_omaps.pdf'
    },
    {
        name: 'Ориентир-19 (Невский л/п)',
        date: '1991-07-24',
        start: 'ORIENTIR',
        info: 'Карту можно найти <a href="map-info.html?map=orientir_1991_07_24">тут</a>.',
        link: './docs/1991/1991_07_24_orientir_19_omaps.pdf',
        planner: 'DSHKO'
    },
    {
        name: 'Зелёный змей',
        date: '1991-08-25',
        start: 'GS',
        link: './docs/1991/1991_08_25_green_snake_omaps.pdf',
        me: 'М'
    },
    {
        name: 'Ориентир-22 (ст Песочное)',
        date: '1991-08-28',
        start: 'ORIENTIR',
        info: 'Карту можно найти <a href="map-info.html?map=orientir_1991_08_28">тут</a>.',
        link: './docs/1991/1991_08_28_orientir_22_omaps.pdf',
        me: 'H-A'
    },
    {
        name: 'Ориентир-23 (Шуваловский парк)',
        date: '1991-09-04',
        start: 'ORIENTIR',
        info: 'Карту можно найти <a href="map-info.html?map=orientir_1991_09_04">тут</a>.',
        link: './docs/1991/1991_09_04_orientir_23_omaps.pdf',
    },
    {
        name: 'П-во КСО "Невский азимут" (Гарболово)',
        date: '1991-09-08',
        link: './docs/1991/1991_09_08_club_championship_omaps.pdf',
        planner: 'KRZHNVSKY',
        me: 'H-A'
    },
    {
        name: 'Ориентир-24 (Сосновка)',
        date: '1991-09-11',
        start: 'ORIENTIR',
        info: 'Карту можно найти <a href="map-info.html?map=orientir_1991_09_11">тут</a>.',
        link: './docs/1991/1991_09_11_orientir_24_omaps.pdf',
        me: 'H-A',
        planner: 'AMSVA'
    },
    {
        name: 'Соревнования среди спортсменов старшего возраста (Васкелово)',
        date: '1991-09-14',
        info: '14-15 сентября.',
        link: ['./docs/1991/1991_09_14_veterans_omaps.pdf','./docs/1991/1991_09_15_veterans_omaps.pdf'],
        planner: 'SMNV_M'
    },
    {
        name: 'Кубок ЛГДТЮ (Комарово)',
        date: '1991-09-15',
        link: './docs/1991/1991_09_15_lgdty_omaps.pdf',
        planner: 'GRV_M'
    },
    {
        name: 'Чемпионат Ленинграда, удлиннённая дистанция (Шапки)',
        date: '1991-09-21',
        link: './docs/1991/1991_09_21_leningrad_omaps.pdf',
        info: 'С картой.',
        planner: 'KRCHKN_V'
    },
    {
        name: 'Чемпионат Ленинграда, эстафета (Шапки)',
        date: '1991-09-22',
        link: './docs/1991/1991_09_22_leningrad_omaps.pdf',
        planner: 'KRCHKN_V'
    },
    {
        name: 'Ориентир-25 (Орехово)',
        date: '1991-09-29',
        start: 'ORIENTIR',
        info: 'Карту можно найти <a href="map-info.html?map=orientir_1991_09_29">тут</a>.',
        link: './docs/1991/1991_09_29_orientir_25_omaps.pdf',
        planner: 'FDRV_L'
    },
    {
        name: 'Золотая осень (Осельки)',
        date: '1991-10-05',
        info: '5-6 октября.',
        link: './docs/1991/1991_10_05_golden_autumn_omaps.pdf',
        planner: ['DRBSHV','FDRV_L'],
        me: 'H17'
    },
    {
        name: 'Ночной СПб, эстафеты (Лемболово)',
        date: '1991-10-12',
        link: './docs/1991/1991_10_12_night_omaps.pdf',
        planner: 'GBNVA_A',
    },
    {
        name: 'П-во ФОК Антей (Юкки)',
        date: '1991-10-13',
        link: './docs/1991/1991_10_13_antey_omaps.pdf',
    },
    {
        name: 'Свадебные-91 (Лемболово)',
        date: '1991-10-13',
        link: './docs/1991/1991_10_13_wedding_omaps.pdf',
        start: 'WEDDING'
    },
    {
        name: 'Закрытие сезона (Мельничный ручей)',
        date: '1991-10-27',
        link: './docs/1991/1991_10_27_season_close_omaps.pdf',
    },
    {
        name: 'Ориентир-27 (Лемболово)',
        date: '1991-11-08',
        start: 'ORIENTIR',
        info: 'Карту можно найти <a href="map-info.html?map=orientir_1991_11_08">тут</a>.',
        link: './docs/1991/1991_11_08_orientir_27_omaps.pdf',
        planner: 'FSNKO'
    },
    {
        name: 'Всесоюзные соревнования по спортивному ориентированию среди спортсменов среднего и старшего возраста (Нижний Новгород)',
        date: '1991-03-01',
        link: './docs/1991/1991_veteran_ussr_omaps.pdf',
        info: '1-3 марта.'
    },
    {
        name: 'Новогодняя ночь',
        date: '1992-01-01',
        link: './docs/1992/1992_01_01_new_year_omaps.pdf',
    },
    {
        name: 'Календарь "Субботнего марафона" клуба "Карта"',
        year: 2003,
        info: '2003-2004гг',
        link: './docs/2003_karta_saturday_marathon_omaps.jpg',
        owner: 'KARTA'
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
    {
        name: 'Итоги и результаты',
        start: '2x2',
        year: 2005,
        info: 'Карты можно найти <a href="map-info.html?map=2x2_2005_05_10">тут</a> и <a href="map-info.html?map=2x2_2005_05_07">тут</a>.',
        link: './docs/2x2/2005_kuzmolovo_2x2_itogi_omaps.pdf',
        planner: 'SHRNN'
    },
    {
        name: 'Буклет',
        start: '2x2',
        year: 2005,
        info: 'Карты можно найти <a href="map-info.html?map=2x2_2005_05_10">тут</a> и <a href="map-info.html?map=2x2_2005_05_07">тут</a>.',
        link: './docs/2x2/2005_kuzmolovo_2x2_photos_omaps.doc',
        planner: 'SHRNN'
    },
    {
        name: 'Афиша',
        start: '2x2',
        year: 2006,
        info: 'Карты можно найти <a href="map-info.html?map=2x2_2006_04_29">тут</a>, <a href="map-info.html?map=2x2_2006_04_30">тут</a> и <a href="map-info.html?map=2x2_2006_05_01">тут</a>.',
        link: './docs/2x2/2006_2x2_info_omaps.jpg',
        planner: 'SHRNN'
    },
    {
        name: 'Положение',
        start: '2x2',
        year: 2006,
        info: 'Карты можно найти <a href="map-info.html?map=2x2_2006_04_29">тут</a>, <a href="map-info.html?map=2x2_2006_04_30">тут</a> и <a href="map-info.html?map=2x2_2006_05_01">тут</a>.',
        link: './docs/2x2/2006_2x2_rules_omaps.pdf',
        planner: 'SHRNN'
    },
    {
        name: 'Положение',
        start: '2x2',
        year: 2007,
        info: 'Карты можно найти <a href="map-info.html?map=2x2_2007_04_29">тут</a>, <a href="map-info.html?map=2x2_2007_04_30">тут</a> и <a href="map-info.html?map=2x2_2007_05_01">тут</a>.',
        link: './docs/2x2/2007_2x2_rules_omaps.pdf',
        planner: 'SHRNN'
    },
    {
        name: 'Результаты',
        start: '2x2',
        year: 2008,
        info: 'Карты можно найти <a href="map-info.html?map=2x2_2008_05_01">тут</a>, <a href="map-info.html?map=2x2_2008_05_02">тут</a> и <a href="map-info.html?map=2x2_2008_05_03">тут</a>.',
        link: './docs/2x2/2008_2x2_results_omaps.pdf',
        planner: 'SHRNN'
    },
    {
        name: 'Итоги',
        start: '2x2',
        year: 2008,
        info: 'Карты можно найти <a href="map-info.html?map=2x2_2008_05_01">тут</a>, <a href="map-info.html?map=2x2_2008_05_02">тут</a> и <a href="map-info.html?map=2x2_2008_05_03">тут</a>.',
        link: './docs/2x2/2008_2x2_total_omaps.pdf',
        planner: 'SHRNN'
    },
    {
        name: 'Положение',
        start: '2x2',
        year: 2009,
        info: 'Карты можно найти <a href="map-info.html?map=2x2_2009_05_02">тут</a> и <a href="map-info.html?map=2x2_2009_05_03">тут</a>.',
        link: './docs/2x2/2009_2x2_rules_omaps.pdf',
        planner: 'SHRNN'
    },
    {
        name: 'Результаты',
        start: '2x2',
        year: 2010,
        info: 'Карту можно найти <a href="map-info.html?map=2x2_2010_05_09">тут</a>.',
        link: './docs/2x2/2010_2x2_results_omaps.pdf',
        planner: 'SHRNN'
    },
];
