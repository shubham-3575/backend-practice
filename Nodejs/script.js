const fs = require('fs');

//WriteFile
fs.writeFile("hello.txt","wrote with writeFile function",function(err){
    if(err) console.log(err);
    else console.log("Done");
})

//appendFIle
fs.appendFile("hello.txt","Appended through the appendFile",function(err){
    if(err) console.log(err);
    else console.log("Done");
})

//rename
fs.rename("hello.txt","Hello.txt",function(err){
    if(err) console.log(err);
    else console.log("Done");
})

//copyFile
fs.copyFile("Hello.txt","chacha.txt",function(err){
if(err) console.log(err);
else console.log("Done");
})

//unlink
fs.unlink("chacha.txt",function(err){
    if(err) console.log(err);
    else console.log("Done");
})

//rmdir
fs.rmdir("C:/Users/HP/OneDrive/ドキュメント/AutoHotkey",{recursive:true},function(err){
    if(err) console.log(err);
    else console.log("Done");
})

//http module (protocol - rules) its a rule which should be followed to sent some request and get any response
const http = require('node:http');

const server = http.createServer(function(req,res){
    res.end("Hello world");
})

server.listen(3000);

//http and https
