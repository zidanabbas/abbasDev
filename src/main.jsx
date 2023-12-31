import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Pages/Home";
import Profile from "./components/Pages/Profile";
import About from "./components/Pages/About";
import Project from "./components/Pages/Project";
import NotFound from "./components/Pages/NotFound";
import Client from "./components/Pages/Client";
import Portofolio from "./components/Pages/Portofolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <NotFound />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <NotFound />,
  },
  {
    path: "/project",
    element: <Project />,
    errorElement: <NotFound />,
  },
  {
    path: "/portofolio",
    element: <Portofolio />,
    errorElement: <NotFound />,
  },
  {
    path: "/clients",
    element: <Client />,
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
