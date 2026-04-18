import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import Home from "../features/info/pages/Home";
const Product  = lazy(()=>import("../features/products/pages/Product"));
const Checkout  = lazy(()=>import("../features/products/pages/Checkout"));
const LoginPage  = lazy(()=>import("../features/auth/Pages/LoginPage"));

const routes = createBrowserRouter([
  {
    index: true,
    element: <Home />
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "/checkout/:id",
    element: <Checkout />,
  },
]);

export default routes;
