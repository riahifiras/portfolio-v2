import Image from "next/image";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PauseOnHover({ set }) {
    const [imageDimensions, setImageDimensions] = useState([]);

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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
        <div className="slider-container w-[90%] lg:w-[50%]">
            <Slider {...settings}>
                {set.map((element, index) => (
                    <div key={index} className="relative shadow-lg aspect-video w-[80%] h-[380px] -m-2 bg-black flex justify-center items-center">
                        <Image
                            src={element.image}
                            alt="photo"
                            className={`absolute blur-lg scale-[1.1] object-cover h-full w-full`}
                            loading="lazy"
                        />
                        <Image
                            src={element.image}
                            alt="photo"
                            className={`absolute translate-y-1 object-contain h-full w-full`}
                            loading="lazy"
                        />
                        
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default PauseOnHover;
