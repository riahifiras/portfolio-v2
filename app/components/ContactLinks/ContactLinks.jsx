import React from 'react'
import { FaTwitter, FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const ContactLinks = () => {
  return (
    <nav className='flex flex-row justify-around items-center mx-auto w-72 lg:w-96 mb-6'>
        <button onClick={() => window.open("https://www.facebook.com/riahi.firas.505/", "_blank")} className='rounded-full border border-white bg-blue-700 text-white w-12 h-12 flex justify-center items-center hover:bg-white hover:text-blue-700 transition duration-200'><FaFacebook className='w-5 h-5' /></button>
        <button onClick={() => window.open("https://www.linkedin.com/in/firas-riahi-200346246/", "_blank")} className='rounded-full border border-white bg-blue-700 text-white w-12 h-12 flex justify-center items-center hover:bg-white hover:text-blue-700 transition duration-200'><FaLinkedin className='w-5 h-5' /></button>
        <button onClick={() => window.open("https://github.com/riahifiras", "_blank")} className='rounded-full border border-white bg-blue-700 text-white w-12 h-12 flex justify-center items-center hover:bg-white hover:text-blue-700 transition duration-200'><FaGithub className='w-5 h-5' /></button>
        <button onClick={() => window.location.pathname = "/contact"} className='rounded-full border border-white bg-blue-700 text-white w-12 h-12 flex justify-center items-center hover:bg-white hover:text-blue-700 transition duration-200'><FaEnvelope className='w-5 h-5' /></button>
    </nav>
  )
}

export default ContactLinks