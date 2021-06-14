/* Fetch API e Axios (JSON) */

// Exibindo os dados de um arquivo JSON em uma página html com AXIOS

// Utilizando FETCH
// fetch('pessoas.json')
//   .then((resposta) => resposta.json())
//   .then((json) => carregaElementosNaPagina(json));

// Utilizando AXIOS
axios('pessoas.json')
  .then((resposta) => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
  const table = document.createElement('table');
  for (let pessoa of json) {
    const tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerHTML = pessoa.nome;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.idade;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.salario;
    tr.appendChild(td);

    table.appendChild(tr);
  }

  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table);
}
