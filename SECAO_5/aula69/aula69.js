/* forEach (está disponível apenas para arrays) */

// O método forEach() executa uma dada função em cada elemento de um array.

/* O forEach executa o callback fornecido uma vez para cada elemento da ordem com um valor atribuido. Ele não é invocado para propriedades de índices que foram deletados ou que não foram inicializados (por ex. em arrays esparsos). */

const array1 = [10, 20, 30];

let acumulador = 0;
array1.forEach((valor) => acumulador += valor);

console.log(acumulador);
