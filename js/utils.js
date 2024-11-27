
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
    let imgs = [];
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

function upZindex(ovrl) {
    maxZindex++;
    let zIndex = ovrl.getElement().style.zIndex;
    if (zIndex > maxZindex) {
        maxZindex = zIndex + 1;
    }
    ovrl.getElement().style.zIndex = maxZindex;
}

function locateMap(mapName) {
    map.eachLayer( function(layer) {
        if(layer instanceof L.ImageOverlay && layer._url.includes(mapName)) {
            map.fitBounds(layer.getBounds());
            upZindex(layer);
            return false;
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

const CSV_SPRTR = '\t';

// формируем и печатаем в консоли таблицу информации о картах
function buildMapsCSV(maps, owner) {
    let result = 'Название' + CSV_SPRTR + 'Год' + CSV_SPRTR + 'Инфо о владельцах' + CSV_SPRTR + 'Адрес предпросмотра' +
        CSV_SPRTR + 'Адрес для скачивания' + CSV_SPRTR + 'Доп.информация' + CSV_SPRTR + 'Тип';

    maps.sort((a, b) => a.name.localeCompare(b.name));
    for (const m of maps) {
        if (owner === undefined || owner === m.owner || (Array.isArray(m.owner) && m.owner.includes(owner))) {
            result += '\n' + m.name + CSV_SPRTR + e(m.year) + CSV_SPRTR + o(m.owner) + CSV_SPRTR + link(m.url) +
                CSV_SPRTR + link(m.link) + CSV_SPRTR + clean(e(m.info)) + CSV_SPRTR + m.types;
        }
    }
    console.log(result);
}
function e(s) {
    return s === undefined ? '' : s;
}
function link(s) {
    if (s === undefined)
        return '';
    else
        return 'https://o-maps.spb.ru' + s.substring(1);
}
// processes one or multiple owners
function o(owner) {
    if (owner === undefined)
        return '';
    let result = '';
    if (Array.isArray(owner)) {
        result += '"!'; // "!" отмечает многострочные ячейки
        for (const [i, o] of owner.entries()) {
            if (owners[o]) {
                result += clean(owners[o]);
                if (i < owner.length - 1) {
                    result += '\n';
                }
            }
        }
        result += '"';
    } else {
        if (owners[owner]) {
            result += clean(owners[owner]);
        }
    }
    return result;
}

function authorLabel(k) {
    if (authors[k].about) {
        return '<a href="' + authors[k].about + '" target="_blank">' + authors[k].name + '</a>'
    } else {
        return authors[k].name;
    }
}

// Removes HTML tags and quotes from a string
// https://stackoverflow.com/questions/74517628/remove-html-tags-and-its-contents-from-a-string-javascript
function clean(s) {
    return s.replace(/(<([^>]+)>)/gi, '').replace(/['"]+/g, '');
}