const YEAR_PARAM = urlParams.get('year');

let hasAuthors = false;
let hasPlanners = false;

window.onload = function() {

    if (YEAR_PARAM && isDocumentsPage()) {
        oMaps = oMaps.filter(m => {
            let y = year(m);
            return (y && YEAR_PARAM === y.toString());
        });
    }

    if (!isUnknownPage()) {
        oMaps.sort((a, b) => (a.info || '').localeCompare(b.info || ''))
            .sort((a, b) => (a.startYear || (a.year || 0)) - (b.startYear || (b.year || 0)));
        if (!isDocumentsPage()) {
            oMaps.sort((a, b) => (a.name || '').localeCompare((b.name || '')));
        }
    }

    // Навешиваем обработчик на заголовок таблицы
    document.querySelectorAll('th.sortable').forEach(
        (element) => {
            element.addEventListener('click', sortMapsTable);
        }
    );

    // Изначальный рендеринг таблицы
    renderMapsTable();

    if (START_NAME_PARAM && !isDocumentsPage()) {
        if (!hasAuthors) {
            document.querySelector('.o-sheet th:nth-child(9)').innerHTML = '&nbsp;';
            document.querySelector('.o-sheet th:nth-child(9)').style.maxWidth = 0;
        }
        if (!hasPlanners) {
            document.querySelector('.o-sheet th:nth-child(10)').innerHTML = '&nbsp;';
            document.querySelector('.o-sheet th:nth-child(10)').style.maxWidth = 0;
        }
    }
    if ((START_NAME_PARAM || isDocumentsPage() && !isUnknownPage())) {
        document.querySelector('.o-sheet').classList.add("start-sheet");
        let th = document.getElementById(isUnknownPage() ? 'name-column' : 'year-column');
        th.click();
    }
}

// Фильтрация массива. Оставляем только карты, соответствующие критерию запроса (есди он задан).
if (!isDocumentsPage() &&
    (MAP_NAME_PARAM || TYPE_PARAM || START_NAME_PARAM || OWNER_PARAM || AUTHOR_PARAM || PLANNER_PARAM ||
        TRACK_NAME_PARAM || TRACK_TYPE_PARAM || TRACK_MONTH_PARAM || HAS_RETRO_PARAM || HAS_OCAD_PARAM)) {
    oMaps = oMaps.filter(m => (m.layer !== undefined));
}

// Ссылка на тело таблицы
const tbody = document.querySelector('.o-main-table tbody');

if (START_NAME_PARAM) {
    // Листбокс выбора соревнований
    let selector = document.getElementById('start_selector');
    if (selector) {
        selector.value = START_NAME_PARAM;
    }
    // Кнопка перехода на оглавление карт соревнования
    let link = document.querySelector('.stat-map-link-right');
    if (START_NAME_PARAM !== 'major' && link) {
        link.href = './start.html?start=' + START_NAME_PARAM;
        link.style.display = 'block';
    }
}

if (TYPE_PARAM) {
    // Листбокс выбора типа
    let selector = document.getElementById('type_selector');
    if (selector) {
        selector.value = TYPE_PARAM;
    }
}

// строит табличку с инфой об авторах-составителях
function renderMapsTable() {
    const rusOnly = (typeof onlyRus !== 'undefined') && onlyRus;
    tbody.innerHTML = '';

    for (let i = 0; i < oMaps.length; i++) {
        let m = oMaps[i];

        if (rusOnly && m.lng && (m.lng !== 'rus')) {
            continue;
        }

        const row = document.createElement('tr');
        td(m, row, i + 1);
        td(m, row, buildName(m));
        td(m, row, buildYear(m));
        if (!isUnknownPage()) {
            td(m, row, buildStart(m));
        }
        td(m, row, buildDownloadLinks(m.link, m.links));
        td(m, row, buildInfo(m));
        if (!isDocumentsPage()) {
            td(m, row, m.area ? m.area.toFixed(2) : '');
            if (!mapsOnStore) {
                td(m, row, buildGpsLinks(m));
            }
        }
        if (!isUnknownPage()) {
            let authors = buildAuthors(m, true);
            if (authors) {
                hasAuthors = true;
            }
            td(m, row, authors);
        }
        if (!mapsOnStore) {
            if (!isDocumentsPage()) {
                let planners = buildPlanners(m);
                if (planners) {
                    hasPlanners = true;
                }
                td(m, row, planners);
                td(m, row, buildOwners(m, true));
                td(m, row, getTypesList(m));
            }
        } else {
            td(m, row, m.qtty);
        }
        tbody.appendChild(row);
    }
    document.body.style.cursor = 'default';
}

function td(m, row, html) {
    const td = document.createElement('td');
    td.innerHTML = (isMajor(m) ? '<b>' : '') + html + (isMajor(m) ? '</b>' : '');
    row.appendChild(td);
}

