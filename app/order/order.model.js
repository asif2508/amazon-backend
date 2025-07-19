const { default: mongoose } = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    products:[
      {
        productId: {
          type: mongoose.Schema.ObjectId,
          ref: "Product",
        },
        quantity: {
          type: Number,
          required: true,
        },
      }
    ],
    status:{
      type: String,
      enum: ["pending", "paid", "shipped", "completed", "cancelled"],
      default: "pending",
      required: true,
    },
    customerId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    price: {
      type: Number,
      required: true,
    },
    shipping: {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
