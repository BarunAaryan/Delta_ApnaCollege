const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        url: {
            type: String,
            default: "https://unsplash.com/photos/coconut-palm-trees-in-hotel-lobby-_dS27XGgRyQ",
        set:(v)=> v===""? "" : v,
        },
        filename: String,

        
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;