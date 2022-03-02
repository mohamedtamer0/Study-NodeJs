const fsys = require("fs"); 
const fReadStream  = fsys.createReadStream("read.txt");
fReadStream.setEncoding("utf8");
var data = "";
fReadStream.on("data", (dChunk)=> {
    console.log("Read chunk");
    data += dChunk;
});
fReadStream.on("end", ()=> {
    console.log(data);
    console.log("end");
});