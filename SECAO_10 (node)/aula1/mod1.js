class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

exports.Pessoa = Pessoa; //Exportando a classe Pessoa

const nome = 'Renato';
const sobrenome = 'Pereira';

const falaNome = () => nome + ' ' + sobrenome;

// Exportando nossas variáveis e funções através do module.exports
// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

// Exportando nossas variáveis e funções através do exports (abreviação). A chave NÃO PRECISA TER O NOME DA VARIÁVEL
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'O que eu quiser exportar'; // veja que isso também será exportado para o module.exports
