/* Factory Functions + Prototypes */

// Trabalhando com COMPOSIÇÃO/MIXING
const falar = {
  falar() {
    console.log(`${this.nome} está falando`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} está falando`);
  },
};

const beber = {
  beber() {
    console.log(`${this.nome} está falando`);
  },
};

// A composição/mixing está ocorrendo aqui, com os métodos criados acima sendo passados em Object.assign
const pessoaPrototype = Object.assign({}, falar, comer, beber);

// Trabalhando com Prototypes em Factory Functions
function criaPessoa(nome, sobrenome) {
  // Criando o Prototype para esta FACTORY FUNCTION, com os métodos dentro de "pessoaPrototype"
  return Object.create(pessoaPrototype, {
    nome: {
      value: nome,
      enumerable: true,
    },
    sobrenome: {
      value: sobrenome,
      enumerable: true,
    },
  });
}

const p1 = criaPessoa("Renato", "Pereira");
const p2 = criaPessoa("Maria", "A.");
console.log(p2);
p2.falar();
