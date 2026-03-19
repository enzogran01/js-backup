// Global
function retornaFuncao(nome) {
    return function () {
        return nome; // closure (a função acessa o escopo léxico)
    };
}

const funcao = retornaFuncao('Enzo');
const funcao2 = retornaFuncao('Felipe');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2())