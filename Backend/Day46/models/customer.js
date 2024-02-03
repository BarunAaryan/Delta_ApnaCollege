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

const orderSchema = new Schema({
item : String,
price: Number,
});

const customerSchema = new Schema({
name: String,
orders: [
    {
        type: Schema.Types.ObjectId,
        ref: "Order"  //The Object id will be from Order document
    }
],
});

//we want -> when we are deleting the customer=> some work is done before that or after that
// customerSchema.pre("findOneAndDelete", async()=>{
//     console.log("PRE MIDDLEWARE");
// });
customerSchema.post("findOneAndDelete", async(customer)=>{
    if(customer.orders.length){
     let res = await Order.deleteMany({_id: {$in: customer.orders }});
     console.log(res);
    }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// const findCustomer = async()=>{
//     let result = await Customer.find({}).populate("orders");
//     console.log(result[0]);
// };
// findCustomer();



// const addCustomer = async()=>{
//     let cust1= new Customer({
// name: "Barun Aaryan",
//     });
//     let order1= await  Order.findOne({item : "Chips"});
//     let order2= await  Order.findOne({item : "Chocolate"});

//     cust1.orders.push(order1);
//     cust1.orders.push(order2);

//     let result = await cust1.save();
//     console.log(result);
// };

// addCustomer();

// const addOrders = async()=>{
//     let res= await Order.insertMany([
//         {item: "Samosa", price: 12},
//         {item: "Chips", price: 10},
//         {item: "Chocolate", price: 40},
//     ]);
//         console.log(res);
// };

// addOrders();


//Day -47
// const addCust = async ()=>{
//     let newCust = new Customer({
//         name: "Soumitri Sahu"
//     });
//     let newOrder= new Order({
//         item: "Pizza",
//         price: 250,
//     });

//     newCust.orders.push(newOrder);
//     await newOrder.save();
//     await newCust.save();

//     console.log("Added new Customer");

// };
// addCust();

//Delete Customer
const delCust = async ()=>{
    let data = await Customer.findByIdAndDelete("65bca896f5972e90ce7914df");
    console.log(data)
};

delCust();