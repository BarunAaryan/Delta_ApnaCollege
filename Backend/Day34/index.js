const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const methodOverride = require('method-override');

const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    // console.log(req.body);
    let id = uuidv4();
    let { username, content } = req.body;
    posts.push({ id, username, content });

    // res.send("post request working");
    res.redirect("/posts");
});
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    // console.log(newContent);
    console.log(id);
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post });
});

let posts = [
    {
        id: uuidv4(),
        username: "Barun",
        content: "Barun has no friends"
    },
    {
        id: uuidv4(),
        username: "Soumitri",
        content: "Does not like Barun"
    },
    {
        id: uuidv4(),
        username: "Trisha",
        content: "The Best person in the world."
    },

];
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
})
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    // console.log(post);
    // res.send("Request Working");
    res.render("show.ejs", { post });
})

app.listen(port, () => {
    console.log("Listening to port 3000");
}) ;

//DELETE
app.delete("/posts/:id", (req, res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=> id !==p.id);
    // res.send("Delete sucessful");
    res.redirect("/posts");
}); 