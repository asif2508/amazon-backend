const catchAsync = require("../../shared/catchAsync");
const sendResponse = require("../../shared/sendResponse");
const ProductService = require("./Product.service");

const createProduct = catchAsync(async (req, res) => {
  const files = req.file;
  const { data } = req.body;
  console.log(files, data);
  const payload = JSON.parse(data);
  const result = await ProductService.createProduct(payload, files);
  sendResponse(res, 201, true, "Product created successfully", result);
});

const uploadFile = catchAsync(async (req, res) => {
  const payload = req.file;
  const result = await ProductService.uploadFile(payload);
  sendResponse(res, 201, true, "file uploaded successfully", result);
});

const getAllProducts = catchAsync(async (req, res) => {
  const result = await ProductService.getAllProducts();
  sendResponse(res, 200, true, "All products fetched successfully", result);
});
const deleteProductById = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await ProductService.deleteProductById(id);
  sendResponse(res, 200, true, "Product by id deleted successfully", result);
});

const updateProductById = catchAsync(async (req, res) => {
  const id = req.params.id;
  const { data } = req.body;
  const payload = JSON.parse(data);
  const result = await ProductService.updateProductById(id, payload);
  sendResponse(res, 200, true, "Product by id updated successfully", result);
});
const ProductControllers = {
  createProduct,
  uploadFile,
  getAllProducts,
  deleteProductById,
  updateProductById,
};

module.exports = ProductControllers;
