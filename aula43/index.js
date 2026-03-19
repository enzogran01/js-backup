// Escreva uma função que receba um número e
// retorne o seguinte:
// Número é divisível por 3 = Fizz;
// Número é divisível por 5 = Buzz;
// Número é divisível por 3 e 5 = FizzBuzz;
// Número NÃO é divisível por 3 e 5 = retorna o próprio número
// Checar se o número é realmente um número = retorna o que você receber
// use a função com números de 0 a 100;

function verificaNumero (n) {
    // do {
        if (typeof(n) !== 'number') return n
        if (n % 3 == 0 && n % 5 == 0) return "FizzBuzz";
        if (n % 3 == 0) return "Fizz";
        if (n % 5 == 0) return "Buzz";
        return n;
    // } while (n < 0 || n > 100);
}

for (let i = 0; i <= 100; i++) {
    console.log(i, verificaNumero(i));
}
