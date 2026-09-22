
const MIN_ZOOM = 5; // одинаково для всех регионов (как было на all.html)
const MAX_ZOOM = 17;
const EMPTY_MAPS_ZOOM_LEVEL = 9;
const DEFAULT_ZOOM_LEVEL = 13;

const ZERO_LATLNG = new L.LatLng(0, 0);

let map;
let layerControl;
let opacitySlider;
let notificationControl;
let overlayMapsContents;
let marker1, marker2, marker3;

let loaded = false;
let needToSync = false;
let tracksLoaded = false;

let maxZindex = 1;
let enablePopup = false;

let popupWidth = isMobile ? "auto" : 500;

let editMode = false;
let mapOpacity = 1;
let imagesLoadCounter = 0;
let selectedOverlay, selectedMap;
let visibleMaps = 0;

let showMapsOnSmallZoom = false;
/*
let smosz = localStorage.getItem('showMapsOnSmallZoom');
if (smosz != null) {
    showMapsOnSmallZoom = (smosz === 'true');
}
*/
let enableFullSize = false;
let efs = localStorage.getItem('enableFullSize');
if (efs != null) {
    enableFullSize = (efs === 'true');
}
let hiddenButtonsMode = false;
let hbm = localStorage.getItem('hiddenButtonsMode');
if (HAS_NO_BUTTONS_PARAM || hbm != null) {
    hiddenButtonsMode = HAS_NO_BUTTONS_PARAM || (hbm === 'true');
}
loadTracksRequired = (typeof loadTracksRequired !== 'undefined') && loadTracksRequired;
if (loadTracksRequired) {
    hiddenButtonsMode = true;
}
let timeline = false;
let tl = localStorage.getItem('timeline');
if (tl != null) {
    timeline = (tl === 'true');
}

let mapOverlays = []; // all overlays to set their opacity

// Мелкий масштаб (зум <= EMPTY_MAPS_ZOOM_LEVEL): вместо картинок-подложек
// все карты рисуются одноцветными полигонами на одном общем <canvas>.
// Ничего не качается, в DOM один элемент вместо сотен, а переход через
// порог — это смена слоя, без перезагрузки src у картинок.
const OUTLINE_PANE = 'mapsOutlinePane';
const OUTLINE_FILL = '#636b2f';           // цвет maps/olive.png
let outlineRenderer = null;               // L.canvas, создаётся вместе с картой
let outlineGroup = L.layerGroup([]);      // полигоны показываемых карт
let revealedMaps = new Set();             // карты, открытые кликом на мелком масштабе
let lastOliveBand = null;

let oTracks = [];
if (typeof tracks !== 'undefined') {
    oTracks = [
        ...runTracks,
        ...skiTracks,
        ...tracks,
    ];
}

// Prepare the structures and overlay the maps
// Firstly load the specified map
if (MAP_NAME_PARAM) {
    let m = getMapForName(MAP_NAME_PARAM);
    if (m) {
        loadMap(m);
    }
}

function loadMaps() {
    if (ONLY_MAP_NAME_PARAM || ONLY_TRACK_NAME_PARAM) {
        return; // do nothing in this case
    }

    // Границы экрана берём один раз; попадание — по пересечению габаритов.
    // Без запаса VIEW_PAD: качаем только то, что реально видно.
    const viewBounds = map ? map.getBounds() : null;
    for (const m of oMaps) {
        if (m.loaded || !isMapAcceptable(m)) {
            continue;
        }
        if (viewBounds) {
            const b = mapLatLngBounds(m);
            if (!b || !viewBounds.intersects(b)) {
                continue;
            }
        }
        if (!TYPE_PARAM || (m.type && m.type.includes(TYPE_PARAM)) || (TYPE_PARAM === 'FOREST' && !m.type)) {
            loadMap(m);
        }
    }
}

function loadTracks() {
    showSpinner();
    setTimeout(function () {
        let actualTracks = [];
        for (const t of oTracks) {
            if (START_NAME_PARAM && START_NAME_PARAM !== t.start) {
                continue;
            }
            if (TRACK_TYPE_PARAM && (!t.type || !t.type.includes(TRACK_TYPE_PARAM))) {
                continue;
            }
            if (TRACK_MONTH_PARAM && (TRACK_MONTH_PARAM !== '0') && (!t.date || t.date.substring(5, 7) !== TRACK_MONTH_PARAM)) {
                continue;
            }
            let firstTrack = getFirstTrack(t);
            if (ONLY_TRACK_NAME_PARAM && !firstTrack.includes(ONLY_TRACK_NAME_PARAM)) {
                continue;
            }
            actualTracks.push(t);
        }
        const t = actualTracks.pop();
        if (t) {
            loadTracksRecursive(t, actualTracks);
        }

        tracksLoaded = true;
        if (loaded) {
            hideSpinner();
        }
    }, 100);
}

function loadTracksRecursive(t, actualTracks) {
    try {
        let firstTrack = getFirstTrack(t);
        let gpxLayer = new L.GPX(firstTrack, {
            async: false,
            display_wpt: false,
            color: (t.type ? color[t.type[0]] : 'brown'),
            opacity: .7,
            weight: 3
        });
        var popup_text = buildTrackPopup(t, gpxLayer);
        gpxLayer.bindPopup(popup_text, {maxWidth: popupWidth});
        allocateMap(t, gpxLayer);

        gpxLayer.on('mouseover', function (e) {
            let target = e.originalEvent.target;
            let width = target.getAttribute('stroke-width');
            if (width !== '7') {
                e.target.setStyle({
                    weight: 6,
                    opacity: 1
                });
            }
        });
        gpxLayer.on('mouseout', function (e) {
            let target = e.originalEvent.target;
            let width = target.getAttribute('stroke-width');
            if (width !== '7') {
                e.target.setStyle({
                    weight: 3,
                    opacity: .7
                });
            }
        });
        gpxLayer.on('click', function (e, f) {
            let target = e.originalEvent.target;
            document.querySelectorAll("path.leaflet-interactive").forEach(function (path) {
                if (path !== target && path.getAttribute('stroke-width') === '7') {
                    path.setAttribute('stroke-width', 3);
                }
            });
            let width = target.getAttribute('stroke-width');
            if (width === '6' || width === '3') {
                target.setAttribute('stroke-width', 7);
            } else {
                target.setAttribute('stroke-width', 6);
            }
        });
    } catch (e) {
        console.log('Error loading track', t, e);
    }

    let nextTrack = actualTracks.pop();
    if (nextTrack) {
        setTimeout(function () {
            loadTracksRecursive(nextTrack, actualTracks);
        }, 2)
    } else {
        finishTracksLoad();
    }
}

function finishTracksLoad() {
    hideSpinner();

    // go to the specified track
    if (TRACK_NAME_PARAM) {
        locateForUrl(TRACK_NAME_PARAM);
    }
    visibleMaps = recalculateLayers();
}

function buildTrackPopup(t, gpxLayer) {
    let firstTrack = getFirstTrack(t);
    let result = '<div class="popup-header popup-left-header">O-MAPS</div>';
    let markir = '';
    if (t.markir) {
        markir += '<img src="./images/favorite.png" title="Маркированный маршрут" alt="Маркир" /> &nbsp;';
    }
    let typesList = getTypesList(t, true);
    if (!typesList.length) {
        typesList = 'МАРШРУТ';
    }
    result += '<div class="popup-header popup-right-header">' + markir + typesList + '</div>';

    // картинка
    let pic;
    const logos = logoList(t);
    if (t.logo) {
        pic = './logo/' + t.logo;
    } else if (t.pic) {
        pic = t.pic;
    } else if (logos.length > 0) {
        pic = './logo/' + logos[0];
    } else if (t.pics) {
        pic = './tracks/' + t.pics[0] + '/pic_1.jpg';
    } else {
        pic = './logo/o-maps.webp';
    }
    result += '<img src="' + pic + '" alt="Лого" class="popup-logo" /><div class="popup-text">';

    // имя, ссылка, год и длина трека
    result += '<b>';
    if (t.link) {
        result += '<a href="' + t.link + '">' + t.name + '</a>';
    } else {
        result += t.name;
    }
    if (gpxLayer.len > 0) {
        let len = gpxLayer._humanLen(gpxLayer.len);
        result += ' (' + len + ')';
    }
    result += '</b> ';
    result += buildTrackDownloadLinks(t);
    result += '<hr />';

    // инфа о маршруте
    let info = '';
    let y = year(t);
    if (y) {
        const date = t.date ? formatDate(t, true, false) : t.year;
        info += `<b>${date}</b>. `;
    }
    if (t.start) {
        info += `<b>${getMapStarts(t)}</b> `;
    }
    if (t.info) {
        info += t.info;
    }
    if (t.results) {
        info += ' <a href="' + t.results + '">Результаты</a>.';
    }
    // Картинки
    if (t.pics) {
        info += ' <a href="#" onClick="openModal(' + picCounter + '); return false;">Картинки</a>.';
        for (let p = 1; p <= t.pics[1]; p++) {
            let url = 'tracks/' + t.pics[0] + '/pic_' + p + '.jpg';
            images.push(url);
            picCounter++;
        }
    }
    if (t.video) {
        if (isObject(t.video)) {
            info += '<br/>Видео:<br/><ol>'
            for (const name in t.video) {
                info += `<li><a href="${t.video[name]}">${name}</a></li>`;
            }
            info += '</ol>'

        } else {
            info += ' <a href="' + t.video + '"> Видео</a>.';
        }
    }
    if (info) {
        result += info;
    }

    let trackLinkUrl = trackLink(firstTrack, false);
    let copyCick = 'onclick="copyToClipboard(\'' + trackLinkUrl + '\'); return false;"';
    result += '<br />Поделиться <a href="' + trackLinkUrl + '">ссылкой</a> на маршрут: <a href="#" ' + copyCick + '><img src="./images/copy.png" alt="Copy" title="Copy" style="margin-bottom: -3px;" /></a>';

    // скрыть трек
    let hideCick = 'onclick="hideTrack(map, \'' + firstTrack + '\'); return false;"';
    result += '<br /><div class="hide-map-link"><a href="#" ' + hideCick + '>Скрыть этот трек</a></div>';

    result += '</div>';

    return result;
}

