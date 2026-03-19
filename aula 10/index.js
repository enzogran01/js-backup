// DADOS PRIMITIVOS -- String, Number, Undefined, Null, Boolean, Symbol

const nome1 = 'Luiz'; // String
const nome2 = "Luiz"; // String
const nome3 = `Luiz`; // String

const num1 = 10; // Number
const num2 = 10.52; // Number

let nomeAluno; // Undefined -> não aponta para local nenhum na memória
const sobrenomeAluno = null; // Nulo -> não aponta para local nenhum na memória
const aprovado = false; // Boolean -> true, false (lógico)

let a = 2;
let b = a;
console.log(a, b);

a = 3;
console.log(a, b);