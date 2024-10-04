// Initialize the map
let centerX = 59.944179;
let centerY = 30.320337;
let centerBounds = [centerX, centerY];
let map = L.map('map').setView(centerBounds, 11);

let indoor, selectedMap;
let marker1 = L.marker(new L.LatLng(centerX, centerY), {draggable: true}).addTo(map);
let marker2 = L.marker(new L.LatLng(centerX, centerY), {draggable: true}).addTo(map);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
}).addTo(map);

// Overlay your orienteering map
for (const m of oMaps) {
    m.img = new Image();
    m.img.src = m.url;

    m.img.onload = function () {
        let imgLayer = L.imageOverlay(m.url, m.bounds, { opacity: 0.7, interactive: true});
        imgLayer.bindPopup(m.name + ' (' + m.year + ')');
        imgLayer.on('mouseover', function (e) {
            this.openPopup();
        });
        imgLayer.on('mouseout', function (e) {
            this.closePopup();
        });
        imgLayer.on('click', function (e) {
            onMapSelect(imgLayer, m);
        });
        imgLayer.addTo(map);
        imgLayer.getElement().classList.add('olclass');
        if (m.transform) {
            // console.log('m.transform', m.transform)
            imgLayer.getElement().style.transform = m.transform;
        }
    }}

function onMapSelect(ovrl, map) {
    console.log(ovrl, map);
    indoor = ovrl;
    selectedMap = map;

    let ne = ovrl.getBounds().getNorthEast();
    let sw = ovrl.getBounds().getSouthWest()

    marker1.setLatLng(new L.LatLng(ne.lat, ne.lng));
    marker2.setLatLng(new L.LatLng(sw.lat, sw.lng));

    line.setLatLngs([
        new L.LatLng(marker1.getLatLng().lat, marker1.getLatLng().lng),
        new L.LatLng(marker2.getLatLng().lat, marker2.getLatLng().lng)])
}

// Set bounds for the overlay
//map.fitBounds(oMap.getBounds());

let popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
