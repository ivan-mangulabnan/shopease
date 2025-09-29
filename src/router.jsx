import { createBrowserRouter } from "react-router";
import Layout from "./layout/layout";
import Home from "./home/home";
import Cart from "./cart/cart";
import Shop from "./shop/shop";

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'cart', element: <Cart /> },
      { path: 'shop', element: <Shop /> }
    ]
  }
]

const router = createBrowserRouter(routes);

export { routes };
export default router;