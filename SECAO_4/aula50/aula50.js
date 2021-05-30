// Parâmetros da função

// A função definida com a palavra "function" tem uma variável especial chamada "arguments" que sustenta todos os argumentos enviados (NÃO FUNCIONA COM ARROW FUNCTIONS)
function funcao(a, b, c) {
  let total = 0;
  for (let arg of arguments) {
    total += arg;
  }
  console.log(total, a, b, c);
}

funcao(1, 2, 3, 4, 5, 6, 7);

// -----------------------------------------------------------------

// Atribuindo valor padrão para parâmetros
function funcao2(a, b = 2, c = 4) {
  console.log(a + b + c);
}
funcao2(2, 10, 20);

// -----------------------------------------------------------------

// Trabalhando com desestruturação de objetos
function funcao3({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}
let obj = { nome: "Renato", sobrenome: "Santos", idade: 20 };
funcao3(obj);

// -----------------------------------------------------------------

function funcao4([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}

funcao4(["Renato", "Pereira", 26]);

// -----------------------------------------------------------------

// Trabalhando com o rest operator (sempre deve ser o ultimo parâmetro)
function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "/") acumulador /= numero;
    if (operador === "*") acumulador *= numero;
  }

  console.log(acumulador);
}
conta("+", 0, 20, 30, 40, 50);

// -----------------------------------------------------------------

// Exibindo os argumentos de arrow function utilizando rest operator
const conta2 = (...args) => {
  console.log(args);
};
conta2("+", 1, 20, 30, 40, 50);
