var http = require("http");
var url = require("url");
function handleRequest(req, res) {
  // var parsedUrl = url.parse(req.url);
  // var pathname = parsedUrl.pathname;
  //console.log(parsedUrl);
  console.log(req.method, req.url);
  if (req.method === "GET" && req.url === "/") {
    res.write("Welcome to homepage");
    res.end();
  } else if (req.method === "GET" && req.url === "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h2>this is all about NodeJS</h2>");
  } else if (req.method === "POST" && req.url === "/about") {
    console.log(req);
    res.setHeader("Content-Type", "application/json");
    res.end("{message: this is a post request}");
  }
}

var server = http.createServer(handleRequest);
server.listen(5000, () => {
  console.log("server listioning on port 5000");
});
