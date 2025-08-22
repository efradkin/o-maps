let tracks = [
    {
        name: 'гряда Вярямянселькя, Петяярви',
        info: 'Круговой холмистый экологический маршрут от пл.Петяярви. Аппендикс к смотровой площадке не обязателен к посещению кмк. Мост через р.Волчью сейчас на ремонте и вместо него можно перейти по старой финской ГЭС, так даже интереснее.',
        link: 'https://ooptlo.ru/gryada-vyaryamyanselskaya-(malyij-marshrut).html',
        gpx: 'tracks/vyaryamyanselkya_petyajarvi_omaps.gpx',
        markir: true,
        pics: ['petyajarvi',7],
        start: 'OOPTLO',
        type: ['WALK','VELO']
    },
    {
        name: 'гряда Вярямянселькя, Берестовое оз',
        info: 'Холмистая эко-тропа соединяет районы Мичуринского и Петяярви. Довольно разнообразный ландшафт - прям на любой вкус. Из достопримечательностей - руины финской водяной мельницы.',
        link: 'https://ooptlo.ru/ozero-berestovoe.html',
        gpx: 'tracks/vyaryamyanselkya_berestovoe_omaps.gpx',
        markir: true,
        pics: ['berestovoe',8],
        start: 'OOPTLO',
        type: ['WALK','VELO']
    },
    {
        name: 'гряда Вярямянселькя, оз Светлое',
        info: 'Круговой экологический маршрут у села Петриченко. Плавный рельеф и красивые озёра. Из достопримечательностей - руины финской водяной мельницы и старинные амбары в Мичуринском (в стороне от тропы, но не далеко).',
        link: 'https://ooptlo.ru/gryada-vyaryamyanselskaya-(bolshoj-marshrut).html',
        gpx: 'tracks/vyaryamyanselkya_petrichenko_omaps.gpx',
        markir: true,
        pics: ['petrichenko',7],
        start: 'OOPTLO',
        type: ['WALK','VELO']
    },
    {
        name: 'Сестрорецкое болото',
        info: 'Пеший круговой экологический маршрут. Есть <a href="spb.html?onlymap=sestroretsky_swamp_2024">фото-квест</a>. Вообще, очень приятное место. Но если рассудок и жизнь дороги вам, держитесь подальше от торфяных болот...',
        link: 'https://oopt.spb.ru/protected_area/sestroretzkoye-boloto/',
        gpx: 'tracks/sestrorezkoe_boloto_omaps.gpx',
        markir: true,
        pics: ['sestrorezk',8],
        start: 'OOPTSPB',
        type: ['WALK']
    },
    {
        name: 'Колтушские высоты, "Камовые холмы"',
        info: 'Тут хорошо в любое время года - бег, вело, лыжи. Много песчаных холмистых дорог по полям и лесам. Но посещение платное (теоретически).',
        link: 'https://ooptlo.ru/marshrut-kamovyie-xolmyi.html',
        gpx: 'tracks/koltushi_kamy_omaps.gpx',
        markir: true,
        pics: ['koltushi_kamy',5],
        start: 'OOPTLO',
        type: ['WALK','SKI']
    },
    {
        name: 'Колтушские высоты, "Заячья тропа"',
        info: 'Лесистая часть Колтушской ООПТ. Паутина путаных тропинок. Посещение платное (теоретически).',
        link: 'https://ooptlo.ru/zayachya-tropa-v-pamyatnike-prirodyi-koltushskie-vyisotyi.html',
        gpx: 'tracks/hare_trail_omaps.gpx',
        markir: true,
        pics: ['hare_trail',5],
        start: 'OOPTLO',
        type: ['WALK','SKI']
    },
    {
        name: 'Зеленогорские озёра',
        info: 'Много озёр, много соснового леса, местами даже борового. Красота.',
        link: 'https://ooptlo.ru/6-ozer.html',
        gpx: 'tracks/zelenogorsk_omaps.gpx',
        pics: ['zelenogorsk',2],
        start: 'OOPTLO',
        type: ['WALK','VELO']
    },
    {
        name: 'Рощино, Линдуловская роща',
        info: 'По слухам, эти лиственницы ещё Пётр-I сажал.',
        link: 'https://ooptlo.ru/ecolindulovskaya-roshha.html',
        gpx: 'tracks/lindulovska_omaps.gpx',
        markir: true,
        // pics: ['roschino',5],
        start: 'OOPTLO',
        type: ['WALK']
    },
    {
        name: 'Кавголово, Курголовская этнотропа',
        info: 'Район старого лыжедрома. Знаменитый иммитационный круг тоже тут.',
        link: 'https://ooptlo.ru/kurgolovskaya-tropa.html',
        gpx: 'tracks/kurgolovo_omaps.gpx',
        pics: ['kurgolovo',2],
        start: 'OOPTLO',
        type: ['WALK']
    },
    {
        name: 'Кавголово, "Еловые холмы"',
        info: 'Район вроде бы небольшой, но когда бегаю тут ориентирование, всегда так или иначе запутываюсь - мистическое место.',
        link: 'https://ooptlo.ru/ecotoksovskie-vyisotyi.html',
        gpx: 'tracks/kavgolovo_omaps.gpx',
        markir: true,
        pics: ['kavgolovo',2],
        start: 'OOPTLO',
        type: ['WALK','VELO']
    },
    {
        name: 'Токсово, Малиновая гора',
        link: 'https://ooptlo.ru/ekomarshrut-malinovaya-gora.html',
        gpx: 'tracks/malinova_gora_omaps.gpx',
        markir: true,
        // pics: ['toksovo',5],
        start: 'OOPTLO',
        type: ['WALK','VELO']
    },
    {
        name: 'От Орехово до Ладоги',
        info: 'Надо будет обязательно когда-нибудь съездить до самой до Ладоги.',
        link: 'https://ooptlo.ru/ot-orekhovo-do-ladogi.html',
        gpx: {
            'полный маршрут 90км':'tracks/orekhovo_ladoga_90_omaps.gpx',
            '65км':'tracks/orekhovo_ladoga_65_omaps.gpx',
            '30км':'tracks/orekhovo_ladoga_30_omaps.gpx',
            '28км':'tracks/orekhovo_ladoga_28_omaps.gpx'
        },
        markir: true,
        pics: ['orekhovo',2],
        start: 'OOPTLO',
        type: ['WALK','VELO']
    },
    {
        name: 'Южное приладожье, Каньон реки Лава',
        info: 'Хорошее место, чтобы остановиться ненадолго по дороге на восток. Искали тут как-то трилобиттов.',
        link: 'https://ooptlo.ru/lava-marshrut.html',
        gpx: 'tracks/lava_omaps.gpx',
        markir: true,
        // pics: ['lava',5],
        start: 'OOPTLO',
        type: ['WALK']
    },
    {
        name: 'Коккорево, "Ладожские берега"',
        info: 'Ещё 10 лет назад Коккорево было просто диким пляжем, а теперь тут чего только нет.',
        link: 'https://ooptlo.ru/ekologicheskij-marshrut-v-zakaznike-kokkorevskij.html',
        gpx: 'tracks/kokkorevo_coast_omaps.gpx',
        markir: true,
        pics: ['kokkorevo',5],
        start: 'OOPTLO',
        type: ['WALK']
    },
    {
        name: 'Коккорево, оз Шимпалатовское',
        info: 'В Коккорево теперь можно не только на пляже обгорать, но и погулять с комфортом по лесу да по берегу лесного озера.',
        link: 'https://ooptlo.ru/ozero-shimpalatovskoe.html',
        gpx: 'tracks/kokkorevo_shimpalatovskoe_omaps.gpx',
        markir: true,
        pics: ['kokkorevo',5],
        start: 'OOPTLO',
        type: ['WALK']
    },
    {
        name: 'Луга, Шалово-Перечицкий',
        info: 'Прекрасный чистый боровой рогейнерский лес.',
        link: 'https://ooptlo.ru/lesnyie-dali.html',
        gpx: 'tracks/shalovo_omaps.gpx',
        markir: true,
        pics: ['shalovo',2],
        start: 'OOPTLO',
        type: ['WALK']
    },
    {
        name: 'Юкковские камы',
        info: 'А когда-то тут даже на горных лыжах катались.',
        link: 'https://ooptlo.ru/yukkovskie-kamyi.html',
        gpx: 'tracks/yukki_omaps.gpx',
        markir: true,
        // pics: ['yukki',5]
        start: 'OOPTLO',
        type: ['WALK']
    },
    {
        name: 'Лебяжье, Красная горка, "Тропа южного берега"',
        info: 'Береговая артиллерия и "бронепоезд" на запасном пути в Красной горке, Шепелевский маяк и сосновый бор.',
        link: 'https://ooptlo.ru/tropa-yuzhnogo-berega.html',
        gpx: 'tracks/lebyazhje_omaps.gpx',
        markir: true,
        start: 'OOPTLO',
        type: ['WALK']
    },
    {
        name: 'Берег Копорской губы',
        info: 'Экологическая тропа проходит по южному берегу Финского залива, по существующей дорожно-тропиночной сети, преимущественно по лесам (смешанным с сосной, березой, елью; сосновым), выходит на берег Копорской губы Финского залива.',
        link: 'https://ooptlo.ru/bereg-koporskoi-guby.html',
        gpx: 'tracks/koporie_omaps.gpx',
        markir: true,
        start: 'OOPTLO',
        type: ['WALK']
    },
    {
        name: 'Большое Кузёмкино',
        info: 'Комбинированная историческая и эколого-просветительская тропа располагается в южной части полуострова Кургальский. На ней Вы познакомитесь с природными комплексами и фортификационными сооружениями 1930-40х гг.',
        link: 'https://ooptlo.ru/bolshoe-kuzyomkino-–-narvskij-zaliv.html',
        markir: true,
        gpx: 'tracks/kuzemkino_omaps.gpx',
        start: 'OOPTLO',
        type: ['WALK','VELO']
    },
    {
        name: 'Колтушские высоты, "Верста"',
        info: 'Экотропа демонстрирует посетителям рельеф Колтушской возвышенности. Проходит по камовым холмам, пересекая межкамовую котловину. Свое начало тропа берет от холма с тотемными столбами и лабиринта «Вольный ветер».',
        link: 'https://ooptlo.ru/peshij-marshrut-po-koltushiskim-vyisotam.html',
        gpx: 'tracks/versta_omaps.gpx',
        markir: true,
        start: 'OOPTLO',
        type: ['WALK']
    },
    {
        name: 'Воейково, "Лесная тропа"',
        info: 'Тропа позволяет познакомиться с великолепными видами северной части Колтушской возвышенности. Нынешний живописный ландшафт этой территории сформировался в послеледниковое время и представлен чередованием песчаных холмов (камов) с ложбинами и котловинами, часть которых занята небольшими болотами и озёрами. На вершинах и склонах холмов сохранились таёжные хвойные леса возрастом более 100 лет.',
        link: 'https://ooptlo.ru/lesnaya-tropa.html',
        gpx: 'tracks/koltushi_lesnaya_tropa_omaps.gpx',
        markir: true,
        start: 'OOPTLO',
        type: ['WALK']
    },
    {
        name: 'Раковые озёра',
        info: 'Раковые озёра являются неглубокими, хорошо прогреваемыми, эвтрофными (с высоким содержанием органических веществ) высокопродуктивными водоёмами, обильно поросшими тростником и другими водными растениями. Раковые озёра – пример современного антропогенного заболачивания водоёмов, при котором скорость процесса болотообразования намного больше, чем в естественных экосистемах. Обмеление и зарастание озёр способствовали возникновению подходящих мест обитания и богатой кормовой базы для различных водоплавающих и околоводных птиц.',
        link: 'https://ooptlo.ru/rakovyie-ozyora.html',
        gpx: 'tracks/rakovy_lakes_omaps.gpx',
        markir: true,
        start: 'OOPTLO',
        type: ['WALK']
    },
    {
        name: 'Водный маршрут "Раковые озёра"',
        info: 'Тропа начинается от пирса на оз. Охотничье, затем продолжается по правому притоку ручья Долгунец, и выходит на оз. Большое Раковое, где заканчивается у пирса вблизи эколого-просветительского центра.',
        link: 'https://ooptlo.ru/vodnyj-marshrut-rakovye-ozyora.html',
        gpx: 'tracks/rakovy_lakes_water_omaps.gpx',
        start: 'OOPTLO',
        type: ['WATER']
    },
    {
        name: 'Раковые озёра, "Память Зимней войны"',
        info: 'Экологическая тропа посвящена военным действиям в период Советско-финляндской (Зимней) войны (1939–1940). Здесь расположены остатки объектов, принимавших участие в военных действиях в период Зимней войны.',
        link: 'https://ooptlo.ru/istoricheskij-marshrut-v-zakaznike-rakovyie-ozyora.html',
        gpx: 'tracks/rakovy_lakes_winter_war_omaps.gpx',
        markir: true,
        start: 'OOPTLO',
        type: ['WALK']
    },
    {
        name: 'Долина реки Выбья и Лужская губа',
        info: 'Экологическая тропа располагается на стрелке между рекой Выбья и Лужской губой Финского залива. Эта часть территории заказника «Кургальский» отличается высоким разнообразием природных ландшафтов. По мере движения по тропе они сменяют друг друга, словно картинки в режиме слайд-шоу: сосны и вереск, таежный еловый лес, приречные и приморские сообщества растений, песчаные дюны. Эта динамичная смена ландшафтов и составляет главную  интригу прогулки. Дополнением к ней могут стать встречи с различными представителями местной фауны, например, пернатыми: малым лебедем и черной казаркой.',
        link: 'https://ooptlo.ru/dolina-reki-vyibya-i-luzhskaya-guba.html',
        gpx: 'tracks/vibya_guba_omaps.gpx',
        start: 'OOPTLO',
        type: ['WALK']
    },
    {
        name: 'Долина реки Охта',
        info: 'Экотропа расположена в кластере «Река Охта» природного парка «Токсовский». Посетив тропу, можно познакомится с ландшафтами камовых холмов, относительные высоты которых могут достигать 30 м, еловыми лесами, где встречаются деревья возрастом 160 лет, и долиной реки Охта, одной из крупнейших притоков реки Невы.',
        link: 'https://ooptlo.ru/dolina-reki-oxta.html',
        gpx: 'tracks/okhta_omaps.gpx',
        start: 'OOPTLO',
        type: ['WALK','VELO']
    },
    {
        name: 'Долина реки Рагуша',
        info: 'Здесь, на небольшой территории, можно видеть формирование глубоко врезанной речной долины и работу карстовых процессов, приводящую к образованию уникального подземного русла реки. Здесь же, на крохотном клочке земли, находятся популяции сразу нескольких видов редчайших для области растений и встречается немало видов очень редких и охраняемых животных – насекомых, рыб, земноводных, птиц и млекопитающих.',
        link: 'https://ooptlo.ru/ekologicheskij-marshrut-dolina-reki-ragusha.html',
        gpx: 'tracks/ragusha_omaps.gpx',
        markir: true,
        start: 'OOPTLO',
        type: ['WALK']
    },
    {
        name: 'Велькота, "Дубравы"',
        info: 'Экотропа расположилась на территории старинного парка, бывшего частью имения Блоков. Здесь растут старые дубы, ясени, липы, клёны, а также не свойственные нашим лесам тополь белый и сирень. В центральной части можно увидеть интересное природное явление – карстовую воронку, вокруг которой и был разбит парк.',
        link: 'https://ooptlo.ru/ecodubravyi-u-derevni-velkota.html',
        gpx: 'tracks/velkota_omaps.gpx',
        markir: true,
        start: 'OOPTLO',
        type: ['WALK']
    },
    {
        name: 'Кивипарк, "Каменистая тропа"',
        info: 'На тропе можно познакомиться с прибрежной зоной Выборгского залива: увидеть сельги, граниты рапакиви и особые растительные сообщества. На утесе расположена смотровая площадка, с которой открывается красивый вид на залив. Длина маршрута составляет почти 12 километров — осенью прогулка займет почти весь световой день.',
        link: 'https://ooptlo.ru/kamenistaya-tropa.html',
        gpx: 'tracks/kivipark_omaps.gpx',
        markir: true,
        start: 'OOPTLO',
        type: ['WALK']
    },
    {
        name: 'Мелководное оз, "Карельская тишина"',
        info: 'Экологическая тропа ведет через различные типы лесов, включая мелколиственные, еловые и сосновые леса, приуроченные к каменнистым сельгам, а так же через протоку Кивистёнсалми, соединяющую озёра Мелководное и Луговое. Кроме того, на тропе вы узнаете о финской истории этих мест, в том числе о коммуне Вуоксенранта и её образе жизни, и увидите лютеранскую кирху 1935 года постройки в поселке Озерское.',
        link: 'https://ooptlo.ru/karelskaya-tishina.html',
        gpx: 'tracks/melkovodnoe_omaps.gpx',
        markir: true,
        start: 'OOPTLO',
        type: ['WALK','VELO']
    },
    {
        name: 'Воейково, Колтушский веломаршрут-1',
        info: 'Маршрут в основном предназначен для прохождения в летний сезон. С момента стаивания снега до первого снега – с мая по октябрь. Кроме того, этот маршрут можно использовать для зимних лыжных прогулок в период с декабря по март.',
        link: 'https://ooptlo.ru/velomarshrut-po-koltushiskim-vyisotam.html',
        gpx: 'tracks/koltushi_velo_1_omaps.gpx',
        start: 'OOPTLO',
        type: ['VELO']
    },
    {
        name: 'Колтушский веломаршрут-2',
        info: 'Веломаршрут позволяет насладиться красивыми видами хвойных лесов и постледниковых ландшафтов, промаркирован аншлагами и указателями и состоит из нескольких трасс, рассчитанных как на новичков, так и на профессионалов. При этом он проложен по существующим тропам, чтобы не страдали самые ценные, охраняемые природные комплексы ООПТ.',
        link: 'https://ooptlo.ru/velosipednyij-marshrut.html',
        gpx: 'tracks/koltushi_velo_2_omaps.gpx',
        start: 'OOPTLO',
        type: ['VELO']
    },
    {
        name: 'Лисино-Корпус, "Колыбель русского лесоводства"',
        info: 'Прохождение по тропе позволяет увидеть следующие особо охраняемые природные комплексы и объекты заказника «Лисинский»: дендропарк с культурами лиственницы сибирской и других ценных лесных пород, участки старовозрастных ельников и сосняков, глубокую живописную долину реки Лустовки, учебный лесной питомник с посадками ели и сосны.',
        link: 'https://ooptlo.ru/ecolisinskij.html',
        gpx: 'tracks/lisinsky_omaps.gpx',
        markir: true,
        start: 'OOPTLO',
        type: ['WALK']
    },
    {
        name: 'Вепсский лес, "Курбинская тропа"',
        info: 'Экотропа ведёт через живописные озёра Вепсского леса – оз. Маякозеро и оз. Азикозеро. Озёра, которые встречаются на данной экологической тропе, относятся к Ладвинской группе озёр. Здесь отмечены озёрные котловины, образованные в процессе выпахивания и разрушающей горные породы деятельности ледника, а также болотные озёра с берегами из торфа.',
        link: 'https://ooptlo.ru/kurbinskaya-tropa.html',
        gpx: 'tracks/kurbinskaya_tropa_omaps.gpx',
        markir: true,
        start: 'OOPTLO',
        type: ['WALK']
    },
    {
        name: 'Вепсский лес, "Ладвинская тропа"',
        info: 'Экотропа к деревне Ладва познакомит посетителей с элементами ледникового и водно-ледникового рельефа, растительностью средней тайги, озёрами ледникового происхождения. Конец экотропы приурочен к вепсской деревне Ладва.',
        link: 'https://ooptlo.ru/ladvinskaya.html',
        gpx: 'tracks/ladvinskaya_tropa_omaps.gpx',
        markir: true,
        start: 'OOPTLO',
        type: ['WALK']
    },
    {
        name: 'Вепсский лес, "Лукинская тропа"',
        info: 'Экотропа интересна расположенными на её линии родниками «Большой каскад», долиной реки Урья. Так называемый «дом-пряник» является примером старинного вепсского дома с его наличниками и причелинами. Из природных объектов осмотра здесь – камовый холм.',
        link: 'https://ooptlo.ru/lukinskaya-tropa.html',
        gpx: 'tracks/lukinskaya_tropa_omaps.gpx',
        markir: true,
        start: 'OOPTLO',
        type: ['WALK']
    },
    {
        name: 'Вепсский лес, Тропа к "Святому камню"',
        info: 'Экологическая тропа проходит по краю резервата "Висячие озёра", в долине реки Чурручей, и ведёт к месту поклонения нескольких поколений вепсов - "Святому камню". Он является обнажением коренных горных пород, сложен песчаником. Почитание "Святого камня" известно с конца XIX века.  ',
        link: 'https://ooptlo.ru/tropa-k-svyatomu-kamnyu.html',
        gpx: 'tracks/sacred_stone_omaps.gpx',
        markir: true,
        start: 'OOPTLO',
        type: ['WALK']
    },
    {
        name: 'Новинка, Мшинское болото, "Лазурные воды"',
        info: 'Экотропа проходит по восточной окраине Мшинской болотной системы, по берегу песчаного карьера, заполненного водой. По ходу движения можно увидеть тростниковые заросли на берегах, пройтись по лесным дороге среди соснового и смешанных лесов, здесь же произрастает большое количество луговых растений. Возможны встречи с представителями животного мира, например, на территории заказника гнездится 93 вида птиц.',
        link: 'https://ooptlo.ru/lazurnyie-vodyi.html',
        gpx: 'tracks/mshinskoe_boloto_omaps.gpx',
        markir: true,
        start: 'OOPTLO',
        type: ['WALK']
    },
    {
        name: 'Анисимовские озёра, "Медвежий лес"',
        info: 'Экотропа показывает разнообразие и уникальность севера Карельского перешейка: сельговый ландшафт, ледниковые озёра, реки и родники, заболоченные участки и болота, сосняки, ельники и, конечно, разнообразие животного мира. В заказнике «Анисимовские озёра» встречаются разнообразные насекомые, лесные и водоплавающие птицы, звери Карельского перешейка, в том числе и крупные представители: лось, кабан, волк, барсук и хозяин тайги – медведь.',
        link: 'https://ooptlo.ru/medvezhij-les.html',
        gpx: 'tracks/anisimovsky_lakes_omaps.gpx',
        start: 'OOPTLO',
        type: ['WALK','VELO']
    },
    {
        name: 'Щелейки, "Обитель батюшки Онеги"',
        info: 'Половина экологической тропы проходит по живописным лесным дорогам, а вторая половина вдоль берега Онежского озера. На побережье озера на дневную поверхность выходят скальные породы, образованные кварцито-песчаниками, кварцитами, диабазами и габбро-диабазами. Растительные сообщества памятника природы весьма своеобразны и интересны. На вершинах скал распространены сосняки, в подлеске которых встречаются древовидные можжевельники; у подножия гряды и на её склонах – необычные для Ленинградской области сосново-кленовые леса.',
        link: 'https://ooptlo.ru/obitel-batyushki-onegi.html',
        gpx: 'tracks/scheleyki_omaps.gpx',
        start: 'OOPTLO',
        type: ['WALK']
    },
    {
        name: 'Киперорт',
        info: 'Экотропа проходит по живописным ландшафтам полуострова Киперорта - самого крупного полуострова, вдающегося в Выборгский залив. Посетители пройдут по его западному каменистому берегу и восточному - песчаному, по сухим сосновым лесам и участкам широколиственных и черноольховых лесов. Помимо природы полуострова тропа расскажет об истории освоения Киперорта, сельском хозяйстве и познакомит с остатками фортификационных сооружений времён Второй мировой войны.',
        link: 'https://ooptlo.ru/myis-kiperort.html',
        gpx: 'tracks/kiperort_omaps.gpx',
        markir: true,
        start: 'OOPTLO',
        type: ['WALK','VELO']
    },
    {
        name: 'Оредежское кольцо',
        info: 'Экологическая тропа «Оредежское кольцо» расположена в Лужском районе Ленинградской области. Общая протяженность составляет 47 км: 10 км турист преодолевает пешком, 20 км – на велосипеде и 17 км – на байдарке вниз по течению реки Оредеж. Маршрут стал вторым многодневным маршрутом после маршрута «Тропа Южного берега». Кроме того, он объединяет разные виды активного туризма, что привлекательно для любителей активного отдыха.',
        link: 'https://ooptlo.ru/oredezhskoe-kolczo.html',
        gpx: 'tracks/oredezh_ring_omaps.gpx',
        markir: true,
        start: 'OOPTLO',
        type: ['WALK','VELO','WATER']
    },
    {
        name: 'Гладышевка',
        info: 'Экотропа знакомит с еловыми и сосновыми лесами заказника и обитающими в них растениями и животными. Здесь можно прогуляться вдоль берега реки вверх по течению, при этом дважды пересечь р. Гладышевка, осмотреть старую мельницу, участки р. Гладышевка и её берегов, по которым осуществлялся молевой сплав древесины, а также зарастающие сельскохозяйственные угодья.',
        link: 'https://ooptlo.ru/eco-gladyishevskij.html',
        gpx: 'tracks/gladyshevka_omaps.gpx',
        markir: true,
        start: 'OOPTLO',
        type: ['WALK']
    },
    {
        name: 'Лопухинка, Радоновые озёра',
        info: 'Тропа начинается с обустроенной деревянной купели, затем продолжается вдоль радоновых озер. В 19 веке здесь располагался бальнеологический курорт, который образовался благодаря целебным свойствам здешних вод из-за их уникального химического состава. Для личных целей здесь можно набрать воду из чистейшего родника.',
        link: 'https://ooptlo.ru/ecoradonovyie-istochniki-i-ozera-u-derevni-lopuxinka.html',
        gpx: 'tracks/lopuhinka_omaps.gpx',
        markir: true,
        start: 'OOPTLO',
        type: ['WALK']
    },
    {
        name: 'Сяберо оз, Тропа Александра Невского',
        info: 'Экологическая маршрут "Тропа Александра Невского" основан по эпизоду в давнем прошлом Полужья. По территории сегодняшнего Лужского района некогда лежали торговые пути, ведущие из Новгорода в Юрьев (Тарту). Этим же путем в 1242 году князь Александр Невский направлялся освобождать псковские земли от Ливонского ордена, который начал крестовый поход на Русь.',
        link: 'https://ooptlo.ru/tropa-aleksandra-nevskogo.html',
        gpx: 'tracks/syabero_omaps.gpx',
        markir: true,
        start: 'OOPTLO',
        type: ['WALK']
    },
    {
        name: 'Извара, Усадьба Рерихов',
        info: 'Экотропа находится в исторически значимом месте – бывшем родовом поместье великого русского художника – Николая Константиновича Рериха. Тысячью воспоминаний и ассоциаций был связан Николай Константинович с Изварой, имением своих родителей. Тропа проведет по сохранившимся до сего дня памятникам архитектуры, природным объектам. ',
        link: 'https://ooptlo.ru/muzej-usadba-n.k.-rerixa.html',
        gpx: 'tracks/izvara_omaps.gpx',
        markir: true,
        start: 'OOPTLO',
        type: ['WALK']
    },
    {
        name: 'Кузьмоловский карьер',
        info: 'Однодневный маршрут во Всеволожском районе Ленинградской области к Большому и Малому Кузьмоловским карьерам.',
        link: 'https://rutrail.org/trails/64/',
        gpx: 'tracks/kuzmolovo_karier_omaps.gpx',
        markir: true,
        start: 'RUTRAIL',
        type: ['WALK']
    },
    {
        name: 'Тропа Лехмалахти',
        info: 'Линейный маршрут 14 км вдоль берега Ладожского озера у пролива Лехмалахти.',
        link: 'https://rutrail.org/trails/120/',
        gpx: 'tracks/lehmalahti_omaps.gpx',
        markir: true,
        start: 'RUTRAIL',
        type: ['WALK']
    },
    {
        name: 'Большой Алольский круг',
        info: 'Прогулочный и беговой маршрут вокруг турбазы Алоль, с бродом через р. Великая. Песчаные дороги, прозрачные сосновые леса и восемь разных озер.',
        link: 'https://rutrail.org/trails/55/',
        gpx: 'tracks/alol_around_omaps.gpx',
        markir: true,
        start: 'RUTRAIL',
        type: ['WALK','RUN']
    },
    {
        name: 'Большая Валдайская тропа',
        info: 'Многодневный линейный маршрут, позволяющий ознакомиться с удивительными уголками природы Валдайского национального парка и прилегающей к нему территории. Природные и культурные ландшафты, памятники истории и культуры, отдых на лоне первозданной природы подарят яркие впечатления от красот валдайского края. Центральная часть маршрута проходит по территории особо охраняемой зоны национально парка «Валдайский», где изюминкой является озеро Русское – таинственное, живописное, неповторимое…',
        link: 'https://rutrail.org/trails/95/',
        markir: true,
        gpx: 'tracks/valdai_path_omaps.gpx',
        start: 'RUTRAIL',
        type: ['WALK']
    },
    {
        name: 'Комаровский берег',
        info: 'В 2014 году на территории памятника природы «Комаровский берег» была открыта первая в Санкт-Петербурге экотропа, проложенная на ООПТ. Тропа оснащёна тематическими стендами с информацией о природных и исторических достопримечательностях памятника природы, деревянными настилами для удобства ходьбы по лесу и защиты почвы, скамейками, кормушками для птиц и беседкой. Главный вход на экотропу находится на ул. Морской, но попасть на неё можно и из других мест.',
        link: 'https://oopt.spb.ru/protected_area/komarovskiy-bereg/',
        gpx: 'tracks/komarovo_coast_omaps.gpx',
        markir: true,
        start: 'OOPTSPB',
        type: ['WALK']
    },
    {
        name: 'Западный Котлин',
        info: 'Занимает всю северо-западную оконечность острова Котлин. Природные комплексы заказника представлены черноольховыми и молодыми осиновыми лесами, разреженными ивняками на береговых валах и приморскими травянистыми сообществами на песчаных побережьях. Прилегающие к острову мелководья с тростниковыми и камышовыми зарослями имеют большое значение как места гнездования и миграционных стоянок птиц.',
        link: 'https://oopt.spb.ru/protected_area/zapadniy-kotlin/',
        gpx: 'tracks/zapadniy_kotlin_omaps.gpx',
        markir: true,
        start: 'OOPTSPB',
        type: ['WALK']
    },
    {
        name: 'Дудергофские высоты',
        info: 'Возвышенность, сложенная двумя крупными крутосклонными холмами — горой Вороньей и горой Ореховой. Холмы покрыты широколиственным лесом, не свойственным территории Санкт-Петербурга и характерным для более южных широт. Абсолютная высота Ореховой горы равна 176 метрам — это высшая точка Санкт-Петербурга.',
        link: 'https://oopt.spb.ru/protected_area/dudergofskiye-visoti/',
        gpx: 'tracks/dudergof_heights_omaps.gpx',
        markir: true,
        start: 'OOPTSPB',
        type: ['WALK']
    },
    {
        name: 'Бугаиная тропа',
        info: 'Экотропа «Бугаиная тропа» проходит по заболоченной местности вдоль побережья Финского залива в парке «Ближние дубки», созданному ещё во времена Петра Первого. Экотропа оборудована деревянным настилом, позволяющим побывать там, где по земле не пройдёшь — среди бурной прибрежной растительности северного побережья Невской Губы.',
        link: 'https://eco-trails.ru/catalog/lenoblast/bugainaya-tropa/',
        gpx: 'tracks/bugaina_trail_omaps.gpx',
        markir: true,
        type: ['WALK']
    },
    {
        name: 'У Лукоморья',
        info: 'Сказочная экотропа «У Лукоморья» проходит по старинному парку «Ближние дубки», созданному ещё во времена Петра Первого и находящемуся на территории природного заказника «Северное побережье Невской губы». Экотропа считается детской, но по ней приятно погулять и взрослым.',
        link: 'https://oopt.spb.ru/protected_area/severnoye-poberezhe-nevskoy-gubi/',
        gpx: 'tracks/u_lukomoria_omaps.gpx',
        markir: true,
        type: ['WALK']
    },
    {
        name: 'Ленинская тропа',
        info: 'Тропа проходит через музей "Шалаш Ленина в Разливе". По пути есть оборудованные места для отдыха. Она прекрасна для любых видов активности - бег, вело, ролики, пешие прогулки.',
        link: 'https://ru.wikiloc.com/marshruty-progulka/ekotropa-leninskaia-tropa-ecotrail-leninskaya-tropa-216506746',
        gpx: 'tracks/tarkhovka_lenin_trail_omaps.gpx',
        start: 'WIKILOC',
        type: ['WALK','VELO','RUN']
    },
    {
        name: 'Зеленогорск - Лахта',
        info: 'Популярнейший маршрут в Куротном районе вдоль северного берега Невской губы. Прекрасен для любых видов активности - велосипед, бег, ролики, пешие прогулки.',
        link: 'https://ru.wikiloc.com/marshruty-velosiped/ot-zelenogorska-do-muzhestva-132109579',
        gpx: 'tracks/velo/zelenogorsk_lakhta_omaps.gpx',
        start: 'WIKILOC',
        type: ['VELO','WALK','RUN']
    },
    {
        name: 'Профиль Пушкина',
        info: 'Профиль Пушкина - Новогодняя пробежка в Пушкине.',
        link: 'https://hike.ru/pushkin_track.html',
        gpx: 'tracks/run/pushkin_profile_omaps.gpx',
        type: ['RUN','WALK']
    },
    {
        name: 'Кузнечное, тропа Хо Ши Мина',
        info: 'Эта дорога появилась ещё в начале 1960-х. Ведёт она к очень живописному Ястребиному озеру. Отправляясь по этой тропе от гранитного карьера в Кузнечном, вы пересечёте несколько ручьёв, увидите фундамент финского хутора начала прошлого века, пройдёте вдоль озера и окажетесь у подножья скал.',
        link: 'https://pohodski.ru/blog/tropa-khoshimina-leningradskaya-oblast',
        gpx: 'tracks/kuznechnoe_ho_shi_mina_omaps.gpx',
        type: ['WALK']
    },
    {
        name: 'Сиверский - Вырица',
        info: 'Очень удобный маршрут - от одной электрички до другой.',
        link: 'https://katerinakost.ru/blog/poselok-siverskaja-marshrut',
        gpx: 'tracks/siversky_vyritsa_omaps.gpx',
        type: ['WALK']
    },
    {
        name: 'Борницкие карьеры',
        info: 'Самый марсианский пейзаж в окрестностях Петербурга.',
        link: 'https://it-s-a-wonderful-world.ru/bornickie-karery/',
        gpx: 'tracks/bornitsky_career_omaps.gpx',
        pics: ['bornitsky',4],
        type: ['WALK']
    },
    {
        name: 'Гатчина, экотропа',
        info: 'На прогулке по экотропе, наряду с отдыхом и наслаждением красотой природы, вы узнаете о местных экологических системах, видах растений и животных, процессах и явлениях.',
        link: 'http://www.gatchina.org/eco/',
        gpx: {
            'официальный трек':'tracks/gatchina_eco_oficial_omaps.gpx',
            'чей-то трек':'tracks/gatchina_eco_omaps.gpx'
        },
        logo: 'gatchina.gif',
        type: ['WALK']
    },
    {
        name: 'Пёс',
        year: 2022,
        gpx: 'tracks/gpsart_dog_12km_220312.gpx',
        start: 'GPSART',
        type: ['WALK','RUN']
    },
    {
        name: 'Летучая мышь',
        year: 2022,
        gpx: 'tracks/gpsart_bat_11km_220330.gpx',
        start: 'GPSART',
        type: ['WALK','RUN']
    },
    {
        name: 'Пиранья',
        year: 2022,
        gpx: 'tracks/gpsart_piranha_10km_220921.gpx',
        start: 'GPSART',
        type: ['WALK','RUN']
    },
    {
        name: 'Слон',
        year: 2022,
        gpx: 'tracks/gpsart_elephant_10km_220928.gpx',
        start: 'GPSART',
        type: ['WALK','RUN']
    },
    {
        name: 'Кролик',
        year: 2022,
        gpx: 'tracks/gpsart_rabbit_17km_221012.gpx',
        start: 'GPSART',
        type: ['WALK','RUN']
    },
    {
        name: 'Ведьма',
        year: 2022,
        gpx: 'tracks/gpsart_witch_17km_220427.gpx',
        start: 'GPSART',
        type: ['WALK','RUN']
    },
    {
        name: 'Всадник',
        year: 2022,
        gpx: 'tracks/gpsart_horseman_10km_220720.gpx',
        start: 'GPSART',
        type: ['WALK','RUN']
    },
    {
        name: 'Паровоз',
        year: 2022,
        gpx: 'tracks/gpsart_locomotive_10km_220824.gpx',
        start: 'GPSART',
        type: ['WALK','RUN']
    },
    {
        name: 'Такса',
        year: 2023,
        gpx: 'tracks/gpsart_dachshund_19km_230405.gpx',
        start: 'GPSART',
        type: ['WALK','RUN']
    },
    {
        name: 'Судно',
        year: 2023,
        gpx: 'tracks/gpsart_vessel_8km_230621.gpx',
        start: 'GPSART',
        type: ['WALK','RUN']
    },
    {
        name: 'Мышь',
        year: 2023,
        gpx: 'tracks/gpsart_mouse_13km_231025.gpx',
        start: 'GPSART',
        type: ['WALK','RUN']
    },
    {
        name: 'Собака',
        year: 2024,
        gpx: 'tracks/gpsart_dog_17km_240320.gpx',
        start: 'GPSART',
        type: ['WALK','RUN']
    },
    {
        name: 'Акула',
        year: 2024,
        gpx: 'tracks/gpsart_shark_12km_240403.gpx',
        start: 'GPSART',
        type: ['WALK','RUN']
    },
    {
        name: 'Скуби-Ду',
        year: 2024,
        gpx: 'tracks/gpsart_piglet_12km_240904.gpx',
        start: 'GPSART',
        type: ['WALK','RUN']
    },
    {
        name: 'Цветок',
        year: 2025,
        gpx: 'tracks/gpsart_flower_21km_250305.gpx',
        start: 'GPSART',
        type: ['WALK','RUN']
    },
    {
        name: 'Волк',
        year: 2025,
        gpx: 'tracks/gpsart_wolf_16km_250312.gpx',
        start: 'GPSART',
        type: ['WALK','RUN']
    },
    // --- ЛЫЖИ ---
    {
        name: 'Московский парк Победы',
        info: 'Абсолютно плоский самотопный круг. Дорожки часто посыпают песком.',
        gpx: 'tracks/ski/victory_park_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Парк Авиаторов',
        info: 'Абсолютно плоский самотопный круг, но можно покататься с единственной горки на северо-западе парка.',
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
        name: 'Крестовский остров',
        link: 'https://vk.com/spbrun_run',
        info: 'Широкая плоская трасса с двумя искусственными горками.',
        gpx: 'tracks/ski/krestovsky_ski_omaps.gpx',
        logo: 'spb_sport.gif',
        type: ['SKI']
    },
    {
        name: 'Пушкин, Отдельный парк',
        info: 'Лыжная трасса с небольшим плавным рельефом.',
        gpx: 'tracks/ski/pushkin_otdelny_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Александровская',
        info: 'Плоская самотопная лыжня.',
        gpx: 'tracks/ski/aleksandrovskaya_ski_omaps.gpx',
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
        name: 'Сестрорецк, парк Дубки',
        gpx: 'tracks/ski/sestroretsk_dubki_ski_omaps.gpx',
        type: ['SKI']
    },
    {
        name: 'Сертолово',
        link: 'https://vk.com/sport_v_sertolovo',
        info: 'Лыжная трасса с небольшим плавным рельефом по полю. Два круга - большой 1700м и малый 400м.',
        gpx: 'tracks/ski/sertolovo_ski_omaps.gpx',
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
        type: ['SKI']
    },
    {
        name: 'Кавголово, УТЦ',
        link: 'https://vk.com/utclesgaft',
        info: 'Учебно тренировочный центр. Самая цивильная спортивная трасса области. В т.ч. круглогодичная крытая лыжная трасса ("труба").',
        gpx: 'tracks/ski/utc_ski_omaps.gpx',
        logo: 'utc.gif',
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
        markir: true,
        type: ['SKI']
    },
    {
        name: 'Токсово, Малиновая гора, болотная петля',
        info: 'Абсолютно плоская классическая лыжня по болоту, подготавливаемая энтузиастами.',
        link: 'https://vk.com/malingora',
        gpx: 'tracks/ski/toksovo_malinova_gora_swamp_ski_omaps.gpx',
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
        year: 2025,
        date: '19.01',
        link: 'https://drive-igora.ru/events/lyzhnaya-gonka-igora-drayv/',
        results: 'https://reg.o-time.ru/race/25069',
        gpx: {
            '10км':'tracks/ski/igora_ski_10km_omaps.gpx',
            '5км':'tracks/ski/igora_ski_omaps.gpx'
        },
        logo: 'igora.webp',
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
        name: 'Выборгский лыжный марафон',
        year: 2025,
        date: '22.02',
        link: 'https://vk.com/vyborgmarathon',
        results: 'https://reg.o-time.ru/race/25053',
        info: 'Гонка прошла по кругу 5 км. 1-30км.',
        gpx: 'tracks/ski/vyborg_ski_omaps.gpx',
        markir: true,
        logo: 'vyborg.webp',
        type: ['SKI']
    },
    {
        name: 'Туутари',
        info: 'Довольно плоская и ветренная лыжная трасса, раскатанная под конёк.',
        link: 'https://www.tyytari.ru/holidays/photos/42/',
        gpx: 'tracks/ski/tuutari_ski_omaps.gpx',
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
        year: 2024,
        date: '2.03',
        info: 'Практически плоская лыжная трасса по полям.',
        link: 'https://vk.com/dudergof_bear',
        results: 'https://reg.o-time.ru/race/24298',
        gpx: 'tracks/ski/dudergof_bears_ski_omaps.gpx',
        logo: 'dudergof_bear.gif',
        type: ['SKI']
    },
    {
        name: 'Ржевский л/п',
        link: 'https://vk.com/sport_krgv1',
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
        type: ['SKI']
    },
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
        year: 2025,
        date: '17.08',
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
        year: 2025,
        date: '8.06',
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
        year: 2025,
        date: '3.05',
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
        year: 2023,
        date: '7.10',
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
        year: 2024,
        date: '11.08',
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
        year: 2022,
        date: '10.05',
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
        name: 'Hero League Trail',
        year: 2022,
        date: '2.07',
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
        year: 2025,
        date: '31.05',
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
        year: 2025,
        date: '1.05',
        link: 'https://hardadventure.ru/mud2025',
        results: 'https://reg.o-time.ru/race/25023',
        info: 'Добавили рельефа, болот и чуточку грязи, - и вышла настоящая конфетка! 5-12км.',
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
        year: 2025,
        date: '12.01',
        link: 'https://hardadventure.ru/snow2025',
        results: 'https://reg.o-time.ru/race/25021',
        info: 'Вас ждёт короткий, но физически сложный трейл по снежным горкам.',
        gpx: 'tracks/run/suoranda_hardadventure_snow_2025_omaps.gpx',
        start: 'HARD',
        type: ['RUN']
    },
    {
        name: 'Токсово, Hard Trail | NIGHT',
        year: 2024,
        date: '26.10',
        link: 'https://hardadventure.ru/night2024',
        results: 'https://reg.o-time.ru/race/24055',
        info: 'Ночной трейл с фонариками в канун Хэллоуина! 7-13км.',
        gpx: 'tracks/run/toksovo_hardadventure_night_2024_omaps.gpx',
        start: 'HARD',
        type: ['RUN']
    },
    {
        name: 'Первомайское, Hard Trail | SAND',
        year: 2024,
        date: '6.10',
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
        year: 2024,
        date: '28.04',
        link: 'https://hardadventure.ru/chspb24',
        results: 'https://reg.o-time.ru/race/24349',
        info: 'Вас ждет скоростная и насыщенная дистанция, которая сочетает в себе всё лучшее от этой местности: захватывающие спуски и подъемы, чистый сосновый лес, болота, ручьи и прочие прелести весеннего леса.',
        gpx: 'tracks/run/orekhovo_hardadventure_2024_omaps.gpx',
        start: 'HARD',
        type: ['RUN']
    },
    {
        name: 'Моторное (Воробьёво оз), Hard Trail | FEST',
        year: 2024,
        date: '1.06',
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
        name: 'Красный холм, Царь скалы',
        year: 2022,
        date: '11.06',
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
        name: 'Каменногорск, Скальный трейл',
        year: 2024,
        date: '15.06',
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
        name: 'Пруды, Скальный трейл',
        year: 2025,
        date: '14.06',
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
        name: 'Яппиля, Весенний трейл',
        year: 2025,
        date: '26.04',
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
        name: 'Банное оз, ВьюнОк трейл',
        year: 2024,
        date: '20.10',
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
        year: 2025,
        date: '9.08',
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
        year: 2024,
        date: '6.10',
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
        year: 2025,
        date: '12.07',
        logo: 'khepojarvi.webp',
        info: '«Пробег Хепоярви» - легендарный пробег вокруг одноимённого озера Хепоярви в одном из самых красивейших районов Ленинградской области, в посёлке Токсово. По этим же местам проходит известный эко-маршрут <a href="https://www.ecoportal-vsev.ru/tropa-zdorovya-vokrug-ozera-xepoyarvi.html">"Тропа Здоровья вокруг оз.Хепоярви"</a>.',
        link: 'https://vk.com/heporunning',
        results: 'https://reg.o-time.ru/race/25015',
        gpx: 'tracks/run/khepoyarvi_2025_omaps.gpx',
        type: ['RUN']
    },
    {
        name: 'Скоростная десятка',
        year: 2025,
        date: '27.04',
        start: 'PUSHKINRUN',
        info: 'Скоростная десятка – праздник бега для любителей и профессионалов, где каждый участник может испытать свои силы и показать максимальный результат на дистанции 10 километров. Трасса «Скоростной десятки» специально разработана для достижения высоких скоростей. Маршрут минимизирует перепады высот и сложные участки, позволяя сосредоточиться на своем темпе и технике, чтобы достичь новых рекордов!',
        link: 'https://pushkin-run.ru/10',
        results: 'https://results.russiarunning.com/event/SkorostnayaDesyatka/results/10km',
        gpx: 'tracks/run/fast_ten_2025_omaps.gpx',
        type: ['RUN']
    },
    {
        name: 'Дудергоф трейл',
        year: 2025,
        date: '20.04',
        info: 'Участникам предстоит не просто пробежать дистанцию по пересечённой местности, но даже взобраться на самую высокую точку города — гору Ореховую.',
        link: 'https://marathonec.ru/dudergof-trejl-gid/',
        results: 'https://reg.o-time.ru/race/25240',
        gpx: 'tracks/run/dudergof_trail_12km_omaps.gpx',
        start: 'KOLYUCHIE',
        type: ['RUN']
    },
    {
        name: 'Кросс в Александрино',
        year: 2024,
        date: '18.08',
        link: 'https://vk.com/krossvaleksandrino',
        results: 'https://reg.o-time.ru/race/24166',
        gpx: 'tracks/run/aleksandrino_2024_omaps.gpx',
        start: 'KOLYUCHIE',
        type: ['RUN']
    },
    {
        name: 'Полежаевский парк, Кировский Полумарафон',
        year: 2025,
        date: '20.07',
        link: 'https://kolyuchiestarty.ru/turnir',
        results: 'https://reg.o-time.ru/race/25286',
        info: '7-42км',
        gpx: 'tracks/run/polezhaevsky_kirovsky_2025_omaps.gpx',
        start: 'KOLYUCHIE',
        type: ['RUN']
    },
    {
        name: 'Дубровка, Невский берег',
        year: 2024,
        date: '20.10',
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
        year: 2025,
        date: '2.08',
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
        year: 2024,
        date: '12.10',
        link: 'https://tripandrun.ru/autumn_2024',
        results: 'https://reg.o-time.ru/race/24079',
        info: '5-23км.',
        gpx: 'tracks/run/staroselie_borzye_trails_2024_omaps.gpx',
        start: 'BORZYE',
        type: ['RUN']
    },
    {
        name: 'Невский лесопарк, Усадьба Богословка, Winter fest',
        year: 2025,
        date: '22.02',
        link: 'https://tripandrun.ru/winter',
        results: 'https://reg.o-time.ru/race/25122',
        info: '5-20км.',
        gpx: 'tracks/run/bogoslovka_borzye_trails_2025_omaps.gpx',
        start: 'BORZYE',
        type: ['RUN']
    },
    {
        name: 'Пасторское оз, Spring fest',
        year: 2025,
        date: '12.04',
        link: 'https://tripandrun.ru/spring',
        results: 'https://reg.o-time.ru/race/25123',
        info: '5-20км.',
        gpx: 'tracks/run/pastorskoe_borzye_trails_2025_omaps.gpx',
        start: 'BORZYE',
        type: ['RUN']
    },
    {
        name: 'Петергоф, Пробег памяти Героев Ораниенбаумского плацдарма',
        year: 2025,
        date: '17.05',
        link: 'https://probeg.org/event/67383/',
        results: 'https://reg.o-time.ru/race/25361',
        info: '5-10км.',
        gpx: 'tracks/run/peterhof_campus_2025_omaps.gpx',
        type: ['RUN']
    },
    {
        name: 'Удельный парк, Гоголь МарафонЪ',
        year: 2024,
        date: '3.11',
        link: 'https://probeg.org/event/57172/',
        results: 'https://reg.o-time.ru/race/24323',
        info: '1-63км.',
        gpx: 'tracks/run/udelny_grifon_2024_10k_omaps.gpx',
        start: 'GRIFON',
        type: ['RUN']
    },
    {
        name: 'Удельный парк, Sosnovka Snake',
        year: 2024,
        date: '15.12',
        link: 'https://probeg.org/event/62728/',
        results: 'https://reg.o-time.ru/race/24628',
        info: '1-63км.',
        gpx: 'tracks/run/sosnovka_snake_grifon_2024_10k_omaps.gpx',
        start: 'GRIFON',
        type: ['RUN']
    },
    {
        name: 'Пискарёвский парк, «Весна Победы»',
        year: 2024,
        date: '4.05',
        link: 'https://probeg.org/event/60014/',
        results: 'https://reg.o-time.ru/race/25128',
        info: '1-21км.',
        gpx: 'tracks/run/piskarevka_grifon_2024_7k_omaps.gpx',
        start: 'GRIFON',
        type: ['RUN']
    },
    {
        name: 'Парк 300-летия Петербурга, «Алые паруса»',
        year: 2025,
        date: '22.06',
        link: 'https://probeg.org/event/63037/',
        results: 'https://reg.o-time.ru/race/25134',
        info: '1-63км.',
        gpx: 'tracks/run/300_letiya_alye_parusa_2025_10k_omaps.gpx',
        start: 'GRIFON',
        type: ['RUN']
    },
    {
        name: 'Боровичи, Мста трейл',
        year: 2025,
        date: '10.08',
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
        year: 2025,
        date: '31.07',
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
        year: 2025,
        date: '21.06',
        link: 'https://vk.com/club204547779',
        results: 'https://reg.o-time.ru/race/25465',
        info: 'Ежегодный спортивно-патриотический фестиваль «ОРЛЁНОК, ОРЛЁНОК, ВЗЛЕТИ ВЫШЕ СОЛНЦА». Посвящается памяти юных патриотов, погибших в борьбе с фашизмом. 1-8км.',
        gpx: 'tracks/run/siversky_orlenok_2025_7k_omaps.gpx',
        type: ['RUN']
    },
    {
        name: 'Сосновый Бор, Атомный ЗаБег',
        year: 2023,
        date: '23.09',
        link: 'https://vk.com/atomrunning',
        results: 'https://reg.o-time.ru/race/23465',
        info: 'Первый крупный забег в Сосновом Бору. Трасса проходит по новой велодорожке вдоль южного берега Финского залива, по сосновому лесу и песочным дюнам. Это уникальная возможность увидеть природу и крупнейшее предприятие атомный энергетики России Ленинградскую атомную станцию. 3-10км.',
        gpx: 'tracks/run/sosnovy_bor_atomny_2023_10k_omaps.gpx',
        logo: 'atomny.gif',
        type: ['RUN']
    },
    {
        name: 'Шунгеровский заказник, Кубок Шунгеровского заповедника',
        year: 2025,
        date: '16.03',
        link: 'https://probeg.org/race/162236/',
        results: 'https://reg.o-time.ru/race/25249',
        gpx: 'tracks/run/shungerovsky_2025_omaps.gpx',
        logo: 'shungerovsky.webp',
        type: ['RUN']
    },
    {
        name: 'Шунгеровский заказник, Кубок Шунгеровского заповедника',
        year: 2024,
        date: '15.06',
        link: 'https://probeg.org/event/60608/',
        results: 'https://reg.o-time.ru/race/24445',
        gpx: 'tracks/run/shungerovsky_2024_omaps.gpx',
        logo: 'shungerovsky.webp',
        type: ['RUN']
    },
    {
        name: 'Красная горка, Трейл Фортовый',
        year: 2021,
        date: '11.04',
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
        year: 2024,
        date: '1.06',
        link: 'https://probeg.org/event/57775/',
        results: 'https://reg.o-time.ru/race/24458',
        info: '4-10км.',
        gpx: 'tracks/run/krestovsky_green_2024_omaps.gpx',
        type: ['RUN']
    },
    {
        name: 'Зеленогорск, Кросс нации',
        year: 2024,
        date: '14.09',
        link: 'https://vk.com/kross_nacij_v_spb',
        results: 'https://reg.o-time.ru/race/24547',
        info: '5-9км.',
        gpx: 'tracks/run/zelenogorsk_nation_2024_9km_omaps.gpx',
        type: ['RUN']
    },
    {
        name: 'Зеленогорский осенний кросс',
        year: 2017,
        date: '7.10',
        link: 'https://probeg.org/event/17550/',
        results: 'https://probeg.org/dj_media/uploads/171007_Pr_Zelenogorskiy_osenni_Zelenogorsk_3835.xls',
        info: '8-16км.',
        gpx: 'tracks/run/zelenogorsk_autumn_2017_16km_omaps.gpx',
        logo: 'zelenogorsk.webp',
        type: ['RUN']
    },
    {
        name: 'Луга, Шалово, TheOSTROV TRAIL',
        year: 2019,
        date: '27.04',
        link: 'https://probeg.org/event/26316/',
        results: 'https://reg.o-time.ru/race/19071',
        info: '1-25км.',
        gpx: 'tracks/run/shalovo_theostrov_2019_25k_omaps.gpx',
        logo: 'theostrov.webp',
        type: ['RUN']
    },
    {
        name: 'Усть-Лужский железнодорожный полумарафон',
        year: 2025,
        date: '12.07',
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
        year: 2025,
        date: '6.07',
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
        year: 2022,
        date: '21.08',
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
        year: 2022,
        date: '24.07',
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
        year: 2022,
        date: '24.07',
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
        year: 2024,
        date: '14.07',
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
        year: 2020,
        date: '27.09',
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
        name: 'Гатчинский полумарафон',
        year: 2024,
        date: '10.11',
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
        year: 2024,
        date: '2.06',
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
        year: 2025,
        date: '17.05',
        link: 'https://vk.link/svirskiyrubezh',
        results: 'https://reg.o-time.ru/race/25243',
        info: '1-20км.',
        gpx: 'tracks/run/podporozhye_rubezh_2025_omaps.gpx',
        logo: 'svirsky_rubezh.webp',
        type: ['RUN']
    },
    {
        name: 'ул Чекистов, Пробег, посвящённый Дню народного единства',
        year: 2024,
        date: '3.11',
        link: 'https://probeg.org/event/62529/',
        results: 'https://vk.com/wall-12235248_16215',
        info: '2.5-7км.',
        gpx: 'tracks/run/krasnoselsky_unity_day_2024_omaps.gpx',
        logo: 'krasnoselsky.gif',
        type: ['RUN']
    },
    {
        name: 'Молодцово, "Синявинские высоты"',
        year: 2024,
        date: '21.09',
        link: 'https://vk.com/sin_vysoty_run',
        results: 'https://reg.o-time.ru/race/24012',
        info: '2-21км.',
        gpx: 'tracks/run/sinyavinskie_heights_2024_omaps.gpx',
        logo: 'sinyavino.webp',
        type: ['RUN']
    },
    {
        name: 'Янино, "Человек или Лошадь"',
        year: 2024,
        date: '24.08',
        link: 'https://vk.com/sktoksovo',
        results: 'https://reg.o-time.ru/race/24211',
        info: 'Бегунам предстоит доказать что они могут быть быстрее лошадей со всадниками!',
        gpx: 'tracks/run/yanino_humans_horses_2024_omaps.gpx',
        logo: 'sktoksovo.gif',
        type: ['RUN']
    },
    {
        name: 'Снегирёвка, St.Petersburg Backyard Ultra',
        year: 2022,
        date: '21.05',
        link: 'https://backyardultra.ru/',
        results: 'https://clck.ru/gMLZA',
        info: 'ST.PETERSBURG BACKYARD ULTRA – официальная гонка мировой экосистемы BYU.',
        gpx: 'tracks/run/snegirevka_byut_2022_omaps.gpx',
        start: 'DIKIYE',
        type: ['RUN']
    },
    {
        name: 'Борницкий карьер, St.Petersburg Backyard Ultra',
        year: 2025,
        date: '25.05',
        link: 'https://backyardultra.ru/',
        results: 'https://reg.o-time.ru/race/25285',
        info: 'ST.PETERSBURG BACKYARD ULTRA – официальная гонка мировой экосистемы BYU.',
        gpx: 'tracks/run/bornitsky_byut_2025_omaps.gpx',
        start: 'DIKIYE',
        type: ['RUN']
    },
    {
        name: 'Токсово, Комбыт, "Бегущий кабан"',
        year: 2023,
        date: '15.10',
        link: 'https://www.fasl.ru/contest/n501/',
        results: 'https://reg.o-time.ru/race/23493',
        info: 'Традиционный осенний кросс "Бегущий кабан", посвященный памяти Дмитрия Поленова. Дистанция соревнований проходит по бывшей лыжной трассе «Комбыт», протяженность круга – 5 км.',
        gpx: 'tracks/run/beguschiy_caban_2023_omaps.gpx',
        type: ['RUN']
    },
    {
        name: 'Игора, "неМартовский заяц"',
        year: 2024,
        date: '4.11',
        link: 'https://vk.com/nemartovskiizayaz',
        results: 'https://myrace.info/events/889',
        info: 'Традиционный альпинистский горный кросс.',
        gpx: 'tracks/run/igora_nemartovsky_2024_omaps.gpx',
        logo: 'nemartovsky.gif',
        type: ['RUN']
    },
    {
        name: 'Лемболово, "Осенний марафон"',
        year: 2024,
        date: '20.10',
        link: 'https://vk.com/omartrail',
        results: 'https://reg.o-time.ru/race/24596',
        info: 'Фестиваль двигательной активности для всех любителей активного образа жизни, от спортивного клуба «Атлетико».',
        gpx: 'tracks/run/lembolovo_autumn_marathon_2024_omaps.gpx',
        logo: 'autumn_marathon.webp',
        type: ['RUN']
    },
    {
        name: 'Кубок Курортного района по бегу на песке',
        year: 2025,
        date: '6.08',
        link: 'https://vk.com/peschanie_dyuni',
        results: 'https://reg.o-time.ru/race/25430',
        info: 'Поистине курортное событие – соревнования по бегу на песке.',
        gpx: 'tracks/run/kurort_cup_2025_omaps.gpx',
        logo: 'kurort.gif',
        type: ['RUN']
    },
    {
        name: 'Колпино, Ижорская миля',
        year: 2025,
        date: '27.07',
        link: 'https://vk.com/sokizhorets',
        results: 'https://reg.o-time.ru/race/25512',
        info: 'Дистанция по территории городского ПКиО и о.Чухонка.',
        gpx: 'tracks/run/izhorska_milya_2025_omaps.gpx',
        type: ['RUN']
    },
    {
        name: 'Новгород, NOVGOROD ICE',
        year: 2024,
        date: '11.02',
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
        year: 2024,
        date: '7.09',
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
        year: 2025,
        date: '24.05',
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
        year: 2024,
        date: '29.09',
        link: 'https://edge-ultra.ru/',
        results: 'https://reg.o-time.ru/race/24216',
        info: '1-21км.',
        gpx: 'tracks/run/pskov_halfmarathon_2024_omaps.gpx',
        logo: 'pskov_half.gif',
        type: ['RUN']
    },
    {
        name: 'Дуброво',
        year: 2024,
        date: '13.10',
        link: 'https://probeg.org/event/62170/',
        results: 'https://probeg.org/dj_media/uploads/2024/241013_Pr_Probeg__Dubrovo__Dubrovo_6963.xls',
        info: 'Забег от КЛБ "Скобарь". 1-10км.',
        gpx: {
            '10км':'tracks/run/dubrovo_2023_10km_omaps.gpx',
            '5км':'tracks/run/dubrovo_2024_5km_omaps.gpx',
        },
        type: ['RUN']
    },
    // --- ВЕЛО ---
    {
        name: 'Коскиярви МТБ марафон',
        year: 2024,
        date: '18.08',
        link: 'https://koskijarvi.ru/',
        results: 'https://reg.o-time.ru/race/24171',
        info: 'Вас ждут на выбор три размеченных дистанции в один круг: 80 км, 60 км и 30 км скоростных лесных дорог, кросс-кантрийных секций, заковыристых синглтреков, затяжных подъемов и спусков - всё то, из-за чего мы все полюбили маунтинбайк! Трасса проложена в лесном массиве, протянувшемся от ж/д ст Лемболово до Сосново. Старт с территории Клуба загородного отдыха "Орех". 27-82км.',
        gpx: {
            'EPIC, 82km':'tracks/velo/koskijarvi_2024_epic_omaps.gpx',
            'STRONG, 58km':'tracks/velo/koskijarvi_2024_strong_omaps.gpx',
            'LIGHT, 27km':'tracks/velo/koskijarvi_2024_light_omaps.gpx',
        },
        logo: 'koskijarvi.gif',
        type: ['VELO']
    },
    {
        name: 'Петяярви веломарафон "Горные вершины"',
        year: 2025,
        date: '10.05',
        link: 'https://marathoncup.ru/main/petyajarvi/',
        results: 'https://reg.o-time.ru/race/25151',
        info: 'Интересная и живописная трасса, проходящая по территории природного заказника «Гряда Вярямянселька», включающая три мостика через бурную речку Волчья и ручей Горюнец. 27-54км.',
        gpx: {
            '1й круг, 27km':'tracks/velo/petyajarvi_marathoncup_2025_1lap_omaps.gpx',
            '2й круг, 27km':'tracks/velo/petyajarvi_marathoncup_2025_2lap_omaps.gpx',
        },
        start: 'KVMLO',
        type: ['VELO']
    },
    {
        name: 'Токсовский веломарафон "Горные вершины"',
        year: 2025,
        date: '5.07',
        link: 'https://marathoncup.ru/main/toksovo/',
        results: 'https://reg.o-time.ru/race/25154',
        info: 'Трасса марафона проходит по лесным дорогам в районе Токсово и озера Хепоярви. 27-54км.',
        gpx: {
            '1й круг, 28km':'tracks/velo/toksovo_marathoncup_2025_1lap_omaps.gpx',
            '2й круг, 26km':'tracks/velo/toksovo_marathoncup_2025_2lap_omaps.gpx',
            'FUN, 10km':'tracks/velo/toksovo_marathoncup_2025_fun_omaps.gpx',
        },
        start: 'KVMLO',
        type: ['VELO']
    },
    {
        name: 'Лемболовский веломарафон "Горные вершины"',
        year: 2025,
        date: '27.07',
        link: 'https://marathoncup.ru/main/lembolovo/',
        results: 'https://reg.o-time.ru/race/25155',
        info: 'Один из старейших и массовых марафонов в России. Трасса не раз оценивалась многими участниками, как самая интересная и разнообразная, но с более сложным рельефом. 14-60км.',
        gpx: {
            'Марафонский круг, 30km':'tracks/velo/lembolovo_marathoncup_2025_30km_omaps.gpx',
            'FUN, 14km':'tracks/velo/lembolovo_marathoncup_2025_14km_omaps.gpx'
        },
        start: 'KVMLO',
        type: ['VELO']
    },
    {
        name: 'Ореховый веломарафон "Горные вершины"',
        year: 2025,
        date: '31.05',
        link: 'https://marathoncup.ru/main/orekhovo/',
        results: 'https://reg.o-time.ru/race/25152',
        info: ' Благодаря очень большой площади является одним из самых подходящих мест для маунтинбайка, находящегося в пределах часа езды от Санкт-Петербурга. 13-58км.',
        gpx: {
            'SPORT, 28km':'tracks/velo/orekhovo_marathoncup_2025_sport_omaps.gpx',
            'FUN, 13km':'tracks/velo/orekhovo_marathoncup_2025_fun_omaps.gpx'
        },
        start: 'KVMLO',
        type: ['VELO']
    },
    {
        name: 'Цвелодубово веломарафон "Горные вершины"',
        year: 2024,
        date: '8.09',
        link: 'https://marathoncup.ru/main/tsvelodubovo/',
        results: 'https://reg.o-time.ru/race/24126',
        info: 'Трасса марафона разнообразна и проходит по традиционной для Карельского перешейка местности – лесные дороги, тропинки, крутые подъёмы и спуски, ровные участки, где можно перевести дух. В тоже время длина трассы не слишком протяжённа (круг 25 км). Набор высоты на одном круге - 320м, это минимальный набор среди всех этапов. 14-50км.',
        gpx: {
            '1й круг, 24km':'tracks/velo/tsvelodubovo_marathoncup_2024_1lap_omaps.gpx',
            '2й круг, 25km':'tracks/velo/tsvelodubovo_marathoncup_2024_2lap_omaps.gpx',
            'FUN, 13km':'tracks/velo/tsvelodubovo_marathoncup_2024_fun_omaps.gpx',
        },
        start: 'KVMLO',
        pics: ['velo/tsvelodubovo',1],
        type: ['VELO']
    },
    {
        name: 'Мичуринский Author Grand Prix веломарафон',
        year: 2025,
        date: '3.05',
        link: 'https://marathoncup.ru/main/author/',
        results: 'https://reg.o-time.ru/race/25201',
        info: 'Велосипедный кросс-кантри марафон для всех. 14-63км.',
        gpx: {
            '63км':'tracks/velo/mi4ura_marathoncup_2025_63km_omaps.gpx',
            '35км':'tracks/velo/mi4ura_marathoncup_2025_35km_omaps.gpx',
            '14км':'tracks/velo/mi4ura_marathoncup_2025_14km_omaps.gpx',
        },
        start: 'KVMLO',
        pics: ['velo/mi4ura',1],
        type: ['VELO']
    },
    {
        name: 'Семиозерье, Hard Bike Race',
        year: 2024,
        date: '5.10',
        link: 'https://hardadventure.ru/info2024bike',
        results: 'https://reg.o-time.ru/race/24560',
        info: 'Помимо скоростных лесных дорог вас ждут песчаные склоны и тропы карьера, насыщенная пересеченка и разнообразная, живописная дистанция в обрамлении Золотой Осени.',
        gpx: 'tracks/velo/semiozerie_hard_bike_2024_omaps.gpx',
        start: 'HARD',
        type: ['VELO']
    },
    {
        name: 'НИССАН, Чемпионат Сотки',
        year: 2025,
        date: '9.08',
        link: 'https://sotka.one/champion',
        results: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTlbU2RTSyT4JpCL5cXjWLSiNCx-ggj94f0sZrsA6N19fW7xCYwnBFbscc1ioX7-knYOBUO_Ju4XyCr/pubhtml',
        info: '13,5 км | два круга вокруг завода против часовой стрелки.',
        gpx: 'tracks/velo/nissan_velo_2025_omaps.gpx',
        start: 'SOTKA',
        type: ['VELO']
    },
];
