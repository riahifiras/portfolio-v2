import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "../sections/About/About.css";

const Domain = ({ icon, title, tools, description, isActive, onToggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  // Dynamically set the height based on the active state
  useEffect(() => {
    if (isActive) {
      if (contentRef.current) {
        const contentHeight = contentRef.current.scrollHeight;
        setHeight(`${contentHeight}px`);

        const timer = setTimeout(() => {
          setHeight(`${contentRef.current.scrollHeight}px`);
        }, 500);

        return () => clearTimeout(timer);
      }
    } else {
      if (contentRef.current) {
        const contentHeight = contentRef.current.scrollHeight;
        setHeight(`${contentHeight}px`);

        requestAnimationFrame(() => {
          setHeight("0px");
        });
      }
    }
  }, [isActive]);

  return (
    <div
      className={`w-[90%] shadow-lg bg-gray-800 text-white rounded-[40px] relative transition-all duration-500 ease-in-out`}
    >
      <div
        className={`flex justify-between px-10 w-full h-[100px] items-center transition-all duration-300 ease-in-out`}
        onClick={onToggle}
      >
        <Image src={icon} alt={title} className="h-10 w-auto" loading="lazy"/>
        <h1 className="w-[70%] font-semibold text-xl">{title}</h1>
        <IoIosArrowDown
          className={`text-2xl transition-transform ${
            isActive ? "-rotate-90" : "rotate-0"
          }`}
        />
      </div>

      {/* Expanding/collapsing content */}
      <div
        ref={contentRef}
        className="overflow-hidden px-10 transition-all duration-500 ease-in-out"
        style={{ height }}
      >
        <p className="pb-2 text-sm">{description}</p>
        <h2 className="pb-2 text-md">Tools I use</h2>
        <div className="pb-4 flex gap-2 w-full flex-wrap">
          {tools.map((pic, index) => (
            <Image key={index} className="w-6 h-auto" src={pic} alt="" loading="lazy"/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Domain;
