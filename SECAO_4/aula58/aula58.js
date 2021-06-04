/* Funções construtoras (constructor functions) */

// Função construtora -> objetos
// * É como um molde para gerar novos objetos;
// * O nome da função se inicia com letra maiúscula;
// * Exemplo: Pessoa(new)
// * Não se pode esquecer de usar a palavra `new`, pois é ela que caracteriza a função construtora, além de criar um NOVO OBJETO vazio e fazer o `this` apontar para o objeto que está sendo utilizado, sem precisar utilizar o comando `return`;

function Pessoa(nome, sobrenome) {
  // Atributos ou métodos privados (não estarão disponíveis fora do corpo do objeto)
  const ID = 123456;
  const metodoInterno = () => {
    
  };

  // Atributos ou métodos públicos (estarão disponíveis com a notação de ponto)
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.metodo = () => {
    console.log("Sou um método");
  };
}

const p1 = new Pessoa("Renato", "Pereira");
const p2 = new Pessoa("Luiz", "Miranda");
p1.metodo();
