let funMaps = [
    // --- необычные ---
    {
        name: 'Проходные дворы ВО',
        year: 2024,
        url: './maps/fun/proh_dvor_VO_1.webp',
        link: './original_maps/fun/proh_dvor_VO_1_omaps.jpg',
        bounds: [[59.93666616173984, 30.255768299102787], [59.94100862318865, 30.271003246307377], [59.9326349027309, 30.260381698608402]],
        owner: 'PARADA',
        type: ['FUN']
    },
    {
        name: 'Проходные дворы ВО',
        year: 2024,
        url: './maps/fun/proh_dvor_VO_2.webp',
        link: './original_maps/fun/proh_dvor_VO_2_omaps.jpg',
        bounds: [[59.940922639371585, 30.27087450027466], [59.94546872792177, 30.286581516265873], [59.93711763223744, 30.27544498443604]],
        owner: 'PARADA',
        type: ['FUN']
    },
    {
        name: 'Проходные дворы ВО',
        year: 2024,
        url: './maps/fun/proh_dvor_VO_3.webp',
        link: './original_maps/fun/proh_dvor_VO_3_omaps.jpg',
        bounds: [[59.94254554630553, 30.25894403457642], [59.94845612516973, 30.27920007705689], [59.93868698186596, 30.263493061065677]],
        owner: 'PARADA',
        type: ['FUN']
    },
    {
        name: 'Проходные дворы Невского пр',
        year: 2024,
        url: './maps/fun/proh_dvor_nevsky.webp',
        link: './original_maps/fun/proh_dvor_nevsky_omaps.jpg',
        bounds: [[59.937805575463344, 30.349152088165287], [59.935634206094775, 30.364429950714115], [59.932624152051815, 30.346448421478275]],
        owner: 'PARADA',
        type: ['FUN']
    },
    {
        name: 'Проходные дворы у Фонтанки',
        year: 2024,
        url: './maps/fun/proh_dvor_fontanka.webp',
        link: './original_maps/fun/proh_dvor_fontanka_omaps.jpg',
        bounds: [[59.92659247177829, 30.331492424011234], [59.91769885028778, 30.344624519348148], [59.923656872368, 30.323016643524173]],
        owner: 'PARADA',
        type: ['FUN']
    },
    {
        name: 'Проходные дворы ул Рубинштейна',
        year: 2024,
        url: './maps/fun/proh_dvor_rubinshtejna.webp',
        link: './original_maps/fun/proh_dvor_rubinshtejna_omaps.jpg',
        bounds: [[59.92968908633985, 30.33756494522095], [59.92838811334665, 30.343937873840336], [59.927560194877934, 30.335977077484134]],
        owner: 'PARADA',
        type: ['FUN']
    },
    {
        name: 'Саблино, Жемчужная пещера',
        year: 2024,
        url: './maps/fun/sablino_zhemchug_cave_2023.webp',
        info: '<a href="https://vlesah.com/stories/zdes-byl-lenin-istoriya-sablinskikh-pescher-i-ikh-obitateley">История</a> и <a href="https://pohod-vosemvrat.livejournal.com/48421.html">описание посещения</a>.',
        link: ['./original_maps/fun/sablino_zhemchug_cave_2023.pdf','./original_maps/fun/sablino_zhemchug_cave_2011.jpg','./original_maps/fun/sablino_zhemchug_cave_2013.jpg'],
        bounds: [[59.670249118469144, 30.801372528076175], [59.66872126309995, 30.80437660217285], [59.66853163080271, 30.798872709274296]],
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
        bounds: [[59.890906803590205, 29.884486198425293], [59.890960624541954, 29.97581005096436], [59.85725164967184, 29.88457202911377]],
        gps: 'https://viewer.o-gps-center.ru/viewer/event/21133/',
        owner: 'RYZHOV',
        type: ['FUN','ROGAINE']
    },
    {
        name: 'Арктический и антарктический НИИ',
        year: 2024,
        start: 'VO_FOTO',
        url: './maps/fun/beringa_quest_2024.webp',
        link: ['./original_maps/fun/beringa_quest_2024_omaps.jpg','./original_maps/fun/beringa_quest_2024_pictures.jpg'],
        bounds: [[59.947188126127806, 30.230598449707035], [59.94715588823181, 30.238044261932377], [59.94276049490907, 30.230340957641605]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: 'Ново-Смоленская наб',
        year: 2024,
        start: 'VO_FOTO',
        url: './maps/fun/novo_smolenskaya_quest_2024.webp',
        link: ['./original_maps/fun/novo_smolenskaya_quest_2024_omaps.jpg','./original_maps/fun/novo_smolenskaya_quest_2024_pictures.jpg'],
        bounds: [[59.94847761626091, 30.21549224853516], [59.948284195938676, 30.231027603149418], [59.944437046192725, 30.215320587158207]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: 'Андреевский бульвар',
        year: 2024,
        start: 'VO_FOTO',
        url: './maps/fun/andreevsky_blvr_quest_2024.webp',
        link: ['./original_maps/fun/andreevsky_blvr_quest_2024_omaps.jpg','./original_maps/fun/andreevsky_blvr_quest_2024_pictures.jpg'],
        bounds: [[59.9423520913709, 30.276303291320804], [59.9437814817462, 30.28117418289185], [59.938590243283336, 30.28068065643311]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: 'Сестрорецкое болото',
        year: 2024,
        start: 'VO_FOTO',
        url: './maps/fun/sestroretsky_swamp_2024.webp',
        link: ['./original_maps/fun/sestroretsky_swamp_2024_omaps.jpg','./original_maps/fun/sestroretsky_swamp_2024_pictures.jpg'],
        bounds: [[60.13156812902861, 29.975852966308597], [60.13156812902861, 30.020098686218265], [60.11651860920217, 29.975938796997074]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: 'Пушкин, Екатерининский парк',
        year: 2024,
        info: '<a href="https://vk.com/wall-21533513_2463">План-схема для прогулки.</a>',
        url: './maps/fun/pushkin_ekaterininsky_park_2024.webp',
        link: './original_maps/fun/pushkin_ekaterininsky_park_2024_omaps.jpg',
        bounds: [[59.7214677793261, 30.37702560424805], [59.72135958869106, 30.410113334655765], [59.70828758557718, 30.37706851959229]],
        owner: 'RYZHOV',
        type: ['FUN']
    },
    {
        name: 'Ораниенбаум',
        year: 2024,
        info: '<a href="https://vk.com/wall-216835548_255">Петербургский Хайкинг Клуб. Пешая фото-прогулка.</a>',
        url: './maps/fun/oranienbaum_2024.webp',
        link: ['./original_maps/fun/oranienbaum_2024_omaps.jpg','./original_maps/fun/oranienbaum_2024_pictures.jpg'],
        bounds: [[59.91983912934236, 29.735913276672363], [59.91555843320511, 29.766983985900882], [59.91028747108206, 29.730291366577152]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: 'Васильевский о-в',
        year: 2025,
        info: '<a href="https://vk.com/wall-229485247_365">Спортивное ориентирование "Василеостровские кварталы" (фотоориентирование)</a>.',
        url: './maps/fun/vasilevsky_foto_2025_04.webp',
        link: './original_maps/fun/vasilevsky_foto_2025_04_omaps.jpg',
        bounds: [[59.9438244699759, 30.281045436859134], [59.944598248579176, 30.283856391906742], [59.94024550902064, 30.285251140594486]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: 'Сад Василеостровец',
        year: 2025,
        start: 'VO_FOTO',
        url: './maps/fun/vasileostrovets_foto_2025_04.webp',
        link: ['./original_maps/fun/vasileostrovets_foto_2025_04_1_omaps.jpg','./original_maps/fun/vasileostrovets_foto_2025_04_2_omaps.jpg','./original_maps/fun/vasileostrovets_foto_2025_05_omaps.jpg'],
        bounds: [[59.93584919950214, 30.254073143005375], [59.93639742638281, 30.255875587463382], [59.932032859336466, 30.258407592773438]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: 'Сестрорецк, Ласковый пляж',
        year: 2025,
        start: 'VO_FOTO',
        url: './maps/fun/laskovy_2022.webp',
        link: ['./original_maps/fun/laskovy_2022_omaps.jpg','./original_maps/fun/laskovy_2022_pictures.jpg'],
        bounds: [[60.14779636623101, 29.927015304565433], [60.146418505748684, 29.940876960754398], [60.13901552285988, 29.9233889579773]],
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
        bounds: [[59.944458539889546, 30.231370925903324], [59.944512274070604, 30.24495363235474], [59.93748310385308, 30.231392383575443]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: 'ул Карташихина',
        year: 2024,
        start: 'VO_FOTO',
        url: './maps/fun/kartashikhina_quest_2025.webp',
        link: './original_maps/fun/kartashikhina_quest_2025_omaps.jpg',
        bounds: [[59.937805575463344, 30.23748636245728], [59.93830002584227, 30.242400169372562], [59.933602449579325, 30.239353179931644]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: 'ул Опочинина',
        year: 2024,
        start: 'VO_FOTO',
        url: './maps/fun/opochinina_quest_2024.webp',
        link: './original_maps/fun/opochinina_quest_2024_omaps.jpg',
        bounds: [[59.93739711089411, 30.23433208465576], [59.93773033236808, 30.237550735473636], [59.93358094884485, 30.2359414100647]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: 'ул Опочинина',
        year: 2024,
        start: 'VO_FOTO',
        url: './maps/fun/opochinina_quest_2024_10.webp',
        link: './original_maps/fun/opochinina_quest_2024_10_omaps.jpg',
        bounds: [[59.93121578296593, 30.236821174621586], [59.93169958061576, 30.24023294448853], [59.92966758306869, 30.237658023834232]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: 'Психдиспансер №1, Канареечная ул',
        year: 2024,
        start: 'VO_FOTO',
        url: './maps/fun/kanareechnaya_quest_2024.webp',
        link: './original_maps/fun/kanareechnaya_quest_2024_omaps.jpg',
        bounds: [[59.93337669117245, 30.244567394256595], [59.93382820644956, 30.247678756713867], [59.93074272955227, 30.24594068527222]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: 'Горный ун-т',
        year: 2024,
        start: 'VO_FOTO',
        url: './maps/fun/gorny_quest_2024.webp',
        link: './original_maps/fun/gorny_quest_2024_omaps.jpg',
        bounds: [[59.93303267540724, 30.263299942016605], [59.93386045730558, 30.26589632034302], [59.92863540966103, 30.268342494964603]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: '19-я линия ВО',
        year: 2024,
        start: 'VO_FOTO',
        url: './maps/fun/19_line_vo_quest_2024.webp',
        link: './original_maps/fun/19_line_vo_quest_2024_omaps.jpg',
        bounds: [[59.93380670586144, 30.26568174362183], [59.93459146829775, 30.268342494964603], [59.930054639817016, 30.270016193389893]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: '17-я линия ВО',
        year: 2024,
        start: 'VO_FOTO',
        url: './maps/fun/17_line_vo_quest_2024.webp',
        link: './original_maps/fun/17_line_vo_quest_2024_omaps.jpg',
        bounds: [[59.934526967975934, 30.268256664276127], [59.935290213744125, 30.2709174156189], [59.93135554745621, 30.27190446853638]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: '21-я линия ВО',
        year: 2024,
        start: 'VO_FOTO',
        url: './maps/fun/21_line_vo_quest_2024.webp',
        link: './original_maps/fun/21_line_vo_quest_2024_omaps.jpg',
        bounds: [[59.93720362592115, 30.258514881134037], [59.937934563229476, 30.26096105575562], [59.93337669117245, 30.263042449951175]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: '23-я линия ВО',
        year: 2024,
        start: 'VO_FOTO',
        url: './maps/fun/23_line_vo_quest_2024.webp',
        link: './original_maps/fun/23_line_vo_quest_2024_omaps.jpg',
        bounds: [[59.93648342193396, 30.25591850280762], [59.93713913067927, 30.25832176208496], [59.932624152051815, 30.26046752929688]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: '12-я линия ВО',
        year: 2024,
        start: 'VO_FOTO',
        url: './maps/fun/12_line_vo_quest_2024.webp',
        link: './original_maps/fun/12_line_vo_quest_2024_omaps.jpg',
        bounds: [[59.94079366322793, 30.27113199234009], [59.94157826034501, 30.27364253997803], [59.93731111771214, 30.275251865386966]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: '15-я линия ВО',
        year: 2024,
        start: 'VO_FOTO',
        url: './maps/fun/15_line_vo_quest_2024.webp',
        link: './original_maps/fun/15_line_vo_quest_2024_omaps.jpg',
        bounds: [[59.93943938343081, 30.266067981719974], [59.94020251615056, 30.26864290237427], [59.935827700224124, 30.270230770111088]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: '18-я линия ВО',
        year: 2024,
        start: 'VO_FOTO',
        url: './maps/fun/18_line_vo_quest_2024.webp',
        link: './original_maps/fun/18_line_vo_quest_2024_omaps.jpg',
        bounds: [[59.9386332382438, 30.263385772705078], [59.93937489253705, 30.26596069335938], [59.93506446682503, 30.267612934112552]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: '19-я линия ВО, школа №17',
        year: 2024,
        start: 'VO_FOTO',
        url: './maps/fun/school_17_quest_2024.webp',
        link: './original_maps/fun/school_17_quest_2024_omaps.jpg',
        bounds: [[59.937934563229476, 30.26096105575562], [59.93867623314849, 30.263535976409916], [59.93434421638295, 30.265080928802494]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: 'Рижский пр',
        year: 2024,
        url: './maps/city/rizhsky_2024.webp',
        link: './original_maps/fun/rizhsky_2024_omaps.jpg',
        bounds: [[59.913428634991995, 30.265789031982425], [59.91333182273538, 30.27765512466431], [59.91116960876894, 30.26566028594971]],
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
        bounds: [[60.71531614120031, 28.727724552154545], [60.7152741571504, 28.739225864410404], [60.71134840613098, 28.727788925170902]],
        owner: 'RYZHOV',
        type: ['FOTO']
    },
    {
        name: 'ЦФКСиЗ Василеостровский',
        year: 2025,
        start: 'VO_FOTO',
        url: './maps/fun/vasileostrovsky_quest_2025.webp',
        link: ['./original_maps/fun/vasileostrovsky_quest_2025_omaps.jpg','./original_maps/fun/vasileostrovsky_quest_2025_pictures.jpg'],
        bounds: [[59.93912767628233, 30.24697065353394], [59.93990156449925, 30.24973869323731], [59.93650492078692, 30.249996185302738]],
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
        bounds: [[59.84923400890005, 30.148243904113773], [59.846302346152285, 30.177640914916996], [59.8438123856693, 30.146162509918216]],
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
        bounds: [[59.83387224636939, 30.16000270843506], [59.83307431911679, 30.170366764068607], [59.825126351538806, 30.15708446502686]],
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
        bounds: [[59.84918012037049, 30.122237205505375], [59.8481346656308, 30.13283729553223], [59.83923080294449, 30.118525028228763]],
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
        bounds: [[59.88816181944314, 29.93259429931641], [59.8848244744704, 29.953665733337406], [59.8776318950225, 29.92607116699219]],
        author: 'URVNTSV',
        type: ['PARK','FOTO']
    },
    {
        name: 'Дудергоф - Нагорный парк',
        year: 2023,
        start: 'RED_SELO_FOTO',
        url: './maps/fun/nagorny_park_foto_2023.webp',
        link: ['./original_maps/fun/nagorny_park_foto_2023_omaps.pdf','./original_maps/fun/nagorny_park_foto_2023_pictures.pdf'],
        bounds: [[59.704477564169, 30.119748115539554], [59.70270229245775, 30.13854503631592], [59.69263342210444, 30.115456581115726]],
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
        bounds: [[59.85395430548737, 30.15910148620606], [59.85388964841335, 30.175881385803223], [59.84726163187207, 30.15901565551758]],
        type: ['PARK','FOTO']
    },
    {
        name: 'Полежаевский парк',
        year: 2025,
        month: 1,
        start: 'RED_SELO_FOTO',
        url: './maps/fun/polezhaevsky_foto_2025.webp',
        link: ['./original_maps/fun/polezhaevsky_foto_2025_omaps.jpg','./original_maps/fun/polezhaevsky_foto_2025_pictures.pdf'],
        bounds: [[59.84679816020103, 30.18032312393189], [59.84556939011643, 30.211329460144047], [59.83326841128922, 30.178198814392093]],
        type: ['PARK','FOTO']
    },
    {
        name: 'Новознаменка (Универ МВД)',
        year: 2025,
        month: 4,
        start: 'RED_SELO_FOTO',
        url: './maps/fun/novoznamenka_foto_2025.webp',
        link: ['./original_maps/fun/novoznamenka_foto_2025_omaps.pdf','./original_maps/fun/novoznamenka_foto_2025_pictures.pdf'],
        bounds: [[59.84910467628252, 30.130991935729984], [59.84679816020103, 30.147707462310795], [59.84524602202844, 30.129210948944095]],
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
        bounds: [[59.8477358752735, 30.147514343261722], [59.84629156750396, 30.161354541778568], [59.841160534642746, 30.14478921890259]],
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
        bounds: [[59.83382911565534, 30.125262737274173], [59.83271848052935, 30.14206409454346], [59.827089255293465, 30.123524665832523]],
        type: ['PARK','FOTO']
    },
];
