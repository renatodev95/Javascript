import geraSenha from './geradores';

// Organizando nossas variáveis a partir das classes do nosso documento HTML.
const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha');

// Aqui exportamos essa função anônima para o nosso arquivo JS principal.
export default () => {
  // Criamos um ouvidor de evento click para o botão '.gerar-senha', assim que ele for clicado será disparada a função que vai jogar a senha para dentro do HTML de '.senha-gerada'.
  gerarSenha.addEventListener('click', () => {
    senhaGerada.innerHTML = gera();
  });
};

// Abaixo criamos uma senha a partir da função que se encontra no módulo importado.
function gera() {
  const senha = geraSenha(
    qtdCaracteres.value, // valor do número que se encontra no input '.qtd-caracteres'.
    chkMaiusculas.checked, // retorna um valor booleano informando se está checkado ou não.
    chkMinusculas.checked, // retorna um valor booleano informando se está checkado ou não.
    chkNumeros.checked, // retorna um valor booleano informando se está checkado ou não.
    chkSimbolos.checked // retorna um valor booleano informando se está checkado ou não.
  );

  // Se nenhum input for marcado será exibida a mensagem ao invés da nova senha.
  return senha || 'Nada selecionado!';
}
