var template = require('./template');
var qs = require('querystring');
var db = require('./db');
const request_lib = require('request');
var moment = require('moment');
var settings = require('../settings');
var libauth = require('./auth');
var port_num = settings.port_num;
var categorys = settings.categorys;

var moncnt = ['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'];
next_day_ret = function (datestring) {
    var days = Number(datestring[4] + datestring[5]);
    var mons = Number(datestring[2] + datestring[3]);
    var years = Number(datestring[0] + datestring[1]);
    if (days === moncnt[mons]) {
        days = 1;
        if (mons === 12) {
            mons = 1;
            years++;
        }
        else {
            mons++;
        }
    }
    else {
        days++;
    }

    var ret_string = '';
    if (years < 10) {
        ret_string += '0';
    }
    ret_string += String(years);
    if (mons < 10) {
        ret_string += '0';
    }
    ret_string += String(mons);
    if (days < 10) {
        ret_string += '0';
    }
    ret_string += String(days);
    return ret_string;
}

puttime_consume_calculation = function (ssh, ssm, eeh, eem) {
    var sh = Number(ssh);
    var sm = Number(ssm);
    var eh = Number(eeh);
    var em = Number(eem);
    if (eh === -1) {
        return 0;
    }
    if (eh < sh) {
        eh += 24; // 00시 넘었을 때 보정하기 위함.
    }
    if (eh > sh && sm > em) {
        em += 60;
        eh -= 1;
    }

    var ret = (eh - sh) * 60;
    ret += (em - sm);
    return ret;
}

nicetime_calculate = function (inputs) {
    var total_consume = 0;
    var i = 0;
    while (i < inputs.length) {
        if (inputs[i].except_check === "except_no") {
            total_consume += Number(inputs[i].consume);
        }
        i += 1;
    }
    return total_consume;
}

category_time_calculate = function (category, inputs) {
    var total_consume = 0;
    var i = 0;
    while (i < inputs.length) {
        if (inputs[i].category === category) {
            total_consume += Number(inputs[i].consume);
        }
        i += 1;
    }
    return total_consume;
}

conpensate_zero_at_times = function (time) {
    console.log(time);
    time = Number(time);
    console.log(time);
    var ret = '';
    if (time < 10) {
        ret += '0';
        ret += String(time);
    }
    else {
        ret = String(time);
    }
    return ret;
}

alarm_debug_mode = function () {

    if (settings.database_name === 'test_lifemanager') {
        return ' - ****DEBUG MODE****';
    }
    return '';
}

