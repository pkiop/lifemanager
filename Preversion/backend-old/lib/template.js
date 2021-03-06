var fs = require('fs');
var moment = require('moment');
var settings = require('../settings');

var categorys = settings.categorys;


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

minute_to_HM = function(minuteValue) {
    var H = parseInt(minuteValue/60);
    var M = minuteValue%60;
    if(H < 10) {
        H = '0' + H;
    }
    if(M < 10) {
        M = '0' + M;
    }
     
    return String(H) + ':' + String(M);
}

category_options = function(selected_category) {
    ret = '';
    for(var i in settings.categorys) {
        console.log()
        if(selected_category == settings.categorys[i]) {
            console.log("selected");
            ret += `<option value="${settings.categorys[i]}" selected>${settings.categorys_korean[i]}</option>`;
        }
        else {
            ret += `<option value="${settings.categorys[i]}">${settings.categorys_korean[i]}</option>`;
        }
    }
    return ret;
}

module.exports = {
    HTML:function(title, body) {
        return `
        <!doctype html>
        <html>
            <head>
                <title>life manager</title>
                <meta charset="utf-8">

                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">

                <script type="text/javascript"> 
                    function numkeyCheck(e) { 
                        var keyValue = event.keyCode; 
                        if( ((keyValue >= 48) && (keyValue <= 57)) ) 
                            return true; 
                        else 
                            return false; 
                    } 
                

                    function printClock() {
                        var clock = document.getElementById("clock");            // 출력할 장소 선택
                        var auto_time = document.getElementById('auto_time');
                        var now_consume_time = document.getElementById("sum_nicetime");
                        var not_comp_endh = document.getElementById("not_comp_endh");

                        //https://gitbrent.github.io/bootstrap4-toggle/ toggleswitch API reference

                        var currentDate = new Date();                                     // 현재시간
                        var calendar = currentDate.getFullYear() + "-" + (currentDate.getMonth()+1) + "-" + currentDate.getDate() // 현재 날짜
                        var currentHours = addZeros(currentDate.getHours(),2); 
                        var currentMinute = addZeros(currentDate.getMinutes() ,2);
                        var currentSeconds =  addZeros(currentDate.getSeconds(),2);
                        var onetime = true;
                        if(currentHours >= 24){ 
                            currentHours = 0;
                        }
                    
                        if(currentSeconds >= 50){// 50초 이상일 때 색을 변환해 준다.
                           currentSeconds = '<span style="color:#de1951;">'+currentSeconds+'</span>'
                        }

                        clock.innerHTML = currentHours+":"+currentMinute+":"+currentSeconds ; //날짜를 출력해 줌

                        setTimeout("printClock()",1000);         // 1초마다 printClock() 함수 호출
                        if(auto_time != undefined){
                            if(auto_time.checked == true) {
                                setNowtime();
                                if(not_comp_endh != undefined) {
                                    setNotcomptime();
                                }
                            }
                        }
                        if(now_consume_time != undefined) {
                            make_percent();
                        }
                    }

                    function setNowtime() {
                        var now_time_h = document.getElementById("now_time_h");
                        var now_time_m = document.getElementById("now_time_m");
                        var currentDate = new Date();                                     // 현재시간
                        var calendar = currentDate.getFullYear() + "-" + (currentDate.getMonth()+1) + "-" + currentDate.getDate() // 현재 날짜
                        var currentHours = currentDate.getHours(); 
                        var currentMinute = currentDate.getMinutes();
                        var currentSeconds =  currentDate.getSeconds();
                        
                        if(currentHours >= 24){ 
                            currentHours = 0;
                        }
                    
                        nowtimeh = currentHours;
                        nowtimem = currentMinute;
                        //40초 이상이면 min 반올림
                        if(Number(currentSeconds) >= 40) {
                            nowtimem = Number(nowtimem) + 1;
                        }
                        if(Number(nowtimem) >= 60) {
                            nowtimem = 0;
                            nowtimeh = Number(nowtimeh) + 1;
                        }
                        if(Number(nowtimeh) >= 24) {
                            nowtimeh = 0;
                        }
                        now_time_h.value = nowtimeh; 
                        now_time_m.value = nowtimem;           
                    }

                    function setNotcomptime() {
                        var now_time_h = document.getElementById("not_comp_endh");
                        var now_time_m = document.getElementById("not_comp_endm");
                        
                        var currentDate = new Date();                                     // 현재시간
                        var calendar = currentDate.getFullYear() + "-" + (currentDate.getMonth()+1) + "-" + currentDate.getDate() // 현재 날짜
                        var currentHours = currentDate.getHours(); 
                        var currentMinute = currentDate.getMinutes();
                        var currentSeconds =  currentDate.getSeconds();
                        
                        if(currentHours >= 24){ 
                            currentHours = 0;
                        }
                    
                        nowtimeh = currentHours;
                        nowtimem = currentMinute;
                        //20초 이하면 max 내림
                        if(Number(currentSeconds) <= 20) {
                            nowtimem = Number(nowtimem) - 1;
                        }
                        if(Number(nowtimem) < 0) {
                            nowtimem = 59;
                            nowtimeh = Number(nowtimeh) - 1;
                        }
                        if(Number(nowtimeh) < 0) {
                            nowtimeh = 23;
                        }
                        now_time_h.value = nowtimeh; 
                        now_time_m.value = nowtimem;     
                    }
                    
                    function addZeros(num, digit) { // 자릿수 맞춰주기
                          var zero = '';
                          num = num.toString();
                          if (num.length < digit) {
                            for (i = 0; i < digit - num.length; i++) {
                              zero += '0';
                            }
                          }
                          return zero + num;
                    }
                    
                    function make_percent() {
                        var now_consume_time = document.getElementById("sum_nicetime");
                        var now_not_complete = document.getElementById("NCBCSH");
                        var now_not_complete_m = document.getElementById("NCBCSM");
                        var ret = 0;
                        if(now_not_complete == undefined) {
                            ret = (Number(now_consume_time.value) / 240 * 100);
                        }
                        else {
                            var sth = now_not_complete.value;
                            var stm = now_not_complete_m.value;

                            var currentDate = new Date();
                            stm = currentDate.getMinutes() - stm;
                            if(sth > currentDate.getHours()) {
                                sth -= 24;
                            }
                            sth = currentDate.getHours() - sth;
                            ret = sth * 60 + stm + Number(now_consume_time.value);
                            
                            ret += currentDate.getSeconds() / 60;
                            ret = ((ret / 240) * 100);

                        }
                        print_sumnicetime.innerHTML = ret.toFixed(2) + '%' ; //날짜를 출력해 줌

                    }

                    function not_comp_check_before_submit() {
                        var now_time_h = document.getElementById("not_comp_endh");
                        if(now_time_h != undefined) {
                            alert('진행중인 것이 있습니다');
                            return false;
                        }
                        else {
                            return true;
                        }
                    
                    }
 
                </script>
                <style>
                    th {
                        text-align: center;
                    }
                    td.pkiop_SNU_select {
                        width: 100px;
                    }
                    td.pkiop_SNU_UDbutton {
                        width: 90px;
                    }
                    td.pkiop_SNU_doing {
                        width: auto;
                    }
                    td.pkiop_SNU_time_st {
                        width: 70px;
                    }
                    td.pkiop_SNU_time_et {
                        width: 70px;
                    }
                    h2, h3 {
                        text-align: center;
                    }
                    th.temp_padding, td.temp_padding {
                        padding:6px;
                    }
                    A:LINK {dext-decoration: none; color: #fff;}
                    A:VISITED {dext-decoration: none; color: #fff;}
                </style>
                <!--
                
                A:VISITED {dext-decoration: none; color: #646464;}
                A:ACTIVE {dext-decoration: none; color: #646464;}
                A:HOVER {dext-decoration: none; color: #646464;}
                -->
            </head>
            <body>
                



                <nav class="navbar navbar-dark" style="background-color:#2e4b73">
                    <a href="/"><img src="/logo.png" class="rounded-circle d-block" width="45px" height="45px"></a>
                    <body onload="printClock();">
	                    <div style="width:145px; height:50px; line-height:50px; color:#fff;font-size:20px; text-align:center;" id="clock"></div>
                    </body>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                            <li class="nav-item"><a class="nav-link" href="/selecttable">Table 선택</a></li>
                            <li class="nav-item"><a class="nav-link" href="/todaytable_process">오늘 Table 바로가기</a></li>
                            <li class="nav-item"><a class="nav-link" href="/showtotalrecodes">전체 기록보기</a></li>
                            <li class="nav-item"><a class="nav-link" href="/intervalrecodes">일정기간 기록보기</a></li>
                            <li class="nav-item"><a class="nav-link" href="/showcategory">카테고리별 기록보기</a></li>
                        </ul>
                    </div>
                </nav>
                <div class="container">
                    <p>
                    <h2> ${title} </h2>
                </div>
                <div>
                    <p>
                    <a href="">Login With Google</a>
                    ${body}
                </div>

                
                <script src='//unpkg.com/jquery@3/dist/jquery.min.js'></script>
                <link href="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/css/bootstrap4-toggle.min.css" rel="stylesheet">
                <script src="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/js/bootstrap4-toggle.min.js"></script>
               <!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>-->
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
            </body>
        </html>
        `;
    },


    puttime:function(date, QSdata, QSid = undefined) {
        var nowtimeh = moment().format("H");
        var nowtimem = moment().format("mm");
        var sec = moment().format("ss");
        console.log("in puttime consolelog :: date :: ", date)

        //40초 이상이면 min 반올림
        if(Number(sec) >= 40) {
            nowtimem = Number(nowtimem) + 1;
        }
        if(Number(nowtimem) >= 60) {
            nowtimem = 0;
            nowtimeh = Number(nowtimeh) + 1;
        }
        if(Number(nowtimeh) >= 24) {
            nowtimeh = 0;
        }

        var in_doing = '';
        var in_category = 'etc';
        var in_except_check = `
            <option value="except_no">활용</option>

            <option value="except">제외</option>
        `;
        if(QSid !== undefined ) {
            in_doing = QSdata[QSid]['doing'];
            in_category = QSdata[QSid]['category'];
            if(QSdata[QSid]['except_check'] === 'except') {
                in_except_check = `
                <option value="except">제외</option>
                <option value="except_no">활용</option>
           `;
            };
        }
        
        return `
                    ${this.modal_excepted_uploded(date, QSdata)}
                    <div>
                        <table class="table table-sm table-borderless">
                        <form action="/puttime_process" method="post" onSubmit="return not_comp_check_before_submit()">
                            <tr>
                                <td colspan="7" class="table-info">
                                    <h4 style="text-align:center">Put Your Recode</h4>
                                </td>
                            </tr>   
                            <!--
                            ****************
                            *   1번째 ROW  *
                            ****************
                            -->
                            <tr>
                                <td colspan="6">
                                    <div class="input-group">
                                        <textarea class="form-control" rows="1" name="doing" placeholder="description">${in_doing}</textarea>
                                    </div>
                                </td>
                                <td colspan="1" class="pkiop_SNU_UDbutton" >
                                    <div class="form-check form-check-inline">
                                        <input id="auto_time" type="checkbox" checked data-toggle="toggle" onclick="auto_time();" data-on="AUTO" data-off="OFF" >
                                    </div>
                                </td> 
                            </tr>
                            <!--
                            ****************
                            *   2번째 ROW  *
                            ****************
                            -->
                            <tr>
                                <td colspan="1" class="pkiop_SNU_time_st">
                                    <div>
                                        <input id="now_time_h" type="number" class="form-control" maxlength="2" max="23" min="0" onKeyPress="return numkeyCheck(event)" name="starth" value="${nowtimeh}">
                                    </div>
                                </td>
                                <td colspan="1" class="pkiop_SNU_time_st">
                                    <div>
                                        <input id="now_time_m" type="number" class="form-control" maxlength="2" max="59" min="0" onKeyPress="return numkeyCheck(event)" name="startm" value="${nowtimem}">
                                    </div>
                                </td>
                                <td colspan="1" class="pkiop_SNU_select">
                                    <div class="input-group">
                                        <select class="custom-select" name="category">
                                            ${category_options(in_category)}
                                        </select>
                                    </div>
                                </td>
                                <td colspan="3"></td>
                                <td colspan="1" class="pkiop_SNU_UDbutton"></td>
                                
                            </tr>
                            <!--
                            ****************
                            *   3번째 ROW  *
                            ****************
                            -->
                            <tr>
                                <td colspan="1" class="pkiop_SNU_time_st>
                                    <div class="input-group">
                                        <input type="number" class="form-control" maxlength="2" max="23" min="-1" onKeyPress="return numkeyCheck(event)" name="endh" value="-1">
                                    </div>
                                </td>
                                <td colspan="1" class="pkiop_SNU_time_st>
                                    <div class="input-group">
                                        <input type="number" class="form-control" maxlength="2" max="59" min="-1" onKeyPress="return numkeyCheck(event)" name="endm" value="-1">
                                    </div>
                                </td>
                                <td colspan="1" class="pkiop_SNU_select>
                                    <div class="input-group">
                                        <select class="custom-select" name="except_check">
                                            ${in_except_check}
                                        </select>       
                                    </div>
                                </td>
                                <td colspan="3"></td>
                                <td colspan="1" class="pkiop_SNU_UDbutton">
                                    <div>
                                        <input class="btn btn-success" type="submit" value="Submit">
                                    </div>
                                </td>
                            </tr>
                        <input type="hidden" name="date" value="${date}">     
                    </div>

                    </form>
                    </table>
                </div>
                `
    },

    selecttable:function(msg) {
        var nowdate = moment().format("YYYY-MM-DD");
        return `
        <h2>날짜 선택</h2>
            <div class="container">
                <form action="/showtable_process" method="post">

                    <div class="row input-group">
                        <div class="col-2 col-sm-3 col-md-4">
                        </div>
                        <div class="col-8 col-sm-6 col-md-4">
                            <input style="text-align:center;" type="date" style="width:100px;" class="form-control" name="date" value=${nowdate}>
                        </div>
                            <div class="col-2 col-sm-3 col-md-4">
                        </div>
                    </div>
                    <div><hr></hr></div>
                    <div class="row input-group">
                        <div class="col-3 col-md-5"></div>
                            <div class="col-6 col-md-2">
                                <input class="btn btn-primary btn-block" type="submit">
                            </div>
                        <div class="col-3 col-md-5"></div>
                    </div>
                </form>
            </div>
    
        `
    },

    select_interval:function() {
        var nowdate = moment().format("YYYY-MM-DD");
        return `
        <h2>날짜 선택</h2>
            <div class="container">
                <form action="/interval_process" method="post">
                    <div class="row">
                        <div class="col-6">
                            <input style="text-align:center;" type="date" style="width:100px;" class="form-control" name="Sdate" value=${nowdate}>
                        </div>
                        <div class="col-6">
                            <input style="text-align:center;" type="date" style="width:100px;" class="form-control" name="Edate" value=${nowdate}>
                        </div>
                        <div class="col">
                            <input class="btn btn-primary btn-block" type="submit">
                        </div>
                    </div>
                </form>
            </div>
    
        `
    },

    showIntervalrecodesTable:function(inputs){
        return this.showTotalrecodesTable(inputs);
/*
        var tag = `<h2>기록보기 </h2>`
        tag += `<div class="container"><table class="table">
        <thead>
            <th class="temp_padding">날짜</th>
            <th class="temp_padding">SS</th>
            <th class="temp_padding">SE</th>
            <th class="temp_padding">잠</th>
            <th class="temp_padding">굿탐</th>
            <th class="temp_padding">활용률</th>
        </thead>
        <tbody>

        `;
        var chart_label = []
        var i = 0;
        while(i < inputs.length) {
            chart_label.push([inputs[i].daykey, inputs[i].nicetime]);
            var not_comp_bg_color = '';
            console.log(i, " : nicetime is ", inputs[i].nicetime);
            if(inputs[i].nicetime == null) {
                not_comp_bg_color = `style="background-color:#eedbcd;"`
            }
            var nicetime_string = '';
            if(inputs[i].nicetime == null) {
                nicetime_string = '입력중';   
            }
            else {
                nicetime_string = minute_to_HM(inputs[i].nicetime)   
            }
          tag += `
          
          <tr ${not_comp_bg_color}>
            <td class="temp_padding" style="text-align:center; background-color:#999" ><a href="/showNupdatetable?date=${inputs[i].daykey}">${inputs[i].daykey}</a></td>
            <td class="temp_padding" style="text-align:center;">${inputs[i].sleepstart} </td>
            <td class="temp_padding" style="text-align:center;">${inputs[i].sleepend}   </td>
            <td class="temp_padding" style="text-align:center;">${minute_to_HM(inputs[i].sleep)}</td>
            <td class="temp_padding" style="text-align:center;">${nicetime_string}</td>
            <td class="temp_padding" style="text-align:center;">${(inputs[i].nicetime / 240 * 100).toFixed(2)}%</td>
          </tr>
          `
          i++;
        }
        tag += '</tbody></table></div>';

        make_label_html = '';
        make_dataset_html = '';
        for (i in chart_label) {
            make_label_html += '"' + chart_label[i][0];
            make_dataset_html += String(chart_label[i][1]);
            
            if(i == chart_label.length - 1){
                make_label_html += '"';
                break;
            }
            make_label_html += '",';
            make_dataset_html += ',';
        }
        tag += `
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.1.6/Chart.bundle.min.js"></script>
            <div class="container">
                <canvas id="myChart" width="100" height="50"></canvas>
            </div>
            <script>
                var ctx = document.getElementById("myChart");
                var myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: [${make_label_html}],
                        datasets: [{
                            label: '굿탐',
                            data: [${make_dataset_html}],
                            backgroundColor: [
                                'rgba(198, 228, 234, 0.5)',
                            ]

                        }]
                    }
                });
            </script>
        
        
        `

        return tag;
        */
    },

    showDBTable:function(inputs, date){
        console.log("showDBTable in template is called");
        var tag = `
            <div class="col align-self-center">
                <h2>${date} recode </h2>
            </div>`
        tag += `
        <div>
            <table class="table table-sm table-borderless">
        
        
        `;
        //<th scope="col">#</th><th scope="col">Doing / UseT</th>
        /*
        <thead>
            <tr>
                <th scope="col">SH / EH</th>
                <th scope="col">SM / EM</th>
                <th scope="col">Category / Except</th>
                <th scope="col">Update / Delete</th>
            </tr>
          </thead>
        
        */
       console.log(inputs);
        var i = inputs.length - 1;
        var sum_nicetime = 0;
        while(i >= 0) {
            if(inputs[i].except_check == 'except_no'){
                console.log("id : ", inputs[i].id, " 입력중");
                sum_nicetime += Number(inputs[i].consume);
            }
            var checkbox_value = '';
            var except_check_select = [];
            var category_select = [];
            if(inputs[i].except_check === 'except_no') {
                except_check_select[0] = 'selected';
            } else if(inputs[i].except_check === 'except') {
                except_check_select[1] = 'selected';
            }
            console.log("input : ",inputs[i].category);
            var category_options_string = category_options(inputs[i].category);
            
            var not_comp_bg_color = '';
            var not_comp_bg_color_st_h = '';
            var not_comp_bg_color_st_m = '';
            var not_comp_endh = '';
            var not_comp_endm = '';
            var sel_endh = inputs[i].endh;
            var sel_endm = inputs[i].endm;

            if(inputs[i].endh == -1) {
                not_comp_bg_color = `style="background-color:#eedbcd;"`
                if(inputs[i].except_check == 'except_no') {
                    not_comp_bg_color_st_h = `id="NCBCSH"`;
                    not_comp_bg_color_st_m = `id="NCBCSM"`;
                }
            }
            if(inputs[i].endh == -1) {
                sel_endh = moment().format("H");
                not_comp_endh = `id="not_comp_endh"`
                not_comp_endm = `id="not_comp_endm"`
            }
            if(inputs[i].endm == -1) {
                var sec = moment().format("ss");
                sel_endm = moment().format("mm");
                if(Number(sec) <= 20) {
                    sel_endm = Number(sel_endm) - 1;
                }
                if(Number(sel_endm) < 0) {
                    sel_endm = 59;
                    sel_endh = Number(sel_endh) - 1;
                }
                if(Number(sel_endh) < 0) {
                    sel_endh = 23;
                }
            }
            
          tag += `
          
          <tr>
            <td style="text-align:center" class="table-info pkiop_SNU_doing" colspan="7">
                <div>${i+1}</div>
            </td>
          </tr>
          <!--
          ****************
          *   1번째 ROW  *
          ****************
          -->
          
          <tr ${not_comp_bg_color}>
            <form action="/update_process" method="post">
                <td colspan="6">
                `
                if(inputs[i].id == 1){
                tag+=`
                    <div class="input-group">
                        <textarea style="text-align:center;" readonly class="form-control pkiop_SNU_doing" rows="1" name="doing">${inputs[i].doing}</textarea>
                        
                    </div>
                    `
                }
                else {
                    tag+=`
                    <div class="input-group">
                        <textarea style="text-align:center;" class="form-control pkiop_SNU_doing" rows="1" name="doing">${inputs[i].doing}</textarea>
                    </div>
                    `
                }
                tag+=`
                </td>
                
                <td class="pkiop_SNU_UDbutton" colspan="1">
                    <div class="input-group">
                        <input style="text-align:center;" readonly class="form-control" style="width:50px;" name="consume" value="${minute_to_HM(Number(puttime_consume_calculation(inputs[i].starth, inputs[i].startm, inputs[i].endh, inputs[i].endm)))}">
                    </div>
                </td>
            </tr>


            <!-- 
            ****************
            *   2번째 ROW  *
            ****************
            -->
            <tr ${not_comp_bg_color}>
                <td class="pkiop_SNU_time_st" colspan="1">
                    <div>
                        <input ${not_comp_bg_color_st_h} style="text-align:center;" type="number" class="form-control" maxlength="2" max="23" min="0" onKeyPress="return numkeyCheck(event)" name="starth" value="${inputs[i].starth}">
                    </div>
                </td>
                <td class="pkiop_SNU_time_et" colspan="1">
                    <div>
                        <input ${not_comp_bg_color_st_m} style="text-align:center;" type="number" class="form-control" maxlength="2" max="59" min="0" onKeyPress="return numkeyCheck(event)" name="startm" value="${inputs[i].startm}">
                    </div>
                </td>
            `
            if(inputs[i].id == 1) {
            tag += `
                <td class="pkiop_SNU_select" colspan="1">
                    <div class="input-group">
                        <select class="custom-select" disabled name="category" value="sleep">
                            <option value="sleep" selected>수면</option>
                        </select>
                        <input name="category" type="hidden"  value="sleep"/>
                    </div>
                </td>
                `
            }
            else {
                tag += `
                <td class="pkiop_SNU_select" colspan="1">
                    <div class="input-group">
                        <select class="custom-select" name="category" value="${inputs[i].category}">
                            ${category_options_string}
                        </select>
                    </div>
                </td>
                `
            }
            tag += `
                <td colspan="3"></td>
                <td class="pkiop_SNU_UDbutton" colspan="1">
                    <input type="hidden" name="id" value="${inputs[i].id}">
                    <input type="hidden" name="date" value="${date}">
                    <input class="btn btn-success btn-block" type="submit" value="Update">
                </td>
                
                
            </tr>
            <!--
            ****************
            *   3번째 ROW  *
            ****************
            -->
            <tr ${not_comp_bg_color}>          
                <td class="pkiop_SNU_time_st" >
                    <div class="input-group">
                        <input ${not_comp_endh} style="text-align:center;" type="number" class="form-control"  maxlength="2" max="23" min="0" onKeyPress="return numkeyCheck(event)" name="endh" value="${sel_endh}">
                    </div>
                </td>
                <td class="pkiop_SNU_time_et" >
                    <div class="input-group">
                       <input ${not_comp_endm} style="text-align:center;" type="number" class="form-control"  maxlength="2" max="59" min="0" onKeyPress="return numkeyCheck(event)" name="endm" value="${sel_endm}">
                    </div>
                </td>
            `
            if(inputs[i].id == 1) {
                tag+= `
                <td class="pkiop_SNU_select">
                    <div class="input-group">
                        <select class="custom-select" disabled name="except_check">
                            <option value="except" selected>제외</option>
                        </select>
                        <input name="except_check" type="hidden"  value="except_no"/>
                    </div>
                </td>
                `
            }
            else {
                tag+= `
                <td class="pkiop_SNU_select">
                    <div class="input-group">
                        <select class="custom-select" name="except_check">
                            <option value="except_no" ${except_check_select[0]}>활용</option>
                            <option value="except" ${except_check_select[1]}>제외</option>
                        </select>
                    </div>
                </td>
                `
            }
            
                
            tag += `
                <td colspan="3"></td>
            </form>

                <td class="pkiop_SNU_UDbutton" colspan="1">
                `
            if(inputs[i].id != 1) {
                tag += `
                <form onsubmit="return confirm('삭제하시겠습니까?');" action="/delete_process" method="post">
                    <input type="hidden" name="id" value="${inputs[i].id}">
                    <input type="hidden" name="date" value="${date}">
                    <input class="btn btn-danger btn-block" type="submit" value="Delete">
                </form> `
            }
            tag += `
                </td>
            </tr>
            </div>
          
          
          `
          i--;
        }
        
        tag += `
            <tr>
                <td style="text-align:center" colspan="7">
                    <form action="/confirm_process" method="post">
                        <input type="hidden" name="date" value="${date}">
                        <input class="btn btn-primary" type="submit" value="Confirm">
                    </form>
                </td>
            </tr>
        
        
        </table></div>`;
        console.log("sum_nicetime : ", sum_nicetime);
        tag += `
            <input type="hidden" id="sum_nicetime" value=${sum_nicetime}></input>
            <h2 id="print_sumnicetime">${(sum_nicetime / 240 * 100).toFixed(2)}%</h2>
        `;
        return tag;
    },

    showConfirmDBTable:function(inputs, date){
        var tag = `<h2>Confirm ${date} table </h2>`
        tag += `<div><table class="table">
            <thead>
                <th>CG</th>
                <th>DO</th>
                <th>SS</th>
                <th>SE</th>
                <th>NT</th>
                <th>EX</th>
            </thead>
        `;
        var i = 0;
        while(i < inputs.length) {

          tag += `
          <tr>
            <td>
                ${inputs[i].category}
            </td>
            <td>
                ${inputs[i].doing}
            </td>
            <td>
                ${inputs[i].starth}:${inputs[i].startm}
            </td>
            <td>
                ${inputs[i].endh}:${inputs[i].endm}
            </td>
            <td>
                ${inputs[i].consume}
            </td>
            <td>
                ${inputs[i].except_check}
            </td>
          </tr>
          
          `
          i++;
        }
        tag += `
        <tr>
            <td colspan="6">
                <a class="btn btn-dark" href="/">처음으로</a>
            </td>
        </tr>
        
        </table></div>`;

        return tag;
    },
    
    DB_data_select_graph(inputs, valueName) {
        var chart_label = []
        var i = 0;
        var tag = '';
        while(i < inputs.length) {
            console.log(inputs[i]);
            chart_label.push([inputs[i].daykey, inputs[i][String(valueName)]]);
            
          i++;
        }
        tag += '</tbody></table></div>';

        make_label_html = '';
        make_dataset_html = '';
        for (i in chart_label) {
            make_label_html += '"' + chart_label[i][0];
            make_dataset_html += String(chart_label[i][1] / 60);
            
            if(i == chart_label.length - 1){
                make_label_html += '"';
                break;
            }
            make_label_html += '",';
            make_dataset_html += ',';
        }
        tag += `
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.1.6/Chart.bundle.min.js"></script>
            <div class="container">
                <canvas id="${valueName}Chart" width="100" height="50"></canvas>
            </div>
            <script>
                var ctx = document.getElementById("${valueName}Chart");
                var myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: [${make_label_html}],
                        datasets: [{
                            label: '굿탐',
                            data: [${make_dataset_html}],
                            backgroundColor: [
                                'rgba(198, 228, 234, 0.5)',
                            ]

                        }]
                    }
                });
            </script>
        `
        return tag;
    },

    showTotalrecodesTable:function(inputs){
        var tag = `<h2>기록보기 </h2>`
        tag += `<div class="container"><table class="table">
        <thead>
            <th class="temp_padding">날짜</th>
            <th class="temp_padding">SS</th>
            <th class="temp_padding">SE</th>
            <th class="temp_padding">잠</th>
            <th class="temp_padding">굿탐</th>
            <th class="temp_padding">활용률</th>
        </thead>
        <tbody>
        `;
        var i = 0;
        while(i < inputs.length) {
            var not_comp_bg_color = '';
            if(inputs[i].nicetime == null) {
                not_comp_bg_color = `style="background-color:#eedbcd;"`
            }
            var nicetime_string = '';
            if(inputs[i].nicetime == null) {
                nicetime_string = '입력중';   
            }
            else {
                nicetime_string = minute_to_HM(inputs[i].nicetime)   
            }
          tag += `
          
          <tr ${not_comp_bg_color}>
            <td class="temp_padding" style="text-align:center; background-color:#999" ><a href="/showNupdatetable?date=${inputs[i].daykey}">${inputs[i].daykey}</a></td>
            <td class="temp_padding" style="text-align:center;">${inputs[i].sleepstart} </td>
            <td class="temp_padding" style="text-align:center;">${inputs[i].sleepend}   </td>
            <td class="temp_padding" style="text-align:center;">${minute_to_HM(inputs[i].sleep)}</td>
            <td class="temp_padding" style="text-align:center;">${nicetime_string}</td>
            <td class="temp_padding" style="text-align:center;">${(inputs[i].nicetime / 240 * 100).toFixed(2)}%</td>
          </tr>
          `
          i++;
        }
        tag += '</tbody></table></div>';
        
        tag += this.DB_data_select_graph(inputs, 'nicetime');
        tag += this.DB_data_select_graph(inputs, 'sleep');
        return tag;
    },

    selectSleepTime:function(date) {
        var nowtimeh = moment().format("H");
        var nowtimem = moment().format("mm");
        return `
            <div>
                    <form action="/maketable_process" method="post">
                        <h3> sleep time </h3>
                        <div class="container">
                        <table class="table">

                        <tr>
                            <td> 
                                <div class="input-group">
                                    <input type="number" class="form-control" maxlength="2" max="23" min="0" onKeyPress="return numkeyCheck(event)" name="starth" value="23">
                                </div>
                            </td>
                            <td>
                                <div class="input-group">
                                    <input type="number" class="form-control" maxlength="2" max="59" min="0" onKeyPress="return numkeyCheck(event)" name="startm" value="0">
                                </div>
                            </td>
                            <td>
                                :
                            </td>
                            <td>
                                <div class="input-group">
                                    <input type="number" class="form-control" maxlength="2" max="23" min="0" onKeyPress="return numkeyCheck(event)" name="endh" value="${Number(nowtimeh)}">
                                </div>
                            </td>
                            <td>
                                <div class="input-group">
                                    <input type="number" class="form-control" maxlength="2" max="59" min="0" onKeyPress="return numkeyCheck(event)" name="endm" value="${Number(nowtimem)}">
                                </div>
                            </td>
                        </tr>
                        </table>
                        </div>
                        <div class="container">
                            <div class="row">
                                <div class="col-3 col-md-5"></div>
                                    <div class="col-6 col-md-2">
                                        <input type="hidden" name="date" value="${date}">
                                        <input class="btn btn-primary btn-block" type="submit" value="Submit">    
                                    </div>
                                <div class="col-3 col-md-5"></div>
                            </div>
                        </div>

                            
                            
                            

                            
                    </form>
                
            </div>
        `
    },

    CategoryList:function(categoryValue) {

        var body = '<ul class="list-group">';
        for(var i in categorys) {
            if(categoryValue === categorys[i]){
                body += `<li class="list-group-item active" ><a style="color: white;" href="/category_process?categoryValue=${categorys[i]}">${categorys[i]}</a></li>`;
            }
            else {
                body += `<li class="list-group-item"><a style="color:#999;" href="/category_process?categoryValue=${categorys[i]}">${categorys[i]}</a></li>`;
            }
        }
        body += '</ul>';
        return body;
    },

    ShowCategory:function(title, results, categoryValue) {
        var body = '';
        body += this.CategoryList(categoryValue);
        body += `<table class="table">
            <tr>
                <td colspan="2">
                    <h2>${categoryValue}</h2>
                </td>
            <tr>
        `
        for(var i in results) {
            body += '<tr>';
            body += `<td style="text-align:center; background-color:#999"><a href="/showNupdatetable?date=${results[i].daykey}">${results[i].daykey}</a></td>`
            body += '<td>';
            if(results[i].nicetime === 0) {
                body += 'None'
            }
            else {
                body += minute_to_HM(results[i].nicetime);
            }
            body += '</td>';
            body += '</tr>'
        }
        body += '</table>'; 
        return body;
    },

    modal_excepted_uploded:function(date, quickSelectData) {
        console.log("in modal_expected_uploded :: date :: ", date);
        var body = '';
        body += `
        <div class="container">
            <!-- Trigger the modal with a button -->
            <div class="p-3">
                <button type="button" style="width:100%; padding:10px;" class="btn btn-info" data-toggle="modal" data-target="#myModal">QS</button>
            </div>
            <!-- Modal -->
            <div class="modal fade" id="myModal" role="dialog">
                <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <!-- <h4 class="modal-title">Modal Header</h4> -->
                    </div>
                    <div class="modal-body">
                        <p>quickSelect</p>
                    </div>
        `;
        body += `<table class="table-bordered">
        `
        for(var x in quickSelectData) {
            console.log('x is :', x);
                body += `
                <form action="/showNupdatetable" method="get">
                <tr>
                        <input type="hidden" name="date" value="${date}">
            `
            for(var y in quickSelectData[x]) {
                if(y === 'id') {
                    body += `<input type="hidden" name="QuickSelectDBid" value="${x}">`
                }
                else if (y === 'doing') {
                    body += `<td>${quickSelectData[x][y]}</td>`;
                }
                else {
                    //nothing
                }
            }
            body += `
                    <td>
                        <input class="btn btn-success" type="submit" value="Submit">
                    </td>
                </tr>
                </form>
            `;
        }
        body += `
        </table>
        <form action="/QSadd_process" method="post">
            <input type="hidden" name="date" value="${date}"></input>
            <table>
                <tr>
                    <td colspan="3">
                        <div class="input-group">
                            <textarea class="form-control" rows="1" name="doing" placeholder="qsdoing"></textarea>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="input-group">
                            <select class="custom-select" name="category">
                                ${category_options('etc')}
                            </select>
                        </div>
                    </td>
                    <td>
                        <div class="input-group">
                            <div class="input-group">
                                <select class="custom-select" name="except_check">
                                    <option value="except_no">활용</option>
                                    <option value="except">제외</option>
                                </select>       
                            </div>
                        </div>
                    </td>
                    <td><input class="btn btn-success" type="submit" value="Submit"></input></td>
                </tr>
            </table>
        </form>
    

        
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        `
        return body;
    }
    
}