let searchBox;
if (mapElement) {

    let savedState;
    if (!MAP_NAME_PARAM) {
        savedState = loadMapState(REGION_KEY);
    }
    if (MAP_NAME_PARAM) {
        let m = getMapForName(MAP_NAME_PARAM);
        if (m) {
            // включить слои, без которых syncMaps() эту карту не покажет
            if (isRogaine(m)) {
                if (typeof rogaineGroup !== 'undefined') {
                    activateLayer(rogaineGroup);
                }
            } else {
                if (isFun(m)) {
                    if (typeof funGroup !== 'undefined') {
                        activateLayer(funGroup);
                    }
                }
                if (isSpecialMap(m)) {
                    if (typeof specialGroup !== 'undefined') {
                        activateLayer(specialGroup);
                    }
                }
                let y = year(m);
                if (y && y < 2000) {
                    if (typeof groupRetro !== 'undefined') {
                        activateLayer(groupRetro);
                    }
                    if (typeof group90th !== 'undefined') {
                        activateLayer(group90th);
                    }
                }
            }
        }
    } else if (START_NAME_PARAM === 'major' && !isNull(groupRetro)) {
        activeLayers.push(groupRetro, group90th);
    }
    if (!loadTracksRequired && (TRACK_NAME_PARAM || HAS_TRACKS_PARAM)) {
        activeLayers.push(tracksGroup);
    }
    let x = centerX;
    let y = centerY;
    if (savedState) {
        x = savedState.lat;
        y = savedState.lng;
    }
    if (X_PARAM) x = X_PARAM;
    if (Y_PARAM) y = Y_PARAM;
    let zoom = DEFAULT_ZOOM_LEVEL;
    if (savedState) zoom = savedState.zoom;
    if (ZOOM_PARAM) zoom = ZOOM_PARAM;
    map = L.map('map', {
        attributionControl: false,
        zoomControl: false,
        minZoom: MIN_ZOOM,
        maxZoom: MAX_ZOOM,
        center: [x, y],
        zoom: zoom,
        layers: activeLayers,
        contextmenu: true,
        contextmenuWidth: 190,
        contextmenuItems: buildContextmenuItems()
    });

    // Полигоны мелкого масштаба — под картинками (overlayPane = 400), чтобы
    // открытая кликом карта ложилась поверх
    map.createPane(OUTLINE_PANE);
    map.getPane(OUTLINE_PANE).style.zIndex = 399;
    outlineRenderer = L.canvas({pane: OUTLINE_PANE, padding: VIEW_PAD});

    if (ooptLayer) {
        map.createPane(OOPT_TOP_PANE);
        map.getPane(OOPT_TOP_PANE).style.zIndex = 500;
        if (HAS_OOPT_PARAM) {
            ooptLayer.addTo(map);
        }
    }

    // --- notifications (https://gitlab.com/manuel.richter95/leaflet.notifications)
    notificationControl = L.control
        .notifications({
            timeout: 10000,
            className: 'modern',
            position: 'bottomleft',
            closable: true,
            dismissable: true,
        }).addTo(map);

    map.on('click', onMapClick);
    // После zoomend Leaflet всегда шлёт moveend, так что одного обработчика
    // хватает и на сдвиг, и на зум: догрузить карты у экрана и пересобрать DOM.
    map.on('moveend resize', function () {
        loadMaps();
        syncMaps();
    });
    map.on('overlayadd overlayremove', function () {
        visibleMaps = recalculateLayers();
    });
    // Все слои-группы карт (включая «Рогейн» и «Необычные») работают одинаково:
    // чекбокс/пункт меню меняет activeLayers, а показ пересчитывает syncMaps()
    map.on('overlayadd', function (e) {
        activateLayer(overlayMapsContents[e.name]);
        syncMaps();
        if (e.name.includes('Маршруты') && !tracksLoaded) {
            loadTracks();
        }
    });

    map.on('overlayremove', function (e) {
        removeFromArray(activeLayers, overlayMapsContents[e.name]);
        syncMaps();
    });

    // Save the map state whenever the map is moved or zoomed
    map.on('moveend', () => saveMapState(map, REGION_KEY));
    map.on('zoomend', () => saveMapState(map, REGION_KEY));

    map.on('baselayerchange', function (e) {
        switch (e.layer) {
            case osmLayer:
                background = BACKGROUND_OSM;
                break
            case openTopoLayer:
                background = BACKGROUND_TOPO;
                break
            case yandexSatelliteLayer:
                background = BACKGROUND_SATELLITE;
                break
            default:
                background = BACKGROUND_YANDEX;
        }
        localStorage.setItem('background', background);
    });

    L.control.scale().addTo(map);

    // Home
    if (!HAS_EMBEDDED_PARAM) {
        L.easyButton('button-icon home-icon', function (btn, map) {
            selectMapRegion('index');
        }, 'Начальная страница').addTo(map);

        // --- global menu ---
        buildGlobalMenu();
    }

    // Instantiate the ZoomBar control..
    new L.Control.ZoomBar({position: 'topleft'}).addTo(map);

    let attributionControl = L.control.attribution().addTo(map);
    attributionControl.setPrefix('');

    // --- layers control ---
    let baseMaps = {
        "Open Street Map": osmLayer,
        "Open Topo Map": openTopoLayer,
        "Яндекс Схема": yandexLayer,
        "Яндекс Спутник": yandexSatelliteLayer
    };

    let layerControlCollapsed = false;
    if (isMobile) {
        layerControlCollapsed = true;
    }
    overlayMapsContents = buildOverlayMapsContents();

    if (!HAS_EMBEDDED_PARAM) {
        layerControl = L.control.layers(
            baseMaps, overlayMapsContents,
            {collapsed: layerControlCollapsed, autoZIndex: false}).addTo(map);
        if (typeof funsRequired === 'undefined') {
            let checkbox = document.getElementById("funs-group-check");
            if (checkbox) {
                checkbox.closest('label').style.display = 'none';
            }
        }
        if (typeof tracks === 'undefined') {
            let checkbox = document.getElementById("tracks-group-check");
            if (checkbox) {
                checkbox.closest('label').style.display = 'none';
            }
        }
        if (typeof oEvents === 'undefined') {
            let checkbox = document.getElementById("calendar-group-check");
            if (checkbox) {
                checkbox.closest('label').style.display = 'none';
                document.getElementById("calendar-past-group-check").closest('label').style.display = 'none';
            }
        }
        if (typeof poi === 'undefined') {
            let checkbox = document.getElementById("poi-group-check");
            if (checkbox) {
                checkbox.closest('label').style.display = 'none';
            }
        }
    }

    // --- search control ---
    if (!HAS_EMBEDDED_PARAM) {
        searchBox = L.control.searchbox({
            position: 'topright',
            expand: 'left',
            // scrollbar: true,
            clearButton: true,
            // maxHeight: '40vh',
            autocompleteFeatures: ['setValueOnClick', 'arrowKeyNavigation'],
            title: 'Поиск карты или места (Ctrl-Shift-F)',
        }).addTo(map);

        // элементы выпадающего списка, параллельно searchBox._items:
        // {kind: 'map', m} | {kind: 'place', p}
        let searchItems = [];
        let pickedIdx = null;   // индекс элемента, по которому кликнули мышью

        // Клик по элементу списка: плагин в своём bubble-обработчике сам жмёт кнопку
        // (→ search()), поэтому индекс запоминаем раньше, в фазе захвата
        searchBox._autocomplete.addEventListener('click', function (e) {
            let li = e.target.closest('li');
            let idx = li ? searchBox._items.indexOf(li) : -1;
            pickedIdx = idx >= 0 ? idx : null;
        }, true);

        searchBox.onInput("keyup", function (e) {
            if (e.keyCode == 13) {
                search();
            }
        });

        // Список перестраиваем по событию input: оно приходит только от правки текста,
        // а не от стрелок/Shift и не от подстановки значения при навигации по списку
        searchBox.onInput("input", function () {
            let value = searchBox.getValue();
            if (value != "") {
                let results = searchMaps(value).slice(0, 10);
                searchItems = results.map(m => ({kind: 'map', m: m}));
                searchBox.setItems(results.map(m =>
                    '<span class="om-search-dot om-search-dot-map"></span>' + mapTitle(m, false, true)));
                fitSearchList();
                geoSuggest(value, appendPlaces);
            } else {
                clearSearchList();
            }
        });

        L.DomEvent.on(searchBox._clearbutton, 'click', clearSearchList);

        function clearSearchList() {
            searchItems = [];
            searchBox.clearItems();
            geoCancel();
        }

        // места приходят асинхронно — дописываем их в конец списка
        // (addItems не сбрасывает подсветку стрелками, в отличие от setItems)
        function appendPlaces(value, places) {
            if (searchBox.isCollapsed() || searchBox.getValue() !== value || !places.length) {
                return;
            }
            let first = searchBox._items.length;
            searchItems = searchItems.concat(places.map(p => ({kind: 'place', p: p})));
            searchBox.addItems(places.map(placeItemHtml));
            for (let i = first; i < searchBox._items.length; i++) {
                searchBox._items[i].classList.add('om-search-place');
            }
            searchBox._items[first].classList.add('om-search-place-first');
            fitSearchList();
        }

        // Места идут после десятка карт и без прокрутки уходят за низ экрана:
        // ограничиваем список до края окна и даём ему прокручиваться
        function fitSearchList() {
            let ul = searchBox._autocomplete;
            let top = ul.getBoundingClientRect().top;
            ul.style.maxHeight = Math.max(120, window.innerHeight - top - 8) + 'px';
            ul.style.overflowY = 'auto';
        }

        // при навигации стрелками подсвеченный элемент держим в видимой части списка
        searchBox._container.addEventListener('keydown', function (e) {
            if (e.keyCode == 38 || e.keyCode == 40) {
                setTimeout(function () {
                    let li = searchBox._autocomplete.querySelector('.leaflet-searchbox-highlight-item');
                    if (li) {
                        li.scrollIntoView({block: 'nearest'});
                    }
                }, 0);
            }
        }, true);

        searchBox.onButton("click", search);

        function search() {
            let value = searchBox.getValue();
            let idx = pickedIdx !== null ? pickedIdx
                : (typeof searchBox._dd_index === 'number' ? searchBox._dd_index : null);
            let item = idx !== null ? searchItems[idx] : null;
            pickedIdx = null;

            if (item && item.kind === 'place') {
                locatePlace(item.p);
            } else if (item) {
                locateMap(item.m);
            } else if (value) {
                // Enter без выбора из списка: координаты или карта, как раньше;
                // если карт не нашлось — первое найденное место
                let m = searchMap(value);
                if (m) {
                    locateMap(m);
                } else if (!parseCoordinates(unifyString(value))) {
                    let place = searchItems.find(it => it.kind === 'place');
                    if (place) {
                        locatePlace(place.p);
                    }
                }
            }

            geoCancel();
            setTimeout(function () {
                searchBox.hide();
                searchBox.clear();
                searchItems = [];
            }, 600);
        }

        document.onkeydown = function (e) {
            e = e || window.event;
            let key = e.which || e.keyCode;
            if (key === 70) { // Ctrl-Shift-F
                searchBox.show();
                document.querySelector(".leaflet-searchbox").focus();
            }
        }
    }

    // Compass
    if (!hiddenButtonsMode) {
        var compass = new L.Control.Compass({
            autoActive: true,
            showDigit: true,
            callErr: function () {
                compass.deactivate();
            }
        });
        map.addControl(compass);
    }

    // Set bounds for the overlay
    //map.fitBounds(oMap.getBounds());

    marker1 = L.marker(ZERO_LATLNG, {draggable: true}).addTo(map);
    marker2 = L.marker(ZERO_LATLNG, {draggable: true}).addTo(map);
    marker3 = L.marker(ZERO_LATLNG, {draggable: true}).addTo(map);
    marker1.on('drag', onDrag);
    marker2.on('drag', onDrag);
    marker3.on('drag', onDrag);
    marker1.on('dragend', onDragEnd);
    marker2.on('dragend', onDragEnd);
    marker3.on('dragend', onDragEnd);

    // --- welcome dialog ---
    L.easyButton('button-icon welcome-icon tbank', function (btn, map) {
        openWelcome();
    }, 'О проекте').addTo(map)
    openWelcomeIfRequired();

    // --- help ---
    if (!hiddenButtonsMode) {
        L.easyButton('button-icon help-icon', function (btn, map) {
            location.href = './help/help.html';
        }, 'Справка').addTo(map)
    }

    // --- settings ---
    L.easyButton('button-icon settings-icon', function (btn, map) {
        contextMenu();
    }, 'Контекстное меню настроек').addTo(map)

    // --- statistics ---
    if (!hiddenButtonsMode) {
        L.easyButton('button-icon statistics-icon', function (btn, map) {
            openStats();
        }, 'Немного статистики').addTo(map)
    }

    // --- sheet ---
    if (!HAS_EMBEDDED_PARAM) {
        L.easyButton('button-icon papers-icon', function (btn, map) {
            downloadSheet();
        }, 'Сводная таблица ' + (loadTracksRequired ? 'маршрутов' : 'карт')).addTo(map)
    }

    // --- Leaflet.QgsMeasure (https://github.com/gabriel-russo/Leaflet.QgsMeasure)
    if (!hiddenButtonsMode) {
        let qgsmeasureOptions = {
            position: 'topleft',
            shapeOptions: {
                color: "red",
                stroke: true,
                weight: 4,
                opacity: 0.8,
            },
            logo: new L.DivIcon({
                iconSize: new L.Point(9, 9),
                className: 'leaflet-div-icon leaflet-editing-icon',
            }),
            text: {
                title: 'Измерение расстояний и выгрузка в GPX', // Plugin Button Text
                segments_title: 'Перегоны (м)', // Segments box title
                segments_from: "", // Segment start label
                segments_to: " - ", // Segment end label
                segments_total: 'Всего: ', // Total distance label
                segments_meters: "м", // Meters label
            },
        };
        let measureControl = L.Control.qgsmeasure(qgsmeasureOptions).addTo(map);

        // Кнопка «Скачать GPX» в окошке «Перегоны (м)».
        // Окошко создаётся плагином в обработчике measurestart
        // (_createSegmentContainer), зарегистрированном в onAdd — то есть
        // раньше нашего. Значит, к нашему вызову контейнер уже есть.
        map.on('qgsmeasure:measurestart', function () {
            addMeasureCloseButton(measureControl);
            addMeasureGpxButton(measureControl);
            setMeasureGpxEnabled(measureControl, false);
        });

        // На тач-устройствах вершины ставит L.Draw.Polyline._onTouch по событию
        // карты touchstart, а перегоны плагин считает в своём _onClick по
        // событию click — до него дело не доходит, и окошко «Перегоны» остаётся
        // пустым, хотя линия рисуется и длина в подсказке растёт.
        //
        // Поэтому считаем перегоны по draw:drawvertex: его L.Draw шлёт из
        // _vertexChanged на каждую поставленную вершину, независимо от того,
        // мышь это или палец. Штатный _onClick при этом никуда не девается —
        // от двойного добавления защищает обёртка над _addSegment ниже.
        //
        // Флаг _drawing здесь сознательно не проверяется. На тач-устройствах
        // вершина появляется по touchstart, то есть маркер оказывается прямо
        // под пальцем, и последующий браузерный click приходит уже в него,
        // а не в карту. А начиная со второй вершины на последнем маркере висит
        // _finishShape (L.Draw.Polyline._updateFinishHandler) — линия «завершается»
        // тем же касанием, которым её продолжают. Точки при этом добавляться
        // не перестают (addVertex про _drawing ничего не знает), так что
        // считаем перегоны по вершинам, а не по состоянию рисования.
        map.on('draw:drawvertex', function () {
            const handler = measureControl._handler;
            if (!handler || !handler._markers) return;
            handler._addSegment();
            handler._updateSegmentsTooltipNumber();
        });

        // Идемпотентность: перегонов всегда на один меньше, чем вершин.
        // Второй вызов на ту же вершину (наш из draw:drawvertex и плагинный
        // из _onClick на десктопе) становится пустышкой.
        const addSegment = measureControl._handler._addSegment;
        measureControl._handler._addSegment = function () {
            if (this._markers.length < 2) return;
            if (this._segments.length >= this._markers.length - 1) return;
            return addSegment.call(this);
        };

        // Появился перегон — есть что выгружать. Заодно прокручиваем список:
        // в theme.css скроллится он, а не всё окошко (иначе кнопка уезжает
        // за нижний край), поэтому штатная прокрутка плагина не срабатывает.
        map.on('qgsmeasure:newsegment', function () {
            const list = measureControl._segments_measures_container;
            if (list) list.scrollTop = list.scrollHeight;
            setMeasureGpxEnabled(measureControl, true);
        });

        // Клик после завершённой ломаной стирает её и начинает новую
        map.on('qgsmeasure:newmeasure', function () {
            setMeasureGpxEnabled(measureControl, false);
        });

        // Завершение ломаной — это двойной клик: первый клик ставит узел,
        // второй попадает по только что поставленному маркеру, на котором
        // L.Draw.Polyline._updateFinishHandler() держит обработчик
        // _finishShape(). Но браузерный dblclick доходит и до карты, и штатный
        // L.Map.DoubleClickZoom её приближает. Поэтому на время работы
        // измерителя гасим зум по двойному клику и возвращаем как было.
        //
        // Ловим выключение инструмента по measurestop (кнопкой) и draw:canceled
        // (Esc). Завершение ломаной сюда не относится: qgsmeasure после него
        // handler не отключает — следующий клик начинает новую линию, и зум
        // должен оставаться выключенным.
        let dblClickZoomWasEnabled = null;
        map.on('qgsmeasure:measurestart', function () {
            if (dblClickZoomWasEnabled === null) {
                dblClickZoomWasEnabled = map.doubleClickZoom.enabled();
            }
            map.doubleClickZoom.disable();
        });
        map.on('qgsmeasure:measurestop draw:canceled', function () {
            if (dblClickZoomWasEnabled) map.doubleClickZoom.enable();
            dblClickZoomWasEnabled = null;
        });
    }

    // Крестик в углу окошка перегонов — везде, не только на телефоне.
    // На телефоне он единственный способ выйти: Esc нет, а кнопка инструмента
    // спрятана в раскрывашке рейки. На десктопе он просто ближе к рукам, чем
    // Esc или повторный заход в раскрывашку, — оба продолжают работать.
    // Выключаем через toggle() контрола, а не disable() обработчика: toggle
    // шлёт qgsmeasure:measurestop, по которому рейка гасит подсветку
    // активного инструмента, а main.js возвращает зум по двойному клику.
    function addMeasureCloseButton(control) {
        const box = control._segments_container;
        if (!box || control._omCloseButton) return;

        const button = L.DomUtil.create('button', 'om-measure-close', box);
        button.type = 'button';
        button.innerHTML = '&times;';
        button.title = 'Закрыть измеритель (Esc)';
        button.setAttribute('aria-label', 'Закрыть измеритель');

        L.DomEvent.disableClickPropagation(button);
        L.DomEvent.on(button, 'click', function (e) {
            L.DomEvent.stop(e);
            if (control.enabled()) control.toggle();
        });

        control._omCloseButton = button;
    }

    // Кнопка выгрузки нарисованной ломаной в GPX — добавляется в окошко
    // перегонов. Окошко плагин создаёт один раз и переиспользует, поэтому
    // ссылку на кнопку держим на самом контроле.
    function addMeasureGpxButton(control) {
        const box = control._segments_container;
        if (!box || control._omGpxButton) return;

        const row = L.DomUtil.create('div', 'om-gpx-row', box);
        const button = L.DomUtil.create('button', 'om-gpx-button', row);
        button.type = 'button';
        button.textContent = 'Скачать GPX';
        button.title = 'Сохранить нарисованную ломаную в GPX';

        // Окошко лежит внутри контейнера карты. Без этого клик дойдёт до карты,
        // и qgsmeasure сотрёт линию, начав новую (_onClick → _removeShape).
        L.DomEvent.disableClickPropagation(row);

        L.DomEvent.on(button, 'click', function (e) {
            L.DomEvent.stop(e);
            downloadMeasureGpx(control);
        });

        control._omGpxButton = button;
    }

    function setMeasureGpxEnabled(control, enabled) {
        if (control._omGpxButton) {
            control._omGpxButton.disabled = !enabled;
        }
    }

    function downloadMeasureGpx(control) {
        // Вершины берём из маркеров L.Draw.Polyline — они переживают
        // завершение ломаной и удаляются только при выключении инструмента
        const markers = control._handler && control._handler._markers;
        if (!markers || markers.length < 2) return;

        const latLngs = markers.map(function (m) { return m.getLatLng(); });
        const total = control.getSegments().reduce(function (sum, segment) {
            return sum + segment.distance;
        }, 0);

        downloadText(
            buildGpx(latLngs, {
                name: 'o-maps: измерение',
                desc: 'Длина ' + total.toFixed(1) + ' м, точек ' + latLngs.length,
                waypoints: true
            }),
            timestampFileName('o-maps-line', 'gpx'),
            'application/gpx+xml'
        );
    }

    // --- lasso ---
    if (!hiddenButtonsMode) {
        let lassoOptions = {
            position: 'topleft',
            title: 'Измерение площади'
        };
        L.control.lasso(lassoOptions).addTo(map);
        map.on('lasso.finished', event => {
            let latLngs = event.latLngs;
            if (!latLngs || latLngs.length < 2) return;
            let area = getArea(latLngs);
            // Длина — именно нарисованной линии, без замыкающего отрезка
            // от конца обратно к началу. LassoPolygon.getLatLngs() отдаёт
            // кольцо L.Polygon, а оно первую точку в конце не повторяет,
            // то есть массив — ровно ход руки; getDistance() считает по
            // разомкнутой ломаной, что здесь и нужно.
            alert('Площадь: ' + area.toFixed(2) + ' км²\n' +
                  'Длина: ' + getDistance(latLngs) + ' км');
        });
    }

    // --- GPX/KML viewer (https://github.com/makinacorpus/Leaflet.FileLayer)
    if (!hiddenButtonsMode) {
        var style = {
            color: 'red',
            opacity: 1.0,
            fillOpacity: 1.0,
            weight: 3,
            clickable: false
        };
        L.Control.FileLayerLoad.LABEL = '<img class="icon" src="./images/gpx-file-format-symbol-24.png" alt="Просмотр GPX/KML" style="margin-top: 3px;"/>';
        let gpxViewerControl = L.Control.fileLayerLoad({
            fitBounds: true,
            fileSizeLimit: 10240,
            layerOptions: {
                style: style,
                pointToLayer: function (data, latlng) {
                    return L.circleMarker(
                        latlng,
                        {style: style}
                    );
                }
            }
        });
        gpxViewerControl.addTo(map);
        gpxViewerControl.loader.on('data:loaded', function (e) {
            let distance = getDistance(e.layer.getLayers()[0].getLatLngs());
            notificationControl.info('Трек', 'Длина трека <b>' + e.filename + '</b> - ' + distance + ' км.');
        });
        gpxViewerControl.loader.on('data:error', function (e) {
            notificationControl.alert('Трек', 'Ошибка загрузки трека: ' + e.error);
        });
    }

    // if (Math.random() < 0.3) {
    setTimeout(function () {
        notificationControl.success(tips[Math.floor(Math.random() * tips.length)]);
    }, 5000);
    // }

    // --- opacity slider (https://github.com/Eclipse1979/leaflet-slider) ---
    if (!hiddenButtonsMode) {
        let sliderOptions = {
            id: 'opacitySlider',
            orientation: 'horizontal',
            title: 'Прозрачность карт',
            min: 0,
            max: 1,
            step: .1,
            size: '150px',
            position: 'topright',
            value: mapOpacity,
            logo: '',
            collapsed: false,
            showValue: false,
            syncSlider: true
        };
        opacitySlider = L.control.slider(function (value) {
            setOverlayOpacity(value);
        }, sliderOptions).addTo(map);
    }

    map.whenReady(function (e) {
        // go to the specified map
        if (MAP_NAME_PARAM) {
            let m = getMapForName(MAP_NAME_PARAM);
            if (m) {
                m.zindex = 777;
                map.fitBounds(m.bounds);
            }
        }

        loadMaps();

        if (loadTracksRequired) {
            setTimeout(loadTracks, 1000);
        }

        setInterval(checkMapsLoad, 1000);

        loadCalendar();

        loadPOI();
    });

    let timelineEl = document.getElementById("timeline");
    if (timelineEl) {
        timelineEl.checked = !timeline;
    }

    // --- call center
    if (!hiddenButtonsMode) {
        L.easyButton({
            position: 'bottomright',
            leafletClasses: false,
            states: [{
                stateName: 'call-icon',
                icon: 'call-icon',
                title: 'Группа поддержки',
                onClick: callCenter
            }]
        }).addTo(map);
    }

    // --- собрать все контролы в единую рейку (js/map-rail.js) ---
    if (typeof buildMapRail === 'function') {
        buildMapRail(map);
    }
} else {
    loadMaps();
}

