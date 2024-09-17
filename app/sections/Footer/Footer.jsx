import React from 'react'
import Offer from '../../components/Offer'
import ContactLinks from '../../components/ContactLinks/ContactLinks'
import './Footer.css'

const Footer = () => {
  return (
    <div id='Contact' className='bg-blue-700 text-white lg:h-44 w-full'>
        <Offer/>
        <div className='flex flex-col mx-auto gap-10 bg-blue-700'>
          <p className='ml-auto mr-auto'>Made with love and passion, :D</p>
          <ContactLinks/>
        </div>
        
    </div>
  )
}

export default Footer