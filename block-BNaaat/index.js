var http = require("http");
var url = require("url");
var fs = require('fs')
function handleRequest(req, res) {
  // var parsedUrl = url.parse(req.url);
  // var pathname = parsedUrl.pathname;
  //console.log(parsedUrl);
  console.log(req.method, req.url);
  if (req.method === "GET" && req.url === "/") {
    res.write("Welcome to homepage");
    res.end();
  } else if (req.method === "GET" && req.url === "/file") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
   
   fs.readFile('./node.html' ,(err ,content) => {
       if(err){
           console.log(err);   
       }
       res.end(content);
   })
  } else if (req.method === "GET" && req.url === "/stream") {
    //console.log(req);
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream('./node.html').pipe(res);
    
  }
}

var server = http.createServer(handleRequest);
server.listen(5555, () => {
  console.log("server listioning on port 5555");
});
