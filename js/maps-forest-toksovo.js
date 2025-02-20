// types can be ROGAINE, SPRINT, CITY, RELIEF
let toksovoMaps = [
    // --- ТОКСОВО ---
    {
        name: 'оз Хепоярви, восток',
        year: 1985,
        area: 8.6,
        url: './maps/forest/toksovo/hepojarvi_east_1985.webp',
        link: './original_maps/forest/toksovo/hepojarvi_east_1985_full.jpg',
        bounds: [[60.19342537315118, 30.609111785888675], [60.18996939397238, 30.662240982055668], [60.14898192089998, 30.59872627258301]],
        author: ['CHGRVSKY_V','CHGRVSKY_Y','AZBKNA','KLCHTSKA','RDKV'],
        types: [],
    },
    {
        name: 'оз Хепоярви, юг',
        year: 1992,
        url: './maps/forest/toksovo/toksovo_hepojarvI_south_1992.webp',
        link: './original_maps/forest/toksovo/toksovo_hepojarvI_south_1992_full.jpg',
        bounds: [[60.16465712803696, 30.526285171508793], [60.15799501059879, 30.598382949829105], [60.13359843222354, 30.51486968994141]],
        author: ['CHGRVSKY_V','CHGRVSKY_Y','DBRTSV_V','GRBTNKV','KPRNKO','PSTKN_M'],
        types: [],
    },
    {
        name: 'Токсово, Малиновая гора',
        year: 1983,
        area: 5.6,
        url: './maps/forest/toksovo/toksovo_malinovaya_gora_1983.webp',
        link: './original_maps/forest/toksovo/toksovo_malinovaya_gora_1983_full.jpg',
        bounds: [[60.1867264159618, 30.454788208007816], [60.177038245151245, 30.50808906555176], [60.162308458713326, 30.439081192016605]],
        author: 'SHRNN',
        types: [],
    },
    {
        name: 'Токсово, Малиновая гора',
        year: 1997,
        url: './maps/forest/toksovo/toksovo_malinovaya_gora_1997.webp',
        link: './original_maps/forest/toksovo/toksovo_malinovaya_gora_1997_full.jpg',
        bounds: [[60.18087971211821, 30.462770462036136], [60.17716630128953, 30.514268875122074], [60.14855469891858, 30.45041084289551]],
        author: ['DBRTSV_V','CHGRVSKY_Y'],
        types: [],
    },
    {
        name: 'Сярьги, Охта-Парк',
        year: 1985,
        url: './maps/forest/toksovo/sjargi_1985.webp',
        link: './original_maps/forest/toksovo/sjargi_1985_full.jpg',
        bounds: [[60.15902003964619, 30.391702651977543], [60.15269851792967, 30.46920776367188], [60.12915297366799, 30.383205413818363]],
        author: ['CHGRVSKY_V','CHGRVSKY_Y','AZBKNA'],
        types: [],
    },
    {
        name: 'Токсово',
        year: 1991,
        url: './maps/forest/toksovo/toksovo_1991.webp',
        link: './original_maps/forest/toksovo/toksovo_1991_full.jpg',
        bounds: [[60.16183870470513, 30.43865203857422], [60.15773874834224, 30.512466430664066], [60.11448725214835, 30.42843818664551]],
        author: ['CHGRVSKY_V','CHGRVSKY_Y','GRBTNKV','DBRTSV_V'],
        types: [],
    },
    {
        name: 'Сярьги',
        year: 1991,
        url: './maps/forest/toksovo/sjargi_1991.webp',
        link: './original_maps/forest/toksovo/sjargi_1991_full.jpg',
        bounds: [[60.16785958842209, 30.38775444030762], [60.162052230086715, 30.475730895996094], [60.1284690036598, 30.37324905395508]],
        author: ['CHGRVSKY_V','CHGRVSKY_Y','DBRTSV_S','GRBTNKV','GUSEV','BNDRNK'],
        types: [],
    },
    {
        name: 'оз Тинускеньярви',
        year: 1984,
        url: './maps/forest/toksovo/tinjuskenjarvi_1984.webp',
        link: './original_maps/forest/toksovo/tinjuskenjarvi_1984_full.jpg',
        bounds: [[60.265022945174344, 30.547142028808597], [60.26136162888228, 30.601902008056644], [60.231204060878355, 30.5390739440918]],
        author: 'BYMKV',
        types: [],
    },
    {
        name: 'Ново-Токсово - оз Лассылампи',
        year: 1984,
        url: './maps/forest/toksovo/lassylampi_1984.webp',
        link: './original_maps/forest/toksovo/lassylampi_1984_full.jpg',
        bounds: [[60.243219301102904, 30.563192367553714], [60.24108926071485, 30.607137680053714], [60.212192237555385, 30.555381774902347]],
        author: 'BYMKV',
        types: [],
    },
    {
        name: 'Ново-Токсово - оз Лазурное',
        year: 1985,
        url: './maps/forest/toksovo/toksovo_lazurnoe_1985.webp',
        link: './original_maps/forest/toksovo/toksovo_lazurnoe_1985_full.jpg',
        bounds: [[60.21351404369955, 30.556926727294925], [60.2101241436496, 30.600700378417972], [60.181690631036155, 30.547227859497074]],
        author: ['BYMKV','DVRKO_V'],
        types: [],
    },
    {
        name: 'Школьное оз',
        year: 2007,
        url: './maps/forest/toksovo/schkolnoe_oz_2007.webp',
        bounds: [[60.1471875512765, 30.572247505187992], [60.14434626578051, 30.603919029235843], [60.12932396394884, 30.56602478027344]],
        author: 'CHGRVSKY_V',
        owner: 'GUSEV',
        types: [],
    },
    {
        name: 'Энколово - север',
        year: 1985,
        url: './maps/forest/toksovo/enkolovo_1985.webp',
        link: './original_maps/forest/toksovo/enkolovo_1985_full.jpg',
        bounds: [[60.13252986721134, 30.408439636230472], [60.13037126003232, 30.444145202636722], [60.113375298370904, 30.406551361083984]],
        author: ['MLVA_M','KAZNTSVA_O'],
        types: [],
    },
    {
        name: 'Энколово ч/б',
        year: 1975,
        url: './maps/forest/toksovo/enkolovo_1975.webp',
        link: './original_maps/forest/toksovo/enkolovo_1975_full.jpg',
        bounds: [[60.13282906891286, 30.410413742065433], [60.1311620533558, 30.44594764709473], [60.11412373292936, 30.41045665740967]],
        author: ['MLVA_M','KAZNTSVA_O'],
        types: [],
    },
    {
        name: 'Энколово - север',
        year: 1999,
        url: './maps/forest/toksovo/enkolovo_1999.webp',
        link: './original_maps/forest/toksovo/enkolovo_1999_full.jpg',
        bounds: [[60.13582093628903, 30.40852546691895], [60.132508495557104, 30.454444885253906], [60.11202807329655, 30.4002857208252]],
        author: ['CHGRVSKY_V','CHGRVSKY_Y','DRBSHV'],
        types: [],
    },
    {
        name: 'Энколово - юг',
        url: './maps/forest/toksovo/enkolovo_south.webp',
        link: './original_maps/forest/toksovo/enkolovo_south_full.jpg',
        bounds: [[60.10963287040107, 30.423932075500492], [60.11602681846594, 30.4656457901001], [60.10133385603849, 30.426807403564457]],
        author: ['KCHTV','OSTPNK'],
        types: [],
    },
    {
        name: 'Токсово',
        year: 1989,
        url: './maps/forest/toksovo/toksovo_1989.webp',
        link: './original_maps/forest/toksovo/toksovo_1989_full.jpg',
        bounds: [[60.16275685400291, 30.473070144653324], [60.160194512798185, 30.5116081237793], [60.14661076881676, 30.46920776367188]],
        author: ['CHGRVSKY_Y','DBRTSV_V','KRPLSN','BSTRV_A','BRSVA_I','GUSEV'],
        types: [],
    },
    {
        name: 'Токсово - юг,запад',
        year: 1983,
        url: './maps/forest/toksovo/toksovo_south_west_1983.webp',
        link: './original_maps/forest/toksovo/toksovo_south_west_1983_full.jpg',
        bounds: [[60.15453530155787, 30.44998168945313], [60.1514169802039, 30.51066398620606], [60.113760209697055, 30.441055297851566]],
        author: ['CHGRVSKY_V','CHGRVSKY_Y'],
        types: [],
    },
    {
        name: 'Токсово - юг,восток',
        year: 1982,
        url: './maps/forest/toksovo/toksovo_south_1982.webp',
        link: './original_maps/forest/toksovo/toksovo_south_1982_full.jpg',
        bounds: [[60.14898192089998, 30.47590255737305], [60.146247604300065, 30.531435012817386], [60.112990382545355, 30.467834472656254]],
        author: ['CHGRVSKY_V','CHGRVSKY_Y'],
        types: [],
    },
    {
        name: 'Токсово, запад Хепоярви',
        year: 1989,
        area: 4,
        url: './maps/forest/toksovo/toksovo_hepojarvi_west_1987.webp',
        link: './original_maps/forest/toksovo/toksovo_hepojarvi_west_1987_full.jpg',
        bounds: [[60.19636906842321, 30.543708801269535], [60.192700074357255, 30.589456558227543], [60.15790959006861, 30.53400993347168]],
        author: ['CHGRVSKY_V','BRNVA','DBRTSV_V','KRPLSN'],
        types: [],
    },
    {
        name: 'Токсово, оз Кривое',
        year: 1987,
        url: './maps/forest/toksovo/toksovo_krivoe_1987.webp',
        link: './original_maps/forest/toksovo/toksovo_krivoe_1987_full.jpg',
        bounds: [[60.163077132606894, 30.52431106567383], [60.15902003964619, 30.589971542358402], [60.14009456060476, 30.518989562988285]],
        author: ['CHGRVSKY_Y','DBRTSV_V','CHKVSKY_N','KRNLJV','GRSMVA','BSTRV_A','BRSVA_I','PTRNNA'],
        types: [],
    },
    {
        name: 'Осельки',
        year: 1985,
        url: './maps/forest/toksovo/oselki_1985.webp',
        link: './original_maps/forest/toksovo/oselki_1985_full.jpg',
        bounds: [[60.228135633815285, 30.485515594482425], [60.22583412498815, 30.56078910827637], [60.19880061755633, 30.482854843139652]],
        author: 'BYMKV',
        types: [],
    },
    {
        name: 'Осельки - Хиттолово',
        year: 1990,
        url: './maps/forest/toksovo/oselki_hittolovo_1990.webp',
        link: './original_maps/forest/toksovo/oselki_hittolovo_1990_full.jpg',
        bounds: [[60.23030913266004, 30.48036575317383], [60.22562101414459, 30.542764663696293], [60.20464413035624, 30.472555160522464]],
        author: 'DRBSHV',
        types: [],
    },
    {
        name: 'Кавголово - Осельки',
        year: 1990,
        url: './maps/forest/toksovo/kavgolovo_oselki_1990.webp',
        link: './original_maps/forest/toksovo/kavgolovo_oselki_1990_full.jpg',
        bounds: [[60.21666910752298, 30.501480102539066], [60.21300238312461, 30.55932998657227], [60.17878830249272, 30.495214462280277]],
        author: 'BYMKV',
        types: [],
    },
    {
        name: 'Осельки, Курголовское оз',
        url: './maps/forest/toksovo/oselki_kurgolovskoe.webp',
        link: './original_maps/forest/toksovo/oselki_kurgolovskoe_full.jpg',
        bounds: [[60.201658523913956, 30.50808906555176], [60.20118933248576, 30.556712150573734], [60.183845870817485, 30.507531166076664]],
        author: 'BRDR',
        types: [],
    },
    {
        name: 'Осельки',
        year: 2015,
        url: './maps/forest/toksovo/oselki_2015.webp',
        link: './original_maps/forest/toksovo/oselki_2015_full.jpg',
        bounds: [[60.231694130261396, 30.48465728759766], [60.22903062138403, 30.516800880432132], [60.210849057387684, 30.47912120819092]],
        author: 'CHGRVSKY_V',
        owner: ['WN','SHEIN'],
        types: [],
    },
    {
        name: 'Осельки',
        year: 2007,
        url: './maps/forest/toksovo/oselki_2007.webp',
        link: './original_maps/forest/toksovo/oselki_2007_full.jpg',
        bounds: [[60.23082052320575, 30.48165321350098], [60.22775206023302, 30.509462356567386], [60.21210695791025, 30.47590255737305]],
        author: 'DRBSHV',
        types: [],
    },
    {
        name: 'Кавголово',
        year: 1999,
        url: './maps/forest/toksovo/kavgolovo_1999.webp',
        link: './original_maps/forest/toksovo/kavgolovo_1999_full.jpg',
        bounds: [[60.17737972707715, 30.52212238311768], [60.17637661381631, 30.545682907104496], [60.161070001844394, 30.518131256103516]],
        author: ['SHRNN','BBNNA_I'],
        types: [],
    },
    {
        name: 'Кавголово',
        year: 2004,
        url: './maps/forest/toksovo/kavgolovo_2004.webp',
        link: './original_maps/forest/toksovo/kavgolovo_2004_full.jpg',
        bounds: [[60.17716630128953, 30.522723197937015], [60.17676078847216, 30.545425415039066], [60.16224440174397, 30.519418716430668]],
        author: 'VSLVSKY',
        types: [],
    },
    {
        name: 'Кавголово',
        year: 2017,
        url: './maps/forest/toksovo/kavgolovo_2017.webp',
        bounds: [[60.17441298428561, 30.52538394927979], [60.171979628313395, 30.541520118713382], [60.16282090997341, 30.51886081695557]],
        author: 'MKHLV_A',
        owner: 'WN',
        types: [],
    },
    {
        name: 'Орлиная гора',
        year: 2004,
        url: './maps/forest/toksovo/orlinaya_gora_2004.webp',
        link: './original_maps/forest/toksovo/orlinaya_gora_2004_full.jpg',
        bounds: [[60.19611310540228, 30.531392097473145], [60.19353203338676, 30.559887886047367], [60.177230329171444, 30.52598476409912]],
        author: ['BRDR','VSLVSKY'],
        types: [],
    },
    {
        name: 'Токсово - Кавголово',
        year: 1989,
        area: 4,
        url: './maps/forest/toksovo/kavgolovo_1989.webp',
        link: './original_maps/forest/toksovo/kavgolovo_1989_full.jpg',
        bounds: [[60.19180409489582, 30.51589965820313], [60.18749451865291, 30.55778503417969], [60.15585943074604, 30.507745742797855]],
        author: ['SHRNN','MKHLV_B','CHGRVSKY_Y','DBRTSV_V','DJKV','PTRNNA','SMNA'],
        types: [],
    },
    {
        name: 'Кавголово, старый лыжедром',
        year: 1988,
        url: './maps/forest/toksovo/kavgolovo_old_ski_track_1988.webp',
        link: './original_maps/forest/toksovo/kavgolovo_old_ski_track_1988_full.jpg',
        bounds: [[60.18862530380096, 30.534696578979496], [60.18764386986712, 30.557699203491214], [60.173431125498254, 30.531692504882816]],
        author: ['SHRNN','MKHLV_B'],
        types: [],
    },
    {
        name: 'Кавголово, старый лыжедром',
        year: 2023,
        url: './maps/forest/toksovo/kavgolovo_old_ski_track_2023.webp',
        bounds: [[60.18903067012461, 30.54134845733643], [60.187665205699425, 30.557656288146976], [60.17684616000767, 30.537271499633793]],
        author: 'MKHLV_A',
        owner: 'WN',
        types: [],
    },
    {
        name: 'Кавголово, УТС',
        year: 2023,
        url: './maps/forest/toksovo/kavgolovo_utts_2023.webp',
        link: './original_maps/forest/toksovo/kavgolovo_uts_2023.jpg',
        bounds: [[60.181669291321185, 30.533666610717777], [60.18063429849855, 30.543966293334964], [60.173559195700115, 30.530512332916263]],
        author: ['MNKV','TKMKVA_P','IVNVA_G'],
        owner: 'SFSO_SPB',
        types: [],
    },
    {
        name: 'Кузьмолово',
        year: 2005,
        url: './maps/forest/toksovo/kuzmolovo_2004.webp',
        link: './original_maps/forest/toksovo/kuzmolovo_2004_full.jpg',
        bounds: [[60.1383851775022, 30.50937652587891], [60.1346455922666, 30.556454658508304], [60.106766952319965, 30.499806404113773]],
        author: 'SHRNN',
        owner: ['SHRNN','GLFSTRM'],
        types: [],
    },
    {
        name: 'Куялово',
        year: 2012,
        url: './maps/forest/toksovo/kujalovo_2012.webp',
        link: './original_maps/forest/toksovo/kujalovo_2012_full.jpg',
        bounds: [[60.143513060328885, 30.492467880249027], [60.14159019795266, 30.529031753540043], [60.1183146520964, 30.487833023071293]],
        author: 'RYLOV_V',
        owner: 'SHEIN',
        types: [],
    },
    {
        name: 'Кузьмолово, Юбилейная ул',
        year: 2018,
        url: './maps/forest/toksovo/kuzmolovo_jubilejnaya_2018.webp',
        link: './original_maps/forest/toksovo/kuzmolovo_jubilejnaya_2018_full.jpg',
        bounds: [[60.12762470857684, 30.488841533660892], [60.12639563271471, 30.50491333007813], [60.11273376949533, 30.48461437225342]],
        author: ['TKMKVA_P','IVNVA_G'],
        owner: 'SHEIN',
        types: [],
    },
    {
        name: 'Кузьмолово, Зона-Z',
        year: 1986,
        url: './maps/forest/toksovo/kuzmolovo_zona_z_1986.webp',
        link: './original_maps/forest/toksovo/kuzmolovo_zona_z_1986_full.jpg',
        bounds: [[60.14453854096396, 30.51280975341797], [60.14030822724681, 30.581388473510746], [60.11320422522614, 30.50414085388184]],
        author: ['CHGRVSKY_V','DBRTSV_V','CHKVSKY_N','KRNLJV','GBNV_A','CHGRVSKY_Y'],
        types: [],
    },
    {
        name: 'Кузьмолово, Зона-Z',
        year: 2018,
        url: './maps/forest/toksovo/kuzmolovo_zona_z_2018.webp',
        link: './original_maps/forest/toksovo/kuzmolovo_zona_z_2018_full.jpg',
        bounds: [[60.14483763345936, 30.508689880371097], [60.13996635995334, 30.5885124206543], [60.10909820311472, 30.500965118408207]],
        author: ['DBRTSV_V','KVZN','TKMKV_K'],
        owner: 'SHEIN',
        types: [],
    },
    {
        name: 'Токсово, Охта-Парк',
        year: 2001,
        url: './maps/forest/toksovo/toksovo_okhta_park_2001.webp',
        link: './original_maps/forest/toksovo/toksovo_okhta_park_2001_full.jpg',
        bounds: [[60.147059378270846, 30.410585403442386], [60.14402580464335, 30.463542938232425], [60.116069583169384, 30.403203964233402]],
        types: [],
        author: ['DRBSHV','CHGRVSKY_V','CHGRVSKY_Y'],
    },
    {
        name: 'Токсово, оз Светлое',
        year: 2003,
        url: './maps/forest/toksovo/toksovo_svetloe_oz_2003.webp',
        link: './original_maps/forest/toksovo/toksovo_svetloe_oz_2003_full.jpg',
        bounds: [[60.15786687972026, 30.457835197448734], [60.1551546589464, 30.49585819244385], [60.14278665886592, 30.453543663024906]],
        types: [],
        author: 'CHGRVSKY_M',
    },
    {
        name: 'Токсово, оз Светлое',
        year: 2017,
        url: './maps/forest/toksovo/toksovo_oz_svetloe_2017.webp',
        bounds: [[60.16070699702129, 30.436120033264164], [60.15609435132153, 30.494484901428226], [60.14496581512473, 30.430884361267093]],
        author: 'DBRTSV_V',
        owner: 'SHEIN',
        types: [],
    },
    {
        name: 'Токсово, оз Светлое',
        year: 1984,
        url: './maps/forest/toksovo/toksovo_svetloe_1984.webp',
        link: './original_maps/forest/toksovo/toksovo_svetloe_1984_full.jpg',
        bounds: [[60.15365963844227, 30.469293594360355], [60.16363227479294, 30.501780509948734], [60.14458126862982, 30.4835844039917]],
        types: [],
        author: 'SHRNN',
        info: '"Бабочка".',
    },
    {
        name: 'Токсово, Охта-Парк',
        year: 2008,
        url: './maps/forest/toksovo/toksovo_okhta_park_2008.webp',
        bounds: [[60.15632927021813, 30.39350509643555], [60.14979362737237, 30.472083091735843], [60.11692486557419, 30.38105964660645]],
        types: [],
        author: ['MKHLV_A','SLBDNK'],
    },
    {
        name: 'Токсово, КомБыт',
        year: 2017,
        url: './maps/forest/toksovo/toksovo_kombyt_2017.jpg',
        link: './original_maps/forest/toksovo/toksovo_kombyt_2017_full.jpg',
        bounds: [[60.148042025213854, 30.487318038940433], [60.146717581146646, 30.51066398620606], [60.12962319480245, 30.482296943664554]],
        author: 'DBRTSV_V',
        owner: 'SHEIN',
        types: [],
    },
    {
        name: 'Токсово, Малиновая гора',
        year: 2018,
        url: './maps/forest/toksovo/toksovo_malinovaya_gora_2018.webp',
        link: './original_maps/forest/toksovo/toksovo_malinovaya_gora_2018_full.jpg',
        bounds: [[60.17644064323766, 30.453758239746097], [60.17328170963167, 30.50791740417481], [60.148042025213854, 30.447578430175785]],
        author: ['TKMKV_K','KVZN'],
        owner: 'SHEIN',
        types: [],
    },
    {
        name: 'Токсово, Малиновая гора',
        year: 2013,
        url: './maps/forest/toksovo/toksovo_malinovaya_gora_2013.webp',
        link: './original_maps/forest/toksovo/toksovo_malinovaya_gora_2013_full.jpg',
        bounds: [[60.17641930011107, 30.462856292724613], [60.173644575557304, 30.497488975524906], [60.16412335429406, 30.459079742431644]],
        author: 'DBRTSV_V',
        owner: 'RDNV_I',
        types: [],
    },
    {
        name: 'Токсово, оз Кривое',
        year: 2014,
        url: './maps/forest/toksovo/toksovo_krivoe_2014.webp',
        link: './original_maps/forest/toksovo/toksovo_krivoe_2014_full.jpg',
        bounds: [[60.15566722175373, 30.533494949340824], [60.153339268060094, 30.56044578552246], [60.140286860645055, 30.52787303924561]],
        author: 'DBRTSV_V',
        owner: 'SHEIN',
        types: [],
    },
    {
        name: 'Токсово, СКА',
        year: 2002,
        url: './maps/forest/toksovo/toksovo_ska_2002.webp',
        link: './original_maps/forest/toksovo/toksovo_ska_2002_full.jpg',
        bounds: [[60.17580034340699, 30.56181907653809], [60.17054941394673, 30.611429214477543], [60.1471875512765, 30.55177688598633]],
        author: 'CHGRVSKY_V',
        types: [],
    },
    {
        name: 'Токсово, СКА',
        year: 2014,
        url: './maps/forest/toksovo/toksovo_ska_2014.webp',
        link: './original_maps/forest/toksovo/toksovo_ska_2014_full.jpg',
        bounds: [[60.16226575408094, 30.552420616149902], [60.160023682948, 30.57825565338135], [60.14825564022888, 30.547356605529785]],
        author: 'DBRTSV_V',
        owner: 'SHEIN',
        types: [],
    },
    {
        name: 'Токсово - Светлое',
        year: 1992,
        url: './maps/forest/toksovo/toksovo_svetloe_1992.webp',
        link: './original_maps/forest/toksovo/toksovo_svetloe_1992_full.jpg',
        bounds: [[60.17379398977339, 30.577354431152347], [60.16790228578538, 30.64773559570313], [60.12919572132151, 30.55984497070313]],
        author: ['CHGRVSKY_V','CHGRVSKY_Y','DBRTSV_V','DBRTSV_S','GUSEV'],
        areas: [50, 15, 25, 5, 5],
        types: [],
    },
    {
        name: 'Токсово - Светлое',
        year: 2014,
        url: './maps/forest/toksovo/toksovo_svetloe_2014.webp',
        link: './original_maps/forest/toksovo/toksovo_svetloe_2014_full.jpg',
        bounds: [[60.173964748045265, 30.579929351806644], [60.171211162662146, 30.607438087463382], [60.151822805888436, 30.57181835174561]],
        author: 'DBRTSV_V',
        owner: 'SHEIN',
        types: [],
    },
    {
        name: 'Токсово, ВИФК - Химаколово',
        year: 2020,
        area: 14,
        url: './maps/forest/toksovo/toksovo_vifk_khimakolovo_2020.webp',
        bounds: [[60.22067645362063, 30.563192367553714], [60.209463178924935, 30.674858093261722], [60.17605646483715, 30.546026229858402]],
        author: ['CHGRVSKY_Y','CHGRVSKY_V'],
        owner: 'SHEIN',
        types: [],
    },
    {
        name: 'Токсово, трамплин, СКА',
        year: 2018,
        url: './maps/forest/toksovo/toksovo_tramplin_ska.webp',
        link: './original_maps/forest/toksovo/toksovo_tramplin_ska_full.jpg',
        bounds: [[60.16951407066697, 30.54278612136841], [60.169289919887184, 30.55935144424439], [60.159479156874674, 30.543644428253177]],
        author: 'SHRNN',
        owner: 'SHRNN',
        types: [],
    },
    {
        name: 'Токсово, ВИФК',
        year: 2000,
        url: './maps/forest/toksovo/toksovo_vifk_2000.webp',
        link: './original_maps/forest/toksovo/toksovo_vifk_2000_full.jpg',
        bounds: [[60.205838296862595, 30.55709838867188], [60.20310870954749, 30.59306144714356], [60.179855364861766, 30.551176071166996]],
        author: ['CHGRVSKY_V'],
        types: [],
    },
    {
        name: 'Токсово, ВИФК',
        year: 2023,
        url: './maps/forest/toksovo/toksovo_vifk_2023.webp',
        link: './original_maps/forest/toksovo/toksovo_vifk_2023_full.jpg',
        bounds: [[60.1892333514094, 30.55707693099976], [60.188070583878265, 30.57355642318726], [60.17998341001618, 30.553450584411625]],
        author: ['SHRNN','CHSNKV'],
        owner: 'SHRNN',
        types: [],
    },
    {
        name: 'Токсово, восток оз Хепоярви',
        year: 2007,
        url: './maps/forest/toksovo/toksovo_hepojarvI_east_2007.webp',
        link: './original_maps/forest/toksovo/toksovo_hepojarvI_east_2007_full.jpg',
        bounds: [[60.18109311377495, 30.59975624084473], [60.177422412068246, 30.65872192382813], [60.143171226344805, 30.589456558227543]],
        author: ['CHGRVSKY_V','CHGRVSKY_Y','DBRTSV_V'],
        types: [],
    },
    {
        name: 'Лесколово',
        year: 2015,
        url: './maps/forest/toksovo/leskolovo_2015.webp',
        link: './original_maps/forest/toksovo/leskolovo_2015_full.jpg',
        bounds: [[60.27527032415444, 30.456075668334964], [60.273589250479354, 30.482511520385746], [60.26560829207024, 30.45341491699219]],
        author: 'DBRTSV_V',
        owner: 'SHEIN',
        types: [],
    },
    {
        name: 'Корабсельки, юг',
        year: 2012,
        area: 2.5,
        url: './maps/forest/toksovo/karabselky_2013.webp',
        link: './original_maps/forest/toksovo/karabselky_2013_full.jpg',
        bounds: [[60.10702361186672, 30.393161773681644], [60.10807161759284, 30.451612472534183], [60.089202411877785, 30.393719673156742]],
        author: 'SHRNN',
        owner: 'SHRNN',
        types: [],
    },
    {
        name: 'Мистолово',
        year: 2006,
        url: './maps/forest/toksovo/mistolovo_2006.webp',
        link: './original_maps/forest/toksovo/mistolovo_2006_full.jpg',
        bounds: [[60.11780150698152, 30.38848400115967], [60.115385341248704, 30.424661636352543], [60.10133385603849, 30.38350582122803]],
        author: 'SHRNN',
        types: [],
    },
    {
        name: 'Охта-Парк',
        year: 2021,
        url: './maps/parks/okhta-park_2021.webp',
        link: './original_maps/forest/toksovo/park_2021_full.jpg',
        bounds: [[60.13410064579107, 30.443136692047123], [60.13246575220701, 30.455882549285892], [60.125594036770806, 30.439510345458988]],
        author: 'DBRTSV_V',
        owner: 'SHEIN',
        types: ['PARK'],
    },
    {
        name: 'Лехтуси',
        year: 1990,
        url: './maps/forest/toksovo/lehtusi_1990.webp',
        link: './original_maps/forest/toksovo/lehtusi_1990_full.jpg',
        bounds: [[60.30514284398862, 30.501480102539066], [60.29948734537272, 30.56130409240723], [60.27736622539905, 30.491609573364258]],
        author: 'BYMKV',
        types: [],
    },
    {
        name: 'Аньялово',
        year: 2023,
        url: './maps/forest/toksovo/anyalovo_2023.webp',
        link: './original_maps/forest/toksovo/anyalovo_2023_full.jpg',
        bounds: [[60.31766225096646, 30.4951286315918], [60.31126498711547, 30.5390739440918], [60.29853049128726, 30.489764213562015]],
        author: ['TKMKV_K','KVZN'],
        owner: 'SFSO_SPB',
        types: [],
    },
    {
        name: 'Лехтуси, оз Валкиярви',
        year: 2016,
        url: './maps/forest/toksovo/lehtusi_valkijarvi_2016.webp',
        //link: './original_maps/forest/lehtusi_valkijarvi_2016_full.jpg',
        bounds: [[60.27668533819831, 30.52705764770508], [60.27421700328666, 30.56207656860352], [60.25224913383907, 30.51864624023438]],
        author: 'CHGRVSKY_V',
        owner: ['WN','SHEIN'],
        types: [],
    },
];
