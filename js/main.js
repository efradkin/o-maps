
const urlParams = new URLSearchParams(window.location.search);
const THE_OWNER = urlParams.get('owner')

const ATTRIBUTION = '© <a href="https://github.com/efradkin/o-maps" target="_blank">Евгений Фрадкин</a> | Спортивные карты <a href="https://t.me/orient_spb" target="_blank">СПб и области</a> на <a href="https://www.openstreetmap.org/copyright" target="_blank">OSM</a>';

// Initialize the map
const ZERO_LATLNG = new L.LatLng(0, 0);
const centerX = 59.944179;
const centerY = 30.320337;

const multiX = 1e-5;
const multiY = 2e-5;

let maxZindex = 1;

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
var rogaineGroup = L.layerGroup([]);
var forestGroup = L.layerGroup([]);
var parkGroup = L.layerGroup([]);
var cityGroup = L.layerGroup([]);

let oMaps = [
    ...rogaineMaps,
    ...forestMaps,
    ...parkMaps,
    ...cityMaps,
];

// Overlay the maps
for (const m of oMaps) {
    m.img = new Image();
    m.img.src = m.url;

    m.img.onload = function () {
        if (THE_OWNER && THE_OWNER !== m.owner) {
            return;
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
            { opacity: 1, interactive: true});

        // map popup
        let popup = '<b>' + m.name;
        if (m.year) {
            popup += ' (' + m.year + ')';
        }
        popup += '</b><hr />';
        let owner = owners[m.owner];
        let info = m.info;
        let link = m.link;
        if (info) {
            popup += info + '<br />';
        }
        if (owner) {
            popup += owner;
        } else {
            popup += 'Владелец карты не определён.';
        }
        popup += '<br />';
        if (link) {
            popup += 'Скачать можно <a href="' + link + '" target="_blank">тут</a>.';
        } else {
            popup += 'Посмотреть отдельно можно <a href="' + m.url + '" target="_blank">тут</a>.';
        }
        imgLayer.bindPopup(popup);
        imgLayer.on('mouseover', function (e) {
            if (!editMode) {
                this.openPopup();
            }
        });

        imgLayer.on('click', function (e) {
            onMapSelect(imgLayer, m);
        });

        if (m.types.includes('ROGAINE')) {
            imgLayer.addTo(rogaineGroup);
        } else
        if (m.types.includes('CITY')) {
            imgLayer.addTo(cityGroup);
        } else
        if (m.types.includes('PARK')) {
            imgLayer.addTo(parkGroup);
        } else {
            imgLayer.addTo(forestGroup);
        }

        mapOverlays.push(imgLayer);
    }
}

var map = L.map('map', {
    attributionControl: false,
    center: [centerX, centerY],
    zoom: 11,
    layers: [osmMap, parkGroup, cityGroup, forestGroup, rogaineGroup],
    contextmenu: true,
    contextmenuWidth: 140,
    contextmenuItems: [{
        text: 'Show coordinates',
        callback: showCoordinates
    }, {
        text: 'Center map here',
        callback: centerMap
    }, '-', {
        text: 'Zoom in',
        icon: 'images/zoom-in.png',
        callback: zoomIn
    }, {
        text: 'Zoom out',
        icon: 'images/zoom-out.png',
        callback: zoomOut
    }, '-', {
        text: 'Switch edit mode',
        icon: 'images/edit.png',
        callback: editModeSwitch
    }]
});

map.on('click', onMapClick);
map.on('overlayadd overlayremove zoomlevelschange resize zoomend moveend', function () { recalculateLayers();} );
osmMap.on('load', function () { recalculateLayers();} );

L.control.scale().addTo(map);

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
    "Рогейн": rogaineGroup,
    "Зимние": winterGroup,
    "Вело": veloGroup,
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