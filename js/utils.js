
/*   CONSTANTS   */
const DAY_TIME_RANGE = 1000 * 60 * 60 * 24;
const WEEK_TIME_RANGE = DAY_TIME_RANGE * 7;

const O_SITE_ADDRESS_PREFIX = 'https://o-site.spb.ru/race.php?id=';

const regions = {
    ALTAI: {
        name: 'Алтайский край',
        logo: 'altai.gif'
    },
    ARKHANGELSK: {
        name: 'Архангельск',
        logo: 'arkhangelsk.webp'
    },
    BASH: {
        name: 'Башкортостан',
        logo: 'bash.gif'
    },
    VLADIMIR: {
        name: 'Владимирская обл',
    },
    VOLOGDA: {
        name: 'Вологодская обл',
    },
    GLNDZHK: {
        name: 'Геленджик',
        logo: 'gelendzhik.gif'
    },
    DAGESTAN: {
        name: 'Дагестан',
    },
    DV: {
        name: 'Дальний Восток',
        logo: 'pkfso.webp'
    },
    IRKUTSK: {
        name: 'Иркутская обл'
    },
    KABARDA: {
        name: 'Кабардино-Балкария'
    },
    KZKHSTN: {
        name: 'Казахстан'
    },
    KLNNGRD: {
        name: 'Калининград'
    },
    KLGA: {
        name: 'Калуга',
        logo: 'kaluga.gif'
    },
    KURGAN: {
        name: 'Курган',
    },
    KRCHCHRK: {
        name: 'Карачаево-Черкессия',
        logo: 'karachay-cherkessia.gif'
    },
    KOSTROMA: {
        name: 'Кострома',
    },
    KARELIA: {
        name: 'Карелия',
        logo: 'karelia.gif'
    },
    CHINA: {
        name: 'Китай',
        logo: 'china.webp'
    },
    KRASNODAR: {
        name:'Краснодар',
        logo: 'krasnodar_krai.webp'
    },
    KRASNOYARSK: {
        name:'Красноярский край',
        logo: 'kranoyarsk.webp'
    },
    LNGRD: {
        name: 'Ленинград'
    },
    MSK: {
        name: 'Москва'
    },
    MURMANSK: {
        name: 'Мурманск',
        logo: 'murmansk.webp'
    },
    N_NOVGOROD: {
        name: 'Нижний Новгород',
        logo: 'nn_rogaine.gif'
    },
    NOVGOROD: {
        name: 'Великий Новгород',
    },
    NVRSYSK: {
        name: 'Новороссийск',
        logo: 'novorossiysk.gif'
    },
    NSK: {
        name: 'Новосибирск',
        logo: 'nsk_orient.webp'
    },
    ORENBURG: {
        name: 'Оренбург',
        logo: 'orenburg.webp'
    },
    PORTUGAL: {
        name: 'Португалия',
        logo: 'portugal.gif'
    },
    PSKOV: {
        name: 'Псков'
    },
    PERM: {
        name: 'Пермь',
        logo: 'perm_orient_retro.webp'
    },
    ROSTOV: {
        name: 'Ростов-на-Дону',
        logo: 'rostov.webp'
    },
    RYAZAN: {
        name: 'Рязань'
    },
    SAMARA: {
        name: 'Самара',
        logo: 'samara.webp'
    },
    EKB: {
        name: 'Свердловская обл',
        logo: 'ekb_orient.webp'
    },
    SERBIA: {
        name: 'Сербия'
    },
    SPB: {
        name: 'С-Петербург'
    },
    TULA: {
        name: 'Тульская обл'
    },
    TVER: {
        name: 'Тверская обл',
        logo: 'tver.webp'
    },
    UKR: {
        name: 'Украина'
    },
    FRA: {
        name: 'Франция'
    },
    CHELYABINSK: {
        name: 'Челябинск',
        logo: 'o-chel.webp'//'chelyabinsk.gif'
    },
    CZECH: {
        name: 'Чехия'
    },
    CHITA: {
        name: 'Чита'
    },
};

const dic = {
    RUN: 'БЕГ',
    SKI: 'ЛЫЖИ',
    VELO: 'ВЕЛО',
    WALK: 'ПЕШИЙ',
    WATER: 'ВОДНЫЙ',
    // ---
    CITY: 'ГОРОД',
    EXCLUDED: 'НЕУЧТЁНКА',
    FOTO: 'ФОТО',
    FUN: 'НЕОБЫЧНО',
    ORIENT: 'ОРИЕНТ',
    FOREST: 'ЛЕС',
    PARK: 'ПАРК',
    RELIEF: 'РЕЛЬЕФ',
    ROGAINE: 'РОГЕЙН',
    SPRINT: 'СПРИНТ',
    WINTER: 'ЗИМА',
    INDOOR: 'ВНУТРИ',
    SPECIAL: 'НЕЧТО',
};

const EVENT_TYPES = ['ALL','ORIENT','ROGAINE','VELO','OTHER'];

const color = {
    RUN: 'red',
    SKI: 'blue',
    VELO: 'green',
    WALK: 'brown',
    WATER: 'darkblue',
};

const WEAK_DAYS_SHORT = [
    'ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'
];

const MONTHS_SHORT = [
    'ЯНВ', 'ФЕВ', 'МАР', 'АПР', 'МАЯ', 'ИЮН',
    'ИЮЛ', 'АВГ', 'СЕН', 'ОКТ', 'НОЯ', 'ДЕК'
];

const BACKGROUND_OSM = 'osm';
const BACKGROUND_TOPO = 'topo';
const BACKGROUND_YANDEX = 'yandex';
const BACKGROUND_SATELLITE = 'satellite';
const OOPT_TOP_PANE = 'ooptTopPane';

const LOGO_CAROUSEL_TEMPLATE = `
        <div id="logo-carousel" class="carousel carousel-dark slide">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img src="./image_1" class="d-block popup-logo" alt="Лого">
                    <div class="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="./image_2" class="d-block popup-logo" alt="Лого">
                    <div class="carousel-caption d-none d-md-block">
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#logo-carousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#logo-carousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
        </div>
    `;

const ACTUAL_EVENTS_CALENDAR_PARAM_VALUE = 'actual';
const FUTURE_EVENTS_CALENDAR_PARAM_VALUE = 'future';
const MEDIA_EVENTS_CALENDAR_PARAM_VALUE = 'media';
const ORIENT_EVENTS_CALENDAR_PARAM_VALUE = 'ORIENT';
const ROGAINE_EVENTS_CALENDAR_PARAM_VALUE = 'ROGAINE';
const MULTI_EVENTS_CALENDAR_PARAM_VALUE = 'MULTI';
const SKI_EVENTS_CALENDAR_PARAM_VALUE = 'SKI';
const VELO_EVENTS_CALENDAR_PARAM_VALUE = 'VELO';
const OTHER_EVENTS_CALENDAR_PARAM_VALUE = 'OTHER';

