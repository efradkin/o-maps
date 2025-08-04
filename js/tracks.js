let tracks = [
    {
        name: 'гряда Вярямянселькя, Петяярви',
        info: 'Круговой холмистый экологический маршрут от пл.Петяярви. Аппендикс к смотровой площадке не обязателен к посещению кмк. Мост через р.Волчью сейчас на ремонте и вместо него можно перейти по старой финской ГЭС, так даже интереснее.',
        link: 'https://ooptlo.ru/gryada-vyaryamyanselskaya-(malyij-marshrut).html',
        gpx: 'tracks/vyaryamyanselkya_petyajarvi_omaps.gpx',
        pics: ['petyajarvi',7],
        type: ['RUN','VELO','WALK']
    },
    {
        name: 'гряда Вярямянселькя, Берестовое оз',
        info: 'Холмистая эко-тропа соединяет районы Мичуринского и Петяярви. Довольно разнообразный ландшафт - прям на любой вкус. Из достопримечательностей - руины финской водяной мельницы.',
        link: 'https://ooptlo.ru/ozero-berestovoe.html',
        gpx: 'tracks/vyaryamyanselkya_berestovoe_omaps.gpx',
        pics: ['berestovoe',8],
        type: ['RUN','VELO','WALK']
    },
    {
        name: 'гряда Вярямянселькя, оз Светлое',
        info: 'Круговой экологический маршрут у села Петриченко. Плавный рельеф и красивые озёра. Из достопримечательностей - руины финской водяной мельницы и старинные амбары в Мичуринском (в стороне от тропы, но не далеко).',
        link: 'https://ooptlo.ru/gryada-vyaryamyanselskaya-(bolshoj-marshrut).html',
        gpx: 'tracks/vyaryamyanselkya_petrichenko_omaps.gpx',
        pics: ['petrichenko',7],
        type: ['RUN','VELO','WALK']
    },
    {
        name: 'Сестрорецкое болото',
        info: 'Пеший круговой экологический маршрут. Есть <a href="spb.html?onlymap=sestroretsky_swamp_2024">фото-квест</a>. Вообще, очень приятное место. Но если рассудок и жизнь дороги вам, держитесь подальше от торфяных болот...',
        link: 'https://oopt.spb.ru/protected_area/sestroretzkoye-boloto/',
        gpx: 'tracks/sestrorezkoe_boloto_omaps.gpx',
        pics: ['sestrorezk',8],
        type: ['WALK']
    },
    {
        name: 'Колтушские высоты, "Камовые холмы"',
        info: 'Тут хорошо в любое время года - бег, вело, лыжи. Много песчаных холмистых дорог по полям и лесам. Но посещение платное (теоретически).',
        link: 'https://ooptlo.ru/marshrut-kamovyie-xolmyi.html',
        gpx: 'tracks/koltushi_kamy_omaps.gpx',
        pics: ['koltushi_kamy',5],
        type: ['RUN','VELO','WALK']
    },
    {
        name: 'Колтушские высоты, "Заячья тропа"',
        info: 'Лесистая часть Колтушской ООПТ. Паутина путаных тропинок. Посещение платное (теоретически).',
        link: 'https://ooptlo.ru/zayachya-tropa-v-pamyatnike-prirodyi-koltushskie-vyisotyi.html',
        gpx: 'tracks/hare_trail_omaps.gpx',
        pics: ['hare_trail',5],
        type: ['RUN','VELO','WALK']
    },
    {
        name: 'Зеленогорские озёра',
        info: 'Много озёр, много соснового леса, местами даже борового. Красота.',
        link: 'https://ooptlo.ru/6-ozer.html',
        gpx: 'tracks/zelenogorsk_omaps.gpx',
        pics: ['zelenogorsk',2],
        type: ['RUN','VELO','WALK']
    },
    {
        name: 'Рощино, Линдуловская роща',
        info: 'По слухам, эти лиственницы ещё Пётр-I сажал.',
        link: 'https://ooptlo.ru/ecolindulovskaya-roshha.html',
        gpx: 'tracks/lindulovska_omaps.gpx',
        // pics: ['roschino',5],
        type: ['RUN','WALK']
    },
    {
        name: 'Кавголово, Курголовская этнотропа',
        info: 'Район старого лыжедрома. Знаменитый иммитационный круг тоже тут.',
        link: 'https://ooptlo.ru/kurgolovskaya-tropa.html',
        gpx: 'tracks/kurgolovo_omaps.gpx',
        pics: ['kurgolovo',2],
        type: ['RUN','VELO','WALK']
    },
    {
        name: 'Кавголово, "Еловые холмы"',
        info: 'Район вроде бы небольшой, но когда бегаю тут ориентирование, всегда так или иначе запутываюсь - мистическое место.',
        link: 'https://ooptlo.ru/ecotoksovskie-vyisotyi.html',
        gpx: 'tracks/kavgolovo_omaps.gpx',
        pics: ['kavgolovo',2],
        type: ['RUN','VELO','WALK']
    },
    {
        name: 'Токсово, Малиновая гора',
        info: 'Прекрасная классическая лыжня зимой и заросшие возвышенности, окружённые болотами, летом.',
        link: 'https://ooptlo.ru/ekomarshrut-malinovaya-gora.html',
        gpx: 'tracks/malinova_gora_omaps.gpx',
        // pics: ['toksovo',5],
        type: ['RUN','VELO','WALK']
    },
    {
        name: 'От Орехово до Ладоги',
        info: 'Надо будет обязательно когда-нибудь съездить до самой до Ладоги.',
        link: 'https://ooptlo.ru/ot-orekhovo-do-ladogi.html',
        gpx: 'tracks/orekhovo_ladoga_omaps.gpx',
        pics: ['orekhovo',2],
        type: ['RUN','VELO','WALK']
    },
    {
        name: 'Южное приладожье, Каньон реки Лава',
        info: 'Хорошее место, чтобы остановиться ненадолго по дороге на восток. Искали тут как-то трилобиттов.',
        link: 'https://ooptlo.ru/lava-marshrut.html',
        gpx: 'tracks/lava_omaps.gpx',
        // pics: ['lava',5],
        type: ['RUN','WALK']
    },
    {
        name: 'Коккорево, "Ладожские берега"',
        info: 'Ещё 10 лет назад Коккорево было просто диким пляжем, а теперь тут чего только нет.',
        link: 'https://ooptlo.ru/ekologicheskij-marshrut-v-zakaznike-kokkorevskij.html',
        gpx: 'tracks/kokkorevo_coast_omaps.gpx',
        pics: ['kokkorevo',5],
    },
    {
        name: 'Коккорево, оз Шимпалатовское',
        info: 'В Коккорево теперь можно не только на пляже обгорать, но и погулять с комфортом по лесу да по берегу лесного озера.',
        link: 'https://ooptlo.ru/ozero-shimpalatovskoe.html',
        gpx: 'tracks/kokkorevo_shimpalatovskoe_omaps.gpx',
        pics: ['kokkorevo',5],
    },
    {
        name: 'Луга, Шалово-Перечицкий',
        info: 'Прекрасный чистый боровой рогейнерский лес.',
        link: 'https://ooptlo.ru/lesnyie-dali.html',
        gpx: 'tracks/shalovo_omaps.gpx',
        pics: ['shalovo',2],
        type: ['RUN','VELO','WALK']
    },
    {
        name: 'Юкковские камы',
        info: 'А когда-то тут даже на горных лыжах катались.',
        link: 'https://ooptlo.ru/yukkovskie-kamyi.html',
        gpx: 'tracks/yukki_omaps.gpx',
        // pics: ['yukki',5]
    },
    {
        name: 'Лебяжье, Красная горка, "Тропа южного берега"',
        info: 'Береговая артиллерия и "бронепоезд" на запасном пути в Красной горке, Шепелевский маяк и сосновый бор.',
        link: 'https://ooptlo.ru/tropa-yuzhnogo-berega.html',
        gpx: 'tracks/lebyazhje_omaps.gpx',
        // pics: ['shalovo',5],
        type: ['RUN','VELO','WALK']
    },
    // --- непосещённые ---
    {
        name: 'Берег Копорской губы',
        info: '"Экологическая тропа проходит по южному берегу Финского залива, по существующей дорожно-тропиночной сети, преимущественно по лесам (смешанным с сосной, березой, елью; сосновым), выходит на берег Копорской губы Финского залива." ©',
        link: 'https://ooptlo.ru/bereg-koporskoi-guby.html',
        gpx: 'tracks/koporie_omaps.gpx',
    },
    {
        name: 'Большое Кузёмкино',
        info: '"Комбинированная историческая и эколого-просветительская тропа располагается в южной части полуострова Кургальский. На ней Вы познакомитесь с природными комплексами и фортификационными сооружениями 1930-40х гг." ©',
        link: 'https://ooptlo.ru/bolshoe-kuzyomkino-%E2%80%93-narvskij-zaliv.html',
        gpx: 'tracks/kuzemkino_omaps.gpx',
    },
    {
        name: 'Колтушские высоты, "Верста"',
        info: '"Экотропа демонстрирует посетителям рельеф Колтушской возвышенности. Проходит по камовым холмам, пересекая межкамовую котловину. Свое начало тропа берет от холма с тотемными столбами и лабиринта «Вольный ветер»." ©',
        link: 'https://ooptlo.ru/bolshoe-kuzyomkino-%E2%80%93-narvskij-zaliv.html',
        gpx: 'tracks/versta_omaps.gpx',
    },
    {
        name: 'Воейково, "Лесная тропа"',
        info: '"Тропа позволяет познакомиться с великолепными видами северной части Колтушской возвышенности. Нынешний живописный ландшафт этой территории сформировался в послеледниковое время и представлен чередованием песчаных холмов (камов) с ложбинами и котловинами, часть которых занята небольшими болотами и озёрами. На вершинах и склонах холмов сохранились таёжные хвойные леса возрастом более 100 лет." ©',
        link: 'https://ooptlo.ru/lesnaya-tropa.html',
        gpx: 'tracks/koltushi_lesnaya_tropa_omaps.gpx',
    },
    {
        name: 'Раковые озёра',
        info: '"Раковые озёра являются неглубокими, хорошо прогреваемыми, эвтрофными (с высоким содержанием органических веществ) высокопродуктивными водоёмами, обильно поросшими тростником и другими водными растениями. Раковые озёра – пример современного антропогенного заболачивания водоёмов, при котором скорость процесса болотообразования намного больше, чем в естественных экосистемах. Обмеление и зарастание озёр способствовали возникновению подходящих мест обитания и богатой кормовой базы для различных водоплавающих и околоводных птиц." ©',
        link: 'https://ooptlo.ru/rakovyie-ozyora.html',
        gpx: 'tracks/rakovy_lakes_omaps.gpx',
    },
    {
        name: 'Водный маршрут "Раковые озёра"',
        info: '"Тропа начинается от пирса на оз. Охотничье, затем продолжается по правому притоку ручья Долгунец, и выходит на оз. Большое Раковое, где заканчивается у пирса вблизи эколого-просветительского центра." ©',
        link: 'https://ooptlo.ru/vodnyj-marshrut-rakovye-ozyora.html',
        gpx: 'tracks/rakovy_lakes_water_omaps.gpx',
    },
    {
        name: 'Раковые озёра, "Память Зимней войны"',
        info: '"Экологическая тропа посвящена военным действиям в период Советско-финляндской (Зимней) войны (1939–1940). Здесь расположены остатки объектов, принимавших участие в военных действиях в период Зимней войны." ©',
        link: 'https://ooptlo.ru/istoricheskij-marshrut-v-zakaznike-rakovyie-ozyora.html',
        gpx: 'tracks/rakovy_lakes_winter_war_omaps.gpx',
    },
    {
        name: 'Долина реки Выбья и Лужская губа',
        info: '"Экологическая тропа располагается на стрелке между рекой Выбья и Лужской губой Финского залива. Эта часть территории заказника «Кургальский» отличается высоким разнообразием природных ландшафтов. По мере движения по тропе они сменяют друг друга, словно картинки в режиме слайд-шоу: сосны и вереск, таежный еловый лес, приречные и приморские сообщества растений, песчаные дюны. Эта динамичная смена ландшафтов и составляет главную  интригу прогулки. Дополнением к ней могут стать встречи с различными представителями местной фауны, например, пернатыми: малым лебедем и черной казаркой." ©',
        link: 'https://ooptlo.ru/dolina-reki-vyibya-i-luzhskaya-guba.html',
        gpx: 'tracks/vibya_guba_omaps.gpx',
    },
    {
        name: 'Долина реки Охта',
        info: '"Экотропа расположена в кластере «Река Охта» природного парка «Токсовский». Посетив тропу, можно познакомится с ландшафтами камовых холмов, относительные высоты которых могут достигать 30 м, еловыми лесами, где встречаются деревья возрастом 160 лет, и долиной реки Охта, одной из крупнейших притоков реки Невы." ©',
        link: 'https://ooptlo.ru/dolina-reki-oxta.html',
        gpx: 'tracks/okhta_omaps.gpx',
    },
    {
        name: 'Долина реки Рагуша',
        info: '"Здесь, на небольшой территории, можно видеть формирование глубоко врезанной речной долины и работу карстовых процессов, приводящую к образованию уникального подземного русла реки. Здесь же, на крохотном клочке земли, находятся популяции сразу нескольких видов редчайших для области растений и встречается немало видов очень редких и охраняемых животных – насекомых, рыб, земноводных, птиц и млекопитающих." ©',
        link: 'https://ooptlo.ru/ekologicheskij-marshrut-dolina-reki-ragusha.html',
        gpx: 'tracks/ragusha_omaps.gpx',
    },
    {
        name: 'Велькота, "Дубравы"',
        info: '"Экотропа расположилась на территории старинного парка, бывшего частью имения Блоков. Здесь растут старые дубы, ясени, липы, клёны, а также не свойственные нашим лесам тополь белый и сирень. В центральной части можно увидеть интересное природное явление – карстовую воронку, вокруг которой и был разбит парк." ©',
        link: 'https://ooptlo.ru/ecodubravyi-u-derevni-velkota.html',
        gpx: 'tracks/velkota_omaps.gpx',
    },
    {
        name: 'Кивипарк, "Каменистая тропа"',
        info: '"На тропе можно познакомиться с прибрежной зоной Выборгского залива: увидеть сельги, граниты рапакиви и особые растительные сообщества. На утесе расположена смотровая площадка, с которой открывается красивый вид на залив. Длина маршрута составляет почти 12 километров — осенью прогулка займет почти весь световой день." ©',
        link: 'https://ooptlo.ru/kamenistaya-tropa.html',
        gpx: 'tracks/kivipark_omaps.gpx',
    },
    {
        name: 'оз Мелководное, "Карельская тишина"', // TODO не показывается
        info: '"Экологическая тропа ведет через различные типы лесов, включая мелколиственные, еловые и сосновые леса, приуроченные к каменнистым сельгам, а так же через протоку Кивистёнсалми, соединяющую озёра Мелководное и Луговое. Кроме того, на тропе вы узнаете о финской истории этих мест, в том числе о коммуне Вуоксенранта и её образе жизни, и увидите лютеранскую кирху 1935 года постройки в поселке Озерское." ©',
        link: 'https://ooptlo.ru/karelskaya-tishina.html',
        gpx: 'tracks/melkovodnoe_omaps.gpx',
    },
    {
        name: 'Воейково, Колтушский веломаршрут-1',
        info: '"Маршрут в основном предназначен для прохождения в летний сезон. С момента стаивания снега до первого снега – с мая по октябрь. Кроме того, этот маршрут можно использовать для зимних лыжных прогулок в период с декабря по март." ©',
        link: 'https://ooptlo.ru/velomarshrut-po-koltushiskim-vyisotam.html',
        gpx: 'tracks/koltushi_velo_1_omaps.gpx',
    },
    {
        name: 'Колтушский веломаршрут-2',
        info: '"Веломаршрут позволяет насладиться красивыми видами хвойных лесов и постледниковых ландшафтов, промаркирован аншлагами и указателями и состоит из нескольких трасс, рассчитанных как на новичков, так и на профессионалов. При этом он проложен по существующим тропам, чтобы не страдали самые ценные, охраняемые природные комплексы ООПТ." ©',
        link: 'https://ooptlo.ru/velosipednyij-marshrut.html',
        gpx: 'tracks/koltushi_velo_2_omaps.gpx',
    },
    {
        name: 'Лисино-Корпус, "Колыбель русского лесоводства"',
        info: '"Прохождение по тропе позволяет увидеть следующие особо охраняемые природные комплексы и объекты заказника «Лисинский»: дендропарк с культурами лиственницы сибирской и других ценных лесных пород, участки старовозрастных ельников и сосняков, глубокую живописную долину реки Лустовки, учебный лесной питомник с посадками ели и сосны." ©',
        link: 'https://ooptlo.ru/ecolisinskij.html',
        gpx: 'tracks/lisinsky_omaps.gpx',
    },
    {
        name: 'Вепсский лес, "Курбинская тропа"',
        info: '"Экотропа ведёт через живописные озёра Вепсского леса – оз. Маякозеро и оз. Азикозеро. Озёра, которые встречаются на данной экологической тропе, относятся к Ладвинской группе озёр. Здесь отмечены озёрные котловины, образованные в процессе выпахивания и разрушающей горные породы деятельности ледника, а также болотные озёра с берегами из торфа." ©',
        link: 'https://ooptlo.ru/kurbinskaya-tropa.html',
        gpx: 'tracks/kurbinskaya_tropa_omaps.gpx',
    },
    {
        name: 'Вепсский лес, "Ладвинская тропа"',
        info: '"Экотропа к деревне Ладва познакомит посетителей с элементами ледникового и водно-ледникового рельефа, растительностью средней тайги, озёрами ледникового происхождения. Конец экотропы приурочен к вепсской деревне Ладва." ©',
        link: 'https://ooptlo.ru/ladvinskaya.html',
        gpx: 'tracks/ladvinskaya_tropa_omaps.gpx',
    },
    {
        name: 'Вепсский лес, "Лукинская тропа"',
        info: '"Экотропа интересна расположенными на её линии родниками «Большой каскад», долиной реки Урья. Так называемый «дом-пряник» является примером старинного вепсского дома с его наличниками и причелинами. Из природных объектов осмотра здесь – камовый холм." ©',
        link: 'https://ooptlo.ru/lukinskaya-tropa.html',
        gpx: 'tracks/lukinskaya_tropa_omaps.gpx',
    },
    {
        name: 'Вепсский лес, Тропа к "Святому камню"',
        info: '"Экологическая тропа проходит по краю резервата "Висячие озёра", в долине реки Чурручей, и ведёт к месту поклонения нескольких поколений вепсов - "Святому камню". Он является обнажением коренных горных пород, сложен песчаником. Почитание "Святого камня" известно с конца XIX века.  " ©',
        link: 'https://ooptlo.ru/tropa-k-svyatomu-kamnyu.html',
        gpx: 'tracks/sacred_stone_omaps.gpx',
    },
    {
        name: 'Мшинское болото, "Лазурные воды"',
        info: '"Экотропа проходит по восточной окраине Мшинской болотной системы, по берегу песчаного карьера, заполненного водой. По ходу движения можно увидеть тростниковые заросли на берегах, пройтись по лесным дороге среди соснового и смешанных лесов, здесь же произрастает большое количество луговых растений. Возможны встречи с представителями животного мира, например, на территории заказника гнездится 93 вида птиц." ©',
        link: 'https://ooptlo.ru/lazurnyie-vodyi.html',
        gpx: 'tracks/mshinskoe_boloto_omaps.gpx',
    },
    {
        name: 'Анисимовские озёра, "Медвежий лес"',
        info: '"Экотропа показывает разнообразие и уникальность севера Карельского перешейка: сельговый ландшафт, ледниковые озёра, реки и родники, заболоченные участки и болота, сосняки, ельники и, конечно, разнообразие животного мира. В заказнике «Анисимовские озёра» встречаются разнообразные насекомые, лесные и водоплавающие птицы, звери Карельского перешейка, в том числе и крупные представители: лось, кабан, волк, барсук и хозяин тайги – медведь." ©',
        link: 'https://ooptlo.ru/medvezhij-les.html',
        gpx: 'tracks/anisimovsky_lakes_omaps.gpx',
    },
    {
        name: 'Щелейки, "Обитель батюшки Онеги"',
        info: '"Половина экологической тропы проходит по живописным лесным дорогам, а вторая половина вдоль берега Онежского озера. На побережье озера на дневную поверхность выходят скальные породы, образованные кварцито-песчаниками, кварцитами, диабазами и габбро-диабазами. Растительные сообщества памятника природы весьма своеобразны и интересны. На вершинах скал распространены сосняки, в подлеске которых встречаются древовидные можжевельники; у подножия гряды и на её склонах – необычные для Ленинградской области сосново-кленовые леса." ©',
        link: 'https://ooptlo.ru/obitel-batyushki-onegi.html',
        gpx: 'tracks/scheleyki_omaps.gpx',
    },
    {
        name: 'Киперорт',
        info: '"Экотропа проходит по живописным ландшафтам полуострова Киперорта - самого крупного полуострова, вдающегося в Выборгский залив. Посетители пройдут по его западному каменистому берегу и восточному - песчаному, по сухим сосновым лесам и участкам широколиственных и черноольховых лесов. Помимо природы полуострова тропа расскажет об истории освоения Киперорта, сельском хозяйстве и познакомит с остатками фортификационных сооружений времён Второй мировой войны." ©',
        link: 'https://ooptlo.ru/myis-kiperort.html',
        gpx: 'tracks/kiperort_omaps.gpx',
    },
    {
        name: 'Оредежское кольцо',
        info: '"Экологическая тропа «Оредежское кольцо» расположена в Лужском районе Ленинградской области. Общая протяженность составляет 47 км: 10 км турист преодолевает пешком, 20 км – на велосипеде и 17 км – на байдарке вниз по течению реки Оредеж. Маршрут стал вторым многодневным маршрутом после маршрута «Тропа Южного берега». Кроме того, он объединяет разные виды активного туризма, что привлекательно для любителей активного отдыха." ©',
        link: 'https://ooptlo.ru/oredezhskoe-kolczo.html',
        gpx: 'tracks/oredezh_ring_omaps.gpx',
    },
    {
        name: 'Гладышевка',
        info: '"Экотропа знакомит с еловыми и сосновыми лесами заказника и обитающими в них растениями и животными. Здесь можно прогуляться вдоль берега реки вверх по течению, при этом дважды пересечь р. Гладышевка, осмотреть старую мельницу, участки р. Гладышевка и её берегов, по которым осуществлялся молевой сплав древесины, а также зарастающие сельскохозяйственные угодья." ©',
        link: 'https://ooptlo.ru/eco-gladyishevskij.html',
        gpx: 'tracks/gladyshevka_omaps.gpx',
    },
    {
        name: 'Лопухинка, Радоновые озёра',
        info: '"Тропа начинается с обустроенной деревянной купели, затем продолжается вдоль радоновых озер. В 19 веке здесь располагался бальнеологический курорт, который образовался благодаря целебным свойствам здешних вод из-за их уникального химического состава. Для личных целей здесь можно набрать воду из чистейшего родника." ©',
        link: 'https://ooptlo.ru/ecoradonovyie-istochniki-i-ozera-u-derevni-lopuxinka.html',
        gpx: 'tracks/lopuhinka_omaps.gpx',
    },
    {
        name: 'оз Сяберо, Тропа Александра Невского',
        info: '"Экологическая маршрут "Тропа Александра Невского" основан по эпизоду в давнем прошлом Полужья. По территории сегодняшнего Лужского района некогда лежали торговые пути, ведущие из Новгорода в Юрьев (Тарту). Этим же путем в 1242 году князь Александр Невский направлялся освобождать псковские земли от Ливонского ордена, который начал крестовый поход на Русь." ©',
        link: 'https://ooptlo.ru/tropa-aleksandra-nevskogo.html',
        gpx: 'tracks/syabero_omaps.gpx',
    },
    {
        name: 'Извара, Усадьба Рерихов',
        info: '"Экотропа находится в исторически значимом месте – бывшем родовом поместье великого русского художника – Николая Константиновича Рериха. Тысячью воспоминаний и ассоциаций был связан Николай Константинович с Изварой, имением своих родителей. Тропа проведет по сохранившимся до сего дня памятникам архитектуры, природным объектам. " ©',
        link: 'https://ooptlo.ru/muzej-usadba-n.k.-rerixa.html',
        gpx: 'tracks/izvara_omaps.gpx',
    },
    // --- ЛЫЖИ ---
    {
        name: 'Московский парк Победы',
        info: 'Абсолютно плоский круг.',
        gpx: 'tracks/ski/victory_park_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Парк Авиаторов',
        info: 'Абсолютно плоский круг, но можно покататься с единственной горки на севере парка.',
        gpx: 'tracks/ski/aviatorov_park_ski_omaps.gpx',
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
        type: ['SKI']
    },
    {
        name: 'Муринский парк',
        info: 'Плавный рельеф и лыжероллерная трасса летом. Но мамочки и собачники тоже считают её своей.',
        gpx: 'tracks/ski/murinsky_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Полюстровский парк',
        gpx: 'tracks/ski/poljustrovsky_park_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Екатерингофский парк',
        info: 'Абсолютно плоский круг.',
        gpx: 'tracks/ski/ekateringof_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Полежаевский парк',
        info: 'Единственная лыжная трасса с хоть сколько-то заметным рельефом на юге города.',
        gpx: 'tracks/ski/polezhaevsky_park_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'парк им.акд.Сахарова',
        info: 'Абсолютно плоский круг.',
        gpx: 'tracks/ski/sakharova_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Пушкин, Отдельный парк',
        info: 'Лыжная трасса с небольшим плавным рельефом.',
        gpx: 'tracks/ski/pushkin_otdelny_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Зеленогорск, марафонский круг',
        logo: 'priboy.webp',
        link: 'https://vk.com/bazapriboyzel',
        info: 'Целиком прокатывается далеко не каждый год.',
        gpx: 'tracks/ski/zelenogorsk_marathon_17_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Зеленогорск, пятёрка',
        logo: 'priboy.webp',
        link: 'https://vk.com/bazapriboyzel',
        gpx: 'tracks/ski/zelenogorsk_5_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Зеленогорск, десятка',
        logo: 'priboy.webp',
        link: 'https://vk.com/bazapriboyzel',
        gpx: 'tracks/ski/zelenogorsk_10_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Зеленогорск, пятнашка',
        logo: 'priboy.webp',
        link: 'https://vk.com/bazapriboyzel',
        info: 'Целиком прокатывается далеко не каждый год.',
        gpx: 'tracks/ski/zelenogorsk_15_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Зеленогорск, прогулочная лыжня',
        logo: 'priboy.webp',
        link: 'https://vk.com/bazapriboyzel',
        info: 'Спокойная трасса с минимумом рельефа.',
        gpx: 'tracks/ski/zelenogorsk_walk_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Зеленогорск, прогулочная лыжня с петлёй',
        logo: 'priboy.webp',
        link: 'https://vk.com/bazapriboyzel',
        info: 'Спокойная трасса с минимумом рельефа.',
        gpx: 'tracks/ski/zelenogorsk_walk_round_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Рощино',
        year: 2023,
        link: 'https://vk.com/public210675528',
        info: 'Лыжная трасса Рощино создана и поддерживается жителями Рощино. Подготовка, обслуживание и содержание осуществляется за счет собственных средств и за счет благотворительных средств не безразличных людей.',
        gpx: 'tracks/ski/roschino_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Сестрорецк, сквер Пограничников',
        gpx: 'tracks/ski/sestroretsk_pogranichnikov_ski_omaps.gpx',
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
        info: 'Возрождённая в 2024 году лыжная трасса рядом с УТЦ на месте старого лыжедрома.',
        gpx: 'tracks/ski/kavgolovo_virolaynen_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Кавголово, Динамо',
        info: 'Лыжная трасса в ООПТ "Токсовские высоты" со стартом у спорт.базы Динамо.',
        gpx: 'tracks/ski/kavgolovo_dinamo_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Осельки',
        info: 'Практически абсолютно плоская, часто самотопная, лыжня в окружении красивого леса.',
        gpx: 'tracks/ski/oselki_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Токсовский марафон 50км',
        year: 2024,
        info: 'Старт - от базы СКА.',
        link: 'https://vk.com/toksovocup',
        gpx: 'tracks/ski/toksovo_cup_50_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Toksovo Cup 17km',
        info: 'Старт - от базы СКА.',
        link: 'https://vk.com/toksovocup',
        gpx: 'tracks/ski/toksovo_cup_17_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Toksovo Cup 10km',
        info: 'Старт - от базы СКА.',
        link: 'https://vk.com/toksovocup',
        gpx: 'tracks/ski/toksovo_cup_10_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Токсово, ВИФК',
        info: 'Лыжная трасса на территории, принадлежащей МО РФ. Ограниченно доступна.',
        gpx: 'tracks/ski/toksovo_vifk_ski_omaps.gpx',
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
        type: ['SKI']
    },
    {
        name: 'Токсово, Малиновая гора, болотная петля',
        info: 'Классическая лыжня, подготавливаемая энтузиастами. Периодически тут проводятся массовые "Лыжные стрелы".',
        link: 'https://vk.com/malingora',
        gpx: 'tracks/ski/toksovo_malinova_gora_swamp_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Охта-парк',
        info: 'Ближайший и возможно главный горнолыжный курорт в Санкт-Петербурге. Беговая лыжная трасса бесплатна, но посещение курорта - платное.',
        link: 'https://vk.com/ohtapark',
        gpx: 'tracks/ski/ohtapark_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Лемболово',
        link: 'https://vk.com/trassalembolovo',
        gpx: 'tracks/ski/lembolovo_ski_omaps.gpx',
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
        type: ['SKI']
    },
    {
        name: 'Орехово, спортивный круг',
        link: 'https://vk.com/orehovo_ski',
        pic: './tracks/orekhovo/ski_1.jpg',
        gpx: 'tracks/ski/orekhovo_12_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Орехово, пятёрка',
        link: 'https://vk.com/orehovo_ski',
        pic: './tracks/orekhovo/ski_1.jpg',
        gpx: 'tracks/ski/orekhovo_5_ski_omaps.gpx',
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
        type: ['SKI']
    },
    {
        name: 'Гарболово, круг "Мастер"',
        logo: 'garbolovo_ski.webp',
        info: 'По-настоящему спортивный круг, протяженностью 7 км., бросающий вызов силе, выносливости, характеру и умению спортсмена. К кругу «Любитель» добавлены три длинных подъема и четыре очень скоростных и техничных спуска, которые раскрывают потенциал НАШЕЙ ТРАССЫ для тренировок и соревнований. Набор высоты на кругу: 145 метров! <br />ВАЖНО!!! Начинающим лыжникам кататься по этому кругу ОПАСНО!!! Берегите себя и окружающих!',
        link: 'https://vk.com/sport_v_garbolovo',
        gpx: 'tracks/ski/garbolovo_master_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Гарболово, круг "Любитель"',
        logo: 'garbolovo_ski.webp',
        info: 'Есть срезки на каждом километре дистанции. Присутствуют подъемы и спуски с перепадом до 15 метров, есть 4 относительно быстрых спуска. Катание на этому кругу требует уверенного владения лыжами, ну а сказочные пейзажи зимнего елового и соснового леса не оставят вас равнодушными!',
        link: 'https://vk.com/sport_v_garbolovo',
        gpx: 'tracks/ski/garbolovo_ljubitel_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Гарболово, круг "Семейный"',
        logo: 'garbolovo_ski.webp',
        info: 'Круг идеален для семейных прогулок с детьми, первоначального обучения технике конькового и классического хода. На нем нет опасных спусков и крутых подъемов, однако специально подобранный рельеф и красивые пейзажи позволят полноценно отдохнуть и освоить азы лыжной науки. Выход на круг прямо со стадиона и налево - по просеке 100 метров.',
        link: 'https://vk.com/sport_v_garbolovo',
        gpx: 'tracks/ski/garbolovo_family_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Гарболово, круг "Турист"',
        logo: 'garbolovo_ski.webp',
        info: 'Представляет собой круг длиной 12 километров(в состав которого входят трассы "Семейный", "Любитель" и частично "Мастер" - 6 км.) и 6 километровая дополнительная туристическая петля, которая периодически готовится под коньковый и классический ход. Петля проложена по живописному лесу и карельским болотам со средним рельефом. Однако на дополнительной петле присутствуют 2 очень длинных и технически сложных спуска и два крутых подъема. По сравнению с кругами «Семейный», «Любитель» и «Мастер» дополнительная петля довольно малолюдна, что многим лыжникам очень нравится. Отлично подходит уверенным в своих силах и подготовленным лыжным туристам. Уровень подготовки: как для круга «Мастер». Набор высоты: 210 метров. <br />ВАЖНО!!! На круге нет срезок! Пошли — идите до конца все 12 километров.',
        link: 'https://vk.com/sport_v_garbolovo',
        gpx: 'tracks/ski/garbolovo_tourist_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Павлово',
        info: 'Очень симпатичный лыжный круг с хорошим рельефом.',
        gpx: 'tracks/ski/pavlovo_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Парголово',
        info: 'Единственная в черте города лыжная трасса с более-менее серьёзным рельефом.',
        link: 'https://vk.com/skipargolovo',
        gpx: 'tracks/ski/pargolovo_ski_omaps.gpx',
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
        link: 'https://vk.com/igoradrive',
        gpx: 'tracks/ski/igora_ski_omaps.gpx',
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
        type: ['SKI']
    },
    {
        name: 'Выборг',
        gpx: 'tracks/ski/vyborg_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Дудергоф, Можайская',
        info: 'Отличная гора практически в черте города!',
        link: 'https://vk.com/svdudergof',
        gpx: 'tracks/ski/mozhaika_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Дудергофские медведи',
        info: 'Практически плоская лыжная трасса по полям.',
        link: 'https://vk.com/dudergof_bear',
        gpx: 'tracks/ski/dudergof_bears_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Ржевский л/п',
        info: 'Самотопный "конёк" и лыжня сбоку от дороги.',
        gpx: 'tracks/ski/rzhevsky_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Невский л/п, Богословка',
        info: 'Прокатывается нерегулярно.',
        gpx: 'tracks/ski/bogoslovka_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Кириши',
        link: 'https://vk.com/ori_ki',
        gpx: 'tracks/ski/kirishi_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Кировск',
        link: 'https://vk.com/club85930070',
        gpx: 'tracks/ski/kirovsk_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Гатчина',
        gpx: 'tracks/ski/gatchina_ski_omaps.gpx',
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
        type: ['SKI']
    },
    {
        name: 'Пески, лыжероллерная трасса Ярви',
        link: 'https://jarviresort.ru/',
        gpx: 'tracks/ski/peski_jarvi_omaps.gpx',
        logo: 'jarvi.gif',
        type: ['SKI']
    },
    {
        name: 'оз Сиркоярви',
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
        name: 'Тихвин', // TODO не показывается
        gpx: 'tracks/ski/tikhvin_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Тихвин, Фишева гора',
        gpx: 'tracks/ski/tikhvin_fisheva_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Юнтолово',
        gpx: 'tracks/ski/juntolovo_omaps.gpx',
        type: ['SKI']
    },
];
