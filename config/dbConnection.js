var mysql = require('mysql');

var connMySQL = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'fabio',
        password: '12345',
        database: 'portal_noticias',
        port: 3306
    });
};

module.exports = function(){
    return connMySQL; // desta forma o consign não estabelece uma nova conexão a cada roda.
};