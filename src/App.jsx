import React from 'react'
import Navbar from './components/Navigation/Navbar'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'

const Home = () => (
  <main style={{ padding: 24 }}>
    <h1>Home</h1>
    <p>Welcome to the portfolio. Use the navigation to view pages.</p>
  </main>
)

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App