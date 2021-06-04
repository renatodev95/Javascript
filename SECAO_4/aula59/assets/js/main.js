// Calculadora com Função Construtora
// Reproduzindo a mesma calculadora da aula 57, utilizando função construtora

function Calculadora() {
  this.display = document.querySelector(".display");

  this.inicia = () => {
    this.cliqueBotoes();
    this.pressionaEnter();
  };

  this.pressionaEnter = () => {
    this.display.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        this.realizaConta();
      }
    });
  };

  this.realizaConta = () => {
    let conta = this.display.value;

    try {
      conta = eval(conta);

      if (!conta) {
        alert("Conta inválida");
        return;
      }

      this.display.value = String(conta);
    } catch (e) {
      alert("Conta inválida");
      return;
    }
  };

  this.clearDisplay = () => {
    this.display.value = "";
  };

  this.apagaUm = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.cliqueBotoes = () => {
    document.addEventListener("click", (e) => {
      const element = e.target;

      if (element.classList.contains("btn-num")) {
        this.btnParaDisplay(element.innerText);
      }

      if (element.classList.contains("btn-clear")) {
        this.clearDisplay();
      }

      if (element.classList.contains("btn-del")) {
        this.apagaUm();
      }

      if (element.classList.contains("btn-eq")) {
        this.realizaConta();
      }
    });
  };

  this.btnParaDisplay = (valor) => {
    this.display.value += valor;
  };
}

const calculadora = new Calculadora();

calculadora.inicia();
