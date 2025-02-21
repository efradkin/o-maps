
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
}

// Ссылка на тело таблицы
const tbody = document.querySelector('.o-main-table tbody');

// строит табличку с инфой об авторах-составителях
function renderMapsTable() {
    tbody.innerHTML = '';

    for (let i = 0; i < oMaps.length; i++) {
        let map = oMaps[i];
        const row = document.createElement('tr');
        td(row, i + 1);
        td(row, '<a href="' + mapLink(map.url) + '" target="_blank">' + map.name + '</a>');
        td(row, safe(map.year));
        td(row, map.start ? starts[map.start].name : '');
        td(row, buildDownloadLinks(map.link));
        td(row, safe(map.info));
        td(row, map.area.toFixed(2));
        td(row, buildGpsLinks(map));
        td(row, authorLabel(authors[map.author]));
        td(row, buildOwners(map));
        td(row, map.types);
        tbody.appendChild(row);
    }
    document.body.style.cursor = 'default';
}

function td(row, html) {
    const td = document.createElement('td');
    td.innerHTML = html;
    row.appendChild(td);
}

function sortMapsTable() {
    document.body.style.cursor = 'wait';
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