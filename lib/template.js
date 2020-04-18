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

                <script type="text/javascript"> 
                    function numkeyCheck(e) { 
                        var keyValue = event.keyCode; 
                        if( ((keyValue >= 48) && (keyValue <= 57)) ) 
                            return true; 
                        else 
                            return false; 
                    } 
                </script>

            </head>
            <body>
                <h1><a href="/">life manager</a></h1>
                <ul>
                    <li><a href="/selecttable">selecttable</a></li>
                    <li><a href="/todaytable_process">todaytable_process</a></li>
                    <li><a href="/showtotalrecodes">showtotalrecodes</a></li>

                </ul>
                <hr>
                <p>
                    ${body}
                </p>
            </body>
        </html>
        `;
    },

    puttime:function(date) {
        var nowtimeh = moment().format("H");
        var nowtimem = moment().format("mm");
        console.log("date : ", date);
        return `<form action="/puttime_process" method="post">
                    
                    <h3> use time </h3>
                    <select name="category">
                        <option value="else">기타</option>
                        <option value="develop">개발</option>
                        <option value="study">공부</option>
                        <option value="book_reading">책</option>
                        <option value="exercise">운동</option>
                        <option value="work">회사</option>
                        <option value="english">영어</option>
                        <option value="chinese">중국어</option>
                        <option value="work">낮잠</option>
                    </select>
                    <input type="number" maxlength="2" max="23" min="0" onKeyPress="return numkeyCheck(event)" name="starth" value="${nowtimeh}">
                    <input type="number" maxlength="2" max="59" min="0" onKeyPress="return numkeyCheck(event)" name="startm" value="${nowtimem}">
                    :
                    <input type="number" maxlength="2" max="23" min="-1" onKeyPress="return numkeyCheck(event)" name="endh" value="-1" placeholder="not selected">
                    <input type="number" maxlength="2" max="59" min="-1" onKeyPress="return numkeyCheck(event)" name="endm" value="-1" placeholder="not selected">
                    <p>
                    <select name="except_check">
                        <option value="except_no">활용</option>
                        <option value="except">제외</option>
                    </select>                   
                    <textarea name="doing" placeholder="description"></textarea>
                    <p>          
                    <input type="hidden" name="date" value="${date}">      
                    <input type="submit">

                </form>
                `
    },

    selecttable:function(msg) {
        var nowdate = moment().format("YYYY-MM-DD");
        return `
        <h2>selecttable ${msg}</h2>
        <form action="/showtable_process" method="post">
            <input type="date" name="date" value=${nowdate}>
            <p>
            <input type="submit">
        </form>
    
        `
    },

    showDBTable:function(inputs, date){
        var tag = `<h2>${date} table </h2>`
        tag += '<table>';
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
                case 'else':
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
                case 'work':
                    category_select[8] = 'selected';
                    break;
            }

          tag += `
          <tr>
            <form action="/update_process" method="post">
                <td>${inputs[i].id}</td>
                <td>
                    <select name="category" value="${inputs[i].category}">
                        <option value="else" ${category_select[0]}>기타</option>
                        <option value="develop" ${category_select[1]}>개발</option>
                        <option value="study" ${category_select[2]}>공부</option>
                        <option value="book_reading" ${category_select[3]}>책</option>
                        <option value="exercise" ${category_select[4]}>운동</option>
                        <option value="work" ${category_select[5]}>회사</option>
                        <option value="english" ${category_select[6]}>영어</option>
                        <option value="chinese" ${category_select[7]}>중국어</option>
                        <option value="work" ${category_select[8]}>낮잠</option>
                    </select>
                </td>
                <td>
                   <textarea name="doing">${inputs[i].doing}</textarea>
                </td>
                <td>
                    <input type="number" maxlength="2" max="23" min="0" onKeyPress="return numkeyCheck(event)" name="starth" value="${inputs[i].starth}">
                </td>
                <td>
                    <input type="number" maxlength="2" max="59" min="0" onKeyPress="return numkeyCheck(event)" name="startm" value="${inputs[i].startm}">
                </td>
                <td>
                    <input type="number" maxlength="2" max="23" min="0" onKeyPress="return numkeyCheck(event)" name="endh" value="${inputs[i].endh}">
                </td>
                <td>
                    <input type="number" maxlength="2" max="59" min="0" onKeyPress="return numkeyCheck(event)" name="endm" value="${inputs[i].endm}">
                </td>
                <td>
                    <input type="number" name="consume" value="${puttime_consume_calculation(inputs[i].starth, inputs[i].startm, inputs[i].endh, inputs[i].endm)}">
                </td>
                <td>
                    <select name="except_check">
                        <option value="except_no" ${except_check_select[0]}>활용</option>
                        <option value="except" ${except_check_select[1]}>제외</option>
                     </select>
                </td>
                <td>
                        <input type="hidden" name="id" value="${inputs[i].id}">
                        <input type="hidden" name="date" value="${date}">
                        <input type="submit" value="update">
                </td>
            </form>

            <td>
                <form action="/delete_process" method="post">
                    <input type="hidden" name="id" value="${inputs[i].id}">
                    <input type="hidden" name="date" value="${date}">
                    <input type="submit" value="delete">
                </form>
            </td>
          </tr>
          
          `
          i++;
        }
        tag += '</table>';
        tag += `
            <form action="/confirm_process" method="post">
                <input type="hidden" name="date" value="${date}">
                <input type="submit" value="confirm">
            </form>
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