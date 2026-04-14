import { TarefaController } from "./controller/TarefaController.js";
import { TarefaModel } from "./model/tarefaModel.js";
import { TarefaView } from "./view/TarefasView.js";

const model = new TarefaModel();
const view = new TarefaView();
const controller = new TarefaController(model, view);

controller.init();