async function loadPOI() {
    if (typeof poi != 'undefined' && typeof poiLayer != 'undefined') {
        for (const p of poi) {
            p.poi = true;
            if (!p.image && p.logo) {
                p.image = `./logo/${p.logo}`;
            }
            const iconProps = {
                iconUrl: p.image, //shadowUrl: './images/event_cp.webp',
                //iconSize: [38, 95], // size of the icon
                //shadowSize: [50, 64], // size of the shadow
                iconAnchor: [40, 40], // point of the icon which corresponds to marker's location
                //shadowAnchor: [4, 62], // the same for the shadow
                popupAnchor: [0, -40] // point from which the popup should open relative to the iconAnchor
            };
            if (!iconProps.iconUrl) {
                iconProps.iconUrl = './logo/o-maps.webp';
                iconProps.iconSize = [75, 75];
            }
            Object.assign(iconProps, p);
            const icon = L.icon(iconProps);
            const m = getMapForName(p.map);
            const popup = buildEventPopup(p, m);
            createMarker(p.coord, icon, popup, poiLayer);
        }
    }
}

async function loadCalendar() {
    if (typeof oEvents !== 'undefined' && typeof calendarGroup !== 'undefined') {
        filterEvents(oEvents, false).reverse().forEach(evt => {
            if (validateEvent(evt)) {
                createEventMarkers(evt)
            }
        });
    }
}

