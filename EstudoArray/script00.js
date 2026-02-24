// declarando um Array
let array = [];

// tipos de array
let arrayNumerico = [1,2,3,4,5,6,7,8,9];
let arrayTexto = ["Carro", "Casa", "Celular"];
let arrayMisto = [1,"José", true];

// tamanho de um array
console.log(arrayNumerico.length); //conta a quantidade de indices que é igual a 9

//acessar a posicao de um array
console.log(arrayTexto[0]); //vai retornar o valor da posicao 0 no "carro"
//adicionar elementos a um array
//push /  unshift 
arrayTexto.push("moto"); //adiciona um elemento ao final da lista 
console.log(arrayTexto);
 arrayTexto.unshift("notbook"); //adiciona elemento no começo da lista 
console.log(arrayTexto);

// trocar um valor de um elemento
arrayTexto[2] = "mansao"
console.log(arrayTexto); //troca o valor do indice 3 ([2]) por mansao


// remover elementos do array
arrayTexto.pop();
console.log(arrayTexto.pop); //remove o ultimo elemento
console.log(arrayTexto.shift); // remove o primeiro elemento 

//laçoes de repeticao com arrays

for(let i = 0; i < arrayNumerico.length; i++){
    console.log(`indice[${i}] = ${arrayNumerico[i]}`); //forma moderna de incluir texto
}

// metdos uteis de arrays
 //indexOf

 console.log(arrayNumerico.indexOf(5)); //retorna o valor do indice caso exista
 console.log(arrayNumerico.indexOf(100)); //nao existe esse indice da tabela entao ele retorna -1

//  remover elemento de uma posicão
//spllice 
arrayMisto.splice(2,1) //remove o elemento do indice 2 por 1 unica vez 
console.log(arrayMisto);
