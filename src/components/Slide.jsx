import { Link } from "react-router-dom";

const Slide = ({ image }) => {
  return (
    <div className="slide " style={{ backgroundImage: `url(${image.src})` }}>
      <div className=" flex my-16 flex-col items-start justify-center container mx-auto gap-5">
        <h1 className="uppercase text-4xl text-violet-50">{image.headline}</h1>
        <p className=" text-violet-50 w-3/5">{image.body}</p>
        <div className="bg-rose-500 hover:bg-transparent duration-300 py-3 px-5 rounded-sm border-2  ">
          <Link
            to={`/products/${image.cta}`}
            className=" z-[1] uppercase text-violet-50"
          >
            {image.cta}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;
