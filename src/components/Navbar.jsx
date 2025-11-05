import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (e, href) => {
        e.preventDefault()
        setMobileMenuOpen(false)
        if (href.startsWith('#')) {
            const element = document.querySelector(href)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        }
    }

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="nav-content">
                    <div className="logo">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <circle cx="16" cy="16" r="14" stroke="url(#gradient)" strokeWidth="2"/>
                            <path d="M12 16 L16 12 L20 16 L16 20 Z" fill="url(#gradient)"/>
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{stopColor:'#6366f1',stopOpacity:1}} />
                                    <stop offset="100%" style={{stopColor:'#8b5cf6',stopOpacity:1}} />
                                </linearGradient>
                            </defs>
                        </svg>
                        <span className="logo-text">Liquid AI</span>
                    </div>
                    <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                        <li><a href="#features" onClick={(e) => handleNavClick(e, '#features')}>Features</a></li>
                        <li><a href="#how-it-works" onClick={(e) => handleNavClick(e, '#how-it-works')}>How It Works</a></li>
                        <li><a href="#use-cases" onClick={(e) => handleNavClick(e, '#use-cases')}>Use Cases</a></li>
                        <li><a href="#waitlist" onClick={(e) => handleNavClick(e, '#waitlist')} className="btn-primary">Get Started</a></li>
                    </ul>
                    <button 
                        className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
