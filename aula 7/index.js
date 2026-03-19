/**
 * Não podemos criar constantes com palavras reservadas 
 * Constantes precisam ter nomes significativos
 * Não pode começar o nome de uma constante com número
 * Não podem conter espaços e/ou traços
 * Utilizamos camelCase
 * Case-sensitive
 * Não pode modificar o valor de uma constante.
 * NÃO UTILIZE VAR, UTILIZE CONST.
 */

// String = Text | Number = Número (typeof)
const primeiroNumero = '5';
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultaDuplicado = resultado * 2;
let resultaTriplicado = resultado * 3;
resultaTriplicado = resultaTriplicado + 5;

console.log(typeof primeiroNumero);
console.log(primeiroNumero + segundoNumero); // Concatenação de 'primeiroNumero' e 'segundoNumero'
console.log(typeof (primeiroNumero + segundoNumero));
