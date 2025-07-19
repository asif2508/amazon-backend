const catchAsync = require("../../shared/catchAsync");
const sendResponse = require("../../shared/sendResponse");
const OrderService = require("./order.service");


const createCheckoutSession = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await OrderService.createCheckoutSession(payload)
  sendResponse(res, 200, true, "checkout sessions created successfully", result);
});


const markAsSuccessful = catchAsync(async (req, res) => {
  const orderId = req.params.id;
  const result = await OrderService.markAsSuccessful(orderId)
  const frontendUrl = 'http://localhost:5173/success'
  res.redirect(frontendUrl)
});

const OrderControllers = {
  createCheckoutSession,
  markAsSuccessful
};

module.exports = OrderControllers;