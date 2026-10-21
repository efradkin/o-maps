/* =========================================================================
   O-Maps · history-russia.js — диаграммы статьи history/russia-history.html
   («Ориентирование в России и СССР»).

   russiaChampsChart — где проходили чемпионаты СССР и России (по состоянию на октябрь 2026 года):
     записи calendar-fsor.js без parent (отдельные турниры, а не дни), у которых в start есть код
     чемпионата: USSR, USSR_19xx, RUS, RUS_20xx (бег), SKI_USSR*, SKI_RUS (лыжи), MTBO_RUS (велосипед);
     Кубки России (RUS_CUP), всесоюзные соревнования (USSR_V_*) и записи без кода не учитываются,
     как и запланированные после 17.10.2026 и отменённые (cancelled: true). Не учтены два турнира
     1993 года без места (MAJOR_19930325_1, MAJOR_19931017_1) и три турнира 2013–2014 годов,
     проведение которых не подтверждено (MAJOR_20131104_1, MAJOR_20131210_1, MAJOR_20140323_1).
     Федеральный округ определён вручную по полю place;
     Крым и чемпионаты СССР в других союзных республиках — отдельные строки. Итого 211 турниров:
       Приволжский: MAJOR_19910728_1, MAJOR_19940219_1, MAJOR_19990904_1, MAJOR_20000817_1, MAJOR_20000908_1,
         MAJOR_20000930_1, MAJOR_20011004_1, MAJOR_20020904_1, MAJOR_20030312_1, MAJOR_20040311_1, MAJOR_20040922_1,
         MAJOR_20060308_1, MAJOR_20060801_1, MAJOR_20080124_1, MAJOR_20080911_1, MAJOR_20110524_1, MAJOR_20111015_1,
         MAJOR_20120213_1, MAJOR_20120527_1, MAJOR_20120913_1, MAJOR_20130626_1, MAJOR_20140525_1, MAJOR_20140702_1,
         MAJOR_20141212_1, MAJOR_20150707_1, MAJOR_20150909_1, MAJOR_20151214_1, MAJOR_20170202_1, MAJOR_20170914_1,
         MAJOR_20171211_1, MAJOR_20180316_1, MAJOR_20180606_1, MAJOR_20181218_1, MAJOR_20190221_1, MAJOR_20201017_1,
         MAJOR_20201217_1, MAJOR_20210211_1, MAJOR_20210910_1, MAJOR_20220909_1, MAJOR_20220923_1, MAJOR_20230822_1,
         MAJOR_20231214_1, MAJOR_20240903_1, MAJOR_20250218_1, MAJOR_20250808_1, MAJOR_20250819_1, MAJOR_20260625_1,
         MAJOR_20260922_1, SPB_19891207_1;
       Северо-Западный: MAJOR_19820825_1, MAJOR_19930825_1, MAJOR_19960905_1, MAJOR_19990527_1, MAJOR_20040730_1,
         MAJOR_20060407_1, MAJOR_20070923_1, MAJOR_20080505_1, MAJOR_20090930_1, MAJOR_20121209_1, MAJOR_20130518_1,
         MAJOR_20131003_1, MAJOR_20150302_1, MAJOR_20170514_1, MAJOR_20170518_1, MAJOR_20191108_1, MAJOR_20210523_1,
         MAJOR_20230922_1, MAJOR_20260315_1, SPB_19810804_2, SPB_19960125_1, SPB_19960913_1, SPB_19980218_1,
         SPB_20010529_1, SPB_20040201_1, SPB_20040904_1, SPB_20050205_2, SPB_20070624_1, SPB_20110612_1,
         SPB_20160623_1, SPB_20190524_1, SPB_20190628_2, SPB_20190904_1, SPB_20200926_2, SPB_20210529_2,
         SPB_20220611_1, SPB_20220908_1, SPB_20230314_1, SPB_20240516_1;
       Центральный: MAJOR_19920210_1, MAJOR_19950215_1, MAJOR_20000520_1, MAJOR_20030917_1, MAJOR_20060207_1,
         MAJOR_20090716_1, MAJOR_20100227_1, MAJOR_20100909_1, MAJOR_20120522_1, MAJOR_20120523_2,
         MAJOR_20120801_1, MAJOR_20121004_1, MAJOR_20130201_1, MAJOR_20131012_1, MAJOR_20140213_1,
         MAJOR_20140513_1, MAJOR_20150201_1, MAJOR_20160221_1, MAJOR_20160507_1, MAJOR_20160611_1,
         MAJOR_20170622_1, MAJOR_20170911_1, MAJOR_20180306_1, MAJOR_20180608_1, MAJOR_20180706_1,
         MAJOR_20190830_1, MAJOR_20200214_1, MAJOR_20200918_1, MAJOR_20210702_1, MAJOR_20210827_1,
         MAJOR_20220427_1, MAJOR_20220603_1, MAJOR_20230519_1, MAJOR_20230624_1, MAJOR_20230907_1,
         MAJOR_20240627_1, MAJOR_20241017_1, MAJOR_20250626_1, MAJOR_20260902_1;
       Уральский: MAJOR_19870812_1, MAJOR_19900311_1, MAJOR_19950906_1, MAJOR_20000215_1, MAJOR_20010208_1,
         MAJOR_20050908_1, MAJOR_20070314_1, MAJOR_20080221_1, MAJOR_20081006_1, MAJOR_20101219_1,
         MAJOR_20110224_1, MAJOR_20110518_1, MAJOR_20110830_1, MAJOR_20111213_1, MAJOR_20140226_1,
         MAJOR_20150522_1, MAJOR_20150526_1, MAJOR_20160910_1, MAJOR_20161212_1, MAJOR_20180913_2,
         MAJOR_20190329_1, MAJOR_20191216_1, MAJOR_20200318_1, MAJOR_20210324_1, MAJOR_20211222_1,
         MAJOR_20221213_1, MAJOR_20240115_1, MAJOR_20240917_1, MAJOR_20251216_1, SPB_19910224_1;
       Сибирский: MAJOR_20010912_1, MAJOR_20020308_1, MAJOR_20070914_1, MAJOR_20090128_1, MAJOR_20110402_1,
         MAJOR_20120313_1, MAJOR_20130313_1, MAJOR_20160318_1, MAJOR_20160917_1, MAJOR_20170316_1, MAJOR_20210716_1,
         MAJOR_20220211_1, MAJOR_20220323_1, MAJOR_20230302_1, MAJOR_20230307_1, MAJOR_20240305_1, MAJOR_20240314_1,
         MAJOR_20241212_1, MAJOR_20250911_1, MAJOR_20260219_1, MAJOR_20260512_1;
       Южный и Северо-Кавказский: MAJOR_19920808_1, MAJOR_19970916_1, MAJOR_19980417_1, MAJOR_20030524_1,
         MAJOR_20030607_1, MAJOR_20050601_1, MAJOR_20060910_1, MAJOR_20060915_1, MAJOR_20100414_1, MAJOR_20141104_1,
         MAJOR_20151108_1, MAJOR_20211217_1, MAJOR_20221104_1, MAJOR_20241101_1, MAJOR_20251016_1, SPB_20181107_1,
         SPB_20211104_2;
       Дальневосточный: MAJOR_20090213_1, MAJOR_20180922_1, MAJOR_20190720_1, MAJOR_20231002_1, MAJOR_20241002_1,
         MAJOR_20250308_1;
       Крым: MAJOR_20161110_1, MAJOR_20201120_1, SPB_20171109_1;
       Другие республики СССР: MAJOR_19830819_1, MAJOR_19840817_1, MAJOR_19850823_1, MAJOR_19880830_1,
         MAJOR_19890724_1, MAJOR_19900824_1, SPB_19860909_1;

   russiaMedalsChart — медали СССР (1989–1991) и России (с 1992) на взрослых чемпионатах мира IOF:
     WOC (бег), World Ski Orienteering Championships, World MTB Orienteering Championships.
     Эстафета и смешанная эстафета — одна медаль команды; поделённое место — полная медаль.
     Лыжи 2017 — итог после перераспределения медалей IOF (результаты П. Фроловой аннулированы).
     2021 год — спортсмены из России выступали в нейтральном статусе («Neutral Athletes»).
     Не учтены неофициальные гонки (смешанная спринт-эстафета MTBO 2014, масс-старт MTBO 2016)
     и трейл-ориентирование. Источники: годовые страницы чемпионатов и списки медалистов
     в en/de/fi Википедии, новости и рейтинговая база IOF (orienteering.sport, ranking.orienteering.org).
     Итого: бег — 2 медали СССР и 40 России (с 2021 годом), лыжи — 111, велосипед — 95.

   Требует Chart.js (js/ext/chart-4.4.8.js). Цвета берутся из токенов --o-*
   и из проверенной категориальной палитры (свои шаги для светлой и тёмной темы).
   Под каждой диаграммой строится таблица с теми же числами.
   ========================================================================= */
