const fs = require('fs');

//reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

//writing files

fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
    console.log('file was written');
});

//directories

//deleting files