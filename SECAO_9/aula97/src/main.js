// A importação do 'core-js/stable' e 'regenerator-runtime/runtime' vai garantir que o script seja executado normalmente em navegadores mais antigos (neste nosso caso, que não suportam promises e nem async await);
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import executa from './modules/promises';
import './assets/css/style.css';

executa();
