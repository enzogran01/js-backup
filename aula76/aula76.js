// Produto -> aumento, desconto
// Camiseta = cor, caneca = material

function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function (quantia) { 
    this.preco += quantia;
}
Produto.prototype.desconto = function (quantia) { 
    this.preco -= quantia;
}

function Camiseta (nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype); // criando um prototype com objeto vazio e colocando o prototype de produto dentro desse objeto
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100)); // Sobrescrevi o método aumento na classe Camiseta
}

function Caneca (nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== Number) return;
            estoque = valor;
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca("Caneca", 30, "Porcelana", 15);
const produto = new Produto("Genérico", 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preto');

console.log(produto);
console.log(camiseta);
console.log(caneca);
console.log(caneca.estoque);
