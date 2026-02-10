// Estrutura de dadso

//Condiconais - IF e ELSE // Swich case
var precoProduto = 300;
//se o preco do produto é > 100 -  desconto de 10%
if (precoProduto >= 100) {
  console.log;
  "Valor a pagar: " + precoProduto * 0.9;
} else {
  console.log;
  "Valor a pagar: " + precoProduto;
}
//condicional intermediaria (else if)
// se preco > 200 tem 15% de desconto/ preco <100 10% desc

if (precoProduto >= 200) {
  console.log("Valor a apagar: " + precoProduto * 0.85);
} else if (precoProduto >= 100) {
  console.log("Valor a apagar: " + precoProduto * 0.9);
} else {
  console.log("Valor a apagar: " + precoProduto);
}

// Swich case
var mes = 3

switch (mes) {
  case 1:
    console.log("janeiro");
    break;
  case 2:
    console.log("fevereiro");
    break;
  case 3:
    console.log("marco");
    break;
  case 4:
    console.log("abril");
    break;
  case 5:
    console.log("outro mes");
    break;
}

//Estrutura de Repetição (For While)

//For ()
for(let i=0; i<=100;i++){
    console.log(i);
}

//while (Incontáveis)
var continuar = true;
var numEscolhido = 3;
var contador = 0;
while(continuar){ //enquanto continuar for verdadeiro, continua o loop
    contador++;//incremento do contador
    let numeroSorteado = Math.round(Math.random()*100000);
    if(numeroSorteado == numEscolhido){
        continuar = false;
        console.log("Acertou Miseravi");
        console.log("Tentativas = "+contador);
    }
}
//explicando o Math
//random ( sortear um numero entre 0 e 1)
//exemplo: 0.954321 / 0.23456 / 0.65432
//Math Round - Arredonda para o número para um inteiro

//Funções
//são ações especificas que podem ser chamadas a qualquer momento dentro do cod.

function ola(nome){ //função com retorno
    return"Ola"+ nome;
}

function hello(nome){//function void
    console.log("Hello "+nome);
}
// chamando as functions 
console.log(ola("igor"))
hello("igor")