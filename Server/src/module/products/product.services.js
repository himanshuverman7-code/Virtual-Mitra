import ApiError from "../../shared/utils/ApiError.js";
import * as productRepo from "./product.repository.js";

// Actual Shit Starts From Here

export const createProductService = async (productDetails, userId) => {
  // Creating new product
  const product = await productRepo.createProduct({
    ...productDetails,
    user: userId,
  });

  return product;
};

export const updateProductService = async (productId, productDetails) => {
  const product = await productRepo.updateProduct(productId, productDetails);
  return product;
};
