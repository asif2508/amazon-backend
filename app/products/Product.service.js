const Product = require("./product.model");

const createProduct = async (payload) => {
    const { name, price, description, images, category, quantity } = payload
    const result = await Product.create({ name, price, description, images, category, quantity });
    if(!result){
        throw new Error("Failed to create the product")
    }
    return result;
};

const ProductService = {
    createProduct
}

module.exports = ProductService