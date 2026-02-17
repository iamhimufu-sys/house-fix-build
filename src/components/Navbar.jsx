import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Hammer, Moon, Sun } from 'lucide-react'
import { useDarkMode } from '../context/DarkModeContext'
import '../styles/navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()
    const { isDark, toggleDarkMode } = useDarkMode()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ]

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <Link to="/" className="logo">
                    <Hammer className="logo-icon" size={28} />
                    <span>House Fix & Build</span>
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button onClick={toggleDarkMode} className="dark-mode-toggle" aria-label="Toggle dark mode">
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <a href="tel:+1234567890" className="cta-button-small">
                        <Phone size={16} /> Call Now
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
