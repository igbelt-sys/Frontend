//eventos avancados com DOM 

//capturar letra digitada com DOM
document.addEventListener("keydown", (e)=>{
    //capturar evento(letra digitada) e exibir a letra no console
    console.log("tecla digitada:"+ e.key);  
})

//funcao para sugestao de texto em campos de busca
let input = document.createElement ("input");

input.type = "text";
input.id = "busca";
input.placeholder = "Digite para buscar"
document.body.appendChild(input);// add input ao body

// criar lisa de sugestoes
 let lista =  document.createElement("ul");
 lista.id = "sugestoes";
 lista.style.listStyle = "none"; //remove os * antes da lista
document.body.appendChild(lista); //add lista ao body

// criar lista de sugestoes 

let sugestoes = [

    "JavaScript", "TypeScript", "Java", "Dart", "Kotlin", "C#", "PHP", "Go", "Ruby",
    "C++", "Assembly", "Cobol", "C", "Lua", "Swift", "Pascal", "Delphi",
    "Python", "Rust", "Scala", "Haskell", "Perl", "Objective-C", "Groovy",
    "F#", "Elixir", "Erlang", "Crystal", "Nim", "Zig", "Fortran",
    "MATLAB", "Julia", "VBA", "Shell", "Bash", "PowerShell",
    "SQL", "PL/SQL", "R", "Scratch"
];

//evento para capturar o texto e sugerir a partir dos caracteres digitados
document.getElementById("busca").addEventListener("keyup", () => {
  let texto = input.value.toLowerCase();
  lista.innerHTML = ""; //limpa a lista
  sugestoes.forEach((sugestao) => {
    if (sugestao.toLowerCase().includes(texto)) {
      let item = document.createElement("li");
      //permitir click do item
      item.style.cursor = "pointer";//transforma em cursost pointer (dedinho)
      item.addEventListener("click", () => {
        input.value = sugestao; //ao clicar no item pega otexto
        lista.innerHTML = ""; //  e limpa a lista
      });
      item.innerText = sugestao;
      lista.appendChild(item);
    }
  });
});
