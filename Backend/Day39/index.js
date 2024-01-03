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