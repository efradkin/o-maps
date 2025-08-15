const urlParams = new URLSearchParams(window.location.search);
let AUTHOR_PARAM = urlParams.get('author');
const OWNER_PARAM = urlParams.get('owner');
const PLANNER_PARAM = urlParams.get('planner');
const TYPE_PARAM = urlParams.get('type');
const TRACK_TYPE_PARAM = urlParams.get('track-type');
const TRACK_MONTH_PARAM = urlParams.get('track-month');
let MAP_NAME_PARAM = urlParams.get('map');
let TRACK_NAME_PARAM = urlParams.get('track');
const ONLY_MAP_NAME_PARAM = urlParams.get('onlymap');
const ONLY_TRACK_NAME_PARAM = urlParams.get('onlytrack');
let START_NAME_PARAM = urlParams.get('start');
const HAS_WO_AUTHOR_PARAM = urlParams.has('wo-author');
const HAS_ONLY_WO_AUTHOR_PARAM = urlParams.has('only-wo-author');
const HAS_RESTRICTED_PARAM = urlParams.has('restricted');
const HAS_TRACKS_PARAM = urlParams.has('tracks');
const X_PARAM = urlParams.get('x');
const Y_PARAM = urlParams.get('y');
const ZOOM_PARAM = urlParams.get('zoom');
let HAS_NO_BUTTONS_PARAM = urlParams.has('no-buttons');
const HAS_EMBEDDED_PARAM = urlParams.has('embedded');
const HAS_OCAD = urlParams.has('ocad');

if (HAS_EMBEDDED_PARAM) {
    HAS_NO_BUTTONS_PARAM = true;
}
if (ONLY_MAP_NAME_PARAM) {
    MAP_NAME_PARAM = ONLY_MAP_NAME_PARAM;
}
if (ONLY_TRACK_NAME_PARAM) {
    TRACK_NAME_PARAM = ONLY_TRACK_NAME_PARAM;
}

const ATTRIBUTION = '© <a href="https://github.com/efradkin/o-maps">O-maps</a> | <a href="https://t.me/orient_spb">Спорт. карты</a> на <a href="https://www.openstreetmap.org/copyright">OSM</a>';

let osmLayer, openTopoLayer, yandexLayer, yandexSatelliteLayer, activeLayers = [];

let runGroup = L.layerGroup([]);
let walkGroup = L.layerGroup([]);
let skiGroup = L.layerGroup([]);
let veloGroup = L.layerGroup([]);
let waterGroup = L.layerGroup([]);
let mapsGroup = L.layerGroup([]);
let rogaineGroup = L.layerGroup([]);

let allOrientGroups = [
    runGroup,
    walkGroup,
    skiGroup,
    veloGroup,
    waterGroup,
];

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

    activeLayers.push(
        osmLayer, runGroup, walkGroup, skiGroup, veloGroup, waterGroup
    );
}

function buildOverlayMapsContents() {
    let result = {
        "Бег": runGroup,
        "Вело": veloGroup,
        "Водные": waterGroup,
        "Лыжи": skiGroup,
        "Пешие": walkGroup,
        //"<span class='layer-separator'>Спорт.Карты</span>": mapsGroup,
        "<span class='layer-separator'>Карты</span>": rogaineGroup,
    };
    return result;
}

function allocateMap(m, layer) {
    m.groups = [];

    if (m.gpx) {
        // треки
        if (m.type.includes('RUN')) {
            processTrackMap(m, layer, runGroup);
        }
        if (m.type.includes('VELO')) {
            processTrackMap(m, layer, veloGroup);
            layer.addTo(runGroup);
        }
        if (m.type.includes('WATER')) {
            processTrackMap(m, layer, waterGroup);

        }
        if (m.type.includes('SKI')) {
            processTrackMap(m, layer, skiGroup);
        }
        if (m.type.includes('WALK')) {
            processTrackMap(m, layer, walkGroup);
        }
    } else {
        // карты
        if (m.type && m.type.includes('ROGAINE')) {
            processTrackMap(m, layer, rogaineGroup);
        } else {
            //processTrackMap(m, layer, mapsGroup);
        }
    }
}

function processTrackMap(m, layer, group) {
    pushGroupToMap(m, group);
    layer.addTo(group);
}

function isMapAcceptable(m) {
    return m.type && m.type.includes('ROGAINE') && !m.hidden;
}

function buildContextmenuItems() {
    return [{
        text: 'О проекте',
        icon: 'images/information.png',
        callback: openWelcome
    }, '-', {
        text: 'Координаты',
        icon: 'images/coordinates.png',
        callback: showCoordinates
    }, {
        text: 'Центр сюда',
        icon: 'images/point.png',
        callback: centerMap
    }, '-', {
        text: "Показать все треки",
        icon: 'images/maps.png',
        callback: showAllOrients
    }, {
        text: "Скрыть все треки",
        icon: 'images/eraser.png',
        callback: hideOrients
    }, '-', {
        text: 'Увеличить',
        icon: 'images/zoom-in.png',
        callback: zoomIn
    }, {
        text: 'Уменьшить',
        icon: 'images/zoom-out.png',
        callback: zoomOut
    }, '-', {
        text: 'Всплыв.подсказки',
        icon: 'images/info.png',
        callback: popupsSwitch
    }, {
        text: 'Скрывать карты',
        icon: 'images/hide.png',
        callback: hideMapsSwitch
    }, {
        text: 'Выделять полноразмеры',
        icon: 'images/expand.png',
        callback: fullSizeSwitch
    }, {
        text: hiddenButtonsMode ? 'Показать кнопки' : 'Скрыть кнопки',
        icon: 'images/menu.png',
        callback: hiddenButtonsModeSwitch
    }, '-', {
        text: 'Редактирование',
        icon: 'images/edit.png',
        callback: editModeSwitch
    }];
}