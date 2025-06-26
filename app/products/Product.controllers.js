const catchAsync = require("../../shared/catchAsync");
const sendResponse = require("../../shared/sendResponse");
const ProductService = require("./Product.service");

const createProduct = catchAsync(async(req, res)=>{
    const files = req.file
    const {data} = req.body;
    const payload = JSON.parse(data)
    const result = await ProductService.createProduct(payload, files);
    sendResponse(res, 201, true, "Product created successfully", result);
})

const uploadFile= catchAsync(async(req, res)=>{
    const payload = req.file;
    const result = await ProductService.uploadFile(payload);
    sendResponse(res, 201, true, "file uploaded successfully", result);
})

const getAllProducts = catchAsync(async(req, res)=>{
    const result = await ProductService.getAllProducts();
    sendResponse(res, 200, true, "All products fetched successfully", result);
})

const ProductControllers = {
    createProduct,
    uploadFile,
    getAllProducts
}

module.exports = ProductControllers