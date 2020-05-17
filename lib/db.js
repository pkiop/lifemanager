var mysql = require('mysql');

var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Soalfo10!',
    database : 'test_lifemanager'
  });

  db.connect();
  module.exports = db;