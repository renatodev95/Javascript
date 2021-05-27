// Exercício: Estilizar o fundo dos elementos "p" dentro da div "paragrafos"

const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll("p");

// Obtendo todos os estilos CSS aplicados no document.body
const estilosBody = getComputedStyle(document.body);
// Atribuindo a cor de fundo CSS do body para dentro de uma variável
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of ps){
  // Aplicando o estilo da variável para o fundo de cada parágrafo
  p.style.backgroundColor = backgroundColorBody;
  // Aplicando a cor branca para as letras de cada parágrafo
  p.style.color = "white";
}
