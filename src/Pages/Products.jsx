import React, { useEffect, useState } from "react";
import Product from "../components/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="product-section-title">
      <h1 className="container mx-auto my-5  text-center text-2xl uppercase text-gray-700 font-semibold">
        Browse All Products
      </h1>
      <div className="products-wrapper container mx-auto grid grid-cols-2 gap-5 ">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
