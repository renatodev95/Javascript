export const nome = 'Joãozinho'; // exportando a variável nome diretamente
const sobrenome = 'Oliveira';
const idade = 30;

function soma(x, y) {
  return x + y;
}

// Exportando uma classe como default (apenas um default por arquivo)
export default class Pessoa {
  constructor(nome, sobrenome) {
    (this.nome = nome), (this.sobrenome = sobrenome);
  }
}

// // Exportando função anônima como DEFAULT (apenas um default por arquivo)
// export default (x, y) => x * y;

// Exportando nossas variáveis e funções ao final do arquivo
// As importaçõex/exportações podem ser renomeadas com a sintaxe "as"
export {sobrenome, idade, soma};
