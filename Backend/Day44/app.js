const express = require("express");
const app= express();
const ExpressError = require("./ExpressError");


const checkToken =  (req, res, next)=>{
    let {token}= req.query;
    if(token == "giveaccess"){
        next();
    }
    throw new ExpressError(401, "Access Denied");
    };
    app.get("/api", checkToken,(req, res)=>{
        res.send("data");
    });

    app.use((err, req, res, next)=>{
        let {status=500, message= "Some error occured"}= err;
        res.status(status).send(message);
        });

app.get("/", (req, res)=>{
    res.send("Hi I am groot");
});
app.get("/random", (req,res)=>{
    abcd= abced;
    });
    

app.get("/admin", (req, res)=>{
throw new ExpressError(403, "Access is Fobidden");
});

app.listen(8080, ()=>{
    console.log("Server is listening to port 8080");
});