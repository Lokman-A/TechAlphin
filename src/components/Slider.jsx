import React from "react";
import "./Slider.css";
const data = [
  {
    id: 1,
    src: "https://www.pexels.com/photo/a-canon-camera-in-close-up-photography-7649578/",
    atl: "",
  },
  {
    id: 2,
    src: "https://www.pexels.com/photo/man-playing-a-video-game-6498310/",
    atl: "Photo by Tima Miroshnichenko from Pexels: ",
  },
  {
    id: 3,
    src: "https://www.pexels.com/photo/canon-camera-2229671/",
    atl: "",
  },

  {
    id: 4,
    src: "https://www.pexels.com/photo/cozy-interior-design-of-a-living-room-7576096/",
    atl: "Photo by Gustavo Galeano Maz from Pexels",
  },
  {
    id: 5,
    src: "https://www.pexels.com/photo/canon-camera-2229671/",
    atl: "",
  },
];

const Slider = () => {
  return (
    <div className="slider">
      {data.map((img) => (
        <div
          className="slide"
          style={{ backgroundImage: `url(${img.src})` }}
          key={img.id}
        >
          {/* {img.src} */}
        </div>
      ))}
    </div>
  );
};

export default Slider;
