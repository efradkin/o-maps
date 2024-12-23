const urlParams = new URLSearchParams(window.location.search);
const THE_AUTHOR_PARAM = urlParams.get('author');
const THE_OWNER_PARAM = urlParams.get('owner');
const MAP_NAME_PARAM = urlParams.get('map');
const HAS_WO_AUTHOR_PARAM = urlParams.has('wo-author');
const HAS_ONLY_WO_AUTHOR_PARAM = urlParams.has('only-wo-author');

const ATTRIBUTION = '© <a href="https://github.com/efradkin/o-maps" target="_blank">Евгений Фрадкин</a> | Спорт. карты <a href="https://t.me/orient_spb" target="_blank">СПб и области</a> на <a href="https://www.openstreetmap.org/copyright" target="_blank">OSM</a>';

const ZERO_LATLNG = new L.LatLng(0, 0);
const centerX = 59.93325843615562;
const centerY = 30.338916778564457;

const multiX = 1e-5;
const multiY = 2e-5;

let map;
let opacitySlider;
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

let mapOverlays = [];

let osmMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: ATTRIBUTION
});
let openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: ATTRIBUTION
});

let funGroup = L.layerGroup([]);
let specialGroup = L.layerGroup([]);
let forestGroup = L.layerGroup([]);
let parkGroup = L.layerGroup([]);
let cityGroup = L.layerGroup([]);

let rogaineGroup = L.layerGroup([]);
let rogaineNewGroup = L.layerGroup([]);
let rogaineOldGroup = L.layerGroup([]);

let groupRetro = L.layerGroup([]);
let group90th = L.layerGroup([]);
let group2000th = L.layerGroup([]);
let group2010th = L.layerGroup([]);
let group2020th = L.layerGroup([]);
let groupUnknownYear = L.layerGroup([]);

let groupAllOrient = L.layerGroup([]);

