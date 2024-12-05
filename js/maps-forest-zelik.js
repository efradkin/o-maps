// types can be ORIENT, ROGAINE, SPRINT, CITY, RELIEF
let zelikMaps = [
    // --- ЗЕЛЕНОГОРСК - РОЩИНО - СЕСТРОРЕЦК ---
    {
        name: 'Рощино',
        year: 1990,
        url: './maps/forest/zelik/roschino_1990.webp',
        link: './original_maps/forest/zelik/roschino_1990_full.jpg',
        bounds: [[60.26962029715062, 29.525671005249027], [60.26872641818245, 29.572706222534183], [60.238618240342404, 29.520864486694336]],
        author: ['KRCHNKO_S','KRCHNKO_N'],
        types: ['ORIENT'],
    },
    {
        name: 'Серово',
        year: 1974,
        url: './maps/forest/zelik/serovo_1974.webp',
        link: './original_maps/forest/zelik/serovo_1974_full.jpg',
        bounds: [[60.237595694635125, 29.50309753417969], [60.23780872762262, 29.564123153686527], [60.20298075456985, 29.50387001037598]],
        types: ['ORIENT'],
    },
    {
        name: 'Смолячково',
        year: 1988,
        url: './maps/forest/zelik/smoljachkovo_1988.webp',
        link: './original_maps/forest/zelik/smoljachkovo_1988_full.jpg',
        bounds: [[60.20635006920181, 29.43795204162598], [60.20285279909322, 29.50284004211426], [60.18126383410184, 29.431171417236328]],
        author: 'BRDLN',
        types: ['ORIENT'],
    },
    {
        name: 'Сосновая поляна, р Рощинка',
        year: 2020,
        url: './maps/forest/zelik/sosnovaya_polyana_roschinka_2020.webp',
        link: './original_maps/forest/zelik/sosnovaya_polyana_roschinka_2020_full.jpg',
        bounds: [[60.22709145076332, 29.51356887817383], [60.22637755136808, 29.521915912628177], [60.219909127386956, 29.511723518371586]],
        author: 'LVCHV',
        types: ['ORIENT'],
    },
    {
        name: 'Песочная',
        year: 2005,
        url: './maps/forest/zelik/pesochnaya_2005.webp',
        link: './original_maps/forest/zelik/pesochnaya_2005_full.jpg',
        bounds: [[60.122654684605095, 30.111250877380375], [60.11705315601863, 30.18030166625977], [60.10689528234335, 30.10640144348145]],
        author: ['SHKLV','VSLVSKY','DRBSHV'],
        owner: 'SHKLV',
        types: ['ORIENT'],
    },
    {
        name: 'Ольгино',
        year: 1997,
        url: './maps/forest/zelik/olgino_1997.webp',
        link: './original_maps/forest/zelik/olgino_1997_full.jpg',
        bounds: [[60.06068557237958, 30.07490158081055], [60.055630467498005, 30.140132904052738], [60.023825535526576, 30.060739517211918]],
        author: ['BZNV_A','KRCHKN_V'],
        types: ['ORIENT'],
    },
    {
        name: 'Песочная',
        year: 1998,
        url: './maps/forest/zelik/pesochnaya_1998.webp',
        link: './original_maps/forest/zelik/pesochnaya_1998_full.jpg',
        bounds: [[60.12128646025379, 30.12837409973145], [60.11745940579484, 30.173993110656742], [60.10659584484433, 30.123052597045902]],
        author: ['VSLVSKY','DRBSHV'],
        types: ['ORIENT'],
    },
    {
        name: 'Солнечное, Дюны',
        year: 2007,
        url: './maps/forest/zelik/solnechnoe-djuny_2007.webp',
        bounds: [[60.148063386777785, 29.929761886596683], [60.14502990577005, 29.97053146362305], [60.130435379117884, 29.924783706665043]],
        author: 'SHRNN',
        owner: 'SFSO_SPB',
        types: ['ORIENT'],
    },
    {
        name: 'Симагино, юг',
        year: 1988,
        url: './maps/forest/zelik/simagino_south_1988.webp',
        link: './original_maps/forest/zelik/simagino_south_1988_full.jpg',
        bounds: [[60.26732170189634, 29.790716171264652], [60.2643843729839, 29.852600097656254], [60.24032241226889, 29.78479385375977]],
        types: ['ORIENT'],
    },
    {
        name: 'Симагино',
        year: 1988,
        url: './maps/forest/zelik/simagino_1988.webp',
        link: './original_maps/forest/zelik/simagino_1988_full.jpg',
        bounds: [[60.29263990581418, 29.78702545166016], [60.291066067917924, 29.839553833007816], [60.25765732238409, 29.783849716186527]],
        types: ['ORIENT'],
    },
    {
        name: 'Долгое оз',
        year: 1983,
        url: './maps/forest/zelik/dolgoe_north_1983.webp',
        link: './original_maps/forest/zelik/dolgoe_north_1983_full.jpg',
        bounds: [[60.31687594388387, 29.709520339965824], [60.31449565570198, 29.7520923614502], [60.292937650406586, 29.701967239379886]],
        author: 'KRCHNKO_S',
        types: ['ORIENT'],
    },
    {
        name: 'Симагино - Майнило',
        year: 2013,
        url: './maps/forest/zelik/simagino_maynilo_2013.webp',
        bounds: [[60.2838764935428, 29.879722595214847], [60.2777066636847, 29.956712722778324], [60.26046752431386, 29.87165451049805]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Репино',
        year: 1983,
        url: './maps/forest/zelik/repino_1983.webp',
        link: './original_maps/forest/zelik/repino_1983_full.jpg',
        bounds: [[60.21176583711235, 29.819898605346683], [60.208567657083265, 29.868822097778324], [60.191740095427, 29.814362525939945]],
        author: ['BKSTN','IVNV_V','PTRV_A','TNV','BLZRV_V'],
        types: ['ORIENT'],
    },
    {
        name: 'Зеленогорск',
        year: 1978,
        url: './maps/forest/zelik/zelenogorsk_1978.webp',
        link: './original_maps/forest/zelik/zelenogorsk_1978_full.jpg',
        bounds: [[60.19410799266949, 29.683556556701664], [60.191356095993605, 29.71810340881348], [60.18747318270969, 29.6821403503418]],
        author: ['KUZNTSV_S','KUZNTSVA_Z'],
        types: ['ORIENT'],
    },
    {
        name: 'Зеленогорск, Комаровский берег',
        url: './maps/forest/zelik/zelenogorsk_komarovsky_bereg.webp',
        link: './original_maps/forest/zelik/zelenogorsk_komarovsky_bereg_full.jpg',
        bounds: [[60.20033623997278, 29.729690551757816], [60.18583027344266, 29.80496406555176], [60.18941469676139, 29.723253250122074]],
        types: ['ORIENT'],
    },
    {
        name: 'Ильичёво',
        year: 1991,
        url: './maps/forest/zelik/ilychevo_1991.webp',
        link: './original_maps/forest/zelik/ilychevo_1991_full.jpg',
        bounds: [[60.27285508361015, 29.768657684326175], [60.271322856205195, 29.817838668823246], [60.24628631594441, 29.7645378112793]],
        author: ['HSMTLN'],
        types: ['ORIENT'],
    },
    {
        name: 'Ильичёво, оз Долгое',
        year: 1995,
        url: './maps/forest/zelik/ilychevo_dolgoe_1995.webp',
        link: './original_maps/forest/zelik/ilychevo_dolgoe_1995_full.jpg',
        bounds: [[60.310244709596496, 29.704971313476566], [60.30331448158006, 29.81174468994141], [60.272259225923726, 29.692783355712894]],
        author: ['KUZNTSV_S','KVZN'],
        types: ['ORIENT'],
    },
    {
        name: 'Зеленогорск - Комарово',
        year: 1985,
        url: './maps/forest/zelik/zelenogorsk_komarovo_1985.webp',
        link: './original_maps/forest/zelik/zelenogorsk_komarovo_1985_full.jpg',
        bounds: [[60.24645669723733, 29.76522445678711], [60.22140113412978, 29.890537261962894], [60.20059217005553, 29.727458953857425]],
        author: 'KUZNTSV_S',
        types: ['ORIENT'],
    },
    {
        name: 'Зеленогорск, оз Щучье',
        year: 1982,
        url: './maps/forest/zelik/zelenogorsk_schuchye_1982.webp',
        link: './original_maps/forest/zelik/zelenogorsk_schuchye_1982_full.jpg',
        bounds: [[60.23435742267945, 29.74780082702637], [60.23239726048873, 29.79380607604981], [60.202724843117544, 29.742393493652347]],
        types: ['ORIENT'],
    },
    {
        name: 'Зеленогорск, оз Щучье',
        year: 2005,
        url: './maps/forest/zelik/zelenogorsk_schuchye_2005.webp',
        link: './original_maps/forest/zelik/zelenogorsk_schuchye_2005_full.jpg',
        bounds: [[60.2306926763174, 29.74059104919434], [60.22805039562937, 29.803075790405277], [60.20319401258867, 29.735183715820316]],
        author: ['BYMKV','KUZNTSV_S','SHRNN','VSLVSKY'],
        types: ['ORIENT'],
    },
    {
        name: 'Зеленогорск, оз Щучье',
        year: 2011,
        url: './maps/forest/zelik/zelenogorsk_schuchye_2011.webp',
        bounds: [[60.23789394042978, 29.747972488403324], [60.23252510072741, 29.815092086791996], [60.20374847695044, 29.736213684082035]],
        author: ['SHRNN'],
        types: ['ORIENT'],
    },
    {
        name: 'Зеленогорск - Комарово',
        year: 1992,
        url: './maps/forest/zelik/zelenogorsk_komarovo_1992.webp',
        link: './original_maps/forest/zelik/zelenogorsk_komarovo_1992_full.jpg',
        bounds: [[60.217521775369605, 29.73810195922852], [60.21257599321435, 29.803161621093754], [60.1930413934332, 29.728660583496097]],
        author: 'BYMKV',
        types: ['ORIENT'],
    },
    {
        name: 'Зеленогорск, "Прибой"',
        year: 1992,
        url: './maps/forest/zelik/zelenogorsk_priboy_1992.webp',
        link: './original_maps/forest/zelik/zelenogorsk_priboy_1992_full.jpg',
        bounds: [[60.22736848216193, 29.720420837402347], [60.22250943804349, 29.776210784912113], [60.19709428614133, 29.71140861511231]],
        author: 'BYMKV',
        types: ['ORIENT'],
    },
    {
        name: 'Зеленогорск, оз Щучье',
        year: 2021,
        url: './maps/forest/zelik/zelenogorsk_priboy_2021.webp',
        bounds: [[60.22702752010804, 29.745526313781742], [60.22255206436886, 29.79753971099854], [60.203535222535606, 29.73711490631104]],
        types: ['ORIENT'],
    },
    {
        name: 'Зеленогорск, оз Красавица',
        year: 1998,
        url: './maps/forest/zelik/krasavitsa_1998.webp',
        link: './original_maps/forest/zelik/krasavitsa_1998_full.jpg',
        bounds: [[60.257614741711635, 29.733681678771976], [60.254357156086634, 29.789385795593265], [60.235550507476816, 29.729218482971195]],
        info: 'Первая карта Константина Токмакова',
        author: 'TKMKV_K',
        owner: 'TOKM',
        types: ['ORIENT'],
    },
    {
        name: 'Зеленогорск, Дружинное оз',
        year: 1995,
        url: './maps/forest/zelik/zelenogorsk_chertovo_oz_1995.webp',
        link: './original_maps/forest/zelik/zelenogorsk_chertovo_oz_1995_full.jpg',
        bounds: [[60.240024188580975, 29.76204872131348], [60.2312892908627, 29.77380752563477], [60.23047959706192, 29.734926223754886]],
        types: ['ORIENT'],
    },
    {
        name: 'Зеленогорск, Дружинное оз',
        year: 2002,
        url: './maps/forest/zelik/zelenogorsk_druzhinnoe_2002.webp',
        link: './original_maps/forest/zelik/zelenogorsk_druzhinnoe_2002_full.jpg',
        bounds: [[60.238213486482735, 29.735012054443363], [60.235571812167706, 29.771876335144047], [60.219290990416546, 29.729990959167484]],
        author: ['VLKV_K','URVNTSV'],
        types: ['ORIENT'],
    },
    {
        name: 'Зеленогорск, Дружинное оз',
        year: 2024,
        url: './maps/forest/zelik/zelenogorsk_druzhinnoe_2024.webp',
        link: './original_maps/forest/zelik/zelenogorsk_druzhinnoe_2024_full.jpg',
        bounds: [[60.24373049018684, 29.735698699951175], [60.24040761853822, 29.776124954223636], [60.21909915243553, 29.72582817077637]],
        author: 'RDNV_I',
        owner: 'RDNV_I',
        types: ['ORIENT'],
    },
    {
        name: 'Зеленогорск, оз Щучье',
        year: 2020,
        url: './maps/forest/zelik/zelenogorsk_schuchye_2020.webp',
        bounds: [[60.236061816234596, 29.751405715942386], [60.23188589454682, 29.802045822143555], [60.21816126170426, 29.745655059814457]],
        author: 'MKHLV_A',
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Зеленогорск, Чёрные оз',
        year: 1995,
        url: './maps/forest/zelik/zelenogorsk_chernye_1995.webp',
        link: './original_maps/forest/zelik/zelenogorsk_chernye_1995_full.jpg',
        bounds: [[60.24688264659181, 29.75707054138184], [60.240918851500375, 29.81972694396973], [60.21730861048657, 29.74428176879883]],
        author: ['HSMTLN','BYMKV'],
        types: ['ORIENT'],
    },
    {
        name: 'Зеленогорск, Чёрные оз',
        year: 2023,
        url: './maps/forest/zelik/zelenogorsk_chernye_2023.webp',
        bounds: [[60.248330832960995, 29.778871536254886], [60.244284269358644, 29.813632965087894], [60.22400132645466, 29.766941070556644]],
        author: 'MKHLV_A',
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Горки, Ильичёвское оз',
        year: 2012,
        url: './maps/forest/zelik/gorki_2012.webp',
        bounds: [[60.299976393309244, 29.73282337188721], [60.297488551644776, 29.772391319274906], [60.286322827937596, 29.728789329528812]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Ильичёво',
        url: './maps/forest/zelik/ilychevo.webp',
        bounds: [[60.278238591412865, 29.75681304931641], [60.27657894829296, 29.77874279022217], [60.26144678042457, 29.751448631286625]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Ильичёво',
        year: 2016,
        url: './maps/forest/zelik/ilychevo_2016.webp',
        bounds: [[60.28336593110846, 29.738445281982422], [60.280472593413364, 29.775094985961918], [60.270577997519666, 29.734282493591312]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Ильичёво - Симагино',
        year: 2015,
        url: './maps/forest/zelik/ilychevo-simagino_2015.webp',
        bounds: [[60.29246976482949, 29.792947769165043], [60.28749274926003, 29.86719131469727], [60.24356009471195, 29.772605895996097]],
        author: ['KUZNTSV_S','SHRNN'],
        owner: 'SFSO_SPB',
        types: ['ORIENT'],
    },
    {
        name: 'Комарово-Ленинское',
        year: 2009,
        url: './maps/forest/zelik/komarovo_leninskoe_2009.webp',
        bounds: [[60.235720944615956, 29.796209335327152], [60.232162885422525, 29.831614494323734], [60.20918599620558, 29.790115356445316]],
        author: ['VSLVSKY','DRBSHV'],
        types: ['ORIENT'],
    },
    {
        name: 'Комарово',
        year: 1990,
        url: './maps/forest/zelik/komarovo_1990.webp',
        link: './original_maps/forest/zelik/komarovo_1990_full.jpg',
        bounds: [[60.18559556540752, 29.80496406555176], [60.175245406790275, 29.856591224670414], [60.17349516066162, 29.794921875000004]],
        author: ['SHRNN','FDRV_L'],
        types: ['ORIENT'],
    },
    {
        name: 'Комарово',
        year: 2013,
        url: './maps/forest/zelik/komarovo_2013.webp',
        bounds: [[60.1815839323226, 29.805693626403812], [60.17895903480163, 29.855604171752933], [60.168243862694155, 29.802217483520508]],
        author: ['SHRNN','ZNDR'],
        types: ['ORIENT'],
    },
    {
        name: 'Рощино',
        url: './maps/forest/zelik/roschino.webp',
        bounds: [[60.28506777489139, 29.588584899902347], [60.284004132905885, 29.64145660400391], [60.26561893464418, 29.586868286132816]],
        types: ['ORIENT'],
    },
    {
        name: 'Рощино',
        year: 2009,
        url: './maps/forest/zelik/roschino_2009.webp',
        bounds: [[60.27634488928318, 29.564423561096195], [60.27542991526678, 29.601931571960453], [60.263298771665085, 29.562621116638187]],
        types: ['ORIENT'],
    },
    {
        name: 'Пухтолова гора',
        year: 2009,
        url: './maps/forest/zelik/pukhtolova_gora_2009.webp',
        bounds: [[60.24266550392609, 29.629054069519047], [60.23987507571899, 29.678277969360355], [60.22879622224008, 29.625406265258793]],
        types: ['ORIENT'],
    },
    {
        name: 'Пухтолова гора',
        year: 2017,
        url: './maps/forest/zelik/pukhtolova_gora_2023.webp',
        bounds: [[60.241919992941305, 29.645104408264164], [60.238937779331096, 29.682226181030277], [60.22871098577209, 29.641027450561527]],
        author: 'MKHLV_A',
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Озерки',
        year: 2022,
        url: './maps/forest/zelik/ozerki_2022.webp',
        bounds: [[60.3206797942916, 29.690594673156742], [60.317279725561335, 29.725527763366703], [60.30023154584922, 29.682269096374515]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Линдуловская роща',
        year: 2022,
        url: './maps/forest/zelik/lindulovskaya_roscha_2015.webp',
        bounds: [[60.256592788957555, 29.525198936462406], [60.25563467927723, 29.542450904846195], [60.23919340827815, 29.52185153961182]],
        author: 'RDNV_I',
        owner: 'RDNV_I',
        types: ['ORIENT'],
    },
    {
        name: 'Серово',
        year: 2024,
        url: './maps/forest/zelik/serovo_2024.webp',
        link: './original_maps/forest/zelik/serovo_2024_full.jpg',
        bounds: [[60.22357507955077, 29.56154823303223], [60.216328034176136, 29.63192939758301], [60.19760619488179, 29.550390243530277]],
        author: 'RDNV_I',
        owner: 'RDNV_I',
        types: ['ORIENT'],
    },
    {
        name: 'Старый Белоостров',
        url: './maps/forest/zelik/old_beloostrov.webp',
        bounds: [[60.2153687463682, 30.034604072570804], [60.21325821440992, 30.064344406127933], [60.20507062338418, 30.03121376037598]],
        types: ['ORIENT'],
        zindex: 2
    },
    {
        name: 'Белоостров - Удачное',
        year: 2007,
        url: './maps/forest/zelik/beloostrov_udachnoe_2007.webp',
        bounds: [[60.22464068641878, 29.95207786560059], [60.21820389368313, 30.0322437286377], [60.20370582617838, 29.947957992553714]],
        author: ['RYLOV_V','SHRNN'],
        types: ['ORIENT'],
    },
    {
        name: 'Белоостров - Удачное',
        year: 2024,
        url: './maps/forest/zelik/beloostrov_udachnoe_2024.webp',
        link: './original_maps/forest/zelik/beloostrov_udachnoe_2024_full.jpg',
        author: ['RYLOV_V','SHRNN','RDNV_I'],
        bounds: [[60.22485380363574, 29.951906204223636], [60.2185449475187, 30.032415390014652], [60.203663175350826, 29.946155548095707]],
        owner: 'RDNV_I',
        types: ['ORIENT'],
    },
    {
        name: 'Сестрорецкие Дюны',
        year: 2022,
        url: './maps/forest/zelik/sestroretskie_djuny_2022.webp',
        bounds: [[60.12961250803307, 29.93980407714844], [60.127464396937015, 29.959931373596195], [60.122676062659345, 29.937036037445072]],
        author: ['TKMKV_K','TKMKVA_P','IVNVA_G','KVZN'],
        owner: 'SFSO_SPB',
        types: ['ORIENT'],
    },
    {
        name: 'Сестрорецк, Детские Дюны',
        year: 2010,
        url: './maps/forest/zelik/sestroretskie_detskie_djuny_2010.webp',
        bounds: [[60.122654684605095, 29.95677709579468], [60.12225918809719, 29.97254848480225], [60.11693555646363, 29.956262111663822]],
        author: 'SHRNN',
        types: ['ORIENT'],
    },
    {
        name: 'Сестрорецк, Дюны, ТЭЦ',
        url: './maps/forest/zelik/sestroretskie_djuny_tets.webp',
        bounds: [[60.12783845621518, 29.957206249237064], [60.12702620780377, 29.967741966247562], [60.12243021419727, 29.955425262451175]],
        author: 'SHRNN',
        owner: 'SHRNN',
        types: ['ORIENT'],
    },
    {
        name: 'Сестрорецк, Ласковый пляж',
        year: 2023,
        url: './maps/forest/zelik/sestroretsk_pljazh_laskovy_2023.webp',
        bounds: [[60.14590579873828, 29.92581367492676], [60.14403648673156, 29.94210004806519], [60.13880184782073, 29.922959804534912]],
        author: 'KUZNTSV_A',
        owner: 'SFSO_SPB',
        types: ['ORIENT'],
    },
    {
        name: 'Тарховка',
        year: 1987,
        url: './maps/forest/zelik/tarkhovka_1987.webp',
        link: './original_maps/forest/zelik/tarkhovka_1987_full.jpg',
        bounds: [[60.073234306818485, 29.946198463439945], [60.07207813845158, 29.97581005096436], [60.05882212806155, 29.942722320556644]],
        author: 'BBNN_I',
        types: ['ORIENT'],
    },
    {
        name: 'Тарховка',
        year: 1980,
        url: './maps/forest/zelik/tarkhovka_1980.webp',
        link: './original_maps/forest/zelik/tarkhovka_1980_full.jpg',
        bounds: [[60.07237788969751, 29.945511817932132], [60.07150003907007, 29.974865913391117], [60.058950644841026, 29.944224357604984]],
        author: 'VLKV_K',
        types: ['ORIENT'],
    },
    {
        name: 'Лисий Нос - Лахта',
        year: 1986,
        url: './maps/forest/zelik/lisy_nos_1986.webp',
        link: './original_maps/forest/zelik/lisy_nos_1986_full.jpg',
        bounds: [[60.010678843334446, 30.013790130615238], [60.006281148244774, 30.071082115173343], [59.999372368285684, 30.009799003601078]],
        author: ['FRSHLVA','FRSHLV'],
        types: ['ORIENT'],
    },
    {
        name: 'Сестрорецк, Таможенная дорога',
        year: 2012,
        url: './maps/forest/zelik/sestroretsk_tamozhennaya_doroga_2012.webp',
        bounds: [[60.14058599180651, 29.95044708251953], [60.13898347169249, 29.967741966247562], [60.12789189290783, 29.946713447570804]],
        author: 'SHRNN',
        types: ['ORIENT'],
    },
    {
        name: 'Воронцовское',
        year: 2014,
        url: './maps/forest/zelik/vorontsovskoe_2014.webp',
        bounds: [[60.31942606014921, 29.888219833374027], [60.316620921304846, 29.93233680725098], [60.29600000881975, 29.882726669311527]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Воронцовское',
        year: 2013,
        url: './maps/forest/zelik/vorontsovskoe_2013.webp',
        bounds: [[60.32010605752227, 29.86916542053223], [60.315983356144905, 29.93182182312012], [60.29442633269142, 29.862041473388675]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Воронцовское - Симагино',
        year: 2016,
        url: './maps/forest/zelik/vorontsovskoe_simagino_2016.webp',
        bounds: [[60.299827553407624, 29.864101409912113], [60.294086068431916, 29.944524765014652], [60.277876881498834, 29.858350753784183]],
        author: ['MKHLV_A','SLBDNK','USNKO'],
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Пасторское-Медное оз',
        year: 2009,
        url: './maps/forest/zelik/pastorskoe_mednoe_2009.webp',
        link: './original_maps/forest/zelik/pastorskoe_mednoe_2009_full.jpg',
        bounds: [[60.24965118236976, 30.009841918945316], [60.2356783354143, 30.175838470458988], [60.21138207197383, 29.996194839477543]],
        author: 'CHGRVSKY_V',
        owner: 'CHGRVSKY_M',
        types: ['ORIENT'],
    },
    {
        name: 'Пасторское оз',
        year: 2024,
        url: './maps/forest/zelik/pastorskoe_2024.webp',
        bounds: [[60.25263242070603, 29.988126754760746], [60.24522141278221, 30.060052871704105], [60.22809301475002, 29.97756958007813]],
        owner: 'SFSO_SPB',
        types: ['ORIENT'],
        zindex: 2
    },
    {
        name: 'Молодёжное',
        year: 2003,
        url: './maps/forest/zelik/molodezhnoe_2003.webp',
        link: './original_maps/forest/zelik/molodezhnoe_2003_full.jpg',
        bounds: [[60.203002080434125, 29.531786441802982], [60.20167985063764, 29.54835176467896], [60.19703029698733, 29.530413150787357]],
        types: ['ORIENT'],
    },
];