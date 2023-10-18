import React from "react";
import { useNavigate } from "react-router-dom";

// import { currencyFormatter } from "../utilities/currencyFormatter";

const Card = ({ product }) => {
  const navigateToCart = useNavigate();

  const addToCartHandler = (id) => {
    console.log(id);
    navigateToCart("/cart");
  };
  return (
    <div className="card-wrapper shadow-xl rounded-xl overflow-hidden p-3">
      <div className="image-wrapper pt-2">
        <img src={product.image} alt={product.title} srcset="" />
      </div>
      <p className="uppercase justify-center items-center py-2 flex text-orange-500 font-semibold ">
        {product.category}
      </p>
      <h1 className="uppercase pb-2 text-blue-400 font-semibold text-xl">
        {product.title}
      </h1>

      <div className="btn-price flex justify-between items-center">
        <p className="text-rose-500 text-xl font-semibold text-center">
          ${/* ${currencyFormatter(product.price)} */ product.price}
        </p>
        <button
          onClick={() => addToCartHandler(product.id)}
          className="uppercase py-3 px-5 bg-violet-700 rounded-md text-violet-50 hover:bg-orange-500 hover:text-orange-50 duration-300 shadow-xl"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
