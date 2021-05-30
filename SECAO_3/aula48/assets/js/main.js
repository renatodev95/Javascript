const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

// função simples para criar novas `li`
function criaLi() {
  const li = document.createElement("li");
  return li;
}

// Sempre que esta função for invocada, será criada e adicionada uma `li` na `ol` de tarefas
function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefas();
}

function limpaInput() {
  // Limpando o input de tarefas
  inputTarefa.value = "";
  // mantendo o highlight do input após limpá-lo
  inputTarefa.focus();
}

// adicionando um botão para apagar cada tarefa criada
function criaBotaoApagar(li) {
  li.innerText += " "; // adicionando um espaço entre o botão e o `li`.
  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "Apagar";
  // botaoApagar.classList.add("apagar"); --> 1º forma de adicionar uma classe no botão apagar
  // 2º forma de adicionar uma classe ou qualquer outro atributo
  botaoApagar.setAttribute("class", "apagar");
  // Mais um exemplo (adicionando um title para o botao apagar)
  botaoApagar.setAttribute("title", "Apagar esta tarefa");
  li.appendChild(botaoApagar);
}

// Função para salvar as tarefas criadas
function salvarTarefas() {
  // capturando todas as `li` dentro da `ol` tarefas
  const liTarefas = tarefas.querySelectorAll("li");
  // criando o array que vai guardar a lista de tarefas
  const listaDeTarefas = [];

  // iterando sobre os textos dentro de cada li em liTarefas para adicioná-los em um array
  for (let t of liTarefas) {
    let tarefaText = t.innerText;
    // Removendo o conteúdo do botão apagar
    tarefaText = tarefaText.replace("Apagar", "").trim(); // removendo o espaço sobrando da string.
    // adicionando cada tarefa dentro do array;
    listaDeTarefas.push(tarefaText);
  }
  // CRIANDO O JSON QUE VAI SALVAR E MANTER O ARRAY DE TAREFAS
  const tarefasJSON = JSON.stringify(listaDeTarefas); // este método converte um elemento javascript para uma string no formato JSON.
  // salvando o JSON das tarefas em um arquivo (simulando uma base de dados simples)
  localStorage.setItem("tarefas", tarefasJSON);
}

// Esta função vai recarregar as tarefas que foram salvas no localStorage do navegador
function adicionaTarefasSalvas() {
  // "pegando" os itens dentro do local storage para dentro de uma const
  const tarefas = localStorage.getItem("tarefas");
  // CONVERTENDO DE VOLTA PARA UM OBJETO JAVASCRIPT (em um array)
  const listaDeTarefas = JSON.parse(tarefas);

  // para cada item no array será recriada uma nova tarefa quando a página do navegador for aberta neste site
  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}

// Capturando o evento de keypress quando o ENTER é pressionado
inputTarefa.addEventListener("keypress", function (e) {
  // verificando se a tecla pressionada possui o código 13 (ENTER)
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return; // se o input estiver vazio, nada será feito
    criaTarefa(inputTarefa.value);
    limpaInput();
  }
});

btnTarefa.addEventListener("click", function (e) {
  if (!inputTarefa.value) return; // se o input estiver vazio, nada será feito
  criaTarefa(inputTarefa.value);
  limpaInput();
});

// Estrutura que vai capturar o click no botão apagar e remover a `li` que contem esse btn
document.addEventListener("click", function (event) {
  const elemento = event.target;

  // verificando se o elemento que está sendo clicado possui a classe "apagar"
  if (elemento.classList.contains("apagar")) {
    // Removendo o elemento pai da classe "apagar" que está sendo clicada (no caso uma `li`)
    elemento.parentElement.remove();
    // salvando o estado atual das tarefas para que fiquem salvas apenas as li não apagadas no arquivo JSON.
    salvarTarefas();
  }
});

// mantendo as tarefas salvas de volta na página quando ela for carregada
adicionaTarefasSalvas();
