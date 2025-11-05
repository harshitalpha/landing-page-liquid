import React, { useState } from 'react'
import './FinalCTA.css'

const FinalCTA = () => {
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Waitlist signup:', email)
        alert('Thank you for joining! We\'ll be in touch soon.')
        setEmail('')
    }

    return (
        <section className="final-cta section" id="waitlist">
            <div className="container">
                <div className="cta-content">
                    <h2 className="cta-title">
                        Ready to build your <span className="gradient-text">AI agent?</span>
                    </h2>
                    <p className="cta-description">
                        Join thousands of teams already building the future with Liquid AI. Get early access today.
                    </p>
                    <form className="cta-form" onSubmit={handleSubmit}>
                        <input 
                            type="email" 
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="cta-input"
                        />
                        <button type="submit" className="btn-primary btn-large cta-button">
                            Get Early Access
                        </button>
                    </form>
                    <p className="cta-note">
                        No credit card required • Join the waitlist • Early access coming soon
                    </p>
                </div>
            </div>
        </section>
    )
}

export default FinalCTA
