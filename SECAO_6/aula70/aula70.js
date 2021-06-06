/* Revisando Objetos */

// Criação básica de objetos
const pessoa1 = new Object();
pessoa1.nome = 'Renato';
pessoa1.sobrenome = 'Pereira';
pessoa1.idade = 26;
pessoa1.falarNome = function () {
  return(`Meu nome é ${this.nome}`);
};
pessoa1.getDataNascimento = function (){
  const dataAtual = new Date().getFullYear();
  const dataNascimento = dataAtual - this.idade;
  return dataNascimento;
}

// Obtendo as chaves de um objeto com "For In" e acessando o valor do objeto em cada chave
// IMPORTANTE
for (let chave in pessoa1){
  console.log(pessoa1[chave])
}

// Factory functions
const criaPessoa = (nome, sobrenome) => {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return this.nome + ' ' + this.sobrenome;
    },
  };
};

// Constructor functions
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  // travando o objeto para que suas propriedades não possam ser alteradas
  // Cuidado com isso
  Object.freeze(this);  // também funciona com arrays
}

const p1 = new Pessoa('Renato', 'Pereira');
// Object.freeze(p1); travando o objeto p1 fora da função construtora
p1.nome = 'OUtra coisa';
console.log(p1);
