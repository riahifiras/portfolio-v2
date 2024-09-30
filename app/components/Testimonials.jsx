'use client'

import { useState, useEffect, useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeContext'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CTO",
    company: "TechInnovate",
    testimonial: "Firas is an exceptional developer. His ability to solve complex problems and deliver high-quality code is truly impressive. He's been a valuable asset to our team.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Project Manager",
    company: "DataDrive Solutions",
    testimonial: "Working with Firas has been a great experience. His attention to detail and commitment to meeting deadlines make him a reliable and efficient team member.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Lead Designer",
    company: "CreativeEdge Studios",
    testimonial: "Firas has an excellent eye for design implementation. His ability to translate our designs into functional, responsive websites is outstanding.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 4,
    name: "David Lee",
    position: "Senior Developer",
    company: "CodeCraft Inc.",
    testimonial: "Collaborating with Firas has been a pleasure. His innovative approaches to problem-solving have significantly improved our project outcomes.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 5,
    name: "Sophia Patel",
    position: "UX Researcher",
    company: "UserFirst Design",
    testimonial: "Firas's ability to understand and implement user-centric designs is remarkable. He consistently delivers interfaces that are both beautiful and functional.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 6,
    name: "Alex Thompson",
    position: "Tech Lead",
    company: "InnovateTech Solutions",
    testimonial: "Firas's technical skills are top-notch. He's not just a coder, but a true problem solver who always brings valuable insights to the team.",
    image: "/placeholder.svg?height=100&width=100"
  }
]

export default function Testimonials() {
  const { darkMode } = useContext(DarkModeContext)
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonials = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % testimonials.length)
  }

  const prevTestimonials = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonials()
    }, 5000) // Change testimonials every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div id="Testimonials" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-600">What People Say</h2>
        <div className="relative max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={prevTestimonials}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6 text-blue-600" />
            </button>
            <button
              onClick={nextTestimonials}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </button>
          </div>
          <div className="flex space-x-6 transition-all duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-1/3 flex-shrink-0">
                <div className="bg-gray-100 rounded-lg shadow-lg p-6 h-full flex flex-col">
                  <Quote className="w-8 h-8 text-blue-600 opacity-20 mb-4" />
                  <p className="text-gray-700 mb-4 flex-grow italic">"{testimonial.testimonial}"</p>
                  <div className="flex items-center mt-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-600 text-sm">
                        {testimonial.position} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}