//galeria de imagens dinamicas co  DOM 

let = uploadInput = document.getElementById("upload")
let btnAdd = document.getElementById("addImagem")
let galeria = document.querySelector(".galeria")
let carrossel = document.querySelector(".carrossel")

//vetor para as imagens
let imagens  = [];

btnAdd.addEventListener("click", ()=>{
  let imagem = uploadInput.value.trim(); //pega o endereço da imagem no input
  if (imagemURL === "") return;//se a condição for verdadeira ele interrompe o codigo
  //parte de baixo do codigo continua se a condição acima for false
  imagens.push(imagemURL);
  atualizaGaleria(); //atualiza a imagem na galeria
  atualizaCarrosel();//atualiza a imagem do carrossel 
  uploadInput.value = "";//limpa campo do input

})
