/* OPERAÇÃO TERNÁRIA */
// É uma boa opção para situações onde tenha apenas um `if, else` (APENAS DUAS OPÇÕES)
// (condição) ? "Valor para verdadeiro" : "Valor para falso"

const pontuacaoUsuario = 2000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuário NORMAL";

const corUsuario = "Pink";
const corPadrao = corUsuario || "Azul";

console.log(nivelUsuario + " e " + corPadrao);
