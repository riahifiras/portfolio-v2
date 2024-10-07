"use client"

import React, { useRef, useEffect, useContext } from 'react'
import { X } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { DarkModeContext } from './context/DarkModeContext'

const BlogPopup = ({ isOpen, onClose, post }) => {
    const { darkMode } = useContext(DarkModeContext);
    const popupRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
            <div 
                ref={popupRef} 
                className={`${
                    !darkMode ? 'bg-gray-800' : 'bg-gray-100'
                } rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col`}
            >
                <div className={`sticky top-0 ${
                    !darkMode ? 'bg-gray-900' : 'bg-white'
                } p-4 flex justify-between items-center border-b ${
                    !darkMode ? 'border-gray-700' : 'border-gray-200'
                }`}>
                    <h2 className={`text-2xl font-bold ${
                        !darkMode ? 'text-white' : 'text-black'
                    }`}>{post.title}</h2>
                    <button
                        onClick={onClose}
                        className={`${
                            !darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <div className="p-6 overflow-y-auto flex-grow">
                    <ReactMarkdown 
                        className={`prose ${!darkMode ? 'prose-invert' : ''} max-w-none`}
                        components={{
                            h1: ({node, ...props}) => <h1 className={`text-3xl font-bold ${
                                !darkMode ? 'text-white' : 'text-black'
                            } mb-4`} {...props} />,
                            h2: ({node, ...props}) => <h2 className={`text-2xl font-semibold ${
                                !darkMode ? 'text-white' : 'text-black'
                            } mt-6 mb-3`} {...props} />,
                            p: ({node, ...props}) => <p className={`${
                                !darkMode ? 'text-gray-300' : 'text-gray-700'
                            } mb-4`} {...props} />,
                            a: ({node, ...props}) => <a className={`${
                                !darkMode ? 'text-blue-400' : 'text-blue-600'
                            } hover:underline`} {...props} />,
                            ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4" {...props} />,
                            ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4" {...props} />,
                            code: ({node, inline, className, children, ...props}) => {
                                const match = /language-(\w+)/.exec(className || '')
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        style={vscDarkPlus}
                                        language={match[1]}
                                        PreTag="div"
                                        className="rounded-md"
                                        {...props}
                                    >
                                        {String(children).replace(/\n$/, '')}
                                    </SyntaxHighlighter>
                                ) : (
                                    <code className={`${
                                        !darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-800'
                                    } rounded px-1 py-0.5`} {...props}>
                                        {children}
                                    </code>
                                )
                            },
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    )
}

export default BlogPopup