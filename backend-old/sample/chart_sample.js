var http = require('http');
var url = require('url');
var Chart = require('chart.js');
var fs = require('fs');


var app = http.createServer(function(request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/') {
        body = "mybody";

        
        var html = `
        <!doctype html>
        <html>
            <head>
                <title>life manager</title>

                <meta charset="utf-8">
            <body>
               
                    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.1.6/Chart.bundle.min.js"></script>
                    <canvas id="myChart" width="400" height="400"></canvas>
                    <script>
                        var ctx = document.getElementById("myChart");
                        var myChart = new Chart(ctx, {
                            type: 'bar',
                            data: {
                                labels: ["Group 1", "Group 2", "Group 3"],
                                datasets: [{
                                    label: 'Groups',
                                    data: [12, 19, 3]
                                }]
                            }
                        });
                    </script>
                    <input id="myChart" value="2"></input>
                    ${body}
              
            
            </body>
        </html>
        
        
        
        `;
        response.writeHead(200);
        response.end(html);
    }
});
app.listen(3000);

// app2.get('/logo', function(request, response) {
//     fs.readFile('/pic/logo.png', function(error, data) {
//         response.writeHead(200, {'Content-Type': 'text/html'});
//         response.end(data);
//     });
// });