const EVENT_TYPE_PARAM = urlParams.get('event-type');
const EVENT_MONTH_PARAM = urlParams.get('event-month');
const CALENDAR_NAME_PARAM = urlParams.get('calendar');
const OWNER_PARAM = urlParams.get('owner');

let onlyMajor = false;
let major = localStorage.getItem('onlyMajor');
if (major != null) {
    onlyMajor = (major === 'true');
}
if (onlyMajor) {
    document.getElementById('only-major').checked = 'checked';
}
let onlyMy = false;
let my = localStorage.getItem('onlyMy');
if (my != null) {
    onlyMy = (my === 'true');
}
if (onlyMy) {
    document.getElementById('only-my').checked = 'checked';
}
let myEdit = false;
let myedt = localStorage.getItem('myEdit');
if (myedt != null) {
    myEdit = (myedt === 'true');
}
if (myEdit) {
    document.getElementById('edit-my-done-button').style.display = 'inline';
} else {
    document.getElementById('edit-my-button').style.display = 'inline';
}

let myEvents = [];
const me = localStorage.getItem('myEvents');
if (me) {
    myEvents = [
        ...me.split(',')
    ];
}

function switchMajor(value) {
    localStorage.setItem('onlyMajor', value);
    location.reload();
}

function switchMy(checked) {
    localStorage.setItem('onlyMy', !onlyMy);
    location.reload();
}

function saveMy() {
    const checkboxes = document.querySelectorAll(`input.my-checkbox:checked`);
    const checkedIds = Array.from(checkboxes).map(checkbox => checkbox.id);
    localStorage.setItem('myEvents', checkedIds.join(','));
}

function editMy() {
    localStorage.setItem('myEdit', 'true');
    location.reload();
}

function myEditDone() {
    localStorage.setItem('myEdit', 'false');
    location.reload();
}

// Фильтрация массива. Оставляем только эвенты, соответствующие критерию запроса (есди он задан).
if (onlyMajor) {
    oEvents = oEvents.filter(event => event.major);
}
if (OWNER_PARAM) {
    oEvents = oEvents.filter(event => event.owner && event.owner === OWNER_PARAM);
}
if (EVENT_TYPE_PARAM && ('ALL' !== EVENT_TYPE_PARAM)) {
    oEvents = oEvents.filter(event => {
        if (onlyMajor && !event.major) {
            return false;
        }
        if ('ROGAINE' === EVENT_TYPE_PARAM) {
            return isRogaine(event) || event.type.includes('MULTI') || event.start === 'MB';
        }
        if ('ORIENT' === EVENT_TYPE_PARAM) {
            return event.type.includes('ORIENT');
        }
        if ('OTHER' === EVENT_TYPE_PARAM) {
            return !event.type.includes('ORIENT') && !event.type.includes('VELO') && !event.type.includes('SKI') && !event.type.includes('MULTI') && !isRogaine(event) && event.start !== 'MB';
        }
        if ('SKI' === EVENT_TYPE_PARAM) {
            return event.type.includes('SKI');
        }
        if ('VELO' === EVENT_TYPE_PARAM) {
            return event.type.includes('VELO');
        }
        if (event.place && Object.keys(CALENDAR_PLACES).includes(EVENT_TYPE_PARAM)) {
            return (EVENT_TYPE_PARAM === getEventPlaceCode(event.place));
        }
    });
}
if ((EVENT_TYPE_PARAM && ('ALL' !== EVENT_TYPE_PARAM)) || CALENDAR_NAME_PARAM) {
    let selector = document.getElementById('event_type_selector');
    if (EVENT_TYPE_PARAM) {
        selector.value = EVENT_TYPE_PARAM;
    } else if (CALENDAR_NAME_PARAM) {
        selector.value = CALENDAR_NAME_PARAM;
    }
}
if (EVENT_MONTH_PARAM && ('0' !== EVENT_MONTH_PARAM)) {
    oEvents = oEvents.filter(event => {
        const date = new Date(event.date);
        const month = date.getMonth() + 1;
        return month.toString() === EVENT_MONTH_PARAM;
    });

    let selector = document.getElementById('event_month_selector');
    selector.value = EVENT_MONTH_PARAM;
}

