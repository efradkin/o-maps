const isGlobalTable = (typeof globalTable !== 'undefined') && globalTable;

const mapTypes = ['Город', 'Парки', 'Лес', 'Спец.', 'Рогейн'];
let authorsTableData = [];

window.onload = function() {

    const mapsStat = [
        mapsStatObj.cityGroup.length,
        mapsStatObj.parkGroup.length,
        mapsStatObj.forestGroup.length,
        mapsStatObj.specialGroup.length,
        mapsStatObj.rogaineGroup.length,
    ];

    const mapTypeChartEl = document.getElementById('map_type_chart');
    if (mapTypeChartEl) {
        buildChart(
            mapTypeChartEl,
            mapTypes,
            mapsStat,
            'Количество карт');
        document.getElementById('total_maps').innerHTML = oMaps.length;
    }

    const mapAreas = [
        calcMapsArea(mapsStatObj.cityGroup),
        calcMapsArea(mapsStatObj.parkGroup),
        calcMapsArea(mapsStatObj.forestGroup),
        calcMapsArea(mapsStatObj.specialGroup),
    ];

    const mapAreaChartEl = document.getElementById('map_area_chart');
    if (mapAreaChartEl) {
        buildChart(
            mapAreaChartEl,
            mapTypes.filter(val => val !== 'Рогейн'),
            mapAreas,
            'Площадь спортивных карт (км²)');
        document.getElementById('totalArea').innerHTML = mapAreas.reduce((a, c) => a + c).toFixed(0);
    }
    let allRogaineAreaEl = document.getElementById("all_rogaine_area");
    if (allRogaineAreaEl != null) {
        allRogaineAreaEl.innerHTML = calcMapsArea(rogaineGroup).toFixed(0);
    }

    const mapYearChartEl = document.getElementById('mapYearChart');
    if (mapYearChartEl) {
        buildChart(
            mapYearChartEl,
            ['2020-е', '2010-е', '2000-е', '1990-е', 'Ретро', '???'],
            calcYears(),
            'Год издания');
    }

    prepareAuthorsTableData();

    const sortableHeaders = document.querySelectorAll('.o-sheet th.sortable');
    sortableHeaders.forEach((element) => {
        element.addEventListener('click', sortAuthorsTable);
    });

    const qttyTh = document.querySelector('.o-sheet th[data-sort="qtty"]');
    if (qttyTh) {
        qttyTh.click();
    } else {
        renderAuthorsTable();
    }
}

function calcMapsArea(group) {
    let area = 0;
    for (const m of (Array.isArray(group) ? group : group.getLayers())) {
        let latLngs = [m.getTopLeft(), m.getTopRight(), m.getBottomLeft()];
        area += getMapArea(latLngs);
    }
    return area;
}

function calcYears() {
    let y2020 = 0, y2010 = 0, y2000 = 0, y1990 = 0, yRetro = 0, yUnknown = 0;
    for (const m of oMaps) {
        let y = year(m);
        if (y && y > 1) {
            if (y < 1990) {
                yRetro++;
            } else
            if (y < 2000) {
                y1990++;
            } else
            if (y < 2010) {
                y2000++;
            } else
            if (y < 2020) {
                y2010++;
            } else {
                y2020++;
            }
        } else {
            yUnknown++;
        }
    }
    return [
        y2020, y2010, y2000, y1990, yRetro, yUnknown
    ]
}

function buildChart(ctx, labels, data, label) {
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: label,
                data: data,
                borderWidth: 1,
                borderColor: '#36A2EB',
                backgroundColor: '#9BD0F5',
            }]
        },
        options: {
            scales: {
                x: {
                    ticks: {
                        color: "black",
                        font: {
                            size: 12,
                        },
                    }
                },
                y: {
                    ticks: {
                        color: "black",
                        font: {
                            size: 12,
                        },
                        // stepSize: 1,
                        beginAtZero: true
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: "black",
                        font: {
                            size: 14
                        }
                    }
                }
            }
        }
    });
}

