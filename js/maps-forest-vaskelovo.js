// types can be ROGAINE, SPRINT, CITY, RELIEF
let vaskelovoMaps = [
    // --- ВАСКЕЛОВО - ГРУЗИНО - ЛЕМБОЛОВО - ОРЕХОВО ---
    {
        name: 'Орехово',
        year: 1966,
        start: 'MEET_1966',
        url: './maps/forest/vaskelovo/orekhovo_1966.webp',
        link: ['./original_maps/forest/meet_1966_title.jpg','./original_maps/forest/meet_1966_agenda.jpg','./original_maps/forest/vaskelovo/orekhovo_1966_full.jpg'],
        info: '13.03, маркир-эстафета.',
        bounds: [[60.4456198220461, 30.166482925415043], [60.44574682960571, 30.2464771270752], [60.41351333008904, 30.169658660888675]],
        types: [],
    },
    {
        name: 'Лемболово, ю-з',
        year: 1991,
        url: './maps/forest/vaskelovo/lembolovo_south_west_1991.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_south_west_1991_full.jpg',
        bounds: [[60.42791858057857, 30.266990661621097], [60.42228434534471, 30.342006683349613], [60.399610452340696, 30.2589225769043]],
        author: 'BYMKV',
        types: [],
    },
    {
        name: 'Лемболово, с-в',
        year: 1989,
        url: './maps/forest/vaskelovo/lembolovo_north_east_1989.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_north_east_1989_full.jpg',
        bounds: [[60.44701687789359, 30.30509948730469], [60.44121658634549, 30.379428863525394], [60.42075912129117, 30.296773910522464]],
        author: ['BYMKV','SMRNV_A','KCHTV','IVNV_A','TLNV_A','OSTPNK','EGRV_E'],
        types: [],
    },
    {
        name: 'Лемболово',
        year: 1989,
        url: './maps/forest/vaskelovo/lembolovo_1989.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_1989_full.jpg',
        bounds: [[60.4409201932774, 30.28518676757813], [60.43704566381769, 30.339174270629886], [60.414488004146826, 30.277075767517093]],
        author: 'BYMKV',
        types: [],
    },
    {
        name: 'Орехово (Фигурное оз)',
        year: 1981,
        url: './maps/forest/vaskelovo/orekhovo_figurnoe_1981.webp',
        link: './original_maps/forest/vaskelovo/orekhovo_figurnoe_1981_full.jpg',
        bounds: [[60.45903754208121, 30.264501571655277], [60.46927699208639, 30.28964996337891], [60.43986162453595, 30.294027328491214]],
        types: [],
    },
    {
        name: 'Лемболово-Орехово',
        info: 'Карта лыжного марафона-Ретро, проводимого <a href="https://o-site.spb.ru/history/Peoples/bap.html" target="_blank">Борисом Панкратьевым</a>.',
        icon: 'nevsky_azimut.jpg',
        year: 1991,
        excluded: true,
        area: 28,
        url: './maps/forest/vaskelovo/lembolovo_orekhovo_east_1991.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_orekhovo_east_1991_full.jpg',
        bounds: [[60.498581191274454, 30.26767730712891], [60.489619369375575, 30.39178848266602], [60.42410604699255, 30.2479362487793]],
        author: 'BYMKV',
        types: [],
    },
    {
        name: 'Лемболово-Орехово',
        year: 1995,
        url: './maps/forest/vaskelovo/lembolovo_orekhovo_1995.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_orekhovo_1995_full.jpg',
        bounds: [[60.4479482150824, 30.235576629638675], [60.4409201932774, 30.3398609161377], [60.4233434866285, 30.22845268249512]],
        author: ['DBRTSV_V','KUZNTSV_V','CHGRVSKY_Y'],
        types: [],
    },
    {
        name: 'Орехово-Лемболово',
        year: 1991,
        url: './maps/forest/vaskelovo/lembolovo_orekhovo_1991.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_orekhovo_1991_full.jpg',
        bounds: [[60.45539795142459, 30.237550735473636], [60.450615078418, 30.296087265014652], [60.426181815162266, 30.229568481445316]],
        author: 'BYMKV',
        types: [],
    },
    {
        name: 'оз Силанде',
        year: 1992,
        url: './maps/forest/vaskelovo/silande_1992.webp',
        //link: './original_maps/forest/vaskelovo/Geolog92.pdf',
        link: './original_maps/forest/vaskelovo/silande_1992_full.jpg',
        bounds: [[60.42787622155024, 30.223689079284668], [60.4233434866285, 30.286216735839847], [60.37887226479014, 30.210857391357425]],
        author: 'KUZNTSV_V',
        types: [],
    },
    {
        name: 'Лемболовское',
        year: 1991,
        icon: 'nevsky_azimut.jpg',
        url: './maps/forest/vaskelovo/lembolovsky_1991.webp',
        link: './original_maps/forest/vaskelovo/lembolovsky_1991_full.jpg',
        bounds: [[60.378490456569175, 30.22699356079102], [60.37535097486695, 30.292739868164066], [60.3178110096362, 30.210342407226562]],
        author: 'BYMKV',
        types: [],
    },
    {
        name: 'Вьюн',
        year: 1984,
        url: './maps/forest/vaskelovo/vjun_1984.webp',
        link: './original_maps/forest/vaskelovo/vjun_1984_full.jpg',
        bounds: [[60.38671955355991, 30.27445793151856], [60.38400502971434, 30.30814647674561], [60.36898623239414, 30.271282196044925]],
        author: ['LVCHV','SVTKN'],
        types: [],
    },
    {
        name: 'Васкелово, Банное оз',
        year: 1995,
        area: 7.5,
        url: './maps/forest/vaskelovo/vaskelovo_bannoe_oz.webp',
        link: './original_maps/forest/vaskelovo/vaskelovo_bannoe_oz_full.jpg',
        bounds: [[60.40380737364446, 30.423889160156254], [60.400076803656404, 30.47916412353516], [60.364487731332744, 30.413331985473636]],
        author: 'CHGRVSKY_V',
        types: [],
    },
    {
        name: 'Коросары',
        year: 1993,
        url: './maps/forest/vaskelovo/korosary_1993.webp',
        link: './original_maps/forest/vaskelovo/korosary_1993_full.jpg',
        bounds: [[60.42711374960327, 30.4167652130127], [60.41792031939828, 30.487232208251957], [60.40130624327883, 30.402431488037113]],
        author: 'DBRTSV_V',
        types: [],
    },
    {
        name: 'Гарболово',
        year: 1991,
        icon: 'azimut.jpg',
        url: './maps/forest/vaskelovo/garbolovo_1991.webp',
        link: './original_maps/forest/vaskelovo/garbolovo_1991_full.jpg',
        bounds: [[60.36440284798612, 30.50259590148926], [60.36198357968282, 30.556669235229496], [60.33718634477972, 30.49736022949219]],
        author: 'VSLVSKY',
        types: [],
    },
    {
        name: 'Гарболово',
        year: 1994,
        url: './maps/forest/vaskelovo/garbolovo_1994.webp',
        link: './original_maps/forest/vaskelovo/garbolovo_1994_full.jpg',
        bounds: [[60.38900975707087, 30.44723510742188], [60.38417469408329, 30.515556335449222], [60.34470393627307, 30.43418884277344]],
        author: 'CHGRVSKY_Y',
        types: [],
    },
    {
        name: 'Гарболово, Вуолы',
        year: 2022,
        info: 'Свадебные кольца.',
        url: './maps/forest/vaskelovo/garbolovo_vuoly_2022.webp',
        link: './original_maps/forest/vaskelovo/garbolovo_vuoly_2022.jpg',
        bounds: [[60.35867271103374, 30.50233840942383], [60.35725063217634, 30.52813053131104], [60.34143378447364, 30.49959182739258]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        types: [],
    },
    {
        name: 'Гарболово, оз Сиркиярви',
        year: 2022,
        url: './maps/forest/vaskelovo/garbolovo_sirkijarvi_2022.webp',
        link: './original_maps/forest/vaskelovo/garbolovo_sirkijarvi_2022_full.gif',
        bounds: [[60.40639308599703, 30.446891784667972], [60.40368020216247, 30.48139572143555], [60.38379294801027, 30.440368652343754]],
        author: 'CHGRVSKY_V',
        owner: 'SFSO_SPB',
        types: [],
    },
    {
        name: 'Гарболово, оз Сиркиярви',
        year: 2016,
        url: './maps/forest/vaskelovo/garbolovo_2016.webp',
        bounds: [[60.37399326745597, 30.473756790161136], [60.370238063287275, 30.513024330139164], [60.347676517105526, 30.46388626098633]],
        author: ['KVZN','NSNV','TKMKV_K'],
        types: [],
    },
    {
        name: 'Матокса',
        year: 2021,
        url: './maps/forest/vaskelovo/garbolovo_sirkkajarvi.webp',
        bounds: [[60.35374823320506, 30.551433563232425], [60.35043652818912, 30.583963394165043], [60.321423512137386, 30.541133880615238]],
        author: 'MKHLV_A',
        owner: 'WN',
        types: [],
    },
    {
        name: 'Гарболово, Змеиное оз',
        year: 2022,
        url: './maps/forest/vaskelovo/garbolovo_zmeinoe_2022.webp',
        bounds: [[60.344895038902564, 30.496544837951664], [60.341178953683816, 30.537743568420414], [60.33083539119732, 30.492510795593265]],
        author: ['MLNKV_L','RYLOV_V'],
        owner: ['SHLKHN_AN','SHEIN'],
        types: [],
    },
    {
        name: 'Стеклянный',
        year: 1982,
        url: './maps/forest/vaskelovo/stekljanny_1982.webp',
        link: './original_maps/forest/vaskelovo/stekljanny_1982_full.jpg',
        bounds: [[60.37955102391165, 30.228838920593265], [60.37628436589373, 30.284028053283695], [60.35047898807388, 30.22150039672852]],
        author: ['BYMKV','SMRNV_A','RMNTSV_S','GRV_K'],
        types: [],
    },
    {
        name: 'Стеклянный',
        year: 1995,
        url: './maps/forest/vaskelovo/stekljanny_1996.webp',
        link: './original_maps/forest/vaskelovo/stekljanny_1996_full.jpg',
        bounds: [[60.37645407048021, 30.229568481445316], [60.3710230852461, 30.28836250305176], [60.35171030068646, 30.218925476074222]],
        author: 'SCHV',
        types: [],
    },
    {
        name: 'Стеклянный',
        year: 2021,
        info: '2018-2021гг.',
        url: './maps/forest/vaskelovo/stekljanny_2021.webp',
        bounds: [[60.37779046320838, 30.23046970367432], [60.37297494976914, 30.287847518920902], [60.350415298226004, 30.221114158630375]],
        author: 'MKHLV_A',
        owner: 'WN',
        types: [],
    },
    {
        name: 'Стеклянный',
        year: 2014,
        url: './maps/forest/vaskelovo/stekljanny_2014.webp',
        bounds: [[60.3755631115393, 30.23317337036133], [60.37337803765897, 30.25467395782471], [60.360052280500405, 30.225834846496586]],
        author: 'MLNKV_L',
        types: [],
    },
    {
        name: 'Орехово-запад',
        year: 2013,
        url: './maps/forest/vaskelovo/orekhovo_west_2011.webp',
        link: './original_maps/forest/vaskelovo/orekhovo_west_2011_full.jpg',
        bounds: [[60.47733511396385, 30.23797988891602], [60.47570673097479, 30.26265621185303], [60.460730235956845, 30.233860015869144]],
        author: 'SHRNN',
        owner: 'SHRNN',
        types: [],
    },
    {
        name: 'Лемболово-Орехово',
        year: 2023,
        excluded: true, // т.к. есть отчасти дублирующие карты от Родионова
        area: 42,
        url: './maps/forest/vaskelovo/lembolovo_orekhovo_2023.webp',
        bounds: [[60.49050720754783, 30.263643264770508], [60.482684939856334, 30.385179519653324], [60.38871288792411, 30.23471832275391]],
        author: ['TKMKV_K','KVZN','NSNV','MLNKV_L','VRBY'],
        owner: 'TOKM',
        types: [],
    },
    {
        name: 'оз Силанде',
        year: 2024,
        url: './maps/forest/vaskelovo/silande_2024.webp',
        link: './original_maps/forest/vaskelovo/silande_2024_full.jpg',
        bounds: [[60.416013522306024, 30.259008407592777], [60.41427612096631, 30.286216735839847], [60.3923599498166, 30.249824523925785]],
        author: 'CHGRVSKY_V',
        owner: 'SFSO_SPB',
        types: [],
    },
    {
        name: 'Орехово, юг',
        year: 2021,
        url: './maps/forest/vaskelovo/orekhovo_south_2021.webp',
        bounds: [[60.451207684981554, 30.22544860839844], [60.445238796388175, 30.297288894653324], [60.42563111407299, 30.21720886230469]],
        author: 'CHGRVSKY_V',
        owner: 'CHGRVSKY_V',
        types: [],
    },
    {
        name: 'Орехово',
        year: 1991,
        url: './maps/forest/vaskelovo/orekhovo_1991.webp',
        link: './original_maps/forest/vaskelovo/orekhovo_1991_full.jpg',
        bounds: [[60.47739855580294, 30.23875236511231], [60.47380332259927, 30.28535842895508], [60.44604317864724, 30.230598449707035]],
        author: 'BYMKV',
        owner: 'WN',
        types: [],
    },
    {
        name: 'Орехово, Ракитинское оз',
        year: 1995,
        url: './maps/forest/vaskelovo/orekhovo_rakitinskoe_1995.webp',
        link: './original_maps/forest/vaskelovo/orekhovo_rakitinskoe_1995.pdf',
        bounds: [[60.47086339472666, 30.299048423767093], [60.465596239324626, 30.384879112243656], [60.44186229045466, 30.290164947509766]],
        author: ['BYMKV','KUZNTSV_S'],
        types: [],
    },
    {
        name: 'Орехово, р.Смородинка',
        year: 1999,
        url: './maps/forest/vaskelovo/orekhovo_smorodinka_1999.webp',
        link: './original_maps/forest/vaskelovo/orekhovo_smorodinka_1999_full.jpg',
        bounds: [[60.472026707381744, 30.183219909667972], [60.467161667943785, 30.251798629760746], [60.44701687789359, 30.177211761474613]],
        author: ['KRCHKN_V','PLMNN','GLTV_V','GLTV_Y'],
        types: [],
    },
    {
        name: 'Кириясалы, "Школьное лесничество"',
        year: 2020,
        url: './maps/forest/vaskelovo/kirijasaly_2020.webp',
        bounds: [[60.46616741797357, 30.157513618469242], [60.463840330912824, 30.185708999633793], [60.458677833264304, 30.154445171356205]],
        author: 'DRBSHV',
        owner: 'KP31',
        types: [],
    },
    {
        name: 'Орехово, т/б "Журавушка"',
        year: 2009,
        url: './maps/forest/vaskelovo/orekhovo_zhuravushka_2009.webp',
        bounds: [[60.486469461686276, 30.296044349670414], [60.484524399472456, 30.319476127624515], [60.45960883612959, 30.28690338134766]],
        author: ['MKHLV_A','SLBDNK'],
        types: [],
    },
/*
    {
        name: 'Орехово, оз Ветренное',
        year: 2002,
        url: './maps/forest/vaskelovo/orekhovo_vetrennoe_2002.webp',
        bounds: [[60.50449801766844, 30.28887748718262], [60.49921518862048, 30.354194641113285], [60.47249202076819, 30.27917861938477]],
        author: 'SHRNN',
        owner: 'SHRNN',
        types: [],
    },
*/
    {
        name: 'Орехово, оз Ветренное',
        year: 2004,
        url: './maps/forest/vaskelovo/orekhovo_vetrennoe_2004.webp',
        link: './original_maps/forest/vaskelovo/orekhovo_vetrennoe_2004_full.jpg',
        bounds: [[60.504476888067344, 30.289220809936527], [60.49853892434387, 30.352993011474613], [60.47278812581316, 30.27862071990967]],
        author: ['VSLVSKY','DRBSHV','SHRNN'],
        types: [],
    },
    {
        name: 'Орехово, оз Бол.Борково',
        year: 2004,
        url: './maps/forest/vaskelovo/orekhovo_borkovo_2004.webp',
        link: './original_maps/forest/vaskelovo/orekhovo_borkovo_2004_full.jpg',
        bounds: [[60.490295819711505, 30.285100936889652], [60.48761107431526, 30.321664810180668], [60.46318448533745, 30.278277397155765]],
        author: ['VSLVSKY','DRBSHV','SHRNN'],
        types: [],
    },
    {
        name: 'Орехово, оз Фигурное',
        year: 2001,
        url: './maps/forest/vaskelovo/orekhovo_figurnoe_2001.webp',
        link: './original_maps/forest/vaskelovo/orekhovo_figurnoe_2001_full.jpg',
        bounds: [[60.47063072719175, 30.259609222412113], [60.46479234123692, 30.332565307617188], [60.445111786842475, 30.255746841430668]],
        author: ['VSLVSKY','BRDR'],
        types: [],
    },
    {
        name: 'Орехово-Лемболово',
        year: 2000,
        url: './maps/forest/vaskelovo/orekhovo-lembolovo_2000.webp',
        link: './original_maps/forest/vaskelovo/orekhovo-lembolovo_2000_full.jpg',
        bounds: [[60.47016538711803, 30.29488563537598], [60.44269851113349, 30.364322662353516], [60.44993780053481, 30.26613235473633]],
        author: ['VSLVSKY','BRDR','CHGRVSKY_V'],
        types: [],
    },
    {
        name: 'Орехово, оз Ракитинское',
        year: 2004,
        url: './maps/forest/vaskelovo/orekhovo_rakitinskoe_2004.webp',
        link: './original_maps/forest/vaskelovo/orekhovo_rakitinskoe_2004_full.jpg',
        bounds: [[60.47519916632469, 30.26939392089844], [60.46606164490792, 30.36827087402344], [60.44443439421304, 30.264072418212894]],
        author: ['VSLVSKY','BRDR','DRBSHV'],
        types: [],
    },
    {
        name: 'Орехово, оз Ветренное',
        year: 2022,
        area: 5.6,
        url: './maps/forest/vaskelovo/orekhovo_vetrennoe_2022.webp',
        bounds: [[60.51476537376076, 30.29368400573731], [60.507794066756006, 30.361404418945316], [60.483276961231034, 30.28012275695801]],
        author: ['STLRV','DBRTSV_V','KUZNTSV_A'],
        owner: 'SHEIN',
        types: [],
    },
    {
        name: 'Пески, оз Пулконлампи',
        year: 1999,
        url: './maps/forest/vaskelovo/peski_pulkonlampi_2001.webp',
        link: './original_maps/forest/vaskelovo/peski_pulkonlampi_2001_full.jpg',
        info: 'Мемориал Михаила Святкина, 2001.',
        bounds: [[60.486406037584224, 30.397667884826664], [60.484989533656474, 30.419039726257328], [60.47170944442941, 30.39380550384522]],
        author: ['SHRNN','KVZN','NSNV','TKMKV_K','VRBY'],
        types: [],
    },
    {
        name: 'Пески, Забытое оз',
        year: 1999,
        url: './maps/forest/vaskelovo/peski_zabytoe_2001.webp',
        link: './original_maps/forest/vaskelovo/peski_zabytoe_2001_full.jpg',
        info: 'Мемориал Михаила Святкина, 2001.',
        bounds: [[60.48579293153697, 30.409598350524906], [60.4841649730346, 30.437364578247074], [60.46202085574234, 30.40427684783936]],
        author: ['SHRNN','KVZN','NSNV','TKMKV_K','VRBY'],
        types: [],
    },
    {
        name: 'Пески, оз Стайка',
        year: 1999,
        url: './maps/forest/vaskelovo/peski_stayka_2001.webp',
        link: './original_maps/forest/vaskelovo/peski_stayka_2001_full.jpg',
        info: 'Мемориал Михаила Святкина, 2001.',
        bounds: [[60.477250524652106, 30.40663719177246], [60.473782172990134, 30.458736419677738], [60.4592914517881, 30.402088165283207]],
        author: ['SHRNN','KVZN','NSNV','TKMKV_K','VRBY'],
        types: [],
    },
    {
        name: 'СНТ "Топограф"',
        year: 2017,
        url: './maps/forest/vaskelovo/topograph_2017.webp',
        bounds: [[60.300210283213666, 30.248794555664066], [60.297424758342665, 30.282311439514164], [60.286301556253335, 30.24373054504395]],
        author: ['MKHLV_A','IVNV_P'],
        owner: 'WN',
        types: [],
    },
    {
        name: 'Лемболово',
        year: 2024,
        area: 17,
        url: './maps/forest/vaskelovo/lembolovo_2024.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_2024_full.jpg',
        bounds: [[60.445492813989986, 30.259523391723636], [60.43689744859958, 30.369987487792972], [60.38858565746125, 30.23995399475098]],
        author: ['TKMKV_K','KVZN','NSNV','MLNKV_L','VRBY','RDNV_I'],
        owner: 'RDNV_I',
        types: [],
    },
    {
        name: 'Лемболово',
        year: 1983,
        url: './maps/forest/vaskelovo/lembolovo_1983.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_1983_full.jpg',
        bounds: [[60.445111786842475, 30.256090164184574], [60.44248681173031, 30.30312538146973], [60.415801649062175, 30.252141952514652]],
        author: ['KAZNTSVA_O','KAZNTSV_S'],
        types: [],
    },
    {
        name: 'Лемболово',
        year: 1982,
        url: './maps/forest/vaskelovo/lembolovo_1982.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_1982_full.jpg',
        bounds: [[60.41643726465351, 30.276002883911136], [60.41368284071863, 30.339431762695316], [60.37793894790542, 30.266304016113285]],
        author: ['LVCHV','SVTKN'],
        types: [],
    },
    {
        name: 'Лемболово',
        year: 1987,
        url: './maps/forest/vaskelovo/lembolovo_1987.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_1987_full.jpg',
        bounds: [[60.42139464000694, 30.33359527587891], [60.41844996541937, 30.37217617034912], [60.40340466224666, 30.32938957214356]],
        author: ['FDTV_A','KNSTNTNV_D'],
        types: [],
    },
    {
        name: 'Лемболово',
        year: 2007,
        area: 26,
        url: './maps/forest/vaskelovo/lembolovo_2007.webp',
        link: './original_maps/forest/vaskelovo/lembolovo_2007.pdf',
        bounds: [[60.45196959181943, 30.256347656250004], [60.442867869662955, 30.400457382202152], [60.38027218998218, 30.237550735473636]],
        author: ['CHGRVSKY_Y','DBRTSV_V'],
        types: [],
    },
    {
        name: 'Орехово',
        year: 2024,
        area: 18.5,
        url: './maps/forest/vaskelovo/orekhovo_2024.webp',
        link: './original_maps/forest/vaskelovo/orekhovo_2024_full.jpg',
        bounds: [[60.49139502141355, 30.270080566406254], [60.4788788301667, 30.390758514404297], [60.443714649069115, 30.24973869323731]],
        author: ['TKMKV_K','KVZN','NSNV','MLNKV_L','VRBY','RDNV_I'],
        owner: 'RDNV_I',
        types: [],
    },
    {
        name: 'Орехово, оз Бол.Борково',
        year: 2024,
        url: './maps/forest/vaskelovo/orekhovo_borkovo_2024.webp',
        link: ['./original_maps/forest/vaskelovo/orekhovo_borkovo_2024_1_full.gif','./original_maps/forest/vaskelovo/orekhovo_borkovo_2024_2_full.gif'],
        bounds: [[60.47384562177614, 30.26196956634522], [60.46955197409946, 30.307459831237797], [60.46144960413299, 30.256862640380863]],
        author: 'CHGRVSKY_Y',
        owner: 'KUZM',
        types: [],
    },
];