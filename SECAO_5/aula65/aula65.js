/* FILTER - Filtrando o array (sempre retorna um array com a mesma quantidade de elementos do array original, ou menos) */

/* O método filter() cria um array preenchido com todos os elementos do array que passam em um teste passado como argumento (fornecido como uma função).
Nota: filter() não executa a função para elementos da matriz sem valores.
Nota: filter() NÃO MODIFICA O ARRAY ORIGINAL. */

/* ----------------------------------------------------------------------------------------- */

// Usando Filter para retornar os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

// Criando uma função que pode ser passada como parâmetro para filter
function callbackFilter(valor) {
  return valor > 10;
}

// Utilizando arrow function
const numerosFiltrados = numeros.filter((valor) => valor > 10);

/* ----------------------------------------------------------------------------------------- */

// 1º Retorne as pessoas que tem o nome com 5 letras ou mais
// 2º Retorne as pessoas com mais de 50 anos
// 3º Retorne as pessoas cujo nome termina com a
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

const nomesComMaisDeCincoLetras = pessoas.filter((obj) => obj.nome.length >= 5); // 1º

const maisDeCinquentaAnos = pessoas.filter((obj) => obj.idade > 50); // 2º

const nomeTerminaComA = pessoas.filter((obj) => obj.nome.endsWith('a')); // 3º
