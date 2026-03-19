// Factory functions (função fábrica)
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')
            console.log(valor);
        },
        fala(assunto = "falando sobre nada") {
            return `${this.nome} está ${assunto}`;
        },
        altura: a,
        peso: p,
        // Getter (finge que é um objeto, usado para só obter valor)
        get imc() {
          const indice = this.peso / (this.altura ** 2)
          return indice.toFixed(2);
        } 
    };
}

const p1 = criaPessoa('Enzo', 'Granata', 1.70, 63);
const p2 = criaPessoa('Maria', 'Joaquina', 1.60, 42);
p1.nomeCompleto = "Enzo Granata Corrêa"
console.log(p1.nomeCompleto)
console.log(p1.fala('falando sobre JS'));
console.log(p1.imc);
console.log(p2.nomeCompleto);
console.log(p2.fala('falando sobre Python'));
console.log(p2.imc);

// Ex gemini
// function criarPerfilUsuario(nome, idade) {
//     return {
//         nome,
//         idade,
//         apresentar() {
//             return `Olá, sou ${nome} e tenho ${idade} ${idade <= 1 ? "ano" : "anos"}`
//         },
//         maiorIdade() {
//             return idade >= 18 ? "Maior de idade" : "Menor de idade"
//         }
//     }
// }
// const user1 = criarPerfilUsuario("Enzo", 18);
// console.log(user1.apresentar());
// console.log(user1.maiorIdade());
// const user2 = criarPerfilUsuario("Maria", 1);
// console.log(user2.apresentar());
// console.log(user2.maiorIdade());
