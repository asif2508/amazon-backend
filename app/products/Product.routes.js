const express = require("express");
const ProductControllers = require("./Product.controllers");

const router = express.Router();

router.post("/create-product", ProductControllers.createProduct)

module.exports = router