/* 
Object.defineProperty() --> para uma chave
Object.defineProperties() --> para várias chaves
*/

function Produto(nome, preco, estoque) {
  // Redefinindo as configurações de uma propriedade só
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra (ou não) a chave quando usamos "for in" ou "Object.keys"
    value: estoque, // valor recebido do parâmetro
    writable: true, // pode alterar o valor ou não
    configurable: false, // configurável ou não (apagar/reconfigurar)
  });

  // Redefinindo as configurações de mais de uma propriedade
  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostra (ou não) a chave quando usamos "for in" ou "Object.keys"
      value: nome, // valor recebido do parâmetro
      writable: true, // pode alterar o valor ou não
      configurable: false, // configurável ou não (apagar/reconfigurar)
    },
    preco: {
      enumerable: true, // mostra (ou não) a chave quando usamos "for in" ou "Object.keys"
      value: preco, // valor recebido do parâmetro
      writable: true, // pode alterar o valor ou não
      configurable: false, // configurável ou não (apagar/reconfigurar)
    },
  });
}

const produto1 = new Produto('Camiseta', 20, 3);

console.log(produto1);

// Abaixo temos 2 formas de iterar sobre as chaves de um objeto
console.log(Object.keys(produto1));

for (let chave in produto1) {
  console.log(chave);
}
