const http = require('http');

const server=http.createServer((req,res)=>{
    res.end("Hello this is my first server!");
});

server.listen(8080,'127.0.0.1',()=>{
    console.log("server has started running on 8080");
});
