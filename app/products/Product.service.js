const Product = require("./product.model");

const createProduct = async (payload, files) => {
    const { name, price, description, category, quantity } = payload
    const baseURL = "http://localhost:5000/uploads/"
    const {filename} = files //file-1750927143629-313136988.jpeg
    // http://localhost:5000/uploads/file-1750927143629-313136988.jpeg
    const result = await Product.create({ name, price, description, images: [`${baseURL}${filename}`], category, quantity });
    if(!result){
        throw new Error("Failed to create the product")
    }
    return result;
};

const uploadFile = (payload) =>{
    return payload
}

const getAllProducts = async () => {
    const result = await Product.find().populate("category")
    return result
}


const deleteProductById = async(id) =>{
    console.log("id", id)
    const result = await Product.findByIdAndDelete(id)
    if(!result){
        throw new Error("Failed to delete the product!")
    }
    return result
}

const updateProductById = async(id, payload) => {
    const result = await Product.findByIdAndUpdate(id, payload, {new: true})
    if(!result){
        throw new Error("Failed to update the product!")
    }
    return result
}

const ProductService = {
    createProduct,
    uploadFile,
    getAllProducts,
    deleteProductById,
    updateProductById
}

module.exports = ProductService