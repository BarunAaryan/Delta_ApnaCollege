const mongoose = require("mongoose");
const {Schema} = mongoose;

const MONGO_URL = "mongodb://127.0.0.1:27017/relationDemo";
main().then(() => {
    console.log("connected to db");
}).catch((err) => {
    console.log(err)
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

const userSchema = new Schema({
username: String,
email: String
});

const postSchema= new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async ()=>{
     let user=  await User.findOne({username: "Barnali"}) 
     //   let user1= new User({
    //     username: "Barnali",
    //     email: "barnali@gmail.com"
    // }); //we did comment out this as we have already pushed the data
    // let post1= new Post({
    //     content : "Hello World!",
    //     likes: 90
    // });
    let post2= new Post({
        content : "Bye Bye",
        likes: 98, 
    });
    // post1.user = user1;
    post2.user = user;

    // await user1.save();
    await post2.save ();
};

addData();

const getData = async ()=>{
    let result = await Post.findOne({}).populate("user");
    console.log(result);
};
getData();