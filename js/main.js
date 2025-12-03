const OLIVE_IMAGE_URL = './maps/olive.png';
const EMPTY_IMAGE_URL = './maps/empty.png';

const EMPTY_MAPS_ZOOM_LEVEL = 12;
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

let isMobile = L.Browser.android || L.Browser.mobile;  // || L.Browser.touch || L.Browser.retina
let popupWidth = isMobile ? "auto" : 500;

let editMode = false;
let mapOpacity = 1;
let imagesLoadCounter = 0;
let selectedOverlay, selectedMap;
let visibleMaps = 0;

let showMapsOnSmallZoom = true;
let smosz = localStorage.getItem('showMapsOnSmallZoom');
if (smosz != null) {
    showMapsOnSmallZoom = (smosz === 'true');
}
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
    let inFrames = true;

    for (const m of oMaps) {
        if (map) {
            let viewBounds = map.getBounds();
            inFrames = inFrame(viewBounds, m.bounds);
        }
        if (isMapAcceptable(m) && inFrames && !m.loaded) {
            if (!TYPE_PARAM || (m.type && m.type.includes(TYPE_PARAM)) || (TYPE_PARAM === 'FOREST' && !m.type)) {
                loadMap(m);
            }
        }
    }
    if (map) {
        resyncMaps();
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
            if (ONLY_TRACK_NAME_PARAM && !firstTrack.includes(ONLY_TRACK_NAME_PARAM)) {
                continue;
            }
            if (TRACK_TYPE_PARAM && (!t.type || !t.type.includes(TRACK_TYPE_PARAM))) {
                continue;
            }
            if (TRACK_MONTH_PARAM && (!t.date || t.date.slice(-2) !== TRACK_MONTH_PARAM)) {
                continue;
            }
            actualTracks.push(t);
        }
        loadTracksRecursive(actualTracks.pop(), actualTracks);

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
        markir += '<img src="./images/favorite.png" title="Маркированный маршрут" /> &nbsp;';
    }
    let typesList = getTypesList(t, true);
    if (!typesList.length) {
        typesList = 'МАРШРУТ';
    }
    result += '<div class="popup-header popup-right-header">' + markir + typesList + '</div>';

    // картинка
    let pic;
    if (t.logo) {
        pic = './logo/' + t.logo;
    } else if (t.pic) {
        pic = t.pic;
    } else if (t.start && starts[t.start].logo) {
        pic = './logo/' + starts[t.start].logo;
    } else if (t.pics) {
        pic = './tracks/' + t.pics[0] + '/pic_1.jpg';
    } else {
        pic = './logo/o-maps.webp';
    }
    result += '<img src="' + pic + '" alt="" class="popup-logo" /><div class="popup-text">';

    // имя, ссылка, год и длина трека
    result += '<b>';
    if (t.link) {
        result += '<a href="' + t.link + '">' + t.name + '</a>';
    } else {
        result += t.name;
    }
    let y = year(t);
    if (y) {
        result += ' ' + (t.date ? formatDate(t, true, false) : t.year) + ' ';
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
    if (t.start) {
        info += '<b>' + getMapStarts(t) + '</b> ';
    }
    if (t.info) {
        info += t.info;
    }
    if (t.results) {
        info += '<a href="' + t.results + '"> Результаты</a>';
    }
    if (info) {
        result += info + '<br />';
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

    if (HAS_EMBEDDED_PARAM) {
        document.getElementById('map_region_selector').style.display = 'none';
    }

    let savedState;
    if (!MAP_NAME_PARAM) {
        savedState = loadMapState(REGION_KEY);
    }
    if (MAP_NAME_PARAM) {
        let m = getMapForName(MAP_NAME_PARAM);
        if (m) {
            let mapType = m.type;
            if (mapType && (isRogaine(m) || isFun(m))) {
                activeLayers.push(funGroup, rogaineGroup);
            } else {
                let y = year(m);
                if (y && y < 2000 && (typeof groupRetro !== 'undefined')) {
                    activeLayers.push(groupRetro, group90th);
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
        minZoom: 9,
        maxZoom: 17,
        center: [x, y],
        zoom: zoom,
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

    map.on('click', onMapClick);
    map.on('zoomend', function () {
        if (!showMapsOnSmallZoom) {
            syncMaps();
        }
    });
    map.on('overlayadd overlayremove zoomlevelschange resize zoomend moveend', function () {
        visibleMaps = recalculateLayers();
        loadMaps();
    });
    map.on('overlayadd', function (e) {
        if (!(e.name.includes('Рогейн') || e.name.includes('Рогаине')) && !e.name.includes('Необычные') && !e.name.includes('Карты')) {
            activeLayers.push(overlayMapsContents[e.name]);
            syncMaps();
        }
        if (e.name.includes('Маршруты') && !tracksLoaded) {
            loadTracks();
        }
    });

    map.on('overlayremove', function (e) {
        if (!e.name.includes('Рогейн') && !e.name.includes('Необычные') && !e.name.includes('Карты')) {
            removeFromArray(activeLayers, overlayMapsContents[e.name]);
            syncMaps();
        }
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
        if (typeof oTracks === 'undefined') {
            let checkbox = document.getElementById("tracks-group-check");
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
            title: 'Поиск карты (Ctrl-Shift-F)',
        }).addTo(map);

        searchBox.onInput("keyup", function (e) {
            if (e.keyCode == 13) {
                search();
            } else {
                var value = searchBox.getValue();
                if (value != "") {
                    var results = searchMaps(value);
                    searchBox.setItems(results.map(m => '&nbsp;' + mapTitle(m, false, true)).slice(0, 10));
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
    L.easyButton('button-icon welcome-icon', function (btn, map) {
        openWelcome();
    }, 'О проекте').addTo(map)
    openWelcomeIfRequired();

    // --- help ---
    if (!hiddenButtonsMode) {
        L.easyButton('button-icon help-icon', function (btn, map) {
            location.href = './help/help.html';
        }, 'Справка').addTo(map)
    }

    // --- statistics ---
    if (!hiddenButtonsMode) {
        L.easyButton('button-icon statistics-icon', function (btn, map) {
            openStats();
        }, 'Немного статистики').addTo(map)
    }

    // --- sheet ---
    L.easyButton('button-icon papers-icon', function (btn, map) {
        downloadSheet();
    }, 'Сводная таблица ' + (loadTracksRequired ? 'маршрутов' : 'карт')).addTo(map)

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

    map.whenReady(function (e) {
        // go to the specified map
        if (MAP_NAME_PARAM) {
            let m = getMapForName(MAP_NAME_PARAM);
            if (m) {
                map.fitBounds(m.bounds);
            }
        }

        if (!ONLY_MAP_NAME_PARAM && !ONLY_TRACK_NAME_PARAM) {
            loadMaps();
        }

        if (loadTracksRequired) {
            setTimeout(loadTracks, 1000);
        }

        setInterval(checkMapsLoad, 1000);
    });

    function applyMapStyles(m) {
        if (m.layer) {
            let el = m.layer.getElement();
            if (el) {
                if (m.zindex) {
                    el.style.zIndex = m.zindex;
                }

                if (m.restricted) {
                    el.classList.add('restricted');
                } else if (m.link && enableFullSize) {
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
} else {
    loadMaps();
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
    resyncMaps();

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
                    set: timeline ? [years[years.length - 1]] : [years[0], years[years.length - 1]],
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

function loadMap(m, forse) {
    m.loaded = true;

    if (HAS_ONLY_WO_AUTHOR_PARAM && m.author) {
        return;
    }

    if (HAS_RESTRICTED_PARAM && !m.restricted) {
        return;
    }

    if (HAS_OCAD_PARAM && !hasOCAD(m)) {
        return;
    }

    if (!forse) { // the specified start maps filtering
        if (START_NAME_PARAM) {
            if (START_NAME_PARAM === 'major') {
                if (!isMajor(m)) {
                    return;
                }
            } else if (!checkStartMap(START_NAME_PARAM, m)) {
                return;
            }
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
            if (!own) return;
        } else {
            if (AUTHOR_PARAM !== m.author) return;
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
            if (!own) return;
        } else {
            if (OWNER_PARAM !== m.owner) return;
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
            if (!own) return;
        } else {
            if (PLANNER_PARAM !== m.planner) return;
        }
    }

    if (loadImagesRequired) {
        loadMapImage(m);
    } else {
        buildMap(m);
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
        bounds.push([bounds[0][0],[bounds[0][1] + 0.01]]);
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

    if (!m.area && latLngs && latLngs[1]) {
        m.area = getMapArea(latLngs);
    }

    // map popup
    let popup = buildPopup(m, latLngs);
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
        if (m.groups && isMapAcceptable(m) && (typeof startsPage !== 'undefined' || !(m.type && m.type.length === 1 && (isRogaine(m) || isFun(m))))) {
            let moreStarts = m.groups.length > 2;
            let forOneStart = !moreStarts && activeLayerIds.includes(m.groups[0]) && activeLayerIds.includes(m.groups[1]); // TODO какая-то левая логика
            let forMoreStarts = moreStarts && (activeLayerIds.includes(m.groups[0]) || activeLayerIds.includes(m.groups[1])) && activeLayerIds.includes(m.groups[m.groups.length - 1]);
            if (forOneStart || forMoreStarts) {
                shownMaps.push(m);
            } else {
                hiddenMaps.push(m);
            }
        }
    }

    if (map) {
        for (const m of hiddenMaps) {
            map.removeLayer(m.layer);
        }
        let zoom = map.getZoom();
        for (const m of shownMaps) {
            if (!showMapsOnSmallZoom) {
                if (zoom <= EMPTY_MAPS_ZOOM_LEVEL) {
                    m.layer.setUrl(OLIVE_IMAGE_URL);
                } else {
                    m.layer.setUrl(mapImageUrl(m));
                }
            }
            if (!m.layer.hiddenMap) {
                map.addLayer(m.layer);
            }
        }

        recalculateLayers();
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

function mapTitle(m, forStart, colored) {
    let result = '';
    if (m.gpx) { // трек
        result += '<span class="' + m.type[0] + '">';
    }
    result += m.name ?? 'Нечто';
    let y = year(m);
    if (y) {
        let year = y > 1 ? y : 'ретро';
        let sy = startYear(m);
        if (forStart && sy) {
            year = sy;
        }
        result += '&nbsp;(' + year + ')';
    }
    if (m.me) {
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

function mapLogoList(m) {
    let logo = [];
    if (m.logo) {
        logo.push(m.logo);
    }
    if (!isNull(starts) && m.start) {
        if (Array.isArray(m.start)) {
            for (const s of m.start) {
                if (starts[s] && starts[s].logo) {
                    logo.push(starts[s].logo);
                }
            }
        } else {
            if (starts[m.start] && starts[m.start].logo) {
                logo.push(starts[m.start].logo);
            }
        }
    }
    if (m.owner && owners[m.owner] && owners[m.owner].logo) {
        logo.push(owners[m.owner].logo);
    }
    if (m.author && authors[m.author] && authors[m.author].logo) {
        logo.push(authors[m.author].logo);
    }
    if (m.owner && Array.isArray(m.owner) && owners[m.owner[0]] && owners[m.owner[0]].logo) { // only the first one
        logo.push(owners[m.owner[0]].logo);
    }
    if (m.author && Array.isArray(m.author) && authors[m.author[0]] && authors[m.author[0]].logo) { // only the first one
        logo.push(authors[m.author[0]].logo);
    }
    return logo;
}

function buildPopup(m, latLngs) {

    const LOGO_CAROUSEL_TEMPLATE = `
        <div id="logo-carousel" class="carousel carousel-dark slide">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img src="./image_1" class="d-block popup-logo">
                    <div class="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="./image_2" class="d-block popup-logo">
                    <div class="carousel-caption d-none d-md-block">
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#logo-carousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#logo-carousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
        </div>
    `;

    let result = '<div class="popup-header popup-left-header">O-MAPS</div>';
    let typesList = getTypesList(m);
    if (typesList) {
        result += '<div class="popup-header popup-right-header">' + typesList + '</div>';
    }

    // иконка
    let logo = mapLogoList(m);
    logo.forEach((value, idx, arr) => {
        arr[idx] = 'logo/' + arr[idx];
    });
    if (m.photo) {
        logo.push(m.photo);
    }
    if (!logo.length) {
        logo.push('logo/o-maps.webp');
    }
    if (logo.length >= 2) {
        let carousel = LOGO_CAROUSEL_TEMPLATE.replace('image_1', logo[0]);
        carousel = carousel.replace('image_2', logo[1]);
        result += carousel;
    } else if (logo.length === 1) {
        result += '<img src="./' + logo[0] + '" alt="" class="popup-logo" />';
    }
    if (isMobile) {
        result += '<br />';
        result += '<div class="mobile-popup-text">';
    } else {
        result += '<div class="popup-text">';
    }

    // имя
    result += '<b>' + mapTitle(m, false, false);

    // площадь
    let area = m.area ? m.area.toFixed(2) : '';
    result += '&nbsp;-&nbsp;' + area + '&nbsp;км<sup>2</sup>';

    // ссылка на страничку инфа
    let url = m.url ?? getFirstLink(m);
    result += ' <a class="map-info-link" href="./map-info.html?map=' + extractFileName(url) + '" title="Информация о карте">🔗</a>';

    result += '</b><hr />';

    // инфа о карте
    let info = '';
    if (m.type && m.type.includes('FOTO')) {
        info += '<b>Фото-ориентирование.</b> ';
    }
    let d = formatDate(m);
    let sy = startYear(m);
    if (d) {
        info += `<b>${d} ${sy ?? ''}</b>`;
    } else {
        if (sy) {
            info += `<b> ${sy}</b>`;
        }
    }
    if (d || sy) {
        info += '. ';
    }
    if (m.start) {
        info += '<b>' + getMapStarts(m) + '</b> ';
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
            result += 'Авторы-составители карты:';
        } else {
            result += 'Автор-составитель карты: ';
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

    // начдист
    if (typeof planners !== 'undefined' && m.planner) {
        result += 'Планирование дистанции: ' + buildPlanners(m);
    }

    // закрытый район
    if (m.restricted) {
        result += getRestrictedText(m) + '<br />';
    }

    // GPS-трансляция
    if (m.gps) {
        result += '<span class="gps-info"><img src="./images/o-gps.gif" /> ';
        result += 'GPS-трансляция: ' + buildGpsLinks(m);
        result += '.</span><br />';
    }

    // ссылки на просмотр и скачивание
    let link = m.link;
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
            result += 'Посмотреть карту отдельно можно <a href="' + url + '">тут</a>.';
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

function getRestrictedText(m) {
    return '<span class="restricted-text">Район закрыт ' + m.restricted + '.</span>';
}

function buildAuthors(m, withIcon) {
    let result = '';
    if (Array.isArray(m.author)) {
        result += '<ol>'
        for (const a of m.author) {
            if (authors[a]) {
                result += '<li>';
                if (withIcon && authors[a].logo) {
                    result += '<img src="./logo/' + authors[a].logo + '" alt="" class="sheet-icon" /> ';
                }
                result += authorLabel(authors[a]);
                if (m.areas) {
                    let idx = m.author.indexOf(a);
                    result += ' (' + m.areas[idx] + '%)';
                }
                result += '</li>';
                populateAuthor(m, a);
            }
        }
        result += '</ol>'
    } else {
        if (authors[m.author]) {
            if (withIcon && authors[m.author].logo) {
                result += '<img src="./logo/' + authors[m.author].logo + '" alt="" class="sheet-icon" /> ';
            }
            result += authorLabel(authors[m.author]) + '<br />';
            populateAuthor(m, m.author);
        }
    }
    return result;
}

function buildOwners(m, withIcon) {
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
            if (withIcon && owners[m.owner].logo) {
                result += '<img src="./logo/' + owners[m.owner].logo + '" alt="" class="sheet-icon" /> ';
            }
            result += owners[m.owner].name + '<br />';
        }
    }
    return result;
}

function buildPlanners(m) {
    let result = '';
    if (typeof planners !== 'undefined') {
        if (Array.isArray(m.planner)) {
            result += '<ol>'
            for (const o of m.planner) {
                if (planners[o]) {
                    result += '<li>' + planners[o].name + '</li>';
                }
            }
            result += '</ol>'
        } else {
            if (planners[m.planner]) {
                result += planners[m.planner].name + '<br />';
            }
        }
        if (!result) {
            if (!isNull(starts) && m.start && starts[m.start] && starts[m.start].planner) {
                result += planners[starts[m.start].planner].name + '<br />';
            }
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
            result += '<a href="' + value + '" class="ext-link" title="Скачать" target="_blank"><img src="./images/' + extractFileExt(value) + '-file.png" /></a>';
        })
    }
    return result;
}

function populateAuthor(m, a) {
    if (isOrientMap(m)) {
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

function onMapClick(e) {
    let coordinate = e.latlng.lat + ", " + e.latlng.lng;
    copyToClipboard(coordinate);
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

function showCoordinates(e) {
    alert(e.latlng);
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

function hiddenButtonsModeSwitch(e) {
    hiddenButtonsMode = !hiddenButtonsMode;
    localStorage.setItem('hiddenButtonsMode', hiddenButtonsMode);
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

function callCenter() {
    window.open('tg://resolve?domain=o_maps', '_blank').focus();
}
