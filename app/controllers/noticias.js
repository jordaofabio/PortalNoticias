module.exports.noticias = function(application, req, res) {
    var conn = application.config.dbConnection();
    var NoticiasDAO = new application.app.models.NoticiasDAO(conn);

    NoticiasDAO.getNoticias((erro, result) => {
        res.render('noticias/noticias', {noticias : result});

    });
}

module.exports.noticia = function(application, req, res) {
    var conn = application.config.dbConnection();
        var NoticiasDAO = new application.app.models.NoticiasDAO(conn);
        var id_noticia = req.query;
        
        NoticiasDAO.getNoticia(id_noticia, (erro, result) => {
            res.render('noticias/noticia', {noticia : result});
        });
}