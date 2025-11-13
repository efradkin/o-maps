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
    FUN: 'НЕОБЫЧН0',
    PARK: 'ПАРК',
    RELIEF: 'РЕЛЬЕФ',
    ROGAINE: 'РОГЕЙН',
    SPRINT: 'СПРИНТ',
    WINTER: 'ЗИМА',
    INDOOR: 'ВНУТРИ',
    SPECIAL: 'НЕЧТО',
};

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

function year(o) { // map, track, event
    if (o.year) return o.year;
    if (o.date) {
        return new Date(o.date).getFullYear();
    }
    return null;
}

function startYear(o) { // map, track, event
    if (o.startYear) return o.startYear;
    if (o.date) {
        return new Date(o.date).getFullYear();
    }
    return null;
}

function dateForCompare(m) {
    if (m.date) return new Date(m.date);
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

function formatDate(o, withYear, withDayOfWeek) { // map, track, event with ".date"
    if (!o.date) {
        return '';
    }
    const date = new Date(o.date);
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

function getTypesList(m, colored) {
    let list = [];
    if (m.type && m.type.length > 0 || m.excluded) {
        let types = [];
        if (m.type) {
            types = [ ...m.type ];
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
    return  !isRogaine(m) && (isEmpty(m.type) || m.type.includes('CITY') || m.type.includes('PARK') || isSpecialMap(m));
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

function mapLink(url, m) { // m - for region
    let region;
    if (m) {
        if (m.region) {
            region = m.region;
        } else {
            if (m.start) {
                if (Array.isArray(m.start)) {
                    if (starts[m.start[0]].region) {
                        region = starts[m.start[0]].region;
                    }
                } else {
                    if (m.start && starts[m.start].region) {
                        region = starts[m.start].region;
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
    return location.origin + '/tracks.html?' + (exclusive ? 'only' : '') + 'track=' + extractFileName(url);
}

function buildLink(link, content, title, allItems) {
    if (link) {
        if (Array.isArray(link)) {
            if (allItems) {
                let result = '';
                for (const l of link) {
                    result += ' ' + buildOneLink(l, content, title);
                }
                return result;
            } else {
                link = link[0];
            }
        }
        return buildOneLink(link, content, title);
    }
    else
        return '';
}

function buildOneLink(link, content, title) {
    if (link) {
        if (title) {
            title = ' title="' + title + '"';
        }
        return '<a href="' + link + '"' + (title ?? '') + '">' + content + '</a>';
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
            result += buildLink(m.gps, '<img src="./images/' + (img ?? 'url-file.png') +'">');
        }
    }
    return result;
}

function buildTrackDownloadLinks(t) {
    if (isObject(t.gpx)) {
        let result = '';
        for (const [name, gpx] of Object.entries(t.gpx)) {
            result += buildLink(gpx, '<img src="images/download_24.png" style="width:12px" />', 'Скачать GPX-трек ' + name);
        }
        return result;
    } else {
        return buildLink(t.gpx, '<img src="images/download_24.png" style="width:12px" />', 'Скачать GPX-трек');
    }
}

function calculateTrackLength(t) {
    let firstTrack = getFirstTrack(t);
    let gpxLayer = new L.GPX(firstTrack, {
        async: false
    });
    return gpxLayer._humanLen(gpxLayer.len);
}

function authorLink(author) {
    let pathname = location.pathname;
    if (pathname.includes('charts-')) {
        pathname = pathname.split('charts-').join('');
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
        title = text.substring(0, idx - 1).trim();
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
                if (unifyString(t.name).includes(title) && (!y || y === t.year)) {
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
            }
        } else if (layer._url && layer._url.includes(url)) {
            layer.removeFrom(map);
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
            if (link.endsWith('.ocd')) {
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

function authorLabel(author) {
    if (author) {
        if (author.about) {
            return buildLink(author.about, author.name);
        } else {
            return author.name;
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
        case 'srb':location.href = './' + prefix + 'serbia.html'; break;
        case 'all':location.href = './' + prefix + 'all.html'; break;
        case 'tracks':location.href = './' + prefix + 'tracks.html'; break;
        case 'starts':location.href = './starts.html'; break;
        case 'docs':location.href = './documents.html'; break;
        case 'calendar':location.href = './calendar.html'; break;
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

function selectStart(start) {
    let url = location.href.split('?')[0];
    if (start !== 'all') {
        url += '?start=' + start;
    }
    location.href = url;
}

function selectMapType(type) {
    let url = location.href.split('?')[0];
    if (type !== 'ALL') {
        url += '?type=' + type;
    }
    location.href = url;
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
