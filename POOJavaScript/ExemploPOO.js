//estudo de poo em JS 
//diferencaa dentre procedural e poo
let produto1 = {
    nome: "impressora",
    preco: 1000,
    marca: "epson",
    disponivel: true,
    desconto:  function(){
        return this.preco * 0.1 //desconto de 10%
    }
}
//coleção
let produto2 = {
  nome: "mouse",
  preco: 100,
  marca: "elegim",
  disponivel: false,
  desconto: function(){
    return this.preco * 0.2
  } 
};

// imprimir info dos produos

console.log(`
    Produto: ${produto1.nome},
    Preço: ${produto1.preco},
    Marca: ${produto1.marca},
    Disponível: ${produto1.disponivel ? "Sim" : "Não"},
    Desconto: ${produto1.disponivel ? produto1.desconto() : ""}
    `);

//decalracao de um onj com uma classe (usando POO)

class Produto{
    //atributos
    nome;
    preco;
    marca;
    disponivel;
    // metodos
    // build
 constructor (nome, preco,marca,disponibilidade){
    this.nome = nome
    this.preco = preco
    this.marca = marca
    this.disponivel = disponibilidade
 }

 //metodo para aplicar o desconto
 
 desconto(){
    return this.preco * 0.1

 }
 // metodo para printar 
 toString(){
    return `Produto: ${this.nome},
            Preço: ${this.preco},
            Marca: ${this.marca},
            Disponibilidade: ${this.disponivel ? "Sim" : "Não" },
            Descont: ${this.disponivel ? this.desconto() : ""}
    `

 }
}

//declaracao dos obj
 let p1 = new Produto("Headset",200,"Dragon",true)
 let p2 = new Produto("Microfone", 600, "Razer", false);

 console.log(p1.toString())
 console.log(p2.toString())