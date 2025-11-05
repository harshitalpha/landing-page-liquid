import React, { useState } from 'react'
import './Footer.css'

const Footer = () => {
    const [email, setEmail] = useState('')

    const handleNewsletterSubmit = (e) => {
        e.preventDefault()
        console.log('Newsletter subscription:', email)
        alert('Thank you for subscribing!')
        setEmail('')
    }

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-main">
                        <div className="footer-brand">
                            <div className="footer-logo">
                                <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                                    <circle cx="16" cy="16" r="14" stroke="url(#footerGradient)" strokeWidth="2"/>
                                    <path d="M12 16 L16 12 L20 16 L16 20 Z" fill="url(#footerGradient)"/>
                                    <defs>
                                        <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style={{stopColor:'#6366f1',stopOpacity:1}} />
                                            <stop offset="100%" style={{stopColor:'#8b5cf6',stopOpacity:1}} />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <span>Liquid AI</span>
                            </div>
                            <p className="footer-description">
                                The fastest path from idea to AI agent.
                            </p>
                        </div>
                        <div className="footer-newsletter" id="waitlist">
                            <h4 className="newsletter-title">Get early access</h4>
                            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required 
                                />
                                <button type="submit" className="btn-primary">Join Waitlist</button>
                            </form>
                        </div>
                    </div>
                    <div className="footer-links-grid">
                        <div className="footer-column">
                            <h4 className="footer-heading">Product</h4>
                            <ul className="footer-links">
                                <li><a href="#features">Features</a></li>
                                <li><a href="#">Documentation</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4 className="footer-heading">Company</h4>
                            <ul className="footer-links">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4 className="footer-heading">Legal</h4>
                            <ul className="footer-links">
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Security</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Liquid AI Platform. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
