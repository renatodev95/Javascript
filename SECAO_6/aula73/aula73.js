/* 
Object.values -> (retorna os valores das propriedades do objeto)
Object.entries -> (retorna um array dos próprios pares [key, value])
Object.assign(des, any) -> (cria uma cópia do objeto)
Object.getOwnPropertyDescriptor(o, 'prop') -> (descreve a configuração de uma propriedade)
...(spread) -> (spread operator para cópia de objeto)

// JÁ VIMOS
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties(define várias propriedades)
Object.defineProperty(define uma propriedade)
*/

const produto = { nome: 'Produto', preco: 1.8, material: 'porcelana' };
// Fazendo uma cópia inteira com spread e criando uma nova propriedade nessa cópia
const canceca = { ...produto, material: 'porcelana' };
// Fazendo uma cópia de atributos específicos
const caneca2 = { nome: produto.nome, preco: produto.preco };
// Criando um array com as chaves de um objeto
const chaves = Object.keys(produto);
// Conferindo a descrição de configuração da propriedade 'nome' no objeto 'produto'
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

// Utilizando desestruturação para percorrer os pares de chave e valor no objeto
for (let [chave, valor] of Object.entries(produto)) {
  console.log(chave, valor);
}
