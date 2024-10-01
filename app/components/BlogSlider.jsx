import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Project from './Project'
import { blogs } from "../data";
import Blog from "../Blog";

const BlogSlider = () => {
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
    return (
        <div className="slider-container w-full lg:w-[50%]">
            <Slider {...settings}>
                {blogs.map((blog, index) => {
                    return (
                        <Blog post={blog}/>
                    )
                })}
            </Slider>
        </div>
    )
}

export default BlogSlider