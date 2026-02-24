const prompt = require("prompt-sync")();

console.log("=== Calculadora de média de notas ===");

let quantidade = Number(prompt("Insira a quantidade de notas: "));

let arrayNotas = [];

for (let i = 0; i < quantidade; i++) {
  let nota = Number(prompt(`Digite a nota ${i + 1}: `));
  arrayNotas.push(nota);
}

// usar reduce para somar 
let soma = arrayNotas.reduce((acumulador, nota) => {
  return acumulador + nota;
}, 0);

let media = soma / quantidade;

console.log("Notas:", arrayNotas);
console.log("Média:", media.toFixed(2));
