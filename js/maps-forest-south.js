// types can be ROGAINE, SPRINT, CITY, RELIEF, WINTER, VELO
let southMaps = [
    // --- Юг ЛО (Сосновый Бор, Луга, Гатчина, Кириши) ---
    {
        name: 'Мга',
        year: 1992,
        url: './maps/forest/south/mga_1992.webp',
        link: './original_maps/forest/south/mga_1992_omaps.jpg',
        bounds: [[59.753390360325824, 31.02187156677246], [59.7482666342105, 31.071996688842777], [59.73721660178828, 31.016163825988773]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'Туутари',
        year: 1983,
        url: './maps/forest/south/tuutary_1983.webp',
        link: './original_maps/forest/south/tuutary_1983_omaps.jpg',
        bounds: [[59.70584142848521, 30.1585865020752], [59.70486724535825, 30.186910629272464], [59.688215155652344, 30.15480995178223]],
        author: 'VLKV_K'
    },
    {
        name: 'Туутари',
        year: 2004,
        url: './maps/forest/south/tuutari_2004.webp',
        link: './original_maps/forest/south/tuutari_2004_omaps.jpg',
        bounds: [[59.70649086815244, 30.16549587249756], [59.70371983775948, 30.189528465271], [59.689146505392564, 30.157985687255863]],
        owner: 'ANCHKV'
    },
    {
        name: 'Ломоносов, Красный пруд',
        year: 1997,
        url: './maps/forest/south/lomonosov_1997.webp',
        link: './original_maps/forest/south/lomonosov_1997_omaps.jpg',
        bounds: [[59.90426248948507, 29.730892181396488], [59.901766105385086, 29.76556777954102], [59.881917481564564, 29.72436904907227]],
        author: 'KRCHKN_V'
    },
    {
        name: 'Ульяновка, Саблино',
        year: 1992,
        url: './maps/forest/south/sablino_1992.webp',
        link: './original_maps/forest/south/sablino_1992_omaps.jpg',
        bounds: [[59.67734027291342, 30.76103210449219], [59.6750435315491, 30.801458358764652], [59.65443081951741, 30.75407981872559]],
        author: 'DRBSHV',
        qtty: 100
    },
    {
        name: 'Ульяновка, Саблино',
        year: 2020,
        url: './maps/forest/south/sablino_2020.webp',
        link: './original_maps/forest/south/sablino_2020_omaps.jpg',
        bounds: [[59.67127306766719, 30.782189369201664], [59.67020035820331, 30.798819065093998], [59.65993745299763, 30.779120922088627]],
        author: 'DRBSHV',
        owner: 'VOLKOV_AM'
    },
    {
        name: 'Ульяновка, Саблино',
        year: 2022,
        url: './maps/forest/south/ulianovka_2022.webp',
        link: './original_maps/forest/south/ulianovka_2022_omaps.jpg',
        bounds: [[59.67159812436367, 30.784184932708744], [59.67015701568526, 30.800814628601078], [59.66147654713086, 30.78051567077637]],
        author: 'DRBSHV'
    },
    {
        name: 'Тихвин, Царицыно оз',
        url: './maps/forest/south/tikhvin_tsaritsyno.webp',
        link: './original_maps/forest/south/tikhvin_tsaritsyno_omaps.jpg',
        bounds: [[59.71603617732234, 33.486156463623054], [59.71127468540223, 33.539457321167], [59.69618493920625, 33.4799337387085]],
        owner: 'EGRV_SRG'
    },
    {
        name: 'Будогощь',
        year: 2015,
        area: 43,
        url: './maps/forest/south/budogosch_2015.webp',
        link: './original_maps/forest/south/budogosch_2015_omaps.jpg',
        bounds: [[59.33809215192027, 32.31679916381837], [59.32206812385745, 32.48983383178712], [59.25368420047816, 32.295856475830085]],
        author: ['BYMKV','YUDNTSV','VRBY'],
        owner: 'EGRV_SRG'
    },
    {
        name: 'Будогощь, Линное оз',
        url: './maps/forest/south/budogosch_linnoe.webp',
        link: './original_maps/forest/south/budogosch_linnoe_omaps.jpg',
        bounds: [[59.296396427716594, 32.37688064575196], [59.29328471812206, 32.42511749267579], [59.2658367640389, 32.368040084838874]],
        author: 'BYMKV',
        owner: 'EGRV_SRG'
    },
    {
        name: 'Будогощь, т/б Мечта',
        year: 2005,
        url: './maps/forest/south/budogosch_mechta_2005.webp',
        link: './original_maps/forest/south/budogosch_mechta_2005_omaps.jpg',
        bounds: [[59.30305715920366, 32.32589721679688], [59.29679084945624, 32.38821029663087], [59.276318706162115, 32.31679916381837]],
        author: ['BYMKV','BRTNK_V','VRBY','BGNV','GRKHVSKY'],
        owner: 'EGRV_SRG'
    },
    {
        name: 'Будогощь, Светлое оз',
        year: 2010,
        url: './maps/forest/south/budogosch_svetloe_2010.webp',
        link: './original_maps/forest/south/budogosch_svetloe_2010_omaps.jpg',
        bounds: [[59.296045826776194, 32.347269058227546], [59.292079402035064, 32.38919734954835], [59.27807269098165, 32.340788841247566]],
        author: ['TKMKV_K','VRBY'],
        owner: 'EGRV_SRG'
    },
    {
        name: 'Будогощь, Черёмуховое оз',
        date: '1989-05-08',
        start: 'LENINGRAD_30',
        url: './maps/forest/south/budogosch_cheremukhovoe_1988.webp',
        link: ['./original_maps/forest/south/budogosch_cheremukhovoe_1988_omaps.jpg','./original_maps/forest/south/budogosch_cheremukhovoe_1988_clean_omaps.jpg'],
        bounds: [[59.302662810107954, 32.37713813781739], [59.299705046163595, 32.433700561523445], [59.26748163360483, 32.37022876739503]],
        author: ['MRKRV','MRSKY_S'],
        planner: ['MLVA_M','MRSKY_S','KUOKNN_Y']
    },
    {
        name: 'Будогощь, Черёмуховое оз',
        year: 2010,
        url: './maps/forest/south/budogosch_cheremukhovoe_2010.webp',
        link: './original_maps/forest/south/budogosch_cheremukhovoe_2010_omaps.jpg',
        bounds: [[59.29238621381673, 32.38606452941895], [59.28890154588962, 32.422928810119636], [59.27923465616935, 32.38181591033936]],
        owner: 'EGRV_SRG'
    },
    {
        name: 'Васильково, Березняк',
        year: 2012,
        url: './maps/forest/south/vasilkovo_2012.webp',
        link: './original_maps/forest/south/vasilkovo_2012_omaps.gif',
        bounds: [[59.330825359776256, 32.33276367187501], [59.32727895112307, 32.397737503051765], [59.3000994295482, 32.31945991516114]],
        author: 'YUDNTSV',
        owner: 'EGRV_SRG'
    },
    {
        name: 'Горчаково',
        year: 2014,
        url: './maps/forest/south/gorchakovo_2014.webp',
        link: './original_maps/forest/south/gorchakovo_2014_omaps.gif',
        bounds: [[59.34675773893997, 32.39130020141602], [59.34251275287995, 32.45511531829835], [59.32263741276709, 32.38537788391114]],
        author: 'YUDNTSV',
        owner: 'EGRV_SRG'
    },
    {
        name: 'Городище',
        year: 2007,
        url: './maps/forest/south/gorodische_2007.webp',
        link: './original_maps/forest/south/gorodische_2007_omaps.gif',
        bounds: [[59.62636330165139, 32.10355281829835], [59.62456218827075, 32.12552547454835], [59.610931356105894, 32.098102569580085]],
        author: ['VRBY','KRTSHV'],
        owner: 'EGRV_SRG'
    },
    {
        name: 'Змеева новинка',
        year: 2009,
        url: './maps/forest/south/zmeeva_novinka_2009.webp',
        link: './original_maps/forest/south/zmeeva_novinka_2009_omaps.gif',
        bounds: [[59.19553768598236, 32.540817260742195], [59.18969120621885, 32.60235786437989], [59.180545833407564, 32.53699779510499]],
        owner: 'EGRV_SRG'
    },
    {
        name: 'Будогощь, 92 км',
        year: 2022,
        url: './maps/forest/south/budogosch_92km_2022.webp',
        bounds: [[59.33126316233755, 32.3899269104004], [59.32920544124976, 32.4203109741211], [59.31208212202485, 32.38340377807618]],
        author: 'YUDNTSV',
        owner: 'EGRV_SRG'
    },
    {
        name: 'Будогощь, Орлёнок',
        date: '1989-05-07',
        start: 'LENINGRAD_30',
        url: './maps/forest/south/budogosch_orlenok_1988.webp',
        link: ['./original_maps/forest/south/budogosch_orlenok_1988_full_1.jpg','./original_maps/forest/south/budogosch_orlenok_1988_full_2.jpg'],
        bounds: [[59.32828599367687, 32.41129875183106], [59.32202433200791, 32.49000549316407], [59.295388440275644, 32.40056991577149]],
        author: ['MRKRV','MRSKY_S','MLVA_M'],
        planner: ['MLVA_M','MRSKY_S','KUOKNN_Y']
    },
    {
        name: 'Будогощь, Орлёнок',
        year: 2006,
        url: './maps/forest/south/budogosch_orlenok_2006.webp',
        link: './original_maps/forest/south/budogosch_orlenok_2006_omaps.jpg',
        bounds: [[59.32149882541276, 32.411727905273445], [59.31400947360146, 32.48803138732911], [59.29578287370009, 32.4023723602295]],
        author: 'KRTSHV',
        owner: 'EGRV_SRG'
    },
    {
        name: 'Кириши, ОКБ ТБМ',
        url: './maps/forest/south/kirishi_east.webp',
        link: './original_maps/forest/south/kirishi_east_omaps.gif',
        bounds: [[59.441169698522636, 32.046389579772956], [59.438725866629234, 32.07750320434571], [59.42961449118175, 32.04353570938111]],
        owner: 'EGRV_SRG',
        zindex: 2
    },
    {
        name: 'Кириши, р Нудыня',
        year: 2009,
        url: './maps/forest/south/nudynya_2009.webp',
        link: './original_maps/forest/south/nudynya_2009_omaps.gif',
        bounds: [[59.44941632791593, 31.97450637817383], [59.44114787937609, 32.07406997680665], [59.4038820760619, 31.96060180664063]],
        author: 'YUDNTSV',
        owner: 'EGRV_SRG'
    },
    {
        name: 'Ольгин ключ',
        year: 2011,
        url: './maps/forest/south/olgin_key_2011.webp',
        link: './original_maps/forest/south/olgin_key_2011_omaps.jpg',
        bounds: [[59.3146007982062, 32.20161437988282], [59.311293628527885, 32.23852157592774], [59.29828084587648, 32.19556331634522]],
        author: 'YUDNTSV',
        owner: 'EGRV_SRG'
    },
    {
        name: 'Тихвинский тракт',
        year: 2012,
        url: './maps/forest/south/tikhvin_road_2012.webp',
        link: './original_maps/forest/south/tikhvin_road_2012_omaps.gif',
        bounds: [[59.337698209064456, 32.41490364074708], [59.33156962077402, 32.479362487792976], [59.31089937492294, 32.405462265014656]],
        author: 'YUDNTSV',
        owner: 'EGRV_SRG'
    },
    {
        name: 'Рахово',
        year: 2016,
        url: './maps/forest/south/rakhovo_2016.webp',
        link: './original_maps/forest/south/rakhovo_2016_omaps.gif',
        bounds: [[59.1976474480317, 32.509360313415534], [59.19333987861877, 32.55661010742188], [59.18360189128722, 32.504596710205085]],
        author: ['BRGNTS','VRBY'],
        owner: 'EGRV_SRG'
    },
    {
        name: 'Красная горка',
        year: 2023,
        url: './maps/forest/south/red_hill_2023.webp',
        link: './original_maps/forest/south/red_hill_2023_omaps.gif',
        bounds: [[59.20685415494763, 32.490863800048835], [59.20378919042065, 32.51702070236207], [59.192988216319236, 32.484383583068855]],
        author: ['BRGNTS','VRBY'],
        owner: 'EGRV_SRG'
    },
    {
        name: 'Елизаветино',
        year: 2019,
        url: './maps/forest/south/elizavetino_2019.webp',
        link: './original_maps/forest/south/elizavetino_2019_omaps.jpg',
        bounds: [[59.49776478166187, 29.74329471588135], [59.49525968670402, 29.769129753112797], [59.49083719575336, 29.74011898040772]],
        author: 'TKMKV_K'
    },
    {
        name: 'Пелеши',
        year: 2018,
        url: './maps/forest/south/peleshi_2018.webp',
        link: './original_maps/forest/south/peleshi_2018_omaps.jpg',
        bounds: [[59.04607342200753, 28.045520782470707], [59.04417505299444, 28.07358741760254], [59.01824961979959, 28.03719520568848]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'Сланцы',
        year: 2018,
        url: './maps/forest/south/slantsy_2018.webp',
        link: './original_maps/forest/south/slantsy_2018_omaps.jpg',
        bounds: [[59.13395662150237, 28.08717012405396], [59.1335272878623, 28.09860706329346], [59.129376785164105, 28.0866551399231]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'Лемовжа',
        year: 1992,
        url: './maps/forest/south/lemovzha_1992.webp',
        link: './original_maps/forest/south/lemovzha_1992_omaps.jpg',
        bounds: [[59.124917461875384, 29.296503067016605], [59.12300142617275, 29.333152770996097], [59.10718453374521, 29.293198585510257]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'Хотнежа',
        year: 2017,
        url: './maps/forest/south/khotnezha_2017.webp',
        link: './original_maps/forest/south/khotnezha_2017_omaps.jpg',
        bounds: [[59.12615071552468, 29.295215606689457], [59.12112933377082, 29.33632850646973], [59.10989463099106, 29.288692474365238]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'Рагин Бор',
        url: './maps/forest/south/ragin_bor_2017.webp',
        link: './original_maps/forest/south/ragin_bor_2017_omaps.jpg',
        bounds: [[60.06852373745732, 32.26736068725587], [60.066489419991676, 32.309331893920906], [60.05473074902389, 32.265043258667]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'Юшково - Марьина Роща',
        url: './maps/forest/south/yushkovo.webp',
        link: './original_maps/forest/south/yushkovo_omaps.jpg',
        bounds: [[60.08868881306909, 32.28620052337647], [60.085243214141705, 32.31443881988526], [60.0787790695464, 32.28122234344483]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'Гатчина - Приоратский парк',
        year: 1993,
        url: './maps/forest/south/gatchina_prioratsky_1993.webp',
        link: './original_maps/forest/south/gatchina_prioratsky_1993_omaps.jpg',
        bounds: [[59.56337553311358, 30.105199813842777], [59.563071167965695, 30.13584136962891], [59.54445618473496, 30.103740692138675]],
        author: ['MRSKY_S','HSMTLN','KUOKNN_Y','MRSKA_I','GLK'],
        areas: [25,25,20,20,10]
    },
    {
        name: 'Сосновый Бор, Калищенское оз',
        year: 2021,
        url: './maps/forest/south/kalischenskoe_oz_2021.webp',
        bounds: [[59.91607472734414, 29.105272293090824], [59.912202325545465, 29.146471023559574], [59.90314344395666, 29.100208282470707]],
        author: 'DBRTSV_V',
        owner: 'YUVNT'
    },
    {
        name: 'Сосновый Бор, Копанское оз',
        year: 2018,
        url: './maps/forest/south/kopanskoe_2018.webp',
        link: './original_maps/forest/south/kopanskoe_2018_omaps.jpg',
        bounds: [[59.77029092200125, 28.72585773468018], [59.76748195838195, 28.754224777221683], [59.76229555851045, 28.722982406616214]],
        owner: 'YUVNT'
    },
    {
        name: 'Сосновый Бор',
        year: 2004,
        url: './maps/forest/south/sosnovij_bor_2004.webp',
        link: './original_maps/forest/south/sosnovij_bor_2004_omaps.jpg',
        bounds: [[59.8994847627188, 29.062614440917972], [59.89474940043523, 29.10115242004395], [59.87015771627351, 29.05240058898926]],
        author: ['SHRNN','DBRTSV_V'],
        owner: 'YUVNT'
    },
    {
        name: 'Сосновый Бор',
        year: 2021,
        url: './maps/forest/south/sosnovij_bor_2021.webp',
        link: './original_maps/forest/south/sosnovij_bor_2021_omaps.jpg',
        bounds: [[59.904520725405696, 29.05892372131348], [59.89922648763698, 29.104671478271488], [59.862056997499586, 29.041585922241214]],
        author: ['LVCHV','STLV_S','DBRTSV_V','TKHNVA'],
        owner: 'YUVNT'
    },
    {
        name: 'Сосновый Бор, вдоль моря',
        year: 2020,
        url: './maps/forest/south/sosnovij_bor_bereg_2020.webp',
        link: './original_maps/forest/south/sosnovij_bor_bereg_2020_omaps.pdf',
        bounds: [[59.95431193211919, 29.060254096984867], [59.95251769387143, 29.08093929290772], [59.92587203736449, 29.048967361450195]],
        author: 'LVCHV',
        owner: 'YUVNT'
    },
    {
        name: 'Кандикюля - Липово',
        year: 1977,
        url: './maps/forest/south/kandikjulja_lipovo_1977.webp',
        link: './original_maps/forest/south/kandikjulja_lipovo_1977_omaps.jpg',
        bounds: [[59.95400036478209, 29.060769081115726], [59.95501026206206, 29.09617424011231], [59.9297750992851, 29.05870914459229]],
        author: 'SHRNN',
        owner: 'SHRNN'
    },
    {
        name: 'Сосновый Бор, Липово',
        year: 2020,
        url: './maps/forest/south/sosnovij_bor_lipovo_2020.webp',
        link: './original_maps/forest/south/sosnovij_bor_lipovo_2020_omaps.jpg',
        bounds: [[59.94432957749965, 29.061756134033207], [59.943426826724476, 29.07488822937012], [59.93117277838889, 29.056606292724613]],
        author: ['LVCHV','STLV_S'],
        owner: 'YUVNT'
    },
    {
        name: 'Форт Красная Горка',
        year: 2012,
        url: './maps/forest/south/fort_krasnaja_gorka.webp',
        link: ['./original_maps/forest/south/fort_krasnaja_gorka_2012_omaps.gif','./original_maps/forest/south/fort_krasnaja_gorka_omaps.jpg'],
        bounds: [[59.9807629815427, 29.305815696716312], [59.976221733526316, 29.357614517211918], [59.962916479136254, 29.298820495605472]],
        author: ['DBRTSV_V','MKHLV_A'],
        owner: 'YUVNT'
    },
    {
        name: 'Форт Красная Горка',
        year: 2020,
        url: './maps/forest/south/fort_krasnaja_gorka_2020.webp',
        link: './original_maps/forest/south/fort_krasnaja_gorka_2020_omaps.jpg',
        bounds: [[59.97953916041285, 29.321157932281494], [59.975620481424144, 29.357635974884037], [59.97175502864446, 29.31828260421753]],
        author: 'STLV_S',
        owner: 'YUVNT'
    },
    {
        name: 'Лебяжье - Борки',
        year: 2010,
        url: './maps/forest/south/lebyazhje_borki_2011.webp',
        bounds: [[59.95763155393701, 29.44644927978516], [59.955397023083194, 29.48790550231934], [59.94918681445341, 29.4404411315918]],
        author: ['SHRNN','MLNKV_F'],
        owner: 'YUVNT'
    },
    {
        name: 'Шепелево, Батарейная бухта',
        year: 2023,
        url: './maps/forest/south/shepelevo_2023.webp',
        link: './original_maps/forest/south/shepelevo_2023_omaps.jpg',
        bounds: [[59.98215851183213, 29.116559028625492], [59.97999004714518, 29.1423511505127], [59.96229350332903, 29.108920097351078]],
        author: ['SHRNN','LVCHV'],
        owner: 'YUVNT'
    },
    {
        name: 'Шапки',
        year: 1982,
        url: './maps/forest/south/shapki_south_1982.webp',
        link: './original_maps/forest/south/shapki_south_1982_omaps.jpg',
        bounds: [[59.59440632597042, 31.181645393371586], [59.5919301289402, 31.227135658264164], [59.56863626721851, 31.17555141448975]],
        author: 'DRBSHV'
    },
    {
        name: 'Шапки',
        date: '1969-02-15',
        info: 'Матч ориентировщиков Москвы и Ленинграда.',
        url: './maps/forest/south/shapki_1969.webp',
        link: ['./original_maps/forest/south/shapki_1969_omaps.jpg','./docs/sport_week_leningrad_1969_article_omaps.jpg','./docs/sov_sport_1969_article_omaps.jpg'],
        bounds: [[59.63048596861456, 31.12933158874512], [59.62983505485158, 31.181859970092777], [59.5911915787326, 31.12212181091309]]
    },
    {
        name: 'Шапки',
        year: 1991,
        url: './maps/forest/south/shapki_1991.webp',
        link: ['./original_maps/forest/south/shapki_1991_full_1.jpg','./original_maps/forest/south/shapki_1991_full_2.jpg','./original_maps/forest/south/shapki_1991_full_3.jpg'],
        bounds: [[59.63005202750804, 31.123924255371097], [59.62501790078504, 31.19928359985352], [59.59562263666977, 31.11611366271973]],
        author: 'KRCHKN_V',
        qtty: 200
    },
    {
        name: 'Шапки',
        year: 2010,
        url: './maps/forest/south/shapki_2010.webp',
        link: './original_maps/forest/south/shapki_2010_omaps.jpg',
        bounds: [[59.6156854113636, 31.140747070312504], [59.61160434543937, 31.20151519775391], [59.59284243327236, 31.134738922119144]],
        author: ['RYLOV_V','KRCHKN_V']
    },
    {
        name: 'Шапки, Нестеровское оз',
        year: 2023,
        url: './maps/forest/south/shapki_nesterovskoe_2023.webp',
        link: './original_maps/forest/south/shapki_nesterovskoe_2023_omaps.jpg',
        bounds: [[59.606828000483425, 31.217393875122074], [59.60483041854183, 31.236405372619632], [59.593906757043015, 31.213402748107914]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'Шапки',
        year: 2020,
        url: './maps/forest/south/shapki_otime_2020.webp',
        bounds: [[59.59822886857503, 31.170444488525394], [59.59875009071161, 31.21267318725586], [59.5807197983505, 31.17130279541016]],
        info: 'Ковидный полигон от O-Time.',
        owner: 'NKLSK'
    },
    {
        name: 'Луга, Шалово',
        year: 1,
        url: './maps/forest/south/luga_shalovo_1.webp',
        link: ['./original_maps/forest/south/luga_shalovo_1_omaps.jpg','./original_maps/forest/south/luga_shalovo_1_bw_omaps.jpg'],
        bounds: [[58.80720768446812, 29.875087738037113], [58.80742995065043, 29.993362426757816], [58.76459520046961, 29.876031875610355]]
    },
    {
        name: 'Луга, Зелёное оз',
        year: 1985,
        url: './maps/forest/south/luga_zelenoe_1985.webp',
        link: ['./original_maps/forest/south/luga_zelenoe_1985_omaps.jpg',,'./original_maps/forest/south/shalovo_1980_omaps.jpg'],
        bounds: [[58.815652798287154, 29.898004531860355], [58.808319001138535, 29.942464828491214], [58.7674435939664, 29.87019538879395]],
        author: 'BYMKV'
    },
    {
        name: 'Луга, Шалово',
        year: 1986,
        url: './maps/forest/south/luga_shalovo_1986.webp',
        link: './original_maps/forest/south/luga_shalovo_1986_omaps.jpg',
        bounds: [[58.803139961832024, 29.95954513549805], [58.80125042024749, 30.019884109497074], [58.77158224959439, 29.956626892089847]],
        author: 'BYMKV'
    },
    {
        name: 'Луга, Шалово',
        year: 2006,
        url: './maps/forest/south/luga_shalovo_2006.webp',
        link: './original_maps/forest/south/luga_shalovo_2006_omaps.jpg',
        photo: './tracks/shalovo/pic_2.jpg',
        bounds: [[58.801650567053684, 29.925470352172855], [58.798716049977116, 29.97980117797852], [58.770247253260614, 29.919204711914066]],
        author: 'BYMKV'
    },
    {
        name: 'Луга, р Свинечная',
        year: 2008,
        url: './maps/forest/south/luga_svinechnaja_2008.webp',
        link: './original_maps/forest/south/luga_svinechnaja_2008_omaps.jpg',
        bounds: [[58.72039295137178, 29.784665107727054], [58.717562985688595, 29.817109107971195], [58.69533864737061, 29.772734642028812]],
        author: 'BYMKV',
        zindex: 2
    },
    {
        name: 'Луга, оз Омчино',
        year: 2022,
        start: 'RUSSIA_2022',
        info: '9.06, кросс-многодневный (пролог 1).',
        gps: {
            'М': 'https://viewer.o-gps-center.ru/viewer/event/13284/',
            'Ж': 'https://viewer.o-gps-center.ru/viewer/event/13304/'
        },
        url: './maps/forest/south/luga_omchino_2022_06_09.webp',
        link: ['./original_maps/forest/south/luga_omchino_2022_06_09.gif','./original_maps/forest/south/luga_omchino_2022_06_09_W.gif'],
        bounds: [[58.7214624847923, 29.791960716247562], [58.719635345315204, 29.81028556823731], [58.70454663851744, 29.78552341461182]],
        author: ['KVZN','TKMKV_K','VRBY']
    },
    {
        name: 'Луга, оз Омчино',
        year: 2022,
        start: 'RUSSIA_2022',
        info: '10.06, кросс-многодневный (пролог 2).',
        gps: {
            'М': 'https://viewer.o-gps-center.ru/viewer/event/13305/',
            'Ж': 'https://viewer.o-gps-center.ru/viewer/event/13307/'
        },
        url: './maps/forest/south/luga_omchino_2022_06_10.webp',
        link: ['./original_maps/forest/south/luga_omchino_2022_06_10.gif','./original_maps/forest/south/luga_omchino_2022_06_10_W.gif'],
        bounds: [[58.72103913174298, 29.753894805908207], [58.714665932133464, 29.814834594726566], [58.69656503364685, 29.74453926086426]],
        author: ['KVZN','TKMKV_K','VRBY']
    },
    {
        name: 'Луга, Штоль',
        year: 2022,
        excluded: true,
        start: 'RUSSIA_2022',
        info: '11.06, кросс-многодневный (финал).',
        gps: {
            'М': 'https://viewer.o-gps-center.ru/viewer/event/13308/',
            'Ж': 'https://viewer.o-gps-center.ru/viewer/event/13309/'
        },
        url: './maps/forest/south/luga_omchino_2022_06_11.webp',
        link: ['./original_maps/forest/south/luga_omchino_2022_06_11.gif','./original_maps/forest/south/luga_omchino_2022_06_11_W.gif'],
        bounds: [[58.73460614874689, 29.80378389358521], [58.732601503940764, 29.824168682098392], [58.72341207053472, 29.79923486709595]],
        author: 'TKMKV_K',
        owner: 'SHEIN'
    },
    {
        name: 'Луга, оз Омчино',
        year: 2021,
        excluded: true,
        url: './maps/forest/south/luga_omchino_2021.webp',
        link: './original_maps/forest/south/luga_omchino_2021_omaps.jpg',
        bounds: [[58.72634181401793, 29.769344329833988], [58.720727184095935, 29.826335906982425], [58.70276319833188, 29.76101875305176]],
        author: ['KVZN','TKMKV_K','VRBY'], // По Омчино копирайт не надо писать. Права не определены.
    },
    {
        name: 'Луга, Штоль',
        year: 2022,
        url: './maps/forest/south/luga_shtole_2022.webp',
        link: './original_maps/forest/south/luga_shtole_2022_omaps.jpg',
        bounds: [[58.7346506950973, 29.80603694915772], [58.732601503940764, 29.824790954589847], [58.723178126011526, 29.798913002014164]],
        owner: 'SHEIN',
        author: ['KVZN','TKMKV_K']
    },
    {
        name: 'Луга, Алёнка',
        year: 2022,
        url: './maps/forest/south/luga_alenka_2022.webp',
        link: './original_maps/forest/south/luga_alenka_2022_omaps.jpg',
        photo: './tracks/shalovo/pic_1.jpg',
        bounds: [[58.82262957770419, 29.91113662719727], [58.81956352271544, 29.952249526977543], [58.80125042024749, 29.90461349487305]],
        owner: 'SHEIN',
        author: 'STLRV'
    },
    {
        name: 'Луга, Зелёный Бор',
        year: 2021,
        url: './maps/forest/south/luga_zeleny_bor_2021.webp',
        link: './original_maps/forest/south/luga_zeleny_bor_2021_omaps.jpg',
        bounds: [[58.70978496598359, 29.80749607086182], [58.707422243479755, 29.835648536682132], [58.688313967069234, 29.80028629302979]],
        owner: 'SHEIN',
        author: ['KVZN','TKMKV_K']
    },
    {
        name: 'Луга, Шалово',
        year: 2020,
        url: './maps/forest/south/luga_shalovo_nm_2020.webp',
        bounds: [[58.78426215625883, 29.895257949829105], [58.780036035082176, 29.943408966064457], [58.766598001517856, 29.8894214630127]],
        author: 'ORLV',
        owner: 'LM'
    },
    {
        name: 'Россонь',
        year: 2022,
        url: './maps/forest/south/rosson_2022.webp',
        link: './original_maps/forest/south/rosson_2022_omaps.jpg',
        bounds: [[59.48968245988147, 28.0931568145752], [59.487089607147894, 28.11877727508545], [59.471244913663796, 28.08616161346436]],
        owner: 'SHEIN',
        author: 'DBRTSV_V'
    },
    {
        name: 'Сиверский, р Орлинка',
        url: './maps/forest/south/siversky_orlinka.webp',
        link: './original_maps/forest/south/siversky_orlinka_omaps.jpg',
        bounds: [[59.348245546606904, 30.15884399414063], [59.347939238592836, 30.194077491760257], [59.32933678887218, 30.15910148620606]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'Павловск, школа №464',
        year: 2016,
        url: './maps/forest/south/pavlovsk_school_464.webp',
        link: './original_maps/forest/south/pavlovsk_school_464.jpg',
        bounds: [[59.682886470899305, 30.420885086059574], [59.681857460558504, 30.43169975280762], [59.678965230682635, 30.419061183929447]],
        author: 'SHRNN',
        owner: 'SHRNN'
    },
    {
        name: 'Дудергоф - Нагорный парк',
        year: 1997,
        url: './maps/forest/south/nagorny_park_1997.webp',
        link: './original_maps/forest/south/nagorny_park_1997_omaps.jpg',
        photo: './tracks/dudergof/pic_1.jpg',
        bounds: [[59.70547340708053, 30.1201343536377], [59.70348169163133, 30.140476226806644], [59.69226525549391, 30.115199089050297]],
        info: 'Тренировка от Стрекозаек.',
        author: 'DBRTSV_V'
    },
    {
        name: 'Дудергоф - Нагорный парк',
        year: 2020,
        url: './maps/forest/south/nagorny_park_2020.webp',
        link: './original_maps/forest/south/nagorny_park_2020_omaps.jpg',
        photo: './tracks/dudergof/pic_5.jpg',
        bounds: [[59.7056032974501, 30.118718147277836], [59.70358994008143, 30.14111995697022], [59.691702169319946, 30.11365413665772]],
        info: 'Ковидный полигон от O-Time.',
        author: 'DBRTSV_V'
    },
    {
        name: 'Кургальский заказник, Долина реки Выбья',
        year: 2019,
        url: './maps/forest/south/vybja_2019.webp',
        link: './original_maps/forest/south/vybja_2019_omaps.jpg',
        bounds: [[59.687608681434966, 28.220057487487797], [59.68399126787276, 28.253316879272464], [59.67601858248743, 28.215680122375492]],
        author: 'FRSHLV'
    },
];