let otherStartsMaps = [
    /* --- Прочие --- */
    {
        name: 'Мельничный ручей, Голубые дачи',
        region: 'starts',
        start: 'REPORT',
        year: 1983,
        info: '17-18.09. Кубок ЛГС ДСО "Спартак". <a href="./docs/mruchey_1983_09_17/doc_1_omaps.jpg">Шапка</a>, <a href="./docs/mruchey_1983_09_17/doc_2_omaps.jpg">сводный протокол</a>, <a href="./docs/mruchey_1983_09_17/doc_3_omaps.jpg">МА</a>, <a href="./docs/mruchey_1983_09_17/doc_4_omaps.jpg">МБ</a>, <a href="./docs/mruchey_1983_09_17/doc_5_omaps.jpg">ЖА,ЖБ</a>, <a href="./docs/mruchey_1983_09_17/doc_6_omaps.jpg">М17,Ж17</a>',
        url: './maps/starts/other/mruchey_1983_09_17.webp',
        link: ['./original_maps/starts/other/mruchey_1983_09_17_M_omaps.jpg','./original_maps/starts/other/mruchey_1983_09_17_W_omaps.jpg'],
        docs: ['mruchey_1983_09_17', 6],
        bounds: [[59.99709773368789, 30.673484802246097], [59.994565409324075, 30.720434188842777], [59.96669704655032, 30.668506622314457]],
        author: ['VSLVSKY','DRBSHV','PTRV_A']
    },
    {
        name: 'Симагино',
        region: 'starts',
        start: 'REPORT',
        year: 1988,
        info: '7-8.10. День Конституции СССР. <a href="./docs/simagino_1988_10_07/doc_4_omaps.jpg">Информация</a>, <a href="./docs/simagino_1988_10_07/doc_3_omaps.jpg">положение</a>, <a href="./docs/simagino_1988_10_07/doc_5_omaps.jpg">7.10,МА(10км)</a>, <a href="./docs/simagino_1988_10_07/doc_6_omaps.jpg">9.10,МА(11км)</a>, <a href="./docs/simagino_1988_10_07/doc_7_omaps.jpg">7.10,ЖА(8км)</a>, <a href="./docs/simagino_1988_10_07/doc_8_omaps.jpg">8.10,ЖА(7км)</a>',
        url: './maps/starts/other/simagino_1988_10_07.webp',
        link: ['./docs/simagino_1988_10_07/doc_1_omaps.jpg','./docs/simagino_1988_10_07/doc_2_omaps.jpg'],
        docs: ['simagino_1988_10_07', 8],
        bounds: [[60.292342158509875, 29.789428710937504], [60.290598155553795, 29.840326309204105], [60.256848280136865, 29.78427886962891]],
        author: 'TRSV'
    },
    {
        name: 'Сосново',
        region: 'starts',
        start: 'REPORT',
        year: 1990,
        info: '6-7.10. "Дыхание осени", ко Дню Конституции СССР. <a href="./docs/sosnovo_1990_10_06/doc_3_omaps.jpg">Положение</a>, <a href="./docs/sosnovo_1990_10_06/doc_4_omaps.jpg">МА</a>',
        url: './maps/starts/other/sosnovo_1990_10_06.webp',
        link: ['./docs/sosnovo_1990_10_06/doc_1_omaps.jpg','./docs/sosnovo_1990_10_06/doc_2_omaps.jpg'],
        docs: ['sosnovo_1990_10_06', 4],
        bounds: [[60.54250897743518, 30.23574829101563], [60.53968080947751, 30.292267799377445], [60.50912506848012, 30.228023529052738]],
        author: 'TRSV'
    },

    /* --- Рогейн --- */

    {
        name: 'Луга, оз Омчино',
        year: 2024,
        start: 'OTHER',
        info: 'Лужский лыжный рогейн.',
        url: './maps/rogaine/omchino_luzhski_2024.webp',
        link: './original_maps/rogaine/omchino_luzhski_2024_omaps.gif',
        bounds: [[58.73409386161734, 29.75131988525391], [58.72460404916333, 29.842386245727543], [58.68211323154789, 29.73183631896973]],
        owner: 'SHBN',
        type: ['ROGAINE','WINTER']
    },
    {
        name: 'Луга, оз Омчино',
        year: 2024,
        start: 'OTHER',
        info: 'Рогейн на Лужских берегах.',
        url: './maps/rogaine/omchino_luzhsky_2024.webp',
        link: './original_maps/rogaine/omchino_luzhsky_2024_omaps.gif',
        bounds: [[58.7392609339061, 29.759130477905277], [58.72727749761397, 29.876804351806644], [58.686708127025476, 29.741020202636722]],
        owner: 'SHBN',
        type: ['ROGAINE']
    },

    /* --- ККМ --- */

    {
        name: 'Сестрорецк',
        date: '2024-05',
        url: './maps/rogaine/kkm/sestroretsk_KKM_2024_05.webp',
        link: './original_maps/rogaine/kkm/sestroretsk_KKM_2024_05_omaps.jpg',
        bounds: [[60.130820091007536, 29.91731643676758], [60.13124754338759, 30.013790130615238], [60.05935761134086, 29.91731643676758]],
        gps: 'https://viewer.o-gps-center.ru/viewer/event/19207/',
        start: 'KKM',
        owner: 'RYZHOV',
        type: ['ROGAINE']
    },
    {
        name: 'Крестовский остров',
        date: '2024-06',
        url: './maps/rogaine/kkm/krestovsky_KKM_2024_06.webp',
        link: './original_maps/rogaine/kkm/krestovsky_KKM_2024_06_omaps.jpg',
        bounds: [[59.986065683681495, 30.188369750976566], [59.986237416917476, 30.273771286010746], [59.964377204056234, 30.188970565795902]],
        gps: 'https://viewer.o-gps-center.ru/viewer/event/19609/',
        start: 'KKM',
        owner: 'RYZHOV',
        type: ['ROGAINE']
    },
    {
        name: 'Васильевский остров',
        date: '2024-10',
        url: './maps/rogaine/kkm/vasiljevsky_2024_10.webp',
        link: './original_maps/rogaine/kkm/vasiljevsky_2024_10_omaps.jpg',
        bounds: [[59.95896360641199, 30.220642089843754], [59.959006574955104, 30.308446884155277], [59.92792577181406, 30.21995544433594]],
        gps: 'https://viewer.o-gps-center.ru/viewer/event/20694/',
        start: 'KKM',
        owner: 'RYZHOV',
        type: ['ROGAINE']
    },

    /* --- Бекетов --- */

    {
        name: 'Мельниково',
        year: 2020,
        url: './maps/rogaine/beketov/melnikovo_2020.webp',
        link: './original_maps/rogaine/beketov/VMB20.jpg',
        bounds: [[61.051140518044775, 29.28714752197266], [61.06243861375529, 29.71063613891602], [60.84884090341096, 29.31032180786133]],
        owner: 'BKTV',
        start: 'MB',
        type: ['ROGAINE']
    },
];