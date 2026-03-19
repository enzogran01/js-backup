/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)
// Já vi
Object.keys
Object.freeze
Object.properties
Object.property
*/

const produto = { nome: 'Caneca', preco: 1.8 };
Object.freeze(produto);
// const outraCoisa = { 
//     ...produto,
//     material: "Porcelana"
// };
// const outraCoisa = Object.assign({}, produto, { material: "porcelana" });
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
produto.nome = 'Luiz Otávio';
console.log(produto);
// outraCoisa.preco = 2.5;
// console.log(outraCoisa);
