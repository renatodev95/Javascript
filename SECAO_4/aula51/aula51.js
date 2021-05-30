// Retorno da função (return)

// * Retorna um valor;
// * Termina a função;

// Criando uma função que retorna outra função
function criaMultiplicador(multiplicador) {
  // Multiplicador
  return function (n) {
    return n * multiplicador;
  };
}

// cada constante está recebendo uma função que vai multiplicar o valor pelo parâmetro passado
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);

// chamando as funções que estão dentro de cada constante para multiplicar os números dos argumentos
console.log(duplica(2));
console.log(triplica(2));
console.log(quadruplica(2));
