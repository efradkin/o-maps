// types can be ROGAINE, SPRINT, CITY, RELIEF
let rogaineMaps = [
    // --- рогейн ---
    {
        name: 'Санкт-Петербург, юг',
        year: 2023,
        url: './maps/rogaine/spb_perekati_piter_2023.webp',
        bounds: [[59.94340533235882, 30.208110809326175], [59.94768243660754, 30.396080017089844], [59.81461961493708, 30.21944046020508]],
        info: '<a href="https://orientband.ru/tproduct/549661597-580137401641-perekati-piter" target="_blank">Перекати Питер</a>.',
        owner: 'OPNBND',
        types: ['ROGAINE'],
    },
    {
        name: 'Санкт-Петербург, север',
        year: 2019,
        url: './maps/rogaine/spb_severnaya_stolitsa_2019.webp',
        bounds: [[60.03896027284075, 30.184593200683597], [60.03870308309954, 30.35333633422852], [59.91717182572499, 30.18390655517578]],
        owner: 'GOLDMRSHRT',
        types: ['ROGAINE'],
    },
    {
        name: 'Чудово',
        year: 2022,
        url: './maps/rogaine/chudovo_2022.webp',
        link: './original_maps/rogaine/chudovo_2022_full.png',
        bounds: [[59.12526982459133, 31.651825904846195], [59.12529184714073, 31.680107116699222], [59.11414662815797, 31.652126312255863]],
        owner: 'SHBN',
        types: ['ROGAINE'],
    },
    {
        name: 'Зеленогорск - ГК',
        year: 2009,
        url: './maps/rogaine/zelenogorsk_gk_2009.webp',
        link: './original_maps/rogaine/zelenogorsk_gk_2009_full.jpg',
        bounds: [[60.30476017195011, 29.679565429687504], [60.28970484971667, 29.871139526367188], [60.202810147156775, 29.64746475219727]],
        owner: 'GK',
        types: ['ROGAINE'],
    },
    {
        name: 'Зеленогорск, Прибой',
        year: 2011,
        url: './maps/winter/zelenogorsk_schuchje_winter_2011.webp',
        bounds: [[60.24662707764389, 29.71887588500977], [60.23708440981365, 29.847278594970707], [60.19291339919565, 29.716300964355472]],
        types: ['WINTER','ROGAINE'],
    },
    {
        name: 'Зеленогорск - Ильичёво',
        year: 2024,
        url: './maps/rogaine/zelenogorsk_north_wn_2024.webp',
        bounds: [[60.26855615275327, 29.78616714477539], [60.260254638674034, 29.860067367553714], [60.21662647354862, 29.76101875305176]],
        owner: 'WN',
        types: ['ROGAINE'],
    },
    {
        name: 'Шапки',
        year: 2019,
        info: 'КЛО 2019, 2024.',
        url: './maps/rogaine/shapki_KLO_2024.webp',
        link: ['./original_maps/rogaine/shapki_KLO_2019_full.jpg','./original_maps/rogaine/shapki_KLO_2024_full.jpg'],
        bounds: [[59.62961808079296, 31.124010086059574], [59.6245838890069, 31.25473022460938], [59.568679740934435, 31.112508773803714]],
        types: ['ROGAINE'],
    },
    {
        name: 'Кузнечное',
        year: 2009,
        major: true,
        info: 'VI Чемпионат России по рогейну.',
        url: './maps/rogaine/kuznechnoe_2009.webp',
        link: './original_maps/rogaine/kuznechnoe_2009_full.jpg',
        bounds: [[61.19538604557029, 29.662742614746097], [61.194889777986376, 29.914054870605472], [61.04831536461298, 29.662055969238285]],
        owner: 'GK',
        types: ['ROGAINE'],
    },
    {
        name: 'Кузнечное',
        year: 2024,
        url: './maps/rogaine/kuznechnoe_hard_2024.webp',
        bounds: [[61.24538624075754, 29.621715545654297], [61.19604772352212, 30.040569305419925], [61.06675740931178, 29.538459777832035]],
        info: '<a href="https://hardadventure.ru/rock2024" target="_blank">Hard Rogaine</a>.',
        owner: 'HARD',
        types: ['ROGAINE'],
    },
    {
        name: 'Воробьёво оз',
        year: 2013,
        url: './maps/rogaine/vorobjevo_bn_2013.webp',
        bounds: [[60.93985560994127, 30.25995254516602], [60.93351805032942, 30.375652313232425], [60.899891223356235, 30.250511169433597]],
        owner: 'WN',
        types: ['ROGAINE'],
    },
    {
        name: 'Мичуринское',
        year: 2014,
        url: './maps/rogaine/michurinskoe_redfox_2014.webp',
        bounds: [[60.64230709708608, 29.853286743164066], [60.628670493777555, 30.02099990844727], [60.574741060738916, 29.833545684814457]],
        owner: ['RFAR','WN'],
        types: ['ROGAINE'],
    },
    {
        name: 'Мичуринское',
        year: 2008,
        url: './maps/rogaine/michurinskoe_erc_2008.webp',
        link: 'https://web.archive.org/web/20160206161750/http://rogaine-spb.ru/erc08/erc08map.jpg',
        bounds: [[60.63229064837143, 29.750633239746097], [60.63229064837143, 30.021171569824222], [60.48124712867758, 29.749946594238285]],
        info: 'European Rogaining Championships.',
        types: ['ROGAINE'],
    },
    {
        name: 'Лосево',
        year: 2007,
        major: true,
        url: './maps/rogaine/losevo_rrc_2007.webp',
        link: 'https://web.archive.org/web/20161220160945/http://www.rogaine-spb.ru/race0807/map.gif',
        bounds: [[60.803236100904606, 29.611244201660156], [60.9023956835838, 29.857749938964847], [60.635657869155416, 29.90409851074219]],
        info: 'IV Чемпионат России по рогейну.',
        author: ['ANTPV','KMN_I','OZRV'],
        types: ['ROGAINE'],
    },
    {
        name: 'Лосево',
        year: 2024,
        info: 'КЛО',
        url: './maps/rogaine/losevo_2024.webp',
        link: './original_maps/rogaine/losevo_2024_full.jpg',
        bounds: [[60.70284446693063, 29.885559082031254], [60.69729994707354, 29.98872756958008], [60.67221165274837, 29.879207611083988]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        types: ['ROGAINE'],
    },
    {
        name: 'Лемболово-Мичуринское',
        year: 2012,
        major: true,
        start: '100X24',
        url: './maps/rogaine/lembolovo_michurinskoe_rrc_2012.webp',
        link: 'https://100x24.ru/2012/maps/100x24_2012.gif',
        bounds: [[60.55576008343374, 29.872512817382816], [60.53246152901585, 30.360374450683597], [60.38994275676987, 29.843330383300785]],
        info: '<a href="https://100x24.ru/2012/docs/100x24_nat.htm" target="_blank">Чемпионат России по рогейну на лыжах.</a>',
        types: ['ROGAINE'],
    },
    {
        name: 'Запорожское',
        year: 2016,
        major: true,
        url: './maps/rogaine/zaporozhskoe_2016.webp',
        link: 'https://www.multsport.ru/images/rogRus16/map.jpg',
        bounds: [[60.67923162227499, 30.155410766601566], [60.688813300289965, 30.679321289062504], [60.43164595895512, 30.173263549804688]],
        info: 'XIII Чемпионат России по рогейну.',
        author: 'RYLOV_V',
        types: ['ROGAINE'],
    },
    {
        name: 'Лемболово-Орехово',
        year: 2024,
        url: './maps/rogaine/lembolovo_orekhovo_gk_2024.webp',
        bounds: [[60.48141628624153, 30.25789260864258], [60.47388792089789, 30.399856567382816], [60.40588443750511, 30.242099761962894]],
        info: 'Горный Кросс.',
        owner: 'GK',
        types: ['ROGAINE'],
    },
    {
        name: 'Первомайское',
        year: 2012,
        major: true,
        url: './maps/rogaine/pervomajskoe_rrc_2012.webp',
        link: 'https://rrc2012.rogaining.ru/download/9rrc_map.jpg',
        bounds: [[60.47701790290766, 29.584808349609375], [60.44993780053481, 29.986152648925785], [60.30824657381306, 29.535713195800785]],
        info: 'IX Чемпионат России по рогейну.',
        author: 'RYLOV_V',
        types: ['ROGAINE'],
    },
    {
        name: 'Первомайское',
        year: 2015,
        url: './maps/rogaine/pervomajskoe_2015.webp',
        bounds: [[60.440158027259564, 29.635791778564457], [60.43338243248793, 29.74428176879883], [60.40016159408681, 29.62497711181641]],
        info: 'RedFox мультирогейн.',
        owner: 'WN',
        types: ['ROGAINE'],
    },
    {
        name: 'Первомайское',
        year: 2023,
        url: './maps/rogaine/pervomajskoe_2023.webp',
        link: './original_maps/rogaine/pervomajskoe_2023_full.jpg',
        bounds: [[60.440496769918916, 29.666519165039066], [60.43427180983662, 29.761619567871097], [60.386634728114444, 29.652872085571293]],
        info: 'Финал КЛО.',
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        types: ['ROGAINE'],
    },
    {
        name: 'Зеркальный',
        year: 2022,
        major: true,
        url: './maps/rogaine/zerkalny_rrc_2022.webp',
        link: './original_maps/rogaine/zerkalny_rrc_2022_full.jpg',
        bounds: [[60.34207085274035, 28.864517211914066], [60.37518126453458, 29.334526062011722], [60.138086026326405, 28.924255371093754]],
        author: 'RYLOV_V',
        info: 'II Кубок России по рогейну.',
        types: ['ROGAINE'],
    },
    {
        name: 'Гарболово',
        year: 2011,
        url: './maps/rogaine/garbolovo_strekozy_2011.webp',
        link: './original_maps/rogaine/garbolovo_strekozy_2011_full.jpg',
        bounds: [[60.40334107578093, 30.436763763427738], [60.398084164953325, 30.52165031433106], [60.34737927121206, 30.419597625732425]],
        info: 'Рогейн от Стрекозаек. По материалам В.Л. Чегаровского.',
        owner: 'STRKZK',
        types: ['ROGAINE'],
    },
    {
        name: 'Гарболово',
        year: 2022,
        url: './maps/rogaine/garbolovo_2022.webp',
        // link: './original_maps/rogaine/garbolovo_2022_full.jpg',
        bounds: [[60.39155423873948, 30.440025329589847], [60.37772682670247, 30.554180145263675], [60.352092422734586, 30.418910980224613]],
        info: 'Финал КЛО.',
        author: 'RYLOV_V',
        owner: 'MLTSPRT',
        types: ['ROGAINE'],
    },
    {
        name: 'Вуокса',
        year: 2023,
        url: './maps/rogaine/vuoksa_2023.webp',
        bounds: [[61.07024523739947, 29.890708923339847], [61.052885339951935, 30.129661560058597], [60.93418522126774, 29.847793579101566]],
        info: 'Водный рогейн.',
        owner: 'MLTSPRT',
        types: ['ROGAINE'],
    },
    {
        name: 'Луга, оз Омчино',
        year: 2023,
        info: 'Горный Кросс.',
        url: './maps/rogaine/luga_omchino_gk_2023.webp',
        bounds: [[58.728926021785234, 29.727287292480472], [58.71653790199033, 29.844532012939453], [58.68550369843779, 29.71012115478516]],
        owner: 'GK',
        types: ['ROGAINE'],
    },
    {
        name: 'Шалово',
        year: 2023,
        info: 'Лужский Меридиан.',
        url: './maps/rogaine/luga_shalovo_lm_2023.webp',
        bounds: [[58.825517642361326, 29.880580902099613], [58.81414171845056, 30.013618469238285], [58.77576490590429, 29.86470222473145]],
        owner: 'LM',
        types: ['ROGAINE'],
    },
    {
        name: 'Шалово',
        year: 2023,
        info: 'Рогейн на Лужских берегах.',
        url: './maps/rogaine/shalovo_luzhsky_2023.webp',
        bounds: [[58.821029930669205, 29.891481399536136], [58.809119127096146, 30.0322437286377], [58.76459520046961, 29.87242698669434]],
        owner: 'SHBN',
        types: ['ROGAINE'],
    },
/*
    {
        name: 'оз Омчино',
        year: 2024,
        info: 'Лужский лыжный рогейн.',
        url: './maps/rogaine/omchino_luzhski_2024.webp',
        bounds: [[58.73409386161734, 29.75131988525391], [58.72460404916333, 29.842386245727543], [58.68211323154789, 29.73183631896973]],
        owner: 'SHBN',
        types: ['ROGAINE'],
    },
*/
    {
        name: 'оз Омчино',
        year: 2022,
        info: 'Лужский рогейн.',
        url: './maps/rogaine/omchino_luzhsky_2022.webp',
        bounds: [[58.739572715437966, 29.677248001098636], [58.73658840613287, 29.834318161010746], [58.68157786452505, 29.67269897460938]],
        owner: 'SHBN',
        types: ['ROGAINE'],
    },
    {
        name: 'Городок',
        year: 2023,
        info: 'Лужский Меридиан-67.',
        url: './maps/rogaine/gorodok_lm_2023.webp',
        bounds: [[58.73939455490484, 29.803419113159183], [58.73097542942129, 29.89113807678223], [58.67573290639293, 29.780845642089844]],
        owner: 'LM',
        types: ['ROGAINE'],
    },
    {
        name: 'оз Омчино',
        year: 2024,
        info: 'Рогейн на Лужских берегах.',
        url: './maps/rogaine/omchino_luzhsky_2024.webp',
        bounds: [[58.7392609339061, 29.759130477905277], [58.72727749761397, 29.876804351806644], [58.686708127025476, 29.741020202636722]],
        owner: 'SHBN',
        types: ['ROGAINE'],
    },
    {
        name: 'Яппиля',
        year: 2011,
        url: './maps/rogaine/jappilya_2011.webp',
        link: './original_maps/rogaine/jappilya_2011_full.jpg',
        bounds: [[60.28111085167392, 28.998584747314457], [60.283578666424795, 29.285087585449222], [60.18045290464438, 29.003047943115238]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        types: ['ROGAINE'],
    },
    {
        name: 'Рогейн на холмах Яппиля',
        year: 2024,
        url: './maps/rogaine/jappilya_2024.webp',
        bounds: [[60.23295123125455, 29.108018875122074], [60.228647058275634, 29.18191909790039], [60.18527550629198, 29.09565925598145]],
        owner: 'SHBN',
        types: ['ROGAINE'],
    },
    {
        name: 'Кировские дачи',
        url: './maps/rogaine/kirovskie_dachi.webp',
        bounds: [[60.79381416770022, 28.706417083740238], [60.787992121373335, 28.79954338073731], [60.74578208815887, 28.69242668151856]],
        owner: 'TOKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Гаврилово',
        year: 2008,
        start: '100X24',
        info: '<a href="https://ww.w.100x24.ru/history.htm" target="_blank">Инфо и результаты.</a>',
        author: 'APTNKV',
        url: './maps/rogaine/gavrilovo_2008.webp',
        link: './original_maps/rogaine/gavrilovo_2008_full.gif',
        bounds: [[60.66628342039226, 28.648567199707035], [60.66098492736882, 29.004077911376957], [60.53643022164579, 28.642387390136722]],
        types: ['ROGAINE'],
    },
    {
        name: 'Вещево',
        year: 2009,
        start: '100X24',
        info: '<a href="https://ww.w.100x24.ru/history.htm" target="_blank">Инфо и результаты.</a>',
        author: 'APTNKV',
        url: './maps/rogaine/veschevo_2009.webp',
        link: './original_maps/rogaine/veschevo_2009_full.gif',
        bounds: [[60.764609513487414, 29.13059234619141], [60.760668828869505, 29.362163543701172], [60.60432913982012, 29.11960601806641]],
        types: ['ROGAINE'],
    },
    {
        name: 'Былинный рогейн',
        year: 2023,
        url: './maps/rogaine/bylinny_2023.webp',
        bounds: [[60.547151702290904, 29.8579216003418], [60.52807006805688, 30.062370300292972], [60.45645601402043, 29.82376098632813]],
        owner: 'WN',
        types: ['ROGAINE'],
    },
    {
        name: 'Поляны',
        year: 2005,
        info: 'Ref Fox Adventure Race 2004.',
        url: './maps/rogaine/polyany_2005.webp',
        link: './original_maps/rogaine/polyany_2005_full.jpg',
        bounds: [[60.31081861962197, 29.285559654235843], [60.310457270040814, 29.327015876770023], [60.28706732816777, 29.282040596008304]],
        author: 'MKHLV_B',
        types: ['ROGAINE'],
    },
    {
        name: 'Медное-Пасторское',
        year: 2024,
        info: 'КЛО',
        url: './maps/rogaine/mednoe_2024.webp',
        link: './original_maps/rogaine/mednoe_2024_full.jpg',
        bounds: [[60.25148254664529, 29.986839294433597], [60.23559311684475, 30.17626762390137], [60.21018810727095, 29.97199058532715]],
        author: ['RYLOV_V','CHGRVSKY_Y','CHGRVSKY_V'],
        owner: 'RYLOV_V',
        types: ['ROGAINE'],
    },
    {
        name: 'Колтуши',
        year: 2018,
        info: 'КЛО',
        url: './maps/rogaine/koltushi_2018.webp',
        link: './original_maps/rogaine/koltushi_2018_full.jpg',
        bounds: [[59.98267376968364, 30.616922378540043], [59.97816499154398, 30.674600601196293], [59.93424746513194, 30.602760314941406]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        types: ['ROGAINE'],
    },
    {
        name: 'Колтуши',
        year: 2014,
        start: '100X24',
        info: '<a href="https://ww.w.100x24.ru/results.htm" target="_blank">Инфо и результаты.</a>',
        url: './maps/rogaine/koltushi_2014.webp',
        link: './original_maps/rogaine/koltushi_100x24_2014.gif',
        bounds: [[60.000659827986084, 30.60876846313477], [59.99203289113303, 30.72635650634766], [59.949423210479104, 30.59477806091309]],
        author: ['APTNKV','FRSHLV','GRV_S'],
        types: ['VELO','ROGAINE'],
    },
    {
        name: 'Воейково',
        year: 2014,
        info: 'Чемпионат СЗФО.',
        url: './maps/rogaine/voejkovo_2014.webp',
        link: './original_maps/rogaine/voejkovo_2014_full.jpg',
        bounds: [[60.02515492614669, 30.65614700317383], [60.02498339487812, 30.82798004150391], [59.89591177914583, 30.65546035766602]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        types: ['ROGAINE'],
    },
    {
        name: 'Всеволожск',
        year: 2015,
        info: 'Кубок Всеволожского р-она.',
        url: './maps/rogaine/vsevolozhsk_2015.webp',
        link: './original_maps/rogaine/vsevolozhsk_2015_full.jpg',
        bounds: [[60.03381609748235, 30.563621520996097], [60.03415906743088, 30.66661834716797], [59.96824351795802, 30.563449859619144]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        types: ['ROGAINE'],
    },
    {
        name: 'Мельничный Ручей',
        year: 2016,
        info: 'Кубок Всеволожского р-она.',
        url: './maps/rogaine/melnichny_ruchej_2016.webp',
        link: './original_maps/rogaine/melnichny_ruchej_2016_full.jpg',
        bounds: [[60.03896027284075, 30.636062622070316], [60.03887454314954, 30.71657180786133], [59.966009702748345, 30.635890960693363]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        types: ['ROGAINE'],
    },
    {
        name: 'Будогощь',
        year: 2016,
        url: './maps/rogaine/budogosch_2010.webp',
        link: './original_maps/rogaine/budogosch_2010_full.jpg',
        bounds: [[59.32084193074355, 32.31113433837891], [59.31103079329914, 32.45773315429688], [59.26359961396579, 32.29997634887696]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        types: ['ROGAINE'],
    },
];
