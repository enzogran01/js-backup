// Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function(acumulador, valor, indice, array) { 
    return acumulador += valor;
}, 0)
// console.log(total);

const pares = numeros.filter(function(valor) {
    return valor % 2 == 0;
})
// console.log(pares);

const dobro = numeros.map(function(valor) {
    return valor * 2;
})
// console.log(dobro)

// Retorne a pessoa mais velha
const pessoas = [
    {nome: "Luiz", idade: "62"},//    0
    {nome: "Maria", idade: "23"},//   1
    {nome: "Eduardo", idade: "105"},// 2
    {nome: "Letícia", idade: "19"},// 3
    {nome: "Rosana", idade: "64"},//  4
    {nome: "Wallace", idade: "47"}//  5
]

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha)