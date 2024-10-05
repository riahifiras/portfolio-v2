import Image from "next/image";
import { useState, useRef, useEffect, useContext } from "react";
import { DarkModeContext } from '../context/DarkModeContext'
import { RxCross2 } from "react-icons/rx";

export default function ProjectPopup({ info, onClose }) {
    const [isVideo, setIsVideo] = useState(false);
    const [alert, setAlert] = useState({ show: false, message: '' });
    const { darkMode } = useContext(DarkModeContext);
    const popupRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    const showAlert = (message) => {
        setAlert({ show: true, message });
        setTimeout(() => setAlert({ show: false, message: '' }), 3000);
    };

    const handleDemoClick = () => {
        if (info.demo) {
            setIsVideo(true);
        } else {
            showAlert("Demo is not available for this project.");
        }
    };

    const handleGithubClick = () => {
        if (info.url) {
            window.open(info.url, "_blank");
        } else {
            showAlert("GitHub link is not available for this project.");
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="flex bg-white lg:flex-row flex-col lg:h-[540px] h-[80vh] lg:w-[1000px] w-[80%] rounded-lg" ref={popupRef}>
                <div className="relative lg:h-[540px] overflow-hidden h-[100%] w-full bg-transparent">
                    <div style={{ '--image-url': `url(${info.image})` }} className="absolute h-[114%] -top-4 -left-4 w-[114%] bg-[image:var(--image-url)] bg-no-repeat bg-cover bg-center blur-md hue-rotate-0 backdrop-blur-0 backdrop-hue-rotate-0 shadow-none drop-shadow-none grayscale-0 sepia-0" />
                    {isVideo && info.demo ? (
                        <iframe
                            className="absolute w-full lg:h-[540px] h-full"
                            src={info.demo}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Project Demo"
                        />
                    ) : (
                        <div className="relative">
                            <Image className="absolute lg:h-[540px] h-full object-cover blur-lg scale-[1.2] lg:rounded-l-lg rounded-t-lg lg:w-[600px] w-full" src={info.image} alt="" loading="lazy" />
                            <Image className="absolute lg:h-[540px] h-full object-contain lg:rounded-l-lg rounded-t-lg lg:w-[600px] w-full" src={info.image} alt="" loading="lazy" />
                        </div>
                    )}
                    <button
                        className="lg:hidden absolute right-4 top-4 flex justify-center items-center text-xl font-bold h-8 w-8 text-black rounded-full"
                        onClick={onClose}
                    >
                        <RxCross2 />
                    </button>
                </div>

                <div className={`w-full h-full lg:rounded-r-lg rounded-b-lg p-4 flex flex-col gap-4 ${darkMode ? "text-black bg-[#cbd4d4]" : "text-white bg-[#16181d]"}`}>
                    <div className="flex justify-between w-full">
                        <p className="text-xl font-semibold">{info.name}</p>
                        <button
                            className="lg:relative hidden lg:flex justify-center items-center text-xl font-bold h-8 w-8 rounded-full"
                            onClick={onClose}
                        >
                            <RxCross2 />
                        </button>
                    </div>
                    <div className="overflow-y-auto flex-grow flex flex-col gap-4">
                        <p className="text-left text-lg">{info.description}</p>
                        {info.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {info.tags.map((tag, index) => (
                                    <span key={index} className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">{tag}</span>
                                ))}
                            </div>
                        )}
                        {info.technologies.length > 0 && (
                            <div className="">
                                <p className="text-left font-semibold mb-2">Tech stack:</p>
                                <div className="flex gap-4 flex-wrap">
                                    {info.technologies.map((tech, index) => (
                                        <div key={index} className="relative group">
                                            <div className="flex justify-center items-center">
                                                <Image
                                                    src={tech.icon}
                                                    alt={tech.name}
                                                    width={48}
                                                    height={48}
                                                    className="transition-transform duration-300 transform group-hover:scale-110"
                                                />
                                            </div>
                                            <span className="absolute -bottom-1 left-1/2 transform translate-y-6 -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                                                {tech.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {info.collaborators.length > 0 && (
                            <div>
                                <p className="text-left font-semibold mb-2">Collaborators:</p>
                                <div className="flex flex-wrap gap-4">
                                    {info.collaborators.map((collaborator, index) => (
                                        <div key={index} className="relative group">
                                            <Image
                                                src={collaborator.picture}
                                                alt={collaborator.name}
                                                width={60}
                                                height={60}
                                                className="rounded-full transition-transform duration-300 transform group-hover:scale-110"
                                            />
                                            <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10 w-max">
                                                <p>{collaborator.name}</p>
                                                <p className="text-xs opacity-75">{collaborator.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {info.usefulDocs.length > 0 && (
                            <div>
                                <p className="font-semibold mb-2">Useful Documents:</p>
                                <ul className="list-disc list-inside space-y-1">
                                    {info.usefulDocs.map((doc, index) => (
                                        <li key={index}>{doc}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    
                    <div className="flex gap-4 mt-4">
                        <button
                            className="flex-1 px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300"
                            onClick={handleDemoClick}
                        >
                            View demo
                        </button>
                        <button
                            className="flex-1 px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-all duration-300"
                            onClick={handleGithubClick}
                        >
                            GitHub
                        </button>
                    </div>
                </div>
            </div>
            {alert.show && (
                <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-300">
                    {alert.message}
                </div>
            )}
        </div>
    );
}