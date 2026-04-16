import { Router } from "express";
import * as productController from "./product.controllers.js";

// Importing Middlewares
import authenticate, {
  authAdmin,
} from "../../shared/middlewares/authenticate.middleware.js";

const productsRoutes = Router();

// Actual Shit Starts From Here

productsRoutes.get("/", productController.getAllProducts);

productsRoutes.get("/:id", productController.getProduct);

productsRoutes.post(
  "/create",
  authenticate,
  authAdmin,
  productController.createProduct,
);

productsRoutes.patch(
  "/update/:id",
  authenticate,
  authAdmin,
  productController.updateProduct,
);

productsRoutes.delete(
  "/delete/:id",
  authenticate,
  authAdmin,
  productController.deleteProduct,
);

export default productsRoutes;
