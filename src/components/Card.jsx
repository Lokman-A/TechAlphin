import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/cartSlice/cartSlice";

const Card = ({ product }) => {
  const navigateToCart = useNavigate();
  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
    navigateToCart("/cart");
  };
  return (
    <div className="card-wrapper shadow-xl rounded-xl overflow-hidden p-3">
      <div className="image-wrapper h-auto w-40 items-center justify-center flex pt-2">
        <img src={product.image} alt={product.title} />
      </div>
      <p className="uppercase justify-center items-center py-2 flex text-orange-500 font-semibold ">
        {product.category}
      </p>
      <h1 className="uppercase pb-2 text-blue-400 truncate font-semibold text-xl">
        {product.title}
      </h1>

      <div className="btn-price flex justify-between items-center">
        <p className="text-rose-500 text-xl font-semibold text-center">
          ${product.price}
        </p>
        <button
          onClick={() => addToCartHandler(product)}
          className="uppercase py-3 px-5 bg-violet-700 rounded-md text-violet-50 hover:bg-orange-500 hover:text-orange-50 duration-300 shadow-xl"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
