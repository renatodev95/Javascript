/* Promises */

/* 
Promise é um objeto usado para processamento assíncrono. Um Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.
*/

function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject(new Error('ERRO'));

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAi('Conexão com o BD', rand(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return esperaAi('Buscando dados da BASE', rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
    return esperaAi(22222, rand(1, 4));
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .then(() => {
    console.log('Exibindo dados na tela', rand(1, 2));
  })
  .catch((e) => {
    console.log('ERRO:', e);
  });

console.log('Isso aqui será exibido antes de qualquer promisse.');

/* 
Descrição
Uma Promise representa um proxy para um valor que não é necessariamente conhecido quando a promessa é criada. Isso permite a associação de métodos de tratamento para eventos da ação assíncrona num caso eventual de sucesso ou de falha. Isto permite que métodos assíncronos retornem valores como métodos síncronos: ao invés do valor final, o método assíncrono retorna uma promessa ao valor em algum momento no futuro.

Um Promise está em um destes estados: 
* pending (pendente): Estado inicial, que não foi realizada nem rejeitada.
* fulfilled (realizada): sucesso na operação.
* rejected (rejeitado):  falha na operação.

Uma promessa pendente pode se tornar realizada com um valor ou rejeitada por um motivo (erro). Quando um desses estados ocorre, o método then do Promise é chamado, e ele chama o método de tratamento associado ao estado (rejected ou resolved).  Se a promessa foi realizada ou rejeitada quando o método de tratamento correspondente for associado, o método será chamado, deste forma não há uma condição de competição entre uma operação assíncrona e seus manipuladores que estão sendo associados.

Como os métodos Promise.prototype.then e Promise.prototype.catch  retornam promises, eles podem ser encadeados — uma operação chamada composição.
*/
