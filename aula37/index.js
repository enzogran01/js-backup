const nomes = ['Luiz', 'Otávio', 'Henrique'];

for (let valor of nomes) {
    console.log(valor);
}

console.log("#########")

nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array)
});

// For classico - geralmente com iteraveis, como array ou strings
// For in - retorna o indice ou chave
// For of - retorna o valor em si (iteraveis, arrays ou strings)
