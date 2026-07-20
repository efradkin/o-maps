let ryazanMaps = [
    // --- Рязань ---
    {
        name: 'Биатлонка',
        year: 2017,
        correct: 2018,
        url: './maps/ryazan/biatlonka_velo_2017.webp',
        link: ['./original_maps/ryazan/biatlonka_velo_2017_omaps.webp','./original_maps/ryazan/biatlonka_velo_tracks_2017_omaps.gif'],
        info: 'Веломаршруты.',
        bounds: [[54.8910235, 39.6681976], [54.8880616, 40.0379562], [54.6739302, 39.6623611]],
        author: 'VEKOVISCH',
        owner: 'VEKOVISCH',
        type: ['ROGAINE','VELO']
    },
    {
        name: 'Божатково-Рожок',
        year: 2015,
        url: './maps/ryazan/veseol_2015.webp',
        link: './original_maps/ryazan/veseol_2015_omaps.gif',
        bounds: [[54.6099567, 39.5339584], [54.6095591, 39.741497], [54.5015488, 39.5332718]],
        author: 'VEKOVISCH',
        owner: 'VEKOVISCH',
        type: ['ROGAINE']
    },
    {
        name: 'Карцево-Грачи',
        year: 2022,
        url: './maps/ryazan/kartsevo_grachi_2020.webp',
        link: './original_maps/ryazan/kartsevo_grachi_2020_omaps.jpg',
        bounds: [[54.6175862, 39.8324347], [54.6083412, 39.8745775], [54.5831056, 39.8098183]],
        author: ['TARASOV','ANDREYKN'],
        owner: ['TARASOV','ANDREYKN']
    },
    {
        name: 'Авиационный городок',
        year: 2017,
        correct: 2018,
        url: './maps/ryazan/aviatsionnyy_gorodok_2017.webp',
        link: './original_maps/ryazan/aviatsionnyy_gorodok_2017_omaps.jpg',
        bounds: [[54.6623897, 39.5752215], [54.662278, 39.6004558], [54.6536017, 39.5749211]],
        author: 'ANDREYKN',
        owner: 'ANDREYKN',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Александро-Невский',
        year: 2021,
        correct: 2024,
        url: './maps/ryazan/al_nevskiy_2021.webp',
        link: './original_maps/ryazan/al_nevskiy_2021_omaps.gif',
        bounds: [[53.4975943, 40.2092743], [53.4899861, 40.2705145], [53.4720836, 40.2002192]],
        author: 'ANDREYKN',
        owner: 'ANDREYKN'
    },
    {
        name: 'Алешня',
        year: 2012,
        url: './maps/ryazan/aleshnya_2012.webp',
        link: './original_maps/ryazan/aleshnya_2012_omaps.jpg',
        bounds: [[53.6505649, 40.1319838], [53.6491404, 40.1468754], [53.6388371, 40.1294518]],
        author: 'KORNEEV',
        owner: 'KORNEEV'
    },
    {
        name: 'Альтаир 50',
        year: 2017,
        url: './maps/ryazan/altair_50_2017.webp',
        link: './original_maps/ryazan/altair_50_2017_omaps.jpg',
        bounds: [[54.8937261, 39.9621892], [54.8924057, 39.980042], [54.8867533, 39.9602795]],
        author: 'KORNEEV',
        owner: 'KORNEEV'
    },
    {
        name: 'Баженово',
        year: 2007,
        url: './maps/ryazan/bazhenovo_2007.webp',
        link: './original_maps/ryazan/bazhenovo_2007_omaps.gif',
        bounds: [[54.9880796, 41.3089371], [54.9857158, 41.3369179], [54.9731309, 41.3042164]],
        author: 'ZOTOV',
        owner: 'TSDYUTK'
    },
    {
        name: 'Берендей-Экопарк',
        year: 2022,
        correct: 2024,
        url: './maps/ryazan/berendey_ekopark_2022.webp',
        link: './original_maps/ryazan/berendey_ekopark_2022_omaps.jpg',
        bounds: [[54.7642798, 39.8432922], [54.7590057, 39.887495], [54.7461021, 39.8364258]],
        author: 'GUSEV_B',
        owner: 'GUSEV_B',
        type: ['PARK']
    },
    {
        name: 'Берендей',
        year: 2025,
        url: './maps/ryazan/berendey_2025.webp',
        link: './original_maps/ryazan/berendey_2025_omaps.jpg',
        bounds: [[54.7734646, 39.8493004], [54.7704445, 39.8731613], [54.7535327, 39.8421335]],
        author: 'GUSEV_B',
        owner: 'GUSEV_B',
        type: ['PARK']
    },
    {
        name: 'Божатковский Лес',
        year: 2018,
        correct: 2019,
        url: './maps/ryazan/bozhatkovskiy_les_2018.webp',
        link: './original_maps/ryazan/bozhatkovskiy_les_2018_omaps.gif',
        bounds: [[54.6087264, 39.6528769], [54.6071481, 39.6645069], [54.5988331, 39.6495295]],
        author: 'ANDREYKN',
        owner: 'ANDREYKN',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Болонь',
        year: 2024,
        url: './maps/ryazan/bolon_rogeyn_2024.webp',
        link: './original_maps/ryazan/bolon_rogeyn_2024_omaps.gif',
        info: 'Ночная прогулка.',
        bounds: [[55.0613632, 40.0508308], [55.0477941, 40.1629257], [54.9708155, 40.0166702]],
        author: 'GUSEV_B',
        owner: 'GUSEV_B',
        type: ['ROGAINE']
    },
    {
        name: 'Борки',
        year: 2023,
        url: './maps/ryazan/borki_2023.webp',
        link: './original_maps/ryazan/borki_2023_omaps.gif',
        bounds: [[54.6646856, 39.6983457], [54.6620173, 39.7208118], [54.6492443, 39.6929598]],
        author: 'GUSEV_B',
        owner: 'GUSEV_B',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Бояринцево',
        year: 2015,
        url: './maps/ryazan/boyarentsevo_2015.webp',
        link: './original_maps/ryazan/boyarentsevo_2015_omaps.gif',
        bounds: [[54.1557121, 39.0326428], [54.1535885, 39.0588212], [54.1449422, 39.0304327]],
        author: 'KORNEEV',
        owner: 'KORNEEV'
    },
    {
        name: 'Бутырки',
        year: 2024,
        correct: 2025,
        url: './maps/ryazan/butyrki_2025.webp',
        link: ['./original_maps/ryazan/butyrki_2025_omaps.gif','./original_maps/ryazan/butyrki_2024_omaps.jpg'],
        bounds: [[54.6413104, 39.7050619], [54.6381438, 39.7265625], [54.6358215, 39.702723]],
        author: 'ANDREYKN',
        owner: 'ANDREYKN',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Ванчур',
        year: 1993,
        url: './maps/ryazan/vanchur_1993.webp',
        link: './original_maps/ryazan/vanchur_1993_omaps.jpg',
        bounds: [[54.3435998, 40.9826946], [54.3597072, 41.0499859], [54.3253839, 40.9979725]],
        author: 'MAMONTO',
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Солотчинский Парк',
        year: 2023,
        correct: 2024,
        url: './maps/ryazan/solotchinskiy_park_2023.webp',
        link: './original_maps/ryazan/solotchinskiy_park_2023_omaps.jpg',
        bounds: [[54.8045437, 39.7789192], [54.7956876, 39.8757362], [54.760219, 39.7657871]],
        author: 'LUK_V',
        owner: 'FSO_RYAZAN',
        type: ['PARK']
    },
    {
        name: 'Солотча',
        year: 2022,
        correct: 2023,
        url: './maps/ryazan/solotcha_2023.webp',
        link: './original_maps/ryazan/solotcha_2023_omaps.gif',
        bounds: [[54.807957, 39.841876], [54.8048405, 39.8763585], [54.7972215, 39.8387647]],
        author: ['VEKOVISCH','TARASOV'],
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Биатлонный комплекс Алмаз',
        year: 2023,
        url: './maps/ryazan/velokross_long_pr_2023.webp',
        link: './original_maps/ryazan/velokross_long_pr_2023_omaps.gif',
        info: 'Первенство России, лонг.',
        bounds: [[54.7714595, 39.8491287], [54.7641313, 39.9168491], [54.7159697, 39.8309755]],
        author: 'VEKOVISCH',
        owner: 'VEKOVISCH',
        type: ['VELO']
    },
    {
        name: 'Солотчинский Парк',
        year: 2023,
        url: './maps/ryazan/velokross_sprint_pr_2023.webp',
        link: './original_maps/ryazan/velokross_sprint_pr_2023_omaps.jpg',
        info: 'Первенство России, спринт.',
        bounds: [[54.7894773, 39.8108053], [54.7867306, 39.835825], [54.769578, 39.8044968]],
        author: 'VEKOVISCH',
        owner: 'VEKOVISCH',
        type: ['VELO']
    },
    {
        name: 'Давыдово',
        year: 2023,
        url: './maps/ryazan/velokross_estafeta_pr_2023.webp',
        link: './original_maps/ryazan/velokross_estafeta_pr_2023_omaps.jpg',
        info: 'Первенство России, эстафета.',
        bounds: [[54.7955886, 39.8399448], [54.7918279, 39.8735476], [54.7678203, 39.8311043]],
        author: 'VEKOVISCH',
        owner: 'VEKOVISCH',
        type: ['VELO']
    },
    {
        name: 'Выползово-Панино',
        date: '2022-08-27',
        correct: 2024,
        start: 'RUSSIA_CUP',
        url: './maps/ryazan/vypolzovo_panino_2022.webp',
        link: ['./original_maps/ryazan/vypolzovo_panino_2022_omaps.gif','./original_maps/ryazan/aglamazovo_2022_08_27_omaps.jpg'],
        bounds: [[54.5404057, 40.1677322], [54.5249172, 40.2897835], [54.4826051, 40.1466179]],
        author: ['LUK_V','TTYNN_V'],
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Выша',
        year: 1998,
        url: './maps/ryazan/vysha_1998.webp',
        link: './original_maps/ryazan/vysha_1998_omaps.gif',
        bounds: [[54.0307633, 42.0966911], [54.0285703, 42.1304655], [54.0127369, 42.0936871]],
        author: 'MOROZOV',
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Голенищево',
        year: 2006,
        url: './maps/ryazan/golenischevo_2006.webp',
        link: './original_maps/ryazan/golenischevo_2006_omaps.jpg',
        bounds: [[54.1492782, 41.3509727], [54.1465761, 41.368289], [54.1413223, 41.3476896]],
        author: ['KORNEEV','SOKOLOV'],
        owner: 'TSDYUTK'
    },
    {
        name: 'Голенчино-Никкулино-ЦПКиО',
        year: 2021,
        url: './maps/ryazan/golenchino_nikkulino_tspkio_1999.webp',
        link: './original_maps/ryazan/golenchino_nikkulino_tspkio_2021_omaps.jpg',
        bounds: [[54.621537, 39.7220135], [54.6179589, 39.7641563], [54.5858412, 39.7127438]],
        author: ['KORNEEV','ZOTOV','VORZHEIN','VEKOVISCH'],
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Дашково-Песочня, квартал А',
        year: 2022,
        date: '2023-04-16',
        url: './maps/ryazan/dp_kvartal_a_2022.webp',
        link: './original_maps/ryazan/dp_kvartal_a_2022_omaps.jpg',
        bounds: [[54.6149272, 39.7791338], [54.6128273, 39.7961283], [54.6081672, 39.7766662]],
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
        bounds: [[54.6175365, 39.7937465], [54.6157349, 39.8090243], [54.6114852, 39.7915363]],
        author: 'SOKOLOV',
        owner: 'SOKOLOV',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Школа №71',
        year: 2021,
        correct: 2025,
        url: './maps/ryazan/dp_shk71_2021.webp',
        link: './original_maps/ryazan/dp_shk71_2025_omaps.jpg',
        bounds: [[54.6046998, 39.8119426], [54.6031337, 39.8298383], [54.597503, 39.8098397]],
        author: ['DUBOV','TARASOV','KRYUKOV_S'],
        owner: 'FSO_RYAZAN',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Деулино-Елань',
        year: 2024,
        url: './maps/ryazan/deulino_elan_2024.webp',
        link: './original_maps/ryazan/deulino_elan_2024_omaps.jpg',
        bounds: [[54.8525753, 40.3102541], [54.8496599, 40.3335142], [54.833498, 40.3046322]],
        author: 'SHIBANOV_V',
        owner: 'SHIBANOV_V'
    },
    {
        name: 'Деулино-Лесохим',
        year: 2023,
        url: './maps/ryazan/deulino_lesohim_2023.webp',
        link: './original_maps/ryazan/deulino_lesohim_2023_omaps.jpg',
        bounds: [[54.8468926, 40.2977657], [54.8441251, 40.3308105], [54.8343137, 40.2942896]],
        author: 'SHIBANOV_A',
        owner: 'SHIBANOV_A'
    },
    {
        name: 'Деулино-Мост',
        year: 2025,
        url: './maps/ryazan/deulino_most_2023.webp',
        link: './original_maps/ryazan/deulino_most_2025_omaps.gif',
        bounds: [[54.834289, 40.3243732], [54.8323363, 40.3394365], [54.8222501, 40.3198242]],
        author: 'SHIBANOV_V',
        owner: 'SHIBANOV_V'
    },
    {
        name: 'Долгинино',
        year: 2022,
        url: './maps/ryazan/dolginino_rogeyn_2022.webp',
        link: './original_maps/ryazan/dolginino_rogeyn_2022_omaps.gif',
        info: 'Ночная прогулка.',
        bounds: [[54.7284863, 40.0861931], [54.7147054, 40.1970863], [54.6392242, 40.0539207]],
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
        bounds: [[54.7357343, 39.7263908], [54.735598, 39.7412825], [54.7248061, 39.7264338]],
        author: 'KORNEEV',
        owner: 'KORNEEV'
    },
    {
        name: 'Дубки',
        year: 2025,
        url: './maps/ryazan/dubki_2025.webp',
        link: './original_maps/ryazan/dubki_2025_omaps.gif',
        bounds: [[54.7381747, 39.7233653], [54.7356475, 39.7486854], [54.7253017, 39.7199535]],
        author: ['VEKOVISCH','ANDREYKN'],
        owner: 'ANDREYKN'
    },
    {
        name: 'Ермишь, Токмаково',
        year: 2003,
        url: './maps/ryazan/ermish_2003.webp',
        link: './original_maps/ryazan/ermish_2003_omaps.gif',
        bounds: [[54.7348918, 42.2593832], [54.7331078, 42.2752404], [54.7266153, 42.2564006]],
        author: ['MOROZOV','MILIDIN'],
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Заборье',
        year: 2012,
        correct: 2023,
        url: './maps/ryazan/zabore_2012.webp',
        link: './original_maps/ryazan/zabore_2012_omaps.gif',
        bounds: [[54.8489928, 39.8888683], [54.8456077, 39.9212694], [54.8226457, 39.8807573]],
        author: 'SHIBANOV_V'
    },
    {
        name: 'Завидовка',
        year: 2000,
        url: './maps/ryazan/zavidovka_2000.webp',
        link: './original_maps/ryazan/zavidovka_2000_omaps.gif',
        bounds: [[54.2524896, 38.7909222], [54.2493304, 38.8052559], [54.2432621, 38.7887764]],
        author: 'MOROZOV',
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Заповедный луг',
        year: 2022,
        url: './maps/ryazan/zapovednyy_lug_2022.webp',
        link: './original_maps/ryazan/zapovednyy_lug_2022_omaps.gif',
        bounds: [[54.656283, 39.745574], [54.6536017, 39.7676325], [54.6375601, 39.7372484]],
        author: 'GUSEV_B',
        owner: 'GUSEV_B'
    },
    {
        name: 'Кадом',
        year: 2009,
        url: './maps/ryazan/kadom_2009.webp',
        link: './original_maps/ryazan/kadom_2009_omaps.gif',
        bounds: [[54.4113258, 42.4448848], [54.4155463, 42.4659562], [54.4058808, 42.4487901]],
        author: 'MOROZOV',
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Ильинка',
        year: 2019,
        url: './maps/ryazan/ilinka_2019.webp',
        link: './original_maps/ryazan/ilinka_2019_omaps.gif',
        bounds: [[53.9405782, 39.3804932], [53.9367383, 39.4234085], [53.9225885, 39.3758583]],
        author: ['ZOTOV','TARASOV','KORNEEV'],
        owner: 'TSDYUTK'
    },
    {
        name: 'Касимов Ёлочка',
        year: 1990,
        url: './maps/ryazan/kasimov_elochka_1990.webp',
        link: './original_maps/ryazan/kasimov_elochka_1990_omaps.jpg',
        bounds: [[54.8564539, 41.6955185], [54.8510682, 41.7371464], [54.8208655, 41.6835022]],
        author: 'POSKREB',
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Касимов, Лощинино',
        year: 2020,
        correct: 2021,
        url: './maps/ryazan/kasimov_loschinino_tsrb_2020.webp',
        link: './original_maps/ryazan/kasimov_loschinino_tsrb_2020_omaps.jpg',
        bounds: [[54.9643857, 41.3092804], [54.9576593, 41.3682032], [54.9353774, 41.2987661]],
        author: 'MITIN',
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Касимов, ЦРБ',
        year: 2020,
        correct: 2021,
        url: './maps/ryazan/kasimov_loschinino_tsrb_2021.webp',
        link: './original_maps/ryazan/kasimov_loschinino_tsrb_2021_omaps.jpg',
        bounds: [[54.9567229, 41.3260174], [54.9533961, 41.3558865], [54.9443262, 41.3215542]],
        author: ['MITIN','KORNEEV','DUBOV'],
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Качёво',
        year: 2025,
        url: './maps/ryazan/kachevo_2025.webp',
        link: './original_maps/ryazan/kachevo_2025_omaps.gif',
        bounds: [[54.5446379, 39.7370768], [54.5389866, 39.7794342], [54.5274824, 39.7305536]],
        author: 'ANDREYKN',
        owner: 'ANDREYKN'
    },
    {
        name: 'Качёво-Строитель',
        year: 2022,
        url: './maps/ryazan/kachevo_stroitel_2003.webp',
        link: './original_maps/ryazan/kachevo_stroitel_2022_omaps.gif',
        bounds: [[54.5400073, 39.7604227], [54.5369449, 39.792223], [54.528354, 39.756217]],
        author: ['KORNEEV','ANDREYKN'],
        owner: 'ANDREYKN'
    },
    {
        name: 'Кельцы',
        year: 2025,
        url: './maps/ryazan/keltsy_2024.webp',
        link: ['./original_maps/ryazan/keltsy_2024_omaps.jpg','./original_maps/ryazan/keltsy_2025_omaps.gif'],
        bounds: [[54.9347857, 39.9608374], [54.9221603, 40.0676966], [54.8971689, 39.947319]],
        author: ['GUSEV_B','DJCHKV'],
        owner: 'GUSEV_B'
    },
    {
        name: 'Келецкая канава',
        year: 2025,
        url: './maps/ryazan/keletska_kanava_2025.webp',
        link: './original_maps/ryazan/keletska_kanava_2025_omaps.gif',
        bounds: [[54.9092841, 39.9507523], [54.9043003, 39.9943542], [54.8732239, 39.9379206]],
        author: ['GUSEV_B','DJCHKV'],
        owner: 'GUSEV_B'
    },
    {
        name: 'Кельцы-узкоколейка',
        year: 2025,
        url: './maps/ryazan/keltsy_railroad_2025.webp',
        link: './original_maps/ryazan/keltsy_railroad_2025_omaps.gif',
        bounds: [[54.9164627, 39.9532843], [54.9136506, 39.9776173], [54.8964039, 39.9463749]],
        author: 'GUSEV_B',
        owner: 'GUSEV_B'
    },
    {
        name: 'Кирицы',
        year: 2017,
        url: './maps/ryazan/kiritsy_2017.webp',
        link: ['./original_maps/ryazan/kiritsy_2017_omaps.jpg','./original_maps/ryazan/kiritsy_game_2017_omaps.gif'],
        bounds: [[54.3024524, 40.33463], [54.302202, 40.3675461], [54.2894288, 40.3343725]],
        author: 'VEKOVISCH',
        owner: 'VEKOVISCH',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Колос',
        year: 2024,
        url: './maps/ryazan/kolos_2024.webp',
        link: './original_maps/ryazan/kolos_2024_omaps.jpg',
        bounds: [[54.4600108, 40.0094175], [54.4574663, 40.028429], [54.4442672, 40.0033236]],
        author: 'SHIBANOV_V',
        owner: 'TSDYUTK'
    },
    {
        name: 'Комсомольский Парк',
        year: 2017,
        correct: 2024,
        url: './maps/ryazan/komsomolskiy_park_2017.webp',
        link: './original_maps/ryazan/komsomolskiy_park_2017_omaps.jpg',
        bounds: [[54.6371131, 39.6400881], [54.6361816, 39.6522975], [54.6267794, 39.6380711]],
        author: 'TARASOV',
        owner: 'TARASOV',
        type: ['PARK','SPRINT']
    },
    {
        name: 'Коростово',
        year: 2024,
        url: './maps/ryazan/korostovo_2024.webp',
        link: './original_maps/ryazan/korostovo_2024_omaps.gif',
        bounds: [[54.7421882, 39.6915007], [54.7394383, 39.7285366], [54.7286102, 39.6903419]],
        author: ['VEKOVISCH','ANDREYKN'],
        owner: 'ANDREYKN'
    },
    {
        name: 'Костино-Пощупово',
        year: 2022,
        correct: 2024,
        url: './maps/ryazan/kostino_poschupovo_2022.webp',
        link: './original_maps/ryazan/kostino_poschupovo_2022_omaps.jpg',
        bounds: [[54.8282329, 39.6759653], [54.8216567, 39.7194386], [54.7922733, 39.6611595]],
        author: ['VEKOVISCH','ANDREYKN'],
        owner: 'ANDREYKN'
    },
    {
        name: 'Кремль',
        year: 2024,
        url: './maps/ryazan/kreml_2024.webp',
        link: './original_maps/ryazan/kreml_2024_omaps.jpg',
        bounds: [[54.6405156, 39.7417331], [54.6382431, 39.758985], [54.6334494, 39.7391152]],
        author: 'VEKOVISCH',
        owner: 'VEKOVISCH',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Крутоярский',
        year: 2022,
        correct: 2024,
        url: './maps/ryazan/krutoyarskiy_2022.webp',
        link: ['./original_maps/ryazan/krutoyarskiy_2022_omaps.jpg','./original_maps/ryazan/krutoyarskiy_2022_omaps.gif'],
        bounds: [[54.9146373, 41.2635756], [54.9087414, 41.3075209], [54.8977612, 41.2558079]],
        author: ['MITIN','ANDREYKN'],
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Кузьминское-Подлуг',
        year: 2016,
        info: '9 этап кубка Золотой Маршрут',
        url: './maps/ryazan/kuzminskoe_podlug_rogeyn_2017.webp',
        link: './original_maps/ryazan/kuzminskoe_podlug_rogeyn_2017_omaps.jpg',
        bounds: [[54.8826308, 39.6261406], [54.8659388, 39.7555733], [54.7753459, 39.5844269]],
        author: 'ANDREYKN',
        owner: 'ANDREYKN',
        type: ['ROGAINE']
    },
    {
        name: 'Ласково',
        year: 2025,
        url: './maps/ryazan/laskovo_2025.webp',
        link: './original_maps/ryazan/laskovo_2025_omaps.gif',
        bounds: [[54.8519329, 39.9412251], [54.8485728, 39.9713516], [54.8314712, 39.9338007]],
        author: 'SHIBANOV_V',
        owner: 'SHIBANOV_V'
    },
    {
        name: 'оз Ласковское',
        year: 2024,
        url: './maps/ryazan/laskovskoe_2024.webp',
        link: './original_maps/ryazan/laskovskoe_2024_omaps.gif',
        bounds: [[54.8374279, 39.9400234], [54.8346103, 39.9625969], [54.818022, 39.9335432]],
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
        bounds: [[54.8289992, 39.9210978], [54.8233627, 39.9683905], [54.7900217, 39.9070644]]
    },
*/
    {
        name: 'Ласточка',
        year: 2007,
        url: './maps/ryazan/lastochka_2007.webp',
        link: './original_maps/ryazan/lastochka_2007_omaps.gif',
        bounds: [[54.9867007, 41.3340211], [54.9863068, 41.3391709], [54.9839428, 41.333034]],
        author: 'ZOTOV',
        owner: 'TSDYUTK',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Прямоглядово, Лошаки',
        year: 2002,
        url: './maps/ryazan/loshaki_2002.webp',
        link: './original_maps/ryazan/loshaki_2002_omaps.gif',
        bounds: [[53.5767351, 38.9978385], [53.5717533, 39.0113783], [53.5720082, 38.9935684]],
        author: ['MOROZOV','TMFV_K','NKTN_V'],
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Луковский Лес',
        year: 1978,
        url: './maps/ryazan/lukovskiy_les_1978.webp',
        link: './original_maps/ryazan/lukovskiy_les_1978_omaps.jpg',
        bounds: [[54.6819198, 39.7271633], [54.6807786, 39.7705078], [54.6640031, 39.7254467]],
        author: 'TSVETKOV',
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Мачильский Овраг',
        year: 2006,
        url: './maps/ryazan/machilskiy_ovrag_2006.webp',
        link: './original_maps/ryazan/machilskiy_ovrag_2006_omaps.gif',
        bounds: [[54.0048935, 41.7386484], [54.0025226, 41.7556429], [53.9920914, 41.7375326]],
        author: 'KORNEEV',
        owner: 'TSDYUTK'
    },
    {
        name: 'Мемориальный Парк',
        year: 2024,
        url: './maps/ryazan/memorialnyy_park_2024.webp',
        link: './original_maps/ryazan/memorialnyy_park_2024_omaps.gif',
        bounds: [[54.6156603, 39.737699], [54.6140823, 39.7489643], [54.6111994, 39.7362614]],
        author: 'VEKOVISCH',
        owner: 'VEKOVISCH',
        type: ['PARK','SPRINT']
    },
    {
        name: 'Полушкино',
        year: 2025,
        url: './maps/ryazan/meschera_2022.webp',
        link: './original_maps/ryazan/polushkino_2025_omaps.gif',
        bounds: [[55.1321331, 40.1026726], [55.1267597, 40.1437855], [55.1157655, 40.0950336]],
        author: 'ANDREYKN',
        owner: 'ANDREYKN'
    },
    {
        name: 'Можары',
        year: 2008,
        url: './maps/ryazan/mozhary_2008.webp',
        link: './original_maps/ryazan/mozhary_2008_omaps.gif',
        bounds: [[53.8748478, 41.0756063], [53.8739623, 41.0882235], [53.8627776, 41.0717869]],
        author: 'MOROZOV',
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Никоновка',
        year: 2021,
        url: './maps/ryazan/nikonovka_2021.webp',
        link: './original_maps/ryazan/nikonovka_2021_omaps.jpg',
        bounds: [[53.4972624, 40.1705647], [53.494786, 40.1903915], [53.4886073, 40.1645994]],
        author: 'ANDREYKN',
        owner: 'ANDREYKN',
        type: ['CITY','SPRINT']
    },
    {
        name: 'оз Ореховое',
        year: 2025,
        url: './maps/ryazan/orehovoe_2025.webp',
        link: './original_maps/ryazan/orehovoe_2025_omaps.gif',
        bounds: [[54.6631591, 39.7687054], [54.6588648, 39.8042822], [54.6343063, 39.7590065]],
        author: 'VEKOVISCH',
        owner: 'VEKOVISCH'
    },
    {
        name: 'оз Ореховое',
        year: 2023,
        url: './maps/ryazan/orehovoe_2023.webp',
        link: './original_maps/ryazan/orehovoe_2023_omaps.jpg',
        bounds: [[54.6638293, 39.7879314], [54.6523355, 39.8118782], [54.6451099, 39.7588778]],
        author: ['VEKOVISCH','GUSEV_B'],
        owner: 'GUSEV_B'
    },
    {
        name: 'Павловская Пойма',
        year: 2018,
        correct: 2022,
        url: './maps/ryazan/pavlovskaya_poyma_2018.webp',
        link: './original_maps/ryazan/pavlovskaya_poyma_2018_omaps.gif',
        bounds: [[54.6329898, 39.655323], [54.6283818, 39.6878314], [54.6199095, 39.6493793]],
        author: 'ANDREYKN',
        owner: 'ANDREYKN',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Парк Советско-Польского братства по оружию',
        year: 2023,
        url: './maps/ryazan/park_bratstva_po_oruzhiyu_2001.webp',
        link: './original_maps/ryazan/park_bratstva_po_oruzhiyu_2023_omaps.gif',
        bounds: [[54.6574746, 39.6544647], [54.6545328, 39.6714807], [54.650523, 39.651053]],
        author: 'ANDREYKN',
        owner: 'ANDREYKN',
        type: ['PARK','SPRINT']
    },
    {
        name: 'Парк Гагарина',
        year: 2020,
        correct: 2022,
        url: './maps/ryazan/park_gagarina_2020.webp',
        link: './original_maps/ryazan/park_gagarina_2020_omaps.gif',
        bounds: [[54.6686319, 39.6390152], [54.6668325, 39.6531773], [54.6615209, 39.6366549]],
        author: 'ANDREYKN',
        owner: 'ANDREYKN',
        type: ['PARK','SPRINT']
    },
    {
        name: 'Парк Морской Славы',
        year: 2015,
        correct: 2017,
        url: './maps/ryazan/park_morskoy_slavy_2015.webp',
        link: './original_maps/ryazan/park_morskoy_slavy_2015_omaps.jpg',
        bounds: [[54.6659763, 39.6764588], [54.6645491, 39.6920156], [54.6598081, 39.6749997]],
        author: 'ANDREYKN',
        owner: 'ANDREYKN',
        type: ['PARK','SPRINT']
    },
    {
        name: 'Парк Морской Славы',
        year: 2025,
        url: './maps/ryazan/park_morskoy_slavy_2025.webp',
        link: './original_maps/ryazan/park_morskoy_slavy_2025_omaps.gif',
        bounds: [[54.6671552, 39.6682835], [54.665331, 39.6819305], [54.6606024, 39.6656442]],
        author: 'ANDREYKN',
        owner: 'ANDREYKN',
        type: ['CITY','PARK','SPRINT']
    },
    {
        name: 'Передельцы',
        year: 2006,
        correct: 2025,
        url: './maps/ryazan/peredeltsy_2025.webp',
        link: ['./original_maps/ryazan/peredeltsy_2025_omaps.jpg','./original_maps/ryazan/peredeltsy_east_2025_omaps.gif'],
        bounds: [[54.8942814, 39.9656868], [54.8848279, 40.0427198], [54.8772239, 39.959507]],
        author: ['GUSEV_B','DJCHKV'],
        owner: 'GUSEV_B'
    },
    {
        name: 'Отводное',
        year: 1,
        url: './maps/ryazan/otvodnoe_retro.webp',
        link: './original_maps/ryazan/otvodnoe_retro_omaps.jpg',
        bounds: [[54.882137, 39.91642], [54.8790263, 39.9716949], [54.8593687, 39.9106693]],
        owner: 'GUSEV_B'
    },
    {
        name: 'Отводное',
        year: 2025,
        url: './maps/ryazan/peredeltsy_yug_2007.webp',
        link: ['./original_maps/ryazan/peredeltsy_yug_2007_omaps.jpg','./original_maps/ryazan/otvodnoe_2025_omaps.gif'],
        bounds: [[54.8780634, 39.9479198], [54.8747795, 39.9734545], [54.86174, 39.9420404]],
        author: ['GUSEV_B','DJCHKV'],
        owner: 'GUSEV_B'
    },
    {
        name: 'Сокольи горы',
        year: 2006,
        correct: 2025,
        url: './maps/ryazan/peredeltsy_severo_zapad_2007.webp',
        link: ['./original_maps/ryazan/sokolii_gory_2025_omaps.gif','./original_maps/ryazan/peredeltsy_severo_zapad_2007_omaps.jpg'],
        bounds: [[54.8915666, 39.9685621], [54.8871977, 40.001564], [54.8779152, 39.9636269]],
        author: ['GUSEV_B','DJCHKV'],
        owner: 'GUSEV_B'
    },
    {
        name: 'Пехлец',
        year: 2003,
        url: './maps/ryazan/pehlets_2003.webp',
        link: './original_maps/ryazan/pehlets_2003_omaps.gif',
        bounds: [[53.9532825, 40.0660229], [53.9505551, 40.1059341], [53.934035, 40.0598001]],
        author: ['SOKOLOV','ZOTOV','FROLOV'],
        owner: 'TSDYUTK'
    },
    {
        name: 'Полевая',
        year: 2023,
        correct: 2024,
        url: './maps/ryazan/polevaya_2023.webp',
        link: './original_maps/ryazan/polevaya_2023_omaps.gif',
        bounds: [[54.622916, 39.7343731], [54.6228663, 39.7436213], [54.6163189, 39.7347164]],
        author: 'VEKOVISCH',
        owner: 'VEKOVISCH',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Приозерный',
        year: 2022,
        correct: 2024,
        url: './maps/ryazan/priozernyy_2022.webp',
        link: './original_maps/ryazan/priozernyy_2022_omaps.gif',
        bounds: [[54.8113453, 40.0020361], [54.8060278, 40.0423765], [54.7878441, 39.9934101]],
        author: 'ANDREYKN',
        owner: 'ANDREYKN'
    },
    {
        name: 'Приокский Лесопарк',
        year: 2025,
        url: './maps/ryazan/priokskiy_lesopark_2001.webp',
        link: './original_maps/ryazan/priokskiy_lesopark_2025_omaps.gif',
        bounds: [[54.6502623, 39.6562028], [54.6481394, 39.6730256], [54.6436448, 39.6532631]],
        author: 'ANDREYKN',
        owner: 'ANDREYKN',
        type: ['PARK','SPRINT']
    },
    {
        name: 'Пронск, лес Шарки',
        year: 2022,
        url: './maps/ryazan/pronsk_les_sharki_2022.webp',
        link: './original_maps/ryazan/pronsk_les_sharki_2022_omaps.jpg',
        bounds: [[54.155398, 39.5643425], [54.1526083, 39.5882893], [54.136621, 39.5571327]],
        author: 'SHIBANOV_V',
        owner: 'SHIBANOV_V'
    },
    {
        name: 'Траново, ДОЛ Радуга',
        year: 2023,
        correct: 2025,
        url: './maps/ryazan/raduga_2025.webp',
        link: './original_maps/ryazan/raduga_2025_omaps.gif',
        bounds: [[55.2077735, 40.1454163], [55.2003776, 40.2042103], [55.1843565, 40.1358891]],
        author: 'ANDREYKN',
        owner: 'ANDREYKN'
    },
    {
        name: 'Реткино',
        year: 2008,
        correct: 2014,
        url: './maps/ryazan/retkino_2008.webp',
        link: './original_maps/ryazan/retkino_2008_omaps.jpg',
        bounds: [[54.5117025, 39.8052263], [54.5095349, 39.8279071], [54.4921528, 39.8011494]],
        author: 'KORNEEV',
        owner: 'KORNEEV'
    },
    {
        name: 'Рубцово',
        year: 2023,
        correct: 2024,
        url: './maps/ryazan/rubtsovo_2023.webp',
        link: './original_maps/ryazan/rubtsovo_2023_omaps.gif',
        bounds: [[54.603171, 39.9189949], [54.6025371, 39.9375558], [54.5945444, 39.9139309]],
        author: 'ANDREYKN',
        owner: 'ANDREYKN',
        type: ['CITY','SPRINT']
    },
    {
        name: 'л/п Рыбацкая Слобода',
        year: 2024,
        url: './maps/ryazan/rybatskaya_lesopark_2024.webp',
        link: './original_maps/ryazan/rybatskaya_lesopark_2024_omaps.gif',
        bounds: [[54.6454576, 39.7496939], [54.6418567, 39.7753143], [54.6346789, 39.7473764]],
        author: 'VEKOVISCH',
        owner: 'VEKOVISCH',
        type: ['PARK','SPRINT']
    },
    {
        name: 'Рыбное, парк Дубянка',
        year: 2022,
        correct: 2024,
        url: './maps/ryazan/rybnoe_dubyanka_2022.webp',
        link: ['./original_maps/ryazan/rybnoe_dubyanka_2022_omaps.jpg','./original_maps/ryazan/rybnoe_dubyanka_2024_omaps.gif'],
        bounds: [[54.7216336, 39.5048404], [54.7215717, 39.5305681], [54.7041931, 39.5046687]],
        author: 'ANDREYKN',
        owner: 'ANDREYKN',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Рыбное, пл Ленина',
        year: 2024,
        url: './maps/ryazan/rybnoe_pl_lenina_2024.webp',
        link: './original_maps/ryazan/rybnoe_pl_lenina_2024_omaps.jpg',
        bounds: [[54.738856, 39.5035958], [54.7372332, 39.5159125], [54.7288704, 39.4993043]],
        author: 'ANDREYKN',
        owner: 'ANDREYKN',
        type: ['CITY','SPRINT']
    },
    {
        name: 'РязГМУ',
        year: 2022,
        correct: 2024,
        url: './maps/ryazan/ryazgmu_2024.webp',
        link: './original_maps/ryazan/ryazgmu_2024_omaps.jpg',
        bounds: [[54.6264192, 39.7055769], [54.6239223, 39.7223139], [54.6191517, 39.7028089]],
        author: 'ANDREYKN',
        owner: 'ANDREYKN',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Сажнево',
        year: 2022,
        correct: 2024,
        url: './maps/ryazan/sazhnevo_2022.webp',
        link: './original_maps/ryazan/sazhnevo_2022_omaps.gif',
        bounds: [[54.4861453, 39.7292233], [54.4818571, 39.7766018], [54.4478356, 39.7209835]],
        author: ['POSKREB','ZOTOV','TARASOV','ANDREYKN'],
        owner: 'TSDYUTK'
    },
    {
        name: 'Секиотово',
        year: 2003,
        url: './maps/ryazan/sekiotovo_2003.webp',
        link: './original_maps/ryazan/sekiotovo_2003_omaps.jpg',
        bounds: [[54.5841999, 39.6216774], [54.5836527, 39.648757], [54.5642246, 39.6216774]],
        author: 'KORNEEV',
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Сельцы',
        year: 1980,
        url: './maps/ryazan/seltsy_1980.webp',
        link: './original_maps/ryazan/seltsy_1980_omaps.jpg',
        bounds: [[54.951252, 39.4756794], [54.9474565, 39.5386791], [54.9122199, 39.4685125]],
        author: ['POSKREB','KARPOV','IVSHENTSE'],
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Семёно-Оленинское',
        year: 2007,
        correct: 2023,
        url: './maps/ryazan/semeno_oleninskoe_2007.webp',
        link: './original_maps/ryazan/semeno_oleninskoe_2007_omaps.jpg',
        bounds: [[54.5733304, 39.6372557], [54.5724348, 39.6703863], [54.5476748, 39.6302176]],
        author: 'KORNEEV',
        owner: 'KORNEEV'
    },
    {
        name: 'Сквер на Касимовском шоссе',
        year: 2018,
        correct: 2022,
        url: './maps/ryazan/skver_na_kasimovskom_shosse_2018.webp',
        link: './original_maps/ryazan/skver_na_kasimovskom_shosse_2018_omaps.jpg',
        bounds: [[54.6196735, 39.7855282], [54.6195617, 39.7964287], [54.6123178, 39.7855711]],
        author: 'ANDREYKN',
        owner: 'ANDREYKN',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Скопин',
        year: 2008,
        correct: 2016,
        url: './maps/ryazan/skopin_2008.webp',
        link: './original_maps/ryazan/skopin_2008_omaps.gif',
        bounds: [[53.8066193, 39.5497513], [53.8046933, 39.5709944], [53.7976726, 39.5480132]],
        author: ['ZOTOV','SOKOLOV'],
        owner: 'KORNEEV'
    },
    {
        name: 'Скопин, Красный городок',
        year: 2001,
        url: './maps/ryazan/skopin_krasnyy_gorodok_2001.webp',
        link: './original_maps/ryazan/skopin_krasnyy_gorodok_2001_omaps.gif',
        bounds: [[53.7833869, 39.548378], [53.7816753, 39.5656729], [53.7772376, 39.547627]],
        author: 'MOROZOV',
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Славянский проспект',
        year: 2023,
        correct: 2024,
        url: './maps/ryazan/slavyanskiy_prospekt_2023.webp',
        link: './original_maps/ryazan/slavyanskiy_prospekt_2023_omaps.gif',
        bounds: [[54.6058805, 39.7324419], [54.6043642, 39.7431278], [54.6015304, 39.7305965]],
        author: 'VEKOVISCH',
        owner: 'VEKOVISCH',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Слёмы, Вакино-Федякино',
        year: 1985,
        url: './maps/ryazan/slemy_1985.webp',
        link: './original_maps/ryazan/slemy_1985_omaps.jpg',
        bounds: [[54.8812236, 39.4257689], [54.8783597, 39.4621181], [54.8717916, 39.4311333]],
        author: ['ELISEEV','CHERNOV','BELOKUR'],
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Поляны',
        year: 2023,
        correct: 2025,
        url: './maps/ryazan/polyany_2023.webp',
        link: './original_maps/ryazan/polyany_2023_omaps.gif',
        bounds: [[54.76064, 39.8004198], [54.7572722, 39.8450947], [54.7429314, 39.796257]],
        author: ['VEKOVISCH','GUSEV_B','ANDREYKN'],
        owner: ['GUSEV_B','ANDREYKN']
    },
    {
        name: 'Спартак',
        year: 2023,
        correct: 2024,
        url: './maps/ryazan/spartak_2023.webp',
        link: './original_maps/ryazan/spartak_2024_omaps.gif',
        bounds: [[54.6321825, 39.7354889], [54.630394, 39.748621], [54.6213631, 39.7312617]],
        author: 'VEKOVISCH',
        owner: 'VEKOVISCH',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Спас-Клепики',
        year: 2025,
        url: './maps/ryazan/spas_klepiki_rogaine_2025.webp',
        link: './original_maps/ryazan/spas_klepiki_rogaine_2025_omaps.gif',
        bounds: [[55.1837194, 40.1276493], [55.1695055, 40.239315], [55.0937433, 40.0914288]],
        author: 'ANDREYKN',
        owner: 'ANDREYKN',
        type: ['ROGAINE']
    },
    {
        name: 'Спас-Клепики',
        year: 2022,
        correct: 2025,
        url: './maps/ryazan/spas_klepiki_2022.webp',
        link: './original_maps/ryazan/spas_klepiki_2025_omaps.gif',
        bounds: [[55.1385114, 40.1664448], [55.1363772, 40.1806498], [55.1252629, 40.1604795]],
        author: 'ANDREYKN',
        owner: 'ANDREYKN',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Екшур, Боинский лес',
        year: 2025,
        url: './maps/ryazan/ekshur_boinsky_forest_2025.webp',
        link: './original_maps/ryazan/ekshur_boinsky_forest_2025_omaps.gif',
        bounds: [[55.121717, 40.1911426], [55.1194592, 40.20715], [55.11498, 40.1887178]],
        author: 'ANDREYKN',
        owner: 'ANDREYKN',
        type: ['PARK','SPRINT']
    },
    {
        name: 'Спасск',
        year: 2010,
        url: './maps/ryazan/spassk_2010.webp',
        link: './original_maps/ryazan/spassk_2010_omaps.jpg',
        bounds: [[54.4255216, 40.3122282], [54.4206779, 40.355444], [54.4085909, 40.3071213]],
        author: 'KORNEEV',
        owner: 'KORNEEV'
    },
    {
        name: 'Строитель',
        year: 2025,
        url: './maps/ryazan/stroitel_2025.webp',
        link: ['./original_maps/ryazan/stroitel_2025_omaps.gif','./original_maps/ryazan/stroitel_2024_omaps.jpg'],
        bounds: [[54.5382894, 39.777782], [54.5369574, 39.7887683], [54.5289891, 39.7744346]],
        author: 'ANDREYKN',
        owner: 'ANDREYKN',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Тума',
        year: 2018,
        url: './maps/ryazan/tuma_2018.webp',
        link: './original_maps/ryazan/tuma_2018_omaps.gif',
        bounds: [[55.166368, 40.5636263], [55.166515, 40.5856204], [55.1505907, 40.562768]],
        author: ['KORNEEV','TARASOV'],
        owner: 'TSDYUTK'
    },
    {
        name: 'Турлатовский Лес',
        year: 2005,
        url: './maps/ryazan/turlatovskiy_les_2005.webp',
        link: './original_maps/ryazan/turlatovskiy_les_2005_omaps.gif',
        bounds: [[54.5466293, 39.8041749], [54.5450362, 39.8321128], [54.5361731, 39.8011494]],
        author: ['KORNEEV','SOKOLOV','ZOTOV'],
        owner: 'TSDYUTK'
    },
    {
        name: 'Туромша',
        year: 2015,
        url: './maps/ryazan/turomsha_2015.webp',
        link: './original_maps/ryazan/turomsha_2015_omaps.jpg',
        bounds: [[54.227937, 39.578805], [54.2262311, 39.5994043], [54.2184281, 39.5764446]],
        author: ['KORNEEV','SOKOLOV'],
        owner: 'TSDYUTK'
    },
    {
        name: 'Ульевая',
        year: 1971,
        url: './maps/ryazan/ulevaya_1971.webp',
        link: './original_maps/ryazan/ulevaya_1971_omaps.jpg',
        bounds: [[54.9295091, 39.8690414], [54.9241826, 39.9351311], [54.8872717, 39.8596001]],
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Ункосово',
        year: 2006,
        url: './maps/ryazan/unkusovo_2006.webp',
        link: './original_maps/ryazan/unkusovo_2006_omaps.jpg',
        bounds: [[54.2515369, 41.5491343], [54.2499698, 41.5697336], [54.2431368, 41.5466022]],
        author: ['KORNEEV','SOKOLOV'],
        owner: 'TSDYUTK'
    },
    {
        name: 'Федино, Срезневский лес',
        year: 2000,
        url: './maps/ryazan/fedino_sreznevo_2000.webp',
        link: './original_maps/ryazan/fedino_sreznevo_2000_omaps.gif',
        bounds: [[54.776237, 39.3630695], [54.7738112, 39.3889904], [54.7524182, 39.3573189]],
        author: ['VEKOVISCH','KUZNTSV_RZN'],
        owner: 'KUZNTSV_RZN'
    },
    {
        name: 'Фефелов Бор',
        year: 2022,
        correct: 2024,
        url: './maps/ryazan/fefelov_bor_2022.webp',
        link: './original_maps/ryazan/fefelov_bor_2022_omaps.gif',
        bounds: [[54.7177793, 39.6570826], [54.7130197, 39.6818018], [54.7008455, 39.6485424]],
        author: 'ANDREYKN',
        owner: 'ANDREYKN'
    },
    {
        name: 'Хамбушево',
        year: 1980,
        url: './maps/ryazan/hambushevo_1980.webp',
        link: './original_maps/ryazan/hambushevo_1980_omaps.gif',
        bounds: [[54.582832, 39.7718811], [54.5780069, 39.8195171], [54.5575308, 39.7646284]],
        author: 'SOKOLOV',
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'ЦПКиО',
        year: 2024,
        url: './maps/ryazan/tspkio_2024.webp',
        link: './original_maps/ryazan/tspkio_2024_omaps.gif',
        bounds: [[54.6193505, 39.72682], [54.6176359, 39.7419477], [54.6067007, 39.7220993]],
        author: 'VEKOVISCH',
        owner: 'VEKOVISCH',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Цирк',
        year: 2024,
        correct: 2025,
        url: './maps/ryazan/tsirk_2024.webp',
        link: './original_maps/ryazan/tsirk_2024_omaps.gif',
        bounds: [[54.6367281, 39.7454023], [54.6351136, 39.757483], [54.6266924, 39.7416687]],
        author: 'VEKOVISCH',
        owner: 'VEKOVISCH',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Полково',
        date: '2020-09-12',
        start: 'RUSSIA_ROGAINE_CHAMP',
        url: './maps/ryazan/chr_2020_rogeyn_2020.webp',
        link: 'https://rogaining.ru/results/rrc-results/rrc2020_map.jpg',
        info: '<a href="https://vk.com/event186840276">Чемпионат России по рогейну</a> (<a href="https://sembruk.github.io/rrc2020/">пути</a>).',
        o_gps: 8154,
        bounds: [[54.862728, 39.8858643], [54.8350058, 40.0759792], [54.7072677, 39.8194313]],
        author: 'VEKOVISCH',
        owner: 'VEKOVISCH',
        type: ['ROGAINE'],
        region: 'RYAZAN'
    },
    {
        name: 'Чернава',
        year: 1973,
        url: './maps/ryazan/chernava_1973.webp',
        link: './original_maps/ryazan/chernava_1973_omaps.jpg',
        bounds: [[53.8291803, 40.168848], [53.8351067, 40.234251], [53.7972037, 40.1657581]],
        author: ['CHERNOV','KONEV','ROZENFE'],
        owner: 'FSO_RYAZAN'
    },
    {
        name: 'Шача',
        year: 2006,
        url: './maps/ryazan/shacha_2006.webp',
        link: './original_maps/ryazan/shacha_2006_omaps.gif',
        bounds: [[53.9867676, 41.7449355], [53.985998, 41.7729807], [53.9761305, 41.7418671]],
        author: ['SOKOLOV','ZOTOV'],
        owner: 'TSDYUTK'
    },
    {
        name: 'Шевцово',
        year: 2022,
        correct: 2023,
        url: './maps/ryazan/shevtsovo_2023.webp',
        link: './original_maps/ryazan/shevtsovo_2023_omaps.gif',
        bounds: [[54.3712836, 39.8613596], [54.367071, 39.8946834], [54.3581443, 39.8570251]],
        author: ['SHIBANOV_A','SHIBANOV_V'],
        owner: 'SHIBANOV_V'
    },
    {
        name: 'Школа №19, Школа №37',
        year: 2023,
        url: './maps/ryazan/shk_19_shk_37_2023.webp',
        link: './original_maps/ryazan/shk_19_shk_37_2023_omaps.gif',
        bounds: [[54.6084903, 39.7124434], [54.6064025, 39.7295022], [54.6015179, 39.7095037]],
        author: 'ANDREYKN',
        owner: 'ANDREYKN',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Школа №64',
        year: 2023,
        url: './maps/ryazan/shk_64_2023.webp',
        link: './original_maps/ryazan/shk_64_2023_omaps.gif',
        bounds: [[54.6031337, 39.7129369], [54.6023383, 39.7219062], [54.5973414, 39.7114134]],
        author: 'ANDREYKN',
        owner: 'ANDREYKN',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Подвязье',
        year: 2025,
        url: './maps/ryazan/podviazie_2025.webp',
        link: './original_maps/ryazan/podviazie_2025_omaps.gif',
        bounds: [[54.5878804, 39.5447195], [54.585978, 39.5604587], [54.5810351, 39.5421338]],
        author: 'ANDREYKN',
        owner: 'ANDREYKN',
        type: ['CITY','SPRINT']
    },
    {
        name: 'Экопарк Поляны',
        year: 2022,
        correct: 2024,
        url: './maps/ryazan/ekopark_polyany_2022.webp',
        link: './original_maps/ryazan/ekopark_polyany_2024_omaps.gif',
        bounds: [[54.7527154, 39.866724], [54.7469691, 39.9104548], [54.7170108, 39.8527765]],
        author: ['VEKOVISCH','ANDREYKN'],
        owner: 'ANDREYKN',
        type: ['PARK']
    },

    /*   Ночная ПРАГулка   */

    {
        name: 'р Пра, Бельское',
        date: '2016-07-16',
        url: './maps/ryazan/npw_2016.webp',
        link: './original_maps/ryazan/npw_2016_omaps.gif',
        bounds: [[54.7894525, 40.4053974], [54.7717813, 40.5853844], [54.7086066, 40.381794]],
        author: ['VNKRV_V','GUSEV_B','KRTNKO'],
        start: 'NPW',
        type: ['ROGAINE']
    },
    {
        name: 'р Пра, Деулино',
        date: '2017-07-15',
        url: './maps/ryazan/npw_2017.webp',
        link: './original_maps/ryazan/npw_2017_omaps.gif',
        bounds: [[54.9284735, 40.272274], [54.91777, 40.40205], [54.8225468, 40.2447224]],
        author: ['VNKRV_V','GUSEV_B','KRTNKO','SHIBANOV_A','SHIBANOV_V'],
        start: 'NPW',
        type: ['ROGAINE']
    },
    {
        name: 'р Пра, Фомино',
        date: '2018-07-14',
        url: './maps/ryazan/npw_2018.webp',
        link: './original_maps/ryazan/npw_2018_omaps.gif',
        bounds: [[55.2173837, 39.9775529], [55.1997898, 40.1306534], [55.1079842, 39.9380493]],
        author: ['VNKRV_V','GUSEV_B','KRTNKO'],
        start: 'NPW',
        type: ['ROGAINE']
    },
    {
        name: 'р Пра, Гришино',
        date: '2019-07-13',
        url: './maps/ryazan/npw_2019.webp',
        link: './original_maps/ryazan/npw_2019_omaps.gif',
        bounds: [[55.0725198, 40.2049828], [55.058807, 40.3614521], [54.9655929, 40.177002]],
        author: ['VNKRV_V','GUSEV_B','KRTNKO'],
        start: 'NPW',
        type: ['ROGAINE']
    },
    {
        name: 'р Пра, Киструсская старица',
        date: '2021-07-17',
        url: './maps/ryazan/npw_2021.webp',
        link: './original_maps/ryazan/npw_2021_omaps.gif',
        bounds: [[54.442695, 40.5381775], [54.3879549, 40.942955], [54.3199276, 40.4959488]],
        author: ['KRTNKO','VNKRV_V','GUSEV_B'],
        start: 'NPW',
        type: ['ROGAINE']
    },
    {
        name: 'р Пра, Клепиковские оз',
        date: '2023-07-01',
        url: './maps/ryazan/npw_2023.webp',
        link: './original_maps/ryazan/npw_2023_omaps.gif',
        bounds: [[55.278382, 39.9824238], [55.2598245, 40.141468], [55.1549432, 39.9392509]],
        author: ['VNKRV_V','GUSEV_B','KRTNKO','NVKV_S'],
        start: 'NPW',
        type: ['ROGAINE']
    },
    {
        name: 'р Пра, Деулино',
        date: '2025-07-12',
        url: './maps/ryazan/npw_2025.webp',
        link: './original_maps/ryazan/npw_2025_omaps.gif',
        bounds: [[54.8432602, 40.3240299], [54.816761, 40.4978371], [54.7634627, 40.295105]],
        o_gps: 23106,
        author: ['VNKRV_V','GUSEV_B','KRTNKO','NVKV_S'],
        start: 'NPW',
        type: ['ROGAINE']
    },
    {
        name: 'р Пра, Деулино',
        date: '2026-07-11',
        url: './maps/ryazan/npw_2026.webp',
        link: ['./original_maps/ryazan/npw_2026_forward_omaps.webp','./original_maps/ryazan/npw_2026_revers_omaps.webp'],
        bounds: [[54.8377739, 40.3333855], [54.8157224, 40.5086517], [54.7562817, 40.3016281]],
        // author: ['VNKRV_V','GUSEV_B','KRTNKO','NVKV_S'],
        start: 'NPW',
        type: ['ROGAINE']
    }
];