function buildName(m) {
    let result = '';
    let logo = m.logo;
    if (m.owner && owners[m.owner] && owners[m.owner].logo) {
        logo = owners[m.owner].logo;
    }
    if (logo) {
        result += '<img src="./logo/' + logo + '" alt="" class="sheet-icon" /> ';
    }
    if (m.outdated) {
        result += '<s>';
    }
    let name = m.name ?? 'Нечто';
    const regionRequired = (typeof regionViewRequired !== 'undefined') && regionViewRequired;
    if (regionRequired) {
        if (m.region) {
            name = regions[m.region] + ', ' + name;
        } else if (m.start && starts[m.start] && starts[m.start].region) {
            name = regions[starts[m.start].region] + ', ' + name;
        }
    }
    if (m.about) {
        name = `<a href="${m.about}">${name}</a>`;
    }
    if (m.url) {
        const url = (typeof directURLs !== 'undefined') && directURLs ? m.url : mapLink(m.url, m);
        result += name + ' <a href="' + url + '">🗺️</a>';
    } else {
        result += name;
    }
    if (m.me) {
        result += ` <sup class="my-race">${m.me}</sup>`;
    }
    if (m.lng) {
        result += ` <sup class="my-race">${m.lng}</sup>`;
    }
    if (m.outdated) {
        result += '</s>';
    }
    return result;
}

function buildYear(m) {
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
    return `<span class="doc-date">${result}</span>`
}

function buildStart(m) {
    let result = '';
    if (m.start) {
        if (Array.isArray(m.start)) {
            let start = '';
            for (const s of m.start) {
                if (start) {
                    start += '<br />';
                }
                start += oneStart(s);
            }
            return start;
        } else {
            return oneStart(m.start);
        }
    }
    return result;
}

function oneStart(s) {
    let result = '', start = starts[s];
    if (start) {
        if (start.logo) {
            result += '<img src="./logo/' + start.logo + '" alt="" class="sheet-icon" />&nbsp;';
        }
        result += start.name;
    }
    return result;
}

function buildInfo(m) {
    let result = '';
    if (m.restricted) {
        result += getRestrictedText(m);
    }
    if (m.info || m.date) {
        if (m.restricted) {
            result += '<br />'
        }
        if (!isDocumentsPage()) {
            if (m.date && m.date.length > 7) {
                const date = formatDate(m, false, true);
                result += `<b>${date}</b>` + (m.info ? '. ' : '');
            }
        }
        if (m.info) {
            result += m.info;
        }
    }
    if (isDocumentsPage()) {
        let planner = m.planner;
        if (!planner && m.start) {
            let start = m.start;
            if (start) {
                if (Array.isArray(start)) {
                    start = start[0];
                }
                if (starts[start].planner) {
                    planner = starts[start].planner;
                }
            }
        }
        if (planner) {
            if (Array.isArray(planner)) {
                let plnrs = '';
                for (const p of planner) {
                    if (plnrs) {
                        plnrs += ', ';
                    }
                    plnrs += planners[p].name;
                }
                result += ` Начальники дистанций: ${plnrs}.`;
            } else {
                result += ` Начальник дистанции - ${planners[planner].name}.`;
            }
        }
    }
    return result;
}

function sortMapsTable() {
    document.body.style.cursor = 'wait';

    const sortable = document.querySelector('.o-sheet th.sortable[data-order="asc"], .o-sheet th.sortable[data-order="desc"], .o-sheet th.sortable');
    if (sortable !== this) {
        sortable.dataset.order = '';
    }

    function safeStart(m) {
        if (Array.isArray(m.start))
            return m.start[0];
        else
            return m.start || '';
    }

    const isAscending = this.dataset.order === 'asc';
    switch (this.dataset.sort) {
        case 'name':
            oMaps.sort((a, b) => {
                let aName = a.name ?? 'Нечто';
                let bName = b.name ?? 'Нечто';
                return isAscending ? aName.localeCompare(bName) : bName.localeCompare(aName);
            });
            break;
        case 'start':
            oMaps.sort((a, b) => {
                return isAscending ? (safeStart(a)).localeCompare(safeStart(b)) : (safeStart(b)).localeCompare(safeStart(a));
            });
            break;
        case 'year':
            oMaps.sort((a, b) => {
                return isAscending ? (dateForCompare(a) - dateForCompare(b)) : (dateForCompare(b) - dateForCompare(a));
            });
            break;
        case 'area':
            oMaps.sort((a, b) => {
                return isAscending ? (a.area || 0) - (b.area || 0) : (b.area || 0) - (a.area || 0);
            });
            break;
        case 'qtty':
            oMaps.sort((a, b) => {
                return isAscending ? (a.qtty || 0) - (b.qtty || 0) : (b.qtty || 0) - (a.qtty || 0);
            });
            break;
    }
    this.dataset.order = isAscending ? 'desc' : 'asc';
    renderMapsTable();
}