const onlyOneSport = (typeof oneSportOnly !== 'undefined') && oneSportOnly;

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
const HAS_WO_AUTHOR_PARAM = urlParams.has('wo-author');
const HAS_ONLY_WO_AUTHOR_PARAM = urlParams.has('only-wo-author');
const HAS_ONLY_WO_FULL_PARAM = urlParams.has('only-wo-full');
const HAS_RESTRICTED_PARAM = urlParams.has('restricted');
const HAS_TRACKS_PARAM = urlParams.has('tracks');
const X_PARAM = urlParams.get('x');
const Y_PARAM = urlParams.get('y');
const ZOOM_PARAM = urlParams.get('zoom');
let HAS_NO_BUTTONS_PARAM = urlParams.has('no-buttons');
const HAS_EMBEDDED_PARAM = urlParams.has('embedded');
const HAS_OCAD_PARAM = urlParams.has('ocad');
const HAS_RETRO_PARAM = urlParams.has('retro');
const YEAR_PARAM = urlParams.get('year');
const START_YEAR_PARAM = urlParams.get('startYear');
const HAS_CALENDAR_PARAM = urlParams.has('calendar');
const CALENDAR_PARAM = urlParams.get('calendar') ?? urlParams.get('event-type');
let START_NAME_PARAM = urlParams.get('start');

let HAS_ME_PARAM = urlParams.has('me');
const HAS_ONLY_ME_PARAM = urlParams.has('only-me');
if (HAS_ONLY_ME_PARAM) HAS_ME_PARAM = true;

if (HAS_EMBEDDED_PARAM) {
    HAS_NO_BUTTONS_PARAM = true;
}
if (ONLY_MAP_NAME_PARAM) {
    MAP_NAME_PARAM = ONLY_MAP_NAME_PARAM;
}
if (ONLY_TRACK_NAME_PARAM) {
    TRACK_NAME_PARAM = ONLY_TRACK_NAME_PARAM;
}

/*   FUNCTIONS   */

function year(o) { // map, track, event
    if (o.year) return o.year;
    let oDate = o.date;
    if (Array.isArray(oDate)) {
        oDate = oDate[0];
    }
    if (oDate) {
        return new Date(oDate).getFullYear();
    }
    return null;
}

function startYear(o) { // map, track, event
    if (o.startYear) return o.startYear;
    let oDate = o.date;
    if (Array.isArray(oDate)) {
        oDate = oDate[0];
    }
    if (oDate) {
        return new Date(oDate).getFullYear();
    }
    return null;
}

function dateForCompare(m) {
    let mDate = m.date;
    if (Array.isArray(mDate)) {
        mDate = mDate[0];
    }
    if (mDate) return new Date(mDate);
    const sy = m.startYear;
    if (sy) {
        return new Date(sy, 0);
    }
    const y = m.year;
    if (y) {
        return new Date(y, 0);
    }
    return new Date(0, 0);
}

function getMapDates(m) {
    if (Array.isArray(m.date)) {
        let result = '';
        for (const d of m.date) {
            if (result) {
                result += ', ';
            }
            result += formatDateString(d, true, false);
        }
        return result;
    } else {
        return formatDateString(m.date, true, false);
    }
}

function formatDate(o, withYear, withDayOfWeek) { // map, track, event with ".date"
    let oDate = o.date;
    if (Array.isArray(oDate)) {
        oDate = oDate[0];
    }
    return formatDateString(oDate, withYear, withDayOfWeek);
}

function formatDateString(oDate, withYear, withDayOfWeek) { // map, track, event with ".date"
    if (!oDate) {
        return '';
    }
    const date = new Date(oDate);
    if (!isNaN(date.getTime())) {
        const day = date.getDate();
        const month = MONTHS_SHORT[date.getMonth()];
        const year = date.getFullYear();
        const dayWeek = WEAK_DAYS_SHORT[date.getDay()];
        if (withYear && withDayOfWeek) {
            return `${day} ${month} ${year} (${dayWeek})`;
        } else if (withYear && !withDayOfWeek) {
            return `${day} ${month} ${year}`;
        } else if (!withYear && withDayOfWeek) {
            return `${day} ${month} (${dayWeek})`;
        } else {
            return `${day} ${month}`;
        }
    } else {
        return '';
    }
}

function setActiveBackground() {
    switch (background) {
        case BACKGROUND_OSM: activeLayers.push(osmLayer); break;
        case BACKGROUND_TOPO: activeLayers.push(openTopoLayer); break;
        case BACKGROUND_SATELLITE: activeLayers.push(yandexSatelliteLayer); break;
        default: activeLayers.push(yandexLayer);
    }
}

let skiTrackKind = {
    SKATE_ROUTE: {
        name:'Конёк',
        description:'Регулярная трасса. Конёк. Прокатывается техникой'
    },
    CLASSIC_ROUTE: {
        name:'Классика',
        description:'Постоянная классическая лыжня. Прокатывается техникой'
    },
    FICKLE_ROUTE: {
        name:'Непостоянно',
        description:'Трасса прокатывается техникой, но не регулярно'
    },
    WALKWAY: {
        name:'Парк',
        description:'Парковая дорожка. На хороших лыжах сюда не стоит'
    },
    FURROW: {
        name:'Самотоп',
        description:'Самотопная лыжня. Может вообще отсутствовать'
    },
};

let CALENDAR_PLACES = {
    GARBO: ['гарболово','наша трасса'],
    GATCH: ['гатчин'],
    DDR: ['дудергоф','можай'],
    ZELIK: ['зеленогорск','прибой','сестрорецк'],
    OREKH: ['орехово'],
    PSHK: ['пушкин','царско'],
    SPB: ['спб','петербург','крестовский','парголово','екатерингоф','полежа','полюстр','яблоновский','интренацианолистов','пискаревск','городов-героев'],
    TKS: ['токсово','кузьмолово','охта-парк','осельки','утц'],
    VBR: ['выборг', 'выборж'],
    NONP: ['демино', 'петрозаводск'],
};

function getEventPlaceCode(place) {
    for (let p in CALENDAR_PLACES) {
        for (const s of CALENDAR_PLACES[p]) {
            if (place.toLowerCase().includes(s)) {
                return p;
            }
        }
    }
}

function getTypesList(m, colored) {
    let list = [];
    let type = m.type;
    if (type && !Array.isArray(type)) {
        type = [type];
    }
    if (type && type.length > 0 || m.excluded) {
        let types = [];
        if (type) {
            types = [ ...type ];
        }
        if (m.excluded) {
            types.push('EXCLUDED');
        }
        list = types.map(t => {
            let tp = dic[t];
            if (t === 'SKI' && m.ski_kind) {
                tp += ' <span title="' + skiTrackKind[m.ski_kind].description + '">(' + skiTrackKind[m.ski_kind].name + ')<span>';
            }
            return (colored ? '<span class="' + t + '">' + tp + '</span>' : tp);
        }).join(', ');
    }
    return list;
}

function isOrientMap(m) {
    return  isEmpty(m.type) || m.type.includes('FOREST') || m.type.includes('CITY') || m.type.includes('PARK') || m.type.includes('SPRINT') || isSpecialMap(m);
}

function isSpecialMap(m) {
    return !isEmpty(m.type) && (m.type.includes('RELIEF') || m.type.includes('WINTER') || m.type.includes('VELO') || m.type.includes('INDOOR') || m.type.includes('SPECIAL'));
}

