
function extractFileName(url) {
    const match = url.match(/\/([^\/]+)\.[^\.]+$/);
    return match ? match[1] : '';
}

// from https://stackoverflow.com/questions/6997262/how-to-pull-url-file-extension-out-of-url-string-using-javascript
function extractFileExt(url) {
    // If queries are present, we removed them from the URL.
    // If there is any trailing slash, we remove it from the URL.
    if (url.includes('?')) {
        url = url.replace(/[?&]+([^=&]+)=([^&]*)/gi,'')?.replace(/\/+$/gi,'');
    }
    // Extension starts after the first dot after the last slash
    let extStart = url.indexOf('.',url.lastIndexOf('/')+1);
    if (extStart == -1) {
        return false;
    }
    var ext = url.substr(extStart+1);
    // To handle multiple periods in the filename, we ensure that the current dot is the final one.
    if ( (extStart = url.lastIndexOf('.')) ) {
        ext = url.substr(extStart+1);
    }
    // end of extension must be one of: end-of-string or question-mark or hash-mark with ext.search(/$|[?#]/)
    return ext.substring(0,ext.search(/$|[?#]/));
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

// Removes HTML tags and quotes from a string
// https://stackoverflow.com/questions/74517628/remove-html-tags-and-its-contents-from-a-string-javascript
function clean(s) {
    return s.replace(/(<([^>]+)>)/gi, '').replace(/['"]+/g, '');
}

// считаем площадь в км2
// https://gis.stackexchange.com/questions/423601/leaftlet-map-with-carto-database-to-recalculate-area-on-polygon-edits
function getArea(latLngs) {
    return L.GeometryUtil.geodesicArea(latLngs)*0.000002*.465;
}
function getMapArea(latLngs) {
    return getArea(latLngs)*.7;
}
