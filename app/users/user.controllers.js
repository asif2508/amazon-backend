const UserService = require("./user.service");

const createUser = async (req, res) => {
  try {
    const payload = req.body;
    const result = await UserService.createUser(payload);

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message || "Failed to create the user",
    });
  }
};

const signin = async (req, res) => {
  try {
    const payload = req.body;
    const result = await UserService.signin(payload);

    return res.status(201).json({
      success: true,
      message: "sign in successful successfully",
      data: result,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message || "sign in failed!",
    });
  }
};


const getAllUsers = async (req, res) => {
  try {
    const result = await UserService.getAllUsers();

    return res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: result,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message || "Failed to fetch the users!",
    });
  }
};


const getUserById = async (req, res) => {
  try {
    const id = req.params.id
    const result = await UserService.getUserById(id);

    return res.status(200).json({
      success: true,
      message: "User by id fetched successfully",
      data: result,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message || "Failed to fetch the user by id!",
    });
  }
};


const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id
    const result = await UserService.deleteUserById(id);

    return res.status(200).json({
      success: true,
      message: "User by id delete successfully",
      data: result,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message || "Failed to delete the user by id!",
    });
  }
};

const updateUserById = async (req, res) => {
  try {
    const id = req.params.id
    const payload = req.body
    const result = await UserService.updateUserById(id, payload);

    return res.status(200).json({
      success: true,
      message: "User by id update successfully",
      data: result,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message || "Failed to update the user by id!",
    });
  }
};



const UserControllers = {
  createUser,
  signin,
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUserById
};

module.exports = UserControllers;