// готовит данные для сортируемой таблицы авторов
function prepareAuthorsTableData() {
    if (isGlobalTable) {
        populateAuthorsRangesRegions();
    }

    authorsTableData = Object.entries(authors)
        .filter(([, author]) => author.count)
        .map(([key, author]) => ({
            key: key,
            name: author.name || '',
            qtty: author.count || 0,
            area: author.area || 0,
            periodText: isGlobalTable ? buildPeriod(author) : '',
            regionsText: isGlobalTable ? prettyRegions(author.regions) : '',
            authorHtml: authorLabel(author, isGlobalTable),
            linkHtml: '<a href="' + authorLink(key, isGlobalTable) + '" title="Карты автора"><img src="./images/external-link.png" alt="Карты автора" /></a>'
        }))
        .sort((a, b) => a.name.localeCompare(b.name, 'ru'));

    updateMapsWoAuthorsPanel();
}

function renderAuthorsTable() {
    const tbody = document.querySelector('.o-main-table tbody');
    if (!tbody) {
        return;
    }

    tbody.innerHTML = '';

    for (let i = 0; i < authorsTableData.length; i++) {
        let author = authorsTableData[i];
        const row = document.createElement('tr');
        let idx = 0;

        insertTD(row, idx++, i + 1);
        insertTD(row, idx++, author.authorHtml);
        insertTD(row, idx++, author.qtty);
        insertTD(row, idx++, author.area.toFixed(2));

        if (isGlobalTable) {
            insertTD(row, idx++, author.periodText);
            insertTD(row, idx++, author.regionsText);
        }

        insertTD(row, idx++, author.linkHtml);
        tbody.appendChild(row);
    }

    document.body.style.cursor = 'default';
}

function sortAuthorsTable() {
    document.body.style.cursor = 'wait';

    document.querySelectorAll('.o-sheet th.sortable').forEach((element) => {
        if (element !== this) {
            element.dataset.order = '';
        }
    });

    const isAscending = this.dataset.order === 'asc';

    switch (this.dataset.sort) {
        case 'name':
            authorsTableData.sort((a, b) =>
                isAscending ? a.name.localeCompare(b.name, 'ru') : b.name.localeCompare(a.name, 'ru'));
            break;
        case 'qtty':
            authorsTableData.sort((a, b) =>
                isAscending ? a.qtty - b.qtty : b.qtty - a.qtty);
            break;
        case 'area':
            authorsTableData.sort((a, b) =>
                isAscending ? a.area - b.area : b.area - a.area);
            break;
        case 'period':
            authorsTableData.sort((a, b) =>
                isAscending ? a.periodText.localeCompare(b.periodText, 'ru') : b.periodText.localeCompare(a.periodText, 'ru'));
            break;
        case 'regions':
            authorsTableData.sort((a, b) =>
                isAscending ? a.regionsText.localeCompare(b.regionsText, 'ru') : b.regionsText.localeCompare(a.regionsText, 'ru'));
            break;
    }

    this.dataset.order = isAscending ? 'desc' : 'asc';
    renderAuthorsTable();
}

function updateMapsWoAuthorsPanel() {
    // панель количества карт, где автор не указан
    let mapsWoAuthors = 0;
    for (const m of oMaps) {
        if (isOrientMap(m)) {
            if (!m.author) {
                mapsWoAuthors++;
            }
        }
    }
    const mapsWoAuthorsEl = document.getElementById("no_authors_quantity");
    if (mapsWoAuthorsEl) {
        mapsWoAuthorsEl.innerHTML = mapsWoAuthors;
    }
}

function insertTD(row, index, content) {
    const cell = row.insertCell(index);
    cell.innerHTML = content;
}

let largestMap;
let oldestMap;
for (const m of oMaps) {
    if (isOrientMap(m)) {
        if (m.area && (!largestMap || (m.area > largestMap.area))) {
            largestMap = m;
        }
        let y = year(m);
        if ((y !== undefined && y > 1) && (!oldestMap || (y < year(oldestMap)))) {
            oldestMap = m;
        }
    }
}
const largestEl = document.getElementById("largest_map");
if (largestEl) {
    largestEl.setAttribute('href', mapLink(largestMap.url));
    largestEl.innerHTML = largestMap.name + ' (' + largestMap.area.toFixed(2) + 'км²)';
}

const oldestEl = document.getElementById("oldest_map");
if (oldestEl) {
    oldestEl.setAttribute('href', mapLink(oldestMap.url));
    oldestEl.innerHTML = oldestMap.name + ' (' + year(oldestMap) + ')';
}
