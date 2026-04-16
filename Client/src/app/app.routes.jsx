import { createBrowserRouter } from "react-router";
import Product from "../features/products/pages/Product";
import Checkout from "../features/products/pages/Checkout";

const routes = createBrowserRouter([
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
