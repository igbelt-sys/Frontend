const agora = new Date();
console.log(agora);

console.log(agora.toDateString());

console.log(agora.toLocaleDateString());

console.log(agora.getFullYear);

let data1 = new Date("2026-02-10");
let data2 = new Date("2026-12-18");

let diferenca = data2 - data1;

// calcular os dias para formatura 
console.log(diferenca/1000*60*60*24);