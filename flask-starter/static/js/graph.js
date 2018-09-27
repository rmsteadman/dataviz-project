var chart = c3.generate({
  bindto: '#chart',
  data: {
    x: 'x',
    //        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
    columns: [
      ['x', '2018-01-01', '2018-01-02', '2018-01-03', '2018-01-04', '2018-01-05', '2018-01-06'],
      //            ['x', '20180101', '20180102', '20180103', '20180104', '20180105', '20180106'],
      ['data1', 30, 200, 100, 400, 150, 250],
      ['data2', 130, 340, 200, 500, 250, 350]
    ]
  },
  axis: {
    x: {
      type: 'timeseries',
      tick: {
        format: '%Y-%m-%d'
      }
    }
  }
});

// Dynamically re-render the graph data
setTimeout(function () {
  chart.load({
    columns: [
      ['data3', 400, 500, 450, 700, 600, 500]
    ]
  });
}, 1500);

setTimeout(function () {
  chart.load({
    columns: [
      ['data1', 500, 100, 200, 300, 400, 500]
    ]
  });
}, 3000);

setTimeout(function () {
  chart.load({
    columns: [
      ['data2', 650, 400, 350, 100, 0, 250]
    ]
  });
}, 4500);

// Constantly 