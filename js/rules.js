let rules = [
    // --- Ориент-документы ---
    {
        name: 'Правила вида спорта "Спортивное ориентирование"',
        year: 2017,
        url: 'https://rufso.ru/wp-content/uploads/2017/07/pravila-orient.pdf',
        owner: 'FSOR'
    },
    {
        name: 'Проект новой редакции Правил вида спорта "Спортивное ориентирование"',
        year: 2026,
        url: 'https://rufso.ru/wp-content/uploads/2026/08/24.08.2026-ПРАВИЛА-новая-редакция.pdf',
        owner: 'FSOR'
    },
    {
        name: 'International Specification for Orienteering Maps, ISOM 2017-2 rev 6',
        year: 2024,
        url: 'https://omapwiki.orienteering.sport/specifications/isom/',
        link: './rules/iof_isom_2017_2_rev_6_2024_01_omaps.pdf',
        owner: 'IOF',
        lng: 'en'
    },
    {
        name: 'Международные требования для карт ориентирования, ISOM 2017-2',
        year: 2022,
        url: './rules/iof_isom_2017_2_2022_ru_omaps.pdf',
        owner: 'IOF',
    },
    {
        name: 'International Specification for Orienteering Maps, ISOM 2000',
        year: 2000,
        url: './rules/iof_isom_2000_2011_omaps.pdf',
        owner: 'IOF',
        lng: 'en',
        outdated: true
    },
    {
        name: 'Международные требования для карт ориентирования, ISOM 2000',
        year: 2001,
        url: 'https://moscompass.ru/news/rules/isom2000/index.htm',
        outdated: true
    },
    {
        name: 'Условные знаки карт для спортивного ориентирования ISOM 2000',
        year: 2001,
        url: 'https://orient-murman.ru/images/pdf/International_Specification_for_Orienteering_Maps_2000_ru.pdf',
        outdated: true
    },
    {
        name: 'Условные знаки и легенды КП (ISOM-2017-2)',
        url: './rules/conventional_signs_control_points_omaps.pdf',
        author: 'SHRNN'
    },
    {
        name: 'Периодическая таблица знаков карт спортивного ориентирования (ISOM 2017)',
        url: './rules/periodic_table_isom_2017_rus_omaps.gif',
        author: ['NR_D','GLTV_D'],
        owner: 'NR_D',
    },
    {
        name: 'Periodic table of orienteering map symbols (ISOM 2017)',
        url: './rules/periodic_table_isom_2017_en_omaps.gif',
        author: 'NR_D',
        owner: 'NR_D',
        lng: 'en'
    },
    {
        name: 'International Specification for Sprint Orienteering Maps, ISSprOM 2019-2 rev 6',
        year: 2024,
        url: 'https://omapwiki.orienteering.sport/specifications/issprom/',
        link: './rules/iof_issprom_2019_2_rev_6_2024_01_omaps.pdf',
        owner: 'IOF',
        lng: 'en'
    },
    {
        name: 'Международные требования для карт ориентирования "спринт-кросс", ISSprOM 2019-2',
        year: 2023,
        url: './rules/iof_issprom_2019_2_2023_ru_omaps.pdf',
        owner: 'IOF',
    },
    {
        name: 'Best practices for sprint mapping May 2025',
        year: 2025,
        url: './rules/iof_best_sprint_mapping_2025_05_omaps.pdf',
        owner: 'IOF',
        lng: 'en'
    },
    {
        name: 'Guidelines for complex urban structures, 2022-01',
        year: 2022,
        url: './rules/iof_urban_structures_2022_01_omaps.pdf',
        owner: 'IOF',
        lng: 'en'
    },
    {
        name: 'Руководство по составлению карт и планированию дистанций в сложных городских сооружениях на спринтерских картах по ориентированию',
        year: 2022,
        url: './rules/iof_urban_structures_2022_01_ru_omaps.pdf',
        owner: 'IOF'
    },
    {
        name: 'International Specification for MTB Orienteering Maps, ISMTBOM 2022 rev 4',
        year: 2022,
        url: 'https://omapwiki.orienteering.sport/specifications/ismtbom/',
        link: './rules/iof_ismtbom_2022_rev_4_2025_01_omaps.pdf',
        owner: 'IOF',
        lng: 'en'
    },
    {
        name: 'International Specification for Ski Orienteering Maps, ISSkiOM 2019 rev 3',
        year: 2024,
        url: 'https://omapwiki.orienteering.sport/specifications/isskiom/',
        link: './rules/iof_isskiom_2019_rev_3_2024_09_omaps.pdf',
        owner: 'IOF',
        lng: 'en'
    },
    {
        name: 'Ski-O map symbols 2019',
        year: 2019,
        url: './rules/iof_skio_symbols_2019_omaps.pdf',
        owner: 'IOF',
        lng: 'en'
    },
    {
        name: 'International Specification for Indoor Orienteering Maps (ISInOM), PRE-PRINT rev 6.7.3',
        year: 2026,
        url: './rules/iof_isinom_2026_6.7.3_omaps.pdf',
        link: ['./rules/iof_isinom_2026_6.7.3_omaps.ocd','./rules/iof_isinom_2026_6.7.3_omaps.omap'],
        owner: 'IOF',
        lng: 'en'
    },
    {
        name: 'IOF Printing and Colour Definitions, rev 4',
        year: 2024,
        url: './rules/iof_printing_rev_4_2024_omaps.pdf',
        owner: 'IOF',
        lng: 'en'
    },
    {
        name: 'International Specifcation for Control Descriptions',
        year: 2024,
        url: './rules/iof_control_descriptions_2024_omaps.pdf',
        owner: 'IOF',
        lng: 'en'
    },
    {
        name: 'Международные описания контрольных пунктов (легенды)',
        year: 2018,
        url: 'https://rufso.ru/wp-content/uploads/2022/05/Легенды.pdf',
        owner: 'FSOR'
    },
    {
        name: 'IOF Guidelines for Course Planning Foot-O Forest Competitions',
        year: 2020,
        url: './rules/iof_course_planning_forest_2020_omaps.pdf',
        owner: 'IOF',
        lng: 'en'
    },
    {
        name: 'Руководство ИОФ по планированию дистанций (трасс) соревнований по спортивному ориентированию бегом (лесные дисциплины)',
        year: 2020,
        url: 'https://rufso.ru/wp-content/uploads/2020/07/2020-Лес-Руководство-ИОФ-по-планированию-ЛЕСНЫХ-дистанций-1.pdf',
        owner: 'FSOR'
    },
    {
        name: 'IOF Guidelines for Course Planning Foot-O Sprint Competitions',
        year: 2020,
        url: './rules/iof_course_planning_sprint_2020_omaps.pdf',
        owner: 'IOF',
        lng: 'en'
    },
    {
        name: 'Руководство ИОФ по планированию дистанций (трасс) соревнований по спортивному ориентированию бегом (спринтерские дисциплины)',
        year: 2020,
        url: 'https://rufso.ru/wp-content/uploads/2020/07/2020-Спринт-Руководство-ИОФ-по-планированию-СПРИНТЕРСКИХ-дистанций-1.pdf',
        owner: 'FSOR'
    },
    {
        name: 'Как работает ИОФ',
        year: 2017,
        url: 'https://rufso.ru/wp-content/uploads/2017/07/kak_rabotaet_iof.pdf',
        owner: 'FSOR'
    },
    {
        name: 'IRF Rules of Rogaining',
        year: 2024,
        url: 'https://www.rogaining.com/rules',
        link: './rules/irf_rogaining_rules_2024_omaps.pdf',
        owner: 'IRF',
        lng: 'en'
    },
    {
        name: 'Международные правила соревнований по рогейну',
        year: 2024,
        url: 'https://rogaining.ru/rules/irf-rules',
        owner: 'RRF',
    },
    {
        name: 'Российские правила соревнований по рогейну',
        year: 2024,
        url: 'https://rogaining.ru/rules/rus-rogaining-rules',
        owner: 'RRF',
    },
    {
        name: 'Методические материалы по спортивной картографии',
        year: 2022,
        url: 'https://rogaining.ru/rogaine/organize/cartography',
        author: 'GRSHKN',
        owner: 'RRF',
    },
    {
        name: 'Правила соревнований по рогейну для СПб и ЛО',
        year: 2010,
        url: 'https://spbof.ru/jdownloads/documents/rogaining_rules_spb_110609.pdf',
        owner: 'SFSO_SPB'
    },
    // --- Исторические спецификации IOF (архив IOF-MC) ---
    {
        name: 'Signaturen für OL-Karten (1969)',
        year: 1969,
        url: 'http://lazarus.elte.hu/mc/museum/official/isom1969.pdf',
        link: './rules/iof_isom_1969_omaps.pdf',
        owner: 'IOF_MC',
        lng: 'de',
        outdated: true
    },
    {
        name: 'International Specification for Orienteering Maps (1975)',
        year: 1975,
        url: 'http://lazarus.elte.hu/mc/museum/official/isom1975.pdf',
        link: './rules/iof_isom_1975_omaps.pdf',
        owner: 'IOF_MC',
        lng: 'en',
        outdated: true
    },
    {
        name: 'International Specification for Orienteering Maps (1990)',
        year: 1990,
        url: 'http://lazarus.elte.hu/mc/museum/official/isom1990.pdf',
        link: './rules/iof_isom_1990_omaps.pdf',
        owner: 'IOF_MC',
        lng: 'en',
        outdated: true
    },
    {
        name: 'International Specification for Sprint Orienteering Maps (ISSOM 2007)',
        year: 2007,
        url: 'http://lazarus.elte.hu/mc/specs/issom2007.pdf',
        link: './rules/iof_issom_2007_omaps.pdf',
        owner: 'IOF_MC',
        lng: 'en',
        outdated: true
    },
    {
        name: 'Drawing specifications for international ski orienteering maps (1984)',
        year: 1984,
        url: 'http://lazarus.elte.hu/mc/museum/official/isskiom1984.pdf',
        link: './rules/iof_isskiom_1984_omaps.pdf',
        owner: 'IOF_MC',
        lng: 'en',
        outdated: true
    },
    {
        name: 'International Specification for Ski-Orienteering Maps (1994)',
        year: 1994,
        url: 'http://lazarus.elte.hu/mc/museum/official/isskiom1994.pdf',
        link: './rules/iof_isskiom_1994_omaps.pdf',
        owner: 'IOF_MC',
        lng: 'en',
        outdated: true
    },
    {
        name: 'Map specification for ski-orienteering (2002)',
        year: 2002,
        url: 'http://lazarus.elte.hu/mc/specs/isskiom-2002.pdf',
        owner: 'IOF_MC',
        lng: 'en',
        outdated: true
    },
    {
        name: 'Map specification for ski-orienteering (2009)',
        year: 2009,
        url: 'http://lazarus.elte.hu/mc/specs/isskiom-2009.pdf',
        link: './rules/iof_isskiom_2009_omaps.pdf',
        owner: 'IOF_MC',
        lng: 'en',
        outdated: true
    },
    {
        name: 'International Specification for Mountain Bike Orienteering Maps (2007)',
        year: 2007,
        url: 'http://lazarus.elte.hu/mc/specs/mtbo-2007.pdf',
        link: './rules/iof_ismtbom_2007_omaps.pdf',
        owner: 'IOF_MC',
        lng: 'en',
        outdated: true
    },
    {
        name: 'International Specification for Mountain Bike Orienteering Maps (2010)',
        year: 2010,
        url: 'http://lazarus.elte.hu/mc/specs/ismtbom-2010.pdf',
        link: './rules/iof_ismtbom_2010_omaps.pdf',
        owner: 'IOF_MC',
        lng: 'en',
        outdated: true
    },
];
