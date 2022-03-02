const fsys = require("fs");
console.log("Start reading...");
var data = fsys.readFileSync("read.txt");
console.log("Data: " + data);
console.log("Read ended...");
//Async
fsys.readFile("read.txt",(err,d)=>{
    if(err){
        console.log(err)
    }
    console.log("Data: " + d)
});
console.log("After read async");