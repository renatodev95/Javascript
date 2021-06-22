const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('Servidor rodando no endereço http://localhost:3000');
  res.send('Hello World!');
});

app.listen(3000);
