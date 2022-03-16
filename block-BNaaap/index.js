var http = require('http');

function handleRequest(req ,res) {
    res.statusCode = 201;
    res.setHeader('content-Type' ,'text/html')
  res.end('<h1>Hello node !</h1>')
}

var server = http.createServer(handleRequest);
server.listen(4444, () => {
    console.log('server listioning on port 4444')
});