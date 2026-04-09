// classse para organização da interfaca da aplicação


export class TrefasView{
    constructor(){
        this.tarefaInput = document.getElementById("tarefaInput")//entrada de dados da nova tarefa
        this.addTarefaBtn = document.getElementById("addTarefaBtn")//botao para adicionar a tarefa
        this.listaTarefas = document.getElementById("listaTarefas") //ul para aas tarefas
        this.mensagem = document.getElementById("mensagem")// p para mensagem
    }
    //metodos
    getTarefasInputValue(){
        return this.tarefaInput.value.trim();
    }
    // limpar valor do Imput
    clearInput(){
        this.tarefaInput = ""
    }
    showMensagem(texto){
        this.mensagem.textContent = texto;
    }
    clearMensagem(){
        this.mensagem.textContent = "";
    }
    //renderizar a lista de tarefas
    
}