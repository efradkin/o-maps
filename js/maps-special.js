// types can be ROGAINE, PARK, CITY, PARK, RELIEF, VELO, WINTER
let specialMaps = [
    // --- зимние ---
    {
        name: 'Снегирёвка',
        year: 1989,
        logo: 'wn_retro.webp',
        url: './maps/winter/snegirevka_winter_1989.webp',
        link: './original_maps/winter/snegirevka_winter_1989_omaps.jpg',
        bounds: [[60.558629034771705, 30.239353179931644], [60.552890877584524, 30.31514167785645], [60.52887239866379, 30.22948265075684]],
        author: ['MLVA_M','KAZNTSVA_O'],
        type: ['WINTER']
    },
    {
        name: 'Токсово, запад Хепоярви',
        year: 1987,
        url: './maps/winter/toksovo_hepojarvi_west_winter_1987.webp',
        link: './original_maps/winter/toksovo_hepojarvi_west_winter_1987_omaps.jpg',
        bounds: [[60.19773417081921, 30.53461074829102], [60.193894675595104, 30.595893859863285], [60.140692823704896, 30.51890373229981]],
        author: ['CHGRVSKY_V','BRNVA','KRPLSN','SMNA','CHKVSKY_N','DBRTSV_V','GRSMVA','BSTRV_A','PTRNNA','KRNLJV','CHGRVSKY_Y'],
        areas: [50,3,2,2,3,10,2,3,2,3,20],
        type: ['WINTER'],
        qtty: 20
    },
    {
        name: 'Токсово',
        year: 1989,
        url: './maps/winter/toksovo_winter_1989.webp',
        link: './original_maps/winter/toksovo_winter_1989_omaps.jpg',
        bounds: [[60.16284226193584, 30.47345638275147], [60.16045075590866, 30.511994361877445], [60.14673894357099, 30.4696798324585]],
        author: ['CHGRVSKY_Y','DBRTSV_V','KRPLSN','BSTRV_A','BRSVA_I','GUSEV_I'],
        areas: [40,30,5,5,10,10],
        type: ['WINTER'],
        qtty: 10
    },
    {
        name: 'Лемболово',
        year: 2019, // карта явно более ранняя
        url: './maps/winter/lembolovo_winter_2019.webp',
        bounds: [[60.42351294603261, 30.3063440322876], [60.420420172898, 30.34084796905518], [60.40628711821687, 30.30089378356934]],
        author: ['DBRTSV_V','CHGRVSKY_Y'], //Возможно и Баймакова, надо уточнить
        type: ['WINTER']
    },
    {
        name: 'Орехово',
        year: 2010,
        url: './maps/winter/orekhovo_winter_2010.webp',
        bounds: [[60.460666761529005, 30.279736518859867], [60.45687922940639, 30.326771736145023], [60.44310073619961, 30.274243354797367]],
        author: ['KVZN','NSNV'],
        type: ['WINTER']
    },
    {
        name: 'Рощино',
        year: 2013,
        url: './maps/winter/roschino_winter_2013.webp',
        link: './original_maps/winter/roschino_winter_2013_omaps.jpg',
        bounds: [[60.27208897887721, 29.576182365417484], [60.27204641697717, 29.60000038146973], [60.26370321558072, 29.576439857482914]],
        author: 'SHRNN',
        type: ['WINTER'],
        zindex: 2
    },
    {
        name: 'Кузьмолово',
        year: 2003,
        area: 2.3,
        url: './maps/winter/kuzmolovo_2003.webp',
        link: './original_maps/winter/kuzmolovo_2003_omaps.jpg',
        bounds: [[60.12306086526154, 30.505256652832035], [60.119426439074296, 30.552077293396], [60.106745563934105, 30.500020980834964]],
        author: 'SHRNN',
        owner: 'GLFSTRM',
        type: ['WINTER']
    },
    {
        name: 'Токсово, ВИФК',
        year: 2023,
        url: './maps/winter/toksovo_vifk_winter_2023.webp',
        bounds: [[60.193233383853695, 30.560145378112797], [60.18962804295176, 30.59679508209229], [60.18021815816931, 30.554866790771488]],
        author: 'CHGRVSKY_Y',
        type: ['WINTER']
    },
    {
        name: 'Зеленогорск - Чёрные озёра',
        url: './maps/winter/zelenogorsk_chernye_winter.webp',
        link: './original_maps/winter/zelenogorsk_chernye_winter_omaps.jpg',
        bounds: [[60.25463395700811, 29.77681159973145], [60.25224913383907, 29.816293716430668], [60.22557839180962, 29.768142700195316]],
        author: ['SHRNN','KUZNTSV_S','VLKV_M'],
        type: ['WINTER']
    },
    {
        name: 'Цвелодубово',
        date: '2003-02-21',
        start: 'JWSOC_2003',
        info: 'ЛГ-спринт.',
        url: './maps/winter/tsvelodubovo_winter_2003.webp',
        link: './original_maps/winter/tsvelodubovo_winter_2003_omaps.jpg',
        bounds: [[60.38012371591987, 29.552407264709476], [60.37715409255567, 29.599828720092777], [60.36293857546221, 29.548244476318363]],
        author: ['KVZN','KUZNTSV_S','NSNV'],
        type: ['WINTER']
    },
    {
        name: 'Цвелодубово, оз Рыбацкое',
        date: '2003-02-20',
        start: 'JWSOC_2003',
        info: 'ЛГ-спринт.',
        url: './maps/winter/tsvelodubovo_rybatskoe_2003.webp',
        link: './original_maps/winter/tsvelodubovo_rybatskoe_2003_omaps.jpg',
        bounds: [[60.36419063865247, 29.544124603271488], [60.3614317915913, 29.574251174926758], [60.35468224304794, 29.540390968322757]],
        author: 'KVZN',
        type: ['WINTER']
    },
    {
        name: 'Будогощь, оз Светлое',
        year: 2024,
        url: './maps/winter/budogosch_svetloe_winter_2024.webp',
        bounds: [[59.28447396887775, 32.348299026489265], [59.28138309112493, 32.381472587585456], [59.273665632447134, 32.34443664550782]],
        owner: 'EGRV_SRG',
        type: ['WINTER']
    },
    {
        name: 'Кириши, лыжная трасса',
        year: 2024,
        url: './maps/winter/kirishi_ski_track_2024.webp',
        bounds: [[59.44023146251266, 31.985664367675785], [59.43905317578189, 32.00201511383057], [59.42154860449208, 31.97957038879395]],
        author: 'TKMKV_K',
        owner: 'EGRV_SRG',
        type: ['WINTER']
    },
    {
        name: 'Сосновка, лыжный полигон',
        year: 2024,
        url: './maps/winter/sosnovka_winter_2024.webp',
        info: '<a href="https://o-site.spb.ru/race.php?id=poligon2025">Инфо</a>.',
        bounds: [[60.02682730935579, 30.330719947814945], [60.02253897755637, 30.36925792694092], [60.013102688647166, 30.32509803771973]],
        author: 'CHGRVSKY_V',
        owner: 'IMPULS',
        type: ['WINTER', 'PARK']
    },
    {
        name: 'Шуваловский парк',
        year: 2023,
        url: './maps/winter/shuvalovsky_park_winter_2023.webp',
        link: './original_maps/winter/shuvalovsky_park_winter_2023_omaps.jpg',
        bounds: [[60.085243214141705, 30.291752815246586], [60.08293167886438, 30.32106399536133], [60.069273191217576, 30.287203788757324]],
        author: 'EFRMV',
        owner: 'EFRMV',
        type: ['WINTER', 'PARK']
    },
    {
        name: 'Кировск',
        year: 2024,
        info: 'Карта-авоська.',
        url: './maps/winter/kirovsk_winter_2024.webp',
        bounds: [[59.90888891207802, 31.008138656616214], [59.90707069729489, 31.025068759918216], [59.89890364096045, 31.00423336029053]],
        owner: 'NKLSK',
        author: 'YGNV',
        type: ['WINTER']
    },
    {
        name: 'Аньялово',
        year: 2023,
        startYear: 2024,
        info: 'ЧиП СПб, ЛГ-маркир.',
        url: './maps/winter/anyalovo_winter_2023.webp',
        link: './original_maps/winter/anyalovo_2023_omaps.gif',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/18157/',
        bounds: [[60.312582798414866, 30.499763488769535], [60.30854417624976, 30.537958145141605], [60.29933850324382, 30.49461364746094]],
        author: ['TKMKV_K','KVZN'],
        owner: 'SFSO_SPB',
        type: ['WINTER']
    },
    // --- вело ---
    {
        name: 'Дудергоф, Нагорный парк',
        year: 1999,
        url: './maps/velo/dudergof_199x.webp',
        link: './original_maps/velo/dudergof_199x_omaps.jpg',
        bounds: [[59.70363323936345, 30.120949745178226], [59.70228011032887, 30.138931274414066], [59.69221111300396, 30.11790275573731]],
        author: 'MTRNCHV',
        owner: 'MTRNCHV',
        type: ['VELO']
    },
    {
        name: 'Университет',
        year: 2025,
        url: './maps/velo/univer_velo_2025.webp',
        link: './original_maps/velo/univer_velo_2025_omaps.gif',
        bounds: [[59.90008739676608, 29.824340343475345], [59.89543822235865, 29.860410690307617], [59.88723600894675, 29.81751680374146]],
        author: 'MTRNCHV',
        owner: 'MTRNCHV',
        type: ['VELO']
    },
    {
        name: 'Солнечное',
        year: 2023,
        url: './maps/velo/solnechnoe_velo_2021.webp',
        link: './original_maps/velo/solnechnoe_velo_2021_omaps.pdf',
        bounds: [[60.16290631773987, 29.927186965942386], [60.156884526390876, 29.978599548339847], [60.14483763345936, 29.916973114013675]],
        author: 'MTRNCHV',
        owner: 'MTRNCHV',
        type: ['VELO']
    },
    {
        name: 'Солнечное',
        year: 2008,
        url: './maps/velo/solnechnoe_velo_2019.webp',
        link: './original_maps/velo/solnechnoe_velo_2019_omaps.jpg',
        bounds: [[60.158763785381176, 29.92856025695801], [60.15547501163754, 29.97469425201416], [60.14475217873823, 29.924483299255375]],
        author: 'SHRNN',
        owner: 'SHRNN',
        type: ['VELO']
    },
    {
        name: 'Тарховка',
        year: 2023,
        area: 4,
        url: './maps/velo/tarkhovka_velo_2023.webp',
        link: './original_maps/velo/tarkhovka_velo_2023_omaps.pdf',
        bounds: [[60.08303869796451, 29.937143325805668], [60.07717353916566, 29.995079040527347], [60.04354648691466, 29.918432235717777]],
        author: 'MTRNCHV',
        owner: 'MTRNCHV',
        type: ['VELO']
    },
    {
        name: 'Удельный парк',
        year: 2023,
        url: './maps/velo/udelny_velo_2023.webp',
        link: './original_maps/velo/udelny_velo_2023_omaps.pdf',
        bounds: [[60.016727400055146, 30.2973747253418], [60.01428237207713, 30.32509803771973], [60.00308440770832, 30.2927827835083]],
        author: 'MTRNCHV',
        owner: 'MTRNCHV',
        type: ['VELO']
    },
    {
        name: 'парк 9 Января',
        year: 2025,
        url: './maps/velo/9_janvarya_velo_2025.webp',
        link: './original_maps/velo/9_janvarya_velo_2025_omaps.jpg',
        bounds: [[59.89576110271853, 30.274329185485843], [59.89502923606423, 30.281978845596317], [59.89044393980611, 30.272719860076904]],
        author: 'MTRNCHV',
        owner: 'MTRNCHV',
        type: ['VELO']
    },
    {
        name: 'Екатерингоф',
        year: 2025,
        url: './maps/velo/ekateringof_velo_2025.webp',
        link: './original_maps/velo/ekateringof_velo_2025_omaps.gif',
        bounds: [[59.90728587583638, 30.25321483612061], [59.90558592735157, 30.27020931243897], [59.90035642629262, 30.25068283081055]],
        author: 'MTRNCHV',
        owner: 'MTRNCHV',
        type: ['VELO']
    },
    {
        name: 'Александрино, север',
        year: 2022,
        url: './maps/velo/aleksandrino_velo_2022.webp',
        link: './original_maps/velo/aleksandrino_velo_2022_omaps.gif',
        bounds: [[59.847250853534426, 30.21476268768311], [59.84578496709652, 30.232336521148685], [59.83585619883127, 30.211350917816166]],
        author: 'MTRNCHV',
        owner: 'MTRNCHV',
        type: ['VELO']
    },
    {
        name: 'Сестрорецк, Детские Дюны',
        year: 2025,
        url: './maps/velo/sestroretsk_detskie_djuny_velo_2025.webp',
        link: './original_maps/velo/sestroretsk_detskie_djuny_velo_2025_omaps.gif',
        bounds: [[60.12348841843245, 29.95630502700806], [60.1213826653873, 29.974629878997806], [60.11661482826964, 29.953000545501713]],
        author: 'MTRNCHV',
        owner: 'MTRNCHV',
        type: ['VELO']
    },
    {
        name: 'Сестрорецк, Дюны',
        year: 2025,
        url: './maps/velo/sestroretsk_djuny_velo_2025.webp',
        link: './original_maps/velo/sestroretsk_djuny_velo_2025_omaps.gif',
        bounds: [[60.12987967622557, 29.938688278198246], [60.12743233451537, 29.958922863006595], [60.12290587586561, 29.935201406478885]],
        author: 'MTRNCHV',
        owner: 'MTRNCHV',
        type: ['VELO']
    },
    {
        name: 'Сестрорецк, Ржавая канава',
        year: 2025,
        url: './maps/velo/sestroretsk_rzhava_kanava_velo_2025.webp',
        link: './original_maps/velo/sestroretsk_rzhava_kanava_velo_2025_omaps.gif',
        bounds: [[60.12842625506228, 29.952421188354496], [60.12647044734001, 29.967420101165775], [60.12307155415851, 29.94956731796265]],
        author: 'MTRNCHV',
        owner: 'MTRNCHV',
        type: ['VELO']
    },
    {
        name: 'Сестрорецк, КаУР',
        year: 2024,
        url: './maps/velo/sestroretsk_kaur_velo_2024.webp',
        link: './original_maps/velo/sestroretsk_kaur_velo_2024_omaps.gif',
        bounds: [[60.12027094447475, 29.969211816787723], [60.119891454221886, 29.975091218948368], [60.112899498985506, 29.965628385543827]],
        author: 'MTRNCHV',
        owner: 'MTRNCHV',
        type: ['VELO']
    },
    {
        name: 'Сестрорецк, парк Дубки',
        year: 2024,
        url: './maps/velo/sestroretsk_dubki_velo_2024.webp',
        link: './original_maps/velo/sestroretsk_dubki_velo_2024_omaps.gif',
        bounds: [[60.09575009522165, 29.922487735748295], [60.092952510609145, 29.9458122253418], [60.08796120105735, 29.91858243942261]],
        author: 'MTRNCHV',
        owner: 'MTRNCHV',
        type: ['VELO']
    },
    {
        name: 'Песочная',
        year: 2019,
        url: './maps/velo/pesochnaya_velo_2019.webp',
        link: './original_maps/velo/pesochnaya_velo_2019_omaps.gif',
        bounds: [[60.12374494766924, 30.11112213134766], [60.11985403945298, 30.16253471374512], [60.106873894040845, 30.106444358825687]],
        author: ['VSLVSKY','DRBSHV','SHKLV','MTRNCHV'],
        owner: 'MTRNCHV',
        type: ['VELO']
    },
    {
        name: 'Зеленогорск, Чёрные оз',
        year: 2025,
        url: './maps/velo/zelenogorsk_chernye_velo_2025.webp',
        link: './original_maps/velo/zelenogorsk_chernye_velo_2025_omaps.gif',
        bounds: [[60.23736135674902, 29.759602546691898], [60.22817825282511, 29.836893081665043], [60.21087037813742, 29.747157096862797]],
        author: 'MTRNCHV',
        owner: 'MTRNCHV',
        type: ['VELO']
    },
    {
        name: 'Пухтолова гора',
        year: 2009, //Реально более ранняя
        url: './maps/velo/pukhtolova_gora_velo.webp',
        link: './original_maps/velo/pukhtolova_gora_velo_omaps.jpg',
        bounds: [[60.25603921789568, 29.63441848754883], [60.251354780368175, 29.691495895385746], [60.228732294909875, 29.625320434570316]],
        author: ['BLZRV_V','URVNTSV','NKFRV_A'],
        type: ['VELO']
    },
    {
        name: 'Пухтолова гора',
        year: 2024,
        url: './maps/velo/pukhtolova_gora_velo_2024.webp',
        link: './original_maps/velo/pukhtolova_gora_velo_2024_omaps.gif',
        bounds: [[60.257082478633, 29.637336730957035], [60.250140975871716, 29.691238403320316], [60.228774913143845, 29.6237325668335]],
        author: 'MTRNCHV',
        owner: 'MTRNCHV',
        type: ['VELO']
    },
    {
        name: 'Пухтолова гора',
        year: 2025,
        url: './maps/velo/pukhtolova_gora_velo_2025.webp',
        link: './original_maps/velo/pukhtolova_gora_velo_2025_omaps.gif',
        bounds: [[60.24453985658783, 29.631371498107914], [60.238852569238844, 29.678492546081547], [60.22871098577209, 29.62467670440674]],
        author: 'KUZNTSV_R',
        owner: 'SFSO_SPB',
        type: ['VELO']
    },
    {
        name: 'Рощино',
        year: 2025,
        url: './maps/velo/roschino_velo_2025.webp',
        link: './original_maps/velo/roschino_velo_2025_omaps.gif',
        bounds: [[60.27932369715627, 29.563522338867188], [60.27781304992234, 29.602575302124027], [60.26500165963541, 29.561719894409183]],
        author: 'KUZNTSV_R',
        owner: 'SFSO_SPB',
        type: ['VELO']
    },
    {
        name: 'Зеленогорск, Щучье оз',
        year: 2025,
        url: './maps/velo/zelik_schuchje_velo_2025.webp',
        link: './original_maps/velo/zelik_schuchje_velo_2025_omaps.gif',
        info: 'Территория ООПТ.',
        bounds: [[60.233249519326534, 29.748659133911136], [60.22583412498815, 29.811916351318363], [60.20246892966917, 29.73411083221436]],
        author: ['SHRNN','KUZNTSV_S','KUZNTSV_R'],
        owner: 'SFSO_SPB',
        type: ['VELO']
    },
    {
        name: 'Зеленогорск, Щучье оз',
        year: 2012,
        url: './maps/velo/zelik_schuchje_velo_2010.webp',
        link: './original_maps/velo/zelik_schuchje_velo_2010_omaps.jpg',
        bounds: [[60.23018128377677, 29.745225906372074], [60.22566363642415, 29.79947090148926], [60.20485737756326, 29.73587036132813]],
        author: ['SHRNN','IBRGMV','GLTV_Y'],
        type: ['VELO']
    },
    {
        name: 'Цвелодубово, Нахимовская т/б',
        year: 2015,
        url: './maps/velo/tsvelodubovo_nakhimovskaya_tb_velo.webp',
        link: './original_maps/velo/tsvelodubovo_nakhimovskaya_tb_velo_omaps.jpg',
        bounds: [[60.38616818421505, 29.544897079467777], [60.384153486085516, 29.562406539916996], [60.37265671896538, 29.539189338684086]],
        author: ['SHRNN','RYLOV_V'],
        owner: 'SHRNN',
        type: ['VELO']
    },
    {
        name: 'Токсово, ВИФК',
        year: 2013,
        url: './maps/velo/toksovo_vifk_2013_velo.webp',
        link: ['./original_maps/velo/toksovo_vifk_2013_velo_full_1.jpg','./original_maps/velo/toksovo_vifk_2013_velo_full_2.jpg'],
        bounds: [[60.19519588818361, 30.55482387542725], [60.19282806942666, 30.592374801635742], [60.17317498359659, 30.550875663757328]],
        author: ['SHRNN','CHGRVSKY_Y'],
        owner: 'SHRNN',
        type: ['VELO']
    },
    {
        name: 'Воейково',
        info: 'Карта рисовалась для Этапа Кубка Мира.',
        url: './maps/velo/voejkovo_velo.webp',
        link: './original_maps/velo/voejkovo_velo_omaps.jpg',
        photo: './tracks/pavlovo/pic_3.jpg',
        bounds: [[59.99666853981014, 30.66215515136719], [59.99370695029761, 30.72532653808594], [59.93777332844343, 30.651340484619144]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        type: ['VELO']
    },
    {
        name: 'Каннельярви, оз Исток',
        url: './maps/velo/kanneljarvi_velo.webp',
        info: 'Соревнования посвящённые памяти Бориса Панкратьева.',
        link: ['./original_maps/velo/kanneljarvi_velo_omaps.jpg','./original_maps/velo/kanneljarvi_velo_2006_omaps.gif'],
        bounds: [[60.37832076259013, 29.283456802368168], [60.370641185033705, 29.37950134277344], [60.343260013555195, 29.272127151489258]],
        author: ['VSLVSKY','SHRNN','RYLOV_V'],
        owner: 'RYLOV_V',
        type: ['VELO']
    },
    {
        name: 'Суоранда',
        year: 2006,
        url: './maps/velo/suoranda_2006.webp',
        link: './original_maps/velo/suoranda_2006_omaps.jpg',
        photo: 'tracks/koltushi_kamy/pic_3.jpg',
        bounds: [[59.96626745834547, 30.609412193298343], [59.96388314254157, 30.660095214843754], [59.947231109940404, 30.606579780578617]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        type: ['VELO']
    },
    {
        name: 'Сестрорецк, Таможенная дорога',
        year: 2021,
        url: './maps/velo/sestroretsk_tamozhennaya_doroga_velo_2021.webp',
        link: './original_maps/velo/sestroretsk_tamozhennaya_doroga_velo_2021_omaps.jpg',
        bounds: [[60.13809671034381, 29.950232505798343], [60.13726334656544, 29.962935447692875], [60.12847969080049, 29.947400093078617]],
        author: ['SHRNN','KUZNTSV_R'],
        type: ['VELO'],
    },
    {
        name: '69км, ДНТ "Свердловец", Осиновское оз',
        year: 2021,
        info: '<a href="https://o-site.spb.ru/race.php?id=210605_MTBO_klass">ЧиП СПб</a>.',
        url: './maps/velo/sverdlovets_velo_2021.webp',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/13866/',
        link: ['./original_maps/velo/sverdlovets_velo_2021_omaps.jpg','./original_maps/velo/sverdlovets_velo_2022_omaps.gif'],
        bounds: [[60.516687500657405, 30.2754020690918], [60.51455414407001, 30.310506820678714], [60.49602394278501, 30.269608497619632]],
        author: ['DBRTSV_V','SHLKHN_AN','AKSNVA','AKSNV'],
        type: ['VELO']
    },
    {
        name: 'Орехово, Фигурное оз',
        year: 2022,
        gps: ['https://viewer.o-gps-center.ru/viewer/event/13837/','https://viewer.o-gps-center.ru/viewer/event/7997/','https://viewer.o-gps-center.ru/viewer/event/7988/'],
        url: './maps/velo/orekhovo_figurnoe_velo_2020.webp',
        link: ['./original_maps/velo/orekhovo_figurnoe_velo_2022_omaps.gif','./original_maps/velo/orekhovo_figurnoe_velo_2020_omaps.gif'],
        bounds: [[60.46371339409353, 30.278749465942386], [60.459756947760624, 30.331492424011234], [60.443629972121556, 30.272827148437504]],
        type: ['VELO']
    },
    {
        name: 'Запорожское',
        year: 2022,
        gps: 'https://viewer.o-gps-center.ru/viewer/event/13849/',
        url: './maps/velo/zaporozhskoe_velo_2022.webp',
        link: './original_maps/velo/zaporozhskoe_velo_2022_2022_omaps.gif',
        bounds: [[60.61342771193733, 30.546455383300785], [60.60517170796431, 30.642070770263675], [60.56149773161382, 30.52714347839356]],
        type: ['VELO']
    },
    {
        name: 'Осиновая Роща',
        year: 2020,
        url: './maps/velo/osinovaja_roscha_velo_2020.webp',
        link: './original_maps/velo/osinovaja_roscha_velo_2020_omaps.jpg',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/8327/',
        bounds: [[60.12288984243818, 30.240340232849125], [60.12079474073598, 30.266561508178714], [60.11036000398086, 30.23669242858887]],
        owner: 'SHLKHN_AN',
        type: ['VELO']
    },
    {
        name: 'Шуваловский парк',
        year: 2021,
        url: './maps/velo/shuvalovsky_park_velo_2021.webp',
        link: './original_maps/velo/shuvalovsky_park_velo_2021_omaps.jpg',
        bounds: [[60.084964982364475, 30.295701026916507], [60.08310290925784, 30.321965217590336], [60.06895199883381, 30.291237831115726]],
        type: ['VELO']
    },
    {
        name: 'Лосево',
        year: 2021,
        info: '<a href="https://o-site.spb.ru/race.php?id=210612v">BondCup</a>.',
        url: './maps/velo/losevo_velo_2021.webp',
        link: './original_maps/velo/losevo_velo_2021_omaps.jpg',
        bounds: [[60.688393111084736, 29.930491447448734], [60.68360256619192, 29.980359077453617], [60.67172818532179, 29.923496246337894]],
        type: ['VELO']
    },
    {
        name: 'Сосново, оз Уловное',
        year: 2021,
        info: '<a href="https://o-site.spb.ru/race.php?id=210619_mtbo">BondCup</a>.',
        url: './maps/velo/sosnovo_ulovnoe_velo_2021.webp',
        link: './original_maps/velo/sosnovo_ulovnoe_velo_2021_omaps.jpg',
        bounds: [[60.60630914007171, 30.22321701049805], [60.60376039388934, 30.259094238281254], [60.582056305824665, 30.215749740600586]],
        type: ['VELO']
    },
    {
        name: 'Лемболово',
        year: 2019,
        url: './maps/velo/lembolovo_velo_2019.webp',
        link: './original_maps/velo/lembolovo_velo_2019_omaps.jpeg',
        info: '<a href="https://vk.com/lembolovomarathon">Лемболовский веломарафон "Горные вершины"</a>.',
        start: 'KVMLO',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/6347/',
        bounds: [[60.43240832461208, 30.250854492187504], [60.4456198220461, 30.31539916992188], [60.39151183234099, 30.285015106201175]],
        type: ['VELO']
    },
    {
        name: 'Лемболово',
        year: 2023,
        url: './maps/velo/lembolovo_velo_2023.webp',
        link: './original_maps/velo/lembolovo_velo_2023_omaps.gif',
        bounds: [[60.435627004716906, 30.2808952331543], [60.43206949763859, 30.337800979614258], [60.38650748953201, 30.268020629882816]],
        type: ['VELO'],
        author: ['VRBY','KVZN','TKMKV_K','NSNV','KUZNTSV_R','STRGNV'],
        owner: 'SFSO_SPB'
    },
    {
        name: 'Лемболово, юг',
        date: '2025-10-11',
        url: './maps/velo/lembolovo_velo_relay_2025.webp',
        link: './original_maps/velo/lembolovo_velo_relay_2025_omaps.gif',
        info: '<a href="https://o-site.spb.ru/race.php?id=251011_velo">ЧиП СПб, эстафеты</a>.',
        bounds: [[60.41546264900147, 30.323510169982914], [60.41575927424778, 30.339903831481937], [60.40323509806197, 30.319733619689945]],
        type: ['VELO'],
        author: ['TKMKV_K','KUZNTSV_R'],
        owner: 'SFSO_SPB'
    },
    {
        name: 'Силанде',
        year: 2025,
        url: './maps/velo/silande_velo_2025.webp',
        link: './original_maps/velo/silande_velo_2025_omaps.gif',
        bounds: [[60.42196659623265, 30.254116058349613], [60.418810119787075, 30.289006233215336], [60.391660254494, 30.243301391601566]],
        type: ['VELO'],
        author: ['CHGRVSKY_V','DBRTSV_V','KUZNTSV_R'],
        owner: 'SFSO_SPB'
    },
    {
        name: 'Зеркальный',
        year: 2023,
        url: './maps/velo/zerkalny_velo_2023.webp',
        link: './original_maps/velo/zerkalny_velo_2023_omaps.gif',
        bounds: [[60.228071705196626, 29.10415649414063], [60.22242418522649, 29.180159568786625], [60.19683832877667, 29.09540176391602]],
        type: ['VELO'],
        author: ['KVZN','NSNV','TKMKV_K','TKMKVA_P','KUZNTSV_R'],
        owner: 'SFSO_SPB'
    },
    {
        name: 'Поляны, Семиозерье',
        year: 2023,
        url: './maps/velo/poljany_velo_2023.webp',
        link: './original_maps/velo/poljany_velo_2023_omaps.gif',
        info: 'Частично территория ООПТ.',
        bounds: [[60.31806602292215, 29.28294181823731], [60.31100992072319, 29.37555313110352], [60.28889659959392, 29.268350601196293]],
        type: ['VELO'],
        author: ['SHRNN','DBRTSV_V','KUZNTSV_R'],
        owner: 'SFSO_SPB'
    },
    {
        name: 'Красная горка',
        year: 2022,
        url: './maps/velo/krasna_gorka_velo_2022.webp',
        link: './original_maps/velo/krasna_gorka_velo_2022_omaps.gif',
        info: 'Частично территория ООПТ.',
        bounds: [[59.97897017553444, 29.325706958770756], [59.975985528645346, 29.357442855834964], [59.97140067289649, 29.323282241821293]],
        author: ['DBRTSV_V','MKHLV_A','KUZNTSV_R'],
        owner: 'YUVNT',
        type: ['VELO']
    },

    // --- гидро-рельефные ---
    {
        name: 'Токсово, Оригон-1',
        url: './maps/relief/toksovo_origon_1.webp',
        link: './original_maps/relief/toksovo_origon_1_omaps.jpg',
        bounds: [[60.14966546452469, 30.491695404052734], [60.14599125046178, 30.532207489013675], [60.112605462220415, 30.483713150024418]],
        author: 'CHGRVSKY_V',
        type: ['RELIEF']
    },
    {
        name: 'Токсово, Оригон-2',
        url: './maps/relief/toksovo_origon_2.webp',
        link: './original_maps/relief/toksovo_origon_2_omaps.jpg',
        bounds: [[60.15978879045419, 30.39273262023926], [60.15295481948042, 30.51083564758301], [60.12744302199271, 30.385093688964847]],
        author: ['CHGRVSKY_V','AZBKNA','CHGRVSKY_Y'],
        type: ['RELIEF']
    },
    {
        name: 'Токсово, Оригон-3',
        year: 1985,
        url: './maps/relief/toksovo_origon_3.webp',
        link: './original_maps/relief/toksovo_origon_3_omaps.jpg',
        bounds: [[60.1929987287428, 30.610399246215824], [60.18988405654998, 30.66267013549805], [60.14872558837722, 30.599584579467777]],
        author: ['CHGRVSKY_V','AZBKNA','KLCHTSKA','RDKV','CHGRVSKY_Y'],
        type: ['RELIEF']
    },
    {
        name: 'Токсово, Малиновая гора',
        year: 1997,
        url: './maps/relief/toksovo_malinovaja_gora.webp',
        link: './original_maps/relief/toksovo_malinovaja_gora_1997_omaps.jpg',
        bounds: [[60.17729435692855, 30.464100837707523], [60.17454105065943, 30.501523017883304], [60.16414470541026, 30.460324287414554]],
        author: ['DBRTSV_V','CHGRVSKY_Y'],
        type: ['RELIEF']
    },
    {
        name: 'Первомайское',
        year: 2014,
        url: './maps/relief/pervomayskoe_2014.webp',
        bounds: [[60.42006003635948, 29.68827724456787], [60.418047435229944, 29.725184440612793], [60.40315031563834, 29.68389987945557]],
        author: ['SLBDNK','MKHLV_A','GVRLK'],
        owner: 'WN',
        type: ['RELIEF']
    },
    // прочие
    {
        name: 'Сосново, оз Уловное',
        year: 1981,
        excluded: true,
        info: 'Азимутный полигон.',
        url: './maps/forest/sosnovo/sosnovo_ulovnoe_oz_azimut_1981.webp',
        link: './original_maps/forest/sosnovo/sosnovo_ulovnoe_oz_azimut_1981_omaps.jpg',
        bounds: [[60.60481361919038, 30.215578079223636], [60.60237008387057, 30.25969505310059], [60.58469107484903, 30.21072864532471]],
        author: ['ARTMV','YKVLVA']
    },
];
