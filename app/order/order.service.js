const Product = require("../products/product.model");

require("dotenv").config();
const User = require("../users/user.model");
const Order = require("./order.model");
const stripe = require("stripe")(process.env.STRIPE_SK);

const YOUR_DOMAIN = "http://localhost:5000";
const createCheckoutSession = async (payload) => {
  const { cart, shipping } = payload;

  const checkOutItems = await Promise.all(
    cart.map(async (item) => {
      const product = await Product.findById(item.productId);
      if (!product) {
        throw new Error(`Product not found: ${item.productId}`);
      }
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name,
          },
          unit_amount: product.price * 100, // Convert to cents for Stripe
        },
        quantity: item.quantity,
      };
    })
  );

  const user = await User.findOne({ email: shipping.email });
  let total = 0;
  for (const i of checkOutItems) {
    total = total + (i?.price_data?.unit_amount / 100) * i?.quantity;
  }
  const data = {
    products: cart,
    shipping,
    customerId: user?._id,
    price: total,
  };

  const order = await Order.create(data);

  const session = await stripe.checkout.sessions.create({
    line_items: checkOutItems,
    mode: "payment",
    success_url: `${YOUR_DOMAIN}/api/order/mark-as-successful/${order._id}`,
    cancel_url: `${YOUR_DOMAIN}/api/order/cancel/${order._id}`,
  });

  return session?.url;
};

const markAsSuccessful = async (orderId) => {
  const findOrder = await Order.findById(orderId);

  if (!findOrder) {
    throw new Error("Order not found!");
  }

  if (findOrder?.status !== "pending") {
    throw new Error("Order is not pending!");
  }
  const result = await Order.findByIdAndUpdate(orderId, { status: "paid" });
  return result;
};

const getAllOrders = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit;
  const result = await Order.find({})
    .sort({ createdAt: -1 })
    .populate("products.productId")
    .skip(skip)
    .limit(limit);
    const totalOrders = await Order.countDocuments();
    const totalPages = Math.ceil(totalOrders / limit); 
  return {
    data: result,
    totalOrders,
    totalPages
  };
};

const OrderService = {
  createCheckoutSession,
  markAsSuccessful,
  getAllOrders,
};

module.exports = OrderService;
