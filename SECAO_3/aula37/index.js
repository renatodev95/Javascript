// 56. For of - Estrutura de repetição

const nomes = ["Renato", "Pereira", "Alexandre"];

// For clássico
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

console.log("------------------------------");

// For in
for (let i in nomes) {
  console.log(nomes[i]);
}

console.log("------------------------------");

// For of
for (let valor of nomes) {
  console.log(valor);
}

console.log("------------------------------");

// For each (passando função como parâmetro do FOR)
nomes.forEach(function (valor, indice, array) {
  console.log(valor, indice, array);
});

// For clássico - Geralmente utilizado com iteráveis (arrays ou strings)
// For in - Retorna o íncide ou chave (strings, arrays ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)
