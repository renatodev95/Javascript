// Criando nossa classe para validação do formulário

class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector('.formulario');
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener('submit', (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const camposValidos = this.camposSaoValidos();
  }

  camposSaoValidos() {
    let valid = true;

    for (let campo of this.formulario.querySelectorAll('.validar')) {
      if (!campo.value) {
        const label = campo.previousElementSibling.innerText;
        this.criaErro(campo, 'Campo tal não pode estar em branco.');
        valid = false;
      }
    }
  }

  criaErro(campo, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend', div);
  }
}

const valida = new ValidaFormulario();
