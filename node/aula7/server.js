const express = require('express');
const app = express();

//         CRIAR   LER   ATUALIZAR APAGAR
// CRUD -> CREATE, READ, UPDATE,   DELETE
//         POST    GET   PUT       DELETE

// http://meusite.com/ <- GET -> Entregue a página
// http://meusite.com/sobre <- GET -> Entregue a página /sobre

app.get('/', (requisicao, resposta) => {
    resposta.send(`
        <form action="/" method="POST">
            Nome do cliente: <input type="text" name="nome">
            <button>Olá mundo</button>
        </form>    
    `);
})

app.post('/', (req, res) => {
    res.send("Recebi o formulário.");
})

app.get('/contato', (req, res) => {
    res.send("Obrigado por entrar em contato conosco.");
})

app.listen(3000, () => {
    console.log("acessar http://localhost:3000");
    console.log("Servidor executando na porta 3000.");
});
