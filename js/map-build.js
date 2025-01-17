
const ATTRIBUTION = '© <a href="https://github.com/efradkin/o-maps" target="_blank">Евгений Фрадкин</a> | <a href="https://t.me/orient_spb" target="_blank">Спорт. карты</a> на <a href="https://www.openstreetmap.org/copyright" target="_blank">OSM</a>';

let funGroup = L.layerGroup([]);
let specialGroup = L.layerGroup([]);
let forestGroup = L.layerGroup([]);
let parkGroup = L.layerGroup([]);
let cityGroup = L.layerGroup([]);

let rogaineGroup = L.layerGroup([]);
let rogaineNewGroup = L.layerGroup([]);
let rogaineOldGroup = L.layerGroup([]);

let groupRetro = L.layerGroup([]);
let group90th = L.layerGroup([]);
let group2000th = L.layerGroup([]);
let group2010th = L.layerGroup([]);
let group2020th = L.layerGroup([]);
let groupUnknownYear = L.layerGroup([]);

let groupAllOrient = L.layerGroup([]);

let osmLayer, openTopoLayer, yandexLayer, yandexSatelliteLayer, initialLayers
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

    initialLayers = [
        osmLayer, parkGroup, cityGroup, forestGroup, specialGroup, groupAllOrient,
        group2020th, group2010th, group2000th, group90th, groupRetro, groupUnknownYear,
    ];
}

function buildOverlayMapsContents() {
    return {
        "Город": cityGroup,
        "Парки": parkGroup,
        "Лес": forestGroup,
        "Специальные": specialGroup,
        "Все": groupAllOrient,
        "<span class='layer-separator'>2020-е</span>": group2020th,
        "2010-е": group2010th,
        "2000-е": group2000th,
        "90-е": group90th,
        "Ретро": groupRetro,
        "???": groupUnknownYear,
        "<span class='layer-separator'>Необычные</span>": funGroup,
        "<span class='layer-separator'>Рогейн</span>": rogaineGroup,
        "<span class='layer-separator'>Недавние</span>": rogaineNewGroup,
        "Давние": rogaineOldGroup,
    };
}

function allocateMap(m, imgLayer) {
    let added = false;
    if (m.types.includes('ROGAINE')) {
        added = true;
        imgLayer.addTo(rogaineGroup);
        let el = imgLayer.getElement();
        if (el) {
            el.style.zIndex = 0;
        }

        if (m.year && m.year >= 2010) {
            imgLayer.addTo(rogaineNewGroup);
        }
        if (m.year && m.year < 2010) {
            imgLayer.addTo(rogaineOldGroup);
        }
    }
    if (m.types.includes('FUN')) {
        added = true;
        imgLayer.addTo(funGroup);
    }
    if (m.types.includes('RELIEF') || m.types.includes('WINTER') || m.types.includes('VELO') || m.types.includes('INDOOR')) {
        added = true;
        imgLayer.addTo(specialGroup);
    }
    if (m.types.includes('CITY')) {
        added = true;
        imgLayer.addTo(cityGroup);
    }
    if (m.types.includes('PARK')) {
        added = true;
        imgLayer.addTo(parkGroup);
    }
    if (!added) {
        imgLayer.addTo(forestGroup);
    }

    if (isOrientMap(m)) {
        if (!m.year) {
            imgLayer.addTo(groupUnknownYear);
        } else if (m.year >= 2020) {
            imgLayer.addTo(group2020th);
        } else if (m.year >= 2010) {
            imgLayer.addTo(group2010th);
        } else if (m.year >= 2000) {
            imgLayer.addTo(group2000th);
        } else if (m.year >= 1990) {
            imgLayer.addTo(group90th);
        } else {
            imgLayer.addTo(groupRetro);
        }
        imgLayer.addTo(groupAllOrient);
    }
}
