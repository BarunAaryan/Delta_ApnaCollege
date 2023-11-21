//express 
//creating a local server
const express = require("express");
const app = express();
//app is an object
//console.dir(app);
let port = 3000;
app.listen(port, ()=>{
    console.log(`App is listening at port ${port}`)
});
//app.use
// app.use((req, res)=>{
// console.log("Request Received");
// //sending a response
// //res.send("This is a Basic Response");
// res.send({
//     name: "apple",
//     color:"red",
// });
// });

//routing
// app.get("/", (req, res)=>{
//     res.send("You contacted the root path");
// });
// app.get("/apple", (req, res)=>{
//     res.send("You contacted the apple path");
// });
// app.get("*", (req, res)=>{
//     res.send("This path does not exist");
// });

// app.post("/", (req, res)=>{
//     res.send("You sent a post request");
// });

//path parameters
app.get("/", (req, res)=>{
    res.send("You contacted the root path");
});
app.get("/:username/:id", (req, res)=>{
    console.log(req.params); //request parameters
    let{username , id} = req.params;
    res.send(`Welcome to the page of @${username}.`);
});
//Query Strings
app.get("/search", (req,res)=>{
    // console.log(req.query);
    let {q} = req.query;
    if(!q){
        res.send("<h1>Nothing Searched</h1>")
    }
    res.send(`these are the search result for ${q}`);
});