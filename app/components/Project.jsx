import { useState } from "react";
import Image from "next/image";
import ProjectPopup from "./ProjectPopup";

const Project = ({ showPopup, openPopup, image, url, name }) => {
  // console.log(showPopup);
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className={`w-[100%] h-auto transition duration-500 relative`}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <Image 
          src={image}
          alt="project"
          className="rounded-xl shadow-lg transition duration-200 cursor-pointer aspect-video object-cover w-full h-auto"
          style={isHovered ? { filter: "contrast(0.7) brightness(0.4)" } : {}}
          loading="lazy"
        />
        {isHovered && (
          <div className="absolute inset-0 flex flex-col gap-6 items-center justify-center bg-black bg-opacity-0 transition-opacity duration-500">
            <p className="text-white text-xl font-semibold text-center cursor-default">
              {name}
            </p>
            <button
              className="flex justify-center items-center h-10 w-36 mt-6 rounded-full bg-[#cbd4d4] text-black hover:bg-slate-300 text-md font-semibold transition duration-200 cursor-pointer"
              onClick={openPopup}
            >
              See more
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Project;
