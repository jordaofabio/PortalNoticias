module.exports = function(application) {
    application.get('/incluir', (req, res) => { 
        application.app.controllers.admin.formulario_inclusao_noticia(application, req, res);
    });

    application.post('/noticias/salvar', (req, res) => { 
        application.app.controllers.admin.salvar_noticia(application, req, res);
    });

    
};