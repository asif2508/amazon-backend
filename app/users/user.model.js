const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 100
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "customer",
        enum: ["customer", "admin"]
    },
},{timestamps: true})

const User = mongoose.model("User", userSchema)

module.exports = User