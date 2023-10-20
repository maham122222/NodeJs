const fs =require('fs');

// read file
// asynchronous method: it takes some time to execute ehile doind this it does'nt block our rest of the code 
// it carries with the rest of the code and execute its code also 

fs.readFile('./docs/blog1.txt',(err,data)=>{
if(err){
    console.log(err);
}
console.log(data.toString());
}
);

console.log('last line');


// writting a file
fs.writeFile('./docs/blog1.txt','maham jamil',()=>{
    console.log('file was written');


});

// blog2 file created
// 

// creating directory

if(!fs.existsSync('./assets')){


fs.mkdir('./assets',(err)=>{
    if(err){
        console.log(err);
    }
    console.log('folder created');
});
}else{
    fs.rmdir('./assets',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder deleted')
    });
}

// deleting files

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('file deleted')

        
    })
}

