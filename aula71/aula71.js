// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, "estoque", {
        enumerable: true, // true: mostra a chave, false: não mostra
        value: estoque, // referencia o valor recebido do parametro
        writable: false, // pode alterar
        configurable: true // configuravel
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true 
        }
    })
}

// cria objeto produto
const p1 = new Produto("Camiseta", 20, 3);

// listagem por object.keys e for in
console.log(Object.keys(p1));
for (let chave in p1) {
    console.log(chave);
}
