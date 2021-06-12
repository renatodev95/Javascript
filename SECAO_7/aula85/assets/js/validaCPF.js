/* POO -> Usando classes (Validando CPF) */

class ValidaCpf {
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      value: cpfEnviado.replace(/\D+/g, ''),
      enumerable: false,
      writable: false,
      configurable: false,
    });
  }

  eSequencia() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
  }

  geraNovoCpf() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidaCpf.geraDigito(cpfSemDigitos);
    const digito2 = ValidaCpf.geraDigito(cpfSemDigitos + digito1);

    this.novoCPF = cpfSemDigitos + digito1 + digito2;
  }

  static geraDigito(cpfSemDigitos) {
    let total = 0;
    let reverso = cpfSemDigitos.length + 1;

    for (let stringNumerica of cpfSemDigitos) {
      total += Number(stringNumerica) * reverso;
      reverso--;
    }

    const digito = 11 - (total % 11);

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

