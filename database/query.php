<?php
require 'connection_db.php';

if(isset($_POST['select'])) {
  header('Content-Type: application/json');

  switch ($_POST['select']) {
    case 'consulta1':
      echo consulta1($_POST);
      break;
    case 'consulta2':
      echo consulta2($_POST);
      break;
    case 'consulta7':
      echo consulta7($_POST);
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
      SELECT b.latitude as lat, b.longitude as lng, sum(f.num_acidentes) as count
      FROM fato_acidente f 
      INNER JOIN dim_condicao_meteorologica co ON f.sk_condicao_metereologica = co.sk_condicao_meteorologica
      INNER JOIN dim_br b ON f.sk_br = b.sk_br
      INNER JOIN dim_lugar l ON f.sk_lugar = l.sk_lugar 
      INNER JOIN dim_idade i ON f.sk_idade = i.id_acidente 
      INNER JOIN dim_sexo s ON f.sk_sexo =s.id_acidente
      INNER JOIN dim_tempo t ON f.sk_tempo = t.id_tempo
      WHERE idade = "'.$params['idade'].'" and sexo_desc = "'.$params['sexo'].'" and co.condicao_meteorologica = "'.$params['clima'].'"
      GROUP BY b.latitude, b.longitude
    ');

    $res = mysqli_fetch_all($q, MYSQLI_ASSOC);

    return json_encode($res);
  }

  function consulta5($params) {
    set_time_limit(3000);
    $q = DBQuery('
    SELECT COUNT(t.mes_abrev) AS qtd, e.estado_fisico, t.mes_abrev, t.mes_nome, c.causa_acidente, c.tipo_acidente, i.idade, s.sexo_desc 
    FROM fato_acidente f 
    INNER JOIN dim_estado_fisico e ON f.sk_estado_fisico = e.sk_estado_fisico 
    INNER JOIN dim_caracteristica c ONf.sk_caracteristica = c.sk_caracteristica 
    INNER JOIN dim_idade i ON f.sk_idade = i.sk_idade 
    INNER JOIN dim_sexo s ON f.sk_sexo =s.sk_sexo 
    INNER JOIN dim_tempo t ON f.sk_tempo = t.id_tempo 
    GROUP BY t.mes_abrev, e.estado_fisico
    ');

    $res = mysqli_fetch_all($q, MYSQLI_ASSOC);

    return json_encode($res);
  }

  function consulta7($params) {
    if (isset($params['meses'])) {
      $q = DBQuery("
        SELECT COUNT(t.mes_nome) AS qtd, c.causa_acidente, t.mes_nome 
        FROM fato_acidente f inner join dim_caracteristica c 
        ON f.sk_caracteristica = c.sk_caracteristica join dim_tempo t 
        ON f.sk_tempo = t.id_tempo
        WHERE t.mes_abrev in (".$params['meses'].")
        GROUP BY t.mes_nome, c.causa_acidente
      ");
    } else {
      $q = DBQuery('
        SELECT COUNT(t.mes_nome) AS qtd, c.causa_acidente, t.mes_nome 
        FROM fato_acidente f inner join dim_caracteristica c 
        ON f.sk_caracteristica = c.sk_caracteristica join dim_tempo t 
        ON f.sk_tempo = t.id_tempo 
        GROUP BY t.mes_nome, c.causa_acidente
      ');
    }

    $res = mysqli_fetch_all($q, MYSQLI_ASSOC);

    return json_encode($res);
  }

 ?>
