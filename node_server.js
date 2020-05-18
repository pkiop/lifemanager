var http = require('http');
var url = require('url');
var topic = require('./lib/topic');
var settings = require('./settings');
var portnum = settings.port_num;
var fs = require('fs');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var express = require('express');
var helmet = require('helmet')
var flash = require('connect-flash');


var app = express();
app.use(helmet());

var passport = require('./lib/passport')(app);
var bodyParser = require('body-parser');
var compression = require('compression');
var helmet = require('helmet');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(compression());
app.use(session({
    secret: 'aaa',
    resave: false,
    saveUninitialized: false,
    store: new FileStore()
}))
app.use(flash());

/*

app.use(express.static('public'));

이미지, CSS 파일 및 JavaScript 파일과 같은 정적 파일을 제공하려면 Express의 기본 제공 미들웨어 함수인 express.static을 사용하십시오.
정적 자산이 포함된 디렉토리의 이름을 express.static 미들웨어 함수에 전달하면 파일의 직접적인 제공을 시작할 수 있습니다. 예를 들면, 다음과 같은 코드를 이용하여 public이라는 이름의 디렉토리에 포함된 이미지, CSS 파일 및 JavaScript 파일을 제공하십시오.

http://localhost:3000/images/kitten.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/images/bg.png
http://localhost:3000/hello.html

Express는 정적 디렉토리에 대해 상대적으로 파일을 검색하며, 따라서 정적 디렉토리의 이름은 URL의 일부가 아닙니다.

*/
var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth')(passport);

app.use('/', indexRouter);
app.use('/auth', authRouter);

app.use(function(req, res, next) {
    res.status(404).send("Sorry can't find that!");
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Somthing broke!');
});

app.listen(settings.port_num, function() {
    console.log('Example app listening on port ', settings.port_num);
});//
/*
var app = http.createServer(function(request, response) {
    var _url = request.url;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/') {
        if(queryData.id === undefined) {
            topic.home(request, response);
        }
        else {
            topic.page(request, response);
        }
    }
    if(pathname === '/puttime') {
        console.log("no use ");
    } else if (pathname === '/puttime_process') {
        topic.puttime_process(request, response);
    } else if (pathname === '/selecttable') {
        topic.selecttable(request, response, queryData);
    } else if (pathname === '/showNupdatetable') {
        topic.showNupdatetable(request, response,queryData);  
    } else if (pathname === '/showtable_process') {
        topic.showtable_process(request, response);
    } else if (pathname === '/intervalrecodes') {
        topic.select_interval(request, response); 
    } else if (pathname === '/showtotalrecodes') {
        topic.showtotalrecodes(request, response);
    } else if (pathname === '/todaytable_process') {
        topic.todaytable_process(request, response);
    } else if (pathname === '/update_process') {
        topic.update_process(request, response);  
    } else if (pathname === '/delete_process') {
        topic.delete_process(request, response);
    } else if (pathname === '/confirm_process') {
        topic.confirm_process(request, response);
    } else if (pathname === '/selectSleepTime') {
        topic.selectSleepTime(request, response, queryData);
    } else if (pathname === '/maketable_process') {
        topic.maketable_process(request, response);
    } else if (pathname === '/interval_process') {
        topic.interval_process(request, response); 
    } else if (pathname === '/showcategory') {
        topic.showcategory(request, response); 
    } else if (pathname === '/category_process') {
        if(queryData.categoryValue === undefined) {
            response.writeHead(404);
            response.end('Not found');
        }
        else {
            topic.category_process(request, response, queryData.categoryValue); 
        }
    } else if (pathname === '/getlogo') {
        fs.readFile("./pic/logo.png", (err, data) => {
            if(err) {
                throw err;
            }
            response.end(data);
        })
    }
    else {
        response.writeHead(404);
        response.end('Not found');
    }

});
app.listen(portnum);

*/
// app2.get('/logo', function(request, response) {
//     fs.readFile('/pic/logo.png', function(error, data) {
//         response.writeHead(200, {'Content-Type': 'text/html'});
//         response.end(data);
//     });
// });