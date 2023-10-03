import React from "react";

const Product = ({ product }) => {
  console.log(product);
  return (
    <div className="product border-2  shadow-lg rounded-lg hover:shadow-sm  duration-300">
      <div className=" p-2">
        <div
          className="image-
          
        w-25"
        >
          <img src={product.image} alt={product.title} />
        </div>
        <div className="text-wrapper">
          <p className=" text-orange-500 font-semibold my-2 text-center uppercase ">
            {product.category}
          </p>
          <h3 className="text-2xl text-sky-500 h-[4.5rem] overflow-hidden ">
            {product.title}
          </h3>
          <p>{product.detail}</p>
          <div className="price-btn-wrapper relative flex justify-between my-2  items-center">
            <p className="text-rose-500 font-semibold">${product.price}</p>
            <button className="btn bg-violet-700 text-violet-50 py-3 px-5 rounded-sm shadow-sm">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
