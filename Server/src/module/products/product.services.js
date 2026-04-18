import uploadBuffer from "../../shared/services/cloudStorage.services.js";
import ApiError from "../../shared/utils/ApiError.js";
import * as productRepo from "./product.repository.js";

// Actual Shit Starts From Here

export const createProductService = async ({body, buffer}) => {
  const isProductExist = await productRepo.findProduct(body);
  if (isProductExist) {
    throw new ApiError(
      409,
      "Product already exist with this name, category & price",
    );
  }  

  const thumbnail = await uploadBuffer({
    buffer,
    fileName: body.title,
    folder: '/products'
  })
  
  // Creating new product
  const product = await productRepo.createProduct({
    thumbnail: thumbnail.url,
    ...body,
  });

  return product;
};

export const updateProductService = async (productId, productDetails) => {
  const product = await productRepo.updateProduct(productId, productDetails);
  return product;
};
