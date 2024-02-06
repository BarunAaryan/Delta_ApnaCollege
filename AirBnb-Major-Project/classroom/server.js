const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const cookieParser = require("cookie-parser");

app.use(cookieParser("secretcode"));
//signed cookies
app.get("/getsignedcookie", (req, res) => {
    res.cookie("made-in", "India", { signed: true });
    res.send("Signed cookie sent");
});

//sending cookies
app.get("/getcookies", (req, res) => {
    res.cookie("greet", "hello"); //this is the name value pair
    res.send("Sent you some cookies")
});
//verifying signed cookie
app.get("/verify", (req, res) => {
    console.log(req.signedCookies);
    res.send("verified");
});



//cookie parser
app.get("/", (req, res) => {
    console.dir(req.cookies);
    res.send("hi, I am root");
});

app.get("/greet", (req, res) => {
    let { name = "anaonymous" } = req.cookies;
    res.send(`Hi, ${name}`);
});


app.use("/users", users);
app.use("/posts", posts);


app.listen(3000, () => {
    console.log("Server is listening to 3000")
});

