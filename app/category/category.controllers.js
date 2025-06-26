const catchAsync = require("../../shared/catchAsync");
const sendResponse = require("../../shared/sendResponse");
const CategoryService = require("./category.service");


const createCategory = catchAsync(async(req, res)=>{
    const files = req.file
    const {data} = req.body;
    const payload = JSON.parse(data)
    const result = await CategoryService.createCategory(payload, files);
    sendResponse(res, 201, true, "Category created successfully", result);
})

const CategoryControllers = {
    createCategory
}

module.exports = CategoryControllers