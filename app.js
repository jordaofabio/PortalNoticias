var app = require('./config/server');

// var rotaNoticias = require('./app/routes/noticias')(app);

// var rotaHome = require('./app/routes/home')(app);

// var rotaFormIncluir = require('./app/routes/form_incluir')(app);

app.listen(3000, () => console.log('Servidor rodando com Express.'));