const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

// /profiles/12345?
// campanha=googleads& 
// nome_camapnha=seila

app.get('/', (requisicao, resposta) => {
    resposta.send(`
        <form action="/" method="POST">
            Nome do cliente: <input type="text" name="qualquerCoisa">
            <button>Olá mundo</button>
        </form>    
    `);
})

app.get('/testes/', (req, res) => {
    res.send("testes");
})

app.get('/testes/:idUsuarios', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.nome);
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.qualquerCoisa}`);
})

app.listen(3000, () => {
    console.log("acessar http://localhost:3000");
    console.log("Servidor executando na porta 3000.");
});
