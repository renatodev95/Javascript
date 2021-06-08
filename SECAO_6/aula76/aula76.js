/* Herança */

// Métodos --> possibilidade de: aumento, desconto
// Produto --> Camiseta = Cor, caneca = material

// Criando a função construtora principal (proposito geral)
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

// Criando a função construtora específica de CAMISETA (proposito específico)
// e fazendo com que ela herde as propriedades do construtor principal "Produto"
function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco); // interligando as duas funções construtoras
  this.cor = cor;
}
// Configurando o prototype de 'Camiseta' para ter os mesmos métodos de
// 'Produto', mas tornando possível modificar ou adicionar novos métodos
// sem comprometer o prototype original de 'Produto'.
Camiseta.prototype = Object.create(Produto.prototype);
// Configurando o construtor de 'Camiseta'
Camiseta.prototype.constructor = Camiseta;

// Sobrescrevendo o método de aumento da função original de "Produto"
Camiseta.prototype.aumento = function (percentual) {
  this.preco = this.preco + (percentual / 100) * this.preco;
};

// Criando a função construtora específica de CANECA (proposito específico)
// e fazendo com que ela herde as propriedades do construtor principal "Produto"
function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco); // caneca herdando de 'Produto'
  this.material = material;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    // Criando getter e setter para a propriedade "estoque"
    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (typeof valor !== 'number') return;
      estoque = valor;
    },
  });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('Generico', 111);
const camiseta = new Camiseta('Regata', 75, 'Preta');
const caneca = new Caneca('Caneca normal', 13, 'Plástico', 5);

console.log(caneca);
console.log(camiseta);
console.log(produto);
