
const mapTypes = ['Город', 'Парки', 'Лес', 'Рельеф', 'Зима', 'Вело', 'Рогейн'];

window.onload = function buildCharts() {

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
        document.getElementById('mapTypeChart'),
        mapsStat,
        'Количество карт');
    document.getElementById('totalMaps').innerHTML = oMaps.length;

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
        document.getElementById('mapAreaChart'),
        mapAreas,
        'Площадь карт (км²)');
    document.getElementById('totalArea').innerHTML = mapAreas.reduce((a, c) => a + c).toFixed(0);
}

function calcMapsArea(group) {
    let area = 0;
    for (const m of group.getLayers()) {
        let latLngs = [m.getTopLeft(), m.getTopRight(), m.getBottomLeft()];
        area += parseFloat(getArea(latLngs));
    }
    return area;
}

function buildChart(ctx, data, label) {
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: mapTypes,
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
                            size: 14,
                        },
                    }
                },
                y: {
                    ticks: {
                        color: "black",
                        font: {
                            size: 14,
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
                            size: 28
                        }
                    }
                }
            }
        }
    });
}