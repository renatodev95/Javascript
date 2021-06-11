/* POO -> Usando classes (Validando CPF) */

class ValidaCpf {
  constructor(cpfEnviado) {
    // Podemos utilizar o Object.defineProperty dentro do construtor da classe
    Object.defineProperty(this, 'cpfLimpo', {
      value: cpfEnviado.replace(/\D+/g, ''),
      enumerable: false,
      writable: false,
      configurable: false,
    });
  }

  eSequencia() {
    // Repetindo o primeiro caractere de cpfLimpo 11 vezes e retornando
    // a comparação entre essa repetição e o cpfLimpo original.
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
  }

  geraNovoCpf() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    // Usando o nome da classe para acionar o método estático
    const digito1 = ValidaCpf.geraDigito(cpfSemDigitos);
    // Usando o nome da classe para acionar o método estático
    const digito2 = ValidaCpf.geraDigito(cpfSemDigitos + digito1);

    this.novoCPF = cpfSemDigitos + digito1 + digito2;
  }

  // Note que em nenhum momento utilizamos a palavra "this" dentro desta função
  // Então podemos deduzir que ela seja estática. Neste caso tornamos ela um
  // método estático utilizando a palavra reservada "static".
  static geraDigito(cpfSemDigitos) {
    let total = 0;
    // Gerando um número reverso de 10 na primeira vez
    // Na segunda vez ele será de 11, porque vamos concatenar
    // o cpfSemDigitos com o digito1.
    let reverso = cpfSemDigitos.length + 1;

    for (let stringNumerica of cpfSemDigitos) {
      // Convertendo cada string em Number para realizar o cálculo do total
      total += Number(stringNumerica) * reverso;
      reverso--;
    }

    // Aqui aplicamos a fórmula para gerar o dígito
    const digito = 11 - (total % 11);

    // Retornando o valor atribuído de dígito convertido de volta para String
    return digito > 9 ? '0' : String(digito);
  }

  valida() {
    if (!this.cpfLimpo) return false;
    if (typeof this.cpfLimpo !== 'string') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.eSequencia()) return false;
    this.geraNovoCpf();

    return this.novoCPF === this.cpfLimpo;
  }
}

let validaCpf = new ValidaCpf('070.987.720-03');

if (validaCpf.valida()) {
  console.log('CPF válido!');
} else {
  console.log('CPF inválido!');
}
