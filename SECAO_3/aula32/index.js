// Atribuição via desestruturação (Arrays)

// ... rest, ...spread
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// atribuindo valores para as variáveis abaixo via desestruturação (atenção a sintaxe na variavel `resto`)
const [um, dois, tres, ...resto] = numeros;
const [um, , tres, , cinco, , sete] = numeros;

const numeros = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const [lista1, lista2, lista3] = numeros;
const [, , seis] = lista2;

console.log(lista1, lista2, lista3);