let oMaps = [
    ...funMaps,
    ...rogaineKkmMaps,
    ...rogaineBeketovMaps,
    ...rogaineMaps,
    ...specialMaps,
    ...forestMaps,
    ...vsevolozhskMaps,
    ...southMaps,
    ...priozerskMaps,
    ...zelikMaps,
    ...vyborgMaps,
    ...sosnovoMaps,
    ...michuraMaps,
    ...vaskelovoMaps,
    ...toksovoMaps,
    ...parkMaps,
    ...cityMaps,
];

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
let mapElement = document.getElementById('map');
if (mapElement) {
    let savedState;
    if (!MAP_NAME_PARAM) {
        savedState = loadMapState();
    }
    let layers = [
        osmMap, parkGroup, cityGroup, forestGroup, specialGroup,
        group2020th, group2010th, group2000th, group90th, groupRetro, groupUnknownYear,
    ];
    if (MAP_NAME_PARAM) {
        let m = getMapForName(MAP_NAME_PARAM);
        if (m) {
            let mapType = m.types;
            if (mapType && (mapType.includes('ROGAINE') || mapType.includes('FUN'))) {
                layers = [osmMap, funGroup, rogaineGroup];
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
        layers: layers,
        contextmenu: true,
        contextmenuWidth: 190,
        contextmenuItems: [{
            text: 'О проекте',
            icon: 'images/information.png',
            callback: openWelcome
        }, '-', {
            text: 'Координаты',
            icon: 'images/coordinates.png',
            callback: showCoordinates
        }, {
            text: 'Центр сюда',
            icon: 'images/point.png',
            callback: centerMap
        }, '-', {
            text: 'Увеличить',
            icon: 'images/zoom-in.png',
            callback: zoomIn
        }, {
            text: 'Уменьшить',
            icon: 'images/zoom-out.png',
            callback: zoomOut
        }, '-', {
            text: 'Всплыв.подсказки',
            icon: 'images/info.png',
            callback: popupsSwitch
        }, {
            text: 'Скрывать карты',
            icon: 'images/hide.png',
            callback: hideMapsSwitch
        }, {
            text: 'Выделять полноразмеры',
            icon: 'images/expand.png',
            callback: fullSizeSwitch
        }, {
            text: 'Редактирование',
            icon: 'images/edit.png',
            callback: editModeSwitch
        }]
    });

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

    // Save the map state whenever the map is moved or zoomed
    map.on('moveend', () => saveMapState(map));
    map.on('zoomend', () => saveMapState(map));

    L.control.scale().addTo(map);

    // Instantiate the ZoomBar control..
    new L.Control.ZoomBar({position: 'topleft'}).addTo(map);

    let attributionControl = L.control.attribution().addTo(map);
    attributionControl.setPrefix('<a href="https://leafletjs.com/">Leaflet</a>');

    // --- layers control ---
    let baseMaps = {
        "Open Street Map": osmMap,
        "Open Topo Map": openTopoMap
    };

    let overlayMaps = {
        "Город": cityGroup,
        "Парки": parkGroup,
        "Лес": forestGroup,
        "Специальные": specialGroup,
        "Все": groupAllOrient,
        "<span class='layer-separator'>2020-е</span>": group2020th,
        "2010-е": group2010th,
        "2000-е": group2000th,
        "90-е": group90th,
        "Ретро": groupRetro,
        "???": groupUnknownYear,
        "<span class='layer-separator'>Необычные</span>": funGroup,
        "<span class='layer-separator'>Рогейн</span>": rogaineGroup,
        "<span class='layer-separator'>Недавние</span>": rogaineNewGroup,
        "Давние": rogaineOldGroup,
    };

    let layerControlCollapsed = false;
    if (L.Browser.android || L.Browser.mobile) {  // || L.Browser.touch || L.Browser.retina
        layerControlCollapsed = true;
    }
    let layerControl = L.control.layers(
        baseMaps, overlayMaps,
        {collapsed: layerControlCollapsed, autoZIndex: false}).addTo(map);

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
        if(key === 70){
            searchBox.show();
            document.querySelector(".leaflet-searchbox").focus();
        }
    }

    // Compass
    var compass = new L.Control.Compass({
        autoActive: true,
        showDigit: true,
        callErr: function() {
            compass.deactivate();
        }
    });
    map.addControl(compass);

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
    if (localStorage.getItem('welcomeOpened') == null) {
        openWelcome();
        localStorage.setItem('welcomeOpened', true);
    }

    L.easyButton('button-icon welcome-icon', function(btn, map) {
        openWelcome();
    }, 'О проекте').addTo(map)

    // --- statistics ---
    L.easyButton('button-icon statistics-icon', function(btn, map) {
        openStats();
    }, 'Немного статистики').addTo(map)

    // --- statistics ---
    L.easyButton('button-icon papers-icon', function(btn, map) {
        downloadSheet();
    }, 'Сводная таблица карт').addTo(map)

/*
    // --- ruler (https://github.com/gokertanrisever/leaflet-ruler) ---
    let rulerOptions = {
        position: 'topleft',
        lengthUnit: {
            display: 'км',
            decimal: 2,
            factor: null,
            label: 'L:'
        },
        angleUnit: {
            display: '&deg;',
            decimal: 2,
            factor: null,
            label: 'A:'
        }
    };
    L.control.ruler(rulerOptions).addTo(map);
*/
    // --- Leaflet.QgsMeasure (https://github.com/gabriel-russo/Leaflet.QgsMeasure)
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

    // --- lasso ---
    let lassoOptions = {
        position: 'topleft',
        title: 'Измеритель площади'
    };
    const lassoControl = L.control.lasso(lassoOptions).addTo(map);
    map.on('lasso.finished', event => {
        let area = getArea(event.latLngs);
        console.log(area);
        alert(area.toFixed(2) + ' км²')
    });

    // --- slider (https://github.com/Eclipse1979/leaflet-slider) ---
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
    opacitySlider = L.control.slider(function(value) {
        setOverlayOpacity(value);
        }, sliderOptions).addTo(map);

    setTimeout(function () {
        document.getElementById("spinner").style.display = 'block';
    }, 1000);

    let intervalCounter = 0;
    let imagesLoadInterval = setInterval(function() {
        // go to the specified map
        if (MAP_NAME_PARAM && intervalCounter === 0) {
            locateMapForUrl(MAP_NAME_PARAM);
        }
        if (imagesLoadCounter <= 0) {
            if (intervalCounter++ > 3) {
                document.getElementById("spinner").style.display = 'none';
                clearInterval(imagesLoadInterval);

                visibleMaps = recalculateLayers();
                if (!loaded) {
                    loaded = true;
                }
            }
        }
    }, 1000);
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
        m.img.onload = function () {
            buildMap(m);
            imagesLoadCounter--;
        }
    } else {
        buildMap(m);
    }
}

