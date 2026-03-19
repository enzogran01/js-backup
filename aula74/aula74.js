// Construtora - molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// instância
const pessoa1 = new Pessoa('Luiz', 'O.');
const pessoa2 = new Pessoa('Maria', 'A.');

// Object.prototype (o pai de todos os objetos)
Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
}

console.dir(pessoa1);
console.dir(pessoa2);
console.log(pessoa1.nomeCompleto());
