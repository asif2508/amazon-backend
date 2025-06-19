const User = require("./user.model");
const bcrypt = require("bcrypt");
const createUser = async (payload) => {
  const { name, email, password, role } = payload;
  const isExist = await User.findOne({ email: email });
  if (isExist) {
    throw new Error("User already exist. Please use a different email!");
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const result = await User.create({ name, email, password: hashedPassword, role });
  if (!result) {
    throw new Error("Failed to create the user");
  }
  return result;
};

const signin = async (payload) =>{
    const {email, password} = payload

    // checking if email and password both are available
    if(!email || !password){
        throw new Error("Please provide email and password")
    }


    // if the user exist
    const isExist = await User.findOne({email})
    if(!isExist){
        throw new Error("Email is wrong!")
    }


    // checking if the password is correct
    const isPasswordCorrect = await bcrypt.compare(password, isExist.password)

    if(!isPasswordCorrect){
        throw new Error("Password is wrong!")
    }

    return isExist

}

const getAllUsers = async () =>{
    const result = await User.find({}).sort({createdAt: -1})
    return result
}

const getUserById = async(id) =>{
    const result = await User.findById(id)
    return result
}

const deleteUserById = async(id) =>{
    const result = await User.findByIdAndDelete(id)

    if(!result){
        throw new Error("Failed to delete the user!")
    }

    return result
}

const updateUserById = async(id, payload) => {
    const result = await User.findByIdAndUpdate(id, payload, {new: true})
    if(!result){
        throw new Error("Failed to update the user!")
    }
    return result
}


const UserService = {
  createUser,
  signin,
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUserById
};

module.exports = UserService;
