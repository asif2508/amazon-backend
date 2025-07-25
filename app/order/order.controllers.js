const catchAsync = require("../../shared/catchAsync");
const sendResponse = require("../../shared/sendResponse");
const OrderService = require("./order.service");

const createCheckoutSession = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await OrderService.createCheckoutSession(payload);
  sendResponse(
    res,
    200,
    true,
    "checkout sessions created successfully",
    result
  );
});

const markAsSuccessful = catchAsync(async (req, res) => {
  const orderId = req.params.id;
  const result = await OrderService.markAsSuccessful(orderId);
  const frontendUrl = "http://localhost:5173/success";
  res.redirect(frontendUrl);
});

const getAllOrders = catchAsync(async (req, res) => {
  const {page, limit} = req.query
  const result = await OrderService.getAllOrders(page, limit);
  sendResponse(res, 200, true, "Orders fetched successfully!", result);
});
const updateOrderStatus = catchAsync(async (req, res) => {
  const orderId = req.params.id;
  const status = req.body.status;
  const result = await OrderService.updateOrderStatus(orderId, status);
  sendResponse(res, 200, true, "Order status updated successfully!", result);
})

const getCustomerOrders = catchAsync(async (req, res) => {
  const email = req.params.email;
  const result = await OrderService.getCustomerOrders(email);
  sendResponse(res, 200, true, "Orders fetched successfully!", result);
});

const OrderControllers = {
  createCheckoutSession,
  markAsSuccessful,
  getAllOrders,
  updateOrderStatus,
  getCustomerOrders
};

module.exports = OrderControllers;