function isRogaine(m) {
    return !isEmpty(m.type) && m.type.includes('ROGAINE');
}

function isFun(m) {
    return !isEmpty(m.type) && (m.type.includes('FUN') || m.type.includes('FOTO'));
}

function isMapHidden(m) {
    return m.hidden || (m.owner && m.owner === 'NW');
}

function isMajor(m) {
    if (m.major) {
        return true;
    } else {
        if (m.start) {
            if (Array.isArray(m.start)) {
                return starts[m.start[0]] && starts[m.start[0]].major;
            } else {
                return starts[m.start] && starts[m.start].major;
            }
        }
    }
    return false;
}

function filterMapsForCharts() {
    //oMaps = oMaps.filter(m => !m.excluded && !(m.type && (m.type.includes('VELO') || m.type.includes('RELIEF') || m.type.includes('WINTER'))));
}

function downloadIconExt(url) {
    const ext = extractFileExt(url);
    switch (ext) {
        case 'jpeg': return 'jpg';
        case 'omap': return 'ocd';
        case 'djvu':
        case 'webp': return 'url';
    }
    return ext;
}

function mapLink(url, m) { // m - for region
    let region;
    if (m) {
        if (m.page) {
            region = m.page;
        } else {
            if (m.start) {
                if (Array.isArray(m.start)) {
                    if (starts[m.start[0]].page) {
                        region = starts[m.start[0]].page;
                    }
                } else {
                    if (m.start && starts[m.start].page) {
                        region = starts[m.start].page;
                    }
                }
            }
        }
    }
    let pathname = location.pathname;
    if ((pathname.includes('map-info') || pathname.includes('maps-on-store')) && !region) {
        region = 'spb';
    }
    if (region) {
        pathname = '/' + region + '.html';
    } else
    if (pathname.includes('charts-')) {
        pathname = pathname.split('charts-').join('');
    }
    else if (pathname.includes('sheet-')) {
        pathname = pathname.split('sheet-').join('');
    }
    return location.origin + pathname + '?map=' + extractFileName(url);
}

function getFirstTrack(t) {
    if (t.gpx === null) {
        return null;
    }
    if (isObject(t.gpx)) {
        return Object.values(t.gpx)[0];
    }
    return t.gpx;
}

function trackLink(url, exclusive) {
    let fileName = extractFileName(url);
    if (fileName.endsWith('_omaps')) fileName = fileName.substring(0, fileName.length - 6);
    return location.origin + '/tracks.html?' + (exclusive ? 'only' : '') + 'track=' + fileName;
}

function buildLink(link, content, title, allItems, isDownload) {
    if (link) {
        if (Array.isArray(link)) {
            if (allItems) {
                let result = '';
                for (const l of link) {
                    if (title === 'Видео') {
                        content = `<img src="./images/${getVideoImg(l)}" alt="Видео">`;
                    }
                    result += ' ' + buildOneLink(l, content, title, isDownload);
                }
                return result;
            } else {
                link = link[0];
            }
        }
        if (isObject(link)) {
            let result = '';
            for (const name in link) {
                result += ' ' + buildOneLink(link[name], content, name, isDownload);
            }
            return result;
        }
        return buildOneLink(link, content, title, isDownload);
    }
    else
        return '';
}

function buildOneLink(link, content, title, isDownload) {
    if (link) {
        if (title) {
            title = ' title="' + title + '"';
        }
        return `<a href="${link}" ${(title ?? '')} ${(isDownload ? 'download' : '')}>${content}</a>`;
    }
    else
        return '';
}

function buildGpsLinks(m, img) {
    let result = '';
    if (m.gps) {
        if (isObject(m.gps)) {
            let entries = Object.entries(Object.entries(m.gps));
            for (const [index, [key, value]] of entries) {
                result += ` <a href="${value}">${key}</a>`;
                if (index < entries.length - 1) {
                    result += ',';
                }
            }
        } else {
            result += buildLink(m.gps, '<img src="./images/' + (img ?? 'url-file.png') +'" alt="GPS">');
        }
    }
    return result;
}

function buildTrackDownloadLinks(t) {
    if (isObject(t.gpx)) {
        let result = '';
        for (const [name, gpx] of Object.entries(t.gpx)) {
            result += buildLink(gpx, '<img src="images/download_24.png" style="width:12px" alt="GPX" />', 'Скачать GPX-трек ' + name, false, true);
        }
        return result;
    } else {
        return buildLink(t.gpx, '<img src="images/download_24.png" style="width:12px" alt="GPX" />', 'Скачать GPX-трек', false, true);
    }
}

function calculateTrackLength(t) {
    let firstTrack = getFirstTrack(t);
    let gpxLayer = new L.GPX(firstTrack, {
        async: false
    });
    return gpxLayer._humanLen(gpxLayer.len);
}

function coordLink(latLng) {
    return `${location.href}?x=${latLng.lat}&y=${latLng.lng}`;
}

function authorLink(author, isGlobalTable) {
    let pathname = location.pathname;
    if (isGlobalTable) {
        pathname = pathname.substring(0, pathname.lastIndexOf('/') + 1) + 'all.html';
    } else {
        if (pathname.includes('charts-')) {
            pathname = pathname.split('charts-').join('');
        }
    }
    return location.origin + pathname + '?author=' + author;
}

function recalculateLayers() {
    let total = getImageOverlaysInView(true);
    let visible = getImageOverlaysInView(false);
    document.getElementById("counter").innerHTML =
        (total === visible ? total : visible + '/' + total);
    return visible;
}

function getImageOverlaysInView(total) {
    let layers = [];
    let viewBounds = map.getBounds();
    map.eachLayer( function(layer) {
        if (layer instanceof L.ImageOverlay || layer._gpx) {
            if (layer._gpx) {
                layer = layer.getLayers()[0];
            }
            if (layer) {
                let inside = checkLayerInFrame(viewBounds, layer);
                if (total || inside) {
                    layers.push(layer);
                }
            }
        }
    });
    return layers.length;
}

function checkLayerInFrame(frameBounds, layer) {
    if (layer instanceof L.ImageOverlay.Rotated)
        return inFrame(frameBounds, [layer.getTopLeft(), layer.getTopRight(), layer.getBottomLeft()]);
    else {
        let layerBounds = layer.getBounds();
        return inFrame(frameBounds, [layerBounds.getNorthEast(), layerBounds.getSouthWest()]);
    }
}

function inFrame(frameBounds, coords) {
    for (const c of coords) {
        if (frameBounds.contains(c)) {
            return true;
        }
    }
    return false;
}

function getMapForName(fileName) {
    if (!fileName) {
        return null;
    }
    for (const m of oMaps) {
        if (m.url) {
            if (m.url.includes(fileName)) {
                return m;
            }
        }
        let link = getFirstLink(m);
        if (link) {
            if (link.includes(fileName)) {
                return m;
            }
        }
    }
}

function isTracksDisplayed() {
    let result = false;
    map.eachLayer( function(layer) {
        if (layer._gpx) {
            result = true;
            return false;
        }
    });
    return result;
}

