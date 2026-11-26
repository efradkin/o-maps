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
        sneg: 'murino',
        length: 3.2,
        info: 'Единственная бесплатная лыжероллерная трасса в Санкт-Петербурге. Грамотно спроектирована. Есть подъемы и виражи. Асфальт хороший, однако уже встречаются грубоватые заплатки, кое где на склонах асфальт начинает "ползти". Отличный рабочий рельеф, но отсутствует освещение. Отсутствуют: авто-парковка, туалеты и контроль за порядком.',
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
        sneg: 'polejaevski',
        length: 5.4,
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
        sneg: 'krestostrov',
        length: 2.1,
        link: 'https://vk.com/spbrun_run',
        info: 'Широкая плоская трасса с двумя искусственными горками со свободным доступом с 6 утра до 11 вечера. Присутствует парковое освещение. Есть шатры-раздевалки, камера хранения и туалеты. Проката лыж нет.',
        gpx: 'tracks/ski/krestovsky_ski_omaps.gpx',
        logo: 'spb_sport.gif',
        pics: ['ski/krestovsky',2],
        ski_kind: 'SKATE_ROUTE',
        video: 'https://www.youtube.com/watch?v=2TAmp_3ICtU',
        type: ['SKI']
    },
    {
        name: 'Пушкин, Отдельный парк',
        sneg: 'otdelny-pushkin',
        length: 3.1,
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
        sneg: 'balbolov-ski',
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
        sneg: 'priboy-spb',
        date: '2025-03-15',
        link: 'https://vk.com/bazapriboyzel',
        info: 'Целиком прокатывается далеко не каждый год. Трассы марафона состоят из кругов 3, 5, 10 км. Теплая раздевалка работает ежедневно, кроме понедельника и вторника. Можно оставить вещи. Есть прокат.',
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
        sneg: 'priboy-spb',
        logo: 'priboy.webp',
        link: 'https://vk.com/bazapriboyzel',
        info: 'Спокойная трасса с минимумом рельефа. Теплая раздевалка работает ежедневно, кроме понедельника и вторника. Можно оставить вещи. Есть прокат.',
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
        sneg: 'roschino',
        length: 11,
        year: 2023,
        link: 'https://vk.com/public210675528',
        info: 'Трасса живописная, интересная. Спокойный 10км круг и спортивная пятерка. Готовится энтузиастами. За счёт расположения в сосновом бору, который работает как термос, снег (трасса) сохраняется даже если в округе всё тает. Есть очень рельефные места с большими горками, при желании их можно обойти. Есть где походить на широких лыжах по лесу без лыжни. При хорошем снежном покрове людей всегда много по выходным. Парковки две, небольшие, у Райволы и у психбольницы, в будние дни проблем с парковкой нет. Проката нет. Рядом находится доступный парк-отель Райвола где можно поесть или переночевать.',
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
        sneg: 'sertolovo',
        length: 1.7,
        link: ['https://vk.com/sport_v_sertolovo', 'https://t.me/sport_v_sertolovo'],
        info: 'Трасса находится на расстоянии 500 метров от г. Сертолово. Трасса для конькового хода шириной до 4 м. Равнинный рельеф, с небольшими пологими спусками и подъемами, перепады высот до 2-х метров. Подъезда на а/м к самой трассе нет, начинать движение на лыжах прямо от домов. Подходы к лыжне: От дома Пограничная, д. 9. Координаты для навигатора: 60.144155, 30.229985 Со стороны Сертоловского водоёма и по Парковому проезду от ЖК Отражение Трасса не имеет государственного финансирования и содержится за счет: – Личных средств инициаторов создания трассы – Добровольных пожертвований – Поддержки местного бизнеса Организатор: Андрей Солозобов +7 (921) 742-35-02',
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
        sneg: 'virolainena',
        length: 4.2,
        year: 2024,
        info: 'Возрождённая в 2024 году лыжная трасса рядом с УТЦ на территории ООПТ "Токсовский". В настоящий момент трассу эксплуатирует УТЦ. Перепад высот значительный. Вход бесплатный. Вход (60.178107, 30.542027) находится рядом с основным въёздом в УТЦ, но парковка там запрещена знаком. Так же попасть на трассу можно с Токсовского шоссе. В этом месте есть официальная парковка (60.179133, 30.554384), обозначенная соответствующим знаком, но её последнее время не чистят от снега.',
        link: 'https://vk.com/topic-31256601_53917058',
        gpx: 'tracks/ski/kavgolovo_virolaynen_ski_omaps.gpx',
        logo: 'utc.gif',
        ski_kind: 'FICKLE_ROUTE',
        video: 'https://www.youtube.com/watch?v=CTadOHKRHY0',
        type: ['SKI']
    },
    {
        name: 'Кавголово, УТЦ',
        link: ['https://vk.com/utclesgaft', 'https://kavgolovo.center/translation/', 'https://www.skisport.ru/forum/spb-faq/93360/', 'https://www.skisport.ru/forum/spb-faq/74903/', 'https://www.skisport.ru/forum/cross-country-routes/83370/'],
        info: 'Учебно тренировочный центр. Самая цивильная спортивная трасса области. В т.ч. круглогодичная крытая лыжная трасса ("труба"). Освещенка, туннель...',
        gpx: {
            'Основной':'tracks/ski/utc_ski_omaps.gpx',
            'Все петли':'tracks/ski/utts_ski_omaps.gpx'
        },
        sneg: 'utc-kavgolovo',
        length: 5.7,
        logo: 'utc.gif',
        ski_kind: 'SKATE_ROUTE',
        video: 'https://www.youtube.com/watch?v=0HQTPMAkqqQ',
        type: ['SKI']
    },
    {
        name: 'Кавголово, Динамо',
        sneg: 'toksovskie-vysoty',
        length: 5.4,
        info: 'Лыжная трасса в ООПТ "Токсовские высоты" со стартом у спорт.базы Динамо. Гостиница в окружении хвойного красивого леса. Есть прокат лыж.',
        link: 'https://dinamo-tupikovyj-pereulok.clients.site/',
        gpx: 'tracks/ski/kavgolovo_dinamo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        pics: ['ski/dinamo',1],
        video: 'https://www.youtube.com/watch?v=8-C5m1z6TX4',
        type: ['SKI']
    },
    {
        name: 'Осельки',
        sneg: 'toksovskiy-park',
        info: 'Практически абсолютно плоская, часто самотопная, лыжня в окружении красивого леса.',
        link: 'https://vk.com/malingora',
        gpx: 'tracks/ski/oselki_ski_omaps.gpx',
        ski_kind: 'FICKLE_ROUTE',
        video: 'https://www.youtube.com/watch?v=UWJzXJuRsaE',
        type: ['SKI']
    },
    {
        name: 'Токсово, Toksovo Cup',
        sneg: 'ska',
        date: '2024-02-03',
        info: 'Классическая трасса Токсовского лыжного марафона. Старт - от базы СКА. Роллерка, стрельбище. Раздевалки доступны только для спортсменов СКА. Рекомендуемая точка парковки 60.153539, 30.555457',
        link: ['https://vk.com/toksovocup', 'http://sca-ski.ru/places/baza-ska-sk-toksovo/'],
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
        sneg: 'vifk',
        info: 'Лыжная трасса на территории, принадлежащей МО РФ. Ограниченно доступна. Есть стрельбище',
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
        sneg: 'toksovskiy-park',
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
        sneg: 'toksovskiy-park',
        info: 'Абсолютно плоская классическая лыжня по болоту, подготавливаемая энтузиастами.',
        link: 'https://vk.com/malingora',
        gpx: 'tracks/ski/toksovo_malinova_gora_swamp_ski_omaps.gpx',
        pics: ['ski/malinovaya',2],
        ski_kind: 'CLASSIC_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Малиновая гора - Осельки',
        sneg: 'toksovskiy-park',
        info: 'Лесная дорога, соединяющая две известные трассы.',
        link: 'https://vk.com/malingora',
        gpx: 'tracks/ski/toksovo_malinova_gora_oselki_ski_omaps.gpx',
        pics: ['ski/malinovaya',2],
        ski_kind: 'CLASSIC_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Охта-парк, Toksovo Cup',
        sneg: 'ohtapark',
        info: 'Въезд на территорию платный - 500р, кроме понедельника, можно воспользоваться бассейном и сауной ещё за 600р. Возможно размещение в самом Охта-партке и в апартаментах поблизости для отдыха рядом с трассой на каникулах, с компанией, с детьми.',
        date: '2026-01-31',
        results: 'https://reg.o-time.ru/race/26025',
        link: ['https://vk.com/ohtapark', 'https://vk.com/topic-31256601_48627454'],
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
        sneg: 'ohtapark',
        length: 3.9,
        date: '2025-02-01',
        results: 'https://reg.o-time.ru/race/25033',
        info: 'Ближайший и возможно главный горнолыжный курорт в Санкт-Петербурге. Беговая лыжная трасса хороша и бесплатна, но посещение курорта - платное. Трасса Токсовского лыжного марафона 2025. Ратрак, освещение. Въезд на территорию платный - 500р, кроме понедельника, можно воспользоваться бассейном и сауной ещё за 600р. Возможно размещение в самом Охта-партке и в апартаментах поблизости для отдыха рядом с трассой на каникулах, с компанией, с детьми.',
        link: ['https://vk.com/ohtapark', 'https://vk.com/topic-31256601_48627454'],
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
        sneg: 'lembolovo',
        info: 'Трасса готовится и поддерживается за счёт добровольных пожертвований лыжников. Для Вашей поддержки работ на трассе, закупки материалов, бензина, масла и запчастей - смотрите информацию на ресурсе сообщества трассы: https://vk.com/trassalembolovo',
        length: 10.4,
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
        name: 'Орехово, двадцатка прямо от станции',
        sneg: 'orehovo-ls',
        info: 'Точка начала катания проекта Лыжные стрелы около ст. Орехово. Трасса хорошо размечена. Проводится периодическая подготовка под классику.',
        link: ['https://vk.com/orehovo_ski', 'https://kfis.gov.spb.ru/massovyj-sport/fizkulturnye-meropriyatiya-dlya-naseleniya/lyzhnye-strely/', 'https://vk.com/l_strela'],
        gpx: 'tracks/ski/orekhovo_20_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Орехово, Лыжные стрелы',
        sneg: 'orehovo-ls',
        info: 'Точка начала катания проекта Лыжные стрелы около ст. Орехово. Трасса хорошо размечена. Проводится периодическая подготовка под классику.',
        year: 2025,
        link: ['https://vk.com/orehovo_ski', 'https://kfis.gov.spb.ru/massovyj-sport/fizkulturnye-meropriyatiya-dlya-naseleniya/lyzhnye-strely/', 'https://vk.com/l_strela'],
        gpx: 'tracks/ski/orekhovo_ski_arrow_2025_omaps.gpx',
        pics: ['ski/orekhovo_arrows',1],
        ski_kind: 'CLASSIC_ROUTE',
        video: 'https://www.youtube.com/watch?v=Kf8aSOlAxMY',
        type: ['SKI']
    },
    {
        name: 'Ореховская Дюжина',
        sneg: 'orehovo-baza',
        date: '2026-01-25',
        link: ['https://www.multsport.ru/starts/orehovo-12km26/', 'https://vk.com/orehovo_ski'],
        results: 'https://reg.o-time.ru/race/25061',
        info: '1.3-26км. Основной Ореховский спортивный круг. Трасса интересная, "трехмерная". Подъёмы есть, но все мягкие. Есть платная раздевалка. Тел. +7 (911) 761-68-15 Коттеджи: база Орехово (Адмирал): bazaadmiral.ru база отдыха Журавушка: https://juravushka.spb.ru/',
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
        sneg: 'orehovo-baza',
        link: 'https://vk.com/orehovo_ski',
        pic: './tracks/orekhovo/ski_1.jpg',
        info: '"Авангард выкупили, идёт стройка. Вопрос там трассы пока под сомнением."',
        gpx: 'tracks/ski/orekhovo_avangard_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Орехово, "ГТО"',
        sneg: 'orehovo-baza',
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
        sneg: 'garbolovo',
        date: '2025-02-16',
        results: 'https://reg.o-time.ru/race/25052',
        info: 'Круги: "Семейный" - Идеален для семейных прогулок с детьми, первоначального обучения технике конькового и классического хода. На нем нет опасных спусков и крутых подъемов."Любитель" - Есть срезки на каждом километре дистанции. Присутствуют подъемы и спуски с перепадом до 15м. Катание на этому кругу требует уверенного владения лыжами."Мастер" - По-настоящему спортивный круг, протяженностью 7 км, бросающий вызов силе, выносливости, характеру и умению спортсмена."Турист" - Включает круги "Семейный", "Любитель", частично "Мастер" и 6-км дополнительную туристическую петлю, которая периодически готовится под коньковый и классический ход. Трассы разного уровня, подготавливаются регулярно для конькового и классического хода. Есть разметка. Проводятся соревнования. Большая парковка. Теплая раздевалка, туалет. Тел. +7 (911) 242-91-61',
        link: ['https://vk.com/sport_v_garbolovo', 'http://trassa.garbolovo.info/', 'https://t.me/nashatrassa'],
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
        sneg: 'pavlovo',
        length: 4.2,
        info: 'Очень симпатичный лыжный круг с хорошим рельефом. Освещение обычно работает до 21:00',
        gpx: 'tracks/ski/pavlovo_ski_omaps.gpx',
        pics: ['ski/pavlovo',2],
        ski_kind: 'SKATE_ROUTE',
        video: 'https://www.youtube.com/watch?v=_aktLV4niN8',
        type: ['SKI']
    },
    {
        name: 'Парголово',
        sneg: 'pargolovo',
        length: 6.3,
        year: 2026,
        info: 'Небольшая пятикилометровая трасса, по которой проходит одноименная традиционная гонка, расположена практически в городской черте, в пяти минутах езды от ст. метро Проспект Просвещения. Трасса проходит по живописным перелескам южной оконечности Шуваловского лесопарка. Трасса с максимальным перепадом высот всего 15 м, изобилует большим количеством поворотов Суммарный набор высоты на 5-километровом круге составляет 90 м или, в среднем, 18 м на километр. Сложных подъемов и спусков практически нет, трасса хорошо подходит для тренировки детей и начинающих лыжников. Расстояние от любой точки трассы до стартового городка не превышает 500 – 600 метров. На трассе есть отрезок 2,5 км с искусственным освещением. Известно, что свет есть как минимум до 21:00. Раздевалки на трассе нет. Тренирующиеся часто оставляют рюкзаки на заборе у старта.',
        link: ['https://vk.com/skipargolovo', 'https://vk.com/topic-31256601_34731570?offset=1120'],
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
        sneg: 'igora',
        info: 'В 2021 на шоссейно-кольцевой автотрассе Игора открылся лыжный парк для всех поклонников беговых лыж. Лыжня, проложенная на главной трассе "Игора Драйв" длиной 4100 м, шириной от 10 до 15 м и перепадом высот в 17 м.',
        length: 5.6,
        date: '2025-01-19',
        link: ['https://drive-igora.ru/events/lyzhnaya-gonka-igora-drayv/', 'https://peterburg2.ru/restplaces/lyzhnya-na-gonochnoy-trasse-igora-drive-30950.html'],
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
        sneg: 'vyborg',
        length: 9.2,
        date: '2025-02-22',
        link: 'https://vk.com/vyborgmarathon',
        results: 'https://reg.o-time.ru/race/25053',
        info: 'Живописная трасса, круги 1.5км, 3км, 5км и 10км. Есть рельеф. Освещено 3км. Есть раздевалка, туалет (рядом с базой). Парковка: три площадки, одна у здания базы и две прям около зоны старта. В сумме наверное около ста машиномест, может больше. в день старта к 11-ти уже битком. Проката нет. Зимой рядом поддерживается прорубь.',
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
        sneg: 'dudergof',
        length: 3.8,
        info: 'Отличная гора практически в черте города! Трасса готовится бураном лыжной секции. Нарезается лыжня для классики. Можно гулять с собаками.',
        link: ['https://vk.com/svdudergof', 'https://vk.com/topic-64543679_29554586?offset=80'],
        gpx: 'tracks/ski/mozhaika_dudergof_ski_omaps.gpx',
        pics: ['ski/mozhaika',3],
        ski_kind: 'SKATE_ROUTE',
        video: 'https://www.youtube.com/watch?v=5_JF6VXnPgE',
        type: ['SKI']
    },
    {
        name: 'Дудергофские медведи',
        sneg: 'duderbears',
        length: 2.9,
        date: '2024-03-02',
        info: 'Практически плоская лыжная трасса по полям. Спортивный клуб «Дудергофские медведи»',
        link: ['https://vk.com/dudergof_bear', 'https://t.me/dudergofbears'],
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
        sneg: 'kirovsk-lo',
        length: 3.5,
        link: 'https://vk.com/club85930070',
        gpx: 'tracks/ski/kirovsk_lenoblast_ski_omaps.gpx',
        video: 'https://www.youtube.com/watch?v=FyM7SZGr2bc',
        type: ['SKI']
    },
    {
        name: 'Гатчинский лыжный марафон',
        sneg: 'gatchina',
        info: 'Разнообразная трасса большой протяженности. Присутствует рельеф. Трасса готовится нерегулярно. Проводятся соревнования. Есть прокат прогулочных лыж (300р/ч, расположен в небольшом вагончике), без залога, работает до 17:00. В выходные желающих больше чем лыж. Можно оставить вещи. Туалета нет.',
        length: 13.5,
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
        sneg: 'shtol',
        length: 1.9,
        link: 'https://vk.com/luga_ski_run',
        gpx: 'tracks/ski/luga_shtol_omaps.gpx',
        info: 'Озеро, лес, спортзалы. Все условия для кроссов, зимой есть освещаемая лыжная трасса. Хорошая столовая. Роллерная трасса (асфальт). Есть прокат лыж. Лыжи в наличие простые. Есть отрисованные спорткарты для ориентирования.',
        owner: 'LUGA_RUN_SKI',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Луга, Розановский круг',
        sneg: 'rozanov-ski',
        info: 'Трасса в лесу, недалеко от оз. Омчино. Выраженный рельеф. Накатывается клубом LUGA RUN SKI TEAM.',
        length: 3.4,
        link: 'https://vk.com/luga_ski_run',
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
        sneg: 'venki-lomonosov',
        length: 2.1,
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
        sneg: 'yarvi',
        length: 13.5,
        link: ['https://jarviresort.ru/', 'https://jarviwinterski.jarviresort.ru/', 'https://ski.jarviresort.ru/', 'https://t.me/jarvi_resort', 'https://vk.com/jarvi_resort'],
        gpx: {
            'Все лыжни':'tracks/ski/peski_jarvi_total_omaps.gpx',
            'Лыжероллерка':'tracks/ski/peski_jarvi_omaps.gpx'
        },
        info: 'Трасса слабо холмистая, освещённая, виражи с необходимым уклоном, а на поворотах натянута яркая защитная сетка. Ширина 3-4 метра. Зимой трасса готовится ратраком. Летом роллерка, проводятся соревнования и тренировки. Проката нет.',
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
        sneg: 'primorsky-sosnobybor',
        gpx: 'tracks/ski/sosnovy_bor_primorsky_park_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Сосновый Бор, Малахит',
        sneg: 'malahit-sosnovybor',
        info: 'Лыжная трасса, роллерка, биатлон. Трасса проходит в сосновом лесу, достаточно широкая и ровная. Максимальная протяженность круга 2 км, есть срезки на более короткие круги, на развилках стоят указатели. Рельеф присутствует, особенно на последней петле. Новичкам, пожалуй, нужно с отсторожностью. Есть искуственное освещение, работает до 20-21 часа. На стадионе замечены 2 снеговые пушки, но нет результатов их работы хотя погода стояла морозная и малоснежная. Из минусов: узкая и разбитая грунтовка до стоянки у стадиона. Но наверно можно туда не заезжать, а оставить машину у шоссе возле шлагбаума. Хорошие и современные раздевалки. Туалеты на улице. Есть отзывы, что могут быть проблемы с доступом на трассу в летнее время. тел. +7 (921) 983-87-80',
        length: 2.6,
        link: ['https://vk.com/club.sb_biathlon', 'https://vk.com/malahitbiathlon'],
        gpx: 'tracks/ski/sosnovy_bor_malakhit_omaps.gpx',
        pics: ['ski/malakhit',1],
        type: ['SKI']
    },
    {
        name: 'Тихвинский лыжный марафон',
        sneg: 'tihvin',
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
        sneg: 'tihvin',
        info: 'Лыжероллерная трасса.',
        gpx: 'tracks/ski/tikhvin_fisheva_omaps.gpx',
        logo: 'tikhvin.gif',
        type: ['SKI']
    },
    {
        name: 'Шапки',
        sneg: 'shapki-sport',
        length: 4.4,
        link: ['https://vk.com/ski_shapki', 'https://m.vk.com/ski_shapki?ysclid=mljb9f6o107075213'],
        info: 'Коньковый круг от лыжной базы. Лыжная база в здании бывшей сельской школы. Есть поселение (домики), кафе, прокат (350р).',
        gpx: 'tracks/ski/shapki_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Шапки, Лыжные стрелы 2025/2026',
        sneg: 'shapki-ls',
        length: 14.3,
        link: ['https://vk.com/wall-210604144_10259', 'https://kfis.gov.spb.ru/massovyj-sport/fizkulturnye-meropriyatiya-dlya-naseleniya/lyzhnye-strely/', 'https://vk.com/l_strela'],
        info: 'Работают лыжные дистанции 5 и 10 км на запасной трассе (проход к старту в 500 метрах от ж/д станции в сторону базы отдыха Пикник). Точка начала катания проекта Лыжные стрелы около ст. Шапки.',
        gpx: 'tracks/ski/shapki_ski_arrows_2025_omaps.gpx',
        pics: ['ski/shapki_arrows',1],
        ski_kind: 'CLASSIC_ROUTE',
        video: 'https://www.youtube.com/watch?v=6yvlyBnY_zs',
        type: ['SKI']
    },
    {
        name: 'Приозерск',
        sneg: 'priozersk',
        length: 2.2,
        info: 'Приозерская городская лыжня. Широкая ровная трасса с одной небольшой горкой.',
        gpx: 'tracks/ski/priozersk_lenoblast_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Волхов',
        sneg: 'volhov',
        length: 2.6,
        info: 'Неплохая для небольшого городка лыжная трасса при лыжной базе "Двугорье". Трасса с рельефом. Помещение, раздевалка, автомат с горячим чаем и кофе, туалет. Есть прокат. Лыжного сервиса нет.',
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
        sneg: 'lodeynoe-pole',
        length: 5.7,
        gpx: 'tracks/ski/lodeynoe_pole_ski_omaps.gpx',
        info: 'Трасса рядом с озером со звучным именем Озёрко. Открыта для всех. Проводятся тренировки местной спортшколы. Максимальный круг 5 км. Рельефная. Широкая. Готовится регулярно под конек и под классику, но когда-то получше, а когда-то похуже. Частично с освещением. Иногда проводятся соревнования. Есть прокат. Ассортимент проката "любительский" (фото смотрите в отзывах на Google). Удобно ехать из Москвы и обратно - на ночных поездах. Поселиться можно в гостиницах в городке (ближайшая на ул. Гагарина) или в частном секторе к югу от железной дороги. На самой базе жилья нет. Недалеко есть крытая ледовая арена (открыта для массового катания вечером по выходным, с октября по апрель) и открытый каток с прокатом коньков. Телефон лыжной базы: +7 (81364) 2-64-63',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Петрозаводск, Курган',
        sneg: 'kurgan',
        length: 10.5,
        link: ['https://csp-karelia.ru/objektisporta/kurgan/', 'https://vk.com/fizkult_10'],
        gpx: 'tracks/ski/ptz_kurgan_ski_omaps.gpx',
        info: 'Петрозаводск: РСК "Курган" им. Федора Терентьева На территории РСК «Курган» расположены: - стартовый городок - биатлонное стрельбище - оружейная комната - лыжероллерная трасса шириной 7,8 м протяженностью 2,5 км - лыжные трассы различной протяженности – от 1 до 10 км, в том числе с освещением –2,5 км - регулярная подготовка ратраком под конек и классику - камеры хранения бесплатно, вход в SKILAB - wax - кабины - столовая - пункт проката спортивного инвентаря и услуги сервиса в помещении SKILAB (график работы: пн-вс с 10:00 до 20:00) - гостиница Расстояние от центра города 3 км. Адрес: г. Петрозаводск, Курганский проезд, д.3 Ближайшая ост. общественного транспорта: СК "Курган". График работы: с 9:00 до 21:00. (c)Egorova Viktoria В Петрозаводске возможны разные варианты размещения для лыжников. Не обязательно привязываться именно к лыжной гостинице на Кургане. Можно например снять квартиру в микрорайоне Древлянка в пешей доступности от соединения трасс Фонтаны и Курган. Трассу для катания можно выбрать под свои цели и предпочтения. Курган это чисто спортивная трасса. Качество подготовки на Фонтанах похуже, но зато рельеф поспокойнее, народу поменьше, спортсменов и соревнований нет и вообще как-то более по-домашнему и душевно. (c)Александр Чистов Трасса Фонтаны имеет лыжное соединение с трассой Курган. Перейти с Фонтанов на Курган можно 2мя способоми: 1. Спуститься к мосту под Лесным проспектом за домиком Skilab, затем немного подняться до дороги в лесу, которую чистит трактор и по ней двигаться вправо и метров через 400 справа будет речка и железный мост через неё. От моста взять чуть правее в гору и вскоре будет одна из петель. Если дальше подниматься прямо вверх, то упретесь в заднюю часть лыжной базы. Вход на стадион будет правее. 2. Через 100 метров от стартовой поляны стоит указатель налево на Курган и начинается узкая тропинка. Вдоль приложена самотопная лыжня. Если начать двигаться по тропинке то слева будет манеж и лошади. Через некоторое время тропинка выйдет на просеку ЛЭП, которую по ней надо пересечь и затем она выйдет к мосту через речку и эстакаде Лесного проспекта. Сразу за ним немного вверх и правее одна из петель Курганов. От старта на стадион это примерно 1 км. От Фонтанов на Курган можно перейти любым из способов. А из Кургана обратно очень не рекомендую способ 2 т.к . придётся после моста ехать все время в гору по кривой пешеходной тропинке к старту Фонтанов. (c) Serg',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI'],
        video: 'https://www.youtube.com/watch?v=A70mYW2GTr4',
        owner: 'KARELIA_SKI'
    },
    {
        name: 'Петрозаводск, Фонтаны',
        sneg: 'fontany',
        info: 'Лыжная трасса "Фонтаны" Общая протяженность около 21 км. Освещенная часть: 2.5 км в одну сторону до Развилки (что-то схожее с "Тусовочным перекрестом" в Ромашково). Лыжная трасса регулярно готовится снегоходом с прицепным устройством под конек и классику. На территории стартового городка находятся кафе, теплая раздевалка (шкафчик 100р), туалет, прокат и сервис в здании SKILAB (адрес: Лесной проспект, д.3, график работы: пн-вс с 9:00 до 21:00). Ближайшая остановка общ. транспорта: "Трасса "Фонтаны". (c)Egorova Viktoria В Петрозаводске возможны разные варианты размещения для лыжников. Не обязательно привязываться именно к лыжной гостинице на Кургане. Можно например снять квартиру в микрорайоне Древлянка в пешей доступности от соединения трасс Фонтаны и Курган. Трассу для катания можно выбрать под свои цели и предпочтения. Курган это чисто спортивная трасса. Качество подготовки на Фонтанах похуже, но зато рельеф поспокойнее, народу поменьше, спортсменов и соревнований нет и вообще как-то более по-домашнему и душевно. (c)Александр Чистов Трасса Фонтаны имеет лыжное соединение с трассой Курган. Перейти с Фонтанов на Курган можно 2мя способоми: 1. Спуститься к мосту под Лесным проспектом за домиком Skilab, затем немного подняться до дороги в лесу, которую чистит трактор и по ней двигаться вправо и метров через 400 справа будет речка и железный мост через неё. От моста взять чуть правее в гору и вскоре будет одна из петель. Если дальше подниматься прямо вверх, то упретесь в заднюю часть лыжной базы. Вход на стадион будет правее. 2. Через 100 метров от стартовой поляны стоит указатель налево на Курган и начинается узкая тропинка. Вдоль приложена самотопная лыжня. Если начать двигаться по тропинке то слева будет манеж и лошади. Через некоторое время тропинка выйдет на просеку ЛЭП, которую по ней надо пересечь и затем она выйдет к мосту через речку и эстакаде Лесного проспекта. Сразу за ним немного вверх и правее одна из петель Курганов. От старта на стадион это примерно 1 км. От Фонтанов на Курган можно перейти любым из способов. А из Кургана обратно очень не рекомендую способ 2 т.к . придётся после моста ехать все время в гору по кривой пешеходной тропинке к старту Фонтанов. (c) Serg',
        length: 21,
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
        sneg: 'chaika-smolensk',
        length: 3.4,
        gpx: 'tracks/ski/smolensk_chaika_omaps.gpx',
        link: ['http://www.fbso.su/trenirovochnaya-baza/', 'http://www.chaika67.ru/', 'https://vk.com/chaika67'],
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
        link: ['https://gabo.su/shemyi-lyizhnoy-trassyi', 'http://gabo.su/'],
        source: 'https://www.stremglav.fun/tracks/gabo',
        info: 'Лыжный центр в Дмитровском округе Московской области. Несколько трасс разной протяжённости и сложности. Самый длинный круг — «Марафонец». Ратрак, снегоход с навесными, освещенный участок, классические участки',
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
        sneg: 'demino',
        length: 29.3,
        region: 'YAROSLAVL',
        link: ['https://www.russialoppet.ru/events/demino2025.html', 'https://demino.com/category/sport', 'https://www.skisport.ru/news/biathlon/117549/'],
        info: 'Лыжный центр в Рыбинском районе Ярославской области. Марафонский круг. Роллерка 5км. Стрельбище.',
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
        sneg: 'barviha',
        info: 'Камерная лыжная трасса Клуба ветеранов спорта "Барвиха". Небольшая трасса, очень ухоженная, поддерживается круглогодично в хорошем состоянии. Навита вокруг неглубокого оврага, поэтому вся состоит из небольших подьемов и выкатов. Режется очень грамотно, хоть и не каждый день. Готовится снегоходом с навесными. Трасса характерна тем, что на значительном протяжении (почти все ровные места) полотна под классику и под конек идут параллельно, но отделены одно от другого.',
        length: 4.1,
        source: 'stremglav',
        link: ['https://skicup.ru/', 'http://skicup.ru/'],
        region: 'MSK',
        gpx: 'tracks/ski/barvikha_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Красногорск',
        sneg: 'krasnogorsk',
        length: 23,
        link: ['https://masouzorky.ru/lizhn', 'https://www.skisport.ru/forum/cross-country-routes/93095/', 'http://xn--90advenxk.xn--p1ai/trassy-krasnogorska'],
        source: 'https://www.stremglav.fun/tracks/krasnogorsk',
        region: 'MSK',
        info: 'Длинный лыжный маршрут в Красногорске. Снегоход, прицепные устройства',
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
        source: 'stremglav',
        link: ['https://skimsu.ru/planernaya', 'https://mosskis.ru/21/'],
        region: 'MSK',
        info: 'Лыжная трасса в районе ОУСЦ «Планерная».',
        gpx: 'tracks/ski/planernaya_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'ЦСП Измайлово',
        sneg: 'vostochny',
        length: 6.7,
        link: ['https://лк-измайлово.рф/trassi/', 'https://vk.com/ski_east', 'https://www.skisport.ru/forum/cross-country-routes/34626/'],
        source: 'stremglav',
        region: 'MSK',
        info: 'Лыжная трасса ЦСП «Измайлово».',
        gpx: 'tracks/ski/izmailovo_csp_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Истра, Соколиная гора',
        sneg: 'sokolinagora',
        length: 3.8,
        source: 'stremglav',
        link: 'https://visitistra.ru/ЗИМА-В-ИСТРЕ/',
        region: 'MSK',
        info: 'Лыжная трасса «Соколиная гора».',
        gpx: 'tracks/ski/istra_sokolinaya_gora_omaps.gpx',
        type: ['SKI']
    },

    {
        name: 'Альфа-Битца',
        sneg: 'bitza',
        length: 23.4,
        region: 'MSK',
        source: 'stremglav',
        link: 'https://bitza-sport.ru/',
        info: 'Лыжный центр в Битце. Снегоход, прицепные устройства, ратрак, оснежение, раздевалка, прокат, сервис, шашлык',
        gpx: 'tracks/ski/alfa_bitsa_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Измайлово, «Авангард»',
        length: 8.3,
        sneg: 'izmailovo',
        region: 'MSK',
        link: ['https://www.stadionavangard.ru/ski-map', 'http://лк-измайлово.рф/trassi/', 'https://www.skisport.ru/forum/cross-country-routes/93432/'],
        source: 'stremglav',
        info: 'Лыжная трасса спортивного комплекса «Авангард» в Измайлово. Трасса готовится ратраком. Лыжный комплекс стадиона Авангард открыт с 10 до 22 часов. В сезон 24-25 года планируется начало работы с 13-14 декабря. В 70м от трассы есть теплый туалет в помещении проката спортинвентаря.',
        gpx: 'tracks/ski/avangard_izmailovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Борисово',
        sneg: 'borisovo',
        length: 7.5,
        region: 'MSK',
        link: ['https://borisovo.club/', 'https://vk.com/borisovo.club', 'https://www.skisport.ru/forum/cross-country-routes/90833/'],
        source: 'stremglav',
        gpx: 'tracks/ski/borisovo_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Бутово',
        sneg: 'polyany',
        info: 'Для подготовки лыжных трасс используется ратрак. Протяженность трасс от 1 до 17 км. Есть роллерная трасса, освещение на ней, раздевалка, душ, прокат, сервис, кафе.',
        length: 17.4,
        region: 'MSK',
        source: 'stremglav',
        link: ['https://polyanybutovo.ru/', 'https://t.me/MakoveevAndreybiathlon1', 'https://vk.com/club218008245', 'https://t.me/+EIq8n4BDrYBiYzFi'],
        gpx: 'tracks/ski/butovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Подольск, Дубровицы',
        sneg: 'dubrovitsy',
        info: 'Роллерка, освещение. Асфальтовый круг 3 км, (3 спуска и подьема, все пологие), есть срезки на 500, 800м, 1 км и 2 км. Петля 5 км в асфальтовой крошке, там на вело или бегом). Парковка, раздевалки(только для спортшколы), кафешка. Рельеф небольшой.',
        length: 4.6,
        region: 'MSK',
        source: 'stremglav',
        link: ['https://skipodolsk.ru/track', 'https://www.skisport.ru/forum/cross-country-routes/92923/', 'https://dubrovitsi.ru/les', 'https://t.me/+wZGBa72nhlgxNjgy'],
        gpx: 'tracks/ski/dubrovitsy_podolsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'ГТОК «Снегири»',
        length: 11.4,
        sneg: 'snegiri',
        region: 'MSK',
        link: 'https://гтоклуб.рф/trassy',
        source: 'stremglav',
        info: 'Лыжная трасса ГТО-клуба «Снегири».',
        gpx: 'tracks/ski/gto_snegiri_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Касарка, Переславский район',
        sneg: 'kasarka',
        length: 25.8,
        region: 'YAROSLAVL',
        link: ['https://admpereslavl.ru/sportsmeny-na-start', 'https://vk.com/public204355803', 'https://www.skisport.ru/forum/cross-country-routes/67631/'],
        source: 'stremglav',
        info: 'Лыжная трасса в районе посёлка Залесский. Рядом с трассой есть парк-отель: https://yandex.com/maps/-/CPEVU25s',
        gpx: 'tracks/ski/kasarka_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Кашира, ДС «Юбилейный»',
        sneg: 'kashira',
        length: 5.6,
        region: 'MSK',
        link: 'https://sk-kashira.ru/objects/362-mau-sportklub-kashira-imeni-npeliseeva-ds-jubilejnyj.html',
        source: 'stremglav',
        info: 'Лыжная трасса спортивного комплекса «Юбилейный». Трасса освещена на протяжении 2,7км, готовится снегоходом.',
        gpx: 'tracks/ski/kashira_yubileyny_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Кирики-Улита',
        sneg: 'kiriki-ulita',
        info: 'Ратрак, лыжная база, северное гостеприимство! Трасса большей частью несложная, с небольшими спусками и подъёмами, кроме 3 км участка Пик, где в виде ромашки расположены 4 подъема. Последние 2 км автодороги к месту старта от Пошехонского шоссе достаточно узкие, а последние 500 м движение только одностороннее. Рядом с началом трассы к массовым стартам организуется большая парковка на 250 машин.',
        length: 20.9,
        region: 'VOLOGDA',
        source: 'stremglav',
        link: ['https://vologdamarafon.ru/marafon/покровский-классический-марафон/', 'https://vk.com/kirikiulita35'],
        gpx: {
            'Марафон (12км)':'tracks/ski/kiriki_ulity_ski_omaps.gpx',
            '2025':'tracks/ski/kiriki_ulita_2025_final_ski_omaps.gpx'
        },
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Комёла',
        sneg: 'komela',
        info: 'Платная парковка, теплый ангар, прокат, кафе, туалеты, коттеджи. Тел. +7 (8172) 70-53-70',
        length: 9.4,
        region: 'VOLOGDA',
        link: ['https://travel-vologda.ru/napravleniya/vologodskaya-oblast/za-vpechatleniyami/czentr-sporta-i-otdyixa-komela', 'https://vk.com/35komela'],
        source: 'stremglav',
        gpx: 'tracks/ski/komela_vologda_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Троицк, ГСОБ «Лесная»',
        sneg: 'troitsk',
        length: 16.8,
        region: 'MSK',
        link: ['https://forestrout.ru/index.php/o-nas/lyzhnaya-trassa', 'https://www.skisport.ru/forum/cross-country-routes/93541/', 'https://t.me/bazalesnaya', 'https://t.me/skitrail_troitsk'],
        source: 'stremglav',
        info: 'Лыжная трасса спортивной базы «Лесная». Лыжная трасса представляет собой пять взаимовключающих кругов длиной 1, 2, 3, 5 и 10 км. Трасса размечена табличками с указанием длины маршрута и направления движения. Для катания в вечернее время оборудован освещённый круг длиной 3 км (освещение работает ежедневно с наступления сумерек до 23:00). Все круги проложены по лесу. Круги 1, 2, 3 и 5 км имеют равнинный рельеф. Круг 10 км включает 10 спусков-подъёмов (общий набор высоты – 165 м). Трасса укатывается регулярно два раза в неделю по понедельникам и пятницам, а также после выпадения снега, порчи трассы квадроциклами и мотоциклами, перед проведением соревнований. Ширина трассы 4,5–6,5 м, под коньковый ход 2–4 метра, по краям нарезаются две нитки классической лыжни. Лыжная база находится рядом со стартовой поляной, имеется тёплая раздевалка (7 x 13 м), работают прокат лыжного инвентаря, буфет. Движение по лыжной трассе рекомендуется по часовой стрелке. Запрещается свободный выгул собак.',
        gpx: 'tracks/ski/lesnaya_troitsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Вологда, «Локомотив»',
        sneg: 'loco-vologda',
        length: 9.9,
        region: 'VOLOGDA',
        source: 'stremglav',
        info: 'Лыжная трасса спортивного комплекса «Локомотив». Общедоступная раздевалка и туалет в капитальном помещении стадиона. Парковка на соседних улицах.',
        gpx: 'tracks/ski/lokomotiv_vologda_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Нижнецарицынская',
        sneg: 'nizhetsaritsynskaya',
        info: 'Ратрак',
        length: 7,
        region: 'MSK',
        link: ['https://www.skisport.ru/forum/cross-country-routes/93362/', 'https://tsaritsyno-museum.ru/park/things-to-do/lyzhnye-trassy/'],
        source: 'stremglav',
        gpx: 'tracks/ski/nizhne_tsaritsynskaya_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Нововоронино',
        length: 13,
        sneg: 'novovoronino',
        region: 'MSK',
        link: 'https://vk.com/novovoronino',
        source: 'stremglav',
        gpx: 'tracks/ski/novovoronino_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Ромашково',
        sneg: 'romashkovo',
        length: 28.4,
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
        sneg: 'fryazino-desyatka',
        length: 5,
        region: 'MSK',
        link: ['https://t.me/+PgGfc44411U3OTgy', 'https://vk.ru/club215956547', 'https://www.skisport.ru/forum/cross-country/33761/'],
        source: 'stremglav',
        info: 'Лыжная трасса «Щёлковская Десятка». Трасса существует более 60 лет. Длина лыжной трассы 5 км, перепад высот на склоне до 15 м. 5 полноценных подъемов, пригодных для конькового хода (ширина от 3 до 4 м). Удачная планировка выкатов на спусках. Располагается в сосново-еловом лесу, закрыта от ветра. В последние 25 лет поддержание трассы ведется исключительно силами энтузиастов на свои средства. Этим занимается тренер Клуба спортивного ориенирования г. Фрязино своими силами и в свободное от работы время, ему помогает несколько человек.',
        gpx: 'tracks/ski/shchelkovo_desyatka_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Слюдорудник',
        length: 6.8,
        region: 'CHELYABINSK',
        source: 'stremglav',
        gpx: 'tracks/ski/slyudorudnik_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Ступино, Соколиная Пустынь',
        sneg: 'sokolova-pustyn',
        length: 3.3,
        region: 'MSK',
        link: ['https://m.mosoblles.ru/press-center/current_news/?id=10360', 'https://www.skisport.ru/forum/cross-country-routes/62047/', 'https://www.skisport.ru/forum/cross-country-routes/55055/'],
        source: 'stremglav',
        gpx: 'tracks/ski/sokolinaya_pustyn_stupno_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Дмитров, ЦЗВС',
        sneg: 'czvs-dmitrov',
        length: 11.2,
        region: 'MSK',
        link: ['https://www.dmitrov.ru/', 'https://vk.com/czvs2020', 'https://www.skisport.ru/forum/cross-country-routes/87521/'],
        source: 'stremglav',
        info: 'Лыжная трасса Центра зимних видов спорта в Дмитрове. Освещенная лыжероллерная трасса протяженностью 2.4км. Освещенные лыжные трассы протяженностью 3 и 5 км.',
        gpx: {
            '1':'tracks/ski/tszvs_dmitrov_ski_omaps.gpx',
            '2':'tracks/ski/tszvs_dmitrov_2024_ski_omaps.gpx'
        },
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Климовск, Весенняя',
        sneg: 'klimovsk',
        length: 16.8,
        region: 'MSK',
        link: 'https://www.skisport.ru/forum/cross-country-routes/19110/',
        source: 'stremglav',
        info: 'Лыжная трасса в районе станции Весенняя в Климовске. Трасса регулярно укатывается Бураном под конек и классику. Есть и равнина и рельефный круг 5 км.',
        gpx: 'tracks/ski/vesennyaya_klimovsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Вороново',
        sneg: 'voronovo',
        info: 'Ратрак.',
        length: 11.5,
        region: 'MSK',
        link: ['https://gto.sport.mos.ru/', 'https://vk.com/sportbazavoronovo'],
        source: 'stremglav',
        gpx: 'tracks/ski/voronovo_mo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Апатиты, Атлет',
        region: 'MURMANSK',
        link: ['https://fskatlet51.ru/ly-zhny-e-trassy/shema-ly-zhny-h-trass/', 'http://fskatlet51.ru/ly-zhny-e-trassy/shema-ly-zhny-h-trass/'],
        source: 'stremglav',
        sneg: 'apatity',
        length: 16.3,
        info: 'Лыжные трассы ФСК «Атлет» в Апатитах. Трасса не отсыпана и готовиться начинает не с самого начала сезона, а примерно с нового года. Имеются 2 тренировочные пятикилометровые петли и одна прогулочная. Тренировочные пятерки- "красная" более тяжелая, "синяя" полегче. Обе пятерки всегда прекрасно готовятся, широкие и ровные. Подготовка трасс осуществляется ратраком, каждый участок готовится раз в 2- 3 дня. Есть освещение на протяжении 2,5км. Вход на лыжные трассы бесплатный. Есть раздевалка, прокат, магазин.',
        gpx: 'tracks/ski/apatity_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Тирвас',
        region: 'MURMANSK',
        link: ['https://t.me/tirvas_ski', 'https://vk.com/tirvas'],
        source: 'stremglav',
        sneg: 'tirvas',
        length: 11.9,
        info: 'Лыжные трассы спортивного комплекса «Тирвас» в Хибинах. Общий набор высоты - более 300 метров. Есть трассы 5 км, 3 км и 2,5 км, а также спринтерский круг. Катание по трассе платное, стоит 200 рублей за день, работает с 9:00 до 20:00, но и до и после доступ на трассу физически открыт, и народ катается. Раздевалка и туалет есть, открыты в часы работы комплекса, но я не пользовался. Доехать до трассы можно на бесплатном автобусе СОК Тирвас (главное места остановок и расписание на яндекс-картах не смотреть - там не всё верно) или на такси или на лыжах пару километров по буранке от остановки обычного автобуса. Расписание автобуса тут https://m.vk.com/tirvas В самом санатории есть столовая по системе "шведский стол", вход стоит 500 рублей, оплачивается картой на турникете. Завтрак с 7 до 10, обед с 12 до 16, ужин с 18 до 21.',
        gpx: 'tracks/ski/tirvas_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Малиновка',
        region: 'ARKHANGELSK',
        link: ['https://ski-malinovka.ru/', 'http://vodnik29.ru/?ELEMENT_ID=84209'],
        source: 'stremglav',
        sneg: 'malinovka',
        length: 38,
        info: 'Лыжный центр в Архангельской области. Роллерка, освещение, ратрак.',
        gpx: 'tracks/ski/malinovka_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Алдан, ЦЗВС',
        region: 'SAKHA',
        source: 'stremglav',
        sneg: 'aldan',
        length: 11.4,
        info: '"Самый ранний снег в России". В 2011 построен центр зимних видов спорта с комфортабельной гостиницей, спортивным и тренажерным залами, беговой дорожкой, медико-восстановительным центром. Качественные лыжные трассы.',
        gpx: 'tracks/ski/aldan_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Ханты-Мансийск, ЛБК',
        region: 'KHMAO',
        link: ['https://ugramegasport.ru/', 'https://ugramegasport.ru/object/czvs/'],
        source: 'stremglav',
        sneg: 'hanty',
        length: 10.3,
        info: 'Лыжно-биатлонный комплекс имени А.В. Филипенко. Общая протяженность лыжных трасс более 15 км. Комплекс располагается в центральной части города. Общая вместимость объекта 15 000 зрителей, в т.ч. на стационарных трибунах 9 700 зрителей. Наличие инфраструктуры и лицензия категории «А» международного союза биатлонистов. Введен в эксплуатацию в 1997 г. Обзор катания в Ханты-Мансийске Главное • 2 трассы: лыжно-биатлонный комплекс и «Долина ручьев». • На ЛБК тренируются сборные, но есть время для свободного катания: 13:00–15:00 и 19:00–21:00 • «Долина ручьев» прогулочная, подходит для разнообразия Как добраться? • 3 часа лета из Москвы • Аэропорт прямо в городе — остается только короткая поездка на такси. Проживание • Гостиница «Олимпийская» (ближе к «Долине ручьев», на ЛБК нужен трансфер или такси), есть столовая • Можно снять квартиру прямо у трассы ЛБК, максимально удобно Питание • Городские кафе, доставки • Сеть недорогих блинных столовых • На базе есть столовая (доступ не всегда простой из-за спортсменов) • В «Олимпийской» работает столовая, оценка по разнообразию — 4/5',
        gpx: 'tracks/ski/hanty_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Долина Уюта',
        region: 'MURMANSK',
        source: 'stremglav',
        sneg: 'dolina-uyuta',
        length: 34,
        info: 'Лыжные трассы стадиона «Долина Уюта» в Мурманске.',
        gpx: 'tracks/ski/dolina_uyuta_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Раубичи',
        region: 'BELARUS',
        link: 'https://www.rau.by/',
        source: 'stremglav',
        sneg: 'raubici',
        length: 9.4,
        info: 'Белорусский республиканский центр олимпийской подготовки по зимним видам спорта высшей международной категории А. Здесь прошли три чемпионата мира по биатлону 1974, 1982 и 1990 годов. Инфраструктура представлена горнолыжным спуском, комплексом лыжных трамплинов (20, 40 и 60 метров) и акробатическим склоном, на котором в своё время проходили этапы Кубка Европы по фристайлу. Здесь есть лыжные трассы повышенной сложности общей протяжённостью 20,5 км, соответствующие мировым стандартам, стрельбище, оборудованное 36 механическими мишенными установками. В 2009 году открылся крытый каток. Есть лыжероллерная трасса со специальным покрытием длиной 6,2 км и шириной 3,3 м, роликодром для учебно-тренировочных занятий конькобежцев, спортивный корпус с тренажёрным и игровым спортзалами, площадки для футбола, волейбола, баскетбола, гандбола и теннисные корты с искусственным покрытием. ТАкже здесь находится медицинский центр, в который входят медико-восстановительный комплекс, ряд лечебных кабинетов, шесть саун различного уровня комфортности. Спорткомплекс располагает комфортабельной гостиницей на 190 мест, спортивно-туристическим лагерем из 16 домиков, ресторан, пиццерия и 2 бара. Дополнительные услуги: прокат спортинвентаря (в зимнее время здесь также можно взять снаряжение для беговых лыж, спринты); аренда снегохода; раздевалка; медцентр; оборудованные места для отдыха — поляны с кострищами.',
        gpx: 'tracks/ski/raubici_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Манжерок',
        region: 'ALTAI',
        source: 'stremglav',
        sneg: 'manjerok',
        info: 'Широко накатывается кольцо по периметру озера для конька и классики.',
        length: 3,
        gpx: 'tracks/ski/manjerok_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Семинский перевал, УТЦ',
        region: 'ALTAI',
        link: ['https://vk.com/seminskiy_utc_altay', 'https://vk.com/utcseminskiy'],
        source: 'stremglav',
        sneg: 'seminski',
        info: 'СЕМИНСКИЙ ПЕРЕВАЛ - одно из красивейших мест Горного Алтая. Инфраструктура: горнолыжная трасса с бугельным подъемником; -коттеджи для проживания и гостиницы; -подготовленная трасса для беговых лыж; -бани; -столовая; -кафе-бар; -спортзал (зимой не отапливаемый) -детская ледяная горка; -уличные тренажеры; -освещаемый каток; -прокат горнолыжного инвентаря, коньков, сноутюбов, инвентаря для беговых лыж; -мангалы на всей территории комплекса; -бесплатная парковка. -биатлонное стрельбище -летняя лыжероллерная трасса На территории базы находится столовая и кафе-бар. Тел.: +7 (913) 998-35-38',
        length: 7.6,
        gpx: 'tracks/ski/seminski_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Шижма',
        region: 'KIROV',
        link: ['http://shizhma.com/club/', 'https://vk.com/shizhma'],
        source: 'stremglav',
        sneg: 'shijma',
        info: 'kirov.ski@yandex.ru shizhma.skiclub@yandex.ru',
        length: 12.8,
        gpx: 'tracks/ski/shijma_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Сыктывкар, РЛК им Раисы Сметаниной',
        region: 'KOMI',
        link: 'https://rlk.rkomi.ru/lyjnye_i_lyjerollernye_trassy',
        source: 'stremglav',
        sneg: 'syktyvkar-smetaninoi',
        length: 30.2,
        info: 'Республиканский лыжный комплекс имени Раисы Сметаниной в Выльгорте. Стадион, около 30км идеально подготавливаемых, непростых, и очень красивых лыжных трасс, лыжероллерная трасса длиной около 7км, биатлонное стрельбище, гостиница со столовой, отдельно стоящие деревянные коттеджи. Летом на РЛК хороший асфальт, недавно заменен. Но трасса узковата для любителей, и одна петля довольно опасная. Без нее получается около 6км. Имитационные круги все идеально размечены и подметены, и составляют около 30км.',
        gpx: 'tracks/ski/syktyvkar_smetaninoi_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Сыктывкар, «Динамо»',
        region: 'KOMI',
        source: 'stremglav',
        sneg: 'syktyvkar-dinamo',
        length: 23.7,
        info: 'Лыжные трассы базы «Динамо» в Сыктывкаре. Две трассы соединены между собой просекой под ЛЭП. Освещение. Жить можно в гостинице Олимпиец, в коттеджах.',
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
        info: 'Лыжная трасса на Лебяжьих озёрах в Казани. 5км, в основном равнинное катание, но в дальнем конце петли есть пара лесистых холмов с рельефом. В целом можно охарактеризовать скорее как место для лыжного отдыха нежели чем как для тренировок. Капитальное здание лыжной базы, гардероб, прокат, кафе, туалет во дворе.',
        gpx: 'tracks/ski/lebiajyi_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Подолино',
        length: 9.2,
        region: 'YAROSLAVL',
        link: ['https://podolino.com/lyzhnye-trassy.html', 'https://www.skisport.ru/articles/read/99124/'],
        source: 'stremglav',
        sneg: 'podolino',
        info: 'Лыжные трассы спортивного комплекса «Подолино» под Ярославлем. Гомологированная лыжная трасса 5км. Ратрак, освещение, перепад местности 40м. Есть небольшая роллерка. Прокат, платный вход.',
        gpx: 'tracks/ski/podolino_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Алмаз',
        length: 23,
        region: 'RYAZAN',
        link: ['https://t.me/biathlon_almaz', 'https://m.vk.com/rzn_biathlon', 'https://www.skisport.ru/forum/cross-country-routes/79517/', 'https://ryazan.camera/biatlonnyj-kompleks-almaz-ryazan.html'],
        source: 'stremglav',
        sneg: 'almaz',
        info: 'Лыжные трассы биатлонного комплекса «Алмаз» под Рязанью. Биатлонный стадион. Роллерка, оснежение. Время работы комплекса с 9 до 21. Стоимость выхода на лыжную трассу 250р/день, стоимость абонемента на месяц 2500р. Рядом находится Экопарк Поляны. Возможно размещение на семейный или коллективный отдых рядом с трассой: https://ecopark-ryazan.ru/',
        gpx: 'tracks/ski/almaz_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Алика Тульского',
        length: 56,
        region: 'NSK',
        link: ['https://roo-lls.ru/', 'https://ski.inp.nsk.su/misc/base.html'],
        source: 'stremglav',
        sneg: 'atulskogo',
        info: 'Сеть лыжных трасс базы имени Алика Тульского в Новосибирске. График работы: вт. - вс. с 9.00 до 17.00, тел. (383) 333-15-99 Прокат.',
        gpx: 'tracks/ski/atulskogo_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Локомотив',
        length: 7,
        region: 'NSK',
        link: ['http://loko54.ru/', 'https://vk.com/club1379761?w=club1379761'],
        source: 'stremglav',
        sneg: 'lokomotiv-nsk',
        info: 'Лыжные трассы базы «Локомотив» в Новосибирске. Трассы 2км, 5 км. Конек, классика. База работает круглогодично. Освещаемая лыжня, каток, горки, теннисные корты, пляжная зона с бассейном и жезлонгами, стоянка. Есть кафе, ресторан Прокат: лыжи, коньки, плюшки, снегоходы - зимой; ролики, велосипеды(горные, семейные, детские), самокаты, скейтброды - летом. график работы вт. - вс. с 9.00 до 21.00; тел. (383) 229-57-99. Как добраться: автобус № 95; маршрутки № 2, 19, 25 (ост. «ПКиО Заельцовский»).',
        gpx: 'tracks/ski/lokomotiv_nsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Бугринская роща',
        length: 8,
        region: 'NSK',
        link: ['https://sport.nstu.ru/sports_halls/ski_base/', 'https://yandex.com/maps/-/CPq1jQ0c', 'https://yandex.com/maps/-/CPq1jFn6', 'https://vk.com/skisibir', 'https://t.me/ski_sibir', 'https://yandex.com/maps/-/CPq1nRKY'],
        source: 'stremglav',
        sneg: 'bugrinskaya',
        info: 'Лыжные трассы Бугринской рощи в Новосибирске. ЛБ Сибирь: Кировский район, ул. Западная, 2а Есть прокат, График работы ежедневно с 9.00 до 17.00; тел. +7-913-063-77-70; Есть прокат, график работы ежедневно с 10.00 до 18.00, тел.: +7-923-226-70-06, (383) 213-86-52;',
        gpx: 'tracks/ski/bugrinskaya_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Биатлонный комплекс',
        length: 10.4,
        region: 'NSK',
        link: 'https://vk.com/biatlonnbk',
        source: 'stremglav',
        sneg: 'biatlonka-nsk',
        info: 'Лыжные трассы Новосибирского биатлонного комплекса. Тел. 8 (383) 261-88-39',
        gpx: 'tracks/ski/biatlonka_nsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Академгородок',
        region: 'IRKUTSK',
        source: 'stremglav',
        sneg: 'akadem-irkutsk',
        length: 3.81,
        info: 'Лыжные трассы Академгородка Иркутского государственного университета. Есть классический и коньковый ход, освещение. Теплого помещения нет, прокат только для студентов ИГУ по студбилету. Трасса бесплатная, освещение горит всю ночь. Трассу готовят только после снегопада, в остальное время там стихийно все затаптывают лыжники. Есть классика и конек.',
        gpx: 'tracks/ski/akadem_irkutsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Динамо',
        region: 'IRKUTSK',
        source: 'stremglav',
        sneg: 'dinamo-irkutsk',
        length: 5.8,
        info: 'Лыжная база «Динамо» в Иркутске. Трасса готовится регулярно под конек и классику. Есть раздевалки и теплое помещение, вход 150 р. режим работы с 9:00 до 21:00 Освещённая трасса 2 км. Есть прокат.',
        gpx: 'tracks/ski/dinamo_irkutsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Вершина Тёи',
        length: 17.3,
        region: 'KHAKASSIA',
        link: 'https://тея19.рф',
        source: 'stremglav',
        sneg: 'vershinatei',
        info: 'Комплекс лыжных трасс в Хакасии, сертифицированных FIS. «Вершина Теи» — это комплекс лыжных трасс в Хакасии, сертифицированных Международной федерацией лыжного спорта (FIS), общей протяженностью 17 км. Трассы расположены на высоте от 1017 до 1200 метров над уровнем моря и подходят для различных соревнований по лыжным гонкам. Общая информация: Название: лыжные трассы «Вершины Тёя». Местоположение: АУ РХ «ЦСП «Тёя», Хакасия. Сертификация: Комплекс соответствует международным стандартам FIS. Протяженность: Общая длина трасс составляет 17 км. Характеристики трасс: Ширина: до 6 метров, с расширениями на подъемах и поворотах. Возможность организации: Возможность организации 8-10 трасс для различных соревнований. Лыжероллерная трасса: Частично объединены с лыжероллерной трассой длиной 5 км для тренировок в бесснежный сезон. Разминочная трасса: Имеются разминочные трассы длиной 1,1 км. Технологическая трасса: Есть отдельная технологическая трасса длиной 2,8 км для обслуживания. Уникальность: Высота: Трассы расположены на высоте 1017-1200 м над уровнем моря. Рельеф: Благоприятный естественный рельеф для лыжников.',
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
        info: 'Лыжная трасса спортивного комплекса «СпортГрад» в районе Лесной Поляны. Есть освещение. Есть где переодеться и перекусить. В комплексе есть прокат лыж и коньков. Есть каток. После тренировки можно попить чай в спорткомплексе.',
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
        info: 'Освещённая лыжная трасса в Мемориальном парке Рязани. Есть летняя лыжероллерная трасса круг 2км. Зимой длина возможных кругов 2км, 3км и 5км. Есть теплые раздевалки и туалеты, время работы точно не известно,но летом, кажется - с 8 до 16-17, пускают бесплатно. Есть шкафчики с ключом. Занимается спортшкола, проводятся соревнования.',
        gpx: 'tracks/ski/memorial_ryazan_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Губаха',
        length: 6,
        region: 'PERM',
        link: ['https://лыжнаябаза.рф/lyzhnye-trassy', 'https://vk.com/publiclbaza'],
        source: 'stremglav',
        sneg: 'gubahalb',
        info: 'Лыжная база в Губахе. Лыжные трассы, бассейн, кафе, гостиница, баня, каток, сноутюбинг, барбекю. Прокат лыж. т. (34248) 4-15-76 gubaha-sport@yandex.ru',
        gpx: 'tracks/ski/gubakha_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Динамо',
        length: 6.5,
        region: 'EKB',
        link: 'https://dinamo-ural.ru/',
        source: 'stremglav',
        sneg: 'dinamo-eburg',
        info: 'Лыжно-биатлонная база «Динамо» в Екатеринбурге. Зимой - лыжи, биатлон, летом - лыже-роллеры, есть асфальтированная трасса. Регулируемый доступ на трассу. Гостиница, стойка-ресепшн тел. +7 (343) 231-18-93 (доб. 104) Проживание в непосредственной близости к спортивным объектам, столовая, баня, номера различной конфигурации.',
        gpx: 'tracks/ski/dinamo_ekaterinburg_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Искра, Ижевск',
        length: 9.6,
        region: 'UDMURTIA',
        link: 'https://vk.com/sbiskra',
        source: 'stremglav',
        sneg: 'iskrizhevsk',
        info: 'Лыжная база «Искра» в Ижевске. Трассы длиной 2, 4, 5 и 7.5 км. Рельеф ровный, без резких подъёмов и спусков. Трассы регулярно подготавливаются. Тарссы размечены. Участок 2км освещен. Лес живописный. Есть скисервис. В прокате выбор лыж от простых до профессиональных. В выходные в прокате бывают очереди. Большая парковка (хотя в выходные народу может быть много). Вход на трассу бесплатный. Парковка 50 руб (оплата осуществляется переводом на на карту сбера, рассчитана на честность людей которые посещают эту лыжную базу). Буфет отсутствует. При базе есть гостиница (хостел). База работает с 9:00 до 21:00. тел. +7 (912) 854-74-14',
        markir: true,
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
        length: 2.1,
        info: 'Лыжная трасса на территории автодрома. Есть прокат (работает только в выходные).',
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
        length: 6.5,
        region: 'ALTAI',
        link: 'https://altai-uor.ru/',
        source: 'stremglav',
        sneg: 'barnaul-lbk',
        info: 'Лыжно-биатлонный комплекс Алтайского училища олимпийского резерва находится в чистой лесной зоне и занимает территорию около 57200 кв. м. Комплекс предназначен для тренировки биатлонистов и лыжников. В состав биатлонного комплекса входит лыжная трасса протяженностью 2.5 км и стрелковый тир на открытом воздухе. Общая протяженность лыжных трасс составляет 6,5км. Есть петли на 2,3 и 5 км. Уровень сложности трасс чуть выше среднего. Возможно новичкам будет сложновато, но есть участок по равнине. Летом - отличная трасса для катания на лыжероллерах, крутые спуски и виражи, удобные трибуны и большое стрельбище, база под охраной, поэтому о своих вещах можно не беспокоиться. Есть прокат снаряжения, парковка.',
        gpx: 'tracks/ski/barnaul_lbk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Уфа, Трамплин',
        length: 3.5,
        region: 'BASH',
        link: 'https://ru.wikipedia.org/wiki/Спортивная_школа_№_33',
        source: 'stremglav',
        sneg: 'tramplin-ufa',
        info: 'Лыжная трасса СШОР №33 по лыжному двоеборью и спортшколы №5 в Уфе. Есть классическая лыжня, освещение и участки с выраженным рельефом. Трасса ухожена, готовилась снегоходом. Ближе к спортшколе есть классика. Рельеф интересный, плоских мест мало. Один из участков проходит по парковым дорожкам, есть освещение.',
        gpx: 'tracks/ski/tramplin_ufa_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'BESTSKI',
        sneg: 'bestskikemerovo',
        length: 2.5,
        region: 'KEMEROVO',
        source: 'stremglav',
        info: 'Лыжный клуб А. Бессмертных в Серебряном бору. Трасса широкая. Красивый бор кругом. Прокат. Внутри всегда есть горячий чай, вода, сушки. Есть кабинки на замке.',
        gpx: 'tracks/ski/bestski_kemerovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Берёзовский, Кемерово',
        sneg: 'berezobski',
        length: 6.9,
        region: 'KEMEROVO',
        source: 'stremglav',
        info: 'Лыжная база имени А. Бессмертных в Берёзовском. Тел. +7 (38445) 3-41-45',
        gpx: 'tracks/ski/berezovsky_kemerovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Бор',
        length: 8.8,
        region: 'KEMEROVO',
        source: 'stremglav',
        info: 'Лыжная база «Бор» в Рудничном бору. Есть небольшая парковка. Старые здания. Тел. +7 (3842) 64-17-05',
        gpx: 'tracks/ski/bor_kemerovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        sneg: 'borkemerovo',
        type: ['SKI']
    },
    {
        name: 'Кузбасский парк',
        length: 2.5,
        region: 'KEMEROVO',
        source: 'stremglav',
        gpx: 'tracks/ski/kuzbass_park_kemerovo_ski_omaps.gpx',
        sneg: 'kuzbasskipark',
        type: ['SKI']
    },
    {
        name: 'Локомотив',
        length: 16,
        region: 'KEMEROVO',
        source: 'stremglav',
        info: 'Физкультурно-спортивный клуб по лыжным гонкам и биатлону «Локомотив». Лыжная база. Удобный подъезд, парковка. Достаточное количество вакскабин. Трасса не из лёгких, но очень интересная. Тел. +7 (3842) 39-00-20; +7-951-169-99-09',
        gpx: 'tracks/ski/lokomotiv_kemerovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        sneg: 'lokokemerovo',
        type: ['SKI']
    },
    {
        name: 'ЛБ Янтарь',
        sneg: 'jantar-tomsk',
        info: 'Подготовленные трассы для лыжников ,отдельная трасса для детей, частично освещена. В корпусе гардероб, автомат с горячими напитками, пункт проката лыж. Тел. +7 (3823) 56-86-96, +7 (3823) 52-90-60',
        length: 9.11,
        region: 'TOMSK',
        link: ['https://t.me/tomskmarathon', 'https://дюсш-егоровой.зато-северск.рф/lb-jantar', 'https://vk.com/club109113892'],
        source: 'stremglav',
        gpx: 'tracks/ski/yantar_tomsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Ижевск, Снежинка',
        sneg: 'snejizhevsk',
        length: 9.6,
        region: 'UDMURTIA',
        source: 'stremglav',
        info: 'Лыжная база Удмуртского государственного университета. Отдельные круги 2км, 3км и 5км. Первая половина каждого кольца - пологий спуск, обратно долгий тягун. Есть платная недорогая парковка, однако можно найти и бесплатные места. Есть место переодеться, взять на прокат лыжи (выбор большой, хороших - нет), есть небольшая простенькая кафешка. Туалет на улице. тел. +7 (3412) 44-05-65',
        gpx: 'tracks/ski/snezhinka_izhevsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Губаха, УХТК',
        sneg: 'gubaha-uhtk',
        length: 9.5,
        region: 'PERM',
        link: ['https://visitgu.ru/marafongubahaski', 'https://visitgu.ru/gonka22'],
        source: 'stremglav',
        gpx: 'tracks/ski/uhtk_gubakha_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'УФОК Кольцово',
        region: 'NSK',
        source: 'stremglav',
        sneg: 'koltsovo',
        gpx: 'tracks/ski/koltsovo_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Берёзовая роща',
        region: 'NSK',
        source: 'stremglav',
        sneg: 'berezovaya-nsk',
        info: 'Подготавливается под конек и классику. График работы: ежедневно с 9.00 до 20.00, тел. (383) 279-40-47.',
        length: 1.7,
        gpx: 'tracks/ski/berezovaya_nsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Краснообск',
        region: 'NSK',
        source: 'stremglav',
        sneg: 'krasnoobsk',
        info: 'Есть трассы 1,2,3 км.',
        length: 4.8,
        gpx: 'tracks/ski/krasnoobsk_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'ЛБ Авиатор',
        region: 'NSK',
        source: 'stremglav',
        sneg: 'aviator',
        length: 2.5,
        gpx: 'tracks/ski/aviator_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Лисьи горки',
        region: 'NSK',
        source: 'stremglav',
        sneg: 'lisyi-nsk',
        gpx: 'tracks/ski/lisyi_nsk_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Бердск, ЛБ Метелица',
        region: 'NSK',
        link: 'https://базаметелица.рф',
        source: 'stremglav',
        sneg: 'metelica-berdsk',
        info: 'тел. лыжной базы +7 (38341) 2-49-29',
        length: 5.1,
        gpx: 'tracks/ski/metelica_berdsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Бердск, биатлонный комплекс',
        region: 'NSK',
        source: 'stremglav',
        sneg: 'berdsk-biatlon',
        length: 2.2,
        gpx: 'tracks/ski/berdsk_biatlon_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Костомукша',
        region: 'KARELIA',
        link: ['https://vk.com/club2714594', 'https://kostravel.ru/turizm/aktivnyjotdyh/lyzhi/', 'https://www.skisport.ru/forum/cross-country/31409/'],
        source: 'stremglav',
        sneg: 'kostomuksha',
        length: 6,
        info: 'Лыжная база ДЮСШ. Подготавливаемая лыжная трасса, биатлон со стрельбищем, летом роллерка. Прокат на лыжной базе ДЮСШ №2, которая расположена в лесном массиве в черте города: улица Советская 26 Телефон: +7 (81459) 7-56-37; +7 (911) 662-40-47 Режим работы проката лыжного инвентаря: ежедневно без праздничных и выходных дней с 9:00 до 19:00. Трасса красивая и разнообразная, есть пара хороших горок, подготовка трассы регулярная и вполне хорошая. Есть освещение. Есть раздевалка и туалет.',
        gpx: 'tracks/ski/kostomuksha_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Александровск',
        region: 'PERM',
        source: 'stremglav',
        sneg: 'aleksandrovsk',
        length: 5.3,
        gpx: 'tracks/ski/aleksandrovsk_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Сургут, Сайма',
        region: 'KHMAO',
        link: 'https://kedr86.ru/?q=content/sportivnyy-gorodok-na-sayme',
        source: 'stremglav',
        sneg: 'nasaime',
        info: 'Лыжная трасса протяжённостью 1 км - горная, 2 км – равнинная.',
        length: 3,
        gpx: 'tracks/ski/nasaime_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Одинцово, Масловский лес',
        region: 'MSK',
        source: 'stremglav',
        sneg: 'maslov-ski',
        info: 'Трасса на территории вновь образованного природного парка.',
        length: 1.4,
        gpx: 'tracks/ski/maslov_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Подольск, Девятский лес',
        region: 'MSK',
        source: 'stremglav',
        sneg: 'deviat-ski',
        info: 'Ухоженная трасса готовится бураном с прицепными устройствами. Классика и конек. Полотно отсыпано щепой. Занимается спортивная секция. Трасса сделана силами тренерского состава отделения спорт.школы. Проводятся соревнования. К началу трассы можно подъехать 1км по однополосной дороге через кладбище и частный сектор. Есть парковка на 3-4 легковых автомобиля.',
        length: 2.4,
        gpx: 'tracks/ski/deviat_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Dvorista',
        sneg: 'dvorista',
        info: 'Где жить: 1) В Пале и ездить на машине (минут 30 до трассы, есть крупные магазины, ресторвны, все блага города) 2) В Двориште у трассы или в пешей доступности (минут 20 пешком, нет ничего - ни магазинов, ни ресторанов) 3) Яхорина, на машине или не надёжно, но можно спуститься пешком и обратно попроситься на трансфер, например от Vila Marina (они возят своих гостей на горнолыжку, можно попробовать договориться). Около трассы - единственный отель: https://maps.app.goo.gl/SaXYTckUpC1cQwzK9',
        length: 4.3,
        region: 'BOSNIA',
        source: 'stremglav',
        gpx: 'tracks/ski/dvorista_bosnia_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Jogllandloipe Wien',
        sneg: 'jogllandloipe',
        info: 'Ближайшая к Вене полноценная беговая трасса. Готовится ежедневно, сложность средняя. Профиль высот в диапазоне от 1133м до 1187м. Есть большой прокат, гостевой дом непосредственно у начала трассы.',
        length: 8.8,
        region: 'AUSTRIA',
        source: 'stremglav',
        gpx: 'tracks/ski/jogllandloipe_wien_alps_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Kapaonik',
        sneg: 'kapaonik',
        info: 'Поговаривают, что в подвале отеля Villa Kopaonik https://maps.app.goo.gl/TCiUUpUuYEe4zrRv6 есть прокат с беговыми лыжами.',
        length: 4.1,
        region: 'SERBIA',
        source: 'stremglav',
        gpx: 'tracks/ski/kapaonik_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Lahti',
        sneg: 'lahti',
        length: 76.4,
        region: 'FINLAND',
        source: 'stremglav',
        gpx: 'tracks/ski/lahti_2_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Oittaa',
        sneg: 'oittaa',
        info: 'Трасса бесплатная, освещение, оснежение.',
        length: 8.7,
        region: 'FINLAND',
        source: 'stremglav',
        gpx: 'tracks/ski/oittaa_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Sienica',
        sneg: 'sjenica',
        info: 'Ski center Žari is national Biathlon center with 5.5km long trails for Nordic sports with shooting range and 850m long trail for Alpine skiing. Лыжероллерное кольцо 2.5km, стрельбище. Где жить: В Сиенице, до трассы добираться на машине, у трассы жилья нет.',
        length: 2.5,
        region: 'SERBIA',
        link: ['https://www.facebook.com/pages/Ski-Centar-%C5%BDari/293725957486218', 'https://www.instagram.com/explore/locations/480704388/ski-centar-zari/', 'https://sjenicanadlanu.com/sr/sta-obici-u-sjenici-i-na-pesteru/641-ski-centar-zari.html'],
        source: 'stremglav',
        gpx: 'tracks/ski/sienica_serbia_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Tic Polje Zlatibor',
        sneg: 'tic-zlatibor',
        info: 'Трассу здесь готовят с помощью бурана для нужд местной спортшколы. Проката нет.',
        length: 3.4,
        region: 'SERBIA',
        source: 'stremglav',
        gpx: 'tracks/ski/tic_polje_zlatibor_serbia_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Veliko polje Igman',
        sneg: 'igman',
        length: 13.8,
        region: 'BOSNIA',
        source: 'stremglav',
        gpx: 'tracks/ski/veliko_polje_igman_bosnia_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Villagio',
        sneg: 'villagio',
        info: 'Преимущественно трасса подходит для классического хода, но есть и участки где удобно для конька. Лыжня обновляется после каждого снегопада, иногда несколько раз в неделю. Рельеф скорее плоский, но очень живописно, красивый лес.',
        length: 7.2,
        region: 'MSK',
        link: 'https://villagio-service.ru/page24831786.html',
        source: 'stremglav',
        gpx: 'tracks/ski/villagio_ski_omaps.gpx',
        ski_kind: 'CLASSIC_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Zabljak Durmitor',
        region: 'MONTENEGRO',
        source: 'stremglav',
        gpx: 'tracks/ski/zabljak_durmitor_montenegro_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Абзаково, Малый Курташ',
        region: 'BASH',
        source: 'stremglav',
        gpx: 'tracks/ski/abzakovo_malyy_kurtash_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Абрамцево-Радонеж',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/abramtsevo_radonezh_klassika_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Чкаловский, Авиатор',
        sneg: 'staviator',
        length: 1.7,
        region: 'MSK',
        link: 'https://www.skisport.ru/forum/cross-country/33761/',
        source: 'stremglav',
        gpx: 'tracks/ski/aviator_chkalovskiy_ski_omaps.gpx',
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
        sneg: 'akatovo',
        info: 'Есть очень пологие тягуны, есть небольшие спуски/подъемы с перепадом 2-3 м. Ширина полотна в среднем такая же, как на Лисьей.',
        length: 9,
        region: 'MSK',
        link: 'https://www.skisport.ru/forum/cross-country/30365/?ysclid=lrbstozm25504661847#1238437',
        source: 'stremglav',
        markir: true,
        gpx: 'tracks/ski/akatovo_ski_omaps.gpx',
        ski_kind: 'CLASSIC_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Алешкино',
        sneg: 'aleshkino',
        region: 'MSK',
        link: 'https://sites.google.com/view/alski',
        source: 'stremglav',
        gpx: 'tracks/ski/aleshkino_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Алмаш',
        region: 'TATARSTAN',
        source: 'stremglav',
        gpx: 'tracks/ski/almash_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Альпийская деревня',
        sneg: 'alpendorf',
        info: 'Лыжная трасса, гостиница, бассейн.',
        length: 5.4,
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
        type: ['SKI']
    },
    {
        name: 'Аннино',
        sneg: 'annino',
        info: 'Снегоход.',
        length: 9.3,
        region: 'MSK',
        link: 'https://annino.tilda.ws/',
        source: 'stremglav',
        gpx: 'tracks/ski/annino_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Воскресенск, Ашитково',
        sneg: 'ashitkovo',
        info: 'Лыжная трасса Здоровье. Никем не готовится, самотоп из редких лыжников, а так же ватрушек (в середине трассы есть овражек, где раскатано ватрушками, как и со всех горочек по этой трассе), и квадриков. По больше части только классикой, изредка можно найти отрезки для конька. Годится только в качестве прогулки недолгой. Координаты стартовой поляны: 55°26′30.73″N 38°34′37.1″E ',
        length: 3,
        region: 'NSK',
        link: ['https://vk.com/ashitkovolizy', 'https://www.skisport.ru/forum/cross-country-routes/37582/'],
        source: 'stremglav',
        gpx: 'tracks/ski/ashitkovo_voskresensk_ski_omaps.gpx',
        ski_kind: 'FURROW',
        type: ['SKI']
    },
    {
        name: 'Бабаевский пруд',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/babaevskiy_prud_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Первоуральск, т/б Бодрость, г Мокрая',
        region: 'EKB',
        source: 'stremglav',
        gpx: 'tracks/ski/baza_bodrost_gora_mokraya_pervouralsk_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Байкальск',
        sneg: 'baikalsk',
        length: 5.2,
        region: 'IRKUTSK',
        source: 'stremglav',
        gpx: 'tracks/ski/baykalsk_vostok_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Балакирево',
        sneg: 'balakirevo',
        info: 'Трасса проходит в пойме реки Серая по слабопересеченной местности. Большая часть трассы расположена в лесу с преобладанием деревьев лиственных пород, Трасса готовится регулярно при помощи снегохода с навесными инструментами.',
        length: 12.5,
        region: 'VLADIMIR',
        link: ['https://vk.com/club136615300', 'https://www.skisport.ru/forum/cross-country/80253/'],
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
        sneg: 'barinova-roscha',
        info: 'Трасса расположена в лесном массиве «Баринова роща» в окрестностях г.Гусь-Чрустльный. Лыжня регулярно готовится снегоходлом с прицепными устройствами. Рядом с трассой расположен спорткомплекс «Атлант», где можно воспользоваться раздевалкой, душем, также имеется прокат лыжного инвентаря. Здесь же автомобильная парковка. Освещение участка трассы работает утром с 5:00 до 8:00 и вечером с 17:00 до 21:00.',
        length: 20.2,
        region: 'VLADIMIR',
        link: 'https://vk.com/scbarro',
        source: 'stremglav',
        gpx: 'tracks/ski/barinova_roshcha_gus_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Сургут, Барсово',
        sneg: 'barsovo',
        length: 3.1,
        region: 'KHMAO',
        source: 'stremglav',
        gpx: 'tracks/ski/barsovo_surgut_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Белокуриха-2',
        sneg: 'belokuriha2',
        info: 'Общая протяжённость трассы почти 7 км, есть дистанции 5 км, 3 км и 2,5 км. Комплекс оборудован трибунами. Стадион рассчитан на размещение 1500 человек. Также на стадионе размещены мишенные установки. Для участников и зрителей соревнований созданы необходимые удобства – оборудованы раздевалки, кафе, медпункт, туалеты. Комплекс предназначен для обеспечения круглогодичных учебно-тренировочных занятий спортсменов различной квалификации по биатлону (м/к, пневматика), лыжным гонкам, а также смежным видам спорта – стендовая стрельба, стрелковый спорт, стрельба из лука, охотничий биатлон, зимнее ориентирование, велокросс, маунтинбайк, легкая атлетика. Лыжно-биатлонный комплекс на «Белокурихе-2» открыт для тренировок и лыжных прогулок всем желающим. Работает пункт проката.',
        length: 6.6,
        region: 'ALTAI',
        link: 'https://www.belokuriha-2.ru/sports/6/',
        source: 'stremglav',
        gpx: 'tracks/ski/belokurikha_2_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Белокуриха',
        sneg: 'belokuriha',
        info: 'На территории санатория «Россия» расположена единственная беговая лыжная трасса в Белокурихе, пролегающая по сосновому бору. Трасса подготавливается ратраком, подходит как для классического стиля катания, так и для конькового хода. Часть трассы асфальтирована и приспособлена для тренировок на лыжероллерах. Есть освещенный участок, биатлонное стрельбище. В настоящий момент «Трасса здоровья» выделяется среди остальных по качеству профессиональной подготовленности и является единственной трассой подобного уровня в Алтайском крае. Помимо этого, на ее территории теперь работает стартовый домик – место, где можно переодеться в спортивный костюм, немного погреться или просто отдохнуть. Беговая лыжная трасса («Трасса здоровья») для всех желающих работает совершенно бесплатно, открыта круглосуточно, освещение работает до 21:00. Протяженность трассы - дистанции по 1500, 1800, 2600 и 3300 метров. Рельеф естественный: ровные участки сменяются спусками и подъемами, перепады высот достигают 20 метров. Недалеко от подножия трассы действует пункт проката спортивного инвентаря.',
        region: 'ALTAI',
        link: 'https://www.sanrussia.ru/otdykh/begovaya-lyzhnaya-trassa/',
        source: 'stremglav',
        gpx: 'tracks/ski/belokurikha_altay_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Никольск, Белочка',
        sneg: 'belochka',
        info: 'Спортивно-тренировочная трасса, интенсивный рельеф. Проводятся соревнования. Круги 3 и 5 км.',
        length: 5.6,
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
        sneg: 'fryanovo',
        info: 'Готовят снегоходом, полный круг 8км. В некоторых местах реверсное движение при двойной ширине полотна. Трасса средней сложности, есть длинные тягуны и короткие «торчки».',
        length: 8,
        year: 2024,
        region: 'MSK',
        link: ['https://t.me/+sbnCQe2VWgQxMWRi', 'https://vk.com/bkb_skirace'],
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
        sneg: 'msu',
        info: 'Освещения нет, но по периметру хватает уличного. Раздевалки: для лыжников МГУ работает раздевалка в подтрибунном помещении легкоатлетического стадиона МГУ с понедельника по субботу с 8:30 до 21:00. Общественных раздевалок нет. Трасса проложена в парке, регулярно готовится силами лыжников МГУ с использованием снегоходов и ратрака, нарезается классическая лыжня. Есть срезка на 3 км. Разметка выставляется только на гонки, но заблудиться сложно – развилок почти нет. Будьте внимательны – по парковым дорожкам гуляют пешеходы. На трассе есть общественный туалет.',
        length: 3.8,
        region: 'MSK',
        link: ['https://www.skisport.ru/forum/cross-country-routes/44622/', 'https://skimsu.ru/bgazon', 'https://boosty.to/skimsuteam'],
        source: 'stremglav',
        gpx: 'tracks/ski/bolshoy_gazon_mgu_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Большой Луг, Академгородок',
        sneg: 'blug-irk',
        region: 'IRKUTSK',
        gpx: 'tracks/ski/bolshoy_lug_akademgorodok_irkutsk_vostok_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Ботанический и Останкино',
        sneg: 'botanicheskiy-ostankino',
        length: 6.6,
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/botanicheskiy_i_ostankino_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Братеевская пойма',
        sneg: 'brateevo',
        info: 'Прокатный модуль Москомспорта с 2022г.',
        length: 2.2,
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/brateevskaya_poyma_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Братьев Асафьевых',
        sneg: 'asafievyh',
        info: 'Накатывают под конек и классику. E-mail: ski_club_asaf@mail.ru WhatsApp: +7 960 206-00-30',
        length: 4.8,
        region: 'TVER',
        link: ['https://www.skiclubasaf.ru/', 'https://vk.com/skiclubofbrothersasafie'],
        source: 'stremglav',
        gpx: 'tracks/ski/bratev_asafevykh_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Бронницкая лыжня',
        sneg: 'bronnicy',
        info: 'Трасса поддерживается энтузиастами на пожертвования лыжников.',
        length: 7.7,
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/bronnitskaya_lyzhnya_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Брянск',
        sneg: 'briansk',
        info: 'Трасса готовится регулярно и качественно под тренировки. Несколько вариантов петель с разным уровнем сложности от равнины до существенных горок. Лыжня для классического и конькового стиля. По выходным часто проходят соревнования. Имеется парковка, но в час пик она обычно бывает заполнена. Часть трассы освещена.',
        length: 4.9,
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
        type: ['SKI']
    },
    {
        name: 'Буревестник, Инюшенский бор',
        sneg: 'burevestnik-nsk',
        info: 'Лыжная база работает сб, вс, 9:00-17:00, тел. +7 (383) 244-00-76',
        length: 4.4,
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
        type: ['SKI']
    },
    {
        name: 'Бушарино',
        sneg: 'busharino',
        info: 'Трасса расположена на поле, вдоль леса - рельефная часть. Трасса готовится местными жителями снегоходом с прицепными устройствами. В конце января - начале февраля на трассе команда МГУ проводит сборы. Вход на трассу из коттеджного поселка Бушарино.',
        length: 8.8,
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/busharino_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Варварино',
        sneg: 'krasnaya-pahra',
        info: 'Готовится бураном.',
        length: 3.4,
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/varvarino_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Веденина ЛРК',
        sneg: 'vedenina-tula',
        info: 'Лыжный стадион с трибуной, стартовым полем, финишем, освещением, раздевалками, душевыми, тренерской комнатой и комнатой для подготовки лыж. Прокат, парковка. Протяженность трассы для лыжероллеров 2.5км, высококачественный асфальт. Зимние трассы на 5 и на 10 км. Искусственный снег, ратрак. Завершение работ запланировано на 15 сентября 2018 года. Здесь смогут заниматься отделение лыжных гонок ДЮСШ «Восток», областная школа олимпийского резерва, а также все желающие — трасса будет открыта для всех. Тел. +7 (4872) 75-09-00',
        length: 15.6,
        region: 'TULA',
        source: 'stremglav',
        gpx: 'tracks/ski/vedenina_lrk_tsentr_1_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Муром, Верба',
        sneg: 'verba-murom',
        length: 4.3,
        region: 'VLADIMIR',
        link: 'http://verbasport.ru/',
        source: 'stremglav',
        gpx: 'tracks/ski/verba_murom_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Верея',
        sneg: 'vereya',
        info: 'Трасса существует с 2020 года. Готовится силами энтузиастов на собственные средства при поддержке местной администрации. Трасса оформлена как спортивный объект. Полотно выравнено, установлено освещение. Освещение работает каждый день с 16 до 23 часов.',
        length: 1.4,
        region: 'MSK',
        link: 'https://vk.com/id311582635',
        source: 'stremglav',
        gpx: 'tracks/ski/vereya_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Веснянка',
        sneg: 'vesnianka',
        info: 'Лыжная и лыжероллерная трасса в микрорайоне Веснянка. 5 км кольцо с перемычками, мягкие элементы рельефа. Раздевалки, зона отдыха, чай, кофе. Прокат лыж, лыжероллеров, велосипедов.',
        length: 5.8,
        region: 'BELARUS',
        link: 'https://fcminsk.by/uslugi/lyzherollernaja-trassa/',
        source: 'stremglav',
        gpx: 'tracks/ski/vesnyanka_belorus_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'л/п Видное',
        sneg: 'vidnoe',
        info: 'Трасса готовится периодически снегоходом и мгновенно затаптывается.',
        length: 3,
        region: 'MSK',
        link: 'https://www.skisport.ru/forum/cross-country-routes/87253/#1223889',
        source: 'stremglav',
        gpx: 'tracks/ski/vidnoe_lesopark_ski_omaps.gpx',
        ski_kind: 'FICKLE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Великие Луки, ВЛГАФК',
        sneg: 'senchitski',
        info: 'На 5 км дистанции есть серьезные спуски, для многих новичков может быть сложновато, им лучше свернуть на 3 км. Хорошее место для отдыха. Летом покупаться, позагорать, погулять по лесу. Неплохое место для тренировки не только лыжников. Прокат есть, но работает, по отзывам, нерегулярно.',
        length: 5.5,
        region: 'SMOLENSK',
        source: 'stremglav',
        gpx: 'tracks/ski/vlgafk_velikie_luki_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Вожега',
        sneg: 'vojega',
        info: 'Всегда отлично подготовленная трасса. Есть рельеф, несложный, опасных спусков нет. Трассу готовят буранами, очень аккуратно. Есть домик с раздевалками.',
        length: 8,
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
        type: ['SKI']
    },
    {
        name: 'Волкуша',
        sneg: 'volkusha',
        info: 'Ратрак, оснежение.',
        length: 12.5,
        year: 2024,
        region: 'MSK',
        link: 'http://volkuscha.ru/',
        source: 'stremglav',
        gpx: 'tracks/ski/volkusha2024_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Волоколамск',
        sneg: 'volokolamsk',
        length: 2.7,
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/volokolamsk_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Елец, Воргол',
        sneg: 'vorgol',
        info: 'Трасса готовится под конек. В новом здании ФОК есть бассейн, кафе. Тел. ФОК +7 (47467) 5-99-07',
        length: 3.2,
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
        sneg: 'voskresenskoe',
        length: 2.8,
        region: 'NSK',
        link: 'https://admspvoskresenskoe.ru/tag/lyzi/',
        source: 'stremglav',
        gpx: 'tracks/ski/voskresenskoe_lyzhnya_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Восточное Измайлово',
        sneg: 'izmailovo-oriental',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/vostochnoe_izmaylovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Высоковск',
        sneg: 'vysokovsk',
        info: 'В прошлые годы тут была некоторая подготовка, трассу боронили. На трассе довольно широкие просеки поэтому с ориентированием проблем нет. Рельеф тут не сложный, но он есть. Жаль что в таком месте, которое уже вобрало в себя дух от многих лет усилий энтузиастов нет постоянной подготовки. Дальняя петля завалена деревьями.',
        length: 9,
        region: 'TVER',
        source: 'stremglav',
        gpx: 'tracks/ski/vysokovsk_ski_omaps.gpx',
        ski_kind: 'FICKLE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Вышний Волочек',
        sneg: 'vvolochek',
        info: 'ДЮСШ по адресу Коммунальная улица 5',
        length: 6,
        region: 'TVER',
        source: 'stremglav',
        gpx: 'tracks/ski/vyshniy_volochek_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Галич Толтуново',
        sneg: 'galich',
        info: 'Замысловатое кольцо в холмистом ландшафте северного берега Галичского озера. Отрезки, требующие интенсивной работы, чередуются с участками, где можно перевести дух. Местность преимущественно открытая и полуоткрытая. Изначально трасса готовилась исключительно под гонку Галичское заозерье.',
        length: 25,
        region: 'KOSTROMA',
        link: 'https://www.skisport.ru/news/cross-country/111841/',
        source: 'stremglav',
        gpx: 'tracks/ski/galich_toltunovo_sever_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Десногорск, Генино',
        sneg: 'genino',
        info: 'Теплое здание базы, помещение для хранения и обслуживания лыж, тренерская, мужская и женская раздевалки, тренажерный зал. Трасса освещена, готовится снегоходом с навесными.',
        length: 4.9,
        region: 'SMOLENSK',
        source: 'stremglav',
        gpx: 'tracks/ski/genino_desnogorsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Гигирево',
        sneg: 'gigirevo',
        info: 'Есть сведения, что трасса регулярно готовится. Есть место припарковаться.',
        length: 2,
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
        type: ['SKI']
    },
    {
        name: 'ул Головачева, квт 23',
        sneg: 'kuzminki-golovacheva',
        length: 6.4,
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/golovacheva_kv_23_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Головино',
        sneg: 'golovino',
        info: 'Роллерка.',
        region: 'MSK',
        link: ['https://www.istina50.ru/ru/', 'https://mosskis.ru/359/'],
        source: 'stremglav',
        gpx: 'tracks/ski/golovino_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Голубое',
        sneg: 'goluboe-classic',
        info: 'Новая трасса с выходом в районе дер. Голубое/Андреевка. Трасса на 70% по нехоженому лесу, недоступная для снегоходов/квадроциклов. Нарезается только классика, 3-4 раза в неделю. Регулярно расчищается бурелом, присутствует световозвращающая ночная разметка. Часть 6км кольца совпадает с треком транзитного маршрута Радищево-Снегири.',
        length: 12.2,
        region: 'MSK',
        link: 'https://www.skisport.ru/forum/cross-country-routes/83424/#1263290',
        source: 'stremglav',
        gpx: 'tracks/ski/goluboe_classic_2024_ski_omaps.gpx',
        ski_kind: 'CLASSIC_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Горский',
        sneg: 'gorskiy',
        length: 5.8,
        region: 'NSK',
        source: 'stremglav',
        gpx: 'tracks/ski/gorskiy_nsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Гришкино',
        sneg: 'grishkino',
        info: 'Довольно сложный рельеф, петли длиной 1.4км, 3км, 5км, 7.5км. Суммарный набор160м на круг. Но есть "пенсионерский круг" петля по верху в лесу без спуска. Есть гостиница, горка, ватрушки, кафе, баня.',
        length: 8.9,
        region: 'TVER',
        link: ['https://grishkino.com/', 'https://vk.com/parkgrishkino'],
        source: 'stremglav',
        gpx: 'tracks/ski/grishkino_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Меленки, Гузеев Овраг',
        sneg: 'guzeevovrag',
        length: 3.6,
        region: 'VLADIMIR',
        link: 'https://vk.com/scprodv',
        source: 'stremglav',
        gpx: 'tracks/ski/guzeev_ovrag_melenki_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Щелково, Детская',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/detskaya_shchelkovo_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Дзержинский, Угреша',
        sneg: 'ugresha',
        info: 'Обрабатывается снегоходом, есть классика. Рельеф серьёзный, длинные спуски-подъёмы.',
        length: 3.8,
        region: 'NSK',
        link: 'https://vk.com/nkfit_dzr',
        source: 'stremglav',
        gpx: 'tracks/ski/dzerzhinskiy_ugresha_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Динамо',
        sneg: 'dinamo-nsk',
        info: 'Конек, классика. График работы проката: вт. - вс. с 9.00 до 21.00, тел. (383) 240-31-99, 240 31 56. Как добраться: маршрутка № 17 (ост. «Дачи»).',
        length: 4.4,
        region: 'NSK',
        source: 'stremglav',
        gpx: 'tracks/ski/dinamo_nsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Доброград, Goodwill',
        sneg: 'dobrograd',
        info: 'Есть освещение на круге 2.3км, прокат, отель.',
        length: 13.1,
        region: 'VLADIMIR',
        link: ['https://dobrograd.ru/news/dobrograd-gorod-uvlechennykh-lyzhnikov/', 'https://www.skisport.ru/forum/cross-country-routes/94001/'],
        source: 'stremglav',
        gpx: 'tracks/ski/dobrograd_goodwill_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Долгий пруд',
        sneg: 'mfti',
        info: 'Трасса лыжной секции МФТИ. Готовится снегоходом.',
        length: 3.9,
        region: 'MSK',
        link: ['https://www.skisport.ru/forum/cross-country-routes/75269/', 'https://vk.com/club89348240'],
        source: 'stremglav',
        gpx: 'tracks/ski/dolgiy_prud_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Долина ручьев',
        sneg: 'dolinaruchievhanty',
        info: 'Есть асфальтовая трасса для лыжероллеров 3км. Обзор катания в ХАнты-Мансийске Главное • 2 трассы: лыжно-биатлонный комплекс и «Долина ручьев». • На ЛБК тренируются сборные, но есть время для свободного катания: 13:00–15:00 и 19:00–21:00 • «Долина ручьев» прогулочная, подходит для разнообразия Как добраться? • 3 часа лета из Москвы • Аэропорт прямо в городе — остается только короткая поездка на такси. Проживание • Гостиница «Олимпийская» (ближе к «Долине ручьев», на ЛБК нужен трансфер или такси), есть столовая • Можно снять квартиру прямо у трассы ЛБК, максимально удобно Питание • Городские кафе, доставки • Сеть недорогих блинных столовых • На базе есть столовая (доступ не всегда простой из-за спортсменов) • В «Олимпийской» работает столовая.',
        length: 37.6,
        region: 'KHMAO',
        link: 'https://vk.com/sportclubskiu',
        source: 'stremglav',
        gpx: 'tracks/ski/dolina_ruchev_1_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Домодедово',
        sneg: 'domodedovo',
        length: 5.6,
        region: 'MSK',
        link: ['https://vk.com/dmdski', 'https://www.skisport.ru/forum/cross-country-routes/59879/'],
        source: 'stremglav',
        gpx: 'tracks/ski/domodedovo_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Донинская просека',
        sneg: 'doninskaya',
        region: 'NSK',
        source: 'stremglav',
        gpx: 'tracks/ski/doninskaya_proseka_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Лотошино, Дубки',
        sneg: 'lotoshino',
        info: 'Рядом с трассой - гостиница, баня на дровах, краеведческий музей. Освещения в парке нет.',
        length: 2.4,
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/dubki_lotoshino_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Фрязино, Дубовая роща',
        sneg: 'fryazino-park',
        info: 'Небольшой круг по периметру парка, без рельефа. Есть прокат. Парковка присутствует.',
        length: 1.6,
        region: 'MSK',
        link: 'https://www.skisport.ru/forum/cross-country/33761/',
        source: 'stremglav',
        gpx: 'tracks/ski/dubovaya_roshcha_fryazino_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Дырнос',
        region: 'KOMI',
        source: 'stremglav',
        gpx: 'tracks/ski/dyrnos_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'ДЮСШ №5',
        sneg: 'sportschool5-kostroma',
        length: 1.8,
        region: 'KOSTROMA',
        source: 'stremglav',
        gpx: 'tracks/ski/dyussh_5_kostroma_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Первоуральск, Европа-Азия',
        sneg: 'europa-asia',
        info: 'Трасса марафона Европа - Азия',
        length: 51,
        region: 'EKB',
        link: 'https://ea-marathon.com/',
        source: 'stremglav',
        gpx: 'tracks/ski/evropa_aziya_pervouralsk_vostok_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Елагино',
        sneg: 'elagino',
        info: 'Трасса освещена, готовится под коньковый и классический стиль. Катание бесплатное.',
        length: 3.4,
        region: 'MSK',
        link: 'http://elagino-park.ru/skiing/',
        source: 'stremglav',
        gpx: 'tracks/ski/elagino_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Ерши',
        sneg: 'ershi',
        info: 'Лыжный круг в березовом лесу.',
        length: 4,
        region: 'IRKUTSK',
        source: 'stremglav',
        gpx: 'tracks/ski/ershi_irkutsk_vostok_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Звенигород, Ершово',
        sneg: 'ershovo',
        info: 'Трасса для беговых лыж, коньковый и классический ход. Крутые горки. Учено-тренировочная. Также проводятся соревнования. Принадлежит Ершовской ДЮСШ. Ширина трассы в лесу 3-4 м, на поле и опушке - 6-7м. Готовит трассу Кутюгин Виктор Николаевич. Основной участок трассы проходит по лесу с сильно-пересеченным рельефом. Для учебно-тренировочных целей специально выбраны довольно сложные участки (извилистые спуски, торчки (вплоть до 50 град), хорошие рабочие тягуны, даже построен мостик с трамплином в конце извилистого спуска с выкатом и дальнейшим виражом. В лесу ровных участков фактически нет.',
        length: 5.3,
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/ershovo_zvenigorod_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Тольятти, Есенина',
        sneg: 'esenina',
        info: 'Трасса состоит из двух частей: стадионной и лесной. На стадионе светло от уличных фонарей и плоско. В лесу трасса не освещена. Движение по часовой стрелке. Присутствует выраженный рельеф. Перепад высот большой, около 18 метров.',
        length: 3,
        region: 'SAMARA',
        source: 'stremglav',
        gpx: 'tracks/ski/esenina_tolyatti_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Бийск, Забава',
        sneg: 'zabava-bijsk',
        info: 'Прокат, кафе, небольшой каток, баня.',
        length: 3,
        region: 'ALTAI',
        source: 'stremglav',
        gpx: 'tracks/ski/zabava_biysk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Завидово',
        sneg: 'zavidovo',
        info: 'Подготовленные лыжни на основе сети дорожек Курортной территории Завидово',
        length: 14.2,
        region: 'TVER',
        source: 'stremglav',
        gpx: 'tracks/ski/zavidovo_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Павловский Посад, Заречье',
        sneg: 'zarechie-pposad',
        info: 'Трасса готовится ежедневно с 8:00 до 9:00. Рельеф присутствует. Есть небольшое лыжероллерное кольцо 600м, освещенное. Тренируется ДЮСШ биатлон. Проводятся старты по лыжам и роллерам.',
        length: 2.8,
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/zareche_pavlovskiy_posad_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Бийск, Заря',
        sneg: 'zaria-bijsk',
        info: 'Трасса готовится под конёк и классику, возможно - нерегулярно. Большая часть трассы в хвойном лесу. Интересные конфигурации трассы и перемычки между участками позволяют поработать над конкретными задачами - от простой прогулки до интенсивной тренировки. Известен тренировочный круг "Тополь", являющийся частью трассы. Трассу также называют Лыжней здоровья. Здание старой лыжной базы около территории очистных сооружений не принимает посетителей ( по отзывам). Пишут что лыжная база работает теперь в здании спорткомплекса Заря. Рядом со спорткомплексом Заря есть небольшой асфальтовый круг.',
        length: 9.7,
        region: 'ALTAI',
        source: 'stremglav',
        gpx: 'tracks/ski/zarya_biysk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Заря',
        sneg: 'zarya-ulianovsk',
        info: 'Лыжная трасса тщательно и регулярно готовится ратраком, есть оснежение. Есть роллерка, стрельбище, проводятся соревнавания. Летом прекрасная роллерная трасса, хороший асфальт по ширине, спуски с контруклонами, хороший рельеф, практически вся трасса в сосновом лесу. Виды на некоторых участках трассы прямо на Волгу( недалеко пляж). Есть трассы для скандинавской ходьбы и кроссов без асфальта. Организация соревнований ( старты Кубка России по биатлону мастерс) замечательная. Всё выметено до стартов, убраны ветки, шишки. Роллерка огорожена, есть освещение. Есть тренажёрный зал, комнаты для проживания на сборах,сервис для обработки лыж, раздевалки для мальчиков и девочек, с теплым полом. Есть прокат лыж.',
        length: 3.7,
        region: 'ULYANOVSK',
        source: 'stremglav',
        gpx: 'tracks/ski/zarya_ulyanovsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Зеленый, Заря',
        sneg: 'zarya-zeleny',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/zarya_zelenyy_moskovskaya_obl_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Великие Луки, Зеленка',
        sneg: 'zelenka',
        info: 'Асфальтовая велотрасса, зимой готовится лыжня. Рельеф минимальный, практически равнина. Освещение есть на всем круге. Парковка. Прокат лыж и велосипедов. Вход платный. тел. +7 (921) 001-94-15',
        length: 5,
        region: 'SMOLENSK',
        link: 'https://m.vk.com/velocentrvl',
        source: 'stremglav',
        gpx: 'tracks/ski/zelenka_velikie_luki_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Зеленоград, 17-й мкр.',
        sneg: 'zelenograd17',
        info: 'Роллерка, освещение.',
        length: 2.8,
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/zelenograd_17_y_mkr_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Зеленоград, 7-й район',
        sneg: 'zelenograd7',
        info: 'Трасса состоит из двух частей, разделенных р.Сходней. На левом берегу, на территории Москвы (административно), находится лыжероллерная трасса с асфальтовым покрытием и освещением. Эту часть обычно называют: 7й(6й) микрорайон, роллерка, за горбольницей... На правом берегу (административно - Московская область) находятся грунтовые лесные петли. Эту часть обычно называют: за Ангстремом.',
        length: 7.3,
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/zelenograd_7_y_rayon_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Зорино',
        sneg: 'zorino',
        info: 'Равнинная бесплатная трасса недалеко от Истры. Проходит по территории коттеджного поселка, по полю и лесной вырубке, и частично по лесу. Подготовка трассы проводится несколько раз в неделю снегоходом и прицепным оборудованием. Трасса поддерживается энтузиастами за счет пожертвований. Координаты парковки: https://yandex.ru/maps/-/CCU5NNd7gA',
        length: 4.7,
        region: 'MSK',
        link: ['http://www.zorino-park.ru/ski/', 'https://t.me/zorinoski', 'https://vk.com/zorinoski'],
        source: 'stremglav',
        gpx: 'tracks/ski/zorino_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Зубец',
        sneg: 'zubec',
        info: 'Снегоход.',
        length: 25,
        region: 'KLGA',
        link: 'https://zubec.info/ski/',
        source: 'stremglav',
        gpx: 'tracks/ski/zubets_long_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Ивановское',
        sneg: 'ivanovskoe',
        info: 'Готовится снегоходом под классику, периодически (к выходным и/или после снегопадов).',
        length: 12.9,
        region: 'MSK',
        link: 'https://vk.com/skichg',
        source: 'stremglav',
        gpx: 'tracks/ski/ivanovskoe_ski_omaps.gpx',
        ski_kind: 'FICKLE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Ивантеевка',
        sneg: 'ivanteevka',
        info: 'Конёк и классика. Очень достойно. На стадионе есть даже освещение! В лесу хороший, рабочий рельеф.',
        length: 6.3,
        region: 'MSK',
        link: 'https://vk.com/club62981752',
        source: 'stremglav',
        gpx: 'tracks/ski/ivanteevka_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Ивачково, Львовская',
        sneg: 'lvovskaya',
        year: 2025,
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/ivachkovo_66_y_km_lvovskaya_sezon_25_26_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Измайлово, За пасекой',
        sneg: 'izmailovo',
        info: 'Трасса готовится ратраком. Лыжный комплекс стадиона Авангард открыт с 10 до 22 часов. В 70м от трассы есть теплый туалет в помещении проката спортинвентаря.',
        length: 2.5,
        region: 'MSK',
        link: ['http://лк-измайлово.рф/trassi/', 'https://www.skisport.ru/forum/cross-country-routes/93432/'],
        source: 'stremglav',
        gpx: 'tracks/ski/izmaylovo_za_pasekoy_2500m_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Измайлово Змейка',
        sneg: 'izmailovo',
        info: 'Трасса готовится ратраком. Лыжный комплекс стадиона Авангард открыт с 10 до 22 часов. В 70м от трассы есть теплый туалет в помещении проката спортинвентаря.',
        length: 5,
        region: 'MSK',
        link: ['http://лк-измайлово.рф/trassi/', 'https://www.skisport.ru/forum/cross-country-routes/93432/'],
        source: 'stremglav',
        gpx: 'tracks/ski/izmaylovo_zmeyka_5km_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Изониха',
        sneg: 'izoniha',
        info: 'Трасса Тотемского марафона Русский Север',
        length: 13.4,
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
        type: ['SKI']
    },
    {
        name: 'ИСХИ',
        region: 'IRKUTSK',
        source: 'stremglav',
        gpx: 'tracks/ski/iskhi_irkutsk_vostok_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Калевальский нацпарк',
        region: 'KARELIA',
        source: 'stremglav',
        gpx: 'tracks/ski/kalevalskiy_natspark_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Каменный мыс, о Черный',
        region: 'KHMAO',
        source: 'stremglav',
        gpx: 'tracks/ski/kamennyy_mys_o_chernyy_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Кандалакша',
        region: 'MURMANSK',
        source: 'stremglav',
        gpx: 'tracks/ski/kandalaksha_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Кандалакша, Полярные зори',
        sneg: 'polarnye-zori',
        info: 'Раздевалки, туалеты в здании стадиона. Трасса готовится снегоходом с прицепными устройствами, есть ратрак.',
        length: 10.8,
        region: 'MURMANSK',
        link: ['https://www.skisport.ru/forum/cross-country-routes/26655/', 'https://41time.ru/events/kandazoriski/', 'https://www.skisport.ru/forum/travel-stories/89425/'],
        source: 'stremglav',
        gpx: 'tracks/ski/kandalaksha_polyarnye_zori_lineynyy_marafon_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Каринское',
        sneg: 'karinskoe',
        info: 'Лыжная трасса расположена в селе Каринское, Одинцовское ГО, 12 км от г.Звенигород. Трасса преимущественно равнинная, проходит по полям. Есть прокат, он расположен у садового центра. Координаты проката: 55.709005, 36.677714 тел. +7 (965) 308-73-00',
        length: 2.5,
        region: 'NSK',
        source: 'stremglav',
        gpx: 'tracks/ski/karinskoe_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Карьки',
        sneg: 'karki',
        info: 'Трасса в местечке "Карьки", протяжённость 3+ км. Несмотря на отсутствие лыжников, всегда в приличном состоянии. Проложена по окскому склону, рельеф вверх-вниз, и разгонная равнина. На 3 км набор высоты 105м! Классика и конёк, готовится снегоходом с прицепными устройствами. Находится по Симферопольскому шоссе, сразу за Окой, между деревнями Михайлово и Лукъяново. Старт от КП "Окская слобода".',
        length: 3.3,
        region: 'TULA',
        source: 'stremglav',
        gpx: 'tracks/ski/karki_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Качкарский мар',
        sneg: 'kachkarka',
        info: 'Отличная трасса с инфраструктурой. Есть прокат лыж (только детских нет, минимум от 150 см). Трасса и под конёк и под классику, качественно готовится. Занимается лыжная секция. Парковка есть, бесплатная, сворачивать прямо с Загородного шоссе.',
        length: 5.99,
        region: 'ORENBURG',
        source: 'stremglav',
        gpx: 'tracks/ski/kachkarskiy_mar_orenburg_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Сургут, Кедр',
        sneg: 'kedr-surgut',
        length: 5.2,
        region: 'KHMAO',
        source: 'stremglav',
        gpx: 'tracks/ski/kedr_surgut_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Киржач Серегина',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/kirzhach_seregina_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Кировск парк',
        sneg: 'kirovsk-park',
        info: 'Трассу готовит местная спортивная школа. Очень красивая освещённая трасса с видом на горнолыжный курорт Большой Вудъявр, расположена в городском парке. Стараются готовить ежедневно по утрам ратраком. Есть прокат лыж, теплая раздевалка, туалет.',
        length: 2.6,
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
        type: ['SKI']
    },
    {
        name: 'Кокчетау',
        sneg: 'kokchetau',
        info: 'Лыжная база, тренируется ДЮСШ №2. Вся трасса освещена, асфальтирована. Есть прокат. Зимой трасса подготавливается. Рельеф выраженный, но пологий. Существует график тренировки спортшколы, во время которых трасса недоступна для посетителей.',
        length: 3.5,
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
        type: ['SKI']
    },
    {
        name: 'Конаковский бор',
        region: 'TVER',
        source: 'stremglav',
        gpx: 'tracks/ski/konakovskiy_bor_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Корабельная роща',
        region: 'TATARSTAN',
        source: 'stremglav',
        gpx: 'tracks/ski/korabelnaya_roshcha_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Королёв',
        sneg: 'korolev',
        region: 'MSK',
        link: 'https://www.ski-korolev.ru/',
        source: 'stremglav',
        gpx: 'tracks/ski/korolev_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Корта',
        sneg: 'korta',
        info: 'Трассы регулярно готовят. Разнообразный рельеф возволяет тренироваться и кататься для удовольствия. Есть прокат лыж, освещенный участок для вечернего катания. Платная парковка, которая в пики посещаемости бывает перегружена. Лыжная база: 8 (8362) 64-30-82',
        length: 14.6,
        region: 'TATARSTAN',
        link: 'https://vk.com/lyzhnyy_otdykh_v_korte',
        source: 'stremglav',
        gpx: 'tracks/ski/korta_vostok_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Красного маяка',
        sneg: 'krasnogo-mayaka',
        info: 'В последние годы обе трассы не поддерживаются и пребывают в самонатаптываемом состоянии. Однако местные лыжники о них знают и они популярны. Петля, расположенная западнее - Классическая пятерка Красного маяка. Петля, расположенная восточнее - Коньковая пятерка Красного маяка. Подробнее об истории этих мест: http://chertanoved.msk.ru/mayak.shtml',
        length: 9.4,
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/krasnogo_mayaka_2_pyaterki_ski_omaps.gpx',
        ski_kind: 'FURROW',
        type: ['SKI']
    },
    {
        name: 'Красное знамя',
        sneg: 'krasnozna-nsk',
        info: 'Трассы 3, 5, 10, 15 км. Конек и классика. Есть прокат: график работы сб., вс. с 10.00 до 18.00; тел. (383) 204-74-41',
        length: 14,
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
        type: ['SKI']
    },
    {
        name: 'Красные крылья',
        sneg: 'red-wings',
        length: 10,
        region: 'MSK',
        link: 'https://red-wings.ru/vidy-sporta/lyzhi-lyzherollery',
        source: 'stremglav',
        gpx: 'tracks/ski/krasnye_krylya_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Крутая горка',
        sneg: 'krutaya-gorka',
        info: 'Гомологированная трасса. Сдача лыжных домиков в аренду.',
        length: 7.5,
        region: 'OMSK',
        source: 'stremglav',
        gpx: 'tracks/ski/krutaya_gorka_omsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Крылатское',
        sneg: 'krylatskoe',
        info: 'Трасса готовится ратраком, но регулярно поддерживаемой ее пока считать нельзя. В здании проката на Гребном канале вы можете взять в аренду беговые лыжи, ботинки, палки, а также поиграть в настольный теннис! График работы проката: 08.00-19.30 ежедневно. Стоимость проката от 350 руб. за полный лыжный комплект за 1 час). Необходимо иметь при себе паспорт (или копию) для заполнения акта-приема передачи. Также придется внести залоговую сумму наличными 5000 руб. за каждый комплект оборудования. Прокат расположен по адресу: Москва, Крылатская улица, земельный участок 2/2, Гребной канал Москва.',
        length: 8.6,
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/krylatskoe_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Крылатское Осенняя, Москва',
        sneg: 'osennyaia',
        info: 'Круги 2 и 3.5 км. Трасса готовится привозным ратраком. Периодичность подготовки неизвестна. Прокат, кафе, раздевалки.',
        length: 3.8,
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/krylatskoe_osennyaya_moskva_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'КСК Битца',
        sneg: 'ksk-bitza',
        info: 'Ратрак.',
        region: 'MSK',
        link: 'https://t.me/bitsasport',
        source: 'stremglav',
        gpx: 'tracks/ski/ksk_bittsa_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Кузина',
        sneg: 'arh-kuzina',
        info: 'Раздевалка, туалет, кафе, прокат, вакс-кабины. тел. +7 (8182) 60-80-99',
        length: 21,
        region: 'ARKHANGELSK',
        link: 'https://vk.com/skistadium',
        source: 'stremglav',
        gpx: 'tracks/ski/kuzina_arkhangelsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Кузьминки Головачева',
        sneg: 'kuzminki-golovacheva',
        length: 6.4,
        region: 'MSK',
        gpx: 'tracks/ski/kuzminki_golovacheva_25_26_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Кузьминки Заречная',
        sneg: 'kuzminki',
        info: 'Хаотичные петли в парке переодически прокатываются снегоходом с навесными инструментами.',
        length: 2.6,
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/kuzminki_zarechnaya_ski_omaps.gpx',
        ski_kind: 'FICKLE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Курташ, Белорецк',
        region: 'BASH',
        source: 'stremglav',
        gpx: 'tracks/ski/kurtash_beloretsk_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Кусково',
        sneg: 'kuskovo',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/kuskovo_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Кучинский лесопарк',
        region: 'NSK',
        source: 'stremglav',
        gpx: 'tracks/ski/kuchinskiy_lesopark_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Лада парк',
        sneg: 'lada-park',
        info: 'Есть ратрак, но обычно готовится после снегопадов или перед соревнованиями. Есть прокат лыж (пн,вт-выходной), теплая раздевалка. Состояние прокатных лыж не очень. Есть парковка внутри базы - за воротами. Если ворота закрыты, можно парковаться на ул.Патрульной и Спортивной. Две петли по 7,5км со срезками на 3 и 5 км. Полотно широкое, периодически проходят всероссийские соревнования. Рельеф трассы больше всего похож на Волкушу. Начало и конец относительно спокойные, а середина - холмистая. Нарезается классическая лыжня. Также есть освещенка 3км, но пользуются ей все, поэтому там кататься на лыжах не совсем удобно. Рельеф достаточно сложный, на левой трассе примерно на 4-ом километре есть подьем- аналог красногорского Эвереста.',
        length: 17,
        region: 'SAMARA',
        source: 'stremglav',
        gpx: 'tracks/ski/lada_park_vostok_ski_omaps.gpx',
        ski_kind: 'FICKLE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Ласточка',
        sneg: 'lastochka',
        info: 'Прокат лыж, теплые домики. На трассу можно попасть, запарковав машину на слепом съезде с объездной дороги тут (104.064302 52.335476)',
        length: 6.8,
        region: 'IRKUTSK',
        source: 'stremglav',
        gpx: 'tracks/ski/lastochka_irkutsk_vostok_1_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Лаура',
        sneg: 'laura',
        length: 9.2,
        region: 'KRASNODAR',
        source: 'stremglav',
        gpx: 'tracks/ski/laura_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Мирный, Заречная',
        sneg: 'mirnyi',
        length: 11.4,
        region: 'DV',
        source: 'stremglav',
        gpx: 'tracks/ski/mirnyy_zarechnaya_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'ЛБ ФИАН',
        sneg: 'puschino',
        info: 'Накатывают под конёк и классику снегоходом с прицепными, регулярно. Основная петля 3,5 км. Рельеф внутреннего круга спортивный, по склонам лесного оврага, дополненный искусственными насыпями в конце подъемов. Внешний круг - рельеф поспокойнее. Большая петля на юге - прогулочный маршрут, не подготавливается. Красивый лес. На спортивной части трассы есть освещение. Рядом - детская горка, закрытая от трассы бруствером. Есть здание детской секции с раздевалкой. Парковка примерно на 20 машин.',
        length: 8,
        region: 'TULA',
        link: 'https://www.skisport.ru/forum/cross-country-routes/42562/',
        source: 'stremglav',
        gpx: 'tracks/ski/lb_fian_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'ЛБК Ангарский',
        sneg: 'lbk-angarsk',
        info: 'Трассы готовы всегда на любой вкус круги от 1 до 10 км. Комплекс работает с 9:00 до 22:00. Вход 50 рублей, есть прокат лыж и теплые раздевалки. Освещённая трасса 2,. км. Лыжероллерный круг 2.5 км. Тел. +7 (902) 579-11-58',
        length: 15,
        region: 'IRKUTSK',
        link: ['https://t.me/lbk38', 'http://lbk38.ru'],
        source: 'stremglav',
        gpx: 'tracks/ski/lbk_angarskiy_vostok_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Левковская гора',
        sneg: 'levkovskaya-gora',
        info: 'Круг аж целых 14 км! Готовится и поддерживается местными энтузиастами. Для спортсменов - это не лучший вариант, т.к. местами мягковато, иногда проваливаются палки, достаточно узко, много поворотов.',
        length: 17.5,
        region: 'MSK',
        link: 'https://vk.com/levkovskaya_gora',
        source: 'stremglav',
        gpx: 'tracks/ski/levkovskaya_gora_ski_omaps.gpx',
        ski_kind: 'FICKLE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Павловский Посад, Ледовая арена',
        sneg: 'petrusevoi-pposad',
        info: 'Небольшая трасса с искусственным рельефом и освещением. Готовится классика и конёк.',
        length: 2,
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/ledovaya_arena_pavlovskiy_posad_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Лесопарк Елочки',
        sneg: 'elochki',
        info: 'Дистанции 1 км, 3 км, 5 км. Готовится бураном.',
        length: 6.6,
        region: 'MSK',
        link: 'https://www.nf-ski.ru/2021/01/26/ёлочки/',
        source: 'stremglav',
        gpx: 'tracks/ski/lesopark_elochki_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Лесопарк Ступино',
        sneg: 'stupino-les',
        info: 'Лыжня выходного дня, где взаимно толерантно сосуществуют лыжники, пешеходы и собаки. Большой круг около 5 км. Первые 2км гуляют все, дальше - только лыжники. Видно что за тропинками следят иногда, обпиливают ветки , стараются поддерживать проход на ширину тропинки. На буране лыжню не накатывают, освещения нет. Как правило существует только лыжня для классики, вариант для неспешной прогулки. Рельеф с небольшими перепадами, лёгкие затяжные спуски и подъемы, много поворотов, прямых участков практически нет. Указатели отсутствуют.',
        length: 4.6,
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/lesopark_stupino_ski_omaps.gpx',
        ski_kind: 'WALKWAY',
        type: ['SKI']
    },
    {
        name: 'Летова тропа экопарк',
        sneg: 'letova-tropa',
        length: 1.9,
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/letova_tropa_ekopark_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Лидер [Иваново]',
        sneg: 'lider-ivanovo',
        info: 'В период снегопада трассу периодически укаывает снегоход. Несколько спусков и техничных подъемов, набор высоты на круг 125м. Трасса с лыжным мостом (самопересечение). Есть судейский вагончик.',
        length: 5.2,
        region: 'IVANOVO',
        source: 'stremglav',
        gpx: 'tracks/ski/lider_ivanovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Лисья гора',
        sneg: 'foxhill',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/lisya_gora_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Лисья Грива, Нижний Новгород',
        sneg: 'foxhillnn',
        info: 'Трасса зимой регулярно готовится снегоходом с прицепными устройствами, летом выкашивается. Проводятся соревнования по лыжным гонкам и беговому кроссу. Сложный рельеф, красивая местность. Есть небольшая раздевалка, туалет. Проката нет. Можно арендовать коттедж.',
        length: 5.36,
        region: 'N_NOVGOROD',
        link: ['https://lisyagriva.ru', 'https://t.me/lisya_griva', 'https://vk.com/club226503297'],
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
        type: ['SKI']
    },
    {
        name: 'Казань, Локомотив',
        sneg: 'lokokazan',
        info: 'Трасса практически без рельефа, готовит ратрак. Общая длина подготавливаемого полотна 13.4км. Периодически проводятся разные соревнования. Во время проведения соревнований на стадион как правило не пускают, но можно от стоянки вдоль забора тоже выкатывать на основной круг.',
        length: 13.4,
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
        type: ['SKI']
    },
    {
        name: 'Богородское, Лотос',
        sneg: 'lotos-bog',
        info: 'Занимается детская лыжная секция ФОК Лотос.',
        length: 2.4,
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/lotos_bogorodskoe_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'оз Борисоглебское',
        sneg: 'ramenskoe-borisoglebskoe',
        info: 'Роллерка 2.5км + дополнительные зимние петли.',
        length: 5.1,
        region: 'MSK',
        link: 'https://www.skisport.ru/forum/rollerski-routes/89525/',
        source: 'stremglav',
        gpx: 'tracks/ski/lt_oz_borisoglebskoe_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Лужники',
        sneg: 'lujniki',
        info: 'Ратрак, снегогенерация, освещение, платный вход, регистрация.',
        region: 'MSK',
        link: ['https://ski-biathlon.sport.moscow/', 'https://www.skisport.ru/forum/cross-country-routes/87895/'],
        source: 'stremglav',
        gpx: 'tracks/ski/luzhniki_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Череповец, Лыжный стадион',
        sneg: 'cherepovec-skistad',
        info: 'Живописная лыжня. Удобно кататься и спортсменам, и любителям. Проводится регулярная подготовка, есть освещение, кататься можно до позднего вечера. Раздевалки с обогревателями, вешалками и скамейками, прокат с новым инвентарем (работаем с пятницы по воскресенье). Проводится много сорвевнований. Большая парковка. Без машины добраться затруднительно. Тел. +7 (921) 732-25-17',
        length: 7.6,
        region: 'VOLOGDA',
        source: 'stremglav',
        gpx: 'tracks/ski/lyzhnyy_stadion_cherepovets_sever_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Лыжня Андреева',
        sneg: 'taldom',
        info: 'Талдомская лыжня. Готовится бураном. Есть классика и конёк. 4 практически плоские петли по 500 метров и часть по опушке леса. Есть срезки на 1/1,5/2 км. Есть парковка (всё бесплатно).',
        length: 2.5,
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
        type: ['SKI']
    },
    {
        name: 'Лыжня Курышева',
        region: 'BASH',
        source: 'stremglav',
        gpx: 'tracks/ski/lyzhnya_kurysheva_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Лысая гора',
        sneg: 'bitca-lysaya',
        length: 1.9,
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/lysaya_gora_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Любляна Егорьевск',
        sneg: 'lyubliana-egorievsk',
        length: 5,
        region: 'MSK',
        link: ['https://vk.com/lublyana', 'http://egorievsk.tv/main/gorodskie-novosti/1777-segodnya-o-lyzhah.html'],
        source: 'stremglav',
        gpx: 'tracks/ski/lyublyana_egorevsk_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Дзержинск, Магнитная стрелка',
        sneg: 'magnetic-niddle',
        info: 'Модульное здание на лыжно-биатлонном стадионе, в помещениях которого размещаются раздевалки, туалеты, душевые, склад оборудования и мастерская по ремонту спортивного снаряжения. Лыжероллерная трасса, освещение. Режим работы ЛБ Комплекса: В летнее время с 6.00 до 22.00 с 10.00 до 12.00 и с 15.00 до 19.00 – тренировки по расписанию СШ Магнитная Стрелка В зимнее время с 8.00 до 22.00 (суббота-воскресенье) с 10.00 до 14.00 – тренировки по расписанию СШ Магнитная Стрелка (понедельник – пятница) с 15.00 до 19.00 – тренировки по расписанию СШ Магнитная Стрелка',
        length: 6.4,
        region: 'NSK',
        link: 'https://ms.r52.ru/liegi/',
        source: 'stremglav',
        gpx: 'tracks/ski/magnitnaya_strelka_dzerzhinsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Максима парк',
        sneg: 'maksima',
        info: 'Конно-спортивный комплекс делает попытки развивать лыжное направление. Периодически накатывается трасса, проводятся соревнования. Прицепными устройствами подготавливается кольцо 5км, в основном по открытой местности. Бесплатная парковка, теплые раздевалки в вагончиках (мужская и женская), туалет, кафе, возможность размещения. В целом, по состоянию на сезон 25-26, из плюсов можно отметить серьезную рекреационную инфраструктуру, из областей для развития - минималистическое и не устоявшееся трассовое хозяйство.',
        length: 5.08,
        region: 'MSK',
        link: 'https://t.me/maximaparkski',
        source: 'stremglav',
        gpx: 'tracks/ski/maksima_park_ski_omaps.gpx',
        ski_kind: 'FICKLE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Малевич',
        sneg: 'malevich',
        info: 'Ратрак, освещение',
        region: 'MSK',
        link: 'https://www.direkcia-parkov.com/',
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
        type: ['SKI']
    },
    {
        name: 'Марьино',
        sneg: 'maryno',
        info: 'Роллерка 4км.',
        length: 7.7,
        region: 'MSK',
        link: 'https://biathlon-maryino.ru/winter-trails',
        source: 'stremglav',
        gpx: 'tracks/ski/marino_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Зеленодольск, Маяк',
        sneg: 'zelenodolsk',
        info: 'Лыжная трасса, асфальтовая роллерка. Есть гостиница, многопрофильный спортзал. Тел. +7 (84371) 5-19-18 +7 (84371) 5-14-39 +7 (84371) 5-11-29 +7 (84371) 5-14-40 +7 (84371) 5-14-06 (гостиница)',
        length: 13.4,
        region: 'TATARSTAN',
        source: 'stremglav',
        gpx: 'tracks/ski/mayak_zelenodolsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Шелехов, стд Металлург',
        sneg: 'shel-met',
        info: 'Гардероб, прокат.',
        length: 2,
        region: 'IRKUTSK',
        source: 'stremglav',
        gpx: 'tracks/ski/metallurg_shelekhov_vostok_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Мещерский',
        sneg: 'meschersky',
        info: 'Ратрак.',
        length: 24.4,
        region: 'MSK',
        link: ['http://park-meshersky.ru/', 'https://mosskis.ru/55/'],
        source: 'stremglav',
        gpx: 'tracks/ski/meshcherskiy_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Микунь',
        sneg: 'mikun',
        info: 'Трасса готовится под конек и классику.',
        length: 5,
        region: 'KOMI',
        source: 'stremglav',
        gpx: 'tracks/ski/mikun_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Можайск',
        sneg: 'mojaysk',
        info: 'Есть освещение, оснежение, рельеф не экстремальный, но присутствует. Роллерка.',
        length: 2.2,
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
        type: ['SKI']
    },
    {
        name: 'Молодежный',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/molodezhnyy_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Мончегорск',
        sneg: 'monchegorsk',
        length: 10,
        region: 'MURMANSK',
        link: 'https://yandex.com/maps/-/CPfgnBZf',
        source: 'stremglav',
        gpx: 'tracks/ski/monchegorsk_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Морозко, Нижний Новгород',
        sneg: 'morozkonn',
        info: 'Регулярно готовится группой энтузиастов с помощью буранов с прицепными устройствами. Протяженность 7,5 км со срезками на 5, 3, 2 км. Имеются несколько бесплатных парковок. Прочая инфраструктура отсутствует. Рельеф умеренный. Короткие подъёмы чередуются короткими не опасными спусками. Набор высоты на круге 180м. По малоснежью заметно, что основание трассы не идеальное ровное, присутствуют волны и микрорельеф. Ширина трассы не велика и не везде достаточна для комфортного обгона.',
        length: 8.9,
        region: 'N_NOVGOROD',
        link: 'https://vk.com/morozko_bk',
        source: 'stremglav',
        gpx: 'tracks/ski/morozko_n_novgorod_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Мураново',
        sneg: 'muranovo',
        info: 'Трасса готовится нерегулярно вместе с трассой Нововоронино. В остальное время существует как район внетрассового катания.',
        length: 2.1,
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/muranovo_ski_omaps.gpx',
        ski_kind: 'FICKLE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Муратово Муром',
        sneg: 'muratovo',
        info: 'Трасса Меленковского спортивного Лыжного Клуба. Профилированная лыжная трасса в полуоткрытой местности в пойме Оки. Лиственный лес. Трасса размечена. Ежегодно проводится традиционная лыжная гонка Муратовские берега.',
        length: 10.1,
        markir: true,
        region: 'VLADIMIR',
        link: 'https://vk.com/scprodv',
        source: 'stremglav',
        gpx: 'tracks/ski/muratovo_murom_tsentr_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Мурмаши',
        sneg: 'murmashi',
        info: 'Лыжная трасса, готовится силами местной спортшколы и здоровенным стареньким ратраком, списанным из Долины Уюта лет 10 назад и восстановленным собственными силами.',
        length: 9.2,
        region: 'MURMANSK',
        link: 'https://vk.com/sportmurmashi',
        source: 'stremglav',
        gpx: 'tracks/ski/murmashi_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Мытищи',
        sneg: 'mytishchi',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/mytishchi_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Нацпарк Лосиный остров',
        sneg: 'losinyi-ostrov',
        region: 'MSK',
        source: 'stremglav',
        gpx: 'tracks/ski/natspark_losinyy_ostrov_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Незнаново, Нерехта',
        region: 'YAROSLAVL',
        source: 'stremglav',
        gpx: 'tracks/ski/neznanovo_nerekhta_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Никола-Ленивец',
        sneg: 'nikola',
        length: 10.4,
        region: 'KLGA',
        source: 'stremglav',
        gpx: 'tracks/ski/nikola_lenivets_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Николина Гора',
        sneg: 'nikolinagora',
        info: 'Трасса ухоженная, готовится регулярно под конек и классику снегоходом с прицепными устройствами. Полотно профилированное, есть два лыжных мостика. Трасса проходит по живописной полуоткрытой местности в пойме Москвы реки. Рельеф практически плоский, нет перепадов высот, присутствует только микрорельеф. На открытых местах установлены снегозащитные барьеры. Лыжня Николина гора - некоммерческая частная инициатива. Вертодром "Горка" поддерживает это начинание и бесплатно предоставляет лыжникам свою парковку.',
        length: 4,
        region: 'MSK',
        link: 'https://chat.whatsapp.com/KpTMOQyvClx2UWu9S0WIaW',
        gpx: {
            '1':'tracks/ski/nikolina_gora_ski_omaps.gpx',
            '2':'tracks/ski/nikolina_gora_2024_ski_omaps.gpx'
        },
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Одинцово',
        sneg: 'odintsovo',
        source: 'stremglav',
        region: 'MSK',
        info: 'Ратрак, оснежение, освещение, раздевалки, кафе.',
        link: 'https://t.me/lazutinka',
        gpx: 'tracks/ski/odintsovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Химки, Снежинка',
        sneg: 'snezhinka',
        source: 'stremglav',
        length: 2.9,
        region: 'MSK',
        info: 'Лыжная трасса, роллерка. Лыжная трасса интересная с подъемами и спусками, с равнинной частью. В выходные часто проводятся соревнования по лыжам и биатлону. Трасса огорожена. Работает теплая раздевалка. Есть туалет, зимой прокат лыж, каток, летом площадка с тренажорами. Есть вечернее освещение.',
        gpx: 'tracks/ski/snezhinka_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Пересвет',
        sneg: 'peresvet',
        source: 'stremglav',
        region: 'MSK',
        gpx: 'tracks/ski/peresvet_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Покровское-Стрешнево',
        sneg: 'pokrovskoe-streshnevo',
        source: 'stremglav',
        length: 2,
        region: 'MSK',
        info: 'Готовится бураном.',
        gpx: 'tracks/ski/pokrovskoe_streshnevo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Строгино',
        sneg: 'strogino',
        source: 'stremglav',
        length: 4.9,
        region: 'MSK',
        info: 'Около ресторана Берег есть прокат лыж. Со своим инвентарем пускают в теплую раздевалку (М и Ж отдельно), и даже браслет для камеры хранения выдают - бесплатно. Вдоль улицы Исаковского теперь платные парковки. Можно оставить машину около магазина Магнит или Азбука Вкуса на Исаковского д 33.',
        link: ['https://stroginowakepark.ru/zimnie-aktivnosti/lyzhnaja-trassa-i-prokat/', 'https://t.me/stroginoski'],
        gpx: 'tracks/ski/strogino_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Сокольники',
        sneg: 'sokolniki',
        source: 'stremglav',
        length: 2,
        region: 'MSK',
        info: 'Ратрак периодически.',
        gpx: 'tracks/ski/sokolniki_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Пушкино биатлон',
        sneg: 'pushkino-biatlon',
        source: 'stremglav',
        length: 3.42,
        region: 'MSK',
        info: 'Биатлонная трасса г.Пушкино. Вход свободный, есть 2 подъема-спуска по 50 м. Короткие круги 2, 2.5, 3 км. Традиционно узковато, вертляво, но трасса существует, её готовят. Дети из биатлонной секции тренируются.',
        link: ['https://vk.com/biathlonpushkino', 'https://www.roofbmo.ru/pushkino'],
        gpx: 'tracks/ski/pushkino_biatlon_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Клуб Наседкина',
        sneg: 'nasedkina',
        source: 'stremglav',
        length: 8.68,
        region: 'MSK',
        info: 'Замечательная круговая трасса в сосновом лесу вдоль высокого берега живописной речки Нерская. Полный круг почти 8км. Конёк и классика. Трасса размечена. Часть трассы с освещением. История клуба Наседкина: https://vk.com/wall-41789119_2468',
        link: ['http://sportgzhel.ru/', 'https://www.skisport.ru/forum/cross-country-routes/90760/'],
        gpx: 'tracks/ski/nasedkina_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Орешник',
        sneg: 'oreshnik',
        source: 'stremglav',
        length: 7.6,
        region: 'MSK',
        link: 'https://www.skisport.ru/forum/cross-country-routes/47253/',
        gpx: 'tracks/ski/oreshnik_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Чулково',
        sneg: 'chulkovo',
        source: 'stremglav',
        length: 4.44,
        region: 'MSK',
        link: 'https://chulkovosport.ru/?p=3861',
        gpx: 'tracks/ski/chulkovo_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Солонога',
        sneg: 'solonoga',
        source: 'stremglav',
        length: 14.8,
        region: 'MSK',
        info: 'Большой (5 км) и малый (3 км) круги в лесном массиве у Юбилейного пруда называются "Заводской круг" или (в некоторых источниках) трасса имени С.И.Золотухи, который был директором Машиностроительного завода в 70-х. Лыжная трасса Солонога, которая также начинается от Юбилейного пруда, уходит вглубь леса и через 4км приводит на стартовую поляну, от которой начинается спортивный 5км круг. Петляет он по склонам долины небольшой речки Солонога, притоку Клязьмы. Трасса имеет девять подъемов разной крутизны и протяженности.',
        link: ['https://www.skisport.ru/forum/cross-country-routes/61459/?ysclid=lsyitp7889555081827#1261489', 'https://yandex.ru/maps/?ll=38.500243%2C55.811500&mode=usermaps&um=constructor%3A7e8d1389ed1d1c677628d54df94430c5175932846df2473c958a7fcf606dfba6&z=15', 'https://t.me/+WJ5Rwy7vxBo3YmRi'],
        gpx: 'tracks/ski/solonoga_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'СШ Ока',
        sneg: 'oka',
        source: 'stremglav',
        length: 2.56,
        region: 'MSK',
        info: 'Вдоль лыжной трассы рядом с территорией спортивного комплекса «Металлург» на протяжении 1км смонтировано восемь мощных светильников.',
        link: ['https://www.skisport.ru/forum/cross-country-routes/62047/', 'https://www.skisport.ru/forum/cross-country-routes/55055/'],
        gpx: 'tracks/ski/oka_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Серебряный Бор',
        sneg: 'serbor',
        source: 'stremglav',
        length: 4.4,
        region: 'MSK',
        info: 'Ратрак периодически.',
        gpx: 'tracks/ski/serbor_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Чистый залив',
        sneg: 'chistyi-zaliv',
        source: 'stremglav',
        length: 2.5,
        region: 'MSK',
        gpx: 'tracks/ski/chistyi_zaliv_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Сосновка Звягино',
        sneg: 'sosnovka-zviagino',
        source: 'stremglav',
        length: 2.7,
        region: 'MSK',
        info: 'Готовится коллективом энтузиастов снегоходом с прицепными.',
        link: 'https://t.me/nordicski',
        gpx: 'tracks/ski/sosnovka_zviagino_ski_omaps.gpx',
        ski_kind: 'FICKLE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Обнинск',
        sneg: 'obninsk',
        source: 'stremglav',
        length: 16,
        region: 'KLGA',
        info: 'Роллерка 2,5км.',
        link: 'https://vk.com/skisport_obninsk',
        gpx: 'tracks/ski/obninsk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Умка',
        sneg: 'umka',
        source: 'stremglav',
        length: 3.5,
        region: 'MSK',
        info: 'Трасса существовала с 1980-х годов и регулярно обслуживалась ориентировочно до 2020г СШ №1 и ФОК Умка.',
        link: 'https://www.skisport.ru/forum/cross-country-routes/80480/',
        gpx: 'tracks/ski/umka_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Силикатчик',
        sneg: 'silikatchik',
        source: 'stremglav',
        length: 3,
        region: 'MSK',
        info: 'Трасса готовится силами местного СК "Тучково", снегоходом, и состоит из двух условных "кругов": 3-х километрового, равнинного, плоского, начинающегося от местного СК "Тучково" и проходящего по его территории и вокруг футбольных полей, и далее по полям за ним и частично по лесу. И второго, рельефного, проходящего по бывшему карьеру, с очень неплохими спускам и подъемами. Рельефный круг также - около 3 км. Около СК "Тучково" Есть парковка, машин на 10, по адресу: Тучково, ул. Новая, 17. Есть еще парковка на 5-6 машин чуть дальше, в конце ул. Новой и начале ул. Трудовая.',
        gpx: 'tracks/ski/silikatchik_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Шильково',
        sneg: 'shilkovo',
        source: 'stremglav',
        length: 10,
        region: 'MSK',
        info: 'Трасса состоит из двух частей открытой (в поле) и лесной. Достаточно серьезный пересечённый рельеф. Трасса используется, как летом, так и зимой для тренировок СДЮСШОР «Академия Спорта», ЛК «Наседкина», профессиональными спортсменами и любителями. Суммарная длина трассы 9,2 км. Подготовка трасс регулярно спецтехникой на средства жертвователей.',
        link: 'https://vk.com/vskski',
        gpx: 'tracks/ski/shilkovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Юде-Кон Дубна',
        sneg: 'udekon',
        source: 'stremglav',
        length: 5.1,
        region: 'MSK',
        link: ['https://vk.com/udekondubna', 'https://www.skisport.ru/forum/cross-country-routes/61962/'],
        gpx: 'tracks/ski/udekon_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Парк Олимпийской деревни',
        sneg: 'olympder',
        source: 'stremglav',
        length: 2.1,
        region: 'MSK',
        link: 'https://www.skisport.ru/forum/cross-country/74018/',
        gpx: 'tracks/ski/olympder_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Ферма',
        sneg: 'ferma-sp',
        source: 'stremglav',
        length: 6.7,
        region: 'MSK',
        info: 'Регулярно Бураном закатываются две трассы: так называемые "физкультурная" (к северу от оз.Лесное) и "спортивная" (к югу). Физкультурная преимущественно равнина с легким рельефом. Обычно закатывается с конца ноября-начала декабря и до апреля и регулярно затаптывается пешеходами. Периодически режется лыжня под классику. Длина круга 4,6-4,7км. Под весну грязно: значительная часть трассы под елками. Спортивная часть трассы (отдельная петля от стадиона) рельефная. В начале трассы очень тяжелый тягун с "торчком"(перепад 23метра), далнее тягуны разной длины (перепад 10-12 метров) плюс участки равнины и небольшие подъемы-спуски.',
        link: ['https://www.skisport.ru/forum/cross-country/68884/', 'https://www.skisport.ru/forum/cross-country-routes/79003/'],
        gpx: 'tracks/ski/ferma_sp_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Тягачева ГК',
        sneg: 'tyagacheva',
        source: 'stremglav',
        length: 3.3,
        region: 'MSK',
        info: 'Рекомендуется лыжниками как вариант для отдыха в компании с размещением на выходные или каникулы.',
        link: 'https://shukolovo.ru/sport/lyzhnya',
        gpx: 'tracks/ski/tyagacheva_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Садовники',
        sneg: 'sadovniki',
        source: 'stremglav',
        length: 1.5,
        region: 'MSK',
        info: 'В 2022 установлен прокатный модуль Москомспорта.',
        gpx: 'tracks/ski/sadovniki_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Черкизовский детский парк',
        sneg: 'cherkizovo',
        source: 'stremglav',
        length: 0.6,
        region: 'MSK',
        info: 'Оснежение.',
        gpx: 'tracks/ski/cherkizovo_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Парк Яуза пр.Олонецкий',
        sneg: 'yauza-olonetskiy',
        source: 'stremglav',
        length: 2.8,
        region: 'MSK',
        info: 'Прокатный модуль Мосспортобъекта, работает нерегулярно (закрыт?). За локацией дурная слава - дорожки посыпают песком.',
        gpx: 'tracks/ski/yauza_olonetskiy_ski_omaps.gpx',
        ski_kind: 'FICKLE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Черноголовка Стадион',
        sneg: 'chernogolovka-stadion',
        source: 'stremglav',
        length: 2.25,
        region: 'MSK',
        info: 'Трасса готовится бураном с бороной и катком под конек.',
        gpx: 'tracks/ski/chernogolovka_stadion_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Ольгинский лесопарк',
        sneg: 'olginsky',
        source: 'stremglav',
        length: 2.3,
        region: 'MSK',
        info: 'Освещенный круг 2км, в парке есть снегоход с бороной.',
        gpx: 'tracks/ski/olginsky_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Пестовский лесопарк',
        sneg: 'pestovsky',
        source: 'stremglav',
        length: 1.35,
        region: 'MSK',
        gpx: 'tracks/ski/pestovsky_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Павловская Слобода',
        sneg: 'psloboda',
        source: 'stremglav',
        length: 2.2,
        region: 'MSK',
        gpx: 'tracks/ski/psloboda_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Песковатка',
        sneg: 'peskovatka',
        source: 'stremglav',
        length: 3.2,
        info: 'Готовят под конек и классику, проводятся соревнования.',
        gpx: 'tracks/ski/peskovatka_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Посейдон',
        sneg: 'poseydon',
        source: 'stremglav',
        length: 1.3,
        region: 'MSK',
        info: 'Трасса готовится коллективом энтузиастов с использованием снегохода Буран и навесного оборудования: борона, резак. Классика - не часто, под конек 1-2 раза в неделю. В снегопады чаще.',
        gpx: 'tracks/ski/poseydon_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Чуприяновка спортшкола',
        sneg: 'chupriyanovka',
        source: 'stremglav',
        length: 9.8,
        region: 'TVER',
        info: 'Есть роллерка.',
        gpx: 'tracks/ski/chupriyanovka_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Чуприяновка ЛБ ТвГУ',
        sneg: 'chupriyanovka',
        source: 'stremglav',
        length: 7.6,
        region: 'TVER',
        gpx: 'tracks/ski/chupriyanovka_tvgu_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Сосны Рассудово',
        sneg: 'sosny-rassudovo',
        source: 'stremglav',
        length: 5.5,
        region: 'MSK',
        info: 'Часть трассы проходит по парку, другая часть - по прилегающему к парку лесному хвойному массиву. Трасса прогулочная, равнинная. Готовится, судя по всему, регулярно под коньковый и классический ход снегоходом с прицепными устройствами и (возможно) ратраком. На части трассы, проходящей по территории парка, присутствует освещение. На этом же участке в начале сезона проводится искусственное оснежение. Парковочных мест рядом с трассой достаточно - большая бесплатная парковка есть у входа в сам парк (см. https://yandex.ru/maps/-/CHERaV3U ). Также много парковочных мест со стороны жилой застройки, прилегающей к парку.',
        gpx: 'tracks/ski/sosny_rassudovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Хлебниковский лесопарк',
        sneg: 'hlebnikovskiy',
        source: 'stremglav',
        length: 1.01,
        region: 'MSK',
        info: 'Круг накатывается бураном. Режут 2 лыжни с двух сторон. Тренируются дети из СШОР Юности Москвы. Выход на трассу от Липкинского шоссе также уплотнен бураном по всей длине и хорошо проезжаем коньком. Также есть подъездная лыжня вдоль забора складского комплекса "Армтек".',
        gpx: 'tracks/ski/hlebnikovskiy_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Кузьминки Деда Мороза',
        sneg: 'kuzminki-dmoroza',
        source: 'stremglav',
        length: 2.8,
        region: 'MSK',
        gpx: 'tracks/ski/kuzminki_dmoroza_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Цаговский лес',
        sneg: 'tzagovskiy',
        source: 'stremglav',
        length: 4.8,
        region: 'MSK',
        info: 'Новая трасса, создаваемая энтузиастми в Жуковском при поддержке администрации.',
        link: 'https://t.me/zhukski',
        gpx: 'tracks/ski/tzagovskiy_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Ноздриха [Нск]',
        sneg: 'nozdriha',
        source: 'stremglav',
        length: 13.9,
        region: 'NSK',
        info: 'Отличные подготовленные трассы. Есть освещенная трасса для вечерних тренировок. График работы вт - вс (пн вых.), с 10:00 до 22:00, тел. +7 (913) 910-10-01',
        link: 'https://nozdrikha.ru/',
        gpx: 'tracks/ski/nozdriha_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'НСЗ [Нск]',
        sneg: 'nsz',
        source: 'stremglav',
        region: 'NSK',
        info: 'Живописная лыжня проходит через густой хвойный лес и во время прогулки можно любоваться природной красотой тихих лесных уголков. База работает с 10:00 до 16:00 (прокат), весь инвентарь — лыжи, палки, ботинки — можно взять в пункте проката. Размеры начинаются с 30-го. Для работников АО «НСЗ» действует скидка, поэтому час проката стоит 40 рублей, для получения скидки необходимо предоставить пропуск на предприятие. Для всех остальных желающих час проката обойдется в 200 рублей в час. Проезд до остановки автобуса Баганская.',
        link: 'https://nsznsk.ru/press/news/лыжная-база-ао-нсз/',
        gpx: 'tracks/ski/nsz_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Сосновый бор [Нск]',
        sneg: 'sosnovyi-nsk',
        source: 'stremglav',
        length: 5,
        region: 'NSK',
        info: 'Есть прокат, график работы ежедневно с 10.00 до 21.00.',
        gpx: 'tracks/ski/sosnovyi_nsk_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Снежок',
        sneg: 'snejok-nabchelny',
        source: 'stremglav',
        length: 6.6,
        region: 'TATARSTAN',
        info: 'Трасса готовится снегоходом. По большей части узкая, под классику. Имеются петли 6км и 1.5км. Есть сведения о существовании петли 3км. Работает прокат: зимой лыжи, летом велосипеды. На базе есть баня, мангалы, домики.',
        gpx: 'tracks/ski/snejok_nabchelny_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Холмы',
        sneg: 'holmy',
        source: 'stremglav',
        length: 5.85,
        region: 'MSK',
        info: 'Трасса находится в сосновом лесу. Есть круги 1, 2, 3, 5 км. Везде нарезка под конек и классику. Круг на 1 км освещен, остальные только в светлое время суток. Отличная навигация по маршруту. Парковка рядом с трассой или со школой милиции. Есть туалет, раздевалка, прокат.',
        link: 'https://vk.com/sportviktoriya',
        gpx: 'tracks/ski/holmy_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Прибрежный парк',
        sneg: 'pribrejnyi-nabchelny',
        source: 'stremglav',
        length: 5.2,
        region: 'TATARSTAN',
        info: 'Трасса состоит из двух участков: равнинные 3км и рельефные 5км. Рельеф присутствует на петлях, спускающихся к набережной реки. В целом трасса широкая, режется классика. Спуски не самые удачные - заканчиваются довольно крутыми поворотами на подъем, уклона в сторону поворота нет. Внизу спусков трасса часто подразбита. Из недостатков: на поверхность трассы в некоторых местах присутствует микрорельеф, что периодически создает ощущение, что едешь по стиральной доске; на некоторых участках трассы есть боковой уклон. Есть освещение, прокат.',
        gpx: 'tracks/ski/pribrejnyi_nabchelny_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Радуга Красноярск',
        sneg: 'raduga-krs',
        source: 'stremglav',
        length: 10.8,
        info: '2 петли по 5 км с интенсивным и умеренным рельефом. Набор на горном круге порядка 160м. Готовят техникой. Раздевалка с душем 150р. Сервиса нет. Освещение до 22.00',
        link: 'https://vk.com/radugasibfu?ysclid=m5k4bnm4o1192884704',
        gpx: 'tracks/ski/raduga_krs_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Яковлевское Ярославль',
        sneg: 'yakovlevskoe-yaroslavl',
        source: 'stremglav',
        length: 5.4,
        region: 'YAROSLAVL',
        info: 'СШОР №4: тел.+7 (903) 820-94-89, +7 (4852) 23-46-00, +7 (4852) 28-11-09',
        link: 'https://sdiusshor4.narod.ru/index/lyzhnaja-baza/0-96',
        gpx: 'tracks/ski/yakovlevskoe_yaroslavl_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Щелоковский хутор',
        sneg: 'schelokov-hut',
        source: 'stremglav',
        length: 10,
        region: 'N_NOVGOROD',
        info: 'Трассы на 2 км, 3 км, 5 км, 10 км подготовлены снегоходами и ратраком. Есть круг с искусственным освещением на 3,3 км. Основные трассы до 5 км хорошо и широко раскатаны, круг на 10 км сделан не всегда качественно. Набор высоты на 10 км — 215 м. Помимо подготовленных лыжных трасс в Щелковском хуторе есть много километров самодельной лыжни для прогулок по лесу. Из-за большого числа посетителей трасса может быть местами грязная и разбитая. Базы и прокаты: Insport - ул. Горбатовская, 2а; 7 (831) 465-45-32, +7 (910) 884-02-86; Кузнечиха - д. Кузнечиха, 143; 7 (831) 417-57-12; Снежинка - ул. Горбатовская, 43; 7 (920) 042-62-76; Sun Sport - Адрес: ул. Корейская, 22. Школа № 135 (вход с обратной стороны); 7 (999) 139-79-65, +7 (831) 431-05-10; Теплые помещения для переодевания, гардероб. В некоторых прокатах — кафе, теплые туалеты или биотуалеты.',
        gpx: 'tracks/ski/schelokov_hut_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'ОмГАУ лыжная трасса',
        sneg: 'omgau',
        source: 'stremglav',
        length: 11.3,
        region: 'OMSK',
        info: 'Трасса под классику и конек. Рельеф средний: два затяжных спуска и два пологих подъема, три насыпных горки. Готовится бураном с волокушей и прицепным резаком.',
        link: ['https://t.me/SkiClubOmich', 'https://vk.com/club224561979'],
        gpx: 'tracks/ski/omgau_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'ЦТВС Курьяново',
        sneg: 'kurianovo',
        source: 'stremglav',
        length: 1.2,
        region: 'MSK',
        info: 'Оснежение, прокат Моспортобъекта.',
        gpx: 'tracks/ski/kurianovo_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Устюжна',
        sneg: 'ustiujna',
        source: 'stremglav',
        length: 5.2,
        region: 'VOLOGDA',
        gpx: 'tracks/ski/ustiujna_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'ЦГЛ Мичуринск',
        sneg: 'michurinsk',
        source: 'stremglav',
        length: 10.7,
        gpx: 'tracks/ski/michurinsk_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Тропаревский парк',
        sneg: 'troparevo',
        source: 'stremglav',
        length: 4.5,
        region: 'MSK',
        info: 'Прокатный модуль МосСпортОбъект.',
        gpx: 'tracks/ski/troparevo_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Казань, Мирный',
        sneg: 'mirnyi-kazan',
        source: 'stremglav',
        length: 8,
        region: 'TATARSTAN',
        info: 'Лыжно-биатлонный комплекс, лыжероллерная трасса. Круги от 1 до 5 км. Регулярная качественная подготовка для конька и классики. Круги делятся на любительские и спортивные. Искусственное освещение на трассах, прокат лыж, теплая раздевалка, гардероб, туалеты. База оборудована на современном уровне. Платный вход на трассу от 100 до 250р.',
        link: ['https://t.me/LBK_kazan', 'https://vk.com/lbk_kzn'],
        gpx: 'tracks/ski/mirnyi_kazan_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Сыктывкар, Эжва',
        sneg: 'ejva',
        source: 'stremglav',
        length: 21.2,
        region: 'KOMI',
        info: 'Трассы готовятся ратраком. Включает прогулочные и спортивные петли. Двухэтажное здание лыжной базы с прокатом (300р), гардеробом, мастерской, буфетом. Работает база ежедневно, кроме понедельника или первого послепраздничного дня, до 17 часов. Лыжная база принадлежит деревоперерабатывающему комбинату "Монди СЛПК", тел. +7 821 246-91-60.',
        link: 'https://vk.com/ekllib_information',
        gpx: 'tracks/ski/ejva_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Paloheinä',
        sneg: 'paloheina',
        source: 'stremglav',
        length: 31.8,
        region: 'FINLAND',
        info: 'Ратрак. Парковка бесплатная на 4 часа. Трасса бесплатная.',
        gpx: 'tracks/ski/paloheina_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Гольфклуб Куркино',
        sneg: 'golf-kurkino',
        source: 'stremglav',
        length: 3,
        region: 'MSK',
        info: 'Тел. +7 (995) 002-65-00',
        link: 'https://vk.com/club33273148',
        gpx: 'tracks/ski/golf_kurkino_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Бужаниново',
        sneg: 'bujaninovo',
        source: 'stremglav',
        length: 5.6,
        region: 'MSK',
        info: 'Трасса поддерживается силами неравнодушных людей, проводятся соревнования, в том числе гонка памяти Коростелевых и другие.',
        link: 'https://vk.com/wall-84802147',
        gpx: 'tracks/ski/bujaninovo_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Лапшиха Кинешма',
        sneg: 'lapshiha',
        source: 'stremglav',
        length: 5.6,
        region: 'IVANOVO',
        info: 'Протяженность круга 5 км (7 спусков, 7 подъемов). Также имеется равнинный прогулочный круг 1,6 км для спокойного катания. Трасса была создана в 80х годах. Тел. 89125533772',
        gpx: 'tracks/ski/lapshiha_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Триумф Южно-Сахалинск',
        sneg: 'triumf-sahalin',
        source: 'stremglav',
        length: 10.2,
        region: 'DV',
        info: 'Скоростная спортивная трасса, удобная раздевалка и гардероб. Есть искусственное оснежение. На базе есть тренажёрный зал и спортивный залы, прокат лыж, кофе автомат и автомат с едой.',
        link: 'https://skisakhalin.ru',
        gpx: 'tracks/ski/triumf_sahalin_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Сахалинский лыжный марафон',
        sneg: 'sahalin-marathon',
        source: 'stremglav',
        length: 49.3,
        region: 'DV',
        info: 'Трасса марафона проложена из точки в точку: участники стартуют в посёлке Лесное, Корсаковского городского округа, а финишируют в городском парке Южно-Сахалинска.',
        link: 'https://skisakhmarathon.ru/',
        gpx: 'tracks/ski/sahalin_marathon_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Lles Cerdanya',
        sneg: 'lles',
        source: 'stremglav',
        region: 'ESP',
        length: 21,
        link: 'https://lles.net',
        gpx: 'tracks/ski/lles_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Дубовка Свободный',
        sneg: 'dubovka',
        source: 'stremglav',
        length: 11.5,
        region: 'DV',
        info: 'Есть лыжный прокат, работает кроме понедельника.',
        gpx: 'tracks/ski/dubovka_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Tuixent – la Vansa',
        sneg: 'tuixent',
        source: 'stremglav',
        region: 'ESP',
        length: 20.6,
        link: 'https://www.tuixent-lavansa.com/',
        gpx: 'tracks/ski/tuixent_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Магадан, Гороховое поле',
        sneg: 'gorohovoe-vyalbe',
        source: 'stremglav',
        length: 3.3,
        region: 'DV',
        info: 'Длина 2.5км, перепад 20м, набор 51м. Трассу готовят изредка к соревнованиям. Парковка стихийная в двух точках, проблемы с подъездом. Отсутствует общедоступное помещение для переодевания. Единственная трасса в черте города.',
        gpx: 'tracks/ski/gorohovoe_vyalbe_ski_omaps.gpx',
        ski_kind: 'FICKLE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Аниськино Петушки',
        sneg: 'aniskino',
        source: 'stremglav',
        length: 5.3,
        region: 'VLADIMIR',
        info: 'Кратко: есть парковка, трассу готовят бураном с прицепами, но не регулярно. Делают классику и конек, движение против часовой стрелки.',
        link: 'https://m.vk.com/clubpokrovski',
        gpx: 'tracks/ski/aniskino_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Снежная гора',
        sneg: 'snegora',
        source: 'stremglav',
        length: 16.2,
        region: 'IRKUTSK',
        info: 'Лыжная база на перевале. Снег рано ложится и поздно сходит. База работает только осенью и весной, зимой надо уточнять информацию по телефону. +7 914 938-71-37 Мисайлов Владимир Катание взрослый 300 р. детский 200, отдельно оплачивается машиноместо на парковке 100 р. Снег лежит с начала октября по начало мая, круги 5 км, 1,6 км и 10 км готовятся не регулярно, на данный момент укатан круг 5 км. В выходные работает теплый вагончик.',
        link: 'https://angara.net/forum/t65287',
        gpx: 'tracks/ski/snegora_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Чистые Ключи',
        sneg: 'chkliuchi',
        source: 'stremglav',
        length: 7.7,
        region: 'IRKUTSK',
        info: 'Трасса Шелеховской ДЮСШ Юность. Находится на выведенном из эксплуатации участке Култукского тракта (Автодорога Байкал). Асфальт. Накатывается снегоходом, периодически. Раздевалки пока нет.',
        link: 'https://dush-shelekhov.my1.ru/',
        gpx: 'tracks/ski/chkliuchi_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Трасса здоровья Барнаул',
        sneg: 'trassazdoroviabrn',
        source: 'stremglav',
        length: 25.2,
        region: 'ALTAI',
        info: 'Для массового катания трасса готовится ратраком. В 2006 году в Ленточном бору расчистили и обустроилили трассу протяженностью 25 километров. Она проходит вблизи основных лыжных баз, начинаясь и заканчиваясь на Динамо. Самая дальняя точка трассы - Домик лесника около железнодорожной станции Лебяжье. В местах пересечения трассы с газопроводом, Лесным трактом и шоссе Ленточный бор построены пешеходные мосты. В зимнее время на «Трассе здоровья» работают две зоны отдыха с бесплатным горячим чаем. За выходные по ней проходят на лыжах от 10 до 15 тысяч человек.',
        gpx: 'tracks/ski/trassazdoroviabrn_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Кемерово, Кузбасс-Арена',
        sneg: 'kuzbass-arena',
        source: 'stremglav',
        length: 6.6,
        region: 'KEMEROVO',
        info: 'Проводятся соревнования по лыжероллерам.',
        gpx: 'tracks/ski/kuzbass_arena_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Сургут, Олимпия',
        sneg: 'olimpia-surgut',
        source: 'stremglav',
        length: 10.7,
        region: 'KHMAO',
        info: 'Подготовленные лыжные трассы - 5км/3км/2км/1км. Есть гостиница. Большая парковка, территория ухоженная, есть прокат лыж - оплата наличными.',
        gpx: 'tracks/ski/olimpia_surgut_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Сургут, Снежинка',
        sneg: 'snejunka-surgut',
        source: 'stremglav',
        length: 5.06,
        region: 'KHMAO',
        info: 'Умеренный рельеф, хорошая подготовка трасс, длина 5км. Асфальт 3км - лыжероллерная трасса. Есть спортивная гостиница.',
        gpx: 'tracks/ski/snejunka_surgut_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Сямжа',
        sneg: 'siamja',
        source: 'stremglav',
        length: 5.4,
        region: 'VOLOGDA',
        info: 'Телефон спортшколы +7 (81752) 2-18-26',
        link: 'http://d20301.edu35.ru/',
        gpx: 'tracks/ski/siamja_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Риддер Лесное',
        sneg: 'ridder-lesnoe',
        source: 'stremglav',
        length: 11.8,
        region: 'KAZAKHSTAN',
        gpx: 'tracks/ski/ridder_lesnoe_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Ходынка',
        sneg: 'hodynka',
        source: 'stremglav',
        length: 0.5,
        region: 'MSK',
        info: 'Готовится трасса с использованием привозного снега.',
        gpx: 'tracks/ski/hodynka_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Куркинская лыжня',
        sneg: 'kurkino',
        source: 'stremglav',
        length: 2.6,
        region: 'MSK',
        gpx: 'tracks/ski/kurkino_ski_omaps.gpx',
        ski_kind: 'FICKLE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Воскресенск, Овраги',
        sneg: 'ovragivoskr',
        source: 'stremglav',
        length: 7.3,
        region: 'MSK',
        gpx: 'tracks/ski/ovragivoskr_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Лукинская лыжня',
        sneg: 'lukinskaya',
        source: 'stremglav',
        length: 2.2,
        region: 'MSK',
        link: ['https://t.me/skiclubnp', 'https://vk.com/skiclubnp'],
        gpx: 'tracks/ski/lukinskaya_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Парк Свиблово',
        sneg: 'sviblovopark',
        source: 'stremglav',
        length: 4.4,
        region: 'MSK',
        link: 'https://park-yauza.info/lyzhnye-trassy/',
        gpx: 'tracks/ski/sviblovopark_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Олень [Н.Новгород]',
        sneg: 'olennn',
        source: 'stremglav',
        length: 5.4,
        region: 'N_NOVGOROD',
        info: 'Протяжённость лыжной трассы 5км со срезками на 3 и 2км. Помимо этих кругов есть небольшая освещенка на километр с небольшим. Трасса готовится бураном. По пейзажам и рельефу трасса похожа на Большое Козино. Набор высоты 100м на круг. Весь набор сосредоточен в дальней части пятёрки, двушка и трёшка почти равнинные. Днем в выходной день довольно много катающихся, парковка может быть заполнена.',
        link: 'https://vk.com/club51237625',
        gpx: 'tracks/ski/olennn_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Парк Дружбы [Владимир]',
        sneg: 'vladrujba',
        source: 'stremglav',
        length: 8.8,
        region: 'VLADIMIR',
        info: 'Есть 1.5км освещенная трасса. Есть прокат лыж. Рядом вакс-сервис: ул. Благонравова 9, https://podgotovka-lyzh.clients.site/ Возможно размещение на отдых с семьей или компанией рядом с трассой в гостиничном комплексе Русская Деревня: https://rusderevnya.ru/',
        gpx: 'tracks/ski/vladrujba_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Кирово-Чепецк, Перекоп',
        sneg: 'perekop',
        source: 'stremglav',
        length: 12,
        region: 'KIROV',
        gpx: 'tracks/ski/perekop_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Саранск ЛБК',
        sneg: 'saransk-lbk',
        source: 'stremglav',
        region: 'MORDOVIA',
        length: 6,
        info: 'Трассы любой сложности: здесь есть и скоростные равнинные участки, и изматывающие затяжные подъемы, и техничные спуски. Большой круг - 4 км, набор высоты около 100 метров (зависит от петель, которые вы выбираете). Качественная подготовка: ежедневно, ратраком. Биатлонный тир и стрельбище на трассе. Есть роллерка, гостиница, восстановительный центр, сауна, тренажерный зал. Асфальт оставляет желать... Есть сервис-центр, прокат инвентаря, кафе. тел. +7 (8342) 32-00-34',
        link: ['https://biathlonrm.ru', 'https://vk.com/biathlon_mordovia'],
        gpx: 'tracks/ski/saransk_lbk_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Ревда, Темп',
        sneg: 'revda-temp',
        source: 'stremglav',
        length: 9.4,
        region: 'EKB',
        info: 'Трасса регулярно и хорошо готовится под конек и классику. Круги 3км, 5км и 10 км. Есть разметка. На стадионе (800м по улице от стартовой поляны) парковка, каток, бассейн, спортмагазин. Под трибуной: раздевалки, душевые, гардероб, кафе. тел. +7 (34397) 5-31-61, +7 (34397) 5-31-92, +7 (34397) 5-31-88, +7 (34397) 5-31-90',
        link: ['https://sc-temp.ru/', 'https://vk.com/sctemp'],
        gpx: 'tracks/ski/revda_temp_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Шуя, Осиновая гора',
        sneg: 'osinovaiagora',
        source: 'stremglav',
        length: 2.5,
        region: 'IVANOVO',
        info: 'Живописный лес, размечены 3 дистанции: 2,3 и 5 км, присутствует рельеф. Трасса частично освещена. Есть прокат.',
        gpx: 'tracks/ski/osinovaiagora_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Теплый стан',
        sneg: 'warmfarm',
        source: 'stremglav',
        length: 2.4,
        region: 'MSK',
        info: 'Участок около 1-2 км начали периодически подготавливать ратраком. Также замечена снежная пушка.',
        gpx: 'tracks/ski/warmfarm_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Вязьма, Русятка',
        sneg: 'rusyatka',
        source: 'stremglav',
        length: 4.3,
        region: 'SMOLENSK',
        info: 'Трассы - 2, 3 и 4 км. Трасса достаточно спортивная. Освещение до 20.00. Есть биатлонное стрельбище. Тренируется спортшкола, проводятся областные старты. Предположительно есть прокат.',
        gpx: 'tracks/ski/rusyatka_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Соколовка Рязань',
        sneg: 'sokolovkaryazan',
        source: 'stremglav',
        length: 3.8,
        region: 'RYAZAN',
        gpx: 'tracks/ski/sokolovkaryazan_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Зеленоград, Силино',
        sneg: 'silino',
        source: 'stremglav',
        length: 3.09,
        region: 'MSK',
        info: 'Трасса "Силинская лыжня" в Зеленограде. Готовится редко снегоходом ,в основном самотоп и то не везде. Но 3 км проезжаемы и также есть возможность ухода на круг "Хлебзавода" 5 и 10 км. Трасса только для классики, за исключением 2 км по парку там можно коньком при благоприятной снежной обстановке. На самом деле это больше лыжный маршрут чем трасса. Эксплуатант: ГБУ "Автомобильные дороги ЗелАО"',
        gpx: 'tracks/ski/silino_ski_omaps.gpx',
        ski_kind: 'FURROW',
        type: ['SKI']
    },
    {
        name: 'Химкинское вдх. Речной вокзал',
        sneg: 'himkinskoe-vodohr',
        source: 'stremglav',
        length: 4,
        region: 'MSK',
        info: 'Шатры-раздевалки, лестница для спуска на лед. Периодически накатывается лыжня по льду Химкинского водохранилища.',
        gpx: 'tracks/ski/himkinskoe_vodohr_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Ростокинский акведук',
        sneg: 'rostokin-ski',
        source: 'stremglav',
        length: 1.4,
        region: 'MSK',
        link: 'https://park-yauza.info/lyzhnye-trassy/',
        gpx: 'tracks/ski/rostokin_ski_ski_omaps.gpx',
        ski_kind: 'FICKLE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Мытищи, мкр Пироговский Каргашино',
        sneg: 'pirogovski-kargashino',
        source: 'stremglav',
        length: 2,
        region: 'MSK',
        info: 'Равнины - метров 200. Остальное - крутые подъёмы и спуски. Парковка в конце улицы Комсомольская, во дворах.',
        gpx: 'tracks/ski/pirogovski_kargashino_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Великий Устюг, Салют',
        sneg: 'veliki-ustiug',
        source: 'stremglav',
        length: 5.5,
        region: 'VOLOGDA',
        info: 'Лыжная база, горнолыжный склон, каток. Спортивные лыжные трассы с освещенным участком, максимальный круг 5км. Просторный лыжный стадион. Теплая капитальная раздевалка. Есть прокат лыж, буфет. Проводятся соревнования.',
        link: 'https://vk.com/club172706998',
        gpx: 'tracks/ski/veliki_ustiug_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Царицыно м.Орехово',
        sneg: 'tzaricino-orehovo',
        source: 'stremglav',
        length: 3.3,
        region: 'MSK',
        gpx: 'tracks/ski/tzaricino_orehovo_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Талицкий лес [Клин]',
        sneg: 'talit-ski',
        source: 'stremglav',
        length: 5.5,
        region: 'MSK',
        info: 'Живописная трасса среди хвойного леса почти без рельефа и с освещением.',
        gpx: 'tracks/ski/talit_ski_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Санта Южно-Сахалинск',
        sneg: 'santa-sakhalin',
        source: 'stremglav',
        length: 5.9,
        region: 'DV',
        info: 'Тел. +7 (4242) 73-53-81, +7 (4242) 73-45-74',
        link: ['https://skisakhalin.ru/', 'https://vk.com/club49978460'],
        gpx: 'tracks/ski/santa_sakhalin_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Орленок',
        sneg: 'orlenok-kaluga',
        source: 'stremglav',
        length: 11.7,
        region: 'KLGA',
        info: 'Спортивная трасса с большим перепадом высот длиной 5 км и любительская трасса для умеренного катания длиной 5 км. Расположены в сосновом лесу. Трассы регулярно подготавливаются ратраком. Есть асфальтовая лыжероллерная трасса 2,5км. Есть освещенный участок 2,5км (работает до 21:00). Есть общедоступная раздевалка. Приезжают спортсмены на сборы, есть размещение, но условия спартанские (комнаты на 10чел), есть питание. На трассе проводятся соревнования по лыжным гонкам. Трассы на территории спортивного центра, вход 50р в светлое время и 100р в темное время суток. Работает прокат с 10:00 до 18:00, комплект лыж 300р/час.',
        link: ['https://t.me/orlenok_kaluga', 'https://vk.com/orlenok_kaluga', 'https://yandex.com/maps/-/CPBxuSoo'],
        gpx: 'tracks/ski/orlenok_kaluga_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Энергетик Уфа',
        sneg: 'energetik-ufa',
        source: 'stremglav',
        length: 2.9,
        region: 'BASH',
        info: 'Зимой - подготавливаемая лыжная трасса, освещение, лыжная база, прокат лыж, буфет, бесплатная парковка, мангальные зоны, биотуалеты на улице, тёплые раздевалки отдельно мужская и женская. . тел. +7 (347) 279-78-11',
        link: 'https://vk.com/gkenergetik',
        gpx: 'tracks/ski/energetik_ufa_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Жемчужина Сибири',
        sneg: 'pearlsib',
        source: 'stremglav',
        region: 'TYUMEN',
        info: 'Спортивная трасса, суммарный набор 170м на кругу 5км. Качественная подготовка трассы, освещение, контролируемый доступ на трассу. Современный биатлонный стадион, трибуны. Проводятся чемпионаты России по биатлону. Роллерный асфальтовый круг 5км. Гостиница (большой корпус и коттеджи), столовая, тренажерный зал. Тел. +7 (3452) 29-29-63',
        link: ['http://www.jemsib.ru/', 'https://vk.ru/jemsib'],
        gpx: 'tracks/ski/pearlsib_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Саянск 3-й микрорайон',
        sneg: 'sayansk-3mkr',
        source: 'stremglav',
        length: 5.64,
        region: 'IRKUTSK',
        info: 'Готовит спортшкола, есть буран с навесным оборудованием. Накатывается также перемычка 5км до трассы в микрорайоне Северный.',
        gpx: 'tracks/ski/sayansk_3mkr_ski_omaps.gpx',
        ski_kind: 'SKATE_ROUTE',
        type: ['SKI']
    },
    {
        name: 'Харовск',
        sneg: 'harovsk',
        source: 'stremglav',
        region: 'VOLOGDA',
        info: 'Проводится Харовский марафон.',
        link: ['https://yandex.com/maps/-/CXGkR6-W', 'https://go.2gis.com/TKP1W'],
        gpx: 'tracks/ski/harovsk_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Златоуст, Уреньга',
        sneg: 'urenga',
        source: 'stremglav',
        length: 5,
        region: 'CHELYABINSK',
        info: 'Круг 5km с перевала Уреньга.',
        gpx: 'tracks/ski/urenga_ski_omaps.gpx',
        type: ['SKI']
    }
];