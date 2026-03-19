// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if(valor > this.saldo) {
        console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`);
        return;
    };

    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function (valor) {
    console.log(`Ag/c: ${this.agencia} / ${this.conta}\nSaldo: R$${this.saldo.toFixed(2)}`);
};

const c1 = new Conta("Itau", 12356, 10);
c1.depositar(11);
c1.depositar(10);
c1.sacar(32);

// contacorrente é uma herança de conta (herda todos os atributos e métodos no prototype)
function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

// herndando os métodos do prototype de conta
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

// sobrescrevendo sacar()
ContaCorrente.prototype.sacar = function (valor) {
    if(valor > this.saldo + this.limite) {
        console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`);
        return;
    };

    this.saldo -= valor;
    this.verSaldo();
};

const cc1 = new ContaCorrente(11, 11, 0, 100);
cc1.depositar(10);
cc1.sacar(110);
cc1.sacar(1);

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const cp1 = new ContaPoupanca(12, 33, 0);
