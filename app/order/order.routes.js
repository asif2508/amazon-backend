const express = require("express");
const OrderControllers = require("./order.controllers");

const router = express.Router();

router.post("/create-checkout-session", OrderControllers.createCheckoutSession)
router.get("/mark-as-successful/:id", OrderControllers.markAsSuccessful)
module.exports = router