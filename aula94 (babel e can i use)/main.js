const nome = "Luiz";
const obj = {nome};
const novoObj = { ...obj };
console.log(novoObj);

const falaObj = obj => console.log(`${obj} => é um objeto.`);

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}