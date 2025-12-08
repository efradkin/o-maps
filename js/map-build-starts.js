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

let background = BACKGROUND_PARAM || localStorage.getItem('background') || BACKGROUND_YANDEX;

const BASEMENT =
    (HAS_EMBEDDED_PARAM || background === BACKGROUND_YANDEX || background === BACKGROUND_SATELLITE) ?
        '<a href="https://yandex.ru/legal/maps_termsofuse/ru/?lang=ru">Я.Картах</a>' : '<a href="https://www.openstreetmap.org/copyright">OSM</a>';
const ATTRIBUTION = '© <a href="https://github.com/efradkin/o-maps">O-maps</a> | <a href="https://t.me/o_maps">Спорт. карты</a> на ' + BASEMENT;
const CLEAR_MAP_LABEL = 'Убрать все старты';
const SHOW_ALL_LABEL = 'Показать все старты';

let osmLayer, openTopoLayer, yandexLayer, yandexSatelliteLayer, activeLayers = [];

let otherGroup = L.layerGroup([]);
let schoolGroup = L.layerGroup([]);
let wnGroup = L.layerGroup([]);
let orientirGroup = L.layerGroup([]);
let naGroup = L.layerGroup([]);
let ymGroup = L.layerGroup([]);
let mmsGroup = L.layerGroup([]);
let pskGroup = L.layerGroup([]);
let volkovGroup = L.layerGroup([]);
let ksGroup = L.layerGroup([]);
let kkpGroup = L.layerGroup([]);
let gsGroup = L.layerGroup([]);
let kkmGroup = L.layerGroup([]);
let mbGroup = L.layerGroup([]);
let baGroup = L.layerGroup([]);
let stGroup = L.layerGroup([]);
let rfarGroup = L.layerGroup([]);
let sto24Group = L.layerGroup([]);
let twotwoGroup = L.layerGroup([]);
let majorGroup = L.layerGroup([]);

let allOrientGroups = [
    otherGroup,
    schoolGroup,
    wnGroup,
    orientirGroup,
    naGroup,
    ymGroup,
    mmsGroup,
    pskGroup,
    volkovGroup,
    ksGroup,
    gsGroup,
    kkpGroup,
    kkmGroup,
    mbGroup,
    baGroup,
    stGroup,
    rfarGroup,
    sto24Group,
    twotwoGroup,
    majorGroup
];
let allAgeGroups = [];

