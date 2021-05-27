// For - Clássico - Estrutura de repetição

// console.log("Linha 0")
// console.log("Linha 1")
// console.log("Linha 2")
// console.log("Linha 3")
// console.log("Linha 4")
// console.log("Linha 5")

for (let i = 0; i <= 10; i++) {
  console.log("Linha", i);
}

for (let i = 0; i <= 10; i++) {
  let parOuImpar = i % 2 === 0 ? "PAR" : "IMPAR";
  console.log(`${i} é ${parOuImpar}`);
}

// percorrendo um array com o for
const frutas = ["Maçã", "Pêra", "Uva"];
for (let i = 0; i < frutas.length; i++) {
  console.log(`Índice ${i} - ${frutas[i]}`);
}

// retornando os valores dentro do array com outro tipo de for (OF)
for (fruta of frutas) {
  console.log(fruta);
}

// retornando os ÍNDICES dentro do array com outro tipo de for (IN)
for (index in frutas) {
  console.log(index);
}
