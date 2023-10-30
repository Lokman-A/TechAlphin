// import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  // const [fakeData, setFakedata] = useState([]);
  // const first3 = fakeData.slice(0, 3);
  // const [count, setCount] = useState(1);
  // // console.log(first3);

  // const handleIncrease = (e) => {
  //   setCount((previous) => previous + 1);
  // };

  // const handleDecrease = (e) => {
  //   setCount((previous) => previous - 1);
  // };

  // useEffect(() => {
  //   try {
  //     const fetchFakeData = async () => {
  //       const response = await fetch("https://fakestoreapi.com/products");
  //       const data = await response.json();
  //       setFakedata(data);
  //     };
  //     fetchFakeData();
  //   } catch (error) {
  //     console.log(error.massage);
  //   }
  // }, []);

  const { items, status } = useSelector((state) => state.products);

  return (
    <div className="container mx-auto">
      <h1 className="container mx-auto my-5 py-5 text-center text-2xl uppercase text-gray-700 font-semibold">
        Your Cart
      </h1>
      {status && <p className="text-center pb-5">{status}</p>}
      <div className="cart-wrapper grid grid-cols-4 text-2xl font-semibold capitalize text-gray-500  border-b-2">
        <div>products</div>
        <div>unit price</div>
        <div>quantity</div>
        <div>total price</div>
      </div>
      <div className="product-wrapper">
        {items.map((product) => (
          <div className="product-container border-b-2" key={product.id}>
            <div className="image-wrapper grid grid-cols-4">
              <div className="image-wrapper flex">
                <img
                  className="w-12 ml-8"
                  src={product.image}
                  alt={product.title}
                />
                <h5 className="truncate">{product.title}</h5>
                <button className="font-semibold ml-6  text-gray-700 hover:text-rose-200">
                  Remove
                </button>
              </div>
              <p className="flex items-center justify-start ml-5">
                {product.price}
              </p>
              <div className="btns   flex justify-center items-center ">
                <button className="py-3 px-7 hover:bg-slate-100 duration-300 border">
                  +
                </button>
                <span className="py-3 px-7 border ">1</span>
                <button className="py-3 px-7 hover:bg-slate-100 duration-300 border">
                  -
                </button>
              </div>
              <p className="justify-center flex items-center">
                Total
                {" " + product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-lower-section grid grid-cols-2 my-4 ">
        <div className="lower-lef">
          <button className="text-rose-700 border hover:text-gray-500 hover:border-rose-200 duration-300 rounded uppercase py-3 px-5 mt-10">
            Clear Cart
          </button>
        </div>
        <div className="lower-right p-2">
          <div className="flex justify-between mt-10">
            <h1 className="bg-teal-500 py-2 px-4 font-semibold hover:bg-orange-500 hover:text-orange-50 duration-300 shadow-md rounded text-teal-50 uppercase">
              Subtotals
            </h1>
            <h3 className="text-rose-500 text-xl font-semibold">$500</h3>
          </div>
          <div className="flex justify-center items-center flex-col mt-20">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <button className="bg-teal-500 text-2xl w-full tracking-wider text-teal-50 uppercase text-center py-4 px-20 duration-300 rounded mt-3 shadow-lg hover:bg-orange-500 hover:text-orange-50 duration-300">
              Checkout
            </button>
            <button className="text-teal-500 mt-2 capitalize">
              Continue shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
