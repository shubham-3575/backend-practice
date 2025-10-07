const express = require('express');
const app = express();

const userModel = require("./models/users");

const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname,"public")));


app.get("/",(req,res)=>{
    res.render("index");
});

app.post("/create",(req,res)=>{
    let{username,email,password,age} = req.body;
    bcrypt.genSalt(10,(err,salt) => {
        bcrypt.hash(password,salt,async (err,hash)=>{
            let createdUser = await userModel.create({
                username,
                email,
                password:hash,
                age
            });
            let token = jwt.sign({email},"shubham");
            res.cookie("token",token);
            res.send(createdUser);
        });
    });
})

app.post("/login",async function(req,res){
    let user = await userModel.findOne({email:req.body.email});
    if(!user) return res.send("Something Went Wrong");

    bcrypt.compare(req.body.password, user.password,function(err,result){
        if(result){
             res.send("Yes you had logged in");
             let token = jwt.sign({email:user.email},"shubham");
            res.cookie("token",token);
            res.send(createdUser);
        }
            else res.send("Something is wrong");
    })
})

app.get("/login", (req,res) => {
    res.render("login");
})

app.get("/logout",(req,res) => {
    res.cookie("token","");
    res.redirect("/")
})

app.listen(3000);
