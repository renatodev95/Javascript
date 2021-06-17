import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

// Utilizando uma função auto invocada para ser executada automaticamente
(function () {
  const gera = new GeraCPF();
  const cpfGerado = document.querySelector('.cpf-gerado');
  cpfGerado.innerHTML = gera.geraNovoCpf();
})();
