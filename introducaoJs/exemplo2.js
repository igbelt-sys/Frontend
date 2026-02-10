// Tipos de operadores

// Operadores aritiméticos (+ - / * %)

var a = 10;
var b = 3;
var c;
// soma
c = a+b;
console.log("Soma: "+c);

// subtracao
c  = a-b;
console.log("Subtração: "+c);

// multiplicação
c = a*b;
console.log("Multiplicação: "+c);

// divisao
c = a/b;
console.log("Divisão: "+c);

// resto
c  = a%b;
console.log("Resto: "+c )


// operadores relacionais (> < >= <= == === != !==)
var a = 10
var b  = 20 
var c = "20";

console.log("Relacionais : "+(a>b)); //false
//o que importa 
console.log("Igualdade Simples: "+ (b == c)); //true
console.log("Igualdade Simples: "+ (b === c)); //false

// Operadores logicos (&& - E, || - OU, ! - não)
var nota = 5;
var nota = 8;

console.log ("Aprovação: "+ nota1>7 && nota2>7); //false
console.log("Aprovação: " + nota1 > 7 || nota2 > 7); //true
console.log("Negação>: "+ !true); //false