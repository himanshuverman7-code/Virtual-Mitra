import { Router } from "express";

// Importing Application Routes
import authRouter from "../module/auth/auth.routes.js";
import productsRoutes from "../module/products/product.routes.js";

const router = Router();

// Implementing Application Routes
router.use("/auth", authRouter);
router.use('/products', productsRoutes)


export default router;