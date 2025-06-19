const express = require("express");
const UserControllers = require("./user.controllers");

const router = express.Router();

router.post("/create-user", UserControllers.createUser)
router.post("/signin", UserControllers.signin)
router.get("/get-all-users", UserControllers.getAllUsers)
router.get("/get-user-by-id/:id", UserControllers.getUserById)
router.delete("/delete-user-by-id/:id", UserControllers.deleteUserById)
router.patch('/update-user-by-id/:id', UserControllers.updateUserById)
module.exports = router

