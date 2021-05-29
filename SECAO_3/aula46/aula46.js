// setInterval e setTimeout

// setInterval -> vai configurar um intervalo de tempo para que alguma função seja repetida. (Como exemplo, queremos que a função abaixo seja repetida de acordo com o intervalo determinado em setInterval).

// setTimeout -> configura um intervalo de tempo para que uma execução seja executada (isso será executado apenas uma vez).

function mostraHora() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR", { hour12: false });
}

function funcDoInterval() {
  console.log(mostraHora());
}

// Abaixo está sendo passada a referência da função acima (sem parênteses)
// O segundo parâmetro passado são os segundos (1seg em MILISEGUNDOS)

setInterval(funcDoInterval, 1000);

// Executando o mesmo código com uma função anônima
setInterval(function () {
  console.log(mostraHora());
}, 1000);

// Jogando o código acima para dentro de uma variável
const timer = setInterval(function () {
  console.log(mostraHora());
}, 1000);

// O código abaixo vai PARAR o timer acima depois de 10 segundos (10000 milisegundos)
setTimeout(function () {
  clearInterval(timer);
}, 10000);

// Abaixo exibiremos uma mensagem após 5 segundos
setTimeout(function () {
  console.log("Fui executado após 5 segundos");
}, 5000);
