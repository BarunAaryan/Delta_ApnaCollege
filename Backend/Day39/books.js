const mongoose = require('mongoose');
//mongoose.connect('mongodb://127.0.0.1:27017/test');
//the same work is done asynchronously by this function

//if an error catch it

main().then((res)=>{
    console.log("Connection Successful");
})
.catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon'); 
}

const bookSchema= new mongoose.Schema({
title:{
    type: String,
    required: true,
},
author:{
    type: String,
},
price:{
    type: Number,
    min:[0, "price is too low"],
},
discount:{
    type: Number,
    //Schema type Options
    default:0,
},
category:{
    type: String,
    enum:["fiction", "non-fiction"],
}
});


const Book = mongoose.model("Book", bookSchema);
// let book1 = new Book({
// title: "Half Loved, Half Broken",
// author: "Barun Aaryan",
// price: 200, 
// });
// book1.save().then(res=>{
//     console.log(res);
// }).catch(err=>{
// console.log(err);
// });
// let book2 = new Book({
// title: "Gone Girl",
// price: 399,
// });
// book2.save().then(res=>{
//     console.log(res);
// }).catch(err=>{
// console.log(err);
// });

// let book3 = new Book({
// title: "Marvel Comics",
// price: 399,
// category: "fiction",
// });
// book3.save().then(res=>{
//     console.log(res);
// }).catch(err=>{
// console.log(err);
// });

Book.findByIdAndUpdate("65ae3266894b88f83318d5b1", {price: -500},  {runValidators: true})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
console.log(err.errors.price.properties.message);
});
