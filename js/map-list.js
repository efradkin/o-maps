/*
 * map-list.js — окно «Карты на экране».
 *
 * Показывает список карт-подложек (L.ImageOverlay.Rotated), попадающих
 * в текущие границы экрана, и перестраивается при любом движении/зуме.
 *
 * Слои берём напрямую с карты (map.eachLayer) и оставляем только те, у кого
 * есть обратная ссылка layer.map — её ставит buildMap() в main.js. Так в
 * список не попадают треки, маркеры и служебные слои.
 *
 * Попадание в экран считаем точно — пересечением двух выпуклых
 * четырёхугольников (SAT), а не проверкой «хоть один угол внутри рамки»,
 * как это делает checkLayerInFrame() в utils.js для счётчика карт. Разница
 * видна на большом зуме: карта, которая накрывает весь экран целиком, ни
 * одним углом в рамку не попадает — счётчик её не считает, а в списке она
 * обязана быть, потому что это ровно та карта, на которую человек смотрит.
 *
 * Панель создаётся лениво, при первом открытии: на момент загрузки скрипта
 * карты ещё нет. Обработчики карты вешаются только на открытой панели и
 * снимаются при закрытии — закрытая панель не стоит ничего.
 *
 * Вызывается из map-rail.js: пункт «Карты на экране» в разделе Инструменты
 * дёргает toggleMapsInView().
 */

