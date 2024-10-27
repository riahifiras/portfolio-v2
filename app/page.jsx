"use client"
import React from 'react'
import App from './App.jsx'
import DarkModeProvider from './context/DarkModeContext.jsx';
import './index.css'


export default function Home() {


  return (
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  );
}