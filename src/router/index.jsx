import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Landing from "../layouts/Landing";
import Contact from "../pages/Contact";
import Product from "../pages/Product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    children: [
        {
            index: true,
            element: <Home />
        },
        {
            path: "product",
            element: <Product />
        },
        {
            path: "contact",
            element: <Contact />
        }
    ]
  }
]);
