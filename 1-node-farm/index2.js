const http = require('http');

const server=http.createServer((req,res)=>{
    const pathName = req.url;
    if(pathName === '/' || pathName === '/overview'){
        res.end("Welcome to the Overview Page");
    }else if (pathName === '/product'){
        res.end("Welcome to the Product Page");
    }else{
        res.writeHead(404,{
            'Content-type':'text/html'
        });
        res.end("<h1 style='color:red'>Page Not Found</h1>");
    }
});
server.listen(8080,'127.0.0.1',()=>{
    console.log("server has started running on 8080");
});
