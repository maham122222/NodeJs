const fs = require('fs');

// telling node where we are going to read data from

const readStream = fs.createReadStream('./docs/blog3.txt',{encoding:'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// .on similar to click event in js but this time we listensing to data

readStream.on('data',(chunk)=>{
    console.log('new chunk')
    console.log(chunk);
    writeStream.write('\n New chunk\n')
    writeStream.write(chunk);

});
// encoding:'utf8' => by sing this no need to use toString method to change buffer to text data it will do this

//piping(shortcut)
readStream.pipe(writeStream);
