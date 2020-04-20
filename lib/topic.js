var template = require('./template');
var qs = require('querystring');
var db = require('./db');
const request_lib = require('request');
var moment = require('moment');
var categorys = ['develop', 'study', 'book_reading', 'exercise', 'work', 'english', 'chinese', 'etc'];
puttime_consume_calculation = function(ssh, ssm, eeh, eem) {
    var sh = Number(ssh);
    var sm = Number(ssm);
    var eh = Number(eeh);
    var em = Number(eem);
    if(eh === -1) {
        return 0;
    }
    if(eh < sh) {
        eh += 24; // 00시 넘었을 때 보정하기 위함.
    }
    if(eh > sh && sm > em) {
        em += 60;
        eh -= 1;  
    }
    
    var ret = (eh - sh) * 60;
    ret += (em - sm);
    return ret;
}

nicetime_calculate = function(inputs) {
    console.log('nicetime inputs : ', inputs);
    var total_consume = 0;
    var i = 0;
    while(i < inputs.length){
        if(inputs[i].except_check === "except_no") {
            total_consume += Number(inputs[i].consume);
        }
        i += 1;
    }
    return total_consume;
}

category_time_calculate = function(category, inputs){
    var total_consume = 0;
    var i = 0;
    while(i < inputs.length){
        if(inputs[i].category === category) {
            total_consume += Number(inputs[i].consume);
        }
        i += 1;
    }
    return total_consume;
}