(function () {
    'use strict';

    var PALETTE = {
        light: ['#2a78d6', '#eb6834', '#1baf7a', '#eda100', '#e87ba4'],
        dark:  ['#3987e5', '#d95926', '#199e70', '#c98500', '#d55181']
    };

    var range = function (a, b) { var r = []; for (var i = a; i <= b; i++) r.push(String(i)); return r; };

    var CHARTS = [
        {
            id: 'russiaChampsChart',
            type: 'bar',
            stacked: true,
            horizontal: true,
            labels: ['Приволжский', 'Северо-Западный', 'Центральный', 'Уральский', 'Сибирский', 'Южный и Северо-Кавказский', 'Дальневосточный', 'Крым', 'Другие республики СССР'],
            short: {'Южный и Северо-Кавказский': 'Юг и Кавказ', 'Другие республики СССР': 'Др. респ. СССР', 'Северо-Западный': 'Северо-Запад', 'Дальневосточный': 'Дальний Восток', 'Центральный': 'Центр', 'Приволжский': 'Приволжье', 'Уральский': 'Урал', 'Сибирский': 'Сибирь'},
            labelHead: 'Федеральный округ',
            series: [
                { name: 'Бег', data: [21, 29, 13, 9, 5, 17, 4, 2, 7] },
                { name: 'Лыжи', data: [18, 6, 10, 19, 15, 0, 2, 0, 0] },
                { name: 'Велосипед', data: [10, 4, 16, 2, 1, 0, 0, 1, 0] }
            ],
            yTitle: 'турниров'
        },
        {
            id: 'russiaMedalsChart',
            type: 'bar',
            stacked: true,
            labels: range(1989, 2021),
            labelHead: 'Год',
            series: [
                { name: 'Бег', data: [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 3, 3, 4, 2, 1, 0, 2, 2, 2, 3, 3, 5, 2, 2, 0, 2] },
                { name: 'Лыжи', data: [0, 0, 0, 3, 0, 3, 0, 2, 0, 2, 0, 7, 0, 8, 0, 6, 10, 0, 15, 0, 8, 0, 8, 0, 10, 0, 6, 0, 8, 0, 10, 0, 5] },
                { name: 'Велосипед', data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 5, 6, 4, 4, 4, 3, 5, 3, 9, 6, 7, 11, 8, 9, 0, 7] }
            ],
            yTitle: 'медалей'
        }
    ];

    var instances = [];

    function isDark() {
        return document.documentElement.classList.contains('o-dark');
    }

    function token(name, fallback) {
        var v = getComputedStyle(document.documentElement).getPropertyValue(name);
        return (v && v.trim()) || fallback;
    }

    function buildTable(cfg, host) {
        if (host.querySelector('details')) return;
        var details = document.createElement('details');
        details.style.marginTop = '6px';
        var summary = document.createElement('summary');
        summary.textContent = 'Таблица с данными';
        summary.style.cursor = 'pointer';
        summary.style.fontSize = '.84rem';
        summary.style.color = 'var(--o-text-muted)';
        details.appendChild(summary);

        var wrap = document.createElement('div');
        wrap.style.overflowX = 'auto';
        var table = document.createElement('table');
        table.className = 'table table-sm';
        table.style.fontSize = '.82rem';
        table.style.marginTop = '6px';
        table.style.fontVariantNumeric = 'tabular-nums';

        var thead = document.createElement('thead');
        var hr = document.createElement('tr');
        var heads = [cfg.labelHead].concat(cfg.series.map(function (s) { return s.name; }));
        if (cfg.series.length > 1) heads.push('Всего');
        heads.forEach(function (h) {
            var th = document.createElement('th');
            th.textContent = h;
            hr.appendChild(th);
        });
        thead.appendChild(hr);
        table.appendChild(thead);

        var tbody = document.createElement('tbody');
        cfg.labels.forEach(function (label, i) {
            var tr = document.createElement('tr');
            var cells = [label];
            var sum = 0;
            cfg.series.forEach(function (s) { cells.push(s.data[i]); sum += s.data[i]; });
            if (cfg.series.length > 1) cells.push(sum);
            cells.forEach(function (c) {
                var td = document.createElement('td');
                td.textContent = c;
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);
        wrap.appendChild(table);
        details.appendChild(wrap);
        host.appendChild(details);
    }

    function render() {
        if (typeof Chart === 'undefined') return;
        instances.forEach(function (c) { c.destroy(); });
        instances = [];

        var dark = isDark();
        var colors = dark ? PALETTE.dark : PALETTE.light;
        var ink = token('--o-text-muted', dark ? '#96a194' : '#6a7468');
        var grid = token('--o-border-soft', dark ? '#2a312c' : '#e9ede4');
        var surface = token('--o-surface', dark ? '#1b211d' : '#ffffff');

        Chart.defaults.font.family = getComputedStyle(document.body).fontFamily;
        Chart.defaults.color = ink;

        CHARTS.forEach(function (cfg) {
            var canvas = document.getElementById(cfg.id);
            if (!canvas) return;
            var horizontal = !!cfg.horizontal;
            var multi = cfg.series.length > 1;

            var datasets = cfg.series.map(function (s, i) {
                return {
                    label: s.name,
                    data: s.data,
                    backgroundColor: colors[i],
                    borderColor: surface,
                    borderWidth: multi ? { top: 1, bottom: 0, left: 0, right: 0 } : 0,
                    borderRadius: multi ? 0 : 4,
                    borderSkipped: false,
                    maxBarThickness: horizontal ? 18 : 28
                };
            });

            var valueAxis = {
                stacked: !!cfg.stacked,
                beginAtZero: true,
                grid: { color: grid, drawTicks: false },
                border: { display: false },
                ticks: { precision: 0, padding: 6 },
                title: { display: true, text: cfg.yTitle }
            };
            var categoryAxis = {
                stacked: !!cfg.stacked,
                grid: { display: false },
                border: { color: grid },
                ticks: { autoSkip: !horizontal, maxRotation: 0 }
            };
            /* на узком экране длинные подписи горизонтальной диаграммы («Александр Василевский»)
               обрезаются у левого края: там имя сокращается до инициала */
            if (horizontal) {
                categoryAxis.ticks.callback = function (value) {
                    var label = this.getLabelForValue(value);
                    if (this.chart.width >= 420) return label;
                    return cfg.short ? (cfg.short[label] || label) : label.replace(/^(\S)\S*\s+/, '$1.\u00a0');
                };
            }

            instances.push(new Chart(canvas, {
                type: cfg.type,
                data: { labels: cfg.labels, datasets: datasets },
                options: {
                    indexAxis: horizontal ? 'y' : 'x',
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: false,
                    interaction: { mode: 'index', intersect: false },
                    plugins: {
                        legend: {
                            display: multi,
                            position: 'top',
                            labels: { boxWidth: 12, boxHeight: 12, usePointStyle: true, pointStyle: 'rectRounded' }
                        },
                        tooltip: {
                            callbacks: multi ? {
                                footer: function (items) {
                                    var t = 0;
                                    items.forEach(function (it) { t += it.parsed[horizontal ? 'x' : 'y']; });
                                    return 'Всего: ' + t;
                                }
                            } : {}
                        }
                    },
                    scales: horizontal ? { x: valueAxis, y: categoryAxis } : { x: categoryAxis, y: valueAxis }
                }
            }));

            var host = canvas.closest('figure') || canvas.parentNode;
            buildTable(cfg, host);
        });
    }

    function init() {
        render();
        /* тема меняется классом на <html>: перерисовываем с новыми цветами */
        if (window.MutationObserver) {
            new MutationObserver(function (list) {
                for (var i = 0; i < list.length; i++) {
                    if (list[i].attributeName === 'class') { render(); break; }
                }
            }).observe(document.documentElement, { attributes: true });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
