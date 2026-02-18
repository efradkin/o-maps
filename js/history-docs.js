let historyDocs = [
    // --- Исторические документы ---
    {
        name: 'Условные знаки спортивных карт',
        year: 1,
        link: './docs/sport_maps_old_signs_omaps.jpg',
        qtty: 2
    },
    {
        name: 'Календарь соревнований на зиму',
        year: 1967,
        link: './docs/1967/1967_calendar_winter_omaps.pdf'
    },
    {
        name: 'Календарь соревнований на зиму',
        year: 1968,
        link: './docs/1968/1968_calendar_winter_omaps.pdf'
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
        link: './docs/1969/sport_week_leningrad_1969_article_omaps.jpg'
    },
    {
        name: 'Статья в газете "Советский спорт"',
        year: 1969,
        link: './docs/1969/sov_sport_1969_article_omaps.jpg'
    },
    {
        name: 'П-во ЦС СДСО Буревестник, маркир (Уфа, Тавтиманово)',
        date: '1969-03-02',
        link: './docs/1969/1969_03_02_ufa_tavtimanovo_omaps.pdf',
        info: '2-4 марта.',
        map: 'tavtimanovo_1969'
    },
    {
        name: 'П-во ЦС СДСО Буревестник, эстафеты (Уфа, Юматово)',
        date: '1969-03-04',
        link: './docs/1969/1969_03_04_ufa_umatovo_omaps.pdf',
        info: '2-4 марта.',
        map: 'umatovo_1969_03_04'
    },
    {
        name: 'Матч городов-героев (Одесса, Бендеры)',
        date: '1969-04-12',
        link: './docs/1969/1969_04_12_odessa_omaps.pdf',
    },
    {
        name: 'П-во ЛГУ им.Жданова (Павловск)',
        date: '1969-04-20',
        link: './docs/1969/1969_04_20_lgu_pavlovsk_omaps.pdf',
    },
    {
        name: 'П-во мат-меха ЛГУ (Невский л/п)',
        date: '1969-04-27',
        link: './docs/1969/1969_04_27_matmech_lgu_nevsky_omaps.pdf',
    },
    {
        name: 'Матчевая вствеча ДСО ТРУД Москва - Ленинград (Московская обл, Ольгово)',
        date: '1969-03-16',
        info: 'Сводный протокол.',
        link: './docs/1969/1969_03_16_moskva_leningrad_omaps.pdf',
    },
    {
        name: 'Приз Ленинградского турклуба (69км, оз Осиновское)',
        date: '1969-05-25',
        info: 'Отчёты, схемы, протоколы.',
        link: './docs/1969/1969_05_25_lkt_omaps.pdf',
    },
    {
        name: 'X матч ЛЕНИНГРАД - ЭСТОНСКАЯ ССР (Тырва)',
        date: '1969-06-21',
        info: 'Рекламный буклет и в нём сводные результаты всех предыдущих матчей. Протокол результатов.',
        link: ['./docs/1969/1969_06_21_leningrad_estonia_booklet_omaps.pdf','./docs/1969/1969_06_21_leningrad_estonia_omaps.pdf'],
    },
    {
        name: '10-летие секции ориентирования в Ленинграде (Гарболово)',
        date: '1969-06-28',
        info: '28-29 июня. Командные соревнования, эстафеты.',
        map: 'sirkojarvi_1969',
        link: './docs/1969/1969_06_21_garbolovo_10_years_omaps.pdf'
    },
    {
        name: 'II-я матчевая встреча Рига - Ленинград (Ильичёво, оз Долгое)',
        date: '1969-07-19',
        info: '19-20 июля.',
        link: './docs/1969/1969_07_19_riga_leningrad_omaps.pdf',
        planner: 'KPSTN'
    },
    {
        name: 'П-во Ленинграда, эстафета (Можайское)',
        date: '1969-09-28',
        info: '21-28 сентября.',
        link: './docs/1969/1969_09_28_leningrad_relay_omaps.pdf',
        planner: 'KPSTN'
    },
    {
        name: 'Золотые кольца',
        date: '1969-11-16',
        info: 'Приглашение.',
        map: 'lobnia_1969',
        link: './docs/1969/1969_lobnia_welcome_omaps.jpg',
        start: 'WEDDING'
    },
    {
        name: 'Календарь соревнований',
        year: 1970,
        link: './docs/1970/1970_calendar_omaps.pdf'
    },
    {
        name: 'П-во Ленинграда (Приветнинское)',
        date: '1970-02-22',
        link: './docs/1970/1970_02_22_leningrad_omaps.pdf',
    },
    {
        name: 'Календарь соревнований секции ориентирования',
        year: 1971,
        link: './docs/1971/1971_calendar_omaps.pdf'
    },
    {
        name: 'П-во ЛОМО (Сярьги)',
        date: '1971-02-07',
        link: './docs/1971/1971_02_07_lomo_omaps.pdf',
        map: 'sjargi_1971_lomo'
    },
    {
        name: 'IV матч Рига - Ленинград (Шапки)',
        date: '1971-07-03',
        link: './docs/1971/1971_07_03_riga_leningrad_omaps.pdf'
    },
    {
        name: 'Первенство завода Вибратор (Петяярви)',
        date: '1971-07-05',
        link: './docs/1971/1971_07_05_petyajarvi_omaps.pdf',
        map: 'petyajarvi_1968'
    },
    {
        name: 'Первенство Ленинградской обл (Вартемяки)',
        date: '1971-05-23',
        link: './docs/1971/1971_05_23_lo_omaps.pdf',
        planner: ['LNV_Y','MLVA_M']
    },
    {
        name: 'Белые Ночи',
        date: '1971-06-12',
        info: 'Первые  массовые соревнования "Белые Ночи".',
        link: './docs/1971/1971_06_12_wn_omaps.pdf',
        start: 'WN',
        map: 'roschino_1971_wn',
        major: true
    },
    {
        name: 'Матч Болгария - СССР (Псков)',
        date: '1971-07-23',
        link: './docs/1971/1971_07_23_bulgaria_ussr_omaps.pdf'
    },
    {
        name: 'IV матч Рига - Ленинград, эстафета (Шапки)',
        date: '1971-07-04',
        link: './docs/1971/1971_07_04_riga_leningrad_omaps.pdf'
    },
    {
        name: 'Первенство Ленинграда (Горьковское)',
        date: '1971-08-29',
        link: './docs/1971/1971_08_29_leningrad_omaps.pdf'
    },
    {
        name: 'Первенство Ленинграда, марафон (Комарово)',
        date: '1971-09-19',
        link: './docs/1971/1971_09_19_leningrad_marathon_omaps.pdf'
    },
    {
        name: 'Календарь соревнований на лето Центрального клуба туристов г.Ленинграда',
        year: 1973,
        link: './docs/1973/1973_calendar_summer_omaps.pdf'
    },
    {
        name: 'П-во г.Ленинграда на маркированной трассе (Сосново)',
        date: '1973-02-18',
        info: 'Отчёт.',
        map: 'sosnovo_black_forest_1974',
        link: './docs/1974_leningrad_omaps.pdf',
        planner: ['FDRV_A','SHRNN','GRZNVCH','SHRPV_V']
    },
    {
        name: 'Белые Ночи (Токсово)',
        date: '1977-06-18',
        link: './docs/1977/1977_06_18_wn_omaps.pdf',
        info: '18-19 июня.',
        start: 'WN',
        partly: true
    },
    {
        name: 'Белые Ночи, ранговые соревнования, отбор в сборную СССР (Токсово)',
        date: '1977-06-18',
        link: './docs/1977/1977_06_18_wn_rang_omaps.pdf',
        info: '18-19 июня. На БН-77 параллельно шли всесоюзные ранговые, отбор в сборную СССР. На тех же дистанциях. Рукописный протокол от Александра Шириняна.',
    },
    {
        name: 'П-во ЦС СДСО Буревестник, маркир (Уфа, Юматово)',
        date: '1977-03-14',
        link: './docs/1977/1977_03_14_ufa_umatovo_omaps.pdf',
        info: '13-15 марта.',
        map: 'ufa_markir_1977_03_14'
    },
    {
        name: 'Многодневка на приз Пржевальского (Смоленск, Баклановский)',
        date: '1977-07-24',
        link: './docs/1977/1977_07_24_przhevalsky_omaps.pdf',
        info: '24-25 июля.',
        start: 'PRZHVLSKY',
        partly: true,
        major: true
    },
    {
        name: 'П-во Ленинграда, марафон (Поляны)',
        date: '1977-09-04',
        link: './docs/1977/1977_09_04_leningrad_marathon_omaps.pdf',
        map: 'polyany_1977'
    },
    {
        name: 'Всесоюзные летние лично-командные соревнования (Сигулда)',
        date: '1977-09-24',
        link: './docs/1977/1977_09_24_sigulda_omaps.pdf',
        info: '24-25 сентября. Буклет.'
    },
    {
        name: 'Свадебные-77 (Васкелово)',
        date: '1977-10-09',
        link: './docs/1977/1977_10_09_wedding_omaps.pdf',
        start: 'WEDDING',
        map: 'marolampi_1977'
    },
    {
        name: 'VI командные ночные соревнования памяти А.Окинчица (Поляны)',
        date: '1977-10-29',
        link: './docs/1977/1977_10_29_okinchitsa_omaps.pdf',
        map: 'polyany_1977',
    },
    {
        name: 'П-во Ленинграда, марафон (Рощино)',
        date: '1979-09-23',
        link: './docs/1979/1979_09_23_leningrad_marathon_omaps.pdf',
        planner: 'KRCHNKO_S'
    },
    {
        name: 'П-во Ленинграда среди к/ф, эстафета (Кавголово)',
        date: '1979-03-08',
        link: './docs/1979/1979_03_08_leningrad_kf_relay_omaps.pdf',
        planner: 'DVRKO_V'
    },
    {
        name: 'П-во Ленинграда, марафон (Сосново)',
        date: '1979-03-10',
        link: './docs/1979/1979_03_10_leningrad_marathon_omaps.pdf',
    },
    {
        name: 'Новогодняя эстафета (Кузьмолово)',
        date: '1979-01-14',
        link: './docs/1979/1979_01_14_new_year_relay_omaps.pdf',
    },
    {
        name: 'Новогодняя эстафета',
        date: '1980-01-15',
        link: './docs/1980/1980_01_18_new_year_relay_omaps.pdf',
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
        name: 'Зимнее п-во ЛГС Спартак, выбор (Юкки)',
        date: '1983-03-19',
        link: './docs/1983/1983_03_19_spartak_omaps.pdf',
        map: 'yukki_1983_03_19',
        planner: 'SHLKHN_Y'
    },
    {
        name: 'Зимнее п-во ЛГС Спартак, маркир (Всеволожск)',
        date: '1983-03-20',
        link: './docs/1983/1983_03_20_spartak_omaps.pdf',
        map: 'vsevolozhsk_1983_03_20',
        planner: 'EGRV_E'
    },
    {
        name: 'Кубок ЛГС ДСО Спартак (Голубые Дачи)',
        date: '1983-09-17',
        link: './docs/1983/1983_09_17_mruchey_omaps.pdf',
        map: 'mruchey_1983_09_17'
    },
    {
        name: 'ILVESTEADE',
        year: 1984,
        info: 'Информационный бюллетень в форме буклета.',
        link: './docs/1984/1984_ilvesteade_omaps.pdf'
    },
    {
        name: 'Первенство Ленинграда',
        year: 1984,
        info: 'Информационный бюллетень, приуроченный к 25-летию ориентирования.',
        link: './docs/1984/1984_leningrad_info_omaps.pdf'
    },
    {
        name: 'Свадебные-84',
        year: 1984,
        link: './docs/1984/1984_wedding_omaps.pdf',
        start: 'WEDDING'
    },
    {
        name: 'Бро-бег (Кузьмолово)',
        date: '1985-04-07',
        link: './docs/1985/1985_04_07_brobeg_omaps.pdf'
    },
    {
        name: 'Белые Ночи (Будогощь)',
        date: '1984-06-17',
        link: './docs/1984/1984_06_17_wn_omaps.pdf',
        info: '17-19 июня.',
        start: 'WN',
        partly: true,
    },
    {
        name: 'XXVI Чемпионат Ленинграда (Петяярви)',
        date: '1984-08-25',
        link: './docs/1984/1984_08_25_leningrad_omaps.pdf',
        planner: ['LVCHV','SVTKN']
    },
    {
        name: 'XXVI Чемпионат Ленинграда, эстафета (Петяярви)',
        date: '1984-08-26',
        link: './docs/1984/1984_08_26_leningrad_relay_omaps.pdf',
        planner: ['LVCHV','SVTKN']
    },
    {
        name: 'XXVI Чемпионат Ленинграда, удлинённая дистанция (Токсово)',
        date: '1984-09-02',
        link: './docs/1984/1984_09_02_leningrad_long_omaps.pdf',
        planner: 'SHRNN'
    },
    {
        name: 'Осеннее п-во ЛГС ДСО Спартак (Песочная)',
        date: '1984-09-29',
        link: './docs/1984/1984_09_29_spartak_omaps.pdf',
        map: 'pesochnaya_1984_09_29_spartak'
    },
    {
        name: 'Открытие сезона ЛГС ДСО Спартак (Голубые Дачи)',
        date: '1985-04-21',
        info: '21, 27 апреля. Отчёт и протоколы результатов.',
        map: 'golubaya_dacha_1982',
        link: './docs/1985/1985_04_21_gdacha_omaps.pdf',
        planner: 'RYLOV_V',
        me: 'М-13'
    },
    {
        name: 'Юный спартаковец (Сосновка)',
        date: '1985-03-14',
        map: 'sosnovka_1981_omaps',
        link: './docs/1985/1985_03_14_young_spartak_omaps.pdf',
        info: 'М10, Ж10 и заявка.',
        partly: true,
        me: 'М-10'
    },
    {
        name: 'Приз Ленинградского телевидения (Кузьмолово)',
        date: '1985-05-10',
        link: './docs/1985/1985_05_10_tv_omaps.pdf',
        planner: 'KAZNTSV_S',
        me: 'М-10'
    },
    {
        name: 'Белые Ночи (Петяярви)',
        date: '1985-06-21',
        link: './docs/1985/1985_06_21_wn_omaps.pdf',
        info: '21-23 июня.',
        start: 'WN',
        partly: true,
        me: 'М-13'
    },
    {
        name: 'Буклет карт для спортивного ориентирования (Горький)',
        year: 1986,
        link: './docs/1986/1986_gorky_maps.pdf',
    },
    {
        name: 'Бро-бег (Кузьмолово)',
        date: '1986-04-13',
        link: './docs/1986/1986_04_13_brobeg_omaps.pdf',
        me: 'М-9'
    },
    {
        name: 'Приз Ленинградского телевидения (Песочное)',
        date: '1986-05-10',
        link: './docs/1986/1986_05_10_tv_omaps.pdf',
        map: 'pesochnaya_1986',
        planner: 'VSLVSKY',
        me: 'М-10'
    },
    {
        name: 'Чемпионат СССР (Казахская ССР, Карагандинская обл)',
        date: '1986-09-09',
        link: './docs/1986/1986_09_09_ussr_karaganda_omaps.pdf',
        map: 'karkaralinsk_1986',
        info: '9-11 сентября. Выписка из результатов.',
        major: true
    },
    {
        name: 'Юный спартаковец (Приморский парк Победы)',
        date: '1986-11-06',
        map: 'krestovsky_1985',
        link: './docs/1986/1986_11_06_young_spartak_omaps.pdf',
        me: 'М-10'
    },
    {
        name: 'Бро-бег (Кузьмолово)',
        date: '1987-04-05',
        link: './docs/1987/1987_04_05_brobeg_omaps.pdf',
        me: 'М-6'
    },
    {
        name: 'Белые Ночи (Орехово)',
        date: '1987-06-26',
        link: './docs/1987/1987_06_26_wn_omaps.pdf',
        info: '26-28 июня.',
        start: 'WN',
        partly: true,
        me: 'М-13-II'
    },
    {
        name: 'Азимут\'87. XIII Всесоюзные соревнования среди спортсменов среднего и старшего возраста (Петяярви)',
        date: '1987-07-22',
        link: './docs/1987/1987_07_22_masters_omaps.pdf',
        info: '22-26 июля.',
        map: 'petjajarvy_1987',
        major: true
    },
    {
        name: 'Ранг зимнего сезона 1988г ЛОС ДФСО профсоюзов',
        year: 1988,
        link: './docs/1988/1988_winter_rating_omaps.pdf',
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
        planner: ['SGLDA','OSMCHN','BRSV_V','SHRNN','PNKRTV_N']
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
        planner: 'VSLVSKY',
        start: 'NA'
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
        planner: 'PNKRTV_N'
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
        link: ['./docs/orienteering_booklet_1989_1_omaps.jpg','./docs/orienteering_booklet_1989_2_omaps.jpg'],
        major: true
    },
    {
        name: 'Бро-бег (Кузьмолово)',
        year: 1989,
        link: './docs/1989/1989_brobeg_omaps.pdf',
    },
    {
        name: 'XXX летие Ленинградского ориентирования',
        date: '1989-05-07',
        info: '7-9 мая.',
        map: ['budogosch_orlenok_1988','budogosch_cheremukhovoe_1988'],
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
        name: 'Белые Ночи (Снегирёвка)',
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
        name: 'Чемпионат СССР (Горнозаводск)',
        date: '1989-12-07',
        link: './docs/1989/1989_12_07_gornozavodsk_ussr_omaps.pdf',
        planner: ['MTN_Y','SVIR_A'],
        partly: true,
        major: true
    },
    {
        name: 'Ранг летнего сезона г.Ленинграда, мужчины',
        year: 1990,
        link: './docs/1990/1990_rank_summer_men_omaps.pdf',
        me: 'М'
    },
    {
        name: 'Журнал "Невский Азимут" №1',
        major: true,
        year: 1990,
        info: 'Редакция: Н.Благово, А.Блинов, В.Зачиняев, Н.Крыжановский, Б.Панкратьев.',
        link: './docs/1990/1990_nevsky_azimuth_magazine_omaps.pdf',
    },
    {
        name: 'Бро-бег (Кузьмолово)',
        date: '1990-04-08',
        link: './docs/1990/1990_04_08_brobeg_omaps.pdf'
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
        name: 'Приз Ленинградского телевидения (Сосновка)',
        date: '1990-05-20',
        link: './docs/1990/1990_05_20_tv_omaps.pdf',
        info: 'Матчевая встреча по ориентированию между командами инвалидов Ленинграда и Гетеборга. <a href="https://vk.com/wall-135156716_14">Фильм про эти старты</a>.',
        planner: 'SHLKHN_Y',
        me: 'М15'
    },
    {
        name: 'Ориентир-9 (Юкки)',
        date: '1990-06-06',
        start: 'ORIENTIR',
        link: './docs/1990/1990_06_06_yukki_omaps.pdf',
        me: 'МА'
    },
    {
        name: 'Зелёный змей (Лемболово)',
        date: '1990-08-26',
        link: './docs/1990/1990_08_26_green_snake_omaps.pdf',
        start: 'GS',
    },
    {
        name: 'Чемпионат Ленинграда (Сосново)',
        date: '1990-09-15',
        link: './docs/1990/1990_09_15_leningrad_omaps.pdf',
        planner: 'LVCHV',
        me: 'М-15'
    },
    {
        name: 'Чемпионат Ленинграда (69км)',
        date: '1990-09-16',
        link: './docs/1990/1990_09_16_leningrad_omaps.pdf',
        planner: 'LVCHV',
        me: 'М-15'
    },
    {
        name: 'Первенство Ленинграда, марафон (69км)',
        date: '1990-09-23',
        link: './docs/1990/1990_09_23_leningrad_marathon_omaps.pdf',
        planner: 'KAZNTSV_S',
        me: 'М-15'
    },
    {
        name: '"Дыхание осени" на День Конституции СССР',
        date: '1990-10-06',
        info: '6 и 7 октября. <a href="./docs/1990/sosnovo_1990_10_06/doc_3_omaps.jpg">Положение</a>, <a href="./docs/1990/sosnovo_1990_10_06/doc_4_omaps.jpg">МА</a>.',
        map: 'sosnovo_1990_10_06',
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
        name: 'Ночные соревнования на призы клуба АЗИМУТ (Лемболово)',
        date: '1990-10-13',
        link: './docs/1990/1990_10_13_night_lembolovo_omaps.pdf',
        planner: 'FDRV_L',
        me: 'МБ'
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
        map: 'orientir_1990_11_10'
    },
    {
        name: 'Соревнования по эстафете с ориентированием (Токсово)',
        date: '1990-11-18',
        link: './docs/1990/1990_11_18_relay_omaps.pdf',
    },
    {
        name: 'Открытие зимнего сезона в з/н (Колтуши)',
        date: '1990-12-23',
        link: './docs/1990/1990_12_23_open_omaps.pdf',
        planner: 'RYLOV_V',
        me: 'МБ'
    },
    {
        name: 'Журнал "Невский Азимут" №2',
        major: true,
        year: 1991,
        info: 'Редакция: Н.Благово, А.Блинов, Н.Крыжановский, Б.Панкратьев.',
        link: './docs/1991/1991_nevsky_azimuth_magazine_omaps.pdf',
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
        link: './docs/1991/1991_04_07_voeykovo_omaps.pdf',
        planner: 'SMNV_M',
        me: 'МА'
    },
    {
        name: 'Ориентир-2 (Колтуши)',
        date: '1991-04-13',
        start: 'ORIENTIR',
        map: 'orientir_1991_04_13',
        link: './docs/1991/1991_04_13_orientir_2_omaps.pdf',
        planner: 'NKLVCH'
    },
    {
        name: 'Бро-бег (Кузьмолово)',
        date: '1991-04-14',
        link: './docs/1991/1991_04_14_brobeg_omaps.pdf',
        me: 'М-4'
    },
    {
        name: 'Ориентир-3 (Юкки)',
        date: '1991-04-27',
        start: 'ORIENTIR',
        link: './docs/1991/1991_04_27_yukki_omaps.pdf',
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
        map: 'orientir_1991_05_29',
        link: './docs/1991/1991_05_29_orientir_7_omaps.pdf',
    },
    {
        name: 'Ориентир-8 (Орловский л/п)',
        date: '1991-06-05',
        start: 'ORIENTIR',
        map: 'orientir_1991_06_08',
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
        link: './docs/1991/1991_06_12_toksovo_omaps.pdf',
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
        map: 'orientir_1991_06_26',
        link: './docs/1991/1991_06_26_orientir_11_omaps.pdf',
    },
    {
        name: 'Ориентир-12 (Токсово)',
        date: '1991-07-03',
        start: 'ORIENTIR',
        planner: 'BRSV_V',
        map: 'orientir_1991_07_03',
        link: './docs/1991/1991_07_03_orientir_12_omaps.pdf',
    },
    {
        name: 'Ориентир-13 (Васкелово)',
        date: '1991-07-07',
        start: 'ORIENTIR',
        planner: 'BLNV_A',
        map: 'orientir_1991_07_07',
        link: './docs/1991/1991_07_07_orientir_13_omaps.pdf',
    },
    {
        name: 'Ориентир-14 (Кавголово)',
        date: '1991-07-10',
        start: 'ORIENTIR',
        map: 'orientir_1991_07_10',
        link: './docs/1991/1991_07_10_orientir_14_omaps.pdf',
    },
    {
        name: 'Ориентир-16 (Токсово)',
        date: '1991-07-17',
        start: 'ORIENTIR',
        link: './docs/1991/1991_07_17_orientir_16_omaps.pdf',
        me: 'МА'
    },
    {
        name: 'Ориентир-17 (Кузнечное)',
        date: '1991-07-21',
        start: 'ORIENTIR',
        info: '20-21 июля.',
        map: ['orientir_1991_07_20','orientir_1991_07_21'],
        link: './docs/1991/1991_07_20_orientir_17_omaps.pdf'
    },
    {
        name: 'Ориентир-19 (Невский л/п)',
        date: '1991-07-24',
        start: 'ORIENTIR',
        map: 'orientir_1991_07_24',
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
        map: 'orientir_1991_08_28',
        link: './docs/1991/1991_08_28_orientir_22_omaps.pdf',
        me: 'H-A'
    },
    {
        name: 'Ориентир-23 (Шуваловский парк)',
        date: '1991-09-04',
        start: 'ORIENTIR',
        map: 'orientir_1991_09_04',
        link: './docs/1991/1991_09_04_orientir_23_omaps.pdf',
    },
    {
        name: 'П-во КСО "Невский азимут" (Гарболово)',
        date: '1991-09-08',
        link: './docs/1991/1991_09_08_club_championship_omaps.pdf',
        map: 'garbolovo_1991',
        planner: 'KRZHNVSKY',
        start: 'NA',
        me: 'H-A'
    },
    {
        name: 'Ориентир-24 (Сосновка)',
        date: '1991-09-11',
        start: 'ORIENTIR',
        map: 'orientir_1991_09_11',
        link: './docs/1991/1991_09_11_orientir_24_omaps.pdf',
        me: 'H-A',
        planner: 'AMSVA'
    },
    {
        name: 'Соревнования среди спортсменов старшего возраста (Васкелово)',
        date: '1991-09-14',
        map: 'kerro_1988',
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
        map: 'orientir_1991_09_29',
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
        map: 'lembolovo_north_east_1989',
        link: './docs/1991/1991_10_12_night_omaps.pdf',
        planner: 'GBNVA_A',
        me: 'H-B'
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
        map: 'orientir_1991_11_08',
        link: './docs/1991/1991_11_08_orientir_27_omaps.pdf',
        planner: 'FSNKO'
    },
    {
        name: 'Всесоюзные соревнования по спортивному ориентированию среди спортсменов среднего и старшего возраста (Нижний Новгород)',
        date: '1991-03-01',
        link: './docs/1991/1991_veteran_ussr_omaps.pdf',
        info: '1-3 марта.',
        major: true
    },
    {
        name: 'Новогодняя ночь',
        date: '1992-01-01',
        link: './docs/1992/1992_01_01_new_year_omaps.pdf',
    },
    {
        name: 'Белые Ночи (Сосново)',
        date: '1992-06-26',
        start: 'WN',
        info: '26-28 июня.',
        link: './docs/1992/1992_06_26_wn_omaps.pdf',
        me: 'H17'
    },
    {
        name: 'Зимняя Универсиада ВУЗов СПб (Токсово)',
        date: '1993-03-14',
        link: './docs/1993/1993_03_14_universiada_omaps.pdf',
        me: 'М',
    },
    {
        name: 'Приз закрытия зимнего сезона, ретро-марафон (Лемболово)',
        date: '1993-04-04',
        link: './docs/1993/1993_04_04_close_marathon_omaps.pdf',
        map: 'lembolovo_orekhovo_east_1991',
        planner: 'PNKRTV_B'
    },
    {
        name: 'Ориентир-1 (Воейково)',
        date: '1993-04-11',
        link: './docs/1993/1993_04_11_orientir_1_omaps.pdf',
        me: 'HA',
        start: 'ORIENTIR',
        planner: 'RDKV'
    },
    {
        name: 'Ориентир-12 (парк Челюскинцев)',
        date: '1993-05-12',
        link: './docs/1993/1993_05_12_orientir_12_omaps.pdf',
        me: 'A',
        start: 'ORIENTIR',
        planner: 'KNDRSHKN_I'
    },
    {
        name: 'Ориентир (Токсово)',
        date: '1993-06-02',
        link: './docs/1993/1993_06_02_orientir_omaps.pdf',
        me: 'HA',
        start: 'ORIENTIR'
    },
    {
        name: 'ЧиП СПб, эстафета 3х (Токсово)',
        date: '1993-06-13',
        link: './docs/1993/1993_06_13_spb_relay_omaps.pdf',
        me: 'H21A',
        planner: 'RYLOV_V'
    },
    {
        name: 'ЧиП СПб, спринт (Васкелово)',
        date: '1993-07-03',
        link: './docs/1993/1993_07_03_spb_sprint_omaps.pdf',
        me: 'H21A',
    },
    {
        name: 'ЧиП СПб (Васкелово)',
        date: '1993-07-04',
        link: './docs/1993/1993_07_04_spb_omaps.pdf',
        me: 'H21A',
    },
    {
        name: 'Зелёный змей (Токсово)',
        date: '1993-09-05',
        start: 'GS',
        link: './docs/1993/1993_09_05_green_snake_omaps.pdf',
        me: 'М'
    },
    {
        name: 'Чемпионат ВУЗов (Токсово)',
        date: '1993-10-17',
        link: './docs/1993/1993_10_17_universities_omaps.pdf',
        me: '+',
    },
    {
        name: 'Кубок МОЛОДЁЖНОГО (Лемболово)',
        date: '1993-09-19',
        link: './docs/1993/1993_09_19_molodezhnoe_cup_omaps.pdf',
        me: 'H21',
    },
    {
        name: 'Чемпионат С-Петербурга, спринт, марафон',
        date: '1994-09-03',
        link: './docs/1994/1994_09_03_spb_omaps.pdf',
        info: '3-4 сентября.',
        me: 'H21',
    },
    {
        name: 'St.Petersburg',
        date: '1994-01-09',
        link: './docs/1994/1994_01_09_spb_cup_omaps.pdf',
        me: 'H21',
    },
    {
        name: 'Зелёный змей (Осельки)',
        date: '1995-09-03',
        link: './docs/1995/1995_09_03_green_snake_omaps.pdf',
        start: 'GS',
    },
    {
        name: 'Плакат с чемпионами России',
        year: 1996,
        info: 'Взято с <a href="https://rufso.ru/1997-чемпионы-россии-1996/">сайта ФСОР</a>.',
        link: './docs/1996/1996_russia_champions_omaps.jpg',
    },
    {
        name: 'Календарь соревнований СПб, лето',
        year: 1996,
        link: './docs/1996/1996_summer_spb_calendar_omaps.pdf',
    },
    {
        name: 'Календарь соревнований ЛО',
        year: 1996,
        link: './docs/1996/1996_calendar_lo_omaps.pdf',
    },
    {
        name: 'Белые Ночи (Петяярви)',
        date: '1996-06-21',
        info: '21-23 июня.',
        map: 'petjajarvy_1995',
        link: './docs/1996/1996_06_21_wn_omaps.pdf',
        start: 'WN'
    },
    {
        name: 'ЧиП СПб, удлинённая дистанция (Ильичёво)',
        date: '1996-09-29',
        link: './docs/1996/1996_09_29_spb_omaps.pdf',
    },
    {
        name: 'ЧиП СПб, П-во ветеранов (Лемболово)',
        date: '1998-06-06',
        link: './docs/1998/1998_06_06_spb_omaps.pdf',
    },
    {
        name: 'Зелёный змей (Юкки)',
        date: '1998-08-29',
        link: './docs/1998/1998_08_29_green_snake_omaps.pdf',
        start: 'GS',
    },
    {
        name: 'Чемпионат России (Орехово)',
        date: '1998-02-18',
        major: true,
        info: 'Финал Чемпионата России по лыжному ориентированию. Главный судья соревнований А.М.Бровин, главный секретарь Е.А.Винер.',
        link: './docs/1998/1998_02_18_russia_omaps.pdf',
        planner: 'BRDN_V'
    },
    {
        name: 'Предчемпионат мира по лыжному ориентированию среди ветеранов (Орехово)',
        date: '1998-02-27',
        link: './docs/1998/1998_02_27_world_masters_predchamp_omaps.pdf',
        logo: 'wmsoc_1999.gif'
    },
    {
        name: 'Чемпионат СПб, спринт (Орехово)',
        date: '1998-09-19',
        link: './docs/1998/1998_09_19_spb_sprint_omaps.pdf',
    },
    {
        name: 'Чемпионат СПб, удлинённая дистанция (Орехово)',
        date: '1998-09-20',
        link: './docs/1998/1998_09_20_spb_long_omaps.pdf',
    },
    {
        name: 'Зимний чемпионат СПб, маркир (Лемболово)',
        date: '1999-03-07',
        link: './docs/1999/1999_03_07_spb_markir_omaps.pdf',
        planner: 'BRDN_V'
    },
    {
        name: 'Зимний чемпионат СПб (Лемболово)',
        date: '1999-03-21',
        link: './docs/1999/1999_03_21_spb_winter_omaps.pdf',
        planner: 'BRDN_V'
    },
    {
        name: 'Зимний чемпионат СПб, эстафета 2х (Лемболово)',
        date: '1999-03-14',
        link: './docs/1999/1999_03_14_spb_relay_omaps.pdf',
        planner: 'BRDN_V'
    },
    {
        name: 'Бро-бег (Кузьмолово)',
        date: '1999-04-11',
        link: './docs/1999/1999_04_11_brobeg_omaps.pdf'
    },
    {
        name: 'Невский Азимут (Орехово)',
        date: '1999-06-12',
        link: './docs/1999/1999_06_12_nevsky_azimut_omaps.pdf',
        info: '12-14 июня.',
        partly: true,
        start: 'NA'
    },
    {
        name: 'Белые Ночи (Цвелодубово)',
        date: '1999-06-18',
        link: './docs/1999/1999_06_18_wn_omaps.pdf',
        info: '18-20 июня.',
        start: 'WN',
        map: 'yappilya_1999'
    },
    {
        name: 'Мемориал Михаила Святкина (Яппиля)',
        date: '1999-06-26',
        link: './docs/1999/1999_06_26_svyatkina_omaps.pdf',
        info: '26-27 июня.',
        partly: true,
        start: 'MMS',
        map: 'yappilya_1999'
    },
    {
        name: 'Яркий Мир (Лемболово)',
        date: '1999-07-02',
        link: './docs/1999/1999_07_02_ym_omaps.pdf',
        info: '2-4 июля.',
        start: 'YM',
        map: ['ym_2001_06_18','ym_2001_06_19']
    },
    {
        name: 'ПУТЧ-99 (Песочный)',
        date: '1999-08-22',
        link: './docs/1999/1999_08_22_putch_omaps.pdf',
        planner: 'MLNN_E'
    },
    {
        name: 'Зелёный змей (Лемболово)',
        date: '1999-08-28',
        link: './docs/1999/1999_08_28_green_snake_omaps.pdf',
        start: 'GS'
    },
    {
        name: 'Чемпионат СПб, марафон (Орехово)',
        date: '1999-09-19',
        link: './docs/1999/1999_09_19_spb_marathon_omaps.pdf',
    },
    {
        name: 'Невский Азимут (Орехово)',
        date: '2000-06-10',
        link: './docs/2000/2000_06_10_nevsky_azimut_omaps.pdf',
        info: '10-12 июня.',
        partly: true,
        start: 'NA'
    },
    {
        name: 'Невский Азимут (Лосево)',
        date: '2001-06-10',
        link: './docs/2001/2001_06_10_nevsky_azimut_omaps.pdf',
        info: '10-12 июня.',
        partly: true,
        planner: ['FDRV_L','BRDR','SHKLV'],
        start: 'NA',
        map: ['na_2001_losevo_1','na_2001_losevo_3']
    },
    {
        name: 'Мемориал Михаила Святкина (Пески)',
        date: '2001-06-28',
        link: './docs/2001/2001_06_28_svyatkina_omaps.pdf',
        info: '28-30 июня.',
        partly: true,
        start: 'MMS',
        map: ['peski_pulkonlampi_2001','peski_zabytoe_2001','peski_stayka_2001']
    },
    {
        name: 'Яркий Мир (Петяярви)',
        date: '2001-06-18',
        link: './docs/2001/2001_06_18_ym_omaps.pdf',
        info: '18-20 июня.',
        start: 'YM',
        map: ['ym_2001_06_18','ym_2001_06_19']
    },
    {
        name: 'Зелёный змей (Токсово)',
        date: '2001-08-26',
        link: './docs/2001/2001_08_26_green_snake_omaps.pdf',
        start: 'GS',
    },
    {
        name: 'Календарь "Субботнего марафона" клуба "Карта"',
        year: 2003,
        info: '2003-2004гг',
        link: './docs/2003_karta_saturday_marathon_omaps.jpg',
        owner: 'KARTA'
    },
    {
        name: 'Победители',
        year: 2006,
        link: './docs/2006_gs_winners.jpg',
        start: 'GS'
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
        map: ['2x2_2005_05_10','2x2_2005_05_07'],
        link: './docs/2x2/2005_kuzmolovo_2x2_itogi_omaps.pdf',
        planner: 'SHRNN'
    },
    {
        name: 'Буклет',
        start: '2x2',
        year: 2005,
        map: ['2x2_2005_05_10','2x2_2005_05_07'],
        link: './docs/2x2/2005_kuzmolovo_2x2_photos_omaps.doc',
        planner: 'SHRNN'
    },
    {
        name: 'Афиша',
        start: '2x2',
        year: 2006,
        map: ['2x2_2006_04_29','2x2_2006_04_30','2x2_2006_05_01'],
        link: './docs/2x2/2006_2x2_info_omaps.jpg',
        planner: 'SHRNN'
    },
    {
        name: 'Положение',
        start: '2x2',
        year: 2006,
        map: ['2x2_2006_04_29','2x2_2006_04_30','2x2_2006_05_01'],
        link: './docs/2x2/2006_2x2_rules_omaps.pdf',
        planner: 'SHRNN'
    },
    {
        name: 'Положение',
        start: '2x2',
        year: 2007,
        map: ['2x2_2007_04_29','2x2_2007_04_30','2x2_2007_05_01'],
        link: './docs/2x2/2007_2x2_rules_omaps.pdf',
        planner: 'SHRNN'
    },
    {
        name: 'Результаты',
        start: '2x2',
        year: 2008,
        map: ['2x2_2008_05_01','2x2_2008_05_02','2x2_2008_05_03'],
        link: './docs/2x2/2008_2x2_results_omaps.pdf',
        planner: 'SHRNN'
    },
    {
        name: 'Итоги',
        start: '2x2',
        year: 2008,
        map: ['2x2_2008_05_01','2x2_2008_05_02','2x2_2008_05_03'],
        link: './docs/2x2/2008_2x2_total_omaps.pdf',
        planner: 'SHRNN'
    },
    {
        name: 'Положение',
        start: '2x2',
        year: 2009,
        map: ['2x2_2009_05_02','2x2_2009_05_03'],
        link: './docs/2x2/2009_2x2_rules_omaps.pdf',
        planner: 'SHRNN'
    },
    {
        name: 'Результаты',
        start: '2x2',
        year: 2010,
        map: '2x2_2010_05_09',
        link: './docs/2x2/2010_2x2_results_omaps.pdf',
        planner: 'SHRNN'
    },
    {
        name: 'Буклет-календарь от клуба KUZMOLOVO.',
        owner: 'KUZMOLOVO',
        year: 2020,
        link: './docs/2020_kuzmolovo_kalendar_omaps.pdf',
        info: 'Посвящается 45-летию Кузьмоловской школы спортивного ориентирования (КШСО) и 80-летию Ленинградского тренера Сергея Николаевича Крылова.'
    },
    {
        name: 'Буклет-календарь от клуба KUZMOLOVO.',
        owner: 'KUZMOLOVO',
        year: 2025,
        link: './docs/2025_kuzmolovo_kalendar_omaps.pdf',
        info: 'Посвящается 50-летию Кузьмоловской школы спортивного ориентирования (КШСО), 85-летию Ленинградского тренера Сергея Николаевича Крылова и 90-летию Кузьмоловского учителя физкультуры Николая Николаевича Бондика.'
    },
];
