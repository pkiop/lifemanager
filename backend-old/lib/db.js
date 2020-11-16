var mysql = require('mysql');

var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Soalfo10!',
    database : 'lifemanager'
  });

  db.connect();
  module.exports = db;