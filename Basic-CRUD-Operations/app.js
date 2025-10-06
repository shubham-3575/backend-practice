const express = require('express');
const app = express();

const userModel = require('./usermodel');
const { deleteModel } = require('mongoose');

app.get('/',(req,res)=>{
    res.send("Ehy");
})


app.get('/create',async (req,res)=>{
    let createduser = await userModel.create({
        name:"Kiran",
        username : "kiranbhai",
        email:"kiran@gmail.com"
    });
    res.send(createduser);
})

app.get('/update',async (req,res)=>{
 let updateduser = await userModel.findOneAndUpdate({username:"siibh"},{name:"Shuuubhamm"});
 res.send(updateduser);
})

app.get('/read',async(req,res)=>{
   let allusers = await userModel.find();
   res.send(allusers);
})

app.get('/delete',async(req,res)=>{
    let delteduser = await userModel.findOneAndDelete({username:"kiranbhai"});
    res.send(delteduser);
})


app.listen(3000);
