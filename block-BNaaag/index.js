var fs = require('fs');

fs.readFile('./content.md',(err ,content) => {

  console.log(content.toString());
})


// sync
console.log('first');
console.log('second');

//Async


setTimeout(() => {
    console.log('second');  
},2000)

console.log('first');


//Buffer
let buff1 = Buffer.alloc(10)
console.log(buff1);

 buff1.write('Welcome to Buffer');
console.log(buff1.toString())

