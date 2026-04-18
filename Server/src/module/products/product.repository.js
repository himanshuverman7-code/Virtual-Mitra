import ApiError from "../../shared/utils/ApiError.js";
import Product from "./product.model.js";

// Actual Shit Starts From Here

export const findProduct =  async ({ title, price, category }) => {
  try {
    return await Product.findOne({ title, price, category });
  } catch (error) {
    throw new ApiError(500, "Error occured while finding product");
  }
};

export const createProduct = async (productDetails) => {
  try {
    return await Product.create(productDetails);
  } catch (error) {
    throw new ApiError(
      500,
      "Error occured while creating new product: ",
    );
  }
};

export const findProductById = async (id) => {
  try {
    return await Product.findById(id);
  } catch (error) {
    throw new ApiError(500, "Error occured while finding product");
  }
};

export const findAllProduct = async (pages = 1, limit = 10) => {
  try {
    return await Product.find()
      .sort({ createdAt: -1 })
      .skip((pages - 1) * limit)
      .limit(limit);
  } catch (error) {
    throw new ApiError(500, "Error occured while finding all product");
  }
};

export const updateProduct = async (id, updateDetails) => {
  try {
    return await Product.findByIdAndUpdate(id, updateDetails, {
      returnDocument: "after",
      runValidators: true,
    });
  } catch (error) {
    throw new ApiError(500, "Error occured while updating product");
  }
};

export const deleteProduct = async (id) => {
  try {
    return await Product.findByIdAndDelete(id);
  } catch (error) {
    throw new ApiError(500, "Error occured while deleting product: " + id);
  }
};
