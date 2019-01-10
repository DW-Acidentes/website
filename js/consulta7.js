
$('#loading').hide();

$(function() {
    var doughnutPieData = {
      datasets: [{
        data: [80, 40, 30],
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
          random_rgba(1),
          random_rgba(1),
          random_rgba(1),
          random_rgba(1),
          random_rgba(1),
          random_rgba(1),
          random_rgba(1),
          random_rgba(1),
          random_rgba(1),
          random_rgba(1),
          random_rgba(1),
          random_rgba(1),
          random_rgba(1),
          random_rgba(1),
          random_rgba(1),
          random_rgba(1),
          random_rgba(1),
          random_rgba(1),
          random_rgba(1),
          random_rgba(1),
          random_rgba(1),
          random_rgba(1),
          random_rgba(1),
          random_rgba(1),
        ],
      }],
  
      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
        'Agressão Externa',
        'Animais na Pista',
        'Avarias e/ou desgaste excessivo no pneu',
        'Carga excessiva e/ou mal acondicionada',
        'Condutor Dormindo',
        'Defeito Mecânico no Veículo',
        'Defeito na Via',
        'Deficiência ou não Acionamento do Sistema de Iluminação/Sinalização do Veículo',
        'Desobediência às normas de trânsito pelo condutor',
        'Desobediência às normas de trânsito pelo pedestre',
        'Falta de Atenção à Condução',
        'Falta de Atenção do Pedestre',
        'Fenômenos da Natureza',
        'Ingestão de Álcool',
        'Ingestão de álcool e/ou substâncias psicoativas pelo pedestre',
        'Ingestão de Substâncias Psicoativas',
        'Mal Súbito',
        'Não guardar distância de segurança',
        'Objeto estático sobre o leito carroçável',
        'Pista Escorregadia',
        'Restrição de Visibilidade',
        'Sinalização da via insuficiente ou inadequada',
        'Ultrapassagem Indevida',
        'Velocidade Incompatível'
      ]
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
      var pieChart = new Chart(pieChartCanvas, {
        type: 'pie',
        data: doughnutPieData,
        options: doughnutPieOptions
      });

      $('#filtrar').click(() => {
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
              const lista = []
              $.each(json, function(i, e) {
                lista.push(e.qtd)
              });

              console.log(lista)
            }
          }
        });
      })

  });

  function random_rgba(num) {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + num + ')';
}