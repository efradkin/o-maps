
const urlParams = new URLSearchParams(window.location.search);
const THE_OWNER = urlParams.get('owner');
const MAP_NAME = urlParams.get('map');
let loaded = false;

const ATTRIBUTION = '© <a href="https://github.com/efradkin/o-maps" target="_blank">Евгений Фрадкин</a> | Спортивные карты <a href="https://t.me/orient_spb" target="_blank">СПб и области</a> на <a href="https://www.openstreetmap.org/copyright" target="_blank">OSM</a>';

// Initialize the map
const ZERO_LATLNG = new L.LatLng(0, 0);
const centerX = 59.944179;
const centerY = 30.320337;

const multiX = 1e-5;
const multiY = 2e-5;

let maxZindex = 1;
let enablePopup = false;

let editMode = false;
let selectedOverlay, selectedMap;

let mapOverlays = [];

var osmMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: ATTRIBUTION
});
var openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: ATTRIBUTION
});

var winterGroup = L.layerGroup([]);
var veloGroup = L.layerGroup([]);
var reliefGroup = L.layerGroup([]);
var rogaineGroup = L.layerGroup([]);
var forestGroup = L.layerGroup([]);
var parkGroup = L.layerGroup([]);
var cityGroup = L.layerGroup([]);

var groupRetro = L.layerGroup([]);
var group90th = L.layerGroup([]);
var group2000th = L.layerGroup([]);
var group2010th = L.layerGroup([]);
var group2020th = L.layerGroup([]);
var groupUnknownYear = L.layerGroup([]);

var groupAll = L.layerGroup([]);

let oMaps = [
    ...rogaineMaps,
    ...reliefMaps,
    ...forestMaps,
    ...toksovoMaps,
    ...parkMaps,
    ...cityMaps,
];

