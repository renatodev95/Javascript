/* Objeto Map() */

/* 
O objeto Map é um mapa simples de chave/valor. Qualquer valor (objeto e valores primitivos) pode ser usado como uma chave ou um valor. 

Um objeto Map itera seus elementos em ordem de inserção — um loop for...of retorna um array de [chave, valor] para cada iteração.
Deve-se notar que um Map que é um mapa de um objeto, especialmente, um dicionário de dicionários somente irá mapear apenas para a ordem de inserção -- que é aleatória e não ordenada.

Todas as instancias de Map herdam de Map.prototype.
*/

const pessoas = [
  { id: 3, nome: 'Renato' },
  { id: 2, nome: 'Luiz' },
  { id: 1, nome: 'Helena' },
];

// Forma genérica de criação, sem usar Map
const novasPessoas1 = {};
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas[id] = { ...pessoa };
}

// Utilizando o map para criar um objeto Map de pessoas
const novasPessoas = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}

// Criar valores --> new Map();
// Setar valores --> set()
// Obter valores --> get();

// Localizando a pessoa na chave 2
console.log(novasPessoas.get(2));

// Podemos iterar sobre o Map, já que ele retorna um array
for (const pessoa of novasPessoas.values()) {
  console.log(pessoa);
}
