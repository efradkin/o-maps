
const mapTypes = ['Город', 'Парки', 'Лес', 'Рельеф', 'Зима', 'Вело', 'Рогейн'];

window.onload = function() {

    const mapsStat = [
        cityGroup.getLayers().length,
        parkGroup.getLayers().length,
        forestGroup.getLayers().length,
        reliefGroup.getLayers().length,
        winterGroup.getLayers().length,
        veloGroup.getLayers().length,
        rogaineGroup.getLayers().length,
    ];

    buildChart(
        document.getElementById('map_type_chart'),
        mapTypes,
        mapsStat,
        'Количество карт');
    document.getElementById('total_maps').innerHTML = oMaps.length;

    const mapAreas = [
        calcMapsArea(cityGroup),
        calcMapsArea(parkGroup),
        calcMapsArea(forestGroup),
        calcMapsArea(reliefGroup),
        calcMapsArea(winterGroup),
        calcMapsArea(veloGroup),
        calcMapsArea(rogaineGroup)
    ];

    buildChart(
        document.getElementById('map_area_chart'),
        mapTypes,
        mapAreas,
        'Площадь карт (км²)');
    document.getElementById('totalArea').innerHTML = mapAreas.reduce((a, c) => a + c).toFixed(0);

    buildChart(
        document.getElementById('mapYearChart'),
        ['2020-е', '2010-е', '2000-е', '1990-е', 'Ретро', '???'],
        calcYears(),
        'Год издания');

    buildAuthorsTable();
}

function calcMapsArea(group) {
    let area = 0;
    for (const m of group.getLayers()) {
        let latLngs = [m.getTopLeft(), m.getTopRight(), m.getBottomLeft()];
        area += getArea(latLngs);
    }
    return area;
}

function calcYears() {
    let y2020 = 0, y2010 = 0, y2000 = 0, y1990 = 0, yRetro = 0, yUnknown = 0;
    for (const m of oMaps) {
        if (m.year) {
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
    let authorsArray = Object.keys(authors).map((key) => authors[key]);
    authorsArray
        .sort((a, b) => a.name.localeCompare(b.name))
        .sort((a, b) => (b.count || 0) - (a.count || 0));
    var table = document.getElementById("authors_table");
    for (var i = 0; i < authorsArray.length; i++) {
        if (!authorsArray[i].count) {
            break;
        }
        let row = table.insertRow(i + 1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.innerHTML = authorLabel(authorsArray[i]);
        cell2.innerHTML = authorsArray[i].count;
        cell3.innerHTML = authorsArray[i].area.toFixed(2);
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
