const express = require("express");
const OrderControllers = require("./order.controllers");

const router = express.Router();

router.post("/create-checkout-session", OrderControllers.createCheckoutSession)

module.exports = router