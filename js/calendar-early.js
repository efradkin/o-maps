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
        id: 'SPB_19690304_1',
        date: '1969-03-04',
        place: 'Шапки',
        name: 'П-во Ленинграда',
        fmt: 'марафон маркир',
        map: 'shapki_marathon_1969',
        res: './docs/1969/1969_03_04_shapki_marathon_omaps.pdf'
    },
    {
        id: 'SPB_19690628_1',
        date: '1969-06-28',
        endDate: '1969-06-29',
        place: 'Гарболово, оз Сиркоярви',
        name: '10 лет спортивного ориентирования в Ленинграде',
        map: 'sirkojarvi_1969',
        res: './docs/1969/1969_06_21_garbolovo_10_years_omaps.pdf'
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
        id: 'SPB_19710705_1',
        date: '1971-07-05',
        place: 'Петяярви',
        name: 'Первенство завода Вибратор',
        res: './docs/1971/1971_07_05_petyajarvi_omaps.pdf',
        map: 'petyajarvi_1968'
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
        info: '<a href="./docs/1974_leningrad_omaps.pdf">Отчёт</a>.',
        fmt: 'маркир',
        start: 'REPORT',
        map: 'sosnovo_black_forest_1974'
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
        id: 'SPB_19771009_1',
        date: '1977-10-09',
        place: 'Стеклянный, оз Маролампи',
        name: 'Золотые Кольца (Свадебные)',
        start: 'WEDDING',
        map: 'marolampi_1977',
        res: './docs/1977/1977_10_09_wedding_omaps.pdf'
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
        id: 'SPB_19790804_1',
        date: '1979-08-04',
        endDate: '1979-08-05',
        place: 'Ивангород',
        name: 'Кубок ЭССР. Кубок ЦСФиС',
        map: 'ivangorod_1979'
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
        res: './docs/1983/1983_06_11_spartak_omaps.pdf',
        name: 'Летний Чемпионат ЛГС ДСО Спартак',
        info: '<a href="./docs/1983/1983_06_11_spartak_rule_omaps.pdf">Положение, отчёт</a>.',
        start: 'REPORT',
        planner: ['BLZRV_V','CHGRVSKY_V'],
        map: ['sosnovo_1983_06_11','sosnovo_1983_06_12']
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
        id: 'SPB_19860510_1',
        date: '1986-05-10',
        place: 'Песочная',
        name: 'Приз Ленинградского телевидения',
        map: 'pesochnaya_1986',
        res: './docs/1986/1986_05_10_tv_omaps.pdf',
        me: 'М-10'
    },
    {
        id: 'SPB_19890507_1',
        date: '1989-05-07',
        endDate: '1989-05-08',
        place: 'Будогощь',
        name: '30 лет Ленинградского ориентирования',
        start: 'LENINGRAD_30',
        planner: ['MLVA_M','MRSKY_S','KUOKNN_Y'],
        map: ['budogosch_orlenok_1988','budogosch_cheremukhovoe_1988']
    },
    {
        id: 'SPB_19890623_1',
        date: '1989-06-23',
        place: 'Сосново, Снегирёвка',
        name: 'Белые ночи',
        info: 'Ночной старт.',
        res: './docs/1989/1989_06_23_wn_omaps.pdf',
        start: 'WN',
        map: 'wn_1989_06_23'
    },
    {
        id: 'SPB_19900606_1',
        date: '1990-06-06',
        place: 'Юкки',
        name: 'Ориентир-9',
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
        place: 'Замостье',
        name: 'Белые ночи',
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
        start: 'GS',
        map: 'gs_1990'
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
        start: 'ORIENTIR',
        planner: 'SMNV_M',
        map: 'orientir_1990_11_18'
    },
    {
        id: 'SPB_19910407_1',
        date: '1991-04-07',
        place: 'Воейково',
        name: 'Ориентир-1',
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
        id: 'SPB_19910427_1',
        date: '1991-04-27',
        place: 'Юкки',
        name: 'Ориентир-3',
        start: 'ORIENTIR',
        map: 'orientir_1991_04_27',
        res: './docs/1991_04_27_yukki_omaps.pdf',
        me: 'МА'
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
        id: 'SPB_19910720_1',
        date: '1991-07-20',
        endDate: '1991-07-21',
        place: 'Кузнечное, оз Суури',
        res: './docs/1991/1991_07_20_orientir_17_omaps.pdf',
        info: 'Ориентир-17',
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
        id: 'SPB_19910828_1',
        date: '1991-08-28',
        place: 'Песочная',
        name: 'Ориентир-22',
        start: 'ORIENTIR',
        map: 'orientir_1991_08_28',
        res: './docs/1991/1991_08_28_orientir_22_omaps.pdf'
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
        res: './docs/1991/1991_09_14_veterans_omaps.pdf'
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
        id: 'SPB_19911012_1',
        date: '1991-10-12',
        place: 'Лемболово',
        name: 'Ночной СПб',
        map: 'lembolovo_north_east_1989',
        res: './docs/1991/1991_10_12_night_omaps.pdf',
        me: 'H-B'
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
        id: 'SPB_19950529_1',
        date: '1995-05-29',
        endDate: '1995-06-02',
        place: 'Лемболово, Орехово',
        name: 'Кубок мира среди ветеранов',
        info: 'Model.',
        start: 'VWC_1995',
        map: ['lembolovo_vwc_model_1995','lembolovo_vwc_1995','lembolovo_orekhovo_1995','lembolovo_vwc_1995_06_02'],
        major: true
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
        id: 'SPB_19960629_1',
        date: '1996-06-29',
        place: 'Ягодное',
        res: './docs/1996/1999_06_29_svyatkina_omaps.pdf',
        name: 'Мемориал Михаила Святкина',
        start: 'MMS',
        map: ['mms_1996_06_29','mms_1996_06_30']
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
        id: 'SPB_19971006_1',
        date: '1997-10-06',
        place: 'Озерки',
        name: 'Надежды Европы',
        start: 'EUROPEAN_HOPE',
        map: 'ozerki_1997',
        res: './docs/1997/1997_10_04_european_hope_omaps.pdf'
    },
    {
        id: 'SPB_19980619_1',
        date: '1998-06-19',
        place: 'Кривко, оз Уловное',
        name: 'Белые ночи',
        start: 'WN',
        map: 'sosnovo_ulovnoe_1998',
        res: './docs/1998/1998_06_19_wn_omaps.pdf'
    },
    {
        id: 'SPB_19990220_1',
        date: '1999-02-20',
        place: 'Стеклянный',
        name: 'П-во России среди ДЮСШ. П-во России среди ветеранов',
        map: 'steklyanny_winter_1999'
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
        id: 'SPB_20010618_1',
        date: '2001-06-18',
        endDate: '2001-06-19',
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
