function NoticiasDAO(connection) {
    this._conn = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback) {
    this._conn.query('SELECT * FROM noticias order by data_criacao desc', callback);
}

NoticiasDAO.prototype.getNoticia = function(id_noticia, callback) {
    this._conn.query('SELECT * FROM noticias where id_noticia = '+ id_noticia.id_noticia, callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback) {
    this._conn.query('insert into noticias set ? ', noticia, callback)
}

NoticiasDAO.prototype.getUltimasNoticias = function(callback){
    this._conn.query('SELECT * FROM noticias order by data_criacao desc limit 5', callback);
}

module.exports = function() {
    return NoticiasDAO;
}