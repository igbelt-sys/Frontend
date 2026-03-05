//lógica de funcionamento da lsita de tarefas

// criar um evento para tarefa

let btnEnviar = document.getElementById("btnEnviar"); // obj para controlar o botão
let tarefa = document.getElementById("tarefa");

btnEnviar.addEventListener("click", criarTarefa);

//criar a função para criar a Tarefa
function criarTarefa() {
  let texto = tarefa.value.trim();
  //verificar se tarefa não esta vazia
  if (texto == "") {
    return;
  }
  //se não tiver vazia => não preciusa do else -> vai continuar o códio se texto não vazio
  let li = document.createElement("li"); //criação de um list item
  li.innerHTML =
    texto +
    '<button onclick="removerTarefa(this)" class="btnRemove">Remover</button>';
  // adicionar li => ul
  let ul = document.getElementById("lista");
  ul.appendChild(li); // adicionando o li a ul via hierarquia
  tarefa.value = "";
}

function removerTarefa(botao) {
  botao.parentElement.remove(); //remove
}
document.body.style.backgroundColor = "grey";
document.body.style.textAlign = "center";
document.body.style.fontFamily = "sans-serif";

let container = document.querySelector(".container");
container.style.width = "50%";
container.style.backgroundColor = "lightblue";
container.style.margin = "auto";
container.style.borderRadius = "15px";

tarefa.style.width = "50%";
tarefa.style.padding = "10px";
tarefa.style.borderRadius = "5px";

btnEnviar.style.padding = "6px 10px";
btnEnviar.style.border = "none";
btnEnviar.style.background = "green";
btnEnviar.style.color = "white"
btnEnviar.style.cursor = "pointer"

