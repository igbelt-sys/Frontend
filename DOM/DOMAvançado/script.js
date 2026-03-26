//Estudo de DOM AvanÃ§ado


//conruir header com DOM 

let header = document.createElement("header");
// estilizacao do header
header.style.backgroundColor = "Black";
header.style.height = "8vh";

//adcicionar o header como elemento filho do body
//nao precisa declarar o body porque ele Ã© um elemento nativo
document.body.appendChild(header);
document.body.style.margin = "0";

//adicionar elementos ao header
 let divNav = document.createElement("div");
//configurando o display da div
divNav.style.display = "flex";
divNav.style.justifyContent = "space-around";
divNav.style.color = "white";
divNav.style.height = "100%";
divNav.style.alignItems = "center"
divNav.style.fontSize = "5vh";
divNav.style.fontFamily = "comic sans MS";

//adicionar div ao header 
header.appendChild(divNav);

//adicionar itens a nav 
let itensNav = ["Index","Produtos", "Contato"];

//percorrer a lista 
itensNav.forEach(e => {
    let item = document.createElement("a");
    item.innerHTML = e;
    item.href = e.toLowerCase()+".html";//criando link
    item.style.textDecoration = "none";//remove o link
    item.style.color = "inherit";
    divNav.appendChild(item);//add item a di nav
 })

 //criar um rodape 
let footer = document.createElement("footer");
footer.style.backgroundColor = "black";
footer.style.height = "5vh";
footer.style.width = "100%";
footer.style.position = "fixed";
footer.style.bottom = "0";
let paragrafoFooter = document.createElement("p");
paragrafoFooter.innerHTML =
  "Copyright &copy; 2026 - Todos os direitos reservados.";
paragrafoFooter.style.color = "white";
paragrafoFooter.style.textAlign = "center";
paragrafoFooter.style.lineHeight = "5vh";
footer.appendChild(paragrafoFooter);
document.body.appendChild(footer);

//fazer o darkmode do site com uma chave
let chave = document.createElement("input");
chave.type = "checkbox";//mudando tipo do input
chave.id = "darkmode";
document.body.appendChild(chave);//add chave ao body

// criar evento para modo escuro
chave.addEventListener("change", () => {
    document.body.classList.toggle("darkmode");
});
