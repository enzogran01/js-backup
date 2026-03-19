// IIFE - Immediately Invoked Function Expression
(function(idade, peso, altura) {

    const sobrenome = 'Granata'
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome(sobrenome) {
        console.log(criaNome('Enzo'));
    }

    falaNome();
    console.log(idade, peso, altura)

})(30, 80, 1.80);

const nome = 'Qualquer coisa:'

(function() {
    
})()