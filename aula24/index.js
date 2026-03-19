
// if pode ser usado sozinho
// sempre que eu usar else, deve existir um if anteriormente
// eu posso ter vários else ifs na checagem
// só posso ter um else na checagem
// podemos usar condições sem else if, utilizando apenas if e else

/*
Entre 0 - 5 => Boa noite
Entre 6 - 11 => Bom dia
Entre 12 - 18 => Boa tarde
Entre 19 => Boa noite
*/

// Jeito meu
const hora = 12;

if (hora >= 0 && hora < 6) {
    console.log('Boa noite');
} else if (hora < 12) {
    console.log('Bom dia');
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde');
} else if (hora >= 18) {
    console.log('Boa noite');
}

// Jeito do prof.

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
} else {
    console.log('Olá');
}

const tenhoGrana = false;

if (tenhoGrana) {
    console.log('Vou sair de casa.');
}