import { createBrowserRouter } from "react-router";
import Layout from "./components/layout/layout.jsx";
import Home from "./components/home";
import Shop from "./components/shop";
import Cart from "./components/cart";

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'shop', element: <Shop /> },
      { path: 'cart', element: <Cart /> }
    ]
  }
]

const router = createBrowserRouter(routes);

export default router;