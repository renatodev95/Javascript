/* Concatenando arrays */

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
// concatenando a1 com a2 usando o método concat(), podemos concatenar mais itens
const a3 = a1.concat(a2, [7, 8, 9], 10, 'Renato');
// podemos usar o spread operator para realizar concatenação
const a4 = [...a1, ...a2, ...[7, 8, 9], 'Renato'];

console.log(a4);
console.log(a3);