function createEventMarkers(evt) {
    if (evt.coord) {
        createEventMarker(evt, null);
    } else {
        let evtMaps = evt.map;
        if (evtMaps) {
            if (!Array.isArray(evtMaps)) {
                evtMaps = [evtMaps];
            }
            for (const evtMap of evtMaps) {
                createEventMarker(evt, evtMap);
            }
        }
    }
}

function createEventMarker(evt, evtMap) {
    const currentDate = new Date(evt.date);
    let now = new Date();

    let evtCPimage = './images/event_marker';
    if (isActual(currentDate)) {
        evtCPimage += '_now';
    } else if (currentDate < now) {
        evtCPimage += '_old';
    }
    if (evt.type && evt.type.includes('WATER')) {
        evtCPimage += '_water';
    } else
    if (evt.type && (evt.type.includes('ROGAINE') || evt.type.includes('MULTI') || evt.type.includes('TOURISM'))) {
        evtCPimage += '_rogaine';
    } else
    if (evt.type && evt.type.includes('SKI')) {
        evtCPimage += '_ski';
    } else
    if (evt.type && evt.type.includes('VELO')) {
        evtCPimage += '_velo';
    }

    evtCPimage += '.png';
    var cpIcon = L.icon({
        iconUrl: evtCPimage,
        //shadowUrl: './images/event_cp.webp',
        //iconSize: [38, 95], // size of the icon
        //shadowSize: [50, 64], // size of the shadow
        iconAnchor: [20, 60], // point of the icon which corresponds to marker's location
        //shadowAnchor: [4, 62], // the same for the shadow
        popupAnchor: [-6, -62] // point from which the popup should open relative to the iconAnchor
    });

    let mapCoords;
    const m = getMapForName(evtMap);
    if (evt.coord) {
        mapCoords = evt.coord;
    } else {
        if (!m) {
            return;
        }
        const x = (m.bounds[0][0] + m.bounds[2][0])/2;
        const y = (m.bounds[0][1] + m.bounds[1][1])/2;
        mapCoords = [x, y];
    }
    const popup = buildEventPopup(evt, m);
    createMarker(mapCoords, cpIcon, popup, currentDate < now ? calendarPastGroup : calendarGroup);
}

function createMarker(coords, icon, popup, layer) {
    if (coords) {
        const marker = L.marker([coords[0],
                                 coords[1]], {icon: icon});
        marker.bindPopup(popup, {maxWidth: popupWidth});
        marker.addTo(layer);
    }
}

