const express = require("express");
const OrderControllers = require("./order.controllers");
const auth = require("../../middlewares/auth");

const router = express.Router();

router.post("/create-checkout-session", OrderControllers.createCheckoutSession)
router.get("/mark-as-successful/:id", OrderControllers.markAsSuccessful)
router.get("/get-all-orders", auth(['admin']) , OrderControllers.getAllOrders)
router.get("/get-customer-orders/:email", auth(['customer']) , OrderControllers.getCustomerOrders)
router.patch("/update-order-status/:id", auth(['admin']) , OrderControllers.updateOrderStatus)
module.exports = router