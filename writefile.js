const fs = require('fs');
fs.writeFile('write.txt', "Write into file", function(err) {
    if(err) throw err;
    console.log('File saved!');
});