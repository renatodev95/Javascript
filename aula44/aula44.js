// Tratando e lançando erros (try, catch, throw)

function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("x e y precisam ser números");
  }

  return x + y;
}

// Se ocorrer algum erro dentro do bloco TRY, CATCH será executado,
// caso contrário, o bloco TRY será executado.
try {
  console.log(soma(1, 2));
  console.log(soma("1", 2));
} catch (error) {
  console.log("Um erro mais amigável aqui");
}
