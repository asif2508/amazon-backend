const express = require("express");
const ProductControllers = require("./Product.controllers");
const upload = require("../../middlewares/fileUpload");

const router = express.Router();

router.post("/create-product",upload.single('file'), ProductControllers.createProduct)
router.post('/uploadFile', upload.single('file') ,ProductControllers.uploadFile)
router.get("/get-all-products", ProductControllers.getAllProducts)
module.exports = router