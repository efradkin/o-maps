let starts = {
    NA: {
        short: 'Невский Азимут',
        name: 'Невский Азимут',
        logo: 'na.jpg',
        info: '<p>В основе проведения «Невского Азимута» лежат клубные принципы. Ещё в профсоюзные времена в Клубе любителей ориентирования «Спартак» сформировалась стабильная судейская бригада: ' +
            'организатор и один из авторов карт – <a href="https://vk.com/wall-154221178_8955">Александр Василевский</a>, (в последние годы его сменил Николай Волков), ' +
            'главный секретарь Наталья Яшукова, картографы и служба дистанции – <a href="https://o-site.spb.ru/history/Peoples/sedr.html">Сергей Дробышев</a>, ' +
            'Александр Лисиненков, <a href="https://o-site.spb.ru/history/Peoples/leonfed.html">Леонид Фёдоров</a>. Отличительной чертой этой многодневки до сегодняшнего дня ' +
            'является тщательное планирование детских и ветеранских дистанций. Это не удивительно, ведь основу КСО «Азимут» составляют ветераны; Фёдоров является организатором и вдохновителем ' +
            '«Кубка школьного двора», а Дробышев – инициатором ориентирования в школьных помещениях; наконец, Лисиненков – наиболее квалифицированным инспектором Петербурга.' +
            '<p> © <a href="https://rufso.ru/wp-content/uploads/2018/08/2013№4-Питерские-многодневки.pdf">Питерские многодневки</a>'
    },
    YM: {
        short: 'Яркий Мир',
        name: '<a href="https://vk.com/club128591100">Яркий Мир</a>',
        logo: 'ym.jpg'
    },
    GS: {
        short: 'Зелёный Змей',
        name: 'Зелёный Змей',
        logo: 'gs.jpg',
        info: 'Дистанция средней длины с большим количеством пунктов.',
        foto: ['gs_champions.jpg']
    },
    MMS: {
        short: 'ММС',
        name: 'Мемориал Михаила Святкина',
        logo: 'mms.jpg',
        info: '<p>В ноябре 1992 года во время тренировки от острой сердечной недостаточности умер <a href="https://o-site.spb.ru/history/Peoples/svyatkin.html">Миша Святкин</a>, ' +
            'один из лучших спортсменов за всю историю питерского ориентирования. Михаил, в течение многих лет выступавший за сборную Советского Союза и команду ЦС«Динамо», был, без преувеличения, ' +
            'всеобщим любимцем ориентировщиков страны. В июле 1993 года сотни участников из России и стран бывшего СССР собрались, чтобы почтить его память. Первый Мемориал был проведён на высоком ' +
            'спортивном и организационном уровне и получил мощную спонсорскую поддержку. (Главный судья – <a href="https://o-site.spb.ru/history/Peoples/blagovo1.html">Никита Благово</a>, ' +
            'автор карты и начальник дистанций – <a href="https://o-site.spb.ru/history/Peoples/vd.html">Виктор Добрецов</a>, генеральный спонсор – Михаил Ушаков.) <p>Когда в 1995 году ' +
            'за проведение Мемориала взялись выпускники и тренеры областной ДЮСШ - друзья и соратники Михаила, среди них оказалось немало жителей Финляндии, финнов по национальности или членов их семей, ' +
            'уехавших в 1990-е годы. Опыт, полученный ими в финских клубах и на соревнованиях, безусловно, помогал повышать уровень Мемориала не меньше, чем спонсорская поддержка. Именно там, впервые в Петербурге, ' +
            'появился горячий душ после финиша, «детский сад» и дистанция «микроориентирования» для самых маленьких, ламинированные карты и широкая ярмарка спортивных товаров. Чёткая организация и по-настоящему ' +
            'ценные призы, дополняют фирменный стиль «Мемориала Михаила Святкина» (главный судья – Александр Курдюмов, картографы и служба дистанции: Сергей Воробей, Александр Ковязин, Леонид Маланков, ' +
            '<a href="https://spbof.ru/ru/8-news/553-k-yu-tokmakov-u-nas-mestnostej-kotorye-imeet-smysl-risovat-v-5-m-prakticheski-na-moj-vzglyad-net">Константин Токмаков</a>). Чёткая организация ' +
            'и по-настоящему ценные призы дополняют фирменный стиль «Мемориала Михаила Святкина» (главный судья – Александр Курдюмов). В течение многих лет не раз менялись картографы и служба дистанции.' +
            '<p> © <a href="https://rufso.ru/wp-content/uploads/2018/08/2013№4-Питерские-многодневки.pdf">Питерские многодневки</a>'
    },
    KKP: {
        short: 'ККП',
        name: '<a href="https://o-nw.ru/kkp">Камни (Кубок) Карельского Перешейка</a>',
        logo: 'kkp.jpg',
        info: '<p>Крупнейшие соревнования по спортивному ориентированию в России'
    },
    WN: {
        short: 'БН',
        name: '<a href="http://www.w-n.ru/white%20nights/">Белые Ночи</a>',
        logo: 'wn_retro.webp',
        info: '<p>Когда в 1971 году коллектив спортклуба «Импульс» по инициативе <a href="https://o-site.spb.ru/history/Peoples/blagovo1.html">Никиты Владимировича Благово</a> ' +
            'провёл в районе станции Рощино однодневный старт «Белые Ночи», то никто, и даже сами организаторы, не могли предвидеть, что именно эти соревновани на долгие годы станут ' +
            'визитной карточкой ленинградского ориентирования. <p>Уже в 1973 году однодневные «Белые Ночи» стали одним из отборочных стартов для формирования сборной СССР на «Кубок мира и дружбы». ' +
            'Начиная с 1974 года, организацией и проведением многодневки стал заниматься спортклуб «<a href="https://o-site.spb.ru/history/pub/Ekran50.htm">Экран</a>». ' +
            'Активисты клуба <a href="https://o-site.spb.ru/history/Peoples/mmosk.html">Сергей и Ольга Казанцевы и Мария Малова</a> ежегодно, в ' +
            'течение многих лет, готовили к концу июня всё новые карты, украшенные эмблемой «Белых Ночей» – совой. Расширилась программа соревнований – появился' +
            'ночной старт. В 1979 году, в честь двадцатилетия ленинградского ориентирования, были проведены 20-этапные ночные эстафеты, а в следующем году «Белые Ночи» стали международными ' +
            '– в них приняли участие команды городов-побратимов Петербурга: Дрездена и Турку. <p>Начиная с 2001, года за проведение «Белых Ночей» взялся одноимённый клуб, ' +
            'возглавляемый Игорем и Светланой Горбатенковыми. Спонсорская поддержка позволяет клубу привлекать российских квалифицированных картографов для освоения новых интересных районов ' +
            'в окрестностях Первомайского–Мичуринского. Обслуживают соревнования многочисленные волонтёры из числа членов клуба.' +
            '<p> © <a href="https://rufso.ru/wp-content/uploads/2018/08/2013№4-Питерские-многодневки.pdf">Питерские многодневки</a>'
    },
    ST: {
        short: 'Спринт-Тур',
        name: '<a href="https://vk.com/sprinttourspb">Спринт-Тур</a>',
        logo: 'st.jpg'
    },
    '100X24': {
        short: '100x24',
        name: '<a href="https://100x24.ru/">100x24</a>',
        logo: '100x24.jpg',
        info: '"100х24" (исторически от 100 км за 24 часа) - это традиционные лыжные соревнования с длительным ориентированием, проходящие в окрестностях Санкт Петербурга.'
    },
    RFAR: {
        short: 'RFAR',
        name: '<a href="https://adventure-race.redfox.ru/">Redfox Adventure Race</a>',
        logo: 'redfox.jpg',
        info: '<p>«Проверь себя на прочность!», - под таким девизом проходит крупнейшая российская приключенческая гонка Red Fox Adventure Race. ' +
            'Проводимая компанией Red Fox - ведущим российским производителем одежды и экипировки для экстремального спорта и активного отдыха - ' +
            'с 2003 г. гонка Red Fox Adventure Race является ключевым событием мультиспортивного сезона. Каждый год она дает возможность участникам ' +
            'испытать себя в режиме «нон-стоп», пройти невероятно красивую дистанцию и преодолеть захватывающие испытания в самый разгар белых ночей.' +
            '<p>Более 500 участников, - лучшие мультиспортивные команды, выдающиеся российские и зарубежные ориентировщики, велосипедисты ' +
            'и просто любители приключений, - проверяют себя на прочность в самой экстремальной гонке страны.' +
            '<p>Попробовать свои силы в гонке приезжают опытные команды из России, Австралии, Беларуси, Бельгии, Дании, Израиля, Кыргызстана, Латвии, ' +
            'Нидерландов, Новой Зеландии, Польши, США, Турции, Узбекистана, Украины, Финляндии, Франции, Чехии, Швеции и Эстонии. В 2009 г. ' +
            'Red Fox Adventure Race вышла на международный уровень, войдя в состав европейской серии мультиспортивных гонок - AREuroseries.' +
            '<p> © <a href="https://adventure-race.redfox.ru/about/">Red Fox Adventure Race (О гонке)</a>'
    },
    KKM: {
        short: 'ККМ',
        name: '<a href="https://vk.com/club21533513">Кубок Коротких Маршрутов</a>',
        logo: 'kkm.jpg',
        info: '<p>Кубок коротких маршрутов – соревнования, в которых команды за 3 часа должны набрать наибольшее число очков за прохождение по выбору контрольных пунктов (КП) из числа обозначенных на карте. Каждое КП имеет стоимость в очках.'
    },
    VO_FOTO: {
        short: 'Фотоориентирование на ВО',
        name: '<a href="https://vk.com/club227807023">Фотоориентирование на Васильевском острове</a>',
        logo: 'vo_foto.png',
        info: '<p>Маршруты проходят по паркам и кварталам Василеостровского района с использованием карт спортивного ориентирования.' +
            '<p>Прохождение дистанции – по карте, в форме фото-ориентирования, по точкам, обозначенным в карте кружками и имеющим №. На каждой точке необходимо определить соответствие объектов местности с фотографией и записать ответ (№ точки).' +
            '<p>Проходить дистанцию можно в режиме групповой экскурсии или индивидуально пешком или бегом. Ответы присылаются личным сообщением администратору группы. Дистанцию можно проходить в любое удобное для вас время.'
    },
    RED_SELO_FOTO: {
        short: 'Фотоориентирование в Красносельском р-не',
        name: '<a href="https://vk.com/public200889236">Фотоориентирование в Красносельском р-не</a>',
        logo: 'inacor.jpg',
        info: '<p>Инакор — интернет активное ориентирование в Красносельском районе Санкт-Петербурга.' +
            '<p>Соревнования - проходят в виде маршрута (путешествия) по паркам и кварталам Красносельского района и прилегающим к району территориям, с использованием карт спортивного ориентирования и фотографий.'
    },
    BA: {
        short: 'BikeAdventure',
        name: '<a href="https://vk.com/bikeadventure">BikeAdventure</a>',
        logo: 'ba.jpg',
        info: '<p>BikeAdventure - ориентирование на велосипедах с преодолением естественных препятствий. Проводится дважды в год, весной и осенью, ' +
            'в самых красивых и интересных местах Ленинградской области. <p>История берет начало с мая 2005 года. Идея появилась в результате многолетнего опыта ' +
            'проведения пешеходных соревнований по туристскому ориентированию <a href="start.html?start=MB">Марш-Бросок</a>: в те моменты, когда участники встречали на своем пути ' +
            'лесные дороги, они мечтали о велосипеде... Объединить в одно целое длительное ориентирование, приключения и горный велосипед - такую задачу поставили перед собой ' +
            'организаторы BikeAdventure. Автор идеи и бессменный сочинитель всех дистанций - Константин Бекетов. ' +
            '<p>Трасса каждой гонки уникальна и больше никогда не повторяется. Организаторы стараются находить самые интересные и неожиданные  природные и исторические объекты. ' +
            'Участников ожидают броды, старые заросшие дороги, многочисленные памятники военной истории, скалы и озера, бескрайние карельские леса и пляжи Финского залива. ' +
            '<p>За многолетнюю историю правила и идеология неоднократно менялись. В настоящий момент действуют правила, принятые в рогейне: на большой площади ' +
            'рассеяны несколько десятков контрольных пунктов (КП), каждый из который имеет свою "стоимость" в условных баллах. За отведенное время участники должны ' +
            'набрать максимальную сумму баллов, при этом последовательность посещения контрольных пунктов произвольная. Здесь выигрывает не только тот, кто хорошо крутит педали ' +
            'и ориентируется, но и тот, кто более грамотно разрабатывает свой маршрут. <p>Специально для BikeAdventure организаторы готовят актуальный картографический материал, ' +
            'по возможности учитывая все изменения на местности.' +
            '<p> © <a href="https://www.bikeadventure.ru/about-race/">История BikeAdventure</a>'
    },
    TA: {
        short: 'TrailAdventure',
        name: '<a href="https://vk.com/tradventure">TrailAdventure</a>',
        logo: 'ta.jpg',
        info: '<p>Тренировочные старты, однодневный вариант <a href="start.html?start=MB">Марш-Броска</a>. Протяженность пути по заданному маршруту или в формате рогейна - 30-40 км. ' +
            'Контрольные пункты в красивых и интересных местах, <i>почти</i> без серьезных водных преград, буреломов и болот.' +
            '<p> © <a href="https://vk.com/tradventure">TrailAdventure VK</a>'
    },
    MB: {
        short: 'Марш-Бросок',
        name: '<a href="https://vk.com/mbrosok">Марш-Бросок</a>',
        logo: 'mb.jpg',
        info: '<p>Это традиционные соревнования питерских туристов, ежегодно проходящие в лесах Карельского перешейка. С 2010 года - дважды в год (осенью и весной). ' +
            'Суть соревнований в преодолении дистанции с поиском контрольных пунктов (КП), как в спортивном ориентировании. Но, в отличие от ориентирования, используются ' +
            'менее подробные карты (обычно масштаб карты соревнований от 1:25000 до 1:50000, т.е. в одном сантиметре от 250 до 500 метров), трасса Марш-Броска гораздо длиннее, ' +
            'и предполагает обязательный ночлег между этапами, который рассматривается как технический элемент (выживание в условиях природной среды с минимумом снаряжения, ' +
            'поскольку все свои вещи участники несут на себе всю гонку). Дистанция каждый раз новая, и проходит по красивым и интересным местам с разнообразным рельефом ' +
            'и широким набором естественных препятствий. Более подробно все условия приведены в Положении о соревнованиях. <p>За свою историю Марш-Бросок неоднократно менял идеологию, ' +
            'то сближаясь, то снова отдаляясь от родственных дисциплин, таких как мультиспорт и туристское многоборье. В настоящий момент соревнования ориентированы на массовый спортивный туризм ' +
            'и призваны имитировать реальные экстремальные условия, которые могут возникнуть в путешествии. Участники Марш-Броска демонстрируют свои навыки в ориентировании, ' +
            'преодолении горно-таежных препятствий и в выживании. ' +
            '<p> © <a href="https://kandid.ru/?p=1">Что такое Марш-Бросок</a>'
    },
    KZNTSVA: {
        short: 'Памяти Кузнецова',
        name: 'Памяти Сергея Кузнецова',
        logo: 'kuznetsov.jpg'
    },
    KS: {
        short: 'Карельские скалы',
        name: 'Карельские скалы',
        logo: 'ks.jpg',
        info: '<p>Проект «Скалы Кузнечного» был начат <a href="https://rufso.ru/wp-content/uploads/2018/08/2014№2-Памяти-Сергея-Владимировича-Кузнецова.pdf">Сергеем Кузнецовым</a> ' +
            'ещё в 1996 году, хотя и до этого ленинградские студенты и армейцы проводили сборы и соревнования в скальных районах Карельского перешейка. В июне следующего года ' +
            'первым соревнованием по новым картам стал Кубок России, которому сопутствовала массовая многодневка, носившая тогда название «Наш дом – Россия». На следующий год ' +
            'соревнования стали называться «Silva Cup» и прошли «в связке» с «Мемориалом Михаила Святкина», что, несомненно, способствовало популярности как тех, так и других стартов. ' +
            '<p>В последующие годы они получили название «Карельские Скалы», хотя, по различным причинам, дважды или трижды проводились в безскальных районах. Когда в 2008 году сильнейший ураган ' +
            'сделал недоступными на много лет карты в районе Кузнечного, спасли положение уже использованные ранее карты под Каменогорском. <p>С первого года своего существования, ' +
            '«Скалы» позиционировались Сергеем Кузнецовым, как «окно в Европу», точнее – в Скандинавию, не только для питерских, но и для всех российских ориентировщиков. ' +
            'Соревнования и технические сборы на специфической местности, по насыщенным ориентирами картам, помогали российскому ориентированию ликвидировать отставание ' +
            'в технической подготовке. Но даже для тех спортсменов, которые никогда не входили в состав национальной сборной, «Карельские Скалы» стали заметной ступенью ' +
            'в росте их мастерства. <p>В 2013 году «Скалы» снова вернутся в район Каменогорска. Постоянные авторы карт – Александр Ковязин, Сергей Несынов, ' +
            '<a href="https://spbof.ru/ru/8-news/553-k-yu-tokmakov-u-nas-mestnostej-kotorye-imeet-smysl-risovat-v-5-m-prakticheski-na-moj-vzglyad-net">Константин Токмаков</a> ' +
            'продолжают дело, начатое Сергеем Кузнецовым. Кузя, как со времён туристского кружка во Дворце пионеров звали его товарищи, оставил щедрое наследство всем российским ориентировщикам. ' +
            'Постараемся не растерять его.' +
            '<p> © <a href="https://rufso.ru/wp-content/uploads/2018/08/2013№4-Питерские-многодневки.pdf">Питерские многодневки</a>'
    },
    MEET_1966: {
        short: 'Матч\'1966',
        name: '<a href="https://o-site.spb.ru/history/Knots/match-66.html">Зимний матч городов СССР</a>',
        logo: 'meet_1966.jpg'
    },
    VOLKOV_A: {
        short: 'Мемориал Андрея Волкова',
        name: 'Мемориал Андрея Волкова',
        logo: 'volkov_a.webp',
        info: 'Андрей Владимирович Волков трагически ушел из жизни в июньский воскресный день 2005 года.' +
            '<p> Траурный зал с трудом вместил всех желающих отдать последний долг доброму труженику. Его отношение к делу еще долго будет служить для нас примером.' +
            '<p> © <a href="https://o-site.spb.ru/history/Peoples/avolkov.html">Посвящение</a>'
    },
    USSR_BULGARIA_1968: {
        short: 'Матч СССР-Болгария\'1968',
        name: '<a href="https://o-site.spb.ru/history/Knots/match-68.html">Международная товарищеская встреча сборных команд Болгарии и СССР</a> (<a href="./docs/ussr_bulgaria_1968_article_omaps.jpg">статья в газете "ТРУД"</a>)',
        logo: 'ussr_bulgaria_1968.jpg'
    },
    USSR_V_1971: {
        short: 'Всесоюзные\'1971',
        name: '<a href="https://o-site.spb.ru/history/Knots/ussr-71.html">Пятые Всесоюзные соревнования</a>',
        logo: '1971.jpg'
    },
    USSR_V_1975: {
        short: 'Всесоюзные\'1975',
        name: '<a href="https://o-site.spb.ru/history/Knots/ussr-75.html">Всесоюзные зимние соревнования</a>',
        info: 'Всесоюзные  лично-командные  соревнования  по  ориентированию  на местности,  посвященные  30-летию победы над фашистской Германией,  ' +
            'были проведены  в окрестностях  Ленинграда  10-13 марта 1975 года.',
        logo: 'ussr_1975.jpg'
    },
    VWC_1995: {
        major: true,
        short: 'VWC\'1995',
        name: '<a href="https://o-site.spb.ru/history/VWC-95/index.html">Кубок Мира среди ветеранов</a>',
        logo: 'vwc95.gif'
    },
    USSR_1981: {
        major: true,
        short: 'I Чемпионат СССР',
        name: '<a href="https://o-site.spb.ru/history/Knots/ussr-81.html">Первый чемпионат СССР</a> (<a href="https://rufso.ru/wp-content/uploads/2018/08/2016№4-Первый-Чемпионат-СССР-как-это-было.pdf">как это было</a>, <a href="./docs/ussr_champ_1981_program_omaps.pdf">программа</a>, <a href="./docs/ussr_champ_1981_resolution_omaps.pdf">постановление</a>)',
        logo: 'ussr_1981.jpg'
    },
    LENINGRAD_30: {
        major: true,
        short: '30 лет Ленинградского ориентирования',
        name: 'Многодневные соревнования, посвящённые 30 летию Ленинградского ориентирования',
        logo: 'leningrad_30.webp'
    },
    JWSOC_2003: {
        major: true,
        short: 'JWSOC 2003',
        name: '<a href="https://spbof.ru/ru/2-uncategorised/582-istoriya-orientirovaniya-1992g-po-nastoyashchee-vremya">Чемпионат мира  по ориентированию  на лыжах среди  юниоров</a> (<a href="https://docs.cntd.ru/document/3641816">распоряжение</a>)',
        logo: 'jwsoc_2003.jpg'
    },
    RUSSIA_2019: {
        major: true,
        short: 'ЧР 2019',
        name: '<a href="https://o-site.spb.ru/race.php?id=190524chRF">Чемпионат России</a>',
        logo: 'fsor.jpg'
    },
    RUSSIA_2020: {
        major: true,
        short: 'ЧР (спринт) 2020',
        name: '<a href="https://o-site.spb.ru/race.php?id=20092428">Чемпионат России (спринт)</a>',
        logo: 'fsor.jpg'
    },
    RUSSIA_2021: {
        major: true,
        short: 'ЧР (спринт) 2021',
        name: '<a href="https://o-site.spb.ru/race.php?id=210531">Чемпионат России (спринт)</a>',
        logo: 'russia_2021.jpg'
    },
    RUSSIA_2022: {
        major: true,
        short: 'ЧР 2022',
        name: '<a href="https://o-site.spb.ru/race.php?id=22060911">Чемпионат России</a>',
        logo: 'fsor.jpg'
    },
    RUSSIA_2024: {
        major: true,
        short: 'ЧР (спринт) 2024',
        name: '<a href="https://o-site.spb.ru/race.php?id=240519_russia">Чемпионат России (спринт)</a>',
        logo: 'russia_2024.jpg'
    },
    RUSSIA_CUP_2024: {
        major: true,
        short: 'КР (спринт) 2024',
        name: '<a href="https://сшгорелова.рф/кубок-россии-г-химки/">Кубок России (спринт)</a>',
        logo: 'fso_msk.jpg'
    },
    SCHOOL: {
        short: 'Ориентирование в школу',
        name: '<a href="https://spbof.ru/ru/projects/o-school">Спортивное ориентирование в школу</a>',
        logo: 'school.jpg',
        info: '<p>С 2013 года активистами федерации и по настоящее время самой Федерацией спортивного ориентирования СПб реализуется проект ' +
            '"<a href="http://o-site.spb.ru/race.php?id=131030">Спортивное ориентирование в школу</a>". Проект организуется с целью популяризации спортивного ориентирования среди учащихся образовательных учреждений. ' +
            'В условиях знакомой школьной территории в окружении друзей школьники знакомятся с новым видом спорта, учатся азам спортивного ориентирования, активно проводят свой досуг ' +
            'на свежем воздухе. В программе спортивного праздника три вида соревнований: дистанция личная «Ориентирование на пришкольной территории», дистанция личная ' +
            '«Ориентирование в лабиринте»; дистанция командная «Фото-ориентирование». В 2020-2021 году проект получил <a href="https://spbof.ru/ru/projects/o-school">поддержку</a> Фонда президентских грантов.'
    },
    /* --- МОСКВА --- */
    INCR: {
        short: 'Инакор',
        name: '<a href="https://vk.com/inacor">Инакор — интернет активное ориентирование</a>',
        logo: 'inacor.jpg',
        info: '<p>Инакор — интернет активное ориентирование.' +
            '<p>Бесплатная городская игра в парках Москвы. 24/7/365.' +
            '<p>Инакор — увлекательная игра для всех желающих оторваться от компьютера и обучиться азам спортивного ориентирования.'
    },
    KMPT_ROGAINE: {
        short: 'Компот-рогейн',
        name: '<a href="https://www.x-lite.run/">Компот-рогейн</a>',
        logo: 'kmpt-rogaine.jpg'
    },
    AERO: {
        short: 'Аэророгейн',
        name: 'Аэророгейн',
        logo: 'aero.jpg'
    },
    MSK_LIGHT: {
        short: 'Московский лайт',
        name: '<a href="https://vk.com/moscow__lite">Московский лайт</a>',
        logo: 'msk_light.jpg'
    },
    BNO: {
        short: 'БНО',
        name: '<a href="https://tkmgtu.ru/library/Большое_Ночное_Ориентирование">Большое Ночное Ориентирование</a>',
        logo: 'bno.jpg',
        info: '<p>Большое ночное ориентирование, посвящённое памяти Андрея Зайцева, проводится в формате индивидуальной тренировки по спортивному ориентированию бегом в ночных условиях. ' +
            'Основная задача — дать возможность опытным ориентировщикам, рогейнерам и туристам повысить уровень своего мастерства, а новичкам приобщиться к спорту и бросить вызов ' +
            'своим страхам перед тёмным холодным лесом! <p>Организатор — Турклуб МГТУ им. Баумана и команда Forest Adventure.'
    },
    TROPA_THRSDAY: {
        short: 'Тропаревские четверги',
        name: 'Тропаревские четверги',
        logo: 'tropa_thirsday.jpg',
    },
};

