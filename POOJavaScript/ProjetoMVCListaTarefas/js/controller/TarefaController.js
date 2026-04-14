export class TarefaController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init() {
        this.view.addTarefaBtn.addEventListener("click", () => this.addTarefa());
        this.updateView();
    }

    addTarefa() {
        const titulo = this.view.getTarefaInputValue();

        if (titulo === "") {
            this.view.showMensagem("O titulo da tarefa nao pode ser vazio");
            return;
        }

        this.view.clearMensagem();
        this.model.addTarefa(titulo);
        this.view.clearInput();
        this.updateView();
    }

    atualizarTarefa(id) {
        this.model.atualizarTarefa(id);
        this.updateView();
    }

    removerTarefa(id) {
        this.model.removerTarefa(id);
        this.updateView();
    }

    updateView() {
        this.view.renderTarefa(
            this.model.getTarefas(),
            (id) => this.atualizarTarefa(id),
            (id) => this.removerTarefa(id)
        );
    }
}
