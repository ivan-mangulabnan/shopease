import { createBrowserRouter, Navigate } from "react-router";
import Layout from "./layout/layout";
import Home from "./home/home";
import Cart from "./cart/cart";
import Shop from "./shop/shop";
import Products from "./products/products";

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/cart', element: <Cart /> },
      { path: '/shop',
        element: <Shop />,
        children: [
          { index: true, element: <Navigate to='shop/products' replace/> },
          { path: 'shop/products', element: <Products /> }
        ]
      }
    ]
  }
]

const router = createBrowserRouter(routes);

export { routes };
export default router;