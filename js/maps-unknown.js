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
        name: 'Луга, Шалово',
        link: './original_maps/unknown/unknown_5_omaps.jpg',
    },
    {
        year: 1,
        name: 'Кузьмолово, Токсово',
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
        year: 1,
        name: 'Сярьги, Охта-Парк',
        link: './original_maps/unknown/unknown_14_omaps.jpg',
    },
    {
        year: 1,
        name: 'Гарболово, Змеиное оз',
        link: './original_maps/unknown/unknown_15_omaps.jpg',
    },
    {
        year: 1974,
        name: 'Корабсельки',
        info: 'Матч Эстония-Ленинград, маркир. Одновременно - перезабег чемпионата Ленинграда, который был отменен из-за гололеда, хотя дистанции были полностью готовы (А. Лисененков и его бригада). Карту никто не корректировал, чертил рельеф с основы Крылов, а раскрашивать помогал Ширинян.',
        link: './original_maps/unknown/unknown_17_omaps.jpg',
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
        info: 'Золотые кольца',
        link: './original_maps/unknown/unknown_25_omaps.jpg',
    },
    {
        year: 1,
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
        link: './original_maps/unknown/unknown_29_omaps.jpg',
    },
    {
        year: 1976,
        link: './original_maps/unknown/unknown_30_omaps.jpg',
    },
    {
        year: 1,
        name: 'Павловск',
        link: './original_maps/unknown/unknown_31_omaps.jpg',
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
        year: 1978,
        info: 'Зенит',
        link: ['./original_maps/unknown/unknown_34_omaps.jpg','./original_maps/unknown/unknown_35_omaps.jpg']
    },
    {
        year: 1973,
        name: 'Сосново',
        info: 'Маркир первенства Ленинграда. Карту делали Ширинян с Грязневичем.',
        link: './original_maps/unknown/unknown_36_omaps.jpg'
    },
    {
        year: 1977,
        name: 'Москва, Красногорск',
        info: 'Золотые кольца',
        link: './original_maps/unknown/unknown_37_omaps.jpg',
    },
    {
        year: 1,
        info: 'Яппиля',
        link: './original_maps/unknown/unknown_38_omaps.jpg',
    },
    {
        year: 1972,
        name: 'Кавголово',
        info: 'Труд-Буревестник, эстафета. Первая самостоятельная карта А.Шириняна.',
        link: './original_maps/unknown/unknown_39_omaps.jpg',
        author: 'SHRNN'
    },
    {
        date: '1974-11-17',
        name: 'Москва?',
        info: 'Золотые кольца, Шумилов В.',
        link: './original_maps/unknown/unknown_40_omaps.jpg',
    },
    {
        year: 1,
        name: 'Москва',
        link: './original_maps/unknown/unknown_41_omaps.jpg',
        bounds:[[55.401322, 36.812733]]
    },
    {
        year: 1977,
        name: 'Москва',
        link: ['./original_maps/unknown/unknown_42_omaps.jpg','./original_maps/unknown/unknown_43_omaps.jpg'],
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
        name: 'Москва',
        info: 'Кубок МГУ',
        link: './original_maps/unknown/unknown_45_omaps.jpg',
    },
    {
        year: 1977,
        name: 'Краснополье?',
        link: './original_maps/unknown/unknown_46_omaps.jpg',
    },
    {
        year: 1972,
        name: 'Яхрома',
        link: './original_maps/unknown/unknown_47_omaps.jpg',
    },
    {
        year: 1,
        name: 'Москва, Серебряный бор',
        link: './original_maps/unknown/unknown_48_omaps.jpg',
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
        year: 1,
        name: 'Осельки - Кавголово',
        info: 'III Матч МО - ЛО',
        link: './original_maps/unknown/unknown_55_omaps.jpg',
    },
    {
        year: 1973,
        name: 'МО, Чёрная Грязь',
        info: 'IV Первенство МИИГАиК',
        link: './original_maps/unknown/unknown_56_omaps.jpg',
    },
 ];
