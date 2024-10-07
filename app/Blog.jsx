"use client"

import { useContext, useState } from 'react'
import { DarkModeContext } from './context/DarkModeContext'
import { ArrowRight } from 'lucide-react'
import BlogPopup from './BlogPopup'


const Blog = ({ post }) => {
    const { darkMode } = useContext(DarkModeContext);
    const [hoveredPost, setHoveredPost] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
        setIsOpen(false);
        document.body.style.overflow = 'unset';
    };

    return (
        <>
            <div
            key={post.id}
            className="relative bg-gray-800 rounded-lg lg:mx-0 h-80 mx-4 shadow-md overflow-hidden transition-all duration-300 ease-in-out"
            onMouseEnter={() => setHoveredPost(post.id)}
            onMouseLeave={() => setHoveredPost(null)}
        >
            <div className="p-6 mb-12">
                <div className={`text-md ${!darkMode ? "text-blue-400" : "text-blue-600"} mb-2`}>{post.category}</div>
                <h3 className="text-white text-2xl font-semibold mb-2">{post.title}</h3>
                <p className={`text-white mb-4`}>{post.excerpt}</p>
                <div className="flex justify-between items-center">
                    <span className={`text-md ${!darkMode ? "text-gray-200" : "text-gray-400"}`}>{post.date}</span>
                    <span className={`text-md ${!darkMode ? "text-gray-200" : "text-gray-400"}`}>{post.readTime}</span>
                </div>
            </div>
                <div
                    className={`bg-blue-600 absolute left-0 right-0 bottom-0 p-4 flex justify-center items-center transition-all duration-300 ease-in-out ${
                        hoveredPost === post.id ? "opacity-100" : "opacity-0"
                    } cursor-pointer`}
                    onClick={handleOpenModal}
                >
                    <span className="text-white mr-2">Read More</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                </div>
            </div>

            <BlogPopup
                isOpen={isOpen}
                onClose={handleCloseModal}
                post={post}
            />
        </>
    )
}

export default Blog