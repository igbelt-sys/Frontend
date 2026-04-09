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
 let c1 = new Veiculo ("Hyundai", "civic g11", 2011)

 c1.exibirInfo()
