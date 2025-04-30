// src/Routes/Routes.jsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Client from "../Layout/Client";
import Home from "../Pages/Home/Home";
import AboutChef from "../Components/AboutChef";
import Products from "../Components/Products";
import Gallery from "../Components/Gallery";
import SignatureDishes from "../Components/SignatureDishes";
import ContactSection from "../Components/ContactSection";

// Add your future route components here
const router = createBrowserRouter([
  {
    path: "/",
    element: <Client />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <AboutChef />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/gallery',
        element: <Gallery />
      },
      {
        path: '/signature-dishes',
        element: <SignatureDishes />
      },
      {
        path: '/contact',
        element: <ContactSection />
      }
    ]
  },

]);

export default router;
