
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
        return 'url'; // hardcoded for the URL icon
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
function saveMapState(map, region) {
    const center = map.getCenter();
    const zoom = map.getZoom();
    const mapState = {
        lat: center.lat,
        lng: center.lng,
        zoom: zoom
    };
    localStorage.setItem(region + '.mapState', JSON.stringify(mapState));
}

// Function to load saved map state from localStorage
function loadMapState(region) {
    const savedState = localStorage.getItem(region + '.mapState');
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

// Removes the HTML elements with their content (from ChatGPT)
function strip(s) {
    const temp = document.createElement('div');
    temp.innerHTML = s;

    let result = '';
    // Iterate through all child nodes
    temp.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            result += node.textContent;
        }
    });

    return clean(result.trim());
}

// считаем площадь в км2
// https://gis.stackexchange.com/questions/423601/leaftlet-map-with-carto-database-to-recalculate-area-on-polygon-edits
function getArea(latLngs) {
    return L.GeometryUtil.geodesicArea(latLngs)*0.000002*.465;
}
function getMapArea(latLngs) {
    return getArea(latLngs)*1.2;
}
// считаем длину в км
// https://gis.stackexchange.com/questions/422864/getting-total-length-of-polyline-from-leaflet-draw
function getDistance(latLngs) {
    var length = 0;
    for (var i = 0; i < latLngs.length - 1; i++) {
        length += latLngs[i].distanceTo(latLngs[i + 1]);
    }
    return (length / 1000).toFixed(2);
}

function dateDiff(first, second) {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

// from ChatGPT
function parseCoordinates(str) {
    // Regex pattern to match latitude and longitude (separated by space)
    const regex = /(-?\d{1,3}\.\d+)\s*,*\s*(-?\d{1,3}\.\d+)/;
    const match = str.match(regex);

    if (match) {
        const lat = parseFloat(match[1]);
        const lng = parseFloat(match[2]);
        return new L.LatLng(lat, lng);
    } else {
        return null;  // If no valid coordinates are found
    }
}

function removeFromArray(array, value) {
    const index = array.indexOf(value);
    if (index > -1) { // only splice array when item is found
        array.splice(index, 1); // 2nd parameter means remove one item only
    }
}

function isObject(obj) {
    return obj && typeof obj === 'object' && obj.constructor === Object;
}

function isEmpty(array) {
    return (array === undefined || array.length == 0);
}

function safe(s) {
    return s || '';
}

const downloadTableAsCSV = (table, filename) => {
    const csv = Array.from(table.find('tr')).reduce((acc, row) => {
        const cols = Array.from($(row).find('td, th'));
        const rowData = cols.map((col) => `"${$(col).text().trim()}"`);
        acc.push(rowData.join(';'));
        return acc;
    }, []);

    const csvContent = `data:text/csv;charset=utf-8,\uFEFF${csv.join('\n')}`;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};