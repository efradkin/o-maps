let skiTracks = [
    // --- ЛЫЖИ ---
    {
        name: 'Московский парк Победы',
        info: 'Абсолютно плоский самотопный круг. Дорожки часто посыпают песком.',
        gpx: 'tracks/ski/victory_park_ski_omaps.gpx',
        pics: ['ski/pobedy',3],
        ski_kind: 'WALKWAY',
        type: ['SKI']
    },
    {
        name: 'Парк Авиаторов',
        info: 'Абсолютно плоский самотопный круг, но можно покататься с единственной горки на северо-западе парка.',
        gpx: 'tracks/ski/aviatorov_park_ski_omaps.gpx',
        ski_kind: 'WALKWAY',
        type: ['SKI']
    },
    {
        name: 'парк Героев-пожарных',
        gpx: 'tracks/ski/firemen_park_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Елагин о-в, ЦПКиО',
        info: 'Абсолютно плоский круг.',
        gpx: 'tracks/ski/elagin_ski_omaps.gpx',
        ski_kind: 'WALKWAY',
        type: ['SKI']
    },
    {
        name: 'Муринский парк',
        info: 'Плавный рельеф и лыжероллерная трасса летом. Но мамочки и собачники тоже считают её своей.',
        source: 'stremglav',
        gpx: 'tracks/ski/murinsky_ski_omaps.gpx',
        ski_kind: 'WALKWAY',
        video: 'https://www.youtube.com/watch?v=Ha6Sx7xGi7A',
        type: ['SKI']
    },
    {
        name: 'Полюстровский парк',
        gpx: 'tracks/ski/poljustrovsky_park_ski_omaps.gpx',
        ski_kind: 'WALKWAY',
        type: ['SKI']
    },
    {
        name: 'Екатерингофский парк',
        info: 'Абсолютно плоский круг.',
        gpx: 'tracks/ski/ekateringof_ski_omaps.gpx',
        ski_kind: 'WALKWAY',
        type: ['SKI']
    },
    {
        name: 'Петергофское ш, Дудергофский кан',
        info: 'Подготавливается ЦФКСиЗ Красносельского района.',
        gpx: 'tracks/ski/petergofsky_dudergofsky_ski_omaps.gpx',
        ski_kind: 'CLASSIC_ROUTE',
        type: ['SKI'],
        logo: 'krasnoselsky.gif'
    },
    {
        name: 'Полежаевский парк',
        info: 'Единственная лыжная трасса с хоть сколько-то заметным рельефом на юге города.',
        gpx: 'tracks/ski/polezhaevsky_park_ski_omaps.gpx',
        pics: ['ski/polezhaevsky',2],
        ski_kind: 'FICKLE_ROUTE',
        type: ['SKI'],
        video: 'https://www.youtube.com/watch?v=DQ2A4HuTVXk',
        logo: 'krasnoselsky.gif'
    },
    {
        name: 'парк им.акд.Сахарова',
        info: 'Абсолютно плоский круг.',
        gpx: 'tracks/ski/sakharova_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Крестовский остров',
        link: 'https://vk.com/spbrun_run',
        info: 'Широкая плоская трасса с двумя искусственными горками.',
        gpx: 'tracks/ski/krestovsky_ski_omaps.gpx',
        logo: 'spb_sport.gif',
        pics: ['ski/krestovsky',2],
        ski_kind: 'SKATE_ROUTE',
        video: 'https://www.youtube.com/watch?v=2TAmp_3ICtU',
        type: ['SKI']
    },
    {
        name: 'Пушкин, Отдельный парк',
        year: 2026,
        info: 'Лыжная трасса с небольшим плавным рельефом.',
        gpx: {
            '2026г':'tracks/ski/pushkin_otdelny_ski_2026_omaps.gpx',
            '2025г':'tracks/ski/pushkin_otdelny_ski_2025_omaps.gpx'
        },
        pics: ['ski/pushkin',1],
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Александровская, Баболовский парк',
        info: 'Плоская самотопная лыжня.',
        gpx: 'tracks/ski/aleksandrovskaya_ski_omaps.gpx',
        ski_kind: 'FURROW',
        type: ['SKI']
    },
    {
        name: 'Колпино, ПКиО о.Чухонка',
        gpx: 'tracks/ski/kolpino_pkio_ski_omaps.gpx',
        ski_kind: 'FICKLE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Зеленогорск, б/о "Прибой", марафон «Двигатель»',
        date: '2025-03-15',
        link: 'https://vk.com/bazapriboyzel',
        info: 'Целиком прокатывается далеко не каждый год. Трассы марафона состоят из кругов 3, 5, 10 км.',
        results: 'https://reg.o-time.ru/race/25055',
        gpx: {
            'марафонский круг':'tracks/ski/zelenogorsk_marathon_17_ski_omaps.gpx',
            'пятёрка':'tracks/ski/zelenogorsk_5_ski_omaps.gpx',
            'десятка':'tracks/ski/zelenogorsk_10_ski_omaps.gpx',
            'пятнашка':'tracks/ski/zelenogorsk_15_ski_omaps.gpx',
        },
        logo: 'priboy.webp',
        pics: ['ski/priboy',2],
        ski_kind: 'SKATE_ROUTE',
        video: {
            'Обзор':'https://www.youtube.com/watch?v=KtCQy1LDGuY',
            '12км':'https://www.youtube.com/watch?v=SYaid9v4_oU',
            'Дальние петли':'https://www.youtube.com/watch?v=cKQ7XQodFzg'
        },
        type: ['SKI']
    },
    {
        name: 'Зеленогорск, прогулочная лыжня',
        logo: 'priboy.webp',
        link: 'https://vk.com/bazapriboyzel',
        info: 'Спокойная трасса с минимумом рельефа.',
        gpx: {
            'к озеру':'tracks/ski/zelenogorsk_walk_ski_omaps.gpx',
            'с петлёй по лесу':'tracks/ski/zelenogorsk_walk_round_ski_omaps.gpx'
        },
        ski_kind: 'SKATE_ROUTE',
        video: 'https://www.youtube.com/watch?v=jvkhUAPIJqY',
        type: ['SKI']
    },
    {
        name: 'Рощино',
        year: 2023,
        link: 'https://vk.com/public210675528',
        info: 'Лыжная трасса Рощино создана и поддерживается жителями Рощино. Подготовка, обслуживание и содержание осуществляется за счет собственных средств и за счет благотворительных средств не безразличных людей.',
        gpx: {
            'Основной':'tracks/ski/roschino_ski_omaps.gpx',
            'С дальней петлёй':'tracks/ski/roshchino_lenoblast_ski_omaps.gpx'
        },
        ski_kind: 'SKATE_ROUTE',
        video: 'https://www.youtube.com/watch?v=nHqDaJpovWo',
        type: ['SKI']
    },
    {
        name: 'Сестрорецк, сквер Пограничников',
        gpx: 'tracks/ski/sestroretsk_pogranichnikov_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Сестрорецк, парк Дубки',
        gpx: 'tracks/ski/sestroretsk_dubki_ski_omaps.gpx',
        pics: ['ski/dubki',1],
        ski_kind: 'WALKWAY',
        video: 'https://www.youtube.com/watch?v=hdThZvgvBGk',
        type: ['SKI']
    },
    {
        name: 'Сертолово',
        link: 'https://vk.com/sport_v_sertolovo',
        info: 'Лыжная трасса с небольшим плавным рельефом по полю. Два круга - большой 1700м и малый 400м.',
        gpx: 'tracks/ski/sertolovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Сестрорецкий пляж',
        info: 'Классика двусторонняя.',
        gpx: 'tracks/ski/sestroretsk_beach_ski_omaps.gpx',
        pics: ['ski/sestroretsk_beach',1],
        type: ['SKI']
    },
    {
        name: 'Кавголово, Виролайнен',
        year: 2024,
        info: 'Возрождённая в 2024 году лыжная трасса рядом с УТЦ на территории ООПТ "Токсовский".',
        gpx: 'tracks/ski/kavgolovo_virolaynen_ski_omaps.gpx',
        logo: 'utc.gif',
        ski_kind: 'FICKLE_ROUTE',
        video: 'https://www.youtube.com/watch?v=CTadOHKRHY0',
        type: ['SKI']
    },
    {
        name: 'Кавголово, УТЦ',
        link: 'https://vk.com/utclesgaft',
        info: 'Учебно тренировочный центр. Самая цивильная спортивная трасса области. В т.ч. круглогодичная крытая лыжная трасса ("труба").',
        gpx: {
            'Основной':'tracks/ski/utc_ski_omaps.gpx',
            'Все петли':'tracks/ski/utts_ski_omaps.gpx'
        },
        sneg: 'utc-kavgolovo',
        logo: 'utc.gif',
        ski_kind: 'SKATE_ROUTE',
        video: 'https://www.youtube.com/watch?v=0HQTPMAkqqQ',
        type: ['SKI']
    },
    {
        name: 'Кавголово, Динамо',
        info: 'Лыжная трасса в ООПТ "Токсовские высоты" со стартом у спорт.базы Динамо.',
        gpx: 'tracks/ski/kavgolovo_dinamo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        pics: ['ski/dinamo',1],
        video: 'https://www.youtube.com/watch?v=8-C5m1z6TX4',
        type: ['SKI']
    },
    {
        name: 'Осельки',
        info: 'Практически абсолютно плоская, часто самотопная, лыжня в окружении красивого леса.',
        gpx: 'tracks/ski/oselki_ski_omaps.gpx',
        ski_kind: 'FICKLE_ROUTE',
        video: 'https://www.youtube.com/watch?v=UWJzXJuRsaE',
        type: ['SKI']
    },
    {
        name: 'Токсово, Toksovo Cup',
        date: '2024-02-03',
        info: 'Классическая трасса Токсовского лыжного марафона. Старт - от базы СКА.',
        link: 'https://vk.com/toksovocup',
        results: 'https://reg.o-time.ru/race/24061',
        gpx: {
            '17km':'tracks/ski/toksovo_cup_17_ski_omaps.gpx',
            '10km':'tracks/ski/toksovo_cup_10_ski_omaps.gpx',
            'Full marathon 50km':'tracks/ski/toksovo_cup_50_ski_omaps.gpx'
        },
        start: 'TOKSOVO_CUP',
        pics: ['ski/ska',5],
        ski_kind: 'SKATE_ROUTE',
        video: {
            '5км':'https://www.youtube.com/watch?v=8fZ2RS6LknM',
            '10км':'https://www.youtube.com/watch?v=QwAiQMg-Cic'
        },
        type: ['SKI']
    },
    {
        name: 'Токсово, ВИФК',
        info: 'Лыжная трасса на территории, принадлежащей МО РФ. Ограниченно доступна.',
        gpx: 'tracks/ski/vifk_ski_omaps.gpx',
        pics: ['ski/vifk',3],
        ski_kind: 'SKATE_ROUTE',
        video: 'https://www.youtube.com/watch?v=Ce1DTxaNGPg',
        type: ['SKI']
    },
    {
        name: 'Токсово, Фирн',
        info: 'Уже несколько лет эта трасса не подготавливается.',
        gpx: 'tracks/ski/toksovo_firn_ski_omaps.gpx',
        video: 'https://www.youtube.com/watch?v=KKcnqXc3Uy0',
        type: ['SKI']
    },
    {
        name: 'Токсовская туристическая лыжня',
        gpx: 'tracks/ski/toksovo_tourist_trail_ski_omaps.gpx',
        info: 'Общая длина - почти 40км.',
        type: ['SKI']
    },
    {
        name: 'По периметру оз Хепоярви',
        gpx: 'tracks/ski/hepojarvi_around_ski_omaps.gpx',
        info: 'Трасса по льду озера как правило раскатана лыжниками под конёк (самотоп), но часто - и снегоходами, втч и под классику.',
        video: 'https://www.youtube.com/watch?v=pABvHqqRELk',
        type: ['SKI']
    },
    {
        name: 'Токсово, Малиновая гора',
        year: 2024,
        info: 'Классическая лыжня, подготавливаемая энтузиастами. Периодически тут проводятся массовые "Лыжные стрелы".',
        link: 'https://vk.com/malingora',
        gpx: 'tracks/ski/toksovo_malinova_gora_ski_omaps.gpx',
        pics: ['ski/malinovaya',1],
        markir: true,
        ski_kind: 'CLASSIC_ROUTE',
        video: {
            'Обзор':'https://www.youtube.com/watch?v=Z2DvkCoSm_s'
        },
        type: ['SKI']
    },
    {
        name: 'Токсово, Малиновая гора, болотная петля',
        info: 'Абсолютно плоская классическая лыжня по болоту, подготавливаемая энтузиастами.',
        link: 'https://vk.com/malingora',
        gpx: 'tracks/ski/toksovo_malinova_gora_swamp_ski_omaps.gpx',
        pics: ['ski/malinovaya',2],
        ski_kind: 'CLASSIC_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Малиновая гора - Осельки',
        info: 'Лесная дорога, соединяющая две известные трассы.',
        link: 'https://vk.com/malingora',
        gpx: 'tracks/ski/toksovo_malinova_gora_oselki_ski_omaps.gpx',
        pics: ['ski/malinovaya',2],
        ski_kind: 'CLASSIC_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Охта-парк, Toksovo Cup',
        date: '2026-01-31',
        results: 'https://reg.o-time.ru/race/26025',
        link: 'https://vk.com/ohtapark',
        gpx: 'tracks/ski/ohtapark_toksovo_cup_10_ski_2026_omaps.gpx',
        markir: true,
        pics: ['ski/ohtapark',7],
        ski_kind: 'SKATE_ROUTE',
        start: 'TOKSOVO_CUP',
        video: 'https://www.youtube.com/watch?v=R9b1doErets',
        type: ['SKI']
    },
    {
        name: 'Охта-парк, Toksovo Cup',
        date: '2025-02-01',
        results: 'https://reg.o-time.ru/race/25033',
        info: 'Ближайший и возможно главный горнолыжный курорт в Санкт-Петербурге. Беговая лыжная трасса хороша и бесплатна, но посещение курорта - платное. Трасса Токсовского лыжного марафона 2025.',
        link: 'https://vk.com/ohtapark',
        gpx: 'tracks/ski/ohtapark_ski_omaps.gpx',
        markir: true,
        logo: 'ohta_park.gif',
        pics: ['ski/ohtapark',7],
        ski_kind: 'SKATE_ROUTE',
        video: 'https://www.youtube.com/watch?v=uBvcEZDCgho',
        type: ['SKI']
    },
    {
        name: 'Лемболово',
        link: 'https://vk.com/trassalembolovo',
        gpx: 'tracks/ski/lembolovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        pics: ['ski/lembolovo',3],
        video: {
            'Обзор':'https://www.youtube.com/watch?v=TRKLaMRDWxA',
            'Гонка':'https://www.youtube.com/watch?v=9Bp4HBZbOaQ'
        },
        type: ['SKI']
    },
    {
        name: 'Орехово, двадцать от станции',
        link: 'https://vk.com/orehovo_ski',
        gpx: 'tracks/ski/orekhovo_20_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Орехово, Лыжные стрелы',
        year: 2025,
        link: 'https://vk.com/orehovo_ski',
        gpx: 'tracks/ski/orekhovo_ski_arrow_2025_omaps.gpx',
        pics: ['ski/orekhovo_arrows',1],
        ski_kind: 'CLASSIC_ROUTE',
        video: 'https://www.youtube.com/watch?v=Kf8aSOlAxMY',
        type: ['SKI']
    },
    {
        name: 'Ореховская Дюжина',
        date: '2026-01-25',
        link: 'https://www.multsport.ru/starts/orehovo-12km26/',
        results: 'https://reg.o-time.ru/race/25061',
        info: '1.3-26км. Основной Ореховский спортивный круг.',
        gpx: {
            '13km 2026':'tracks/ski/orekhovo_12_ski_2026_omaps.gpx',
            '13km 2025':'tracks/ski/orekhovo_12_ski_omaps.gpx',
            '5km':'tracks/ski/orekhovo_5_ski_omaps.gpx'
        },
        markir: true,
        owner: 'MULTSPORT',
        pics: ['ski/orekhovo',1],
        ski_kind: 'SKATE_ROUTE',
        video: {
            '10км':'https://www.youtube.com/watch?v=f9ZH7s9gQYc',
            'Последний километр':'https://www.youtube.com/watch?v=Ejb3Cjr0Wf8'
        },
        type: ['SKI']
    },
    {
        name: 'Орехово, "Авангард"',
        link: 'https://vk.com/orehovo_ski',
        pic: './tracks/orekhovo/ski_1.jpg',
        info: '"Авангард выкупили, идёт стройка. Вопрос там трассы пока под сомнением."',
        gpx: 'tracks/ski/orekhovo_avangard_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Орехово, "ГТО"',
        link: 'https://vk.com/orehovo_ski',
        pic: './tracks/orekhovo/ski_1.jpg',
        info: 'Несложный круг с плавным рельефом.',
        gpx: 'tracks/ski/orekhovo_gto_ski_omaps.gpx',
        markir: true,
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Гарболово, "НАША ТРАССА", GARBOSKI',
        date: '2025-02-16',
        results: 'https://reg.o-time.ru/race/25052',
        info: 'Круги: <ol><li><b>"Семейный"</b> - Идеален для семейных прогулок с детьми, первоначального обучения технике конькового и классического хода. На нем нет опасных спусков и крутых подъемов.</li>' +
            '<li><b>"Любитель"</b> - Есть срезки на каждом километре дистанции. Присутствуют подъемы и спуски с перепадом до 15м. Катание на этому кругу требует уверенного владения лыжами.</li>' +
            '<li><b>"Мастер"</b> - По-настоящему спортивный круг, протяженностью 7 км, бросающий вызов силе, выносливости, характеру и умению спортсмена.</li>' +
            '<li><b>"Турист"</b> - Включает круги "Семейный", "Любитель", частично "Мастер" и 6-км дополнительную туристическую петлю, которая периодически готовится под коньковый и классический ход.</li></ol>',
        link: 'https://vk.com/sport_v_garbolovo',
        gpx: {
            'Турист, 12км':'tracks/ski/garbolovo_tourist_ski_omaps.gpx',
            'Мастер, 7км':'tracks/ski/garbolovo_master_ski_omaps.gpx',
            'Любитель, 6км':'tracks/ski/garbolovo_ljubitel_ski_omaps.gpx',
            'Семейный, 3.5км':'tracks/ski/garbolovo_family_ski_omaps.gpx',
        },
        markir: true,
        logo: 'garbolovo_ski.webp',
        pics: ['ski/garbolovo',4],
        ski_kind: 'SKATE_ROUTE',
        video: {
            'Мастер':'https://www.youtube.com/watch?v=f7tIDvKjvbI',
            'Любитель':'https://www.youtube.com/watch?v=1xHqOmx-ZLM',
            'Семейный':'https://www.youtube.com/watch?v=Ew_GK79QCF8',
            'Турист':'https://www.youtube.com/watch?v=VTO8QTDJqHM',
        },
        type: ['SKI']
    },
    {
        name: 'Павлово',
        info: 'Очень симпатичный лыжный круг с хорошим рельефом.',
        gpx: 'tracks/ski/pavlovo_ski_omaps.gpx',
        pics: ['ski/pavlovo',2],
        ski_kind: 'SKATE_ROUTE',
        video: 'https://www.youtube.com/watch?v=_aktLV4niN8',
        type: ['SKI']
    },
    {
        name: 'Парголово',
        year: 2026,
        info: 'Единственная в черте города лыжная трасса с более-менее серьёзным рельефом.',
        link: 'https://vk.com/skipargolovo',
        gpx: 'tracks/ski/pargolovo_ski_2026_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        video: {
            'Семейно':'https://www.youtube.com/watch?v=FVlsml5bspI',
            'Спортивно':'https://www.youtube.com/watch?v=WSbzjFLfQ6g'
        },
        type: ['SKI']
    },
    {
        name: 'Красное озеро',
        link: 'https://krasnoeozero.ru/',
        gpx: 'tracks/ski/red_lake_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Игора-Драйв',
        date: '2025-01-19',
        link: 'https://drive-igora.ru/events/lyzhnaya-gonka-igora-drayv/',
        results: 'https://reg.o-time.ru/race/25069',
        gpx: {
            '10км':'tracks/ski/igora_ski_10km_omaps.gpx',
            '5км':'tracks/ski/igora_ski_omaps.gpx'
        },
        logo: 'igora.webp',
        pics: ['ski/igora',1],
        ski_kind: 'SKATE_ROUTE',
        video: 'https://www.youtube.com/watch?v=J0zGivAlQRU',
        type: ['SKI']
    },
    {
        name: 'Воронино',
        gpx: 'tracks/ski/voronino_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Всеволожск, Румболовский парк',
        gpx: 'tracks/ski/rumbolovo_ski_omaps.gpx',
        pics: ['ski/rumbolovo',1],
        ski_kind: 'FICKLE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Выборгский лыжный марафон',
        date: '2025-02-22',
        link: 'https://vk.com/vyborgmarathon',
        results: 'https://reg.o-time.ru/race/25053',
        info: 'Гонка прошла по кругу 5 км. 1-30км.',
        gpx: 'tracks/ski/vyborg_ski_omaps.gpx',
        markir: true,
        logo: 'vyborg.webp',
        pics: ['ski/vyborg',1],
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Туутари',
        info: 'Довольно плоская и ветренная лыжная трасса, раскатанная под конёк.',
        link: 'https://www.tyytari.ru/holidays/photos/42/',
        gpx: 'tracks/ski/tuutari_ski_omaps.gpx',
        ski_kind: 'FICKLE_ROUTE',
        video: 'https://www.youtube.com/watch?v=QU2NA4MgV2U',
        type: ['SKI']
    },
    {
        name: 'Дудергоф, Можайская',
        info: 'Отличная гора практически в черте города!',
        link: 'https://vk.com/svdudergof',
        gpx: 'tracks/ski/mozhaika_dudergof_ski_omaps.gpx',
        pics: ['ski/mozhaika',3],
        ski_kind: 'SKATE_ROUTE',
        video: 'https://www.youtube.com/watch?v=5_JF6VXnPgE',
        type: ['SKI']
    },
    {
        name: 'Дудергофские медведи',
        date: '2024-03-02',
        info: 'Практически плоская лыжная трасса по полям.',
        link: 'https://vk.com/dudergof_bear',
        results: 'https://reg.o-time.ru/race/24298',
        gpx: 'tracks/ski/dudergof_bears_ski_omaps.gpx',
        logo: 'dudergof_bear.gif',
        ski_kind: 'SKATE_ROUTE',
        video: 'https://www.youtube.com/watch?v=sBNpO92xhuw',
        type: ['SKI']
    },
    {
        name: 'Ржевский л/п',
        link: 'https://vk.com/sport_krgv1',
        info: 'Самотопный "конёк" и лыжня сбоку от дороги.',
        gpx: 'tracks/ski/rzhevsky_ski_omaps.gpx',
        ski_kind: 'WALKWAY',
        video: 'https://www.youtube.com/watch?v=00mPxt5hV7w',
        type: ['SKI']
    },
    {
        name: 'Невский л/п, Богословка',
        info: 'Прокатывается нерегулярно.',
        gpx: 'tracks/ski/bogoslovka_ski_omaps.gpx',
        pics: ['ski/bogoslovka',1],
        ski_kind: 'FICKLE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Киришский лыжный марафон',
        date: '2023-02-19',
        link: 'https://vk.com/kirishi_ski_marathon',
        results: 'https://vk.com/wall-114713337_333',
        info: '20-50км.',
        gpx: 'tracks/ski/kirishi_ski_omaps.gpx',
        logo: 'kirishi_ski.webp',
        video: 'https://www.youtube.com/watch?v=SdOe-Iy5hOo',
        type: ['SKI']
    },
    {
        name: 'Кириши',
        link: 'https://vk.com/ori_ki',
        gpx: 'tracks/ski/kirishi_east_ski_omaps.gpx',
        logo: 'oriki.gif',
        type: ['SKI']
    },
    {
        name: 'Кировск',
        link: 'https://vk.com/club85930070',
        gpx: 'tracks/ski/kirovsk_lenoblast_ski_omaps.gpx',
        video: 'https://www.youtube.com/watch?v=FyM7SZGr2bc',
        type: ['SKI']
    },
    {
        name: 'Гатчинский лыжный марафон',
        date: '2024-03-08',
        results: 'https://reg.o-time.ru/race/24254',
        gpx: {
            '2026г':'tracks/ski/gatchina_ski_2026_omaps.gpx',
            '5км':'tracks/ski/gatchina_ski_2026_5k_omaps.gpx',
            '2024г':'tracks/ski/gatchina_ski_omaps.gpx'
        },
        logo: 'gatchina.gif',
        ski_kind: 'FICKLE_ROUTE',
        video: 'https://www.youtube.com/watch?v=qnsl_rzihKA',
        type: ['SKI']
    },
    {
        name: 'Кингисепп',
        gpx: 'tracks/ski/kingisepp_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Сиверский',
        gpx: 'tracks/ski/siversky_ski_omaps.gpx',
        ski_kind: 'FURROW',
        type: ['SKI']
    },
    {
        name: 'Сиверский, р Оредеж',
        gpx: 'tracks/ski/siversky_oredezh_ski_omaps.gpx',
        ski_kind: 'FURROW',
        type: ['SKI']
    },
    {
        name: 'Луга, Зелёный Бор',
        gpx: 'tracks/ski/luga_zelbor_omaps.gpx',
        ski_kind: 'FURROW',
        type: ['SKI']
    },
    {
        name: 'Луга, б/о Штоль',
        gpx: 'tracks/ski/luga_shtol_omaps.gpx',
        info: 'Асфальтовая лыжероллерная дорожка.',
        owner: 'LUGA_RUN_SKI',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Луга, Розановский круг',
        gpx: 'tracks/ski/luga_rozanovsky_omaps.gpx',
        owner: 'LUGA_RUN_SKI',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Петергоф, парк Александрия',
        info: 'Планируется проведение лыжных гонок для спортсменов отделения лыжного спорта СШОР «Пламя».',
        gpx: 'tracks/ski/petergof_aleksandria_1_ski_omaps.gpx',
        link: 'https://www.fontanka.ru/2026/02/03/76247143/',
        ski_kind: 'FICKLE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Петергоф, парк Александрия',
        info: 'Планируется проведение лыжных гонок для спортсменов отделения лыжного спорта СШОР «Пламя».',
        gpx: 'tracks/ski/petergof_aleksandria_2_ski_omaps.gpx',
        link: 'https://www.fontanka.ru/2026/02/03/76247143/',
        ski_kind: 'FICKLE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Ломоносов, Верхние Венки',
        info: 'Холмистую трассу готовит на энтузиазме бывший учитель физкультуры.',
        gpx: 'tracks/ski/lomonosov_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Ломоносов, стд Спартак',
        gpx: 'tracks/ski/lomonosov_spartak_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Ломоносов, гольф-клуб "Strawberry Fields"',
        link: 'https://vk.com/sfgolfclub',
        info: 'Трасса мягкая, готовят бороной, подъёмов нет, душ, раздевалка, парковка. Платно.',
        gpx: 'tracks/ski/lomonosov_strawberry_fields_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        video: 'https://www.youtube.com/watch?v=5DG0-Ghbank',
        type: ['SKI']
    },
    {
        name: 'Пески, лыжероллерная трасса Ярви',
        link: 'https://jarviresort.ru/',
        gpx: {
            'Все лыжни':'tracks/ski/peski_jarvi_total_omaps.gpx',
            'Лыжероллерка':'tracks/ski/peski_jarvi_omaps.gpx'
        },
        info: 'Трасса слабо холмистая, освещённая, виражи с необходимым уклоном, а на поворотах натянута яркая защитная сетка. Ширина 3-4 метра.',
        logo: 'jarvi.gif',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Сиркоярви оз',
        gpx: 'tracks/ski/sirkojarvi_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Сосновый Бор, Приморский парк',
        gpx: 'tracks/ski/sosnovy_bor_primorsky_park_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Сосновый Бор, Малахит',
        link: 'https://vk.com/club.sb_biathlon',
        gpx: 'tracks/ski/sosnovy_bor_malakhit_omaps.gpx',
        pics: ['ski/malakhit',1],
        type: ['SKI']
    },
    {
        name: 'Тихвинский лыжный марафон',
        date: '2024-01-28',
        info: '20 и 50 км.',
        link: 'https://vk.com/club199236798',
        results: 'https://vk.com/wall-199236798_1340',
        gpx: 'tracks/ski/tikhvin_omaps.gpx',
        video: 'https://www.youtube.com/watch?v=XTrHbv-BGz0',
        logo: 'tikhvin.gif',
        type: ['SKI']
    },
    {
        name: 'Тихвин, Фишева гора',
        gpx: 'tracks/ski/tikhvin_fisheva_omaps.gpx',
        logo: 'tikhvin.gif',
        type: ['SKI']
    },
    {
        name: 'Шапки',
        link: 'https://vk.com/ski_shapki',
        info: 'Коньковый круг от лыжной базы.',
        gpx: 'tracks/ski/shapki_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Шапки, Лыжные стрелы 2025/2026',
        link: 'https://vk.com/wall-210604144_10259',
        info: 'Работают лыжные дистанции 5 и 10 км на запасной трассе (проход к старту в 500 метрах от ж/д станции в сторону базы отдыха Пикник).',
        gpx: 'tracks/ski/shapki_ski_arrows_2025_omaps.gpx',
        pics: ['ski/shapki_arrows',1],
        ski_kind: 'CLASSIC_ROUTE',
        video: 'https://www.youtube.com/watch?v=6yvlyBnY_zs',
        type: ['SKI']
    },
    {
        name: 'Приозерск',
        info: 'Приозерская городская лыжня. Широкая ровная трасса с одной небольшой горкой.',
        gpx: 'tracks/ski/priozersk_lenoblast_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Волхов',
        info: 'Неплохая для небольшого городка лыжная трасса при лыжной базе "Двугорье". Есть прокат, раздевалка и магазин.',
        gpx: 'tracks/ski/volhov_dvugorie_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Сясьстрой',
        gpx: 'tracks/ski/syasstroy_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Лодейное Поле',
        gpx: 'tracks/ski/lodeynoe_pole_ski_omaps.gpx',
        info: 'Проводятся тренировки местной спортшколы. Максимальный круг 5 км. Рельефная. Широкая. Есть прокат. Телефон лыжной базы: +7 (81364) 2-64-63.',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Петрозаводск, Курган',
        gpx: 'tracks/ski/ptz_kurgan_ski_omaps.gpx',
        info: 'Лыжный центр им Терентьева.',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI'],
        video: 'https://www.youtube.com/watch?v=A70mYW2GTr4',
        owner: 'KARELIA_SKI'
    },
    {
        name: 'Петрозаводск, Фонтаны',
        gpx: 'tracks/ski/ptz_fontany_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI'],
        video: 'https://www.youtube.com/watch?v=mLBHp5Zt2Co',
        owner: 'KARELIA_SKI'
    },
    {
        name: 'Юнтолово',
        gpx: 'tracks/ski/juntolovo_omaps.gpx',
        ski_kind: 'FURROW',
        type: ['SKI']
    },
    {
        name: 'Силанде',
        gpx: 'tracks/ski/silande_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },

    {
        name: 'Смоленск, Биатлонный комплекс ЧАЙКА',
        gpx: 'tracks/ski/smolensk_chaika_omaps.gpx',
        link: 'http://www.fbso.su/trenirovochnaya-baza/',
        info: 'Центр биатлона и лыжного спорта имеет полный набор трасс – от разминочных кругов, до кругов протяженностью 2,5 и 4 км. Этот единственный в Смоленской области ' +
              'комплекс со стрельбищем — огневой рубеж составляет 90 метров. Финишный слой асфальта на трассах той же «рецептуры», что был уложен на олимпийских объектах в Сочи. ' +
              'Биатлонный центр имеет развитую инфраструктуру: хозяйственные постройки, зрительские трибуны, вакс-кабины, корпус судей, раздевалки, тренерскую зону.',
        logo: 'smolensk_chaika.gif',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    // --- ИЗВЕСТНЫЕ ЛЫЖНЫЕ ТРАССЫ РОССИИ И МИРА ---
    {
        name: 'ГАБОвская народная лыжня',
        sneg: 'gabo',
        region: 'MSK',
        link: 'https://gabo.su/shemyi-lyizhnoy-trassyi',
        source: 'https://www.stremglav.fun/tracks/gabo',
        info: 'Лыжный центр в Дмитровском округе Московской области. Несколько трасс разной протяжённости и сложности. Самый длинный круг — «Марафонец».',
        gpx: {
            'Марафонец (26 км)':'tracks/ski/gabo_marathon_omaps.gpx',
            'Турист (21 км)':'tracks/ski/gabo_tourist_omaps.gpx',
            'Мастер (12 км)':'tracks/ski/gabo_master_omaps.gpx',
            'Любитель (5 км)':'tracks/ski/gabo_lyubitel_omaps.gpx',
            'Чайник (3 км)':'tracks/ski/gabo_chaunik_omaps.gpx',
            'Пол-Туриста (8 км)':'tracks/ski/gabo_polturista_ski_omaps.gpx',
            'Некрасовская (14,5 км)':'tracks/ski/gabo_nekrasovskaya_ski_omaps.gpx',
            'Освещёнка (2 км)':'tracks/ski/gabo_osveshchenka_ski_omaps.gpx',
        },
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Дёмино, лыжный центр',
        length: 50,
        region: 'YAROSLAVL',
        link: 'https://www.russialoppet.ru/events/demino2025.html',
        info: 'Лыжный центр в Рыбинском районе Ярославской области. Марафонский круг.',
        gpx: 'tracks/ski/demino_50_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Ramsau am Dachstein',
        region: 'AUSTRIA',
        link: 'https://www.steiermark.com/en/Schladming-Dachstein/Vacation-planning/Touring-portal/',
        info: 'Лыжный центр в Австрии. Стадионная трасса и два маршрута региона.',
        gpx: {
            'Standardloipe Ost (10,5 км)':'tracks/ski/ramsau_standard_east_omaps.gpx',
            'Stadionloipe (9,2 км)':'tracks/ski/ramsau_stadium_omaps.gpx',
            'Rössingloipe (7,4 км)':'tracks/ski/ramsau_roessing_omaps.gpx'
        },
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Seefeld, лыжный регион',
        region: 'AUSTRIA',
        link: 'https://www.seefeld.com/en/',
        info: 'Лыжный регион в Тироле, Австрия.',
        gpx: {
            'Katzenkopf Circuit (20,5 км)':'tracks/ski/seefeld_katzenkopf_omaps.gpx',
            'Wildmoos Circuit (17,1 км)':'tracks/ski/seefeld_wildmoos_omaps.gpx'
        },
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Goms, Ulrichen',
        length: 4,
        region: 'SWITZERLAND',
        link: 'https://www.bergfex.com/sommer/oberwallis/touren/langlauf/24713398,fis-rennloipe-ulrichen-nz/',
        info: 'Соревновательная трасса FIS в Ульрихене, долина Гомс, Швейцария.',
        gpx: 'tracks/ski/goms_fis_race_trail_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Барвиха',
        length: 5,
        source: 'https://www.stremglav.fun/tracks',
        link: 'https://skicup.ru/',
        region: 'MSK',
        gpx: 'tracks/ski/barvikha_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Красногорск',
        length: 22.4,
        link: 'https://masouzorky.ru/lizhn',
        source: 'https://www.stremglav.fun/tracks/krasnogorsk',
        region: 'MSK',
        info: 'Длинный лыжный маршрут в Красногорске.',
        gpx: {
            'Полный':'tracks/ski/krasnogorsk_22km_omaps.gpx',
            'FIS':'tracks/ski/krasnogorsk_fis_ski_omaps.gpx'
        },
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Планерная',
        length: 4,
        sneg: 'planernaya',
        source: 'https://www.stremglav.fun/tracks',
        link: 'https://skimsu.ru/planernaya',
        region: 'MSK',
        info: 'Лыжная трасса в районе ОУСЦ «Планерная».',
        gpx: 'tracks/ski/planernaya_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'ЦСП Измайлово',
        length: 5.7,
        link: 'https://лк-измайлово.рф/trassi/',
        source: 'https://www.stremglav.fun/tracks',
        region: 'MSK',
        info: 'Лыжная трасса ЦСП «Измайлово».',
        gpx: 'tracks/ski/izmailovo_csp_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Истра, Соколиная гора',
        length: 3.7,
        source: 'https://www.stremglav.fun/tracks',
        link: 'https://visitistra.ru/ЗИМА-В-ИСТРЕ/',
        region: 'MSK',
        info: 'Лыжная трасса «Соколиная гора».',
        gpx: 'tracks/ski/istra_sokolinaya_gora_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },

    {
        name: 'Альфа-Битца',
        length: 19,
        region: 'MSK',
        source: 'https://www.stremglav.fun/tracks',
        link: 'https://bitza-sport.ru/',
        info: 'Лыжный центр в Битце.',
        gpx: 'tracks/ski/alfa_bitsa_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Измайлово, «Авангард»',
        length: 8.3,
        sneg: 'izmailovo',
        region: 'MSK',
        link: 'https://www.stadionavangard.ru/ski-map',
        source: 'https://www.stremglav.fun/tracks',
        info: 'Лыжная трасса спортивного комплекса «Авангард» в Измайлово.',
        gpx: 'tracks/ski/avangard_izmailovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Борисово',
        length: 7.4,
        region: 'MSK',
        source: 'https://www.stremglav.fun/tracks',
        gpx: 'tracks/ski/borisovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Бутово',
        length: 12.4,
        region: 'MSK',
        source: 'https://www.stremglav.fun/tracks',
        link: 'https://polyanybutovo.ru/',
        gpx: 'tracks/ski/butovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Подольск, Дубровицы',
        length: 5,
        region: 'MSK',
        source: 'https://www.stremglav.fun/tracks',
        link: 'https://skipodolsk.ru/track',
        gpx: 'tracks/ski/dubrovitsy_podolsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'ГТОК «Снегири»',
        length: 10.5,
        sneg: 'snegiri',
        region: 'MSK',
        link: 'https://гтоклуб.рф/trassy',
        source: 'https://www.stremglav.fun/tracks',
        info: 'Лыжная трасса ГТО-клуба «Снегири».',
        gpx: 'tracks/ski/gto_snegiri_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Касарка, Переславский район',
        length: 10,
        region: 'YAROSLAVL',
        link: 'https://admpereslavl.ru/sportsmeny-na-start',
        source: 'https://www.stremglav.fun/tracks',
        info: 'Лыжная трасса в районе посёлка Залесский.',
        gpx: 'tracks/ski/kasarka_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Кашира, ДС «Юбилейный»',
        length: 5.4,
        region: 'MSK',
        link: 'https://sk-kashira.ru/objects/362-mau-sportklub-kashira-imeni-npeliseeva-ds-jubilejnyj.html',
        source: 'https://www.stremglav.fun/tracks',
        info: 'Лыжная трасса спортивного комплекса «Юбилейный».',
        gpx: 'tracks/ski/kashira_yubileyny_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Кирики-Улита',
        region: 'VOLOGDA',
        source: 'https://www.stremglav.fun/tracks',
        link: 'https://vologdamarafon.ru/marafon/покровский-классический-марафон/',
        gpx: {
            'Марафон (12км)':'tracks/ski/kiriki_ulity_ski_omaps.gpx',
            '2025':'tracks/ski/kiriki_ulita_2025_final_ski_omaps.gpx'
        },
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Комёла',
        length: 12.8,
        region: 'VOLOGDA',
        link: 'https://travel-vologda.ru/napravleniya/vologodskaya-oblast/za-vpechatleniyami/czentr-sporta-i-otdyixa-komela',
        source: 'https://www.stremglav.fun/tracks',
        gpx: 'tracks/ski/komela_vologda_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Троицк, ГСОБ «Лесная»',
        length: 9.7,
        region: 'MSK',
        source: 'https://www.stremglav.fun/tracks',
        info: 'Лыжная трасса спортивной базы «Лесная».',
        gpx: 'tracks/ski/lesnaya_troitsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Вологда, «Локомотив»',
        length: 7.4,
        region: 'VOLOGDA',
        source: 'https://www.stremglav.fun/tracks',
        info: 'Лыжная трасса спортивного комплекса «Локомотив».',
        gpx: 'tracks/ski/lokomotiv_vologda_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Нижнецарицынская',
        length: 7,
        region: 'MSK',
        source: 'https://www.stremglav.fun/tracks',
        gpx: 'tracks/ski/nizhne_tsaritsynskaya_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Нововоронино',
        length: 13.5,
        sneg: 'novovoronino',
        region: 'MSK',
        source: 'https://www.stremglav.fun/tracks',
        gpx: 'tracks/ski/novovoronino_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Ромашково',
        region: 'MSK',
        source: 'https://www.stremglav.fun/tracks/romashkovo',
        link: 'https://www.sk-romashkovo.ru/trace/',
        info: 'Известный лыжный центр в Ромашковском лесу. В GPX собраны несколько стандартных дистанций и участков трассы.',
        gpx: 'tracks/ski/romashkovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Щёлково, «Десятка»',
        length: 5,
        region: 'MSK',
        source: 'https://www.stremglav.fun/tracks',
        info: 'Лыжная трасса «Щёлковская Десятка».',
        gpx: 'tracks/ski/shchelkovo_desyatka_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Слюдорудник',
        length: 6.8,
        region: 'CHELYABINSK',
        source: 'https://www.stremglav.fun/tracks',
        gpx: 'tracks/ski/slyudorudnik_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Ступино, Соколиная Пустынь',
        length: 3,
        region: 'MSK',
        link: 'https://m.mosoblles.ru/press-center/current_news/?id=10360',
        source: 'https://www.stremglav.fun/tracks',
        gpx: 'tracks/ski/sokolinaya_pustyn_stupno_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Дмитров, ЦЗВС',
        length: 12,
        region: 'MSK',
        link: 'https://www.dmitrov.ru/',
        source: 'https://www.stremglav.fun/tracks',
        info: 'Лыжная трасса Центра зимних видов спорта в Дмитрове.',
        gpx: {
            '1':'tracks/ski/tszvs_dmitrov_ski_omaps.gpx',
            '2':'tracks/ski/tszvs_dmitrov_2024_ski_omaps.gpx'
        },
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Климовск, Весенняя',
        length: 5.8,
        region: 'MSK',
        source: 'https://www.stremglav.fun/tracks',
        info: 'Лыжная трасса в районе станции Весенняя в Климовске.',
        gpx: 'tracks/ski/vesennyaya_klimovsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Вороново',
        length: 10.4,
        region: 'MSK',
        link: 'https://gto.sport.mos.ru/',
        source: 'https://www.stremglav.fun/tracks',
        gpx: 'tracks/ski/voronovo_mo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Апатиты, Атлет',
        region: 'MURMANSK',
        link: 'https://fskatlet51.ru/ly-zhny-e-trassy/shema-ly-zhny-h-trass/',
        source: 'stremglav',
        sneg: 'apatity',
        info: 'Лыжные трассы ФСК «Атлет» в Апатитах.',
        gpx: 'tracks/ski/apatity_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Тирвас',
        region: 'MURMANSK',
        source: 'stremglav',
        sneg: 'tirvas',
        info: 'Лыжные трассы спортивного комплекса «Тирвас» в Хибинах.',
        gpx: 'tracks/ski/tirvas_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Малиновка',
        region: 'ARKHANGELSK',
        source: 'stremglav',
        sneg: 'malinovka',
        info: 'Лыжный центр в Архангельской области.',
        gpx: 'tracks/ski/malinovka_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Алдан, ЦЗВС',
        region: 'SAKHA',
        source: 'stremglav',
        sneg: 'aldan',
        info: 'Лыжные трассы центра зимних видов спорта в Алдане.',
        gpx: 'tracks/ski/aldan_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Ханты-Мансийск, ЛБК',
        region: 'KHMAO',
        link: 'https://ugramegasport.ru/',
        source: 'stremglav',
        sneg: 'hanty',
        info: 'Лыжно-биатлонный комплекс имени А.В. Филипенко.',
        gpx: 'tracks/ski/hanty_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Долина Уюта',
        region: 'MURMANSK',
        source: 'stremglav',
        sneg: 'dolina-uyuta',
        info: 'Лыжные трассы стадиона «Долина Уюта» в Мурманске.',
        gpx: 'tracks/ski/dolina_uyuta_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Раубичи',
        region: 'BELARUS',
        source: 'stremglav',
        sneg: 'raubici',
        info: 'Лыжные трассы Республиканского центра олимпийской подготовки по зимним видам спорта «Раубичи».',
        gpx: 'tracks/ski/raubici_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Манжерок',
        region: 'ALTAI',
        source: 'stremglav',
        sneg: 'manjerok',
        gpx: 'tracks/ski/manjerok_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Семинский перевал, УТЦ',
        region: 'ALTAI',
        link: 'https://vk.com/seminskiy_utc_altay',
        source: 'stremglav',
        sneg: 'seminski',
        gpx: 'tracks/ski/seminski_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Шижма',
        region: 'KIROV',
        source: 'stremglav',
        sneg: 'shijma',
        gpx: 'tracks/ski/shijma_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Сыктывкар, РЛК им Раисы Сметаниной',
        region: 'KOMI',
        source: 'stremglav',
        sneg: 'syktyvkar-smetaninoi',
        info: 'Трассы Республиканского лыжного комплекса имени Раисы Сметаниной в Выльгорте.',
        gpx: 'tracks/ski/syktyvkar_smetaninoi_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Сыктывкар, «Динамо»',
        region: 'KOMI',
        source: 'stremglav',
        sneg: 'syktyvkar-dinamo',
        info: 'Лыжные трассы базы «Динамо» в Сыктывкаре.',
        gpx: 'tracks/ski/syktyvkar_dinamo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Лебяжьи озёра, Казань',
        length: 5,
        region: 'TATARSTAN',
        source: 'stremglav',
        sneg: 'lebiajyi',
        info: 'Лыжная трасса на Лебяжьих озёрах в Казани.',
        gpx: 'tracks/ski/lebiajyi_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Подолино',
        length: 9.2,
        region: 'YAROSLAVL',
        source: 'stremglav',
        sneg: 'podolino',
        info: 'Лыжные трассы спортивного комплекса «Подолино» под Ярославлем.',
        gpx: 'tracks/ski/podolino_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Алмаз',
        length: 23,
        region: 'RYAZAN',
        source: 'stremglav',
        sneg: 'almaz',
        info: 'Лыжные трассы биатлонного комплекса «Алмаз» под Рязанью.',
        gpx: 'tracks/ski/almaz_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Алика Тульского',
        length: 56,
        region: 'NSK',
        source: 'stremglav',
        sneg: 'atulskogo',
        info: 'Сеть лыжных трасс базы имени Алика Тульского в Новосибирске.',
        gpx: 'tracks/ski/atulskogo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Локомотив',
        length: 7,
        region: 'NSK',
        source: 'stremglav',
        sneg: 'lokomotiv-nsk',
        info: 'Лыжные трассы базы «Локомотив» в Новосибирске.',
        gpx: 'tracks/ski/lokomotiv_nsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Бугринская роща',
        length: 8,
        region: 'NSK',
        source: 'stremglav',
        sneg: 'bugrinskaya',
        info: 'Лыжные трассы Бугринской рощи в Новосибирске.',
        gpx: 'tracks/ski/bugrinskaya_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Биатлонный комплекс',
        length: 10.5,
        region: 'NSK',
        source: 'stremglav',
        sneg: 'biatlonka-nsk',
        info: 'Лыжные трассы Новосибирского биатлонного комплекса.',
        gpx: 'tracks/ski/biatlonka_nsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Академгородок',
        region: 'IRKUTSK',
        source: 'stremglav',
        sneg: 'akadem-irkutsk',
        info: 'Лыжные трассы Академгородка Иркутского государственного университета. Есть классический и коньковый ход, освещение.',
        gpx: 'tracks/ski/akadem_irkutsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Динамо',
        region: 'IRKUTSK',
        source: 'stremglav',
        sneg: 'dinamo-irkutsk',
        info: 'Лыжная база «Динамо» в Иркутске. Подготавливаются трассы для конькового и классического хода, есть освещение и прокат.',
        gpx: 'tracks/ski/dinamo_irkutsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Вершина Тёи',
        length: 21,
        region: 'KHAKASSIA',
        link: 'https://xn--19-mlc5c8c.xn--p1ai/',
        source: 'stremglav',
        sneg: 'vershinatei',
        info: 'Комплекс лыжных трасс в Хакасии, сертифицированных FIS.',
        gpx: 'tracks/ski/vershina_tey_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'СпортГрад',
        length: 2,
        region: 'KEMEROVO',
        source: 'stremglav',
        sneg: 'sportgrad-kemerovo',
        info: 'Лыжная трасса спортивного комплекса «СпортГрад» в районе Лесной Поляны.',
        gpx: 'tracks/ski/sportgrad_kemerovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Мемориальный парк',
        length: 5,
        region: 'RYAZAN',
        link: 'https://sportryazan.ru/news/2023-12-11_mesta-funkcioniruyushhih-stacionarnyh-hokkejnyh-korobok-ledovyh-ploshhadok-i-lyzhnyh-trass-na-territorii-goroda-ryazani.html',
        source: 'stremglav',
        sneg: 'memorial-ryazan',
        info: 'Освещённая лыжная трасса в Мемориальном парке Рязани.',
        gpx: 'tracks/ski/memorial_ryazan_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Губаха',
        length: 7.3,
        region: 'PERM',
        link: 'https://лыжнаябаза.рф/lyzhnye-trassy',
        source: 'stremglav',
        sneg: 'gubahalb',
        info: 'Лыжная база в Губахе. Подготовленные круги различной протяжённости.',
        gpx: 'tracks/ski/gubakha_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Динамо',
        length: 7.7,
        region: 'EKB',
        link: 'https://dinamo-ural.ru/',
        source: 'stremglav',
        sneg: 'dinamo-eburg',
        info: 'Лыжно-биатлонная база «Динамо» в Екатеринбурге.',
        gpx: 'tracks/ski/dinamo_ekaterinburg_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Искра, Ижевск',
        length: 13.5,
        region: 'UDMURTIA',
        link: 'https://vk.com/sbiskra',
        source: 'stremglav',
        sneg: 'iskrizhevsk',
        info: 'Лыжная база «Искра» в Ижевске. Несколько подготовленных кругов.',
        gpx: 'tracks/ski/iskra_izhevsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Moscow Raceway, Шелудьково',
        region: 'MSK',
        link: 'https://moscowraceway.ru/',
        source: 'stremglav',
        sneg: 'mraceway',
        info: 'Лыжная трасса на территории автодрома.',
        gpx: 'tracks/ski/moscow_raceway_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Рижская ж/д — Октябрьская ж/д',
        region: 'MSK',
        source: 'stremglav',
        sneg: 'rijskaya-oktiabrskaya',
        info: 'Сеть стихийных лыжных маршрутов в лесах между Рижской и Октябрьской железными дорогами. Включает направления Радищево — Снегири, Малино — Аникеевка и Митино — пл. 50 км.',
        gpx: 'tracks/ski/rizhskaya_oktyabrskaya_ski_omaps.gpx',
        ski_kind: 'FURROW',
        type: ['SKI']
    },
    {
        name: 'Савеловская ж/д — Ярославская ж/д',
        length: 136,
        region: 'MSK',
        source: 'stremglav',
        info: 'Длинный лыжный маршрут между Савеловским и Ярославским железнодорожными направлениями.',
        gpx: 'tracks/ski/savelovskaya_yaroslavskaya_ski_omaps.gpx',
        ski_kind: 'FURROW',
        type: ['SKI']
    },
    {
        name: 'Октябрьская ж/д — Савеловская ж/д',
        length: 76,
        region: 'MSK',
        source: 'stremglav',
        info: 'Длинный лыжный маршрут между Октябрьским и Савеловским железнодорожными направлениями.',
        gpx: 'tracks/ski/oktyabrskaya_savelovskaya_ski_omaps.gpx',
        ski_kind: 'FURROW',
        type: ['SKI']
    },
    {
        name: 'Ярославская ж/д — Горьковская ж/д',
        length: 127,
        region: 'MSK',
        source: 'stremglav',
        info: 'Длинный лыжный маршрут между Ярославским и Горьковским железнодорожными направлениями.',
        gpx: 'tracks/ski/yaroslavskaya_gorkovskaya_ski_omaps.gpx',
        ski_kind: 'FURROW',
        type: ['SKI']
    },
    {
        name: 'Барнаул, ЛБК',
        length: 8.4,
        region: 'ALTAI',
        link: 'https://altai-uor.ru/',
        source: 'stremglav',
        sneg: 'barnaul-lbk',
        info: 'Лыжно-биатлонный комплекс Алтайского училища олимпийского резерва. Подготовлены круги 2,3 и 5 км.',
        gpx: 'tracks/ski/barnaul_lbk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Уфа, Трамплин',
        length: 5,
        region: 'BASH',
        source: 'stremglav',
        sneg: 'tramplin-ufa',
        info: 'Лыжная трасса СШОР №33 по лыжному двоеборью и спортшколы №5 в Уфе. Есть классическая лыжня, освещение и участки с выраженным рельефом.',
        gpx: 'tracks/ski/tramplin_ufa_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'BESTSKI',
        length: 2.7,
        region: 'KEMEROVO',
        source: 'stremglav',
        info: 'Лыжный клуб А. Бессмертных в Серебряном бору.',
        gpx: 'tracks/ski/bestski_kemerovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Берёзовский, Кемерово',
        length: 8.4,
        region: 'KEMEROVO',
        source: 'stremglav',
        info: 'Лыжная база имени А. Бессмертных в Берёзовском.',
        gpx: 'tracks/ski/berezovsky_kemerovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Бор',
        length: 12,
        region: 'KEMEROVO',
        source: 'stremglav',
        info: 'Лыжная база «Бор» в Рудничном бору.',
        gpx: 'tracks/ski/bor_kemerovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        sneg: 'borkemerovo',
        type: ['SKI']
    },
    {
        name: 'Кузбасский парк',
        length: 3.5,
        region: 'KEMEROVO',
        source: 'stremglav',
        gpx: 'tracks/ski/kuzbass_park_kemerovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        sneg: 'kuzbasskipark',
        type: ['SKI']
    },
    {
        name: 'Локомотив',
        length: 18,
        region: 'KEMEROVO',
        source: 'stremglav',
        info: 'Физкультурно-спортивный клуб по лыжным гонкам и биатлону «Локомотив».',
        gpx: 'tracks/ski/lokomotiv_kemerovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        sneg: 'lokokemerovo',
        type: ['SKI']
    },
    {
        name: 'ЛБ Янтарь',
        length: 11,
        region: 'TOMSK',
        source: 'stremglav',
        gpx: 'tracks/ski/yantar_tomsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Ижевск, Снежинка',
        length: 10,
        region: 'UDMURTIA',
        source: 'stremglav',
        info: 'Лыжная база Удмуртского государственного университета.',
        gpx: 'tracks/ski/snezhinka_izhevsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Губаха, УХТК',
        length: 14,
        region: 'PERM',
        source: 'stremglav',
        gpx: 'tracks/ski/uhtk_gubakha_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'УФОК Кольцово',
        region: 'NSK',
        source: 'stremglav',
        sneg: 'koltsovo',
        gpx: 'tracks/ski/koltsovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Берёзовая роща',
        region: 'NSK',
        source: 'stremglav',
        sneg: 'berezovaya-nsk',
        gpx: 'tracks/ski/berezovaya_nsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Краснообск',
        region: 'NSK',
        source: 'stremglav',
        sneg: 'krasnoobsk',
        gpx: 'tracks/ski/krasnoobsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'ЛБ Авиатор',
        region: 'NSK',
        source: 'stremglav',
        sneg: 'aviator',
        gpx: 'tracks/ski/aviator_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Лисьи горки',
        region: 'NSK',
        source: 'stremglav',
        sneg: 'lisyi-nsk',
        gpx: 'tracks/ski/lisyi_nsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Бердск, ЛБ Метелица',
        region: 'NSK',
        source: 'stremglav',
        sneg: 'metelica-berdsk',
        gpx: 'tracks/ski/metelica_berdsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Бердск, биатлонный комплекс',
        region: 'NSK',
        source: 'stremglav',
        sneg: 'berdsk-biatlon',
        gpx: 'tracks/ski/berdsk_biatlon_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Костомукша',
        region: 'KARELIA',
        source: 'stremglav',
        sneg: 'kostomuksha',
        info: 'Лыжная база ДЮСШ.',
        gpx: 'tracks/ski/kostomuksha_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Александровск',
        region: 'PERM',
        source: 'stremglav',
        sneg: 'aleksandrovsk',
        gpx: 'tracks/ski/aleksandrovsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Сургут, Сайма',
        region: 'KHMAO',
        source: 'stremglav',
        sneg: 'nasaime',
        gpx: 'tracks/ski/nasaime_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Масловский лес, Одинцово',
        region: 'MSK',
        source: 'stremglav',
        sneg: 'maslov-ski',
        gpx: 'tracks/ski/maslov_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Подольск, Девятский лес',
        region: 'MSK',
        source: 'stremglav',
        sneg: 'deviat-ski',
        gpx: 'tracks/ski/deviat_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Dvorista',
        region: 'BOSNIA',
        source: 'stremglav',
        gpx: 'tracks/ski/dvorista_bosnia_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Jogllandloipe Wien',
        region: 'AUSTRIA',
        source: 'stremglav',
        gpx: 'tracks/ski/jogllandloipe_wien_alps_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Kapaonik',
        region: 'SERBIA',
        source: 'stremglav',
        gpx: 'tracks/ski/kapaonik_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Lahti',
        region: 'FINLAND',
        source: 'stremglav',
        gpx: 'tracks/ski/lahti_2_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Oittaa',
        region: 'FINLAND',
        source: 'stremglav',
        gpx: 'tracks/ski/oittaa_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Sienica',
        region: 'SERBIA',
        source: 'stremglav',
        gpx: 'tracks/ski/sienica_serbia_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Tic Polje Zlatibor',
        region: 'SERBIA',
        source: 'stremglav',
        gpx: 'tracks/ski/tic_polje_zlatibor_serbia_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Veliko polje Igman',
        region: 'BOSNIA',
        source: 'stremglav',
        gpx: 'tracks/ski/veliko_polje_igman_bosnia_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Villagio',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/villagio_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Zabljak Durmitor',
        region: 'MONTENEGRO',
        source: 'stremglav',
        gpx: 'tracks/ski/zabljak_durmitor_montenegro_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Абзаково, Малый Курташ',
        region: 'BASH',
        source: 'stremglav',
        gpx: 'tracks/ski/abzakovo_malyy_kurtash_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Абрамцево-Радонеж',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/abramtsevo_radonezh_klassika_ski_omaps.gpx',
        ski_kind: 'CLASSIC_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Чкаловский, Авиатор',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/aviator_chkalovskiy_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Ногинск, Автомобилист',
        region: 'NSK',
        source: 'stremglav',
        gpx: 'tracks/ski/avtomobilist_noginsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Акатово',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/akatovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Алешкино',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/aleshkino_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Алмаш',
        region: 'TATARSTAN',
        source: 'stremglav',
        gpx: 'tracks/ski/almash_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Альпийская деревня',
        region: 'OMSK',
        source: 'stremglav',
        gpx: 'tracks/ski/alpiyskaya_derevnya_omsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Ананьева гора',
        region: 'VLADIMIR',
        source: 'stremglav',
        gpx: 'tracks/ski/ananeva_gora_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Аннино',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/annino_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Воскресенск, Ашитково',
        region: 'NSK',
        source: 'stremglav',
        gpx: 'tracks/ski/ashitkovo_voskresensk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Бабаевский пруд',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/babaevskiy_prud_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Первоуральск, т/б Бодрость, г Мокрая',
        region: 'EKB',
        source: 'stremglav',
        gpx: 'tracks/ski/baza_bodrost_gora_mokraya_pervouralsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Байкальск',
        region: 'IRKUTSK',
        source: 'stremglav',
        gpx: 'tracks/ski/baykalsk_vostok_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Балакирево',
        region: 'VLADIMIR',
        source: 'stremglav',
        gpx: 'tracks/ski/balakirevo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Баланово',
        region: 'BASH',
        source: 'stremglav',
        gpx: 'tracks/ski/balanovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Баринова роща',
        region: 'VLADIMIR',
        source: 'stremglav',
        gpx: 'tracks/ski/barinova_roshcha_gus_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Сургут, Барсово',
        region: 'KHMAO',
        source: 'stremglav',
        gpx: 'tracks/ski/barsovo_surgut_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Белокуриха-2',
        region: 'ALTAI',
        source: 'stremglav',
        gpx: 'tracks/ski/belokurikha_2_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Белокуриха',
        region: 'ALTAI',
        source: 'stremglav',
        gpx: 'tracks/ski/belokurikha_altay_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Никольск, Белочка',
        region: 'PENZA',
        source: 'stremglav',
        gpx: 'tracks/ski/belochka_nikolsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Долгопрудный, Березовая роща',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/berezovaya_roshcha_dolgoprudnyy_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Уфа, Биатлон',
        region: 'BASH',
        source: 'stremglav',
        gpx: 'tracks/ski/biatlon_ufa_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'БКБ Фряново',
        year: 2024,
        region: 'MSK',
        gpx: {
            '1':'tracks/ski/bkb_fryanovo_24_25_ski_omaps.gpx',
            '2':'tracks/ski/bkb_fryanovo_ski_omaps.gpx'
        },
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Первоуральск, Бодрость',
        region: 'EKB',
        source: 'stremglav',
        gpx: 'tracks/ski/bodrost_pervouralsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Большой Газон МГУ',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/bolshoy_gazon_mgu_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Большой Луг, Академгородок',
        region: 'IRKUTSK',
        gpx: 'tracks/ski/bolshoy_lug_akademgorodok_irkutsk_vostok_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Ботанический и Останкино',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/botanicheskiy_i_ostankino_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Братеевская пойма',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/brateevskaya_poyma_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Братьев Асафьевых',
        region: 'TVER',
        source: 'stremglav',
        gpx: 'tracks/ski/bratev_asafevykh_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Бронницкая лыжня',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/bronnitskaya_lyzhnya_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Брянск',
        region: 'NSK',
        source: 'stremglav',
        gpx: 'tracks/ski/bryansk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Буй',
        region: 'KOSTROMA',
        source: 'stremglav',
        gpx: 'tracks/ski/buy_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Буревестник, Инюшенский бор',
        region: 'NSK',
        source: 'stremglav',
        gpx: 'tracks/ski/burevestnik_inyushenskiy_bor_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Буревестник-ЮМ',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/burevestnik_yum_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Бушарино',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/busharino_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Варварино',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/varvarino_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Веденина ЛРК',
        region: 'TULA',
        source: 'stremglav',
        gpx: 'tracks/ski/vedenina_lrk_tsentr_1_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Муром, Верба',
        region: 'VLADIMIR',
        source: 'stremglav',
        gpx: 'tracks/ski/verba_murom_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Верея',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/vereya_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Веснянка',
        region: 'BELARUS',
        source: 'stremglav',
        gpx: 'tracks/ski/vesnyanka_belorus_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'л/п Видное',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/vidnoe_lesopark_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Великие Луки, ВЛГАФК',
        region: 'SMOLENSK',
        source: 'stremglav',
        gpx: 'tracks/ski/vlgafk_velikie_luki_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Вожега',
        region: 'VOLOGDA',
        source: 'stremglav',
        gpx: 'tracks/ski/vozhega_sever_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Волжск',
        region: 'MARI_EL',
        source: 'stremglav',
        gpx: 'tracks/ski/volzhsk_mariy_el_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Волкуша',
        year: 2024,
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/volkusha2024_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Волоколамск',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/volokolamsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Елец, Воргол',
        region: 'TULA',
        source: 'stremglav',
        gpx: 'tracks/ski/vorgol_elets_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Воронки',
        region: 'BASH',
        source: 'stremglav',
        gpx: 'tracks/ski/voronki_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Воскресенское лыжня',
        region: 'NSK',
        source: 'stremglav',
        gpx: 'tracks/ski/voskresenskoe_lyzhnya_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Восточное Измайлово',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/vostochnoe_izmaylovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Высоковск',
        region: 'TVER',
        source: 'stremglav',
        gpx: 'tracks/ski/vysokovsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Вышний Волочек',
        region: 'TVER',
        source: 'stremglav',
        gpx: 'tracks/ski/vyshniy_volochek_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Галич Толтуново',
        region: 'KOSTROMA',
        source: 'stremglav',
        gpx: 'tracks/ski/galich_toltunovo_sever_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Десногорск, Генино',
        region: 'SMOLENSK',
        source: 'stremglav',
        gpx: 'tracks/ski/genino_desnogorsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Гигирево',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/gigirevo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Глумилино-Таптыково-Жуково',
        region: 'BASH',
        source: 'stremglav',
        gpx: 'tracks/ski/glumilino_taptykovo_zhukovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'ул Головачева, квт 23',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/golovacheva_kv_23_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Головино',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/golovino_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Голубое',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/goluboe_classic_2024_ski_omaps.gpx',
        ski_kind: 'CLASSIC_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Горский',
        region: 'NSK',
        source: 'stremglav',
        gpx: 'tracks/ski/gorskiy_nsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Гришкино',
        region: 'TVER',
        source: 'stremglav',
        gpx: 'tracks/ski/grishkino_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Меленки, Гузеев Овраг',
        region: 'VLADIMIR',
        source: 'stremglav',
        gpx: 'tracks/ski/guzeev_ovrag_melenki_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Щелково, Детская',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/detskaya_shchelkovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Дзержинский, Угреша',
        region: 'NSK',
        source: 'stremglav',
        gpx: 'tracks/ski/dzerzhinskiy_ugresha_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Динамо',
        region: 'NSK',
        source: 'stremglav',
        gpx: 'tracks/ski/dinamo_nsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Доброград, Goodwill',
        region: 'VLADIMIR',
        source: 'stremglav',
        gpx: 'tracks/ski/dobrograd_goodwill_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Долгий пруд',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/dolgiy_prud_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Долина ручьев',
        region: 'KHMAO',
        source: 'stremglav',
        gpx: 'tracks/ski/dolina_ruchev_1_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Домодедово',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/domodedovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Донинская просека',
        region: 'NSK',
        source: 'stremglav',
        gpx: 'tracks/ski/doninskaya_proseka_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Лотошино, Дубки',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/dubki_lotoshino_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Фрязино, Дубовая роща',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/dubovaya_roshcha_fryazino_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Дырнос',
        region: 'KOMI',
        source: 'stremglav',
        gpx: 'tracks/ski/dyrnos_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'ДЮСШ №5',
        region: 'KOSTROMA',
        source: 'stremglav',
        gpx: 'tracks/ski/dyussh_5_kostroma_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Первоуральск, Европа-Азия',
        region: 'EKB',
        source: 'stremglav',
        gpx: 'tracks/ski/evropa_aziya_pervouralsk_vostok_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Елагино',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/elagino_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Ерши',
        region: 'IRKUTSK',
        source: 'stremglav',
        gpx: 'tracks/ski/ershi_irkutsk_vostok_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Звенигород, Ершово',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/ershovo_zvenigorod_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Тольятти, Есенина',
        region: 'SAMARA',
        source: 'stremglav',
        gpx: 'tracks/ski/esenina_tolyatti_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Бийск, Забава',
        region: 'ALTAI',
        source: 'stremglav',
        gpx: 'tracks/ski/zabava_biysk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Завидово',
        region: 'TVER',
        source: 'stremglav',
        gpx: 'tracks/ski/zavidovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Павловский Посад, Заречье',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/zareche_pavlovskiy_posad_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Бийск, Заря',
        region: 'ALTAI',
        source: 'stremglav',
        gpx: 'tracks/ski/zarya_biysk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Заря',
        region: 'ULYANOVSK',
        source: 'stremglav',
        gpx: 'tracks/ski/zarya_ulyanovsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Зеленый, Заря',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/zarya_zelenyy_moskovskaya_obl_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Великие Луки, Зеленка',
        region: 'SMOLENSK',
        source: 'stremglav',
        gpx: 'tracks/ski/zelenka_velikie_luki_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Зеленоград, 17-й мкр.',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/zelenograd_17_y_mkr_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Зеленоград, 7-й район',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/zelenograd_7_y_rayon_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Зорино',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/zorino_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Зубец',
        region: 'KLGA',
        source: 'stremglav',
        gpx: 'tracks/ski/zubets_long_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Ивановское',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/ivanovskoe_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Ивантеевка',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/ivanteevka_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Ивачково, Львовская',
        year: 2025,
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/ivachkovo_66_y_km_lvovskaya_sezon_25_26_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Измайлово, За пасекой',
        length: 2.5,
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/izmaylovo_za_pasekoy_2500m_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Измайлово Змейка',
        length: 5,
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/izmaylovo_zmeyka_5km_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Изониха',
        region: 'VOLOGDA',
        source: 'stremglav',
        gpx: 'tracks/ski/izonikha_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Ирида',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/irida_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'ИСХИ',
        region: 'IRKUTSK',
        source: 'stremglav',
        gpx: 'tracks/ski/iskhi_irkutsk_vostok_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Калевальский нацпарк',
        region: 'KARELIA',
        source: 'stremglav',
        gpx: 'tracks/ski/kalevalskiy_natspark_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Каменный мыс, о Черный',
        region: 'KHMAO',
        source: 'stremglav',
        gpx: 'tracks/ski/kamennyy_mys_o_chernyy_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Кандалакша',
        region: 'MURMANSK',
        source: 'stremglav',
        gpx: 'tracks/ski/kandalaksha_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Кандалакша, Полярные зори',
        region: 'MURMANSK',
        source: 'stremglav',
        gpx: 'tracks/ski/kandalaksha_polyarnye_zori_lineynyy_marafon_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Каринское',
        region: 'NSK',
        source: 'stremglav',
        gpx: 'tracks/ski/karinskoe_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Карьки',
        region: 'TULA',
        source: 'stremglav',
        gpx: 'tracks/ski/karki_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Качкарский мар',
        region: 'ORENBURG',
        source: 'stremglav',
        gpx: 'tracks/ski/kachkarskiy_mar_orenburg_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Сургут, Кедр',
        region: 'KHMAO',
        source: 'stremglav',
        gpx: 'tracks/ski/kedr_surgut_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Киржач Серегина',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/kirzhach_seregina_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Кировск парк',
        region: 'KIROV',
        source: 'stremglav',
        gpx: 'tracks/ski/kirovsk_park_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Клин',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/klin_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Кокчетау',
        region: 'KAZAKHSTAN',
        source: 'stremglav',
        gpx: 'tracks/ski/kokchetau_kazakhstan_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Конаково Ривер Клаб',
        region: 'TVER',
        source: 'stremglav',
        gpx: 'tracks/ski/konakovo_river_klab_1_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Конаковский бор',
        region: 'TVER',
        source: 'stremglav',
        gpx: 'tracks/ski/konakovskiy_bor_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Корабельная роща',
        region: 'TATARSTAN',
        source: 'stremglav',
        gpx: 'tracks/ski/korabelnaya_roshcha_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Королёв',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/korolev_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Корта',
        region: 'TATARSTAN',
        source: 'stremglav',
        gpx: 'tracks/ski/korta_vostok_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Красного маяка',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/krasnogo_mayaka_2_pyaterki_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Красное знамя',
        region: 'NSK',
        source: 'stremglav',
        gpx: 'tracks/ski/krasnoe_znamya_nsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Красное эхо',
        region: 'VLADIMIR',
        source: 'stremglav',
        gpx: 'tracks/ski/krasnoe_ekho_gus_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Красные крылья',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/krasnye_krylya_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Крутая горка',
        region: 'OMSK',
        source: 'stremglav',
        gpx: 'tracks/ski/krutaya_gorka_omsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Крылатское',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/krylatskoe_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Крылатское Осенняя, Москва',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/krylatskoe_osennyaya_moskva_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'КСК Битца',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/ksk_bittsa_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Кузина',
        region: 'ARKHANGELSK',
        source: 'stremglav',
        gpx: 'tracks/ski/kuzina_arkhangelsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Кузьминки Головачева',
        region: 'MSK',
        gpx: 'tracks/ski/kuzminki_golovacheva_25_26_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Кузьминки Заречная',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/kuzminki_zarechnaya_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Курташ, Белорецк',
        region: 'BASH',
        source: 'stremglav',
        gpx: 'tracks/ski/kurtash_beloretsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Кусково',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/kuskovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Кучинский лесопарк',
        region: 'NSK',
        source: 'stremglav',
        gpx: 'tracks/ski/kuchinskiy_lesopark_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Лада парк',
        region: 'SAMARA',
        source: 'stremglav',
        gpx: 'tracks/ski/lada_park_vostok_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Ласточка',
        region: 'IRKUTSK',
        source: 'stremglav',
        gpx: 'tracks/ski/lastochka_irkutsk_vostok_1_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Лаура',
        region: 'KRASNODAR',
        source: 'stremglav',
        gpx: 'tracks/ski/laura_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Мирный, Заречная',
        region: 'DV',
        source: 'stremglav',
        gpx: 'tracks/ski/mirnyy_zarechnaya_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'ЛБ ФИАН',
        region: 'TULA',
        source: 'stremglav',
        gpx: 'tracks/ski/lb_fian_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'ЛБК Ангарский',
        region: 'IRKUTSK',
        source: 'stremglav',
        gpx: 'tracks/ski/lbk_angarskiy_vostok_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Левковская гора',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/levkovskaya_gora_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Павловский Посад, Ледовая арена',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/ledovaya_arena_pavlovskiy_posad_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Лесопарк Елочки',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/lesopark_elochki_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Лесопарк Ступино',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/lesopark_stupino_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Летова тропа экопарк',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/letova_tropa_ekopark_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Лидер [Иваново]',
        region: 'IVANOVO',
        source: 'stremglav',
        gpx: 'tracks/ski/lider_ivanovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Лисья гора',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/lisya_gora_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Лисья Грива, Нижний Новгород',
        region: 'N_NOVGOROD',
        source: 'stremglav',
        gpx: 'tracks/ski/lisya_griva_n_novgorod_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Лихославль СТП Южный',
        region: 'TVER',
        source: 'stremglav',
        gpx: 'tracks/ski/likhoslavl_stp_yuzhnyy_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Локомотив [Казань]',
        region: 'TATARSTAN',
        source: 'stremglav',
        gpx: 'tracks/ski/lokomotiv_kazan_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Лосиноостровский лесопарк',
        region: 'MSK',
        gpx: 'tracks/ski/losinoostrovskiy_lesopark_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Богородское, Лотос',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/lotos_bogorodskoe_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'оз Борисоглебское',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/lt_oz_borisoglebskoe_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Лужники',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/luzhniki_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Череповец, Лыжный стадион',
        region: 'VOLOGDA',
        source: 'stremglav',
        gpx: 'tracks/ski/lyzhnyy_stadion_cherepovets_sever_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Лыжня Андреева',
        region: 'TVER',
        source: 'stremglav',
        gpx: 'tracks/ski/lyzhnya_andreevavv_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Лыжня здоровья',
        region: 'DV',
        source: 'stremglav',
        gpx: 'tracks/ski/lyzhnya_zdorovya_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Лыжня Курышева',
        region: 'BASH',
        source: 'stremglav',
        gpx: 'tracks/ski/lyzhnya_kurysheva_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Лысая гора',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/lysaya_gora_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Любляна Егорьевск',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/lyublyana_egorevsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Дзержинск, Магнитная стрелка',
        region: 'NSK',
        source: 'stremglav',
        gpx: 'tracks/ski/magnitnaya_strelka_dzerzhinsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Максима парк',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/maksima_park_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Малевич',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/malevich_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Малышково - Сосновый бор',
        region: 'KOSTROMA',
        source: 'stremglav',
        gpx: 'tracks/ski/malyshkovo_sosnovyy_bor_kostroma_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Марьино',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/marino_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Зеленодольск, Маяк',
        region: 'TATARSTAN',
        source: 'stremglav',
        gpx: 'tracks/ski/mayak_zelenodolsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Металлург Шелехов',
        region: 'IRKUTSK',
        source: 'stremglav',
        gpx: 'tracks/ski/metallurg_shelekhov_vostok_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Мещерский',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/meshcherskiy_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Микунь',
        region: 'KOMI',
        source: 'stremglav',
        gpx: 'tracks/ski/mikun_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Можайск',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/mozhaysk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Мокрая гора, Первоуральск',
        region: 'EKB',
        source: 'stremglav',
        gpx: 'tracks/ski/mokraya_gora_pervouralsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Молодежный',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/molodezhnyy_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Мончегорск',
        region: 'MURMANSK',
        source: 'stremglav',
        gpx: 'tracks/ski/monchegorsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Морозко, Нижний Новгород',
        region: 'N_NOVGOROD',
        source: 'stremglav',
        gpx: 'tracks/ski/morozko_n_novgorod_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Мураново',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/muranovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Муратово Муром',
        region: 'VLADIMIR',
        source: 'stremglav',
        gpx: 'tracks/ski/muratovo_murom_tsentr_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Мурмаши',
        region: 'MURMANSK',
        source: 'stremglav',
        gpx: 'tracks/ski/murmashi_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Мытищи',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/mytishchi_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Нацпарк Лосиный остров',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/natspark_losinyy_ostrov_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Незнаново, Нерехта',
        region: 'YAROSLAVL',
        source: 'stremglav',
        gpx: 'tracks/ski/neznanovo_nerekhta_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Никола-Ленивец',
        region: 'KLGA',
        source: 'stremglav',
        gpx: 'tracks/ski/nikola_lenivets_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Николина Гора',
        region: 'MSK',
        gpx: {
            '1':'tracks/ski/nikolina_gora_ski_omaps.gpx',
            '2':'tracks/ski/nikolina_gora_2024_ski_omaps.gpx'
        },
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    }
];