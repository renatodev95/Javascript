// Calculadora com Função Construtora
// Reproduzindo a mesma calculadora da aula 57, utilizando função construtora

function Calculadora() {
  this.display = document.querySelector(".display");

  // A calculadora inicia e faz as operações baseada nos clicks e na captura do ENTER
  this.inicia = () => {
    this.capturaCLiques();
    this.capturaEnter();
  };

  // Adicionando a função Enter para realizar conta, além do botão de igual
  this.capturaEnter = () => {
    this.display.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        this.realizaConta();
      }
    });
  };

  // Capturando os clicks nos botões da página html
  this.capturaCLiques = () => {
    document.addEventListener("click", (event) => {
      const el = event.target;
      if (el.classList.contains("btn-num")) this.addNumDisplay(el);
      if (el.classList.contains("btn-clear")) this.clear();
      if (el.classList.contains("btn-del")) this.del();
      if (el.classList.contains("btn-eq")) this.realizaConta();
    });
  };

  // Retornando o resultado para dentro do display se a conta for válida
  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);

      if (!conta) {
        alert("Conta inválida");
        return;
      }

      this.display.value = conta;
    } catch (error) {
      alert("Conta inválida");
      return;
    }
  };

  // Adicionando os valores do input ao display
  this.addNumDisplay = (el) => {
    this.display.value += el.innerText;
    // Cada vez que um botão é clicado, o foco volta para o display
    // evitando que o botão Enter seja compreendido como um novo click pelo navegador
    this.display.focus();
  };

  // Limpando todo o display da calculadora
  this.clear = () => (this.display.value = "");

  // Limpando um valor de cada vez
  this.del = () => (this.display.value = this.display.value.slice(0, -1));
}

// A constante recebe um novo molde do construtor `    new Calculadora()`
const calculadora = new Calculadora();

// Iniciando a calculadora de fato
calculadora.inicia();
