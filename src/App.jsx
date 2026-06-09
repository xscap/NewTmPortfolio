import React from 'react'
import Navbar from './components/Navigation/Navbar'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'



const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App