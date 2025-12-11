const urlParams = new URLSearchParams(window.location.search);
let BACKGROUND_PARAM = urlParams.get('background');
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
const HAS_OCAD_PARAM = urlParams.has('ocad');
const HAS_RETRO_PARAM = urlParams.has('retro');

if (HAS_EMBEDDED_PARAM) {
    HAS_NO_BUTTONS_PARAM = true;
}
if (ONLY_MAP_NAME_PARAM) {
    MAP_NAME_PARAM = ONLY_MAP_NAME_PARAM;
}
if (ONLY_TRACK_NAME_PARAM) {
    TRACK_NAME_PARAM = ONLY_TRACK_NAME_PARAM;
}

let background = BACKGROUND_PARAM || localStorage.getItem('background') || BACKGROUND_YANDEX;

const BASEMENT =
    (HAS_EMBEDDED_PARAM || background === BACKGROUND_YANDEX || background === BACKGROUND_SATELLITE) ?
        '<a href="https://yandex.ru/legal/maps_termsofuse/ru/?lang=ru">Я.Картах</a>' : '<a href="https://www.openstreetmap.org/copyright">OSM</a>';
const ATTRIBUTION = '© <a href="https://github.com/efradkin/o-maps">O-maps</a> | <a href="https://t.me/o_maps">Спорт. карты</a> на ' + BASEMENT;
const CLEAR_MAP_LABEL = 'Убрать ориенты';
const SHOW_ALL_LABEL = 'Показать все ориенты';

let osmLayer, openTopoLayer, yandexLayer, yandexSatelliteLayer, activeLayers = [];

let tracksGroup = L.layerGroup([]);

let funGroup = L.layerGroup([]);
let specialGroup = L.layerGroup([]);
let forestGroup = L.layerGroup([]);
let parkGroup = L.layerGroup([]);
let cityGroup = L.layerGroup([]);

let rogaineGroup = L.layerGroup([]);

let groupRetro = L.layerGroup([]);
let group90th = L.layerGroup([]);
let group2000th = L.layerGroup([]);
let group2010th = L.layerGroup([]);
let group2020th = L.layerGroup([]);
let groupUnknownYear = L.layerGroup([]);

let allOrientGroups = [
    specialGroup,
    forestGroup,
    parkGroup,
    cityGroup,
];
let allAgeGroups = [
    groupRetro,
    group90th,
    group2000th,
    group2010th,
    group2020th,
    groupUnknownYear
];

const mapsStatObj = { // collects the maps statistics
    funGroup: [],
    cityGroup: [],
    parkGroup: [],
    forestGroup: [],
    specialGroup: [],
    rogaineGroup: [],
};

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

    if (HAS_EMBEDDED_PARAM) {
        activeLayers.push(yandexLayer);
    } else {
        setActiveBackground();
    }
    if (HAS_RETRO_PARAM) {
        activeLayers.push(
            parkGroup, cityGroup, forestGroup, groupRetro,
        );
    } else {
        if ((OWNER_PARAM && owners[OWNER_PARAM].rogaine) || (START_NAME_PARAM && starts[START_NAME_PARAM].rogaine) ||
            ('ROGAINE' === TYPE_PARAM) || (typeof rogaineRequired !== 'undefined' && rogaineRequired)) {
            activeLayers.push(
                parkGroup, cityGroup, forestGroup,
                group2020th, group2010th, group2000th, groupUnknownYear, rogaineGroup // group90th, groupRetro,
            );
        } else if ('FOTO' === TYPE_PARAM || 'FUN' === TYPE_PARAM) {
            activeLayers.push(
                parkGroup, cityGroup, forestGroup,
                group2020th, group2010th, group2000th, groupUnknownYear, funGroup
            );
        } else {
            activeLayers.push(
                parkGroup, cityGroup, forestGroup,
                group2020th, group2010th, group2000th, groupUnknownYear // group90th, groupRetro,
            );
        }
    }
}

function buildOverlayMapsContents() {
    return {
        "Город": cityGroup,
        "Парки": parkGroup,
        "Лес": forestGroup,
        "Специальные": specialGroup,
        "<span class='layer-separator'>2020-е</span>": group2020th,
        "2010-е": group2010th,
        "2000-е": group2000th,
        "90-е": group90th,
        "Ретро": groupRetro,
        "???": groupUnknownYear,
        "<span class='layer-separator' id='funs-group-check'>Необычные</span>": funGroup,
        "<span class='layer-separator'>Рогейн</span>": rogaineGroup,
        "<span class='layer-separator' id='tracks-group-check'>Маршруты</span>": tracksGroup
    };
}

function allocateMap(m, imgLayer) {
    m.groups = [];
    if (m.gpx) {
        // треки
        pushGroupToMap(m, tracksGroup);
        imgLayer.addTo(tracksGroup);
    } else {
        // карты
        let added = false;
        if (m.type) {
            if (m.type.includes('ROGAINE')) {
                added = true;
                mapsStatObj.rogaineGroup.push(imgLayer);
                imgLayer.addTo(rogaineGroup);
                let el = imgLayer.getElement();
                if (el) {
                    el.style.zIndex = 0;
                }
            }
            if (isSpecialMap(m)) {
                added = true;
                mapsStatObj.specialGroup.push(imgLayer);
                pushGroupToMap(m, specialGroup);
            }
            if (m.type.includes('CITY')) {
                added = true;
                mapsStatObj.cityGroup.push(imgLayer);
                pushGroupToMap(m, cityGroup);
            }
            if (m.type.includes('PARK')) {
                added = true;
                mapsStatObj.parkGroup.push(imgLayer);
                pushGroupToMap(m, parkGroup);
            }
            if (isFun(m)) {
                added = true;
                mapsStatObj.funGroup.push(imgLayer);
                imgLayer.addTo(funGroup);
            }
        }
        if (!added) {
            mapsStatObj.forestGroup.push(imgLayer);
            pushGroupToMap(m, forestGroup);
        }

        if (isOrientMap(m)) {
            let y = year(m);
            if (m.correct) {
                y = m.correct;
            }
            if (!y) {
                pushGroupToMap(m, groupUnknownYear);
            } else if (y >= 2020) {
                pushGroupToMap(m, group2020th);
            } else if (y >= 2010) {
                pushGroupToMap(m, group2010th);
            } else if (y >= 2000) {
                pushGroupToMap(m, group2000th);
            } else if (y >= 1990) {
                pushGroupToMap(m, group90th);
            } else {
                pushGroupToMap(m, groupRetro);
            }
        }
    }
}

function isMapAcceptable(m) {
    return isOrientMap(m) || isRogaine(m) || isFun(m);
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
        text: SHOW_ALL_LABEL,
        icon: 'images/maps.png',
        callback: showAllOrients
    }, {
        text: CLEAR_MAP_LABEL,
        icon: 'images/eraser.png',
        callback: hideOrients
    }, {
        text: 'Показать все годы',
        icon: 'images/calendar.png',
        callback: showAllAges
    }, {
        text: 'Очистить все годы',
        icon: 'images/white-calendar.png',
        callback: clearAges
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