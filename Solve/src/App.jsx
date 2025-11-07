import React from "react";
import { BrowserRouter,createBrowserRouter,RouterProvider } from "react-router-dom";
import Navbar from "./ui/Navbar";
import Errorpage from "./components/Errorpage";
import Footer from "./ui/Footer";
import Ellipse from "./ui/Ellipse";
import Home from "./pages/Home";
import AboutUs from "./pages/Aboutus";
import Services from "./pages/Services";
import Achievement from "./pages/Acheivement";
import AppLayout from "./components/AppLayout";



const router = createBrowserRouter([
  {
  path:"/",
  element:<AppLayout />,
  errorElement:<Errorpage />,
  children : [
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
  ]
  },

]);


const App = () => {
  return (
    <>
   <RouterProvider router={router}>

    </RouterProvider>
    </>
  );
};

export default App;



// import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Country from "./pages/Country";
// import Contact from "./pages/Contact";
// import AppLayout from "./components/AppLayout";
// import Errorpage from "./pages/Errorpage";
// import Countrydetails from "./components/Countrydetails";


// const router = createBrowserRouter([
//   {
//   path:"/",
//   element:<AppLayout />,
//   errorElement:<Errorpage />,
//   children : [
//     {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "about",
//     element: <About />,
//   },
//   {
//     path: "country",
//     element: <Country />,
//   },
//   {
//     path:"country/:id",
//     element:<Countrydetails />,
//   },
//   {
//     path: "contact",
//     element: <Contact />,
//   },
//   ]
//   },

// ]);

// function App() {
//   return (
//     <>
//     <RouterProvider router={router}>

//     </RouterProvider>
//     </>
//   );
// }

// export default App;
