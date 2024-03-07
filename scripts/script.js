var text = document.querySelector("#text")
var textSaida = document.querySelector("textSaida")

let matriz_code = [
    ["e", "enter"]
    ["i", "imes"]
    ["a", "ai"]
    ["o", "ober"]
    ["u", "ufat"]
];

function criptografar() {
  var texto = text.value;

  var resultCripto = texto
  .replaceAll("e", "enter")
  .replaceAll("i", "imes")
  .replaceAll("a", "ai")
  .replaceAll("o", "ober")
  .replaceAll("u", "ufat");

document.getElementById('textSaida').innerHTML = '<textarea reandonly id="texto">' + resultCripto + 
'</textarea>' + '<button class="btn-copiar" onclick="copiar()">Copiar</button>'

}

function descriptografar() {
  var texto = text.value;

  var resultDescripto = texto
  .replaceAll("enter", "e")
  .replaceAll("imes", "i")
  .replaceAll("ai", "a")
  .replaceAll("ober", "o")
  .replaceAll("ufat", "u");

  document.getElementById('textSaida').innerHTML = '<textarea reandonly id="texto">' + resultDescripto + 
  '</textarea>' + '<button class="btn-copiar" onclick="copiar()">Copiar</button>'

}

function copiar (){
  var textoCop = document.getElementById('texto');

  textoCop.select();
  document.execCommand('copy');
}



