const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');
const Pessoa = require('./modules/Pessoa');

let pessoas = [];

const p1 = new Pessoa("Fulano", 23);
const p2 = new Pessoa("Ciclano", 32);
const p3 = new Pessoa("Deltrano", 19);

pessoas.push(p1, p2, p3);
pessoas = JSON.stringify(pessoas);

escreve(caminhoArquivo, pessoas);

async function leArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val));
}

leArquivo(caminhoArquivo);
