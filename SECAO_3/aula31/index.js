//  Mais diferenças entre var e let/const

const verdadeira = true;

// Let tem escopo de bloco {...bloco}
// Var só tem escopo de função

let nome = "Renato"; // criando uma variavel
var nome2 = "Renato"; //criando

if (verdadeira) {
  let nome = "Otávio"; // criando outra variavel em um escopo de bloco diferente do anterior
  var nome2 = "Rogério"; // redeclarando

  if (verdadeira) {
    var nome2 = "Ronaldo"; // redeclarando
    let nome = "Outra coisa";
  }
}

console.log(nome, nome2);

function falaOi() {
  var sobrenome = "Miranda";
  console.log(sobrenome);
}
falaOi();
