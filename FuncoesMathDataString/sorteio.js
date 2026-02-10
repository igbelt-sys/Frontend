const prompt = require("prompt-sync")();

console.log("Adivinhe o número de 0 a 100");

let numEscolhido = Math.random() * 100;
numEscolhido = Math.floor(numEscolhido);

let numDigitado = Number(prompt("Digite um número de 0 a 100: "));

if (numDigitado === numEscolhido) {
  console.log("Parabéns, você acertou!");
} else if (numDigitado > numEscolhido) {
  console.log("O número é menor");
} else {
  console.log("O número é maior");
}
