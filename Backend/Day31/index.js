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