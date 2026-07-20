// types can be ROGAINE, SPRINT, CITY, RELIEF
let toksovoMaps = [
    // --- ТОКСОВО ---
    {
        name: 'Рапполово',
        date: '1963-03-10',
        url: './maps/forest/toksovo/rappolovo_1963.webp',
        link: './original_maps/forest/toksovo/rappolovo_1963_omaps.webp',
        bounds: [[60.1627782, 30.3533363], [60.1627782, 30.478735], [60.1308201, 30.3528214]],
        info: 'П-во Ленинграда.'
    },
    {
        name: 'Сярьги',
        year: 1964,
        url: './maps/forest/toksovo/sjargi_1964.webp',
        link: './original_maps/forest/toksovo/sjargi_1964_omaps.jpg',
        bounds: [[60.1453076, 30.4184818], [60.1483838, 30.4851723], [60.1217568, 30.4219151]],
        info: 'П-во Ленинграда среди школьников.'
    },
    {
        name: 'Сярьги',
        date: '1971-02-07',
        url: './maps/forest/toksovo/sjargi_1971_lomo.webp',
        link: './original_maps/forest/toksovo/sjargi_1971_lomo_omaps.jpg',
        bounds: [[60.1361415, 30.4022598], [60.1364193, 30.4662895], [60.1147439, 30.4048347]],
        info: 'П-во ЛОМО. <a href="./docs/1971/1971_02_07_lomo_omaps.pdf">Результаты</a>.'
    },
    {
        name: 'оз Хепоярви, восток',
        year: 1985,
        area: 8.6,
        url: './maps/forest/toksovo/hepojarvi_east_1985.webp',
        link: './original_maps/forest/toksovo/hepojarvi_east_1985_omaps.webp',
        bounds: [[60.1934254, 30.6091118], [60.1899694, 30.662241], [60.1489819, 30.5987263]],
        author: ['CHGRVSKY_V','CHGRVSKY_Y','AZBKNA','KLCHTSKA','RDKV'],
        areas: [40,40,10,5,5]
    },
    {
        name: 'Токсово, оз Хепоярви, гора Самурай',
        year: 1992,
        url: './maps/forest/toksovo/toksovo_hepojarvI_south_1992.webp',
        link: './original_maps/forest/toksovo/toksovo_hepojarvI_south_1992_omaps.jpg',
        bounds: [[60.1646571, 30.5262852], [60.157995, 30.5983829], [60.1335984, 30.5148697]],
        author: ['CHGRVSKY_V','CHGRVSKY_Y','DBRTSV_V','GRBTNKV','KPRNKO','PSTKN_M'],
        areas: [35,35,15,5,5,5]
    },
    {
        name: 'Токсово, Малиновая гора',
        year: 1983,
        area: 5.6,
        url: './maps/forest/toksovo/toksovo_malinovaya_gora_1983.webp',
        link: './original_maps/forest/toksovo/toksovo_malinovaya_gora_1983_omaps.jpg',
        bounds: [[60.1867264, 30.4547882], [60.1770382, 30.5080891], [60.1623085, 30.4390812]],
        author: 'SHRNN'
    },
    {
        name: 'Токсово, Малиновая гора',
        year: 1997,
        url: './maps/forest/toksovo/toksovo_malinovaya_gora_1997.webp',
        link: './original_maps/forest/toksovo/toksovo_malinovaya_gora_1997_omaps.jpg',
        bounds: [[60.1808797, 30.4627705], [60.1771663, 30.5142689], [60.1485547, 30.4504108]],
        author: ['DBRTSV_V','CHGRVSKY_Y']
    },
    {
        name: 'Сярьги, Охта-Парк',
        year: 1983,
        url: './maps/forest/toksovo/sjargi_1985.webp',
        link: ['./original_maps/forest/toksovo/sjargi_1983_omaps.jpg','./original_maps/forest/toksovo/sjargi_1986_omaps.webp'],
        bounds: [[60.15902, 30.3917027], [60.1526985, 30.4692078], [60.129153, 30.3832054]],
        author: ['CHGRVSKY_V','CHGRVSKY_Y','AZBKNA'],
        areas: [70,20,10],
        qtty: 20
    },
    {
        name: 'Кузьмолово',
        year: 1981,
        url: './maps/forest/toksovo/kuzmolovo_1981.webp',
        link: './original_maps/forest/toksovo/kuzmolovo_1981_omaps.jpg',
        bounds: [[60.1534247, 30.4650879], [60.1464185, 30.5110931], [60.1147439, 30.4449177]],
        author: ['BYMKV','DRKHV']
    },
    {
        name: 'Токсово',
        year: 1991,
        url: './maps/forest/toksovo/toksovo_1991.webp',
        link: ['./original_maps/forest/toksovo/toksovo_1991_omaps.jpg','./original_maps/forest/toksovo/toksovo_1991_omaps.webp'],
        bounds: [[60.1618387, 30.438652], [60.1577387, 30.5124664], [60.1144873, 30.4284382]],
        author: ['CHGRVSKY_V','CHGRVSKY_Y','GRBTNKV','DBRTSV_V'],
        areas: [45,45,5,5]
    },
    {
        name: 'Сярьги',
        year: 1991,
        url: './maps/forest/toksovo/sjargi_1991.webp',
        link: './original_maps/forest/toksovo/sjargi_1991_omaps.jpg',
        bounds: [[60.1678596, 30.3877544], [60.1620522, 30.4757309], [60.128469, 30.3732491]],
        author: ['CHGRVSKY_V','CHGRVSKY_Y','DBRTSV_S','GRBTNKV','GUSEV_I','BNDRNK'],
        areas: [40,40,5,5,5,5]
    },
    {
        name: 'оз Тинускеньярви',
        year: 1984,
        url: './maps/forest/toksovo/tinjuskenjarvi_1984.webp',
        link: './original_maps/forest/toksovo/tinjuskenjarvi_1984_omaps.webp',
        bounds: [[60.2650229, 30.547142], [60.2613616, 30.601902], [60.2312041, 30.5390739]],
        author: 'BYMKV'
    },
    {
        name: 'Ново-Токсово - Топкое оз',
        year: 1,
        url: './maps/forest/toksovo/novo_toksovo_topkoe_old.webp',
        link: ['./original_maps/forest/toksovo/novo_toksovo_topkoe_old_omaps.jpg','./original_maps/forest/toksovo/novo_toksovo_topkoe_retro_omaps.webp','./original_maps/forest/toksovo/novo_toksovo_topkoe_retro_winter_omaps.webp'],
        bounds: [[60.2411958, 30.5646086], [60.239939, 30.5958509], [60.2230423, 30.5627203]]
    },
    {
        name: 'Ново-Токсово - оз Лассылампи',
        year: 1984,
        url: './maps/forest/toksovo/lassylampi_1984.webp',
        link: './original_maps/forest/toksovo/lassylampi_1984_omaps.webp',
        bounds: [[60.2432193, 30.5631924], [60.2410893, 30.6071377], [60.2121922, 30.5553818]],
        author: 'BYMKV'
    },
    {
        name: 'Ново-Токсово - оз Лазурное',
        year: 1985,
        url: './maps/forest/toksovo/toksovo_lazurnoe_1985.webp',
        link: './original_maps/forest/toksovo/toksovo_lazurnoe_1985_omaps.jpg',
        bounds: [[60.213514, 30.5569267], [60.2101241, 30.6007004], [60.1816906, 30.5472279]],
        author: ['BYMKV','DVRKO_V']
    },
    {
        name: 'Школьное оз',
        year: 2007,
        url: './maps/forest/toksovo/schkolnoe_oz_2007.webp',
        link: './original_maps/forest/toksovo/schkolnoe_oz_2007_omaps.jpg',
        bounds: [[60.1471876, 30.5722475], [60.1443463, 30.603919], [60.129324, 30.5660248]],
        author: 'CHGRVSKY_V',
        editor: 'FDRV_L',
        owner: 'GUSEV_I'
    },
    {
        name: 'Энколово - север',
        year: 1985,
        url: './maps/forest/toksovo/enkolovo_1985.webp',
        link: ['./original_maps/forest/toksovo/enkolovo_1985_omaps.webp','./original_maps/forest/toksovo/enkolovo_1985_100_omaps.webp'],
        bounds: [[60.1325299, 30.4084396], [60.1303713, 30.4441452], [60.1133753, 30.4065514]],
        author: ['MLVA_M','KAZNTSVA_O']
    },
    {
        name: 'Кавголово',
        year: 1,
        url: './maps/forest/toksovo/kavgolovo_bw.webp',
        link: './original_maps/forest/toksovo/kavgolovo_bw_omaps.jpg',
        bounds: [[60.182843, 30.5354691], [60.1769315, 30.5552959], [60.1599596, 30.5127239]]
    },
    {
        name: 'Кавголово',
        year: 1972,
        url: './maps/forest/toksovo/kavgolovo_1972.webp',
        link: './original_maps/forest/toksovo/kavgolovo_1972_omaps.jpg',
        info: 'Труд-Буревестник, эстафета. Первая самостоятельная карта А.Шириняна.',
        bounds: [[60.1765047, 30.5206203], [60.1770382, 30.5428505], [60.1657033, 30.5212212]],
        author: 'SHRNN'
    },
    {
        name: 'Токсово, юг Хепоярви',
        year: 1975,
        start: 'USSR_V_1975',
        url: './maps/forest/toksovo/kavgolovo_verojarvi_1975.webp',
        link: ['./original_maps/forest/toksovo/kavgolovo_verojarvi_1975_clean_omaps.jpg','./original_maps/forest/toksovo/kavgolovo_verojarvi_1975_omaps.jpg'],
        bounds: [[60.1727267, 30.5343533], [60.1692686, 30.6199265], [60.1420602, 30.5296326]]
    },
    {
        name: 'Токсово, юг Хепоярви',
        year: 1975,
        start: 'USSR_V_1975',
        url: './maps/forest/toksovo/kavgolovo_hepojarvi_1975.webp',
        link: './original_maps/forest/toksovo/kavgolovo_hepojarvi_1975_omaps.jpg',
        bounds: [[60.1644436, 30.5522919], [60.1624793, 30.6148624], [60.1385561, 30.5500603]]
    },
    {
        name: 'Токсово, юг Хепоярви',
        year: 1975,
        url: './maps/forest/toksovo/kavgolovo_hepojarvi_retro.webp',
        link: ['./original_maps/forest/toksovo/kavgolovo_hepojarvi_retro_omaps.jpg','./original_maps/forest/toksovo/kavgolovo_hepojarvi_1975_omaps.webp'],
        start: 'USSR_V_1975',
        info: 'Одна из двух первых цветных карт в Ленинграде.',
        bounds: [[60.1644436, 30.5522919], [60.1624793, 30.6148624], [60.1385561, 30.5500603]],
        author: 'BYMKV'
    },
    {
        name: 'Энколово',
        year: 1975,
        start: 'USSR_V_1975',
        url: './maps/forest/toksovo/enkolovo_1975.webp',
        link: './original_maps/forest/toksovo/enkolovo_1975_omaps.jpg',
        bounds: [[60.1328291, 30.4104137], [60.1311621, 30.4459476], [60.1141237, 30.4104567]],
        author: ['MLVA_M','KAZNTSVA_O']
    },
    {
        name: 'Энколово - север',
        year: 1999,
        url: './maps/forest/toksovo/enkolovo_1999.webp',
        link: './original_maps/forest/toksovo/enkolovo_1999_omaps.jpg',
        bounds: [[60.1358209, 30.4085255], [60.1325085, 30.4544449], [60.1120281, 30.4002857]],
        author: ['CHGRVSKY_V','CHGRVSKY_Y','DRBSHV']
    },
    {
        name: 'Энколово - юг',
        url: './maps/forest/toksovo/enkolovo_south.webp',
        link: './original_maps/forest/toksovo/enkolovo_south_omaps.jpg',
        bounds: [[60.1096329, 30.4239321], [60.1160268, 30.4656458], [60.1013339, 30.4268074]],
        author: ['KCHTV','OSTPNK']
    },
    {
        name: 'Токсово',
        year: 1989,
        url: './maps/forest/toksovo/toksovo_malinovaya_gora_1989_winter.webp',
        link: './original_maps/forest/toksovo/toksovo_malinovaya_gora_1989_winter_omaps.jpg',
        bounds: [[60.186385, 30.4462051], [60.1808797, 30.5298901], [60.1490246, 30.4367638]],
        author: ['DBRTSV_V','CHGRVSKY_Y','BSTRV_A','GBNV_A','KRPLSN','GRBTNKV','DBRTSV_S','GUSEV_I'],
        logo: 'ski_retro.gif',
        type: ['WINTER']
    },
    {
        name: 'Токсово',
        year: 1989,
        url: './maps/forest/toksovo/toksovo_malinovaya_gora_1989.webp',
        link: './original_maps/forest/toksovo/toksovo_malinovaya_gora_1989_omaps.jpg',
        bounds: [[60.1868971, 30.4462051], [60.181776, 30.5038404], [60.1572689, 30.4398966]],
        author: ['CHGRVSKY_Y','DBRTSV_V','GBNV_A','KRPLSN','GRBTNKV','DBRTSV_S'],
    },
    {
        name: 'Токсово',
        year: 1989,
        url: './maps/forest/toksovo/toksovo_1989.webp',
        link: ['./original_maps/forest/toksovo/toksovo_1989_omaps.jpg','./original_maps/forest/toksovo/toksovo_1989_10000_omaps.jpg'],
        bounds: [[60.1627569, 30.4730701], [60.1601945, 30.5116081], [60.1466108, 30.4692078]],
        author: ['CHGRVSKY_Y','DBRTSV_V','KRPLSN','BSTRV_A','BRSVA_I','GUSEV_I'],
        areas: [40,30,5,5,10,10]
    },
    {
        name: 'Токсово - Кузьмолово,запад',
        year: 1983,
        url: './maps/forest/toksovo/toksovo_south_west_1983.webp',
        link: './original_maps/forest/toksovo/toksovo_south_west_1983_omaps.jpg',
        bounds: [[60.1545353, 30.4499817], [60.151417, 30.510664], [60.1137602, 30.4410553]],
        author: ['CHGRVSKY_V','CHGRVSKY_Y'],
        areas: [80,20]
    },
    {
        name: 'Токсово - Кузьмолово',
        year: 1982,
        url: './maps/forest/toksovo/toksovo_south_1982.webp',
        link: './original_maps/forest/toksovo/toksovo_south_1982_omaps.jpg',
        bounds: [[60.1489819, 30.4759026], [60.1462476, 30.531435], [60.1129904, 30.4678345]],
        author: ['CHGRVSKY_V','CHGRVSKY_Y']
    },
    {
        name: 'Токсово - Кузьмолово, восток',
        year: 1,
        url: './maps/forest/toksovo/kuzmolovo_east_old.webp',
        link: './original_maps/forest/toksovo/kuzmolovo_east_old_omaps.jpg',
        bounds: [[60.1485333, 30.5110073], [60.1418252, 30.5350399], [60.1186995, 30.4815674]],
        author: 'CHGRVSKY_V'
    },
    {
        name: 'Токсово - Кузьмолово, восток',
        year: 1987,
        url: './maps/forest/toksovo/kuzmolovo_1987.webp',
        link: './original_maps/forest/toksovo/kuzmolovo_1987_omaps.jpg',
        bounds: [[60.1486829, 30.4940128], [60.1462903, 30.5304909], [60.1161123, 30.4868031]],
        author: ['CHGRVSKY_V','CHGRVSKY_Y'],
        areas: [60,40]
    },
    {
        name: 'Токсово, запад Хепоярви',
        year: 1989,
        area: 4,
        url: './maps/forest/toksovo/toksovo_hepojarvi_west_1987.webp',
        link: './original_maps/forest/toksovo/toksovo_hepojarvi_west_1987_omaps.webp',
        bounds: [[60.1963691, 30.5437088], [60.1927001, 30.5894566], [60.1579096, 30.5340099]],
        author: ['CHGRVSKY_V','BRNVA','DBRTSV_V','KRPLSN'],
        areas: [80,10,5,5]
    },
    {
        name: 'Токсово, оз Кривое',
        year: 1987,
        url: './maps/forest/toksovo/toksovo_krivoe_1987.webp',
        link: './original_maps/forest/toksovo/toksovo_krivoe_1987_omaps.jpg',
        bounds: [[60.1630771, 30.5243111], [60.15902, 30.5899715], [60.1400946, 30.5189896]],
        author: ['CHGRVSKY_Y','DBRTSV_V','CHKVSKY_N','KRNLJV','GRSMVA','BSTRV_A','BRSVA_I','PTRNNA'],
        areas: [40,15,7,9,7,7,7,8]
    },
    {
        name: 'Осельки',
        year: 1985,
        url: './maps/forest/toksovo/oselki_1985.webp',
        link: './original_maps/forest/toksovo/oselki_1985_omaps.jpg',
        bounds: [[60.2281356, 30.4855156], [60.2258341, 30.5607891], [60.1988006, 30.4828548]],
        author: 'BYMKV'
    },
    {
        name: 'Хиттолово',
        year: 1,
        url: './maps/forest/toksovo/hittolovo_old.webp',
        link: './original_maps/forest/toksovo/hittolovo_old_omaps.jpg',
        bounds: [[60.2235325, 30.5260277], [60.2256636, 30.5954647], [60.1936387, 30.5282593]]
    },
    {
        name: 'Осельки',
        year: 1,
        url: './maps/forest/toksovo/oselki_retro.webp',
        link: './original_maps/forest/toksovo/oselki_retro_omaps.jpg',
        info: 'III Матч МО - ЛО.',
        bounds: [[60.2254079, 30.4843998], [60.2269423, 30.5442238], [60.2024689, 30.4862881]],
    },
    {
        name: 'Осельки',
        year: 1978,
        url: './maps/forest/toksovo/oselki_1978.webp',
        link: './original_maps/forest/toksovo/oselki_1978_omaps.webp',
        bounds: [[60.2281143, 30.4855156], [60.226303, 30.5349112], [60.2100175, 30.4813099]],
        author: 'BSGN_E'
    },
    {
        name: 'Осельки - Хиттолово',
        year: 1990,
        url: './maps/forest/toksovo/oselki_hittolovo_1990.webp',
        link: './original_maps/forest/toksovo/oselki_hittolovo_1990_omaps.jpg',
        bounds: [[60.2303091, 30.4803658], [60.225621, 30.5427647], [60.2046441, 30.4725552]],
        author: 'DRBSHV',
    },
    {
        name: 'Кавголово - Осельки',
        year: 1980,
        url: './maps/forest/toksovo/kavgolovo_oselki_1990.webp',
        link: './original_maps/forest/toksovo/kavgolovo_oselki_1990_omaps.jpg',
        bounds: [[60.2166691, 30.5014801], [60.2130024, 30.55933], [60.1787883, 30.4952145]],
        author: 'BYMKV',
        qtty: 10
    },
    {
        name: 'Осельки, Курголовское оз',
        url: './maps/forest/toksovo/oselki_kurgolovskoe.webp',
        link: './original_maps/forest/toksovo/oselki_kurgolovskoe_omaps.jpg',
        bounds: [[60.2016585, 30.5080891], [60.2011893, 30.5567122], [60.1838459, 30.5075312]],
        author: 'BRDR'
    },
    {
        name: 'Осельки',
        year: 2015,
        url: './maps/forest/toksovo/oselki_2015.webp',
        link: './original_maps/forest/toksovo/oselki_2015_omaps.jpg',
        bounds: [[60.2316941, 30.4846573], [60.2290306, 30.5168009], [60.2108491, 30.4791212]],
        author: 'MKHLV_A',
        owner: ['WN','SHEIN']
    },
    {
        name: 'Осельки',
        year: 2007,
        url: './maps/forest/toksovo/oselki_2007.webp',
        link: './original_maps/forest/toksovo/oselki_2007_omaps.jpg',
        bounds: [[60.2308205, 30.4816532], [60.2277521, 30.5094624], [60.212107, 30.4759026]],
        author: 'DRBSHV'
    },
    {
        name: 'Кавголово',
        year: 1981,
        url: './maps/forest/toksovo/kavgolovo_1981.webp',
        link: './original_maps/forest/toksovo/kavgolovo_1981_omaps.jpg',
        bounds: [[60.1897987, 30.5403185], [60.1858729, 30.5596304], [60.1643796, 30.5186033]],
        author: 'VLKV_K'
    },
    {
        name: 'Кавголово',
        year: 1999,
        url: './maps/forest/toksovo/kavgolovo_1999.webp',
        link: ['./original_maps/forest/toksovo/kavgolovo_1999_omaps.gif','./original_maps/forest/toksovo/kavgolovo_2000_omaps.jpg'],
        photo: './tracks/kavgolovo/pic_1.jpg',
        bounds: [[60.1773797, 30.5221224], [60.1763766, 30.5456829], [60.16107, 30.5181313]],
        author: ['SHRNN','BBNNA_I'],
    },
    {
        name: 'Кавголово',
        year: 2004,
        url: './maps/forest/toksovo/kavgolovo_2004.webp',
        link: './original_maps/forest/toksovo/kavgolovo_2004_omaps.jpg',
        photo: './tracks/kavgolovo/pic_2.jpg',
        bounds: [[60.1771663, 30.5227232], [60.1767608, 30.5454254], [60.1622444, 30.5194187]],
        author: 'VSLVSKY',
    },
    {
        name: 'Кавголово',
        year: 2017,
        url: './maps/forest/toksovo/kavgolovo_2017.webp',
        bounds: [[60.174413, 30.5253839], [60.1719796, 30.5415201], [60.1628209, 30.5188608]],
        author: 'MKHLV_A',
        owner: 'WN'
    },
    {
        name: 'Орлиная гора',
        year: 2004,
        url: './maps/forest/toksovo/orlinaya_gora_2004.webp',
        link: './original_maps/forest/toksovo/orlinaya_gora_2004_omaps.jpg',
        photo: './tracks/kurgolovo/pic_2.jpg',
        bounds: [[60.1961131, 30.5313921], [60.193532, 30.5598879], [60.1772303, 30.5259848]],
        author: ['BRDR','VSLVSKY'],
    },
    {
        name: 'Токсово - Кавголово',
        year: 1989,
        area: 4,
        url: './maps/forest/toksovo/kavgolovo_1989.webp',
        link: './original_maps/forest/toksovo/kavgolovo_1989_omaps.jpg',
        bounds: [[60.1918041, 30.5158997], [60.1874945, 30.557785], [60.1558594, 30.5077457]],
        author: ['SHRNN','MKHLV_B','CHGRVSKY_Y','DBRTSV_V','DJKV','PTRNNA','SMNA'],
        areas: [30,1,40,5,22,1,1]
    },
    {
        name: 'Кавголово, старый лыжедром',
        year: 1988,
        url: './maps/forest/toksovo/kavgolovo_old_ski_track_1988.webp',
        link: './original_maps/forest/toksovo/kavgolovo_old_ski_track_1988_omaps.jpg',
        bounds: [[60.1886253, 30.5346966], [60.1876439, 30.5576992], [60.1734311, 30.5316925]],
        author: ['SHRNN','MKHLV_B']
    },
    {
        name: 'Кавголово',
        year: 1,
        url: './maps/forest/toksovo/kavgolovo_old.webp',
        link: './original_maps/forest/toksovo/kavgolovo_old_omaps.jpg',
        bounds: [[60.1802182, 30.5234957], [60.1784255, 30.5516481], [60.1623939, 30.5194616]],
        author: 'SMRNV_A'
    },
    {
        name: 'Кавголово, старый лыжедром',
        year: 2023,
        url: './maps/forest/toksovo/kavgolovo_old_ski_track_2023.webp',
        bounds: [[60.1890307, 30.5413485], [60.1876652, 30.5576563], [60.1768462, 30.5372715]],
        author: 'MKHLV_A',
        owner: 'WN'
    },
    {
        name: 'Кавголово, старый лыжедром',
        year: 2024,
        info: '<a href="https://t.me/Nevskiy_sprint2024/63">Невский спринт</a>',
        url: './maps/forest/toksovo/kavgolovo_2024.webp',
        link: './original_maps/forest/toksovo/kavgolovo_2024_omaps.gif',
        bounds: [[60.1890093, 30.5429363], [60.1873558, 30.557785], [60.1784788, 30.5382371]],
        author: ['IVNVA_G','TKMKVA_P'],
        owner: 'SFSO_SPB'
    },
    {
        name: 'Кавголово, УТЦ',
        year: 2023,
        url: './maps/forest/toksovo/kavgolovo_utts_2023.webp',
        link: ['./original_maps/forest/toksovo/kavgolovo_uts_2023.jpg','./original_maps/forest/toksovo/kavgolovo_uts_2015.jpg'],
        bounds: [[60.1816693, 30.5336666], [60.1806343, 30.5439663], [60.1735592, 30.5305123]],
        author: ['MNKV','TKMKVA_P','IVNVA_G'],
        owner: 'SFSO_SPB'
    },
    {
        name: 'Кузьмолово',
        year: 2005,
        url: './maps/forest/toksovo/kuzmolovo_2004.webp',
        link: './original_maps/forest/toksovo/kuzmolovo_2004_omaps.jpg',
        bounds: [[60.1383852, 30.5093765], [60.1346456, 30.5564547], [60.106767, 30.4998064]],
        author: 'SHRNN',
        owner: ['SHRNN','GLFSTRM']
    },
    {
        name: 'Куялово',
        year: 2012,
        url: './maps/forest/toksovo/kujalovo_2012.webp',
        link: './original_maps/forest/toksovo/kujalovo_2012_omaps.jpg',
        bounds: [[60.1435131, 30.4924679], [60.1415902, 30.5290318], [60.1183147, 30.487833]],
        author: 'RYLOV_V',
        owner: 'SHEIN'
    },
    {
        name: 'Кузьмолово, Юбилейная ул',
        year: 2018,
        url: './maps/forest/toksovo/kuzmolovo_jubilejnaya_2018.webp',
        link: './original_maps/forest/toksovo/kuzmolovo_jubilejnaya_2018_omaps.jpg',
        bounds: [[60.1276247, 30.4888415], [60.1263956, 30.5049133], [60.1127338, 30.4846144]],
        author: ['TKMKVA_P','IVNVA_G'],
        owner: 'SHEIN'
    },
    {
        name: 'Кузьмолово, Зона-Z',
        year: 1986,
        url: './maps/forest/toksovo/kuzmolovo_zona_z_1986.webp',
        link: './original_maps/forest/toksovo/kuzmolovo_zona_z_1986_omaps.jpg',
        bounds: [[60.1445385, 30.5128098], [60.1403082, 30.5813885], [60.1132042, 30.5041409]],
        author: ['CHGRVSKY_V','DBRTSV_V','CHKVSKY_N','KRNLJV','GBNV_A','CHGRVSKY_Y'],
        areas: [50,10,3,4,4,29]
    },
    {
        name: 'Кузьмолово, Зона-Z',
        date: '1983-01-30',
        url: './maps/forest/toksovo/kuzmolovo_zona_z_1983.webp',
        link: './original_maps/forest/toksovo/kuzmolovo_zona_z_1983_omaps.jpg',
        bounds: [[60.1291316, 30.5173588], [60.1284904, 30.5639219], [60.1139313, 30.5168009]],
    },
    {
        name: 'Кузьмолово, Зона-Z',
        year: 2018,
        url: './maps/forest/toksovo/kuzmolovo_zona_z_2018.webp',
        link: ['./original_maps/forest/toksovo/kuzmolovo_zona_z_2018_omaps.jpg','./original_maps/forest/toksovo/kuzmolovo_zona_z_yarky_cup_2018_omaps.jpg'],
        bounds: [[60.1448376, 30.5086899], [60.1399664, 30.5885124], [60.1090982, 30.5009651]],
        author: ['DBRTSV_V','KVZN','TKMKV_K'],
        owner: 'SHEIN'
    },
    {
        name: 'Кузьмолово',
        year: 2017,
        url: './maps/forest/toksovo/kuzmolovo_2017.webp',
        link: './original_maps/forest/toksovo/kuzmolovo_2017_omaps.gif',
        bounds: [[60.1190202, 30.5122948], [60.1156633, 30.5484724], [60.1089485, 30.5099773]],
        author: 'TKMKV_K'
    },
    {
        name: 'Токсово, Охта-Парк',
        year: 2001,
        url: './maps/forest/toksovo/toksovo_okhta_park_2001.webp',
        link: './original_maps/forest/toksovo/toksovo_okhta_park_2001_omaps.jpg',
        photo: './tracks/okhta-park/pic_3.jpg',
        bounds: [[60.1470594, 30.4105854], [60.1440258, 30.4635429], [60.1160696, 30.403204]],
        author: ['DRBSHV','CHGRVSKY_V','CHGRVSKY_Y']
    },
    {
        name: 'Токсово, оз Светлое',
        year: 2003,
        url: './maps/forest/toksovo/toksovo_svetloe_oz_2003.webp',
        link: './original_maps/forest/toksovo/toksovo_svetloe_oz_2003_omaps.jpg',
        photo: './tracks/toksovo/pic_2.jpg',
        bounds: [[60.1578669, 30.4578352], [60.1551547, 30.4958582], [60.1427867, 30.4535437]],
        author: 'CHGRVSKY_M',
    },
    {
        name: 'Токсово, оз Светлое',
        year: 2017,
        url: './maps/forest/toksovo/toksovo_oz_svetloe_2017.webp',
        link: './original_maps/forest/toksovo/toksovo_oz_svetloe_2017_omaps.jpg',
        photo: './tracks/toksovo/pic_1.jpg',
        bounds: [[60.160707, 30.43612], [60.1560944, 30.4944849], [60.1449658, 30.4308844]],
        author: 'DBRTSV_V',
        owner: 'SHEIN'
    },
    {
        name: 'Токсово, оз Изумрудное',
        year: 1984,
        url: './maps/forest/toksovo/toksovo_svetloe_1984.webp',
        link: './original_maps/forest/toksovo/toksovo_svetloe_1984_omaps.jpg',
        bounds: [[60.1536596, 30.4692936], [60.1636323, 30.5017805], [60.1445813, 30.4835844]],
        author: 'SHRNN',
        info: '"Бабочка".'
    },
    {
        name: 'Токсово, оз Изумрудное',
        year: 2007,
        url: './maps/forest/toksovo/toksovo_izumrudnoe_2007.webp',
        link: './original_maps/forest/toksovo/toksovo_izumrudnoe_2007_omaps.gif',
        bounds: [[60.1609205, 30.4729414], [60.1578242, 30.506072], [60.1471662, 30.4698515]],
        author: 'DBRTSV_V',
    },
    {
        name: 'Токсово, Охта-Парк',
        year: 2008,
        url: './maps/forest/toksovo/toksovo_okhta_park_2008.webp',
        link: './original_maps/forest/toksovo/toksovo_okhta_park_2008_omaps.jpg',
        photo: './tracks/okhta-park/pic_1.jpg',
        bounds: [[60.1563293, 30.3935051], [60.1497936, 30.4720831], [60.1169249, 30.3810596]],
        author: ['MKHLV_A','SLBDNK']
    },
    {
        name: 'Токсово, КомБыт',
        year: 2017,
        url: './maps/forest/toksovo/toksovo_kombyt_2017.jpg',
        link: './original_maps/forest/toksovo/toksovo_kombyt_2017_omaps.jpg',
        bounds: [[60.148042, 30.487318], [60.1467176, 30.510664], [60.1296232, 30.4822969]],
        author: 'DBRTSV_V',
        owner: 'SHEIN'
    },
    {
        name: 'Токсово, Малиновая гора',
        year: 2018,
        url: './maps/forest/toksovo/toksovo_malinovaya_gora_2018.webp',
        link: './original_maps/forest/toksovo/toksovo_malinovaya_gora_2018_omaps.jpg',
        photo: './tracks/toksovo/pic_3.jpg',
        bounds: [[60.1764406, 30.4537582], [60.1732817, 30.5079174], [60.148042, 30.4475784]],
        author: ['TKMKV_K','KVZN'],
        owner: 'SHEIN'
    },
    {
        name: 'Токсово, Малиновая гора',
        year: 2013,
        url: './maps/forest/toksovo/toksovo_malinovaya_gora_2013.webp',
        link: './original_maps/forest/toksovo/toksovo_malinovaya_gora_2013_omaps.jpg',
        bounds: [[60.1764193, 30.4628563], [60.1736446, 30.497489], [60.1641234, 30.4590797]],
        author: 'DBRTSV_V',
        owner: 'RDNV_I'
    },
    {
        name: 'Токсово, оз Кривое',
        year: 2014,
        url: './maps/forest/toksovo/toksovo_krivoe_2014.webp',
        link: './original_maps/forest/toksovo/toksovo_krivoe_2014_omaps.jpg',
        bounds: [[60.1556672, 30.5334949], [60.1533393, 30.5604458], [60.1402869, 30.527873]],
        author: 'DBRTSV_V',
        owner: 'SHEIN'
    },
    {
        name: 'Токсово, СКА',
        year: 2002,
        url: './maps/forest/toksovo/toksovo_ska_2002.webp',
        link: './original_maps/forest/toksovo/toksovo_ska_2002_omaps.jpg',
        bounds: [[60.1758003, 30.5618191], [60.1705494, 30.6114292], [60.1471876, 30.5517769]],
        author: 'CHGRVSKY_V'
    },
    {
        name: 'Токсово, СКА',
        year: 2014,
        url: './maps/forest/toksovo/toksovo_ska_2014.webp',
        link: './original_maps/forest/toksovo/toksovo_ska_2014_omaps.jpg',
        bounds: [[60.1622658, 30.5524206], [60.1600237, 30.5782557], [60.1482556, 30.5473566]],
        author: 'DBRTSV_V',
        owner: 'SHEIN'
    },
    {
        name: 'Токсово, оз Светлое',
        year: 1992,
        url: './maps/forest/toksovo/toksovo_svetloe_1992.webp',
        link: './original_maps/forest/toksovo/toksovo_svetloe_1992_omaps.webp',
        bounds: [[60.173794, 30.5773544], [60.1679023, 30.6477356], [60.1291957, 30.559845]],
        author: ['CHGRVSKY_V','CHGRVSKY_Y','DBRTSV_V','DBRTSV_S','GUSEV_I'],
        areas: [50,15,25,5,5]
    },
    {
        name: 'Токсово, оз Светлое',
        year: 1999, // ?
        url: './maps/forest/toksovo/toksovo_svetloe_1999.webp',
        link: './original_maps/forest/toksovo/toksovo_svetloe_1999_omaps.jpg',
        bounds: [[60.1598956, 30.4410553], [60.1565428, 30.4867172], [60.1452008, 30.4377508]],
        owner: 'KARTA'
    },
    {
        name: 'Токсово, оз Светлое',
        year: 2014,
        url: './maps/forest/toksovo/toksovo_svetloe_2014.webp',
        link: ['./original_maps/forest/toksovo/toksovo_svetloe_2014_omaps.jpg','./original_maps/forest/toksovo/toksovo_svetloe_yarky_cup_2014_omaps.jpg'],
        bounds: [[60.1739647, 30.5799294], [60.1712112, 30.6074381], [60.1518228, 30.5718184]],
        author: 'DBRTSV_V',
        owner: 'SHEIN'
    },
    {
        name: 'Токсово, ВИФК',
        year: 2020,
        url: './maps/forest/toksovo/toksovo_vifk_2020.webp',
        link: './original_maps/forest/toksovo/toksovo_vifk_khimakolovo_2020_omaps.jpg',
        bounds: [[60.2208043, 30.5640507], [60.2149637, 30.6209564], [60.1780627, 30.5469704]],
        author: 'CHGRVSKY_Y',
        owner: 'SHEIN'
    },
    {
        name: 'Химаколово',
        year: 2020,
        url: './maps/forest/toksovo/khimakolovo_2020.webp',
        link: './original_maps/forest/toksovo/toksovo_vifk_khimakolovo_2020_omaps.jpg',
        bounds: [[60.1950679, 30.61306], [60.1902254, 30.6674337], [60.1697596, 30.6028032]],
        author: 'CHGRVSKY_Y',
        owner: 'CHGRVSKY_Y'
    },
    {
        name: 'Токсово, трамплин, СКА',
        year: 2018,
        url: './maps/forest/toksovo/toksovo_tramplin_ska.webp',
        link: './original_maps/forest/toksovo/toksovo_tramplin_ska_omaps.jpg',
        bounds: [[60.1695141, 30.5427861], [60.1692899, 30.5593514], [60.1594792, 30.5436444]],
        author: 'SHRNN',
        owner: 'SHRNN'
    },
    {
        name: 'Токсово, ВИФК',
        year: 2002,
        url: './maps/forest/toksovo/toksovo_vifk_2000.webp',
        link: './original_maps/forest/toksovo/toksovo_vifk_2002_omaps.jpg',
        bounds: [[60.2058383, 30.5570984], [60.2031087, 30.5930614], [60.1798554, 30.5511761]],
        author: 'CHGRVSKY_V'
    },
    {
        name: 'Токсово, ВИФК',
        year: 2023,
        url: './maps/forest/toksovo/toksovo_vifk_2023.webp',
        link: './original_maps/forest/toksovo/toksovo_vifk_2023_omaps.jpg',
        bounds: [[60.1892334, 30.5570769], [60.1880706, 30.5735564], [60.1799834, 30.5534506]],
        author: ['SHRNN','CHSNKV'],
        owner: 'SHRNN'
    },
    {
        name: 'Токсово, восток оз Хепоярви',
        year: 2007,
        url: './maps/forest/toksovo/toksovo_hepojarvI_east_2007.webp',
        link: './original_maps/forest/toksovo/toksovo_hepojarvI_east_2007_omaps.jpg',
        bounds: [[60.1810931, 30.5997562], [60.1774224, 30.6587219], [60.1431712, 30.5894566]],
        author: ['CHGRVSKY_V','CHGRVSKY_Y','DBRTSV_V']
    },
    {
        name: 'Лесколово',
        year: 2015,
        url: './maps/forest/toksovo/leskolovo_2015.webp',
        link: './original_maps/forest/toksovo/leskolovo_2015_omaps.jpg',
        bounds: [[60.2752703, 30.4560757], [60.2735893, 30.4825115], [60.2656083, 30.4534149]],
        author: 'DBRTSV_V',
        owner: 'SHEIN'
    },
    {
        name: 'Энколово',
        year: 1,
        url: './maps/forest/toksovo/enkolovo_retro.webp',
        link: './original_maps/forest/toksovo/enkolovo_retro_omaps.webp',
        bounds: [[60.1253482, 30.3796864], [60.1251344, 30.444746], [60.1049489, 30.3762531]],
        author: 'SPZHNKV_Y'
    },
    {
        name: 'Корабсельки',
        year: 1974,
        url: './maps/forest/toksovo/korabselky_1974.webp',
        link: './original_maps/forest/toksovo/korabselky_1974_omaps.jpg',
        info: 'Матч Эстония-Ленинград, маркир. Одновременно - перезабег чемпионата Ленинграда, который был отменен из-за гололеда, хотя дистанции были полностью готовы (А. Лисененков и его бригада). Карту никто не корректировал, чертил рельеф с основы Крылов, а раскрашивать помогал Ширинян.',
        bounds: [[60.116711, 30.3800297], [60.1169676, 30.4430294], [60.0940384, 30.3809738]],
        start: 'ESTONIA_LENINGRAD'
    },
    {
        name: 'Корабсельки, юг',
        year: 2012,
        area: 2.5,
        url: './maps/forest/toksovo/karabselky_2013.webp',
        link: ['./original_maps/forest/toksovo/karabselky_2013_omaps.jpg','./original_maps/forest/toksovo/karabselky_2013_omaps.ocd'],
        bounds: [[60.1070236, 30.3931618], [60.1080716, 30.4516125], [60.0892024, 30.3937197]],
        author: 'SHRNN',
        owner: 'SHRNN'
    },
    {
        name: 'Мистолово',
        year: 2006,
        url: './maps/forest/toksovo/mistolovo_2006.webp',
        link: ['./original_maps/forest/toksovo/mistolovo_2006_omaps.jpg','./original_maps/forest/toksovo/mistolovo_2006_omaps.ocd'],
        bounds: [[60.1178015, 30.388484], [60.1153853, 30.4246616], [60.1013339, 30.3835058]],
        author: 'SHRNN'
    },
    {
        name: 'Охта-Парк',
        year: 2021,
        url: './maps/parks/okhta-park_2021.webp',
        link: './original_maps/forest/toksovo/park_2021_omaps.jpg',
        photo: './tracks/okhta-park/pic_2.jpg',
        bounds: [[60.1341006, 30.4431367], [60.1324658, 30.4558825], [60.125594, 30.4395103]],
        author: 'DBRTSV_V',
        owner: 'SHEIN',
        type: ['PARK']
    },
    {
        name: 'Гарболово, оз Паскоярви',
        year: 1,
        url: './maps/forest/vaskelovo/paskojarvi_retro.webp',
        link: './original_maps/forest/vaskelovo/paskojarvi_retro_omaps.webp',
        bounds: [[60.3935049, 30.4417419], [60.391003, 30.5013084], [60.365379, 30.433588]],
    },
    {
        name: 'Гарболово, оз Сиркоярви',
        date: '1969-06-28',
        url: './maps/forest/toksovo/sirkojarvi_1969.webp',
        link: './original_maps/forest/toksovo/sirkojarvi_1969_omaps.jpg',
        info: '10 лет спортивного ориентирования в Ленинграде. 28-29 июня.',
        results: './docs/1969/1969_06_21_garbolovo_10_years_omaps.pdf',
        bounds: [[60.388416, 30.5136681], [60.3898155, 30.5996704], [60.3420709, 30.5184746]],
    },
    {
        name: 'Лехтуси',
        year: 1,
        url: './maps/forest/toksovo/lehtusi_old.webp',
        link: './original_maps/forest/toksovo/lehtusi_old_omaps.jpg',
        info: '<a href="./original_maps/forest/toksovo/lehtusi_old_draft_omaps.jpg">Черновой эскиз</a>.',
        bounds: [[60.3206585, 30.4987335], [60.3193411, 30.6092834], [60.2452214, 30.4931545]],
        author: 'KRCHNKO_S',
    },
    {
        name: 'Лехтуси',
        year: 1990,
        url: './maps/forest/toksovo/lehtusi_1990.webp',
        link: './original_maps/forest/toksovo/lehtusi_1990_omaps.jpg',
        bounds: [[60.3051428, 30.5014801], [60.2994873, 30.5613041], [60.2773662, 30.4916096]],
        author: 'BYMKV',
        qtty: 25
    },
    {
        name: 'Аньялово',
        year: 2023,
        url: './maps/forest/toksovo/anyalovo_2023.webp',
        link: './original_maps/forest/toksovo/anyalovo_2023_omaps.gif',
        bounds: [[60.3176623, 30.4951286], [60.311265, 30.5390739], [60.2985305, 30.4897642]],
        publish: 'https://vk.com/album-230167293_313515750',
        author: ['TKMKV_K','KVZN'],
        owner: 'SFSO_SPB'
    },
    {
        name: 'Лехтуси, оз Валкиярви',
        year: 2016,
        url: './maps/forest/toksovo/lehtusi_valkijarvi_2016.webp',
        //link: './original_maps/forest/lehtusi_valkijarvi_2016_omaps.jpg',
        bounds: [[60.2766853, 30.5270576], [60.274217, 30.5620766], [60.2522491, 30.5186462]],
        author: 'CHGRVSKY_V',
        owner: ['WN','SHEIN']
    },
];
