function mybarplot() {
    $('#container').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Stacked bar chart'
        },
        xAxis: {
            categories: ["abruzzo","areonautica","bolzano","calabria","emilia","friuli","lazio","liguria","lombardia","marche","sardegna","sicilia","toscana","trentino","umbria"]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total fruit consumption'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [
  {
    name:   "1951",
    data: [ 0,38,42,169,38,88,24,105,52,45,157,79,182,31,33]
  },
  {
    name:  "1961",
    data: [0,55,40,140,32,86,31,80,58,42,141,72,169,32,23]
  },
  {
    name: "1971",
    data: [ 127,76,40,117, 36,106,22, 61, 45, 40, 136, 67, 133, 27, 0]
  },
  {
    name:   "1981",
    data: [ 74, 69, 0,45, 28, 67, 0, 0, 0, 38, 119, 42, 23, 2, 0]
  }
]
    });
}
