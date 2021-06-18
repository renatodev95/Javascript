/*          VALORES PRIMITIVOS e VALORES POR REFERÊNCIA
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - VALORES COPIADOS

Referência (mutável) - array, object, function - PASSADOS POR REFERENCIA
*/

/* const a = {
    nome: "Luiz",
    sobrenome: "Otavio",
};

const b = {...a}; // criando uma cópia sem referenciar o mesmo endereço de memória em objeto

a.nome = "João";
console.log(b);
console.log(a); */

// Neste caso é criado um vínculo entre as variáveis, então a mudança em uma vai implicar em uma mudança na outra;
/* let a = [1, 2, 3]; */
// A VARIÁVEL b ESTÁ APONTANDO PARA O MESMO ENDEREÇO DE MEMÓRIA QUE 'a'
// let b = a; // aqui o valor de 'b' está linkado com o valor de 'a'

// FAZENDO UMA CÓPIA SEM REFERENCIAR O MESMO ENDEREÇO DE MEMÓRIA
/* let b = [...a]; */ // aqui o valor de 'b' é totalmente independente (ESSE MÉTODO TAMBEM FUNCIONA COM objetos)

/* console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b); */

// A STRING É IMUTÁVEL
/* let nome = 'Luiz';
nome[0] = 'R'; // aqui não dá pra mudar a STRING
console.log(nome[0], nome); */

/* let a = 'A';
let b = a; // copiando o valor de 'a' para a variável b (QUANDO O DADO É PRIMITIVO)
console.log(a, b);

a = 'Outra coisa';
console.log(a, b); */
