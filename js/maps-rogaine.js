// types can be ORIENT, ROGAINE, SPRINT, CITY, RELIEF
let rogaineMaps = [
    // --- рогейн ---
    {
        name: 'Санкт-Петербург, юг',
        year: 2023,
        url: './maps/rogaine/spb_perekati_piter_2023.webp',
        bounds: [[59.94340533235882, 30.208110809326175], [59.94768243660754, 30.396080017089844], [59.81461961493708, 30.21944046020508]],
        info: '<a href="https://orientband.ru/tproduct/549661597-580137401641-perekati-piter" target="_blank">Перекати Питер</a>',
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
        name: 'М "Владимирская" - ККМ',
        year: 2024,
        url: './maps/rogaine/kkm/spb_center_KKM_2024_03.webp',
        link: 'https://kkmstart.ru/marshrut-№3-2/',
        bounds: [[59.956084587086806, 30.337028503417972], [59.95638539185255, 30.40002822875977], [59.91312744037747, 30.33711433410645]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Васильевский остров - ККМ',
        year: 2024,
        url: './maps/rogaine/kkm/vasiljevsky_2024_10.webp',
        link: 'https://kkmstart.ru/marshrut-№10-2/',
        bounds: [[59.95896360641199, 30.220642089843754], [59.959006574955104, 30.308446884155277], [59.92792577181406, 30.21995544433594]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Петроградская сторона - ККМ',
        year: 2024,
        url: './maps/rogaine/kkm/petrogradka_2024_02.webp',
        link: 'https://kkmstart.ru/marshrut-№2-2024/',
        bounds: [[59.97885208310792, 30.23420333862305], [59.97902385377091, 30.33831596374512], [59.947489011645466, 30.235061645507816]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Сенная, площадь - ККМ',
        year: 2024,
        url: './maps/rogaine/kkm/spb_center_KKM_2024_04.webp',
        link: 'https://kkmstart.ru/marshrut-№4-2024/',
        bounds: [[59.94929426740136, 30.265102386474613], [59.949681095129826, 30.348186492919925], [59.908652227033265, 30.264587402343754]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Крестовский остров - ККМ',
        year: 2024,
        url: './maps/rogaine/kkm/krestovsky_KKM_2024_04.webp',
        link: 'https://kkmstart.ru/marshrut-№6-2024/',
        bounds: [[59.986065683681495, 30.188369750976566], [59.986237416917476, 30.273771286010746], [59.964377204056234, 30.188970565795902]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Сосновка - ККМ',
        year: 2021,
        url: './maps/rogaine/kkm/sosnovka_KKM_2021_10.webp',
        link: 'https://kkmstart.ru/marshrut-№-10-2/',
        bounds: [[60.03441629255553, 30.32106399536133], [60.03197257300201, 30.370244979858402], [60.012158911595996, 30.315999984741214]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Екатерингоф - ККМ',
        year: 2021,
        url: './maps/rogaine/kkm/ekateringof_KKM_2021_11.webp',
        link: 'https://kkmstart.ru/marshrut-№11/',
        bounds: [[59.91041656586618, 30.25566101074219], [59.90843705734661, 30.280551910400394], [59.892166191012564, 30.249309539794925]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Петергофское ш. - ККМ',
        year: 2022,
        url: './maps/rogaine/kkm/peterhof_road_KKM_2022.jpg',
        link: 'https://kkmstart.ru/marshrut-№10/',
        bounds: [[59.847531089179114, 30.123653411865238], [59.847487976156614, 30.208883285522464], [59.8233574820502, 30.123610496521]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Петергоф - ККМ',
        year: 2023,
        url: './maps/rogaine/kkm/peterhof_KKM_2023_03.webp',
        link: 'https://kkmstart.ru/marshrut-№3-2023/',
        bounds: [[59.891305076568734, 29.884271621704105], [59.891132851001714, 29.97653961181641], [59.85714389849079, 29.88461494445801]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Гатчина - ККМ',
        year: 2023,
        url: './maps/rogaine/kkm/gatchina_KKM_2023_05.webp',
        link: 'https://kkmstart.ru/marshrut-№5-2023/',
        bounds: [[59.59449320676533, 30.072841644287113], [59.59414568223871, 30.14511108398438], [59.54336854286804, 30.073013305664066]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Сестрорецк - ККМ',
        year: 2024,
        url: './maps/rogaine/kkm/sestroretsk_KKM_2024_05.webp',
        link: 'https://kkmstart.ru/marshrut-№5-2024/',
        bounds: [[60.130820091007536, 29.91731643676758], [60.13124754338759, 30.013790130615238], [60.05935761134086, 29.91731643676758]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Сиверский, р.Оредеж - ККМ',
        year: 2023,
        url: './maps/rogaine/kkm/oredezh_KKM_2021_06.jpg',
        link: 'https://kkmstart.ru/marshrut-№6/',
        bounds: [[59.370030083826, 30.057048797607425], [59.36989889353371, 30.190429687500004], [59.335947296651405, 30.06065368652344]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Сиверский',
        year: 2023,
        url: './maps/rogaine/siversky_2021.webp',
        link: './original_maps/rogaine/siversky_2021_full.jpg',
        bounds: [[59.34763292781556, 29.9403190612793], [59.34710781719707, 30.060310363769535], [59.29429276788343, 29.940490722656254]],
        owner: ['SHBN','KKM'],
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
/*
    {
        name: 'Зеркальный - ККМ-лето',
        year: 2011,
        url: './maps/rogaine/kkm/zerkalny_KKM_2011.webp',
        link: './original_maps/rogaine/kkm/zerkalny_KKM_2011_full.jpg',
        bounds: [[60.318448539117334, 28.91189575195313], [60.31351798708459, 29.250755310058594], [60.17003708320592, 28.90159606933594]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
*/
    {
        name: 'Дибуны - ККМ',
        year: 2012,
        url: './maps/rogaine/kkm/dibuny_KKM_2012_02.webp',
        link: './original_maps/rogaine/kkm/dibuny_KKM_2012_02_full.jpg',
        bounds: [[60.13167499021484, 30.057735443115238], [60.13107656310189, 30.153694152832035], [60.083852031773, 30.06013870239258]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Шевелево - ККМ',
        year: 2017,
        url: './maps/rogaine/kkm/shevelevo_KKM_2017_03.webp',
        link: './original_maps/rogaine/kkm/shevelevo_KKM_2017_03_full.jpg',
        bounds: [[60.33833320798648, 29.29040908813477], [60.338588061002966, 29.44318771362305], [60.285876119662845, 29.289207458496097]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Солнечное - ККМ',
        year: 2013,
        url: './maps/rogaine/kkm/solnechnoe_KKM_2013_07.webp',
        link: './original_maps/rogaine/kkm/solnechnoe_KKM_2013_07_full.jpg',
        bounds: [[60.24509362207604, 29.76951599121094], [60.24475284442206, 29.962120056152347], [60.157397062225606, 29.768142700195316]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Зеленогорск - ККМ',
        year: 2021,
        url: './maps/rogaine/kkm/zelenogorsk_KKM_2021_03.webp',
        link: 'https://kkmstart.ru/marshrut-№-3-2/',
        bounds: [[60.23137452062541, 29.727201461791996], [60.22195529077001, 29.836034774780277], [60.19500390924258, 29.71484184265137]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Васкелово - ККМ',
        year: 2016,
        url: './maps/rogaine/kkm/vaskelovo_KKM_2016_08.webp',
        link: './original_maps/rogaine/kkm/vaskelovo_KKM_2016_08_full.jpg',
        bounds: [[60.40995340282287, 30.365867614746097], [60.41037722411491, 30.495815277099613], [60.3359544838447, 30.36552429199219]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Шуваловский лесопарк',
        year: 2024,
        url: './maps/rogaine/shuvalovsky_rogaine_2024.webp',
        bounds: [[60.08453692889112, 30.291752815246586], [60.08190427782784, 30.32033443450928], [60.06931601663244, 30.28668880462647]],
        types: ['ROGAINE'],
    },
    {
        name: 'Шапки - Финал КЛО',
        year: 2019,
        url: './maps/rogaine/shapki_KLO_2019.jpg',
        bounds: [[59.62766525116755, 31.11662864685059], [59.63643039704262, 31.209068298339847], [59.55989691029292, 31.14486694335938]],
        types: ['ROGAINE'],
    },
    {
        name: 'Шапки - ККМ',
        year: 2020,
        url: './maps/rogaine/kkm/shapki_KKM_2020.jpg',
        link: './original_maps/rogaine/kkm/shapki_KKM_2020_full.jpg',
        bounds: [[59.628663378277295, 31.12838745117188], [59.625712307963056, 31.18280410766602], [59.59401535961515, 31.12040519714356]],
        types: ['ROGAINE'],
    },
/*
    {
        name: 'Токсово - ККМ',
        year: 2024,
        url: './maps/rogaine/kkm/toksovo_KKM_2024_09.webp',
        link: 'https://kkmstart.ru/marshrut-№9-2024/',
        bounds: [[60.193937339120886, 30.399684906005863], [60.18856129813442, 30.501823425292972], [60.130820091007536, 30.383377075195316]],
        types: ['ROGAINE'],
    },
    {
        name: 'Токсово - ККМ',
        year: 2024,
        url: './maps/rogaine/kkm/toksovo_KKM_2024_08.webp',
        link: 'https://kkmstart.ru/marshrut-№8-2024/',
        bounds: [[60.2157737824211, 30.425090789794925], [60.217564408179925, 30.509548187255863], [60.160813763561954, 30.429897308349613]],
        types: ['ROGAINE'],
    },
    {
        name: 'Токсово, оз Хепоярви - ККМ',
        year: 2017,
        url: './maps/rogaine/kkm/toksovo_hepojarvy_KKM_2017_04.webp',
        link: './original_maps/rogaine/kkm/toksovo_hepojarvy_KKM_2017_04_full.jpg',
        bounds: [[60.19248674813239, 30.55280685424805], [60.184507351685134, 30.661983489990238], [60.15380914355222, 30.540018081665043]],
        types: ['ROGAINE'],
    },
*/
    {
        name: '78 км',
        url: './maps/rogaine/beketov/78km.webp',
        link: './original_maps/rogaine/beketov/78km.jpg',
        bounds: [[60.68007223452519, 30.020828247070316], [60.69015786886322, 30.436592102050785], [60.540060727006335, 30.037651062011722]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Токсово - BikeAdventure Light',
        year: 2018,
        url: './maps/rogaine/beketov/toksovo_bal_2018.webp',
        link: './original_maps/rogaine/beketov/BAL18_distance.All.jpg',
        bounds: [[60.26536351191468, 30.36827087402344], [60.2365731170135, 30.713310241699222], [60.107472761261164, 30.31333923339844]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Мичуринское',
        url: './maps/rogaine/beketov/michurinskoe.webp',
        link: './original_maps/rogaine/beketov/center.jpg',
        bounds: [[60.634479381884795, 29.75234985351563], [60.63414266332332, 30.251541137695316], [60.373144671593685, 29.753723144531254]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Грузино',
        url: './maps/rogaine/beketov/gruzino.webp',
        link: './original_maps/rogaine/beketov/gruzino.jpg',
        bounds: [[60.33306579997825, 30.229568481445316], [60.331876267596044, 30.443115234375004], [60.26212798478831, 30.228881835937504]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Каннельярви',
        url: './maps/rogaine/beketov/kanneljarvy.webp',
        link: './original_maps/rogaine/beketov/k-jarvi.jpg',
        bounds: [[60.45163096876463, 29.152908325195316], [60.45078439568225, 29.617424011230472], [60.16713372475682, 29.149131774902347]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Кузнечное',
        year: 2009,
        url: './maps/rogaine/kuznechnoe_2009.webp',
        link: './original_maps/rogaine/kuznechnoe_2009_full.jpg',
        bounds: [[61.19538604557029, 29.662742614746097], [61.194889777986376, 29.914054870605472], [61.04831536461298, 29.662055969238285]],
        info: 'VI Чемпионат России по рогейну',
        owner: 'GK',
        types: ['ROGAINE'],
    },
    {
        name: 'Кузнечное',
        url: './maps/rogaine/beketov/kuznechnoe.webp',
        link: './original_maps/rogaine/beketov/kuznechnoe.jpg',
        bounds: [[61.25389075952261, 29.516487121582035], [61.26132000895963, 29.839210510253906], [61.116961670809445, 29.530391693115238]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Оять',
        url: './maps/rogaine/beketov/ojat.webp',
        link: './original_maps/rogaine/beketov/ojat.jpg',
        bounds: [[60.4903803750114, 33.1344223022461], [60.48801274327637, 33.73695373535157], [60.3750115533182, 33.13339233398438]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Орехово',
        url: './maps/rogaine/beketov/orekhovo.webp',
        link: './original_maps/rogaine/beketov/Orehovo_new.jpg',
        bounds: [[60.565209785065306, 30.21926879882813], [60.57246393181694, 30.620613098144535], [60.39706660026772, 30.232315063476566]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Гора-Валдай',
        url: './maps/rogaine/beketov/gora_valday.webp',
        link: './original_maps/rogaine/beketov/sosnobyl.gif',
        bounds: [[59.997011895357794, 29.093685150146488], [59.99229044420948, 29.348258972167972], [59.92181795802118, 29.08939361572266]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Каменногорск - BikeAdventure',
        year: 2023,
        url: './maps/rogaine/beketov/kamennogorsk_2023.webp',
        link: './original_maps/rogaine/beketov/svetBA2023.jpg',
        bounds: [[61.069082670716135, 28.70452880859375], [61.030028872681896, 29.312810897827152], [60.661237256330466, 28.583679199218754]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Боровинка - ОМБ',
        year: 2016,
        url: './maps/rogaine/beketov/borovinka_2012.webp',
        link: './original_maps/rogaine/beketov/omb2016.jpg',
        bounds: [[61.12409167912034, 29.086132049560547], [61.129396687868706, 29.24869537353516], [60.960943925313465, 29.10415649414063]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Каменногорск - ВМБ',
        year: 2022,
        url: './maps/rogaine/beketov/kamennogorsk_2022.webp',
        link: './original_maps/rogaine/beketov/vmb22.jpg',
        bounds: [[61.09796810490464, 29.045104980468754], [61.10792248808013, 29.33830261230469], [60.940939539862185, 29.06639099121094]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Лосево - ОМБ',
        year: 2012,
        url: './maps/rogaine/beketov/losevo_2012.webp',
        link: './original_maps/rogaine/beketov/map_omb12.gif',
        bounds: [[60.9247601360644, 29.632530212402344], [60.916583909979266, 30.024948120117188], [60.67216961239084, 29.60849761962891]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Мельниково - ВМБ',
        year: 2020,
        url: './maps/rogaine/beketov/melnikovo_2020.webp',
        link: './original_maps/rogaine/beketov/VMB20.jpg',
        bounds: [[61.051140518044775, 29.28714752197266], [61.06243861375529, 29.71063613891602], [60.84884090341096, 29.31032180786133]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Первомайское',
        url: './maps/rogaine/beketov/pervomayskoe.webp',
        link: './original_maps/rogaine/beketov/volochaevka_new.jpg',
        bounds: [[60.48209290767693, 29.67269897460938], [60.4107162771735, 29.8359489440918], [60.43012117400133, 29.579143524169925]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Воробьёво оз',
        url: './maps/rogaine/beketov/vorobjevo.webp',
        link: './original_maps/rogaine/beketov/vorob_1.jpg',
        bounds: [[61.049478693582785, 29.973106384277347], [61.05595931625313, 30.48568725585938], [60.65585380965987, 30.00846862792969]],
        owner: 'BKTV',
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
        name: 'Выборг - ВМБ',
        year: 2019,
        url: './maps/rogaine/beketov/vyborg_2019.webp',
        link: './original_maps/rogaine/beketov/zavyborgVMB19.jpg',
        bounds: [[60.84758659536134, 28.363952636718754], [60.92759629574196, 28.561019897460938], [60.70931186508957, 28.601875305175785]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Яппиля',
        url: './maps/rogaine/beketov/jappilya.webp',
        link: './original_maps/rogaine/beketov/jappila.jpg',
        bounds: [[60.3493750131044, 28.941421508789066], [60.3451286072627, 29.252128601074222], [60.169353963123186, 28.930435180664066]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Кирилловское, оз Глубокое',
        year: 2020,
        url: './maps/rogaine/beketov/kirillovskoe_2020.webp',
        link: './original_maps/rogaine/beketov/kirillovskoe_2020_full.jpg',
        bounds: [[60.821987963321746, 29.06364440917969], [60.80976701409569, 29.647636413574222], [60.45755636255159, 29.036521911621097]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Рощино - ВМБ',
        year: 2012,
        url: './maps/rogaine/beketov/roschino_2012.webp',
        link: './original_maps/rogaine/beketov/roschino_2012_full.jpg',
        bounds: [[60.3451286072627, 29.34757232666016], [60.34461900141174, 29.740676879882816], [60.20451618136672, 29.34654235839844]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Цвелодубово, юг',
        year: 2017,
        url: './maps/rogaine/beketov/tsvelodubovo_south_2017.webp',
        link: './original_maps/rogaine/beketov/TA281017.All.jpg',
        info: 'TrailAdventure',
        bounds: [[60.363851100845004, 29.558372497558594], [60.35769636505917, 29.660768508911136], [60.33157887772639, 29.549703598022464]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Балтиец, RFAR',
        year: 2021,
        url: './maps/rogaine/vjisotsk_rfar_2021.webp',
        bounds: [[60.89571668586482, 28.146972656250004], [60.89705259731161, 28.71414184570313], [60.524184817591255, 28.12362670898438]],
        info: 'Авторы карты: Илья Строганов и Михаил Чегаровский.',
        owner: 'RFAR',
        types: ['ROGAINE'],
    },
    {
        name: 'Лахденпохья, RFAR',
        year: 2020,
        url: './maps/rogaine/lahdenpohja_rfar_2020.webp',
        bounds: [[61.58336831075355, 29.92160797119141], [61.53840616716746, 30.421142578125004], [61.293328225669015, 29.80796813964844]],
        owner: 'RFAR',
        types: ['ROGAINE'],
    },
    {
        name: 'Сортавала, RFAR',
        year: 2017,
        url: './maps/rogaine/sortavala_redfox_2017.webp',
        bounds: [[62.001871751235875, 30.26664733886719], [61.9331357589708, 31.16477966308594], [61.446973504649996, 30.086746215820316]],
        owner: 'RFAR',
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
        bounds: [[60.63229064837143, 29.750633239746097], [60.63229064837143, 30.021171569824222], [60.48124712867758, 29.749946594238285]],
        info: 'European Rogaining Championships',
        types: ['ROGAINE'],
    },
    {
        name: 'Запорожское',
        year: 2016,
        url: './maps/rogaine/zaporozhskoe_2016.webp',
        bounds: [[60.67923162227499, 30.155410766601566], [60.688813300289965, 30.679321289062504], [60.43164595895512, 30.173263549804688]],
        info: 'Чемпионат России по рогейну',
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
        name: 'Орехово, р Смородинка',
        year: 2018,
        url: './maps/rogaine/beketov/smorodinka_2018.webp',
        link: './original_maps/rogaine/beketov/map281018.png',
        info: 'TrailAdventure',
        bounds: [[60.49984917356746, 30.091552734375004], [60.502384989368444, 30.261325836181644], [60.440454427279604, 30.09738922119141]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Калинино - ВМБ',
        year: 2015,
        url: './maps/rogaine/beketov/kalinino_2015.webp',
        link: './original_maps/rogaine/beketov/vmb2015_course.jpg',
        bounds: [[60.82382907162246, 28.449783325195312], [60.8218205845858, 28.669509887695316], [60.666872088022984, 28.443260192871097]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Шалово',
        year: 2023,
        info: 'Рогейн на Лужских берегах',
        url: './maps/rogaine/shalovo_luzhsky_2023.webp',
        bounds: [[58.821029930669205, 29.891481399536136], [58.809119127096146, 30.0322437286377], [58.76459520046961, 29.87242698669434]],
        owner: 'SHBN',
        types: ['ROGAINE'],
    },
    {
        name: 'оз Омчино',
        year: 2024,
        info: 'Лужский лыжный рогейн',
        url: './maps/rogaine/omchino_luzhski_2024.webp',
        bounds: [[58.73409386161734, 29.75131988525391], [58.72460404916333, 29.842386245727543], [58.68211323154789, 29.73183631896973]],
        owner: 'SHBN',
        types: ['ROGAINE'],
    },
    {
        name: 'Городок',
        year: 2023,
        info: 'Лужский Меридиан-67',
        url: './maps/rogaine/gorodok_lm_2023.webp',
        bounds: [[58.73939455490484, 29.803419113159183], [58.73097542942129, 29.89113807678223], [58.67573290639293, 29.780845642089844]],
        owner: 'LM',
        types: ['ROGAINE'],
    },
    {
        name: 'Кировские дачи',
        url: './maps/rogaine/kirovskie_dachi.webp',
        bounds: [[60.79381416770022, 28.706417083740238], [60.787992121373335, 28.79954338073731], [60.74578208815887, 28.69242668151856]],
        owner: 'TOKM',
        types: ['ROGAINE'],
    },
/*
    {
        //  Бобочинский полигон
        name: 'Гаврилово',
        url: './maps/rogaine/beketov/gavrilovo.webp',
        link: './original_maps/rogaine/beketov/zona.jpg',
        bounds: [[60.59489087388518, 28.941421508789066], [60.59168797815975, 29.249382019042972], [60.50035635259788, 28.93833160400391]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Луга',
        url: './maps/rogaine/beketov/luga.webp',
        link: './original_maps/rogaine/beketov/luga.jpg',
        bounds: [[58.7477225839728, 29.35306549072266], [58.74683198091693, 29.847106933593754], [58.64336713431344, 29.35855865478516]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
*/
];
