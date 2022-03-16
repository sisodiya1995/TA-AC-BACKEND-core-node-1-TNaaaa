var http = require("http");
var fs = require('fs')
var server = http.createServer(handleRequest);
function handleRequest(req, res) {
    if(req.method === 'GET' && req.url ==='/index') {
     console.log(req.method);
     res.setHeader("Content-Type", "text/html");
     fs.createReadStream('../js../asset../index.html').pipe(res);
     
    }else if(req.method === 'GET' && req.url ==='/about'){
        res.setHeader("Content-Type", "text/html");
        fs.createReadStream('./about.html').pipe(res);
    } else {
        res.statusCode = 404;
        res.end();
    }
    
}

server.listen(2355, () => {
  console.log("server listioning on port 2355");
});