(function () {
    'use strict';

    var SORT_KEY = 'om-maps-in-view-sort';
    var DIR_KEY = 'om-maps-in-view-dir';
    var REBUILD_DELAY = 120;   // мс, склейка серии moveend/layeradd
    var FLASH_MS = 1100;       // подсветка карты на подложке после клика
    var MAX_ROWS = 300;        // предохранитель: на мелком зуме карт сотни
    var FRONT_Z_BASE = 800;    // отсчёт z-index для «поднять карту наверх»

    // Направление по умолчанию для каждого ключа — то, которое человек
    // ожидает увидеть первым: свежие карты, алфавит с начала, крупные
    // сверху. Кнопка справа от списка переворачивает порядок.
    var DEFAULT_DIR = { year: 'desc', name: 'asc', area: 'desc' };
    var DIR_TITLE = {
        year: { desc: 'Сначала новые', asc: 'Сначала старые' },
        name: { asc: 'От А до Я', desc: 'От Я до А' },
        area: { desc: 'Сначала большие', asc: 'Сначала маленькие' }
    };

    var panel = null;          // корневой узел панели
    var listEl = null;
    var countEl = null;
    var sortEl = null;
    var dirEl = null;
    var noteEl = null;
    var open = false;
    var rebuildTimer = null;
    var hoverLayer = null;     // слой, подсвеченный наведением
    var flashTimer = null;
    var flashLayer = null;
    var currentLayer = null;   // последняя выбранная строка — переживает перестроение
    var scrollToCurrent = false;
    var sortMode = 'year';
    var sortDir = DEFAULT_DIR.year;

    var hoverCapable = false;
    try {
        hoverCapable = window.matchMedia &&
            window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    } catch (e) { hoverCapable = false; }

    try {
        var saved = localStorage.getItem(SORT_KEY);
        if (saved && DEFAULT_DIR[saved]) sortMode = saved;
        var savedDir = localStorage.getItem(DIR_KEY);
        sortDir = (savedDir === 'asc' || savedDir === 'desc')
            ? savedDir : DEFAULT_DIR[sortMode];
    } catch (e) { /* приватный режим — просто дефолт */ }

    // ---- геометрия слоя ------------------------------------------------

    // Четыре угла картинки. У повёрнутой известны три, четвёртый достраиваем:
    // bottomRight = topRight + bottomLeft - topLeft.
    function layerCorners(layer) {
        if (layer.getTopLeft && layer.getTopRight && layer.getBottomLeft) {
            var tl = layer.getTopLeft();
            var tr = layer.getTopRight();
            var bl = layer.getBottomLeft();
            if (tl && tr && bl) {
                return [tl, tr,
                        L.latLng(tr.lat + bl.lat - tl.lat, tr.lng + bl.lng - tl.lng),
                        bl];
            }
        }
        if (layer.getBounds) {
            var b = layer.getBounds();
            if (b && b.isValid && b.isValid()) {
                return [b.getNorthWest(), b.getNorthEast(),
                        b.getSouthEast(), b.getSouthWest()];
            }
        }
        return null;
    }

    // Центр повёрнутой картинки — середина диагонали: диагонали
    // параллелограмма делят друг друга пополам, поэтому середина
    // topRight–bottomLeft и есть точный центр.
    function layerCenter(layer) {
        if (layer.getTopRight && layer.getBottomLeft) {
            var tr = layer.getTopRight();
            var bl = layer.getBottomLeft();
            if (tr && bl) {
                return L.latLng((tr.lat + bl.lat) / 2, (tr.lng + bl.lng) / 2);
            }
        }
        if (layer.getBounds) {
            var b = layer.getBounds();
            if (b && b.isValid && b.isValid()) return b.getCenter();
        }
        return null;
    }

    // Габарит для «вписать в экран» — рамка по всем четырём углам.
    function layerBounds(layer) {
        var c = layerCorners(layer);
        return c ? L.latLngBounds(c) : null;
    }

    // ---- пересечение с экраном (SAT) -----------------------------------
    // Оба четырёхугольника выпуклые, значит достаточно проверить проекции
    // на нормали их рёбер: нашлась ось, где проекции не перекрываются —
    // фигуры не пересекаются. Считаем в градусах как на плоскости: экран
    // маленький, искажением проекции можно пренебречь.

    function toXY(latLngs) {
        var pts = [];
        for (var i = 0; i < latLngs.length; i++) {
            pts.push({ x: latLngs[i].lng, y: latLngs[i].lat });
        }
        return pts;
    }

    function hasSeparatingAxis(p, q) {
        for (var i = 0; i < p.length; i++) {
            var j = (i + 1) % p.length;
            var ax = -(p[j].y - p[i].y);   // нормаль к ребру i→j
            var ay = p[j].x - p[i].x;
            var minP = Infinity, maxP = -Infinity, minQ = Infinity, maxQ = -Infinity, k, d;
            for (k = 0; k < p.length; k++) {
                d = p[k].x * ax + p[k].y * ay;
                if (d < minP) minP = d;
                if (d > maxP) maxP = d;
            }
            for (k = 0; k < q.length; k++) {
                d = q[k].x * ax + q[k].y * ay;
                if (d < minQ) minQ = d;
                if (d > maxQ) maxQ = d;
            }
            if (maxP < minQ || maxQ < minP) return true;
        }
        return false;
    }

    function overlaps(a, b) {
        return !hasSeparatingAxis(a, b) && !hasSeparatingAxis(b, a);
    }

    function isLayerInView(viewBounds, layer) {
        var corners = layerCorners(layer);
        if (!corners) return false;
        var view = [viewBounds.getNorthWest(), viewBounds.getNorthEast(),
                    viewBounds.getSouthEast(), viewBounds.getSouthWest()];
        return overlaps(toXY(corners), toXY(view));
    }

    // ---- данные строки -------------------------------------------------

    function mapLogo(m) {
        // logoList умеет падать на незнакомом ключе старта — одна кривая
        // запись не должна ронять весь список
        try {
            var list = logoList(m);
            if (list && list.length) return './logo/' + list[0];
        } catch (e) { /* молча — ниже подставим общий логотип */ }
        if (m.photo) return m.photo;
        return './logo/o-maps.webp';
    }

    function mapYear(m) {
        var y = year(m);
        if (!y) return null;
        return y > 1 ? y : 'ретро';
    }

    function mapMeta(m) {
        var parts = [];
        var y = mapYear(m);
        if (y) parts.push(m.correct ? y + ', корр. ' + m.correct : y);
        if (m.area) parts.push(m.area.toFixed(1) + ' км²');
        var types = getTypesList(m);
        if (types && types.length) parts.push(types);
        return parts.join(' · ');
    }

    // ---- сбор и сортировка ---------------------------------------------

    function collect() {
        if (typeof map === 'undefined' || !map) return [];
        var viewBounds = map.getBounds();
        var result = [];
        var seen = {};
        map.eachLayer(function (layer) {
            if (!(layer instanceof L.ImageOverlay)) return;
            if (!layer.map) return;                  // трек или служебный слой
            var id = L.Util.stamp(layer);
            if (seen[id]) return;
            if (!isLayerInView(viewBounds, layer)) return;
            seen[id] = true;
            result.push(layer);
        });
        return result;
    }

    function byName(a, b) {
        var an = (a.map.name || '');
        var bn = (b.map.name || '');
        return an.localeCompare(bn, 'ru');
    }

    // Базовое сравнение всегда по возрастанию ключа; направление задаётся
    // знаком снаружи. Так кнопка «наоборот» — это ровно смена знака, и не
    // приходится держать по два компаратора на каждый ключ.
    function compareAsc(a, b, mode) {
        if (mode === 'name') return byName(a, b);
        if (mode === 'area') {
            var aa = a.map.area || 0;
            var ba = b.map.area || 0;
            if (aa !== ba) return aa - ba;
            return byName(a, b);
        }
        // year: карты без года считаем нулём — при порядке «сначала новые»
        // они уходят в конец списка
        var ay = year(a.map) || 0;
        var by = year(b.map) || 0;
        if (ay !== by) return ay - by;
        return byName(a, b);
    }

    function sortLayers(layers) {
        var mode = sortMode;
        var sign = (sortDir === 'asc') ? 1 : -1;
        layers.sort(function (a, b) { return sign * compareAsc(a, b, mode); });
        return layers;
    }

    // ---- подсветка карты на подложке -----------------------------------

    function setHighlight(layer, on) {
        if (!layer || !layer.getElement) return;
        var el = layer.getElement();
        if (!el) return;
        el.classList.toggle('highlighted', !!on);
    }

    function clearHover() {
        if (hoverLayer) {
            if (hoverLayer !== flashLayer) setHighlight(hoverLayer, false);
            hoverLayer = null;
        }
    }

    function flash(layer) {
        if (flashTimer) {
            clearTimeout(flashTimer);
            setHighlight(flashLayer, false);
        }
        flashLayer = layer;
        setHighlight(layer, true);
        flashTimer = setTimeout(function () {
            setHighlight(flashLayer, false);
            flashLayer = null;
            flashTimer = null;
        }, FLASH_MS);
    }

    // ---- «мёртвая» зона под панелью ------------------------------------
    // Панель занимает часть экрана: на десктопе колонку слева, на телефоне
    // нижнюю шторку. Центрировать выбранную карту в геометрический центр
    // нельзя — она уедет под панель. Отступ считаем по getBoundingClientRect,
    // чтобы не дублировать в JS брейкпоинт из CSS.

    function panelInset() {
        var inset = { left: 0, bottom: 0 };
        if (!open || !panel) return inset;
        var pr = panel.getBoundingClientRect();
        var cr = map.getContainer().getBoundingClientRect();
        if (!pr.width || !pr.height) return inset;
        if (pr.width >= cr.width - 24) {
            inset.bottom = Math.max(0, cr.bottom - pr.top);   // шторка снизу
        } else {
            inset.left = Math.max(0, pr.right - cr.left);     // колонка слева
        }
        return inset;
    }

    // Центр карты, при котором точка target окажется в середине СВОБОДНОЙ
    // части экрана: center = unproject(project(target) - (S - C)).
    function centerFor(target) {
        var inset = panelInset();
        if (!inset.left && !inset.bottom) return target;
        var z = map.getZoom();
        var shift = L.point(inset.left / 2, -inset.bottom / 2);   // S - C
        return map.unproject(map.project(target, z).subtract(shift), z);
    }

    // ---- вывод карты на передний план -----------------------------------
    // Порядок подложек задаётся полем zindex в данных карты: main.js в
    // applyMapStyles() пишет его в el.style.zIndex. Тот же приём применён
    // для перехода по ?map=… (там просто ставится 777).
    //
    // Пишем именно в layer.map.zindex, а не только в стиль элемента:
    // applyMapStyles() вызывается заново при каждой пересинхронизации слоёв
    // (смена фильтров, порог зума), и записанный мимо данных стиль откатился
    // бы к исходному значению.

    function layerZ(layer) {
        var z = (layer.map && layer.map.zindex !== undefined &&
                 layer.map.zindex !== null && layer.map.zindex !== '')
            ? layer.map.zindex
            : (layer.getElement && layer.getElement()
                ? layer.getElement().style.zIndex : '');
        z = parseInt(z, 10);
        return isNaN(z) ? 0 : z;
    }

    function setLayerZ(layer, z) {
        if (layer.map) layer.map.zindex = z;
        var el = layer.getElement && layer.getElement();
        if (el) el.style.zIndex = z;
    }

    // Считаем максимум по всем картам на карте, а не только по видимым в
    // списке: за краем экрана лежат те же подложки, и вернувшись к ним
    // человек ожидает прежний порядок. База 800 — выше всех значений,
    // встречающихся в данных (самое большое — 777 у перехода по ссылке).
    function bringToFront(layer) {
        if (!layer || typeof map === 'undefined' || !map) return;
        var top = FRONT_Z_BASE - 1;
        map.eachLayer(function (l) {
            if (l === layer) return;
            if (!(l instanceof L.ImageOverlay) || !l.map) return;
            var z = layerZ(l);
            if (z > top) top = z;
        });
        if (layerZ(layer) > top) return;    // уже выше всех — не трогаем
        setLayerZ(layer, top + 1);
    }

    // ---- действия строки -----------------------------------------------

    function centerOn(layer) {
        var c = layerCenter(layer);
        if (!c) return;
        currentLayer = layer;
        scrollToCurrent = true;
        markCurrent();
        bringToFront(layer);
        map.panTo(centerFor(c));   // зум не трогаем — «на центр выбранной карты»
        flash(layer);
    }

    function fitTo(layer) {
        var b = layerBounds(layer);
        if (!b) return;
        var inset = panelInset();
        currentLayer = layer;
        scrollToCurrent = true;
        markCurrent();
        bringToFront(layer);
        map.fitBounds(b, {
            paddingTopLeft: L.point(inset.left + 12, 12),
            paddingBottomRight: L.point(12, inset.bottom + 12)
        });
        flash(layer);
    }

    // ---- разметка ------------------------------------------------------

    // Стрелка вниз; для возрастания тот же узел переворачивается через CSS.
    var DIR_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
        'stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M12 4v15"/><path d="M6 13l6 6 6-6"/></svg>';

    function saveSort() {
        try {
            localStorage.setItem(SORT_KEY, sortMode);
            localStorage.setItem(DIR_KEY, sortDir);
        } catch (e) { /* приватный режим — порядок просто не запомнится */ }
    }

    function syncDir() {
        if (!dirEl) return;
        var asc = (sortDir === 'asc');
        dirEl.classList.toggle('is-asc', asc);
        var title = (DIR_TITLE[sortMode] || {})[sortDir] || '';
        dirEl.title = title;
        dirEl.setAttribute('aria-label', 'Направление сортировки: ' + title);
    }

    var FIT_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
        'stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M4 9V4h5"/><path d="M20 9V4h-5"/><path d="M4 15v5h5"/><path d="M20 15v5h-5"/></svg>';

    function buildRow(layer) {
        var m = layer.map;
        var row = document.createElement('div');
        row.className = 'om-mil__item';
        row.setAttribute('role', 'button');
        row.tabIndex = 0;
        row._layer = layer;
        if (layer === currentLayer) row.classList.add('is-current');

        var img = document.createElement('img');
        img.className = 'om-mil__logo';
        img.src = mapLogo(m);
        img.alt = '';
        img.loading = 'lazy';
        img.addEventListener('error', function () {
            img.src = './logo/o-maps.webp';
        });
        row.appendChild(img);

        var text = document.createElement('span');
        text.className = 'om-mil__text';

        var name = document.createElement('span');
        name.className = 'om-mil__name';
        name.textContent = m.name || 'Нечто';
        text.appendChild(name);

        var meta = mapMeta(m);
        if (meta) {
            var metaEl = document.createElement('span');
            metaEl.className = 'om-mil__meta';
            metaEl.textContent = meta;
            text.appendChild(metaEl);
        }
        row.appendChild(text);
        row.title = (m.name || 'Нечто') + (meta ? '\n' + meta : '');

        var fit = document.createElement('button');
        fit.type = 'button';
        fit.className = 'om-mil__fit';
        fit.title = 'Вписать карту в экран';
        fit.setAttribute('aria-label', 'Вписать карту в экран');
        fit.innerHTML = FIT_SVG;
        fit.addEventListener('click', function (e) {
            e.stopPropagation();
            fitTo(layer);
        });
        row.appendChild(fit);

        row.addEventListener('click', function () { centerOn(layer); });
        row.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                centerOn(layer);
            }
        });

        if (hoverCapable) {
            row.addEventListener('mouseenter', function () {
                clearHover();
                hoverLayer = layer;
                setHighlight(layer, true);
            });
            row.addEventListener('mouseleave', clearHover);
        }

        return row;
    }

    function markCurrent() {
        if (!listEl) return;
        var rows = listEl.querySelectorAll('.om-mil__item');
        for (var i = 0; i < rows.length; i++) {
            rows[i].classList.toggle('is-current', rows[i]._layer === currentLayer);
        }
    }

    function rebuild() {
        if (!open || !panel) return;
        clearHover();

        var layers = sortLayers(collect());
        if (location.search.indexOf('mildebug') >= 0) {
            if (window.__milRect) map.removeLayer(window.__milRect);
            window.__milRect = L.rectangle(map.getBounds(),
                { color: 'red', weight: 3, fill: false }).addTo(map);
        }
        var shown = Math.min(layers.length, MAX_ROWS);
        countEl.textContent = layers.length;

        var scroll = listEl.scrollTop;
        var frag = document.createDocumentFragment();

        if (!layers.length) {
            var empty = document.createElement('div');
            empty.className = 'om-mil__empty';
            empty.textContent = 'В границах экрана карт нет';
            frag.appendChild(empty);
        } else {
            for (var i = 0; i < shown; i++) {
                frag.appendChild(buildRow(layers[i]));
            }
        }

        listEl.innerHTML = '';
        listEl.appendChild(frag);
        listEl.scrollTop = scroll;

        if (layers.length > shown) {
            noteEl.textContent = 'Показаны первые ' + shown + ' из ' + layers.length +
                ' — приблизьте карту';
            noteEl.hidden = false;
        } else {
            noteEl.hidden = true;
        }

        if (scrollToCurrent) {
            scrollToCurrent = false;
            var cur = listEl.querySelector('.om-mil__item.is-current');
            if (cur && cur.scrollIntoView) {
                cur.scrollIntoView({ block: 'nearest' });
            }
        }
    }

    function scheduleRebuild() {
        if (rebuildTimer) clearTimeout(rebuildTimer);
        rebuildTimer = setTimeout(function () {
            rebuildTimer = null;
            rebuild();
        }, REBUILD_DELAY);
    }

    // Перестраиваем на добавлении/удалении именно картинок-подложек:
    // всплывашки и маркеры тоже шлют layeradd, дёргать список из-за них незачем.
    function onLayerToggle(e) {
        if (e && e.layer && e.layer instanceof L.ImageOverlay) scheduleRebuild();
    }

    function createPanel() {
        panel = L.DomUtil.create('div', 'om-mil');
        panel.id = 'om-maps-in-view';
        panel.setAttribute('role', 'dialog');
        panel.setAttribute('aria-label', 'Карты на экране');

        var head = L.DomUtil.create('div', 'om-mil__head', panel);
        var title = L.DomUtil.create('span', 'om-mil__title', head);
        title.textContent = 'Карты на экране';
        countEl = L.DomUtil.create('span', 'om-mil__count', head);
        countEl.textContent = '0';

        var close = document.createElement('button');
        close.type = 'button';
        close.className = 'om-mil__close';
        close.title = 'Закрыть';
        close.setAttribute('aria-label', 'Закрыть');
        close.innerHTML = '&times;';
        close.addEventListener('click', closePanel);
        head.appendChild(close);

        var bar = L.DomUtil.create('div', 'om-mil__bar', panel);
        sortEl = L.DomUtil.create('select', 'om-mil__sort', bar);
        sortEl.id = 'om-mil-sort';
        sortEl.title = 'Сортировка';
        sortEl.setAttribute('aria-label', 'Сортировка');
        [['year', 'По году'], ['name', 'По названию'], ['area', 'По площади']]
            .forEach(function (o) {
                var opt = document.createElement('option');
                opt.value = o[0];
                opt.textContent = o[1];
                sortEl.appendChild(opt);
            });
        sortEl.value = sortMode;
        // Смена ключа возвращает направление к ожидаемому для него: после
        // «по площади» (крупные сверху) алфавит должен начаться с А, а не с Я.
        sortEl.addEventListener('change', function () {
            sortMode = sortEl.value;
            sortDir = DEFAULT_DIR[sortMode];
            saveSort();
            syncDir();
            rebuild();
        });

        dirEl = document.createElement('button');
        dirEl.type = 'button';
        dirEl.className = 'om-mil__dir';
        dirEl.innerHTML = DIR_SVG;
        dirEl.addEventListener('click', function () {
            sortDir = (sortDir === 'asc') ? 'desc' : 'asc';
            saveSort();
            syncDir();
            rebuild();
        });
        bar.appendChild(dirEl);
        syncDir();

        listEl = L.DomUtil.create('div', 'om-mil__list', panel);
        noteEl = L.DomUtil.create('div', 'om-mil__note', panel);
        noteEl.hidden = true;

        // без этого клики и прокрутка списка уедут в карту
        L.DomEvent.disableClickPropagation(panel);
        L.DomEvent.disableScrollPropagation(panel);

        map.getContainer().appendChild(panel);
    }

    // Состояние панели нужно и рейке (подсветить пункт меню), поэтому
    // о каждом открытии/закрытии сообщаем событием на document — кто хочет,
    // тот и слушает; закрыть панель можно и крестиком, и Esc.
    function notify() {
        try {
            document.dispatchEvent(new CustomEvent('om-maps-in-view', {
                detail: { open: open }
            }));
        } catch (e) { /* очень старый браузер — просто без индикации */ }
    }

    function openPanel() {
        if (typeof map === 'undefined' || !map) return;
        if (!panel) createPanel();
        if (open) return;
        open = true;
        panel.classList.add('is-open');
        map.on('moveend zoomend resize overlayadd overlayremove', scheduleRebuild);
        map.on('layeradd layerremove', onLayerToggle);
        rebuild();
        notify();
    }

    function closePanel() {
        if (!open) return;
        open = false;
        if (rebuildTimer) { clearTimeout(rebuildTimer); rebuildTimer = null; }
        clearHover();
        map.off('moveend zoomend resize overlayadd overlayremove', scheduleRebuild);
        map.off('layeradd layerremove', onLayerToggle);
        if (panel) panel.classList.remove('is-open');
        notify();
    }

    function toggle() {
        if (open) {
            closePanel();
        } else {
            openPanel();
        }
        return open;
    }

    L.DomEvent.on(document, 'keydown', function (e) {
        if (e.key === 'Escape' && open) closePanel();
    });

    window.toggleMapsInView = toggle;
    window.isMapsInViewOpen = function () { return open; };
    window.refreshMapsInView = rebuild;
    // пригодится, если счётчик карт когда-нибудь переведут на точный тест
    window.isMapLayerInView = isLayerInView;
})();
