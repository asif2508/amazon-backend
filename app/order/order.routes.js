const express = require("express");
const OrderControllers = require("./order.controllers");
const auth = require("../../middlewares/auth");

const router = express.Router();

router.post("/create-checkout-session", OrderControllers.createCheckoutSession)
router.get("/mark-as-successful/:id", OrderControllers.markAsSuccessful)
router.get("/get-all-orders", auth(['admin']) , OrderControllers.getAllOrders)
module.exports = router