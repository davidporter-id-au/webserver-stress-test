var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    console.log(req.method);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    setTimeout(function(){
        res.end("end");
    }, 200);
}).listen(4000);
