let ryazanMaps = [
    // --- Рязань ---
    {
        name: 'Биатлонка',
        year: 2017,
        correct: 2018,
        url: './maps/ryazan/biatlonka_velo_2017.webp',
        link: './original_maps/ryazan/biatlonka_velo_2017_omaps.jpg',
        bounds: [[54.8910235497936, 39.668197631835945], [54.8880615950405, 40.03795623779297], [54.67393022562334, 39.66236114501954]],
        author: 'VEKOVISCH',
        owner: 'VEKOVISCH',
        type: ['VELO']
    },
    {
        name: 'ВеСеОл',
        year: 2015,
        url: './maps/ryazan/veseol_2015.webp',
        link: './original_maps/ryazan/veseol_2015_omaps.jpg',
        bounds: [[54.609956735013355, 39.5339584350586], [54.609559069526135, 39.74149703979492], [54.50154878900876, 39.53327178955079]],
        author: 'VEKOVISCH',
        owner: 'VEKOVISCH',
        type: ['VELO']
    },
    {
        name: 'Карцево-Грачи',
        year: 2020,
        correct: 2022,
        url: './maps/ryazan/kartsevo_grachi_2020.webp',
        link: './original_maps/ryazan/kartsevo_grachi_2020_omaps.jpg',
        bounds: [[54.61758618912401, 39.83243465423585], [54.60834119480319, 39.87457752227784], [54.583105593985486, 39.80981826782227]],
        author: 'TARASOV',
        owner: 'TARASOV'
    },
    {
        name: 'Авиационный городок',
        year: 2017,
        correct: 2018,
        url: './maps/ryazan/aviatsionnyy_gorodok_2017.webp',
        link: './original_maps/ryazan/aviatsionnyy_gorodok_2017_omaps.jpg',
        bounds: [[54.66238966096887, 39.5752215385437], [54.66227796206429, 39.60045576095582], [54.6536017422146, 39.57492113113404]],
        author: 'ANDREYK',
        owner: 'ANDREYK',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Ал-Невский',
        year: 2021,
        correct: 2024,
        url: './maps/ryazan/al_nevskiy_2021.webp',
        link: './original_maps/ryazan/al_nevskiy_2021_omaps.jpg',
        bounds: [[53.49759426000488, 40.209274291992195], [53.489986092525875, 40.27051448822022], [53.472083644908196, 40.20021915435791]],
        author: 'ANDREYK',
        owner: 'ANDREYK'
    },
    {
        name: 'Алешня',
        year: 2012,
        correct: 2017,
        url: './maps/ryazan/aleshnya_2012.webp',
        link: './original_maps/ryazan/aleshnya_2012_omaps.jpg',
        bounds: [[53.650564894980874, 40.13198375701905], [53.6491404391569, 40.146875381469734], [53.63883713858995, 40.12945175170899]],
        author: 'KORNEEV',
        owner: 'KORNEEV'
    },
    {
        name: 'Альтаир 50',
        year: 2017,
        url: './maps/ryazan/altair_50_2017.webp',
        link: './original_maps/ryazan/altair_50_2017_omaps.jpg',
        bounds: [[54.89372614347525, 39.96218919754029], [54.892405720815276, 39.980041980743415], [54.88675332902147, 39.96027946472169]],
        author: 'KORNEEV',
        owner: 'KORNEEV'
    },
    {
        name: 'Баженово',
        year: 2007,
        url: './maps/ryazan/bazhenovo_2007.webp',
        link: './original_maps/ryazan/bazhenovo_2007_omaps.jpg',
        bounds: [[54.98807961592851, 41.30893707275391], [54.985715782146656, 41.33691787719727], [54.97313094911047, 41.3042163848877]],
        author: 'ZOTOV',
        owner: 'TSDYUTK'
    },
    {
        name: 'Берендей-Экопарк',
        year: 2022,
        correct: 2024,
        url: './maps/ryazan/berendey_ekopark_2022.webp',
        link: './original_maps/ryazan/berendey_ekopark_2022_omaps.jpg',
        bounds: [[54.764279809447146, 39.84329223632813], [54.75900566056252, 39.88749504089356], [54.74610214627036, 39.83642578125]],
        author: 'GUSEV_B',
        owner: 'GUSEV_B',
        type: ['PARK']
    },
    {
        name: 'Божатковский Лес',
        year: 2018,
        correct: 2019,
        url: './maps/ryazan/bozhatkovskiy_les_2018.webp',
        link: './original_maps/ryazan/bozhatkovskiy_les_2018_omaps.jpg',
        bounds: [[54.60872644482921, 39.65287685394288], [54.60714813933535, 39.66450691223145], [54.598833063109105, 39.64952945709229]],
        author: 'ANDREYK',
        owner: 'ANDREYK',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Болонь',
        year: 2024,
        url: './maps/ryazan/bolon_rogeyn_2024.webp',
        link: './original_maps/ryazan/bolon_rogeyn_2024_omaps.jpg',
        bounds: [[55.06136316912078, 40.05083084106446], [55.04779405322164, 40.16292572021485], [54.970815501323486, 40.01667022705078]],
        author: 'GUSEV_B',
        owner: 'GUSEV_B',
        type: ['ROGAINE']
    },
    {
        name: 'Борки',
        year: 2023,
        url: './maps/ryazan/borki_2023.webp',
        link: './original_maps/ryazan/borki_2023_omaps.jpg',
        bounds: [[54.66468562596714, 39.69834566116334], [54.66201733009254, 39.72081184387208], [54.64924431502483, 39.69295978546143]],
        author: 'GUSEV_B',
        owner: 'GUSEV_B',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Бояринцево',
        year: 2015,
        url: './maps/ryazan/boyarentsevo_2015.webp',
        link: './original_maps/ryazan/boyarentsevo_2015_omaps.jpg',
        bounds: [[54.155712089884794, 39.03264284133912], [54.15358850331777, 39.05882120132447], [54.14494224521813, 39.03043270111085]],
        author: 'KORNEEV',
        owner: 'KORNEEV'
    },
    {
        name: 'Бутырки',
        year: 2024,
        url: './maps/ryazan/butyrki_2024.webp',
        link: './original_maps/ryazan/butyrki_2024_omaps.jpg',
        bounds: [[54.64049080602529, 39.710125923156745], [54.63799477941217, 39.72746372222901], [54.63337486324195, 39.70684289932252]],
        author: 'ANDREYK',
        owner: 'ANDREYK',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Ванчур',
        year: 1993,
        url: './maps/ryazan/vanchur_1993.webp',
        link: './original_maps/ryazan/vanchur_1993_omaps.jpg',
        bounds: [[54.34359983807795, 40.9826946258545], [54.35970720705679, 41.049985885620124], [54.325383904474705, 40.99797248840332]],
        author: 'MAMONTO',
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Солотчинский Парк',
        year: 2023,
        correct: 2024,
        url: './maps/ryazan/solotchinskiy_park_2023.webp',
        link: './original_maps/ryazan/solotchinskiy_park_2023_omaps.jpg',
        bounds: [[54.804543713140994, 39.77891921997071], [54.795687609250635, 39.87573623657227], [54.760219023283824, 39.765787124633796]],
        author: 'LUK_V',
        owner: 'FSO_RYAZAN',
        type: ['PARK']
    },
    {
        name: 'велокросс-лонг ПР 2023',
        year: 2023,
        url: './maps/ryazan/velokross_long_pr_2023.webp',
        link: './original_maps/ryazan/velokross_long_pr_2023_2023_omaps.jpg',
        bounds: [[54.771459470756334, 39.84912872314454], [54.76413125127978, 39.916849136352546], [54.715969688649906, 39.830975532531745]],
        author: 'VEKOVISCH',
        owner: 'VEKOVISCH',
        type: ['VELO']
    },
    {
        name: 'велокросс-спринт ПР 2023',
        year: 2023,
        url: './maps/ryazan/velokross_sprint_pr_2023.webp',
        link: './original_maps/ryazan/velokross_sprint_pr_2023_2023_omaps.jpg',
        bounds: [[54.789477284183114, 39.81080532073975], [54.78673058121807, 39.83582496643067], [54.76957802751782, 39.80449676513672]],
        author: 'VEKOVISCH',
        owner: 'VEKOVISCH',
        type: ['VELO']
    },
    {
        name: 'велокросс-эстафета ПР 2023',
        year: 2023,
        url: './maps/ryazan/velokross_estafeta_pr_2023.webp',
        link: './original_maps/ryazan/velokross_estafeta_pr_2023_2023_omaps.jpg',
        bounds: [[54.79558864740703, 39.839944839477546], [54.79182791782735, 39.87354755401612], [54.767820284397445, 39.83110427856446]],
        author: 'VEKOVISCH',
        owner: 'VEKOVISCH',
        type: ['VELO']
    },
    {
        name: 'Выползово-Панино',
        year: 2022,
        correct: 2024,
        url: './maps/ryazan/vypolzovo_panino_2022.webp',
        link: './original_maps/ryazan/vypolzovo_panino_2022_omaps.jpg',
        bounds: [[54.54040569275587, 40.16773223876954], [54.52491717969398, 40.28978347778321], [54.482605106683145, 40.146617889404304]],
        author: ['LUK_V','TTYNN_V'],
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Выша',
        year: 1998,
        url: './maps/ryazan/vysha_1998.webp',
        link: './original_maps/ryazan/vysha_1998_omaps.jpg',
        bounds: [[54.03076331858032, 42.096691131591804], [54.02857030731842, 42.13046550750733], [54.01273686418567, 42.093687057495124]],
        author: 'MOROZOV',
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Голенищево',
        year: 2006,
        url: './maps/ryazan/golenischevo_2006.webp',
        link: './original_maps/ryazan/golenischevo_2006_omaps.jpg',
        bounds: [[54.14927816721851, 41.35097265243531], [54.14657612421337, 41.368288993835456], [54.141322345192215, 41.34768962860108]],
        author: ['KORNEEV','SOKOLOV'],
        owner: 'TSDYUTK'
    },
    {
        name: 'Голенчино-Никкулино-ЦПКиО',
        year: 1999,
        correct: 2022,
        url: './maps/ryazan/golenchino_nikkulino_tspkio_1999.webp',
        link: './original_maps/ryazan/golenchino_nikkulino_tspkio_1999_omaps.jpg',
        bounds: [[54.621537038019135, 39.72201347351075], [54.61795892710645, 39.76415634155274], [54.58584124224482, 39.71274375915528]],
        author: ['KORNEEV','ZOTOV','VORZHEIN','VEKOVISCH'],
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'ДП квартал А',
        year: 2022,
        url: './maps/ryazan/dp_kvartal_a_2022.webp',
        link: './original_maps/ryazan/dp_kvartal_a_2022_omaps.jpg',
        bounds: [[54.614927225802006, 39.7791337966919], [54.61282726749976, 39.79612827301026], [54.60816720972531, 39.7766661643982]],
        author: ['TARASOV','SOKOLOV'],
        owner: ['TARASOV','SOKOLOV'],
        type: ['CITY','SPRINT']
    },
    {
        name: 'Школа №59',
        year: 2023,
        correct: 2024,
        url: './maps/ryazan/dp_shk59_2023.webp',
        link: './original_maps/ryazan/dp_shk59_2023_omaps.jpg',
        bounds: [[54.61753649046839, 39.793746471405036], [54.6157348732198, 39.80902433395386], [54.61148522556301, 39.791536331176765]],
        author: 'SOKOLOV',
        owner: 'SOKOLOV',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Школа №71',
        year: 2021,
        url: './maps/ryazan/dp_shk71_2021.webp',
        link: './original_maps/ryazan/dp_shk71_2021_omaps.jpg',
        bounds: [[54.60469978059106, 39.81194257736207], [54.60313374804192, 39.82983827590943], [54.59750299054603, 39.80983972549439]],
        author: ['DUBOV','TARASOV','KRYUKOV'],
        owner: 'FSO_RYAZAN',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Деулино-Елань',
        year: 2024,
        url: './maps/ryazan/deulino_elan_2024.webp',
        link: './original_maps/ryazan/deulino_elan_2024_omaps.jpg',
        bounds: [[54.852575265066896, 40.31025409698487], [54.84965989868595, 40.33351421356202], [54.83349803105711, 40.304632186889656]],
        author: 'SHIBANOV_V',
        owner: 'SHIBANOV_V'
    },
    {
        name: 'Деулино-Лесохим',
        year: 2023,
        url: './maps/ryazan/deulino_lesohim_2023.webp',
        link: './original_maps/ryazan/deulino_lesohim_2023_omaps.jpg',
        bounds: [[54.8468925763803, 40.29776573181152], [54.84412506425888, 40.33081054687501], [54.834313693204265, 40.29428958892823]],
        author: 'SHIBANOV_A',
        owner: 'SHIBANOV_A'
    },
    {
        name: 'Деулино-Мост',
        year: 2023,
        url: './maps/ryazan/deulino_most_2023.webp',
        link: './original_maps/ryazan/deulino_most_2023_omaps.jpg',
        bounds: [[54.83428897641164, 40.324373245239265], [54.83233630197034, 40.3394365310669], [54.82225009993253, 40.31982421875001]],
        author: 'SHIBANOV_V',
        owner: 'SHIBANOV_V'
    },
    {
        name: 'Долгинино',
        year: 2022,
        url: './maps/ryazan/dolginino_rogeyn_2022.webp',
        link: './original_maps/ryazan/dolginino_rogeyn_2022_omaps.jpg',
        bounds: [[54.72848629990346, 40.086193084716804], [54.71470541995997, 40.197086334228516], [54.63922418480386, 40.05392074584962]],
        author: 'GUSEV_B',
        owner: 'GUSEV_B',
        type: ['ROGAINE']
    },
    {
        name: 'Дубки',
        year: 2012,
        correct: 2017,
        url: './maps/ryazan/dubki_2012.webp',
        link: './original_maps/ryazan/dubki_2012_omaps.jpg',
        bounds: [[54.735734252738105, 39.726390838623054], [54.73559797840528, 39.74128246307374], [54.72480607379546, 39.72643375396729]],
        author: 'KORNEEV',
        owner: 'KORNEEV'
    },
    {
        name: 'Ермишь',
        year: 2003,
        url: './maps/ryazan/ermish_2003.webp',
        link: './original_maps/ryazan/ermish_2003_omaps.jpg',
        bounds: [[54.734891822248095, 42.25938320159912], [54.73310779397438, 42.275240421295166], [54.72661525027747, 42.25640058517456]],
        author: ['MOROZOV','MILIDIN'],
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Заборье',
        year: 2012,
        correct: 2023,
        url: './maps/ryazan/zabore_2012.webp',
        link: './original_maps/ryazan/zabore_2012_omaps.jpg',
        bounds: [[54.848992793708014, 39.88886833190919], [54.84560768364451, 39.92126941680909], [54.82264568473381, 39.88075733184815]],
        author: 'SHIBANOV_V'
    },
    {
        name: 'Завидовка',
        year: 2000,
        url: './maps/ryazan/zavidovka_2000.webp',
        link: './original_maps/ryazan/zavidovka_2000_omaps.jpg',
        bounds: [[54.25248958993893, 38.790922164917], [54.24933042692568, 38.805255889892585], [54.24326214943376, 38.788776397705085]],
        author: 'MOROZOV',
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Заповедный луг',
        year: 2022,
        url: './maps/ryazan/zapovednyy_lug_2022.webp',
        link: './original_maps/ryazan/zapovednyy_lug_2022_omaps.jpg',
        bounds: [[54.656283003658395, 39.745573997497566], [54.6536017422146, 39.76763248443604], [54.63756013224836, 39.73724842071534]],
        author: 'GUSEV_B',
        owner: 'GUSEV_B'
    },
    {
        name: 'Кадом',
        year: 2009,
        url: './maps/ryazan/kadom_2009.webp',
        link: './original_maps/ryazan/kadom_2009_omaps.jpg',
        bounds: [[54.4113257530485, 42.4448847770691], [54.4155463293161, 42.46595621109009], [54.40588081768572, 42.44879007339478]],
        author: 'MOROZOV',
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Ильинка',
        year: 2019,
        url: './maps/ryazan/ilinka_2019.webp',
        link: './original_maps/ryazan/ilinka_2019_omaps.jpg',
        bounds: [[53.94057815977318, 39.3804931640625], [53.936738311008945, 39.42340850830078], [53.92258845016338, 39.37585830688477]],
        author: ['ZOTOV','TARASOV','KORNEEV'],
        owner: ['ZOTOV','TARASOV','KORNEEV']
    },
    {
        name: 'Касимов Ёлочка',
        year: 1990,
        url: './maps/ryazan/kasimov_elochka_1990.webp',
        link: './original_maps/ryazan/kasimov_elochka_1990_omaps.jpg',
        bounds: [[54.85645385810586, 41.69551849365235], [54.85106819519252, 41.737146377563484], [54.82086552261247, 41.68350219726563]],
        author: 'POSKREB',
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Касимов-Лощинино-ЦРБ',
        year: 2020,
        correct: 2021,
        url: './maps/ryazan/kasimov_loschinino_tsrb_2020.webp',
        link: './original_maps/ryazan/kasimov_loschinino_tsrb_2020_omaps.jpg',
        bounds: [[54.96438573890346, 41.30928039550782], [54.957659253863575, 41.36820316314698], [54.93537743229291, 41.29876613616944]],
        author: 'MITIN',
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Качево-Строитель',
        year: 2003,
        correct: 2020,
        url: './maps/ryazan/kachevo_stroitel_2003.webp',
        link: './original_maps/ryazan/kachevo_stroitel_2003_omaps.jpg',
        bounds: [[54.54000734805476, 39.76042270660401], [54.536944943319256, 39.79222297668458], [54.52835404520787, 39.75621700286866]],
        author: 'KORNEEV',
        owner: 'ANDREYK'
    },
    {
        name: 'Кельцы',
        year: 2024,
        correct: 2025,
        url: './maps/ryazan/keltsy_2024.webp',
        link: './original_maps/ryazan/keltsy_2024_omaps.jpg',
        bounds: [[54.934785711200405, 39.96083736419678], [54.92216025372716, 40.067696571350105], [54.897168911128304, 39.947319030761726]],
        author: 'GUSEV_B',
        owner: 'GUSEV_B'
    },
    {
        name: 'Кирицы',
        year: 2017,
        url: './maps/ryazan/kiritsy_2017.webp',
        link: './original_maps/ryazan/kiritsy_2017_omaps.jpg',
        bounds: [[54.30245238992604, 40.334630012512214], [54.30220197536198, 40.367546081542976], [54.28942881270231, 40.334372520446784]],
        author: 'VEKOVISCH',
        owner: 'VEKOVISCH',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Колос',
        year: 2024,
        url: './maps/ryazan/kolos_2024.webp',
        link: './original_maps/ryazan/kolos_2024_omaps.jpg',
        bounds: [[54.46001077197351, 40.00941753387452], [54.45746625739456, 40.02842903137208], [54.44426716860958, 40.00332355499268]],
        author: 'SHIBANOV_V',
        owner: 'TSDYUTK'
    },
    {
        name: 'Комсомольский Парк',
        year: 2017,
        correct: 2024,
        url: './maps/ryazan/komsomolskiy_park_2017.webp',
        link: './original_maps/ryazan/komsomolskiy_park_2017_omaps.jpg',
        bounds: [[54.63711306174695, 39.64008808135987], [54.63618164908144, 39.65229749679566], [54.626779396120575, 39.63807106018067]],
        author: 'TARASOV',
        owner: 'TARASOV',
        type: ['PARK','SPRINT']
    },
    {
        name: 'Коростово',
        year: 2024,
        url: './maps/ryazan/korostovo_2024.webp',
        link: './original_maps/ryazan/korostovo_2024_omaps.jpg',
        bounds: [[54.74218817570285, 39.69150066375733], [54.739438261313325, 39.72853660583497], [54.72861020742489, 39.6903419494629]],
        author: ['VEKOVISCH','ANDREYK'],
        owner: 'ANDREYK'
    },
    {
        name: 'Костино-Пощупово',
        year: 2022,
        correct: 2024,
        url: './maps/ryazan/kostino_poschupovo_2022.webp',
        link: './original_maps/ryazan/kostino_poschupovo_2022_omaps.jpg',
        bounds: [[54.82823290613604, 39.67596530914307], [54.82165671546502, 39.71943855285645], [54.79227328564422, 39.66115951538087]],
        author: ['VEKOVISCH','ANDREYK'],
        owner: 'ANDREYK'
    },
    {
        name: 'Кремль',
        year: 2024,
        url: './maps/ryazan/kreml_2024.webp',
        link: './original_maps/ryazan/kreml_2024_omaps.jpg',
        bounds: [[54.640515641341075, 39.74173307418824], [54.63824314713405, 39.75898504257203], [54.6334493821835, 39.739115238189704]],
        author: 'VEKOVISCH',
        owner: 'VEKOVISCH',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Крутоярский',
        year: 2022,
        correct: 2024,
        url: './maps/ryazan/krutoyarskiy_2022.webp',
        link: './original_maps/ryazan/krutoyarskiy_2022_omaps.jpg',
        bounds: [[54.91463734574264, 41.26357555389405], [54.908741362856816, 41.30752086639405], [54.89776118557002, 41.25580787658692]],
        author: 'MITIN',
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Кузьминское-Подлуг',
        year: 2016,
        info: '9 этап кубка Золотой Маршрут',
        url: './maps/ryazan/kuzminskoe_podlug_rogeyn_2017.webp',
        link: './original_maps/ryazan/kuzminskoe_podlug_rogeyn_2017_omaps.jpg',
        bounds: [[54.88263077900905, 39.62614059448243], [54.86593878161604, 39.755573272705085], [54.77534585936449, 39.58442687988282]],
        author: 'ANDREYK',
        owner: 'ANDREYK',
        type: ['ROGAINE']
    },
    {
        name: 'Ласково',
        year: 2024,
        url: './maps/ryazan/laskovo_2024.webp',
        link: './original_maps/ryazan/laskovo_2024_omaps.jpg',
        bounds: [[54.851685853589345, 39.95100975036622], [54.84906691702808, 39.97564315795899], [54.83292952951096, 39.94478702545166]],
        author: 'SHIBANOV_V',
        owner: 'SHIBANOV_V'
    },
    {
        name: 'оз Ласковское',
        year: 2024,
        url: './maps/ryazan/laskovskoe_2024.webp',
        link: './original_maps/ryazan/laskovskoe_2024_omaps.jpg',
        bounds: [[54.83742788798474, 39.94002342224122], [54.83461029353513, 39.962596893310554], [54.81802204535274, 39.93354320526124]],
        author: 'SHIBANOV_V',
        owner: 'SHIBANOV_V'
    },
/*
    {
        name: 'Сегденское оз',
        year: 2023,
        info: 'Кубок РФ по радиоспорту.',
        url: './original_maps/ryazan/segdenskoe_2023_omaps.jpg',
        link: './original_maps/ryazan/segdenskoe_2023_omaps.jpg',
        bounds: [[54.82899923461889, 39.921097755432136], [54.82336267230953, 39.96839046478272], [54.79002165360763, 39.90706443786622]]
    },
*/
    {
        name: 'Ласточка',
        year: 2007,
        url: './maps/ryazan/lastochka_2007.webp',
        link: './original_maps/ryazan/lastochka_2007_omaps.jpg',
        bounds: [[54.98670072980712, 41.33402109146119], [54.986306753643184, 41.33917093276978], [54.98394281545201, 41.33303403854371]],
        author: 'ZOTOV',
        owner: 'TSDYUTK',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Лошаки',
        year: 2002,
        url: './maps/ryazan/loshaki_2002.webp',
        link: './original_maps/ryazan/loshaki_2002_omaps.jpg',
        bounds: [[53.576735136092616, 38.997838497161865], [53.57175334629919, 39.01137828826905], [53.57200818355081, 38.99356842041016]],
        author: 'MOROZOV',
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Луковский Лес',
        year: 1978,
        url: './maps/ryazan/lukovskiy_les_1978.webp',
        link: './original_maps/ryazan/lukovskiy_les_1978_omaps.jpg',
        bounds: [[54.68191983495048, 39.72716331481934], [54.680778558447344, 39.77050781250001], [54.66400305533334, 39.725446701049805]],
        author: 'TSVETKOV',
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Мачильский Овраг',
        year: 2006,
        url: './maps/ryazan/machilskiy_ovrag_2006.webp',
        link: './original_maps/ryazan/machilskiy_ovrag_2006_omaps.jpg',
        bounds: [[54.00489354857592, 41.73864841461182], [54.00252260919115, 41.75564289093018], [53.99209139433326, 41.73753261566163]],
        author: 'KORNEEV',
        owner: 'TSDYUTK'
    },
    {
        name: 'Мемориальный Парк',
        year: 2024,
        url: './maps/ryazan/memorialnyy_park_2024.webp',
        link: './original_maps/ryazan/memorialnyy_park_2024_omaps.jpg',
        bounds: [[54.615660321821984, 39.73769903182984], [54.614082285193795, 39.74896430969239], [54.6111994146201, 39.73626136779785]],
        author: 'VEKOVISCH',
        owner: 'VEKOVISCH',
        type: ['PARK','SPRINT']
    },
    {
        name: 'Мещера',
        year: 2022,
        correct: 2023,
        url: './maps/ryazan/meschera_2022.webp',
        link: './original_maps/ryazan/meschera_2022_omaps.jpg',
        bounds: [[55.13213306181214, 40.102672576904304], [55.126759733712376, 40.14378547668458], [55.11576546718323, 40.09503364562989]],
        author: 'ANDREYK',
        owner: 'ANDREYK'
    },
    {
        name: 'Можары',
        year: 2008,
        url: './maps/ryazan/mozhary_2008.webp',
        link: './original_maps/ryazan/mozhary_2008_omaps.jpg',
        bounds: [[53.87484784631849, 41.07560634613038], [53.87396230950151, 41.08822345733643], [53.86277763085706, 41.071786880493164]],
        author: 'MOROZOV',
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Никоновка',
        year: 2021,
        url: './maps/ryazan/nikonovka_2021.webp',
        link: './original_maps/ryazan/nikonovka_2021_omaps.jpg',
        bounds: [[53.497262388555455, 40.17056465148926], [53.49478603497007, 40.19039154052735], [53.48860728521766, 40.164599418640144]],
        author: 'ANDREYK',
        owner: 'ANDREYK',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Ореховое',
        year: 2023,
        url: './maps/ryazan/orehovoe_2023.webp',
        link: './original_maps/ryazan/orehovoe_2023_omaps.jpg',
        bounds: [[54.6638293082498, 39.78793144226075], [54.652335529478194, 39.81187820434571], [54.64510991375584, 39.75887775421143]],
        author: ['VEKOVISCH','GUSEV_B'],
        owner: 'GUSEV_B'
    },
    {
        name: 'Павловская Пойма',
        year: 2018,
        correct: 2022,
        url: './maps/ryazan/pavlovskaya_poyma_2018.webp',
        link: './original_maps/ryazan/pavlovskaya_poyma_2018_omaps.jpg',
        bounds: [[54.63298984653529, 39.65532302856446], [54.62838178309622, 39.68783140182496], [54.61990953352531, 39.64937925338745]],
        author: 'ANDREYK',
        owner: 'ANDREYK',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Парк Братства по оружию',
        year: 2001,
        correct: 2023,
        url: './maps/ryazan/park_bratstva_po_oruzhiyu_2001.webp',
        link: './original_maps/ryazan/park_bratstva_po_oruzhiyu_2001_omaps.jpg',
        bounds: [[54.657474618623, 39.654464721679695], [54.654532755821634, 39.67148065567017], [54.650523038673576, 39.65105295181275]],
        author: 'ANDREYK',
        owner: 'ANDREYK',
        type: ['PARK','SPRINT']
    },
    {
        name: 'Парк Гагарина',
        year: 2020,
        correct: 2022,
        url: './maps/ryazan/park_gagarina_2020.webp',
        link: './original_maps/ryazan/park_gagarina_2020_omaps.jpg',
        bounds: [[54.668631900406346, 39.63901519775391], [54.66683254609356, 39.653177261352546], [54.661520883615815, 39.63665485382081]],
        author: 'ANDREYK',
        owner: 'ANDREYK',
        type: ['PARK','SPRINT']
    },
    {
        name: 'Парк Морской Славы',
        year: 2015,
        correct: 2017,
        url: './maps/ryazan/park_morskoy_slavy_2015.webp',
        link: './original_maps/ryazan/park_morskoy_slavy_2015_omaps.jpg',
        bounds: [[54.66597627363541, 39.676458835601814], [54.664549112757946, 39.69201564788819], [54.6598080967014, 39.67499971389771]],
        author: 'ANDREYK',
        owner: 'ANDREYK',
        type: ['PARK','SPRINT']
    },
    {
        name: 'Передельцы',
        year: 2025,
        url: './maps/ryazan/peredeltsy_2025.webp',
        link: './original_maps/ryazan/peredeltsy_2025_omaps.jpg',
        bounds: [[54.894281448486076, 39.96568679809571], [54.884827879118724, 40.042719841003425], [54.87722392142789, 39.9595069885254]],
        author: 'GUSEV_B',
        owner: 'GUSEV_B'
    },
    {
        name: 'Передельцы юг',
        year: 2007,
        correct: 2025,
        url: './maps/ryazan/peredeltsy_yug_2007.webp',
        link: './original_maps/ryazan/peredeltsy_yug_2007_omaps.jpg',
        bounds: [[54.87806338981041, 39.947919845581055], [54.87477948743567, 39.97345447540284], [54.86174000213818, 39.94204044342042]],
        author: 'GUSEV_B',
        owner: 'GUSEV_B'
    },
    {
        name: 'Передельцы северо-запад',
        year: 2007,
        correct: 2024,
        url: './maps/ryazan/peredeltsy_severo_zapad_2007.webp',
        link: './original_maps/ryazan/peredeltsy_severo_zapad_2007_omaps.jpg',
        bounds: [[54.89156655120832, 39.968562126159675], [54.88719765054682, 40.00156402587891], [54.877915249601735, 39.963626861572266]],
        author: 'DJCHKV',
        owner: 'GUSEV_B'
    },
    {
        name: 'Пехлец',
        year: 2003,
        url: './maps/ryazan/pehlets_2003.webp',
        link: './original_maps/ryazan/pehlets_2003_omaps.jpg',
        bounds: [[53.953282508101246, 40.06602287292481], [53.950555061728394, 40.10593414306641], [53.93403504762253, 40.05980014801026]],
        author: ['SOKOLOV','ZOTOV','FROLOV'],
        owner: 'TSDYUTK'
    },
    {
        name: 'Полевая',
        year: 2023,
        correct: 2024,
        url: './maps/ryazan/polevaya_2023.webp',
        link: './original_maps/ryazan/polevaya_2023_omaps.jpg',
        bounds: [[54.62291601759342, 39.734373092651374], [54.62286632544758, 39.743621349334724], [54.616318854444316, 39.73471641540528]],
        author: 'VEKOVISCH',
        owner: 'VEKOVISCH',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Приозерный',
        year: 2022,
        correct: 2024,
        url: './maps/ryazan/priozernyy_2022.webp',
        link: './original_maps/ryazan/priozernyy_2022_omaps.jpg',
        bounds: [[54.81134526848349, 40.002036094665534], [54.806027786501595, 40.04237651824952], [54.78784413193463, 39.99341011047364]],
        author: 'ANDREYK',
        owner: 'ANDREYK'
    },
    {
        name: 'Приокский Лесопарк',
        year: 2001,
        correct: 2024,
        url: './maps/ryazan/priokskiy_lesopark_2001.webp',
        link: './original_maps/ryazan/priokskiy_lesopark_2001_omaps.jpg',
        bounds: [[54.65026233129185, 39.656202793121345], [54.648139366072996, 39.67302560806275], [54.643644769751525, 39.65326309204102]],
        author: 'ANDREYK',
        owner: 'ANDREYK',
        type: ['PARK','SPRINT']
    },
    {
        name: 'Пронск, Лес Шарки',
        year: 2022,
        url: './maps/ryazan/pronsk_les_sharki_2022.webp',
        link: './original_maps/ryazan/pronsk_les_sharki_2022_omaps.jpg',
        bounds: [[54.155397956726375, 39.564342498779304], [54.152608349694226, 39.588289260864265], [54.136621030497004, 39.55713272094727]],
        author: 'SHIBANOV_V',
        owner: 'SHIBANOV_V'
    },
    {
        name: 'Радуга',
        year: 2024,
        url: './maps/ryazan/raduga_2024.webp',
        link: './original_maps/ryazan/raduga_2024_omaps.jpg',
        bounds: [[55.20138173136304, 40.14288425445557], [55.1972179553933, 40.17635822296143], [55.18798261651965, 40.13902187347413]],
        author: 'ANDREYK',
        owner: 'ANDREYK'
    },
    {
        name: 'Реткино',
        year: 2008,
        correct: 2014,
        url: './maps/ryazan/retkino_2008.webp',
        link: './original_maps/ryazan/retkino_2008_omaps.jpg',
        bounds: [[54.51170247739396, 39.80522632598878], [54.509534907916006, 39.82790708541871], [54.492152822759984, 39.80114936828614]],
        author: 'KORNEEV',
        owner: 'KORNEEV'
    },
    {
        name: 'Рубцово',
        year: 2023,
        correct: 2024,
        url: './maps/ryazan/rubtsovo_2023.webp',
        link: './original_maps/ryazan/rubtsovo_2023_omaps.jpg',
        bounds: [[54.60317103523124, 39.91899490356446], [54.60253714836839, 39.93755578994752], [54.59454435559697, 39.91393089294434]],
        author: 'ANDREYK',
        owner: 'ANDREYK',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Рыбацкая, Лесопарк',
        year: 2024,
        url: './maps/ryazan/rybatskaya_lesopark_2024.webp',
        link: './original_maps/ryazan/rybatskaya_lesopark_2024_omaps.jpg',
        bounds: [[54.64545756729321, 39.749693870544434], [54.64185672586527, 39.775314331054695], [54.63467892500528, 39.74737644195557]],
        author: 'VEKOVISCH',
        owner: 'VEKOVISCH',
        type: ['PARK','SPRINT']
    },
    {
        name: 'Рыбное-Дубянка',
        year: 2022,
        correct: 2024,
        url: './maps/ryazan/rybnoe_dubyanka_2022.webp',
        link: './original_maps/ryazan/rybnoe_dubyanka_2022_omaps.jpg',
        bounds: [[54.7216336241878, 39.50484037399293], [54.72157165980921, 39.53056812286378], [54.70419311077574, 39.504668712615974]],
        author: 'ANDREYK',
        owner: 'ANDREYK',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Рыбное, пл Ленина',
        year: 2024,
        url: './maps/ryazan/rybnoe_pl_lenina_2024.webp',
        link: './original_maps/ryazan/rybnoe_pl_lenina_2024_omaps.jpg',
        bounds: [[54.7388560482849, 39.50359582901002], [54.737233240146665, 39.515912532806404], [54.728870411986726, 39.49930429458619]],
        author: 'ANDREYK',
        owner: 'ANDREYK',
        type: ['CITY','SPRINT']
    },
    {
        name: 'РязГМУ',
        year: 2024,
        url: './maps/ryazan/ryazgmu_2024.webp',
        link: './original_maps/ryazan/ryazgmu_2024_omaps.jpg',
        bounds: [[54.626419160900774, 39.70557689666749], [54.6239222704874, 39.72231388092041], [54.61915166570606, 39.70280885696412]],
        author: 'ANDREYK',
        owner: 'ANDREYK',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Сажнево',
        year: 2022,
        correct: 2024,
        url: './maps/ryazan/sazhnevo_2022.webp',
        link: './original_maps/ryazan/sazhnevo_2022_omaps.jpg',
        bounds: [[54.486145251040185, 39.72922325134278], [54.48185714964661, 39.77660179138184], [54.4478355839141, 39.72098350524903]],
        author: ['POSKREB','ZOTOV','TARASOV'],
        owner: 'TSDYUTK'
    },
    {
        name: 'Секиотово',
        year: 2003,
        correct: 2023,
        url: './maps/ryazan/sekiotovo_2003.webp',
        link: './original_maps/ryazan/sekiotovo_2003_omaps.jpg',
        bounds: [[54.58419987533201, 39.62167739868165], [54.58365273833257, 39.648756980896], [54.56422461412183, 39.62167739868165]],
        author: 'KORNEEV',
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Сельцы',
        year: 1980,
        url: './maps/ryazan/seltsy_1980.webp',
        link: './original_maps/ryazan/seltsy_1980_omaps.jpg',
        bounds: [[54.95125203059951, 39.475679397583015], [54.947456501233596, 39.53867912292481], [54.912219850527435, 39.46851253509522]],
        author: ['POSKREB','KARPOV','IVSHENTSE'],
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Семёно-Оленинское',
        year: 2007,
        correct: 2023,
        url: './maps/ryazan/semeno_oleninskoe_2007.webp',
        link: './original_maps/ryazan/semeno_oleninskoe_2007_omaps.jpg',
        bounds: [[54.573330368293476, 39.637255668640144], [54.57243481053296, 39.6703863143921], [54.547674800547654, 39.630217552185066]],
        author: 'KORNEEV',
        owner: 'KORNEEV'
    },
    {
        name: 'Сквер на Касимовском шоссе',
        year: 2018,
        correct: 2022,
        url: './maps/ryazan/skver_na_kasimovskom_shosse_2018.webp',
        link: './original_maps/ryazan/skver_na_kasimovskom_shosse_2018_omaps.jpg',
        bounds: [[54.619673477849375, 39.785528182983406], [54.61956166152487, 39.79642868041993], [54.61231779382735, 39.785571098327644]],
        author: 'ANDREYK',
        owner: 'ANDREYK',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Скопин',
        year: 2008,
        correct: 2016,
        url: './maps/ryazan/skopin_2008.webp',
        link: './original_maps/ryazan/skopin_2008_omaps.jpg',
        bounds: [[53.8066193026066, 39.54975128173828], [53.80469326298429, 39.57099437713624], [53.797672606446966, 39.54801321029664]],
        author: ['ZOTOV','SOKOLOV'],
        owner: 'KORNEEV'
    },
    {
        name: 'Скопин, Красный городок',
        year: 2001,
        url: './maps/ryazan/skopin_krasnyy_gorodok_2001.webp',
        link: './original_maps/ryazan/skopin_krasnyy_gorodok_2001_omaps.jpg',
        bounds: [[53.78338688465324, 39.54837799072266], [53.78167531395168, 39.56567287445069], [53.77723758329353, 39.54762697219849]],
        author: 'MOROZOV',
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Славянский проспект',
        year: 2023,
        correct: 2024,
        url: './maps/ryazan/slavyanskiy_prospekt_2023.webp',
        link: './original_maps/ryazan/slavyanskiy_prospekt_2023_omaps.jpg',
        bounds: [[54.60588047958694, 39.73244190216065], [54.604364207258804, 39.743127822875984], [54.6015303665954, 39.730596542358406]],
        author: 'VEKOVISCH',
        owner: 'VEKOVISCH',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Слёмы',
        year: 1985,
        url: './maps/ryazan/slemy_1985.webp',
        link: './original_maps/ryazan/slemy_1985_omaps.jpg',
        bounds: [[54.88122358454226, 39.425768852233894], [54.878359668594115, 39.46211814880372], [54.871791644552616, 39.43113327026368]],
        author: ['ELISEEV','CHERNOV','BELOKUR'],
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Поляны',
        year: 2023,
        correct: 2025,
        url: './maps/ryazan/polyany_2023.webp',
        link: './original_maps/ryazan/polyany_2023_omaps.jpg',
        bounds: [[54.76063997736235, 39.80041980743409], [54.75727222215259, 39.84509468078614], [54.74293136376204, 39.796257019042976]],
        author: ['VEKOVISCH','GUSEV_B','ANDREYK'],
        owner: ['GUSEV_B','ANDREYK']
    },
    {
        name: 'Спартак',
        year: 2023,
        correct: 2024,
        url: './maps/ryazan/spartak_2023.webp',
        link: './original_maps/ryazan/spartak_2023_omaps.jpg',
        bounds: [[54.63218254160649, 39.73548889160157], [54.630393993609395, 39.748620986938484], [54.62136310934809, 39.7312617301941]],
        author: 'VEKOVISCH',
        owner: 'VEKOVISCH',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Спас-Клепики',
        year: 2022,
        correct: 2024,
        url: './maps/ryazan/spas_klepiki_2022.webp',
        link: './original_maps/ryazan/spas_klepiki_2022_omaps.jpg',
        bounds: [[55.13851141658605, 40.16644477844239], [55.13637723440935, 40.18064975738526], [55.125262924515695, 40.16047954559327]],
        author: 'ANDREYK',
        owner: 'ANDREYK',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Спасск',
        year: 2010,
        url: './maps/ryazan/spassk_2010.webp',
        link: './original_maps/ryazan/spassk_2010_omaps.jpg',
        bounds: [[54.425521644648256, 40.31222820281983], [54.42067786481511, 40.35544395446778], [54.40859088735468, 40.307121276855476]],
        author: 'KORNEEV',
        owner: 'KORNEEV'
    },
    {
        name: 'Строитель',
        year: 2024,
        url: './maps/ryazan/stroitel_2024.webp',
        link: './original_maps/ryazan/stroitel_2024_omaps.jpg',
        bounds: [[54.540804033568556, 39.77288961410523], [54.53876249580164, 39.79007720947266], [54.53355860226911, 39.770336151123054]],
        author: 'ANDREYK',
        owner: 'ANDREYK',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Тума',
        year: 2018,
        url: './maps/ryazan/tuma_2018.webp',
        link: './original_maps/ryazan/tuma_2018_omaps.jpg',
        bounds: [[55.1663679673819, 40.56362628936768], [55.16651504541338, 40.5856204032898], [55.150590698880045, 40.56276798248292]],
        author: ['KORNEEV','TARASOV'],
        owner: ['KORNEEV','TARASOV']
    },
    {
        name: 'Турлатовский Лес',
        year: 2005,
        url: './maps/ryazan/turlatovskiy_les_2005.webp',
        link: './original_maps/ryazan/turlatovskiy_les_2005_omaps.jpg',
        bounds: [[54.54662932368576, 39.80417490005494], [54.545036164569105, 39.83211278915406], [54.536173081478, 39.80114936828614]],
        author: ['KORNEEV','SOKOLOV','ZOTOV'],
        owner: 'TSDYUTK'
    },
    {
        name: 'Туромша',
        year: 2015,
        url: './maps/ryazan/turomsha_2015.webp',
        link: './original_maps/ryazan/turomsha_2015_omaps.jpg',
        bounds: [[54.227937030269054, 39.578804969787605], [54.22623110042036, 39.59940433502198], [54.21842808155942, 39.57644462585449]],
        author: ['KORNEEV','SOKOLOV'],
        owner: 'TSDYUTK'
    },
    {
        name: 'Ульевая',
        year: 1971,
        url: './maps/ryazan/ulevaya_1971.webp',
        link: './original_maps/ryazan/ulevaya_1971_omaps.jpg',
        bounds: [[54.929509146525035, 39.869041442871094], [54.92418256615949, 39.935131072998054], [54.887271703657944, 39.85960006713868]],
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Ункусово',
        year: 2006,
        url: './maps/ryazan/unkusovo_2006.webp',
        link: './original_maps/ryazan/unkusovo_2006_omaps.jpg',
        bounds: [[54.251536851974016, 41.54913425445557], [54.24996980087506, 41.56973361968995], [54.24313676238747, 41.546602249145515]],
        author: ['KORNEEV','SOKOLOV'],
        owner: 'TSDYUTK'
    },
    {
        name: 'Федино-Срезнево',
        year: 2000,
        url: './maps/ryazan/fedino_sreznevo_2000.webp',
        link: './original_maps/ryazan/fedino_sreznevo_2000_omaps.jpg',
        bounds: [[54.77623695318089, 39.363069534301765], [54.77381115177969, 39.38899040222169], [54.752418199699115, 39.357318878173835]],
        author: 'VEKOVISCH',
        owner: 'VEKOVISCH'
    },
    {
        name: 'Фефелов Бор',
        year: 2022,
        correct: 2024,
        url: './maps/ryazan/fefelov_bor_2022.webp',
        link: './original_maps/ryazan/fefelov_bor_2022_omaps.jpg',
        bounds: [[54.717779259548735, 39.65708255767823], [54.713019667048734, 39.68180179595948], [54.70084545923847, 39.64854240417481]],
        author: 'ANDREYK',
        owner: 'ANDREYK'
    },
    {
        name: 'Хамбушево',
        year: 1980,
        url: './maps/ryazan/hambushevo_1980.webp',
        link: './original_maps/ryazan/hambushevo_1980_omaps.jpg',
        bounds: [[54.58283201905655, 39.77188110351563], [54.578006850242815, 39.819517135620124], [54.55753083672228, 39.76462841033936]],
        author: 'SOKOLOV',
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'ЦПКиО',
        year: 2024,
        url: './maps/ryazan/tspkio_2024.webp',
        link: './original_maps/ryazan/tspkio_2024_omaps.jpg',
        bounds: [[54.61935045207355, 39.72681999206544], [54.61763588771894, 39.74194765090943], [54.60670073451993, 39.722099304199226]],
        author: 'VEKOVISCH',
        owner: 'VEKOVISCH',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Цирк',
        year: 2024,
        correct: 2025,
        url: './maps/ryazan/tsirk_2024.webp',
        link: './original_maps/ryazan/tsirk_2024_omaps.jpg',
        bounds: [[54.63672808043193, 39.74540233612061], [54.63511360296701, 39.75748300552369], [54.62669244308375, 39.741668701171875]],
        author: 'VEKOVISCH',
        owner: 'VEKOVISCH',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Полково',
        info: 'ЧР по рогейну.',
        year: 2020,
        url: './maps/ryazan/chr_2020_rogeyn_2020.webp',
        link: './original_maps/ryazan/chr_2020_rogeyn_2020_omaps.jpg',
        bounds: [[54.862727989585636, 39.88586425781251], [54.83500575725284, 40.07597923278809], [54.707267747286174, 39.81943130493165]],
        author: 'VEKOVISCH',
        owner: 'VEKOVISCH',
        type: ['ROGAINE']
    },
    {
        name: 'Чернава',
        year: 1973,
        url: './maps/ryazan/chernava_1973.webp',
        link: './original_maps/ryazan/chernava_1973_omaps.jpg',
        bounds: [[53.82918031996693, 40.168848037719734], [53.835106747444215, 40.23425102233887], [53.797203675958706, 40.16575813293458]],
        author: ['CHERNOV','KONEV','ROZENFE'],
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Шача',
        year: 2006,
        url: './maps/ryazan/shacha_2006.webp',
        link: './original_maps/ryazan/shacha_2006_omaps.jpg',
        bounds: [[53.98676756654189, 41.74493551254273], [53.98599795219423, 41.77298069000245], [53.976130488774324, 41.741867065429695]],
        author: 'KORNEEV',
        owner: 'TSDYUTK'
    },
    {
        name: 'Шевцово',
        year: 2023,
        url: './maps/ryazan/shevtsovo_2023.webp',
        link: './original_maps/ryazan/shevtsovo_2023_omaps.jpg',
        bounds: [[54.371283603944754, 39.86135959625245], [54.36707097322616, 39.894683361053474], [54.35814426852959, 39.85702514648438]],
        author: ['SHIBANOV_A','SHIBANOV_V'],
        owner: 'SHIBANOV_V'
    },
    {
        name: 'Школа №19, Школа №37',
        year: 2023,
        url: './maps/ryazan/shk_19_shk_37_2023.webp',
        link: './original_maps/ryazan/shk_19_shk_37_2023_omaps.jpg',
        bounds: [[54.60849032427805, 39.71244335174561], [54.606402461911124, 39.72950220108033], [54.601517937035204, 39.70950365066529]],
        author: 'ANDREYK',
        owner: 'ANDREYK',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Школа №64',
        year: 2023,
        url: './maps/ryazan/shk_64_2023.webp',
        link: './original_maps/ryazan/shk_64_2023_omaps.jpg',
        bounds: [[54.60313374804192, 39.71293687820435], [54.602338279867816, 39.721906185150154], [54.59734138998512, 39.711413383483894]],
        author: 'ANDREYK',
        owner: 'ANDREYK',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Экопарк-Поляны',
        year: 2022,
        url: './maps/ryazan/ekopark_polyany_2022.webp',
        link: './original_maps/ryazan/ekopark_polyany_2022_omaps.jpg',
        bounds: [[54.75271540147229, 39.866724014282234], [54.74696911389396, 39.91045475006104], [54.717010821499606, 39.85277652740479]],
        author: ['VEKOVISCH','ANDREYK'],
        owner: 'ANDREYK',
        type: ['PARK']
    }
];
