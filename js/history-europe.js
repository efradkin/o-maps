/* =========================================================================
   O-Maps · history-europe.js — диаграммы статьи history/europe-history.html
   («Ориентирование в Европе»).

   Данные по состоянию на 14 ноября 2026 года:
     - europeJukolaChart — число команд, стартовавших в Юколе (мужская эстафета)
       и Венле (женская; как эстафета — с 1978 года), 1949–2026: таблица
       «Winning clubs» (столбцы Jukola Starters / Venla Starters) статьи
       en.wikipedia.org/wiki/Jukola_relay; 2020 — отменена (null);
     - europeOringenChart — участники O-Ringen 1965–2026: таблица «Statistik»
       статьи sv.wikipedia.org/wiki/O-Ringen (до 2005 года — среднее число
       участников за день, с 2006 — уникальные участники); 2020–2021 отменены (null);
       для всех лет использованы значения официальной исторической таблицы O-Ringen;
     - europeHostsChart — чемпионаты мира и Европы IOF (start: WOC, EOC, SKI_WOC,
       SKI_EOC, WMTBOC, EMTBOC; только записи верхнего уровня без parent и без
       cancelled) из calendar-iof.js, сгруппированные по стране — последнему
       элементу поля place; ЧССР вместе с Чехией, ГДР вместе с Германией,
       Россия и Турция целиком; не учтены Австралия, США, Япония, Израиль,
       Казахстан (IOF_19850904_1, IOF_19931009_1, IOF_20041018_1, IOF_20050809_1,
       IOF_20090303_1, IOF_20090809_1, IOF_20130303_1, MAJOR_20260301_1);
       записи-дубли без поля start (обе в calendar-iof.js) не учтены: MAJOR_20260825_1 (WMTBOC 2026)
       и MAJOR_20260522_1 (EMTBOC 2026); отменённых (cancelled) и «проведение
       не подтверждено» среди этих записей нет (проверено 14.11.2026);
       всего 136 чемпионатов в 24 странах;
     - europeMedalsChart — медальный зачёт чемпионатов Европы в беге 1962–2026:
       таблицы призёров по видам (Individual/Classic/Long, Middle, Short/Sprint,
       Knock Out Sprint, Relay, Sprint relay) статьи
       en.wikipedia.org/wiki/European_Orienteering_Championships; 119 комплектов,
       эстафета — одна медаль команде, неофициальная эстафета 1962 года не учтена,
       при делёжке места засчитаны обе медали (спринт 2012 и 2018 у мужчин,
       2016 у женщин); бронза смешанной спринт-эстафеты 2025 года — Швеции
       (в таблице en.wikipedia у шведской команды ошибочно флаг FIN; no.wikipedia
       «EM i orientering 2025»): Швеция 35/27/31, Финляндия 11/8/21; «Другие» — Латвия, Эстония, Литва, Словакия, Болгария,
       Бельгия, Австрия, Польша.

   Требует Chart.js (js/ext/chart-4.4.8.js). Цвета берутся из токенов --o-*
   и из проверенной категориальной палитры (свои шаги для светлой и тёмной темы);
   у медалей — свои цвета золота, серебра и бронзы. Под каждой диаграммой
   строится таблица с теми же числами (null — «—», год без соревнований).
   ========================================================================= */
