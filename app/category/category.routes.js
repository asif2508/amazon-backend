const express = require("express");
const CategoryControllers = require("./category.controllers");
const upload = require("../../middlewares/fileUpload");

const router = express.Router();

router.post("/create-category",upload.single('file'), CategoryControllers.createCategory)

module.exports = router