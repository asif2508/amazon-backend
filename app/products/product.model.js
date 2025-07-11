const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    images: {
        type: [String]
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: "Category",
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
}, {timestamps: true})

const Product = mongoose.model("Product", productSchema)

module.exports = Product


// Mobile Phones, laptops, watches