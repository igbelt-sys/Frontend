// DOM --> Document Object Model
// Script de manipulação DOM
// getElementById --> variável simples - id é sempre única

// usar sempre o document para manipular o DOM
let titulo = document.getElementById("titulo");
console.log(titulo); // Mostra a informação da id
titulo.innerText = "Outro Título para o site";

// getElementByTagName --> vetor (array) de elementos
let paragrafo = document.getElementsByTagName("p"); // html --> p
paragrafo[0].innerText = "Exemplo de parágrafo modificado por DOM"; // modificar elemento
paragrafo[1].style.color = "red"; //modificar o style do elemento

// getElementByClassName --> vetor de elementos
let descricao = document.getElementsByClassName("descricao");
// modificar elementos do array
for (let i = 0; i < descricao.length; i++) {
  descricao[i].style.color = "blue";
}

// querySelector --> Variável simples = Seleciona sempre o primeiro elemento com a seletor
let p = document.querySelector("p");
// modificar a fonte
p.style.fontWeight = "bold";

// querySelectorAll --> vetor de elementos --> seleciona todos os elementos
let descricaoAll = document.querySelectorAll(".descricao");
descricaoAll.forEach((e) => (e.style.fontWeight = "bold"));

// eventos listener (ouvintes)

// chamar pelo nome da função
function MudarCorFundo() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "lightgreen";
}

// chamar diretamente no script o ouvinte
document.getElementById("btnColor").addEventListener("click", OutraCor);

function OutraCor() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "orange";
}
