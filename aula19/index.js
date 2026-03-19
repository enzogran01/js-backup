/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)

Referência (mutável) - Array, Object e Function - Passados por referência
*/

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const b = {...a};
a.nome = 'João' // B não é mais afetado (spread)
console.log(b)

// let a = [1, 2, 3];
// let b = [...a];
// let c = b;
// console.log(a, b);

// a.push(4); // B também é afetado, pois ambos (a e b) apontam para o mesmo valor na memória
// console.log(a, b);

// b.pop(); // A também é afetado, pois ambos (a e b) apontam para o mesmo valor na memória
// console.log(a, b);

// console.log(c);