const http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write("Hello world - from web server");
    res.end();
}).listen(8080);