
let background = BACKGROUND_PARAM || localStorage.getItem('background') || BACKGROUND_YANDEX;

const BASEMENT =
    (HAS_EMBEDDED_PARAM || background === BACKGROUND_YANDEX || background === BACKGROUND_SATELLITE) ?
        '<a href="https://yandex.ru/legal/maps_termsofuse/ru/?lang=ru">Я.Картах</a>' : '<a href="https://www.openstreetmap.org/copyright">OSM</a>';
const ATTRIBUTION = '© <a href="https://github.com/efradkin/o-maps">O-Maps</a> | <a href="https://t.me/o_maps">Спорт. карты</a> на ' + BASEMENT;

let osmLayer, openTopoLayer, yandexLayer, yandexSatelliteLayer, activeLayers = [];

let calendarGroup = buildCalendarGroup();
let calendarPastGroup = buildCalendarGroup();

let ooptLayer = buildOoptLayer();

let runGroup = L.layerGroup([]);
let walkGroup = L.layerGroup([]);
let skiGroup = L.layerGroup([]);
let veloGroup = L.layerGroup([]);
let waterGroup = L.layerGroup([]);
//let mapsGroup = L.layerGroup([]);
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

    setActiveBackground();
    const layers = [runGroup, walkGroup, skiGroup, veloGroup, waterGroup];
    if (HAS_CALENDAR_PARAM) {
        layers.push(calendarGroup);
    }
    activeLayers.push(...layers);
}

function buildOverlayMapsContents() {
    let result = {
        "<span class='RUN'>Бег</span>": runGroup,
        "<span class='VELO'>Вело</span>": veloGroup,
        "<span class='WATER'>Водные</span>": waterGroup,
        "<span class='SKI'>Лыжи</span>": skiGroup,
        "<span class='WALK'>Пешие</span>": walkGroup,
        //"<span class='layer-separator'>Спорт.Карты</span>": mapsGroup,
        "<span class='layer-separator'>Карты</span>": rogaineGroup,
        "<span class='layer-separator'>ООПТ</span>": ooptLayer
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
        m.layer = layer; // save bounds for search
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
    }, {
        text: 'Поделиться',
        icon: 'images/share.png',
        callback: shareMap
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