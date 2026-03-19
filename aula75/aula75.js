// new Object -> Object.prototype (sempre atrelado a qualquer objeto)
const objA = {
    chaveA: "A" // vem implicitamente numa chave chamada "__proto__"
    // __proto__: Object.prototype
};
const objB = {
    chaveB: "B"
    // __proto__: objA
};
const objC = new Object();
objC.chaveC = "C";

Object.setPrototypeOf(objB, objA); // isso é como se fosse HERANÇA! objB herda os atributos de objA, salvando-os no __proto__
Object.setPrototypeOf(objC, objB);

console.log(objC.chaveA);
console.log(objC.chaveB);
console.log(objC.chaveC);
// objC tem as chaves de objA, objB e objC.

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.desconto = function(percentual) {
    return this.preco = this.preco - (this.preco * (percentual / 100));
}
Produto.prototype.aumento = function(percentual) {
    return this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto("Camiseta", 50);

const p2 = {
    nome: "Caneca",
    preco: 15
}
Object.setPrototypeOf(p2, Produto.prototype);

const p3 = Object.create(Produto.prototype, {
    tamanho: {writable: true, configurable: true, enumerable: true, value: 113},
    preco: {writable: true, configurable: true, enumerable: true, value: 43}
});
p3.aumento(10);
console.log(p3);
