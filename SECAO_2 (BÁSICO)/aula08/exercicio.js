const nome = "Renato";
const sobrenome = "Pereira Santos";
const idade = 26;
const peso = 70;
const altura = 1.8;
let imc = peso / altura ** 2;
let anoNascimento = 2021 - idade;

console.log(`${nome} tem ${idade} anos, pesa ${peso}kg`);
console.log(`tem ${altura}m de altura e seu IMC é de ${imc.toFixed(2)}`);
console.log(`${nome} nasceu em ${anoNascimento}`);
