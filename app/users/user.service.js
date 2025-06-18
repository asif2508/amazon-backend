const User = require("./user.model")

const createUser = async(payload)=>{
    const {name, email, password, role} =payload

    // Your task: 
    // 1. check if user already exist
    // 2. if user exist return "User already exist"
    // 3. if user does not exist create user
    // 4. hash the password and save the hashed version
    const result = await  User.create({name, email, password, role})
    if(!result){
        return "Failed to create user"
    }
    return result
}

const UserService ={
    createUser
}

module.exports = UserService