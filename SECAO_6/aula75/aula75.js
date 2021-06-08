/* Manipulando Prototypes */

// new Object -> Object.prototype
const objetoA = {
  chaveA: 'Audi',
  // __proto__: Object.prototype
};

// new Object -> Object.prototype
const objetoB = {
  chaveB: 'Mercedes',
  // __proto__: objetoA
};

const objetoC = new Object();
objetoC.chaveC = 'Ferrari';

// Configurando o prototype de um objeto
// Aqui conseguimos fazer com que a "chaveA" seja acessada pelo "objetoB"
Object.setPrototypeOf(objetoB, objetoA);
Object.setPrototypeOf(objetoC, objetoB); // objetoC herdando de objetoB, que herdou de objetoA
console.log(objetoB.chaveA);
console.log(objetoC.chaveC);

/* -------------------------------------------------------------------------------------- */

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

// Definindo os métodos do objeto fora da função construtora
Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - (percentual / 100) * this.preco;
};

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + (percentual / 100) * this.preco;
};

const produto1 = new Produto('Camiseta', 50);

// ATENÇÃO! -> as chaves tem que ser iguais entre os objetos, caso contrário vai dar ruim
const p2 = {
  nome: 'Caneca',
  preco: 15,
};

// Configurando o prototype de 'p2' para herdar os métodos do construtor 'Produto'
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(10);

// Configurando o prototype de um objeto já na sua criação
const p3 = Object.create(Produto.prototype, {
  preco: {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 99,
  },
  estoque: {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 42,
  },
});
p3.aumento(10);
console.log(p3)