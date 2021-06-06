/* Combinando Filter + Map + Reduce */

// Retorne a soma do dobro de todos os pares
// -> Filtrar pares;
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// ENCADEANDO CADA FUNÇÃO DENTRO DA OUTRA
const numerosSomaDobroPares = numeros
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((acc, valor) => (acc + valor));

console.log(numerosSomaDobroPares);

/* ----------------------------------------------------------------------------------------- */

// SOLUÇÃO MAIS LONGA

const numerosPares = numeros.filter((valor) => valor % 2 === 0);
const numerosDobro = numerosPares.map((valor) => valor * 2);
const numerosSomaDobroPares2 = numerosDobro.reduce((acc, valor) => (acc += valor));

console.log(numerosSomaDobroPares2)