window.onload = function() {

    // сортировка стартов
    oEvents.sort((a, b) => (a.info || '').localeCompare(b.info || ''))
        .sort((a, b) => dateForCompare(a) - dateForCompare(b));

    // Навешиваем обработчик на заголовок таблицы
    document.querySelectorAll('th.sortable').forEach(
        (element) => {
            element.addEventListener('click', sortEventsTable);
        }
    );

    // Изначальный рендеринг таблицы
    renderMapsTable();

    setTimeout(() => {
        const currentRow = document.querySelector('.current');
        if (currentRow) {
            const firstCurrent = currentRow.previousElementSibling;
            (firstCurrent || currentRow).scrollIntoView({ block: "start" });

            if (isPopupSliderRequired()) {
                __updateSlidePopupPosition?.();
                requestAnimationFrame(() => __updateSlidePopupPosition?.());
            }
        }
    }, 1000);

    // --- welcome dialog ---
    writeWelcomeButton();
}

// Ссылка на тело таблицы
const tbody = document.querySelector('.o-main-table tbody');

let currentDate;
let monthTD = null, prevDate = null;
let korients = 0, krogaines = 0, kothers = 0;

// строит табличку с инфой об авторах-составителях
function renderMapsTable() {
    tbody.innerHTML = '';

    let idx = 0;
    let prevYear = 0;
    let currentMonth = -1;
    for (const evt of oEvents) {
        if (onlyMy && (!evt.id || !myEvents.includes(evt.id))) {
            continue;
        }

        if (validateEvent(evt)) {
            currentDate = new Date(evt.date);
            let month = currentDate.getMonth();
            if (currentSort === 'date' && month !== currentMonth) {
                if (monthTD) {
                    buildMonth();
                }
                currentMonth = month;
                const monthRow = document.createElement('tr');
                monthTD = document.createElement('td');
                monthTD.setAttribute('colspan', 8);
                monthTD.classList.add('month-row');
                monthRow.appendChild(monthTD);
                if (!onlyMy) {
                    tbody.appendChild(monthRow);
                }
            }

            const row = document.createElement('tr');
            if (isOutdated(currentDate)) {
                row.classList.add('disabled');
            } else {
                if (isActual(currentDate)) {
                    row.classList.add('current');
                }
            }
            if(evt.cancelled) {
                row.classList.add('cancelled');
            }
            if (!evt.type || evt.type.includes('ORIENT')) {
                row.classList.add('orient');
                korients++;
            } else if (evt.type.includes('WATER')) {
                row.classList.add('water');
                krogaines++;
            } else if (isRogaine(evt)) {
                row.classList.add('rogaine');
                krogaines++;
            } else {
                if (evt.type.includes('SKI') || evt.type.includes('VELO')) {
                    korients++;
                } else {
                    kothers++;
                }
            }
            const y = currentDate.getFullYear();
            if (y !== prevYear) {
                prevYear = y;
                idx = 0;
            }
            td(evt, row, buildNumber(evt, idx++));
            td(evt, row, buildEventDate(evt));
            td(evt, row, buildEventStart(evt));
            td(evt, row, buildPlace(evt));
            td(evt, row, buildEventType(evt, true));
            if (!onlyOneSport) {
                td(evt, row, buildEventResults(evt));
                td(evt, row, buildEventReports(evt, true));
                td(evt, row, buildEventInfo(evt));
            }
            tbody.appendChild(row);

            prevDate = currentDate;
        }
    }
    buildMonth();
    document.body.style.cursor = 'default';
}

function buildMonth() {
    if (prevDate) {
        let year = prevDate.getFullYear();
        let monthName = prevDate.toLocaleString('ru', {month: 'long'}).toUpperCase().split('').join(' ');
        monthTD.innerHTML = `${monthName}&nbsp;&nbsp;&nbsp;${year}` + (onlyOneSport ? '' : `&nbsp;&nbsp;&nbsp;(ориенты: ${korients}, рогейны: ${krogaines}, прочие: ${kothers})`);
        korients = krogaines = kothers = 0;
    }
}

