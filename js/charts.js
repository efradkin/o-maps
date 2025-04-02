
const mapTypes = ['Город', 'Парки', 'Лес', 'Спец.', 'Рогейн'];

window.onload = function() {

    const mapsStat = [
        mapsStatObj.cityGroup.length,
        mapsStatObj.parkGroup.length,
        mapsStatObj.forestGroup.length,
        mapsStatObj.specialGroup.length,
        mapsStatObj.rogaineGroup.length,
    ];

    buildChart(
        document.getElementById('map_type_chart'),
        mapTypes,
        mapsStat,
        'Количество карт');
    document.getElementById('total_maps').innerHTML = oMaps.length;

    const mapAreas = [
        calcMapsArea(mapsStatObj.cityGroup),
        calcMapsArea(mapsStatObj.parkGroup),
        calcMapsArea(mapsStatObj.forestGroup),
        calcMapsArea(mapsStatObj.specialGroup),
    ];

    buildChart(
        document.getElementById('map_area_chart'),
        mapTypes.filter(val => val !== 'Рогейн'),
        mapAreas,
        'Площадь спортивных карт (км²)');
    document.getElementById('totalArea').innerHTML = mapAreas.reduce((a, c) => a + c).toFixed(0);
    document.getElementById("all_rogaine_area").innerHTML = calcMapsArea(rogaineGroup).toFixed(0);

    buildChart(
        document.getElementById('mapYearChart'),
        ['2020-е', '2010-е', '2000-е', '1990-е', 'Ретро', '???'],
        calcYears(),
        'Год издания');

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
        if (m.year && m.year > 1) {
            if (m.year < 1990) {
                yRetro++;
            } else
            if (m.year < 2000) {
                y1990++;
            } else
            if (m.year < 2010) {
                y2000++;
            } else
            if (m.year < 2020) {
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
    var table = document.getElementsByClassName("o-main-table")[0];
    for (var i = 0; i < authorsEntries.length; i++) {
        let key = authorsEntries[i][0];
        let author = authorsEntries[i][1];
        if (!author.count) {
            continue;
        }
        let row = table.insertRow(i + 1);
        let cell0 = row.insertCell(0);
        let cell1 = row.insertCell(1);
        let cell2 = row.insertCell(2);
        let cell3 = row.insertCell(3);
        let cell4 = row.insertCell(4);
        cell0.innerHTML = i + 1;
        cell1.innerHTML = authorLabel(author);
        cell2.innerHTML = author.count;
        cell3.innerHTML = author.area.toFixed(2);
        let href = authorLink(key);
        cell4.innerHTML = '<a href="' + href + '" title="Карты автора" target="_blank"><img src="./images/external-link.png" alt="Карты автора" /></a>';
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
    document.getElementById("no_authors_quantity").innerHTML = mapsWoAuthors;
}

let largestMap;
let oldestMap;
for (const m of oMaps) {
    if (isOrientMap(m)) {
        if (m.area && (!largestMap || (m.area > largestMap.area))) {
            largestMap = m;
        }
        if ((m.year !== undefined && m.year > 1) && (!oldestMap || (m.year < oldestMap.year))) {
            oldestMap = m;
        }
    }
}
document.getElementById("largest_map").setAttribute('href', mapLink(largestMap.url));
document.getElementById("largest_map").innerHTML = largestMap.name + ' (' + largestMap.area.toFixed(2) + 'км²)';

document.getElementById("oldest_map").setAttribute('href', mapLink(oldestMap.url));
document.getElementById("oldest_map").innerHTML = oldestMap.name + ' (' + oldestMap.year + ')';
