/*
Operadores lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar TRUE
|| -> OR -> OU
! -> NOT -> NÃO -> inverte quantas vezes quiser => !false = true (ninguém usa isso)
*/



const expressaoAnd = true && true && true && false;
const expressaoOr = false || true;

const usuario = 'Luiz'; // form usuário digitou
const senha = '12456';  // form usuário digitou
const vaiLogar = usuario === 'Luiz' && senha === '12456';

console.log(!!false);
