// function falaFrase(comeco) {
//     function falaResto(resto) {
//         return comeco + ' ' + resto;
//     }

//     return falaResto;
// }

// const fala = falaFrase('Olá');
// const resto = fala('mundo!');
// console.log(resto);

// funcao closure
function criaMultiplicador(multiplicador) {
    // multiplicador
    return (n) => {
        return n * multiplicador
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))
