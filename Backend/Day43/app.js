const express = require("express");
const app= express();

app.use((req, res, next)=>{
console.log("Hi! I am Middleware");
// res.send("Middleware finished");
return next(); //if we write like this then the next line is not going to be executed
console.log("This is after next()");
//this is genrally not followed but
});
app.use((req, res, next)=>{
console.log("Hi! I am 2nd Middleware");
// res.send("Middleware finished");
next();
});

app.get("/", (req, res)=>{
    res.send("Hi I am groot");
});

app.get("/random", (req,res)=>{
res.send("This is a random page")
});

app.listen(8080, ()=>{
console.log("Server is listening to port 8080");
});