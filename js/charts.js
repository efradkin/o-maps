const isGlobalTable = (typeof globalTable !== 'undefined') && globalTable;

const mapTypes = ['Город', 'Парки', 'Лес', 'Спец.', 'Рогейн'];

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

    buildAuthorsTable();
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

// строит табличку с инфой об авторах-составителях
function buildAuthorsTable() {
    // let authorsArray = Object.keys(authors).map((key) => authors[key]);
    let authorsEntries = Object.entries(authors);
/*
    authorsArray
        .sort((a, b) => a.name.localeCompare(b.name))
        .sort((a, b) => (b.count || 0) - (a.count || 0));
*/
    authorsEntries
        .sort((a, b) => a[1].name.localeCompare(b[1].name))
        .sort((a, b) => (b[1].count || 0) - (a[1].count || 0));

    if (isGlobalTable) {
        populateAuthorsRangesRegions();
    }

    var table = document.getElementsByClassName("o-main-table")[0];
    for (var i = 0; i < authorsEntries.length; i++) {
        let key = authorsEntries[i][0];
        let author = authorsEntries[i][1];
        if (!author.count) {
            continue;
        }
        const row = table.insertRow(i + 1);
        let idx = 0;
        insertTD(row, idx++, i + 1);
        insertTD(row, idx++, authorLabel(author, isGlobalTable));
        insertTD(row, idx++, author.count);
        insertTD(row, idx++, author.area.toFixed(2));
        if (isGlobalTable) {
            insertTD(row, idx++, buildPeriod(author));
            insertTD(row, idx++, prettyRegions(author.regions));
        }
        let href = authorLink(key, isGlobalTable);
        insertTD(row, idx++, '<a href="' + href + '" title="Карты автора"><img src="./images/external-link.png" alt="Карты автора" /></a>');
    }

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
