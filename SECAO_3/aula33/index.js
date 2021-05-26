// Atribuição via desestruturação (Objetos)

const pessoa = {
  nome: "Renato",
  sobrenome: "Pereira",
  idade: 26,
  endereco: {
    rua: "Av Brasil",
    numero: 320,
  },
};

// atribuição com desestruturação padrão
const { nome, sobrenome, endereco } = pessoa;

// Podem ser configurados valores padrões para os casos em que a atribuição não tiver valor definido (undefined);
const { nome = "", sobrenome, endereco } = pessoa;

// alterando o nome da variável nome para teste através da chave
const { nome: teste = "", sobrenome, endereco } = pessoa;

// obtendo valores dentro do objeto que se encontra em endereco
const { endereco: { rua, numero } } = pessoa;

// obtendo o endereço completo junto com os valores separados anteriormente
const { endereco: { rua, numero }, endereco } = pessoa;

// mudando o nome da variável `rua` para `r` dentro do objeto endereco junto de um valor padrão
const { endereco: { rua: r = 12345, numero }} = pessoa;

// usando o operador ...rest
const {nome, ...rest} = pessoa;
