let rules = [
    // --- Ориент-документы ---
    {
        name: 'Правила вида спорта "Спортивное ориентирование"',
        year: 2017,
        url: 'https://rufso.ru/wp-content/uploads/2017/07/pravila-orient.pdf',
        owner: 'FSOR'
    },
    {
        name: 'International Specification for Orienteering Maps, ISOM 2017-2 rev 6',
        year: 2024,
        url: 'https://omapwiki.orienteering.sport/specifications/isom/',
        link: './docs/iof_isom_2017_2_rev_6_2024_01_omaps.pdf',
        owner: 'IOF',
        lng: 'en'
    },
    {
        name: 'Международные требования для карт ориентирования, ISOM 2017-2',
        year: 2022,
        url: './docs/iof_isom_2017_2_2022_ru_omaps.pdf.pdf',
        owner: 'IOF',
    },
    {
        name: 'International Specification for Orienteering Maps, ISOM 2000',
        year: 2001,
        url: './docs/iof_isom_2000_2011_omaps.pdf',
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
        name: 'International Specification for Sprint Orienteering Maps, ISSprOM 2019-2 rev 6',
        year: 2024,
        url: 'https://omapwiki.orienteering.sport/specifications/issprom/',
        link: './docs/iof_issprom_2019_2_rev_6_2024_01_omaps.pdf',
        owner: 'IOF',
        lng: 'en'
    },
    {
        name: 'Международные требования для карт ориентирования "спринт-кросс", ISSprOM 2019-2',
        year: 2023,
        url: './docs/iof_issprom_2019_2_2023_ru_omaps.pdf',
        owner: 'IOF',
    },
    {
        name: 'Best practices for sprint mapping May 2025',
        year: 2025,
        url: './docs/iof_best_sprint_mapping_2025_05_omaps.pdf',
        owner: 'IOF',
        lng: 'en'
    },
    {
        name: 'Guidelines for complex urban structures, 2022-01',
        year: 2022,
        url: './docs/iof_urban_structures_2022_01_omaps.pdf',
        owner: 'IOF',
        lng: 'en'
    },
    {
        name: 'Руководство по составлению карт и планированию дистанций в сложных городских сооружениях на спринтерских картах по ориентированию',
        year: 2022,
        url: './docs/iof_urban_structures_2022_01_ru_omaps.pdf',
        owner: 'IOF'
    },
    {
        name: 'International Specification for MTB Orienteering Maps, ISMTBOM 2022 rev 4',
        year: 2022,
        url: 'https://omapwiki.orienteering.sport/specifications/ismtbom/',
        link: './docs/iof_ismtbom_2022_rev_4_2025_01_omaps.pdf',
        owner: 'IOF',
        lng: 'en'
    },
    {
        name: 'International Specification for Ski Orienteering Maps, ISSkiOM 2019 rev 3',
        year: 2024,
        url: 'https://omapwiki.orienteering.sport/specifications/isskiom/',
        link: './docs/iof_isskiom_2019_rev_3_2024_09_omaps.pdf',
        owner: 'IOF',
        lng: 'en'
    },
    {
        name: 'Ski-O map symbols 2019',
        year: 2019,
        url: './docs/iof_skio_symbols_2019_omaps.pdf',
        owner: 'IOF',
        lng: 'en'
    },
    {
        name: 'International Specification for Indoor Orienteering Maps (ISInOM), draft v5',
        year: 2025,
        url: './docs/iof_isinom_draft_v5_omaps.pdf',
        owner: 'IOF',
        lng: 'en'
    },
    {
        name: 'IOF Printing and Colour Definitions, rev 4',
        year: 2024,
        url: './docs/iof_printing_rev_4_2024_omaps.pdf',
        owner: 'IOF',
        lng: 'en'
    },
    {
        name: 'International Specifcation for Control Descriptions',
        year: 2024,
        url: './docs/iof_control_descriptions_2024_omaps.pdf',
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
        url: './docs/iof_course_planning_forest_2020_omaps.pdf',
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
        url: './docs/iof_course_planning_sprint_2020_omaps.pdf',
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
        name: 'IRF Rules of Rogaining',
        year: 2024,
        url: 'https://www.rogaining.com/rules',
        link: './docs/irf_rogaining_rules_2024_omaps.pdf',
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
        name: 'Правила соревнований по рогейну для СПб и ЛО',
        year: 2010,
        url: 'https://spbof.ru/jdownloads/documents/rogaining_rules_spb_110609.pdf',
        owner: 'SFSO_SPB'
    },
];
