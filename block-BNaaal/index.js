var http = require('http');

function handleRequest(req ,res) {
 res.end('welcom')
}
var server = http.createServer(handleRequest);
server.listen(4000, () => {
    console.log('server listioning on port 4000')
});