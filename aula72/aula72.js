// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, "estoque", {
        enumerable: true, // true: mostra a chave, false: não mostra
        configurable: true, // configuravel
        get: function () {
            return estoquePrivado;
        },
        set: function (value) {
            if (typeof value !== 'number') {
                throw new TypeError('Mensagem');
            }
            estoquePrivado = value;
        }
    });
}

// exemplo com função fabrica
function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome = valor;
        }
    }
}

// cria objeto produto
// const p1 = new Produto("Camiseta", 20, 3);
// p1.estoque = "o valor que eu quero";
// console.log(p1.estoque);

const p2 = criaProduto('Camiseta');
