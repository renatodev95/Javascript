// Escopo Léxico

const nome = "Renato";

function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome = "Luiz";
  falaNome();
}

usaFalaNome();
