var http = require('http');
var url = require('url');
var topic = require('./lib/topic');

var app = http.createServer(function(request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
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
    } else if (pathname === '/showcategory') {
        topic.showcategory(request, response); 
    } else if (pathname === '/develop_process') {
        topic.develop_process(request, response); 
    } else if (pathname === '/study_process') {
        topic.study_process(request, response); 
    } else if (pathname === '/book_reading_process') {
        topic.book_reading_process(request, response); 
    } else if (pathname === '/exercise_process') {
        topic.exercise_process(request, response); 
    } else if (pathname === '/work_process') {
        topic.work_process(request, response); 
    } else if (pathname === '/english_process') {
        topic.english_process(request, response); 
    } else if (pathname === '/chinese_process') {
        topic.chinese_process(request, response); 
    } else if (pathname === '/etc_process') {
        topic.etc_process(request, response); 
    } 
    
    else {
        response.writeHead(404);
        response.end('Not found');
    }

});
app.listen(3000);
