// Funções recursivas (funções que chamam a si mesmas)

function recursiva(max) {
  if (max > 10) return; // flag -> assim que max chegar a 10, a recursividade é encerrada;
  console.log(max); // exibindo o valor atual de max na tela;
  max++; // a cada chamada da recursividade, o parâmetro max será incrementado em +1;
  recursiva(max); // chamando a função dentro dela mesma enquanto max não for maior que 10.
}

// Recursividade para encontrar o fatorial de um número
function fatorial(num) {
  if (num <= 1) return 1;
  return num * fatorial(num - 1);
}

recursiva(0);
