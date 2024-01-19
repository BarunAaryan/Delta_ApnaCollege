const mongoose = require('mongoose');
//mongoose.connect('mongodb://127.0.0.1:27017/test');
//the same work is done asynchronously by this function

//if an error catch it

main().then((res)=>{
    console.log("Connection Successful");
})
.catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test'); 
}
//schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
}); 
//models
const User = mongoose.model("User", userSchema);

//insert in mongoose
// const user1= new User({
//     name:"Barun",
//     email: "barunaryan@gmail.com",
//     age: 21,
// });
//to save the data in mongoose
// user1.save().then();

// const user2= new User({
//     name:"Soumitri",
//     email: "soumitri@gmail.com",
//     age: 21,
// });
// //to save the data in mongoose
// user2.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

//insert Many
// User.insertMany([
//     {name: "Barkha", email: "barkha@gmail.com", age: 42},
//     {name: "Gudli", email: "gudli@gmail.com", age: 22},
//     {name: "Trisha", email: "trisha@gmail.com", age: 32},

// ]).then((res)=>{
//     console.log(res);
// });

//Find in Mongoose 
// User.findOne({age: {$gt: 30}})
// .then((res)=>{
// console.log(res);
// })
// .catch((err)=>{
// console.log(err);
// });

// User.updateOne({age: {$gt:28}}, {age: 39})
// .then((res)=>{
// console.log(res);
// })
// .catch((err)=>{
// console.log(err);
// });

// User.findOneAndUpdate({name: "Gudli"}, {age: 39}, {new: true})
// .then((res)=>{
// console.log(res);
// })
// .catch((err)=>{
// console.log(err);
// });

//delete 
User.findIdAndDelete("65a699413809d4a3731d5616")
.then((res)=>{
console.log(res);
})
.catch((err)=>{
console.log(err);
});


