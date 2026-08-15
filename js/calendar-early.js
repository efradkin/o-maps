let eventsEarly = [
    {
        id: 'SPB_19630310_1',
        date: '1963-03-10',
        place: 'Рапполово',
        name: 'П-во Ленинграда',
        map: 'rappolovo_1963'
    },
    {
        id: 'SPB_19660311_1',
        date: '1966-03-11',
        place: 'Юкки',
        name: 'Зимний матч городов СССР',
        fmt: 'маркир',
        start: 'MEET_1966',
        map: 'yukki_1966'
    },
    {
        id: 'SPB_19660313_1',
        date: '1966-03-13',
        place: 'Орехово',
        name: 'Зимний матч городов СССР',
        fmt: 'маркир-эстафета',
        start: 'MEET_1966',
        map: 'orekhovo_1966'
    },
    {
        id: 'SPB_19680913_1',
        date: '1968-09-13',
        place: 'Петяярви',
        name: 'Матч СССР-Болгария',
        start: 'USSR_BULGARIA_1968',
        map: 'petyajarvi_1968'
    },
    {
        id: 'SPB_19680915_1',
        date: '1968-09-15',
        place: 'Снегирёвка',
        name: 'Матч СССР-Болгария',
        info: 'Эстафета.',
        start: 'USSR_BULGARIA_1968',
        map: 'zamostie_1968'
    },
    {
        id: 'SPB_19690126_1',
        date: '1969-01-26',
        place: 'Сосново',
        name: 'Соревнования в честь 25-летия снятия блокады Ленинграда',
        map: 'sosnovo_1969_01_26'
    },
    {
        id: 'SPB_19690215_1',
        date: '1969-02-15',
        place: 'Шапки',
        name: 'Матч ориентировщиков Москвы и Ленинграда',
        map: 'shapki_1969'
    },
    {
        id: 'SPB_19690302_1',
        date: '1969-03-02',
        endDate: '1969-03-04',
        place: 'Уфа, Тавтиманово, Юматово',
        name: 'П-во ЦС СДСО Буревестник',
        fmt: 'маркир, эстафеты',
        res: ['./docs/1969/1969_03_02_ufa_tavtimanovo_omaps.pdf','./docs/1969/1969_03_04_ufa_umatovo_omaps.pdf'],
        map: ['tavtimanovo_1969','umatovo_1969_03_04']
    },
    {
        id: 'SPB_19690304_1',
        date: '1969-03-04',
        place: 'Шапки',
        name: 'П-во Ленинграда',
        fmt: 'марафон маркир',
        map: 'shapki_marathon_1969',
        res: './docs/1969/1969_03_04_shapki_marathon_omaps.pdf'
    },
    {
        id: 'SPB_19690316_1',
        date: '1969-03-16',
        place: 'Московская обл, Ольгово',
        name: 'Матчевая вствеча ДСО ТРУД Москва - Ленинград',
        res: './docs/1969/1969_03_16_moskva_leningrad_omaps.pdf'
    },
    {
        id: 'SPB_19690412_1',
        date: '1969-04-12',
        place: 'Одесса, Бендеры',
        name: 'Матч городов-героев',
        res: './docs/1969/1969_04_12_odessa_omaps.pdf'
    },
    {
        id: 'SPB_19690420_1',
        date: '1969-04-20',
        place: 'Павловск',
        name: 'П-во ЛГУ им.Жданова',
        res: './docs/1969/1969_04_20_lgu_pavlovsk_omaps.pdf'
    },
    {
        id: 'SPB_19690427_1',
        date: '1969-04-27',
        place: 'Невский л/п',
        name: 'П-во мат-меха ЛГУ',
        res: './docs/1969/1969_04_27_matmech_lgu_nevsky_omaps.pdf'
    },
    {
        id: 'SPB_19690525_1',
        date: '1969-05-25',
        place: '69км, оз Осиновское',
        name: 'Приз Ленинградского турклуба',
        res: './docs/1969/1969_05_25_lkt_omaps.pdf'
    },
    {
        id: 'SPB_19690621_1',
        date: '1969-06-21',
        place: 'Тырва',
        name: 'X матч ЛЕНИНГРАД - ЭСТОНСКАЯ ССР',
        res: ['./docs/1969/1969_06_21_leningrad_estonia_booklet_omaps.pdf', './docs/1969/1969_06_21_leningrad_estonia_omaps.pdf']
    },
    {
        id: 'SPB_19690628_1',
        date: '1969-06-28',
        endDate: '1969-06-29',
        place: 'Гарболово, оз Сиркоярви',
        name: '10 лет спортивного ориентирования в Ленинграде',
        info: 'Командные соревнования, эстафеты.',
        map: 'sirkojarvi_1969',
        res: './docs/1969/1969_06_21_garbolovo_10_years_omaps.pdf'
    },
    {
        id: 'SPB_19690719_1',
        date: '1969-07-19',
        endDate: '1969-07-20',
        place: 'Ильичёво, оз Долгое',
        name: 'II-я матчевая встреча Рига - Ленинград',
        planner: 'KPSTN',
        res: './docs/1969/1969_07_19_riga_leningrad_omaps.pdf'
    },
    {
        id: 'SPB_19690928_1',
        date: '1969-09-21',
        endDate: '1969-09-28',
        place: 'Можайское',
        name: 'П-во Ленинграда, эстафета',
        planner: 'KPSTN',
        res: './docs/1969/1969_09_28_leningrad_relay_omaps.pdf'
    },
    {
        id: 'SPB_19700222_1',
        date: '1970-02-22',
        place: 'Приветнинское',
        name: 'П-во Ленинграда',
        res: './docs/1970/1970_02_22_leningrad_omaps.pdf'
    },
    {
        id: 'SPB_19700628_1',
        date: '1970-06-28',
        place: 'Вартемяги',
        name: 'Матч Эстония-Ленинград',
        start: 'ESTONIA_LENINGRAD',
        map: 'vartemjagi_1970_06_28'
    },
    {
        id: 'SPB_19710207_1',
        date: '1971-02-07',
        place: 'Сярьги',
        name: 'П-во ЛОМО',
        res: './docs/1971/1971_02_07_lomo_omaps.pdf',
        map: 'sjargi_1971_lomo'
    },
    {
        id: 'SPB_19710523_1',
        date: '1971-05-23',
        place: 'Вартемяки',
        name: 'Первенство Ленинградской обл',
        planner: ['LNV_Y','MLVA_M'],
        res: './docs/1971/1971_05_23_lo_omaps.pdf'
    },
    {
        id: 'SPB_19710612_1',
        date: '1971-06-12',
        name: 'Белые Ночи',
        info: 'Первые  массовые соревнования "Белые Ночи".',
        start: 'WN',
        major: true,
        res: './docs/1971/1971_06_12_wn_omaps.pdf',
        map: 'roschino_1971_wn'
    },
    {
        id: 'SPB_19710703_1',
        date: '1971-07-03',
        place: 'Шапки',
        name: 'IV матч Рига - Ленинград',
        res: './docs/1971/1971_07_03_riga_leningrad_omaps.pdf'
    },
    {
        id: 'SPB_19710704_1',
        date: '1971-07-04',
        place: 'Шапки',
        name: 'IV матч Рига - Ленинград, эстафета',
        res: './docs/1971/1971_07_04_riga_leningrad_omaps.pdf'
    },
    {
        id: 'SPB_19710705_1',
        date: '1971-07-05',
        place: 'Петяярви',
        name: 'Первенство завода Вибратор',
        res: './docs/1971/1971_07_05_petyajarvi_omaps.pdf',
        map: 'petyajarvi_1968'
    },
    {
        id: 'SPB_19710723_1',
        date: '1971-07-23',
        place: 'Псков',
        name: 'Матч Болгария - СССР',
        res: './docs/1971/1971_07_23_bulgaria_ussr_omaps.pdf'
    },
    {
        id: 'SPB_19710829_1',
        date: '1971-08-29',
        place: 'Горьковское',
        name: 'Первенство Ленинграда',
        res: './docs/1971/1971_08_29_leningrad_omaps.pdf'
    },
    {
        id: 'SPB_19710913_1',
        date: '1971-09-13',
        endDate: '1971-09-14',
        place: 'Зеленогорск, оз Щучье',
        name: 'Пятые Всесоюзные соревнования',
        info: 'Лично-командное первенство, эстафета.',
        start: 'USSR_V_1971',
        map: ['zelenogorsk_schuchye_1971','ozerki_1971']
    },
    {
        id: 'SPB_19710919_1',
        date: '1971-09-19',
        place: 'Комарово',
        name: 'Первенство Ленинграда, марафон',
        res: './docs/1971/1971_09_19_leningrad_marathon_omaps.pdf'
    },
    {
        id: 'SPB_19720610_1',
        date: '1972-06-10',
        place: 'Зеленогорск, оз Щучье',
        name: 'Белые ночи',
        start: 'WN',
        map: 'zelenogorsk_schuchye_1972'
    },
    {
        id: 'SPB_19730218_1',
        date: '1973-02-18',
        place: 'Сосново, Чёрный лес',
        name: 'П-во Ленинграда',
        planner: ['FDRV_A','SHRNN','GRZNVCH','SHRPV_V'],
        res: './docs/1974_leningrad_omaps.pdf',
        info: '<a href="./docs/1974_leningrad_omaps.pdf">Отчёт</a>.',
        fmt: 'маркир',
        start: 'REPORT',
        map: 'sosnovo_black_forest_1974'
    },
    {
        id: 'SPB_19730602_4',
        date: '1973-06-02',
        endDate: '1973-06-03',
        place: 'Рощино',
        name: 'Пятый матч городов-героев',
        res: './docs/1973/1973_06_02_hero_cities_match_results_omaps.pdf'
    },
    {
        id: 'SPB_19750126_1',
        date: '1975-01-26',
        place: 'Уткино',
        name: 'П-во Ленинграда',
        fmt: 'маркир',
        map: 'utkino_1975'
    },
    {
        id: 'SPB_19770226_1',
        date: '1977-02-26',
        place: 'Воейково',
        name: 'VII Зимняя спартакиада',
        map: 'voeykovo_1977'
    },
    {
        id: 'SPB_19770314_1',
        date: '1977-03-14',
        endDate: '1977-03-15',
        place: 'Уфа, Юматово',
        name: 'П-во ЦС СДСО Буревестник, маркир',
        res: './docs/1977/1977_03_14_ufa_umatovo_omaps.pdf',
        map: 'ufa_markir_1977_03_14'
    },
    {
        id: 'SPB_19770618_1',
        date: '1977-06-18',
        endDate: '1977-06-19',
        place: 'Токсово',
        name: 'Белые Ночи',
        start: 'WN',
        res: './docs/1977/1977_06_18_wn_omaps.pdf'
    },
    {
        id: 'SPB_19770618_2',
        date: '1977-06-18',
        endDate: '1977-06-19',
        place: 'Токсово',
        name: 'Белые Ночи, ранговые соревнования, отбор в сборную СССР',
        info: 'На БН-77 параллельно шли всесоюзные ранговые, отбор в сборную СССР. На тех же дистанциях. Рукописный протокол от Александра Шириняна.',
        res: './docs/1977/1977_06_18_wn_rang_omaps.pdf'
    },
    {
        id: 'SPB_19770724_1',
        date: '1977-07-24',
        endDate: '1977-07-25',
        place: 'Смоленск, Баклановский',
        name: 'Многодневка на приз Пржевальского',
        start: 'PRZHVLSKY',
        major: true,
        res: './docs/1977/1977_07_24_przhevalsky_omaps.pdf'
    },
    {
        id: 'SPB_19770904_1',
        date: '1977-09-04',
        place: 'Поляны',
        name: 'П-во Ленинграда, марафон',
        res: './docs/1977/1977_09_04_leningrad_marathon_omaps.pdf',
        map: 'polyany_1977'
    },
    {
        id: 'SPB_19771009_1',
        date: '1977-10-09',
        place: 'Стеклянный, оз Маролампи',
        name: 'Золотые Кольца (Свадебные)',
        start: 'WEDDING',
        map: 'marolampi_1977',
        res: './docs/1977/1977_10_09_wedding_omaps.pdf'
    },
    {
        id: 'SPB_19771029_1',
        date: '1977-10-29',
        place: 'Поляны',
        name: 'VI командные ночные соревнования памяти А.Окинчица',
        start: 'OKINCHITSA',
        res: './docs/1977/1977_10_29_okinchitsa_omaps.pdf',
        map: 'polyany_1977'
    },
    {
        id: 'SPB_19780121_1',
        date: '1978-01-21',
        place: 'Поляны',
        name: 'XIX Зимний Чемпионат Ленинграда и обл',
        start: 'REPORT',
        fmt: 'маркир',
        map: 'polyany_1978_01_21_lningrad',
        res: 'https://o-site.spb.ru/history/Localres/w78m.html'
    },
    {
        id: 'SPB_19790114_1',
        date: '1979-01-14',
        place: 'Кузьмолово',
        name: 'Новогодняя эстафета',
        res: './docs/1979/1979_01_14_new_year_relay_omaps.pdf'
    },
    {
        id: 'SPB_19790308_1',
        date: '1979-03-08',
        place: 'Кавголово',
        name: 'П-во Ленинграда среди к/ф, эстафета',
        planner: 'DVRKO_V',
        res: './docs/1979/1979_03_08_leningrad_kf_relay_omaps.pdf'
    },
    {
        id: 'SPB_19790310_1',
        date: '1979-03-10',
        place: 'Сосново',
        name: 'П-во Ленинграда, марафон',
        res: './docs/1979/1979_03_10_leningrad_marathon_omaps.pdf'
    },
    {
        id: 'SPB_19790804_1',
        date: '1979-08-04',
        endDate: '1979-08-05',
        place: 'Ивангород',
        name: 'Кубок ЭССР. Кубок ЦСФиС',
        map: 'ivangorod_1979'
    },
    {
        id: 'SPB_19790923_1',
        date: '1979-09-23',
        place: 'Рощино',
        name: 'П-во Ленинграда, марафон',
        planner: 'KRCHNKO_S',
        res: './docs/1979/1979_09_23_leningrad_marathon_omaps.pdf'
    },
    {
        id: 'SPB_19800115_1',
        date: '1980-01-15',
        name: 'Новогодняя эстафета',
        res: './docs/1980/1980_01_18_new_year_relay_omaps.pdf'
    },
    {
        id: 'SPB_19810805_1',
        date: '1981-08-05',
        place: 'Сосново, оз Уловное',
        name: 'I Чемпионат СССР',
        info: '<a href="./docs/1981_ussr_champ_relay_schema_omaps.jpg">Эстафета</a>.',
        start: 'USSR_1981',
        gps: {
            'М1':'./original_maps/forest/sosnovo/sosnovo_ulovnoe_oz_1981_M1_omaps.jpg',
            'М3':'./original_maps/forest/sosnovo/sosnovo_ulovnoe_oz_1981_M3_omaps.jpg',
            'Ж3':'./original_maps/forest/sosnovo/sosnovo_ulovnoe_oz_1981_W3_omaps.jpg'
        },
        map: 'sosnovo_ulovnoe_oz_1981'
    },
    {
        id: 'SPB_19830130_1',
        date: '1983-01-30',
        place: 'Кузьмолово, Зона-Z',
        name: 'Какой-то старт',
        map: 'kuzmolovo_zona_z_1983'
    },
    {
        id: 'SPB_19830319_1',
        date: '1983-03-19',
        place: 'Юкки',
        name: 'Зимнее п-во ЛГС Спартак',
        start: 'REPORT',
        planner: 'SHLKHN_Y',
        map: 'yukki_1983_03_19',
        res: './docs/1983/1983_03_19_spartak_omaps.pdf'
    },
    {
        id: 'SPB_19830320_1',
        date: '1983-03-20',
        place: 'Всеволожск',
        name: 'Зимнее п-во ЛГС Спартак.',
        start: 'REPORT',
        fmt: 'маркир',
        planner: 'EGRV_E',
        map: 'vsevolozhsk_1983_03_20',
        res: './docs/1983/1983_03_20_spartak_omaps.pdf'
    },
    {
        id: 'SPB_19830611_1',
        date: '1983-06-11',
        endDate: '1983-06-12',
        place: 'Сосново, Лемболово',
        res: ['./docs/1983/1983_06_11_spartak_omaps.pdf', './docs/1983/1983_06_11_spartak_rule_omaps.pdf', './docs/1983/1983_06_12_spartak_omaps.pdf'],
        name: 'Летний Чемпионат ЛГС ДСО Спартак',
        info: '<a href="./docs/1983/1983_06_11_spartak_rule_omaps.pdf">Положение, отчёт</a>.',
        start: 'REPORT',
        planner: ['BLZRV_V','CHGRVSKY_V'],
        map: ['sosnovo_1983_06_11','sosnovo_1983_06_12']
    },
    {
        id: 'SPB_19830917_1',
        date: '1983-09-17',
        place: 'Голубые Дачи',
        name: 'Кубок ЛГС ДСО Спартак',
        res: './docs/1983/1983_09_17_mruchey_omaps.pdf',
        map: 'mruchey_1983_09_17'
    },
    {
        id: 'SPB_19840617_1',
        date: '1984-06-17',
        endDate: '1984-06-19',
        place: 'Будогощь',
        name: 'Белые Ночи',
        start: 'WN',
        res: './docs/1984/1984_06_17_wn_omaps.pdf'
    },
    {
        id: 'SPB_19840825_1',
        date: '1984-08-25',
        place: 'Петяярви',
        name: 'XXVI Чемпионат Ленинграда',
        planner: ['LVCHV','SVTKN'],
        res: './docs/1984/1984_08_25_leningrad_omaps.pdf'
    },
    {
        id: 'SPB_19840826_1',
        date: '1984-08-26',
        place: 'Петяярви',
        name: 'XXVI Чемпионат Ленинграда, эстафета',
        planner: ['LVCHV','SVTKN'],
        res: './docs/1984/1984_08_26_leningrad_relay_omaps.pdf'
    },
    {
        id: 'SPB_19840902_1',
        date: '1984-09-02',
        place: 'Токсово',
        name: 'XXVI Чемпионат Ленинграда, удлинённая дистанция',
        planner: 'SHRNN',
        res: './docs/1984/1984_09_02_leningrad_long_omaps.pdf'
    },
    {
        id: 'SPB_19840929_1',
        date: '1984-09-29',
        place: 'Песочная',
        name: 'Осеннее п-во ЛГС ДСО Спартак',
        start: 'REPORT',
        map: 'pesochnaya_1984_09_29_spartak',
        res: './docs/1984/1984_09_29_spartak_omaps.pdf'
    },
    {
        id: 'SPB_19850314_1',
        date: '1985-03-14',
        place: 'Сосновка',
        name: 'Юный спартаковец',
        me: 'М-10',
        res: './docs/1985/1985_03_14_young_spartak_omaps.pdf',
        map: 'sosnovka_1981_omaps'
    },
    {
        id: 'SPB_19850407_1',
        date: '1985-04-07',
        place: 'Кузьмолово',
        name: 'Бро-бег',
        res: './docs/1985/1985_04_07_brobeg_omaps.pdf'
    },
    {
        id: 'SPB_19850421_1',
        date: '1985-04-21',
        endDate: '1985-04-27',
        place: 'Голубые Дачи',
        name: 'Открытие сезона ЛГС ДСО Спартак',
        me: 'М-13',
        planner: 'RYLOV_V',
        res: './docs/1985/1985_04_21_gdacha_omaps.pdf',
        map: 'golubaya_dacha_1982'
    },
    {
        id: 'SPB_19850510_1',
        date: '1985-05-10',
        place: 'Кузьмолово',
        name: 'Приз Ленинградского телевидения',
        me: 'М-10',
        planner: 'KAZNTSV_S',
        res: './docs/1985/1985_05_10_tv_omaps.pdf'
    },
    {
        id: 'SPB_19850621_1',
        date: '1985-06-21',
        endDate: '1985-06-23',
        place: 'Петяярви',
        name: 'Белые Ночи',
        start: 'WN',
        me: 'М-13',
        res: './docs/1985/1985_06_21_wn_omaps.pdf'
    },
    {
        id: 'SPB_19851110_1',
        date: '1985-11-10',
        place: 'Охтинский л/п',
        name: 'Юный спартаковец, маркир',
        me: 'М-10',
        res: './docs/1985/1985_11_10_young_spartak_omaps.pdf',
        map: 'rzhevsky_1981'
    },
    {
        id: 'SPB_19860111_1',
        date: '1986-01-11',
        endDate: '1986-01-12',
        place: 'Энколово',
        name: 'Зимняя Спартакиада',
        res: './docs/1986/1986_01_11_spartakiada_omaps.pdf'
    },
    {
        id: 'SPB_19860413_1',
        date: '1986-04-13',
        place: 'Кузьмолово',
        name: 'Бро-бег',
        me: 'М-9',
        res: './docs/1986/1986_04_13_brobeg_omaps.pdf'
    },
    {
        id: 'SPB_19860510_1',
        date: '1986-05-10',
        place: 'Песочная',
        name: 'Приз Ленинградского телевидения',
        planner: 'VSLVSKY',
        map: 'pesochnaya_1986',
        res: './docs/1986/1986_05_10_tv_omaps.pdf',
        me: 'М-10'
    },
    {
        id: 'SPB_19860607_1',
        date: '1986-06-07',
        place: '69км',
        name: 'Летняя спартакиада',
        res: './docs/1986/1986_06_07_spartakiada_omaps.pdf'
    },
    {
        id: 'SPB_19860909_1',
        date: '1986-09-09',
        endDate: '1986-09-11',
        place: 'Казахская ССР, Карагандинская обл',
        name: 'Чемпионат СССР',
        start: ['USSR_1986','USSR_CHAMP'],
        res: './docs/1986/1986_09_09_ussr_karaganda_omaps.pdf',
        map: 'karkaralinsk_1986'
    },
    {
        id: 'SPB_19861106_1',
        date: '1986-11-06',
        place: 'Приморский парк Победы',
        name: 'Юный спартаковец',
        me: 'М-10',
        res: './docs/1986/1986_11_06_young_spartak_omaps.pdf',
        map: 'krestovsky_1985'
    },
    {
        id: 'SPB_19870405_1',
        date: '1987-04-05',
        place: 'Кузьмолово',
        name: 'Бро-бег',
        me: 'М-6',
        res: './docs/1987/1987_04_05_brobeg_omaps.pdf'
    },
    {
        id: 'SPB_19870626_1',
        date: '1987-06-26',
        endDate: '1987-06-28',
        place: 'Орехово',
        name: 'Белые Ночи',
        start: 'WN',
        me: 'М-13-II',
        res: './docs/1987/1987_06_26_wn_omaps.pdf'
    },
    {
        id: 'SPB_19870722_1',
        date: '1987-07-22',
        endDate: '1987-07-26',
        place: 'Петяярви',
        name: 'Азимут\'87. XIII Всесоюзные соревнования среди спортсменов среднего и старшего возраста',
        major: true,
        res: './docs/1987/1987_07_22_masters_omaps.pdf',
        map: 'petjajarvy_1987'
    },
    {
        id: 'SPB_19880110_1',
        date: '1988-01-10',
        place: 'Кузьмолово',
        name: 'Кубок ЛДФСО Ленинграда',
        me: 'М-15',
        planner: ['SHRNN','KRMCHV','KRLV'],
        res: './docs/1988/1988_01_10_ldfso_omaps.pdf'
    },
    {
        id: 'SPB_19880131_1',
        date: '1988-01-31',
        place: 'Токсово',
        name: 'Соревнования, посвящённые снятию блокады Ленинграда',
        planner: 'DRBSHV',
        res: './docs/1988/1988_01_31_blockade_omaps.pdf'
    },
    {
        id: 'SPB_19880206_1',
        date: '1988-02-06',
        endDate: '1988-02-07',
        place: 'Токсово',
        name: 'Чемпионат ДФСО Ленинграда',
        planner: ['CHGRVSKY_V','KRMCHV'],
        res: './docs/1988/1988_02_06_dfso_omaps.pdf'
    },
    {
        id: 'SPB_19880214_1',
        date: '1988-02-14',
        place: 'Голубые дачи',
        name: 'Спринт "Метелица", выбор',
        planner: 'EGRV_E',
        res: './docs/1988/1988_02_14_metelitsa_omaps.pdf'
    },
    {
        id: 'SPB_19880313_1',
        date: '1988-03-13',
        place: 'ст Морская',
        name: 'П-во клуба Азимут',
        planner: 'FRSHLVA',
        res: './docs/1988/1988_03_13_azimut_omaps.pdf'
    },
    {
        id: 'SPB_19880320_1',
        date: '1988-03-20',
        place: 'Токсово',
        name: 'Закрытие зимнего сезона клуба Азимут, марафон',
        planner: ['SHRNN','SHVR'],
        res: './docs/1988/1988_03_20_azimut_winter_close_omaps.pdf'
    },
    {
        id: 'SPB_19880327_1',
        date: '1988-03-27',
        place: 'Охтинский парк',
        name: 'П-во обкома физкультурно-оздоровительного комплекса "ЭНЕРГИЯ"',
        planner: 'VSLVSKY',
        res: './docs/1988/1988_03_27_energy_omaps.pdf'
    },
    {
        id: 'SPB_19880405_1',
        date: '1988-04-05',
        place: 'Зеленогорск',
        name: 'Соревнования по эстафете с ориентированием',
        planner: 'DRBSHV',
        res: './docs/1988/1988_06_05_relay_omaps.pdf'
    },
    {
        id: 'SPB_19880417_1',
        date: '1988-04-17',
        place: 'Голубые Дачи',
        name: 'Кросс ориентировщиков',
        me: 'М-13',
        res: './docs/1988/1988_04_17_kross_omaps.pdf'
    },
    {
        id: 'SPB_19880424_1',
        date: '1988-04-24',
        place: 'Шувалово',
        name: 'Открытие сезона клуба Азимут, эстафета',
        me: 'М-13',
        planner: 'VLKV_A',
        res: './docs/1988/1988_04_24_azimut_summer_open_omaps.pdf'
    },
    {
        id: 'SPB_19880430_1',
        date: '1988-04-30',
        endDate: '1988-05-02',
        place: 'Шалово',
        name: 'Майская Ленинградская многодневка',
        planner: 'BDKN_A',
        res: './docs/1988/1988_04_30_mayski_omaps.pdf'
    },
    {
        id: 'SPB_19880509_1',
        date: '1988-05-09',
        place: 'Юкки',
        name: 'Ориентир-1',
        start: 'ORIENTIR',
        res: './docs/1988/1988_05_09_orientir_1_omaps.pdf'
    },
    {
        id: 'SPB_19880509_2',
        date: '1988-05-09',
        name: 'Юный ориентировщик',
        me: 'М-13',
        planner: 'FDRV_L',
        res: './docs/1988/1988_05_09_young_omaps.pdf'
    },
    {
        id: 'SPB_19880511_1',
        date: '1988-05-11',
        place: 'Кавголово',
        name: 'Ориентир-2',
        start: 'ORIENTIR',
        me: 'МА',
        planner: 'ERMSHKN',
        res: './docs/1988/1988_05_11_orientir_2_omaps.pdf'
    },
    {
        id: 'SPB_19880515_1',
        date: '1988-05-15',
        place: 'Кузьмолово',
        name: 'Ориентир-3, эстафета',
        start: 'ORIENTIR',
        me: 'МБ',
        planner: 'SHLKV_L',
        res: './docs/1988/1988_05_15_orientir_3_omaps.pdf'
    },
    {
        id: 'SPB_19880518_1',
        date: '1988-05-18',
        place: 'Мельничный ручей',
        name: 'Ориентир-4',
        start: 'ORIENTIR',
        me: 'МБ',
        planner: 'MDVDKN',
        res: './docs/1988/1988_05_18_orientir_4_omaps.pdf'
    },
    {
        id: 'SPB_19880520_1',
        date: '1988-05-20',
        endDate: '1988-05-23',
        place: 'Юкки, Песочная, Ильичёво',
        name: 'Летняя Универсиада Ленинграда',
        planner: ['SGLDA','OSMCHN','BRSV_V','SHRNN','PNKRTV_N'],
        res: './docs/1988/1988_05_20_universiada_omaps.pdf'
    },
    {
        id: 'SPB_19880522_1',
        date: '1988-05-22',
        place: 'Орехово',
        name: '"Лесной ландыш"',
        me: 'МБ',
        planner: 'RDKV',
        res: './docs/1988/1988_05_22_forest_landysh_omaps.pdf'
    },
    {
        id: 'SPB_19880524_1',
        date: '1988-05-24',
        endDate: '1988-05-26',
        name: 'П-во ЛОС ДФСО Профсоюзов среди юношей и девушек',
        me: 'М-13',
        res: './docs/1988/1988_05_24_unions_omaps.pdf'
    },
    {
        id: 'SPB_19880525_1',
        date: '1988-05-25',
        place: 'Орловский парк',
        name: 'Ориентир-5',
        start: 'ORIENTIR',
        me: 'МB',
        planner: 'SLVVA_L',
        res: './docs/1988/1988_05_25_orientir_5_omaps.pdf'
    },
    {
        id: 'SPB_19880602_1',
        date: '1988-06-02',
        endDate: '1988-06-03',
        place: 'Токсово, р Охта',
        name: 'Невский Азимут',
        start: 'NA',
        planner: 'VSLVSKY',
        res: './docs/1988/1988_06_02_nevsky_azimut_omaps.pdf'
    },
    {
        id: 'SPB_19880604_1',
        date: '1988-06-04',
        place: 'пл Морская',
        name: 'Соревнования по эстафете с ориентированием',
        res: './docs/1988/1988_06_04_relay_omaps.pdf'
    },
    {
        id: 'SPB_19880608_1',
        date: '1988-06-08',
        place: 'Токсово',
        name: 'Ориентир-6',
        start: 'ORIENTIR',
        me: 'МБ',
        planner: 'DSHKO',
        res: './docs/1988/1988_06_08_orientir_6_omaps.pdf'
    },
    {
        id: 'SPB_19880610_1',
        date: '1988-06-10',
        endDate: '1988-06-12',
        place: 'Шуваловский парк, Токсово, Рапполово',
        name: 'Чемпионат ЛОС ДФСО профсоюзов',
        planner: ['SHVR','LKNVA','CHGRVSKY_Y','CHGRVSKY_V','BBNNA_Y','SHRNN'],
        res: './docs/1988/1988_06_10_dfso_unions_omaps.pdf'
    },
    {
        id: 'SPB_19880615_1',
        date: '1988-06-15',
        place: 'Шуваловский парк',
        name: 'Ориентир-7',
        start: 'ORIENTIR',
        planner: ['SPTSA','TSPKNA'],
        res: './docs/1988/1988_06_15_orientir_7_omaps.pdf'
    },
    {
        id: 'SPB_19880618_1',
        date: '1988-06-18',
        endDate: '1988-06-19',
        place: 'Токсово',
        name: 'П-во клуба Азимут',
        planner: 'MKHLV_V',
        res: './docs/1988/1988_06_18_azimut_omaps.pdf'
    },
    {
        id: 'SPB_19880622_1',
        date: '1988-06-22',
        place: 'Токсово',
        name: 'Ориентир-8',
        start: 'ORIENTIR',
        planner: 'SHICK',
        res: './docs/1988/1988_06_22_orientir_8_omaps.pdf'
    },
    {
        id: 'SPB_19880629_1',
        date: '1988-06-29',
        place: 'Токсово',
        name: 'Ориентир-9',
        start: 'ORIENTIR',
        res: './docs/1988/1988_06_29_orientir_9_omaps.pdf'
    },
    {
        id: 'SPB_19880703_1',
        date: '1988-07-03',
        place: '69км',
        name: 'Ориентир-10',
        start: 'ORIENTIR',
        planner: 'VSLVSKY',
        res: './docs/1988/1988_07_03_orientir_10_omaps.pdf'
    },
    {
        id: 'SPB_19880706_1',
        date: '1988-07-06',
        place: 'Юкки',
        name: 'Ориентир-11',
        start: 'ORIENTIR',
        planner: 'BLNV_A',
        res: './docs/1988/1988_07_06_orientir_11_omaps.pdf'
    },
    {
        id: 'SPB_19880710_1',
        date: '1988-07-10',
        place: 'Лемболово',
        name: 'Ориентир-12',
        start: 'ORIENTIR',
        planner: 'BRNTSV_V',
        res: './docs/1988/1988_07_10_orientir_12_omaps.pdf'
    },
    {
        id: 'SPB_19880713_1',
        date: '1988-07-13',
        place: 'Пискарёвский парк',
        name: 'Ориентир-13',
        start: 'ORIENTIR',
        planner: 'BRSV_V',
        res: './docs/1988/1988_07_13_orientir_13_omaps.pdf'
    },
    {
        id: 'SPB_19880717_1',
        date: '1988-07-17',
        place: 'Комарово, Щучье оз',
        name: 'Ориентир-14',
        start: 'ORIENTIR',
        planner: 'PVLVA_N',
        res: './docs/1988/1988_07_17_orientir_14_omaps.pdf'
    },
    {
        id: 'SPB_19880720_1',
        date: '1988-07-20',
        place: 'пл Морская',
        name: 'Ориентир-15',
        start: 'ORIENTIR',
        res: './docs/1988/1988_07_20_orientir_15_omaps.pdf'
    },
    {
        id: 'SPB_19880724_1',
        date: '1988-07-24',
        place: 'Васкелово',
        name: 'Ориентир-16',
        start: 'ORIENTIR',
        planner: ['VSLVSKY','KHMPPU'],
        res: './docs/1988/1988_07_24_orientir_16_omaps.pdf'
    },
    {
        id: 'SPB_19880727_1',
        date: '1988-07-27',
        place: 'Ново-Токсово',
        name: 'Ориентир-18',
        start: 'ORIENTIR',
        planner: 'GRGRV_B',
        res: './docs/1988/1988_07_27_orientir_18_omaps.pdf'
    },
    {
        id: 'SPB_19880731_1',
        date: '1988-07-31',
        place: 'Орехово',
        name: 'Ориентир-19',
        start: 'ORIENTIR',
        planner: 'LBDV_S',
        res: './docs/1988/1988_07_31_orientir_19_omaps.pdf'
    },
    {
        id: 'SPB_19880824_1',
        date: '1988-08-24',
        place: 'Токсово',
        name: 'Ориентир-20, Зелёный змей',
        start: ['GS','ORIENTIR'],
        res: './docs/1988/1988_08_24_orientir_20_green_snake_omaps.pdf'
    },
    {
        id: 'SPB_19880828_1',
        date: '1988-08-28',
        place: 'Шапки',
        name: 'Ориентир-21, Ретро-88',
        start: 'ORIENTIR',
        res: './docs/1988/1988_08_28_orientir_21_retro_88_omaps.pdf'
    },
    {
        id: 'SPB_19880831_1',
        date: '1988-08-31',
        place: 'Удельный парк',
        name: 'Ориентир-22',
        start: 'ORIENTIR',
        res: './docs/1988/1988_08_31_orientir_22_omaps.pdf'
    },
    {
        id: 'SPB_19880907_1',
        date: '1988-09-07',
        place: 'Большеохтинский парк',
        name: 'Ориентир-23',
        start: 'ORIENTIR',
        planner: 'NKLVCH',
        res: './docs/1988/1988_09_07_orientir_23_omaps.pdf'
    },
    {
        id: 'SPB_19880917_1',
        date: '1988-09-17',
        endDate: '1988-09-18',
        place: 'Сосново',
        name: 'П-во Ленинграда среди ветеранов',
        planner: 'MLVA_M',
        res: './docs/1988/1988_09_17_leningrad_omaps.pdf'
    },
    {
        id: 'SPB_19880922_1',
        date: '1988-09-22',
        place: 'Шуваловский парк',
        name: 'Ориентир-24',
        start: 'ORIENTIR',
        planner: 'KDNV_A',
        res: './docs/1988/1988_09_22_orientir_24_omaps.pdf'
    },
    {
        id: 'SPB_19880924_1',
        date: '1988-09-24',
        place: 'Охтинский л/п',
        name: '"Золотая осень"',
        planner: 'LVCHV',
        res: './docs/1988/1988_09_24_golden_autumn_omaps.pdf'
    },
    {
        id: 'SPB_19881001_1',
        date: '1988-10-01',
        endDate: '1988-10-02',
        place: '67км, Всеволожск',
        name: 'Кубок ЛОС ВДФСО',
        planner: 'PNKRTV_N',
        res: './docs/1988/1988_10_01_unions_cup_omaps.pdf'
    },
    {
        id: 'SPB_19881007_1',
        date: '1988-10-07',
        endDate: '1988-10-08',
        name: 'День Конституции СССР',
        info: '<a href="./docs/1988/simagino_1988_10_07/doc_4_omaps.jpg">Информация</a>, <a href="./docs/1988/simagino_1988_10_07/doc_3_omaps.jpg">положение</a>, <a href="./docs/1988/simagino_1988_10_07/doc_5_omaps.jpg">7.10,МА(10км)</a>, <a href="./docs/1988/simagino_1988_10_07/doc_6_omaps.jpg">9.10,МА(11км)</a>, <a href="./docs/1988/simagino_1988_10_07/doc_7_omaps.jpg">7.10,ЖА(8км)</a>, <a href="./docs/1988/simagino_1988_10_07/doc_8_omaps.jpg">8.10,ЖА(7км)</a>.',
        planner: 'TRSV'
    },
    {
        id: 'SPB_19881015_1',
        date: '1988-10-15',
        place: 'Лемболово',
        name: 'П-во отраслевого совета физ-ры',
        res: './docs/1988/1988_10_15_omaps.pdf'
    },
    {
        id: 'SPB_19881016_1',
        date: '1988-10-16',
        place: 'Н.Токсово',
        name: 'Свадебные-88',
        start: 'WEDDING',
        res: './docs/1988/1988_10_16_wedding_omaps.pdf'
    },
    {
        id: 'SPB_19881108_1',
        date: '1988-11-08',
        place: 'Лемболово, справа',
        name: 'Соревнования по спортивному ориентированию, маркир,',
        planner: 'SMNV_M',
        res: './docs/1988/1988_11_08_markir_omaps.pdf'
    },
    {
        id: 'SPB_19881113_1',
        date: '1988-11-13',
        place: 'Токсово, оз Светлое',
        name: 'Тренировочный старт в заданном направлении на лыжах',
        res: './docs/1988/1988_11_13_toksovo_omaps.pdf'
    },
    {
        id: 'SPB_19881127_1',
        date: '1988-11-27',
        place: 'Кавголово',
        name: 'Тренировочная дистанция, выбор',
        planner: 'VSLVSKY',
        res: './docs/1988/1988_11_27_kavgolovo_omaps.pdf'
    },
    {
        id: 'SPB_19881231_1',
        date: '1988-12-31',
        place: 'Юкки',
        name: 'Новогодняя эстафета',
        me: 'М-15',
        res: './docs/1988/1988_12_31_new_year_omaps.pdf'
    },
    {
        id: 'SPB_19890507_1',
        date: '1989-05-07',
        endDate: '1989-05-09',
        place: 'Будогощь',
        name: '30 лет Ленинградского ориентирования',
        me: 'М15-1',
        res: './docs/1989/1989_05_07_XXX_years_omaps.pdf',
        start: 'LENINGRAD_30',
        planner: ['MLVA_M','MRSKY_S','KUOKNN_Y'],
        map: ['budogosch_orlenok_1988','budogosch_cheremukhovoe_1988']
    },
    {
        id: 'SPB_19890509_1',
        date: '1989-05-09',
        place: 'Энколово',
        name: 'Ориентир-1',
        start: 'ORIENTIR',
        planner: 'NKLVCH',
        res: './docs/1989/1989_05_09_orientir_1_omaps.pdf'
    },
    {
        id: 'SPB_19890517_1',
        date: '1989-05-17',
        place: 'Токсово',
        name: 'Ориентир-2',
        start: 'ORIENTIR',
        res: './docs/1989/1989_05_17_orientir_2_omaps.pdf'
    },
    {
        id: 'SPB_19890521_1',
        date: '1989-05-21',
        place: 'Кавголово',
        name: 'Приз Ленинградского телевидения',
        me: 'М-15',
        planner: 'SHVR',
        res: './docs/1989/1989_05_21_tv_omaps.pdf'
    },
    {
        id: 'SPB_19890524_1',
        date: '1989-05-24',
        place: 'Токсово',
        name: 'Ориентир-3',
        start: 'ORIENTIR',
        res: './docs/1989/1989_05_24_orientir_3_omaps.pdf'
    },
    {
        id: 'SPB_19890524_2',
        date: '1989-05-24',
        endDate: '1989-05-25',
        place: 'Рапполово, Токсово',
        name: 'П-во ЛОС ВДФСО Профсоюзов среди юношей и девушек',
        me: 'М-15',
        planner: ['SHRNN','CHGRVSKY_V','CHGRVSKY_Y','CHGRVSKA_O','NVGRDTSV'],
        res: './docs/1989/1989_05_24_unions_omaps.pdf'
    },
    {
        id: 'SPB_19890527_1',
        date: '1989-05-27',
        place: 'Петяярви',
        name: 'Кубок Ленинграда',
        me: 'М-15',
        res: './docs/1989/1989_05_27_leningrad_cup_omaps.pdf'
    },
    {
        id: 'SPB_19890528_1',
        date: '1989-05-28',
        place: 'Петяярви',
        name: 'Кубок Ленинграда',
        me: 'М-15',
        res: './docs/1989/1989_05_28_leningrad_cup_omaps.pdf'
    },
    {
        id: 'SPB_19890607_1',
        date: '1989-06-07',
        place: 'Токсово',
        name: 'Ориентир-4',
        start: 'ORIENTIR',
        planner: 'BRSV_V',
        res: './docs/1989/1989_06_07_orientir_4_omaps.pdf'
    },
    {
        id: 'SPB_19890609_1',
        date: '1989-06-09',
        endDate: '1989-06-11',
        place: 'Токсово',
        name: 'Летний чемпионат ЛОС ВДФСО профсоюзов',
        planner: 'CHGRVSKY_V',
        res: './docs/1989/1989_06_09_vdfso_unions_omaps.pdf'
    },
    {
        id: 'SPB_19890614_1',
        date: '1989-06-14',
        place: 'Шуваловский парк',
        name: 'Ориентир-5',
        start: 'ORIENTIR',
        me: 'МБ',
        res: './docs/1989/1989_06_14_orientir_5_omaps.pdf'
    },
    {
        id: 'SPB_19890622_1',
        date: '1989-06-22',
        place: 'Орехово',
        name: 'Ориентир-6',
        start: 'ORIENTIR',
        planner: 'TNV_A',
        res: './docs/1989/1989_06_22_orientir_6_omaps.pdf'
    },
    {
        id: 'SPB_19890623_1',
        date: '1989-06-23',
        place: 'Сосново, Снегирёвка',
        name: 'Белые ночи',
        me: 'М-15',
        info: 'Ночной старт.',
        res: './docs/1989/1989_06_23_wn_omaps.pdf',
        start: 'WN',
        map: 'wn_1989_06_23'
    },
    {
        id: 'SPB_19890628_1',
        date: '1989-06-28',
        place: 'Лемболово',
        name: 'Ориентир-7',
        start: 'ORIENTIR',
        planner: 'DRBSHV',
        res: './docs/1989/1989_06_28_orientir_7_omaps.pdf'
    },
    {
        id: 'SPB_19890702_1',
        date: '1989-07-02',
        place: 'Комарово',
        name: 'Ориентир-8',
        start: 'ORIENTIR',
        res: './docs/1989/1989_07_02_orientir_8_omaps.pdf'
    },
    {
        id: 'SPB_19890705_1',
        date: '1989-07-05',
        place: 'Токсово, Большой Кавголовский трамплин',
        name: 'Ориентир-9',
        start: 'ORIENTIR',
        res: './docs/1989/1989_07_05_orientir_9_omaps.pdf'
    },
    {
        id: 'SPB_19890709_1',
        date: '1989-07-09',
        place: 'Репино',
        name: 'Ориентир-10',
        start: 'ORIENTIR',
        planner: 'SHICK',
        res: './docs/1989/1989_07_09_orientir_10_omaps.pdf'
    },
    {
        id: 'SPB_19890713_1',
        date: '1989-07-13',
        place: 'Лемболово',
        name: 'Ориентир-11',
        start: 'ORIENTIR',
        planner: 'DRZGLSKY',
        res: './docs/1989/1989_07_13_orientir_11_omaps.pdf'
    },
    {
        id: 'SPB_19890716_1',
        date: '1989-07-16',
        place: 'Васкелово',
        name: 'Ориентир-12',
        start: 'ORIENTIR',
        res: './docs/1989/1989_07_16_orientir_12_omaps.pdf'
    },
    {
        id: 'SPB_19890719_1',
        date: '1989-07-19',
        place: 'Кавголово',
        name: 'Ориентир-13',
        start: 'ORIENTIR',
        planner: 'KRZHNVSKY',
        res: './docs/1989/1989_07_19_orientir_13_omaps.pdf'
    },
    {
        id: 'SPB_19890723_1',
        date: '1989-07-23',
        place: 'Васкелово',
        name: 'Ориентир-14',
        start: 'ORIENTIR',
        planner: 'BLNV_A',
        res: './docs/1989/1989_07_23_orientir_14_omaps.pdf'
    },
    {
        id: 'SPB_19890726_1',
        date: '1989-07-26',
        place: 'Токсово',
        name: 'Ориентир-15',
        start: 'ORIENTIR',
        planner: 'BRDLN_Y',
        res: './docs/1989/1989_07_26_orientir_15_omaps.pdf'
    },
    {
        id: 'SPB_19890730_2',
        date: '1989-07-30',
        place: 'Всеволожск',
        name: 'Ориентир-16',
        start: 'ORIENTIR',
        res: './docs/1989/1989_07_30_orientir_16_omaps.pdf'
    },
    {
        id: 'SPB_19890827_1',
        date: '1989-08-27',
        place: 'Орехово',
        name: 'Зелёный змей',
        start: 'GS',
        res: './docs/1989/1989_08_27_green_snake_omaps.pdf'
    },
    {
        id: 'SPB_19890830_1',
        date: '1989-08-30',
        place: 'Орловский парк',
        name: 'Ориентир-18',
        start: 'ORIENTIR',
        planner: 'TMKV_G',
        res: './docs/1989/1989_08_30_orientir_18_omaps.pdf'
    },
    {
        id: 'SPB_19890902_1',
        date: '1989-09-02',
        place: 'Всеволожский парк',
        name: 'Ориентир-19, на призы газеты Невская заря',
        start: 'ORIENTIR',
        me: 'М-Б',
        planner: 'RYLOV_V',
        res: './docs/1989/1989_09_02_orientir_19_omaps.pdf'
    },
    {
        id: 'SPB_19890903_1',
        date: '1989-09-03',
        place: 'садоводство Дружное',
        name: 'Критериум-6',
        res: './docs/1989/1989_09_03_kriterium_6_omaps.pdf'
    },
    {
        id: 'SPB_19890906_1',
        date: '1989-09-06',
        place: 'Токсово',
        name: 'Ориентир-20',
        start: 'ORIENTIR',
        me: 'М-Б',
        res: './docs/1989/1989_09_06_orientir_20_omaps.pdf'
    },
    {
        id: 'SPB_19890910_1',
        date: '1989-09-10',
        place: 'Токсово',
        name: 'П-во КСО АЗИМУТ среди ветеранов',
        planner: 'SHVR',
        res: './docs/1989/1989_09_10_veterans_omaps.pdf'
    },
    {
        id: 'SPB_19890916_1',
        date: '1989-09-16',
        place: 'Лемболово',
        name: 'Чемпионат Ленинграда',
        planner: 'BYMKV',
        res: './docs/1989/1989_09_16_championship_omaps.pdf'
    },
    {
        id: 'SPB_19890917_1',
        date: '1989-09-17',
        place: 'Петровское',
        name: 'Летний чемпионат Ленинграда, эстафета',
        planner: 'OVCHNNKV',
        res: './docs/1989/1989_09_17_championship_omaps.pdf'
    },
    {
        id: 'SPB_19890924_1',
        date: '1989-09-24',
        place: 'Юкки',
        name: 'Летний чемпионат Ленинграда, удлиннённая дистанция',
        planner: 'SHLKHN_Y',
        res: './docs/1989/1989_09_24_championship_omaps.pdf'
    },
    {
        id: 'SPB_19890924_2',
        date: '1989-09-24',
        place: 'Песочная',
        name: 'Ориентир-20',
        start: 'ORIENTIR',
        planner: 'VSLVSKY',
        res: './docs/1989/1989_09_24_orientir_20_omaps.pdf'
    },
    {
        id: 'SPB_19891007_1',
        date: '1989-10-07',
        endDate: '1989-10-08',
        place: '69км, о Щучье',
        name: 'День Конституции СССР',
        planner: 'ARTMV',
        res: './docs/1989/1989_10_07_constitution_omaps.pdf'
    },
    {
        id: 'SPB_19891015_1',
        date: '1989-10-15',
        place: 'Лемболово',
        name: 'П-во обкома радиоэлектроники',
        res: './docs/1989/1989_10_15_obkom_electricity_omaps.pdf'
    },
    {
        id: 'SPB_19891020_1',
        date: '1989-10-20',
        place: 'Мельничный ручей',
        name: 'XXVIII командные ночные соревнования туристов памяти А.Окинчица',
        start: 'OKINCHITSA',
        res: './docs/1989/1989_10_20_okinchitsa_omaps.pdf'
    },
    {
        id: 'SPB_19891105_1',
        date: '1989-11-05',
        place: 'Комарово',
        name: 'Ориентир-21',
        start: 'ORIENTIR',
        planner: 'DRBSHV',
        res: './docs/1989/1989_11_05_orientir_21_omaps.pdf'
    },
    {
        id: 'SPB_19891108_1',
        date: '1989-11-08',
        place: 'Лемболово',
        name: 'Соревнования в з/н',
        planner: 'OSPV_A',
        res: './docs/1989/1989_11_08_lembolovo_omaps.pdf'
    },
    {
        id: 'SPB_19891112_1',
        date: '1989-11-12',
        place: 'Токсово',
        name: 'Соревнования на маркированной трассе',
        planner: 'SMNV_M',
        res: './docs/1989/1989_11_12_toksovo_omaps.pdf'
    },
    {
        id: 'SPB_19891119_1',
        date: '1989-11-19',
        place: 'Токсово',
        name: 'Ориентир-24, маркир',
        start: 'ORIENTIR',
        me: 'М',
        res: './docs/1989/1989_11_19_orientir_24_omaps.pdf'
    },
    {
        id: 'SPB_19891126_1',
        date: '1989-11-26',
        place: 'Зеленогорск',
        name: 'Соревнования',
        res: './docs/1989/1989_11_26_zelenogorsk_omaps.pdf'
    },
    {
        id: 'SPB_19891207_1',
        date: '1989-12-07',
        place: 'Горнозаводск',
        name: 'Чемпионат СССР',
        start: 'USSR_CHAMP',
        planner: ['MTN_Y','SVIR_A'],
        res: './docs/1989/1989_12_07_gornozavodsk_ussr_omaps.pdf'
    },
    {
        id: 'SPB_19900114_1',
        date: '1990-01-14',
        place: 'Кавголово',
        name: 'Зимний чемпионат ЛОС ДФСОП',
        me: 'М-17',
        planner: 'SHVR',
        res: './docs/1990/1990_01_14_los_dfsop_omaps.pdf'
    },
    {
        id: 'SPB_19900120_1',
        date: '1990-01-20',
        place: 'Васкелово',
        name: 'Кубок Ленинграда, маркир',
        me: 'МБ',
        planner: 'VLKV_A',
        res: './docs/1990/1990_01_20_leningrad_cup_omaps.pdf'
    },
    {
        id: 'SPB_19900121_1',
        date: '1990-01-21',
        place: 'Лемболово',
        name: 'Кубок Ленинграда',
        me: 'МБ',
        planner: 'SHVR',
        res: './docs/1990/1990_01_21_leningrad_cup_omaps.pdf'
    },
    {
        id: 'SPB_19900217_1',
        date: '1990-02-17',
        place: 'Васкелово',
        name: 'Зимний чемпионат Ленинграда, маркир',
        me: 'HB',
        planner: 'VLKV_A',
        res: './docs/1990/1990_02_17_leningrad_omaps.pdf'
    },
    {
        id: 'SPB_19900218_1',
        date: '1990-02-18',
        place: 'Васкелово',
        name: 'Зимний чемпионат Ленинграда',
        me: 'HB',
        planner: 'VLKV_A',
        res: './docs/1990/1990_02_18_leningrad_omaps.pdf'
    },
    {
        id: 'SPB_19900224_1',
        date: '1990-02-24',
        place: 'Васкелово',
        name: 'Зимний чемпионат Ленинграда',
        me: 'HB',
        planner: 'VLKV_A',
        res: './docs/1990/1990_02_24_leningrad_omaps.pdf'
    },
    {
        id: 'SPB_19900225_1',
        date: '1990-02-25',
        place: 'Васкелово',
        name: 'Зимний чемпионат Ленинграда, эстафета 3х',
        me: 'М21',
        planner: 'VLKV_A',
        res: './docs/1990/1990_02_25_relay_omaps.pdf'
    },
    {
        id: 'SPB_19900408_1',
        date: '1990-04-08',
        place: 'Кузьмолово',
        name: 'Бро-бег',
        res: './docs/1990/1990_04_08_brobeg_omaps.pdf'
    },
    {
        id: 'SPB_19900422_1',
        date: '1990-04-22',
        place: 'Кузьмолово',
        name: 'Ориентир-3',
        start: 'ORIENTIR',
        me: 'МА',
        planner: 'FDRV_L',
        res: './docs/1990/1990_04_22_orientir_3_omaps.pdf'
    },
    {
        id: 'SPB_19900430_1',
        date: '1990-04-30',
        endDate: '1990-05-02',
        place: 'Воейково',
        name: 'Майские многодневные соревнования',
        res: './docs/1990/1990_04_30_mayski_omaps.pdf'
    },
    {
        id: 'SPB_19900509_1',
        date: '1990-05-09',
        place: 'Юкки',
        name: 'Приз открытия сезока клуба Азимут',
        me: 'М-15',
        planner: 'SHLKHN_Y',
        res: './docs/1990/1990_05_09_open_omaps.pdf'
    },
    {
        id: 'SPB_19900520_1',
        date: '1990-05-20',
        place: 'Сосновка',
        name: 'Приз Ленинградского телевидения',
        info: 'Матчевая встреча по ориентированию между командами инвалидов Ленинграда и Гетеборга.',
        video: 'https://vk.com/wall-135156716_14',
        me: 'М15',
        planner: 'SHLKHN_Y',
        res: './docs/1990/1990_05_20_tv_omaps.pdf'
    },
    {
        id: 'SPB_19900606_1',
        date: '1990-06-06',
        place: 'Юкки',
        name: 'Ориентир-9',
        res: './docs/1990/1990_06_06_yukki_omaps.pdf',
        info: '<a href="./docs/1990/1990_06_06_yukki/doc_1_omaps.gif">МА</a>, <a href="./docs/1990/1990_06_06_yukki/doc_2_omaps.gif">МБ</a>, <a href="./docs/1990/1990_06_06_yukki/doc_3_omaps.gif">МС,Н</a>, <a href="./docs/1990/1990_06_06_yukki/doc_4_omaps.gif">ЖА</a>, <a href="./docs/1990/1990_06_06_yukki/doc_5_omaps.gif">ЖБ,ЖС</a>',
        start: 'ORIENTIR',
        map: 'orientir_1990_06_06',
        me: 'МА'
    },
    {
        id: 'SPB_19900610_1',
        date: '1990-06-10',
        place: 'Юкки',
        name: 'Ориентир-10',
        start: 'ORIENTIR',
        map: 'orientir_1990_06_10'
    },
    {
        id: 'SPB_19900616_1',
        date: '1990-06-16',
        endDate: '1990-06-18',
        place: 'Мичуринское',
        name: 'Невский Азимут',
        start: 'NA',
        me: 'М15',
        planner: ['NKFRV_A','FDRV_L','SHLKHN_Y'],
        res: './docs/1990/1990_06_16_nevsky_azimut_omaps.pdf'
    },
    {
        id: 'SPB_19900620_1',
        date: '1990-06-20',
        place: 'Лемболово',
        name: 'Ориентир-11',
        start: 'ORIENTIR',
        map: 'orientir_1990_06_20'
    },
    {
        id: 'SPB_19900622_1',
        date: '1990-06-22',
        endDate: '1990-06-24',
        place: 'Замостье',
        name: 'Белые ночи',
        me: 'H15B',
        start: 'WN',
        map: 'zamostie_1989',
        res: './docs/1990/1990_06_24_wn_omaps.pdf'
    },
    {
        id: 'SPB_19900627_1',
        date: '1990-06-27',
        place: 'Токсово, Изумрудное оз',
        name: 'Ориентир-12',
        start: 'ORIENTIR',
        map: 'orientir_1990_06_27'
    },
    {
        id: 'SPB_19900704_1',
        date: '1990-07-04',
        place: 'Кавголово',
        name: 'Ориентир-14',
        start: 'ORIENTIR',
        map: 'orientir_1990_07_04'
    },
    {
        id: 'SPB_19900711_1',
        date: '1990-07-11',
        place: 'Кавголово',
        name: 'Ориентир-15',
        start: 'ORIENTIR',
        map: 'orientir_1990_07_11'
    },
    {
        id: 'SPB_19900714_1',
        date: '1990-07-14',
        place: 'Петяярви',
        name: 'Ориентир-16',
        start: 'ORIENTIR',
        map: 'orientir_1990_07_14'
    },
    {
        id: 'SPB_19900715_1',
        date: '1990-07-15',
        place: 'Петяярви',
        name: 'Ориентир-17',
        start: 'ORIENTIR',
        map: 'orientir_1990_07_15'
    },
    {
        id: 'SPB_19900721_1',
        date: '1990-07-21',
        place: 'Яппиля',
        name: 'Ориентир-19',
        start: 'ORIENTIR',
        map: 'orientir_1990_07_21'
    },
    {
        id: 'SPB_19900722_1',
        date: '1990-07-22',
        place: 'Яппиля',
        name: 'Ориентир-20',
        start: 'ORIENTIR',
        map: 'orientir_1990_07_22'
    },
    {
        id: 'SPB_19900728_1',
        date: '1990-07-28',
        place: 'Кузнечное, оз Суури',
        name: 'Ориентир-22',
        start: 'ORIENTIR',
        map: 'kuznechnoe_suuri_1984'
    },
    {
        id: 'SPB_19900826_1',
        date: '1990-08-26',
        place: 'Лемболово',
        name: 'Зелёный змей',
        res: './docs/1990/1990_08_26_green_snake_omaps.pdf',
        start: 'GS',
        map: 'gs_1990'
    },
    {
        id: 'SPB_19900909_1',
        date: '1990-09-09',
        place: 'Лесколово',
        name: 'П-во Ленинграда среди ветеранов',
        me: 'МБ',
        planner: 'FDRV_L',
        res: './docs/1990/1990_09_09_masters_omaps.pdf'
    },
    {
        id: 'SPB_19900912_1',
        date: '1990-09-12',
        place: 'Сосновка',
        name: 'Ориентир-26',
        start: 'ORIENTIR',
        planner: 'BLNV_A',
        res: './docs/1990/1990_09_12_orientir_26_omaps.pdf'
    },
    {
        id: 'SPB_19900915_1',
        date: '1990-09-15',
        place: 'Сосново',
        name: 'Чемпионат Ленинграда',
        me: 'М-15',
        planner: 'LVCHV',
        res: './docs/1990/1990_09_15_leningrad_omaps.pdf'
    },
    {
        id: 'SPB_19900916_1',
        date: '1990-09-16',
        place: '69км',
        name: 'Чемпионат Ленинграда',
        me: 'М-15',
        planner: 'LVCHV',
        res: './docs/1990/1990_09_16_leningrad_omaps.pdf'
    },
    {
        id: 'SPB_19900923_1',
        date: '1990-09-23',
        place: '69км',
        name: 'Первенство Ленинграда, марафон',
        me: 'М-15',
        planner: 'KAZNTSV_S',
        res: './docs/1990/1990_09_23_leningrad_marathon_omaps.pdf'
    },
    {
        id: 'SPB_19901006_1',
        date: '1990-10-06',
        endDate: '1990-10-07',
        name: '"Дыхание осени" на День Конституции СССР',
        info: '<a href="./docs/1990/sosnovo_1990_10_06/doc_3_omaps.jpg">Положение</a>, <a href="./docs/1990/sosnovo_1990_10_06/doc_4_omaps.jpg">МА</a>.',
        map: 'sosnovo_1990_10_06'
    },
    {
        id: 'SPB_19901013_1',
        date: '1990-10-13',
        place: 'Лемболово',
        name: 'Ночные соревнования на призы клуба АЗИМУТ',
        me: 'МБ',
        planner: 'FDRV_L',
        res: './docs/1990/1990_10_13_night_lembolovo_omaps.pdf'
    },
    {
        id: 'SPB_19901014_1',
        date: '1990-10-14',
        place: 'Лемболово',
        name: 'Свадебные-90',
        start: 'WEDDING',
        res: './docs/1990/1990_10_14_wedding_omaps.pdf'
    },
    {
        id: 'SPB_19901104_1',
        date: '1990-11-04',
        place: 'Зеленогорск',
        name: 'Ориентир-27',
        start: 'ORIENTIR',
        planner: 'FDRV_L',
        res: './docs/1990/1990_11_04_orientir_27_omaps.pdf'
    },
    {
        id: 'SPB_19901108_1',
        date: '1990-11-08',
        place: 'Лемболово',
        name: 'Ориентир-28',
        start: 'ORIENTIR',
        me: "М-А",
        planner: 'KRVCHNKO_A',
        res: './docs/1990/1990_11_08_orientir_28_omaps.pdf'
    },
    {
        id: 'SPB_19901110_1',
        date: '1990-11-10',
        place: 'Токсово, Зона-Z',
        name: 'Ориентир-29',
        start: 'ORIENTIR',
        map: 'orientir_1990_11_10',
        res: './docs/1990/1990_11_10_orientir_29_omaps.pdf'
    },
    {
        id: 'SPB_19901118_1',
        date: '1990-11-18',
        place: 'Токсово, оз Кривое',
        name: 'Ориентир-30',
        res: './docs/1990/1990_11_18_relay_omaps.pdf',
        start: 'ORIENTIR',
        planner: 'SMNV_M',
        map: 'orientir_1990_11_18'
    },
    {
        id: 'SPB_19901223_1',
        date: '1990-12-23',
        place: 'Колтуши',
        name: 'Открытие зимнего сезона в з/н',
        me: 'МБ',
        planner: 'RYLOV_V',
        res: './docs/1990/1990_12_23_open_omaps.pdf'
    },
    {
        id: 'SPB_19901230_1',
        date: '1990-12-30',
        place: 'Всеволожск',
        name: 'Новогодняя эстафета',
        me: 'МВ',
        res: './docs/1990/1990_12_30_new_year_omaps.pdf'
    },
    {
        id: 'SPB_19910105_1',
        date: '1991-01-05',
        endDate: '1991-01-06',
        name: 'Невская заря',
        res: './docs/1991/1991_01_05_nzarya_omaps.pdf'
    },
    {
        id: 'SPB_19910119_1',
        date: '1991-01-19',
        endDate: '1991-01-20',
        place: 'Кавголово',
        name: 'Кубок Ленинграда',
        me: 'М18',
        planner: 'SHRNN',
        res: ['./docs/1991/1991_01_19_leningrad_cup_omaps.pdf', './docs/1991/1991_01_20_leningrad_cup_omaps.pdf']
    },
    {
        id: 'SPB_19910202_1',
        date: '1991-02-02',
        endDate: '1991-02-03',
        place: 'Сосново',
        name: 'П-во Ленинграда, маркир',
        me: 'H17',
        planner: 'MRSKY_S',
        res: ['./docs/1991/1991_02_02_leningrad_omaps.pdf', './docs/1991/1991_02_03_leningrad_omaps.pdf']
    },
    {
        id: 'SPB_19910209_1',
        date: '1991-02-09',
        endDate: '1991-02-10',
        place: 'Сосново',
        name: 'П-во Ленинграда, з/н и эстафета',
        me: 'М17а,М3',
        planner: ['MRSKY_S','RYLOV_V'],
        res: ['./docs/1991/1991_02_09_leningrad_omaps.pdf', './docs/1991/1991_02_10_leningrad_omaps.pdf']
    },
    {
        id: 'SPB_19910216_1',
        date: '1991-02-16',
        place: 'Шуваловский парк',
        name: 'П-во обкома профсоюза',
        res: './docs/1991/1991_02_16_obkom_unions_omaps.pdf'
    },
    {
        id: 'SPB_19910217_1',
        date: '1991-02-17',
        place: 'Колтуши',
        name: 'Зимнее п-во клуба АЗИМУТ',
        res: './docs/1991/1991_02_17_azimut_omaps.pdf'
    },
    {
        id: 'SPB_19910224_1',
        date: '1991-02-24',
        endDate: '1991-02-27',
        place: 'Свердловская обл, Шаманиха',
        name: 'III Чемпионат СССР',
        start: 'USSR_CHAMP',
        planner: 'KNTSVCH',
        res: './docs/1991/1991_02_24_shamanikha_ussr_winter_champ_omaps.pdf',
        map: 'shamanikha_ussr_winter_champ_1991'
    },
    {
        id: 'SPB_19910301_1',
        date: '1991-03-01',
        endDate: '1991-03-03',
        place: 'Нижний Новгород',
        name: 'Всесоюзные соревнования по спортивному ориентированию среди спортсменов среднего и старшего возраста',
        res: './docs/1991/1991_veteran_ussr_omaps.pdf'
    },
    {
        id: 'SPB_19910309_1',
        date: '1991-03-09',
        place: 'Кузьмолово',
        name: 'Чемпионат ЛОС ДФСО профсоюзов, маркир',
        planner: ['BRDLN_Y','TLNV_A','SVTKN','LVCHV'],
        res: './docs/1991/1991_03_09_vdfso_unions_omaps.pdf'
    },
    {
        id: 'SPB_19910407_1',
        date: '1991-04-07',
        place: 'Воейково',
        name: 'Ориентир-1',
        planner: 'SMNV_M',
        start: 'ORIENTIR',
        map: 'orientir_1991_04_07',
        res: './docs/1991/1991_04_07_voeykovo_omaps.pdf',
        me: 'МА'
    },
    {
        id: 'SPB_19910413_1',
        date: '1991-04-13',
        place: 'Колтуши',
        name: 'Ориентир-2',
        start: 'ORIENTIR',
        planner: 'NKLVCH',
        map: 'orientir_1991_04_13',
        res: './docs/1991/1991_04_13_orientir_2_omaps.pdf'
    },
    {
        id: 'SPB_19910414_1',
        date: '1991-04-14',
        place: 'Кузьмолово',
        name: 'Бро-бег',
        me: 'М-4',
        res: './docs/1991/1991_04_14_brobeg_omaps.pdf'
    },
    {
        id: 'SPB_19910427_1',
        date: '1991-04-27',
        place: 'Юкки',
        name: 'Ориентир-3',
        planner: 'PVLV_M',
        start: 'ORIENTIR',
        map: 'orientir_1991_04_27',
        res: ['./docs/1991_04_27_yukki_omaps.pdf', './docs/1991/1991_04_27_yukki_omaps.pdf'],
        me: 'МА'
    },
    {
        id: 'SPB_19910428_1',
        date: '1991-04-28',
        place: 'Токсово',
        name: 'XV соревнования школьников "День эстафет"',
        planner: 'BRSNTSNA',
        res: './docs/1991/1991_04_28_relay_omaps.pdf'
    },
    {
        id: 'SPB_19910501_1',
        date: '1991-05-01',
        endDate: '1991-05-03',
        place: 'Шалово',
        name: 'Майские многодневные соревнования',
        planner: ['FDRV_L','DRBSHV'],
        res: './docs/1991/1991_05_01_mayski_omaps.pdf'
    },
    {
        id: 'SPB_19910509_1',
        date: '1991-05-09',
        place: 'Токсово',
        name: 'Подснежник',
        planner: 'SVTKN',
        res: './docs/1991/1991_05_09_snowdrop_omaps.pdf'
    },
    {
        id: 'SPB_19910509_2',
        date: '1991-05-09',
        name: 'Открытие сезона',
        res: './docs/1991/1991_05_09_open_omaps.pdf'
    },
    {
        id: 'SPB_19910511_1',
        date: '1991-05-11',
        place: 'Орловский л/п',
        name: 'Приз Ленинградского телевидения',
        planner: 'FDRV_L',
        res: './docs/1991/1991_05_11_tv_omaps.pdf'
    },
    {
        id: 'SPB_19910519_1',
        date: '1991-05-19',
        place: 'Стадион "Химик"',
        name: 'Приз газеты "Охта"',
        res: './docs/1991/1991_05_19_okhta_omaps.pdf'
    },
    {
        id: 'SPB_19910522_1',
        date: '1991-05-22',
        place: 'Комарово',
        name: 'Ориентир-6',
        start: 'ORIENTIR',
        map: 'orientir_1991_05_22'
    },
    {
        id: 'SPB_19910523_1',
        date: '1991-05-23',
        place: 'Охтинский парк',
        name: 'Летняя спартакиада клуба "ЭНЕРГИЯ"',
        planner: 'VSLVSKY',
        res: './docs/1991/1991_05_23_energy_omaps.pdf'
    },
    {
        id: 'SPB_19910525_1',
        date: '1991-05-25',
        endDate: '1991-05-26',
        place: '69км',
        name: 'Кубок Ленинграда',
        planner: ['KUZNTSV_V','TRSV_D','BNDRNK'],
        res: ['./docs/1991/1991_05_25_leningrad_cup_omaps.pdf', './docs/1991/1991_05_26_leningrad_cup_omaps.pdf']
    },
    {
        id: 'SPB_19910528_1',
        date: '1991-05-28',
        place: 'Юкки',
        name: 'П-во КНО',
        planner: 'RYZHOV',
        res: './docs/1991/1991_05_28_kno_omaps.pdf'
    },
    {
        id: 'SPB_19910529_1',
        date: '1991-05-29',
        place: 'Сертолово',
        name: 'Ориентир-7',
        start: 'ORIENTIR',
        map: 'orientir_1991_05_29',
        res: './docs/1991/1991_05_29_orientir_7_omaps.pdf'
    },
    {
        id: 'SPB_19910605_1',
        date: '1991-06-05',
        place: 'Орловский л/п',
        name: 'Ориентир-8',
        start: 'ORIENTIR',
        map: 'orientir_1991_06_08',
        res: './docs/1991/1991_06_05_orientir_8_omaps.pdf'
    },
    {
        id: 'SPB_19910608_1',
        date: '1991-06-08',
        place: 'Вяртемяки',
        name: 'Чемпионат Ленинграда',
        planner: 'SHLKHN_Y',
        res: './docs/1991/1991_06_08_leningrad_omaps.pdf'
    },
    {
        id: 'SPB_19910609_1',
        date: '1991-06-09',
        place: 'Шапки',
        name: 'Чемпионат Ленинграда',
        planner: 'KRCHKN_V',
        res: './docs/1991/1991_06_09_leningrad_omaps.pdf'
    },
    {
        id: 'SPB_19910612_1',
        date: '1991-06-12',
        place: 'Токсово',
        name: 'Ориентир-10',
        start: 'ORIENTIR',
        map: 'orientir_1991_06_12',
        res: './docs/1991/1991_06_12_toksovo_omaps.pdf',
        me: 'МА'
    },
    {
        id: 'SPB_19910615_1',
        date: '1991-06-15',
        endDate: '1991-06-16',
        place: 'Невский л/п, Вартемяки',
        name: 'Летний чемпионат ЛОС ВДФСО профсоюзов',
        planner: ['SHRNN','SHLKHN_Y'],
        res: ['./docs/1991/1991_06_15_vdfso_unions_omaps.pdf', './docs/1991/1991_06_16_vdfso_unions_omaps.pdf']
    },
    {
        id: 'SPB_19910626_1',
        date: '1991-06-26',
        place: 'Лемболово',
        name: 'Ориентир-11',
        start: 'ORIENTIR',
        planner: 'BYMKV',
        map: 'orientir_1991_06_26',
        res: './docs/1991/1991_06_26_orientir_11_omaps.pdf'
    },
    {
        id: 'SPB_19910628_1',
        date: '1991-06-28',
        endDate: '1991-06-30',
        place: 'Сосново, юг',
        name: 'Белые ночи',
        start: 'WN',
        map: 'sosnovo_south_1989',
        res: './docs/1991/1991_06_28_wn_omaps.pdf'
    },
    {
        id: 'SPB_19910703_1',
        date: '1991-07-03',
        place: 'Токсово, Изумрудное оз',
        name: 'Ориентир-12',
        start: 'ORIENTIR',
        planner: 'BRSV_V',
        map: 'orientir_1991_07_03',
        res: './docs/1991/1991_07_03_orientir_12_omaps.pdf'
    },
    {
        id: 'SPB_19910707_1',
        date: '1991-07-07',
        place: 'Васкелово',
        name: 'Ориентир-13',
        start: 'ORIENTIR',
        planner: 'BLNV_A',
        map: 'orientir_1991_07_07',
        res: './docs/1991/1991_07_07_orientir_13_omaps.pdf'
    },
    {
        id: 'SPB_19910710_1',
        date: '1991-07-10',
        place: 'Кавголово',
        name: 'Ориентир-14',
        start: 'ORIENTIR',
        map: 'orientir_1991_07_10',
        res: './docs/1991/1991_07_10_orientir_14_omaps.pdf'
    },
    {
        id: 'SPB_19910717_1',
        date: '1991-07-17',
        place: 'Токсово',
        name: 'Ориентир-16',
        start: 'ORIENTIR',
        me: 'МА',
        res: './docs/1991/1991_07_17_orientir_16_omaps.pdf'
    },
    {
        id: 'SPB_19910720_1',
        date: '1991-07-20',
        endDate: '1991-07-21',
        place: 'Кузнечное, оз Суури',
        res: './docs/1991/1991_07_20_orientir_17_omaps.pdf',
        name: 'Ориентир-17',
        start: 'ORIENTIR',
        map: ['orientir_1991_07_20','orientir_1991_07_21']
    },
    {
        id: 'SPB_19910724_1',
        date: '1991-07-24',
        place: 'Невский л/п',
        name: 'Ориентир-19',
        start: 'ORIENTIR',
        planner: 'DSHKO',
        map: 'orientir_1991_07_24',
        res: './docs/1991/1991_07_24_orientir_19_omaps.pdf'
    },
    {
        id: 'SPB_19910825_1',
        date: '1991-08-25',
        name: 'Зелёный змей',
        start: 'GS',
        me: 'М',
        res: './docs/1991/1991_08_25_green_snake_omaps.pdf'
    },
    {
        id: 'SPB_19910828_1',
        date: '1991-08-28',
        place: 'Песочная',
        name: 'Ориентир-22',
        me: 'H-A',
        start: 'ORIENTIR',
        map: 'orientir_1991_08_28',
        res: './docs/1991/1991_08_28_orientir_22_omaps.pdf'
    },
    {
        id: 'SPB_19910831_1',
        date: '1991-08-31',
        endDate: '1991-09-01',
        place: 'ст Песочное',
        name: 'Приз НЕВСКОЙ ЗАРИ',
        me: 'М-17',
        res: './docs/1991/1991_08_31_nevska_zarya_omaps.pdf'
    },
    {
        id: 'SPB_19910904_1',
        date: '1991-09-04',
        place: 'Шуваловский парк',
        name: 'Ориентир-23',
        start: 'ORIENTIR',
        map: 'orientir_1991_09_04',
        res: './docs/1991/1991_09_04_orientir_23_omaps.pdf'
    },
    {
        id: 'SPB_19910908_1',
        date: '1991-09-08',
        place: 'Гарболово',
        name: 'П-во КСО "Невский азимут"',
        start: 'NA',
        planner: 'KRZHNVSKY',
        map: 'garbolovo_1991',
        res: './docs/1991/1991_09_08_club_championship_omaps.pdf',
        me: 'H-A'
    },
    {
        id: 'SPB_19910911_1',
        date: '1991-09-11',
        place: 'Сосновка',
        name: 'Ориентир-24',
        me: 'H-A',
        start: 'ORIENTIR',
        planner: 'AMSVA',
        map: 'orientir_1991_09_11',
        res: './docs/1991/1991_09_11_orientir_24_omaps.pdf'
    },
    {
        id: 'SPB_19910914_1',
        date: '1991-09-14',
        place: 'Васкелово',
        name: 'Соревнования среди спортсменов старшего возраста',
        planner: 'SMNV_M',
        map: 'kerro_1988',
        res: ['./docs/1991/1991_09_14_veterans_omaps.pdf', './docs/1991/1991_09_15_veterans_omaps.pdf']
    },
    {
        id: 'SPB_19910915_1',
        date: '1991-09-15',
        place: 'Комарово',
        name: 'Кубок ЛГДТЮ',
        planner: 'GRV_M',
        res: './docs/1991/1991_09_15_lgdty_omaps.pdf'
    },
    {
        id: 'SPB_19910921_1',
        date: '1991-09-21',
        place: 'Шапки',
        name: 'Чемпионат Ленинграда, удлиннённая дистанция',
        planner: 'KRCHKN_V',
        res: './docs/1991/1991_09_21_leningrad_omaps.pdf'
    },
    {
        id: 'SPB_19910922_1',
        date: '1991-09-22',
        place: 'Шапки',
        name: 'Чемпионат Ленинграда, эстафета',
        planner: 'KRCHKN_V',
        res: './docs/1991/1991_09_22_leningrad_omaps.pdf'
    },
    {
        id: 'SPB_19910929_1',
        date: '1991-09-29',
        place: 'Орехово',
        name: 'Ориентир-25',
        start: 'ORIENTIR',
        planner: 'FDRV_L',
        map: 'orientir_1991_09_29',
        res: './docs/1991/1991_09_29_orientir_25_omaps.pdf'
    },
    {
        id: 'SPB_19911005_1',
        date: '1991-10-05',
        endDate: '1991-10-06',
        place: 'Осельки',
        name: 'Золотая осень',
        me: 'H17',
        planner: ['DRBSHV','FDRV_L'],
        res: './docs/1991/1991_10_05_golden_autumn_omaps.pdf'
    },
    {
        id: 'SPB_19911012_1',
        date: '1991-10-12',
        endDate: '1991-10-13',
        place: 'Лемболово',
        name: 'Ночной СПб',
        planner: 'GBNVA_A',
        map: 'lembolovo_north_east_1989',
        res: ['./docs/1991/1991_10_12_night_omaps.pdf', './docs/1991/1991_10_12_universiada_omaps.pdf'],
        me: 'H-B'
    },
    {
        id: 'SPB_19911013_1',
        date: '1991-10-13',
        place: 'Юкки',
        name: 'П-во ФОК Антей',
        res: './docs/1991/1991_10_13_antey_omaps.pdf'
    },
    {
        id: 'SPB_19911013_2',
        date: '1991-10-13',
        place: 'Лемболово',
        name: 'Свадебные-91',
        start: 'WEDDING',
        res: './docs/1991/1991_10_13_wedding_omaps.pdf'
    },
    {
        id: 'SPB_19911027_1',
        date: '1991-10-27',
        place: 'Мельничный ручей',
        name: 'Закрытие сезона',
        res: './docs/1991/1991_10_27_season_close_omaps.pdf'
    },
    {
        id: 'SPB_19911108_1',
        date: '1991-11-08',
        place: 'Лемболово',
        name: 'Ориентир-27',
        start: 'ORIENTIR',
        planner: 'FSNKO',
        map: 'orientir_1991_11_08',
        res: './docs/1991/1991_11_08_orientir_27_omaps.pdf'
    },
    {
        id: 'SPB_19920101_1',
        date: '1992-01-01',
        name: 'Новогодняя ночь',
        res: './docs/1992/1992_01_01_new_year_omaps.pdf'
    },
    {
        id: 'SPB_19920125_1',
        date: '1992-01-25',
        endDate: '1992-02-02',
        place: 'Лемболово, Васкелово',
        name: 'Зимний чемпионат СПб',
        me: 'H21',
        planner: ['NKFRV_A','TKHNV_V','VLKV_A'],
        res: './docs/1992/1992_01_25_spb_omaps.pdf'
    },
    {
        id: 'SPB_19920405_1',
        date: '1992-04-05',
        place: 'Юкки',
        name: 'Ориентир-1',
        start: 'ORIENTIR',
        me: 'HA',
        planner: 'DRBSHV',
        res: './docs/1992/1992_04_05_orientir_omaps.pdf'
    },
    {
        id: 'SPB_19920419_1',
        date: '1992-04-19',
        name: 'Бро-бег',
        me: 'H17',
        res: './docs/1992/1992_04_19_brobeg_omaps.pdf'
    },
    {
        id: 'SPB_19920426_1',
        date: '1992-04-26',
        place: 'Токсово',
        name: 'Открытие зимнего сезона',
        me: 'HA',
        planner: 'DRBSHV',
        res: './docs/1992/1992_04_26_open_omaps.pdf'
    },
    {
        id: 'SPB_19920501_1',
        date: '1992-05-01',
        place: 'Колтуши',
        name: 'Майские многодневные соревнования',
        planner: ['FDRV_L','NKFRV_A'],
        res: ['./docs/1992/1992_05_mayski_omaps.pdf', './docs/1992/1992_05_01_mayski_omaps.pdf', './docs/1992/1992_05_02_mayski_omaps.pdf', './docs/1992/1992_05_03_mayski_omaps.pdf']
    },
    {
        id: 'SPB_19920509_1',
        date: '1992-05-09',
        place: 'Токсово',
        name: 'Подснежник',
        me: 'H2',
        res: './docs/1992/1992_05_09_snowdrop_omaps.pdf'
    },
    {
        id: 'SPB_19920510_1',
        date: '1992-05-10',
        place: 'Кавголово',
        name: 'Приз телевидения',
        me: 'H17',
        res: './docs/1992/1992_05_10_tv_omaps.pdf'
    },
    {
        id: 'SPB_19920513_1',
        date: '1992-05-13',
        place: 'Охтинский лесопарк',
        name: 'Ориентир-3',
        start: 'ORIENTIR',
        me: 'HA',
        planner: 'NKLVCH',
        res: './docs/1992/1992_05_13_orientir_omaps.pdf'
    },
    {
        id: 'SPB_19920524_1',
        date: '1992-05-24',
        place: 'Осельки',
        name: 'Лесной ландыш',
        me: 'HA',
        planner: 'VLKV_A',
        res: './docs/1992/1992_05_24_forest_landysh_omaps.pdf'
    },
    {
        id: 'SPB_19920527_1',
        date: '1992-05-27',
        place: 'Токсово, Семейное оз',
        name: 'Ориентир',
        start: 'ORIENTIR',
        me: 'HA',
        res: './docs/1992/1992_05_27_orientir_omaps.pdf'
    },
    {
        id: 'SPB_19920530_1',
        date: '1992-05-30',
        endDate: '1992-05-31',
        place: 'Лемболово',
        name: 'Кубок СПб',
        me: 'H17',
        planner: ['NKFRV_A','FDRV_L'],
        res: './docs/1992/1992_05_30_spb_cup_omaps.pdf'
    },
    {
        id: 'SPB_19920619_1',
        date: '1992-06-19',
        endDate: '1992-06-21',
        place: 'Борисово',
        name: 'Невский Азимут',
        start: 'NA',
        me: 'H17',
        planner: ['SHRPV_V','NKFRV_A','FDRV_L'],
        res: './docs/1992/1992_06_19_na_omaps.pdf',
        map: ['yagodnoe_46_1992', 'zhuravlevo_plotvichnoe_1992', 'zhuravlevskoe_1992']
    },
    {
        id: 'SPB_19920626_1',
        date: '1992-06-26',
        endDate: '1992-06-28',
        place: 'Сосново',
        name: 'Белые Ночи',
        start: 'WN',
        me: 'H17',
        res: ['./docs/1992/1992_06_26_wn_omaps.pdf', './docs/1992/1992_06_26_wn_part_fine_omaps.pdf']
    },
    {
        id: 'SPB_19920708_1',
        date: '1992-07-08',
        place: 'Кузьмолово',
        name: 'Ориентир-11',
        start: 'ORIENTIR',
        me: 'МА',
        res: './docs/1992/1992_07_08_orientir_omaps.pdf'
    },
    {
        id: 'SPB_19920715_1',
        date: '1992-07-15',
        place: 'Кавголово',
        name: 'Ориентир-13',
        start: 'ORIENTIR',
        me: 'МА',
        planner: 'BRSV_V',
        res: './docs/1992/1992_07_15_orientir_omaps.pdf'
    },
    {
        id: 'SPB_19920717_1',
        date: '1992-07-17',
        place: 'Лемболово',
        name: 'Ориентир-14',
        start: 'ORIENTIR',
        me: 'H-A',
        planner: ['GBNVA_A','GBNV_A'],
        res: './docs/1992/1992_07_17_orientir_omaps.pdf'
    },
    {
        id: 'SPB_19920905_1',
        date: '1992-09-05',
        place: 'Яппиля',
        name: 'Первенство СПб, эстафета',
        me: 'H21',
        res: './docs/1992/1992_09_05_spb_yappilya_omaps.pdf'
    },
    {
        id: 'SPB_19920906_1',
        date: '1992-09-06',
        place: 'Яппиля',
        name: 'Первенство СПб',
        me: 'H21',
        res: './docs/1992/1992_09_06_spb_yappilya_omaps.pdf'
    },
    {
        id: 'SPB_19920912_1',
        date: '1992-09-12',
        endDate: '1992-09-13',
        place: 'Юкки, Лемболово',
        name: 'Открытый кубок С-ПГДТЮ',
        me: 'H17',
        planner: ['SMNV_M','BLZRV_V'],
        res: './docs/1992/1992_09_12_spgdty_omaps.pdf'
    },
    {
        id: 'SPB_19920927_1',
        date: '1992-09-27',
        place: 'Саблино',
        name: 'П-во КСО Азимут',
        me: 'HA',
        planner: 'DRBSHV',
        res: './docs/1992/1992_09_27_azimuth_omaps.pdf'
    },
    {
        id: 'SPB_19921004_1',
        date: '1992-10-04',
        place: 'Воейково',
        name: 'Чемпионат СПб, марафон',
        me: 'H-A',
        planner: 'VSLVSKY',
        res: './docs/1992/1992_10_04_spb_marathon_omaps.pdf'
    },
    {
        id: 'SPB_19921017_1',
        date: '1992-10-17',
        name: 'Ночное п-во КСО Азимут',
        res: './docs/1992/1992_10_17_night_azimuth_omaps.pdf'
    },
    {
        id: 'SPB_19921018_1',
        date: '1992-10-18',
        place: 'Токсово',
        name: 'Чемпионат ВУЗов',
        me: 'М',
        planner: 'MTSKVCH_V',
        res: './docs/1992/1992_10_18_universities_omaps.pdf'
    },
    {
        id: 'SPB_19930314_1',
        date: '1993-03-14',
        place: 'Токсово',
        name: 'Зимняя Универсиада ВУЗов СПб',
        me: 'М',
        res: './docs/1993/1993_03_14_universiada_omaps.pdf'
    },
    {
        id: 'SPB_19930404_1',
        date: '1993-04-04',
        place: 'Лемболово',
        name: 'Приз закрытия зимнего сезона, ретро-марафон',
        planner: 'PNKRTV_B',
        res: './docs/1993/1993_04_04_close_marathon_omaps.pdf',
        map: 'lembolovo_orekhovo_east_1991'
    },
    {
        id: 'SPB_19930411_1',
        date: '1993-04-11',
        place: 'Воейково',
        name: 'Ориентир-1',
        start: 'ORIENTIR',
        me: 'HA',
        planner: 'RDKV',
        res: './docs/1993/1993_04_11_orientir_1_omaps.pdf'
    },
    {
        id: 'SPB_19930512_1',
        date: '1993-05-12',
        place: 'парк Челюскинцев',
        name: 'Ориентир-12',
        start: 'ORIENTIR',
        me: 'A',
        planner: 'KNDRSHKN_I',
        res: './docs/1993/1993_05_12_orientir_12_omaps.pdf'
    },
    {
        id: 'SPB_19930602_1',
        date: '1993-06-02',
        place: 'Токсово',
        name: 'Ориентир',
        start: 'ORIENTIR',
        me: 'HA',
        res: './docs/1993/1993_06_02_orientir_omaps.pdf'
    },
    {
        id: 'SPB_19930613_1',
        date: '1993-06-13',
        place: 'Токсово',
        name: 'ЧиП СПб, эстафета 3х',
        me: 'H21A',
        planner: 'RYLOV_V',
        res: './docs/1993/1993_06_13_spb_relay_omaps.pdf'
    },
    {
        id: 'SPB_19930616_1',
        date: '1993-06-16',
        endDate: '1993-06-21',
        place: 'Мичуринское, Борисово',
        name: 'Невский Азимут',
        start: 'NA',
        planner: ['VLKV_A','NKFRV_A','SKLV_B','FSNKO','SHRPV_V'],
        res: './docs/1993/1993_06_16_na_omaps.pdf'
    },
    {
        id: 'SPB_19930703_1',
        date: '1993-07-03',
        place: 'Васкелово',
        name: 'ЧиП СПб, спринт',
        me: 'H21A',
        res: './docs/1993/1993_07_03_spb_sprint_omaps.pdf'
    },
    {
        id: 'SPB_19930704_1',
        date: '1993-07-04',
        place: 'Васкелово',
        name: 'ЧиП СПб',
        me: 'H21A',
        res: './docs/1993/1993_07_04_spb_omaps.pdf'
    },
    {
        id: 'SPB_19930905_1',
        date: '1993-09-05',
        place: 'Токсово',
        name: 'Зелёный змей',
        start: 'GS',
        me: 'М',
        res: './docs/1993/1993_09_05_green_snake_omaps.pdf'
    },
    {
        id: 'SPB_19930919_1',
        date: '1993-09-19',
        place: 'Лемболово',
        name: 'Кубок МОЛОДЁЖНОГО',
        me: 'H21',
        res: './docs/1993/1993_09_19_molodezhnoe_cup_omaps.pdf'
    },
    {
        id: 'SPB_19931017_1',
        date: '1993-10-17',
        place: 'Токсово',
        name: 'Чемпионат ВУЗов',
        me: 'М',
        res: './docs/1993/1993_10_17_universities_omaps.pdf'
    },
    {
        id: 'SPB_19940109_1',
        date: '1994-01-09',
        name: 'St.Petersburg Cup',
        me: 'H21',
        res: './docs/1994/1994_01_09_spb_cup_omaps.pdf'
    },
    {
        id: 'SPB_19940617_1',
        date: '1994-06-17',
        endDate: '1994-06-19',
        place: 'Борисово',
        name: 'Невский Азимут',
        start: 'NA',
        planner: 'ZKHRV_VCH',
        res: './docs/1994/1994_06_17_na_omaps.pdf'
    },
    {
        id: 'SPB_19940903_1',
        date: '1994-09-03',
        endDate: '1994-09-04',
        name: 'Чемпионат С-Петербурга, спринт, марафон',
        me: 'H21',
        res: './docs/1994/1994_09_03_spb_omaps.pdf'
    },
    {
        id: 'SPB_19950529_1',
        date: '1995-05-29',
        endDate: '1995-06-02',
        place: 'Лемболово, Орехово',
        name: 'Кубок мира среди ветеранов',
        start: 'VWC_1995',
        map: ['lembolovo_vwc_model_1995','lembolovo_vwc_1995','lembolovo_orekhovo_1995','lembolovo_vwc_1995_06_02'],
        major: true
    },
    {
        id: 'SPB_19950610_1',
        date: '1995-06-10',
        endDate: '1995-06-12',
        place: 'Лемболово',
        name: 'Чемпионат С-Петербурга',
        me: 'М21E',
        res: './docs/1995/1995_06_10_spb_omaps.pdf'
    },
    {
        id: 'SPB_19950623_1',
        date: '1995-06-23',
        endDate: '1995-06-25',
        place: 'Цвелодубово',
        name: 'Белые Ночи',
        start: 'WN',
        res: './docs/1995/1995_06_23_wn_omaps.pdf',
        map: ['tsvelodubovo_south_1995', 'tsvelodubovo_1995']
    },
    {
        id: 'SPB_19950903_1',
        date: '1995-09-03',
        place: 'Осельки',
        name: 'Зелёный змей',
        start: 'GS',
        res: './docs/1995/1995_09_03_green_snake_omaps.pdf'
    },
    {
        id: 'SPB_19950917_1',
        date: '1995-09-17',
        place: 'Токсово',
        name: 'Открытое п-во ГО Молодёжное',
        start: 'REPORT',
        map: 'toksovo_1995_09_17',
        res: './docs/1995/1995_09_17_molodezhnoe_omaps.pdf'
    },
    {
        id: 'SPB_19950922_1',
        date: '1995-09-22',
        name: 'European hope, спринт',
        start: 'EUROPEAN_HOPE',
        res: './docs/1995/1995_09_22_european_hope_omaps.pdf'
    },
    {
        id: 'SPB_19951231_1',
        date: '1995-12-31',
        place: 'Гатчина',
        name: 'Новогодняя эстафета',
        res: './docs/1995/1995_12_31_ny_relay_omaps.pdf'
    },
    {
        id: 'SPB_19960126_1',
        date: '1996-01-26',
        endDate: '1996-01-28',
        place: 'Зеленогорск',
        name: 'Лично-командное п-во России',
        major: true,
        res: './docs/1996/1996_01_26_russia_omaps.pdf'
    },
    {
        id: 'SPB_19960523_1',
        date: '1996-05-23',
        endDate: '1996-05-25',
        place: 'Ягодное',
        name: 'Молодёжное п-во России',
        major: true,
        res: './docs/1996/1996_05_23_russia_omaps.pdf'
    },
    {
        id: 'SPB_19960615_1',
        date: '1996-06-15',
        endDate: '1996-06-17',
        place: 'Мичуринское',
        name: 'Невский Азимут',
        start: 'NA',
        res: './docs/1996/1996_06_15_na_omaps.pdf'
    },
    {
        id: 'SPB_19960621_1',
        date: '1996-06-21',
        endDate: '1996-06-23',
        place: 'Петяярви',
        name: 'Белые Ночи',
        start: 'WN',
        res: './docs/1996/1996_06_21_wn_omaps.pdf',
        map: 'petjajarvy_1995'
    },
    {
        id: 'SPB_19960628_1',
        date: '1996-06-28',
        endDate: '1996-07-01',
        place: 'Austria',
        name: 'European Youth Championship',
        major: true,
        res: './docs/1996/1996_06_28_yeoc_omaps.pdf'
    },
    {
        id: 'SPB_19960629_1',
        date: '1996-06-29',
        endDate: '1996-06-30',
        place: 'Ягодное',
        res: './docs/1996/1999_06_29_svyatkina_omaps.pdf',
        name: 'Мемориал Михаила Святкина',
        start: 'MMS',
        map: ['mms_1996_06_29','mms_1996_06_30']
    },
    {
        id: 'SPB_19960901_1',
        date: '1996-09-01',
        place: 'Токсово',
        name: 'Зелёный змей',
        start: 'GS',
        res: './docs/1996/1996_09_01_green_snake_omaps.pdf'
    },
    {
        id: 'SPB_19960929_1',
        date: '1996-09-29',
        place: 'Ильичёво',
        name: 'ЧиП СПб, удлинённая дистанция',
        res: './docs/1996/1996_09_29_spb_omaps.pdf'
    },
    {
        id: 'SPB_19970612_1',
        date: '1997-06-12',
        endDate: '1997-06-14',
        place: 'Ильичёво',
        name: 'Невский Азимут',
        start: 'NA',
        res: './docs/1997/1997_06_12_na_omaps.pdf',
        map: 'na_1997_06_13'
    },
    {
        id: 'SPB_19970613_1',
        date: '1997-06-13',
        place: 'Ильичёво, оз Долгое',
        name: 'Невский азимут',
        start: 'NA',
        map: 'na_1997_06_13',
        res: './docs/1997/1997_06_12_na_omaps.pdf'
    },
    {
        id: 'SPB_19970620_1',
        date: '1997-06-20',
        endDate: '1997-06-22',
        place: 'Ягодное',
        name: 'Белые ночи',
        start: 'WN',
        map: 'petjajarvy_1997',
        res: './docs/1997/1997_06_20_wn_omaps.pdf'
    },
    {
        id: 'SPB_19970628_1',
        date: '1997-06-28',
        endDate: '1997-06-29',
        place: 'Лемболово, Орехово',
        name: 'Мемориал Михаила Святкина',
        start: 'MMS',
        planner: 'TLNV_A',
        map: ['mms_1997_06_28','mms_1997_06_29']
    },
    {
        id: 'SPB_19970831_1',
        date: '1997-08-31',
        place: 'Лемболово',
        name: 'Зелёный змей',
        start: 'GS',
        res: './docs/1997/1997_08_31_green_snake_omaps.pdf'
    },
    {
        id: 'SPB_19970927_1',
        date: '1997-09-27',
        place: 'Можайское',
        name: 'ЧиП СПб, спринт',
        res: './docs/1997/1997_09_27_spb_omaps.pdf'
    },
    {
        id: 'SPB_19970928_1',
        date: '1997-09-28',
        place: 'Ольгино',
        name: 'ЧиП СПб, удлинённая дистанция',
        res: './docs/1997/1997_09_28_spb_omaps.pdf'
    },
    {
        id: 'SPB_19971004_1',
        date: '1997-10-04',
        endDate: '1997-10-06',
        place: 'Яппиля',
        name: 'European hope',
        start: 'EUROPEAN_HOPE',
        res: './docs/1997/1997_10_04_european_hope_omaps.pdf',
        map: ['ozerki_1997', 'tarasovskoe_1997']
    },
    {
        id: 'SPB_19971006_1',
        date: '1997-10-06',
        place: 'Озерки',
        name: 'Надежды Европы',
        start: 'EUROPEAN_HOPE',
        map: 'ozerki_1997',
        res: './docs/1997/1997_10_04_european_hope_omaps.pdf'
    },
    {
        id: 'SPB_19980218_1',
        date: '1998-02-18',
        place: 'Орехово',
        name: 'Чемпионат России',
        info: 'Финал Чемпионата России по лыжному ориентированию. Главный судья соревнований А.М.Бровин, главный секретарь Е.А.Винер.',
        start: 'RUSSIA_CHAMP',
        planner: 'BRDN_V',
        res: './docs/1998/1998_02_18_russia_omaps.pdf'
    },
    {
        id: 'SPB_19980227_1',
        date: '1998-02-27',
        place: 'Орехово',
        name: 'Предчемпионат мира по лыжному ориентированию среди ветеранов',
        res: './docs/1998/1998_02_27_world_masters_predchamp_omaps.pdf'
    },
    {
        id: 'SPB_19980606_1',
        date: '1998-06-06',
        place: 'Лемболово',
        name: 'ЧиП СПб, П-во ветеранов',
        res: './docs/1998/1998_06_06_spb_omaps.pdf'
    },
    {
        id: 'SPB_19980612_1',
        date: '1998-06-12',
        endDate: '1998-06-14',
        place: 'Сосново',
        name: 'Яркий Мир, Невский Азимут',
        start: ['YM','NA'],
        res: './docs/1998/1998_06_12_ym_na_omaps.pdf'
    },
    {
        id: 'SPB_19980619_1',
        date: '1998-06-19',
        endDate: '1998-06-21',
        place: 'Кривко, оз Уловное',
        name: 'Белые ночи',
        start: 'WN',
        map: 'sosnovo_ulovnoe_1998',
        res: './docs/1998/1998_06_19_wn_omaps.pdf'
    },
    {
        id: 'SPB_19980627_1',
        date: '1998-06-27',
        endDate: '1998-06-28',
        place: 'Кузнечное, Богатыри',
        name: 'Мемориал Михаила Святкина',
        start: 'MMS',
        res: './docs/1998/1998_06_27_svyatkina_omaps.pdf',
        map: 'mms_1998_06'
    },
    {
        id: 'SPB_19980829_1',
        date: '1998-08-29',
        place: 'Юкки',
        name: 'Зелёный змей',
        start: 'GS',
        res: './docs/1998/1998_08_29_green_snake_omaps.pdf'
    },
    {
        id: 'SPB_19980919_1',
        date: '1998-09-19',
        place: 'Орехово',
        name: 'Чемпионат СПб, спринт',
        res: './docs/1998/1998_09_19_spb_sprint_omaps.pdf'
    },
    {
        id: 'SPB_19980920_1',
        date: '1998-09-20',
        place: 'Орехово',
        name: 'Чемпионат СПб, удлинённая дистанция',
        res: './docs/1998/1998_09_20_spb_long_omaps.pdf'
    },
    {
        id: 'SPB_19990220_1',
        date: '1999-02-20',
        place: 'Стеклянный',
        name: 'П-во России среди ДЮСШ. П-во России среди ветеранов',
        map: 'steklyanny_winter_1999'
    },
    {
        id: 'SPB_19990307_1',
        date: '1999-03-07',
        place: 'Лемболово',
        name: 'Зимний чемпионат СПб, маркир',
        planner: 'BRDN_V',
        res: './docs/1999/1999_03_07_spb_markir_omaps.pdf'
    },
    {
        id: 'SPB_19990314_1',
        date: '1999-03-14',
        place: 'Лемболово',
        name: 'Зимний чемпионат СПб, эстафета 2х',
        planner: 'BRDN_V',
        res: './docs/1999/1999_03_14_spb_relay_omaps.pdf'
    },
    {
        id: 'SPB_19990321_1',
        date: '1999-03-21',
        place: 'Лемболово',
        name: 'Зимний чемпионат СПб',
        planner: 'BRDN_V',
        res: './docs/1999/1999_03_21_spb_winter_omaps.pdf'
    },
    {
        id: 'SPB_19990411_1',
        date: '1999-04-11',
        place: 'Кузьмолово',
        name: 'Бро-бег',
        res: './docs/1999/1999_04_11_brobeg_omaps.pdf'
    },
    {
        id: 'SPB_19990612_1',
        date: '1999-06-12',
        endDate: '1999-06-14',
        place: 'Орехово',
        name: 'Невский Азимут',
        start: 'NA',
        res: './docs/1999/1999_06_12_nevsky_azimut_omaps.pdf'
    },
    {
        id: 'SPB_19990618_1',
        date: '1999-06-18',
        endDate: '1999-06-20',
        place: 'Цвелодубово',
        name: 'Белые Ночи',
        start: 'WN',
        res: './docs/1999/1999_06_18_wn_omaps.pdf',
        map: 'yappilya_1999'
    },
    {
        id: 'SPB_19990620_1',
        date: '1999-06-20',
        place: 'Богатыри',
        name: 'Silva Cup, Карельские скалы',
        start: 'KS',
        map: 'sc_1999_06_20'
    },
    {
        id: 'SPB_19990626_1',
        date: '1999-06-26',
        endDate: '1999-06-27',
        place: 'Яппиля',
        name: 'Мемориал Михаила Святкина',
        start: 'MMS',
        res: './docs/1999/1999_06_26_svyatkina_omaps.pdf',
        map: 'yappilya_1999'
    },
    {
        id: 'SPB_19990702_1',
        date: '1999-07-02',
        endDate: '1999-07-04',
        place: 'Лемболово',
        name: 'Яркий Мир',
        start: 'YM',
        res: './docs/1999/1999_07_02_ym_omaps.pdf',
        map: ['ym_2001_06_18', 'ym_2001_06_19']
    },
    {
        id: 'SPB_19990822_1',
        date: '1999-08-22',
        place: 'Песочный',
        name: 'ПУТЧ-99',
        planner: 'MLNN_E',
        res: './docs/1999/1999_08_22_putch_omaps.pdf'
    },
    {
        id: 'SPB_19990828_1',
        date: '1999-08-28',
        place: 'Лемболово',
        name: 'Зелёный змей',
        start: 'GS',
        res: './docs/1999/1999_08_28_green_snake_omaps.pdf'
    },
    {
        id: 'SPB_19990919_1',
        date: '1999-09-19',
        place: 'Орехово',
        name: 'Чемпионат СПб, марафон',
        res: './docs/1999/1999_09_19_spb_marathon_omaps.pdf'
    },
    {
        id: 'SPB_20000610_1',
        date: '2000-06-10',
        endDate: '2000-06-12',
        place: 'Орехово',
        name: 'Невский Азимут',
        start: 'NA',
        res: './docs/2000/2000_06_10_nevsky_azimut_omaps.pdf'
    },
    {
        id: 'SPB_20000619_1',
        date: '2000-06-19',
        endDate: '2000-06-21',
        place: 'Замостье, пл 69км, Снегирёвка',
        name: 'Яркий мир',
        start: 'YM',
        map: ['zamostie_ym_1999','ym_2000_06_20','snegirevka_1999']
    },
    {
        id: 'SPB_20000623_1',
        date: '2000-06-23',
        endDate: '2000-06-25',
        place: 'Кузнечное, оз Травкино, оз Берёзовское',
        name: 'Карельские скалы',
        start: 'KS',
        map: ['ks_2000_06_23','ks_2000_06_24','ks_2000_06_25']
    },
    {
        id: 'SPB_20000630_1',
        date: '2000-06-30',
        endDate: '2000-07-02',
        place: 'Каменногорск',
        name: 'Мемориал Михаила Святкина',
        start: 'MMS',
        map: ['mms_2000_06_30','mms_2000_07_02']
    },
    {
        id: 'SPB_20000927_1',
        date: '2000-09-27',
        place: 'Лесколово',
        name: 'Осенний Марш-бросок (ОМБ)',
        start: 'MB',
        map: 'leskolovo_mb_2000'
    },
    {
        id: 'SPB_20010610_1',
        date: '2001-06-10',
        endDate: '2001-06-12',
        place: 'Лосево',
        name: 'Невский Азимут',
        start: 'NA',
        planner: ['FDRV_L','BRDR','SHKLV'],
        res: './docs/2001/2001_06_10_nevsky_azimut_omaps.pdf',
        map: ['na_2001_losevo_1', 'na_2001_losevo_3']
    },
    {
        id: 'SPB_20010618_1',
        date: '2001-06-18',
        endDate: '2001-06-20',
        place: 'Ягодное',
        res: './docs/2001/2001_06_18_ym_omaps.pdf',
        name: 'Яркий мир',
        start: 'YM',
        map: ['ym_2001_06_18','ym_2001_06_19']
    },
    {
        id: 'SPB_20010622_1',
        date: '2001-06-22',
        endDate: '2001-06-26',
        place: 'Кузнечное, оз Подосиновские',
        name: 'Карельские скалы',
        start: 'KS',
        map: ['ks_2001_06_22','ks_2001_06_23','ks_2001_06_24','ks_2001_06_25','ks_2001_06_26']
    },
    {
        id: 'SPB_20010628_1',
        date: '2001-06-28',
        endDate: '2001-06-30',
        place: 'Пески, оз Пулконлампи',
        res: './docs/2001/2001_06_28_svyatkina_omaps.pdf',
        name: 'Мемориал Михаила Святкина',
        start: 'MMS',
        map: ['peski_pulkonlampi_2001','peski_zabytoe_2001','peski_stayka_2001']
    },
    {
        id: 'SPB_20010826_1',
        date: '2001-08-26',
        place: 'Токсово',
        name: 'Зелёный змей',
        start: 'GS',
        res: './docs/2001/2001_08_26_green_snake_omaps.pdf'
    },
    {
        id: 'SPB_20020824_1',
        date: '2002-08-24',
        endDate: '2002-08-25',
        place: 'Мичуринское-Петяярви',
        name: 'Три-О-Тлон',
        type: 'ORIENT',
        res: 'https://o-site.spb.ru/_races/TOT2002/TOT2002_res.htm',
        photo: 'http://o-site.spb.ru/gallery.php?id=gallery03',
        info: 'Первый Три-О-Тлон',
        logo: 'triotlon.gif',
        o_site: 'TOT2002'
    },
    {
        id: 'SPB_20030802_1',
        date: '2003-08-02',
        endDate: '2003-08-03',
        place: 'Мичуринское',
        name: 'Три-О-Тлон',
        type: 'ORIENT',
        res: 'https://o-site.spb.ru/_races/TOT2003/TOT2003_res.htm',
        photo: 'http://o-site.spb.ru/gallery.php?id=gallery04',
        info: 'Второй выпуск гонки',
        logo: 'triotlon.gif',
        o_site: 'TOT2003'
    }
];
