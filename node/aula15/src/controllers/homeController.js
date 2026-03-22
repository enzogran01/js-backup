exports.paginaInicial = (req, res) => {
    req.flash('info', 'Olá mundo!');
    req.flash('error', 'asdfasdf')
    req.flash('success', 'bla bla');
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}
