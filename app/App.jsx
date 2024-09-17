import { useState, useEffect, useContext } from 'react';
import { DarkModeContext } from './context/DarkModeContext';
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import ParticleBackground from './components/ParticleBackground';
import Header from './sections/Header/Header';
import Front from './sections/Front/Front';
import About from './sections/About/About';
import Interests from './sections/Interests/Interests';
import Projects from './sections/Projects/Projects';
import Footer from './sections/Footer/Footer';

function App() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [buttonAboveFooter, setButtonAboveFooter] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const button = document.getElementById('darkModeButton');
      const footer = document.getElementById('Contact');

      if (button && footer) {
        const buttonRect = button.getBoundingClientRect();
        const footerRect = footer.getBoundingClientRect();
  
        if (buttonRect.top < footerRect.top) {
          setButtonAboveFooter(true);
        } else {
          setButtonAboveFooter(false);
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <button
        id="darkModeButton"
        className={`fixed bottom-4 right-4 z-50 lg:hidden flex justify-center items-center text-2xl shadow-2xl rounded-full h-14 w-14 transition duration-300 ease-in-out ${
          buttonAboveFooter ? 'bg-blue-700 text-white' : 'bg-white text-blue-700'
        }`}
        onClick={toggleDarkMode}
      >
        {darkMode ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
      </button>
      <Header />
      <ParticleBackground />
      <Front />
      <About />
      <div className={`${darkMode ? 'bg-[#cbd4d4]' : 'bg-[#16181d]'}`}>
        <Interests />
        <Projects />
        <Footer id="footer" />
      </div>
    </>
  );
}

export default App;
