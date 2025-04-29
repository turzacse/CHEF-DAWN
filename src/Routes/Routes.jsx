// src/Routes/Routes.jsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Client from "../Layout/Client";
import Home from "../Pages/Home/Home";

// Add your future route components here
const router = createBrowserRouter([
  {
    path: "/",
    element: <Client />,
    children: [
        {
            path: '/',
            element: <Home/>
        },
    ]
  },
 
]);

export default router;
