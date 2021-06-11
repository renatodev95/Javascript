/* POO -> Métodos de instância e estáticos */

// Métodos estáticos são métodos que podemos acessar na classe SEM INSTANCIAR essa classe(sem utilizar a palavra NEW). Além disso, esses métodos não estarão disponíveis dentro da instância. São básicamente FUNÇÕES normais que poderão estar dentro da nossa classe, de acordo com a necessidade. SÓ CONSEGUIMOS ACESSAR MÉTODOS ESTÁTICOS PELA PRÓPRIA CLASSE.

class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  // Método de instância
  aumentarVolume() {
    this.volume += 2;
  }

  // Método de instância
  diminuirVolume() {
    this.volume -= 2;
  }

  // Método estático
  // Criação do método estático (este método não tem acesso aos dados da instância)
  static trocaPilha() {
    console.log('A pilha foi trocada!');
  }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();

console.log(controle1);

// Veja que não precisamos da instância para executar esse método
ControleRemoto.trocaPilha();
