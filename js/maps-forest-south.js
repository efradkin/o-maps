// types can be ROGAINE, SPRINT, CITY, RELIEF, WINTER, VELO
let southMaps = [
    // --- Юг ЛО (Сосновый Бор, Луга, Гатчина, Кириши) ---
    {
        name: 'Мга',
        year: 1992,
        url: './maps/forest/south/mga_1992.webp',
        link: './original_maps/forest/south/mga_1992_omaps.jpg',
        bounds: [[59.7533904, 31.0218716], [59.7482666, 31.0719967], [59.7372166, 31.0161638]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'Туутари',
        year: 1983,
        url: './maps/forest/south/tuutary_1983.webp',
        link: './original_maps/forest/south/tuutary_1983_omaps.jpg',
        bounds: [[59.7058414, 30.1585865], [59.7048672, 30.1869106], [59.6882152, 30.15481]],
        author: 'VLKV_K'
    },
    {
        name: 'Туутари',
        year: 2004,
        url: './maps/forest/south/tuutari_2004.webp',
        link: './original_maps/forest/south/tuutari_2004_omaps.jpg',
        bounds: [[59.7064909, 30.1654959], [59.7037198, 30.1895285], [59.6891465, 30.1579857]],
        owner: 'ANCHKV'
    },
    {
        name: 'Ломоносов, Красный пруд',
        year: 1997,
        url: './maps/forest/south/lomonosov_1997.webp',
        link: './original_maps/forest/south/lomonosov_1997_omaps.jpg',
        bounds: [[59.9042625, 29.7308922], [59.9017661, 29.7655678], [59.8819175, 29.724369]],
        author: 'KRCHKN_V'
    },
    {
        name: 'Ломоносов, Красный пруд',
        year: 2005,
        url: './maps/forest/south/lomonosov_2005.webp',
        link: ['./original_maps/forest/south/lomonosov_2005_omaps.gif','./original_maps/forest/south/lomonosov_2005_omaps.ocd'],
        bounds: [[59.904284, 29.7302914], [59.9018307, 29.7660398], [59.8818744, 29.7245836]],
        author: 'KRCHKN_V'
    },
    {
        name: 'Ульяновка, Саблино',
        year: 1992,
        url: './maps/forest/south/sablino_1992.webp',
        link: './original_maps/forest/south/sablino_1992_omaps.jpg',
        bounds: [[59.6773403, 30.7610321], [59.6750435, 30.8014584], [59.6544308, 30.7540798]],
        author: 'DRBSHV',
        qtty: 100
    },
    {
        name: 'Ульяновка, Саблино',
        year: 2020,
        url: './maps/forest/south/sablino_2020.webp',
        link: './original_maps/forest/south/sablino_2020_omaps.jpg',
        bounds: [[59.6712731, 30.7821894], [59.6702004, 30.7988191], [59.6599375, 30.7791209]],
        author: 'DRBSHV',
        owner: 'VOLKOV_AM'
    },
    {
        name: 'Ульяновка, Саблино',
        year: 2022,
        url: './maps/forest/south/ulianovka_2022.webp',
        link: './original_maps/forest/south/ulianovka_2022_omaps.jpg',
        bounds: [[59.6715981, 30.7841849], [59.670157, 30.8008146], [59.6614765, 30.7805157]],
        author: 'DRBSHV'
    },
    {
        name: 'Тихвин, Царицыно оз',
        url: './maps/forest/south/tikhvin_tsaritsyno.webp',
        link: './original_maps/forest/south/tikhvin_tsaritsyno_omaps.jpg',
        bounds: [[59.7160362, 33.4861565], [59.7112747, 33.5394573], [59.6961849, 33.4799337]],
        owner: 'EGRV_SRG'
    },
    {
        name: 'Тихвин, Попово оз',
        year: 2012,
        url: './maps/forest/south/tikhvin_popovo_2012.webp',
        link: './original_maps/forest/south/tikhvin_popovo_2012_omaps.webp',
        bounds: [[59.6548644, 33.6149025], [59.6523277, 33.6409092], [59.6370378, 33.609581]],
        owner: 'EGRV_SRG'
    },
    {
        name: 'Будогощь',
        year: 2015,
        area: 43,
        url: './maps/forest/south/budogosch_2015.webp',
        link: './original_maps/forest/south/budogosch_2015_omaps.jpg',
        bounds: [[59.3380922, 32.3167992], [59.3220681, 32.4898338], [59.2536842, 32.2958565]],
        author: ['BYMKV','YUDNTSV','VRBY'],
        owner: 'EGRV_SRG'
    },
    {
        name: 'Будогощь, Линное оз',
        url: './maps/forest/south/budogosch_linnoe.webp',
        link: './original_maps/forest/south/budogosch_linnoe_omaps.jpg',
        bounds: [[59.2963964, 32.3768806], [59.2932847, 32.4251175], [59.2658368, 32.3680401]],
        author: 'BYMKV',
        owner: 'EGRV_SRG'
    },
    {
        name: 'Будогощь, т/б Мечта',
        year: 2005,
        url: './maps/forest/south/budogosch_mechta_2005.webp',
        link: './original_maps/forest/south/budogosch_mechta_2005_omaps.jpg',
        bounds: [[59.3030572, 32.3258972], [59.2967908, 32.3882103], [59.2763187, 32.3167992]],
        author: ['BYMKV','BRTNK_V','VRBY','BGNV','GRKHVSKY'],
        owner: 'EGRV_SRG'
    },
    {
        name: 'Будогощь, Светлое оз',
        year: 2010,
        url: './maps/forest/south/budogosch_svetloe_2010.webp',
        link: './original_maps/forest/south/budogosch_svetloe_2010_omaps.jpg',
        bounds: [[59.2960458, 32.3472691], [59.2920794, 32.3891973], [59.2780727, 32.3407888]],
        author: ['TKMKV_K','VRBY'],
        owner: 'EGRV_SRG'
    },
    {
        name: 'Будогощь, Черёмуховое оз',
        date: '1989-05-08',
        start: 'LENINGRAD_30',
        url: './maps/forest/south/budogosch_cheremukhovoe_1988.webp',
        link: ['./original_maps/forest/south/budogosch_cheremukhovoe_1988_omaps.jpg','./original_maps/forest/south/budogosch_cheremukhovoe_1988_clean_omaps.jpg'],
        bounds: [[59.3026628, 32.3771381], [59.299705, 32.4337006], [59.2674816, 32.3702288]],
        author: ['MRKRV','MRSKY_S'],
        planner: ['MLVA_M','MRSKY_S','KUOKNN_Y']
    },
    {
        name: 'Будогощь, Черёмуховое оз',
        year: 2010,
        url: './maps/forest/south/budogosch_cheremukhovoe_2010.webp',
        link: './original_maps/forest/south/budogosch_cheremukhovoe_2010_omaps.jpg',
        bounds: [[59.2923862, 32.3860645], [59.2889015, 32.4229288], [59.2792347, 32.3818159]],
        owner: 'EGRV_SRG'
    },
    {
        name: 'Васильково, Березняк',
        year: 2012,
        url: './maps/forest/south/vasilkovo_2012.webp',
        link: './original_maps/forest/south/vasilkovo_2012_omaps.gif',
        bounds: [[59.3308254, 32.3327637], [59.327279, 32.3977375], [59.3000994, 32.3194599]],
        author: 'YUDNTSV',
        owner: 'EGRV_SRG'
    },
    {
        name: 'Горчаково',
        year: 2014,
        url: './maps/forest/south/gorchakovo_2014.webp',
        link: './original_maps/forest/south/gorchakovo_2014_omaps.gif',
        bounds: [[59.3467577, 32.3913002], [59.3425128, 32.4551153], [59.3226374, 32.3853779]],
        author: 'YUDNTSV',
        owner: 'EGRV_SRG'
    },
    {
        name: 'Городище',
        year: 2007,
        url: './maps/forest/south/gorodische_2007.webp',
        link: './original_maps/forest/south/gorodische_2007_omaps.gif',
        bounds: [[59.6263633, 32.1035528], [59.6245622, 32.1255255], [59.6109314, 32.0981026]],
        author: ['VRBY','KRTSHV'],
        owner: 'EGRV_SRG'
    },
    {
        name: 'Змеева новинка',
        year: 2009,
        url: './maps/forest/south/zmeeva_novinka_2009.webp',
        link: './original_maps/forest/south/zmeeva_novinka_2009_omaps.gif',
        bounds: [[59.1955377, 32.5408173], [59.1896912, 32.6023579], [59.1805458, 32.5369978]],
        owner: 'EGRV_SRG'
    },
    {
        name: 'Будогощь, 92 км',
        year: 2022,
        url: './maps/forest/south/budogosch_92km_2022.webp',
        bounds: [[59.3312632, 32.3899269], [59.3292054, 32.420311], [59.3120821, 32.3834038]],
        author: 'YUDNTSV',
        owner: 'EGRV_SRG'
    },
    {
        name: 'Будогощь, Орлёнок',
        date: '1989-05-07',
        start: 'LENINGRAD_30',
        url: './maps/forest/south/budogosch_orlenok_1988.webp',
        link: ['./original_maps/forest/south/budogosch_orlenok_1988_full_1.jpg','./original_maps/forest/south/budogosch_orlenok_1988_full_2.jpg'],
        bounds: [[59.328286, 32.4112988], [59.3220243, 32.4900055], [59.2953884, 32.4005699]],
        author: ['MRKRV','MRSKY_S','MLVA_M'],
        planner: ['MLVA_M','MRSKY_S','KUOKNN_Y']
    },
    {
        name: 'Будогощь, Орлёнок',
        year: 2006,
        url: './maps/forest/south/budogosch_orlenok_2006.webp',
        link: './original_maps/forest/south/budogosch_orlenok_2006_omaps.jpg',
        bounds: [[59.3214988, 32.4117279], [59.3140095, 32.4880314], [59.2957829, 32.4023724]],
        author: 'KRTSHV',
        owner: 'EGRV_SRG'
    },
    {
        name: 'Кириши, ОКБ ТБМ',
        url: './maps/forest/south/kirishi_east.webp',
        link: './original_maps/forest/south/kirishi_east_omaps.gif',
        bounds: [[59.4411697, 32.0463896], [59.4387259, 32.0775032], [59.4296145, 32.0435357]],
        owner: 'EGRV_SRG',
        zindex: 2
    },
    {
        name: 'Кириши, р Нудыня',
        year: 2009,
        url: './maps/forest/south/nudynya_2009.webp',
        link: './original_maps/forest/south/nudynya_2009_omaps.gif',
        bounds: [[59.4494163, 31.9745064], [59.4411479, 32.07407], [59.4038821, 31.9606018]],
        author: 'YUDNTSV',
        owner: 'EGRV_SRG'
    },
    {
        name: 'Ольгин ключ',
        year: 2011,
        url: './maps/forest/south/olgin_key_2011.webp',
        link: './original_maps/forest/south/olgin_key_2011_omaps.jpg',
        bounds: [[59.3146008, 32.2016144], [59.3112936, 32.2385216], [59.2982808, 32.1955633]],
        author: 'YUDNTSV',
        owner: 'EGRV_SRG'
    },
    {
        name: 'Тихвинский тракт',
        year: 2012,
        url: './maps/forest/south/tikhvin_road_2012.webp',
        link: './original_maps/forest/south/tikhvin_road_2012_omaps.gif',
        bounds: [[59.3376982, 32.4149036], [59.3315696, 32.4793625], [59.3108994, 32.4054623]],
        author: 'YUDNTSV',
        owner: 'EGRV_SRG'
    },
    {
        name: 'Рахово',
        year: 2016,
        url: './maps/forest/south/rakhovo_2016.webp',
        link: './original_maps/forest/south/rakhovo_2016_omaps.gif',
        bounds: [[59.1976474, 32.5093603], [59.1933399, 32.5566101], [59.1836019, 32.5045967]],
        author: ['BRGNTS','VRBY'],
        owner: 'EGRV_SRG'
    },
    {
        name: 'Красная горка',
        year: 2023,
        url: './maps/forest/south/red_hill_2023.webp',
        link: './original_maps/forest/south/red_hill_2023_omaps.gif',
        bounds: [[59.2068542, 32.4908638], [59.2037892, 32.5170207], [59.1929882, 32.4843836]],
        author: ['BRGNTS','VRBY'],
        owner: 'EGRV_SRG'
    },
    {
        name: 'Елизаветино',
        year: 2019,
        url: './maps/forest/south/elizavetino_2019.webp',
        link: './original_maps/forest/south/elizavetino_2019_omaps.jpg',
        bounds: [[59.4977648, 29.7432947], [59.4952597, 29.7691298], [59.4908372, 29.740119]],
        author: 'TKMKV_K'
    },
    {
        name: 'Пелеши',
        year: 2018,
        url: './maps/forest/south/peleshi_2018.webp',
        link: './original_maps/forest/south/peleshi_2018_omaps.jpg',
        bounds: [[59.0460734, 28.0455208], [59.0441751, 28.0735874], [59.0182496, 28.0371952]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'Сланцы',
        year: 2018,
        url: './maps/forest/south/slantsy_2018.webp',
        link: './original_maps/forest/south/slantsy_2018_omaps.jpg',
        bounds: [[59.1339566, 28.0871701], [59.1335273, 28.0986071], [59.1293768, 28.0866551]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'Лемовжа',
        year: 1992,
        url: './maps/forest/south/lemovzha_1992.webp',
        link: './original_maps/forest/south/lemovzha_1992_omaps.jpg',
        bounds: [[59.1249175, 29.2965031], [59.1230014, 29.3331528], [59.1071845, 29.2931986]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'Хотнежа',
        year: 2017,
        url: './maps/forest/south/khotnezha_2017.webp',
        link: './original_maps/forest/south/khotnezha_2017_omaps.jpg',
        bounds: [[59.1261507, 29.2952156], [59.1211293, 29.3363285], [59.1098946, 29.2886925]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'Рагин Бор',
        url: './maps/forest/south/ragin_bor_2017.webp',
        link: './original_maps/forest/south/ragin_bor_2017_omaps.jpg',
        bounds: [[60.0685237, 32.2673607], [60.0664894, 32.3093319], [60.0547307, 32.2650433]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'Юшково - Марьина Роща',
        url: './maps/forest/south/yushkovo.webp',
        link: './original_maps/forest/south/yushkovo_omaps.jpg',
        bounds: [[60.0886888, 32.2862005], [60.0852432, 32.3144388], [60.0787791, 32.2812223]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'Гатчина - Приоратский парк',
        year: 1993,
        url: './maps/forest/south/gatchina_prioratsky_1993.webp',
        link: './original_maps/forest/south/gatchina_prioratsky_1993_omaps.jpg',
        bounds: [[59.5633755, 30.1051998], [59.5630712, 30.1358414], [59.5444562, 30.1037407]],
        author: ['MRSKY_S','HSMTLN','KUOKNN_Y','MRSKA_I','GLK'],
        areas: [25,25,20,20,10]
    },
    {
        name: 'Сосновый Бор, Калищенское оз',
        year: 2021,
        url: './maps/forest/south/kalischenskoe_oz_2021.webp',
        bounds: [[59.9160747, 29.1052723], [59.9122023, 29.146471], [59.9031434, 29.1002083]],
        author: 'DBRTSV_V',
        owner: 'YUVENTA'
    },
    {
        name: 'Сосновый Бор, Копанское оз',
        year: 2018,
        url: './maps/forest/south/kopanskoe_2018.webp',
        link: './original_maps/forest/south/kopanskoe_2018_omaps.jpg',
        bounds: [[59.7702909, 28.7258577], [59.767482, 28.7542248], [59.7622956, 28.7229824]],
        owner: 'YUVENTA'
    },
    {
        name: 'Сосновый Бор',
        year: 2004,
        url: './maps/forest/south/sosnovij_bor_2004.webp',
        link: './original_maps/forest/south/sosnovij_bor_2004_omaps.jpg',
        bounds: [[59.8994848, 29.0626144], [59.8947494, 29.1011524], [59.8701577, 29.0524006]],
        author: ['SHRNN','DBRTSV_V'],
        owner: 'YUVENTA'
    },
    {
        name: 'Сосновый Бор',
        year: 2021,
        url: './maps/forest/south/sosnovij_bor_2021.webp',
        link: './original_maps/forest/south/sosnovij_bor_2021_omaps.jpg',
        bounds: [[59.9045207, 29.0589237], [59.8992265, 29.1046715], [59.862057, 29.0415859]],
        author: ['LVCHV','STLV_S','DBRTSV_V','TKHNVA'],
        owner: 'YUVENTA'
    },
    {
        name: 'Сосновый Бор, вдоль моря',
        year: 2020,
        url: './maps/forest/south/sosnovij_bor_bereg_2020.webp',
        link: './original_maps/forest/south/sosnovij_bor_bereg_2020_omaps.webp',
        bounds: [[59.9543119, 29.0602541], [59.9525177, 29.0809393], [59.925872, 29.0489674]],
        author: 'LVCHV',
        owner: 'YUVENTA'
    },
    {
        name: 'Кандикюля - Липово',
        year: 1977,
        url: './maps/forest/south/kandikjulja_lipovo_1977.webp',
        link: './original_maps/forest/south/kandikjulja_lipovo_1977_omaps.jpg',
        bounds: [[59.9540004, 29.0607691], [59.9550103, 29.0961742], [59.9297751, 29.0587091]],
        author: 'SHRNN',
        owner: 'SHRNN'
    },
    {
        name: 'Сосновый Бор, Липово',
        year: 2020,
        url: './maps/forest/south/sosnovij_bor_lipovo_2020.webp',
        link: './original_maps/forest/south/sosnovij_bor_lipovo_2020_omaps.webp',
        bounds: [[59.9443296, 29.0617561], [59.9434268, 29.0748882], [59.9311728, 29.0566063]],
        author: ['LVCHV','STLV_S'],
        owner: 'YUVENTA'
    },
    {
        name: 'Форт Красная Горка',
        year: 2012,
        url: './maps/forest/south/fort_krasnaja_gorka.webp',
        link: ['./original_maps/forest/south/fort_krasnaja_gorka_2012_omaps.gif','./original_maps/forest/south/fort_krasnaja_gorka_omaps.jpg'],
        bounds: [[59.980763, 29.3058157], [59.9762217, 29.3576145], [59.9629165, 29.2988205]],
        author: ['DBRTSV_V','MKHLV_A'],
        owner: 'YUVENTA'
    },
    {
        name: 'Форт Красная Горка',
        year: 2020,
        url: './maps/forest/south/fort_krasnaja_gorka_2020.webp',
        link: './original_maps/forest/south/fort_krasnaja_gorka_2020_omaps.jpg',
        bounds: [[59.9795392, 29.3211579], [59.9756205, 29.357636], [59.971755, 29.3182826]],
        author: 'STLV_S',
        owner: 'YUVENTA'
    },
    {
        name: 'Лебяжье - Борки',
        year: 2010,
        url: './maps/forest/south/lebyazhje_borki_2011.webp',
        link: './original_maps/forest/south/lebyazhje_borki_2011_omaps.jpg',
        bounds: [[59.9576316, 29.4464493], [59.955397, 29.4879055], [59.9491868, 29.4404411]],
        restricted: 'на неопределённый срок. Минная опасность!',
        author: ['SHRNN','MLNKV_F'],
        owner: 'YUVENTA'
    },
    {
        name: 'Шепелево, Батарейная бухта',
        year: 2023,
        url: './maps/forest/south/shepelevo_2023.webp',
        link: './original_maps/forest/south/shepelevo_2023_omaps.jpg',
        bounds: [[59.9821585, 29.116559], [59.97999, 29.1423512], [59.9622935, 29.1089201]],
        author: ['SHRNN','LVCHV'],
        owner: 'YUVENTA'
    },
    {
        name: 'Шепелево, Батарейная бухта',
        year: 2013,
        url: './maps/forest/south/shepelevo_2013.webp',
        link: ['./original_maps/forest/south/shepelevo_2013_omaps.gif','./original_maps/forest/south/shepelevo_2013_omaps.ocd'],
        bounds: [[59.9818579, 29.114027], [59.980355, 29.1408062], [59.9627231, 29.1093063]],
        author: 'SHRNN',
        // owner: 'SHRNN' ?? Мельников
    },
    {
        name: 'Шапки',
        year: 1982,
        url: './maps/forest/south/shapki_south_1982.webp',
        link: './original_maps/forest/south/shapki_south_1982_omaps.jpg',
        bounds: [[59.5944063, 31.1816454], [59.5919301, 31.2271357], [59.5686363, 31.1755514]],
        author: 'DRBSHV'
    },
    {
        name: 'Шапки',
        date: '1969-02-15',
        info: 'Матч ориентировщиков Москвы и Ленинграда.',
        url: './maps/forest/south/shapki_1969.webp',
        link: ['./original_maps/forest/south/shapki_1969_omaps.jpg','./docs/sport_week_leningrad_1969_article_omaps.jpg','./docs/sov_sport_1969_article_omaps.jpg'],
        bounds: [[59.630486, 31.1293316], [59.6298351, 31.18186], [59.5911916, 31.1221218]]
    },
    {
        name: 'Шапки',
        date: '1969-03-04',
        info: 'П-во Ленинграда, марафон маркир.',
        url: './maps/forest/south/shapki_marathon_1969.webp',
        link: ['./original_maps/forest/south/shapki_marathon_1969_M1_omaps.webp','./original_maps/forest/south/shapki_marathon_1969_M2_omaps.webp','./original_maps/forest/south/shapki_marathon_1969_W_omaps.webp'],
        bounds: [[59.6282728, 31.2056351], [59.6273181, 31.2579918], [59.5809371, 31.1899281]],
        results: './docs/1969/1969_03_04_shapki_marathon_omaps.pdf'
    },
    {
        name: 'Шапки',
        year: 1991,
        url: './maps/forest/south/shapki_1991.webp',
        link: ['./original_maps/forest/south/shapki_1991_full_1.jpg','./original_maps/forest/south/shapki_1991_full_2.jpg','./original_maps/forest/south/shapki_1991_full_3.jpg'],
        bounds: [[59.630052, 31.1239243], [59.6250179, 31.1992836], [59.5956226, 31.1161137]],
        author: 'KRCHKN_V',
        qtty: 200
    },
    {
        name: 'Шапки',
        year: 2010,
        url: './maps/forest/south/shapki_2010.webp',
        link: './original_maps/forest/south/shapki_2010_omaps.jpg',
        bounds: [[59.6156854, 31.1407471], [59.6116043, 31.2015152], [59.5928424, 31.1347389]],
        author: ['RYLOV_V','KRCHKN_V']
    },
    {
        name: 'Шапки, Нестеровское оз',
        year: 2023,
        url: './maps/forest/south/shapki_nesterovskoe_2023.webp',
        link: './original_maps/forest/south/shapki_nesterovskoe_2023_omaps.jpg',
        bounds: [[59.606828, 31.2173939], [59.6048304, 31.2364054], [59.5939068, 31.2134027]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'Шапки',
        year: 2020,
        url: './maps/forest/south/shapki_otime_2020.webp',
        link: './original_maps/forest/south/shapki_otime_2020_omaps.jpg',
        bounds: [[59.5982289, 31.1704445], [59.5987501, 31.2126732], [59.5807198, 31.1713028]],
        info: 'Ковидный полигон от O-Time.',
        owner: 'NKLSK'
    },
    {
        name: 'Луга, Шалово',
        year: 1,
        url: './maps/forest/south/luga_shalovo_1.webp',
        link: ['./original_maps/forest/south/luga_shalovo_1_omaps.jpg','./original_maps/forest/south/luga_shalovo_1_bw_omaps.jpg'],
        bounds: [[58.8072077, 29.8750877], [58.80743, 29.9933624], [58.7645952, 29.8760319]]
    },
    {
        name: 'Луга, Зелёное оз',
        year: 1985,
        url: './maps/forest/south/luga_zelenoe_1985.webp',
        link: ['./original_maps/forest/south/luga_zelenoe_1985_omaps.jpg','./original_maps/forest/south/shalovo_black_omaps.webp','./original_maps/forest/south/shalovo_1980_omaps.jpg'],
        bounds: [[58.8156528, 29.8980045], [58.808319, 29.9424648], [58.7674436, 29.8701954]],
        author: 'BYMKV'
    },
    {
        name: 'Луга, Шалово',
        year: 1986,
        url: './maps/forest/south/luga_shalovo_1986.webp',
        link: './original_maps/forest/south/luga_shalovo_1986_omaps.jpg',
        bounds: [[58.80314, 29.9595451], [58.8012504, 30.0198841], [58.7715822, 29.9566269]],
        author: 'BYMKV'
    },
    {
        name: 'Луга, оз Омчино',
        year: 1994,
        url: './maps/forest/south/luga_omchino_1994.webp',
        link: './original_maps/forest/south/luga_omchino_1994_omaps.jpg',
        bounds: [[58.7255398, 29.7535515], [58.72095, 29.8270226], [58.6961191, 29.7453547]],
        author: ['BYMKV','DRBSHV','FDRV_L','KBTSVA','FLCHKN','KRNLV_A']
    },
    {
        name: 'Луга, Шалово',
        year: 2006,
        url: './maps/forest/south/luga_shalovo_2006.webp',
        link: './original_maps/forest/south/luga_shalovo_2006_omaps.jpg',
        photo: './tracks/shalovo/pic_2.jpg',
        bounds: [[58.8016506, 29.9254704], [58.798716, 29.9798012], [58.7702473, 29.9192047]],
        author: 'BYMKV'
    },
    {
        name: 'Луга, разъезд генерала Омельченко',
        year: 2006,
        date: '2007-05-01',
        url: './maps/forest/south/luga_omelchenko_2006.webp',
        link: './original_maps/forest/south/luga_omelchenko_2006_omaps.jpg',
        info: 'ЧиП ЛО.',
        o_site: '070429_lo',
        bounds: [[58.7994942, 29.8706675], [58.7980713, 29.8865461], [58.7880652, 29.8680067]],
        author: 'BYMKV'
    },
    {
        name: 'Луга, р Свинечная',
        year: 2008,
        url: './maps/forest/south/luga_svinechnaja_2008.webp',
        link: './original_maps/forest/south/luga_svinechnaja_2008_omaps.jpg',
        bounds: [[58.720393, 29.7846651], [58.717563, 29.8171091], [58.6953386, 29.7727346]],
        author: 'BYMKV',
        zindex: 2
    },
    {
        name: 'Луга, оз Омчино',
        year: 2022,
        start: ['RUSSIA_2022','RUSSIA_CHAMP'],
        info: '9.06, кросс-многодневный (пролог 1).',
        o_gps: {
            'М': 13284,
            'Ж': 13304
        },
        url: './maps/forest/south/luga_omchino_2022_06_09.webp',
        link: ['./original_maps/forest/south/luga_omchino_2022_06_09.gif','./original_maps/forest/south/luga_omchino_2022_06_09_W.gif'],
        bounds: [[58.7214625, 29.7919607], [58.7196353, 29.8102856], [58.7045466, 29.7855234]],
        author: ['KVZN','TKMKV_K','VRBY']
    },
    {
        name: 'Луга, оз Омчино',
        year: 2022,
        start: ['RUSSIA_2022','RUSSIA_CHAMP'],
        info: '10.06, кросс-многодневный (пролог 2).',
        o_gps: {
            'М': 13305,
            'Ж': 13307
        },
        url: './maps/forest/south/luga_omchino_2022_06_10.webp',
        link: ['./original_maps/forest/south/luga_omchino_2022_06_10.gif','./original_maps/forest/south/luga_omchino_2022_06_10_W.gif'],
        bounds: [[58.7210391, 29.7538948], [58.7146659, 29.8148346], [58.696565, 29.7445393]],
        author: ['KVZN','TKMKV_K','VRBY']
    },
    {
        name: 'Луга, Штоль',
        year: 2022,
        excluded: true,
        start: ['RUSSIA_2022','RUSSIA_CHAMP'],
        info: '11.06, кросс-многодневный (финал).',
        o_gps: {
            'М': 13308,
            'Ж': 13309
        },
        url: './maps/forest/south/luga_omchino_2022_06_11.webp',
        link: ['./original_maps/forest/south/luga_omchino_2022_06_11.gif','./original_maps/forest/south/luga_omchino_2022_06_11_W.gif'],
        bounds: [[58.7346061, 29.8037839], [58.7326015, 29.8241687], [58.7234121, 29.7992349]],
        author: 'TKMKV_K',
        owner: 'SHEIN'
    },
    {
        name: 'Луга, оз Омчино',
        year: 2021,
        excluded: true,
        url: './maps/forest/south/luga_omchino_2021.webp',
        link: './original_maps/forest/south/luga_omchino_2021_omaps.jpg',
        bounds: [[58.7263418, 29.7693443], [58.7207272, 29.8263359], [58.7027632, 29.7610188]],
        author: ['KVZN','TKMKV_K','VRBY'], // По Омчино копирайт не надо писать. Права не определены.
    },
    {
        name: 'Луга, Штоль',
        year: 2022,
        url: './maps/forest/south/luga_shtole_2022.webp',
        link: './original_maps/forest/south/luga_shtole_2022_omaps.jpg',
        bounds: [[58.7346507, 29.8060369], [58.7326015, 29.824791], [58.7231781, 29.798913]],
        owner: 'SHEIN',
        author: ['KVZN','TKMKV_K']
    },
    {
        name: 'Луга, Алёнка',
        year: 2022,
        url: './maps/forest/south/luga_alenka_2022.webp',
        link: './original_maps/forest/south/luga_alenka_2022_omaps.jpg',
        photo: './tracks/shalovo/pic_1.jpg',
        bounds: [[58.8226296, 29.9111366], [58.8195635, 29.9522495], [58.8012504, 29.9046135]],
        owner: 'SHEIN',
        author: 'STLRV'
    },
    {
        name: 'Луга, Зелёный Бор',
        year: 2021,
        url: './maps/forest/south/luga_zeleny_bor_2021.webp',
        link: './original_maps/forest/south/luga_zeleny_bor_2021_omaps.jpg',
        bounds: [[58.709785, 29.8074961], [58.7074222, 29.8356485], [58.688314, 29.8002863]],
        owner: 'SHEIN',
        author: ['KVZN','TKMKV_K']
    },
    {
        name: 'Луга, Шалово',
        year: 2020,
        url: './maps/forest/south/luga_shalovo_nm_2020.webp',
        bounds: [[58.7842622, 29.8952579], [58.780036, 29.943409], [58.766598, 29.8894215]],
        author: 'ORLV',
        owner: 'LM'
    },
    {
        name: 'Россонь',
        year: 2022,
        url: './maps/forest/south/rosson_2022.webp',
        link: './original_maps/forest/south/rosson_2022_omaps.jpg',
        bounds: [[59.4896825, 28.0931568], [59.4870896, 28.1187773], [59.4712449, 28.0861616]],
        owner: 'SHEIN',
        author: 'DBRTSV_V'
    },
    {
        name: 'Ивангород',
        date: '1979-08-04',
        url: './maps/forest/south/ivangorod_1979.webp',
        link: './original_maps/forest/south/ivangorod_1979_omaps.webp',
        info: '4-5 августа. Кубок ЭССР. Кубок ЦСФиС.',
        bounds: [[59.4552183, 28.1198072], [59.4570285, 28.1896305], [59.4310005, 28.1198502]],
        author: 'NKTN_V'
    },
    {
        name: 'Сиверский, р Орлинка',
        url: './maps/forest/south/siversky_orlinka.webp',
        link: './original_maps/forest/south/siversky_orlinka_omaps.jpg',
        bounds: [[59.3482455, 30.158844], [59.3479392, 30.1940775], [59.3293368, 30.1591015]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'Павловск, школа №464',
        year: 2016,
        url: './maps/forest/south/pavlovsk_school_464.webp',
        link: './original_maps/forest/south/pavlovsk_school_464.jpg',
        bounds: [[59.6828865, 30.4208851], [59.6818575, 30.4316998], [59.6789652, 30.4190612]],
        author: 'SHRNN',
        owner: 'SHRNN'
    },
    {
        name: 'Дудергоф - Нагорный парк',
        year: 1997,
        url: './maps/forest/south/nagorny_park_1997.webp',
        link: ['./original_maps/forest/south/nagorny_park_1997_omaps.jpg','./original_maps/forest/south/crown_hill_1997_omaps.jpg'],
        photo: './tracks/dudergof/pic_1.jpg',
        bounds: [[59.7054734, 30.1201344], [59.7034817, 30.1404762], [59.6922653, 30.1151991]],
        info: 'Тренировка от Стрекозаек.',
        author: 'DBRTSV_V'
    },
    {
        name: 'Дудергоф - Нагорный парк',
        year: 2020,
        url: './maps/forest/south/nagorny_park_2020.webp',
        link: './original_maps/forest/south/nagorny_park_2020_omaps.jpg',
        photo: './tracks/dudergof/pic_5.jpg',
        bounds: [[59.7056033, 30.1187181], [59.7035899, 30.14112], [59.6917022, 30.1136541]],
        info: 'Ковидный полигон от O-Time.',
        author: 'DBRTSV_V'
    },
    {
        name: 'Кургальский заказник, Долина реки Выбья',
        year: 2019,
        url: './maps/forest/south/vybja_2019.webp',
        link: './original_maps/forest/south/vybja_2019_omaps.jpg',
        bounds: [[59.6876087, 28.2200575], [59.6839913, 28.2533169], [59.6760186, 28.2156801]],
        author: 'FRSHLV'
    },
];