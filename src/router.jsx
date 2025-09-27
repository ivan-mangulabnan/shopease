import { createBrowserRouter } from "react-router";

const routes = [
  {
    path: '/',
    element: <p>I'm Here</p>
  }
]

const router = createBrowserRouter(routes);

export default router;