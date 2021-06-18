// 27. Mais sobre numbers (NÃO FAÇA CONTAS CON STRINGS)

let num1 = 0.7; // number
let num2 = 0.1; // number

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0

num1 = parseInt(num1.toFixed(2)); // CORRIGINDO IMPRECISÃO e Garantindo que a variável tenha realmente o valor desejado e que o tipo seja Inteiro ou Real

console.log(num1);
console.log(Number.isInteger(num1));

// console.log(String(num1) + num2);
// num1 = num1.toString(); // convertendo a variável 'number' para 'string'
// console.log(num1.toString(2)); // representação binária do valor de 'num1'
// console.log(num1.toFixed(2)); // definindo as casas decimais na exibição de um numero real
// console.log(Number.isInteger(num1)); // verificando SE A VARIÁVEL É DO TIPO INTEIRO
// let temp = num1 * "5"; // NaN (numero * string)
// console.log(temp); // verificando se a variável é Not a Number
