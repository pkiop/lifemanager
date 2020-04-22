var fs = require('fs');
var moment = require('moment');

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
                    td {
                        text-align: center;
                    }
                    h2, h3 {
                        text-align: center;
                    }
                </style>
            </head>
            <body>
                <nav class="navbar bg-dark navbar-dark">
                    <a class="navbar-brand" href="/">Life Manager</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                            <li class="nav-item"><a class="nav-link" href="/selecttable">selecttable</a></li>
                            <li class="nav-item"><a class="nav-link" href="/todaytable_process">todaytable_process</a></li>
                            <li class="nav-item"><a class="nav-link" href="/showtotalrecodes">showtotalrecodes</a></li>
                            <li class="nav-item"><a class="nav-link" href="/showcategory">showcategory</a></li>
                        </ul>
                    </div>
                </nav>
                <div class="container">
                    <h2> ${title} </h2>
                </div>
                    ${body}

            

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
        console.log("date : ", date);
        return `
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col">
                                <form action="/puttime_process" method="post">
                                    
                                    <h3> use time </h3>
                                
                                    <div class="row align-items-center">
                                        <div class="col-1"></div>
                                        <div class="col-2">
                                            <div class="input-group">
                                                <input type="number" class="form-control" style="width:50px;" maxlength="2" max="23" min="0" onKeyPress="return numkeyCheck(event)" name="starth" value="${nowtimeh}">
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="input-group">
                                                <input type="number" class="form-control" style="width:50px;" maxlength="2" max="59" min="0" onKeyPress="return numkeyCheck(event)" name="startm" value="${nowtimem}">
                                            </div>
                                        </div>
                                        <div class="col-1">
                                        <h2>:</h2>
                                        </div>
                                        <div class="col-2">
                                            <div class="input-group">
                                                <input type="number" class="form-control" style="width:50px;" maxlength="2" max="23" min="-1" onKeyPress="return numkeyCheck(event)" name="endh" value="-1" placeholder="not selected">
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="input-group">
                                                <input type="number" class="form-control" style="width:50px;" maxlength="2" max="59" min="-1" onKeyPress="return numkeyCheck(event)" name="endm" value="-1" placeholder="not selected">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">

                                        <div class="col-3">
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
                                        </div>
                                        <div class="col-3">
                                            <div class="input-group">
                                                <select class="custom-select" name="except_check">
                                                    <option value="except_no">활용</option>
                                                    <option value="except">제외</option>
                                                </select>       
                                            </div>            
                                        </div>
                                        <div class="col-6">
                                            <div class="input-group">
                                                <textarea class="form-control" rows="1" cols="15" name="doing" placeholder="description"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" name="date" value="${date}">      
 
                                    </div>
                                    <div class="row">
                                    <p>
                                    </div>
                                    <div class="row">
                                        <div class="col-5"></div>
                                        <div class="col-1">
                                            <input class="btn btn-dark" type="submit" value="submit">
                                        </div>
                                        <div class="col-5"></div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                `
    },

    selecttable:function(msg) {
        var nowdate = moment().format("YYYY-MM-DD");
        return `
        <h2>selecttable ${msg}</h2>
        <form action="/showtable_process" method="post">
            <input type="date" name="date" value=${nowdate}>
            <input type="submit">
        </form>
    
        `
    },

    showDBTable:function(inputs, date){
        var tag = `
        <div class="container">
            <div class="row">
                <div class="col align-self-center">
                    <h2>${date} table </h2>
                </div>
            </div>`
        tag += `
        <div class="row">
        <table class="table table-dark">
        <thead>
            <tr>
                <th scope="col">Doing / UseT</th>
                <th scope="col">SH / EH</th>
                <th scope="col">SM / EM</th>
                <th scope="col">Category / Except</th>
                <th scope="col">Update / Delete</th>
            </tr>
          </thead>
        
        `;
        //<th scope="col">#</th>
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

          tag += `
          
          <tr>
            <form action="/update_process" method="post">
                <td>
                    <div class="input-group">
                        <textarea class="form-control" rows="1" cols="15" name="doing">${inputs[i].doing}</textarea>
                    </div>
                </td>
                
                
                <td>
                    <div class="input-group">
                        <input type="number" class="form-control" style="width:50px;" maxlength="2" max="23" min="0" onKeyPress="return numkeyCheck(event)" name="starth" value="${inputs[i].starth}">
                    </div>
                </td>
                <td>
                    <div class="input-group">
                        <input type="number" class="form-control" style="width:50px;" maxlength="2" max="59" min="0" onKeyPress="return numkeyCheck(event)" name="startm" value="${inputs[i].startm}">
                    </div>
                </td>
                <td>
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
                
                <td>
                    <input type="hidden" name="id" value="${inputs[i].id}">
                    <input type="hidden" name="date" value="${date}">
                    <input class="btn btn-success" type="submit" value="Update">
                </td>
                
            </tr>
            <tr>
                <td>
                    <div class="input-group">
                        <input type="number" class="form-control" style="width:50px;" name="consume" value="${puttime_consume_calculation(inputs[i].starth, inputs[i].startm, inputs[i].endh, inputs[i].endm)}">
                    </div>
                </td>
                
                <td>
                    <div class="input-group">
                        <input type="number" class="form-control" style="width:50px;" maxlength="2" max="23" min="0" onKeyPress="return numkeyCheck(event)" name="endh" value="${inputs[i].endh}">
                    </div>
                </td>
                <td>
                    <div class="input-group">
                       <input type="number" class="form-control" style="width:50px;" maxlength="2" max="59" min="0" onKeyPress="return numkeyCheck(event)" name="endm" value="${inputs[i].endm}">
                    </div>
                </td>
                <td>
                    <div class="input-group">
                        <select class="custom-select" name="except_check">
                            <option value="except_no" ${except_check_select[0]}>활용</option>
                            <option value="except" ${except_check_select[1]}>제외</option>
                        </select>
                    </div>
                </td>
                
                
            </form>

            <td>
                <form action="/delete_process" method="post">
                    <input type="hidden" name="id" value="${inputs[i].id}">
                    <input type="hidden" name="date" value="${date}">
                    <input class="btn btn-danger" type="submit" value="Delete">
                </form>
            </td>
          </tr>
          
          `
          i++;
        }
        tag += '</table></div>';
        tag += `
            <div class="container">
                <div class="row">
                    <div class="col-5"></div>
                        <div class="col-1">
                            <form action="/confirm_process" method="post">
                                <input type="hidden" name="date" value="${date}">
                                <input class="btn btn-dark" type="submit" value="confirm">
                            </form>
                        </div>
                    <div class="col-5"></div>
                <div class="row">
            </div>
        </div>
        `
        return tag;
    },

    showConfirmDBTable:function(inputs, date){
        var tag = `<h2>Confirm ${date} table </h2>`
        tag += '<table>';
        var i = 0;
        while(i < inputs.length) {

          tag += `
          <tr>
            <td>${inputs[i].id}</td>
            <td>
                ${inputs[i].category}
            </td>
            <td>
                ${inputs[i].doing}
            </td>
            <td>
                ${inputs[i].starth}
            </td>
            <td>
                ${inputs[i].startm}
            </td>
            <td>
                ${inputs[i].endh}
            </td>
            <td>
                ${inputs[i].endm}
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
        tag += '</table>';

        return tag;
    },

    showTotalrecodesTable:function(inputs){
        var tag = `<h2>Totalrecodes table </h2>`
        tag += '<table>';
        var i = 0;
        while(i < inputs.length) {

          tag += `
          <tr>
            <td>${inputs[i].daykey}     </td>
            <td>${inputs[i].year}       </td>
            <td>${inputs[i].month}      </td>
            <td>${inputs[i].day}        </td>
            <td>${inputs[i].sleepstart} </td>
            <td>${inputs[i].sleepend}   </td>
            <td>${inputs[i].sleep}      </td>
            <td>${inputs[i].nicetime}   </td>
          </tr>
          `
          i++;
        }
        tag += '</table>';

        return tag;
    },

    selectSleepTime:function(date) {
        console.log("selectst : ", date);
        var nowtimeh = moment().format("H");
        var nowtimem = moment().format("mm");
        return `
            <form action="/maketable_process" method="post">
                <h3> sleep time </h3>
                <input type="number" maxlength="2" max="23" min="0" onKeyPress="return numkeyCheck(event)" name="starth" value="23">
                <input type="number" maxlength="2" max="59" min="0" onKeyPress="return numkeyCheck(event)" name="startm" value="00">
                :
                <input type="number" maxlength="2" max="23" min="0" onKeyPress="return numkeyCheck(event)" name="endh" value="${nowtimeh}">
                <input type="number" maxlength="2" max="59" min="0" onKeyPress="return numkeyCheck(event)" name="endm" value="${nowtimem}">
                <input type="hidden" name="date" value="${date}">

                <input type="submit" value="submit">
            </form>
        `
    }
    
}
