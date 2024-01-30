const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
// let chat1= new Chat({
//     from: "Barun",
//     to: "Chinki",
//     msg: "I Love You",
//     created_at: new Date()
// });
// chat1.save().then((res)=>{
//     console.log(res);
// })

app.get("/", (req, res) => {
    res.send("everything is working");
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});

//Index Route
app.get("/chats", async (req, res) => {
    try {
        let chats = await Chat.find();
        console.log(chats);
        res.render("index.ejs", { chats });
    } catch (err) {
        next(err);
    }

});
//Create Route
app.post("/chats", async (req, res) => {
    try {
        let { from, to, msg } = req.body;
        let newChat = new Chat({
            from: from,
            to: to,
            msg: msg,
            created_at: new Date()
        });
        await newChat
            .save()
        res.redirect("/chats");
    } catch (err) {
        next(err);
    }
});
//error handling middleware
app.use((err, req, res, next) => {
    let { status = 500, message = "Some Error occured" } = err;
    res.status(status).send(message);
});

//new Show route-> part of day 44
app.get("/chats/:id", async (req, res, next) => {
    try {
        let { id } = req.params;
        let chat = await Chat.findById(id);
        if (!chat) {
            next(new Expresserror(500, "Chat not found"));
        } res.render("edit.ejs", { chat });
    } catch (err) {
        next(err);
    }
});

//Update route
app.put("/chats/:id", async (req, res) => {
    try {
        let { id } = req.params;
        let { msg: newMsg } = req.body;
        let updatedChat = await Chat.findByIdAndUpdate(id, { msg: newMsg }, { runValidators: true, new: true });
        console.log(updatedChat);
        res.redirect("/chats");
    }
    catch (err) {
        next(err);
    }
});

//New Route
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});

//Edit route
app.get("/chats/:id/edit", async (req, res) => {
    try {
        let { id } = req.params;
        let chat = await Chat.findById(id);
        res.render("edit.ejs", { chat });
    } catch (err) {
        next(err);
    }
});

//Destroy route
app.delete("/chats/:id", async (req, res) => {
    try{
        let { id } = req.params;
        let deletedChat = await Chat.findByIdAndDelete(id);
        console.log(deletedChat);
        res.redirect("/chats");
    }catch(err){
        next(err);
    }
})