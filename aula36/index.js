// For in - lê os índices ou chaves do objeto

const frutas = ['Pera', 'Maçã', 'Uva'];

for (let index in frutas) {
    console.log(frutas[index]);
}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

for (let chave in pessoa) {
    console.log(pessoa[chave]);
}

// // For normal
// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }
