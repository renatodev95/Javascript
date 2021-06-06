/* Map - Mapeando o array */

// O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

/* ---------------------------------------------------------------------------------------- */

// Dobre os números com Map
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

const numerosDobrados = numeros.map((valor) => valor * 2);

/* ---------------------------------------------------------------------------------------- */

// Para cada elemento:
// 1º Retorne apenas uma string com o nome da pessoa
// 2º Remova apenas a chave "nome" do objeto
// 3º Adicione uma chave id em cada objeto
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

const pessoas1 = [...pessoas];

const nomeString = pessoas1.map((pessoa) => pessoa.nome);

const semChaveNome = pessoas1.map((pessoa) => ({ idade: pessoa.idade }));

const pessoasComId = pessoas1.map((pessoa, indice) => {
  // Criando uma cópia para evitar alteração indesejada no objeto original
  const newObj = { ...pessoa };
  newObj.id = indice;
  return newObj;
});

/* ---------------------------------------------------------------------------------------- */

/* Descrição

O método map chama a função callback recebida por parâmetro para cada elemento do Array original, em ordem, e constrói um novo array com base nos retornos de cada chamada. A função callback é chamada apenas para os elementos do array original que tiverem valores atribuídos. Os elementos que estiverem como undefined, que tiverem sido removidos ou os que nunca tiveram valores atribuídos não serão considerados. 

O método map não modifica o array original. No entanto, a função callback invocada por ele pode MODIFICAR.

A lista de elementos que serão processados pelo map é montada antes da primeira invocação à função callback. Se um elemento for acrescentado ao array original após a chamada ao map, ele não será visível para o callback. Se os elementos existentes forem modificados, os valores que serão repassados serão os do momento em que o método map invocar o callback. Elementos removidos não serão visitados.
*/
