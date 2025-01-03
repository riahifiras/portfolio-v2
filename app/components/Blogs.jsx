import { useState, useEffect, useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeContext'
import Blog from '../Blog'
import { blogs } from '../data'
import BlogSlider from './BlogSlider'
import BlogPopup from '../BlogPopup'

export default function Blogs() {
  const { darkMode } = useContext(DarkModeContext)
  const [isSmall, setIsSmall] = useState(false)
  const [selectedPost, setSelectedPost] = useState(null)

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

  const handleOpenPopup = (post) => {
    setSelectedPost(post)
  }

  const handleClosePopup = () => {
    setSelectedPost(null)
  }

  return (
    <>
      <div id="Blogs" className={`${!darkMode ? "bg-[#16181d] text-white" : "bg-[#cbd4d4] text-black"} mb-40 py-10 lg:px-40`}>
        <div className="container mx-auto px-4">
          <h1 className={`lg:text-6xl text-5xl font-semibold mb-10 ${darkMode ? "text-black" : "text-white"}`}>Latest Blog Posts</h1>
          {!isSmall ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((post, index) => (
                <Blog key={index} post={post} onOpenPopup={handleOpenPopup} />
              ))}
            </div>
          ) : (
            <BlogSlider onOpenPopup={handleOpenPopup} />
          )}
        </div>
      </div>
      <BlogPopup
        isOpen={selectedPost !== null}
        onClose={handleClosePopup}
        post={selectedPost}
      />
    </>
  )
}