async function processYearSlider(years, vals) {
    let values = vals.split(',');
    let start = Number(values[0]);
    let end = Number(values[1]);
    if (timeline) {
        end = start;
    }
    for (let y of years) {
        let year = Number(y);
        if (year < start || year > end) {
            removeFromArray(activeLayers, ageGroups[y]);
        } else {
            if (!activeLayers.includes(ageGroups[y])) {
                activeLayers.push(ageGroups[y]);
            }
        }
    }
    syncMaps();
}

function checkMapsLoad() {
    if (needToSync) {
        syncMaps();
        needToSync = false;
    }

    if (imagesLoadCounter <= 0) {
        hideSpinner();

        if (!loaded) {
            loaded = true;

            // --- year slider (https://github.com/slawomir-zaziablo/range-slider) ---
            let yearSliderEl = document.getElementById("year_slider");
            if (yearSliderEl) {
                yearSliderEl.parentElement.style.display = 'block';
                let years = Object.keys(ageGroups);
                let wideScreen = false; //window.innerWidth > 1000;
                let yearSlider = new rSlider({
                    target: '#year_slider',
                    values: years,
                    range: !timeline,
                    set: timeline ? [YEAR_PARAM ?? years[years.length - 1]] : [years[0], years[years.length - 1]],
                    labels: wideScreen,
                    tooltip: !wideScreen,
                    onChange: function (vals) {
                        processYearSlider(years, vals);
                    }
                });
            }

            for (const m of oMaps) {
                applyMapStyles(m);
            }

            // go to the specified map
            if (MAP_NAME_PARAM) {
                locateForUrl(MAP_NAME_PARAM);
            }
        }
    } else {
        showSpinner();
    }
}

tuneContextMenu();

//buildMapsCSV(oMaps); //, 'VYBORG'

// --- functions ---

function skipMapLoad(m, forse) {

    if (HAS_ONLY_WO_AUTHOR_PARAM && m.author) {
        return true;
    }

    if (HAS_ONLY_WO_FULL_PARAM && m.link) {
        return true;
    }

    if (HAS_RESTRICTED_PARAM && !m.restricted) {
        return true;
    }

    if (HAS_OCAD_PARAM && !hasOCAD(m)) {
        return true;
    }

    if (HAS_ORDERS_PARAM && !m.order) {
        return true;
    }

    let y = year(m);
    if (HAS_RETRO_PARAM && (y === null || y >= 1990)) {
        return true;
    }

    if (!forse) { // the specified start maps filtering
        if (START_NAME_PARAM) {
            if (START_NAME_PARAM === 'major') {
                if (!isMajor(m)) {
                    return true;
                }
            } else if (!checkStartMap(START_NAME_PARAM, m)) {
                return true;
            }
        }
        if (REGION_NAME_PARAM && REGION_NAME_PARAM !== m.region) {
            return true;
        }
    }

    // the specified author maps filtering
    if (AUTHOR_PARAM) {
        if (Array.isArray(m.author)) {
            let own = false;
            for (const a of m.author) {
                if (AUTHOR_PARAM === a) {
                    own = true;
                    break;
                }
            }
            if (!own) return true;
        } else {
            if (AUTHOR_PARAM !== m.author) return true;
        }
    }

    // the specified owner maps filtering
    if (OWNER_PARAM) {
        if (Array.isArray(m.owner)) {
            let own = false;
            for (const o of m.owner) {
                if (OWNER_PARAM === o) {
                    own = true;
                    break;
                }
            }
            if (!own) return true;
        } else {
            if (OWNER_PARAM !== m.owner) return true;
        }
    }

    // the specified planner maps filtering
    if (PLANNER_PARAM) {
        if (Array.isArray(m.planner)) {
            let own = false;
            for (const o of m.planner) {
                if (PLANNER_PARAM === o) {
                    own = true;
                    break;
                }
            }
            if (!own) return true;
        } else {
            if (PLANNER_PARAM !== m.planner) return true;
        }
    }

    if (HAS_ONLY_ME_PARAM && !m.me) {
        return true;
    }

    return false;
}

function loadMap(m, forse) {
    m.loaded = true;

    if (skipMapLoad(m, forse)) {
        return;
    }

    // На мелком масштабе карта всё равно показывается оливом, поэтому
    // настоящую картинку не качаем: слой строится сразу, а syncMaps()
    // поставит ему olive до первого добавления на карту.
    const smallZoom = map && !showMapsOnSmallZoom && map.getZoom() <= EMPTY_MAPS_ZOOM_LEVEL;
    if (loadImagesRequired && !smallZoom) {
        loadMapImage(m);
    } else {
        buildMap(m);
        needToSync = true;
    }
}

function loadMapImage(m) {
    imagesLoadCounter++;
    m.img = new Image();
    m.img.src = mapImageUrl(m);
    m.img.onerror = function () {
        notificationControl.warning('Ошибка загрузки карты "' + m.name + '". Попробуйте обновить страницу.');
    }
    m.img.onload = function () {
        buildMap(m);
        imagesLoadCounter--;
        needToSync = true;
    }
}

function buildMap(m) {
    if (!m.bounds) {
        return;
    }

    let bounds = m.bounds;
    if (bounds.length === 1) {
        bounds.push([bounds[0][0],[bounds[0][1] + 0.02]]);
        bounds.push([bounds[0][0] - 0.01,bounds[0][1]]);
        m.bounds = bounds;
    }
    let latLngs = [
        L.latLng(bounds[0]),
        L.latLng(bounds[1]),
        L.latLng(bounds[2])
    ];
    let imgLayer = L.imageOverlay.rotated(
        mapImageUrl(m), latLngs[0], latLngs[1], latLngs[2],
        {
            opacity: 1,
            interactive: true,
            alt: m.name
        });
    m.layer = imgLayer;
    imgLayer.map = m;
    m._llb = undefined; // габарит теперь считается по углам слоя

    if (!m.area && latLngs && latLngs[1]) {
        m.area = getMapArea(latLngs);
    }

    // map popup
    const popup = buildMapPopup(m);
    imgLayer.bindPopup(popup, {maxWidth: popupWidth});
    imgLayer.on('mouseover', function (e) {
        if (!editMode && enablePopup) {
            this.openPopup();
        }
        if (!editMode) {
            e.originalEvent.target.classList.add('highlighted');
        }
    });
    imgLayer.on('mouseout', function (e) {
        if (!editMode) {
            e.originalEvent.target.classList.remove('highlighted');
        }
    });

    imgLayer.on('click', function (e) {
        onMapSelect(imgLayer, m);
    });

    allocateMap(m, imgLayer);

    mapOverlays.push(imgLayer);
}

function resyncMaps() {
    let visibleMapsNow = recalculateLayers();
    if (visibleMapsNow !== visibleMaps) {
        visibleMaps = visibleMapsNow;
        syncMaps();
    }
}

// добавить слой в список включённых без дублей (иначе removeFromArray
// при снятии галки уберёт лишь одну копию и слой останется «включённым»)
function activateLayer(layer) {
    if (layer && !activeLayers.includes(layer)) {
        activeLayers.push(layer);
    }
}

// show/hide maps according to the selected layers.
// Карты всех типов обрабатываются одинаково, правило видимости —
// isMapInActiveLayers() в utils.js (рогейн и необычные — без учёта годов)
function syncMaps() {
    const activeLayerIds = new Set();
    for (const layer of activeLayers) {
        if (layer && layer._leaflet_id) {
            activeLayerIds.add(layer._leaflet_id.toString());
        }
    }

    let shownMaps = [];
    let hiddenMaps = [];
    for (const m of oMaps) {
        if (m.groups && m.layer && isMapAcceptable(m)) {
            if (isMapInActiveLayers(m, activeLayerIds)) {
                shownMaps.push(m);
            } else {
                hiddenMaps.push(m);
            }
        }
    }

    if (map) {
        for (const m of hiddenMaps) {
            map.removeLayer(m.layer);
            if (m.outline) {
                outlineGroup.removeLayer(m.outline);
            }
        }
        const oliveBand = !showMapsOnSmallZoom && map.getZoom() <= EMPTY_MAPS_ZOOM_LEVEL;
        if (oliveBand !== lastOliveBand) {
            revealedMaps.clear(); // открытые кликом карты живут до перехода через порог
            lastOliveBand = oliveBand;
        }
        // В DOM держим только карты у экрана (с запасом VIEW_PAD), остальные
        // снимаем: каждый слой на карте пересчитывается на каждом кадре зума.
        const viewBounds = map.getBounds().pad(VIEW_PAD);
        let culled = 0;
        for (const m of shownMaps) {
            if (m.layer.hiddenMap) {
                // спрятана вручную через hideMap()
                if (m.outline) {
                    outlineGroup.removeLayer(m.outline);
                }
                continue;
            }
            if (oliveBand) {
                if (!revealedMaps.has(m)) {
                    outlineGroup.addLayer(ensureOutline(m));
                    map.removeLayer(m.layer);
                    continue;
                }
                // открытая кликом карта показывается картинкой, а её полигон
                // убран (см. revealMap), чтобы он не проступал под картинкой
            }
            const b = mapLatLngBounds(m);
            if (!b || !viewBounds.intersects(b)) {
                map.removeLayer(m.layer);
                culled++;
                continue;
            }
            if (!map.hasLayer(m.layer)) {
                map.addLayer(m.layer);
            }
            applyMapStyles(m);
        }
        culledMapsCount = culled;

        if (oliveBand) {
            if (!map.hasLayer(outlineGroup)) {
                map.addLayer(outlineGroup);
            }
        } else if (map.hasLayer(outlineGroup)) {
            map.removeLayer(outlineGroup);
        }

        recalculateLayers();
    }
}

