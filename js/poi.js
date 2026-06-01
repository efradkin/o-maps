let poi = [
    /* --- СОРЕВЫ --- */
    {
        coord: [61.064512, 29.133659],
        name: 'Камни Карельского Перешейка',
        image: './logo/kkp_poi.webp',
        date: '2026-06-16',
        endDate: '2026-06-20',
        place: 'Пруды',
        o_site: '260616-21_KKP',
        link: 'https://o-nw.ru/kkp',
        reg: 'https://sportident.online/entry/?id=6855',
        map: 'kkp_prudy_2019_06_19',
        type: 'ORIENT',
        start: 'KKP'
    },
    {
        coord: [60.483493, 30.422925],
        name: 'Мемориал Михаила Святкина XXXII',
        image: './logo/mms.jpg',
        iconSize: [57, 70],
        date: '2026-06-26',
        endDate: '2026-06-28',
        place: 'Пески',
        o_site: 'mms2026',
        reg: 'https://orgeo.ru/event/51560',
        link: 'https://sfr-system.ru/mms/',
        info: 'Новые карты.',
        fmt: 'классика, многодневный (лонг)',
        type: 'ORIENT',
        map: 'peski_2026',
        start: 'MMS'
    },
    {
        coord: [60.595748, 30.217929],
        name: 'Белые Ночи',
        image: './logo/wn.gif',
        iconSize: [57, 70],
        date: '2026-07-04',
        endDate: '2026-07-06',
        place: 'Сосново, оз Уловное',
        o_site: '260702_bn',
        info: '29.06-01.07 - тренировочный полигон в соседнем районе.',
        fmt: 'спринт, лонг, классика',
        type: 'ORIENT',
        owner: 'WN',
        map: 'sosnovo_ulovnoe_oz_2023'
    },

    /* --- КЛУБЫ --- */
    {
        coord: [59.898164, 30.424654],
        name: '31 КП',
        iconSize: [75, 75],
        place: 'пр Елизарова, 7А',
        link: 'https://vk.com/controlpoint31',
        logo: 'kp31.gif',
        info: 'Спортивно-туристский клуб учащихся и выпускников с нарушением слуха. Ученики, выпускники, родители, учителя и воспитатели школ-интернатов №1, №31, №33, №9, Юкковского и Сясьстройского интернатов и все любители спорта, туризма и приключений собираются у нас!',
        type: 'CLUB'
    },
    {
        coord: [59.712944, 30.418636],
        name: 'FOREST Team',
        iconSize: [75, 75],
        place: 'Пушкин, Софийский бульвар, 3Б',
        link: 'https://vk.com/ocforestteam',
        logo: 'forest_pushkin.webp',
        info: 'Спортивное ориентирование в Пушкине (СПб).',
        type: 'CLUB'
    },
    {
        coord: [59.984328, 30.415792],
        name: 'NordWest',
        iconSize: [75, 75],
        place: 'Кондратьевский пр, 64-4-а',
        link: 'https://o-nw.ru/',
        reg: 'https://vk.com/nordwestmedia',
        logo: 'nordwest.webp',
        info: 'Клуб спортивного ориентирования NordWest - один из сильнейших клубов Санкт-Петербурга и России.',
        type: 'CLUB'
    },
    {
        coord: [60.051690, 30.351596],
        name: 'АврорА',
        iconSize: [75, 75],
        place: 'пр Просвещения, 46 к4',
        reg: 'https://vk.com/@orient_spb_lo-avrora-klub-s-formoi-napominauschei-lisu',
        logo: 'o-maps.webp',
        info: 'Клуб появился в феврале 2011 года под руководством тренера Райковой Светланы Александровны.',
        type: 'CLUB'
    },
    {
        coord: [59.850414145817616, 30.351909399032596],
        name: 'ЦФК АВС Московского района',
        iconSize: [75, 50],
        place: 'пр. Космонавтов, д.47',
        link: 'https://vk.com/abc_official',
        reg: 'https://vk.com/@orient_spb_lo-avs-klub-s-samym-korotkim-nazvaniem-iz-moskovskogo-raiona',
        logo: 'abc.webp',
        info: 'Отделение "Спортивное ориентирование" в <a href="https://www.cfk-mosk.ru/catalog/110/120">ГБУ ДЮЦ «ЦФКСиЗ»</a> Московского района Санкт-Петербурга было открыто в 2002 году. <br />' +
            'По всем вопросам обращаться в отдел по учебно-спортивной работе т. (812) 378-25-11 в рабочие дни с 9.30 до 18.00, обед с 13:00 до 13:30.',
        couches: ['Брусова Ольга Владимировна','Грошева Елена Николаевна','Кижло Сергей Петрович','Фомина Светлана Андреевна'],
        type: 'CLUB'
    },
    {
        coord: [59.91900024244188, 30.35955905914307],
        name: 'СШОР Балтийский берег',
        iconSize: [75, 75],
        link: 'https://www.balticbereg.ru/vidy-sporta/sportivnoe-orientirovanie',
        place: 'ул. Черняховского, 49А',
        logo: 'baltbereg.webp',
        info: 'Учебно-тренировочный процесс по спортивному ориентированию проходит на базе образовательных учреждений, в лесо-парковых и парковых зонах Санкт-Петербурга, на базе Кавголово НГУ им. П.Ф. Лесгафта и в манеже им. В.И.Алексеева. ' +
            '<br />Контактный телефон: (812) 308-21-77.',
        couches: [
            'Баркалова Александра Петровна',
            'Белявцева Екатерина Владимировна',
            'Ельцова Ольга Борисовна',
            'Жуков Андрей Владимирович',
            'Кононов Иван Иванович',
            'Пьянков Даниил Сергеевич',
            'Райкова Светлана Александровна',
            'Суворкина Татьяна Павловна',
            'Сугак Яна Андреевна',
            'Трапезникова Алена Алексеевна',
            'Федоров Алексей Леонидович',
            'Фершалова Виктория Савельевна',
        ],
        type: 'CLUB'
    },
    {
        coord: [60.034137, 30.326621],
        name: 'Белые Ночи',
        iconSize: [75, 75],
        place: 'Сикейроса, 7',
        link: 'https://w-nights.narod.ru/',
        reg: ['https://vk.com/white_nights_club_spb','https://t.me/whitenightesspb'],
        logo: 'wn_club.webp',
        info: 'Клуб спортивного ориентирования «Белые Ночи» объединяет спортсменов из нескольких известных в прошлом спортивных клубов: ' +
            '«Кировец», «Волна», «Экран», а также тренеров спортивных школ Сестрорецка и Кузьмолова вместе с их воспитанниками.',
        type: 'CLUB'
    },
    {
        coord: [61.0383630024712, 30.124940872192386],
        name: 'Веста-Приозерск',
        iconSize: [75, 75],
        place: 'Приозерск',
        link: 'https://vk.com/vesta_priozersk',
        reg: 'https://vk.com/@orient_spb_lo-vesta-klub-obedinyauschii-dva-regiona',
        logo: 'vesta_przrsk.gif',
        info: 'Клуб спортивного ориентирования на базе МОУДО Центр детского творчества. Кто и как может вступить, написано <a href="https://vk.ru/topic-30365190_35847745">тут</a>.',
        couches: ['Скворцова Ирина Борисовна'],
        type: 'CLUB'
    },
    {
        coord: [59.97180871857853, 30.241842269897464],
        name: 'Гольфстрим',
        iconSize: [75, 75],
        place: 'Невский просп., 39',
        link: 'https://gs-oc.spb.ru',
        logo: 'golfstream.webp',
        info: 'Клуб из СДЮСШОР №2 Городского Дворца Творчества Юных.',
        type: 'CLUB'
    },
    {
        coord: [60.034468, 30.350307],
        name: 'Дельта',
        iconSize: [75, 75],
        place: 'Сантьяго-де-Куба, 4, корп. 2',
        link: 'https://vk.com/clubspborient',
        reg: 'https://vk.com/@orient_spb_lo-kso-delta-klub-iz-vyborgskogo-raiona-sankt-peterburga',
        logo: 'delta.webp',
        info: 'Клуб спортивного ориентирования на базе ГБУ ДО ДДЮТ Выборгского р-на.',
        type: 'CLUB'
    },
    {
        coord: [60.024626, 30.645873],
        name: 'Ингрия',
        iconSize: [75, 85],
        place: 'Всеволожск',
        link: 'https://vk.com/ingriaorient',
        logo: 'ingria.gif',
        info: 'Клуб спортивного ориентирования на базе <a href="https://vcfks.vsevobr.ru/">Всеволожского центра физ.культуры и спорта</a>.',
        type: 'CLUB'
    },
    {
        coord: [59.568410, 30.122892],
        name: 'КТТИБ',
        iconSize: [75, 85],
        place: 'Гатчина',
        link: 'https://vk.com/kttib',
        reg: ['https://t.me/kttib','https://vk.com/@orient_spb_lo-kttib-klub-s-5-letnei-istoriei-osnovannyi-v-gatchine'],
        logo: 'kttib.webp',
        info: 'Как тренируемся - так и бегаем!',
        type: 'CLUB'
    },
    {
        coord: [59.984328, 30.415792],
        name: 'Калинка',
        iconSize: [75, 75],
        place: 'Мечникова, 2',
        link: 'http://kso-kalinka.ru/',
        reg: 'https://vk.com/wall-32675301_1698',
        logo: 'kalinka.webp',
        info: 'Клуб спортивного ориентирования на базе Дома Детского Творчества Калининского р-на.',
        type: 'CLUB'
    },
    {
        coord: [60.107853, 30.492762],
        name: 'Кузомолово',
        iconSize: [75, 75],
        place: 'Кузьмоловский, Спортивная ул., 1А',
        link: 'https://vk.com/kso_org',
        reg: 'https://vk.com/@orient_spb_lo-kuzmolovo-klub-s-krasnym-drakonom-veduschii-svou-istoriu-s-1',
        logo: 'kjp.gif',
        info: 'Межрегиональная общественная организация "Кузьмоловская школа спортивного ориентирования" занимается популяризацией и развитием спортивного ориентирования в Ленинградской области и городе Санкт-Петербург. В том числе начальной и профессиональной подготовкой спортсменов, организацией и проведением спортивных и массовых соревнований, а так же тренировочных мероприятий.',
        type: 'CLUB'
    },
    {
        coord: [59.876414, 29.925891],
        name: 'Петергоф',
        iconSize: [75, 75],
        place: 'Петергоф, Санкт-Петербургский проспект, 4А',
        link: 'https://мойддт.рф/tourist/',
        reg: 'https://vk.com/club232711239',
        logo: 'peterhof_ddt.webp',
        info: 'Если вы хотите отдать своего ребенка в секцию спортивного ориентирования, позвоните по тел. +7(921) 923-58-41.',
        type: 'CLUB'
    },
    {
        coord: [59.932613401369245, 30.339646339416507],
        name: 'Северный ветер',
        iconSize: [75, 75],
        place: 'Невский просп., 39',
        link: 'http://www.northernwind.spb.ru/doc/novice/',
        reg: 'https://vk.com/@orient_spb_lo-severnyi-veter-klub-iz-sdusshor-2-gorodskogo-dvorca-tvorches',
        logo: 'northernwind.webp',
        info: 'Клуб из СДЮСШОР №2 Городского Дворца Творчества Юных.',
        type: 'CLUB'
    },
    {
        coord: [60.143608, 30.217089],
        name: 'Сертолово',
        place: 'Сертолово',
        iconSize: [85, 35],
        link: 'https://vk.com/sertolovo_oteam',
        reg: 'https://vk.com/@orient_spb_lo-kso-sertolovo-nebolshoi-no-druzhnyi-klub-iz-odnoimennogo-gor',
        logo: 'sertolovo.webp',
        info: 'В команде насчитывается порядка 40 человек в возрасте от 7 и до 23 лет, а также в команде еще есть “выпускники” и родители, которые с удовольствием выезжают на сборы и соревнования в другие города!',
        type: 'CLUB'
    },
    {
        coord: [60.055395, 29.979992],
        name: 'Сестрорецк АС',
        iconSize: [75, 75],
        place: 'Сестрорецк, пр Красных Командиров, 9',
        link: 'https://shorkorenkova.kurort.gov.spb.ru/sportivnye-otdelenija/otdelenie-sportivnogo-orientirovanija/',
        reg: 'https://vk.com/sportschool.sestroretsk',
        logo: 'sestroretsk.webp',
        info: 'Государственное бюджетное учреждение дополнительного образования спортивная школа олимпийского резерва имени Владимира Коренькова Курортного района Санкт-Петербурга. Задачей СШОР им.В.Коренькова является обеспечение подготовки спортивных сборных команд Санкт-Петербурга по различным видам спорта,организация и проведение официальных региональных физкультурных,физкультурно-оздоровительных и спортивных мероприятий,подготовка спортивного резерва,пропаганда спорта и здорового образа жизни. 437-38-16',
        type: 'CLUB'
    },
    {
        coord: [59.959191, 30.487463],
        name: 'Феникс',
        iconSize: [75, 75],
        place: 'Отечественная ул., 6',
        link: 'https://sportkrgv.ru/branches/sportivnoe-orientirovanie.html',
        logo: 'feniks.webp',
        info: 'Клуб спортивного ориентирования на базе ГБУ ДО СШОР Красногвардейского р-на.',
        type: 'CLUB'
    },
    {
        coord: [59.896966495000335, 29.07639026641846],
        name: 'Ювента',
        iconSize: [75, 75],
        place: 'Сосновый Бор',
        link: 'https://juventa.edu.sbor.net/',
        reg: 'https://vk.com/@orient_spb_lo-uventa-klub-iz-sosnovogo-bora-goroda-atomschikov',
        logo: 'yuventa.gif',
        info: 'Ювента - это спорт, путешествия, дружба. +7 (81369) 2-74-07',
        type: 'CLUB'
    },

    /* --- ЛЫЖНОЕ --- */
/*
    {
        coord: [60.20848236801371, 29.719047546386722],
        name: 'БО Прибой',
        image: './logo/priboy.webp',
        iconSize: [70, 70],

        place: 'Зеленогорск, пр. Ленина, 59',
        logo: 'priboy.webp',
        info: 'Для любителей активного отдыха и здорового образа жизни 🎿 <br />Тел. 952-74-90, звонить с 9:00 до 18:00.',
    },
*/
];
