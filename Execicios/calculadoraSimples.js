var prompt = require("prompt-sync")();

// funções
function soma(a, b) {
  return a + b;
}
function subtracao(a, b) {
  return a - b;
}
function multiplicacao(a, b) {
  return a * b;
}
function divisao(a, b) {
  return a / b;
}

function menu() {
  let operacao;
  let numero1;
  let numero2;
  let resultado;

  console.log("\n=== Calculadora Simples ===");
  console.log("1. Soma");
  console.log("2. Subtração");
  console.log("3. Multiplicação");
  console.log("4. Divisão");

  operacao = prompt("Escolha: ");

  numero1 = Number(prompt("Digite o primeiro número: "));
  numero2 = Number(prompt("Digite o segundo número: "));

  switch (operacao) {
    case "1":
      resultado = soma(numero1, numero2);
      break;
    case "2":
      resultado = subtracao(numero1, numero2);
      break;
    case "3":
      resultado = multiplicacao(numero1, numero2);
      break;
    case "4":
      if (numero2 === 0) {
        console.log("Não pode dividir por 0");
        return;
      }
      resultado = divisao(numero1, numero2);
      break;
    default:
      console.log("Operação inválida");
      return;
  }

  console.log("Resultado:", resultado);
}

let continuar = true;

while (continuar) {
  menu();
  let escolha = prompt("1 continuar | 2 sair: ");
  if (escolha === "2") {
    continuar = false;
    console.log("saindo...");
  }
}
