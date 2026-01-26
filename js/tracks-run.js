let runTracks = [
    // --- БЕГ ---
    {
        name: 'Московский парк Победы',
        link: 'https://5verst.ru/moskovskyparkpobedy/',
        results: 'https://5verst.ru/moskovskyparkpobedy/results/all/',
        info: 'Маршрут проходит по дорожкам парка в два круга: первый малый круг проходит вокруг центральной части парка с возвратом к фонтану, далее трасса огибает фонтан с правой стороны и уходит на большой круг по периметру парка. Старт и финиш расположен у фонтана "Венок Славы" на центральной Аллее Героев со стороны Московского проспекта. Рельеф плоский. Покрытие — тротуарная плитка 1000 м и грунт 4000 м.',
        gpx: 'tracks/run/victory_park_parkrun_omaps.gpx',
        start: 'PARKRUN',
        type: ['RUN']
    },
    {
        name: 'Елагин о-в, ЦПКиО',
        link: 'https://5verst.ru/elaginostrov/',
        results: 'https://5verst.ru/elaginostrov/results/all/',
        info: 'Маршрут проходит в два круга через западную стрелку острова. Покрытие смешанное, грунта чуть больше, трасса плоская, набор высоты минимальный. Старт находится на аллее, идущей по периметру острова, в районе моста между 4-м Южным прудом и Средней Невкой. Финиш расположен на Зеленом пляже рядом с крытыми трибунами.',
        gpx: 'tracks/run/elagin_parkrun_omaps.gpx',
        start: 'PARKRUN',
        type: ['RUN']
    },
    {
        name: 'Александрино',
        link: 'https://5verst.ru/aleksandrino',
        results: 'https://5verst.ru/aleksandrino/results/all',
        info: 'Трасса проходит в два круга по дорожкам парка и имеет прямоугольную форму. Рельеф - плоский.',
        gpx: 'tracks/run/aleksandrino_parkrun_omaps.gpx',
        start: 'PARKRUN',
        type: ['RUN']
    },
    {
        name: 'парк Интернационалистов',
        link: 'https://5verst.ru/internatsionalistov',
        results: 'https://5verst.ru/internatsionalistov/results/all',
        info: 'Трасса в три круга по парку, покрытие гранитная крошка, набор высоты отсутствует. Доступно для атлетов на колясках и родителей с детскими колясками.',
        gpx: 'tracks/run/internationalistov_parkrun_omaps.gpx',
        start: 'PARKRUN',
        type: ['RUN']
    },
    {
        name: 'Сосновка',
        link: 'https://5verst.ru/sosnovka',
        results: 'https://5verst.ru/sosnovka/results/all',
        info: 'Маршрут пролегает по грунтовым дорожкам парка Сосновка и представляет собой кольцо длиной 2.5 км, по которому участники пробегают дважды. Весь кольцевой маршрут располагается в юго-западной части парка, недалеко от проспектов Мориса Тореза и Светлановского, улицы/аллеи Жака Дюкло, южнее стрелкового поля. Старт и финиш располагаются рядом со стадионом на парковой дорожке у трибун. Маршрут проложен по благоустроенным грунтовым дорожкам шириной от 2 до 4 метров в тени деревьев.',
        gpx: 'tracks/run/sosnovka_parkrun_omaps.gpx',
        start: 'PARKRUN',
        type: ['RUN']
    },
    {
        name: 'Сосновка',
        date: '2025-08-17',
        link: 'https://probeg.org/event/65837/',
        results: 'https://reg.russiarunning.com/event/StPeterburgKubokGubernatora3etap_2025',
        info: 'Кубок Губернатора СПб. 5-10км.',
        gpx: 'tracks/run/sosnovka_guber_2025_omaps.gpx',
        start: 'SPBRUN',
        type: ['RUN']
    },
    {
        name: 'Кудрово',
        link: 'https://5verst.ru/megaparkkudrovo',
        results: 'https://5verst.ru/megaparkkudrovo/results/all',
        info: 'Старт проходит в Ленинградская область, г. Кудрово, Мурманское шоссе, 12 км, МЕГА ПАРК (около ТЦ МЕГА Дыбенко). Маршрут старта проходит по асфальту и гладкий песчано-гравийный бульвар. Зона старта располагается в парка МегаПарк.',
        gpx: 'tracks/run/kudrovo_parkrun_omaps.gpx',
        start: 'PARKRUN',
        type: ['RUN']
    },
    {
        name: 'Петергоф',
        link: 'https://5verst.ru/petergofaleksandriysky',
        results: 'https://5verst.ru/petergofaleksandriysky/results/all',
        info: 'Маршрут проходит в один круг против часовой стрелки вдоль улиц Демьяна Бедного, Парковой, Санкт-Петербургского проспекта, уходит вглубь парка и выходит вдоль ул. Аврова . Старт и финиш от входа в Александрийский парк со стороны вокзала Новый Петергоф. Рельеф плоский.',
        gpx: 'tracks/run/petergof_parkrun_omaps.gpx',
        start: 'PARKRUN',
        type: ['RUN']
    },
    {
        name: 'Пушкин',
        link: 'https://5verst.ru/pushkin',
        results: 'https://5verst.ru/pushkin/results/all',
        info: 'Трасса в два круга: маленький и большой. Вся дистанция проходит по грунтовому покрытию, набор высоты отсутствует. Доступно для лиц на колясках.',
        gpx: 'tracks/run/pushkin_parkrun_omaps.gpx',
        start: 'PARKRUN',
        type: ['RUN']
    },
    {
        name: 'Профиль Пушкина',
        info: 'Профиль Пушкина - Новогодняя пробежка в Пушкине.',
        link: 'https://hike.ru/pushkin_track.html',
        gpx: 'tracks/run/pushkin_profile_omaps.gpx',
        type: ['RUN','WALK']
    },
    {
        name: 'Колпино, Чухонка',
        link: 'https://5verst.ru/kolpino',
        results: 'https://5verst.ru/kolpino/results/all',
        info: 'Маршрут забега описывает круги в Колпинском парке на острове и полуострове Чухонка, по асфальтовой дорожке. Зона старта располагается рядом со входом в парк со стороны Большого Чухонского моста (на острове).',
        gpx: 'tracks/run/kolpino_4uhonka_parkrun_omaps.gpx',
        start: 'PARKRUN',
        type: ['RUN']
    },
    {
        name: 'Гатчина, Приорат',
        link: 'https://5verst.ru/gatchinaprioratsky',
        results: 'https://5verst.ru/gatchinaprioratsky/results/all',
        info: 'Мероприятие проводится в г. Гатчина, Ленинградской области, в Приоратском парке. На берегу Филькиного озера, у старой водонапорной башни.',
        gpx: 'tracks/run/gat4ina_parkrun_omaps.gpx',
        start: 'PARKRUN',
        type: ['RUN']
    },
    {
        name: 'Полюстровский',
        link: 'https://5verst.ru/polyustrovskiy/',
        results: 'https://5verst.ru/polyustrovskiy/results/all/',
        info: 'Маршрут проходит в два круга по дорожкам Полюстровского парка. Старт и финиш - на южном берегу большого пруда. Рельеф плоский.',
        gpx: 'tracks/run/polyustrovskiy_parkrun_omaps.gpx',
        start: 'PARKRUN',
        type: ['RUN']
    },
    {
        name: 'Шуваловский',
        link: 'https://5verst.ru/shuvalovskypark/',
        results: 'https://probeg.org/series/4565/races_by_event/',
        info: '"5 вёрст" в Шуваловском парке пока на паузе.',
        gpx: 'tracks/run/shuvalovsky_parkrun_omaps.gpx',
        start: 'PARKRUN',
        type: ['RUN']
    },
    {
        name: 'Парк Городов-Героев',
        link: 'https://5verst.ru/parkgorodovgeroev/',
        results: 'https://5verst.ru/parkgorodovgeroev/results/all/',
        info: 'Маршрут проходит в два круга по часовой стрелке по территории парка Городов-Героев (Пулковский парк). Рельеф - плоский. Покрытие: грунт, асфальт.',
        gpx: 'tracks/run/pulkovsky_parkrun_omaps.gpx',
        start: 'PARKRUN',
        type: ['RUN']
    },
    {
        name: 'Новгород великий, parkrun Кремлёвский',
        link: 'https://5verst.ru/velikiynovgorodkremlevsky/',
        results: 'https://probeg.org/series/5330/races_by_event/',
        info: 'Забег в Новгороде пока на паузе.',
        gpx: 'tracks/run/novgorod_parkrun_omaps.gpx',
        start: 'PARKRUN',
        type: ['RUN']
    },
    {
        name: 'Боровичи, Парк 30-Летия Октября',
        link: 'https://5verst.ru/park30letiyaoktyabrya/',
        results: 'https://5verst.ru/park30letiyaoktyabrya/results/all/',
        info: 'Мероприятие проводится в Новгородской области, в г Боровичи, в парке 30-летия Октября. Старт неподалеку от памятника С.М. Кирову, финиш возле монумента «Любовь».',
        gpx: 'tracks/run/borovichi_parkrun_omaps.gpx',
        start: 'PARKRUN',
        type: ['RUN']
    },
    {
        name: 'Петрозаводск Ямка',
        link: 'https://5verst.ru/yamka/',
        results: 'https://5verst.ru/yamka/results/all/',
        info: 'Маршрут проходит в два круга по территории парка "Ямка", вдоль реки Лососинки до парка "Французский пруд", вокруг памятника "Пушка". Рельеф плоский.',
        gpx: 'tracks/run/ptz_parkrun_omaps.gpx',
        start: 'PARKRUN',
        type: ['RUN']
    },
    {
        name: 'Псков, Набережная Реки Великой',
        link: 'https://5verst.ru/naberezhnayarekivelikoy/',
        results: 'https://5verst.ru/naberezhnayarekivelikoy/results/all/',
        info: 'Маршрут проходит по Набережной реки Великой, через живописную арку в стенах Кремля и продолжается по Набережной реки Псковы. Далее участники наслаждаются видами современного ухоженного парка Куопио (в народе - «Финского»), делают разворот и повторяют маршрут в обратном направлении. Маршрут проходит маятником, в 1 круг.',
        gpx: 'tracks/run/pskov_parkrun_omaps.gpx',
        start: 'PARKRUN',
        type: ['RUN']
    },
    {
        name: 'Орехово трейл',
        date: '2025-06-08',
        link: 'https://atrails.ru/orehovo/',
        results: 'https://reg.o-time.ru/race/25202',
        info: 'Старейший трейл Ленинградской области! 4-22км.',
        gpx: {
            'LONG, 22km':'tracks/run/orekhovo_atrails_2025_long_omaps.gpx',
            'CLASSIC, 11km':'tracks/run/orekhovo_atrails_2025_classic_omaps.gpx',
            'FUN, 3.6km':'tracks/run/orekhovo_atrails_2025_fun_omaps.gpx',
        },
        start: 'ATRAILS',
        type: ['RUN']
    },
    {
        name: 'Петяярви трейл',
        date: '2025-05-03',
        link: 'https://atrails.ru/petyajarvi/',
        results: 'https://reg.o-time.ru/race/25201',
        info: 'Всё самое интересное гряды Вярямянселькя: крутые подъемы, спуски, камни, корни, бурная речка Волчья, старая финская ГЭС. Один из самых сложных и живописных трейлов в ЛО. 5-22км.',
        gpx: {
            'LONG, 22km':'tracks/run/petyajarvi_atrails_2025_long_omaps.gpx',
            'CLASSIC, 10km':'tracks/run/petyajarvi_atrails_2025_classic_omaps.gpx',
            'FUN, 5km':'tracks/run/petyajarvi_atrails_2025_fun_omaps.gpx',
        },
        start: 'ATRAILS',
        type: ['RUN']
    },
    {
        name: 'Золотая долина ультра трейл',
        date: '2023-10-07',
        link: 'https://atrails.ru/zoldol/',
        results: 'https://reg.o-time.ru/race/23186',
        info: 'Ультрамарафон в окрестностях горнолыжного курорта «Золотая долина» в посёлке Коробицыно. 4-51км.',
        gpx: {
            'ULTRA, 51km':'tracks/run/zoldol_atrails_2023_ultra_omaps.gpx',
            'LONG, 21km':'tracks/run/zoldol_atrails_2023_long_omaps.gpx',
            'CLASSIC, 13km':'tracks/run/zoldol_atrails_2023_classic_omaps.gpx',
            'FUN, 4km':'tracks/run/zoldol_atrails_2023_fun_omaps.gpx'
        },
        start: 'ATRAILS',
        type: ['RUN']
    },
    {
        name: 'Мичуринское, Хампаала трейл',
        date: '2024-08-11',
        link: 'https://atrails.ru/hampaala/',
        results: 'https://reg.o-time.ru/race/24223',
        info: 'Трейл по болотам и горочкам в окрестностях Мичуринского. 6-19км.',
        gpx: {
            'LONG, 19km':'tracks/run/khampala_long_2024_omaps.gpx',
            'CLASSIC, 11km':'tracks/run/khampala_classic_2024_omaps.gpx',
            'FUN, 6km':'tracks/run/khampala_fun_2024_omaps.gpx',
        },
        start: 'ATRAILS',
        type: ['RUN']
    },
    {
        name: 'Цвелодубово трейл',
        date: '2022-05-10',
        link: 'https://atrails.ru/tsvelotrail/',
        results: 'https://reg.o-time.ru/race/22171',
        info: 'Трейл по сухим еловым и сосновым лесам. 5-21км.',
        gpx: {
            'LONG, 21km':'tracks/run/tsvelodubovo_atrails_2022_long_omaps.gpx',
            'CLASSIC, 10km':'tracks/run/tsvelodubovo_atrails_2022_classic_omaps.gpx',
            'FUN, 5km':'tracks/run/tsvelodubovo_atrails_2022_fun_omaps.gpx',
        },
        start: 'ATRAILS',
        type: ['RUN']
    },
    {
        name: 'Силанде трейл',
        date: '2025-09-28',
        link: 'https://atrails.ru/silande/',
        results: 'https://reg.o-time.ru/race/25205',
        info: 'Заброшенный горнолыжный склон , сказочные ручейки на дне глубоких лощин. Всё очень красиво и немного необычно, всего в 30 минутах от КАД.',
        gpx: {
            'LONG, 18km':'tracks/run/silande_atrails_2025_long_omaps.gpx',
            'CLASSIC, 11km':'tracks/run/silande_atrails_2025_classic_omaps.gpx',
            'FUN, 5km':'tracks/run/silande_atrails_2025_fun_omaps.gpx',
        },
        start: 'ATRAILS',
        type: ['RUN']
    },
    {
        name: 'Hero League Trail',
        date: '2022-07-02',
        link: 'https://heroleague.ru/trail',
        results: 'https://www.sports.ru/health/1110227213-rezultaty-hero-league-trail-2022.html',
        gpx: {
            '10км':'tracks/run/shuvalovsky_heroleague_10_omaps.gpx',
            '5км':'tracks/run/shuvalovsky_heroleague_5_omaps.gpx',
        },
        type: ['RUN']
    },
    {
        name: 'Ястребиное оз, Hard Trail | ROCK',
        date: '2025-05-31',
        link: 'https://hardadventure.ru/rock2025',
        results: 'https://reg.o-time.ru/race/25024',
        info: 'Скандинавский скальный трейл на границе Ленинградской области и Карелии. Самый красивый этап по мнению дизайнера трасс. В этом году дистанции перепланированы так, что каждый метр дистанций пройдет по самым живописным тропинкам и знаковым местам заказника! 6-20км.',
        gpx: {
            '20км':'tracks/run/yastrebinoe_hardadventure_rock_2025_20km_omaps.gpx',
            '12км':'tracks/run/yastrebinoe_hardadventure_rock_2025_12km_omaps.gpx',
            '6км':'tracks/run/yastrebinoe_hardadventure_rock_2025_6km_omaps.gpx',
        },
        start: 'HARD',
        pics: ['run/yastrebinoe',1],
        type: ['RUN']
    },
    {
        name: 'Первомайское, Hard Trail | MUD',
        date: '2025-05-01',
        link: 'https://hardadventure.ru/mud2025',
        results: 'https://reg.o-time.ru/race/25023',
        info: 'Добавили рельефа, болот и чуточку грязи - и вышла настоящая конфетка! 5-12км.',
        gpx: {
            '12км':'tracks/run/pervomayskoe_hardadventure_mud_2025_12km_omaps.gpx',
            '6км':'tracks/run/pervomayskoe_hardadventure_mud_2025_6km_omaps.gpx',
        },
        start: 'HARD',
        pics: ['run/pervomayskoe',1],
        type: ['RUN']
    },
    {
        name: 'Суоранда, Hard Trail | SNOW',
        date: '2025-01-12',
        link: 'https://hardadventure.ru/snow2025',
        results: 'https://reg.o-time.ru/race/25021',
        info: 'Вас ждёт короткий, но физически сложный трейл по снежным горкам.',
        gpx: 'tracks/run/suoranda_hardadventure_snow_2025_omaps.gpx',
        start: 'HARD',
        type: ['RUN']
    },
    {
        name: 'Токсово, Hard Trail | NIGHT',
        date: '2024-10-26',
        link: 'https://hardadventure.ru/night2024',
        results: 'https://reg.o-time.ru/race/24055',
        info: 'Ночной трейл с фонариками в канун Хэллоуина! 7-13км.',
        gpx: 'tracks/run/toksovo_hardadventure_night_2024_omaps.gpx',
        start: 'HARD',
        type: ['RUN']
    },
    {
        name: 'Первомайское, Hard Trail | SAND',
        date: '2024-10-06',
        link: 'https://hardadventure.ru/autumn2024',
        results: 'https://reg.o-time.ru/race/24054',
        info: 'Вас ждут песчаные склоны карьера, насыщенная пересеченка и разнообразное покрытие на протяжении всей дистанции. А виды на дистанциях в обрамлении Золотой Осени заслуживают отдельного внимания! 7-30км.',
        gpx: {
            '30км':'tracks/run/semiozerie_hardadventure_sand_2024_30km_omaps.gpx',
            '14км':'tracks/run/semiozerie_hardadventure_sand_2024_14km_omaps.gpx',
            '7км':'tracks/run/semiozerie_hardadventure_sand_2024_7km_omaps.gpx',
        },
        start: 'HARD',
        type: ['RUN']
    },
    {
        name: 'Орехово, Hard Trail',
        date: '2024-04-28',
        link: 'https://hardadventure.ru/chspb24',
        results: 'https://reg.o-time.ru/race/24349',
        info: 'Вас ждет скоростная и насыщенная дистанция, которая сочетает в себе всё лучшее от этой местности: захватывающие спуски и подъемы, чистый сосновый лес, болота, ручьи и прочие прелести весеннего леса.',
        gpx: 'tracks/run/orekhovo_hardadventure_2024_omaps.gpx',
        start: 'HARD',
        type: ['RUN']
    },
    {
        name: 'Моторное (Воробьёво оз), Hard Trail | FEST',
        date: '2024-06-01',
        link: 'https://hardadventure.ru/summer2024',
        results: 'https://reg.o-time.ru/race/24052',
        info: 'Удлиненные дистанции трейла по классической и многими любимой местности Карельского перешейка. Чистый сосновый лес в сочетании с бродами, болотами, подъемами и буреломами. 8-50км.',
        gpx: {
            '48км':'tracks/run/motornoe_hardadventure_fest_2024_48km_omaps.gpx',
            '25км':'tracks/run/motornoe_hardadventure_fest_2024_25km_omaps.gpx',
            '7км':'tracks/run/motornoe_hardadventure_fest_2024_7km_omaps.gpx'
        },
        start: 'HARD',
        type: ['RUN']
    },
    {
        name: 'Красный холм, "Царь скалы"',
        date: '2022-06-11',
        link: 'https://o-nw.ru/rlt-rock',
        results: 'https://reg.o-time.ru/race/22183',
        info: 'Грунт, скалы, болота, крутые склоны и техничные спуски, что ещё нужно для лучшего отдыха?! 7-22км.',
        gpx: {
            'L':'tracks/run/red_hill_rlt_2022_l_omaps.gpx',
            'M':'tracks/run/red_hill_rlt_2022_m_omaps.gpx',
            'S':'tracks/run/red_hill_rlt_2022_s_omaps.gpx'
        },
        start: 'RLT',
        type: ['RUN']
    },
    {
        name: 'Каменногорск, "Скальный трейл"',
        date: '2024-06-15',
        link: 'https://o-nw.ru/rlt-rock',
        results: 'https://reg.o-time.ru/race/24088',
        info: 'Грунт, скалы, болота, крутые склоны и техничные спуски, что ещё нужно для лучшего отдыха?! 5-33км.',
        gpx: {
            'XL':'tracks/run/kamennogorsk_rlt_2024_xl_omaps.gpx',
            'L':'tracks/run/kamennogorsk_rlt_2024_l_omaps.gpx',
            'M':'tracks/run/kamennogorsk_rlt_2024_m_omaps.gpx',
            'S':'tracks/run/kamennogorsk_rlt_2024_s_omaps.gpx'
        },
        start: 'RLT',
        type: ['RUN']
    },
    {
        name: 'Пруды, "Скальный трейл"',
        date: '2025-06-14',
        link: 'https://o-nw.ru/rlt-rock',
        results: 'https://reg.o-time.ru/race/25158',
        info: 'Грунт, скалы, болота, крутые склоны и техничные спуски, что ещё нужно для лучшего отдыха?! 5-30км.',
        gpx: {
            'XL':'tracks/run/prudy_rlt_2025_xl_omaps.gpx',
            'L':'tracks/run/prudy_rlt_2025_l_omaps.gpx',
            'M':'tracks/run/prudy_rlt_2025_m_omaps.gpx',
            'S':'tracks/run/prudy_rlt_2025_s_omaps.gpx'
        },
        start: 'RLT',
        type: ['RUN']
    },
    {
        name: 'Яппиля, "Весенний трейл"',
        date: '2025-04-26',
        link: 'https://o-nw.ru/rlt-spring',
        results: 'https://reg.o-time.ru/race/25157',
        info: 'Индивидуальная дистанция (М) в рамках эстафетных соревнований.',
        gpx: {
            'M':'tracks/run/yappilya_rlt_2025_m_omaps.gpx',
        },
        start: 'RLT',
        type: ['RUN']
    },
    {
        name: 'Цвелодубово, "Болотный трейл"',
        date: '2025-09-06',
        link: 'https://o-nw.ru/rlt-swamp',
        results: 'https://reg.o-time.ru/race/25159',
        info: 'Мягкий мох и болотные кочки под ногами, уникальные пейзажи и адреналин — всё это Болотный трейл! 5-16 км.',
        gpx: {
            'L':'tracks/run/zvelodubovo_bolotny_rlt_2025_l_omaps.gpx',
            'M':'tracks/run/zvelodubovo_bolotny_rlt_2025_m_omaps.gpx',
            'S':'tracks/run/zvelodubovo_bolotny_rlt_2025_s_omaps.gpx',
        },
        start: 'RLT',
        type: ['RUN']
    },
    {
        name: 'Банное оз, ВьюнОк трейл',
        date: '2024-10-20',
        link: 'https://goodtrail.ru/24_vyunok.html',
        results: 'https://goodtrail.ru/24_vyunok.html',
        gpx: {
            '50км':'tracks/run/bannoe_vyunok_goodtrail_2024_50km_omaps.gpx',
            '25км':'tracks/run/bannoe_vyunok_goodtrail_2024_25km_omaps.gpx',
            '13км':'tracks/run/bannoe_vyunok_goodtrail_2024_13km_omaps.gpx',
            '8км':'tracks/run/bannoe_vyunok_goodtrail_2024_8km_omaps.gpx'
        },
        pics: ['run/bannoe',1],
        start: 'GOODTRAIL',
        type: ['RUN']
    },
    {
        name: 'Мишкино трейл',
        date: '2025-08-09',
        link: 'https://goodtrail.ru/25_mishkino.html',
        results: 'https://goodtrail.ru/25_mishkino.html',
        info: 'Все беговые дистанции в один круг. 8-22км.',
        gpx: {
            '22км':'tracks/run/mishkino_goodtrail_2025_22km_omaps.gpx',
            '14км':'tracks/run/mishkino_goodtrail_2025_14km_omaps.gpx',
            '8км':'tracks/run/mishkino_goodtrail_2025_8km_omaps.gpx'
        },
        pics: ['run/mishkino',1],
        start: 'GOODTRAIL',
        type: ['RUN']
    },
    {
        name: 'Павловский забег',
        date: '2024-10-06',
        link: 'https://pushkin-run.ru/pavlovskautumn2025',
        results: 'https://reg.russiarunning.com/event/OsenniyPavlovskiyzabeg2024',
        info: 'Регулярный осенний и зимний забег в парке музея-заповедника Павловск. 3-21км.',
        gpx: {
            '21км':'tracks/run/pavlovsky_zabeg_21_omaps.gpx',
            '10км':'tracks/run/pavlovsky_zabeg_10_omaps.gpx',
            '3км':'tracks/run/pavlovsky_zabeg_3_omaps.gpx'
        },
        pics: ['run/pavlovsk',1],
        start: 'PUSHKINRUN',
        type: ['RUN']
    },
    {
        name: 'Пробег Хепоярви',
        date: '2025-07-12',
        logo: 'khepojarvi.webp',
        info: '«Пробег Хепоярви» - легендарный пробег вокруг одноимённого озера Хепоярви в одном из самых красивейших районов Ленинградской области, в посёлке Токсово. По этим же местам проходит известный эко-маршрут <a href="https://www.ecoportal-vsev.ru/tropa-zdorovya-vokrug-ozera-xepoyarvi.html">"Тропа Здоровья вокруг оз.Хепоярви"</a>.',
        link: 'https://vk.com/heporunning',
        results: 'https://reg.o-time.ru/race/25015',
        gpx: 'tracks/run/khepoyarvi_2025_omaps.gpx',
        type: ['RUN']
    },
    {
        name: 'Скоростная десятка',
        date: '2025-04-27',
        start: 'PUSHKINRUN',
        info: 'Скоростная десятка – праздник бега для любителей и профессионалов, где каждый участник может испытать свои силы и показать максимальный результат на дистанции 10 километров. Трасса «Скоростной десятки» специально разработана для достижения высоких скоростей. Маршрут минимизирует перепады высот и сложные участки, позволяя сосредоточиться на своем темпе и технике, чтобы достичь новых рекордов!',
        link: 'https://pushkin-run.ru/10',
        results: 'https://results.russiarunning.com/event/SkorostnayaDesyatka/results/10km',
        gpx: 'tracks/run/fast_ten_2025_omaps.gpx',
        type: ['RUN']
    },
    {
        name: 'Дудергоф трейл',
        date: '2025-04-20',
        info: '12 и 6 км. Участникам предстоит не просто пробежать дистанцию по пересечённой местности, но даже взобраться на самую высокую точку города — гору Ореховую.',
        link: 'https://marathonec.ru/dudergof-trejl-gid/',
        results: 'https://reg.o-time.ru/race/25240',
        gpx: 'tracks/run/dudergof_trail_omaps.gpx',
        start: 'KOLYUCHIE',
        type: ['RUN']
    },
    {
        name: 'Вентилятор (Fun)',
        info: 'Сегмент в Strava с максимальным набором рельефа по горнолыжке.',
        link: 'https://www.strava.com/segments/34714021',
        gpx: 'tracks/run/dudergof_fun_omaps.gpx',
        logo: 'strava.gif',
        type: ['RUN']
    },
    {
        name: 'Пятюня Горного Короля',
        info: 'Популярный сегмент в Strava.',
        link: 'https://www.strava.com/segments/31883935',
        gpx: 'tracks/run/dudergof_hill_king_omaps.gpx',
        logo: 'strava.gif',
        type: ['RUN']
    },
    {
        name: 'Кросс в Александрино',
        date: '2024-08-18',
        link: 'https://vk.com/krossvaleksandrino',
        results: 'https://reg.o-time.ru/race/24166',
        gpx: 'tracks/run/aleksandrino_2024_omaps.gpx',
        start: 'KOLYUCHIE',
        type: ['RUN']
    },
    {
        name: 'Полежаевский парк, Кировский Полумарафон',
        date: '2025-07-20',
        link: 'https://kolyuchiestarty.ru/turnir',
        results: 'https://reg.o-time.ru/race/25286',
        info: '7-42км',
        gpx: 'tracks/run/polezhaevsky_kirovsky_2025_omaps.gpx',
        start: 'KOLYUCHIE',
        type: ['RUN']
    },
    {
        name: 'Дубровка, Невский берег',
        date: '2024-10-20',
        link: 'https://vk.com/event226343434',
        results: 'https://reg.o-time.ru/race/24512',
        info: 'Трасса основных дистанций пролегает по берегу Невы и сосновому лесу, включает спуски и подъемы, движение по самой кромке берега. 10-20км.',
        gpx: {
            'T20':'tracks/run/nevsky_bereg_t20_omaps.gpx',
            'T10':'tracks/run/nevsky_bereg_t10_omaps.gpx'
        },
        start: 'KOLYUCHIE',
        type: ['RUN']
    },
    {
        name: 'Кобона, Summer fest',
        date: '2025-08-02',
        link: 'https://tripandrun.ru/summer',
        results: 'https://reg.o-time.ru/race/25125',
        info: '4-40км.',
        gpx: {
            'HARD':'tracks/run/kobona_borzye_trails_2025_hard_omaps.gpx',
            'LONG':'tracks/run/kobona_borzye_trails_2025_long_omaps.gpx',
            'MEDIUM':'tracks/run/kobona_borzye_trails_2025_medium_omaps.gpx',
            'SHORT':'tracks/run/kobona_borzye_trails_2025_short_omaps.gpx'
        },
        start: 'BORZYE',
        pics: ['run/kobona',1],
        type: ['RUN']
    },
    {
        name: 'Староселье, Autumn fest',
        date: '2024-10-12',
        link: 'https://tripandrun.ru/autumn_2024',
        results: 'https://reg.o-time.ru/race/24079',
        info: '5-23км.',
        gpx: 'tracks/run/staroselie_borzye_trails_2024_omaps.gpx',
        start: 'BORZYE',
        type: ['RUN']
    },
    {
        name: 'Невский лесопарк, Усадьба Богословка, Winter fest',
        date: '2025-02-22',
        link: 'https://tripandrun.ru/winter',
        results: 'https://reg.o-time.ru/race/25122',
        info: '5-20км.',
        gpx: 'tracks/run/bogoslovka_borzye_trails_2025_omaps.gpx',
        start: 'BORZYE',
        type: ['RUN']
    },
    {
        name: 'Пасторское оз, Spring fest',
        date: '2025-04-12',
        link: 'https://tripandrun.ru/spring',
        results: 'https://reg.o-time.ru/race/25123',
        info: '5-20км.',
        gpx: 'tracks/run/pastorskoe_borzye_trails_2025_omaps.gpx',
        start: 'BORZYE',
        type: ['RUN']
    },
    {
        name: 'Петергоф, Пробег памяти Героев Ораниенбаумского плацдарма',
        date: '2025-05-17',
        link: 'https://probeg.org/event/67383/',
        results: 'https://reg.o-time.ru/race/25361',
        info: '5-10км.',
        gpx: 'tracks/run/peterhof_campus_2025_omaps.gpx',
        type: ['RUN']
    },
    {
        name: 'Удельный парк, Гоголь МарафонЪ',
        date: '2024-11-03',
        link: 'https://probeg.org/event/57172/',
        results: 'https://reg.o-time.ru/race/24323',
        info: '1-63км.',
        gpx: 'tracks/run/udelny_grifon_2024_10k_omaps.gpx',
        start: 'GRIFON',
        type: ['RUN']
    },
    {
        name: 'Удельный парк, Sosnovka Snake',
        date: '2024-12-15',
        link: 'https://probeg.org/event/62728/',
        results: 'https://reg.o-time.ru/race/24628',
        info: '1-63км.',
        gpx: 'tracks/run/sosnovka_snake_grifon_2024_10k_omaps.gpx',
        start: 'GRIFON',
        type: ['RUN']
    },
    {
        name: 'Пискарёвский парк, «Весна Победы»',
        date: '2024-05-04',
        link: 'https://probeg.org/event/60014/',
        results: 'https://reg.o-time.ru/race/25128',
        info: '1-21км.',
        gpx: 'tracks/run/piskarevka_grifon_2024_7k_omaps.gpx',
        start: 'GRIFON',
        type: ['RUN']
    },
    {
        name: 'Парк 300-летия Петербурга, «Алые паруса»',
        date: '2025-06-22',
        link: 'https://probeg.org/event/63037/',
        results: 'https://reg.o-time.ru/race/25134',
        info: '1-63км.',
        gpx: 'tracks/run/300_letiya_alye_parusa_2025_10k_omaps.gpx',
        start: 'GRIFON',
        type: ['RUN']
    },
    {
        name: 'Боровичи, Мста трейл',
        date: '2025-08-10',
        link: 'https://vk.com/msta_trail',
        results: 'https://reg.o-time.ru/race/25257',
        info: 'На дистанциях участников будут ждать неповторимо красивые виды, интересные пейзажи, разнообразный рельеф и естественные препятствия в виде высокой травы, бродов, оврагов итд. 5-30км.',
        gpx: {
            'K30':'tracks/run/borovichi_msta_trail_2025_k30_omaps.gpx',
            'K10':'tracks/run/borovichi_msta_trail_2025_k10_omaps.gpx',
            'K5':'tracks/run/borovichi_msta_trail_2025_k5_omaps.gpx',
        },
        logo: 'msta.webp',
        type: ['RUN']
    },
    {
        name: 'Аэропорт Пулково',
        date: '2025-07-31',
        results: 'https://reg.o-time.ru/race/25529',
        info: '3-10км.',
        gpx: {
            '10км':'tracks/run/pulkovo_airport_2025_10k_omaps.gpx',
            '3км':'tracks/run/pulkovo_airport_2025_3k_omaps.gpx',
        },
        logo: 'pulkovo.gif',
        type: ['RUN']
    },
    {
        name: 'Сиверский, "Орлёнок"',
        date: '2025-06-21',
        link: 'https://vk.com/club204547779',
        results: 'https://reg.o-time.ru/race/25465',
        info: 'Ежегодный спортивно-патриотический фестиваль «ОРЛЁНОК, ОРЛЁНОК, ВЗЛЕТИ ВЫШЕ СОЛНЦА». Посвящается памяти юных патриотов, погибших в борьбе с фашизмом. 1-8км.',
        gpx: 'tracks/run/siversky_orlenok_2025_7k_omaps.gpx',
        type: ['RUN']
    },
    {
        name: 'Сосновый Бор, Атомный ЗаБег',
        date: '2023-09-23',
        link: 'https://vk.com/atomrunning',
        results: 'https://reg.o-time.ru/race/23465',
        info: 'Первый крупный забег в Сосновом Бору. Трасса проходит по новой велодорожке вдоль южного берега Финского залива, по сосновому лесу и песочным дюнам. Это уникальная возможность увидеть природу и крупнейшее предприятие атомный энергетики России Ленинградскую атомную станцию. 3-10км.',
        gpx: 'tracks/run/sosnovy_bor_atomny_2023_10k_omaps.gpx',
        logo: 'atomny.gif',
        type: ['RUN']
    },
    {
        name: 'Шунгеровский заказник, Кубок Шунгеровского заповедника',
        date: '2025-03-16',
        link: 'https://probeg.org/race/162236/',
        results: 'https://reg.o-time.ru/race/25249',
        gpx: 'tracks/run/shungerovsky_2025_omaps.gpx',
        logo: 'shungerovsky.webp',
        type: ['RUN']
    },
    {
        name: 'Шунгеровский заказник, Кубок Шунгеровского заповедника',
        date: '2024-06-15',
        link: 'https://probeg.org/event/60608/',
        results: 'https://reg.o-time.ru/race/24445',
        gpx: 'tracks/run/shungerovsky_2024_omaps.gpx',
        logo: 'shungerovsky.webp',
        type: ['RUN']
    },
    {
        name: 'Красная горка, Трейл Фортовый',
        date: '2021-04-11',
        link: 'https://vk.com/event192165828',
        results: 'https://reg.o-time.ru/race/21004',
        info: '5-21км.',
        gpx: {
            'Long':'tracks/run/fortovy_2021_long_omaps.gpx',
            'Classic':'tracks/run/fortovy_2021_classic_omaps.gpx',
            'Fun':'tracks/run/fortovy_2021_fun_omaps.gpx'
        },
        logo: 'fortovy.gif',
        type: ['RUN']
    },
    {
        name: 'Крестовский о-в, Зелёный Марафон',
        date: '2024-06-01',
        link: 'https://probeg.org/event/57775/',
        results: 'https://reg.o-time.ru/race/24458',
        info: '4-10км.',
        gpx: 'tracks/run/krestovsky_green_2024_omaps.gpx',
        type: ['RUN']
    },
    {
        name: 'Зеленогорск, Кросс нации',
        date: '2024-09-14',
        link: 'https://vk.com/kross_nacij_v_spb',
        results: 'https://reg.o-time.ru/race/24547',
        info: '5-9км.',
        gpx: 'tracks/run/zelenogorsk_nation_2024_9km_omaps.gpx',
        type: ['RUN']
    },
    {
        name: 'Зеленогорский осенний кросс',
        date: '2017-10-07',
        link: 'https://probeg.org/event/17550/',
        results: 'https://probeg.org/dj_media/uploads/171007_Pr_Zelenogorskiy_osenni_Zelenogorsk_3835.xls',
        info: '8-16км.',
        gpx: 'tracks/run/zelenogorsk_autumn_2017_16km_omaps.gpx',
        logo: 'zelenogorsk.webp',
        type: ['RUN']
    },
    {
        name: 'Луга, Шалово, TheOSTROV TRAIL',
        date: '2019-04-27',
        link: 'https://probeg.org/event/26316/',
        results: 'https://reg.o-time.ru/race/19071',
        info: '1-25км.',
        gpx: 'tracks/run/shalovo_theostrov_2019_25k_omaps.gpx',
        logo: 'theostrov.webp',
        type: ['RUN']
    },
    {
        name: 'Усть-Лужский железнодорожный полумарафон',
        date: '2025-07-12',
        link: 'https://vk.com/21kmlugaozd',
        results: 'https://reg.o-time.ru/race/25472',
        info: 'Единственный индустриальный полумарафон в России, проходящий на крупнейшей железнодорожной станции в Европе. 11-21км.',
        gpx: {
            '21км':'tracks/run/ust_luga_2024_21k_omaps.gpx'
        },
        logo: 'ust-luga.webp',
        type: ['RUN']
    },
    {
        name: 'Сосново трейл',
        date: '2025-07-06',
        link: 'https://sportdrivecompany.ru/трейл-в-сосново-2025/',
        results: 'https://reg.o-time.ru/race/25444',
        info: '14-28км.',
        gpx: {
            '13км':'tracks/run/sosnovo_sportdrive_2025_13_omaps.gpx'
        },
        start: 'SPORTDRIVE',
        type: ['RUN']
    },
    {
        name: 'Токсово, Кавголовские горки',
        date: '2022-08-21',
        link: 'https://probeg.org/race/108636/',
        results: 'https://reg.o-time.ru/start/22195',
        info: '5-20км.',
        gpx: {
            '20км':'tracks/run/kavgolovo_4restcup_2022_20km_omaps.gpx',
            '10км':'tracks/run/kavgolovo_4restcup_2022_10km_omaps.gpx',
            '5км':'tracks/run/kavgolovo_4restcup_2022_5km_omaps.gpx'
        },
        start: 'FOURESTCUP',
        type: ['RUN']
    },
    {
        name: 'Мичуринское, Валкъярви трейл',
        date: '2022-07-24',
        link: 'https://vk.com/valkjarvi',
        results: 'https://reg.o-time.ru/start/22194',
        info: '5-21км.',
        gpx: {
            'LONG':'tracks/run/mi4ura_4restcup_2022_21km_omaps.gpx',
            'CLASSIC':'tracks/run/mi4ura_4restcup_2022_11km_omaps.gpx',
            'SMALL':'tracks/run/mi4ura_4restcup_2022_5km_omaps.gpx'
        },
        start: 'FOURESTCUP',
        type: ['RUN']
    },
    {
        name: 'Токсово, Зубротрейл',
        date: '2022-07-24',
        link: 'https://probeg.org/event/47276/',
        results: 'https://reg.o-time.ru/start/22191',
        info: '5-21км.',
        gpx: {
            'LONG':'tracks/run/zubro_4restcup_2022_21km_omaps.gpx',
            'CLASSIC':'tracks/run/zubro_4restcup_2022_11km_omaps.gpx',
            'SMALL':'tracks/run/zubro_4restcup_2022_5km_omaps.gpx'
        },
        start: 'FOURESTCUP',
        type: ['RUN']
    },
    {
        name: 'Петрозаводск, Karelia Swamp Ultra',
        date: '2024-07-14',
        link: 'https://vk.com/kareliaswampultra',
        results: 'https://reg.o-time.ru/race/24003',
        info: '20-50км.',
        gpx: {
            '50км':'tracks/run/ptz_karelia_swamp_2024_50km_omaps.gpx',
            '20км':'tracks/run/ptz_karelia_swamp_2024_20km_omaps.gpx'
        },
        logo: 'karelia_swamp.gif',
        type: ['RUN']
    },
    {
        name: 'Гатчина, кросс "Граф Орлов"',
        date: '2020-09-27',
        link: 'https://probeg.org/event/31917/',
        results: 'https://reg.o-time.ru/race/20158',
        info: 'Дистанции по территории парков  Орловая Роща и Зверинец. 0.5-21км.',
        gpx: {
            '10км':'tracks/run/gatchina_orlov_2020_10km_omaps.gpx',
            '5км':'tracks/run/gatchina_orlov_2020_5km_omaps.gpx'
        },
        start: 'GATCHINA',
        type: ['RUN']
    },
    {
        name: 'Суйда, тематический трейл-пробег "Сказки Пушкина"',
        date: '2022-06-05',
        link: 'https://vk.com/wall-112729417_20227',
        results: 'https://vk.com/wall-112729417_20233',
        info: 'Пробег начнется от пруда, на берегу которого рос многовековой дуб, легший в основу легенды о сказочном Лукоморье🌿. В усадебном парке, овеянном легендами о сказочном Лукоморье, можно отдохнуть, присев на высеченную из валуна старинную скамью - каменный "диван Ганнибала".',
        gpx: 'tracks/run/gatchina_pushkin_2022_omaps.gpx',
        start: 'GATCHINA',
        type: ['RUN']
    },
    {
        name: 'Гатчинский полумарафон',
        date: '2024-11-10',
        link: 'https://gatchinahalf.ru',
        results: 'https://reg.o-time.ru/race/24303',
        info: '2-21км.',
        gpx: {
            '21км':'tracks/run/gatchina_half_2024_21km_omaps.gpx',
            '10км':'tracks/run/gatchina_half_2024_10km_omaps.gpx',
            '2км':'tracks/run/gatchina_half_2024_2km_omaps.gpx'
        },
        start: 'GATCHINA',
        type: ['RUN']
    },
    {
        name: 'Кировск, "НЕВСКИЙ ПЯТАЧОК"',
        date: '2024-06-02',
        link: 'https://vk.com/nev_pyatachok_run',
        results: 'https://reg.o-time.ru/race/24305',
        info: '5-21км.',
        gpx: {
            '21км':'tracks/run/nevsky_pyatachok_2024_21km_omaps.gpx',
            '11км':'tracks/run/nevsky_pyatachok_2024_11km_omaps.gpx',
            '5км':'tracks/run/nevsky_pyatachok_2024_5km_omaps.gpx',
        },
        logo: 'nevsky_pyatachok.webp',
        type: ['RUN']
    },
    {
        name: 'Подпорожье, Свирский рубеж',
        date: '2025-05-17',
        link: 'https://vk.link/svirskiyrubezh',
        results: 'https://reg.o-time.ru/race/25243',
        info: '1-20км.',
        gpx: 'tracks/run/podporozhye_rubezh_2025_omaps.gpx',
        logo: 'svirsky_rubezh.webp',
        type: ['RUN']
    },
    {
        name: 'ул Чекистов, Пробег, посвящённый Дню народного единства',
        date: '2024-11-03',
        link: 'https://probeg.org/event/62529/',
        results: 'https://vk.com/wall-12235248_16215',
        info: '2.5-7км.',
        gpx: 'tracks/run/krasnoselsky_unity_day_2024_omaps.gpx',
        logo: 'krasnoselsky.gif',
        type: ['RUN']
    },
    {
        name: 'Молодцово, "Синявинские высоты"',
        date: '2024-09-21',
        link: 'https://vk.com/sin_vysoty_run',
        results: 'https://reg.o-time.ru/race/24012',
        info: '2-21км.',
        gpx: 'tracks/run/sinyavinskie_heights_2024_omaps.gpx',
        logo: 'sinyavino.webp',
        type: ['RUN']
    },
    {
        name: 'Янино, "Человек или Лошадь"',
        date: '2024-08-24',
        link: 'https://vk.com/sktoksovo',
        results: 'https://reg.o-time.ru/race/24211',
        info: 'Бегунам предстоит доказать что они могут быть быстрее лошадей со всадниками!',
        gpx: 'tracks/run/yanino_humans_horses_2024_omaps.gpx',
        logo: 'sktoksovo.gif',
        type: ['RUN']
    },
    {
        name: 'Снегирёвка, St.Petersburg Backyard Ultra',
        date: '2022-05-21',
        link: 'https://backyardultra.ru/',
        results: 'https://clck.ru/gMLZA',
        info: 'ST.PETERSBURG BACKYARD ULTRA – официальная гонка мировой экосистемы BYU.',
        gpx: 'tracks/run/snegirevka_byut_2022_omaps.gpx',
        start: 'DIKIYE',
        type: ['RUN']
    },
    {
        name: 'Борницкий карьер, St.Petersburg Backyard Ultra',
        date: '2025-05-25',
        link: 'https://backyardultra.ru/',
        results: 'https://reg.o-time.ru/race/25285',
        info: 'ST.PETERSBURG BACKYARD ULTRA – официальная гонка мировой экосистемы BYU.',
        gpx: 'tracks/run/bornitsky_byut_2025_omaps.gpx',
        start: 'DIKIYE',
        type: ['RUN']
    },
    {
        name: 'Токсово, Комбыт, "Бегущий кабан"',
        date: '2023-10-15',
        link: 'https://www.fasl.ru/contest/n501/',
        results: 'https://reg.o-time.ru/race/23493',
        info: 'Традиционный осенний кросс "Бегущий кабан", посвященный памяти Дмитрия Поленова. Дистанция соревнований проходит по бывшей лыжной трассе «Комбыт», протяженность круга – 5 км.',
        gpx: 'tracks/run/beguschiy_caban_2023_omaps.gpx',
        type: ['RUN']
    },
    {
        name: 'Игора, "неМартовский заяц"',
        date: '2024-11-04',
        link: 'https://vk.com/nemartovskiizayaz',
        results: 'https://myrace.info/events/889',
        info: 'Традиционный альпинистский горный кросс.',
        gpx: 'tracks/run/igora_nemartovsky_2024_omaps.gpx',
        logo: 'nemartovsky.gif',
        type: ['RUN']
    },
    {
        name: 'Лемболово, "Осенний марафон"',
        date: '2024-10-20',
        link: 'https://vk.com/omartrail',
        results: 'https://reg.o-time.ru/race/24596',
        info: 'Фестиваль двигательной активности для всех любителей активного образа жизни, от спортивного клуба «Атлетико».',
        gpx: 'tracks/run/lembolovo_autumn_marathon_2024_omaps.gpx',
        logo: 'autumn_marathon.webp',
        type: ['RUN']
    },
    {
        name: 'Кубок Курортного района по бегу на песке',
        date: '2025-08-06',
        link: 'https://vk.com/peschanie_dyuni',
        results: 'https://reg.o-time.ru/race/25430',
        info: 'Поистине курортное событие – соревнования по бегу на песке.',
        gpx: 'tracks/run/kurort_cup_2025_omaps.gpx',
        logo: 'kurort.gif',
        type: ['RUN']
    },
    {
        name: 'Колпино, Ижорская миля',
        date: '2025-07-27',
        link: 'https://vk.com/sokizhorets',
        results: 'https://reg.o-time.ru/race/25512',
        info: 'Дистанция по территории городского ПКиО и о.Чухонка.',
        gpx: 'tracks/run/izhorska_milya_2025_omaps.gpx',
        type: ['RUN']
    },
    {
        name: 'Новгород, NOVGOROD ICE',
        date: '2024-02-11',
        link: 'https://vk.com/club201939547',
        results: 'https://reg.o-time.ru/race/24103',
        info: 'Живописный маршрут, стартующий у стен древнего Кремля и проходящий по территории музея Витославлицы, близ Юрьевского монастыря, по берегу седого Волхова и озера Мячино. 12-19км.',
        gpx: {
            '19км':'tracks/run/novgorod_ice_2024_19km_omaps.gpx',
            '12км':'tracks/run/novgorod_ice_2024_12km_omaps.gpx',
        },
        logo: 'novgorod_ice.gif',
        type: ['RUN']
    },
    {
        name: 'Изборск, Truvor Ultra Trail',
        date: '2024-09-07',
        link: 'https://www.truvorultratrail.ru/',
        results: 'https://reg.o-time.ru/race/24274',
        info: 'TUT - это не только физическое испытание, но и настоящее приключение для любителей природы и активного образа жизни. Участники имеют возможность не только побороться с собой, но и насладиться великолепием российских пейзажей. 5-50км.',
        gpx: {
            '50км':'tracks/run/izborsk_truvor_2025_50km_omaps.gpx',
            '25км':'tracks/run/izborsk_truvor_2025_25km_omaps.gpx',
            '10км':'tracks/run/izborsk_truvor_2025_10km_omaps.gpx',
            '5км':'tracks/run/izborsk_truvor_2025_5km_omaps.gpx',
        },
        logo: 'truvor.gif',
        type: ['RUN']
    },
    {
        name: 'Алоль, EDGE ULTRA',
        date: '2025-05-24',
        link: 'https://edge-ultra.ru/',
        results: 'https://reg.o-time.ru/race/25006',
        info: 'Летняя гонка по лесной тропе. 5-180км.',
        gpx: {
            '100км':'tracks/run/alol_edge_2025_100km_omaps.gpx',
            '50км':'tracks/run/alol_edge_2025_50km_omaps.gpx',
            '20км':'tracks/run/alol_edge_2025_20km_omaps.gpx',
            '10км':'tracks/run/alol_edge_2025_10km_omaps.gpx',
        },
        logo: 'alol_edge.gif',
        type: ['RUN']
    },
    {
        name: 'Псковский полумарафон',
        date: '2024-09-29',
        link: 'https://edge-ultra.ru/',
        results: 'https://reg.o-time.ru/race/24216',
        info: '1-21км.',
        gpx: 'tracks/run/pskov_halfmarathon_2024_omaps.gpx',
        logo: 'pskov_half.gif',
        type: ['RUN']
    },
    {
        name: 'Марафон "Белые ночи"',
        date: '2025-07-05',
        link: 'https://probeg.org/series/122/all_events/',
        results: 'https://results.runc.run/event/spb_marathon_wn_2025/finishers/distance/435/',
        info: '10,42км.',
        gpx: {
            '2025, 42км':'tracks/run/spb_wn_2025_42km_omaps.gpx',
            '2025, 10км':'tracks/run/spb_wn_2025_10km_omaps.gpx',
            '2022, 42км':'tracks/run/spb_wn_2022_42km_omaps.gpx',
        },
        logo: 'wn_marathon.gif',
        type: ['RUN']
    },
    {
        name: 'Марафон "Белые ночи"',
        date: '2015-06-28',
        link: 'https://probeg.org/event/7338/',
        results: 'https://probeg.org/sever/protokol/150628_Pr_MarBN_SPb_122.xls',
        gpx: {
            '2015, 42км':'tracks/run/spb_wn_2015_42km_omaps.gpx',
            '2019, 10км':'tracks/run/spb_wn_2019_10km_omaps.gpx',
        },
        logo: 'wn_marathon.gif',
        type: ['RUN']
    },
    {
        name: 'Пушкин - Санкт-Петербург',
        date: '2023-09-03',
        link: 'https://probeg.org/event/48806/',
        results: 'https://results.russiarunning.com/event/PushkinSanktPeterburg100let/results/42km',
        info: '5-42км.',
        gpx: {
            '42км':'tracks/run/pushkin_spb_2023_42km_omaps.gpx',
            '30км':'tracks/run/pushkin_spb_2023_30km_omaps.gpx',
            '10км':'tracks/run/pushkin_spb_2023_10km_omaps.gpx',
        },
        start: 'PUSHKINRUN',
        type: ['RUN']
    },
    {
        name: 'Гарботрейл',
        date: '2025-06-01',
        link: 'https://probeg.org/series/6090/',
        results: 'https://reg.o-time.ru/race/25340',
        info: '500м-10км.',
        gpx: {
            '10км':'tracks/run/garbotrail_2025_10km_omaps.gpx',
            '5км':'tracks/run/garbotrail_2025_5km_omaps.gpx',
            '3км':'tracks/run/garbotrail_2025_3km_omaps.gpx',
        },
        logo: 'garbolovo_ski.webp',
        type: ['RUN']
    },
    {
        name: 'Марафон "Дорога жизни"',
        date: '2025-01-26',
        link: 'https://probeg.org/event/63066/',
        results: 'https://heroleague.ru/results/doroga2025',
        info: '5,42км.',
        gpx: {
            '42км':'tracks/run/roadlife_2025_42km_omaps.gpx',
            '5км':'tracks/run/roadlife_2025_5km_omaps.gpx',
        },
        logo: 'roadlife.webp',
        type: ['RUN']
    },
    {
        name: 'Тихвинский марафон',
        date: '2024-10-12',
        info: '11-42км.',
        link: 'https://probeg.org/event/59080/',
        results: 'https://reg.o-time.ru/race/24545',
        gpx: 'tracks/run/tikhvin_marathon_2024_omaps.gpx',
        logo: 'tikhvin.gif',
        type: ['RUN']
    },
    {
        name: 'Колтуши, Пробег памяти академика И.П.Павлова',
        date: '2020-09-27',
        info: '4-15км.',
        link: 'https://probeg.org/event/35315/',
        results: 'https://reg.o-time.ru/race/20108',
        gpx: 'tracks/run/koltushi_pavlova_2020_15km_omaps.gpx',
        type: ['RUN']
    },
    {
        name: 'Сосновый Бор, "Кросс нации"',
        date: '2024-09-21',
        info: '1-8км.',
        link: 'https://probeg.org/event/61515/',
        results: 'https://reg.o-time.ru/race/24550',
        gpx: 'tracks/run/sosnovybor_nation_2024_8km_omaps.gpx',
        logo: 'atomny.gif',
        type: ['RUN']
    },
    {
        name: 'Дуброво',
        date: '2024-10-13',
        link: 'https://probeg.org/event/62170/',
        results: 'https://probeg.org/dj_media/uploads/2024/241013_Pr_Probeg__Dubrovo__Dubrovo_6963.xls',
        info: 'Забег от КЛБ "Скобарь". 1-10км.',
        gpx: {
            '10км':'tracks/run/dubrovo_2023_10km_omaps.gpx',
            '5км':'tracks/run/dubrovo_2024_5km_omaps.gpx',
        },
        type: ['RUN']
    },
    {
        name: 'Выборг, Кировские дачи, "Тропа Хийси"',
        date: '2025-10-18',
        link: 'https://vk.com/vyborgmarathon',
        results: 'https://reg.o-time.ru/race/25576',
        info: '1-20км.',
        gpx: {
            '10км':'tracks/run/vyborg_hiisi_2025_10k_omaps.gpx',
            '5км':'tracks/run/vyborg_hiisi_2025_5k_omaps.gpx',
            '3км':'tracks/run/vyborg_hiisi_2025_3k_omaps.gpx',
        },
        logo: 'vyborg.webp',
        type: ['RUN']
    },
    {
        name: 'Павловск-Пушкин',
        date: '2025-10-18',
        link: 'https://vk.com/cfkcsnews',
        results: 'https://reg.o-time.ru/race/25611',
        info: '1-6км.',
        gpx: 'tracks/run/pavlovsk_pushkin_2025_6k_omaps.gpx',
        type: ['RUN']
    },
];
