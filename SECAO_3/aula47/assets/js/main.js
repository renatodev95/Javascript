// retirando o relógio do escopo global;
function relogio() {
  // Obtendo o MARCO ZERO do relógio para poder iniciar/manter o timer
  function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      // A linha abaixo zera o horário, deixando no formato apropriado 00:00:00
      timeZone: "UTC",
    });
  }

  const relogio = document.querySelector(".relogio");
  const iniciar = document.querySelector(".iniciar");
  // essas variáveis foram informadas próximo da função iniciaRelogio
  // para que elas possam ser acessadas tanto dentro quanto fora dela.
  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(function () {
      // A cada segundo a variável abaixo é incrementada e o conteúdo HTML do relógio recebe o retorno da função getTimeFromSeconds
      segundos++;
      relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
  }

  // Criando apenas um EventListener no document inteiro para otimizar o desempenho do código,
  // sem ter que criar um para cada classe

  document.addEventListener("click", function (evento) {
    const elemento = evento.target;

    if (elemento.classList.contains("iniciar")) {
      // Removendo o estilo vermelho caso o relogio tenha sido pausado;
      relogio.classList.remove("pausado");
      // Evitando que o timer tenha comportamento estranho (fique muito rápido)
      // Na linha abaixo sempre é parado o contador atual para que o novo seja iniciado
      clearInterval(timer);
      iniciaRelogio(); // Esta linha inicia a contagem de fato
      // Assim que o relógio for iniciado, o conteúdo do botão
      // muda de "iniciar" -> "continuar"
      iniciar.innerHTML = "continuar";
    }

    if (elemento.classList.contains("pausar")) {
      clearInterval(timer);
      // Adicionando o estilo CSS da classe pausado (color: red)
      relogio.classList.add("pausado");
    }

    if (elemento.classList.contains("zerar")) {
      // Removendo o estilo vermelho caso o relogio tenha sido pausado;
      relogio.classList.remove("pausado");
      // Parando o relógio
      clearInterval(timer);
      // Voltando o relógio
      relogio.innerText = "00:00:00";
      segundos = 0;
      // Alterando o conteúdo do botão iniciar para o valor original
      iniciar.innerHTML = "iniciar";
    }
  });
}

// Chamando a função
relogio();
