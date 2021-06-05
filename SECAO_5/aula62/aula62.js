/* Revisão do básico em Arrays */

const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana']; // criação do array

// Método para criar uma cópia de um array e passá-lo para dentro de um novo array, sem criar uma referência direta (evitar passagem de valor por referencia);
const novo = [...nomes]; // utilizando o spread para fazer a cópia

// Inserindo elementos no final do array com a função push()
novo.push('André');

// removendo o último item de um array com o `pop()`, esse método também retorna o valor do elemento removido, sendo possível passá-lo como valor para dentro de uma variável.
const removidoDoFinal = novo.pop();

// Trabalhando com o início do array, funciona da mesma forma que o método pop()
novo.unshift('Renato'); // unshift() -> inserindo no começo do array
const removidoDoComeco = novo.shift('Renato'); // shift() -> removendo o elemento do começo do array

// Fatiando um array
const fatiado1 = nomes.slice(1, 3); // usando o método slice para fatiar o array (o primeiro argumento está informando o começo do fatiamento / o segundo argumento está informando o final do fatiamento -- lembrando que o índice 3 é excluído do fatiamento)
const fatiado2 = nomes.slice(0, -2); // fazendo o fatiamento do início e excluíndo o final

// Convertendo uma string em um array
const nome = 'Renato Pereira Santos';
const array = nome.split(' '); // utilizando o método split, o argumento informa qual é o padrão de espaço a ser utilizado para fazer a separação dos índices
const stringNovamente = array.join(' '); // convertendo o array de volta para string