(function () {
    'use strict';

    var MEDAL = {
        light: {gold: '#d1a21a', silver: '#9aa4ad', bronze: '#b4703a'},
        dark:  {gold: '#e0b43a', silver: '#aab4bd', bronze: '#c88450'}
    };

    var PALETTE = {
        light: ['#2a78d6', '#eb6834', '#1baf7a', '#eda100', '#e87ba4'],
        dark:  ['#3987e5', '#d95926', '#199e70', '#c98500', '#d55181']
    };

    var range = function (a, b) { var r = []; for (var i = a; i <= b; i++) r.push(String(i)); return r; };

    var CHARTS = [
        {
            id: 'europeJukolaChart',
            type: 'bar',
            stacked: true,
            labels: range(1949, 2026),
            labelHead: 'Год',
            series: [
                { name: 'Юкола', data: [41, 62, 71, 83, 82, 96, 115, 127, 108, 119, 134, 132, 143, 173, 154, 178, 210, 225, 264, 300, 327, 383, 329, 443, 435, 411, 475, 453, 471, 595, 594, 508, 753, 728, 807, 920, 937, 991, 1052, 976, 1067, 1109, 1144, 1131, 1051, 982, 1107, 1049, 1172, 1224, 1226, 1134, 1189, 1256, 1205, 1314, 1331, 1337, 1345, 1389, 1412, 1537, 1504, 1685, 1632, 1628, 1787, 1683, 1600, 1901, 1950, null, 1252, 1592, 1704, 1655, 1731, 1879] },
                { name: 'Венла', data: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 190, 225, 191, 271, 237, 310, 371, 403, 441, 476, 423, 519, 573, 543, 578, 545, 486, 597, 535, 645, 667, 678, 622, 689, 728, 708, 796, 841, 854, 881, 951, 978, 1083, 1048, 1246, 1210, 1211, 1286, 1358, 1269, 1632, 1692, null, 1014, 1432, 1558, 1426, 1475, 1551] }
            ],
            yTitle: 'команд на старте'
        },
        {
            id: 'europeOringenChart',
            type: 'bar',
            labels: range(1965, 2026),
            labelHead: 'Год',
            series: [
                { name: 'Участников O-Ringen', data: [156, 672, 1910, 3250, 5355, 6378, 8627, 8253, 10449, 10196, 9322, 14843, 7186, 15148, 15842, 16342, 20650, 15003, 24602, 17469, 25021, 18790, 17413, 17708, 18609, 20762, 16770, 19452, 14853, 14600, 14187, 16034, 11179, 13249, 15238, 13740, 12525, 14651, 14998, 13259, 12657, 14050, 13793, 24375, 15589, 16058, 12939, 21172, 12907, 23088, 18058, 24313, 15127, 17171, 21171, null, null, 20271, 16242, 19854, 16863, 21161] }
            ],
            yTitle: 'участников'
        },
        {
            id: 'europeHostsChart',
            type: 'bar',
            stacked: true,
            horizontal: true,
            labels: ['Финляндия', 'Швеция', 'Швейцария', 'Норвегия', 'Чехия (ЧССР)', 'Италия', 'Россия', 'Болгария',
                'Польша', 'Португалия', 'Дания', 'Венгрия', 'Австрия', 'Франция', 'Эстония', 'Литва',
                'Великобритания', 'Латвия', 'Украина', 'Германия (ГДР)', 'Словакия', 'Румыния', 'Турция', 'Бельгия'],
            labelHead: 'Страна',
            series: [
                { name: 'Бег (WOC, EOC)', data: [5, 5, 7, 5, 5, 3, 0, 1, 0, 1, 4, 4, 0, 2, 3, 1, 4, 2, 2, 2, 0, 0, 0, 1] },
                { name: 'Лыжи (SKI-WOC, SKI-EOC)', data: [6, 5, 2, 3, 0, 3, 7, 5, 0, 0, 0, 0, 4, 1, 1, 0, 0, 2, 1, 0, 0, 1, 1, 0] },
                { name: 'Велосипед (WMTBOC, EMTBOC)', data: [2, 2, 0, 0, 3, 2, 1, 1, 7, 6, 2, 2, 1, 2, 1, 4, 0, 0, 0, 0, 1, 0, 0, 0] }
            ],
            yTitle: 'чемпионатов'
        },
        {
            id: 'europeMedalsChart',
            type: 'bar',
            stacked: true,
            horizontal: true,
            labels: ['Швейцария', 'Швеция', 'Норвегия', 'Финляндия', 'Россия', 'Франция', 'Дания',
                'Великобритания', 'Чехия', 'Украина', 'Другие'],
            labelHead: 'Страна',
            series: [
                { name: 'Золото', color: 'gold', data: [41, 35, 19, 11, 8, 5, 1, 0, 0, 0, 0] },
                { name: 'Серебро', color: 'silver', data: [33, 27, 20, 8, 7, 3, 4, 1, 4, 4, 7] },
                { name: 'Бронза', color: 'bronze', data: [17, 31, 17, 21, 13, 5, 6, 5, 1, 1, 4] }
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
            cfg.series.forEach(function (s) { var v = s.data[i]; cells.push(v === null ? '—' : v); sum += v || 0; });
            if (cfg.series.length > 1) cells.push(cfg.series.every(function (s) { return s.data[i] === null; }) ? '—' : sum);
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
                    backgroundColor: s.color ? (dark ? MEDAL.dark : MEDAL.light)[s.color] : colors[i],
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
                ticks: { autoSkip: !horizontal, maxRotation: 0, font: horizontal ? { size: 11 } : undefined }
            };
            /* на узком экране длинные подписи горизонтальной диаграммы («Александр Василевский»)
               обрезаются у левого края: там имя сокращается до инициала */
            if (horizontal && cfg.shortenNames) {
                categoryAxis.ticks.callback = function (value) {
                    var label = this.getLabelForValue(value);
                    return this.chart.width < 420 ? label.replace(/^(\S)\S*\s+/, '$1.\u00a0') : label;
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
                                    items.forEach(function (it) { t += it.parsed[horizontal ? 'x' : 'y'] || 0; });
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
