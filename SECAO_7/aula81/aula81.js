/* POO -> Getters e Setters */

// Criando um symbol para proteger a propriedade velocidade de alterações externas
const _velocidade = Symbol('velocidade');
class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0;
  }

  // Criando um setter para tornar possível a alteração da propriedade que está protegida
  set velocidade(valor) {
    console.log('SETTER');
    if (typeof valor !== 'number') return;
    if (valor > 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }

  // Criando um getter para retornar a propriedade "velocidade"
  get velocidade() {
    console.log('GETTER');
    return this[_velocidade];
  }

  acelerar() {
    const limite = 100;
    if (this[_velocidade] >= limite) return;
    this[_velocidade]++;
  }

  freiar() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

const c1 = new Carro('Fusca');

console.log(c1.velocidade);
c1.velocidade = 33;
console.log(c1.velocidade);
