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

// строит табличку с инфой об авторах-составителях
function renderMapsTable() {
    let totalEvents = 0, orientEvents = 0, rogaineEvents = 0, veloEvents = 0, skiEvents = 0, otherEvents = 0;
    tbody.innerHTML = '';

    let idx = 0;
    let prevYear = 0;
    let currentMonth = -1, currentYear = -1;
    for (const evt of oEvents) {
        if (onlyMy && !evt.strava && !evt.my && (!evt.id || !myEvents.includes(evt.id))) {
            continue;
        }

        if (validateEvent(evt)) {
            totalEvents++;
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
                if (evt.type.includes('SKI') || evt.type.includes('VELO')) {
                    korients++;
                    if (evt.type.includes('SKI')) {
                        skiEvents++;
                    }
                    if (evt.type.includes('VELO')) {
                        veloEvents++;
                    }
                } else {
                    otherEvents++;
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

        // Важно: выносим кнопку из возможных контейнеров таблицы.
        // У position: fixed бывают проблемы, если предки имеют transform/filter/perspective.
        document.body.appendChild(backButton);

        let rafId = null;

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

        backButton.addEventListener('click', forceScrollToStart);

        window.addEventListener('scroll', scheduleUpdate, { passive: true });
        window.addEventListener('resize', scheduleUpdate);
        window.addEventListener('orientationchange', scheduleUpdate);

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
            const headerRect = headerRow.getBoundingClientRect();

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