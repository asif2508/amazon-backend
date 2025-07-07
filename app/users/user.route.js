const express = require("express");
const UserControllers = require("./user.controllers");
const auth = require('../../middlewares/auth')
const router = express.Router();

router.post("/create-user", UserControllers.createUser)
router.post("/signin", UserControllers.signin)
router.get("/get-all-users", auth(['admin']) ,UserControllers.getAllUsers)
router.get("/auto-login", auth(['admin', 'customer']) ,UserControllers.autoLogin)
router.get("/get-user-by-id/:id", UserControllers.getUserById)
router.delete("/delete-user-by-id/:id", auth(['admin']) ,UserControllers.deleteUserById)
router.patch('/update-user-by-id/:id', auth(['admin', 'customer']) ,UserControllers.updateUserById)
module.exports = router

