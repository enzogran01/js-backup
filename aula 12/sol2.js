let varA = 'A';
let varB = 'B';
let varC = 'C';

[varA, varB, varC] = [varB, varC, varA]; //O valor é atribuído à variável de forma assincrona, ou seja, o primeiro valor não é deposto.

console.log(varA, varB, varC);