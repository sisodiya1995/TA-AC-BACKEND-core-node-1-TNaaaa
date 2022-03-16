1
var http = require("http");

function handleRequest(req, res) {
 
  console.log(req,res);
  
}

var server = http.createServer(handleRequest);
server.listen(5000, () => {
  console.log("server listioning on port 5000");
});

//2

var http = require("http");

function handleRequest(req, res) {
 
  res.end('My first server in NodeJS');
  
}

var server = http.createServer(handleRequest);
server.listen(5100, () => {
  console.log("server listioning on port 5100");
});

//3
var http = require("http");

function handleRequest(req, res) {
    console.log(req.headers)
    res.end(req.headers['user-agent'])
  
}

var server = http.createServer(handleRequest);
server.listen(5555, () => {
  console.log("server listioning on port 5555");
});

//4
var http = require("http");

function handleRequest(req, res) {
    console.log(req.method ,req.url)
    res.end(req.method + req.url)
  
}

var server = http.createServer(handleRequest);
server.listen(5566, () => {
  console.log("server listioning on port 5566");
});

//5

var http = require("http");

function handleRequest(req, res) {
    //console.log(req.method ,req.url)
    res.end(JSON.stringify(req.headers))
  
}

var server = http.createServer(handleRequest);
server.listen(7000, () => {
  console.log("server listening on port 7000");
});

//6
var http = require("http");

function handleRequest(req, res) {
    
  res.statusCode = 202;
  res.end(JSON.stringify(req.headers))
}

var server = http.createServer(handleRequest);
server.listen(3333, () => {
  console.log("server listioning on port 3333");
});

//7

var http = require("http");

function handleRequest(req, res) {
    
    res.setHeader("Content-Type", "text/html");
    res.end("<h3>Welcome to AltCampus </h3>");
}

var server = http.createServer(handleRequest);
server.listen(8888, () => {
  console.log("server listioning on port 8888");
});

//8
var http = require("http");
var server = http.createServer(handleRequest);
function handleRequest(req, res) {
    res.writeHead(200 ,{'Content-Type' :'text/html'})
    res.end("<h3>Welcome to AltCampus </h3>");
}


server.listen(8000, () => {
  console.log("server listioning on port 8000");
});

//9
var http = require("http");
var server = http.createServer(handleRequest);
function handleRequest(req, res) {
    console.log(req.method)
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({success: true, message: 'Welcome to Nodejs'}));
}


server.listen(8888, () => {
  console.log("server listioning on port 8888");
});

//10
var http = require("http");
var server = http.createServer(handleRequest);
function handleRequest(req, res) {
    if(req.method === 'POST' && req.url ==='/index'){
     console.log(req.method);
     res.setHeader("Content-Type", "text/html");
     res.end('<h2>posted for first time</h2>')
    }
    
}


server.listen(5050, () => {
  console.log("server listioning on port 5050");
});

11

var http = require("http");
var server = http.createServer(handleRequest);
function handleRequest(req, res) {
    if(req.method === 'GET' && req.url ==='/') {
     console.log(req.method);
     res.setHeader("Content-Type", "plain/text");
     res.end('Akash Singh')
    }else if(req.method === 'GET' && req.url ==='/about'){
        res.setHeader("Content-Type", "text/html");
        res.end('<h1>Akash Singh</h1>')
    }else{
        res.statusCode = 404;
        res.end('Page are not found');
    }
    
}


server.listen(2335, () => {
  console.log("server listioning on port 2335");
});

12

var http = require("http");
var fs = require('fs')
var server = http.createServer(handleRequest);
function handleRequest(req, res) {
    if(req.method === 'GET' && req.url ==='/users') {
     console.log(req.method);
     res.setHeader("Content-Type", "text/html");
     fs.createReadStream('./node.html').pipe(res);
     
    }else if(req.method === 'POST' && req.url ==='/users'){
        res.setHeader("Content-Type", "text/html");
        res.end('<h1>Posted for the second time</h1>')
    } else {
        res.statusCode = 404;
        res.end('Page are not found');
    }
    
}

server.listen(2355, () => {
  console.log("server listioning on port 2355");
});
//14

var http = require("http");
var fs = require('fs')
var server = http.createServer(handleRequest);
function handleRequest(req, res) {
    if(req.method === 'GET' && req.url ==='/users') {
     console.log(req.method);
     res.setHeader("Content-Type", "text/html");
     fs.createReadStream('./node.html').pipe(res);
     
    }else if(req.method === 'POST' && req.url ==='/users'){
        res.setHeader("Content-Type", "text/html");
        res.end('<h1>Posted for the second time</h1>')
    } else {
        res.statusCode = 404;
        res.end();
    }
    
}

server.listen(2355, () => {
  console.log("server listioning on port 2355");
});

//15

var http = require("http");
var fs = require('fs');
var url = require('url');
var server = http.createServer(handleRequest);
function handleRequest(req, res) {
    var parseUrl = url.parse(req.url , true);
    console.log(parseUrl.pathname ,req.url)
    res.setHeader('Content-Type' , 'text/html')
    res.end(JSON.stringify(parseUrl.query))
    
}

server.listen(2355, () => {
  console.log("server listioning on port 2355");
});