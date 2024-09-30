'use client'

import { useState, useEffect, useContext } from 'react'
import { DarkModeContext } from '../../context/DarkModeContext'
import ProjectsSlider from '../../components/ProjectsSlider'
import Project from '../../components/Project'
import ProjectPopup from '../../components/ProjectPopup'
import { projects } from '../../data'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const PROJECTS_PER_PAGE = 9

export default function Projects() {
  const categories = ['All', 'Web', 'Mobile', 'Desktop', 'Game dev', 'Embedded systems', 'cybersecurity']

  const [isSmall, setIsSmall] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [selectedProject, setSelectedProject] = useState({})
  const [filter, setFilter] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const { darkMode } = useContext(DarkModeContext)

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE)

  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  )

  const openPopup = (image, name, url, description) => {
    setSelectedProject({
      image,
      name,
      url,
      description
    })
    setShowPopup(true)
  }
  
  const closePopup = () => {
    setShowPopup(false)
  }

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth <= 1024
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

  return (
    <div id='Projects' className={`${darkMode ? "bg-[#cbd4d4]" : "bg-[#16181d]"} flex flex-col lg:text-center text-left items-center lg:min-h-screen -mt-28 lg:gap-10 gap-6 py-10`}>
      {showPopup && <ProjectPopup info={selectedProject} onClose={closePopup} />}
      <hr className='border- border-gray-400 rounded-full w-[90%]' />

      <h1 className={`lg:text-6xl text-5xl font-semibold ${darkMode ? "text-black" : "text-white"}`}>My recent work</h1>
      <h3 className={`lg:text-xl text-center ${darkMode ? "text-black" : "text-white"}`}>Here are a few projects I&#39;ve worked on. Want to see more? <a className='text-blue-700' href="#Contact">Contact me</a>.</h3>

      <div className="flex flex-wrap justify-center space-x-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`text-xl px-4 rounded-md ${
              filter === category
                ? 'text-blue-700'
                : `${darkMode ? 'text-black ' : 'text-white'}`
            } transition-colors duration-200`}
          >
            {category}
          </button>
        ))}
      </div>

      {!isSmall ? (
        <>
          <div className="w-[60%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {paginatedProjects.map((project, index) => (
              <Project
                key={index}
                showPopup={showPopup}
                openPopup={() => openPopup(project.image, project.name, project.url, project.description)}
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
                className={`p-2 rounded-full ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
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
                className={`p-2 rounded-full ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
                aria-label="Next page"
              >
                <ChevronRight className={darkMode ? "text-black" : "text-white"} />
              </button>
            </div>
          )}
        </>
      ) : (
        <ProjectsSlider showPopup={showPopup} openPopup={openPopup} projects={filteredProjects} />
      )}
    </div>
  )
}