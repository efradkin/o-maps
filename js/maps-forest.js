// types can be ROGAINE, SPRINT, CITY, RELIEF
let forestMaps = [
    // --- лесные карты ---
    {
        name: 'Уткино',
        date: '1975-01-26',
        info: 'Первенство Ленинграда, маркир.',
        url: './maps/forest/utkino_1975.webp',
        link: ['./original_maps/forest/utkino_1975_omaps.jpg','./original_maps/forest/utkino_cup_1975_omaps.jpg'],
        bounds: [[60.2717485, 29.1584873], [60.2671514, 29.2199421], [60.253186, 29.152565]]
    },
    {
        name: 'Зеркальный',
        year: 1973,
        info: 'Буревестник.',
        url: './maps/forest/zerkalny_1973.webp',
        link: ['./original_maps/forest/zerkalny_1973_omaps.jpg','./original_maps/forest/zerkalny_1973_clean_omaps.webp'],
        bounds: [[60.2612126, 29.1106796], [60.2684285, 29.1708899], [60.2426655, 29.1185331]],
    },
    {
        name: 'Зеркальный',
        year: 1989,
        url: './maps/forest/zerkalny_1989.webp',
        link: './original_maps/forest/zerkalny_1989_omaps.jpg',
        bounds: [[60.2712377, 29.1040277], [60.2695352, 29.1480589], [60.2427294, 29.095788]],
        author: ['ARTMV','EGRV_A','EGRV_P','IVNV_N','MTVV_A']
    },
    {
        name: 'Цвелодубово',
        year: 2020,
        url: './maps/forest/tsvelodubovo_2020.webp',
        bounds: [[60.3909605, 29.5569134], [60.3876314, 29.5981121], [60.363172, 29.5473003]],
        author: ['TKMKV_K','KVZN','LPTV_Y'],
        owner: 'NW'
    },
    {
        name: 'Заходское',
        year: 1976,
        url: './maps/forest/zakhodskoe_1976.webp',
        link: './original_maps/forest/zakhodskoe_1976_omaps.jpg',
        bounds: [[60.401603, 29.3673134], [60.4026628, 29.42379], [60.3752661, 29.3709183]],
        zindex: 3
    },
    {
        name: 'Цвелодубово',
        year: 1986,
        url: './maps/forest/tsvelodubovo_1986.webp',
        link: './original_maps/forest/tsvelodubovo_1986_omaps.jpg',
        bounds: [[60.36731, 29.5682001], [60.3644028, 29.6243334], [60.3495449, 29.565196]],
        author: ['EGRV_A','KNSTNTNV_D','MRVNK_D','GLV_N'],
        editor: 'ARTMV',
        zindex: 3
    },
    {
        name: 'Цвелодубово',
        year: 1995,
        start: 'WN',
        page: 'spb',
        url: './maps/forest/tsvelodubovo_south_1995.webp',
        link: ['./original_maps/forest/tsvelodubovo_south_1995_omaps.jpg','./original_maps/forest/tsvelodubovo_south_1995_clean_omaps.webp'],
        results: './docs/1995/1995_06_23_wn_omaps.pdf',
        bounds: [[60.3637662, 29.550519], [60.3594792, 29.6214581], [60.3474854, 29.5464849]],
        author: 'MLVA_M'
    },
    {
        name: 'Цвелодубово',
        year: 1987,
        url: './maps/forest/tsvelodubovo_1987.webp',
        link: './original_maps/forest/tsvelodubovo_1987_omaps.jpg',
        bounds: [[60.3759874, 29.5470428], [60.3740357, 29.5796156], [60.3632145, 29.5432663]],
        author: ['EGRV_A','KNSTNTNV_D','MRVNK_D','GLV_N'],
        editor: 'ARTMV',
        zindex: 3
    },
    {
        name: 'Цвелодубово',
        year: 1993,
        area: 8,
        info: 'Family games',
        url: './maps/forest/tsvelodubovo_1993.webp',
        link: ['./original_maps/forest/tsvelodubovo_1993_omaps.jpg','./original_maps/forest/tsvelodubovo_1993_omaps.webp'],
        bounds: [[60.4019421, 29.5470428], [60.3965154, 29.6207714], [60.3613893, 29.5355415]],
        author: ['SHRNN','KRCHKN_V']
    },
    {
        name: 'Цвелодубово, Голубые оз',
        year: 1995,
        start: 'WN',
        page: 'spb',
        url: './maps/forest/tsvelodubovo_1995.webp',
        link: ['./original_maps/forest/tsvelodubovo_1995_omaps.jpg','./original_maps/forest/tsvelodubovo_wn_1995_omaps.webp','./original_maps/forest/tsvelodubovo_1995_clean_omaps.webp'],
        results: './docs/1995/1995_06_23_wn_omaps.pdf',
        bounds: [[60.3949042, 29.553566], [60.3903668, 29.6257496], [60.3630022, 29.548502]],
        author: 'MLVA_M'
    },
    {
        name: 'Цвелодубово, Голубые оз',
        year: 1999,
        start: 'WN',
        page: 'spb',
        url: './maps/forest/tsvelodubovo_1999.webp',
        link: './original_maps/forest/tsvelodubovo_1999_omaps.jpg',
        bounds: [[60.3827113, 29.5537376], [60.3797207, 29.6135616], [60.3627476, 29.5501757]],
        author: ['MLVA_M','KAZNTSVA_O','KAZNTSV_S']
    },
    {
        name: 'Цвелодубово, Рыбачье оз',
        year: 1999,
        start: 'WN',
        page: 'spb',
        url: './maps/forest/tsvelodubovo_south_1999.webp',
        link: './original_maps/forest/tsvelodubovo_south_1999_omaps.webp',
        bounds: [[60.3638935, 29.5501328], [60.3597764, 29.6220589], [60.3473793, 29.5455837]],
        author: ['MLVA_M','KAZNTSVA_O','KAZNTSV_S']
    },
    {
        name: 'Цвелодубово',
        year: 1,
        url: './maps/forest/tsvelodubovo_old.webp',
        link: './original_maps/forest/tsvelodubovo_old_omaps.jpg',
        bounds: [[60.3812054, 29.5488453], [60.3772602, 29.6329594], [60.3515829, 29.5426655]]
    },
    {
        name: 'Цвелодубово',
        year: 1980,
        url: './maps/forest/tsvelodubovo_1980.webp',
        link: './original_maps/forest/tsvelodubovo_1980_omaps.jpg',
        bounds: [[60.3950314, 29.5476437], [60.3903244, 29.6297836], [60.3520075, 29.5389748]],
        author: ['MLVA_M','KAZNTSVA_O']
    },
    {
        name: 'Цвелодубово, Щукино оз',
        year: 1980,
        url: './maps/forest/tsvelodubovo_south.webp',
        link: './original_maps/forest/tsvelodubovo_south_omaps.jpg',
        bounds: [[60.3760298, 29.5510769], [60.3726779, 29.6262646], [60.3478039, 29.5445538]],
        author: ['MLVA_M','KAZNTSVA_O']
    },
    {
        name: 'Цвелодубово',
        date: '2006-07-29',
        url: './maps/forest/tsvelodubovo_triotlon_2006.webp',
        link: './original_maps/forest/tsvelodubovo_triotlon_2006_omaps.jpg',
        results: 'https://www.o-site.spb.ru/race.php?id=tri-o-tlon-2006',
        bounds: [[60.3953918, 29.5581579], [60.3922115, 29.6172523], [60.3621321, 29.5495319]],
        author: 'KUZNTSV_S',
        start: 'TRI_O_TLON'
    },
    {
        name: 'Цвелодубово, ур Нагорное',
        date: '2003-06-18',
        start: 'YM',
        page: 'spb',
        url: './maps/forest/tsvelodubovo_nagornoe_2003.webp',
        link: './original_maps/forest/tsvelodubovo_nagornoe_2003_omaps.jpg',
        bounds: [[60.3946922, 29.5650244], [60.3931232, 29.5911169], [60.3784268, 29.5599604]],
        author: ['SHRNN','KRCHKN_V','SRTSKY']
    },
    {
        name: 'Цвелодубово, Марченковский лес',
        date: '2003-06-17',
        start: 'YM',
        page: 'spb',
        url: './maps/forest/tsvelodubovo_marchenkovsky_2003.webp',
        link: './original_maps/forest/tsvelodubovo_marchenkovsky_2003_omaps.jpg',
        bounds: [[60.3803782, 29.5535231], [60.3771965, 29.6053219], [60.3619836, 29.5494461]],
        author: ['SHRNN','KRCHKN_V','SRTSKY']
    },
    {
        name: 'Цвелодубово, Щукино оз',
        year: 2021,
        url: './maps/forest/tsvelodubovo_south_2021.webp',
        link: './original_maps/forest/tsvelodubovo_south_2021_omaps.gif',
        publish: 'https://vk.com/album-230167293_309657044',
        bounds: [[60.3661429, 29.5515919], [60.3602008, 29.6252346], [60.3397773, 29.5430946]],
        author: 'CHGRVSKY_V',
        owner: 'SFSO_SPB'
    },
    {
        name: 'Нахимовское',
        url: './maps/forest/nakhimovskoe.webp',
        link: './original_maps/forest/nakhimovskoe_omaps.jpg',
        bounds: [[60.3995257, 29.5054579], [60.3979358, 29.5262718], [60.3836869, 29.4989777]],
        author: 'SHRNN',
        owner: 'SHRNN'
    },
    {
        name: 'Стрельцово',
        year: 2015,
        area: 2,
        url: './maps/forest/streltsovo.webp',
        link: './original_maps/forest/streltsovo_2015_omaps.webp',
        bounds: [[60.6169022, 29.2774916], [60.6174707, 29.308176], [60.5966186, 29.2783928]],
        author: ['SHRNN','RYLOV_V'],
        info: '© Т.Ю.Тарасени (ЛТА) и Л.Г.Рубис (СПбГУПТД).'
    },
    {
        name: 'Орловский парк',
        year: 1980,
        area: 4,
        url: './maps/forest/orlovsky_park_1980.webp',
        link: './original_maps/forest/orlovsky_park_1980_omaps.jpg',
        bounds: [[60.0665322, 30.2423143], [60.0592291, 30.3056145], [60.0463322, 30.2259207]],
        author: ['SHRNN','MLSHV_Y']
    },
    {
        name: 'Юкки',
        date: '1966-03-11',
        start: 'MEET_1966',
        url: './maps/forest/yukki_1966.webp',
        link: ['./original_maps/forest/meet_1966_title.jpg','./original_maps/forest/meet_1966_agenda.jpg','./original_maps/forest/yukki_1966_omaps.jpg'],
        info: 'Маркир.',
        bounds: [[60.1358637, 30.287075], [60.1380433, 30.3922176], [60.0974189, 30.2895641]]
    },
    {
        name: 'Юкки',
        year: 1988,
        url: './maps/forest/yukki_1988.webp',
        link: ['./original_maps/forest/yukki_1988_omaps.jpg','./original_maps/forest/yukki_1985_omaps.webp'],
        bounds: [[60.1350089, 30.2660465], [60.1303926, 30.3583145], [60.1031949, 30.2597809]],
        author: ['SHLKHN_Y','BZNV_A']
    },
    {
        name: 'Юкки',
        year: 1988,
        url: './maps/forest/yukki_1990.webp',
        link: './original_maps/forest/yukki_1990_omaps.jpg',
        bounds: [[60.1493664, 30.2693081], [60.1457776, 30.3360844], [60.1101248, 30.2589226]],
        author: 'SHLKHN_Y',
        qtty: 20
    },
    {
        name: 'Юкки',
        year: 1975,
        url: './maps/forest/yukki_1976.webp',
        link: ['./original_maps/forest/yukki_1976_omaps.jpg','./original_maps/forest/yukki_1976_course_omaps.webp'],
        info: ' Одна из двух первых цветных карт в Ленинграде.',
        bounds: [[60.1263743, 30.2736425], [60.1227188, 30.3480577], [60.1030238, 30.2691793]],
        start: 'USSR_FRANCE_ARMY_1975',
        author: 'SHLKHN_Y'
    },
    {
        name: 'Юкки',
        year: 2026,
        url: './maps/forest/yukki_2026.webp',
        link: ['./original_maps/forest/yukki_2026_omaps.webp','./original_maps/forest/yukki_south_2026_omaps.webp','./original_maps/forest/yukki_2026_omaps.ocd'],
        info: 'Карта пока ещё находится в работе, но южная, наиболее востребованная часть, уже доступна для тренировок.',
        author: 'RDNV_I',
        owner: 'RDNV_I',
        bounds: [[60.1503276, 30.2724409], [60.1431071, 30.3420496], [60.1135250, 30.2570772]],
    },
    {
        name: 'Юкки, север',
        year: 2007,
        url: './maps/forest/yukki_north_2007.webp',
        link: './original_maps/forest/yukki_north_2007_omaps.jpg',
        author: 'SHRNN',
        owner: 'SHRNN',
        bounds: [[60.1222271, 30.2997351], [60.1210085, 30.3226948], [60.1130973, 30.2984476]]
    },
    {
        name: 'Юкки, север',
        year: 2020,
        url: './maps/forest/yukki_north_2020.webp',
        link: './original_maps/forest/yukki_north_2020_omaps.jpg',
        author: ['TKMKV_K','KVZN'],
        owner: 'SHEIN',
        bounds: [[60.1226333, 30.300293], [60.1195975, 30.3318787], [60.1131828, 30.2962589]]
    },
    {
        name: 'Юкки',
        year: 2014,
        url: './maps/forest/yukki_2014.webp',
        author: ['RYLOV_V','TMLNS'],
        owner: 'SHLKHN_AN',
        bounds: [[60.1275285, 30.2959156], [60.1255833, 30.3317928], [60.1104455, 30.2920532]]
    },
    {
        name: 'Юкки',
        year: 2015,
        url: './maps/forest/yukki_2015.webp',
        link: './original_maps/forest/yukki_2015_omaps.jpg',
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        bounds: [[60.1317177, 30.2960014], [60.1313544, 30.3356981], [60.117438, 30.2955294]]
    },
    {
        name: 'Юкки, юг',
        year: 2019,
        url: './maps/forest/yukki_south_2019.webp',
        link: ['./original_maps/forest/yukki_south_2019_omaps.jpg','./original_maps/forest/yukki_south_2008_omaps.ocd'],
        bounds: [[60.111023, 30.3014302], [60.1088843, 30.3296256], [60.1034837, 30.2990913]],
        author: 'SHRNN'
    },
    {
        name: 'Юкки, юг',
        date: '2019-05-19',
        url: './maps/forest/yukki_south_ra_2019.webp',
        info: 'Российский Азимут.',
        o_site: '100518RA',
        link: './original_maps/forest/yukki_south_ra_2019_omaps.jpg',
        bounds: [[60.1104669, 30.3092623], [60.110777, 30.3257418], [60.1023072, 30.3092408]],
        author: 'ZCHNV'
    },
    {
        name: 'Каменка',
        year: 2015,
        url: './maps/forest/kamenka_2015.webp',
        link: './original_maps/forest/kamenka_2015_omaps.jpg',
        bounds: [[60.4306718, 28.9983273], [60.4257582, 29.0448475], [60.4012215, 28.9851093]],
        owner: 'KURD',
        author: ['DJCHKV','STLV_S']
    },
    {
        name: 'Сертолово',
        year: 1988,
        url: './maps/forest/sertolovo_1988.webp',
        link: './original_maps/forest/sertolovo_1988_omaps.jpg',
        bounds: [[60.1596607, 30.2042913], [60.1585502, 30.2293968], [60.1384279, 30.1996136]],
        author: 'IVNVA_I',
        qtty: 20
    },
    {
        name: 'Сертолово',
        year: 1989,
        url: './maps/forest/sertolovo_1989.webp',
        link: './original_maps/forest/sertolovo_1989_omaps.jpg',
        bounds: [[60.1462049, 30.2088833], [60.1437694, 30.2597809], [60.1275713, 30.2056217]],
        author: 'RYLOV_V'
    },
    {
        name: 'Сертолово',
        year: 2016,
        url: './maps/forest/sertolovo_2016.webp',
        link: './original_maps/forest/sertolovo_2016_omaps.jpg',
        bounds: [[60.1588706, 30.2052355], [60.1570767, 30.2287531], [60.143684, 30.2002144]],
        author: 'DBRTSV_V',
        owner: 'SHEIN'
    },
    {
        name: 'Новое Сертолово',
        year: 2025,
        url: './maps/forest/new_sertolovo_2023.webp',
        link: './original_maps/forest/new_sertolovo_2025_omaps.webp',
        bounds: [[60.1648706, 30.1855803], [60.1612835, 30.2157497], [60.1522286, 30.1800013]],
        author: 'SVCHK',
        owner: 'SVCHK'
    },
    {
        name: 'Сертолово, Чистые ручьи',
        year: 2021,
        url: './maps/forest/sertolovo_chistjie_ruchji_2024.webp',
        link: './original_maps/forest/sertolovo_chistjie_ruchji_2021_omaps.gif',
        bounds: [[60.1477643, 30.2263498], [60.1446026, 30.2567768], [60.1380433, 30.222702]],
        author: 'SVCHK',
        owner: 'SVCHK'
    },
    {
        name: 'Вартемяги',
        date: '1970-06-28',
        url: './maps/forest/vartemjagi_1970_06_28.webp',
        link: ['./original_maps/forest/vartemjagi_1970_06_28_M_omaps.webp','./original_maps/forest/vartemjagi_1970_06_28_W_omaps.webp'],
        bounds: [[60.1913988, 30.260253], [60.1880492, 30.319047], [60.1647425, 30.2533436]],
        start: 'ESTONIA_LENINGRAD'
    },
    {
        name: 'Вартемяги',
        year: 1988,
        start: 'WN',
        page: 'spb',
        url: './maps/forest/vartemjagi_1987.webp',
        link: ['./original_maps/forest/vartemjagi_1987_omaps.jpg','./original_maps/forest/vartemjagi_1987_dist_omaps.jpg'],
        bounds: [[60.2021277, 30.2190971], [60.1964117, 30.3171158], [60.1733244, 30.2108574]],
        author: ['MLVA_M','KAZNTSVA_O','KAZNTSV_S']
    },
    {
        name: 'Вартемяги-Лупполово',
        year: 1988,
        start: 'WN',
        page: 'spb',
        url: './maps/forest/vartemjagi_luppolovo_1987.webp',
        link: ['./original_maps/forest/vartemjagi_luppolovo_1987_omaps.jpg','./original_maps/forest/vartemjagi_luppolovo_1987_dist_omaps.jpg'],
        bounds: [[60.1950039, 30.2493954], [60.1912921, 30.3159142], [60.1558594, 30.2383232]],
        author: ['MLVA_M','KAZNTSVA_O','KAZNTSV_S']
    },
    {
        name: 'Вартемяги',
        year: 1990,
        url: './maps/forest/vartemjagi_1990.webp',
        link: './original_maps/forest/vartemjagi_1990_omaps.jpg',
        bounds: [[60.1622871, 30.2950144], [60.1651055, 30.3457403], [60.1306919, 30.3010225]],
        author: ['SHLKHN_Y','BZNV_A'],
        qtty: 20
    },
    {
        name: 'Вартемяги, север',
        year: 2017,
        url: './maps/forest/vartemjagi_north_2017.webp',
        link: './original_maps/forest/vartemjagi_north_2017_omaps.jpg',
        bounds: [[60.1854462, 30.2807665], [60.1835045, 30.3179741], [60.1717875, 30.2765179]],
        author: 'DBRTSV_V',
        owner: 'SHEIN'
    },
    {
        name: 'Вартемяги, юг',
        year: 2018,
        url: './maps/forest/vartemjagi_south_2018.webp',
        link: './original_maps/forest/vartemjagi_south_2018_omaps.jpg',
        bounds: [[60.1649347, 30.3078461], [60.1617319, 30.3481436], [60.1483197, 30.3036833]],
        author: 'DBRTSV_V',
        owner: 'SHEIN'
    },
    {
        name: 'Лупполово',
        year: 2022,
        url: './maps/forest/luppolovo_2022.webp',
        link: './original_maps/forest/luppolovo_2022_omaps.jpg',
        bounds: [[60.1739434, 30.2425289], [60.1706135, 30.2775478], [60.1534888, 30.2339029]],
        author: 'DBRTSV_V',
        owner: 'SHEIN'
    },
    {
        name: 'Девяткино',
        year: 1997,
        url: './maps/forest/devjatkino_1997.webp',
        link: './original_maps/forest/devjatkino_1997_omaps.jpg',
        bounds: [[60.0646691, 30.42346], [60.0657399, 30.4522991], [60.0451322, 30.4182243]],
        author: 'DBRTSV_V'
    },
    {
        name: 'Новое Девяткино',
        year: 1993,
        url: './maps/forest/new_devjatkino_1993.webp',
        link: './original_maps/forest/new_devjatkino_1993_omaps.jpg',
        bounds: [[60.0620777, 30.468049], [60.0611996, 30.4984331], [60.0474464, 30.4641008]],
        author: 'KAZNTSVA_O'
    },
    {
        name: 'Яппиля',
        year: 1980,
        url: './maps/forest/yappilya_1980.webp',
        link: './original_maps/forest/yappilya_1980_omaps.jpg',
        bounds: [[60.2369992, 29.1704607], [60.2345066, 29.2263365], [60.2204207, 29.1674995]],
        author: 'OSMCHN'
    },
    {
        name: 'Тарасовское',
        year: 1994,
        start: 'MMS',
        page: 'spb',
        url: './maps/forest/tarasovskoe_1995.webp',
        link: './original_maps/forest/tarasovskoe_1995_omaps.jpg',
        bounds: [[60.2815364, 29.115572], [60.2746426, 29.2100716], [60.2457326, 29.104929]],
        author: ['EGRV_A','VLKV_K','URVNTSV'],
        areas: [25,25,50]
    },
    {
        name: 'Зеркальный',
        year: 1991,
        url: './maps/forest/zerkalny_1991.webp',
        link: ['./original_maps/forest/zerkalny_1991_omaps.jpg','./original_maps/forest/zerkalny_1991_omaps.webp'],
        bounds: [[60.2765151, 29.0600395], [60.2672791, 29.1578865], [60.244838, 29.0493107]],
        author: ['KUZNTSV_S','ISVNNA','KNSTNTNV_D','RDKV','URVNTSV']
    },
    {
        name: 'Тарасовское',
        year: 1997,
        url: './maps/forest/tarasovskoe_1997.webp',
        link: './original_maps/forest/tarasovskoe_1997_european_hope_omaps.webp',
        results: './docs/1997/1997_10_04_european_hope_omaps.pdf',
        bounds: [[60.2716208, 29.1045427], [60.2687051, 29.1438961], [60.2553153, 29.0997791]],
        author: ['KUZNTSV_S','ISVNNA','KNSTNTNV_D','RDKV','URVNTSV','VLKV_K','MMLV_M','ELTSV','BLZRV_V','ARTMV'],
        editor: 'GLTV_Y',
        start: 'EUROPEAN_HOPE'
    },
    {
        name: 'Зеркальный',
        year: 2001,
        url: './maps/forest/zerkalny_2001.webp',
        link: './original_maps/forest/zerkalny_2001_omaps.webp',
        info: 'Марафон на холмах Яппиля.',
        bounds: [[60.2712803, 29.0890503], [60.2670237, 29.1578865], [60.2213159, 29.0791798]],
        editor: 'GLTV_Y'
    },
    {
        name: 'Зеркальный',
        year: 2002,
        url: './maps/forest/zerkalny_2002.webp',
        link: './original_maps/forest/zerkalny_2002_omaps.jpg',
        bounds: [[60.245903, 29.1335964], [60.2446251, 29.1593456], [60.2359659, 29.1321373]],
        author: ['VLKV_K','RDKV','URVNTSV','BLZRV_V','ARTMV']
    },
    {
        name: 'Тарасовское',
        year: 2000,
        url: './maps/forest/tarasovskoe_2000.webp',
        link: './original_maps/forest/tarasovskoe_2000_omaps.webp',
        bounds: [[60.2808555, 29.1323948], [60.2773237, 29.1899014], [60.2467549, 29.1202068]],
        author: ['KUZNTSV_S','TKMKV_K','KUZNTSVA_E'],
    },
    {
        name: 'Яппиля',
        year: 1999,
        start: 'MMS',
        page: 'spb',
        url: './maps/forest/yappilya_1999.webp',
        link: ['./original_maps/forest/yappilya_1999_omaps.jpg','./original_maps/forest/yappilya_mms_1999_omaps.jpg'],
        results: './docs/1999/1999_06_26_svyatkina_omaps.pdf',
        bounds: [[60.202149, 29.1642809], [60.1980115, 29.2384815], [60.1761632, 29.1575432]],
        author: ['VLKV_K','URVNTSV','KRCHKN_V','FDRV_L'],
        areas: [35,35,20,10]
    },
    {
        name: 'Яппиля, оз Пистолет',
        year: 1979,
        url: './maps/forest/yappilya_pistolet_1979.webp',
        link: ['./original_maps/forest/yappilya_pistolet_1979_omaps.jpg','./original_maps/forest/yappilya_pistolet_1979_omaps.webp'],
        bounds: [[60.2235325, 29.121151], [60.2216143, 29.1724777], [60.1841233, 29.1149712]],
        author: ['KAZNTSV_S','KAZNTSVA_O','GYKVCH','PYNN','PTRV_V']
    },
    {
        name: 'Яппиля, оз Пистолет',
        year: 1992,
        major: true,
        logo: 'owc_1992.jpg',
        url: './maps/forest/yappilya_pistolet_1992.webp',
        link: ['./original_maps/forest/yappilya_pistolet_1992_omaps.webp','./original_maps/forest/yappilya_pistolet_1992_omaps.jpg','./original_maps/forest/yappilya_pistolet_1992_h21_omaps.jpg','./original_maps/forest/yappilya_pistolet_1992_h21_back_omaps.jpg'],
        bounds: [[60.2471382, 29.1260433], [60.2432193, 29.185524], [60.1843366, 29.1118813]],
        info: '<a href="https://o-site.spb.ru/history/Knots/wc-92.html">Кубок Мира</a>.',
        author: ['CHGRVSKY_V','CHGRVSKY_Y'],
        zindex: 2,
        region: 'SPB'
    },
    {
        name: 'Яппиля',
        year: 1999,
        start: 'MMS',
        page: 'spb',
        url: './maps/forest/yappilya_pistolet_1999.webp',
        link: './original_maps/forest/yappilya_pistolet_1999_omaps.jpg',
        bounds: [[60.2253227, 29.1244555], [60.221934, 29.1755247], [60.1885613, 29.115572]],
    },
    {
        name: 'Яппиля, оз Пистолет',
        year: 1997,
        url: './maps/forest/yappilya_pistolet_1997.webp',
        link: './original_maps/forest/yappilya_pistolet_1997_omaps.jpg',
        bounds: [[60.213045, 29.1208506], [60.2112328, 29.1547966], [60.1879639, 29.1148424]],
        author: 'CHGRVSKY_V',
        start: 'EUROPEAN_HOPE'
    },
    {
        name: 'Яппиля, оз Пистолет',
        year: 2024,
        url: './maps/forest/yappilya_2024.webp',
        bounds: [[60.2352096, 29.1106796], [60.2278799, 29.1831207], [60.1873665, 29.0916252]],
        restricted: 'с 19.03.2026 по 28.09.2026, ЧиП СПб',
        author: ['TKMKV_K','TKMKVA_P','KVZN','NSNV','NKFRV_A'],
        owner: ['GLTV_YU', 'GLFSTRM']
    },
    {
        name: 'Яппиля - Тарасовское',
        year: 2024,
        url: './maps/forest/yappilya_tarasovskoe_2024.webp',
        bounds: [[60.2828128, 29.109478], [60.2723443, 29.2311859], [60.2258341, 29.087677]],
        author: ['VRBY','MLNKV_L','KVZN','TKMKV_K'],
        owner: ['GLTV_YU', 'GLFSTRM']
    },
    {
        name: 'Зеркальный',
        year: 1999,
        url: './maps/forest/zerkalny_1999.webp',
        link: './original_maps/forest/zerkalny_1999_omaps.jpg',
        bounds: [[60.2463822, 29.1324377], [60.2459988, 29.1435313], [60.2381602, 29.1309786]],
        author: ['BLZRV_V','ARTMV'],
        editor: 'GLTV_Y'
    },
    {
        name: 'Каннельярви',
        year: 1968,
        start: 'START_1968',
        url: './maps/forest/zahodskoe_1968.webp',
        link: './original_maps/forest/zahodskoe_1968_omaps.jpg',
        bounds: [[60.4162254, 29.3693733], [60.4149118, 29.4754601], [60.3792541, 29.3661118]],
        author: 'SPZHNKV_Y'
    },
    {
        name: 'Заходское',
        year: 1976,
        start: 'OKINCHITSA',
        url: './maps/forest/zahodskoe_1976.webp',
        link: './original_maps/forest/zahodskoe_1976_omaps.webp',
        bounds: [[60.4206744, 29.3679142], [60.4202083, 29.4266224], [60.3802298, 29.3677425]],
    },
    {
        name: 'Каннельярви',
        year: 1968,
        start: 'START_1968',
        url: './maps/forest/kanneljarvi_1968.webp',
        link: './original_maps/forest/kanneljarvi_1968_omaps.jpg',
        bounds: [[60.3894339, 29.3846512], [60.3869316, 29.42173], [60.313518, 29.3597603]]
    },
    {
        name: 'Гладышевское оз',
        year: 1968,
        start: 'START_1968',
        url: './maps/forest/gladyshevskoe_1968.webp',
        link: './original_maps/forest/gladyshevskoe_1968_omaps.jpg',
        bounds: [[60.3261829, 29.3161583], [60.3232934, 29.4130611], [60.2934906, 29.3136692]],
    },
    {
        name: 'Поляны, Семиозерье',
        year: 1968,
        start: 'START_1968',
        url: './maps/forest/polyany_1968.webp',
        link: './original_maps/forest/polyany_1968_omaps.webp',
        bounds: [[60.3172585, 29.2650032], [60.3125828, 29.3458557], [60.2880883, 29.2582226]],
    },
    {
        name: 'Поляны',
        year: 1979,
        url: './maps/forest/polyany_1979.webp',
        link: './original_maps/forest/polyany_1979_omaps.webp',
        bounds: [[60.3134117, 29.2819977], [60.3094795, 29.3140125], [60.2993385, 29.2801523]],
    },
    {
        name: 'Каннельярви, карьер',
        year: 2023,
        url: './maps/forest/kanneljarvi_2023.webp',
        link: './original_maps/forest/kanneljarvi_2023_omaps.jpg',
        publish: 'https://vk.com/album-230167293_309756773',
        bounds: [[60.3383332, 29.3365002], [60.3309416, 29.407053], [60.3131354, 29.3262863]],
        author: ['TKMKV_K','KUZNTSV_A','KVZN'],
        owner: 'SFSO_SPB'
    },
    {
        name: 'Каннельярви, оз Исток',
        year: 2006,
        start: 'NA',
        page: 'spb',
        o_site: '06061012_NA',
        url: './maps/forest/kanneljarvi_istok_2006.webp',
        link: './original_maps/forest/kanneljarvi_istok_2006_omaps.jpg',
        bounds: [[60.371702, 29.3352985], [60.3687316, 29.3725491], [60.3462327, 29.326458]],
        author: ['VSLVSKY','RYLOV_V','SHRNN']
    },
    {
        name: 'Каннельярви, оз Исток, р Быстрянка',
        date: '2006-06-11',
        start: 'NA',
        page: 'spb',
        o_site: '06061012_NA',
        url: './maps/forest/kanneljarvi_istok.webp',
        link: ['./original_maps/starts/na/na_2006_06_11_omaps.jpg','./original_maps/forest/kanneljarvi_bystrjanka_2006_omaps.jpg','./original_maps/forest/kanneljarvi_2006_omaps.ocd'],
        bounds: [[60.3714898, 29.3092918], [60.3654639, 29.3803596], [60.3458505, 29.3012238]],
        author: ['VSLVSKY','RYLOV_V']
    },
    {
        name: 'Поляны',
        year: 1977,
        url: './maps/forest/polyany_1977.webp',
        link: ['./original_maps/forest/polyany_1977_omaps.jpg','./original_maps/forest/polyany_1977_all_points_omaps.jpg','./original_maps/forest/polyany_1977_m1_omaps.jpg','./original_maps/forest/polyany_1977_w1_omaps.jpg','./original_maps/forest/polyany_1977_mb_omaps.jpg','./original_maps/forest/polyany_1977_wb_omaps.jpg'],
        bounds: [[60.3376111, 29.2545319], [60.3339579, 29.2981339], [60.3079065, 29.245348]],
        author: 'MLVA_M'
    },
    {
        name: 'Поляны, Семиозерье',
        year: 2016,
        url: './maps/forest/polyany_2016.webp',
        link: ['./original_maps/forest/polyany_2016_omaps.gif','./original_maps/forest/polyany_2016_omaps.ocd','./original_maps/forest/polyany_2014_omaps.gif','./original_maps/forest/polyany_2014_omaps.ocd'],
        bounds: [[60.3201061, 29.2645741], [60.307949, 29.3699741], [60.2923422, 29.2521286]],
        author: 'SHRNN',
        owner: 'SHRNN'
    },
    {
        name: 'Поляны, Семиозерье',
        year: 2019,
        url: './maps/forest/polyany_2019.webp',
        link: ['./original_maps/forest/polyany_2019_omaps.jpg','./original_maps/forest/polyany_shirinyan_2014_omaps.ocd'],
        bounds: [[60.3174072, 29.281826], [60.3078214, 29.3697166], [60.2900877, 29.2698097]],
        publish: 'https://vk.com/album-230167293_313563270',
        author: ['SHRNN','DBRTSV_V'],
        owner: 'SFSO_SPB'
    },
    {
        name: 'Гладышевский заказник',
        year: 1974,
        start: 'WN',
        page: 'spb',
        url: './maps/forest/gladyshevsky_zakaznik_1974.webp',
        link: ['./original_maps/forest/gladyshevsky_zakaznik_1974_omaps.jpg','./original_maps/forest/gladyshevsky_zakaznik_1974_clean_omaps.webp'],
        bounds: [[60.2702162, 29.3733215], [60.2701311, 29.4392395], [60.2285618, 29.3702316]]
    },
    {
        name: 'Заходское',
        year: 1967,
        url: './maps/forest/zahodskoe_1967.webp',
        link: './original_maps/forest/zahodskoe_1967_omaps.jpg',
        info: '23.09. Первенство Ленинграда. Эта карта - выкопировка с топокарты 25000.',
        bounds: [[60.4159288, 29.249897], [60.4131743, 29.3575287], [60.3825204, 29.2426014]]
    },
    {
        name: 'Лужки',
        year: 1975,
        url: './maps/forest/luzhki_1975.webp',
        link: './original_maps/forest/luzhki_1975_omaps.jpg',
        logo: 'leikin_mitenkov.gif',
        info: '<a href="https://o-site.spb.ru/history/History/book.html#mark04">Ленинградские многодневные соревнования</a>. Карта сделана с топоплана 5000 с сечением один метр.',
        bounds: [[60.2702162, 29.0072536], [60.2699608, 29.0602112], [60.2378513, 29.0073395]]
    },
    {
        name: 'Озерки',
        date: '1997-10-06',
        url: './maps/forest/ozerki_1997.webp',
        link: ['./original_maps/forest/ozerki_1997_omaps.jpg','./original_maps/forest/ozerki_1997_european_hope_omaps.webp'],
        results: './docs/1997/1997_10_04_european_hope_omaps.pdf',
        bounds: [[60.2580831, 29.0149784], [60.2558263, 29.0604687], [60.2326529, 29.0105152]],
        author: ['VLKV_K','EGRV_A','URVNTSV'],
        start: 'EUROPEAN_HOPE'
    },
    {
        name: 'Сарженское оз',
        year: 1,
        url: './maps/forest/sarzhenskoe_old.webp',
        link: './original_maps/forest/sarzhenskoe_old_omaps.jpg',
        bounds: [[60.2495234, 30.1576424], [60.2499493, 30.2304268], [60.2075868, 30.1615906]],
    },
    {
        name: 'Медное оз',
        year: 2006,
        excluded: true,
        url: './maps/forest/mednoe_rfar_2006.webp',
        link: ['./original_maps/forest/mednoe_rfar_2006_omaps.gif','./original_maps/forest/mednoe_rfar_2006_velo_omaps.gif','./original_maps/forest/mednoe_rfar_2006_last_omaps.gif','./original_maps/forest/mednoe_svetloe_2001_omaps.jpg'],
        bounds: [[60.2312467, 30.110693], [60.2263456, 30.1721478], [60.2049, 30.1013374]],
        author: 'CHGRVSKY_V',
        owner: 'CHGRVSKY_V',
        start: 'RFAR',
        zindex: 2
    },
/*
    {
        name: 'Первомайское, Семейные оз',
        year: 2012,
        url: './maps/forest/pervomayskoe_semejnie_2012.webp',
        bounds: [[60.4328319, 29.6654892], [60.430333, 29.7004223], [60.4133014, 29.6600389]],
        author: ['MKHLV_A','SLBDNK','GVRLK'],
        owner: 'WN'
    },
    {
        name: 'Первомайское, Семейные оз',
        year: 2020,
        url: './maps/forest/pervomayskoe_semejnye_2020.webp',
        bounds: [[60.4410684, 29.6490955], [60.4374056, 29.699049], [60.4238095, 29.6447182]],
        author: ['MKHLV_A','SLBDNK','GVRLK'],
        owner: 'WN'
    },
    {
        name: 'Первомайское, Протяжённое оз',
        year: 2014,
        url: './maps/forest/pervomayskoe_protjazhennoe_2014.webp',
        bounds: [[60.4424021, 29.6019745], [60.4386336, 29.6680641], [60.4136828, 29.5941639]],
        author: ['GVRLK','MKHLV_A','SLBDNK'],
        owner: 'WN'
    },
    {
        name: 'Первомайское, Тайванчик',
        year: 2022,
        url: './maps/forest/pervomayskoe_taiwan_2022.webp',
        bounds: [[60.4383372, 29.6908951], [60.4355847, 29.7393036], [60.407368, 29.6830845]],
        author: ['MKHLV_A','SLBDNK','GVRLK'],
        owner: 'WN'
    },
    {
        name: 'Первомайское, оз Дедово',
        year: 2015,
        url: './maps/forest/pervomayskoe_dedovo_2015.webp',
        bounds: [[60.4191491, 29.6963882], [60.4171152, 29.7378445], [60.3921903, 29.689436]],
        author: ['SLBDNK','MKHLV_A','GVRLK'],
        owner: 'WN'
    },
    {
        name: 'Первомайское, юг',
        year: 2012,
        url: './maps/forest/pervomayskoe_south_2012.webp',
        bounds: [[60.4139583, 29.658494], [60.4112037, 29.6963453], [60.4009035, 29.6548891]],
        author: ['SLBDNK','MKHLV_A','GVRLK'],
        owner: 'WN'
    },
    {
        name: 'Первомайское',
        year: 2016,
        url: './maps/forest/pervomayskoe_2016.webp',
        bounds: [[60.4157593, 29.6345901], [60.414149, 29.6596527], [60.402684, 29.6314573]],
        author: ['MKHLV_A','SLBDNK','GVRLK'],
        owner: 'WN'
    },
*/
    {
        name: 'Первомайское',
        year: 2005,
        info: 'Белые Ночи 2005.',
        url: './maps/forest/pervomayskoe_2005.webp',
        link: './original_maps/forest/pervomayskoe_2005.jpg',
        bounds: [[60.4271985, 29.6654892], [60.4216065, 29.758358], [60.3860834, 29.654932]],
        author: ['SHRNN','RYLOV_V'],
        areas: [35,65],
        owner: 'SHRNN'
    },
    {
        name: 'Первомайское',
        year: 2021,
        area: 28,
        info: '2010-2021гг.',
        url: './maps/forest/pervomayskoe_2021.webp',
        bounds: [[60.4498531, 29.6019745], [60.4409625, 29.7499466], [60.396473, 29.5889282]],
        author: ['MKHLV_A','SLBDNK','GVRLK'],
        owner: 'WN'
    },
    {
        name: 'Первомайское, Червонное оз',
        year: 2006,
        url: './maps/forest/pervomayskoe_chervonnoe_2006.webp',
        link: './original_maps/forest/pervomayskoe_chervonnoe_2006_omaps.jpg',
        info: 'Кубок России по СРП.',
        bounds: [[60.4225385, 29.6753597], [60.417539, 29.7530365], [60.3953706, 29.6682358]],
        author: ['RYLOV_V','SHRNN','MKHLV_A'], //Гибрид карт Рылова, Шириняна и бригады Михайлова А.
        type: []
    },
    {
        name: 'Первомайское, оз Дедово',
        year: 2004,
        url: './maps/forest/pervomayskoe_dedovo_2004.webp',
        link: './original_maps/forest/pervomayskoe_dedovo_2004_omaps.jpg',
        bounds: [[60.4225809, 29.6982336], [60.4206108, 29.73557], [60.3966002, 29.6912384]],
        author: ['RYLOV_V','SHRNN']
    },
    {
        name: 'Первомайское, окраина',
        year: 2016,
        url: './maps/forest/pervomayskoe_hill_2016.webp',
        bounds: [[60.3609755, 29.7178459], [60.3601902, 29.7262788], [60.3553191, 29.7182536]],
        author: 'SHRNN',
        owner: 'VYBORG'
    },
    {
        name: 'Осиновая Роща - Сертолово',
        year: 1993,
        logo: 'wn_retro.webp',
        url: './maps/forest/osinovaja_roscha_1993.webp',
        link: ['./original_maps/forest/osinovaja_roscha_1993_omaps.jpg','./original_maps/forest/osinovaja_roscha_1993_omaps.webp'],
        bounds: [[60.1387271, 30.2249336], [60.1360774, 30.2704239], [60.1077294, 30.2174664]],
        author: ['KAZNTSVA_O','KAZNTSV_S']
    },
    {
        name: 'Осиновая Роща',
        year: 1999,
        logo: 'wn_retro.webp',
        url: './maps/forest/osinovaja_roscha_1999.webp',
        link: './original_maps/forest/osinovaja_roscha_1999_omaps.webp',
        bounds: [[60.1243863, 30.2411556], [60.1228257, 30.267334], [60.1102317, 30.2372932]],
        author: 'KAZNTSVA_O'
    },
    {
        name: 'Осиновая Роща',
        year: 1,
        url: './maps/forest/osinovaja_roscha_old.webp',
        link: './original_maps/forest/osinovaja_roscha_old_omaps.jpg',
        bounds: [[60.1259254, 30.2477646], [60.1243863, 30.2677202], [60.1116004, 30.2429581]],
        author: 'MLVA_M'
    },
    {
        name: 'Осиновая Роща - Сертолово',
        year: 2018,
        url: './maps/forest/osinovaja_roscha_2018.webp',
        bounds: [[60.1399664, 30.2263927], [60.1361201, 30.2721405], [60.1116004, 30.216651]],
        owner: 'SHLKHN_AN',
        author: ['KVZN','TKMKV_K','SHRNN','KUZNTSV_A']
    },
    {
        name: 'Парголовская лыжная трасса',
        year: 2007,
        url: './maps/forest/pargolovo_2020.webp',
        link: './original_maps/forest/pargolovo_2020_omaps.jpg',
        bounds: [[60.0793892, 30.2779984], [60.0794213, 30.2900577], [60.0733414, 30.2788568]],
        author: 'SHRNN',
        owner: 'SHRNN',
        zindex: 2
    },
    {
        name: 'Западный Котлин',
        year: 2025,
        url: './maps/forest/kotlin_west_2025.webp',
        link: './original_maps/forest/kotlin_west_2025_exercise_omaps.jpg',
        bounds: [[60.0280601, 29.672699], [60.0256374, 29.6945643], [60.018368, 29.6677208]],
        author: ['RYLOV_V','SHRNN'],
        owner: ['RYLOV_V','SHRNN']
    },
    {
        name: 'Парголовская лыжная трасса',
        year: 2021,
        date: '2022-09-22',
        start: 'ST',
        url: './maps/forest/pargolovo_2021.webp',
        link: './original_maps/forest/pargolovo_2021_omaps.gif',
        bounds: [[60.080117, 30.2763891], [60.0785222, 30.2932334], [60.0738231, 30.2736425]],
        author: 'DBRTSV_V',
        owner: 'SHEIN',
        zindex: 3
    },
    {
        name: 'Барышево',
        year: 2015,
        area: 3,
        url: './maps/forest/baryshevo_2015.webp',
        o_gps: 23174,
        bounds: [[60.7467887, 29.5000935], [60.7404128, 29.5707321], [60.7173313, 29.4839573]],
        author: ['MKHLV_A','USNKO'],
        owner: 'WN'
    },
];
