/* VALIDADOR DE CPF */

function validaCpf(cpf) {
  // Criando o array regressivo para fazer a contagem
  const regressive = [10, 9, 8, 7, 6, 5, 4, 3, 2];
  let digito;

  // Criando um array a partir dos 9 primeiros dígitos
  // do CPF que veio do parâmetro
  let newCpf = cpf.slice(0, -2).split('');

  // Convertendo cada string do array em numero para conseguir realizar
  // os cálculos matemáticos
  newCpf = converteArray(newCpf);

  // Multiplicando cada dígito de newCpf pelos números em regressive
  let acumulador = 0; // criando um acumulador para verificar os dígitos
  for (let i = 0; i < newCpf.length; i++) {
    // console.log(newCpf[i] * regressive[i]);
    acumulador += newCpf[i] * regressive[i];
  }

  // Gerando o primeiro dígito
  digito = 11 - (acumulador % 11);
  digito = digito <= 9 ? digito : 0;

  newCpf.push(digito); // adicionando o primeiro digito ao final do array
  regressive.unshift(11); // adicionando o 11 ao início do array regressivo

  acumulador = 0; // criando um acumulador para calcular os dígitos
  for (let i = 0; i < newCpf.length; i++) {
    // console.log(newCpf[i] * regressive[i]);
    acumulador += newCpf[i] * regressive[i];
  }

  digito = 11 - (acumulador % 11);
  digito = digito <= 9 ? digito : 0;

  newCpf.push(digito);

  let sequencia = [];
  for (let i = 0; i < 11; i++) {
    sequencia.push(cpf[0]);
  }

  sequencia = sequencia.join('');
  const cpfCorreto = newCpf.join('');

  if (cpf === sequencia) return 'CPF inválido (sequencia).';
  if (cpf === cpfCorreto) return 'CPF válido!';
  return `CPF inválido (matematicamente).`;
}

function converteArray(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = Number(array[i]);
  }
  return array;
}

function verificaDigito(array, regressivo){
  let digit;
  let acumulador = 0;

}
