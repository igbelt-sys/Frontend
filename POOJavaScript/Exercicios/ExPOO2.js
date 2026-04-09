class Veiculo {
  marca;
  modelo;
  ano;
  // metodos
  //build
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  exibirInfo() {
    console.log(`Marca: ${this.marca}`);
    console.log(`Modelo: ${this.modelo}`);
    console.log(`Ano: ${this.ano}`);
  }
}

//criar uma subclassse de veiculos
class Carro extends Veiculo {
    portas;

    constructor(marca, modelo, ano, portas) {
        super(marca, modelo, ano);
        this.portas = portas;
    }

    exibirInfo() {
        super.exibirInfo();
        console.log(`Portas: ${this.portas}`);
    }
}

let c1 = new Carro("Hyundai", "Civic G11", 2011, 4);

c1.exibirInfo();
