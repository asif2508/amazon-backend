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
      message: "Failed to create the user",
    });
  }
};

const UserControllers = {
  createUser,
};

module.exports = UserControllers;
