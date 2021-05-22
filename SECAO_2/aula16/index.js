// ARRAYS
const alunos = ["Luiz", "Maria", "João"];

console.log(typeof alunos);
console.log(alunos instanceof Array); // verificando se a variável é um ARRAY

// * Fatiando um array
console.log(alunos.slice(0, 3));

console.log(alunos[50]);

// * Removendo um ITEM ESPECÍFICO do array (sem alterar os índices dele):
delete alunos[1];
console.log(alunos[1]);

// * REMOVENDO o ÚLTIMO item do array:
const removido = alunos.pop(); // atribuindo o valor removido do array para uma constante

// Removendo o PRIMEIRO item do array:
alunos.shift();

// * Adicionando itens no COMEÇO do array
alunos.unshift("Luiza");
alunos.unshift("Fábio");

// * Adicionando itens ao FINAL do array (forma MAIS SIMPLES)
alunos.push("Luiza");

// * Adicionando itens ao FINAL do array (forma MENOS SIMPLES)
alunos[alunos.length] = "Luiza";
alunos[alunos.length] = "Fábio";
alunos[alunos.length] = "Luana";
