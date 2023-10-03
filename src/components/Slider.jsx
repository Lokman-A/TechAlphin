import React, { useState } from "react";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slide from "./Slide";

const data = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/1787220/pexels-photo-1787220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

    headline: "Two People holding Black Gaming Consoles",
    body: "      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo laudantium libero nesciunt at corrupti qui reprehenderit unde quod quas a sit, asperiores ab facere, blanditiis ut ratione dolore optio magni. Eaque nulla molestias eius. Magnam, laudantium laboriosam atque non fuga beatae maxime distinctio architecto laborum harum repellat eaque, quidem explicabo!",
    cta: "cameras",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/1046639/pexels-photo-1046639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headline: "Headline",
    body: "      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo laudantium libero nesciunt at corrupti qui reprehenderit unde quod quas a sit, asperiores ab facere, blanditiis ut ratione dolore optio magni. Eaque nulla molestias eius. Magnam, laudantium laboriosam atque non fuga beatae maxime distinctio architecto laborum harum repellat eaque, quidem explicabo!",
    cta: "tvs",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headline: "Headline",
    body: "      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo laudantium libero nesciunt at corrupti qui reprehenderit unde quod quas a sit, asperiores ab facere, blanditiis ut ratione dolore optio magni. Eaque nulla molestias eius. Magnam, laudantium laboriosam atque non fuga beatae maxime distinctio architecto laborum harum repellat eaque, quidem explicabo!",
    cta: "consoles",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headline: "Headline",
    body: "      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo laudantium libero nesciunt at corrupti qui reprehenderit unde quod quas a sit, asperiores ab facere, blanditiis ut ratione dolore optio magni. Eaque nulla molestias eius. Magnam, laudantium laboriosam atque non fuga beatae maxime distinctio architecto laborum harum repellat eaque, quidem explicabo!",
    cta: "watches",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headline: "Headline",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo laudantium libero nesciunt at corrupti qui reprehenderit unde quod quas a sit, asperiores ab facere, blanditiis ut ratione dolore optio magni. Eaque nulla molestias eius. Magnam, laudantium laboriosam atque non fuga beatae maxime distinctio architecto laborum harum repellat eaque, quidem explicabo!",
    cta: "headphones",
  },
];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? data.length - 1 : (prevSlide) => prevSlide - 1
    );
  };
  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === data.length - 1 ? 0 : (prevSlide) => prevSlide + 1
    );
  };
  return (
    <div className="relative">
      <div
        className="slider flex duration-1000"
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {data.map((image) => (
          <Slide image={image} key={image.id} />
        ))}
      </div>

      <div className="btns flex gap-5 absolute  z-[1] bottom-40 justify-center items-center w-screen ">
        <button
          onClick={prevSlide}
          className="previous-btn bg-slate-300 py-3 px-6 backdrop-blur-sm m-1 text-xl hover:bg-white/70 hover:text-rose-400 rounded-sm border duration-300"
        >
          <span>
            <BsArrowLeft></BsArrowLeft>
          </span>
        </button>
        <button
          onClick={nextSlide}
          className="next-btn bg-slate-300 py-3 px-6 backdrop-blur-sm m-1 text-xl hover:bg-white/70 hover:text-rose-400 border rounded-sm duration-300 "
        >
          <span>
            <BsArrowRight></BsArrowRight>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
