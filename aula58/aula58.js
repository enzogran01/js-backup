// Função construtora -> objetos
// Função factory -> objetos
// Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    ID = 123456;
    const metodoInterno = () => {

    }

    // Atributos ou métodos públicos
    this.nome = nome
    this.sobrenome = sobrenome
    this.metodo = () => {
        console.log(this.nome + ": sou um método")
    }
}

const p1 = new Pessoa("Enzo", "Granata");
const p2 = new Pessoa("Luiz", "Otávio");
p1.metodo();
p2.metodo();
