import { lazy } from "react";
import { createBrowserRouter } from "react-router";

import RootLayout from "./RootLayout";
import AdminLayout from "../features/auth/components/AdminLayout.jsx";
const Home = lazy(() => import("../features/info/pages/Home"));
const Product = lazy(() => import("../features/products/pages/Product"));
const Checkout = lazy(() => import("../features/products/pages/Checkout"));
const CreateProduct = lazy(() => import("../features/products/pages/CreateProduct"));
const LoginPage = lazy(() => import("../features/auth/Pages/LoginPage"));

const routes = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "create-product",
        element: <CreateProduct />,
      },
    ],
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/checkout/:id",
    element: <Checkout />,
  },
]);

export default routes;
