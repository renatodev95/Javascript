// 55. For in - Estrutura de repetição

const frutas = ["Pêra", "Maçã", "Uva"];

const pessoa = {
  nome: "Alexandre",
  sobrenome: "Gomes",
  idade: 26,
};

// For in --> lê os índices de um array e as chaves de um objeto

// percorrendo um array
for (let index in frutas) {
  console.log(frutas[index]);
}

// percorrendo um objeto
for (let chave in pessoa) {
  // utilizando chaves para exibir o conteúdo do objeto pessoa em cada chave
  console.log(chave, pessoa[chave]);
}
