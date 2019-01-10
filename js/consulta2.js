$('#loading').hide();
$('#cards-br').hide();

$(function() {

  $('#filtrar').click(() => {

    const data = {
        select: 'consulta2',
        sexo: $('#sexo').val(),
        mes: $('#mes').val(),
        idade: $('#idade').val(),
        clima: $('#clima').val()
    }

    $.ajax({
        type: "POST",
        url: 'database/query.php',
        data: data,
        dataType: 'json',
        beforeSend: function() {
            $('#loading').show();
            $('#cards-br').hide();
            $('#card-mapa').css('opacity', '0');
        },
        complete: function(res) {
          $('#loading').hide();
          const json = res.responseJSON;
          if (json !== undefined) {
            
            $.each(json, function(i, e) {
              e.lat = parseFloat(e.lat);
              e.lng = parseFloat(e.lng);
            });

            makeMap(json);
            
          }
        }
      });
    })
});

function makeMap(json) {
  var data = {
    max: 200,
    data: json
  };
  
  var baseLayer = L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution: '...',
      maxZoom: 18
    }
  );
  
  var cfg = {
    // radius should be small ONLY if scaleRadius is true (or small radius is intended)
    // if scaleRadius is false it will be the constant radius used in pixels
    "radius": 12,
    "maxOpacity": .8, 
    // scales the radius based on map zoom
    // if set to false the heatmap uses the global maximum for colorization
    // if activated: uses the data maximum within the current map boundaries 
    //   (there will always be a red spot with useLocalExtremas true)
    "useLocalExtrema": true,
    // which field name in your data represents the latitude - default "lat"
    latField: 'lat',
    // which field name in your data represents the longitude - default "lng"
    lngField: 'lng',
    // which field name in your data represents the data value - default "value"
    valueField: 'count'
  };
  
  
  var heatmapLayer = new HeatmapOverlay(cfg);
  
  var map = new L.Map('map-canvas', {
    center: new L.LatLng(-11.685867, -51.612244),
    zoom: 4,
    layers: [baseLayer, heatmapLayer]
  });
  
  heatmapLayer.setData(data);
  $('#card-mapa').css('opacity', '1');
}
