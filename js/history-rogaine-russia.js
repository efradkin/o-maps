/* =========================================================================
   O-Maps · history-rogaine-russia.js — диаграммы статьи history/rogaine-russia-history.html
   («Рогейн в России»).

   Данные пересчитаны по архиву сайта от 14 ноября 2026 года; загрузчик — все js/calendar-*.js,
   в том числе calendar-common.js, и js/maps-*.js):
     - rrEventsChart — события календаря O-Maps с type, содержащим ROGAINE, 1999–2026
       (включая объявленные на ноябрь — декабрь 2026 года), без отменённых (cancelled),
       без чемпионатов мира и Европы за рубежом (из calendar-irf.js оставлены только
       IRF_20030816_1, IRF_20080712_1 и SPB_20130726_1; IRF_20220528_1 отменён) и без рогейнов
       за границей из петербургского календаря: SPB_20150106_1, SPB_20150321_1, SPB_20150329_2,
       SPB_20150502_2, SPB_20150502_3, SPB_20220924_6. Записей с пометкой «проведение не подтверждено»
       среди рогейнов нет. Вид — по type: SKI → лыжи, VELO → велосипед, WATER → байдарки,
       остальное → бегом и пешком. Всего 613 событий; по файлам: петербургские calendar-2005.js …
       calendar-2026.js — 540 (из них 15 с region PSKOV или NOVGOROD), московские локальные
       календарные файлы — 44 (включая исторические записи 2019–2024 годов), calendar-common.js — 26 (чемпионаты России вне Петербурга, первый
       пермский рогейн RRF_19990828_1, ЧР-2026 MAJOR_20260822_1, псковский COMMON_20260704_1),
       calendar-irf.js — 3 (ЧЕ-2003, ЧЕ-2008, ЧМ-2013).
     - rrRrcChart — чемпионаты России по рогейну бегом (start: 'RRC', type: 'ROGAINE'), число команд
       и участников — из поля info (совпадает с таблицей rogaining.ru/events/championships/rrc).
     - rrMedalsChart — медали российских команд на чемпионатах Европы (ЧЕ) и мира (ЧМ), все классы
       (открытый, юниоры, ветераны и т. д.), по полю info записей calendar-irf.js со стартом WRC/ERC
       («Медали России — класс: состав - место»), как в js/history-rogaine-world.js: медали команд
       с иностранцами засчитаны (ЧМ-2004 WSV Н. Попова, ЧМ-2019 WUV). Исключение — ЧЕ-2014
       (IRF_20140607_1): в info нет трёх медалей, взяты числа таблицы ФРР
       (rogaining.ru/events/championships/medals) 3/5/3. Итого 212 (76/67/69), из них 66 на ЧМ.
       С таблицей ФРР (ЧМ 2008–2019, ЧЕ 2003–2018) расходится только ЧМ-2004.
     - rrMapsChart — карты архива O-Maps с type, содержащим ROGAINE: 406 карт, из них 2 финские
       (region FINLAND: lahti_rogaine_2011, siikajarvi_trail_2012) на диаграмму не входят, 3 без года;
       по году карты (date или year). Регион: сначала поле region; Петербург и ЛО (214) — region SPB или файл
       maps-rogaine*.js / maps-starts-*.js / maps-fun.js / maps-forest*.js без иного region, кроме карт
       Карелии и Новгородской обл.: sortavala_redfox_2017, sortavala_redfox_2026, lahdenpohja_rfar_2014,
       lahdenpohja_rfar_2020, pitkaranta_rfar_2016, pitkjaranta_rfar_2022, pitkaranta_rfar_2024,
       soujarvi_rfar_2023, onega_kazhma_rfar_2015, hiitola_ba_2021, chudovo_rogaine_2022;
       Москва и Подмосковье (77) — region MSK или maps-moscow.js без поля region, кроме pokrov_rogaine_2014,
       fineevo_rogaine_2026 (Владимирская обл.), trubino_rogaine_2019, lubitsy_rogaine_2026 (Калужская обл.);
       остальное — другие регионы (113). Три российские карты без указанного года не попали на диаграмму.

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
            id: 'rrEventsChart',
            type: 'bar',
            stacked: true,
            labels: range(1999, 2026),
            labelHead: 'Год',
            series: [
                { name: 'Бегом и пешком', data: [1, 0, 1, 0, 1, 0, 3, 4, 6, 9, 15, 12, 15, 18, 18, 17, 21, 17, 26, 28, 27, 37, 40, 39, 44, 48, 50, 37] },
                { name: 'На лыжах', data: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 3] },
                { name: 'На велосипеде', data: [0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 4, 3, 3, 3, 2, 4, 2, 3, 2, 3, 2, 3, 3, 3] },
                { name: 'На байдарках', data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 2, 0, 2, 3] }
            ],
            yTitle: 'рогейнов в календаре'
        },
        {
            id: 'rrRrcChart',
            type: 'bar',
            labels: ['2001', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015',
                '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'],
            labelHead: 'Год',
            series: [
                { name: 'Команд', data: [37, 41, 33, 76, 109, 112, 106, 64, 83, 78, 74, 51, 94, 122, 50, 77, 73, 96, 59, 74, 79, 82, 84] },
                { name: 'Участников', data: [74, 89, 66, 162, 236, 230, 225, 134, 172, 165, 161, 109, 205, 267, 107, 164, 159, 204, 124, 155, 173, 177, 181] }
            ],
            noTotal: true,
            yTitle: 'команд и участников'
        },
        {
            id: 'rrMedalsChart',
            type: 'bar',
            stacked: true,
            labels: ['ЧЕ-2003', 'ЧМ-2004', 'ЧЕ-2005', 'ЧЕ-2006', 'ЧЕ-2007', 'ЧЕ-2008', 'ЧМ-2008', 'ЧЕ-2009', 'ЧЕ-2010', 'ЧМ-2010',
                'ЧЕ-2011', 'ЧЕ-2012', 'ЧМ-2012', 'ЧЕ-2013', 'ЧМ-2013', 'ЧЕ-2014', 'ЧМ-2014', 'ЧЕ-2015', 'ЧМ-2015',
                'ЧМ-2016', 'ЧЕ-2016', 'ЧЕ-2017', 'ЧМ-2017', 'ЧЕ-2018', 'ЧМ-2019', 'ЧЕ-2020', 'ЧМ-2025'],
            labelHead: 'Чемпионат',
            series: [
                { name: 'Золото', data: [8, 0, 0, 3, 4, 7, 3, 2, 3, 1, 5, 3, 3, 2, 6, 3, 2, 3, 2, 2, 2, 2, 3, 2, 2, 1, 2] },
                { name: 'Серебро', data: [10, 1, 0, 5, 0, 5, 2, 2, 2, 1, 2, 1, 1, 5, 4, 5, 0, 4, 3, 0, 5, 3, 3, 0, 2, 0, 1] },
                { name: 'Бронза', data: [7, 0, 1, 1, 2, 7, 1, 4, 6, 0, 1, 6, 4, 2, 6, 3, 2, 2, 3, 2, 2, 2, 1, 1, 3, 0, 0] }
            ],
            colors: { light: ['#d4a514', '#9aa3ad', '#b8733a'], dark: ['#d9ab1f', '#a3acb6', '#c27c41'] },
            yTitle: 'медалей'
        },
        {
            id: 'rrMapsChart',
            type: 'bar',
            stacked: true,
            labels: range(2000, 2026),
            labelHead: 'Год',
            series: [
                { name: 'Петербург и Ленинградская область', data: [1, 0, 0, 2, 1, 3, 6, 6, 5, 6, 9, 9, 8, 13, 6, 6, 11, 5, 7, 8, 6, 8, 11, 15, 24, 19, 16] },
                { name: 'Москва и Подмосковье', data: [0, 0, 0, 0, 0, 0, 1, 2, 2, 0, 1, 2, 4, 1, 3, 0, 1, 0, 1, 0, 2, 7, 8, 9, 17, 8, 8] },
                { name: 'Другие регионы', data: [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 2, 3, 0, 1, 2, 3, 3, 4, 4, 5, 7, 7, 10, 17, 16, 15, 12] }
            ],
            yTitle: 'карт в архиве'
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
            cfg.series.forEach(function (s) { cells.push(s.data[i]); sum += s.data[i]; });
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

            var datasets = cfg.series.map(function (s, i) {
                return {
                    label: s.name,
                    data: s.data,
                    backgroundColor: (cfg.colors ? (dark ? cfg.colors.dark : cfg.colors.light) : colors)[i],
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
                            callbacks: multi && cfg.stacked ? {
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
