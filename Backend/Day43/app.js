const express = require("express");
const app= express();

// app.use((req, res, next)=>{
// console.log("Hi! I am Middleware");
// // res.send("Middleware finished");
// return next(); //if we write like this then the next line is not going to be executed
// console.log("This is after next()");
// //this is genrally not followed but
// });
// app.use((req, res, next)=>{
// console.log("Hi! I am 2nd Middleware");
// // res.send("Middleware finished");
// next();
// });

//morgan - logger is popular
//Creating a utility middleware
// app.use((req, res, next)=>{
//     req.time= new Date(Date.now()).toString;
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// });

//API token as query string

const checkToken =  (req, res, next)=>{
let {token}= req.query;
if(token == "giveaccess"){
    next();
}
throw new Error("Access Denied")
};
//passing multiple middlewares
app.get("/api", checkToken,(req, res)=>{
    res.send("data");
});

//exploring app.use()
app.use("/random",(req, res, next )=>{
    console.log("I am only for random");
    next();
})
//404
app.use((req, res)=>{
    res.status(404).send("Page not found")
})

app.get("/", (req, res)=>{
    res.send("Hi I am groot");
});

app.get("/random", (req,res)=>{
res.send("This is a random page")
});

app.listen(8080, ()=>{
console.log("Server is listening to port 8080");
});