var questaoId = $("#questaoID").val();
var jarvisItemId = $("#jarvisItemId").val();
var resposta = $('input[name="questao-' + questaoId + '"]:checked').val();
var aulaID = $("#aulaID").val();
var disciplinaID = $("#disciplinaID").val();
var grupoaulaID = $("#grupoaulaID").val();
var qtdQuestoes = $("#qtdQuestoes").val();

var answer = [];
var answer_alter = [];
$.post(
  basepath + "reforco/responderQuestao",
  {
    questaoId: questaoId,
    jarvisItemId: jarvisItemId,
    resposta: resposta,
    aulaId: aulaID,
    disciplinaId: disciplinaID,
    grupoaulaID: grupoaulaID,
    qtdQuestoes: qtdQuestoes,
    csrf_name: $.cookie("csrf_cookie_name")
  },
  e => {
    var response = e[0];
    document.head.innerHTML +=
      '<style>@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");</style>';

    var html =
      '<div style="position: fixed; width: 60px; height: 60px; top: 56px; right: 25px; z-index: 2147483647; margin: 0px; left: 55px;" > <div style="position: relative;text-align: center;display: flex; top: 12.5%;" > <div style="width: 100%; height: 100%;"> <span style="animation: 2s ease 0s 1 normal none running zoomIn; color: red;font-size: 1.5cm; font-weight: bolder; font-family: Roboto;" >!</span > </div> </div> </div> <div style="background-color: rgb(242, 242, 242);top: 60px;left: 55px;margin-left: -10px;position: fixed;width: 680px;margin-top: -10px;right: 25px;z-index: 999999998;border-radius: 40px;box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 5px 0px;" > <div style="display: flex; align-items: center; position: relative; font-family: Roboto, sans-serif; font-weight: 600; font-size: 15px; color: rgb(255, 255, 255); z-index: 999999998; letter-spacing: 0.5px; height: 80px; width: auto; min-width: 0px; top: 0px; padding-left: 80px; padding-right: 30px; text-align: left; flex-direction: row;" > <div style="display: flex;flex-flow: row wrap;width: 100%;"> <div style="width: auto; min-width: 0px; align-self: center !important;" > <div style="cursor: pointer; color: rgb(69, 67, 68); font-size: 24px;" > <span style="font-family: Roboto, sans-serif; font-weight: bold; cursor: pointer; color: rgb(69, 67, 68); font-size: 24px;" >A resposta da questão será:</span > <div style="line-height: 14px;"> <span style="font-family: Roboto, sans-serif;font-weight: normal;font-size: 12px;" >Alternativa <strong>' +
      response.letra_correta +
      ') </strong> <a href="#" onclick= style="padding-left: 10px; ">Responder</a> </span> </div> </div> </div> </div> </div> </div>';
    document.body.innerHTML += html;
  }
);
