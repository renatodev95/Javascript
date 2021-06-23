const express = require('express');
const app = express();

//          Criar    Ler     Atualizar       Apagar
// CRUD -> CREATE,  READ,     UPDATE,        DELETE
//          POST    GET        PUT           DELETE

// http://meusite.com/  <- GET -> Entregue a página /
// http://meusite.com/sobre  <- GET -> Entregue a página /sobre
// http://meusite.com/contato  <- GET -> Entregue a página /contato

// Criando uma rota que vai entregar um formulário quando a raiz do site for acessada
app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome: <input type="text" name="nome">
  <button>Enviar</button>
  `);
});

// Criando um método POST. Quando uma requisição do tipo post for feita, a mensagem é exibida
app.post('/', (req, res) => {
  res.send('Recebi o formulário');
});

// Criando uma rota para a parte de contato do site ('/')
app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato conosco.');
});

// Nosso aplicativo irá escutar tudo que for feito através da porta 3000
app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000.');
});
