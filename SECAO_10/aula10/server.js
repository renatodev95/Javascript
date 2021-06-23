// Express Router e Controllers

const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true }));

// Falando para o express que utilizaremos a pasta views (passando o caminho absoluto através do método path.resolve())
app.set('views', path.resolve(__dirname, 'src', 'views'));
// Configurando qual engine deverá ser utilizada para renderizar essas views, no caso será 'ejs'
app.set('view engine', 'ejs');

app.use(routes); // fazendo com que o EXPRESS use nossas rotas (modularização)

app.listen(3000, () => {
  console.log('Acessar o site http://localhost:3000');
  console.log('Servidor executando na porta 3000.');
});
