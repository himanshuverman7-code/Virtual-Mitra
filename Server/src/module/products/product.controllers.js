import asyncHandler from "../../shared/utils/asyncHandler.js";
import * as productRep from "./product.repository.js";
import * as productServices from "./product.services.js";

// Actual Shit Starts From Here

export const getAllProducts = asyncHandler(async (req, res) => {
  const { page, limit } = req.query;
  const products = await productRep.findAllProduct(page, limit);
  res.status(200).json({ products });
});

export const getProduct = asyncHandler(async (req, res) => {
  const product = await productRep.findProductById(req.params.id);
  res.status(200).json({ product });
});

export const createProduct = asyncHandler(async (req, res) => {
  const product = await productServices.createProductService(
    req.body,
    req.user.id,
  );
  res.status(201).json({ product });
});

export const updateProduct = asyncHandler(async (req, res) => {
  const product = await productServices.updateProductService(
    req.params.id,
    req.body,
  );
  res.status(200).json({ product });
});

export const deleteProduct = asyncHandler(async (req, res) => {
  await productRep.deleteProduct(req.params.id);
  res.status(200).json({ message: "Product Deleted successfully" });
});
