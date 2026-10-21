// Чемпионаты International Rogaining Federation (IRF): мира по рогейну WRC (1992–2027) и Европы ERC (2003–2026).
//   Собрано 13–14.10.2026. Записи WRC 2013 (SPB_20130726_1) и ERC 2026 (MAJOR_20260627_1) перенесены сюда
//   из calendar-2013.js и calendar-common.js с прежними id. owner, major и logo заданы в js/starts.js (WRC, ERC).
// Источники: таблицы чемпионатов Федерации рогейна России (rogaining.ru/events/championships/wrc, /erc, /medals),
//   rogaining.org (IRF), официальные сайты чемпионатов (живые или копии web.archive.org), en/et.wikipedia.
// place — латиницей/на языке оригинала, в скобках — по-русски. coord — центр соревнований (hash house) по бюллетеням,
//   где он не указан — центр населённого пункта или района.
// link — официальные сайты, Википедия, отчёты и статьи. res — протоколы и сплиты. maps — файлы карт (изображения, PDF);
//   ссылки на страницы закомментированы. bulletin — активен последний, предыдущие закомментированы.
// gps — пути команд и трансляции (RouteGadget, GPSSeuranta, Sportrec, TrackTheRace, follow.me, Play-map, GPX/KML);
//   ключи — без кириллицы. RouteGadget на rogaining.ru сейчас отдаёт исходный код вместо страницы — такие ссылки закомментированы.
// info — абсолютные победители, число команд и участников, медали российских спортсменов по категориям
//   (M/W/X — мужские/женские/смешанные; O — open, J/Y — юниоры, V — ветераны 40+, SV — 55+, UV — 65+).
// Недоступные ссылки без архивной копии закомментированы с пометкой «недоступна».
// ERC 2022 (Выборгский р-н) отменён — запись с cancelled: true. В 2019 и 2025 годах ERC не проводился.
//   ERC 2027 ещё не присуждён (заявка Румынии, Предял) — записи нет.
// Требуют проверки:
//   WRC 2013: таблица ФРР — 27–28 июля, бюллетень №2 и новости ФРР — 26–27 июля (взято 26–27).
//   WRC 2012: таблица ФРР — 30 августа – 1 сентября (с заездом), гонка — 31 августа – 1 сентября.
//   WRC 1998: даты 4–5 августа есть только у ФРР.
//   ERC 2006: место — Сторожинец (ФРР), Chernivtsi (IRF), с. Глыбочок (бюллетень, взято оно).
//   ERC 2016: центр — Lekunberri (анонс IRF), Albi (сайт чемпионата, взято оно).
//   ERC 2003: в таблице медалей ФРР Наберухин/Левшонков/Будюков — WJ, по протоколам — MJ; ERC 2010: Крысанов/Цветаева — WV,
//   по протоколу — XV (исправлено). Число команд у ФРР, IRF и Википедии местами расходится — взято по таблице ФРР.
let irfEvents = [
    {
        id: 'IRF_19921009_1',
        date: '1992-10-09',
        endDate: '1992-10-10',
        place: 'Beechworth, Victoria, Australia (Бичворт, Виктория, Австралия)',
        name: '1-й Чемпионат мира по рогейну (WRC)',
        link: [
            'https://en.wikipedia.org/wiki/World_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_maailmameistriv%C3%B5istlused',
            'https://rogaining.com.au/about/history/the-development-of-rogaining-the-world'
        ],
        res: [
            'https://rogaining.ru/results/wrc-results/1wrc/results.html',
            'https://rogaining.org/world-rogaining-championships/wrc-past-results/15-1wrc-results',
            'http://rogaine.asn.au/images/pdf/WRC-1992-results.pdf',
            'https://rogaining.com.au/results/wrc-results/1st-world-rogaining-championships-full-results'
        ],
        info: 'Абсолютные победители: Джеймс Рассел, Майкл Уолтерс (Австралия). Команд — 194, участников — 414.',
        coord: [-36.3595, 146.687],
        fmt: '24',
        type: 'ROGAINE',
        start: 'WRC'
    },
    {
        id: 'IRF_19960831_1',
        date: '1996-08-31',
        endDate: '1996-09-01',
        place: 'Mount Singleton, Western Australia, Australia (гора Синглтон, Западная Австралия)',
        name: '2-й Чемпионат мира по рогейну (WRC)',
        link: [
            'https://wa.rogaine.asn.au/event-pages/everlasting-rogaine-31-august-and-1-september-1996',
            'https://en.wikipedia.org/wiki/World_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_maailmameistriv%C3%B5istlused',
            'https://rogaining.com.au/results/wrc-results/2nd-world-rogaining-championships-report'
        ],
        res: [
            'https://wa.rogaine.asn.au/results/everlasting-results',
            'https://wa.rogaine.asn.au/results/everlasting-placings',
            'https://rogaining.org/world-rogaining-championships/wrc-past-results/16-2wrc-results',
            'http://rogaine.asn.au/images/pdf/WRC-1996-results.pdf',
            'https://rogaining.com.au/results/wrc-results/2nd-world-rogaining-championships-full-results'
        ],
        info: 'Абсолютные победители: Дэвид Роулендс, Джеймс Рассел (Австралия). Команд — 271, участников — 640.',
        coord: [-29.4679, 117.303],
        fmt: '24',
        type: 'ROGAINE',
        start: 'WRC'
    },
    {
        id: 'IRF_19980804_1',
        date: '1998-08-04',
        endDate: '1998-08-05',
        place: 'Douglas Lake Ranch, Kamloops, British Columbia, Canada (ранчо Дуглас-Лейк, Камлупс, Канада)',
        name: '3-й Чемпионат мира по рогейну (WRC)',
        link: [
            'https://en.wikipedia.org/wiki/World_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_maailmameistriv%C3%B5istlused',
            'https://www.rogaining.com/about-us/policies-and-resources/41-history-of-rogaining/54-history-canada'
        ],
        res: [
            'https://rogaining.ru/results/wrc-results/3wrc/results.html',
            'https://rogaining.org/world-rogaining-championships/wrc-past-results/17-3wrc-results'
        ],
        info: 'Абсолютные победители: Найджел Айлотт, Ииро Какко (Австралия, Финляндия). Команд — 134, участников — 294.',
        coord: [50.1631, -120.1964],
        fmt: '24',
        type: 'ROGAINE',
        start: 'WRC'
    },
    {
        id: 'IRF_20000115_1',
        date: '2000-01-15',
        endDate: '2000-01-16',
        place: 'North Canterbury, New Zealand (Северный Кентербери, Новая Зеландия)',
        name: '4-й Чемпионат мира по рогейну (WRC)',
        link: [
            'https://en.wikipedia.org/wiki/World_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_maailmameistriv%C3%B5istlused',
            'https://how.papo.org.nz/history/',
            'https://rogaining.com/about-us/policies-and-resources/41-history-of-rogaining/56-history-new-zealand'
        ],
        res: [
            'https://rogaining.ru/results/wrc-results/4wrc/results.html',
            'https://rogaining.org/world-rogaining-championships/wrc-past-results/21-4th-world-rogaining-championship-christchurch-new-zealand-2000'
        ],
        maps: ['https://rogaining.ru/results/wrc-results/4wrc/4wrc_map.jpg'],
        info: 'Абсолютные победители: Дэвид Роулендс, Грег Барбур (Австралия, Новая Зеландия). Команд — 193, участников — 410.',
        coord: [-42.63, 173.15],
        fmt: '24',
        type: 'ROGAINE',
        start: 'WRC'
    },
    {
        id: 'IRF_20020726_1',
        date: '2002-07-26',
        endDate: '2002-07-27',
        place: 'Lesná, Czech Republic (Лесна, Чехия)',
        name: '5-й Чемпионат мира по рогейну (WRC)',
        link: [
            'https://web.archive.org/web/20021217210741/http://www.top.cz:80/wrc2002/',
            'https://en.wikipedia.org/wiki/World_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_maailmameistriv%C3%B5istlused',
            'https://rogaining.ru/rogaine/about-rogaine/syashhenko-kvolodin-chempionat-mira-po-rogejnu-debyut'
        ],
        res: [
            'https://rogaining.ru/results/wrc-results/5wrc/results.html',
            'https://rogaining.org/world-rogaining-championships/wrc-past-results/22-5th-world-rogaining-championships',
            'https://web.archive.org/web/20020821105149/http://www.top.cz:80/wrc2002/english/overall.php',
            'https://web.archive.org/web/20021116225518/http://www.top.cz:80/wrc2002/english/postupy.php'
        ],
        bulletin: [
            // 'https://web.archive.org/web/20020211224755/http://www.top.cz:80/wrc2002/english/bulletin1e.php'
            // 'https://web.archive.org/web/20021128135115/http://www.top.cz:80/wrc2002/english/bulletin2e.php'
            'https://web.archive.org/web/20021128141803/http://www.top.cz:80/wrc2002/english/instructions.php'
        ],
        maps: ['https://rogaining.ru/results/wrc-results/5wrc/5wrc_map.jpg'],
        info: 'Абсолютные победители: Дэвид Роулендс, Грег Барбур (Австралия, Новая Зеландия). Команд — 182, участников — 383.',
        coord: [49.7536, 12.5375],
        fmt: '24',
        type: 'ROGAINE',
        start: 'WRC'
    },
    {
        id: 'IRF_20030816_1',
        date: '2003-08-16',
        endDate: '2003-08-17',
        place: 'Perm, Russia (Пермь, Россия)',
        name: '1-й Чемпионат Европы по рогейну (ERC)',
        link: [
            'https://en.wikipedia.org/wiki/European_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_Euroopa_meistriv%C3%B5istlused',
            'https://rogaining.ru/rogaine/about-rogaine/1erc-gluhov',
            'https://rogaining.ru/rogaine/about-rogaine/1erc-seidl',
            'https://rogaining.ru/rogaine/about-rogaine/german-shestakov',
            'https://rogaining.ru/rogaine/about-rogaine/shestakov',
            'https://rogaining.org/latest-news/230',
            'https://t.me/rogainomania/1542',
            'https://t.me/rogainomania/1558'
        ],
        res: [
            'https://rogaining.ru/results/erc-results/1erc/results.html',
            'https://rogaining.org/attachments/article/230/ERC2003%20Results.pdf'
        ],
        maps: ['https://rogaining.ru/results/erc-results/1erc/1erc_map.jpg'],
        photo: 'https://commons.wikimedia.org/wiki/File:1st_European_Rogaining_Championships_2003._Prize_giving_ceremony.jpg',
        info: 'Первый чемпионат Европы по рогейну. Абсолютные победители: Мирослав Сейдл, Петр Боржанек (Чехия); WO: Елена Бондарь, Инна Жабреева (Россия); XO: Николай Миронов, Ольга Творогова (Россия). Команд — 40, участников — 84. Медали России — MO: Анатолий Осокин, Андрей Липин, Виталий Мазунин - 2; Константин Володин, Сергей Ященко - 3. WO: Елена Бондарь, Инна Жабреёва - 1; Зоя Щенина, Александра Долганова - 2; Ольга Иващенко, Елена Будюкова, Дарина Иващенко - 3. XO: Николай Миронов, Ольга Творогова - 1; Наталья Копылова, Алексей Городилов - 2; Александр Якимов, Татьяна Якимова - 3. MJ: Евгений Наберухин, Олег Левшонков, Андрей Будюков - 1; Роман Каменских, Роман Гильманов - 2; Владимир Мелёхин, Владимир Неволин - 3. XJ: Мария Политова, Станислав Неволин - 1; Андрей Рязанов, Валентина Мурашова - 2. MV: Анатолий Осокин, Андрей Липин, Виталий Мазунин - 1; Геннадий Ноговицын, Владимир Мазанов - 2; Владимир Левицкий, Андрей Путилов, Алексей Самойлов - 3. WV: Зоя Щенина, Александра Долганова - 1; Любовь Зотина, Алевтина Федоренчик - 2. XV: Александр Вершинин, Людмила Буракова - 2; Анатолий Кожевников, Анна Кожевникова - 3. MSV: Геннадий Ноговицын, Владимир Мазанов - 1; Василий Сентябов, Александр Киселев - 2; Николай Глухов, Владислав Тарасов - 3. WSV: Зоя Щенина, Александра Долганова - 1. XSV: Анатолий Кожевников, Анна Кожевникова - 2.',
        coord: [57.9967, 56.3203],
        fmt: '24',
        type: 'ROGAINE',
        start: 'ERC'
    },
    {
        id: 'IRF_20040508_1',
        date: '2004-05-08',
        endDate: '2004-05-09',
        place: 'Big Lake, Arizona, USA (Биг-Лейк, Аризона, США)',
        name: '6-й Чемпионат мира по рогейну (WRC)',
        link: [
            'https://en.wikipedia.org/wiki/World_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_maailmameistriv%C3%B5istlused',
            'https://rogaining.com.au/about/history/the-development-of-rogaining-the-world'
        ],
        res: [
            'https://rogaining.ru/results/wrc-results/6wrc/results.html',
            'https://rogaining.org/world-rogaining-championships/wrc-past-results/23-6th-world-rogaining-championship-tucson-arizona-2004'
        ],
        maps: ['https://rogaining.ru/results/wrc-results/6wrc/6wrc_map.jpg'],
        info: 'Абсолютные победители: Майк Клозер, Майкл Тобин (США). Команд — 176, участников — 380. Медали России — WSV: Надежда Попова (в команде с Judith Dickinson, США) - 2.',
        coord: [33.8814, -109.4179],
        fmt: '24',
        type: 'ROGAINE',
        start: 'WRC'
    },
    {
        id: 'IRF_20050611_1',
        date: '2005-06-11',
        endDate: '2005-06-12',
        place: 'Nõva, Estonia (Ныва, Эстония)',
        name: '2-й Чемпионат Европы по рогейну (ERC)',
        link: [
            'https://web.archive.org/web/20051027205917/http://www.orion.ee:80/rogain/en/index.php',
            'https://en.wikipedia.org/wiki/European_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_Euroopa_meistriv%C3%B5istlused',
            'https://rogaining.ru/rogaine/about-rogaine/2-erc',
            'https://rogaining.org/latest-news/229'
            // 'http://www.orion.ee/rogain/2005037.gif' // недоступна
            // 'http://www.orion.ee/rogain/en/' // недоступна
            // 'http://www.vx.lv/piedzivojums/sac/nova05vx.htm' // недоступна
        ],
        res: [
            'https://web.archive.org/web/20051027221938/http://www.orion.ee:80/rogain/ERCprotokoll.html',
            'https://rogaining.org/attachments/article/229/ERC2005%20results.pdf',
            'https://web.archive.org/web/20060112000424/http://www.orion.ee:80/rogain/ERCtabel.html'
            // 'http://www.orion.ee/rogain/ERCprotokoll.html' // недоступна
        ],
        maps: [
            'https://web.archive.org/web/20051028162731id_/http://www.orion.ee:80/rogain/2005037.gif',
            'https://rogaining.ru/routegadget/kartat/4.jpg'
        ],
        photo: [
            'http://www.tak-soft.com/tarmo/osport/novaRogain05/index.htm',
            'https://web.archive.org/web/20160410204743/http://www.vallner.info/galerii/index.php?galerii=II%20European%20Rogaining%20Championships&set_lk=0',
            'https://web.archive.org/web/20060210130500/http://www.pilt.ee:80/ROGAIN2005/'
        ],
        rg: 'https://rogaine.ru/routegadget/rg2/#3',
        info: 'Абсолютные победители: Маргус Клементсов, Яанус Реха (Эстония); WO: Улла Силвентойнен, Майя Аатсинки (Финляндия); XO: Гунтарс Манкус, Анита Лиепиня (Латвия). Команд — 89, участников — 199. Медали России — MV: Виктор Рылов, Андрей Фершалов - 3.',
        coord: [59.2247, 23.6883],
        fmt: '24, 8, 3',
        type: 'ROGAINE',
        start: 'ERC'
    },
    {
        id: 'IRF_20060826_1',
        date: '2006-08-26',
        endDate: '2006-08-27',
        place: 'Hlybochok, Chernivtsi Oblast, Ukraine (Глыбочок, Черновицкая обл., Украина)',
        name: '3-й Чемпионат Европы по рогейну (ERC)',
        link: [
            'https://web.archive.org/web/20070222051021/http://rogaining.org.ua:80/ec2006/eng/index.html',
            'https://web.archive.org/web/20130616200631/http://rogaining.bukovinaorient.org.ua/ec2006/rus/index.html',
            'https://en.wikipedia.org/wiki/European_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_Euroopa_meistriv%C3%B5istlused',
            'https://rogaining.ru/rogaine/about-rogaine/3-erc',
            'https://rogaining.org/latest-news/228',
            'https://www.rogaining.com/attachments/article/127/irf_120.pdf'
        ],
        res: [
            'https://rogaining.ru/results/erc-results/3erc/results.html',
            'https://web.archive.org/web/20070222051324/http://rogaining.org.ua:80/ec2006/eng/results.html',
            'https://web.archive.org/web/20070627050901/http://www.rogaining.org.ua:80/ec2006/eng/print_results.html',
            'https://rogaining.org/attachments/article/228/ERC2006%20results.pdf'
            // 'http://rogaining.bukovinaorient.org.ua/ec2006/eng/print_results.html' // недоступна
        ],
        bulletin: [
            // 'https://web.archive.org/web/20070627050754/http://www.rogaining.org.ua:80/ec2006/eng/print_bulletin.html'
            'https://web.archive.org/web/20070627051007/http://www.rogaining.org.ua:80/ec2006/rus/print_bulletin.html'
        ],
        maps: [
            'https://rogaining.ru/results/erc-results/3erc/3erc_map.jpg',
            'https://web.archive.org/web/20070224104714id_/http://rogaining.org.ua:80/ec2006/_images/maps/event_map_75000.jpg',
            'https://web.archive.org/web/20070224104621id_/http://rogaining.org.ua:80/ec2006/_images/maps/event_map_25000_fragment.jpg'
        ],
        photo: 'https://web.archive.org/web/20070222081659/http://rogaining.org.ua:80/ec2006/eng/photos.html',
        info: 'Абсолютные победители: Сергей Ященко, Олег Калинин (Россия); WO: Илзе Лапиня, Зане Розенбаха (Латвия); XO: Ингуна Валдмане, Гинтс Трезиньш (Латвия). Команд — 104, участников — 226. Медали России — MO: Сергей Ященко, Олег Калинин - 1. XO: Николай Бондарь, Елена Бондарь - 2. WJ: Мария Дрондина, Евгения Соколовская - 2. WV: Любовь Зотина, Александра Долганова - 2. XV: Ольга Маховик, Олег Глазырин - 3. MSV: Игорь Крюков, Леонид Хоруженко - 1; Виталий Душкевич, Вячеслав Слепов - 2. WSV: Любовь Зотина, Александра Долганова - 1. XSV: Герман Шестаков, Ольга Иващенко - 2.',
        coord: [48.1748, 25.7697],
        fmt: '24',
        type: 'ROGAINE',
        start: 'ERC'
    },
    {
        id: 'IRF_20061013_1',
        date: '2006-10-13',
        endDate: '2006-10-14',
        place: 'Warrumbungle National Park, New South Wales, Australia (нац. парк Уоррамбангл, Австралия)',
        name: '7-й Чемпионат мира по рогейну (WRC)',
        link: [
            'https://nswrogaining.org/AboutEvents/Events/WRC6/index.htm',
            'https://web.archive.org/web/20150726154436/http://www.rogaine2006.com.au/',
            'https://en.wikipedia.org/wiki/World_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_maailmameistriv%C3%B5istlused',
            'https://nswrogaining.org/AboutEvents/Events/WRC6/racereports.htm',
            'https://nswrogaining.org/AboutEvents/Events/WRC6/stories.htm',
            'https://nswrogaining.org/AboutEvents/Events/WRC6/stories_a.htm'
            // 'http://www.nytimes.com/2006/10/13/travel/escapes/13rogaine.html' // недоступна
            // 'http://www.bendigo-orienteers.com.au/WRC_Route_Gadget/cgi-bin/reitti.cgi?act=map&id=6&cID=1&kieli=&pID=12' // недоступна
        ],
        res: [
            'https://nswrogaining.org/AboutEvents/Events/WRC6/results.htm',
            'https://nswrogaining.org/AboutEvents/Events/WRC6/results/Open.html',
            'https://nswrogaining.org/AboutEvents/Events/WRC6/office/7WRC_FINAL_RESULTS_19Oct.xls',
            'http://rogaine.asn.au/images/pdf/WRC-2006-results.pdf',
            'https://rogaining.org/world-rogaining-championships/wrc-past-results/24-7th-world-rogaining-championships-warrumbungle-mountains-nsw-australia-2006',
            'https://rogaining.com.au/results/wrc-results/7th-world-rogaining-championships-full-results',
            'https://nswrogaining.org/AboutEvents/Events/WRC6/results1.htm'
            // 'https://nswrogaining.org/AboutEvents/Events/WRC6/results/Navlight_Teams_Data' // недоступна
        ],
        bulletin: 'https://nswrogaining.org/AboutEvents/Events/WRC6/event.htm',
        maps: [
            'https://nswrogaining.org/AboutEvents/Events/WRC6/pdf/WRC_Map_Full_4489.pdf'
            // 'https://nswrogaining.org/AboutEvents/Events/WRC6/mapstuff.htm' // страница, не файл карты
            // 'https://nswrogaining.org/AboutEvents/Events/WRC6/mapstuff1.htm' // страница, не файл карты
            // 'https://nswrogaining.org/AboutEvents/Events/WRC6/pdf/Analysis_Mudmap2.pdf' // страница, не файл карты
        ],
        photo: 'https://nswrogaining.org/AboutEvents/Events/WRC6/gallery.htm',
        gps: 'https://web.archive.org/web/20070831083728/http://www.bendigo-orienteers.com.au/WRC_Route_Gadget/cgi-bin/reitti.cgi?act=map&id=6&cID=1&kieli=&pID=12',
        info: 'Абсолютные победители: Деннис де Мончи, Крис Форн (Новая Зеландия). Команд — 308, участников — 677.',
        coord: [-31.16, 149.0],
        fmt: '24',
        type: 'ROGAINE',
        start: 'WRC'
    },
    {
        id: 'IRF_20070728_1',
        date: '2007-07-28',
        endDate: '2007-07-29',
        place: 'Smiltene, Latvia (Смилтене, Латвия)',
        name: '4-й Чемпионат Европы по рогейну (ERC)',
        link: [
            'http://www.okzk.lv/rogaining_lv/',
            'https://web.archive.org/web/20070206033046/http://www.rogaining.lv:80/erc2007/bulletin1.htm',
            'https://en.wikipedia.org/wiki/European_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_Euroopa_meistriv%C3%B5istlused',
            'https://rogaining.org/latest-news/227',
            'https://rogaining.com/attachments/article/80/irf_125.pdf'
            // 'http://omaps.worldofo.com/index.php?id=5086' // недоступна
        ],
        res: [
            'http://www.okzk.lv/rogaining_lv/erc2007/overall_res.htm',
            'https://rogaining.org/attachments/article/227/ERC2007%20results.pdf',
            'https://rogaining.org/attachments/article/227/ERC2007%20category%20winners.pdf',
            'https://web.archive.org/web/20070919222152id_/http://www.rogaining.lv/erc2007/winners.pdf',
            'http://www.okzk.lv/rogaining_lv/erc2007/24h_splits.htm',
            'https://web.archive.org/web/20070919222137/http://www.rogaining.lv/erc2007/24h_cp_visits.htm'
            // 'http://www.rogaining.lv/erc2007/overall_res.htm' // недоступна
        ],
        bulletin: [
            // 'https://web.archive.org/web/20070206163336id_/http://www.rogaining.lv:80/erc2007/bulletin1.pdf'
            'https://web.archive.org/web/20080422032119/http://www.rogaining.lv:80/erc2007/bulletin3.htm'
        ],
        maps: ['https://rogaining.ru/results/erc-results/4erc/4erc_map.jpg'],
        info: 'Абсолютные победители: Евгений Гаврилов, Евгений Домбровский (Россия); WO: Алида Абола, Байба Озола (Латвия); XO: Елена Бондарь, Николай Бондарь (Россия). Команд — 162, участников — 352. Медали России — MO: Евгений Гаврилов, Евгений Домбровский - 1; Олег Калинин, Сергей Ященко - 3. XO: Николай Бондарь, Елена Бондарь - 1. MJ: Сергей Доронин, Максим Борисов - 1. WJ: Евгения Соколовская, Мария Дрондина - 1. MSV: Александр Лисененков, Евгений Емельянов - 3.',
        coord: [57.4243, 25.9045],
        fmt: '24, 6',
        type: 'ROGAINE',
        start: 'ERC'
    },
    {
        id: 'IRF_20080712_1',
        date: '2008-07-12',
        endDate: '2008-07-13',
        place: 'Michurinskoye, Leningrad Oblast, Russia (Мичуринское, Ленинградская обл., Россия)',
        region: 'SPB',
        name: '5-й Чемпионат Европы по рогейну (ERC)',
        link: [
            'https://rogaine-spb.narod.ru/erc08/info.html',
            'https://rogaine-spb.narod.ru/erc08rus.html',
            'https://en.wikipedia.org/wiki/European_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_Euroopa_meistriv%C3%B5istlused',
            'https://rogaining.org/latest-news/226',
            'https://t.me/rogainomania/1654'
            // 'http://rogaine-spb.ru/erc08/rgn20.htm' // недоступна
        ],
        res: [
            'https://rogaine-spb.narod.ru/erc08/rgn20.htm',
            'https://rogaine-spb.narod.ru/erc08/res.html',
            'https://rogaining.org/attachments/article/226/ERC2008%20results.pdf',
            'https://rogaine-spb.narod.ru/erc08/rgn20s.htm',
            'https://rogaine-spb.narod.ru/erc08/rgn20i.htm'
            // 'http://www.rogaine-spb.ru/erc08/res.html' // недоступна
        ],
        bulletin: [
            // 'https://rogaine-spb.narod.ru/erc08rus.html'
            // 'https://rogaine-spb.narod.ru/erc08/erc08-2rus.html'
            'https://rogaine-spb.narod.ru/erc08/erc08-3rus.html'
        ],
        maps: [
            'https://rogaine-spb.narod.ru/erc08/erc08map.jpg',
            'https://rogaining.ru/routegadget/kartat/15.jpg'
            // 'http://www.rogaine-spb.ru/erc08/erc08map.jpg' // недоступна
            // 'https://rogaine-spb.narod.ru/erc08/map.gif' // недоступна
            // 'https://rogaine-spb.narod.ru/erc08/centre.jpg' // страница, не файл карты
        ],
        map: 'michurinskoe_erc_2008',
        photo: [
            'https://rogaine-spb.narod.ru/erc08/photo.html',
            'https://rogaine-spb.narod.ru/erc08/photoalex.html',
            'https://rogaine-spb.narod.ru/erc08/photodist.html',
            'https://web.archive.org/web/20080813155406/http://avangard.photo.cod.ru:80/users/fijn/7484473349/'
        ],
        rg: 'https://rogaine.ru/routegadget/rg2/#24',
        info: 'Абсолютные победители: Мирослав Сейдл, Петр Боржанек (Чехия); WO: Анна Бурлинова, Ирина Сафронова (Россия, 2-е место в абсолюте); XO: Алида Абола, Петерис Зариньш (Латвия). Команд — 143, участников — 306. Медали России — MO: Олег Калинин, Сергей Ященко - 3. WO: Анна Бурлинова, Ирина Сафронова - 1; Ольга Творогова, Людмила Плис - 2. MJ: Сергей Доронин, Максим Борисов - 1; Ярослав Ягодкин, Антон Сергеев - 2. WJ: Евгения Соколовская, Мария Дрондина - 1; Майя Дьякова, Лидия Иванова - 2; Кристина Федоренко, Марина Абашкина - 3. XJ: Артур Каримбаев, Алиса Нижникова - 1; Егор Иванов, Светлана Климова - 3. MV: Василий Михайлов, Анатолий Шостацкий - 1; Анатолий Осокин, Андрей Липин - 3. XV: Игорь Семичев, Марина Скуратович - 2; Евгений Рагозин, Сергей Паутов, Татьяна Тесленок - 3. MSV: Александр Лисененков, Евгений Емельянов - 1; Игорь Крюков, Владимир Левицкий - 3. WSV: Татьяна Оноприенко, Ольга Баженова - 2; Зоя Щенина, Александра Долганова - 3. XSV: Вячеслав Слепов, Елена Слепова - 1.',
        coord: [60.5665, 29.8686],
        fmt: '24, 8, 3, 8 вело',
        type: 'ROGAINE',
        start: 'ERC'
    },
    {
        id: 'IRF_20080913_1',
        date: '2008-09-13',
        endDate: '2008-09-14',
        place: 'Ähijärve, Karula National Park, Estonia (Ахиярве, нац. парк Карула, Эстония)',
        name: '8-й Чемпионат мира по рогейну (WRC)',
        link: [
            'https://8wrc2008.rogain.ee/',
            'https://en.wikipedia.org/wiki/World_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_maailmameistriv%C3%B5istlused'
            // 'http://www.okilves.ee/RG/cgi-bin/reitti.cgi?act=map&id=37&kieli=en' // недоступна
        ],
        res: [
            'https://8wrc2008.rogain.ee/failid/results.htm',
            'https://8wrc2008.rogain.ee/failid/winners.htm',
            'https://8wrc2008.rogain.ee/results.php',
            'https://rogaining.org/world-rogaining-championships/wrc-past-results/25-8th-world-rogaining-championships-karula-estonia-2008',
            'https://8wrc2008.rogain.ee/failid/resultsplits.htm',
            'https://8wrc2008.rogain.ee/failid/wrcSplits.pdf',
            'https://8wrc2008.rogain.ee/failid/wrcSplits.xls',
            'https://8wrc2008.rogain.ee/failid/stat_controls.htm'
        ],
        bulletin: [
            // 'https://8wrc2008.rogain.ee/failid/8wrc2008-bulletin-3-en2.pdf'
            // 'https://8wrc2008.rogain.ee/failid/8wrc2008-bulletin-3-ru.pdf'
            'https://8wrc2008.rogain.ee/failid/Pre_event_information.pdf'
        ],
        maps: ['https://8wrc2008.rogain.ee/failid/wrc2008map.gif'],
        photo: [
            'https://8wrc2008.rogain.ee/pictures.php',
            'https://8wrc2008.rogain.ee/img/album1/',
            'http://www.tak-soft.com/tarmo/osport/wrc2008/'
            // 'http://nagi.ee/photos/hp-sportteam/sets/125911/' // недоступна
        ],
        gps: 'https://web.archive.org/web/20240714113139/http://www.okilves.ee/RG/cgi-bin/reitti.cgi?act=map&id=37&kieli=en',
        info: 'Абсолютные победители: Евгений Домбровский, Павел Шестаков (Россия). Команд — 339, участников — 749. Медали России — MO: Евгений Домбровский, Павел Шестаков - 1; Сергей Ященко, Олег Калинин - 3. WO: Елена Бондарь, Анна Бурлинова - 2. XO: Ирина Сафронова, Павел Сысоев - 1. WSV: Игорь Крюков, Владимир Левицкий - 2. WJ: Мария Дрондина, Майя Дьякова, Евгения Соколовская - 1.',
        coord: [57.7125, 26.505],
        fmt: '24',
        type: 'ROGAINE',
        start: 'WRC'
    },
    {
        id: 'IRF_20090815_1',
        date: '2009-08-15',
        endDate: '2009-08-16',
        place: 'Ylläs, Lapland, Finland (Юллас, Лапландия, Финляндия)',
        name: '6-й Чемпионат Европы по рогейну (ERC)',
        link: [
            'https://web.archive.org/web/20150101195019/http://retki.rogaining.fi/index.php?page=erc-2009&hl=en',
            'https://en.wikipedia.org/wiki/European_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_Euroopa_meistriv%C3%B5istlused',
            'https://rogaining.ru/news/rogaine-news/results-events/103-6-j-chempionat-evropy-po-rogejnu-2009',
            'https://rogaining.org/latest-news/225'
            // 'http://retki.rogaining.fi/index.php?page=erc-2009&hl=en' // недоступна
            // 'http://rogaining.fi/cgi-bin/reitti.cgi' // недоступна
        ],
        res: [
            'https://web.archive.org/web/20160624002243/http://retki.rogaining.fi/uploads/2009/results24h.htm',
            'https://web.archive.org/web/20160817193348/http://retki.rogaining.fi/index.php?page=erc2009&hl=en',
            'https://rogaining.org/attachments/article/225/ERC2009%20results.pdf',
            'https://web.archive.org/web/20161104101001/http://retki.rogaining.fi:80/uploads/2009/splits24h.htm'
            // 'http://retki.rogaining.fi/uploads/2009/results24h.htm' // недоступна
        ],
        bulletin: [
            // 'https://web.archive.org/web/20150102003902/http://retki.rogaining.fi/index.php?page=erc-2009-information&hl=en'
            // 'https://web.archive.org/web/20160817194359/http://retki.rogaining.fi/index.php?page=erc-2009-bulleting-2&hl=en'
            // 'https://web.archive.org/web/20160818041617/http://retki.rogaining.fi/index.php?page=erc-2009-bulletin-3&hl=en'
            'https://web.archive.org/web/20160817221800/http://retki.rogaining.fi/index.php?page=erc-2009-bulletin-4&hl=en'
        ],
        maps: ['https://rogaining.ru/results/erc-results/6erc/6erc_map.jpg'],
        photo: [
            'http://smlukin.narod.ru/ecr/',
            'https://rogaining.ru/news/rogaine-news/site-new/106-fotografii-s-6-go-chempionata-evropy-po-rogejnu-2009'
            // 'http://picasaweb.google.com/RogainingFinland/EuropeanRogainingChampionships2009' // недоступна
            // 'http://picasaweb.google.ru/rusrogaining/6' // недоступна
        ],
        info: 'Абсолютные победители: Янне Мононен, Ээро Яппинен (Финляндия); WO: Алида Абола, Илзе Лапиня (Латвия); XO: Елена Бондарь, Андрей Шведов (Россия). Команд — 240, участников — 525. Медали России — WO: Нина Михеева, Марина Галкина - 3. XO: Елена Бондарь, Андрей Шведов - 1; Сергей Грушин, Анастасия Галитарова - 3. MJ: Артём Скиндирев, Денис Плюснин - 1; Роман Паздников, Артём Михеев - 2. WV: Нина Михеева, Марина Галкина - 3. MSV: Геннадий Ступников, Владимир Левицкий - 3. WSV: Татьяна Оноприенко, Ольга Баженова - 2.',
        coord: [67.582, 24.207],
        fmt: '24, 8',
        type: 'ROGAINE',
        start: 'ERC'
    },
    {
        id: 'IRF_20100814_1',
        date: '2010-08-14',
        endDate: '2010-08-15',
        place: 'Myhove, Chernivtsi Oblast, Ukraine (Мигово, Черновицкая обл., Украина)',
        name: '7-й Чемпионат Европы по рогейну (ERC)',
        link: [
            'https://web.archive.org/web/20100204080309/http://erc2010.in.ua:80/',
            'https://web.archive.org/web/20100830150601/http://erc2010.z83.ru:80/indexr.htm',
            'https://en.wikipedia.org/wiki/European_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_Euroopa_meistriv%C3%B5istlused',
            'https://rogaining.org/latest-news/168',
            'https://rogaining.ru/news/rogaine-news/results-events/201-7erc',
            'https://web.archive.org/web/20130102044344/http://erc2010.in.ua:80/index.php/statia.html'
            // 'http://erc2010.in.ua/index.php/map.html' // недоступна
        ],
        res: [
            'https://rogaining.ru/results/erc-results/7erc/erc2010_results.html',
            'https://web.archive.org/web/20101007023659/http://bukovinaorient.org.ua:80/UserFiles/File/2010_08_14_results_erc_2010.htm',
            'https://rogaining.org/attachments/article/168/ERC2010.pdf'
            // 'http://bukovinaorient.org.ua/UserFiles/File/2010_08_14_results_erc_2010.htm' // недоступна
            // 'http://erc2010.z83.ru/split_all.htm' // недоступна
        ],
        bulletin: 'https://web.archive.org/web/20110531191224/http://erc2010.z83.ru/bulletin_1_rus.htm',
        maps: [
            'https://rogaining.ru/results/erc-results/7erc/7erc_map.jpg'
            // 'https://web.archive.org/web/20101031191301/http://www.erc2010.in.ua:80/index.php/map.html' // страница, не файл карты
        ],
        photo: [
            'http://smlukin.narod.ru/mi/',
            'https://commons.wikimedia.org/wiki/File:ERC2010_MO.jpg'
            // 'http://picasaweb.google.ru/lomdesign/Press' // недоступна
        ],
        info: 'Абсолютные победители: Сеппо Мякинен, Ханну Оя (Финляндия); WO: Ольга Мазур, Людмила Яременко (Украина); XO: Наталья Абрамова, Андрей Шведов (Россия, 3-е место в абсолюте). Команд — 123, участников — 265. Медали России — WO: Ольга Творогова, Людмила Плис - 3. XO: Андрей Шведов, Наталья Абрамова - 1; Павел Демещик, Сергей Романенков, Анна Шавлакова - 2. WJ: Мария Дрондина, Евгения Соколовская - 2. XJ: Артём Скиндирёв, Наталья Карнаухова - 3. WV: Ольга Творогова, Людмила Плис - 1; Нина Михеева, Светлана Субботина - 3. XV: Анатолий Крысанов, Галина Цветаева - 3. MSV: Владимир Левицкий, Геннадий Ступников - 3. WSV: Елена Лисененкова, Татьяна Оноприенко - 1. XSV: Владимир Мартынов, Ирина Капустян - 3.',
        coord: [48.1445, 25.3633],
        fmt: '24',
        type: 'ROGAINE',
        start: 'ERC'
    },
    {
        id: 'IRF_20101120_1',
        date: '2010-11-20',
        endDate: '2010-11-21',
        place: 'Cheviot, New Zealand (Чевиот, Новая Зеландия)',
        name: '9-й Чемпионат мира по рогейну (WRC)',
        link: [
            'http://rogaine.org.nz/wrc2010/',
            'https://web.archive.org/web/20100821214434/http://wrc2010.org.nz:80/',
            'https://en.wikipedia.org/wiki/World_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_maailmameistriv%C3%B5istlused',
            'https://rogaining.ru/news/rogaine-news/results-events/232-9wrc',
            'https://rogaining.ru/news/rrf-news/irf-news/127-9wrc2010',
            'http://rogaine.org.nz/wrc2010/resources/plannersreport.htm'
            // 'http://rogaine.org.nz/wrc2010/organiser_report.htm' // недоступна
            // 'http://rogaine.org.nz/wrc2010/competitor_comment.htm' // недоступна
        ],
        res: [
            'http://rogaine.org.nz/wrc2010/results.htm',
            'http://rogaine.org.nz/wrc2010/WRCresults.pdf',
            'http://rogaine.org.nz/wrc2010/sectionwinners.htm',
            'https://rogaining.org/world-rogaining-championships/wrc-past-results/26-9th-world-rogaining-championship-cheviot-north-canterbury-south-island-new-zealand',
            'http://rogaine.org.nz/wrc2010/resultsanalysis.htm',
            'http://rogaine.org.nz/wrc2010/WRC2010Checkpoints.htm'
            // 'http://rogaine.org.nz/wrc2010/results.pdf' // недоступна
        ],
        bulletin: [
            // 'http://rogaine.org.nz/wrc2010/eventinfo.htm'
            'http://rogaine.org.nz/wrc2010/finalinstructions.pdf'
        ],
        maps: [
            'http://rogaine.org.nz/wrc2010/winnersmap.gif'
            // 'http://rogaine.org.nz/wrc2010/eventbase.gif' // страница, не файл карты
        ],
        photo: [
            'http://rogaine.org.nz/wrc2010/pictures.htm',
            'http://www.flickr.com/photos/creative_heuristics/sets/72157625331652395/',
            'http://www.flickr.com/photos/56259736@N02/sets/72157625338845465/',
            'http://www.flickr.com/photos/etherington/sets/72157625470338492/',
            'http://www.flickr.com/photos/etherington/sets/72157625348694673/'
        ],
        info: 'Абсолютные победители: Крис Форн, Марсель Хагенер (Новая Зеландия). Команд — 251, участников — 522. Медали России — WV: Марина Галкина, Нина Михеева - 1. MJ: Пётр Михеев, Артём Михеев - 2.',
        coord: [-42.8117, 173.2735],
        fmt: '24',
        type: 'ROGAINE',
        start: 'WRC'
    },
    {
        id: 'IRF_20110723_1',
        date: '2011-07-23',
        endDate: '2011-07-24',
        place: 'Rauna, Latvia (Рауна, Латвия)',
        name: '8-й Чемпионат Европы по рогейну (ERC)',
        link: [
            'https://web.archive.org/web/20111014225455/http://erc2011.rogaining.lv/',
            'https://en.wikipedia.org/wiki/European_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_Euroopa_meistriv%C3%B5istlused',
            'https://rogaining.org/latest-news/164',
            'https://rogaining.ru/news/rogaine-news/announcement/286-8erc'
            // 'http://erc2011.rogaining.lv/' // недоступна
            // 'http://erc2011.okzk.lv/jaunumi/file.php?file=Bulletin_3.pdf' // недоступна
        ],
        res: [
            'http://rogaining.lv/erc2011/results/results24h.htm',
            'https://web.archive.org/web/20120302233058/http://erc2011.rogaining.lv:80/results/results24h.htm',
            'http://rogaining.lv/erc2011/results/punches.htm'
        ],
        bulletin: [
            // 'http://rogaining.lv/erc2011/jaunumi/file.php?file=Bulletin_1.pdf'
            // 'http://rogaining.lv/erc2011/jaunumi/file.php?file=Bulletin_3.pdf'
            'http://rogaining.lv/erc2011/jaunumi/file.php?file=PreStart.pdf'
        ],
        maps: [
            'http://rogaining.lv/erc2011/img/erc2011.gif',
            'http://rogaining.lv/erc2011/img/erc2011.jpg'
        ],
        photo: 'https://web.archive.org/web/20150909233025/http://erc2011.rogaining.lv/index.php?galeriju_saraksts&z=7',
        info: 'Абсолютные победители: Сильвер Энсаар, Райн Энсаар (Эстония); WO: Марина Галкина, Нина Михеева (Россия); XO: Андрей Шведов, Наталья Абрамова (Россия). Команд — 280, участников — 600. Медали России — WO: Марина Галкина, Нина Михеева - 1; Анна Бурлинова, Надежда Сухова - 3. XO: Андрей Шведов, Наталья Абрамова - 1; Игорь Климов, Наталья Зимина - 2. MV: Вячеслав Савченко, Владимир Шпетный - 1. WV: Марина Галкина, Нина Михеева - 1. MSV: Александр Терёшкин, Олег Жегусов - 1. WSV: Татьяна Оноприенко, Елена Лисененкова - 2.',
        coord: [57.314194, 25.73204],
        fmt: '24, 6',
        type: 'ROGAINE',
        start: 'ERC'
    },
    {
        id: 'IRF_20120505_1',
        date: '2012-05-05',
        endDate: '2012-05-06',
        place: 'Molėtai District, Lithuania (Молетский р-н, Литва)',
        name: '9-й Чемпионат Европы по рогейну (ERC)',
        link: [
            'https://web.archive.org/web/20130101155025/http://erc2012.lt:80/',
            'https://en.wikipedia.org/wiki/European_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_Euroopa_meistriv%C3%B5istlused',
            'https://rogaining.ru/rogaine/about-rogaine/erc2012-gavrilov',
            'https://rogaining.ru/rogaine/about-rogaine/erc2012-galkina',
            'https://rogaining.ru/rogaine/about-rogaine/erc-2012',
            'https://rogaining.org/latest-news/27',
            'https://rogaining.ru/news/rogaine-news/results-events/358-erc2012'
            // 'http://www.spordilinn.ee/failid/kaart_rajaga_150dpi2.jpg' // недоступна
            // 'http://erc2012.g-sportas.lt/' // недоступна
            // 'http://www.erc2012.lt/data/WO.jpg' // недоступна
        ],
        res: [
            'https://rogaining.ru/results/erc-results/erc2012/erc2012_results.html',
            'https://web.archive.org/web/20120716041927/http://www.erc2012.lt:80/data/erc.htm',
            'https://rogaining.org/attachments/article/158/ERC2012%20results.xls',
            'https://web.archive.org/web/20120515231821/http://www.erc2012.lt:80/data/splits.htm'
            // 'http://erc2012.lt/index.php/results' // недоступна
        ],
        bulletin: [
            // 'https://web.archive.org/web/20120417021511id_/http://www.erc2012.lt:80/data/erc-b1.pdf'
            // 'https://web.archive.org/web/20120522222223id_/http://www.erc2012.lt:80/data/erc-b-2.pdf'
            'https://web.archive.org/web/20120526161555id_/http://www.erc2012.lt:80/data/Pre-start.pdf'
        ],
        maps: [
            'https://rogaining.ru/results/erc-results/erc2012/erc2012_map.jpg',
            'https://rogaining.ru/images/stories/articles/erc2012/erc2012map.jpg'
            // 'https://rogaining.ru/images/stories/articles/erc2012/erc2012_map_route4.jpg' // страница, не файл карты
        ],
        photo: 'https://commons.wikimedia.org/wiki/File:ERC2012_MO.jpg',
        info: 'Абсолютные победители: Армо Хийе, Лаури Лахтмяэ (Эстония); WO: Марина Галкина, Нина Михеева (Россия); XO: Валтерс Каминскис, Анита Лиепиня (Латвия). Команд — 171, участников — 369. Медали России — MO: Евгений Домбровский, Олег Калинин - 2; Вячеслав Савченко, Владимир Шпетный - 3. WO: Марина Галкина, Нина Михеева - 1; Светлана Субботина, Анна Авраменко - 3. XO: Андрей Шведов, Наталья Абрамова - 3. MV: Вячеслав Савченко, Владимир Шпетный - 1. WV: Марина Галкина, Нина Михеева - 1; Елена Крылова, Светлана Слободенюк - 3. MSV: Александр Терёшкин, Олег Жегусов, Александр Копелевич - 3. WSV: Татьяна Оноприенко, Елена Лисененкова - 3.',
        coord: [55.300747, 25.599074],
        fmt: '24, 6',
        type: 'ROGAINE',
        start: 'ERC'
    },
    {
        id: 'IRF_20120831_1',
        date: '2012-08-31',
        endDate: '2012-09-01',
        place: 'Přebuz, Czech Republic (Пршебуз, Чехия)',
        name: '10-й Чемпионат мира по рогейну (WRC)',
        link: [
            'https://rogaining.cz/wrc2012/en/',
            'https://en.wikipedia.org/wiki/World_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_maailmameistriv%C3%B5istlused',
            'https://rogaining.ru/news/rogaine-news/results-events/395-wrc2012',
            'https://rogaining.ru/rogaine/about-rogaine/wrc2012-dombrovskiy',
            'https://rogaining.ru/rogaine/about-rogaine/wrc2012-kalinin',
            'https://rogaining.ru/rogaine/about-rogaine/wrc2012-shvedov',
            'https://rogaining.ru/rogaine/about-rogaine/wrc2012-mikheeva',
            'https://rogaining.ru/rogaine/about-rogaine/wrc2012-kuprienko',
            'https://rogaining.ru/news/rogaine-news/miscellaneous-news/423-wrc2012',
            'https://web.archive.org/web/20160310021800id_/http://www.rogaining.cz/wrc2012/files/WRC_2012_Report.pdf'
            // 'http://route-rogaining.dccomp.cz/cgi-bin/reitti.cgi?act=map&id=7&kieli=' // недоступна
            // 'http://stareye.rajce.idnes.cz/1208_MS_v_rogainingu/' // недоступна
            // 'http://janickaberuska.rajce.idnes.cz/WRC2012_Tojnarek' // недоступна
            // 'http://janickaberuska.rajce.idnes.cz/WRC2012/' // недоступна
            // 'http://runningfox.rajce.idnes.cz/10th_World_Rogaining_Championships_Prebuz_2012' // недоступна
            // 'http://www.rogaining.cz/wrc2012/files/WRC_2012_Report.pdf' // недоступна
        ],
        res: [
            'https://rogaining.cz/wrc2012/files/r_results_wrc.pdf',
            'https://rogaining.cz/wrc2012/en/results.html',
            'https://rogaining.org/world-rogaining-championships/wrc-past-results/345-results-of-10th-world-rogaining-championships-2012',
            'https://web.archive.org/web/20191215002154id_/http://www.rogaining.cz/wrc2012/files/results/Team_Splits_Overall.txt',
            'https://web.archive.org/web/20161103121631id_/http://www.rogaining.cz:80/wrc2012/files/results/Team_Splits_Cat.txt',
            'https://web.archive.org/web/20161103121534id_/http://www.rogaining.cz:80/wrc2012/files/results/Optimal_Route.txt',
            'https://rogaining.cz/wrc2012/files/CP_Visits.xls'
        ],
        bulletin: [
            // 'https://web.archive.org/web/20131102010612id_/http://www.rogaining.cz/wrc2012/files/bulletin_1.pdf'
            // 'https://rogaining.cz/wrc2012/files/bulletin_2.pdf'
            // 'https://rogaining.cz/wrc2012/files/bulletin_3_en.pdf'
            'https://rogaining.cz/wrc2012/files/Last_Info_EN.pdf'
        ],
        maps: [
            'https://rogaining.ru/results/wrc-results/wrc2012/wrc2012_map.jpg'
            // 'https://rogaining.ru/images/stories/articles/wrc2012-map-cp52-70.jpg' // страница, не файл карты
            // 'https://rogaining.cz/wrc2012/files/WRC_2012_Centre.pdf' // страница, не файл карты
            // 'https://rogaining.cz/wrc2012/files/Map_Symbols_WRC_EN.pdf' // страница, не файл карты
        ],
        photo: [
            'https://rogaining.cz/wrc2012/en/photogallery.html'
            // 'https://picasaweb.google.com/111054865928224404014/2012_08_31WRC' // недоступна
        ],
        gps: 'https://web.archive.org/web/20120921043654/http://route-rogaining.dccomp.cz:80/cgi-bin/reitti.cgi?act=map&id=7&kieli=',
        info: 'Абсолютные победители: Сильвер Энсаар, Райн Энсаар (Эстония). Команд — 333, участников — 700. Медали России — MO: Евгений Домбровский, Олег Калинин - 3. WO: Анастасия Галитарова, Ирина Сафронова - 1; Марина Галкина, Нина Михеева - 3. XO: Анна Шавлакова, Андрей Шведов - 1. MV: Юрий Бородулин, Денис Куприенко - 3. WV: Марина Галкина, Нина Михеева - 1. MJ: Алексей Перфильев, Владимир Рагозин - 3. XJ: Мария Дрондина, Артем Скиндирев - 2.',
        coord: [50.3614, 12.6229],
        fmt: '24, 2',
        type: 'ROGAINE',
        start: 'WRC'
    },
    {
        id: 'IRF_20130126_1',
        date: '2013-01-26',
        endDate: '2013-01-27',
        place: 'La Llacuna, Catalonia, Spain (Ла-Льякуна, Каталония, Испания)',
        name: '10-й Чемпионат Европы по рогейну (ERC)',
        link: [
            'https://web.archive.org/web/20140108091846/http://thewildboar.org/',
            'https://en.wikipedia.org/wiki/European_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_Euroopa_meistriv%C3%B5istlused',
            'https://rogaining.org/latest-news/219',
            'https://rogaining.org/latest-news/217',
            'https://rogaining.org/latest-news/216',
            'https://rogaining.ru/news/rogaine-news/results-events/441-erc2013'
            // 'http://thewildboar.org/erc13%20%20bulletin1%20eng.pdf' // недоступна
            // 'http://www.ufec.tv/index.php?id_arxiu=1697&tipus=1&buscar_texto=&npagina=&federacions=' // недоступна
        ],
        res: [
            'https://rogaining.org/attachments/article/224/ERC2013%20results%20IRF.pdf',
            'https://web.archive.org/web/20140104110913id_/http://www.thewildboar.org:80/results%2010th%20erc%202013%20la%20llacuna%20%20irf.pdf',
            'https://web.archive.org/web/20130616121053id_/http://thewildboar.org/resultatsrogaining24h_cat.pdf',
            'https://web.archive.org/web/20140104110854id_/http://www.thewildboar.org:80/resultatsrogaining24h_parcials.pdf',
            'https://web.archive.org/web/20131220090604id_/http://www.thewildboar.org:80/teamcontrols%2010th%20erc%202013%20la%20llacuna.xlsx'
            // 'http://thewildboar.org/resultatsrogaining24h_abs.pdf' // недоступна
        ],
        bulletin: 'https://web.archive.org/web/20130203085803id_/http://www.thewildboar.org:80/tourist%20info%2010th%20erc.pdf',
        maps: [
            'https://rogaining.ru/results/erc-results/erc2013/erc2013_map.jpg',
            'https://web.archive.org/web/20130616131121id_/http://thewildboar.org/la%20llacuna%20cursa%20erc%2013c.jpg'
        ],
        photo: [
            'http://www.flickr.com/photos/lallacunaonline/sets/72157632616215016/',
            'http://www.flickr.com/photos/78091252@N05/sets/72157632641032259/'
            // 'https://picasaweb.google.com/106655380613028944906/ERC13TWBR' // недоступна
        ],
        video: [
            'http://youtu.be/DSu1I1jp4Mk',
            'http://youtu.be/uQCE_fE1wGM'
        ],
        gps: 'https://sportrec.eu/gps/18g5i5o',
        info: 'Абсолютные победители: Томми Тёлкко (Финляндия), Аурелио Оливар (Испания); WO: Марина Галкина, Нина Михеева (Россия); XO: Валтерс Каминскис, Анита Лиепиня (Латвия). Команд — 169, участников — 367. Медали России — WO: Нина Михеева, Марина Галкина - 1. MJ: Даниил Коднев, Владислав Ерёмин - 2. MV: Вячеслав Савченко, Владимир Шпетный - 2. WV: Нина Михеева, Марина Галкина - 1; Светлана Субботина, Анна Бойко - 2; Елена Крылова, Светлана Слободенюк - 3. XV: Александр Сафонов, Ирина Сафонова - 3. MSV: Александр Копелевич, Олег Жегусов - 2. WSV: Елена Лисененкова, Татьяна Оноприенко - 2.',
        coord: [41.473, 1.5346],
        fmt: '24, 6',
        type: 'ROGAINE',
        start: 'ERC'
    },
    {
        id: 'SPB_20130726_1',
        date: '2013-07-26',
        endDate: '2013-07-27',
        place: 'Alol, Pskov Oblast, Russia (Алоль, Псковская обл., Россия)',
        name: '11-й Чемпионат мира по рогейну (WRC)',
        link: [
            'https://wrc2013.rogaining.ru/en/',
            'https://wrc2013.rogaining.ru/ru/',
            'https://web.archive.org/web/20131231110423/http://wrc2013.com/',
            'https://en.wikipedia.org/wiki/World_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_maailmameistriv%C3%B5istlused',
            'https://rogaining.ru/news/rogaine-news/results-events/wrc2013-results',
            'https://rogaining.ru/news/rrf-news/organization-news/2013-resume',
            'https://rogaining.ru/rogaine/about-rogaine/kras-rogaining',
            'http://www.kras-rogaining.ru/index.php?option=com_content&view=article&id=60:otchet-ob-uchastii-v-chempionate-mira-po-rogejnu-2013&catid=1:noovsti&Itemid=6'
            // 'https://wrc2013.rogaining.ru/gadget/cgi-bin/reitti.cgi?act=map&id=3&kieli=' // недоступна
        ],
        res: [
            'https://wrc2013.rogaining.ru/results/wrc2013_results.htm',
            'https://wrc2013.rogaining.ru/en/wrc2013-results.html',
            'https://rogaining.org/world-rogaining-championships/wrc-past-results/250-11th-world-rogaining-championships-2013-russia-results',
            'https://wrc2013.rogaining.ru/results/wrc2013_splits.htm',
            'https://wrc2013.rogaining.ru/results/wrc2013_stat_controls.htm',
            'https://wrc2013.rogaining.ru/results/wrc2013_best_planners.pdf'
        ],
        bulletin: [
            // 'https://wrc2013.rogaining.ru/en/event-info/bulletin2.html'
            // 'https://wrc2013.rogaining.ru/ru/informatsiya/byulleten-2.html'
            // 'https://wrc2013.rogaining.ru/download/WRC2013_Pre_Event_Info_ENG.pdf'
            'https://wrc2013.rogaining.ru/download/WRC2013_Pre_Event_Info_RUS.pdf'
        ],
        maps: [
            'https://wrc2013.rogaining.ru/results/wrc2013_map.jpg'
            // 'https://wrc2013.rogaining.ru/images/routes/Eensaar-Eensaar.jpg' // путь одной команды (есть карта без пути)
            // 'https://wrc2013.rogaining.ru/images/routes/Tammemae-Pallo.jpg' // путь одной команды (есть карта без пути)
            // 'https://wrc2013.rogaining.ru/images/routes/Kalinin-Dombrovskiy.jpg' // путь одной команды (есть карта без пути)
            // 'https://wrc2013.rogaining.ru/images/routes/Abramova-Shvedov.jpg' // путь одной команды (есть карта без пути)
            // 'https://wrc2013.rogaining.ru/images/routes/Mikheeva-Galkina.jpg' // путь одной команды (есть карта без пути)
            // 'https://wrc2013.rogaining.ru/images/routes/Sulg-Hirv.jpg' // путь одной команды (есть карта без пути)
            // 'https://wrc2013.rogaining.ru/images/routes/Gray-Lawford.jpg' // путь одной команды (есть карта без пути)
            // 'https://wrc2013.rogaining.ru/images/routes/Mospan-Pikulin.jpg' // путь одной команды (есть карта без пути)
            // 'https://wrc2013.rogaining.ru/images/routes/Tkachuk-Kuznecova.jpg' // путь одной команды (есть карта без пути)
            // 'https://wrc2013.rogaining.ru/images/routes/Kobets-Sokolovska-Basiuk.jpg' // путь одной команды (есть карта без пути)
        ],
        map: 'alol_rogaine_2013',
        photo: [
            'https://wrc2013.rogaining.ru/en/picture-gallery/event-photos.html',
            'https://wrc2013.rogaining.ru/en/picture-gallery/terrain-gallery.html',
            'http://www.flickr.com/photos/99643528@N03/sets/72157635447805101/',
            'http://fotki.yandex.ru/users/rogaining/album/354953/',
            'http://fotki.yandex.ru/users/wrc-2013/album/359368/',
            'http://slazav.mccme.ru/photo/20130726.htm'
            // 'https://picasaweb.google.com/100884289375420719244/201304' // недоступна
        ],
        gps: {
            'Routes-MO': 'https://wrc2013.rogaining.ru/results/teamresult_350.htm',
            'Routes-XO': 'https://wrc2013.rogaining.ru/results/teamresult_221.htm',
            'Routes-WO': 'https://wrc2013.rogaining.ru/results/teamresult_260.htm'
        },
        info: 'Единственный чемпионат мира по рогейну, проведённый в России. Абсолютные победители: Сильвер Энсаар, Райн Энсаар (Эстония). Команд — 314, участников — 664. Медали России — MO: Евгений Домбровский, Олег Калинин - 3. WO: Анна Шавлакова, Анастасия Ростовцева - 1; Марина Галкина, Нина Михеева - 2. XO: Наталья Абрамова, Андрей Шведов - 1; Артём Ростовцев, Ирина Сафронова - 2; Екатерина Кононова, Денис Куприенко - 3. MV: Вячеслав Савченко, Владимир Шпетный - 2. WV: Марина Галкина, Нина Михеева - 1. MUV: Михаил Никитин, Виктор Кравченко - 1; Владимир Иванов, Анатолий Кубарский - 3. XUV: Леонид Хоруженко, Людмила Горшкова - 1. MJ: Герман Конрад, Виталий Митрофанов - 3; Анастасия Прохорова, Антон Десятский - 3. WJ: Елена Тапилина, Анна Литвинцева - 3. XJ: Алексей Перфильев, Дарья Просвирина - 1; Алёна Курбатова, Сергей Погребняк - 2.',
        coord: [56.4727, 28.9686],
        fmt: '24',
        type: 'ROGAINE',
        start: 'WRC'
    },
    {
        id: 'IRF_20140607_1',
        date: '2014-06-07',
        endDate: '2014-06-08',
        place: 'Orava, Põlva County, Estonia (Орава, Пылвамаа, Эстония)',
        name: '11-й Чемпионат Европы по рогейну (ERC)',
        link: [
            'https://web.archive.org/web/20141021082040/http://www.erc2014.com/home/',
            'https://en.wikipedia.org/wiki/European_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_Euroopa_meistriv%C3%B5istlused',
            'https://rogaining.org/latest-news/273',
            'https://rogaining.org/latest-news/272',
            'https://rogaining.ru/news/rogaine-news/miscellaneous-news/erc2014-wv-winner-story',
            'https://web.archive.org/web/20140701054228/http://x-race.info/news/29806/',
            'https://rogaining.ru/news/rogaine-news/results-events/erc2014-results'
            // 'http://sportrec.navirec.com/ui/#19nsspp' // недоступна
        ],
        res: [
            'https://web.archive.org/web/20140702191344/http://www.erc2014.com:80/erc2014-results/',
            'https://web.archive.org/web/20140702191603/http://www.erc2014.com:80/erc2014est/wp-content/uploads/2014/06/competition/EMRogain_web_eng/web/results.htm'
            // 'http://xtsport.ee/ftp/erc2014/EMRogain_web_eng/results.htm' // недоступна
        ],
        bulletin: [
            // 'https://rogaining.org/attachments/article/220/ERC%202014%20bid%20Estonia.pdf'
            'https://rogaining.ru/download/erc2014_sport_orient.doc'
        ],
        maps: ['https://rogaining.ru/results/erc-results/erc2014/erc2014_map.jpg'],
        photo: [
            'https://web.archive.org/web/20140701074924/http://www.erc2014.com:80/photos/',
            'https://web.archive.org/web/20180828060634/http://erc2014.com/erc2014-07-06-14-harry-veide/'
        ],
        // video: 'http://www.erc2014.com/11th-european-rogaining-championships-2014-estonia-video/' // недоступна
        gps: 'https://sportrec.eu/gps/19nsspp',
        info: 'Абсолютные победители: Тиммо Таммемяэ, Райт Палло (Эстония) (все 98 КП, 358 очков); WO: Наталья Зимина, Анна Бурлинова (Россия); XO: Надежда Ермакова, Артём Ростовцев (Россия). Команд — 289, участников — 614. Медали России — WO: Наталья Зимина, Анна Бурлинова - 1; Нина Михеева, Марина Галкина - 2. XO: Надежда Ермакова, Артём Ростовцев - 1. XJ: Евгения Лошкарева, Андрей Боталов - 2; Анна Соловьева, Владислав Лемеско - 3. WV: Нина Михеева, Марина Галкина - 1. MSV: Александр Копелевич, Олег Жегусов - 2. XUV: Александр Орлов, Галина Семенова, Владимир Иванов - 2.',
        coord: [57.8878, 27.4565],
        fmt: '24, 6',
        type: 'ROGAINE',
        start: 'ERC'
    },
    {
        id: 'IRF_20140816_1',
        date: '2014-08-16',
        endDate: '2014-08-17',
        place: 'Black Hills, South Dakota, USA (Блэк-Хиллс, Южная Дакота, США)',
        name: '12-й Чемпионат мира по рогейну (WRC)',
        link: [
            'https://web.archive.org/web/20150102060631/http://peakassurance.net:80/12WRC_2014.html',
            'https://en.wikipedia.org/wiki/World_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_maailmameistriv%C3%B5istlused',
            'https://rogaining.ru/news/rogaine-news/results-events/wrc2014-results',
            'https://rogaining.ru/news/rogaine-news/announcement/wrc2014-article',
            'https://web.archive.org/web/20150108144313/http://peakassurance.net:80/Reviews.html',
            'https://web.archive.org/web/20150108144308/http://peakassurance.net:80/IRF_Release.html'
            // 'http://peakassurance.net/12WRC_2014.html' // недоступна
        ],
        res: [
            'https://web.archive.org/web/20160502082029id_/http://peakassurance.net/Results_files/12WRC2014%20Official%20Results.pdf',
            'https://web.archive.org/web/20141029032332/http://peakassurance.net:80/Results.html',
            'https://web.archive.org/web/20141009015049/http://peakassurance.net/Results_files/results.htm',
            'https://rogaining.org/world-rogaining-championships/wrc-past-results/352-12wrc-2014-south-dakota-final-results-2',
            'https://web.archive.org/web/20220519094735id_/https://www.peakassurance.net/Results_files/12WRC2014%20Provisional%20Results.pdf',
            'https://web.archive.org/web/20160426044353id_/http://peakassurance.net/Results_files/splits_v8.pdf',
            'https://web.archive.org/web/20220519074446id_/https://www.peakassurance.net/Results_files/12WRC2014_Splits.pdf',
            'https://web.archive.org/web/20161104230027/http://peakassurance.net:80/Results_files/results_1.htm'
            // 'http://peakassurance.net/Results_files/results.htm' // недоступна
        ],
        info: 'Абсолютные победители: Сильвер Энсаар, Райн Энсаар, Тиммо Таммемяе (Эстония). Команд — 180, участников — 383. Медали России — MO: Олег Калинин, Андрей Шведов - 3. WO: Нина Михеева, Марина Галкина - 1. WV: Нина Михеева, Марина Галкина - 1. MUV: Александр Лисененков, Евгений Емельянов - 3.',
        coord: [44.2274, -103.786],
        fmt: '24',
        type: 'ROGAINE',
        start: 'WRC'
    },
    {
        id: 'IRF_20150627_1',
        date: '2015-06-27',
        endDate: '2015-06-28',
        place: 'Černé Údolí, Czech Republic (Черне-Удоли, Чехия)',
        name: '12-й Чемпионат Европы по рогейну (ERC)',
        link: [
            'https://web.archive.org/web/20160117032143/http://www.erc2015.cz/',
            'https://en.wikipedia.org/wiki/European_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_Euroopa_meistriv%C3%B5istlused',
            'https://rogaining.org/latest-news/310'
            // 'http://www.erc2015.cz/' // недоступна
            // 'http://www.sport-orient.ru/uploads/2015/06/Programm-ERC-2015.pdf' // недоступна
        ],
        res: [
            'https://web.archive.org/web/20151002070025/http://www.erc2015.cz:80/results.html',
            'https://web.archive.org/web/20160406011252id_/http://www.erc2015.cz/assets/files/results/r_results_erc.pdf',
            'https://web.archive.org/web/20151105230355id_/http://www.erc2015.cz/assets/files/results/results_24.pdf'
            // 'http://www.erc2015.cz/assets/files/results/r_results_erc.pdf' // недоступна
        ],
        bulletin: [
            // 'https://web.archive.org/web/20150202175327/http://www.erc2015.cz:80/bulletin.html'
            // 'https://rogaining.org/attachments/article/265/ERC2015%20bid%20Czech%20Republic.pdf'
            'https://rogaining.ru/download/programm-erc2015-new.pdf'
        ],
        maps: [
            'https://rogaining.ru/results/erc-results/erc2015/erc2015_map.jpg',
            'https://web.archive.org/web/20150713183036id_/http://www.erc2015.cz/assets/files/documents/Map_erc2015_small.jpg'
        ],
        photo: 'https://www.facebook.com/media/set/?set=a.1029883823689503.1073741830.900874653257088&type=3',
        gps: 'http://play-map.com/event.php?id=119&lang=english',
        info: 'Абсолютные победители: Сандер Мирме, Рийво Роосе (Эстония); WO: Айва Яковеля, Алда Бразуне (Латвия); XO: Валтерс Каминскис, Анита Лиепиня (Латвия). Команд — 238, участников — 492. Медали России — WO: Марина Галкина, Нина Михеева - 2. XO: Константин Иванов, Наталья Зимина - 2. MV: Олег Калинин, Сергей Ященко - 3. WV: Марина Галкина, Нина Михеева - 1; Юлия Давыдова, Татьяна Сехина - 3. MSV: Игорь Комин, Александр Копелевич, Олег Жегусов - 1. MUV: Владимир Иванов, Александр Орлов - 1; Николай Касаткин, Александр Лисененков, Вячеслав Слепов - 2. XUV: Иван Казанцев, Алина Казанцева - 2.',
        coord: [48.6973, 14.6719],
        fmt: '24, 12, 6',
        type: 'ROGAINE',
        start: 'ERC'
    },
    {
        id: 'IRF_20150822_1',
        date: '2015-08-22',
        endDate: '2015-08-23',
        place: 'Saariselkä, Lapland, Finland (Саариселькя, Лапландия, Финляндия)',
        name: '13-й Чемпионат мира по рогейну (WRC)',
        link: [
            'http://wrc2015.rogaining.fi/',
            'https://en.wikipedia.org/wiki/World_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_maailmameistriv%C3%B5istlused',
            'https://rogaining.ru/news/rogaine-news/results-events/wrc2015-results',
            'https://rogaining.ru/news/rogaine-news/results-events/wrc2015-team28',
            'https://kuzmolovo110.livejournal.com/31250.html',
            'http://www.rogaining.fi/2015/08/preliminary-results-of-13wrc2015/',
            'http://wrc2015.rogaining.fi/message-from-course-setter.html'
            // 'http://sport-orient.ru/uploads/2015/08/Programm-WRC-2015.pdf' // недоступна
        ],
        res: [
            'http://wrc2015.rogaining.fi/files/theme/wrc/results.htm',
            'http://wrc2015.rogaining.fi/results.html',
            'https://rogaining.org/world-rogaining-championships/wrc-past-results/313-preliminary-results-gps-13wrc-2015-finland',
            'http://wrc2015.rogaining.fi/files/theme/wrc/splits.htm',
            'http://wrc2015.rogaining.fi/files/theme/wrc/stat_controls.htm',
            'http://wrc2015.rogaining.fi/files/theme/stat/Rogain_IOFxml3.xml'
        ],
        bulletin: [
            // 'http://wrc2015.rogaining.fi/invitation-22-2382015.html'
            // 'http://wrc2015.rogaining.fi/bulletin-1.html'
            // 'http://wrc2015.rogaining.fi/bulletin-2.html'
            // 'http://wrc2015.rogaining.fi/bulletin-3.html'
            // 'http://wrc2015.rogaining.fi/bulletin-4.html'
            'http://wrc2015.rogaining.fi/bulletin-5.html'
        ],
        maps: ['https://rogaining.ru/results/wrc-results/wrc2015/wrc2015_map.pdf'],
        gps: {
            'GPS-seuranta': 'http://www.tulospalvelu.fi/gps/20150822wrc/',
            'RouteGadget': 'http://route.rogaining.fi/cgi-bin/reitti.cgi?act=map&id=10'
        },
        info: 'Абсолютные победители: Петтэри Муукконен, Ханну-Пекка Пукема (Финляндия). Команд — 374, участников — 785. Медали России — WO: Анна Шавлакова, Наталья Абрамова - 1; Анастасия Галитарова, Ирина Сафронова - 2. XO: Константин Иванов, Наталья Зимина - 1. MV: Олег Калинин, Андрей Шведов - 2. MSV: Игорь Комин, Олег Жегусов - 2; Михаил Лукин, Игорь Чернышов - 3. WUV: Галина Семёнова, Людмила Горшкова - 3. XY: Андрей Боталов, Евгения Лошкарева - 3.',
        coord: [68.3457, 27.4629],
        fmt: '24',
        type: 'ROGAINE',
        start: 'WRC'
    },
    {
        id: 'IRF_20160723_1',
        date: '2016-07-23',
        endDate: '2016-07-24',
        place: 'Alice Springs, Northern Territory, Australia (Алис-Спрингс, Австралия)',
        name: '14-й Чемпионат мира по рогейну (WRC)',
        link: [
            'https://web.archive.org/web/20161215110024/http://www.worldrogainingchamps.com.au/',
            'https://en.wikipedia.org/wiki/World_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_maailmameistriv%C3%B5istlused',
            'https://rogaining.ru/news/wrc2016-results',
            'https://rogaining.ru/news/wrc2016-story',
            'https://rogaining.ru/rogaine/about-rogaine/wrc2016-galkina',
            'https://www.abc.net.au/news/2016-07-23/world-rogaining-championship-attracts-international-competitors/7655260',
            'https://web.archive.org/web/20170218003528id_/http://worldrogainingchamps.com.au/docs/WRC2016_Orienteering_North_America_article.pdf'
            // 'http://www.worldrogainingchamps.com.au/' // недоступна
            // 'http://vra.rogaine.asn.au/wrc2016/docs/RedCentreRogaine_LR.pdf' // недоступна
        ],
        res: [
            'https://act.rogaine.asn.au/navlight/ARA/WRC2016/html/results.html',
            'https://act.rogaine.asn.au/navlight/ARA/WRC2016/html/catresults.html',
            'https://act.rogaine.asn.au/navlight/ARA/WRC2016/html/',
            'https://rogaining.org/world-rogaining-championships/wrc-past-results/380-14th-world-rogaining-championships-ross-river-northern-territory-australia',
            'https://rogaining.com.au/results/wrc-results/14th-world-championship-2016-results'
        ],
        bulletin: 'https://web.archive.org/web/20170301173523id_/http://vra.rogaine.asn.au/wrc2016/docs/14WRC2016_Spinifex_Bulletin.pdf',
        maps: [
            'https://web.archive.org/web/20160804152824id_/http://vra.rogaine.asn.au:80/wrc2016/docs/RedCentreRogaine_LR.pdf',
            'https://web.archive.org/web/20170218004348id_/http://worldrogainingchamps.com.au/docs/full-25K-print.pdf',
            'https://web.archive.org/web/20160803223049id_/http://vra.rogaine.asn.au:80/wrc2016/docs/Map_withImages_LR.pdf',
            'https://rogaining.ru/images/stories/articles/wrc2016/map1.jpg',
            'https://rogaining.ru/images/stories/articles/wrc2016/map2.jpg',
            'https://rogaining.ru/images/stories/articles/wrc2016/map_route.jpg'
            // 'https://web.archive.org/web/20161116200916/http://www.worldrogainingchamps.com.au:80/index.php/event/news/84-news/218-wrc2016-event-map' // страница, не файл карты
            // 'https://web.archive.org/web/20170301171003id_/http://vra.rogaine.asn.au/wrc2016/docs/CP_Coordinates_WRC_Course_Final.pdf' // страница, не файл карты
        ],
        photo: [
            'https://www.flickr.com/photos/143442848@N02/albums/with/72157671826511395',
            'https://web.archive.org/web/20170218003135/http://worldrogainingchamps.com.au/index.php/event/news/84-news/224-media'
        ],
        video: [
            'https://www.youtube.com/watch?v=uKZ9BBV4YLg',
            'https://www.youtube.com/watch?v=j_uQr-HGnOs'
        ],
        gps: 'https://act.rogaine.asn.au/navlight/ARA/WRC2016/html/event.kml',
        info: 'Абсолютные победители: Грейг Гамильтон, Крис Форн (Новая Зеландия). Команд — 304, участников — 647. Медали России — MO: Олег Калинин, Андрей Шведов - 3. WO: Нина Михеева, Марина Галкина - 3. MV: Олег Калинин, Андрей Шведов - 1. WV: Нина Михеева, Марина Галкина - 1.',
        coord: [-23.5931, 134.4941],
        fmt: '24',
        type: 'ROGAINE',
        start: 'WRC'
    },
    {
        id: 'IRF_20160827_1',
        date: '2016-08-27',
        endDate: '2016-08-28',
        place: 'Albi, Aralar, Navarre, Spain (Альби, Аралар, Наварра, Испания)',
        name: '13-й Чемпионат Европы по рогейну (ERC)',
        link: [
            'https://web.archive.org/web/20161220073839/http://www.erc2016.com/',
            'https://en.wikipedia.org/wiki/European_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_Euroopa_meistriv%C3%B5istlused',
            'https://rogaining.org/latest-news/325',
            'https://rogaining.org/latest-news/299',
            'https://rogaining.ru/news/erc2016-results'
            // 'http://www.erc2016.com/' // недоступна
        ],
        res: [
            'https://rogaining.ru/results/erc-results/erc2016/erc2016_results.pdf',
            'https://web.archive.org/web/20160904112851/http://www.erc2016.com:80/wordpress/en/final-results-24h-erc-iberogaine-and-efrc/',
            'https://web.archive.org/web/20160909204201id_/http://www.erc2016.com:80/wordpress/wp-content/uploads/2016/09/Absolut-results_ERC24H-ARALAR-oficial.pdf',
            'https://web.archive.org/web/20161219080146/http://www.erc2016.com/wordpress/en/splits-punching-time/',
            'https://web.archive.org/web/20161219045620/http://www.erc2016.com/wordpress/en/final-results-sportident/'
            // 'http://www.erc2016.com/wordpress/en/final-results-24h-erc-iberogaine-and-efrc/' // недоступна
        ],
        bulletin: [
            // 'https://web.archive.org/web/20160609202418id_/http://www.erc2016.com/wordpress/wp-content/uploads/2015/12/ERC_2016_Bulletin1_web1.pdf'
            // 'https://web.archive.org/web/20160325105435id_/http://www.erc2016.com/wordpress/wp-content/uploads/2016/03/ERC_2016_Bulletin2_web.pdf'
            // 'https://web.archive.org/web/20160509051405id_/http://www.erc2016.com:80/wordpress/wp-content/uploads/2016/05/ERC_2016_Bulletin3_web.pdf'
            // 'https://web.archive.org/web/20161219024438id_/http://www.erc2016.com/wordpress/wp-content/uploads/2016/07/ERC_2016_Bulletin4_web-1.pdf'
            'https://web.archive.org/web/20160910033611id_/http://www.erc2016.com:80/wordpress/wp-content/uploads/2016/08/ERC_2016_Bulletin5_web.pdf'
        ],
        maps: [
            'https://rogaining.ru/results/erc-results/erc2016/erc2016_map.jpg',
            'https://web.archive.org/web/20161015121831id_/http://www.erc2016.com/wordpress/wp-content/uploads/2016/08/13th-ERC-Aralar-Spain_web_150.jpg'
            // 'https://web.archive.org/web/20161017161327/http://www.erc2016.com/wordpress/en/erc-maps/' // страница, не файл карты
        ],
        photo: [
            'https://goo.gl/photos/4XZQqmNQ6Z1xgS6y5',
            'https://goo.gl/photos/bVpBNCmbNGGSXkDV8',
            'https://goo.gl/photos/QaxxXkpavcH5eg4p7',
            'https://goo.gl/photos/B4AtBsyFtmirwYsF7',
            'https://goo.gl/photos/87ZSM2EgfDJUSFNF6',
            'https://goo.gl/photos/qJNffY9DQmKjnj48A',
            'https://goo.gl/photos/Ha1yLv1c279MzDQN8',
            'https://goo.gl/photos/cUQc5qUGhNFGGaYj6',
            'https://goo.gl/photos/cw6J4AHp2779vVZ66',
            'https://web.archive.org/web/20161105234219/http://www.erc2016.com:80/wordpress/en/xiiith-erc-2016-aralar-photos/'
        ],
        gps: {
            'TrackTheRace ERC 24h': 'https://tracktherace.com/en/erc-aralar-2016-erc-24h/classification',
            'Live track page': 'https://web.archive.org/web/20161017100325/http://www.erc2016.com/wordpress/en/live-track-erc-teams/'
        },
        info: 'Абсолютные победители: Радован Чех, Роман Хорына (Чехия); WO: Элери Хирв, Марианн Сулг (Эстония); XO: Ирита Пуките, Гунтарс Манкус (Латвия). Команд — 198, участников — 438. Медали России — WO: Нина Михеева, Марина Галкина - 2. XY: Андрей Боталов, Евгения Лошкарёва - 2. MV: Александр Тонис, Вячеслав Савченко - 2. WV: Нина Михеева, Марина Галкина - 1; Юлия Давыдова, Татьяна Сехина - 3. XV: Ирина Сафонова, Александр Сафонов, Александр Халяпин - 2; Анна Бойко, Владимир Гусятников - 3. MUV: Евгений Емельянов, Александр Лисененков - 2. XUV: Александр Орлов, Галина Семёнова - 1.',
        coord: [42.9627, -1.9949],
        fmt: '24, 6',
        type: 'ROGAINE',
        start: 'ERC'
    },
    {
        id: 'IRF_20170422_1',
        date: '2017-04-22',
        endDate: '2017-04-23',
        place: 'San Gimignano, Tuscany, Italy (Сан-Джиминьяно, Тоскана, Италия)',
        name: '14-й Чемпионат Европы по рогейну (ERC)',
        link: [
            'http://rogaining.it/',
            'https://web.archive.org/web/20171022111547/http://rogaining.it:80/',
            'https://en.wikipedia.org/wiki/European_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_Euroopa_meistriv%C3%B5istlused',
            'https://rogaining.org/latest-news/321',
            'https://rogaining.ru/news/erc2017-results'
            // 'http://rogaining.it/images/Meiting/Risultati/Finale_x_stampa_mio_bassa.jpg' // недоступна
            // 'http://rogaining.it/images/BULLETIN_1_16.pdf' // недоступна
            // 'http://rogaining.it/index.php/me-it-ing/new-layouts-2/risultati-meiting/303-classifiche.html' // недоступна
        ],
        res: [
            'https://rogaining.org/attachments/article/321/ERC2017%20results%20short.pdf',
            'https://web.archive.org/web/20170516211133id_/http://rogaining.org:80/attachments/article/330/ERC2017%20results%20short.pdf',
            'https://web.archive.org/web/20170517031027id_/http://rogaining.it:80/images/Meiting/Risultati/classifiche_corrette.pdf',
            'https://web.archive.org/web/20170519055305id_/http://rogaining.it:80/images/Meiting/Risultati/split.pdf'
            // 'http://rogaining.org/attachments/article/330/ERC2017%20results%20short.pdf' // недоступна
        ],
        bulletin: [
            // 'https://web.archive.org/web/20170506030344id_/http://www.rogaining.it:80/images/BULLETIN_4.pdf'
            'https://web.archive.org/web/20170506030350id_/http://www.rogaining.it:80/images/BULLETIN_5_ultimo.pdf'
        ],
        maps: ['https://web.archive.org/web/20170505174811id_/http://rogaining.it:80/images/Meiting/Risultati/Finale_x_stampa_mio_bassa.pdf'],
        info: 'Абсолютные победители: Альберт Эрреро, Аурелио Оливар (Испания); WO: Полина Захарова, Екатерина Дзема (Украина); XO: Мари Касевяли, Тоомас Маранди (Эстония). Команд — 139, участников — 296. Медали России — WO: Наталья Абрамова, Марина Галкина - 2. XO: Александр Тонис, Наталья Зимина - 3. MY: Давид Френклах, Кирилл Казарновский - 2. WV: Наталья Абрамова, Марина Галкина - 1. MSV: Александр Копелевич, Сергей Черкесов - 1. WSV: Елена Лисененкова, Лариса Успенская, Зоя Молоткова - 2. XSV: Игорь Комин, Анна Бойко - 3.',
        coord: [43.454, 11.054],
        fmt: '24',
        type: 'ROGAINE',
        start: 'ERC'
    },
    {
        id: 'IRF_20170818_1',
        date: '2017-08-18',
        endDate: '2017-08-19',
        place: 'Rāzna National Park, Latvia (нац. парк Разна, Латвия)',
        name: '15-й Чемпионат мира по рогейну (WRC)',
        link: [
            'http://wrc2017.rogaining.lv/en/',
            'https://web.archive.org/web/20180122210037/http://wrc2017.rogaining.lv:80/en/?kat=bulletins&ucat=7',
            'https://en.wikipedia.org/wiki/World_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_maailmameistriv%C3%B5istlused',
            'https://rogaining.ru/news/wrc2017-results',
            'https://rogaining.ru/news/wrc2017-galkina-mikheeva',
            'https://nswrogaining.org/?p=284'
        ],
        res: [
            'http://wrc2017.rogaining.lv/results/',
            'https://rogaining.org/world-rogaining-championships/wrc-past-results/381-15th-world-rogaining-championships-razna-national-park-latvia-2017',
            'http://wrc2017.rogaining.lv/results/splits/673.html'
            // 'https://pqe.rogaining.org/events/wrc2017/results' // недоступна
        ],
        bulletin: 'https://web.archive.org/web/20191018133532id_/http://wrc2017.rogaining.lv/dokumenti/WRC2017_Bulletin_2.pdf',
        maps: ['http://wrc2017.rogaining.lv/dokumenti/wrc2017_map.jpg'],
        video: 'https://youtu.be/U9I_SksBDAM',
        gps: {
            'GPX': 'http://wrc2017.rogaining.lv/results/',
            'GPS': 'https://web.archive.org/web/20170908105004id_/http://wrc2017.rogaining.lv:80/dokumenti/GPS_teams2.pdf'
        },
        info: 'Абсолютные победители: Янис Круминьш, Андрис Ансабергс (Латвия). Команд — 426, участников — 907. Медали России — WO: Нина Михеева, Марина Галкина - 1; Анна Бурлинова, Мария Пляшечко - 3. XO: Анна Коробко, Сергей Мирошкин, Дмитрий Шемятихин - 2. MV: Сергей Ященко, Олег Калинин - 1. WV: Нина Михеева, Марина Галкина - 1. XV: Владимир Михайлов, Валентина Михайлова - 2. XUV: Александр Орлов, Юрий Векшин, Галина Семёнова - 2.',
        coord: [56.2361, 27.5081],
        fmt: '24',
        type: 'ROGAINE',
        start: 'WRC'
    },
    {
        id: 'IRF_20180825_1',
        date: '2018-08-25',
        endDate: '2018-08-26',
        place: 'Berehomet, Chernivtsi Oblast, Ukraine (Берегомет, Черновицкая обл., Украина)',
        name: '15-й Чемпионат Европы по рогейну (ERC)',
        link: [
            'https://web.archive.org/web/20181117110539/http://erc2018.com:80/en',
            'https://en.wikipedia.org/wiki/European_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_Euroopa_meistriv%C3%B5istlused',
            'https://rogaining.org/latest-news/323',
            'https://rogaining.ru/news/rrf-news/erc2018-results'
            // 'http://erc2018.com/en' // недоступна
        ],
        res: [
            'https://web.archive.org/web/20181116173542id_/http://erc2018.com/sites/default/files/documents/ERC2018%20Results.pdf',
            'https://web.archive.org/web/20180902104850/http://erc2018.com:80/en/results',
            'https://web.archive.org/web/20180920163439id_/http://erc2018.com:80/sites/default/files/documents/ERC2018_5.pdf'
            // 'http://www.rogaining.org.ua/images/stories/380%20rezultaty%20ERC2018.pdf' // недоступна
        ],
        bulletin: [
            // 'https://web.archive.org/web/20180219034800id_/http://erc2018.com:80/sites/default/files/documents/%D0%91%D1%8E%D0%BB%D0%BB%D0%B5%D1%82%D0%B5%D0%BD%D1%8C%201.pdf'
            'https://web.archive.org/web/20180714134449id_/http://www.erc2018.com:80/sites/default/files/documents/%D0%91%D1%8E%D0%BB%D0%B5%D1%82%D0%B5%D0%BD%D1%8C%201%D0%90_0.pdf'
        ],
        // maps: 'http://www.rogaining.org.ua/images/380%20karta.jpg' // недоступна
        photo: 'https://web.archive.org/web/20180902104800/http://erc2018.com:80/en/gallery',
        info: 'Абсолютные победители: Тиммо Таммемяэ, Сандер Линнус (Эстония); WO: Пийбе Таммемяэ, Элери Хирв (Эстония); XO: Ирина Войтович, Тарас Мельник, Артём Слотин (Украина). Команд — 129, участников — 275. Медали России — WSV: Ольга Лавринович, Галина Хоруженко - 3. XSV: Сергей Черкесов, Игорь Комин, Анна Бойко - 1. WUV: Ольга Лавринович, Галина Хоруженко - 1.',
        coord: [48.1662, 25.332463],
        fmt: '24',
        type: 'ROGAINE',
        start: 'ERC'
    },
    {
        id: 'IRF_20190727_1',
        date: '2019-07-27',
        endDate: '2019-07-28',
        place: 'La Molina, Catalonia, Spain (Ла-Молина, Каталония, Испания)',
        name: '16-й Чемпионат мира по рогейну (WRC)',
        link: [
            'https://web.archive.org/web/20190731044452/https://www.wrc2019.cat/en/',
            'https://en.wikipedia.org/wiki/World_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_maailmameistriv%C3%B5istlused',
            'https://rogaining.ru/news/rrf-news/wrc2019-results'
            // 'https://www.wrc2019.cat/en/' // недоступна
        ],
        res: [
            'https://rogaining.ru/results/wrc-results/wrc2019/wrc2019_results.pdf',
            'https://web.archive.org/web/20190923075513id_/https://www.wrc2019.cat/wp-content/uploads/2019/08/Results-WRC19_02_08_2019.pdf',
            'https://rogaine-results.com/event/results/2019/world-rogaine-champs',
            'https://rogaining.org/world-rogaining-championships/wrc-past-results/359-16th-world-rogaining-championships-la-molina-spain-2019'
            // 'https://www.wrc2019.cat/wp-content/uploads/2019/08/Results-WRC19_02_08_2019.pdf' // недоступна
        ],
        bulletin: [
            // 'https://web.archive.org/web/20191206211144/https://www.wrc2019.cat/en/bulletins/'
            'https://web.archive.org/web/20230324183739/https://www.wrc2019.cat/en/bulletins-4/'
        ],
        maps: [
            'https://rogaining.ru/results/wrc-results/wrc2019/wrc2019_map.jpg',
            'https://rogaine-results.com/2019/world-rogaine-champs/map.jpg'
            // 'https://web.archive.org/web/20230324183950/https://www.wrc2019.cat/en/terrain-and-map/' // страница, не файл карты
        ],
        photo: 'https://web.archive.org/web/20230324200744/https://www.wrc2019.cat/en/images-2/',
        gps: {
            'Tracktherace': 'https://tracktherace.com/en/world-rogaining-championship-2019/',
            'PlayMap': 'https://play-map.com/event?id=347',
            'rogaine-results': 'https://rogaine-results.com/event/results/2019/world-rogaine-champs'
        },
        info: 'Абсолютные победители: Рэйн Сеепылд, Тиммо Таммемяе (Эстония). Команд — 386, участников — 833. Медали России — WO: Анна Бурлинова, Мария Пляшечко - 1; Нина Михеева, Марина Галкина - 3. XO: Константин Иванов, Дмитрий Панов, Анна Коробко - 3. MV: Олег Калинин, Сергей Константинов - 2. WV: Нина Михеева, Марина Галкина - 1. XSV: Александр Кротков, Ольга Соколова - 3. WUV: Людмила Горшкова, Ольга Лавринович, Надежда Попова (США) - 2.',
        coord: [42.3322, 1.9394],
        fmt: '24, 6',
        type: 'ROGAINE',
        start: 'WRC'
    },
    {
        id: 'IRF_20200822_1',
        date: '2020-08-22',
        endDate: '2020-08-23',
        place: 'Milzkalns, Tukums, Latvia (Милзкалнс, Тукумс, Латвия)',
        name: '16-й Чемпионат Европы по рогейну (ERC)',
        link: [
            'https://www.rogaining.lv/erc2020.lv/',
            'https://web.archive.org/web/20210128115355/https://erc2020.lv/',
            'https://en.wikipedia.org/wiki/European_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_Euroopa_meistriv%C3%B5istlused',
            'https://rogaining.ru/rogaine/about-rogaine/erc2020-kalinin',
            'https://rogaining.ru/news/rrf-news/erc2020-winners'
            // 'https://www.erc2020.lv/' // недоступна
            // 'https://failiem.lv/u/zh5rv873' // недоступна
            // 'https://failiem.lv/u/zz7u49sy' // недоступна
            // 'https://failiem.lv/u/atnr5mwz' // недоступна
            // 'https://failiem.lv/u/4qj5df2d' // недоступна
        ],
        res: [
            'https://www.rogaining.lv/erc2020.lv/results/Final_ERC2020/results.htm',
            'https://www.rogaining.lv/erc2020.lv/results/Final_6H/results.htm'
            // 'https://www.erc2020.lv/results/Final_ERC2020/results.htm' // недоступна
        ],
        bulletin: [
            // 'https://www.rogaining.lv/erc2020.lv/augsuplades/files/bul/Bulletin_2.pdf'
            // 'https://www.rogaining.lv/erc2020.lv/augsuplades/files/bul/Bulletin_3.pdf'
            // 'https://www.rogaining.lv/erc2020.lv/augsuplades/files/bul/Bulletin_4.pdf'
            // 'https://www.rogaining.lv/erc2020.lv/augsuplades/files/Pre-start%20information_en.pdf'
            'https://www.rogaining.lv/erc2020.lv/augsuplades/files/Map_descriptions.pdf'
        ],
        maps: [
            'https://www.rogaining.lv/erc2020.lv/img/ERC2020.gif',
            'https://rogaining.ru/results/erc-results/erc2020/erc2020_map.gif'
        ],
        photo: [
            'https://www.facebook.com/16erc2020/',
            'https://www.facebook.com/pg/16erc2020/photos/?tab=album&album_id=308483323915354'
        ],
        video: [
            'https://www.facebook.com/watch/?v=450751545881509',
            'https://www.facebook.com/watch/?v=306282907357137',
            'https://www.facebook.com/watch/?v=644845983082473',
            'https://www.facebook.com/watch/?v=993205707787861'
        ],
        gps: {
            'GPX': 'https://www.rogaining.lv/erc2020.lv/gpx/',
            'Sportrec-M': 'https://sportrec.eu/gps/1fjik9s',
            'Sportrec-X': 'https://sportrec.eu/gps/1fjikiu',
            'Sportrec-W': 'https://sportrec.eu/gps/1fjikjb'
        },
        info: 'Перенесён с 6–7 июня из-за COVID-19; из России смогла приехать одна команда. Абсолютные победители: Тиммо Таммемяэ, Сандер Линнус (Эстония); WO: Пийбе Таммемяэ, Ханнула-Катрин Пандис (Эстония); XO: Наталья Зимина, Игорь Манжай, Олег Калинин (Россия). Команд — 245, участников — 518. Медали России — XO: Наталья Зимина, Игорь Манжай, Олег Калинин - 1.',
        coord: [57.00146, 23.20794],
        fmt: '24, 6',
        type: 'ROGAINE',
        start: 'ERC'
    },
    {
        id: 'IRF_20210904_1',
        date: '2021-09-04',
        endDate: '2021-09-05',
        place: 'Otepää, Estonia (Отепя, Эстония)',
        name: '17-й Чемпионат Европы по рогейну (ERC)',
        link: [
            'https://seiklushunt.ee/erc21/',
            'https://en.wikipedia.org/wiki/European_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_Euroopa_meistriv%C3%B5istlused',
            'https://rogaining.ru/news/rrf-news/erc2021-results',
            'https://seiklushunt.ee/eestlased-korraldasid-kodusel-rogaini-em-il-auhinnalaua-suurpuhastuse/',
            'https://seiklushunt.ee/erc21-vetters-comments/'
            // 'https://seiklushunt.ee/uritus/erc21/' // недоступна
        ],
        res: [
            'https://seiklushunt.ee/wp-content/uploads/2021/09/results24h-1.htm',
            'https://seiklushunt.ee/erc21-official-results/',
            'http://www.seiklushunt.ee/wp-content/uploads/2021/09/6htulemused-1.htm',
            'https://seiklushunt.ee/wp-content/uploads/2021/09/web/results.htm'
        ],
        bulletin: [
            // 'https://seiklushunt.ee/wp-content/uploads/2021/02/Bulletin1-17th-European-Rogaining-Championships.pdf'
            // 'https://seiklushunt.ee/wp-content/uploads/2021/08/Bulletin2-17th-European-Rogaining-Championships.pdf'
            'https://seiklushunt.ee/wp-content/uploads/2021/09/Bulletin3-17th-European-Rogaining-Championships.pdf'
        ],
        maps: [
            'https://seiklushunt.ee/wp-content/uploads/2021/09/erc21_map_fin_full.jpg',
            'https://rogaining.ru/results/erc-results/erc2021/erc2021_map.jpg'
            // 'https://seiklushunt.ee/erc21-map-extra-info/' // страница, не файл карты
        ],
        photo: [
            'https://flic.kr/s/aHsmWzvGDo',
            'https://flic.kr/s/aHsmWEuswB',
            'https://drive.google.com/drive/folders/1nEixbuMI65CLk32U0kINZaX572br7yl_?usp=sharing',
            'https://commons.wikimedia.org/wiki/File:ERC2021_WO.jpg'
        ],
        video: [
            'https://youtu.be/oa9eV2f4ppE',
            'https://www.facebook.com/seiklushunt.ee/videos/384524303258119'
        ],
        gps: {
            'Sportrec-M': 'https://sportrec.eu/gps/1gi9l14',
            'Sportrec-X': 'https://sportrec.eu/gps/1gih9qs',
            'Sportrec-W': 'https://sportrec.eu/gps/1gih9ra',
            'Tracking/lives page': 'https://seiklushunt.ee/erc21-tracking-lives/',
            'GPX-M': 'https://seiklushunt.ee/wp-content/uploads/2021/09/men.zip',
            'GPX-W': 'https://seiklushunt.ee/wp-content/uploads/2021/09/women.zip',
            'GPX-X': 'https://seiklushunt.ee/wp-content/uploads/2021/09/mixed.zip'
        },
        info: 'Абсолютные победители: Тиммо Таммемяэ, Сандер Линнус (Эстония); WO: Пийбе Таммемяэ, Ханнула-Катрин Пандис (Эстония); XO: Айн Фёдоров, Рида Туула-Фёдоров (Эстония). Команд — 224, участников — 471. Россия: медалей нет (лучшие: XO - Екатерина Меньшова, Сергей Пикуз - 6 место; WV - Нина Михеева, Елена Руденко - 9; MV - Вячеслав Савченко (с Андреем Шпаком, UKR) - 25).',
        coord: [58.054, 26.5031],
        fmt: '24, 6',
        type: 'ROGAINE',
        start: 'ERC'
    },
    {
        id: 'IRF_20220528_1',
        date: '2022-05-28',
        endDate: '2022-05-29',
        place: 'Zerkalny, Leningrad Oblast, Russia (Зеркальный, Ленинградская обл., Россия)',
        region: 'SPB',
        name: '18-й Чемпионат Европы по рогейну (ERC)',
        link: [
            'https://web.archive.org/web/20211209010324/https://rogaining.site/en/',
            'https://en.wikipedia.org/wiki/European_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_Euroopa_meistriv%C3%B5istlused',
            'https://web.archive.org/web/20220121225948/https://rogaining.site/en/news/european-rogaining.html',
            'https://web.archive.org/web/20220121230029/https://rogaining.site/en/news/competition-center.html',
            'https://web.archive.org/web/20220526183033/https://rogaining.site/en/news/erc-2022-in-russia-is-cancelled.html',
            'https://rogaining.org/latest-news/348',
            'https://rogaining.ru/news/rrf-news/irf-news-2022',
            'https://rogaining.ru/news/rrf-news/rrcup2022',
            'https://t.me/rogainomania/1654'
            // 'https://rogaining.site/' // недоступна
            // 'https://rogaining.site/en/news/erc-2022-in-russia-is-cancelled.html' // недоступна
        ],
        bulletin: 'https://web.archive.org/web/20220121231835/https://rogaining.site/en/rules/newsletter.html',
        info: 'Отменён 13.03.2022. В те же дни на той же базе прошёл фестиваль «Зеркальный-2022»: 2-й Кубок России по рогейну и 6-й Чемпионат России по рогейну на велосипедах.',
        coord: [60.245538, 29.12945],
        fmt: '24',
        type: 'ROGAINE',
        start: 'ERC',
        cancelled: true
    },
    {
        id: 'IRF_20220826_1',
        date: '2022-08-26',
        endDate: '2022-08-27',
        place: 'Paprsek, Králický Sněžník, Czech Republic (Папршек, Кралицки-Снежник, Чехия)',
        name: '17-й Чемпионат мира по рогейну (WRC)',
        link: [
            'https://web.archive.org/web/20221007191820/https://wrc2022.rogaining.cz/',
            'https://en.wikipedia.org/wiki/World_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_maailmameistriv%C3%B5istlused',
            'https://rogaining.ru/news/rrf-news/wrc-2022',
            'https://www.rogaining.com/latest-news/350-17th-world-rogaining-championships-2022-results'
            // 'https://wrc2022.rogaining.cz/en/' // недоступна
            // 'https://wrc2022.rogaining.cz/live-centrum/' // недоступна
        ],
        res: [
            'https://wrc2022.rogaining.cz/wp-content/uploads/2022/09/24h-1.pdf',
            'https://wrc2022.rogaining.cz/wp-content/uploads/2022/08/24h-1.pdf',
            'https://rogaining.org/world-rogaining-championships/wrc-past-results/382-17th-world-rogaining-championships-paprsek-czech-republic',
            'https://web.archive.org/web/20220929180121/https://wrc2022.rogaining.cz/splits/'
        ],
        bulletin: [
            // 'https://web.archive.org/web/20220120081322id_/https://wrc2022.rogaining.cz/files/Bulletin_1_EN_2022.pdf'
            'https://wrc2022.rogaining.cz/wp-content/uploads/2022/05/Bulletin_2_CS_2022_edit.pdf'
        ],
        maps: [
            'https://play-map.com/images/wrc2022-trat-clean.kmz.220820110812.jpg'
            // 'https://web.archive.org/web/20220929181631/https://wrc2022.rogaining.cz/maps/' // страница, не файл карты
        ],
        photo: 'https://eu.zonerama.com/Hanaorienteering/Album/8822204',
        gps: {
            'follow.me.cz': 'https://en.follow.me.cz/tracking-en/?race_id=316&lang=en_GB',
            'PlayMap': 'https://play-map.com/event?id=736&lang=english',
            'Live centrum': 'https://web.archive.org/web/20220825130543/https://wrc2022.rogaining.cz/live-centrum/'
        },
        info: 'Команды из России и Беларуси не допускались (решение IRF). Абсолютные победители: Альберт Эрреро Касас, Андрис Ансабергс (Испания, Латвия). Команд — 257, участников — 545.',
        coord: [50.2101, 16.9889],
        fmt: '24, 6',
        type: 'ROGAINE',
        start: 'WRC'
    },
    {
        id: 'IRF_20230729_1',
        date: '2023-07-29',
        endDate: '2023-07-30',
        place: 'Lake Tahoe, California, USA (озеро Тахо, Калифорния, США)',
        name: '18-й Чемпионат мира по рогейну (WRC)',
        link: [
            'https://cal-o-fest.com/stage_10',
            'https://cal-o-fest.com/',
            'https://www.wrc2020.com/',
            'https://en.wikipedia.org/wiki/World_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_maailmameistriv%C3%B5istlused',
            'https://rogaining.ru/news/rrf-news/18wrc2023',
            'https://rogaining.ru/news/rrf-news/wrc2023',
            'https://rogaining.ru/news/rrf-news/wrc-2020-2021-2023'
        ],
        res: [
            'https://cal-o-fest.com/results?stage=10&display=class',
            'https://rogaine-results.com/event/results/2023/world-rogaine-championships/24hr',
            'https://rogaining.org/world-rogaining-championships/wrc-past-results/357-18th-world-rogaining-championships-northstar-california-usa-2023',
            'https://rogaining.org/world-rogaining-championships?view=article&id=354:18th-world-champs-2023-results&catid=12'
        ],
        bulletin: [
            // 'https://cal-o-fest.com/public/docs/Bulletin_1_Final.pdf'
            // 'https://cal-o-fest.com/public/docs/Bulletin_2_Final.pdf'
            // 'https://cal-o-fest.com/public/docs/Bulletin_3_Final.pdf'
            // 'https://cal-o-fest.com/public/docs/Bulletin%204.pdf'
            'https://cal-o-fest.com/public/docs/Stage%2010%20Notes.pdf'
        ],
        maps: ['https://rogaine-results.com/2023/world-rogaine-championships/24hr/map.jpg'],
        gps: {
            'Live tracking': 'https://live.enabledtracking.com/narc2023/',
            'rogaine-results': 'https://rogaine-results.com/2023/world-rogaine-championships/24hr/googleEarth.kmz'
        },
        info: 'Перенесён с 2020 года из-за COVID-19. Команды из России и Беларуси не допускались (решение IRF). Абсолютные победители: Сандер Линнус, Тиммо Таммемяе (Эстония). Команд — 134, участников — 277.',
        coord: [39.2767, -120.1213],
        fmt: '24, 4',
        type: 'ROGAINE',
        start: 'WRC'
    },
    {
        id: 'IRF_20230909_1',
        date: '2023-09-09',
        endDate: '2023-09-10',
        place: 'Pöytyä, Finland (Пёютя, Финляндия)',
        name: '19-й Чемпионат Европы по рогейну (ERC)',
        link: [
            'https://www.tume.fi/erc2023/',
            'https://en.wikipedia.org/wiki/European_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_Euroopa_meistriv%C3%B5istlused',
            'https://rogaining.ru/news/rrf-news/19erc2023',
            'https://www.tume.fi/erc2023/blog.competitors',
            'https://www.tume.fi/erc2023/blog',
            'https://sport.err.ee/1609117580/maailmameistrid-tammemae-ja-linnus-meil-on-esimesest-korrast-klappinud'
        ],
        res: [
            'https://www.tume.fi/erc2023/results',
            'https://www.tume.fi/erc2023/resultservice',
            'https://www.tume.fi/erc2023/splittimes'
        ],
        bulletin: [
            // 'https://www.tume.fi/erc2023/ERC2023_Flyer_V2.pdf'
            // 'https://www.tume.fi/erc2023/ERC2023_Bulletin1_V2.pdf'
            // 'https://www.tume.fi/erc2023/ERC2023_Bulletin2.pdf'
            // 'https://www.tume.fi/erc2023/ERC2023_Bulletin3.pdf'
            // 'https://www.tume.fi/erc2023/ERC2023_Bulletin4.pdf'
            'https://www.tume.fi/erc2023/ERC2023_Bulletin4.1.pdf'
        ],
        maps: [
            'https://rogaining.ru/results/erc-results/erc2023/erc2023_map.png'
            // 'https://www.tume.fi/erc2023/ERC2023_Model_map.pdf' // страница, не файл карты
            // 'https://www.tume.fi/erc2023/ERC2023_CS\'s_comments_on_the_map_V3.pdf' // страница, не файл карты
        ],
        photo: [
            'https://photos.app.goo.gl/nwTmzA3zGfZ9Shgc7',
            'https://www.facebook.com/ERC2023/'
        ],
        gps: 'https://sportrec.eu/gps/erc-2023',
        info: 'Абсолютные победители: Тиммо Таммемяэ, Сандер Линнус (Эстония); WO: Марианн Сулг, Марис Терно (Эстония); XO: Райн Энсаар, Рида Туула-Фёдоров (Эстония). Команд — 221, участников — 468. Россия: российские спортсмены не допускались (решение IRF о запрете для России и Беларуси на WRC/ERC до конца 2023); в протоколе нет участников RUS/INT.',
        coord: [60.785, 22.36],
        fmt: '24',
        type: 'ROGAINE',
        start: 'ERC'
    },
    {
        id: 'IRF_20240817_1',
        date: '2024-08-17',
        endDate: '2024-08-18',
        place: 'Misso, Estonia (Миссо, Эстония)',
        name: '20-й Чемпионат Европы по рогейну (ERC)',
        link: [
            'https://erc2024.rogain.ee/',
            'https://en.wikipedia.org/wiki/European_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_Euroopa_meistriv%C3%B5istlused',
            'https://rogaining.ru/news/rogaine-news/erc2024-results',
            'https://rogaining.org/latest-news/356'
            // 'https://loha.osport.ee/loha.html?r=44817298' // недоступна
            // 'https://drive.google.com/drive/folders/1iBJXhh6jInyxu35AmySrb9ctNYKww7EV' // недоступна
            // 'https://drive.google.com/file/d/1PVYmA6pOuaTmcg_-UQZ-p9dSFNb4wrwz/view' // недоступна
        ],
        res: [
            'https://erc2024.rogain.ee/results24/results.htm',
            'https://erc2024.rogain.ee/results/',
            'https://erc2024.rogain.ee/resultserc/',
            'https://erc2024.rogain.ee/results24/splits.htm',
            'https://erc2024.rogain.ee/results24/stat_controls.htm'
        ],
        bulletin: [
            // 'https://erc2024.rogain.ee/wp-content/uploads/2024/02/Bulletin-1-rev2.pdf'
            'https://erc2024.rogain.ee/wp-content/uploads/2024/08/Bulletin-2.pdf'
        ],
        maps: [
            'https://erc2024.rogain.ee/erc2024map300dpi.png',
            'https://rogaining.ru/results/erc-results/erc2024/erc2024_map.png'
            // 'https://orienteerumine.ee/kaart/?eolcode=2023085' // страница, не файл карты
            // 'https://erc2024.rogain.ee/wp-content/uploads/2024/08/ERC2024_model_map.pdf' // страница, не файл карты
        ],
        photo: [
            'https://erc2024.rogain.ee/links-to-photo-galleries/',
            'https://drive.google.com/drive/folders/1PRRde6KTcyak3sTMbQK_bZaWZmESUYbk',
            'https://www.facebook.com/events/3606926649637068/'
        ],
        gps: 'https://sportrec.eu/gps/erc-2024',
        info: 'Абсолютные победители: Тиммо Таммемяэ, Сандер Линнус (Эстония); WO: Ханнула-Катрин Пандис, Маргрет Циммерманн (Эстония); XO: Айн Фёдоров, Рида Туула-Фёдоров (Эстония). Команд — 193, участников — 408. Россия: российских участников нет (RRF: «Команды из России к участию допущены не были»); в протоколе нет RUS/INT.',
        coord: [57.6049, 27.2208],
        fmt: '24',
        type: 'ROGAINE',
        start: 'ERC'
    },
    {
        id: 'IRF_20250705_1',
        date: '2025-07-05',
        endDate: '2025-07-06',
        place: 'Quintanar de la Sierra, Burgos, Spain (Кинтанар-де-ла-Сьерра, Бургос, Испания)',
        name: '19-й Чемпионат мира по рогейну (WRC)',
        link: [
            'https://wrc2025.org/',
            'https://en.wikipedia.org/wiki/World_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_maailmameistriv%C3%B5istlused',
            'https://rogaining.ru/news/rogaine-news/wrc2025-results',
            'https://rogaining.ru/rogaine/about-rogaine/wrc2025-tsvetkov',
            'https://rogaining.ru/news/rogaine-news/wrc2025-tsvetkov-article',
            'https://wrc2025.org/2025/07/23/winners-chronicle/',
            'https://rogaining.org/latest-news/362-19th-world-rogaining-championships-spain',
            'https://rogaining.ru/news/rrf-news/wrc-2025'
        ],
        res: [
            'https://wrc2025.org/live/WRC25_OverallResults.html',
            'https://rogaine-results.com/event/results/2025/world-rogaine-champs/24hr',
            'https://rogaining.org/world-rogaining-championships/wrc-past-results/379-19th-world-rogaining-championships-quintanar-de-la-sierra-burgos-spain-2025',
            'https://wrc2025.org/live-center/',
            'https://wrc2025.org/live/WRC25_Splits.html'
        ],
        bulletin: [
            // 'https://wrc2025.org/wp-content/uploads/2024/10/Bulletin-1-WRC2025-ENG.pdf'
            // 'https://wrc2025.org/wp-content/uploads/2024/12/Bulletin-2-WRC2025-ENG.pdf'
            // 'https://wrc2025.org/wp-content/uploads/2025/05/BULLETIN-3-ENG.pdf'
            'https://wrc2025.org/wp-content/uploads/2025/06/BULLETIN-4.pdf'
        ],
        maps: [
            'https://rogaining.ru/results/wrc-results/wrc2025/wrc2025_map.jpg',
            'https://rogaine-results.com/2025/world-rogaine-champs/24hr/map.jpg'
            // 'https://wrc2025.org/2025/07/22/optimal-strategy-and-heatmap/' // страница, не файл карты
            // 'https://wrc2025.org/wp-content/uploads/2025/06/WRC2025_CONTROL-DESCRIPTION.pdf' // страница, не файл карты
        ],
        photo: [
            'https://wrc2025.org/photos/',
            'https://photos.app.goo.gl/dVJHVVgGDjR6CjPz5',
            'https://photos.app.goo.gl/CeupMWa5o9XpCrfW8',
            'https://photos.app.goo.gl/rYzspZBK6RSchwK99',
            'https://photos.app.goo.gl/Zxyv5B8AYffdCSQeA',
            'https://photos.google.com/share/AF1QipPhm9yEssvi7e7yBiiuy3yhYVWMXnlX5tMZ8wB_svH4_zq58CFpSA6lNmTT5X8Exw?key=X1Rad0RzWnBZQVkxQ044NzBWbGFtdTlZRTdwWVlR'
        ],
        video: [
            'https://wrc2025.org/2025/07/23/after-event-video/',
            'https://wrc2025.org/wp-content/uploads/2025/07/861ff513-bddd-4839-8b4b-9179a4198808-1_all_103702.mp4'
        ],
        gps: {
            'Tracktherace': 'https://nonstopaventura.tracktherace.com/en/sports-events/orienteering/19th-world-rogaining-championships/players',
            'Tracktherace race view': 'https://nonstopaventura.tracktherace.com/en/sports-events/orienteering/19th-world-rogaining-championships/race',
            'rogaine-results': 'https://rogaine-results.com/event/results/2025/world-rogaine-champs/24hr'
        },
        info: 'Российские спортсмены выступали как нейтральные. Абсолютные победители: Максим Цветков, Семён Якимов (Россия). Команд — 351, участников — 756. Медали России — MO: Максим Цветков, Семён Якимов - 1. WO: Екатерина Петухова, Анна Шляпникова - 1. XSV: Борис Димитров, Нина Михеева, Вячеслав Савченко - 2.',
        coord: [41.9882, -3.0247],
        fmt: '24',
        type: 'ROGAINE',
        start: 'WRC'
    },
    {
        id: 'MAJOR_20260627_1',
        date: '2026-06-27',
        endDate: '2026-06-28',
        place: 'Orlické Záhoří, Czech Republic (Орлицке-Загоржи, Чехия)',
        name: '21-й Чемпионат Европы по рогейну (ERC)',
        link: [
            'https://www.o-adventure.cz/stranka.php?co=2026erc',
            'https://en.wikipedia.org/wiki/European_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_Euroopa_meistriv%C3%B5istlused',
            'https://rogaining.org/latest-news/378',
            'https://rogaining.org/irf-newsletters/392-newsletter-august-2026',
            'https://rogaining.ru/news/rogaine-news/erc2026-results',
            'https://rogaining.ru/news/rogaine-news/erc2026',
            'https://www.o-adventure.cz/2026erc/rozhovor.pdf',
            'https://telegra.ph/Intervyu-s-direktorom-06-25',
            'https://telegra.ph/CHempionat-Evropy-po-rogejnu-2026-06-30',
            'https://t.me/rogainomania/1229',
            'https://t.me/rogainomania/1212',
            'https://vk.ru/wall156678794_2550'
        ],
        res: [
            'https://www.o-adventure.cz/stranka.php?co=2026vysledky',
            'https://www.o-adventure.cz/2026erc/erc_2026_rogaining_final_results.html',
            'https://www.o-adventure.cz/stranka.php?co=2026vysledkycz'
        ],
        bulletin: [
            // 'https://www.o-adventure.cz/2026erc/bulletin1.pdf'
            // 'https://www.o-adventure.cz/2026erc/bulletin1cz.pdf'
            // 'https://www.o-adventure.cz/2026erc/bulletin2en.pdf'
            // 'https://www.o-adventure.cz/2026erc/bulletin2cz.pdf'
            'https://www.o-adventure.cz/2026erc/start.pdf'
        ],
        maps: [
            'https://www.o-adventure.cz/2026erc/rogaining2026.jpg',
            'https://www.o-adventure.cz/2026erc/rogaining2026.pdf'
            // 'https://www.o-adventure.cz/2026erc/rogaining2026.jgw' // страница, не файл карты
        ],
        photo: 'https://photos.app.goo.gl/7tGb7mSHb3v8FjQT8',
        video: 'https://youtu.be/p0bd2OFmXz4',
        gps: {
            'Follow.me live tracking': 'https://en.follow.me.cz/tracking-en/ERC2026/',
            'GPX': 'https://www.o-adventure.cz/2026erc/gpx-erc2026.zip',
            'Play-map': 'https://play-map.com/event?id=1109&lang=czech'
        },
        info: 'Абсолютные победители: Тиммо Таммемяэ, Сандер Линнус (Эстония) (6-я победа подряд); WO: Марианн Сулг, Керсти Яягер (Эстония); XO: Дарья Боднар, Евгений Бриндак, Богдан Воробец (Украина, 3-е место в абсолюте). Команд — 204, участников — 424. Россия: медалей нет. Россияне - только как нейтральные/International (7 из России, 5 из Беларуси, всего 12; лучшие INT-команды: Kopelevich/Ivanov - MUV 6, «Two Captains» Копачевский/Калашников/Нефёдов - MO 34). Мария Новокович (живущая в Таллине, выступала за EST) с Александрой Фёдоровой (LAT) - WO 3 место.',
        coord: [50.249714, 16.49534],
        fmt: '24, 12',
        type: 'ROGAINE',
        start: 'ERC'
    },
    {
        id: 'IRF_20270916_1',
        date: '2027-09-16',
        endDate: '2027-09-17',
        place: 'Flinders Ranges, South Australia, Australia (хребет Флиндерс, Южная Австралия)',
        name: '20-й Чемпионат мира по рогейну (WRC)',
        link: [
            'https://wrc2027.rogaining.au/',
            'https://www.facebook.com/2027WRC',
            'https://rogaining.ru/component/jem/event/765-wrc-2027',
            'https://en.wikipedia.org/wiki/World_Rogaining_Championships',
            'https://et.wikipedia.org/wiki/Rogaini_maailmameistriv%C3%B5istlused',
            'https://entries.rogaining.au/ara/wrc2027-live/teams'
        ],
        bulletin: [
            // 'https://wrc2027.rogaining.au/wp-content/uploads/2026/03/WRC2027_Bulletin_1_V4.pdf'
            'https://wrc2027.rogaining.au/wp-content/uploads/2026/09/Bulletin2-final-web.pdf'
        ],
        video: [
            'https://vimeo.com/1096091395/4b1f4da731', // WRC 2027 Draft Full 4K — ссылка из бюллетеня №1
            'https://vimeo.com/1096805966/81fec0001a' // WRC 2027 40 sec 4K — фоновое видео сайта wrc2027.rogaining.au
        ],
        coord: [-31.6444, 138.5796],
        fmt: '24, 5',
        type: 'ROGAINE',
        start: 'WRC'
    }
];
