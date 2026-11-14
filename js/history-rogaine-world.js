/* =========================================================================
   O-Maps · history-rogaine-world.js — диаграммы статьи history/rogaine-world-history.html
   («История рогейна в мире»).

   Данные — по состоянию на 14 ноября 2026 года, из календаря O-Maps: все 41 запись со стартом
   WRC или ERC лежат в calendar-irf.js (в том числе SPB_20130726_1 и MAJOR_20260627_1
   с «чужими» префиксами id), поле info:
     - rwTeamsChart — «Команд — N» в info каждого чемпионата 1992–2026 (без отменённого
       ERC 2022 IRF_20220528_1 и ещё не проведённого WRC 2027 IRF_20270916_1); исключение —
       ERC 2015 (IRF_20150627_1): в info 238 команд вместе с 6- и 12-часовыми стартами, взято
       195 команд основной 24-часовой дистанции по отчёту IRF (rogaining.org/latest-news/310);
     - rwHostsChart — страна по полю place (часть перед скобкой, после последней запятой);
       только проведённые чемпионаты (19 WRC 1992–2025, 20 ERC 2003–2026); ERC 2026 проходил
       в Чехии и Польше, засчитан Чехии (place: Orlické Záhoří);
     - rwWinnersChart — страны «абсолютных победителей» (лучшая команда общего зачёта, во всех
       случаях — мужская открытая категория) по info; команды из спортсменов двух стран — отдельно:
       WRC 1998 (Австралия, Финляндия), WRC 2000 и 2002 (Австралия, Новая Зеландия),
       WRC 2022 (Испания, Латвия), ERC 2013 (Финляндия, Испания);
     - rwMedalsChart — «Медали России — …» в info: каждая команда-призёр в любой категории
       (открытые, юниорские/молодёжные, ветеранские) — одна медаль; командам с иностранцами
       (WRC 2004 WSV, WRC 2019 WUV) медаль засчитана, как в info. Исключение — ERC 2014
       (IRF_20140607_1): в info нет трёх медалей (MO 3 — Калинин/Шведов, MUV 2 — Базанов/
       Лисененков, MUV 3 — Кравченко/Никитин), он посчитан по таблице Федерации рогейна России
       (rogaining.ru/news/rogaine-news/results-events/erc2014-results): 3/5/3. Итого 212 медалей,
       66 из них на WRC. С 2022 года россияне
       не допускались (2022–2024) или выступали как нейтральные (WRC 2025, ERC 2026).

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

    var MEDALS = {
        light: ['#d9a300', '#97a1ab', '#b8733e'],
        dark:  ['#c99700', '#7d8894', '#a0612f']
    };

    var CHARTS = [
        {
            id: 'rwTeamsChart',
            type: 'bar',
            labels: ['1992', '1996', '1998', '2000', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010',
                '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023',
                '2024', '2025', '2026'],
            labelHead: 'Год',
            noTotal: true,
            series: [
                { name: 'Чемпионат мира (WRC)', data: [194, 271, 134, 193, 182, null, 176, null, 308, null, 339, null, 251, null, 333, 314, 180, 374, 304, 426, null, 386, null, null, 257, 134, null, 351, null] },
                { name: 'Чемпионат Европы (ERC)', data: [null, null, null, null, null, 40, null, 89, 104, 162, 143, 240, 123, 280, 171, 169, 289, 195, 198, 139, 129, null, 245, 224, null, 221, 193, null, 204] }
            ],
            yTitle: 'команд'
        },
        {
            id: 'rwHostsChart',
            type: 'bar',
            stacked: true,
            horizontal: true,
            labels: ['Чехия', 'Эстония', 'Австралия', 'Латвия', 'Испания', 'Россия', 'Финляндия', 'США', 'Украина',
                'Новая Зеландия', 'Канада', 'Литва', 'Италия'],
            labelHead: 'Страна',
            noShorten: true,
            series: [
                { name: 'Чемпионаты мира', data: [3, 1, 4, 1, 2, 1, 1, 3, 0, 2, 1, 0, 0] },
                { name: 'Чемпионаты Европы', data: [2, 4, 0, 3, 2, 2, 2, 0, 3, 0, 0, 1, 1] }
            ],
            yTitle: 'чемпионатов'
        },
        {
            id: 'rwWinnersChart',
            type: 'bar',
            stacked: true,
            horizontal: true,
            labels: ['Эстония', 'Россия', 'Новая Зеландия', 'Финляндия', 'Чехия', 'Австралия', 'США', 'Латвия',
                'Испания', 'Команды двух стран'],
            labelHead: 'Страна победителей',
            noShorten: true,
            series: [
                { name: 'Чемпионаты мира', data: [5, 2, 3, 1, 0, 2, 1, 1, 0, 4] },
                { name: 'Чемпионаты Европы', data: [11, 2, 0, 2, 3, 0, 0, 0, 1, 1] }
            ],
            yTitle: 'побед в абсолютном зачёте'
        },
        {
            id: 'rwMedalsChart',
            type: 'bar',
            stacked: true,
            colors: MEDALS,
            labels: ['ЧЕ-2003', 'ЧМ-2004', 'ЧЕ-2005', 'ЧЕ-2006', 'ЧМ-2006', 'ЧЕ-2007', 'ЧЕ-2008', 'ЧМ-2008', 'ЧЕ-2009',
                'ЧЕ-2010', 'ЧМ-2010', 'ЧЕ-2011', 'ЧЕ-2012', 'ЧМ-2012', 'ЧЕ-2013', 'ЧМ-2013', 'ЧЕ-2014', 'ЧМ-2014',
                'ЧЕ-2015', 'ЧМ-2015', 'ЧМ-2016', 'ЧЕ-2016', 'ЧЕ-2017', 'ЧМ-2017', 'ЧЕ-2018', 'ЧМ-2019', 'ЧЕ-2020',
                'ЧЕ-2021', 'ЧМ-2022', 'ЧМ-2023', 'ЧЕ-2023', 'ЧЕ-2024', 'ЧМ-2025', 'ЧЕ-2026'],
            labelHead: 'Чемпионат',
            series: [
                { name: 'Золото', data: [8, 0, 0, 3, 0, 4, 7, 3, 2, 3, 1, 5, 3, 3, 2, 6, 3, 2, 3, 2, 2, 2, 2, 3, 2, 2, 1, 0, 0, 0, 0, 0, 2, 0] },
                { name: 'Серебро', data: [10, 1, 0, 5, 0, 0, 5, 2, 2, 2, 1, 2, 1, 1, 5, 4, 5, 0, 4, 3, 0, 5, 3, 3, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0] },
                { name: 'Бронза', data: [7, 0, 1, 1, 0, 2, 7, 1, 4, 6, 0, 1, 6, 4, 2, 6, 3, 2, 2, 3, 2, 2, 2, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0] }
            ],
            yTitle: 'медалей (команд-призёров)'
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
        if (cfg.series.length > 1 && !cfg.noTotal) heads.push('Всего');
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
            if (cfg.series.length > 1 && !cfg.noTotal) cells.push(sum);
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

            var pal = cfg.colors ? (dark ? cfg.colors.dark : cfg.colors.light) : colors;
            var datasets = cfg.series.map(function (s, i) {
                return {
                    label: s.name,
                    data: s.data,
                    backgroundColor: pal[i],
                    borderColor: surface,
                    borderWidth: multi ? { top: 1, bottom: 0, left: 0, right: 0 } : 0,
                    borderRadius: multi ? 0 : 4,
                    borderSkipped: false,
                    maxBarThickness: horizontal ? 18 : 28,
                    skipNull: true
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
            /* на узком экране длинные подписи горизонтальной диаграммы сокращаются до инициала;
               у диаграмм со странами (noShorten) подписи короткие и не сокращаются */
            if (horizontal && !cfg.noShorten) {
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
                            callbacks: multi && !cfg.noTotal ? {
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
