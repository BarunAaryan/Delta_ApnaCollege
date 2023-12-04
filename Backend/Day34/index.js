const express = require("express");
const app = express();
const port = 3000;
const path= require("path");

app.use(express.urlencoded({extended : true}));

app.set("view engine ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/posts/new", (req, res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req, res)=>{
    // console.log(req.body);
    let{username, content} = req.body;
    posts.push({username, content});
    // res.send("post request working");
    res.redirect("/posts");
})

let posts = [
    {
        id: "1a ",
    username: "Barun",
    content: "Barun has no friends"
},
    {
        id: "2b",
    username: "Soumitri",
    content: "Does not like Barun"
},
    {
        id: "3c",
    username: "Trisha",
    content: "The Best person in the world."
},

];
app.get("/posts", (req, res)=>{
    res.render("index.ejs", {posts});
})
app.get("/posts/:id", (req, res)=>{
    let {id}= req.params;
    console.log(id);
})

app.listen(port, ()=>{
    console.log("Listening to port 3000");
})  