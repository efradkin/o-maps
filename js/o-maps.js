const EDIT_MODE = false;

// Initialize the map
const centerX = 59.944179;
const centerY = 30.320337;

const multiX = 2e-5;
const multiY = 4e-5;

let map = L.map('map', { attributionControl:false }).setView([centerX, centerY], 11);

let selectedOverlay, selectedMap;
let marker1 = L.marker(new L.LatLng(0, 0), {draggable: true}).addTo(map);
let marker2 = L.marker(new L.LatLng(0, 0), {draggable: true}).addTo(map);
let marker3 = L.marker(new L.LatLng(0, 0), {draggable: true}).addTo(map);

let mapOverlays = [];

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '© Orienteering maps of <a href="https://t.me/orient_spb" target="_blank">St-Petersburg and its area</a> hosted by <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
}).addTo(map);

// Overlay the orienteering maps
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
        let popup = '<b>' + m.name + ' (' + m.year + ')</b>';
        let author = authors[m.author];
        if (author) {
            popup += '<hr />' + author;
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
        imgLayer.addTo(map);

        mapOverlays.push(imgLayer);
    }
}

function onMapSelect(ovrl, map) {
    selectedOverlay = ovrl;
    selectedMap = map;

    if (EDIT_MODE) {
        marker1.setLatLng(ovrl.getTopLeft());
        marker2.setLatLng(ovrl.getTopRight());
        marker3.setLatLng(ovrl.getBottomLeft());
    }
}

// Set bounds for the overlay
//map.fitBounds(oMap.getBounds());

function onMapClick(e) {
    console.log(e.latlng.lat + ", " + e.latlng.lng);
}

map.on('click', onMapClick);

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
        console.log("[[" + point1.lat + ", " + point1.lng + "], [" + point2.lat + ", " + point2.lng + "], [" + point3.lat + ", " + point3.lng + "]]");
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

marker1.on('drag', onDrag);
marker2.on('drag', onDrag);
marker3.on('drag', onDrag);
marker1.on('dragend', onDragEnd);
marker2.on('dragend', onDragEnd);
marker3.on('dragend', onDragEnd);
