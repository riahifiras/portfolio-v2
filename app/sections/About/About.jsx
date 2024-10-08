import { useContext, useEffect, useState } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import Domain from '../../components/Domain';
import domains from '../../assets/data';
import './About.css'

const About = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [activeIndex, setActiveIndex] = useState(null);

  // Handle the click to open/close a domain
  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div id='About' className={` translate-y-[100vh] mb-[100vh] ${darkMode ? "bg-[#cbd4d4]" : "bg-[#16181d]"}`}>
      <div className='h-fit flex lg:flex-row flex-col lg:gap-10 justify-between bg-blue-700 text-white'>
        <div className='flex flex-col text-left lg:pl-40 lg:pr-20 px-10 lg:w-[52%] w-full justify-center lg:gap-10 gap-6 bg-gray-800 lg:py-0 py-4 '>
          <div className='lg:-translate-y-12 flex flex-col gap-6'>
          <h1 className='slide-in-right text-6xl font-semibold flex items-center'>About<span className='text-blue-700'>&nbsp;me</span></h1>
          <div className='slide-in-right flex flex-col lg:gap-10 gap-4 '>
            <div className='lg:text-xl text-md'>
              I am currently a 3rd year engineering student in <span className='text-blue-700 font-semibold'>computer science</span> at the <span className='text-blue-700 font-semibold'>National School of Computer Science (ENSI)</span> specializing in <span className='text-blue-700 font-semibold'>IoT</span>.
            </div>
            <div className='lg:text-xl text-md'>
              Throughout my academic journey, I have actively engaged in diverse projects spanning various domain, constantly challenging myself to enhance my skills.
            </div>
            <div className='lg:text-xl text-md'>
              I am quietly <span className='text-blue-700 font-semibold'>confident</span>, naturally <span className='text-blue-700 font-semibold'>curious</span>, and perpetually working on improving my chops one project at a time.
            </div>
          </div>
          </div>
        </div>
        <div className='gap-4 lg:w-[40%] w-full py-4 flex flex-col justify-center items-center pb-28'>
          {
            domains.map(({ id, icon, title, tools, description }, index) => (
              <Domain
                key={id}
                index={index + 1}
                icon={icon}
                title={title}
                tools={tools}
                description={description}
                isActive={activeIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default About;
