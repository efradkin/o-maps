const ZERO_LATLNG = new L.LatLng(0, 0);

const multiX = 1e-5;
const multiY = 2e-5;

let map;
let layerControl;
let opacitySlider;
let notificationControl;
let overlayMapsContents;
let marker1, marker2, marker3;
let loaded = false;

let maxZindex = 1;
let enablePopup = false;

let editMode = false;
let mapOpacity = 1;
let imagesLoadCounter = 0;
let selectedOverlay, selectedMap;
let visibleMaps;

let hideMapsOnMove = false;
let hmo = localStorage.getItem('hideMapsOnMove');
if (hmo != null) {
    hideMapsOnMove = (hmo === 'true');
}
let enableFullSize = false;
let efs = localStorage.getItem('enableFullSize');
if (efs != null) {
    enableFullSize = (efs === 'true');
}
let hiddenButtonsMode = false;
let hbm = localStorage.getItem('hiddenButtonsMode');
if (hbm != null) {
    hiddenButtonsMode = (hbm === 'true');
}
let timeline = false;
let tl = localStorage.getItem('timeline');
if (tl != null) {
    timeline = (tl === 'true');
}

let mapOverlays = [];

// Prepare the structures and overlay the maps
// Firstly load the specified map
if (MAP_NAME_PARAM) {
    let m = getMapForName(MAP_NAME_PARAM);
    if (m) {
        loadMap(m);
    }
}
for (const m of oMaps) {
    loadMap(m);
}

const defaultZoom = 13;

