const elementos = [
  { tag: "p", texto: "Frase 1" },
  { tag: "div", texto: "Frase 2" },
  { tag: "section", texto: "Frase 3" },
  { tag: "footer", texto: "Frase 4" },
];

// aqui a variável container recebe o documento com a classe de mesmo nome
const container = document.querySelector(".container");
const div = document.createElement("div")

for (elemento of elementos){
  // para cara objeto dentro de elementos é criado um novo elemento no documento HTML
  let {tag, texto} = elemento;
  let tagCriada = document.createElement(tag);
  // O container recebe o elemento criado com a tag especificada no array
  container.appendChild(tagCriada);
  // A tag inserida no container recebe o texto dentro do objeto também presente no array
  tagCriada.innerText = texto;
  div.appendChild(tagCriada);
}

container.appendChild(div);