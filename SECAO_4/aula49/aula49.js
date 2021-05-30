// 68. Maneiras de declarar funções

// 1º: Declaração de função (Function hoisting)
function falaOi() {
  console.log("Oi");
}

falaOi();

// --------------------------------------------------------------------------------

// 2º: First-class objects (Objetos de primeira classe) (Tratando funções como dados)
// Function expression (jogando uma expressão dentro de uma variável)
const souUmDado = function () {
  console.log("Sou um dado.");
};

souUmDado();

// passando como parâmetro e executando uma função dentro da outra
function executaFuncao(funcao) {
  funcao();
}

executaFuncao(souUmDado);

// --------------------------------------------------------------------------------

// 3º: Arrow function
const arrowFunction = () => {
  console.log("Sou uma arrow function");
};

arrowFunction();

// --------------------------------------------------------------------------------

// Dentro de objetos também podem haver funções
const objeto = {
  falar() {
    console.log("Estou falando!");
  },
};

objeto.falar();
