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
        logo: 'ski_retro.gif',
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
        logo: 'ski_retro.gif',
        qtty: 10
    },
    {
        name: 'Силанде',
        date: '2024-01-21',
        url: './maps/winter/silande_winter_2024.webp',
        link: './original_maps/winter/silande_winter_2024_omaps.gif',
        bounds: [[60.415547399347886, 30.25016784667969], [60.41292003592953, 30.283727645874027], [60.39151183234099, 30.2409839630127]],
        owner: 'SFSO_SPB',
        type: ['WINTER']
    },
    {
        name: 'Лемболово',
        date: '2019-01-08', // карта явно более ранняя
        url: './maps/winter/lembolovo_winter_2019.webp',
        link: './original_maps/winter/lembolovo_winter_2019_omaps.jpg',
        bounds: [[60.42351294603261, 30.3063440322876], [60.420420172898, 30.34084796905518], [60.40628711821687, 30.30089378356934]],
        author: ['DBRTSV_V','CHGRVSKY_Y'], //Возможно и Баймакова, надо уточнить
        type: ['WINTER']
    },
    {
        name: 'Орехово, Лемболово',
        year: 1986,
        url: './maps/winter/orekhovo_lembolovo_winter_1986.webp',
        link: './original_maps/winter/orekhovo_lembolovo_winter_1986_omaps.jpg',
        bounds: [[60.473041927987076, 30.27694702148438], [60.46627319069453, 30.38578033447266], [60.419954113089155, 30.263385772705078]],
        author: 'BYMKV',
        logo: 'winter_retro.gif',
        type: ['WINTER']
    },
    {
        name: 'Орехово, оз Нырково',
        year: 2012,
        url: './maps/winter/orekhovo_nyrkovo_winter_2012.webp',
        link: './original_maps/winter/orekhovo_nyrkovo_winter_2012_omaps.jpeg',
        bounds: [[60.4759605103226, 30.297954082489017], [60.47338032779795, 30.334196090698246], [60.451101863173875, 30.29010057449341]],
        author: 'TKMKV_K',
        owner: 'SFSO_SPB',
        type: ['WINTER']
    },
    {
        name: 'Орехово',
        year: 2010,
        url: './maps/winter/orekhovo_winter_2010.webp',
        link: './original_maps/winter/orekhovo_winter_2010_omaps.jpg',
        bounds: [[60.460666761529005, 30.279736518859867], [60.45687922940639, 30.326771736145023], [60.44310073619961, 30.274243354797367]],
        author: ['KVZN','NSNV'],
        type: ['WINTER'],
        owner: 'SFSO_SPB'
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
        name: 'Сярьги',
        year: 1985,
        url: './maps/winter/siargi_winter_1985.webp',
        link: './original_maps/winter/siargi_winter_1985_omaps.jpg',
        bounds: [[60.15902003964619, 30.405178070068363], [60.15167329174536, 30.532035827636722], [60.114786617903576, 30.39530754089356]],
        author: ['CHGRVSKY_V','CHGRVSKY_Y'],
        editor: 'FDRV_N',
        logo: 'winter_retro.gif',
        type: ['WINTER'],
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
        name: 'Кузьмолово',
        year: 2023,
        info: 'Тренировочный полигон Федерации ориентирования СПб.',
        o_site: '2301_poligon',
        url: './maps/winter/kuzmolovo_poligon_2023.webp',
        link: './original_maps/winter/kuzmolovo_poligon_2023_omaps.gif',
        bounds: [[60.12952701375337, 30.508496761322025], [60.12816976231101, 30.53508281707764], [60.112081535659236, 30.504527091979984]],
        author: ['KVZN','TKMKV_K'],
        owner: 'SFSO_SPB',
        type: ['WINTER']
    },
    {
        name: 'Токсово, ВИФК',
        date: '2023-02-09',
        url: './maps/winter/toksovo_vifk_winter_2023.webp',
        link: './original_maps/winter/toksovo_vifk_winter_2023_omaps.jpg',
        info: 'Первенство России.',
        o_site: '230213',
        bounds: [[60.193233383853695, 30.560145378112797], [60.18962804295176, 30.59679508209229], [60.18021815816931, 30.554866790771488]],
        author: 'CHGRVSKY_Y',
        type: ['WINTER']
    },
    {
        name: 'Токсово, Школьное оз',
        date: '2013-02-16',
        url: './maps/winter/toksovo_shkolnoe_winter_2013.webp',
        link: './original_maps/winter/toksovo_shkolnoe_winter_2013_omaps.jpg',
        info: 'Первенство СПб.',
        bounds: [[60.147059378270846, 30.572462081909183], [60.1445171771102, 30.602331161499027], [60.136697074515965, 30.568556785583496]],
        owner: 'SFSO_SPB',
        type: ['WINTER']
    },
    {
        name: 'Всеволожск, Колтуши',
        year: 1,
        url: './maps/winter/vsevolozhsk_old_winter.webp',
        link: './original_maps/winter/vsevolozhsk_old_winter_omaps.jpg',
        bounds: [[60.003706616324685, 30.613918304443363], [60.001646846489315, 30.717515945434574], [59.944566008164585, 30.60945510864258]],
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
        name: 'Зеркальный, Тарасовское',
        date: '2023-02-05',
        url: './maps/winter/zerkalny_tarasovskoe_winter_2023.webp',
        link: './original_maps/winter/zerkalny_tarasovskoe_winter_2023_omaps.gif',
        bounds: [[60.25993530761828, 29.112052917480472], [60.25676311663197, 29.154882431030277], [60.24515751749144, 29.106817245483402]],
        owner: 'SFSO_SPB',
        type: ['WINTER']
    },
    {
        name: 'Зеркальный',
        date: '2024-02-15',
        url: './maps/winter/zerkalny_winter_2024.webp',
        link: './original_maps/winter/zerkalny_winter_2024_omaps.jpg',
        bounds: [[60.24515751749144, 29.137887954711918], [60.2447741431293, 29.15732860565186], [60.236061816234596, 29.137501716613773]],
        type: ['WINTER']
    },
    {
        name: 'Будогощь, оз Светлое',
        year: 2024,
        url: './maps/winter/budogosch_svetloe_winter_2024.webp',
        link: './original_maps/winter/budogosch_svetloe_winter_2024_omaps.gif',
        bounds: [[59.28447396887775, 32.348299026489265], [59.28138309112493, 32.381472587585456], [59.273665632447134, 32.34443664550782]],
        owner: 'EGRV_SRG',
        type: ['WINTER']
    },
    {
        name: 'Будогощь, Орлёнок',
        excluded: true,
        year: 2009,
        url: './maps/winter/budogosch_orlenok_winter_2009.webp',
        link: './original_maps/winter/budogosch_orlenok_winter_2009_omaps.gif',
        bounds: [[59.311775487837515, 32.419924736022956], [59.30735088677822, 32.469363212585456], [59.2950378289487, 32.41451740264893]],
        author: 'KRTSHV',
        owner: 'EGRV_SRG',
        type: ['WINTER'],
        zindex: 2
    },
    {
        name: 'Кириши, лыжная трасса Пушка',
        excluded: true,
        year: 2008,
        url: './maps/winter/kirishi_pushka_2008.webp',
        link: './original_maps/winter/kirishi_pushka_2008_omaps.gif',
        bounds: [[59.44138788921422, 32.04626083374024], [59.43798395415987, 32.072868347167976], [59.4312187076711, 32.04325675964356]],
        owner: 'EGRV_SRG',
        zindex: 2,
        type: ['WINTER']
    },
    {
        name: 'Кириши, лыжная трасса',
        year: 2024,
        url: './maps/winter/kirishi_ski_track_2024.webp',
        link: './original_maps/winter/kirishi_ski_track_2024_omaps.gif',
        bounds: [[59.44023146251266, 31.985664367675785], [59.43905317578189, 32.00201511383057], [59.42154860449208, 31.97957038879395]],
        author: 'TKMKV_K',
        owner: 'EGRV_SRG',
        type: ['WINTER'],
        zindex: 2
    },
    {
        name: 'Сосновка, лыжный полигон',
        year: 2024,
        url: './maps/winter/sosnovka_winter_2024.webp',
        o_site: 'poligon2025',
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
        name: 'Полюстровский парк',
        year: 2026,
        url: './maps/winter/polustrovsky_park_winter_2026.webp',
        link: './original_maps/winter/polustrovsky_park_winter_2026_omaps.gif',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/24152/',
        bounds: [[59.96878047030928, 30.42071342468262], [59.96811464809843, 30.43294429779053], [59.963346110798675, 30.41895389556885]],
        author: 'RDNV_I',
        owner: 'RDNV_I',
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
        link: './original_maps/winter/anyalovo_winter_2023_omaps.gif',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/18157/',
        bounds: [[60.312582798414866, 30.499763488769535], [60.30854417624976, 30.537958145141605], [60.29933850324382, 30.49461364746094]],
        author: ['TKMKV_K','KVZN'],
        owner: 'SFSO_SPB',
        type: ['WINTER']
    },
    {
        name: 'Шапки',
        year: 2019,
        url: './maps/winter/shapki_winter_2019.webp',
        link: './original_maps/winter/shapki_winter_2019_omaps.jpg',
        bounds: [[59.59751217494185, 31.17151737213135], [59.59807684392958, 31.209154129028324], [59.584370083656665, 31.172375679016117]],
        author: 'YUDNTSV',
        type: ['WINTER']
    },
    {
        name: 'Гатчина, парк Зверинец',
        hidden: true,
        url: './maps/winter/gatchina_zverinets_winter.webp',
        bounds: [[59.587737555103494, 30.093741416931156], [59.5885413532801, 30.117602348327637], [59.57226612908946, 30.095458030700687]],
        owner: 'PNKV_DNL',
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
        name: 'Пасторское оз',
        year: 2007,
        url: './maps/velo/pastorskoe_velo_2007.webp',
        link: './original_maps/velo/pastorskoe_velo_2007_omaps.jpg',
        bounds: [[60.2504178124367, 30.02022743225098], [60.24326190049794, 30.09060859680176], [60.22510954246718, 30.00924110412598]],
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
        name: 'Зеленогорск, Красавица',
        url: './maps/velo/zelik_krasavitsa_velo.webp',
        link: './original_maps/velo/zelik_krasavitsa_velo_omaps.jpg',
        bounds: [[60.25629471339503, 29.732522964477543], [60.25318604937096, 29.788656234741214], [60.234847444906805, 29.725956916809086]],
        author: 'TKMKV_K',
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
        excluded: true,
        date: '2008-04-27',
        url: './maps/velo/sestroretsk_tamozhennaya_doroga_velo_2008.webp',
        link: './original_maps/velo/sestroretsk_tamozhennaya_doroga_velo_2008_omaps.jpg',
        info: 'Кубок MTBO SPb Club.',
        o_site: '080427_mtbo',
        bounds: [[60.13906894140282, 29.937357902526855], [60.13716718784788, 29.963471889495853], [60.12769952040817, 29.934654235839844]],
        author: 'SHRNN',
        type: ['VELO'],
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
        name: 'Сосново, Чёрный лес',
        date: '2006-06-03',
        info: 'ЧиП СПб.',
        o_site: '06060203_MTB',
        url: './maps/velo/sosnovo_black_forest_velo_2006.webp',
        link: './original_maps/velo/sosnovo_black_forest_velo_2006_omaps.jpg',
        bounds: [[60.54060948889669, 30.245404243469242], [60.53754896728843, 30.31840324401856], [60.49623529328182, 30.239310264587406]],
        type: ['VELO']
    },
    {
        name: '69км, ДНТ "Свердловец", Осиновское оз',
        year: 2021,
        info: '210605_MTBO_klass.',
        o_site: '210605_MTBO_klass',
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
        info: 'BondCup.',
        o_site: '210612v',
        url: './maps/velo/losevo_velo_2021.webp',
        link: './original_maps/velo/losevo_velo_2021_omaps.jpg',
        bounds: [[60.688393111084736, 29.930491447448734], [60.68360256619192, 29.980359077453617], [60.67172818532179, 29.923496246337894]],
        type: ['VELO']
    },
    {
        name: 'Сосново, оз Уловное',
        year: 2021,
        info: 'BondCup.',
        o_site: '210619_mtbo',
        url: './maps/velo/sosnovo_ulovnoe_velo_2021.webp',
        link: './original_maps/velo/sosnovo_ulovnoe_velo_2021_omaps.jpg',
        bounds: [[60.60630914007171, 30.22321701049805], [60.60376039388934, 30.259094238281254], [60.582056305824665, 30.215749740600586]],
        type: ['VELO']
    },
    {
        name: 'Лемболово',
        year: 2019,
        excluded: true,
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
        info: 'ЧиП СПб, эстафеты.',
        o_site: '251011_velo',
        bounds: [[60.41546264900147, 30.323510169982914], [60.41575927424778, 30.339903831481937], [60.40323509806197, 30.319733619689945]],
        type: ['VELO'],
        author: ['TKMKV_K','KUZNTSV_R'],
        owner: 'SFSO_SPB'
    },
    {
        name: 'Лемболово, восток',
        date: '2007-06-28',
        url: './maps/velo/lembolovo_russia_2007.webp',
        link: './original_maps/velo/lembolovo_russia_2007_omaps.jpg',
        info: 'MTBO Чемпионат России.',
        major: true,
        bounds: [[60.445662157954466, 30.319519042968754], [60.44214808981624, 30.381145477294925], [60.40197393671737, 30.308167934417728]],
        type: ['VELO'],
        region: 'SPB'
    },
    {
        name: 'Силанде',
        date: '2005-07-23',
        url: './maps/velo/silande_velo_2005.webp',
        link: './original_maps/velo/silande_velo_2005_omaps.jpg',
        info: 'ЧиП СПб.',
        o_site: '05072324_mtbo',
        bounds: [[60.40622353738314, 30.247893333435062], [60.40518503284648, 30.281238555908207], [60.37986918738144, 30.24270057678223]],
        type: ['VELO'],
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
        owner: 'YUVENTA',
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
        year: 1,
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
    {
        name: 'Лемболово, с-в',
        excluded: true,
        year: 1989,
        url: './maps/relief/lembolovo_north_east_relief_1989.webp',
        link: './original_maps/relief/lembolovo_north_east_relief_1989_omaps.jpg',
        bounds: [[60.44701687789359, 30.30509948730469], [60.44210574932872, 30.380029678344727], [60.420081220972136, 30.297975540161136]],
        author: ['BYMKV','SMRNV_A','KCHTV','IVNV_A','TLNV_A','OSTPNK','EGRV_E'],
        areas: [62,20,10,5,1,1,1],
        type: ['RELIEF']
    },
    {
        name: 'Юкки',
        excluded: true,
        year: 1988,
        url: './maps/relief/yukki_relief_1988.webp',
        link: './original_maps/relief/yukki_relief_1988_omaps.jpg',
        bounds: [[60.133854882662625, 30.267848968505863], [60.12970868883226, 30.34629821777344], [60.11033861792823, 30.262269973754886]],
        author: ['SHLKHN_Y','BZNV_A'],
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
