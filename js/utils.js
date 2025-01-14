function isOrientMap(map) {
    return !map.types.includes('ROGAINE') && !map.types.includes('FUN');
}

function isMapHidden(m) {
    return m.hidden || (m.owner && m.owner === 'NW');
}

function mapLink(url) {
    return location.origin + location.pathname + '?map=' + extractFileName(url);
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
    map.eachLayer( function(layer) {
        if(layer instanceof L.ImageOverlay) {
            let bounds = map.getBounds();
            if(total || bounds.contains(layer.getTopLeft()) || bounds.contains(layer.getTopRight()) || bounds.contains(layer.getBottomLeft())) {
                imgs.push(layer);
            }
        }
    });
    return imgs.length;
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
    text = text.toLocaleLowerCase();
    let year = Number(text);
    if (year) {
        for (const m of oMaps) {
            if (m.year && m.year === year && !isMapHidden(m)) {
                results.push(m);
            }
        }
    } else {
        for (const m of oMaps) {
            if (m.name.toLocaleLowerCase().includes(text) && !isMapHidden(m)) {
                results.push(m);
            }
        }
        for (const m of oMaps) {
            if (!results.includes(m) && m.info && m.info.toLocaleLowerCase().includes(text) && !isMapHidden(m)) {
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

// searches the map is the best matches the given text
function searchMap(text) {
    text = text.trim().toLocaleLowerCase();

    let latLng = parseCoordinates(text);
    console.log(latLng)
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
    console.log(text, '||', title, '||', year)
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
        let layerUrl = layer._url;
        if (layerUrl && layerUrl.includes(url)) {
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
        CSV_SPRTR + 'Адрес для скачивания' + CSV_SPRTR + 'Доп.информация' + CSV_SPRTR + 'Тип';

    maps.sort((a, b) => a.name.localeCompare(b.name));
    for (const m of maps) {
        if (owner === undefined || owner === m.owner || (Array.isArray(m.owner) && m.owner.includes(owner))) {
            result += '\n' + m.name + CSV_SPRTR + safe(m.year) + CSV_SPRTR + o(m.owner) + CSV_SPRTR + link(m.url) +
                CSV_SPRTR + link(m.link) + CSV_SPRTR + clean(safe(m.info)) + CSV_SPRTR + m.types;
        }
    }
    console.log(result);
}
function safe(s) {
    return s === undefined ? '' : s;
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
    if (author.about) {
        return '<a href="' + author.about + '" target="_blank">' + author.name + '</a>'
    } else {
        return author.name;
    }
}

function selectMapRegion(region) {
    switch (region) {
        case 'index':location.href = './index.html'; break;
        case 'spb':location.href = './spb.html'; break;
        case 'msk':location.href = './moscow.html'; break;
        case 'all':location.href = './all.html'; break;
        case 'starts':location.href = './starts.html'; break;
    }
}

function selectChartsRegion(region) {
    switch (region) {
        case 'index':location.href = './index.html'; break;
        case 'spb': location.href = './charts-spb.html'; break;
        case 'msk': location.href = './charts-moscow.html'; break;
        case 'all': location.href = './charts-all.html'; break;
    }
}