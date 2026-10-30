
/*   CONSTANTS   */
const DAY_TIME_RANGE = 1000 * 60 * 60 * 24;
const WEEK_TIME_RANGE = DAY_TIME_RANGE * 7;

const O_SITE_ADDRESS_PREFIX = 'https://o-site.spb.ru/race.php?id=';

// Сервисы ссылок: подпись и иконка по адресу. Порядок важен: первое совпадение.
// img - иконка сервиса; imgOnlyFor - иконка только в этом контексте (video/photo/reg/res);
// siteImg - иконка для ссылки на обычную страницу сервиса (сайт события в календаре), если она
// отличается от img (у O-Site иконка с «R» - только для результатов).
// Используется в event.js (подписанные ссылки) и в календаре (иконки сайта события).
const SERVICES = [
    // Википедия - первой: в адресах статей встречаются названия других сервисов.
    { re: /wikipedia\.org/i, label: 'Википедия', img: 'images/wikipedia.png' },
    { re: /orgeo/i, label: 'Orgeo', img: 'images/orgeo.webp' },
    { re: /o-reg/i, label: 'O-Reg', img: 'images/oreg.webp' },
    { re: /o-time/i, label: 'O-Time', img: 'images/otime.webp' },
    { re: /multsport/i, label: 'Multsport', img: 'images/multsport.webp' },
    { re: /sportident/i, label: 'Sportident', img: 'images/si.webp' },
    { re: /reskeep/i, label: 'Reskeep', img: 'images/r-k.gif' },
    { re: /o-site\.spb\.ru/i, label: 'O-Site', img: 'images/o-site-r.gif', siteImg: 'images/o-site.gif' },
    { re: /vkvideo|vk\.(com|ru)\/(video|clip)/i, label: 'VK Видео', img: 'images/vkvideo.gif' },
    { re: /vk\.(com|ru)/i, label: 'ВКонтакте', img: 'images/vk.webp' },
    { re: /t\.me\//i, label: 'Telegram', img: 'images/telegram.webp' },
    { re: /youtu/i, label: 'YouTube', img: 'images/youtube.webp' },
    { re: /rutube/i, label: 'Rutube', img: 'images/rutube.webp' },
    { re: /disk\.yandex|yadi\.sk/i, label: 'Яндекс Диск' },
    { re: /yandex|dzen/i, label: 'Яндекс', img: 'images/ya_video.webp', imgOnlyFor: 'video' },
    { re: /cloud\.mail\.ru/i, label: 'Облако Mail' },
    { re: /sport-images\.ru/i, label: 'Sport-images', img: 'images/sportimages.webp' },
    { re: /russiarunning/i, label: 'RussiaRunning' },
    { re: /russialoppet/i, label: 'Russialoppet', img: 'logo/russialoppet.gif' },
    { re: /gosuslugi/i, label: 'Госуслуги' },
    { re: /strava/i, label: 'Strava', img: 'images/strava_32.gif' },
    { re: /o-stuff\.net/i, label: 'O-Stuff', img: 'images/o-stuff.webp' },
    { re: /livejournal/i, label: 'ЖЖ', img: 'images/lj.webp' },
    { re: /livelox\.com/i, label: 'Livelox', img: 'images/livelox.webp' },
];

const OLIVE_IMAGE_URL = './maps/olive.png';
const EMPTY_IMAGE_URL = './maps/empty.png';

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
    BELARUS: {
        name: 'Беларусь',
    },
    BULGARIA: {
        name: 'Болгария',
    },
    VLADIMIR: {
        name: 'Владимирская обл',
    },
    VOLOGDA: {
        name: 'Вологодская обл',
    },
    VORONEZH: {
        name: 'Воронеж',
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
        name: 'Иркутская обл',
        logo: 'irkutsk_rogaine.webp'
    },
    KABARDA: {
        name: 'Кабардино-Балкария'
    },
    KAZAKHSTAN: {
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
    LATVIA: {
        name: 'Латвия',
        logo: 'LOF.gif' // 'latvia.webp'
    },
    LIETUVA: {
        name: 'Литва',
        logo: 'lietuva.gif'
    },
    MSK: {
        name: 'Москва'
    },
    MOLDOVA: {
        name: 'Молдова'
    },
    MURMANSK: {
        name: 'Мурманск',
        logo: 'murmansk.webp'
    },
    N_NOVGOROD: {
        name: 'Нижний Новгород',
        logo: 'nn_orient.gif'
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
    NORWAY: {
        name: 'Норвегия',
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
    UKRAINE: {
        name: 'Украина'
    },
    FINLAND: {
        name: 'Финляндия',
        logo: 'finland.gif'
    },
    FRA: {
        name: 'Франция',
        logo: 'france.webp'
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
    ESTONIA: {
        name: 'Эстония',
        logo: 'estonia.webp'
    },
};

const dic = {
    RUN: 'БЕГ',
    SKI: 'ЛЫЖИ',
    VELO: 'ВЕЛО',
    WALK: 'ПЕШИЙ',
    WATER: 'ВОДНЫЙ',
    TRAIL_O: 'ТРЕЙЛ-О',
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
    CLUB: 'КЛУБ',
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

// Карусель со всеми логотипами (пути относительно корня сайта, напр. 'logo/x.gif').
// id - уникальный на странице; imgClass - классы картинок;
// wrapperClass / wrapperStyle - доп. классы и стиль блока карусели.
function buildLogoCarousel(logos, id, imgClass, wrapperClass = '', wrapperStyle = '') {
    const items = logos.map((logo, idx) => `
                <div class="carousel-item${idx === 0 ? ' active' : ''}" data-bs-interval="${idx === 0 ? 10000 : 2000}">
                    <img src="./${logo}" class="${imgClass}" alt="Лого">
                    <div class="carousel-caption d-none d-md-block">
                    </div>
                </div>`).join('');
    const cls = 'carousel carousel-dark slide logo-carousel' + (wrapperClass ? ' ' + wrapperClass : '');
    const style = wrapperStyle ? ` style="${wrapperStyle}"` : '';
    return `
        <div id="${id}" class="${cls}"${style}>
            <div class="carousel-inner">${items}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#${id}" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#${id}" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
        </div>
    `;
}

// Логотип во всплывающем окне: одна картинка или карусель со всеми логотипами
// При isMobile текст попапа идёт под логотипом (mobile-popup-text), поэтому логотип
// помечается классом popup-logo-inline и остаётся в потоке - иначе на сенсорных
// устройствах с широким окном (> 600px) десктопный position: fixed кладёт его на текст
function buildPopupLogo(logos, withCarousel = true) {
    if (!logos.length) {
        return '';
    }
    const inlineClass = isMobile ? ' popup-logo-inline' : '';
    if (logos.length === 1 || !withCarousel) {
        return '<img src="./' + logos[0] + '" alt="Лого" class="popup-logo' + inlineClass + '" />';
    }
    return buildLogoCarousel(logos, 'logo-carousel', 'd-block popup-logo', inlineClass.trim());
}

const ACTUAL_EVENTS_CALENDAR_PARAM_VALUE = 'actual';
const GPS_EVENTS_CALENDAR_PARAM_VALUE = 'gps';
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
const SEARCH_PARAM = urlParams.get('q');
const HAS_PRTNR_PARAM = urlParams.has('prtnr');
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
const HAS_ORDERS_PARAM = urlParams.has('orders');
const HAS_RETRO_PARAM = urlParams.has('retro');
const HAS_ALL_YEARS_PARAM = urlParams.has('all-years');
const YEAR_PARAM = urlParams.get('year');
const START_YEAR_PARAM = urlParams.get('startYear');
const HAS_CALENDAR_PARAM = urlParams.has('calendar');
const CALENDAR_PARAM = urlParams.get('calendar') ?? urlParams.get('event-type');
let START_NAME_PARAM = urlParams.get('start');
let REGION_NAME_PARAM = urlParams.get('region');
let ORDER_STATUS_PARAM = urlParams.get('order-status');
const HAS_POI_PARAM = urlParams.has('poi');
const HAS_OOPT_PARAM = urlParams.has('oopt');

const HAS_MOBILE_PARAM = urlParams.has('mobile');
const MOBILE_PARAM = urlParams.get('mobile');
let useMobileUI;
if (HAS_MOBILE_PARAM) {
    useMobileUI = (MOBILE_PARAM !== '0');
}


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

if (HAS_PRTNR_PARAM) {
    localStorage.setItem('prtnr', new Date().getTime());
}

const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
// Сенсорный экран сам по себе не делает устройство мобильным: у ноутбуков и моноблоков
// с тачем основной указатель - мышь или тачпад (pointer: fine), и раскладка у них десктопная.
// Тач учитывается, только когда основной указатель - палец (pointer: coarse): планшеты,
// в том числе iPad, который в userAgent представляется как Mac.
const isMobile = regex.test(navigator.userAgent) ||
    (('ontouchstart' in window || navigator.maxTouchPoints > 0) &&
        !!window.matchMedia && window.matchMedia('(pointer: coarse)').matches) ||
    (typeof L !== 'undefined') && L.Browser && (L.Browser.android || L.Browser.mobile);  // || L.Browser.touch || L.Browser.retina

/*   FUNCTIONS   */

function loadAllCalendars() {
    return [
        ...commonEvents,
        ...iofEvents,
        ...fsorEvents,
        ...irfEvents,
        ...events2027,
        ...events2026,
        ...events2025,
        ...events2024,
        ...events2023,
        ...events2022,
        ...events2021,
        ...events2020,
        ...events2019,
        ...events2018,
        ...events2017,
        ...events2016,
        ...events2015,
        ...events2014,
        ...events2013,
        ...events2012,
        ...events2011,
        ...events2010,
        ...events2009,
        ...events2008,
        ...events2007,
        ...events2006,
        ...events2005,
        ...events2004,
        ...eventsEarly
    ];
}

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

function getLastDate(events) {
    let date = null;
    if (events) {
        for (const e of events) {
            if (e.date) {
                const d = new Date(e.date);
                if (!date) {
                    date = d;
                } else {
                    if (d > date) date = d;
                }
            }
        }
    }
    return date;
}

function startYear(o, events) { // map, track, event
    if (o.startYear) return o.startYear;

    if (o.start && o.year) {
        return o.year;
    }

    if (!events && o.url) { // только для карт (пока что)
        events = findEventsForMap(o, true); // все эвенты для карты
    }
    const date = getLastDate(events);
    if (date) return date.getFullYear();

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

function getMapDates(m, events) {
    let result = '';
    if (m && m.date || !events) {
        result += getMapDatesOne(m);
    } else {
        const cache = [];
        for (const e of events) {
            const date = getMapDatesOne(e);
            if (cache.includes(date)) continue;
            cache.push(date);
            if (result) {
                result += ', ';
            }
            result += date;
        }
    }
    return result;
}

function getMapDatesOne(m) {
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
    return (m.hidden || (m.owner && m.owner === 'NW')) && (m.hidden !== false);
}

function isMajor(m) {
    let major = m.major;
    if (!major) {
        if (m.start) {
            if (Array.isArray(m.start)) {
                major = starts[m.start[0]] && starts[m.start[0]].major || starts[m.start[1]] && starts[m.start[1]].major;
            } else {
                major = starts[m.start] && starts[m.start].major;
            }
        }
    }
    if (!major && m.url) { // только для карт
        for (const e of findEventsForMap(m, false)) {
            if (e.major) {
                major = true; break;
            }
            if (!major) {
                if (e.start) {
                    if (Array.isArray(e.start)) {
                        major = starts[e.start[0]] && starts[e.start[0]].major || starts[e.start[1]] && starts[e.start[1]].major;
                    } else {
                        major = starts[e.start] && starts[e.start].major;
                    }
                }
                if (major) break;
            }
        }
    }
    return major;
}

function filterMapsForCharts() {
    //oMaps = oMaps.filter(m => !m.excluded && !(m.type && (m.type.includes('VELO') || m.type.includes('RELIEF') || m.type.includes('WINTER'))));
}

// Значки файлов, которые есть в images/ (<ext>-file.png).
const FILE_ICON_EXTS = ['doc', 'gif', 'jpg', 'ocd', 'pdf', 'png', 'url', 'webp'];

// Значок ссылки на файл: images/<результат>-file.png. Расширение без своего
// значка (zip, html, xls..., а также «расширение» адреса без файла - домен
// https://site.ru или точка в пути: ...-24.02.2026-(p.podgornyij,...)) - url.
function downloadIconExt(url) {
    const ext = extractFileExt(url).toLowerCase();
    const icon = {docx: 'doc', jpeg: 'jpg', omap: 'ocd'}[ext] ?? ext;
    return FILE_ICON_EXTS.includes(icon) ? icon : 'url';
}

// Проставляет поле page всем картам массива, у которых оно ещё не задано.
// Изменяет сами записи и возвращает тот же массив — для использования при сборке oMaps:
//     ...assignPage(otherMaps, 'all'),
function assignPage(maps, page) {
    for (const m of maps) {
        if (!m.page) {
            m.page = page;
        }
    }
    return maps;
}

function mapLink(url, m) { // m - for region
    let region;
    if (m) {
        if (m.page) {
            region = m.page;
        } else {
            if (m.start) {
                if (Array.isArray(m.start)) {
                    if (starts[m.start[0]]?.page) {
                        region = starts[m.start[0]].page;
                    }
                } else {
                    if (m.start && starts[m.start]?.page) {
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
    else if (pathname.includes('sheet-orders')) {
        region = 'all';
    }
    if (region) {
        pathname = '/' + region + '.html';
    }
    else if (pathname.includes('charts-')) {
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
                        content = `<img class="media-link" src="./images/${getVideoImg(l)}" alt="Видео" title="Видео" class="sheet-icon">`;
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
    let contentImage;
    if (content === 'VK') {
        contentImage = 'vk.webp';
    } else if (content === 'Sportident') {
        contentImage = 'si.webp';
    } else if (content === 'Telegram') {
        contentImage = 'telegram.webp';
    } else if (content === 'O-Site') {
        contentImage = 'o-site-r.gif';
    } else if (content === 'Orgeo') {
        contentImage = 'orgeo.webp';
    } else if (content === 'O-Reg') {
        contentImage = 'oreg.webp';
    } else if (content === 'O-Time') {
        contentImage = 'otime.webp';
    } else if (content === 'Multsport') {
        contentImage = 'multsport.webp';
    }
    if (contentImage) {
        content = `<img src="./images/${contentImage}" alt="${content}" title="${content}" class="sheet-icon">`;
    }
    if (link) {
        if (title) {
            title = ' title="' + title + '"';
        }
        return `<a href="${link}" ${(title ?? '')} ${(isDownload ? 'download' : '')}${noReferrerRel(link)}>${content}</a>`;
    }
    else
        return '';
}

function fixCoord(coord) {
    return coord.toFixed(7);
}

const O_GPS_CENTER_PREFIX = 'https://viewer.o-gps-center.ru/viewer/event/';
const LIVELOX_PREFIX = 'https://www.livelox.com/Events/Show/';
const LIVELOX_ICON = 'livelox.webp';
const RG_ICON = 'rg2.webp';

function isLiveloxUrl(url) {
    return /livelox\.com/i.test(String(url));
}

// Адрес события RouteGadget: RG2 (…/rg2.php#N или …/rg2/#N) или старый RouteGadget 1 (…/reitti.cgi?…).
function isRouteGadgetUrl(url) {
    return /\/rg2\.php|\/rg2\/(index\.php)?#|\/reitti\.cgi/i.test(String(url));
}

// Значок ссылки на трансляцию: у Livelox и RouteGadget - свои, у остальных - img (по умолчанию url-file.png).
function gpsIcon(url, img) {
    if (isLiveloxUrl(url)) {
        return LIVELOX_ICON;
    }
    return isRouteGadgetUrl(url) ? RG_ICON : (img ?? 'url-file.png');
}

// Ссылки на трансляции Livelox из поля livelox (номер события или массив номеров):
// объект { 'Livelox': адрес } или { 'Livelox 1': …, 'Livelox 2': … }.
function getLiveloxLinks(m) {
    const ids = [].concat(m.livelox ?? []);
    const result = {};
    ids.forEach((id, i) => {
        result['Livelox' + (ids.length > 1 ? ' ' + (i + 1) : '')] = LIVELOX_PREFIX + id;
    });
    return result;
}

// Ссылки на события RouteGadget из поля rg (адрес или, как у gps, объект { 'подпись': адрес } -
// по дням, форматам, группам): объект { 'RouteGadget': адрес } или сам объект rg.
function getRouteGadgetLinks(m) {
    return isObject(m.rg) ? {...m.rg} : {'RouteGadget': m.rg};
}

// Проверка наличия хотя бы одной непустой GPS-ссылки или идентификатора.
function hasGpsItem(value) {
    return value !== null && value !== undefined && value !== '';
}

function normalizeGpsValue(value) {
    if (Array.isArray(value)) {
        const items = value.filter(hasGpsItem);
        return items.length ? items : null;
    }
    if (isObject(value)) {
        const entries = Object.entries(value).filter(([, item]) => hasGpsItem(item));
        return entries.length ? Object.fromEntries(entries) : null;
    }
    return hasGpsItem(value) ? value : null;
}

// Имена, которые getGPS создаёт для элементов исходного массива.
// Такие ссылки показываются стандартными GPS-иконками, а не текстовыми подписями.
function isGpsArrayLabel(label) {
    return /^(?:GPS|O-GPS)(?: \d+)?$/.test(String(label));
}

// Трансляции события: gps, иначе o_gps; к ним добавляются трансляции Livelox и RouteGadget.
// gps/o_gps могут быть одиночным значением, объектом «подпись: ссылка/ID» или массивом.
function getGPS(m) {
    let gps = normalizeGpsValue(m.gps);
    if (gps === null) {
        const oGps = normalizeGpsValue(m.o_gps);
        if (oGps !== null) {
            const toOGpsUrl = id => {
                const value = String(id);
                return /^https?:\/\//i.test(value) ? value : O_GPS_CENTER_PREFIX + value;
            };
            if (isObject(oGps)) {
                gps = Object.fromEntries(Object.entries(oGps)
                    .map(([label, id]) => [label, toOGpsUrl(id)]));
            } else if (Array.isArray(oGps)) {
                gps = oGps.map(toOGpsUrl);
            } else {
                gps = toOGpsUrl(oGps);
            }
        }
    }

    const extra = [
        hasGpsValue(m.livelox) ? getLiveloxLinks(m) : {},
        hasGpsValue(m.rg) ? getRouteGadgetLinks(m) : {}
    ];
    if (extra.some(e => Object.keys(e).length)) {
        let result;
        if (gps === null) {
            result = {};
        } else if (isObject(gps)) {
            result = {...gps};
        } else if (Array.isArray(gps)) {
            const label = hasGpsValue(m.gps) ? 'GPS' : 'O-GPS';
            result = Object.fromEntries(gps.map((url, i) => [
                label + (gps.length > 1 ? ' ' + (i + 1) : ''),
                url
            ]));
        } else {
            result = {[hasGpsValue(m.gps) ? 'GPS' : 'O-GPS']: gps};
        }
        for (const [k, v] of extra.flatMap(e => Object.entries(e))) {
            // одинаковые подписи (например, 'день 1' у o_gps и rg) допустимы: ключ делается
            // уникальным невидимым символом, чтобы ссылка не затёрла уже добавленную
            let key = k;
            while (key in result) {
                key += '\u200B';
            }
            result[key] = v;
        }
        const values = Object.values(result);
        gps = values.length === 0 ? null : values.length === 1 ? values[0] : result;
    }
    return gps;
}

// Общая проверка для фильтра «GPS»: пустые массивы и объекты не считаются трансляцией.
function hasGpsValue(value) {
    if (Array.isArray(value)) {
        return value.some(hasGpsItem);
    }
    if (isObject(value)) {
        return Object.values(value).some(hasGpsItem);
    }
    return hasGpsItem(value);
}

// Человекочитаемое представление GPS-значений для CSV.
function gpsToText(value) {
    if (Array.isArray(value)) {
        return value.map(String).join(', ');
    }
    if (isObject(value)) {
        return Object.entries(value).map(([label, url]) => label + ': ' + url).join(', ');
    }
    return value == null ? '' : String(value);
}
function buildGpsLinksForEvents(events, img) {
    let result = '';
    const gpsList = [];
    for (const e of events) {
        const gps = getGPS(e);
        if (gps) {
            gpsList.push(gps);
        }
    }
    for (const gps of gpsList) {
        if (isObject(gps)) {
            const entries = Object.entries(gps);
            for (const [index, [key, value]] of entries.entries()) {
                if (isGpsArrayLabel(key)) {
                    result += ' ' + buildLink(value, '<img class="media-link" src="./images/' + gpsIcon(value, img) + '" alt="GPS">');
                } else {
                    result += ` <a href="${value}">${key}</a>`;
                }
                if (index < entries.length - 1) {
                    result += ',';
                }
            }
        } else if (Array.isArray(gps)) {
            for (const [index, url] of gps.entries()) {
                result += ' ' + buildLink(url, '<img class="media-link" src="./images/' + gpsIcon(url, img) + '" alt="GPS">');
                if (index < gps.length - 1) {
                    result += ',';
                }
            }
        } else {
            result += ' ' + buildLink(gps, '<img class="media-link" src="./images/' + gpsIcon(gps, img) + '" alt="GPS">');
        }
    }
    return result;
}

function buildGpsLinks(m, img, calendar, inline) {
    let result = '';
    let gps = getGPS(m);
    if (!gps && calendar) {
        gps = getGPS(calendar);
    }
    if (gps) {
        const image = url => `<img class="${inline ? 'sheet-icon' : 'media-link'}" src="./images/${gpsIcon(url, img)}" alt="GPS">`;
        if (isObject(gps)) {
            const entries = Object.entries(gps);
            for (const [index, [key, value]] of entries.entries()) {
                result += ` <a href="${value}" title="${key}">${image(value)}</a>`;
                if (index < entries.length - 1) {
                    result += ',';
                }
            }
        } else if (Array.isArray(gps)) {
            for (const [index, url] of gps.entries()) {
                result += ' ' + buildLink(url, image(url));
                if (index < gps.length - 1) {
                    result += ',';
                }
            }
        } else {
            result += buildLink(gps, image(gps));
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

function authorLink(author, isGlobalTable, isSheetLink) {
    let pathname = location.pathname;
    if (isGlobalTable) {
        pathname = pathname.substring(0, pathname.lastIndexOf('/') + 1) + (isSheetLink ? 'sheet-' : '') + 'all.html';
    } else {
        if (pathname.includes('charts-')) {
            if (isSheetLink) {
                pathname = pathname.replace('charts-','sheet-');
            } else {
                pathname = pathname.split('charts-').join('');
            }
        }
    }
    return location.origin + pathname + '?author=' + author;
}

// Запас вокруг экрана (доля его размера): карты в этой полосе держатся в DOM,
// чтобы при панораме края не мигали. Используется в loadMaps()/syncMaps().
const VIEW_PAD = 0.3;

// Сколько показываемых карт syncMaps() убрал из DOM как находящиеся вне экрана.
// Нужен счётчику: «всего» = слои на карте + отсечённые.
let culledMapsCount = 0;

// Габарит повёрнутой карты по всем четырём углам (LatLngBounds), кэш в m._llb.
// Если слой уже построен — берём его текущие углы (в режиме редактирования они
// меняются, тогда кэш сбрасывается в repositionImage()); иначе — m.bounds.
function mapLatLngBounds(m) {
    if (m._llb === undefined) {
        let p;
        if (m.layer && m.layer.getTopLeft) {
            p = [m.layer.getTopLeft(), m.layer.getTopRight(), m.layer.getBottomLeft()];
        } else {
            p = (m.bounds || []).map(x => L.latLng(x));
        }
        if (p.length === 0) {
            m._llb = null;
        } else if (p.length < 3) {
            m._llb = L.latLngBounds(p);
        } else {
            m._llb = L.latLngBounds([p[0], p[1], p[2],
                L.latLng(p[1].lat + p[2].lat - p[0].lat, p[1].lng + p[2].lng - p[0].lng)]);
        }
    }
    return m._llb;
}

function recalculateLayers() {
    let total = culledMapsCount;
    let visible = 0;
    let viewBounds = map.getBounds();
    map.eachLayer(function (layer) {
        if (layer instanceof L.ImageOverlay || layer._gpx || layer._omOutline) {
            if (layer._gpx) {
                layer = layer.getLayers()[0];
            }
            // картинка, открытая кликом на мелком масштабе, уже посчитана своим полигоном
            if (layer instanceof L.ImageOverlay && layer.map && layer.map.outline && layer.map.outline._map) {
                return;
            }
            if (layer) {
                total++;
                if (checkLayerInFrame(viewBounds, layer)) {
                    visible++;
                }
            }
        }
    });
    let text = String(total === visible ? total : visible + '/' + total);
    let counterEl = document.getElementById("counter");
    if (counterEl && counterEl.textContent !== text) {
        counterEl.textContent = text;
    }
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

// Пересечение габаритов, а не «хоть один угол внутри рамки»: карта, которая
// целиком накрывает экран или проходит через него полосой, тоже считается.
function checkLayerInFrame(frameBounds, layer) {
    if (layer instanceof L.ImageOverlay.Rotated) {
        let b;
        if (layer.map) {
            b = mapLatLngBounds(layer.map);
        } else {
            const tl = layer.getTopLeft(), tr = layer.getTopRight(), bl = layer.getBottomLeft();
            b = L.latLngBounds([tl, tr, bl, L.latLng(tr.lat + bl.lat - tl.lat, tr.lng + bl.lng - tl.lng)]);
        }
        return !!b && frameBounds.intersects(b);
    }
    return frameBounds.intersects(layer.getBounds());
}

function inFrame(frameBounds, coords) {
    for (const c of coords) {
        if (frameBounds.contains(c)) {
            return true;
        }
    }
    return false;
}

function getMapName(m) {
    const url = getMapUrl(m);
    return url ? extractFileName(url) : null;
}

function getMapForName(fileName) {
    if (!fileName) {
        return null;
    }
    // Не все страницы содержат каталог карт oMaps (например, лыжный календарь).
    // В этом случае просто возвращаем null, а не прерываем построение таблицы.
    const maps = (typeof oMaps !== 'undefined' && Array.isArray(oMaps)) ? oMaps : [];
    for (const m of maps) {
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
    let textYear = Number(text);
    if (textYear) {
        for (const m of oMaps) {
            let y = year(m);
            if (y && y === textYear) {
                results.push(m);
            }
        }
    } else {
        for (const m of oMaps) {
            if (unifyString(m.name).includes(text)) {
                results.push(m);
            }
        }
        for (const m of oMaps) {
            if (!results.includes(m) && m.info && unifyString(m.info).includes(text)) {
                results.push(m);
            }
        }
        for (const m of oMaps) {
            if (!results.includes(m) && m.url.toLocaleLowerCase().includes(text)) {
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
            if (unifyString(m.name).includes(title) && (!y || y === year(m))) {
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
            if (y === year(m)) {
                return m;
            }
        }
    } else {
        for (const m of oMaps) {
            for (const m of oMaps) {
                let sameName = unifyString(m.name).includes(text);
                let sameInfo = m.info && unifyString(m.info).includes(text);
                let sameUrl = m.url.toLocaleLowerCase().includes(text);
                if ((sameName || sameInfo || sameUrl)) {
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
                hideMapOutline(layer);
            }
        } else if (layer._url && layer._url.includes(url)) {
            layer.removeFrom(map);
            layer.hiddenMap = true;
            hideMapOutline(layer);
        }
    });
}

// Убрать и полигон мелкого масштаба (см. ensureOutline() в main.js);
// из outlineGroup его затем исключит syncMaps() по флагу hiddenMap
function hideMapOutline(layer) {
    if (layer.map && layer.map.outline) {
        layer.map.outline.remove();
    }
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
        if (m.map && m.map.outline) {
            m.map.outline.setStyle({fillOpacity: opacity}); // полигон мелкого масштаба
        }
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
                CSV_SPRTR + link(m.link) + CSV_SPRTR + safe(m.info) + CSV_SPRTR + start(m.start) + CSV_SPRTR + safe(gpsToText(getGPS(m))) + CSV_SPRTR + m.type;
        }
    }
    console.log(result);
}
function start(s) {
    if (s === undefined) {
        return '';
    }
    const keys = Array.isArray(s) ? s : [s];
    return keys.map(k => starts[k]?.short).filter(Boolean).join(', ');
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

function getMapUrl(m) {
    return m.url ?? getFirstLink(m);
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

// Слои-группы карт — пустые L.layerGroup: сами картинки в них не кладутся,
// у карты лишь запоминаются id групп, а показ решает syncMaps() в main.js.
// L.stamp() выдаёт id и группе, которой ещё нет на карте и в контроле слоёв.

// Группа-«тип» (город, лес, рогейн, необычные, старт...): карта видна,
// если включена хотя бы одна из её групп-типов.
function pushGroupToMap(m, group) {
    const id = L.stamp(group).toString();
    if (!m.groups.includes(id)) {
        m.groups.push(id);
    }
}

// Группа-тип, не зависящая от годов (рогейн, необычные): карта видна,
// если такая группа включена, какие бы годы ни были отмечены.
function pushAgeFreeGroupToMap(m, group) {
    if (!m.ageFreeGroups) {
        m.ageFreeGroups = [];
    }
    const id = L.stamp(group).toString();
    if (!m.ageFreeGroups.includes(id)) {
        m.ageFreeGroups.push(id);
    }
}

// Группа-«возраст» (десятилетие, год): если такие группы у карты есть,
// должна быть включена хотя бы одна из них.
function pushAgeGroupToMap(m, group) {
    if (!m.ageGroups) {
        m.ageGroups = [];
    }
    const id = L.stamp(group).toString();
    if (!m.ageGroups.includes(id)) {
        m.ageGroups.push(id);
    }
}

// Единое правило видимости для карт любого типа:
// включена группа, не зависящая от годов (рогейн, необычные), —
// или включены группа-тип и (если есть) группа-возраст
function isMapInActiveLayers(m, activeIds) {
    if (m.ageFreeGroups && m.ageFreeGroups.some(id => activeIds.has(id))) {
        return true;
    }
    const byType = m.groups.some(id => activeIds.has(id));
    const byAge = !m.ageGroups || m.ageGroups.length === 0 || m.ageGroups.some(id => activeIds.has(id));
    return byType && byAge;
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

// Имена карт, на которые ссылаются события календаря старта. По умолчанию
// события - глобальный oEvents (если страница его загрузила); результат
// кешируется для каждой пары «массив событий + старт».
const startEventMapNamesCache = new WeakMap();
function startEventMapNames(start, events) {
    if (events === undefined) {
        events = typeof oEvents !== 'undefined' ? oEvents : [];
    }
    let byStart = startEventMapNamesCache.get(events);
    if (!byStart) {
        byStart = new Map();
        startEventMapNamesCache.set(events, byStart);
    }
    let names = byStart.get(start);
    if (!names) {
        names = new Set();
        for (const e of events) {
            if (e.map && checkStartMap(start, e)) {
                (Array.isArray(e.map) ? e.map : [e.map]).forEach(name => names.add(name));
            }
        }
        byStart.set(start, names);
    }
    return names;
}

// Карта относится к старту: помечена им (start) или на неё ссылается событие
// календаря этого старта, даже если сама карта стартом не помечена.
// Используется в main.js (starts.html?start=X и др.), start.html, start-details.html.
function isStartMap(start, m, events) {
    return checkStartMap(start, m) || startEventMapNames(start, events).has(getMapName(m));
}

// Карты старта для start.html / start-details.html: у которых main.js построил
// слой, плюс карты из событий старта (слой у них может и не построиться,
// например без привязки к местности).
function filterStartMaps(maps, start, events) {
    const referenced = startEventMapNames(start, events);
    return maps.filter(m => m.layer !== undefined || referenced.has(getMapName(m)));
}

function getMapStarts(m) {
    let start = '';
    if (Array.isArray(m.start)) {
        for (const s of m.start) {
            if (starts[s]?.name) {
                if (start) {
                    start += ', ';
                }
                start += starts[s].name;
            }
        }
    } else {
        if (starts[m.start]?.name) {
            start = starts[m.start].name;
        }
    }
    if (start) {
        start += '. ';
    }
    return start;
}

function hasOwner(m, owner) {
    return getOwners(m).includes(owner);
}

function getOwners(m) {
    const owners = [];
    if (m.owner) {
        pushItems(owners, m.owner);
    }
    if (m.start) {
        const strts = [];
        pushItems(strts, m.start);
        for (const s of strts) {
            pushItems(owners, starts[s].owner);
        }
    }
    return owners;
}

function getOrderArea(m) {
    return m.order ? m.order.area : m.area;
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

function isMapsOnStorePage() {
    return typeof mapsOnStore != 'undefined' && mapsOnStore;
}

function isOrdersPage() {
    return typeof ordersPage != 'undefined' && ordersPage;
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
        if (START_YEAR_PARAM) {
            const sy = startYear(evt);
            if (START_YEAR_PARAM === 'EARLY') {
                if (sy >= 2004) return false;
            } else
            if ((START_YEAR_PARAM !== 'ALL') && (sy.toString() !== START_YEAR_PARAM)) {
                return false;
            }
        }
        if (onlyMajor && !isMajor(evt)) {
            return false;
        }
        if (ROGAINE_EVENTS_CALENDAR_PARAM_VALUE === CALENDAR_PARAM) {
            return isEventLikeRogaine(evt);
        }
        if (ORIENT_EVENTS_CALENDAR_PARAM_VALUE === CALENDAR_PARAM) {
            const type = getEventType(evt);
            return type.includes(ORIENT_EVENTS_CALENDAR_PARAM_VALUE) || type.includes('INDOOR');
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

function findEvents(evtIDs) {
    const res = [];
    if (Array.isArray(evtIDs)) {
        for (const e of evtIDs) {
            const evt = findEvent(e);
            if (evt) {
                res.push(evt);
            }
        }
    } else {
        const evt = findEvent(evtIDs);
        if (evt) {
            res.push(evt);
        }
    }
    return res;
}

function findEvent(evtID) {
    return evtID ? oEvents.find(e => e.id === evtID) : undefined;
}

const EVENTS_FOR_MAPS_CACHE = {};

function sortEvents(events) {
    events.sort((b, a) => {
        let compare = dateForCompare(a) - dateForCompare(b);
        if (compare === 0 && a.id && b.id) {
            compare = a.id.localeCompare(b.id);
        }
        return compare
    });
}

function findEventsForMap(m, withMap, start) {
    let result = [];
    const mapName = getMapName(m);
    // Ключ кэша учитывает фильтр по старту: иначе отфильтрованный список
    // подменял бы полный для той же карты.
    const cacheKey = mapName + '|' + (start ?? '');
    if (EVENTS_FOR_MAPS_CACHE[cacheKey]) {
        result = [...EVENTS_FOR_MAPS_CACHE[cacheKey]];
    } else {
        if (typeof oEvents !== 'undefined') {
            result = mapName ? oEvents.filter(e => {
                if (start && !checkStartMap(start, e)) { // точное совпадение кода, не подстрока
                    return false;
                }
                if (e.map) {
                    if (Array.isArray(e.map)) {
                        for (const em of e.map) {
                            if (em.startsWith(mapName)) return true;
                        }
                        return false;
                    }
                    return e.map.startsWith(mapName);
                } else {
                    return false;
                }
            }) : [];
            EVENTS_FOR_MAPS_CACHE[cacheKey] = [...result];
        }
    }
    sortEvents(result);
    if (withMap) {
        result.unshift(m); // сама карта - туда же
    }
    return result;
}

function isEventLikeRogaine(evt) {
    return isRogaine(evt) || (evt.type && evt.type.includes(MULTI_EVENTS_CALENDAR_PARAM_VALUE)) || evt.start === 'MB';
}

// Событие календаря без type считается ориентированием.
function getEventType(evt) {
    return evt.type ?? ORIENT_EVENTS_CALENDAR_PARAM_VALUE;
}

function isEventOther(evt) {
    const type = getEventType(evt);
    return !type.includes(ORIENT_EVENTS_CALENDAR_PARAM_VALUE) &&
        !type.includes(VELO_EVENTS_CALENDAR_PARAM_VALUE) &&
        !type.includes('INDOOR') &&
        !type.includes(SKI_EVENTS_CALENDAR_PARAM_VALUE) && !isRogaine(evt);
}

function validateEvent(evt) {
    if (CALENDAR_PARAM) {
        const currentDate = new Date(evt.date);
        const type = getEventType(evt);
        switch (CALENDAR_PARAM) {
            case ORIENT_EVENTS_CALENDAR_PARAM_VALUE:
                if (!type.includes(ORIENT_EVENTS_CALENDAR_PARAM_VALUE) && !type.includes('INDOOR')) {
                    return false;
                }
                break;
            case SKI_EVENTS_CALENDAR_PARAM_VALUE:
                if (!type.includes(SKI_EVENTS_CALENDAR_PARAM_VALUE)) {
                    return false;
                }
                break;
            case VELO_EVENTS_CALENDAR_PARAM_VALUE:
                if (!type.includes(VELO_EVENTS_CALENDAR_PARAM_VALUE)) {
                    return false;
                }
                break;
            case ROGAINE_EVENTS_CALENDAR_PARAM_VALUE:
                if (!isEventLikeRogaine(evt)) {
                    return false;
                }
                break;
            case GPS_EVENTS_CALENDAR_PARAM_VALUE:
                if (!hasGpsValue(getGPS(evt))) {
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
    if (START_NAME_PARAM && (!evt.start || (START_NAME_PARAM !== 'major' && !checkStartMap(START_NAME_PARAM, evt)) || (START_NAME_PARAM === 'major' && !isMajor(evt)))) {
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

function buildEventDate(evt, withYear, withoutWeekDays) {
    const date = new Date(evt.date);
    let day = date.getDate();
    let month = MONTHS_SHORT[date.getMonth()];
    //const year = date.getFullYear();
    let dayWeek = WEAK_DAYS_SHORT[date.getDay()];

    let result = `${day} ${month}`;
    if (!withoutWeekDays) {
        result += ` (${dayWeek})`;
    }
    if (evt.endDate) {
        const endDate = new Date(evt.endDate);
        day = endDate.getDate();
        month = MONTHS_SHORT[endDate.getMonth()];
        dayWeek = WEAK_DAYS_SHORT[endDate.getDay()];
        result += ` - ${day} ${month}`
        if (!withoutWeekDays) {
            result += ` (${dayWeek})`;
        }
    }
    if (withYear) {
        result += ` <sup class="cal-year">${date.getFullYear()}</sup>`;
    }
    return result;
}

function logoList(m, events) { // for map, event or track
    let logo = [];
    logoOne(logo, m);
    if (events) {
        for (const e of events) {
            if (e !== m) {
                logoOne(logo, e);
            }
        }
    }
    return logo;
}

function logoOne(logo, m) {
    pushLogo(logo, m.logo);
    if (!isNull(starts) && m.start) {
        if (Array.isArray(m.start)) {
            for (const s of m.start) {
                const start = starts[s];
                if (start) {
                    pushLogo(logo, start.logo);
                    if (start.region) {
                        pushLogo(logo, regions[start.region]?.logo);
                    }
                }
            }
        } else {
            const start = starts[m.start];
            if (start) {
                pushLogo(logo, start.logo);
                if (start.region) {
                    pushLogo(logo, regions[start.region]?.logo);
                }
            }
        }
    }
    if (m.owner) {
        if (Array.isArray(m.owner)) {
            m.owner.forEach(o => pushLogo(logo, owners[o].logo));
        } else if (owners[m.owner]) {
            pushLogo(logo, owners[m.owner].logo);
        }
    }
    if (m.author) {
        if (Array.isArray(m.author)) {
            m.author.forEach(o => pushLogo(logo, authors[o].logo));
        } else if (authors[m.author]) {
            pushLogo(logo, authors[m.author].logo);
        }
    }
    if (m.region) {
        pushLogo(logo, regions[m.region]?.logo);
    }
}

function pushLogo(logo, l) {
    if (l && !logo.includes(l)) {
        logo.push(l);
    }
}

function buildOSiteInfo(events) {
    let result = '';
    const oSites = [];
    if (events && !Array.isArray(events)) {
        events = [events];
    }
    for (const e of events) {
        if (e.o_site) oSites.push(O_SITE_ADDRESS_PREFIX + e.o_site);
    }
    if (oSites.length > 0) {
        result = ` ${buildLinksWithLabel(oSites, '<img src="./images/o-site.gif" alt="O-Site" title="O-Site" class="sheet-icon">')}`;
    }
    return result;
}

// withEventPage (календарь): название ведёт на страницу события (event.html),
// а ссылка на сайт события переезжает на иконку o-site.gif сразу за названием.
function buildEventStart(evt, withoutLogo, justTitle, withEventPage) {
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
    // сайт события: своя ссылка, страница на O-Site или сайт старта.
    let siteLink = null;
    if (evt.link) {
        siteLink = evt.link;
    } else if (evt.o_site) {
        siteLink = O_SITE_ADDRESS_PREFIX + evt.o_site;
    } else {
        siteLink = eventStartLink(evt);
    }
    if (withEventPage && evt.id) {
        result += buildLink(eventPageUrl(evt), name, 'Страница события');
        result += buildEventSiteIcons(evt);
    } else if (siteLink) {
        result += buildLink(siteLink, name);
    } else {
        result += name;
    }
    if (!justTitle) {
        if (evt.price === -1) {
            result += ' (закрытый)'
        }
        if (evt.reg) {
            result += ' <span title="Регистрация">' + buildEventReg(evt) + '</span>';
            // окончание приёма заявок - бейджем после регистрации (только в календаре)
            if (withEventPage) {
                result += buildEventEndReg(evt);
            }
        }
        // информационный бюллетень - иконкой после регистрации (только в календаре)
        if (withEventPage && evt.bulletin) {
            result += ' ' + buildEventBulletin(evt);
        }
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

// Сайт старта, к которому относится событие (первый из start), или null.
function eventStartLink(evt) {
    let st = evt.start;
    if (st && Array.isArray(st)) {
        st = st[0];
    }
    return (st && starts[st]?.link) ? starts[st].link : null;
}

// Сервис ссылки из SERVICES (первое совпадение по адресу) или undefined.
function findLinkService(url) {
    const u = String(url ?? '');
    return SERVICES.find(s => s.re.test(u));
}

// Иконка для ссылки на обычную страницу сервиса (сайт события, кнопки «Сайт»
// на event.html): siteImg сервиса, иначе его img (если она не только для
// особого контекста, imgOnlyFor), иначе fallback.
function linkSiteImg(url, fallback) {
    const service = findLinkService(url);
    return service?.siteImg ?? ((service?.img && !service.imgOnlyFor) ? service.img : fallback);
}

// Ссылки с иконкой и подписью (event.html, poi.html; раньше - в event.js).
// Расширения адресов, по которым ссылка считается файлом.
const LINK_FILE_EXTS = ['pdf', 'zip', 'rar', 'xls', 'xlsx', 'doc', 'docx', 'jpg', 'jpeg', 'png', 'gif', 'webp', 'ocd'];

// Описание ссылки для linkChipHtml(): {href, label, img | emoji}. Сервис из SERVICES -
// его подпись и иконка, файл - «Файл PDF», прочее - хост. context: 'video' /
// 'photo' / 'reg' / 'res' (иконки фото/видео, e-mail в регистрации, тип файла в результатах).
function describeLinkItem(url, context) {
    const u = String(url);
    // e-mail в регистрации - как buildOneEventReg()
    if (u.startsWith('mailto:') || (context === 'reg' && u.includes('@'))) {
        const mail = u.replace(/^mailto:/, '');
        return { href: 'mailto:' + mail, label: mail, emoji: '✉️' };
    }
    const service = findLinkService(u);
    const ext = (u.split('?')[0].match(/\.([a-z0-9]+)$/i) || [])[1]?.toLowerCase();
    const fileExt = LINK_FILE_EXTS.includes(ext) ? ext : null;
    if (service) {
        let label = service.label;
        if (fileExt && context === 'res') label += ' (' + fileExt.toUpperCase() + ')';
        let img = (!service.imgOnlyFor || service.imgOnlyFor === context) ? service.img : undefined;
        if (!img && context === 'photo') img = 'images/photo-camera.png';
        if (!img && context === 'video') img = 'images/video-camera.png';
        return { href: u, label: label, img: img };
    }
    if (fileExt || !/^https?:/i.test(u)) {
        return {
            href: u,
            label: fileExt ? 'Файл ' + fileExt.toUpperCase() : 'Ссылка',
            img: 'images/' + downloadIconExt(u) + '-file.png'
        };
    }
    const host = urlHost(u);
    const img = context === 'photo' ? 'images/photo-camera.png'
        : context === 'video' ? 'images/video-camera.png' : 'images/url-file.png';
    return { href: u, label: host, img: img };
}

// Ссылка с иконкой, как в календаре и на start-details: <img class="sheet-icon"> + подпись.
// d: {href, label, img | emoji, title}; cls - классы ссылки (например кнопки Bootstrap).
function linkChipHtml(d, cls) {
    const icon = d.img ? `<img src="${htmlEscape(d.img)}" alt="" class="sheet-icon" onerror="this.remove()"> ` : (d.emoji ? d.emoji + ' ' : '');
    const title = d.title ? ` title="${htmlEscape(d.title)}"` : '';
    const klass = cls ? ` class="${cls}"` : '';
    const rel = isNoReferrerUrl(d.href) ? 'noopener noreferrer' : 'noopener';
    return `<a${klass} href="${htmlEscape(d.href)}" target="_blank" rel="${rel}"${title}>${icon}${htmlEscape(d.label)}</a>`;
}

// Список ссылок через запятую; одинаковые подписи нумеруются («YouTube 2»).
function linkChipsHtml(urls, context) {
    const seen = {};
    return asList(urls).map(url => {
        const d = describeLinkItem(url, context);
        seen[d.label] = (seen[d.label] ?? 0) + 1;
        if (seen[d.label] > 1) d.label += ' ' + seen[d.label];
        return linkChipHtml(d);
    }).join(', ');
}

// Иконки на все ссылки события (календарь): сначала страница на O-Site
// (o_site), затем ссылки из link (строка или массив). Если нет ни того,
// ни другого - ссылка на сайт старта. Ссылка известного сервиса (SERVICES)
// получает его иконку и подпись, остальные - o-site.gif.
function buildEventSiteIcons(evt) {
    const urls = [];
    if (evt.o_site) {
        urls.push(O_SITE_ADDRESS_PREFIX + evt.o_site);
    }
    for (const l of [].concat(evt.link ?? [])) {
        if (l) urls.push(l);
    }
    let defaultTitle = 'Страница сайта события';
    if (urls.length === 0) {
        const startLink = eventStartLink(evt);
        if (startLink) urls.push(startLink);
        defaultTitle = 'Сайт старта';
    }
    return urls.map(url => {
        const service = findLinkService(url);
        const img = linkSiteImg(url, 'images/o-site.gif');
        const title = service ? service.label : defaultTitle;
        return ' ' + buildLink(url, `<img src="./${img}" alt="${title}" title="${title}" class="sheet-icon" />`, title);
    }).join('');
}

// Информационный бюллетень события (поле bulletin: ссылка или массив ссылок) -
// иконками images/info.png. Используется в календаре.
function buildEventBulletin(evt) {
    return [].concat(evt.bulletin ?? []).map(b =>
        buildLink(b, '<img src="./images/info.png" alt="Бюллетень" title="Информационный бюллетень" class="sheet-icon" />', 'Информационный бюллетень')
    ).join(' ');
}

function buildEventReg(evt) {
    let reg = '';
    if (evt.reg) {
        if (Array.isArray(evt.reg)) {
            for (const r of evt.reg) {
                reg += ' ' + buildOneEventReg(r);
            }
        } else {
            reg = buildOneEventReg(evt.reg);
        }
    }
    return reg;
}

function buildOneEventReg(reg) {
    if (reg.includes('@')) {
        return buildLink('mailto:'+reg, '✉️');
    } else if (reg.includes('orgeo')) {
        return buildLink(reg, 'Orgeo');
    } else if (reg.includes('o-reg')) {
        return buildLink(reg, 'O-Reg');
    } else if (reg.includes('vk.com') || reg.includes('vk.ru')) {
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
    } else if (reg.includes('t.me')) {
        return buildLink(reg, 'Telegram');
    }
    return buildLink(reg, '<img src="./images/url-file.png" alt="Рега" />');
}

// --- Окончание приёма заявок (поле endReg) ---------------------------------
// endReg: 'YYYY-MM-DD HH:mm' или 'YYYY-MM-DD' (= до конца этого дня).
// Время московское - как на orgeo / o-reg / sportident / o-time; момент
// окончания считается по МСК, в каком бы поясе ни был посетитель.
// Заполняется скриптом tools/fill_end_reg.py.
const END_REG_SOON_DAYS = 3;      // «скоро»: до окончания меньше N суток
const END_REG_URGENT_HOURS = 24;  // «срочно»: до окончания меньше N часов
const END_REG_RE = /^(\d{4})-(\d{2})-(\d{2})(?: (\d{2}):(\d{2}))?$/;

// Разбор endReg: { deadline: Date, day, month (0-11), year, time: 'HH:mm' | null } или null.
function parseEndReg(endReg) {
    const m = END_REG_RE.exec(endReg ?? '');
    if (!m) {
        if (endReg) console.warn('endReg не в формате YYYY-MM-DD[ HH:mm]: ' + endReg);
        return null;
    }
    const [y, mo, d] = [+m[1], +m[2], +m[3]];
    const deadline = m[4] === undefined
        ? new Date(Date.UTC(y, mo - 1, d + 1, -3))        // до конца дня = 00:00 МСК следующего
        : new Date(Date.UTC(y, mo - 1, d, +m[4] - 3, +m[5]));
    return { deadline: deadline, day: d, month: mo - 1, year: y, time: m[4] === undefined ? null : m[4] + ':' + m[5] };
}

// Состояние приёма заявок события: null, если endReg нет, событие отменено
// или уже прошло (как disabled-строки календаря); иначе
// { ...parseEndReg, left: мс до окончания, level: 'open' | 'soon' | 'urgent' | 'closed' }.
function endRegState(evt) {
    if (!evt.endReg || evt.cancelled) return null;
    if (isOutdated(new Date(evt.endDate ?? evt.date))) return null;
    const r = parseEndReg(evt.endReg);
    if (!r) return null;
    const left = r.deadline - new Date();
    r.left = left;
    r.level = left <= 0 ? 'closed'
        : left < END_REG_URGENT_HOURS * 3600000 ? 'urgent'
        : left < END_REG_SOON_DAYS * DAY_TIME_RANGE ? 'soon' : 'open';
    return r;
}

// «осталось 5 ч», «остался 31 ч», «осталось 3 дня».
function endRegLeftText(left) {
    const minutes = Math.max(1, Math.floor(left / 60000));
    if (minutes < 60) return `осталось ${minutes} мин`;
    const hours = Math.floor(minutes / 60);
    if (hours < 48) return `${pluralRu(hours, 'остался', 'осталось', 'осталось')} ${hours} ч`;
    const days = Math.floor(hours / 24);
    return `${pluralRu(days, 'остался', 'осталось', 'осталось')} ${days} ${pluralRu(days, 'день', 'дня', 'дней')}`;
}

// Бейдж окончания приёма заявок для календаря (после ссылок регистрации).
// Внешний вид - бейджи Bootstrap + .end-reg в css/theme.css.
function buildEventEndReg(evt) {
    const st = endRegState(evt);
    if (!st) return '';
    // Приём заявок заканчивается сегодня (по МСК) - только время, без даты.
    const todayMsk = new Date(Date.now() + 3 * 3600000).toISOString().substring(0, 10);
    const isToday = evt.endReg.substring(0, 10) === todayMsk;
    const when = isToday
        ? (st.time ? st.time : 'конца дня')
        : `${st.day} ${MONTHS_SHORT[st.month].toLowerCase()}` + (st.time ? ' ' + st.time : '');
    const full = `${String(st.day).padStart(2, '0')}.${String(st.month + 1).padStart(2, '0')}.${st.year}` +
        (st.time ? ' ' + st.time + ' МСК' : ' включительно');
    let cls, text, title;
    if (st.level === 'closed') {
        cls = 'bg-secondary';
        text = 'заявка закрыта';
        title = 'Приём заявок закончился ' + full;
    } else {
        title = 'Приём заявок до ' + full + ' (' + endRegLeftText(st.left) + ')';
        if (st.level === 'urgent') {
            cls = 'bg-danger end-reg-urgent';
            text = `🔥 до ${when} · ${endRegLeftText(st.left).replace(/^\S+ /, '')}`;
        } else if (st.level === 'soon') {
            cls = 'bg-warning text-dark';
            text = `⏳ до ${when}`;
        } else {
            cls = 'bg-light text-dark border';
            text = `до ${when}`;
        }
    }
    return ` <span class="badge end-reg ${cls}" title="${title}">${text}</span>`;
}

function buildCouches(evt) {
    let res = '';
    if (evt.couches) {
        let couches = '<ul>';
        for (const c of evt.couches) {
            couches += `<li>${c}</li>`;
        }
        couches += '</ul>'
        res += couches;
    }
    return res;
}

// Одна ссылка на результаты (title не задан) или сплиты (title 'Сплиты'): известный
// сервис - его названием, остальное - значком типа файла.
function buildOneEventResult(r, title) {
    if (r.includes('orgeo')) {
        return buildLink(r, 'Orgeo', title);
    } else if (r.includes('o-site')) {
        return buildLink(r, 'O-Site', title);
    } else if (r.includes('o-time')) {
        return buildLink(r, 'O-Time', title);
    } else if (r.includes('multsport')) {
        return buildLink(r, 'Multsport', title);
    } else if (r.includes('sportident')) {
        return buildLink(r, 'Sportident', title);
    } else if (r.includes('vk.com') || r.includes('vk.ru')) {
        return buildLink(r, 'VK', title);
    } else if (r.includes('reskeep')) {
        return buildLink(r, 'Reskeep', title);
    } else if (r.includes('t.me')) {
        return buildLink(r, 'Telegram', title);
    }
    const label = title ?? 'Результаты';
    return buildLink(r, `<img src="./images/${downloadIconExt(r)}-file.png" alt="${label}" title="${label}" class="sheet-icon" />`);
}

function buildEventResults(evt) {
    let res = '';
    for (const r of [].concat(evt.res ?? [])) {
        res += buildOneEventResult(r);
    }
    // сплиты (поле split: ссылка или массив) - любые сервисы и файлы, не только O-Site
    for (const sp of [].concat(evt.split ?? [])) {
        res += ' ' + buildOneEventResult(sp, 'Сплиты');
    }
    if (evt.reskeep) {
        let reskeep = evt.reskeep;
        if (!Array.isArray(evt.reskeep)) {
            reskeep = [evt.reskeep];
        }
        reskeep = reskeep.map(r => 'https://reskeep.ru/event/get?id=' + r);
        res += buildLink(reskeep, ` <img src="./images/r-k.gif" alt="Reskeep" class="sheet-icon" />`, 'Анализ сплитов', true);
    }
    return res;
}

// Внешние файлы карт события - значения поля maps с адресом http/https (изображения
// или PDF в интернете). Прочие значения maps - идентификаторы карт O-Maps, здесь не участвуют.
function getEventExternalMaps(evt) {
    return [].concat(evt?.maps ?? []); // .filter(isExternalUrl)
}

function isExternalUrl(value) {
    return /^https?:\/\//.test(String(value));
}

// Хосты, отдающие картинки только после капчи (Cloudflare): встроить превью с них нельзя,
// посетитель увидит битое изображение. Такие файлы показываем значком, ссылка - прямо на файл.
const NO_PREVIEW_MAP_HOSTS = ['omaps.worldofo.com'];

function isNoPreviewHost(url) {
    const m = String(url).match(/^https?:\/\/([^/?#]+)/i);
    return !!m && NO_PREVIEW_MAP_HOSTS.includes(m[1].toLowerCase());
}

// Изображения без расширения в адресе: карта трансляции GPSSeuranta (…tulospalvelu.fi/gps/<трансляция>/map,
// JPEG или PNG - сервер не указывает тип).
const EXTENSIONLESS_IMAGE_URLS = [/^https?:\/\/(www\.)?tulospalvelu\.fi\/gps\/[^/]+\/map$/i];

// Файл - изображение, которое можно показать превью (а не PDF и не файл с хоста за капчей).
function isImageUrl(url) {
    const path = String(url).split(/[?#]/)[0];
    return (/\.(gif|jpe?g|png|webp|svg)$/i.test(path) || EXTENSIONLESS_IMAGE_URLS.some(re => re.test(path)))
        && !isNoPreviewHost(url);
}

// Имя внешнего файла карты для подписи: последняя часть адреса; если в ней нет расширения
// (карта GPSSeuranta …/<трансляция>/map), то вместе с предыдущей частью - «2013WOCLongM/map».
function externalMapFileName(url) {
    const parts = String(url).split(/[?#]/)[0].split('/').filter(Boolean);
    let name = parts.pop() ?? '';
    if (!name.includes('.') && parts.length > 1) {
        name = parts.pop() + '/' + name;
    }
    try {
        return decodeURIComponent(name);
    } catch (e) {
        return name;
    }
}

// Значок типа файла внешней карты - вместо превью (PDF, изображения с хостов за капчей и т.п.).
function externalMapIcon(url) {
    const ext = (String(url).split(/[?#]/)[0].match(/\.(\w+)$/) || [])[1]?.toLowerCase();
    const icons = {pdf: 'pdf-file.png', jpg: 'jpg-file.png', jpeg: 'jpg-file.png', png: 'png-file.png', gif: 'gif-file.png'};
    return './images/' + (icons[ext] ?? 'url-file.png');
}

// Адреса, на которые не передаём Referer (временно, по согласованию с владельцем O-Stuff):
// блокировщик ботов на o-stuff.net отбрасывает запросы со страниц сайтов *.spb.ru.
// Ссылкам - rel="noreferrer" (noReferrerRel), картинкам - referrerpolicy="no-referrer".
const NO_REFERRER_URL = /^https?:\/\/([a-z0-9-]+\.)*o-stuff\.net(\/|$)/i;

// Временный запрет Referer для o-stuff.net: false - Referer передаётся как обычно
// (и у ссылок, и у превью карт O-Stuff).
const NO_REFERRER_ENABLED = false;

function isNoReferrerUrl(url) {
    return NO_REFERRER_ENABLED && NO_REFERRER_URL.test(String(url ?? ''));
}

// Атрибут rel="noreferrer" для ссылки на такой адрес, иначе пусто.
function noReferrerRel(url) {
    return isNoReferrerUrl(url) ? ' rel="noreferrer"' : '';
}

// Карты архива maps.o-stuff.net - поле o_stuff события: номер карты или массив номеров.
// Ссылка ведёт на страницу карты на O-Stuff, превью - маленькая картинка N.thumbnail.<ext>.
const O_STUFF_MAP_PAGE = 'https://maps.o-stuff.net/ru/show_map.php?map=';
const O_STUFF_MAP_IMAGES = 'https://maps.o-stuff.net/map_images/';
const O_STUFF_ICON = './images/o-stuff.webp';
// Расширение превью у O-Stuff повторяет расширение файла карты (обычно jpg, бывают jpeg и png),
// а в номере карты его нет - при ошибке загрузки пробуем следующее по списку.
const O_STUFF_THUMB_EXTS = ['jpg', 'jpeg', 'png'];

function getEventOStuffMaps(evt) {
    return [].concat(evt?.o_stuff ?? []);
}

function oStuffMapUrl(n) {
    return O_STUFF_MAP_PAGE + n;
}

function oStuffThumbUrl(n, ext) {
    return O_STUFF_MAP_IMAGES + n + '.thumbnail.' + (ext ?? O_STUFF_THUMB_EXTS[0]);
}

// onerror превью карты O-Stuff: следующее расширение; когда перебраны все - запасная
// картинка из data-fallback (с классом data-fallback-class), а без неё превью прячется
// вместе с обёрткой data-preview-box, если она есть, иначе вместе со ссылкой
// (ссылка на карту есть рядом в списке).
function oStuffThumbError(img) {
    const next = O_STUFF_THUMB_EXTS.indexOf(img.dataset.ext ?? O_STUFF_THUMB_EXTS[0]) + 1;
    if (next > 0 && next < O_STUFF_THUMB_EXTS.length) {
        img.dataset.ext = O_STUFF_THUMB_EXTS[next];
        img.src = oStuffThumbUrl(img.dataset.ostuff, img.dataset.ext);
        return;
    }
    img.onerror = null;
    if (img.dataset.fallback) {
        img.src = img.dataset.fallback;
        if (img.dataset.fallbackClass) img.classList.add(img.dataset.fallbackClass);
        return;
    }
    (img.closest('[data-preview-box]') ?? img.closest('a') ?? img).style.display = 'none';
}

// Внешние карты события для показа: файлы из поля maps, затем карты O-Stuff из o_stuff.
// {url - адрес ссылки, label - подпись, title - подсказка, icon - значок вместо превью,
//  preview - адрес превью или null, ostuff - номер карты O-Stuff (только у карт O-Stuff)}.
function getEventExternalMapItems(evt) {
    return [
        ...getEventExternalMaps(evt).map(url => ({
            url: url, label: externalMapFileName(url), title: 'Карта (файл)',
            icon: externalMapIcon(url), preview: isImageUrl(url) ? url : null
        })),
        ...getEventOStuffMaps(evt).map(n => ({
            url: oStuffMapUrl(n), label: 'O-Stuff, карта ' + n, title: 'Карта на O-Stuff',
            icon: O_STUFF_ICON, preview: oStuffThumbUrl(n), ostuff: n
        }))
    ];
}

// Дополнительные атрибуты <img> превью внешней карты: у карт O-Stuff - перебор расширений
// при ошибке (oStuffThumbError) и запасная картинка fallback с классом fallbackClass.
function externalMapPreviewAttrs(item, fallback, fallbackClass) {
    if (item.ostuff === undefined) return '';
    return ` data-ostuff="${item.ostuff}"${isNoReferrerUrl(item.preview) ? ' referrerpolicy="no-referrer"' : ''} onerror="oStuffThumbError(this)"` +
        (fallback ? ` data-fallback="${fallback}"` : '') +
        (fallbackClass ? ` data-fallback-class="${fallbackClass}"` : '');
}

// Значки на внешние карты события - в календаре после места:
// 🗺️ на файлы карт (поле maps), значок O-Stuff на карты O-Stuff (поле o_stuff).
function buildEventExternalMaps(evt) {
    return getEventExternalMapItems(evt).map(x => x.ostuff === undefined
        ? buildLink(x.url, ' 🗺️', x.title)
        : ' ' + buildLink(x.url, `<img src="${O_STUFF_ICON}" alt="O-Stuff" title="${x.label}" class="sheet-icon" />`, x.title)
    ).join('');
}

// Внешние карты событий старта (файлы из maps и карты O-Stuff): [{...getEventExternalMapItems(), evt}].
function getStartExternalMaps(start, events) {
    const result = [];
    for (const evt of events) {
        if (checkStartMap(start, evt)) {
            for (const item of getEventExternalMapItems(evt)) {
                result.push({...item, evt});
            }
        }
    }
    return result;
}

function getEventPlace(event) {
    let place = event.place;
    if (!place && event.parent) {
        const parent = findEvent(event.parent);
        if (parent.place) {
            place = parent.place;
        }
    }
    return place;
}

// Место события: ссылки на O-Maps (поля map, coord, track) и внешние карты (поля maps и o_stuff).
function buildEventPlace(event, suffix) {
    return buildEventPlaceOMaps(event, suffix) + buildEventExternalMaps(event);
}

function buildEventPlaceOMaps(event, suffix) {
    let mapPage ='spb.html';
    if (REGION_KEY === 'MSK') {
        mapPage = 'moscow.html';
    } else if (REGION_KEY === 'tracks') {
        mapPage = 'tracks.html';
    } else if (REGION_KEY === 'SAMARA') {
        mapPage = 'samara.html';
    }
    let place = getEventPlace(event);
    if (event.map) {
        let maps = Array.isArray(event.map) ? [...event.map] : [event.map];
        let result = '';
        for (const [i, m] of maps.entries()) {
            const mp = getMapForName(m);
            if (mp && (mp.page || (mp.start && starts[mp.start] && starts[mp.start].page))) {
                mapPage = (mp.page ?? (mp.start && starts[mp.start] && starts[mp.start].page)) + '.html';
            }
            if (i === 0) {
                result = buildLink(`${mapPage}?calendar&map=${m}`, place + ' 🗺️', 'Карта на O-Maps');
            } else {
                result += buildLink(`${mapPage}?calendar&map=${m}`, ' 🗺️', 'Карта на O-Maps');
            }
            if (event.coord) {
                result += buildLink(`${mapPage}?x=${event.coord[0]}&y=${event.coord[1]}&calendar${suffix ? '&'+suffix : ''}`, ' 🌐', 'Место на O-Maps');
            }
        }
        return result;
    } else if (event.coord) {
        return buildLink(`${mapPage}?x=${event.coord[0]}&y=${event.coord[1]}&calendar${suffix ? '&'+suffix : ''}`, place + ' 🌐', 'Место на O-Maps');
    }  else if (event.track) {
        return buildLink(`tracks.html?track=${event.track}&calendar`,place + ' 🚸', 'Трек на O-Maps');
    } else {
        return place ?? '';
    }
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
        let img = 'photo-camera.png';
        if (evt.photo.includes('sport-images.ru')) {
            img = 'sportimages.webp';
        }
        result += ' ' + buildLink(evt.photo, `<img class="media-link" src="./images/${img}" alt="Фото">`, 'Фотографии', true);
    }
    if (evt.video) {
        result += ' ' + buildLink(evt.video, `<img class="media-link" src="./images/${getVideoImg(evt.video)}" alt="Видео">`, 'Видео', true);
    }
    if (HAS_ME_PARAM && evt.strava) {
        let strava = evt.strava;
        if (Array.isArray(strava)) {
            strava = strava.map(s => 'https://www.strava.com/activities/' + s);
        } else {
            strava = 'https://www.strava.com/activities/' + strava;
        }
        result += ' ' + buildLink(strava, '<img class="media-link" src="./images/strava_32.gif" alt="Strava">', 'Strava', true);
    }
    return result;
}

function buildEventInfo(evt) {
    const evtPlanners = buildPlanners(evt, null, true);
    return (evt.info ?? '') + (evtPlanners ? ' Планирование дистанции: ' + evtPlanners : '') + buildPublish(evt);
}

// Адрес страницы одного события календаря (event.html). evt - событие или его id.
function eventPageUrl(evt) {
    return 'event.html?id=' + encodeURIComponent(evt?.id ?? evt);
}

// --- Страницы записей: event.html, poi.html, owner.html ---------------------------
// Общее для event.js, poi-page.js и owner.js (раньше - копии в каждом из них).

// Календари сайта: массивы событий (имена ключей eventSources в event.html,
// poi.html, owner.html) и страницы календаря. Порядок важен: событие относится
// к первому календарю, в sources которого есть его массив. Общие события
// (commonEvents) показываются и в СПб, и в московском календаре - «родным»
// для них считается первый. mapPage - страница карты для событий без
// собственной (у карты может быть своя страница: поле page или page её старта);
// years - у календаря страницы по годам (?startYear=).
const SITE_CALENDARS = [
    {
        title: 'Календарь СПб', page: 'calendar.html', mapPage: 'spb.html', years: true,
        sources: ['events2027', 'events2026', 'events2025', 'events2024', 'events2023', 'events2022', 'events2021',
            'events2020', 'events2019', 'events2018', 'events2017', 'events2016', 'events2015',
            'events2014', 'events2013', 'events2012', 'events2011', 'events2010', 'events2009',
            'events2008', 'events2007', 'events2006', 'events2005', 'events2004', 'eventsEarly',
            'otherEvents2026', 'commonEvents', 'iofEvents', 'fsorEvents', 'irfEvents']
    },
    {
        title: 'Календарь Москвы', page: 'calendar-msk.html', mapPage: 'moscow.html',
        sources: ['mskEvents2026', 'mskEvents2025', 'mskEventsOther', 'commonEvents']
    },
    {
        title: 'Календарь Самары', page: 'calendar-samara.html', mapPage: 'samara.html',
        sources: ['samaraEvents2026']
    },
    {
        title: 'Лыжный календарь', page: 'calendar-ski.html', mapPage: 'tracks.html',
        sources: ['skiEvents2026']
    },
];

// Строка «Подпись: значение»; пустое значение - пустая строка, пустая
// подпись - одно значение. Значение со списком (<ol>/<ul>/<div>) не может
// лежать в <p> - тогда <div class="mb-3">.
function infoRow(label, value) {
    if (!value || !String(value).trim()) return '';
    const head = label ? `<b>${label}:</b> ` : '';
    return /<(ol|ul|div)\b/i.test(value) ? `<div class="mb-3">${head}${value}</div>` : `<p>${head}${value}</p>`;
}

// Раздел страницы с заголовком <h2>; без содержимого - пустая строка.
function infoSection(id, title, body) {
    if (!body) return '';
    return `<section id="${id}" class="clearfix"><h2>${title}</h2>${body}</section>`;
}

// Запись (событие, карта) принадлежит владельцу code: он указан в её поле
// owner или в поле owner её старта - как getOwners(), но неизвестный код
// старта не роняет страницу, а один раз выводится в консоль; logPrefix -
// имя страницы в начале сообщения ('owner.html').
const unknownOwnerStartCodes = new Set();
function isOwnedBy(rec, code, logPrefix) {
    if (asList(rec.owner).includes(code)) return true;
    return asList(rec.start).some(s => {
        if (!starts[s]) {
            if (!unknownOwnerStartCodes.has(s)) {
                unknownOwnerStartCodes.add(s);
                console.warn(logPrefix + ': неизвестный код старта ' + s + ' (запись ' + (rec.id ?? rec.name) + ')');
            }
            return false;
        }
        return asList(starts[s].owner).includes(code);
    });
}

// События владельца code во всех календарях страницы (eventSources), от новых
// к старым: [{evt, source}], source - имя массива в eventSources. Из записей
// с одинаковым id остаётся первая; записи без id не показываются.
function findOwnerEvents(code, logPrefix) {
    const events = [];
    for (const [source, list] of Object.entries(eventSources)) {
        for (const e of list) {
            if (isOwnedBy(e, code, logPrefix)) events.push({evt: e, source: source});
        }
    }
    const ids = new Set();
    return events.filter(x => {
        if (!x.evt.id || ids.has(x.evt.id)) return false;
        ids.add(x.evt.id);
        return true;
    }).sort((a, b) => dateForCompare(b.evt) - dateForCompare(a.evt));
}

// Хотя бы одна из дат dates (строка или массив, 'YYYY-MM-DD…') попадает в дни
// события evt (date..endDate включительно). Даты без дня (только год)
// с событием не сопоставляются. Документы history-docs.js на event.html и
// start-details.html.
function isDateInEventDays(dates, evt) {
    const from = String(evt.date ?? '').substring(0, 10);
    const to = String(evt.endDate ?? evt.date ?? '').substring(0, 10);
    if (!from) return false;
    return asList(dates).some(dt => {
        const day = String(dt).substring(0, 10);
        return day.length === 10 && day >= from && day <= to;
    });
}

// Маршрут на машине в Яндекс Картах до точки [широта, долгота].
function yandexRouteUrl(point) {
    return `https://yandex.ru/maps/?rtext=~${+point[0].toFixed(6)},${+point[1].toFixed(6)}&rtt=auto`;
}

// Заголовок и описание страницы записи (poi.html, owner.html): title -
// «title — O-Maps» (и og:title), description - «O-Maps. description».
function applyPageMeta(title, description) {
    document.title = title + ' — O-Maps';
    setMetaContent('meta[name="description"]', 'O-Maps. ' + description);
    setMetaContent('meta[property="og:title"]', title + ' — O-Maps');
    setMetaContent('meta[property="og:description"]', description);
}

// Запись по коду из адреса не найдена: заголовок title в элементе titleId,
// html в элементе heroId, document.title «title — O-Maps» и noindex.
function renderRecordNotFound(titleId, title, heroId, html) {
    document.getElementById(titleId).textContent = title;
    document.title = title + ' — O-Maps';
    document.getElementById(heroId).innerHTML = html;
    addNoindexMeta();
}

// --- Подложка и мини-карта места -----------------------------------------------
// Мини-карты на event.html и poi.html (раньше - копии в event.js и poi-page.js).

const OSM_TILES_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const TOPO_TILES_URL = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
const YANDEX_MAPS_API_URL = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
const YANDEX_LEAFLET_PLUGIN_URL = 'js/ext/Yandex.js';

// Подложка карты lmap и строка атрибуции - те же, что на основной карте:
// фон, выбранный там (background из map-build.js: параметр адреса или
// localStorage, по умолчанию Яндекс Схема), и ATTRIBUTION. На странице без
// map-build.js (статьи history/) фон и подпись вычисляются так же, как там.
// API Яндекс Карт тяжёлый, поэтому грузится, только когда нужен: если выбран
// Яндекс (схема или спутник). Не загрузился - OSM; logPrefix - имя страницы
// в сообщении консоли; root - путь к корню сайта со страницы ('../' из history/).
async function addSiteBaseLayer(lmap, logPrefix, root = '') {
    const bg = typeof background !== 'undefined' ? background
        : (BACKGROUND_PARAM || localStorage.getItem('background') || BACKGROUND_YANDEX);
    const yandex = bg === BACKGROUND_YANDEX || bg === BACKGROUND_SATELLITE;
    const attribution = typeof ATTRIBUTION !== 'undefined' ? ATTRIBUTION
        : '© <a href="https://github.com/efradkin/o-maps">O-Maps</a> | <a href="https://t.me/o_maps">Спорт. карты</a> на ' +
          (yandex ? '<a href="https://yandex.ru/legal/maps_termsofuse/ru/?lang=ru">Я.Картах</a>'
                  : '<a href="https://www.openstreetmap.org/copyright">OSM</a>');
    if (bg === BACKGROUND_OSM) {
        L.tileLayer(OSM_TILES_URL, {maxZoom: 17, attribution: attribution}).addTo(lmap);
        return;
    }
    if (bg === BACKGROUND_TOPO) {
        L.tileLayer(TOPO_TILES_URL, {maxZoom: 17, attribution: attribution}).addTo(lmap);
        return;
    }
    try {
        if (typeof ymaps === 'undefined') await loadScriptOnce(YANDEX_MAPS_API_URL);
        if (typeof L.yandex !== 'function') await loadScriptOnce(root + YANDEX_LEAFLET_PLUGIN_URL);
        const options = {maxZoom: 17, attribution: attribution};
        if (bg === BACKGROUND_SATELLITE) options.type = 'satellite';
        L.yandex(options).addTo(lmap);
    } catch (e) {
        console.warn(logPrefix + ': подложка Яндекса недоступна (' + e.message + '), показан OSM');
        L.tileLayer(OSM_TILES_URL, {
            maxZoom: 17,
            attribution: '© <a href="https://github.com/efradkin/o-maps">O-Maps</a> | ' +
                '<a href="https://t.me/o_maps">Спорт. карты</a> на ' +
                '<a href="https://www.openstreetmap.org/copyright">OSM</a>'
        }).addTo(lmap);
    }
}

// Мини-карта места в элементе el: без масштабирования колесом (страница
// прокручивается), атрибуция без префикса «Leaflet», подложка - addSiteBaseLayer().
// Отметки и вид (setView / fitBounds) добавляет страница.
function createPlaceMiniMap(el, logPrefix) {
    const lmap = L.map(el, {scrollWheelZoom: false, zoomControl: true, attributionControl: false});
    L.control.attribution().setPrefix('').addTo(lmap);
    addSiteBaseLayer(lmap, logPrefix);
    return lmap;
}

function buildMapInfo(url) {
    const mapInfoLink = './map-info.html?map=' + extractFileName(url);
    return ` <a class="map-info-link" href="${mapInfoLink}" title="Информация о карте">🔗</a>`;
}

// Ссылки на результаты карты m (поле results) и её страницу на O-Site (o_site) -
// продолжение описания карты на map-info.html и start-details.html.
function buildMapResultsLinks(m) {
    let html = '';
    if (m.results) {
        html += ` <a href="${m.results}">Результаты</a>.`;
    }
    if (m.o_site) {
        html += ` <a href="${O_SITE_ADDRESS_PREFIX}${m.o_site}">Инфо и результаты</a>.`;
    }
    return html;
}

function buildPublish(events, label) {
    let result = '';
    const publish = [];
    if (!Array.isArray(events)) {
        events = [events];
    }
    for (const e of events) {
        if (e.publish) {
            pushItems(publish, e.publish);
        }
/* пожалуй, не надо искать публикации через карты события
        if (e.map) {
            if (Array.isArray(e.map)) {
                for (const mp of e.map) {
                    const m = getMapForName(mp);
                    if (m && m.publish) {
                        publish.push(mp);
                    }
                }
            } else {
                const m = getMapForName(e.map);
                if (m && m.publish) {
                    publish.push(m.publish);
                }
            }
        }
*/
    }
    if (publish.length > 0) {
        result = buildLinksWithLabel(publish, label ?? ' Карты опубликованы тут');
    }
    return result;
}

function buildEventType(evt, withFmt) {
    let result = '';
    if (!onlyOneSport) {
        const type = getEventType(evt);
        switch (type) {
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
                result = 'В помещении'; break;
            case 'SPECIAL':
                result = 'Другой'; break;
            case 'TRAIL_O':
                result = 'Трейл-О';
        }
        if (!result && type) {
            if (type.includes('CLUB')) {
                result = 'Клуб';
            } else if (type.includes('WATER')) {
                result = 'Водный рогейн';
            } else if (type.includes('SKI')) {
                if (isRogaine(evt)) {
                    result = 'Лыжный рогейн';
                } else {
                    result = 'Ориент лыж';
                }
            } else if (type.includes('VELO')) {
                result = 'Рогейн';
            } else if (type.includes('SPECIAL')) {
                result = 'Другой';
            } else if (type.includes('INDOOR')) {
                result = 'В помещении';
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

function buildPlanners(m, calendar, inline) {
    let result = '';
    const events = [];
    if (typeof planners !== 'undefined') {
        if (m.planner) {
            events.push(m);
        }
        if (!calendar && m.url) {
            // Только для карты: у события календаря нет url, и getMapName()
            // вернул бы имя из его внешней ссылки, а не из карты.
            calendar = findEventsForMap(m);
        }
        if (calendar) {
            pushItems(events, calendar);
        }
        let plannersList = [];
        for (const e of events) {
            if (e.planner) {
                pushItems(plannersList, e.planner);
            }
        }
        plannersList = plannersList.filter(p => planners[p]); // неизвестные коды и '?' не выводим
        if (plannersList.length > 0) {
            if (plannersList.length > 1) {
                if (inline) {
                    for (const o of plannersList) {
                        if (result) {
                            result += ', ';
                        }
                        result += planners[o].name;
                    }
                } else {
                    result += '<ol>'
                    for (const o of plannersList) {
                        result += '<li>' + planners[o].name + '</li>';
                    }
                    result += '</ol>'
                }
            } else {
                const planner = planners[plannersList[0]];
                if (planner) {
                    result += planner.name + (inline ? '' : '<br />');
                }
            }
        }
        if (!result && '?' !== m.planner) {
            if (!isNull(starts) && m.start && starts[m.start] && planners[starts[m.start].planner]) {
                result += planners[starts[m.start].planner].name + (inline ? '' : '<br />');
            }
        }
    }
    return result;
}

function buildOrderCustomer(m) {
    let customer = '';
    if (m.order && m.order.owner) {
        customer = owners[m.order.owner]?.order?.name ?? owners[m.order.owner]?.name ?? '';
    }
    return customer;
}

function buildOrderPanel(m) {
    let result = '';
    if (m.order || m.in_work) {
        const from = buildOrderCustomer(m);
        result += `<div class="popup-order-section">🗺️ `;
        if (m.in_work) {
            result += 'Карта находится в работе и пока ещё не готова';
        } else {
            result += 'Запрос на редактирование/составление карты';
        }
        if (m.order && m.order.ready) {
            result += `. Приблизительная дата готовности - ${m.order.ready}`;
        }
        result += `${from ? '. Заказчик - ' + from : ''}.<br />`;
        result += buildOrderInfo(m, true, true, false);
        result += '</div><br />';
    }
    return result;
}

function buildOrderInfo(m, withCite, withArea, withRestricted) {
    let result = '';
    if (m.order) {
        if (withCite) {
            result = '<cite>';
        }
        result += safe(m.order.info);
        if (withArea && m.order.area) {
            result += ` Примерная площадь - ${m.order.area}км².`;
        }
        if (withCite) {
            result += '</cite>';
        }
        let price = m.order.price;
        if (!price && m.order.owner) {
            price = owners[m.order.owner]?.order?.price ?? '';
        }
        if (price) {
            if (price === 'ФСОР') {
                price = 'Оплата - по расценкам ФСОР.'
            }
            result += `<br /><small>${price}</small>`;
        }
    }
    if (withRestricted && m.restricted) {
        result += getRestrictedText(m);
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
            if (!regions[r]) {
                continue;
            }
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

// Корень сайта относительно текущей страницы - по адресу самого utils.js
// (страницы во вложенных папках, например history/, подключают ../js/utils.js).
const SITE_ROOT = (() => {
    const src = document.currentScript?.src;
    return src ? src.replace(/js\/utils\.js(\?.*)?$/, '') : '';
})();

const PEEK_WIDGET_CONTENT = `
    <h3>Добро пожаловать!</h3>
    <section><img src="${SITE_ROOT}logo/o-maps.webp" class="help-figure" title="Лого" /><br /><br />
    <p>Тут могла бы быть Ваша реклама, но её тут нет. <a href="${SITE_ROOT}help/contacts.html">Пишите, звоните</a>. Мы рады поддержке и открыты для любых предложений.</section>
    `;

class PeekWidget {
    constructor(options = {}) {
        this.sides = ['left', 'right', 'top', 'bottom'];
        this.side = options.side || this.sides[Math.floor(Math.random() * this.sides.length)];

        this.width = options.width || 400;
        this.height = options.height || 460;

        this.peekSize = options.peekSize || 10;
        this.peekDistance = options.peekDistance || 48;

        this.autoPeekInterval = options.autoPeekInterval || getRandom(30000, 180000);
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
    new PeekWidget(typeof PEEK_WIDGET_OPTIONS !== 'undefined' ? PEEK_WIDGET_OPTIONS : {});
}, 1000);

/*   КАРТА МЕСТ ИСТОРИЧЕСКОЙ СТАТЬИ   */

// Карта мест статьи раздела history/ (например, history/spb-history.html с данными
// js/history-spb-poi.js). Записи — в формате poi.js: id, coord, name, плюс page (раздел
// сайта для ссылки «Карты района»), poi, year (год первого упоминания — цвет точки),
// events [[id, год, название, логотипы]], maps [[файл, год, название]] и overlay [файл, url,
// углы, закрыта] — карта O-Maps, которая накладывается, когда открыт попап точки, и остаётся
// (карты копятся, непрозрачные, под маркерами; закрытая правообладателем — заглушкой, как mapImageUrl).
// Разметка на странице:
//   <section id="places"> … <div id="places-map"></div> <ul id="places-legend"></ul>
//     <details><ul id="places-list"></ul></details> </section>
// и значки в тексте: <a class="hist-place-pin" id="pl-ID-раздел" href="#place-ID">📍</a>.
// Список мест и якоря #place-ID (метки у карты) создаются сразу; Leaflet, кластеризация и подложка
// грузятся только когда карта близко к экрану или читатель перешёл к месту.
// Подложка — та же, что на основной карте (addSiteBaseLayer).
// Клик по значку 📍 или по месту в списке прокручивает к карте и открывает попап точки;
// при таком переходе вид подгоняется под наложенную карту точки, при клике по маркеру — нет.
function initHistoryPlacesMap(places, options = {}) {
    const root = options.root ?? '../';
    const mapEl = document.getElementById(options.mapId ?? 'places-map');
    const listEl = document.getElementById(options.listId ?? 'places-list');
    const legendEl = document.getElementById(options.legendId ?? 'places-legend');
    if (!mapEl || !Array.isArray(places)) return;

    // эпохи: цвет точки по году первого упоминания (классы hist-pm-e0…e4 в history.css);
    // options.eras — свои эпохи статьи: [[последний год, подпись], …], у последней — Infinity
    const ERAS = options.eras ?? [[1969, 'до 1969'], [1989, '1970–1980-е'], [1999, '1990-е'], [2009, '2000-е'], [Infinity, '2010-е и позже']];
    const eraOf = year => ERAS.findIndex(([last]) => (year ?? Infinity) <= last);
    // начальный вид — точки этих разделов сайта (по умолчанию Петербурга); null — все точки
    const HOME_PAGES = options.homePages === undefined ? ['spb', 'starts'] : options.homePages;
    const PIN = '📍';

    const anchorOf = p => 'place-' + p.id.toLowerCase();
    const byAnchor = new Map(places.map(p => [anchorOf(p), p]));

    // --- легенда и список мест (без Leaflet) -------------------------------------------
    if (legendEl) {
        legendEl.innerHTML = ERAS.map(([, label], i) =>
            `<li><span class="hist-pm hist-pm-e${i}" aria-hidden="true"></span>${htmlEscape(label)}</li>`).join('');
    }
    // якоря #place-ID — невидимые метки у верхнего края карты: переход по ним (в том числе
    // с других страниц) прокручивает к карте, а не к свёрнутому списку мест
    const anchorsEl = document.createElement('div');
    anchorsEl.className = 'hist-place-anchors';
    anchorsEl.innerHTML = places.map(p => `<span id="${anchorOf(p)}"></span>`).join('');
    mapEl.before(anchorsEl);
    if (listEl) {
        // одно название — одна строка; у каждой точки свой номер, как в указателе имён
        const groups = new Map();
        for (const p of [...places].sort((a, b) => a.name.localeCompare(b.name, 'ru') || (a.year ?? 0) - (b.year ?? 0))) {
            if (!groups.has(p.name)) groups.set(p.name, []);
            groups.get(p.name).push(p);
        }
        listEl.innerHTML = [...groups].map(([name, ps]) => {
            const head = `<a href="#${anchorOf(ps[0])}" target="_self">${htmlEscape(name)}</a>`;
            const years = [...new Set(ps.map(p => p.year).filter(Boolean))].join(', ');
            const more = ps.length < 2 ? '' : ' <span class="hist-names-refs">' + ps.map((p, i) =>
                `<a href="#${anchorOf(p)}" target="_self" title="${htmlEscape(name)}, точка ${i + 1}">${i + 1}</a>`).join(' ') + '</span>';
            return `<li>${head}${more}${years ? ` <small>${htmlEscape(years)}</small>` : ''}</li>`;
        }).join('');
    }

    // упоминания в статье: значки 📍, сгруппированные по точкам; подпись — пункт оглавления раздела;
    // от раздела — одна ссылка, на первое упоминание в нём
    function mentionsOf(p) {
        const secs = new Set();
        return [...document.querySelectorAll(`a.hist-place-pin[href="#${anchorOf(p)}"]`)].filter(a => {
            const sec = a.closest('section[id]');
            if (secs.has(sec)) return false;
            secs.add(sec);
            return true;
        }).map(a => {
            const sec = a.closest('section[id]');
            const toc = sec && document.querySelector(`nav.hist-toc a[href="#${sec.id}"]`);
            return {id: a.id, label: toc ? toc.textContent.trim() : (sec ? sec.querySelector('h2')?.textContent.trim() : '')};
        });
    }

    function popupHtml(p) {
        const rows = [];
        for (const [id, year, name, logos] of p.events || []) {
            // логотип перед названием — как в календаре (buildEventStart)
            const icons = (logos || []).map(l => `<img src="${root}logo/${htmlEscape(l)}" alt="Лого" class="sheet-icon"> `).join('');
            rows.push(`<li><a href="${root}event.html?id=${encodeURIComponent(id)}">${year ?? '—'}</a> ${icons}${htmlEscape(name)}</li>`);
        }
        for (const [file, year, name] of p.maps || []) {
            rows.push(`<li><a href="${root}map-info.html?map=${encodeURIComponent(file)}">карта${year ? ' ' + year : ''}</a> ${htmlEscape(name)}</li>`);
        }
        const mentions = mentionsOf(p).map(m => `<a href="#${m.id}" target="_self">${htmlEscape(m.label)}</a>`);
        const links = [`<a href="${root}${p.page || 'all'}.html?x=${p.coord[0]}&y=${p.coord[1]}&zoom=13">🗺️ Карты района на O-Maps</a>`];
        if (p.poi) links.push(`<a href="${root}poi.html?poi=${encodeURIComponent(p.poi)}">Место на O-Maps</a>`);
        return `<div class="hist-map-popup">
            <strong>${htmlEscape(p.name)}</strong>
            ${rows.length ? `<ul>${rows.join('')}</ul>` : ''}
            ${mentions.length ? `<p>В статье: ${mentions.join(' · ')}</p>` : ''}
            <p>${links.join(' · ')}</p></div>`;
    }

    // --- Leaflet: ленивая загрузка ----------------------------------------------------
    let ready = null;
    let lmap, cluster;
    const markers = new Map();
    const homeBounds = () => L.latLngBounds(places.filter(p => !HOME_PAGES || HOME_PAGES.includes(p.page)).map(p => p.coord));

    function init() {
        if (ready) return ready;
        ready = (async () => {
            await Promise.all([
                loadStylesheetOnce(root + 'css/leaflet.css'),
                loadStylesheetOnce(root + 'js/ext/Leaflet.markercluster/MarkerCluster.css'),
                loadScriptOnce(root + 'js/ext/leaflet.js'),
            ]);
            await Promise.all([
                loadScriptOnce(root + 'js/ext/Leaflet.markercluster/leaflet.markercluster.js'),
                loadScriptOnce(root + 'js/ext/Leaflet.ImageOverlay.Rotated.js'),
            ]);
            mapEl.classList.add('is-ready');
            lmap = L.map(mapEl, {
                maxZoom: 17,                        // нужен кластеризации до появления подложки
                scrollWheelZoom: !L.Browser.mobile, // колесо мыши масштабирует; на телефонах — два пальца
                dragging: !L.Browser.mobile,        // одним пальцем — прокрутка страницы
                tap: false,
                attributionControl: false,
            });
            L.control.attribution().setPrefix('').addTo(lmap);
            lmap.fitBounds(homeBounds(), {padding: [24, 24]});
            addSiteBaseLayer(lmap, 'карта мест', root);
            cluster = L.markerClusterGroup({
                maxClusterRadius: 32,
                showCoverageOnHover: false,
                spiderfyOnMaxZoom: true,
                iconCreateFunction: c => L.divIcon({
                    html: `<span>${c.getChildCount()}</span>`, className: 'hist-cluster', iconSize: [30, 30]
                }),
            });
            for (const p of places) {
                const m = L.marker(p.coord, {
                    title: p.name + (p.year ? ', ' + p.year : ''),
                    icon: L.divIcon({
                        html: `<span class="hist-pm hist-pm-e${eraOf(p.year)}"></span>`,
                        className: 'hist-pm-icon', iconSize: [18, 18], iconAnchor: [9, 9], popupAnchor: [0, -8]
                    }),
                });
                m.bindPopup(() => popupHtml(p), {maxWidth: 320, className: 'hist-map-popup-wrap'});
                m.on('popupopen', () => showOverlay(p));
                markers.set(p.id, m);
                cluster.addLayer(m);
            }
            lmap.addLayer(cluster);
        })();
        return ready;
    }

    // карта O-Maps точки поверх подложки (как карты события на event.html); остаётся на месте
    // после закрытия попапа, карты разных точек копятся. Возвращает её габарит.
    const overlays = new Map();
    function showOverlay(p) {
        if (!p.overlay) return null;
        if (!overlays.has(p.id)) {
            const [file, url, corners, hidden] = p.overlay;
            const src = root + (hidden ? OLIVE_IMAGE_URL : url).replace(/^\.\//, '');
            const ll = corners.map(c => L.latLng(c));
            const layer = ll.length >= 3
                ? L.imageOverlay.rotated(src, ll[0], ll[1], ll[2], {opacity: 1, alt: file})
                : L.imageOverlay(src, L.latLngBounds(ll), {opacity: 1, alt: file});
            layer.addTo(lmap);
            const box = ll.length >= 3
                ? L.latLngBounds([ll[0], ll[1], ll[2], L.latLng(ll[1].lat + ll[2].lat - ll[0].lat, ll[1].lng + ll[2].lng - ll[0].lng)])
                : L.latLngBounds(ll);
            overlays.set(p.id, box);
        }
        return overlays.get(p.id);
    }

    // точка по якорю #place-ID: прокрутить к карте, показать карту точки и вписать её в вид,
    // раскрыть кластер, открыть попап
    async function focusPlace(anchor) {
        const p = byAnchor.get(anchor);
        if (!p) return;
        mapEl.scrollIntoView({block: 'center', behavior: 'instant'});
        await init();
        const m = markers.get(p.id);
        const box = showOverlay(p);
        if (box) lmap.fitBounds(box, {padding: [16, 16], animate: false});
        cluster.zoomToShowLayer(m, () => m.openPopup());
    }

    document.addEventListener('click', e => {
        const a = e.target.closest && e.target.closest('a[href^="#place-"]');
        if (!a || !byAnchor.has(a.getAttribute('href').slice(1))) return;
        e.preventDefault();
        const anchor = a.getAttribute('href').slice(1);
        if (location.hash !== '#' + anchor) history.pushState(null, '', '#' + anchor);
        focusPlace(anchor);
    });
    const fromHash = () => {
        const anchor = decodeURIComponent(location.hash.slice(1));
        if (byAnchor.has(anchor)) focusPlace(anchor);
    };
    window.addEventListener('hashchange', fromHash);
    if (document.readyState === 'complete') fromHash();
    else window.addEventListener('load', () => setTimeout(fromHash, 0), {once: true});

    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver(entries => {
            if (entries.some(en => en.isIntersecting)) {
                io.disconnect();
                init();
            }
        }, {rootMargin: '400px 0px'});
        io.observe(mapEl);
    } else {
        init();
    }
}
