var options = {
    chart: {
      height: 210,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      lineCap: "round",
      width: 3,
    },
    series: [
      {
        name: "Walking",
        data: [0, 30, 20, 80, 120],
      },
      {
        name: "Cycling",
        data: [0, 10, 70, 30, 60],
      }
    ],
    grid: {
      borderColor: "#d8dee6",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    colors: ["#6a31a4", "#baa0d6"],
    markers: {
      size: 0,
      opacity: 0.3,
      colors: ["#6a31a4", "#baa0d6"],
      strokeColor: "#ffffff",
      strokeWidth: 1,
      hover: {
        size: 7,
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " " + "hours";
        },
      },
    },
  };
  
  var chart = new ApexCharts(document.querySelector("#myReports"), options);
  
  chart.render();