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
    oEvents = oEvents.filter(event => event.major);
}
if (HAS_ONLY_ME_PARAM) {
    oEvents = oEvents.filter(event => event.me !== undefined || event.strava !== undefined);
}
if (OWNER_PARAM) {
    oEvents = oEvents.filter(event => event.owner && event.owner === OWNER_PARAM);
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
    let currentMonth = -1, currentYear = -1;
    for (const evt of oEvents) {
        if (onlyMy && !evt.strava && !evt.my && (!evt.id || !myEvents.includes(evt.id))) {
            continue;
        }

        if (validateEvent(evt)) {
            currentDate = new Date(evt.date);
            let month = currentDate.getMonth();
            const y = currentDate.getFullYear();
            if (currentSort === 'date' && (month !== currentMonth || y !== currentYear)) {
                if (monthTD) {
                    buildMonth();
                }
                currentMonth = month;
                currentYear = y;
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
            if (!evt.type || evt.type.includes('ORIENT') || evt.type.includes('INDOOR')) {
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
            if (y !== prevYear) {
                prevYear = y;
                idx = 0;
            }
            td(evt, row, buildNumber(evt, idx++));
            td(evt, row, buildEventDate(evt));
            td(evt, row, buildEventStart(evt));
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
    if (isMajor(evt) || (evt.id && myEvents.includes(evt.id))) {
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
    return `${checkbox}${i + 1}${icon}${myEvent}`;
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

function writeBackToStartButton() {
    function initBackToStartButton() {
        const backButton = document.getElementById('back-to-start');

        if (!backButton) {
            console.warn('back-to-start button not found');
            return;
        }

        function getScrollX() {
            return (
                window.scrollX ||
                window.pageXOffset ||
                document.documentElement.scrollLeft ||
                document.body.scrollLeft ||
                0
            );
        }

        function getScrollY() {
            return (
                window.scrollY ||
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0
            );
        }

        function updateBackButtonVisibility() {
            const x = getScrollX();
            const y = getScrollY();

            const shouldShow = y > 150 || x > 20;

            backButton.classList.toggle('is-visible', shouldShow);
        }

        function scrollToPageStart(event) {
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

            // Временно отключаем smooth scroll, чтобы не было "недокрутки".
            html.style.scrollBehavior = 'auto';
            body.style.scrollBehavior = 'auto';

            function getScrollTargets() {
                const targets = new Set();

                targets.add(document.scrollingElement);
                targets.add(document.documentElement);
                targets.add(document.body);

                document.querySelectorAll('*').forEach(el => {
                    if (
                        el.scrollTop > 0 ||
                        el.scrollLeft > 0 ||
                        el.scrollHeight > el.clientHeight ||
                        el.scrollWidth > el.clientWidth
                    ) {
                        targets.add(el);
                    }
                });

                return Array.from(targets).filter(Boolean);
            }

            function forceScrollToStart() {
                window.scrollTo(0, 0);

                getScrollTargets().forEach(el => {
                    try {
                        if (typeof el.scrollTo === 'function') {
                            el.scrollTo(0, 0);
                        }

                        el.scrollTop = 0;
                        el.scrollLeft = 0;
                    } catch (e) {
                        // Игнорируем элементы, которые браузер не даёт прокрутить напрямую.
                    }
                });
            }

            // Несколько кадров подряд: это гасит незавершённую smooth-анимацию
            // и возможную прокрутку, которую делает другой скрипт страницы.
            let frame = 0;

            function repeatForceScroll() {
                forceScrollToStart();

                frame += 1;

                if (frame < 12) {
                    requestAnimationFrame(repeatForceScroll);
                } else {
                    setTimeout(forceScrollToStart, 50);
                    setTimeout(forceScrollToStart, 150);
                    setTimeout(forceScrollToStart, 300);

                    setTimeout(() => {
                        html.style.scrollBehavior = oldHtmlScrollBehavior;
                        body.style.scrollBehavior = oldBodyScrollBehavior;
                    }, 400);
                }
            }

            repeatForceScroll();
        }

        backButton.addEventListener('click', scrollToPageStart);

        window.addEventListener('scroll', updateBackButtonVisibility, { passive: true });
        document.addEventListener('scroll', updateBackButtonVisibility, { passive: true, capture: true });
        window.addEventListener('resize', updateBackButtonVisibility);

        updateBackButtonVisibility();

        setTimeout(updateBackButtonVisibility, 100);
        setTimeout(updateBackButtonVisibility, 500);
        setTimeout(updateBackButtonVisibility, 1000);
        setTimeout(updateBackButtonVisibility, 2000);
        setTimeout(updateBackButtonVisibility, 4000);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initBackToStartButton);
    } else {
        initBackToStartButton();
    }
}