const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
// String.fromCharCode -> converte um código da tabela ASCII para string (abaixo informamos um range da tabela ASCII que abrange apenas as letras maiúsculas. O último caracter 'Z' tem o código 90, mas, como a nossa função não inclui o último dígito, precisamos informar 91).
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
// Gerando letras minúsculas aleatórias.
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
// Gerando digitos numéricos aleatórios.
const geraNumero = () => String.fromCharCode(rand(48, 57));
// Abaixo criamos uma string com os simbolos que desejamos.
const simbolos = ',.;~^[]{}!@#$%*()_+=-';
// Aqui vamos selecionar um símbolo aleatório da nossa string (simbolos na posição aleatória gerada por rand, de 0 até o tamanho da string 'simbolos').
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
  const senhaArray = [];
  qtd = Number(qtd);

  // Abaixo está ocorrendo uma avaliação de curto circuito. Se os parâmetros forem avaliados como TRUE, automaticamente o "arraySenha" vai receber uma string aleatória de acordo com cada parâmetro.
  for (let i = 0; i < qtd; i++) {
    maiusculas && senhaArray.push(geraMaiuscula());
    minusculas && senhaArray.push(geraMinuscula());
    numeros && senhaArray.push(geraNumero());
    simbolos && senhaArray.push(geraSimbolo());
  }

  // Abaixo estamos corrigindo um erro que ocorre quando utilizamos o FOR e o tamanho da senha que é gerada multiplica a quantidade de caracteres pelos parâmetros que são avaliados em TRUE. A resolução foi a seguinte: Ao final da função nós juntamos o array da senha em uma string única e fatiamos essa string, deixando apenas a string começando do índice 0 até o número que foi atribuído para QTD).
  return senhaArray.join('').slice(0, qtd);
}
