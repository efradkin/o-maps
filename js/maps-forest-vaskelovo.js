// types can be ROGAINE, SPRINT, CITY, RELIEF
let vaskelovoMaps = [
    // --- ВАСКЕЛОВО - ГРУЗИНО - ЛЕМБОЛОВО - ОРЕХОВО ---
    {
        name: 'Орехово',
        date: '1966-03-13',
        start: 'MEET_1966',
        url: './maps/forest/vaskelovo/orekhovo_1966.webp',
        link: ['./original_maps/forest/meet_1966_title.jpg','./original_maps/forest/meet_1966_agenda.jpg','./original_maps/forest/vaskelovo/orekhovo_1966_omaps.jpg'],
        info: 'Маркир-эстафета.',
        bounds: [[60.4456198, 30.1664829], [60.4457468, 30.2464771], [60.4135133, 30.1696587]]
    },
    {
        name: 'Орехово, 67км',
        year: 1988,
        url: './maps/forest/vaskelovo/orekhovo_1988.webp',
        link: ['./original_maps/forest/vaskelovo/orekhovo_1988_omaps.jpg','./original_maps/forest/vaskelovo/orekhovo_10000_1988_omaps.jpg'],
        bounds: [[60.4960028, 30.2847576], [60.4924308, 30.3385305], [60.4701442, 30.276947]],
        author: 'BYMKV',
    },
    {
        name: 'Орехово, 67км',
        year: 1981,
        url: './maps/forest/vaskelovo/orekhovo_1981.webp',
        link: './original_maps/forest/vaskelovo/orekhovo_1981_omaps.jpg',
        bounds: [[60.4867654, 30.2850151], [60.4856027, 30.3172445], [60.4691712, 30.2819681]],
        author: 'TRSV'
    },
    {
        name: 'Лемболово',
        page: 'spb',
        start: 'MMS',
        date: '1997-06-28',
        url: './maps/starts/mms/mms_1997_06_28.webp',
        link: ['./original_maps/starts/mms/mms_1997_06_28_omaps.jpg','./original_maps/forest/vaskelovo/lembolovo_north_east_1997_omaps.jpg'],
        bounds: [[60.446403, 30.3172016], [60.4434394, 30.3660822], [60.4204837, 30.3102493]],
        author: 'CHGRVSKY_V',
        planner: 'TLNV_A'
    },
    {
        name: 'Лемболово-Орехово',
        info: 'Карта лыжного марафона-Ретро, проводимого <a href="https://o-site.spb.ru/history/Peoples/bap.html">Борисом Панкратьевым</a>.',
        logo: 'nevsky_azimut.gif',
        year: 1991,
        excluded: true,
        area: 28,
        url: './maps/forest/vaskelovo/lembolovo_orekhovo_east_1991.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_orekhovo_east_1991_omaps.jpg',
        bounds: [[60.4985812, 30.2676773], [60.4896194, 30.3917885], [60.424106, 30.2479362]],
        author: 'BYMKV',
        qtty: 200
    },
    {
        name: 'Орехово',
        year: 1997,
        url: './maps/forest/vaskelovo/orekhovo_1997.webp',
        link: './original_maps/forest/vaskelovo/orekhovo_1997_omaps.webp',
        bounds: [[60.4930438, 30.2784061], [60.4872517, 30.3533363], [60.4434183, 30.2609825]],
        author: 'BYMKV',
        start: 'OKINCHITSA'
    },
    {
        name: 'Лемболово, с-з',
        year: 1991,
        url: './maps/forest/vaskelovo/lembolovo_north_west_1991.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_north_west_1991_omaps.webp',
        bounds: [[60.4456622, 30.2558327], [60.4397981, 30.3403759], [60.4158228, 30.2483654]],
        author: 'BYMKV',
    },
    {
        name: 'Лемболово, ю-з',
        year: 1991,
        url: './maps/forest/vaskelovo/lembolovo_south_west_1991.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_south_west_1991_omaps.jpg',
        bounds: [[60.4279186, 30.2669907], [60.4222843, 30.3420067], [60.3996105, 30.2589226]],
        author: 'BYMKV',
        qtty: 40
    },
    {
        name: 'Лемболово',
        year: 1997,
        url: './maps/forest/vaskelovo/lembolovo_1997.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_1997_omaps.webp',
        bounds: [[60.4273255, 30.266819], [60.4224538, 30.3422642], [60.3790844, 30.254631]],
        author: ['DBRTSV_V','CHGRVSKY_Y','KRCHKN_V'],
    },
    {
        name: 'Лемболово, с-в',
        year: 1989,
        date: '1991-10-12',
        url: './maps/forest/vaskelovo/lembolovo_north_east_1989.webp',
        link: ['./original_maps/forest/vaskelovo/lembolovo_north_east_1989_omaps.webp','./original_maps/forest/vaskelovo/lembolovo_night_spb_1991_omaps.jpg'],
        info: 'Ночной СПб.',
        results: './docs/1991/1991_10_12_night_omaps.pdf',
        bounds: [[60.4470169, 30.3050995], [60.4412166, 30.3794289], [60.4207591, 30.2967739]],
        author: ['BYMKV','SMRNV_A','KCHTV','IVNV_A','TLNV_A','OSTPNK','EGRV_E'],
        areas: [62,20,10,5,1,1,1],
        me: 'H-B'
    },
    {
        name: 'Лемболово',
        year: 1989,
        url: './maps/forest/vaskelovo/lembolovo_1989.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_1989_omaps.jpg',
        bounds: [[60.4409202, 30.2851868], [60.4370457, 30.3391743], [60.414488, 30.2770758]],
        author: 'BYMKV'
    },
    {
        name: 'Орехово',
        year: 1985,
        url: './maps/forest/vaskelovo/orekhovo_1985.webp',
        link: './original_maps/forest/vaskelovo/orekhovo_1985_omaps.jpg',
        bounds: [[60.4728093, 30.2607679], [60.4691289, 30.3375006], [60.4426562, 30.2550602]],
        author: 'BYMKV',
        qtty: 300
    },
    {
        name: 'Орехово, Фигурное оз',
        year: 1979,
        url: './maps/forest/vaskelovo/orekhovo_figurnoe_1979.webp',
        link: './original_maps/forest/vaskelovo/orekhovo_figurnoe_1979_omaps.jpg',
        bounds: [[60.4664847, 30.2739429], [60.4637769, 30.3151417], [60.4427832, 30.2701664]],
        author: 'TRSV'
    },
    {
        name: 'Орехово, Фигурное оз',
        year: 1981,
        url: './maps/forest/vaskelovo/orekhovo_figurnoe_1981.webp',
        link: './original_maps/forest/vaskelovo/orekhovo_figurnoe_1981_omaps.jpg',
        bounds: [[60.4590375, 30.2645016], [60.469277, 30.28965], [60.4398616, 30.2940273]],
        author: 'TRSV'
    },
    {
        name: 'Лемболово, юг',
        date: '1995-05-29',
        info: 'Model.',
        url: './maps/forest/vaskelovo/lembolovo_vwc_model_1995.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_vwc_model_1995_omaps.jpg',
        bounds: [[60.4046552, 30.2791357], [60.4027476, 30.3135967], [60.3782783, 30.2733421]],
        author: ['KRCHKN_V','DBRTSV_V'],
        start: 'VWC_1995'
    },
    {
        name: 'Лемболово-Орехово',
        date: '1995-05-31',
        url: './maps/forest/vaskelovo/lembolovo_orekhovo_1995.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_orekhovo_1995_omaps.jpg',
        bounds: [[60.4479482, 30.2355766], [60.4409202, 30.3398609], [60.4233435, 30.2284527]],
        author: ['DBRTSV_V','KUZNTSV_V','CHGRVSKY_Y'],
        start: 'VWC_1995'
    },
    {
        name: 'Лемболово',
        date: '1995-05-30',
        url: './maps/forest/vaskelovo/lembolovo_vwc_1995.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_vwc_1995_omaps.jpg',
        bounds: [[60.4273891, 30.2671623], [60.4228987, 30.34235], [60.3973846, 30.2591372]],
        author: 'CHGRVSKY_Y',
        start: 'VWC_1995'
    },
    {
        name: 'Лемболово',
        date: '1995-06-02',
        info: 'Final.',
        url: './maps/forest/vaskelovo/lembolovo_vwc_1995_06_02.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_vwc_1995_06_02_omaps.webp',
        bounds: [[60.4475672, 30.3158283], [60.4426562, 30.3995132], [60.4112249, 30.3056145]],
        author: 'CHGRVSKY_Y',
        start: 'VWC_1995'
    },
    {
        name: 'Орехово-Лемболово',
        year: 1991,
        url: './maps/forest/vaskelovo/lembolovo_orekhovo_1991.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_orekhovo_1991_omaps.jpg',
        bounds: [[60.455398, 30.2375507], [60.4506151, 30.2960873], [60.4261818, 30.2295685]],
        author: 'BYMKV',
        qtty: 600
    },
    {
        name: 'Силанде',
        year: 1992,
        url: './maps/forest/vaskelovo/silande_1992.webp',
        //link: './original_maps/forest/vaskelovo/Geolog92.pdf',
        link: ['./original_maps/forest/vaskelovo/silande_1992_omaps.jpg','./original_maps/forest/vaskelovo/silande_1991_omaps.jpg','./original_maps/forest/vaskelovo/silande_1995_08_12_h21_omaps.jpg','./original_maps/forest/vaskelovo/silande_1995_08_12_d21_omaps.jpg'],
        bounds: [[60.4278762, 30.2236891], [60.4233435, 30.2862167], [60.3788723, 30.2108574]],
        author: ['DBRTSV_V','LBDKN','KUZNTSV_V'],
    },
    {
        name: 'Силанде',
        date: '2025-06-20',
        url: './maps/forest/vaskelovo/silande_2025.webp',
        link: './original_maps/forest/vaskelovo/silande_2025_omaps.jpg',
        o_gps: 23126,
        bounds: [[60.4042101, 30.2336025], [60.4021117, 30.2620983], [60.384408, 30.2274656]],
        author: ['RDNV_B','RDNV_I','DBRTSV_V'],
        owner:  ['RDNV_B','RDNV_I']
    },
    {
        name: 'Лемболовское',
        year: 1991,
        logo: 'nevsky_azimut.gif',
        url: './maps/forest/vaskelovo/lembolovsky_1991.webp',
        link: './original_maps/forest/vaskelovo/lembolovsky_1991_omaps.jpg',
        bounds: [[60.3784905, 30.2269936], [60.375351, 30.2927399], [60.317811, 30.2103424]],
        author: 'BYMKV'
    },
    {
        name: 'Вьюн',
        year: 1984,
        url: './maps/forest/vaskelovo/vjun_1984.webp',
        link: './original_maps/forest/vaskelovo/vjun_1984_omaps.webp',
        bounds: [[60.3867196, 30.2744579], [60.384005, 30.3081465], [60.3689862, 30.2712822]],
        author: ['LVCHV','SVTKN']
    },
    {
        name: 'Васкелово, Банное оз',
        year: 1995,
        area: 7.5,
        url: './maps/forest/vaskelovo/vaskelovo_bannoe_oz.webp',
        link: './original_maps/forest/vaskelovo/vaskelovo_bannoe_oz_omaps.jpg',
        bounds: [[60.4038074, 30.4238892], [60.4000768, 30.4791641], [60.3644877, 30.413332]],
        author: 'CHGRVSKY_V',
    },
    {
        name: 'Гарболово, Банное оз',
        date: '2006-06-11',
        url: './maps/forest/vaskelovo/vaskelovo_bannoe_2006.webp',
        link: ['./original_maps/forest/vaskelovo/vaskelovo_bannoe_2006_omaps.gif','./original_maps/forest/vaskelovo/vaskelovo_rfar_2006_etap3_omaps.gif','./original_maps/forest/vaskelovo/vaskelovo_rfar_2006_etap5_omaps.gif','./original_maps/forest/vaskelovo/vaskelovo_rfar_2006_roliki_omaps.gif'],
        bounds: [[60.4223267, 30.4384804], [60.4178356, 30.4868889], [60.3592245, 30.4151344]],
        author: 'CHGRVSKY_V',
        owner: 'CHGRVSKY_V',
        start: 'RFAR'
    },
    {
        name: 'Коросары',
        year: 1993,
        url: './maps/forest/vaskelovo/korosary_1993.webp',
        link: './original_maps/forest/vaskelovo/korosary_1993_omaps.jpg',
        bounds: [[60.4271137, 30.4167652], [60.4179203, 30.4872322], [60.4013062, 30.4024315]],
        author: 'DBRTSV_V'
    },
    {
        name: 'Гарболово',
        date: '1991-09-08',
        logo: 'azimut.gif',
        url: './maps/forest/vaskelovo/garbolovo_1991.webp',
        link: ['./original_maps/forest/vaskelovo/garbolovo_1991_omaps.jpg','./original_maps/forest/vaskelovo/garbolovo_na_champ_1991_omaps.jpg'],
        info: 'П-во КСО "Невский азимут".',
        results: './docs/1991/1991_09_08_club_championship_omaps.pdf',
        bounds: [[60.3644028, 30.5025959], [60.3619836, 30.5566692], [60.3371863, 30.4973602]],
        author: 'VSLVSKY',
        planner: 'KRZHNVSKY',
        me: 'H-A'
    },
    {
        name: 'Гарболово',
        year: 1994,
        url: './maps/forest/vaskelovo/garbolovo_1994.webp',
        link: './original_maps/forest/vaskelovo/garbolovo_1994_omaps.jpg',
        bounds: [[60.3890098, 30.4472351], [60.3841747, 30.5155563], [60.3447039, 30.4341888]],
        author: 'CHGRVSKY_Y'
    },
    {
        name: 'Гарболово, Вуолы',
        year: 2008,
        start: 'WEDDING',
        url: './maps/forest/vaskelovo/garbolovo_vuoly_2008.webp',
        link: './original_maps/forest/vaskelovo/garbolovo_vuoly_2008_omaps.gif',
        bounds: [[60.3583331, 30.5025101], [60.35672, 30.5322933], [60.342623, 30.4992485]],
        author: 'VSLVSKY',
    },
    {
        name: 'Гарболово, Вуолы',
        year: 2022,
        start: 'WEDDING',
        url: './maps/forest/vaskelovo/garbolovo_vuoly_2022.webp',
        link: './original_maps/forest/vaskelovo/garbolovo_vuoly_2022_omaps.jpg',
        bounds: [[60.3586727, 30.5023384], [60.3572506, 30.5281305], [60.3414338, 30.4995918]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V'
    },
    {
        name: 'оз Сиркиярви',
        year: 2022,
        url: './maps/forest/vaskelovo/garbolovo_sirkijarvi_2022.webp',
        link: './original_maps/forest/vaskelovo/garbolovo_sirkijarvi_2022_omaps.gif',
        bounds: [[60.4063931, 30.4468918], [60.4036802, 30.4813957], [60.3837929, 30.4403687]],
        author: 'CHGRVSKY_V',
        owner: 'SFSO_SPB'
    },
    {
        name: 'Гарболово',
        year: 2016,
        url: './maps/forest/vaskelovo/garbolovo_2016.webp',
        link: './original_maps/forest/vaskelovo/garbolovo_2016_omaps.jpg',
        bounds: [[60.3739933, 30.4737568], [60.3702381, 30.5130243], [60.3476765, 30.4638863]],
        author: ['KVZN','NSNV','TKMKV_K']
    },
    {
        name: 'Гарболово',
        year: 2014,
        url: './maps/forest/vaskelovo/garbolovo_2014.webp',
        link: './original_maps/forest/vaskelovo/garbolovo_2014_omaps.jpg',
        o_site: '141004_ZK',
        bounds: [[60.364806, 30.4739714], [60.3624717, 30.5087328], [60.3463177, 30.4693794]],
        author: ['CHGRVSKY_Y','FDRV_L'],
        start: 'WEDDING'
    },
    {
        name: 'Матокса',
        year: 2021,
        url: './maps/forest/vaskelovo/garbolovo_sirkkajarvi.webp',
        bounds: [[60.3537482, 30.5514336], [60.3504365, 30.5839634], [60.3214235, 30.5411339]],
        author: 'MKHLV_A',
        owner: 'WN'
    },
    {
        name: 'Гарболово',
        year: 1978,
        url: './maps/forest/vaskelovo/garbolovo_1978.webp',
        link: ['./original_maps/forest/vaskelovo/garbolovo_1978_wedding_omaps.webp','./original_maps/forest/vaskelovo/garbolovo_1978_wedding_course_omaps.jpg','./original_maps/forest/vaskelovo/garbolovo_1978_omaps.jpg','./original_maps/forest/vaskelovo/garbolovo_1978_M_omaps.jpg'],
        info: 'ЗЕНИТ.',
        bounds: [[60.3653366, 30.5007076], [60.3662702, 30.5472279], [60.3355297, 30.5036259]],
        start: 'WEDDING'
    },
    {
        name: 'Гарболово, Змеиное оз',
        year: 1,
        url: './maps/forest/vaskelovo/garbolovo_zmeinoe_retro.webp',
        link: './original_maps/forest/vaskelovo/garbolovo_zmeinoe_retro_omaps.jpg',
        bounds: [[60.3439607, 30.5164146], [60.3349562, 30.5379152], [60.3382907, 30.5067158]],
    },
    {
        name: 'Гарболово, Змеиное оз',
        year: 2022,
        url: './maps/forest/vaskelovo/garbolovo_zmeinoe_2022.webp',
        link: './original_maps/forest/vaskelovo/garbolovo_zmeinoe_2022_omaps.jpg',
        photo: './tracks/garbolovo/pic_1.jpg',
        bounds: [[60.344895, 30.4965448], [60.341179, 30.5377436], [60.3308354, 30.4925108]],
        author: ['MLNKV_L','RYLOV_V'],
        owner: ['SHLKHN_AN','SHEIN']
    },
    {
        name: 'Стеклянный',
        year: 1982,
        url: './maps/forest/vaskelovo/stekljanny_1982.webp',
        link: './original_maps/forest/vaskelovo/stekljanny_1982_omaps.jpg',
        bounds: [[60.379551, 30.2288389], [60.3762844, 30.2840281], [60.350479, 30.2215004]],
        author: ['BYMKV','SMRNV_A','RMNTSV_S','GRV_K']
    },
    {
        name: 'Стеклянный, оз Маролампи',
        date: '1977-10-09',
        start: 'WEDDING',
        url: './maps/forest/vaskelovo/marolampi_1977.webp',
        link: './original_maps/forest/vaskelovo/marolampi_1977_omaps.jpg',
        results: './docs/1977/1977_10_09_wedding_omaps.pdf',
        bounds: [[60.3792541, 30.2523994], [60.3696864, 30.2851868], [60.3649121, 30.2361345]],
    },
    {
        name: 'Васкелово',
        year: 1988,
        date: '1991-09-14',
        url: './maps/forest/vaskelovo/kerro_1988.webp',
        link: ['./original_maps/forest/vaskelovo/kerro_1988_omaps.jpg','./original_maps/forest/vaskelovo/vaskelovo_masters_1991_omaps.jpg'],
        info: 'Соревнования среди спортсменов старшего возраста.',
        results: './docs/1991/1991_09_14_veterans_omaps.pdf',
        bounds: [[60.3490778, 30.2164793], [60.3447252, 30.2857018], [60.3176197, 30.2086258]],
        author: 'BYMKV',
        planner: 'SMNV_M'
    },
    {
        name: 'Васкелово, Киварин руч',
        year: 1983,
        url: './maps/forest/vaskelovo/vaskelovo_kivarin_1983.webp',
        link: './original_maps/forest/vaskelovo/vaskelovo_kivarin_1983_omaps.jpg',
        bounds: [[60.3629598, 30.219655], [60.3578025, 30.2837706], [60.3351899, 30.2132177]],
        author: 'BYMKV'
    },
    {
        name: 'Стеклянный',
        year: 1995,
        url: './maps/forest/vaskelovo/stekljanny_1996.webp',
        link: './original_maps/forest/vaskelovo/stekljanny_1996_omaps.jpg',
        bounds: [[60.3764541, 30.2295685], [60.3710231, 30.2883625], [60.3517103, 30.2189255]],
        author: 'SCHV_V'
    },
    {
        name: 'Стеклянный',
        year: 2021,
        url: './maps/forest/vaskelovo/stekljanny_2021.webp',
        link: './original_maps/forest/vaskelovo/stekljanny_2021_omaps.webp',
        o_gps: 24950,
        bounds: [[60.3777905, 30.2304697], [60.3729749, 30.2878475], [60.3504153, 30.2211142]],
        author: 'MKHLV_A',
        owner: 'WN'
    },
    {
        name: 'Стеклянный',
        year: 2014,
        url: './maps/forest/vaskelovo/stekljanny_2014.webp',
        link: ['./original_maps/forest/vaskelovo/stekljanny_2014_omaps.jpg','./original_maps/forest/vaskelovo/stekljanny_2014_omaps.gif'],
        bounds: [[60.3755631, 30.2331734], [60.373378, 30.254674], [60.3600523, 30.2258348]],
        author: 'MLNKV_L'
    },
    {
        name: 'Орехово-запад',
        year: 2013,
        url: './maps/forest/vaskelovo/orekhovo_west_2011.webp',
        link: ['./original_maps/forest/vaskelovo/orekhovo_west_2011_omaps.jpg','./original_maps/forest/vaskelovo/orekhovo_west_2011_omaps.ocd'],
        bounds: [[60.4773351, 30.2379799], [60.4757067, 30.2626562], [60.4607302, 30.23386]],
        author: 'SHRNN',
        owner: 'SHRNN'
    },
    {
        name: 'Лемболово-Орехово',
        year: 2023,
        excluded: true, // т.к. есть отчасти дублирующие карты от Родионова
        area: 42,
        url: './maps/forest/vaskelovo/lembolovo_orekhovo_2023.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_orekhovo_2023_omaps.webp',
        bounds: [[60.4905072, 30.2636433], [60.4826849, 30.3851795], [60.3887129, 30.2347183]],
        author: ['TKMKV_K','KVZN','NSNV','MLNKV_L','VRBY'],
        owner: 'TOKM'
    },
    {
        name: 'Лемболово',
        year: 2007,
        area: 26,
        url: './maps/forest/vaskelovo/lembolovo_2007.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_2007.pdf',
        bounds: [[60.4519696, 30.2563477], [60.4428679, 30.4004574], [60.3802722, 30.2375507]],
        author: ['CHGRVSKY_Y','DBRTSV_V']
    },
    {
        name: 'Стеклянный, оз Силанде',
        year: 2024,
        url: './maps/forest/vaskelovo/silande_2024.webp',
        link: './original_maps/forest/vaskelovo/silande_2024_omaps.jpg',
        bounds: [[60.4160135, 30.2590084], [60.4142761, 30.2862167], [60.3923599, 30.2498245]],
        publish: 'https://vk.com/album-230167293_309535800',
        author: 'CHGRVSKY_V',
        owner: 'SFSO_SPB'
    },
    {
        name: 'Стеклянный, оз Силанде',
        date: '2009-10-03',
        url: './maps/forest/vaskelovo/silande_2009.webp',
        link: './original_maps/forest/vaskelovo/silande_2009_omaps.webp',
        bounds: [[60.3968334, 30.2559614], [60.3952646, 30.2787066], [60.3781299, 30.2512836]],
        author: 'DBRTSV_V',
        info: '50-летие секции ориентирования ЭКРАН.',
        logo: 'wn_retro.webp',
        o_site: '091003'
    },
    {
        name: 'Орехово, юг',
        date: '2021-06-06',
        url: './maps/forest/vaskelovo/orekhovo_south_2021.webp',
        link: './original_maps/forest/vaskelovo/orekhovo_south_2021_omaps.gif',
        info: 'Чип СПб, лонг.',
        o_site: '210606',
        o_gps: {
            'М': 10104,
            'Ж': 10105,
            'М20': 10106,
            'Ж20': 10107,
            'M18': 10108,
            'Все': 10110,
        },
        publish: 'https://t.me/dlitelnyy/288',
        bounds: [[60.4502553, 30.2370787], [60.4452388, 30.2970314], [60.4249745, 30.2281094]],
        author: 'CHGRVSKY_V',
        owner: 'CHGRVSKY_V'
    },
    {
        name: 'Орехово',
        year: 1991,
        url: './maps/forest/vaskelovo/orekhovo_1991.webp',
        link: './original_maps/forest/vaskelovo/orekhovo_1991_omaps.jpg',
        bounds: [[60.4773986, 30.2387524], [60.4738033, 30.2853584], [60.4460432, 30.2305984]],
        author: 'BYMKV',
        owner: 'WN'
    },
    {
        name: 'Орехово, Ракитинское оз',
        year: 1988,
        url: './maps/forest/vaskelovo/orekhovo_rakitinskoe_old.webp',
        link: './original_maps/forest/vaskelovo/orekhovo_rakitinskoe_1988_omaps.webp',
        bounds: [[60.4673309, 30.299778], [60.4696577, 30.379858], [60.4399463, 30.3024387]],
        author: ['BYMKV','KRVCHNKO_V','SMRNV_A','RMNTSV_S']
    },
    {
        name: 'Орехово, Ракитинское оз',
        year: 1995,
        url: './maps/forest/vaskelovo/orekhovo_rakitinskoe_1995.webp',
        link: './original_maps/forest/vaskelovo/orekhovo_rakitinskoe_1995_omaps.pdf',
        bounds: [[60.4708634, 30.2990484], [60.4655962, 30.3848791], [60.4418623, 30.2901649]],
        author: ['BYMKV','KUZNTSV_S'],
        start: 'CISM_96'
    },
    {
        name: 'Орехово, р.Смородинка',
        year: 1999,
        url: './maps/forest/vaskelovo/orekhovo_smorodinka_1999.webp',
        link: './original_maps/forest/vaskelovo/orekhovo_smorodinka_1999_omaps.jpg',
        bounds: [[60.4720267, 30.1832199], [60.4671617, 30.2517986], [60.4470169, 30.1772118]],
        author: ['KRCHKN_V','PLMNN','GLTV_V','GLTV_Y']
    },
    {
        name: 'Кириясалы, Школьное лесничество',
        year: 2020,
        url: './maps/forest/vaskelovo/kirijasaly_2020.webp',
        link: './original_maps/forest/vaskelovo/kirijasaly_2020_omaps.jpg',
        bounds: [[60.4661674, 30.1575136], [60.4638403, 30.185709], [60.4586778, 30.1544452]],
        author: 'DRBSHV',
        owner: 'KP31'
    },
    {
        name: 'Орехово, т/б Журавушка',
        year: 2009,
        url: './maps/forest/vaskelovo/orekhovo_zhuravushka_2009.webp',
        link: './original_maps/forest/vaskelovo/orekhovo_zhuravushka_2009_omaps.jpg',
        photo: './tracks/orekhovo/pic_2.jpg',
        bounds: [[60.4864695, 30.2960443], [60.4845244, 30.3194761], [60.4596088, 30.2869034]],
        author: ['MKHLV_A','SLBDNK']
    },
/*
    {
        name: 'Орехово, оз Ветренное',
        year: 2002,
        url: './maps/forest/vaskelovo/orekhovo_vetrennoe_2002.webp',
        bounds: [[60.504498, 30.2888775], [60.4992152, 30.3541946], [60.472492, 30.2791786]],
        author: 'SHRNN',
        owner: 'SHRNN'
    },
*/
    {
        name: 'Орехово, оз Ветренное', // TODO превью не соотвествует джипегу
        year: 2004,
        startYear: 2005,
        start: 'NA',
        page: 'spb',
        o_site: '050610',
        url: './maps/forest/vaskelovo/orekhovo_vetrennoe_2004.webp',
        link: ['./original_maps/forest/vaskelovo/orekhovo_vetrennoe_2004_omaps.jpg','./original_maps/forest/vaskelovo/orekhovo_2002_09_08_omaps.webp','./original_maps/forest/vaskelovo/orekhovo_vetrennoe_2004_omaps.ocd'],
        bounds: [[60.5044769, 30.2892208], [60.4985389, 30.352993], [60.4727881, 30.2786207]],
        author: ['VSLVSKY','DRBSHV','SHRNN'],
    },
    {
        name: 'Орехово, оз Бол.Борково',
        year: 2004,
        startYear: 2005,
        start: 'NA',
        page: 'spb',
        o_site: '050610',
        url: './maps/forest/vaskelovo/orekhovo_borkovo_2004.webp',
        link: './original_maps/forest/vaskelovo/orekhovo_borkovo_2004_omaps.jpg',
        bounds: [[60.4902958, 30.2851009], [60.4876111, 30.3216648], [60.4631845, 30.2782774]],
        author: ['VSLVSKY','DRBSHV','SHRNN']
    },
    {
        name: 'Орехово, оз Фигурное',
        year: 2001,
        startYear: 2002,
        start: 'NA',
        page: 'spb',
        url: './maps/forest/vaskelovo/orekhovo_figurnoe_2001.webp',
        link: './original_maps/forest/vaskelovo/orekhovo_figurnoe_2001_omaps.jpg',
        bounds: [[60.4706307, 30.2596092], [60.4647923, 30.3325653], [60.4451118, 30.2557468]],
        author: ['VSLVSKY','BRDR']
    },
    {
        name: 'Лемболово',
        year: 2002,
        logo: 'na.gif',
        url: './maps/forest/vaskelovo/lembolovo_2002.webp',
        link: ['./original_maps/forest/vaskelovo/lembolovo_2002_omaps.jpg','./original_maps/forest/vaskelovo/lembolovo_2002_2_omaps.jpg'],
        bounds: [[60.4480752, 30.284586], [60.4428255, 30.369215], [60.397745, 30.2715397]],
        author: ['CHGRVSKY_Y','DBRTSV_V','ILVS','FDRV_L','DRBSHV']
    },
    {
        name: 'Орехово-Лемболово',
        year: 2000,
        url: './maps/forest/vaskelovo/orekhovo-lembolovo_2000.webp',
        link: './original_maps/forest/vaskelovo/orekhovo-lembolovo_2000_omaps.jpg',
        bounds: [[60.4701654, 30.2948856], [60.4426985, 30.3643227], [60.4499378, 30.2661324]],
        author: ['VSLVSKY','BRDR','CHGRVSKY_V']
    },
    {
        name: 'Орехово, оз Ракитинское',
        year: 2004,
        start: 'NA',
        page: 'spb',
        url: './maps/forest/vaskelovo/orekhovo_rakitinskoe_2004.webp',
        link: ['./original_maps/forest/vaskelovo/orekhovo_rakitinskoe_2004_omaps.jpg','./original_maps/forest/vaskelovo/orekhovo_rakitinskoe_2004_na_omaps.webp','./original_maps/forest/vaskelovo/orekhovo_2005_omaps.jpg','./original_maps/forest/vaskelovo/orekhovo_2002_omaps.webp'],
        bounds: [[60.4751992, 30.2693939], [60.4660616, 30.3682709], [60.4444344, 30.2640724]],
        author: ['VSLVSKY','BRDR','DRBSHV']
    },
    {
        name: 'Орехово, оз Ветренное',
        year: 2022,
        area: 5.6,
        url: './maps/forest/vaskelovo/orekhovo_vetrennoe_2022.webp',
        link: './original_maps/forest/vaskelovo/orekhovo_vetrennoe_2022_omaps.jpg',
        bounds: [[60.5147654, 30.293684], [60.5077941, 30.3614044], [60.483277, 30.2801228]],
        author: ['STLRV','DBRTSV_V','KUZNTSV_A'],
        owner: 'SHEIN'
    },
    {
        name: 'Пески',
        year: 2001,
        url: './maps/forest/vaskelovo/peski_2001.webp',
        link: './original_maps/forest/vaskelovo/peski_2001_omaps.jpg',
        bounds: [[60.486406, 30.3979683], [60.4823043, 30.4621696], [60.4596512, 30.3908443]],
        author: ['SHRNN','KVZN','NSNV','TKMKV_K','VRBY'],
        start: 'MMS'
    },
    {
        name: 'Пески',
        year: 2026,
        url: './maps/forest/vaskelovo/peski_2026.webp',
        link: './original_maps/forest/vaskelovo/peski_2026_omaps.webp',
        bounds: [[60.4944176, 30.413847], [60.4888372, 30.4626846], [60.4651097, 30.4009724]],
        calendar: 'SPB_20260626_1',
        author: ['BRGNTS','VSLV_S','VRBY'],
        owner: 'SFSO_LO',
        publish: 'https://vk.com/album-142737358_311427986',
        start: 'MMS'
    },
    {
        name: 'СНТ Топограф',
        year: 2017,
        url: './maps/forest/vaskelovo/topograph_2017.webp',
        bounds: [[60.3002103, 30.2487946], [60.2974248, 30.2823114], [60.2863016, 30.2437305]],
        author: ['MKHLV_A','IVNV_P'],
        owner: 'WN'
    },
    {
        name: 'Лемболово',
        year: 2024,
        area: 17,
        url: './maps/forest/vaskelovo/lembolovo_2024.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_2024_omaps.jpg',
        bounds: [[60.4454928, 30.2595234], [60.4368974, 30.3699875], [60.3885857, 30.239954]],
        publish: 'https://t.me/dlitelnyy/94',
        author: ['TKMKV_K','KVZN','NSNV','MLNKV_L','VRBY','RDNV_I'],
        owner: 'RDNV_I'
    },
    {
        name: 'Лемболово',
        year: 1983,
        start: 'WN',
        page: 'spb',
        url: './maps/forest/vaskelovo/lembolovo_1983.webp',
        link: ['./original_maps/forest/vaskelovo/lembolovo_1983_omaps.jpg','./original_maps/forest/vaskelovo/lembolovo_wn_1980_omaps.jpg'],
        bounds: [[60.4449001, 30.2569485], [60.4407508, 30.3384876], [60.4157381, 30.2517986]],
        author: ['KAZNTSVA_O','KAZNTSV_S']
    },
    {
        name: 'Лемболово',
        year: 1982,
        url: './maps/forest/vaskelovo/lembolovo_1982.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_1982_omaps.jpg',
        bounds: [[60.4164373, 30.2760029], [60.4136828, 30.3394318], [60.3779389, 30.266304]],
        author: ['LVCHV','SVTKN']
    },
    {
        name: 'Лемболово',
        year: 1990,
        excluded: true,
        url: './maps/forest/vaskelovo/lembolovo_1990.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_1990_omaps.webp',
        bounds: [[60.4170305, 30.2772045], [60.4130895, 30.3376293], [60.3782359, 30.265789]],
        author: ['LVCHV','SVTKN']
    },
    {
        name: 'Лемболово',
        year: 1988,
        url: './maps/forest/vaskelovo/lembolovo_1988.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_1988_omaps.webp',
        bounds: [[60.4073256, 30.2586651], [60.4031662, 30.3132427], [60.3705988, 30.2491379]],
        author: ['LVCHV','SVTKN']
    },
    {
        name: 'Лемболово',
        year: 1987,
        url: './maps/forest/vaskelovo/lembolovo_1987.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_1987_omaps.webp',
        bounds: [[60.4213946, 30.3335953], [60.41845, 30.3721762], [60.4034047, 30.3293896]],
        author: ['FDTV_A','KNSTNTNV_D']
    },
    {
        name: 'Лемболово',
        year: 1978,
        url: './maps/forest/vaskelovo/lembolovo_1978_zenit.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_1978_zenit_omaps.webp',
        info: 'Спартакиада ЗЕНИТ.',
        bounds: [[60.419022, 30.2944565], [60.4180686, 30.326128], [60.4029172, 30.2966022]],
        author: ['KRVCHNKO_V','SRGV','TRNTV_V'],
        logo: 'zenit_1978.webp'
    },
    {
        name: 'Лемболово, ДОЛ Пионер',
        year: 2019,
        url: './maps/forest/vaskelovo/lembolovo_pioner_2019.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_pioner_2019_omaps.jpg',
        bounds: [[60.4038604, 30.3202808], [60.4041359, 30.3354406], [60.399001, 30.3202593]],
        author: 'MKHLV_A_M',
        owner: 'PNKV_DNL'
    },
    {
        name: 'Орехово',
        year: 2024,
        area: 18.5,
        url: './maps/forest/vaskelovo/orekhovo_2024.webp',
        link: './original_maps/forest/vaskelovo/orekhovo_2024_omaps.jpg',
        photo: './tracks/orekhovo/pic_1.jpg',
        bounds: [[60.491395, 30.2700806], [60.4788788, 30.3907585], [60.4437146, 30.2497387]],
        author: ['TKMKV_K','KVZN','NSNV','MLNKV_L','VRBY','RDNV_I'],
        owner: 'RDNV_I'
    },
    {
        name: 'Орехово, оз Бол.Борково',
        year: 2021, // ??
        url: './maps/forest/vaskelovo/orekhovo_borkovo_2021.webp',
        link: ['./original_maps/forest/vaskelovo/orekhovo_borkovo_2021_omaps.gif','./original_maps/forest/vaskelovo/orekhovo_borkovo_2021_omaps.ocd'],
        bounds: [[60.4746493, 30.2623558], [60.4710538, 30.3019667], [60.4616189, 30.2581072]],
        author: ['SHRNN','VSLVSKY','BRDR'],
        owner: 'SHRNN'
    },
    {
        name: 'Орехово, оз Бол.Борково',
        year: 2024,
        url: './maps/forest/vaskelovo/orekhovo_borkovo_2024.webp',
        link: ['./original_maps/forest/vaskelovo/orekhovo_borkovo_2024_1_omaps.gif','./original_maps/forest/vaskelovo/orekhovo_borkovo_2024_2_omaps.gif'],
        publish: 'https://vk.com/album-230167293_313624527',
        bounds: [[60.4738456, 30.2619696], [60.469552, 30.3074598], [60.4614496, 30.2568626]],
        author: 'CHGRVSKY_Y',
        owner: 'KUZMOLOVO'
    },
    {
        name: 'Орехово, Фигурное оз',
        year: 2025,
        info: 'Эстафета Змей Горыныч.',
        o_site: '250510_zg',
        url: './maps/forest/vaskelovo/orekhovo_figurnoe_2025.webp',
        link: './original_maps/forest/vaskelovo/orekhovo_figurnoe_2025_omaps.gif',
        bounds: [[60.4610688, 30.2786207], [60.4561174, 30.3299046], [60.4431854, 30.2719688]],
        o_gps: 22515,
        publish: 'https://vk.com/album-230167293_313624527',
        author: 'CHGRVSKY_V',
        owner: ['CHGRVSKY_V','KUZM_CHGRVSKY']
    },
    {
        name: 'Васкелово, тб "Онега"',
        year: 2006,
        url: './maps/forest/vaskelovo/onega_2006.webp',
        link: './original_maps/forest/vaskelovo/onega_2006_omaps.jpg',
        bounds: [[60.3804949, 30.3405476], [60.3801449, 30.3499031], [60.3770374, 30.340097]],
        author: ['MLVA_M','RYLOV_V']
    },
];