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
app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
})