/**
 * Aritméticos
 * + Adição / Concatenação (- * /)
 * ** Potenciação
 * % Resto da divisão
 */

/* Precedencia
()
**
* / %
= -
*/

// operador de contador 1 em 1 (++) (--)

// Operadores de atribuição
let contador = 2;
const passo = 50;

contador += passo; // contador = contador + 50

console.log(contador);

// NaN -> Not a Number --- ParseInt (inteiro), ParseFloat (casas decimais), Number
const num1 = 10;
const num2 = Number('5.2');
console.log(num1 + num2);
console.log(typeof num2);
