import { lazy } from "react";
import { createBrowserRouter } from "react-router";
const Product  = lazy(()=>import("../features/products/pages/Product"));
const Checkout  = lazy(()=>import("../features/products/pages/Checkout"));
const LoginPage  = lazy(()=>import("../features/auth/Pages/LoginPage"));

const routes = createBrowserRouter([
  {
    index: true,
    element: <h1>Home</h1>
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