// searches all the maps for the given text
function searchMaps(text) {
    let results = [];
    text = unifyString(text);
    let year = Number(text);
    if (year) {
        for (const m of oMaps) {
            let y = year(m);
            if (y && y === year && !isMapHidden(m)) {
                results.push(m);
            }
        }
    } else {
        for (const m of oMaps) {
            if (unifyString(m.name).includes(text) && !isMapHidden(m)) {
                results.push(m);
            }
        }
        for (const m of oMaps) {
            if (!results.includes(m) && m.info && unifyString(m.info).includes(text) && !isMapHidden(m)) {
                results.push(m);
            }
        }
        for (const m of oMaps) {
            if (!results.includes(m) && m.url.toLocaleLowerCase().includes(text) && !isMapHidden(m)) {
                results.push(m);
            }
        }
        if (isTracksDisplayed() && !isNull(oTracks)) {
            for (const t of oTracks) {
                if (unifyString(t.name).includes(text)) {
                    results.push(t);
                }
            }
            for (const t of oTracks) {
                if (!results.includes(t) && (t.info && unifyString(t.info).includes(text))) {
                    results.push(t);
                }
            }
        }
    }
    return results;
}

function unifyString(s) {
    return s ? s.trim().toLocaleLowerCase().replaceAll('ё','е') : '';
}

// searches the map is the best matches the given text
function searchMap(text) {
    text = unifyString(text);

    let latLng = parseCoordinates(text);
    if (latLng) {
        map.panTo(latLng);
        return;
    }

    let title, y;
    let idx = text.indexOf('(');
    if (idx >= 0) {
        y = Number(text.substring(idx + 1, idx + 5));
        title = unifyString(text.substring(0, idx - 1));
    } else {
        y = Number(text);
    }
    if (title) {
        for (const m of oMaps) {
            if (unifyString(m.name).includes(title) && (!y || y === year(m)) && !isMapHidden(m)) {
                return m;
            }
        }
        if (!isNull(oTracks)) {
            for (const t of oTracks) {
                if (unifyString(t.name).includes(title) && (!y || y === year(t))) {
                    return t;
                }
            }
        }
    } else
    if (y) {
        for (const m of oMaps) {
            if (y === year(m) && !isMapHidden(m)) {
                return m;
            }
        }
    } else {
        for (const m of oMaps) {
            for (const m of oMaps) {
                let sameName = unifyString(m.name).includes(text);
                let sameInfo = m.info && unifyString(m.info).includes(text);
                let sameUrl = m.url.toLocaleLowerCase().includes(text);
                if ((sameName || sameInfo || sameUrl) && !isMapHidden(m)) {
                    return m;
                }
            }
        }
        if (!isNull(oTracks)) {
            for (const t of oTracks) {
                if (unifyString(t.name).includes(text) || unifyString(t.info).includes(text)) {
                    return t;
                }
            }
        }
    }
}

function upZindex(ovrl) {
    maxZindex++;
    let zIndex = ovrl.getElement().style.zIndex;
    if (zIndex > maxZindex) {
        maxZindex = zIndex + 1;
    }
    ovrl.getElement().style.zIndex = maxZindex;
}

function mapImageUrl(m) {
    return isMapHidden(m) ? OLIVE_IMAGE_URL : m.url;
}

function hideMap(map, url, isHidden, name, year) {
    map.eachLayer(function(layer){
        if (isHidden) {
            if (layer._url && layer._url.includes(OLIVE_IMAGE_URL) &&
                (layer.options.alt === name) && (layer._popup._content.includes(`(${year})`))) {
                layer.removeFrom(map);
                layer.hiddenMap = true;
            }
        } else if (layer._url && layer._url.includes(url)) {
            layer.removeFrom(map);
            layer.hiddenMap = true;
        }
    });
}

function hideTrack(map, url) {
    map.eachLayer(function(layer){
        if (layer._gpx && layer._gpx === url) {
            layer.removeFrom(map);
        }
    });
}

function locateMap(m) {
    if (m.gpx) {
        locateForUrl(getFirstTrack(m));
    } else {
        map.fitBounds(m.bounds);
    }
}

function locateForUrl(url) {
    map.eachLayer( function(layer) {
        if(layer instanceof L.ImageOverlay) {
            if(layer._url.includes(url)) {
                map.fitBounds(layer.getBounds());
                upZindex(layer);
                return false;
            }
        } else {
            if(layer._gpx) {
                if(layer._gpx.includes(url)) {
                    map.fitBounds(layer.getBounds());
                    return false;
                }
            }
        }
    });
}

function gotoMap(page, requiredParam) {
    const url = new URL(window.location.href);
    const searchParams = url.searchParams;
    if (requiredParam && !searchParams.has(requiredParam)) {
        searchParams.append(requiredParam,'');
    }
    location.href = page + '?' + searchParams.toString();
    return false;
}

function setOverlayOpacity(opacity) {
    mapOpacity = opacity;
    for (const m of mapOverlays) {
        m.setOpacity(opacity);
    }
}

const CSV_SPRTR = '\t';

// формируем и печатаем в консоли таблицу информации о картах
function buildMapsCSV(maps, owner) {
    let result = 'Название' + CSV_SPRTR + 'Год' + CSV_SPRTR + 'Инфо о владельцах' + CSV_SPRTR + 'Адрес предпросмотра' +
        CSV_SPRTR + 'Адрес для скачивания' + CSV_SPRTR + 'Доп.информация' + CSV_SPRTR + 'Старт' + CSV_SPRTR + 'GPS-трансляция' + CSV_SPRTR + 'Тип';

    maps.sort((a, b) => a.name.localeCompare(b.name));
    for (const m of maps) {
        if (owner === undefined || owner === m.owner || (Array.isArray(m.owner) && m.owner.includes(owner))) {
            result += '\n' + m.name + CSV_SPRTR + safe(year(m)) + CSV_SPRTR + o(m.owner) + CSV_SPRTR + link(m.url) +
                CSV_SPRTR + link(m.link) + CSV_SPRTR + safe(m.info) + CSV_SPRTR + start(m.start) + CSV_SPRTR + safe(m.gps) + CSV_SPRTR + m.type;
        }
    }
    console.log(result);
}
function start(s) {
    return s === undefined ? '' : starts[s].short;
}
function link(url) {
    if (url === undefined)
        return '';
    else {
        let result = '';
        let urls = url;
        if (!Array.isArray(url)) {
            urls = [url];
        }
        urls.forEach(function (u, index, array) {
            if (index > 0) {
                result += ', ';
            }
            result += 'https://o-maps.spb.ru' + u.substring(1);
        });
        return result;
    }
}

function getFirstLink(m) {
    let link = m.link;
    if (Array.isArray(link)) {
        link = link[0];
    }
    return link;
}

function hasOCAD(m) {
    let links = m.link;
    if (links) {
        if (!Array.isArray(links)) {
            links = [m.link];
        }
        for (const link of links) {
            if (link && (link.endsWith('.ocd') || link.endsWith('.omap'))) {
                return true;
            }
        }
    }
    return false;
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
                result += clean(owners[o].name);
                if (i < owner.length - 1) {
                    result += '\n';
                }
            }
        }
        result += '"';
    } else {
        if (owners[owner]) {
            result += clean(owners[owner].name);
        }
    }
    return result;
}

