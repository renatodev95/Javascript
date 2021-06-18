const path = require('path'); // para modulos do node, basta informar o nome do modulo
const axios = require('axios');
const {Pessoa} = require('./mod1'); // para modulos internos precisamos passar o caminho

const pessoa1 = new Pessoa('Renato');
console.log(pessoa1);
