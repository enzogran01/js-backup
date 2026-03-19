exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome do cliente: <input type="text" name="qualquerCoisa">
            <button>Olá mundo</button>
        </form>    
    `);
};

exports.trataPost = (req, res) => {
    res.send("Ei! Sou sua nova rota de post!");
}