function authorLabel(author, withLogo) {
    if (author) {
        let name = author.name;
        if (withLogo && author.logo) {
            name = '<img src="./logo/' + author.logo + '" alt="Лого" class="sheet-icon" />&nbsp;' + name;
        }
        if (author.about) {
            return buildLink(author.about, name);
        } else {
            return name;
        }
    } else {
        return '';
    }
}

function selectMapRegion(region, prefix) {
    prefix = prefix ? prefix + '-' : '';
    switch (region) {
        case 'index':location.href = './index.html'; break;
        case 'spb':location.href = './' + prefix + 'spb.html'; break;
        case 'msk':location.href = './' + prefix + 'moscow.html'; break;
        case 'rzn':location.href = './' + prefix + 'ryazan.html'; break;
        case 'smr':location.href = './' + prefix + 'samara.html'; break;
        case 'bash':location.href = './' + prefix + 'bash.html'; break;
        case 'pskov':location.href = './' + prefix + 'pskov.html'; break;
        case 'srb':location.href = './' + prefix + 'serbia.html'; break;
        case 'all':location.href = './' + prefix + 'all.html'; break;
        case 'tracks':location.href = './' + prefix + 'tracks.html'; break;
        case 'starts':location.href = './starts.html'; break;
        case 'docs':location.href = './documents.html'; break;
        case 'calendar':location.href = './calendar.html'; break;
        case 'calendar_ski':location.href = './calendar-ski.html'; break;
        case 'calendar_msk':location.href = './calendar-msk.html'; break;
        case 'calendar_smr':location.href = './calendar-samara.html'; break;
    }
}

function selectTrackType(trackType) {
    if (trackType === 'ALL') {
        location.href = './sheet-tracks.html';
    } else {
        location.href = './sheet-tracks.html?track-type=' + trackType;
    }
}

function selectTrackMonth(month) {
    let href = location.origin + location.pathname;
    if (month === '0') {
        location.href = href;
    } else {
        location.href = href + '?track-month=' + month;
    }
}

function pushGroupToMap(m, group) {
    if (group._leaflet_id) {
        m.groups.push(group._leaflet_id.toString());
    }
}

function checkStartMap(start, m) {
    if (!m.start) {
        return false;
    }
    if (Array.isArray(m.start)) {
        let accepted = false;
        for (const s of m.start) {
            if (start === s) {
                accepted = true;
                break;
            }
        }
        return accepted;
    }
    return (start === m.start);
}

function getMapStarts(m) {
    let start = '';
    if (Array.isArray(m.start)) {
        for (const s of m.start) {
            if (start) {
                start += ', ';
            }
            start += starts[s].name;
        }
    } else {
        start = starts[m.start].name;
    }
    if (start) {
        start += '. ';
    }
    return start;
}

function downloadSheetTable(fileName) {
    downloadTableAsCSV($('.o-main-table'), fileName);
    return false;
}

function isDocumentsPage() {
    return typeof documentsPage != 'undefined' && documentsPage;
}

function isUnknownPage() {
    return typeof unknownPage != 'undefined' && unknownPage;
}

function isBooksPage() {
    return typeof booksPage != 'undefined' && booksPage;
}

function isRulesPage() {
    return typeof rulesPage != 'undefined' && rulesPage;
}

function isPopupSliderRequired() {
    return typeof popupMessage != 'undefined';
}

let spinnerDisplayed = false;
function showSpinner() {
    if (map === undefined) {
        return;
    }
    if (!spinnerDisplayed) {
        spinnerDisplayed = true;
        let el = document.getElementById("spinner");
        if (el.style.display !== 'block') {
            el.style.display = 'block';
        }
    }
}

function hideSpinner() {
    if (map === undefined) {
        return;
    }
    if (spinnerDisplayed) {
        spinnerDisplayed = false;
        document.getElementById("spinner").style.display = 'none';
    }
}

function buildOoptLayer() {
    const max_zoom = (typeof OOPT_MAX_ZOOM !== 'undefined') ? OOPT_MAX_ZOOM : 9;
    return L.tileLayer('wdpa-russia-tiles/{z}/{x}/{y}.png', {
        pane: OOPT_TOP_PANE,
        maxNativeZoom: max_zoom,
        opacity: 0.85,
        attribution: 'UNEP-WCMC and IUCN, Protected Planet, WDPA/WD-OECM, April 2026'
    });
}

/*   CALENDAR   */

function buildCalendarGroup() {
    return L.markerClusterGroup ? L.markerClusterGroup({
        spiderfyOnMaxZoom: true,
        showCoverageOnHover: false,
        zoomToBoundsOnClick: true,
        removeOutsideVisibleBounds: true,
        chunkedLoading: true,
        maxClusterRadius: 10,
        spiderfyDistanceMultiplier: 2
        // disableClusteringAtZoom: 12
    }) : L.layerGroup([]);
}

function filterEvents(events, onlyMajor) {
    return events.filter(evt => {
        if (START_YEAR_PARAM && (START_YEAR_PARAM !== 'ALL') && (startYear(evt).toString() !== START_YEAR_PARAM)) {
            return false;
        }
        if (onlyMajor && !evt.major) {
            return false;
        }
        if (ROGAINE_EVENTS_CALENDAR_PARAM_VALUE === CALENDAR_PARAM) {
            return isEventLikeRogaine(evt);
        }
        if (ORIENT_EVENTS_CALENDAR_PARAM_VALUE === CALENDAR_PARAM) {
            return evt.type && evt.type.includes(ORIENT_EVENTS_CALENDAR_PARAM_VALUE) || evt.type.includes('INDOOR');
        }
        if (OTHER_EVENTS_CALENDAR_PARAM_VALUE === CALENDAR_PARAM) {
            return isEventOther(evt);
        }
        if (SKI_EVENTS_CALENDAR_PARAM_VALUE === CALENDAR_PARAM) {
            return evt.type && evt.type.includes(SKI_EVENTS_CALENDAR_PARAM_VALUE);
        }
        if (VELO_EVENTS_CALENDAR_PARAM_VALUE === CALENDAR_PARAM) {
            return evt.type && evt.type.includes(VELO_EVENTS_CALENDAR_PARAM_VALUE);
        }
        if (!EVENT_TYPES.includes(CALENDAR_PARAM) && evt.place && Object.keys(CALENDAR_PLACES).includes(CALENDAR_PARAM)) {
            return (CALENDAR_PARAM === getEventPlaceCode(evt.place));
        }
        return true;
    });
}

function isOutdated(date) {
    const now = new Date();
    return (date < now) && (Math.abs(date - now) > DAY_TIME_RANGE);
}

function isActual(date) {
    const now = new Date();
    const actualRange = ('ROGAINE' === urlParams.get('calendar') ? WEEK_TIME_RANGE*4 : WEEK_TIME_RANGE);
    return !isOutdated(date) && (date - now < actualRange);
}

function isEventLikeRogaine(evt) {
    return isRogaine(evt) || evt.type.includes(MULTI_EVENTS_CALENDAR_PARAM_VALUE) || evt.start === 'MB';
}

