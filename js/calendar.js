const EVENT_MONTH_PARAM = urlParams.get('event-month');

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
const allMajors = onlyMajor || START_NAME_PARAM === 'major';
if (allMajors) {
    oEvents = oEvents.filter(event => isMajor(event));
}
if (HAS_ONLY_ME_PARAM) {
    oEvents = oEvents.filter(event => event.me !== undefined || event.strava !== undefined);
}
if (OWNER_PARAM) {
    oEvents = oEvents.filter(event => hasOwner(event, OWNER_PARAM));
}
if (CALENDAR_PARAM && ('ALL' !== CALENDAR_PARAM)) {
    oEvents = filterEvents(oEvents, allMajors);
}
if (CALENDAR_PARAM) {
    let selector = document.getElementById('event_type_selector');
    if (CALENDAR_PARAM) {
        selector.value = CALENDAR_PARAM;
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
        .sort((a, b) => {
            let compare = dateForCompare(a) - dateForCompare(b);
            if (compare === 0 && a.id && b.id) {
                compare = a.id.localeCompare(b.id);
            }
            return compare
        });

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

    // --- back to start button
    writeBackToStartButton();

    // --- sticky (floating) table header
    if (isMobile) {
        writeStickyHeader();
    }
}

// Ссылка на тело таблицы
const tbody = document.querySelector('.o-main-table tbody');

let currentDate;
let monthTD = null, prevDate = null;
let korients = 0, krogaines = 0, kothers = 0;

// Строки-разделители групп (td.month-row). Обычно старты группируются по
// месяцам. Если выборка разреженная — в среднем меньше SPARSE_GROUP_MIN
// стартов на группу (например, «все WRC»: по одному старту в месяц) —
// группы укрупняются до годов, а если и на год приходится меньше, разделители
// не выводятся вовсе: год и так виден в колонке даты.
// «Ранние» старты (startYear=EARLY) группируются не мельче чем по годам.
const SPARSE_GROUP_MIN = 2;

function groupKeyOf(date, grouping) {
    return grouping === 'month' ? date.getFullYear() * 12 + date.getMonth() : date.getFullYear();
}

function chooseGrouping(events) {
    if (currentSort !== 'date' || onlyMy || events.length === 0) {
        return 'none';
    }
    const levels = ('EARLY' === START_YEAR_PARAM) ? ['year'] : ['month', 'year'];
    for (const grouping of levels) {
        const groups = new Set(events.map(evt => groupKeyOf(new Date(evt.date), grouping)));
        if (events.length >= SPARSE_GROUP_MIN * groups.size) {
            return grouping;
        }
    }
    return 'none';
}

// строит табличку с инфой об авторах-составителях
function renderMapsTable() {
    let totalEvents = 0, orientEvents = 0, rogaineEvents = 0, veloEvents = 0, skiEvents = 0, otherEvents = 0;
    tbody.innerHTML = '';
    monthTD = null;
    prevDate = null;
    korients = krogaines = kothers = 0;

    const visibleEvents = oEvents.filter(evt =>
        !(onlyMy && !evt.strava && !evt.my && (!evt.id || !myEvents.includes(evt.id))) && validateEvent(evt));
    const grouping = chooseGrouping(visibleEvents);

    let idx = 0;
    let prevYear = 0;
    let currentGroup = null;
    for (const evt of visibleEvents) {
        totalEvents++;
        currentDate = new Date(evt.date);
        const y = currentDate.getFullYear();
        if (grouping !== 'none' && groupKeyOf(currentDate, grouping) !== currentGroup) {
            if (monthTD) {
                buildMonth(grouping);
            }
            const monthRow = document.createElement('tr');
            monthTD = document.createElement('td');
            monthTD.setAttribute('colspan', 8);
            monthTD.classList.add('month-row');
            monthRow.appendChild(monthTD);
            tbody.appendChild(monthRow);
            currentGroup = groupKeyOf(currentDate, grouping);
        }

        const row = document.createElement('tr');
        const lastDate = new Date(evt.endDate ?? evt.date);
        if (isOutdated(lastDate)) {
            row.classList.add('disabled');
        } else {
            if (isActual(lastDate)) {
                row.classList.add('current');
            }
        }
        if(evt.cancelled) {
            row.classList.add('cancelled');
        }
        // Важные старты. Внешний вид задают css/theme.css (десктоп —
        // жирное начертание, как было) и css/calendar-mobile.css
        // (карточки — крупный заголовок и утолщённая обводка).
        if (isMajor(evt)) {
            row.classList.add('major');
        }
        // «Мои» старты — тот же признак, по которому раньше ставился <b>.
        // Внешний вид задают css/theme.css (десктоп) и
        // css/calendar-mobile.css (карточки).
        if (evt.id && myEvents.includes(evt.id)) {
            row.classList.add('my-event');
        }
        if (!evt.type || evt.type.includes('ORIENT') || evt.type.includes('INDOOR')) {
            row.classList.add('orient');
            korients++;
            orientEvents++;
        } else if (evt.type.includes('WATER')) {
            row.classList.add('water');
            krogaines++;
            rogaineEvents++;
        } else if (isRogaine(evt)) {
            row.classList.add('rogaine');
            krogaines++;
            rogaineEvents++;
        } else {
            // лыжное ориентирование и лыжные гонки — голубоватый фон (theme.css, tr.ski);
            // лыжный рогейн остаётся рогейном
            if (evt.type.includes('SKI') || evt.type.includes('SK_RACE')) {
                row.classList.add('ski');
            }
            if (evt.type.includes('SKI') || evt.type.includes('VELO')) {
                korients++;
                if (evt.type.includes('SKI')) {
                    skiEvents++;
                }
                if (evt.type.includes('VELO')) {
                    veloEvents++;
                }
            } else {
                kothers++;
                otherEvents++;
            }
        }
        if (y !== prevYear) {
            prevYear = y;
            idx = 0;
        }
        td(evt, row, buildNumber(evt, idx++));
        td(evt, row, buildEventDate(evt, true));
        // название ведёт на страницу события (event.html), сайт события - иконка за ним
        td(evt, row, buildEventStart(evt, false, false, true));
        td(evt, row, buildEventPlace(evt));
        td(evt, row, buildEventType(evt, true));
        if (!onlyOneSport) {
            td(evt, row, buildEventResults(evt));
            td(evt, row, buildEventReports(evt, true));
            td(evt, row, buildEventInfo(evt));
        }
        tbody.appendChild(row);

        prevDate = currentDate;
    }
    buildMonth(grouping);
    alignMonthRows();
    document.body.style.cursor = 'default';

    const div = document.querySelector('.o-sheet-roof-stat');
    if (div) {
        function putValue(id, value) {
            document.getElementById(id).innerText = value;
        }
        putValue('total_events', totalEvents);
        putValue('orient_events', orientEvents);
        putValue('rogaine_events', rogaineEvents);
        putValue('velo_events', veloEvents);
        putValue('ski_events', skiEvents);
        putValue('other_events', otherEvents);
        div.style.display = 'block';
    }
}

// Заполняет заголовок только что закончившейся группы: «О К Т Я Б Р Ь   1992»
// (между месяцем и годом три &nbsp;) или «1992» и справа — ненулевые
// счётчики по видам. Капс и разрядку букв месяца задаёт CSS (text-transform,
// letter-spacing), а не пробелы в тексте, — так месяц находится поиском по
// странице; год без разрядки. Внешний вид — css/theme.css (десктоп)
// и css/calendar-mobile.css (карточки).
function buildMonth(grouping) {
    if (prevDate && monthTD) {
        const year = prevDate.getFullYear();
        let title = `<span class="month-year">${year}</span>`;
        if (grouping === 'month') {
            const monthName = prevDate.toLocaleString('ru', {month: 'long'});
            title = `<span class="month-name">${monthName}</span>&nbsp;&nbsp;&nbsp;` + title;
        }
        let counts = '';
        if (!onlyOneSport) {
            counts = [['ориенты', korients], ['рогейны', krogaines], ['прочие', kothers]]
                .filter(([, n]) => n > 0)
                .map(([label, n]) => `${label}: ${n}`)
                .join(' · ');
        }
        monthTD.innerHTML = (counts ? `<span class="month-counts">${counts}</span>` : '') + title;
        korients = krogaines = kothers = 0;
    }
}

// Подпись в строке месяца выравнивается по тексту колонки «Дата»: ширина
// колонки № зависит от данных (номер + значок вида), поэтому отступ меряем
// по первой строке старта и отдаём в CSS через --o-month-indent.
function alignMonthRows() {
    const table = tbody.closest('table');
    // без :has() — его поддерживают не все браузеры, а в querySelector
    // неподдерживаемый селектор бросает исключение
    const eventRow = Array.from(tbody.rows).find(row => !row.querySelector('td.month-row'));
    const dateCell = eventRow && eventRow.cells[1];
    if (!table || !dateCell || !dateCell.offsetWidth) {
        return;
    }
    const indent = dateCell.offsetLeft + parseFloat(getComputedStyle(dateCell).paddingLeft || '0');
    table.style.setProperty('--o-month-indent', `${Math.round(indent)}px`);
}

let monthAlignFrame = 0;
window.addEventListener('resize', () => {
    cancelAnimationFrame(monthAlignFrame);
    monthAlignFrame = requestAnimationFrame(alignMonthRows);
});

// Жирное начертание важных и «моих» стартов раньше делалось здесь: каждая
// ячейка оборачивалась в <b>. Теперь признаки живут классами строки
// (.major / .my-event), а начертание задаёт CSS. Заодно ушли восемь
// вызовов isMajor() на строку — по одному на ячейку.
function td(evt, row, html) {
    const td = document.createElement('td');
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
        } else if (event.type.includes('INDOOR')) {
            icon = '&nbsp;🏠';
        }
    }
    if (event.price === 1) {
        icon += '&nbsp;💰';
    }
    let checkbox = '', myEvent = '', isMyEvent = false;
    if (event.id) {
        if (myEdit) {
            const checked = myEvents.includes(event.id) ? ' checked' : '';
            checkbox = `<input class="my-checkbox" type="checkbox" id="${event.id}" name="only-my" ${checked} onclick="saveMy();" />&nbsp;`;
        } else {
            isMyEvent = myEvents.includes(event.id);
        }
    }
    if (HAS_ME_PARAM && (event.strava || event.me)) {
        isMyEvent = true;
    }
    if (isMyEvent) {
        const mySign = (onlyOneSport ? '⛷' : '◪');
        myEvent = `&nbsp;<span class="my-cp">${mySign}</span>`;
    }
    return `${i + 1}${icon}${myEvent}${checkbox}`;
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

