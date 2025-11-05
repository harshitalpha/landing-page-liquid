import React from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import './HowItWorks.css'

const Step = ({ number, title, description, index }) => {
    const [stepRef, , hasIntersected] = useIntersectionObserver()
    
    return (
        <div 
            ref={stepRef}
            className={`step ${hasIntersected ? 'fade-in' : ''}`}
            style={{ animationDelay: `${index * 0.2}s` }}
        >
            <div className="step-number">{number}</div>
            <div className="step-content">
                <h3 className="step-title">{title}</h3>
                <p className="step-description">{description}</p>
            </div>
        </div>
    )
}

const HowItWorks = () => {
    const steps = [
        {
            number: '01',
            title: 'Describe Your Needs',
            description: 'Simply tell us what you want your AI agent to do. Use natural language - no technical knowledge required.'
        },
        {
            number: '02',
            title: 'Automatic Agent Generation',
            description: 'Our platform analyzes your requirements and automatically creates a specialized AI agent tailored to your needs.'
        },
        {
            number: '03',
            title: 'Deploy & Learn',
            description: 'Your agent goes live immediately and starts learning from every interaction, continuously improving over time.'
        }
    ]

    return (
        <section className="how-it-works section" id="how-it-works">
            <div className="container">
                <div className="how-it-works-header">
                    <h2 className="section-title">
                        How it <span className="gradient-text">works</span>
                    </h2>
                    <p className="section-subtitle">
                        From idea to production in three simple steps
                    </p>
                </div>
                <div className="steps-container">
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <Step {...step} index={index} />
                            {index < steps.length - 1 && (
                                <div className="step-connector">
                                    <div className="connector-line"></div>
                                    <div className="connector-arrow">↓</div>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
