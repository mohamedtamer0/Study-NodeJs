const fsys = require("fs");
const { finished } = require("stream");
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
//Write in file
let dataToWrite = " Hello file";
fsys.writeFile("write.txt", dataToWrite, ()=> {
    console.log("Data write finished");
});
console.log("After write async")