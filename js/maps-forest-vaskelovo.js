// types can be ORIENT, ROGAINE, SPRINT, CITY, RELIEF
let vaskelovoMaps = [
    // --- ВАСКЕЛОВО - ГРУЗИНО - ЛЕМБОЛОВО - ОРЕХОВО ---
    {
        name: 'Лемболово, ю-з',
        year: 1991,
        url: './maps/forest/vaskelovo/lembolovo_south_west_1991.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_south_west_1991_full.jpg',
        bounds: [[60.42791858057857, 30.266990661621097], [60.42228434534471, 30.342006683349613], [60.399610452340696, 30.2589225769043]],
        types: ['ORIENT'],
    },
    {
        name: 'Лемболово, с-в',
        year: 1991,
        url: './maps/forest/vaskelovo/lembolovo_north_east_1991.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_north_east_1991_full.jpg',
        bounds: [[60.44701687789359, 30.30509948730469], [60.44121658634549, 30.379428863525394], [60.42075912129117, 30.296773910522464]],
        types: ['ORIENT'],
    },
    {
        name: 'Лемболово-Орехово',
        year: 1995,
        url: './maps/forest/vaskelovo/lembolovo_orekhovo_1995.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_orekhovo_1995_full.jpg',
        bounds: [[60.4479482150824, 30.235576629638675], [60.4409201932774, 30.3398609161377], [60.4233434866285, 30.22845268249512]],
        author: ['DBRTSV_V','KZNTSV_V','CHGRVSKY_Y'],
        types: ['ORIENT'],
    },
    {
        name: 'оз Силанде',
        year: 1992,
        url: './maps/forest/vaskelovo/silande_1992.webp',
        link: './original_maps/forest/vaskelovo/Geolog92.pdf',
        bounds: [[60.42787622155024, 30.223689079284668], [60.4233434866285, 30.286216735839847], [60.37887226479014, 30.210857391357425]],
        types: ['ORIENT'],
    },
    {
        name: 'Лемболовское',
        year: 1991,
        url: './maps/forest/vaskelovo/lembolovsky_1991.webp',
        link: './original_maps/forest/vaskelovo/lembolovsky_1991_full.jpg',
        bounds: [[60.378490456569175, 30.22699356079102], [60.37535097486695, 30.292739868164066], [60.3178110096362, 30.210342407226562]],
        author: 'BYMKV',
        types: ['ORIENT'],
    },
    {
        name: 'Вьюн',
        year: 1984,
        url: './maps/forest/vaskelovo/vjun_1984.webp',
        link: './original_maps/forest/vaskelovo/vjun_1984_full.jpg',
        bounds: [[60.38671955355991, 30.27445793151856], [60.38400502971434, 30.30814647674561], [60.36898623239414, 30.271282196044925]],
        types: ['ORIENT'],
    },
    {
        name: 'Васкелово, Банное оз',
        year: 1995,
        url: './maps/forest/vaskelovo/vaskelovo_bannoe_oz.webp',
        link: './original_maps/forest/vaskelovo/vaskelovo_bannoe_oz_full.jpg',
        bounds: [[60.40380737364446, 30.423889160156254], [60.400076803656404, 30.47916412353516], [60.364487731332744, 30.413331985473636]],
        author: 'CHGRVSKY_V',
        types: ['ORIENT'],
    },
    {
        name: 'Коросары',
        year: 1993,
        url: './maps/forest/vaskelovo/korosary_1993.webp',
        link: './original_maps/forest/vaskelovo/korosary_1993_full.jpg',
        bounds: [[60.42711374960327, 30.4167652130127], [60.41792031939828, 30.487232208251957], [60.40130624327883, 30.402431488037113]],
        author: 'DBRTSV_V',
        types: ['ORIENT'],
    },
    {
        name: 'Гарболово',
        year: 1991,
        url: './maps/forest/vaskelovo/garbolovo_1991.webp',
        link: './original_maps/forest/vaskelovo/garbolovo_1991_full.jpg',
        bounds: [[60.36440284798612, 30.50259590148926], [60.36198357968282, 30.556669235229496], [60.33718634477972, 30.49736022949219]],
        author: 'VSLVSKY',
        types: ['ORIENT'],
    },
    {
        name: 'Гарболово',
        year: 1994,
        url: './maps/forest/vaskelovo/garbolovo_1994.webp',
        link: './original_maps/forest/vaskelovo/garbolovo_1994_full.jpg',
        bounds: [[60.38900975707087, 30.44723510742188], [60.38417469408329, 30.515556335449222], [60.34470393627307, 30.43418884277344]],
        author: 'CHGRVSKY_Y',
        types: ['ORIENT'],
    },
    {
        name: 'Гарболово, оз Сиркиярви',
        year: 2022,
        url: './maps/forest/vaskelovo/garbolovo_sirkijarvi_2022.webp',
        bounds: [[60.40639308599703, 30.446891784667972], [60.40368020216247, 30.48139572143555], [60.38379294801027, 30.440368652343754]],
        author: 'CHGRVSKY_V',
        owner: 'SFSO_SPB',
        types: ['ORIENT'],
    },
    {
        name: 'Гарболово, оз Сиркиярви',
        year: 2016,
        url: './maps/forest/vaskelovo/garbolovo_2016.webp',
        bounds: [[60.37399326745597, 30.473756790161136], [60.370238063287275, 30.513024330139164], [60.347676517105526, 30.46388626098633]],
        author: ['KVZN','NSNV','TKMKV_K'],
        types: ['ORIENT'],
    },
    {
        name: 'Матокса',
        year: 2021,
        url: './maps/forest/vaskelovo/garbolovo_sirkkajarvi.webp',
        bounds: [[60.35374823320506, 30.551433563232425], [60.35043652818912, 30.583963394165043], [60.321423512137386, 30.541133880615238]],
        author: 'MKHLV_A',
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Гарболово, Змеиное оз',
        url: './maps/forest/vaskelovo/garbolovo_zmeinoe_2014.webp',
        bounds: [[60.34459776766185, 30.50036430358887], [60.34098782928523, 30.5390739440918], [60.33213117104195, 30.495214462280277]],
        author: 'MLNKV_L',
        owner: ['SHEIN','SCHLKHN_AN'],
        types: ['ORIENT'],
    },
    {
        name: 'Стеклянный',
        year: 1982,
        url: './maps/forest/vaskelovo/stekljanny_1982.webp',
        link: './original_maps/forest/vaskelovo/stekljanny_1982_full.jpg',
        bounds: [[60.37955102391165, 30.228838920593265], [60.37628436589373, 30.284028053283695], [60.35047898807388, 30.22150039672852]],
        types: ['ORIENT'],
    },
    {
        name: 'Стеклянный',
        year: 2024,
        url: './maps/forest/vaskelovo/stekljanny_2024.webp',
        bounds: [[60.375966167411484, 30.230083465576175], [60.37272036537475, 30.27390003204346], [60.35519169168648, 30.223174095153812]],
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Орехово-запад',
        url: './maps/forest/vaskelovo/orekhovo_west.webp',
        bounds: [[60.47627773171624, 30.23849487304688], [60.475051125139565, 30.26269912719727], [60.46034938752854, 30.233774185180668]],
        types: ['ORIENT'],
    },
    {
        name: 'Орехово-запад',
        year: 2011,
        url: './maps/forest/vaskelovo/orekhovo_west_2011.webp',
        bounds: [[60.47733511396385, 30.23797988891602], [60.47570673097479, 30.26265621185303], [60.460730235956845, 30.233860015869144]],
        author: 'SHRNN',
        owner: 'SHRNN',
        types: ['ORIENT'],
    },
    {
        name: 'Лемболово-Орехово',
        year: 2023,
        url: './maps/forest/vaskelovo/lembolovo_orekhovo_2023.webp',
        bounds: [[60.49050720754783, 30.263643264770508], [60.482684939856334, 30.385179519653324], [60.38871288792411, 30.23471832275391]],
        owner: 'TOKM',
        types: ['ORIENT'],
    },
    {
        name: 'оз Силанде',
        year: 2024,
        url: './maps/forest/vaskelovo/silande_2024.webp',
        bounds: [[60.416013522306024, 30.259008407592777], [60.41427612096631, 30.286216735839847], [60.3923599498166, 30.249824523925785]],
        owner: 'SFSO_SPB',
        types: ['ORIENT'],
    },
    {
        name: 'Орехово, юг',
        year: 2021,
        url: './maps/forest/vaskelovo/orekhovo_south_2021.webp',
        bounds: [[60.451207684981554, 30.22544860839844], [60.445238796388175, 30.297288894653324], [60.42563111407299, 30.21720886230469]],
        author: 'CHGRVSKY_V',
        owner: 'CHGRVSKY_V',
        types: ['ORIENT'],
    },
    {
        name: 'Орехово',
        year: 1991,
        url: './maps/forest/vaskelovo/orekhovo_1991.webp',
        link: './original_maps/forest/vaskelovo/orekhovo_1991_full.jpg',
        bounds: [[60.47739855580294, 30.23875236511231], [60.47380332259927, 30.28535842895508], [60.44604317864724, 30.230598449707035]],
        author: 'BYMKV',
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Орехово, Ракитинское оз',
        year: 1997,
        url: './maps/forest/vaskelovo/orekhovo_rakitinskoe_1997.webp',
        link: './original_maps/forest/vaskelovo/orekhovo_rakitinskoe_1997_full.jpg',
        bounds: [[60.46868471522234, 30.329475402832035], [60.46597702620726, 30.38423538208008], [60.443545294953346, 30.323724746704105]],
        author: ['BYMKV','KZNTSV_S'],
        types: ['ORIENT'],
    },
    {
        name: 'Орехово, р.Смородинка',
        year: 1999,
        url: './maps/forest/vaskelovo/orekhovo_smorodinka_1999.webp',
        link: './original_maps/forest/vaskelovo/orekhovo_smorodinka_1999_full.jpg',
        bounds: [[60.472026707381744, 30.183219909667972], [60.467161667943785, 30.251798629760746], [60.44701687789359, 30.177211761474613]],
        author: ['KRCHKN_V','PLMNN','GLTV_V','GLTV_Y'],
        types: ['ORIENT'],
    },
    {
        name: 'Орехово, оз Ветренное',
        year: 2022,
        url: './maps/forest/vaskelovo/orekhovo_vetrennoe_2022.webp',
        bounds: [[60.506948957921466, 30.276346206665043], [60.49739769638699, 30.365867614746097], [60.48162773195609, 30.26570320129395]],
        author: ['STLRV','DBRTSV_V','KZNTSV_A'],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Пески, оз Пулконлампи',
        year: 2001,
        url: './maps/forest/vaskelovo/peski_pulkonlampi_2001.webp',
        link: './original_maps/forest/vaskelovo/peski_pulkonlampi_2001_full.jpg',
        info: 'Мемориал Михаила Святкина, 2001',
        bounds: [[60.486406037584224, 30.397667884826664], [60.484989533656474, 30.419039726257328], [60.47170944442941, 30.39380550384522]],
        author: ['SHRNN','KVZN','NSNV','TKMKV_K','VRBY'],
        types: ['ORIENT'],
    },
    {
        name: 'Пески, Забытое оз',
        year: 2001,
        url: './maps/forest/vaskelovo/peski_zabytoe_2001.webp',
        link: './original_maps/forest/vaskelovo/peski_zabytoe_2001_full.jpg',
        info: 'Мемориал Михаила Святкина, 2001',
        bounds: [[60.48579293153697, 30.409598350524906], [60.4841649730346, 30.437364578247074], [60.46202085574234, 30.40427684783936]],
        author: ['SHRNN','KVZN','NSNV','TKMKV_K','VRBY'],
        types: ['ORIENT'],
    },
    {
        name: 'Пески, оз Стайка',
        year: 2001,
        url: './maps/forest/vaskelovo/peski_stayka_2001.webp',
        link: './original_maps/forest/vaskelovo/peski_stayka_2001_full.jpg',
        info: 'Мемориал Михаила Святкина, 2001',
        bounds: [[60.477250524652106, 30.40663719177246], [60.473782172990134, 30.458736419677738], [60.4592914517881, 30.402088165283207]],
        author: ['SHRNN','KVZN','NSNV','TKMKV_K','VRBY'],
        types: ['ORIENT'],
    },
    {
        name: 'СНТ "Топограф"',
        year: 2017,
        url: './maps/forest/vaskelovo/topograph_2017.webp',
        bounds: [[60.300210283213666, 30.248794555664066], [60.297424758342665, 30.282311439514164], [60.286301556253335, 30.24373054504395]],
        author: ['MKHLV_A','IVNV_P'],
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Лемболово',
        year: 2024,
        url: './maps/forest/vaskelovo/lembolovo_2024.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_2024_full.jpg',
        bounds: [[60.445492813989986, 30.259523391723636], [60.43689744859958, 30.369987487792972], [60.38858565746125, 30.23995399475098]],
        owner: 'RDNV_I',
        types: ['ORIENT'],
    },
    {
        name: 'Лемболово',
        year: 1987,
        url: './maps/forest/vaskelovo/lembolovo_1987.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_1987_full.jpg',
        bounds: [[60.42139464000694, 30.33359527587891], [60.41844996541937, 30.37217617034912], [60.40340466224666, 30.32938957214356]],
        author: ['FDTV_A','KNSTNTNV_D'],
        types: ['ORIENT'],
    },
    {
        name: 'Орехово',
        year: 2024,
        url: './maps/forest/vaskelovo/orekhovo_2024.webp',
        link: './original_maps/forest/vaskelovo/orekhovo_2024_full.jpg',
        bounds: [[60.49139502141355, 30.270080566406254], [60.4788788301667, 30.390758514404297], [60.443714649069115, 30.24973869323731]],
        owner: 'RDNV_I',
        types: ['ORIENT'],
    },
];