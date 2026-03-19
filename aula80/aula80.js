const falar = {
    falar(){
        console.log(`${this.nome} está falando.`);
    }
}

const comer = {
    comer(){
        console.log(`${this.nome} está comendo.`);
    }
}

const beber = {
    beber(){
        console.log(`${this.nome} está bebendo.`);
    }
}

// composição (compor um objeto com varios outros objetos) mixing
const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa (nome, sobrenome) {
    // Vantagem da factory function: colocamos os descriptors direto
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa("Enzo", "Granata");
const p2 = criaPessoa("Maria", "Almeida");
console.log(p1);
console.log(p2);