// DADOS PRIMITIVOS --> String, number, undefined, null, boolean
const nome = "Renato"; // string
const nome1 = "Renato"; // string
const nome2 = `Renato`; // string
const num1 = 10; //number
const num2 = 10.52; // number
let nomeAluno; // undefined -> não aponta para local nenhum na memória
const sobrenomeAluno = null; // undefined -> não aponta para local nenhum na memória
const boolean = true; // Boolean -> true, false

const a = [1, 2];
const b = a; // atribuição de valor por referência

console.log(a, b);

b.push(3);

console.log(a, b);
