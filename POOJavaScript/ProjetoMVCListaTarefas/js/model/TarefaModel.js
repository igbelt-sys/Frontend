export class TarefaModel {
    constructor() {
        this.tarefas = [];
        this.currentID = 1;
    }

    addTarefa(titulo) {
        const newTarefa = {
            id: this.currentID++,
            titulo,
            completed: false
        };

        this.tarefas.push(newTarefa);
    }

    getTarefas() {
        return this.tarefas;
    }

    atualizarTarefa(id) {
        const tarefa = this.tarefas.find((item) => item.id === id);
        if (tarefa) {
            tarefa.completed = !tarefa.completed;
        }
    }

    removerTarefa(id) {
        this.tarefas = this.tarefas.filter((tarefa) => tarefa.id !== id);
    }
}
