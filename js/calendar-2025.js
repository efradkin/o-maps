let events_2025 =
[
/*
    {
        name: '',
        start: '', // серия стартов
        date: '1.01.2025',
        endDate: '3.01.2025',
        place: '', // location
        map: '', // o-maps key
        //where: '', // как добраться url
        link: '', // url(s)
        reg: '', // registration link(s)
        res: '', // results link(s)
        gps: '', // GPS-translation link(s)
        type: 'ORIENT', // SKI, ROGAINE, MULTI, TOURISM
        fmt: '', // format
        any: '', // any comments
    },
*/
    {
        date: '2025-01-11',
        place: 'Лемболово',
        name: 'Зимний рогейн (КЛО)',
        fmt:  '4',
        type: ['ROGAINE','SKI'],
        link: 'https://www.multsport.ru/starts/winter-rogaine-25/',
        res: 'https://multsport.ru/starts/winter-rogaine-25/results.html',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/21398/'
    }, {
        date: '2025-02-15',
        place: 'Луга, оз. Штоль',
        name: 'Лужский лыжный рогейн',
        fmt: '3 / 6',
        type: ['ROGAINE','SKI'],
        link: 'https://vk.com/event166397868',
        reg: 'https://orgeo.ru/event/info/40338',
        res: 'https://vk.com/wall-166397868_4743',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/21680/'
    }, {
        date: '2025-02-22',
        place: 'Орехово',
        name: 'Горный кросс',
        fmt: '2 / 5',
        type: 'ROGAINE',
        link: 'https://vk.com/club31941981 ',
        reg: 'https://orgeo.ru/event/39842',
        res: 'https://o-site.spb.ru/_races/250222R/250222R_res.pdf',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/21691/'
    }, {
        date: '2025-03-08',
        place: 'Вуокса',
        name: 'Ice Trail (КЛО)',
        fmt: '3 / 6',
        type: 'ROGAINE',
        link: 'https://www.multsport.ru/starts/ice-trail-2025/',
        reg: 'https://www.multsport.ru/starts/ice-trail-2025/registration.html',
        res: 'https://multsport.ru/starts/ice-trail-2025/results.html',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/21771/'
    }, {
        date: '2025-04-19',
        place: 'Луга, ген.Омельченко',
        name: 'Лужский меридиан',
        fmt:  '4',
        type: 'ROGAINE',
        link: 'https://vk.com/club91656163',
        reg: 'https://orgeo.ru/event/41453',
        res: 'https://vk.com/wall-91656163_2545',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/22283/'
    }, {
        date: '2025-04-26',
        place: 'Луга, оз. Омчино',
        name: 'Short Rogain Cup /1 этап (КЛО)',
        fmt:  '4',
        type: 'ROGAINE',
        link: 'https://vk.com/event166397868',
        reg: 'https://orgeo.ru/event/40461',
        res: 'https://vk.com/wall-166397868_4810',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/22375/'
    }, {
        date: '2025-05-02',
        place: 'Луга',
        name: 'Горный кросс',
        fmt: '2 / 4',
        type: 'ROGAINE',
        link: 'https://vk.com/club31941981 ',
        reg: 'https://orgeo.ru/event/39844',
        res: 'https://o-site.spb.ru/_races/250502R/250502R_res.pdf',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/22439/'
    }, {
        date: '2025-05-11',
        place: 'Луга, ст. Луга-2',
        name: 'Лужский меридиан',
        type: 'ROGAINE',
        link: 'https://vk.com/club91656163',
        reg: 'https://orgeo.ru/event/info/43129',
        res: 'https://vk.com/wall-91656163_2573',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/22558/'
    }, {
        date: '2025-05-24',
        place: 'Бородинское',
        name: 'Весенний марш-бросок',
        type: 'TOURISM',
        link: ['https://t.me/pmarshbrosok','https://vk.com/mbrosok'],
        reg: 'https://orgeo.ru/event/40845',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/22700/'
    }, {
        date: '2025-05-31',
        place: 'ст. Куолемаярви',
        name: 'BikeAdventure',
        fmt: '6 / 24',
        type: 'ROGAINE',
        link: 'https://vk.com/bikeadventure',
        reg: 'https://orgeo.ru/event/info/40559',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/22755/'
    }, {
        date: '2025-05-31',
        place: 'Кузнечное',
        name: 'Горный кросс',
        fmt: '3 / 8 / 24',
        type: 'ROGAINE',
        link: 'https://vk.com/club31941981',
        reg: 'https://orgeo.ru/event/39845',
        res: 'https://o-site.spb.ru/_races/250531R/250531R_res.pdf',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/22757/'
    }, {
        date: '2025-06-08',
        place: 'Сосново',
        name: 'Рогейн 110%',
        fmt:  '3',
        type: 'ROGAINE',
        link: 'https://vk.com/rogaine110  ',
        reg: 'https://orgeo.ru/event/44176',
        res: 'https://vk.com/rogaine110?w=wall-197270357_1119',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/22822/'
    }, {
        date: '2025-06-13',
        place: 'Гвардейское',
        name: 'RED FOX ADVENTURE RACE',
        fmt: '12, 24, 48',
        type: 'MULTI',
        link: 'https://adventure-race.redfox.ru/docs/rules/',
        reg: 'https://adventure-race.redfox.ru/applications/',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/22778/'
    }, {
        date: '2025-07-05',
        place: 'Орехово',
        name: 'Горный кросс',
        fmt: '3, 6',
        type: 'ROGAINE',
        link: 'https://vk.com/club31941981',
        reg: 'https://orgeo.ru/event/39846',
        res: 'https://o-site.spb.ru/_races/250705R/250705R_res.pdf'
    }, {
        date: '2025-07-06',
        place: 'Мичуринское',
        name: 'Мичуринский рогейн',
        fmt: '4, 8',
        type: 'ROGAINE',
        link: 'https://o-site.spb.ru/race.php?id=2025_michura_rog',
        reg: 'https://orgeo.ru/event/info/michura_rog_2025',
        res: 'https://o-site.spb.ru/_races/250705_bn/250706_res.htm',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/23067/'
    }, {
        date: '2025-07-20',
        place: 'Вартемяги/Юкки',
        name: 'Рогейн 110 (КЛО)',
        fmt:  '3',
        type: 'ROGAINE',
        link: 'https://vk.com/rogaine110  ',
        reg: 'https://orgeo.ru/event/44984',
        res: 'https://vk.com/wall-197270357_1137',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/23127/'
    }, {
        date: '2025-07-26',
        place: 'Луга, оз. Раковическое',
        name: '6-й Лужский приключенческий рогейн:  перезагрузка',
        fmt: '6, 16',
        type: 'ROGAINE',
        link: 'https://vk.com/event166397868',
        reg: 'https://orgeo.ru/event/info/40554',
        res: 'https://vk.com/wall-166397868_4941',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/23164/'
    }, {
        date: '2025-08-09',
        place: 'Луга, оз. Штоль',
        name: 'Short Rogain Cup /3 этап',
        fmt:  '4',
        type: 'ROGAINE',
        link: ['https://vk.com/event166397868','https://t.me/lugarogein'],
        reg: 'https://orgeo.ru/event/40548',
        res: 'https://t.me/lugarogein/133',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/23201/'
    }, {
        date: '2025-08-09',
        place: 'Лемболово',
        name: 'Исторический рогейн «По следам истории»',
        fmt: 'выбор',
        type: 'ORIENT',
        link: 'https://o-site.spb.ru/race.php?id=250809_history',
        reg: 'https://orgeo.ru/event/info/44975'
    }, {
        date: '2025-08-16',
        place: 'Яппиля',
        name: 'HARD ROGAINE | SWAMP',
        fmt:  4,
        type: 'ROGAINE',
        link: 'https://hardadventure.ru/swamp2025',
        reg: 'https://reg.o-time.ru/race/25450',
        res: 'https://hardrogaine.ru/2025/HR_Swamp_results.htm',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/23251/'
    }, {
        date: '2025-08-30',
        place: 'Сарженское озеро',
        name: 'Рогейн на Сарженском озере (КЛО)',
        fmt:  '4',
        type: 'ROGAINE',
        link: 'https://www.multsport.ru/starts/klo-sar-25/',
        reg: 'https://www.multsport.ru/starts/klo-sar-25/registration.html'
    }, {
        date: '2025-09-13',
        place: 'Калищенское оз',
        name: 'ЧиП Соснового Бора',
        type: 'ORIENT',
        link: 'https://vk.com/wall-201330282_1914'
    }, {
        date: '2025-09-13',
        place: 'Луга, Крупели',
        name: 'Лужский меридиан',
        fmt: '2.5, 5',
        type: 'ROGAINE',
        link: 'https://vk.com/club91656163',
        reg: 'https://orgeo.ru/event/info/45324'
    }, {
        date: '2025-09-14',
        place: 'Колпино',
        name: 'Кубок Колпино',
        fmt: 'спринт',
        type: 'ORIENT',
        link: 'https://o-site.spb.ru/race.php?id=250914_kolp',
        reg: 'https://orgeo.ru/event/45523'
    }, {
        date: '2025-09-14',
        place: 'Пасторское оз',
        name: 'ЧиП СПб',
        fmt: 'лонг',
        type: 'ORIENT',
        link: 'https://o-site.spb.ru/race.php?id=250914_ch',
        reg: 'https://o-reg.spb.ru/?filter[day_id]=1695',
        gps: {
            'МЭ': 'https://viewer.o-gps-center.ru/viewer/event/23398/',
            'М50/Ж35': 'https://viewer.o-gps-center.ru/viewer/event/23395/',
            'Все КП': 'https://viewer.o-gps-center.ru/viewer/event/23388/'
        }
    }, {
        date: '2025-09-18',
        place: 'Токсово, Светлое оз',
        name: 'КОНТРОЛЬНЫЙ СТАРТ',
        type: 'ORIENT',
        link: 'https://o-site.spb.ru/race.php?id=25_KS_a',
        reg: 'https://orgeo.ru/event/46308'
    }, {
        date: '2025-09-19',
        place: 'Полюстровский парк',
        name: 'Золотая осень',
        fmt: 'спринт',
        type: 'ORIENT',
        link: 'https://o-site.spb.ru/race.php?id=250919_zo',
        reg: 'https://orgeo.ru/event/45724'
    }, {
        date: '2025-09-20',
        place: 'Молодежное',
        name: 'Горный кросс',
        fmt: '2, 5',
        type: 'ROGAINE',
        link: 'https://vk.com/club31941981',
        reg: 'https://orgeo.ru/event/39879'
    }, {
        date: '2025-09-20',
        place: 'Лемболово',
        name: 'Лемболовский Мемориал',
        fmt: 'ночное',
        type: 'ORIENT',
        link: 'https://spb-orient.ru/lemb/2025/lemb.html',
        reg: 'https://reg.spb-orient.ru/'
    }, {
        date: '2025-09-20',
        place: 'Ждановское оз',
        name: 'Золотые кольца',
        fmt: 'семейная эстафета',
        type: 'ORIENT',
        link: 'https://o-site.spb.ru/race.php?id=250920',
        reg: 'https://orgeo.ru/event/info/46223'
    }, {
        date: '2025-09-20',
        place: 'Приозерский р-он',
        name: 'Велоизоляция',
        fmt: '4, 8',
        type: 'ROGAINE',
        link: 'https://www.multsport.ru/starts/veloizol25/',
        reg: 'https://www.multsport.ru/starts/veloizol25/registration.html'
    }, {
        date: '2025-09-20',
        place: 'Журавлевское оз',
        name: 'Гран-при Владимира Алексеева',
        type: 'ORIENT',
        link: 'https://o-site.spb.ru/race.php?id=250921',
        reg: 'https://orgeo.ru/event/alekseeva2025'
    }, {
        date: '2025-09-24',
        place: 'Пионерская',
        name: 'СПРИНТ ТУР',
        fmt: 'спринт',
        type: 'ORIENT',
        link: 'https://vk.com/sprinttourspb'
    }, {
        date: '2025-09-26',
        place: 'Зеркальный',
        name: 'Старты в Зеркальном',
        type: 'ORIENT',
        link: 'https://o-site.spb.ru/race.php?id=250927_Zerk'
    }, {
        date: '2025-09-27',
        place: 'Юкки',
        name: 'Памяти Димы Фатидинова',
        type: 'ORIENT',
        link: 'https://o-site.spb.ru/race.php?id=250927',
        reg: 'https://orgeo.ru/event/45984'
    }, {
        date: '2025-09-27',
        place: 'Луга, оз. Толони',
        name: 'Short Rogain Cup /4 этап',
        fmt:  '4',
        type: 'ROGAINE',
        link:  ['https://vk.com/event166397868','https://t.me/lugarogein'],
        reg: 'https://orgeo.ru/event/40549'
    }, {
        date: '2025-09-28',
        place: 'Зеркальный',
        name: 'Марафон на холмах Яппиля',
        fmt: 'лонг',
        type: 'ORIENT',
        link: 'https://o-site.spb.ru/race.php?id=250928_MY',
        reg: 'o-reg.spb.ru/?filter[day_id]=1696'
    }, {
        date: '2025-10-04',
        place: 'Лемболово',
        name: 'Мемориал Окинчица',
        fmt: 'ночное',
        type: 'ORIENT',
        link: 'https://touristclub.ru/okinchits/',
        reg: 'https://orgeo.ru/event/45800'
    }, {
        date: '2025-10-04',
        place: 'Зеленогорск',
        name: 'Невский спринт',
        fmt: 'многодневка, спринт',
        type: 'ORIENT',
        link: 'https://o-site.spb.ru/race.php?id=251007_NS',
        reg: 'https://orgeo.ru/event/info/45533'
    }, {
        date: '2025-10-11',
        place: 'Полюстровский парк',
        name: 'Легенда осени',
        type: 'ORIENT',
        link: 'https://o-site.spb.ru/race.php?id=251011',
        reg: 'https://orgeo.ru/event/info/legendaoseni25'
    }, {
        date: '2025-10-11',
        place: 'оз Силанде',
        name: '50 Вёрст',
        fmt: 'ночная эстафета',
        type: 'ORIENT',
        link: 'https://o-site.spb.ru/race.php?id=251011_50',
        reg: 'https://sportident.online/entry/?id=6732'
    }, {
        date: '2025-10-11',
        place: 'Моторное',
        name: 'BikeAdventure',
        fmt:  '6',
        type: 'ROGAINE',
        link: ' vk.com/bikeadventure',
        reg: 'https://orgeo.ru/event/44940'
    }, {
        date: '2025-10-18',
        place: 'Выборг',
        name: 'Золотая осень',
        type: 'ORIENT',
        link: 'https://o-site.spb.ru/race.php?id=251019_ZO'
    }, {
        date: '2025-10-18',
        place: 'Запад ЛО у залива',
        name: 'Осенний марш-бросок',
        type: 'TOURISM', // марш-бросок
        link:  ['https://t.me/pmarshbrosok','https://vk.com/mbrosok'],
        reg: 'https://orgeo.ru/event/44894'
    }, {
        date: '2025-10-19',
        place: 'Суоранда',
        name: 'Рогейн на "Голубой даче" (финал КЛО)',
        fmt:  '4',
        type: 'ROGAINE',
        link: 'https://vk.com/rogainingspb'
    }, {
        date: '2025-11-15',
        name: 'Рогейн на Лужских берегах',
        fmt: '3, 6',
        type: 'ROGAINE',
        link:  ['https://vk.com/event166397868','https://t.me/lugarogein']
    }, {
        date: '2025-11-29',
        place: 'Великий Новгород',
        name: 'Исторический рогейн (ЛМ)',
        fmt: '2.5, 4',
        type: 'ROGAINE',
        link: 'https://vk.com/club91656163',
        reg: 'https://orgeo.ru/event/info/44912'
    }
];