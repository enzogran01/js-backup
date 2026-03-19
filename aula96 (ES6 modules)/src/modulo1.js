export const nome = "Luiz";
export const sobrenome = "Miranda";
export const idade = 30;
const cpf = 11122233349; // não é exportado

export function soma(x, y) {
    return x + y;
}

export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

// export { nome, sobrenome, idade };