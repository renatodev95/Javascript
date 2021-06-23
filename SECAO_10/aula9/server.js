// Express Router e Controllers

const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(routes); // fazendo com que o EXPRESS use nossas rotas (modularização)


app.listen(3000, () => {
  console.log('Acessar o site http://localhost:3000');
  console.log('Servidor executando na porta 3000.');
});
