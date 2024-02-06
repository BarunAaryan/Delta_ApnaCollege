const express= require("express");
const router = express.Router();//Creating a new router object 

//Posts
//Index
router.get("/", (req, res)=>{
    res.send("GEt for posts");
    });
    
    //Show Posts
    router.get("/:id", (req, res)=>{
    res.send("GEt for posts id");
    });
    
    //Post Posts
    router.post("/", (req, res)=>{
    res.send("Post for Posts");
    });
    
    
    //Delete Posts
    router.delete("/:id", (req, res)=>{
    res.send("Delete for posts id ");
    });
    module.exports= router;