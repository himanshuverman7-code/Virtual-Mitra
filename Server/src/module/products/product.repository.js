import ApiError from "../../shared/utils/ApiError.js";
import Product from "./product.model.js";

// Actual Shit Starts From Here

export const createProduct = async (productDetails) => {
  try {
    return await Product.create(productDetails);
  } catch (error) {
    if (
      JSON.stringify(error.keyPattern) ===
      JSON.stringify({ name: 1, category: 1, price: 1, user: 1 })
    ) {
      throw new ApiError(
        409,
        "Product already exist with this name, category & price",
      );
    }
    throw new ApiError(
      500,
      "Error occured while creating new product: " + error,
    );
  }
};

export const findProductById = async (id) => {
  try {
    return await Product.findById(id).populate("user", "name email");
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
