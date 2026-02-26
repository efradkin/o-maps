let unknownMaps = [
    // --- Нераспознанные ---
    {
        year: 1,
        info: 'Из картографического планшета из <a href="https://t.me/o_maps/6401">архива</a> Сергея Кириченко',
        link: './original_maps/unknown/unknown_1_omaps.jpg',
    },
    {
        year: 1,
        name: 'Энколово',
        link: './original_maps/unknown/unknown_2_omaps.jpg',
    },
    {
        year: 1,
        name: 'Яппиля, Комонь',
        link: './original_maps/unknown/unknown_3_omaps.jpg',
    },
    {
        year: 1,
        name: 'Кузьмолово, Токсово',
        info: 'Похожа на <a href="./spb.html?map=kuzmolovo_east_old">карту Чегаровского</a>, но другой масштаб, сечение и ч/б.',
        link: './original_maps/unknown/unknown_6_omaps.jpg',
    },
    {
        year: 1,
        name: 'Токсово',
        link: './original_maps/unknown/unknown_7_omaps.jpg',
    },
    {
        year: 1,
        name: 'Энколово',
        link: './original_maps/unknown/unknown_8_omaps.jpg',
    },
    {
        year: 1,
        name: 'Кузьмолово, Токсово',
        link: './original_maps/unknown/unknown_9_omaps.jpg',
    },
    {
        year: 1,
        name: 'Зеленогорск, Дружинное оз',
        link: './original_maps/unknown/unknown_10_omaps.jpg',
    },
    {
        year: 1,
        name: 'Уткино, Бол Вишневское оз',
        link: './original_maps/unknown/unknown_11_omaps.jpg',
    },
    {
        year: 1,
        name: 'Петяярви',
        link: './original_maps/unknown/unknown_13_omaps.jpg',
    },
    {
        year: 1983,
        name: 'Сярьги, Охта-Парк',
        info: 'Очевидно, это ч/б кусочек <a href="./spb.html?map=sjargi_1983">карты Чегаровских</a> 1983.',
        link: './original_maps/unknown/unknown_14_omaps.jpg',
    },
    {
        year: 1,
        name: 'Петяярви',
        link: './original_maps/unknown/unknown_19_omaps.jpg',
    },
    {
        year: 1,
        name: 'Токсово',
        link: './original_maps/unknown/unknown_21_omaps.jpg',
    },
    {
        year: 1,
        name: 'Охта-Парк',
        link: './original_maps/unknown/unknown_22_omaps.jpg',
    },
    {
        year: 1,
        name: 'Лемболово',
        link: './original_maps/unknown/unknown_23_omaps.jpg',
    },
    {
        year: 1,
        name: 'Сосновка',
        link: './original_maps/unknown/unknown_24_omaps.jpg',
    },
    {
        year: 1,
        name: 'Нижегородская обл ?',
        link: './original_maps/unknown/unknown_26_omaps.jpg',
    },
    {
        year: 1,
        name: 'Латвия?',
        link: './original_maps/unknown/unknown_27_omaps.jpg',
    },
    {
        year: 1,
        name: 'Латвия?',
        link: './original_maps/unknown/unknown_28_omaps.jpg',
    },
    {
        year: 1,
        name: 'Нижегородская обл ?',
        link: './original_maps/unknown/unknown_29_omaps.jpg',
    },
    {
        year: 1,
        name: 'Кавголово',
        link: './original_maps/unknown/unknown_32_omaps.jpg',
    },
    {
        year: 1976,
        name: 'п/л Ласточка',
        info: '31.12.1976 - 09.01.1977',
        link: './original_maps/unknown/unknown_33_omaps.jpg',
    },
    {
        year: 1977,
        name: 'Москва, Красногорск',
        info: 'Золотые кольца',
        link: './original_maps/unknown/unknown_37_omaps.jpg',
        start: 'WEDDING_MSK'
    },
    {
        year: 1,
        info: 'Яппиля',
        link: './original_maps/unknown/unknown_38_omaps.jpg',
    },
    {
        date: '1974-11-17',
        name: 'Москва?',
        info: 'Золотые кольца, Шумилов В.',
        link: './original_maps/unknown/unknown_40_omaps.jpg',
        start: 'WEDDING_MSK'
    },
    {
        year: 1,
        name: 'Москва',
        link: './original_maps/unknown/unknown_41_omaps.jpg',
        bounds:[[55.401322, 36.812733]]
    },
    {
        year: 1977,
        name: 'Москва, Кузьминки',
        info: 'VIII приз телевидения, на перфокарте',
        link: './original_maps/unknown/unknown_44_omaps.jpg',
        bounds:[[55.694279, 37.767590]]
    },
    {
        year: 1977,
        name: 'Краснополье?',
        link: './original_maps/unknown/unknown_46_omaps.jpg',
    },
    {
        year: 1,
        name: 'Лыткарино',
        link: './original_maps/unknown/unknown_49_omaps.jpg',
        bounds:[[55.572438, 37.954017]]
    },
    {
        year: 1978,
        name: 'Москва, Кунцево',
        link: './original_maps/unknown/unknown_50_omaps.jpg',
    },
    {
        year: 1,
        name: 'МО, Мал Вязёмы',
        link: './original_maps/unknown/unknown_51_omaps.jpg',
    },
    {
        year: 1,
        name: 'Москва, Зосимова Пустынь',
        link: './original_maps/unknown/unknown_52_omaps.jpg',
    },
    {
        year: 1,
        name: 'МО, Фрязево',
        link: './original_maps/unknown/unknown_53_omaps.jpg',
    },
    {
        year: 1,
        name: 'Зеленогорск, Щучье оз',
        link: './original_maps/unknown/unknown_54_omaps.jpg',
    },
    {
        year: 1977,
        name: 'Латвия, в районе Сигулды на реке Гауе, Гран-При, 3 день',
        link: './original_maps/unknown/unknown_57_omaps.jpg',
    },
    {
        year: 1,
        name: 'Выборг, Кировские дачи (юг)',
        info: 'Золотая осень?',
        link: './original_maps/unknown/unknown_58_omaps.jpg',
    },
    {
        year: 1,
        name: 'Выборг, Кировские дачи (север)',
        link: './original_maps/unknown/unknown_59_omaps.jpg',
    },
    {
        year: 1,
        name: 'Выборг, Сайменские дачи',
        link: './original_maps/unknown/unknown_60_omaps.jpg',
    },
    {
        name: 'Сосново',
        link: './original_maps/unknown/unknown_61_omaps.jpg',
        info: 'Зелёный змей. Но какой год?'
    },
    {
        year: 1,
        name: 'Ленинское, Чёрные оз',
        link: './original_maps/unknown/unknown_63_omaps.webp',
        info: 'Скан с плёнки.'
    },
    {
        year: 1,
        link: './original_maps/unknown/unknown_64_omaps.webp',
        info: 'Скан с плёнки.'
    },
    {
        year: 1,
        link: './original_maps/unknown/unknown_65_omaps.webp',
        info: 'Скан с плёнки.'
    },
    {
        year: 1,
        link: './original_maps/unknown/unknown_66_omaps.webp',
        info: 'Скан с плёнки.'
    },
    {
        year: 1979,
        name: 'Черкассы',
        link: './original_maps/unknown/unknown_67_omaps.webp',
        info: 'Скан с плёнки.',
        author: 'YURDK'
    },
    {
        year: 1979,
        name: 'Черкассы',
        link: './original_maps/unknown/unknown_68_omaps.webp',
        info: 'Скан с плёнки.',
        author: 'YURDK'
    },
 ];
