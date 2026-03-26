// criando elementos para pagina index

// clonando elemento com DOM
let card = document.createElement("div");
card.classList.add("card");

// criar um container para adicionar os cards
let container = document.createElement("div");
container.classList.add("container");

// criar um botÃ£o para clonar elementos
let btnClonar = document.createElement("button");
btnClonar.innerText = "Clonar";
btnClonar.id = "btnClonar";

// adicionar elementos Ã  pÃ¡gina
document.body.appendChild(btnClonar);
document.body.appendChild(container);
container.appendChild(card);

// adicionar um evento ao botÃ£o
btnClonar.addEventListener("click", () => {
  let clonar = card.cloneNode(true);
  container.appendChild(clonar);
});
