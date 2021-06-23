// Express Router e Controllers

const express = require('express');
const route = express.Router();
// Importando os módulos da nossa pasta controller
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// Rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.paginaContato);

module.exports = route; // exportando todas as rotas que forem criadas neste arquivo

/* 
1º Separação de rotas -> Foi criado um arquivo chamado "routes", e nesse arquivo buscamos o Express e criamos uma constante chamada "route" (que é o express.Router()) e importamos um controller que criamos ('./controllers/homeController'). O Router é o responsável por tratar as nossas rotas, então se temos a rota "home" é ele que vai tratar a rota home e assim por diante.

2º homeController -> nesse homeController foi feito nada mais nada menos que criar as funções que iriam ser informadas dentro de routes.js, facilitando a legibilidade do código através de modularização. E neste caso, ao invés de executar as funções, nós apenas passamos a referência
 */
