
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

function setOverlayOpacity(opacity) {
    mapOpacity = opacity;
    for (const map of mapOverlays) {
        map.setOpacity(opacity);
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log(`Copied text to clipboard: ${text}`);
        })
        .catch((error) => {
            console.error(`Could not copy text: ${error}`);
        });
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

// считаем площадь в км2
// https://gis.stackexchange.com/questions/423601/leaftlet-map-with-carto-database-to-recalculate-area-on-polygon-edits
function getArea(latLngs) {
    return (L.GeometryUtil.geodesicArea(latLngs)*0.000002).toFixed(2);
}