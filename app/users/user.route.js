const express = require("express");
const UserControllers = require("./user.controllers");

const router = express.Router();

router.post("/create-user", UserControllers.createUser)

module.exports = router

