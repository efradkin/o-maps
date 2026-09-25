let events2013 = [
    {
        id: 'SPB_20130102_1',
        date: '2013-01-02',
        endDate: '2013-01-08',
        name: 'Зимний УТС в Мичуринском',
        place: 'Мичуринское',
        type: 'SKI',
        o_site: '13010208'
    },
    {
        id: 'SPB_20130103_1',
        date: '2013-01-03',
        endDate: '2013-01-09',
        place: 'Цвелодубово',
        name: 'Зимний УТС в Цвелодубово',
        type: 'SKI',
        o_site: '13010309'
    },
    {
        id: 'SPB_20130107_1',
        date: '2013-01-07',
        endDate: '2013-01-08',
        place: 'Цвелодубово',
        name: 'Рождественские Старты',
        type: 'SKI',
        res: 'http://moscompass.ru/news/2013/20130107-rez-Cvel.htm',
        owner: 'NW',
        o_site: '13010708'
    },
    {
        id: 'SPB_20130112_1',
        date: '2013-01-12',
        place: 'Орехово',
        map: 'lembolovo_orekhovo_peski_gk_2026',
        name: 'Горный кросс-34',
        type: 'ROGAINE',
        res: 'https://o-site.spb.ru/_races/130112_GK/130112_res.zip',
        start: 'GORNY_CROSS',
        o_site: '130112_GK'
    },
    {
        id: 'SPB_20130112_2',
        date: '2013-01-12',
        place: 'Токсово, база ВИФК',
        name: 'Юбилейный мини-рогейн',
        type: 'ROGAINE',
        res: 'https://o-site.spb.ru/_races/130112_Sh/130112_res.xls',
        info: 'Приглашаю всех любителей ориентирования на Мини-рогейн «Юбилейный-60». В связи с тем, что многие из тех, кого я хотел бы видеть у себя в гостях 5 января, отсутствовали по уважительным причинам, мне пришлось передвинуть это событие на неделю вперед. Александр Ширинян',
        o_site: '130112_Sh'
    },
    {
        id: 'SPB_20130113_1',
        date: '2013-01-13',
        place: 'Токсово',
        name: 'На призы газеты Всеволожские Вести. Кубок ЛО',
        type: 'SKI',
        reg: 'http://o-reg.spb.ru',
        res: 'https://o-site.spb.ru/_races/130113/130113_res_ski.htm',
        start: 'VSEV_VESTI',
        o_site: '130113'
    },
    {
        id: 'SPB_20130117_1',
        date: '2013-01-17',
        endDate: '2013-01-20',
        place: 'Кириши, Будогощь',
        name: 'Кубок России среди ветеранов Чемпионат и первенство ЛО Зимняя спартакиада учащихся ЛО',
        start: 'LO_CHAMP',
        type: 'SKI',
        res: 'https://o-site.spb.ru/_races/13011720/130119_res.htm',
        info: 'КУБОК РОССИИ СРЕДИ ВЕТЕРАНОВ ПО СПОРТИВНОМУ ОРИЕНТИРОВАНИЮ НА ЛЫЖАХ Чемпионат и первенство Ленинградской области Зимняя спартакиада учащихся Ленинградской области Кубок профкома ООО «ПО Киришинефтеоргсинтез»',
        o_site: '13011720'
    },
    {
        id: 'SPB_20130120_1',
        date: '2013-01-20',
        name: 'Кубок СПб по спортивному ориентированию на лыжах',
        place: 'Рощино',
        type: 'SKI',
        res: 'https://o-site.spb.ru/_races/130120/130120_res.htm',
        info: 'Соревнования проводятся 20 января 2013 года в окрестностях пос.Рощино (Райвола). Центр соревнований расположен в Детском оздоровительном лагере «Северная зорька». Размещение участников в отапливаемом помещении',
        o_site: '130120'
    },
    {
        id: 'SPB_20130127_1',
        date: '2013-01-27',
        place: 'Парк Сосновка',
        name: 'Кубок СПб по парковому ориентированию «Снежная Тропа», 3 этап',
        start: 'SNOW_WAY',
        res: 'http://o-site.spb.ru/_races/121118_tropa/130127_split.htm',
        o_site: '121118_tropa'
    },
    {
        id: 'SPB_20130203_1',
        date: '2013-02-03',
        place: 'Семиозерье',
        name: 'Университетский маркир',
        type: 'SKI',
        reg: 'http://o-reg.spb.ru',
        res: 'https://o-site.spb.ru/_races/130203_Un/130203_res.htm',
        o_site: '130203_Un'
    },
    {
        id: 'SPB_20130203_2',
        date: '2013-02-03',
        place: 'Парк лесотехнической академии',
        name: 'Кубок СПб по парковому ориентированию «Снежная Тропа», 4 этап',
        start: 'SNOW_WAY',
        res: 'http://o-site.spb.ru/_races/121118_tropa/130203_split.htm',
        o_site: '121118_tropa'
    },
    {
        id: 'SPB_20130212_1',
        date: '2013-02-12',
        place: 'ГБОУ ДОД ДДЮТ Выборгского р-на, ул Сантьяго-де-Куба, 4-2',
        name: 'Выборгский лабиринт',
        type: 'INDOOR',
        video: 'https://www.youtube.com/watch?v=r1uyTGaTBSw'
    },
    {
        id: 'SPB_20130214_1',
        date: '2013-02-14',
        place: 'Кузьмоловский',
        name: 'Кузьмоловская тропа. 65 лет В. Н. Шумилову',
        type: 'SKI',
        reg: 'http://o-reg.spb.ru/',
        res: 'https://o-site.spb.ru/_races/130214/130214_res.htm',
        o_site: '130214'
    },
    {
        id: 'SPB_20130216_1',
        date: '2013-02-16',
        place: 'Токсово',
        name: 'Чемпионат и Первенство СПб, спринт',
        start: 'SPB_CHAMP',
        type: 'SKI',
        res: 'https://o-site.spb.ru/_races/130216/130216_SPLIT.htm',
        o_site: '130216',
        map: 'toksovo_shkolnoe_winter_2013'
    },
    {
        id: 'SPB_20130217_1',
        date: '2013-02-17',
        place: 'Токсово',
        name: 'Чемпионат и Первенство СПб, комбинация',
        start: 'SPB_CHAMP',
        type: 'SKI',
        res: 'https://o-site.spb.ru/_races/130217/130217_split.htm',
        o_site: '130217'
    },
    {
        id: 'SPB_20130223_1',
        date: '2013-02-23',
        place: 'Зеркальный',
        name: 'Чемпионат и Первенство СПб, средняя дистанция',
        start: 'SPB_CHAMP',
        type: 'SKI',
        res: 'https://o-site.spb.ru/_races/130223Ch/130223_split.htm',
        o_site: '130223Ch'
    },
    {
        id: 'SPB_20130223_2',
        date: '2013-02-23',
        place: 'Рахья',
        name: 'Всеволожская тропа, 3 этап',
        start: 'VSEVOLOZHSK_WAY',
        res: 'http://www.o-site.spb.ru/_races/130407/130223_split.htm',
        o_site: '130407'
    },
    {
        id: 'SPB_20130224_1',
        date: '2013-02-24',
        place: 'Зеркальный',
        name: 'Мемориал Андрея Волкова',
        type: 'SKI',
        fmt: 'маркир',
        reg: 'http://o-reg.spb.ru/',
        res: 'https://o-site.spb.ru/_races/130224/130224_res.htm',
        start: 'VOLKOV_A',
        o_site: '130224',
        map: 'volkov_2013_02_23'
    },
    {
        id: 'SPB_20130302_1',
        date: '2013-03-02',
        name: 'Лыжный рогейн RUSH',
        place: 'Шапки ',
        type: 'ROGAINE',
        fmt: '3 и 6 часов на лыжах',
        link: 'https://rush-rogaining.ucoz.ru/',
        o_site: '130302'
    },
    {
        id: 'SPB_20130303_1',
        date: '2013-03-03',
        name: 'Чемпионат и Первенство СПб, маркир',
        start: 'SPB_CHAMP',
        place: 'Ильичёво, Болотная Станция',
        type: 'SKI',
        res: 'https://o-site.spb.ru/_races/130303/130303_ split.htm',
        o_site: '130303'
    },
    {
        id: 'SPB_20130308_1',
        date: '2013-03-08',
        name: 'Чемпионат и Первенство СПб, Эстафета',
        start: 'SPB_CHAMP',
        place: 'Ильичёво, Болотная Станция',
        type: 'SKI',
        reg: 'http://o-reg.spb.ru/',
        res: 'https://o-site.spb.ru/_races/130308_ch/130308_split.htm',
        info: 'Эстафета проводится по группам: Мдо13- 2 этапа, Ждо13- 2 этапа Мдо15- 3 этапа, Ждо15- 3 этапа, Мдо18- 3 этапа, Ждо18- 3 этапа, МЭ- 3 этапа, ЖЭ- 3 этапа, М90 (сумма возрастов ≥90 лет, мин. возраст 35 лет)- 2 этапа, Ж90 (сумма возрастов ≥90 лет, мин. возраст 35 лет)- 2 этапа, М110 (сумма возрастов ≥110 лет, мин. возраст 45 лет)- 2 этапа, Ж110 (сумма возрастов ≥110 лет, мин. возраст 45 лет)- 2 этапа',
        o_site: '130308_ch'
    },
    {
        id: 'SPB_20130308_2',
        date: '2013-03-08',
        place: 'Всеволожск',
        name: 'Всеволожская тропа, 4 этап',
        start: 'VSEVOLOZHSK_WAY',
        res: 'http://www.o-site.spb.ru/_races/130407/130308_split.htm',
        o_site: '130407'
    },
    {
        id: 'SPB_20130309_1',
        date: '2013-03-09',
        name: 'Чемпионат и Первенство СПб, Лонг',
        start: 'SPB_CHAMP',
        place: 'Ильичёво, Болотная Станция',
        type: 'SKI',
        res: 'https://o-site.spb.ru/_races/130309/130309_split.htm',
        info: 'Место проведения: п.Ильичево, Болотная станция',
        o_site: '130309'
    },
    {
        id: 'SPB_20130310_1',
        date: '2013-03-10',
        place: 'Ильичёво, Болотная Станция',
        name: 'Первенство ВУЗов',
        type: 'SKI',
        res: 'https://o-site.spb.ru/_races/130310/130310_RES.pdf',
        info: 'Мандатная комиссия будет проходить 6 марта в СДЮСШОР №2 по адресу Невский пр.39, ком. 59 с 17 до 19 часов. Электронная заявка на o-reg.spb.ru. Состав команды - 10 человек независимо от пола, зачет по 8 лучшим. Справки по участию и заявке +7921 9182378 (Ирина Ломова).',
        o_site: '130310'
    },
    {
        id: 'SPB_20130313_1',
        date: '2013-03-13',
        place: 'Пушкин, Александровский парк',
        name: 'Царскосельский Азимут',
        video: 'https://www.youtube.com/watch?v=zWMeMVgdXws',
        res: 'https://o-site.spb.ru/_races/130313/130313_res.htm',
        o_site: '130313'
    },
    {
        id: 'SPB_20130316_1',
        date: '2013-03-16',
        endDate: '2013-03-17',
        name: 'Рогейн 100х24',
        type: 'ROGAINE',
        reg: 'http://100x24.ru/reg.htm',
        res: 'http://100x24.ru/results.htm',
        o_site: '130317',
        start: '100x24'
    },
    {
        id: 'SPB_20130317_1',
        date: '2013-03-17',
        name: 'Кубок СПб по парковому ориентированию «Снежная Тропа»',
        start: 'SNOW_WAY',
        reg: 'http://o-reg.spb.ru/',
        res: 'http://o-site.spb.ru/_races/121118_tropa/130317_split.htm',
        video: ['https://www.youtube.com/watch?v=02GejJervm8','https://www.youtube.com/watch?v=TjW57SIUO3o'],
        o_site: '121118_tropa',
        map: 'osinovaja_roscha_2013'
    },
    {
        id: 'SPB_20130331_1',
        date: '2013-03-31',
        name: 'Ориентир-1',
        res: 'http://o-site.spb.ru/_races/130331_OR/130331_split_.htm',
        start: 'ORIENTIR',
        o_site: '130331_OR'
    },
    {
        id: 'SPB_20130401_1',
        date: '2013-04-01',
        name: 'Летний Кубок СПб и ЛО',
        info: 'Многоэтапные лично-командные соревнования по спортивному ориентированию «Кубок Санкт-Петербурга и Ленинградской области» проводятся Федерациями спортивного ориентирования Санкт-Петербурга и Ленинградской области с целью развития клубного движения и выявления сильнейших спортсменов-ориентировщиков и сильнейших клубов спортивного ориентирования СПб и ЛО. 1 этап 05.05 «Сосновоборские Дюны», 2-й день средняя дистанция. Сосновый Бор. рейтинг 2 этап 01.06 Чемпионат и Первенство СПб, эстафета. Кузьмолово. рейтинг 3 этап 02.06 Чемпионат и Первенство СПб, лонг. Симагино. рейтинг 4 этап 08.09 Чемпионат и Первенство СПб, марафон. Цвелодубово. рейтинг 5 этап 15.09 Чемпионат и Первенство ЛО, средняя дистанция. Ильичёво. рейтинг 6 этап 22.09 Чемпионат и Первенство СПб, средняя дистанция. Поляны. рейтинг 7 этап 20.10 Финал Кубка. Выборг. рейтинг',
        o_site: 'SPb_LO_Cup_2013',
        // endDate: '2013-10-31'
    },
    {
        id: 'SPB_20130406_1',
        date: '2013-04-06',
        place: 'парк Александрино',
        name: 'Тренировка от Стрекозаек',
        start: 'STREKOZAIKI',
        res: 'https://o-site.spb.ru/_races/130406_Str/130406_res.htm',
        o_site: '130406_Str'
    },
    {
        id: 'SPB_20130407_1',
        date: '2013-04-07',
        name: 'Всеволожская тропа 2013, 5 этап',
        start: 'VSEVOLOZHSK_WAY',
        place: 'Бугры',
        res: 'https://o-site.spb.ru/_races/130407/130407_split.htm',
        video: [
            'https://www.youtube.com/watch?v=9qdcV65pPMg',
            'https://www.youtube.com/watch?v=UDyQ01EMN04',
            'https://www.youtube.com/watch?v=SP-YLhFY2N0',
            'https://www.youtube.com/watch?v=mFShech7jmw'
        ],
        map: ['rakhja_south_2007','bugry_2011'],
        o_site: '130407'
    },
    {
        id: 'SPB_20130409_1',
        date: '2013-04-09',
        name: 'Ориентир-2',
        start: 'ORIENTIR',
        res: 'http://o-site.spb.ru/_races/130331_OR/130409_split.htm',
        o_site: '130331_OR'
    },
    {
        id: 'SPB_20130410_1',
        date: '2013-04-10',
        place: 'шк №136',
        name: 'Sprint Tour SPb 2013, 1 этап',
        start: 'SPRINT_TOUR',
        res: 'http://www.o-site.spb.ru/_races/130904/130410_split.htm',
        o_site: '130904'
    },
    {
        id: 'SPB_20130414_1',
        date: '2013-04-14',
        name: 'Ориентир-3 Подснежник',
        start: 'ORIENTIR',
        res: 'http://o-site.spb.ru/_races/130331_OR/130414_split.htm',
        o_site: '130331_OR'
    },
    {
        id: 'SPB_20130417_1',
        date: '2013-04-17',
        place: 'лицей №126',
        name: 'Sprint Tour SPb 2013, 2 этап',
        start: 'SPRINT_TOUR',
        res: 'http://www.o-site.spb.ru/_races/130904/130417_split.htm',
        o_site: '130904'
    },
    {
        id: 'SPB_20130418_1',
        date: '2013-04-18',
        name: 'Весенний Кубок 110%, 1 этап',
        start: 'ROGAINE_110',
        res: 'http://www.o-site.spb.ru/_races/130606/130418_res.htm',
        o_site: '130606'
    },
    {
        id: 'SPB_20130419_1',
        date: '2013-04-19',
        endDate: '2013-04-21',
        place: 'Псков',
        name: 'Венок славы Александра Невского',
        reg: 'http://o-reg.spb.ru',
        res: 'http://www.orientpskov.ru/images/files/nevskiy/summa3day.htm',
        o_site: '13041921_AN'
    },
    {
        id: 'SPB_20130421_1',
        date: '2013-04-21',
        name: 'Баболовский микс',
        place: 'Баболовский парк',
        reg: 'http://o-reg.spb.ru/',
        res: 'https://o-site.spb.ru/_races/130421_Pushkin/130420-21_res.xls',
        info: 'Соревнования будут проводиться 20 и 21 апреля в Баболовском парке г. Пушкина',
        o_site: '130421_Pushkin',
        map: 'pushkin_babolovsky_2019'
    },
    {
        id: 'SPB_20130423_1',
        date: '2013-04-23',
        name: 'Ориентир-4',
        start: 'ORIENTIR',
        res: 'http://o-site.spb.ru/_races/130331_OR/130423_split.htm',
        o_site: '130331_OR'
    },
    {
        id: 'SPB_20130424_1',
        date: '2013-04-24',
        place: 'Сосновка',
        name: 'Первенство Фрунзенского р-на среди школьников',
        res: 'https://o-site.spb.ru/_races/130424_Fr/130424_res.htm',
        o_site: '130424_Fr',
        map: 'sosnovka_2011'
    },
    {
        id: 'SPB_20130424_2',
        date: '2013-04-24',
        place: 'шк №124',
        name: 'Sprint Tour SPb 2013, 3 этап',
        start: 'SPRINT_TOUR',
        res: 'http://www.o-site.spb.ru/_races/130904/130424_split.htm',
        o_site: '130904'
    },
    {
        id: 'SPB_20130425_1',
        date: '2013-04-25',
        name: 'Весенний Кубок 110%, 2 этап',
        start: 'ROGAINE_110',
        res: 'http://www.o-site.spb.ru/_races/130606/130425_res.htm',
        o_site: '130606'
    },
    {
        id: 'SPB_20130427_1',
        date: '2013-04-27',
        place: 'парк Муринский ручей',
        name: 'Открытое Первенство Калининского района Санкт-Петербурга по спортивному ориентированию',
        reg: 'http://o-reg.spb.ru/',
        owner: 'SFSO_SPB',
        o_site: '130427_pkr'
    },
    {
        id: 'SPB_20130427_2',
        date: '2013-04-27',
        place: 'Суоранда',
        name: 'Кубок Яркого Мира 2013, 1 этап',
        res: 'http://www.o-site.spb.ru/_races/2013CupYM/130427_split.htm',
        o_site: '2013CupYM',
        start: 'YM_CUP'
    },
    {
        id: 'SPB_20130428_1',
        date: '2013-04-28',
        place: 'городской квартал на пр.Тореза',
        name: 'Чемпионат и Первенство СПб, спринт',
        start: 'SPB_CHAMP',
        res: 'https://o-site.spb.ru/_races/130428_Ch/130428_split_.htm',
        o_site: '130428_Ch',
        reskeep: 259
    },
    {
        id: 'SPB_20130504_1',
        date: '2013-04-28',
        endDate: '2013-05-04',
        name: 'УТС в Зеркальном',
        place: 'Зеркальный',
        res: 'https://o-site.spb.ru/_races/130428-0504/130502_split.htm',
        o_site: '130428-0504'
    },
    {
        id: 'SPB_20130501_1',
        date: '2013-05-01',
        endDate: '2013-05-03',
        place: 'Будогощь',
        name: 'Чемпионат и Первенство ЛО',
        start: 'LO_CHAMP',
        reg: 'http://sportident.ru/entry/event_info.php?id=635',
        info: 'Открытый Чемпионат и Первенство Ленинградской области по спортивному ориентированию бегом',
        o_site: '13050103'
    },
    {
        id: 'SPB_20130501_2',
        date: '2013-05-01',
        place: 'Луга',
        map: 'luga_omchino_gk_2023',
        name: 'Горный кросс-35',
        type: 'ROGAINE',
        fmt: '3 и 8 часов',
        link: 'http://gornycross.narod.ru',
        start: 'GORNY_CROSS'
    },
    {
        id: 'SPB_20130502_1',
        date: '2013-05-02',
        place: 'Луга, Шалово',
        map: 'luga_omchino_gk_2023',
        name: 'Горный Кросс-35, рогейн «Лужский рубеж»',
        type: 'ROGAINE',
        res: 'https://o-site.spb.ru/_races/130501/130502_res_1.zip',
        info: 'I Чемпионат Северо-Запада России по рогейну «Лужский рубеж» и «Горный кросс-35».',
        fmt: '6 часов бегом',
        start: 'GORNY_CROSS',
        o_site: '130501'
    },
    {
        id: 'SPB_20130504_2',
        date: '2013-05-04',
        endDate: '2013-05-05',
        place: 'Сосновый Бор',
        name: 'Сосновоборские Дюны',
        start: 'SOSNOVOBORSKY_DUNY',
        reg: 'http://o-reg.spb.ru',
        res: 'https://o-site.spb.ru/_races/13042021/130504_res.htm',
        o_site: '13042021'
    },
    {
        id: 'SPB_20130508_1',
        date: '2013-05-08',
        place: 'Нарвская',
        name: 'Sprint Tour SPb 2013, 4 этап',
        start: 'SPRINT_TOUR',
        res: 'http://www.o-site.spb.ru/_races/130904/130508_split.htm',
        o_site: '130904'
    },
    {
        id: 'SPB_20130509_1',
        date: '2013-05-09',
        place: 'Комарово-Репино',
        name: 'Соревнования, посвящённые Дню Победы',
        reg: 'http://o-reg.spb.ru',
        res: 'https://o-site.spb.ru/_races/130509_Az/130509_res.htm',
        info: 'Соревнования проводятся непосредственно после чемпионата СПб среди студентов ВУЗов. Начало старта через 3 часа после старта студентов.',
        o_site: '130509_Az',
        owner: 'AZIMUT'
    },
    {
        id: 'SPB_20130509_2',
        date: '2013-05-09',
        place: 'Комарово-Репино',
        name: 'Чемпионат СПб среди студентов ВУЗов',
        start: 'SPB_CHAMP',
        reg: 'http://o-reg.spb.ru',
        res: 'https://o-site.spb.ru/_races/130509_vyz/130509_res.xls',
        info: 'Мандатная комиссия проводится 29 апреля в СДЮСШ ОР №2, пом.59 по адресу: Невский пр., 39, с 17 до 18 часов.',
        o_site: '130509_vyz'
    },
    {
        id: 'SPB_20130510_1',
        date: '2013-05-10',
        place: 'Петяярви',
        name: 'Кубок Яркого Мира 2013, 3 этап',
        res: 'http://www.o-site.spb.ru/_races/2013CupYM/130510_split.htm',
        o_site: '2013CupYM',
        start: 'YM_CUP'
    },
    {
        id: 'SPB_20130511_1',
        date: '2013-05-11',
        endDate: '2013-05-12',
        place: 'Выборг',
        name: 'Выборгская Тройка',
        start: 'VYBORGSKY_TROIKA',
        res: 'http://moscompass.ru/news/2013/20130511-dayvyb-rez.htm',
        info: 'Соревнования проводятся 11-12 мая 2013 года в городе Выборг Ленинградской области. Дневной старт 11 мая является открытым первенством Выборгского района по спортивному ориентированию.',
        owner: ['VYBORG','NW'],
        o_site: '13051112'
    },
    {
        id: 'SPB_20130514_1',
        date: '2013-05-14',
        place: 'Парк Лесотехнического университета',
        name: 'Первенство СПбГЛТУ',
        res: 'https://o-site.spb.ru/_races/130514_LTA/130614_res_LTA.htm',
        info: 'Первенство Лесотехнического университета среди студентов',
        owner: 'SFSO_SPB',
        o_site: '130514_LTA',
        map: 'lesotekchnicheskaya_2025'
    },
    {
        id: 'SPB_20130514_2',
        date: '2013-05-14',
        name: 'Ориентир-5',
        start: 'ORIENTIR',
        res: 'http://o-site.spb.ru/_races/130331_OR/130514_split.htm',
        o_site: '130331_OR'
    },
    {
        id: 'SPB_20130515_1',
        date: '2013-05-15',
        place: 'Аврора',
        name: 'Sprint Tour SPb 2013, 5 этап',
        start: 'SPRINT_TOUR',
        res: 'http://www.o-site.spb.ru/_races/130904/130515_split.htm',
        o_site: '130904'
    },
    {
        id: 'SPB_20130516_1',
        date: '2013-05-16',
        name: 'Весенний Кубок 110%, 3 этап',
        start: 'ROGAINE_110',
        res: 'http://www.o-site.spb.ru/_races/130606/130516_res.htm',
        o_site: '130606'
    },
    {
        id: 'SPB_20130517_1',
        date: '2013-05-17',
        endDate: '2013-05-19',
        name: 'Чемпионат Прибалтики',
        place: 'Ruusmäe, Estonia',
        res: 'http://www.orienteerumine.ee/boc2013/alam_failid/day_1.htm',
        o_site: '13051719'
    },
    {
        id: 'SPB_20130518_1',
        date: '2013-05-18',
        place: 'Лемболово',
        name: 'Памяти друзей',
        reg: 'http://o-reg.spb.ru',
        res: 'https://o-site.spb.ru/_races/130518_Az/130518_RES.htm',
        info: 'Традиционный старт, провводимый КСО Азимут в память о тех, кого уже нет с нами...',
        o_site: '130518_Az',
        map: 'lembolovo_2002',
        owner: 'AZIMUT'
    },
    {
        id: 'SPB_20130518_2',
        date: '2013-05-18',
        endDate: '2013-05-19',
        name: 'Чемпионат и Первенство ЛО по вело-О',
        start: 'LO_CHAMP',
        place: 'Всеволожск, Колтуши',
        type: 'VELO',
        res: 'https://o-site.spb.ru/_races/13051819/130518_rez.htm',
        o_site: '13051819'
    },
    {
        id: 'SPB_20130518_3',
        date: '2013-05-18',
        place: 'Кирилловское, Кирпичное',
        name: 'BikeAdventure',
        type: ['ROGAINE', 'VELO'],
        link: 'https://vk.com/bikeadventure',
        res: 'https://www.bikeadventure.ru/arhiv/arhiv-2013-1.php',
        photo: 'https://vk.com/album-30311715_174424062',
        map: 'kirpichnoe_ba_2013',
        start: 'BA',
        owner: 'BKTV'
    },
    {
        id: 'SPB_20130519_1',
        date: '2013-05-19',
        place: 'Пухтолова гора',
        name: 'Первенство СПб среди обучающихся',
        start: 'SPB_CHAMP',
        reg: 'http://o-reg.spb.ru',
        res: 'https://o-site.spb.ru/_races/130519/130519_res.htm',
        o_site: '130519',
        map: 'pukhtolova_gora_2009'
    },
    {
        id: 'SPB_20130521_1',
        date: '2013-05-21',
        name: 'Ориентир-6',
        start: 'ORIENTIR',
        res: 'http://o-site.spb.ru/_races/130331_OR/130521_split.htm',
        o_site: '130331_OR'
    },
    {
        id: 'SPB_20130522_1',
        date: '2013-05-22',
        endDate: '2013-05-23',
        place: 'Пушкин, Нижний парк',
        name: 'Чемпионат и пер-во СПб по ориентированию – спорт глухих',
        start: 'SPB_CHAMP',
        res: 'https://o-site.spb.ru/_races/13052223/130522_res.htm',
        o_site: '13052223',
        map: 'pushkin_nizhny_2019'
    },
    {
        id: 'SPB_20130522_2',
        date: '2013-05-22',
        place: 'Сосновая поляна',
        name: 'Sprint Tour SPb 2013, 6 этап',
        res: 'http://www.o-site.spb.ru/_races/130904/130522_split.htm',
        start: 'SPRINT_TOUR',
        o_site: '130904'
    },
    {
        id: 'SPB_20130523_1',
        date: '2013-05-23',
        name: 'Весенний Кубок 110%, 4 этап',
        res: 'http://www.o-site.spb.ru/_races/130606/130523_res.htm',
        start: 'ROGAINE_110',
        o_site: '130606'
    },
    {
        id: 'SPB_20130525_1',
        date: '2013-05-25',
        endDate: '2013-05-28',
        place: 'Токсово-Кавголово',
        name: 'Кубок России по МТБО',
        reg: 'http://sportident.ru/entry/event_info.php?id=638',
        o_site: '13052528'
    },
    {
        id: 'SPB_20130525_2',
        date: '2013-05-25',
        place: 'Заходское',
        name: 'Весенний марш-бросок',
        type: 'TOURISM',
        start: 'MB',
        map: 'zahodskoe_mb_2013'
    },
    {
        id: 'SPB_20130526_1',
        date: '2013-05-26',
        place: 'Всеволожск, Румболовский парк',
        name: 'Российский Азимут ЛО',
        res: 'https://o-site.spb.ru/_races/130526_LO/130526_lo_res.pdf',
        owner: 'SFSO_LO',
        o_site: '130526_LO',
        map: 'vsevolozhsk_rumbolovo_2014'
    },
    {
        id: 'SPB_20130526_2',
        date: '2013-05-26',
        place: 'Удельный парк',
        name: 'Российский Азимут СПб',
        res: 'https://o-site.spb.ru/_races/130526_SPb/130526_split.htm',
        owner: 'SFSO_SPB',
        o_site: '130526_SPb',
        map: 'udelny_2009'
    },
    {
        id: 'SPB_20130528_1',
        date: '2013-05-28',
        name: 'Ориентир-7',
        res: 'http://o-site.spb.ru/_races/130331_OR/130528_split.htm',
        start: 'ORIENTIR',
        o_site: '130331_OR'
    },
    {
        id: 'SPB_20130529_1',
        date: '2013-05-29',
        place: 'Ржевский л/п',
        name: 'Sprint Tour SPb 2013, 7 этап',
        res: 'http://www.o-site.spb.ru/_races/130904/130529_split.htm',
        start: 'SPRINT_TOUR',
        o_site: '130904'
    },
    {
        id: 'SPB_20130530_1',
        date: '2013-05-30',
        name: 'Весенний Кубок 110%, 5 этап',
        res: 'http://www.o-site.spb.ru/_races/130606/130530_res.htm',
        start: 'ROGAINE_110',
        o_site: '130606'
    },
    {
        id: 'SPB_20130601_1',
        date: '2013-06-01',
        name: 'Чемпионат и Первенство СПб, эстафета',
        start: 'SPB_CHAMP',
        place: 'Кузьмолово',
        reg: 'http://o-reg.spb.ru/',
        res: 'http://o-time.ru/images/all/w13/footo010613spbr.htm',
        o_site: '130601'
    },
    {
        id: 'SPB_20130601_2',
        date: '2013-06-01',
        name: 'Горный кросс-36',
        type: 'ROGAINE',
        fmt: '24,8,3 часа',
        link: 'http://gornycross.narod.ru',
        start: 'GORNY_CROSS'
    },
    {
        id: 'SPB_20130602_1',
        date: '2013-06-02',
        place: 'Молодежное-Поляны',
        name: '1-й Чемпионат России по рогейну на велосипедах',
        type: 'ROGAINE',
        res: 'https://o-site.spb.ru/_races/130602/130602_res.zip',
        start: 'RUSSIA_ROGAINE_CHAMP',
        o_site: '130602'
    },
    {
        id: 'SPB_20130602_2',
        date: '2013-06-02',
        place: 'Симагино-Огоньки',
        name: 'Чемпионат и Первенство СПб, лонг',
        start: 'SPB_CHAMP',
        res: 'https://o-site.spb.ru/_races/130602Ch/130602_RES.htm',
        o_site: '130602Ch',
        reskeep: 247
    },
    {
        id: 'SPB_20130605_1',
        date: '2013-06-05',
        place: 'шк №332',
        name: 'Sprint Tour SPb 2013, 8 этап',
        res: 'http://www.o-site.spb.ru/_races/130904/130605_split.htm',
        start: 'SPRINT_TOUR',
        o_site: '130904'
    },
    {
        id: 'SPB_20130606_1',
        date: '2013-06-06',
        name: 'Весенний Кубок 110%, 6 этап',
        res: 'http://www.o-site.spb.ru/_races/130606/130418_res.htm',
        start: 'ROGAINE_110',
        o_site: '130606'
    },
    {
        id: 'SPB_20130608_1',
        date: '2013-06-08',
        endDate: '2013-06-09',
        place: 'Кузьмолово, дом Культуры, Ленинградское ш, 8',
        name: 'Аттестационный судейский семинар',
        o_site: '13060809'
    },
    {
        id: 'SPB_20130609_1',
        date: '2013-06-09',
        name: 'Ориентир-8',
        res: 'http://o-site.spb.ru/_races/130331_OR/130609_split.htm',
        start: 'ORIENTIR',
        o_site: '130331_OR'
    },
    {
        id: 'SPB_20130612_1',
        date: '2013-06-12',
        place: 'Первомайское',
        name: 'Кузьмоловские вожди-2',
        res: 'https://o-site.spb.ru/_races/130612/130612_res.htm',
        o_site: '130612'
    },
    {
        id: 'SPB_20130612_2',
        date: '2013-06-12',
        place: 'Первомайское',
        name: 'Кузьмоловские вожди-2',
        res: 'https://o-site.spb.ru/_races/130612/130612_res.htm',
        o_site: '130612'
    },
    {
        id: 'SPB_20130614_1',
        date: '2013-06-14',
        endDate: '2013-06-16',
        name: 'Невский Азимут - Кубок России среди ветеранов',
        place: 'Ягодное',
        reg: 'http://o-reg.spb.ru',
        res: 'https://o-site.spb.ru/_races/13061416_NA/130614_res.htm',
        info: 'В 2013 году одновременно с многодневкой Невский Азимут по группам МЖ 35-85 будет проводиться Кубок России среди ветеранов.',
        start: 'NA',
        o_site: '13061416_NA',
        map: ['na_2013_06_14', 'na_2013_razdelnoe', 'na_2013_06_16']
    },
    {
        id: 'SPB_20130618_1',
        date: '2013-06-18',
        endDate: '2013-06-23',
        place: 'Ягодное',
        name: 'Фестиваль БелыеНочи-2013',
        res: 'https://o-site.spb.ru/_races/13061823/130618_split.htm',
        o_site: '13061823',
        map: ['ym_2013_06_18', 'ym_2013_06_19', 'ym_2013_borisovo_long'],
        start: ['WN','YM']
    },
    {
        id: 'SPB_20130623_1',
        date: '2013-06-23',
        endDate: '2013-06-27',
        place: 'Выборг',
        name: 'Кубок Карельского Перешейка',
        reg: 'http://sportident.ru/entry/event_info.php?id=531',
        info: 'Всероссийские многодневные соревнования «Кубок Карельского Перешейка 2013»',
        video: 'https://www.youtube.com/watch?v=-1F_4uM-C3U',
        start: 'KKP',
        o_site: '13062427',
        map: ['kkp_2013_06_24','kkp_2013_06_27']
    },
    {
        id: 'SPB_20130628_1',
        date: '2013-06-28',
        place: 'Выборг',
        name: 'XXI Мемориал Михаила Святкина',
        reg: 'http://o-reg.spb.ru/',
        res: 'https://o-site.spb.ru/_races/13062830_MS/130630_res.htm',
        info: 'Соревнования проводятся 28-30 июня 2013 года в Выборгском районе Ленинградской области (г.Выборг).',
        start: 'MMS',
        o_site: '13062830_MS',
        endDate: '2013-06-30',
        map: ['vyborg_saymenskie_dachi_2013','mms_2013_06_28','mms_2013_06_29','mms_2013_06_30']
    },
    {
        id: 'SPB_20130706_1',
        date: '2013-07-05',
        endDate: '2013-07-07',
        name: 'Балтийские юношеские игры',
        place: 'Выборг, Кировские Дачи',
        video: 'https://www.youtube.com/watch?v=0otJHpAGAoQ'
    },
    {
        id: 'SPB_20130706_2',
        date: '2013-07-06',
        name: 'Велорогейн 100х24',
        place: 'Зеленогорск, Черные оз',
        type: 'ROGAINE',
        reg: 'http://100x24.ru/reg.htm',
        res: 'http://www.100x24.ru/results.htm',
        o_site: '130706',
        start: '100x24',
        map: 'zelik_2013_100x24_velo'
    },
    {
        id: 'SPB_20130707_1',
        date: '2013-07-07',
        place: 'Первомайское',
        name: 'Кубок Яркого Мира 2013, 5 этап',
        res: 'http://www.o-site.spb.ru/_races/2013CupYM/130707_split.htm',
        o_site: '2013CupYM',
        start: 'YM_CUP'
    },
    {
        id: 'SPB_20130713_1',
        date: '2013-07-13',
        endDate: '2013-07-14',
        place: 'Карельский перешеек, Приозерское направление',
        name: 'MatrasOFF Race',
        type: 'MULTI',
        reg: 'http://x-race.info/calendar/10596/tender/',
        info: 'Дисциплины: Велоориентирование, Велолегенда, Кросс-Кантри эстафета, Спортивное ориентирование, Трекинг, Ориентирование по космоснимку, Коастеринг, Байдарочные этапы, передвижение на Роликах, Плавание, GPS-задачи и Технические этапы.',
        o_site: '13071314'
    },
    {
        id: 'SPB_20130714_1',
        date: '2013-07-14',
        name: 'Ориентир-9',
        res: 'http://o-site.spb.ru/_races/130331_OR/130714_split.htm',
        start: 'ORIENTIR',
        o_site: '130331_OR'
    },
    {
        id: 'SPB_20130720_1',
        date: '2013-07-20',
        place: 'Мичуринское',
        name: 'Спринт-рогейн, 1 этап. Рогейн 110%',
        type: 'ROGAINE',
        reg: 'http://o-reg.spb.ru/',
        res: 'https://o-site.spb.ru/_races/130720/130720_res.pdf',
        fmt: '3 часа бегом',
        start: 'ROGAINE_110',
        o_site: '130720'
    },
    {
        id: 'SPB_20130720_2',
        date: '2013-07-20',
        place: 'Орехово',
        map: 'lembolovo_orekhovo_peski_gk_2026',
        name: 'Горный кросс-37',
        link: 'http://gornycross.narod.ru',
        type: 'ROGAINE',
        reg: 'http://www.x-race.info/calendar/9944/tender/',
        res: 'https://o-site.spb.ru/_races/130720_GK/130720_res_.xls',
        fmt: '6 и 3 час. бегом; 6 час. вело',
        start: 'GORNY_CROSS',
        o_site: '130720_GK'
    },
    {
        id: 'SPB_20130721_1',
        date: '2013-07-21',
        place: 'Воробьёвые оз',
        name: 'Спринт-рогейн, 2 этап. Рогейн Белые Ночи',
        type: 'ROGAINE',
        reg: 'http://o-reg.spb.ru/',
        res: 'https://o-site.spb.ru/_races/130721/130721_res.xls',
        fmt: '3 часа бегом',
        owner: 'WN',
        start: 'WN',
        o_site: '130721'
    },
    {
        id: 'SPB_20130726_1',
        date: '2013-07-26',
        place: 'Псковская обл.',
        name: '11-й Чемпионат Мира по рогейну',
        type: 'ROGAINE',
        fmt: '24 часа',
        link: 'www.wrc2013.com'
    },
    {
        id: 'SPB_20130728_1',
        date: '2013-07-28',
        name: 'Ориентир-10',
        res: 'http://o-site.spb.ru/_races/130331_OR/130728_split.htm',
        start: 'ORIENTIR',
        o_site: '130331_OR'
    },
    {
        id: 'SPB_20130810_1',
        date: '2013-08-10',
        endDate: '2013-08-11',
        name: 'HappyBike',
        reg: 'http://www.piterhappening.ru/entry_happybike2013.html',
        res: 'https://o-site.spb.ru/_races/130811/130810_res.htm',
        fmt: '8 и 24 часа',
        o_site: '130811'
    },
    {
        id: 'SPB_20130811_1',
        date: '2013-08-11',
        name: 'Ориентир-11',
        res: 'http://o-site.spb.ru/_races/130331_OR/130811_split.htm',
        start: 'ORIENTIR',
        o_site: '130331_OR'
    },
    {
        id: 'SPB_20130817_1',
        date: '2013-08-17',
        place: 'оз Воробьево',
        name: 'Кубок Яркого Мира 2013, 6 этап',
        res: 'http://www.o-site.spb.ru/_races/2013CupYM/130817_split.htm',
        o_site: '2013CupYM',
        start: 'YM_CUP'
    },
    {
        id: 'SPB_20130818_1',
        date: '2013-08-18',
        place: 'оз Воробьево',
        name: 'Кубок Яркого Мира 2013, 7 этап',
        res: 'http://www.o-site.spb.ru/_races/2013CupYM/130818_split.htm',
        o_site: '2013CupYM',
        start: 'YM_CUP'
    },
    {
        id: 'SPB_20130824_1',
        date: '2013-08-24',
        endDate: '2013-08-25',
        place: 'Саблино',
        name: 'PiterHappening',
        reg: 'http://www.piterhappening.ru/entry_ph2013.html',
        res: 'https://o-site.spb.ru/_races/130824/130824-25_RES.htm',
        o_site: '130824'
    },
    {
        id: 'SPB_20130824_2',
        date: '2013-08-24',
        endDate: '2013-08-25',
        place: 'Кузнечное',
        name: 'Памяти Сергея Кузнецова',
        reg: 'http://o-reg.spb.ru/',
        res: 'https://o-site.spb.ru/_races/13082425/13082425_res.htm',
        o_site: '13082425',
        map: 'psk_2013_08_24'
    },
    {
        id: 'SPB_20130825_1',
        date: '2013-08-25',
        place: 'ст. Петяярви',
        name: 'Зелёный змей',
        res: 'https://o-site.spb.ru/_races/130825_ZZ/130825_res.htm',
        info: 'Традиционные соревнования по специальным правилам, проводимые клубом Азимут',
        start: 'GS',
        o_site: '130825_ZZ',
        map: 'gs_2013_08_25'
    },
    {
        id: 'SPB_20130831_1',
        date: '2013-08-31',
        place: '105-я высота',
        name: 'Кубок Яркого Мира 2013, 8 этап',
        res: 'http://www.o-site.spb.ru/_races/2013CupYM/130831_split.htm',
        o_site: '2013CupYM',
        start: 'YM_CUP'
    },
    {
        id: 'SPB_20130901_1',
        date: '2013-09-01',
        place: 'Сярьги',
        name: 'Кубок Яркого Мира 2013, 9 этап',
        res: 'http://www.o-site.spb.ru/_races/2013CupYM/130901_split.htm',
        o_site: '2013CupYM',
        start: 'YM_CUP'
    },
    {
        id: 'SPB_20130904_1',
        date: '2013-09-04',
        place: 'шк №156',
        name: 'Sprint Tour SPb 2013, 9 этап',
        res: 'http://www.o-site.spb.ru/_races/130904/130904_split.htm',
        start: 'SPRINT_TOUR',
        o_site: '130904'
    },
    {
        id: 'SPB_20130905_1',
        date: '2013-09-05',
        name: 'Кузьмоловские старты',
        start: 'KUZMOLOVSKY_STARTS',
        place: 'Токсово',
        res: 'http://www.o-site.spb.ru/_races/130905/130905_res.htm',
        o_site: '130905'
    },
    {
        id: 'SPB_20130905_2',
        date: '2013-09-05',
        name: 'Ориентир-12. П-во Фрунзенского р-на среди школьников',
        res: 'http://o-site.spb.ru/_races/130331_OR/130905_split.htm',
        start: 'ORIENTIR',
        o_site: '130331_OR'
    },
    {
        id: 'SPB_20130907_2',
        date: '2013-09-07',
        place: 'Зеленогорск',
        map: 'zelenogorsk_gk_2009',
        name: 'Горный кросс-39,40',
        type: 'ROGAINE',
        fmt: '8 и 3 часа',
        link: 'http://gornycross.narod.ru',
        start: 'GORNY_CROSS'
    },
    {
        id: 'SPB_20130908_1',
        date: '2013-09-08',
        place: 'Цвелодубово',
        name: 'Чемпионат и Первенство СПб, марафон',
        start: 'SPB_CHAMP',
        res: 'https://o-site.spb.ru/_races/130908/130908_res.htm',
        o_site: '130908',
        reskeep: 254
    },
    {
        id: 'SPB_20130910_1',
        date: '2013-09-10',
        name: 'Ориентир-13',
        res: 'http://o-site.spb.ru/_races/130331_OR/130910_split.htm',
        start: 'ORIENTIR',
        o_site: '130331_OR'
    },
    {
        id: 'SPB_20130911_1',
        date: '2013-09-11',
        place: 'шк №536',
        name: 'Sprint Tour SPb 2013, 10 этап',
        res: 'http://www.o-site.spb.ru/_races/130904/130911_split.htm',
        start: 'SPRINT_TOUR',
        map: 'kosmonavtov_2013',
        o_site: '130904'
    },
    {
        id: 'SPB_20130912_1',
        date: '2013-09-12',
        name: 'Кузьмоловские старты, 2 этап',
        start: 'KUZMOLOVSKY_STARTS',
        res: 'http://www.o-site.spb.ru/_races/130905/130912_res.htm',
        o_site: '130905'
    },
    {
        id: 'SPB_20130914_1',
        date: '2013-09-14',
        endDate: '2013-09-15',
        place: 'Ильчево',
        name: 'Командный Ч-т и П-во ЛО',
        start: 'LO_CHAMP',
        reg: 'http://o-reg.spb.ru/',
        res: 'https://o-site.spb.ru/_races/13091415_LO/130914_res.pdf',
        info: 'Старт 15 сентября входит в зачёт Кубка СПб и ЛО 2013 года.',
        o_site: '13091415_LO'
    },
    {
        id: 'SPB_20130914_2',
        date: '2013-09-14',
        endDate: '2013-09-15',
        place: 'Выборг',
        name: 'Хэппи Хадж',
        reg: 'http://www.piterhappening.ru/entry_hadz2013.html',
        res: 'https://o-site.spb.ru/_races/13091415/130914_res.htm',
        info: 'Три формата: рогейн 8 часов, заданное направление 24 часа или 15+10 часов с обязательной ночевкой (по типу "Марш-Броска")',
        o_site: '13091415'
    },
    {
        id: 'SPB_20130917_1',
        date: '2013-09-17',
        name: 'Ориентир-14',
        res: 'http://o-site.spb.ru/_races/130331_OR/130917_split.htm',
        start: 'ORIENTIR',
        o_site: '130331_OR'
    },
    {
        id: 'SPB_20130918_1',
        date: '2013-09-18',
        place: 'гимназия №144',
        name: 'Sprint Tour SPb 2013, 11 этап',
        start: 'SPRINT_TOUR',
        o_site: '130904'
    },
    {
        id: 'SPB_20130919_1',
        date: '2013-09-19',
        name: 'Кузьмоловские старты, 3 этап',
        start: 'KUZMOLOVSKY_STARTS',
        res: 'http://www.o-site.spb.ru/_races/130905/130919_res.htm',
        o_site: '130905'
    },
    {
        id: 'SPB_20130921_1',
        date: '2013-09-21',
        place: 'Кузьмолово-Токсово',
        name: 'Критериум',
        res: 'https://o-site.spb.ru/_races/130921_Cr/130921_res.xls',
        o_site: '130921_Cr'
    },
    {
        id: 'SPB_20130921_2',
        date: '2013-09-21',
        place: 'Рощино',
        name: 'Чемпионат и Первенство СПб по вело-О, велокросс-классика',
        start: 'SPB_CHAMP',
        type: 'VELO',
        res: 'https://o-site.spb.ru/_races/130921/130921_mtbo_res.pdf',
        fmt: 'Велокросс-классика (40-70мин) - код дисциплины 0830241811Я',
        o_site: '130921'
    },
    {
        id: 'SPB_20130921_3',
        date: '2013-09-21',
        place: 'Кузнечное',
        name: 'Осенний марш-бросок',
        type: 'TOURISM',
        start: 'MB',
        map: 'kuznechnoe_mb_2013'
    },
    {
        id: 'SPB_20130921_4',
        date: '2013-09-21',
        place: 'шк №11',
        name: 'Sprint Tour SPb 2013, 12 этап',
        start: 'SPRINT_TOUR',
        o_site: '130904'
    },
    {
        id: 'SPB_20130922_1',
        date: '2013-09-22',
        name: 'Чемпионат и Первенство СПб, средняя дистанция',
        start: 'SPB_CHAMP',
        place: 'Поляны',
        res: 'https://o-site.spb.ru/_races/130922/130922_split.htm',
        video: 'https://www.youtube.com/watch?v=59GaGUqEw1c',
        o_site: '130922',
        reskeep: 226
    },
    {
        id: 'SPB_20130924_1',
        date: '2013-09-24',
        name: 'Ориентир-15',
        res: 'http://o-site.spb.ru/_races/130331_OR/130924_split.htm',
        start: 'ORIENTIR',
        o_site: '130331_OR'
    },
    {
        id: 'SPB_20130925_1',
        date: '2013-09-25',
        place: 'шк №379',
        name: 'Sprint Tour SPb 2013, 13 этап',
        start: 'SPRINT_TOUR',
        o_site: '130904'
    },
    {
        id: 'SPB_20130926_1',
        date: '2013-09-26',
        name: 'Кузьмоловские старты, 4 этап',
        start: 'KUZMOLOVSKY_STARTS',
        res: 'http://www.o-site.spb.ru/_races/130905/130926_res.htm',
        o_site: '130905'
    },
    {
        id: 'SPB_20130927_1',
        date: '2013-09-27',
        name: 'Ночные Эстафеты 110%',
        place: 'Кузьмолово',
        reg: 'http://o-reg.spb.ru/',
        res: 'https://o-site.spb.ru/_races/130927/130927_res.htm',
        fmt: 'Двухэтапная эстафета в заданном направлении',
        start: 'ROGAINE_110',
        o_site: '130927'
    },
    {
        id: 'SPB_20130927_2',
        date: '2013-09-27',
        endDate: '2013-09-30',
        name: 'Старты в Зеркальном',
        place: 'Зеркальный',
        res: 'https://o-site.spb.ru/_races/130927-30/130928_res.htm',
        o_site: '130927-30',
        map: 'zerkalny_2002'
    },
    {
        id: 'SPB_20130928_1',
        date: '2013-09-28',
        place: 'Гарболово',
        name: 'Золотые кольца',
        reg: 'http://o-reg.spb.ru/',
        res: 'https://o-site.spb.ru/_races/130928_ZK/130928_res.htm',
        fmt: 'Эстафеты по выбору',
        start: 'WEDDING',
        o_site: '130928_ZK'
    },
    {
        id: 'SPB_20130928_2',
        date: '2013-09-28',
        place: 'Мюллюпельто',
        name: 'BikeAdventure',
        type: ['ROGAINE', 'VELO'],
        link: 'https://vk.com/bikeadventure',
        res: 'https://www.bikeadventure.ru/arhiv/arhiv-2013-2.php',
        map: 'mullupelto_ba_2013',
        start: 'BA',
        owner: 'BKTV'
    },
    {
        id: 'SPB_20130929_1',
        date: '2013-09-29',
        name: 'Марафон на холмах Яппиля',
        place: 'Яппиля',
        reg: 'http://o-reg.spb.ru',
        res: 'https://o-site.spb.ru/_races/130929/130929_res.htm',
        o_site: '130929'
    },
    {
        id: 'SPB_20131003_1',
        date: '2013-10-03',
        name: 'Кузьмоловские старты, 5 этап',
        start: 'KUZMOLOVSKY_STARTS',
        res: 'http://www.o-site.spb.ru/_races/130905/131003_res.htm',
        o_site: '130905'
    },
    {
        id: 'SPB_20131005_1',
        date: '2013-10-05',
        place: 'Осиновая Роща',
        name: 'Чемпионат и Первенство СПб по вело-О, спринт',
        start: 'SPB_CHAMP',
        type: 'VELO',
        res: 'https://o-site.spb.ru/_races/131005/131005_mtbo_res.pdf',
        o_site: '131005',
        map: 'osinovaja_roscha_velo_2020'
    },
    {
        id: 'SPB_20131006_1',
        date: '2013-10-06',
        place: 'Воронцово (Симагино)',
        name: 'Классика Белых Ночей',
        reg: 'http://o-reg.spb.ru/',
        res: 'https://o-site.spb.ru/_races/131006/131006_res.htm',
        info: '4-е по счёту традиционные соревнования, проводимые клубом "Белые Ночи" при спонсорской поддержке генерального партнёра trikolor.tv',
        owner: 'WN',
        o_site: '131006'
    },
    {
        id: 'SPB_20131010_1',
        date: '2013-10-10',
        name: 'Кузьмоловские старты, 6 этап',
        start: 'KUZMOLOVSKY_STARTS',
        res: 'http://www.o-site.spb.ru/_races/130905/131010_res.htm',
        o_site: '130905'
    },
    {
        id: 'SPB_20131011_1',
        date: '2013-10-11',
        place: 'Токсово, оз Светлое',
        name: 'Старт памяти одноклубника Коли Иванова',
        res: 'https://o-site.spb.ru/_races/131011_k/20131011_split.htm',
        o_site: '131011_k'
    },
    {
        id: 'SPB_20131012_1',
        date: '2013-10-12',
        place: 'Сосново',
        name: 'Ночные соревнования памяти А.Окинчица',
        res: 'https://o-site.spb.ru/_races/131012/131013_res.htm',
        start: 'OKINCHITSA',
        o_site: '131012'
    },
    {
        id: 'SPB_20131012_2',
        date: '2013-10-12',
        place: 'Кавалергардская ул',
        name: 'Sprint Tour SPb 2013, 14 этап',
        start: 'SPRINT_TOUR',
        map: 'kavalergardskaya_2012',
        o_site: '130904'
    },
    {
        id: 'SPB_20131016_1',
        date: '2013-10-16',
        name: 'Mass-Sprint',
        place: 'Выборгское ш, 5',
        reg: 'http://o-reg.spb.ru/',
        res: 'https://o-site.spb.ru/_races/131016/20131016-rez.htm',
        o_site: '131016'
    },
    {
        id: 'SPB_20131019_1',
        date: '2013-10-19',
        place: 'Молодёжное',
        map: 'molodezhnoe_gk_2024',
        name: 'Горный Кросс-38',
        type: 'ROGAINE',
        res: 'https://o-site.spb.ru/_races/131019/131019gk_res.zip',
        fmt: '3 и 6 часов бегом и вело',
        start: 'GORNY_CROSS',
        o_site: '131019'
    },
    {
        id: 'SPB_20131019_2',
        date: '2013-10-19',
        place: 'Выборг',
        name: 'Золотая Осень им. Б.В.Фролова',
        reg: 'http://o-reg.spb.ru/',
        res: 'https://o-site.spb.ru/_races/131019_ZO/131019_res.htm',
        fmt: 'спринт - раздельный старт',
        owner: 'VYBORG',
        o_site: '131019_ZO'
    },
    {
        id: 'SPB_20131020_1',
        date: '2013-10-20',
        place: 'Цвелодубово',
        name: 'Закрытие летнего сезона Вело-О',
        type: 'VELO',
        res: 'http://velopiter.spb.ru/cls2013/mtbo-fin.htm',
        o_site: '131020_MTB'
    },
    {
        id: 'SPB_20131020_2',
        date: '2013-10-20',
        place: 'Выборг, Кировские Дачи',
        name: 'Финальный этап Кубка СПб и ЛО',
        reg: 'http://www.o-reg.spb.ru/',
        res: 'https://o-site.spb.ru/_races/131020/131020_res.pdf',
        o_site: '131020'
    },
    {
        id: 'SPB_20131023_1',
        date: '2013-10-23',
        place: 'Пискарёвский парк',
        name: 'П-во Калининского р-она',
        video: 'https://www.youtube.com/watch?v=tux3JClNVTY',
        map: 'piskarevsky_2012'
    },
    {
        id: 'SPB_20131026_1',
        date: '2013-10-26',
        place: 'Карельский перешеек + стратосфера',
        name: 'Random Race',
        reg: 'http://randomrace.ru/2013/fall/registration/',
        info: 'Все болельщики, наблюдатели и просто интересующиеся также могут наблюдать за происходящим в онлайн режиме (в субботу 26-го октября с 10:00 до 21:00): ссылка: gp-track.ru логин: RandomRace-guest пароль: guest',
        o_site: '131026_RR'
    },
    {
        id: 'SPB_20131026_2',
        date: '2013-10-26',
        place: 'Воейково',
        name: 'Петербургская осень - Открытое первенство КСО Азимут',
        reg: 'http://o-reg.spb.ru',
        res: 'https://o-site.spb.ru/_races/131026_Az/131026_res.htm',
        owner: 'AZIMUT',
        logo: 'azimut.gif',
        o_site: '131026_Az'
    },
    {
        id: 'SPB_20131027_1',
        date: '2013-10-27',
        name: 'Кубок Яркого Мира. Финал',
        place: 'Первомайское',
        res: 'http://www.o-site.spb.ru/_races/2013CupYM/131027_split.htm',
        start: 'YM_CUP',
        o_site: '2013CupYM'
    },
    {
        id: 'SPB_20131104_1',
        date: '2013-11-04',
        place: 'Лемболово',
        name: 'Осенний марафон',
        res: 'https://o-site.spb.ru/_races/131104_Az/131104_res_.htm',
        info: 'Традиционные праздничные осенние соревнования на удлинённой дистанции, проводимые КСО Азимут',
        logo: 'azimut.gif',
        o_site: '131104_Az',
        map: 'lembolovo_2002',
        owner: 'AZIMUT'
    },
    {
        id: 'SPB_20131113_1',
        date: '2013-11-13',
        place: 'шк №110, Сиреневый бульвар, 8/2',
        name: 'Спортивное ориентирование - в школу, Выборгский район',
        res: 'https://o-site.spb.ru/_races/131030/131030_results.zip',
        info: 'Праздник организуется с целью популяризации спортивного ориентирования среди учащихся образовательных учреждений Выборгского района Санкт-Петербурга. В программе спортивного праздника три вида соревнований: - дистанция личная «Ориентирование на пришкольной территории». - дистанция личная «Ориентирование в лабиринте»; - дистанция командная (два человека) «Фото-ориентирование». Соревнования открытые!',
        video: 'http://vimeo.com/79819214',
        owner: 'VYBORG',
        o_site: '131030'
    },
    {
        id: 'SPB_20131117_1',
        date: '2013-11-17',
        place: 'Кузьмолово',
        name: 'Маркир 110%',
        reg: 'http://o-reg.spb.ru/',
        res: 'https://o-site.spb.ru/_races/131117/131117_res.htm',
        start: 'ROGAINE_110',
        o_site: '131117'
    },
    {
        id: 'SPB_20131120_1',
        date: '2013-11-20',
        place: 'Выборгский р-н',
        name: 'Sprint Tour SPb 2013, 15 этап',
        start: 'SPRINT_TOUR',
        res: 'https://o-site.spb.ru/_races/130904/131120_split.htm',
        o_site: '130904'
    },
    {
        id: 'SPB_20131123_1',
        date: '2013-11-23',
        place: 'Эколого-биологический центр, Крестовский пр, 19',
        name: 'Вечер встречи ориентировщиков',
        info: 'Традиционный вечер встречи по итогам летнего сезона 2013. Организатор: Федерация спортивного ориентирования Санкт-Петербурга Проходит при поддержке: РедФокс Экипировочного центра «ОХТА» Сети магазинов Спортивная Линия Сети магазинов Яркий Мир Санкт-Петербургского городского Дворца творчества юных В программе: Чествование ветеранов, номинированных ФСО России по случаю 50-летия отечественного ориентирования Награждение за летний Чемпионат СПб (эстафета и марафон) и летнее Первенство СПб 2013 (детские группы - спринт, эстафета, лонг; ветеранские группы - все виды), Награждение лучших тренеров грамотами Комитета по Физкультуре и Спорту Санкт-Петербурга, Награждение по итогам летнего Кубка СПб и ЛО в личном и клубном зачётах. Начало вечера: в 17:00 Все пришедшие на вечер, смогут принять участие в лотерее, в которой будут разыграны ценные призы от Экипировочного центра «ОХТА». Внимание! С собой необходимо иметь сменную обувь или бахилы!',
        o_site: '131123'
    },
    {
        id: 'SPB_20131124_1',
        date: '2013-11-24',
        name: 'Всеволожская тропа',
        start: 'VSEVOLOZHSK_WAY',
        res: 'http://o-site.spb.ru/_races/131208_tr/131124_split.htm',
        o_site: '131208_tr'
    },
    {
        id: 'SPB_20131124_2',
        date: '2013-11-24',
        name: 'Ориентир-НатАлка',
        res: 'http://o-site.spb.ru/_races/130331_OR/131124_split.htm',
        start: 'ORIENTIR',
        o_site: '130331_OR'
    },
    {
        id: 'SPB_20131130_1',
        date: '2013-11-30',
        place: 'Зеленогорск',
        map: 'zelenogorsk_gk_2009',
        name: 'Горный кросс-39',
        type: 'ROGAINE',
        res: 'https://o-site.spb.ru/_races/131130_GK/131130_res-1.zip',
        info: 'Классический рогейн 8 и 3 часа - бег и вело (по погоде)',
        start: 'GORNY_CROSS',
        o_site: '131130_GK'
    },
    {
        id: 'SPB_20131201_1',
        date: '2013-12-01',
        name: 'Снежная тропа, 1 этап',
        start: 'SNOW_WAY',
        place: 'Александрино',
        res: 'https://o-site.spb.ru/_races/131201/131201_res1.pdf',
        info: 'Соревнования проводятся 01 декабря 2013 года на территории парка «Александрино» и примыкающего жилого квартала Кировского района Санкт-Петербурга.',
        o_site: '131201'
    },
    {
        id: 'SPB_20131208_1',
        date: '2013-12-08',
        place: 'им Морозова',
        name: 'Всеволожская тропа',
        start: 'VSEVOLOZHSK_WAY',
        reg: 'http://o-reg.spb.ru/',
        res: 'https://o-site.spb.ru/_races/131208_tr/131208_split.htm',
        o_site: '131208_tr'
    },
    {
        id: 'SPB_20131208_2',
        date: '2013-12-08',
        name: 'Народный Рогейн',
        place: 'Токсово, Малиновая гора',
        type: 'ROGAINE',
        link: 'https://ar-info.ru/calendar_race.php?id_race=1408',
        reg: 'http://rogaining.spb.ru/index.php?option=com_wrapper&view=wrapper&Itemid=361',
        res: 'http://o-time.ru/images/all/w13/rgn081213.htm',
        video: 'http://vimeo.com/81625359',
        info: 'Основной тезис мероприятия: "Рогейн доступный каждому!" Формат 1,5 часа, при этом более 40 контрольных пунктов, сухой парковый лес и спортивная карта 1:10000, а также невысокий стартовый взнос и горячий чай с лимоном на финише!',
        o_site: '131208',
        map: 'toksovo_malinovaya_gora_2013'
    },
    {
        id: 'SPB_20131215_1',
        date: '2013-12-15',
        name: 'Рогейн-42',
        type: 'ROGAINE',
        res: 'https://o-site.spb.ru/_races/131215R/131215_res_.xls',
        o_site: '131215R'
    },
    {
        id: 'SPB_20131222_1',
        date: '2013-12-22',
        place: 'Всеволожск, Румболовский парк',
        name: 'Приз Деда Мороза',
        reg: 'http://www.o-reg.spb.ru/',
        res: 'https://o-site.spb.ru/_races/131222wn/131222_res.htm',
        o_site: '131222wn',
        map: 'vsevolozhsk_rumbolovo_2014'
    },
    {
        id: 'SPB_20131228_1',
        date: '2013-12-28',
        place: 'Кавголово',
        name: 'Новогодний рогейн',
        type: 'ROGAINE',
        reg: 'http://rogaining.spb.ru/index.php?option=com_wrapper&view=wrapper&Itemid=375',
        res: 'http://o-time.ru/images/all/w13/rgn281213.htm',
        video: 'https://www.youtube.com/watch?v=vbJUaW_ZpAc',
        fmt: 'Рогейн 1 час',
        o_site: '131228R'
    },
    {
        id: 'SPB_20131229_1',
        date: '2013-12-29',
        place: 'Комарово',
        name: 'Ориентир Заключительный',
        reg: 'http://www.o-reg.spb.ru',
        res: 'http://o-site.spb.ru/_races/130331_OR/131229_split.htm',
        start: 'ORIENTIR',
        o_site: '130331_OR'
    }
];
