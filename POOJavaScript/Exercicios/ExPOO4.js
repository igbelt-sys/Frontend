class Funcionario {
    nome;
    salario;
    cargo;

    constructor(nome, salario, cargo) {
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo;
    }

    aumentarSalario(percentual) {
        this.salario += this.salario * (percentual / 100);
    }

    exibirInfo() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Salario: R$ ${this.salario}`);
        console.log(`Cargo: ${this.cargo}`);
    }
}

const funcionario1 = new Funcionario("Carlos", 2500, "Atendente");

funcionario1.exibirInfo();
funcionario1.aumentarSalario(10);
funcionario1.exibirInfo();
