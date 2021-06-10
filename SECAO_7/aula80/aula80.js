/* POO -> Criando classes em JS */

// Criação da classe
class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  // Abaixo temos os métodos que já estarão automaticamente atrelados no Prototype
  falar() {
    console.log(`${this.nome} está falando.`);
  }
  comer() {
    console.log(`${this.nome} está comendo.`);
  }
  beber() {
    console.log(`${this.nome} está bebendo.`);
  }
}

// Instanciando uma classe
const p1 = new Pessoa('Renato', 'Pereira');

// Exibindo o objeto instanciado e seus métodos de classe
console.log(p1);
p1.falar();
p1.comer();
p1.beber();
