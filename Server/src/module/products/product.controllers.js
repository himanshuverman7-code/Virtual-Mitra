import asyncHandler from "../../shared/utils/asyncHandler.js";
import {
  successResponse,
  sendResponse,
} from "../../shared/utils/responseHandler.js";
import * as productRep from "./product.repository.js";
import * as productServices from "./product.services.js";
import {
  PRODUCT_MESSAGES,
  HTTP_STATUS,
} from "../../shared/constants/messages.js";
import ApiError from "../../shared/utils/ApiError.js";

// Actual Shit Starts From Here

export const getAllProducts = asyncHandler(async (req, res) => {
  const { page, limit } = req.query;
  const products = await productRep.findAllProduct(page, limit);
  sendResponse(res, HTTP_STATUS.OK, PRODUCT_MESSAGES.PRODUCTS_FETCHED, {
    products,
  });
});

export const getProduct = asyncHandler(async (req, res) => {
  const product = await productRep.findProductById(req.params.id);
  if (!product) throw new ApiError(400, "Product does not exist");
  sendResponse(res, HTTP_STATUS.OK, PRODUCT_MESSAGES.PRODUCT_FETCHED, {
    product,
  });
});

export const createProduct = asyncHandler(async (req, res) => {
  const product = await productServices.createProductService({
    body: req.body,
    buffer: req.file.buffer,
  });

  sendResponse(res, HTTP_STATUS.CREATED, PRODUCT_MESSAGES.PRODUCT_CREATED, {
    product,
  });
});

export const updateProduct = asyncHandler(async (req, res) => {
  const product = await productRepo.updateProduct(req.params.id, req.body);
  sendResponse(res, HTTP_STATUS.OK, PRODUCT_MESSAGES.PRODUCT_UPDATED, {
    product,
  });
});

export const deleteProduct = asyncHandler(async (req, res) => {
  await productRep.deleteProduct(req.params.id);
  sendResponse(res, HTTP_STATUS.OK, PRODUCT_MESSAGES.PRODUCT_DELETED);
});
