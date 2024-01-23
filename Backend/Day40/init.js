const mongoose = require("mongoose");
const Chat = require("./models/chat.js");



main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
let allChats=[
    {
        from: "Barun",
        to: "Chinki",
        msg: "I Love You",
        created_at: new Date()
    },
    {
        from: "Barun",
        to: "Gudli",
        msg:"Please Save me!",
        created_at: new Date(),
    },
    {
        from: "Gudli",
        to: "Barun",
        msg:"yess I will",
        created_at: new Date(),
    },
    {
        from: "Chinki",
        to: "Barun",
        msg:"why are you always complaining",
        created_at: new Date(),
    },
    {
        from: "Gudli",
        to: "Barun",
        msg:"I am here",
        created_at: new Date(),
    },
    {
        from: "Barun",
        to: "Chinki",
        msg:"I will never complain again",
        created_at: new Date(),
    }
]
Chat.insertMany(allChats);

