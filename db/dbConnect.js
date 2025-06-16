const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const dbConnect = async() =>{
    mongoose.connect(process.env.DB_URL)
    .then(()=>{
        console.log("db connected")
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = dbConnect