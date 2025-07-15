const catchAsync = require("../../shared/catchAsync");
const sendResponse = require("../../shared/sendResponse");
const OrderService = require("./order.service");


const createCheckoutSession = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await OrderService.createCheckoutSession(payload)
  sendResponse(res, 200, true, "checkout sessions created successfully", result);
});

const OrderControllers = {
  createCheckoutSession,
};

module.exports = OrderControllers;