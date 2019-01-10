
const data = {
    select: 'consulta7',
    
  }
  $.ajax({
    type: "POST",
    url: 'database/query.php',
    data: data,
    dataType: 'json',
    beforeSend: function() {
      $('#loading').show();
    },
    complete: function(res) {
      $('#loading').hide();
      const json = res.responseJSON;
      if (json !== undefined) {
        const listaData = [];
        const listaLabel = [];
        $.each(json, function(i, e) {
          listaData.push(e.qtd)
          listaLabel.push(e.causa_acidente)
        });
  
        var doughnutPieData = {
          datasets: [{
            data: listaData,
            backgroundColor: [
              random_rgba(0.5),
              random_rgba(0.5),
              random_rgba(0.5),
              random_rgba(0.5),
              random_rgba(0.5),
              random_rgba(0.5),
              random_rgba(0.5),
              random_rgba(0.5),
              random_rgba(0.5),
              random_rgba(0.5),
              random_rgba(0.5),
              random_rgba(0.5),
              random_rgba(0.5),
              random_rgba(0.5),
              random_rgba(0.5),
              random_rgba(0.5),
              random_rgba(0.5),
              random_rgba(0.5),
              random_rgba(0.5),
              random_rgba(0.5),
              random_rgba(0.5),
              random_rgba(0.5),
              random_rgba(0.5),
              random_rgba(0.5),
            ],
            borderColor: [
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
            ],
          }],
          labels: listaLabel
        };
        var doughnutPieOptions = {
          responsive: true,
          animation: {
            animateScale: true,
            animateRotate: true
          },
          // scales: {
          //   yAxes: [{
          //       ticks: {
          //           // Include a dollar sign in the ticks
          //           callback: function(value, index, values) {
          //               return '$' + value;
          //           }
          //       }
          //   }]
          // }
        };
        // Create the chart
        var pieChartCanvas = $("#grafico").get(0).getContext("2d");
        var pieChart = new Chart(pieChartCanvas, {
          type: 'pie',
          data: doughnutPieData,
          options: doughnutPieOptions
        });
      }
    }
  });
  
  
  function random_rgba(num) {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + num + ')';
  }