module.exports = {
    home:function(request, response) {
        var title = '라매';
        var description = 'Hello, 여긴 main page';
        var html = template.HTML(title, description);
        response.writeHead(200);
        response.end(html);
    },
    
    page:function(request, response) {
        var title = 'Welcome';
        var description = 'Hello, Node.js - not undefined';
        var html = `
            <h1>${title}</h1>
            <h2>${description}</h2>
        `
        response.writeHead(200);
        response.end(html);
    },
    
  /*  puttime:function(request, response) {
        var title = 'Put time';
        var body = template.puttime();
        var html = template.HTML(title, body);
        response.writeHead(200);
        response.end(html);
    },
*/
    puttime_process:function(request, response) {
        var body = '';
        request.on('data', function(data) { // event driven programing 용도. 중간에 데이터 너무 길면 짤려서 이렇게.
            body = body + data;
        });
        request.on('end', function() { // 다 받았다.
            var post = qs.parse(body);

            var date_only_number = post.date;
            var except_check = post.except_check;

            // if(post.except_check === 'on') { except_check = '1'; }
            // else { except_check = '0'; }

            var temp_querystr = 'INSERT INTO day' + date_only_number;
            var db_consume = '';
            if(post.endh === '-1') {
                db_consume = '0';
            } 
            else {
                db_consume = String(puttime_consume_calculation(post.starth, post.startm, post.endh, post.endm));
            }
            db.query(temp_querystr + ` (category, doing, starth, startm, endh, endm, consume, except_check) VALUES(?,?,?,?,?,?,?,?)`,[post.category, String(post.doing), String(post.starth), String(post.startm), String(post.endh), String(post.endm), db_consume, except_check],
                function(error, result) {
                if(error) {
                    if(error.errno === 1146) { // table 없음.
                        var create_query_string = 'CREATE TABLE day' + date_only_number;
                        db.query(create_query_string + ` (
                            id INT PRIMARY KEY AUTO_INCREMENT,
                            category VARCHAR(32) NOT NULL,
                            doing text NOT NULL,
                            starth INT NOT NULL,
                            startm INT NOT NULL,
                            endh INT,
                            endm INT,
                            consume INT NOT NULL,
                            except_check VARCHAR(32) NOT NULL
                            )`, function(error2, result2){
                            if(error2) {
                                throw error2;
                            }
                            db.query(temp_querystr + ` (category, doing, starth, startm, endh, endm, consume, except_check) VALUES(?,?,?,?,?,?,?,?)`,[post.category, String(post.doing), String(post.starth), String(post.startm), String(post.endh), String(post.endm), String(puttime_consume_calculation(post.starth, post.startm, post.endh, post.endm)), except_check],
                            function(error3, result3) {
                                if(error3) {
                                    throw error3;
                                }
                                response.writeHead(302, {Location: `/`});
                                response.end();    
                             });
                        });
                    }
                    else {
                        throw error;
                    }
                }
                response.writeHead(302, {Location: `/showNupdatetable?date=${date_only_number}`});
                response.end();  
            });
        });
    },

    selecttable:function(request, response, queryData) {
        var title = 'show table';
        var msg = '';
        if(queryData.msg === undefined) {
            msg = '';
        } else {
            msg = queryData.msg;
        }
        var body = template.selecttable(msg);
        var html = template.HTML(title, body);
        response.writeHead(200);
        response.end(html);
    },

    todaytable_process:function(request, response) {
        var nowdate = moment().format("YYMMDD");
        response.writeHead(302, {Location: `/showNupdatetable?date=${nowdate}`});
        response.end();
    },
    
    showNupdatetable:function(request,response,queryData) {
        var title = 'show N update table';
        var body = template.puttime(queryData.date);
        body += '<hr>';
        db.query(`SELECT * FROM day` + queryData.date, function(error, results) {
            if(error) {
                if(error.errno === 1146) { // table 없음.
                    response.writeHead(302, {Location: `/selecttable?msg=notable`} ); // 원랜 바로 날짜정보있으므로 sleeptime으로가고싶지만 post 어떻게 해야할지 몰라서
                    response.end();
                }
                else {
                    throw error;
                }
            }
            else {
                body += template.showDBTable(results, queryData.date);
                var html = template.HTML(title, body);
                response.writeHead(200);
                response.end(html);
            }
        });
    },

    showcategory:function(request,response) {
        var body = '';
        var title = 'showcategory';
        body += '<ul>';
        console.log('categorys : ', categorys);
        for(var i in categorys) {
            body += '<li><a href="/' + categorys[i] + '_process">' + categorys[i] + '</a></li>';
        }
        body += '</ul>';
        console.log(body);
        var html = template.HTML(title, body);
        response.writeHead(200);
        response.end(html);
    },
    
    refresh_db:function(date) {
        db.query(`SELECT * FROM day` + date, function(error, results) {
            if(error) {
                throw error;
            }
        });
    }, 

    showtotalrecodes:function(request,response) {
        var title = 'show N update table';
        var body = '';
        db.query(`SELECT * FROM totalrecodes`, function(error, results) {
            if(error) {
                throw error;
            }
            body += template.showTotalrecodesTable(results);
            var html = template.HTML(title, body);
            response.writeHead(200);
            response.end(html);
        });
    },
    
    showtable_process:function(request, response) {
        console.log("showtableprocess on");
        var title = 'show table';
        var body = '';
        request.on('data', function(data) { // event driven programing 용도. 중간에 데이터 너무 길면 짤려서 이렇게.
            body = body + data;
        });
        request.on('end', function() {
            var post = qs.parse(body);
            var date_only_number = post.date[2] + post.date[3] + post.date[5] + post.date[6] + post.date[8] + post.date[9]; 
            db.query(`SELECT * FROM day` + date_only_number, function(error, results) {
                if(error) {
                    if(error.errno === 1146) {
                        console.log("go");
                        var redirect_location = `/selectSleepTime?date=${date_only_number}`;
                        response.writeHead(302, {Location: redirect_location} );
                        response.end();
                        return;
                    }
                    else {
                        throw error;
                    }
                }
                else {
                    var redirect_location = `/showNupdatetable?date=${date_only_number}`;
                    response.writeHead(302, {Location: redirect_location} );
                    response.end();

                }
            });  
        });
    },


    update_process:function(request, response) {
        var body = '';
        request.on('data', function(data){
            body = body + data;
        });
        request.on('end', function(){
            var post = qs.parse(body);
            var id = post.id;
            var date_only_number = post.date;
            db.query(`UPDATE day` + date_only_number + ` SET category=?, doing=?, starth=?, startm=?, endh=?, endm=?, consume=?, except_check=? WHERE id=?`, [post.category, post.doing, post.starth, post.startm, post.endh, post.endm, puttime_consume_calculation(post.starth, post.startm, post.endh, post.endm), post.except_check, post.id], 
                function(error, results){
                if(error) {
                    throw error;
                }
                var redirect_location = `/showNupdatetable?date=${date_only_number}`;
                response.writeHead(302, {Location: redirect_location} );
                response.end();
            });
        });
    },

    delete_process:function(request, response) {
        var body = '';
        request.on('data', function(data){
            body = body + data;
        });
        request.on('end', function(){
            var post = qs.parse(body);
            var id = post.id;
            var date_only_number = post.date; 
            db.query(`DELETE from day` + date_only_number + ` where id=?`, [post.id], 
                function(error, results){
                if(error) {
                    throw error;
                }
                var redirect_location = `/showNupdatetable?date=${date_only_number}`;
                response.writeHead(302, {Location: redirect_location} );
                response.end();
            });
        });
    },

    confirm_process:function(request, response) {
        var body = '';
        request.on('data', function(data){
            body = body + data;
        });
        request.on('end', function(){
            var post = qs.parse(body);
            var id = post.id;
            var date_only_number = post.date; 

            
            db.query(`SELECT * from day` + date_only_number, 
                function(error, results){
                if(error) {
                    throw error;
                }

                var nicetime = nicetime_calculate(results);
                var body = template.showConfirmDBTable(results, date_only_number);
                body += '<a href="/">confirm완료</a>';
                console.log('nicetimeis : ', nicetime);

                db.query(`UPDATE totalrecodes SET nicetime=? WHERE daykey=?`,[nicetime, date_only_number], 
                function(error2, result2){
                    if(error2) {
                        throw error2;
                    }

                });

                for (__category in categorys) {
                    var category_time = category_time_calculate(categorys[__category], results);
                    db.query(`INSERT INTO ` + categorys[__category] + `(daykey, nicetime) VALUES(?, ?)`,[date_only_number, category_time], 
                    function(error2, result2){
                        if(error2) {
                            throw error2;
                        }
                    });
                }
                response.writeHead(200);
                response.end(html); 
            });
        });
    },

    selectSleepTime:function(request, response, queryData) {

        var body = '';
        var title = 'show table';
        var body = template.selectSleepTime(queryData.date);
        var html = template.HTML(title, body);
        response.writeHead(200);
        response.end(html);
       
    },

    maketable_process:function(request, response) {
        var body = '';
        request.on('data', function(data){
            body = body + data;
        });
        request.on('end', function(){
            var post = qs.parse(body);
            var date_only_number = post.date;
            var create_query_string = 'CREATE TABLE day' + date_only_number;
            db.query(create_query_string + ` (
                id INT PRIMARY KEY AUTO_INCREMENT,
                category VARCHAR(32) NOT NULL,
                doing text NOT NULL,
                starth INT NOT NULL,
                startm INT NOT NULL,
                endh INT,
                endm INT,
                consume INT NOT NULL,
                except_check VARCHAR(32) NOT NULL
                )`, function(error2, result2){
                if(error2) {
                    throw error2;
                }
                var temp_querystr = 'INSERT INTO day' + date_only_number;
                db.query(temp_querystr + ` (category, doing, starth, startm, endh, endm, consume, except_check) VALUES(?,?,?,?,?,?,?,?)`,['sleep', '수면', String(post.starth), String(post.startm), String(post.endh), String(post.endm), String(puttime_consume_calculation(post.starth, post.startm, post.endh, post.endm)), 'except'],
                function(error3, result3) {
                    if(error3) {
                        throw error3;
                    }
 
                });
                db.query('INSERT INTO totalrecodes' + ` (daykey, year, month, day, sleepstart, sleepend, sleep) VALUES(?,?,?,?,?,?,?)`,[String(date_only_number), date_only_number[0]+date_only_number[1], date_only_number[2]+date_only_number[3], date_only_number[4]+date_only_number[5], post.starth + ':' + post.startm, post.endh + ':' + post.endm, String(puttime_consume_calculation(post.starth, post.startm, post.endh, post.endm))],
                function(error3, result3) {
                    if(error3) {
                        throw error3;
                    }
                    response.writeHead(302, {Location: `/showNupdatetable?date=${date_only_number}`});
                    response.end();  
                });
            });
 
        });




    },

    develop_process:function(request, response) {
        db.query(`SELECT * FROM develop`, function(error, results) {
            if(error) {
                throw error;
            }
            else {
                console.log(results);
                var body = '';
                var title = 'develop';
                body += '<ul>';
                for(var i in categorys) {
                    body += '<li><a href="/' + categorys[i] + '_process">' + categorys[i] + '</a></li>';
                }
                body += '</ul>';
                body += '<table>';
                
                for(var i in results) {
                    body += '<tr>';
                    console.log(results[i]);
                    body += '<td>';
                    body += results[i].daykey;
                    body += '</td>';
                    body += '<td>';
                    body += results[i].nicetime;
                    body += '</td>';
                    body += '</tr>'
                }
                body += '</table>'; 
                
                var html = template.HTML(title, body);
                response.writeHead(200);
                response.end(html);
            }
        }); 
    },

    study_process:function(request, response) {
        db.query(`SELECT * FROM study`, function(error, results) {
            if(error) {
                throw error;
            }
            else {
                console.log(results);
                var body = '';
                var title = 'study';
                body += '<ul>';
                for(var i in categorys) {
                    body += '<li><a href="/' + categorys[i] + '_process">' + categorys[i] + '</a></li>';
                }
                body += '</ul>';
                body += '<table>';
                
                for(var i in results) {
                    body += '<tr>';
                    console.log(results[i]);
                    body += '<td>';
                    body += results[i].daykey;
                    body += '</td>';
                    body += '<td>';
                    body += results[i].nicetime;
                    body += '</td>';
                    body += '</tr>'
                }
                body += '</table>'; 
                
                var html = template.HTML(title, body);
                response.writeHead(200);
                response.end(html);
            }
        }); 
    },

    book_reading_process:function(request, response) {
        db.query(`SELECT * FROM book_reading`, function(error, results) {
            if(error) {
                throw error;
            }
            else {
                console.log(results);
                var body = '';
                var title = 'book_reading';
                body += '<ul>';
                for(var i in categorys) {
                    body += '<li><a href="/' + categorys[i] + '_process">' + categorys[i] + '</a></li>';
                }
                body += '</ul>';
                body += '<table>';
                
                for(var i in results) {
                    body += '<tr>';
                    console.log(results[i]);
                    body += '<td>';
                    body += results[i].daykey;
                    body += '</td>';
                    body += '<td>';
                    body += results[i].nicetime;
                    body += '</td>';
                    body += '</tr>'
                }
                body += '</table>'; 
                
                var html = template.HTML(title, body);
                response.writeHead(200);
                response.end(html);
            }
        }); 
    },

    exercise_process:function(request, response) {
        db.query(`SELECT * FROM exercise`, function(error, results) {
            if(error) {
                throw error;
            }
            else {
                console.log(results);
                var body = '';
                var title = 'exercise';
                body += '<ul>';
                for(var i in categorys) {
                    body += '<li><a href="/' + categorys[i] + '_process">' + categorys[i] + '</a></li>';
                }
                body += '</ul>';
                body += '<table>';
                
                for(var i in results) {
                    body += '<tr>';
                    console.log(results[i]);
                    body += '<td>';
                    body += results[i].daykey;
                    body += '</td>';
                    body += '<td>';
                    body += results[i].nicetime;
                    body += '</td>';
                    body += '</tr>'
                }
                body += '</table>'; 
                
                var html = template.HTML(title, body);
                response.writeHead(200);
                response.end(html);
            }
        }); 
    },

    work_process:function(request, response) {
        db.query(`SELECT * FROM work`, function(error, results) {
            if(error) {
                throw error;
            }
            else {
                console.log(results);
                var body = '';
                var title = 'work';
                body += '<ul>';
                for(var i in categorys) {
                    body += '<li><a href="/' + categorys[i] + '_process">' + categorys[i] + '</a></li>';
                }
                body += '</ul>';
                body += '<table>';
                
                for(var i in results) {
                    body += '<tr>';
                    console.log(results[i]);
                    body += '<td>';
                    body += results[i].daykey;
                    body += '</td>';
                    body += '<td>';
                    body += results[i].nicetime;
                    body += '</td>';
                    body += '</tr>'
                }
                body += '</table>'; 
                
                var html = template.HTML(title, body);
                response.writeHead(200);
                response.end(html);
            }
        }); 
    },

    english_process:function(request, response) {
        db.query(`SELECT * FROM english`, function(error, results) {
            if(error) {
                throw error;
            }
            else {
                console.log(results);
                var body = '';
                var title = 'english';
                body += '<ul>';
                for(var i in categorys) {
                    body += '<li><a href="/' + categorys[i] + '_process">' + categorys[i] + '</a></li>';
                }
                body += '</ul>';
                body += '<table>';
                
                for(var i in results) {
                    body += '<tr>';
                    console.log(results[i]);
                    body += '<td>';
                    body += results[i].daykey;
                    body += '</td>';
                    body += '<td>';
                    body += results[i].nicetime;
                    body += '</td>';
                    body += '</tr>'
                }
                body += '</table>'; 
                
                var html = template.HTML(title, body);
                response.writeHead(200);
                response.end(html);
            }
        }); 
    },

    chinese_process:function(request, response) {
        db.query(`SELECT * FROM chinese`, function(error, results) {
            if(error) {
                throw error;
            }
            else {
                console.log(results);
                var body = '';
                var title = 'chinese';
                body += '<ul>';
                for(var i in categorys) {
                    body += '<li><a href="/' + categorys[i] + '_process">' + categorys[i] + '</a></li>';
                }
                body += '</ul>';
                body += '<table>';
                
                for(var i in results) {
                    body += '<tr>';
                    console.log(results[i]);
                    body += '<td>';
                    body += results[i].daykey;
                    body += '</td>';
                    body += '<td>';
                    body += results[i].nicetime;
                    body += '</td>';
                    body += '</tr>'
                }
                body += '</table>'; 
                
                var html = template.HTML(title, body);
                response.writeHead(200);
                response.end(html);
            }
        }); 
    },

    etc_process:function(request, response) {
        db.query(`SELECT * FROM etc`, function(error, results) {
            if(error) {
                throw error;
            }
            else {
                console.log(results);
                var body = '';
                var title = 'etc';
                body += '<ul>';
                for(var i in categorys) {
                    body += '<li><a href="/' + categorys[i] + '_process">' + categorys[i] + '</a></li>';
                }
                body += '</ul>';
                body += '<table>';
                
                for(var i in results) {
                    body += '<tr>';
                    console.log(results[i]);
                    body += '<td>';
                    body += results[i].daykey;
                    body += '</td>';
                    body += '<td>';
                    body += results[i].nicetime;
                    body += '</td>';
                    body += '</tr>'
                }
                body += '</table>'; 
                
                var html = template.HTML(title, body);
                response.writeHead(200);
                response.end(html);
            }
        }); 
    }

   
}
