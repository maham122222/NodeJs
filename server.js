const http = require('http');
const fs = require('fs');

// whenevr request is made this function will run
// req=> contains info what user sends
const server = http.createServer((req,res)=>{
    console.log('request made');
    // console.log(req);
    console.log(req.url,req.method);

    //set header content type
    res.setHeader('Content-Type','text/html');
    // res.write('<p>hello maham</p>');
    // res.write('<p>hello again maham</p>');
    // res.end();
let path ='./views/';
switch(req.url){
    case '/':
        path+='index.html';
        res.statusCode=200;
        break;
    case '/about':
        path+='about.html';
        res.statusCode=200;
        break;
    case '/about-me':
        // path+='about.html';
        res.statusCode=301;
        res.setHeader('Location',',/about');
        res.end();
        break;
    default:
        path+= '404.html';
        res.statusCode=404;
        break;
}

    // sending html file to browser
    // fs.readFile('./views/index.html',(err,data)=>{
        fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            // res.write(data);
            
            res.end(data);
        }
    })

});

// localhost is the domain name
server.listen(3000,'localhost',()=>{
    console.log('listening for req on port 3000')
});