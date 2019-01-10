<?php
require 'config.php';
  //Abre conexão com Banco de dados
  function DBConnect() {
    $link = @mysqli_connect(DB_HOSTNAME, DB_PREFIX.DB_USERNAME, DB_PASSWORD, DB_PREFIX.DB_DATABASE) or die (mysqli_connect_error());
    mysqli_set_charset($link, DB_CHARSET) or die (mysqli_error($link));

    return $link;
  }

  //fechar conexão com Banco
  function DBClose($link) {
    @mysqli_close($link) or die (mysqli_error($link));
  }
 ?>
