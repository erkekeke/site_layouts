Chart.defaults.global.legend.display = false;
new Chart(document.getElementById("chart"), {
    type: 'line',
    data: {
        labels: [12.08, 13.08, 14.08, 15.08, 16.08, 17.08, 18.08, 19.08, 20.08, 21.08],
        datasets: [{
            data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
            label: 'Активных пользователей',
            borderColor: "#FF6328",
            pointBorderWidth: 2,
            pointRadius: 4,
            pointBackgroundColor: "#fff",
            pointHoverBackgroundColor: "#FF6328",
            fill: true,
            backgroundColor: "#FF5C000F",

        }, {
            data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
            label: 'Посещений',
            borderColor: "#BD51C3",
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            pointBorderWidth: 2,
            pointRadius: 4,
            pointBackgroundColor: "#fff",
            backgroundColor: "#BD51C30F",
            pointHoverBackgroundColor: "#BD51C3",
        }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    borderWidth: 2,
                    borderDash: [16, 10],
                    color: "#C5C6C7",
                }
            }],
            yAxes: [{
                display: false
            }]
        },
        interaction: {
            mode: 'index'
        },
    }

});