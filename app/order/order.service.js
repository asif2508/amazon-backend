const Product = require('../products/product.model');

require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_SK);

const YOUR_DOMAIN = 'http://localhost:5000';
const createCheckoutSession = async(payload) =>{

    const {cart} = payload

    const checkOutItems = await Promise.all(
      cart.map(async (item) => {
        const product = await Product.findById(item.productId);
        if (!product) {
          throw new Error(`Product not found: ${item.productId}`);
        }
        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: product.name,
            },
            unit_amount: product.price * 100, // Convert to cents for Stripe
          },
          quantity: item.quantity,
        };
      })
    );
    const session = await stripe.checkout.sessions.create({
        line_items: checkOutItems,
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}/success`,
        cancel_url: `${YOUR_DOMAIN}/cancel`,
    })

  return session
}

const OrderService = {
    createCheckoutSession
}

module.exports = OrderService