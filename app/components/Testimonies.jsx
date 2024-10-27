'use client'

import React, { useState, useContext } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { DarkModeContext } from '../context/DarkModeContext'
import { testimonies } from '../data'



export default function Testimonials() {
    const { darkMode } = useContext(DarkModeContext);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }

    return (
        <section className=" border-gray-400  bg-transparent lg:px-40 px-10" >
                  <hr className='border-gray-400 rounded-full w-[100%]' />

            <div className="mx-auto pt-12">
                <h1 className={`lg:text-6xl text-5xl text-center font-semibold ${darkMode ? "text-black" : "text-white"}`}>Colleague Testimonies</h1>
                <div
                    className="h-fit mb-32 mt-20"
                >
                    <Slider {...settings}>
                        {testimonies.map((item, index) => (
                            <TestimonyCard key={index} item={item} />
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

function TestimonyCard({ item }) {
    const { darkMode } = useContext(DarkModeContext);
    const [expanded, setExpanded] = useState(false)
    const maxLength = 272

    const toggleExpanded = () => {
        setExpanded(!expanded)
    }

    return (
        <div className={`mx-10`}>
            <div className="flex lg:flex-row flex-col items-center lg:items-start gap-8 min-h-[172px] ">
                <div className="lg:w-1/3">
                    <Image
                        src={item.person.picture}
                        alt={item.person.name}
                        className="rounded-full flex-shrink-0 lg:h-auto lg:w-auto h-32 w-32 object-cover"
                    />
                </div>
                <div className="flex flex-col h-full items-start gap-2 text-left w-full justify-between">
                    <p className={`${!darkMode ? "text-gray-200" : "text-gray-800"} text-sm`}>
                        {expanded ? item.testimony : `${item.testimony.slice(0, maxLength)}${item.testimony.length > maxLength ? '...' : ''}`}
                        {item.testimony.length > maxLength && (
                            <button
                                onClick={toggleExpanded}
                                className="text-blue-500 hover:underline text-sm font-semibold"
                            >
                                {expanded ? 'See Less' : 'See More'}
                            </button>
                        )}
                    </p>

                    <div>
                        <h3 className={`${!darkMode ? "text-gray-200" : "text-gray-800"} font-semibold text-md`}>{item.person.name}</h3>
                        <p className={`${!darkMode ? "text-gray-200" : "text-gray-800"} text-sm`}>{item.person.description}</p>
                        <a
                            href={item.person.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline text-sm"
                        >
                            LinkedIn Profile
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}