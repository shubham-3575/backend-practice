const express = require("express");
const app = express();

const userModel = require("./models/user");
const postModel = require("./models/post");
const user = require("./models/user");

app.get("/",(req,res)=>{
    res.send("Hey");
})

app.get("/create",async (req,res)=>{
    let user = await userModel.create({
        username : "Shubham",
        age:21,
        email:"shubham@ab.com"
    });
    res.send(user);
});

app.get("/post/create",async (req,res)=>{
    let post = await postModel.create({
        postdata : "hello",
        user : "68e50268ad466ab7facad411"
    });

    let user = await userModel.findOne({_id:"68e50268ad466ab7facad411"});
    user.posts.push(post._id);
    await user.save();

    res.send({user,post});
})

app.listen(3000);
