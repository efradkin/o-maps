const urlParams = new URLSearchParams(window.location.search);
const THE_AUTHOR_PARAM = urlParams.get('author');
const THE_OWNER_PARAM = urlParams.get('owner');
const MAP_NAME_PARAM = urlParams.get('map');
const HAS_WO_AUTHOR_PARAM = urlParams.has('wo-author');
const HAS_ONLY_WO_AUTHOR_PARAM = urlParams.has('only-wo-author');

const ATTRIBUTION = '© <a href="https://github.com/efradkin/o-maps" target="_blank">Евгений Фрадкин</a> | <a href="https://t.me/orient_spb" target="_blank">Спорт. карты</a> на <a href="https://www.openstreetmap.org/copyright" target="_blank">OSM</a>';

let naGroup = L.layerGroup([]);
let ymGroup = L.layerGroup([]);
let mmsGroup = L.layerGroup([]);
let kkpGroup = L.layerGroup([]);
let kkmGroup = L.layerGroup([]);
let stGroup = L.layerGroup([]);
let rfarGroup = L.layerGroup([]);
let sto24Group = L.layerGroup([]);

// populate age groups
let ageGroups = {};
for (const m of oMaps) {
    if (m.start) {
        if (m.year && !ageGroups[m.year]) {
            getCreateAgeGroup(m.year);
        }
    }
}

let groupAll = L.layerGroup([]);

let osmLayer, openTopoLayer, yandexLayer, yandexSatelliteLayer, initialLayers
let mapElement = document.getElementById('map');
if (mapElement) {
    osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 17,
        attribution: ATTRIBUTION
    });
    openTopoLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        maxZoom: 17,
        attribution: ATTRIBUTION
    });
    yandexLayer = L.yandex({
        maxZoom: 17,
        attribution: ATTRIBUTION
    });
    yandexSatelliteLayer = L.yandex({
        type: 'satellite',
        maxZoom: 17,
        attribution: ATTRIBUTION
    });

    initialLayers = [
        osmLayer, naGroup, ymGroup, kkpGroup, mmsGroup, stGroup, // rfarGroup, sto24Group, groupAll,
        //...Object.values(ageGroups),
    ];
}

function buildOverlayMapsContents() {
    let result = {
        "Невский Азимут": naGroup,
        "Яркий Мир": ymGroup,
        "ККП": kkpGroup,
        "ММС": mmsGroup,
        "Спринт-Тур": stGroup,
        "RFAR": rfarGroup,
        "100x24": sto24Group,
        "ККМ": kkmGroup,
    };

    let separated = false;
    for (let y in ageGroups) {
        let key = "<span>" + y + "</span>";
        if (!separated) {
            key = "<span class='layer-separator'>" + y + "</span>";
            separated = true;
        }
        result[key] = ageGroups[y];
    }
    result["<span class='layer-separator'>Все</span>"] = groupAll;

    return result;
}

function allocateMap(m, imgLayer) {
    switch (m.start) {
        case 'NA': imgLayer.addTo(naGroup); break;
        case 'YM': imgLayer.addTo(ymGroup); break;
        case 'KKP': imgLayer.addTo(kkpGroup); break;
        case 'MMS': imgLayer.addTo(mmsGroup); break;
        case 'RFAR': imgLayer.addTo(rfarGroup); break;
        case '100X24': imgLayer.addTo(sto24Group); break;
        case 'ST': imgLayer.addTo(stGroup); break;
        case 'KKM': imgLayer.addTo(kkmGroup); break;
    }

    if (m.start) {
        if (!m.year) {
            let groupUnknownYear = getCreateAgeGroup(0);
            imgLayer.addTo(groupUnknownYear);
        } else {
            let yearGroup = getCreateAgeGroup(m.year);
            imgLayer.addTo(yearGroup);
        }
        imgLayer.addTo(groupAll);
    }
}

function getCreateAgeGroup(year) {
    let yearGroup = ageGroups[year];
    if (!yearGroup) {
        yearGroup = L.layerGroup([]);
        ageGroups[year] = yearGroup;
    }
    return yearGroup;
}