function isEventOther(evt) {
    return !evt.type.includes(ORIENT_EVENTS_CALENDAR_PARAM_VALUE) &&
        !evt.type.includes(VELO_EVENTS_CALENDAR_PARAM_VALUE) &&
        !evt.type.includes('INDOOR') &&
        !evt.type.includes(SKI_EVENTS_CALENDAR_PARAM_VALUE) && !isRogaine(evt);
}

function validateEvent(evt) {
    if (CALENDAR_PARAM) {
        const currentDate = new Date(evt.date);
        switch (CALENDAR_PARAM) {
            case ORIENT_EVENTS_CALENDAR_PARAM_VALUE:
                if (!evt.type.includes(ORIENT_EVENTS_CALENDAR_PARAM_VALUE) && !evt.type.includes('INDOOR')) {
                    return false;
                }
                break;
            case SKI_EVENTS_CALENDAR_PARAM_VALUE:
                if (!evt.type.includes(SKI_EVENTS_CALENDAR_PARAM_VALUE)) {
                    return false;
                }
                break;
            case VELO_EVENTS_CALENDAR_PARAM_VALUE:
                if (!evt.type.includes(VELO_EVENTS_CALENDAR_PARAM_VALUE)) {
                    return false;
                }
                break;
            case ROGAINE_EVENTS_CALENDAR_PARAM_VALUE:
                if (!isEventLikeRogaine(evt)) {
                    return false;
                }
                break;
            case MEDIA_EVENTS_CALENDAR_PARAM_VALUE:
                if (!evt.photo && !evt.video) {
                    return false;
                }
                break;
            case FUTURE_EVENTS_CALENDAR_PARAM_VALUE:
                if (isOutdated(currentDate)) {
                    return false;
                }
                break;
            case ACTUAL_EVENTS_CALENDAR_PARAM_VALUE:
                if (!isActual(currentDate)) {
                    return false;
                }
                break;
            default:
                if (!EVENT_TYPES.includes(CALENDAR_PARAM) && Object.keys(CALENDAR_PLACES).includes(CALENDAR_PARAM)) {
                    return evt.place && CALENDAR_PARAM === getEventPlaceCode(evt.place);
                } else if (!EVENT_TYPES.includes(CALENDAR_PARAM) && CALENDAR_PARAM !== 'ALL' && evt.owner !== CALENDAR_PARAM && evt.start !== CALENDAR_PARAM) {
                    return false;
                }
        }
    }
    if (START_NAME_PARAM && evt.start !== START_NAME_PARAM) {
        return false;
    }
    return true;
}

function buildSheetDate(m) {
    let result;
    if (m.year === 1 ) {
        result = 'Ретро';
    } else if (isDocumentsPage()) {
        let date = formatDate(m, true, true);
        if (date) {
            result = date;
        }
        else {
            result = m.year ?? m.date;
        }
    } else {
        let sy = startYear(m);
        if (sy) {
            result = sy;
        } else {
            result = safe(year(m));
        }
    }
    return result ? `<span class="doc-date">${result}</span>` : '';
}

function buildEventDate(evt) {
    const date = new Date(evt.date);
    let day = date.getDate();
    let month = MONTHS_SHORT[date.getMonth()];
    //const year = date.getFullYear();
    let dayWeek = WEAK_DAYS_SHORT[date.getDay()];

    let result = `${day} ${month} (${dayWeek})`
    if (evt.endDate) {
        const endDate = new Date(evt.endDate);
        day = endDate.getDate();
        month = MONTHS_SHORT[endDate.getMonth()];
        dayWeek = WEAK_DAYS_SHORT[endDate.getDay()];
        result += ` - ${day} ${month} (${dayWeek})`
    }
    return result;
}

function logoList(m) { // for map, event or track
    let logo = [];
    if (m.logo) {
        logo.push(m.logo);
    }
    if (!isNull(starts) && m.start) {
        if (Array.isArray(m.start)) {
            for (const s of m.start) {
                if (starts[s] && starts[s].logo) {
                    logo.push(starts[s].logo);
                }
            }
        } else {
            if (starts[m.start] && starts[m.start].logo) {
                logo.push(starts[m.start].logo);
            }
        }
    }
    if (m.owner && owners[m.owner] && owners[m.owner].logo) {
        logo.push(owners[m.owner].logo);
    }
    if (m.author && authors[m.author] && authors[m.author].logo) {
        logo.push(authors[m.author].logo);
    }
    if (m.owner && Array.isArray(m.owner) && owners[m.owner[0]] && owners[m.owner[0]].logo) { // only the first one
        logo.push(owners[m.owner[0]].logo);
    }
    if (m.author && Array.isArray(m.author) && authors[m.author[0]] && authors[m.author[0]].logo) { // only the first one
        logo.push(authors[m.author[0]].logo);
    }
    if (m.region && regions[m.region].logo) {
        logo.push(regions[m.region].logo);
    }
    return logo;
}

function buildEventStart(evt, withoutLogo) {
    let result = '';

    if (!withoutLogo && evt.russialoppet) {
        result += '<img src="./logo/russialoppet.gif" alt="Лого" class="sheet-icon" /> ';
    }

    const logos = logoList(evt);
    let logo = (logos.length > 0 ? logos[0] : null);
    if (!withoutLogo && logo) {
        result += '<img src="./logo/' + logo + '" alt="Лого" class="sheet-icon" /> ';
    }

    let name = evt.name;
    if (evt.cancelled) {
        name += ' (ОТМЕНА!)'
    }
    if (evt.link) {
        result += buildLink(evt.link, name);
    } else if (evt.o_site) {
        result += buildLink(O_SITE_ADDRESS_PREFIX + evt.o_site, name);
    } else {
        if (evt.start && starts[evt.start].link) {
            result += buildLink(starts[evt.start].link, name);
        } else {
            result += name;
        }
    }
    if (evt.price === -1) {
        result += ' (закрытый)'
    }
    if (evt.reg) {
        result += ', <span title="Регистрация">' + buildEventReg(evt) + '</span>';
    }
    if (HAS_ME_PARAM) {
        let me = evt.me;
        if (!me && evt.map) {
            let maps = Array.isArray(evt.map) ? [...evt.map] : [evt.map];
            for (const m of maps) {
                let map = getMapForName(evt.map);
                if (map && map.me) {
                    me = map.me;
                    break;
                }
            }
        }
        if (me) {
            result += ` <sup class="my-race">${me}</sup>`;
        }
    }
    return result;
}

function buildEventReg(evt) {
    let reg = '';
    if (Array.isArray(evt.reg)) {
        for (const r of evt.reg) {
            if (reg) {
                reg += ', ';
            }
            reg += buildOneEventReg(r) + ' ';
        }
    } else {
        reg = buildOneEventReg(evt.reg);
    }
    return reg;
}