// Обводка полигона мелкого масштаба — те же пометки, что applyMapStyles()
// ставит картинкам CSS-классами (.restricted, .full-size, .wo-author...)
function outlineStroke(m) {
    let s = {stroke: false, color: 'darkolivegreen', weight: 3, dashArray: null};
    if (m.restricted) {
        s = {stroke: true, color: 'deeppink', weight: 3, dashArray: null};
    } else if (enableFullSize && m.link) {
        s = {stroke: true, color: 'mediumpurple', weight: 2, dashArray: '6 4'};
    }
    if ((HAS_ONLY_WO_AUTHOR_PARAM || HAS_WO_AUTHOR_PARAM) && !m.author) {
        s = m.link
            ? {stroke: true, color: 'purple', weight: 4, dashArray: '1 6'}
            : {stroke: true, color: 'hotpink', weight: 3, dashArray: '1 5'};
    }
    return s;
}

function outlineCorners(m) {
    const tl = m.layer.getTopLeft(), tr = m.layer.getTopRight(), bl = m.layer.getBottomLeft();
    return [tl, tr, L.latLng(tr.lat + bl.lat - tl.lat, tr.lng + bl.lng - tl.lng), bl];
}

// Полигон карты для мелкого масштаба; строится лениво, один раз на карту
function ensureOutline(m) {
    if (!m.outline) {
        const pg = L.polygon(outlineCorners(m), Object.assign({
            renderer: outlineRenderer,
            fillColor: OUTLINE_FILL,
            fillOpacity: mapOpacity,
            opacity: 1,
            interactive: true
        }, outlineStroke(m)));
        pg._omOutline = true;
        pg.map = m; // обратная ссылка, как у картинки (см. buildMap)
        pg.on('click', function (e) {
            revealMap(m, e.latlng);
        });
        pg.on('mouseover', function () {
            if (!editMode) {
                pg.setStyle({stroke: true, color: 'darkolivegreen', weight: 4, dashArray: null});
            }
        });
        pg.on('mouseout', function () {
            pg.setStyle(outlineStroke(m));
        });
        m.outline = pg;
    }
    return m.outline;
}

// Клик по полигону на мелком масштабе: показать настоящую картинку этой
// карты поверх полигонов и открыть её всплывашку — как раньше клик по оливке
function revealMap(m, latlng) {
    revealedMaps.add(m);
    if (!map.hasLayer(m.layer)) {
        map.addLayer(m.layer);
    }
    applyMapStyles(m);
    onMapSelect(m.layer, m);
    m.layer.openPopup(latlng);

    // Картинка заменяет полигон, а не ложится поверх него. Полигон убираем,
    // когда картинка уже нарисована, чтобы на месте карты не мигала пустота.
    const img = m.layer._rawImage;
    if (img && img.complete && img.naturalWidth) {
        hideOutline(m);
    } else {
        m.layer.once('load error', function () {
            hideOutline(m);
        });
    }
}

function hideOutline(m) {
    if (m.outline && revealedMaps.has(m)) {
        m.outline.setStyle(outlineStroke(m)); // сбросить подсветку наведения
        outlineGroup.removeLayer(m.outline);
    }
}

// set required styles for the map elements
function applyMapStyles(m) {
    if (m.layer) {
        let el = m.layer.getElement();
        if (el) {
            if (m.zindex) {
                el.style.zIndex = m.zindex;
            } else if (isRogaine(m) && el.style.zIndex === '') {
                // рогейн-подложки — под ориент-картами (как раньше делал
                // allocateMap), пока их не подняли кликом или списком карт
                el.style.zIndex = 0;
            }
/*
            if (m.in_work) {
                el.classList.add('in-work');
            }
*/
            if (m.restricted) {
                el.classList.add('restricted');
            } else if (enableFullSize && m.link) {
                el.classList.add('full-size');
            }

            if ((HAS_ONLY_WO_AUTHOR_PARAM || HAS_WO_AUTHOR_PARAM) && !m.author) {
                if (m.link) {
                    el.classList.add('wo-author-w-full');
                } else {
                    el.classList.add('wo-author');
                }
            }
        }
    }
}

function tuneContextMenu() {
    let menuIcons = document.querySelectorAll('.leaflet-contextmenu-icon');
    menuIcons.forEach(
        (element, index, array) => {
            tuneContextMenuItem(element, 'info.png', enablePopup);
            tuneContextMenuItem(element, 'hide.png', !showMapsOnSmallZoom);
            tuneContextMenuItem(element, 'expand.png', enableFullSize);
        }
    );
}

function tuneContextMenuItem(element, icon, flag) {
    if (element.src.includes(icon)) {
        if (flag) {
            element.classList.add('selected-menu-item');
        } else {
            element.classList.remove('selected-menu-item');
        }
    }
}

function mapTitle(m, forStart, colored, events) {
    let result = '';
    if (m.gpx) { // трек
        result += '<span class="' + m.type[0] + '">';
    }
    if (m.about && !forStart) {
        result += `<a href="${m.about}">`;
    }
    result += m.name ?? 'Нечто';
    if (m.about && !forStart) {
        result += '</a>';
    }
    let y = year(m);
    if (y) {
        let year = y > 1 ? y : 'ретро';
        let sy = startYear(m, events);
        if (forStart && sy) {
            year = sy;
        }
        if (m.correct) {
            year += ', корректировка ' + m.correct;
        }
        result += '&nbsp;(' + year + ')';
    }
    if (HAS_ME_PARAM && m.me) {
        result += ` <sup class="my-race">${m.me}</sup>`;
    }
    if (m.gpx) {
        result += '</span>';
    }
    if (forStart && 'REPORT' === m.start) {
        result += '. Отчёт'
    }
    return result;
}

function buildMapPopup(m) {

    const events = findEventsForMap(m, true); // все эвенты для карты

    let result = '<div class="popup-header popup-left-header">O-MAPS</div>';
    let typesList = getTypesList(m);
    if (typesList) {
        result += '<div class="popup-header popup-right-header">' + typesList + '</div>';
    }

    // иконка
    let logo = logoList(m);
    logo.forEach((value, idx, arr) => {
        arr[idx] = 'logo/' + arr[idx];
    });
    if (m.photo) {
        logo.push(m.photo);
    }
    if (!logo.length) {
        logo.push('logo/o-maps.webp');
    }
    if (logo.length >= 2 && !isMobile) {
        let carousel = LOGO_CAROUSEL_TEMPLATE.replace('image_1', logo[0]);
        carousel = carousel.replace('image_2', logo[1]);
        result += carousel;
    } else if (logo.length > 0) {
        result += '<img src="./' + logo[0] + '" alt="Лого" class="popup-logo" />';
    }
    if (isMobile) {
        result += '<br />';
        result += '<div class="mobile-popup-text">';
    } else {
        result += '<div class="popup-text">';
    }

    // имя
    result += '<b>' + mapTitle(m, false, false, events);

    // площадь
    let area = m.area ? m.area.toFixed(2) : '';
    result += '&nbsp;-&nbsp;' + area + '&nbsp;км<sup>2</sup>';

    // ссылка на страничку инфа
    const url = getMapUrl(m);
    result += buildMapInfo(url);

    result += '</b><hr />';

    // инфа о карте
    let info = '';

    if (m.type && m.type.includes('FOTO')) {
        info += '<b>Фото-ориентирование.</b>';
    }

    let dates = getMapDates(m);
    if (dates) {
        info += `<b>${dates}.</b> `;
    }
    if (m.start) {
        info += '<b>' + getMapStarts(m) + '</b> ';
    }
    if (m.info) {
        info += m.info;
    }
    if (info) {
        info += '<br />';
    }

    info += buildMapEventsDescription(m, events);

    // ссылки на результаты
    const mapResults = [];
    if (m.results) {
        if (m.results.length > 0) {
            info += ` ${buildLinksWithLabel(m.results, 'Результаты')} <br />`;
        } else {
            info += `Результаты: ${buildEventResults(m)} <br />`;
        }
    }

    // ссылки на информацию на o-Site
    //info += buildOSiteInfo(events);

    // ссылки на публикацию карт
    info += buildPublish(m);
    if (info) {
        result += info;
    }

    // авторы-составители
    if (m.author) {
        if (Array.isArray(m.author)) {
            result += 'Авторы-составители карты:';
        } else {
            result += 'Автор-составитель карты: ';
        }
        result += buildAuthors(m);
    }

    // редакторы
    if (m.editor) {
        result += 'Редактирование карты: ';
        result += buildEditors(m);
    }

    // владелец
    const owner = getOwner(m);
    if (owner) {
        if (Array.isArray(owner)) {
            result += 'Владельцы:';
        }
        result += buildOwners(m);
    } else {
        result += 'Владелец карты не указан.<br />';
    }

    // закрытый район
    if (m.restricted) {
        result += getRestrictedText(m) + '<br />';
    }

    // GPS-трансляция
    const gpsLinks = buildGpsLinks(m, 'o-gps.gif');
    if (gpsLinks) {
        result += `<span class="gps-info"> GPS-трансляция: ${gpsLinks}</span><br />`;
    }

    // запрос на редактуру
    result += buildOrderPanel(m);

    // OCAD
    if (hasOCAD(m)) {
        result += `<div class="popup-order-section">⚠️ Если Вы скачали тут файл с картой и откорректировали его, то пожалуйста <a href="help/contacts.html">пришлите</a> его обратно. Мы опубликуем, чтобы и другие могли воспользоваться Вашей правкой.</div><br />`;
    }

    // ссылки на просмотр и скачивание
    let link = m.link;
    if (!m.in_work || m.link) {
        if (link && !isMapHidden(m)) {
            if (!Array.isArray(link) && link.startsWith('http')) {
                result += 'Скачать можно <a href="' + link + '">тут</a>.';
            } else {
                result += 'Скачать можно тут: ' + buildDownloadLinks(link) + '.';
            }
        } else {
            if (isMapHidden(m)) {
                result += 'Просмотр карты не разрешён правообладателем или не уместен.';
            } else {
                result += 'Предпросмотр карты - <a href="' + url + '">тут</a>.';
            }
        }
    }
    if (!isMapHidden(m)) {
        let mapLinkUrl = mapLink(url);
        let onclick = 'onclick="copyToClipboard(\'' + mapLinkUrl + '\'); return false;"';
        result += '<br />Поделиться <a href="' + mapLinkUrl + '">ссылкой</a> на карту: <a href="#" ' + onclick + '><img src="./images/copy.png" alt="Copy" title="Copy" style="margin-bottom: -3px;" /></a>';
    }

    // Есть в наличии
    if (m.qtty) {
        result += '<br />Есть в наличии бумажные копии: ' + m.qtty + 'шт.';
    }

    // скрыть карту
    let onclick = 'onclick="hideMap(map, \'' + url + '\', ' + isMapHidden(m) + ', \'' + m.name + '\', ' + year(m) + '); return false;"';
    result += '<br /><div class="hide-map-link"><a href="#" ' + onclick + '>Скрыть эту карту</a></div>';

    if (logo) {
        result += '</div>';
    }

    return result;
}

