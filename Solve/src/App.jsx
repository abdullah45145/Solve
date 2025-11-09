import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import Errorpage from "./components/Errorpage";
import Home from "./pages/Home";
import AboutUs from "./pages/Aboutus";
import Services from "./pages/Services";
import Achievement from "./pages/Acheivement";
import AppLayout from "./components/AppLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "Acheivement",
        element: <Achievement />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "Achievement",
        element: <Achievement />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
