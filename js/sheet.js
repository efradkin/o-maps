
const mapTypes = ['Город', 'Парки', 'Лес', 'Спец.', 'Рогейн'];

window.onload = function() {

    oMaps.sort((a, b) => (a.info || '').localeCompare(b.info || ''))
        .sort((a, b) => (a.startYear || (a.year || 0)) - (b.startYear || (b.year || 0)));
    if (!isDocumentsPage()) {
        oMaps.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Навешиваем обработчик на заголовок таблицы
    document.querySelectorAll('th.sortable').forEach(
        (element) => {
            element.addEventListener('click', sortMapsTable);
        }
    );

    // Изначальный рендеринг таблицы
    renderMapsTable();

    if (START_NAME_PARAM) {
        document.querySelector('.o-sheet').classList.add("start-sheet");
        let yearTH = document.getElementById('year-column');
        yearTH.click();
        yearTH.click();
    }
}

// Фильтрация массива. Оставляем только карты, соответствующие критерию запроса (есди он задан).
if (!isDocumentsPage()) {
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

// строит табличку с инфой об авторах-составителях
function renderMapsTable() {
    tbody.innerHTML = '';

    for (let i = 0; i < oMaps.length; i++) {
        let m = oMaps[i];
        const row = document.createElement('tr');
        td(m, row, i + 1);
        td(m, row, buildName(m));
        td(m, row, buildYear(m));
        td(m, row, buildStart(m));
        td(m, row, buildDownloadLinks(m.link, m.links));
        td(m, row, buildInfo(m));
        if (!isDocumentsPage()) {
            td(m, row, m.area.toFixed(2));
            if (!mapsOnStore) {
                td(m, row, buildGpsLinks(m));
            }
        }
        td(m, row, buildAuthors(m, true));
        if (!mapsOnStore) {
            if (!isDocumentsPage()) {
                td(m, row, buildPlanners(m));
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
    td.innerHTML = ((isMajor(m) && !isDocumentsPage()) ? '<b>' : '') + html + ((isMajor(m) && !isDocumentsPage()) ? '</b>' : '');
    row.appendChild(td);
}

function buildName(m) {
    let result = '';
    if (m.logo) {
        result += '<img src="./logo/' + m.logo + '" alt="" class="sheet-icon" /> ';
    }
    if (!isDocumentsPage()) {
        result += '<a href="' + mapLink(m.url, m.region) + '">' + m.name + '</a>';
    } else {
        result += m.name;
    }
    return result;
}

function buildYear(m) {
    if (m.year === 1 ) {
        return 'Ретро';
    }
    if (m.startYear) {
        return m.startYear;
    }
    return safe(m.year);
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
            return  oneStart(m.start);
        }
    }
    return result;
}

function oneStart(s) {
    let result = '', start = starts[s];
    if (start) {
        if (start.logo) {
            result += '<img src="./logo/' + start.logo + '" alt="" class="sheet-icon" /> ';
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
    if (m.info) {
        result += '<br />'
        result += m.info;
    }
    return result;
}

function sortMapsTable() {
    document.body.style.cursor = 'wait';

    const sortable = document.querySelector('.o-sheet th.sortable[data-order="asc"], .o-sheet th.sortable[data-order="desc"]');
    if (sortable !== this) {
        sortable.dataset.order = '';
    }

    const isAscending = this.dataset.order === 'asc';
    switch (this.dataset.sort) {
        case 'name':
            oMaps.sort((a, b) => {
                return isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
            });
            break;
        case 'start':
            oMaps.sort((a, b) => {
                return isAscending ? (a.start || '').localeCompare(b.start || '') : (b.start || '').localeCompare(a.start || '');
            });
            break;
        case 'year':
            oMaps.sort((a, b) => {
                return isAscending ? (a.startYear || (a.year || 0)) - (b.startYear || (b.year || 0)) : (b.startYear || (b.year || 0)) - (a.startYear || (a.year || 0));
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