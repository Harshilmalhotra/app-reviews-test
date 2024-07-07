import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './routes/Dashboard'
import VibeCheck from './routes/VibeCheck'
import Sidebar from './components/Sidebar'

import {BrowserRouter as Router,Routes,Route }from'react-router-dom';

export default function App() {
  return (
    <>
    <Sidebar/>
    </>
  )
}


