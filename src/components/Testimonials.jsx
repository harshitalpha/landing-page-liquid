import React from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import './Testimonials.css'

const TestimonialCard = ({ quote, author, role, company, index }) => {
    const [cardRef, , hasIntersected] = useIntersectionObserver()
    
    return (
        <div 
            ref={cardRef}
            className={`testimonial-card ${hasIntersected ? 'fade-in' : ''}`}
            style={{ animationDelay: `${index * 0.15}s` }}
        >
            <div className="testimonial-quote">
                <svg className="quote-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.996zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" fill="currentColor" opacity="0.3"/>
                </svg>
                <p>"{quote}"</p>
            </div>
            <div className="testimonial-author">
                <div className="author-info">
                    <div className="author-name">{author}</div>
                    <div className="author-role">{role} at {company}</div>
                </div>
            </div>
        </div>
    )
}

const Testimonials = () => {
    const testimonials = [
        {
            quote: 'Liquid AI transformed how we handle customer support. Our agents learn from every interaction and get better every day. The setup was incredibly simple.',
            author: 'Sarah Chen',
            role: 'CTO',
            company: 'TechCorp'
        },
        {
            quote: 'We built a specialized sales AI in under an hour. It now handles lead qualification and has increased our conversion rate by 40%. Game changer.',
            author: 'Michael Rodriguez',
            role: 'VP of Sales',
            company: 'Growth Inc'
        },
        {
            quote: 'The memory system is incredible. Our legal AI remembers context across conversations and provides consistent, accurate advice. Exactly what we needed.',
            author: 'Emily Watson',
            role: 'Legal Director',
            company: 'LegalTech Solutions'
        }
    ]

    return (
        <section className="testimonials section" id="testimonials">
            <div className="container">
                <div className="testimonials-header">
                    <h2 className="section-title">
                        Trusted by <span className="gradient-text">innovative teams</span>
                    </h2>
                    <p className="section-subtitle">
                        See what customers are saying about Liquid AI
                    </p>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials

