let uploadInput = document.getElementById("upload");
let btnAdd = document.getElementById("addImagem");
let galeria = document.querySelector(".galeria");
let carrossel = document.querySelector(".carrossel");

let imagens = [];
let indiceAtual = 0;
let intervaloCarrossel = null;

btnAdd.addEventListener("click", () => {
  let imagemURL = uploadInput.value.trim();

  if (imagemURL === "") return;

  imagens.push(imagemURL);
  indiceAtual = imagens.length - 1;
  atualizarGaleria();
  atualizarCarrossel();
  uploadInput.value = "";
});

function atualizarGaleria() {
  galeria.innerHTML = "";

  if (imagens.length === 0) {
    galeria.innerHTML = '<p class="vazio">Nenhuma imagem adicionada ainda.</p>';
    return;
  }

  imagens.forEach((imagem, index) => {
    let div = document.createElement("div");
    div.classList.add("imagemContainer");

    let img = document.createElement("img");
    img.src = imagem;
    img.alt = `Miniatura ${index + 1}`;

    let btnRemove = document.createElement("button");
    btnRemove.innerText = "X";
    btnRemove.classList.add("remove");

    btnRemove.addEventListener("click", () => {
      imagens.splice(index, 1);

      if (indiceAtual >= imagens.length) {
        indiceAtual = 0;
      }

      atualizarGaleria();
      atualizarCarrossel();
    });

    div.appendChild(img);
    div.appendChild(btnRemove);
    galeria.appendChild(div);
  });
}

function atualizarCarrossel() {
  carrossel.innerHTML = "";

  if (intervaloCarrossel) {
    clearInterval(intervaloCarrossel);
    intervaloCarrossel = null;
  }

  if (imagens.length === 0) {
    carrossel.innerHTML = '<div class="slide vazio-slide">Adicione uma imagem</div>';
    carrossel.style.transform = "translateX(0)";
    return;
  }

  imagens.forEach((imagem, index) => {
    let slide = document.createElement("div");
    slide.classList.add("slide");

    let img = document.createElement("img");
    img.src = imagem;
    img.alt = `Imagem do carrossel ${index + 1}`;

    slide.appendChild(img);
    carrossel.appendChild(slide);
  });

  moverCarrossel();
  iniciarCarrossel();
}

function moverCarrossel() {
  carrossel.style.transform = `translateX(-${indiceAtual * 100}%)`;
}

function iniciarCarrossel() {
  if (imagens.length <= 1) return;

  intervaloCarrossel = setInterval(() => {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    moverCarrossel();
  }, 2500);
}

atualizarGaleria();
atualizarCarrossel();
