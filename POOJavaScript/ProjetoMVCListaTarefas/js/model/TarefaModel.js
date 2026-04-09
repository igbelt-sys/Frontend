//Base da estrutura do aplicativo 
//Classe responsavel pela modelagem de dados 
//base da estrutura do aplicativo
//add uma anotacao na classe --> export (que essa classe sera usada em outras parte do cod)

 export class TarefaModel{
    //js permite escrever atributos diretamente no construtor

    constructor(){
        this.tarefas = []; //lista vazia para tarefas 
        this.currentID = 1; //contador para o id
    }

//metodos
addTarefa(){
    const newTarefa = {
        id: this.currentID++,
        titulo: titulo,
        completed:false
    }
    this.tarefas.push(newTarefa); //add tarefa ao vetor
}
//buscar tarefas (read)
getTarefas(){
    return this.tarefas; //retorna o vetor das tarefas
}

atualizarTarefa(id){
    const tarefa = this.tarefas.find(tarefa => tarefa.id === id);
    if (tarefa){//se a tarefa for ncontrada
        tarefa.completed = !this.tarefas.completed //inverter o valor da booleana 

    }
    //remover tarefa do vetor(delete)
    this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id)
}

}

// o que foi feito? 
// um CRUD  (sao as 4 operacoes basicas de um Banco de dados)
//foi criado um vetor de tarefas
//geramos um ID automatico para as tarefas