// var http = require('http');
// var url = require('url');

var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync'); // 어떤 방식으로 데이터 가져욜지 (지금은 동기방식)

var adapter = new FileSync('db.json');
var db = low(adapter);

// Set some defaults (required if your JSON file is empty)
db.defaults({ topic: [], author: []}).write() // write -> 없으면 만들어준다. [] -> 배열형태라는 것 
// db.get('author').push({
//     id:1,
//     name:'egoing',
//     profile:'developer'
// }).write();

// db.get('topic').push({
//     id:1,
//     title:'lowdb',
//     description:'low db is ...',
//     author:1
// }).write();

db.get('topic').push({
    id:2,
    title:'mysql',
    description:'mysql is ...',
    author:1
}).write();
// var app = http.createServer(function(req, res) {
//     var _url = request.url;
//     var pathname = url.parse(_url, true).pathname;
//     if(pathname === '/web.html') {

//     }
// })
// app.listen(3000);