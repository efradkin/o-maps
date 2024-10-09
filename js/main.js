const EDIT_MODE = true;

const ATTRIBUTION = '© <a href="https://github.com/efradkin/o-maps" target="_blank">Евгений Фрадкин</a> | Orienteering maps of <a href="https://t.me/orient_spb" target="_blank">St-Petersburg and its area</a> based on <a href="https://www.openstreetmap.org/copyright" target="_blank">Open Street Map</a>';

// Initialize the map
const centerX = 59.944179;
const centerY = 30.320337;

const multiX = 1e-5;
const multiY = 2e-5;

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
        popup += '</b>';
        let author = authors[m.author];
        let info = m.info;
        let link = m.link;
        if (author || info || link) {
            popup += '<hr />';
        }
        if (info) {
            popup += info;
            if (author || link) {
                popup += '<br />';
            }
        }
        if (author) {
            popup += author;
            if (link) {
                popup += '<br />';
            }
        }
        if (link) {
            popup += 'Скачать можно <a href="' + link + '" target="_blank">тут</a>.';
        }
        imgLayer.bindPopup(popup);
        imgLayer.on('mouseover', function (e) {
            if (!EDIT_MODE) {
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
    layers: [osmMap, parkGroup]
});

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
};

var layerControl = L.control.layers(
    baseMaps, overlayMaps,
    {collapsed: false, autoZIndex: false}).addTo(map);

map.on('click', onMapClick);

// Set bounds for the overlay
//map.fitBounds(oMap.getBounds());

let marker1 = L.marker(new L.LatLng(0, 0), {draggable: true}).addTo(map);
let marker2 = L.marker(new L.LatLng(0, 0), {draggable: true}).addTo(map);
let marker3 = L.marker(new L.LatLng(0, 0), {draggable: true}).addTo(map);
marker1.on('drag', onDrag);
marker2.on('drag', onDrag);
marker3.on('drag', onDrag);
marker1.on('dragend', onDragEnd);
marker2.on('dragend', onDragEnd);
marker3.on('dragend', onDragEnd);

 // --- functions ---

function onMapSelect(ovrl, map) {
    selectedOverlay = ovrl;
    selectedMap = map;

    if (EDIT_MODE) {
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
        let coordinates = "[[" + point1.lat + ", " + point1.lng + "], [" + point2.lat + ", " + point2.lng + "], [" + point3.lat + ", " + point3.lng + "]]";
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
