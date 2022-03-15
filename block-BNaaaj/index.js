// 1
console.log('Welcome to Nodejs');

// 2

var os = require('os');
//console.log(os);

console.log(os.cpus())
console.log(os.freemem())
console.log(os.uptime())
console.log(os.version())

//3 
var {readFile ,unlink} = require('fs');
//4   

var {parse} = require('url') 
 var parUrl =    parse(`https://airindia.com/fares/calculate?from=delhi&to=detroit`);
 console.log(parUrl.pathname);
 console.log(parUrl.protocol);
 console.log(parUrl.query);



//4
let buff1 = Buffer.alloc(12);
  buff1.write("hello akash");
console.log(buff1.toString());

let buff2 = Buffer.allocUnsafe(12);
     buff2.write("hello node")
   console.log(buff2.toString())  ;
