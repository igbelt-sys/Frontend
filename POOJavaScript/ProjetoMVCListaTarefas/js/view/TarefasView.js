export class TarefaView {
    constructor() {
        this.tarefaInput = document.getElementById("tarefaInput");
        this.addTarefaBtn = document.getElementById("addTarefaBtn");
        this.listaTarefas = document.getElementById("listaTarefas");
        this.mensagem = document.getElementById("mensagem");
    }

    getTarefaInputValue() {
        return this.tarefaInput.value.trim();
    }

    clearInput() {
        this.tarefaInput.value = "";
    }

    showMensagem(texto) {
        this.mensagem.textContent = texto;
    }

    clearMensagem() {
        this.mensagem.textContent = "";
    }

    renderTarefa(tarefas, atualizar, remover) {
        this.listaTarefas.innerHTML = "";

        tarefas.forEach((tarefa) => {
            const li = document.createElement("li");
            if (tarefa.completed) {
                li.classList.add("completed");
            }

            const span = document.createElement("span");
            span.textContent = tarefa.titulo;

            const action = document.createElement("div");
            action.classList.add("action");

            const atualizarBtn = document.createElement("button");
            atualizarBtn.textContent = tarefa.completed ? "Desfazer" : "Concluir";
            atualizarBtn.addEventListener("click", () => atualizar(tarefa.id));

            const removerBtn = document.createElement("button");
            removerBtn.textContent = "Remover";
            removerBtn.addEventListener("click", () => remover(tarefa.id));

            action.appendChild(atualizarBtn);
            action.appendChild(removerBtn);

            li.appendChild(span);
            li.appendChild(action);

            this.listaTarefas.appendChild(li);
        });
    }
}
