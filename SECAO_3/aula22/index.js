/* 

OPERAODRES LÓGICOS
&& -> AND -> E (Todas as expressões precisam ser verdadeiras para retornar TRUE)
|| -> OR -> OU (Pelo menos uma expressão precisa ser verdadeira para retornar TRUE)
! -> NOT -> NÃO (Inverte o resultado lógico da expressão)
*/

const expressaoAnd = true && true && true && false; // AND
const expressaoOr = true || false; // OR
const expressaoNot = !true; // NOT

console.log(expressaoOr);
console.log(expressaoNot);

const usuario = "Luiz";
const senha = "123456";
const vaiLogar = usuario === "Luiz" && senha === "12345";
console.log(vaiLogar);

console.log(!false);
