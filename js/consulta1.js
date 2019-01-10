$('#card-table').hide();
$('#cards-br').hide();
$('#loading').hide();

$(document).ready( function () {
    $('#table').DataTable();

    $('#filtrar').click(() => {
        const data = {
            select: 'consulta1',
            clima: $('#clima').val(),
            pista: $('#pista').val()
        }

        $.ajax({
            type: "POST",
            url: 'database/query.php',
            data: data,
            dataType: 'json',
            beforeSend: function() {
                $('#loading').show();
                $('#card-table').hide();
                $('#cards-br').hide();
                $('#table').DataTable().destroy();

            },
            complete: function(res) {
                $('#loading').hide();
                const json = res.responseJSON;

                //preencher cards
                const top4 = json.slice(0,4)
                $.each(top4, function(i, reg){
                    let num = i + 1
                    $('#card' + num + ' .float-left').text('BR ' + parseInt(reg['br']));
                    $('#card' + num + ' .float-right h3').text(reg['num']); 
                });

                $('#table').DataTable({
                    data: json,
                    columns: [
                        {data: "uf"},
                        {data: "municipio"},
                        {data: "br"},
                        {data: "num"}
                    ],
                    order: [[3,'desc']],
                    language: {
                        "sEmptyTable": "Nenhum registro encontrado",
                        "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
                        "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
                        "sInfoFiltered": "(Filtrados de _MAX_ registros)",
                        "sInfoPostFix": "",
                        "sInfoThousands": ".",
                        "sLengthMenu": "_MENU_ resultados por página",
                        "sLoadingRecords": "Carregando...",
                        "sProcessing": "Processando...",
                        "sZeroRecords": "Nenhum registro encontrado",
                        "sSearch": "Pesquisar",
                        "oPaginate": {
                            "sNext": "Próximo",
                            "sPrevious": "Anterior",
                            "sFirst": "Primeiro",
                            "sLast": "Último"
                        },
                        "oAria": {
                            "sSortAscending": ": Ordenar colunas de forma ascendente",
                            "sSortDescending": ": Ordenar colunas de forma descendente"
                        }
                    }
                });

                $('#card-table').show();
                $('#cards-br').show();
                
                
            },
          });
    })

});