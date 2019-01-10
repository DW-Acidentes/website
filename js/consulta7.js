$(function(){
  $('input[type="checkbox"').change(function(e){
    if (!e.target.checked) {
      meses.splice(meses.indexOf(e.target.value), 1);
    }
    else {
      meses.push(e.target.value);
    }
  });

  $('#filtrar').click(function(){
    $.ajax({
      type: "POST",
      url: 'database/query.php',
      data: {
        select: 'consulta7',
        meses: '"' + meses.toString().replace(/,/g, '","') + '"'
      },
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

          if (listaData.length === 0) {
            $('#grafico').hide();
          } else {
            $('#grafico').show();
          }
          
          pieChart.data.labels = listaLabel;
          pieChart.data.datasets.data = listaData;

          pieChart.update();
        }
      }
    })
  })

})
const meses = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
const data = {
  select: 'consulta7',
}
let pieChart;
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
        }
      };
      // Create the chart
      var pieChartCanvas = $("#grafico").get(0).getContext("2d");
      pieChart = new Chart(pieChartCanvas, {
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