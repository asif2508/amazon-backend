const express = require("express");
const ProductControllers = require("./Product.controllers");
const upload = require("../../middlewares/fileUpload");

const router = express.Router();

router.post("/create-product", ProductControllers.createProduct)
router.post('/uploadFile', upload.single('file') ,ProductControllers.uploadFile)
module.exports = router