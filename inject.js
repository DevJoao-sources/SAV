const createCustomElement = (tag, style) => {
  var element = document.createElement(tag);
  element.style = style;
  return element;
};

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
    $("#load").hide();
    var response = e[0];
    answer = response.letra_correta;
    document.head.innerHTML +=
      '<style>@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");</style>';

    var a = createCustomElement(
      "div",
      "position: fixed; width: 60px; height: 60px; top: 56px; right: 25px; z-index: 2147483647; margin: 0px; left: 55px;"
    );
    var b = createCustomElement(
      "div",
      "position: relative; text-align: center; display: flex; top: 12.5%;"
    );
    var c = createCustomElement("div", "width: 100%; height: 100%;");
    var d = createCustomElement(
      "span",
      "animation: 2s ease 0s 1 normal none running zoomIn; color: red; font-family: Roboto, sans-serif; font-size: 1.5cm; font-weight: bolder; font-family: Roboto;"
    );
    d.appendChild(document.createTextNode("!"));
    a.appendChild(b);
    b.appendChild(c);
    c.appendChild(d);
    var e = createCustomElement(
      "div",
      "background-color: #f2f2f2; top: 60px; left: 55px; margin-left: -10px; position: fixed; width: 680px; margin-top: -10px; right: 25px; z-index: 999999998; border-radius: 40px; box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 5px 0px;"
    );
    var f = createCustomElement(
      "div",
      "display: flex; align-items: center; position: relative; font-family: Roboto, sans-serif; font-weight: 600; font-size: 15px; color: #ffffff; z-index: 999999998; letter-spacing: 0.5px; height: 80px; width: auto; min-width: 0px; top: 0px; padding-left: 80px; padding-right: 30px; text-align: left; flex-direction: row;"
    );
    var g = createCustomElement(
      "div",
      "display: flex; flex-flow: row wrap; width: 100%;"
    );
    var h = createCustomElement(
      "div",
      "width: auto; min-width: 0px; align-self: center !important;"
    );
    var i = createCustomElement(
      "div",
      "cursor: pointer; color: #454344; font-size: 24px;"
    );
    var j = createCustomElement("span", "font-family: Roboto, sans-serif;"); // Append no I
    j.appendChild(document.createTextNode("A resposta da questão será:"));
    var k = createCustomElement("div", "line-height: 14px;"); // Append no I
    var l = createCustomElement(
      "span",
      "font-family: Roboto, sans-serif; font-weight: normal; font-size: 12px;"
    );
    l.appendChild(document.createTextNode("Alternativa "));
    var _letter = document.createElement("strong");
    _letter.appendChild(document.createTextNode(answer + ")"));
    l.appendChild(_letter);

    var _a = document.createElement("a");
    _a.href = "#";
    _a.addEventListener("click", () => {
      var $radios = $("input:radio[class=radio-resposta]");
      $radios.filter("[data-opcao=" + answer + "]").prop("checked", true);
      reponderQuestao();
    });
    _a.style = "padding-left: 10px;";
    _a.appendChild(document.createTextNode("Responder"));
    l.appendChild(_a);

    e.appendChild(f);
    f.appendChild(g);
    g.appendChild(h);
    h.appendChild(i);
    i.appendChild(j);
    i.appendChild(k);
    k.appendChild(l);

    document.body.appendChild(a);
    document.body.appendChild(e);
  }
);
