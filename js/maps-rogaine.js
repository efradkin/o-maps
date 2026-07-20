// types can be ROGAINE, SPRINT, CITY, RELIEF
let rogaineMaps = [
    // --- рогейн ---
    {
        name: 'Пухтолова гора',
        url: './maps/rogaine/pukhtolova_gora_tri_o_tlon.webp',
        link: './original_maps/rogaine/pukhtolova_gora_tri_o_tlon_omaps.jpg',
        bounds: [[60.2599566, 29.6495247], [60.2559541, 29.6998215], [60.2286471, 29.6393538]],
        start: 'TRI_O_TLON',
        type: ['ROGAINE']
    },
    {
        name: 'Санкт-Петербург, юг',
        year: 2023,
        url: './maps/rogaine/spb_perekati_piter_2023.webp',
        link: './original_maps/rogaine/spb_perekati_piter_2023_omaps.gif',
        bounds: [[59.9434053, 30.2081108], [59.9476824, 30.39608], [59.8146196, 30.2194405]],
        info: '<a href="https://orientband.ru/tproduct/549661597-580137401641-perekati-piter">Перекати Питер</a>.',
        owner: 'OPEN_BAND',
        type: ['ROGAINE']
    },
    {
        name: 'Санкт-Петербург, север',
        year: 2019,
        url: './maps/rogaine/spb_severnaya_stolitsa_2019.webp',
        info: 'Северная столица.',
        bounds: [[60.0389603, 30.1845932], [60.0387031, 30.3533363], [59.9171718, 30.1839066]],
        owner: 'GOLDMRSHRT',
        start: 'ZM',
        type: ['ROGAINE']
    },
    {
        name: 'Чудово',
        year: 2022,
        url: './maps/rogaine/chudovo_2022.webp',
        link: './original_maps/rogaine/chudovo_2022_omaps.png',
        bounds: [[59.1252698, 31.6518259], [59.1252918, 31.6801071], [59.1141466, 31.6521263]],
        owner: 'SHBN',
        type: ['ROGAINE']
    },
    {
        name: 'Зеленогорск - ГК',
        year: 2009,
        url: './maps/rogaine/zelenogorsk_gk_2009.webp',
        link: './original_maps/rogaine/zelenogorsk_gk_2009_omaps.jpg',
        bounds: [[60.3047602, 29.6795654], [60.2897048, 29.8711395], [60.2028101, 29.6474648]],
        owner: 'GORNY_CROSS',
        start: 'GORNY_CROSS',
        type: ['ROGAINE']
    },
    {
        name: 'Молодёжное - ГК',
        year: 2024,
        url: './maps/rogaine/molodezhnoe_gk_2024.webp',
        link: './original_maps/rogaine/molodezhnoe_gk_2024_omaps.jpg',
        bounds: [[60.2731956, 29.4824123], [60.2732381, 29.6277237], [60.1903961, 29.482069]],
        o_gps: 20578,
        owner: 'GORNY_CROSS',
        start: 'GORNY_CROSS',
        type: ['ROGAINE']
    },
    {
        name: 'Зеленогорск, Прибой',
        year: 2011,
        url: './maps/winter/zelenogorsk_schuchje_winter_2011.webp',
        link: './original_maps/rogaine/zelenogorsk_schuchje_winter_2011_omaps.jpg',
        photo: './tracks/zelenogorsk/pic_2.jpg',
        bounds: [[60.2466271, 29.7188759], [60.2370844, 29.8472786], [60.1929134, 29.716301]],
        type: ['WINTER','ROGAINE']
    },
    {
        name: 'Зеленогорск - Ильичёво',
        year: 2024,
        url: './maps/rogaine/zelenogorsk_north_wn_2024.webp',
        bounds: [[60.2685562, 29.7861671], [60.2602546, 29.8600674], [60.2166265, 29.7610188]],
        owner: 'WN',
        type: ['ROGAINE']
    },
    {
        name: 'Назия',
        date: '2010-11-05',
        info: 'Чемпионат СПб по рогейну',
        o_site: '10110506',
        url: './maps/rogaine/nazia_rogaine_2010.webp',
        link: './original_maps/rogaine/nazia_rogaine_2010_omaps.jpg',
        bounds: [[59.8585662, 31.5194321], [59.8439094, 31.7607021], [59.6884534, 31.4778042]],
        logo: 'rogaine_spb.gif',
        type: ['ROGAINE']
    },
    {
        name: 'Шапки',
        date: '2026-03-08',
        info: 'Ski Adventure.',
        url: './maps/rogaine/shapki_ski_adventure_2026.webp',
        link: './original_maps/rogaine/shapki_ski_adventure_2026_omaps.gif',
        o_gps: 24374,
        bounds: [[59.6345647, 31.0883904], [59.6463644, 31.2029743], [59.5847394, 31.1049557]],
        owner: 'NKLSK',
        type: ['ROGAINE']
    },
    {
        name: 'Шапки',
        year: 2019,
        info: 'КЛО 2019, 2024.',
        url: './maps/rogaine/shapki_KLO_2024.webp',
        link: ['./original_maps/rogaine/shapki_KLO_2019_omaps.webp','./original_maps/rogaine/shapki_KLO_2024_omaps.gif'],
        bounds: [[59.6296181, 31.1240101], [59.6245839, 31.2547302], [59.5686797, 31.1125088]],
        type: ['ROGAINE']
    },
    {
        name: 'Кузнечное',
        date: '2009-05-30',
        info: 'VI Чемпионат России по рогейну.',
        o_site: '090530_rog',
        url: './maps/rogaine/kuznechnoe_2009.webp',
        link: ['./original_maps/rogaine/kuznechnoe_2009_omaps.jpg','./original_maps/rogaine/kuznechnoe_rogaine_gk_2015_omaps.webp'],
        bounds: [[61.195386, 29.6627426], [61.1948898, 29.9140549], [61.0483154, 29.662056]],
        owner: 'GORNY_CROSS',
        type: ['ROGAINE'],
        start: ['GORNY_CROSS','RUSSIA_ROGAINE_CHAMP'],
        region: 'SPB'
    },
    {
        name: 'Кузнечное',
        year: 2024,
        url: './maps/rogaine/kuznechnoe_hard_2024.webp',
        bounds: [[61.2453862, 29.6217155], [61.1960477, 30.0405693], [61.0667574, 29.5384598]],
        info: '<a href="https://hardadventure.ru/rock2024">Hard Rogaine</a>.',
        owner: 'HARD',
        type: ['ROGAINE']
    },
    {
        name: 'Воробьёво оз',
        year: 2013,
        url: './maps/rogaine/vorobjevo_bn_2013.webp',
        bounds: [[60.9398556, 30.2599525], [60.9335181, 30.3756523], [60.8998912, 30.2505112]],
        owner: 'WN',
        type: ['ROGAINE'],
        zindex: 3
    },
    {
        name: 'Мичуринское',
        year: 2014,
        url: './maps/rogaine/michurinskoe_redfox_2014.webp',
        bounds: [[60.6423071, 29.8532867], [60.6286705, 30.0209999], [60.5747411, 29.8335457]],
        owner: ['RFAR','WN'],
        type: ['ROGAINE']
    },
    {
        name: 'Мичуринское',
        date: '2008-07-12',
        major: true,
        url: './maps/rogaine/michurinskoe_erc_2008.webp',
        link: './original_maps/rogaine/michurinskoe_erc_2008_omaps.jpg', // link: 'https://web.archive.org/web/20160206161750/http://rogaine-spb.ru/erc08/erc08map.jpg',
        bounds: [[60.6322906, 29.7506332], [60.6322906, 30.0211716], [60.4812471, 29.7499466]],
        info: '<a href="https://rogaine-spb.narod.ru/erc08/erc08-3rus.html">Чемпионат Европы по рогейну</a>.',
        type: ['ROGAINE'],
        region: 'SPB'
    },
    {
        name: 'Лосево',
        date: '2007-08-25',
        url: './maps/rogaine/losevo_rrc_2007.webp',
        link: './original_maps/rogaine/losevo_rrc_2007_omaps.jpg', // https://web.archive.org/web/20161220160945/http://www.rogaine-spb.ru/race0807/map.gif
        bounds: [[60.8032361, 29.6112442], [60.9023957, 29.8577499], [60.6356579, 29.9040985]],
        info: '<a href="https://www.rogaine-spb.narod.ru/race0807/info.html">IV Чемпионат России по рогейну</a>.',
        author: ['ANTPV','KMN_I','OZRV'],
        type: ['ROGAINE'],
        start: 'RUSSIA_ROGAINE_CHAMP',
        region: 'SPB'
    },
    {
        name: 'Лосево',
        year: 2024,
        info: 'КЛО',
        url: './maps/rogaine/losevo_2024.webp',
        link: './original_maps/rogaine/losevo_2024_omaps.jpg',
        bounds: [[60.7028445, 29.8855591], [60.6972999, 29.9887276], [60.6722117, 29.8792076]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        type: ['ROGAINE']
    },
    {
        name: 'Лемболово-Мичуринское',
        date: '2012-03-09',
        start: ['100x24','RUSSIA_ROGAINE_CHAMP'],
        url: './maps/rogaine/lembolovo_michurinskoe_rrc_2012.webp',
        link: 'https://100x24.ru/2012/maps/100x24_2012.gif',
        bounds: [[60.5557601, 29.8725128], [60.5324615, 30.3603745], [60.3899428, 29.8433304]],
        info: 'Чемпионат России по рогейну на лыжах. <a href="https://100x24.ru/2012/docs/100x24_nat.htm">Интервью</a>.',
        o_site: '12030910',
        author: ['APTNKV','FRSHLV','BKTV','DBRTSV_V'],
        type: ['ROGAINE','WINTER'],
        region: 'SPB'
    },
    {
        name: 'Запорожское',
        date: '2016-07-02',
        url: './maps/rogaine/zaporozhskoe_2016.webp',
        link: 'https://www.multsport.ru/images/rogRus16/map.jpg',
        bounds: [[60.6792316, 30.1554108], [60.6888133, 30.6793213], [60.431646, 30.1732635]],
        info: '<a href="https://www.multsport.ru/starts/rus-run-rogaine-2016/">XIII Чемпионат России по рогейну</a>.',
        author: 'RYLOV_V',
        owner: 'MLTSPRT',
        type: ['ROGAINE'],
        start: 'RUSSIA_ROGAINE_CHAMP',
        region: 'SPB'
    },
/*
    {
        name: 'Лемболово-Орехово',
        date: '2024-02-24',
        url: './maps/rogaine/lembolovo_orekhovo_gk_2024.webp',
        link: './original_maps/rogaine/lembolovo_orekhovo_gk_2024_omaps.jpeg',
        o_gps: 18461,
        bounds: [[60.4814163, 30.2578926], [60.4738879, 30.3998566], [60.4058844, 30.2420998]],
        owner: 'GORNY_CROSS',
        start: 'GORNY_CROSS',
        type: ['ROGAINE'] // ,'WINTER'
    },
*/
    {
        name: 'Лемболово-Орехово-Пески',
        year: 2026,
        calendar: 'SPB_20260704_2',
        url: './maps/rogaine/lembolovo_orekhovo_peski_gk_2026.webp',
        link: ['./original_maps/rogaine/lembolovo_orekhovo_peski_gk_2026_omaps.webp','./original_maps/rogaine/lembolovo_peski_gk_2026_omaps.webp','./original_maps/rogaine/orekhovo_gk_2024_omaps.webp'],
        o_gps: {
            '2026-07':25541,
            '2024-11':21084,
            '2024-07':20024
        },
        bounds: [[60.5090617, 30.267334], [60.4946924, 30.4896355], [60.4139371, 30.2425289]],
        owner: 'GORNY_CROSS',
        start: 'GORNY_CROSS',
        type: ['ROGAINE']
    },
    {
        name: 'Первомайское',
        date: '2012-07-21',
        url: './maps/rogaine/pervomajskoe_rrc_2012.webp',
        link: 'https://rrc2012.rogaining.ru/download/9rrc_map.jpg',
        bounds: [[60.4770179, 29.5848083], [60.4499378, 29.9861526], [60.3082466, 29.5357132]],
        info: '<a href="https://rrc2012.rogaining.ru/">IX Чемпионат России по рогейну</a>.',
        author: 'RYLOV_V',
        type: ['ROGAINE'],
        start: 'RUSSIA_ROGAINE_CHAMP',
        region: 'SPB'
    },
    {
        name: 'Первомайское',
        year: 2015,
        url: './maps/rogaine/pervomajskoe_2015.webp',
        bounds: [[60.440158, 29.6357918], [60.4333824, 29.7442818], [60.4001616, 29.6249771]],
        info: 'RedFox мультирогейн.',
        owner: 'WN',
        type: ['ROGAINE']
    },
    {
        name: 'Первомайское',
        year: 2023,
        url: './maps/rogaine/pervomajskoe_2023.webp',
        link: './original_maps/rogaine/pervomajskoe_2023_omaps.jpg',
        bounds: [[60.4404968, 29.6665192], [60.4342718, 29.7616196], [60.3866347, 29.6528721]],
        info: 'Финал КЛО.',
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        type: ['ROGAINE']
    },
    {
        name: 'Зеркальный',
        year: 2022,
        major: true,
        logo: 'rrc_2022.webp',
        url: './maps/rogaine/zerkalny_rrc_2022.webp',
        link: './original_maps/rogaine/zerkalny_rrc_2022_omaps.gif',
        bounds: [[60.3420709, 28.8645172], [60.3751813, 29.3345261], [60.138086, 28.9242554]],
        author: 'RYLOV_V',
        info: 'II Кубок России по рогейну.',
        o_gps: {
            'Бег 24':13197,
            'Бег 8':13201,
            'Вело 16':13200,
            'Вело 6':13202
        },
        type: ['ROGAINE'],
        region: 'SPB'
    },
    {
        name: 'Гарболово',
        year: 2011,
        url: './maps/rogaine/garbolovo_strekozy_2011.webp',
        link: './original_maps/rogaine/garbolovo_strekozy_2011_omaps.jpg',
        bounds: [[60.4033411, 30.4367638], [60.3980842, 30.5216503], [60.3473793, 30.4195976]],
        info: 'Рогейн от Стрекозаек. По материалам В.Л. Чегаровского.',
        owner: 'STRKZK',
        type: ['ROGAINE']
    },
    {
        name: 'Гарболово',
        year: 2022,
        url: './maps/rogaine/garbolovo_2022.webp',
        // link: './original_maps/rogaine/garbolovo_2022_omaps.jpg',
        bounds: [[60.3915542, 30.4400253], [60.3777268, 30.5541801], [60.3520924, 30.418911]],
        info: 'Финал КЛО.',
        author: 'RYLOV_V',
        owner: 'MLTSPRT',
        type: ['ROGAINE']
    },
    {
        name: 'Вуокса',
        date: '2019-05-18',
        url: './maps/rogaine/vuoksa_rogaine_2019.webp',
        link: 'https://www.multsport.ru/images/rogCanoe19/16.jpg',
        bounds: [[61.0690827, 29.8694229], [61.0640167, 30.116787], [60.9105755, 29.8550892]],
        info: '<a href="https://rrc2012.rogaining.ru/">Чемпионат России по рогейну на байдарках.</a>.',
        owner: 'MLTSPRT',
        type: ['ROGAINE'],
        start: 'RUSSIA_ROGAINE_CHAMP',
        region: 'SPB'
    },
    {
        name: 'Луга, оз Омчино',
        year: 2023,
        info: 'Горный Кросс.',
        url: './maps/rogaine/luga_omchino_gk_2023.webp',
        link: './original_maps/rogaine/luga_omchino_gk_2023_omaps.gif',
        o_gps: 15856,
        bounds: [[58.728926, 29.7272873], [58.7165379, 29.844532], [58.6855037, 29.7101212]],
        owner: 'GORNY_CROSS',
        start: 'GORNY_CROSS',
        type: ['ROGAINE']
    },
    {
        name: 'Шалово',
        year: 2023,
        info: 'Лужский Меридиан.',
        url: './maps/rogaine/luga_shalovo_lm_2023.webp',
        link: './original_maps/rogaine/luga_shalovo_lm_2023_omaps.gif',
        o_gps: 15769,
        bounds: [[58.8255176, 29.8805809], [58.8141417, 30.0136185], [58.7757649, 29.8647022]],
        owner: 'LM',
        type: ['ROGAINE']
    },
    {
        name: 'Шалово',
        year: 2023,
        info: 'Рогейн на Лужских берегах.',
        url: './maps/rogaine/shalovo_luzhsky_2023.webp',
        link: './original_maps/rogaine/shalovo_luzhsky_2023_omaps.gif',
        o_gps: 17419,
        bounds: [[58.8210299, 29.8914814], [58.8091191, 30.0322437], [58.7645952, 29.872427]],
        owner: 'SHBN',
        type: ['ROGAINE']
    },
    {
        name: 'оз Омчино',
        year: 2022,
        info: 'Лужский рогейн.',
        url: './maps/rogaine/omchino_luzhsky_2022.webp',
        link: './original_maps/rogaine/omchino_luzhsky_2022_omaps.jpeg',
        o_gps: 13567,
        bounds: [[58.7395727, 29.677248], [58.7365884, 29.8343182], [58.6815779, 29.672699]],
        owner: 'SHBN',
        type: ['ROGAINE','WINTER']
    },
    {
        name: 'Городок',
        year: 2023,
        info: 'Лужский Меридиан-67.',
        url: './maps/rogaine/gorodok_lm_2023.webp',
        link: './original_maps/rogaine/gorodok_lm_2023_omaps.gif',
        o_gps: 16100,
        bounds: [[58.7393946, 29.8034191], [58.7309754, 29.8911381], [58.6757329, 29.7808456]],
        owner: 'LM',
        type: ['ROGAINE']
    },
    {
        name: 'оз Толони',
        year: 2025,
        info: 'Лужский приключенческий рогейн, "Винни-Пух…ing"',
        url: './maps/rogaine/toloni_2025.webp',
        link: './original_maps/rogaine/toloni_2025_rogaine_omaps.gif',
        o_gps: 23164,
        bounds: [[58.7397954, 29.7494316], [58.7252724, 29.8895073], [58.6548883, 29.7207642]],
        owner: 'SHBN',
        type: ['ROGAINE']
    },
    {
        name: 'Яппиля',
        year: 2011,
        url: './maps/rogaine/jappilya_2011.webp',
        link: './original_maps/rogaine/jappilya_2011_omaps.jpg',
        bounds: [[60.2811109, 28.9985847], [60.2835787, 29.2850876], [60.1804529, 29.0030479]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        type: ['ROGAINE']
    },
    {
        name: 'Рогейн на холмах Яппиля',
        year: 2024,
        url: './maps/rogaine/jappilya_2024.webp',
        link: './original_maps/rogaine/jappilya_2024_rogaine_omaps.gif',
        o_gps: 19280,
        bounds: [[60.2329512, 29.1080189], [60.2286471, 29.1819191], [60.1852755, 29.0956593]],
        owner: 'SHBN',
        type: ['ROGAINE']
    },
    {
        name: 'Кировские дачи',
        url: './maps/rogaine/kirovskie_dachi.webp',
        bounds: [[60.7938142, 28.7064171], [60.7879921, 28.7995434], [60.7457821, 28.6924267]],
        owner: 'TOKM',
        type: ['ROGAINE']
    },
    {
        name: 'Черкасово',
        date: '2008-02-16',
        start: '100x24',
        info: '<a href="https://www.o-site.spb.ru/race.php?id=080216_r">Инфо.</a>',
        author: 'APTNKV',
        url: './maps/rogaine/gavrilovo_2008.webp',
        link: './original_maps/rogaine/gavrilovo_2008_omaps.gif',
        bounds: [[60.6662834, 28.6485672], [60.6609849, 29.0040779], [60.5364302, 28.6423874]],
        type: ['ROGAINE','WINTER']
    },
    {
        name: 'Вещево',
        date: '2009-02-21',
        start: '100x24',
        o_site: '090221',
        author: 'APTNKV',
        url: './maps/rogaine/veschevo_2009.webp',
        link: './original_maps/rogaine/veschevo_2009_omaps.gif',
        bounds: [[60.7646095, 29.1305923], [60.7606688, 29.3621635], [60.6043291, 29.119606]],
        type: ['ROGAINE','WINTER']
    },
    {
        name: 'Былинный рогейн',
        year: 2023,
        url: './maps/rogaine/bylinny_2023.webp',
        bounds: [[60.5471517, 29.8579216], [60.5280701, 30.0623703], [60.456456, 29.823761]],
        owner: 'WN',
        type: ['ROGAINE']
    },
    {
        name: 'Поляны',
        year: 2005,
        info: 'Ref Fox Adventure Race 2004.',
        url: './maps/rogaine/polyany_2005.webp',
        link: './original_maps/rogaine/polyany_2005_omaps.jpg',
        bounds: [[60.3108186, 29.2855597], [60.3104573, 29.3270159], [60.2870673, 29.2820406]],
        author: 'MKHLV_B',
        type: ['ROGAINE']
    },
    {
        name: 'Медное-Пасторское',
        year: 2024,
        info: 'КЛО',
        url: './maps/rogaine/mednoe_2024.webp',
        link: './original_maps/rogaine/mednoe_2024_omaps.jpg',
        bounds: [[60.2514825, 29.9868393], [60.2355931, 30.1762676], [60.2101881, 29.9719906]],
        author: ['RYLOV_V','CHGRVSKY_Y','CHGRVSKY_V'],
        owner: 'RYLOV_V',
        type: ['ROGAINE']
    },
    {
        name: 'Колтуши',
        year: 2018,
        info: 'КЛО',
        url: './maps/rogaine/koltushi_2018.webp',
        link: './original_maps/rogaine/koltushi_2018_omaps.jpg',
        bounds: [[59.9826738, 30.6169224], [59.978165, 30.6746006], [59.9342475, 30.6027603]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        type: ['ROGAINE']
    },
    {
        name: 'Колтуши',
        date: '2014-06-08',
        start: '100x24',
        o_site: '140608',
        url: './maps/rogaine/koltushi_2014.webp',
        link: './original_maps/rogaine/koltushi_100x24_2014.gif',
        bounds: [[60.0006598, 30.6087685], [59.9920329, 30.7263565], [59.9494232, 30.5947781]],
        author: ['APTNKV','FRSHLV','GRV_S'],
        type: ['ROGAINE','VELO']
    },
    {
        name: 'Воейково',
        year: 2014,
        info: 'Чемпионат СЗФО.',
        url: './maps/rogaine/voejkovo_2014.webp',
        link: './original_maps/rogaine/voejkovo_2014_omaps.jpg',
        bounds: [[60.0251549, 30.656147], [60.0249834, 30.82798], [59.8959118, 30.6554604]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        type: ['ROGAINE']
    },
    {
        name: 'Всеволожск',
        year: 2015,
        info: 'Кубок Всеволожского р-на.',
        url: './maps/rogaine/vsevolozhsk_2015.webp',
        link: './original_maps/rogaine/vsevolozhsk_2015_omaps.jpg',
        bounds: [[60.0338161, 30.5636215], [60.0341591, 30.6666183], [59.9682435, 30.5634499]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        type: ['ROGAINE']
    },
    {
        name: 'Мельничный Ручей',
        year: 2016,
        info: 'Кубок Всеволожского р-на.',
        url: './maps/rogaine/melnichny_ruchej_2016.webp',
        link: './original_maps/rogaine/melnichny_ruchej_2016_omaps.jpg',
        bounds: [[60.0389603, 30.6360626], [60.0388745, 30.7165718], [59.9660097, 30.635891]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        type: ['ROGAINE']
    },
    {
        name: 'Будогощь',
        year: 2016,
        url: './maps/rogaine/budogosch_2010.webp',
        link: './original_maps/rogaine/budogosch_2010_omaps.jpg',
        bounds: [[59.3208419, 32.3111343], [59.3110308, 32.4577332], [59.2635996, 32.2999763]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        type: ['ROGAINE']
    },
    {
        name: 'Юкки',
        year: 2025,
        url: './maps/rogaine/yukki_2025.webp',
        link: './original_maps/rogaine/yukki_2025_omaps.jpg',
        o_gps: 23127,
        bounds: [[60.149281, 30.2693081], [60.149046, 30.3364706], [60.1100392, 30.2687931]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        type: ['ROGAINE']
    },
];
