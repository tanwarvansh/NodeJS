const http = require('http');
const fs = require('fs');
const url = require('url');
const updateTemplate = require('./JsModules/replaceTemplate');




const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');

const prod_data = JSON.parse(data);

const overviewTemp = fs.readFileSync(`${__dirname}/templates/template-overview.html`,'utf-8');
const productTemp = fs.readFileSync(`${__dirname}/templates/template-product.html`,'utf-8');
const cardTemp = fs.readFileSync(`${__dirname}/templates/template-card.html`,'utf-8');

const server=http.createServer((req,res)=>{
   
    const { query, pathname } = url.parse(req.url, true);
    

    // Overview Page
    if(pathname === '/' || pathname === '/overview'){
        const cardArr = prod_data.map(data => updateTemplate(data, cardTemp));
        const overviewArr = overviewTemp.replace(/{%PROD_CARDS%}/g,cardArr);
        res.writeHead(200, { 'Content-type':'text/html'})
        res.end(overviewArr);

    // Product Page
    }else if (pathname === '/product'){
       const a = query.id;
        
  
        const prodData = updateTemplate(prod_data[a],productTemp); 
        res.writeHead(200, { 'Content-type':'text/html'})
        res.end(prodData);

    // API Page
    } else if(pathname === '/api'){       
            res.writeHead(200, { 'Content-type':'application/json'})
            res.end(data);

    // Page Not Found Page
    } else{
        res.writeHead(404,{
            'Content-type':'text/html'
        });
        res.end("<h1 style='color:red'>Page Not Found</h1>");
    }
});
server.listen(8080,'127.0.0.1',()=>{
    console.log("server has started running on 8080");
});
