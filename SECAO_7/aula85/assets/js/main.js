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
    const senhasValidas = this.senhasSaoValidas();

    // Se todos os campos forem válidos e as senhas também, o formulário é enviado
    if (camposValidos && senhasValidas) {
      alert('Formulário enviado com sucesso!');
      this.formulario.submit();
    }
  }

  // Fazendo a verificação de validade das senhas
  senhasSaoValidas() {
    let valid = true;

    const senha = this.formulario.querySelector('.senha');
    const repetirSenha = this.formulario.querySelector('.repetir-senha');

    if (senha.value !== repetirSenha.value) {
      valid = false;
      this.criaErro(senha, 'Campos "senha" e "repetir senha" precisam ser iguais');
      this.criaErro(repetirSenha, 'Campos "senha" e "repetir senha" precisam ser iguais');
    }

    if (senha.value.length < 6 || senha.value.length > 12) {
      valid = false;
      this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
    }

    return valid;
  }

  camposSaoValidos() {
    let valid = true;

    // Sempre que for feita a tentativa de envio do formulário e ele contiver algum erro, os erros anteriores são removidos para evitar a repetição/acúmulo dos mesmos erros na tela
    for (let errorText of this.formulario.querySelectorAll('.error-text')) {
      errorText.remove();
    }

    for (let campo of this.formulario.querySelectorAll('.validar')) {
      const label = campo.previousElementSibling.innerText;

      // Se o campo estiver vazio vai retornar falso e um erro
      if (!campo.value) {
        this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
        valid = false;
      }

      // Se o campo for de CPF, utilizamos o validador de CPF
      if (campo.classList.contains('cpf')) {
        if (!this.validaCPF(campo)) valid = false;
      }

      // Se o campo for de USUARIO, utilizamos a função interna para validar usuário
      if (campo.classList.contains('usuario')) {
        if (!this.validaUsuario(campo)) valid = false;
      }
    }

    // Ao final retornamos o resultado lógico dos testes feitos dentro do nosso FOR
    return valid;
  }

  // Validando o campo usuário
  validaUsuario(campo) {
    const usuario = campo.value;
    let valid = true; // setando a nossa FLAG

    // Se o campo usuário estiver com menos de 3 ou mais de 12 caracteres, exibimos um erro e a flag é avaliada em FALSO
    if (usuario.length < 3 || usuario.length > 12) {
      this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
      valid = false;
    }

    // Usando expressões regulares para verificar se o usuário contem apenas letras e/ou números. Caso contrário, exibimos um erro e a flag é avaliada em FALSO
    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(
        campo,
        'Usuário precisa conter apenas letras e/ou números.'
      );
      valid = false;
    }

    // Ao final retornamos o resultado lógico dos testes feitos no campo USUARIO
    return valid;
  }

  // Validando o campo CPF
  validaCPF(campo) {
    // Instanciando a constante cpf com a classe que fizemos no arquivo validaCPF.js
    const cpf = new ValidaCpf(campo.value);

    // Se nossa constante instanciada for validada como falso, retornamos um erro e a avaliaçãoo lógica em FALSO
    if (!cpf.valida()) {
      this.criaErro(campo, 'CPF inválido.');
      return false;
    }

    // Se o cpf for válido, retornamos o resultado lógico VERDADEIRO
    return true;
  }

  // Esta função cria um erro, gerando uma div e inserindo dentro dela a nossa mensagem, além de criar uma classe, que no nosso CSS será estilizada em letras menores e uma cor vermelha para indicar o erro.
  criaErro(campo, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend', div);
  }
}

const valida = new ValidaFormulario();
