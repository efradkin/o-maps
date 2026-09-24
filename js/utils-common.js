function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function updateUrlParam(paramName, paramValue) {
    const url = new URL(window.location.href);

    if (paramValue && (paramName === 'startYear' || paramValue !== 'ALL')) {
        url.searchParams.set(paramName, paramValue);
    } else {
        url.searchParams.delete(paramName);
    }

    window.location.href = url.toString();
}

function capitalize(s) {
    if (!s) return s;
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function extractFileName(url) {
    // Имя файла берём только из последнего сегмента пути.
    // Старая регулярка не была привязана к последнему сегменту и на ссылках вида
    // https://t.me/pmarshbrosok возвращала "t" (совпадало "/t" + "." + "me/pmarshbrosok").
    const path = String(url).split(/[?#]/)[0];
    const fileName = path.substring(path.lastIndexOf('/') + 1);
    const dot = fileName.lastIndexOf('.');
    return dot > 0 ? fileName.substring(0, dot) : '';
}

// from https://stackoverflow.com/questions/6997262/how-to-pull-url-file-extension-out-of-url-string-using-javascript
function extractFileExt(url) {
    // If queries are present, we removed them from the URL.
    // If there is any trailing slash, we remove it from the URL.
    if (url.includes('?')) {
        url = url.replace(/[?&]+([^=&]+)=([^&]*)/gi,'')?.replace(/\/+$/gi,'');
    }
    // Extension starts after the first dot after the last slash
    let extStart = url.indexOf('.',url.lastIndexOf('/')+1);
    if (extStart == -1) {
        return 'url'; // hardcoded for the URL icon
    }
    var ext = url.substr(extStart+1);
    // To handle multiple periods in the filename, we ensure that the current dot is the final one.
    if ( (extStart = url.lastIndexOf('.')) ) {
        ext = url.substr(extStart+1);
    }
    // end of extension must be one of: end-of-string or question-mark or hash-mark with ext.search(/$|[?#]/)
    return ext.substring(0,ext.search(/$|[?#]/));
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log(`Copied text to clipboard: ${text}`);
        })
        .catch((error) => {
            console.error(`Could not copy text: ${error}`);
        });
}

// Function to save map's view (center and zoom) to localStorage
function saveMapState(map, region) {
    const center = map.getCenter();
    const zoom = map.getZoom();
    const mapState = {
        lat: center.lat,
        lng: center.lng,
        zoom: zoom
    };
    localStorage.setItem(region + '.mapState', JSON.stringify(mapState));
}

// Function to load saved map state from localStorage
function loadMapState(region) {
    const savedState = localStorage.getItem(region + '.mapState');
    if (savedState) {
        return JSON.parse(savedState);
    }
    return null;
}

// Removes HTML tags and quotes from a string
// https://stackoverflow.com/questions/74517628/remove-html-tags-and-its-contents-from-a-string-javascript
function clean(s) {
    return s.replace(/(<([^>]+)>)/gi, '').replace(/['"]+/g, '');
}

// Removes the HTML elements with their content (from ChatGPT)
function strip(s) {
    const temp = document.createElement('div');
    temp.innerHTML = s;

    let result = '';
    // Iterate through all child nodes
    temp.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            result += node.textContent;
        }
    });

    return clean(result.trim());
}

// считаем площадь в км2
// https://gis.stackexchange.com/questions/423601/leaftlet-map-with-carto-database-to-recalculate-area-on-polygon-edits
function getArea(latLngs) {
    return L.GeometryUtil.geodesicArea(latLngs)*0.000002*.465;
}
function getMapArea(latLngs) {
    return getArea(latLngs)*1.2;
}
// считаем длину в км
// https://gis.stackexchange.com/questions/422864/getting-total-length-of-polyline-from-leaflet-draw
function getDistance(latLngs) {
    var length = 0;
    for (var i = 0; i < latLngs.length - 1; i++) {
        length += latLngs[i].distanceTo(latLngs[i + 1]);
    }
    return (length / 1000).toFixed(2);
}

function dateDiff(first, second) {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

// from ChatGPT
function parseCoordinates(str) {
    // Regex pattern to match latitude and longitude (separated by space)
    const regex = /(-?\d{1,3}\.\d+)\s*,*\s*(-?\d{1,3}\.\d+)/;
    const match = str.match(regex);

    if (match) {
        const lat = parseFloat(match[1]);
        const lng = parseFloat(match[2]);
        return new L.LatLng(lat, lng);
    } else {
        return null;  // If no valid coordinates are found
    }
}

function removeFromArray(array, value) {
    const index = array.indexOf(value);
    if (index > -1) { // only splice array when item is found
        array.splice(index, 1); // 2nd parameter means remove one item only
    }
}

function isObject(obj) {
    return obj && typeof obj === 'object' && obj.constructor === Object;
}

function isEmpty(array) {
    return isNull(array) || array.length === 0;
}

function safe(s) {
    return s || '';
}

function pushItems(array, items) {
    if (Array.isArray(items)) {
        for (const i of items) {
            pushOneItem(array, i);
        }
    } else {
        pushOneItem(array, items);
    }
}

function pushOneItem(array, item) {
    if (!array.includes(item)) {
        array.push(item);
    }
}

const downloadTableAsCSV = (table, filename) => {
    const csv = Array.from(table.find('tr')).reduce((acc, row) => {
        const cols = Array.from($(row).find('td, th'));
        // Кавычки внутри ячейки по правилам CSV удваиваются.
        const rowData = cols.map((col) => `"${$(col).text().trim().replace(/"/g, '""')}"`);
        acc.push(rowData.join(';'));
        return acc;
    }, []);

    // encodeURIComponent, а не encodeURI: тот не кодирует '#', и файл обрезался бы на первом '#'.
    const encodedUri = 'data:text/csv;charset=utf-8,' + encodeURIComponent('\uFEFF' + csv.join('\n'));
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

function countEntries(o) {
    if (isNull(o) || !o) {
        return 0;
    }
    else if (isObject(o)) {
        return Object.entries(o).length;
    } else {
        return 1;
    }
}

function isNull(o) {
    return typeof o === 'undefined' || o === undefined || o === null;
}

function getTimeOfDay() {
    const currentHour = new Date().getHours();

    if (currentHour >= 6 && currentHour < 11) {
        return 'MORNING';
    } else if (currentHour >= 11 && currentHour < 18) {
        return 'DAY';
    } else if (currentHour >= 18 && currentHour < 22) {
        return 'EVENING';
    } else {
        return 'NIGHT';
    }
}

function getGreeting() {
    switch (getTimeOfDay()) {
        case 'MORNING': return 'Доброе утро!';
        case 'DAY': return 'Добрый день!';
        case 'EVENING': return 'Добрый вечер!';
        default: return 'Доброй ночи!';
    }
}

function buildLinksWithLabel(links, label) {
    if (links && links.length > 0) {
        if (Array.isArray(links)) {
            if (links.length === 1) {
                return `<a href="${links[0]}">${label}</a>`
            } else {
                return `${label}: ${buildLinksList(links)}`
            }
        } else {
            return `<a href="${links}">${label}</a>`
        }
    }
    return '';
}

function buildLinksList(links) {
    let results = '', counter = 1;
    if (links) {
        if (!Array.isArray(links)) {
            links = [links];
        }
        const cache = [];
        for (const r of links) {
            if (cache.includes(r)) continue;
            cache.push(r);
            if (results) results += ', ';
            results += `[<a href="${r}">${counter++}</a>]`;
        }
    }
    return results;
}

// --- GPX -----------------------------------------------------------------

// Экранирование значений для XML
function escapeXml(s) {
    return String(s).replace(/[<>&'"]/g, function (c) {
        return {'<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;'}[c];
    });
}

// Собираем GPX 1.1 из массива L.LatLng.
// options: { name, desc, waypoints } — waypoints добавляет <wpt> с номерами точек.
// <ele> сознательно не пишем: выдуманные нули хуже отсутствия тега —
// часть программ построит по ним профиль на уровне моря.
function buildGpx(latLngs, options) {
    options = options || {};
    const name = options.name || 'o-maps';
    const time = new Date().toISOString().replace(/\.\d+Z$/, 'Z');

    const wpts = options.waypoints
        ? latLngs.map(function (p, i) {
            return '  <wpt lat="' + p.lat.toFixed(6) + '" lon="' + p.lng.toFixed(6) + '">'
                + '<name>' + (i + 1) + '</name></wpt>';
        }).join('\n') + '\n'
        : '';

    const trkpts = latLngs.map(function (p) {
        return '      <trkpt lat="' + p.lat.toFixed(6) + '" lon="' + p.lng.toFixed(6) + '"/>';
    }).join('\n');

    return '<?xml version="1.0" encoding="UTF-8"?>\n'
        + '<gpx version="1.1" creator="o-maps.spb.ru"\n'
        + '     xmlns="http://www.topografix.com/GPX/1/1"\n'
        + '     xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n'
        + '     xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">\n'
        + '  <metadata>\n'
        + '    <name>' + escapeXml(name) + '</name>\n'
        + (options.desc ? '    <desc>' + escapeXml(options.desc) + '</desc>\n' : '')
        + '    <time>' + time + '</time>\n'
        + '  </metadata>\n'
        + wpts
        + '  <trk>\n'
        + '    <name>' + escapeXml(name) + '</name>\n'
        + '    <trkseg>\n'
        + trkpts + '\n'
        + '    </trkseg>\n'
        + '  </trk>\n'
        + '</gpx>\n';
}

// Отдаём строку файлом через Blob (без data: URL — не ломается на кириллице и размере)
function downloadText(text, filename, mime) {
    const blob = new Blob([text], {type: (mime || 'text/plain') + ';charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    setTimeout(function () {
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }, 0);
}

// Имя файла вида o-maps-line-20260914-1530.gpx — латиница, чтобы не ловить
// проблемы с кодировкой при передаче файла дальше
function timestampFileName(prefix, ext) {
    const d = new Date();
    const p = function (n) { return String(n).padStart(2, '0'); };
    return prefix + '-' + d.getFullYear() + p(d.getMonth() + 1) + p(d.getDate())
        + '-' + p(d.getHours()) + p(d.getMinutes()) + '.' + ext;
}

// Кнопка «к началу страницы» (#back-to-start) в левом нижнем углу.
// Перенесена из calendar.js: ею пользуются календари и страницы стартов (mms.html).
// Разметка кнопки должна быть на странице:
//   <div id="page-start"></div><button id="back-to-start" type="button" aria-label="К началу страницы">↖</button>
// options.smooth - плавная прокрутка вместо мгновенной (календари вызывают без
// параметров и работают по-прежнему). При включённом в системе «уменьшении
// движения» прокрутка всегда мгновенная.
function writeBackToStartButton(options = {}) {
    const smooth = !!options.smooth &&
        !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    // В мобильном UI (класс om-mobile-enhanced) у страницы своя навигация,
    // кнопка там не показывается. Поставьте true, чтобы включить и в нём.
    const SHOW_BACK_BUTTON_IN_MOBILE_UI = true;

    function initBackToStartButton() {
        const backButton = document.getElementById('back-to-start');

        if (!backButton) {
            console.warn('back-to-start button not found');
            return;
        }

        if (!SHOW_BACK_BUTTON_IN_MOBILE_UI &&
            document.documentElement.classList.contains('om-mobile-enhanced')) {
            backButton.classList.remove('is-visible');
            return;
        }

        // Важно: выносим кнопку из возможных контейнеров таблицы.
        // У position: fixed бывают проблемы, если предки имеют transform/filter/perspective.
        document.body.appendChild(backButton);

        let rafId = null;

        // В десктопном интерфейсе прокручивается не окно, а контейнер таблицы
        // .o-sheet-wrapper (overflow-y: auto; height: calc(100vh - 135px)).
        // Поэтому window.scrollY там всегда 0, и опираться только на него нельзя.
        // Событие scroll у элементов не всплывает — слушаем контейнер отдельно.
        let scrollContainers = [];
        let containersResolved = false;

        function collectScrollContainers() {
            const found = [];
            const table = document.querySelector('.o-main-table') || document.querySelector('table');
            let el = table ? table.parentElement : document.querySelector('.o-sheet-wrapper');

            while (el && el !== document.body && el !== document.documentElement) {
                const style = window.getComputedStyle(el);

                const scrollableY =
                    style.overflowY === 'auto' ||
                    style.overflowY === 'scroll' ||
                    style.overflowY === 'overlay';

                const scrollableX =
                    style.overflowX === 'auto' ||
                    style.overflowX === 'scroll' ||
                    style.overflowX === 'overlay';

                if (scrollableY || scrollableX) {
                    found.push(el);
                }

                el = el.parentElement;
            }

            return found;
        }

        function getScrollContainers() {
            const stale = scrollContainers.some(el => !el.isConnected);

            if (!containersResolved || stale) {
                scrollContainers.forEach(el => el.removeEventListener('scroll', scheduleUpdate));
                scrollContainers = collectScrollContainers();
                scrollContainers.forEach(el =>
                    el.addEventListener('scroll', scheduleUpdate, { passive: true }));
                containersResolved = true;
            }

            return scrollContainers;
        }

        function getScrollX() {
            let x = (
                window.scrollX ||
                window.pageXOffset ||
                document.documentElement.scrollLeft ||
                document.body.scrollLeft ||
                0
            );

            getScrollContainers().forEach(el => {
                if (el.scrollLeft > x) x = el.scrollLeft;
            });

            return x;
        }

        function getScrollY() {
            let y = (
                window.scrollY ||
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0
            );

            getScrollContainers().forEach(el => {
                if (el.scrollTop > y) y = el.scrollTop;
            });

            return y;
        }

        function placeBackButton() {
            const margin = 12;
            const buttonWidth = backButton.offsetWidth || 48;
            const buttonHeight = backButton.offsetHeight || 48;

            let x;
            let y;

            if (window.visualViewport) {
                const viewport = window.visualViewport;

                // Левый нижний угол именно видимой области при zoom.
                x = viewport.offsetLeft + margin;
                y = viewport.offsetTop + viewport.height - buttonHeight - margin;
            } else {
                // Fallback для старых браузеров.
                x = margin;
                y = window.innerHeight - buttonHeight - margin;
            }

            backButton.style.transform =
                `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
        }

        function updateBackButton() {
            rafId = null;

            const shouldShow = getScrollY() > 150 || getScrollX() > 20;

            backButton.classList.toggle('is-visible', shouldShow);

            if (shouldShow) {
                placeBackButton();
            }
        }

        function scheduleUpdate() {
            if (rafId !== null) return;
            rafId = requestAnimationFrame(updateBackButton);
        }

        function forceScrollToStart(event) {
            if (event) {
                event.preventDefault();
                event.stopPropagation();
            }

            const backButton = document.getElementById('back-to-start');
            if (backButton) {
                backButton.blur();
            }

            const html = document.documentElement;
            const body = document.body;

            const oldHtmlScrollBehavior = html.style.scrollBehavior;
            const oldBodyScrollBehavior = body.style.scrollBehavior;

            // Отключаем плавную прокрутку на время принудительного сброса.
            html.style.scrollBehavior = 'auto';
            body.style.scrollBehavior = 'auto';

            function ensureStartAnchor() {
                let anchor = document.getElementById('page-start-anchor');

                if (!anchor) {
                    anchor = document.createElement('div');
                    anchor.id = 'page-start-anchor';
                    anchor.setAttribute('aria-hidden', 'true');
                    document.body.insertBefore(anchor, document.body.firstChild);
                }

                // Важно: якорь должен быть именно в координатах страницы 0,0.
                anchor.style.position = 'absolute';
                anchor.style.left = '0';
                anchor.style.top = '0';
                anchor.style.width = '1px';
                anchor.style.height = '1px';
                anchor.style.overflow = 'hidden';
                anchor.style.pointerEvents = 'none';

                return anchor;
            }

            const startAnchor = ensureStartAnchor();

            function getVisualPageLeft() {
                if (window.visualViewport) {
                    return window.visualViewport.pageLeft || 0;
                }

                return (
                    window.scrollX ||
                    window.pageXOffset ||
                    html.scrollLeft ||
                    body.scrollLeft ||
                    0
                );
            }

            function getVisualPageTop() {
                if (window.visualViewport) {
                    return window.visualViewport.pageTop || 0;
                }

                return (
                    window.scrollY ||
                    window.pageYOffset ||
                    html.scrollTop ||
                    body.scrollTop ||
                    0
                );
            }

            function getScrollableElements() {
                const targets = new Set();

                targets.add(document.scrollingElement);
                targets.add(html);
                targets.add(body);

                document.querySelectorAll('*').forEach(el => {
                    const style = window.getComputedStyle(el);

                    const canScrollX =
                        (style.overflowX === 'auto' ||
                            style.overflowX === 'scroll' ||
                            style.overflowX === 'overlay') &&
                        el.scrollWidth > el.clientWidth;

                    const canScrollY =
                        (style.overflowY === 'auto' ||
                            style.overflowY === 'scroll' ||
                            style.overflowY === 'overlay') &&
                        el.scrollHeight > el.clientHeight;

                    if (canScrollX || canScrollY || el.scrollLeft > 0 || el.scrollTop > 0) {
                        targets.add(el);
                    }
                });

                return Array.from(targets).filter(Boolean);
            }

            function scrollEverythingToZero() {
                // 1. Координатная прокрутка основного окна.
                window.scrollTo(0, 0);

                try {
                    window.scrollTo({
                        left: 0,
                        top: 0,
                        behavior: 'auto'
                    });
                } catch (e) {
                    window.scrollTo(0, 0);
                }

                // 2. Прокрутка к реальному якорю 0,0.
                // Это особенно важно при mobile zoom / visual viewport.
                try {
                    startAnchor.scrollIntoView({
                        behavior: 'auto',
                        block: 'start',
                        inline: 'start'
                    });
                } catch (e) {
                    startAnchor.scrollIntoView(true);
                }

                // 3. Сброс document scroll.
                if (document.scrollingElement) {
                    document.scrollingElement.scrollTop = 0;
                    document.scrollingElement.scrollLeft = 0;
                }

                html.scrollTop = 0;
                html.scrollLeft = 0;
                body.scrollTop = 0;
                body.scrollLeft = 0;

                // 4. Сброс внутренних scroll-контейнеров.
                getScrollableElements().forEach(el => {
                    try {
                        el.scrollTop = 0;
                        el.scrollLeft = 0;

                        if (typeof el.scrollTo === 'function') {
                            el.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: 'auto'
                            });
                        }
                    } catch (e) {
                        // Некоторые элементы могут не позволять прямую прокрутку.
                    }
                });

                // 5. Ещё раз якорь — после внутренних контейнеров.
                try {
                    startAnchor.scrollIntoView({
                        behavior: 'auto',
                        block: 'start',
                        inline: 'start'
                    });
                } catch (e) {
                    startAnchor.scrollIntoView(true);
                }
            }

            function isReallyAtStart() {
                const x = getVisualPageLeft();
                const y = getVisualPageTop();

                // Допуск нужен из-за subpixel scroll.
                return x <= 1 && y <= 1;
            }

            let attempts = 0;
            const maxAttempts = 60;

            function repeatUntilAtStart() {
                scrollEverythingToZero();
                attempts += 1;

                if (!isReallyAtStart() && attempts < maxAttempts) {
                    requestAnimationFrame(repeatUntilAtStart);
                    return;
                }

                // Финальная страховка: мобильный браузер может пересчитать viewport
                // уже после основного цикла.
                setTimeout(scrollEverythingToZero, 50);
                setTimeout(scrollEverythingToZero, 150);
                setTimeout(scrollEverythingToZero, 350);
                setTimeout(scrollEverythingToZero, 700);
                setTimeout(scrollEverythingToZero, 1200);

                setTimeout(() => {
                    html.style.scrollBehavior = oldHtmlScrollBehavior;
                    body.style.scrollBehavior = oldBodyScrollBehavior;

                    if (typeof scheduleUpdate === 'function') {
                        scheduleUpdate();
                    } else if (typeof updateBackButton === 'function') {
                        updateBackButton();
                    }
                }, 1300);
            }

            repeatUntilAtStart();
        }

        // Плавная прокрутка: окно и все прокрученные контейнеры едут к 0,0
        // средствами браузера. Если за отведённое время начало не достигнуто
        // (например, мобильный zoom), добиваем принудительным сбросом.
        function smoothScrollToStart(event) {
            if (event) {
                event.preventDefault();
                event.stopPropagation();
            }
            backButton.blur();

            const scrolled = Array.from(document.querySelectorAll('*'))
                .filter(el => el !== document.documentElement && el !== document.body &&
                    (el.scrollTop > 0 || el.scrollLeft > 0));

            try {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                scrolled.forEach(el => el.scrollTo({top: 0, left: 0, behavior: 'smooth'}));
            } catch (e) {
                forceScrollToStart();
                return;
            }

            const SMOOTH_TIMEOUT = 2500;
            const startTime = performance.now();

            function waitForStart() {
                const atStart = getScrollY() <= 1 && getScrollX() <= 1 &&
                    scrolled.every(el => el.scrollTop <= 1 && el.scrollLeft <= 1);
                if (atStart) {
                    scheduleUpdate();
                } else if (performance.now() - startTime < SMOOTH_TIMEOUT) {
                    requestAnimationFrame(waitForStart);
                } else {
                    forceScrollToStart();
                }
            }

            requestAnimationFrame(waitForStart);
        }

        backButton.addEventListener('click', smooth ? smoothScrollToStart : forceScrollToStart);

        window.addEventListener('scroll', scheduleUpdate, { passive: true });

        // При смене ширины/ориентации медиазапрос может отдать прокрутку окну
        // (@media max-width: 600px), поэтому контейнеры ищем заново.
        function invalidateContainers() {
            containersResolved = false;
            scheduleUpdate();
        }

        window.addEventListener('resize', invalidateContainers);
        window.addEventListener('orientationchange', invalidateContainers);

        if (window.visualViewport) {
            window.visualViewport.addEventListener('scroll', scheduleUpdate, { passive: true });
            window.visualViewport.addEventListener('resize', scheduleUpdate);
        }

        scheduleUpdate();
        setTimeout(scheduleUpdate, 100);
        setTimeout(scheduleUpdate, 500);
        setTimeout(scheduleUpdate, 1000);
        setTimeout(scheduleUpdate, 2000);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initBackToStartButton);
    } else {
        initBackToStartButton();
    }
}
