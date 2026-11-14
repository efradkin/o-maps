/* =========================================================================
   O-Maps · history-world.js — диаграммы статьи history/world-history.html
   («История спортивного ориентирования в мире»).

   Данные — по состоянию на 14 ноября 2026 года:
     - worldMedalsChart — медальный зачёт чемпионатов мира по ориентированию
       бегом (WOC) 1966–2026, пересчитанный построчно по спискам призёров
       английской Википедии (wikitext, action=raw, октябрь 2026):
       List of World Orienteering Championships medalists (men), (women),
       (mixed events); каждая строка таблицы (вид программы) — одна медаль
       каждого цвета на страну, при дележе мест — по медали каждому; эстафета —
       одна медаль команды. Флаг CZE у медалей 1987–1991 годов отнесён
       к Чехословакии (TCH), DNK и DEN объединены (Дания), два серебра 2021 года
       у RUS (Н. Гемперле, нейтральный статус) вынесены в «нейтральные».
       Итог: 265 видов программы; 266 золотых, 265 серебряных, 268 бронзовых.
       Таблица «All-time medal table» статьи World Orienteering Championships
       неполна (263/261/265): по спискам у Швеции 75/66/64 (в таблице 74/64/63),
       у Швейцарии 55/45/47 (54/45/46), у Чехии 4/4/6 (3/2/5); остальные
       строки совпадают. Показаны первые 15 строк по числу золотых; не показаны:
       нейтральные спортсмены 2021 г. 0/2/0, Новая Зеландия 0/1/1, СССР 0/0/2,
       Белоруссия, Бельгия, Германия, Италия, Нидерланды по 0/0/1.
     - worldHostsChart и worldCountriesChart — чемпионаты мира IOF из
       js/calendar-iof.js: записи верхнего уровня (без parent) со start WOC,
       SKI_WOC, WMTBOC; отменённых записей (2020) в календаре нет, дубли
       (серия + год) проверены — их нет.
       Итого 92: WOC 42 (1966–2026), SKI_WOC 27 (1975–2026), WMTBOC 23 (2002–2026).
       Страна — последняя часть поля place до скобки (ЧССР и Чехия, ГДР и
       Германия — раздельно; всего 28 стран). Регион: «Северные страны» —
       Финляндия, Швеция, Норвегия, Дания; «Вне Европы» — Австралия, США, Япония,
       Израиль, Казахстан; остальное — «Остальная Европа». Десятилетие — по году
       даты начала, 2020–2026 — одна группа. В worldCountriesChart — 19 стран,
       принимавших не меньше двух чемпионатов (по одному: ГДР, Германия, Израиль,
       Казахстан, Латвия, Литва, Словакия, Украина, США).
       Не учтена MAJOR_20260825_1 (теперь в calendar-iof.js, без start) —
       дубль WMTBOC 2026 = IOF_20260826_1.

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
    /* медали: золото, серебро, бронза (свои шаги для светлой и тёмной темы) */
    var MEDALS = {
        light: ['#d4a017', '#9aa3ad', '#b0703a'],
        dark:  ['#e0b73a', '#aeb7c1', '#c4844c']
    };

    var CHARTS = [
        {
            id: 'worldMedalsChart',
            type: 'bar',
            stacked: true,
            horizontal: true,
            colors: MEDALS,
            labels: ['Швеция', 'Норвегия', 'Швейцария', 'Финляндия', 'Франция', 'Дания', 'Россия', 'Великобритания',
                'Чехия', 'Венгрия', 'Чехословакия', 'Украина', 'Австрия', 'Латвия', 'Австралия'],
            labelHead: 'Страна',
            series: [
                { name: 'Золото', data: [75, 57, 55, 24, 15, 12, 11, 4, 4, 3, 2, 1, 1, 1, 1] },
                { name: 'Серебро', data: [66, 55, 45, 46, 8, 10, 12, 6, 4, 1, 5, 3, 1, 0, 0] },
                { name: 'Бронза', data: [64, 52, 47, 35, 11, 7, 15, 5, 6, 2, 8, 5, 1, 2, 0] }
            ],
            yTitle: 'медалей'
        },
        {
            id: 'worldHostsChart',
            type: 'bar',
            stacked: true,
            labels: ['1960-е', '1970-е', '1980-е', '1990-е', '2000-е', '2010-е', '2020–2026'],
            labelHead: 'Десятилетие',
            series: [
                { name: 'Северные страны', data: [2, 4, 3, 3, 6, 8, 6] },
                { name: 'Остальная Европа', data: [0, 4, 6, 6, 11, 16, 9] },
                { name: 'Вне Европы', data: [0, 0, 1, 1, 4, 1, 1] }
            ],
            yTitle: 'чемпионатов мира'
        },
        {
            id: 'worldCountriesChart',
            type: 'bar',
            stacked: true,
            horizontal: true,
            labels: ['Финляндия', 'Швеция', 'Норвегия', 'Чехия', 'Италия', 'Австрия', 'Болгария', 'Дания', 'Франция',
                'Швейцария', 'Великобритания', 'Эстония', 'Венгрия', 'Япония', 'Польша', 'Россия', 'Австралия',
                'Чехословакия', 'Португалия'],
            labelHead: 'Страна',
            series: [
                { name: 'Бег (WOC)', data: [5, 4, 4, 2, 2, 0, 0, 3, 2, 4, 4, 1, 2, 1, 0, 0, 1, 2, 0] },
                { name: 'Лыжи (SKI-WOC)', data: [4, 5, 2, 0, 2, 3, 3, 0, 1, 0, 0, 1, 0, 2, 0, 3, 0, 0, 0] },
                { name: 'Велосипед (WMTBOC)', data: [2, 2, 0, 3, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 3, 0, 1, 0, 2] }
            ],
            yTitle: 'чемпионатов мира'
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
        var palette = dark ? PALETTE.dark : PALETTE.light;
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
            var colors = cfg.colors ? (dark ? cfg.colors.dark : cfg.colors.light) : palette;

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
            /* на узком экране длинные названия стран горизонтальной диаграммы
               («Великобритания», «Чехословакия») сокращаются, чтобы не обрезаться у левого края */
            if (horizontal) {
                categoryAxis.ticks.callback = function (value) {
                    var label = this.getLabelForValue(value);
                    var SHORT = { 'Великобритания': 'Великобрит.', 'Чехословакия': 'ЧССР', 'Швейцария': 'Швейцар.', 'Португалия': 'Португал.' };
                    return this.chart.width < 420 && SHORT[label] ? SHORT[label] : label;
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
