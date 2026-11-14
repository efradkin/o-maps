/* =========================================================================
   O-Maps · history-moscow.js — диаграммы статьи history/moscow-history.html
   («Ориентирование в Москве»: Москва и Московская область).

   Данные пересчитаны по архиву сайта от 14 ноября 2026 года:
     - карты — все записи js/maps-moscow.js (раздел «Москва», moscow.html; 713 карт),
       без 13 карт с excluded: true (как в статистике charts-moscow.html) и без 24 карт
       без года; всего 676 карт с известным годом для диаграммы; год карты — поле year (значение 1 = неизвестно) или date; тип —
       по полю type: есть ROGAINE → рогейн, иначе CITY или SPRINT → город и спринт,
       иначе PARK → парк, пустой type → лес, остальное (WINTER, VELO, INDOOR, FUN) → прочие;
     - авторы — поле author тех же карт (соавторство засчитывается каждому, без excluded);
       код DBRTSV_V («Добрецов Виктор») в данных общий для московских карт и карт
       петербургского картографа — здесь посчитаны только карты maps-moscow.js;
     - события (§ 12 правил) — все записи calendar-msk-2025.js, calendar-msk-2026.js и
       calendar-msk-other.js (1 346 записей за 2013–2027 годы) и записи общих календарей с
       region: 'MSK' (97: calendar-common.js — 49, calendar-fsor.js — 42,
       calendar-early.js — 5, calendar-iof.js — 1), без cancelled: true (таких нет).
       Всего 1 443 записи; на диаграмму попадают 566 событий 2025–2026 годов
       (259 в 2025-м, 307 в 2026-м; вне её — 871 запись 1958–2024 годов и 6 записей 2027 года); вид — по полю type: ROGAINE → рогейн, SKI → лыжи,
       VELO → велосипед, ORIENT или пусто → бег.

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
            id: 'mskMapsChart',
            type: 'bar',
            stacked: true,
            labels: ['1960-е', '1970-е', '1980-е', '1990-е', '2000-е', '2010-е', '2020–2026'],
            labelHead: 'Десятилетие',
            series: [
                { name: 'Лес', data: [6, 15, 49, 36, 66, 49, 61] },
                { name: 'Парк', data: [1, 7, 10, 16, 23, 38, 83] },
                { name: 'Город и спринт', data: [0, 1, 0, 9, 20, 27, 66] },
                { name: 'Рогейн', data: [0, 0, 0, 0, 5, 15, 61] },
                { name: 'Зима, вело и прочие', data: [0, 0, 0, 2, 2, 5, 3] }
            ],
            yTitle: 'карт в архиве'
        },
        {
            id: 'mskAuthorsChart',
            type: 'bar',
            horizontal: true,
            labels: ['Александр Минаков', 'Владимир Тутынин', 'Алексей Зуев', 'Александр Романов',
                'Владимир Люк', 'Геннадий Яшпатров', 'Виктор Добрецов', 'Сергей Симакин', 'Николай Сытов',
                'Александр Калюжный', 'Юрий Митин', 'Владимир Жердев', 'Александр Разинков', 'Егор Костылев'],
            labelHead: 'Автор',
            series: [
                { name: 'Карт в архиве O-Maps', data: [50, 41, 37, 30, 28, 24, 23, 23, 23, 22, 22, 22, 20, 18] }
            ],
            yTitle: 'карт'
        },
        {
            id: 'mskCalendarChart',
            type: 'bar',
            stacked: true,
            labels: ['янв 2025', 'фев 2025', 'мар 2025', 'апр 2025', 'май 2025', 'июн 2025', 'июл 2025', 'авг 2025', 'сен 2025', 'окт 2025', 'ноя 2025', 'дек 2025', 'янв 2026', 'фев 2026', 'мар 2026', 'апр 2026', 'май 2026', 'июн 2026', 'июл 2026', 'авг 2026', 'сен 2026', 'окт 2026', 'ноя 2026', 'дек 2026'],
            labelHead: 'Месяц',
            series: [
                { name: 'Бег', data: [7, 11, 20, 26, 21, 19, 16, 20, 23, 28, 26, 10, 6, 8, 15, 33, 30, 27, 23, 25, 32, 36, 20, 7] },
                { name: 'Рогейн', data: [2, 6, 0, 2, 1, 2, 1, 0, 2, 1, 1, 2, 2, 2, 2, 1, 0, 1, 1, 1, 0, 0, 3, 1] },
                { name: 'Лыжи', data: [2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 5, 7, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3] },
                { name: 'Велосипед', data: [0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 2, 5, 2, 0, 0] }
            ],
            yTitle: 'событий в календаре'
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
