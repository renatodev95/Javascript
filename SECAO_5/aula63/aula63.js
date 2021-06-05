/* Método Splice */

const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
// Argumentos de splice --> nomes.splice(índice, qtd delete, elem1,elem2,elem3);
// * índice -> de onde começa a manipluação do splice
// * qtd delete -> quantidade de itens que serão deletados
// * elem1,eleme2... -> Itens que serão adicionados no array

/* ---------------------------------------------------------------------------------------- */
// * Usando o splice para remover itens do array *

// Simulando o pop()
const removidos1 = nomes.splice(-1, 1); // removendo o último elemento, informando a qtd delete que vai até o final com o método MAX_VALUE do array;

// Simulando o shift() --> removendo do começo do array, deletando apenas 1 elemento
const removidos2 = nomes.splice(0, 1);

/* ---------------------------------------------------------------------------------------- */
// * Usando o splice para inserir itens no array *

// Simulando o push()
const inseridos1 = nomes.splice(nomes.length, 0, 'Renato', 'Pereira', 'Santos');

// Simulando o unshift()
const inseridos2 = nomes.splice(0, 0, 'Pedro');

console.log(nomes, inseridos2);
