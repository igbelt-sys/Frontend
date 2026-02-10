var texto = " João, mariA, NicolaS, SocoRRo, zuLeiCa";

var array = texto.split(",");
var arrayFormatado = [];

for (var i = 0; i < array.length; i++) {
  var nome = array[i].trim();
  arrayFormatado.push(
    nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase(),
  );
}
console.log(arrayFormatado);
