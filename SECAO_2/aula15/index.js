// Trabalhando com o objeto MATH

let num1 = 9.54578;
let num2 = Math.floor(num1); // arredondando um número real para baixo
let num2 = Math.ceil(num1); // arredondando um número real para cima
let num2 = Math.round(num1); // arredondando para o número inteiro mais próximo
console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6)); // obtendo o MAIOR número de uma sequencia.
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6)); // obtendo o MENOR número de uma sequencia.
const aleatorio = Math.random() // gerando um número aleatório entre 0 e 1 (o 1 não é incluido)
const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // gerando um número aleatório entre 10 e 5 (E ARREDONDANDO PARA O NÚMERO INTEIRO MAIS PRÓXIMO)

// IMPORTANTE: Em JavaScript a DIVISÃO POR ZERO É VÁLIDA (avaliada como TRUE), gerando um resultado de INFINITY, tome CUIDADO COM ISSO!