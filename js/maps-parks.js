let parkMaps = [
    // --- городские парки ---
    {
        name: 'Суздальские озёра',
        year: 2000,
        logo: 'orients.webp',
        url: './maps/parks/ozerki_1999.webp',
        link: './original_maps/parks/ozerki_1999_omaps.jpg',
        bounds: [[60.0538953, 30.3008509], [60.0502746, 30.3310204], [60.0345449, 30.2899933]],
        author: 'DBRTSV_V',
        owner: 'SHEIN',
        type: ['CITY']
    },
    {
        name: 'Парк Александрия',
        year: 1,
        url: './maps/parks/aleksandria_retro.webp',
        link: './original_maps/parks/aleksandria_retro_omaps.webp',
        bounds: [[59.8851475, 29.9280882], [59.8857288, 29.9527216], [59.8747243, 29.9284315]],
        type: ['PARK']
    },
    {
        name: 'Парк Авиаторов',
        year: 2023,
        url: './maps/parks/aviatorov_2020.webp',
        link: './original_maps/parks/aviatorov_2020_omaps.jpg',
        bounds: [[59.8730334, 30.2978039], [59.8714502, 30.3094125], [59.8646102, 30.2934694]],
        author: 'SHRNN',
        owner: 'SHRNN',
        type: ['PARK']
    },
    {
        name: 'Парк Авиаторов',
        year: 2025,
        url: './maps/parks/aviatorov_2025.webp',
        link: './original_maps/parks/aviatorov_2025_omaps.jpg',
        bounds: [[59.8726242, 30.2977824], [59.8711271, 30.3088546], [59.8647503, 30.293684]],
        author: ['SHRNN','RSKV_S','SVTLNV'],
        owner: 'SFSO_SPB',
        type: ['PARK']
    },
    {
        name: 'Парк Победы',
        year: 1984,
        url: './maps/parks/pobedy_1984.webp',
        link: './original_maps/parks/pobedy_1984_omaps.jpg',
        bounds: [[59.8722687, 30.3208065], [59.8718056, 30.338316], [59.8645025, 30.3191543]],
        author: 'TRSV',
        type: ['PARK']
    },
    {
        name: 'Парк Победы',
        year: 1998,
        url: './maps/parks/pobedy_1998.webp',
        link: ['./original_maps/parks/pobedy_1998_omaps.jpg','./original_maps/parks/pobedy_1998_10000_omaps.jpg'],
        bounds: [[59.8718918, 30.3206992], [59.871881, 30.3369641], [59.8642332, 30.3205919]],
        author: ['SBLV_A','PRKHMNKO','JKBV'],
        owner: 'KARTA',
        type: ['PARK']
    },
    {
        name: 'Парк Победы',
        year: 2020,
        info: 'Фото-квест по парку.',
        url: './maps/parks/pobedy_2020.webp',
        link: './original_maps/parks/pobedy_2020_omaps.jpg',
        bounds: [[59.8728826, 30.3193045], [59.8723118, 30.3397965], [59.864481, 30.3173947]],
        author: 'FDRV_L',
        type: ['PARK']
    },
    {
        name: 'Парк Победы',
        year: 2025,
        url: './maps/parks/park_pobedy_2025.webp',
        link: './original_maps/parks/park_pobedy_2025_omaps.gif',
        bounds: [[59.873195, 30.3209352], [59.8716764, 30.339303], [59.8648849, 30.3182638]],
        author: 'EFRMV',
        owner: 'EFRMV',
        type: ['PARK']
    },
    {
        name: 'Парк Интернационалистов',
        year: 2020,
        url: './maps/parks/internatsionalistov_2021.webp',
        link: './original_maps/parks/internatsionalistov_2020_omaps.jpg',
        bounds: [[59.862768, 30.3929257], [59.8629404, 30.4120874], [59.8554414, 30.3932476]],
        author: 'SRBRNTSKY',
        owner: 'SFSO_SPB',
        type: ['PARK']
    },
    {
        name: 'Парк Интернационалистов',
        year: 2025,
        url: './maps/parks/internatsionalistov_2025.webp',
        link: './original_maps/parks/internatsionalistov_2025_omaps.jpg',
        bounds: [[59.862768, 30.3929257], [59.8627573, 30.4120231], [59.8559586, 30.3932691]],
        author: ['SRBRNTSKY','SHRNN'],
        owner: 'SFSO_SPB',
        type: ['PARK']
    },
    {
        name: 'Парк Екатерингоф',
        year: 1986,
        url: './maps/parks/ekateringof_1986.webp',
        link: './original_maps/parks/ekateringof_1986_omaps.jpg',
        bounds: [[59.9069523, 30.2550173], [59.9058334, 30.2711964], [59.9003779, 30.2532792]],
        author: 'CHGRVSKY_V',
        type: ['PARK']
    },
    {
        name: 'Парк Екатерингоф',
        year: 1998,
        url: './maps/parks/ekateringof_1998.webp',
        link: './original_maps/parks/ekateringof_1998_omaps.jpg',
        bounds: [[59.9064789, 30.251112], [59.906565, 30.2688789], [59.8999798, 30.2512836]],
        author: ['MLN_S','PRKHMNKO'],
        owner: 'KARTA',
        type: ['PARK']
    },
    {
        name: 'Парк Екатерингоф',
        year: 2021,
        url: './maps/parks/ekateringof_2021.webp',
        link: ['./original_maps/parks/ekateringof_2021_omaps.jpg','./original_maps/parks/ekateringof_2021_trailo_omaps.jpg'],
        info: '<a href="https://vk.com/wall-135156716_1468">Карта решений Trail-O</a>',
        bounds: [[59.907146, 30.2534723], [59.905403, 30.270381], [59.9005501, 30.250597]],
        author: 'GLTV_D',
        owner: 'VOLKOV_AM',
        type: ['PARK']
    },
    {
        name: 'Парк Екатерингоф',
        year: 2020,
        url: './maps/parks/ekateringof_2020.webp',
        link: ['./original_maps/parks/ekateringof_2020_omaps.jpg','./original_maps/parks/ekateringof_2020_omaps.ocd'],
        bounds: [[59.9069201, 30.2526999], [59.905941, 30.2700162], [59.9003349, 30.2513695]],
        author: 'SHRNN',
        owner: 'SHRNN',
        type: ['PARK']
    },
    {
        name: 'Ивановский карьер',
        year: 2021,
        url: './maps/city/ivanovsky_kareer_2021.webp',
        link: './original_maps/parks/ivanovsky_kareer_2021_omaps.jpg',
        bounds: [[59.8807331, 30.4200268], [59.8786657, 30.4391885], [59.8730011, 30.416894]],
        author: 'GLTV_D',
        owner: 'VOLKOV_AM',
        type: ['PARK']
    },
    {
        name: 'Полежаевский парк, север',
        year: 2017,
        url: './maps/parks/polezhaevsky_north_2017.webp',
        link: './original_maps/parks/polezhaevsky_north_2017_omaps.webp',
        bounds: [[59.8485335, 30.1775765], [59.8457957, 30.2120376], [59.8422278, 30.1734781]],
        author: 'ZCHNV',
        type: ['PARK']
    },
    {
        name: 'Полежаевский парк',
        year: 2015,
        url: './maps/parks/polezhaevsky_2015.webp',
        link: './original_maps/parks/polezhaevsky_2015_omaps.gif',
        bounds: [[59.8465179, 30.1799583], [59.8452891, 30.2122307], [59.8330204, 30.1778984]],
        type: ['PARK'],
        author: 'ELTSV',
        owner: 'ELTSV'
    },
    {
        name: 'Полежаевский парк',
        year: 2001,
        url: './maps/parks/polezhaevsky_2001.webp',
        link: ['./original_maps/parks/polezhaevsky_2001_omaps.jpg','./original_maps/parks/polezhaevsky_2001_omaps.ocd'],
        bounds: [[59.8468413, 30.1803875], [59.8456341, 30.2112436], [59.8333439, 30.1780701]],
        author: 'KRCHKN_V',
        type: ['PARK']
    },
    {
        name: 'Полюстровский парк',
        year: 2022,
        url: './maps/parks/polyustrovsky_2022.webp',
        link: './original_maps/parks/polyustrovsky_2022_omaps.jpg',
        bounds: [[59.9691563, 30.4205847], [59.9680824, 30.4335666], [59.9602097, 30.4179668]],
        author: ['FDRV_L','TKMKVA_P','RDNV_I'],
        owner: 'RDNV_I',
        type: ['PARK']
    },
    {
        name: 'Пулковский парк',
        year: 2023,
        date: '2026-03-08',
        url: './maps/parks/pulkovsky_2024.webp',
        link: './original_maps/parks/pulkovsky_2024_omaps.webp',
        o_gps: 24380,
        publish: 'https://vk.com/album-230167293_312838601',
        o_site: '260308_ST',
        bounds: [[59.8440118, 30.3233814], [59.8425512, 30.3391743], [59.8324705, 30.3185749]],
        type: ['PARK'],
        author: 'IVNVA_G',
        owner: 'ANCHKV'
    },
    {
        name: 'Сосновка',
        year: 1,
        url: './maps/parks/sosnovka_len_tv.webp',
        link: './original_maps/parks/sosnovka_len_tv_omaps.jpg',
        info: 'Приз Ленинградского ТВ.',
        bounds: [[60.0332159, 30.3315353], [60.0315224, 30.3691721], [60.0119659, 30.3272867]],
        type: ['PARK']
    },
    {
        name: 'Сосновка',
        year: 1975,
        logo: 'len_iskry.jpg',
        url: './maps/parks/sosnovka_1975.webp',
        link: './original_maps/parks/sosnovka_1975_omaps.jpg',
        info: '2-е соревнования на Приз газеты Ленинские Искры.',
        bounds: [[60.0297431, 30.3408909], [60.029057, 30.368185], [60.0123734, 30.3389168]],
        type: ['PARK']
    },
    {
        name: 'Сосновка',
        year: 1981,
        url: './maps/parks/sosnovka_1981.webp',
        link: './original_maps/parks/sosnovka_1981_omaps.jpg',
        bounds: [[60.033173, 30.3315783], [60.0316081, 30.3688288], [60.0115583, 30.3277588]],
        author: ['SHLKHN_Y','BZNV_A'],
        type: ['PARK']
    },
    {
        name: 'Сосновка',
        year: 1997,
        url: './maps/parks/sosnovka_1997.webp',
        link: './original_maps/parks/sosnovka_1997_omaps.jpg',
        bounds: [[60.0363025, 30.3272438], [60.0337089, 30.3714466], [60.0121375, 30.3218794]],
        author: ['DBRTSV_V','SHLKHN_Y'],
        type: ['PARK']
    },
    {
        name: 'Сосновка',
        year: 1999,
        url: './maps/parks/sosnovka_1999.webp',
        link: './original_maps/parks/sosnovka_1999_omaps.jpg',
        bounds: [[60.0245974, 30.3291321], [60.0250048, 30.3599024], [60.0104643, 30.3290462]],
        author: ['GLBK','MLN_S','FLMNV','SBLV_A','SLV_J','JKBV','PRKHMNKO'],
        owner: 'KARTA',
        type: ['PARK']
    },
    {
        name: 'Сосновка',
        year: 2004,
        url: './maps/parks/sosnovka_2004.webp',
        link: './original_maps/parks/sosnovka_2004_omaps.jpg',
        bounds: [[60.0343091, 30.3320074], [60.0319083, 30.3705454], [60.0124807, 30.3265572]],
        author: ['SHKLV','BRDR','DRBSHV'],
        type: ['PARK']
    },
    {
        name: 'Сосновка',
        year: 2011,
        url: './maps/parks/sosnovka_2019.webp',
        link: './original_maps/parks/sosnovka_2011_omaps.gif',
        bounds: [[60.033859, 30.3354406], [60.031844, 30.3700733], [60.0119873, 30.3302479]],
        author: ['DBRTSV_V','SHKLV','BRDR'],
        type: ['PARK']
    },
    {
        name: 'Сосновка',
        year: 2014,
        url: './maps/parks/sosnovka_2014.webp',
        bounds: [[60.0321977, 30.3290033], [60.0321548, 30.3670907], [60.0104858, 30.3286171]],
        author: 'MSPN',
        type: ['PARK']
    },
    {
        name: 'Сосновка',
        year: 2024,
        url: './maps/parks/sosnovka_2024.webp',
        link: './original_maps/parks/sosnovka_2024_omaps.jpg',
        publish: 'https://vk.com/album-230167293_311811604',
        bounds: [[60.0357024, 30.3341961], [60.0314581, 30.3732061], [60.0129311, 30.3247547]],
        author: 'ZCHNV',
        owner: 'SFSO_SPB',
        type: ['PARK']
    },
    {
        name: 'парк Челюскинцев-Удельный',
        year: 1,
        url: './maps/parks/udelny_retro.webp',
        link: './original_maps/parks/udelny_retro_omaps.jpg',
        bounds: [[60.0180571, 30.2986622], [60.0159768, 30.324626], [60.0023335, 30.2944994]],
        logo: 'leningrad_retro.gif',
        type: ['PARK'],
    },
    {
        name: 'Удельный парк',
        year: 1987,
        url: './maps/parks/udelny_1987.webp',
        link: './original_maps/parks/udelny_1987_omaps.jpg',
        bounds: [[60.0174137, 30.2978897], [60.0153548, 30.3249693], [60.0019472, 30.2933836]],
        author: 'VSLVSKY',
        type: ['PARK'],
        qtty: 10
    },
    {
        name: 'Удельный парк',
        year: 1998,
        url: './maps/parks/udelny_1998.webp',
        link: './original_maps/parks/udelny_1998_omaps.jpg',
        bounds: [[60.0168346, 30.2952719], [60.0167917, 30.3217506], [60.0017756, 30.2946281]],
        author: ['MLN_S','SBLV_A','JKBV'],
        owner: 'KARTA',
        type: ['PARK']
    },
    {
        name: 'Удельный парк',
        year: 2004,
        url: './maps/parks/udelny_2004.webp',
        link: ['./original_maps/parks/udelny_2004_omaps.jpg','./original_maps/parks/udelny_2004_2_omaps.jpg'],
        bounds: [[60.0172636, 30.2964306], [60.0149902, 30.331192], [60.0026553, 30.2923965]],
        author: 'DBRTSV_V',
        type: ['PARK']
    },
    {
        name: 'Удельный парк',
        year: 2010,
        url: './maps/parks/udelny_2009.webp',
        link: './original_maps/parks/udelny_2009_omaps.jpg',
        bounds: [[60.0128453, 30.2990055], [60.0108934, 30.3229952], [60.002548, 30.2965593]],
        author: ['NKFRV_A','TKMKV_K'],
        type: ['PARK']
    },
    {
        name: 'Удельный парк',
        year: 2021,
        url: './maps/parks/udelny_2022.webp',
        link: ['./original_maps/parks/udelny_2021_omaps.jpg','./books/shirinyan_photo_orient_2026_omaps.pdf'],
        publish: 'https://vk.com/album-230167293_312706609',
        bounds: [[60.0165773, 30.2937269], [60.0135102, 30.3244543], [60.0034706, 30.2884483]],
        type: ['PARK','FOTO'],
        author: 'LVCHV',
        owner: 'SFSO_SPB'
    },
    {
        name: 'Пискарёвский парк',
        year: 1985,
        url: './maps/parks/piskarevsky_1985.webp',
        link: './original_maps/parks/piskarevsky_1985_omaps.jpg',
        bounds: [[60.00656, 30.395093], [60.0044575, 30.4227734], [59.9948015, 30.3912306]],
        author: 'RDKV',
        type: ['PARK']
    },
    {
        name: 'Пискарёвский парк',
        year: 1996,
        url: './maps/parks/piskarevsky_1996.webp',
        link: './original_maps/parks/piskarevsky_1996_omaps.jpg',
        bounds: [[60.0117943, 30.3959084], [60.0085122, 30.441184], [59.9946298, 30.3915739]],
        author: 'DBRTSV_V',
        type: ['PARK']
    },
    {
        name: 'Пискарёвский парк',
        year: 1999,
        url: './maps/parks/piskarevsky_1999.webp',
        link: './original_maps/parks/piskarevsky_1999_omaps.jpg',
        bounds: [[60.0049725, 30.3918743], [60.0048223, 30.4322577], [59.9932992, 30.3915739]],
        author: ['BSNKO','BLVA_D','MLN_S','JKBV'],
        owner: 'KARTA',
        type: ['PARK']
    },
    {
        name: 'Пискарёвский парк',
        year: 2012,
        url: './maps/parks/piskarevsky_2012.webp',
        link: './original_maps/parks/piskarevsky_2012_omaps.gif',
        bounds: [[60.0059808, 30.3960371], [60.0029342, 30.4340601], [59.9946513, 30.3919601]],
        author: 'DBRTSV_V',
        type: ['PARK'],
    },
    {
        name: 'Пискарёвский парк',
        year: 2001,
        url: './maps/parks/piskarevsky_2001.webp',
        link: './original_maps/parks/piskarevsky_2001_omaps.jpg',
        bounds: [[60.0064099, 30.3954363], [60.0045005, 30.4221725], [59.9945976, 30.3912306]],
        author: ['RDKV','DBRTSV_V','BRDR'],
        type: ['PARK']
    },
    {
        name: 'Пискарёвский парк',
        year: 2024,
        url: './maps/parks/piskarevsky_2024.webp',
        link: './original_maps/parks/piskarevsky_2024_omaps.jpg',
        publish: 'https://o-site.spb.ru/race.php?id=250223_ST',
        bounds: [[60.0064313, 30.3953075], [60.0045863, 30.4228163], [59.9943508, 30.3908873]],
        author: 'DBRTSV_V',
        owner: 'SFSO_SPB',
        type: ['PARK']
    },
    {
        name: 'Парк Лесотехнической академии',
        year: 1984,
        url: './maps/parks/lesotekchnicheskaya_1984.webp',
        link: './original_maps/parks/lesotekchnicheskaya_1984_omaps.jpg',
        bounds: [[59.9978703, 30.3309774], [59.9959604, 30.3546023], [59.9907022, 30.3297114]],
        author: ['KLCHTSKA','AZBKNA'],
        type: ['PARK']
    },
    {
        name: 'Парк Лесотехнической академии',
        year: 2001,
        url: './maps/parks/lesotekchnicheskaya_2001.webp',
        link: './original_maps/parks/lesotekchnicheskaya_2001_omaps.jpg',
        bounds: [[59.9962179, 30.3426075], [59.9950912, 30.3543878], [59.9897256, 30.3403115]],
        author: 'GRBTNKV',
        type: ['PARK']
    },
    {
        name: 'Парк Лесотехнической академии',
        year: 2024,
        url: './maps/parks/lesotekchnicheskaya_2024.webp',
        link: './original_maps/parks/lesotekchnicheskaya_2024_omaps.jpg',
        bounds: [[59.9979668, 30.330205], [59.9964218, 30.3539801], [59.9904553, 30.3286386]],
        author: ['SHRNN','RDNV_I'],
        owner: 'RDNV_I',
        type: ['PARK']
    },
    {
        name: 'Парк Лесотехнической академии',
        year: 2025,
        url: './maps/parks/lesotekchnicheskaya_2025.webp',
        link: './original_maps/parks/lesotekchnicheskaya_2025_omaps.jpg',
        publish: 'https://o-site.spb.ru/race.php?id=250308_ST',
        bounds: [[59.9978166, 30.3306985], [59.9954775, 30.3544307], [59.9910027, 30.3282738]],
        author: ['SHRNN','ZCHNV'],
        owner: 'SFSO_SPB',
        type: ['PARK']
    },
    {
        name: 'Парки Пионерский и им.акд. Сахарова',
        date: '2021-05-12',
        url: './maps/parks/sakharova_2015.webp',
        link: ['./original_maps/parks/sakharova_2015_omaps.jpg','./original_maps/parks/sakharova_2021_st_omaps.gif'],
        bounds: [[59.9859369, 30.4056072], [59.9842195, 30.4245543], [59.9762003, 30.4020882]],
        start: 'ST',
        author: 'DBRTSV_V',
        owner: 'SHEIN',
        type: ['PARK']
    },
    {
        name: 'Таврический сад',
        year: 1985,
        url: './maps/parks/tavrichesky_1985.webp',
        link: './original_maps/parks/tavrichesky_1985_omaps.jpg',
        bounds: [[59.9480908, 30.3685713], [59.948209, 30.378871], [59.943631, 30.3675628]],
        author: ['RYLOV_V','VLKV_K'],
        logo: 'leopold.webp',
        type: ['PARK']
    },
    {
        name: 'Таврический сад',
        year: 1998,
        url: './maps/parks/tavrichesky_1998.webp',
        link: './original_maps/parks/tavrichesky_1998_omaps.jpg',
        bounds: [[59.9489504, 30.3675413], [59.9488107, 30.3782916], [59.9437815, 30.3673697]],
        author: 'PRKHMNKO',
        owner: 'KARTA',
        type: ['PARK']
    },
    {
        name: 'Таврический сад',
        year: 2011,
        url: './maps/parks/tavrichesky_2023.webp',
        link: ['./original_maps/parks/tavrichesky_2023_omaps.jpg','./original_maps/parks/tavrichesky_2011_omaps.webp','./original_maps/parks/tavrichesky_2011_pictures.webp'],
        bounds: [[59.9482305, 30.367713], [59.9476072, 30.3789997], [59.9436633, 30.3668547]],
        author: 'FDRV_L',
        type: ['PARK','FOTO']
    },
    {
        name: 'Таврический сад',
        year: 2025,
        url: './maps/parks/tavrichesky_2025.webp',
        link: ['./original_maps/parks/tavrichesky_2025_omaps.jpg','./books/shirinyan_photo_orient_2026_omaps.pdf'],
        bounds: [[59.9484239, 30.3688502], [59.9474783, 30.3791499], [59.9438675, 30.3672624]],
        author: 'SHRNN',
        owner: 'SHRNN',
        type: ['PARK','FOTO']
    },
    {
        name: 'Каменный о-в',
        year: 1998,
        url: './maps/parks/kamenny_1998.webp',
        link: './original_maps/parks/kamenny_1998_omaps.jpg',
        bounds: [[59.9819868, 30.2732992], [59.9818579, 30.3060436], [59.9729899, 30.2730846]],
        author: ['SBLV_A','SLV_J','PRKHMNKO','ARTMV'],
        owner: 'KARTA',
        type: ['PARK']
    },
    {
        name: 'ЦПКиО, Елагин остров',
        year: 1984,
        url: './maps/parks/elagin_1984.webp',
        link: './original_maps/parks/elagin_1984_omaps.jpg',
        bounds: [[59.984563, 30.2373791], [59.981815, 30.2739429], [59.9772632, 30.235877]],
        author: 'CHGRVSKY_V',
        type: ['PARK']
    },
    {
        name: 'ЦПКиО им.Кирова',
        year: 1998,
        url: './maps/parks/elagin_1998.webp',
        link: './original_maps/parks/elagin_1998_omaps.jpg',
        bounds: [[59.9824591, 30.2361774], [59.9823732, 30.2739859], [59.9752017, 30.2362204]],
        author: ['SBLV_A','JKBV','PRKHMNKO','ARTMV'],
        owner: 'KARTA',
        type: ['PARK']
    },
    {
        name: 'ЦПКиО, Елагин остров',
        year: 2000,
        url: './maps/parks/elagin_2000.webp',
        link: './original_maps/parks/elagin_2000_omaps.jpg',
        bounds: [[59.9843483, 30.2368641], [59.981815, 30.274415], [59.9770699, 30.2354908]],
        author: 'DBRTSV_V',
        type: ['PARK']
    },
    {
        name: 'ЦПКиО, Елагин остров',
        year: 2017,
        url: './maps/parks/elagin_2017.webp',
        link: './original_maps/parks/elagin_2017_omaps.gif',
        bounds: [[59.9851855, 30.2369928], [59.9827167, 30.2753162], [59.9761681, 30.2349758]],
        author: ['DBRTSV_V','URVNTSV'],
        owner: 'GLFSTRM',
        type: ['PARK']
    },
    {
        name: 'ЦПКиО, Елагин остров',
        year: 2020,
        url: './maps/parks/elagin_2020.webp',
        link: ['./original_maps/parks/elagin_2020_omaps.webp','./original_maps/parks/elagin_2020_courses_A_B_omaps.pdf','./original_maps/parks/elagin_2020_course_C_omaps.pdf','./original_maps/parks/elagin_2020_tasks_A_B_omaps.pdf','./original_maps/parks/elagin_2020_tasks_C_omaps.pdf','./original_maps/parks/elagin_2020_info_omaps.pdf'],
        about: 'https://elaginpark.org/events/otkrytaya-interaktivnaya-igry-sredi-shkolnykh-sportivnykh-klubov-obshcheobrazovatelnykh-uchrezhdeniy/',
        bounds: [[59.984563, 30.2363062], [59.9820082, 30.2755737], [59.9767693, 30.2348471]],
        author: ['DBRTSV_V','BBCH_A'],
        type: ['PARK','FOTO']
    },
    {
        name: 'Александрино, север',
        year: 2013,
        url: './maps/parks/aleksandrino_north.webp',
        link: './original_maps/parks/aleksandrino_north_omaps.gif',
        bounds: [[59.8478544, 30.2178097], [59.8467766, 30.238409], [59.8360395, 30.2148914]],
        author: 'URVNTSV',
        type: ['PARK']
    },
    {
        name: 'Александрино, север',
        year: 2025,
        info: 'Российский азимут.',
        o_site: '250531_RA',
        url: './maps/parks/aleksandrino_north_2025.webp',
        link: './original_maps/parks/aleksandrino_north_2025_omaps.gif',
        publish: 'https://vk.com/album-230167293_309922104',
        bounds: [[59.8487382, 30.2157068], [59.8469059, 30.233109], [59.8364923, 30.2106643]],
        author: 'ZCHNV',
        owner: 'SFSO_SPB',
        type: ['PARK']
    },
    {
        name: 'Александрино, юг',
        year: 1986,
        url: './maps/parks/aleksandrino_1986.webp',
        link: './original_maps/parks/aleksandrino_1986.jpg',
        bounds: [[59.8382605, 30.2238178], [59.8375058, 30.2451468], [59.8273697, 30.2206421]],
        author: 'VLKV_K',
        type: ['PARK']
    },
    {
        name: 'Александрино, юг',
        year: 2006,
        url: './maps/parks/aleksandrino_south_2007.webp',
        link: './original_maps/parks/aleksandrino_south_2007_omaps.jpg',
        bounds: [[59.8394464, 30.2193117], [59.8378939, 30.2461553], [59.8255686, 30.2155566]],
        author: ['DBRTSV_V','SHRNN'],
        type: ['PARK']
    },
    {
        name: 'Александровский сад',
        year: 2020,
        info: 'Адмиралтейский квест.',
        url: './maps/parks/aleksandrovsky_sad_2020.webp',
        bounds: [[59.9363974, 30.3006792], [59.9402025, 30.3102708], [59.9336024, 30.3046274]],
        author: ['FDRV_L','BBCH_A'],
        type: ['PARK']
    },
    {
        name: 'Сад 9 Января',
        year: 2018,
        url: './maps/parks/sad_9_janvarya_2018.webp',
        link: './original_maps/parks/sad_9_janvarya_2018_omaps.jpg',
        bounds: [[59.8960302, 30.2739215], [59.8952337, 30.2820539], [59.8897227, 30.2717972]],
        author: 'BEVZA',
        owner: 'BEVZA',
        type: ['PARK']
    },
    {
        name: 'Луга, парк Зелёного Бора',
        year: 2019,
        url: './maps/parks/luga_zeleny_bor_park_2019.webp',
        link: './original_maps/parks/luga_zeleny_bor_park_2019_omaps.jpg',
        bounds: [[58.7015482, 29.8206925], [58.7006118, 29.8332667], [58.691938, 29.8172808]],
        owner: 'SHEIN',
        type: ['PARK'],
        author: 'TKMKV_K'
    },
    {
        name: 'Воронцовский сквер',
        year: 2024,
        url: './maps/parks/vorontsovsky_skver_2024.webp',
        link: './original_maps/parks/vorontsovsky_skver_2024_omaps.webp',
        o_gps: 24753,
        bounds: [[59.8511632, 30.2274656], [59.8511201, 30.2432799], [59.8434782, 30.2277231]],
        author: 'SVTLNV',
        type: ['PARK']
    },
    {
        name: 'Новознаменка, запад',
        year: 2014,
        url: './maps/parks/novoznamenka_2014.webp',
        link: './original_maps/parks/novoznamenka_2014_omaps.gif',
        bounds: [[59.8532646, 30.101037], [59.8502255, 30.1324081], [59.8425943, 30.0972176]],
        type: ['PARK'],
        author: 'ZCHNV',
        owner: 'ZCHNV'
    },
    {
        name: 'Петергоф, Английский парк',
        year: 2010,
        url: './maps/parks/english_2010.webp',
        link: './original_maps/parks/english_2010_omaps.jpg',
        bounds: [[59.8859441, 29.8699379], [59.8840493, 29.8965454], [59.8706316, 29.8661184]],
        type: ['PARK'],
        author: 'ZCHNV',
        owner: 'ZCHNV'
    },
    {
        name: 'Петергоф, пл Университет',
        year: 1,
        url: './maps/parks/univer_old.webp',
        link: './original_maps/parks/univer_old_omaps.jpg',
        bounds: [[59.8984732, 29.8204136], [59.8974831, 29.852643], [59.8862563, 29.8212504]],
        type: ['PARK']
    },
    {
        name: 'Мартышкино, Сергиевка',
        year: 1989,
        startYear: 2022,
        month: 1,
        start: 'RED_SELO_FOTO',
        url: './maps/parks/sergievka_1989.webp',
        link: ['./original_maps/parks/sergievka_1989_clean_omaps.jpg','./original_maps/parks/sergievka_1989_omaps.jpg','./original_maps/parks/sergievka_1989_pictures.jpg','./books/shirinyan_photo_orient_2026_omaps.pdf'],
        bounds: [[59.8998506, 29.8203707], [59.8984947, 29.8535442], [59.885492, 29.8211432]],
        author: 'OSMCHN',
        type: ['PARK','FOTO']
    },
    {
        name: 'Петергоф, Сергиевка',
        year: 2023,
        url: './maps/parks/sergievka_2023.webp',
        link: './original_maps/parks/sergievka_2023_omaps.jpg',
        bounds: [[59.8997646, 29.8241472], [59.8961916, 29.8553896], [59.8871284, 29.8184824]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        type: ['PARK']
    },
    {
        name: 'Знаменка',
        year: 2016,
        startYear: 2023,
        start: 'RED_SELO_FOTO',
        url: './maps/parks/peterhof_znamenka_2023.webp',
        link: ['./original_maps/parks/peterhof_znamenka_2023_omaps.webp','./original_maps/parks/peterhof_znamenka_2023_pictures.pdf'],
        bounds: [[59.8842216, 29.9486446], [59.8821544, 29.9769688], [59.8727426, 29.9452972]],
        author: ['SHRNN','RYLOV_V'],
        owner: 'TZV_Y',
        type: ['PARK','FOTO']
    },
    {
        name: 'Александрийский (Пролетарский) парк',
        year: 2010,
        startYear: 2022,
        month: 12,
        start: 'RED_SELO_FOTO',
        url: './maps/parks/aleksandrijsky.webp',
        link: ['./original_maps/parks/aleksandrijsky_park_2010_omaps.gif','./original_maps/fun/aleksandrijsky_foto_2022_omaps.pdf','./original_maps/fun/aleksandrijsky_foto_2022_pictures.pdf'],
        bounds: [[59.8781919, 29.9196768], [59.8776534, 29.946413], [59.8633283, 29.9182177]],
        author: ['FDRV_L','LSNNKV','NKFRV_A','BLZRV_V'],
        owner: 'GLTV_YU',
        type: ['PARK','FOTO']
    },
    {
        name: 'Сосновая поляна',
        year: 2015,
        url: './maps/parks/sosnovaya_poljana_2015.webp',
        link: './original_maps/parks/sosnovaya_poljana_2015_omaps.jpg',
        bounds: [[59.8368373, 30.1255631], [59.8356729, 30.1428795], [59.8257843, 30.1229668]],
        author: ['SHKLV','BRDR'],
        owner: 'SHKLV',
        type: ['PARK']
    },
    {
        name: 'Южно-Приморский парк',
        year: 2026,
        url: './maps/parks/yuzhno_promorsky_2026.webp',
        link: './original_maps/parks/yuzhno_promorsky_2026_omaps.webp',
        bounds: [[59.8581675, 30.16114], [59.8562603, 30.1783597], [59.8482209, 30.157342]],
        o_gps: 25204,
        publish: 'https://vk.com/album-230167293_313693628',
        type: ['PARK'],
        author: 'ZCHNV',
        owner: 'SFSO_SPB'
    },
    {
        name: 'Южно-Приморский парк',
        year: 2021,
        url: './maps/parks/yuzhno_promorsky_2021.webp',
        link: './original_maps/parks/yuzhno_promorsky_2021_omaps.jpg',
        bounds: [[59.8571654, 30.1600456], [59.856131, 30.1748514], [59.8474664, 30.1573849]],
        type: ['PARK'],
        author: 'ZCHNV',
        owner: 'ZCHNV'
    },
    {
        name: 'Нижне-Ивановский сквер',
        year: 2020,
        startYear: 2022,
        start: 'RED_SELO_FOTO',
        url: './maps/parks/ivanovka_2020.webp',
        link: ['./original_maps/fun/ivanovka_low_foto_2022_omaps.gif','./original_maps/fun/ivanovka_low_foto_2022_pictures.pdf'],
        bounds: [[59.8449227, 30.1583934], [59.8439417, 30.1692724], [59.8343143, 30.1545525]],
        author: 'ZCHNV',
        owner: 'ZCHNV',
        type: ['PARK','FOTO']
    },
    {
        name: 'парк Литания',
        year: 2021,
        startYear: 2022,
        month: 1,
        start: 'RED_SELO_FOTO',
        url: './maps/parks/litania_2021.webp',
        link: ['./original_maps/fun/litania_foto_2022_omaps.pdf','./original_maps/fun/litania_foto_2022_pictures.pdf'],
        bounds: [[59.8477359, 30.1475143], [59.8462916, 30.1613545], [59.8376891, 30.1434588]],
        author: 'ZCHNV',
        owner: 'ZCHNV',
        type: ['PARK','FOTO']
    },
    {
        name: 'парк Литания',
        year: 1999,
        url: './maps/parks/litania_1999.webp',
        link: './original_maps/parks/litania_1999_omaps.jpg',
        bounds: [[59.8476604, 30.1475573], [59.8466365, 30.1589727], [59.8419798, 30.1456046]],
        author: 'FDRV_A',
        type: ['PARK']
    },
    {
        name: 'Полежаевский парк, юг',
        year: 2021,
        url: './maps/parks/polezhaevsky_south_2021.webp',
        link: './original_maps/parks/polezhaevsky_south_2021_omaps.gif',
        bounds: [[59.8406107, 30.1844645], [59.8391769, 30.2002144], [59.8277795, 30.1799369]],
        type: ['PARK'],
        author: 'ZCHNV',
        owner: 'ZCHNV'
    },
    {
        name: 'Гатчина, Приоратский парк',
        year: 2021,
        url: './maps/parks/gatchina_prioratsky_2021.webp',
        link: './original_maps/parks/gatchina_prioratsky_2021_omaps.webp',
        bounds: [[59.5652234, 30.1115942], [59.5625277, 30.1370001], [59.5448695, 30.103097]],
        author: ['DBRTSV_V','KTS_JU'],
        owner: 'SHEIN',
        type: ['PARK']
    },
    {
        name: 'Гатчина, парк Зверинец',
        year: 1986,
        url: './maps/parks/gatchina_zverinets_1986.webp',
        link: './original_maps/parks/gatchina_zverinets_1986_omaps.jpg',
        bounds: [[59.5939719, 30.0796223], [59.5917129, 30.1241684], [59.5632451, 30.0735283]],
        author: ['MLVA_M','MRSKY_S'],
        type: ['PARK']
    },
    {
        name: 'Гатчина, парк Зверинец',
        date: '2005-02-06',
        info: 'Чемпионат России по ориентированию бегом на заснеженном грунте.',
        url: './maps/parks/gatchina_zverinets_2005.webp',
        link: ['./original_maps/parks/gatchina_zverinets_2005_omaps.jpg','./original_maps/parks/gatchina_zverinets_2005_M21_omaps.jpg'],
        bounds: [[59.5863906, 30.0801802], [59.5830665, 30.1240396], [59.566506, 30.0745583]],
        author: ['VLKV_K','URVNTSV','MLVA_M','MRSKY_S'],
        type: ['PARK'],
        region: 'SPB',
        start: 'RUSSIA_CHAMP'
    },
    {
        name: 'Парк 300-летия СПб',
        year: 2022,
        url: './maps/parks/300_let_spb_2022.webp',
        link: './original_maps/parks/300_let_spb_2022_omaps.jpg',
        bounds: [[59.9879762, 30.1867604], [59.9856149, 30.2131104], [59.9793245, 30.1824903]],
        author: ['TKMKV_K','TKMKVA_P','IVNVA_G'],
        owner: 'SFSO_SPB',
        type: ['PARK']
    },
    {
        name: 'Куракина дача',
        year: 1985,
        url: './maps/parks/kurakina_dacha_1985.webp',
        link: './original_maps/parks/kurakina_dacha_1985_omaps.jpg',
        bounds: [[59.8766196, 30.448072], [59.8756935, 30.4600668], [59.8685851, 30.4451966]],
        type: ['PARK'],
        author: 'CHGRVSKY_Y'
    },
    {
        name: 'Куракина дача',
        year: 2017,
        url: './maps/parks/kurakina_dacha_2017.webp',
        link: ['./original_maps/parks/kurakina_dacha_2017_omaps.jpg','./original_maps/parks/kurakina_dacha_2017_omaps.ocd'],
        bounds: [[59.8766519, 30.448544], [59.8756935, 30.4600668], [59.8685851, 30.44554]],
        type: ['PARK'],
        author: 'DRBSHV',
        owner: 'KP31'
    },
    {
        name: 'Куракина дача',
        year: 2023,
        url: './maps/parks/kurakina_dacha_2023.webp',
        link: './original_maps/parks/kurakina_dacha_2023_omaps.jpg',
        bounds: [[59.877115, 30.4478574], [59.8760058, 30.4604101], [59.8678419, 30.4439306]],
        type: ['PARK'],
        author: 'ZCHNV',
        owner: 'SFSO_SPB'
    },
    {
        name: 'Ладожский парк',
        year: 2023,
        logo: 'krasnogv.png',
        url: './maps/parks/ladozhsky_park_2023.webp',
        link: './original_maps/parks/ladozhsky_2023_omaps.gif',
        bounds: [[59.9492513, 30.453372], [59.9477254, 30.4676628], [59.9396544, 30.4492307]],
        author: 'RDNV_I',
        owner: 'RDNV_I',
        type: ['PARK']
    },
    {
        name: 'Парк Политеха',
        year: 2022,
        date: '2017-09-13',
        url: './maps/parks/politekh_2022.webp',
        link: ['./original_maps/parks/politekh_2022_omaps.jpg','./original_maps/parks/politekh_2016_omaps.jpg','./original_maps/parks/politekh_st_2017_09_13_omaps.webp','./books/shirinyan_photo_orient_2026_omaps.pdf'],
        bounds: [[60.0096492, 30.3682709], [60.0094561, 30.3853941], [60.0023549, 30.3679705]],
        publish: 'https://vk.com/album-230167293_312031217',
        type: ['PARK','FOTO'],
        start: 'ST',
        author: 'ZCHNV',
        owner: 'SFSO_SPB'
    },
    {
        name: 'Парк Политеха',
        year: 1986,
        url: './maps/parks/politekh_1986.webp',
        link: './original_maps/parks/politekh_1986_omaps.jpg',
        bounds: [[60.0074611, 30.3678203], [60.0065171, 30.3838921], [60.0005311, 30.3661895]],
        type: ['PARK'],
        author: 'DBRTSV_V'
    },
    {
        name: 'Яблоновский сад',
        year: 2024,
        url: './maps/parks/yablonovsky_sad_2024.webp',
        link: './original_maps/parks/yablonovsky_sad_2024_omaps.webp',
        bounds: [[59.9302482, 30.452106], [59.9288504, 30.4730916], [59.9221836, 30.4497671]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        type: ['PARK']
    },
    {
        name: 'Яблоновский сад, курган',
        url: './maps/parks/yablonovsky_sad_kurgan.webp',
        link: ['./original_maps/parks/yablonovsky_sad_kurgan_omaps.gif','./original_maps/parks/yablonovsky_sad_kurgan_omaps.ocd'],
        bounds: [[59.9285548, 30.4566872], [59.9278559, 30.4689181], [59.9238881, 30.4552925]],
        type: ['PARK']
    },
    {
        name: 'Аллея Крыленко',
        year: 2024,
        url: './maps/parks/krylenko_2024.webp',
        link: './original_maps/parks/krylenko_2024_omaps.jpg',
        bounds: [[59.8982149, 30.4737782], [59.9008945, 30.4845071], [59.8967943, 30.475173]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        type: ['PARK']
    },
    {
        name: 'Кудрово, р Оккервиль',
        year: 1,
        url: './maps/parks/kudrovo_west_retro.webp',
        link: './original_maps/parks/kudrovo_west_retro_omaps.jpg',
        bounds: [[59.9108576, 30.490129], [59.9101799, 30.5024028], [59.904327, 30.4891419]],
        type: ['PARK']
    },
    {
        name: 'Кудрово, западные окраины',
        year: 2022,
        url: './maps/parks/kudrovo_west_2022.webp',
        link: './original_maps/parks/kudrovo_west_2022_omaps.jpg',
        bounds: [[59.9121055, 30.4902792], [59.9106425, 30.5056], [59.904865, 30.4882622]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        logo: 'kudrovo.gif',
        type: ['PARK'],
        zindex: 2
    },
    {
        name: 'Крестовский о-в',
        year: 1985,
        url: './maps/parks/krestovsky_1985.webp',
        link: './original_maps/parks/krestovsky_1985_omaps.jpg',
        bounds: [[59.9783153, 30.2152777], [59.975803, 30.2620125], [59.9683724, 30.2128744]],
        author: ['CHGRVSKY_V','CHGRVSKA_O'],
        type: ['PARK']
    },
    {
        name: 'Крестовский о-в - юг',
        year: 2023,
        url: './maps/parks/krestovsky_south_2023.webp',
        bounds: [[59.9725174, 30.2482152], [59.9713362, 30.2676988], [59.9662782, 30.2448678]],
        author: 'CHSNKV',
        type: ['PARK']
    },
    {
        name: 'Крестовский о-в',
        year: 2021,
        url: './maps/parks/krestovsky_2021.webp',
        link: './original_maps/parks/krestovsky_2021_omaps.webp',
        bounds: [[59.9762539, 30.2316284], [59.9746864, 30.2493525], [59.9698543, 30.229311]],
        author: ['DBRTSV_V','FDRV_I'],
        owner: 'GLFSTRM',
        type: ['PARK']
    },
    {
        name: 'Северомуринский парк',
        year: 1999,
        url: './maps/parks/severomurinsky_1999.webp',
        link: './original_maps/parks/severomurinsky_1999_omaps.jpg',
        bounds: [[60.0357453, 30.3655887], [60.0347057, 30.392046], [60.0267523, 30.3638077]],
        author: ['SHRNN','FRSHLVA'],
        type: ['PARK']
    },
    {
        name: 'Муринский парк, центр',
        date: '2014-05-21',
        url: './maps/parks/murinsky_center_2014.webp',
        link: './original_maps/parks/murinsky_center_2014_omaps.gif',
        bounds: [[60.0312223, 30.3902435], [60.0301718, 30.4105854], [60.0241257, 30.3891706]],
        author: ['SHRNN','FRSHLVA'],
        start: 'ST',
        type: ['PARK']
    },
/*
    {
        name: 'Муринский парк - запад',
        year: 2019,
        url: './maps/parks/murinsky_north_2019.webp',
        bounds: [[60.0365276, 30.3661895], [60.0340412, 30.3857374], [60.0313723, 30.3644514]],
        author: 'KUZNTSV_A',
        type: ['PARK']
    },
*/
    {
        name: 'Муринский парк и САМПО',
        year: 2012,
        url: './maps/parks/murinsky_sampo_2012.webp',
        link: './original_maps/parks/murinsky_sampo_2012_omaps.gif',
        bounds: [[60.0359703, 30.3663182], [60.0327229, 30.3922391], [60.0238577, 30.3605676]],
        author: ['SHRNN','MSPN'],
        type: ['PARK']
    },
    {
        name: 'Муринский парк, запад',
        year: 2010,
        url: './maps/parks/murinsky_north_2010.webp',
        link: './original_maps/parks/murinsky_north_2010_omaps.jpg',
        bounds: [[60.0360346, 30.3659534], [60.0334838, 30.3923464], [60.0299682, 30.3634858]],
        author: 'MSPN',
        type: ['PARK']
    },
    {
        name: 'Муринский парк, восток',
        date: '2023-04-26',
        url: './maps/parks/murinsky_east_2023.webp',
        link: ['./original_maps/parks/murinsky_east_2018_st_omaps.gif','./original_maps/parks/murinsky_east_2023_omaps.gif'],
        bounds: [[60.0257124, 30.4072809], [60.0252514, 30.4308414], [60.0175638, 30.4074097]],
        type: ['PARK'],
        author: ['SHRNN','CHGRVSKY_M'],
        owner: ['SHRNN','CHGRVSKY_M'],
        start: 'ST'
    },
    {
        name: 'Муринский парк',
        year: 2020,
        url: './maps/parks/murinsky_2020.webp',
        link: './original_maps/parks/murinsky_2020_omaps.jpg',
        bounds: [[60.0369241, 30.3662109], [60.0322513, 30.4134607], [60.0264199, 30.3623056]],
        type: ['PARK'],
        author: 'KUZNTSV_A',
        owner: 'KUZNTSV_A'
    },
    {
        name: 'Новоорловский лесопарк',
        year: 1999,
        url: './maps/parks/novoorlovsky_1999.webp',
        link: './original_maps/parks/novoorlovsky_1999_omaps.jpg',
        bounds: [[60.0568086, 30.2667761], [60.0565944, 30.2961302], [60.0362811, 30.266819]],
        author: ['GLBK','MLN_S','JKBV'],
        owner: 'KARTA',
        type: ['PARK']
    },
    {
        name: 'Новоорловский лесопарк',
        year: 1990,
        url: './maps/parks/novoorlovsky_1989.webp',
        link: './original_maps/parks/novoorlovsky_1989_omaps.jpg',
        bounds: [[60.0566801, 30.2675056], [60.0559946, 30.296216], [60.0384245, 30.2651882]],
        author: 'KUZNTSV_V',
        type: ['PARK'],
    },
    {
        name: 'Новоорловский лесопарк',
        year: 2015,
        url: './maps/parks/novoorlovsky_2015.webp',
        link: './original_maps/parks/novoorlovsky_2015_omaps.jpg',
        bounds: [[60.0585865, 30.2692223], [60.0567444, 30.2942848], [60.0469536, 30.2661753]],
        info: 'Ковидный полигон от O-Time.',
        author: 'DBRTSV_V',
        type: ['PARK']
    },
    {
        name: 'Невский л/п',
        year: 1990,
        url: './maps/parks/nevsky_1990.webp',
        link: './original_maps/parks/nevsky_1990_omaps.jpg',
        bounds: [[59.847488, 30.581131], [59.8359317, 30.6174803], [59.8284266, 30.5594587]],
        author: ['OSMCHN','ANSFRV','FDRV_L'],
        type: ['PARK'],
        qtty: 2
    },
    {
        name: 'Невский лесопарк',
        year: 2007,
        url: './maps/parks/nevsky_2007.webp',
        link: './original_maps/parks/nevsky_2007_omaps.jpg',
        bounds: [[59.8374196, 30.5660248], [59.8345515, 30.5984688], [59.8254931, 30.5623341]],
        author: ['VLKV_K','URVNTSV'],
        type: ['PARK']
    },
    {
        name: 'Невский лесопарк',
        year: 2024,
        url: './maps/parks/nevsky_2024.webp',
        link: './original_maps/parks/nevsky_2024_omaps.jpg',
        bounds: [[59.8354034, 30.5666685], [59.8344329, 30.5845857], [59.8257519, 30.5642867]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        type: ['PARK']
    },
    {
        name: 'Колпино, Чухонка',
        year: 2020,
        url: './maps/parks/kolpino_chuhonka_2020.webp',
        bounds: [[59.7392063, 30.5898857], [59.7390765, 30.6012154], [59.7301435, 30.5898857]],
        type: ['PARK'],
        author: ['SRBRNTSKY','BBCH_A'],
        owner: 'BBCH_A'
    },
    {
        name: 'Колпино, Никольский сквер',
        year: 2019,
        url: './maps/parks/kolpino_nikolsky_skver_2019.webp',
        bounds: [[59.7480072, 30.5945849], [59.7474018, 30.6049919], [59.7404931, 30.5926323]],
        type: ['PARK'],
        author: ['DRBSHV','BBCH_A'],
        owner: 'BBCH_A'
    },
    {
        name: 'Павловский парк',
        year: 1,
        url: './maps/parks/pavlovsk_retro.webp',
        link: './original_maps/parks/pavlovsk_retro_omaps.jpg',
        bounds: [[59.7080278, 30.434103], [59.7062094, 30.4919529], [59.6843812, 30.4313564]],
        author: 'TRSV',
        type: ['PARK']
    },
    {
        name: 'Павловский парк',
        year: 2003,
        url: './maps/parks/pavlovsk_2012.webp',
        link: ['./original_maps/parks/pavlovsk_2012_omaps.jpg','./original_maps/parks/pavlovsk_2012_omaps.gif','./books/shirinyan_photo_orient_2026_omaps.pdf'],
        bounds: [[59.7032652, 30.4429007], [59.7006022, 30.486331], [59.6873921, 30.4391241]],
        author: ['VLKV_K','URVNTSV'],
        owner: 'SFSO_SPB',
        type: ['PARK','FOTO']
    },
    {
        name: 'парк Мариенталь',
        year: 2019,
        url: './maps/parks/pavlovsk_mariental_2022.webp',
        link: './original_maps/parks/pavlovsk_mariental_2022_omaps.jpg',
        bounds: [[59.6862982, 30.4412484], [59.6845545, 30.4580069], [59.679561, 30.4384804]],
        author: 'SHRNN',
        owner: 'EGRV_EGR',
        type: ['PARK']
    },
    {
        name: 'Буферный парк',
        year: 2018,
        url: './maps/parks/pushkin_buferny_2018.webp',
        link: './original_maps/parks/pushkin_buferny_2018_omaps.jpg',
        bounds: [[59.7484828, 30.3929257], [59.7488828, 30.4166365], [59.7408066, 30.3934836]],
        author: 'SHRNN',
        owner: 'EGRV_EGR',
        type: ['PARK']
    },
    {
        name: 'Баболовский парк',
        year: 2019,
        url: './maps/parks/pushkin_babolovsky_2019.webp',
        link: './original_maps/parks/pushkin_babolovsky_2019_omaps.jpg',
        bounds: [[59.7288672, 30.3479719], [59.7259249, 30.3837633], [59.7043044, 30.3399897]],
        author: 'NGN',
        owner: 'EGRV_EGR',
        type: ['PARK']
    },
/*
    {
        name: 'Нижний (Отдельный) парк',
        year: 2007,
        url: './maps/parks/pushkin_nizhny_2007.webp',
        link: './original_maps/parks/pushkin_nizhny_2007_omaps.jpg',
        bounds: [[59.7166638, 30.4185677], [59.7143048, 30.4414415], [59.6986751, 30.4129457]],
        author: 'NGN',
        type: ['PARK']
    },
*/
    {
        name: 'Нижний (Отдельный) парк',
        year: 2019,
        url: './maps/parks/pushkin_nizhny_2019.webp',
        link: './original_maps/parks/pushkin_nizhny_2019_omaps.jpg',
        bounds: [[59.7125409, 30.4169369], [59.7103656, 30.4407763], [59.7004506, 30.4120445]],
        author: ['SHRNN', 'RDNV_B','NGN'],
        owner: 'SHRNN',
        type: ['PARK']
    },
    {
        name: 'Александровский парк',
        year: 2024,
        url: './maps/parks/aleksandrovsky_park_2024.webp',
        bounds: [[59.7256653, 30.3789353], [59.7236099, 30.3982258], [59.715744, 30.374794]],
        author: ['TKMKVA_P','IVNVA_G'],
        owner: 'EGRV_EGR',
        type: ['PARK']
    },
    {
        name: 'Сестрорецк, парк Дубки',
        year: 1995,
        url: './maps/parks/sestroretsk_dubki_old.webp',
        link: './original_maps/parks/sestroretsk_dubki_1995_omaps.webp',
        bounds: [[60.0966915, 29.9195051], [60.0960282, 29.9551249], [60.0869982, 29.9187326]],
        author: 'MLVA_M',
        logo: 'wn_retro.webp',
        type: ['PARK']
    },
    {
        name: 'Сестрорецк, парк Дубки',
        year: 1985,
        url: './maps/parks/sestroretsk_dubki_1985.webp',
        link: './original_maps/parks/sestroretsk_dubki_1985_omaps.jpg',
        bounds: [[60.0951296, 29.9179173], [60.0941668, 29.9461555], [60.0867627, 29.9168873]],
        author: 'VLKV_K',
        type: ['PARK']
    },
    {
        name: 'Сестрорецк, парк Дубки',
        year: 2014,
        logo: 'sestroretsk.webp',
        url: './maps/parks/sestroretsk_dubki_2014.webp',
        link: ['./original_maps/parks/sestroretsk_dubki_2014_omaps.gif','./original_maps/parks/sestroretsk_dubki_2014_omaps.ocd'],
        bounds: [[60.0951082, 29.9208355], [60.0929044, 29.9457264], [60.0875546, 29.9184752]],
        author: ['DBRTSV_V','VSLVSKY'],
        owner: 'VSLVSKY',
        type: ['PARK']
    },
    {
        name: 'Сестрорецк, парк Дубки',
        year: 2026,
        url: './maps/parks/sestroretsk_dubki_2020.webp',
        link: './original_maps/parks/sestroretsk_dubki_2026_omaps.gif',
        bounds: [[60.0961673, 29.9217796], [60.094124, 29.9460912], [60.0876937, 29.9185181]],
        author: ['DBRTSV_V','TKMKVA_P'],
        editor: ['RYLOV_V','SHRNN'],
        restricted: 'с 19.03.2026 по 14.09.2026, Невский спринт',
        owner: 'SFSO_SPB',
        type: ['PARK']
    },
    {
        name: 'сквер Генерала Андреева',
        year: 2023,
        url: './maps/parks/sestroretsk_skver_generala_andreeva_2023.webp',
        link: './original_maps/parks/sestroretsk_skver_generala_andreeva_2023_omaps.jpg',
        bounds: [[60.1095366, 29.9633217], [60.1084512, 29.9726772], [60.1065049, 29.9615514]],
        type: ['PARK']
    },
    {
        name: 'сквер Генерала Андреева',
        year: 2014,
        logo: 'sestroretsk.webp',
        url: './maps/parks/sestroretsk_skver_generala_andreeva_2013.webp',
        link: ['./original_maps/parks/sestroretsk_skver_generala_andreeva_2013_omaps.gif','./original_maps/parks/sestroretsk_skver_generala_andreeva_2013_omaps.ocd','./original_maps/parks/sestroretsk_skver_generala_andreeva_2009_omaps.ocd'],
        bounds: [[60.1085849, 29.9649096], [60.1080395, 29.9728703], [60.1065424, 29.9643302]],
        author: 'VSLVSKY',
        owner: 'VSLVSKY',
        type: ['PARK']
    },
    {
        name: 'сквер Генерала Андреева',
        year: 2025,
        url: './maps/parks/sestroretsk_skver_generala_andreeva_2025.webp',
        link: './original_maps/parks/sestroretsk_skver_generala_andreeva_2025_omaps.jpg',
        bounds: [[60.1089592, 29.961369], [60.1089378, 29.9730635], [60.106382, 29.961133]],
        author: ['TRFMV_A','TRFMV_G'],
        owner: 'TRFMV_A',
        type: ['PARK']
    },
    {
        name: 'сквер Пограничников',
        year: 2014,
        logo: 'sestroretsk.webp',
        url: './maps/parks/sestroretsk_skver_pogranichnikov_2014.webp',
        link: ['./original_maps/parks/sestroretsk_skver_pogranichnikov_2014_omaps.gif','./original_maps/parks/sestroretsk_skver_pogranichnikov_2014_omaps.ocd'],
        bounds: [[60.1127552, 29.9710894], [60.1101996, 29.9857235], [60.1059221, 29.9663043]],
        author: 'VSLVSKY',
        owner: 'VSLVSKY',
        type: ['PARK']
    },
    {
        name: 'Тарховский парк',
        year: 2010,
        logo: 'sestroretsk.webp',
        url: './maps/parks/tarkhovka_2010.webp',
        link: ['./original_maps/parks/tarkhovka_2010_omaps.gif','./original_maps/parks/tarkhovka_2010_omaps.ocd'],
        bounds: [[60.0732771, 29.9501038], [60.0703224, 29.9778271], [60.0596361, 29.946456]],
        author: 'VSLVSKY',
        owner: 'VSLVSKY',
        type: ['PARK']
    },
    {
        name: 'Сестрорецкий рубеж',
        year: 2013,
        url: './maps/parks/sestroretsk_2013.webp',
        link: './original_maps/parks/sestroretsk_2013_omaps.jpg',
        bounds: [[60.1164545, 29.9713683], [60.1162406, 29.9829555], [60.1092907, 29.9670982]],
        author: 'DRBSHV',
        type: ['PARK']
    },
    {
        name: 'сквер Пограничников',
        year: 2020,
        url: './maps/parks/sestroretsk_skver_pogranichnikov_2020.webp',
        link: './original_maps/parks/sestroretsk_skver_pogranichnikov_2020_omaps.jpg',
        bounds: [[60.113525, 29.9697161], [60.1117394, 29.9846292], [60.1051842, 29.9652314]],
        author: 'KUZNTSV_A',
        owner: 'KUZNTSV_R',
        type: ['PARK']
    },
    {
        name: 'Охтинский (Ржевский) лесопарк',
        year: 1981,
        url: './maps/parks/rzhevsky_1981.webp',
        link: './original_maps/parks/rzhevsky_1981_omaps.jpg',
        bounds: [[59.9737844, 30.4946995], [59.9705631, 30.5459833], [59.9540648, 30.489893]],
        author: 'OSMCHN',
        type: ['PARK']
    },
    {
        name: 'Охтинский (Ржевский) лесопарк',
        year: 1990,
        url: './maps/parks/rzhevsky_1990.webp',
        link: './original_maps/parks/rzhevsky_1990_omaps.jpg',
        bounds: [[59.9791097, 30.4928112], [59.9755453, 30.5623341], [59.9462855, 30.4858589]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        type: ['PARK'],
        qtty: 2
    },
    {
        name: 'Ржевский лесопарк',
        year: 2024,
        url: './maps/parks/rzhevsky_2024.webp',
        link: './original_maps/parks/rzhevsky_2024_omaps.jpg',
        bounds: [[59.9800115, 30.4961586], [59.9725389, 30.5585575], [59.9516581, 30.4848289]],
        author: 'RDNV_I',
        owner: 'RDNV_I',
        type: ['PARK']
    },
    {
        name: 'Сосновый бор, Приморский парк',
        year: 1,
        url: './maps/parks/sosnovy_bor_primorsky_park_old.webp',
        link: './original_maps/parks/sosnovy_bor_primorsky_park_old_omaps.webp',
        bounds: [[59.8992695, 29.0629578], [59.896127, 29.0929127], [59.8764043, 29.0565205]],
        author: ['MLMGN_A','KRZCHN'],
        type: ['PARK']
    },
    {
        name: 'Сосновый бор, Приморский парк',
        year: 1,
        url: './maps/parks/sosnovy_bor_primorsky_park_retro.webp',
        link: './original_maps/parks/sosnovy_bor_primorsky_park_retro_omaps.webp',
        bounds: [[59.8957826, 29.0592241], [59.8996785, 29.0731716], [59.8833387, 29.0738583]],
        type: ['PARK']
    },
    {
        name: 'Сосновый Бор',
        year: 2020,
        excluded: true,
        url: './maps/parks/sosnovy_bor.webp',
        link: './original_maps/parks/sosnovy_bor_2020_omaps.jpg',
        bounds: [[59.9034447, 29.0723133], [59.9013142, 29.0972471], [59.8837263, 29.0651035]],
        author: ['DBRTSV_V','PPV_D','MSPN','TKHNVA'],
        owner: 'YUVENTA',
        type: ['PARK']
    },
    {
        name: 'Сосновый Бор, Белые пески',
        year: 2003,
        url: './maps/parks/sosnovy_bor_bely_pesok_2003.webp',
        link: './original_maps/parks/sosnovy_bor_bely_pesok_2003_omaps.jpg',
        bounds: [[59.9030681, 29.0725279], [59.9004533, 29.0913248], [59.8942543, 29.0673995]],
        author: 'SHRNN',
        owner: 'YUVENTA',
        type: ['PARK']
    },
    {
        name: 'Новое Девяткино',
        year: 2020,
        url: './maps/parks/new_devjatkino_2020.webp',
        link: './original_maps/parks/new_devjatkino_2020_omaps.jpg',
        bounds: [[60.0566908, 30.4734778], [60.0564016, 30.4793894], [60.0540238, 30.4728019]],
        author: 'TKMKVA_P',
        owner: 'SHEIN',
        type: ['PARK']
    },
    {
        name: 'Всеволожск, трамплин',
        year: 1998,
        url: './maps/parks/vsevolozhsk_tramplin_1998.webp',
        link: './original_maps/parks/vsevolozhsk_tramplin_1998_omaps.jpg',
        bounds: [[60.0362168, 30.6373072], [60.0354237, 30.6494308], [60.0285639, 30.6347966]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        type: ['PARK']
    },
    {
        name: 'Всеволожск, парк Песчанка',
        year: 2021,
        url: './maps/parks/vsevolozhsk_peschanka_2021.webp',
        link: './original_maps/parks/vsevolozhsk_peschanka_2021_omaps.jpg',
        bounds: [[60.0344002, 30.6409442], [60.0335428, 30.6490874], [60.0305684, 30.639174]],
        author: 'DBRTSV_V',
        owner: 'INGRIA',
        type: ['PARK']
    },
    {
        name: 'Всеволожск, парк Софиевка',
        year: 2019,
        url: './maps/parks/sofievka_2019.webp',
        link: './original_maps/parks/sofievka_2019_omaps.jpg',
        bounds: [[60.0101426, 30.6169224], [60.0090485, 30.633595], [60.0050046, 30.6156135]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        type: ['PARK']
    },
    {
        name: 'Тосно',
        year: 2018,
        url: './maps/parks/tosno_2018.webp',
        link: './original_maps/parks/tosno_2018_omaps.jpg',
        bounds: [[59.5341874, 30.8662176], [59.5334367, 30.8827615], [59.5273979, 30.8651233]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        type: ['PARK']
    },
    {
        name: 'Тосно',
        year: 2024,
        url: './maps/parks/tosno_2024.webp',
        link: './original_maps/parks/tosno_2024_omaps.jpg',
        bounds: [[59.5341548, 30.8666253], [59.5334803, 30.8823967], [59.5274959, 30.8654451]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        type: ['PARK']
    },
    {
        name: 'Приозерск, крепость Карела',
        year: 2020,
        url: './maps/parks/priozersk_karela.webp',
        link: ['./original_maps/parks/priozersk_karela_2020_omaps.jpg','./original_maps/parks/priozersk_karela_2020_pictures_1.jpg','./original_maps/parks/priozersk_karela_2020_pictures_2.jpg','./original_maps/parks/priozersk_karela_2020_pictures_3.jpg','./original_maps/parks/priozersk_karela_2020_pictures_4.jpg'],
        bounds: [[61.0322269, 30.1219475], [61.0316709, 30.1273119], [61.028922, 30.1203275]],
        author: 'MKHLV_A',
        owner: 'VESTA_PRIOZERSK',
        type: ['PARK','FOTO']
    },
    {
        name: 'Приозерск, КЦ Карнавал',
        year: 2023,
        url: './maps/parks/priozersk_karnaval_2023.webp',
        link: './original_maps/parks/priozersk_karnaval_2023_omaps.jpg',
        author: 'PSHKV',
        bounds: [[61.040202, 30.1407337], [61.0430539, 30.1499176], [61.0382227, 30.142976]],
        owner: 'VESTA_PRIOZERSK',
        type: ['PARK']
    },
    {
        name: 'Приозерск, набережная',
        year: 2020,
        url: './maps/parks/priozersk_naberezhnaja_2020.webp',
        link: './original_maps/parks/priozersk_naberezhnaja_2020_omaps.jpg',
        author: 'PSHKV',
        bounds: [[61.0340611, 30.1400363], [61.0334064, 30.1500893], [61.0318528, 30.1393819]],
        owner: 'VESTA_PRIOZERSK',
        type: ['PARK']
    },
    {
        name: 'Зеленогорск, Центральный парк',
        year: 2024,
        url: './maps/parks/zelenogorsk_tspko_2024.webp',
        link: './original_maps/parks/zelenogorsk_tspko_2024_omaps.jpg',
        publish: 'https://vk.com/album-230167293_311285775',
        bounds: [[60.1937134, 29.6961308], [60.1924334, 29.7083402], [60.1871211, 29.6935558]],
        author: 'SVCHK',
        owner: 'SFSO_SPB',
        type: ['PARK']
    },
    {
        name: 'Всеволожск, Румболовский парк',
        url: './maps/parks/vsevolozhsk_rumbolovo.webp',
        link: './original_maps/parks/vsevolozhsk_rumbolovo_omaps.jpg',
        bounds: [[60.0440822, 30.6304407], [60.0432465, 30.6471348], [60.0348771, 30.6284666]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        type: ['PARK']
    },
    {
        name: 'Всеволожск, Румболовский парк',
        year: 2001,
        url: './maps/parks/vsevolozhsk_rumbolovo_2001.webp',
        link: './original_maps/parks/vsevolozhsk_rumbolovo_2001_omaps.jpg',
        bounds: [[60.0443822, 30.6271791], [60.0441894, 30.6456327], [60.034502, 30.6270075]],
        author: 'KUZNTSV_S',
        type: ['PARK']
    },
    {
        name: 'Всеволожск, Румболовский парк',
        year: 2014,
        url: './maps/parks/vsevolozhsk_rumbolovo_2014.webp',
        bounds: [[60.0421535, 30.6329727], [60.0412963, 30.6518555], [60.034695, 30.6310415]],
        author: ['KUZNTSV_S','MSPN','GRBTNKV'],
        owner: 'WN',
        type: ['PARK']
    },
    {
        name: 'парк Есенина',
        year: 1,
        url: './maps/parks/park_esenina_retro.webp',
        link: './original_maps/parks/park_esenina_retro_omaps.jpg',
        bounds: [[59.9132027, 30.4763103], [59.9151712, 30.4851294], [59.9067372, 30.4826617]],
        type: ['PARK']
    },
    {
        name: 'парк Есенина',
        year: 1999,
        url: './maps/parks/esenina_1999.webp',
        link: './original_maps/parks/esenina_1999_omaps.jpg',
        bounds: [[59.9133211, 30.476203], [59.9154294, 30.4850006], [59.9065865, 30.4825544]],
        author: 'FDRV_L',
        type: ['PARK']
    },
    {
        name: 'парк Есенина',
        date: '2014-05-28',
        url: './maps/parks/esenina_2014.webp',
        link: './original_maps/parks/esenina_2014_omaps.gif',
        bounds: [[59.9149668, 30.4791641], [59.9145688, 30.49088], [59.9072644, 30.4787135]],
        author: 'DRBSHV',
        start: 'ST',
        type: ['PARK']
    },
    {
        name: 'парк Строителей',
        url: './maps/parks/stroiteley_park.webp',
        link: ['./original_maps/parks/stroiteley_park_omaps.gif','./original_maps/parks/stroiteley_park_omaps.ocd'],
        bounds: [[59.9099271, 30.462749], [59.9117505, 30.470463], [59.907614, 30.4648304]],
        author: 'DRBSHV',
        type: ['PARK']
    },
    {
        name: 'парк Строителей, сквер Петровской церкви',
        year: 2020,
        url: './maps/parks/stroiteley_church_2020_park.webp',
        link: ['./original_maps/parks/stroiteley_church_2020_park_omaps.gif','./original_maps/parks/stroiteley_church_2020_park_omaps.ocd'],
        bounds: [[59.9098679, 30.4508185], [59.9098894, 30.4647982], [59.9050157, 30.4507327]],
        author: 'DRBSHV',
        type: ['PARK']
    },
    {
        name: 'Шуваловский лесопарк',
        year: 2017,
        url: './maps/rogaine/shuvalovsky_rogaine_2024.webp',
        o_gps: 18504,
        bounds: [[60.0845369, 30.2917528], [60.0819043, 30.3203344], [60.069316, 30.2866888]],
        author: 'KUZNTSV_A',
        owner: 'NW',
        type: ['PARK']
    },
    {
        name: 'Шуваловский парк',
        year: 1,
        url: './maps/parks/shuvalovsky_park_old.webp',
        link: './original_maps/parks/shuvalovsky_park_old_omaps.jpg',
        bounds: [[60.0848152, 30.2878904], [60.0830815, 30.3204203], [60.0691233, 30.2857876]],
        type: ['PARK']
    },
    {
        name: 'Шуваловский парк',
        year: 1987,
        info: 'Единственная карта авторства Волкова Андрея Владимировича.',
        url: './maps/parks/shuvalovsky_park_1988.webp',
        link: ['./original_maps/parks/shuvalovsky_park_1987_omaps.jpg','./original_maps/parks/shuvalovsky_park_1988_omaps.jpg'],
        bounds: [[60.0852218, 30.2789211], [60.082739, 30.3225231], [60.0687807, 30.2727413]],
        author: ['VLKV_A','SHVR'],
        type: ['PARK'],
        qtty: 2
    },
    {
        name: 'Шуваловский парк',
        year: 1998,
        url: './maps/parks/shuvalovsky_park_1998.webp',
        link: './original_maps/parks/shuvalovsky_park_1998_omaps.jpg',
        bounds: [[60.0847938, 30.2898645], [60.0846439, 30.3223515], [60.0684381, 30.2896929]],
        author: ['MLN_S','SSV_V','PRKHMNKO','ARTMV'],
        owner: 'KARTA',
        type: ['PARK']
    },
    {
        name: 'Шуваловский парк',
        year: 2004,
        url: './maps/parks/shuvalovsky_1999.webp',
        link: ['./original_maps/parks/shuvalovsky_2004_omaps.jpg','./original_maps/parks/shuvalovsky_1999_omaps.jpg'],
        editor: 'FDRV_L',
        bounds: [[60.0917917, 30.2851439], [60.088646, 30.3240681], [60.0690805, 30.2781057]],
        author: ['DBRTSV_V','DRBSHV'],
        type: ['PARK']
    },
    {
        name: 'Шуваловский лесопарк',
        year: 2017,
        url: './maps/parks/shuvalovsky_wn_2017.webp',
        bounds: [[60.0829531, 30.2949286], [60.0806414, 30.3204632], [60.0740051, 30.2917957]],
        author: 'MKHLV_A',
        owner: 'WN',
        type: ['PARK']
    },
    {
        name: 'Малиновка',
        year: 2003,
        url: './maps/parks/malinovka_2003.webp',
        link: './original_maps/parks/malinovka_2003_omaps.jpg',
        bounds: [[59.9445982, 30.462234], [59.9479081, 30.4751945], [59.9412558, 30.465517]],
        author: 'DRBSHV',
        type: ['PARK']
    },
    {
        name: 'Малиновка',
        year: 2018,
        url: './maps/parks/malinovka_2018.webp',
        link: ['./original_maps/parks/malinovka_2018_omaps.gif','./original_maps/parks/malinovka_2018_omaps.ocd'],
        bounds: [[59.9444048, 30.4624271], [59.9477254, 30.4753447], [59.9416535, 30.4654312]],
        author: ['FDRV_L','VSLVSKY'],
        owner: 'VSLVSKY',
        type: ['PARK']
    },
    {
        name: 'Малиновка',
        year: 2025,
        logo: 'krasnogv.png',
        url: './maps/parks/malinovka_2025.webp',
        link: './original_maps/parks/malinovka_2025_omaps.gif',
        o_gps: 22143,
        bounds: [[59.9488107, 30.4646802], [59.9472526, 30.4786491], [59.9422016, 30.4619551]],
        author: 'RDNV_I',
        owner: 'RDNV_I',
        type: ['PARK']
    },
    {
        name: 'парк Бабушкина',
        year: 1999,
        url: './maps/parks/babushkina_1999.webp',
        link: './original_maps/parks/babushkina_1999_omaps.jpg',
        bounds: [[59.8853089, 30.4338884], [59.8846522, 30.4454541], [59.8814114, 30.4330301]],
        author: 'DRBSHV',
        type: ['PARK']
    },
    {
        name: 'Парк Бенуа',
        year: 2015,
        url: './maps/parks/benua_2015.webp',
        bounds: [[60.0215847, 30.3688288], [60.020802, 30.375824], [60.0166952, 30.3663397]],
        author: 'RYLOV_V',
        owner: 'SHLKHN_AN',
        type: ['PARK']
    },
    {
        name: 'сад Бенуа',
        year: 2015,
        url: './maps/parks/sad_benua_2015.webp',
        link: ['./original_maps/parks/sad_benua_2015_omaps.jpg','./original_maps/parks/sad_benua_2015_omaps.ocd'],
        bounds: [[60.0211451, 30.3671122], [60.0212202, 30.3743649], [60.0164271, 30.3670263]],
        author: 'SHRNN',
        owner: 'SHRNN',
        type: ['PARK']
    },
    {
        name: 'Сквер Маршала Говорова',
        url: './maps/parks/skver_govorova.webp',
        link: './original_maps/parks/skver_govorova_omaps.jpg',
        bounds: [[59.9209684, 30.3145838], [59.9210006, 30.3177595], [59.9198714, 30.314455]],
        author: 'SHRNN',
        owner: 'SHRNN',
        type: ['PARK']
    },
    {
        name: 'Юсуповский сад',
        year: 2025,
        url: './maps/parks/yusupovsky_sad_2025.webp',
        link: ['./original_maps/parks/yusupovsky_sad_2025_omaps.gif','./original_maps/parks/yusupovsky_sad_omaps.jpg'],
        bounds: [[59.9248397, 30.3099275], [59.9244956, 30.3169227], [59.9215921, 30.3091764]],
        author: ['SHRNN','RSKV_S'],
        owner: 'SHRNN',
        type: ['PARK']
    },
    {
        name: 'Польский сад',
        year: 2023,
        url: './maps/parks/polsky_sad.webp',
        link: ['./original_maps/parks/polsky_sad_2023_omaps.jpg','./books/shirinyan_photo_orient_2026_omaps.pdf'],
        bounds: [[59.9194304, 30.3098845], [59.9190755, 30.3135753], [59.9169675, 30.3088546]],
        author: 'SHRNN',
        owner: 'VOLKOV_AM',
        type: ['PARK','FOTO']
    },
    {
        name: 'Измайловский сад',
        year: 2023,
        url: './maps/parks/izmajlovsky_sad.webp',
        link: ['./original_maps/parks/izmajlovsky_sad_omaps.jpg','./books/shirinyan_photo_orient_2026_omaps.pdf'],
        bounds: [[59.9202801, 30.3119445], [59.9199359, 30.3144979], [59.9186453, 30.3112364]],
        author: 'SHRNN',
        owner: 'SHRNN',
        type: ['PARK','FOTO']
    },
    {
        name: 'Лопухинский сад',
        year: 2023,
        url: './maps/parks/lopukhinsky_sad.webp',
        bounds: [[59.978895, 30.3029323], [59.9783046, 30.3094554], [59.9758137, 30.3019881]],
        author: 'LMVA',
        owner: 'SHRNN',
        type: ['PARK']
    },
    {
        name: 'Сад Олимпия',
        year: 2022,
        url: './maps/parks/olimpia_2022.webp',
        link: './original_maps/parks/olimpia_2022_omaps.jpg',
        bounds: [[59.9142031, 30.3184247], [59.9141709, 30.3213], [59.9118043, 30.3184462]],
        author: 'SHRNN',
        owner: 'SHRNN',
        type: ['PARK'],
        zindex: 2
    },
    {
        name: 'Пионерская пл, ТЮЗ',
        year: 2023,
        url: './maps/parks/tuz_2023.webp',
        link: ['./original_maps/parks/tuz_2023_omaps.jpg','./books/shirinyan_photo_orient_2026_omaps.pdf'],
        bounds: [[59.9237214, 30.3311491], [59.9226675, 30.3406334], [59.9185593, 30.3287458]],
        author: 'SHRNN',
        owner: 'VOLKOV_AM',
        type: ['PARK','FOTO']
    },
    {
        name: 'Кириши, сквер Спортивный',
        year: 2023,
        url: './maps/parks/kirishi_skver_sportivny_2023.webp',
        bounds: [[59.4545204, 32.0266914], [59.4530809, 32.0353389], [59.447224, 32.0225501]],
        author: 'MLV_AL',
        owner: 'MLV_AL',
        type: ['PARK']
    },
    {
        name: 'Осиновецкий редут',
        year: 2021,
        url: './maps/parks/osinovetsky_redut_2021.webp',
        link: './original_maps/parks/osinovetsky_redut_2021_omaps.jpg',
        bounds: [[60.1106915, 30.2600598], [60.1100285, 30.2661538], [60.1079754, 30.2592015]],
        author: 'GLTV_D',
        owner: 'VOLKOV_AM',
        type: ['PARK'],
        zindex: 2
    },
    {
        name: 'Ботанический Сад',
        year: 2024,
        url: './maps/parks/botanichesky_2024.webp',
        link: './original_maps/parks/botanichesky_2024_omaps.jpg',
        bounds: [[59.9730114, 30.3218579], [59.9719054, 30.3335738], [59.9686731, 30.3204846]],
        author: ['IVNVA_G','TKMKVA_P'],
        owner: 'VOLKOV_AM',
        type: ['PARK']
    },
    {
        name: 'Каменноостровский дворец',
        year: 2025,
        url: './maps/parks/kamennoostrovsky_palace_2025.webp',
        link: './original_maps/parks/kamennoostrovsky_palace_2025_omaps.jpg',
        bounds: [[59.9815788, 30.3005075], [59.9809669, 30.3063655], [59.9793996, 30.2997351]],
        author: 'ZCHNV',
        owner: 'SFSO_SPB',
        type: ['PARK']
    },
    {
        name: 'Стрельна, Константиновский парк',
        year: 1998,
        url: './maps/parks/konstantinovsky_1998.webp',
        link: ['./original_maps/parks/konstantinovsky_1998_omaps.jpg','./original_maps/parks/konstantinovsky_1998.ocd'],
        bounds: [[59.8627465, 30.0450325], [59.8611197, 30.0684857], [59.8517774, 30.0412774]],
        author: 'TMKN',
        type: ['PARK']
    },
    {
        name: 'Сквер Конашевича',
        year: 2024,
        url: './maps/parks/konashevicha_2024.webp',
        link: './original_maps/parks/konashevicha_2024_omaps.gif',
        bounds: [[60.0496105, 30.3623915], [60.0489784, 30.368185], [60.0472107, 30.3612113]],
        author: 'KVLVA_O',
        owner: 'ZBKVA',
        type: ['SPRINT', 'PARK']
    },
    {
        name: 'Сад Василеостровец',
        year: 2010,
        info: '<a href="https://vk.com/wall-135156716_2650">Карта решений Trail-O</a>',
        url: './maps/parks/vasileostrovets_2010.webp',
        link: './original_maps/parks/vasileostrovets_2010_omaps.jpg',
        bounds: [[59.9363974, 30.2541161], [59.9362899, 30.259974], [59.9321511, 30.2543736]],
        author: 'FDRV_L',
        owner: 'VOLKOV_AM',
        type: ['SPRINT', 'PARK']
    },
    {
        name: 'Сад Прометей',
        year: 2022,
        url: './maps/parks/forsh_2025.webp',
        link: './original_maps/parks/forsh_2025_omaps.jpg',
        bounds: [[60.0424214, 30.3842783], [60.0418749, 30.3923464], [60.0375243, 30.3828835]],
        author: 'TKMKVA_P',
        owner: 'TKMKVA_P',
        type: ['SPRINT', 'PARK']
    },
    {
        name: 'Заневский парк (им Терешковой)',
        year: 2019,
        url: './maps/parks/zanevsky_2019.webp',
        link: ['./original_maps/parks/zanevsky_2019_omaps.gif','./original_maps/parks/zanevsky_2019_omaps.ocd'],
        bounds: [[59.9228826, 30.4090619], [59.922033, 30.4218936], [59.9171396, 30.4075599]],
        author: 'VSLVSKY',
        owner: 'VSLVSKY',
        type: ['PARK']
    },
    {
        name: 'Ланской сквер',
        year: 2017,
        url: './maps/parks/lanskoy_skver_2017.webp',
        link: './original_maps/parks/lanskoy_skver_2017_omaps.gif',
        bounds: [[59.9983638, 30.3253555], [59.9979883, 30.3314066], [59.9947049, 30.3246045]],
        author: 'DRBSHV',
        owner: 'KP31',
        type: ['PARK']
    },
    {
        name: 'МЕГА-парк',
        year: 2025,
        url: './maps/parks/mega_park_2025.webp',
        link: './original_maps/parks/mega_park_2025_omaps.gif',
        bounds: [[59.8980965, 30.5086148], [59.8971656, 30.5185497], [59.894518, 30.5072522]],
        author: 'RYLOV_V',
        owner: 'RYLOV_V',
        logo: 'kudrovo.gif',
        type: ['PARK']
    },
    {
        name: 'Ильинский сад',
        year: 2026,
        url: './maps/parks/ilinsky_garden_2026.webp',
        link: './original_maps/parks/ilinsky_garden_2026_omaps.gif',
        bounds: [[59.9678462, 30.4680061], [59.9655908, 30.4884338], [59.9604352, 30.4647017]],
        o_gps: 24580,
        author: 'RDNV_I',
        owner: 'RDNV_I',
        type: ['PARK']
    },
];
