import Image from "next/image";
import { useState, useRef, useEffect, useContext } from "react";
import { DarkModeContext } from '../context/DarkModeContext'
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col lg:flex-row" ref={popupRef}>
                <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
                    {isVideo && info.demo ? (
                        <iframe
                            className="w-full h-full"
                            src={info.demo}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Project Demo"
                        />
                    ) : (
                        <div className="relative w-full h-full">
                            <Image
                                src={info.image}
                                alt={info.name}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none"
                            />
                        </div>
                    )}
                    <button
                        className="absolute right-2 top-2 flex justify-center items-center text-xl font-bold h-8 w-8 text-white bg-black bg-opacity-50 rounded-full lg:hidden"
                        onClick={onClose}
                        aria-label="Close"
                    >
                        <RxCross2 />
                    </button>
                </div>

                <div className={`w-full lg:w-1/2 h-full p-4 flex flex-col gap-4 overflow-y-auto ${darkMode ? "text-black bg-[#cbd4d4]" : "text-white bg-[#16181d]"}`}>
                    <div className="flex justify-between w-full">
                        <h2 className="text-xl font-semibold">{info.name}</h2>
                        <button
                            className="hidden lg:flex justify-center items-center text-xl font-bold h-8 w-8 rounded-full"
                            onClick={onClose}
                            aria-label="Close"
                        >
                            <RxCross2 />
                        </button>
                    </div>
                    <p className="text-left text-lg">{info.description}</p>
                    {info.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {info.tags.map((tag, index) => (
                                <span key={index} className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-medium">{tag}</span>
                            ))}
                        </div>
                    )}
                    {info.technologies.length > 0 && (
                        <div>
                            <h3 className="text-left font-semibold mb-2">Tech stack:</h3>
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
                                        <span className="absolute -bottom-1 left-1/2 transform translate-y-6 -translate-x-1/2 bg-gray-700 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {info.collaborators.length > 0 && (
                        <div>
                            <h3 className="text-left font-semibold mb-2">Collaborators:</h3>
                            <div className="flex flex-wrap gap-4">
                                {info.collaborators.map((collaborator, index) => (
                                    <Link href={collaborator.link} key={index} target="_blank" rel="noopener noreferrer">
                                        <div key={index} className="relative group">
                                            <Image
                                                src={collaborator.picture}
                                                alt={collaborator.name}
                                                width={64}
                                                height={64}
                                                className="rounded-full object-cover transition-transform duration-300 transform group-hover:scale-110"
                                            />
                                            <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10 w-max">
                                                <p>{collaborator.name}</p>
                                                <p className="text-xs opacity-75">{collaborator.description}</p>
                                            </div>
                                        </div>
                                    </Link>
                                    
                                ))}
                            </div>
                        </div>
                    )}
                    {info.usefulDocs.length > 0 && (
                        <div>
                            <h3 className="font-semibold mb-2">Useful Documents:</h3>
                            <ul className="list-disc list-inside space-y-1">
                                {info.usefulDocs.map((doc, index) => (
                                    <li key={index}>{doc}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div className="flex gap-4 mt-4">
                        <button
                            className="flex-1 px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300"
                            onClick={handleDemoClick}
                        >
                            View demo
                        </button>
                        <button
                            className="flex-1 px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-all duration-300"
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