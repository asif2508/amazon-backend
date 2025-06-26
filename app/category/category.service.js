const Category = require("./category.model");

const createCategory = async (payload, icon) => {
    const {name, slug} = payload
    const  iconURL = `http://localhost:5000/uploads/${icon.filename}`
    const isExist = await Category.findOne({slug})
    if(isExist){
        throw new Error("Category already exist")
    }
    const result = await Category.create({
        name,
        slug,
        icon: iconURL
    });
    if(!result){
        throw new Error("Failed to create the category")
    }
    return result;
};

const CategoryService = {
    createCategory
}
module.exports = CategoryService