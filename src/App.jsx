import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
const App = () => {
  return (
    <>
      <div className="app  min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
