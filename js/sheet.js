
const mapTypes = ['Город', 'Парки', 'Лес', 'Спец.', 'Рогейн'];

window.onload = function() {

    oMaps.sort((a, b) => (a.year || 0) - (b.year || 0))
        .sort((a, b) => a.name.localeCompare(b.name));

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
oMaps = oMaps.filter(m => (m.layer !== undefined));

// Ссылка на тело таблицы
const tbody = document.querySelector('.o-main-table tbody');

if (START_NAME_PARAM) {
    // Листбокс выбора соревнований
    let selector = document.getElementById('start_selector');
    if (selector) {
        selector.value = START_NAME_PARAM;
    }
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
        td(m, row, safe(m.year));
        td(m, row, buildStart(m));
        td(m, row, buildDownloadLinks(m.link));
        td(m, row, safe(m.info));
        td(m, row, m.area.toFixed(2));
        td(m, row, buildGpsLinks(m));
        td(m, row, buildAuthors(m, true));
        td(m, row, buildOwners(m, true));
        td(m, row, m.types);
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
    if (m.logo) {
        result += '<img src="./logo/' + m.logo + '" alt="" class="sheet-icon" /> ';
    }
    result += '<a href="' + mapLink(m.url, m.region) + '" target="_blank">' + m.name + '</a>';
    return result;
}

function buildStart(m) {
    let result = '';
    if (m.start && starts[m.start]) {
        if (starts[m.start].logo) {
            result += '<img src="./logo/' + starts[m.start].logo + '" alt="" class="sheet-icon" /> ';
        }
        result += starts[m.start].name;
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
                return isAscending ? (a.year || 0) - (b.year || 0) : (b.year || 0) - (a.year || 0);
            });
            break;
        case 'area':
            oMaps.sort((a, b) => {
                return isAscending ? (a.area || 0) - (b.area || 0) : (b.area || 0) - (a.area || 0);
            });
            break;
    }
    this.dataset.order = isAscending ? 'desc' : 'asc';
    renderMapsTable();
}