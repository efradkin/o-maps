// types can be ORIENT, ROGAINE, SPRINT, QUARTERS, RELIEF
var oMaps = [
    // --- городские парки ---
    {
        name: 'Парк Авиаторов',
        year: 2017,
        url: './maps/aviatorov_2017.jpg',
        bounds: [[59.872257979453174, 30.29713869094849], [59.87136403749476, 30.307695865631107], [59.86442709281249, 30.29462814331055]],
        types: ['ORIENT', 'SPRINT'],
    },
    {
        name: 'Парк Победы',
        year: 2020,
        url: './maps/pobedy_2020.jpg',
        bounds: [[59.873216517019806, 30.318918228149418], [59.87246261338842, 30.34007549285889], [59.86449172940988, 30.31690120697022]],
        types: ['ORIENT', 'SPRINT'],
    },
    {
        name: 'Парк Интернационалистов',
        year: 2020,
        url: './maps/internatsionalistov_2021.jpg',
        bounds: [[59.86276804382595, 30.392925739288334], [59.86294041640396, 30.412087440490726], [59.855441383514496, 30.39324760437012]],
        types: ['ORIENT', 'SPRINT'],
    },
    {
        name: 'Парк Екатерингоф',
        year: 1986,
        url: './maps/ekateringof_1986.jpg',
        bounds: [[59.906952348502685, 30.255017280578617], [59.90583339361939, 30.27119636535645], [59.90037794856062, 30.253279209136966]],
        types: ['ORIENT', 'SPRINT'],
    },
    {
        name: 'Полежаевский парк',
        year: 2015,
        url: './maps/polezhaevsky_2015.jpg',
        bounds: [[59.84651791838533, 30.179958343505863], [59.84528913795502, 30.21223068237305], [59.83302040442371, 30.177898406982425]],
        types: ['ORIENT'],
    },
    {
        name: 'Полюстровский парк',
        year: 2014,
        url: './maps/polyustrovsky_2014.jpg',
        bounds: [[59.96850125617298, 30.418868064880375], [59.968458299943094, 30.431871414184574], [59.95922141683493, 30.419168472290043]],
        types: ['ORIENT'],
    },
    {
        name: 'Пулковский парк',
        year: 2024,
        url: './maps/pulkovsky_2024.jpg',
        bounds: [[59.84401180495004, 30.3233814239502], [59.84255116579194, 30.339174270629886], [59.832470469568456, 30.31857490539551]],
        types: ['ORIENT', 'SPRINT'],
    },
    {
        name: 'Сосновка',
        year: 2019,
        url: './maps/sosnovka_2019.jpg',
        bounds: [[60.03450203381863, 30.327758789062504], [60.03205832060785, 30.371103286743168], [60.01190151317921, 30.32200813293457]],
        types: ['ORIENT'],
    },
    {
        name: 'Удельный парк',
        year: 2022,
        url: './maps/udelny_2022.jpg',
        bounds: [[60.015376222736755, 30.294713973999027], [60.01172991312145, 30.33308029174805], [60.0032345970667, 30.288019180297855]],
        types: ['ORIENT'],
    },
    {
        name: 'Пискарёвский парк',
        year: 2024,
        url: './maps/piskarevsky_2024.jpg',
        bounds: [[60.0064313230872, 30.39530754089356], [60.004586270603426, 30.422816276550297], [59.994350796655525, 30.390887260437015]],
        types: ['ORIENT'],
    },
    {
        name: 'Парк Лесотехнической академии',
        year: 2012,
        url: './maps/lesotekchnicheskaya_2012.jpg',
        bounds: [[59.99823507053651, 30.33007621765137], [59.99653978056108, 30.355482101440433], [59.99027289145817, 30.327501296997074]],
        types: ['ORIENT'],
    },
    {
        name: 'Парк им. академика Сахарова',
        year: 2021,
        url: './maps/sakharova_2021.jpg',
        bounds: [[59.9834466414233, 30.404856204986576], [59.98170765463308, 30.42200088500977], [59.97609289470922, 30.402088165283207]],
        types: ['ORIENT'],
    },
    {
        name: 'Таврический сад',
        year: 2023,
        url: './maps/tavrichesky_2023.jpg',
        bounds: [[59.94823046787108, 30.367712974548343], [59.947607215923064, 30.37899971008301], [59.943663263827155, 30.366854667663574]],
        types: ['ORIENT'],
    },
    // --- городские кварталы ---
    {
        name: 'ЖК "Академ Парк"',
        year: 2022,
        url: './maps/akadem_park_2022.jpg',
        bounds: [[60.00842643842314, 30.398890972137455], [60.00738599006695, 30.40973782539368], [60.000461347882606, 30.396466255187992]],
        author: 'KUZ',
        types: ['ORIENT', 'SPRINT', 'QUARTERS'],
    },
    {
        name: 'Сад Олимпия',
        year: 2023,
        url: './maps/olimpia_2023.jpg',
        bounds: [[59.91895722202924, 30.317974090576175], [59.91908628309989, 30.330934524536136], [59.909932457837336, 30.318167209625248]],
        author: 'WN',
        types: ['ORIENT', 'SPRINT', 'QUARTERS'],
    },
    {
        name: 'Петропавловская крепость',
        year: 2020,
        url: './maps/petropavlovka_2020.jpg',
        bounds: [[59.953237549626834, 30.31014204025269], [59.9523135528265, 30.323424339294437], [59.94785436895968, 30.308296680450443]],
        types: ['ORIENT', 'SPRINT', 'QUARTERS'],
    },
    // --- рогейн ---
    {
        name: 'Крестовский остров',
        year: 2024,
        url: './maps/krestovsky_KKM_2024.jpg',
        bounds: [[59.98645208220945, 30.187597274780277], [59.98585101588345, 30.273513793945316], [59.964592011112174, 30.188112258911136]],
        author: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Ржевский лесопарк',
        year: 2023,
        url: './maps/rzhevsky_rogaine_2023.jpg',
        bounds: [[59.97722021736102, 30.491437911987305], [59.97520174583225, 30.55727005004883], [59.95157218793088, 30.48568725585938]],
        types: ['ROGAINE'],
    },
    {
        name: 'Шуваловский лесопарк',
        year: 2024,
        url: './maps/shuvalovsky_rogaine_2024.jpg',
        bounds: [[60.08453692889112, 30.291752815246586], [60.08190427782784, 30.32033443450928], [60.06931601663244, 30.28668880462647]],
        types: ['ROGAINE'],
    },
];