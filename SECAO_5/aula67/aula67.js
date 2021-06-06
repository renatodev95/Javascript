/* Reduce - Reduzindo o array */

/* O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno. */

/* ---------------------------------------------------------------------------------------- */

// Some todos os números (Reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosSomaPares = numeros.reduce((acumulador, valor) => {
  if (valor % 2 === 0) acumulador += valor;
  return acumulador;
}, 0);

const numerosSomaTotal = numeros.reduce((acumulador, valor) => (acumulador += valor));

/* ---------------------------------------------------------------------------------------- */

// Retorne a pessoa mais velha entre os objetos
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 10 },
  { nome: 'Rosana', idade: 64 },
  { nome: 'Wallace', idade: 63 },
];

// Esta função vai percorrer todo o array de objetos e encerrar com o retorno do objeto que foi identificado com o maior valor na propriedade `idade`.
const pessoaMaisVelha = pessoas.reduce((acumulador, pessoa) => {
  if (pessoa.idade > acumulador.idade) return pessoa;
  return acumulador;
});

/* ---------------------------------------------------------------------------------------- */

/* Descrição

O valor de retorno da sua função reducer é atribuída ao acumulador. O acumulador, com seu valor atualizado, é repassado para cada iteração subsequente pelo array, que por fim, se tornará o valor resultante, único, final.

A primeira vez que o callback é chamado, o acumulador e o valorAtual podem ter um de dois valores possíveis. Se o valorInicial tiver sido fornecido na chamada à função reduce(), então o acumulador será igual ao valorInicial e o valorAtual será igual ao primeiro valor no array. Caso nenhum valorInicial seja fornecido, acumulador será igual ao primeiro valor no array, e valorAtual será igual ao segundo.

Se o array estiver vazio e o valorInicial não tiver sido informado, uma exceção do tipo TypeError será lançada. */
