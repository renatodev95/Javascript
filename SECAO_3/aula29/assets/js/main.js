// selecionando o h1 que está dentro da classe container
const h1 = document.querySelector(".container h1");
const data = new Date();

function getDiaSemanaTexto(data) {
  const dias = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
  ];

  return dias[data.getDay()];
}

function getNomeMes(date) {
  var meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return meses[date.getMonth()];
}

function zeroAEsquerda(num) {
  // Adicionando o zero a esquerda para horas e minutos a baixo de 10
  return num > 9 ? num : `0${num}`;
}

function criaData(data) {
  const diaSemana = getDiaSemanaTexto(data);
  const diaMes = data.getDate();
  const mesAno = getNomeMes(data);
  const ano = data.getFullYear();
  const hora = zeroAEsquerda(data.getHours());
  const minutos = zeroAEsquerda(data.getMinutes());
  const dataInteira = `${diaSemana}, ${diaMes} de ${mesAno} de ${ano} ${hora}:${minutos}`;

  return dataInteira;
}

h1.innerHTML = criaData(data);

// ---------------------------------------------------------------------------------------

//                           RESOLUÇÃO MAIS SIMPLES

const h1 = document.querySelector(".container h1");
const data = new Date();

h1.innerHTML = data.toLocaleString("pt-BR", {
  dateStyle: "full",
  timeStyle: "short",
});
