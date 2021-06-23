// Express - Arquivos estáticos

const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true }));

// Informando o caminho da pasta public (que vai conter o nosso conteúdo estático)
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.listen(3000, () => {
  console.log('Acessar o site http://localhost:3000');
  console.log('Servidor executando na porta 3000.');
});
