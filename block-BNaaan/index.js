var http = require('http');

function handleRequest(req ,res) {
    console.log(req.method , req.url , req.headers)
  res.end('welcom')
}

var server = http.createServer(handleRequest);
server.listen(3000, () => {
    console.log('server listioning on port 3000')
});