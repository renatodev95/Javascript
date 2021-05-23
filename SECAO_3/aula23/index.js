/*                Avaliação de Curto-Circuito (Short-Circuit)

&& -> false && true -> false ("retorna o valor mesmo")
|| ->

FALSY (valores avaliados em FALSE no javascript):

  *false (falso literal)
  0
  "", '', `` (string vazia)
  null / undefined
  NaN

Qualquer coisa diferente desses valores acima será avaliada como TRUE.
*/

/*      AND (&&)
// Uma expressão lógica entre valores verdadeiros vai retornar o valor do ÚLTIMO VERDADEIRO.
// console.log("Luiz" && "Maria"); -> retorna "Maria"

function falaOi() {
  return "Oi";
}

let vaiExecutar = 'Joãozinho';

console.log(vaiExecutar && falaOi()); // comparando uma constante com um função
 */

//    OR (||)  (retorna o valor do PRIMEIRO VERDADEIRO ou do ÚLTIMO FALSO)

const corUsuario = "vermelho";
const corPadrao = corUsuario || "preto";

console.log(corPadrao);
