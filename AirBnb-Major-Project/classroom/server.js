const express = require("express");
const app = express();


app.get("/", (req, res)=>{
res.send("hi, I am root");
});


//Index Users
app.get("/users/:id", (req, res)=>{
res.send("GEt for posts");
});

//Show Users
app.get("/users/:id", (req, res)=>{
res.send("GEt for posts id");
});

//Post Users
app.post("/users", (req, res)=>{
res.send("Post for posts");
});


//Delete Users
app.delete("/users/:id", (req, res)=>{
res.send("Delete for posts id ");
});

//Posts
//Index
app.get("/posts", (req, res)=>{
res.send("GEt for posts");
});

//Show Posts
app.get("/posts/:id", (req, res)=>{
res.send("GEt for posts id");
});

//Post Posts
app.post("/posts", (req, res)=>{
res.send("Post for Posts");
});


//Delete Posts
app.delete("/posts/:id", (req, res)=>{
res.send("Delete for posts id ");
});


app.listen(3000, () =>{
    console.log("Server is listening to 3000")
});