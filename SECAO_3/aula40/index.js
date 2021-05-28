// Break e Continue

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
  // no momento em que o comando continue for encontrato, a repetição será pulada para o próximo laço.
  if (numero === 2) {
    console.log("Pulei o número 2");
    continue;
  }

  console.log(numero);

  // no momento em que o comando "break" for encontrada, o laço de repetição será encerrado
  if (numero === 7) {
    console.log("Encontrei o número 7! FIM...");
    break;
  }
}
