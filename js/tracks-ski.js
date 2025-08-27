let skiTracks = [
    // --- ЛЫЖИ ---
    {
        name: 'Московский парк Победы',
        info: 'Абсолютно плоский самотопный круг. Дорожки часто посыпают песком.',
        gpx: 'tracks/ski/victory_park_ski_omaps.gpx',
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
        gpx: 'tracks/ski/murinsky_ski_omaps.gpx',
        ski_kind: 'WALKWAY',
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
        name: 'Полежаевский парк',
        info: 'Единственная лыжная трасса с хоть сколько-то заметным рельефом на юге города.',
        gpx: 'tracks/ski/polezhaevsky_park_ski_omaps.gpx',
        ski_kind: 'FICKLE_ROUTE',
        type: ['SKI']
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
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Пушкин, Отдельный парк',
        info: 'Лыжная трасса с небольшим плавным рельефом.',
        gpx: 'tracks/ski/pushkin_otdelny_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Александровская',
        info: 'Плоская самотопная лыжня.',
        gpx: 'tracks/ski/aleksandrovskaya_ski_omaps.gpx',
        ski_kind: 'FURROW',
        type: ['SKI']
    },
    {
        name: 'Зеленогорск, б/о "Прибой", марафон «Двигатель»',
        year: 2025,
        date: '15.03',
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
        ski_kind: 'SKATE_ROUTE',
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
        type: ['SKI']
    },
    {
        name: 'Рощино',
        year: 2023,
        link: 'https://vk.com/public210675528',
        info: 'Лыжная трасса Рощино создана и поддерживается жителями Рощино. Подготовка, обслуживание и содержание осуществляется за счет собственных средств и за счет благотворительных средств не безразличных людей.',
        gpx: 'tracks/ski/roschino_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
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
        ski_kind: 'WALKWAY',
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
        info: 'классика двусторонняя',
        gpx: 'tracks/ski/sestroretsk_beach_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Кавголово, Виролайнен',
        year: 2024,
        info: 'Возрождённая в 2024 году лыжная трасса рядом с УТЦ на территории ООПТ "Токсовский".',
        gpx: 'tracks/ski/kavgolovo_virolaynen_ski_omaps.gpx',
        logo: 'utc.gif',
        ski_kind: 'FICKLE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Кавголово, УТЦ',
        link: 'https://vk.com/utclesgaft',
        info: 'Учебно тренировочный центр. Самая цивильная спортивная трасса области. В т.ч. круглогодичная крытая лыжная трасса ("труба").',
        gpx: 'tracks/ski/utc_ski_omaps.gpx',
        logo: 'utc.gif',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Кавголово, Динамо',
        info: 'Лыжная трасса в ООПТ "Токсовские высоты" со стартом у спорт.базы Динамо.',
        gpx: 'tracks/ski/kavgolovo_dinamo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Осельки',
        info: 'Практически абсолютно плоская, часто самотопная, лыжня в окружении красивого леса.',
        gpx: 'tracks/ski/oselki_ski_omaps.gpx',
        ski_kind: 'FICKLE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Токсово, Toksovo Cup',
        year: 2024,
        date: '3.02',
        info: 'Классическая трасса Токсовского лыжного марафона. Старт - от базы СКА.',
        link: 'https://vk.com/toksovocup',
        results: 'https://reg.o-time.ru/race/24061',
        gpx: {
            '17km':'tracks/ski/toksovo_cup_17_ski_omaps.gpx',
            '10km':'tracks/ski/toksovo_cup_10_ski_omaps.gpx',
            'Full marathon 50km':'tracks/ski/toksovo_cup_50_ski_omaps.gpx'
        },
        logo: 'toksovo_cup.gif',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Токсово, ВИФК',
        info: 'Лыжная трасса на территории, принадлежащей МО РФ. Ограниченно доступна.',
        gpx: 'tracks/ski/toksovo_vifk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Токсово, Фирн',
        info: 'Уже несколько лет эта трасса не подготавливается.',
        gpx: 'tracks/ski/toksovo_firn_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Токсовская туристическая лыжня',
        gpx: 'tracks/ski/toksovo_tourist_trail_ski_omaps.gpx',
        info: 'Общая длина - почти 40км.',
        type: ['SKI']
    },
    {
        name: 'Токсово, Малиновая гора',
        year: 2024,
        info: 'Классическая лыжня, подготавливаемая энтузиастами. Периодически тут проводятся массовые "Лыжные стрелы".',
        link: 'https://vk.com/malingora',
        gpx: 'tracks/ski/toksovo_malinova_gora_ski_omaps.gpx',
        markir: true,
        ski_kind: 'CLASSIC_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Токсово, Малиновая гора, болотная петля',
        info: 'Абсолютно плоская классическая лыжня по болоту, подготавливаемая энтузиастами.',
        link: 'https://vk.com/malingora',
        gpx: 'tracks/ski/toksovo_malinova_gora_swamp_ski_omaps.gpx',
        ski_kind: 'CLASSIC_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Охта-парк, Toksovo Cup',
        year: 2025,
        date: '1.02',
        results: 'https://reg.o-time.ru/race/25033',
        info: 'Ближайший и возможно главный горнолыжный курорт в Санкт-Петербурге. Беговая лыжная трасса хороша и бесплатна, но посещение курорта - платное. Трасса Токсовского лыжного марафона 2025.',
        link: 'https://vk.com/ohtapark',
        gpx: 'tracks/ski/ohtapark_ski_omaps.gpx',
        markir: true,
        logo: 'ohta_park.gif',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Лемболово',
        link: 'https://vk.com/trassalembolovo',
        gpx: 'tracks/ski/lembolovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Орехово, двадцать от станции',
        link: 'https://vk.com/orehovo_ski',
        gpx: 'tracks/ski/orekhovo_20_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Орехово, "Лыжная стрела"',
        year: 2025,
        link: 'https://vk.com/orehovo_ski',
        gpx: 'tracks/ski/orekhovo_ski_arrow_2025_omaps.gpx',
        ski_kind: 'CLASSIC_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Ореховская Дюжина',
        year: 2025,
        date: '24.01',
        link: 'https://www.multsport.ru/starts/orehovo-12km25/',
        results: 'https://reg.o-time.ru/race/25061',
        info: '1.3-26км',
        gpx: {
            '13km':'tracks/ski/orekhovo_12_ski_omaps.gpx',
            '5km':'tracks/ski/orekhovo_5_ski_omaps.gpx'
        },
        markir: true,
        start: 'MULTSPORT',
        ski_kind: 'SKATE_ROUTE',
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
        year: 2025,
        date: '16.02',
        results: 'https://reg.o-time.ru/race/25052',
        info: 'Круги: <ol><li><b>"Семейный"</b> - Идеален для семейных прогулок с детьми, первоначального обучения технике конькового и классического хода. На нем нет опасных спусков и крутых подъемов.</li>' +
            '<li><b>"Любитель"</b> - Есть срезки на каждом километре дистанции. Присутствуют подъемы и спуски с перепадом до 15м. Катание на этому кругу требует уверенного владения лыжами.</li>' +
            '<li><b>"Мастер"</b> - По-настоящему спортивный круг, протяженностью 7 км, бросающий вызов силе, выносливости, характеру и умению спортсмена.</li>' +
            '<li><b>"Турист"</b> - Включает круги "Семейный", "Любитель", частично "Мастер" и 6-км дополнительную туристическую петлю, которая периодически готовится под коньковый и классический ход.</li></ol>' +
            'Актуальные треки - в <a href="https://reg.o-time.ru/bul/25052.pdf">положении</a>.',
        link: 'https://vk.com/sport_v_garbolovo',
        gpx: {
            'Турист, 12км':'tracks/ski/garbolovo_tourist_ski_omaps.gpx',
            'Мастер, 7км':'tracks/ski/garbolovo_master_ski_omaps.gpx',
            'Любитель, 6км':'tracks/ski/garbolovo_ljubitel_ski_omaps.gpx',
            'Семейный, 3.5км':'tracks/ski/garbolovo_family_ski_omaps.gpx',
        },
        markir: true,
        logo: 'garbolovo_ski.webp',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Павлово',
        info: 'Очень симпатичный лыжный круг с хорошим рельефом.',
        gpx: 'tracks/ski/pavlovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Парголово',
        info: 'Единственная в черте города лыжная трасса с более-менее серьёзным рельефом.',
        link: 'https://vk.com/skipargolovo',
        gpx: 'tracks/ski/pargolovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
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
        year: 2025,
        date: '19.01',
        link: 'https://drive-igora.ru/events/lyzhnaya-gonka-igora-drayv/',
        results: 'https://reg.o-time.ru/race/25069',
        gpx: {
            '10км':'tracks/ski/igora_ski_10km_omaps.gpx',
            '5км':'tracks/ski/igora_ski_omaps.gpx'
        },
        logo: 'igora.webp',
        ski_kind: 'SKATE_ROUTE',
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
        ski_kind: 'FICKLE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Выборгский лыжный марафон',
        year: 2025,
        date: '22.02',
        link: 'https://vk.com/vyborgmarathon',
        results: 'https://reg.o-time.ru/race/25053',
        info: 'Гонка прошла по кругу 5 км. 1-30км.',
        gpx: 'tracks/ski/vyborg_ski_omaps.gpx',
        markir: true,
        logo: 'vyborg.webp',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Туутари',
        info: 'Довольно плоская и ветренная лыжная трасса, раскатанная под конёк.',
        link: 'https://www.tyytari.ru/holidays/photos/42/',
        gpx: 'tracks/ski/tuutari_ski_omaps.gpx',
        ski_kind: 'FICKLE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Дудергоф, Можайская',
        info: 'Отличная гора практически в черте города!',
        link: 'https://vk.com/svdudergof',
        gpx: 'tracks/ski/mozhaika_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Дудергофские медведи',
        year: 2024,
        date: '2.03',
        info: 'Практически плоская лыжная трасса по полям.',
        link: 'https://vk.com/dudergof_bear',
        results: 'https://reg.o-time.ru/race/24298',
        gpx: 'tracks/ski/dudergof_bears_ski_omaps.gpx',
        logo: 'dudergof_bear.gif',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Ржевский л/п',
        link: 'https://vk.com/sport_krgv1',
        info: 'Самотопный "конёк" и лыжня сбоку от дороги.',
        gpx: 'tracks/ski/rzhevsky_ski_omaps.gpx',
        ski_kind: 'WALKWAY',
        type: ['SKI']
    },
    {
        name: 'Невский л/п, Богословка',
        info: 'Прокатывается нерегулярно.',
        gpx: 'tracks/ski/bogoslovka_ski_omaps.gpx',
        ski_kind: 'FICKLE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Киришский лыжный марафон',
        year: 2023,
        date: '19.02',
        link: 'https://vk.com/kirishi_ski_marathon',
        results: 'https://vk.com/wall-114713337_333',
        info: '20-50км.',
        gpx: 'tracks/ski/kirishi_ski_omaps.gpx',
        logo: 'kirishi_ski.webp',
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
        gpx: 'tracks/ski/kirovsk_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Гатчинский лыжный марафон',
        year: 2024,
        date: '8.03',
        results: 'https://reg.o-time.ru/race/24254',
        gpx: 'tracks/ski/gatchina_ski_omaps.gpx',
        logo: 'gatchina.gif',
        ski_kind: 'FICKLE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Кингисепп',
        gpx: 'tracks/ski/kingisepp_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Луга, Зелёный Бор',
        gpx: 'tracks/ski/luga_zelbor_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Луга, б/о "Штоль"',
        gpx: 'tracks/ski/luga_shtol_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Ломоносов',
        info: 'Холмистую трассу готовит на энтузиазме бывший учитель физкультуры.',
        gpx: 'tracks/ski/lomonosov_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Ломоносов, гольф-клуб "Strawberry Fields"',
        link: 'https://vk.com/sfgolfclub',
        info: 'Трасса мягкая, готовят бороной, подъёмов нет, душ, раздевалка, парковка. Платно.',
        gpx: 'tracks/ski/lomonosov_strawberry_fields_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Пески, лыжероллерная трасса Ярви',
        link: 'https://jarviresort.ru/',
        gpx: 'tracks/ski/peski_jarvi_omaps.gpx',
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
        type: ['SKI']
    },
    {
        name: 'Тихвинский лыжный марафон',
        year: 2024,
        date: '28.01',
        info: '20 и 50 км.',
        link: 'https://vk.com/club199236798',
        results: 'https://vk.com/wall-199236798_1340',
        gpx: 'tracks/ski/tikhvin_omaps.gpx',
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
        name: 'Юнтолово',
        gpx: 'tracks/ski/juntolovo_omaps.gpx',
        ski_kind: 'FURROW',
        type: ['SKI']
    },
];
