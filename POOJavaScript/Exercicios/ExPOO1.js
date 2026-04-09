class Produto{
    //atributos
    nome;
    preco;
    estoque;

    //metodos
    //build
    constructor(nome, preco, estoque){
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    vender(quantidade){
        if (quantidade > this.estoque) {
            console.log("Estoque insuficiente.");
            return;
        }

        this.estoque -= quantidade;
    }

    repor(quantidade){
        this.estoque += quantidade;
    }

    exibirInfo(){
        console.log(`Produto: ${this.nome}`);
        console.log(`Preco: R$ ${this.preco}`);
        console.log(`Estoque: ${this.estoque}`);
    }
}

const produto1 = new Produto("Notebook", 3500, 10);

produto1.exibirInfo();
produto1.vender(3);
produto1.repor(5);
produto1.exibirInfo();
