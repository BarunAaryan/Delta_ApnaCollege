//EJS
const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    //res.send("This is home");
    res.render("home.ejs");
});
app.get("/hello", (req, res) => {
    //res.send("This is home");
    res.send("Hello Guys");
});
app.get("/rolldice", (req, res ) => {
    //res.send("This is home");
    let diceVal= Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs", {num: diceVal});
    // res.render("rolldice.ejs", {diceVal}); when we give same name to the key and the value
});
app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
})

//instagram ejs
app.get("/ig/:username", (req,res)=>{
    const followers= ["Adam","Bob", "Steve"];
let {username}= req.params;
console.log(username);
// const instaData = require("./data.json");
// console.log(instaData);
res.render("instagram.ejs", {username, followers}); 
});