function buildOneEventReg(reg) {
    if (reg.includes('orgeo')) {
        return buildLink(reg, 'Orgeo');
    } else if (reg.includes('o-reg')) {
        return buildLink(reg, 'O-Reg');
    } else if (reg.includes('vk.com')) {
        return buildLink(reg, 'VK');
    } else if (reg.includes('o-time')) {
        return buildLink(reg, 'O-Time');
    } else if (reg.includes('multsport')) {
        return buildLink(reg, 'Multsport');
    } else if (reg.includes('sportident')) {
        return buildLink(reg, 'Sportident');
    } else if (reg.includes('russialoppet')) {
        return buildLink(reg, 'Russialoppet');
    } else if (reg.includes('gosuslugi')) {
        return buildLink(reg, 'ГУ');
    } else if (reg.includes('russiarunning')) {
        return buildLink(reg, 'RR');
    }
    return buildLink(reg, '<img src="./images/url-file.png" alt="Рега" />');
}

function buildEventResults(evt) {
    let res = '';
    if (evt.res) {
        if (evt.res.includes('orgeo')) {
            res += buildLink(evt.res, 'Orgeo');
        } else if (evt.res.includes('o-site')) {
            res += buildLink(evt.res, 'O-Site');
        } else if (evt.res.includes('o-time')) {
            res += buildLink(evt.res, 'O-Time');
        } else if (evt.res.includes('multsport')) {
            res += buildLink(evt.res, 'Multsport');
        } else if (evt.res.includes('sportident')) {
            res += buildLink(evt.res, 'Sportident');
        } else if (evt.res.includes('vk.com')) {
            res += buildLink(evt.res, 'VK');
        } else if (evt.res.includes('reskeep')) {
            res += buildLink(evt.res, 'Reskeep');
        } else if (evt.res.includes('t.me')) {
            res += buildLink(evt.res, 'Telegram');
        } else if (evt.res.includes('hard')) {
            res += buildLink(evt.res, 'HARD');
        } else {
            res += buildLink(evt.res, '<img src="./images/url-file.png" alt="Результаты" />');
        }
    }
    if (evt.reskeep) {
        let reskeep = evt.reskeep;
        if (!Array.isArray(evt.reskeep)) {
            reskeep = [evt.reskeep];
        }
        reskeep = reskeep.map(r => 'https://reskeep.ru/event/get?id=' + r);
        res += buildLink(reskeep, ' <img src="./images/r-k.gif" alt="Reskeep" />', 'Анализ сплитов', true);
    }
    return res;
}

function getVideoImg(vLink) {
    if (isObject(vLink)) {
        vLink = Object.values(vLink)[0];
    }
    if (vLink.includes('vkvideo') || vLink.includes('vk.com') || vLink.includes('vk.ru')) {
        return 'vkvideo.gif';
    }
    if (vLink.includes('rutube')) {
        return 'rutube.webp';
    }
    if (vLink.includes('youtu')) {
        return 'youtube.webp';
    }
    if (vLink.includes('yandex')) {
        return 'ya_video.webp';
    }
    return 'video-camera.png';
}

function buildEventReports(evt, withGPS) {
    let result = '';
    if (withGPS) {
        result += buildGpsLinks(evt, 'o-gps.gif');
    }
    if (evt.photo) {
        result += ' ' + buildLink(evt.photo, '<img src="./images/photo-camera.png" alt="Фото">', 'Фотографии', true);
    }
    if (evt.video) {
        result += ' ' + buildLink(evt.video, `<img src="./images/${getVideoImg(evt.video)}" alt="Видео">`, 'Видео', true);
    }
    if (HAS_ME_PARAM && evt.strava) {
        let strava = evt.strava;
        if (Array.isArray(strava)) {
            strava = strava.map(s => 'https://www.strava.com/activities/' + s);
        } else {
            strava = 'https://www.strava.com/activities/' + strava;
        }
        result += ' ' + buildLink(strava, '<img src="./images/strava_32.gif" alt="Strava">', 'Strava', true);
    }
    return result;
}

function buildEventInfo(evt) {
    return (evt.info ?? '') + (evt.planner ? ' Планирование дистанции: ' + buildPlanners(evt) : '');
}

function buildEventType(evt, withFmt) {
    let result = '';
    if (!onlyOneSport) {
        switch (evt.type) {
            case 'RUN':
                result = 'Бег'; break;
            case 'SK_RACE':
                result = 'Лыжная гонка'; break;
            case 'ORIENT':
                result = 'Ориент'; break;
            case 'VELO':
                result = 'Вело'; break;
            case 'ROGAINE':
                result = 'Рогейн'; break;
            case 'MULTI':
                result = 'Мульти'; break;
            case 'TOURISM':
                result = 'Кросс-поход'; break;
            case 'FUN':
                result = 'Интерактив'; break;
            case 'INDOOR':
                result = 'В помещении';
        }
        if (!result && evt.type) {
            if (evt.type.includes('WATER')) {
                result = 'Водный рогейн';
            } else if (evt.type.includes('SKI')) {
                if (isRogaine(evt)) {
                    result = 'Лыжный рогейн';
                } else {
                    result = 'Ориент лыж';
                }
            } else if (evt.type.includes('VELO')) {
                result = 'Рогейн';
            } else {
                result = 'Рогейн, Ориент';
            }
        }
    }
    if (withFmt && evt.fmt) {
        result += '<small>';
        if (!onlyOneSport) {
            result += '<br/>' + evt.fmt;
        } else {
            result += buildSkiFormat(evt.fmt);
        }
        result += '</small>';
    }
    return result;
}

const EXPANDABLE_TEMPLATE = `
        <div class="expandable-text">
            <span class="text-short">short_text... <span class="toggle-button" onclick="toggleLongText(this)" title="Раскрыть">▶</span></span>
            <div class="text-full">long_text <span class="toggle-button" onclick="toggleLongText(this)" title="Закрыть">◀</span></div>
        </div>
    `;

function buildSkiFormat(fmt) {
    if (fmt.includes('<br/>')) {
        const shortText = fmt.substring(0, fmt.indexOf('<br/>'));
        return  EXPANDABLE_TEMPLATE.replace('short_text', shortText).replace('long_text', fmt);
    } else {
        return fmt;
    }
}

function buildPlanners(m) {
    let result = '';
    if (typeof planners !== 'undefined') {
        if (Array.isArray(m.planner)) {
            result += '<ol>'
            for (const o of m.planner) {
                if (planners[o]) {
                    result += '<li>' + planners[o].name + '</li>';
                }
            }
            result += '</ol>'
        } else {
            if (planners[m.planner]) {
                result += planners[m.planner].name + '<br />';
            }
        }
        if (!result) {
            if (!isNull(starts) && m.start && starts[m.start] && starts[m.start].planner) {
                result += planners[starts[m.start].planner].name + '<br />';
            }
        }
    }
    return result;
}

function buildFotos(t, root = 'tracks') {
    let result = '';
    if (t.pics) {
        for (let p = 1; p <= t.pics[1]; p++) {
            let url = root + '/' + t.pics[0] + '/pic_' + p + '.jpg';
            result += '<a href="#" onClick="openModal(' + picCounter++ + '); return false;"><img src="' + url + '" class="track-table-pic" alt="Фото" /></a>';
            images.push(url);
        }
    }
    if (t.video) {
        result += ' ' + buildLink(t.video, `<img src="./images/${getVideoImg(t.video)}" class="track-table-pic" alt="Видео">`, 'Видео', true);
    }
    return result;
}

