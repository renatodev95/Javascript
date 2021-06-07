// Getters e Setters (OBJETOS)

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    configurable: true, // configurável
    get: function () {
      return estoquePrivado;
    },
    // Configurando a propriedade estoque para aceitar apenas valores do tipo number
    set: function (valor) {
      if (typeof valor !== 'number') {
        throw new TypeError('Mensagem');
      }
      estoquePrivado = valor;
    },
  });
}

function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      nome = valor.replace('coisa', '');
    },
  };
}

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa';
console.log(p2.nome);
