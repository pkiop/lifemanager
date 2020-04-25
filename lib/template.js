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
     
    return String(H) + ' : ' + String(M);
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
                </style>
            </head>
            <body>
                <nav class="navbar bg-primary navbar-dark">
                    <a class="navbar-brand" href="/">Life Manager</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                            <li class="nav-item"><a class="nav-link" href="/selecttable">Table 선택</a></li>
                            <li class="nav-item"><a class="nav-link" href="/todaytable_process">오늘 Table 바로가기</a></li>
                            <li class="nav-item"><a class="nav-link" href="/showtotalrecodes">기록보기</a></li>
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
                    ${body}
                </div>

            

                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
            </body>
        </html>
        `;
    },

    puttime:function(date) {
        var nowtimeh = moment().format("H");
        var nowtimem = moment().format("mm");
        return `
                    
                    <div>
                        <table class="table table-sm table-borderless">
                        <form action="/puttime_process" method="post">
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
                                        <textarea class="form-control" rows="1" name="doing" placeholder="description"></textarea>
                                    </div>
                                </td>
                                <td colspan="1" class="pkiop_SNU_UDbutton"></td>   
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
                                        <input type="number" class="form-control" maxlength="2" max="23" min="0" onKeyPress="return numkeyCheck(event)" name="starth" value="${nowtimeh}">
                                    </div>
                                </td>
                                <td colspan="1" class="pkiop_SNU_time_st">
                                    <div>
                                        <input type="number" class="form-control" maxlength="2" max="59" min="0" onKeyPress="return numkeyCheck(event)" name="startm" value="${nowtimem}">
                                    </div>
                                </td>
                                <td colspan="1" class="pkiop_SNU_select">
                                    <div class="input-group">
                                        <select class="custom-select" name="category">
                                            <option value="etc">기타</option>
                                            <option value="develop">개발</option>
                                            <option value="study">공부</option>
                                            <option value="book_reading">책</option>
                                            <option value="exercise">운동</option>
                                            <option value="work">회사</option>
                                            <option value="english">영어</option>
                                            <option value="chinese">중국어</option>
                                            <option value="work">낮잠</option>
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
                                        <input type="number" class="form-control" maxlength="2" max="23" min="-1" onKeyPress="return numkeyCheck(event)" name="endh" value="-1" placeholder="not selected">
                                    </div>
                                </td>
                                <td colspan="1" class="pkiop_SNU_time_st>
                                    <div class="input-group">
                                        <input type="number" class="form-control" maxlength="2" max="59" min="-1" onKeyPress="return numkeyCheck(event)" name="endm" value="-1" placeholder="not selected">
                                    </div>
                                </td>
                                <td colspan="1" class="pkiop_SNU_select>
                                    <div class="input-group">
                                        <select class="custom-select" name="except_check">
                                            <option value="except_no">활용</option>
                                            <option value="except">제외</option>
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

        <table class="table table-borderless">
            <form action="/showtable_process" method="post">
                <tr>
                    <td>
                        <div class="input-group">
                            <input type="date" style="width:100px;" class="form-control" name="date" value=${nowdate}>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input class="btn btn-primary" type="submit">
                    </td>
                </tr>
                
                
            </form>
        </table>
    
        `
    },

    showDBTable:function(inputs, date){
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
        var i = 0;
        while(i < inputs.length) {
            var checkbox_value = '';
            var except_check_select = [];
            var category_select = [];
            if(inputs[i].except_check === 'except_no') {
                except_check_select[0] = 'selected';
            } else if(inputs[i].except_check === 'except') {
                except_check_select[1] = 'selected';
            }

            switch(inputs[i].category) {
                case 'etc':
                    category_select[0] = 'selected';
                    break;
                case 'develop':
                    category_select[1] = 'selected';
                    break;
                case 'study':
                    category_select[2] = 'selected';
                    break;
                case 'book_reading':
                    category_select[3] = 'selected';
                    break;
                case 'exercise':
                    category_select[4] = 'selected';
                    break;
                case 'work':
                    category_select[5] = 'selected';
                    break;
                case 'english':
                    category_select[6] = 'selected';
                    break;
                case 'chinese':
                    category_select[7] = 'selected';
                    break;

            }
//                <td>${inputs[i].id}</td>
            var not_comp_bg_color = '';
            var sel_endh = inputs[i].endh;
            var sel_endm = inputs[i].endm;

            if(inputs[i].endh == -1) {
                not_comp_bg_color = `style="background-color:#eedbcd;"`
            }
            if(inputs[i].endh == -1) {
                sel_endh = moment().format("H");
            }
            if(inputs[i].endm == -1) {
                sel_endm = moment().format("H");
            }
            
          tag += `
          
          <tr>
            <td style="text-align:center" class="table-info pkiop_SNU_doing" colspan="7">
                <div>${inputs[i].id}</div>
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
                    <div class="input-group">
                        <textarea style="text-align:center;" class="form-control pkiop_SNU_doing" rows="1" name="doing">${inputs[i].doing}</textarea>
                    </div>
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
                        <input style="text-align:center;" type="number" class="form-control" maxlength="2" max="23" min="0" onKeyPress="return numkeyCheck(event)" name="starth" value="${inputs[i].starth}">
                    </div>
                </td>
                <td class="pkiop_SNU_time_et" colspan="1">
                    <div>
                        <input style="text-align:center;" type="number" class="form-control" maxlength="2" max="59" min="0" onKeyPress="return numkeyCheck(event)" name="startm" value="${inputs[i].startm}">
                    </div>
                </td>
                <td class="pkiop_SNU_select" colspan="1">
                    <div class="input-group">
                        <select class="custom-select" name="category" id="inputGroupSelect01" value="${inputs[i].category}">
                            <option value="etc" ${category_select[0]}>기타</option>
                            <option value="develop" ${category_select[1]}>개발</option>
                            <option value="study" ${category_select[2]}>공부</option>
                            <option value="book_reading" ${category_select[3]}>책</option>
                            <option value="exercise" ${category_select[4]}>운동</option>
                            <option value="work" ${category_select[5]}>회사</option>
                            <option value="english" ${category_select[6]}>영어</option>
                            <option value="chinese" ${category_select[7]}>중국어</option>
                            <option value="work" ${category_select[8]}>낮잠</option>
                        </select>
                    </div>
                </td>
                
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
                        <input style="text-align:center;" type="number" class="form-control"  maxlength="2" max="23" min="0" onKeyPress="return numkeyCheck(event)" name="endh" value="${sel_endh}">
                    </div>
                </td>
                <td class="pkiop_SNU_time_et" >
                    <div class="input-group">
                       <input style="text-align:center;" type="number" class="form-control"  maxlength="2" max="59" min="0" onKeyPress="return numkeyCheck(event)" name="endm" value="${sel_endm}">
                    </div>
                </td>
                <td class="pkiop_SNU_select">
                    <div class="input-group">
                        <select class="custom-select" name="except_check">
                            <option value="except_no" ${except_check_select[0]}>활용</option>
                            <option value="except" ${except_check_select[1]}>제외</option>
                        </select>
                    </div>
                </td>
                <td colspan="3"></td>
            </form>

                <td class="pkiop_SNU_UDbutton" colspan="1">
                    <form action="/delete_process" method="post">
                        <input type="hidden" name="id" value="${inputs[i].id}">
                        <input type="hidden" name="date" value="${date}">
                        <input class="btn btn-danger btn-block" type="submit" value="Delete">
                    </form>
                </td>
            </tr>
          
          
          `
          i++;
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

    showTotalrecodesTable:function(inputs){
        var tag = `<h2>기록보기 </h2>`
        tag += `<div><table class="table">
        <thead>
            <th>날짜</th>
            <th>SS</th>
            <th>SE</th>
            <th>잠</th>
            <th>굿탐</th>
            <th>활용률</th>
        </thead>
        `;
        var i = 0;
        while(i < inputs.length) {

          tag += `
          
          <tbody>
          <tr>
            <td>${inputs[i].daykey}     </td>
            <td>${inputs[i].sleepstart} </td>
            <td>${inputs[i].sleepend}   </td>
            <td>${minute_to_HM(inputs[i].sleep)}</td>
            <td>${minute_to_HM(inputs[i].nicetime)}   </td>
            <td>${(inputs[i].nicetime / 240 * 100).toFixed(2)}%</td>
          </tr>
          `
          i++;
        }
        tag += '</table></div>';

        return tag;
    },

    selectSleepTime:function(date) {
        var nowtimeh = moment().format("H");
        var nowtimem = moment().format("mm");
        return `
            <div>
                <table class="table">
                    <form action="/maketable_process" method="post">
                        <h3> sleep time </h3>

                        <tr>
                            <td> 
                                <div class="input-group">
                                    <input type="number" class="form-control" maxlength="2" max="23" min="0" onKeyPress="return numkeyCheck(event)" name="starth" value="23">
                                </div>
                            </td>
                            <td>
                                <div class="input-group">
                                    <input type="number" class="form-control" maxlength="2" max="59" min="0" onKeyPress="return numkeyCheck(event)" name="startm" value="00">
                                </div>
                            </td>
                            <td>
                                :
                            </td>
                            <td>
                                <div class="input-group">
                                    <input type="number" class="form-control" maxlength="2" max="23" min="0" onKeyPress="return numkeyCheck(event)" name="endh" value="${nowtimeh}">
                                </div>
                            </td>
                            <td>
                                <div class="input-group">
                                    <input type="number" class="form-control" maxlength="2" max="59" min="0" onKeyPress="return numkeyCheck(event)" name="endm" value="${nowtimem}">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="5">
                                <input type="hidden" name="date" value="${date}">
                                <input class="btn btn-dark" type="submit" value="Submit">    
                            </td>
                        </tr>
                            
                            
                            

                            
                    </form>
                </table>
            </div>
        `
    },

    CategoryList:function() {
        var body = '<ul>';
        for(var i in categorys) {
            body += `<li><a href="/category_process?categoryValue=${categorys[i]}">${categorys[i]}</a></li>`;
        }
        body += '</ul>';
        return body;
    },

    ShowCategory:function(title, results, categoryValue) {
        var body = '';
        body += this.CategoryList();
        body += `<table class="table">
            <tr>
                <td colspan="2">
                    <h2>${categoryValue}</h2>
                </td>
            <tr>
        `
        for(var i in results) {
            body += '<tr>';
            body += '<td>';
            body += results[i].daykey;
            body += '</td>';
            body += '<td>';
            body += results[i].nicetime;
            body += '</td>';
            body += '</tr>'
        }
        body += '</table>'; 
        return body;
    }
    
}
