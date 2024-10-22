var options = {
    series: [75],
    chart: {
      height: 320,
      type: 'radialBar',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: '70%',
          background: '#fff',
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: 'front',
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24
          }
        },
        track: {
          background: '#fff',
          strokeWidth: '60%',
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35
          }
        },
  
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: '#333',
            fontSize: '16px'
          },
          value: {
            formatter: function (val) {
              return parseInt(val);
            },
            color: '#111',
            fontSize: '36px',
            show: true,
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: [],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
        colorStops: [
          {
            offset: 0,
            color: "#5b4da4",
            opacity: 1
          },
          {
            offset: 20,
            color: "#7c71b6",
            opacity: 1
          },
          {
            offset: 60,
            color: "#9d94c8",
            opacity: 1
          },
          {
            offset: 100,
            color: "#bdb8db",
            opacity: 1
          }
        ],
      }
    },
    stroke: {
      lineCap: 'round'
    },
    labels: ['Percent'],
  };
  
  var chart = new ApexCharts(document.querySelector("#avgSleep"), options);
  chart.render();