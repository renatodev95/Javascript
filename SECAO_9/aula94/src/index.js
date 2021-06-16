// Importando as variáveis e funções que foram exportadas no modulo1
// Podemos renomear variáveis importadas já na importação
// As importações DEFAULT são chamadas fora das CHAVES e podem assumir qualquer nome
import Pessoa, {nome, sobrenome, idade, soma} from './modulo1';

const p1 = new Pessoa(nome, sobrenome);
console.log(p1)