function writeStickyHeader() {
    function initCalendarFloatingHeader() {
        const table = document.querySelector('table');
        if (!table) {
            console.warn('calendar table not found');
            return;
        }

        const headerRow =
            table.querySelector('thead tr') ||
            table.querySelector('tr');

        if (!headerRow) {
            console.warn('calendar header row not found');
            return;
        }

        const floating = document.createElement('div');
        floating.id = 'calendar-floating-header';
        floating.setAttribute('aria-hidden', 'true');

        const floatingTable = document.createElement('table');
        const floatingTbody = document.createElement('tbody');
        const floatingRow = headerRow.cloneNode(true);

        floatingTbody.appendChild(floatingRow);
        floatingTable.appendChild(floatingTbody);
        floating.appendChild(floatingTable);
        document.body.appendChild(floating);

        let rafId = null;

        function getVisualViewportBox() {
            if (window.visualViewport) {
                return {
                    left: window.visualViewport.offsetLeft || 0,
                    top: window.visualViewport.offsetTop || 0,
                    width: window.visualViewport.width,
                    height: window.visualViewport.height
                };
            }

            return {
                left: 0,
                top: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }

        function syncFloatingHeader() {
            rafId = null;

            const viewport = getVisualViewportBox();

            const tableRect = table.getBoundingClientRect();
            // Меряем ячейку, а не строку: position: sticky задан у thead th, и при прокрутке
            // .o-sheet-wrapper строка уезжает вверх, а ячейки остаются на месте. По строке
            // плавающая шапка включалась поверх «липкой» (десктоп с сенсорным экраном,
            // где isMobile === true). Плавающая нужна, только когда ушли сами ячейки.
            const headerRect = (headerRow.querySelector('th, td') || headerRow).getBoundingClientRect();

            const viewportTop = viewport.top;
            const viewportLeft = viewport.left;
            const viewportBottom = viewport.top + viewport.height;

            const tableTop = tableRect.top;
            const tableBottom = tableRect.bottom;

            const headerHasGoneAboveScreen = headerRect.bottom <= viewportTop;
            const tableIsStillOnScreen = tableBottom > viewportTop && tableTop < viewportBottom;

            const shouldShow = headerHasGoneAboveScreen && tableIsStillOnScreen;

            floating.classList.toggle('is-visible', shouldShow);

            if (!shouldShow) return;

            const originalCells = Array.from(headerRow.children);
            const floatingCells = Array.from(floatingRow.children);

            originalCells.forEach((cell, index) => {
                const floatingCell = floatingCells[index];
                if (!floatingCell) return;

                const rect = cell.getBoundingClientRect();

                floatingCell.style.width = `${rect.width}px`;
                floatingCell.style.minWidth = `${rect.width}px`;
                floatingCell.style.maxWidth = `${rect.width}px`;
                floatingCell.style.height = `${rect.height}px`;
            });

            floatingTable.style.width = `${tableRect.width}px`;

            // Важная часть:
            // tableRect.left сохраняет горизонтальное положение таблицы,
            // viewport.left/top учитывают zoom и сдвиг visual viewport.
            const x = tableRect.left - viewportLeft;
            const y = viewportTop;

            floating.style.width = `${viewport.width}px`;
            floating.style.height = `${headerRect.height}px`;
            floating.style.transform = `translate3d(${Math.round(viewportLeft)}px, ${Math.round(y)}px, 0)`;

            floatingTable.style.transform = `translate3d(${Math.round(x)}px, 0, 0)`;
        }

        function scheduleSync() {
            if (rafId !== null) return;
            rafId = requestAnimationFrame(syncFloatingHeader);
        }

        window.addEventListener('scroll', scheduleSync, { passive: true });
        window.addEventListener('resize', scheduleSync);
        window.addEventListener('orientationchange', scheduleSync);

        if (window.visualViewport) {
            window.visualViewport.addEventListener('scroll', scheduleSync, { passive: true });
            window.visualViewport.addEventListener('resize', scheduleSync);
        }

        // На случай, если календарь после загрузки сам прокручивается к текущей дате.
        scheduleSync();
        setTimeout(scheduleSync, 100);
        setTimeout(scheduleSync, 500);
        setTimeout(scheduleSync, 1000);
        setTimeout(scheduleSync, 2000);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCalendarFloatingHeader);
    } else {
        initCalendarFloatingHeader();
    }
}
