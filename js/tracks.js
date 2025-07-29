let tracks = [
    {
        name: 'гряда Вярямянселькя, Петяярви',
        info: 'Круговой холмистый экологический маршрут от пл.Петяярви. Аппендикс к смотровой площадке не обязателен к посещению кмк. Мост через р.Волчью сейчас на ремонте и вместо него можно перейти по старой финской ГЭС, так даже интереснее.',
        link: 'https://ooptlo.ru/gryada-vyaryamyanselskaya-(malyij-marshrut).html',
        gpx: 'tracks/vyaryamyanselkya_petyajarvi_omaps.gpx',
        pics: ['petyajarvi',7]
    },
    {
        name: 'гряда Вярямянселькя, Берестовое оз',
        info: 'Холмистая эко-тропа соединяет районы Мичуринского и Петяярви. Довольно разнообразный ландшафт - прям на любой вкус. Из достопримечательностей - руины финской водяной мельницы.',
        link: 'https://ooptlo.ru/ozero-berestovoe.html',
        gpx: 'tracks/vyaryamyanselkya_berestovoe_omaps.gpx',
        pics: ['berestovoe',8]
    },
    {
        name: 'гряда Вярямянселькя, оз Светлое',
        info: 'Круговой экологический маршрут у села Петриченко. Плавный рельеф и красивые озёра. Из достопримечательностей - руины финской водяной мельницы и старинные амбары в Мичуринском (в стороне от тропы, но не далеко).',
        link: 'https://ooptlo.ru/gryada-vyaryamyanselskaya-(bolshoj-marshrut).html',
        gpx: 'tracks/vyaryamyanselkya_petrichenko_omaps.gpx',
        pics: ['petrichenko',7]
    },
    {
        name: 'Сестрорецкое болото',
        info: 'Пеший круговой экологический маршрут. Есть <a href="spb.html?onlymap=sestroretsky_swamp_2024">фото-квест</a>. Вообще, очень приятное место. Но если рассудок и жизнь дороги вам, держитесь подальше от торфяных болот...',
        link: 'https://oopt.spb.ru/protected_area/sestroretzkoye-boloto/',
        gpx: 'tracks/sestrorezkoe_boloto_omaps.gpx',
        pics: ['sestrorezk',8]
    },
    {
        name: 'Колтушские высоты, "Камовые холмы"',
        info: 'Тут хорошо в любое время года - бег, вело, лыжи. Много песчаных холмистых дорог по полям и лесам. Но посещение платное (теоретически).',
        link: 'https://ooptlo.ru/marshrut-kamovyie-xolmyi.html',
        gpx: 'tracks/koltushi_kamy_omaps.gpx',
        pics: ['koltushi_kamy',5]
    },
    {
        name: 'Колтушские высоты, "Заячья тропа"',
        info: 'Лесистая часть Колтушской ООПТ. Паутина путаных тропинок. Посещение платное (теоретически).',
        link: 'https://ooptlo.ru/zayachya-tropa-v-pamyatnike-prirodyi-koltushskie-vyisotyi.html',
        gpx: 'tracks/hare_trail.gpx',
        pics: ['hare_trail',5]
    },
    {
        name: 'Зеленогорские озёра',
        info: 'Много озёр, много соснового леса, местами даже борового. Красота.',
        link: 'https://ooptlo.ru/6-ozer.html',
        gpx: 'tracks/zelenogorsk_omaps.gpx',
        pics: ['zelenogorsk',2]
    },
    {
        name: 'Рощино, Линдуловская роща',
        info: 'По слухам, эти лиственницы ещё Пётр-I сажал.',
        link: 'https://ooptlo.ru/ecolindulovskaya-roshha.html',
        gpx: 'tracks/lindulovska_omaps.gpx',
        // pics: ['roschino',5]
    },
    {
        name: 'Кавголово, Курголовская этнотропа',
        info: 'Район старого лыжедрома. Знаменитый иммитационный круг тоже тут.',
        link: 'https://ooptlo.ru/kurgolovskaya-tropa.html',
        gpx: 'tracks/kurgolovo_omaps.gpx',
        pics: ['kurgolovo',2]
    },
    {
        name: 'Кавголово, "Еловые холмы"',
        info: 'Район вроде бы небольшой, но когда бегаю тут ориентирование, всегда так или иначе запутываюсь - мистическое место.',
        link: 'https://ooptlo.ru/ecotoksovskie-vyisotyi.html',
        gpx: 'tracks/kavgolovo_omaps.gpx',
        pics: ['kavgolovo',2]
    },
    {
        name: 'Токсово, Малиновая гора',
        info: 'Прекрасная классическая лыжня зимой и заросшие возвышенности, окружённые болотами, летом.',
        link: 'https://ooptlo.ru/ekomarshrut-malinovaya-gora.html',
        gpx: 'tracks/malinova_gora_omaps.gpx',
        // pics: ['toksovo',5]
    },
    {
        name: 'От Орехово до Ладоги',
        info: 'Надо будет обязательно когда-нибудь съездить до самой до Ладоги.',
        link: 'https://ooptlo.ru/ot-orekhovo-do-ladogi.html',
        gpx: 'tracks/orekhovo_ladoga_omaps.gpx',
        pics: ['orekhovo',2]
    },
    {
        name: 'Южное приладожье, Каньон реки Лава',
        info: 'Хорошее место, чтобы остановиться ненадолго по дороге на восток. Искали тут как-то трилобиттов.',
        link: 'https://ooptlo.ru/lava-marshrut.html',
        gpx: 'tracks/lava_omaps.gpx',
        // pics: ['lava',5]
    },
    {
        name: 'Коккорево, "Ладожские берега"',
        info: 'Ещё 10 лет назад Коккорево было просто диким пляжем, а теперь тут чего только нет.',
        link: 'https://ooptlo.ru/ekologicheskij-marshrut-v-zakaznike-kokkorevskij.html',
        gpx: 'tracks/kokkorevo_coast_omaps.gpx',
        pics: ['kokkorevo',5]
    },
    {
        name: 'Коккорево, оз Шимпалатовское',
        info: 'В Коккорево теперь можно не только на пляже обгорать, но и погулять с комфортом по лесу да по берегу лесного озера.',
        link: 'https://ooptlo.ru/ozero-shimpalatovskoe.html',
        gpx: 'tracks/kokkorevo_shimpalatovskoe_omaps.gpx',
        pics: ['kokkorevo',5]
    },
    {
        name: 'Луга, Шалово-Перечицкий',
        info: 'Прекрасный чистый боровой рогейнерский лес.',
        link: 'https://ooptlo.ru/lesnyie-dali.html',
        gpx: 'tracks/shalovo_omaps.gpx',
        pics: ['shalovo',2]
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
        // pics: ['shalovo',5]
    },
];
