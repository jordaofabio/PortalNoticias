module.exports.formulario_inclusao_noticia = function(application, req, res) {
    res.render('admin/form_add_noticia');
}

module.exports.salvar_noticia = function(application, req, res) {
    let noticia = req.body

    req.assert('titulo', 'O Título é obrigatório.').notEmpty();
    req.assert('resumo', 'O Resumo é obrigatório.').notEmpty();
    req.assert('resumo', 'O Resumo deve ter entre 10 e 100 caracteres.').len(10,100);
    req.assert('autor', 'O Autor é obrigatório.').notEmpty();
    req.assert('data_noticia', 'A Data da notícia é obrigatória.');

    // var erros = req.validationErros();

    // if(erros){
    //     res.render('admin/form_add_noticia');

    //     return;
    // }

    var conn = application.config.dbConnection();
    var NoticiasDAO = new application.app.models.NoticiasDAO(conn);

    NoticiasDAO.salvarNoticia(noticia, (erro, result) => {
        res.redirect('/noticias');
    });
}