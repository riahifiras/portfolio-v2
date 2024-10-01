import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import Slider from "react-slick";
import { DarkModeContext } from "../context/DarkModeContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PauseOnHover({ set }) {
    const [imageDimensions, setImageDimensions] = useState([]);
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        arrows: false
    };

    useEffect(() => {
        const getImageDimensions = async () => {
            const dimensions = await Promise.all(
                set.map((element) => {
                    return new Promise((resolve) => {
                        const img = new window.Image();
                        img.src = element.image;
                        img.onload = () => {
                            resolve({
                                height: img.naturalHeight,
                                width: img.naturalWidth
                            });
                        };
                    });
                })
            );
            setImageDimensions(dimensions);
        };
        getImageDimensions();
    }, [set]);

    return (
        <div className="h-96 relative slider-container w-[90%] lg:w-[50%]">
            <Slider {...settings}>
                {set.map((element, index) => (
                    <div key={index} className="relative h-full flex w-[80%] justify-between gap-20 items-center ">
                        {/* <p className={`absolute ${darkMode ? "text-black" : "text-white"} h-fit text-center pb-10 px-10 z-50 left-0 right-0 w-full flex justify-center items-center ${darkMode ? 'bg-[#cbd4d4]' : 'bg-[#16181d]'}`}>{element.description}</p> */}
                        <div className="relative shadow-lg aspect-video -my-2">
                            <Image
                                src={element.image}
                                alt="photo"
                                className={`absolute blur-lg object-cover h-full w-full`}
                                loading="lazy"
                            />
                            <Image
                                src={element.image}
                                alt="photo"
                                className={`absolute translate-y-1 object-contain h-full w-full`}
                                loading="lazy"
                            />

                        </div>
                    </div>

                ))}
            </Slider>
        </div>
    );
}

export default PauseOnHover;
