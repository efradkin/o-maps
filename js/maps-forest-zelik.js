// types can be ROGAINE, SPRINT, CITY, RELIEF
let zelikMaps = [
    // --- ЗЕЛЕНОГОРСК - РОЩИНО - СЕСТРОРЕЦК ---
    {
        name: 'Симагино',
        year: 1977,
        url: './maps/forest/zelik/simagino_1977.webp',
        link: ['./original_maps/forest/zelik/simagino_1977_omaps.jpg','./original_maps/forest/zelik/simagino_retro_omaps.jpg'],
        info: 'Многодневные сорвнования. Лен.обл.совет ДСО "Труд"',
        author: ['SRGV','TRNTV_V'],
        bounds: [[60.287407665484366, 29.796380996704105], [60.29013023649271, 29.867019653320316], [60.260935867848005, 29.79852676391602]]
    },
    {
        name: 'Рощино, Линдуловская роща',
        year: 1971,
        info: 'По инициативе Н.В.Благово в районе пос.Рощино проведены первые массовые соревнования "<a href="https://o-site.spb.ru/history/History/wn.html">Белые Ночи</a>". Организаторами их были Л.Милова и Л.Фомичева, главный судья - А.Прохоров. Первые места в группе "A" заняли З.Пятакова и С.Крылов. <a href="./docs/1971/1971_06_12_wn_omaps.pdf">Протоколы результатов</a>.',
        logo: 'wn_1971.gif',
        url: './maps/forest/zelik/roschino_1971_wn.webp',
        link: './original_maps/forest/zelik/roschino_1971_wn_omaps.jpg',
        start: 'WN',
        bounds: [[60.27362117040428, 29.493484497070316], [60.27425956236299, 29.56403732299805], [60.238320001141126, 29.493827819824222]],
    },
    {
        name: 'Решетниково',
        year: 1972,
        info: 'Первенство Ленинграда',
        logo: 'chip_1972.jpg',
        url: './maps/forest/zelik/reshetnikovo_1972.webp',
        link: './original_maps/forest/zelik/reshetnikovo_1972_M_omaps.jpg',
        author: ['SRGV','TRNTV_V'],
        bounds: [[60.26561893464418, 29.685487747192383], [60.26515065811729, 29.74685668945313], [60.236999194901045, 29.685058593750004]]
    },
    {
        name: 'Решетниково, Ловецкое оз',
        year: 1979,
        url: './maps/forest/zelik/reshetnikovo_1979.webp',
        link: './original_maps/forest/zelik/reshetnikovo_1979_omaps.jpg',
        author: ['SRGV','TRNTV_V'],
        bounds: [[60.27755772237068, 29.71282482147217], [60.266853449734135, 29.733467102050785], [60.263064617640104, 29.68239784240723]]
    },
    {
        name: 'Решетниково, Ловецкое оз',
        year: 2025,
        url: './maps/forest/zelik/lovetskoe_2025.webp',
        link: './original_maps/forest/zelik/lovetskoe_2025_omaps.gif',
        author: 'RDNV_I',
        bounds: [[60.27349349051767, 29.69561576843262], [60.27130157476378, 29.720420837402347], [60.25478300268887, 29.687461853027347]],
        gps: 'https://viewer.o-gps-center.ru/viewer/event/23863/'
    },
    {
        name: 'Рощино',
        year: 1990,
        url: './maps/forest/zelik/roschino_1990.webp',
        link: './original_maps/forest/zelik/roschino_1990_omaps.jpg',
        bounds: [[60.26962029715062, 29.525671005249027], [60.26872641818245, 29.572706222534183], [60.238618240342404, 29.520864486694336]],
        author: ['KRCHNKO_S','KRCHNKO_N']
    },
    {
        name: 'Рощино',
        year: 1999,
        url: './maps/forest/zelik/roschino_1999.webp',
        link: './original_maps/forest/zelik/roschino_1999_omaps.jpg',
        bounds: [[60.2687689844013, 29.526443481445312], [60.268130485304354, 29.561891555786136], [60.23870345104413, 29.521250724792484]],
        author: ['KRCHNKO_S','FDRV_L','FDRV_A']
    },
    {
        name: 'Ушково',
        year: 1,
        url: './maps/forest/zelik/ushkovo_old.webp',
        link: './original_maps/forest/zelik/ushkovo_old_omaps.jpg',
        bounds: [[60.24296370356934, 29.553909301757816], [60.2409827550597, 29.599442481994632], [60.2138764651104, 29.549489021301273]]
    },
    {
        name: 'Серово',
        year: 1974,
        logo: 'bear_1974.jpg',
        url: './maps/forest/zelik/serovo_1974.webp',
        link: './original_maps/forest/zelik/serovo_1974_omaps.jpg',
        bounds: [[60.237595694635125, 29.50309753417969], [60.23780872762262, 29.564123153686527], [60.20298075456985, 29.50387001037598]]
    },
    {
        name: 'Смолячково',
        year: 1,
        url: './maps/forest/zelik/smoljachkovo_retro.webp',
        link: './original_maps/forest/zelik/smoljachkovo_retro_omaps.webp',
        bounds: [[60.20681918683261, 29.43245887756348], [60.2032366640261, 29.503440856933597], [60.17644064323766, 29.42649364471436]],
    },
    {
        name: 'Смолячково',
        year: 1988,
        url: './maps/forest/zelik/smoljachkovo_1988.webp',
        link: './original_maps/forest/zelik/smoljachkovo_1988_omaps.jpg',
        bounds: [[60.20635006920181, 29.43795204162598], [60.20285279909322, 29.50284004211426], [60.18126383410184, 29.431171417236328]],
        author: 'BRDLN'
    },
    {
        name: 'ДОЛ Солнечный',
        year: 2004, // ?
        url: './maps/forest/zelik/dol_solnechny_2004.webp',
        link: './original_maps/forest/zelik/dol_solnechny_2004_omaps.jpg',
        bounds: [[60.189276020994114, 29.50889110565186], [60.18821993247182, 29.520950317382812], [60.18119981408328, 29.506766796112064]],
        author: 'FDRV_L'
    },
    {
        name: 'Смолячково',
        year: 2025,
        url: './maps/forest/zelik/smoljachkovo_2025.webp',
        link: './original_maps/forest/zelik/smoljachkovo_2025_omaps.gif',
        bounds: [[60.18255487783866, 29.495995044708252], [60.18129584406433, 29.507045745849613], [60.17908708345086, 29.494450092315677]],
        author: ['IVNVA_G','TKMKVA_P'],
        owner: 'KP31'
    },
    {
        name: 'Молодёжное',
        year: 2004,
        url: './maps/forest/zelik/molodezhnoe_2004.webp',
        link: './original_maps/forest/zelik/molodezhnoe_2004_omaps.jpg',
        bounds: [[60.23273816668364, 29.503955841064457], [60.228774913143845, 29.541463851928714], [60.21274654984367, 29.49730396270752]],
        author: 'FDRV_L'
    },
    {
        name: 'Сосновая поляна, р Рощинка',
        year: 2020,
        url: './maps/forest/zelik/sosnovaya_polyana_roschinka_2020.webp',
        link: './original_maps/forest/zelik/sosnovaya_polyana_roschinka_2020_omaps.jpg',
        bounds: [[60.22709145076332, 29.51356887817383], [60.22637755136808, 29.521915912628177], [60.219909127386956, 29.511723518371586]],
        author: 'LVCHV'
    },
    {
        name: 'Песочная',
        year: 2008,
        url: './maps/forest/zelik/pesochnaya_2005.webp',
        link: ['./original_maps/forest/zelik/pesochnaya_2005_omaps.jpg','./original_maps/forest/zelik/pesochnaya_2008_omaps.ocd'],
        bounds: [[60.122654684605095, 30.111250877380375], [60.11705315601863, 30.18030166625977], [60.10689528234335, 30.10640144348145]],
        author: ['SHKLV','VSLVSKY','DRBSHV'],
        owner: 'SHKLV'
    },
    {
        name: 'Ольгино',
        year: 1997,
        url: './maps/forest/zelik/olgino_1997.webp',
        link: './original_maps/forest/zelik/olgino_1997_omaps.jpg',
        bounds: [[60.06068557237958, 30.07490158081055], [60.055630467498005, 30.140132904052738], [60.023825535526576, 30.060739517211918]],
        author: ['BZNV_A','KRCHKN_V']
    },
    {
        name: 'Дибуны',
        year: 1980,
        url: './maps/forest/zelik/dibuny_1980.webp',
        link: './original_maps/forest/zelik/dibuny_1980_omaps.jpg',
        bounds: [[60.13432503660941, 30.06769180297852], [60.12197057953831, 30.13034820556641], [60.112776538475856, 30.04915237426758]],
        info: 'Спортивная радиопеленгация ДП им.Жданова.',
        owner: 'KSLV_VN',
        author: 'KZKV'
    },
    {
        name: 'Песочная',
        date: '1986-05-10',
        info: 'Приз Ленинградского телевидения.',
        results: './docs/1986/1986_05_10_tv_omaps.pdf',
        url: './maps/forest/zelik/pesochnaya_1986.webp',
        link: './original_maps/forest/zelik/pesochnaya_1986_omaps.jpg',
        bounds: [[60.122184363898974, 30.110778808593754], [60.11743802435264, 30.17480850219727], [60.10691667063196, 30.10614395141602]],
        author: 'VSLVSKY',
        owner: 'KSLV_VN',
        me: 'М-10',
        qtty: 10
    },
    {
        name: 'Песочная',
        year: 1998,
        url: './maps/forest/zelik/pesochnaya_1998.webp',
        link: './original_maps/forest/zelik/pesochnaya_1998_omaps.jpg',
        bounds: [[60.12128646025379, 30.12837409973145], [60.11745940579484, 30.173993110656742], [60.10659584484433, 30.123052597045902]],
        author: ['VSLVSKY','DRBSHV']
    },
    {
        name: 'Солнечное, Дюны',
        date: '2007-09-16',
        info: 'ЧиП СПб, марафон',
        o_site: '070916',
        url: './maps/forest/zelik/solnechnoe-djuny_2007.webp',
        link: ['./original_maps/forest/zelik/solnechnoe-djuny_2007_1_omaps.gif','./original_maps/forest/zelik/solnechnoe-djuny_2007_2_omaps.gif','./original_maps/forest/zelik/solnechnoe-djuny_2007_3_omaps.gif'],
        bounds: [[60.148063386777785, 29.929761886596683], [60.14502990577005, 29.97053146362305], [60.130435379117884, 29.924783706665043]],
        author: 'SHRNN',
        owner: 'SFSO_SPB'
    },
    {
        name: 'Симагино, юг',
        year: 1988,
        url: './maps/forest/zelik/simagino_south_1988.webp',
        link: './original_maps/forest/zelik/simagino_south_1988_omaps.jpg',
        bounds: [[60.26732170189634, 29.790716171264652], [60.2643843729839, 29.852600097656254], [60.24032241226889, 29.78479385375977]],
        author: 'TRSV',
        qtty: 10
    },
    {
        name: 'Симагино',
        year: 1988,
        url: './maps/forest/zelik/simagino_1988.webp',
        link: './original_maps/forest/zelik/simagino_1988_omaps.jpg',
        bounds: [[60.29263990581418, 29.78702545166016], [60.291066067917924, 29.839553833007816], [60.25765732238409, 29.783849716186527]],
        author: 'TRSV'
    },
    {
        name: 'Долгое оз',
        year: 1979,
        url: './maps/forest/zelik/ilychevo_dolgoe_1979.webp',
        link: './original_maps/forest/zelik/ilychevo_dolgoe_1979_omaps.jpg',
        bounds: [[60.29327792662018, 29.75552558898926], [60.273833969108, 29.798097610473636], [60.279621563023944, 29.73209381103516]],
        author: 'TRSV'
    },
    {
        name: 'Долгое оз',
        year: 1983,
        url: './maps/forest/zelik/dolgoe_north_1983.webp',
        link: './original_maps/forest/zelik/dolgoe_north_1983_omaps.jpg',
        bounds: [[60.31687594388387, 29.709520339965824], [60.31449565570198, 29.7520923614502], [60.292937650406586, 29.701967239379886]],
        author: 'KRCHNKO_S'
    },
    {
        name: 'Репино',
        year: 1976,
        url: './maps/forest/zelik/repino_1976.webp',
        link: './original_maps/forest/zelik/repino_1976_omaps.jpg',
        info: 'Приз ЛОСТиЭ.',
        bounds: [[60.23184328035814, 29.85045433044434], [60.231502364853846, 29.911565780639652], [60.208738234557096, 29.85045433044434]],
    },
    {
        name: 'Зеленогорск',
        year: 1978,
        url: './maps/forest/zelik/zelenogorsk_1978.webp',
        link: './original_maps/forest/zelik/zelenogorsk_1978_omaps.jpg',
        bounds: [[60.19410799266949, 29.683556556701664], [60.191356095993605, 29.71810340881348], [60.18747318270969, 29.6821403503418]],
        author: ['KUZNTSV_S','KUZNTSVA_Z']
    },
    {
        name: 'Зеленогорск, Комаровский берег',
        year: 1977,
        url: './maps/forest/zelik/zelenogorsk_komarovsky_bereg_1977.webp',
        link: './original_maps/forest/zelik/zelenogorsk_komarovsky_bereg_1977_omaps.webp',
        bounds: [[60.20131729444974, 29.71887588500977], [60.19060941756903, 29.77852821350098], [60.19142009621113, 29.710550308227543]],
        author: ['KUZNTSV_S','KUZNTSVA_Z']
    },
    {
        name: 'Зеленогорск, Комаровский берег',
        year: 1,
        url: './maps/forest/zelik/zelenogorsk_komarovsky_bereg.webp',
        link: './original_maps/forest/zelik/zelenogorsk_komarovsky_bereg_omaps.jpg',
        bounds: [[60.20033623997278, 29.729690551757816], [60.18583027344266, 29.80496406555176], [60.18941469676139, 29.723253250122074]],
        author: ['KUZNTSV_S','KUZNTSVA_Z']
    },
    {
        name: 'Ильичёво',
        year: 1991,
        url: './maps/forest/zelik/ilychevo_1991.webp',
        link: './original_maps/forest/zelik/ilychevo_1991_omaps.jpg',
        bounds: [[60.27285508361015, 29.768657684326175], [60.271322856205195, 29.817838668823246], [60.24628631594441, 29.7645378112793]],
        author: 'HSMTLN',
    },
    {
        name: 'Ильичёво',
        year: 1993,
        url: './maps/forest/zelik/ilychevo_1993.webp',
        link: './original_maps/forest/zelik/ilychevo_1993_omaps.jpg',
        bounds: [[60.28693970076077, 29.740419387817386], [60.286556815550796, 29.796123504638675], [60.25676311663197, 29.73904609680176]],
        author: ['APRN','HSMTLN','LVRV_R'],
        areas: [15,80,5]
    },
    {
        name: 'Ильичёво, оз Долгое',
        year: 1995,
        area: 11,
        url: './maps/forest/zelik/ilychevo_dolgoe_1995.webp',
        link: ['./original_maps/forest/zelik/ilychevo_dolgoe_1995_omaps.jpg','./original_maps/forest/zelik/ilychevo_dolgoe_1995_h21e_omaps.jpg'],
        bounds: [[60.310244709596496, 29.704971313476566], [60.30331448158006, 29.81174468994141], [60.272259225923726, 29.692783355712894]],
        author: ['KUZNTSV_S','KVZN']
    },
    {
        name: 'Зеленогорск - Комарово',
        year: 1985,
        url: './maps/forest/zelik/zelenogorsk_komarovo_1985.webp',
        link: './original_maps/forest/zelik/zelenogorsk_komarovo_1985_omaps.jpg',
        bounds: [[60.24645669723733, 29.76522445678711], [60.22140113412978, 29.890537261962894], [60.20059217005553, 29.727458953857425]],
        author: 'KUZNTSV_S'
    },
    {
        name: 'Зеленогорск, оз Щучье',
        year: 1961,
        url: './maps/forest/zelik/zelenogorsk_schuchye_1961.webp',
        link: './original_maps/forest/zelik/zelenogorsk_schuchye_1961_omaps.jpg',
        bounds: [[60.22960595763016, 29.76183414459229], [60.229115857020744, 29.810843467712406], [60.21223487729479, 29.762392044067386]],
    },
    {
        name: 'Зеленогорск, оз Щучье',
        year: 1970,
        url: './maps/forest/zelik/zelenogorsk_schuchye_1970.webp',
        link: './original_maps/forest/zelik/zelenogorsk_schuchye_1970_omaps.jpg',
        info: 'Первенство ОК Нефтехим.',
        bounds: [[60.23516702067235, 29.75801467895508], [60.233249519326534, 29.818868637084964], [60.20033623997278, 29.753208160400394]]
    },
    {
        name: 'Зеленогорск, оз Щучье',
        date: '1971-09-13',
        start: 'USSR_V_1971',
        url: './maps/forest/zelik/zelenogorsk_schuchye_1971.webp',
        link: ['./original_maps/forest/zelik/zelenogorsk_schuchye_1971_omaps.jpg','./original_maps/forest/zelik/zelenogorsk_schuchye_1971_clean_omaps.jpg'],
        info: 'Лично-командное первенство.',
        bounds: [[60.22357507955077, 29.7465991973877], [60.253952596684194, 29.827623367309574], [60.19491858490831, 29.79123115539551]]
    },
    {
        name: 'Ленинское',
        year: 1,
        url: './maps/forest/zelik/leninskoe_old.webp',
        link: './original_maps/forest/zelik/leninskoe_old_omaps.jpg',
        bounds: [[60.25148254664529, 29.829082489013675], [60.24492323369224, 29.89062309265137], [60.23054352098402, 29.820713996887207]]
    },
    {
        name: 'Озерки',
        date: '1971-09-14',
        start: 'USSR_V_1971',
        url: './maps/forest/zelik/ozerki_1971.webp',
        link: './original_maps/forest/zelik/ozerki_1971_omaps.jpg',
        info: 'Эстафета.',
        bounds: [[60.33306579997825, 29.686002731323246], [60.33293835215384, 29.742479324340824], [60.30178368088176, 29.685487747192383]]
    },
    {
        name: 'Зеленогорск, оз Щучье',
        year: 1982,
        info: 'Кубок Ленинграда.',
        logo: 'ded_1982.jpg',
        url: './maps/forest/zelik/zelenogorsk_schuchye_1982.webp',
        link: './original_maps/forest/zelik/zelenogorsk_schuchye_1982_omaps.jpg',
        bounds: [[60.23435742267945, 29.74780082702637], [60.23239726048873, 29.79380607604981], [60.202724843117544, 29.742393493652347]]
    },
    {
        name: 'Зеленогорск, оз Щучье',
        date: '1972-06-10',
        start: 'WN',
        url: './maps/forest/zelik/zelenogorsk_schuchye_1972.webp',
        link: './original_maps/forest/zelik/zelenogorsk_schuchye_1972_omaps.jpg',
        bounds: [[60.2217208410269, 29.750890731811527], [60.22191266366871, 29.833030700683597], [60.19216675619548, 29.759387969970707]]
    },
    {
        name: 'Зеленогорск, оз Щучье',
        year: 1979,
        url: './maps/forest/zelik/zelenogorsk_schuchye_1979.webp',
        link: ['./original_maps/forest/zelik/zelenogorsk_schuchye_1979_omaps.jpg','./original_maps/forest/zelik/zelenogorsk_schuchye_1978_omaps.jpg'],
        bounds: [[60.226835727394075, 29.742650985717777], [60.22493905013458, 29.782862663269047], [60.20266086494259, 29.738616943359375]],
        author: 'SPZHNKV_Y'
    },
    {
        name: 'Зеленогорск, оз Щучье',
        year: 1986,
        url: './maps/forest/zelik/zelenogorsk_schuchye_1986.webp',
        link: './original_maps/forest/zelik/zelenogorsk_schuchye_1986_omaps.jpg',
        bounds: [[60.231544979485825, 29.739646911621097], [60.228263490678515, 29.806938171386722], [60.20647801103916, 29.734668731689457]],
        author: 'SHRNN'
    },
    {
        name: 'Репино',
        year: 1983,
        url: './maps/forest/zelik/repino_1983.webp',
        link: './original_maps/forest/zelik/repino_1983_omaps.jpg',
        bounds: [[60.21176583711235, 29.819898605346683], [60.208567657083265, 29.868822097778324], [60.191740095427, 29.814362525939945]],
        author: ['BKSTN','IVNV_V','PTRV_A','TNV','BLZRV_V'],
        areas: [40,10,40,10]
    },
    {
        name: 'Комарово - Репино',
        year: 2008,
        logo: 'sestroretsk.webp',
        url: './maps/forest/zelik/komarovo_repino_2008.webp',
        link: ['./original_maps/forest/zelik/komarovo_repino_2008_omaps.gif','./original_maps/forest/zelik/komarovo_repino_2008_omaps.ocd'],
        bounds: [[60.208738234557096, 29.818310737609867], [60.206414040182864, 29.866847991943363], [60.19133476256005, 29.81449127197266]],
        author: 'FDRV_L',
    },
    {
        name: 'Зеленогорск, т/б Прибой, оз Щучье',
        year: 2000,
        area: 15,
        url: './maps/forest/zelik/zelenogorsk_priboy_2000.webp',
        link: './original_maps/forest/zelik/zelenogorsk_priboy_2000_omaps.jpg',
        photo: './tracks/zelenogorsk/pic_1.jpg',
        bounds: [[60.2478197156723, 29.730205535888675], [60.23776612113594, 29.847879409790043], [60.19986702963659, 29.71484184265137]],
        author: ['TKMKV_K','KUZNTSV_S']
    },
    {
        name: 'Зеленогорск, оз Щучье',
        year: 2005,
        url: './maps/forest/zelik/zelenogorsk_schuchye_2005.webp',
        link: ['./original_maps/forest/zelik/zelenogorsk_schuchye_2005_omaps.jpg','./original_maps/forest/zelik/zelenogorsk_schuchye_2005_15000_omaps.jpg'],
        bounds: [[60.234953970508286, 29.725227355957035], [60.23137452062541, 29.814834594726566], [60.19363869327574, 29.715528488159183]],
        author: ['BYMKV','KUZNTSV_S','SHRNN','VSLVSKY']
    },
    {
        name: 'Зеленогорск - Ленинское',
        year: 2008,
        url: './maps/forest/zelik/zelenogorsk_leninskoe_2008.webp',
        link: ['./original_maps/forest/zelik/zelenogorsk_leninskoe_2008_omaps.gif','./original_maps/forest/zelik/zelenogorsk_leninskoe_2008_omaps.ocd'],
        bounds: [[60.239853773826155, 29.723424911499027], [60.232141578515225, 29.832086563110355], [60.19398000259122, 29.714498519897464]],
        author: ['VSLVSKY','DRBSHV']
    },
    {
        name: 'Комарово',
        year: 2014,
        url: './maps/forest/zelik/komarovo_2014.webp',
        link: ['./original_maps/forest/zelik/komarovo_2014_omaps.gif','./original_maps/forest/zelik/komarovo_2014_omaps.ocd'],
        bounds: [[60.20396172997914, 29.7920036315918], [60.20010163564336, 29.837965965271], [60.184550027412534, 29.78526592254639]],
        author: 'VSLVSKY'
    },
    {
        name: 'Зеленогорск, оз Щучье',
        year: 2000,
        url: './maps/forest/zelik/zelenogorsk_schuchye_2011.webp',
        link: './original_maps/forest/zelik/zelenogorsk_schuchye_2011_omaps.jpg',
        bounds: [[60.23789394042978, 29.747972488403324], [60.23252510072741, 29.815092086791996], [60.20374847695044, 29.736213684082035]],
        author: 'SHRNN',
        owner: 'SHRNN'
    },
    {
        name: 'Зеленогорск - Комарово',
        year: 1992,
        start: 'NA',
        page: 'spb',
        url: './maps/forest/zelik/zelenogorsk_komarovo_1992.webp',
        link: './original_maps/forest/zelik/zelenogorsk_komarovo_1992_omaps.jpg',
        bounds: [[60.217521775369605, 29.73810195922852], [60.21257599321435, 29.803161621093754], [60.1930413934332, 29.728660583496097]],
        author: 'BYMKV'
    },
    {
        name: 'Зеленогорск, "Прибой"',
        year: 1992,
        logo: 'nevsky_azimut.gif',
        url: './maps/forest/zelik/zelenogorsk_priboy_1992.webp',
        link: './original_maps/forest/zelik/zelenogorsk_priboy_1992_omaps.jpg',
        bounds: [[60.22736848216193, 29.720420837402347], [60.22250943804349, 29.776210784912113], [60.19709428614133, 29.71140861511231]],
        author: 'BYMKV',
        qtty: 2
    },
    {
        name: 'Зеленогорск, оз Красавица',
        year: 1998,
        url: './maps/forest/zelik/krasavitsa_1998.webp',
        link: './original_maps/forest/zelik/krasavitsa_1998_omaps.jpg',
        bounds: [[60.257614741711635, 29.733681678771976], [60.254357156086634, 29.789385795593265], [60.235550507476816, 29.729218482971195]],
        info: 'Первая карта Константина Токмакова.',
        author: 'TKMKV_K',
        owner: 'TOKM'
    },
    {
        name: 'Зеленогорск, Дружинное оз',
        year: 1995,
        url: './maps/forest/zelik/zelenogorsk_chertovo_oz_1995.webp',
        link: './original_maps/forest/zelik/zelenogorsk_chertovo_oz_1995_omaps.jpg',
        bounds: [[60.240024188580975, 29.76204872131348], [60.2312892908627, 29.77380752563477], [60.23047959706192, 29.734926223754886]],
        author: 'KUZNTSV_S'
    },
    {
        name: 'Зеленогорск, Дружинное оз',
        year: 2002,
        url: './maps/forest/zelik/zelenogorsk_druzhinnoe_2002.webp',
        link: './original_maps/forest/zelik/zelenogorsk_druzhinnoe_2002_omaps.jpg',
        bounds: [[60.238213486482735, 29.735012054443363], [60.235571812167706, 29.771876335144047], [60.219290990416546, 29.729990959167484]],
        author: ['VLKV_K','URVNTSV']
    },
    {
        name: 'Зеленогорск, Дружинное оз',
        year: 2024,
        url: './maps/forest/zelik/zelenogorsk_druzhinnoe_2024.webp',
        link: './original_maps/forest/zelik/zelenogorsk_druzhinnoe_2024_omaps.jpg',
        bounds: [[60.24373049018684, 29.735698699951175], [60.24040761853822, 29.776124954223636], [60.21909915243553, 29.72582817077637]],
        author: 'RDNV_I',
        owner: 'RDNV_I'
    },
    {
        name: 'Зеленогорск, оз Щучье',
        year: 2020,
        url: './maps/forest/zelik/zelenogorsk_schuchye_2020.webp',
        bounds: [[60.236061816234596, 29.751405715942386], [60.23188589454682, 29.802045822143555], [60.21816126170426, 29.745655059814457]],
        author: 'MKHLV_A',
        owner: 'WN'
    },
    {
        name: 'Зеленогорск, Чёрные оз',
        year: 1979,
        url: './maps/forest/zelik/zelenogorsk_chernye_1979.webp',
        link: './original_maps/forest/zelik/zelenogorsk_chernye_1979_omaps.jpg',
        bounds: [[60.23248248736994, 29.78346347808838], [60.23082052320575, 29.83092784881592], [60.21402569629195, 29.779729843139652]],
        author: 'SPZHNKV_Y',
        owner: 'KSLV_VN'
    },
    {
        name: 'Зеленогорск, Чёрные оз',
        year: 1995,
        url: './maps/forest/zelik/zelenogorsk_chernye_1995.webp',
        link: './original_maps/forest/zelik/zelenogorsk_chernye_1995_omaps.jpg',
        bounds: [[60.24688264659181, 29.75707054138184], [60.240918851500375, 29.81972694396973], [60.21730861048657, 29.74428176879883]],
        author: ['HSMTLN','BYMKV']
    },
    {
        name: 'Горки, Ильичёвское оз',
        year: 2012,
        url: './maps/forest/zelik/gorki_2012.webp',
        bounds: [[60.299976393309244, 29.73282337188721], [60.297488551644776, 29.772391319274906], [60.286322827937596, 29.728789329528812]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN'
    },
    {
        name: 'Ильичёво',
        url: './maps/forest/zelik/ilychevo.webp',
        bounds: [[60.278238591412865, 29.75681304931641], [60.27657894829296, 29.77874279022217], [60.26144678042457, 29.751448631286625]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN'
    },
    {
        name: 'Ильичёво',
        year: 2016,
        url: './maps/forest/zelik/ilychevo_2016.webp',
        bounds: [[60.28336593110846, 29.738445281982422], [60.280472593413364, 29.775094985961918], [60.270577997519666, 29.734282493591312]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN'
    },
    {
        name: 'Ильичёво - Симагино',
        date: '2015-09-06',
        info: 'ЧиП СПб, марафон',
        o_site: '150906',
        url: './maps/forest/zelik/ilychevo-simagino_2015.webp',
        link: ['./original_maps/forest/zelik/ilychevo_simagino_2015_omaps.jpg','./original_maps/forest/zelik/ilychevo_simagino_2015_marathon_omaps.jpg'],
        gps: {
            'МЭ': 'https://viewer.o-gps-center.ru/viewer/event/657/',
            'ЖЭ': 'https://viewer.o-gps-center.ru/viewer/event/658/'
        },
        bounds: [[60.29246976482949, 29.792947769165043], [60.28749274926003, 29.86719131469727], [60.24356009471195, 29.772605895996097]],
        author: ['KUZNTSV_S','SHRNN'],
        owner: 'SFSO_SPB'
    },
    {
        name: 'Болотная станция',
        date: '2025-10-05',
        url: './maps/forest/zelik/bolotnaya_station_2025.webp',
        link: './original_maps/forest/zelik/bolotnaya_station_2025_omaps.gif',
        bounds: [[60.263767074689504, 29.796123504638675], [60.25904116408923, 29.84672069549561], [60.24660578014152, 29.789900779724125]],
        info: 'Невский спринт.',
        o_site: '251007_NS',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/23575/',
        author: 'CHGRVSKY_V',
        owner: 'SFSO_SPB',
        planner: 'CHGRVSKY_V',
        me: 'Фит'
    },
    {
        name: 'Болотная станция',
        year: 2019,
        url: './maps/forest/zelik/bolotnaya_station_2019.webp',
        bounds: [[60.26757710934261, 29.795179367065433], [60.264512088418755, 29.830327033996586], [60.244688948217195, 29.786639213562015]],
        author: 'MKHLV_A',
        owner: 'WN'
    },
    {
        name: 'Зеленогорск, Чёрные оз',
        year: 2023,
        url: './maps/forest/zelik/zelenogorsk_chernye_2023.webp',
        bounds: [[60.248330832960995, 29.778871536254886], [60.244284269358644, 29.813632965087894], [60.22400132645466, 29.766941070556644]],
        author: 'MKHLV_A',
        owner: 'WN'
    },
    {
        name: 'Комарово',
        year: 1985,
        url: './maps/forest/zelik/komarovo_1990.webp',
        link: './original_maps/forest/zelik/komarovo_1990_omaps.jpg',
        bounds: [[60.18559556540752, 29.80496406555176], [60.175245406790275, 29.856591224670414], [60.17349516066162, 29.794921875000004]],
        author: ['SHRNN','FDRV_L']
    },
    {
        name: 'Комарово',
        year: 2013,
        url: './maps/forest/zelik/komarovo_2013.webp',
        link: './original_maps/forest/zelik/komarovo_2013_omaps.gif',
        bounds: [[60.1815839323226, 29.805693626403812], [60.17895903480163, 29.855604171752933], [60.168243862694155, 29.802217483520508]],
        author: ['SHRNN','ZNDR']
    },
    {
        name: 'Рощино',
        year: 2025,
        url: './maps/forest/zelik/roschino_2025.webp',
        link: './original_maps/forest/zelik/roschino_2025_omaps.jpg',
        gps: 'https://viewer.o-gps-center.ru/viewer/event/21692/',
        bounds: [[60.285812303696865, 29.59047317504883], [60.28449341251603, 29.63943958282471], [60.26700243978524, 29.588413238525394]],
        author: 'SHRPVA',
        owner: 'SHRPVA'
    },
    {
        name: 'Рощино',
        year: 2009,
        url: './maps/forest/zelik/roschino_2009.webp',
        link: './original_maps/forest/zelik/roschino_2009_omaps.jpg',
        bounds: [[60.27634488928318, 29.564423561096195], [60.27542991526678, 29.601931571960453], [60.263298771665085, 29.562621116638187]],
        author: ['VSLVSKY','DRBSHV']
    },
    {
        name: 'Рощино',
        year: 2012,
        url: './maps/forest/zelik/roschino_2012.webp',
        link: './original_maps/forest/zelik/roschino_2012_omaps.jpg',
        bounds: [[60.27182296609358, 29.582598209381107], [60.271961293011, 29.601051807403568], [60.26382029051831, 29.582834243774418]],
        author: 'SHRNN'
    },
    {
        name: 'Пухтолова гора',
        year: 2009, //Реально более ранняя
        url: './maps/forest/zelik/pukhtolova_gora_2009.webp',
        link: './original_maps/forest/zelik/pukhtolova_gora_2009_omaps.jpg',
        bounds: [[60.24266550392609, 29.629054069519047], [60.23987507571899, 29.678277969360355], [60.22879622224008, 29.625406265258793]],
        author: ['BLZRV_V','URVNTSV','NKFRV_A']
    },
    {
        name: 'Пухтолова гора',
        year: 2025,
        url: './maps/forest/zelik/pukhtolova_gora_2025.webp',
        link: './original_maps/forest/zelik/pukhtolova_gora_2025_omaps.jpg',
        bounds: [[60.2611487490574, 29.638881683349613], [60.2537609615383, 29.70235347747803], [60.22888145848637, 29.62347507476807]],
        author: ['URVNTSV','NKFRV_A'],
        owner: 'ANCHKV'
    },
    {
        name: 'Пухтолова гора',
        year: 1979,
        url: './maps/forest/zelik/pukhtolova_gora_1979.webp',
        link: './original_maps/forest/zelik/pukhtolova_gora_1979_omaps.jpg',
        bounds: [[60.24543439618453, 29.637680053710938], [60.243986081737205, 29.69338417053223], [60.21713807758243, 29.63373184204102]],
        author: 'GRZNVCH'
    },
    {
        name: 'Пухтолова гора',
        year: 1993,
        url: './maps/forest/zelik/pukhtolova_gora_1993.webp',
        link: './original_maps/forest/zelik/pukhtolova_gora_1993_omaps.jpg',
        bounds: [[60.244965830871294, 29.639139175415043], [60.241515279872864, 29.694242477416996], [60.21764967363427, 29.632444381713867]],
        author: ['HSMTLN','APRN']
    },
    {
        name: 'Пухтолова гора',
        year: 2017,
        url: './maps/forest/zelik/pukhtolova_gora_2023.webp',
        bounds: [[60.241919992941305, 29.645104408264164], [60.238937779331096, 29.682226181030277], [60.22871098577209, 29.641027450561527]],
        author: 'MKHLV_A',
        owner: 'WN'
    },
    {
        name: 'Озерки',
        year: 2015,
        url: './maps/forest/zelik/ozerki_2022.webp',
        bounds: [[60.3206797942916, 29.690594673156742], [60.317279725561335, 29.725527763366703], [60.30023154584922, 29.682269096374515]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN'
    },
    {
        name: 'Линдуловская роща',
        year: 2022,
        url: './maps/forest/zelik/lindulovskaya_roscha_2015.webp',
        link: './original_maps/forest/zelik/lindulovskaya_roscha_2015_omaps.jpg',
        bounds: [[60.256592788957555, 29.525198936462406], [60.25563467927723, 29.542450904846195], [60.23919340827815, 29.52185153961182]],
        author: 'RDNV_I',
        owner: 'RDNV_I'
    },
    {
        name: 'Серово',
        year: 2024,
        url: './maps/forest/zelik/serovo_2024.webp',
        link: './original_maps/forest/zelik/serovo_2024_omaps.jpg',
        bounds: [[60.22357507955077, 29.56154823303223], [60.216328034176136, 29.63192939758301], [60.19760619488179, 29.550390243530277]],
        author: 'RDNV_I',
        owner: 'RDNV_I'
    },
    {
        name: 'Белоостров',
        year: 1982,
        url: './maps/forest/zelik/beloostrov_1982.webp',
        link: './original_maps/forest/zelik/beloostrov_1982_omaps.jpg',
        bounds: [[60.14710210266158, 29.989414215087894], [60.14599125046178, 30.006580352783207], [60.13624832370487, 29.987869262695312]],
        author: 'CHGRVSKY_V'
    },
    {
        name: 'Старый Белоостров',
        year: 2007,
        url: './maps/forest/zelik/old_beloostrov_2007.webp',
        link: './original_maps/forest/zelik/old_beloostrov_2007_omaps.jpg',
        bounds: [[60.2153687463682, 30.034604072570804], [60.21325821440992, 30.064344406127933], [60.20507062338418, 30.03121376037598]],
        author: ['SHRNN','RYLOV_V'],
        areas: [70, 30],
        zindex: 2
    },
    {
        name: 'Белоостров - Удачное',
        year: 2007,
        url: './maps/forest/zelik/beloostrov_udachnoe_2007.webp',
        link: './original_maps/forest/zelik/beloostrov_udachnoe_2007_omaps.jpg',
        bounds: [[60.22464068641878, 29.95207786560059], [60.21820389368313, 30.0322437286377], [60.20370582617838, 29.947957992553714]],
        author: ['RYLOV_V','SHRNN']
    },
    {
        name: 'Белоостров - Удачное',
        year: 2024,
        url: './maps/forest/zelik/beloostrov_udachnoe_2024.webp',
        link: './original_maps/forest/zelik/beloostrov_udachnoe_2024_omaps.jpg',
        author: ['RYLOV_V','SHRNN','RDNV_I'],
        bounds: [[60.22485380363574, 29.951906204223636], [60.2185449475187, 30.032415390014652], [60.203663175350826, 29.946155548095707]],
        owner: 'RDNV_I'
    },
    {
        name: 'Сестрорецк, Ржавая канава',
        year: 1996,
        url: './maps/forest/zelik/sestroretsk_rjavaya_kanava_1996.webp',
        link: './original_maps/forest/zelik/sestroretsk_rjavaya_kanava_1996_omaps.jpg',
        bounds: [[60.14300030802044, 29.95083332061768], [60.14045779307042, 29.988126754760746], [60.118571221654584, 29.94486808776856]],
        author: 'MLVA_M'
    },
    {
        name: 'Сестрорецкие Дюны',
        year: 2019,
        url: './maps/forest/zelik/sestroretskie_djuny_2019.webp',
        link: './original_maps/forest/zelik/sestroretskie_djuny_2019_omaps.jpg',
        bounds: [[60.129815556057196, 29.943172931671146], [60.126716265625745, 29.95851516723633], [60.12330670901339, 29.9383020401001]],
        author: 'SHRNN',
        owner: 'SHRNN'
    },
    {
        name: 'Сестрорецкие Дюны',
        year: 2022,
        url: './maps/forest/zelik/sestroretskie_djuny_2021.webp',
        bounds: [[60.11853915056914, 29.968643188476566], [60.118410865915045, 29.975595474243168], [60.11331114604577, 29.96703386306763]],
        author: 'DRBSHV'
    },
    {
        name: 'Сестрорецкие Дюны',
        year: 2022,
        url: './maps/forest/zelik/sestroretskie_djuny_2022.webp',
        link: './original_maps/forest/zelik/sestroretskie_djuny_2022_omaps.jpg',
        bounds: [[60.12961250803307, 29.93980407714844], [60.127464396937015, 29.959931373596195], [60.122676062659345, 29.937036037445072]],
        author: ['TKMKV_K','TKMKVA_P','IVNVA_G','KVZN'],
        owner: 'SFSO_SPB'
    },
    {
        name: 'Сестрорецк, Детские Дюны',
        url: './maps/forest/zelik/sestroretsk_detskie_djuny.webp',
        link: './original_maps/forest/zelik/sestroretsk_detskie_djuny_omaps.jpg',
        bounds: [[60.118774337803394, 29.95853662490845], [60.11785495997083, 29.970660209655765], [60.11160037127036, 29.9567985534668]]
    },
    {
        name: 'Сестрорецк, Детские Дюны',
        year: 2010,
        url: './maps/forest/zelik/sestroretskie_detskie_djuny_2010.webp',
        link: './original_maps/forest/zelik/sestroretskie_detskie_djuny_2010_omaps.jpg',
        bounds: [[60.12263330653698, 29.957356452941898], [60.1222805664083, 29.972226619720463], [60.11693555646363, 29.956669807434086]],
        author: 'SHRNN'
    },
    {
        name: 'Сестрорецк, Детские Дюны',
        year: 2005,
        url: './maps/forest/zelik/sestroretskie_detskie_djuny_2005.webp',
        link: './original_maps/forest/zelik/sestroretskie_detskie_djuny_2005_omaps.jpg',
        bounds: [[60.12263330653698, 29.957227706909183], [60.12231263384891, 29.972097873687748], [60.11691417468124, 29.956712722778324]],
        author: 'SHRNN',
        excluded: true
    },
    {
        name: 'Сестрорецк, Детские Дюны',
        year: 2020,
        url: './maps/forest/zelik/sestroretskie_detskie_djuny_2020.webp',
        link: './original_maps/forest/zelik/sestroretskie_detskie_djuny_2020_omaps.gif',
        bounds: [[60.122964665032725, 29.962162971496586], [60.12140404426768, 29.974372386932377], [60.117694600742524, 29.95905160903931]],
        author: ['SHRNN','BBCH_A','KUZNTSV_A'],
    },
    {
        name: 'Сестрорецк, Дюны, ТЭЦ',
        url: './maps/forest/zelik/sestroretskie_djuny_tets.webp',
        link: './original_maps/forest/zelik/sestroretskie_djuny_tets_omaps.jpg',
        bounds: [[60.12783845621518, 29.957206249237064], [60.12702620780377, 29.967741966247562], [60.12243021419727, 29.955425262451175]],
        author: 'SHRNN',
        owner: 'SHRNN'
    },
    {
        name: 'Тарховка',
        year: 1987,
        url: './maps/forest/zelik/tarkhovka_1987.webp',
        link: './original_maps/forest/zelik/tarkhovka_1987_omaps.jpg',
        bounds: [[60.073234306818485, 29.946198463439945], [60.07207813845158, 29.97581005096436], [60.05882212806155, 29.942722320556644]],
        author: 'BBNN_I'
    },
    {
        name: 'Тарховка',
        year: 1980,
        url: './maps/forest/zelik/tarkhovka_1980.webp',
        link: './original_maps/forest/zelik/tarkhovka_1980_omaps.jpg',
        bounds: [[60.07237788969751, 29.945511817932132], [60.07150003907007, 29.974865913391117], [60.058950644841026, 29.944224357604984]],
        author: 'VLKV_K'
    },
    {
        name: 'Лисий Нос - Лахта',
        year: 1986,
        url: './maps/forest/zelik/lisy_nos_1986.webp',
        link: './original_maps/forest/zelik/lisy_nos_1986_omaps.jpg',
        bounds: [[60.010678843334446, 30.013790130615238], [60.006281148244774, 30.071082115173343], [59.999372368285684, 30.009799003601078]],
        author: ['FRSHLVA','FRSHLV'],
    },
    {
        name: 'Сестрорецк, Таможенная дорога',
        year: 2012,
        url: './maps/forest/zelik/sestroretsk_tamozhennaya_doroga_2012.webp',
        link: './original_maps/forest/zelik/sestroretsk_tamozhennaya_doroga_2012_omaps.gif',
        bounds: [[60.14058599180651, 29.95044708251953], [60.13898347169249, 29.967741966247562], [60.12789189290783, 29.946713447570804]],
        author: 'SHRNN',
        zindex: 2
    },
    {
        name: 'Сестрорецк, Таможенная дорога',
        year: 2021,
        url: './maps/forest/zelik/sestroretsk_tamozhennaya_doroga_2021.webp',
        bounds: [[60.13862022294616, 29.950618743896484], [60.137338136484786, 29.965424537658695], [60.12825526011688, 29.946370124816898]],
        gps: 'https://viewer.o-gps-center.ru/viewer/event/24008/',
        author: 'MKHLV_A',
        owner: 'WN',
        zindex: 3
    },
    {
        name: 'Сестрорецк, Ласковый пляж',
        year: 2023,
        url: './maps/forest/zelik/sestroretsk_pljazh_laskovy_2023.webp',
        link: './original_maps/forest/zelik/sestroretsk_pljazh_laskovy_2023_omaps.jpg',
        bounds: [[60.14590579873828, 29.92581367492676], [60.14403648673156, 29.94210004806519], [60.13880184782073, 29.922959804534912]],
        author: 'KUZNTSV_A',
        owner: 'SFSO_SPB'
    },
/*
    {
        name: 'Симагино - Майнило',
        year: 2013,
        url: './maps/forest/zelik/simagino_maynilo_2013.webp',
        bounds: [[60.2838764935428, 29.879722595214847], [60.2777066636847, 29.956712722778324], [60.26046752431386, 29.87165451049805]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN'
    },
    {
        name: 'Воронцовское',
        year: 2014,
        url: './maps/forest/zelik/vorontsovskoe_2014.webp',
        bounds: [[60.31942606014921, 29.888219833374027], [60.316620921304846, 29.93233680725098], [60.29600000881975, 29.882726669311527]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN'
    },
    {
        name: 'Воронцовское',
        year: 2013,
        url: './maps/forest/zelik/vorontsovskoe_2013.webp',
        bounds: [[60.32010605752227, 29.86916542053223], [60.315983356144905, 29.93182182312012], [60.29442633269142, 29.862041473388675]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN'
    },
    {
        name: 'Воронцовское - Симагино',
        year: 2016,
        url: './maps/forest/zelik/vorontsovskoe_simagino_2016.webp',
        bounds: [[60.299827553407624, 29.864101409912113], [60.294086068431916, 29.944524765014652], [60.277876881498834, 29.858350753784183]],
        author: ['MKHLV_A','SLBDNK','USNKO'],
        owner: 'WN'
    },
*/
    {
        name: 'Воронцовское - Симагино',
        year: 2021,
        area: 27,
        info: '2013-2021гг.',
        url: './maps/forest/zelik/vorontsovskoe_simagino_2021.webp',
        bounds: [[60.32363331664699, 29.857578277587894], [60.314453148979304, 29.99679565429688], [60.253015703086454, 29.838008880615238]],
        author: ['MKHLV_A','SLBDNK','USNKO'],
        owner: 'WN'
    },
    {
        name: 'Воронцовское',
        year: 1964,
        info: '19-20.09. Первенство ЛОС ДСО "Труд" по туристскому двоеборью. Ориентирование в заданном направлении, ночное, командное.',
        url: './maps/forest/zelik/vorontsovskoe_1964.webp',
        link: ['./original_maps/forest/zelik/vorontsovskoe_1964_bw_omaps.jpg','./original_maps/forest/zelik/vorontsovskoe_1964_omaps.jpg'],
        bounds: [[60.30178368088176, 29.824790954589847], [60.29855175501573, 29.961948394775394], [60.247478966381564, 29.818267822265625]]
    },
    {
        name: 'Пасторское оз',
        year: 1982,
        url: './maps/forest/zelik/pastorskoe_1982.webp',
        link: './original_maps/forest/zelik/pastorskoe_1982_omaps.jpg',
        bounds: [[60.2416217837967, 30.01451969146729], [60.238937779331096, 30.063829421997074], [60.22468330997303, 30.011558532714847]],
        author: ['IVNVA_I','STPNVA_I']
    },
    {
        name: 'Пасторское-Медное оз',
        year: 2009,
        area: 20,
        url: './maps/forest/zelik/pastorskoe_mednoe_2009.webp',
        link: './original_maps/forest/zelik/pastorskoe_mednoe_2009_omaps.jpg',
        bounds: [[60.24965118236976, 30.009841918945316], [60.2356783354143, 30.175838470458988], [60.21138207197383, 29.996194839477543]],
        author: 'CHGRVSKY_V',
        owner: 'CHGRVSKY_M'
    },
    {
        name: 'Пасторское оз',
        year: 2024,
        url: './maps/forest/zelik/pastorskoe_2024.webp',
        link: './original_maps/forest/zelik/pastorskoe_2024_omaps.jpg',
        bounds: [[60.25263242070603, 29.988126754760746], [60.24522141278221, 30.060052871704105], [60.22809301475002, 29.97756958007813]],
        author: ['CHGRVSKY_V','CHGRVSKY_Y'],
        owner: 'SFSO_SPB',
        zindex: 2
    },
    {
        name: 'Молодёжное, Марьина гора',
        year: 2024,
        url: './maps/forest/zelik/molodezhnoe_2024.webp',
        link: './original_maps/forest/zelik/molodezhnoe_2024_omaps.jpg',
        bounds: [[60.206030212425404, 29.520928859710697], [60.203002080434125, 29.55105543136597], [60.1954838544896, 29.516723155975345]],
        author: 'ZCHNV',
        owner: 'SFSO_SPB'
    },
    {
        name: 'Молодёжное, Марьина гора',
        year: 2003,
        url: './maps/forest/zelik/molodezhnoe_2003.webp',
        link: ['./original_maps/forest/zelik/molodezhnoe_2003_omaps.jpg','./original_maps/forest/zelik/molodezhnoe_2003_02_20_omaps.jpg'],
        bounds: [[60.203002080434125, 29.531786441802982], [60.20167985063764, 29.54835176467896], [60.19703029698733, 29.530413150787357]],
        author: ['SHKLV','FDRV_L'], //Возможны соавторы
        type: []
    },
    {
        name: 'ДООЛ "Молодёжное"',
        year: 2024,
        url: './maps/forest/zelik/molodezhny_dool_2024.webp',
        link: './original_maps/forest/zelik/molodezhny_dool_2024_omaps.jpg',
        bounds: [[60.201104024232556, 29.531250000000004], [60.199728398025975, 29.543244838714603], [60.1958678056339, 29.529211521148685]],
        author: 'ZCHNV',
        owner: 'SFSO_SPB',
        type: ['CITY']
    },
];