/* POO -> Herança com classes */

class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(this.nome + ' já está ligado');
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(this.nome + ' já está desligado');
      return;
    }

    this.ligado = false;
  }
}

// Aqui vem a HERANÇA (com a palavra "extends" informamos de quem a nossa classe vai HERDAR)
class Smartphone extends DispositivoEletronico {
  // Quando utilizamos o "extends" e criamos um construtor dentro da classe filha,
  // e a classe pai já possui um construtor, é necessário chamar o "super"
  constructor(nome, cor, modelo) {
    // chamando o construtor da superclass para dentro da classe filha
    super(nome);

    // Criando os atributos específicos dessa classe filha
    this.console = cor;
    this.modelo = modelo;
  }
}

class Tablet extends DispositivoEletronico {
  constructor(nome, temWifi) {
    super(nome);
    this.temWifi = temWifi;
  }

  // Sobrescrevendo o método ligar() da classe PAI
  ligar() {
    console.log('Você alterou o método ligar().');
  }

  // Criando um método apenas para essa classe
  falaOi() {
    console.log('Oi!');
  }
}

const smart1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');

const t1 = new Tablet('iPad', true);
t1.falaOi();
