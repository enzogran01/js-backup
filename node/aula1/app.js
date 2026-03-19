// const { nome, sobrenome, falaNome } = require("./mod1");
// console.log(nome, sobrenome);
// console.log(falaNome());

const path = require('path');
const { Pessoa, nome, sobrenome } = require('./mod1');

const p1 = new Pessoa("Enzo");
console.log(p1);
console.log(nome);
console.log(sobrenome);

const axios = require('axios');
axios("https://jsonplaceholder.typicode.com/posts")
    .then(response => console.log(response.data))
    .catch(e => console.log(e));
