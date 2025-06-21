const catchAsync = require("../../shared/catchAsync");
const sendResponse = require("../../shared/sendResponse");
const ProductService = require("./Product.service");

const createProduct = catchAsync(async(req, res)=>{
    const payload = req.body;
    const result = await ProductService.createProduct(payload);
    sendResponse(res, 201, true, "Product created successfully", result);
})

const uploadFile= catchAsync(async(req, res)=>{
    const payload = req.file;
    const result = await ProductService.uploadFile(payload);
    sendResponse(res, 201, true, "file uploaded successfully", result);
})

const ProductControllers = {
    createProduct,
    uploadFile
}

module.exports = ProductControllers