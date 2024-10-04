
var map = L.map('mapid').setView([40.712216, -74.22655], 12);

//.setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(map);

var line = L.polyline([
    [40.712216, -74.22655],
    [40.773941, -74.12544]
]).addTo(map);



var indoor;
var img = new Image();
img.src = 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg';
img.onload = function () {
    var imageUrl = 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
        imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
    indoor = L.imageOverlay(imageUrl, imageBounds, {'zIndex':0, opacity: 0.5}).addTo(map);  //, 'className':'olclass'
    indoor.getElement().classList.add('olclass');
}


var onMarkerDrag = function (e) {
    map.removeLayer(line);

    var img_dlat = Math.abs(indoor.getBounds().getNorth() - indoor.getBounds().getSouth());
    var img_dlng = Math.abs(indoor.getBounds().getEast() - indoor.getBounds().getWest());

    var marker_dlat = Math.abs(marker2.getLatLng().lat - marker1.getLatLng().lat);
    var marker_dlng = Math.abs(marker2.getLatLng().lng - marker1.getLatLng().lng);

    var img_diagonal = Math.sqrt(Math.pow(img_dlat, 2) + Math.pow(img_dlng, 2));
    var marker_diagonal = Math.sqrt(Math.pow(marker_dlat, 2) + Math.pow(marker_dlng, 2));

    var scale = marker_diagonal / img_diagonal;


    var center_lat = (marker2.getLatLng().lat + marker1.getLatLng().lat) / 2;
    var center_lng = (marker2.getLatLng().lng + marker1.getLatLng().lng) / 2;


    indoor.setBounds([[center_lat-img_dlat/2, center_lng-img_dlng/2], [center_lat+img_dlat/2, center_lng+img_dlng/2]]);
    console.log("indoor: ", indoor);

    line = L.polyline([
        [[marker1.getLatLng().lat, marker1.getLatLng().lng], [marker2.getLatLng().lat, marker2.getLatLng().lng]]
    ]).addTo(map);

    console.log("Img: ", img.width, img.height);
    var ratio = img.width/img.height;
    marker1pos = map.latLngToContainerPoint(marker1.getLatLng());
    marker2pos = map.latLngToContainerPoint(marker2.getLatLng());
    var rotation = Math.atan2((marker1pos.y - marker2pos.y), (marker1pos.x - marker2pos.x)/ratio) * (180/Math.PI) + 45 + 180;

    console.log("Rotation: " + rotation);
    console.log("Marker 1: " + marker1.getLatLng());
    console.log("Marker 2: " + marker2.getLatLng());



    indoor.getElement().style.transform = indoor.getElement().style.transform.replace(/ scale\(.+\)/, "");
    indoor.getElement().style.transform = indoor.getElement().style.transform.replace(/ rotate\(.+\)/, "");

    indoor.getElement().style.transform += " rotate(" + rotation + "deg)";
    indoor.getElement().style.transform += " scale(" + scale + ")";

    console.log("indoor style transform: ", indoor.getElement().style.transform);
};

var marker1 = L.marker(new L.LatLng(40.712216, -74.22655), {draggable: true}).addTo(map);
marker1.on('dragend', onMarkerDrag);

var marker2 = L.marker(new L.LatLng(40.773941, -74.12544), {draggable: true}).addTo(map);
marker2.on('dragend', onMarkerDrag);


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
