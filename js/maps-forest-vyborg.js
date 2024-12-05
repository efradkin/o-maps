// types can be ORIENT, ROGAINE, SPRINT, CITY, RELIEF
let vyborgMaps = [
    // --- ВЫБОРГ - КАМЕННОГОРСК ---
    {
        name: 'р Гусиная',
        year: 2014,
        info: 'ККП, Спринт',
        url: './maps/forest/vyborg/kkp_gusinaja_2014_06_23.webp',
        bounds: [[60.80560161758715, 28.601188659667972], [60.80325703544707, 28.623075485229496], [60.79682948793573, 28.598313331604007]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY'],
        owner: 'NW',
        types: ['ORIENT'],
    },
    {
        name: 'р Гусиная',
        year: 2014,
        info: 'ККП, Лонг',
        url: './maps/forest/vyborg/kkp_gusinaja_2014_06_25.webp',
        bounds: [[60.805810946928815, 28.588871955871586], [60.80275460264983, 28.61964225769043], [60.78667258970011, 28.581619262695316]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY'],
        owner: 'NW',
        types: ['ORIENT'],
    },
    {
        name: 'оз Горица',
        year: 2014,
        info: 'ККП, Классика',
        url: './maps/forest/vyborg/kkp_goritsa_2014_06_26.webp',
        bounds: [[60.80461775134709, 28.610115051269535], [60.80168690677684, 28.64822387695313], [60.791552491219385, 28.6054801940918]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY'],
        owner: 'NW',
        types: ['ORIENT'],
    },
    {
        name: 'Обходное оз',
        year: 2015,
        info: 'ККП, Лонг',
        url: './maps/forest/vyborg/kkp_obkhodnoe_2015_06_23.webp',
        bounds: [[61.013354041904016, 29.186983108520508], [61.00823756195854, 29.237279891967777], [60.99446472727906, 29.17754173278809]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY'],
        owner: 'NW',
        types: ['ORIENT'],
    },
    {
        name: 'оз Горица',
        year: 2016,
        info: 'ККП, УТС',
        url: './maps/forest/vyborg/kkp_goritsa_2016_06_18.webp',
        bounds: [[60.79643164943967, 28.624920845031742], [60.792997469614704, 28.661270141601566], [60.7801160154499, 28.618655204772953]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY'],
        owner: 'NW',
        types: ['ORIENT'],
    },
    {
        name: 'р Гусиная',
        year: 2016,
        info: 'ККП, УТС',
        url: './maps/forest/vyborg/kkp_solnechnoe_2016_06_19.webp',
        bounds: [[60.80708782627314, 28.60148906707764], [60.80576908116999, 28.61569404602051], [60.797520458840815, 28.598527908325195]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY'],
        owner: 'NW',
        types: ['ORIENT'],
    },
    {
        name: 'оз Тростинка',
        year: 2016,
        info: 'ККП, Лонг',
        url: './maps/forest/vyborg/kkp_trostinka_2016_06_23.webp',
        bounds: [[60.82336880448059, 28.615651130676273], [60.819414418484975, 28.660326004028324], [60.80566441653337, 28.608741760253906]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY'],
        owner: 'NW',
        types: ['ORIENT'],
    },
    {
        name: 'Пруды',
        year: 2017,
        info: 'ККП, Спринт',
        url: './maps/forest/vyborg/kkp_prudy_2017_06_19.webp',
        bounds: [[61.04638331323814, 29.07791376113892], [61.0448978388272, 29.09587383270264], [61.036077050185696, 29.07387971878052]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','LUK_V'],
        owner: 'NW',
        types: ['ORIENT'],
        restricted: 'с 01.10.2024 по 16.06.2025'
    },
    {
        name: 'оз Тростинка',
        year: 2018,
        info: 'ККП, УТС',
        url: './maps/forest/vyborg/kkp_trostinka_2018_06_12.webp',
        bounds: [[60.83924419453814, 28.61294746398926], [60.83759218275943, 28.631873130798343], [60.82491694945184, 28.607797622680668]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','KZNTSV_A'],
        owner: 'NW',
        types: ['ORIENT'],
    },
    {
        name: 'Солнечное',
        year: 2018,
        info: 'ККП, Лонг',
        url: './maps/forest/vyborg/kkp_solnechnoe_2018_06_19.webp',
        bounds: [[60.828054851300216, 28.57449531555176], [60.82433117367928, 28.613805770874027], [60.80884606857439, 28.56754302978516]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','KZNTSV_A'],
        owner: 'NW',
        types: ['ORIENT'],
    },
    {
        name: 'Солнечное',
        year: 2018,
        info: 'ККП, Лонг',
        url: './maps/forest/vyborg/kkp_solnechnoe_2018_06_20.webp',
        bounds: [[60.82644410013589, 28.578615188598636], [60.82349433253967, 28.61376285552979], [60.813659809240335, 28.573207855224613]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','KZNTSV_A'],
        owner: 'NW',
        types: ['ORIENT'],
    },
    {
        name: 'оз Тростинка',
        year: 2018,
        info: 'ККП, Лонг',
        url: './maps/forest/vyborg/kkp_trostinka_2018_06_21.webp',
        bounds: [[60.83987151842037, 28.620157241821293], [60.83637925900983, 28.658781051635746], [60.81299011476441, 28.609642982482914]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','KZNTSV_A'],
        owner: 'NW',
        types: ['ORIENT'],
    },
    {
        name: 'Пруды',
        year: 2019,
        info: 'ККП, УТС',
        url: './maps/forest/vyborg/kkp_prudy_2019_06_15.webp',
        bounds: [[61.04054489411576, 29.084286689758304], [61.035973139348165, 29.134497642517093], [61.02327267179674, 29.077978134155277]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','KZNTSV_A'],
        owner: 'NW',
        types: ['ORIENT'],
        restricted: 'с 01.10.2024 по 16.06.2025'
    },
    {
        name: 'Пруды',
        year: 2019,
        info: 'ККП, УТС',
        url: './maps/forest/vyborg/kkp_prudy_2019_06_16.webp',
        bounds: [[61.04671571756098, 29.085488319396976], [61.04526142291396, 29.104027748107914], [61.03470539971476, 29.080896377563477]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','KZNTSV_A'],
        owner: 'NW',
        types: ['ORIENT'],
        restricted: 'с 01.10.2024 по 16.06.2025'
    },
    {
        name: 'Пруды',
        year: 2019,
        info: 'ККП, Классика',
        url: './maps/forest/vyborg/kkp_prudy_2019_06_18.webp',
        bounds: [[61.04735974101724, 29.059739112854007], [61.045344527262564, 29.080038070678714], [61.02871932154626, 29.053087234497074]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','KZNTSV_A','LUK_V'],
        owner: 'NW',
        types: ['ORIENT'],
        restricted: 'с 01.10.2024 по 16.06.2025'
    },
    {
        name: 'Пруды',
        year: 2019,
        info: 'ККП, Лонг',
        url: './maps/forest/vyborg/kkp_prudy_2019_06_19.webp',
        bounds: [[61.03420660301626, 29.05197143554688], [61.03073559210356, 29.090466499328617], [61.01528810611029, 29.04467582702637]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','KZNTSV_A','LUK_V'],
        owner: 'NW',
        types: ['ORIENT'],
        restricted: 'с 01.10.2024 по 16.06.2025'
    },
    {
        name: 'Пруды',
        year: 2019,
        info: 'ККП, Лонг',
        url: './maps/forest/vyborg/kkp_prudy_2019_06_20.webp',
        bounds: [[61.033998768743196, 29.059224128723148], [61.02921820454407, 29.11261081695557], [61.00936076234424, 29.049825668334964]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','KZNTSV_A','LUK_V'],
        owner: 'NW',
        types: ['ORIENT'],
        restricted: 'с 01.10.2024 по 16.06.2025'
    },
    {
        name: 'Пальцево',
        year: 2022,
        info: 'ККП, УТС',
        url: './maps/forest/vyborg/kkp_paltsevo_2022_06_08.webp',
        bounds: [[60.79387698976734, 28.83194446563721], [60.791384953275454, 28.85391712188721], [60.78154056098824, 28.827095031738285]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','TKMKVA_P','LUK_V'],
        owner: 'NW',
        types: ['ORIENT'],
    },
    {
        name: 'Пальцево',
        year: 2022,
        info: 'ККП, УТС',
        url: './maps/forest/vyborg/kkp_paltsevo_2022_06_10.webp',
        bounds: [[60.80752739590224, 28.79503726959229], [60.80407347192682, 28.832073211669925], [60.79582441273316, 28.789672851562504]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','TKMKVA_P','LUK_V'],
        owner: 'NW',
        types: ['ORIENT'],
    },
    {
        name: 'Пальцево',
        year: 2022,
        info: 'ККП, УТС',
        url: './maps/forest/vyborg/kkp_paltsevo_2022_06_12.webp',
        bounds: [[60.80528762100831, 28.79374980926514], [60.801519421840794, 28.822889328002933], [60.78987707234788, 28.785896301269535]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','TKMKVA_P','LUK_V'],
        owner: 'NW',
        types: ['ORIENT'],
    },
    {
        name: 'Пальцево',
        year: 2022,
        info: 'ККП, ПИРАМИДА',
        url: './maps/forest/vyborg/kkp_paltsevo_2022_06_11_piramida.webp',
        bounds: [[60.80625053409105, 28.7792444229126], [60.80281740718067, 28.815894126892093], [60.794882126083856, 28.774394989013675]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','TKMKVA_P','LUK_V'],
        owner: 'NW',
        types: ['ORIENT'],
    },
    {
        name: 'Пальцево',
        year: 2022,
        info: 'ККП, Лонг',
        url: './maps/forest/vyborg/kkp_paltsevo_2022_06_14.webp',
        bounds: [[60.82700891822042, 28.752079010009766], [60.82119290652695, 28.80769729614258], [60.797415767237716, 28.74006271362305]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','TKMKVA_P','LUK_V'],
        owner: 'NW',
        types: ['ORIENT'],
    },
    {
        name: 'Беличий залив',
        year: 2022,
        info: 'ККП, Спринт',
        url: './maps/forest/vyborg/kkp_paltsevo_2022_06_16.webp',
        bounds: [[60.80308955872403, 28.7568211555481], [60.80057730275183, 28.780338764190674], [60.79460990477943, 28.752958774566654]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','TKMKVA_P','LUK_V'],
        owner: 'NW',
        types: ['ORIENT'],
    },
    {
        name: 'Пруды',
        year: 2023,
        info: 'ККП, Классика',
        url: './maps/forest/vyborg/kkp_prudy_2023_06_19.webp',
        bounds: [[61.06272932040129, 29.08960819244385], [61.05876302107485, 29.135012626647953], [61.04573926994326, 29.082269668579105]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY'],
        owner: 'NW',
        types: ['ORIENT'],
        restricted: 'с 01.10.2024 по 16.06.2025'
    },
    {
        name: 'Пруды',
        year: 2023,
        info: 'ККП, УТС',
        url: './maps/forest/vyborg/kkp_prudy_2023_06_17.webp',
        bounds: [[61.047442839864935, 29.059782028198242], [61.04482512150944, 29.08604621887207], [61.03194113595335, 29.05394554138184]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','LUK_V'],
        owner: 'NW',
        types: ['ORIENT'],
        restricted: 'с 01.10.2024 по 16.06.2025'
    },
    {
        name: 'Пруды',
        year: 2023,
        info: 'ККП, УТС',
        url: './maps/forest/vyborg/kkp_prudy_2023_06_18.webp',
        bounds: [[61.045967802932786, 29.088234901428226], [61.04344346077914, 29.115293025970463], [61.034009160489205, 29.08312797546387]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','LUK_V'],
        owner: 'NW',
        types: ['ORIENT'],
        restricted: 'с 01.10.2024 по 16.06.2025'
    },
    {
        name: 'Пруды',
        year: 2023,
        info: 'ККП, Лонг',
        url: './maps/forest/vyborg/kkp_prudy_2023_06_20.webp',
        bounds: [[61.068169195524476, 29.113683700561527], [61.063809064586856, 29.15857315063477], [61.03796816794074, 29.10158157348633]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY'],
        owner: 'NW',
        types: ['ORIENT'],
        restricted: 'с 01.10.2024 по 16.06.2025'
    },
    {
        name: 'Обходное оз',
        year: 2024,
        info: 'ККП, УТС',
        url: './maps/forest/vyborg/kkp_obkhodnoe_2024_06_14.webp',
        bounds: [[61.01940539866776, 29.189171791076664], [61.01618231100997, 29.224319458007812], [61.00646948084682, 29.18419361114502]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','LUK_V'],
        owner: 'NW',
        types: ['ORIENT'],
    },
    {
        name: 'Обходное оз',
        year: 2024,
        info: 'ККП, УТС',
        url: './maps/forest/vyborg/kkp_obkhodnoe_2024_06_15.webp',
        bounds: [[61.01491378029991, 29.187583923339847], [61.01181502490026, 29.222130775451664], [61.002683376048246, 29.18273448944092]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','LUK_V'],
        owner: 'NW',
        types: ['ORIENT'],
    },
    {
        name: 'Новинское оз',
        year: 2024,
        info: 'ККП, ПИРАМИДА',
        url: './maps/forest/vyborg/kkp_novinskoe_2024_06_15.webp',
        bounds: [[61.0069479125113, 29.165139198303226], [61.00366114964517, 29.198570251464847], [60.99338262016258, 29.159603118896488]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY'],
        owner: 'NW',
        types: ['ORIENT'],
    },
    {
        name: 'Обходное оз',
        year: 2024,
        info: 'ККП, УТС',
        url: './maps/forest/vyborg/kkp_obkhodnoe_2024_06_16.webp',
        bounds: [[61.010962294166, 29.163208007812504], [61.00854956605167, 29.188098907470707], [60.99964584476618, 29.159173965454105]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','LUK_V'],
        owner: 'NW',
        types: ['ORIENT'],
    },
    {
        name: 'Новинское оз',
        year: 2024,
        info: 'ККП, Классика',
        url: './maps/forest/vyborg/kkp_novinskoe_2024_06_17.webp',
        bounds: [[60.99920891568199, 29.146471023559574], [60.993965297805566, 29.20269012451172], [60.981019011678164, 29.139432907104492]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','LUK_V'],
        owner: 'NW',
        types: ['ORIENT'],
    },
    {
        name: 'Ягодное оз',
        year: 2024,
        info: 'ККП, Лонг',
        url: './maps/forest/vyborg/kkp_novinskoe_2024_06_18.webp',
        bounds: [[61.000935790802075, 29.18625354766846], [60.99446472727906, 29.25594806671143], [60.978666467444995, 29.176898002624515]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','LUK_V'],
        owner: 'NW',
        types: ['ORIENT'],
    },
    {
        name: 'Обходное оз',
        year: 2024,
        info: 'ККП, Спринт',
        url: './maps/forest/vyborg/kkp_novinskoe_2024_06_20.webp',
        bounds: [[61.00118545172515, 29.186983108520508], [60.99947939630004, 29.204192161560062], [60.98957414237739, 29.183077812194828]],
        author: ['TKMKV_K','KVZN','NSNV','VRBY','TKMKVA_P','LUK_V'],
        owner: 'NW',
        types: ['ORIENT'],
    },
    {
        name: 'Выборг, Монрепо',
        year: 2012,
        url: './maps/forest/vyborg/monrepo.webp',
        bounds: [[60.74662096140217, 28.696932792663578], [60.74263611819784, 28.746714591979984], [60.728832152898704, 28.69088172912598]],
        author: 'MKHLV_A',
        owner: 'KOSOR',
        types: ['ORIENT'],
    },
    {
        name: 'Вещево, Макаровское оз',
        year: 1981,
        url: './maps/forest/vyborg/veschevo_1981.webp',
        link: './original_maps/forest/vyborg/veschevo_1981_full.jpg',
        bounds: [[60.759620692933005, 29.18972969055176], [60.755385875026555, 29.25264358520508], [60.73093040242884, 29.182691574096683]],
        author: ['SHRNN','KZNTSV_S'],
        info: 'Первый чемпионат СССР.',
        types: ['ORIENT'],
    },
    {
        name: 'Вещево, Беленькое оз',
        year: 1981,
        url: './maps/forest/vyborg/veschevo_west_1981.webp',
        link: './original_maps/forest/vyborg/veschevo_west_1981_full.jpg',
        bounds: [[60.72325014176067, 29.129734039306644], [60.72115139041765, 29.195652008056644], [60.69368709397291, 29.1258716583252]],
        author: 'RYLOV_V',
        types: ['ORIENT'],
    },
    {
        name: 'Выборг, гора Папула',
        year: 2023,
        url: './maps/forest/vyborg/papula_2023.webp',
        bounds: [[60.72481362238408, 28.767485618591312], [60.724677214353164, 28.781111240386966], [60.71673307071793, 28.767592906951908]],
        owner: 'KOSOR',
        types: ['ORIENT'],
    },
    {
        name: 'Выборг, Анненские укреления',
        year: 2017,
        url: './maps/forest/vyborg/vyborg_annenskie_2017.webp',
        bounds: [[60.721875475123724, 28.718798160552982], [60.72063717542608, 28.733968734741214], [60.71757270317024, 28.716931343078617]],
        author: ['TKMKV_K','KVZN','KZNTSV_A'],
        owner: 'NW',
        types: ['ORIENT'],
    },
    {
        name: 'Выборг, Батарейная гора',
        year: 2020,
        url: './maps/forest/vyborg/batarejnaya_gora_2020.webp',
        bounds: [[60.70882895498743, 28.752636909484867], [60.70691823952591, 28.76879453659058], [60.700429358009245, 28.748753070831302]],
        author: 'DBRTSV_V',
        owner: 'KOSOR',
        types: ['ORIENT'],
        zindex: 2
    },
    {
        name: 'Выборг, Южный форт',
        url: './maps/forest/vyborg/yuzhny_fort.webp',
        bounds: [[60.68845613981539, 28.770103454589847], [60.68627107175057, 28.792076110839847], [60.67126573142341, 28.76272201538086]],
        owner: 'KOSOR',
        types: ['ORIENT'],
    },
    {
        name: 'Возрождение',
        year: 2024,
        url: './maps/forest/vyborg/vozrozhdenie_2024.webp',
        bounds: [[60.85099401743829, 28.860483169555668], [60.847084858357135, 28.902196884155277], [60.832572889193194, 28.85297298431397]],
        author: ['TKMKV_K','KVZN'],
        owner: 'NW',
        types: ['ORIENT'],
    },
    {
        name: 'Возрождение',
        year: 1992,
        url: './maps/forest/vyborg/vozrozhdenie_1992.webp',
        link: './original_maps/forest/vyborg/vozrozhdenie_1992_full.jpg',
        bounds: [[60.85970951117796, 28.839025497436527], [60.8549444998421, 28.909235000610355], [60.82901707952645, 28.833532333374027]],
        author: 'KRCHKN_V',
        types: ['ORIENT'],
    },
    {
        name: 'Сайменские дачи',
        year: 1981,
        info: 'Первый чемпионат СССР.',
        url: './maps/forest/vyborg/vyborg_saymenskie_dachi_1981.webp',
        link: './original_maps/forest/vyborg/vyborg_saymenskie_dachi_1981_full.jpg',
        bounds: [[60.793185940251945, 28.719549179077152], [60.79037970721021, 28.77748489379883], [60.76498678767908, 28.721437454223636]],
        author: ['KHDNKCH','GLVNV_V'],
        types: ['ORIENT'],
    },
    {
        name: 'Сайменские дачи',
        year: 2013,
        info: 'Мемориал Михаила Святкина 2013',
        url: './maps/forest/vyborg/vyborg_saymenskie_dachi_2013.webp',
        link: './original_maps/forest/vyborg/vyborg_saymenskie_dachi_2013_full.jpg',
        bounds: [[60.80256618831815, 28.723926544189457], [60.79729013686225, 28.79422187805176], [60.76255538724196, 28.7138843536377]],
        author: ['KRYLS','SMLGS','TMLNS'],
        types: ['ORIENT'],
    },
    {
        name: 'Кировские дачи',
        year: 1980,
        url: './maps/forest/vyborg/kirovskie_dachi_1980.webp',
        link: './original_maps/forest/vyborg/kirovskie_dachi_1980_full.jpg',
        bounds: [[60.745467505039386, 28.7601900100708], [60.74397843643192, 28.783407211303714], [60.73099334779663, 28.75602722167969]],
        types: ['ORIENT'],
    },
    {
        name: 'Кировские дачи',
        year: 1992,
        url: './maps/forest/vyborg/kirovskie_dachi_1992.webp',
        link: './original_maps/forest/vyborg/kirovskie_dachi_1992_full.jpg',
        bounds: [[60.762744036975775, 28.744697570800785], [60.75991417444783, 28.78448009490967], [60.743223389332904, 28.740148544311527]],
        author: ['MLVA_M','ANDRV_E'],
        types: ['ORIENT'],
    },
    {
        name: 'Кировские дачи - Сайменский канал',
        year: 1994,
        url: './maps/forest/vyborg/kirovskie_dachi_1994.webp',
        link: './original_maps/forest/vyborg/kirovskie_dachi_1994_full.jpg',
        bounds: [[60.7804512083324, 28.704700469970703], [60.776931508206445, 28.754396438598636], [60.755385875026555, 28.696804046630863]],
        author: 'SHLKHN_Y',
        types: ['ORIENT'],
    },
    {
        name: 'Гвардейское',
        url: './maps/forest/vyborg/gvardeyskoe.webp',
        bounds: [[60.813136611628465, 28.90811920166016], [60.80997631620071, 28.947472572326664], [60.79161531772246, 28.900265693664554]],
        owner: 'KOSOR',
        types: ['ORIENT'],
    },
    {
        name: 'Красный Холм - Пальцево',
        year: 2015,
        url: './maps/forest/vyborg/paltsevo_2015.webp',
        bounds: [[60.784452302648944, 28.816280364990238], [60.77906851509545, 28.88018131256104], [60.76033342909643, 28.807311058044437]],
        author: 'MLNKV_L',
        owner: 'KOSOR',
        types: ['ORIENT'],
    },
    {
        name: 'Таммисуо',
        year: 1990,
        url: './maps/forest/vyborg/tammisuo_1990.webp',
        link: './original_maps/forest/vyborg/tammisuo_1990_full.jpg',
        bounds: [[60.72887411923285, 28.78254890441895], [60.72925181377248, 28.80949974060059], [60.71111746466515, 28.784093856811523]],
        author: 'SHVR',
        types: ['ORIENT'],
    },
    {
        name: 'Таммисуо',
        url: './maps/forest/vyborg/tammisuo.webp',
        bounds: [[60.72912591608617, 28.78954410552979], [60.72440439655344, 28.837051391601562], [60.714098581481025, 28.783836364746094]],
        owner: 'KOSOR',
        types: ['ORIENT'],
    },
    {
        name: 'Зимино',
        url: './maps/forest/vyborg/zimino.webp',
        bounds: [[60.6427384078507, 28.651657104492188], [60.64203357995182, 28.659617900848392], [60.63862494096181, 28.65009069442749]],
        owner: 'KOSOR',
        types: ['ORIENT'],
    },
    {
        name: 'Кировские дачи',
        year: 2014,
        url: './maps/forest/vyborg/kirovskie_dachi_2014.webp',
        bounds: [[60.764525674175374, 28.730278015136722], [60.76016572789462, 28.784265518188477], [60.74662096140217, 28.724441528320316]],
        author: ['BRGNTS','VRBY','MLNKV_L'],
        owner: 'KOSOR',
        types: ['ORIENT'],
    },
    {
        name: 'Комсомольское',
        year: 1992,
        url: './maps/forest/vyborg/komsomolskoe.webp',
        link: './original_maps/forest/vyborg/komsomolskoe_full.jpg',
        bounds: [[60.87567129868857, 28.804950714111328], [60.87316473979831, 28.857822418212894], [60.84327976304758, 28.798427581787113]],
        author: ['KZNTSVA_O','KZNTSV_S'],
        types: ['ORIENT'],
    },
    {
        name: 'Лейпясуо',
        url: './maps/forest/vyborg/leypjasuo.webp',
        bounds: [[60.57075597983445, 29.20054435729981], [60.568773798958446, 29.215564727783207], [60.55892435354992, 29.19573783874512]],
        owner: 'KOSOR',
        types: ['ORIENT'],
    },
    {
        name: 'Верхне-Черкасово',
        year: 2015,
        url: './maps/forest/vyborg/verkchne_cherkasovo_2015.webp',
        bounds: [[60.67509128654548, 28.88043880462647], [60.67347283794337, 28.91386985778809], [60.670046502936046, 28.880267143249515]],
        owner: 'KOSOR',
        types: ['ORIENT'],
    },
    {
        name: 'Каменногорск',
        year: 2009,
        info: 'Карта рисовалась под многодневки "Мемориал Михаила Святкина" и "Карельские скалы".',
        url: './maps/forest/vyborg/kamennogorsk_2002.webp',
        link: './original_maps/forest/vyborg/kamennogorsk_2002_full.jpg',
        bounds: [[61.007363934185655, 29.135141372680668], [60.998834400254225, 29.248008728027347], [60.95702738993799, 29.117288589477543]],
        author: ['VLKV_K','KVZN','KZNTSV_S','NSNV','TKMKV_K','VRBY'],
        types: ['ORIENT'],
    },
    {
        name: 'Каменногорск, оз Сувялампи',
        url: './maps/forest/vyborg/kamennogorsk_suvyalampi.webp',
        bounds: [[60.95655862334429, 29.136192798614506], [60.95538146789482, 29.147994518280033], [60.94809880379127, 29.13245916366577]],
        owner: 'KOSOR',
        types: ['ORIENT'],
        zindex: 2
    },
    {
        name: 'Гаврилово',
        year: 2014,
        url: './maps/forest/vyborg/gavrilovo_2014.webp',
        bounds: [[60.615975694756706, 29.031543731689457], [60.61422792656198, 29.05072689056397], [60.602622871964265, 29.027380943298343]],
        author: 'DBRTSV_V',
        owner: 'NW',
        types: ['ORIENT'],
    },
];