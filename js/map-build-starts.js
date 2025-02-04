const urlParams = new URLSearchParams(window.location.search);
const THE_AUTHOR_PARAM = urlParams.get('author');
const THE_OWNER_PARAM = urlParams.get('owner');
const MAP_NAME_PARAM = urlParams.get('map');
const START_NAME_PARAM = urlParams.get('start');
const HAS_WO_AUTHOR_PARAM = urlParams.has('wo-author');
const HAS_ONLY_WO_AUTHOR_PARAM = urlParams.has('only-wo-author');

const ATTRIBUTION = '© <a href="https://github.com/efradkin/o-maps" target="_blank">O-maps</a> | <a href="https://t.me/orient_spb" target="_blank">Спорт. карты</a> на <a href="https://www.openstreetmap.org/copyright" target="_blank">OSM</a>';
const CLEAR_MAP_LABEL = 'Убрать все старты';
const SHOW_ALL_LABEL = 'Показать все старты';

let osmLayer, openTopoLayer, yandexLayer, yandexSatelliteLayer, activeLayers = [];

let naGroup = L.layerGroup([]);
let ymGroup = L.layerGroup([]);
let mmsGroup = L.layerGroup([]);
let kkpGroup = L.layerGroup([]);
let kkmGroup = L.layerGroup([]);
let mbGroup = L.layerGroup([]);
let baGroup = L.layerGroup([]);
let stGroup = L.layerGroup([]);
let rfarGroup = L.layerGroup([]);
let sto24Group = L.layerGroup([]);

let allOrientGroups = [
    naGroup,
    ymGroup,
    mmsGroup,
    kkpGroup,
    kkmGroup,
    mbGroup,
    baGroup,
    stGroup,
    rfarGroup,
    sto24Group
];

// populate age groups
let ageGroups = {};
for (const m of oMaps) {
    if (START_NAME_PARAM && START_NAME_PARAM !== m.start) {
        continue;
    }
    if (m.start) {
        if (m.year && !ageGroups[m.year]) {
            getCreateAgeGroup(m.year);
        }
    }
}

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

    if (START_NAME_PARAM) {
        switch (START_NAME_PARAM) {
            case 'NA': activeLayers.push(osmLayer, naGroup); break;
            case 'YM': activeLayers.push(osmLayer, ymGroup); break;
            case 'KKP': activeLayers.push(osmLayer, kkpGroup); break;
            case 'MMS': activeLayers.push(osmLayer, mmsGroup); break;
            case 'RFAR': activeLayers.push(osmLayer, rfarGroup); break;
            case '100X24': activeLayers.push(osmLayer, sto24Group); break;
            case 'ST': activeLayers.push(osmLayer, stGroup); break;
            case 'KKM': activeLayers.push(osmLayer, kkmGroup); break;
            case 'MB': activeLayers.push(osmLayer, mbGroup); break;
            case 'TA':
            case 'BA': activeLayers.push(osmLayer, baGroup); break;
        }
    } else {
        activeLayers.push(
            osmLayer, naGroup, ymGroup, kkpGroup, mmsGroup, stGroup // rfarGroup, sto24Group,
            //...Object.values(ageGroups),
        );
    }
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
        "Марш-Бросок": mbGroup,
        "BA/TA": baGroup,
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

    return result;
}

function allocateMap(m) {
    if (m.start) {
        m.groups = [];

        switch (m.start) {
            case 'NA': pushGroup(m, naGroup); break;
            case 'YM': pushGroup(m, ymGroup); break;
            case 'KKP': pushGroup(m, kkpGroup); break;
            case 'MMS': pushGroup(m, mmsGroup); break;
            case 'RFAR': pushGroup(m, rfarGroup); break;
            case '100X24': pushGroup(m, sto24Group); break;
            case 'ST': pushGroup(m, stGroup); break;
            case 'KKM': pushGroup(m, kkmGroup); break;
            case 'MB': pushGroup(m, mbGroup); break;
            case 'TA':
            case 'BA': pushGroup(m, baGroup); break;
        }

        if (!m.year) {
            let groupUnknownYear = getCreateAgeGroup(0);
            pushGroup(m, groupUnknownYear);
        } else {
            let yearGroup = getCreateAgeGroup(m.year);
            pushGroup(m, yearGroup);
        }
    }
}

function getCreateAgeGroup(year) {
    let yearGroup = ageGroups[year];
    if (!yearGroup) {
        yearGroup = L.layerGroup([]);
        ageGroups[year] = yearGroup;
        activeLayers.push(yearGroup);
    }
    return yearGroup;
}

function isMapAcceptable(m) {
    return typeof m.start !== 'undefined';
}