import React from "react";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import Ellipse from "./ui/Ellipse";
import Home from "./pages/Home";
import AboutUs from "./pages/Aboutus";
import Services from "./pages/Services";
import Achievement from "./pages/Acheivement";

const App = () => {
  return (
    <>
    <Navbar />
    <Home />
    <AboutUs />
    <Services />
    <Achievement/>
     <Footer />
    </>
  );
};

export default App;
