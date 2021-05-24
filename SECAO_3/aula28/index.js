// Objeto Date
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

const tresHoras = 60 * 60 * 3 * 1000; // 3 horas milésimos de segundo
const umDia = 60 * 60 * 24 * 1000; // 1 dia em milésimos de segundo
const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix
const data = new Date(2021, 4, 20, 15, 14, 27); // ano, mês, dia, hora, minuto, segundo
const data = new Date(1621891995985);
console.log("Dia", data.getDate()); // dia do mês
console.log("Mês", data.getMonth() + 1); // mês do ano  (começa do zero, por isso +1)
console.log("Ano", data.getFullYear()); // ano
console.log("Hora", data.getHours()); // hora
console.log("Min", data.getMinutes()); // minutos
console.log("Seg", data.getSeconds()); // segundos
console.log("MS", data.getMilliseconds()); // milisegundos
console.log("Dia semana", data.getDay() + 1); // dia da semana  (começa do zero, por isso +1)
console.log(data.toString());
console.log(Date.now()); // data atual em milésimos de segundo

// --------------------------------------------------------------------------------------------

function zeroAEsquerda(numero) {
  return numero > 9 ? numero : `0${numero}`;
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const minuto = zeroAEsquerda(data.getMinutes());
  const segundos = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundos}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
