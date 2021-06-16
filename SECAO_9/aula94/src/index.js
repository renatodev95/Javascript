// Importando as variáveis e funções que foram exportadas no modulo1
// Podemos renomear variáveis importadas já na importação
// As importações DEFAULT são chamadas fora das CHAVES e podem assumir qualquer nome
import Pessoa, {nome, sobrenome, idade, soma} from './modulo1';

const p1 = new Pessoa(nome, sobrenome);
console.log(p1);

/* 
IMPORT

A declaração estática import é usada para importar vínculos que são exportados por um outro módulo. Os módulos importados estão em strict mode,  declarado como tal ou não. A declaração import não pode ser usada em scripts embutidos, a menos que tal script tenha um type="module".

Há também uma função dinâmica import(), que não requer scripts de type="module".

A compatibilidade com versões anteriores pode ser garantida usando o atributo nomodule na tag de script.

A importação dinâmica é útil em situações em que você deseja carregar um módulo condicionalmente ou sob demanda. A forma estática é preferível para carregar dependências iniciais e pode se beneficiar mais prontamente de ferramentas de análise estática e tree shaking.

Sintaxe
import defaultExport from "module-name";
import * as name from "module-name";
import { export } from "module-name";
import { export as alias } from "module-name";
import { export1 , export2 } from "module-name";
import { foo , bar } from "module-name/path/to/specific/un-exported/file";
import { export1 , export2 as alias2 , [...] } from "module-name";
import defaultExport, { export [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name"; var promise = import("module-name"); // This is a stage 3 proposal.

-defaultExport
Nome que de referência para a exportação padrão do módulo.

-module-name
O módulo para importar. Geralmente, esse é um nome de caminho relativo ou absoluto para o arquivo .js contendo esse módulo. Certos empacotadores podem permitir ou exigir o uso da extensão; verifique seu ambiente. Apenas aspas simples e aspas duplas são permitidas.

-name
Nome do objeto do módulo que será usado como um tipo de espaço de nomes ao se referir às importações.

-export, exportN
Nome das exportações a serem importadas.

-alias, aliasN
Nomes que se referem às importações nomeadas.

Descrição
O parâmetro name é o nome do "objeto módulo", que será usado como um tipo de namespace para se referir às exportações. Os parâmetros de exportação especificam exportações nomeadas individuais, enquanto a importação * como sintaxe de nome importa todos eles. Abaixo estão alguns exemplos para esclarecer a sintaxe.

Importar o conteúdo de todo um módulo
Isso insere myModule no escopo atual, contendo todas as exportações do módulo no arquivo localizado em /modules/my-module.js.

import * as myModule from '/modules/my-module.js';
Aqui, acessar as exportações significa usar o nome do módulo ("myModule" neste caso) como um namespace. Por exemplo, se o módulo importado acima incluir um export doAllTheAmazingThings(), você o chamaria assim:

myModule.doAllTheAmazingThings();
Importar uma única exportação de um módulo
Dado um objeto ou valor chamado myExportque foi exportado do módulo my-module  implicitamente (porque o módulo inteiro é exportado) ou explicitamente (usando a instrução export statement), isso insere  myExport no escopo atual.

import {myExport} from '/modules/my-module.js';
Importar várias exportações do módulo
Isso inclui tanto foo como bar  no escopo atual.

Importar uma exportação com um alias mais conveniente
Você pode renomear uma exportação ao importá-la. Por exemplo, isso insere shortName no escopo atual.

 

import {reallyReallyLongModuleExportName as shortName}
  from '/modules/my-module.js';
Renomear várias exportações durante a importação
Importe várias exportações de um módulo com aliases convenientes.

 

import {
  reallyReallyLongModuleExportName as shortName,
  anotherLongModuleName as short
} from '/modules/my-module.js';
Importar um módulo apenas para seus efeitos colaterais
Importe um módulo inteiro somente para efeitos colaterais, sem importar nada. Isso executa o código global do módulo, mas na verdade não importa nenhum valor.

 

import '/modules/my-module.js';
Importando Padrões
É possível ter um padrão exportação (seja um objeto, uma função, uma classe etc.). A declaração de importação pode então ser usada para importar esses padrões.

 

A versão mais simples importa diretamente o padrão:

 

import myDefault from '/modules/my-module.js';
 

Também é possível usar a sintaxe padrão como as vistas acima (importações de namespace ou importações nomeadas). Em tais casos, a importação padrão terá que ser declarada primeiro. Por exemplo:

 

import myDefault, * as myModule from '/modules/my-module.js';
// myModule used as a namespace
Ou

 

import myDefault, {foo, bar} from '/modules/my-module.js';
// specific, named imports
 

Importações Dinâmicas
 

A palavra-chave import pode ser chamada como uma função para importar dinamicamente um módulo. Quando usado dessa maneira, retorna uma promessa.

 

import('/modules/my-module.js')
  .then((module) => {
    // Do something with the module.
  });
 

Este formulário também suporta a palavra-chave await.

 

let module = await import('/modules/my-module.js'); */