function buildMapEventsDescription(m, events) {
    let result = '';
    if (events) {
        let idx = 1;
        for (const e of events) {
            if (e !== m) {
                if (idx++ > 5) break;
                result += buildEventDescription(e) + '<br />';
            }
        }
        if (idx > 6) {
            const mapInfoLink = './map-info.html?map=' + extractFileName(m.url);
            result += `...${buildOneLink(mapInfoLink, "полный список стартов.")} <br />`;
        }
    }
    return result;
}

function buildEventDescription(e, withPlanner) {
    let info = '';
    let dates = buildEventDate(e, true, true);
    if (dates) {
        info += `<b>${dates}</b>, `;
    }

    const logo = logoList(e);
    if (logo.length > 0) {
        info += `<img src="./logo/${logo[0]}" alt="Лого" class="sheet-icon" /> `;
    }

    let link = e.link;
    if (!link && e.o_site) {
        link = O_SITE_ADDRESS_PREFIX + e.o_site;
    }
    if (link) {
        info += buildOneLink(link, e.name);
    } else {
        info += e.name;
    }
/*
    if (e.start) {
        info += '<b>' + getMapStarts(e) + '</b> ';
    }
    if (e.info) {
        info += e.info;
    }
*/
    if (e.link) {
        info += ' ' + buildOSiteInfo(e);
    }
    info += ' ' + buildEventResults(e);
    info += ' ' + buildGpsLinks(e, 'o-gps.gif', null, true);
    info += ' ' + buildPublish(e, '🗺️');

    // начдист
    if (withPlanner && typeof planners !== 'undefined') {
        const plannersInfo = buildPlanners(e, null, true);
        if (plannersInfo) {
            info += ', нач-дист: ' + plannersInfo;
        }
    }

    return info;
}

function buildEventPopup(evt, m) {

    let result = '<div class="popup-header popup-left-header">O-MAPS</div>';
    result += '<div class="popup-header popup-right-header">' + buildEventType(evt, false) + '</div>';

    // логотип
    const logo = logoList(evt);
    logo.forEach((value, idx, arr) => {
        arr[idx] = 'logo/' + arr[idx];
    });
    if (!logo.length) {
        logo.push('logo/o-maps.webp');
    }
    if (logo.length >= 2) {
        let carousel = LOGO_CAROUSEL_TEMPLATE.replace('image_1', logo[0]);
        carousel = carousel.replace('image_2', logo[1]);
        result += carousel;
    } else if (logo.length === 1) {
        result += '<img src="./' + logo[0] + '" alt="Лого" class="popup-logo" />';
    }
    if (isMobile) {
        result += '<br />';
        result += '<div class="mobile-popup-text">';
    } else {
        result += '<div class="popup-text">';
    }

    // имя
    result += '<b>' + buildEventStart(evt, true);

    result += '</b><hr />';

    // дата
    let info = '';
    let d = buildEventDate(evt);
    let sy = startYear(evt);
    if (d && sy) {
        info += `<b>${d} ${sy}</b>. `;
    }

    // место
    if (evt.place) {
        let place = `${evt.place}. `;
        if (evt.poi) {
            place = `<b>${place}</b><br />`
        }
        info += place;
    }

    // формат
    if (evt.fmt) {
        info += (getEventType(evt).includes('ROGAINE') ? 'Рогейн ' : '') + capitalize(evt.fmt) + '. ';
    }
    if (evt.info) {
        info += evt.info;
    }
    if (evt.couches) {
        info += '<br />Тренеры:' + buildCouches(evt);;
    }
    if (info) {
        result += info + '<br />';
    }

    // Результаты
    const res = buildEventResults(evt);
    if (res) {
        result += 'Результаты: ' + res + '<br/>';
    }

    // GPS-трансляция
    if (getGPS(evt)) {
        result += '<span class="gps-info"><img src="./images/o-gps.gif" alt="GPS" /> ';
        result += 'GPS-трансляция: ' + buildGpsLinks(evt);
        result += '.</span><br />';
    }

    // Отчёты
    const reports = buildEventReports(evt, false);
    if(reports) {
        result += 'Отчёты: ' + reports + '<br/>';
    }

    // автор-составитель
    if (m && m.author) {
        if (Array.isArray(m.author)) {
            result += 'Авторы-составители карты:';
        } else {
            result += 'Автор-составитель карты: ';
        }
        result += buildAuthors(m);
    }

    if (logo) {
        result += '</div>';
    }

    return result;
}

function getRestrictedText(m) {
    return `<span class="restricted-text">Район закрыт ${m.restricted} ${!m.restricted.endsWith('!') ? '.' : ''}</span>`;
}

function buildAuthors(m, withIcon, forOrder) {
    let result = '';
    const author = forOrder ? (m.order ? m.order.author : null) : m.author;
    if (author) {
        if (Array.isArray(author)) {
            result += '<ol>'
            for (const a of author) {
                if (authors[a]) {
                    result += '<li>';
                    if (withIcon && authors[a].logo) {
                        result += '<img src="./logo/' + authors[a].logo + '" alt="Лого" class="sheet-icon" /> ';
                    }
                    result += authorLabel(authors[a]);
                    if (m.areas) {
                        let idx = author.indexOf(a);
                        result += ' (' + m.areas[idx] + '%)';
                    }
                    result += '</li>';
                    populateAuthor(m, a);
                }
            }
            result += '</ol>'
        } else {
            if (authors[author]) {
                if (withIcon && authors[author].logo) {
                    result += '<img src="./logo/' + authors[author].logo + '" alt="Лого" class="sheet-icon" /> ';
                }
                result += authorLabel(authors[author]) + '<br />';
                populateAuthor(m, author);
            }
        }
    }
    return result;
}

function buildEditors(m, withIcon) {
    let result = '';
    if (Array.isArray(m.editor)) {
        result += '<ol>'
        for (const a of m.editor) {
            if (authors[a]) {
                result += '<li>';
                if (withIcon && authors[a].logo) {
                    result += '<img src="./logo/' + authors[a].logo + '" alt="Лого" class="sheet-icon" /> ';
                }
                result += authorLabel(authors[a]);
                if (m.areas) {
                    let idx = m.editor.indexOf(a);
                    result += ' (' + m.areas[idx] + '%)';
                }
                result += '</li>';
                //populateeditor(m, a);
            }
        }
        result += '</ol>'
    } else {
        if (authors[m.editor]) {
            if (withIcon && authors[m.editor].logo) {
                result += '<img src="./logo/' + authors[m.editor].logo + '" alt="Лого" class="sheet-icon" /> ';
            }
            result += authorLabel(authors[m.editor]) + '<br />';
            //populateeditor(m, m.editor);
        }
    }
    return result;
}

function buildOwners(m, withIcon) {
    let result = '';
    let owner = getOwner(m);
    if (!owner && m.start && starts[m.start]) { // TODO добавить обработку массивов
        owner = starts[m.start].owner;
    }
    if (Array.isArray(owner)) {
        result += '<ol>'
        for (const o of owner) {
            if (owners[o]) {
                result += '<li>' + owners[o].name + '</li>';
            }
        }
        result += '</ol>'
    } else {
        if (owners[owner]) {
            if (withIcon && owners[owner].logo) {
                result += '<img src="./logo/' + owners[owner].logo + '" alt="Лого" class="sheet-icon" /> ';
            }
            result += owners[owner].name + '<br />';
        }
    }
    return result;
}

function buildDownloadLinks(link, links) {
    let result = '';
    if (link || links) {
        let linksList = [];
        if (links) {
            for (let d = 1; d <= links[1]; d++) {
                let ext = links.length > 2 ? links[2] : 'jpg';
                let url = 'docs/' + links[0] + '/doc_' + d + '_omaps.' + ext;
                linksList.push(url);
            }
        } else {
            linksList = link;
            if (!Array.isArray(link)) {
                linksList = [link];
            }
        }
        linksList.forEach(function (value, index, array) {
            if (index > 0) {
                result += ', ';
            }
            result += '<a href="' + value + '" class="ext-link" title="Скачать" target="_blank"><img src="./images/' + downloadIconExt(value) + '-file.png" alt="Скачать" /></a>';
        })
    }
    return result;
}

function populateAuthor(m, a) {
    if (!m.excluded) {
        let author = authors[a];
        if (!author.count) {
            author.count = 1;
        } else {
            author.count++;
        }
        let area = m.area;
        if (Array.isArray(m.author)) {
            if (m.areas) {
                let idx = m.author.indexOf(a);
                area *= m.areas[idx] / 100;
            } else {
                area /= m.author.length;
            }
        }
        if (!author.area) {
            author.area = area;
        } else {
            author.area += area;
        }
    }
}

function onMapSelect(ovrl, m) {
    selectedOverlay = ovrl;
    selectedMap = m;

    ovrl.setUrl(mapImageUrl(m));
    upZindex(ovrl);

    if (editMode) {
        marker1.setLatLng(ovrl.getTopLeft());
        marker2.setLatLng(ovrl.getTopRight());
        marker3.setLatLng(ovrl.getBottomLeft());
    }
}

