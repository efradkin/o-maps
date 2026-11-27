// Дополнительные слои специализированной страницы ski-tracks.html.
// Загрузка GPX и основная логика карты повторно используют общие скрипты O-Maps.

const SKI_TRACK_COLORS = {
    SKATE_ROUTE: '#2454d3',
    CLASSIC_ROUTE: '#e58a00',
    FICKLE_ROUTE: '#8e44ad',
    WALKWAY: '#777777',
    FURROW: '#159447'
};

function getSkiTrackStyle(track) {
    const kind = track && track.ski_kind;
    return {
        color: SKI_TRACK_COLORS[kind] || '#2454d3',
        dashArray: kind === 'FICKLE_ROUTE' || kind === 'WALKWAY' || kind === 'FURROW' ? '7 5' : null
    };
}

// POI заранее собираются Python-скриптом из OSM в data/ski-poi.geojson.
// Браузер больше не обращается к Overpass: он только показывает объекты в окне карты.
function initSkiPOI(map) {
    if (!map || typeof skiPoiLayer === 'undefined' || map._skiPoiInitialized) return;
    map._skiPoiInitialized = true;

    const dataUrl = 'data/ski-poi.geojson';
    const minZoom = 10;
    const markersById = new Map();
    let features = null;
    let loading = false;
    let loadError = null;
    let statusElement;
    let refreshTimer;

    function setStatus(message, isError = false) {
        if (!statusElement) return;
        statusElement.textContent = message;
        statusElement.style.color = isError ? '#a40000' : '#333';
        statusElement.style.display = message ? 'block' : 'none';
    }

    function escapeHtml(value) {
        return String(value ?? '').replace(/[&<>"']/g, ch => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        })[ch]);
    }

    function getCategory(properties) {
        switch (properties.category) {
            case 'ski_shop': return ['🎿', 'Лыжный магазин / прокат'];
            case 'cross_country_skiing': return ['🎿', 'Лыжный объект'];
            case 'ski_centre': return ['⛷', 'Лыжный центр'];
            case 'ski_club': return ['⛷', 'Лыжный клуб'];
            default: return ['🎿', 'Лыжная инфраструктура'];
        }
    }

    function makeIcon(symbol, title) {
        return L.divIcon({
            className: 'ski-poi-icon',
            html: '<span title="' + escapeHtml(title) + '">' + symbol + '</span>',
            iconSize: [22, 22],
            iconAnchor: [11, 11]
        });
    }

    function makeMarker(feature) {
        const properties = feature.properties || {};
        const coordinates = feature.geometry && feature.geometry.coordinates;
        if (!coordinates || coordinates.length < 2) return null;
        const [symbol, category] = getCategory(properties);
        const marker = L.marker([coordinates[1], coordinates[0]], {
            icon: makeIcon(symbol, category)
        });
        const tags = properties.tags || {};
        const website = tags.website || tags['contact:website'];
        const details = [
            '<b>' + escapeHtml(properties.name || category) + '</b>',
            escapeHtml(category),
            tags.description ? escapeHtml(tags.description) : '',
            website && /^https?:\/\//i.test(website)
                ? '<a href="' + escapeHtml(website) + '" target="_blank" rel="noopener">Сайт</a>' : '',
            '<a href="' + escapeHtml(properties.osm_url || '#') + '" target="_blank" rel="noopener">Объект в OpenStreetMap</a>'
        ].filter(Boolean).join('<br>');
        marker.bindPopup(details);
        return marker;
    }

    async function loadData() {
        if (features || loading) return;
        loading = true;
        setStatus('Загружаем локальную базу лыжных объектов…');
        try {
            const response = await fetch(dataUrl, {cache: 'no-cache'});
            if (!response.ok) throw new Error('HTTP ' + response.status + ' при загрузке ' + dataUrl);
            const data = await response.json();
            if (!data || data.type !== 'FeatureCollection' || !Array.isArray(data.features)) {
                throw new Error('Некорректный GeoJSON: ожидался FeatureCollection');
            }
            features = data.features;
            loadError = null;
            console.info('[Ski POI] Локальная база загружена:', features.length, 'объектов');
            refreshVisibleMarkers();
        } catch (error) {
            loadError = error;
            console.error('[Ski POI] Не удалось загрузить локальную базу:', error);
            setStatus('Не удалось загрузить базу лыжных POI: ' + error.message, true);
        } finally {
            loading = false;
        }
    }

    function refreshVisibleMarkers() {
        if (!features || !map.hasLayer(skiPoiLayer)) return;
        if (map.getZoom() < minZoom) {
            skiPoiLayer.clearLayers();
            setStatus('Приблизьте карту до масштаба ' + minZoom + ', чтобы увидеть лыжные объекты');
            return;
        }
        const bounds = map.getBounds();
        skiPoiLayer.clearLayers();
        let visible = 0;
        for (const feature of features) {
            const coordinates = feature.geometry && feature.geometry.coordinates;
            if (!coordinates || !bounds.contains([coordinates[1], coordinates[0]])) continue;
            const id = feature.id || (feature.properties.osm_type + '/' + feature.properties.osm_id);
            let marker = markersById.get(id);
            if (!marker) {
                marker = makeMarker(feature);
                if (!marker) continue;
                markersById.set(id, marker);
            }
            skiPoiLayer.addLayer(marker);
            visible++;
        }
        setStatus('Лыжные объекты: ' + visible + ' в видимой области · всего в базе: ' + features.length);
    }

    function scheduleRefresh() {
        clearTimeout(refreshTimer);
        refreshTimer = setTimeout(() => {
            if (features) refreshVisibleMarkers();
            else if (map.hasLayer(skiPoiLayer)) loadData();
        }, 180);
    }

    const statusControl = L.control({position: 'bottomleft'});
    statusControl.onAdd = function () {
        const container = L.DomUtil.create('div', 'leaflet-control ski-poi-status');
        container.style.cssText = 'display:none;background:rgba(255,255,255,.94);padding:5px 8px;border-radius:3px;max-width:320px;font-size:12px;line-height:1.35;box-shadow:0 1px 5px rgba(0,0,0,.35)';
        statusElement = container;
        L.DomEvent.disableClickPropagation(container);
        return container;
    };
    statusControl.addTo(map);

    map.on('moveend', scheduleRefresh);
    map.on('overlayadd', event => {
        if (event.layer === skiPoiLayer) scheduleRefresh();
    });
    map.on('overlayremove', event => {
        if (event.layer === skiPoiLayer) {
            skiPoiLayer.clearLayers();
            setStatus('');
        }
    });
    if (map.hasLayer(skiPoiLayer)) scheduleRefresh();
}
