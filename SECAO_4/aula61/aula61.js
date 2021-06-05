/* Funções Geradoras */

function* geradora1() {
  // Código qualquer ...
  yield "Valor 1";
  // Código qualquer ...
  yield "Valor 2";
  // Código qualquer ...
  yield "Valor 3";
}

const g1 = geradora1();

// A função geradora pode ser iterada
for (const g of g1) {
  console.log(g);
}

// Podemos usar o método next para visualizar os valores em sequencia
// Veja que no final a função não tem mais valores disponíveis, apresentando "done: true"
console.log(g1.next().value); // Valor 1
console.log(g1.next().value); // Valor 2
console.log(g1.next()); // { value: 'Valor 3', done: false }
console.log(g1.next()); // { value: undefined, done: true }

/* ---------------------------------------------------------------------------------- */

// Criando um gerador infinito. O next poderá ser chamado indefinidamente e sempre será retornado um valor acrescentado de +1;
function* geradora2() {
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
}

/* ---------------------------------------------------------------------------------- */

// Gerador que delega tarefa para outro gerador
function* geradora3() {
  yield 0;
  yield 1;
  yield 2;
}

function* geradora4() {
  // Delegando a geradora4 para continuar de onde a geradora3 terminou
  yield* geradora3();
  yield 3;
  yield 4;
  yield 5;
}

const g4 = geradora4();
for (const g of g4) {
  console.log(g)
}

// Usando o exemplo de delegar funções com geradora usando outras funções que printam outros valores
function* geradora5(){
  yield function(){
    console.log("VIm do y1");  
  }

  yield function(){
    console.log("VIm do y2");
  }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();