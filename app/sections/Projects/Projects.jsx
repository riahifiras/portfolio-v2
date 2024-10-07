'use client'

import { useState, useEffect, useContext, useRef } from 'react'
import { DarkModeContext } from '../../context/DarkModeContext'
import ProjectsSlider from '../../components/ProjectsSlider'
import Project from '../../components/Project'
import ProjectPopup from '../../components/ProjectPopup'
import { projects } from '../../data'
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'

const PROJECTS_PER_PAGE = 9

export default function Projects() {
  const categories = ['All', 'Web', 'Mobile', 'Desktop', 'Game dev', 'Embedded systems', 'Cybersecurity']

  const [isSmall, setIsSmall] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [selectedProject, setSelectedProject] = useState({})
  const [filter, setFilter] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { darkMode } = useContext(DarkModeContext)
  const dropdownRef = useRef(null)

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter))

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE)

  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  )

  const openPopup = (project) => {
    setSelectedProject(
      {...project}
    )
    setShowPopup(true)
  }
  
  const closePopup = () => {
    setShowPopup(false)
  }

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth <= 768
      setIsSmall(isSmallScreen)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [filter])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleCategorySelect = (category) => {
    setFilter(category)
    setIsDropdownOpen(false)
  }

  return (
    <div id='Projects' className={`${darkMode ? "bg-[#cbd4d4]" : "bg-[#16181d]"}  flex flex-col lg:text-center text-left items-center lg:min-h-screen -mt-28 lg:gap-10 gap-6 py-10`}>
      {showPopup && <ProjectPopup info={selectedProject} onClose={closePopup} />}
      <hr className='border-gray-400 rounded-full w-[90%]' />

      <h1 className={`lg:text-6xl text-5xl font-semibold ${darkMode ? "text-black" : "text-white"}`}>My recent work</h1>
      <h3 className={`lg:text-xl text-center ${darkMode ? "text-black" : "text-white"}`}>Here are a few projects I&#39;ve worked on. Want to see more? <a className='text-blue-700' href="#Contact">Contact me</a>.</h3>

      {isSmall ? (
        <div className="relative w-48" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className={`flex items-center justify-between w-full px-4 py-2 text-left bg-gray-800 text-white
            rounded-md focus:outline-none transition-colors duration-200`}
          >
            <span>{filter}</span>
            <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
          </button>
          <div 
            className={`absolute z-10 w-full mt-1 bg-gray-800 rounded-md shadow-lg overflow-hidden transition-all duration-200 ease-in-out ${
              isDropdownOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`block w-full text-left px-4 py-2 text-white bg-gray-800 hover:bg-gray-700
                } ${filter === category ? 'font-bold' : ''} transition-colors duration-200`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center space-x-4 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`text-xl px-4 py-2 rounded-md ${
                filter === category
                  ? 'text-blue-700 font-bold'
                  : `${darkMode ? 'text-black ' : 'text-white '}`
              } transition-colors duration-200`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {isSmall ? (
        <ProjectsSlider showPopup={showPopup} openPopup={openPopup} projects={filteredProjects} />
      ) : (
        <>
          <div className="w-[60%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {paginatedProjects.map((project, index) => (
              <Project
                key={index}
                showPopup={showPopup}
                openPopup={() => openPopup(project)}
                image={project.image}
                name={project.name}
                url={project.url}
                description={project.description}
              />
            ))}
          </div>
          {totalPages > 1 && (
            <div className="flex items-center justify-center mt-6 space-x-4">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`p-2 rounded-full ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : `${darkMode ? 'hover:bg-white/10' : 'hover:bg-black/10'}`} transition-colors duration-200`}
                aria-label="Previous page"
              >
                <ChevronLeft className={darkMode ? "text-black" : "text-white"} />
              </button>
              <span className={`text-lg ${darkMode ? "text-black" : "text-white"}`}>
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-full ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : `${darkMode ? 'hover:bg-white/10' : 'hover:bg-black/10'}`} transition-colors duration-200`}
                aria-label="Next page"
              >
                <ChevronRight className={darkMode ? "text-black" : "text-white"} />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}