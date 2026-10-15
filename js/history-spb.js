/* =========================================================================
   O-Maps · history-spb.js — диаграммы статьи history/spb.html
   («Ориентирование в Ленинграде, Санкт-Петербурге и Ленинградской области»).

   Данные посчитаны по состоянию на октябрь 2026 года:
     - события — calendar-2004.js … calendar-2026.js, а также записи
       calendar-fsor.js, calendar-iof.js и calendar-irf.js с region: 'SPB'
       вместе с их дочерними записями (parent);
       каждая запись — отдельное событие (type: ORIENT/пусто → бег,
       есть ROGAINE → рогейн, SKI → лыжи, VELO → вело, остальное → прочее);
     - карты — тот же набор файлов, что на charts-spb.html (основной раздел:
       лес, парки, город, спец., рогейн, школы; без maps-starts-* с картами
       отдельных стартов), без карт с excluded: true; по году карты (year или date),
       сгруппированы по десятилетиям;
     - авторы — поле author тех же карт (соавторство засчитывается каждому),
       совпадает с таблицей авторов на charts-spb.html;
     - медали — «Медальный лист» Федерации спортивного ориентирования СПб
       (spbof.ru → История → Международные медали петербургских ориентировщиков).

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
            id: 'spbEventsChart',
            type: 'bar',
            stacked: true,
            labels: range(2004, 2026),
            labelHead: 'Год',
            series: [
                { name: 'Ориентирование бегом', data: [25, 57, 51, 71, 73, 84, 76, 92, 95, 117, 119, 129, 140, 147, 137, 138, 129, 123, 123, 113, 109, 176, 165] },
                { name: 'Рогейн', data: [0, 7, 5, 6, 10, 17, 16, 19, 23, 24, 18, 30, 23, 28, 32, 27, 37, 43, 43, 44, 49, 37, 33] },
                { name: 'Лыжи', data: [1, 9, 13, 17, 15, 17, 20, 14, 16, 16, 8, 12, 10, 15, 15, 17, 9, 12, 12, 23, 12, 10, 15] },
                { name: 'Велосипед', data: [7, 11, 10, 16, 9, 7, 4, 5, 5, 5, 6, 5, 5, 7, 12, 11, 4, 11, 8, 5, 4, 5, 5] },
                { name: 'Прочее', data: [2, 3, 2, 2, 2, 3, 6, 3, 7, 4, 2, 4, 4, 3, 3, 3, 3, 2, 3, 4, 3, 6, 7] }
            ],
            yTitle: 'событий в календаре'
        },
        {
            id: 'spbMapsChart',
            type: 'bar',
            stacked: true,
            labels: ['1960-е', '1970-е', '1980-е', '1990-е', '2000-е', '2010-е', '2020–2026'],
            labelHead: 'Десятилетие',
            series: [
                { name: 'Лес', data: [17, 53, 113, 105, 91, 130, 141] },
                { name: 'Город и парк', data: [0, 1, 17, 24, 39, 141, 224] },
                { name: 'Рогейн', data: [0, 0, 0, 0, 9, 55, 76] },
                { name: 'Зима, вело и прочие', data: [0, 0, 6, 2, 11, 12, 81] }
            ],
            yTitle: 'карт в архиве'
        },
        {
            id: 'spbAuthorsChart',
            type: 'bar',
            horizontal: true,
            labels: ['Александр Ширинян', 'Виктор Рылов', 'Виктор Добрецов', 'Константин Токмаков',
                'Александр Ковязин', 'Сергей Дробышев', 'Сергей Воробей', 'Александр Василевский',
                'Виталий Чегаровский', 'Юрий Чегаровский', 'Владимир Баймаков', 'Сергей Несынов'],
            labelHead: 'Автор',
            series: [
                { name: 'Карт в архиве O-Maps', data: [146, 115, 102, 87, 78, 59, 58, 54, 53, 52, 50, 50] }
            ],
            yTitle: 'карт'
        },
        {
            id: 'spbMedalsChart',
            type: 'bar',
            stacked: true,
            labels: range(1994, 2022),
            labelHead: 'Год',
            series: [
                { name: 'Бег', data: [1, 2, 0, 0, 0, 1, 0, 0, 2, 0, 1, 2, 2, 0, 1, 2, 0, 1, 5, 3, 0, 0, 1, 2, 1, 1, 0, 0, 0] },
                { name: 'Лыжи', data: [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3] },
                { name: 'Велосипед', data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 4, 2, 0, 13, 0] }
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
