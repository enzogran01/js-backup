const resultado = document.querySelector(".resultado");

if (typeof axios !== "undefined") {
    console.log("Usando Axios");
    axios("pessoas.json")
        .then(resposta => carregaElementosNaPagina(resposta.data)); 
} else {
    console.log("Axios offline, usando fetch api");
    fetch("pessoas.json")
        .then(resposta => resposta.json())
        .then(json => carregaElementosNaPagina(json));
}

function carregaElementosNaPagina(json) {
    const table = document.createElement("table");
    for(let pessoa of json) {
        const tr = document.createElement("tr");

        let td = document.createElement("td");
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerHTML = pessoa.salario;
        tr.appendChild(td);

        table.appendChild(tr);
    }
    resultado.appendChild(table);
}