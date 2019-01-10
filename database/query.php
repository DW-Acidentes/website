<?php
require 'connection_db.php';

if(isset($_POST['select'])) {
  header('Content-Type: application/json');

  switch ($_POST['select']) {
    case 'consulta1':
      echo consulta1($_POST);
      break;
    case 'consulta2':
      echo consulta1($_POST);
      break;
  }
  exit;
}
  //Executa Querys(Comandos no banco)
  function DBQuery($query) {
    $link = DBConnect();
    $result = @mysqli_query($link, $query) or die(mysqli_error($link));

    DBClose($link);
    return $result;
  }

  function consulta1($params) {
    $q = DBQuery('
      select l.uf, l.municipio, b.br, (sum(num_ilesos) + sum(num_lesoes_leves) + sum(num_lesoes_graves) + sum(num_obitos)) as num
      from fato_acidente f join dim_br b on f.sk_br = b.sk_br join dim_lugar l on f.sk_lugar = l.sk_lugar
      join dim_condicao_meteorologica cm on f.sk_condicao_metereologica = cm.sk_condicao_meteorologica join
      dim_pista p on f.sk_pista = p.sk_pista
      where condicao_meteorologica = "'.$params['clima'].'" and tipo_pista = "'.$params['pista'].'"
      group by uf, municipio, br
      order by num DESC
    ');

    $res = mysqli_fetch_all($q, MYSQLI_ASSOC);

    return json_encode($res);
  }

  function consulta2($params) {
    $q = DBQuery('
      select l.uf, l.municipio, b.br, (sum(num_ilesos) + sum(num_lesoes_leves) + sum(num_lesoes_graves) + sum(num_obitos)) as num
      from fato_acidente f join dim_br b on f.sk_br = b.sk_br join dim_lugar l on f.sk_lugar = l.sk_lugar
      join dim_condicao_meteorologica cm on f.sk_condicao_metereologica = cm.sk_condicao_meteorologica join
      dim_pista p on f.sk_pista = p.sk_pista
      where condicao_meteorologica = "'.$params['clima'].'" and tipo_pista = "'.$params['pista'].'"
      group by uf, municipio, br
      order by num DESC
    ');

    $res = mysqli_fetch_all($q, MYSQLI_ASSOC);

    return json_encode($res);
  }
 ?>
