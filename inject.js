function responder() {
    var questaoId = $('#questaoID').val();
    var jarvisItemId = $('#jarvisItemId').val();
    var resposta = $('input[name="questao-' + questaoId + '"]:checked').val();
    var aulaID = $('#aulaID').val();
    var disciplinaID = $('#disciplinaID').val();
    var grupoaulaID = $('#grupoaulaID').val();
    var qtdQuestoes = $('#qtdQuestoes').val();
    $.post(basepath + 'reforco/responderQuestao', {
        questaoId: questaoId,
        jarvisItemId: jarvisItemId,
        resposta: resposta,
        aulaId: aulaID,
        disciplinaId: disciplinaID,
        grupoaulaID: grupoaulaID,
        qtdQuestoes: qtdQuestoes,
        csrf_name: $.cookie('csrf_cookie_name')
    }, function responderQ(e) {
        $('#load').hide()
        var response = e[0];
        var $radios = $('input:radio[class=radio-resposta]');
        $radios.filter('[data-opcao=' + response.letra_correta + ']').prop('checked', true);
        console.log('Alternativa correta: ' + response.letra_correta);
        reponderQuestao();
        console.log('Resposta computada, passando para proxima');
    });
}
console.log('Script injetado com sucesso')