module.exports = {
    home: function (request, response) {
        var title = `<p><p>라매`;
        console.log("port num is ", port_num);
        title += alarm_debug_mode();
        console.log("title is ", title);
        var description = libauth.statusUI(request, response);
        description += `
        <div class="container">
            <a href="/todaytable_process">    
                <div style="text-align: center;"><img href="/todaytable_process" src="https://t1.daumcdn.net/cfile/tistory/99220B3D5EA1A1DC17" alt = "smile" class = "rounded" /></div>
            </a>
        </div>
        
        `;

 
        var html = template.HTML(title, description);
        response.send(html);
 

    },

    page: function (request, response) {
        var title = 'Welcome';
        var description = 'Hello, Node.js - not undefined';
        var html = `
            <h1>${title}</h1>
            <h2>${description}</h2>
        `;
        response.send(html);
    },

    /*  puttime:function(request, response) {
          var title = 'Put time';
          var body = template.puttime();
          var html = template.HTML(title, body);
          response.writeHead(200);
          response.end(html);
      },
  *///
    puttime_process: function (request, response) {
        console.log('puttime_process / in topic');
        /*request.on('data', function(data) { // event driven programing 용도. 중간에 데이터 너무 길면 짤려서 이렇게.
            body = body + data;
        });*/
        /*request.on('end', function() { // 다 받았다*/
        var post = request.body;

        var date_only_number = post.date;
        var except_check = post.except_check;

        // if(post.except_check === 'on') { except_check = '1'; }
        // else { except_check = '0'; }

        var temp_querystr = 'INSERT INTO day' + date_only_number;
        var db_consume = '';
        if (post.endh === '-1') {
            db_consume = '0';
        }
        else {
            db_consume = String(puttime_consume_calculation(post.starth, post.startm, post.endh, post.endm));
        }
        db.query(temp_querystr + ` (category, doing, starth, startm, endh, endm, consume, except_check) VALUES(?,?,?,?,?,?,?,?)`, [post.category, String(post.doing), String(post.starth), String(post.startm), String(post.endh), String(post.endm), db_consume, except_check],
            function (error, result) {
                if (error) {
                    if (error.errno === 1146) { // table 없음.
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
                            )`, function (error2, result2) {
                            if (error2) {
                                throw error2;
                            }
                            db.query(temp_querystr + ` (category, doing, starth, startm, endh, endm, consume, except_check) VALUES(?,?,?,?,?,?,?,?)`, [post.category, String(post.doing), String(post.starth), String(post.startm), String(post.endh), String(post.endm), String(puttime_consume_calculation(post.starth, post.startm, post.endh, post.endm)), except_check],
                                function (error3, result3) {
                                    if (error3) {
                                        throw error3;
                                    }
                                    response.redirect('/');
                                });
                        });
                    }
                    else {
                        throw error;
                    }
                }
                response.redirect(`/showNupdatetable?date=${date_only_number}`)
            });
    },

    selecttable: function (request, response, queryData) {
        var title = '';
        title += alarm_debug_mode();
        var msg = '';
        if (queryData.msg === undefined) {
            msg = '';
        } else {
            msg = queryData.msg;
        }
        var body = template.selecttable(msg);
        var html = template.HTML(title, body);
        response.send(html);
    },

    todaytable_process: function (request, response) {
        var nowdate = moment().format("YYMMDD");
        response.redirect(`/showNupdatetable?date=${nowdate}`);
    },

    showNupdatetable: function (request, response, queryData) {
        console.log("showNupdatetable in topic called")
        var title = 'Show & Update Table';
        title += alarm_debug_mode();

        var body = '';
        db.query(`SELECT * FROM quickSelect`, function (error2, QSresults) {
            if (error2) {
                console.log("error");
                if (error2.errno === 1146) { // table 없음.
                    response.redirect(`/`);
                }
                else {
                    throw error2;
                }

            }
            if(queryData.QuickSelectDBid !== undefined) {
                body += template.puttime(queryData.date, QSresults, queryData.QuickSelectDBid);
            }
            else {
                body += template.puttime(queryData.date, QSresults);
            }
            body += '<hr color="#000000" width="95%" style="border-width:1px">';
            db.query(`SELECT * FROM day` + queryData.date, function (error, results) {
                if (error) {
                    if (error.errno === 1146) { // table 없음.
                        response.redirect(`/selecttable?msg=Produce`);
                    }
                    else {
                        throw error;
                    }
                }
                else {
                    body += template.showDBTable(results, queryData.date, QSresults);
                    var html = template.HTML(title, body);
                    response.send(html);
                }
            });
        });
    },

    showcategory: function (request, response) {
        var body = '';
        var title = 'showcategory';
        title += alarm_debug_mode();

        body += template.CategoryList();
        var html = template.HTML(title, body);
        response.send(html);
    },

    refresh_db: function (date) {
        db.query(`SELECT * FROM day` + date, function (error, results) {
            if (error) {
                throw error;
            }
        });
    },

    showtotalrecodes: function (request, response) {
        var title = '';
        var body = '';
        db.query(`SELECT * FROM totalrecodes`, function (error, results) {
            if (error) {
                throw error;
            }
            body += template.showTotalrecodesTable(results);
            var html = template.HTML(title, body);
            response.send(html);
        });
    },

    select_interval: function (request, response) {
        var title = '';
        var body = '';
        var dayval = '200425';


        body += template.select_interval();
        var html = template.HTML(title, body);
        response.send(html);
    },

    interval_process: function (request, response) {

        var post = request.body;
        var processing_date = post.Sdate[2] + post.Sdate[3] + post.Sdate[5] + post.Sdate[6] + post.Sdate[8] + post.Sdate[9];
        var end_date = post.Edate[2] + post.Edate[3] + post.Edate[5] + post.Edate[6] + post.Edate[8] + post.Edate[9];
        var Date_nicetimes = [];

        db.query(`SELECT * FROM totalrecodes`, function (error, results) {
            if (error) {
                throw error;
            }
            var new_results = [];
            for (i in results) {
                if (processing_date < results[i].daykey) {
                    processing_date = results[i].daykey;
                }
                if (results[i].daykey == processing_date) {
                    if (results[i].nicetime != null) {
                        new_results.push(results[i]);
                        Date_nicetimes.push(results[i].daykey, results[i].nicetime);
                        processing_date = next_day_ret(String(processing_date));
                    }
                }

                if (results[i].daykey >= end_date) {
                    break;
                }
            }

            var in_html = template.showIntervalrecodesTable(new_results);
            var html = template.HTML('temp', in_html);
            response.send(html);

        });
    },

    showtable_process: function (request, response) {
        var title = '';
        title += alarm_debug_mode();

        console.log('data read end');
        var post = request.body;
        var date_only_number = post.date[2] + post.date[3] + post.date[5] + post.date[6] + post.date[8] + post.date[9];
        db.query(`SELECT * FROM day` + date_only_number, function (error, results) {
            if (error) {
                if (error.errno === 1146) {
                    console.log('no_table_er');
                    var redirect_location = `/selectSleepTime?date=${date_only_number}`;
                    console.log(redirect_location);
                    response.redirect(redirect_location);
                    return;
                }
                else {
                    console.log('super error');
                    throw error;
                }
            }
            else {
                console.log('goot');
                var redirect_location = `/showNupdatetable?date=${date_only_number}`;
                response.redirect(redirect_location);
            }
        });

    },


    update_process: function (request, response) {
        var post = request.body;
        var id = post.id;
        var date_only_number = post.date;
        if (id == 1) {
            db.query(`UPDATE totalrecodes SET sleepstart=?, sleepend=?, sleep=? WHERE daykey=?`, [String(conpensate_zero_at_times(post.starth)) + ':' + String(conpensate_zero_at_times(post.startm)), String(conpensate_zero_at_times(post.endh)) + ':' + String(conpensate_zero_at_times(post.endm)), puttime_consume_calculation(post.starth, post.startm, post.endh, post.endm), date_only_number]),
                function (error, results) {
                    if (error) {
                        throw error;
                    }
                }
        }
        var except_chk = post.except_check;
        if (id == 1) {
            except_chk = 'except'
        }
        db.query(`UPDATE day` + date_only_number + ` SET category=?, doing=?, starth=?, startm=?, endh=?, endm=?, consume=?, except_check=? WHERE id=?`, [post.category, post.doing, post.starth, post.startm, post.endh, post.endm, puttime_consume_calculation(post.starth, post.startm, post.endh, post.endm), except_chk, post.id],
            function (error, results) {
                if (error) {
                    throw error;
                }
                var redirect_location = `/showNupdatetable?date=${date_only_number}`;
                response.redirect(redirect_location);
            });

    },

    delete_process: function (request, response) {
        var post = request.body;
        var id = post.id;
        var date_only_number = post.date;
        db.query(`DELETE from day` + date_only_number + ` where id=?`, [post.id],
            function (error, results) {
                if (error) {
                    throw error;
                }
                var redirect_location = `/showNupdatetable?date=${date_only_number}`;
                response.redirect(redirect_location);
            });
    },

    confirm_process: function (request, response) {
        var post = request.body;
        var id = post.id;
        var date_only_number = post.date;


        db.query(`SELECT * from day` + date_only_number,
            function (error, results) {
                if (error) {
                    throw error;
                }

                var nicetime = nicetime_calculate(results);
                var body2 = template.showConfirmDBTable(results, date_only_number);
                var html = template.HTML('', body2);

                db.query(`UPDATE totalrecodes SET nicetime=? WHERE daykey=?`, [nicetime, date_only_number],
                    function (error2, result2) {
                        if (error2) {
                            throw error2;
                        }

                    });

                for (__category in categorys) {
                    var category_time = category_time_calculate(categorys[__category], results);
                    db.query(`INSERT INTO ` + categorys[__category] + `(daykey, nicetime) VALUES(?, ?)`, [date_only_number, category_time],
                        function (error2, result2) {
                            if (error2) {
                                throw error2;
                            }
                        });
                }
                response.send(html);
            });
    },

    selectSleepTime: function (request, response, queryData) {

        var body = '';
        var title = '';
        var body = template.selectSleepTime(queryData.date);
        var html = template.HTML(title, body);
        response.send(html);

    },

    maketable_process: function (request, response) {
        console.log('maketable_process / topic in');
        var post = request.body;
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
                )`, function (error2, result2) {
            if (error2) {
                throw error2;
            }
            var temp_querystr = 'INSERT INTO day' + date_only_number;
            db.query(temp_querystr + ` (category, doing, starth, startm, endh, endm, consume, except_check) VALUES(?,?,?,?,?,?,?,?)`, ['sleep', '수면', String(post.starth), String(post.startm), String(post.endh), String(post.endm), String(puttime_consume_calculation(post.starth, post.startm, post.endh, post.endm)), 'except'],
                function (error3, result3) {
                    if (error3) {
                        throw error3;
                    }

                });

            db.query('INSERT INTO totalrecodes' + ` (daykey, year, month, day, sleepstart, sleepend, sleep) VALUES(?,?,?,?,?,?,?)`, [String(date_only_number), date_only_number[0] + date_only_number[1], date_only_number[2] + date_only_number[3], date_only_number[4] + date_only_number[5], conpensate_zero_at_times(post.starth) + ':' + conpensate_zero_at_times(post.startm), conpensate_zero_at_times(post.endh) + ':' + conpensate_zero_at_times(post.endm), String(puttime_consume_calculation(post.starth, post.startm, post.endh, post.endm))],
                function (error3, result3) {
                    if (error3) {
                        throw error3;
                    }
                    response.redirect(`/showNupdatetable?date=${date_only_number}`);
                });
        });
    },

    category_process: function (request, response, categoryValue) {
        var title = '';
        title += alarm_debug_mode();
        db.query(`SELECT * FROM ` + categoryValue, function (error, results) {
            if (error) {
                throw error;
            }
            else {
                var body = template.ShowCategory(categoryValue, results, categoryValue);
                var html = template.HTML(title, body);
                response.send(html);
            }
        });
    },

    QSadd_process: function(req, res) {
        var post = req.body;
        console.log("post : ", post)
        db.query(`INSERT INTO quickSelect (doing, category, except_check) VALUES (?,?,?)`, [post.doing, post.category, post.except_check],
            function(err, result) {
                if(err) {
                    throw err;
                }
                else {
                    res.redirect(`/showNupdatetable?date=${post.date}`);
                }
            });
    },

}
