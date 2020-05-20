var mysql = require('mysql');

var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Q1w2e3r4!!',
    database : 'lifemanager'
  });

  db.connect();
  module.exports = db;