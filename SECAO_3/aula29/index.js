//  Switch/Case

const data = new Date("1987-04-21 00:00:00");
const diaSemana = data.getDay() + 1;
let diaSemanaTexto;

switch (diaSemana) {
  case 1:
    diaSemanaTexto = "Domingo";
    break;
  case 2:
    diaSemanaTexto = "Segunda";
    break;
  case 3:
    diaSemanaTexto = "Terça";
    break;
  case 4:
    diaSemanaTexto = "Quarta";
    break;
  case 5:
    diaSemanaTexto = "Quinta";
    break;
  case 6:
    diaSemanaTexto = "Sexta";
    break;
  case 7:
    diaSemanaTexto = "Sábado";
    break;
  default:
    diaSemanaTexto = "Dia inválido";
}

console.log(diaSemanaTexto);
