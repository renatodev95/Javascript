/* Métodos úteis para Promises */

function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject('CAÍ NO ERRO');
        return;
      }
      resolve(msg.toUpperCase() + ' - Passei na promise.');
      return;
    }, tempo);
  });
}

// Promise.all()
/* O método Promise.all(iterable) retorna uma única Promise que resolve quando todas as promises no argumento iterável forem resolvidas ou quando o iterável passado como argumento não contém promises. É rejeitado com o motivo da primeira promise que foi rejeitada. */

const promises = [
  'Primeiro valor',
  esperaAi('Promise 1', 3000),
  esperaAi('Promise 2', 500),
  esperaAi('Promise 3', 1000),
  // esperaAi(1000, 1000),
  'Outro valor',
];

Promise.all(promises)
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (erro) {
    console.log(erro);
  });

// Promise.race()
/* O método Promise.race(iterable) retorna uma promise que resolve ou rejeita assim que uma das promises no iterável resolver ou rejeitar, com o valor ou razão daquela promise. */

const promises = [
  esperaAi('Promise 1', rand(1, 5)),
  esperaAi('Promise 2', rand(1, 5)),
  esperaAi('Promise 3', rand(1, 5)),
  esperaAi(1000, rand(1, 5)),
];

Promise.race(promises)
  .then((valor) => {
    console.log(valor);
  })
  .catch((e) => {
    console.log(e);
  });

// Promise.resolve()
/* O método Promise.resolve(value) retorna um objeto Promise que é resolvido com o valor passado. Se o valor for thenable (ex: tiver um método "then"), a promise retornada irá "seguir" esse thenable, adotando seu estado final; se o valor for uma promise, o objeto será o resultado da chamada Promise.resolve; do contrário a promise será realizada com o valor. */

function baixaPagina() {
  const emCache = false;
  if (emCache) {
    return Promise.resolve('Página em cache!');
  } else {
    return esperaAi('Baixei a página', 3000);
  }
}

baixaPagina()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((e) => console.log(e));

// Promise.resolve()
/* O método Promise.reject(motivo) retorna um objeto Promise que é rejeitada com um dado motivo. */

function baixaPagina() {
  const emCache = true;
  if (emCache) {
    return Promise.reject('Página em cache!');
  } else {
    return esperaAi('Baixei a página', 3000);
  }
}

baixaPagina()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((e) => console.log('ERRO', e));
