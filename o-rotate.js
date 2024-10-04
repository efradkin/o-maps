
var line = L.polyline([
    centerBounds,
    centerBounds
]).addTo(map);

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

    console.log("Img: ", selectedMap.img.width, selectedMap.img.height);
    var ratio = selectedMap.img.width/selectedMap.img.height;
    marker1pos = map.latLngToContainerPoint(marker1.getLatLng());
    marker2pos = map.latLngToContainerPoint(marker2.getLatLng());
    var rotation = Math.atan2((marker1pos.y - marker2pos.y), (marker1pos.x - marker2pos.x)/ratio) * (180/Math.PI) + 45;

    console.log("Rotation: " + rotation);
    console.log("Marker 1: " + marker1.getLatLng());
    console.log("Marker 2: " + marker2.getLatLng());



    indoor.getElement().style.transform = indoor.getElement().style.transform.replace(/ scale\(.+\)/, "");
    indoor.getElement().style.transform = indoor.getElement().style.transform.replace(/ rotate\(.+\)/, "");

    indoor.getElement().style.transform += " rotate(" + rotation + "deg)";
    indoor.getElement().style.transform += " scale(" + scale + ")";

    console.log("indoor style transform: ", indoor.getElement().style.transform);
};

marker1.on('dragend', onMarkerDrag);
marker2.on('dragend', onMarkerDrag);
