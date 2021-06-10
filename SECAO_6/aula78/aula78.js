/* Polimorfismo */

// Superclass
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (valor > this.saldo) {
    console.log("Saldo insuficiente");
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function () {
  console.log(
    `Ag/C: ${this.agencia}/${this.conta} | SALDO: R$${this.saldo.toFixed(2)}`
  );
};

/* ----------------------------------------------------------------------------------- */

// Subclass de Conta --> CONTA CORRENTE
function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}
// Fazendo o link dos prototypes
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

// Sobrescrevendo o método da Superclasse CONTA --> (aqui ocorre o POLIMORFISMO)
ContaCorrente.prototype.sacar = function (valor) {
  // Fazendo com que o método sacar tenha a possibilidade para saque do limite negativo
  if (valor > this.saldo + this.limite) {
    console.log("Saldo insuficiente");
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

/* ----------------------------------------------------------------------------------- */

// Subclass de Conta --> CONTA POUPANÇA
function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}
// Fazendo o link dos prototypes
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const cc = new ContaCorrente(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(110);
cc.sacar(1);

console.log();

const cp = new ContaPoupanca(12, 33, 0);
cp.depositar(10);
cp.sacar(10);
cp.sacar(1);