function buildPeriod(s) {
    let period;
    let begin = s.begin;
    if (begin === 1) begin = 'Ретро';
    if (!begin) begin = 'Неизвестно';
    if (s.begin === s.end) {
        period = begin;
    } else {
        period = `${begin} - ${s.end}`;
    }
    return `<span class="doc-date">${period}</span>`;
}

function populateStartsRanges() {
    for (m of oMaps) {
        if (m.start) {
            let y = startYear(m);
            if (!y) {
                y = year(m);
            }

            if (y) {
                if (Array.isArray(m.start)) {
                    for (const ms of m.start) {
                        const s = starts[ms];
                        if (!s.begin || s.begin > y) s.begin = y;
                        if (!s.end || s.end < y) s.end = y;
                    }
                } else {
                    const s = starts[m.start];
                    if (!s.begin || s.begin > y) s.begin = y;
                    if (!s.end || s.end < y) s.end = y;
                }
            }
        }
    }
}

function populateAuthorsRangesRegions() {
    for (m of oMaps) {
        if (m.author) {
            let y = year(m);
            if (y) {
                if (Array.isArray(m.author)) {
                    for (const ma of m.author) {
                        populateAuthorRangeRegions(ma, y, m);
                    }
                } else {
                    populateAuthorRangeRegions(m.author, y, m);
                }
            }
        }
    }
}

function populateAuthorRangeRegions(ma, y, m) {
    const a = authors[ma];
    if (!a.begin || a.begin > y) a.begin = y;
    if (!a.end || a.end < y) a.end = y;

    const region = m.region;
    if (region) {
        if (!a.regions) a.regions = [];
        if (!a.regions.includes(region)) {
            a.regions.push(region);
        }
    }
}

function populateOMaps(maps, regionKey) {
    for (const m of maps) {
        if (regionKey && !m.region) m.region = regionKey;
        oMaps.push(m);
    }
}

function prettyRegions(aRegions) {
    let result = '';
    if (aRegions) {
        for (const r of aRegions) {
            if (result) {
                result += ', ';
            }
            result += regions[r].name;
        }
    }
    return result;
}

function toggleLongText(button) {
    const block = button.closest('.expandable-text');
    const shortSpan = block.querySelector('.text-short');
    const fullText = block.querySelector('.text-full');

    if (fullText.classList.contains('expanded')) {
        fullText.classList.remove('expanded');

        setTimeout(() => {
            shortSpan.classList.remove('hidden');
        }, 300); // should be the same as animation length

    } else {
        shortSpan.classList.add('hidden');
        setTimeout(() => {
            fullText.classList.add('expanded');
        }, 10); // small timeout to run animation
    }
}

/* --- Peek Widget ---  */

const PEEK_WIDGET_CONTENT = `
    <h3>Добро пожаловать!</h3>
    <section><img src="logo/o-maps.webp" class="help-figure" title="Лого" /><br /><br />
    <p>Тут могла бы быть Ваша реклама, но её тут нет. <a href="help/contacts.html">Пишите, звоните</a>. Мы рады поддержке и открыты для любых предложений.</section>
    `;

class PeekWidget {
    constructor(options = {}) {
        this.sides = ['left', 'right', 'top', 'bottom'];
        this.side = options.side || this.sides[Math.floor(Math.random() * this.sides.length)];

        this.width = options.width || 400;
        this.height = options.height || 460;

        this.peekSize = options.peekSize || 10;
        this.peekDistance = options.peekDistance || 24;

        this.autoPeekInterval = options.autoPeekInterval || getRandom(10000, 60000);
        this.autoPeekDuration = options.autoPeekDuration || getRandom(1000, 5000);

        this.isOpen = false;
        this.isDragging = false;

        this.createWidget(
            options.content ||
            PEEK_WIDGET_CONTENT
        );

        this.attachEvents();
        this.startAutoPeek();
    }

    createWidget(content) {
        this.widget = document.createElement('div');
        this.widget.className = `peek-widget side-${this.side}`;
        this.widget.style.width = this.width + 'px';
        this.widget.style.height = this.height + 'px';
        this.widget.innerHTML = `
            <div class="peek-ear"></div>
            <div class="peek-content">
                ${content}
            </div>
        `;

        document.body.appendChild(this.widget);

        this.ear = this.widget.querySelector('.peek-ear');

        this.updateArrow();

        requestAnimationFrame(() => {
            this.hidePosition();
        });
    }

    getArrow() {
        if (!this.isOpen) {
            switch(this.side) {
                case 'left': return '❯';
                case 'right': return '❮';
                case 'top': return '▼';
                case 'bottom': return '▲';
            }
        } else {
            switch(this.side) {
                case 'left': return '❮';
                case 'right': return '❯';
                case 'top': return '▲';
                case 'bottom': return '▼';
            }
        }
    }

    updateArrow() {
        this.ear.innerHTML = this.getArrow();
    }

    hidePosition() {
        switch(this.side) {
            case 'left':
                this.widget.style.left = -(this.width - this.peekSize) + 'px';
                this.widget.style.top = '50%';
                this.widget.style.transform = 'translateY(-50%)';
                break;
            case 'right':
                this.widget.style.right = -(this.width - this.peekSize) + 'px';
                this.widget.style.top = '50%';
                this.widget.style.transform = 'translateY(-50%)';
                break;
            case 'top':
                this.widget.style.top = -(this.height - this.peekSize) + 'px';
                this.widget.style.left = '50%';
                this.widget.style.transform = 'translateX(-50%)';
                break;
            case 'bottom':
                this.widget.style.bottom = -(this.height - this.peekSize) + 'px';
                this.widget.style.left = '50%';
                this.widget.style.transform = 'translateX(-50%)';
                break;
        }
        this.updateArrow();
    }

    openPosition() {
        switch(this.side) {
            case 'left':
                this.widget.style.left = '0px';
                break;
            case 'right':
                this.widget.style.right = '0px';
                break;
            case 'top':
                this.widget.style.top = '0px';
                break;
            case 'bottom':
                this.widget.style.bottom = '0px';
                break;
        }
        this.updateArrow();
    }

    peek() {
        if (this.isOpen || this.isDragging) return;

        switch(this.side) {
            case 'left':
                this.widget.style.left = -(this.width - this.peekDistance) + 'px';
                break;
            case 'right':
                this.widget.style.right = -(this.width - this.peekDistance) + 'px';
                break;
            case 'top':
                this.widget.style.top = -(this.height - this.peekDistance) + 'px';
                break;
            case 'bottom':
                this.widget.style.bottom = -(this.height - this.peekDistance) + 'px';
                break;
        }

        setTimeout(() => {
            if (!this.isOpen && !this.isDragging) {
                this.hidePosition();
            }
        }, this.autoPeekDuration);
    }

    toggle() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.openPosition();
        } else {
            this.hidePosition();
        }
        this.updateArrow();
    }

    attachEvents() {
        this.ear.addEventListener('click', () => {
            this.toggle();
        });
    }

    startAutoPeek() {
        setInterval(() => {
            this.peek();
        }, this.autoPeekInterval);
    }
}

setTimeout(function() {
    new PeekWidget({});
}, 1000);
