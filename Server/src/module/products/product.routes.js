import { Router } from "express";
import * as productController from "./product.controllers.js";

// Importing Middlewares
import authenticate, {
  authAdmin,
} from "../../shared/middlewares/authenticate.middleware.js";
import validate from "../../shared/middlewares/validate.middleware.js";
import { createProductSchema, updateProductSchema } from "./product.shemas.js";

const productsRoutes = Router();

// Actual Shit Starts From Here

productsRoutes.get("/", productController.getAllProducts);

productsRoutes.get("/:id", productController.getProduct);

productsRoutes.post(
  "/create",
  authenticate,
  authAdmin,
  validate(createProductSchema),
  productController.createProduct,
);

productsRoutes.patch(
  "/update/:id",
  authenticate,
  authAdmin,
  validate(updateProductSchema),
  productController.updateProduct,
);

productsRoutes.delete(
  "/delete/:id",
  authenticate,
  authAdmin,
  productController.deleteProduct,
);

export default productsRoutes;
