let funMaps = [
    // --- необычные ---
    {
        name: 'Проходные дворы ВО',
        year: 2024,
        url: './maps/fun/proh_dvor_VO_1.webp',
        link: './original_maps/fun/proh_dvor_VO_1_omaps.jpg',
        bounds: [[59.9366662, 30.2557683], [59.9410086, 30.2710032], [59.9326349, 30.2603817]],
        owner: 'PARADA',
        type: ['FUN']
    },
    {
        name: 'Проходные дворы ВО',
        year: 2024,
        url: './maps/fun/proh_dvor_VO_2.webp',
        link: './original_maps/fun/proh_dvor_VO_2_omaps.jpg',
        bounds: [[59.9409226, 30.2708745], [59.9454687, 30.2865815], [59.9371176, 30.275445]],
        owner: 'PARADA',
        type: ['FUN']
    },
    {
        name: 'Проходные дворы ВО',
        year: 2024,
        url: './maps/fun/proh_dvor_VO_3.webp',
        link: './original_maps/fun/proh_dvor_VO_3_omaps.jpg',
        bounds: [[59.9425455, 30.258944], [59.9484561, 30.2792001], [59.938687, 30.2634931]],
        owner: 'PARADA',
        type: ['FUN']
    },
    {
        name: 'Проходные дворы Невского пр',
        year: 2024,
        url: './maps/fun/proh_dvor_nevsky.webp',
        link: './original_maps/fun/proh_dvor_nevsky_omaps.jpg',
        bounds: [[59.9378056, 30.3491521], [59.9356342, 30.36443], [59.9326242, 30.3464484]],
        owner: 'PARADA',
        type: ['FUN']
    },
    {
        name: 'Проходные дворы у Фонтанки',
        year: 2024,
        url: './maps/fun/proh_dvor_fontanka.webp',
        link: './original_maps/fun/proh_dvor_fontanka_omaps.jpg',
        bounds: [[59.9265925, 30.3314924], [59.9176989, 30.3446245], [59.9236569, 30.3230166]],
        owner: 'PARADA',
        type: ['FUN']
    },
    {
        name: 'Проходные дворы ул Рубинштейна',
        year: 2024,
        url: './maps/fun/proh_dvor_rubinshtejna.webp',
        link: './original_maps/fun/proh_dvor_rubinshtejna_omaps.jpg',
        bounds: [[59.9296891, 30.3375649], [59.9283881, 30.3439379], [59.9275602, 30.3359771]],
        owner: 'PARADA',
        type: ['FUN']
    },
    {
        name: 'Саблино, Жемчужная пещера',
        year: 2024,
        url: './maps/fun/sablino_zhemchug_cave_2023.webp',
        info: '<a href="https://vlesah.com/stories/zdes-byl-lenin-istoriya-sablinskikh-pescher-i-ikh-obitateley">История</a> и <a href="https://pohod-vosemvrat.livejournal.com/48421.html">описание посещения</a>.',
        link: ['./original_maps/fun/sablino_zhemchug_cave_2023.pdf','./original_maps/fun/sablino_zhemchug_cave_2011.jpg','./original_maps/fun/sablino_zhemchug_cave_2013.jpg'],
        bounds: [[59.6702491, 30.8013725], [59.6687213, 30.8043766], [59.6685316, 30.7988727]],
        owner: 'MTRNCHV',
        type: ['FUN']
    },
    {
        name: 'Новый Петергоф',
        date: '2024-11',
        month: 11,
        about: 'https://vk.com/wall-227807023_65',
        start: ['VO_FOTO','KKM'],
        info: 'Фото-рогейн',
        url: './maps/fun/peterhof_foto_2024_03.webp',
        link: 'https://sun9-85.userapi.com/s/v1/ig2/kJUvKjQVvv-ZQIhDOmqTwIHPXU-1BwkWB3GP4m5DXhzuN5Y9oVQvLdzf2LD6rL7y9dIpBcajgkwMQG2E7aVB8R0Q.jpg?quality=95&as=32x24,48x35,72x53,108x80,160x118,240x177,360x266,480x355,540x399,640x473,720x532,1080x798,1280x945,1440x1064,2560x1891&from=bu&cs=2560x0',
        bounds: [[59.8909068, 29.8844862], [59.8909606, 29.9758101], [59.8572516, 29.884572]],
        o_gps: 21133,
        owner: 'RYZHOV',
        type: ['FOTO','ROGAINE']
    },
    {
        name: 'Арктический и антарктический НИИ',
        year: 2024,
        start: 'VO_FOTO',
        url: './maps/fun/beringa_quest_2024.webp',
        link: ['./original_maps/fun/beringa_quest_2024_omaps.jpg','./original_maps/fun/beringa_quest_2024_pictures.jpg'],
        bounds: [[59.9471881, 30.2305984], [59.9471559, 30.2380443], [59.9427605, 30.230341]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: 'Ново-Смоленская наб',
        year: 2024,
        start: 'VO_FOTO',
        url: './maps/fun/novo_smolenskaya_quest_2024.webp',
        link: ['./original_maps/fun/novo_smolenskaya_quest_2024_omaps.jpg','./original_maps/fun/novo_smolenskaya_quest_2024_pictures.jpg'],
        bounds: [[59.9484776, 30.2154922], [59.9482842, 30.2310276], [59.944437, 30.2153206]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: 'Андреевский бульвар',
        year: 2024,
        start: 'VO_FOTO',
        url: './maps/fun/andreevsky_blvr_quest_2024.webp',
        link: ['./original_maps/fun/andreevsky_blvr_quest_2024_omaps.jpg','./original_maps/fun/andreevsky_blvr_quest_2024_pictures.jpg'],
        bounds: [[59.9423521, 30.2763033], [59.9437815, 30.2811742], [59.9385902, 30.2806807]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: 'Сестрорецкое болото',
        year: 2024,
        start: 'VO_FOTO',
        url: './maps/fun/sestroretsky_swamp_2024.webp',
        link: ['./original_maps/fun/sestroretsky_swamp_2024_omaps.jpg','./original_maps/fun/sestroretsky_swamp_2024_pictures.jpg'],
        bounds: [[60.1315681, 29.975853], [60.1315681, 30.0200987], [60.1165186, 29.9759388]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: 'Пушкин, Екатерининский парк',
        year: 2024,
        info: '<a href="https://vk.com/wall-21533513_2463">План-схема для прогулки.</a>',
        url: './maps/fun/pushkin_ekaterininsky_park_2024.webp',
        link: './original_maps/fun/pushkin_ekaterininsky_park_2024_omaps.jpg',
        bounds: [[59.7214678, 30.3770256], [59.7213596, 30.4101133], [59.7082876, 30.3770685]],
        owner: 'RYZHOV',
        type: ['FUN']
    },
    {
        name: 'Ораниенбаум',
        year: 2024,
        info: '<a href="https://vk.com/wall-216835548_255">Петербургский Хайкинг Клуб. Пешая фото-прогулка.</a>',
        url: './maps/fun/oranienbaum_2024.webp',
        link: ['./original_maps/fun/oranienbaum_2024_omaps.jpg','./original_maps/fun/oranienbaum_2024_pictures.jpg'],
        bounds: [[59.9198391, 29.7359133], [59.9155584, 29.766984], [59.9102875, 29.7302914]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: 'Васильевский о-в',
        year: 2025,
        info: '<a href="https://vk.com/wall-229485247_365">Спортивное ориентирование "Василеостровские кварталы" (фотоориентирование)</a>.',
        url: './maps/fun/vasilevsky_foto_2025_04.webp',
        link: './original_maps/fun/vasilevsky_foto_2025_04_omaps.jpg',
        bounds: [[59.9438245, 30.2810454], [59.9445982, 30.2838564], [59.9402455, 30.2852511]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: 'Сад Василеостровец',
        year: 2025,
        start: 'VO_FOTO',
        url: './maps/fun/vasileostrovets_foto_2025_04.webp',
        link: ['./original_maps/fun/vasileostrovets_foto_2025_04_1_omaps.jpg','./original_maps/fun/vasileostrovets_foto_2025_04_2_omaps.jpg','./original_maps/fun/vasileostrovets_foto_2025_05_omaps.jpg'],
        bounds: [[59.9358492, 30.2540731], [59.9363974, 30.2558756], [59.9320329, 30.2584076]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: 'Сестрорецк, Ласковый пляж',
        year: 2025,
        start: 'VO_FOTO',
        url: './maps/fun/laskovy_2022.webp',
        link: ['./original_maps/fun/laskovy_2022_omaps.jpg','./original_maps/fun/laskovy_2022_pictures.jpg'],
        bounds: [[60.1477964, 29.9270153], [60.1464185, 29.940877], [60.1390155, 29.923389]],
        author: 'KUZNTSV_A',
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: 'Гаванская ул',
        year: 2025,
        info: '<a href="https://vk.com/wall-17794314_22088">Центр спорта на Васильевском острове</a>.',
        url: './maps/fun/gavanskaya_2025.webp',
        link: ['./original_maps/fun/gavanskaya_2025_omaps.jpg','./original_maps/fun/gavanskaya_2025_pictures.jpg'],
        bounds: [[59.9444585, 30.2313709], [59.9445123, 30.2449536], [59.9374831, 30.2313924]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: 'ул Карташихина',
        year: 2024,
        start: 'VO_FOTO',
        url: './maps/fun/kartashikhina_quest_2025.webp',
        link: './original_maps/fun/kartashikhina_quest_2025_omaps.jpg',
        bounds: [[59.9378056, 30.2374864], [59.9383, 30.2424002], [59.9336024, 30.2393532]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: 'ул Опочинина',
        year: 2024,
        start: 'VO_FOTO',
        url: './maps/fun/opochinina_quest_2024.webp',
        link: './original_maps/fun/opochinina_quest_2024_omaps.jpg',
        bounds: [[59.9373971, 30.2343321], [59.9377303, 30.2375507], [59.9335809, 30.2359414]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: 'ул Опочинина',
        year: 2024,
        start: 'VO_FOTO',
        url: './maps/fun/opochinina_quest_2024_10.webp',
        link: './original_maps/fun/opochinina_quest_2024_10_omaps.jpg',
        bounds: [[59.9312158, 30.2368212], [59.9316996, 30.2402329], [59.9296676, 30.237658]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: 'Психдиспансер №1, Канареечная ул',
        year: 2024,
        start: 'VO_FOTO',
        url: './maps/fun/kanareechnaya_quest_2024.webp',
        link: './original_maps/fun/kanareechnaya_quest_2024_omaps.jpg',
        bounds: [[59.9333767, 30.2445674], [59.9338282, 30.2476788], [59.9307427, 30.2459407]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: 'Горный ун-т',
        year: 2024,
        start: 'VO_FOTO',
        url: './maps/fun/gorny_quest_2024.webp',
        link: './original_maps/fun/gorny_quest_2024_omaps.jpg',
        bounds: [[59.9330327, 30.2632999], [59.9338605, 30.2658963], [59.9286354, 30.2683425]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: '19-я линия ВО',
        year: 2024,
        start: 'VO_FOTO',
        url: './maps/fun/19_line_vo_quest_2024.webp',
        link: './original_maps/fun/19_line_vo_quest_2024_omaps.jpg',
        bounds: [[59.9338067, 30.2656817], [59.9345915, 30.2683425], [59.9300546, 30.2700162]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: '17-я линия ВО',
        year: 2024,
        start: 'VO_FOTO',
        url: './maps/fun/17_line_vo_quest_2024.webp',
        link: './original_maps/fun/17_line_vo_quest_2024_omaps.jpg',
        bounds: [[59.934527, 30.2682567], [59.9352902, 30.2709174], [59.9313555, 30.2719045]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: '21-я линия ВО',
        year: 2024,
        start: 'VO_FOTO',
        url: './maps/fun/21_line_vo_quest_2024.webp',
        link: './original_maps/fun/21_line_vo_quest_2024_omaps.jpg',
        bounds: [[59.9372036, 30.2585149], [59.9379346, 30.2609611], [59.9333767, 30.2630424]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: '23-я линия ВО',
        year: 2024,
        start: 'VO_FOTO',
        url: './maps/fun/23_line_vo_quest_2024.webp',
        link: './original_maps/fun/23_line_vo_quest_2024_omaps.jpg',
        bounds: [[59.9364834, 30.2559185], [59.9371391, 30.2583218], [59.9326242, 30.2604675]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: '12-я линия ВО',
        year: 2024,
        start: 'VO_FOTO',
        url: './maps/fun/12_line_vo_quest_2024.webp',
        link: './original_maps/fun/12_line_vo_quest_2024_omaps.jpg',
        bounds: [[59.9407937, 30.271132], [59.9415783, 30.2736425], [59.9373111, 30.2752519]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: '15-я линия ВО',
        year: 2024,
        start: 'VO_FOTO',
        url: './maps/fun/15_line_vo_quest_2024.webp',
        link: './original_maps/fun/15_line_vo_quest_2024_omaps.jpg',
        bounds: [[59.9394394, 30.266068], [59.9402025, 30.2686429], [59.9358277, 30.2702308]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: '18-я линия ВО',
        year: 2024,
        start: 'VO_FOTO',
        url: './maps/fun/18_line_vo_quest_2024.webp',
        link: './original_maps/fun/18_line_vo_quest_2024_omaps.jpg',
        bounds: [[59.9386332, 30.2633858], [59.9393749, 30.2659607], [59.9350645, 30.2676129]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: '19-я линия ВО, школа №17',
        year: 2024,
        start: 'VO_FOTO',
        url: './maps/fun/school_17_quest_2024.webp',
        link: './original_maps/fun/school_17_quest_2024_omaps.jpg',
        bounds: [[59.9379346, 30.2609611], [59.9386762, 30.263536], [59.9343442, 30.2650809]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: 'Рижский пр',
        year: 2024,
        url: './maps/city/rizhsky_2024.webp',
        link: './original_maps/fun/rizhsky_2024_omaps.jpg',
        bounds: [[59.9134286, 30.265789], [59.9133318, 30.2776551], [59.9111696, 30.2656603]],
        author: 'RYZHOV',
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: 'Выборг, старый город',
        year: 2025,
        start: 'VO_FOTO',
        url: './maps/fun/vyborg_quest_2025.webp',
        link: ['./original_maps/fun/vyborg_quest_2025_omaps.jpg','./original_maps/fun/vyborg_quest_2025_pictures.jpg'],
        bounds: [[60.7153161, 28.7277246], [60.7152742, 28.7392259], [60.7113484, 28.7277889]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: 'ЦФКСиЗ Василеостровский',
        year: 2025,
        start: 'VO_FOTO',
        url: './maps/fun/vasileostrovsky_quest_2025.webp',
        link: ['./original_maps/fun/vasileostrovsky_quest_2025_omaps.jpg','./original_maps/fun/vasileostrovsky_quest_2025_pictures.jpg'],
        bounds: [[59.9391277, 30.2469707], [59.9399016, 30.2497387], [59.9365049, 30.2499962]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: 'парк Литания, Дудергофский кан',
        year: 2016,
        startYear: 2021,
        month: 1,
        start: 'RED_SELO_FOTO',
        url: './maps/parks/dudergofsky_foto_2026.webp',
        link: ['./original_maps/fun/dudergofsky_foto_2021_omaps.gif','./original_maps/fun/dudergofsky_foto_2021_1_pictures.pdf','./original_maps/fun/dudergofsky_foto_2021_2_pictures.pdf'],
        bounds: [[59.849234, 30.1482439], [59.8463023, 30.1776409], [59.8438124, 30.1461625]],
        author: 'ZCHNV',
        owner: 'ZCHNV',
        type: ['PARK','FOTO']
    },
    {
        name: 'Верхне-Ивановский сквер',
        year: 2019,
        startYear: 2022,
        month: 12,
        start: 'RED_SELO_FOTO',
        url: './maps/fun/ivanovka_foto_2022.webp',
        link: ['./original_maps/fun/ivanovka_foto_2022_omaps.pdf','./original_maps/fun/ivanovka_foto_2022_pictures.pdf'],
        bounds: [[59.8338722, 30.1600027], [59.8330743, 30.1703668], [59.8251264, 30.1570845]],
        author: 'ZCHNV',
        owner: 'ZCHNV',
        type: ['PARK','FOTO']
    },
    {
        name: 'Новознаменка',
        year: 2023,
        start: 'RED_SELO_FOTO',
        url: './maps/fun/novoznamenka_foto_2023.webp',
        link: ['./original_maps/city/novoznamenka_2012_omaps.gif','./original_maps/fun/novoznamenka_foto_2023_omaps.pdf','./original_maps/fun/novoznamenka_foto_2023_pictures.pdf'],
        bounds: [[59.8491801, 30.1222372], [59.8481347, 30.1328373], [59.8392308, 30.118525]],
        author: 'ZCHNV',
        owner: 'ZCHNV',
        type: ['CITY','FOTO']
    },
    {
        name: 'парк Александрия',
        year: 2023,
        start: 'RED_SELO_FOTO',
        url: './maps/fun/alexandria_foto_2023.webp',
        link: ['./original_maps/fun/alexandria_foto_2023_omaps.pdf','./original_maps/fun/alexandria_foto_2023_pictures.pdf'],
        bounds: [[59.8881618, 29.9325943], [59.8848245, 29.9536657], [59.8776319, 29.9260712]],
        author: 'URVNTSV',
        type: ['PARK','FOTO']
    },
    {
        name: 'Дудергоф - Нагорный парк',
        year: 2023,
        start: 'RED_SELO_FOTO',
        url: './maps/fun/nagorny_park_foto_2023.webp',
        link: ['./original_maps/fun/nagorny_park_foto_2023_omaps.pdf','./original_maps/fun/nagorny_park_foto_2023_pictures.pdf'],
        bounds: [[59.7044776, 30.1197481], [59.7027023, 30.138545], [59.6926334, 30.1154566]],
        author: 'DBRTSV_V',
        type: ['PARK','FOTO']
    },
    {
        name: 'Южно-Приморский парк',
        year: 2024,
        month: 12,
        start: 'RED_SELO_FOTO',
        url: './maps/fun/yuzhno_promorsky_foto_2024.webp',
        link: ['./original_maps/fun/yuzhno_promorsky_foto_2024_omaps.jpg','./original_maps/fun/yuzhno_promorsky_foto_2024_pictures.pdf'],
        bounds: [[59.8539543, 30.1591015], [59.8538896, 30.1758814], [59.8472616, 30.1590157]],
        type: ['PARK','FOTO']
    },
    {
        name: 'Полежаевский парк',
        year: 2001,
        startYear: 2025,
        excluded: true,
        month: 1,
        start: 'RED_SELO_FOTO',
        url: './maps/fun/polezhaevsky_foto_2025.webp',
        link: ['./original_maps/fun/polezhaevsky_foto_2025_omaps.jpg','./original_maps/fun/polezhaevsky_foto_2025_pictures.pdf'],
        bounds: [[59.8467982, 30.1803231], [59.8455694, 30.2113295], [59.8332684, 30.1781988]],
        author: 'KRCHKN_V',
        type: ['PARK','FOTO']
    },
    {
        name: 'Новознаменка (Универ МВД)',
        year: 2025,
        month: 4,
        start: 'RED_SELO_FOTO',
        url: './maps/fun/novoznamenka_foto_2025.webp',
        link: ['./original_maps/fun/novoznamenka_foto_2025_omaps.pdf','./original_maps/fun/novoznamenka_foto_2025_pictures.pdf'],
        bounds: [[59.8491047, 30.1309919], [59.8467982, 30.1477075], [59.845246, 30.1292109]],
        author: 'ZCHNV',
        owner: 'ZCHNV',
        type: ['PARK','FOTO']
    },
    {
        name: 'парк Литания',
        year: 2021,
        start: 'RED_SELO_FOTO',
        url: './maps/fun/litania_foto_2021.webp',
        link: ['./original_maps/fun/litania_foto_2021_omaps.jpg','./original_maps/fun/litania_foto_2021_pictures.jpg'],
        bounds: [[59.8477359, 30.1475143], [59.8462916, 30.1613545], [59.8411605, 30.1447892]],
        author: 'ZCHNV',
        owner: 'ZCHNV',
        type: ['PARK','FOTO']
    },
    {
        name: 'Сосновая Поляна',
        year: 2025,
        month: 5,
        start: 'RED_SELO_FOTO',
        url: './maps/fun/sosnovaya_poljana_foto_2025.webp',
        link: ['./original_maps/fun/sosnovaya_poljana_foto_2025_omaps.pdf','./original_maps/fun/sosnovaya_poljana_foto_2025_pictures.pdf'],
        bounds: [[59.8338291, 30.1252627], [59.8327185, 30.1420641], [59.8270893, 30.1235247]],
        type: ['PARK','FOTO']
    },
    {
        name: 'Монрепо',
        year: 2026,
        url: './maps/fun/monrepo_foto_2026.webp',
        link: ['./original_maps/fun/monrepo_foto_2026_omaps.webp','./original_maps/fun/shirinyan_foto_158_monrepo_east_2026_omaps.pdf'],
        bounds: [[60.7347436, 28.7254822], [60.7337366, 28.7383246], [60.7311297, 28.7242591]],
        author: ['SHRNN','KRTSHV'],
        type: ['PARK','FOTO']
    },
    {
        name: 'Монрепо, Китай',
        year: 2026,
        url: './maps/fun/monrepo_china_foto_2026.webp',
        link: ['./original_maps/fun/monrepo_china_foto_2026_omaps.webp','./original_maps/fun/shirinyan_foto_157_monrepo_west_2026_omaps.pdf'],
        bounds: [[60.7375809, 28.7198281], [60.73681, 28.7293983], [60.7338205, 28.7182832]],
        author: ['SHRNN','KRTSHV'],
        type: ['PARK','FOTO']
    },
];
