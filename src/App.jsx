import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

import Navbar from "./components/Navbar";
import Products from "./Pages/Products";
import Footer from "./components/Footer";
import NotFound from "./Pages/NotFound";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
const App = () => {
  return (
    <>
      <div className="app  min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
