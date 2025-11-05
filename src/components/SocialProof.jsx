import React from 'react'
import './SocialProof.css'

const SocialProof = () => {
    const logos = [
        { name: 'Stripe', emoji: '💳' },
        { name: 'OpenAI', emoji: '🤖' },
        { name: 'Linear', emoji: '📊' },
        { name: 'Figma', emoji: '🎨' },
        { name: 'Vercel', emoji: '▲' },
    ]

    return (
        <section className="social-proof">
            <div className="container">
                <p className="social-proof-text">Trusted by teams building the future</p>
                <div className="logo-grid">
                    {logos.map((logo, index) => (
                        <div key={index} className="logo-item">
                            <span className="logo-emoji">{logo.emoji}</span>
                            <span className="logo-name">{logo.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SocialProof

