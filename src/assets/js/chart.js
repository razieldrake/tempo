
window.chartColors = {
    primary: '#d0bb81',
    secondary: '#5b6070',
    default: '#e0e0e0',
    error: '#e9595b',
    valid: '#3aa99e'
};

window.randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
}

var dataBar = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
                type: 'bar',
                label: 'Dataset 1',
                backgroundColor: window.chartColors.secondary,
                data: [
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(),
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor()
                ]
            }, {
            type: 'bar',
            label: 'Dataset 2',
            backgroundColor: window.chartColors.default,
            data: [
                randomScalingFactor(), 
                randomScalingFactor(), 
                randomScalingFactor(), 
                randomScalingFactor(), 
                randomScalingFactor(), 
                randomScalingFactor(), 
                randomScalingFactor(),
                randomScalingFactor(), 
                randomScalingFactor(), 
                randomScalingFactor(), 
                randomScalingFactor(), 
                randomScalingFactor()
            ]
        }
    ]
};
var dataLine = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
            type: 'line',
            label: 'Dataset 1',
            borderColor: window.chartColors.primary,
            borderWidth: 2,
            fill: true,
            backgroundColor: 'rgba(52, 152, 219, 0)',
            data: [
                randomScalingFactor(), 
                randomScalingFactor(), 
                randomScalingFactor(), 
                randomScalingFactor(), 
                randomScalingFactor(), 
                randomScalingFactor(), 
                randomScalingFactor(),
                randomScalingFactor(), 
                randomScalingFactor(), 
                randomScalingFactor(), 
                randomScalingFactor(), 
                randomScalingFactor()
            ]
        }, {
            type: 'line',
            label: 'Dataset 2',
            borderColor: window.chartColors.default,
            backgroundColor: 'rgba(142, 155, 161, 0)',
            data: [
                randomScalingFactor(), 
                randomScalingFactor(), 
                randomScalingFactor(), 
                randomScalingFactor(), 
                randomScalingFactor(), 
                randomScalingFactor(), 
                randomScalingFactor(),
                randomScalingFactor(), 
                randomScalingFactor(), 
                randomScalingFactor(), 
                randomScalingFactor(), 
                randomScalingFactor()
            ]
        }
    ]
};
var dataPie = {
    type: 'pie',
    data: {
        datasets: [{
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
            backgroundColor: [
                window.chartColors.secondary,
                window.chartColors.error,
                window.chartColors.valid,
                window.chartColors.default,
            ],
            label: 'Dataset 1'
        }]
    },
    options: {
        responsive: true
    }
};
var dataDonut = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
            backgroundColor: [
                window.chartColors.secondary,
                window.chartColors.valid,
                window.chartColors.default,
            ],
            label: 'Dataset 1'
        }]
    },
    options: {
        responsive: true
    }
};
$(document).ready(function() {
    var ctxBar = document.getElementById("canvas-bar").getContext("2d");
    window.myMixedChart = new Chart(ctxBar, {
        type: 'bar',
        data: dataBar,
        options: {
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: true
            }
        }
    });

    var ctxLine = document.getElementById("canvas-line").getContext("2d");
    window.myMixedChart = new Chart(ctxLine, {
        type: 'line',
        data: dataLine,
        options: {
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: true
            }
        }
    });

    var ctxPie = document.getElementById("canvas-pie").getContext("2d");
    window.myPie = new Chart(ctxPie, dataPie);

    var ctxDonut = document.getElementById("canvas-donut").getContext("2d");
    window.myPie = new Chart(ctxDonut, dataDonut);
});