import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Landing from "../layouts/Landing";
import Product from "../pages/Product";
import Gallery from "../pages/Gallery";
import Chat from "../pages/Chat";

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
            path: "gallery",
            element: <Gallery />
        },
        // {
        //     path: "chat",
        //     element: <Chat />
        // }
    ]
  }
]);
