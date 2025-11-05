import React, { useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import './ValuePropositions.css'

const ValueCard = ({ value, index }) => {
    const [cardRef, , hasIntersected] = useIntersectionObserver()
    const [isHovered, setIsHovered] = useState(false)
    
    return (
        <div 
            ref={cardRef}
            className={`value-card ${hasIntersected ? 'fade-in' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`card-icon ${isHovered ? 'icon-hover' : ''}`}>
                {value.icon}
            </div>
            <h3 className="card-title">{value.title}</h3>
            <p className="card-description">{value.description}</p>
            <ul className="card-features">
                {value.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                ))}
            </ul>
        </div>
    )
}

const ValuePropositions = () => {
    const values = [
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M24 8C15.16 8 8 15.16 8 24C8 32.84 15.16 40 24 40C32.84 40 40 32.84 40 24C40 15.16 32.84 8 24 8Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M24 16L28 20L24 24L20 20L24 16Z" fill="currentColor"/>
                    <path d="M24 28L28 32L24 36L20 32L24 28Z" fill="currentColor"/>
                </svg>
            ),
            title: "Agents That Build Themselves",
            description: "Describe what you need, and our platform automatically generates specialized AI agents tailored for your customers.",
            features: [
                "No manual agent configuration",
                "Automatic tool selection",
                "Context-aware for your users"
            ]
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="8" y="12" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 20L22 26L32 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="12" cy="12" r="2" fill="currentColor"/>
                    <circle cx="36" cy="12" r="2" fill="currentColor"/>
                    <circle cx="12" cy="36" r="2" fill="currentColor"/>
                    <circle cx="36" cy="36" r="2" fill="currentColor"/>
                </svg>
            ),
            title: "White-Label Platform",
            description: "Deploy AI agents under your brand. Perfect for merchants building customer-facing AI experiences.",
            features: [
                "Custom branding",
                "Multi-tenant support",
                "Namespace isolation"
            ]
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2"/>
                    <path d="M24 8V24L32 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="24" cy="24" r="3" fill="currentColor"/>
                </svg>
            ),
            title: "Automated Learning & Adaptation",
            description: "Agents learn from every customer interaction, adapt based on feedback, and improve workflows automatically—no manual updates needed. Memory-driven prompt optimization updates agents continuously.",
            features: [
                "Feedback-driven optimization",
                "Memory-powered agent updates",
                "Automatic workflow improvements",
                "Continuous prompt optimization"
            ]
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="8" y="8" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <rect x="28" y="8" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <rect x="8" y="28" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <rect x="28" y="28" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M20 14L28 14M20 34L28 34M14 20L14 28M34 20L34 28" stroke="currentColor" strokeWidth="2"/>
                </svg>
            ),
            title: "Enterprise-Ready Workflows",
            description: "Build complex, multi-step workflows that orchestrate agents, handle dependencies, and scale with your business needs.",
            features: [
                "Visual workflow builder",
                "Dependency management",
                "Error handling & recovery"
            ]
        }
    ]

    return (
        <section className="section value-props" id="features">
            <div className="container">
                <h2 className="section-title">Why Choose Liquid AI</h2>
                <p className="section-subtitle">
                    The only platform that lets merchants build intelligent AI experiences for their customers—with automated learning built-in
                </p>
                <div className="value-cards">
                    {values.map((value, index) => (
                        <ValueCard key={index} value={value} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ValuePropositions

