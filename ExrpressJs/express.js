const express = require('express')
const app = express(); //everything functionality of express js is stored in app

//routes creating
//youtube.com/home --> so here home is route except the domain name after slash we have the route name
//facebook.com/
function userDefinedMiddleware(req,res,next){
    console.log("User Defined");
    next();
}

app.use(function(req,res,next){
    console.log("Middleware Running through use");
    next();
});



app.use(userDefinedMiddleware);


app.get("/",function(req,res){
    res.send("Champion");
})

app.get("/profile",function(req,res){
    res.send("Guru is  Champion and he will be champiion");
})



app.get("/about",function(req,res,next){
    return next(new Error("Something went wrong"))//get prints on consele
});

app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('Something broke!') //get prints on front end
});

app.listen(3000) //3000  is a port but anything can be written

//middleware
//Adding something before ROUTES is middleware, we can print things before routes and its been printed due ro middleware
//Request and response Handling
//Error Handling


