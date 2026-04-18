import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/slice/auth.slice";
import productReducer from "@/features/products/slice/product.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
  },
});