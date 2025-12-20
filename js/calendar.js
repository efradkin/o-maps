
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

    let selector = document.getElementById('event_type_selector');
    selector.value = EVENT_TYPE_PARAM;
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
        const firstCurrent = document.querySelector('.current').previousSibling;
        firstCurrent.scrollIntoView();
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
    for (const event of oEvents) {
        currentDate = new Date(event.date);
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
        let now = new Date();
        if ((currentDate < now) && (Math.abs(currentDate - now) > DAY_TIME_RANGE)) {
            row.classList.add('disabled');
        } else {
            if (currentDate - now < WEEK_TIME_RANGE) {
                row.classList.add('current');
            }
        }
        if(event.cancelled) {
            row.classList.add('cancelled');
        }
        if (event.type.includes('WATER')) {
            row.classList.add('water');
            krogaines++;
        } else if (event.type.includes('ORIENT')) {
            row.classList.add('orient');
            korients++;
        } else if (isRogaine(event)) {
            row.classList.add('rogaine');
            krogaines++;
        } else {
            if (event.type.includes('SKI') || event.type.includes('VELO')) {
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
        td(row, buildNumber(event, idx++));
        td(row, buildEventDate(event));
        td(row, buildEventStart(event));
        td(row, buildPlace(event));
        td(row, buildEventType(event, true));
        td(row, buildEventResults(event));
        td(row, buildEventReports(event, true));
        td(row, event.info ?? '');
        tbody.appendChild(row);

        prevDate = currentDate;
    }
    buildMonth();
    document.body.style.cursor = 'default';
}

function buildMonth() {
    let year = prevDate.getFullYear();
    let monthName = prevDate.toLocaleString('ru', { month: 'long' }).toUpperCase().split('').join(' ');
    monthTD.innerHTML = `${monthName}&nbsp;&nbsp;&nbsp;${year}&nbsp;&nbsp;&nbsp;(ориенты: ${korients}, рогейны: ${krogaines}, прочие: ${kothers})`;
    korients = krogaines = kothers = 0;
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
    if (event.map) {
        let maps = Array.isArray(event.map) ? [...event.map] : [event.map];
        let result = '';
        for (const [i, m] of maps.entries()) {
            if (i === 0) {
                result = buildLink('spb.html?map=' + m, event.place + ' 🗺️', 'Карта на o-Maps');
            } else {
                result += buildLink('spb.html?map=' + m, ' 🗺️', 'Карта на o-Maps');
            }
        }
        return result;
    } else {
        return event.place ?? '';
    }
}

function selectEventType(type, region) {
    const page = `./calendar${region ? '-'+region : ''}.html`;
    if (type === 'ALL') {
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