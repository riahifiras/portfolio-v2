import { useState, useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeContext'
import { ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Software Development",
    excerpt: "Exploring how artificial intelligence is reshaping the landscape of coding and software engineering.",
    date: "2023-09-30",
    readTime: "5 min read",
    category: "Technology"
  },
  {
    id: 2,
    title: "Building Scalable Web Applications with Next.js",
    excerpt: "A deep dive into the benefits of using Next.js for creating performant and scalable web applications.",
    date: "2023-09-25",
    readTime: "7 min read",
    category: "Web Development"
  },
  {
    id: 3,
    title: "The Importance of Cybersecurity in Modern Software",
    excerpt: "Discussing the critical role of cybersecurity in today's software development practices.",
    date: "2023-09-20",
    readTime: "6 min read",
    category: "Security"
  },
  {
    id: 4,
    title: "The Future of AI in Software Development",
    excerpt: "Exploring how artificial intelligence is reshaping the landscape of coding and software engineering.",
    date: "2023-09-30",
    readTime: "5 min read",
    category: "Technology"
  },
  {
    id: 5,
    title: "Building Scalable Web Applications with Next.js",
    excerpt: "A deep dive into the benefits of using Next.js for creating performant and scalable web applications.",
    date: "2023-09-25",
    readTime: "7 min read",
    category: "Web Development"
  },
  {
    id: 6,
    title: "The Importance of Cybersecurity in Modern Software",
    excerpt: "Discussing the critical role of cybersecurity in today's software development practices.",
    date: "2023-09-20",
    readTime: "6 min read",
    category: "Security"
  }
]

export default function Blogs() {
  const { darkMode } = useContext(DarkModeContext)
  const [hoveredPost, setHoveredPost] = useState(null)

  return (
    <div id="Blogs" className={`${!darkMode ? "bg-[#16181d] text-white" : "bg-[#cbd4d4] text-black"} mb-40`}>
      <div className="container mx-auto px-4">
      <h1 className={`text-6xl font-semibold mb-10 ${darkMode ? "text-black" : "text-white"}`}>Latest Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="relative bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out"
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
                className={`${
                  !darkMode ? "bg-blue-700" : "bg-blue-600"
                } absolute left-0 right-0 bottom-0 p-4 flex justify-center items-center transition-all duration-300 ease-in-out ${
                  hoveredPost === post.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <span className="text-white mr-2">Read More</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}