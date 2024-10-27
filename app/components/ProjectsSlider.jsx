import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Project from './Project'

const ProjectsSlider = ({showPopup, openPopup, projects}) => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        arrows: false
    };
    return (
        <div className="slider-container w-[90%] lg:w-[50%]">
            <Slider {...settings}>
                {projects.map((project, index) => {
                    return(
                        <Project
                            key={index}
                            showPopup={showPopup}
                            openPopup={() => openPopup(project)}
                            image={project.image}
                            name={project.name}
                            url={project.url}
                            description={project.description}
                        />
                    )
                })}
            </Slider>
        </div>
    )
}

export default ProjectsSlider