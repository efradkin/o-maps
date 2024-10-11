// types can be ORIENT, ROGAINE, SPRINT, CITY, RELIEF
var cityMaps = [
    // --- городские кварталы ---
    {
        name: 'Лицей №470',
        year: 2020,
        url: './maps/city/school_470_2020.jpg',
        bounds: [[60.01080754755248, 30.389385223388675], [60.00952048282834, 30.403633117675785], [60.000702742446485, 30.385394096374515]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Школа №71',
        year: 2020,
        url: './maps/city/school_71_2021.jpg',
        bounds: [[60.021037929955725, 30.387368202209476], [60.01898996220856, 30.40796756744385], [60.013949920097524, 30.3842568397522]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Школа №98',
        year: 2022,
        url: './maps/city/school_98_2022.jpg',
        bounds: [[60.026141213662754, 30.387153625488285], [60.02388986211038, 30.407431125640873], [60.018914903388506, 30.384857654571537]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'ЖК "Академ Парк"',
        year: 2022,
        url: './maps/city/akadem_park_2022.jpg',
        bounds: [[60.00842643842314, 30.398890972137455], [60.00738599006695, 30.40973782539368], [60.000461347882606, 30.396466255187992]],
        owner: 'KUZM',
        types: ['ORIENT', 'SPRINT', 'CITY'],
    },
    {
        name: 'Сад Олимпия',
        year: 2023,
        // url: './maps/city/olimpia_2023.jpg',
        url: './maps/black.png',
        bounds: [[59.91895722202924, 30.317974090576175], [59.91908628309989, 30.330934524536136], [59.909932457837336, 30.318167209625248]],
        owner: 'WN',
        types: ['ORIENT', 'SPRINT', 'CITY'],
    },
    {
        name: 'Петропавловская крепость',
        year: 2020,
        url: './maps/city/petropavlovka_2020.jpg',
        bounds: [[59.953237549626834, 30.31014204025269], [59.9523135528265, 30.323424339294437], [59.94785436895968, 30.308296680450443]],
        types: ['ORIENT', 'SPRINT', 'CITY'],
    },
    {
        name: 'Колтуши',
        year: 2017,
        url: './maps/city/koltushi_2017.jpg',
        bounds: [[59.94677977712853, 30.643272399902347], [59.94523230369449, 30.665073394775394], [59.93050620031566, 30.63842296600342]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
        info: 'Автор: Виктор Добрецов',
    },
    {
        name: 'Лицей №126',
        year: 2012,
        url: './maps/city/school_126_2012.jpg',
        bounds: [[59.97800395239609, 30.388655662536625], [59.97835823748757, 30.40874004364014], [59.97090671613365, 30.3892993927002]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Гимназия №101',
        year: 2011,
        url: './maps/city/school_101_2011.jpg',
        bounds: [[60.035423738342054, 30.328638553619385], [60.03550947699026, 30.344023704528812], [60.02914277715146, 30.328788757324222]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Гимназия №144',
        year: 2013,
        url: './maps/city/school_144_2013.jpg',
        bounds: [[60.04822848297379, 30.402817726135257], [60.047017870287405, 30.422172546386722], [60.04155349082316, 30.401122570037845]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Школа №92',
        year: 2012,
        url: './maps/city/school_92_2012.jpg',
        bounds: [[60.02176701873349, 30.32037734985352], [60.02221733023808, 30.340676307678226], [60.01241630800898, 30.320291519165043]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Школа №332',
        year: 2013,
        url: './maps/city/school_332_2013.jpg',
        bounds: [[59.92534514259061, 30.479850769042972], [59.92411927339108, 30.498776435852054], [59.91491305423792, 30.47594547271729]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Школа №156',
        year: 2013,
        url: './maps/city/school_156_2013.jpg',
        bounds: [[59.99765567740504, 30.426700115203857], [59.99798829322108, 30.43697834014893], [59.991603631550845, 30.427644252777103]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Школа №175',
        year: 2014,
        url: './maps/city/school_175_2014.jpg',
        bounds: [[60.040503369230905, 30.421657562255863], [60.03946393028264, 30.434081554412845], [60.03411619638205, 30.419554710388187]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Школа №136',
        year: 2014,
        url: './maps/city/school_136_2014.jpg',
        bounds: [[60.04160706756014, 30.38706779479981], [60.04166064421021, 30.398805141448978], [60.03331235391477, 30.38702487945557]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Канонерский о-в',
        year: 2014,
        url: './maps/city/kanonerka_2014.jpg',
        bounds: [[59.905618205665014, 30.207595825195316], [59.90574731860498, 30.22446155548096], [59.89549203596991, 30.20699501037598]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Бумажная ул.',
        year: 2015,
        url: './maps/city/bumazhnaya_2015.jpg',
        bounds: [[59.909061045596246, 30.261797904968265], [59.90903952895528, 30.276045799255375], [59.901088175579964, 30.26244163513184]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'М "Выборгская"',
        year: 2015,
        url: './maps/city/vyborgskaya_2015.jpg',
        bounds: [[59.97494405975913, 30.339174270629886], [59.97439647019538, 30.352241992950443], [59.97041275200341, 30.338509082794193]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'М "Удельная"',
        year: 2015,
        url: './maps/city/udelnaya_2015.jpg',
        bounds: [[60.01803563023218, 30.314669609069828], [60.0163199079499, 30.33213615417481], [60.00377098206522, 30.310378074646]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'М "Ломоносовская"',
        year: 2015,
        url: './maps/city/lomonosovskaya_2015.jpg',
        bounds: [[59.88062540310008, 30.434575080871586], [59.87946248953721, 30.452041625976566], [59.87041621736219, 30.43019771575928]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'М "Политехническая"',
        year: 2015,
        url: './maps/city/politekhnicheskaya_2015.jpg',
        bounds: [[60.02562663254445, 30.36728382110596], [60.0253478977596, 30.384922027587894], [60.010142570366924, 30.367884635925297]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'М "Нарвская"',
        year: 2015,
        url: './maps/city/narvskaya_2016.jpg',
        bounds: [[59.89892516416984, 30.259094238281254], [59.89888211773708, 30.27570247650147], [59.893479347569645, 30.259008407592777]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
        info: 'Автор: Пётр Заслонкин',
    },
    {
        name: 'М "Новочеркасская"',
        year: 2022,
        url: './maps/city/novocherkasskaya_2022.jpg',
        bounds: [[59.92985036042926, 30.402925014495853], [59.929108493125995, 30.413825511932377], [59.92233415479259, 30.40052175521851]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Оккервиль"',
        year: 2024,
        url: './maps/city/okkervil_2024.jpg',
        bounds: [[59.93202210846225, 30.417537689208988], [59.931914599528554, 30.434296131134037], [59.92530213040293, 30.417301654815677]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Посадский округ',
        year: 2013,
        url: './maps/city/posadsky_okrug_2013.jpg',
        bounds: [[59.96178866951323, 30.318253040313724], [59.96041376394808, 30.3343677520752], [59.95477390588266, 30.31557083129883]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Василеостровская',
        year: 2012,
        url: './maps/city/vasileostrovskaya_2012.jpg',
        bounds: [[59.94467347609127, 30.26694774627686], [59.94428658992489, 30.284285545349125], [59.93358094884485, 30.260295867919925]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Бугры',
        year: 2011,
        url: './maps/city/bugry_2011.jpg',
        bounds: [[60.07942125981127, 30.389170646667484], [60.077087908682955, 30.40899753570557], [60.06524735396957, 30.383634567260746]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Озерки',
        year: 2013,
        url: './maps/city/ozerki_2013.jpg',
        bounds: [[60.04519651093916, 30.315742492675785], [60.044307222520395, 30.32911062240601], [60.0348664317041, 30.31188011169434]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Наб. р. Смоленки',
        year: 2014,
        url: './maps/city/smolenka_2014.jpg',
        bounds: [[59.94990674255339, 30.21566390991211], [59.94840239738082, 30.23317337036133], [59.94029925002984, 30.212059020996097]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Покровский о-в',
        year: 2014,
        url: './maps/city/pokrovsky_island_2014.jpg',
        bounds: [[59.92278582038065, 30.28265476226807], [59.921032893372335, 30.30325412750244], [59.91580582514885, 30.27995109558106]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Коломенский о-в',
        year: 2016,
        url: './maps/city/kolomensky_island_2016.jpg',
        bounds: [[59.92428057455758, 30.27720451354981], [59.92340953894306, 30.28814792633057], [59.91696746701024, 30.27417898178101]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Любашинский сад',
        year: 2016,
        url: './maps/city/ljubashinsky_sad_2016.jpg',
        bounds: [[59.971733552646455, 30.395371913909916], [59.97026241363188, 30.41146516799927], [59.96472089467718, 30.392646789550785]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Серебряный пруд',
        year: 2016,
        url: './maps/city/serebrjany_prud_2016.jpg',
        bounds: [[60.010839723528704, 30.3408694267273], [60.00955266005702, 30.35509586334229], [60.00153956329607, 30.337908267974857]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'ДДЮТ Выборгского р-она',
        year: 2017,
        url: './maps/city/vyborgsky_ddjut_2017.jpg',
        bounds: [[60.03973183004802, 30.34361600875855], [60.03986042116352, 30.356683731079105], [60.030986459538205, 30.34320831298828]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Лицей №384',
        year: 2019,
        url: './maps/city/narvskaya_384_school_2019.jpg',
        link: './maps/city/narvskaya_384_school_2019_full.jpg',
        bounds: [[59.898150319844724, 30.273513793945316], [59.89818260538584, 30.275981426239017], [59.89642837885074, 30.273309946060184]],
        owner: 'BVZ',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'ЦФКиЗ Московского р-она',
        year: 2016,
        url: './maps/city/tsfkiz_moskovsky_2016.jpg',
        bounds: [[59.851357147520275, 30.347199440002445], [59.85077518391201, 30.354130268096927], [59.8480807753212, 30.346212387084964]],
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Яблоневый сад',
        year: 2014,
        url: './maps/city/apple_garden_2014.jpg',
        bounds: [[59.86798191914129, 30.36058902740479], [59.866969370948034, 30.383205413818363], [59.85526897207686, 30.356640815734867]],
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Школа №536',
        year: 2013,
        url: './maps/city/kosmonavtov_2013.jpg',
        bounds: [[59.865385856119765, 30.348358154296875], [59.86585984125349, 30.359086990356445], [59.85591551036147, 30.349946022033695]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'ул. Рубинштейна',
        year: 2015,
        url: './maps/city/5_uglov_2015.jpg',
        bounds: [[59.93348419536735, 30.337951183319095], [59.932710157386865, 30.348916053771976], [59.92674300833662, 30.335676670074466]],
        types: ['ORIENT', 'CITY'],
        info: 'Автор: Алексей Яганов'
    },
    {
        name: 'Литейный пр.',
        year: 2012,
        url: './maps/city/litejny_2012.jpg',
        bounds: [[59.9475319950679, 30.33655643463135], [59.94749975750629, 30.34932374954224], [59.94209414970227, 30.336642265319828]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Кавалергардская ул.',
        year: 2012,
        url: './maps/city/kavalergardskaya_2012.jpg',
        bounds: [[59.9488751989346, 30.37754058837891], [59.948885944346074, 30.391466617584232], [59.94222312078742, 30.37754058837891]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'АВРОРА',
        year: 2013,
        url: './maps/city/avrora_2013.jpg',
        bounds: [[59.95791085969932, 30.323960781097416], [59.95791085969932, 30.338487625122074], [59.95133580723119, 30.32413244247437]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Кузьмолово',
        year: 2013,
        url: './maps/city/kuzmolovo_2013.jpg',
        bounds: [[60.11301176687593, 30.482983589172367], [60.112883460684216, 30.501286983489994], [60.107216105214334, 30.482833385467533]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Верх. Суздальское оз.',
        year: 2015,
        url: './maps/city/high_suzd_lake_2015.jpg',
        bounds: [[60.0400104434988, 30.313038825988773], [60.039153163832374, 30.32162189483643], [60.03381609748235, 30.31235218048096]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
        info: 'Автор: Полина Токмакова'
    },
    {
        name: 'М "Петроградская"',
        year: 2016,
        url: './maps/city/petrogradskaya_2016.jpg',
        bounds: [[59.969403324131434, 30.294585227966312], [59.96777099268824, 30.31286716461182], [59.958512433344985, 30.290594100952152]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Берёзовый сад',
        year: 2016,
        url: './maps/city/berezovy_sad_2016.jpg',
        bounds: [[60.0304290780388, 30.312309265136722], [60.02928212883294, 30.32535552978516], [60.01837876400275, 30.30812501907349]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
        info: 'Автор: Виктор Добрецов'
    },
    {
        name: 'Большая Охта',
        year: 2017,
        url: './maps/city/big_okhta_2017.jpg',
        bounds: [[59.95965109641549, 30.41125059127808], [59.958372783293484, 30.42448997497559], [59.944146879921945, 30.40571451187134]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Сквер Андрея Петрова',
        year: 2017,
        url: './maps/city/skver_petrova_2017.jpg',
        bounds: [[59.964785336271625, 30.30874729156494], [59.96391536416931, 30.318489074707035], [59.9595329350863, 30.306944847106937]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Кронштадт - Морской собор',
        year: 2014,
        url: './maps/city/kronshtadt_sobor_2014.jpg',
        bounds: [[59.9962822605596, 29.766125679016117], [59.995767214543264, 29.792947769165043], [59.985357274664224, 29.76728439331055]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Школа №217',
        year: 2012,
        url: './maps/city/veteranov_2012.jpg',
        bounds: [[59.833440936715064, 30.164873600006107], [59.833354674113856, 30.1760745048523], [59.82424192853449, 30.164916515350345]],
        types: ['ORIENT', 'CITY'],
        info: 'Автор: Темкин В.Я.'
    },
    {
        name: 'Школа №339',
        year: 2008,
        url: './maps/city/school_339_2008.jpg',
        bounds: [[59.90844781586406, 30.45594692230225], [59.907038420393384, 30.470108985900882], [59.90223957196219, 30.453028678894047]],
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Яковлевский пер.',
        url: './maps/city/yakovlevsky.jpg',
        bounds: [[59.87587658325937, 30.320248603820804], [59.87590889044805, 30.328660011291507], [59.87168715181947, 30.32037734985352]],
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Гатчина - Аэродром',
        year: 2022,
        url: './maps/city/gatchina_aerodrom_2022.jpg',
        bounds: [[59.56558209814125, 30.08565187454224], [59.56314725951065, 30.108740329742435], [59.557298579394455, 30.081961154937748]],
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Петергоф - СПбГУ',
        year: 2024,
        url: './maps/city/peterhof_spbgu_2024.jpg',
        bounds: [[59.88542737449558, 29.82468366622925], [59.88333870986376, 29.8444676399231], [59.87838568144314, 29.821915626525882]],
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'М "Академическая"',
        year: 2023,
        url: './maps/city/akademicheskaya_2023.jpg',
        bounds: [[60.02162763535765, 30.40198087692261], [60.02015871327373, 30.41625022888184], [60.011268733553216, 30.397818088531498]],
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Универсам "САМПО"',
        year: 2024,
        url: './maps/city/sampo_2024.jpg',
        bounds: [[60.02975377631701, 30.36434412002564], [60.02782426676992, 30.383634567260746], [60.02305360675459, 30.362670421600345]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
    },
];
