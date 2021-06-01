// Funções imediatas (IIFE - Immediatly invoked function expression)

// Tudo está envolvido nessa função e ela protege o código do escopo global;
// Dentro dela pode ser feita uma codificação normal.
// Veja que no final ela chama a si mesma com o abrir e fechar de parenteses.
(function () {
  const sobrenome = "Pereira";
  function criaNome(nome) {
    return nome + " " + sobrenome;
  }

  function falaNome() {
    console.log(criaNome("Renato"));
  }

  falaNome();
})();

// Essa constante não gera conflito com a constante criada dentro da função imediata
const nome = "Qualquer coisa";
