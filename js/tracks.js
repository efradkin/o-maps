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
        ski_kind: 'FURROW',
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
        ski_kind: 'FURROW',
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
    {
        name: 'Псковская тропа',
        link: 'https://pskovtrail.ru/',
        info: '«Псковская тропа» - это протяженный маршрут, соединяющий, пожалуй, самые красивые места и достопримечательности Псковской области длиной 170 км. Тропа подходит как для пешего прохождения, так и на велосипеде. Участки, помеченные синими маркерами - это объезды для велосипедистов. В конечный и начальный пункты маршруты легко добраться общественным транспортом из Пскова. Весь маршрут промаркирован. Основная тропа - красно-белые маркеры, дополнительные тропы - желто-белые маркеры, радиальные выходы - зелено-белые, объезды для велосипедистов - сине-белые.',
        gpx: 'tracks/pskov_route_omaps.gpx',
        logo: 'trail.webp',
        markir: true,
        type: ['WALK','VELO']
    },
    // --- ВЕЛО ---
    {
        name: 'Коскиярви МТБ марафон',
        date: '2024-08-18',
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
        date: '2025-05-10',
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
        date: '2025-07-05',
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
        date: '2025-07-27',
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
        date: '2025-05-31',
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
        date: '2024-09-08',
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
        date: '2025-05-03',
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
        date: '2024-10-05',
        link: 'https://hardadventure.ru/info2024bike',
        results: 'https://reg.o-time.ru/race/24560',
        info: 'Помимо скоростных лесных дорог вас ждут песчаные склоны и тропы карьера, насыщенная пересеченка и разнообразная, живописная дистанция в обрамлении Золотой Осени.',
        gpx: 'tracks/velo/semiozerie_hard_bike_2024_omaps.gpx',
        start: 'HARD',
        type: ['VELO']
    },
    {
        name: 'НИССАН, Чемпионат Сотки',
        date: '2025-08-09',
        link: 'https://sotka.one/champion',
        results: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTlbU2RTSyT4JpCL5cXjWLSiNCx-ggj94f0sZrsA6N19fW7xCYwnBFbscc1ioX7-knYOBUO_Ju4XyCr/pubhtml',
        info: '13,5 км | два круга вокруг завода против часовой стрелки.',
        gpx: 'tracks/velo/nissan_velo_2025_omaps.gpx',
        start: 'SOTKA',
        type: ['VELO']
    },
];
