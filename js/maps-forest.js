// types can be ROGAINE, SPRINT, CITY, RELIEF
let forestMaps = [
    // --- лесные карты ---
    {
        name: 'Цвелодубово',
        year: 2020,
        url: './maps/forest/tsvelodubovo_2020.webp',
        bounds: [[60.390960544134856, 29.556913375854496], [60.38763141314447, 29.598112106323246], [60.36317201461962, 29.54730033874512]],
        author: ['TKMKV_K','KVZN','LPTV_Y'],
        owner: 'NW',
        types: [],
    },
    {
        name: 'Заходское',
        year: 1976,
        url: './maps/forest/zakhodskoe_1976.webp',
        link: './original_maps/forest/zakhodskoe_1976_full.jpg',
        bounds: [[60.40160299760925, 29.367313385009766], [60.40266281241613, 29.423789978027347], [60.37526611981126, 29.370918273925785]],
        types: [],
        zindex: 3
    },
    {
        name: 'Цвелодубово',
        year: 1986,
        url: './maps/forest/tsvelodubovo_1986.webp',
        link: './original_maps/forest/tsvelodubovo_1986_full.jpg',
        bounds: [[60.36730997674438, 29.568200111389164], [60.36440284798612, 29.624333381652832], [60.34954485783966, 29.565196037292484]],
        author: ['EGRV_A','KNSTNTNV_D','MRVNK_D','GLV_N'],
        types: [],
        zindex: 3
    },
    {
        name: 'Цвелодубово',
        year: 1995,
        url: './maps/forest/tsvelodubovo_south_1995.webp',
        link: './original_maps/forest/tsvelodubovo_south_1995_full.jpg',
        bounds: [[60.36376621584052, 29.55051898956299], [60.35947923565616, 29.62145805358887], [60.347485430770675, 29.546484947204593]],
        author: 'MLVA_M',
        types: [],
    },
    {
        name: 'Цвелодубово',
        year: 1987,
        url: './maps/forest/tsvelodubovo_1987.webp',
        link: './original_maps/forest/tsvelodubovo_1987_full.jpg',
        bounds: [[60.37598738074033, 29.54704284667969], [60.37403569666894, 29.579615592956547], [60.363214457923185, 29.543266296386722]],
        author: ['EGRV_A','KNSTNTNV_D','MRVNK_D','GLV_N'],
        types: [],
        zindex: 3
    },
    {
        name: 'Цвелодубово',
        year: 1993,
        area: 8,
        url: './maps/forest/tsvelodubovo_1993.webp',
        link: './original_maps/forest/tsvelodubovo_1993_full.jpg',
        bounds: [[60.40194214210233, 29.54704284667969], [60.39651540611492, 29.62077140808106], [60.36138934596662, 29.53554153442383]],
        author: ['SHRNN','KRCHKN_V'],
        types: [],
    },
    {
        name: 'Цвелодубово, Щукино оз',
        url: './maps/forest/tsvelodubovo_south.webp',
        link: './original_maps/forest/tsvelodubovo_south_full.jpg',
        bounds: [[60.37602980735656, 29.55107688903809], [60.37267793444899, 29.62626457214356], [60.3478039073735, 29.54455375671387]],
        author: ['MLVA_M','KAZNTSVA_O'],
        types: [],
    },
    {
        name: 'Цвелодубово, ур Нагорное',
        year: 2003,
        url: './maps/forest/tsvelodubovo_nagornoe_2003.webp',
        link: './original_maps/forest/tsvelodubovo_nagornoe_2003_full.jpg',
        bounds: [[60.394692158963956, 29.56502437591553], [60.39312323665598, 29.591116905212406], [60.37842682143063, 29.559960365295414]],
        author: ['SHRNN','KRCHKN_V','SRTSKY'],
        types: [],
    },
    {
        name: 'Цвелодубово, Щукино оз',
        year: 2021,
        url: './maps/forest/tsvelodubovo_south_2021.webp',
        bounds: [[60.366142912410425, 29.55159187316895], [60.36020084603804, 29.62523460388184], [60.33977734876115, 29.54309463500977]],
        author: 'CHGRVSKY_V',
        owner: 'SFSO_SPB',
        types: [],
    },
    {
        name: 'Нахимовское',
        url: './maps/forest/nakhimovskoe.webp',
        link: './original_maps/forest/nakhimovskoe_full.jpg',
        bounds: [[60.39952566047451, 29.505457878112797], [60.397935772084494, 29.52627182006836], [60.38368690664035, 29.498977661132816]],
        author: 'SHRNN',
        owner: 'SHRNN',
        types: [],
    },
    {
        name: 'Стрельцово',
        year: 2015,
        area: 2,
        url: './maps/forest/streltsovo.webp',
        bounds: [[60.61690218407662, 29.277491569519047], [60.61747069844156, 29.308176040649418], [60.596618619933196, 29.27839279174805]],
        author: ['SHRNN','RYLOV_V'],
        info: '© Т.Ю.Тарасени (ЛТА) и Л.Г.Рубис (СПбГУПТД).',
        types: [],
    },
    {
        name: 'Орловский парк',
        year: 1980,
        area: 4,
        url: './maps/forest/orlovsky_park_1980.webp',
        link: './original_maps/forest/orlovsky_park_1980_full.jpg',
        bounds: [[60.06653224902049, 30.242314338684086], [60.05922909614627, 30.30561447143555], [60.04633219385438, 30.225920677185062]],
        author: ['SHRNN','MLSHV_Y'],
        types: [],
    },
    {
        name: 'Юкки',
        year: 1988,
        url: './maps/forest/yukki_1988.webp',
        link: './original_maps/forest/yukki_1988_full.jpg',
        bounds: [[60.135008884902504, 30.266046524047855], [60.13039263307473, 30.35831451416016], [60.10319489936693, 30.259780883789066]],
        author: ['SHLKHN_Y','BZNV_A'],
        types: [],
    },
    {
        name: 'Юкки',
        year: 1990,
        url: './maps/forest/yukki_1990.webp',
        link: './original_maps/forest/yukki_1990_full.jpg',
        bounds: [[60.14936641593736, 30.269308090209964], [60.14577762073669, 30.33608436584473], [60.11012475663832, 30.2589225769043]],
        author: 'SHLKHN_Y',
        types: [],
    },
    {
        name: 'Юкки, север',
        year: 2007,
        url: './maps/forest/yukki_north_2007.webp',
        link: './original_maps/forest/yukki_north_2007_full.jpg',
        author: 'SHRNN',
        owner: 'SHRNN',
        bounds: [[60.1222271206045, 30.299735069274906], [60.12100853273321, 30.322694778442386], [60.11309730405933, 30.298447608947757]],
        types: [],
    },
    {
        name: 'Юкки, север',
        year: 2020,
        url: './maps/forest/yukki_north_2020.webp',
        author: ['TKMKV_K','KVZN'],
        owner: 'SHEIN',
        bounds: [[60.12263330653698, 30.300292968750004], [60.119597479892256, 30.33187866210938], [60.11318284102055, 30.296258926391605]],
        types: [],
    },
    {
        name: 'Юкки',
        year: 2014,
        url: './maps/forest/yukki_2014.webp',
        author: ['RYLOV_V','TMLNS'],
        owner: 'SHLKHN_AN',
        bounds: [[60.12752852168666, 30.2959156036377], [60.125583348693006, 30.331792831420902], [60.1104455480524, 30.292053222656254]],
        types: [],
    },
    {
        name: 'Юкки',
        year: 2015,
        url: './maps/forest/yukki_2015.webp',
        link: './original_maps/forest/yukki_2015_full.jpg',
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        bounds: [[60.13171773459218, 30.296001434326175], [60.13135440561496, 30.335698127746586], [60.11743802435264, 30.295529365539554]],
        types: [],
    },
    {
        name: 'Юкки, юг',
        year: 2019,
        url: './maps/forest/yukki_south_2019.webp',
        link: './original_maps/forest/yukki_south_2019_full.jpg',
        bounds: [[60.111022964723404, 30.301430225372318], [60.108884333769765, 30.32962560653687], [60.1034836725298, 30.29909133911133]],
        author: 'SHRNN',
        types: [],
    },
    {
        name: 'Каменка',
        year: 2015,
        url: './maps/forest/kamenka_2015.webp',
        link: './original_maps/forest/kamenka_2015_full.jpg',
        bounds: [[60.43067179904046, 28.998327255249027], [60.425758199767614, 29.044847488403324], [60.40122145583028, 28.985109329223636]],
        owner: 'KURD',
        types: [],
        author: ['DJCHKV','STLV_S'],
    },
    {
        name: 'Сертолово',
        year: 1988,
        url: './maps/forest/sertolovo_1988.webp',
        link: './original_maps/forest/sertolovo_1988_full.jpg',
        bounds: [[60.15966066656816, 30.20429134368897], [60.158550238634156, 30.229396820068363], [60.1384279131624, 30.199613571166996]],
        author: 'IVNVA_I',
        types: [],
    },
    {
        name: 'Сертолово',
        year: 1989,
        url: './maps/forest/sertolovo_1989.webp',
        link: './original_maps/forest/sertolovo_1989_full.jpg',
        bounds: [[60.14620487879914, 30.208883285522464], [60.143769433485375, 30.259780883789066], [60.12757127145033, 30.205621719360355]],
        author: 'RYLOV_V',
        types: [],
    },
    {
        name: 'Сертолово',
        year: 2016,
        url: './maps/forest/sertolovo_2016.webp',
        bounds: [[60.158870558234405, 30.20523548126221], [60.15707672826544, 30.22875308990479], [60.14368397598858, 30.20021438598633]],
        author: 'DBRTSV_V',
        owner: 'SHEIN',
        types: [],
    },
    {
        name: 'Новое Сертолово',
        year: 2023,
        url: './maps/forest/new_sertolovo_2023.webp',
        bounds: [[60.16376038319639, 30.18669605255127], [60.16117676720578, 30.21471977233887], [60.153211119033074, 30.18300533294678]],
        author: 'SVCHK',
        owner: 'SVCHK',
        types: [],
    },
    {
        name: 'Сертолово',
        year: 2024,
        url: './maps/forest/sertolovo_chistjie_ruchji_2024.webp',
        bounds: [[60.14776432361967, 30.226349830627445], [60.14460263244195, 30.256776809692386], [60.13804329022207, 30.22270202636719]],
        author: 'SVCHK',
        owner: 'SVCHK',
        types: [],
    },
    {
        name: 'Лупполово',
        year: 2022,
        url: './maps/forest/luppolovo_2022.webp',
        bounds: [[60.17394340330982, 30.242528915405277], [60.17061345472757, 30.277547836303714], [60.153488774626965, 30.233902931213382]],
        author: 'DBRTSV_V',
        owner: 'SHEIN',
        types: [],
    },
    {
        name: 'Вартемяги',
        year: 1987,
        url: './maps/forest/vartemjagi_1987.webp',
        link: './original_maps/forest/vartemjagi_1987_full.jpg',
        bounds: [[60.202127708632986, 30.219097137451175], [60.19641172873261, 30.31711578369141], [60.17332439994863, 30.210857391357425]],
        author: ['MLVA_M','KAZNTSVA_O','KAZNTSV_S'],
        types: [],
    },
    {
        name: 'Вартемяги-Лупполово',
        year: 1987,
        url: './maps/forest/vartemjagi_luppolovo_1987.webp',
        link: './original_maps/forest/vartemjagi_luppolovo_1987_full.jpg',
        bounds: [[60.19500390924258, 30.249395370483402], [60.19129209565133, 30.315914154052738], [60.15585943074604, 30.238323211669925]],
        author: ['MLVA_M','KAZNTSVA_O','KAZNTSV_S'],
        types: [],
    },
    {
        name: 'Вартемяги',
        year: 1990,
        url: './maps/forest/vartemjagi_1990.webp',
        link: './original_maps/forest/vartemjagi_1990_full.jpg',
        bounds: [[60.162287106404065, 30.295014381408695], [60.16510549128062, 30.34574031829834], [60.13069185421074, 30.301022529602054]],
        author: ['SHLKHN_Y','BZNV_A'],
        types: [],
    },
    {
        name: 'Вартемяги - север',
        year: 2017,
        url: './maps/forest/vartemjagi_north_2017.webp',
        bounds: [[60.18544620487518, 30.280766487121586], [60.18350445612343, 30.317974090576175], [60.17178751358586, 30.276517868041996]],
        author: 'DBRTSV_V',
        owner: 'SHEIN',
        types: [],
    },
    {
        name: 'Вартемяги - юг',
        year: 2018,
        url: './maps/forest/vartemjagi_south_2018.webp',
        bounds: [[60.16493468695678, 30.30784606933594], [60.161731941494104, 30.348143577575687], [60.148319724462795, 30.303683280944828]],
        author: 'DBRTSV_V',
        owner: 'SHEIN',
        types: [],
    },
    {
        name: 'Девяткино',
        year: 1997,
        url: './maps/forest/devjatkino_1997.webp',
        link: './original_maps/forest/devjatkino_1997_full.jpg',
        bounds: [[60.06466913487058, 30.42346000671387], [60.06573990298703, 30.452299118041996], [60.045132225832454, 30.4182243347168]],
        author: 'DBRTSV_V',
        types: [],
    },
    {
        name: 'Новое Девяткино',
        year: 1993,
        url: './maps/forest/new_devjatkino_1993.webp',
        link: './original_maps/forest/new_devjatkino_1993_full.jpg',
        bounds: [[60.062077732217986, 30.468049049377445], [60.0611996074672, 30.498433113098148], [60.04744641082711, 30.464100837707523]],
        author: 'KAZNTSVA_O',
        types: [],
    },
    {
        name: 'Яппиля',
        year: 1980,
        url: './maps/forest/yappilya_1980.webp',
        link: './original_maps/forest/yappilya_1980_full.jpg',
        bounds: [[60.236999194901045, 29.170460700988773], [60.23450656065482, 29.226336479187015], [60.22042068020475, 29.16749954223633]],
        author: 'OSMCHN',
        types: [],
    },
    {
        name: 'Зеркальный',
        year: 1991,
        url: './maps/forest/zerkalny_1991.webp',
        link: './original_maps/forest/zerkalny_1991_full.jpg',
        bounds: [[60.276515114183645, 29.060039520263672], [60.26727913379481, 29.157886505126957], [60.24483803916793, 29.0493106842041]],
        author: ['KUZNTSV_S','ISVNNA','KNSTNTNV_D','RDKV','URVNTSV'],
        types: [],
    },
    {
        name: 'Зеркальный',
        year: 2002,
        url: './maps/forest/zerkalny_2002.webp',
        link: './original_maps/forest/zerkalny_2002_full.jpg',
        bounds: [[60.24590295479465, 29.13359642028809], [60.24462505188773, 29.15934562683106], [60.23596594645027, 29.132137298583988]],
        author: ['VLKV_K','RDKV','URVNTSV','BLZRV_V','ARTMV'],
        types: [],
    },
    {
        name: 'Тарасовское',
        year: 1995,
        url: './maps/forest/tarasovskoe_1995.webp',
        link: './original_maps/forest/tarasovskoe_1995_full.jpg',
        bounds: [[60.28153635026126, 29.11557197570801], [60.274642591558795, 29.210071563720707], [60.245732570621065, 29.104928970336918]],
        author: ['EGRV_A','VLKV_K','URVNTSV'],
        types: [],
    },
    {
        name: 'Яппиля',
        year: 1999,
        url: './maps/forest/yappilya_1999.webp',
        link: './original_maps/forest/yappilya_1999_full.jpg',
        bounds: [[60.20214903505169, 29.16428089141846], [60.19801145030488, 29.23848152160645], [60.176163181510255, 29.15754318237305]],
        author: ['VLKV_K','URVNTSV','KRCHKN_V','FDRV_L'],
        types: [],
    },
    {
        name: 'Яппиля, оз Пистолет',
        year: 1979,
        url: './maps/forest/yappilya_pistolet_1979.webp',
        link: './original_maps/forest/yappilya_pistolet_1979_full.jpg',
        bounds: [[60.22353245455555, 29.121150970458988], [60.2216142724076, 29.172477722167972], [60.18412326764247, 29.114971160888675]],
        author: ['KAZNTSV_S','KAZNTSVA_O','GYKVCH','PYNN','PTRV_V'],
        types: [],
    },
    {
        name: 'Яппиля, оз Пистолет',
        year: 1992,
        url: './maps/forest/yappilya_pistolet_1992.webp',
        link: './original_maps/forest/yappilya_pistolet_1992_full.jpg',
        bounds: [[60.24713821354549, 29.126043319702152], [60.243219301102904, 29.18552398681641], [60.18433664822085, 29.11188125610352]],
        info: 'Кубок Мира',
        author: ['CHGRVSKY_V','CHGRVSKY_Y'],
        types: [],
    },
    {
        name: 'Яппиля, оз Пистолет',
        year: 1997,
        url: './maps/forest/yappilya_pistolet_1997.webp',
        link: './original_maps/forest/yappilya_pistolet_1997_full.jpg',
        bounds: [[60.21304502181074, 29.120850563049316], [60.21123282876284, 29.1547966003418], [60.18796390589544, 29.11484241485596]],
        author: 'CHGRVSKY_V',
        types: [],
    },
    {
        name: 'Яппиля, оз Пистолет',
        year: 2024,
        url: './maps/forest/yappilya_2024.webp',
        bounds: [[60.23520963053894, 29.110679626464847], [60.22787991859254, 29.183120727539066], [60.18736650278566, 29.091625213623047]],
        author: ['TKMKV_K','TKMKVA_P','KVZN','NSNV','NKFRV'],
        owner: ['GLTV_YU', 'GLFSTRM'],
        types: [],
    },
    {
        name: 'Яппиля - Тарасовское',
        year: 2024,
        url: './maps/forest/yappilya_tarasovskoe_2024.webp',
        bounds: [[60.28281281280947, 29.109477996826175], [60.27234434911475, 29.23118591308594], [60.22583412498815, 29.08767700195313]],
        author: ['VRBY','MLNKV_L','KVZN','TKMKV_K'],
        owner: ['GLTV_YU', 'GLFSTRM'],
        types: [],
    },
    {
        name: 'Заходское',
        year: 1968,
        info: 'Первые многодневные соревнования.',
        url: './maps/forest/zahodskoe_1968.webp',
        link: './original_maps/forest/zahodskoe_1968_full.jpg',
        bounds: [[60.4162253941698, 29.369373321533207], [60.41491176636754, 29.475460052490238], [60.379254068536234, 29.366111755371097]],
        types: [],
    },
    {
        name: 'Каннельярви',
        year: 1968,
        info: 'Первые многодневные соревнования.',
        url: './maps/forest/kanneljarvi_1968.webp',
        link: './original_maps/forest/kanneljarvi_1968_full.jpg',
        bounds: [[60.38943385115715, 29.384651184082035], [60.38693161620689, 29.42173004150391], [60.31351798708459, 29.35976028442383]],
        types: [],
    },
    {
        name: 'Каннельярви, карьер',
        year: 2023,
        url: './maps/forest/kanneljarvi_2023.webp',
        bounds: [[60.33833320798648, 29.336500167846683], [60.3309416045955, 29.407052993774418], [60.313135413137786, 29.326286315917972]],
        author: ['TKMKV_K','KUZNTSV_A','KVZN'],
        owner: 'SFSO_SPB',
        types: [],
    },
    {
        name: 'Каннельярви, оз Исток',
        year: 2006,
        url: './maps/forest/kanneljarvi_istok_2006.webp',
        link: './original_maps/forest/kanneljarvi_istok_2006_full.jpg',
        bounds: [[60.371702007906244, 29.335298538208008], [60.36873161683617, 29.372549057006836], [60.34623272596288, 29.326457977294925]],
        author: ['SHRNN','VSLVSKY','RYLOV_V'],
        types: [],
    },
    {
        name: 'Каннельярви, оз Исток',
        year: 2006,
        url: './maps/forest/kanneljarvi_istok.webp',
        link: './original_maps/forest/kanneljarvi_bystrjanka_2006_full.jpg',
        bounds: [[60.371489846094434, 29.309291839599613], [60.3654638739312, 29.380359649658207], [60.34585053525739, 29.301223754882816]],
        author: ['VSLVSKY','RYLOV_V'],
        types: [],
    },
    {
        name: 'Поляны',
        year: 1977,
        url: './maps/forest/polyany_1977.webp',
        link: './original_maps/forest/polyany_1977_full.jpg',
        bounds: [[60.33761111363023, 29.254531860351566], [60.33395792081405, 29.298133850097656], [60.30790645342296, 29.24534797668457]],
        author: 'MLVA_M',
        types: [],
    },
    {
        name: 'Семиозерье',
        year: 2022,
        url: './maps/forest/polyany_2022.webp',
        bounds: [[60.32252843308696, 29.2701530456543], [60.31449565570198, 29.337959289550785], [60.29808394979354, 29.2591667175293]],
        author: ['SHRNN','DBRTSV_V'],
        owner: 'SFSO_SPB',
        types: [],
    },
    {
        name: 'Поляны',
        year: 2021,
        area: 2.2,
        url: './maps/forest/polyany_2021.webp',
        bounds: [[60.31186013428563, 29.307317733764652], [60.308033998984186, 29.34036254882813], [60.28728003940577, 29.29435729980469]],
        author: ['SHRNN','DBRTSV_V'],
        owner: 'SFSO_SPB',
        types: [],
    },
    {
        name: 'Гладышевский заказник',
        year: 1974,
        url: './maps/forest/gladyshevsky_zakaznik_1974.webp',
        link: './original_maps/forest/gladyshevsky_zakaznik_1974_full.jpg',
        bounds: [[60.270216202896975, 29.37332153320313], [60.270131074169086, 29.43923950195313], [60.22856182141975, 29.370231628417972]],
        types: [],
    },
    {
        name: 'Гладышевское оз',
        year: 2017,
        url: './maps/forest/gladyshevskoe_oz_2017.webp',
        link: './original_maps/forest/gladyshevskoe_oz_2017_full.jpg',
        bounds: [[60.30601446912385, 29.317789077758793], [60.29963618682375, 29.36654090881348], [60.290513079858975, 29.31040763854981]],
        author: 'SHRNN',
        types: [],
    },
    {
        name: 'Озерки',
        year: 1997,
        url: './maps/forest/ozerki_1997.webp',
        link: './original_maps/forest/ozerki_1997_full.jpg',
        bounds: [[60.25808312606245, 29.01497840881348], [60.255826303456416, 29.06046867370606], [60.232652940467396, 29.0105152130127]],
        author: ['VLKV_K','EGRV_A','URVNTSV'],
        types: [],
    },
    {
        name: 'Медное оз',
        year: 2001,
        url: './maps/forest/mednoe_svetloe_2001.webp',
        link: './original_maps/forest/mednoe_svetloe_2001_full.jpg',
        bounds: [[60.231246675898234, 30.110778808593754], [60.226260342518756, 30.17231941223145], [60.20276749516488, 30.10116577148438]],
        author: 'CHGRVSKY_V',
        types: [],
        zindex: 2
    },
/*
    {
        name: 'Первомайское, Семейные оз',
        year: 2012,
        url: './maps/forest/pervomayskoe_semejnie_2012.webp',
        bounds: [[60.432831853362416, 29.665489196777347], [60.43033295396628, 29.70042228698731], [60.413301440559906, 29.660038948059086]],
        author: ['MKHLV_A','SLBDNK','GVRLK'],
        owner: 'WN',
        types: [],
    },
    {
        name: 'Первомайское, Семейные оз',
        year: 2020,
        url: './maps/forest/pervomayskoe_semejnye_2020.webp',
        bounds: [[60.44106839014939, 29.649095535278324], [60.43740561224754, 29.699048995971683], [60.42380949786482, 29.64471817016602]],
        author: ['MKHLV_A','SLBDNK','GVRLK'],
        owner: 'WN',
        types: [],
    },
    {
        name: 'Первомайское, Протяжённое оз',
        year: 2014,
        url: './maps/forest/pervomayskoe_protjazhennoe_2014.webp',
        bounds: [[60.442402131582845, 29.60197448730469], [60.43863364159355, 29.668064117431644], [60.41368284071863, 29.594163894653324]],
        author: ['GVRLK','MKHLV_A','SLBDNK'],
        owner: 'WN',
        types: [],
    },
    {
        name: 'Первомайское, Тайванчик',
        year: 2022,
        url: './maps/forest/pervomayskoe_taiwan_2022.webp',
        bounds: [[60.438337224965586, 29.690895080566406], [60.435584655732214, 29.73930358886719], [60.40736797338299, 29.683084487915043]],
        author: ['MKHLV_A','SLBDNK','GVRLK'],
        owner: 'WN',
        types: [],
    },
    {
        name: 'Первомайское, оз Дедово',
        year: 2015,
        url: './maps/forest/pervomayskoe_dedovo_2015.webp',
        bounds: [[60.41914908496061, 29.69638824462891], [60.41711524092745, 29.73784446716309], [60.39219032808884, 29.68943595886231]],
        author: ['SLBDNK','MKHLV_A','GVRLK'],
        owner: 'WN',
        types: [],
    },
    {
        name: 'Первомайское, юг',
        year: 2012,
        url: './maps/forest/pervomayskoe_south_2012.webp',
        bounds: [[60.41395829360783, 29.658493995666507], [60.411203659754904, 29.69634532928467], [60.40090350093107, 29.654889106750492]],
        author: ['SLBDNK','MKHLV_A','GVRLK'],
        owner: 'WN',
        types: [],
    },
    {
        name: 'Первомайское',
        year: 2016,
        url: './maps/forest/pervomayskoe_2016.webp',
        bounds: [[60.41575927424778, 29.634590148925785], [60.41414899039554, 29.65965270996094], [60.40268400836027, 29.63145732879639]],
        author: ['MKHLV_A','SLBDNK','GVRLK'],
        owner: 'WN',
        types: [],
    },
*/
    {
        name: 'Первомайское',
        year: 2005,
        info: 'Белые Ночи 2005',
        url: './maps/forest/pervomayskoe_2005.webp',
        link: './original_maps/forest/pervomayskoe_2005.jpg',
        bounds: [[60.42719846959152, 29.665489196777347], [60.42160647681901, 29.758358001708988], [60.386083357333455, 29.65493202209473]],
        author: ['SHRNN','RYLOV_V'],
        areas: [35,65],
        owner: 'SHRNN',
        types: [],
    },
    {
        name: 'Первомайское',
        year: 2021,
        area: 28,
        info: '2010-2021гг.',
        url: './maps/forest/pervomayskoe_2021.webp',
        bounds: [[60.44985313980648, 29.60197448730469], [60.44096253530979, 29.749946594238285], [60.39647300617815, 29.588928222656254]],
        author: ['MKHLV_A','SLBDNK','GVRLK'],
        owner: 'WN',
        types: [],
    },
    {
        name: 'Первомайское, Червонное оз',
        year: 2006,
        url: './maps/forest/pervomayskoe_chervonnoe_2006.webp',
        link: './original_maps/forest/pervomayskoe_chervonnoe_2006_full.jpg',
        info: 'Кубок России по СРП',
        bounds: [[60.42253854239894, 29.675359725952152], [60.41753896892244, 29.75303649902344], [60.395370588437366, 29.668235778808597]],
        author: ['RYLOV_V','SHRNN','MKHLV_A'], //Гибрид карт Рылова, Шириняна и бригады Михайлова А.
        types: [],
    },
    {
        name: 'Первомайское, оз Дедово',
        year: 2004,
        url: './maps/forest/pervomayskoe_dedovo_2004.webp',
        link: './original_maps/forest/pervomayskoe_dedovo_2004_full.jpg',
        bounds: [[60.42258090838146, 29.698233604431156], [60.420610831803856, 29.73556995391846], [60.39660020582283, 29.691238403320316]],
        author: ['RYLOV_V','SHRNN'],
        types: [],
    },
    {
        name: 'Первомайское, окраина',
        year: 2016,
        url: './maps/forest/pervomayskoe_hill_2016.webp',
        bounds: [[60.36097549822987, 29.71784591674805], [60.36019023423638, 29.726278781890873], [60.35531905260248, 29.718253612518314]],
        author: 'SHRNN',
        owner: 'KOSOR',
        types: [],
    },
    {
        name: 'Вещево, заброшенный аэродром',
        year: 2021,
        url: './maps/forest/veschevo_2021.webp',
        bounds: [[60.68982173198891, 29.154109954833988], [60.68667027795842, 29.189515113830566], [60.666514683959356, 29.145269393920902]],
        author: ['CHGRVSKY_V','CHGRVSKY_Y'],
        owner: 'SFSO_SPB',
        types: [],
    },
    {
        name: 'Осиновая Роща - Сертолово',
        year: 1993,
        url: './maps/forest/osinovaja_roscha_1993.webp',
        link: './original_maps/forest/osinovaja_roscha_1993_full.jpg',
        bounds: [[60.13872706122912, 30.22493362426758], [60.136077369404795, 30.27042388916016], [60.10772941530803, 30.21746635437012]],
        author: ['KAZNTSVA_O','KAZNTSV_S'],
        types: [],
    },
    {
        name: 'Осиновая Роща - Сертолово',
        year: 2018,
        url: './maps/forest/osinovaja_roscha_2018.webp',
        bounds: [[60.13996635995334, 30.22639274597168], [60.13612010806311, 30.27214050292969], [60.11160037127036, 30.216650962829593]],
        owner: 'SHLKHN_AN',
        author: ['KVZN','TKMKV_K','SHRNN'],
        types: [],
    },
    {
        name: 'Парголовская лыжная трасса',
        year: 2007,
        url: './maps/forest/pargolovo_2020.webp',
        link: './original_maps/forest/pargolovo_2020_full.jpg',
        bounds: [[60.07938915059505, 30.277998447418216], [60.07942125981127, 30.290057659149173], [60.073341357395044, 30.278856754302982]],
        types: [],
        author: 'SHRNN',
        owner: 'SHRNN',
        zindex: 3,
    },
    {
        name: 'Парголовская лыжная трасса',
        year: 2021,
        url: './maps/forest/pargolovo_2021.webp',
        owner: 'SFSO_SPB',
        bounds: [[60.080116951817864, 30.27638912200928], [60.07852218993849, 30.293233394622806], [60.07382308068981, 30.27364253997803]],
        types: [],
        author: 'DBRTSV_V',
        zindex: 2,
    },
    {
        name: 'Барышево',
        year: 2015,
        area: 3,
        url: './maps/forest/baryshevo_2015.webp',
        bounds: [[60.74678873341951, 29.500093460083008], [60.74041278013193, 29.570732116699222], [60.717331311087456, 29.483957290649414]],
        author: ['MKHLV_A','USNKO'],
        owner: 'WN',
        types: [],
    },
];
