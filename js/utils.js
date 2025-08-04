let dic = {
    RUN: 'БЕГ',
    SKI: 'ЛЫЖИ',
    INDOOR: 'ВНУТРИ',
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
};

function getTypesList(m) {
    let list = [];
    if (m.type && m.type.length > 0 || m.excluded) {
        let types = [];
        if (m.type) {
            types = [ ...m.type ];
        }
        if (m.excluded) {
            types.push('EXCLUDED');
        }
        list = types.map(t => dic[t]).join(', ');
    }
    return list;
}

function isOrientMap(m) {
    return isEmpty(m.type) || m.type.includes('CITY') || m.type.includes('PARK') || isSpecialMap(m);
}

function isSpecialMap(m) {
    return !isEmpty(m.type) && (m.type.includes('RELIEF') || m.type.includes('WINTER') || m.type.includes('VELO') || m.type.includes('INDOOR'));
}

function isMapHidden(m) {
    return m.hidden || (m.owner && m.owner === 'NW');
}

function isMajor(m) {
    return m.major || (m.start && starts[m.start] && starts[m.start].major);
}

function mapLink(url, region) {
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
    let imgs = [];
    let bounds = map.getBounds();
    map.eachLayer( function(layer) {
        if(layer instanceof L.ImageOverlay) {
            let inside = inFrame(bounds, layer);
            if (total || inside) {
                imgs.push(layer);
            }
        }
    });
    return imgs.length;
}

function inFrame(bounds, layer) {
    return bounds.contains(layer.getTopLeft()) || bounds.contains(layer.getTopRight()) || bounds.contains(layer.getBottomLeft());
}

function getMapForName(fileName) {
    for (const m of oMaps) {
        if (m.url.includes(fileName)) {
            return m;
        }
    }
}

// searches all the maps for the given text
function searchMaps(text) {
    let results = [];
    text = unifyString(text);
    let year = Number(text);
    if (year) {
        for (const m of oMaps) {
            if (m.year && m.year === year && !isMapHidden(m)) {
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
    }
    return results;
}

function unifyString(s) {
    return s.toLocaleLowerCase().replaceAll('ё','е');
}

// searches the map is the best matches the given text
function searchMap(text) {
    text = text.trim().toLocaleLowerCase();

    let latLng = parseCoordinates(text);
    if (latLng) {
        map.panTo(latLng);
        return;
    }

    let title, year;
    let idx = text.indexOf('(');
    if (idx >= 0) {
        year = Number(text.substring(idx + 1, idx + 5));
        title = text.substring(0, idx - 1).trim();
    } else {
        year = Number(text);
    }
    if (title) {
        for (const m of oMaps) {
            if (m.name.toLocaleLowerCase().includes(title) && (!year || year === m.year) && !isMapHidden(m)) {
                return m;
            }
        }
    } else
    if (year) {
        for (const m of oMaps) {
            if (year === m.year && !isMapHidden(m)) {
                return m;
            }
        }
    } else {
        for (const m of oMaps) {
            for (const m of oMaps) {
                if (m.name.toLocaleLowerCase().includes(text) && !isMapHidden(m)) {
                    return m;
                }
            }
            for (const m of oMaps) {
                if (m.info && m.info.toLocaleLowerCase().includes(text) && !isMapHidden(m)) {
                    return m;
                }
            }
            for (const m of oMaps) {
                if (m.url.toLocaleLowerCase().includes(text) && !isMapHidden(m)) {
                    return m;
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

function hideMap(map, url) {
    map.eachLayer(function(layer){
        if (layer._url && layer._url.includes(url)) {
            layer.removeFrom(map);
        }
        else if (layer._gpx && layer._gpx === url) {
            layer.removeFrom(map);
        }
    });
}

function locateMap(m) {
    map.fitBounds(m.bounds);
}

function locateMapForUrl(mapName) {
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
            result += '\n' + m.name + CSV_SPRTR + safe(m.year) + CSV_SPRTR + o(m.owner) + CSV_SPRTR + link(m.url) +
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
            return '<a href="' + author.about + '">' + author.name + '</a>'
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
        case 'srb':location.href = './' + prefix + 'serbia.html'; break;
        case 'all':location.href = './' + prefix + 'all.html'; break;
        case 'starts':location.href = './starts.html'; break;
        case 'docs':location.href = './documents.html'; break;
        case 'tracks':location.href = './tracks.html'; break;
    }
}

function selectStart(start) {
    let url = location.href.split('?')[0];
    if (start !== 'all') {
        url += '?start=' + start;
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