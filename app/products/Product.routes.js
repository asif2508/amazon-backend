const express = require("express");
const ProductControllers = require("./Product.controllers");
const upload = require("../../middlewares/fileUpload");

const router = express.Router();

router.post("/create-product",upload.single('file'), ProductControllers.createProduct)
router.post('/uploadFile', upload.single('file') ,ProductControllers.uploadFile)
router.get("/get-all-products", ProductControllers.getAllProducts)
router.delete("/delete-product-by-id/:id", ProductControllers.deleteProductById)
router.post('/update-product-by-id/:id',upload.single('file'), ProductControllers.updateProductById)
module.exports = router