function buildMap(m) {
    if (HAS_ONLY_WO_AUTHOR_PARAM && m.author) {
        return;
    }

    if (THE_AUTHOR_PARAM) {
        if (Array.isArray(m.author)) {
            let own = false;
            for (const o of m.author) {
                if (THE_AUTHOR_PARAM === o) {
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

    let added = false;
    if (m.types.includes('ROGAINE')) {
        added = true;
        imgLayer.addTo(rogaineGroup);
        let el = imgLayer.getElement();
        if (el) {
            el.style.zIndex = 0;
        }

        if (m.year && m.year >= 2010) {
            imgLayer.addTo(rogaineNewGroup);
        }
        if (m.year && m.year < 2010) {
            imgLayer.addTo(rogaineOldGroup);
        }
    }
    if (m.types.includes('FUN')) {
        added = true;
        imgLayer.addTo(funGroup);
    }
    if (m.types.includes('RELIEF')) {
        added = true;
        imgLayer.addTo(specialGroup);
    }
    if (m.types.includes('WINTER')) {
        added = true;
        imgLayer.addTo(specialGroup);
    }
    if (m.types.includes('VELO')) {
        added = true;
        imgLayer.addTo(specialGroup);
    }
    if (m.types.includes('CITY')) {
        added = true;
        imgLayer.addTo(cityGroup);
    }
    if (m.types.includes('PARK')) {
        added = true;
        imgLayer.addTo(parkGroup);
    }
    if (!added) {
        imgLayer.addTo(forestGroup);
    }

    if (m.zindex) {
        let el = imgLayer.getElement();
        if (el) {
            el.style.zIndex = m.zindex;
        }
    }

    if (isOrientMap(m)) {
        if (!m.year) {
            imgLayer.addTo(groupUnknownYear);
        } else if (m.year >= 2020) {
            imgLayer.addTo(group2020th);
        } else if (m.year >= 2010) {
            imgLayer.addTo(group2010th);
        } else if (m.year >= 2000) {
            imgLayer.addTo(group2000th);
        } else if (m.year >= 1990) {
            imgLayer.addTo(group90th);
        } else {
            imgLayer.addTo(groupRetro);
        }
        imgLayer.addTo(groupAllOrient);
    }
    mapOverlays.push(imgLayer);

    let el = imgLayer.getElement();
    if (el) {
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
    let icon, result = '';
    // иконка
    if (m.icon) {
        icon = m.icon;
    }
    if (!icon && m.owner && owners[m.owner] && owners[m.owner].icon) {
        icon = owners[m.owner].icon;
    }
    if (!icon && m.author && authors[m.author] && authors[m.author].icon) {
        icon = authors[m.author].icon;
    }
    if (icon) {
        result = '<img src="./icons/' + icon + '" alt="" style="position: fixed;" /><div style="margin-left: 170px;min-height: 160px;"';
    }

    // имя
    result += '<b>' + mapTitle(m);

    // площадь
    let area = m.area.toFixed(2);
    result += '&nbsp;-&nbsp;' + area + '&nbsp;км<sup>2</sup>';
    result += '</b><hr />';

    // инфа о карте
    let info = m.info;
    if (info) {
        result += info + '<br />';
    }

    // автор-составитель
    if (m.author) {
        if (Array.isArray(m.author)) {
            result += 'Авторы-составители:<ol>'
            for (const a of m.author) {
                if (authors[a]) {
                    result += '<li>' + authorLabel(authors[a]) + '</li>';
                    populateAuthor(m, a);
                }
            }
            result += '</ol>'
        } else {
            if (authors[m.author]) {
                result += 'Автор-составитель: ' + authorLabel(authors[m.author]) + '<br />';
                populateAuthor(m, m.author);
            }
        }
    }

    // владелец
    if (m.owner) {
        if (Array.isArray(m.owner)) {
            result += 'Владельцы:<ol>'
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
    }

    // закрытый район
    if (m.restricted) {
        result += '<span class="restricted-text">Район закрыт ' + m.restricted + '.</span><br />';
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
        result += 'Посмотреть карту отдельно можно <a href="' + m.url + '" target="_blank">тут</a>.';
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

function buildDownloadLinks(link) {
    let result = '';
    let links = link;
    if (!Array.isArray(link)) {
        links = [link];
    }
    links.forEach(function (value, index, array) {
        if (index > 0) {
            result += ', ';
        }
        result += '<a href="' + value + '" target="_blank" class="ext-link">' + extractFileExt(value) + '</a>';
    })
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

function fullSizeSwitch (e) {
    enableFullSize = !enableFullSize;
    localStorage.setItem('enableFullSize', enableFullSize);
    location.reload();
}

function openStats() {
    location.href = './charts.html'
}

function downloadSheet() {
    location.href = './o-maps.xlsx'
}