// Overlay the maps
for (const m of oMaps) {
    m.img = new Image();
    m.img.src = m.url;

    m.img.onload = function () {
        if (THE_OWNER) {
            if (Array.isArray(m.owner)) {
                let own = false;
                for (const o of m.owner) {
                    if (THE_OWNER === o) {
                        own = true; break;
                    }
                }
                if (!own) return;
            } else {
                if (THE_OWNER !== m.owner) return;
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
        let imgLayer = L.imageOverlay.rotated(
            m.url, L.latLng(bounds[0]), L.latLng(bounds[1]), L.latLng(bounds[2]),
            {
                opacity: 1,
                interactive: true,
                alt: m.name
            });

        // map popup
        let popup = '<b>' + m.name;
        if (m.year) {
            popup += ' (' + m.year + ')';
        }
        popup += '</b><hr />';
        let info = m.info;
        let link = m.link;
        if (info) {
            popup += info + '<br />';
        }
        if (m.owner) {
            // console.log(owner, Array.isArray(owner))
            if (Array.isArray(m.owner)) {
                for (const o of m.owner) {
                    // console.log(o)
                    popup += owners[o] + '<br />';
                }
            } else {
                popup += owners[m.owner] + '<br />';
            }
        }
        if (link) {
            popup += 'Скачать можно <a href="' + link + '" target="_blank">тут</a>.';
        } else {
            popup += 'Посмотреть отдельно можно <a href="' + m.url + '" target="_blank">тут</a>.';
        }
        popup += '<br /><a href="' + mapLink(m.url) + '" target="_blank">Ссылка на эту карту</a>.';
        imgLayer.bindPopup(popup);
        imgLayer.on('mouseover', function (e) {
            if (!editMode && enablePopup) {
                this.openPopup();
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
        }
        if (m.types.includes('RELIEF')) {
            added = true;
            imgLayer.addTo(reliefGroup);
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

        if (!m.types.includes('ROGAINE')) {
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
        }
        mapOverlays.push(imgLayer);

        if (m.link) {
            let el = imgLayer.getElement();
            if (el) {
                el.classList.add('full-size');
            }
        }
        imgLayer.addTo(groupAll);
    }
}

const defaultZoom = 11;
const savedState = loadMapState();
var map = L.map('map', {
    attributionControl: false,
    zoomControl: false,
    center: savedState ? [savedState.lat, savedState.lng] : [centerX, centerY],
    zoom: savedState ? savedState.zoom : defaultZoom,
    layers: [
        osmMap, parkGroup, cityGroup, forestGroup, reliefGroup, winterGroup, veloGroup,
        group2020th, group2010th, group2000th, group90th, groupRetro, groupUnknownYear,
    ],
    contextmenu: true,
    contextmenuWidth: 160,
    contextmenuItems: [{
        text: 'Координаты',
        callback: showCoordinates
    }, {
        text: 'Центр сюда',
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
        icon: 'images/popup.png',
        callback: popupsSwitch
    }, {
        text: 'Редактирование',
        icon: 'images/edit.png',
        callback: editModeSwitch
    }]
});

map.on('click', onMapClick);
map.on('overlayadd overlayremove zoomlevelschange resize zoomend moveend', function () { recalculateLayers();} );
osmMap.on('load', function () {
    recalculateLayers();
    if (!loaded) {
        loaded = true;
        if (MAP_NAME) {
            locateMap(MAP_NAME);
        }
    }
});

// Save the map state whenever the map is moved or zoomed
map.on('moveend', () => saveMapState(map));
map.on('zoomend', () => saveMapState(map));

L.control.scale().addTo(map);

// Instantiate the ZoomBar control..
new L.Control.ZoomBar({position: 'topleft'}).addTo(map);

var attributionControl = L.control.attribution().addTo(map);
attributionControl.setPrefix('<a href="https://leafletjs.com/">Leaflet</a>');

var baseMaps = {
    "Open Street Map": osmMap,
    "Open Topo Map": openTopoMap
};

var overlayMaps = {
    "Город": cityGroup,
    "Парки": parkGroup,
    "Лес": forestGroup,
    "Гидро-рельефные": reliefGroup,
    "Зимние": winterGroup,
    "Вело": veloGroup,
    "Рогейн": rogaineGroup,
    "<span class='layer-separator'>2020-е</span>": group2020th,
    "2010-е": group2010th,
    "2000-е": group2000th,
    "90-е": group90th,
    "Ретро": groupRetro,
    "???": groupUnknownYear,
    "<span class='layer-separator'>Все</span>": groupAll,
};

var layerControl = L.control.layers(
    baseMaps, overlayMaps,
    {collapsed: false, autoZIndex: false}).addTo(map);

// Set bounds for the overlay
//map.fitBounds(oMap.getBounds());

let marker1 = L.marker(ZERO_LATLNG, {draggable: true}).addTo(map);
let marker2 = L.marker(ZERO_LATLNG, {draggable: true}).addTo(map);
let marker3 = L.marker(ZERO_LATLNG, {draggable: true}).addTo(map);
marker1.on('drag', onDrag);
marker2.on('drag', onDrag);
marker3.on('drag', onDrag);
marker1.on('dragend', onDragEnd);
marker2.on('dragend', onDragEnd);
marker3.on('dragend', onDragEnd);

// --- ruler (https://github.com/gokertanrisever/leaflet-ruler) ---
var options = {
    position: 'topleft',
    lengthUnit: {
        display: 'км',
        decimal: 2,
        factor: null,
        label: 'Расстояние:'
    },
    angleUnit: {
        display: '&deg;',
        decimal: 2,
        factor: null,
        label: 'Азимут:'
    }
};
L.control.ruler(options).addTo(map);

 // --- functions ---

function mapLink(url) {
    return location.origin + '?map=' + extractFilename(url);
}

function extractFilename(url) {
    const match = url.match(/\/([^\/]+)\.[^\.]+$/);
    return match ? match[1] : '';
}

function recalculateLayers() {
    let total = getImageOverlaysInView(true);
    let visible = getImageOverlaysInView(false);
    document.getElementById("counter").innerHTML =
        (total === visible ? total : visible + '/' + total);
}

function getImageOverlaysInView(total) {
    var imgs = [];
    map.eachLayer( function(layer) {
        if(layer instanceof L.ImageOverlay) {
            let bounds = map.getBounds();
            if(total || bounds.contains(layer.getTopLeft()) || bounds.contains(layer.getTopRight()) || bounds.contains(layer.getBottomLeft())) {
                imgs.push(layer);
            }
        }
    });
    return imgs.length;
}

function locateMap(mapName) {
    map.eachLayer( function(layer) {
        if(layer instanceof L.ImageOverlay && layer._url.includes(mapName)) {
            map.fitBounds(layer.getBounds());
        }
    });
}

function onMapSelect(ovrl, map) {
    selectedOverlay = ovrl;
    selectedMap = map;

    ovrl.getElement().style.zIndex = maxZindex++;

    if (editMode) {
        marker1.setLatLng(ovrl.getTopLeft());
        marker2.setLatLng(ovrl.getTopRight());
        marker3.setLatLng(ovrl.getBottomLeft());
    }
}

function onMapClick(e) {
    let coordinate = e.latlng.lat + ", " + e.latlng.lng;
    navigator.clipboard.writeText(coordinate);
    console.log(coordinate);
}

function setOverlayOpacity(opacity) {
    for (const map of mapOverlays) {
        map.setOpacity(opacity);
    }
}

function repositionImage(doLog) {
    let point1 = marker1.getLatLng();
    let point2 = marker2.getLatLng();
    let point3 = marker3.getLatLng();
    if (doLog) {
        let coordinates = "[[" + point1.lat + ", " + point1.lng + "], [" + point2.lat + ", " + point2.lng + "], [" + point3.lat + ", " + point3.lng + "]],";
        navigator.clipboard.writeText(coordinates);
        console.log(coordinates);
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
        setOverlayOpacity(0.5);
    }
}

function popupsSwitch (e) {
    enablePopup = !enablePopup;
}

// Function to save map's view (center and zoom) to localStorage
function saveMapState(map) {
    const center = map.getCenter();
    const zoom = map.getZoom();
    const mapState = {
        lat: center.lat,
        lng: center.lng,
        zoom: zoom
    };
    localStorage.setItem('mapState', JSON.stringify(mapState));
}

// Function to load saved map state from localStorage
function loadMapState() {
    const savedState = localStorage.getItem('mapState');
    if (savedState) {
        return JSON.parse(savedState);
    }
    return null;
}
