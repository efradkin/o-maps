// types can be ROGAINE, SPRINT, CITY, RELIEF
let forestMaps = [
    // --- лесные карты ---
    {
        name: 'Уткино',
        date: '1975-01-26',
        info: 'Первенство Ленинграда, маркир.',
        url: './maps/forest/utkino_1975.webp',
        link: './original_maps/forest/utkino_1975_omaps.jpg',
        bounds: [[60.271748482126604, 29.158487319946293], [60.26715142915802, 29.21994209289551], [60.25318604937096, 29.15256500244141]]
    },
    {
        name: 'Цвелодубово',
        year: 2020,
        url: './maps/forest/tsvelodubovo_2020.webp',
        bounds: [[60.390960544134856, 29.556913375854496], [60.38763141314447, 29.598112106323246], [60.36317201461962, 29.54730033874512]],
        author: ['TKMKV_K','KVZN','LPTV_Y'],
        owner: 'NW'
    },
    {
        name: 'Заходское',
        year: 1976,
        url: './maps/forest/zakhodskoe_1976.webp',
        link: './original_maps/forest/zakhodskoe_1976_omaps.jpg',
        bounds: [[60.40160299760925, 29.367313385009766], [60.40266281241613, 29.423789978027347], [60.37526611981126, 29.370918273925785]],
        zindex: 3
    },
    {
        name: 'Цвелодубово',
        year: 1986,
        url: './maps/forest/tsvelodubovo_1986.webp',
        link: './original_maps/forest/tsvelodubovo_1986_omaps.jpg',
        bounds: [[60.36730997674438, 29.568200111389164], [60.36440284798612, 29.624333381652832], [60.34954485783966, 29.565196037292484]],
        author: ['EGRV_A','KNSTNTNV_D','MRVNK_D','GLV_N'],
        zindex: 3
    },
    {
        name: 'Цвелодубово',
        year: 1995,
        start: 'WN',
        url: './maps/forest/tsvelodubovo_south_1995.webp',
        link: './original_maps/forest/tsvelodubovo_south_1995_omaps.jpg',
        bounds: [[60.36376621584052, 29.55051898956299], [60.35947923565616, 29.62145805358887], [60.347485430770675, 29.546484947204593]],
        author: 'MLVA_M'
    },
    {
        name: 'Цвелодубово',
        year: 1987,
        url: './maps/forest/tsvelodubovo_1987.webp',
        link: './original_maps/forest/tsvelodubovo_1987_omaps.jpg',
        bounds: [[60.37598738074033, 29.54704284667969], [60.37403569666894, 29.579615592956547], [60.363214457923185, 29.543266296386722]],
        author: ['EGRV_A','KNSTNTNV_D','MRVNK_D','GLV_N'],
        zindex: 3
    },
    {
        name: 'Цвелодубово',
        year: 1993,
        area: 8,
        url: './maps/forest/tsvelodubovo_1993.webp',
        link: './original_maps/forest/tsvelodubovo_1993_omaps.jpg',
        bounds: [[60.40194214210233, 29.54704284667969], [60.39651540611492, 29.62077140808106], [60.36138934596662, 29.53554153442383]],
        author: ['SHRNN','KRCHKN_V']
    },
    {
        name: 'Цвелодубово, Голубые оз',
        year: 1995,
        start: 'WN',
        url: './maps/forest/tsvelodubovo_1995.webp',
        link: './original_maps/forest/tsvelodubovo_1995_omaps.jpg',
        bounds: [[60.394904169693135, 29.55356597900391], [60.39036683870487, 29.6257495880127], [60.363002240852744, 29.548501968383793]],
        author: 'MLVA_M'
    },
    {
        name: 'Цвелодубово, Голубые оз',
        year: 1999,
        start: 'WN',
        url: './maps/forest/tsvelodubovo_1999.webp',
        link: './original_maps/forest/tsvelodubovo_1999_omaps.jpg',
        bounds: [[60.38271130983792, 29.553737640380863], [60.37972071148227, 29.613561630249027], [60.362747578544536, 29.550175666809082]],
        author: ['MLVA_M','KAZNTSVA_O','KAZNTSV_S']
    },
    {
        name: 'Цвелодубово',
        year: 1,
        url: './maps/forest/tsvelodubovo_old.webp',
        link: './original_maps/forest/tsvelodubovo_old_omaps.jpg',
        bounds: [[60.38120544002093, 29.5488452911377], [60.37726015519434, 29.63295936584473], [60.35158292567546, 29.542665481567386]]
    },
    {
        name: 'Цвелодубово',
        year: 1980,
        url: './maps/forest/tsvelodubovo_1980.webp',
        link: './original_maps/forest/tsvelodubovo_1980_omaps.jpg',
        bounds: [[60.39503137546792, 29.547643661499023], [60.39032443075989, 29.629783630371097], [60.352007507110805, 29.538974761962894]],
        author: ['MLVA_M','KAZNTSVA_O']
    },
    {
        name: 'Цвелодубово, Щукино оз',
        year: 1980,
        url: './maps/forest/tsvelodubovo_south.webp',
        link: './original_maps/forest/tsvelodubovo_south_omaps.jpg',
        bounds: [[60.37602980735656, 29.55107688903809], [60.37267793444899, 29.62626457214356], [60.3478039073735, 29.54455375671387]],
        author: ['MLVA_M','KAZNTSVA_O']
    },
    {
        name: 'Цвелодубово, ур Нагорное',
        date: '2003-06-18',
        start: 'YM',
        url: './maps/forest/tsvelodubovo_nagornoe_2003.webp',
        link: './original_maps/forest/tsvelodubovo_nagornoe_2003_omaps.jpg',
        bounds: [[60.394692158963956, 29.56502437591553], [60.39312323665598, 29.591116905212406], [60.37842682143063, 29.559960365295414]],
        author: ['SHRNN','KRCHKN_V','SRTSKY']
    },
    {
        name: 'Цвелодубово, Марченковский лес',
        date: '2003-06-17',
        start: 'YM',
        url: './maps/forest/tsvelodubovo_marchenkovsky_2003.webp',
        link: './original_maps/forest/tsvelodubovo_marchenkovsky_2003_omaps.jpg',
        bounds: [[60.38037824246949, 29.55352306365967], [60.37719651765257, 29.605321884155277], [60.36198357968282, 29.549446105957035]],
        author: ['SHRNN','KRCHKN_V','SRTSKY']
    },
    {
        name: 'Цвелодубово, Щукино оз',
        year: 2021,
        url: './maps/forest/tsvelodubovo_south_2021.webp',
        link: './original_maps/forest/tsvelodubovo_south_2021_omaps.gif',
        bounds: [[60.366142912410425, 29.55159187316895], [60.36020084603804, 29.62523460388184], [60.33977734876115, 29.54309463500977]],
        author: 'CHGRVSKY_V',
        owner: 'SFSO_SPB'
    },
    {
        name: 'Нахимовское',
        url: './maps/forest/nakhimovskoe.webp',
        link: './original_maps/forest/nakhimovskoe_omaps.jpg',
        bounds: [[60.39952566047451, 29.505457878112797], [60.397935772084494, 29.52627182006836], [60.38368690664035, 29.498977661132816]],
        author: 'SHRNN',
        owner: 'SHRNN'
    },
    {
        name: 'Стрельцово',
        year: 2015,
        area: 2,
        url: './maps/forest/streltsovo.webp',
        bounds: [[60.61690218407662, 29.277491569519047], [60.61747069844156, 29.308176040649418], [60.596618619933196, 29.27839279174805]],
        author: ['SHRNN','RYLOV_V'],
        info: '© Т.Ю.Тарасени (ЛТА) и Л.Г.Рубис (СПбГУПТД).'
    },
    {
        name: 'Орловский парк',
        year: 1980,
        area: 4,
        url: './maps/forest/orlovsky_park_1980.webp',
        link: './original_maps/forest/orlovsky_park_1980_omaps.jpg',
        bounds: [[60.06653224902049, 30.242314338684086], [60.05922909614627, 30.30561447143555], [60.04633219385438, 30.225920677185062]],
        author: ['SHRNN','MLSHV_Y']
    },
    {
        name: 'Юкки',
        date: '1966-03-11',
        start: 'MEET_1966',
        url: './maps/forest/yukki_1966.webp',
        link: ['./original_maps/forest/meet_1966_title.jpg','./original_maps/forest/meet_1966_agenda.jpg','./original_maps/forest/yukki_1966_omaps.jpg'],
        info: 'Маркир.',
        bounds: [[60.13586367528046, 30.287075042724613], [60.13804329022207, 30.392217636108402], [60.0974189044925, 30.289564132690433]]
    },
    {
        name: 'Юкки',
        year: 1988,
        url: './maps/forest/yukki_1988.webp',
        link: './original_maps/forest/yukki_1988_omaps.jpg',
        bounds: [[60.135008884902504, 30.266046524047855], [60.13039263307473, 30.35831451416016], [60.10319489936693, 30.259780883789066]],
        author: ['SHLKHN_Y','BZNV_A']
    },
    {
        name: 'Юкки',
        year: 1988,
        url: './maps/forest/yukki_1990.webp',
        link: './original_maps/forest/yukki_1990_omaps.jpg',
        bounds: [[60.14936641593736, 30.269308090209964], [60.14577762073669, 30.33608436584473], [60.11012475663832, 30.2589225769043]],
        author: 'SHLKHN_Y',
        qtty: 20
    },
    {
        name: 'Юкки, север',
        year: 2007,
        url: './maps/forest/yukki_north_2007.webp',
        link: './original_maps/forest/yukki_north_2007_omaps.jpg',
        author: 'SHRNN',
        owner: 'SHRNN',
        bounds: [[60.1222271206045, 30.299735069274906], [60.12100853273321, 30.322694778442386], [60.11309730405933, 30.298447608947757]]
    },
    {
        name: 'Юкки, север',
        year: 2020,
        url: './maps/forest/yukki_north_2020.webp',
        link: './original_maps/forest/yukki_north_2020_omaps.jpg',
        author: ['TKMKV_K','KVZN'],
        owner: 'SHEIN',
        bounds: [[60.12263330653698, 30.300292968750004], [60.119597479892256, 30.33187866210938], [60.11318284102055, 30.296258926391605]]
    },
    {
        name: 'Юкки',
        year: 2014,
        url: './maps/forest/yukki_2014.webp',
        author: ['RYLOV_V','TMLNS'],
        owner: 'SHLKHN_AN',
        bounds: [[60.12752852168666, 30.2959156036377], [60.125583348693006, 30.331792831420902], [60.1104455480524, 30.292053222656254]]
    },
    {
        name: 'Юкки',
        year: 2015,
        url: './maps/forest/yukki_2015.webp',
        link: './original_maps/forest/yukki_2015_omaps.jpg',
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        bounds: [[60.13171773459218, 30.296001434326175], [60.13135440561496, 30.335698127746586], [60.11743802435264, 30.295529365539554]]
    },
    {
        name: 'Юкки, юг',
        year: 2019,
        url: './maps/forest/yukki_south_2019.webp',
        link: './original_maps/forest/yukki_south_2019_omaps.jpg',
        bounds: [[60.111022964723404, 30.301430225372318], [60.108884333769765, 30.32962560653687], [60.1034836725298, 30.29909133911133]],
        author: 'SHRNN'
    },
    {
        name: 'Каменка',
        year: 2015,
        url: './maps/forest/kamenka_2015.webp',
        link: './original_maps/forest/kamenka_2015_omaps.jpg',
        bounds: [[60.43067179904046, 28.998327255249027], [60.425758199767614, 29.044847488403324], [60.40122145583028, 28.985109329223636]],
        owner: 'KURD',
        author: ['DJCHKV','STLV_S']
    },
    {
        name: 'Сертолово',
        year: 1988,
        url: './maps/forest/sertolovo_1988.webp',
        link: './original_maps/forest/sertolovo_1988_omaps.jpg',
        bounds: [[60.15966066656816, 30.20429134368897], [60.158550238634156, 30.229396820068363], [60.1384279131624, 30.199613571166996]],
        author: 'IVNVA_I',
        qtty: 20
    },
    {
        name: 'Сертолово',
        year: 1989,
        url: './maps/forest/sertolovo_1989.webp',
        link: './original_maps/forest/sertolovo_1989_omaps.jpg',
        bounds: [[60.14620487879914, 30.208883285522464], [60.143769433485375, 30.259780883789066], [60.12757127145033, 30.205621719360355]],
        author: 'RYLOV_V'
    },
    {
        name: 'Сертолово',
        year: 2016,
        url: './maps/forest/sertolovo_2016.webp',
        link: './original_maps/forest/sertolovo_2016_omaps.jpg',
        bounds: [[60.158870558234405, 30.20523548126221], [60.15707672826544, 30.22875308990479], [60.14368397598858, 30.20021438598633]],
        author: 'DBRTSV_V',
        owner: 'SHEIN'
    },
    {
        name: 'Новое Сертолово',
        year: 2023,
        url: './maps/forest/new_sertolovo_2023.webp',
        bounds: [[60.16376038319639, 30.18669605255127], [60.16117676720578, 30.21471977233887], [60.153211119033074, 30.18300533294678]],
        author: 'SVCHK',
        owner: 'SVCHK'
    },
    {
        name: 'Сертолово',
        year: 2024,
        url: './maps/forest/sertolovo_chistjie_ruchji_2024.webp',
        bounds: [[60.14776432361967, 30.226349830627445], [60.14460263244195, 30.256776809692386], [60.13804329022207, 30.22270202636719]],
        author: 'SVCHK',
        owner: 'SVCHK'
    },
    {
        name: 'Лупполово',
        year: 2022,
        url: './maps/forest/luppolovo_2022.webp',
        link: './original_maps/forest/luppolovo_2022_omaps.jpg',
        bounds: [[60.17394340330982, 30.242528915405277], [60.17061345472757, 30.277547836303714], [60.153488774626965, 30.233902931213382]],
        author: 'DBRTSV_V',
        owner: 'SHEIN'
    },
    {
        name: 'Вартемяги',
        year: 1988,
        start: 'WN',
        url: './maps/forest/vartemjagi_1987.webp',
        link: ['./original_maps/forest/vartemjagi_1987_omaps.jpg','./original_maps/forest/vartemjagi_1987_dist_omaps.jpg'],
        bounds: [[60.202127708632986, 30.219097137451175], [60.19641172873261, 30.31711578369141], [60.17332439994863, 30.210857391357425]],
        author: ['MLVA_M','KAZNTSVA_O','KAZNTSV_S']
    },
    {
        name: 'Вартемяги-Лупполово',
        year: 1988,
        start: 'WN',
        url: './maps/forest/vartemjagi_luppolovo_1987.webp',
        link: ['./original_maps/forest/vartemjagi_luppolovo_1987_omaps.jpg','./original_maps/forest/vartemjagi_luppolovo_1987_dist_omaps.jpg'],
        bounds: [[60.19500390924258, 30.249395370483402], [60.19129209565133, 30.315914154052738], [60.15585943074604, 30.238323211669925]],
        author: ['MLVA_M','KAZNTSVA_O','KAZNTSV_S']
    },
    {
        name: 'Вартемяги',
        year: 1990,
        url: './maps/forest/vartemjagi_1990.webp',
        link: './original_maps/forest/vartemjagi_1990_omaps.jpg',
        bounds: [[60.162287106404065, 30.295014381408695], [60.16510549128062, 30.34574031829834], [60.13069185421074, 30.301022529602054]],
        author: ['SHLKHN_Y','BZNV_A'],
        qtty: 20
    },
    {
        name: 'Вартемяги, север',
        year: 2017,
        url: './maps/forest/vartemjagi_north_2017.webp',
        link: './original_maps/forest/vartemjagi_north_2017_omaps.jpg',
        bounds: [[60.18544620487518, 30.280766487121586], [60.18350445612343, 30.317974090576175], [60.17178751358586, 30.276517868041996]],
        author: 'DBRTSV_V',
        owner: 'SHEIN'
    },
    {
        name: 'Вартемяги, юг',
        year: 2018,
        url: './maps/forest/vartemjagi_south_2018.webp',
        link: './original_maps/forest/vartemjagi_south_2018_omaps.jpg',
        bounds: [[60.16493468695678, 30.30784606933594], [60.161731941494104, 30.348143577575687], [60.148319724462795, 30.303683280944828]],
        author: 'DBRTSV_V',
        owner: 'SHEIN'
    },
    {
        name: 'Девяткино',
        year: 1997,
        url: './maps/forest/devjatkino_1997.webp',
        link: './original_maps/forest/devjatkino_1997_omaps.jpg',
        bounds: [[60.06466913487058, 30.42346000671387], [60.06573990298703, 30.452299118041996], [60.045132225832454, 30.4182243347168]],
        author: 'DBRTSV_V'
    },
    {
        name: 'Новое Девяткино',
        year: 1993,
        url: './maps/forest/new_devjatkino_1993.webp',
        link: './original_maps/forest/new_devjatkino_1993_omaps.jpg',
        bounds: [[60.062077732217986, 30.468049049377445], [60.0611996074672, 30.498433113098148], [60.04744641082711, 30.464100837707523]],
        author: 'KAZNTSVA_O'
    },
    {
        name: 'Яппиля',
        year: 1980,
        url: './maps/forest/yappilya_1980.webp',
        link: './original_maps/forest/yappilya_1980_omaps.jpg',
        bounds: [[60.236999194901045, 29.170460700988773], [60.23450656065482, 29.226336479187015], [60.22042068020475, 29.16749954223633]],
        author: 'OSMCHN'
    },
    {
        name: 'Зеркальный',
        year: 1991,
        url: './maps/forest/zerkalny_1991.webp',
        link: './original_maps/forest/zerkalny_1991_omaps.jpg',
        bounds: [[60.276515114183645, 29.060039520263672], [60.26727913379481, 29.157886505126957], [60.24483803916793, 29.0493106842041]],
        author: ['KUZNTSV_S','ISVNNA','KNSTNTNV_D','RDKV','URVNTSV']
    },
    {
        name: 'Зеркальный',
        year: 2002,
        url: './maps/forest/zerkalny_2002.webp',
        link: './original_maps/forest/zerkalny_2002_omaps.jpg',
        bounds: [[60.24590295479465, 29.13359642028809], [60.24462505188773, 29.15934562683106], [60.23596594645027, 29.132137298583988]],
        author: ['VLKV_K','RDKV','URVNTSV','BLZRV_V','ARTMV']
    },
    {
        name: 'Тарасовское',
        year: 1994,
        start: 'MMS',
        url: './maps/forest/tarasovskoe_1995.webp',
        link: './original_maps/forest/tarasovskoe_1995_omaps.jpg',
        bounds: [[60.28153635026126, 29.11557197570801], [60.274642591558795, 29.210071563720707], [60.245732570621065, 29.104928970336918]],
        author: ['EGRV_A','VLKV_K','URVNTSV'],
        areas: [25,25,50]
    },
    {
        name: 'Яппиля',
        year: 1999,
        start: 'MMS',
        url: './maps/forest/yappilya_1999.webp',
        link: './original_maps/forest/yappilya_1999_omaps.jpg',
        bounds: [[60.20214903505169, 29.16428089141846], [60.19801145030488, 29.23848152160645], [60.176163181510255, 29.15754318237305]],
        author: ['VLKV_K','URVNTSV','KRCHKN_V','FDRV_L'],
        areas: [35,35,20,10]
    },
    {
        name: 'Яппиля, оз Пистолет',
        year: 1979,
        url: './maps/forest/yappilya_pistolet_1979.webp',
        link: './original_maps/forest/yappilya_pistolet_1979_omaps.jpg',
        bounds: [[60.22353245455555, 29.121150970458988], [60.2216142724076, 29.172477722167972], [60.18412326764247, 29.114971160888675]],
        author: ['KAZNTSV_S','KAZNTSVA_O','GYKVCH','PYNN','PTRV_V']
    },
    {
        name: 'Яппиля, оз Пистолет',
        year: 1992,
        major: true,
        logo: 'owc_1992.jpg',
        url: './maps/forest/yappilya_pistolet_1992.webp',
        link: './original_maps/forest/yappilya_pistolet_1992_omaps.jpg',
        bounds: [[60.24713821354549, 29.126043319702152], [60.243219301102904, 29.18552398681641], [60.18433664822085, 29.11188125610352]],
        info: '<a href="https://o-site.spb.ru/history/Knots/wc-92.html">Кубок Мира</a>.',
        author: ['CHGRVSKY_V','CHGRVSKY_Y'],
        zindex: 2
    },
    {
        name: 'Яппиля, оз Пистолет',
        year: 1997,
        url: './maps/forest/yappilya_pistolet_1997.webp',
        link: './original_maps/forest/yappilya_pistolet_1997_omaps.jpg',
        bounds: [[60.21304502181074, 29.120850563049316], [60.21123282876284, 29.1547966003418], [60.18796390589544, 29.11484241485596]],
        author: 'CHGRVSKY_V'
    },
    {
        name: 'Яппиля, оз Пистолет',
        year: 2024,
        url: './maps/forest/yappilya_2024.webp',
        bounds: [[60.23520963053894, 29.110679626464847], [60.22787991859254, 29.183120727539066], [60.18736650278566, 29.091625213623047]],
        author: ['TKMKV_K','TKMKVA_P','KVZN','NSNV','NKFRV_A'],
        owner: ['GLTV_YU', 'GLFSTRM']
    },
    {
        name: 'Яппиля - Тарасовское',
        year: 2024,
        url: './maps/forest/yappilya_tarasovskoe_2024.webp',
        bounds: [[60.28281281280947, 29.109477996826175], [60.27234434911475, 29.23118591308594], [60.22583412498815, 29.08767700195313]],
        author: ['VRBY','MLNKV_L','KVZN','TKMKV_K'],
        owner: ['GLTV_YU', 'GLFSTRM']
    },
    {
        name: 'Заходское',
        year: 1968,
        info: '<a href="https://o-site.spb.ru/history/History/fenomen.html">Первые многодневные соревнования</a>.',
        url: './maps/forest/zahodskoe_1968.webp',
        link: './original_maps/forest/zahodskoe_1968_omaps.jpg',
        bounds: [[60.4162253941698, 29.369373321533207], [60.41491176636754, 29.475460052490238], [60.379254068536234, 29.366111755371097]]
    },
    {
        name: 'Каннельярви',
        year: 1968,
        info: '<a href="https://o-site.spb.ru/history/History/fenomen.html">Первые многодневные соревнования</a>.',
        url: './maps/forest/kanneljarvi_1968.webp',
        link: './original_maps/forest/kanneljarvi_1968_omaps.jpg',
        bounds: [[60.38943385115715, 29.384651184082035], [60.38693161620689, 29.42173004150391], [60.31351798708459, 29.35976028442383]]
    },
    {
        name: 'Каннельярви, карьер',
        year: 2023,
        url: './maps/forest/kanneljarvi_2023.webp',
        link: './original_maps/forest/kanneljarvi_2023_omaps.jpg',
        bounds: [[60.33833320798648, 29.336500167846683], [60.3309416045955, 29.407052993774418], [60.313135413137786, 29.326286315917972]],
        author: ['TKMKV_K','KUZNTSV_A','KVZN'],
        owner: 'SFSO_SPB'
    },
    {
        name: 'Каннельярви, оз Исток',
        year: 2006,
        start: 'NA',
        info: '<a href="https://o-site.spb.ru/race.php?id=06061012_NA">Результаты</a>.',
        url: './maps/forest/kanneljarvi_istok_2006.webp',
        link: './original_maps/forest/kanneljarvi_istok_2006_omaps.jpg',
        bounds: [[60.371702007906244, 29.335298538208008], [60.36873161683617, 29.372549057006836], [60.34623272596288, 29.326457977294925]],
        author: ['VSLVSKY','RYLOV_V','SHRNN']
    },
    {
        name: 'Каннельярви, оз Исток, р Быстрянка',
        year: 2006,
        start: 'NA',
        info: '<a href="https://o-site.spb.ru/race.php?id=06061012_NA">Результаты</a>.',
        url: './maps/forest/kanneljarvi_istok.webp',
        link: ['./original_maps/forest/kanneljarvi_bystrjanka_2006_omaps.jpg','./original_maps/forest/kanneljarvi_2006_omaps.ocd'],
        bounds: [[60.371489846094434, 29.309291839599613], [60.3654638739312, 29.380359649658207], [60.34585053525739, 29.301223754882816]],
        author: ['VSLVSKY','RYLOV_V']
    },
    {
        name: 'Поляны',
        year: 1977,
        url: './maps/forest/polyany_1977.webp',
        link: './original_maps/forest/polyany_1977_omaps.jpg',
        bounds: [[60.33761111363023, 29.254531860351566], [60.33395792081405, 29.298133850097656], [60.30790645342296, 29.24534797668457]],
        author: 'MLVA_M'
    },
    {
        name: 'Поляны, Семиозерье',
        year: 2019,
        url: './maps/forest/polyany_2019.webp',
        link: './original_maps/forest/polyany_2019_omaps.jpg',
        bounds: [[60.31740723452755, 29.281826019287113], [60.30782142277218, 29.369716644287113], [60.29008769806418, 29.269809722900394]],
        author: ['SHRNN','DBRTSV_V'],
        owner: 'SFSO_SPB'
    },
    {
        name: 'Гладышевский заказник',
        year: 1974,
        start: 'WN',
        url: './maps/forest/gladyshevsky_zakaznik_1974.webp',
        link: './original_maps/forest/gladyshevsky_zakaznik_1974_omaps.jpg',
        bounds: [[60.270216202896975, 29.37332153320313], [60.270131074169086, 29.43923950195313], [60.22856182141975, 29.370231628417972]]
    },
    {
        name: 'Заходское',
        year: 1967,
        url: './maps/forest/zahodskoe_1967.webp',
        link: './original_maps/forest/zahodskoe_1967_omaps.jpg',
        info: '23.09. Первенство Ленинграда. Эта карта - выкопировка с топокарты 25000.',
        bounds: [[60.4159287731741, 29.24989700317383], [60.413174306179975, 29.35752868652344], [60.382520428784645, 29.242601394653324]]
    },
    {
        name: 'Лужки',
        year: 1975,
        url: './maps/forest/luzhki_1975.webp',
        link: './original_maps/forest/luzhki_1975_omaps.jpg',
        logo: 'leikin_mitenkov.gif',
        info: '<a href="https://o-site.spb.ru/history/History/book.html#mark04">Ленинградские многодневные соревнования</a>. Карта сделана с топоплана 5000 с сечением один метр.',
        bounds: [[60.270216202896975, 29.00725364685059], [60.26996081604887, 29.06021118164063], [60.23785133405391, 29.007339477539066]]
    },
    {
        name: 'Озерки',
        year: 1997,
        url: './maps/forest/ozerki_1997.webp',
        link: './original_maps/forest/ozerki_1997_omaps.jpg',
        bounds: [[60.25808312606245, 29.01497840881348], [60.255826303456416, 29.06046867370606], [60.232652940467396, 29.0105152130127]],
        author: ['VLKV_K','EGRV_A','URVNTSV']
    },
    {
        name: 'Сарженское оз',
        year: 1,
        url: './maps/forest/sarzhenskoe_old.webp',
        link: './original_maps/forest/sarzhenskoe_old_omaps.jpg',
        bounds: [[60.24952340894706, 30.157642364501953], [60.24994931841731, 30.23042678833008], [60.20758681939454, 30.16159057617188]],
    },
    {
        name: 'Медное оз',
        year: 2001,
        url: './maps/forest/mednoe_svetloe_2001.webp',
        link: './original_maps/forest/mednoe_svetloe_2001_omaps.jpg',
        bounds: [[60.231246675898234, 30.110778808593754], [60.226260342518756, 30.17231941223145], [60.20276749516488, 30.10116577148438]],
        author: 'CHGRVSKY_V',
        zindex: 2
    },
/*
    {
        name: 'Первомайское, Семейные оз',
        year: 2012,
        url: './maps/forest/pervomayskoe_semejnie_2012.webp',
        bounds: [[60.432831853362416, 29.665489196777347], [60.43033295396628, 29.70042228698731], [60.413301440559906, 29.660038948059086]],
        author: ['MKHLV_A','SLBDNK','GVRLK'],
        owner: 'WN'
    },
    {
        name: 'Первомайское, Семейные оз',
        year: 2020,
        url: './maps/forest/pervomayskoe_semejnye_2020.webp',
        bounds: [[60.44106839014939, 29.649095535278324], [60.43740561224754, 29.699048995971683], [60.42380949786482, 29.64471817016602]],
        author: ['MKHLV_A','SLBDNK','GVRLK'],
        owner: 'WN'
    },
    {
        name: 'Первомайское, Протяжённое оз',
        year: 2014,
        url: './maps/forest/pervomayskoe_protjazhennoe_2014.webp',
        bounds: [[60.442402131582845, 29.60197448730469], [60.43863364159355, 29.668064117431644], [60.41368284071863, 29.594163894653324]],
        author: ['GVRLK','MKHLV_A','SLBDNK'],
        owner: 'WN'
    },
    {
        name: 'Первомайское, Тайванчик',
        year: 2022,
        url: './maps/forest/pervomayskoe_taiwan_2022.webp',
        bounds: [[60.438337224965586, 29.690895080566406], [60.435584655732214, 29.73930358886719], [60.40736797338299, 29.683084487915043]],
        author: ['MKHLV_A','SLBDNK','GVRLK'],
        owner: 'WN'
    },
    {
        name: 'Первомайское, оз Дедово',
        year: 2015,
        url: './maps/forest/pervomayskoe_dedovo_2015.webp',
        bounds: [[60.41914908496061, 29.69638824462891], [60.41711524092745, 29.73784446716309], [60.39219032808884, 29.68943595886231]],
        author: ['SLBDNK','MKHLV_A','GVRLK'],
        owner: 'WN'
    },
    {
        name: 'Первомайское, юг',
        year: 2012,
        url: './maps/forest/pervomayskoe_south_2012.webp',
        bounds: [[60.41395829360783, 29.658493995666507], [60.411203659754904, 29.69634532928467], [60.40090350093107, 29.654889106750492]],
        author: ['SLBDNK','MKHLV_A','GVRLK'],
        owner: 'WN'
    },
    {
        name: 'Первомайское',
        year: 2016,
        url: './maps/forest/pervomayskoe_2016.webp',
        bounds: [[60.41575927424778, 29.634590148925785], [60.41414899039554, 29.65965270996094], [60.40268400836027, 29.63145732879639]],
        author: ['MKHLV_A','SLBDNK','GVRLK'],
        owner: 'WN'
    },
*/
    {
        name: 'Первомайское',
        year: 2005,
        info: 'Белые Ночи 2005.',
        url: './maps/forest/pervomayskoe_2005.webp',
        link: './original_maps/forest/pervomayskoe_2005.jpg',
        bounds: [[60.42719846959152, 29.665489196777347], [60.42160647681901, 29.758358001708988], [60.386083357333455, 29.65493202209473]],
        author: ['SHRNN','RYLOV_V'],
        areas: [35,65],
        owner: 'SHRNN'
    },
    {
        name: 'Первомайское',
        year: 2021,
        area: 28,
        info: '2010-2021гг.',
        url: './maps/forest/pervomayskoe_2021.webp',
        bounds: [[60.44985313980648, 29.60197448730469], [60.44096253530979, 29.749946594238285], [60.39647300617815, 29.588928222656254]],
        author: ['MKHLV_A','SLBDNK','GVRLK'],
        owner: 'WN'
    },
    {
        name: 'Первомайское, Червонное оз',
        year: 2006,
        url: './maps/forest/pervomayskoe_chervonnoe_2006.webp',
        link: './original_maps/forest/pervomayskoe_chervonnoe_2006_omaps.jpg',
        info: 'Кубок России по СРП.',
        bounds: [[60.42253854239894, 29.675359725952152], [60.41753896892244, 29.75303649902344], [60.395370588437366, 29.668235778808597]],
        author: ['RYLOV_V','SHRNN','MKHLV_A'], //Гибрид карт Рылова, Шириняна и бригады Михайлова А.
        type: []
    },
    {
        name: 'Первомайское, оз Дедово',
        year: 2004,
        url: './maps/forest/pervomayskoe_dedovo_2004.webp',
        link: './original_maps/forest/pervomayskoe_dedovo_2004_omaps.jpg',
        bounds: [[60.42258090838146, 29.698233604431156], [60.420610831803856, 29.73556995391846], [60.39660020582283, 29.691238403320316]],
        author: ['RYLOV_V','SHRNN']
    },
    {
        name: 'Первомайское, окраина',
        year: 2016,
        url: './maps/forest/pervomayskoe_hill_2016.webp',
        bounds: [[60.36097549822987, 29.71784591674805], [60.36019023423638, 29.726278781890873], [60.35531905260248, 29.718253612518314]],
        author: 'SHRNN',
        owner: 'VYBORG'
    },
    {
        name: 'Осиновая Роща - Сертолово',
        year: 1993,
        logo: 'wn_retro.webp',
        url: './maps/forest/osinovaja_roscha_1993.webp',
        link: './original_maps/forest/osinovaja_roscha_1993_omaps.jpg',
        bounds: [[60.13872706122912, 30.22493362426758], [60.136077369404795, 30.27042388916016], [60.10772941530803, 30.21746635437012]],
        author: ['KAZNTSVA_O','KAZNTSV_S']
    },
    {
        name: 'Осиновая Роща - Сертолово',
        year: 2018,
        url: './maps/forest/osinovaja_roscha_2018.webp',
        bounds: [[60.13996635995334, 30.22639274597168], [60.13612010806311, 30.27214050292969], [60.11160037127036, 30.216650962829593]],
        owner: 'SHLKHN_AN',
        author: ['KVZN','TKMKV_K','SHRNN','KUZNTSV_A']
    },
    {
        name: 'Парголовская лыжная трасса',
        year: 2007,
        url: './maps/forest/pargolovo_2020.webp',
        link: './original_maps/forest/pargolovo_2020_omaps.jpg',
        bounds: [[60.07938915059505, 30.277998447418216], [60.07942125981127, 30.290057659149173], [60.073341357395044, 30.278856754302982]],
        author: 'SHRNN',
        owner: 'SHRNN',
        zindex: 2
    },
    {
        name: 'Западный Котлин',
        year: 2025,
        url: './maps/forest/kotlin_west_2025.webp',
        link: './original_maps/forest/kotlin_west_2025_exercise_omaps.jpg',
        bounds: [[60.02806010175881, 29.67269897460938], [60.02563735306615, 29.69456434249878], [60.01836804112632, 29.667720794677738]],
        author: ['RYLOV_V','SHRNN'],
        owner: ['RYLOV_V','SHRNN']
    },
    {
        name: 'Парголовская лыжная трасса',
        year: 2021,
        date: '2022-09-22',
        start: 'ST',
        url: './maps/forest/pargolovo_2021.webp',
        link: './original_maps/forest/pargolovo_2021_omaps.gif',
        bounds: [[60.080116951817864, 30.27638912200928], [60.07852218993849, 30.293233394622806], [60.07382308068981, 30.27364253997803]],
        author: 'DBRTSV_V',
        owner: 'SHEIN',
        zindex: 3
    },
    {
        name: 'Барышево',
        year: 2015,
        area: 3,
        url: './maps/forest/baryshevo_2015.webp',
        bounds: [[60.74678873341951, 29.500093460083008], [60.74041278013193, 29.570732116699222], [60.717331311087456, 29.483957290649414]],
        author: ['MKHLV_A','USNKO'],
        owner: 'WN'
    },
];