// --- поиск мест (топонимов, адресов) --------------------------------------
// Геокодер Photon (photon.komoot.io, данные OSM): рассчитан на подсказки по мере
// ввода, в отличие от Nominatim, чьи правила автодополнение запрещают.
// Результаты смещаются к текущему центру карты, поэтому работают на всех регионах.

const GEO_URL = 'https://photon.komoot.io/api/';
const GEO_MIN_CHARS = 3;
const GEO_DELAY = 350;  // мс паузы в наборе перед запросом
const GEO_LIMIT = 6;

let geoTimer = null;
let geoAbort = null;
let geoSeq = 0;
let geoCache = new Map();
let placeMarker = null;

// callback(value, places) вызывается только для последнего запроса
function geoSuggest(value, callback) {
    geoCancel();
    let q = value.trim();
    // число — это поиск карт по году, координаты разбирает searchMap()
    if (q.length < GEO_MIN_CHARS || /^\d+$/.test(q) || parseCoordinates(q)) {
        return;
    }
    let c = map.getCenter();
    let key = q.toLocaleLowerCase() + '|' + c.lat.toFixed(1) + '|' + c.lng.toFixed(1);
    if (geoCache.has(key)) {
        callback(value, geoCache.get(key));
        return;
    }
    let seq = geoSeq;
    geoTimer = setTimeout(function () {
        geoTimer = null;
        let params = new URLSearchParams({
            q: q,
            limit: GEO_LIMIT,
            lang: 'default',                 // местные названия (по-русски в России)
            lat: c.lat.toFixed(4),
            lon: c.lng.toFixed(4),
            zoom: Math.min(map.getZoom(), 14),
            location_bias_scale: 0.1,         // меньше — сильнее тянет к центру карты
        });
        geoAbort = new AbortController();
        fetch(GEO_URL + '?' + params, {signal: geoAbort.signal})
            .then(r => r.ok ? r.json() : Promise.reject(r.status))
            .then(data => {
                let places = geoPlaces(data);
                geoCache.set(key, places);
                if (seq === geoSeq) {
                    callback(value, places);
                }
            })
            .catch(err => {
                if (err && err.name !== 'AbortError') {
                    console.warn('Геокодер недоступен:', err);
                }
            });
    }, GEO_DELAY);
}

function geoCancel() {
    geoSeq++;
    if (geoTimer) {
        clearTimeout(geoTimer);
        geoTimer = null;
    }
    if (geoAbort) {
        geoAbort.abort();
        geoAbort = null;
    }
}

const GEO_KINDS = {
    city: 'город', town: 'город', village: 'нас. пункт', hamlet: 'нас. пункт',
    isolated_dwelling: 'нас. пункт', locality: 'урочище',
    suburb: 'район', quarter: 'район', neighbourhood: 'район',
    station: 'станция', halt: 'платформа', stop: 'платформа',
    lake: 'водоём', reservoir: 'водоём', pond: 'водоём',
    river: 'река', stream: 'ручей', canal: 'канал',
    peak: 'вершина', hill: 'холм', island: 'остров', islet: 'остров',
    wood: 'лес', forest: 'лес', park: 'парк', nature_reserve: 'заказник',
    wetland: 'болото', bay: 'залив', cape: 'мыс',
};
const GEO_TYPES = {street: 'улица', district: 'район', county: 'район'};

// GeoJSON Photon → [{name, context, kind, lat, lng, bounds}], без повторов
function geoPlaces(data) {
    let result = [];
    let seen = new Set();
    for (const f of (data && data.features) || []) {
        let p = f.properties || {};
        let [lng, lat] = f.geometry.coordinates;
        let addr = [p.street, p.housenumber].filter(Boolean).join(', ');
        let name = p.name || addr || p.city;
        if (!name) {
            continue;
        }
        let context = [];
        for (const s of [p.name ? addr : '', p.city || p.county, p.state]) {
            if (s && s !== name && !context.includes(s)) {
                context.push(s);
            }
        }
        let kind = GEO_KINDS[p.osm_value]
            || (p.type === 'house' ? (p.name ? '' : 'адрес') : GEO_TYPES[p.type]) || '';
        let sig = name + '|' + context.join('|') + '|' + kind;
        if (seen.has(sig)) {
            continue;
        }
        seen.add(sig);
        let e = p.extent; // [minLon, maxLat, maxLon, minLat]
        result.push({
            name: name,
            context: context.join(', '),
            kind: kind,
            lat: lat,
            lng: lng,
            bounds: e ? L.latLngBounds([e[3], e[0]], [e[1], e[2]]) : null,
        });
    }
    return result;
}

function placeItemHtml(p) {
    let html = '<span class="om-search-dot om-search-dot-place"></span>' + escapeXml(p.name);
    if (p.kind) {
        html += ' <span class="om-search-kind">' + escapeXml(p.kind) + '</span>';
    }
    if (p.context) {
        html += ' <span class="om-search-ctx">' + escapeXml(p.context) + '</span>';
    }
    return html;
}

function locatePlace(p) {
    let latLng = L.latLng(p.lat, p.lng);
    let b = p.bounds;
    // у точечных объектов и зданий extent крошечный — берём фиксированный масштаб
    if (b && map.getBoundsZoom(b) < 16) {
        map.fitBounds(b);
    } else {
        map.setView(latLng, 16);
    }

    if (placeMarker) {
        placeMarker.remove();
    }
    placeMarker = L.circleMarker(latLng, {
        radius: 9,
        color: '#c62828',
        weight: 3,
        fillColor: '#ffffff',
        fillOpacity: 0.6,
        interactive: true,
        bubblingMouseEvents: false,
    }).bindTooltip(escapeXml(p.name), {direction: 'top', offset: [0, -8]})
      .addTo(map);
    placeMarker.openTooltip();
    placeMarker.on('click', function () { // клик по кружку убирает его
        placeMarker.remove();
        placeMarker = null;
    });
}

function onMapClick(e) {
    let coordinate = fixCoord(e.latlng.lat) + ", " + fixCoord(e.latlng.lng);
    copyToClipboard(coordinate);
    searchBox.hide();
}

function repositionImage(doLog) {
    let point1 = marker1.getLatLng();
    let point2 = marker2.getLatLng();
    let point3 = marker3.getLatLng();
    if (doLog) {
        let coordinates = `[[${fixCoord(point1.lat)}, ${fixCoord(point1.lng)}], [${fixCoord(point2.lat)}, ${fixCoord(point2.lng)}], [${fixCoord(point3.lat)}, ${fixCoord(point3.lng)}]],`;
        copyToClipboard(coordinates);
    }
    if (selectedOverlay) {
        selectedOverlay.reposition(point1, point2, point3);
        if (selectedOverlay.map) {
            selectedOverlay.map._llb = undefined; // углы сдвинулись — пересчитать габарит
            if (selectedOverlay.map.outline) {
                selectedOverlay.map.outline.setLatLngs(outlineCorners(selectedOverlay.map));
            }
        }
    }
}

function onDrag() {
    repositionImage(false);
}

function onDragEnd() {
    repositionImage(true);
}

// --- context menu functions ---

function showCoordinates(e) {
    copyToClipboard(coordLink(e.latlng));
    alert(`Текущие координаты: ${fixCoord(e.latlng.lat)}, ${fixCoord(e.latlng.lng)}`);
}

function shareMap(e) {
    const url = new URL(window.location.href);
    const searchParams = url.searchParams;
    searchParams.append('x', fixCoord(e.latlng.lat));
    searchParams.append('y', fixCoord(e.latlng.lng));
    searchParams.append('zoom', map.getZoom());
    url.searchParams = searchParams;
    const url2share = url.href;

    copyToClipboard(url2share);
    notificationControl.info(`Ссылка скопирована в буфер обмена.`);
}

function centerMap(e) {
    map.panTo(e.latlng);
}

function hideOrients(e) {
    for (const g of allOrientGroups) {
        map.removeLayer(g);
    }
}

function clearAges(e) {
    for (const g of allAgeGroups) {
        map.removeLayer(g);
    }
}

function showAllOrients(e) {
    for (const g of allOrientGroups) {
        map.addLayer(g);
    }
}

function showAllAges(e) {
    for (const g of allAgeGroups) {
        map.addLayer(g);
    }
}

function zoomIn(e) {
    map.zoomIn();
}

function zoomOut(e) {
    map.zoomOut();
}

function editModeSwitch(e) {
    editMode = !editMode;
    if (!editMode) {
        marker1.setLatLng(ZERO_LATLNG);
        marker2.setLatLng(ZERO_LATLNG);
        marker3.setLatLng(ZERO_LATLNG);
        setOverlayOpacity(1);
    } else {
        setOverlayOpacity(.5);
    }
    if (opacitySlider) {
        opacitySlider.setValue(mapOpacity);
    }
    // map.removeControl(opacitySlider);
}

function popupsSwitch(e) {
    enablePopup = !enablePopup;
    tuneContextMenu();
}

function hideMapsSwitch(e) {
    showMapsOnSmallZoom = !showMapsOnSmallZoom;
    localStorage.setItem('showMapsOnSmallZoom', showMapsOnSmallZoom);
    location.reload();
}

function fullSizeSwitch(e) {
    enableFullSize = !enableFullSize;
    localStorage.setItem('enableFullSize', enableFullSize);
    location.reload();
}

function timelineSwitch(e) {
    timeline = !timeline;
    localStorage.setItem('timeline', timeline);
    location.reload();
}

function openStats() {
    location.href = CHARTS_PAGE;
}

function downloadSheet() {
    location.href = SHEET_PAGE;
}

function contextMenu() {
    map.contextmenu.showAt(L.point(60, 250));
}

function callCenter() {
    window.open('tg://resolve?domain=o_maps', '_blank').focus();
}