function td(evt, row, html) {
    const td = document.createElement('td');
    if (evt.major || (evt.id && myEvents.includes(evt.id))) {
        html = `<b>${html}</b>`;
    }
    td.innerHTML = html;
    row.appendChild(td);
}

function buildNumber(event, i) {
    let icon = '';
    if (!onlyOneSport && event.type) {
        if (event.type.includes('SK_RACE')) {
            icon = '&nbsp;⛷';
        } else if (event.type.includes('RUN')) {
            icon = '&nbsp;🏃';
        } else if (event.type.includes('SKI')) {
            icon = '&nbsp;❄';
        } else if (event.type.includes('VELO')) {
            icon = '&nbsp;🚲';
        } else if (event.type.includes('WATER')) {
            icon = '&nbsp;🚣';
        }
    }
    if (event.price === 1) {
        icon += '&nbsp;💰';
    }
    let checkbox = '', myEvent = '';
    if (event.id) {
        if (myEdit) {
            const checked = myEvents.includes(event.id) ? ' checked' : '';
            checkbox = `<input class="my-checkbox" type="checkbox" id="${event.id}" name="only-my" ${checked} onclick="saveMy();" />&nbsp;`;
        } else {
            const mySign = (onlyOneSport ? '⛷' : '◪');
            myEvent = myEvents.includes(event.id) ? `&nbsp;<span class="my-cp">${mySign}</span>` : '';
        }
    }
    return `${checkbox}${i + 1}${icon}${myEvent}`;
}

function buildPlace(event) {
    let mapPage ='spb.html';
    if (REGION_KEY == 'msk') {
        mapPage = 'moscow.html';
    } else if (REGION_KEY == 'tracks') {
        mapPage = 'tracks.html';
    }
    if (event.map) {
        let maps = Array.isArray(event.map) ? [...event.map] : [event.map];
        let result = '';
        for (const [i, m] of maps.entries()) {
            if (i === 0) {
                result = buildLink(`${mapPage}?calendar&map=${m}`, event.place + ' 🗺️', 'Карта на O-Maps');
            } else {
                result += buildLink(`${mapPage}?calendar&map=${m}`, ' 🗺️', 'Карта на O-Maps');
            }
        }
        return result;
    } else if (event.coord) {
        return buildLink(`${mapPage}?x=${event.coord[0]}&y=${event.coord[1]}&calendar`, event.place + ' 🗺️', 'Место на O-Maps');
    }  else if (event.track) {
        return buildLink(`tracks.html?track=${event.track}&calendar`,event.place + ' 🚸', 'Трек на O-Maps');
    } else {
        return event.place ?? '';
    }
}

function selectEventType(type, region) {
    const page = `./calendar${region ? '-'+region : ''}.html`;
    if (type === 'actual' || type === 'future') {
        location.href = page + '?calendar=' + type;
    } else if (type === 'ALL') {
        location.href = page;
    } else {
        location.href = page + '?event-type=' + type;
    }
}

function selectEventMonth(month) {
    if (month === '0') {
        location.href = './calendar.html';
    } else {
        location.href = './calendar.html?event-month=' + month;
    }
}

function sortEventsTable() {
    document.body.style.cursor = 'wait';

    const sortable = document.querySelector('.o-sheet th.sortable[data-order="asc"], .o-sheet th.sortable[data-order="desc"]');
    if (sortable !== this) {
        sortable.dataset.order = '';
    }

    const isAscending = this.dataset.order === 'asc';
    currentSort = this.dataset.sort;
    switch (currentSort) {
        case 'name':
            oEvents.sort((a, b) => {
                return isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
            });
            break;
        case 'date':
            oEvents.sort((a, b) => {
                return isAscending ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date);
            });
            break;
        case 'place':
            oEvents.sort((a, b) => {
                return isAscending ? (a.place || '').localeCompare(b.place) : (b.place || '').localeCompare(a.place);
            });
            break;
    }
    this.dataset.order = isAscending ? 'desc' : 'asc';
    renderMapsTable();
}

function gotoMap(page) {
    page += '?calendar' + (CALENDAR_NAME_PARAM ? '=' + CALENDAR_NAME_PARAM : '');
    location.href = page;
}