let searchBox;
if (mapElement) {

    let savedState;
    if (!MAP_NAME_PARAM) {
        savedState = loadMapState(REGION_KEY);
    }
    if (MAP_NAME_PARAM) {
        let m = getMapForName(MAP_NAME_PARAM);
        if (m) {
            let mapType = m.types;
            if (mapType && (mapType.includes('ROGAINE') || mapType.includes('FUN'))) {
                activeLayers.push(funGroup, rogaineGroup);
            } else
            if (m.year && m.year < 2000) {
                activeLayers.push(groupRetro, group90th);
            }
        }
    }
    map = L.map('map', {
        attributionControl: false,
        zoomControl: false,
        minZoom: 9,
        maxZoom: 16,
        center: savedState ? [savedState.lat, savedState.lng] : [centerX, centerY],
        zoom: savedState ? savedState.zoom : defaultZoom,
        layers: activeLayers,
        contextmenu: true,
        contextmenuWidth: 190,
        contextmenuItems: buildContextmenuItems()
    });

    // --- notifications (https://gitlab.com/manuel.richter95/leaflet.notifications)
    notificationControl = L.control
        .notifications({
            timeout: 10000,
            className: 'modern',
            position: 'topright',
            closable: true,
            dismissable: true,
        }).addTo(map);

    let savedLayers;
    map.on('movestart', function() {
        savedLayers = [];
        if (hideMapsOnMove && visibleMaps > 200) {
            map.eachLayer(function (layer) {
                if (layer instanceof L.ImageOverlay) {
                    savedLayers.push(layer);
                    map.removeLayer(layer);
                }
            })
        }
    });
    map.on('moveend', function() {
        if (savedLayers) {
            for (const l of savedLayers) {
                map.addLayer(l);
            }
        }
    });

    map.on('click', onMapClick);
    map.on('overlayadd overlayremove zoomlevelschange resize zoomend moveend', function () {
        visibleMaps = recalculateLayers();
    });
    map.on('overlayadd', function (e) {
        if (!(e.name.includes('Рогейн') || e.name.includes('Рогаине')) && !e.name.includes('Необычные')) {
            activeLayers.push(overlayMapsContents[e.name]);
            syncMaps();
        }
    });

    map.on('overlayremove', function (e) {
        if (!e.name.includes('Рогейн') && !e.name.includes('Необычные')) {
            removeFromArray(activeLayers, overlayMapsContents[e.name]);
            syncMaps();
        }
    });

    // Save the map state whenever the map is moved or zoomed
    map.on('moveend', () => saveMapState(map, REGION_KEY));
    map.on('zoomend', () => saveMapState(map, REGION_KEY));

    L.control.scale().addTo(map);

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
    if (L.Browser.android || L.Browser.mobile) {  // || L.Browser.touch || L.Browser.retina
        layerControlCollapsed = true;
    }
    overlayMapsContents = buildOverlayMapsContents();

    layerControl = L.control.layers(
        baseMaps, overlayMapsContents,
        {collapsed: layerControlCollapsed, autoZIndex: false }).addTo(map);

    // --- search control ---
    searchBox = L.control.searchbox({
        position: 'topright',
        expand: 'left',
        // scrollbar: true,
        clearButton: true,
        // maxHeight: '40vh',
        autocompleteFeatures: ['setValueOnClick', 'arrowKeyNavigation'],
        title: 'Поиск карты (Ctrl-Shift-F)',
    }).addTo(map);

    searchBox.onInput("keyup", function (e) {
        if (e.keyCode == 13) {
            search();
        } else {
            var value = searchBox.getValue();
            if (value != "") {
                var results = searchMaps(value);
                searchBox.setItems(results.map(m => '&nbsp;' + mapTitle(m)).slice(0, 10));
            } else {
                searchBox.clearItems();
            }
        }
    });

    searchBox.onButton("click", search);

    function search() {
        let value = searchBox.getValue();
        if (value) {
            let m = searchMap(value);
            if (m) {
                locateMap(m);
            }
        }

        setTimeout(function () {
            searchBox.hide();
            searchBox.clear();
        }, 600);
    }

    document.onkeydown = function(e){
        e = e || window.event;
        let key = e.which || e.keyCode;
        if(key === 70) { // Ctrl-Shift-F
            searchBox.show();
            document.querySelector(".leaflet-searchbox").focus();
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

    // --- welcome dialog (https://github.com/NBTSolutions/Leaflet.Dialog) ---
    welcomeDialog = L.control.dialog(dialogOptions).setContent(welcomeDialogContent).addTo(map);
    let time = new Date().getTime();
    let welcomeOpenedTime = localStorage.getItem(WELCOME_OPENED_TIME_KEY);
    if (welcomeOpenedTime == null || dateDiff(Number(welcomeOpenedTime), time) > 6) {
        openWelcome();
    }
    if (!hiddenButtonsMode) {
        L.easyButton('button-icon welcome-icon', function (btn, map) {
            openWelcome();
        }, 'О проекте').addTo(map)
    }

    // --- statistics ---
    if (!hiddenButtonsMode) {
        L.easyButton('button-icon statistics-icon', function (btn, map) {
            openStats();
        }, 'Немного статистики').addTo(map)
    }

    // --- statistics ---
    if (!hiddenButtonsMode) {
        L.easyButton('button-icon papers-icon', function (btn, map) {
            downloadSheet();
        }, 'Сводная таблица карт').addTo(map)
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
            icon: new L.DivIcon({
                iconSize: new L.Point(9, 9),
                className: 'leaflet-div-icon leaflet-editing-icon',
            }),
            text: {
                title: 'Измерение расстояний', // Plugin Button Text
                segments_title: 'Перегоны (м)', // Segments box title
                segments_from: "", // Segment start label
                segments_to: " - ", // Segment end label
                segments_total: 'Всего: ', // Total distance label
                segments_meters: "м", // Meters label
            },
        };
        L.Control.qgsmeasure(qgsmeasureOptions).addTo(map);
    }

    // --- lasso ---
    if (!hiddenButtonsMode) {
        let lassoOptions = {
            position: 'topleft',
            title: 'Измеритель площади'
        };
        L.control.lasso(lassoOptions).addTo(map);
        map.on('lasso.finished', event => {
            let area = getArea(event.latLngs);
            alert(area.toFixed(2) + ' км²')
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
            orientation: 'vertical',
            title: 'Прозрачность карт',
            min: 0,
            max: 1,
            step: .1,
            size: '100px',
            position: 'topleft',
            value: mapOpacity,
            logo: '⛅',
            showValue: false,
            syncSlider: true
        };
        opacitySlider = L.control.slider(function (value) {
            setOverlayOpacity(value);
        }, sliderOptions).addTo(map);
    }

    setTimeout(function () {
        document.getElementById("spinner").style.display = 'block';
    }, 1000);

    let intervalCounter = 0;
    let imagesLoadInterval = setInterval(function() {
        // go to the specified map
        if (MAP_NAME_PARAM && intervalCounter === 0) {
            locateMapForUrl(MAP_NAME_PARAM);
        }

        syncMaps();

        if (imagesLoadCounter <= 0) {
            if (intervalCounter++ > 3) {
                document.getElementById("spinner").style.display = 'none';
                clearInterval(imagesLoadInterval);

                visibleMaps = recalculateLayers();
                if (!loaded) {
                    loaded = true;

                    // --- year slider (https://github.com/slawomir-zaziablo/range-slider) ---
                    let yearSliderEl = document.getElementById("year_slider");
                    if (yearSliderEl) {
                        yearSliderEl.parentElement.style.display = 'block';
                        let years = Object.keys(ageGroups);
                        let wideScreen = window.innerWidth > 1000;
                        let yearSlider = new rSlider({
                            target: '#year_slider',
                            values: years,
                            range: !timeline,
                            set: timeline ? [years[years.length-1]] : [years[0], years[years.length-1]],
                            labels: wideScreen,
                            tooltip: !wideScreen,
                            onChange: function (vals) {
                                processYearSlider(years, vals);
                            }
                        });
                    }

                    // set required styles for the map elements
                    for (const m of oMaps) {
                        applyMapStyles(m);
                    }
                }
            }
        }
    }, 1000);

    function applyMapStyles(m) {
        if (m.layer) {
            let el = m.layer.getElement();
            if (el) {
                if (m.zindex) {
                    el.style.zIndex = m.zindex;
                }

                if (m.restricted) {
                    el.classList.add('restricted');
                }
                else if (m.link && enableFullSize) {
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
}

tuneContextMenu();

//buildMapsCSV(oMaps); //, 'KOSOR'

// --- functions ---

function loadMap(m) {
    if (isMapHidden(m)) {
        m.url = './maps/olive.png';
    }

    if (loadImagesRequired) {
        imagesLoadCounter++;
        m.img = new Image();
        m.img.src = m.url;
        m.img.onerror = function () {
            notificationControl.warning('Ошибка загрузки карты "' + m.name + '". Попробуйте обновить страницу.');
        }
        m.img.onload = function () {
            loadMapImage(m);
        }
    } else {
        buildMap(m);
    }
}

function loadMapImage(m) {
    buildMap(m);
    imagesLoadCounter--;
}

function buildMap(m) {
    if (HAS_ONLY_WO_AUTHOR_PARAM && m.author) {
        return;
    }

    if (START_NAME_PARAM && START_NAME_PARAM !== m.start) {
        return;
    }

    if (THE_AUTHOR_PARAM) {
        if (Array.isArray(m.author)) {
            let own = false;
            for (const a of m.author) {
                if (THE_AUTHOR_PARAM === a) {
                    own = true; break;
                }
            }
            if (!own) return;
        } else {
            if (THE_AUTHOR_PARAM !== m.author) return;
        }
    }

    if (THE_OWNER_PARAM) {
        if (Array.isArray(m.owner)) {
            let own = false;
            for (const o of m.owner) {
                if (THE_OWNER_PARAM === o) {
                    own = true; break;
                }
            }
            if (!own) return;
        } else {
            if (THE_OWNER_PARAM !== m.owner) return;
        }
    }

    let bounds;
    if (m.bounds.length === 3) {
        bounds = m.bounds;
    } else {
        bounds = [
            m.bounds[0],
            [m.bounds[0][0], m.bounds[0][1] + m.img.width * multiY],
            [m.bounds[0][0] - m.img.height * multiX, m.bounds[0][1]]
        ];
    }
    let latLngs = [
        L.latLng(bounds[0]),
        L.latLng(bounds[1]),
        L.latLng(bounds[2])
    ];
    let imgLayer = L.imageOverlay.rotated(
        m.url, latLngs[0], latLngs[1], latLngs[2],
        {
            opacity: 1,
            interactive: true,
            alt: m.name
        });
    m.layer = imgLayer;

    if (!m.area) {
        m.area = getMapArea(latLngs);
    }

    // map popup
    let popup = buildPopupText(m, latLngs);
    imgLayer.bindPopup(popup, {maxWidth: 500});
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

// show/hide maps according to the selected layers
function syncMaps() {
    let activeLayerIds = [];
    for (const layer of activeLayers) {
        if (layer && layer._leaflet_id) {
            activeLayerIds.push(layer._leaflet_id.toString());
        }
    }

    let shownMaps = [];
    let hiddenMaps = [];
    for (const m of oMaps) {
        if (m.groups && isMapAcceptable(m)) {
            if (activeLayerIds.includes(m.groups[0]) && activeLayerIds.includes(m.groups[1])) {
                shownMaps.push(m);
            } else {
                hiddenMaps.push(m);
            }
        }
    }

    for (const m of hiddenMaps) {
        map.removeLayer(m.layer);
    }
    for (const m of shownMaps) {
        map.addLayer(m.layer);
    }
}

function tuneContextMenu() {
    let menuIcons = document.querySelectorAll('.leaflet-contextmenu-icon');
    menuIcons.forEach(
        (element, index, array) => {
            tuneContextMenuItem(element, 'info.png', enablePopup);
            tuneContextMenuItem(element, 'hide.png', hideMapsOnMove);
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

function mapTitle(map) {
    let result = map.name;
    if (map.year) {
        result += '&nbsp;(' + map.year + ')';
    }
    return result;
}

function buildPopupText(m, latLngs) {
    let result = '<div class="popup-header popup-left-header">O-MAPS</div>';
    if (m.types.length > 0 || m.excluded) {
        let types = [
            ...m.types
        ];
        if (m.excluded) {
            types.push('EXCLUDED');
        }
        result += '<div class="popup-header popup-right-header">' + types.join(', ') + '</div>';
    }

    let icon;
    // иконка
    if (m.icon) {
        icon = m.icon;
    }
    if (!icon && (typeof starts !== 'undefined') && m.start && starts[m.start] && starts[m.start].icon) {
        icon = starts[m.start].icon;
    }
    if (!icon && m.owner && owners[m.owner] && owners[m.owner].icon) {
        icon = owners[m.owner].icon;
    }
    if (!icon && m.author && authors[m.author] && authors[m.author].icon) {
        icon = authors[m.author].icon;
    }
    if (!icon && m.author && Array.isArray(m.author) && authors[m.author[0]] && authors[m.author[0]].icon) {
        icon = authors[m.author[0]].icon;
    }
    if (icon) {
        result += '<img src="./logo/' + icon + '" alt="" class="popup-logo" /><div class="popup-text"';
    }

    // имя
    result += '<b>' + mapTitle(m);

    // площадь
    let area = m.area.toFixed(2);
    result += '&nbsp;-&nbsp;' + area + '&nbsp;км<sup>2</sup>';
    result += '</b><hr />';

    // инфа о карте
    let info = '';
    if (m.start) {
        info += '<b>' + starts[m.start].name + '.</b> ';
    }
    if (m.info) {
        info += m.info;
    }
    if (info) {
        result += info + '<br />';
    }

    // автор-составитель
    if (m.author) {
        if (Array.isArray(m.author)) {
            result += 'Авторы-составители:';
        } else {
            result += 'Автор-составитель: ';
        }
        result += buildAuthors(m);
    }

    // владелец
    if (m.owner) {
        if (Array.isArray(m.owner)) {
            result += 'Владельцы:';
        }
        result += buildOwners(m);
    }

    // закрытый район
    if (m.restricted) {
        result += '<span class="restricted-text">Район закрыт ' + m.restricted + '.</span><br />';
    }

    // GPS-трансляция
    if (m.gps) {
        result += '<span class="gps-info"><img src="./images/o-gps.ico" /> ';
        result += 'GPS-трансляция: ' + buildGpsLinks(m);
        result += '.</span><br />';
    }

    // ссылки на просмотр и скачивание
    let link = m.link;
    if (link) {
        if (!Array.isArray(link) && link.startsWith('http')) {
            result += 'Скачать можно <a href="' + link + '" target="_blank">тут</a>.';
        } else {
            result += 'Скачать можно тут: ' + buildDownloadLinks(link) + '.';
        }
    } else {
        if (isMapHidden(m)) {
            result += 'Просмотр карты не разрешён правообладателем или не уместен.';
        } else {
            result += 'Посмотреть карту отдельно можно <a href="' + m.url + '" target="_blank">тут</a>.';
        }
    }
    if (!m.url.includes('olive.png')) {
        let mapLinkUrl = mapLink(m.url);
        let onclick = 'onclick="copyToClipboard(\'' + mapLinkUrl + '\'); return false;"';
        result += '<br />Поделиться <a href="' + mapLinkUrl + '" target="_blank">ссылкой</a> на карту: <a href="#" ' + onclick + ' target="_blank"><img src="./images/copy.png" alt="Copy" title="Copy" style="margin-bottom: -3px;" /></a>';
    }
    let onclick = 'onclick="hideMap(map, \'' + m.url + '\'); return false;"';
    result += '<br /><div class="hide-map-link"><a href="#" ' + onclick + '>Скрыть эту карту</a></div>';

    if (icon) {
        result += '</div>';
    }

    return result;
}

function buildAuthors(m) {
    let result = '';
    if (Array.isArray(m.author)) {
        result += '<ol>'
        for (const a of m.author) {
            if (authors[a]) {
                result += '<li>' + authorLabel(authors[a]) + '</li>';
            }
        }
        result += '</ol>'
    } else {
        if (authors[m.author]) {
            result += authorLabel(authors[m.author]) + '<br />';
        }
    }
    return result;
}

function buildOwners(m) {
    let result = '';
    if (Array.isArray(m.owner)) {
        result += '<ol>'
        for (const o of m.owner) {
            if (owners[o]) {
                result += '<li>' + owners[o].name + '</li>';
            }
        }
        result += '</ol>'
    } else {
        if (owners[m.owner]) {
            result += owners[m.owner].name + '<br />';
        }
    }
    return result;
}

function buildGpsLinks(m) {
    let result = '';
    if (m.gps) {
        if (isObject(m.gps)) {
            let entries = Object.entries(Object.entries(m.gps));
            for (const [index, [key, value]] of entries) {
                result += ` <a href="${value}" target="_blank">${key}</a>`;
                if (index < entries.length - 1) {
                    result += ',';
                }
            }
        } else {
            result += '<a href="' + m.gps + '" target="_blank"><img src="./images/url-file.png"></a>';
        }
    }
    return result;
}

function buildDownloadLinks(link) {
    let result = '';
    if (link) {
        let links = link;
        if (!Array.isArray(link)) {
            links = [link];
        }
        links.forEach(function (value, index, array) {
            if (index > 0) {
                result += ', ';
            }
            result += '<a href="' + value + '" target="_blank" class="ext-link"><img src="./images/' + extractFileExt(value) + '-file.png" /></a>';
        })
    }
    return result;
}

function populateAuthor(map, a) {
    if (isOrientMap(map)) {
        if (!map.excluded) {
            let author = authors[a];
            if (!author.count) {
                author.count = 1;
            } else {
                author.count++;
            }
            let area = map.area;
            if (Array.isArray(map.author)) {
                area /= map.author.length;
            }
            if (!author.area) {
                author.area = area;
            } else {
                author.area += area;
            }
        }
    }
}

function onMapSelect(ovrl, map) {
    selectedOverlay = ovrl;
    selectedMap = map;

    upZindex(ovrl);

    if (editMode) {
        marker1.setLatLng(ovrl.getTopLeft());
        marker2.setLatLng(ovrl.getTopRight());
        marker3.setLatLng(ovrl.getBottomLeft());
    }
}

function onMapClick(e) {
    let coordinate = e.latlng.lat + ", " + e.latlng.lng;
    copyToClipboard(coordinate);
    welcomeDialog.close();
    searchBox.hide();
}

function repositionImage(doLog) {
    let point1 = marker1.getLatLng();
    let point2 = marker2.getLatLng();
    let point3 = marker3.getLatLng();
    if (doLog) {
        let coordinates = "[[" + point1.lat + ", " + point1.lng + "], [" + point2.lat + ", " + point2.lng + "], [" + point3.lat + ", " + point3.lng + "]],";
        copyToClipboard(coordinates);
    }
    if (selectedOverlay) {
        selectedOverlay.reposition(point1, point2, point3);
    }
}

function onDrag() {
    repositionImage(false);
}

function onDragEnd() {
    repositionImage(true);
}

// --- context menu functions ---

function showCoordinates (e) {
    alert(e.latlng);
}

function centerMap (e) {
    map.panTo(e.latlng);
}

function hideOrients (e) {
    for (const g of allOrientGroups) {
        map.removeLayer(g);
    }
}

function clearAges (e) {
    for (const g of allAgeGroups) {
        map.removeLayer(g);
    }
}

function showAllOrients (e) {
    for (const g of allOrientGroups) {
        map.addLayer(g);
    }
}

function showAllAges (e) {
    for (const g of allAgeGroups) {
        map.addLayer(g);
    }
}

function zoomIn (e) {
    map.zoomIn();
}

function zoomOut (e) {
    map.zoomOut();
}

function editModeSwitch (e) {
    editMode = !editMode;
    if (!editMode) {
        marker1.setLatLng(ZERO_LATLNG);
        marker2.setLatLng(ZERO_LATLNG);
        marker3.setLatLng(ZERO_LATLNG);
        setOverlayOpacity(1);
    } else {
        setOverlayOpacity(.5);
    }
    opacitySlider.setValue(mapOpacity);
    // map.removeControl(opacitySlider);
}

function popupsSwitch (e) {
    enablePopup = !enablePopup;
    tuneContextMenu();
}

function hideMapsSwitch (e) {
    hideMapsOnMove = !hideMapsOnMove;
    localStorage.setItem('hideMapsOnMove', hideMapsOnMove);
    tuneContextMenu();
}

function hiddenButtonsModeSwitch (e) {
    hiddenButtonsMode = !hiddenButtonsMode;
    localStorage.setItem('hiddenButtonsMode', hiddenButtonsMode);
    location.reload();
}

function fullSizeSwitch (e) {
    enableFullSize = !enableFullSize;
    localStorage.setItem('enableFullSize', enableFullSize);
    location.reload();
}

function timelineSwitch (e) {
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

function callCenter() {
    window.open('tg://resolve?domain=o_maps', '_blank').focus();
}
