app.get("*", (req, res)=>{
    res.send("This path does not exist");
})