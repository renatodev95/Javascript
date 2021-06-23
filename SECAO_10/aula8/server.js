// Express - req.params, req.query e req.body

// req.params -> /:param1?/:param2? (partes que vem na ROTA DA URL)
// req.query -> ?nome=Jhon&sobrenome=Doe&facebookprofile=65616511651 (Vem na query string)
// req.body -> body das requisições (method, name nos formulários HTML)

const express = require('express');
const app = express();

// Esta linha faz com que o express trate o body das requisições (se este código não for escrito, qualquer POST ou PUT que for enviado por formulário NÃO SERÁ TRATADO e ficará como UNDEFINED.)
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome do cliente: <input type="text" name="nome"> <br>
  Outro campo: <input type="text" name="outrocampo">
  <button>Novo mundo</button>
  `);
});

// Criação dos parâmetros abaixo, a interrogação indica que o parâmetro é opcional
// Veja que é utilizado o REQ da função arrow
app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(req.query.nome);
});

// Logando uma informação que foi POSTada através de um formulário
app.post('/', (req, res) => {
  console.log(req.body); // req.body
  res.send(
    `O que você me enviou foi: ${req.body.nome} e ${req.body.outrocampo}`
  );
});

app.listen(3000, () => {
  console.log('Acessar o site http://localhost:3000');
  console.log('Servidor executando na porta 3000.');
});
