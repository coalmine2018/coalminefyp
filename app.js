var gaugeOptions = {
    chart: {
        type: 'solidgauge',
        backgroundColor: 'rgba(0,0,0,0)'
    },

    title: null,
    pane: {
        center: ['50%', '85%'],
        size: '120%',
        startAngle: -90,
        endAngle: 90,
        background: {
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || 'black',
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
        }
    },
    exporting: {
        enabled: false
    },
    tooltip: {
        enabled: false
    },
    // the value axis
    yAxis: {
        stops: [
            [0.1, '#55BF3B'], // green
            [0.5, '#DDDF0D'], // yellow
            [0.9, '#DF5353'] // red
        ],
        lineWidth: 0,
        tickWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
            y: -70
        },
        labels: {
            y: 16
        }
    },
    plotOptions: {
        solidgauge: {
            dataLabels: {
                y: 5,
                borderWidth: 0,
                useHTML: true
            }
        }
    }
};
//for oxygen lower
var gaugeOptionsOxygen = {
    chart: {
        type: 'solidgauge',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    title: null,
    pane: {
        center: ['50%', '85%'],
        size: '120%',
        startAngle: -90,
        endAngle: 90,
        background: {
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || 'black',
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
        }
    },
    exporting: {
        enabled: false
    },
    tooltip: {
        enabled: false
    },
    // the value axis
    yAxis: {
        stops: [
            [0.09, '#DF5353'], // red
            [0.3, '#DDDF0D'], // yellow
            [0.5, '#55BF3B'],
            [0.7, '#DDDF0D'], // red
            [0.9, '#DF5353']// yellow
        ],
        lineWidth: 0,
        tickWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
            y: -70
        },
        labels: {
            y: 16
        }
    },
    plotOptions: {
        solidgauge: {
            dataLabels: {
                y: 5,
                borderWidth: 0,
                useHTML: true
            }
        }
    }
};
// The Humidity gauge
var chartHumi = Highcharts.chart('container-humi', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 200,
        labels: {
            style: {
                color: 'white'
            }
        },
        title: {
            text: '<span style="font-size:12px; color:white">Humidity</span>'
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Humidity',
        data: [80],
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px; color:white">{y}</span><br/>' +
                '<span style="font-size:12px;color:white">%</span>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: ' %'
        }
    }]

}));
//The temperature Gauge
var chartTemp = Highcharts.chart('container-temp', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 60,
        labels: {
            style: {
                color: 'white'
            }
        },
        title: {
            text: '<span style="font-size:12px; color:white">Temperature</span>'
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Temperature',
        data: [30],
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px; color:white">{y}</span><br/>' +
                '<span style="font-size:12px;color:white">C</span>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: 'C'
        }
    }]
}));
//The Methane Gauge
var chartMeth = Highcharts.chart('container-meth', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 700,
        tickPositioner: function () {
            return [this.min, this.max];
        },
        labels: {
            style: {
                color: 'white'
            }
        },
        title: {
            text: '<span style="font-size:12px; color:white">Methane</span>'
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Methane',
        data: [30],
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px;color:white">{y}</span><br/>' +
                '<span style="font-size:12px;color:white">ppm</span>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: 'ppm'
        }
    }]
}));

//The Oxygen(Lower) Gauge

var chartOxyLower = Highcharts.chart('container-oxy-low', Highcharts.merge(gaugeOptionsOxygen, {
    yAxis: {
        min: 0,
        max: 200,
        labels: {
            style: {
                color: 'white'
            }
        },
        title: {
            text: '<span style="font-size:12px; color:white">Oxygen</span>'
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'Oxygen',
        data: [30],
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px;color:white">{y}</span><br/>' +
                '<span style="font-size:12px;color:white">ppm</span>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: 'ppm'
        }
    }]

}));

//The Smoke Gauge

var chartSmo = Highcharts.chart('container-smo', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 200,
        labels: {
            style: {
                color: 'white'
            }
        },
        title: {
            text: '<span style="font-size:12px; color:white">Smoke</span>'
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'Smoke',
        data: [30],
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px;color:white">{y}</span><br/>' +
                '<span style="font-size:12px;color:white">ppm</span>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: 'ppm'
        }
    }]

}));

//The Carbon Gauge

var chartCar = Highcharts.chart('container-car', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 200,
        labels: {
            style: {
                color: 'white'
            }
        },
        title: {
            text: '<span style="font-size:12px; color:white">Carbon</span>'
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'Carbon',
        data: [30],
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px;color:white">{y}</span><br/>' +
                '<span style="font-size:12px;color:white">ppm</span>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: 'ppm'
        }
    }]

}));


// Bring life to the dials
// Speed

var point,
    newVal,
    flag = false,
    inc;







if (chartHumi) {
    firebase.database().ref('DHT11').on('value', function (dat) {

        point = chartHumi.series[0].points[0];
        inc = dat.val().Humidity;

        newVal = inc;


        point.update(newVal);


    })
}

if (chartTemp) {
    firebase.database().ref('DHT11').on('value', function (dat) {
        var tempStatus = document.getElementById('tempStatus')
        point = chartTemp.series[0].points[0];
        inc = dat.val().Temperature;


        newVal = inc;


        point.update(newVal);
        if (newVal >= 40) {

            tempStatus.innerHTML = "<h6 style='color:Red; '>High</h6>"
        }
        else {
            tempStatus.innerHTML = "<h6 style='color:Green''>Normal</h6>"
        }

    })
}

if (chartMeth) {
    firebase.database().ref('DHT11').on('value', function (dat) {
        var methStatus = document.getElementById('methStatus')

        point = chartMeth.series[0].points[0];
        inc = dat.val().Methane;


        newVal = inc;


        point.update(newVal);
        if (newVal >= 600) {
            methStatus.innerHTML = "<h6 style='color:Red''>High</h6>"
        }
        else {
            methStatus.innerHTML = "<h6 style='color:Green''>Normal</h6>"
        }


    })
}

if (chartOxyLower) {
    firebase.database().ref('DHT11').on('value', function (dat) {
        var oxyStatus = document.getElementById('oxyStatus')

        point = chartOxyLower.series[0].points[0];
        inc = dat.val().Oxygen;


        newVal = inc;


        point.update(newVal);
        if (newVal >= 180) {
            oxyStatus.innerHTML = "<h6 style='color:Red''>High</h6>"
        }
        else if (newVal < 25) {
            oxyStatus.innerHTML = "<h6 style='color:Red''>Low</h6>"
        }
        else {
            oxyStatus.innerHTML = "<h6 style='color:Green''>Normal</h6>"
        }



    })
}


if (chartCar) {
    firebase.database().ref('DHT11').on('value', function (dat) {
        var carStatus = document.getElementById('carStatus')
        point = chartCar.series[0].points[0];
        inc = dat.val().Carbon;


        newVal = inc;


        point.update(newVal);
        if (newVal >= 150) {
            carStatus.innerHTML = "<h6 style='color:Red''>High</h6>"
        }
        else {
            carStatus.innerHTML = "<h6 style='color:Green''>Normal</h6>"
        }



    })
}

if (chartSmo) {
    firebase.database().ref('DHT11').on('value', function (dat) {
        var smoStatus = document.getElementById('smoStatus')
        point = chartSmo.series[0].points[0];
        inc = dat.val().Smoke;


        newVal = inc;


        point.update(newVal);
        if (newVal >= 150) {
            smoStatus.innerHTML = "<h6 style='color:Red''>High</h6>"
        }
        else {
            smoStatus.innerHTML = "<h6 style='color:Green''>Normal</h6>"
        }


    })
}

