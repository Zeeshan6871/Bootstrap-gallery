var options = {
    chart: {
      height: 270,
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        distributed: true,
        borderRadius: 2,
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 10,
      colors: ['rgba(198, 211, 220, .2)']
    },
    series: [{
      name: 'Weights',
      data: [190, 150, 120, 95]
    }],
    legend: {
      show: false,
    },
    xaxis: {
      categories: ['Jan-Mar', 'Apr-Jun', 'Jul-Sep', 'Oct-Dec'],
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'vertical',
        shadeIntensity: 0.8,
        gradientToColors: ["#5b4da4", "#6b5fad", "#7c71b6", "#8c82bf", "#9d94c8", "#ada6d2"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [20, 100]
      }
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " " + "lbs";
        },
      },
    },
    grid: {
      show: false,
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: false,
        }
      },
      padding: {
        top: 0,
        right: 0,
        bottom: -10,
        left: 0
      },
    },
    colors: ['#ffffff'],
  }
  var chart = new ApexCharts(
    document.querySelector("#weight"),
    options
  );
  chart.render();