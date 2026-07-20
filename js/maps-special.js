// types can be ROGAINE, PARK, CITY, PARK, RELIEF, VELO, WINTER
let specialMaps = [
    // --- зимние ---
    {
        name: 'Ново-Токсово',
        year: 1980,
        url: './maps/winter/novo_toksovo_winter_1980.webp',
        link: './original_maps/winter/novo_toksovo_winter_1980_omaps.webp',
        bounds: [[60.2414301, 30.5663681], [60.2402798, 30.596323], [60.2048574, 30.5531931]],
        type: ['WINTER']
    },
    {
        name: 'Снегирёвка',
        year: 1989,
        logo: 'wn_retro.webp',
        excluded: true,
        url: './maps/winter/snegirevka_winter_1989.webp',
        link: './original_maps/winter/snegirevka_winter_1989_omaps.webp',
        bounds: [[60.558629, 30.2393532], [60.5528909, 30.3151417], [60.5288724, 30.2294827]],
        author: ['MLVA_M','KAZNTSVA_O'],
        type: ['WINTER']
    },
    {
        name: 'Токсово, запад Хепоярви',
        year: 1987,
        url: './maps/winter/toksovo_hepojarvi_west_winter_1987.webp',
        link: './original_maps/winter/toksovo_hepojarvi_west_winter_1987_omaps.jpg',
        bounds: [[60.1977342, 30.5346107], [60.1938947, 30.5958939], [60.1406928, 30.5189037]],
        author: ['CHGRVSKY_V','BRNVA','KRPLSN','SMNA','CHKVSKY_N','DBRTSV_V','GRSMVA','BSTRV_A','PTRNNA','KRNLJV','CHGRVSKY_Y'],
        areas: [50,3,2,2,3,10,2,3,2,3,20],
        type: ['WINTER'],
        logo: 'ski_retro.gif',
        qtty: 20
    },
    {
        name: 'Токсово',
        year: 1989,
        url: './maps/winter/toksovo_winter_1989.webp',
        link: './original_maps/winter/toksovo_winter_1989_omaps.jpg',
        bounds: [[60.1628423, 30.4734564], [60.1604508, 30.5119944], [60.1467389, 30.4696798]],
        author: ['CHGRVSKY_Y','DBRTSV_V','KRPLSN','BSTRV_A','BRSVA_I','GUSEV_I'],
        areas: [40,30,5,5,10,10],
        type: ['WINTER'],
        logo: 'ski_retro.gif',
        qtty: 10
    },
    {
        name: 'Стеклянный',
        date: '1999-02-20',
        url: './maps/winter/steklyanny_winter_1999.webp',
        link: './original_maps/winter/steklyanny_winter_1999_omaps.webp',
        info: 'Первенство России среди ДЮСШ. Первенство России среди ветеранов.',
        bounds: [[60.4061812, 30.2579784], [60.4049095, 30.2808952], [60.3799328, 30.251627]],
        type: ['WINTER']
    },
    {
        name: 'Силанде',
        date: '2024-01-21',
        url: './maps/winter/silande_winter_2024.webp',
        link: './original_maps/winter/silande_winter_2024_omaps.gif',
        bounds: [[60.4155474, 30.2501678], [60.41292, 30.2837276], [60.3915118, 30.240984]],
        owner: 'SFSO_SPB',
        type: ['WINTER']
    },
    {
        name: 'Лемболово',
        date: '2019-01-08', // карта явно более ранняя
        url: './maps/winter/lembolovo_winter_2019.webp',
        link: './original_maps/winter/lembolovo_winter_2019_omaps.jpg',
        bounds: [[60.4235129, 30.306344], [60.4204202, 30.340848], [60.4062871, 30.3008938]],
        author: ['DBRTSV_V','CHGRVSKY_Y'], //Возможно и Баймакова, надо уточнить
        type: ['WINTER']
    },
    {
        name: 'Орехово, Лемболово',
        year: 1986,
        url: './maps/winter/orekhovo_lembolovo_winter_1986.webp',
        link: './original_maps/winter/orekhovo_lembolovo_winter_1986_omaps.jpg',
        bounds: [[60.4730419, 30.276947], [60.4662732, 30.3857803], [60.4199541, 30.2633858]],
        author: 'BYMKV',
        logo: 'winter_retro.gif',
        type: ['WINTER']
    },
    {
        name: 'Орехово, оз Нырково',
        year: 2012,
        url: './maps/winter/orekhovo_nyrkovo_winter_2012.webp',
        link: './original_maps/winter/orekhovo_nyrkovo_winter_2012_omaps.jpeg',
        publish: ['https://vk.com/album-230167293_312356826','https://vk.com/album-230167293_312489606','https://vk.com/album-230167293_312551370','https://vk.com/photo-230167293_457267005'],
        bounds: [[60.4759605, 30.2979541], [60.4733803, 30.3341961], [60.4511019, 30.2901006]],
        author: 'TKMKV_K',
        owner: 'SFSO_SPB',
        type: ['WINTER']
    },
    {
        name: 'Орехово',
        year: 2010,
        url: './maps/winter/orekhovo_winter_2010.webp',
        link: './original_maps/winter/orekhovo_winter_2010_omaps.jpg',
        bounds: [[60.4606668, 30.2797365], [60.4568792, 30.3267717], [60.4431007, 30.2742434]],
        author: ['KVZN','NSNV'],
        type: ['WINTER'],
        owner: 'SFSO_SPB'
    },
    {
        name: 'Рощино',
        year: 2013,
        url: './maps/winter/roschino_winter_2013.webp',
        link: './original_maps/winter/roschino_winter_2013_omaps.jpg',
        bounds: [[60.272089, 29.5761824], [60.2720464, 29.6000004], [60.2637032, 29.5764399]],
        author: 'SHRNN',
        type: ['WINTER'],
        zindex: 2
    },
    {
        name: 'Сярьги',
        year: 1985,
        url: './maps/winter/siargi_winter_1985.webp',
        link: './original_maps/winter/siargi_winter_1985_omaps.jpg',
        bounds: [[60.15902, 30.4051781], [60.1516733, 30.5320358], [60.1147866, 30.3953075]],
        author: ['CHGRVSKY_V','CHGRVSKY_Y'],
        editor: 'FDRV_N',
        logo: 'winter_retro.gif',
        type: ['WINTER'],
    },
    {
        name: 'Кузьмолово',
        year: 2003,
        area: 2.3,
        url: './maps/winter/kuzmolovo_2003.webp',
        link: './original_maps/winter/kuzmolovo_2003_omaps.jpg',
        bounds: [[60.1230609, 30.5052567], [60.1194264, 30.5520773], [60.1067456, 30.500021]],
        author: 'SHRNN',
        owner: 'GLFSTRM',
        type: ['WINTER']
    },
    {
        name: 'Кузьмолово',
        year: 2023,
        info: 'Тренировочный полигон Федерации ориентирования СПб.',
        o_site: '2301_poligon',
        url: './maps/winter/kuzmolovo_poligon_2023.webp',
        link: './original_maps/winter/kuzmolovo_poligon_2023_omaps.gif',
        bounds: [[60.129527, 30.5084968], [60.1281698, 30.5350828], [60.1120815, 30.5045271]],
        author: ['KVZN','TKMKV_K'],
        owner: 'SFSO_SPB',
        type: ['WINTER']
    },
    {
        name: 'Токсово, ВИФК',
        date: '2023-02-09',
        url: './maps/winter/toksovo_vifk_winter_2023.webp',
        link: './original_maps/winter/toksovo_vifk_winter_2023_omaps.jpg',
        info: 'Первенство России.',
        o_site: '230213',
        bounds: [[60.1932334, 30.5601454], [60.189628, 30.5967951], [60.1802182, 30.5548668]],
        author: 'CHGRVSKY_Y',
        type: ['WINTER']
    },
    {
        name: 'Токсово, Школьное оз',
        date: '2013-02-16',
        url: './maps/winter/toksovo_shkolnoe_winter_2013.webp',
        link: './original_maps/winter/toksovo_shkolnoe_winter_2013_omaps.jpg',
        info: 'Первенство СПб.',
        bounds: [[60.1470594, 30.5724621], [60.1445172, 30.6023312], [60.1366971, 30.5685568]],
        owner: 'SFSO_SPB',
        type: ['WINTER']
    },
    {
        name: 'Всеволожск, Колтуши',
        year: 1,
        url: './maps/winter/vsevolozhsk_old_winter.webp',
        link: './original_maps/winter/vsevolozhsk_old_winter_omaps.jpg',
        bounds: [[60.0037066, 30.6139183], [60.0016468, 30.7175159], [59.944566, 30.6094551]],
        type: ['WINTER']
    },
    {
        name: 'Зеленогорск - Чёрные озёра',
        url: './maps/winter/zelenogorsk_chernye_winter.webp',
        link: './original_maps/winter/zelenogorsk_chernye_winter_omaps.jpg',
        bounds: [[60.254634, 29.7768116], [60.2522491, 29.8162937], [60.2255784, 29.7681427]],
        author: ['SHRNN','KUZNTSV_S','VLKV_M'],
        type: ['WINTER']
    },
    {
        name: 'Цвелодубово',
        date: '2003-02-21',
        start: 'JWSOC_2003',
        info: 'ЛГ-спринт.',
        url: './maps/winter/tsvelodubovo_winter_2003.webp',
        link: './original_maps/winter/tsvelodubovo_winter_2003_omaps.jpg',
        bounds: [[60.3801237, 29.5524073], [60.3771541, 29.5998287], [60.3629386, 29.5482445]],
        author: ['KVZN','KUZNTSV_S','NSNV'],
        type: ['WINTER']
    },
    {
        name: 'Цвелодубово, оз Рыбацкое',
        date: '2003-02-20',
        start: 'JWSOC_2003',
        info: 'ЛГ-спринт.',
        url: './maps/winter/tsvelodubovo_rybatskoe_2003.webp',
        link: './original_maps/winter/tsvelodubovo_rybatskoe_2003_omaps.jpg',
        bounds: [[60.3641906, 29.5441246], [60.3614318, 29.5742512], [60.3546822, 29.540391]],
        author: 'KVZN',
        type: ['WINTER']
    },
    {
        name: 'Зеркальный, Тарасовское',
        date: '2023-02-05',
        url: './maps/winter/zerkalny_tarasovskoe_winter_2023.webp',
        link: './original_maps/winter/zerkalny_tarasovskoe_winter_2023_omaps.gif',
        publish: 'https://vk.com/album-230167293_312624491',
        bounds: [[60.2599353, 29.1120529], [60.2567631, 29.1548824], [60.2451575, 29.1068172]],
        owner: 'SFSO_SPB',
        type: ['WINTER']
    },
    {
        name: 'Зеркальный',
        date: '2024-02-15',
        url: './maps/winter/zerkalny_winter_2024.webp',
        link: './original_maps/winter/zerkalny_winter_2024_omaps.jpg',
        bounds: [[60.2451575, 29.137888], [60.2447741, 29.1573286], [60.2360618, 29.1375017]],
        type: ['WINTER']
    },
    {
        name: 'Будогощь, оз Светлое',
        year: 2024,
        url: './maps/winter/budogosch_svetloe_winter_2024.webp',
        link: './original_maps/winter/budogosch_svetloe_winter_2024_omaps.gif',
        bounds: [[59.284474, 32.348299], [59.2813831, 32.3814726], [59.2736656, 32.3444366]],
        owner: 'EGRV_SRG',
        type: ['WINTER']
    },
    {
        name: 'Будогощь, Орлёнок',
        excluded: true,
        year: 2009,
        url: './maps/winter/budogosch_orlenok_winter_2009.webp',
        link: './original_maps/winter/budogosch_orlenok_winter_2009_omaps.gif',
        bounds: [[59.3117755, 32.4199247], [59.3073509, 32.4693632], [59.2950378, 32.4145174]],
        author: 'KRTSHV',
        owner: 'EGRV_SRG',
        type: ['WINTER'],
        zindex: 2
    },
    {
        name: 'Кириши, лыжная трасса Пушка',
        excluded: true,
        year: 2008,
        url: './maps/winter/kirishi_pushka_2008.webp',
        link: './original_maps/winter/kirishi_pushka_2008_omaps.gif',
        bounds: [[59.4413879, 32.0462608], [59.437984, 32.0728683], [59.4312187, 32.0432568]],
        owner: 'EGRV_SRG',
        zindex: 2,
        type: ['WINTER']
    },
    {
        name: 'Кириши, лыжная трасса',
        year: 2024,
        url: './maps/winter/kirishi_ski_track_2024.webp',
        link: './original_maps/winter/kirishi_ski_track_2024_omaps.gif',
        bounds: [[59.4402315, 31.9856644], [59.4390532, 32.0020151], [59.4215486, 31.9795704]],
        author: 'TKMKV_K',
        owner: 'EGRV_SRG',
        type: ['WINTER'],
        zindex: 2
    },
    {
        name: 'Сосновка, лыжный полигон',
        year: 2024,
        url: './maps/winter/sosnovka_winter_2024.webp',
        o_site: 'poligon2025',
        bounds: [[60.0268273, 30.3307199], [60.022539, 30.3692579], [60.0131027, 30.325098]],
        author: 'CHGRVSKY_V',
        owner: 'IMPULS',
        type: ['WINTER', 'PARK']
    },
    {
        name: 'Шуваловский парк',
        year: 2023,
        url: './maps/winter/shuvalovsky_park_winter_2023.webp',
        link: './original_maps/winter/shuvalovsky_park_winter_2023_omaps.jpg',
        bounds: [[60.0852432, 30.2917528], [60.0829317, 30.321064], [60.0692732, 30.2872038]],
        author: 'EFRMV',
        owner: 'EFRMV',
        type: ['WINTER', 'PARK']
    },
    {
        name: 'Полюстровский парк',
        year: 2026,
        url: './maps/winter/polustrovsky_park_winter_2026.webp',
        link: './original_maps/winter/polustrovsky_park_winter_2026_omaps.gif',
        o_gps: 24152,
        bounds: [[59.9687805, 30.4207134], [59.9681146, 30.4329443], [59.9633461, 30.4189539]],
        author: 'RDNV_I',
        owner: 'RDNV_I',
        type: ['WINTER', 'PARK']
    },
    {
        name: 'Кировск',
        year: 2024,
        info: 'Карта-авоська.',
        url: './maps/winter/kirovsk_winter_2024.webp',
        bounds: [[59.9088889, 31.0081387], [59.9070707, 31.0250688], [59.8989036, 31.0042334]],
        owner: 'NKLSK',
        author: 'YGNV',
        type: ['WINTER']
    },
    {
        name: 'Аньялово',
        year: 2023,
        startYear: 2024,
        info: 'ЧиП СПб, ЛГ-маркир.',
        url: './maps/winter/anyalovo_winter_2023.webp',
        link: './original_maps/winter/anyalovo_winter_2023_omaps.gif',
        o_gps: 18157,
        bounds: [[60.3125828, 30.4997635], [60.3085442, 30.5379581], [60.2993385, 30.4946136]],
        author: ['TKMKV_K','KVZN'],
        owner: 'SFSO_SPB',
        type: ['WINTER']
    },
    {
        name: 'Шапки',
        year: 2019,
        url: './maps/winter/shapki_winter_2019.webp',
        link: './original_maps/winter/shapki_winter_2019_omaps.jpg',
        bounds: [[59.5975122, 31.1715174], [59.5980768, 31.2091541], [59.5843701, 31.1723757]],
        author: 'YUDNTSV',
        type: ['WINTER']
    },
    {
        name: 'Гатчина, парк Зверинец',
        hidden: true,
        url: './maps/winter/gatchina_zverinets_winter.webp',
        bounds: [[59.5877376, 30.0937414], [59.5885414, 30.1176023], [59.5722661, 30.095458]],
        owner: 'PNKV_DNL',
        type: ['WINTER']
    },
    // --- вело ---
    {
        name: 'Дудергоф, Нагорный парк',
        year: 1999,
        url: './maps/velo/dudergof_199x.webp',
        link: './original_maps/velo/dudergof_199x_omaps.jpg',
        bounds: [[59.7036332, 30.1209497], [59.7022801, 30.1389313], [59.6922111, 30.1179028]],
        author: 'MTRNCHV',
        owner: 'MTRNCHV',
        type: ['VELO']
    },
    {
        name: 'Университет',
        year: 2025,
        url: './maps/velo/univer_velo_2025.webp',
        link: './original_maps/velo/univer_velo_2025_omaps.gif',
        bounds: [[59.9000874, 29.8243403], [59.8954382, 29.8604107], [59.887236, 29.8175168]],
        author: 'MTRNCHV',
        owner: 'MTRNCHV',
        type: ['VELO']
    },
    {
        name: 'Солнечное',
        year: 2023,
        url: './maps/velo/solnechnoe_velo_2021.webp',
        link: './original_maps/velo/solnechnoe_velo_2021_omaps.pdf',
        bounds: [[60.1629063, 29.927187], [60.1568845, 29.9785995], [60.1448376, 29.9169731]],
        author: 'MTRNCHV',
        owner: 'MTRNCHV',
        type: ['VELO']
    },
    {
        name: 'Солнечное',
        year: 2008,
        url: './maps/velo/solnechnoe_velo_2019.webp',
        link: './original_maps/velo/solnechnoe_velo_2019_omaps.jpg',
        bounds: [[60.1587638, 29.9285603], [60.155475, 29.9746943], [60.1447522, 29.9244833]],
        author: 'SHRNN',
        owner: 'SHRNN',
        type: ['VELO']
    },
    {
        name: 'Пасторское оз',
        year: 2007,
        url: './maps/velo/pastorskoe_velo_2007.webp',
        link: './original_maps/velo/pastorskoe_velo_2007_omaps.jpg',
        bounds: [[60.2504178, 30.0202274], [60.2432619, 30.0906086], [60.2251095, 30.0092411]],
        type: ['VELO']
    },
    {
        name: 'Тарховка',
        year: 2023,
        area: 4,
        url: './maps/velo/tarkhovka_velo_2023.webp',
        link: './original_maps/velo/tarkhovka_velo_2023_omaps.pdf',
        bounds: [[60.0830387, 29.9371433], [60.0771735, 29.995079], [60.0435465, 29.9184322]],
        author: 'MTRNCHV',
        owner: 'MTRNCHV',
        type: ['VELO']
    },
    {
        name: 'Удельный парк',
        year: 2023,
        url: './maps/velo/udelny_velo_2023.webp',
        link: './original_maps/velo/udelny_velo_2023_omaps.pdf',
        bounds: [[60.0167274, 30.2973747], [60.0142824, 30.325098], [60.0030844, 30.2927828]],
        author: 'MTRNCHV',
        owner: 'MTRNCHV',
        type: ['VELO']
    },
    {
        name: 'парк 9 Января',
        year: 2025,
        url: './maps/velo/9_janvarya_velo_2025.webp',
        link: './original_maps/velo/9_janvarya_velo_2025_omaps.jpg',
        bounds: [[59.8957611, 30.2743292], [59.8950292, 30.2819788], [59.8904439, 30.2727199]],
        author: 'MTRNCHV',
        owner: 'MTRNCHV',
        type: ['VELO']
    },
    {
        name: 'Екатерингоф',
        year: 2025,
        url: './maps/velo/ekateringof_velo_2025.webp',
        link: './original_maps/velo/ekateringof_velo_2025_omaps.gif',
        bounds: [[59.9072859, 30.2532148], [59.9055859, 30.2702093], [59.9003564, 30.2506828]],
        author: 'MTRNCHV',
        owner: 'MTRNCHV',
        type: ['VELO']
    },
    {
        name: 'Александрино, север',
        year: 2022,
        url: './maps/velo/aleksandrino_velo_2022.webp',
        link: './original_maps/velo/aleksandrino_velo_2022_omaps.gif',
        bounds: [[59.8472509, 30.2147627], [59.845785, 30.2323365], [59.8358562, 30.2113509]],
        author: 'MTRNCHV',
        owner: 'MTRNCHV',
        type: ['VELO']
    },
    {
        name: 'Сестрорецк, Детские Дюны',
        year: 2025,
        url: './maps/velo/sestroretsk_detskie_djuny_velo_2025.webp',
        link: './original_maps/velo/sestroretsk_detskie_djuny_velo_2025_omaps.gif',
        bounds: [[60.1234884, 29.956305], [60.1213827, 29.9746299], [60.1166148, 29.9530005]],
        author: 'MTRNCHV',
        owner: 'MTRNCHV',
        type: ['VELO']
    },
    {
        name: 'Сестрорецк, Дюны',
        year: 2025,
        url: './maps/velo/sestroretsk_djuny_velo_2025.webp',
        link: './original_maps/velo/sestroretsk_djuny_velo_2025_omaps.gif',
        bounds: [[60.1298797, 29.9386883], [60.1274323, 29.9589229], [60.1229059, 29.9352014]],
        author: 'MTRNCHV',
        owner: 'MTRNCHV',
        type: ['VELO']
    },
    {
        name: 'Сестрорецк, Ржавая канава',
        year: 2025,
        url: './maps/velo/sestroretsk_rzhava_kanava_velo_2025.webp',
        link: './original_maps/velo/sestroretsk_rzhava_kanava_velo_2025_omaps.gif',
        bounds: [[60.1284263, 29.9524212], [60.1264704, 29.9674201], [60.1230716, 29.9495673]],
        author: 'MTRNCHV',
        owner: 'MTRNCHV',
        type: ['VELO']
    },
    {
        name: 'Сестрорецк, КаУР',
        year: 2024,
        url: './maps/velo/sestroretsk_kaur_velo_2024.webp',
        link: './original_maps/velo/sestroretsk_kaur_velo_2024_omaps.gif',
        bounds: [[60.1202709, 29.9692118], [60.1198915, 29.9750912], [60.1128995, 29.9656284]],
        author: 'MTRNCHV',
        owner: 'MTRNCHV',
        type: ['VELO']
    },
    {
        name: 'Сестрорецк, парк Дубки',
        year: 2024,
        url: './maps/velo/sestroretsk_dubki_velo_2024.webp',
        link: './original_maps/velo/sestroretsk_dubki_velo_2024_omaps.gif',
        bounds: [[60.0957501, 29.9224877], [60.0929525, 29.9458122], [60.0879612, 29.9185824]],
        author: 'MTRNCHV',
        owner: 'MTRNCHV',
        type: ['VELO']
    },
    {
        name: 'Песочная',
        year: 2019,
        url: './maps/velo/pesochnaya_velo_2019.webp',
        link: './original_maps/velo/pesochnaya_velo_2019_omaps.gif',
        bounds: [[60.1237449, 30.1111221], [60.119854, 30.1625347], [60.1068739, 30.1064444]],
        author: ['VSLVSKY','DRBSHV','SHKLV','MTRNCHV'],
        owner: 'MTRNCHV',
        type: ['VELO']
    },
    {
        name: 'Зеленогорск, Чёрные оз',
        year: 2025,
        url: './maps/velo/zelenogorsk_chernye_velo_2025.webp',
        link: './original_maps/velo/zelenogorsk_chernye_velo_2025_omaps.gif',
        bounds: [[60.2373614, 29.7596025], [60.2281783, 29.8368931], [60.2108704, 29.7471571]],
        author: 'MTRNCHV',
        owner: 'MTRNCHV',
        type: ['VELO']
    },
    {
        name: 'Пухтолова гора',
        year: 2009, //Реально более ранняя
        url: './maps/velo/pukhtolova_gora_velo.webp',
        link: './original_maps/velo/pukhtolova_gora_velo_omaps.jpg',
        bounds: [[60.2560392, 29.6344185], [60.2513548, 29.6914959], [60.2287323, 29.6253204]],
        author: ['BLZRV_V','URVNTSV','NKFRV_A'],
        type: ['VELO']
    },
    {
        name: 'Пухтолова гора',
        year: 2024,
        url: './maps/velo/pukhtolova_gora_velo_2024.webp',
        link: './original_maps/velo/pukhtolova_gora_velo_2024_omaps.gif',
        bounds: [[60.2570825, 29.6373367], [60.250141, 29.6912384], [60.2287749, 29.6237326]],
        author: 'MTRNCHV',
        owner: 'MTRNCHV',
        type: ['VELO']
    },
    {
        name: 'Пухтолова гора',
        year: 2025,
        url: './maps/velo/pukhtolova_gora_velo_2025.webp',
        link: './original_maps/velo/pukhtolova_gora_velo_2025_omaps.gif',
        bounds: [[60.2445399, 29.6313715], [60.2388526, 29.6784925], [60.228711, 29.6246767]],
        author: 'KUZNTSV_R',
        owner: 'SFSO_SPB',
        type: ['VELO']
    },
    {
        name: 'Зеленогорск, Красавица',
        url: './maps/velo/zelik_krasavitsa_velo.webp',
        link: './original_maps/velo/zelik_krasavitsa_velo_omaps.jpg',
        bounds: [[60.2562947, 29.732523], [60.253186, 29.7886562], [60.2348474, 29.7259569]],
        author: 'TKMKV_K',
        type: ['VELO']
    },
    {
        name: 'Рощино',
        year: 2025,
        url: './maps/velo/roschino_velo_2025.webp',
        link: './original_maps/velo/roschino_velo_2025_omaps.gif',
        bounds: [[60.2793237, 29.5635223], [60.277813, 29.6025753], [60.2650017, 29.5617199]],
        author: 'KUZNTSV_R',
        owner: 'SFSO_SPB',
        type: ['VELO']
    },
    {
        name: 'Зеленогорск, Щучье оз',
        year: 2025,
        url: './maps/velo/zelik_schuchje_velo_2025.webp',
        link: './original_maps/velo/zelik_schuchje_velo_2025_omaps.gif',
        info: 'Территория ООПТ.',
        bounds: [[60.2332495, 29.7486591], [60.2258341, 29.8119164], [60.2024689, 29.7341108]],
        author: ['SHRNN','KUZNTSV_S','KUZNTSV_R'],
        owner: 'SFSO_SPB',
        type: ['VELO']
    },
    {
        name: 'Зеленогорск, Щучье оз',
        year: 2012,
        url: './maps/velo/zelik_schuchje_velo_2010.webp',
        link: './original_maps/velo/zelik_schuchje_velo_2010_omaps.jpg',
        bounds: [[60.2301813, 29.7452259], [60.2256636, 29.7994709], [60.2048574, 29.7358704]],
        author: ['SHRNN','IBRGMV','GLTV_Y'],
        type: ['VELO']
    },
    {
        name: 'Цвелодубово, Нахимовская т/б',
        year: 2015,
        url: './maps/velo/tsvelodubovo_nakhimovskaya_tb_velo.webp',
        link: './original_maps/velo/tsvelodubovo_nakhimovskaya_tb_velo_omaps.jpg',
        bounds: [[60.3861682, 29.5448971], [60.3841535, 29.5624065], [60.3726567, 29.5391893]],
        author: ['SHRNN','RYLOV_V'],
        owner: 'SHRNN',
        type: ['VELO']
    },
    {
        name: 'Токсово, ВИФК',
        year: 2013,
        url: './maps/velo/toksovo_vifk_2013_velo.webp',
        link: ['./original_maps/velo/toksovo_vifk_2013_velo_full_1.jpg','./original_maps/velo/toksovo_vifk_2013_velo_full_2.jpg'],
        bounds: [[60.1951959, 30.5548239], [60.1928281, 30.5923748], [60.173175, 30.5508757]],
        author: ['SHRNN','CHGRVSKY_Y'],
        owner: 'SHRNN',
        type: ['VELO']
    },
    {
        name: 'Воейково',
        info: 'Карта рисовалась для Этапа Кубка Мира.',
        url: './maps/velo/voejkovo_velo.webp',
        link: './original_maps/velo/voejkovo_velo_omaps.jpg',
        photo: './tracks/pavlovo/pic_3.jpg',
        bounds: [[59.9966685, 30.6621552], [59.993707, 30.7253265], [59.9377733, 30.6513405]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        type: ['VELO']
    },
    {
        name: 'Каннельярви, оз Исток',
        year: 2006,
        url: './maps/velo/kanneljarvi_velo_2006.webp',
        info: 'Соревнования посвящённые памяти Бориса Панкратьева.',
        link: ['./original_maps/velo/kanneljarvi_velo_omaps.jpg','./original_maps/velo/kanneljarvi_velo_2006_omaps.gif'],
        bounds: [[60.3783208, 29.2834568], [60.3706412, 29.3795013], [60.34326, 29.2721272]],
        author: ['VSLVSKY','SHRNN','RYLOV_V'],
        owner: 'RYLOV_V',
        type: ['VELO']
    },
    {
        name: 'Суоранда',
        year: 2006,
        url: './maps/velo/suoranda_2006.webp',
        link: './original_maps/velo/suoranda_2006_omaps.jpg',
        photo: 'tracks/koltushi_kamy/pic_3.jpg',
        bounds: [[59.9662675, 30.6094122], [59.9638831, 30.6600952], [59.9472311, 30.6065798]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        type: ['VELO']
    },
    {
        name: 'Сестрорецк, Таможенная дорога',
        excluded: true,
        date: '2008-04-27',
        url: './maps/velo/sestroretsk_tamozhennaya_doroga_velo_2008.webp',
        link: './original_maps/velo/sestroretsk_tamozhennaya_doroga_velo_2008_omaps.jpg',
        info: 'Кубок MTBO SPb Club.',
        o_site: '080427_mtbo',
        bounds: [[60.1390689, 29.9373579], [60.1371672, 29.9634719], [60.1276995, 29.9346542]],
        author: 'SHRNN',
        type: ['VELO'],
    },
    {
        name: 'Сестрорецк, Таможенная дорога',
        year: 2021,
        url: './maps/velo/sestroretsk_tamozhennaya_doroga_velo_2021.webp',
        link: './original_maps/velo/sestroretsk_tamozhennaya_doroga_velo_2021_omaps.jpg',
        bounds: [[60.1380967, 29.9502325], [60.1372633, 29.9629354], [60.1284797, 29.9474001]],
        author: ['SHRNN','KUZNTSV_R'],
        type: ['VELO'],
    },
    {
        name: 'Сосново, Чёрный лес',
        date: '2006-06-03',
        info: 'ЧиП СПб.',
        o_site: '06060203_MTB',
        url: './maps/velo/sosnovo_black_forest_velo_2006.webp',
        link: './original_maps/velo/sosnovo_black_forest_velo_2006_omaps.jpg',
        bounds: [[60.5406095, 30.2454042], [60.537549, 30.3184032], [60.4962353, 30.2393103]],
        type: ['VELO']
    },
    {
        name: '69км, ДНТ "Свердловец", Осиновское оз',
        year: 2021,
        info: '210605_MTBO_klass.',
        o_site: '210605_MTBO_klass',
        url: './maps/velo/sverdlovets_velo_2021.webp',
        o_gps: 13866,
        link: ['./original_maps/velo/sverdlovets_velo_2021_omaps.jpg','./original_maps/velo/sverdlovets_velo_2022_omaps.gif'],
        bounds: [[60.5166875, 30.2754021], [60.5145541, 30.3105068], [60.4960239, 30.2696085]],
        author: ['DBRTSV_V','SHLKHN_AN','AKSNVA','AKSNV'],
        type: ['VELO']
    },
    {
        name: 'Орехово, Фигурное оз',
        year: 2022,
        o_gps: {
            '2022-08':13837,
            '2020-08-16':7997,
            '2020-08-15':7988
        },
        url: './maps/velo/orekhovo_figurnoe_velo_2020.webp',
        link: ['./original_maps/velo/orekhovo_figurnoe_velo_2022_omaps.gif','./original_maps/velo/orekhovo_figurnoe_velo_2020_omaps.gif'],
        bounds: [[60.4637134, 30.2787495], [60.4597569, 30.3314924], [60.44363, 30.2728271]],
        type: ['VELO']
    },
    {
        name: 'Запорожское',
        year: 2022,
        o_gps: 13849,
        url: './maps/velo/zaporozhskoe_velo_2022.webp',
        link: './original_maps/velo/zaporozhskoe_velo_2022_2022_omaps.gif',
        bounds: [[60.6134277, 30.5464554], [60.6051717, 30.6420708], [60.5614977, 30.5271435]],
        type: ['VELO']
    },
    {
        name: 'Осиновая Роща',
        year: 2020,
        url: './maps/velo/osinovaja_roscha_velo_2020.webp',
        link: './original_maps/velo/osinovaja_roscha_velo_2020_omaps.jpg',
        o_gps: 8327,
        bounds: [[60.1228898, 30.2403402], [60.1207947, 30.2665615], [60.11036, 30.2366924]],
        owner: 'SHLKHN_AN',
        type: ['VELO']
    },
    {
        name: 'Шуваловский парк',
        year: 2021,
        url: './maps/velo/shuvalovsky_park_velo_2021.webp',
        link: './original_maps/velo/shuvalovsky_park_velo_2021_omaps.jpg',
        bounds: [[60.084965, 30.295701], [60.0831029, 30.3219652], [60.068952, 30.2912378]],
        type: ['VELO','PARK']
    },
    {
        name: 'Ново-орловский парк',
        date: '2014-05-25',
        o_site: '140525v',
        info: 'ЧиП ЛО по вело-О, спринт.',
        url: './maps/velo/novoorlovsky_park_velo_2014.webp',
        link: './original_maps/velo/novoorlovsky_park_velo_2014_omaps.webp',
        bounds: [[60.0567444, 30.2649307], [60.0571942, 30.2994347], [60.0348021, 30.2666044]],
        type: ['VELO','PARK'],
        author: ['SHRNN','MLSHV_Y','KUZNTSV_V','BNDRNK']
    },
    {
        name: 'Лосево',
        year: 2021,
        info: 'BondCup.',
        o_site: '210612v',
        url: './maps/velo/losevo_velo_2021.webp',
        link: './original_maps/velo/losevo_velo_2021_omaps.jpg',
        bounds: [[60.6883931, 29.9304914], [60.6836026, 29.9803591], [60.6717282, 29.9234962]],
        type: ['VELO']
    },
    {
        name: 'Сосново, оз Уловное',
        year: 2021,
        info: 'BondCup.',
        o_site: '210619_mtbo',
        url: './maps/velo/sosnovo_ulovnoe_velo_2021.webp',
        link: './original_maps/velo/sosnovo_ulovnoe_velo_2021_omaps.jpg',
        bounds: [[60.6063091, 30.223217], [60.6037604, 30.2590942], [60.5820563, 30.2157497]],
        type: ['VELO']
    },
    {
        name: 'Лемболово',
        year: 2019,
        excluded: true,
        url: './maps/velo/lembolovo_velo_2019.webp',
        link: './original_maps/velo/lembolovo_velo_2019_omaps.jpeg',
        info: '<a href="https://vk.com/lembolovomarathon">Лемболовский веломарафон "Горные вершины"</a>.',
        start: 'KVMLO',
        o_gps: 6347,
        bounds: [[60.4324083, 30.2508545], [60.4456198, 30.3153992], [60.3915118, 30.2850151]],
        type: ['VELO']
    },
    {
        name: 'Лемболово',
        year: 2023,
        url: './maps/velo/lembolovo_velo_2023.webp',
        link: './original_maps/velo/lembolovo_velo_2023_omaps.gif',
        bounds: [[60.435627, 30.2808952], [60.4320695, 30.337801], [60.3865075, 30.2680206]],
        type: ['VELO'],
        author: ['VRBY','KVZN','TKMKV_K','NSNV','KUZNTSV_R','STRGNV'],
        owner: 'SFSO_SPB'
    },
    {
        name: 'Лемболово, юг',
        date: '2025-10-11',
        url: './maps/velo/lembolovo_velo_relay_2025.webp',
        link: './original_maps/velo/lembolovo_velo_relay_2025_omaps.gif',
        info: 'ЧиП СПб, эстафеты.',
        o_site: '251011_velo',
        bounds: [[60.4154626, 30.3235102], [60.4157593, 30.3399038], [60.4032351, 30.3197336]],
        type: ['VELO'],
        author: ['TKMKV_K','KUZNTSV_R'],
        owner: 'SFSO_SPB'
    },
    {
        name: 'Лемболово, восток',
        date: '2007-06-28',
        url: './maps/velo/lembolovo_russia_2007.webp',
        link: './original_maps/velo/lembolovo_russia_2007_omaps.jpg',
        info: 'MTBO Чемпионат России.',
        bounds: [[60.4456622, 30.319519], [60.4421481, 30.3811455], [60.4019739, 30.3081679]],
        type: ['VELO'],
        region: 'SPB',
        start: 'RUSSIA_CHAMP'
    },
    {
        name: 'Силанде',
        date: '2005-07-23',
        url: './maps/velo/silande_velo_2005.webp',
        link: './original_maps/velo/silande_velo_2005_omaps.jpg',
        info: 'ЧиП СПб.',
        o_site: '05072324_mtbo',
        bounds: [[60.4062235, 30.2478933], [60.405185, 30.2812386], [60.3798692, 30.2427006]],
        type: ['VELO'],
    },
    {
        name: 'Силанде',
        year: 2025,
        url: './maps/velo/silande_velo_2025.webp',
        link: './original_maps/velo/silande_velo_2025_omaps.gif',
        publish: 'https://vk.com/album-230167293_313631286',
        bounds: [[60.4219666, 30.2541161], [60.4188101, 30.2890062], [60.3916603, 30.2433014]],
        type: ['VELO'],
        author: ['CHGRVSKY_V','DBRTSV_V','KUZNTSV_R'],
        owner: 'SFSO_SPB'
    },
    {
        name: 'Зеркальный',
        year: 2023,
        url: './maps/velo/zerkalny_velo_2023.webp',
        link: './original_maps/velo/zerkalny_velo_2023_omaps.gif',
        bounds: [[60.2280717, 29.1041565], [60.2224242, 29.1801596], [60.1968383, 29.0954018]],
        type: ['VELO'],
        author: ['KVZN','NSNV','TKMKV_K','TKMKVA_P','KUZNTSV_R'],
        owner: 'SFSO_SPB'
    },
    {
        name: 'Поляны, Семиозерье',
        year: 2023,
        url: './maps/velo/poljany_velo_2023.webp',
        link: './original_maps/velo/poljany_velo_2023_omaps.gif',
        info: 'Частично территория ООПТ.',
        bounds: [[60.318066, 29.2829418], [60.3110099, 29.3755531], [60.2888966, 29.2683506]],
        type: ['VELO'],
        author: ['SHRNN','DBRTSV_V','KUZNTSV_R'],
        owner: 'SFSO_SPB'
    },
    {
        name: 'Красная горка',
        year: 2022,
        url: './maps/velo/krasna_gorka_velo_2022.webp',
        link: './original_maps/velo/krasna_gorka_velo_2022_omaps.gif',
        info: 'Частично территория ООПТ.',
        bounds: [[59.9789702, 29.325707], [59.9759855, 29.3574429], [59.9714007, 29.3232822]],
        author: ['DBRTSV_V','MKHLV_A','KUZNTSV_R'],
        owner: 'YUVENTA',
        type: ['VELO']
    },
    {
        name: 'Лебяжье',
        year: 2026,
        url: './maps/velo/lebyazhje_velo_2026.webp',
        link: './original_maps/velo/lebyazhje_velo_2026_omaps.gif',
        bounds: [[59.9654405, 29.4066882], [59.9654297, 29.4212151], [59.9611442, 29.4066668]],
        author: 'ALKSV_E',
        owner: 'ALKSV_E',
        type: ['VELO']
    },
    {
        name: 'Лебяжье, ДНТ Возрождение',
        year: 2026,
        url: './maps/velo/vozrozhdenie_velo_2026.webp',
        link: './original_maps/velo/vozrozhdenie_velo_2026_omaps.gif',
        bounds: [[59.9709926, 29.3619919], [59.970896, 29.390552], [59.9607038, 29.3621206]],
        author: 'ALKSV_E',
        owner: 'ALKSV_E',
        type: ['VELO']
    },

    // --- гидро-рельефные ---
    {
        name: 'Токсово, Оригон-1',
        url: './maps/relief/toksovo_origon_1.webp',
        link: './original_maps/relief/toksovo_origon_1_omaps.jpg',
        bounds: [[60.1496655, 30.4916954], [60.1459913, 30.5322075], [60.1126055, 30.4837132]],
        author: 'CHGRVSKY_V',
        type: ['RELIEF']
    },
    {
        name: 'Токсово, Оригон-2',
        year: 1,
        url: './maps/relief/toksovo_origon_2.webp',
        link: './original_maps/relief/toksovo_origon_2_omaps.jpg',
        bounds: [[60.1597888, 30.3927326], [60.1529548, 30.5108356], [60.127443, 30.3850937]],
        author: ['CHGRVSKY_V','AZBKNA','CHGRVSKY_Y'],
        type: ['RELIEF']
    },
    {
        name: 'Токсово, Оригон-3',
        year: 1985,
        url: './maps/relief/toksovo_origon_3.webp',
        link: './original_maps/relief/toksovo_origon_3_omaps.jpg',
        bounds: [[60.1929987, 30.6103992], [60.1898841, 30.6626701], [60.1487256, 30.5995846]],
        author: ['CHGRVSKY_V','AZBKNA','KLCHTSKA','RDKV','CHGRVSKY_Y'],
        type: ['RELIEF']
    },
    {
        name: 'Токсово, Малиновая гора',
        year: 1997,
        url: './maps/relief/toksovo_malinovaja_gora.webp',
        link: './original_maps/relief/toksovo_malinovaja_gora_1997_omaps.jpg',
        bounds: [[60.1772944, 30.4641008], [60.1745411, 30.501523], [60.1641447, 30.4603243]],
        author: ['DBRTSV_V','CHGRVSKY_Y'],
        type: ['RELIEF']
    },
    {
        name: 'Первомайское',
        year: 2014,
        url: './maps/relief/pervomayskoe_2014.webp',
        bounds: [[60.42006, 29.6882772], [60.4180474, 29.7251844], [60.4031503, 29.6838999]],
        author: ['SLBDNK','MKHLV_A','GVRLK'],
        owner: 'WN',
        type: ['RELIEF']
    },
    {
        name: 'Лемболово, с-в',
        excluded: true,
        year: 1989,
        url: './maps/relief/lembolovo_north_east_relief_1989.webp',
        link: './original_maps/relief/lembolovo_north_east_relief_1989_omaps.jpg',
        bounds: [[60.4470169, 30.3050995], [60.4421057, 30.3800297], [60.4200812, 30.2979755]],
        author: ['BYMKV','SMRNV_A','KCHTV','IVNV_A','TLNV_A','OSTPNK','EGRV_E'],
        areas: [62,20,10,5,1,1,1],
        type: ['RELIEF']
    },
    {
        name: 'Юкки',
        excluded: true,
        year: 1988,
        url: './maps/relief/yukki_relief_1988.webp',
        link: './original_maps/relief/yukki_relief_1988_omaps.jpg',
        bounds: [[60.1338549, 30.267849], [60.1297087, 30.3462982], [60.1103386, 30.26227]],
        author: ['SHLKHN_Y','BZNV_A'],
        type: ['RELIEF']
    },
    // прочие
    {
        name: 'Сосново, оз Уловное',
        year: 1981,
        excluded: true,
        info: 'Азимутный полигон.',
        url: './maps/forest/sosnovo/sosnovo_ulovnoe_oz_azimut_1981.webp',
        link: './original_maps/forest/sosnovo/sosnovo_ulovnoe_oz_azimut_1981_omaps.jpg',
        bounds: [[60.6048136, 30.2155781], [60.6023701, 30.2596951], [60.5846911, 30.2107286]],
        author: ['ARTMV','YKVLVA']
    },
];
