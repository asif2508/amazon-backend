const express = require("express");
const CategoryControllers = require("./category.controllers");
const upload = require("../../middlewares/fileUpload");

const router = express.Router();

router.post("/create-category",upload.single('file'), CategoryControllers.createCategory)
router.get("/get-all-categories", CategoryControllers.getAllCategories)
module.exports = router