import React, { useState } from 'react'
import './ComingSoon.css'

const ComingSoon = () => {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email) {
            console.log('Waitlist signup:', email)
            setSubmitted(true)
            setTimeout(() => {
                setSubmitted(false)
                setEmail('')
            }, 3000)
        }
    }

    return (
        <section className="section coming-soon" id="coming-soon">
            <div className="container">
                <div className="coming-soon-content">
                    <div className="coming-soon-badge">
                        <span className="badge-icon">🚀</span>
                        <span className="badge-text">Coming Soon</span>
                    </div>
                    <h2 className="coming-soon-title">
                        We're Building Something
                        <span className="gradient-text"> Extraordinary</span>
                    </h2>
                    <p className="coming-soon-subtitle">
                        Liquid AI Platform is currently in active development. Join our waitlist to be the first to know 
                        when we launch and get early access to the most advanced AI agent platform.
                    </p>
                    <div className="waitlist-form-container">
                        <form className="waitlist-form" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="waitlist-input"
                                disabled={submitted}
                            />
                            <button 
                                type="submit" 
                                className="btn-primary btn-large waitlist-button"
                                disabled={submitted}
                            >
                                {submitted ? '✓ Joined!' : 'Join Waitlist'}
                            </button>
                        </form>
                        {submitted && (
                            <p className="waitlist-success">
                                Thank you! We'll notify you when we launch.
                            </p>
                        )}
                        <div className="waitlist-benefits">
                            <span className="benefit-item">✨ Early access</span>
                            <span className="benefit-item">🎁 Exclusive launch offers</span>
                            <span className="benefit-item">📧 Product updates</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ComingSoon

