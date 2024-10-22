var options = {
    series: [42, 47, 52, 58, 65],
    chart: {
      width: 370,
      type: 'polarArea'
    },
    labels: ['Treadmill', 'Aerobic', 'Stretching', 'Cycling', 'Weights'],
    fill: {
      opacity: 1
    },
    stroke: {
      width: 1,
      colors: undefined
    },
    colors: ["#5b4da4", "#6b5fad", "#7c71b6", "#8c82bf", "#9d94c8", "#ada6d2"],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'horizontal',
        shadeIntensity: 0.8,
        gradientToColors: ["#5b4da4", "#6b5fad", "#7c71b6", "#8c82bf", "#9d94c8", "#ada6d2"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [20, 100]
      }
    },
    yaxis: {
      show: false
    },
    legend: {
      position: 'bottom'
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " Million"
        }
      }
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0
        },
        spokes: {
          strokeWidth: 0
        },
      }
    },
  };
  
  var chart = new ApexCharts(document.querySelector("#progress"), options);
  chart.render();