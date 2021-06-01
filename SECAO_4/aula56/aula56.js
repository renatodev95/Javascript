// Funções fábrica (Factory Functions)
// Funções que retornam objetos

function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,

    // Getter
    get nomeCompleto() {
      const nomeInteiro = this.nome + " " + this.sobrenome;
      return nomeInteiro;
    },

    // Setter --> configurando um novo nome
    set nomeCompleto(valor) {
      // o nome se torna um array, que será dividido pelos espaços;
      // o primeiro nome é passado através do método shift();
      // o restante do array é juntado novamente com o método join()
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
      return `${this.nome} ${this.sobrenome}`;
    },

    // funções dentro de objetos
    fala: function (assunto = "NADA...") {
      return `${this.nome} está falando sobre ${assunto}`;
    },

    altura: a,
    peso: p,

    // GETTER --> veja que a palavra get faz com que a função imc se passe por um atributo de classe em precisar chamar a função no console.log() ao final do codigo
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Renato", "Pereira", 1.8, 70);
p1.nomeCompleto = "Luiz Otávio Miranda"; // alterando o nome completo com o setter
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.imc);
console.log(p1.fala());
