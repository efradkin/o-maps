// types can be ORIENT, ROGAINE, PARK, CITY, PARK, RELIEF, VELO
var parkMaps = [
    // --- городские парки ---
    {
        name: 'Парк Авиаторов',
        year: 2017,
        url: './maps/parks/aviatorov_2017.jpg',
        bounds: [[59.872257979453174, 30.29713869094849], [59.87136403749476, 30.307695865631107], [59.86442709281249, 30.29462814331055]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Парк Победы',
        year: 2020,
        url: './maps/parks/pobedy_2020.webp',
        bounds: [[59.873216517019806, 30.318918228149418], [59.87246261338842, 30.34007549285889], [59.86449172940988, 30.31690120697022]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Парк Интернационалистов',
        year: 2020,
        url: './maps/parks/internatsionalistov_2021.webp',
        bounds: [[59.86276804382595, 30.392925739288334], [59.86294041640396, 30.412087440490726], [59.855441383514496, 30.39324760437012]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Парк Екатерингоф',
        year: 1986,
        url: './maps/parks/ekateringof_1986.webp',
        bounds: [[59.906952348502685, 30.255017280578617], [59.90583339361939, 30.27119636535645], [59.90037794856062, 30.253279209136966]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Полежаевский парк - север',
        year: 2017,
        url: './maps/parks/polezhaevsky_north_2017.webp',
        bounds: [[59.84853345120984, 30.17757654190064], [59.84579574590888, 30.212037563323978], [59.84222776838285, 30.173478126525882]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Полежаевский парк',
        year: 2015,
        url: './maps/parks/polezhaevsky_2015.webp',
        bounds: [[59.84651791838533, 30.179958343505863], [59.84528913795502, 30.21223068237305], [59.83302040442371, 30.177898406982425]],
        types: ['ORIENT', 'PARK'],
        owner: 'ELTSV',
    },
    {
        name: 'Полюстровский парк',
        year: 2022,
        url: './maps/parks/polyustrovsky_2022.webp',
        link: './original_maps/parks/polyustrovsky_2022_full.jpg',
        bounds: [[59.96915633177583, 30.420584678649906], [59.968082430555185, 30.433566570281986], [59.96020967154, 30.41796684265137]],
        owner: 'RDNV_I',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Пулковский парк',
        year: 2024,
        url: './maps/parks/pulkovsky_2024.webp',
        bounds: [[59.84401180495004, 30.3233814239502], [59.84255116579194, 30.339174270629886], [59.832470469568456, 30.31857490539551]],
        types: ['ORIENT', 'PARK'],
        owner: 'FSOSPB',
    },
    {
        name: 'Сосновка',
        year: 1981,
        url: './maps/parks/sosnovka_1981.webp',
        link: './original_maps/parks/sosnovka_1981_full.jpg',
        bounds: [[60.0331730192314, 30.33157825469971], [60.0316081431942, 30.36882877349854], [60.01155831217308, 30.327758789062504]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Сосновка',
        year: 1997,
        url: './maps/parks/sosnovka_1997.webp',
        link: './original_maps/parks/sosnovka_1997_full.jpg',
        bounds: [[60.036302548936476, 30.32724380493164], [60.03370891864321, 30.371446609497074], [60.012137461804485, 30.32187938690186]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Сосновка',
        year: 2019,
        url: './maps/parks/sosnovka_2019.webp',
        bounds: [[60.03385896892066, 30.335440635681156], [60.03184395117591, 30.37007331848145], [60.01198731287414, 30.330247879028324]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Удельный парк',
        year: 1987,
        url: './maps/parks/udelny_1987.webp',
        link: './original_maps/parks/udelny_1987_full.jpg',
        bounds: [[60.01741369119426, 30.29788970947266], [60.015354775032456, 30.324969291687015], [60.00194723757934, 30.29338359832764]],
        types: ['ORIENT', 'PARK'],
        owner: 'FSOSPB',
    },
    {
        name: 'Удельный парк',
        year: 2022,
        url: './maps/parks/udelny_2022.webp',
        bounds: [[60.01657727196921, 30.293726921081547], [60.0135102204092, 30.324454307556152], [60.003470607537736, 30.288448333740238]],
        types: ['ORIENT', 'PARK'],
        owner: 'FSOSPB',
    },
    {
        name: 'Пискарёвский парк',
        year: 2024,
        url: './maps/parks/piskarevsky_2024.webp',
        bounds: [[60.0064313230872, 30.39530754089356], [60.004586270603426, 30.422816276550297], [59.994350796655525, 30.390887260437015]],
        types: ['ORIENT', 'PARK'],
        owner: 'FSOSPB',
    },
    {
        name: 'Парк Лесотехнической академии',
        year: 2024,
        url: './maps/parks/lesotekchnicheskaya_2024.webp',
        link: './original_maps/parks/lesotekchnicheskaya_2024_full.jpg',
        bounds: [[59.99796683423708, 30.330204963684086], [59.996421750809226, 30.353980064392093], [59.99045533479755, 30.328638553619385]],
        owner: 'RDNV_I',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Парки Пионерский и им.акд. Сахарова',
        year: 2015,
        url: './maps/parks/sakharova_2015.webp',
        bounds: [[59.98593688316973, 30.405607223510746], [59.98421949511812, 30.424554347991947], [59.97620026042496, 30.402088165283207]],
        owner: 'SHEIN',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Таврический сад',
        year: 2023,
        url: './maps/parks/tavrichesky_2023.jpg',
        bounds: [[59.94823046787108, 30.367712974548343], [59.947607215923064, 30.37899971008301], [59.943663263827155, 30.366854667663574]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'ЦПКиО - Елагин остров',
        year: 2017,
        url: './maps/parks/elagin_2017.webp',
        bounds: [[59.98518553686155, 30.23699283599854], [59.9827167074759, 30.275316238403324], [59.97616805074679, 30.23497581481934]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Александрино север',
        url: './maps/parks/aleksandrino_north.webp',
        bounds: [[59.84785443506803, 30.217809677124027], [59.84677660322206, 30.238409042358402], [59.83603949282227, 30.214891433715824]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Александрино юг',
        year: 2007,
        url: './maps/parks/aleksandrino_south_2007.webp',
        bounds: [[59.838713313973486, 30.226092338562015], [59.83765674901652, 30.244331359863285], [59.82784418747832, 30.22325992584229]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Александровский сад',
        year: 2020,
        url: './maps/parks/aleksandrovsky_sad_2020.jpg',
        bounds: [[59.93639742638281, 30.300679206848148], [59.94020251615056, 30.310270786285404], [59.933602449579325, 30.30462741851807]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Сад 9 Января',
        year: 2018,
        url: './maps/parks/sad_9_janvarya_2018.webp',
        link: './original_maps/parks/sad_9_janvarya_2018_full.jpg',
        bounds: [[59.896030167287805, 30.27392148971558], [59.89523372984083, 30.28205394744873], [59.88972272059391, 30.271797180175785]],
        owner: 'BVZ',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Луга - парк Зелёного Бора',
        year: 2019,
        url: './maps/parks/luga_zeleny_bor_park_2019.webp',
        bounds: [[58.70154817741037, 29.82069253921509], [58.700611802096766, 29.833266735076908], [58.6919379869104, 29.817280769348148]],
        owner: 'SHEIN',
        types: ['ORIENT', 'PARK'],
        info: 'Авторы: А.Ковязин, К.Токмаков',
    },
    {
        name: 'Воронцовский сквер',
        year: 2024,
        url: './maps/parks/vorontsovsky_skver_2024.webp',
        bounds: [[59.85116316078165, 30.22746562957764], [59.851120052463955, 30.243279933929447], [59.84347822095314, 30.22772312164307]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Новознаменка - запад',
        year: 2014,
        url: './maps/parks/novoznamenka_2014.webp',
        bounds: [[59.85326462355383, 30.101037025451664], [59.85022554227052, 30.132408142089847], [59.84259428520911, 30.097217559814457]],
        types: ['ORIENT', 'PARK'],
        owner: 'ZCHNV',
    },
    {
        name: 'Новознаменка - восток',
        year: 2021,
        url: './maps/parks/novoznamenka_2021.webp',
        bounds: [[59.84954656065081, 30.131399631500248], [59.84733708013794, 30.148158073425297], [59.845310695897346, 30.12912511825562]],
        types: ['ORIENT', 'PARK'],
        owner: 'ZCHNV',
    },
    {
        name: 'Петергоф - Английский парк',
        year: 2010,
        url: './maps/parks/english_2010.webp',
        bounds: [[59.88594413724038, 29.86993789672852], [59.884049301223534, 29.896545410156254], [59.87063163340102, 29.866118431091312]],
        types: ['ORIENT', 'PARK'],
        owner: 'ZCHNV',
    },
    {
        name: 'Петергоф, Сергиевка',
        year: 1989,
        info: 'Карта фотоквеста.',
        url: './maps/parks/sergievka_1989.webp',
        bounds: [[59.899850648980106, 29.820370674133304], [59.8984946973319, 29.853544235229496], [59.885491970278125, 29.821143150329593]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Петергоф - Знаменка',
        year: 2023,
        info: 'Карта фотоквеста.',
        url: './maps/parks/peterhof_znamenka_2023.webp',
        bounds: [[59.88422156350759, 29.948644638061527], [59.882154357168154, 29.97696876525879], [59.87274263673272, 29.945297241210938]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Петергоф - Александрийский парк',
        url: './maps/parks/aleksandrijsky.webp',
        bounds: [[59.87819185228175, 29.919676780700687], [59.87765343201456, 29.946413040161136], [59.86332825143852, 29.918217658996586]],
        owner: 'GLTV_YU',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Сосновая поляна',
        year: 2015,
        url: './maps/parks/sosnovaya_poljana_2015.webp',
        bounds: [[59.8368373490284, 30.12556314468384], [59.83567290383133, 30.142879486083988], [59.825784260738835, 30.122966766357425]],
        owner: 'SHKLV',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Южно-Приморский парк',
        year: 2021,
        url: './maps/parks/yuzhno_promorsky_2021.jpg',
        bounds: [[59.85716544875492, 30.1600456237793], [59.85613102033116, 30.174851417541507], [59.847466419624396, 30.157384872436523]],
        types: ['ORIENT', 'PARK'],
        owner: 'ZCHNV',
    },
    {
        name: 'Гатчина - Приоратский парк',
        year: 2021,
        url: './maps/parks/gatchina_prioratsky_2021.webp',
        bounds: [[59.56522340529709, 30.11159420013428], [59.562527651928654, 30.137000083923343], [59.544869479437935, 30.1030969619751]],
        owner: 'SHEIN',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Гатчина - парк Зверинец',
        year: 2005,
        url: './maps/parks/gatchina_zverinets_2005.webp',
        bounds: [[59.586021273075325, 30.08666038513184], [59.583327185416806, 30.120220184326172], [59.561462335041554, 30.07945060729981]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Дудергоф - Нагорный парк',
        year: 2020,
        url: './maps/parks/nagorny_park_2020.jpg',
        bounds: [[59.7056032974501, 30.118718147277836], [59.70358994008143, 30.14111995697022], [59.691702169319946, 30.11365413665772]],
        info: 'Ковидный полигон от O-Time',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Парк 300-летя СПб',
        year: 2022,
        url: './maps/parks/300_let_spb_2022.webp',
        bounds: [[59.987976165748115, 30.18676042556763], [59.9856148796975, 30.213110446929935], [59.97932445028676, 30.18249034881592]],
        types: ['ORIENT', 'PARK'],
        owner: 'FSOSPB',
    },
    {
        name: 'Куракина дача',
        year: 2023,
        url: './maps/parks/kurakina_dacha_2023.webp',
        bounds: [[59.87711500302675, 30.447857379913334], [59.876005811825685, 30.46041011810303], [59.86784188771747, 30.44393062591553]],
        types: ['ORIENT', 'PARK'],
        owner: 'ZCHNV',
    },
    {
        name: 'Ладожский парк',
        year: 2024,
        url: './maps/parks/ladozhsky_park_2024.webp',
        bounds: [[59.94731707739835, 30.452792644500736], [59.945898585833646, 30.466396808624268], [59.939589861695225, 30.44942378997803]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Парк Политеха',
        year: 2022,
        url: './maps/parks/politekh_2022.webp',
        bounds: [[60.009649191555134, 30.36827087402344], [60.00945612827708, 30.385394096374515], [60.00235490683813, 30.367970466613773]],
        types: ['ORIENT', 'PARK'],
        owner: 'FSOSPB',
    },
    {
        name: 'Яблоновский сад',
        year: 2024,
        url: './maps/parks/yablonovsky_sad_2024.webp',
        bounds: [[59.93024816649769, 30.452105998992923], [59.928850448435995, 30.473091602325443], [59.9221835982304, 30.449767112731937]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Крестовский о-в',
        year: 2021,
        url: './maps/parks/krestovsky_south_2023.webp',
        bounds: [[59.97251741755084, 30.24821519851685], [59.97133624417131, 30.26769876480103], [59.96627819811851, 30.244867801666263]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Крестовский о-в - юг',
        year: 2023,
        url: './maps/parks/krestovsky_2021.jpg',
        bounds: [[59.97625394315225, 30.23162841796875], [59.974686371680654, 30.249352455139164], [59.969854348897655, 30.229310989379886]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Муринский парк - центр',
        year: 2014,
        url: './maps/parks/murinsky_center_2014.webp',
        bounds: [[60.031222271957226, 30.39024353027344], [60.03017182186756, 30.410585403442386], [60.02412572517976, 30.389170646667484]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Муринский парк - запад',
        year: 2019,
        url: './maps/parks/murinsky_north_2019.webp',
        bounds: [[60.036527606425715, 30.366189479827884], [60.0340411719127, 30.38573741912842], [60.03137233352936, 30.364451408386234]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Муринский парк - восток',
        year: 2023,
        url: './maps/parks/murinsky_east_2023.webp',
        bounds: [[60.025712396620634, 30.40728092193604], [60.02525141209402, 30.430841445922855], [60.017563815481694, 30.407409667968754]],
        types: ['ORIENT', 'PARK'],
        owner: 'SHRNN',
    },
    {
        name: 'Новоорловский лесопарк',
        year: 2015,
        url: './maps/parks/novoorlovsky_2015.webp',
        bounds: [[60.05858651266601, 30.269222259521488], [60.05674437067704, 30.294284820556644], [60.046953588726694, 30.266175270080566]],
        info: 'Ковидный полигон от O-Time',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Невский лесопарк',
        year: 2011,
        url: './maps/parks/nevsky_2011.jpg',
        bounds: [[59.83933861213441, 30.567355155944828], [59.836384514068264, 30.606107711791996], [59.825104780525365, 30.562462806701664]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Колпино, Чухонка',
        year: 2020,
        url: './maps/parks/kolpino_chuhonka_2020.jpg',
        bounds: [[59.73920630976902, 30.589885711669925], [59.73907654981489, 30.60121536254883], [59.730143528979355, 30.589885711669925]],
        types: ['ORIENT', 'PARK'],
        owner: 'BBCH_A',
    },
    {
        name: 'Колпино, Никольский сквер',
        year: 2019,
        url: './maps/parks/kolpino_nikolsky_skver_2019.jpg',
        bounds: [[59.74800718414132, 30.594584941864017], [59.74740179281272, 30.6049919128418], [59.740493068716916, 30.592632293701175]],
        types: ['ORIENT', 'PARK'],
        owner: 'BBCH_A',
    },
    {
        name: 'Павловский парк',
        year: 2012,
        url: './maps/parks/pavlovsk_2012.webp',
        bounds: [[59.703265193681084, 30.442900657653812], [59.70060215436709, 30.486330986022953], [59.68739208083911, 30.439124107360843]],
        owner: 'FSOSPB',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Павловск, парк Мариенталь',
        year: 2022,
        url: './maps/parks/pavlovsk_mariental_2022.webp',
        bounds: [[59.68612493929105, 30.442535877227787], [59.684543652697684, 30.45796394348145], [59.679398539446694, 30.439789295196533]],
        owner: 'EGRV_EGR',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Павловский, сад Миранда',
        year: 2022,
        url: './maps/parks/pavlovsk_sad_miranda_2020.webp',
        bounds: [[59.69078171961171, 30.43049812316895], [59.69061928468438, 30.44324398040772], [59.685215167081445, 30.43047666549683]],
        owner: 'EGRV_EGR',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Пушкин, Буферный парк',
        year: 2020,
        url: './maps/parks/pushkin_buferny_2020.webp',
        bounds: [[59.74850446167098, 30.39279699325562], [59.748947681057956, 30.416679382324222], [59.74082826669703, 30.393354892730716]],
        owner: 'EGRV_EGR',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Пушкин, Баболовский парк',
        year: 2019,
        url: './maps/parks/pushkin_babolovsky_2019.webp',
        bounds: [[59.71739957067682, 30.344924926757816], [59.71471601335688, 30.380845069885257], [59.70421777418931, 30.34037590026856]],
        owner: 'EGRV_EGR',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Пушкин, Нижний (Отдельный) парк',
        year: 2019,
        url: './maps/parks/pushkin_nizhny_2019.webp',
        bounds: [[59.71269238223668, 30.416615009307865], [59.71050629026535, 30.440797805786136], [59.70025572717896, 30.41152954101563]],
        owner: 'FSOSPB',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Пушкин, Александровский дворец',
        url: './maps/parks/pushkin_aleksandrovsky_palace.webp',
        bounds: [[59.72503787398899, 30.381939411163334], [59.724908059040835, 30.396316051483158], [59.71544102788412, 30.38200378417969]],
        owner: 'EGRV_EGR',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Сестрорецк, парк "Дубки"',
        year: 1985,
        url: './maps/parks/sestroretsk_dubki_1985.webp',
        bounds: [[60.09512961893958, 29.917917251586918], [60.09416678778534, 29.946155548095707], [60.08676274626006, 29.9168872833252]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Сестрорецк, парк "Дубки"',
        year: 2020,
        url: './maps/parks/sestroretsk_dubki_2020.webp',
        bounds: [[60.09616730546285, 29.921779632568363], [60.09412399463667, 29.94609117507935], [60.0876936926033, 29.918518066406254]],
        owner: 'FSOSPB',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Сестрорецк, сквер Генерала Андреева',
        year: 2023,
        url: './maps/parks/sestroretsk_skver_generala_andreeva_2023.webp',
        bounds: [[60.109536630930116, 29.96332168579102], [60.10845124409252, 29.972677230834964], [60.106504943636345, 29.96155142784119]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Сестрорецк, сквер Пограничников',
        url: './maps/parks/sestroretsk_skver_pogranichnikov.webp',
        bounds: [[60.11275515399254, 29.971089363098148], [60.110199608247775, 29.985723495483402], [60.105922100518434, 29.96630430221558]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Ржевский лесопарк',
        year: 2024,
        url: './maps/parks/rzhevsky_2024.webp',
        link: './original_maps/parks/rzhevsky_2024_full.jpg',
        bounds: [[59.98001151778878, 30.49615859985352], [59.972538893040515, 30.55855751037598], [59.95165814413096, 30.484828948974613]],
        owner: 'RDNV_I',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Сосновый Бор',
        url: './maps/parks/sosnovy_bor.webp',
        bounds: [[59.90344472915467, 29.072313308715824], [59.901314153719255, 29.097247123718265], [59.88372630703435, 29.06510353088379]],
        owner: 'YUVNT',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Новое Девяткино',
        year: 2020,
        url: './maps/parks/new_devjatkino_2020.webp',
        bounds: [[60.05669081849984, 30.473477840423588], [60.05640163524139, 30.47938942909241], [60.05402381016011, 30.472801923751835]],
        owner: 'SHEIN',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Всеволожск, парк Песчанка',
        year: 2021,
        url: './maps/parks/vsevolozhsk_peschanka_2021.webp',
        bounds: [[60.034400216043906, 30.64094424247742], [60.0335427907553, 30.649087429046634], [60.03056842429522, 30.63917398452759]],
        owner: 'SHEIN',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Тосно',
        year: 2018,
        url: './maps/parks/tosno_2018.webp',
        bounds: [[59.53418744665217, 30.86621761322022], [59.533436748788205, 30.882761478424076], [59.52739791868607, 30.865123271942142]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Приозерск, крепость Карела',
        year: 2020,
        url: './maps/parks/priozersk_karela.webp',
        info: 'Карта фотоквеста.',
        bounds: [[61.032226926267995, 30.121947526931766], [61.03167093183312, 30.12731194496155], [61.02892199371037, 30.12032747268677]],
        owner: 'VST_PRZRSK',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Приозерск, КЦ "Карнавал"',
        year: 2023,
        url: './maps/parks/priozersk_karnaval_2023.webp',
        info: 'Автор: Михаил Пашков',
        bounds: [[61.040202035371664, 30.140733718872074], [61.04305388390088, 30.149917602539066], [61.0382227328721, 30.142976045608524]],
        owner: 'VST_PRZRSK',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Приозерск, набережная',
        year: 2020,
        url: './maps/parks/priozersk_naberezhnaja_2020.webp',
        info: 'Автор: Михаил Пашков',
        bounds: [[61.03406111916813, 30.140036344528202], [61.03340643359281, 30.15008926391602], [61.031852800244216, 30.139381885528568]],
        owner: 'VST_PRZRSK',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Зеленогорск, Центральный парк',
        year: 2024,
        url: './maps/parks/zelenogorsk_tspko_2024.webp',
        bounds: [[60.19371335499176, 29.696130752563477], [60.19243341635954, 29.70834016799927], [60.18712113764485, 29.693555831909183]],
        owner: 'FSOSPB',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Всеволожск, Румболовский парк',
        year: 2014,
        url: './maps/parks/vsevolozhsk_rumbolovo_2014.webp',
        bounds: [[60.04215354531248, 30.63297271728516], [60.04129632127576, 30.651855468750004], [60.03469495084697, 30.631041526794437]],
        owner: 'WN',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'парк Есенина',
        year: 2014,
        url: './maps/parks/esenina_2014.webp',
        bounds: [[59.91496683629783, 30.47916412353516], [59.914568846991216, 30.49088001251221], [59.907264358045, 30.478713512420658]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Шуваловский парк',
        year: 1988,
        url: './maps/parks/shuvalovsky_park_1988.webp',
        link: './original_maps/parks/shuvalovsky_park_1988_full.jpg',
        bounds: [[60.08522181178067, 30.27892112731934], [60.082739043608704, 30.322523117065433], [60.0687806949504, 30.272741317749027]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Кириши, сквер Спортивный',
        year: 2023,
        url: './maps/parks/kirishi_skver_sportivny_2023.webp',
        bounds: [[59.454520376667574, 32.026691436767585], [59.45308085117713, 32.0353388786316], [59.44722396790875, 32.02255010604859]],
        owner: 'MLV_AL',
        types: ['ORIENT', 'PARK'],
    },
];
