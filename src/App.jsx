import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar' // Will be created
import Footer from './components/Footer' // Will be created
import Home from './pages/Home'         // Will be created
import Services from './pages/Services' // Will be created
import Projects from './pages/Projects' // Will be created
import About from './pages/About'       // Will be created
import Contact from './pages/Contact'   // Will be created

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
