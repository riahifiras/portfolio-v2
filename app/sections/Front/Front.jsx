import Image from "next/image";
import { useState, useEffect, useContext } from 'react';
import { Typewriter, Cursor } from 'react-simple-typewriter'
import { DarkModeContext } from "../../context/DarkModeContext"
import { me } from '../../Images';
import './Front.css'


const Front = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const {darkMode} = useContext(DarkModeContext);

  const handleScroll = () => {
    const currentPosition = window.scrollY;
    setScrollPosition(currentPosition);

    // Calculate the scroll position based on viewport height
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const scrollThreshold = 100 * vh / 100; // Change 100 to the desired percentage

    if (currentPosition > scrollThreshold) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `https://drive.google.com/file/d/1_3kyVvmDAoKKDDaPfubXJuCEJT_ZszoF/view?usp=sharing`;
    link.target = '_blank';
    link.click();
  };

  const handleContact = () => {
    const link = document.createElement('a');
    link.href = `#Contact`;
    link.click();
  };

  return (
    <div id='Home'>
      {!scrolling ? (
        <div className='w-full h-screen -mt-20 fixed'>
          <div className='w-full h-screen translate-y-24 lg:translate-y-0 flex justify-between items-center flex-col lg:flex-row relative'>
            <div className='flex flex-col lg:ml-40 items-center text-left lg:items-start lg:w-1/2 lg:slide-in-right'>
              <h1 className='flex flex-col lg:gap-4 gap-8 lg:text-5xl md:text-3xl text-2xl font-semibold font-euro unselectable'><span className={darkMode ? "text-black" : "text-white"}>Hi, I&#39;m</span><span className='whitespace-nowrap 2xl:text-[140px] xl:text-[120px] lg:[110px] md:text-[100px] text-[60px] lg:mb-0 mb-4'><span className={darkMode ? "text-black" : "text-white"}>Firas </span><span className='text-blue-700'>Riahi</span></span></h1>
              <br />
              <h3 className='unselectable lg:text-2xl text-xl font-[500] w-full'>
              <span className={darkMode ? "text-black" : "text-white"}>I do</span>
                <span className='text-blue-700'>
                  <Typewriter
                    words={[' Web & mobile development', ' Game development', ' Graphic design', ' Computer aided design']}
                    loop={true}
                  />
                </span>
                <Cursor />
              </h3>
              <div className=" flex lg:gap-4 gap-2 flex-row mt-6">
              <button onClick={handleContact} className='unselectable z-30 flex justify-center items-center h-12 w-36 rounded-full bg-gray-800 text-white text-xl font-semibold hover:bg-gray-700 transition duration-200'>Contact me</button>
              <button onClick={handleDownload} className='unselectable z-30 flex justify-center items-center h-12 w-36 rounded-full bg-blue-700 text-white text-xl font-semibold hover:bg-blue-600 transition duration-200'>Get Resume</button>
              </div>
            </div>
            <Image src={me} alt="" className='unselectable  -translate-y-20 lg:-translate-y-0 absolute lg:right-40 -bottom-16 lg:h-[80%] xl:h-[90%] h-[60%] w-auto' loading="lazy"/>
          </div>
        </div>
      ) : (
        <div className='w-full relative bg-[#cbd4d4]'></div>
      )}

    </div>
  );

};

export default Front;