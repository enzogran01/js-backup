const relogio = document.querySelector(".relogio");
let segundos = 0;
let timer;

function criaHoraDosSegundos (segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: "UTC"
    });
}

function iniciaRelogio () {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

function iniciar () {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
}

function pausar () {
    relogio.classList.add('pausado');
    clearInterval(timer);
}

function zerar () {
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = "00:00:00";
}
