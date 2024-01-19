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
},
});


const Book = mongoose.model("Book", bookSchema);
let book1 = new Book({
title: "Half Loved, Half Broken",
author: "Barun Aaryan",
price: 200
});
book1.save().then(res=>{
    console.log(res);
}).catch(err=>{
console.log(err);
});

