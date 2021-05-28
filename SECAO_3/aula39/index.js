// While e Do While - Estrutura de repetição

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

// Executando o código abaixo enquanto o número aleatório for diferente de 10
// WHILE - Checa a condição antes de executar o laço.
while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}

// DO WHILE - Executa primeiro e checa a condição no final.
do {
  rand = random(min, max);
  console.log(rand);
} while (rand !== 10);
