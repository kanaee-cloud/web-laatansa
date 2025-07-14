import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Landing from "../layouts/Landing";
import Contact from "../pages/Contact";

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
            path: "about",
            element: <About />
        },
        {
            path: "contact",
            element: <Contact />
        }
    ]
  }
]);
