const urlParams = new URLSearchParams(window.location.search);
const THE_AUTHOR_PARAM = urlParams.get('author');
const THE_OWNER_PARAM = urlParams.get('owner');
let MAP_NAME_PARAM = urlParams.get('map');
const ONLY_MAP_NAME_PARAM = urlParams.get('onlymap');
const START_NAME_PARAM = urlParams.get('start');
const HAS_WO_AUTHOR_PARAM = urlParams.has('wo-author');
const HAS_ONLY_WO_AUTHOR_PARAM = urlParams.has('only-wo-author');

if (ONLY_MAP_NAME_PARAM) {
    MAP_NAME_PARAM = ONLY_MAP_NAME_PARAM;
}

const ATTRIBUTION = '© <a href="https://github.com/efradkin/o-maps" target="_blank">O-maps</a> | <a href="https://t.me/orient_spb" target="_blank">Спорт. карты</a> на <a href="https://www.openstreetmap.org/copyright" target="_blank">OSM</a>';
const CLEAR_MAP_LABEL = 'Убрать все старты';
const SHOW_ALL_LABEL = 'Показать все старты';

let osmLayer, openTopoLayer, yandexLayer, yandexSatelliteLayer, activeLayers = [];

let schoolGroup = L.layerGroup([]);
let naGroup = L.layerGroup([]);
let ymGroup = L.layerGroup([]);
let mmsGroup = L.layerGroup([]);
let pskGroup = L.layerGroup([]);
let ksGroup = L.layerGroup([]);
let kkpGroup = L.layerGroup([]);
let kkmGroup = L.layerGroup([]);
let mbGroup = L.layerGroup([]);
let baGroup = L.layerGroup([]);
let stGroup = L.layerGroup([]);
let rfarGroup = L.layerGroup([]);
let sto24Group = L.layerGroup([]);
let majorGroup = L.layerGroup([]);

let allOrientGroups = [
    schoolGroup,
    naGroup,
    ymGroup,
    mmsGroup,
    pskGroup,
    ksGroup,
    kkpGroup,
    kkmGroup,
    mbGroup,
    baGroup,
    stGroup,
    rfarGroup,
    sto24Group,
    majorGroup
];
let allAgeGroups = [];

// populate age groups
let ageGroups = {};
for (const m of oMaps) {
    if (START_NAME_PARAM && START_NAME_PARAM !== m.start) {
        continue;
    }
    if (m.start || m.major) {
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
            case 'SCHOOL': activeLayers.push(osmLayer, schoolGroup); break;
            case 'NA': activeLayers.push(osmLayer, naGroup); break;
            case 'YM': activeLayers.push(osmLayer, ymGroup); break;
            case 'KKP': activeLayers.push(osmLayer, kkpGroup); break;
            case 'MMS': activeLayers.push(osmLayer, mmsGroup); break;
            case 'KZNTSVA': activeLayers.push(osmLayer, pskGroup); break;
            case 'KS': activeLayers.push(osmLayer, ksGroup); break;
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
            osmLayer, schoolGroup, naGroup, ymGroup, kkpGroup, mmsGroup, pskGroup, ksGroup, stGroup // rfarGroup, sto24Group,
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
        "Карельские скалы": ksGroup,
        "Памяти Кузнецова": pskGroup,
        "Спринт-Тур": stGroup,
        "Школы": schoolGroup,
        "RFAR": rfarGroup,
        "100x24": sto24Group,
        "ККМ": kkmGroup,
        "Марш-Бросок": mbGroup,
        "BA/TA": baGroup,
        "Чемпионаты и Кубки": majorGroup,
    };
    return result;
}

function allocateMap(m) {
    if (m.start || m.major) {
        m.groups = [];

        switch (m.start) {
            case 'SCHOOL': pushGroupToMap(m, schoolGroup); break;
            case 'NA': pushGroupToMap(m, naGroup); break;
            case 'YM': pushGroupToMap(m, ymGroup); break;
            case 'KKP': pushGroupToMap(m, kkpGroup); break;
            case 'MMS': pushGroupToMap(m, mmsGroup); break;
            case 'KZNTSVA': pushGroupToMap(m, pskGroup); break;
            case 'KS': pushGroupToMap(m, ksGroup); break;
            case 'RFAR': pushGroupToMap(m, rfarGroup); break;
            case '100X24': pushGroupToMap(m, sto24Group); break;
            case 'ST': pushGroupToMap(m, stGroup); break;
            case 'KKM': pushGroupToMap(m, kkmGroup); break;
            case 'MB': pushGroupToMap(m, mbGroup); break;
            case 'TA':
            case 'BA': pushGroupToMap(m, baGroup); break;
        }

        if (m.major) {
            pushGroupToMap(m, majorGroup);
        }

        if (!m.year) {
            let groupUnknownYear = getCreateAgeGroup(0);
            pushGroupToMap(m, groupUnknownYear);
        } else {
            let yearGroup = getCreateAgeGroup(m.year);
            pushGroupToMap(m, yearGroup);
        }
    }
}

function getCreateAgeGroup(year) {
    let yearGroup = ageGroups[year];
    if (!yearGroup) {
        yearGroup = L.layerGroup([]);
        ageGroups[year] = yearGroup;
        allAgeGroups.push(yearGroup);
        activeLayers.push(yearGroup);
    }
    return yearGroup;
}

function isMapAcceptable(m) {
    return typeof m.start !== 'undefined' || m.major;
}

function buildContextmenuItems() {
    return [{
        text: 'О проекте',
        logo: 'images/information.png',
        callback: openWelcome
    }, '-', {
        text: 'Координаты',
        logo: 'images/coordinates.png',
        callback: showCoordinates
    }, {
        text: 'Центр сюда',
        logo: 'images/point.png',
        callback: centerMap
    }, '-', {
        text: SHOW_ALL_LABEL,
        logo: 'images/maps.png',
        callback: showAllOrients
    }, {
        text: CLEAR_MAP_LABEL,
        logo: 'images/eraser.png',
        callback: hideOrients
    }, '-', {
        text: 'Увеличить',
        logo: 'images/zoom-in.png',
        callback: zoomIn
    }, {
        text: 'Уменьшить',
        logo: 'images/zoom-out.png',
        callback: zoomOut
    }, '-', {
        text: 'Всплыв.подсказки',
        logo: 'images/info.png',
        callback: popupsSwitch
    }, {
        text: 'Скрывать карты',
        logo: 'images/hide.png',
        callback: hideMapsSwitch
    }, {
        text: 'Выделять полноразмеры',
        logo: 'images/expand.png',
        callback: fullSizeSwitch
    }, {
        text: hiddenButtonsMode ? 'Показать кнопки' : 'Скрыть кнопки',
        logo: 'images/menu.png',
        callback: hiddenButtonsModeSwitch
    }, '-', {
        text: 'Редактирование',
        logo: 'images/edit.png',
        callback: editModeSwitch
    }];
}