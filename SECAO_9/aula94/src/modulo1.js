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

/* 
EXPORT
O export é utilizado quando criamos módulos JavaScript para exportar ligações em tempo real para que suas funções, objetos ou valores primitivos de um módulo sejam utilizados por outros programas através de declarações import. Ligações que são exportadas ainda podem ser modificadas localmente; quando importadas, embora elas possam ser lidas somente pelo módulo que as importou, seu valor é atualizado sempre que ela é modificada pelo módulo que a exportou.

Módulos exportados ficam em strict mode, independentemente se é declarado dessa forma, ou não. Export não pode ser utilizado em scripts embutidos. 

-----------------------------------------------------------------------------------------------

SINTAXE
Há dois tipos de exportação:
- Exportações Explícitas (Named Exports) (Zero ou mais exports por módulo)
- Exportações Padrão (Default Exports) (Uma por módulo)
Exemplos:
// Exportando recursos individuais
export let name1, name2, …, nameN; // também var, const
export let name1 = …, name2 = …, …, nameN; // também var, const
export function functionName(){...}
export class ClassName {...}

// Lista de exportações
export { name1, name2, …, nameN };

// Renomeando exports
export { variable1 as name1, variable2 as name2, …, nameN };

// Exportando atribuições desestruturadas renomeando
export const { name1, name2: bar } = o;

// Exportações Padrão (Default exports)
export default expression;
export default function (…) { … } // também class, function*
export default function name1(…) { … } // também class, function*
export { name1 as default, … };

// Agregando módulos
export * from …; // não define a exportação padrão
export * as name1 from …; // Draft ECMAScript® 2O21
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
export { default } from …;

nameN
Identificador para ser exportado (assim ele pode ser importado via import em outro script).

-----------------------------------------------------------------------------------------------

DESCRIÇÃO
Há dois diferentes tipos de export, explícito(named) e padrão(default).  Pode-se ter várias exportações explícitas por módulo, mas apenas uma padrão. Cada tipo corresponde à uma da síntaxe acima:
-Exportações explícitas:
// exporta recursos declarados anteriomente
export { myFunction, myVariable };

// exporta recursos individuais (pode exportar var, let,
// const, function, class)
export let myVariable = Math.sqrt(2);
export function myFunction() { ... };

-Exportação padrão (pode ser feita apenas uma por script):
// exporta um recurso declarado anteriormente como padrão
export { myFunction as default };

// exporta recursos individuais como padrão
export default function () { ... }
export default class { .. }

Exportações explícitas são úteis para exportar vários valores. Durante a importação, é obrigatório usar o mesmo nome do objeto correspondente.
Mas a exportação padrão pode ser importada com qualquer nome, por exemplo:
// arquivo test.js
let k; export default k = 12;

// algum outro arquivo
import m from './test'; // note que temos a liberdade de usar import m ao invés de import k, porque k era uma exportaçào padrão
console.log(m);        // vai retornar log 12

Você também pode renomear exportações explícitas para evitar conflitos e nome:
export { myFunction as function1,
         myVariable as variable };

-----------------------------------------------------------------------------------------------

Re-exportando / Agregando
É possível também "importar/exportar" de módulos diferentes em um módulo pai, de modo que eles estejam disponíveis para serem importados daquele módulo. Em outras palavras, pode-se criar um módulo único concentrando várias exportações de vários módulos.

Isto pode ser feito com a sintaxe "export from":
export { default as function1,
         function2 } from 'bar.js';

O que é comparável com um combinação de import e export:
import { default as function1,
         function2 } from 'bar.js';
export { function1, function2 };

Mas onde function1 e function2 não ficam disponíveis dentro do módulo atual.
*/
