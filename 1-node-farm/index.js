
const fs = require('fs');
// Blocking, Synchronous way
const textIn = fs.readFileSync('./txt/input.txt','utf-8');
console.log(textIn);
const textOut = `This is all what we know about Abocado : ${textIn}.\n created on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt',textOut);

console.log('File Written successfully');

// Non-blocking Asynchronous way
fs.readFile('./txt/start.txt','utf-8',(err,data1)=>{
    fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2)=>{
        fs.readFile(`./txt/append.txt`,'utf-8',(err,data3)=>{
            fs.writeFile(`./txt/final.txt`,`${data2}\n${data3}\n${data2}`,'utf-8',(err)=>{
                console.log("Your File has written successfully");
            })
        })
    })
})
console.log("Reading the file !");
