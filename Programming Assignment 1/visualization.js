var temChart = echarts.init(document.getElementById('temperature'));

function getData(raw, attribute) {
  return  raw.map(function (item) {
    return item[attribute];
  });
}

var years = data.map(function (item) {
  return item.Year;
})
var gTem = getData(data, 'Glob');
var nTem = getData(data, 'NHem');
var sTem = getData(data, 'SHem');

console.log(gTem);

// console.log(globalTem);

var option = {
  // TODO: set chart option
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      animation: false
    }
  },
  legend: {
    data: ['Global', 'North Hemi', 'South Hemi'],
    x: 'left'
  },
  dataZoom: [
    {
      show: true,
      realtime: true,
      xAxisIndex: [0],
      start: 0,
      end: 100
    },
    {
      show: true,
      realtime: true,
      yAxisIndex: [0],
      left: "93%",
      start: 0,
      end: 100
    },
    {
      type: 'inside',
      xAxisIndex: [0],
      realtime: true,
      start: 0,
      end: 100
    }
  ],
  xAxis: {
    type: 'category',
    boundaryGap: false,
    axisLine: {onZero: false},
    data: years
  },
  yAxis: {
    name: 'Temperature (Celsius)',
    type: 'value',
    max: 100,
    interval: 10
  },
  series: [
    {
      name: 'Global',
      type: 'line',
      hoverAnimation: false,
      showSymbol: false,
      data: gTem
    },
    {
      name: 'North Hemi',
      type: 'line',
      hoverAnimation: false,
      showSymbol: false,
      data: nTem
    },
    {
      name: 'South Hemi',
      type: 'line',
      hoverAnimation: false,
      showSymbol: false,
      data: sTem
    }
  ],
  color: ['#2ca02c', '#1f77b4', '#ff7f0e', '#546570', '#c4ccd3']
};

temChart.setOption(option);