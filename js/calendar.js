const urlParams = new URLSearchParams(window.location.search);
const EVENT_TYPE_PARAM = urlParams.get('event-type');
const EVENT_MONTH_PARAM = urlParams.get('event-month');
const CALENDAR_NAME_PARAM = urlParams.get('calendar');

// Фильтрация массива. Оставляем только эвенты, соответствующие критерию запроса (есди он задан).
if (EVENT_TYPE_PARAM && ('ALL' !== EVENT_TYPE_PARAM)) {
    oEvents = oEvents.filter(event => {
        if ('ROGAINE' === EVENT_TYPE_PARAM) {
            return isRogaine(event);
        }
        if ('ORIENT' === EVENT_TYPE_PARAM) {
            return event.type.includes('ORIENT');
        }
        if ('OTHER' === EVENT_TYPE_PARAM) {
            return !event.type.includes('ORIENT') && !event.type.includes('VELO') && !event.type.includes('SKI') && !isRogaine(event);
        }
        if ('SKI' === EVENT_TYPE_PARAM) {
            return event.type.includes('SKI');
        }
        if ('VELO' === EVENT_TYPE_PARAM) {
            return event.type.includes('VELO');
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
    /*
                oEvents.sort((a, b) => (a.info || '').localeCompare(b.info || ''))
                    .sort((a, b) => (a.startYear || (a.year || 0)) - (b.startYear || (b.year || 0)));
    */
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
            const firstCurrent = currentRow.previousSibling;
            firstCurrent.scrollIntoView();
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
                tbody.appendChild(monthRow);
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
            if (evt.type.includes('WATER')) {
                row.classList.add('water');
                krogaines++;
            } else if (evt.type.includes('ORIENT')) {
                row.classList.add('orient');
                korients++;
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
            td(row, buildNumber(evt, idx++));
            td(row, buildEventDate(evt));
            td(row, buildEventStart(evt));
            td(row, buildPlace(evt));
            td(row, buildEventType(evt, true));
            td(row, buildEventResults(evt));
            td(row, buildEventReports(evt, true));
            td(row, evt.info ?? '');
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
        monthTD.innerHTML = `${monthName}&nbsp;&nbsp;&nbsp;${year}&nbsp;&nbsp;&nbsp;(ориенты: ${korients}, рогейны: ${krogaines}, прочие: ${kothers})`;
        korients = krogaines = kothers = 0;
    }
}

function td(row, html) {
    const td = document.createElement('td');
    td.innerHTML = html;
    row.appendChild(td);
}

function buildNumber(event, i) {
    let icon = '';
    if (event.type.includes('SKI')) {
        icon = '&nbsp;❄';
    } else if (event.type.includes('VELO')) {
        icon = '&nbsp;🚲';
    } else if (event.type.includes('WATER')) {
        icon = '&nbsp;🚣';
    }
    return (i + 1) + icon;
}

function buildPlace(event) {
    const mapPage = REGION_KEY === 'spb' ? 'spb.html' : 'moscow.html';
    if (event.map) {
        let maps = Array.isArray(event.map) ? [...event.map] : [event.map];
        let result = '';
        for (const [i, m] of maps.entries()) {
            if (i === 0) {
                result = buildLink(`${mapPage}?calendar&map=${m}`, event.place + ' 🗺️', 'Карта на o-Maps');
            } else {
                result += buildLink(`${mapPage}?calendar&map=${m}`, ' 🗺️', 'Карта на o-Maps');
            }
        }
        return result;
    } else if (event.coord) {
        return buildLink(`${mapPage}?x=${event.coord[0]}&y=${event.coord[1]}&calendar`, event.place + ' 🗺️', 'Место на o-Maps');
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