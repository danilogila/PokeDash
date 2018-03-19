var ctx = document.getElementById('battleChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['01/02', '02/02', '03/02', '04/02', '05/02', '06/02', '07/02', '08/02'],
    datasets: [{
      label: 'Wins',
      data: [0, 7, 10, 5, 15, 9, 18, 5],
      backgroundColor: "rgb(247, 207, 83)",
      lineTension: 0,
      
    }
]
  },
  options: { legend: { display: false },
  scales: {
    yAxes: [{
        gridLines: {
            lineWidth: 0,
            color: "rgba(0,0,0,0)"
        }
    }],
    xAxes: [{
        gridLines: {
            lineWidth: 0,
            color: "rgba(0,0,0,0)"
        }
    }]
}   


},
  
 
});