// populate age groups
let ageGroups = {};
for (const m of oMaps) {
    if (START_NAME_PARAM && !checkStartMap(START_NAME_PARAM, m)) {
        continue;
    }
    if (m.start || isMajor(m)) {
        let y = startYear(m) || year(m);
        if (y && !ageGroups[y]) {
            getCreateAgeGroup(y);
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

    setActiveBackground();
    if (START_NAME_PARAM) {
        switch (START_NAME_PARAM) {
            case 'OTHER':
            case 'REPORT': activeLayers.push(otherGroup); break;
            case 'SCHOOL': activeLayers.push(schoolGroup); break;
            case 'WN': activeLayers.push(wnGroup); break;
            case 'ORIENTIR': activeLayers.push(orientirGroup); break;
            case 'NA': activeLayers.push(naGroup); break;
            case 'YM': activeLayers.push(ymGroup); break;
            case 'KKP': activeLayers.push(kkpGroup); break;
            case 'GS': activeLayers.push(gsGroup); break;
            case 'MMS': activeLayers.push(mmsGroup); break;
            case 'KZNTSVA': activeLayers.push(pskGroup); break;
            case 'VOLKOV_A': activeLayers.push(volkovGroup); break;
            case 'KS': activeLayers.push(ksGroup); break;
            case 'RFAR': activeLayers.push(rfarGroup); break;
            case '100x24': activeLayers.push(sto24Group); break;
            case '2x2': activeLayers.push(twotwoGroup); break;
            case 'ST': activeLayers.push(stGroup); break;
            case 'VO_FOTO': activeLayers.push(kkmGroup); break;
            case 'KKM': activeLayers.push(kkmGroup); break;
            case 'MB': activeLayers.push(mbGroup); break;
            case 'TA':
            case 'BA': activeLayers.push(baGroup); break;
        }
    } else {
        activeLayers.push(
            schoolGroup, wnGroup, naGroup, orientirGroup, ymGroup, kkpGroup, gsGroup, mmsGroup, pskGroup,
            twotwoGroup, volkovGroup, ksGroup, stGroup, majorGroup // rfarGroup, sto24Group,
            //...Object.values(ageGroups),
        );
    }
}

function buildOverlayMapsContents() {
    let result = {
        "Белые Ночи": wnGroup,
        "Карельские скалы": ksGroup,
        "ККП": kkpGroup,
        "Мемориал Андрея Волкова": volkovGroup,
        "Мемориал Святкина": mmsGroup,
        "Невский Азимут": naGroup,
        "Памяти Кузнецова": pskGroup,
        "Зелёный Змей": gsGroup,
        "Спринт-Тур": stGroup,
        "Школы": schoolGroup,
        "Яркий Мир": ymGroup,
        "Ориентир (ретро)": orientirGroup,
        "2x2": twotwoGroup,
        "100x24": sto24Group,
        "BA/TA": baGroup,
        "RFAR": rfarGroup,
        "ККМ": kkmGroup,
        "Марш-Бросок": mbGroup,
        "<span class='layer-separator'>Чемпионаты и Кубки</span>": majorGroup,
        "<span class='layer-separator'>Прочее</span>": otherGroup
    };
    return result;
}

function allocateMap(m) {
    if (m.start || isMajor(m)) {
        m.groups = [];

        if (Array.isArray(m.start)) {
            for (const s of m.start) {
                pushStartGroupToMap(s, m);
            }
        } else {
            pushStartGroupToMap(m.start, m);
        }

        if (isMajor(m)) {
            pushGroupToMap(m, majorGroup);
        }

        let y = startYear(m) || year(m);
        if (!y) {
            let groupUnknownYear = getCreateAgeGroup(0);
            pushGroupToMap(m, groupUnknownYear);
        } else {
            let yearGroup = getCreateAgeGroup(y);
            pushGroupToMap(m, yearGroup);
        }
    }
}

function pushStartGroupToMap(start, m) {
    switch (start) {
        case 'OTHER':
        case 'REPORT': pushGroupToMap(m, otherGroup); break;
        case 'SCHOOL': pushGroupToMap(m, schoolGroup); break;
        case 'WN': pushGroupToMap(m, wnGroup); break;
        case 'ORIENTIR': pushGroupToMap(m, orientirGroup); break;
        case 'NA': pushGroupToMap(m, naGroup); break;
        case 'YM': pushGroupToMap(m, ymGroup); break;
        case 'GS': pushGroupToMap(m, gsGroup); break;
        case 'KKP': pushGroupToMap(m, kkpGroup); break;
        case 'MMS': pushGroupToMap(m, mmsGroup); break;
        case 'KZNTSVA': pushGroupToMap(m, pskGroup); break;
        case 'VOLKOV_A': pushGroupToMap(m, volkovGroup); break;
        case 'KS': pushGroupToMap(m, ksGroup); break;
        case 'RFAR': pushGroupToMap(m, rfarGroup); break;
        case '100x24': pushGroupToMap(m, sto24Group); break;
        case '2x2': pushGroupToMap(m, twotwoGroup); break;
        case 'ST': pushGroupToMap(m, stGroup); break;
        case 'VO_FOTO': pushGroupToMap(m, kkmGroup); break;
        case 'KKM': pushGroupToMap(m, kkmGroup); break;
        case 'MB': pushGroupToMap(m, mbGroup); break;
        case 'TA':
        case 'BA': pushGroupToMap(m, baGroup); break;
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
    return !isNull(m.start) || isMajor(m);
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